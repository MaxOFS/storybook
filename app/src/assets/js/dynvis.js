// dynvis v0.10.0 Copyright 2025 Bundesamt für Statistik
(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
typeof define === 'function' && define.amd ? define(['exports'], factory) :
(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.dynvis = global.dynvis || {}));
})(this, (function (exports) { 'use strict';

var W = "http://www.w3.org/1999/xhtml";
const V = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: W,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function J(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), V.hasOwnProperty(t) ? { space: V[t], local: e } : e;
}
function dt(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === W && t.documentElement.namespaceURI === W ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function ft(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Z(e) {
  var t = J(e);
  return (t.local ? ft : dt)(t);
}
function pt() {
}
function G(e) {
  return e == null ? pt : function() {
    return this.querySelector(e);
  };
}
function gt(e) {
  typeof e != "function" && (e = G(e));
  for (var t = this._groups, n = t.length, i = new Array(n), s = 0; s < n; ++s)
    for (var r = t[s], o = r.length, a = i[s] = new Array(o), u, h, l = 0; l < o; ++l)
      (u = r[l]) && (h = e.call(u, u.__data__, l, r)) && ("__data__" in u && (h.__data__ = u.__data__), a[l] = h);
  return new b(i, this._parents);
}
function _t(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function yt() {
  return [];
}
function bt(e) {
  return e == null ? yt : function() {
    return this.querySelectorAll(e);
  };
}
function mt(e) {
  return function() {
    return _t(e.apply(this, arguments));
  };
}
function vt(e) {
  typeof e == "function" ? e = mt(e) : e = bt(e);
  for (var t = this._groups, n = t.length, i = [], s = [], r = 0; r < n; ++r)
    for (var o = t[r], a = o.length, u, h = 0; h < a; ++h)
      (u = o[h]) && (i.push(e.call(u, u.__data__, h, o)), s.push(u));
  return new b(i, s);
}
function wt(e) {
  return function() {
    return this.matches(e);
  };
}
function K(e) {
  return function(t) {
    return t.matches(e);
  };
}
var St = Array.prototype.find;
function xt(e) {
  return function() {
    return St.call(this.children, e);
  };
}
function Dt() {
  return this.firstElementChild;
}
function At(e) {
  return this.select(e == null ? Dt : xt(typeof e == "function" ? e : K(e)));
}
var Et = Array.prototype.filter;
function Nt() {
  return Array.from(this.children);
}
function Ct(e) {
  return function() {
    return Et.call(this.children, e);
  };
}
function Rt(e) {
  return this.selectAll(e == null ? Nt : Ct(typeof e == "function" ? e : K(e)));
}
function Bt(e) {
  typeof e != "function" && (e = wt(e));
  for (var t = this._groups, n = t.length, i = new Array(n), s = 0; s < n; ++s)
    for (var r = t[s], o = r.length, a = i[s] = [], u, h = 0; h < o; ++h)
      (u = r[h]) && e.call(u, u.__data__, h, r) && a.push(u);
  return new b(i, this._parents);
}
function j(e) {
  return new Array(e.length);
}
function Ut() {
  return new b(this._enter || this._groups.map(j), this._parents);
}
function F(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
F.prototype = {
  constructor: F,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function Tt(e) {
  return function() {
    return e;
  };
}
function Ft(e, t, n, i, s, r) {
  for (var o = 0, a, u = t.length, h = r.length; o < h; ++o)
    (a = t[o]) ? (a.__data__ = r[o], i[o] = a) : n[o] = new F(e, r[o]);
  for (; o < u; ++o)
    (a = t[o]) && (s[o] = a);
}
function Ot(e, t, n, i, s, r, o) {
  var a, u, h = /* @__PURE__ */ new Map(), l = t.length, c = r.length, d = new Array(l), p;
  for (a = 0; a < l; ++a)
    (u = t[a]) && (d[a] = p = o.call(u, u.__data__, a, t) + "", h.has(p) ? s[a] = u : h.set(p, u));
  for (a = 0; a < c; ++a)
    p = o.call(e, r[a], a, r) + "", (u = h.get(p)) ? (i[a] = u, u.__data__ = r[a], h.delete(p)) : n[a] = new F(e, r[a]);
  for (a = 0; a < l; ++a)
    (u = t[a]) && h.get(d[a]) === u && (s[a] = u);
}
function zt(e) {
  return e.__data__;
}
function It(e, t) {
  if (!arguments.length) return Array.from(this, zt);
  var n = t ? Ot : Ft, i = this._parents, s = this._groups;
  typeof e != "function" && (e = Tt(e));
  for (var r = s.length, o = new Array(r), a = new Array(r), u = new Array(r), h = 0; h < r; ++h) {
    var l = i[h], c = s[h], d = c.length, p = Lt(e.call(l, l && l.__data__, h, i)), f = p.length, g = a[h] = new Array(f), v = o[h] = new Array(f), w = u[h] = new Array(d);
    n(l, c, g, v, w, p, t);
    for (var S = 0, m = 0, N, D; S < f; ++S)
      if (N = g[S]) {
        for (S >= m && (m = S + 1); !(D = v[m]) && ++m < f; ) ;
        N._next = D || null;
      }
  }
  return o = new b(o, i), o._enter = a, o._exit = u, o;
}
function Lt(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function $t() {
  return new b(this._exit || this._groups.map(j), this._parents);
}
function Wt(e, t, n) {
  var i = this.enter(), s = this, r = this.exit();
  return typeof e == "function" ? (i = e(i), i && (i = i.selection())) : i = i.append(e + ""), t != null && (s = t(s), s && (s = s.selection())), n == null ? r.remove() : n(r), i && s ? i.merge(s).order() : s;
}
function Mt(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, i = t._groups, s = n.length, r = i.length, o = Math.min(s, r), a = new Array(s), u = 0; u < o; ++u)
    for (var h = n[u], l = i[u], c = h.length, d = a[u] = new Array(c), p, f = 0; f < c; ++f)
      (p = h[f] || l[f]) && (d[f] = p);
  for (; u < s; ++u)
    a[u] = n[u];
  return new b(a, this._parents);
}
function Vt() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var i = e[t], s = i.length - 1, r = i[s], o; --s >= 0; )
      (o = i[s]) && (r && o.compareDocumentPosition(r) ^ 4 && r.parentNode.insertBefore(o, r), r = o);
  return this;
}
function Pt(e) {
  e || (e = qt);
  function t(c, d) {
    return c && d ? e(c.__data__, d.__data__) : !c - !d;
  }
  for (var n = this._groups, i = n.length, s = new Array(i), r = 0; r < i; ++r) {
    for (var o = n[r], a = o.length, u = s[r] = new Array(a), h, l = 0; l < a; ++l)
      (h = o[l]) && (u[l] = h);
    u.sort(t);
  }
  return new b(s, this._parents).order();
}
function qt(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Ht() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function kt() {
  return Array.from(this);
}
function Yt() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var i = e[t], s = 0, r = i.length; s < r; ++s) {
      var o = i[s];
      if (o) return o;
    }
  return null;
}
function Jt() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function Zt() {
  return !this.node();
}
function Gt(e) {
  for (var t = this._groups, n = 0, i = t.length; n < i; ++n)
    for (var s = t[n], r = 0, o = s.length, a; r < o; ++r)
      (a = s[r]) && e.call(a, a.__data__, r, s);
  return this;
}
function Kt(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function jt(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Qt(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Xt(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function te(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function ee(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function ne(e, t) {
  var n = J(e);
  if (arguments.length < 2) {
    var i = this.node();
    return n.local ? i.getAttributeNS(n.space, n.local) : i.getAttribute(n);
  }
  return this.each((t == null ? n.local ? jt : Kt : typeof t == "function" ? n.local ? ee : te : n.local ? Xt : Qt)(n, t));
}
function Q(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function ie(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function se(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function re$1(e, t, n) {
  return function() {
    var i = t.apply(this, arguments);
    i == null ? this.style.removeProperty(e) : this.style.setProperty(e, i, n);
  };
}
function oe(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? ie : typeof t == "function" ? re$1 : se)(e, t, n ?? "")) : ae(this.node(), e);
}
function ae(e, t) {
  return e.style.getPropertyValue(t) || Q(e).getComputedStyle(e, null).getPropertyValue(t);
}
function ue(e) {
  return function() {
    delete this[e];
  };
}
function he(e, t) {
  return function() {
    this[e] = t;
  };
}
function ce(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function le(e, t) {
  return arguments.length > 1 ? this.each((t == null ? ue : typeof t == "function" ? ce : he)(e, t)) : this.node()[e];
}
function X(e) {
  return e.trim().split(/^|\s+/);
}
function M(e) {
  return e.classList || new tt(e);
}
function tt(e) {
  this._node = e, this._names = X(e.getAttribute("class") || "");
}
tt.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function et(e, t) {
  for (var n = M(e), i = -1, s = t.length; ++i < s; ) n.add(t[i]);
}
function nt(e, t) {
  for (var n = M(e), i = -1, s = t.length; ++i < s; ) n.remove(t[i]);
}
function de(e) {
  return function() {
    et(this, e);
  };
}
function fe(e) {
  return function() {
    nt(this, e);
  };
}
function pe(e, t) {
  return function() {
    (t.apply(this, arguments) ? et : nt)(this, e);
  };
}
function ge(e, t) {
  var n = X(e + "");
  if (arguments.length < 2) {
    for (var i = M(this.node()), s = -1, r = n.length; ++s < r; ) if (!i.contains(n[s])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? pe : t ? de : fe)(n, t));
}
function _e() {
  this.textContent = "";
}
function ye(e) {
  return function() {
    this.textContent = e;
  };
}
function be(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function me(e) {
  return arguments.length ? this.each(e == null ? _e : (typeof e == "function" ? be : ye)(e)) : this.node().textContent;
}
function ve() {
  this.innerHTML = "";
}
function we(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Se(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function xe(e) {
  return arguments.length ? this.each(e == null ? ve : (typeof e == "function" ? Se : we)(e)) : this.node().innerHTML;
}
function De() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Ae() {
  return this.each(De);
}
function Ee() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Ne() {
  return this.each(Ee);
}
function Ce(e) {
  var t = typeof e == "function" ? e : Z(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Re() {
  return null;
}
function Be(e, t) {
  var n = typeof e == "function" ? e : Z(e), i = t == null ? Re : typeof t == "function" ? t : G(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function Ue() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Te() {
  return this.each(Ue);
}
function Fe() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Oe() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function ze(e) {
  return this.select(e ? Oe : Fe);
}
function Ie(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Le(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function $e(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", i = t.indexOf(".");
    return i >= 0 && (n = t.slice(i + 1), t = t.slice(0, i)), { type: t, name: n };
  });
}
function We(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, i = -1, s = t.length, r; n < s; ++n)
        r = t[n], (!e.type || r.type === e.type) && r.name === e.name ? this.removeEventListener(r.type, r.listener, r.options) : t[++i] = r;
      ++i ? t.length = i : delete this.__on;
    }
  };
}
function Me(e, t, n) {
  return function() {
    var i = this.__on, s, r = Le(t);
    if (i) {
      for (var o = 0, a = i.length; o < a; ++o)
        if ((s = i[o]).type === e.type && s.name === e.name) {
          this.removeEventListener(s.type, s.listener, s.options), this.addEventListener(s.type, s.listener = r, s.options = n), s.value = t;
          return;
        }
    }
    this.addEventListener(e.type, r, n), s = { type: e.type, name: e.name, value: t, listener: r, options: n }, i ? i.push(s) : this.__on = [s];
  };
}
function Ve(e, t, n) {
  var i = $e(e + ""), s, r = i.length, o;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var u = 0, h = a.length, l; u < h; ++u)
        for (s = 0, l = a[u]; s < r; ++s)
          if ((o = i[s]).type === l.type && o.name === l.name)
            return l.value;
    }
    return;
  }
  for (a = t ? Me : We, s = 0; s < r; ++s) this.each(a(i[s], t, n));
  return this;
}
function it(e, t, n) {
  var i = Q(e), s = i.CustomEvent;
  typeof s == "function" ? s = new s(t, n) : (s = i.document.createEvent("Event"), n ? (s.initEvent(t, n.bubbles, n.cancelable), s.detail = n.detail) : s.initEvent(t, !1, !1)), e.dispatchEvent(s);
}
function Pe(e, t) {
  return function() {
    return it(this, e, t);
  };
}
function qe(e, t) {
  return function() {
    return it(this, e, t.apply(this, arguments));
  };
}
function He(e, t) {
  return this.each((typeof t == "function" ? qe : Pe)(e, t));
}
function* ke() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var i = e[t], s = 0, r = i.length, o; s < r; ++s)
      (o = i[s]) && (yield o);
}
var Ye = [null];
function b(e, t) {
  this._groups = e, this._parents = t;
}
function Je() {
  return this;
}
b.prototype = {
  constructor: b,
  select: gt,
  selectAll: vt,
  selectChild: At,
  selectChildren: Rt,
  filter: Bt,
  data: It,
  enter: Ut,
  exit: $t,
  join: Wt,
  merge: Mt,
  selection: Je,
  order: Vt,
  sort: Pt,
  call: Ht,
  nodes: kt,
  node: Yt,
  size: Jt,
  empty: Zt,
  each: Gt,
  attr: ne,
  style: oe,
  property: le,
  classed: ge,
  text: me,
  html: xe,
  raise: Ae,
  lower: Ne,
  append: Ce,
  insert: Be,
  remove: Te,
  clone: ze,
  datum: Ie,
  on: Ve,
  dispatch: He,
  [Symbol.iterator]: ke
};
function E(e) {
  return typeof e == "string" ? new b([[document.querySelector(e)]], [document.documentElement]) : new b([[e]], Ye);
}
const _ = [];
for (let e = 0; e < 256; ++e)
  _.push((e + 256).toString(16).slice(1));
function Ze(e, t = 0) {
  return (_[e[t + 0]] + _[e[t + 1]] + _[e[t + 2]] + _[e[t + 3]] + "-" + _[e[t + 4]] + _[e[t + 5]] + "-" + _[e[t + 6]] + _[e[t + 7]] + "-" + _[e[t + 8]] + _[e[t + 9]] + "-" + _[e[t + 10]] + _[e[t + 11]] + _[e[t + 12]] + _[e[t + 13]] + _[e[t + 14]] + _[e[t + 15]]).toLowerCase();
}
let z;
const Ge = new Uint8Array(16);
function Ke() {
  if (!z) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    z = crypto.getRandomValues.bind(crypto);
  }
  return z(Ge);
}
const je = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), P = { randomUUID: je };
function st(e, t, n) {
  if (P.randomUUID && !e)
    return P.randomUUID();
  e = e || {};
  const i = e.random ?? e.rng?.() ?? Ke();
  if (i.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, Ze(i);
}
class Qe {
  // Default style: no customization compared to the library
  static style = {};
  static async loadStyleConfig(t) {
    const n = await fetch(t);
    if (!n.ok)
      throw new Error(`Error loading style config: ${n.status}`);
    this.style = await n.json();
  }
}
class Xe {
  value;
  constructor(t) {
    this.value = t;
  }
  get(t, n, i) {
    return x$1(this.value, t, n, i);
  }
}
function x$1(e, t, n, i, s = !0) {
  return s ? typeof e == "function" ? e(t, n, i) : e : e instanceof Xe ? e.get(t, n, i) : e;
}
function rt(e, t, n, i) {
  if (typeof e == "object" && e !== null && !Array.isArray(e)) {
    const s = {};
    for (const r in e) {
      const o = e[r];
      s[r] = rt(o, t, n, i);
    }
    return s;
  }
  return x$1(e, t, n, i, !1);
}
var T = /* @__PURE__ */ ((e) => (e.NotReady = "NOTREADY", e.Loading = "LOADING", e.Ready = "READY", e.Error = "ERROR", e))(T || {});
class O {
  type;
  // The source URL, can be a string or a function. Might be null if there is no source URL
  src;
  // The data if it is provided directly, e.g. for JS type data sources.
  data = null;
  loaded = !1;
  loading = !1;
  loadError = null;
  // Reference to the state that was used to load the data.
  loadState = null;
  // An optional transformer function to transform the data before it is used
  transformer = null;
  subscribers = {};
  cache = {
    src: null,
    data: {}
  };
  // The state keys which are accessed during data loading.
  stateDependencies = /* @__PURE__ */ new Set();
  subscribedToSetState = !1;
  constructor(t) {
    this.type = "undefined", this.src = t.src || null, this.data = t.data || null, this.transformer = t.transformer || null;
  }
  status() {
    return this.loadError ? "ERROR" : this.loaded ? "READY" : this.loading ? "LOADING" : "NOTREADY";
  }
  load(t) {
    if (this.loading) return;
    this.loadState = t, this.loaded = !1, this.loading = !0, this.loadError = null, this.publish("statusChanged", "LOADING", this), this.stateDependencies.clear();
    const n = t.subscribe("getValue", (s) => {
      this.stateDependencies.add(s);
    });
    this.cache.src = x$1(this.src, {}, t, this);
    const i = x$1(this.data, {}, t, this);
    if (n(), this.cache.src !== null && Object.keys(this.cache.data).includes(this.cache.src) && this.cache.data[this.cache.src] !== void 0) {
      this.loaded = !0, this.loading = !1, this.loadError = null, this.publish("statusChanged", "READY", this);
      return;
    }
    this.loadData(this.cache.src, i).then((s) => {
      if (s === void 0) {
        this.loadError = new Error("Data loading returned `undefined`"), this.loaded = !1, this.loading = !1, this.publish("statusChanged", "ERROR", this);
        return;
      }
      const r = this.transformer ? this.transformer(s, t) : s;
      this.cache.data[this.cache.src || "default"] = r, this.loaded = !0, this.loading = !1, this.loadError = null, this.publish("statusChanged", "READY", this);
    }).catch((s) => {
      this.loadError = s, this.loading = !1, this.loaded = !1, this.publish("statusChanged", "ERROR", this);
    }).finally(() => {
    }), this.subscribedToSetState || (this.subscribedToSetState = !0, t.subscribe("setValue", this.handleSetState.bind(this)));
  }
  // The data loading method should be implemented by subclasses.
  loadData(t, n) {
    return new Promise((i, s) => {
      s(new Error("loadData method not implemented"));
    });
  }
  get() {
    return this.loaded ? this.cache.data[this.cache.src || "default"] : null;
  }
  subscribe(t, n) {
    return this.subscribers[t] || (this.subscribers[t] = []), this.subscribers[t].includes(n) ? () => {
    } : (this.subscribers[t].push(n), () => {
      this.subscribers[t] = this.subscribers[t].filter((i) => i !== n), this.subscribers[t].length === 0 && delete this.subscribers[t];
    });
  }
  publish(t, ...n) {
    this.subscribers[t] && this.subscribers[t].forEach((i) => i(...n));
  }
  handleSetState(t, n) {
    queueMicrotask(() => {
      this.loadState && this.stateDependencies.has(t) && this.load(this.loadState);
    });
  }
}
function q(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function ot(e, t) {
  for (const n in t)
    Object.prototype.hasOwnProperty.call(t, n) && (q(t[n]) ? (typeof e[n] > "u" && (e[n] = {}), q(e[n]) ? ot(
      e[n],
      t[n]
    ) : e[n] = t[n]) : e[n] = t[n]);
}
class A {
  // A unique name / ID for the box. If not defined, a UUID-based ID will be generated
  // automatically.
  id;
  // An optional class name which should be added to the base node of the box
  className;
  // The base node of the box
  node;
  // The owner of the box, this is typcially the layout. In some cases, the box might be located
  // inside another box, and then the owner is that other box.
  //owner?: Layout | Box
  // The subscribers which should be notified in case of a message
  subscribers = {};
  state;
  // The list of data sources this box depends on before the content should be displayed
  requiredDataSources = [];
  // Function to get the data sources from the layout. This is redefined by the layout.
  dataSource = (t) => {
  };
  dataExtractor;
  _style = {};
  // The layout to which the box belongs. This is set by the layout when the box is added to it,
  // or by some special kinds of boxes (e.g. a FlexBox) when inserting the box indirectly.
  _layout;
  // The box width including the padding. This is the space the layout reserves for the box. It is
  // defined by the layout at render time. Before, its value is null. The outerWidth setter method
  // is public, after a change of its value, the updateSize method is called to adjust the box
  // content the the new width.
  _outerWidth = null;
  // The box width. This is the width available for the box content. The value is computed by the
  // setter of outerWidth.
  _width = null;
  // The box height is defined by the box during rendering. It has a public getter, but a protected
  // setter. The setter will send a resize message if its value has changed.
  _height = 0;
  // Define if the height should be computed automatically based on the content.
  autoHeight = !1;
  // Keep track if the box has already been rendered once.
  rendered = !1;
  constructor(t, n) {
    this.id = t.id || st().replace(/-/g, ""), this.id = /^[A-Za-z]/.test(this.id) ? this.id : `b${this.id}`, this.className = t.className, this.requiredDataSources = t.data || [], this.dataExtractor = t.dataExtractor, this.mergeStyle({ box: { ...Qe.style.box || {} } }), n && this.mergeStyle(n);
  }
  get width() {
    return this._width || 0;
  }
  get outerWidth() {
    return this._outerWidth || 0;
  }
  set outerWidth(t) {
    const n = this._outerWidth !== null && this._outerWidth !== t;
    this._outerWidth = t, this._width = this._outerWidth - this.style("padding.left", 0, { parent: { width: this._outerWidth } }) - this.style("padding.right", 0, { parent: { width: this._outerWidth } }), n && this.handleUpdateSize();
  }
  get height() {
    return this._height;
  }
  set height(t) {
    this._height !== t && (this._height = t, this.publish("resize", { box: this }));
  }
  get layout() {
    return this._layout;
  }
  set layout(t) {
    if (this._layout && this._layout !== t)
      throw new Error(`Box ${this.id} already has a layout set.`);
    this._layout = t;
  }
  /**
   * Returns the style or a style property.
   * @param property If specified, this is the path to the property to return. The property can be
   * given in dot notation to retrieve a nested property (e.g. `padding.left` to get the left
   * padding). If the provided property is a function, it is executed.
   * @param defaultValue Value to use if the property is not defined
   * @param data Data object which will be passed to any function as the data argument (along with
   * the state and the box as further arguments).
   * @returns
   */
  style(t, n, i) {
    if (t === void 0) return this._style;
    const s = t.split("."), o = ((u, h) => {
      let l = this._style || {};
      for (let c = 0; c < u.length; c++) {
        if (typeof l != "object" || l === null) return h;
        const d = u[c];
        if (d in l)
          l = l[d];
        else
          return h;
      }
      return typeof l > "u" ? h : l;
    })(s, n);
    return rt(o, i || {}, this.state, this);
  }
  mergeStyle(t) {
    ot(this._style, t);
  }
  data(t) {
    const n = this.dataSource(t);
    return n ? n.get() : null;
  }
  // The method to add a subscriber
  subscribe(t, n) {
    this.subscribers[t] || (this.subscribers[t] = []), this.subscribers[t].push(n);
  }
  // The method to send a message to the subscribers
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  publish(t, n) {
    this.subscribers[t] && this.subscribers[t].forEach((i) => i(t, n, this)), this.subscribers["*"] && this.subscribers["*"].forEach((i) => i(t, n, this));
  }
  render() {
    if (this.node) {
      if (this.requiredDataSources.length === 0)
        this.renderContent(), this.rendered = !0;
      else {
        const t = this.requiredDataSources.map((n) => {
          const i = this.dataSource(n);
          return i ? i.status() : (console.warn(`Data source ${n} not found for box ${this.id}.`), null);
        });
        t.some((n) => n === T.Error) ? this.renderMessage("error", "Error loading data source.") : t.some((n) => n === T.Loading) ? this.renderLoading() : t.every((n) => n === T.Ready) ? (this.renderContent(), this.rendered = !0) : this.renderMessage("info", "Data source not yet ready.");
      }
      this.checkHeight();
    }
  }
  /**
   * Checks the height of the box and sets it to the height of the content if it is 0.
   * If the height is non-zero, it will check if there is some part of the content overflowing.
   * If so, log a warning.
   */
  checkHeight() {
    if (!this.node) return;
    const t = this.node.getBBox(), n = t.y + t.height;
    (this._height <= 0 || this.autoHeight) && (this.autoHeight = !0, this.height = n), this._height < n && console.warn(
      `Box Overflow: ${this.id} has a height of ${this._height}px, but the content height is ${n}px.`
    );
  }
  renderLoading() {
    console.log(`Rendering loading state for box ${this.id}`);
  }
  renderMessage(t, n) {
    console.log(`Rendering message for box ${this.id}:`, t, n);
  }
  renderContent() {
  }
  handleUpdateSize() {
    this.autoHeight && this.checkHeight(), this.updateSize();
  }
  updateSize() {
  }
  handleUpdateState() {
    this.rendered && this.updateState();
  }
  updateState() {
  }
  handleUpdateData(t = void 0) {
    if (!this.rendered) {
      this.render();
      return;
    }
    this.updateData(t);
  }
  updateData(t = void 0) {
  }
  updateSelection() {
  }
  _renderRect() {
    this.node && E(this.node).select("rect").attr("width", `${this.width}px`).attr("height", `${this.height}px`);
  }
}
class tn {
  value;
  subscribers = /* @__PURE__ */ new Set();
  constructor(t) {
    this.value = t;
  }
  getValue() {
    return this.value;
  }
  setValue(t) {
    return this.value === t || (this.value = t, this.publish()), t;
  }
  publish() {
    this.subscribers.forEach((t) => {
      t(this.value);
    });
  }
  subscribe(t) {
    return this.subscribers.add(t), () => {
      this.subscribers.delete(t);
    };
  }
}
function H(e) {
  const t = new tn(e), n = function(i) {
    return arguments.length === 0 ? t.getValue() : t.setValue(i);
  };
  return n.subscribe = t.subscribe.bind(t), n;
}
class en {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  signals = /* @__PURE__ */ new Map();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  subscribers = {};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(t = {}) {
    for (const [n, i] of Object.entries(t))
      this.signals.set(n, H(i));
  }
  get(t) {
    const n = this.signals.get(t);
    if (!n)
      throw new Error(`State key "${t}" not found`);
    const i = n();
    return this.publish("getValue", t, i), i;
  }
  set(t, n) {
    const i = this.signals.get(t);
    i ? i(n) : this.signals.set(t, H(n)), this.publish("setValue", t, n);
  }
  has(t) {
    return this.signals.has(t);
  }
  keys() {
    return Array.from(this.signals.keys());
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  subscribe(t, n) {
    return this.subscribers[t] || (this.subscribers[t] = []), this.subscribers[t].includes(n) || this.subscribers[t].push(n), () => {
      this.subscribers[t] = this.subscribers[t].filter((i) => i !== n), this.subscribers[t].length === 0 && delete this.subscribers[t];
    };
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  publish(t, ...n) {
    this.subscribers[t] && this.subscribers[t].forEach((i) => i(...n));
  }
}
class gn {
  id;
  boxes;
  boxHeights;
  // The current box that is being rendered. This is used to keep track of the state dependencies.
  currentBox = null;
  state;
  // The state dependencies: list of state keys that each box depends on.
  stateDependencies = {};
  _dataSources;
  // The data dependencies: list of data sources that each box depends on.
  dataDependencies = {};
  // List of data sources which require an update including their timeout ID
  pendingDataUpdates = /* @__PURE__ */ new Map();
  _className;
  _name;
  node;
  svg = null;
  _environment;
  _minWidth;
  width;
  height;
  initialized = !1;
  lastUpdateSize = 0;
  updateSizeScheduled = !1;
  maxUpdateSizeFrequency = 100;
  constructor(t) {
    this.id = t.id || st().replace(/-/g, ""), this.id = /^[A-Za-z]/.test(this.id) ? this.id : `l${this.id}`, this._className = t.className, this._name = t.name, this.node = t.node, this._minWidth = t.minWidth || 0, this.width = 0, this.height = 0, this._environment = typeof t.environment > "u" ? function(n) {
      return n.width && n.width > 343 ? "desktop" : "mobile";
    } : t.environment, this.state = t.state || new en(), this.boxes = Array.from(t.boxes), this.boxHeights = this.boxes.map((n) => 0), this._dataSources = t.dataSources || {}, Object.values(this._dataSources).forEach((n) => {
      n.subscribe(
        "statusChanged",
        this.handleDataSourceStatusChange.bind(this)
      );
    }), window.addEventListener("resize", this.handleWindowResize.bind(this));
  }
  get className() {
    return typeof this._className > "u" ? void 0 : x$1(this._className, {}, this.state, this);
  }
  get name() {
    return x$1(this._name, {}, this.state, this);
  }
  get minWidth() {
    return x$1(this._minWidth, {}, this.state, this);
  }
  get environment() {
    return x$1(this._environment, { width: this.width }, this.state, this);
  }
  dataSourceNames() {
    return Object.keys(this._dataSources);
  }
  dataSource(t) {
    const n = this._dataSources[t];
    if (typeof n > "u") {
      console.warn(`Data source "${t}" not found in layout "${this.name}"`);
      return;
    }
    return this.currentBox && (this.dataDependencies[t] || (this.dataDependencies[t] = []), this.dataDependencies[t].includes(this.currentBox) || this.dataDependencies[t].push(this.currentBox)), n;
  }
  // Create the DOM elements where rendering takes place.
  init() {
    this.state.subscribe("getValue", this.handleGetState.bind(this)), this.state.subscribe("setValue", this.handleSetState.bind(this)), this.svg = E(this.node).attr("role", "document graphics-document").append("svg").attr("id", this.id).attr(
      "class",
      typeof this.className > "u" ? "dvLayout" : `dvLayout ${this.className}`
    ).attr("role", "presentation").node();
    for (let t = 0; t < this.boxes.length; t++) {
      const n = this.boxes[t][1];
      n instanceof A && (n.subscribe("*", this.handleMessage.bind(this)), n.state = this.state, n.layout = this, n.dataSource = this.dataSource.bind(this));
    }
    Object.values(this._dataSources).forEach((t) => {
      t.load(this.state);
    }), this.initialized = !0;
  }
  render() {
    this.initialized || this.init(), this.svg && (E(this.node).attr("aria-label", this.name), this.updateWidth(), E(this.svg).selectAll("g.dvBoxWrapper").data(this.boxes).join("g").attr("id", (t) => `${this.id}-${t[0]}`).attr("data-role", (t) => t[0]).attr("class", "dvBoxWrapper").selectAll("g.dvBoxNode").data((t) => [t]).join("g").attr("class", "dvBoxNode").each((t, n, i) => {
      i[n] && this.renderBox(t, i[n]);
    }), this.positionBoxes());
  }
  renderBox(t, n) {
    const i = n;
    if (this.currentBox = t[0], typeof t[1] == "function") {
      const s = t[1], [r, o] = s(n, this);
      if (i.innerHTML = r, o <= 0) {
        const a = n.getBBox();
        i.setAttribute("data-height", (a.y + a.height).toString());
        return;
      } else
        i.setAttribute("data-height", o.toString());
    } else if (t[1] instanceof A) {
      const s = t[1];
      s.node = i, s.render();
    }
    this.currentBox = null;
  }
  // Adapts the width of the layout to the width of the parent DIV node
  updateWidth() {
    if (!this.svg) return;
    const t = getComputedStyle(this.node);
    this.width = Math.max(this.minWidth || 0, parseInt(t.width)), this.svg.style.width = `${this.width}px`;
    for (let n = 0; n < this.boxes.length; n++) {
      const i = this.boxes[n][1];
      i instanceof A && (i.outerWidth = this.width);
    }
    this.lastUpdateSize = (/* @__PURE__ */ new Date()).getTime();
  }
  // Sets the transform for each box group element. This enables correct box positioning.
  positionBoxes() {
    if (!this.svg) return;
    let t = 0;
    E(this.svg).selectAll("g.dvBoxWrapper").each((n, i, s) => {
      const r = n[1], o = s[i];
      if (!o) return;
      const a = o;
      let u = 0;
      const h = { left: 0, top: 0, bottom: 0 };
      if (r instanceof A)
        h.left = r.style("padding.left", 0, { layout: { width: this.width } }), h.top = r.style("padding.top", 0, { layout: { width: this.width } }), h.bottom = r.style("padding.bottom", 0, { layout: { width: this.width } }), u = r.height;
      else {
        const l = a.querySelector(".dvBoxNode");
        if (!l) return;
        u = parseInt(l.getAttribute("data-height") || "0");
      }
      E(a).attr("transform", `translate(${h.left} ${t + h.top})`), t += h.top + u + h.bottom;
    }), this.svg.style.height = `${t}px`;
  }
  handleMessage(t, n, i) {
    if (t === "resize") {
      this.positionBoxes();
      return;
    }
  }
  handleGetState(t, n) {
    this.currentBox && (this.stateDependencies[t] || (this.stateDependencies[t] = []), this.stateDependencies[t].includes(this.currentBox) || this.stateDependencies[t].push(this.currentBox));
  }
  handleSetState(t, n) {
    queueMicrotask(() => {
      this.stateDependencies[t] && this.stateDependencies[t].forEach((i) => {
        const s = this.boxes.find((r) => r[0] === i);
        if (this.currentBox = i, s && s[1] instanceof A && s[1].handleUpdateState(), this.svg && s && typeof s[1] == "function") {
          const r = this.svg.querySelector(`#${this.id}-${i} .dvBoxNode`);
          r && (this.renderBox(s, r), this.positionBoxes());
        }
        this.currentBox = null;
      });
    });
  }
  handleDataSourceStatusChange(t, n) {
    const i = Object.entries(this._dataSources).find(([s, r]) => r === n)?.[0];
    i && (this.pendingDataUpdates.has(i) && clearTimeout(this.pendingDataUpdates.get(i)), this.pendingDataUpdates.set(i, setTimeout(() => {
      for (const s of this.dataDependencies[i] || []) {
        const r = this.boxes.find((o) => o[0] === s);
        if (this.currentBox = s, r && r[1] instanceof A && r[1].handleUpdateData(i), this.svg && r && typeof r[1] == "function") {
          const o = this.svg.querySelector(`#${this.id}-${s} .dvBoxNode`);
          o && (this.renderBox(r, o), this.positionBoxes());
        }
        this.currentBox = null;
      }
      this.pendingDataUpdates.delete(i);
    }, 50)));
  }
  handleWindowResize() {
    if (this.updateSizeScheduled) return;
    const t = (/* @__PURE__ */ new Date()).getTime(), n = t - this.lastUpdateSize;
    if (n < this.maxUpdateSizeFrequency) {
      setTimeout(
        () => {
          this.lastUpdateSize = (/* @__PURE__ */ new Date()).getTime(), this.updateWidth(), this.updateSizeScheduled = !1;
        },
        this.maxUpdateSizeFrequency - n + 1
      ), this.updateSizeScheduled = !0;
      return;
    }
    this.lastUpdateSize = t, this.updateWidth();
  }
}
var k = {}, I = {}, L = 34, R = 10, $ = 13;
function at(e) {
  return new Function("d", "return {" + e.map(function(t, n) {
    return JSON.stringify(t) + ": d[" + n + '] || ""';
  }).join(",") + "}");
}
function nn(e, t) {
  var n = at(e);
  return function(i, s) {
    return t(n(i), s, e);
  };
}
function Y(e) {
  var t = /* @__PURE__ */ Object.create(null), n = [];
  return e.forEach(function(i) {
    for (var s in i)
      s in t || n.push(t[s] = s);
  }), n;
}
function y$1(e, t) {
  var n = e + "", i = n.length;
  return i < t ? new Array(t - i + 1).join(0) + n : n;
}
function sn(e) {
  return e < 0 ? "-" + y$1(-e, 6) : e > 9999 ? "+" + y$1(e, 6) : y$1(e, 4);
}
function rn(e) {
  var t = e.getUTCHours(), n = e.getUTCMinutes(), i = e.getUTCSeconds(), s = e.getUTCMilliseconds();
  return isNaN(e) ? "Invalid Date" : sn(e.getUTCFullYear()) + "-" + y$1(e.getUTCMonth() + 1, 2) + "-" + y$1(e.getUTCDate(), 2) + (s ? "T" + y$1(t, 2) + ":" + y$1(n, 2) + ":" + y$1(i, 2) + "." + y$1(s, 3) + "Z" : i ? "T" + y$1(t, 2) + ":" + y$1(n, 2) + ":" + y$1(i, 2) + "Z" : n || t ? "T" + y$1(t, 2) + ":" + y$1(n, 2) + "Z" : "");
}
function ut(e) {
  var t = new RegExp('["' + e + `
\r]`), n = e.charCodeAt(0);
  function i(c, d) {
    var p, f, g = s(c, function(v, w) {
      if (p) return p(v, w - 1);
      f = v, p = d ? nn(v, d) : at(v);
    });
    return g.columns = f || [], g;
  }
  function s(c, d) {
    var p = [], f = c.length, g = 0, v = 0, w, S = f <= 0, m = !1;
    c.charCodeAt(f - 1) === R && --f, c.charCodeAt(f - 1) === $ && --f;
    function N() {
      if (S) return I;
      if (m) return m = !1, k;
      var B, U = g, C;
      if (c.charCodeAt(U) === L) {
        for (; g++ < f && c.charCodeAt(g) !== L || c.charCodeAt(++g) === L; ) ;
        return (B = g) >= f ? S = !0 : (C = c.charCodeAt(g++)) === R ? m = !0 : C === $ && (m = !0, c.charCodeAt(g) === R && ++g), c.slice(U + 1, B - 1).replace(/""/g, '"');
      }
      for (; g < f; ) {
        if ((C = c.charCodeAt(B = g++)) === R) m = !0;
        else if (C === $)
          m = !0, c.charCodeAt(g) === R && ++g;
        else if (C !== n) continue;
        return c.slice(U, B);
      }
      return S = !0, c.slice(U, f);
    }
    for (; (w = N()) !== I; ) {
      for (var D = []; w !== k && w !== I; ) D.push(w), w = N();
      d && (D = d(D, v++)) == null || p.push(D);
    }
    return p;
  }
  function r(c, d) {
    return c.map(function(p) {
      return d.map(function(f) {
        return l(p[f]);
      }).join(e);
    });
  }
  function o(c, d) {
    return d == null && (d = Y(c)), [d.map(l).join(e)].concat(r(c, d)).join(`
`);
  }
  function a(c, d) {
    return d == null && (d = Y(c)), r(c, d).join(`
`);
  }
  function u(c) {
    return c.map(h).join(`
`);
  }
  function h(c) {
    return c.map(l).join(e);
  }
  function l(c) {
    return c == null ? "" : c instanceof Date ? rn(c) : t.test(c += "") ? '"' + c.replace(/"/g, '""') + '"' : c;
  }
  return {
    parse: i,
    parseRows: s,
    format: o,
    formatBody: a,
    formatRows: u,
    formatRow: h,
    formatValue: l
  };
}
var on = ut("	"), an = on.parse;
function ht(e) {
  for (var t in e) {
    var n = e[t].trim(), i, s;
    if (!n) n = null;
    else if (n === "true") n = !0;
    else if (n === "false") n = !1;
    else if (n === "NaN") n = NaN;
    else if (!isNaN(i = +n)) n = i;
    else if (s = n.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/))
      un && s[4] && !s[7] && (n = n.replace(/-/g, "/").replace(/T/, " ")), n = new Date(n);
    else continue;
    e[t] = n;
  }
  return e;
}
const un = (/* @__PURE__ */ new Date("2019-01-01T00:00")).getHours() || (/* @__PURE__ */ new Date("2019-07-01T00:00")).getHours();
function hn(e) {
  if (!e.ok) throw new Error(e.status + " " + e.statusText);
  return e.text();
}
function ct(e, t) {
  return fetch(e, t).then(hn);
}
function cn(e) {
  return function(t, n, i) {
    return arguments.length === 2 && typeof n == "function" && (i = n, n = void 0), ct(t, n).then(function(s) {
      return e(s, i);
    });
  };
}
function ln(e, t, n, i) {
  arguments.length === 3 && typeof n == "function" && (i = n, n = void 0);
  var s = ut(e);
  return ct(t, n).then(function(r) {
    return s.parse(r, i);
  });
}
var dn = cn(an);
function fn(e) {
  if (!e.ok) throw new Error(e.status + " " + e.statusText);
  if (!(e.status === 204 || e.status === 205))
    return e.json();
}
function pn(e, t) {
  return fetch(e, t).then(fn);
}
class _n extends O {
  sep;
  constructor(t) {
    super(t), this.type = "dsv", this.sep = t.options?.sep || ",";
  }
  loadData(t, n) {
    return t === null ? Promise.reject(new Error("No source URL provided for DSV data source")) : ln(this.sep, t, ht);
  }
}
class yn extends O {
  constructor(t) {
    super(t), this.type = "tsv";
  }
  loadData(t, n) {
    return t === null ? Promise.reject(new Error("No source URL provided for TSV data source")) : dn(t, ht);
  }
}
class bn extends O {
  constructor(t) {
    super(t), this.type = "json";
  }
  loadData(t, n) {
    return t === null ? Promise.reject(new Error("No source URL provided for JSON data source")) : pn(t);
  }
}
class mn extends O {
  constructor(t) {
    super(t), this.type = "js";
  }
  loadData(t, n) {
    return n === null ? Promise.reject(new Error("No data object provided for JS data source")) : Promise.resolve(n);
  }
}
class vn extends A {
  type = "custom";
  renderFn;
  updateSizeFn;
  updateStateFn;
  updateDataFn;
  updateSelectionFn;
  constructor(t, n) {
    super(t, n), this.renderFn = t.render || (() => {
    }), this.updateSizeFn = t.updateSize || (() => {
    }), this.updateStateFn = t.updateState || (() => {
    }), this.updateDataFn = t.updateData || (() => {
    }), this.updateSelectionFn = t.updateSelection || (() => {
    });
  }
  renderContent() {
    this.node && this.renderFn(this);
  }
  updateSize() {
    this.node && this.updateSizeFn(this);
  }
  updateState() {
    this.node && this.updateStateFn(this);
  }
  updateData() {
    this.node && this.updateDataFn(this);
  }
  updateSelection() {
    this.node && this.updateSelectionFn(this);
  }
}

function sanitizeFilename (filename, ext, defaultName) {
  let fname = filename;
  if (fname.length === 0) fname = defaultName || 'untitled';
  if (fname.substr(0, 1) === '.') fname = `f_${fname}`;
  if (fname.substr(fname.length - 4, 4) !== `.${ext}`) fname += `.${ext}`;
  return fname
}

function saveAsTxt (filename, txt) {
  // We add here the UTF-8 BOM character at the beginning of the text. Otherwise, some programs
  // like Excel won't recognize the downloaded file as being UTF-8 encoded.
  const blob = new Blob(['\uFEFF' + txt], { type: 'data:application/octet-stream' });
  const uri = URL.createObjectURL(blob);
  const fnameArr = filename.split('.');
  const ext = fnameArr.length > 1 ? fnameArr[fnameArr.length - 1] : 'txt';
  const fname = fnameArr.length > 1 ? fnameArr.slice(0, fnameArr.length - 1).join('.') : filename;
  downloadUri(uri, sanitizeFilename(fname, ext));
  URL.revokeObjectURL(uri);
}

function saveAsDsv (filename, data, sep, options) {
  let out = '';
  if (options.header) {
    out += options.header && options.header.join ? options.header.join('\n') : options.header || '';
    out += '\n\n';
  }

  // Get the columns to export. This is either defined in options.columns or taken from the data.
  if (!options.columns && !Array.isArray(data)) {
    throw new Error('Data export error. No columns defined in the data.')
  }

  const columns = options.columns || Object.keys(data[0] || {});
  if (columns.length === 0) {
    throw new Error('Data export error. No columns found in the data.')
  }

  // Write the header row
  const columnNames = [];
  columns.forEach(c => {
    if (Array.isArray(c)) {
      columnNames.push(c.length > 1 ? c[1] : c[0]);
    } else if (typeof c === 'string') {
      columnNames.push(c);
    } else {
      throw new Error('Data export error. Invalid column definition.')
    }
  });
  out += columnNames.join(sep) + '\n';

  // Write the data
  data.forEach(row => {
    out += columns.map(c => {
      const k = Array.isArray(c) ? c[0] : c;
      return (row[k] === null || typeof row[k] === 'undefined') ? 'n/a' : row[k]
    }).join(sep) + '\n';
  });

  if (options.footer) {
    out += '\n\n';
    out += options.footer && options.footer.join ? options.footer.join('\n') : options.footer || '';
  }

  saveAsTxt(filename, out);
}

function downloadUri (uri, filename) {
  const a = document.createElement('a');
  a.href = uri;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

/**
 * Checks if two rectangles intersect.
 * A rectangle is defines as an object with at least the keys `top`, `bottom`, `left` and `right`.
 *
 * @param {object} r1 The first rectangle.
 * @param {object} r2 The second rectangle.
 * @returns true if there is at least one point in common, false otherwise.
 */
function rectanglesIntersect (r1, r2, dist = 0) {
  return !(
    r2.left - dist >= r1.right ||
    r2.right <= r1.left - dist ||
    r2.top - dist >= r1.bottom ||
    r2.bottom <= r1.top - dist
  )
}

// Checks if any two rectangles intersect within a distance of `dist`.
function rectanglesIntersectAny (rects, dist = 0) {
  for (let i = 0; i < rects.length; i++) {
    for (let j = i; j < rects.length; j++) {
      if (rectanglesIntersect(rects[i], rects[j], dist)) return true
    }
  }
  return false
}

function layoutRectsVertically (rects, maxDistance, spacing) {
  // Copy the rects
  const r = rects.map((r, idx) => ({
    x: r.left,
    y: r.top + Math.random(), // add some noise to avoid identical forces
    oy: r.top,
    dy: 0,
    width: r.width,
    height: r.height,
    idx: idx
  }));

  // The force function
  const f = alpha => {
    // Compute the displacement for each rect i
    for (let i = 0; i < r.length; i++) {
      r[i].dy = 0;
      for (let j = 0; j < r.length; j++) {
        if (i === j) continue

        // Evaluate the effect of rect j on rect i.
        // The distance between the two recangle's x coordinate (`minDist`) should be at least the
        // height + spacing of the upper rectangle (the one with the smaller y coordinate value)
        const minDist = (((r[i].y < r[j].y) ? r[i].height : r[j].height) + spacing);

        // Compute the actual distance
        const dist = Math.abs(r[i].y - r[j].y);

        // The distance rect i should be moved because of rect j can now be computed
        const dy = Math.max(0, minDist - dist);

        // Apply `dy` to the rectangle in the correct direction. Multiply with 0.5 because the
        // effect of moving is mutual. Apply factor alpha which is decreasing during the simulation.
        // There is no random noise in this calculation, so this might lead to unsolvable
        // situations.
        r[i].dy += alpha * 0.5 * (r[i].y < r[j].y ? -1 : 1) * dy;

        // Respect the maximum distance.
        r[i].dy -= Math.max(Math.abs(r[i].y + r[i].dy - r[i].oy) - maxDistance, 0);
      }
    }

    // Apply the dy to all rectangles
    r.forEach(d => {
      d.y = d.y + d.dy;
    });
  };

  // Run the simulation. The while loop runs 5 times with descreasing alpha.
  let alpha = 0.5;
  while (alpha > 0.1) {
    f(alpha);
    alpha *= 0.7;
  }

  return r
}

function extractTransform (str) {
  const regex = /translate\((\d+)\s+(\d+)\)/;
  const match = str.match(regex);
  if (match) {
    return [parseInt(match[1], 10), parseInt(match[2], 10)]
  } else {
    return null
  }
}

function imgExportCompatible () {
  const c = document.createElement('canvas');
  return (typeof c.toBlob !== 'undefined')
}

/**
 * Copies the CSS styles from the source node to the target node.
 * The node structure needs to be identical.
 * The computed styles on the source node are used to set the styles in the
 * target node.
 */
function copyStyleRecursive (source, target) {
  const cs = window.getComputedStyle(source);
  Array.from(cs).forEach(function (key) {
    target.style.setProperty(key,
      cs.getPropertyValue(key),
      cs.getPropertyPriority(key)
    );
  });

  // Iterate over all child nodes.
  for (let i = 0; i < source.children.length; i++) {
    copyStyleRecursive(source.children[i], target.children[i]);
  }
}

/**
 * Collects all CSS styles across all stylesheets from the document.
 * Result is returned as string.
 **/
function documentStylesheets () {
  const sheets = document.styleSheets;

  const css = { text: '', sheets: [] };

  // Make a list of class names. We will need to replace some of the class names before exporting
  // due to a bug in Illustrator.
  const selectors = [];

  for (let i = 0; i < sheets.length; i++) {
    try {
      const rules = sheets[i].rules || sheets[i].cssRules;
      for (let j = 0; j < rules.length; j++) {
        // The selectorText might in the case of media queries be undefined. We ignore these rules.
        if (rules[j].selectorText) {
          css.text += rules[j].cssText;
          selectors.push(rules[j].selectorText);
        }
      }
    } catch (_err) {
      css.sheets.push(sheets[i].href);
      console.log(`Impossible to read stylesheet ${sheets[i].href}`);
    }
  }

  return { css: css, selectors: selectors }
}

/**
 * Returns an array of class names based on the passed selector
 */
function classNames (selector) {
  return selector.match(/[.]([_a-zA-Z0-9]+)/g) || []
}

/**
 * Removes the underscores inside `txt` for the provided classnames.
 */
function filterClassNames (txt, clsnames) {
  let out = txt;
  clsnames.forEach(cls => {
    out = out.replaceAll(cls, cls.replaceAll('_', ''));
  });
  return out
}

function saveSvg (svgNode, filename, defaultName) {
  // Integrate CSS styles into the SVG node, because external style sheets
  // won't be available in the exported SVG.

  // First we clone the svgNode because we don't want to integrate the CSS styles
  // into the original SVG.
  const svg = svgNode.cloneNode(true);
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  svg.setAttribute('xmlns:xlinkg', 'http://www.w3.org/1999/xlink');

  // Remove all nodes with dv_noprint class. If the node is at the top-level of the SVG element
  // (the layout), the y-positions of the siblings will get adapted accordingly.
  // Iterate first over all top-level nodes. To get the heights correctly, the iteration happens
  // at the same time over the rendered nodes and the cloned SVG. Keep the delta height in memory.
  let dh = 0;
  for (let i = 0; i < svg.children.length; i++) {
    const node = svg.children[i];

    // Only consider group nodes with class `dv_noprint`.
    if (node.tagName === 'g') {
      if (node.classList.contains('dvNoprint')) {
        dh += svgNode.children[i].getBoundingClientRect().height;
      } else {
        const transform = extractTransform(node.getAttribute('transform'));
        if (transform !== null) {
          const x = transform[0];
          const y = transform[1] - dh;
          node.setAttribute('transform', `translate(${x} ${y})`);
        }
      }
    }
  }

  // Adjust the height of the SVG node
  const svgHeight = parseInt(svg.getAttribute('height') || svg.style.height);
  svg.setAttribute('height', `${svgHeight - dh}`);

  // Make sure the width is set as attribute
  const svgWidth = parseInt(svg.getAttribute('width') || svg.style.width);
  svg.setAttribute('width', `${svgWidth}`);

  // Remove all nodes with class dv_noprint
  svg.querySelectorAll('.dvNoprint').forEach(node => {
    node.remove();
  });

  // Get the content of all document stylesheets and add it directly to the SVG
  const cssDict = documentStylesheets();
  const css = cssDict.css;

  // Extract all classnames with an underscore. We need to remove the underscore due to a bug
  // in Illustrator
  const clsnames = [...new Set(
    cssDict.selectors
      .map(sel => classNames(sel))
      .flat()
      .map(sel => sel.substr(1))
      .filter(sel => sel.indexOf('_') >= 0)
  )];

  // Add the CSS available as text into a single style node
  const style = document.createElement('style');
  style.innerText = css.text;

  svg.insertBefore(style, svg.firstChild);

  // Add unreadable stylesheets as references (unreadable mainly due to CORS).
  // We insert the link elements by generating the code manually as string.
  // When using document.createElement('link'), the inserted link element would
  // not have the closing /> part, but only > which leads to invalid SVG and
  // a parsing error when reading the SVG again.
  let links = '';
  css.sheets.forEach(href => {
    links += `<link xmlns="http://www.w3.org/1999/xhtml" rel="stylesheet" href="${href}" type="text/css"/>`;
  });
  svg.innerHTML = links + svg.innerHTML;

  // Add the SVG to an DIV which is invisible to the user
  const div = document.createElement('div');
  div.append(svg);
  div.style.position = 'absolute';
  div.style.top = '-99999px';
  document.body.append(div);

  let svgCode = filterClassNames(div.innerHTML, clsnames);

  // Decode HTML entities: we only consider nbsp for now. (replace with he.js ?)
  svgCode = svgCode.replaceAll('&nbsp;', ' ');

  const svgBlob = new Blob([svgCode], { type: 'data:application/octet-stream' });

  const svgUri = URL.createObjectURL(svgBlob);
  downloadUri(
    svgUri,
    sanitizeFilename(filename, 'svg', defaultName || 'graphics.svg')
  );
  document.body.removeChild(div);
  URL.revokeObjectURL(svgUri);
}

/**
 * Translates the passed SVG node to a PNG image and triggers
 * the download of the image.
 */
function savePng (svgNode, filename, defaultName, options) {
  // To translate the SVG to a PNG, we create a canvas and then draw the
  // SVG onto the canvas. This is done by creating a data URI for the SVG
  // which is then treated as an image.

  // Check first if the browser supports image export (Canvas.toBlob)
  if (!imgExportCompatible()) {
    alert('PNG export is not supported by your browser');
    return
  }

  // Get the options if they are set
  const padding = (options && options.padding) || 10;

  // Make the SVG blob and create a data URI
  const svg = svgNode.cloneNode(true);
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  svg.setAttribute('xmlns:xlinkg', 'http://www.w3.org/1999/xlink');

  // FIXME: we might have a problem for loaded fonts
  // This might be useful: https://github.com/foliojs/pdfkit/issues/623
  copyStyleRecursive(svgNode, svg);

  // Remove all nodes with dv_noprint class. If the node is at the top-level of the SVG element
  // (the layout), the y-positions of the siblings will get adapted accordingly.
  // Iterate first over all top-level nodes. Keep the delta height in memory.
  let dh = 0;
  for (let i = 0; i < svg.children.length; i++) {
    const node = svg.children[i];

    // Only consider group nodes with class `dv_noprint`.
    if (node.tagName === 'g') {
      if (node.classList.contains('dvNoprint')) {
        dh += svgNode.children[i].getBoundingClientRect().height;
      } else {
        const transform = extractTransform(node.getAttribute('transform'));
        if (transform !== null) {
          const x = transform[0];
          const y = transform[1] - dh;
          node.setAttribute('transform', `translate(${x} ${y})`);
        }
      }
    }
  }

  // Adjust the height of the SVG node
  const svgHeight = parseInt(svg.getAttribute('height') || svg.style.height) - dh;
  svg.setAttribute('height', `${svgHeight}`);

  // Make sure the width is set as attribute
  const svgWidth = parseInt(svg.getAttribute('width') || svg.style.width);
  svg.setAttribute('width', `${svgWidth}`);

  // Remove all nodes with dv_noprint class
  svg.querySelectorAll('.dv_noprint').forEach(node => {
    node.remove();
  });

  // Add the SVG to an DIV which is invisible to the user
  const div = document.createElement('div');
  div.append(svg);
  div.style.position = 'absolute';
  div.style.top = '-9999px';
  document.body.append(div);

  let svgCode = div.innerHTML;

  // Decode HTML entities: we only consider nbsp for now. (replace with he.js ?)
  svgCode = svgCode.replaceAll('&nbsp;', ' ');

  const svgBlob = new Blob([svgCode], { type: 'image/svg+xml;charset=utf8' });
  const svgUri = URL.createObjectURL(svgBlob);

  // Create a canvas with the same dimensions as the SVG node.
  const bbox = svg.getBoundingClientRect();
  const canvas = document.createElement('canvas');
  canvas.width = bbox.width + 2 * padding;
  canvas.height = svgHeight + 2 * padding;
  canvas.style.visibility = 'hidden';

  // Get the drawing context.
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, bbox.width + 2 * padding, svgHeight + 2 * padding);
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, bbox.width + 20, svgHeight + 20);

  // Create the image
  const img = new Image();
  img.onload = function () {
    ctx.drawImage(img, padding, padding);
    const imgData = canvas.toDataURL('image/png');
    downloadUri(
      imgData,
      sanitizeFilename(filename, 'png', defaultName || 'graphics.png')
    );
    URL.revokeObjectURL(svgUri);
    document.body.removeChild(div);
  };
  img.src = svgUri;
  div.append(img);
}

class DvLayout extends gn {
  /**
   * @method saveAsSvg ( <String> filename )
   * Saves the layout as a SVG file. The generated SVG file is downloaded by the browser. The
   * filename can be defined by the optional argument `filename`. If no filename is given, the
   * file will be named `chart.svg`.
   **/
  saveAsSvg (filename, options = {}) {
    saveSvg(document.getElementById(this.id), filename, 'chart.svg');
  }

  /**
   * @method saveAsPng ( <String> filename )
   * Saves the layout as a PNG file. The generated PNG file is downloaded by the browser. The
   * filename can be defined by the optional argument `filename`. If no filename is given, the
   * file will be named `chart.png`.
   */
  saveAsPng (filename, options = { padding: 10 }) {
    savePng(document.getElementById(this.id), filename, 'chart.png', options);
  }
}

function layout (node, config) {
  const nd = typeof node === 'string' ? document.querySelector(node) : node;
  return new DvLayout({
    node: nd,
    ...config
  })
}

function state (initialState) {
  return new en(initialState)
}

function dataSource (config) {
  switch (config.type) {
    case 'dsv':
      return new _n(config)
    case 'tsv':
      return new yn(config)
    case 'json':
      return new bn(config)
    case 'js':
      return new mn(config)
  }
  throw new Error(`Unknown data source type: ${config.type}`)
}

function hierarchy$1 (data, ...keys) {
  const hmap = hierarchyMap(data, keys);
  return hierarchyTree(hmap)
}

/**
 * Transforms a row-based data set with following structure:
 *  [
 *    { brand: "Audi", model: "A3", color: "red", price: 15000 },
 *    { brand: "Audi", model: "A3", color: "blue", price: 12000 },
 *    { brand: "Audi", model: "A4", color: "white", price: 18000 },
 *    { brand: "BMW", model: "X1", color: "silver", price: 8000 }
 *  ]
 * into a tree object with the following structure
 * {
 *   "Audi": {
 *     "A3": [...],
 *     "A4": [...]
 *   },
 *   "BMW": {
 *     "X1": [...]
 *   }
 * }
 */
function hierarchyMap (data, keys) {
  return addKeyToHierarchy({}, data, ...keys)
}

function addKeyToHierarchy (node, data, ...keys) {
  const k = keys.shift();
  data.forEach(d => {
    const v = d[k];
    node[v] = node[v] || [];
    node[v].push(d);
  });

  if (keys.length > 0) {
    for (const v in node) {
      node[v] = addKeyToHierarchy({}, node[v], ...keys);
    }
  }

  return node
}

function hierarchyTree (hmap) {
  return addLevelToTree({}, hmap)
}

function addLevelToTree (tree, obj) {
  if (obj instanceof Array) {
    tree.children = obj;
  } else {
    tree.children = Object.entries(obj).map(([k, v]) => {
      return addLevelToTree({ key: k }, v)
    });
  }
  return tree
}

function box (config, style) {
  return new vn(config, style)
}

var xhtml = "http://www.w3.org/1999/xhtml";

var namespaces = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};

function namespace(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return namespaces.hasOwnProperty(prefix) ? {space: namespaces[prefix], local: name} : name; // eslint-disable-line no-prototype-builtins
}

function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === xhtml && document.documentElement.namespaceURI === xhtml
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

function creator(name) {
  var fullname = namespace(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
}

function none() {}

function selector(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}

function selection_select(select) {
  if (typeof select !== "function") select = selector(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new Selection$1(subgroups, this._parents);
}

// Given something array like (or null), returns something that is strictly an
// array. This is used to ensure that array-like objects passed to d3.selectAll
// or selection.selectAll are converted into proper arrays when creating a
// selection; we don’t ever want to create a selection backed by a live
// HTMLCollection or NodeList. However, note that selection.selectAll will use a
// static NodeList as a group, since it safely derived from querySelectorAll.
function array$1(x) {
  return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}

function empty() {
  return [];
}

function selectorAll(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
}

function arrayAll(select) {
  return function() {
    return array$1(select.apply(this, arguments));
  };
}

function selection_selectAll(select) {
  if (typeof select === "function") select = arrayAll(select);
  else select = selectorAll(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new Selection$1(subgroups, parents);
}

function matcher(selector) {
  return function() {
    return this.matches(selector);
  };
}

function childMatcher(selector) {
  return function(node) {
    return node.matches(selector);
  };
}

var find$1 = Array.prototype.find;

function childFind(match) {
  return function() {
    return find$1.call(this.children, match);
  };
}

function childFirst() {
  return this.firstElementChild;
}

function selection_selectChild(match) {
  return this.select(match == null ? childFirst
      : childFind(typeof match === "function" ? match : childMatcher(match)));
}

var filter = Array.prototype.filter;

function children() {
  return Array.from(this.children);
}

function childrenFilter(match) {
  return function() {
    return filter.call(this.children, match);
  };
}

function selection_selectChildren(match) {
  return this.selectAll(match == null ? children
      : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
}

function selection_filter(match) {
  if (typeof match !== "function") match = matcher(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Selection$1(subgroups, this._parents);
}

function sparse(update) {
  return new Array(update.length);
}

function selection_enter() {
  return new Selection$1(this._enter || this._groups.map(sparse), this._parents);
}

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};

function constant$5(x) {
  return function() {
    return x;
  };
}

function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = new Map,
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue.get(keyValues[i]) === node)) {
      exit[i] = node;
    }
  }
}

function datum(node) {
  return node.__data__;
}

function selection_data(value, key) {
  if (!arguments.length) return Array.from(this, datum);

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = constant$5(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = arraylike(value.call(parent, parent && parent.__data__, j, parents)),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new Selection$1(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}

// Given some data, this returns an array-like view of it: an object that
// exposes a length property and allows numeric indexing. Note that unlike
// selectAll, this isn’t worried about “live” collections because the resulting
// array will only be used briefly while data is being bound. (It is possible to
// cause the data to change while iterating by using a key function, but please
// don’t; we’d rather avoid a gratuitous copy.)
function arraylike(data) {
  return typeof data === "object" && "length" in data
    ? data // Array, TypedArray, NodeList, array-like
    : Array.from(data); // Map, Set, iterable, string, or anything else
}

function selection_exit() {
  return new Selection$1(this._exit || this._groups.map(sparse), this._parents);
}

function selection_join(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter) enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }
  if (onupdate != null) {
    update = onupdate(update);
    if (update) update = update.selection();
  }
  if (onexit == null) exit.remove(); else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}

function selection_merge(context) {
  var selection = context.selection ? context.selection() : context;

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Selection$1(merges, this._parents);
}

function selection_order() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
}

function selection_sort(compare) {
  if (!compare) compare = ascending$1;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new Selection$1(sortgroups, this._parents).order();
}

function ascending$1(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

function selection_call() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}

function selection_nodes() {
  return Array.from(this);
}

function selection_node() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
}

function selection_size() {
  let size = 0;
  for (const node of this) ++size; // eslint-disable-line no-unused-vars
  return size;
}

function selection_empty() {
  return !this.node();
}

function selection_each(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
}

function attrRemove$1(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS$1(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant$1(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS$1(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction$1(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS$1(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

function selection_attr(name, value) {
  var fullname = namespace(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS$1 : attrRemove$1) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS$1 : attrFunction$1)
      : (fullname.local ? attrConstantNS$1 : attrConstant$1)))(fullname, value));
}

function defaultView(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
}

function styleRemove$1(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant$1(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction$1(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

function selection_style(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove$1 : typeof value === "function"
            ? styleFunction$1
            : styleConstant$1)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
}

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
}

function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

function selection_property(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
}

function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

function selection_classed(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
}

function textRemove() {
  this.textContent = "";
}

function textConstant$1(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction$1(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

function selection_text(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction$1
          : textConstant$1)(value))
      : this.node().textContent;
}

function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

function selection_html(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
}

function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

function selection_raise() {
  return this.each(raise);
}

function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

function selection_lower() {
  return this.each(lower);
}

function selection_append(name) {
  var create = typeof name === "function" ? name : creator(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
}

function constantNull() {
  return null;
}

function selection_insert(name, before) {
  var create = typeof name === "function" ? name : creator(name),
      select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
}

function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

function selection_remove() {
  return this.each(remove);
}

function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function selection_clone(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}

function selection_datum(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
}

function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}

function parseTypenames$1(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o, listener = contextListener(value);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
        this.addEventListener(o.type, o.listener = listener, o.options = options);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, options);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, options: options};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

function selection_on(typename, value, options) {
  var typenames = parseTypenames$1(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
  return this;
}

function dispatchEvent(node, type, params) {
  var window = defaultView(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

function selection_dispatch(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
}

function* selection_iterator() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) yield node;
    }
  }
}

var root = [null];

function Selection$1(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection$1([[document.documentElement]], root);
}

function selection_selection() {
  return this;
}

Selection$1.prototype = selection.prototype = {
  constructor: Selection$1,
  select: selection_select,
  selectAll: selection_selectAll,
  selectChild: selection_selectChild,
  selectChildren: selection_selectChildren,
  filter: selection_filter,
  data: selection_data,
  enter: selection_enter,
  exit: selection_exit,
  join: selection_join,
  merge: selection_merge,
  selection: selection_selection,
  order: selection_order,
  sort: selection_sort,
  call: selection_call,
  nodes: selection_nodes,
  node: selection_node,
  size: selection_size,
  empty: selection_empty,
  each: selection_each,
  attr: selection_attr,
  style: selection_style,
  property: selection_property,
  classed: selection_classed,
  text: selection_text,
  html: selection_html,
  raise: selection_raise,
  lower: selection_lower,
  append: selection_append,
  insert: selection_insert,
  remove: selection_remove,
  clone: selection_clone,
  datum: selection_datum,
  on: selection_on,
  dispatch: selection_dispatch,
  [Symbol.iterator]: selection_iterator
};

function select(selector) {
  return typeof selector === "string"
      ? new Selection$1([[document.querySelector(selector)]], [document.documentElement])
      : new Selection$1([[selector]], root);
}

function sourceEvent(event) {
  let sourceEvent;
  while (sourceEvent = event.sourceEvent) event = sourceEvent;
  return event;
}

function pointer(event, node) {
  event = sourceEvent(event);
  if (node === undefined) node = event.currentTarget;
  if (node) {
    var svg = node.ownerSVGElement || node;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      point.x = event.clientX, point.y = event.clientY;
      point = point.matrixTransform(node.getScreenCTM().inverse());
      return [point.x, point.y];
    }
    if (node.getBoundingClientRect) {
      var rect = node.getBoundingClientRect();
      return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
    }
  }
  return [event.pageX, event.pageY];
}

function selectAll(selector) {
  return typeof selector === "string"
      ? new Selection$1([document.querySelectorAll(selector)], [document.documentElement])
      : new Selection$1([array$1(selector)], root);
}

function ascending(a, b) {
  return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

function descending(a, b) {
  return a == null || b == null ? NaN
    : b < a ? -1
    : b > a ? 1
    : b >= a ? 0
    : NaN;
}

function bisector(f) {
  let compare1, compare2, delta;

  // If an accessor is specified, promote it to a comparator. In this case we
  // can test whether the search value is (self-) comparable. We can’t do this
  // for a comparator (except for specific, known comparators) because we can’t
  // tell if the comparator is symmetric, and an asymmetric comparator can’t be
  // used to test whether a single value is comparable.
  if (f.length !== 2) {
    compare1 = ascending;
    compare2 = (d, x) => ascending(f(d), x);
    delta = (d, x) => f(d) - x;
  } else {
    compare1 = f === ascending || f === descending ? f : zero$1;
    compare2 = f;
    delta = f;
  }

  function left(a, x, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x, x) !== 0) return hi;
      do {
        const mid = (lo + hi) >>> 1;
        if (compare2(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      } while (lo < hi);
    }
    return lo;
  }

  function right(a, x, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x, x) !== 0) return hi;
      do {
        const mid = (lo + hi) >>> 1;
        if (compare2(a[mid], x) <= 0) lo = mid + 1;
        else hi = mid;
      } while (lo < hi);
    }
    return lo;
  }

  function center(a, x, lo = 0, hi = a.length) {
    const i = left(a, x, lo, hi - 1);
    return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
  }

  return {left, center, right};
}

function zero$1() {
  return 0;
}

function number$2(x) {
  return x === null ? NaN : +x;
}

const ascendingBisect = bisector(ascending);
const bisectRight = ascendingBisect.right;
bisector(number$2).center;
var bisect = bisectRight;

class InternMap extends Map {
  constructor(entries, key = keyof) {
    super();
    Object.defineProperties(this, {_intern: {value: new Map()}, _key: {value: key}});
    if (entries != null) for (const [key, value] of entries) this.set(key, value);
  }
  get(key) {
    return super.get(intern_get(this, key));
  }
  has(key) {
    return super.has(intern_get(this, key));
  }
  set(key, value) {
    return super.set(intern_set(this, key), value);
  }
  delete(key) {
    return super.delete(intern_delete(this, key));
  }
}

function intern_get({_intern, _key}, value) {
  const key = _key(value);
  return _intern.has(key) ? _intern.get(key) : value;
}

function intern_set({_intern, _key}, value) {
  const key = _key(value);
  if (_intern.has(key)) return _intern.get(key);
  _intern.set(key, value);
  return value;
}

function intern_delete({_intern, _key}, value) {
  const key = _key(value);
  if (_intern.has(key)) {
    value = _intern.get(key);
    _intern.delete(key);
  }
  return value;
}

function keyof(value) {
  return value !== null && typeof value === "object" ? value.valueOf() : value;
}

const e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

function tickSpec(start, stop, count) {
  const step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log10(step)),
      error = step / Math.pow(10, power),
      factor = error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1;
  let i1, i2, inc;
  if (power < 0) {
    inc = Math.pow(10, -power) / factor;
    i1 = Math.round(start * inc);
    i2 = Math.round(stop * inc);
    if (i1 / inc < start) ++i1;
    if (i2 / inc > stop) --i2;
    inc = -inc;
  } else {
    inc = Math.pow(10, power) * factor;
    i1 = Math.round(start / inc);
    i2 = Math.round(stop / inc);
    if (i1 * inc < start) ++i1;
    if (i2 * inc > stop) --i2;
  }
  if (i2 < i1 && 0.5 <= count && count < 2) return tickSpec(start, stop, count * 2);
  return [i1, i2, inc];
}

function ticks(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  if (!(count > 0)) return [];
  if (start === stop) return [start];
  const reverse = stop < start, [i1, i2, inc] = reverse ? tickSpec(stop, start, count) : tickSpec(start, stop, count);
  if (!(i2 >= i1)) return [];
  const n = i2 - i1 + 1, ticks = new Array(n);
  if (reverse) {
    if (inc < 0) for (let i = 0; i < n; ++i) ticks[i] = (i2 - i) / -inc;
    else for (let i = 0; i < n; ++i) ticks[i] = (i2 - i) * inc;
  } else {
    if (inc < 0) for (let i = 0; i < n; ++i) ticks[i] = (i1 + i) / -inc;
    else for (let i = 0; i < n; ++i) ticks[i] = (i1 + i) * inc;
  }
  return ticks;
}

function tickIncrement(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  return tickSpec(start, stop, count)[2];
}

function tickStep(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  const reverse = stop < start, inc = reverse ? tickIncrement(stop, start, count) : tickIncrement(start, stop, count);
  return (reverse ? -1 : 1) * (inc < 0 ? 1 / -inc : inc);
}

function max(values, valueof) {
  let max;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null
          && (max < value || (max === undefined && value >= value))) {
        max = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (max < value || (max === undefined && value >= value))) {
        max = value;
      }
    }
  }
  return max;
}

function min(values, valueof) {
  let min;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null
          && (min > value || (min === undefined && value >= value))) {
        min = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (min > value || (min === undefined && value >= value))) {
        min = value;
      }
    }
  }
  return min;
}

function sum(values, valueof) {
  let sum = 0;
  if (valueof === undefined) {
    for (let value of values) {
      if (value = +value) {
        sum += value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if (value = +valueof(value, ++index, values)) {
        sum += value;
      }
    }
  }
  return sum;
}

function initRange(domain, range) {
  switch (arguments.length) {
    case 0: break;
    case 1: this.range(domain); break;
    default: this.range(range).domain(domain); break;
  }
  return this;
}

const implicit = Symbol("implicit");

function ordinal() {
  var index = new InternMap(),
      domain = [],
      range = [],
      unknown = implicit;

  function scale(d) {
    let i = index.get(d);
    if (i === undefined) {
      if (unknown !== implicit) return unknown;
      index.set(d, i = domain.push(d) - 1);
    }
    return range[i % range.length];
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = new InternMap();
    for (const value of _) {
      if (index.has(value)) continue;
      index.set(value, domain.push(value) - 1);
    }
    return scale;
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), scale) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return ordinal(domain, range).unknown(unknown);
  };

  initRange.apply(scale, arguments);

  return scale;
}

function define(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}

function extend$1(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`),
    reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`),
    reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`),
    reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`),
    reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`),
    reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

define(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor, this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex, // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHex8() {
  return this.rgb().formatHex8();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
      : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
      : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
      : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
      : null) // invalid hex
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

define(Rgb, rgb, extend$1(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return (-0.5 <= this.r && this.r < 255.5)
        && (-0.5 <= this.g && this.g < 255.5)
        && (-0.5 <= this.b && this.b < 255.5)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex, // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}

function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}

function rgb_formatRgb() {
  const a = clampa(this.opacity);
  return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}

function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}

function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}

function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

define(Hsl, hsl, extend$1(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
  }
}));

function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}

function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}

var constant$4 = x => () => x;

function linear$1(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : constant$4(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear$1(a, d) : constant$4(isNaN(a) ? b : a);
}

var interpolateRgb = (function rgbGamma(y) {
  var color = gamma(y);

  function rgb$1(start, end) {
    var r = color((start = rgb(start)).r, (end = rgb(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb$1.gamma = rgbGamma;

  return rgb$1;
})(1);

function numberArray(a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0,
      c = b.slice(),
      i;
  return function(t) {
    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
}

function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}

function genericArray(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = interpolate$1(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}

function date$1(a, b) {
  var d = new Date;
  return a = +a, b = +b, function(t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
}

function interpolateNumber(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}

function object(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = interpolate$1(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
}

var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

function interpolateString(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: interpolateNumber(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
}

function interpolate$1(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? constant$4(b)
      : (t === "number" ? interpolateNumber
      : t === "string" ? ((c = color(b)) ? (b = c, interpolateRgb) : interpolateString)
      : b instanceof color ? interpolateRgb
      : b instanceof Date ? date$1
      : isNumberArray(b) ? numberArray
      : Array.isArray(b) ? genericArray
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object
      : interpolateNumber)(a, b);
}

function interpolateRound(a, b) {
  return a = +a, b = +b, function(t) {
    return Math.round(a * (1 - t) + b * t);
  };
}

var degrees = 180 / Math.PI;

var identity$2 = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

function decompose(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
}

var svgNode;

/* eslint-disable no-undef */
function parseCss(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? identity$2 : decompose(m.a, m.b, m.c, m.d, m.e, m.f);
}

function parseSvg(value) {
  if (value == null) return identity$2;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return identity$2;
  value = value.matrix;
  return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
}

function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: interpolateNumber(xa, xb)}, {i: i - 2, x: interpolateNumber(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: interpolateNumber(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: interpolateNumber(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: interpolateNumber(xa, xb)}, {i: i - 2, x: interpolateNumber(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

function constants(x) {
  return function() {
    return x;
  };
}

function number$1(x) {
  return +x;
}

var unit = [0, 1];

function identity$1(x) {
  return x;
}

function normalize(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : constants(isNaN(b) ? NaN : 0.5);
}

function clamper(a, b) {
  var t;
  if (a > b) t = a, a = b, b = t;
  return function(x) { return Math.max(a, Math.min(b, x)); };
}

// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function bimap(domain, range, interpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
  else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, interpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = bisect(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp())
      .unknown(source.unknown());
}

function transformer() {
  var domain = unit,
      range = unit,
      interpolate = interpolate$1,
      transform,
      untransform,
      unknown,
      clamp = identity$1,
      piecewise,
      output,
      input;

  function rescale() {
    var n = Math.min(domain.length, range.length);
    if (clamp !== identity$1) clamp = clamper(domain[0], domain[n - 1]);
    piecewise = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
  }

  scale.invert = function(y) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), interpolateNumber)))(y)));
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, number$1), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = Array.from(_), interpolate = interpolateRound, rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? true : identity$1, rescale()) : clamp !== identity$1;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}

function continuous() {
  return transformer()(identity$1, identity$1);
}

function formatDecimal(x) {
  return Math.abs(x = Math.round(x)) >= 1e21
      ? x.toLocaleString("en").replace(/,/g, "")
      : x.toString(10);
}

// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimalParts(1.23) returns ["123", 0].
function formatDecimalParts(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
}

function exponent(x) {
  return x = formatDecimalParts(Math.abs(x)), x ? x[1] : NaN;
}

function formatGroup(grouping, thousands) {
  return function(value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
}

function formatNumerals(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
}

// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
  this.align = specifier.align === undefined ? ">" : specifier.align + "";
  this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === undefined ? undefined : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === undefined ? "" : specifier.type + "";
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width === undefined ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0))
      + (this.trim ? "~" : "")
      + this.type;
};

// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
function formatTrim(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".": i0 = i1 = i; break;
      case "0": if (i0 === 0) i0 = i; i1 = i; break;
      default: if (!+s[i]) break out; if (i0 > 0) i0 = 0; break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}

var prefixExponent;

function formatPrefixAuto(x, p) {
  var d = formatDecimalParts(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + formatDecimalParts(x, Math.max(0, p + i - 1))[0]; // less than 1y!
}

function formatRounded(x, p) {
  var d = formatDecimalParts(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}

var formatTypes = {
  "%": (x, p) => (x * 100).toFixed(p),
  "b": (x) => Math.round(x).toString(2),
  "c": (x) => x + "",
  "d": formatDecimal,
  "e": (x, p) => x.toExponential(p),
  "f": (x, p) => x.toFixed(p),
  "g": (x, p) => x.toPrecision(p),
  "o": (x) => Math.round(x).toString(8),
  "p": (x, p) => formatRounded(x * 100, p),
  "r": formatRounded,
  "s": formatPrefixAuto,
  "X": (x) => Math.round(x).toString(16).toUpperCase(),
  "x": (x) => Math.round(x).toString(16)
};

function identity(x) {
  return x;
}

var map = Array.prototype.map,
    prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

function formatLocale$1(locale) {
  var group = locale.grouping === undefined || locale.thousands === undefined ? identity : formatGroup(map.call(locale.grouping, Number), locale.thousands + ""),
      currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "",
      currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "",
      decimal = locale.decimal === undefined ? "." : locale.decimal + "",
      numerals = locale.numerals === undefined ? identity : formatNumerals(map.call(locale.numerals, String)),
      percent = locale.percent === undefined ? "%" : locale.percent + "",
      minus = locale.minus === undefined ? "−" : locale.minus + "",
      nan = locale.nan === undefined ? "NaN" : locale.nan + "";

  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        trim = specifier.trim,
        type = specifier.type;

    // The "n" type is an alias for ",g".
    if (type === "n") comma = true, type = "g";

    // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!formatTypes[type]) precision === undefined && (precision = 12), trim = true, type = "g";

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = formatTypes[type],
        maybeSuffix = /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision === undefined ? 6
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Determine the sign. -0 is not less than 0, but 1 / -0 is!
        var valueNegative = value < 0 || 1 / value < 0;

        // Perform the initial formatting.
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);

        // Trim insignificant zeros.
        if (trim) value = formatTrim(value);

        // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
        if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : minus) : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": value = valuePrefix + value + valueSuffix + padding; break;
        case "=": value = valuePrefix + padding + value + valueSuffix; break;
        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
        default: value = padding + valuePrefix + value + valueSuffix; break;
      }

      return numerals(value);
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
}

var locale$1;
var format;
var formatPrefix;

defaultLocale$1({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});

function defaultLocale$1(definition) {
  locale$1 = formatLocale$1(definition);
  format = locale$1.format;
  formatPrefix = locale$1.formatPrefix;
  return locale$1;
}

function precisionFixed(step) {
  return Math.max(0, -exponent(Math.abs(step)));
}

function precisionPrefix(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step)));
}

function precisionRound(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, exponent(max) - exponent(step)) + 1;
}

function tickFormat(start, stop, count, specifier) {
  var step = tickStep(start, stop, count),
      precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value))) specifier.precision = precision;
      return formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format(specifier);
}

function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    var d = domain();
    return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain();
    var i0 = 0;
    var i1 = d.length - 1;
    var start = d[i0];
    var stop = d[i1];
    var prestep;
    var step;
    var maxIter = 10;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }
    
    while (maxIter-- > 0) {
      step = tickIncrement(start, stop, count);
      if (step === prestep) {
        d[i0] = start;
        d[i1] = stop;
        return domain(d);
      } else if (step > 0) {
        start = Math.floor(start / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start = Math.ceil(start * step) / step;
        stop = Math.floor(stop * step) / step;
      } else {
        break;
      }
      prestep = step;
    }

    return scale;
  };

  return scale;
}

function linear() {
  var scale = continuous();

  scale.copy = function() {
    return copy(scale, linear());
  };

  initRange.apply(scale, arguments);

  return linearish(scale);
}

function nice(domain, interval) {
  domain = domain.slice();

  var i0 = 0,
      i1 = domain.length - 1,
      x0 = domain[i0],
      x1 = domain[i1],
      t;

  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }

  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
}

const t0 = new Date, t1 = new Date;

function timeInterval(floori, offseti, count, field) {

  function interval(date) {
    return floori(date = arguments.length === 0 ? new Date : new Date(+date)), date;
  }

  interval.floor = (date) => {
    return floori(date = new Date(+date)), date;
  };

  interval.ceil = (date) => {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };

  interval.round = (date) => {
    const d0 = interval(date), d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = (date, step) => {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = (start, stop, step) => {
    const range = [];
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    let previous;
    do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range;
  };

  interval.filter = (test) => {
    return timeInterval((date) => {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, (date, step) => {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
        } else while (--step >= 0) {
          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
        }
      }
    });
  };

  if (count) {
    interval.count = (start, end) => {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };

    interval.every = (step) => {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null
          : !(step > 1) ? interval
          : interval.filter(field
              ? (d) => field(d) % step === 0
              : (d) => interval.count(0, d) % step === 0);
    };
  }

  return interval;
}

const millisecond = timeInterval(() => {
  // noop
}, (date, step) => {
  date.setTime(+date + step);
}, (start, end) => {
  return end - start;
});

// An optimized implementation for this simple case.
millisecond.every = (k) => {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return timeInterval((date) => {
    date.setTime(Math.floor(date / k) * k);
  }, (date, step) => {
    date.setTime(+date + step * k);
  }, (start, end) => {
    return (end - start) / k;
  });
};

millisecond.range;

const durationSecond = 1000;
const durationMinute = durationSecond * 60;
const durationHour = durationMinute * 60;
const durationDay = durationHour * 24;
const durationWeek = durationDay * 7;
const durationMonth = durationDay * 30;
const durationYear = durationDay * 365;

const second = timeInterval((date) => {
  date.setTime(date - date.getMilliseconds());
}, (date, step) => {
  date.setTime(+date + step * durationSecond);
}, (start, end) => {
  return (end - start) / durationSecond;
}, (date) => {
  return date.getUTCSeconds();
});

second.range;

const timeMinute = timeInterval((date) => {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond);
}, (date, step) => {
  date.setTime(+date + step * durationMinute);
}, (start, end) => {
  return (end - start) / durationMinute;
}, (date) => {
  return date.getMinutes();
});

timeMinute.range;

const utcMinute = timeInterval((date) => {
  date.setUTCSeconds(0, 0);
}, (date, step) => {
  date.setTime(+date + step * durationMinute);
}, (start, end) => {
  return (end - start) / durationMinute;
}, (date) => {
  return date.getUTCMinutes();
});

utcMinute.range;

const timeHour = timeInterval((date) => {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond - date.getMinutes() * durationMinute);
}, (date, step) => {
  date.setTime(+date + step * durationHour);
}, (start, end) => {
  return (end - start) / durationHour;
}, (date) => {
  return date.getHours();
});

timeHour.range;

const utcHour = timeInterval((date) => {
  date.setUTCMinutes(0, 0, 0);
}, (date, step) => {
  date.setTime(+date + step * durationHour);
}, (start, end) => {
  return (end - start) / durationHour;
}, (date) => {
  return date.getUTCHours();
});

utcHour.range;

const timeDay = timeInterval(
  date => date.setHours(0, 0, 0, 0),
  (date, step) => date.setDate(date.getDate() + step),
  (start, end) => (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay,
  date => date.getDate() - 1
);

timeDay.range;

const utcDay = timeInterval((date) => {
  date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
  date.setUTCDate(date.getUTCDate() + step);
}, (start, end) => {
  return (end - start) / durationDay;
}, (date) => {
  return date.getUTCDate() - 1;
});

utcDay.range;

const unixDay = timeInterval((date) => {
  date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
  date.setUTCDate(date.getUTCDate() + step);
}, (start, end) => {
  return (end - start) / durationDay;
}, (date) => {
  return Math.floor(date / durationDay);
});

unixDay.range;

function timeWeekday(i) {
  return timeInterval((date) => {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, (date, step) => {
    date.setDate(date.getDate() + step * 7);
  }, (start, end) => {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationWeek;
  });
}

const timeSunday = timeWeekday(0);
const timeMonday = timeWeekday(1);
const timeTuesday = timeWeekday(2);
const timeWednesday = timeWeekday(3);
const timeThursday = timeWeekday(4);
const timeFriday = timeWeekday(5);
const timeSaturday = timeWeekday(6);

timeSunday.range;
timeMonday.range;
timeTuesday.range;
timeWednesday.range;
timeThursday.range;
timeFriday.range;
timeSaturday.range;

function utcWeekday(i) {
  return timeInterval((date) => {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, (date, step) => {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, (start, end) => {
    return (end - start) / durationWeek;
  });
}

const utcSunday = utcWeekday(0);
const utcMonday = utcWeekday(1);
const utcTuesday = utcWeekday(2);
const utcWednesday = utcWeekday(3);
const utcThursday = utcWeekday(4);
const utcFriday = utcWeekday(5);
const utcSaturday = utcWeekday(6);

utcSunday.range;
utcMonday.range;
utcTuesday.range;
utcWednesday.range;
utcThursday.range;
utcFriday.range;
utcSaturday.range;

const timeMonth = timeInterval((date) => {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, (date, step) => {
  date.setMonth(date.getMonth() + step);
}, (start, end) => {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, (date) => {
  return date.getMonth();
});

timeMonth.range;

const utcMonth = timeInterval((date) => {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
  date.setUTCMonth(date.getUTCMonth() + step);
}, (start, end) => {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, (date) => {
  return date.getUTCMonth();
});

utcMonth.range;

const timeYear = timeInterval((date) => {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, (date, step) => {
  date.setFullYear(date.getFullYear() + step);
}, (start, end) => {
  return end.getFullYear() - start.getFullYear();
}, (date) => {
  return date.getFullYear();
});

// An optimized implementation for this simple case.
timeYear.every = (k) => {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : timeInterval((date) => {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, (date, step) => {
    date.setFullYear(date.getFullYear() + step * k);
  });
};

timeYear.range;

const utcYear = timeInterval((date) => {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, (start, end) => {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, (date) => {
  return date.getUTCFullYear();
});

// An optimized implementation for this simple case.
utcYear.every = (k) => {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : timeInterval((date) => {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, (date, step) => {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};

utcYear.range;

function ticker(year, month, week, day, hour, minute) {

  const tickIntervals = [
    [second,  1,      durationSecond],
    [second,  5,  5 * durationSecond],
    [second, 15, 15 * durationSecond],
    [second, 30, 30 * durationSecond],
    [minute,  1,      durationMinute],
    [minute,  5,  5 * durationMinute],
    [minute, 15, 15 * durationMinute],
    [minute, 30, 30 * durationMinute],
    [  hour,  1,      durationHour  ],
    [  hour,  3,  3 * durationHour  ],
    [  hour,  6,  6 * durationHour  ],
    [  hour, 12, 12 * durationHour  ],
    [   day,  1,      durationDay   ],
    [   day,  2,  2 * durationDay   ],
    [  week,  1,      durationWeek  ],
    [ month,  1,      durationMonth ],
    [ month,  3,  3 * durationMonth ],
    [  year,  1,      durationYear  ]
  ];

  function ticks(start, stop, count) {
    const reverse = stop < start;
    if (reverse) [start, stop] = [stop, start];
    const interval = count && typeof count.range === "function" ? count : tickInterval(start, stop, count);
    const ticks = interval ? interval.range(start, +stop + 1) : []; // inclusive stop
    return reverse ? ticks.reverse() : ticks;
  }

  function tickInterval(start, stop, count) {
    const target = Math.abs(stop - start) / count;
    const i = bisector(([,, step]) => step).right(tickIntervals, target);
    if (i === tickIntervals.length) return year.every(tickStep(start / durationYear, stop / durationYear, count));
    if (i === 0) return millisecond.every(Math.max(tickStep(start, stop, count), 1));
    const [t, step] = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
    return t.every(step);
  }

  return [ticks, tickInterval];
}

ticker(utcYear, utcMonth, utcSunday, unixDay, utcHour, utcMinute);
const [timeTicks, timeTickInterval] = ticker(timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute);

function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}

function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}

function newDate(y, m, d) {
  return {y: y, m: m, d: d, H: 0, M: 0, S: 0, L: 0};
}

function formatLocale(locale) {
  var locale_dateTime = locale.dateTime,
      locale_date = locale.date,
      locale_time = locale.time,
      locale_periods = locale.periods,
      locale_weekdays = locale.days,
      locale_shortWeekdays = locale.shortDays,
      locale_months = locale.months,
      locale_shortMonths = locale.shortMonths;

  var periodRe = formatRe(locale_periods),
      periodLookup = formatLookup(locale_periods),
      weekdayRe = formatRe(locale_weekdays),
      weekdayLookup = formatLookup(locale_weekdays),
      shortWeekdayRe = formatRe(locale_shortWeekdays),
      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
      monthRe = formatRe(locale_months),
      monthLookup = formatLookup(locale_months),
      shortMonthRe = formatRe(locale_shortMonths),
      shortMonthLookup = formatLookup(locale_shortMonths);

  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "g": formatYearISO,
    "G": formatFullYearISO,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "q": formatQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };

  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "g": formatUTCYearISO,
    "G": formatUTCFullYearISO,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "q": formatUTCQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };

  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "g": parseYear,
    "G": parseFullYear,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "q": parseQuarter,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };

  // These recursive directive definitions must be deferred.
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);

  function newFormat(specifier, formats) {
    return function(date) {
      var string = [],
          i = -1,
          j = 0,
          n = specifier.length,
          c,
          pad,
          format;

      if (!(date instanceof Date)) date = new Date(+date);

      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad = c === "e" ? " " : "0";
          if (format = formats[c]) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }

      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }

  function newParse(specifier, Z) {
    return function(string) {
      var d = newDate(1900, undefined, 1),
          i = parseSpecifier(d, specifier, string += "", 0),
          week, day;
      if (i != string.length) return null;

      // If a UNIX timestamp is specified, return it.
      if ("Q" in d) return new Date(d.Q);
      if ("s" in d) return new Date(d.s * 1000 + ("L" in d ? d.L : 0));

      // If this is utcParse, never use the local timezone.
      if (Z && !("Z" in d)) d.Z = 0;

      // The am-pm flag is 0 for AM, and 1 for PM.
      if ("p" in d) d.H = d.H % 12 + d.p * 12;

      // If the month was not specified, inherit from the quarter.
      if (d.m === undefined) d.m = "q" in d ? d.q : 0;

      // Convert day-of-week and week-of-year to day-of-year.
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newDate(d.y, 0, 1)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? utcMonday.ceil(week) : utcMonday(week);
          week = utcDay.offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = localDate(newDate(d.y, 0, 1)), day = week.getDay();
          week = day > 4 || day === 0 ? timeMonday.ceil(week) : timeMonday(week);
          week = timeDay.offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }

      // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }

      // Otherwise, all fields are in local time.
      return localDate(d);
    };
  }

  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
        n = specifier.length,
        m = string.length,
        c,
        parse;

    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }

    return j;
  }

  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }

  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }

  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }

  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }

  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }

  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }

  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }

  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }

  function formatQuarter(d) {
    return 1 + ~~(d.getMonth() / 3);
  }

  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }

  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }

  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }

  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }

  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }

  function formatUTCQuarter(d) {
    return 1 + ~~(d.getUTCMonth() / 3);
  }

  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() { return specifier; };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", false);
      p.toString = function() { return specifier; };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() { return specifier; };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier += "", true);
      p.toString = function() { return specifier; };
      return p;
    }
  };
}

var pads = {"-": "", "_": " ", "0": "0"},
    numberRe = /^\s*\d+/, // note: ignores next directive
    percentRe = /^%/,
    requoteRe = /[\\^$*+?|[\]().{}]/g;

function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "",
      string = (sign ? -value : value) + "",
      length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}

function requote(s) {
  return s.replace(requoteRe, "\\$&");
}

function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}

function formatLookup(names) {
  return new Map(names.map((name, i) => [name.toLowerCase(), i]));
}

function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}

function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}

function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}

function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}

function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}

function parseQuarter(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}

function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}

function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}

function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}

function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}

function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}

function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}

function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}

function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}

function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}

function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}

function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.s = +n[0], i + n[0].length) : -1;
}

function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}

function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}

function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}

function formatDayOfYear(d, p) {
  return pad(1 + timeDay.count(timeYear(d), d), p, 3);
}

function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}

function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}

function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}

function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}

function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}

function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}

function formatWeekNumberSunday(d, p) {
  return pad(timeSunday.count(timeYear(d) - 1, d), p, 2);
}

function dISO(d) {
  var day = d.getDay();
  return (day >= 4 || day === 0) ? timeThursday(d) : timeThursday.ceil(d);
}

function formatWeekNumberISO(d, p) {
  d = dISO(d);
  return pad(timeThursday.count(timeYear(d), d) + (timeYear(d).getDay() === 4), p, 2);
}

function formatWeekdayNumberSunday(d) {
  return d.getDay();
}

function formatWeekNumberMonday(d, p) {
  return pad(timeMonday.count(timeYear(d) - 1, d), p, 2);
}

function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}

function formatYearISO(d, p) {
  d = dISO(d);
  return pad(d.getFullYear() % 100, p, 2);
}

function formatFullYear(d, p) {
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatFullYearISO(d, p) {
  var day = d.getDay();
  d = (day >= 4 || day === 0) ? timeThursday(d) : timeThursday.ceil(d);
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+"))
      + pad(z / 60 | 0, "0", 2)
      + pad(z % 60, "0", 2);
}

function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}

function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}

function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}

function formatUTCDayOfYear(d, p) {
  return pad(1 + utcDay.count(utcYear(d), d), p, 3);
}

function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}

function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}

function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}

function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}

function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}

function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}

function formatUTCWeekNumberSunday(d, p) {
  return pad(utcSunday.count(utcYear(d) - 1, d), p, 2);
}

function UTCdISO(d) {
  var day = d.getUTCDay();
  return (day >= 4 || day === 0) ? utcThursday(d) : utcThursday.ceil(d);
}

function formatUTCWeekNumberISO(d, p) {
  d = UTCdISO(d);
  return pad(utcThursday.count(utcYear(d), d) + (utcYear(d).getUTCDay() === 4), p, 2);
}

function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}

function formatUTCWeekNumberMonday(d, p) {
  return pad(utcMonday.count(utcYear(d) - 1, d), p, 2);
}

function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCYearISO(d, p) {
  d = UTCdISO(d);
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCFullYearISO(d, p) {
  var day = d.getUTCDay();
  d = (day >= 4 || day === 0) ? utcThursday(d) : utcThursday.ceil(d);
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCZone() {
  return "+0000";
}

function formatLiteralPercent() {
  return "%";
}

function formatUnixTimestamp(d) {
  return +d;
}

function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1000);
}

var locale;
var timeFormat;

defaultLocale({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

function defaultLocale(definition) {
  locale = formatLocale(definition);
  timeFormat = locale.format;
  locale.parse;
  locale.utcFormat;
  locale.utcParse;
  return locale;
}

function date(t) {
  return new Date(t);
}

function number(t) {
  return t instanceof Date ? +t : +new Date(+t);
}

function calendar(ticks, tickInterval, year, month, week, day, hour, minute, second, format) {
  var scale = continuous(),
      invert = scale.invert,
      domain = scale.domain;

  var formatMillisecond = format(".%L"),
      formatSecond = format(":%S"),
      formatMinute = format("%I:%M"),
      formatHour = format("%I %p"),
      formatDay = format("%a %d"),
      formatWeek = format("%b %d"),
      formatMonth = format("%B"),
      formatYear = format("%Y");

  function tickFormat(date) {
    return (second(date) < date ? formatMillisecond
        : minute(date) < date ? formatSecond
        : hour(date) < date ? formatMinute
        : day(date) < date ? formatHour
        : month(date) < date ? (week(date) < date ? formatDay : formatWeek)
        : year(date) < date ? formatMonth
        : formatYear)(date);
  }

  scale.invert = function(y) {
    return new Date(invert(y));
  };

  scale.domain = function(_) {
    return arguments.length ? domain(Array.from(_, number)) : domain().map(date);
  };

  scale.ticks = function(interval) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], interval == null ? 10 : interval);
  };

  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };

  scale.nice = function(interval) {
    var d = domain();
    if (!interval || typeof interval.range !== "function") interval = tickInterval(d[0], d[d.length - 1], interval == null ? 10 : interval);
    return interval ? domain(nice(d, interval)) : scale;
  };

  scale.copy = function() {
    return copy(scale, calendar(ticks, tickInterval, year, month, week, day, hour, minute, second, format));
  };

  return scale;
}

function time() {
  return initRange.apply(calendar(timeTicks, timeTickInterval, timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute, second, timeFormat).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]), arguments);
}

class Rect {
  constructor (left = null, top = null, right = null, bottom = null) {
    this.left = left;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
  }

  height () {
    return this.top === null || this.bottom === null ? null : this.bottom - this.top
  }

  setHeight (height) {
    if (this.top === null && this.bottom === null) {
      console.error('[Rect] Impossible to set height, top and bottom are null.');
      return this
    }

    if (typeof this.top === 'number') {
      this.bottom = this.top + height;
      return this
    }

    this.top = this.bottom - height;
    return this
  }

  width () {
    return this.left === null || this.right === null ? null : this.right - this.left
  }

  setWidth (width) {
    if (this.left === null && this.right === null) {
      console.error('[Rect] Impossible to set width, left and right are null.');
      return this
    }

    if (typeof this.left === 'number') {
      this.right = this.left + width;
      return this
    }

    this.left = this.right - width;
    return this
  }

  centerX () {
    return this.right - this.width() / 2
  }

  centerY () {
    return this.bottom - this.height() / 2
  }
}

function textWrap (node, width, lineHeight, paragraphSpacing = 0) {
  // Get the content of the text node.
  const dnode = select(node);
  const txt = dnode.text().trim();

  // Split different paragraphs into lines
  const paragraphs = txt.split('\n');

  // If the text already has been wrapped, the text is inside the child tspan
  // elements and not in the text node itself. Remove any existing content.
  node.innerHTML = '';

  // Get the position of the text node which is fixed by the x/y attributes
  const x = +dnode.attr('x');
  let currentY = +dnode.attr('y');

  // Get the text anchor which defaults to start
  const anchor = dnode.attr('text-anchor') || 'start';

  // Process each paragraph separately
  for (let i = 0; i < paragraphs.length; i++) {
    // Split into words
    const words = paragraphs[i].split(/[^\S\u00A0]+/).reverse();

    // Insert the first tspan of the paragraph and prepare for inserting the individual words.
    let tspan = dnode.append('tspan')
      .attr('x', x)
      .attr('y', currentY)
      .attr('text-anchor', anchor);

    let word = words.pop();
    let line = [];

    while (word) {
      line.push(word);
      tspan.text(line.join(' '));

      // Compute the current line width and check if the text is too long.
      if (tspan.node().getComputedTextLength() > width && line.length > 1) {
        // We need to start a new line.
        line.pop();
        tspan.text(line.join(' '));
        line = [word];
        currentY += lineHeight;
        tspan = dnode.append('tspan')
          .attr('x', x)
          .attr('y', currentY)
          .attr('text-anchor', anchor)
          .text(word);
      }

      word = words.pop();
    }

    currentY += lineHeight + paragraphSpacing;
  }
}

/**
 * Fits a text of a single SVG text node inside a provided width and height. It can try several
 * texts in turn.
 * @param {array} textArray An array of possible texts that should be fitted. fitText first tries
 * to fit the first text in the array, and if it does not fit, it tries the second and so on until
 * it finds a text which fits.
 * @param {SVGElement} node The SVG text node where the text should be placed.
 * @param {number} width The maximum allowed width in pixels.
 * @param {number} height The maximum allowed height in pixels.
 * @param {truncateString} string The character or string displayed in case of label truncating.
 *    If the label should not be truncated null can be passed (this is the default behaviour).
 *    If the label should be truncated but no indicator displayed, an empty string can be passed.
 * @param {integer} labelMinLength The minimum number of characters displayed when the label gets
 *    truncated. This parameter does not have any effect if the label is not truncated.
 * @returns true if the fitting process was successful, and false if no text fits.
 */
function fitText (textArray, node, width, height, truncateString = null, labelMinLength = 3) {
  // Go through the possible labels until one of them fits inside the rect
  // If none fits, the label is not shown
  let i = 0;
  let fittingLabelFound = false;
  while (i < textArray.length && fittingLabelFound === false) {
    node.innerHTML = textArray[i];
    const cr = node.getBBox();
    fittingLabelFound = (cr.width <= width && cr.height <= height);
    i += 1;
  }

  // If no fitting label has been found so far but the overflow option is activated,
  // truncate the last available label and try to fit a truncated label.
  if (truncateString !== null && fittingLabelFound === false) {
    // A truncated label can only affect the length and not the height.
    let cr = node.getBBox();
    if (cr.height > height) return false

    let tlbl = node.innerHTML;
    while (tlbl.length > labelMinLength && cr.width > width) {
      tlbl = tlbl.substring(0, tlbl.length - 1);
      node.innerHTML = tlbl + truncateString;
      cr = node.getBBox();
      if (cr.width <= width) return true
    }

    return false
  }

  return fittingLabelFound
}

function approximateTextLength (textLength, fontSize, fontWeight) {
  const charLength = {
    400: s => 0.1 + 0.58 * s,
    700: s => 0.1 + 0.65 * s
  };
  return Math.ceil(textLength * (charLength[fontWeight] || charLength[400])(fontSize))
}

function justifyText (node, availableWidth, nLines, lineHeight) {
  if (node.getComputedTextLength() <= availableWidth) return

  const dnode = select(node);
  const txt = node.textContent.trim();

  // If there is no text, we don't do anything.
  if (!txt || (txt && txt.length === 0)) return

  // We don't support paragraphs in this function, just small texts.
  const words = txt.split(/\s+/);

  node.textContent = '';

  // Pre-compute word lengths (plus trailing space)
  const wordLengths = words.map(word => {
    node.textContent = word + ' ';
    return node.getComputedTextLength()
  });

  node.textContent = '';

  const wordGroups = clusterNumbers(wordLengths, nLines);

  // Create a tspan node for each word group and fill the text
  let wcnt = 0;
  let dy = 0;
  for (let i = 0; i < wordGroups.length; i++) {
    dnode.append('tspan')
      .attr('x', 0)
      .attr('y', dy)
      .text(words.slice(wcnt, wcnt + wordGroups[i].length).join(' '));

    wcnt += wordGroups[i].length;
    dy += lineHeight;
  }
}

function clusterNumbers (nums, n) {
  const clusters = Array(n).fill(null).map(() => []);
  const sum = nums.reduce((a, b) => a + b);
  const maxVal = Math.max(...nums);

  // Get the approximate sum for each cluster, or the biggest value if bigger than the sum
  const csum = Math.max(sum / n, maxVal);

  // Distribute the numbers into the clusters
  let j = 0;
  let runningSum = 0;
  for (let i = 0; i < nums.length; i++) {
    const v = nums[i];

    // Evaluate if adding the current number would exceet the approximate cluster size
    if (runningSum + v > csum) {
      // Switch to the next cluster if this is not the last cluster already
      j = Math.min(j + 1, n - 1);
      runningSum = 0;
    }

    clusters[j].push(v);
    runningSum += v;
  }

  // TODO: Balance the clusters

  return clusters
}

/* global dynvis */

const continuousTypes = ['linear', 'time'];
const categoricalTypes = ['ordinal', 'band'];

class Axis {
  constructor (chartArea, type = 'linear', placement = 'bottom', options = {}) {
    this.chartArea = chartArea;

    // Axis type can be one of the following values:
    // linear, time, ordinal, band
    this.type = type;
    this.placement = placement;
    this.flexibleBand = options.flexibleBand || false;
    this.formatValue = options.formatValue || defaultFormatValue;
    this.ticks = null;
    this.style = {
      values: {
        font: { size: 12, color: '#757575', weight: 400 },
        align: this.orient() === 'h'
          ? 'center'
          : options.valuesAlign || 'right',
        thinLabels: null,
        allowLabelShortening: true
      }
    };

    // The width of the value labels of the axis. This is computed during the prerendering stage
    // and the width for the first, last and longest label are kept in an object.
    this.valuesWidth = null;

    this._lineWrapping = false;

    this.scale = null;
  }

  orient () {
    return this.placement === 'bottom' || this.placement === 'top' ? 'h' : 'v'
  }

  isContinuous () {
    return continuousTypes.indexOf(this.type) >= 0
  }

  isCategorical () {
    return categoricalTypes.indexOf(this.type) >= 0
  }

  init (node, state) {
    this._state = state;
    node.classList.add('dvAxis');
    select(node).append('g').attr('class', 'dvAxisTicks');
  }

  prerender (node, state) {
    this._state = state;

    this.valuesSel = select(node).select('.dvAxisTicks')
      .selectAll('g').data(this.ticks).join('g')
      .selectAll('text').data(d => [d]).join('text')
      .classed('dvHidden', false);

    this.valuesSel
      .text(d => this.formatValue(d, { axis: this }, state, this.chartArea.chart))
      .style('font-size', `${this.style.values.font.size}px`);

    this.xValuesSel = select(node).select('.dvXAxis .dvAxisTicks')
      .selectAll('g').data(this.ticks).join('g')
      .selectAll('line').data(d => [d]).join('line')
      .classed('dvHidden', false)
      .style('stroke', '#ccc')
      .style('stroke-width', 1);
    // Compute the width of the first, last and longest value label
    this._computeValueLabelWidth();
  }

  render (node, state, rect, domain) {
    this.valuesSel = select(node).select('.dvAxisTicks')
      .selectAll('g').data(this.ticks).join('g')
      .selectAll('text').data((d, i) => [{ lbl: d, idx: i }]).join('text')
      .style(
        'fill',
        d => this._(this.style.values.font.color, d, { axis: this }, state, this.chartArea.chart)
      )
      .style(
        'font-weight',
        d => this._(this.style.values.font.weight, d, { axis: this }, state, this.chartArea.chart)
      );

    this.xValuesSel = select(node).select('.dvAxisTicks')
      .selectAll('g').data(this.ticks).join('g')
      .selectAll('line').data((d, i) => [{ lbl: d, idx: i }]).join('line');

    if (this._lineWrapping === false) {
      this.valuesSel
        .text(d => {
          const v = this.formatValue(d.lbl, { axis: this }, state, this.chartArea.chart);
          return v
        })
        .style('font-size', `${this.style.values.font.size}px`);
    }

    this.orient() === 'h'
      ? this.renderH(node, state, rect, domain)
      : this.renderV(node, state, rect, domain);
  }

  renderH (_node, _state, rect, _domain) {
    const ypos = this.placement === 'bottom'
      ? rect.bottom + this.style.values.font.size + 4
      : rect.top - 4;
    this.valuesSel
      .attr('x', (d, _i) => {
        return this.scale(d.lbl, d.idx) + (this.type === 'band' ? this.scale.bandwidth() / 2 : 0)
      })
      .attr('y', ypos + 2)
      .style('text-anchor', 'middle')
      .call(sel => {
        // Shorten or remove overlapping labels.
        const nodes = sel.nodes();
        nodes.forEach(n => n.classList.remove('dvHidden'));

        // Order the nodes according to their x-position
        nodes.sort((a, b) => a.getBoundingClientRect().left - b.getBoundingClientRect().left);

        if (this._hasOverlappingLabels(nodes)) {
          if (this.type === 'band' && this.style.values.allowLabelShortening === true) {
            this._shortenLabels(nodes);
          } else {
            // Remove overlapping labels if needed.
            if (this.style.values.thinLabels !== false) {
              this._thinLabels(nodes);
            }
          }
        }
      });
    this.xValuesSel
      .attr('x1', (d, _i) => {
        return this.scale(d.lbl, d.idx) + (this.type === 'band' ? this.scale.bandwidth() / 2 : 0)
      })
      .attr('x2', (d, _i) => {
        return this.scale(d.lbl, d.idx) + (this.type === 'band' ? this.scale.bandwidth() / 2 : 0)
      })
      .attr('y1', (d, _i) => {
        return rect.bottom
      })
      .attr('y2', (d, _i) => {
        return rect.bottom + 5
      })
      .style('fill', 'black');
  }

  renderV (_node, _state, _rect, _domain) {
    let x = 0;
    let textAnchor = 'start';
    if (this.style.values.align === 'center') {
      x = this.valuesWidth.max / 2;
      textAnchor = 'middle';
    } else if (this.style.values.align === 'right') {
      x = this.valuesWidth.max;
      textAnchor = 'end';
    }

    // If there is a scale of type band, there might be a need for adjusting the height of some
    // bands to fit the complete label. This is done by setting the minimum step size for the axis.
    if (this.type === 'band' && this.flexibleBand) {
      const heights = this.valuesSel.nodes().map((n, i) => {
        const bbox = n.getBoundingClientRect();
        return bbox.height + 3
      });

      this.scale.stepSize(heights);
    }

    this.valuesSel
      .attr('transform', (d, i, nodes) => {
        let y = this.scale(d.lbl, d.idx);
        if (this.type === 'band') {
          y += 0.5 * this.scale.bandwidth(d.idx);
          y += this.style.values.font.size + 2;
          const h = nodes[i].getBoundingClientRect().height;
          y -= h / 2;
        } else {
          y += this.style.values.font.size / 2 - 2;
        }
        return `translate(${x} ${y})`
      })
      .style('text-anchor', textAnchor)
      .call(sel => {
        // Remove overlapping labels if needed.
        if ((this.isContinuous() && this.style.values.thinLabels !== false) || this.style.values.thinLabels === true) {
          const nodes = sel.nodes();
          nodes.forEach(n => n.classList.remove('dvHidden'));
          if (this._hasOverlappingLabels(nodes)) {
            this._thinLabels(nodes);
          }
        }
      });
  }

  wrapLabels (nLines, availableWidth = 300) {
    this._lineWrapping = true;
    this.valuesSel.nodes().forEach(node => {
      justifyText(node, availableWidth, nLines, this.style.values.font.size * 1.25);
    });
  }

  _computeValueLabelWidth () {
    const txtNodes = this.valuesSel.nodes();
    if (txtNodes.length === 0) {
      this.valuesWidth = { first: 0, last: 0, max: 0 };
      return
    }

    this.valuesWidth = {
      first: txtNodes[0].getBoundingClientRect().width,
      last: txtNodes[txtNodes.length - 1].getBoundingClientRect().width,
      max: txtNodes.reduce((prev, n) => Math.max(prev, n.getBoundingClientRect().width), 0)
    };
  }

  _hasOverlappingLabels (nodes) {
    for (let i = 1; i < nodes.length; i++) {
      // Get the bounding box for nodes A and B. The order of the A and B is not fixed,
      // we need to consider both cases (A left of B, and B left of A)
      const a = nodes[i].getBoundingClientRect();
      const b = nodes[i - 1].getBoundingClientRect();
      if (rectanglesIntersect(a, b, 4)) return true
    }
    return false
  }

  _thinLabels (nodes) {
    // We take out labels at regular intervals, e.g. we leave only every 2nd, 3rd, 4th etc. label
    // In a first step, we determine this factor, trying first with factor 2, then 3, 4, etc.
    // To do this, we first get the bounding box of each label.
    const bboxes = nodes.map(n => n.getBoundingClientRect());

    // Figure out the smallest step where labels are not overlapping
    const hasOverlap = function (bboxes, step) {
      for (let i = step; i < bboxes.length; i += step) {
        if (rectanglesIntersect(bboxes[i], bboxes[i - step], 4)) return true
      }
      return false
    };
    let step = 1;
    while (hasOverlap(bboxes, step) && step < nodes.length) step += 1;

    // Hide the labels between the steps. We never hide the first label
    for (let i = 1; i < nodes.length; i++) {
      if (i % step > 0) nodes[i].classList.add('dvHidden');
    }
  }

  _shortenLabels (nodes) {
    // Try to shorten overlapping to the width of the category. If this does not work, we apply
    // thinning in a second step.

    if (this.style.values.allowLabelShortening) {
      // Maximum possible width of a label
      const w = this.scale.step() - 4;
      nodes.forEach(el => {
        const bbox = el.getBoundingClientRect();
        if (bbox.width > w) {
          fitText([el.innerHTML], el, w, bbox.height, '…', 3);
        }
      });
    }

    if (this._hasOverlappingLabels(nodes)) this._thinLabels(nodes);
  }

  _ (...args) {
    const val = typeof args[0] === 'function' ? args[0](...args.slice(1)) : args[0];
    const env = (this._state && this._state.ENV) || null;
    return val && env && val[env] ? val[env] : val
  }
}

function defaultFormatValue (value, data, _state, _chart) {
  if (data.axis.type === 'time') {
    const res = data.axis._temporalResolution || 'D';
    return defaultTimeFormat[res](value)
  }
  return `${value}`
}

const defaultTimeFormat = {
  Y: t => `${t.getFullYear()}`,
  M: t => t.toLocaleDateString(dynvis.LOCALE || 'en-US', { month: 'numeric', year: 'numeric' }),
  W: t => t.toLocaleDateString(dynvis.LOCALE || 'en-US', { day: 'numeric', month: 'numeric', year: 'numeric' }),
  D: t => t.toLocaleDateString(dynvis.LOCALE || 'en-US', { day: 'numeric', month: 'numeric', year: 'numeric' }),
  h: t => t.toLocaleDateString(dynvis.LOCALE || 'en-US', { hour: 'numeric', day: 'numeric', month: 'numeric', year: 'numeric' }),
  m: t => t.toLocaleDateString(dynvis.LOCALE || 'en-US', { minute: 'numeric', hour: 'numeric', day: 'numeric', month: 'numeric', year: 'numeric' })
};

function scaleBand () {
  let domain = [];
  let range = [];
  let paddingInner = 0;
  let paddingOuter = 0.3;
  let groupSpacing = 30;

  // scaleBand supports setting a minimum step size. This can either be a single value in which case
  // the minimum size applies to all steps, or an array of values in which case there should be one
  // minimum size for each value in the domain.
  let stepSize = null;

  // If a minimum step size has been set, the cumulated step size is pre-calculated for all steps.
  let cumulatedStepSize = null;

  function scale (d, i) {
    // If i is set, we take it for computing the scale. If i is not given, we rely on the value d
    // to find its position within the domain.
    const idx = typeof i === 'undefined' ? domain.flat(1).indexOf(d) : i;

    // Number of group headings overall
    const ng = domain.length > 1 && Array.isArray(domain[0]) ? domain.length : 0;

    // How many group headings are included before the value?
    let nh = 0;
    if (ng > 0) nh = getNestedArrayIndex(domain, idx) + 1;

    // Get the step size
    const s = scale.step();

    if (Array.isArray(stepSize)) {
      return range[0] + s * paddingOuter + cumulatedStepSize[idx]
    }

    // The value without group headings would be paddingOuter * step + idx * step
    let v = range[0] + s * paddingOuter + idx * s;

    // Each group headings adds the groupSpacing, and every group except for the first one replaces
    // a paddingInner with 2 paddingOuter (plus the groupSpacing).
    if (nh > 0) {
      v += nh * groupSpacing;
      v += (nh - 1) * (2 * s * paddingOuter - s * paddingInner);
    }

    return v
  }

  scale.domain = function (dom) {
    if (typeof dom === 'undefined') return domain
    domain = dom;
    return this
  };

  scale.range = function (rng) {
    if (typeof rng === 'undefined') return range
    range = rng;
    return this
  };

  // Returns the step size. If the optional argument `i` is provided, it will look up the step size
  // of the i-th step if defined.
  scale.step = function (i) {
    // If the step size has been manually set, return it. If the manual step size is an array,
    // return the i-th value if it has been set. Otherwise, return the minimum size.
    if (stepSize !== null) {
      if (Array.isArray(stepSize)) {
        return typeof i === 'number' ? stepSize[i] : stepSize.reduce((a, b) => Math.min(a, b))
      }
      return stepSize
    }

    if (range.length < 2) return 0

    // The number of values in the domain.
    const nv = domain.flat(1).length;

    // The number of groups to include the group spacing inside the step computation.
    // There is either no group, or 2 or more. If there is exactly 1 group, no group heading is
    // shown, so it is considered as none.
    const ng = domain.length > 1 && Array.isArray(domain[0]) ? domain.length : 0;

    // The available space without the group spacing
    const availableSpace = (range[1] - range[0]) - (ng * groupSpacing);

    // The number of paddingInner. Without groups, this is nv - 1. Each group except for the first
    // one removes a paddingInner (and replaces it by 2 paddingOuter plus the groupSpacing).
    const nPaddingInner = ng === 0 ? nv - 1 : nv - 1 - (ng - 1);

    // The number of paddingOuter. Without groups, this is 2. With groups, each intermediary group
    // will add two more paddingOuter (but not the first one).
    const nPaddingOuter = ng === 0 ? 2 : 2 + (ng - 1) * 2;

    // We can now compute the step size. The bandwidth is (1 - paddingInner), by definition.
    const bw = 1 - paddingInner;
    const stepSum = nv * bw + nPaddingInner * paddingInner + nPaddingOuter * paddingOuter;

    return availableSpace / stepSum
  };

  scale.bandwidth = function (i) {
    return scale.step(i) * (1 - paddingInner)
  };

  // Possibility to set the step size manually. This can either be a unique value and it will be
  // applied for all steps, or it can be an array of values, in which case each value is
  // taken for each band. This allows for varying steps, e.g. for accomodating variably long
  // labels which could be on several lines.
  scale.stepSize = function (ss) {
    if (typeof ss === 'undefined') return stepSize
    stepSize = ss;

    // Compute the cumulated step size if needed
    if (Array.isArray(ss)) {
      let s = 0;
      cumulatedStepSize = [];
      for (let i = 0; i < ss.length; i++) {
        cumulatedStepSize.push(s);
        s += ss[i];
      }
    }

    return this
  };

  scale.paddingInner = function (p) {
    if (typeof p === 'undefined') return paddingInner
    paddingInner = p;
    return this
  };

  scale.paddingOuter = function (p) {
    if (typeof p === 'undefined') return paddingOuter
    paddingOuter = p;
    return this
  };

  scale.hasGroups = function () {
    return (domain.length > 0 && Array.isArray(domain[0]))
  };

  scale.groupSpacing = function (spacing) {
    if (typeof spacing === 'undefined') return groupSpacing
    groupSpacing = spacing;
    return this
  };

  scale.group = function (idx) {
    // Get the value index for the group idx
    const vidx = idx <= 0 ? 0 : domain.slice(0, idx).map(v => v.length).reduce((a, b) => a + b);
    const s = scale.step();
    return scale(null, vidx) - groupSpacing - s * paddingOuter
  };

  scale.type = 'band';

  return scale
}

function getNestedArrayIndex (nestedArray, flatIndex) {
  let i = 0;
  while (i < nestedArray.length) {
    if (flatIndex < nestedArray[i].length) return i

    flatIndex -= nestedArray[i].length;
    i++;
  }
  return -1
}

/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

var objectToString = Object.prototype.toString;
var isArray = Array.isArray || function isArrayPolyfill (object) {
  return objectToString.call(object) === '[object Array]';
};

function isFunction (object) {
  return typeof object === 'function';
}

/**
 * More correct typeof string handling array
 * which normally returns typeof 'object'
 */
function typeStr (obj) {
  return isArray(obj) ? 'array' : typeof obj;
}

function escapeRegExp (string) {
  return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
}

/**
 * Null safe way of checking whether or not an object,
 * including its prototype, has a given property
 */
function hasProperty (obj, propName) {
  return obj != null && typeof obj === 'object' && (propName in obj);
}

/**
 * Safe way of detecting whether or not the given thing is a primitive and
 * whether it has the given property
 */
function primitiveHasOwnProperty (primitive, propName) {
  return (
    primitive != null
    && typeof primitive !== 'object'
    && primitive.hasOwnProperty
    && primitive.hasOwnProperty(propName)
  );
}

// Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
// See https://github.com/janl/mustache.js/issues/189
var regExpTest = RegExp.prototype.test;
function testRegExp (re, string) {
  return regExpTest.call(re, string);
}

var nonSpaceRe = /\S/;
function isWhitespace (string) {
  return !testRegExp(nonSpaceRe, string);
}

var entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

function escapeHtml$1 (string) {
  return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap (s) {
    return entityMap[s];
  });
}

var whiteRe = /\s*/;
var spaceRe = /\s+/;
var equalsRe = /\s*=/;
var curlyRe = /\s*\}/;
var tagRe = /#|\^|\/|>|\{|&|=|!/;

/**
 * Breaks up the given `template` string into a tree of tokens. If the `tags`
 * argument is given here it must be an array with two string values: the
 * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
 * course, the default is to use mustaches (i.e. mustache.tags).
 *
 * A token is an array with at least 4 elements. The first element is the
 * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
 * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
 * all text that appears outside a symbol this element is "text".
 *
 * The second element of a token is its "value". For mustache tags this is
 * whatever else was inside the tag besides the opening symbol. For text tokens
 * this is the text itself.
 *
 * The third and fourth elements of the token are the start and end indices,
 * respectively, of the token in the original template.
 *
 * Tokens that are the root node of a subtree contain two more elements: 1) an
 * array of tokens in the subtree and 2) the index in the original template at
 * which the closing tag for that section begins.
 *
 * Tokens for partials also contain two more elements: 1) a string value of
 * indendation prior to that tag and 2) the index of that tag on that line -
 * eg a value of 2 indicates the partial is the third tag on this line.
 */
function parseTemplate (template, tags) {
  if (!template)
    return [];
  var lineHasNonSpace = false;
  var sections = [];     // Stack to hold section tokens
  var tokens = [];       // Buffer to hold the tokens
  var spaces = [];       // Indices of whitespace tokens on the current line
  var hasTag = false;    // Is there a {{tag}} on the current line?
  var nonSpace = false;  // Is there a non-space char on the current line?
  var indentation = '';  // Tracks indentation for tags that use it
  var tagIndex = 0;      // Stores a count of number of tags encountered on a line

  // Strips all whitespace tokens array for the current line
  // if there was a {{#tag}} on it and otherwise only space.
  function stripSpace () {
    if (hasTag && !nonSpace) {
      while (spaces.length)
        delete tokens[spaces.pop()];
    } else {
      spaces = [];
    }

    hasTag = false;
    nonSpace = false;
  }

  var openingTagRe, closingTagRe, closingCurlyRe;
  function compileTags (tagsToCompile) {
    if (typeof tagsToCompile === 'string')
      tagsToCompile = tagsToCompile.split(spaceRe, 2);

    if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
      throw new Error('Invalid tags: ' + tagsToCompile);

    openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
    closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
    closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
  }

  compileTags(tags || mustache.tags);

  var scanner = new Scanner(template);

  var start, type, value, chr, token, openSection;
  while (!scanner.eos()) {
    start = scanner.pos;

    // Match any text between tags.
    value = scanner.scanUntil(openingTagRe);

    if (value) {
      for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
        chr = value.charAt(i);

        if (isWhitespace(chr)) {
          spaces.push(tokens.length);
          indentation += chr;
        } else {
          nonSpace = true;
          lineHasNonSpace = true;
          indentation += ' ';
        }

        tokens.push([ 'text', chr, start, start + 1 ]);
        start += 1;

        // Check for whitespace on the current line.
        if (chr === '\n') {
          stripSpace();
          indentation = '';
          tagIndex = 0;
          lineHasNonSpace = false;
        }
      }
    }

    // Match the opening tag.
    if (!scanner.scan(openingTagRe))
      break;

    hasTag = true;

    // Get the tag type.
    type = scanner.scan(tagRe) || 'name';
    scanner.scan(whiteRe);

    // Get the tag value.
    if (type === '=') {
      value = scanner.scanUntil(equalsRe);
      scanner.scan(equalsRe);
      scanner.scanUntil(closingTagRe);
    } else if (type === '{') {
      value = scanner.scanUntil(closingCurlyRe);
      scanner.scan(curlyRe);
      scanner.scanUntil(closingTagRe);
      type = '&';
    } else {
      value = scanner.scanUntil(closingTagRe);
    }

    // Match the closing tag.
    if (!scanner.scan(closingTagRe))
      throw new Error('Unclosed tag at ' + scanner.pos);

    if (type == '>') {
      token = [ type, value, start, scanner.pos, indentation, tagIndex, lineHasNonSpace ];
    } else {
      token = [ type, value, start, scanner.pos ];
    }
    tagIndex++;
    tokens.push(token);

    if (type === '#' || type === '^') {
      sections.push(token);
    } else if (type === '/') {
      // Check section nesting.
      openSection = sections.pop();

      if (!openSection)
        throw new Error('Unopened section "' + value + '" at ' + start);

      if (openSection[1] !== value)
        throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
    } else if (type === 'name' || type === '{' || type === '&') {
      nonSpace = true;
    } else if (type === '=') {
      // Set the tags for the next time around.
      compileTags(value);
    }
  }

  stripSpace();

  // Make sure there are no open sections when we're done.
  openSection = sections.pop();

  if (openSection)
    throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

  return nestTokens(squashTokens(tokens));
}

/**
 * Combines the values of consecutive text tokens in the given `tokens` array
 * to a single token.
 */
function squashTokens (tokens) {
  var squashedTokens = [];

  var token, lastToken;
  for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
    token = tokens[i];

    if (token) {
      if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
        lastToken[1] += token[1];
        lastToken[3] = token[3];
      } else {
        squashedTokens.push(token);
        lastToken = token;
      }
    }
  }

  return squashedTokens;
}

/**
 * Forms the given array of `tokens` into a nested tree structure where
 * tokens that represent a section have two additional items: 1) an array of
 * all tokens that appear in that section and 2) the index in the original
 * template that represents the end of that section.
 */
function nestTokens (tokens) {
  var nestedTokens = [];
  var collector = nestedTokens;
  var sections = [];

  var token, section;
  for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
    token = tokens[i];

    switch (token[0]) {
      case '#':
      case '^':
        collector.push(token);
        sections.push(token);
        collector = token[4] = [];
        break;
      case '/':
        section = sections.pop();
        section[5] = token[2];
        collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
        break;
      default:
        collector.push(token);
    }
  }

  return nestedTokens;
}

/**
 * A simple string scanner that is used by the template parser to find
 * tokens in template strings.
 */
function Scanner (string) {
  this.string = string;
  this.tail = string;
  this.pos = 0;
}

/**
 * Returns `true` if the tail is empty (end of string).
 */
Scanner.prototype.eos = function eos () {
  return this.tail === '';
};

/**
 * Tries to match the given regular expression at the current position.
 * Returns the matched text if it can match, the empty string otherwise.
 */
Scanner.prototype.scan = function scan (re) {
  var match = this.tail.match(re);

  if (!match || match.index !== 0)
    return '';

  var string = match[0];

  this.tail = this.tail.substring(string.length);
  this.pos += string.length;

  return string;
};

/**
 * Skips all text until the given regular expression can be matched. Returns
 * the skipped string, which is the entire tail if no match can be made.
 */
Scanner.prototype.scanUntil = function scanUntil (re) {
  var index = this.tail.search(re), match;

  switch (index) {
    case -1:
      match = this.tail;
      this.tail = '';
      break;
    case 0:
      match = '';
      break;
    default:
      match = this.tail.substring(0, index);
      this.tail = this.tail.substring(index);
  }

  this.pos += match.length;

  return match;
};

/**
 * Represents a rendering context by wrapping a view object and
 * maintaining a reference to the parent context.
 */
function Context (view, parentContext) {
  this.view = view;
  this.cache = { '.': this.view };
  this.parent = parentContext;
}

/**
 * Creates a new context using the given view with this context
 * as the parent.
 */
Context.prototype.push = function push (view) {
  return new Context(view, this);
};

/**
 * Returns the value of the given name in this context, traversing
 * up the context hierarchy if the value is absent in this context's view.
 */
Context.prototype.lookup = function lookup (name) {
  var cache = this.cache;

  var value;
  if (cache.hasOwnProperty(name)) {
    value = cache[name];
  } else {
    var context = this, intermediateValue, names, index, lookupHit = false;

    while (context) {
      if (name.indexOf('.') > 0) {
        intermediateValue = context.view;
        names = name.split('.');
        index = 0;

        /**
         * Using the dot notion path in `name`, we descend through the
         * nested objects.
         *
         * To be certain that the lookup has been successful, we have to
         * check if the last object in the path actually has the property
         * we are looking for. We store the result in `lookupHit`.
         *
         * This is specially necessary for when the value has been set to
         * `undefined` and we want to avoid looking up parent contexts.
         *
         * In the case where dot notation is used, we consider the lookup
         * to be successful even if the last "object" in the path is
         * not actually an object but a primitive (e.g., a string, or an
         * integer), because it is sometimes useful to access a property
         * of an autoboxed primitive, such as the length of a string.
         **/
        while (intermediateValue != null && index < names.length) {
          if (index === names.length - 1)
            lookupHit = (
              hasProperty(intermediateValue, names[index])
              || primitiveHasOwnProperty(intermediateValue, names[index])
            );

          intermediateValue = intermediateValue[names[index++]];
        }
      } else {
        intermediateValue = context.view[name];

        /**
         * Only checking against `hasProperty`, which always returns `false` if
         * `context.view` is not an object. Deliberately omitting the check
         * against `primitiveHasOwnProperty` if dot notation is not used.
         *
         * Consider this example:
         * ```
         * Mustache.render("The length of a football field is {{#length}}{{length}}{{/length}}.", {length: "100 yards"})
         * ```
         *
         * If we were to check also against `primitiveHasOwnProperty`, as we do
         * in the dot notation case, then render call would return:
         *
         * "The length of a football field is 9."
         *
         * rather than the expected:
         *
         * "The length of a football field is 100 yards."
         **/
        lookupHit = hasProperty(context.view, name);
      }

      if (lookupHit) {
        value = intermediateValue;
        break;
      }

      context = context.parent;
    }

    cache[name] = value;
  }

  if (isFunction(value))
    value = value.call(this.view);

  return value;
};

/**
 * A Writer knows how to take a stream of tokens and render them to a
 * string, given a context. It also maintains a cache of templates to
 * avoid the need to parse the same template twice.
 */
function Writer () {
  this.templateCache = {
    _cache: {},
    set: function set (key, value) {
      this._cache[key] = value;
    },
    get: function get (key) {
      return this._cache[key];
    },
    clear: function clear () {
      this._cache = {};
    }
  };
}

/**
 * Clears all cached templates in this writer.
 */
Writer.prototype.clearCache = function clearCache () {
  if (typeof this.templateCache !== 'undefined') {
    this.templateCache.clear();
  }
};

/**
 * Parses and caches the given `template` according to the given `tags` or
 * `mustache.tags` if `tags` is omitted,  and returns the array of tokens
 * that is generated from the parse.
 */
Writer.prototype.parse = function parse (template, tags) {
  var cache = this.templateCache;
  var cacheKey = template + ':' + (tags || mustache.tags).join(':');
  var isCacheEnabled = typeof cache !== 'undefined';
  var tokens = isCacheEnabled ? cache.get(cacheKey) : undefined;

  if (tokens == undefined) {
    tokens = parseTemplate(template, tags);
    isCacheEnabled && cache.set(cacheKey, tokens);
  }
  return tokens;
};

/**
 * High-level method that is used to render the given `template` with
 * the given `view`.
 *
 * The optional `partials` argument may be an object that contains the
 * names and templates of partials that are used in the template. It may
 * also be a function that is used to load partial templates on the fly
 * that takes a single argument: the name of the partial.
 *
 * If the optional `config` argument is given here, then it should be an
 * object with a `tags` attribute or an `escape` attribute or both.
 * If an array is passed, then it will be interpreted the same way as
 * a `tags` attribute on a `config` object.
 *
 * The `tags` attribute of a `config` object must be an array with two
 * string values: the opening and closing tags used in the template (e.g.
 * [ "<%", "%>" ]). The default is to mustache.tags.
 *
 * The `escape` attribute of a `config` object must be a function which
 * accepts a string as input and outputs a safely escaped string.
 * If an `escape` function is not provided, then an HTML-safe string
 * escaping function is used as the default.
 */
Writer.prototype.render = function render (template, view, partials, config) {
  var tags = this.getConfigTags(config);
  var tokens = this.parse(template, tags);
  var context = (view instanceof Context) ? view : new Context(view, undefined);
  return this.renderTokens(tokens, context, partials, template, config);
};

/**
 * Low-level method that renders the given array of `tokens` using
 * the given `context` and `partials`.
 *
 * Note: The `originalTemplate` is only ever used to extract the portion
 * of the original template that was contained in a higher-order section.
 * If the template doesn't use higher-order sections, this argument may
 * be omitted.
 */
Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate, config) {
  var buffer = '';

  var token, symbol, value;
  for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
    value = undefined;
    token = tokens[i];
    symbol = token[0];

    if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate, config);
    else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate, config);
    else if (symbol === '>') value = this.renderPartial(token, context, partials, config);
    else if (symbol === '&') value = this.unescapedValue(token, context);
    else if (symbol === 'name') value = this.escapedValue(token, context, config);
    else if (symbol === 'text') value = this.rawValue(token);

    if (value !== undefined)
      buffer += value;
  }

  return buffer;
};

Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate, config) {
  var self = this;
  var buffer = '';
  var value = context.lookup(token[1]);

  // This function is used to render an arbitrary template
  // in the current context by higher-order sections.
  function subRender (template) {
    return self.render(template, context, partials, config);
  }

  if (!value) return;

  if (isArray(value)) {
    for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
      buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate, config);
    }
  } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
    buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate, config);
  } else if (isFunction(value)) {
    if (typeof originalTemplate !== 'string')
      throw new Error('Cannot use higher-order sections without the original template');

    // Extract the portion of the original template that the section contains.
    value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

    if (value != null)
      buffer += value;
  } else {
    buffer += this.renderTokens(token[4], context, partials, originalTemplate, config);
  }
  return buffer;
};

Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate, config) {
  var value = context.lookup(token[1]);

  // Use JavaScript's definition of falsy. Include empty arrays.
  // See https://github.com/janl/mustache.js/issues/186
  if (!value || (isArray(value) && value.length === 0))
    return this.renderTokens(token[4], context, partials, originalTemplate, config);
};

Writer.prototype.indentPartial = function indentPartial (partial, indentation, lineHasNonSpace) {
  var filteredIndentation = indentation.replace(/[^ \t]/g, '');
  var partialByNl = partial.split('\n');
  for (var i = 0; i < partialByNl.length; i++) {
    if (partialByNl[i].length && (i > 0 || !lineHasNonSpace)) {
      partialByNl[i] = filteredIndentation + partialByNl[i];
    }
  }
  return partialByNl.join('\n');
};

Writer.prototype.renderPartial = function renderPartial (token, context, partials, config) {
  if (!partials) return;
  var tags = this.getConfigTags(config);

  var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
  if (value != null) {
    var lineHasNonSpace = token[6];
    var tagIndex = token[5];
    var indentation = token[4];
    var indentedValue = value;
    if (tagIndex == 0 && indentation) {
      indentedValue = this.indentPartial(value, indentation, lineHasNonSpace);
    }
    var tokens = this.parse(indentedValue, tags);
    return this.renderTokens(tokens, context, partials, indentedValue, config);
  }
};

Writer.prototype.unescapedValue = function unescapedValue (token, context) {
  var value = context.lookup(token[1]);
  if (value != null)
    return value;
};

Writer.prototype.escapedValue = function escapedValue (token, context, config) {
  var escape = this.getConfigEscape(config) || mustache.escape;
  var value = context.lookup(token[1]);
  if (value != null)
    return (typeof value === 'number' && escape === mustache.escape) ? String(value) : escape(value);
};

Writer.prototype.rawValue = function rawValue (token) {
  return token[1];
};

Writer.prototype.getConfigTags = function getConfigTags (config) {
  if (isArray(config)) {
    return config;
  }
  else if (config && typeof config === 'object') {
    return config.tags;
  }
  else {
    return undefined;
  }
};

Writer.prototype.getConfigEscape = function getConfigEscape (config) {
  if (config && typeof config === 'object' && !isArray(config)) {
    return config.escape;
  }
  else {
    return undefined;
  }
};

var mustache = {
  name: 'mustache.js',
  version: '4.2.0',
  tags: [ '{{', '}}' ],
  clearCache: undefined,
  escape: undefined,
  parse: undefined,
  render: undefined,
  Scanner: undefined,
  Context: undefined,
  Writer: undefined,
  /**
   * Allows a user to override the default caching strategy, by providing an
   * object with set, get and clear methods. This can also be used to disable
   * the cache by setting it to the literal `undefined`.
   */
  set templateCache (cache) {
    defaultWriter.templateCache = cache;
  },
  /**
   * Gets the default or overridden caching object from the default writer.
   */
  get templateCache () {
    return defaultWriter.templateCache;
  }
};

// All high-level mustache.* functions use this writer.
var defaultWriter = new Writer();

/**
 * Clears all cached templates in the default writer.
 */
mustache.clearCache = function clearCache () {
  return defaultWriter.clearCache();
};

/**
 * Parses and caches the given template in the default writer and returns the
 * array of tokens it contains. Doing this ahead of time avoids the need to
 * parse templates on the fly as they are rendered.
 */
mustache.parse = function parse (template, tags) {
  return defaultWriter.parse(template, tags);
};

/**
 * Renders the `template` with the given `view`, `partials`, and `config`
 * using the default writer.
 */
mustache.render = function render (template, view, partials, config) {
  if (typeof template !== 'string') {
    throw new TypeError('Invalid template! Template should be a "string" ' +
                        'but "' + typeStr(template) + '" was given as the first ' +
                        'argument for mustache#render(template, view, partials)');
  }

  return defaultWriter.render(template, view, partials, config);
};

// Export the escaping function so that the user may override it.
// See https://github.com/janl/mustache.js/issues/244
mustache.escape = escapeHtml$1;

// Export these mainly for testing, but also for advanced usage.
mustache.Scanner = Scanner;
mustache.Context = Context;
mustache.Writer = Writer;

function clampValueToRange (value, range) {
  if (value < range[0]) return range[0]
  if (value > range[1]) return range[1]
  return value
}

/**
 * Returns the last value in an array which is considered as being valid according to the decision
 * function. If none is found, null is returned.
 */
function lastValidValue (values, decisionFn) {
  for (let i = values.length - 1; i >= 0; i--) {
    if (decisionFn(values[i])) return values[i]
  }
  return null
}

/**
 * Returns the element of the array which is closest to the specified value.
 * @param {Number} value The value for which we should find the closest element in the array.
 * @param {Array} array The array of values which are used as reference.
 * @returns The value of the array which is closest to value
 */
function closestValue (val, arr) {
  let closest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i] - val) < Math.abs(closest - val)) {
      closest = arr[i];
    }
  }
  return closest
}

/**
 * A UniqueSequence is an ordered sequence of values where every value is guaranteed to be unique.
 */
class UniqueSequence {
  constructor () {
    this.nodes = {};
  }

  update (seq) {
    const n = seq.length;
    for (let i = 0; i < n; i++) {
      this.insert(seq[i], i > 0 ? seq[i - 1] : null, i < n - 1 ? seq[i + 1] : null);
    }
  }

  insert (value, before, after) {
    // Ignore call if the value is already present
    if (this.has(value)) return

    let nodeBefore = this.nodes[before] || null;
    let nodeAfter = this.nodes[after] || null;

    if (nodeBefore !== null && nodeAfter === null) {
      // Set the after value of the nodeBefore to be the new after of the current node.
      // This means we are inserting a new value which is at the end of a sequence somewhere
      // in the middle of the sequence.
      nodeAfter = nodeBefore.after;
    }

    if (nodeBefore === null && nodeAfter !== null) {
      nodeBefore = nodeAfter.before;
    }

    const node = new Node$1(value, nodeBefore, nodeAfter);

    if (nodeBefore) {
      nodeBefore.after = node;
    }

    if (nodeAfter) {
      nodeAfter.before = node;
    }

    this.nodes[value] = node;
  }

  nodeWithValue (value) {
    return this.nodes[value]
  }

  has (value) {
    return typeof this.nodes[value] !== 'undefined'
  }

  sequence () {
    // Search the first node with null value for before node
    const startNodes = Object.values(this.nodes).filter(n => n.before === null);

    if (startNodes.length === 0) return []

    const startNode = startNodes[0];
    const seq = [startNode.value];
    let next = startNode.after;
    while (next !== null) {
      seq.push(next.value);
      next = next.after;
    }

    return seq
  }
}

class Node$1 {
  constructor (value, nodeBefore, nodeAfter) {
    this.value = value;
    this.before = nodeBefore;
    this.after = nodeAfter;
  }
}

/**
 * Tests if `obj` is an object or not. Returns true or false.
 * Returns false for `null` and arrays.
 */
function isObject (obj) {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    !Array.isArray(obj)
  )
}

/**
 * Returns the first value in the given array of values which is not undefined.
 * If all values are undefined, it returns undefined.
 */
function firstDefinedValue (values) {
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'undefined') return values[i]
  }
  return undefined
}

const defaultTextStyle = {
  h1: { fontSize: { desktop: 32, mobile: 24 }, fontWeight: 400, lineHeight: 1.5, paragraphSpacingBottom: 9 },
  h2: { fontSize: { desktop: 24, mobile: 18 }, fontWeight: 400, lineHeight: 1.5, paragraphSpacingBottom: 9 },
  h3: { fontSize: { desktop: 18, mobile: 16 }, fontWeight: 700, lineHeight: 1.5, paragraphSpacingBottom: 9 },
  h4: { fontSize: { desktop: 14, mobile: 12 }, fontWeight: 700, lineHeight: 1.5, paragraphSpacingBottom: 9 },
  p: { fontSize: { desktop: 12, mobile: 12 }, fontWeight: 400, lineHeight: 1.2, paragraphSpacingBottom: 9 },
  p1: { fontSize: { desktop: 16, mobile: 14 }, fontWeight: 400, lineHeight: 1.5, paragraphSpacingBottom: 9 },
  p2: { fontSize: { desktop: 14, mobile: 12 }, fontWeight: 400, lineHeight: 1.5, paragraphSpacingBottom: 9 },
  p3: { fontSize: { desktop: 12, mobile: 12 }, fontWeight: 400, lineHeight: 1.5, paragraphSpacingBottom: 9 },
  meta: { fontSize: { desktop: 12, mobile: 12 }, fontWeight: 400, lineHeight: 1.5, paragraphSpacingBottom: 9 },
  metaBold: { fontSize: { desktop: 12, mobile: 12 }, fontWeight: 700, lineHeight: 1.5, paragraphSpacingBottom: 9 }
};

function textStyle (type, env = 'desktop') {
  const st = defaultTextStyle[type] || defaultTextStyle.p;

  // Resolve the environment for all style values
  return Object.fromEntries(
    Object.keys(st).map(k => [k, typeof st[k] === 'object' ? st[k][env] : st[k]])
  )
}

/**
 * @class TextRenderer
 * @aka dynvis.textRenderer
 *
 * Renders a formatted text to any SVG node. Supports cascading styles and different tag names
 * similar (but not identical) to HTML.
 */
class TextRenderer {
  constructor (baseStyle) {
    this._parser = new DOMParser();

    // Styles are handled as a stack to enable cascading styles.
    // The function `style` calculates the appropriate style for a given key.
    // Here we define the default style:
    this._style = [{
      width: 300,
      fontSize: 12,
      fontStyle: 'normal',
      fontWeight: 400,
      fontFamily: null,
      fontColor: '#000',
      linkColor: '#069',
      lineHeight: 1.2,
      tabStops: [],
      defaultTabWidth: 50,
      paragraphSpacingBottom: 0,
      textAlign: 'left'
    }];

    // Add the base style
    this.baseStyle = baseStyle || {};
    this._style.push(baseStyle);

    // Custom link handle function. For each click on a link, this function will be called.
    // If false is returned, the default action is ignored.
    this.handleClickOnLink = (_node, _renderer) => true;
  }

  style (k) {
    for (let i = this._style.length - 1; i >= 0; i--) {
      const v = this._style[i][k];
      if (typeof v !== 'undefined') return v
    }
    return null
  }

  /**
   * Escapes a string to pass into a formatted text renderer
   * @param {String} str
   */
  escape (str) {
    return (new Option(str).innerHTML)
  }

  render (src, node, vars, env, style) {
    this.env = env || this.env;

    // Push the render-time style
    if (isObject(style)) this._style.push(style);

    // Set the current render cursor position
    this._x = 0;
    this._y = 0;

    // Remember the nodes for each line.
    this._lineNodes = [];
    this._lines = [this._lineNodes];

    this._nodeWrapper = node;

    // Remove all existing content
    node.innerHTML = '<g></g>';
    this._node = this._nodeWrapper.querySelector('g');

    // If the source text is a function, execute the function by providing the vars as argument
    this._src = `${(typeof src === 'function' ? src(vars) : src)}`;

    // Render the template if there is any variable defined
    this._src = vars ? mustache.render(this._src.trim(), vars) : this._src.trim();

    if (!this._src.startsWith('<text')) this._src = `<text>${this._src.replace('\\n', '<br/>')}</text>`;

    // Replace all ampersand characters which are not part of an escaped character:
    this._src = this._src.replace(/&(?![a-zA-Z]+;|#[0-9]+;)/g, '&amp;');

    this._doc = this._parser.parseFromString(this._src, 'text/xml');
    const err = this._doc.querySelector('parsererror');
    if (err) console.error('Error in parsing text:', this._src);
    this._root = this._doc.firstChild;

    this._applyNodeStyle(this._root);
    this._renderNode(this._root);

    // Set the vertical origin of the text to 0
    const dy = -1 * this._node.getBBox().y;
    this._node.setAttribute('transform', `translate(0 ${dy})`);

    // Set the horizontal text alignment.
    this._alignText();

    // Remove the render-time style
    if (isObject(style)) this._style.pop();
  }

  /**
   * Applies the style information held by the passed node.
   * @param {XMLNode} node The node which holds potential style information.
   */
  _applyNodeStyle (node, type = null) {
    const attrs = node.getAttributeNames();
    const st = type ? textStyle(type, this.env) : {};
    attrs.forEach(k => {
      const v = this._getStyleAttribute(k, node);
      if (v) st[k] = v;
    });
    this._style.push(st);
  }

  _getStyleAttribute (k, node) {
    return (({
      width: parseInt,
      fontSize: parseInt,
      fontWeight: parseInt,
      fontFamily: v => v,
      fontColor: v => v,
      lineHeight: v => v,
      tabStops: this._parseTabStops,
      defaultTabWidth: parseInt,
      paragraphSpacingBottom: parseInt,
      textAlign: v => v,
      fill: v => v,
      stroke: v => v,
      strokeWidth: parseFloat,
      baseLineShift: parseFloat,
      r: parseInt,
      w: parseInt,
      h: parseInt
    })[k] || (_ => null))(node.getAttribute(k))
  }

  _parseTabStops (tabs) {
    return tabs.split(',').map(s => {
      const t = (/([0-9]+)([clr]*)/.exec(s) || []).slice(1);
      t[0] = parseInt(t[0]);
      return t
    })
  }

  /**
   * Returns the line height based on the specified font size if it is a relative line height.
   * The line height can be specified using a number which represents a factor compared to the font
   * size. Or the line height can be an absolute value with `px` or `pt` at the end. In this case,
   * the font size is ignored.
   */
  _lineHeight (lineHeight, fontSize = 12) {
    if (typeof lineHeight === 'number') return lineHeight * fontSize
    if (lineHeight.trim().endsWith('px') || lineHeight.trim().endsWith('pt')) {
      return parseFloat(lineHeight)
    }
    return parseFloat(lineHeight) * fontSize
  }

  _newLine () {
    this._x = 0;
    this._y += this._lineHeight(this.style('lineHeight'), this.style('fontSize'));
    this._lineNodes = [];
    this._lines.push(this._lineNodes);
  }

  _renderNode (node) {
    const nodes = [];
    for (let i = 0; i < node.childNodes.length; i++) {
      const n = node.childNodes[i];
      const renderedNodes = this._renderNodeWithName(n);
      if (renderedNodes) nodes.push(renderedNodes);
    }
    return nodes
  }

  _renderNodeWithName (n) {
    return (({
      '#text': this._renderTextNode,
      p: this._renderP,
      p1: this._renderPWithType('p1'),
      p2: this._renderPWithType('p2'),
      p3: this._renderPWithType('p3'),
      h1: this._renderPWithType('h1'),
      h2: this._renderPWithType('h2'),
      h3: this._renderPWithType('h3'),
      h4: this._renderPWithType('h4'),
      a: this._renderA,
      span: this._renderSpan,
      b: this._renderB,
      i: this._renderI,
      br: this._renderBr,
      tab: this._renderTab,
      circle: this._renderCircle,
      rect: this._renderRect
    })[n.nodeName] || (n => {
      console.warn(`[FormattedTextRenderer] Unknown node ${n.nodeName}`);
    })).bind(this)(n)
  }

  _renderTextNode (node) {
    const val = node.nodeValue;
    if (val.trim().length === 0) return

    const tnode = this._appendTextNode(node.nodeValue);
    const w = tnode.node().getBBox().width;
    let tnodes = [tnode.node()];

    // Make sure line width is not longer than it should
    const maxW = this.style('width');
    if (this._x + w > maxW) tnodes = this._wrapText(tnode, node, maxW);

    this._x += tnodes[tnodes.length - 1].getBBox().width;
    return tnodes
  }

  _appendTextNode (txt) {
    const n = select(this._node).append('text')
      .attr('x', this._x)
      .attr('y', this._y)
      .text(txt.replace(/(\s+)/g, '\u00A0'))
      .call(sel => {
        sel.style('font-size', `${this.style('fontSize')}px`);
        sel.style('font-weight', this.style('fontWeight'));
        sel.style('font-family', this.style('fontFamily'));
        sel.style('fill', this.style('fontColor'));
        sel.style('font-style', this.style('fontStyle'));
      });

    this._pushLineNode(n);
    return n
  }

  _wrapText (tnode, node, width) {
    let currentTnode = tnode;
    const words = node.nodeValue.split(/[^\S\u00A0]+/).reverse();
    let word = words.pop();
    let line = [];
    const nodes = [currentTnode.node()];

    while (word !== undefined) {
      line.push(word);
      currentTnode.text(line.join('\u00A0'));

      // Compute the current line width and check if the text is too long.
      const tlen = currentTnode.node().getComputedTextLength();
      if (this._x + tlen > width && (line.length > 1 || this._lineNodes.length > 1)) {
        // Start a new line
        line.pop();
        currentTnode.text(line.join('\u00A0'));
        line = [word];
        this._x = 0;
        this._y += this._lineHeight(this.style('lineHeight'), this.style('fontSize'));
        this._lineNodes = [];
        this._lines.push(this._lineNodes);
        currentTnode = this._appendTextNode(word);
        nodes.push(currentTnode.node());
      }

      word = words.pop();
    }

    return nodes
  }

  _renderP (node, type = null) {
    this._applyNodeStyle(node, type);
    this._newLine();
    const n = this._renderNode(node);
    this._y += this.style('paragraphSpacingBottom');
    this._style.pop();
    return n
  }

  _renderPWithType (type) {
    const t = type;
    return node => this._renderP(node, t)
  }

  _renderA (node) {
    this._applyNodeStyle(node);
    // Apply the link color as separate style
    this._style.push({ fontColor: this.style('linkColor') });
    const n = this._renderNode(node);
    this._style.pop();
    this._style.pop();
    const nf = n.flat(Infinity);
    nf.forEach(el => {
      el.style.cursor = 'pointer';
      select(el)
        .on('mouseenter', () => nf.forEach(el => { el.style.textDecoration = 'underline'; }))
        .on('mouseleave', () => nf.forEach(el => { el.style.textDecoration = null; }))
        .on('click', () => {
          if (this.handleClickOnLink(node, this) === false) return
          const url = node.getAttribute('href');
          if (url) window.open(url);
        });
    });
    return n
  }

  _renderSpan (node) {
    this._applyNodeStyle(node);
    const n = this._renderNode(node);
    this._style.pop();
    return n
  }

  _renderCircle (node) {
    this._applyNodeStyle(node);
    const r = this.style('r') || (this.style('fontSize') / 2);
    const n = select(this._node).append('circle')
      .attr('cx', this._x + r)
      .attr('cy', this._y - (this.style('fontSize') / 2) - (this.style('baseLineShift') || 0) + 1)
      .attr('r', r)
      .style('fill', this.style('fill') || this.style('fontColor'))
      .style('stroke', this.style('stroke') || 'none')
      .style('stroke-width', this.style('strokeWidth') || 0);

    this._pushLineNode(n);
    this._x += 2 * r;
    this._style.pop();
    return n
  }

  _renderRect (node) {
    this._applyNodeStyle(node);
    const w = this.style('w') || this.style('fontSize');
    const h = this.style('h') || this.style('fontSize');
    const n = select(this._node).append('rect')
      .attr('x', this._x)
      .attr('y', this._y - this.style('fontSize') + (this.style('fontSize') - h) - (this.style('baseLineShift') || 0) + 1)
      .attr('width', w)
      .attr('height', h)
      .style('fill', this.style('fill') || this.style('fontColor'))
      .style('stroke', this.style('stroke') || 'none')
      .style('stroke-width', this.style('strokeWidth') || 0);

    this._pushLineNode(n);
    this._x += w;
    this._style.pop();
    return n
  }

  _renderBr (_) {
    this._newLine();
    return null
  }

  _renderTab (_) {
    // Try to find a tab which is greater than the current x.
    const tabStops = this.style('tabStops');
    for (let i = 0; i < tabStops.length; i++) {
      if (tabStops[i][0] > this._x) {
        this._x = tabStops[i][0];
        return
      }
    }

    // No tab found so far. Set it to the next multiple of the default tab width.
    this._x = Math.ceil(this._x / this.style('defaultTabWidth')) * this.style('defaultTabWidth');
    return null
  }

  _renderB (node) {
    this._style.push({ fontWeight: 700 });
    const n = this._renderNode(node);
    this._style.pop();
    return n
  }

  _renderI (node) {
    this._style.push({ fontStyle: 'italic' });
    const n = this._renderNode(node);
    this._style.pop();
    return n
  }

  _pushLineNode (n) {
    n.textAlign = this.style('textAlign');
    n.lineWidth = this.style('width');
    this._lineNodes.push(n);
  }

  _alignText () {
    // Align the text lines. This is done by setting the transform attribute of each content node.
    // The value of the textAlign property is stored inside the node in the array of lines.
    this._lines.forEach(lineNodes => {
      if (lineNodes.length === 0) return
      const talign = lineNodes[0].textAlign;
      if (talign === 'left') return

      // Compute the content width for the line.
      const xrange = {
        min: lineNodes[0].node().getBBox().x,
        max: (
          lineNodes[lineNodes.length - 1].node().getBBox().x +
          lineNodes[lineNodes.length - 1].node().getBBox().width
        )
      };
      const cw = xrange.max - xrange.min;
      if (cw === 0) return

      // The x transform is the difference between the content width and the line width
      const dx = (lineNodes[0].lineWidth - cw) / (talign === 'center' ? 2 : 1);
      lineNodes.forEach(el => {
        el.attr('transform', `translate(${dx} 0)`);
      });
    });
  }
}

/**
 * Extends one object with the content of another by doing a deep merge.
 */
function extend (target, source) {
  for (const prop in source) {
    if (Object.prototype.hasOwnProperty.call(source, prop)) {
      if (isObject(source[prop])) {
        if (typeof target[prop] === 'undefined') {
          target[prop] = {};
        }
        if (typeof target[prop] === 'object') {
          extend(target[prop], source[prop]);
        } else {
          target[prop] = source[prop];
        }
      } else {
        target[prop] = source[prop];
      }
    }
  }
}

/**
 * [DEPRECATED] Estimates the optimal ticks to display
 * @param {Number} vmin The minimum value for the ticks
 * @param {Number} vmax The maximum value for the ticks
 * @param {Number} range The number of pixels between the minimum and maximum value
 * @param {Object} options An object with the options to tune the tick estimation.
 *  Allowed values are:
 *    - nTicks: the approximate number of ticks that should be returned
 *    - nPixels: the approximate number of pixels between 2 ticks, only considered if nTicks is not
 *      given. The default value is 100 pixels
 * @returns an array with the tick values
 */

/**
   * Calculates the optimal tick steps. It returns 3 possible tick steps where the second fits best
   * the passed arguments. The other tick steps might be used for optimization.
   * @param {Number} vmin The minimum value which should be inside the range.
   * @param {Number} vmax The maximum value which should be inside the range.
   * @param {Number} nTicks Approximate number of ticks
   * @param {Number[]} multipliers The acceptable tick step multipliers
   */
function tickSteps (vmin, vmax, nTicks, multipliers = [1, 2, 5, 10]) {
  const step = (vmax - vmin) / nTicks;
  const b = Math.pow(10, Math.floor(Math.log10(step)));
  const errors = multipliers.map(n => Math.abs(n * b - step));
  const i = errors.indexOf(Math.min(...errors));
  return { step: b * multipliers[i], base: b, idx: i }
}

class ChartArea {
  constructor (chart) {
    this.chart = chart;

    // The view rect defines the position and size of the chart area on the screen.
    this.viewRect = new Rect(0, 0, null, null);

    // The data rect defines the part where the chart is effectivley drawn.
    this.dataRect = new Rect(0, 0, null, null);

    this._xAxis = null;
    this._yAxis = null;

    this._xAxisLabel = null;
    this._yAxisLabel = null;

    this._xDomain = [0, 100];
    this._yDomain = [0, 100];

    // Define a flag if the domain has been initially set. The values are set by the xDomain() and
    // yDomain() methods to true. These flags are needed because the initial value of _xDomain and
    // _yDomain which could be `null` instead.
    this._xDomainChanged = false;
    this._yDomainChanged = false;

    // x-values and y-values for snapping tick values. These values can be null if snapping is not
    // activated. The x-/y-values needs to be set by the chart.
    this._xValues = null;
    this._yValues = null;

    // Shall we adjust the x- and y-domains to the display tick values or not?
    // This should be always be true except for zoomable charts where it should be false.
    this.snapXDomainToTicks = true;
    this.snapYDomainToTicks = true;

    // The x and y scales will be set by the render function
    this.xScale = null;
    this.yScale = null;

    // Grid options:
    // - show [true|false]: should the grid be shown?
    // - color [default: #ccc]: the color of the grid line (by default )
    // - width [default: 1]: the width in pixels of the grid line
    this._xGrid = null;
    this._yGrid = null;

    this._xTicks = null;
    this._yTicks = null;

    this.style = {
      categories: {
        paddingInner: null,
        minimumPaddingInner: 0
      },
      dataRect: { padding: { left: 0, right: 0, top: 0, bottom: 0 } },
      xAxis: {
        format: d => d,
        ticks: null,
        numberOfTicks: 10,
        snapTicks: false,
        label: { font: { size: 12, color: '#757575' } }
      },
      yAxis: {
        format: d => d,
        ticks: null,
        numberOfTicks: 10,
        snapTicks: false,
        label: { font: { size: 12, color: '#757575' } },
        values: { offset: 12 }
      },
      grid: {
        horizontal: {
          customize: null
        },
        vertical: {
          customize: null
        }
      },
      tickStepMultipliers: [1, 2, 5, 10]
    };
  }

  xAxis (options = {}) {
    this._xAxis = new Axis(
      this,
      options.type || 'linear',
      options.placement || 'bottom',
      options
    );
    this._xAxisLabel = options.label || null;
    return this
  }

  yAxis (options = {}) {
    this._yAxis = new Axis(
      this,
      options.type || 'linear',
      options.placement || 'left',
      options
    );
    this._yAxisLabel = options.label || null;
    return this
  }

  xGrid (options) {
    this._xGrid = options.show ? options : null;
    return this
  }

  yGrid (options) {
    this._yGrid = options.show ? options : null;
    return this
  }

  xDomain (xDomain) {
    this._xDomain = xDomain;
    this._xDomainChanged = true;
    return this
  }

  yDomain (yDomain) {
    this._yDomain = yDomain;
    this._yDomainChanged = true;
    return this
  }

  updateStyle (style) {
    extend(this.style, style);
  }

  init (node, state) {
    this._node = select(node).append('g').attr('class', 'dvChartArea');

    // Insert a group node for each axis. These nodes will be passed to the axis rendering
    // functions.
    const xAxisNode = this._node.append('g').attr('class', 'dvXAxis');
    this._xAxis.init && this._xAxis.init(xAxisNode.node(), state);

    this._xGridNode = this._node.append('g').attr('class', 'dvXGrid');

    this._xAxisLabelNode = this._node.append('g').attr('class', 'dvXAxisLabel').append('g');
    this._xAxisLabelRenderer = new TextRenderer({});

    if (this._yAxis) {
      const yAxisNode = this._node.append('g').attr('class', 'dvYAxis');
      this._yAxis.init(yAxisNode.node(), state);
    }

    this._yGridNode = this._node.append('g').attr('class', 'dvYGrid');

    this._yAxisLabelNode = this._node.append('g').attr('class', 'dvYAxisLabel').append('g');
    this._yAxisLabelRenderer = new TextRenderer({});

    this._propagateStyles();
  }

  prerender (node, state) {
    this._propagateStyles();
    this._prerenderXAxis(node, state);
    this._prerenderYAxis(node, state);
    if (this._xAxisLabel) this._renderXAxisLabel(state);
    if (this._yAxisLabel) this._renderYAxisLabel(state);
  }

  _prerenderXAxis (node, state) {
    this._xAxis.formatValue = this.style.xAxis.format;
    this._xTicks = this._xAxis.isContinuous() ? this._computeXTicks() : this._xDomain;
    this._xAxis.ticks = this._xTicks;
    this._xAxis.prerender(this._node.select('.dvXAxis').node(), state);
  }

  _prerenderYAxis (node, state) {
    this._yAxis.formatValue = this.style.yAxis.format;
    this._yTicks = this._yAxis.isContinuous()
      ? this.ticks(this._yDomain[0], this._yDomain[1], 10)
      : this._yDomain;
    if (this._yAxis) {
      this._yAxis.ticks = this._yTicks.flat(1);
      this._yAxis.prerender(this._node.select('.dvYAxis').node(), state);
    }
  }

  _propagateStyles () {
    // Propagate the styles for the axis to the Axis instances.
    // this._xAxis or this._yAxis might have more than 1 axis (e.g. in a butterfly chart).
    // Therefore, we test if there is a style key, and if not, we try to apply to each value
    // inside the object.
    if (this._xAxis.style) {
      extend(this._xAxis.style, this.style.xAxis);
    } else {
      Object.keys(this._xAxis).forEach(axis => {
        if (axis.style) extend(axis.style, this.style.xAxis);
      });
    }
    if (this._yAxis.style) {
      extend(this._yAxis.style, this.style.yAxis);
    } else {
      Object.keys(this._yAxis).forEach(axis => {
        if (axis.style) extend(axis.style, this.style.yAxis);
      });
    }
  }

  render (node, state) {
    this.computeDataRect();

    // Recompute the number of ticks based on the value label width resp. height
    // This is only needed for continuous axis.
    if (this._xAxis.isContinuous()) {
      this._computeXTicks();
    } else {
      this._xdom = this._xDomain;
    }

    if (this._yAxis.isContinuous()) {
      this._computeYTicks();
    } else {
      this._ydom = this._yDomain;
    }

    const pd = this.style.dataRect.padding;

    this.xScale = this._scale(
      this._xAxis.type,
      this._xdom,
      [this.dataRect.left + pd.left, this.dataRect.right - pd.right],
      this.style.xScale || {}
    );

    this.yScale = this._scale(
      this._yAxis.type,
      this._ydom,
      this._yAxis.isCategorical()
        ? [this.dataRect.top + pd.top, this.dataRect.bottom - pd.bottom]
        : [this.dataRect.bottom - pd.bottom, this.dataRect.top + pd.top],
      this.style.yScale || {}
    );

    // Apply the category padding in case of band axis.
    if (this._xAxis.type === 'band') {
      // Set the padding of the axis. By default, the spacing between categories is 20% but maximum
      // 7 pixels.
      if (this.style.categories.noPadding === true) {
        this.xScale.paddingInner = 0;
        this.xScale.paddingOuter = 0;
      } else {
        this._setCategoryPadding(this.xScale, this.style.xAxis.paddingInner);
      }
    }
    if (this._yAxis.type === 'band') {
      if (this.style.categories.noPadding === true) {
        this.yScale.paddingInner = 0;
        this.yScale.paddingOuter = 0;
      } else {
        this._setCategoryPadding(this.yScale, this.style.yAxis.paddingInner);
      }
    }

    if (this._yAxis) {
      this._yAxis.ticks = this._yTicks.flat(1);
      this._yAxis.scale = this.yScale;
      this._yAxis.render(this._node.select('.dvYAxis').node(), state, this.dataRect, this._ydom);
      this._node.select('.dvYAxis').attr('transform', `translate(${this.viewRect.left} 0)`);
    }

    let yShift = 0;
    if (this._xAxis) {
      this._xAxis.ticks = this._xTicks;
      this._xAxis.scale = this.xScale;

      // If the y-axis has a band scale with groups, and the x-axis placement is on top, the x-axis
      // value labels need to be shifted down to display the first group heading on top.
      if (
        this._xAxis.placement === 'top' &&
        this.yScale.type === 'band' &&
        this.yScale.hasGroups()
      ) {
        yShift = this.yScale.groupSpacing();
      }

      this._xAxis.render(
        this._node.select('.dvXAxis').node(),
        state,
        {
          top: this.dataRect.top + yShift,
          bottom: this.dataRect.bottom,
          left: this.dataRect.left,
          right: this.dataRect.right
        },
        this._xdom
      );
    }

    if (this._xGrid) this._renderXGrid(state, yShift);
    if (this._yGrid) this._renderYGrid(state);

    if (this._xAxisLabel) this._renderXAxisLabel(state, yShift);
    if (this._yAxisLabel) this._renderYAxisLabel(state);
  }

  _renderXGrid (state, yShiftTop = 0) {
    // Get the x-axis value labels to determine if it is currently hidden
    const valuesHidden = this._xAxis.valuesSel.nodes().map(el => {
      return el.classList.contains('dvHidden')
    });

    this._xGridNode.selectAll('line').data(this._xTicks).join('line')
      .attr('x1', d => this.xScale(d))
      .attr('x2', d => this.xScale(d))
      .attr('y1', this.dataRect.bottom)
      .attr('y2', this.dataRect.top + yShiftTop)
      .style('stroke', d => {
        const col = this._(
          this._xGrid.color, d, { axis: 'xAxis', chartArea: this }, state, this.chart
        );
        return col || '#ccc'
      })
      .style('stroke-width', d => {
        const w = this._(
          this._xGrid.width, d, { axis: 'xAxis', chartArea: this }, state, this.chart
        );
        return `${typeof w === 'undefined' || w === null ? 1 : w}px`
      })
      .classed('dvHidden', (d, i) => valuesHidden[i])
      .call(sel => {
        if (typeof this.style.grid.vertical.customize === 'function') {
          this.style.grid.vertical.customize(sel, state, this);
        }
      });
  }

  _renderXAxisLabel (state, yShift = 0) {
    extend(this._xAxisLabelRenderer.baseStyle, {
      width: Math.max(0, this.dataRect.width() || this.viewRect.width() - 100),
      fontSize: this.style.xAxis.label.font.size,
      fontColor: this.style.xAxis.label.font.color,
      maxLines: 2,
      textAlign: 'center'
    });

    // Render the text label to get the height.
    const xLabel = this._xAxisLabel;
    this._xAxisLabelRenderer.render(xLabel, this._xAxisLabelNode.node(), state);
    const h = this._xAxisLabelNode.node().getBoundingClientRect().height;

    // Position the x label according to the axis placement.
    const xLabelVerticalPosition = this._xAxis.placement === 'bottom'
      ? this.viewRect.bottom - h + yShift
      : this.viewRect.top + yShift;

    this._xAxisLabelNode
      .attr('transform', `translate(${this.dataRect.left} ${xLabelVerticalPosition})`);
  }

  _renderYAxisLabel (state) {
    extend(this._yAxisLabelRenderer.baseStyle, {
      width: Math.max(0, this.dataRect.width() || this.viewRect.width() - 100),
      fontSize: this.style.yAxis.label.font.size,
      fontColor: this.style.yAxis.label.font.color,
      maxLines: 2
    });

    const yLabel = this._yAxisLabel;
    this._yAxisLabelRenderer.render(yLabel, this._yAxisLabelNode.node(), state);

    this._yAxisLabelNode.attr(
      'transform',
      `translate(${this.viewRect.left} ${this.viewRect.top})`
    );
  }

  _renderYGrid (state) {
    // Get the y-axis value labels to determine if it is currently hidden
    const valuesHidden = this._yAxis.valuesSel.nodes().map(el => {
      return el.classList.contains('dvHidden')
    });

    this._yGridNode.selectAll('line').data(this._yTicks).join('line')
      .attr('y1', (d, i) => this.yScale(d, i))
      .attr('y2', (d, i) => this.yScale(d, i))
      .attr('x1', this.dataRect.left)
      .attr('x2', this.dataRect.right)
      .style('stroke', d => {
        const col = this._(
          this._yGrid.color, d, { axis: 'yAxis', chartArea: this }, state, this.chart
        );
        return col || '#ccc'
      })
      .style('stroke-width', d => {
        const w = this._(
          this._yGrid.width, d, { axis: 'yAxis', chartArea: this }, state, this.chart
        );
        return `${typeof w === 'undefined' || w === null ? 1 : w}px`
      })
      .classed('dvHidden', (d, i) => valuesHidden[i])
      .call(sel => {
        if (typeof this.style.grid.horizontal.customize === 'function') {
          this.style.grid.horizontal.customize(sel, state, this);
        }
      });
  }

  computeDataRect () {
    // Define the data rect. This is the part which is used to draw the chart itself.
    // To do so, we first need to compute the width and height of the axis.

    const xAxisHeight = this._xAxis
      ? this._xAxis.valuesSel.nodes().reduce(
        (prev, n) => Math.max(prev, n.getBoundingClientRect().height),
        0
      )
      : 0;

    const xAxisLabelHeight = this._xAxisLabel ? this._xAxisLabelNode.node().getBBox().height : 0;
    const yAxisLabelHeight = this._yAxisLabel ? this._yAxisLabelNode.node().getBBox().height : 0;

    // The top position of the data rect depends on the presence of a value label in the y-axis and
    // the position of the x-axis which can be on top or bottom.
    this.dataRect.top = this.viewRect.top +
      (this._yAxis && this._yAxis.isCategorical() && this._xAxis.placement === 'top'
        ? this._yAxis.style.values.font.size / 2
        : 0
      ) +
      (this._yAxisLabel ? yAxisLabelHeight + 12 : 0) +
      (this._xAxis && this._xAxis.placement === 'top' ? xAxisHeight + 4 : 0) +
      (this._xAxisLabel && this._xAxis.placement === 'top' ? xAxisLabelHeight + 4 : 0);

    // The bottom position of the data rect depends on the height of the x-axis. There is also a
    // margin of 4 pixels between the x-axis and the data rect. If there is no x-axis, the data rect
    // goes till the bottom.
    this.dataRect.bottom = this.viewRect.bottom -
      (this._xAxis && this._xAxis.placement === 'bottom' ? xAxisHeight + 4 : 0) -
      (this._xAxisLabel && this._xAxis.placement === 'bottom' ? xAxisLabelHeight + 4 : 0);

    // If the y-axis is categorical, it might be possible, if the space allows, to wrap the value
    // labels on several lines. For this, we need to estimate the available space for each label,
    // and then decide on how many lines the label could be wrapped.
    if (this._yAxis.isCategorical()) {
      // By default, the labelWidth corresponds to the longest label.
      let labelWidth = this._yAxis.valuesWidth.max;

      // If the width of the labels is defined, either by a number or a function, calculate it.
      if (this.style.yAxis.label.width) {
        labelWidth = this._(this.style.yAxis.label.width,
          this.viewRect.width(), this._yAxis.valuesWidth.max
        );
      }

      let nLines = this.style.yAxis.label.nLines;
      if (typeof nLines !== 'undefined' && nLines > 1 && !this.style.yAxis.label.width) {
        labelWidth = this._yAxis.valuesWidth.max / nLines;
      } else {
        nLines = Math.ceil(this._yAxis.valuesWidth.max / labelWidth);
      }

      if (labelWidth < this._yAxis.valuesWidth.max) {
        this._yAxis.wrapLabels(nLines, labelWidth);
        this._yAxis._computeValueLabelWidth();
      }
    }

    const yAxisWidth = this._yAxis ? this._yAxis.valuesWidth.max : 0;

    // The left position of the data rect is at least the width of the y-axis plus an offset.
    // If there is no y-axis, we start the data rect at 0.
    this.dataRect.left = this.viewRect.left + (
      this._yAxis ? yAxisWidth + this.style.yAxis.values.offset : 0
    );

    // The right position of the data rect depends on the presence of the x-axis. If there is an
    // x-axis and therefore a value label at the right, half the width of the last value label must
    // be removed for continuous axis.
    this.dataRect.right = this.viewRect.right;
    if (this._xAxis && this._xAxis.isContinuous()) {
      this.dataRect.right -= this._xAxis.valuesWidth.last / 2 + 4;
    }
  }

  _scale (axisType, domain, range, properties = {}) {
    let scale = ({
      linear: linear,
      ordinal: ordinal,
      band: scaleBand,
      time: time
    })[axisType] || null;

    if (scale === null) {
      console.warn(`Invalid axis type: '${axisType}'. Use one of: 'linear', 'ordinal', 'band', 'time'`);
      scale = linear;
    }

    scale = scale();
    scale.domain(domain);
    if (axisType === 'ordinal' && range.length === 2 && domain.length > 2) {
      // We have only 2 values for the range, but more than 2 values for the domain.
      // Transform the range into N equal parts (N = domain.length)
      const n = domain.length;
      const step = (range[1] - range[0]) / (n - 1);
      const r = domain.map((_, i) => range[0] + i * step);
      scale.range(r);
    } else {
      scale.range(range);
    }

    // Pass along the style properties for the scale
    for (const k in properties) {
      typeof scale[k] === 'function' && scale[k](properties[k]);
    }

    return scale
  }

  ticks (vmin, vmax, nTicks) {
    const s = tickSteps(vmin, vmax, nTicks, this.style.tickStepMultipliers);
    const t0 = Math.floor(vmin / s.step) * s.step;
    const tN = Math.ceil(vmax / s.step) * s.step;
    const ticks = [];
    for (let t = t0; t <= tN; t += s.step) ticks.push(t);

    // Make sure the ratio between the tick overshoot and the complete range is below maxR
    this._ensureMaximumOvershootRatio(ticks, [vmin, vmax], s, s);

    return ticks
  }

  ticksTemporal (start, end, nTicks) {
    const ticks = time().domain([start, end]).ticks(nTicks);

    // Make sure the start and end is part of the ticks
    if (ticks[0] !== start) ticks.unshift(start);
    if (ticks[ticks.length - 1] !== end) ticks.push(end);

    return {
      ticks: ticks,
      resolution: this._temporalResolution(start, end, nTicks)
    }
  }

  _computeXTicks () {
    const pd = this.style.dataRect.padding;

    // Compute the available width for the x-axis.
    const w = this.dataRect.width() - pd.left - pd.right;

    // Check if the ticks have been defined manually.
    if (this.style.xAxis.ticks !== null) {
      const data = (this.chart.transformedData && this.chart.transformedData(this.chart._state)) || null;
      this._xTicks = this._(
        this.style.xAxis.ticks,
        { width: w, chartArea: this, domain: this._xDomain, data: data },
        this.chart._state,
        this.chart
      );
    }

    if (this._xTicks === null || this.style.xAxis.ticks === null) {
      // Set the number of ticks to a default value
      let nXTicks = this.style.xAxis.numberOfTicks || 10;

      // Adapt the number of ticks based on the width of the value labels. The ticks are computed
      // twice during the rendering process, first during prerendering where the value width is not
      // yet known. In this case, the valuesWidth property of the axis is null and we stick with the
      // 10 ticks defined by default.
      if (this._xAxis.valuesWidth !== null) {
        const labelWidth = (this._xAxis && this._xAxis.valuesWidth.max + 12) || 0;
        // Compute the number of labels we can place at maximum
        const nMaxTicks = Math.floor(w / labelWidth) - 2;
        // If the number of ticks from the style options is smaller, take it
        nXTicks = this.style.xAxis.numberOfTicks < nMaxTicks ? this.style.xAxis.numberOfTicks : nMaxTicks;
        // Make sure we have at least 2 labels.
        nXTicks = Math.max(2, nXTicks);
      }

      this._xTicks = null;
      if (this._xAxis.type === 'time') {
        const tticks = this.ticksTemporal(this._xDomain[0], this._xDomain[1], nXTicks);
        this._xTicks = tticks.ticks;
        this._xAxis._temporalResolution = tticks.resolution;
      } else {
        this._xTicks = this.ticks(this._xDomain[0], this._xDomain[1], nXTicks);
      }

      if (this._xTicks.length < 2) this._xTicks = [...this._xDomain];
    }

    // Snap the ticks to the x-values if required.
    if (this.style.xAxis.snapTicks === true) {
      this._xTicks = this._snapTicks(this._xTicks, this._xValues, this._xDomain);
    }

    // Adjust the x-domain to the ticks to be shown.
    this._xdom = this.snapXDomainToTicks
      ? [this._xTicks[0], this._xTicks[this._xTicks.length - 1]]
      : this._xDomain;

    return this._xTicks
  }

  _computeYTicks () {
    const h = this.dataRect.height() / Math.min(30, (this._yAxis && this._yAxis.style.values.font.size + 12) || 0);

    // Check if the ticks have been defined manually.
    if (this.style.yAxis.ticks !== null) {
      const data = (this.chart.transformedData && this.chart.transformedData(this.chart._state)) || null;
      this._yTicks = this._(
        this.style.yAxis.ticks,
        { height: h, chartArea: this, domain: this._yDomain, data: data },
        this.chart._state,
        this.chart
      );
    }

    if (this._yTicks === null || this.style.yAxis.ticks === null) {
      // Set the number of ticks to a default value
      const nYTicks = this._(this.style.yAxis.numberOfTicks, this.chart._state, this.chart) || Math.min(10, Math.max(2, Math.floor(h)));
      this._yTicks = this.ticks(this._yDomain[0], this._yDomain[1], nYTicks);
    }

    // Snap the ticks to the x-values if required.
    if (this.style.yAxis.snapTicks === true) {
      this._yTicks = this._snapTicks(this._yTicks, this._yValues, this._yDomain);
    }

    // Adjust the y-domain to the ticks to be shown.
    this._ydom = this.snapYDomainToTicks
      ? [this._yTicks[0], this._yTicks[this._yTicks.length - 1]]
      : this._yDomain;

    return this._yTicks
  }

  _snapTicks (ticks, values, domain) {
    if (values === null || typeof values === 'undefined') {
      console.warn('Snapping of tick values is not supported for this chart');
      return ticks
    }

    // For each tick, look for the closest value.
    let snappedTicks = ticks.map(t => closestValue(t, values));
    snappedTicks = [...(new Set(snappedTicks))];
    snappedTicks = snappedTicks.filter(v => v >= domain[0] && v <= domain[domain.length - 1]);
    snappedTicks.sort();

    return snappedTicks
  }

  _ensureMaximumOvershootRatio (ticks, vminmax, step0, stepN) {
    const maxR = 0.2;
    const n = ticks.length;
    const m = [1, 2, 5, 10];

    let r0 = (vminmax[0] - ticks[0]) / (ticks[n - 1] - ticks[0]);
    let smallerStep = step0;
    if (r0 > maxR) {
      smallerStep = step0.idx === 0
        ? { step: step0.base / 2, base: step0.base / 10, idx: 3 }
        : { step: step0.base * m[step0.idx - 1], base: step0.base, idx: step0.idx - 1 };

      ticks[0] = Math.floor(vminmax[0] / smallerStep.step) * smallerStep.step;
    }

    let rN = (ticks[n - 1] - vminmax[1]) / (ticks[n - 1] - ticks[0]);
    let biggerStep = stepN;
    if (rN > maxR) {
      biggerStep = stepN.idx === 0
        ? { step: stepN.base / 2, base: stepN.base / 10, idx: 3 }
        : { step: stepN.base * m[stepN.idx - 1], base: stepN.base, idx: stepN.idx - 1 };

      ticks[n - 1] = Math.ceil(vminmax[1] / biggerStep.step) * biggerStep.step;
    }

    // Recalculate the ratios to see if we still need more iterations
    r0 = (vminmax[0] - ticks[0]) / (ticks[n - 1] - ticks[0]);
    rN = (ticks[n - 1] - vminmax[1]) / (ticks[n - 1] - ticks[0]);
    if (r0 > maxR || rN > maxR) {
      this._ensureMaximumOvershootRatio(ticks, vminmax, smallerStep, biggerStep);
    }
  }

  _setCategoryPadding (scale, defaultPadding) {
    const step = scale.step();
    const minPadding = this.style.categories.minimumPaddingInner;
    let padding = this.style.categories.paddingInner || minPadding || 7;

    // If there is a paddingInner style set, take its value (which can be a function)
    if (this.style.categories.paddingInner !== null) {
      padding = typeof this.style.categories.paddingInner === 'function'
        ? this.style.categories.paddingInner(scale, this)
        : this.style.categories.paddingInner;
    } else {
      // Compute the size of the padding if we have a distance of 20%
      padding = step * (typeof defaultPadding === 'undefined' ? 0.2 : defaultPadding);
    }

    // Ensure the minimum padding distance is respected
    padding = padding < minPadding ? minPadding : padding;

    scale.paddingInner(Math.min(0.5, padding / step));
  }

  _temporalResolution (t0, t1, n = 10) {
    // Check if we can convert the time values to a date.
    const d0 = new Date(t0);
    const d1 = new Date(t1);
    if (isNaN(d0.getTime()) || isNaN(d1.getTime())) {
      console.warn('Unable to interpret date/time values as a valid Date or Time. You might want to use an ordinal axis type instead.');
    }

    // Compute the number of years, months, weeks, days, hours and minutes
    // Decide which resolution is best suited based on the number of each of them inside the
    // provided time range.
    const dt = d1 - d0;
    const nTimeSteps = [
      d1.getYear() - d0.getYear(), // years
      (d1.getYear() - d0.getYear()) * 12 - d0.getMonth() + d1.getMonth(), // months
      dt / 604800000, // weeks
      dt / 86400000, // days
      dt / 3600000, // hours
      dt / 60000 // minutes
    ];
    const idx = nTimeSteps.indexOf(nTimeSteps.filter(d => d >= n)[0]);
    return 'YMWDhm'[idx]
  }

  _ (...args) {
    const val = typeof args[0] === 'function' ? args[0](...args.slice(1)) : args[0];
    const env = (this._state && this._state.ENV) || null;
    return val && env && val[env] ? val[env] : val
  }
}

class GriddedChartArea extends ChartArea {
  constructor (chart) {
    super(chart);

    this.dataRect = { left: new Rect(0, 0, null, null), right: new Rect(0, 0, null, null) };
    this._xDomain = { left: [0, 100], right: [0, 100] };

    this.style.dataRect.padding.gutter = 16;
  }

  xAxis (options = {}) {
    this._xAxis = {
      left: new Axis(this, options.type || 'linear', options.placement || 'bottom', options),
      right: new Axis(this, options.type || 'linear', options.placement || 'bottom', options)
    };
    this._xAxisLabel = {
      left: options.labelLeft || options.label || null,
      right: options.labelRight || options.label || null
    };
    return this
  }

  init (node, state) {
    super.init(node, state);

    const nodeLeft = this._node.select('g.dvXAxis').append('g').attr('class', 'dvXAxisLeft');
    const nodeRight = this._node.select('g.dvXAxis').append('g').attr('class', 'dvXAxisRight');
    this._xAxis.left.init(nodeLeft.node(), state);
    this._xAxis.right.init(nodeRight.node(), state);

    this._xGridNode = {
      left: this._xGridNode.append('g').attr('class', 'dvXGridLeft'),
      right: this._xGridNode.append('g').attr('class', 'dvXGridRight')
    };

    this._xAxisLabelNode = {
      left: this._xAxisLabelNode.append('g').attr('class', 'dvXAxisLabelLeft').append('g'),
      right: this._xAxisLabelNode.append('g').attr('class', 'dvXAxisLabelRight').append('g')
    };

    this._xAxisLabelRenderer = { left: new TextRenderer({}), right: new TextRenderer({}) };

    this._yAxis.style.values.align = 'center';
  }

  _prerenderXAxis (_node, state) {
    this._xTicks = this._xAxis.left.isContinuous() ? this._computeXTicks() : this._xDomain;
    this._xAxis.left.ticks = this._xTicks.left;
    this._xAxis.right.ticks = this._xTicks.right;
    this._xAxis.left.prerender(this._node.select('.dvXAxisLeft').node(), state);
    this._xAxis.right.prerender(this._node.select('.dvXAxisRight').node(), state);
  }

  render (_node, state) {
    this.computeDataRect();

    if (this._xAxis.left.isContinuous()) {
      this._computeXTicks();
    } else {
      this._xdom = this._xDomain;
    }

    if (this._yAxis.isContinuous()) {
      this._computeYTicks();
    } else {
      this._ydom = this._yDomain;
    }

    const pd = this.style.dataRect.padding;

    // We need two x-scales
    this.xScale = {
      left: this._scale(this._xAxis.left.type, this._xdom.left, [this.dataRect.left.right, this.dataRect.left.left]),
      right: this._scale(this._xAxis.right.type, this._xdom.right, [this.dataRect.right.left, this.dataRect.right.right])
    };

    this.yScale = this._scale(
      this._yAxis.type,
      this._ydom,
      this._yAxis.isCategorical()
        ? [this.dataRect.left.top + pd.top, this.dataRect.left.bottom - pd.bottom]
        : [this.dataRect.left.bottom - pd.bottom, this.dataRect.left.top + pd.top]
    );

    // Apply the category padding in case of band axis.
    if (this._xAxis.left.type === 'band') {
      // Set the spacing between categories to 20% but maximum 7 pixels.
      this._setCategoryPadding(this.xScale.left);
      this._setCategoryPadding(this.xScale.right);
    }
    if (this._yAxis.type === 'band') {
      this._setCategoryPadding(this.yScale);
    }

    if (this._yAxis) {
      this._yAxis.ticks = this._yTicks;
      this._yAxis.scale = this.yScale;
      const yAxisRect = new Rect(
        this.dataRect.left.right,
        this.dataRect.left.top,
        this.dataRect.right.left,
        this.dataRect.left.bottom
      );

      this._yAxis.render(this._node.select('.dvYAxis').node(), state, yAxisRect, this._ydom);
      this._node.select('.dvYAxis')
        .attr('transform', `translate(${yAxisRect.left + pd.gutter / 2} 0)`);
    }

    this._xAxis.left.ticks = this._xTicks.left;
    this._xAxis.right.ticks = this._xTicks.right;

    this._xAxis.left.scale = this.xScale.left;
    this._xAxis.right.scale = this.xScale.right;

    this._xAxis.left.render(this._node.select('.dvXAxisLeft').node(), state, this.dataRect.left, this._xdom.left);
    this._xAxis.right.render(this._node.select('.dvXAxisRight').node(), state, this.dataRect.right, this._xdom.right);

    if (this._xGrid) this._renderXGrid(state);
    if (this._yGrid) this._renderYGrid(state);

    if (this._xAxisLabel) this._renderXAxisLabel(state);
    if (this._yAxisLabel) this._renderYAxisLabel(state);
  }

  _renderXGrid (_state) {
    ['left', 'right'].forEach(side => {
      this._xGridNode[side].selectAll('line').data(this._xTicks[side]).join('line')
        .attr('x1', d => this.xScale[side](d))
        .attr('x2', d => this.xScale[side](d))
        .attr('y1', this.dataRect[side].bottom)
        .attr('y2', this.dataRect[side].top)
        .style('stroke', this._xGrid.color || '#ccc')
        .style('stroke-width', `${this._xGrid.width || 1}px`);
    });
  }

  _renderXAxisLabel (state) {
    ['left', 'right'].forEach(side => {
      extend(this._xAxisLabelRenderer[side].baseStyle, {
        width: Math.max(0, this.dataRect[side].width() || (this.viewRect.width() / 2) - 100),
        fontSize: 12,
        fontColor: '#757575',
        maxLines: 2,
        textAlign: 'center'
      });

      // Render the text label to get the height.
      const xLabel = this._xAxisLabel[side];
      this._xAxisLabelRenderer[side].render(xLabel, this._xAxisLabelNode[side].node(), state);
      const h = this._xAxisLabelNode[side].node().getBoundingClientRect().height;

      // Position the x label according to the axis placement.
      const xLabelVerticalPosition = this._xAxis[side].placement === 'bottom'
        ? this.viewRect.bottom - h
        : this.viewRect.top;
      this._xAxisLabelNode[side]
        .attr('transform', `translate(${this.dataRect[side].left} ${xLabelVerticalPosition})`);
    });
  }

  _computeXTicks () {
    const pd = this.style.dataRect.padding;

    // In a gridded chart area, the available width for the x-axis is only half the width minus
    // the gutter. However, we have two data rects, one for the left, one for the right. We only
    // need to adapt for the padding.
    const w1 = this.dataRect.left.width() - pd.left - pd.right - (pd.gutter / 2);
    const w2 = this.dataRect.right.width() - pd.left - pd.right - (pd.gutter / 2);

    let nXTicks1 = 10;
    let nXTicks2 = 10;

    if (this._xAxis.left.valuesWidth !== null) {
      const labelWidth1 = this._xAxis.left.valuesWidth.max + 12;
      const labelWidth2 = this._xAxis.right.valuesWidth.max + 12;
      nXTicks1 = Math.min(12, Math.max(2, Math.floor(w1 / labelWidth1) - 2));
      nXTicks2 = Math.min(12, Math.max(2, Math.floor(w2 / labelWidth2) - 2));
    }

    this._xTicks = { left: null, right: null };

    if (this._xAxis.type === 'time') {
      const tticks1 = this.ticksTemporal(this._xDomain.left[0], this._xDomain.left[1], nXTicks1);
      this._xTicks.left = tticks1.ticks;
      this._xAxis.left._temporalResolution = tticks1.resolution;

      const tticks2 = this.ticksTemporal(this._xDomain.right[0], this._xDomain.right[1], nXTicks2);
      this._xTicks.right = tticks2.ticks;
      this._xAxis.right._temporalResolution = tticks2.resolution;
    } else {
      this._xTicks.left = this.ticks(this._xDomain.left[0], this._xDomain.left[1], nXTicks1);
      this._xTicks.right = this.ticks(this._xDomain.right[0], this._xDomain.right[1], nXTicks2);
    }

    if (this._xTicks.left.length < 2) this._xTicks.left = [...this._xDomain.left];
    if (this._xTicks.right.length < 2) this._xTicks.right = [...this._xDomain.right];

    // Adjust the x-domain to the ticks to be shown.
    this._xdom = this.snapXDomainToTicks
      ? {
          left: [this._xTicks.left[0], this._xTicks.left[this._xTicks.left.length - 1]],
          right: [this._xTicks.right[0], this._xTicks.right[this._xTicks.right.length - 1]]
        }
      : this._xDomain;

    return this._xTicks
  }

  computeDataRect () {
    const xAxisHeight = Math.max(
      this._xAxis.left.valuesSel.nodes().reduce(
        (prev, n) => Math.max(prev, n.getBoundingClientRect().height),
        0
      ),
      this._xAxis.right.valuesSel.nodes().reduce(
        (prev, n) => Math.max(prev, n.getBoundingClientRect().height),
        0
      )
    );
    const yAxisWidth = this._yAxis ? this._yAxis.valuesWidth.max : 0;

    const xAxisLabelHeight = this._xAxisLabel
      ? Math.max(this._xAxisLabelNode.left.node().getBBox().height, this._xAxisLabelNode.right.node().getBBox().height)
      : 0;
    const yAxisLabelHeight = this._yAxisLabel ? this._yAxisLabelNode.node().getBBox().height : 0;

    // The two data rects are arranged with the y-axis labels in the center. There is a padding for
    // the gutter which is also removed.
    const w = this.viewRect.width() - yAxisWidth - this.style.dataRect.padding.gutter;

    // The width of each data rect depends on the covered domain.
    const d1 = this._xTicks.left[this._xTicks.left.length - 1] - this._xTicks.left[0];
    const d2 = this._xTicks.right[this._xTicks.right.length - 1] - this._xTicks.right[0];
    const w1 = w / (d1 + d2) * d1;

    // The left position of each data rect can now be defined. The `dataRect.left.left` is not an
    // error. The first left refers to the data rect on the left, the second is the position of
    // the data rect.
    this.dataRect.left.left = this.viewRect.left;
    this.dataRect.right.left = this.viewRect.left + w1 + yAxisWidth + this.style.dataRect.padding.gutter;

    // The top position of both data rects are identical and computed in the same way as for the
    // single data rect case.
    this.dataRect.left.top = this.viewRect.top +
      (this._yAxis && this._yAxis.isCategorical() && this._xAxis.left.placement === 'bottom'
        ? this._yAxis.style.values.font.size / 2
        : 0
      ) +
      (this._yAxisLabel ? yAxisLabelHeight + 12 : 0) +
      (this._xAxis.left.placement === 'top' ? xAxisHeight + xAxisLabelHeight + 8 : 0);
    this.dataRect.right.top = this.dataRect.left.top;

    this.dataRect.left.bottom = this.viewRect.bottom -
      (this._xAxis.left.placement === 'bottom' ? xAxisHeight + xAxisLabelHeight + 8 : 0);
    this.dataRect.right.bottom = this.dataRect.left.bottom;

    this.dataRect.left.right = this.dataRect.left.left + w1;
    this.dataRect.right.right = this.viewRect.right;

    // Adjust the data rect to fit the last value label completely. For the left data rect, this
    // happens on the left, for the right data rect on the right.
    if (this._xAxis.left.isContinuous()) {
      this.dataRect.left.left += this._xAxis.left.valuesWidth.last / 2 + 4;
      this.dataRect.right.right -= this._xAxis.right.valuesWidth.last / 2 + 4;
    }
  }
}

class Chart extends A {
  constructor (config, style, options = {}) {
    super(config, style);

    // Defines if this chart follows the new style where each chart has a managed chart area.
    // This allows for migrating each chart type one by one. At the end, the default option will be
    // switched to true.
    this.hasChartArea = options.hasChartArea || false;

    // A ChartArea is most of the time just a simple one, but it can also be gridded, e.g. in a
    // age pyramid where the left and right parts are mirrored.
    this.hasGriddedChartArea = options.hasGriddedChartArea || false;

    // Create the new chart area so the user can actually customize it.
    this.chartArea = this.hasChartArea === true
      ? this.hasGriddedChartArea ? new GriddedChartArea(this) : new ChartArea(this)
      : null;

    // Apply the default style
    this.mergeStyle({
      chartArea: { margin: { top: 0, right: 0, left: 0, bottom: 0 } }
    });

    // The properties to synchronize
    this._sync = {};

    // The sync functions which will be called when a sync event occurs.
    // By default, there is no sync function defined.
    this._syncFn = {};
  }

  /**
   * Returns the SVG tag of the chart. This works once the init has been done.
   */
  svg () {
    if (!this.node) {
      console.error('No SVG node found. Chart needs to be initalized before calling svg()');
      return
    }

    if (!this._svg) {
      this._svg = this.node.tagName === 'svg' ? this.node : this.node.closest('svg');
    }

    return this._svg
  }

  /**
   * Returns the defs section of the SVG the chart is located in.
   */
  defs () {
    if (!this._defs) {
      const svg = this.svg();
      this._defs = svg.querySelector('defs') || select(svg).insert('defs', ':first-child').node();
    }
    return this._defs
  }

  xAxis (options = {}) {
    this.chartArea.xAxis(options);
    return this
  }

  yAxis (options = {}) {
    this.chartArea.yAxis(options);
    return this
  }

  initChart (node, state) {
    this._node = node;

    // Add a clipping path
    this._clipPath = select(this.defs()).append('clipPath').attr('id', `clip_${this.id}`);
    this._clipPath.append('rect');

    if (this.chartArea) {
      // Set the grid style
      this.chartArea.xGrid(this._style.xGrid || {});
      this.chartArea.yGrid(this._style.yGrid || {});

      this.chartArea.init(node, state);

      // Snychronize the chart style with the chart area
      this.chartArea.updateStyle(this._style);

      // The chart area is set up after prerender has finished, because we need to have all data
      // values at this moment in order to compute the domains and ticks.
      this.subscribe('prerenderDidEnd', this.afterPrerenderChart.bind(this));
    }
  }

  prerenderChart (node, state) {
    this._node = node;
  }

  afterPrerenderChart () {
    if (this.chartArea) {
      this.chartArea.updateStyle(this._style);

      const mrg = this.style('chartArea.margin');
      // Set a non-null value for the chart area view rect. This is not the final value.
      this.chartArea.viewRect.setHeight(this.height - mrg.top - mrg.bottom);
      this.chartArea.viewRect.top = mrg.top;
      this.chartArea.viewRect.setWidth(this.width - mrg.left - mrg.right);
      this.chartArea.viewRect.left = mrg.left;
      this.chartArea.prerender(this.node, this.state);
    }
  }

  renderChart (node, state) {
    if (this.chartArea) {
      const mrg = this.style('chartArea.margin');
      // Set the final width and height for the chart area view rect.
      this.chartArea.viewRect.setHeight(this.height - mrg.top - mrg.bottom);
      this.chartArea.viewRect.top = mrg.top;
      this.chartArea.viewRect.setWidth(this.width - mrg.left - mrg.right);
      this.chartArea.viewRect.left = mrg.left;
      this.chartArea.render(node, state);
    }
  }

  selectNthChild (root, idx) {
    root && root.childNodes[idx] && root.childNodes[idx].classList.add('dvSelect');
  }

  sync (propertiesToSync) {
    // The properties to sync is an object with structure property: parameters.
    // The parameters can be an object which defines the sync parameters, e.g.
    // { target: otherChart }. Or it can be an array with several sync parameters, e.g. if a chart
    // wants to sync its x-domain with several other charts.
    // Each target is notified to make the sync possible in both ways.
    // To remove a sync, a `delete: true` key can be included along with the target.

    // Set each propetery seperatley.
    for (const k in propertiesToSync) {
      // Retrieve the parameters to sync for the property k
      const v = propertiesToSync[k];

      // Check if v is an object (a single set of parameters), or an array to define several syncs.
      // If it is an array, set the sync property for each of the parameter set.
      if (Array.isArray(v)) {
        v.forEach(p => this.syncProperty(k, p));
      } else {
        this.syncProperty(k, v);
      }
    }

    // Returns always this to chain other functions.
    return this
  }

  syncProperty (prop, params) {
    // Get the existing params for the property.
    const existing = this._sync[prop] || [];

    // Check if the current target is already registered
    let tIdx = null;
    for (let i = 0; i < existing.length; i++) {
      if (existing[i].target === params.target) {
        tIdx = i;
      }
    }

    // If the current target is already registered, and there is `delete: true` is set, remove
    // the params.
    if (tIdx !== null && params.delete === true) {
      // Propagate the sync to the target
      params.target.syncProperty(prop, { target: this, delete: true, propagate: false });

      // Remove the sync
      existing.splice(tIdx, 1);

      // There is no need to set again the array, as this is an existing array.
      // We can just return from here.
      return
    }

    // If the target is not currently registered, add it. Otherwise, replace with the new params.
    if (tIdx === null) {
      existing.push(params);

      // Set the sync property as this could be a new array
      this._sync[prop] = existing;
    } else {
      existing[tIdx] = params;
    }

    // Propagate the sync to the target if needed
    if (params.propagate !== false) {
      params.target.syncProperty(prop, { ...params, target: this, propagate: false });
    }
  }

  triggerSync (prop, args) {
    (this._sync[prop] || []).forEach(params => {
      params.target.updateSync(this, prop, args);
    });
  }

  updateSync (source, prop, args) {
    const fn = this._syncFn[prop];
    if (typeof fn === 'undefined') {
      console.warn(`No sync function for ${prop} on chart ${this.uid}`);
      return
    }

    // Call the sync function
    fn(source, ...args);
  }

  renderContent () {
    this.initChart(this.node, this.state);
    this.prerenderChart(this.node, this.state);
    this.renderChart(this.node, this.state);
  }

  updateSize () {
    this.prerenderChart(this.node, this.state);
    this.renderChart(this.node, this.state);
  }

  updateState () {
    this.prerenderChart(this.node, this.state);
    this.renderChart(this.node, this.state);
  }

  updateData () {
    this.prerenderChart(this.node, this.state);
    this.renderChart(this.node, this.state);
  }
}

class Pattern {
  insert (node) {
    let defs = null;

    // Get the defs section of the SVG.
    if (node.tagName === 'defs') {
      defs = node;
    } else {
      const svg = node.tagName === 'svg' ? node : node.closest('svg');
      defs = svg.querySelector('defs');
      if (!defs) defs = select(svg).insert('defs', ':first-child').node();
    }

    if (defs.querySelector(`#${this.id}`)) return

    this.render(defs);
  }

  render (_defs) {}
}

class LinePattern extends Pattern {
  constructor (id, options) {
    super();

    this.id = id;
    this.opts = options;
  }

  render (defs) {
    const lw = this.opts.strokeWidth || 2;
    const xs = this.opts.xStep || 10;
    const ys = this.opts.yStep || 10;

    const pattern = select(defs).append('pattern')
      .attr('id', this.id)
      .attr('x', 0.5 * xs).attr('y', 0.5 * ys)
      .attr('width', xs * 2).attr('height', ys * 2)
      .attr('patternUnits', 'userSpaceOnUse');

    for (let i = -3; i <= 3; i++) {
      pattern.append('line')
        .attr('x1', i * xs).attr('y1', 3 * ys)
        .attr('x2', (i + 3) * xs).attr('y2', 0)
        .style('stroke-width', `${lw}px`)
        .style('stroke', this.opts.color || '#000')
        .style('stroke-linecap', 'square');
    }
  }
}

class Legend extends A {
  renderContent () {
    this.initLegend(this.node, this.state);
    this.prerenderLegend(this.node, this.state);
    this.renderLegend(this.node, this.state);
  }

  updateSize () {
    this.prerenderLegend(this.node, this.state);
    this.renderLegend(this.node, this.state);
  }

  updateState () {
    this.prerenderLegend(this.node, this.state);
    this.renderLegend(this.node, this.state);
  }

  updateData () {
    this.prerenderLegend(this.node, this.state);
    this.renderLegend(this.node, this.state);
  }
}

const byteToHex = [];
for (let i = 0; i < 256; ++i) {
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset + 0]] +
        byteToHex[arr[offset + 1]] +
        byteToHex[arr[offset + 2]] +
        byteToHex[arr[offset + 3]] +
        '-' +
        byteToHex[arr[offset + 4]] +
        byteToHex[arr[offset + 5]] +
        '-' +
        byteToHex[arr[offset + 6]] +
        byteToHex[arr[offset + 7]] +
        '-' +
        byteToHex[arr[offset + 8]] +
        byteToHex[arr[offset + 9]] +
        '-' +
        byteToHex[arr[offset + 10]] +
        byteToHex[arr[offset + 11]] +
        byteToHex[arr[offset + 12]] +
        byteToHex[arr[offset + 13]] +
        byteToHex[arr[offset + 14]] +
        byteToHex[arr[offset + 15]]).toLowerCase();
}

let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    if (!getRandomValues) {
        if (typeof crypto === 'undefined' || !crypto.getRandomValues) {
            throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
        }
        getRandomValues = crypto.getRandomValues.bind(crypto);
    }
    return getRandomValues(rnds8);
}

const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native = { randomUUID };

function v4(options, buf, offset) {
    if (native.randomUUID && !buf && !options) {
        return native.randomUUID();
    }
    options = options || {};
    const rnds = options.random ?? options.rng?.() ?? rng();
    if (rnds.length < 16) {
        throw new Error('Random bytes length must be >= 16');
    }
    rnds[6] = (rnds[6] & 0x0f) | 0x40;
    rnds[8] = (rnds[8] & 0x3f) | 0x80;
    if (buf) {
        offset = offset || 0;
        if (offset < 0 || offset + 16 > buf.length) {
            throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
        }
        for (let i = 0; i < 16; ++i) {
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return unsafeStringify(rnds);
}

/**
 * Converts a hexadecimal string to a custom base64 encoding
 * using digits, lowercase letters, uppercase letters, hyphen and period
 * (0-9, a-z, A-Z, -, .)
 *
 * @param {string} hexString - Hexadecimal string to convert
 * @return {string} - The converted base64 string
 */
function hexToCustomBase64 (hexString) {
  if (!hexString || !/^[0-9a-f]+$/i.test(hexString)) {
    throw new Error('Input must be a valid hexadecimal string')
  }

  // Define the character set for our base64 encoding
  const base64Chars =
    '0123456789' +
    'abcdefghijklmnopqrstuvwxyz' +
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
    '-.';

  const bigIntValue = BigInt('0x' + hexString);

  let result = '';
  let value = bigIntValue;
  const base = BigInt(64);

  if (value === BigInt(0)) return ''

  while (value > 0) {
    const remainder = Number(value % base);
    result = base64Chars[remainder] + result;
    value = value / base;
  }

  return result
}

/**
 * Searches for a parent node matching a given selector. It returns the closest selector.
 * If no match was found null is returned.
 * @param {DOM element} node The node where the search of the selector should start
 * @param {*} selector The selector to match against.
 * @returns  the closest matching parent node
 */
function parentSelector (node, selector) {
  let pnode = node.parentNode;
  while (pnode !== null) {
    if (pnode.matches(selector)) return pnode
    pnode = pnode.parentNode;
  }
  return null
}

/**
 * Applies a SVG translate to the transform attribute. This function returns a function which can
 * be called by passing the D3 selection to which the translation should be applied.
 * @param {int} x
 * @param {int} y
 */
function translate (x, y) {
  return function (selection) {
    selection.attr('transform', `translate(${x} ${y})`);
  }
}

function svgPoint (svg, element, x, y) {
  const doc = svg || element.closest('svg');
  const pt = doc.createSVGPoint();
  pt.x = x;
  pt.y = y;
  return pt.matrixTransform(element.getScreenCTM().inverse())
}

/**
 * Returns the correct property based on the state of the node. It can be `highlighted`, `selected`,
 * `faded` or `default`. The `alt` property is also supported. The decision is made based on the
 * presence of CSS classes on the node.
 * @param {object|string|number} prop The object containing the property variants. It also can
 * be a simple string or number. In this case, the value itself will be returned without checking
 * the CSS classes.
 * @param {node} node The DOM node for which we need to return the property.
 * @returns the property.
 */
function propertyWithState (prop, node) {
  if (!prop) return null

  // Check if we have a string, a number or an object. If it is an object, we make a difference
  // between the selected, highlighed, default and faded states which are defined in a CSS class.
  if (typeof prop === 'string' || typeof prop === 'number') return prop

  // If there is no node, return the default property
  if (!node) return prop.default

  // Support the alt property
  const p = node.classList.contains('dvAlt') && typeof prop.alt !== 'undefined' ? prop.alt : prop;

  // The selected property
  if (node.classList.contains('dvSelected') || node.classList.contains('dvSelect') ||
      node.parentElement.classList.contains('dvSelected') ||
      node.parentElement.classList.contains('dvSelect')
  ) {
    return firstDefinedValue([p.dark, p.selected, prop.dark, prop.selected])
  }

  // The highlighted property
  if (node.classList.contains('dvHighlight') || node.classList.contains('dvHighlighted')) {
    return firstDefinedValue([p.highlighted, p.selected, prop.highlighted, prop.selected])
  }

  // The faded property
  if (node.classList.contains('dvFaded')) {
    return firstDefinedValue([p.light, p.faded, p.default, prop.light, prop.faded, prop.default])
  }

  return firstDefinedValue([p.default, prop.default])
}

/**
 * Returns a compacted UUID generated with UUIDv4
 */
function uuid64 (prefix = '') {
  const p = prefix.length > 0 ? prefix + '-' : '';
  const uuid = v4().replaceAll('-', '');
  return p + hexToCustomBase64(uuid)
}

class CategoricalLegend extends Legend {
  constructor (config, style) {
    super(config, style);

    this.mergeStyle({
      padding: { bottom: 5 },
      font: { size: 12, lineHeight: 1.5 },
      box: {
        shape: 'rect',
        width: 12,
        height: 12,
        lineWidth: 2,
        padding: { left: 16, right: 8, bottom: 10 },
        customize: () => {}
      },
      column: { maxWidth: w => w },
      align: 'center'
    });
    this.mergeStyle(style);

    this._categories = config.categories || [];
    this._colors = config.colors || [];
    this._shapes = config.shapes || null;
    this._boxes = config.boxes || null;
    this._display = config.display || true;

    this._d = {
      data: null,
      categories: null,
      boxes: null
    };

    this._c = {
      shownCategories: null,
      shownColors: null
    };

    this._events = {
      select: { fn: null, options: null },
      deselect: { fn: null, options: null }
    };
  }

  on (evt, callbackFn, options) {
    if (['select', 'deselect'].indexOf(evt) < 0) {
      console.warn(`Event '${evt} unknown.`);
      return
    }

    this._events[evt] = {
      fn: callbackFn,
      options: typeof options === 'undefined' ? null : options
    };

    return this
  }

  initLegend (node, _state) {
    node.classList.add('dvLegend');
    node.classList.add('dvCategoricalLegend');
    select(node).append('g').attr('class', 'dvLegendWrapper');
  }

  prerenderLegend (node, state) {
    // Get the data considering the state
    const d = {};
    this.requiredDataSources.forEach(ds => {
      d[ds] = this.data(ds);
    });
    this._d.data = this.dataExtractor ? this.dataExtractor(d, this.state, this) : d;

    // Extract the categories
    this._extractedCategories = x$1(this._categories, { data: this._d.data }, state, this);
    this._extractedColors = x$1(this._colors, { data: this._d.data }, state, this);

    // Filter the categories and colors according to the display settings.
    let display = x$1(this._display, this._extractedCategories, state, this);
    if (display === true) {
      display = this._extractedCategories.map(() => true);
    }
    if (display === false) {
      display = this._extractedCategories.map(() => false);
    }

    this._d.categories = this._extractedCategories.map((d, i) => {
      return {
        category: d,
        idx: i,
        color: this._extractedColors[i],
        display: display[i]
      }
    });

    if (this._boxes !== null && Array.isArray(this._boxes)) {
      this._d.boxes = this._boxes;
    } else {
      this._d.boxes = this._d.categories.map((cat, i) => {
        return this._boxes !== null
          ? x$1(this._boxes, cat, state, this)
          : this._style.box
      });
    }

    // Make sure all default properties of a box style are defined. If is is not present, add the
    // default value
    const def = (obj, prop, defaultValue) => {
      if (typeof obj[prop] === 'undefined') obj[prop] = defaultValue;
    };
    this._d.boxes.forEach(bx => {
      def(bx, 'shape', 'rect');
      def(bx, 'width', 12);
      def(bx, 'height', 12);
      def(bx, 'lineWidth', 2);
      def(bx, 'padding', { left: 16, right: 8, bottom: 10 });
      def(bx.padding, 'left', 16);
      def(bx.padding, 'right', 8);
      def(bx.padding, 'bottom', 10);
      def(bx, 'customize', () => {});
    });

    this._c.shownCategories = this._d.categories.filter(d => d.display);
    this._c.shownColors = this._extractedColors.filter((_, i) => display[i]);

    // Remove all legend entries in the beginning
    select(node).select('.dvLegendWrapper')
      .selectAll('g')
      .data([])
      .exit()
      .remove();

    // Check if there are any categories to be shown
    if (this._c.shownCategories.length === 0) {
      this.height = 0;
      select(node).classed('dvHidden', true);
      return
    }

    const enterG = select(node).select('.dvLegendWrapper')
      .selectAll('g')
      .data(this._c.shownCategories)
      .enter()
      .append('g')
      .on('mouseover', this._select.bind(this))
      .on('mouseleave', this._deselect.bind(this))
      .style('cursor', 'default');

    // Add the geometry for each element in the enter selection, and define its style
    enterG.each((category, i, nodes) => {
      // Check which shape we should display for the legend item.
      // This is either a specified shape defined using the `.shapes` method, or a default shape
      // defined in `style.box.shape`.
      const shape = this._shapes && this._shapes.length > i
        ? this._shapes[i]
        : this._d.boxes[i].shape;

      this._renderShape(shape, category, i, select(nodes[i]));
    });

    const fsize = x$1(this._style.font.size, this, this._state);
    enterG.append('text');
    select(node).select('.dvLegendWrapper')
      .selectAll('text')
      .text(d => d.category)
      .style('font-size', `${fsize}px`)
      .attr('x', (_, i) => this._d.boxes[i].width + this._d.boxes[i].padding.right)
      .attr('y', (_, i) => fsize + Math.max((this._d.boxes[i].height - fsize) / 2, 0))
      .each((d, idx, nodes) => {
        const w = typeof this._style.column.maxWidth === 'function'
          ? this._style.column.maxWidth(this.width, d.category, d.idx, nodes[idx])
          : this._style.column.maxWidth;
        if (w) {
          textWrap(
            nodes[idx],
            w - this._d.boxes[idx].width - this._d.boxes[idx].padding.right -
              this._d.boxes[idx].padding.left,
            fsize * this._style.font.lineHeight
          );
        }
      });

    this._fitLegendElements(node);

    const h = select(node).select('.dvLegendWrapper').node().getBoundingClientRect().height;

    this.height = h + (this._style.padding.top || 0) + (this._style.padding.bottom || 0);
  }

  renderLegend (node, state) {
    // The only thing that is left for rendering is the horizontal positioning of the legend.
    // We apply the alignment that is defined in the style options according to the available space.
    const w = select(node).select('.dvLegendWrapper').node().getBoundingClientRect().width;
    let dw = 0;
    if (this._style.align === 'center') dw = (this.width - w) / 2;
    if (this._style.align === 'right') dw = this.width - w;

    // Customize the legend elements
    select(node).select('.dvLegendWrapper')
      .selectAll('.dvGeom')
      .each((d, idx, nodes) => {
        if (!this._d.boxes[idx].customize) return
        const catIdx = this._extractedCategories.indexOf(d.category || d);
        this._d.boxes[idx].customize(nodes[idx], d, catIdx, state, this);
      });

    select(node).select('.dvLegendWrapper').call(translate(dw, 0));
  }

  _renderShape (shape, _category, idx, sel) {
    // Handle the case when there should not be a shape for the legend entry.
    if (shape === null) return

    const fsize = x$1(this._style.font.size, this, this._state);
    const boxDeltaY = Math.max((fsize - this._d.boxes[idx].height) / 2 + 2, 0);

    if (shape === 'rect') {
      sel.append('rect')
        .attr('class', 'dvGeom')
        .attr('x', 0)
        .attr('y', boxDeltaY)
        .attr('width', this._d.boxes[idx].width)
        .attr('height', this._d.boxes[idx].height)
        .style('fill', this._c.shownColors[idx]);
    }

    if (shape === 'circle') {
      sel.append('ellipse')
        .attr('class', 'dvGeom')
        .attr('cx', this._d.boxes[idx].width / 2)
        .attr('cy', boxDeltaY + this._d.boxes[idx].height / 2)
        .attr('rx', this._d.boxes[idx].width / 2)
        .attr('ry', this._d.boxes[idx].height / 2)
        .style('fill', this._c.shownColors[idx]);
    }

    if (shape === 'line') {
      sel.append('line')
        .attr('class', 'dvGeom')
        .attr('x1', 0)
        .attr('y1', boxDeltaY + this._d.boxes[idx].height / 2)
        .attr('x2', this._d.boxes[idx].width)
        .attr('y2', boxDeltaY + this._d.boxes[idx].height / 2)
        .style('stroke', this._c.shownColors[idx])
        .style('stroke-width', `${this._d.boxes[idx].lineWidth}px`);
    }
  }

  _fitLegendElements (node) {
    // Get the width of each legend element. This will allow for evaluating how many lines are
    // needed and as a result the overall height of the legend.
    const elems = select(node).select('.dvLegendWrapper').selectAll('g').nodes();
    const dims = elems.map(elem => {
      const cr = elem.getBoundingClientRect();
      return { w: cr.width, h: cr.height }
    });

    // The legend elements are organized as a table of m columns and n lines. The columns have a
    // variable width according to the widest element in the column. We try to fit the legend
    // elements first in one line, and then increase the number of lines until everything fits or
    // until only one element is present in a line.
    const totWidth = this.width;
    let elementsFitted = false;
    let nrows = 0;
    while (!elementsFitted) {
      nrows += 1;
      const ncols = Math.ceil(this._c.shownCategories.length / nrows);
      const colWidths = [];
      const rowHeights = [];
      dims.forEach((dim, i) => {
        const col = i % ncols;
        colWidths[col] = Math.max(dim.w + this._d.boxes[i].padding.left, (colWidths[col] || 0));
        const row = Math.floor(i / ncols);
        rowHeights[row] = Math.max(dim.h + this._d.boxes[i].padding.bottom, (rowHeights[row] || 0));
      });

      elementsFitted = (
        colWidths.reduce((a, b) => a + b) -
          dims.map((_, i) => this._d.boxes[i].padding.left)
            .reduce((a, b) => Math.min(a, b))
      ) <= totWidth;

      if (nrows === this._c.shownCategories.length) elementsFitted = true;

      if (elementsFitted) {
        const colX = [0];
        colWidths.forEach((w, i) => { colX[i + 1] = (colX[i] || 0) + w; });
        const rowY = [0];
        rowHeights.forEach((h, i) => { rowY[i + 1] = (rowY[i] || 0) + h; });
        select(node).select('.dvLegendWrapper').selectAll('g')
          .attr('transform', (d, i) => {
            const col = i % ncols;
            const row = Math.floor(i / ncols);
            return `translate(${colX[col]} ${rowY[row]})`
          });
      }
    }
  }

  _select (evt, data) {
    if (this._events.select.fn) {
      this._events.select.fn(evt, data, this._events.select.options);
    }
  }

  _deselect (evt, data) {
    if (this._events.deselect.fn) {
      this._events.deselect.fn(evt, data, this._events.select.options);
    }
  }
}

function categoricalLegend (options) {
  return new CategoricalLegend(options)
}

function colorWithState (col, node) {
  if (!col) return null

  // Check if we have a string or an object. If it is an object, we make a difference
  // between the highlighed, default and faded states which are defined in a CSS class.
  if (typeof col === 'string') return col

  const c = node.classList.contains('dv_alt') && typeof col.alt !== 'undefined' ? col.alt : col;
  if (node.classList.contains('dv_selected') || node.classList.contains('dv_select') ||
      node.parentElement.classList.contains('dv_selected') ||
      node.parentElement.classList.contains('dv_select')
  ) {
    return c.dark || c.selected || c.default || col.dark || col.selected || col.default
  }
  if (node.classList.contains('dv_faded')) {
    return c.light || c.faded || c.default || col.light || col.faded || col.default
  }
  return c.default || col.default
}

const defaultBarChartStyle = {
  categories: {
    // The font size in pixels
    font: { size: 12, color: '#000' }
  },
  values: {
    show: 'always', // can be 'always' = true, 'hover', 'never' = false
    font: { size: 11, colorInside: '#fff', colorOutside: '#000' },
    format: d => d
  },
  bars: {
    // The space between 2 bars
    spacing: 3,
    fill: { default: 'rgb(110, 160, 195)', selected: 'rgb(110, 160, 195)' },
    // Style for the confidence interval pattern
    confidenceInterval: {
      opacity: 1,
      color: '#333',
      xStep: 7,
      yStep: 7,
      strokeWidth: 2,
      label: 'Confidence interval',
      showLegend: true
    }
  },
  marks: {
    symbol: 'line', // can be line, circle, diamond or a function
    stroke: '#000',
    strokeWidth: 2,
    fill: '#000',
    width: 0,
    height: null,
    customize: null,
    showLegend: true
  },

  legend: { align: 'left', position: 'top', padding: { top: 15, bottom: 5 } }
};

class BarChart extends Chart {
  constructor (config, style) {
    const options = {
      hasChartArea: true
    };
    super(config, style, options);

    this._values = config.values;
    this._confidenceInterval = config.confidenceInterval || null;

    this.mergeStyle(defaultBarChartStyle);
    this.mergeStyle(Qe.style.barChart || {});
    this.mergeStyle(style);

    this.legend = null;

    this._mark = config.mark || null;
    this._markTitle = config.markTitle || null;

    this._minValue = config.minValue || null;
    this._maxValue = config.maxValue || null;
    this._categories = config.categories || null;
  }

  initChart (node, state) {
    super.initChart(node, state);

    const st = this._style;

    const chartG = select(node).append('g').attr('class', 'dvChartWrapper');

    chartG.append('g').attr('class', 'dvBars');
    if (this._confidenceInterval) chartG.append('g').attr('class', 'dvBarsCi');
    chartG.append('g').attr('class', 'dvCategories');

    // If there is a mark to be shown, add a group for it
    if (this._mark) chartG.append('g').attr('class', 'dvMark');

    // If we should show the values, add a group for them too
    if (st.values.show !== false && st.values.show !== 'never') {
      chartG.append('g').attr('class', (st.values.show === 'hover' ? 'dvHover ' : '') + 'dvValues');
    }

    // Add a group for the bar labels
    chartG.append('g').attr('class', 'dvBarLabels');

    // Add a legend group in case we need it.
    this._legendNode = select(node).append('g').node();

    // If there is a confidence interval we add a pattern for it to the SVG defs.
    if (this._confidenceInterval) {
      const pattern = new LinePattern(`barchart${this.id}`, {
        xStep: st.bars.confidenceInterval.xStep,
        yStep: st.bars.confidenceInterval.yStep,
        strokeWidth: st.bars.confidenceInterval.strokeWidth,
        color: st.bars.confidenceInterval.color
      });
      pattern.insert(node);
    }

    // If there is a confidence interval or a mark value, and we should show the legend for one of
    // them (or both), create a categorical legend.
    if (
      (this._confidenceInterval && this._style.bars.confidenceInterval.showLegend) ||
      (this._markTitle && this._style.marks.showLegend)
    ) {
      const cats = [];
      const cols = [];

      // Keep track if we have confint and/or mark, and in which order
      const types = [];
      if (this._confidenceInterval && this._style.bars.confidenceInterval.showLegend) {
        cats.push(this._(st.bars.confidenceInterval.label, state, this));
        cols.push(`url(#barchart${this.id})`);
        types.push('ci');
      }

      if (this._markTitle && this._style.marks.showLegend) {
        cats.push(this._(this._markTitle, state, this));
        cols.push('#f0f0f0');
        types.push('mark');
      }

      this.legend = new CategoricalLegend()
        .categories(cats)
        .colors(cols)
        .style({
          align: st.legend.align,
          padding: { bottom: 0 },
          box: {
            width: 30,
            height: 20,
            bottom: 0,
            customize: (node, category, idx, state, _legend) => {
              // Apply the opacity for the confidence interval
              if (types[idx] === 'ci') {
                select(node).style('fill-opacity', st.bars.confidenceInterval.opacity);
              }
              // Add the symbol for the mark
              if (types[idx] === 'mark') {
                this._renderMarkSymbol(node.parentNode, category, idx, state, { x: 15, y: 10, h: 20 });
              }
            }
          }
        });

      this.legend.initLegend(this._legendNode, state);
    }

    // Interaction bars
    select(node).append('g').attr('class', 'dvInteraction');
  }

  // Prepare rendering of the chart. prerender figures out the
  // size of the labels which is based on the text values.
  prerenderChart (node, state) {
    super.prerenderChart(node, state);

    const st = this._style;
    this._node = node;

    this.publish('prerenderWillStart', { node, state });

    // Extract the values and categories
    const d = {};
    this.requiredDataSources.forEach(ds => {
      d[ds] = this.data(ds);
    });
    this._data = this.dataExtractor ? this.dataExtractor(d, this.state, this) : d;

    this._cats = typeof this._categories === 'function'
      ? this._categories(this._data, state, this)
      : this._data.map(d => d[this._categories]);

    this._vals = typeof this._values === 'function'
      ? this._values(this._data, state, this)
      : this._data.map(d => d[this._values]);

    this._valsCI = this._confidenceIntervalValues();
    this._markVals = this._mark ? this._markValues() : null;

    // Decide if we should show the legend items or not
    if (this.legend) {
      const display = [];
      if (this._confidenceInterval && this._style.bars.confidenceInterval.showLegend) {
        // The confidence interval legend item is available. Show it there is a non-null or non-0
        // confidence interval.
        display.push(this._valsCI.flat().some(v => v !== null && v !== 0));
      }
      if (this._markTitle && this._style.marks.showLegend) {
        // Check if there is a non-null mark value
        display.push(this._markVals.some(v => v !== null));
      }
      this.legend.display(display);
    }

    // Compute the minimum and maximum values
    this._vmax = this._maxValue === null
      ? max(this._vals.map((v, i) => v + this._valsCI[i][1]))
      : x$1(this._maxValue, this._vals, state, this);
    this._vmin = Math.min(0, this._minValue === null
      ? min(this._vals.map((v, i) => v - this._valsCI[i][0]))
      : x$1(this._minValue, this._vals, state, this));

    // If the values should be shown, render them but without the correct location.
    if (st.values.show !== false && st.values.show !== 'never') {
      select(node)
        .select('.dvValues')
        .selectAll('text')
        .data(this._vals)
        .join('text')
        .attr('x', 0).attr('y', 0)
        .style('font-size', `${st.values.font.size}px`)
        .text(d => st.values.format(d, state, this));
    }
  }

  _renderMarkSymbol (_node, _category, _idx, _state) {}

  _confidenceIntervalValues () {
    if (!this._confidenceInterval) {
      return this._vals.map(_ => [0, 0])
    }

    if (typeof this._confidenceInterval === 'function') {
      const values = this._confidenceInterval(this._data, this._state, this);
      return values.map(v => {
        if (v === null) return [0, 0]
        return typeof v === 'number' ? [v, v] : [v.lower, v.upper]
      })
    }

    if (typeof this._confidenceInterval === 'object') {
      return this._data.map(d => {
        return [d[this._confidenceInterval.lower], d[this._confidenceInterval.upper]]
      })
    }

    return this._data.map(d => {
      return [d[this._confidenceInterval], d[this._confidenceInterval]]
    })
  }

  _markValues () {
    // If mark is a string we consider it is a column name
    if (typeof this._mark === 'string') return this._data.map(d => d[this._mark])

    // If the mark is a function, execute the function and return the result
    if (typeof this._mark === 'function') return this._mark(this._data, this._state, this)

    // Otherwise we just return the value itself
    return this._mark
  }

  _handleSelect (evt) {
    // Unselect first all potential selections
    this._node.querySelectorAll('.dvSelect').forEach(n => n.classList.remove('dvSelect'));

    const idx = parseInt(evt.target.getAttribute('data-idx'));
    this.selectNthChild(this._node.querySelector('.dvBars'), idx);
    this.selectNthChild(this._node.querySelector('.dvCategories'), idx);
    this.selectNthChild(this._node.querySelector('.dvValues'), idx);

    // Update the bar colors
    select(this._node).select('.dvBars')
      .selectAll('rect')
      .style('fill', (d, i, nodes) => {
        return colorWithState(
          x$1(this._style.bars.fill, { value: d, idx: i, nodes: nodes }, this._state, this),
          nodes[i]
        )
      });
  }

  _handleUnselect (_evt) {
    this._node.querySelectorAll('.dvSelect').forEach(n => n.classList.remove('dvSelect'));

    select(this._node).select('.dvBars')
      .selectAll('rect')
      .style('fill', (d, i, nodes) => {
        return colorWithState(
          x$1(this._style.bars.fill, { value: d, idx: i, nodes: nodes }, this._state, this),
          nodes[i]
        )
      });
  }
}

function circle (node, center, style) {
  select(node).append('circle')
    .attr('cx', center.x).attr('cy', center.y)
    .attr('r', ((style.width || style.height || 8) - (style.strokeWidth || 0)) / 2)
    .style('fill', style.fill || 'none')
    .style('stroke', style.stroke || 'none')
    .style('stroke-width', style.strokeWidth);
}

function diamond (node, center, style) {
  const h = style.height - (style.strokeWidth || 0);
  const w = style.width - (style.strokeWidth || 0);
  const pts = [
    [center.x, center.y - h / 2], [center.x + w / 2, center.y],
    [center.x, center.y + h / 2], [center.x - w / 2, center.y]
  ];
  select(node).append('polygon')
    .attr('points', pts.map(p => `${p[0]},${p[1]}`).join(' '))
    .style('fill', style.fill || 'none')
    .style('stroke', style.stroke || 'none')
    .style('stroke-width', style.strokeWidth);
}

function line$1 (node, center, style) {
  const h2 = style.height / 2;
  const w2 = style.width / 2;
  select(node).append('line')
    .attr('x1', center.x - w2).attr('y1', center.y - h2)
    .attr('x2', center.x + w2).attr('y2', center.y + h2)
    .style('fill', 'none')
    .style('stroke', style.stroke || 'none')
    .style('stroke-width', style.strokeWidth);
}

function symbol (node, symbol, center, style) {
  const fn = ({
    circle: circle,
    diamond: diamond,
    line: line$1
  })[symbol];
  fn && fn(node, center, style);
}

const defaultHorizontalBarChartStyle = {
  dataRect: { padding: { top: 20, bottom: 20 } },

  grid: {
    horizontal: { show: false },
    vertical: { show: true, color: '#ccc', width: 1 }
  },

  // Should the categories be displayed stacked. If this is the case, the labels for the bars
  // are placed above the bar and the bar starts from the left border. By default, this value
  // is false as it leads to a more compact bar chart.
  stackedDisplay: false,

  bars: {
    // The minimum acceptable width for the bars. If the available width for
    // the bars is less, the label display mode is switched to stacked to
    // gain some space for the bars.
    minWidth: 200
  },

  barLabels: {
    color: '#000',
    font: { size: 10, weight: 400 },
    offset: 7
  },

  xAxis: {
    show: true,
    format: null,
    numberOfTicks: 10,
    customize: function (_axis) {}
  },

  yAxis: {
    values: { align: 'right' },
    font: { size: 12, color: '#757575', weight: 700 }
  }
};

class HorizontalBarChart extends BarChart {
  constructor (config, style, options = {}) {
    super(config, style, options);

    this.xAxis({ type: 'linear', placement: 'top' });
    this.yAxis({ type: 'band' });

    this.mergeStyle(defaultHorizontalBarChartStyle);
    this.mergeStyle(Qe.style.horizontalBarChart || {});
    this.mergeStyle(style);

    this._chartHeight = config.height || (
      (data, _state, chart) => {
        return data.values.length * 30 + 50 + ((chart.legend && chart.legend.viewRect.height()) || 0)
      }
    );

    this._xAxisTitle = config.xAxisTitle || null;
    this._barLabel = config.barLabel || null;
  }

  xAxisFormat (formatFn) {
    // This function is only for compatibility purposes. It will be removed in a later version.
    console.warn('[BarChart] xAxisFormat is deprecated. Use style({ xAxis: { format: ... } }) instead.');
    this._style.xAxis.format = formatFn;
    return this
  }

  initChart (node, state) {
    super.initChart(node, state);

    node.classList.add('dvHorizontalBarChart');

    // Define the properties for the ChartArea
    this.chartArea.xGrid(this._style.grid.vertical);
    this.chartArea.yGrid(this._style.grid.horizontal);

    this._style.xAxis.format = this._style.xAxis.format || this._style.values.format;
  }

  // Prepare rendering of the chart. Computes the size of the labels.
  prerenderChart (node, state) {
    super.prerenderChart(node, state);

    const st = this._style;

    // Define the height of the chart.
    this.height = x$1(
      this._chartHeight,
      { values: this._vals, categories: this._cats },
      state,
      this
    );

    // Prerender the bar labels if there are any
    this._prerenderBarLabels(node, state);

    // Prerender the legend and get its height. Otherwise hide the legend
    if (this.legend && (this._valsCI.flat().filter(v => v !== 0 && v !== null).length > 0 || this._markTitle)) {
      this._legendNode.classList.remove('dvHidden');
      this.legend.maxViewRect = new Rect(0, 0, this.viewRect.width, null);
      this.legend.prerenderLegend(this._legendNode, state);

      // Verify if there are any categories to be shown in the legend. If not, hide the legend.
      if (this.legend._c.shownCategories.length === 0) {
        this._legendNode.classList.add('dvHidden');
        this._style.chartArea.margin.top = 0;
        this._style.chartArea.margin.bottom = 0;
      } else {
        const lpd = st.legend.position === 'bottom' ? st.legend.padding.top : st.legend.padding.bottom;
        if (this._style.legend.position === 'top') {
          this._style.chartArea.margin.top = this.legend.viewRect.height() + lpd;
        } else {
          this._style.chartArea.margin.bottom = this.legend.viewRect.height() + lpd;
        }
      }
    } else {
      this._legendNode.classList.add('dvHidden');
      this._style.chartArea.margin.top = 0;
      this._style.chartArea.margin.bottom = 0;
    }

    this.chartArea._xAxisLabel = x$1(this._xAxisTitle, this, state);

    // Define the x- and y-domains for the chart area.
    this.chartArea.xDomain([this._vmin, this._vmax]);
    this.chartArea.yDomain(this._cats);

    this.publish('prerenderDidEnd', { node, state });
  }

  _prerenderBarLabels (node, state) {
    if (this._barLabel === null) return

    select(node).select('.dvBarLabels')
      .selectAll('text')
      .data(this._vals)
      .join('text')
      .style('font-size', `${this._style.barLabels.font.size}px`)
      .style('font-weight', this._style.barLabels.font.weight)
      .style('fill', this._style.barLabels.color)
      .text((d, i) => x$1(this._barLabel,
        { value: d, idx: i, category: this._cats[i] },
        state,
        this
      ));
  }

  renderChart (node, state) {
    this.publish('renderWillStart', { node, state });
    super.renderChart(node, state);

    // Shift the legend down if necessary
    if (this.legend && (this._valsCI.flat().filter(v => v !== 0 && v !== null).length > 0 || this._markTitle)) {
      if (this._style.legend.position === 'bottom') {
        node.querySelector('.dvLegend').setAttribute(
          'transform',
          `translate(0 ${this.chartArea.viewRect.height() + this._style.legend.padding.top})`
        );
      }
    }

    this._renderBars(node, state);
    this._renderBarLabels(node, state);

    // Customize the x-axis
    this._style.xAxis.customize(this.chartArea._xAxis, state, this);
  }

  _renderBars (node, state) {
    select(node)
      .select('.dvBars')
      .selectAll('rect')
      .data(this._vals)
      .join('rect')
      .style('fill', (d, i, nodes) => {
        return colorWithState(
          x$1(this._style.bars.fill, { value: d, idx: i, nodes: nodes }, state, this),
          nodes[i]
        )
      })
      .attr('x', d => Math.min(this.chartArea.xScale(0), this.chartArea.xScale(d || 0)))
      .attr('y', (_, i) => this.chartArea.yScale(this._cats[i]))
      .attr('height', this.chartArea.yScale.bandwidth())
      .attr('width', d => Math.abs(this.chartArea.xScale(d || 0) - this.chartArea.xScale(0)));

    // Render the confidence interval
    if (this._confidenceInterval) {
      select(node).select('.dvBarsCi').selectAll('rect')
        .data(this._valsCI)
        .join('rect')
        .style('fill', `url(#barchart${this.id})`)
        .style('fill-opacity', this._style.bars.confidenceInterval.opacity)
        .attr('x', (d, i) => this.chartArea.xScale(this._vals[i] - d[0]))
        .attr('y', (_, i) => this.chartArea.yScale(this._cats[i]))
        .attr('height', this.chartArea.yScale.bandwidth())
        .attr('width', (d, i) => this.chartArea.xScale(this._vals[i] + d[1]) - this.chartArea.xScale(this._vals[i] - d[0]));
    }

    // Render the mark if there is one
    this._mark && this._renderMark(node, state);

    if (this.legend) {
      this.legend.renderLegend(this._legendNode, state);
    }

    // Render the interaction elements
    select(node).select('.dvInteraction').selectAll('rect')
      .data(this._vals)
      .join('rect')
      .attr('x', 0)
      .attr('y', (_, i) => this.chartArea.yScale(this._cats[i]))
      .attr('height', this.chartArea.yScale.bandwidth())
      .attr('width', this.width)
      .attr('data-idx', (_, i) => i)
      .on('mouseover', this._handleSelect.bind(this))
      .on('click', this._handleSelect.bind(this))
      .on('mouseout', this._handleUnselect.bind(this));

    this._renderValues(node);

    this.publish('renderDidEnd', { node, state });
  }

  _renderBarLabels (node, _state) {
    if (this._barLabel === null) return

    // Get the minimum and maximum x-position of each bar, including mark,
    // confidence interval, label, etc.
    const barPositions = select(node).select('.dvBars')
      .selectAll('rect').nodes().map(node => {
        const x = parseFloat(node.getAttribute('x'));
        const w = parseFloat(node.getAttribute('width'));
        return { xmin: x, xmax: x + w }
      });

    select(node).select('.dvValues')
      .selectAll('text').nodes().forEach((node, i) => {
        const bbox = node.getBBox();
        barPositions[i].xmin = Math.min(barPositions[i].xmin, bbox.x);
        barPositions[i].xmax = Math.max(barPositions[i].xmax, bbox.x + bbox.width);
      });

    select(node).select('.dvBarsCi')
      .selectAll('rect').nodes().forEach((node, i) => {
        const bbox = node.getBBox();
        if (bbox.width > 0) {
          barPositions[i].xmin = Math.min(barPositions[i].xmin, bbox.x);
          barPositions[i].xmax = Math.max(barPositions[i].xmax, bbox.x + bbox.width);
        }
      });

    // Get the maximum x-position of the category labels.
    const catLabelXMax = select(node).select('.dvYAxis')
      .selectAll('text').nodes().map(node => {
        const bbox = node.getBBox();
        return bbox.x + bbox.width
      })
      .reduce((a, b) => Math.max(a, b), 0);

    // The bar labels have already been created in the prerender step.
    // During rendering, we only need to define their position.
    select(node).select('.dvBarLabels')
      .selectAll('text')
      .attr('x', (d, i) => {
        // Check if the label should be rendered on the left or right.
        // Check the position where the label should go based on the positions
        // of the other elements.
        return d > 0
          ? barPositions[i].xmax + this._style.barLabels.offset
          : barPositions[i].xmin - this._style.barLabels.offset
      })
      .attr('y', (_d, i) => {
        // The y-position is the same as for the value label
        const fontSize = this._style.values.font.size;
        const offset = (this.chartArea.yScale.bandwidth() - fontSize) / 2 - 1.5;
        return this.chartArea.yScale(this._cats[i]) + fontSize + offset
      })
      .style('text-anchor', d => d > 0 ? 'start' : 'end')
      .each((_d, i, nodes) => {
        nodes[i].classList.remove('dvHidden');
        const bbox = nodes[i].getBBox();
        if (bbox.x < catLabelXMax || bbox.x + bbox.width > this.viewRect.width()) {
          nodes[i].classList.add('dvHidden');
        }
      });
  }

  _renderMark (node, state) {
    select(node).select('.dvMark').selectAll('g')
      .data(this._markVals)
      .join('g')
      .attr('transform', (d, i) => {
        return d === null ? '' : `translate(${this.chartArea.xScale(d)} ${this.chartArea.yScale(this._cats[i])})`
      })
      .classed('dvHidden', d => d === null)
      .call(selection => {
        selection.each((d, i, nodes) => {
          nodes[i].innerHTML = '';
          this._renderMarkSymbol(nodes[i], d, i, state);
        });
      });
  }

  _renderMarkSymbol (node, d, i, state, position = null) {
    const barHeight = this.chartArea.yScale.bandwidth();
    const p = position || { x: 0, y: barHeight / 2, h: null };
    const st = this._style;
    if (typeof st.marks.symbol === 'function') {
      st.marks.symbol(
        { value: d, idx: i, node: node, cx: p.x, cy: p.y, barHeight: p.h || barHeight },
        state, this);
    } else {
      symbol(
        node,
        st.marks.symbol,
        { x: p.x, y: p.y },
        Object.assign({}, st.marks, { height: st.marks.height || p.h || barHeight })
      );
    }
    st.marks.customize && st.marks.customize({ value: d, idx: i, node: node }, state, this);
  }

  _renderValues (node) {
    // Check if values should be shown.
    if (this._style.values.show === false || this._style.values.show === 'never') return

    // The values have already been pre-rendered, so we only need to set the correct location and
    // color.
    select(node)
      .select('.dvValues')
      .selectAll('text')
      .data(this._vals)
      .join('text')
      .attr('y', (_, i) => {
        const fontSize = this._style.values.font.size;
        const offset = (this.chartArea.yScale.bandwidth() - fontSize) / 2 - 1.5;
        return this.chartArea.yScale(this._cats[i]) + fontSize + offset
      })
      .each(this._renderValueLabel.bind(this));
  }

  _renderValueLabel (d, i, nodes) {
    // Compute the label width
    const n = nodes[i];
    const w = n.getBoundingClientRect().width;

    // The values for the confidence interval
    const ciLower = this._valsCI[i][0];
    const ciUpper = this._valsCI[i][1];

    // Get the mark value if there is one
    const markValue = this._markVals !== null ? this._markVals[i] : null;

    // Compute the available space for the label inside the bar. Without mark value, this is the
    // space between the end of the bar (including confidence interval) and 0. If there is a mark,
    // the space is more limited between the end of the bar and the mark.
    const x1 = this.chartArea.xScale((d < 0 ? -d - ciUpper : d - ciLower));
    const x0 = markValue !== null ? this.chartArea.xScale(markValue) : this.chartArea.xScale(0);
    const offset = 7;
    const availableWidth = x1 - x0 - 2 * offset;

    // Decide if label needs to placed outside of the bar or not.
    const outside = w >= availableWidth;

    if (outside) {
      n.setAttribute('x', d >= 0 || d === null
        ? this.chartArea.xScale(d + this._valsCI[i][1]) + offset
        : this.chartArea.xScale(d - this._valsCI[i][0]) - offset
      );
      n.style.fill = x$1(
        this._style.values.font.colorOutside,
        { data: d, idx: i, node: nodes[i] }, this._state, this
      );
      n.style.textAnchor = d < 0 ? 'end' : 'start';
    } else {
      // The value should be displayed inside the bar. If there is a confidence interval to
      // be shown, the value is displayed near the origin of the axis, and with no confidence
      // interval, the value is shown near the end of the bar.
      if (this._confidenceInterval) {
        n.setAttribute('x', d > 0
          ? this.chartArea.xScale(0) + offset
          : this.chartArea.xScale(0) - offset
        );
        n.style.textAnchor = d < 0 ? 'end' : 'start';
      } else {
        n.setAttribute('x', d > 0
          ? this.chartArea.xScale(d + this._valsCI[i][1]) - offset
          : this.chartArea.xScale(d - this._valsCI[i][0]) + offset
        );
        n.style.textAnchor = d < 0 ? 'start' : 'end';
      }

      n.style.fill = x$1(
        this._style.values.font.colorInside,
        { data: d, idx: i, node: nodes[i] }, this._state, this
      );
    }
  }
}

function barChart (config, style) {
  return new HorizontalBarChart(config, style)
}

function constant$3(x) {
  return function constant() {
    return x;
  };
}

const pi = Math.PI,
    tau = 2 * pi,
    epsilon = 1e-6,
    tauEpsilon = tau - epsilon;

function append(strings) {
  this._ += strings[0];
  for (let i = 1, n = strings.length; i < n; ++i) {
    this._ += arguments[i] + strings[i];
  }
}

function appendRound(digits) {
  let d = Math.floor(digits);
  if (!(d >= 0)) throw new Error(`invalid digits: ${digits}`);
  if (d > 15) return append;
  const k = 10 ** d;
  return function(strings) {
    this._ += strings[0];
    for (let i = 1, n = strings.length; i < n; ++i) {
      this._ += Math.round(arguments[i] * k) / k + strings[i];
    }
  };
}

class Path {
  constructor(digits) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null; // end of current subpath
    this._ = "";
    this._append = digits == null ? append : appendRound(digits);
  }
  moveTo(x, y) {
    this._append`M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}`;
  }
  closePath() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._append`Z`;
    }
  }
  lineTo(x, y) {
    this._append`L${this._x1 = +x},${this._y1 = +y}`;
  }
  quadraticCurveTo(x1, y1, x, y) {
    this._append`Q${+x1},${+y1},${this._x1 = +x},${this._y1 = +y}`;
  }
  bezierCurveTo(x1, y1, x2, y2, x, y) {
    this._append`C${+x1},${+y1},${+x2},${+y2},${this._x1 = +x},${this._y1 = +y}`;
  }
  arcTo(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;

    // Is the radius negative? Error.
    if (r < 0) throw new Error(`negative radius: ${r}`);

    let x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01;

    // Is this path empty? Move to (x1,y1).
    if (this._x1 === null) {
      this._append`M${this._x1 = x1},${this._y1 = y1}`;
    }

    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon));

    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
      this._append`L${this._x1 = x1},${this._y1 = y1}`;
    }

    // Otherwise, draw an arc!
    else {
      let x20 = x2 - x0,
          y20 = y2 - y0,
          l21_2 = x21 * x21 + y21 * y21,
          l20_2 = x20 * x20 + y20 * y20,
          l21 = Math.sqrt(l21_2),
          l01 = Math.sqrt(l01_2),
          l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
          t01 = l / l01,
          t21 = l / l21;

      // If the start tangent is not coincident with (x0,y0), line to.
      if (Math.abs(t01 - 1) > epsilon) {
        this._append`L${x1 + t01 * x01},${y1 + t01 * y01}`;
      }

      this._append`A${r},${r},0,0,${+(y01 * x20 > x01 * y20)},${this._x1 = x1 + t21 * x21},${this._y1 = y1 + t21 * y21}`;
    }
  }
  arc(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r, ccw = !!ccw;

    // Is the radius negative? Error.
    if (r < 0) throw new Error(`negative radius: ${r}`);

    let dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0;

    // Is this path empty? Move to (x0,y0).
    if (this._x1 === null) {
      this._append`M${x0},${y0}`;
    }

    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
      this._append`L${x0},${y0}`;
    }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = da % tau + tau;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._append`A${r},${r},0,1,${cw},${x - dx},${y - dy}A${r},${r},0,1,${cw},${this._x1 = x0},${this._y1 = y0}`;
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > epsilon) {
      this._append`A${r},${r},0,${+(da >= pi)},${cw},${this._x1 = x + r * Math.cos(a1)},${this._y1 = y + r * Math.sin(a1)}`;
    }
  }
  rect(x, y, w, h) {
    this._append`M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}h${w = +w}v${+h}h${-w}Z`;
  }
  toString() {
    return this._;
  }
}

function withPath(shape) {
  let digits = 3;

  shape.digits = function(_) {
    if (!arguments.length) return digits;
    if (_ == null) {
      digits = null;
    } else {
      const d = Math.floor(_);
      if (!(d >= 0)) throw new RangeError(`invalid digits: ${_}`);
      digits = d;
    }
    return shape;
  };

  return () => new Path(digits);
}

var slice = Array.prototype.slice;

function array(x) {
  return typeof x === "object" && "length" in x
    ? x // Array, TypedArray, NodeList, array-like
    : Array.from(x); // Map, Set, iterable, string, or anything else
}

function Linear(context) {
  this._context = context;
}

Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // falls through
      default: this._context.lineTo(x, y); break;
    }
  }
};

function curveLinear(context) {
  return new Linear(context);
}

function x(p) {
  return p[0];
}

function y(p) {
  return p[1];
}

function line(x$1, y$1) {
  var defined = constant$3(true),
      context = null,
      curve = curveLinear,
      output = null,
      path = withPath(line);

  x$1 = typeof x$1 === "function" ? x$1 : (x$1 === undefined) ? x : constant$3(x$1);
  y$1 = typeof y$1 === "function" ? y$1 : (y$1 === undefined) ? y : constant$3(y$1);

  function line(data) {
    var i,
        n = (data = array(data)).length,
        d,
        defined0 = false,
        buffer;

    if (context == null) output = curve(buffer = path());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x$1(d, i, data), +y$1(d, i, data));
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  line.x = function(_) {
    return arguments.length ? (x$1 = typeof _ === "function" ? _ : constant$3(+_), line) : x$1;
  };

  line.y = function(_) {
    return arguments.length ? (y$1 = typeof _ === "function" ? _ : constant$3(+_), line) : y$1;
  };

  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant$3(!!_), line) : defined;
  };

  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };

  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };

  return line;
}

function area(x0, y0, y1) {
  var x1 = null,
      defined = constant$3(true),
      context = null,
      curve = curveLinear,
      output = null,
      path = withPath(area);

  x0 = typeof x0 === "function" ? x0 : (x0 === undefined) ? x : constant$3(+x0);
  y0 = typeof y0 === "function" ? y0 : (y0 === undefined) ? constant$3(0) : constant$3(+y0);
  y1 = typeof y1 === "function" ? y1 : (y1 === undefined) ? y : constant$3(+y1);

  function area(data) {
    var i,
        j,
        k,
        n = (data = array(data)).length,
        d,
        defined0 = false,
        buffer,
        x0z = new Array(n),
        y0z = new Array(n);

    if (context == null) output = curve(buffer = path());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k = i - 1; k >= j; --k) {
            output.point(x0z[k], y0z[k]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  function arealine() {
    return line().defined(defined).curve(curve).context(context);
  }

  area.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant$3(+_), x1 = null, area) : x0;
  };

  area.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant$3(+_), area) : x0;
  };

  area.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : constant$3(+_), area) : x1;
  };

  area.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant$3(+_), y1 = null, area) : y0;
  };

  area.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant$3(+_), area) : y0;
  };

  area.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : constant$3(+_), area) : y1;
  };

  area.lineX0 =
  area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };

  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };

  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };

  area.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant$3(!!_), area) : defined;
  };

  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };

  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };

  return area;
}

class Bump {
  constructor(context, x) {
    this._context = context;
    this._x = x;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  }
  point(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: {
        this._point = 1;
        if (this._line) this._context.lineTo(x, y);
        else this._context.moveTo(x, y);
        break;
      }
      case 1: this._point = 2; // falls through
      default: {
        if (this._x) this._context.bezierCurveTo(this._x0 = (this._x0 + x) / 2, this._y0, this._x0, y, x, y);
        else this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + y) / 2, x, this._y0, x, y);
        break;
      }
    }
    this._x0 = x, this._y0 = y;
  }
}

function bumpX(context) {
  return new Bump(context, true);
}

function linkSource(d) {
  return d.source;
}

function linkTarget(d) {
  return d.target;
}

function link(curve) {
  let source = linkSource,
      target = linkTarget,
      x$1 = x,
      y$1 = y,
      context = null,
      output = null,
      path = withPath(link);

  function link() {
    let buffer;
    const argv = slice.call(arguments);
    const s = source.apply(this, argv);
    const t = target.apply(this, argv);
    if (context == null) output = curve(buffer = path());
    output.lineStart();
    argv[0] = s, output.point(+x$1.apply(this, argv), +y$1.apply(this, argv));
    argv[0] = t, output.point(+x$1.apply(this, argv), +y$1.apply(this, argv));
    output.lineEnd();
    if (buffer) return output = null, buffer + "" || null;
  }

  link.source = function(_) {
    return arguments.length ? (source = _, link) : source;
  };

  link.target = function(_) {
    return arguments.length ? (target = _, link) : target;
  };

  link.x = function(_) {
    return arguments.length ? (x$1 = typeof _ === "function" ? _ : constant$3(+_), link) : x$1;
  };

  link.y = function(_) {
    return arguments.length ? (y$1 = typeof _ === "function" ? _ : constant$3(+_), link) : y$1;
  };

  link.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), link) : context;
  };

  return link;
}

function linkHorizontal() {
  return link(bumpX);
}

function Step(context, t) {
  this._context = context;
  this._t = t;
}

Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // falls through
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y);
          this._context.lineTo(x, y);
        } else {
          var x1 = this._x * (1 - this._t) + x * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y);
        }
        break;
      }
    }
    this._x = x, this._y = y;
  }
};

function curveStep(context) {
  return new Step(context, 0.5);
}

function stepBefore(context) {
  return new Step(context, 0);
}

function stepAfter(context) {
  return new Step(context, 1);
}

const defaultButterflyChartStyle = {
  bars: { spacing: 3 },
  categories: { margin: { left: 7, right: 7 }, font: { size: 12 } },
  dataRect: { padding: { top: 20, bottom: 20 } },

  grid: {
    horizontal: { show: false },
    vertical: { show: true, color: '#ccc', width: 1 }
  },

  values: {
    show: true,
    alwaysOutside: true,
    font: { size: 11, colorInside: '#fff', colorOutside: '#454545' },
    format: d => d,
    margin: 5
  },

  referenceLine: {
    left: { color: '#000', width: 2 },
    right: { color: '#000', width: 2 }
  },

  xAxis: { show: true, font: { size: 12 }, customize: (_lr, _axis) => {} },

  chartArea: {
    yAxis: {
      format: d => d
    }
  }
};

class ButterflyChart extends Chart {
  constructor (config, style) {
    const options = {
      hasChartArea: true,
      hasGriddedChartArea: true
    };
    super(config, style, options);

    this.mergeStyle(defaultButterflyChartStyle);

    // Apply a loaded default style if it exists.
    this.mergeStyle(Qe.style.butterflyChart || {});
    this.mergeStyle(style);

    this._categories = config.categories || null;

    this._valuesLeft = config.valuesLeft || null;
    this._valuesRight = config.valuesRight || null;

    this._referenceValuesLeft = config.referenceValuesLeft || null;
    this._referenceValuesRight = config.referenceValuesRight || null;

    this._barColorLeft = config.barColorLeft || (() => null);
    this._barColorRight = config.barColorRight || (() => null);

    this._chartHeight = config.height || (
      (data, _state, _chart) => {
        return data.categories.length * 30 + 50
      }
    );

    // The maximum values for the bars. If null these values will be computed.
    this._maxValueLeft = config.maxValueLeft || null;
    this._maxValueRight = config.maxValueRight || null;

    this._xAxisTitleLeft = config.xAxisTitleLeft || null;
    this._xAxisTitleRight = config.xAxisTitleRight || null;

    this._xAxisFormat = config.xAxisFormat || (d => d);
    this._yAxisFormat = config.yAxisFormat || (d => d);

    this.xAxis({ type: 'linear', placement: 'top', mirrored: true });
    this.yAxis({ type: 'band' });
  }

  initChart (node, state) {
    super.initChart(node, state);
    node.classList.add('dvButterfly');

    select(node).append('g').attr('class', 'dvBars dvBarsLeft');
    select(node).append('g').attr('class', 'dvBars dvBarsRight');
    select(node).append('g').attr('class', 'dvBars dvLineLeft');
    select(node).append('g').attr('class', 'dvBars dvLineRight');
    select(node).append('g').attr('class', 'dvCategories');

    if (this._style.values.show) {
      select(node).append('g').attr('class', 'dvValues dvValuesLeft');
      select(node).append('g').attr('class', 'dvValues dvValuesRight');
    }

    // Define the properties for the ChartArea
    this.chartArea.xGrid(this._style.grid.vertical);
    this.chartArea.yGrid(this._style.grid.horizontal);

    this.chartArea._xAxis.left.formatValue = this._xAxisFormat;
    this.chartArea._xAxis.right.formatValue = this._xAxisFormat;

    this.chartArea.style.dataRect.padding.top = this._style.dataRect.padding.top;
    this.chartArea.style.dataRect.padding.bottom = this._style.dataRect.padding.bottom;
    this.chartArea.style.categories.paddingInner = this._style.bars.spacing;
    this.chartArea.style.yAxis = this._style.chartArea.yAxis;
  }

  // Prepare rendering of the chart. We need to figure out how wide are the category labels which
  // are displayed in the center of the chart.
  prerenderChart (node, state) {
    super.prerenderChart(node, state);

    this.publish('prerenderWillStart', { node, state });

    const d = {};
    this.requiredDataSources.forEach(ds => {
      d[ds] = this.data(ds);
    });
    this._data = this.dataExtractor ? this.dataExtractor(d, this.state, this) : d;

    const st = this._style;

    // Get the categories
    this._cats = typeof this._categories === 'function'
      ? this._categories(this._data, state, this)
      : this._data.map(d => d[this._categories]);

    // Pre-compute the values for later use.
    this._valsLeft = typeof this._valuesLeft === 'function'
      ? this._valuesLeft(this._data, state, this)
      : this._data.map(d => d[this._valuesLeft]);

    this._valsRight = typeof this._valuesRight === 'function'
      ? this._valuesRight(this._data, state, this)
      : this._data.map(d => d[this._valuesRight]);

    if (this._referenceValuesLeft !== null && this._referenceValuesRight !== null) {
      this._refValsLeft = typeof this._referenceValuesLeft === 'function'
        ? this._referenceValuesLeft(this._data, state, this)
        : this._data.map(d => d[this._referenceValuesLeft]);

      this._refValsRight = typeof this._referenceValuesRight === 'function'
        ? this._referenceValuesRight(this._data, state, this)
        : this._data.map(d => d[this._referenceValuesRight]);
    }

    // If the values should be shown, render them but without positioning.
    // If the value placement is always outside the bars we need to take into account their width
    // for computing the maximum bar width later on.
    this._maxValuesWidthLeft = 0;
    this._maxValuesWidthRight = 0;
    if (this._style.values.show) {
      select(node).select('.dvValuesLeft').selectAll('text')
        .data(this._valsLeft)
        .join('text')
        .style('font-size', `${st.values.font.size}px`)
        .text(d => st.values.format(d))
        .each((_, idx, nodes) => {
          const w = nodes[idx].getBoundingClientRect().width;
          nodes[idx].setAttribute('data-width', w);
          if (st.values.show && st.values.alwaysOutside) {
            this._maxValuesWidthLeft = Math.max(this._maxValuesWidthLeft, w + st.values.margin);
          }
        });

      select(node).select('.dvValuesRight').selectAll('text')
        .data(this._valsRight)
        .join('text')
        .style('font-size', `${st.values.font.size}px`)
        .text(d => st.values.format(d))
        .each((_, idx, nodes) => {
          if (st.values.show && st.values.alwaysOutside) {
            const w = nodes[idx].getBoundingClientRect().width;
            this._maxValuesWidthRight = Math.max(this._maxValuesWidthRight, w + st.values.margin);
          }
        });
    }

    // Define the height of the chart.
    this.height = x$1(
      this._chartHeight,
      { valuesLeft: this._valsLeft, valuesRight: this._valsRight, categories: this._cats },
      state,
      this
    );

    this.chartArea._xAxisLabel = {
      left: x$1(this._xAxisTitleLeft, this, state),
      right: x$1(this._xAxisTitleRight, this, state)
    };

    const maxLeft = this._maxValueLeft === null
      ? this._valsLeft.reduce((a, b) => Math.max(a, b))
      : this._maxValueLeft;

    const maxRight = this._maxValueRight === null
      ? this._valsRight.reduce((a, b) => Math.max(a, b))
      : this._maxValueRight;

    this.chartArea.xDomain({ left: [0, maxLeft], right: [0, maxRight] });
    this.chartArea.yDomain(this._cats);

    this.publish('prerenderDidEnd', { node, state });
  }

  renderChart (node, state) {
    this.publish('renderWillStart', { node, state });
    super.renderChart(node, state);

    this._renderBars(node, state);

    if (this._referenceValuesLeft !== null && this._referenceValuesRight !== null) {
      this._renderReferenceLines(node, state);
    }
  }

  _renderBars (node, state) {
    const st = this._style;

    // Render the bars on the left
    select(node).select('.dvBarsLeft')
      .selectAll('rect')
      .data(this._valsLeft)
      .join('rect')
      .attr('x', d => this.chartArea.xScale.left(d))
      .attr('width', d => this.chartArea.xScale.left(0) - this.chartArea.xScale.left(d))
      .attr('y', (_, i) => this.chartArea.yScale(this._cats[i]))
      .attr('height', this.chartArea.yScale.bandwidth())
      .each((data, idx, nodes) => {
        const node = nodes[idx];
        const col = x$1(
          this._barColorLeft,
          { category: this._cats[idx], value: data, idx: idx, data: this._data },
          this._state,
          this
        );
        if (col) node.style.fill = col;
      });

    // Render the bars on the right
    select(node).select('.dvBarsRight')
      .selectAll('rect')
      .data(this._valsRight)
      .join('rect')
      .attr('x', _d => this.chartArea.xScale.right(0))
      .attr('width', d => this.chartArea.xScale.right(d) - this.chartArea.xScale.right(0))
      .attr('y', (_, i) => this.chartArea.yScale(this._cats[i]))
      .attr('height', this.chartArea.yScale.bandwidth())
      .each((data, idx, nodes) => {
        const node = nodes[idx];
        const col = x$1(
          this._barColorRight,
          { category: this._cats[idx], value: data, idx: idx, data: this._data },
          this._state,
          this
        );
        if (col) node.style.fill = col;
      });

    // Render the value labels if they should be shown. They already have been pre-rendered, so we
    // only need to set the correct location and color.
    if (st.values.show) {
      const dy = ((this.chartArea.yScale.bandwidth() - this._style.categories.font.size) / 2) +
            0.9 * this._style.categories.font.size;

      select(node).select('.dvValuesLeft').selectAll('text').data(this._valsLeft).join('text')
        .attr('y', (_, i) => this.chartArea.yScale(this._cats[i]) + dy)
        .each((d, i, nodes) => {
          const n = nodes[i];
          const w = n.getBoundingClientRect().width + 2 * st.values.margin;

          if (st.values.alwaysOutside || w >= (this.chartArea.xScale.left(0) - this.chartArea.xScale.left(d))) {
            n.style.fill = x$1(
              st.values.font.colorOutside,
              { data: d, idx: i, node: nodes[i] },
              this._state,
              this
            );
            n.style.textAnchor = 'end';
            n.setAttribute('x', this.chartArea.xScale.left(d) - st.values.margin);
          } else {
            n.style.fill = x$1(
              st.values.font.colorInside,
              { data: d, idx: i, node: nodes[i] },
              this._state,
              this
            );
            n.style.textAnchor = 'start';
            n.setAttribute('x', this.chartArea.xScale.left(d) + st.values.margin);
          }
        });

      select(node).select('.dvValuesRight').selectAll('text').data(this._valsRight).join('text')
        .attr('y', (_, i) => this.chartArea.yScale(this._cats[i]) + dy)
        .each((d, i, nodes) => {
          const n = nodes[i];
          const w = n.getBoundingClientRect().width + 2 * st.values.margin;

          if (st.values.alwaysOutside || w >= (this.chartArea.xScale.right(d) - this.chartArea.xScale.right(0))) {
            n.style.fill = x$1(st.values.font.colorOutside, { data: d, idx: i, node: nodes[i] }, this._state, this);
            n.style.textAnchor = 'start';
            n.setAttribute('x', this.chartArea.xScale.right(d) + st.values.margin);
          } else {
            n.style.fill = x$1(st.values.font.colorInside, { data: d, idx: i, node: nodes[i] }, this._state, this);
            n.style.textAnchor = 'end';
            n.setAttribute('x', this.chartArea.xScale.right(d) - st.values.margin);
          }
        });
    }

    this.publish('renderDidEnd', { node, state });
  }

  _renderReferenceLines (node, state) {
    const st = this._style;

    const lineLeft = line()
      .x(d => this.chartArea.xScale.left(d))
      .y((_, i) => this.chartArea.yScale(this._cats[i]) + 0.5 * this.chartArea.yScale.bandwidth());

    select(node).select('.dvBars.dvLineLeft')
      .selectAll('path')
      .data([this._refValsLeft])
      .join('path')
      .attr('d', lineLeft)
      .style('stroke', d => {
        return x$1(
          st.referenceLine.left.color,
          { values: d, position: 'left' },
          state,
          this
        )
      })
      .style('stroke-width', d => {
        const w = x$1(
          st.referenceLine.left.width,
          { values: d, position: 'left' },
          state,
          this
        );
        return typeof w === 'number' ? `${w}px` : w
      })
      .style('fill', 'none');

    const lineRight = line()
      .x(d => this.chartArea.xScale.right(d))
      .y((_, i) => this.chartArea.yScale(this._cats[i]) + 0.5 * this.chartArea.yScale.bandwidth());

    select(node).select('.dvBars.dvLineRight')
      .selectAll('path')
      .data([this._refValsRight])
      .join('path')
      .attr('d', lineRight)
      .style('stroke', d => {
        return x$1(
          st.referenceLine.right.color,
          { values: d, position: 'right' },
          state,
          this
        )
      })
      .style('stroke-width', d => {
        const w = x$1(
          st.referenceLine.right.width,
          { values: d, position: 'right' },
          state,
          this
        );
        return typeof w === 'number' ? `${w}px` : w
      })
      .style('fill', 'none');
  }
}

function butterflyChart (config, style) {
  return new ButterflyChart(config, style)
}

var colorNames = {
	aliceblue: [240, 248, 255],
	antiquewhite: [250, 235, 215],
	aqua: [0, 255, 255],
	aquamarine: [127, 255, 212],
	azure: [240, 255, 255],
	beige: [245, 245, 220],
	bisque: [255, 228, 196],
	black: [0, 0, 0],
	blanchedalmond: [255, 235, 205],
	blue: [0, 0, 255],
	blueviolet: [138, 43, 226],
	brown: [165, 42, 42],
	burlywood: [222, 184, 135],
	cadetblue: [95, 158, 160],
	chartreuse: [127, 255, 0],
	chocolate: [210, 105, 30],
	coral: [255, 127, 80],
	cornflowerblue: [100, 149, 237],
	cornsilk: [255, 248, 220],
	crimson: [220, 20, 60],
	cyan: [0, 255, 255],
	darkblue: [0, 0, 139],
	darkcyan: [0, 139, 139],
	darkgoldenrod: [184, 134, 11],
	darkgray: [169, 169, 169],
	darkgreen: [0, 100, 0],
	darkgrey: [169, 169, 169],
	darkkhaki: [189, 183, 107],
	darkmagenta: [139, 0, 139],
	darkolivegreen: [85, 107, 47],
	darkorange: [255, 140, 0],
	darkorchid: [153, 50, 204],
	darkred: [139, 0, 0],
	darksalmon: [233, 150, 122],
	darkseagreen: [143, 188, 143],
	darkslateblue: [72, 61, 139],
	darkslategray: [47, 79, 79],
	darkslategrey: [47, 79, 79],
	darkturquoise: [0, 206, 209],
	darkviolet: [148, 0, 211],
	deeppink: [255, 20, 147],
	deepskyblue: [0, 191, 255],
	dimgray: [105, 105, 105],
	dimgrey: [105, 105, 105],
	dodgerblue: [30, 144, 255],
	firebrick: [178, 34, 34],
	floralwhite: [255, 250, 240],
	forestgreen: [34, 139, 34],
	fuchsia: [255, 0, 255],
	gainsboro: [220, 220, 220],
	ghostwhite: [248, 248, 255],
	gold: [255, 215, 0],
	goldenrod: [218, 165, 32],
	gray: [128, 128, 128],
	green: [0, 128, 0],
	greenyellow: [173, 255, 47],
	grey: [128, 128, 128],
	honeydew: [240, 255, 240],
	hotpink: [255, 105, 180],
	indianred: [205, 92, 92],
	indigo: [75, 0, 130],
	ivory: [255, 255, 240],
	khaki: [240, 230, 140],
	lavender: [230, 230, 250],
	lavenderblush: [255, 240, 245],
	lawngreen: [124, 252, 0],
	lemonchiffon: [255, 250, 205],
	lightblue: [173, 216, 230],
	lightcoral: [240, 128, 128],
	lightcyan: [224, 255, 255],
	lightgoldenrodyellow: [250, 250, 210],
	lightgray: [211, 211, 211],
	lightgreen: [144, 238, 144],
	lightgrey: [211, 211, 211],
	lightpink: [255, 182, 193],
	lightsalmon: [255, 160, 122],
	lightseagreen: [32, 178, 170],
	lightskyblue: [135, 206, 250],
	lightslategray: [119, 136, 153],
	lightslategrey: [119, 136, 153],
	lightsteelblue: [176, 196, 222],
	lightyellow: [255, 255, 224],
	lime: [0, 255, 0],
	limegreen: [50, 205, 50],
	linen: [250, 240, 230],
	magenta: [255, 0, 255],
	maroon: [128, 0, 0],
	mediumaquamarine: [102, 205, 170],
	mediumblue: [0, 0, 205],
	mediumorchid: [186, 85, 211],
	mediumpurple: [147, 112, 219],
	mediumseagreen: [60, 179, 113],
	mediumslateblue: [123, 104, 238],
	mediumspringgreen: [0, 250, 154],
	mediumturquoise: [72, 209, 204],
	mediumvioletred: [199, 21, 133],
	midnightblue: [25, 25, 112],
	mintcream: [245, 255, 250],
	mistyrose: [255, 228, 225],
	moccasin: [255, 228, 181],
	navajowhite: [255, 222, 173],
	navy: [0, 0, 128],
	oldlace: [253, 245, 230],
	olive: [128, 128, 0],
	olivedrab: [107, 142, 35],
	orange: [255, 165, 0],
	orangered: [255, 69, 0],
	orchid: [218, 112, 214],
	palegoldenrod: [238, 232, 170],
	palegreen: [152, 251, 152],
	paleturquoise: [175, 238, 238],
	palevioletred: [219, 112, 147],
	papayawhip: [255, 239, 213],
	peachpuff: [255, 218, 185],
	peru: [205, 133, 63],
	pink: [255, 192, 203],
	plum: [221, 160, 221],
	powderblue: [176, 224, 230],
	purple: [128, 0, 128],
	rebeccapurple: [102, 51, 153],
	red: [255, 0, 0],
	rosybrown: [188, 143, 143],
	royalblue: [65, 105, 225],
	saddlebrown: [139, 69, 19],
	salmon: [250, 128, 114],
	sandybrown: [244, 164, 96],
	seagreen: [46, 139, 87],
	seashell: [255, 245, 238],
	sienna: [160, 82, 45],
	silver: [192, 192, 192],
	skyblue: [135, 206, 235],
	slateblue: [106, 90, 205],
	slategray: [112, 128, 144],
	slategrey: [112, 128, 144],
	snow: [255, 250, 250],
	springgreen: [0, 255, 127],
	steelblue: [70, 130, 180],
	tan: [210, 180, 140],
	teal: [0, 128, 128],
	thistle: [216, 191, 216],
	tomato: [255, 99, 71],
	turquoise: [64, 224, 208],
	violet: [238, 130, 238],
	wheat: [245, 222, 179],
	white: [255, 255, 255],
	whitesmoke: [245, 245, 245],
	yellow: [255, 255, 0],
	yellowgreen: [154, 205, 50]
};

const reverseNames = Object.create(null);

// Create a list of reverse color names
for (const name in colorNames) {
	if (Object.hasOwn(colorNames, name)) {
		reverseNames[colorNames[name]] = name;
	}
}

const cs = {
	to: {},
	get: {},
};

cs.get = function (string) {
	const prefix = string.slice(0, 3).toLowerCase();
	let value;
	let model;
	switch (prefix) {
		case 'hsl': {
			value = cs.get.hsl(string);
			model = 'hsl';
			break;
		}

		case 'hwb': {
			value = cs.get.hwb(string);
			model = 'hwb';
			break;
		}

		default: {
			value = cs.get.rgb(string);
			model = 'rgb';
			break;
		}
	}

	if (!value) {
		return null;
	}

	return {model, value};
};

cs.get.rgb = function (string) {
	if (!string) {
		return null;
	}

	const abbr = /^#([a-f\d]{3,4})$/i;
	const hex = /^#([a-f\d]{6})([a-f\d]{2})?$/i;
	const rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|/]\s*([+-]?[\d.]+)(%?)\s*)?\)$/;
	const per = /^rgba?\(\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[,|/]\s*([+-]?[\d.]+)(%?)\s*)?\)$/;
	const keyword = /^(\w+)$/;

	let rgb = [0, 0, 0, 1];
	let match;
	let i;
	let hexAlpha;

	if (match = string.match(hex)) {
		hexAlpha = match[2];
		match = match[1];

		for (i = 0; i < 3; i++) {
			// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
			const i2 = i * 2;
			rgb[i] = Number.parseInt(match.slice(i2, i2 + 2), 16);
		}

		if (hexAlpha) {
			rgb[3] = Number.parseInt(hexAlpha, 16) / 255;
		}
	} else if (match = string.match(abbr)) {
		match = match[1];
		hexAlpha = match[3];

		for (i = 0; i < 3; i++) {
			rgb[i] = Number.parseInt(match[i] + match[i], 16);
		}

		if (hexAlpha) {
			rgb[3] = Number.parseInt(hexAlpha + hexAlpha, 16) / 255;
		}
	} else if (match = string.match(rgba)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Number.parseInt(match[i + 1], 10);
		}

		if (match[4]) {
			rgb[3] = match[5] ? Number.parseFloat(match[4]) * 0.01 : Number.parseFloat(match[4]);
		}
	} else if (match = string.match(per)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Math.round(Number.parseFloat(match[i + 1]) * 2.55);
		}

		if (match[4]) {
			rgb[3] = match[5] ? Number.parseFloat(match[4]) * 0.01 : Number.parseFloat(match[4]);
		}
	} else if (match = string.match(keyword)) {
		if (match[1] === 'transparent') {
			return [0, 0, 0, 0];
		}

		if (!Object.hasOwn(colorNames, match[1])) {
			return null;
		}

		rgb = colorNames[match[1]];
		rgb[3] = 1;

		return rgb;
	} else {
		return null;
	}

	for (i = 0; i < 3; i++) {
		rgb[i] = clamp(rgb[i], 0, 255);
	}

	rgb[3] = clamp(rgb[3], 0, 1);

	return rgb;
};

cs.get.hsl = function (string) {
	if (!string) {
		return null;
	}

	const hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[,|/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
	const match = string.match(hsl);

	if (match) {
		const alpha = Number.parseFloat(match[4]);
		const h = ((Number.parseFloat(match[1]) % 360) + 360) % 360;
		const s = clamp(Number.parseFloat(match[2]), 0, 100);
		const l = clamp(Number.parseFloat(match[3]), 0, 100);
		const a = clamp(Number.isNaN(alpha) ? 1 : alpha, 0, 1);

		return [h, s, l, a];
	}

	return null;
};

cs.get.hwb = function (string) {
	if (!string) {
		return null;
	}

	const hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d.]+)%\s*,\s*([+-]?[\d.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
	const match = string.match(hwb);

	if (match) {
		const alpha = Number.parseFloat(match[4]);
		const h = ((Number.parseFloat(match[1]) % 360) + 360) % 360;
		const w = clamp(Number.parseFloat(match[2]), 0, 100);
		const b = clamp(Number.parseFloat(match[3]), 0, 100);
		const a = clamp(Number.isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, w, b, a];
	}

	return null;
};

cs.to.hex = function (...rgba) {
	return (
		'#' +
		hexDouble(rgba[0]) +
		hexDouble(rgba[1]) +
		hexDouble(rgba[2]) +
		(rgba[3] < 1
			? (hexDouble(Math.round(rgba[3] * 255)))
			: '')
	);
};

cs.to.rgb = function (...rgba) {
	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
		: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};

cs.to.rgb.percent = function (...rgba) {
	const r = Math.round(rgba[0] / 255 * 100);
	const g = Math.round(rgba[1] / 255 * 100);
	const b = Math.round(rgba[2] / 255 * 100);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
		: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};

cs.to.hsl = function (...hsla) {
	return hsla.length < 4 || hsla[3] === 1
		? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
		: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};

// Hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
cs.to.hwb = function (...hwba) {
	let a = '';
	if (hwba.length >= 4 && hwba[3] !== 1) {
		a = ', ' + hwba[3];
	}

	return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};

cs.to.keyword = function (...rgb) {
	return reverseNames[rgb.slice(0, 3)];
};

// Helpers
function clamp(number_, min, max) {
	return Math.min(Math.max(min, number_), max);
}

function hexDouble(number_) {
	const string_ = Math.round(number_).toString(16).toUpperCase();
	return (string_.length < 2) ? '0' + string_ : string_;
}

class Control extends A {
  renderContent () {
    this.initControl(this.node, this.state);
    this.prerenderControl(this.node, this.state);
    this.renderControl(this.node, this.state);
  }

  updateSize () {
    this.prerenderControl(this.node, this.state);
    this.renderControl(this.node, this.state);
  }

  updateState () {
    this.prerenderControl(this.node, this.state);
    this.renderControl(this.node, this.state);
  }

  updateData () {
    this.prerenderControl(this.node, this.state);
    this.renderControl(this.node, this.state);
  }
}

class Tooltip extends Control {
  constructor (config, style) {
    super(config, style);

    this._anchorPosition = config.anchorPosition || [
      'lefttop', 'leftbottom',
      'centertop', 'centerbottom', 'centerleft', 'centerright',
      'righttop', 'rightbottom'
    ];

    this._position = config.position || (evt => ({ x: evt.clientX, y: evt.clientY }));
    this._text = config.text || null;

    // Keep track of the current anchor position
    this._currentAnchorPosition = 0;

    // Define the margin and padding for the tooltip.
    this.mergeStyle({
      margin: { top: 12, right: 12, bottom: 12, left: 12 },
      padding: { top: 6, right: 6, bottom: 6, left: 6 },
      arrow: { width: 16, height: 10 }
    });
    this.mergeStyle(style);

    // Define the initial viewRect according to the handle and margin settings for the tooltips.
    this.viewRect = new Rect(
      this._style.margin.left + this._style.padding.left,
      this._style.margin.top + this._style.padding.top,
      this._style.margin.left + this._style.padding.left + 12,
      this._style.margin.top + this._style.padding.top + 24
    );

    this.shown = false;

    this._viewPortWarningShown = false;
  }

  anchorPosition (newAnchorPosition) {
    this._anchorPosition = newAnchorPosition;
    return this
  }

  bindTooltip (chart = null, state = null) {
    this.chart = chart;
    this.state = state;
    const self = this;
    const bindFn = function () {};
    bindFn.apply = function (_, args) {
      const selection = args[0];
      self.attach(selection);
    };
    return bindFn
  }

  attach (selection) {
    selection
      .on('mouseenter', this.show.bind(this))
      .on('mousemove', this.move.bind(this))
      .on('mouseout', this.hide.bind(this));

    // Register the index with each element in the selection. This enables us to retrieve the
    // index later when the tooltip gets displayed.
    selection.each((_, idx, elems) => {
      elems[idx].__idx__ = idx;
    });

    // Get the root SVG node. We need it to define the correct position for the interaction layer.
    this._svgNode = parentSelector(selection.node(), 'svg');
  }

  show (e, d) {
    if (this.shown) {
      this.move(e, d);
      return
    }

    // Create the root node for the tooltip. It is a SVG node which is placed at the end of the
    // document.
    this._root = select(document.body).append('svg').attr('class', 'dvTooltip');
    this._root.node().innerHTML = `
      <defs>
        <filter id="shadow">
          <feDropShadow dx="0.2" dy="0.4" stdDeviation="3" flood-opacity="0.4"/>
        </filter>
      </defs>`;

    this._border = this._root.append('g').attr('class', 'dvShape')
      .append('path').style('filter', 'url(#shadow)');

    const contentG = this._root.append('g').attr('class', 'dvContent');

    // Draw the tooltip
    if (this._text) {
      this._renderText(contentG.node(), e, d);
    } else {
      this._renderCustom(contentG.node(), e, d);
    }

    this.shown = true;
  }

  _dataFromEvent (event, userData) {
    const d = {
      value: typeof userData === 'undefined' ? event.target.__data__ : userData,
      idx: event.target.__idx__,
      data: {}
    };
    this.requiredDataSources.forEach(ds => {
      d.data[ds] = this.chart.data(ds);
    });
    return d
  }

  _renderText (node, event, data) {
    // Create a group element where the rendering will happen. This group element is moved to the
    // correct place. Make sure there is only one group element even if multiple rendering happens.
    const g = select(node)
      .selectAll('g').data([0]).join('g')
      .attr('transform', `translate(${this.viewRect.left} ${this.viewRect.top})`);

    // Create the text renderer
    const renderer = new TextRenderer(this._style);

    // Get the text. This can be a static text or a function
    const txt = x$1(
      this._text,
      {
        target: event.target,
        data: this._dataFromEvent(event, data),
        renderer: renderer,
        tooltip: this,
        event: event
      },
      this.state,
      this.chart
    );

    // Render the textnode.querySelector('.ttxt')
    renderer.render(txt, g.node(), {});

    // Adjust the size of the tooltip
    const bbox = g.node().getBoundingClientRect();
    this.viewRect.setWidth(bbox.width);
    this.viewRect.setHeight(bbox.height);
  }

  _renderCustom (node, event, data) {
    const d = this._dataFromEvent(event, data);
    this.publish('init', { node, data: d, event });
    this.publish('prerender', { node, data: d, event });

    // Position the tooltip and draw the border
    this._setPosition(this._position(event));
    this._renderBorder(this._anchorPosition[this._currentAnchorPosition]);

    // Make the final rendering
    this.publish('render', { node, data: d, event });
  }

  move (e, d) {
    this._setPosition(this._position(e));
    this._renderBorder(this._anchorPosition[this._currentAnchorPosition]);

    const contentG = this._root.select('g.dvContent');

    // Draw the tooltip content again
    if (this._text) {
      this._renderText(contentG.node(), e, d);
    } else {
      this._renderCustom(contentG.node(), e, d);
    }
  }

  hide () {
    this.publish('tooltipWillDisappear', { tooltip: this });
    this._root && this._root.remove();
    this.shown = false;
  }

  /**
   * Returns the bounding box of the tooltip. This englobes the border plus the arrow, including
   * the margin (the arrow is placed inside the margin).
   */
  bbox () {
    const s = this._style;
    return {
      left: this.viewRect.left - s.padding.left - s.margin.left,
      right: this.viewRect.right + s.padding.right + s.margin.right,
      top: this.viewRect.top - s.padding.top - s.margin.top,
      bottom: this.viewRect.bottom + s.padding.bottom + s.margin.bottom
    }
  }

  /**
   * Computes the position of the anchor in local coordinates given its position and the current
   * viewRect.
   */
  _anchorCoordinate (pos) {
    const bx = this.bbox();
    const bw2 = (bx.right - bx.left) / 2;
    const bh2 = (bx.bottom - bx.top) / 2;
    const m = this._style.margin;

    // Define a small distance between the tooltip anchor and the mouse cursor to avoid
    // frequent disappearing of the tooltip due to a mouseout event.
    const D = 5;

    return ({
      lefttop: { x: bx.left + m.left - D, y: bx.top - D },
      leftbottom: { x: bx.left + m.left, y: bx.bottom + D },
      centertop: { x: bx.left + bw2, y: bx.top - D },
      centerbottom: { x: bx.left + bw2, y: bx.bottom + D },
      centerleft: { x: bx.left - D, y: bx.top + bh2 },
      centerright: { x: bx.right + D, y: bx.top + bh2 },
      righttop: { x: bx.right - m.right + D, y: bx.top - D },
      rightbottom: { x: bx.right - m.right, y: bx.bottom + D }
    })[pos]
  }

  _setPosition (p) {
    // Try out all available anchor positions until we find one where the tooltip is completely
    // located inside the visible region. If it does not fit at all, the last position will be
    // kept automatically.
    for (let i = 0; i < this._anchorPosition.length; i++) {
      this._setPositionWithAnchor(p, this._anchorCoordinate(this._anchorPosition[i]));
      this._currentAnchorPosition = i;
      // Check if tooltip is inside the viewport, and if so stop
      if (this._isInsideViewport()) {
        return
      }
    }

    if (!this._viewPortWarningShown) {
      console.warn('Tooltip is at least partly outside the view port');
      this._viewPortWarningShown = true;
    }

    // The tooltip does not fit inside the view port. We take the one that has the highest fitting
    // ratio.
    let maxFittingRatio = -Infinity;
    let bestIdx = 0;
    for (let i = 0; i < this._anchorPosition.length; i++) {
      this._setPositionWithAnchor(p, this._anchorCoordinate(this._anchorPosition[i]));
      const r = this._proportionInsideViewport();
      if (r > maxFittingRatio) {
        maxFittingRatio = r;
        bestIdx = i;
      }
    }

    // Set the best anchor position.
    this._setPositionWithAnchor(p, this._anchorCoordinate(this._anchorPosition[bestIdx]));
    this._currentAnchorPosition = bestIdx;
  }

  _setPositionWithAnchor (p, anchorCoord) {
    const bx = this.bbox();

    // Get the scroll position of the window. We need to add these coordinates as we are having
    // absolute coordinates.
    const sx = window.scrollX;
    const sy = window.scrollY;

    this._root
      .style('position', 'absolute')
      .style('left', `${p.x - anchorCoord.x + sx}px`)
      .style('top', `${p.y - anchorCoord.y + sy}px`)
      .attr('width', `${bx.right - bx.left}px`)
      .attr('height', `${bx.bottom - bx.top}px`);
  }

  /**
   * Checks if the tooltip is located entirely inside the current view port.
   */
  _isInsideViewport () {
    const rect = this._root.node().getBoundingClientRect();
    return (
      rect.top >= 0 && rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) - 3
    )
  }

  /**
   * Computes the proportion of the tooltip which is located inside the current view port.
   */
  _proportionInsideViewport () {
    const rect = this._root.node().getBoundingClientRect();
    const vh = (window.innerHeight || document.documentElement.clientHeight);
    const vw = (window.innerWidth || document.documentElement.clientWidth);
    const xIn = Math.min(vw, rect.right) - Math.max(0, rect.left);
    const propX = xIn / rect.width;
    const yIn = Math.min(vh, rect.bottom) - Math.max(0, rect.top);
    const propY = yIn / rect.height;
    return propX * propY
  }

  _renderBorder (pos) {
    const bx = this.bbox();
    const st = this._style;
    const aw = this._style.arrow.width;
    const ah = this._style.arrow.height;

    // Compute the box defining the border
    const br = {
      left: bx.left + st.margin.left,
      right: bx.right - st.margin.right,
      top: bx.top + st.margin.top,
      bottom: bx.bottom - st.margin.bottom
    };

    const w2 = (br.right - br.left) / 2;
    const h2 = (br.bottom - br.top) / 2;

    const path = ({
      lefttop: `M ${br.left} ${br.top - ah} L ${br.left} ${br.bottom} L ${br.right} ${br.bottom} L ${br.right} ${br.top} L ${br.left + (aw / 2)} ${br.top} Z`,
      leftbottom: `M ${br.left} ${br.top} L ${br.left} ${br.bottom + ah} L ${br.left + (aw / 2)} ${br.bottom} L ${br.right} ${br.bottom} L ${br.right} ${br.top} Z`,
      centertop: `M ${br.left} ${br.top} L ${br.left} ${br.bottom} L ${br.right} ${br.bottom} L ${br.right} ${br.top} L ${br.left + w2 + (aw / 2)} ${br.top} L ${br.left + w2} ${br.top - ah} L ${br.left + w2 - (aw / 2)} ${br.top} Z`,
      centerbottom: `M ${br.left} ${br.top} L ${br.left} ${br.bottom} L ${br.left + w2 - (aw / 2)} ${br.bottom} L ${br.left + w2} ${br.bottom + ah} L ${br.left + w2 + (aw / 2)} ${br.bottom} L ${br.right} ${br.bottom} L ${br.right} ${br.top} Z`,
      centerleft: `M ${br.left} ${br.top} L ${br.left} ${br.top + h2 - (aw / 2)} L ${br.left - ah} ${br.top + h2} L ${br.left} ${br.top + h2 + (aw / 2)} L ${br.left} ${br.bottom} L ${br.right} ${br.bottom} L ${br.right} ${br.top} Z`,
      centerright: `M ${br.left} ${br.top} L ${br.left} ${br.bottom} L ${br.right} ${br.bottom} L ${br.right} ${br.top + h2 + (aw / 2)} L ${br.right + ah} ${br.top + h2} L ${br.right} ${br.top + h2 - (aw / 2)} L ${br.right} ${br.top} Z`,
      righttop: `M ${br.left} ${br.top} L ${br.left} ${br.bottom} L ${br.right} ${br.bottom} L ${br.right} ${br.top - ah} L ${br.right - (aw / 2)} ${br.top} Z`,
      rightbottom: `M ${br.left} ${br.top} L ${br.left} ${br.bottom} L ${br.right - (aw / 2)} ${br.bottom} L ${br.right} ${br.bottom + ah} L ${br.right} ${br.top} Z`
    })[pos];

    this._border.attr('d', path);
  }
}

function tooltip (config, style) {
  return new Tooltip(config, style)
}

// Keep the last registered event around. This is needed to provide a valid x and y coordinate
// for events like touchend which do not have any coordinate defined.
let lastEvent = { x: null, y: null };

/**
 * Transforms the DOM Event into an event which has SVG coordinates from the event target node.
 * If the event target is not a SVG element, the original event is returned.
 * @param {DOM Event} evt The DOM event from the browser
 */
function svgEvent (evt) {
  const svg = evt.target.closest('svg');
  if (svg === null) return evt

  const x = evt.x || (evt.touches[0] && evt.touches[0].clientX);
  const y = evt.y || (evt.touches[0] && evt.touches[0].clientY);
  if (x && y) lastEvent = { x: x, y: y };

  const pt = svgPoint(svg, evt.target, lastEvent.x, lastEvent.y);
  return { type: evt.type, target: evt.target, x: pt.x, y: pt.y, event: evt }
}

const defaultLineChartStyle = {
  chartArea: { margin: { top: 0, right: 50, left: 0, bottom: 0 } },
  confidenceInterval: {
    opacity: 0.3,
    color: null,
    customize: (_selection, _state, _chart) => {},
    label: 'Confidence interval',
    showLegend: false // if the confidence interval should be shown in the legend
  },
  dataPoints: {
    show: { default: false, selected: true },
    showLast: { default: true, selected: true },
    size: { default: 7, selected: 7, highlighted: 7 },
    stroke: {
      color: { highlighted: '#ffffff' },
      width: { default: 2, selected: 2, highlighted: 2 }
    },
    fill: { color: { default: '#ffffff' } },
    distanceThreshold: { default: 10, selected: 7 },
    customize: (_selection, _state, _chart) => {}
  },
  dataRect: { padding: { left: 20, right: 20 } },
  grid: {
    horizontal: {
      show: true,
      color: '#ccc',
      width: 1,
      customize: (_selection, _state, _chart) => {}
    },
    vertical: {
      show: false,
      customize: (_selection, _state, _chart) => {}
    }
  },
  labels: {
    /**
     * @style labels.show : Boolean|String = 'default'
     * Defines when the labels on the right of the chart should be displayed.
     * The value can be:
     *  - `true` or `'default'`: the labels are only shown for the selected and highlighted
     *    lines.
     *  - `false` or `'hidden'`: the labels are never shown
     *  - `'always'`: the labels are always shown unless there are overlapping issues
     */
    show: 'default',
    handleOverlappingLabels: false,
    color: null,
    font: { size: 12 },
    customize: (_selection, _state, _chart) => {}
  },
  legend: {
    show: false,
    align: 'left',
    position: 'bottom',
    padding: { top: 15, bottom: 5 }
  },
  line: {
    color: null,
    width: { default: 1, selected: 3 },
    customize: (_selection, _state, _chart) => {},
    class: (_data, _state, _chart) => []
  },
  theme: {
    color: { default: '#8e8e8e', selected: '#0089ce', highlighted: '#0089ce' }
  },
  tooltip: {
    font: { size: 12 },
    maxSnapDistance: 100,
    maxWidth: 300,
    line: { color: null, width: 1 },
    label: {
      color: null,
      font: { size: 16, color: null }
    },
    value: {
      color: null,
      font: { size: 16, color: null }
    },
    // vertical position can be `mouse` or `fixed`
    verticalPosition: 'mouse'
  },
  zoom: {
    max: Infinity,
    min: 1
  }
};

/**
 * @class LineChart
 * @aka dynvis.lineChart
 * @inherits Chart
 *
 * Line chart with potentially several lines, confidence interval, tooltips and zooming.
 */
class LineChart extends Chart {
  constructor (config, style) {
    const options = {
      hasChartArea: true
    };
    super(config, style, options);

    // The categorical legend which is used for confidence intervals.
    this.legend = null;

    // The legend node where the categorical legend is inserted.
    this._legendNode = null;

    // A line chart has by default an x and y axis.
    let xAxisType = config.xAxisType || 'linear';
    if (!['linear', 'ordinal', 'time'].includes(xAxisType)) {
      console.warn(
        `Axis type '${xAxisType}' is not supported. ` +
        "Use 'linear', 'ordinal' or 'time'. Defaulting to 'linear'."
      );
      xAxisType = 'linear';
    }
    this.xAxis({ type: xAxisType });
    this.yAxis({ type: 'linear' });

    this.mergeStyle(defaultLineChartStyle);

    // Apply a loaded default style if it exists.
    this.mergeStyle(Qe.style.lineChart || {});
    this.mergeStyle(style);

    this._chartHeight = (
      config.height ||
      (() => Math.max(300, Math.min(550, document.documentElement.clientHeight - 100)))
    );

    this._labelFn = config.labelFn || (() => null);
    this._values = config.values || (d => d);

    this._xAutoSort = typeof config.xAutoSort === 'undefined' ? true : config.xAutoSort;

    this._xAxisTitle = config.xAxisTitle || '';
    this._yAxisTitle = config.yAxisTitle || '';

    this._xAxisFormat = config.xAxisFormat || (d => d);
    this._yAxisFormat = config.yAxisFormat || (d => d);

    this._xAxisTooltip = (
      config.xAxisTooltip ||
      ((value, d, _state, _chart) => d.xLabel || this._xAxisFormat(value) || null)
    );
    this._yAxisTooltip = (
      config.yAxisTooltip ||
      (d => this._yAxisFormat(d))
    );

    // The x- and y-domains for the line chart. The value can be an array with all values in case
    // of categorical data, or an array with the maximum and minimum values otherwise. It also can
    // be a function which will be executed during rendering. By default, the domains are null,
    // which means the values are computed dynamically based on the available data.
    this._xDomain = config.xDomain || null;
    this._yDomain = config.yDomain || null;

    const rlconf = config.referenceLine || {};
    this._referenceLine = {
      show: rlconf.show || false,
      key: rlconf.key || 'referenceValue',
      fill: typeof rlconf.fill === 'undefined' ? true : rlconf.fill,
      fillColor: rlconf.fillColor || '#ddd',
      strokeWidth: rlconf.strokeWidth || 0.5,
      strokeColor: rlconf.strokeColor || '#f00'
    };

    this._tooltip = null;
    const tc = config.tooltips || {};
    this._tooltipConfig = {
      enabled: typeof tc.enabled === 'undefined' ? true : tc.enabled,
      type: tc.type || 'popup',
      text: tc.text || null
    };

    const zc = config.zoom || {};
    this._zoom = {
      enabled: zc.enabled || false
    };

    // Should we draw a stepped line chart?
    this._stepped = config.stepped || false;
    this._stepType = config.stepType || 'middle';

    // The prepared values are set during pre-rendering of the chart.
    this._vals = null;

    // The current interaction contains a value if there is an interaction going on.
    this._currentInteraction = null;

    this._svg = null;

    // Define the sync functions
    this._syncFn = {
      ...this._syncFn,
      xDomain: this._handleXDomainSync.bind(this)
    };

    // Validate the config options to avoid conflicts
    if (this._zoom.enabled && this.chartArea._xAxis.isCategorical()) {
      console.warn('Zoom function is not available for categorical axis');
      this._zoom.enabled = false;
    }
    // Deactivate the domain snapping which interferes with zooming
    if (this._zoom.enabled) this.chartArea.snapXDomainToTicks = false;
  }

  // The zoom level of the chart is computed based on the original x-domain and the current
  // x-domain. If one of the domains is not set, null is returned.
  zoomLevel () {
    if (!this._origXDomain || !this.chartArea._xDomain) return null
    const origRange = this._origXDomain[1] - this._origXDomain[0];
    const curRange = this.chartArea._xDomain[1] - this.chartArea._xDomain[0];
    return origRange / curRange
  }

  /**
   * Checks in the data if there is a line with confidence interval. This is the case if the data
   * value has a key `confint`. All lines are checked, but only the first data point.
   * Note that the data is only available once prerendering has started.
   * @returns true if one of the lines has a confidence interval, false otherwise
   */
  hasConfidenceInterval () {
    if (!this._data) return false
    return this._vals.map(vals => {
      const ci = vals[0].confidenceInterval;
      return ((typeof ci === 'number' && ci > 0) || (ci && ci.lower && ci.upper))
    }).some(a => a > 0)
  }

  initChart (node, state) {
    super.initChart(node, state);

    node.classList.add('dvLineChart');

    select(node).append('g').attr('class', 'dvLegend');
    select(node).append('g').attr('class', 'dvLinesAlt');
    select(node).append('g').attr('class', 'dvConfInt');
    select(node).append('g').attr('class', 'dvRefLine');
    select(node).append('g').attr('class', 'dvLines');
    select(node).append('g').attr('class', 'dvLinePoints');
    select(node).append('g').attr('class', 'dvLabels');
    select(node).append('g').attr('class', 'dvTooltipBkgd');
    select(node).append('g').attr('class', 'dvTooltip');

    // Interaction groups.
    select(node).append('g').attr('class', 'dvBkgd dvInteraction dvNoprint').append('rect');
    select(node).append('g').attr('class', 'dvLines_hdl dvHdl dvNoprint');
    select(node).select('.dvBkgd.dvInteraction').append('g').attr('class', 'dvBrush dvNoprint');

    // Create the tooltips if required
    if (this._tooltipConfig.enabled && this._tooltipConfig.type === 'popup') {
      this._tooltip = new Tooltip(
        { anchorPosition: ['centerleft'] },
        {}
      );
      this._tooltip.subscribe('init', this._initPopupTooltip.bind(this));
      this._tooltip.subscribe('prerender', this._prerenderPopupTooltip.bind(this));
      this._tooltip.subscribe('render', this._renderPopupTooltip.bind(this));
    }

    // Add clipping path for the confidence interval. At this stage we do not know if there will be
    // a clipping path or not. We insert an empty path.
    this._confIntClip = select(this.defs()).append('clipPath').attr('id', `clipAlt_${this.id}`);

    // Define the properties for the ChartArea
    this.chartArea.xGrid(this._style.grid.vertical);
    this.chartArea.yGrid(this._style.grid.horizontal);

    // Define the x- and y-axis value format
    this.chartArea.style.xAxis.format = this._xAxisFormat;
    this.chartArea.style.yAxis.format = this._yAxisFormat;

    // Set the padding for the data rect
    this.chartArea.style.dataRect.padding.left = this._style.dataRect.padding.left;
    this.chartArea.style.dataRect.padding.right = this._style.dataRect.padding.right;

    if (this._zoom.enabled) this._insertZoomControls();

    // Attach an event listener for the window blur event to hide a tooltip when the window loses
    // its focus.
    select(window).on('blur', () => {
      this._removeTooltip();
    });
  }

  prerenderChart (node, state) {
    this.publish('prerenderWillStart', { node, state });
    super.prerenderChart(node, state);

    const st = this._style;

    // Get the transformed data and add an index to each series (line).
    const d = {};
    this.requiredDataSources.forEach(ds => {
      d[ds] = this.data(ds);
    });
    this._data = this.dataExtractor ? this.dataExtractor(d, this.state, this) : d;

    // Build the sequence of x values for all data series. This is used for sorting the values
    // properly with categorical axis. We create a sequence of unique values which we populate
    // by iterating over all series and values.
    const xseq = new UniqueSequence();

    this._data.forEach((series, idx) => {
      series.idx = idx;
      series.sortedValues = this._values(series, state);
      series.sortedValues.forEach((d, i) => {
        d.obj = series;
        d.data = series.sortedValues;
        d.valueIdx = i;
      });
      xseq.update(series.sortedValues.map(v => v.x));
    });

    // Get the sequence and add a sort index to each data point
    const xseqValues = xseq.sequence();
    this._data.forEach((series, _idx) => {
      series.sortedValues.forEach((d, _i) => {
        d.sortIdx = xseqValues.indexOf(d.x);
      });

      if (this._xAutoSort) {
        if (this.chartArea._xAxis.isCategorical()) {
          series.sortedValues.sort((a, b) => a.sortIdx - b.sortIdx);
        } else {
          series.sortedValues.sort((a, b) => {
            if (a.x > b.x) return 1
            if (a.x < b.x) return -1
            return 0
          });
        }
      }
      this._flagLonelyPoints(series.sortedValues);
    });

    // Filter the data values to display only series with at least one value.
    this._filteredData = this._data.filter(d => !d.sortedValues.every(v => v.y === null));

    // Sort the data values to show the highlighted lines on top
    this._filteredData.forEach((d, i) => {
      const c = this._style.line.class(d, this.state, this);
      if (c.dvHighlighted === true) {
        d.__sortIdx__ = 2 * this._filteredData.length + i;
        return
      }
      if (c.dvSelected === true) {
        d.__sortIdx__ = this._filteredData.length + i;
        return
      }
      d.__sortIdx__ = i;
    });

    this._filteredData.sort((a, b) => a.__sortIdx__ - b.__sortIdx__);

    // Extract the values from the series
    this._vals = this._filteredData.map(series => series.sortedValues);

    // Create the legend if we need one and we don't have one. The legend can be shown if there is
    // a confidence interval, or for the line labels. There are two flags in the style options for
    // activating the legend, one is `confidenceInterval.showLegend`, and the other one
    // `legend.show`. If one of them is true, the legend is shown.
    const hasConfInt = this.hasConfidenceInterval();
    const showConfIntLegend = x$1(st.confidenceInterval.showLegend,
      { value: this._vals },
      state,
      this
    );

    const showLegend = x$1(st.legend.show,
      {
        value: this._vals,
        data: this._data,
        filteredData: this._filteredData
      },
      state,
      this
    );

    if (this.legend === null) {
      this._legendNode = node.querySelector('g.dvLegend');

      const legendCategories = [];
      const legendColors = [];
      const legendBoxes = [];

      // Check if line labels should be shown in the legend
      if (showLegend) {
        const lineColorFn = this._prop(st.line.color, st.theme.color);
        legendColors.push(...this._filteredData.map((d, i) => lineColorFn(d, i, null)));

        const lineWidthFn = this._prop(st.line.width, { default: 1, selected: 3 });
        const lineWidths = this._filteredData.map((d, i) => lineWidthFn(d, i, null));

        legendBoxes.push(...this._filteredData.map((_, i) => {
          return {
            width: 15,
            height: 15,
            bottom: 0,
            shape: 'line',
            lineWidth: lineWidths[i],
            padding: { bottom: 3 }
          }
        }));

        legendCategories.push(...this._filteredData.map(d => {
          return this._labelFn(d, this.state, this) || d.label || d.key || d.name || ''
        }));
      }

      if (hasConfInt && showConfIntLegend) {
        // The confidence interval is shown in the legend as a single entry without any shape or
        // color (shape = null). We still need to provide a color.

        // The confidence interval label
        legendCategories.push(
          this._(st.confidenceInterval.label, { data: this._data }, state, this)
        );

        legendBoxes.push({
          width: -7,
          height: 15,
          bottom: 0,
          shape: null,
          padding: { bottom: 3 }
        });

        // Add a color
        const confIntColorsFn = this._prop(st.confidenceInterval.color, st.theme.color);
        const confIntColors = this._filteredData.map((d, i) => confIntColorsFn(d, i, null));
        legendColors.push(confIntColors.length > 0 ? confIntColors[0] : '#fff');
      }

      this.legend = new CategoricalLegend(
        {
          categories: legendCategories,
          colors: legendColors,
          boxes: legendBoxes
        },
        {
          align: st.legend.align,
          padding: { bottom: 0 }
        }
      );

      this.legend.initLegend(this._legendNode, state);
    }

    // Prerender the legend and get its height. Prerendering happens always at the top.
    if ((hasConfInt && showConfIntLegend) || showLegend) {
      this.legend.maxViewRect = new Rect(0, 0, this.width, null);
      this.legend.prerenderLegend(this._legendNode, state);

      // Adapt the chart area margin to fit the legend
      const lpd = st.legend.position === 'bottom' ? st.legend.padding.top : st.legend.padding.bottom;
      if (st.legend.position === 'top') {
        st.chartArea.margin.top = this.height + lpd;
      } else {
        st.chartArea.margin.bottom = this.legend.height + lpd;
      }
    } else {
      this.legend.height = 0;
      st.chartArea.margin.top = 0;
      st.chartArea.margin.bottom = 0;
    }

    this.height = (
      typeof this._chartHeight === 'function' ? this._chartHeight(state, this) : this._chartHeight
    );

    // Define the x- and y-axis labels
    this.chartArea._xAxisLabel = x$1(this._xAxisTitle, state, this);
    this.chartArea._yAxisLabel = x$1(this._yAxisTitle, state, this);

    const xvals = this._vals.flat().map(d => d.x);

    // Define the x-domain for the chart area. If the chart is zoomable, there can be a default
    // x-domain which needs to be respected.
    this._origXDomain = this._computeXDomain();
    if (this._zoom.enabled && this._zoom.xDomain && this._zoom.xDomain.default) {
      // A default x-domain has been set
      const defaultXDomain = x$1(
        this._zoom.xDomain.default,
        {
          data: this._vals,
          values: xvals,
          minValue: min(xvals),
          maxValue: max(xvals)
        },
        this.state,
        this
      );
      this.chartArea.xDomain(defaultXDomain);
    } else if (this._zoom.enabled && this._zoom.zoom && this._zoom.zoom.default) {
      // A default zoom level has been set. Convert it to a domain by adjusting the min value.
      let z = x$1(
        this._zoom.zoom.default,
        {
          data: this._vals,
          values: xvals,
          minValue: min(xvals),
          maxValue: max(xvals)
        },
        this.state,
        this
      );

      if (z < 1) z = 1;
      if (z > this._zoom.zoom.max) z = this._zoom.zoom.max;
      const xd = this._origXDomain;
      this.chartArea.xDomain([xd[1] - ((xd[1] - xd[0]) / z), xd[1]]);
    } else {
      this.chartArea.xDomain(this._origXDomain);
    }

    // Define the y-domain. It is never zoomable.
    this.chartArea.yDomain(this._computeYDomain());

    // Insert a minimum top padding to make sure the lines are completely visible
    this.chartArea.style.dataRect.padding.top = Math.max(
      this.chartArea.style.dataRect.padding.top || 0,
      10
    );

    // Set the data values for the chart area, for tick snapping
    this.chartArea._xValues = xvals;
    this.chartArea._yValues = this._vals.flat().map(v => v.y);

    this.publish('prerenderDidEnd', { node, state });
  }

  renderChart (node, state) {
    this.publish('renderWillStart', { node, state });

    super.renderChart(node, state);
    const st = this._style;

    // Should the legend be shown?
    const hasConfInt = this.hasConfidenceInterval();
    const showConfIntLegend = x$1(st.confidenceInterval.showLegend,
      { value: this._vals },
      state,
      this
    );
    const showLegend = x$1(st.legend.show,
      {
        value: this._vals,
        data: this._data,
        filteredData: this._filteredData
      },
      state,
      this
    );

    // Shift the legend down if necessary and run the rendering process
    if ((hasConfInt && showConfIntLegend) || showLegend) {
      select(node).select('.dvLegend').style('display', null);
      if (st.legend.position === 'bottom') {
        node.querySelector('.dvLegend').setAttribute(
          'transform',
          `translate(0 ${this.chartArea.viewRect.height() + st.legend.padding.top})`
        );
      }
      this.legend.renderLegend(this._legendNode, state);
    } else {
      // Hide legend.
      select(node).select('.dvLegend').style('display', 'none');
    }

    // Define the line to be drawn.
    this._line = line()
      .x(d => this.chartArea.xScale(d.x))
      .y(d => this.chartArea.yScale(d.y))
      .defined(d => d.x !== null && d.y != null);

    const ctypes = { middle: curveStep, before: stepBefore, after: stepAfter };
    if (this._stepped) this._line.curve(ctypes[this._stepType] || curveStep);

    // Define the confidence interval area to be drawn.
    this._confInt = area()
      .x(d => this.chartArea.xScale(d.x))
      .y0(d => this.chartArea.yScale(d.y - this._ciLower(d)))
      .y1(d => this.chartArea.yScale(d.y + this._ciUpper(d)))
      .defined(d => d.x !== null && d.y !== null && d.confidenceInterval);

    // Define the reference line / area to be drawn
    if (this._referenceLine.show) {
      const k = this._referenceLine.key;
      this._refLine = line()
        .x(d => this.chartArea.xScale(d.x))
        .y(d => this.chartArea.yScale(d[k]))
        .defined(d => d.x !== null && d[k] != null);

      this._refLineArea = area()
        .x(d => this.chartArea.xScale(d.x))
        .y0(d => this.chartArea.yScale(d[k]))
        .y1(d => this.chartArea.yScale(d.y))
        .defined(d => d.x !== null && d.y !== null && d[k] !== null);

      if (this._stepped) {
        this._refLine.curve(ctypes[this._stepType] || curveStep);
        this._refLineArea.curve(ctypes[this._stepType] || curveStep);
      }
    }

    // If there is a tooltip currently shown, hide it.
    if (this._tooltip && this._tooltip.shown) this._removeTooltip();

    // Render the line chart.
    this._renderConfidenceInterval();
    this._renderReferenceLine();
    this._renderLines();
    this._renderDataPoints();
    this._renderLabels();
    this._renderInteractionHandles();

    if (this._zoom.enabled) this._makeZoomable();

    this.publish('renderDidEnd', { node, state });
  }

  _renderConfidenceInterval () {
    const st = this._style;

    select(this._node).select('g.dvConfInt')
      .selectAll('path')
      .data(this._filteredData)
      .join('path')
      .attr('d', d => this._confInt(d.sortedValues))
      .classed('dvSelected', d => d.selected)
      .attr('fill', this._prop(
        this._style.confidenceInterval.color,
        this._style.theme.color,
        (fill, d, _state, _chart) => {
          // The opacity is computed directly here as we need a completely opaque surface.
          const opacity = this._prop(
            this._style.confidenceInterval.opacity, 0.3
          )(d.data, d.idx, d.nodes);
          const rgb = cs.get.rgb(fill).map(v => 255 - (255 - v) * opacity).join(',');
          return `rgb(${rgb})`
        }
      ))
      .call(sel => {
        this._style.confidenceInterval.customize(sel, this.state, this);
      });

    // Confidence interval for lonely points
    select(this._node).select('g.dvConfInt')
      .selectAll('g')
      .data(this._filteredData)
      .join('g')
      .style('stroke', this._prop(st.confidenceInterval.color, st.theme.color))
      .selectAll('line')
      .data(series => series.sortedValues.filter(d => d.isLonely && d.confidenceInterval))
      .join('line')
      .attr('x1', d => this.chartArea.xScale(d.x))
      .attr('x2', d => this.chartArea.xScale(d.x))
      .attr('y1', d => this.chartArea.yScale(d.y - this._ciLower(d)))
      .attr('y2', d => this.chartArea.yScale(d.y + this._ciUpper(d)))
      .style('stroke-width', 15)
      .style('stroke-opacity', this._prop(st.confidenceInterval.opacity, 0.3))
      .style('fill', 'none');

    // Define the clipping path for the confidence interval
    this._confIntClip.selectAll('path').data(this._filteredData)
      .join('path').attr('d', d => this._confInt(d.sortedValues));
  }

  _renderReferenceLine () {
    if (this._referenceLine.show !== true) return

    if (this._referenceLine.fill) {
      select(this._node).select('g.dvRefLine')
        .selectAll('path.dvRefFill')
        .data(this._filteredData)
        .join('path')
        .attr('class', 'dvRefFill')
        .attr('clip-path', `url(#clip_${this.id})`)
        .attr('d', d => {
          return this._refLineArea(d.sortedValues)
        })
        .style('stroke', 'none')
        .style('stroke-width', 0)
        .style('fill', this._referenceLine.fillColor);
    }

    if (this._referenceLine.strokeWidth > 0) {
      select(this._node).select('g.dvRefLine')
        .selectAll('path.dvRefStroke')
        .data(this._filteredData)
        .join('path')
        .attr('class', 'dvRefStroke')
        .attr('clip-path', `url(#clip_${this.id})`)
        .attr('d', d => {
          return this._refLine(d.sortedValues)
        })
        .style('stroke', this._referenceLine.strokeColor)
        .style('stroke-width', this._referenceLine.strokeWidth);
    }
  }

  _renderLines () {
    const st = this._style;

    select(this._node).select('g.dvLines')
      .selectAll('path')
      .data(this._filteredData)
      .join('path')
      .attr('d', d => this._line(d.sortedValues))
      .classed('dvSelected', d => d.selected)
      .attr('clip-path', `url(#clipAlt_${this.id})`)
      .call(this._lineClassNames.bind(this))
      .style('stroke', this._prop(st.line.color, st.theme.color))
      .style('stroke-width', this._prop(st.line.width, { default: 1, selected: 3 }))
      .style('fill', 'none')
      .call(sel => {
        this._style.line.customize(sel, this.state, this);
      });

    // Render the line with the confidence interval clipping path set.
    // This allows for dual-color lines.
    select(this._node).select('g.dvLinesAlt')
      .selectAll('path')
      .data(this._filteredData)
      .join('path')
      .attr('d', d => this._line(d.sortedValues))
      .classed('dvSelected', d => d.selected)
      .classed('dvAlt', true)
      .call(this._lineClassNames.bind(this))
      .style('stroke', this._prop(st.line.color, st.theme.color))
      .style('stroke-width', this._prop(st.line.width, { default: 1, selected: 3 }))
      .style('fill', 'none')
      .call(sel => {
        this._style.line.customize(sel, this.state, this);
      });
  }

  _renderDataPoints () {
    const st = this._style;
    if (st.dataPoints.show === false) return

    const ca = this.chartArea;

    // Compute the minimum distance between two data points. It should be more than the distance
    // threshold in the dataPoint style.
    const dist = Math.min(...this._vals.map(v => {
      const c = v.map(v => ({
        x: this.chartArea.xScale(v.x), y: this.chartArea.yScale(+v.y + (+v.yref || 0))
      }));
      let dist = Infinity;
      for (let i = 1; i < c.length; i++) {
        if (c[i].x && c[i].y && c[i - 1].x && c[i - 1].y) {
          dist = Math.min(dist, Math.pow(c[i].x - c[i - 1].x, 2) + Math.pow(c[i].y - c[i - 1].y, 2));
        }
      }
      return dist
    }));

    select(this._node).select('g.dvLinePoints')
      .selectAll('g')
      .data(this._filteredData)
      .join('g')
      .classed('dvSelected', d => d.selected)
      .call(sel => {
        sel.each((d, idx, nodes) => {
          const showDataPoints = this._prop(st.dataPoints.show, false)(d, idx, nodes);
          if (!showDataPoints) {
            nodes[idx].classList.remove('dvVisible');
            return
          }

          const distThresh = this._prop(st.dataPoints.distanceThreshold, 10)(d, idx, nodes);
          if (dist < Math.pow(distThresh, 2)) {
            nodes[idx].classList.add('dvPointsTooClose');
            nodes[idx].classList.remove('dvVisible');
          } else {
            nodes[idx].classList.remove('dvPointsTooClose');
            nodes[idx].classList.add('dvVisible');
          }
        });
      })
      .call(this._lineClassNames.bind(this))
      .selectAll('circle')
      .data(d => d.sortedValues)
      .join('circle')
      .classed('dvHighlighted', (d, i, nodes) => {
        return nodes[i].parentNode.classList.contains('dvHighlighted')
      })
      .classed(
        'dvAlt',
        d => d.confidenceInterval && (d.confidenceInterval.lower < 0 || d.confidenceInterval.upper < 0)
      )
      .classed('dvHidden', d => d.y === null)
      .classed('dvVisible', (d, i, nodes) => {
        // If it is a lonely point, it should always been shown
        if (d.isLonely) return true

        // If the last data point should be shown, and this is the last point, return true
        if (i === nodes.length - 1) {
          return this._prop(st.dataPoints.showLast, true)(d, i, nodes)
        }

        return false
      })
      .attr('cx', d => ca.xScale(d.x) + (ca.xScale.type === 'band' ? ca.xScale.bandwidth() / 2 : 0))
      .attr('cy', d => ca.yScale(+d.y + (+d.yref || 0)))
      .attr('r', this._prop(st.dataPoints.size, 14, d => d / 2))
      .style('stroke', this._prop(st.dataPoints.stroke.color, st.theme.color))
      .style('stroke-width', this._prop(st.dataPoints.stroke.width, 2))
      .style('fill', this._prop(st.dataPoints.fill.color, '#ffffff'))
      .call(sel => {
        st.dataPoints.customize(sel, this.state, this);
      });
  }

  _flagLonelyPoints (values) {
    const n = values.length;
    values.forEach((v, i) => {
      v.isLonely = false;

      // If v is anyway null we consider is as not being lonely
      if (v.y === null) return

      // If v is the only point, it is lonely.
      if (n === 1) {
        v.isLonely = true;
        return
      }

      // If v is a point somewhere in the middle and both sides are null, it is lonely.
      if (i > 0 && i < n - 1 && values[i - 1].y === null && values[i + 1].y === null) {
        v.isLonely = true;
        return
      }

      // If v is the first point and the second is null, then v is lonely.
      if (i === 0 && values[i + 1].y === null) {
        v.isLonely = true;
        return
      }

      // If v is the last point and the second last is null, then v is lonely.
      if (i === n - 1 && values[i - 1].y === null) {
        v.isLonely = true;
      }
    });
  }

  _renderLabels () {
    const st = this._style;

    if (st.labels.show === false || st.labels.show === 'hidden') return

    const ca = this.chartArea;

    // Remove all classes which are used for displaying the labels.
    select(this._node).select('g.dvLabels')
      .selectAll('text')
      .classed('dvHidden', false);

    select(this._node).select('g.dvLabels')
      .selectAll('text')
      .data(this._filteredData)
      .join('text')
      .text(d => this._labelFn(d, this.state, this) || d.label || d.key || d.name || '')
      .attr('x', _d => ca.dataRect.right + 5)
      .attr('y', d => {
        const v = d.sortedValues;
        // Get the current domain with respect to the current zoom
        const xdomain = ca.xScale.domain();
        const maxDt = xdomain[xdomain.length - 1];
        const vv = lastValidValue(v.filter(v => v.x <= maxDt), v => v.x !== null && v.y !== null);
        return ca.yScale(+vv.y + (+vv.yref || 0)) + ((st.labels.font.size) / 2 - 2)
      })
      .style('font-size', `${st.labels.font.size}px`)
      .classed('dvSelected', d => d.selected)
      .classed('dvShow', st.labels.show === 'always')
      .call(this._lineClassNames.bind(this))
      .attr('fill', this._prop(st.labels.color, st.theme.color))
      .call(sel => {
        st.labels.customize(sel, this.state, this);
      })
      .call(sel => {
        sel.nodes().forEach(node => {
          textWrap(
            node,
            this.width - ca.dataRect.right - 9,
            st.labels.font.size * 1.2
          );
        });
      });

    if (st.labels.show === 'always') {
      this._handleOverlappingLabels();
    } else {
      // Make sure selected labels are displayed and other overlapping labels are hidden.
      const selLabel = select(this._node).select('g.dvLabels text.dvSelected').node();
      if (selLabel) {
        const labelRect = selLabel.getBoundingClientRect();
        select(this._node).selectAll('g.dvLabels text').nodes().forEach(elem => {
          if (
            !elem.classList.contains('dvSelected') &&
            rectanglesIntersect(labelRect, elem.getBoundingClientRect())
          ) {
            elem.classList.add('dvHidden');
          }
        });
      }

      // Check if we should still handle overlapping labels
      if (st.labels.handleOverlappingLabels) this._handleOverlappingLabels();
    }
  }

  _handleOverlappingLabels () {
    const st = this._style;

    // Handle overlapping labels. To do this we collect the bounding box of every label and check if
    // there are overlaps. If so, we run a force-based simulation to try to remove the overlap if
    // possible.

    // Remove first the translation of the text nodes. Otherwise the bounding box computation will
    // be wrong.
    select(this._node).select('g.dvLabels')
      .selectAll('text')
      .attr('transform', 'translate(0 0)');

    // Compute the label bounding boxes of visible labels.
    // The visibility filter is is done using the style parameters and CSS classes only.
    // There is no check if the label is effectively displayed by overriding a CSS class.
    const labelRects = select(this._node)
      .selectAll('g.dvLabels text')
      .nodes()
      .map((el, idx) => ({
        node: el,
        idx: idx,
        bbox: el.getBoundingClientRect(),
        selected: el.classList.contains('dvSelected'),
        highlighted: el.classList.contains('dvHighlighted')
      }))
      .filter(el => {
        return (
          st.labels.show === 'always' ||
          (
            st.labels.show !== 'never' &&
            (el.node.classList.contains('dvSelected') || el.node.classList.contains('dvHighlighted'))
          )
        )
      });

    const labelRectsObj = {};
    labelRects.forEach(v => {
      labelRectsObj[v.idx] = v;
    });

    // Check if there are any intersecting labels. If not, we don't need to run the simulation.
    if (!rectanglesIntersectAny(labelRects.map(r => r.bbox))) return

    // Remove the overlap between the rectangles by vertically move the rectangles up to a maximum
    // distance, and with a minimum distance between the rectangles if possible.
    const movedLabelRects = layoutRectsVertically(labelRects.map(r => r.bbox), 20, 5);

    // Store the moved label rects with the original one.
    movedLabelRects.forEach(r => {
      labelRects[r.idx].movedBBox = r;
    });

    // Move the label to its new position.
    select(this._node).select('g.dvLabels')
      .selectAll('text')
      .each((_, idx, nodes) => {
        const lr = labelRectsObj[idx];
        if (!lr) return
        const dy = lr.movedBBox.y - lr.bbox.top;
        nodes[idx].setAttribute('transform', `translate(0 ${dy})`);
      });
  }

  _renderInteractionHandles () {
    select(this._node).select('g.dvLines_hdl')
      .selectAll('path')
      .data(this._filteredData)
      .join('path')
      .attr('d', d => this._line(d.sortedValues))
      .on('mouseover', this._selectLine.bind(this))
      .on('mouseout', this._deselectLine.bind(this))
      .on('mousemove', this._handleBackgroundMousemove.bind(this))
      .on('click', this._selectLine.bind(this))
      .style('fill', 'none');

    // Add the lonely point as additional interaction handles
    select(this._node).select('g.dvLines_hdl')
      .selectAll('g')
      .data(this._filteredData)
      .join('g')
      .on('mouseover', this._selectLine.bind(this))
      .on('mouseout', this._deselectLine.bind(this))
      .on('mousemove', this._handleBackgroundMousemove.bind(this))
      .on('click', this._selectLine.bind(this))
      .selectAll('circle')
      .data(series => {
        const pts = series.sortedValues.filter(d => d.isLonely);
        return pts
      })
      .join('circle')
      .attr('cx', d => this.chartArea.xScale(d.x))
      .attr('cy', d => this.chartArea.yScale(d.y))
      .attr('r', 7);

    select(this._node).select('.dvBkgd.dvInteraction rect')
      .attr('x', this.chartArea.dataRect.left)
      .attr('y', this.chartArea.dataRect.top)
      .attr('width', this.chartArea.dataRect.width())
      .attr('height', this.chartArea.dataRect.height());

    select(this._node).select('.dvBkgd.dvInteraction')
      .on('mousemove', this._handleBackgroundMousemove.bind(this))
      .on('touchmove', this._handleBackgroundMousemove.bind(this))
      .on('mouseleave', () => {
        this._removeTooltip();
        this._tooltip && this._tooltip.hide();
      })
      .on('click', this._handleBackgroundClick.bind(this));
  }

  _renderTooltip (x, y) {
    if (this._tooltipConfig.type === 'inline' && !this._selection) {
      this._removeTooltip();
      return
    }

    const st = this._style;

    // Get the closest data point based on the x position.
    const dataValues = this._tooltipConfig.type === 'inline'
      ? this._selection.sortedValues.map(d => d.x)
      : this._filteredData.map(d => d.sortedValues.map(d => d.x)).flat();
    const valueX = this._snapX(x, dataValues);
    if (valueX === null) {
      this._removeTooltip();
      return
    }

    // Get the lines which have a data point at position valueX.
    const selection = this._tooltipConfig.type === 'inline'
      ? [this._selection]
      : this._filteredData.filter(d => d.sortedValues.filter(d => d.x.toString() === valueX.toString()).length > 0);

    const ca = this.chartArea;
    const xpos = ca.xScale(valueX) + (ca.xScale.type === 'band' ? ca.xScale.bandwidth() / 2 : 0);
    const values = selection.map(d => this._valueAtX(d, valueX)).filter(d => d !== null);

    // Check if all values are null. If so, we don't display a tooltip.
    const allMissing = values.every(d => d.y === null);
    if (allMissing) {
      this._removeTooltip();
      return
    }

    select(this._node).select('.dvTooltip')
      .selectAll('line')
      .data([this._tooltipConfig.type === 'inline' ? this._selection : 1])
      .join('line')
      .attr('class', 'dvSelected')
      .classed('dvAlt', (d, idx) => values[idx].confidenceInterval && (values[idx].confidenceInterval.lower < 0 || values[idx].confidenceInterval.upper < 0))
      .attr('x1', xpos)
      .attr(
        'y1',
        this._tooltipConfig.type === 'inline' ? ca.yScale(+values[0].y + (+values[0].yref || 0)) : ca.dataRect.top
      )
      .attr('x2', xpos)
      .attr('y2', this._tooltipConfig.type === 'inline' && values[0].yref ? ca.yScale(values[0].yref || 0) : ca.dataRect.bottom + 3)
      .call(this._lineClassNames.bind(this))
      .style('stroke', this._prop(st.tooltip.line.color, st.theme.color, v => v === null ? '#8e8e8e' : v))
      .style('stroke-width', this._prop(st.tooltip.line.width, 1));

    select(this._node).select('.dvTooltip')
      .selectAll('circle')
      .data(selection)
      .join('circle')
      .attr('class', 'dvSelected')
      .classed('dvAlt', (_d, idx) => values[idx].confidenceInterval && (values[idx].confidenceInterval.lower < 0 || values[idx].confidenceInterval.upper < 0))
      .attr('cx', xpos)
      .attr('cy', (_d, idx) => ca.yScale(+values[idx].y + (+values[idx].yref || 0)))
      .attr('r', this._prop(st.dataPoints.size, 7, v => (v + 3) / 2))
      .call(this._lineClassNames.bind(this))
      .style('fill', this._prop(st.dataPoints.fill.color, st.theme.color));

    if (this._tooltipConfig.type === 'inline') {
      this._renderInlineTooltipLabel(x, xpos, values[0]);
    } else {
      this._renderPopupTooltipLabel(x, xpos, y, values);
    }
  }

  _renderPopupTooltipLabel (_x, xpos, y, selection) {
    // We place the popup label in the middle of the background rect for the y coordinate.
    // To get this value, get the position of the interaction rect.
    const bkgdRect = select(this._node).select('.dvBkgd.dvInteraction rect')
      .node().getBoundingClientRect();

    this._tooltip.hide();
    this._tooltip.anchorPosition(['centerleft', 'centerright']);

    // The popup tooltip lives in another SVG element and therefore any transforms in parent
    // elements of the current chart need to be converted into window coordinates. This is for
    // example the case if the chart is on the right side in a flex box, see i.e. example 34.
    this._svg = this._svg || this._node.closest('svg');
    const svgPt = this._svg.createSVGPoint();
    svgPt.x = xpos;
    svgPt.y = this._style.tooltip.verticalPosition === 'mouse' ? y : bkgdRect.height / 2;
    const pt = svgPt.matrixTransform(this._node.getScreenCTM());

    // Sort the selection according to the y value
    selection.forEach((v, i) => {
      v.yIdx = i;
    });
    selection.sort((a, b) => a.y < b.y);

    this._tooltip.show({ clientX: pt.x, clientY: pt.y, target: { __data__: selection } });
  }

  _renderInlineTooltipLabel (_x, xpos, value) {
    const st = this._style;

    // Axis label and background
    select(this._node).select('.dvTooltip')
      .selectAll('text.dvXAxisTitle')
      .data([this._selection])
      .join('text')
      .attr('class', 'dvXAxisTitle dvSelected')
      .classed('dvAlt', (_d, _idx) => value.confidenceInterval && (value.confidenceInterval.lower < 0 || value.confidenceInterval.upper < 0))
      .attr('x', xpos)
      .attr('y', this.chartArea.dataRect.bottom + this.chartArea._xAxis.style.values.font.size + 4)
      .style('font-size', `${st.tooltip.font.size}px`)
      .text(this._xAxisTooltip(value.x, value, this.state, this))
      .call(this._lineClassNames.bind(this))
      .style('fill', this._prop(st.tooltip.label.font.color, st.theme.color));

    const labelRect = select(this._node).select('.dvTooltip text.dvXAxisTitle')
      .node().getBoundingClientRect();

    select(this._node).select('.dvTooltipBkgd')
      .selectAll('rect.dvXAxisRect')
      .data([this._selection])
      .join('rect')
      .attr('class', 'dvXAxisRect')
      .attr('x', this.chartArea.xScale(value.x) - (labelRect.width / 2) - 3)
      .attr('y', this.chartArea.dataRect.bottom + 3)
      .attr('width', labelRect.width + 6)
      .attr('height', labelRect.height + 2);

    // Value label
    const tooltipYPos = () => {
      if (typeof value.yref === 'number') {
        // Compute the height of the tooltip line
        const ys = this.chartArea.yScale;
        const y0 = ys(+value.y + (+value.yref || 0));
        const y1 = ys(value.yref || 0);
        const h = y1 - y0;
        if (h > 2 * st.tooltip.font.size) {
          return (y1 + y0) / 2 + 0.5 * st.tooltip.font.size
        }
      }
      return this.chartArea.yScale(+value.y + (+value.yref || 0)) - 10
    };

    select(this._node).select('.dvTooltip')
      .selectAll('text.dvValueHalo')
      .data([this._selection])
      .join('text')
      .attr('class', 'dvValueHalo')
      .attr('x', this.chartArea.xScale(value.x))
      .attr('y', tooltipYPos())
      .style('font-size', `${this._style.tooltip.font.size}px`)
      .style('fill', '#ffffffaa')
      .style('stroke', '#ffffffaa')
      .style('stroke-width', 7)
      .style('stroke-linejoin', 'round')
      .text(this._yAxisTooltip(value.y, value, this.state, this))
      .call(this._lineClassNames.bind(this));

    select(this._node).select('.dvTooltip')
      .selectAll('text.dvValueLabel')
      .data([this._selection])
      .join('text')
      .attr('class', 'dvValueLabel dvSelected')
      .classed('dvAlt', (_d, _idx) => value.confidenceInterval && (value.confidenceInterval.lower < 0 || value.confidenceInterval.upper < 0))
      .attr('x', this.chartArea.xScale(value.x))
      .attr('y', tooltipYPos())
      .style('font-size', `${this._style.tooltip.font.size}px`)
      .text(this._yAxisTooltip(value.y, value, this.state, this))
      .call(this._lineClassNames.bind(this))
      .style('fill', this._prop(st.tooltip.value.font.color, st.theme.color));
  }

  /**
   * Compute the x-domain based on the _xDomain property. The _xDomain property can be a function.
   * In this case, compute the function. If no x-domain is defined, it is computed based on the
   * data values.
   * @returns an array with all values for categorical data and the minimum and maximum values for
   * other data types.
   */
  _computeXDomain () {
    // First compute the domain for categorical x-axis (type band or ordinal)

    if (this.chartArea._xAxis.type === 'band') {
      return [...new Set(this._vals.flat().map(d => d.x))]
    }

    if (this.chartArea._xAxis.type === 'ordinal') {
      const xdom = [];
      this._vals.flat().forEach(d => {
        xdom[d.sortIdx] = d.x;
      });
      return xdom
    }

    // Compute the domain for continuous axis.

    const xdom = x$1(
      this._xDomain, this._vals, this._vals.flat().map(d => d.x), this.state, this
    ) || [null, null];

    if (xdom[0] === null) xdom[0] = min(this._vals.flat().map(d => d.x));
    if (xdom[1] === null) xdom[1] = max(this._vals.flat().map(d => d.x));

    return xdom
  }

  _computeYDomain () {
    const ydom = x$1(
      this._yDomain, this._vals, this._vals.flat().map(d => d.y), this.state, this
    ) || [null, null];

    if (ydom[0] === null) ydom[0] = min(this._vals.flat().map(d => d.y));
    if (ydom[1] === null) ydom[1] = max(this._vals.flat().map(d => d.y));

    return ydom
  }

  _ciLower (d) {
    return typeof d.confidenceInterval === 'object'
      ? d.confidenceInterval.lower
      : +d.confidenceInterval
  }

  _ciUpper (d) {
    return typeof d.confidenceInterval === 'object'
      ? d.confidenceInterval.upper
      : +d.confidenceInterval
  }

  _lineClassNames (sel) {
    sel.nodes().forEach(elem => {
      const elemSel = select(elem);
      const classNames = this._style.line.class(elemSel.datum(), this.state, this);
      Object.entries(classNames).forEach(([k, v]) => {
        v ? elem.classList.add(k) : elem.classList.remove(k);
      });
    });
  }

  /**
   * Returns a function to set an attribute or style value in D3.
   * The function will try to get the property value which is given by `valueOrFn`, and execute the
   * function if necessary. The function will also determine if the node is currently selected or
   * highlighted and pick the corresponding property if given.
   * If the value is not available, it will pick the theme property defined by `key`.
   * @param {string} tkey The theme property key which should be used if no specific value is
   *    defined.
   * @param {*} valueOrFn The value or function to consider if provided.
   * @param {function} postProcess A function which is called to transform the value before it is
   *    returned.
   * @returns
   */
  _prop (valueOrFn, defaultValue = null, postProcess = d => d) {
    // Return the function which is called for each node separately by D3.
    return (data, idx, nodes) => {
      const d = typeof data.obj === 'undefined' ? data : data.obj;

      const n = (nodes && nodes[idx]) || null;

      let value = valueOrFn === null
        ? null
        : x$1(valueOrFn, { values: d, idx: d.idx, node: n }, this.state, this);

      if (typeof value === 'object') value = propertyWithState(value, n);

      // If value is not defined or null, get the value from the theme
      if (value === null || typeof value === 'undefined') {
        value = propertyWithState(
          x$1(defaultValue, { values: d, idx: d.idx, node: n }, this.state, this),
          n
        );
      }

      return postProcess(
        value,
        { data: data, idx: idx, node: n, nodes: nodes },
        this.state,
        this
      )
    }
  }

  _selectLine (_, d) {
    this._selection = d;
    d.selected = true;
    this._renderConfidenceInterval();
    this._renderLines();
    this._renderDataPoints();
    this._renderLabels();
  }

  _deselectLine (_, d) {
    d.selected = false;
    this._selection = null;
    this._renderConfidenceInterval();
    this._renderLines();
    this._renderDataPoints();
    this._renderLabels();
  }

  _makeZoomable () {
    const ca = this.chartArea;
    this._clipPath.select('rect')
      .attr('x', ca.dataRect.left)
      .attr('y', ca.dataRect.top - 4)
      .attr('width', ca.dataRect.width())
      .attr('height', ca.dataRect.height() + 8);

    select(this._node).select('g.dvLines').attr('clip-path', `url(#clip_${this.id})`);
    select(this._node).select('g.dvLinesAlt').attr('clip-path', `url(#clip_${this.id})`);
    select(this._node).select('g.dvLines_hdl').attr('clip-path', `url(#clip_${this.id})`);
    select(this._node).select('g.dvLinePoints').attr('clip-path', `url(#clip_${this.id})`);
    select(this._node).select('g.dvConfInt').attr('clip-path', `url(#clip_${this.id})`);
    select(this._node).select('g.dvVgrid').attr('clip-path', `url(#clip_${this.id})`);

    // Zooming is controlled by the wheel events on the interaction group
    select(this._node).select('.dvBkgd.dvInteraction')
      .on('wheel', this._handleZoom.bind(this), { passive: false });

    // Brushing is controlled by the mousedown and mouseup events on the interaction group
    select(this._node).select('.dvBkgd.dvInteraction')
      .on('mousedown.brush', this._handleBackgroundMouseDown.bind(this))
      .on('mouseup.brush', this._handleBackgroundMouseUp.bind(this))
      .on('touchstart.brush', this._handleBackgroundMouseDown.bind(this))
      .on('touchend.brush', this._handleBackgroundMouseUp.bind(this));

    // Set the original x-domain if it is not already set
    this._origXDomain = this._origXDomain || [...this.chartArea._xDomain];

    // Position the controls and manage the availability
    select(this._node).select('g.dvZoomControls use.dvZoomIn')
      .attr('x', this.width - 20).attr('y', 0)
      .classed('dvDisabled', Math.abs(this.zoomLevel() - this._style.zoom.max) < 1e-4);

    select(this._node).select('g.dvZoomControls use.dvZoomOut')
      .attr('x', this.width - 20).attr('y', 18)
      .classed('dvDisabled', Math.abs(this.zoomLevel() - this._style.zoom.min) < 1e-4);

    select(this._node).select('g.dvZoomControls use.dvZoomAll')
      .attr('x', this.width - 20).attr('y', 45)
      .classed('dvHidden', Math.abs(this.zoomLevel() - 1) < 1e-4);

    // Define appropriate cursor on mouseover
    if (Math.abs(this.zoomLevel() - 1) < 1e-4) {
      this._node.querySelector('.dvBkgd.dvInteraction').style.cursor = 'crosshair';
    } else {
      this._node.querySelector('.dvBkgd.dvInteraction').style.cursor = 'move';
    }
  }

  _insertZoomControls () {
    select(this.svg()).insert('symbol', ':first-child')
      .attr('id', 'zoomIn').attr('viewBox', '0 0 50 50');

    select(this.svg()).insert('symbol', ':first-child')
      .attr('id', 'zoomOut').attr('viewBox', '0 0 50 50');

    select(this.svg()).insert('symbol', ':first-child')
      .attr('id', 'zoomAll').attr('viewBox', '0 0 50 50');

    this.svg().querySelector('#zoomIn').innerHTML = `
      <rect x="2" y="2" width="46" height="46" rx="2" stroke="#555" stroke-width="2"/>
      <line stroke="#555" stroke-width="5" x1="15" y1="25" x2="35" y2="25"/>
      <line stroke="#555" stroke-width="5" x1="25" y1="15" x2="25" y2="35"/>
    `;
    this.svg().querySelector('#zoomOut').innerHTML = `
      <rect x="2" y="2" width="46" height="46" rx="2" stroke="#555" stroke-width="2"/>
      <line stroke="#555" stroke-width="5" x1="15" y1="25" x2="35" y2="25"/>
    `;
    this.svg().querySelector('#zoomAll').innerHTML = `
      <rect x="2" y="2" width="46" height="46" rx="2" stroke="#555" stroke-width="2"/>
      <polygon fill="#555" points="8,22 8,8 22,8"/>
      <polygon fill="#555" points="22,42 8,42 8,28"/>
      <polygon fill="#555" points="42,28 42,42 28,42"/>
      <polygon fill="#555" points="28,8 42,8 42,22"/>
      <line stroke="#555" stroke-width="5" x1="10" y1="10" x2="40" y2="40"/>
      <line stroke="#555" stroke-width="5" x1="40" y1="10" x2="10" y2="40"/>
    `;

    // Create the zoom controls
    const controls = select(this._node).select('.dvBkgd.dvInteraction')
      .append('g').attr('class', 'dvControls dvZoomControls dvNoprint');

    controls.append('use').attr('href', '#zoomIn').attr('width', 20).attr('height', 20)
      .attr('class', 'dvZoomIn').on('click', this._zoomIn.bind(this));

    controls.append('use').attr('href', '#zoomOut').attr('width', 20).attr('height', 20)
      .attr('class', 'dvZoomOut').on('click', this._zoomOut.bind(this));

    controls.append('use').attr('href', '#zoomAll').attr('width', 20).attr('height', 20)
      .attr('class', 'dvZoomAll').on('click', this._zoomAll.bind(this));
  }

  _handleBackgroundMousemove (evt) {
    const e = svgEvent(evt);
    if (this._currentInteraction === null) this._renderTooltip(e.x, e.y);
    if (this._currentInteraction === 'brushing') this._brushMove(e);
    if (this._currentInteraction === 'moving') this._move(e);
  }

  _handleBackgroundClick (_evt) {
    if (this._selection) this._deselectLine(null, this._selection);
  }

  _handleBackgroundMouseDown (evt) {
    if (evt.button > 0) return

    // Transform the coordinates of the event
    const e = svgEvent(evt);

    // If zooming is active and the current zoom level is 1, we start a brushing action.
    if (this._zoom.enabled && Math.abs(this.zoomLevel() - 1) < 1e-4) {
      this._brushStart(e);
      return
    }

    // If zooming is active and the current zoom level is not 1, we start a moving action.
    if (this._zoom.enabled && Math.abs(this.zoomLevel() - 1) >= 1e-4) {
      this._moveStart(e);
    }
  }

  _handleBackgroundMouseUp (evt) {
    const e = svgEvent(evt);
    if (this._currentInteraction === 'brushing') this._brushEnd(e);
    if (this._currentInteraction === 'moving') this._moveEnd(e);
  }

  _handleXDomainSync (source, newDomain) {
    this.chartArea.xDomain(newDomain);
    this.update();
  }

  _handleZoom (evt) {
    // For zooming, we need to redefine the x-domain of the chart area and then render all the
    // content again.

    // Don't propagate further the event and convert it to local coordinates.
    evt.preventDefault();

    const e = svgEvent(evt);
    this._performZoom(e.x, evt.deltaY / Math.abs(evt.deltaY));
  }

  _performZoom (center, direction) {
    // Get the range of the original domain and the current domain
    const origRange = this._origXDomain.map(v => this.chartArea.xScale(v));
    const curRange = this.chartArea.xScale.range();
    const curDomain = this.chartArea.xScale.domain();

    // Compute the new zoom level
    const z0 = this.zoomLevel();
    let z1 = z0 + direction * 0.2 * z0;
    z1 = Math.max(Math.min(z1, this._style.zoom.max), this._style.zoom.min);

    // Compute the scaling factor based on the old and the new zoom level
    const f = z1 / z0;

    // The scaled range is the new position of the original range values.
    let scaledRange = origRange.map(v => (v - center) * f + center);

    // Translate the scaled range if it exceeds the acceptable range
    if (scaledRange[0] > curRange[0]) scaledRange = scaledRange.map(v => v - (scaledRange[0] - curRange[0]));
    if (scaledRange[1] < curRange[1]) scaledRange = scaledRange.map(v => v + (curRange[1] - scaledRange[1]));

    // Compute the scaled domain based on the scaled range and the original domain:
    this.chartArea.xScale.range(scaledRange).domain(this._origXDomain);
    const newDomain = [
      this.chartArea.xScale.invert(curRange[0]),
      this.chartArea.xScale.invert(curRange[1])
    ];
    this.chartArea.xScale.range(curRange).domain(curDomain);

    this.chartArea.xDomain(newDomain);
    this.update();

    this.publish('zoomEnd', { node: this.node, state: this.state });

    // Zooming a line chart triggers a xDomain sync event
    this.triggerSync('xDomain', [newDomain]);
  }

  _zoomIn () {
    this._performZoom(this.chartArea.dataRect.left + this.chartArea.dataRect.width() / 2, 1);
  }

  _zoomOut () {
    this._performZoom(this.chartArea.dataRect.left + this.chartArea.dataRect.width() / 2, -1);
  }

  _zoomAll (_evt) {
    this.chartArea.xDomain(this._origXDomain);
    this.update();
    this.triggerSync('xDomain', [this._origXDomain]);
  }

  _moveStart (evt) {
    this._currentInteraction = 'moving';
    this._moveStartX = evt.x;
    select(document).on('mouseup', this._handleBackgroundMouseUp.bind(this));
    select(document).on('mouseout', this._handleBackgroundMouseUp.bind(this));
  }

  _move (evt) {
    let dx = this._moveStartX - evt.x;
    this._moveStartX = evt.x;

    // Clamp dx to not exceed the range
    const maxRange = this._origXDomain.map(v => this.chartArea.xScale(v));
    const range = this.chartArea.xScale.range();
    dx = Math.min(maxRange[1] - range[1], dx);
    dx = Math.max(maxRange[0] - range[0], dx);

    const newDomain = [
      this.chartArea.xScale.invert(this.chartArea.xScale(this.chartArea._xDomain[0]) + dx),
      this.chartArea.xScale.invert(this.chartArea.xScale(this.chartArea._xDomain[1]) + dx)
    ];
    this.chartArea.xDomain(newDomain);
    this.update();
    this.triggerSync('xDomain', [newDomain]);
  }

  _moveEnd (_evt) {
    this._currentInteraction = null;
    select(document).on('mouseup', null);
    select(document).on('mouseout', null);
    this.emit('moveEnd', [this._node, this.state, this]);
  }

  _brushStart (evt) {
    select(this._node).select('.dvBrush').append('rect')
      .attr('x', evt.x)
      .attr('y', this.chartArea.dataRect.top)
      .attr('width', 0)
      .attr('height', this.chartArea.dataRect.height());

    select(this._node).select('.dvHdl').classed('dvHidden', true);
    this._currentInteraction = 'brushing';
    this._brushStartX = evt.x;
  }

  _brushMove (evt) {
    const x = Math.min(this._brushStartX, evt.x);
    const w = Math.max(this._brushStartX, evt.x) - x;
    select(this._node).select('.dvBrush rect').attr('x', x).attr('width', w);
  }

  _brushEnd (evt) {
    // Remove the brushing rect
    select(this._node).selectAll('.dvBrush rect').remove();
    select(this._node).select('.dvHdl').classed('dvHidden', false);
    this._currentInteraction = null;

    // Check the difference between brush start and brush end coordinates. If it is too small,
    // don't do anything.
    if (Math.abs(this._brushStartX - evt.x) < 2) return

    if (!this._origXScale) this._origXScale = this.chartArea.xScale;

    let newDomain = [
      this.chartArea.xScale.invert(Math.min(this._brushStartX, evt.x)),
      this.chartArea.xScale.invert(Math.max(this._brushStartX, evt.x))
    ];

    // Calculate the smallest allowed domain based on the maximum zoom level.
    const origDomain = this._origXScale.domain();
    const minimumRange = isFinite(this._style.zoom.max)
      ? (origDomain[1] - origDomain[0]) / this._style.zoom.max
      : 0;

    // If the current range is smaller than the smallest allowed domain correct it.
    const curRange = newDomain[1] - newDomain[0];
    if (Math.abs(curRange) < Math.abs(minimumRange)) {
      newDomain = this._adaptDomainToMinimumRange(newDomain, minimumRange);
    }

    this.chartArea.xDomain(newDomain);
    this.update();

    this.publish('brushEnd', { node: this.node, state: this.state });

    this.triggerSync('xDomain', [newDomain]);
  }

  _adaptDomainToMinimumRange (domain, minRange) {
    if (domain[0] instanceof Date) {
      const midDomain = domain[0].getTime() + ((domain[1].getTime() - domain[0].getTime()) / 2);
      return [new Date(midDomain - (minRange / 2)), new Date(midDomain + (minRange / 2))]
    } else {
      const midDomain = domain[0] + ((domain[1] - domain[0]) / 2);
      return [midDomain - (minRange / 2), midDomain + (minRange / 2)]
    }
  }

  update () {
    this.renderChart(this.node, this.state);
  }

  _snapX (x, xValues) {
    const ca = this.chartArea;
    // Get the closest x value to the current x position.
    let minDist = Infinity;
    let minDistIdx = -1;
    for (let i = 0; i < xValues.length; i++) {
      const xs = ca.xScale(xValues[i]) + (ca.xScale.type === 'band' ? ca.xScale.bandwidth() / 2 : 0);
      const dist = Math.abs(xs - x);
      if (minDist > dist) {
        minDist = dist;
        minDistIdx = i;
      }
    }
    if (minDist > this._style.tooltip.maxSnapDistance) return null
    return xValues[minDistIdx]
  }

  _valueAtX (line, x) {
    const values = line.sortedValues;

    // We create a conversion function in order to compare the values. This is, in case of an
    // object, we convert the value to a string. If there is no proper conversion, a warning is
    // issued.
    let c = v => v;
    if (typeof x === 'object') {
      c = v => v.toString();
      if (x.toString() === '[object Object]') {
        console.warn('Values for the x-axis in a line chart should be numbers, strings or implement the toString function.');
      }
    }

    for (let i = 0; i < values.length; i++) {
      if (c(values[i].x) === c(x)) return values[i]
    }

    console.warn(`Line chart tooltip: no data value found at ${x}`);
    return null
  }

  _popupTooltipText (d, tooltip) {
    if (typeof this._tooltipConfig.text === 'string') return this._tooltipConfig.text
    if (typeof this._tooltipConfig.text === 'function') {
      return this._tooltipConfig.text(d.value, this.state, tooltip)
    }

    // Build the default tooltip text

    // Get the labels
    const lbls = this._filteredData.map(d => {
      return this._labelFn(d, this.state, this) || d.label || d.key || d.name || ''
    });

    // Estimate the length of the longest label
    const llen = approximateTextLength(Math.max(...lbls.map(l => l.length)), 12, 400);

    // Get the colors for each line
    const cols = this._filteredData.map((d, idx) => {
      return this._prop(this._style.line.color, this._style.theme.color)(d, idx, null)
    });

    let valueText = '<p>';
    d.forEach((v) => {
      const yLabel = v.yLabel || this._yAxisTooltip(v.y, v, this.state, this) || v.y;
      valueText += `
        <circle r="4" fill="${cols[v.yIdx]}" /><tab />
        <span fontColor="#757575">${lbls[v.yIdx]}</span><tab/><b>${yLabel}</b><br/>
      `;
    });
    valueText += '</p>';
    return `
      <text lineHeight="1.8" tabStops="15,${llen}">
        <p fontSize="14" fontWeight="700">{{xLabel}}</p>${valueText}
      </text>
    `
  }

  _initPopupTooltip (_evt, d, _tooltip) {
    select(d.node).append('text');
  }

  _prerenderPopupTooltip (_evt, d, tooltip) {
    const renderer = new TextRenderer({
      width: this._style.tooltip.maxWidth,
      fontSize: this._style.tooltip.font.size
    });
    renderer.render(
      this._popupTooltipText(d.data.value, tooltip),
      d.node,
      {
        data: d.data.value,
        state: this.state,
        x: d.data.value[0].x,
        xLabel: (
          this._xAxisTooltip(d.data.value[0].x, d.data.value[0], this.state, this) ||
          d.data.value[0].xLabel ||
          d.data.value[0].x
        )
      }
    );

    const cr = d.node.getBoundingClientRect();
    tooltip.viewRect.setHeight(cr.height);
    tooltip.viewRect.setWidth(cr.width);

    // Set the correct position of the tooltip content
    d.node.setAttribute('transform', `translate(${tooltip.viewRect.left} ${tooltip.viewRect.top})`);
  }

  _renderPopupTooltip (_evt, _d, _tooltip) {
  }

  _removeTooltip () {
    select(this._node).select('.dvTooltip').selectAll('*').remove();
    select(this._node).select('.dvTooltipBkgd').selectAll('*').remove();
    this._tooltip && this._tooltip.hide();
  }
}

function lineChart (config, style) {
  return new LineChart(config, style)
}

const defaultSlopeChartStyle = {
  dimension: {
    label: {
      font: { size: 12, color: '#999', weight: 400 },
      offset: 4
    }
  },
  grid: {
    minValue: null,
    maxValue: null,
    line: { color: '#ccc', width: 1 },
    padding: { top: 20, bottom: 20 }
  },
  value: {
    line: { width: 2 },
    dot: { size: 8 },
    label: {
      font: { size: 12, color: '#000', weight: 400 },
      offset: 8,
      baseLineShift: -2
    },
    format: v => parseInt(v) === v ? `${v}` : v.toFixed(1)
  },
  label: {
    font: { size: 12, color: '#000', weight: 700 },
    offset: 4,
    baseLineShift: -2
  }
};

class SlopeChart extends A {
  constructor (config, style) {
    super(config, style);

    // The user-defined values
    this._dimensions = config.dimensions;
    this._dimensionLabels = config.dimensionLabels;
    this._values = config.values;
    this._labels = config.labels;
    this._colors = config.colors;
    this._size = config.size || 400;

    // The data after transformation and processed, ready to use
    this._d = {
      data: null,
      dimensions: null,
      dimensionLabels: null,
      values: null,
      labels: null,
      colors: null
    };

    // Computed values
    this._c = {
      minValue: null,
      maxValue: null
    };

    this.scale = null;

    // Setup the default style and then apply the user style.
    this.mergeStyle(defaultSlopeChartStyle);
    this.mergeStyle(style);
  }

  initContent (node, state) {
    node.classList.add('dvSlopeChart');
    select(node).append('g').attr('class', 'dvDimensions');
    select(node).append('g').attr('class', 'dvDimensionLabels');
    select(node).append('g').attr('class', 'dvValueLines');
    select(node).append('g').attr('class', 'dvValueDots');
    select(node).append('g').attr('class', 'dvValueLabels');
    select(node).append('g').attr('class', 'dvLineLabels');
    this.publish('init', { node, state });
  }

  prerenderSlopeChart (node, state) {
    this.publish('prerenderWillStart', { node, state });

    this.extractData();
    this._c.size = x$1(
      this._size,
      { ...this._d, width: this.width },
      state,
      this
    );

    // Compute the minimum and maximum values
    // The min/max values are either defined in the grid style (minValue and maxValue), or taken
    // from the data.
    this._c.minValue = this._style.grid.minValue === null
      ? min(this._d.values.flat())
      : x$1(this._style.grid.minValue, this._d, state, this);

    this._c.maxValue = this._style.grid.maxValue === null
      ? max(this._d.values.flat())
      : x$1(this._style.grid.maxValue, this._d, state, this);

    // Define the height of the chart.
    this.height = this._c.size;

    // Setup the scale for the chart.
    this.defineScale();

    // Pre-render the dimension labels which can be displayed on several lines.
    this._prerenderDimensionLabels(node, state);
    this._prerenderValueLabels(node, state);
    this._prerenderLineLabels(node, state);

    this.publish('prerenderDidEnd', { node, state });
  }

  _prerenderDimensionLabels (node, state) {
    const renderer = new TextRenderer({
      fontSize: x$1(this._style.dimension.label.font.size, {}, state, this),
      fontColor: x$1(this._style.dimension.label.font.color, {}, state, this),
      fontWeight: x$1(this._style.dimension.label.font.weight, {}, state, this)
    });

    select(node).select('.dvDimensionLabels')
      .selectAll('g.dvDimensionLabel')
      .data(this._d.dimensionLabels)
      .join('g')
      .attr('class', 'dvDimensionLabel')
      .each((d, i, nodes) => {
        this._renderDimensionLabel(nodes[i], d, i, renderer);
      });
  }

  _prerenderValueLabels (node, _state) {
    select(node).select('.dvValueLabels')
      .selectAll('g')
      .data(this._d.values)
      .join('g')
      .selectAll('text')
      .data((d, i) => d.map(v => ({ value: v, dimension: i })))
      .join('text')
      .attr('class', (d, i) => i === 0 ? 'dvLeftValueLabel' : 'dvRightValueLabel')
      .text(d => this._style.value.format(d.value))
      .style('font-size', `${this._style.value.label.font.size}px`)
      .style('fill', this._style.value.label.font.color)
      .style('font-weight', this._style.value.label.font.weight);
  }

  _prerenderLineLabels (node, _state) {
    select(node).select('.dvLineLabels')
      .selectAll('text')
      .data(this._d.labels)
      .join('text')
      .text(d => d)
      .style('font-size', `${this._style.label.font.size}px`)
      .style('fill', this._style.label.font.color)
      .style('font-weight', this._style.label.font.weight);
  }

  renderSlopeChart (node, state) {
    this.publish('renderWillStart', { node, state });

    // Recalculate the scale which can take into account the prerendered labels
    this.defineScale();

    this._renderDimensions(node, state);
    this._renderDimensionLabels(node, state);
    this._renderValueLines(node, state);
    this._renderValueDots(node, state);
    this._renderValueLabels(node, state);
    this._renderLineLabels(node, state);

    this.publish('renderDidEnd', { node, state });
  }

  _renderDimensions (node, _state) {
    select(node).select('.dvDimensions')
      .selectAll('line')
      .data(this._d.dimensions)
      .join('line')
      .style('stroke', this._style.grid.line.color)
      .style('stroke-width', `${this._style.grid.line.width}px`)
      .each((d, i, nodes) => {
        const node = nodes[i];
        const p1 = this.scale(i, this._c.minValue);
        const p2 = this.scale(i, this._c.maxValue);
        node.setAttribute('x1', p1.x);
        node.setAttribute('y1', p1.y + this._style.grid.padding.bottom);
        node.setAttribute('x2', p2.x);
        node.setAttribute('y2', p2.y - this._style.grid.padding.top);
      });
  }

  _renderDimensionLabels (node, _state) {
    select(node).select('.dvDimensionLabels')
      .selectAll('g.dvDimensionLabel')
      .each((d, i, nodes) => {
        const node = nodes[i];
        const bbox = node.getBBox();

        // Compute the position x/y.
        const p = this.scale(i, this._c.maxValue);
        const y = p.y - this._style.grid.padding.top - this._style.dimension.label.offset;

        const dx = p.x - bbox.x - (bbox.width / 2);
        const dy = y - bbox.y - bbox.height;
        node.setAttribute('transform', `translate(${dx} ${dy})`);
      });
  }

  // Renders a single dimension label
  _renderDimensionLabel (node, label, _dimensionIdx, textRenderer) {
    const maxLabelWidth = Math.max(50, this.width / 2);
    textRenderer.render(label, node, {}, {}, { width: maxLabelWidth, textAlign: 'center' });
  }

  _renderValueLines (node, _state) {
    select(node).select('.dvValueLines')
      .selectAll('line')
      .data(this._d.values)
      .join('line')
      .style('stroke-width', `${this._style.value.line.width}px`)
      .style('stroke', (_d, i) => this._d.colors[i])
      .each((d, i, nodes) => {
        const node = nodes[i];
        const p1 = this.scale(0, d[0]);
        const p2 = this.scale(1, d[1]);
        node.setAttribute('x1', p1.x);
        node.setAttribute('y1', p1.y);
        node.setAttribute('x2', p2.x);
        node.setAttribute('y2', p2.y);
      });
  }

  _renderValueDots (node, _state) {
    select(node).select('.dvValueDots')
      .selectAll('g')
      .data(this._d.values)
      .join('g')
      .selectAll('circle')
      .data((d, i) => d.map(v => ({ value: v, dimension: i })))
      .join('circle')
      .attr('r', this._style.value.dot.size / 2)
      .attr('fill', d => this._d.colors[d.dimension])
      .each((d, i, nodes) => {
        const node = nodes[i];
        const p = this.scale(i, d.value);
        node.setAttribute('cx', p.x);
        node.setAttribute('cy', p.y);
      });
  }

  _renderValueLabels (node, _state) {
    select(node).select('.dvValueLabels')
      .selectAll('g')
      .selectAll('text')
      .each((d, i, nodes) => {
        const node = nodes[i];
        const p = this.scale(i, d.value);
        const offset = this._style.value.label.offset;
        node.setAttribute('x', i === 0 ? p.x - offset : p.x + offset);
        node.setAttribute(
          'y',
          p.y + this._style.value.label.font.size / 2 + this._style.value.label.baseLineShift
        );
        node.style.textAnchor = i === 0 ? 'end' : 'start';
      });
  }

  _renderLineLabels (node, _state) {
    // Compute the right value label width
    const valuesWidth = Math.max(0, ...select(this.node)
      .selectAll('text.dvRightValueLabel')
      .nodes()
      .map(node => node.getBBox().width)
    );

    const offset = this._style.value.label.offset + valuesWidth + this._style.label.offset;

    select(node).select('.dvLineLabels')
      .selectAll('text')
      .each((d, i, nodes) => {
        const node = nodes[i];
        const p = this.scale(1, this._d.values[i][1]);
        node.setAttribute('x', p.x + offset);
        node.setAttribute(
          'y',
          p.y + this._style.label.font.size / 2 + this._style.label.baseLineShift
        );
      });
  }

  extractData () {
    const d = {};
    this.requiredDataSources.forEach(ds => {
      d[ds] = this.data(ds);
    });

    this._d.data = this.dataExtractor ? this.dataExtractor(d, this.state, this) : d;

    // Extract the values, dimensions and labels
    this._d.dimensions = x$1(this._dimensions, this._d.data, this.state, this);
    this._d.dimensionLabels = x$1(this._dimensionLabels, this._d.data, this.state, this);
    this._d.values = x$1(this._values, this._d.data, this.state, this);
    this._d.labels = x$1(this._labels, this._d.data, this.state, this);
    this._d.colors = x$1(this._colors, this._d.data, this.state, this);
  }

  defineScale () {
    // The scale defines the position of the dimensions (the vertical lines), and the position
    // of the dots in the vertical scale. The horizontal scale depends on the width of the value
    // labels at the left and right, and the line labels on the right. It also depends on the width
    // of the dimension labels.
    // The vertical scale depends on the height of the dimension labels which are displayed on top.
    // The left, top and right margin need to be defined to know the available area for the chart
    // itself.

    // The margin is the space required for the labels
    // The top space is defined by the dimension labels.
    const dimensionLabelsBBox = select(this.node).select('.dvDimensionLabels').node().getBBox();

    const valueLabelsLeftWidth = Math.max(0, ...select(this.node)
      .selectAll('text.dvLeftValueLabel')
      .nodes()
      .map(node => node.getBBox().width)
    );

    const valueLabelsRightWidth = Math.max(0, ...select(this.node)
      .selectAll('text.dvRightValueLabel')
      .nodes()
      .map(node => node.getBBox().width)
    );

    const lineLabelsWidth = Math.max(0, ...select(this.node)
      .selectAll('.dvLineLabels text')
      .nodes()
      .map(node => node.getBBox().width)
    );

    const rightLabelsWidth = (
      this._style.value.label.offset +
      valueLabelsRightWidth +
      this._style.label.offset +
      lineLabelsWidth
    );

    const margin = {
      top: dimensionLabelsBBox.height,
      left: valueLabelsLeftWidth + this._style.value.label.offset,
      bottom: 0,
      right: rightLabelsWidth
    };

    // There is also a grid line padding, which is the space between the min/max values and the
    // end of the grid lines. The grid line padding is defined in the style.
    const linePadding = this._style.grid.padding;

    const width = this.width;
    const height = this.height;

    const verticalScale = linear(
      [this._c.minValue, this._c.maxValue],
      [height - margin.bottom - linePadding.bottom, margin.top + linePadding.top]
    );

    // The scale function itself is a function which takes the dimension i and the value v as input
    // and returns the corresponding coordinates x/y.
    this.scale = function (i, value) {
      const x = i === 0 ? margin.left : width - margin.right;
      const y = verticalScale(value);
      return { x: x, y: y }
    };
  }

  renderContent () {
    this.initContent(this.node, this.state);
    this.prerenderSlopeChart(this.node, this.state);
    this.renderSlopeChart(this.node, this.state);
  }

  updateSize () {
    this.prerenderSlopeChart(this.node, this.state);
    this.renderSlopeChart(this.node, this.state);
  }

  updateState () {
    this.prerenderSlopeChart(this.node, this.state);
    this.renderSlopeChart(this.node, this.state);
  }

  updateData () {
    this.prerenderSlopeChart(this.node, this.state);
    this.renderSlopeChart(this.node, this.state);
  }
}

function slopeChart (config, style) {
  return new SlopeChart(config, style)
}

function justify (node, n) {
  return node.sourceLinks.length ? node.depth : n - 1
}

function constant$2 (x) {
  return function () {
    return x
  }
}

function ascendingSourceBreadth (a, b) {
  return ascendingBreadth(a.source, b.source) || a.index - b.index
}

function ascendingTargetBreadth (a, b) {
  return ascendingBreadth(a.target, b.target) || a.index - b.index
}

function ascendingBreadth (a, b) {
  return a.y0 - b.y0
}

function value (d) {
  return d.value
}

function defaultId (d) {
  return d.index
}

function defaultNodes (graph) {
  return graph.nodes
}

function defaultLinks (graph) {
  return graph.links
}

function find (nodeById, id) {
  const node = nodeById.get(id);
  if (!node) throw new Error('missing: ' + id)
  return node
}

function computeLinkBreadths ({ nodes }) {
  for (const node of nodes) {
    let y0 = node.y0;
    let y1 = y0;
    for (const link of node.sourceLinks) {
      link.y0 = y0 + link.width / 2;
      y0 += link.width;
    }
    for (const link of node.targetLinks) {
      link.y1 = y1 + link.width / 2;
      y1 += link.width;
    }
  }
}

function Sankey$1 () {
  let x0 = 0; let y0 = 0; let x1 = 1; let y1 = 1; // extent
  let dx = 24; // nodeWidth
  let dy = 8; let py; // nodePadding
  let id = defaultId;
  let align = justify;
  let sort;
  let linkSort;
  let nodes = defaultNodes;
  let links = defaultLinks;
  let stepped = false;
  let iterations = 6;
  let columnWidths = function (nColumns, width) {
    // By default, every column has the same width
    return new Array(nColumns).fill(width / nColumns)
  };

  function sankey () {
    const graph = { nodes: nodes.apply(null, arguments), links: links.apply(null, arguments) };
    const g = stepped ? buildDummyNodes(graph) : graph;
    computeNodeLinks(g);
    computeNodeValues(g);
    computeNodeDepths(g);
    computeNodeHeights(g);
    computeNodeBreadths(g);
    computeLinkBreadths(g);
    return stepped ? removeDummyNodes(g) : g
  }

  sankey.update = function (graph) {
    computeLinkBreadths(graph);
    return graph
  };

  sankey.nodeId = function (_) {
    if (arguments.length) {
      id = typeof _ === 'function' ? _ : constant$2(_);
      return sankey
    }
    return id
  };

  sankey.nodeAlign = function (_) {
    if (arguments.length) {
      align = typeof _ === 'function' ? _ : constant$2(_);
      return sankey
    }
    return align
  };

  sankey.nodeSort = function (_) {
    if (arguments.length) {
      sort = _;
      return sankey
    }
    return sort
  };

  sankey.nodeWidth = function (_) {
    if (arguments.length) {
      dx = +_;
      return sankey
    }
    return dx
  };

  sankey.nodePadding = function (_) {
    if (arguments.length) {
      py = dy = +_;
      return sankey
    }
    return dy
  };

  sankey.stepped = function (_) {
    if (arguments.length) {
      stepped = _;
      return sankey
    }
    return stepped
  };

  sankey.nodes = function (_) {
    if (arguments.length) {
      nodes = typeof _ === 'function' ? _ : constant$2(_);
      return sankey
    }
    return nodes
  };

  sankey.links = function (_) {
    if (arguments.length) {
      links = typeof _ === 'function' ? _ : constant$2(_);
      return sankey
    }
    return links
  };

  sankey.linkSort = function (_) {
    if (arguments.length) {
      linkSort = typeof _ === 'function' ? _ : constant$2(_);
      return sankey
    }
    return linkSort
  };

  sankey.columnWidths = function (_) {
    if (arguments.length) {
      columnWidths = _;
      return sankey
    }
    return columnWidths
  };

  sankey.size = function (_) {
    if (arguments.length) {
      x0 = y0 = 0;
      x1 = +_[0];
      y1 = +_[1];
      return sankey
    }
    return [x1 - x0, y1 - y0]
  };

  sankey.extent = function (_) {
    if (arguments.length) {
      x0 = +_[0][0];
      x1 = +_[1][0];
      y0 = +_[0][1];
      y1 = +_[1][1];
      return sankey
    }
    return [[x0, y0], [x1, y1]]
  };

  sankey.iterations = function (_) {
    if (arguments.length) {
      iterations = +_;
      return sankey
    }
    return iterations
  };

  function buildDummyNodes ({ nodes, links }) {
    const n = nodes.length;

    // Build an array with the source and target links for each node.
    const srcLinks = new Array(n).fill(null).map(() => []);
    const tgtLinks = new Array(n).fill(null).map(() => []);
    for (let i = 0; i < links.length; i++) {
      const lnk = links[i];
      lnk.origIdx = i;
      srcLinks[lnk.source].push(lnk);
      tgtLinks[lnk.target].push(lnk);
    }

    // Get the start nodes: these are the nodes without a target link
    // At the same time, insert the original index of the node.
    const startNodes = [];
    for (let i = 0; i < n; i++) {
      if (tgtLinks[i].length === 0) startNodes.push(i);
      nodes[i].origIdx = i;
    }

    // Compute the maximum length of all links
    let cur = new Set(startNodes);
    let nxt = new Set();
    let x = 0;
    while (cur.size) {
      cur.forEach(ndIdx => {
        const nd = nodes[ndIdx];
        nd.level = x;
        nd.dummy = false;
        for (const lnk of srcLinks[ndIdx]) {
          nxt.add(lnk.target);
        }
      });
      x += 1;
      if (x > n) throw new Error('Circular links are not supported')
      cur = nxt;
      nxt = new Set();
    }

    // Set the level for all terminal nodes to the max depth level
    for (let i = 0; i < nodes.length; i++) {
      if (srcLinks[i].length === 0) nodes[i].level = x;
    }

    // Go through all nodes and check the source links.
    // If they skip a level, add some dummy node and links.
    const g = { nodes: [], links: [] };

    let ndIdx = 0;
    for (let i = 0; i < n; i++) {
      const srcNode = nodes[i];

      // Add the node to the new graph if it has not already been added.
      if (g.nodes.indexOf(srcNode) < 0) {
        srcNode.idx = ndIdx;
        g.nodes.push(srcNode);
        ndIdx += 1;
      }

      const lnks = srcLinks[i];
      for (let j = 0; j < lnks.length; j++) {
        const lnk = lnks[j];
        const tgtNode = nodes[lnk.target];
        if (srcNode.level + 1 < tgtNode.level) {
          // We need to insert one or several dummy nodes
          let prevNode = srcNode;

          for (let l = srcNode.level + 1; l < tgtNode.level; l++) {
            // Insert the dummy node
            const dummyNode = {
              ...srcNode,
              idx: ndIdx,
              dummy: true,
              level: l,
              node: null,
              origIdx: null
            };
            g.nodes.push(dummyNode);
            ndIdx += 1;

            // Insert the link from the srcNode to the dummy node
            const dummyLink = {
              ...lnk,
              origSource: lnk.source,
              source: prevNode.idx,
              origTarget: lnk.target,
              target: dummyNode.idx
            };
            g.links.push(dummyLink);

            prevNode = dummyNode;
          }

          // Insert now the target node and the link from the last dummy node
          // to the target node.
          if (g.nodes.indexOf(tgtNode) < 0) {
            tgtNode.idx = ndIdx;
            g.nodes.push(tgtNode);
            ndIdx += 1;
          }

          g.links.push({
            ...lnk,
            origSource: lnk.source,
            source: prevNode.idx,
            origTarget: lnk.target,
            target: tgtNode.idx
          });
        } else {
          if (g.nodes.indexOf(tgtNode) < 0) {
            tgtNode.idx = ndIdx;
            g.nodes.push(tgtNode);
            ndIdx += 1;
          }

          g.links.push({
            ...lnk,
            origSource: lnk.source,
            source: srcNode.idx,
            origTarget: lnk.target,
            target: tgtNode.idx
          });
        }
      }
    }

    return g
  }

  function computeNodeLinks ({ nodes, links }) {
    for (const [i, node] of nodes.entries()) {
      node.index = i;
      node.sourceLinks = [];
      node.targetLinks = [];
    }
    const nodeById = new Map(nodes.map((d, i) => [id(d, i, nodes), d]));
    for (const [i, link] of links.entries()) {
      link.index = i;
      let { source, target } = link;
      if (typeof source !== 'object') source = link.source = find(nodeById, source);
      if (typeof target !== 'object') target = link.target = find(nodeById, target);
      source.sourceLinks.push(link);
      target.targetLinks.push(link);
    }
    if (linkSort != null) {
      for (const { sourceLinks, targetLinks } of nodes) {
        sourceLinks.sort(linkSort);
        targetLinks.sort(linkSort);
      }
    }
  }

  function computeNodeValues ({ nodes }) {
    for (const node of nodes) {
      node.value = node.fixedValue === undefined
        ? Math.max(sum(node.sourceLinks, value), sum(node.targetLinks, value))
        : node.fixedValue;
    }
  }

  function computeNodeDepths ({ nodes }) {
    const n = nodes.length;
    let current = new Set(nodes);
    let next = new Set();
    let x = 0;
    while (current.size) {
      for (const node of current) {
        node.depth = x;
        for (const { target } of node.sourceLinks) {
          next.add(target);
        }
      }
      if (++x > n) throw new Error('circular link')
      current = next;
      next = new Set();
    }
  }

  function computeNodeHeights ({ nodes }) {
    const n = nodes.length;
    let current = new Set(nodes);
    let next = new Set();
    let x = 0;
    while (current.size) {
      for (const node of current) {
        node.height = x;
        for (const { source } of node.targetLinks) {
          next.add(source);
        }
      }
      if (++x > n) throw new Error('circular link')
      current = next;
      next = new Set();
    }
  }

  function computeNodeLayers ({ nodes }) {
    // The number of node columns. The number of streams is x - 1
    const x = max(nodes, d => d.depth) + 1;

    // Compute the column width
    const w = columnWidths(x - 1, x1 - x0 - dx);

    // Compute the column positions (corresponding to the x0 position of each node).
    // The first column is positions at x0. All other are defined by the column widths
    const kx = [x0];
    for (let i = 0; i < x - 1; i++) {
      kx.push(kx[i] + w[i]);
    }

    const columns = new Array(x);
    for (const node of nodes) {
      // eslint-disable-next-line no-useless-call
      const i = Math.max(0, Math.min(x - 1, Math.floor(align.call(null, node, x))));
      node.layer = i;
      node.x0 = kx[i];
      node.x1 = node.x0 + dx;
      if (columns[i]) columns[i].push(node);
      else columns[i] = [node];
    }
    if (sort) {
      for (const column of columns) {
        column.sort(sort);
      }
    }
    return columns
  }

  function initializeNodeBreadths (columns) {
    const ky = min(columns, c => (y1 - y0 - (c.length - 1) * py) / sum(c, value));
    for (const nodes of columns) {
      let y = y0;
      for (const node of nodes) {
        node.y0 = y;
        node.y1 = y + node.value * ky;
        y = node.y1 + py;
        for (const link of node.sourceLinks) {
          link.width = link.value * ky;
        }
      }
      y = (y1 - y + py) / (nodes.length + 1);
      for (let i = 0; i < nodes.length; ++i) {
        const node = nodes[i];
        node.y0 += y * (i + 1);
        node.y1 += y * (i + 1);
      }
      reorderLinks(nodes);
    }
  }

  function computeNodeBreadths (graph) {
    const columns = computeNodeLayers(graph);
    py = Math.min(dy, (y1 - y0) / (max(columns, c => c.length) - 1));
    initializeNodeBreadths(columns);
    for (let i = 0; i < iterations; ++i) {
      const alpha = Math.pow(0.99, i);
      const beta = Math.max(1 - alpha, (i + 1) / iterations);
      relaxRightToLeft(columns, alpha, beta);
      relaxLeftToRight(columns, alpha, beta);
    }
  }

  // Reposition each node based on its incoming (target) links.
  function relaxLeftToRight (columns, alpha, beta) {
    for (let i = 1, n = columns.length; i < n; ++i) {
      const column = columns[i];
      for (const target of column) {
        let y = 0;
        let w = 0;
        for (const { source, value } of target.targetLinks) {
          const v = value * (target.layer - source.layer);
          y += targetTop(source, target) * v;
          w += v;
        }
        if (!(w > 0)) continue
        const dy = (y / w - target.y0) * alpha;
        target.y0 += dy;
        target.y1 += dy;
        reorderNodeLinks(target);
      }
      if (sort === undefined) column.sort(ascendingBreadth);
      resolveCollisions(column, beta);
    }
  }

  // Reposition each node based on its outgoing (source) links.
  function relaxRightToLeft (columns, alpha, beta) {
    for (let n = columns.length, i = n - 2; i >= 0; --i) {
      const column = columns[i];
      for (const source of column) {
        let y = 0;
        let w = 0;
        for (const { target, value } of source.sourceLinks) {
          const v = value * (target.layer - source.layer);
          y += sourceTop(source, target) * v;
          w += v;
        }
        if (!(w > 0)) continue
        const dy = (y / w - source.y0) * alpha;
        source.y0 += dy;
        source.y1 += dy;
        reorderNodeLinks(source);
      }
      if (sort === undefined) column.sort(ascendingBreadth);
      resolveCollisions(column, beta);
    }
  }

  function resolveCollisions (nodes, alpha) {
    const i = nodes.length >> 1;
    const subject = nodes[i];
    resolveCollisionsBottomToTop(nodes, subject.y0 - py, i - 1, alpha);
    resolveCollisionsTopToBottom(nodes, subject.y1 + py, i + 1, alpha);
    resolveCollisionsBottomToTop(nodes, y1, nodes.length - 1, alpha);
    resolveCollisionsTopToBottom(nodes, y0, 0, alpha);
  }

  // Push any overlapping nodes down.
  function resolveCollisionsTopToBottom (nodes, y, i, alpha) {
    for (; i < nodes.length; ++i) {
      const node = nodes[i];
      const dy = (y - node.y0) * alpha;
      if (dy > 1e-6) {
        node.y0 += dy;
        node.y1 += dy;
      }
      y = node.y1 + py;
    }
  }

  // Push any overlapping nodes up.
  function resolveCollisionsBottomToTop (nodes, y, i, alpha) {
    for (; i >= 0; --i) {
      const node = nodes[i];
      const dy = (node.y1 - y) * alpha;
      if (dy > 1e-6) {
        node.y0 -= dy;
        node.y1 -= dy;
      }
      y = node.y0 - py;
    }
  }

  function reorderNodeLinks ({ sourceLinks, targetLinks }) {
    if (linkSort === undefined) {
      for (const { source: { sourceLinks } } of targetLinks) {
        sourceLinks.sort(ascendingTargetBreadth);
      }
      for (const { target: { targetLinks } } of sourceLinks) {
        targetLinks.sort(ascendingSourceBreadth);
      }
    }
  }

  function reorderLinks (nodes) {
    if (linkSort === undefined) {
      for (const { sourceLinks, targetLinks } of nodes) {
        sourceLinks.sort(ascendingTargetBreadth);
        targetLinks.sort(ascendingSourceBreadth);
      }
    }
  }

  // Returns the target.y0 that would produce an ideal link from source to target.
  function targetTop (source, target) {
    let y = source.y0 - (source.sourceLinks.length - 1) * py / 2;
    for (const { target: node, width } of source.sourceLinks) {
      if (node === target) break
      y += width + py;
    }
    for (const { source: node, width } of target.targetLinks) {
      if (node === source) break
      y -= width;
    }
    return y
  }

  // Returns the source.y0 that would produce an ideal link from source to target.
  function sourceTop (source, target) {
    let y = target.y0 - (target.targetLinks.length - 1) * py / 2;
    for (const { source: node, width } of target.targetLinks) {
      if (node === source) break
      y += width + py;
    }
    for (const { target: node, width } of source.sourceLinks) {
      if (node === target) break
      y -= width;
    }
    return y
  }

  function removeDummyNodes (graph) {
    // How many non-dummy nodes are there?
    const cntNonDummyNodes = graph.nodes.filter(nd => !nd.dummy).length;

    // How many links are there without dummy nodes?
    const cntGenuineLinks = new Set(graph.links.map(lnk => lnk.origIdx)).size;

    // Build the structure for the out graph with the correct array sizes.
    // The arrays themselves will be filled with the correct values afterwards.
    const g = {
      nodes: new Array(cntNonDummyNodes),
      links: new Array(cntGenuineLinks)
    };

    const n = graph.nodes.length;

    // Iterate over all non-dummy nodes, and follow the links to get their non-dummy destination.
    for (let i = 0; i < n; i++) {
      const nd = graph.nodes[i];

      // Skip the dummy nodes
      if (nd.dummy === true) continue

      // Insert the node to the out graph at the original index position.
      // Source and target links are removed and will be inserted again later.
      const ndIdx = nd.origIdx;
      g.nodes[ndIdx] = {
        ...nd,
        idx: ndIdx,
        index: ndIdx,
        sourceLinks: [],
        targetLinks: []
      };

      for (const lnk of nd.sourceLinks) {
        const destNode = nextNode(lnk);
        const idx = lnk.origIdx;
        g.links[idx] = {
          id: lnk.id,
          index: idx,
          source: ndIdx, // same as lnk.origSource
          target: destNode.node.origIdx, // same as lnk.origTarget
          value: lnk.value,
          width: lnk.width,
          y0: lnk.y0,
          y1: destNode.y1,
          steps: destNode.steps
        };
      }
    }

    // In all links, replace the source and target values by the corresponding nodes instead of the
    // index. At the same time, add the link to the respective sourceLinks and targetLinks.
    for (const lnk of g.links) {
      lnk.source = g.nodes[lnk.source];
      lnk.target = g.nodes[lnk.target];
      lnk.source.sourceLinks.push(lnk);
      lnk.target.targetLinks.push(lnk);
    }

    return g
  }

  return sankey
}

function nextNode (link, steps = []) {
  const nd = link.target;
  if (nd.dummy === false) return { node: nd, steps: steps, y1: link.y1 }

  // We have a dummy node as target. A dummy node has always exactly one source link and one target
  // link. We can therefore just take the source link from the target node as next link.
  const nextLink = nd.sourceLinks[0];
  return nextNode(
    nextLink,
    [...steps, { depth: nd.depth, x0: nd.x0, x1: nd.x1, y0: nd.y0, y1: nd.y1 }]
  )
}

function horizontalSource (d) {
  return [d.source.x1, d.y0]
}

function horizontalTarget (d) {
  return [d.target.x0, d.y1]
}

function sankeyLinkHorizontal () {
  return linkHorizontal()
    .source(horizontalSource)
    .target(horizontalTarget)
}

function steppedLink (l) {
  const path = [];

  // The width and half-width of the link
  const w = l.width;
  const w2 = w / 2;

  // Start point is the lower left point
  let x0 = l.source.x1;
  let y0 = l.y0 + w2;
  path.push(`M ${x0} ${y0}`);

  const steps = l.steps || [];
  for (let i = 0; i < steps.length; i++) {
    const s = steps[i];
    const x1 = s.x0 + ((s.x1 - s.x0) / 2);
    const y1 = s.y1;
    const mx = x0 + ((x1 - x0) / 2);
    path.push(`C ${mx} ${y0}, ${mx} ${y1} ${x1} ${y1}`);
    x0 = x1;
    y0 = y1;
  }

  // Curve to end point
  let x1 = l.target.x0;
  let y1 = l.y1 + w2;
  let mx = x0 + ((x1 - x0) / 2);
  path.push(`C ${mx} ${y0}, ${mx} ${y1} ${x1} ${y1}`);

  // And go backwards...
  x0 = x1;
  y1 = y0 = l.y1 - w2;
  path.push(`L ${x1} ${y1}`);

  for (let i = steps.length - 1; i >= 0; i--) {
    const s = steps[i];
    const x1 = s.x0 + ((s.x1 - s.x0) / 2);
    const y1 = s.y0;
    const mx = x0 + ((x1 - x0) / 2);
    path.push(`C ${mx} ${y0}, ${mx} ${y1} ${x1} ${y1}`);
    x0 = x1;
    y0 = y1;
  }

  // Curve back to the start point
  x1 = l.source.x1;
  y1 = l.y0 - w2;
  mx = x0 + ((x1 - x0) / 2);
  path.push(`C ${mx} ${y0}, ${mx} ${y1} ${x1} ${y1}`);

  // Close the path
  path.push('z');

  return path.join(' ')
}

function sankeySteppedLink () {
  return steppedLink
}

/**
 * Merges two objects into a new object by making a deep merge.
 * The original two objects are left untouched.
 */
function merge (obj1, obj2) {
  const merged = {};
  extend(merged, obj1 || {});
  extend(merged, obj2 || {});
  return merged
}

class Sankey extends Chart {
  constructor (config, style) {
    super(config, style);

    this.mergeStyle({
      chartArea: { margin: { top: 0, right: 50, left: 50, bottom: 0 } },
      labels: { show: true, font: { size: 10, weight: 400 }, margin: 7 },
      blockHeader: {
        font: { size: 10, weight: 400 },
        offset: { y: 7 },
        align: 'center',
        maxWidth: null
      },
      streamHeader: { font: { size: 10, weight: 400 }, offset: { y: 7 } },
      blocks: {
        width: 15,
        padding: 15,
        strokeWidth: 2,
        color: (d, _state, _chart) => d.color || '#006699',
        tooltips: { maxWidth: 300, font: { size: 12 }, customize: () => {} }
      },
      streams: {
        color: (d, _state, _chart) => {
          // Check if there is the source or the target which is intermediary.
          // If only one is intermediary, we take it for the color.
          // Otherwise we take the source color.
          const sourceIsIntermed = d.source.targetLinks.length > 0;
          const targetIsIntermed = d.target.sourceLinks.length > 0;
          if (sourceIsIntermed && targetIsIntermed) return d.source.color || '#006699'
          if (sourceIsIntermed) return d.source.color || '#006699'
          if (targetIsIntermed) return d.target.color || '#006699'
          return d.source.color || '#006699'
        },
        // The stepped streams make use of dummy nodes and pass explicitly through every level.
        stepped: false,
        tooltips: { maxWidth: 300, font: { size: 12 }, customize: () => {} }
      }
    });
    this.mergeStyle(style);

    this._chartHeight = (
      config.height ||
      (() => Math.max(300, Math.min(550, document.documentElement.clientHeight - 100)))
    );

    this._labelFn = (
      config.labelFn ||
      ((d, _state, _chart) => {
        return (d && d.name) || ''
      })
    );

    this._blockSort = config.blockSort || undefined;

    this._blockHeader = config.blockHeader || null;
    this._streamHeader = config.streamHeader || null;

    // The column widths; by default each column has the same width.
    this._columnWidths = (
      config.columnWidths ||
      ((nColumns, width) => new Array(nColumns).fill(width / nColumns))
    );

    this._blockTooltip = null;

    // Configuration for the tooltips for the blocks
    // Configuration options:
    //   - enabled [boolean]: Enable or disable the tooltips
    //   - text [function]: The text to display (use '\n' for a new line)
    //   - init, prerender, render [function]: For custom rendering of the tooltip.
    //     If one of these functions is not null, the text option and default content are disabled
    //     and custom rendering is enabled.
    const btconfig = config.blockTooltips || {};
    this._blockTooltipConfig = {
      enabled: typeof btconfig.enabled === 'undefined' ? true : btconfig.enabled,
      text: typeof btconfig.text === 'undefined' ? null : btconfig.text,
      init: typeof btconfig.init === 'undefined' ? null : btconfig.init,
      prerender: typeof btconfig.prerender === 'undefined' ? null : btconfig.prerender,
      render: typeof btconfig.render === 'undefined' ? null : btconfig.render
    };

    this._streamTooltip = null;
    const stconfig = config.streamTooltips || {};
    this._streamTooltipConfig = {
      enabled: typeof stconfig.enabled === 'undefined' ? true : stconfig.enabled,
      text: typeof stconfig.text === 'undefined' ? null : stconfig.text,
      init: typeof stconfig.init === 'undefined' ? null : stconfig.init,
      prerender: typeof stconfig.prerender === 'undefined' ? null : stconfig.prerender,
      render: typeof stconfig.render === 'undefined' ? null : stconfig.render
    };
  }

  initChart (node, state) {
    // Make sure the root node has dvSankey class
    node.classList.add('dvSankey');

    // Create the SVG groups for the different parts of the diagram
    select(node).append('g').attr('class', 'dvStreams');
    select(node).append('g').attr('class', 'dvBlocks');
    select(node).append('g').attr('class', 'dvLabels');
    select(node).append('g').attr('class', 'dvBlockHeader');
    select(node).append('g').attr('class', 'dvStreamHeader');

    // Create the tooltips if required
    if (this._blockTooltipConfig.enabled) {
      this._blockTooltip = new Tooltip({}, {});
      this._style.blocks.tooltips.customize(this._blockTooltip, state, this);
      this._blockTooltip.subscribe('init', this._initBlockTooltip.bind(this));
      this._blockTooltip.subscribe('prerender', this._prerenderBlockTooltip.bind(this));
      this._blockTooltip.subscribe('render', this._renderBlockTooltip.bind(this));
    }

    if (this._streamTooltipConfig.enabled) {
      this._streamTooltip = new Tooltip({}, {});
      this._style.streams.tooltips.customize(this._streamTooltip, state, this);
      this._streamTooltip.subscribe('init', this._initStreamTooltip.bind(this));
      this._streamTooltip.subscribe('prerender', this._prerenderStreamTooltip.bind(this));
      this._streamTooltip.subscribe('render', this._renderStreamTooltip.bind(this));
    }
  }

  prerenderChart (node, state) {
    this.publish('prerenderWillStart', { node, state });

    const st = this._style;

    // If columnLabels style is defined, apply it to the blockHeader and streamHeader styles.
    if (st.columnLabels) {
      console.warn('[Sankey] columnLabels style is deprecated, use blockHeader style instead.');
      this._style.blockHeader = merge(this._style.blockHeader, this._style.columnLabels);
    }

    // Extract the data
    const d = {};
    this.requiredDataSources.forEach(ds => {
      d[ds] = this.data(ds);
    });
    this._data = this.dataExtractor ? this.dataExtractor(d, this.state, this) : d;

    this._cleanData();

    // Set the height of the diagram
    this.height = typeof this._height === 'function'
      ? this._chartHeight(node, state, this)
      : this._chartHeight;

    // Calculate the height of the block and stream labels if there should be any
    const blockHeaderHeight = this._blockHeader
      ? st.blockHeader.font.size + st.blockHeader.offset.y
      : 0;

    const streamHeaderHeight = this._streamHeader
      ? st.streamHeader.font.size + st.streamHeader.offset.y
      : 0;

    let headerHeight = blockHeaderHeight + streamHeaderHeight;

    let sankeyExtent = [
      [
        st.chartArea.margin.left,
        st.chartArea.margin.top + headerHeight
      ],
      [
        this.width - st.chartArea.margin.right,
        this.height - st.chartArea.margin.bottom
      ]
    ];

    this._graph = this._calculateDiagram(sankeyExtent);

    this._prerenderBlockHeader(node, state);
    this._prerenderStreamHeader(node, state);

    // Get the height of the block headers.
    // If there are multi-line header labels, they might alter the previously computed header
    // height, in which case we need to recompute the header diagram again.
    if (this._blockHeader) {
      const computedBlockHeaderHeight = selectAll('.dvBlockHeader text').nodes()
        .map(n => {
          return n.getBoundingClientRect().height
        })
        .reduce((a, b) => a > b ? a : b) + st.blockHeader.offset.y;

      if (computedBlockHeaderHeight > blockHeaderHeight) {
        headerHeight = computedBlockHeaderHeight + streamHeaderHeight;
      }

      sankeyExtent = [
        [
          st.chartArea.margin.left,
          st.chartArea.margin.top + headerHeight
        ],
        [
          this.width - st.chartArea.margin.right,
          this.height - st.chartArea.margin.bottom
        ]
      ];

      this._graph = this._calculateDiagram(sankeyExtent);
    }

    // Draw the labels for source and destination to get the maximum width.
    if (this._style.labels.show) {
      // Get the label text. This can be a string, or an object with keys `label` and `position`
      this._labels = this._data.nodes.map(d => {
        let lbl = this._labelFn(d, state, this) || '';
        if (typeof lbl === 'string') {
          lbl = { label: lbl, position: 'default' };
        }
        lbl.node = d;
        lbl.position = lbl.position || 'default';

        // Decide if this is a source (position = left) label, or a destination (position = right)
        // label.
        if (lbl.position === 'left') lbl.type = 'src';
        if (lbl.position === 'right') lbl.type = 'dest';
        if (lbl.position === 'default') {
          lbl.type = (d.sourceLinks.length > 0 && d.targetLinks.length === 0) ? 'src' : 'dest';
        }

        return lbl
      });

      select(node).select('g.dvLabels')
        .selectAll('text.dvSrc')
        .data(this._labels.filter(lbl => lbl.type === 'src'))
        .join('text')
        .attr('class', 'dvSrc')
        .text(d => d.label)
        .style('font-size', `${this._style.labels.font.size}pt`)
        .style('font-weight', this._style.labels.font.weight);

      this._srcLabelsWidth = Math.max(
        [...select(node).selectAll('g.dvLabels text.dvSrc').nodes().map(elem => {
          return elem.getBoundingClientRect().width
        })]
      );

      select(node).select('g.dvLabels')
        .selectAll('text.dvDest')
        .data(this._labels.filter(lbl => lbl.type === 'dest'))
        .join('text')
        .attr('class', 'dvDest')
        .text(d => d.label)
        .style('font-size', `${this._style.labels.font.size}pt`)
        .style('font-weight', this._style.labels.font.weight);

      this._destLabelsWidth = Math.max(
        [...select(node).selectAll('g.dvLabels text.dvDest').nodes().map(elem => {
          return elem.getBoundingClientRect().width
        })]
      );
    }

    this.publish('prerenderDidEnd', { node, state });
  }

  _prerenderBlockHeader (node, state) {
    if (!this._blockHeader) return

    const cols = {};
    this._data.nodes.forEach(n => {
      cols[n.layer] = cols[n.layer] || [];
      cols[n.layer].push(n);
    });

    select(node).select('g.dvBlockHeader')
      .selectAll('text')
      .data(Object.keys(cols).map(k => ({ column: +k, blocks: cols[k] })))
      .join('text')
      .attr('x', d => d.blocks[0].x1 - ((d.blocks[0].x1 - d.blocks[0].x0) / 2))
      .attr('y', this._style.blockHeader.font.size)
      .attr('text-anchor', (d, i, nodes) => {
        const al = x$1(
          this._style.blockHeader.align,
          { columnData: d, columnIndex: i, node: nodes[i], data: this._data },
          state,
          this
        );
        return ({ center: 'middle', left: 'start', right: 'end' })[al] || 'middle'
      })
      .text(d => this._blockHeader(d, state, this))
      .style('font-size', `${this._style.blockHeader.font.size}px`)
      .style('font-weight', this._style.blockHeader.font.weight)
      .call(sel => {
        // Wrap the block header labels if there is a maximum width defined.
        sel.each((d, i, elems) => {
          const maxWidth = x$1(
            this._style.blockHeader.maxWidth,
            { columnData: d, columnIndex: i, data: this._data },
            state,
            this
          );
          if (maxWidth > 0) {
            textWrap(elems[i], maxWidth, this._style.blockHeader.font.size * 1.25);
          }
        });
      });
  }

  _prerenderStreamHeader (node, state) {
    if (!this._streamHeader) return

    // Get the block columns first
    const cols = {};
    this._data.nodes.forEach(n => {
      cols[n.layer] = cols[n.layer] || [];
      cols[n.layer].push(n);
    });
    const colKeys = Object.keys(cols).map(k => +k);
    colKeys.sort();

    const data = [];
    for (let i = 0; i < colKeys.length - 1; i++) {
      data.push({
        column: colKeys[i],
        sourceBlocks: cols[i],
        targetBlocks: cols[i + 1]
      });
    }

    select(node).select('g.dvStreamHeader')
      .selectAll('text')
      .data(data)
      .join('text')
      .attr('x', d => {
        const x1 = d.sourceBlocks[0].x1 - ((d.sourceBlocks[0].x1 - d.sourceBlocks[0].x0) / 2);
        const x2 = d.targetBlocks[0].x1 - ((d.targetBlocks[0].x1 - d.targetBlocks[0].x0) / 2);
        return x1 + (x2 - x1) / 2
      })
      .attr('y', this._style.streamHeader.font.size)
      .attr('text-anchor', 'middle')
      .text(d => this._streamHeader(d, state, this))
      .style('font-size', `${this._style.streamHeader.font.size}px`)
      .style('font-weight', this._style.streamHeader.font.weight);
  }

  _calculateDiagram (sankeyExtent) {
    this._sankey = Sankey$1()
      .nodeWidth(this._style.blocks.width)
      .nodePadding(this._style.blocks.padding)
      .extent(sankeyExtent);

    // Apply the stepped streams only if set; old version don't support this option.
    if (this._style.streams.stepped) {
      if (!this._sankey.stepped) {
        console.warn('This version of d3-sankey does not support stepped streams.');
        this._style.streams.stepped = false;
      } else {
        this._sankey.stepped(this._style.streams.stepped);
      }
    }

    if (!this._sankey.columnWidths) {
      console.warn('This version of d3-sankey does not support setting the column widths.');
    } else {
      this._sankey.columnWidths(this._columnWidths);
    }

    if (typeof this._blockSort === 'function') {
      this._sankey.nodeSort(this._blockSort);

      // Link sort function is identical to block sort function on stream target.
      this._sankey.linkSort((a, b) => this._blockSort(a.target, b.target));
    }

    const sankey = this._sankey(this._data);
    return sankey
  }

  renderChart (node, state) {
    this.publish('renderWillStart', { node, state });

    const st = this._style;

    // Create the stream clipping paths. For each stream we create a clipping path.
    this._streamClips = select(this.defs())
      .selectAll(`clipPath.dvClipStream_${this.id}`)
      .data(this._graph.links)
      .join('clipPath')
      .attr('id', (d, i) => `dvClipStream_${this.id}_${i}`)
      .attr('class', `dvClipStream_${this.id}`)
      .selectAll('rect')
      .data(d => [d])
      .join('rect')
      .attr('x', d => Math.max(d.source.x0, d.source.x1))
      .attr('y', d => Math.min(d.y0, d.y1) - Math.max(1, d.width))
      .attr('width', d => Math.min(d.target.x0, d.target.x1) - Math.max(d.source.x0, d.source.x1))
      .attr('height', d => Math.abs(d.y0 - d.y1) + 2 * Math.max(1, d.width));

    // Add the links (aka streams)
    select(node)
      .select('g.dvStreams')
      .selectAll('path')
      .data(this._graph.links)
      .join('path')
      .attr('d', st.streams.stepped ? sankeySteppedLink() : sankeyLinkHorizontal())
      .attr('clip-path', (d, i) => st.streams.stepped ? '' : `url(#dvClipStream_${this.id}_${i})`)
      .style('stroke', d => st.streams.stepped ? '#fff' : st.streams.color(d, state, this))
      .style('stroke-width', d => st.streams.stepped ? 1 : Math.max(1, d.width))
      .style('fill', d => st.streams.stepped ? st.streams.color(d, state, this) : 'none')
      .call(this._streamTooltip.bindTooltip());

    // Add the nodes (aka blocks)
    select(node)
      .select('g.dvBlocks')
      .selectAll('rect')
      .data(this._graph.nodes)
      .join('rect')
      .attr('x', d => d.x0)
      .attr('y', d => d.y0 - st.blocks.strokeWidth / 2)
      .attr('height', d => d.y1 - d.y0 + st.blocks.strokeWidth)
      .attr('width', this._sankey.nodeWidth())
      .attr('fill', d => st.blocks.color(d, state, this))
      .attr('stroke-width', st.blocks.strokeWidth)
      .style('stroke', '#fff')
      .on('mouseover', (evt, d) => {
        select(node).selectAll('.dvHover').nodes().forEach(n => n.classList.remove('dvHover'));
        select(node).selectAll('.dvBkgd').nodes().forEach(n => n.classList.remove('dvBkgd'));
        select(node).select('g.dvStreams').selectAll('path')
          .each((link, i, nodes) => {
            if (d.sourceLinks.indexOf(link) > -1 || d.targetLinks.indexOf(link) > -1) {
              nodes[i].classList.add('dvHover');
            } else {
              nodes[i].classList.add('dvBkgd');
            }
          });
      })
      .on('mouseleave', _d => {
        select(node).selectAll('.dvHover').nodes().forEach(n => n.classList.remove('dvHover'));
        select(node).selectAll('.dvBkgd').nodes().forEach(n => n.classList.remove('dvBkgd'));
      })
      .call(this._blockTooltip.bindTooltip());

    // Set the position for the labels
    if (this._style.labels.show) {
      select(node).select('g.dvLabels')
        .selectAll('text.dvSrc')
        .data(this._labels.filter(lbl => lbl.type === 'src').map(lbl => lbl.node))
        .join('text')
        .attr('x', d => d.x0 - st.labels.margin)
        .attr('y', d => d.y0 + (d.y1 - d.y0) / 2)
        .attr('text-anchor', 'end')
        .call(sel => {
          sel.each((d, i, elems) => {
            textWrap(
              elems[i],
              this._style.chartArea.margin.left - st.labels.margin,
              this._style.labels.font.size * 1.25
            );
            const h = elems[i].getBoundingClientRect().height;
            const y = parseFloat(elems[i].getAttribute('y'));
            const dy = y - h / 2 + this._style.labels.font.size * 1.25;
            elems[i].setAttribute('transform', `translate(0 ${dy - y})`);
          });
        });

      select(node).select('g.dvLabels')
        .selectAll('text.dvDest')
        .data(this._labels.filter(lbl => lbl.type === 'dest').map(lbl => lbl.node))
        .join('text')
        .attr('x', d => d.x1 + st.labels.margin)
        .attr('y', d => d.y0 + (d.y1 - d.y0) / 2)
        .call(sel => {
          sel.each((_d, i, elems) => {
            textWrap(
              elems[i],
              this._style.chartArea.margin.right - st.labels.margin,
              this._style.labels.font.size * 1.25
            );
            const h = elems[i].getBoundingClientRect().height;
            const y = parseFloat(elems[i].getAttribute('y'));
            const y2 = y - h / 2 + this._style.labels.font.size * 1.25;
            elems[i].setAttribute('transform', `translate(0 ${y2 - y})`);
          });
        });
    }

    this.publish('renderDidEnd', { node, state });
  }

  /**
   * Takes the transformed data as input (in `this._origData`) and removes null-value links and
   * unused links. This function is idem-potent, i.e. it can be executed several times.
   */
  _cleanData () {
    // Data cleaning only needs to be done if the graph has not yet been built. This can be figured
    // out e.g. by inspecting one of the nodes to see if there are source or target links registered
    // with the node.
    if (typeof this._data.nodes[0].sourceLinks !== 'undefined') return

    // Remove links with invalid or null values
    this._data.links = this._data.links.filter(v => v.value !== null && isFinite(v.value));

    // Make a list of the used nodes
    const usedNodes = Array.from(new Set(this._data.links.map(v => [v.source, v.target]).flat(1)));
    usedNodes.sort((a, b) => +a - +b);

    // Remove the unused nodes
    this._data.nodes = this._data.nodes.filter(v => usedNodes.indexOf(+v.node) >= 0);

    // Redefine the node IDs
    this._data.nodes.forEach(v => {
      v.node = usedNodes.indexOf(v.node);
    });

    // Update also the source and target IDs of the links accordingly
    this._data.links.forEach(v => {
      v.source = usedNodes.indexOf(v.source);
      v.target = usedNodes.indexOf(v.target);
    });
  }

  _initBlockTooltip (_evt, d, tooltip) {
    // If a custom rendering function is defined call the provided init function
    if (
      this._blockTooltipConfig.init || this._blockTooltipConfig.prerender ||
      this._blockTooltipConfig.render
    ) {
      (
        this._blockTooltipConfig.init &&
        this._blockTooltipConfig.init(d.data.value, d.node, this._state, tooltip)
      );
      return
    }

    // If no custom rendering function is defined we simply add a text node
    select(d.node).append('text');
  }

  _prerenderBlockTooltip (_evt, d, tooltip) {
    // If a custom rendering function is defined call the provided prerender function
    if (
      this._blockTooltipConfig.init ||
      this._blockTooltipConfig.prerender || this._blockTooltipConfig.render
    ) {
      (
        this._blockTooltipConfig.prerender &&
        this._blockTooltipConfig.prerender(d.data.value, d.node, this._state, tooltip)
      );
      return
    }

    const txt = this._blockTooltipConfig.text
      ? this._blockTooltipConfig.text(d.data.value, d.node, this._state, tooltip)
      : this._labelFn(d.data.value, this._state, this) || '';

    select(d.node).select('text')
      .attr('x', tooltip.viewRect.left)
      .attr('y', tooltip.viewRect.top + 12)
      .style('font-size', `${this._style.blocks.tooltips.font.size}px`)
      .text(txt);

    const txtNode = select(d.node).select('text').node();
    textWrap(
      txtNode,
      this._style.blocks.tooltips.maxWidth,
      this._style.blocks.tooltips.font.size * 1.25
    );
    const cr = txtNode.getBoundingClientRect();
    tooltip.viewRect.setHeight(cr.height);
    tooltip.viewRect.setWidth(cr.width);
  }

  _renderBlockTooltip (_evt, d, tooltip) {
    // If a custom rendering function is defined call the provided render function
    if (
      this._blockTooltipConfig.init ||
      this._blockTooltipConfig.prerender ||
      this._blockTooltipConfig.render
    ) {
      (
        this._blockTooltipConfig.render &&
        this._blockTooltipConfig.render(d.data.value, d.node, this._state, tooltip)
      );
    }
  }

  _initStreamTooltip (_evt, d, tooltip) {
    // If a custom rendering function is defined call the provided init function
    if (
      this._streamTooltipConfig.init || this._streamTooltipConfig.prerender ||
      this._streamTooltipConfig.render
    ) {
      (
        this._streamTooltipConfig.init &&
        this._streamTooltipConfig.init(d.data.value, d.node, this._state, tooltip)
      );
      return
    }

    // If no custom rendering function is defined we simply add a text node
    select(d.node).append('text');
  }

  _prerenderStreamTooltip (_evt, d, tooltip) {
    // If a custom rendering function is defined call the provided prerender function
    if (
      this._streamTooltipConfig.init ||
      this._streamTooltipConfig.prerender ||
      this._streamTooltipConfig.render
    ) {
      (
        this._streamTooltipConfig.prerender &&
        this._streamTooltipConfig.prerender(d.data.value, d.node, this._state, tooltip)
      );
      return
    }

    const txt = this._streamTooltipConfig.text
      ? this._streamTooltipConfig.text(d.data.value, d.node, this._state, tooltip)
      : `${this._labelFn(d.data.value.source, this._state, this) || ''} - ` +
        `${this._labelFn(d.data.value.target, this._state, this) || ''}`;

    select(d.node).select('text')
      .attr('x', tooltip.viewRect.left)
      .attr('y', tooltip.viewRect.top + 12)
      .style('font-size', `${this._style.streams.tooltips.font.size}px`)
      .text(txt);

    const txtNode = select(d.node).select('text').node();
    textWrap(
      txtNode,
      this._style.streams.tooltips.maxWidth,
      this._style.streams.tooltips.font.size * 1.25
    );
    const cr = txtNode.getBoundingClientRect();
    tooltip.viewRect.setHeight(cr.height);
    tooltip.viewRect.setWidth(cr.width);
  }

  _renderStreamTooltip (_evt, d, tooltip) {
    // If a custom rendering function is defined call the provided render function
    if (
      this._streamTooltipConfig.init ||
      this._streamTooltipConfig.prerender || this._streamTooltipConfig.render
    ) {
      (
        this._streamTooltipConfig.render &&
        this._streamTooltipConfig.render(d.data.value, d.node, this._state, tooltip)
      );
    }
  }
}

function sankey (config, style) {
  return new Sankey(config, style)
}

var noop = {value: () => {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get$1(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set$1(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set$1(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get$1(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set$1(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

var frame = 0, // is an animation frame pending?
    timeout$1 = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout$1 = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout$1) timeout$1 = clearTimeout(timeout$1);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout$1 = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}

function timeout(callback, delay, time) {
  var t = new Timer;
  delay = delay == null ? 0 : +delay;
  t.restart(elapsed => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}

var emptyOn = dispatch("start", "end", "cancel", "interrupt");
var emptyTween = [];

var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;

function schedule(node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}

function init(node, id) {
  var schedule = get(node, id);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}

function set(node, id) {
  var schedule = get(node, id);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}

function get(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = timer(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return timeout(start);

      // Interrupt the active transition, if any.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions.
      else if (+i < id) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    timeout(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(node, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) return; // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}

function interrupt(node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
    active = schedule.state > STARTING && schedule.state < ENDING;
    schedule.state = ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
}

function selection_interrupt(name) {
  return this.each(function() {
    interrupt(this, name);
  });
}

function tweenRemove(id, name) {
  var tween0, tween1;
  return function() {
    var schedule = set(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error;
  return function() {
    var schedule = set(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

function transition_tween(name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = get(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
}

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function() {
    var schedule = set(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });

  return function(node) {
    return get(node, id).value[name];
  };
}

function interpolate(a, b) {
  var c;
  return (typeof b === "number" ? interpolateNumber
      : b instanceof color ? interpolateRgb
      : (c = color(b)) ? (b = c, interpolateRgb)
      : interpolateString)(a, b);
}

function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrConstantNS(fullname, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function attrFunctionNS(fullname, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function transition_attr(name, value) {
  var fullname = namespace(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate;
  return this.attrTween(name, typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, tweenValue(this, "attr." + name, value))
      : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname)
      : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
}

function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}

function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}

function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function transition_attrTween(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  var fullname = namespace(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}

function delayFunction(id, value) {
  return function() {
    init(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function() {
    init(this, id).delay = value;
  };
}

function transition_delay(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? delayFunction
          : delayConstant)(id, value))
      : get(this.node(), id).delay;
}

function durationFunction(id, value) {
  return function() {
    set(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function() {
    set(this, id).duration = value;
  };
}

function transition_duration(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? durationFunction
          : durationConstant)(id, value))
      : get(this.node(), id).duration;
}

function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error;
  return function() {
    set(this, id).ease = value;
  };
}

function transition_ease(value) {
  var id = this._id;

  return arguments.length
      ? this.each(easeConstant(id, value))
      : get(this.node(), id).ease;
}

function easeVarying(id, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (typeof v !== "function") throw new Error;
    set(this, id).ease = v;
  };
}

function transition_easeVarying(value) {
  if (typeof value !== "function") throw new Error;
  return this.each(easeVarying(this._id, value));
}

function transition_filter(match) {
  if (typeof match !== "function") match = matcher(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Transition(subgroups, this._parents, this._name, this._id);
}

function transition_merge(transition) {
  if (transition._id !== this._id) throw new Error;

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Transition(merges, this._parents, this._name, this._id);
}

function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0, on1, sit = start(name) ? init : set;
  return function() {
    var schedule = sit(this, id),
        on = schedule.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule.on = on1;
  };
}

function transition_on(name, listener) {
  var id = this._id;

  return arguments.length < 2
      ? get(this.node(), id).on.on(name)
      : this.each(onFunction(id, name, listener));
}

function removeFunction(id) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id) return;
    if (parent) parent.removeChild(this);
  };
}

function transition_remove() {
  return this.on("end.remove", removeFunction(this._id));
}

function transition_select(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = selector(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        schedule(subgroup[i], name, id, i, subgroup, get(node, id));
      }
    }
  }

  return new Transition(subgroups, this._parents, name, id);
}

function transition_selectAll(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = selectorAll(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = get(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            schedule(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new Transition(subgroups, parents, name, id);
}

var Selection = selection.prototype.constructor;

function transition_selection() {
  return new Selection(this._groups, this._parents);
}

function styleNull(name, interpolate) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = styleValue(this, name),
        string1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}

function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = styleValue(this, name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function styleFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = styleValue(this, name),
        value1 = value(this),
        string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function styleMaybeRemove(id, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
  return function() {
    var schedule = set(this, id),
        on = schedule.on,
        listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);

    schedule.on = on1;
  };
}

function transition_style(name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss : interpolate;
  return value == null ? this
      .styleTween(name, styleNull(name, i))
      .on("end.style." + name, styleRemove(name))
    : typeof value === "function" ? this
      .styleTween(name, styleFunction(name, i, tweenValue(this, "style." + name, value)))
      .each(styleMaybeRemove(this._id, name))
    : this
      .styleTween(name, styleConstant(name, i, value), priority)
      .on("end.style." + name, null);
}

function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}

function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}

function transition_styleTween(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

function transition_text(value) {
  return this.tween("text", typeof value === "function"
      ? textFunction(tweenValue(this, "text", value))
      : textConstant(value == null ? "" : value + ""));
}

function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}

function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function transition_textTween(value) {
  var key = "text";
  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, textTween(value));
}

function transition_transition() {
  var name = this._name,
      id0 = this._id,
      id1 = newId();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = get(node, id0);
        schedule(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new Transition(groups, this._parents, name, id1);
}

function transition_end() {
  var on0, on1, that = this, id = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = {value: reject},
        end = {value: function() { if (--size === 0) resolve(); }};

    that.each(function() {
      var schedule = set(this, id),
          on = schedule.on;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }

      schedule.on = on1;
    });

    // The selection was empty, resolve end immediately
    if (size === 0) resolve();
  });
}

var id = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function newId() {
  return ++id;
}

var selection_prototype = selection.prototype;

Transition.prototype = {
  constructor: Transition,
  select: transition_select,
  selectAll: transition_selectAll,
  selectChild: selection_prototype.selectChild,
  selectChildren: selection_prototype.selectChildren,
  filter: transition_filter,
  merge: transition_merge,
  selection: transition_selection,
  transition: transition_transition,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: transition_on,
  attr: transition_attr,
  attrTween: transition_attrTween,
  style: transition_style,
  styleTween: transition_styleTween,
  text: transition_text,
  textTween: transition_textTween,
  remove: transition_remove,
  tween: transition_tween,
  delay: transition_delay,
  duration: transition_duration,
  ease: transition_ease,
  easeVarying: transition_easeVarying,
  end: transition_end,
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: cubicInOut
};

function inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id} not found`);
    }
  }
  return timing;
}

function selection_transition(name) {
  var id,
      timing;

  if (name instanceof Transition) {
    id = name._id, name = name._name;
  } else {
    id = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        schedule(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new Transition(groups, this._parents, name, id);
}

selection.prototype.interrupt = selection_interrupt;
selection.prototype.transition = selection_transition;

function count(node) {
  var sum = 0,
      children = node.children,
      i = children && children.length;
  if (!i) sum = 1;
  else while (--i >= 0) sum += children[i].value;
  node.value = sum;
}

function node_count() {
  return this.eachAfter(count);
}

function node_each(callback, that) {
  let index = -1;
  for (const node of this) {
    callback.call(that, node, ++index, this);
  }
  return this;
}

function node_eachBefore(callback, that) {
  var node = this, nodes = [node], children, i, index = -1;
  while (node = nodes.pop()) {
    callback.call(that, node, ++index, this);
    if (children = node.children) {
      for (i = children.length - 1; i >= 0; --i) {
        nodes.push(children[i]);
      }
    }
  }
  return this;
}

function node_eachAfter(callback, that) {
  var node = this, nodes = [node], next = [], children, i, n, index = -1;
  while (node = nodes.pop()) {
    next.push(node);
    if (children = node.children) {
      for (i = 0, n = children.length; i < n; ++i) {
        nodes.push(children[i]);
      }
    }
  }
  while (node = next.pop()) {
    callback.call(that, node, ++index, this);
  }
  return this;
}

function node_find(callback, that) {
  let index = -1;
  for (const node of this) {
    if (callback.call(that, node, ++index, this)) {
      return node;
    }
  }
}

function node_sum(value) {
  return this.eachAfter(function(node) {
    var sum = +value(node.data) || 0,
        children = node.children,
        i = children && children.length;
    while (--i >= 0) sum += children[i].value;
    node.value = sum;
  });
}

function node_sort(compare) {
  return this.eachBefore(function(node) {
    if (node.children) {
      node.children.sort(compare);
    }
  });
}

function node_path(end) {
  var start = this,
      ancestor = leastCommonAncestor(start, end),
      nodes = [start];
  while (start !== ancestor) {
    start = start.parent;
    nodes.push(start);
  }
  var k = nodes.length;
  while (end !== ancestor) {
    nodes.splice(k, 0, end);
    end = end.parent;
  }
  return nodes;
}

function leastCommonAncestor(a, b) {
  if (a === b) return a;
  var aNodes = a.ancestors(),
      bNodes = b.ancestors(),
      c = null;
  a = aNodes.pop();
  b = bNodes.pop();
  while (a === b) {
    c = a;
    a = aNodes.pop();
    b = bNodes.pop();
  }
  return c;
}

function node_ancestors() {
  var node = this, nodes = [node];
  while (node = node.parent) {
    nodes.push(node);
  }
  return nodes;
}

function node_descendants() {
  return Array.from(this);
}

function node_leaves() {
  var leaves = [];
  this.eachBefore(function(node) {
    if (!node.children) {
      leaves.push(node);
    }
  });
  return leaves;
}

function node_links() {
  var root = this, links = [];
  root.each(function(node) {
    if (node !== root) { // Don’t include the root’s parent, if any.
      links.push({source: node.parent, target: node});
    }
  });
  return links;
}

function* node_iterator() {
  var node = this, current, next = [node], children, i, n;
  do {
    current = next.reverse(), next = [];
    while (node = current.pop()) {
      yield node;
      if (children = node.children) {
        for (i = 0, n = children.length; i < n; ++i) {
          next.push(children[i]);
        }
      }
    }
  } while (next.length);
}

function hierarchy(data, children) {
  if (data instanceof Map) {
    data = [undefined, data];
    if (children === undefined) children = mapChildren;
  } else if (children === undefined) {
    children = objectChildren;
  }

  var root = new Node(data),
      node,
      nodes = [root],
      child,
      childs,
      i,
      n;

  while (node = nodes.pop()) {
    if ((childs = children(node.data)) && (n = (childs = Array.from(childs)).length)) {
      node.children = childs;
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = childs[i] = new Node(childs[i]));
        child.parent = node;
        child.depth = node.depth + 1;
      }
    }
  }

  return root.eachBefore(computeHeight);
}

function node_copy() {
  return hierarchy(this).eachBefore(copyData);
}

function objectChildren(d) {
  return d.children;
}

function mapChildren(d) {
  return Array.isArray(d) ? d[1] : null;
}

function copyData(node) {
  if (node.data.value !== undefined) node.value = node.data.value;
  node.data = node.data.data;
}

function computeHeight(node) {
  var height = 0;
  do node.height = height;
  while ((node = node.parent) && (node.height < ++height));
}

function Node(data) {
  this.data = data;
  this.depth =
  this.height = 0;
  this.parent = null;
}

Node.prototype = hierarchy.prototype = {
  constructor: Node,
  count: node_count,
  each: node_each,
  eachAfter: node_eachAfter,
  eachBefore: node_eachBefore,
  find: node_find,
  sum: node_sum,
  sort: node_sort,
  path: node_path,
  ancestors: node_ancestors,
  descendants: node_descendants,
  leaves: node_leaves,
  links: node_links,
  copy: node_copy,
  [Symbol.iterator]: node_iterator
};

function required(f) {
  if (typeof f !== "function") throw new Error;
  return f;
}

function constantZero() {
  return 0;
}

function constant$1(x) {
  return function() {
    return x;
  };
}

function roundNode(node) {
  node.x0 = Math.round(node.x0);
  node.y0 = Math.round(node.y0);
  node.x1 = Math.round(node.x1);
  node.y1 = Math.round(node.y1);
}

function treemapDice(parent, x0, y0, x1, y1) {
  var nodes = parent.children,
      node,
      i = -1,
      n = nodes.length,
      k = parent.value && (x1 - x0) / parent.value;

  while (++i < n) {
    node = nodes[i], node.y0 = y0, node.y1 = y1;
    node.x0 = x0, node.x1 = x0 += node.value * k;
  }
}

function treemapSlice(parent, x0, y0, x1, y1) {
  var nodes = parent.children,
      node,
      i = -1,
      n = nodes.length,
      k = parent.value && (y1 - y0) / parent.value;

  while (++i < n) {
    node = nodes[i], node.x0 = x0, node.x1 = x1;
    node.y0 = y0, node.y1 = y0 += node.value * k;
  }
}

var phi = (1 + Math.sqrt(5)) / 2;

function squarifyRatio(ratio, parent, x0, y0, x1, y1) {
  var rows = [],
      nodes = parent.children,
      row,
      nodeValue,
      i0 = 0,
      i1 = 0,
      n = nodes.length,
      dx, dy,
      value = parent.value,
      sumValue,
      minValue,
      maxValue,
      newRatio,
      minRatio,
      alpha,
      beta;

  while (i0 < n) {
    dx = x1 - x0, dy = y1 - y0;

    // Find the next non-empty node.
    do sumValue = nodes[i1++].value; while (!sumValue && i1 < n);
    minValue = maxValue = sumValue;
    alpha = Math.max(dy / dx, dx / dy) / (value * ratio);
    beta = sumValue * sumValue * alpha;
    minRatio = Math.max(maxValue / beta, beta / minValue);

    // Keep adding nodes while the aspect ratio maintains or improves.
    for (; i1 < n; ++i1) {
      sumValue += nodeValue = nodes[i1].value;
      if (nodeValue < minValue) minValue = nodeValue;
      if (nodeValue > maxValue) maxValue = nodeValue;
      beta = sumValue * sumValue * alpha;
      newRatio = Math.max(maxValue / beta, beta / minValue);
      if (newRatio > minRatio) { sumValue -= nodeValue; break; }
      minRatio = newRatio;
    }

    // Position and record the row orientation.
    rows.push(row = {value: sumValue, dice: dx < dy, children: nodes.slice(i0, i1)});
    if (row.dice) treemapDice(row, x0, y0, x1, value ? y0 += dy * sumValue / value : y1);
    else treemapSlice(row, x0, y0, value ? x0 += dx * sumValue / value : x1, y1);
    value -= sumValue, i0 = i1;
  }

  return rows;
}

var squarify = (function custom(ratio) {

  function squarify(parent, x0, y0, x1, y1) {
    squarifyRatio(ratio, parent, x0, y0, x1, y1);
  }

  squarify.ratio = function(x) {
    return custom((x = +x) > 1 ? x : 1);
  };

  return squarify;
})(phi);

function d3treemap() {
  var tile = squarify,
      round = false,
      dx = 1,
      dy = 1,
      paddingStack = [0],
      paddingInner = constantZero,
      paddingTop = constantZero,
      paddingRight = constantZero,
      paddingBottom = constantZero,
      paddingLeft = constantZero;

  function treemap(root) {
    root.x0 =
    root.y0 = 0;
    root.x1 = dx;
    root.y1 = dy;
    root.eachBefore(positionNode);
    paddingStack = [0];
    if (round) root.eachBefore(roundNode);
    return root;
  }

  function positionNode(node) {
    var p = paddingStack[node.depth],
        x0 = node.x0 + p,
        y0 = node.y0 + p,
        x1 = node.x1 - p,
        y1 = node.y1 - p;
    if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
    if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
    node.x0 = x0;
    node.y0 = y0;
    node.x1 = x1;
    node.y1 = y1;
    if (node.children) {
      p = paddingStack[node.depth + 1] = paddingInner(node) / 2;
      x0 += paddingLeft(node) - p;
      y0 += paddingTop(node) - p;
      x1 -= paddingRight(node) - p;
      y1 -= paddingBottom(node) - p;
      if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
      if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
      tile(node, x0, y0, x1, y1);
    }
  }

  treemap.round = function(x) {
    return arguments.length ? (round = !!x, treemap) : round;
  };

  treemap.size = function(x) {
    return arguments.length ? (dx = +x[0], dy = +x[1], treemap) : [dx, dy];
  };

  treemap.tile = function(x) {
    return arguments.length ? (tile = required(x), treemap) : tile;
  };

  treemap.padding = function(x) {
    return arguments.length ? treemap.paddingInner(x).paddingOuter(x) : treemap.paddingInner();
  };

  treemap.paddingInner = function(x) {
    return arguments.length ? (paddingInner = typeof x === "function" ? x : constant$1(+x), treemap) : paddingInner;
  };

  treemap.paddingOuter = function(x) {
    return arguments.length ? treemap.paddingTop(x).paddingRight(x).paddingBottom(x).paddingLeft(x) : treemap.paddingTop();
  };

  treemap.paddingTop = function(x) {
    return arguments.length ? (paddingTop = typeof x === "function" ? x : constant$1(+x), treemap) : paddingTop;
  };

  treemap.paddingRight = function(x) {
    return arguments.length ? (paddingRight = typeof x === "function" ? x : constant$1(+x), treemap) : paddingRight;
  };

  treemap.paddingBottom = function(x) {
    return arguments.length ? (paddingBottom = typeof x === "function" ? x : constant$1(+x), treemap) : paddingBottom;
  };

  treemap.paddingLeft = function(x) {
    return arguments.length ? (paddingLeft = typeof x === "function" ? x : constant$1(+x), treemap) : paddingLeft;
  };

  return treemap;
}

var treemapResquarify = (function custom(ratio) {

  function resquarify(parent, x0, y0, x1, y1) {
    if ((rows = parent._squarify) && (rows.ratio === ratio)) {
      var rows,
          row,
          nodes,
          i,
          j = -1,
          n,
          m = rows.length,
          value = parent.value;

      while (++j < m) {
        row = rows[j], nodes = row.children;
        for (i = row.value = 0, n = nodes.length; i < n; ++i) row.value += nodes[i].value;
        if (row.dice) treemapDice(row, x0, y0, x1, value ? y0 += (y1 - y0) * row.value / value : y1);
        else treemapSlice(row, x0, y0, value ? x0 += (x1 - x0) * row.value / value : x1, y1);
        value -= row.value;
      }
    } else {
      parent._squarify = rows = squarifyRatio(ratio, parent, x0, y0, x1, y1);
      rows.ratio = ratio;
    }
  }

  resquarify.ratio = function(x) {
    return custom((x = +x) > 1 ? x : 1);
  };

  return resquarify;
})(phi);

class Treemap extends Chart {
  constructor (config, style) {
    super(config, style);

    this.mergeStyle({
      treemap: {
        paddingInner: 1,
        customize: () => {},
        tilingScheme: 'squarify',
        tilingColumns: null
      },
      labels: {
        font: { size: 12 },
        margin: { left: 5, top: 5, right: 5, bottom: 5 },
        hideOnOverflow: true,
        truncateText: '…',
        truncatedLabelMinLen: 3,
        customize: () => {}
      },
      valueLabels: {
        show: false,
        position: 'right',
        font: { size: 12 },
        margin: { left: 5, top: 5, right: 5, bottom: 5 },
        hideOnOverflow: true,
        truncateText: '…',
        truncatedLabelMinLen: 3,
        customize: () => {}
      },
      tooltips: {
        maxWidth: 300,
        font: { size: 12 },
        customize: () => {}
      },
      header: {
        padding: { bottom: 3 },
        font: { size: 12, weight: 400, color: '#757575' },
        label: () => {},
        separator: () => {}
      },
      zoomHint: {
        show: true,
        color: '#ffffff66'
      }
    });
    this.mergeStyle(style);

    this._chartHeight = config.height || 500;
    this._rootLabel = config.rootLabel;

    this._zoomable = typeof config.zoomable === 'undefined' ? false : config.zoomable;

    // Functions (with default implementation) for extracting the values, labels and colors.
    this._valueFn = config.value || ((elem, _state) => elem.value || 0);

    // Function for returning the label.
    // The label function will get the treemap data element and the current state as arguments.
    // The treemap data element is the leave from the d3 treemap data.
    // The label is only shown in the treemap if there is enough of space available.
    // The label function can return a string or an array of strings. In the latter, the strings in
    // the array are tried one after each other until one is found which fits inside the rectangle.
    // The label is also used for the tooltip.
    this._labelFn = config.label || ((elem, _state) => elem.data.name || '');

    this._valueLabelFn = config.valueLabel || ((elem, _state) => elem.value || 0);

    this._rectColorFn = config.rectColor || ((elem, _state) => elem.data.color || '#006699');
    this._labelColorFn = config.labelColor || ((elem, _state) => elem.data.labelColor || '#fff');

    this._sortValueFn = config.sortValue || (d => d.value);
    this._sortOrder = config.sortOrder || (config.sortValue ? 'asc' : 'desc');

    // The aggregation options. The aggregation parameters are defined in the config with the
    // structure: { decisionFn: fn, aggregationFn: fn, threshold: number, minDepth: number }
    const aggOpts = config.aggregate || {};

    this._aggregationOptions = {
      aggregate: typeof config.aggregate === 'undefined'
        ? false
        : (typeof aggOpts.aggregate === 'undefined' ? true : aggOpts.aggregate),

      threshold: aggOpts.threshold || 0,
      minDepth: aggOpts.minDepth || 0
    };

    // The function which decides if we should aggregate two nodes or not. The function returns
    // true or false. This is the default aggregation function which considers the aggregation
    // options but the user is free to define a new function using the `.aggregate` method.
    this._aggregationDecisionFn = (
      aggOpts.decisionFn ||
      ((node, _state, depth) => {
        return (
          this._aggregationOptions.aggregate === true &&
          node.value <= this._aggregationOptions.threshold &&
          depth >= this._aggregationOptions.minDepth
        )
      })
    );

    // Default aggregation function only keeps values and sets a dummy default label.
    this._aggregationFn = (
      aggOpts.aggregationFn ||
      ((a, b, _state) => {
        return { label: 'Other values', value: a.value + b.value }
      })
    );

    this._tooltip = null;

    const tc = config.tooltips || {};
    this._tooltipConfig = {
      enabled: typeof tc.enabled === 'undefined' ? true : tc.enabled,
      text: tc.text || null,
      init: tc.init || null,
      prerender: tc.prerender || null,
      render: tc.render || null
    };
  }

  aggregate (aggregationDecision, aggregationFn) {
    if (typeof aggregationDecision === 'function') {
      this._aggregationDecisionFn = aggregationDecision;
      // If the user specifies an aggregation function we assume aggregation should happen
      this._aggregationOptions.aggregate = true;
    } else {
      Object.keys(aggregationDecision)
        .forEach(k => {
          this._aggregationOptions[k] = aggregationDecision[k];
        });
      // If there is no key `aggregate` but the user specifies the options (threshold and minDepth)
      // we assume aggregation should happen.
      if (!Object.prototype.hasOwnProperty.call(aggregationDecision, 'aggregate')) {
        this._aggregationOptions.aggregate = true;
      }
    }
    if (aggregationFn) this._aggregationFn = aggregationFn;
    return this
  }

  initChart (node, state) {
    // Add the treemap class to the root node
    node.classList.add('dvTreemap');

    // Create the SVG groups for the different parts of the treemap
    select(node).append('g').attr('class', 'dvTreemapHeader');
    select(node).append('g').attr('class', 'dvTreemapWrapper');
    select(node).select('g.dvTreemapWrapper').append('g').attr('class', 'dvRects');
    select(node).select('g.dvTreemapWrapper').append('g').attr('class', 'dvLabels');
    select(node).select('g.dvTreemapWrapper').append('g').attr('class', 'dvValueLabels');
    select(node).select('g.dvTreemapWrapper').append('g').attr('class', 'dvZoomHint');

    // An interaction layer on top for catching the events
    select(node).select('g.dvTreemapWrapper')
      .append('g')
      .attr('class', 'dvInteraction dvNoprint')
      .style('fill-opacity', 0);

    // Create the tooltips if required
    if (this._tooltipConfig.enabled) {
      this._tooltip = new Tooltip({}, {});
      this._style.tooltips.customize(this._tooltip, state, this);
      this._tooltip.subscribe('init', this._initTooltip.bind(this));
      this._tooltip.subscribe('prerender', this._prerenderTooltip.bind(this));
      this._tooltip.subscribe('render', this._renderTooltip.bind(this));
    }

    this.publish('init', { node, state });
  }

  prerenderChart (node, state) {
    this.publish('prerenderWillStart', { node, state });

    if (this._zoomable === true && state.has(`treemapZoomLevel_${this.id}`) === false) {
      // We have a zoomable treemap but the zoom level is not defined. We set it to 1.
      // We also set the id of the current selection.
      this.state.set(`treemapZoomLevel_${this.id}`, 1);
      this.state.set(`treemapSelection_${this.id}`, null);
    }

    // Create the treemap data structures. In case of a zoomable treemap, there will be a navigation
    // bar in the treemap header which can vary in height. We therefore need to calculate the
    // height of the treemap header first.

    // Get the data considering the state
    const d = {};
    this.requiredDataSources.forEach(ds => {
      d[ds] = this.data(ds);
    });
    this._tree = this.dataExtractor ? this.dataExtractor(d, this.state, this) : d;

    // Excecute the value functions
    this._tree = this._computeTreemapValues(this._tree);

    if (this._aggregationOptions.aggregate) {
      this._tree = this._aggregateTree(this._tree, this._aggregationDecisionFn);
    }

    // Delete values in intermediary nodes, only leaves should have defined values.
    this._tree = this._cleanIntermediaryTreemapValues(this._tree);

    // Keep only the data for the selected rect if there is a selection
    if (this.state.has(`treemapSelection_${this.id}`)) {
      const sel = this.state.get(`treemapSelection_${this.id}`);
      if (sel) this._tree = sel;
    }

    // Prepare the data for the treemap
    this._root = hierarchy(this._tree)
      .sum(d => d.value)
      .sort((a, b) => {
        return (
          ((b.data.hasBeenAggregated && -1) || this._sortValueFn(this._sortOrder === 'asc' ? a : b)) -
          ((a.data.hasBeenAggregated && -1) || this._sortValueFn(this._sortOrder === 'asc' ? b : a))
        )
      });

    // Compute aggregated nodes
    this._computeAggregatedNodes(this._root);

    // Build the treemap header
    if (this._zoomable) {
      this._headerLevels = [];
      let leaf = this._tree;
      while (leaf.depth > 0) {
        this._headerLevels.unshift(leaf);
        leaf = leaf.parent;
      }
      this._headerLevels.unshift(leaf);

      // The header values and the separator are put together in a formatted text which will be
      // rendered into the treemap header. For each value and separator there is the possibility to
      // customize the text by calling a styling function which should return a string value. If
      // no string is returned, a default value is taken instead.
      const levels = this._headerLevels.map((d, i) => {
        const customLabel = this._style.header.label(d, this.state, this, i + 1);
        return customLabel || (d.depth === 0 ? this._rootLabel || d.key || d.name : d.key || d.name)
      });

      const separators = this._headerLevels.slice(1).map((d, i) => {
        const sep = this._style.header.separator(d, this.state, this, i + 1);
        return sep || ' > '
      });

      const headerText = '<text>' + levels.map((d, i) => {
        return `<a idx="${i}">${d}</a>${separators[i] || ''}`
      }).join('') + '</text>';

      const renderer = new TextRenderer({
        width: this.width,
        fontSize: this._style.header.font.size,
        fontWeight: this._style.header.font.weight,
        linkColor: this._style.header.font.color
      });
      renderer.handleClickOnLink = this._handleHeaderClick.bind(this);
      renderer.render(headerText, select(node).select('.dvTreemapHeader').node(), {});
    }

    // Get the height of the header which will be added to the height of the treemap
    this._headerHeight = select(node).select('.dvTreemapHeader')
      .node().getBoundingClientRect().height + this._style.header.padding.bottom;

    // Set the height of the diagram
    const h = (
      (
        typeof this._chartHeight === 'function'
          ? this._chartHeight(this, state)
          : this._chartHeight
      ) + this._headerHeight
    );

    this.height = h;

    select(node).select('.dvTreemapHeader')
      .call(translate(0, 0));

    select(node).select('.dvTreemapWrapper')
      .call(translate(0, this._headerHeight));

    this.publish('prerenderDidEnd', { node, state });
  }

  renderChart (node, state) {
    this.publish('renderWillStart', { node, state });

    // Create the treemap and apply it to the data
    d3treemap()
      .tile((node, x0, y0, x1, y1) => {
        if (this._style.treemap.tilingScheme === 'squarify') {
          return treemapResquarify(node, x0, y0, x1, y1)
        }

        const nCols = x$1(this._style.treemap.tilingColumns,
          {
            width: x1 - x0,
            height: y1 - y1,
            node: node
          },
          this.state,
          this
        );
        treemapTiling(node, x0, y0, x1, y1, nCols);
      })
      .size([this.width, this.height - this._headerHeight])
      .paddingInner(this._style.treemap.paddingInner)
      .round(true)(this._root);

    const leaves = this._zoomable ? this._root.children : this._root.leaves();

    let rects = select(node)
      .select('.dvTreemapWrapper').select('.dvRects')
      .selectAll('rect')
      .data(leaves)
      .join('rect')
      .style('fill', d => this._rectColorFn(d, state))
      .on('click', this._handleTreemapClick.bind(this));

    // If the treemap has already rendered once, we make a transition in subsequent updates.
    // If we make a transition, we hide the current tooltip to prevent orphaned tooltips.
    if (this._renderedOnce) {
      this._tooltip.hide();
      rects = rects.transition();
    }

    // Set position and width of the rects
    rects
      .attr('x', d => d.x0)
      .attr('y', d => d.y0)
      .attr('width', d => d.x1 - d.x0)
      .attr('height', d => d.y1 - d.y0);
    this._renderedOnce = true;

    this._style.treemap.customize(rects, state, this);

    const labels = select(node)
      .select('.dvTreemapWrapper').select('.dvLabels')
      .selectAll('text')
      .data(leaves)
      .join('text')
      .attr('x', d => d.x0 + this._style.labels.margin.left)
      .attr('y', d => d.y0 + this._style.labels.margin.top + this._style.labels.font.size)
      .style('fill', d => this._labelColorFn(d, state))
      .style('font-size', `${this._style.labels.font.size}px`);

    // Fill the labels
    select(node)
      .select('.dvTreemapWrapper').select('.dvLabels')
      .selectAll('text')
      .data(leaves)
      .each((d, idx, nodes) => {
        // Make sure the node is visibile otherwise it does not have a valid bounding client rect
        nodes[idx].classList.remove('dvHidden');

        let lbls = this._labelFn(d, state);
        if (typeof lbls === 'string') lbls = [lbls];

        if (lbls) {
          const lst = this._style.labels;
          const mg = lst.margin;
          const w = d.x1 - d.x0 - mg.left - mg.right;
          const h = d.y1 - d.y0 - mg.top - mg.bottom;
          if (!fitText(lbls, nodes[idx], w, h, lst.hideOnOverflow ? null : lst.truncateText, lst.truncatedLabelMinLen)) {
            nodes[idx].classList.add('dvHidden');
          }
        }
      });

    // Render the value labels if required
    let valueLabels = null;
    if (this._style.valueLabels.show === true) {
      valueLabels = select(node)
        .select('.dvTreemapWrapper').select('.dvValueLabels')
        .selectAll('text')
        .data(leaves)
        .join('text')
        .attr('x', d => {
          // If there is a zoom hint, the label should be always left of it
          // (shifted by 22 pixels to the left) ...
          let dx = this._zoomable && this._style.zoomHint.show ? 22 : 0;
          // ... except for the last zoom level
          if (!(d.children && d.children.length > 0)) dx = 0;
          return this._style.valueLabels.position === 'left'
            ? d.x0 + this._style.valueLabels.margin.left
            : d.x1 - this._style.valueLabels.margin.right - dx
        })
        .attr('y', d => d.y1 - this._style.valueLabels.margin.bottom)
        .attr('text-anchor', this._style.valueLabels.position === 'left' ? 'start' : 'end')
        .style('fill', d => this._labelColorFn(d, state))
        .style('font-size', `${this._style.valueLabels.font.size}px`);

      // Fill the value labels
      select(node)
        .select('.dvTreemapWrapper').select('.dvValueLabels')
        .selectAll('text')
        .data(leaves)
        .each((d, idx, nodes) => {
          // Make sure the node is visibile otherwise it does not have a valid bounding client rect
          nodes[idx].classList.remove('dvHidden');

          let lbls = this._valueLabelFn(d, state);
          if (Array.isArray(lbls) === false) lbls = [lbls];

          const lst = this._style.valueLabels;
          const mg = lst.margin;

          // Remove the space of the zoom hint if there is one
          const dx = this._zoomable && this._style.zoomHint.show ? 22 : 0;
          const w = d.x1 - d.x0 - mg.left - mg.right - dx;

          const h = (
            d.y1 - d.y0 - mg.top - mg.bottom -
            this._style.labels.margin.top -
            this._style.labels.font.size -
            this._style.labels.margin.bottom
          );
          if (!fitText(lbls, nodes[idx], w, h, lst.hideOnOverflow ? null : lst.truncateText, lst.truncatedLabelMinLen)) {
            nodes[idx].classList.add('dvHidden');
          }
        });
    }

    // Call the customize functions for the labels and values
    this._style.labels.customize(labels, state, this);
    if (this._style.valueLabels.show === true) {
      this._style.valueLabels.customize(valueLabels, state, this);
    }

    // Zoom hint
    if (this._zoomable && this._style.zoomHint.show) {
      select(node).select('.dvTreemapWrapper').select('.dvZoomHint')
        .selectAll('text')
        .data(leaves)
        .join('text')
        .attr('x', d => d.x1 - 7)
        .attr('y', d => d.y1 - 7)
        .style('fill', d => x$1(this._style.zoomHint.color, d, state, this))
        .style('text-anchor', 'end')
        .text(_d => '+')
        .classed('dvHidden', d => {
          if (!(d.children && d.children.length > 0)) return true
          if (d.y1 - d.y0 < 30 || d.x1 - d.x0 < 22) return true
          return false
        });
    }

    // Transparent foreground rects for event handling
    if (this._tooltipConfig.enabled) {
      select(node)
        .select('.dvTreemapWrapper').select('.dvInteraction')
        .selectAll('rect')
        .data(leaves)
        .join('rect')
        .attr('x', d => d.x0)
        .attr('y', d => d.y0)
        .attr('width', d => d.x1 - d.x0)
        .attr('height', d => d.y1 - d.y0)
        .on('click', this._handleTreemapClick.bind(this))
        .classed('dvZoomable', d => d.children && d.children.length > 0)
        .call(this._tooltip.bindTooltip());
    }

    this.publish('renderDidEnd', { node, state });
  }

  _defaultTooltipText (data) {
    const lbl = this._labelFn(data, this.state);
    const val = data.value;
    return `${typeof lbl === 'string' ? lbl : lbl[0]}\n${val}`
  }

  _initTooltip (_evt, d, tooltip) {
    // If a custom rendering function is defined call the provided init function
    if (this._tooltipConfig.init || this._tooltipConfig.prerender || this._tooltipConfig.render) {
      this._tooltipConfig.init && this._tooltipConfig.init(d.data, d.node, this.state, tooltip);
      return
    }

    // If no custom rendering function is defined we simply add a text node
    select(d.node).append('text');
  }

  _prerenderTooltip (_evt, d, tooltip) {
    // If a custom rendering function is defined call the provided prerender function
    if (this._tooltipConfig.init || this._tooltipConfig.prerender || this._tooltipConfig.render) {
      (
        this._tooltipConfig.prerender &&
        this._tooltipConfig.prerender(d.data, d.node, this.state, tooltip)
      );
      return
    }

    const txt = this._tooltipConfig.text
      ? this._tooltipConfig.text(d.data.value, d.node, this.state, tooltip)
      : this._defaultTooltipText(d.data.value);

    select(d.node).select('text')
      .attr('x', tooltip.viewRect.left)
      .attr('y', tooltip.viewRect.top + 12)
      .style('font-size', `${this._style.tooltips.font.size}px`)
      .text(txt);

    const txtNode = select(d.node).select('text').node();
    textWrap(txtNode, this._style.tooltips.maxWidth, this._style.tooltips.font.size * 1.25);
    const cr = txtNode.getBoundingClientRect();
    tooltip.viewRect.setHeight(cr.height);
    tooltip.viewRect.setWidth(cr.width);
  }

  _renderTooltip (_evt, d, tooltip) {
    // If a custom rendering function is defined call the provided render function
    if (this._tooltipConfig.init || this._tooltipConfig.prerender || this._tooltipConfig.render) {
      (
        this._tooltipConfig.render &&
        this._tooltipConfig.render(d.data.value, d.node, this.state, tooltip)
      );
    }
  }

  _computeTreemapValues (node) {
    node.value = this._valueFn(node, this.state);
    node.children && node.children.forEach(child => {
      return this._computeTreemapValues(child, this.state)
    });
    return node
  }

  _computeAggregatedNodes (node) {
    if (node.data.aggregatedChildren) {
      const aggNode = node.data.aggregatedChildren.reduce((a, b) => {
        return this._aggregationFn(a, b, this.state, node)
      });

      Object.assign(node.data, aggNode);
    }
    node.data._value = node.value;
    node.children && node.children.forEach(child => this._computeAggregatedNodes(child));
  }

  _cleanIntermediaryTreemapValues (node, depth = 0) {
    node.depth = depth;
    if (node.children) {
      node.value = undefined;
      node.children.forEach(child => {
        child.parent = node;
        this._cleanIntermediaryTreemapValues(child, depth + 1);
      });
    }
    return node
  }

  /**
   * Handles a click on a treemap rect. This is used for zooming.
   */
  _handleTreemapClick (_evt, d) {
    if (this._zoomable && d.children) {
      this.state.set(`treemapZoomLevel_${this.id}`, this.state.get(`treemapZoomLevel_${this.id}`) + 1);
      this.state.set(`treemapSelection_${this.id}`, d.data);
    }
  }

  _handleHeaderClick (node) {
    const idx = +node.getAttribute('idx');
    const d = this._headerLevels[idx];
    if (d.depth !== this.state.get(`treemapZoomLevel_${this.id}`)) {
      this.state.set(`treemapZoomLevel_${this.id}`, d.depth + 1);
      this.state.set(`treemapSelection_${this.id}`, d);
    }
    return false
  }

  _aggregateTree (tree, decisionFn) {
    // Iterate over all nodes in the tree to see if they are a candidate for aggregation.
    this._aggregationDecision(tree, decisionFn);
    return this._aggregateChildren(tree)
  }

  /**
   * Flags the node if it should be aggregated or not, and propagates the decision function to
   * all children.
   * @param {object} node
   * @param {function} decisionFn
   */
  _aggregationDecision (node, decisionFn, depth = 0) {
    node.aggregate = decisionFn(node, this.state, depth);
    node.children && node.children.forEach(child => {
      this._aggregationDecision(child, decisionFn, depth + 1);
    });
  }

  _aggregateChildren (node) {
    const newNode = {};

    // Take over all properties except for the children.
    for (const k in node) {
      if (k !== 'children') newNode[k] = node[k];
    }

    // If there are children and one of them does not need aggregation we continue.
    if (node.children && node.children.some(child => child.aggregate === false)) {
      newNode.children = [];
      const aggregatedChildren = [];
      node.children.forEach(child => {
        if (child.aggregate) {
          aggregatedChildren.push(child);
        } else {
          newNode.children.push(this._aggregateChildren(child));
        }
      });

      // Add the aggregated children as last child
      if (aggregatedChildren.length > 0) {
        newNode.children.push({
          aggregate: false,
          hasBeenAggregated: true,
          aggregatedChildren: aggregatedChildren,
          value: aggregatedChildren.map(d => d.value).reduce((a, b) => a + b)
        });
      }
    }

    return newNode
  }
}

function treemapTiling (node, x0, y0, x1, y1, nColsFixed = null) {
  // Compute the total area of the treemap
  const totalArea = (x1 - x0) * (y1 - y0);

  // Compute the scaling constant; the sum of all values is already available in `node.value`
  const k = totalArea / node.value;

  // Compute the area of each small rectangle
  const areas = node.children.map(n => k * n.value);

  // We divide the treemap into i columns in a way that the rectangles contained in a column
  // are as square as possible. This is an optimisation problem which we solve iteratively by
  // starting with 1 column and then increase the number of columns until a metric of squareness
  // does not improve anymore.
  let nCols = nColsFixed || 1;
  let [bestSquareness, bestCols] = evaluateTreemapTiling(nCols, areas, x1 - x0, y1 - y0);

  if (!nColsFixed) {
    for (let i = 2; i < node.children.length; i++) {
      const [squareness, cols] = evaluateTreemapTiling(i, areas, x1 - x0, y1 - y0);
      if (squareness < bestSquareness) {
        bestSquareness = squareness;
        bestCols = cols;
        nCols = i;
      } else {
        // Stop searching if squareness metric no longer improves
        break
      }
    }
  }

  // Calculate the coordinates for each node based on the number of columns
  let nodeIdx = 0;
  let curX = 0.0;
  for (let i = 0; i < bestCols.length; i++) {
    const col = bestCols[i];

    // Compute the sum of the areas for this column
    const colTotalArea = col.reduce((a, b) => a + b);

    // Compute the total area of the column, and the column width
    const colWidth = colTotalArea / (y1 - y0);

    let curY = 0.0;

    // Define the x0, y0, x1, y1 for each rectangle inside the column
    for (let j = 0; j < col.length; j++) {
      const nd = node.children[nodeIdx];
      nd.x0 = curX;
      nd.x1 = curX + colWidth;
      nd.y0 = curY;
      nd.y1 = curY + (col[j] / colWidth);

      curY += col[j] / colWidth;
      nodeIdx += 1;
    }

    curX += colWidth;
  }
}

function evaluateTreemapTiling (nCols, areas, w, h) {
  // Calculate the approximate column width
  const colW = w / nCols;

  // The exact width of each column varies based on the values to be represented.

  // Accumulate the areas in each column until the column is full. The exceeding area is put
  // in the column in which it is more inside.
  const cols = Array(nCols).fill(0).map(_ => []);
  const colWidths = Array(nCols);
  let areaIdx = 0;
  let squareness = 0;

  for (let i = 0; i < nCols; i++) {
    let currentColumnHeight = 0;

    // Add areas as long as they fit completely inside.
    while (currentColumnHeight < h && areaIdx < areas.length) {
      const a = areas[areaIdx];
      const ah = a / colW;
      currentColumnHeight += ah;
      areaIdx++;
      cols[i].push(a);
    }

    // Should we move the last rectangle to the next column ?
    if (
      currentColumnHeight - h > (areas[areaIdx - 1] / colW) / 2 &&
      i < nCols - 2 &&
      cols[i].length > 0
    ) {
      cols[i].splice(-1);
      currentColumnHeight -= areas[areaIdx - 1] / colW;
      areaIdx--;
    }

    // Compute the final column width
    colWidths[i] = (currentColumnHeight * colW) / h;

    // We can now compute the aspect ratios for the rectangles in this column.
    // The sum of all aspect ratios will be out squareness measure. The lower the better.
    // The minimum possible value would be equal to the number of rectangles in the treemap.
    squareness += cols[i].map(a => {
      const w = colWidths[i];
      const h = a / w;
      return Math.max(w / h, h / w)
    }).reduce((a, b) => a + b);
  }

  return [squareness, cols]
}

function treemap (config, style) {
  return new Treemap(config, style)
}

const defaultTextBoxStyle = {
  font: {
    size: 14,
    weight: 400,
    color: '#000'
  },
  text: {
    align: 'left',
    lineHeight: 1.2
  },
  padding: { bottom: 10 }
};

class TextBox extends A {
  constructor (config, style) {
    super(config, style);

    this._text = config.text || '';
    this._vars = config.vars || null;

    this.mergeStyle(defaultTextBoxStyle);
    this.mergeStyle(Qe.style.textBox || {});
    this.mergeStyle(style);

    // The mapping between the text align values and SVG anchor definition.
    this.anchors = { left: 'start', center: 'middle', right: 'end' };
  }

  initContent (node, state) {
    select(node).append('g').attr('class', `dvText ${this.className || ''}`);
    this.publish('init', { node, state });
    this._initialized = true;
  }

  renderText (node, state) {
    this.publish('renderWillStart', { node, state });

    const st = this._style;

    const d = {};
    this.requiredDataSources.forEach(ds => {
      d[ds] = this.data(ds);
    });
    const data = this.dataExtractor ? this.dataExtractor(d, this.state, this) : d;

    // Render the text
    this._renderer = this._renderer || new TextRenderer({});
    extend(this._renderer.baseStyle, {
      fontSize: x$1(st.fontSize || st.font.size, {}, state, this),
      fontWeight: x$1(st.fontWeight || st.font.weight, {}, state, this),
      fontColor: x$1(st.fontColor || st.font.color, {}, state, this),
      textAlign: x$1(st.textAlign || st.text.align, {}, state, this),
      lineHeight: x$1(st.lineHeight || st.text.lineHeight, {}, state, this),
      width: this.width
    });

    const txt = typeof this._text === 'function' ? this._text(state, data, this) : this._text;
    const vars = typeof this._vars === 'function'
      ? this._vars(state, data, this)
      : Object.assign({ data: data }, state, this._vars);

    this._renderer.render(txt, node.querySelector('g.dvText'), vars, state.ENV);

    this.publish('renderDidEnd', { node, state });
  }

  renderContent () {
    this.initContent(this.node, this.state);
    this.renderText(this.node, this.state);
  }

  updateSize () {
    this.renderText(this.node, this.state);
  }

  updateState () {
    this.renderText(this.node, this.state);
  }

  updateData () {
    this.renderText(this.node, this.state);
  }
}

function textBox (config, style) {
  return new TextBox(config, style)
}

const H_ALIGN_OPTS = ['left', 'center', 'right'];

/**
 * @class FlexBox
 * @aka dynvis.flexBox
 * @inherits ContentBox
 *
 * A FlexBox is a special kind of a box which holds other boxes, charts or controls
 * and arranges them according to the available space and user-defined settings. It allows for
 * positioning boxes next to each other and/or for implementing a responsive design.
 *
 * The boxes, charts or controls which can be added to a FlexBox are called **content boxes**.
 * Each content box inside the FlexBox defines its own width and alignment setting (see `addBox`
 * method for the details).
 *
 * Each box has also a priority. As long as the available space of the FlexBox permits, content
 * boxes are positioned in one row. If space is not enough, the lower priority boxes are
 * automatically wrapped to an additional row until all boxes can be displayed within the given
 * width of the FlexBox.
 *
 * Within the FlexBox, each content box takes the full height (the height of the tallest box inside
 * the row) and can define its vertical alignment.
 *
 * @example
 *
 * ```javascript
 * const textBox1 = dynvis.textBox().text('Hello world')
 * const textBox2 = dynvis.textBox().text('Bonjour le monde')
 * const flexBox = dynvis.flexBox()
 *  .addBox(textBox1, { width: function(w) { return w; } })
 *  .addBox(textBox2, { width: function(w) { return w; } })
 * ```
 */
class FlexBox extends A {
  constructor (config, style) {
    super(config, style);

    this._boxes = [];
    for (const box of config.boxes || []) {
      if (box.box) {
        this._boxes.push({
          box: box.box,
          opt: box.options || {}
        });
      } else {
        console.warn('[FlexBox] Box is not defined in the configuration. Skipping.');
      }
    }

    this.mergeStyle({
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      spacing: {
        horizontal: 0, // Horizontal spacing between two content boxes.
        vertical: 0 // Vertical spacing between two rows of content boxes.
      }
    });
    this.mergeStyle(style);
  }

  // Returns the boxes sorted according to the priority and then the position
  // (in the order `left`, `center`, `right`)
  _sortedBoxes () {
    // Sort the boxes in descending order
    // First we translate the alignment to a number in order to enable sorting
    this._boxes.forEach(box => {
      box._alignment = H_ALIGN_OPTS.indexOf(box.opt.alignment || 'left');
    });

    return this._boxes
      .sort((a, b) => {
        return (b.opt.priority || 0) - (a.opt.priority || 0) || a._alignment - b._alignment
      })
  }

  prerenderBox () {
    this.publish('prerenderWillStart', { node: this.node, state: this.state });

    // Make sure there is a DOM element for each box
    this._sortedBoxes().forEach(b => {
      if (!this.node.querySelector(`#${b.box.id}`)) {
        const wrapperNode = select(this.node).append('g')
          .attr('id', b.box.id)
          .attr('class', 'dvFlexBoxElement');

        b.opt.attrs && Object.keys(b.opt.attrs).forEach(attr => {
          wrapperNode.attr(attr, b.opt.attrs[attr]);
        });

        // Set the node and state for the box
        b.box.node = wrapperNode.append('g').node();
        b.box.state = this.state;
        b.box.layout = this.layout;
      }
    });

    // Remove DOM elements which are not in the list of boxes anymore.
    const boxIds = this._sortedBoxes().map(b => b.box.id);
    this.node.querySelectorAll('g.dvFlexBoxElement').forEach(node => {
      const id = node.getAttribute('id');
      if (boxIds.indexOf(id) === -1) {
        node.remove();
      }
    });

    // Get the width of the FlexBox.
    const flexBoxWidth = this.width;

    // Prerender each box and collect the width and height of each one.
    // The positioning is done afterwards using a transform on the DOM element.
    this._sortedBoxes().forEach(b => {
      const boxNode = this.node.querySelector(`#${b.box.id} g`);
      this.node.querySelector(`#${b.box.id}`).setAttribute(
        'transform',
        'translate(' +
        `${b.box._style.padding.left || 0} ${b.box._style.padding.top || 0})`
      );

      // Set the width of the box.
      if (b.opt.width) {
        b.box.outerWidth = Math.min(
          flexBoxWidth - (b.box._style.padding.right || 0) - (b.box._style.padding.left || 0),
          typeof b.opt.width === 'function'
            ? b.opt.width(
              flexBoxWidth - (b.box._style.padding.right || 0) - (b.box._style.padding.left || 0),
              b.box,
              this.state,
              boxNode
            )
            : b.opt.width
        );
      } else {
        b.box.outerWidth = (
          flexBoxWidth -
          (b.box._style.padding.right || 0) -
          (b.box._style.padding.left || 0)
        );
      }

      if (x$1(b.opt.hide, b, this.state, this)) {
        boxNode.style.display = 'none';
      } else {
        boxNode.style.display = null;
      }

      this.publish('prerenderDidEnd', { node: this.node, state: this.state });
    });

    // Run the positioning algorithm and set the height of the FlexBox
    this.height = this._positionBoxes();
  }

  renderBox () {
    this.publish('renderWillStart', { node: this.node, state: this.state });

    // Render the boxes.
    this._boxes
      .filter(b => x$1(b.opt.hide, b, this.state, this) !== true)
      .forEach(b => {
        // The boxes have already been rendered during the position boxes step.
        // We just need to call the render method to update the size.
        b.box.updateSize();
      });

    this.publish('renderDidEnd', { node: this.node, state: this.state });
  }

  // Positions the boxes dynamically. It first places the top priority box
  // according to their wanted location (left, center, right), and then fits
  // all other boxes one by one. If one box cannot be placed, a new row is
  // added at the bottom.
  // This problem is somewhat similar to the rectangle packing problem which is
  // a well known problem with some established algorithms. This implementation
  // is inspired by the Binary Tree packing algo (which is very nicely explained
  // here: https://blackpawn.com/texts/lightmaps/default.html)
  _positionBoxes () {
    // The list of rows. Each row contains the boxes positioned inside the row.
    const rows = [];
    const hSpacing = this._style.spacing.horizontal || 0;

    // The current row which contains all positioned boxes in the following
    // format: { box: <Box>, left: <left-coord>, right: <right-coord> }
    // The row is organised in left, center and right regions.
    let currentRow = { left: [], center: [], right: [] };
    currentRow.widths = { left: 0, center: 0, right: 0, total: 0 };
    currentRow.totalHeight = 0;

    this._sortedBoxes()
      .filter(b => x$1(b.opt.hide, b, this._state, this) !== true)
      .forEach(b => {
        // Place the box in the row.
        const ok = this._placeBoxInRow(
          b.box, currentRow, b.opt.horizontalAlignment || 'left'
        );
        if (!ok) {
          // The previous box could not be placed. Add it to the next row.
          rows.push(currentRow);
          currentRow = { left: [], center: [], right: [] };
          currentRow.widths = { left: 0, center: 0, right: 0, total: 0 };
          currentRow.totalHeight = 0;
          this._placeBoxInRow(
            b.box, currentRow, b.opt.horizontalAlignment || 'left', true
          );
        }

        // Render the box a first time to get the height.
        b.box.render();

        currentRow.totalHeight = Math.max(
          currentRow.totalHeight,
          b.box.height,
          b.box.node.getBBox().height
        );

        // Remember the vertical alignment option
        b.box.valign = b.opt.verticalAlignment || 'top';
      });

    // Add the last current row
    rows.push(currentRow);

    // We can now set the transform for each box.
    let dy = 0;
    rows.forEach(row => {
      let dx = 0;
      row.left.forEach(box => {
        let valignDelta = 0;
        if (box.valign === 'middle') valignDelta = (row.totalHeight - box.height) / 2;
        if (box.valign === 'bottom') valignDelta = row.totalHeight - box.height;
        select(`#${box.id}`).call(translate(dx, dy + valignDelta));
        dx += (
          box.outerWidth +
          (box._style.padding.left || 0) +
          (box._style.padding.right || 0) +
          (hSpacing || 0)
        );
      });

      dx = (this.width / 2) - (row.widths.center / 2);
      row.center.forEach(box => {
        let valignDelta = 0;
        if (box.valign === 'middle') valignDelta = (row.totalHeight - box.height) / 2;
        if (box.valign === 'bottom') valignDelta = row.totalHeight - box.height;
        select(`#${box.id}`).call(translate(dx, dy + valignDelta));
        dx += (
          box.outerWidth +
          (box._style.padding.left || 0) +
          (box._style.padding.right || 0) +
          (hSpacing || 0)
        );
      });

      dx = this.width;
      row.right.forEach(box => {
        let valignDelta = 0;
        if (box.valign === 'middle') valignDelta = (row.totalHeight - box.height) / 2;
        if (box.valign === 'bottom') valignDelta = row.totalHeight - box.height;
        dx = Math.max(
          0,
          dx - (
            box.outerWidth +
            (box._style.padding.left || 0) +
            (box._style.padding.right || 0) +
            hSpacing
          )
        );
        const halignDelta = box.outerWidth - box.width; // FIXME: max box width minus width
        select(`#${box.id}`).call(translate(dx + halignDelta, dy + valignDelta));
      });

      dy += row.totalHeight + (this._style.spacing.vertical || 0);
    });

    // Return the height of the whole flex box
    return dy - (this._style.spacing.vertical || 0)
  }

  // Places the box in the row at the appropriate place.
  // If the box has been successfully placed, true is returned. If not, false
  // is returned. If force is true, the box is placed in any case even with
  // overlap.
  _placeBoxInRow (box, row, align, force) {
    // The width of the box to place. If there is already a box inside the row add the horizontal
    // spacing to the width
    const hSpacing = this._style.spacing.horizontal || 0;
    const w = (
      box.outerWidth +
      (box._style.padding.left || 0) +
      (box._style.padding.right || 0) +
      hSpacing
    );

    // If force is true, we just place the box and return true.
    if (force) {
      row[align].push(box);
      row.widths[align] += w;
      row.widths.total += w;
      return true
    }

    // If the box is anyway too big to be placed in the remainder of the place,
    // we return false.
    if (row.widths.total + w > this.width + hSpacing) return false

    // Calculate the left and right positions of each position.
    const pos = {
      left: { min: 0, max: row.widths.left },
      center: {
        min: (this.width / 2) - (row.widths.center / 2),
        max: (this.width / 2) + (row.widths.center / 2)
      },
      right: {
        min: this.width + hSpacing - row.widths.right,
        max: this.width + hSpacing
      }
    };

    // Add now the new box at the correct place to calculate if there is enough
    // space. This could also be achieved by first adding the box to the row and
    // then make the above computation. But then more data structure
    // manipulations would be needed.
    switch (align) {
      case 'right':
        pos.right.min -= w;
        break
      case 'center':
        pos.center.min -= (w / 2);
        pos.center.max += (w / 2);
        break
      default:
        pos.left.max += w;
    }

    // We can now evaluate if there is an overlap due to the addition of the
    // box. If so, we return false. Otherwise, we add the box to the row.
    if (row.left.length > 0 && row.center.length > 0 && pos.left.max > pos.center.min) {
      // We have at least one box left and one in the center, and there is an overlap
      return false
    }
    if (
      row.left.length > 0 &&
      row.center.length === 0 &&
      row.right.length > 0 &&
      pos.left.max > pos.right.min
    ) {
      // We don't have a center box, but at least one left and one right, and there is
      // an overlap between these two.
      return false
    }
    if (row.center.length > 0 && row.right.length > 0 && pos.center.max > pos.right.min) {
      // We have an overlap between a center box and a right box.
      return false
    }
    if (pos.left.max > pos.right.max || pos.right.min < pos.left.min ||
        (pos.center.min < pos.left.min || pos.center.max > pos.right.max)) {
      // There are boxes only in one position but the space is not enough.
      return false
    }

    // The box can be placed without problem.
    row[align].push(box);
    row.widths[align] += w;
    row.widths.total += w;
    return true
  }

  renderContent () {
    this.prerenderBox();
    this.renderBox();
  }

  updateSize () {
    this.prerenderBox();
    this.renderBox();
  }

  updateState () {
    this.prerenderBox();
    this.renderBox();
  }

  updateData () {
    this.prerenderBox();
    this.renderBox();
  }
}

function flexBox (config, style) {
  return new FlexBox(config, style)
}

class Drop {
  constructor (anchor, callbacks, options = {}) {
    this.anchor = anchor;
    this.callbacks = callbacks;
    this.options = options;

    this._initialized = false;
    this._handleClick = this._handleClick.bind(this);
    this._handleResize = this._handleResize.bind(this);
  }

  show () {
    if (!this._initialized) this.init();
    this.render();
  }

  hide () {
    window.removeEventListener('click', this._handleClick, { capture: true });
    window.removeEventListener('resize', this._handleResize);

    // Set a small delay before hiding to avoid useless re-trigger of click events.
    // Without the timeout, it might happen that a click outside of the drop triggers again the
    // drop to open. The delay allows for simple checking if the drop is still open.
    setTimeout(() => {
      if (this.callbacks.hide) this.callbacks.hide(this._root.node());
      select(document.body).select('div.dvDrop').remove();
    }, 30);
  }

  _handleClick (evt) {
    if (this._root.node().contains(evt.target)) {
      // The click is inside the drop -> ignore
      return
    }
    // The click is outside the drop, hide it
    this.hide();
  }

  _handleResize (_) {
    this.position();
  }

  init () {
    // Create an empty DIV at the end of the document
    this._root = select(document.body).append('div').attr('class', 'dvDrop');
    if (this.options.maxWidth) this._root.style('max-width', `${this.options.maxWidth}px`);

    // Register an event listener for click events on the window and the drop to be able to close
    // the drop if the user clicks next to it.
    window.addEventListener('click', this._handleClick, { capture: true });

    // Register an event listener for the window resize event. We need to update the position of
    // the drop when the window size changes.
    window.addEventListener('resize', this._handleResize);

    if (this.callbacks.init) this.callbacks.init(this._root.node());
    this._initialized = true;
  }

  render () {
    if (this.callbacks.render) this.callbacks.render(this._root.node());
    this.position();
  }

  position () {
    // Get the bbox for the anchor
    const anchorRect = this.anchor.getBoundingClientRect();

    // Get the width and height of the rendered content.
    const windowRect = this._root.node().getBoundingClientRect();

    // Set the position of the DIV
    this._root
      .style('top', `${anchorRect.bottom}px`)
      .style('left', `${anchorRect.right - windowRect.width}px`);
  }
}

function copyToClipboard (txt) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(txt)
  } else {
    const input = document.createElement('input');
    input.value = txt;
    input.style.position = 'absolute';
    input.style.top = '-100px';
    document.body.appendChild(input);
    input.focus();
    input.select();
    return new Promise((resolve, reject) => {
      document.execCommand('copy') ? resolve() : reject(new Error('Copy to clipboard failed'));
      input.remove();
    })
  }
}

function escapeHtml (html) {
  return html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function decomposeDocId (docId, lang) {
  const parts = docId.split('-');
  if (parts.length < 2) return null

  const vizId = [parts[0], lang.substr(0, 1), ...parts.slice(1)].join('-');
  return decomposeVizId(vizId)
}

function decomposeVizId (id) {
  // Split the Viz ID by each dash.
  // There should be at least 3 parts. If not, return NULL.
  const parts = id.split('-');
  if (parts.length < 3) return null

  // If the Viz ID was provided as a request parameter in a PHP script,
  // it will not contain any dot. PHP will replace any dot with an underscore.
  // However, a correct Viz ID can contain dots, but no underscore.
  // Therefore, we replace any underscore with a dot.
  id = id.replace('_', '.');

  // Extract the prefix.
  const prefix = parts[0];

  // Extract the language. It is the second element in the parts array.
  // If it is not one of 'd', 'f', 'i', 'e', assume it is 'e'.
  let lang = parts[1];
  if (['d', 'f', 'i', 'e'].indexOf(lang) < 0) lang = 'e';

  // Extract the theme ID. The theme ID are the first two numbers of the 3rd
  // part of the Viz ID. If we don't find these numbers, we return NULL.
  // The Viz ID is invalid in this case.
  const matches = parts[2].match(/([0-9][0-9])/);
  if (!matches) return null
  const theme = matches[0];

  // Build the part of the asset path which is composed by the prefix, the
  // theme and the reminder. This is the asset directory.
  const assetDir = `${prefix}-${parts.slice(2).join('-')}`;

  // We can now build the asset path
  const assetPath = `/assets/${theme}/${assetDir}/${id}.html`;

  return { theme, assetPath, lang, id }
}

const TRANSLATIONS = {
  'Copy code': {
    fr: 'Copier le code',
    de: 'Code kopieren',
    it: 'Copia il codice'
  },
  'Copy this code to embed the visualization into your page': {
    fr: 'Copiez ce code pour intégrer la visualisation dans votre page',
    de: 'Kopieren Sie diesen Code um die Visualisierung in Ihrer Seite zu integrieren',
    it: 'Copia questo codice per integrare la visualizzazione nella tua pagina'
  },
  'Code copied!': {
    fr: 'Le code a été copié!',
    de: 'Der Code wurde kopiert!',
    it: 'Il codice è stato copiato!'
  }
};

const t = function (t, lang) {
  const l = lang || 'en';
  return (TRANSLATIONS[t] || {})[l] || t
};

class EmbedControl extends Control {
  constructor (config, style) {
    super(config, style);

    // Define the default style
    this.mergeStyle({
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      icon: { size: 24 }
    });
    this.mergeStyle(style);

    // Get the vizid. This can be taken from the URL or the config.
    const href = document.location.href.split('/');
    this.vizid = config.vizid || href[href.length - 2];

    // Get the URL of Dynvis which needs to be included in the embed string
    let embedWidgetPath = config.embedWidgetPath || null;
    for (let i = 0; i < document.scripts.length; i++) {
      const scrpt = document.scripts[i];
      const parts = scrpt.src.split('/');
      const sname = parts[parts.length - 1];
      if (sname.search(/^dynvis/) > -1 && sname.search(/.js$/) > -1) {
        embedWidgetPath = scrpt.src;
      }
    }

    this.config = {
      embedWidgetPath: embedWidgetPath.src || embedWidgetPath,
      lang: config.lang || null
    };

    this._copyCode = this._copyCode.bind(this);

    this._open = false;
  }

  initControl (node, state) {
    node.classList.add('dvNoprint');

    // Draw the icon. Base fill color is #069.
    select(node).append('g').attr('class', 'dvEmbed');

    // Add a white background rect (for better event capturing).
    // The base size of the icon is 24x24 pixels
    select(node).select('g.dvEmbed')
      .append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 24)
      .attr('height', 24)
      .style('fill', '#fff');

    select(node).select('g.dvEmbed')
      .append('path')
      .attr('d', 'M7,5 L1,12 L7,19')
      .style('fill', 'none')
      .style('stroke', '#069')
      .style('stroke-width', '2px')
      .style('stroke-linecap', 'round')
      .style('stroke-linejoin', 'round');

    select(node).select('g.dvEmbed')
      .append('path')
      .attr('d', 'M17,5 L23,12 L17,19')
      .style('fill', 'none')
      .style('stroke', '#069')
      .style('stroke-width', '2px')
      .style('stroke-linecap', 'round')
      .style('stroke-linejoin', 'round');

    select(node).select('g.dvEmbed')
      .append('path')
      .attr('d', 'M13,2 L9,22 L11,22 L15,2z')
      .style('fill', '#069')
      .style('stroke-linejoin', 'miter');

    // Attach the mouse events to show the dropdown
    select(node).on('click', this.show.bind(this));
  }

  prerenderControl (node, state) {
    this.publish('prerenderWillStart', { node, state });

    // Keep the current node and state around
    this._node = node;
    this.height = 20;
    this.publish('prerenderDidEnd', { node, state });
  }

  renderControl (node, state) {
    this.publish('renderWillStart', { node, state });

    const scale = this._style.icon.size / 24;
    select(node).select('g.dvEmbed')
      .attr('transform', `scale(${scale}) translate(0, 0)`);

    this.publish('renderDidEnd', { node, state });
  }

  show () {
    // If the embed window is already open, don't do anything
    if (this._open) return

    this._embedWindow = new Drop(
      select(this._node).select('g.dvEmbed').node(),
      { render: this._renderEmbedWindow.bind(this), hide: this._closeEmbedWindow.bind(this) },
      { anchor: 'topright', maxWidth: 330 }
    );
    this._embedWindow.show();
    this._open = true;
  }

  _copyCode () {
    const code = document.querySelector('.dvEmbedWindow .dvContainer code').innerText;
    copyToClipboard(code)
      .then(() => {
        document.querySelector('.dvEmbedWindow.dvControl').classList.add('dvHidden');
        document.querySelector('.dvEmbedWindow.dvConfirmation').classList.remove('dvHidden');
        this._embedWindow.position();
        window.setTimeout(() => {
          this._embedWindow.hide();
        }, 1500);
      })
      .catch(err => console.error('Copying embed code failed: ' + err));
  }

  _embedCode (vizid, lang, state) {
    // Encode the state
    const attrsArr = [];
    const stateKeys = state.keys();
    for (const k of stateKeys) {
      const stateValue = state.get(k);
      let v = typeof stateValue === 'object' ? JSON.stringify(stateValue) : stateValue;
      if (typeof v === 'string') v = v.replace(/"/g, '&#34;');
      attrsArr.push(`data-state-${k}="${v}"`);
    }

    // Get the embed config. The config is in the parent layout.
    const embedCfg = this.layout.embedConfig || {};
    for (const k in embedCfg) {
      let v = typeof embedCfg[k] === 'object' ? JSON.stringify(embedCfg[k]) : embedCfg[k];
      if (typeof v === 'string') v = v.replace(/"/g, '&#34;');
      attrsArr.push(`data-config-${k}="${v}"`);
    }

    // Combine all state and config data attrs
    const attrs = attrsArr.join(' ');

    const loc = window.location;
    const embed = this.config.embedWidgetPath.startsWith(loc.protocol)
      ? this.config.embedWidgetPath
      : `${loc.protocol}//${loc.host}/${this.config.embedWidgetPath}`;

    // Check if the vizid resolves to a valid URL. If not, use the document URL instead.
    const vizInfo = decomposeDocId(vizid, lang);

    // If the vizid is valid, we use it. If it not valid, or it does not resolve to the URL of the
    // current document, we use the document URL instead.
    let vizIdAttr = window.location.href;
    if (vizInfo !== null) {
      const url = `${window.location.origin}${vizInfo.assetPath}`;
      if (url === vizIdAttr) vizIdAttr = vizid;
    }

    return escapeHtml(
      `<div class="fso-datavis-widget" data-vizid="${vizIdAttr}" data-lang="${lang}" ${attrs}></div>` +
      `<script src="${embed}"></script>`
    )
  }

  _renderEmbedWindow (node) {
    const htmlLang = document.querySelector('html').getAttribute('lang');
    const lang = this.config.lang || this.state.get('lang') || htmlLang || 'en';
    const embed = this._embedCode(this.vizid, lang, this.state);
    node.innerHTML = `
      <div class="dvEmbedWindow dvControl">
        <div class="dvDesc">
          ${t('Copy this code to embed the visualization into your page', lang)}:
        </div>
        <div class="dvCopy">
          <samp class="dvContainer">
            <code data-vizid="${this.vizid}" data-lang="${lang}" class="dvCode">${embed}</code>
          </samp>
          <button class="dvCopyButton">${t('Copy code', lang)}</button>
        </div>
      </div>
      <div class="dvEmbedWindow dvHidden dvConfirmation">
        <svg width="40" height="40">
          <g transform="translate(0,-286.41666)">
            <circle style="fill: #5bb600;" cx="20" cy="306.41666" r="19" />
            <rect
              style="fill:#ffffff;" width="13.837906" height="4.834096"
              x="173.14397" y="270.2225" rx="1.5" ry="1.5"
              transform="matrix(0.89386442,0.44833738,-0.53397482,0.84550038,0,0)"
            />
            <rect
              style="fill:#ffffff;" width="5.5527401" height="22.01265"
              x="155.19667" y="251.52736" rx="1.5" ry="1.5"
              transform="rotate(26.703325)"
            />
          </g>
        </svg>
        <div class="dvConfirmationText">${t('Code copied!', lang)}</div>
      </div>
    `;
    node.querySelector('.dvCopy').addEventListener('click', this._copyCode);
  }

  _closeEmbedWindow (node) {
    this._open = false;
    node.querySelector('.dvCopy').removeEventListener('click', this._copyCode);
  }
}

function embedControl (config, style = {}) {
  return new EmbedControl(config, style)
}

class DropdownRenderer {
  constructor () {
    // Each dropdown renderer has a formatted text renderer
    this._textRenderer = new TextRenderer({ fontSize: 16, fontColor: '#454545' });

    // Reserve space for the symbols on the left and right side of the label
    // The symbols themselves are rendered by the specific renderer.
    this._symbolWidth = { left: 0, right: 0 };

    // A dropdown can contain icons. The size can be adjusted using the iconSize function.
    this._iconSize = [20, 20];
    this._iconPaddding = { right: 10 };
  }

  iconSize (x, y) {
    if (Array.isArray(x) && typeof y === 'undefined') {
      this._iconSize = x;
    } else {
      this._iconSize = [+x, +y];
    }
    return this
  }

  init (node, state, dropdown) {
    if (dropdown._customRenderer) {
      dropdown._customRenderer.init(node, state, dropdown);
    } else {
      select(node).append('rect');
      select(node).append('text');
      select(node).append('polyline');
    }
  }

  prerender (node, state, dropdown) {
    if (dropdown._customRenderer) dropdown._customRenderer.prerender(node, state, dropdown);
  }

  render (node, state, dropdown) {
    if (dropdown._customRenderer) {
      dropdown._customRenderer.render(node, state, dropdown);
      return
    }

    const st = dropdown._style;

    // Define the position and height of the dropdown background rect
    select(node).select('rect')
      .attr('x', 1).attr('y', 0)
      .attr('width', dropdown.width - 2)
      .attr('height', dropdown.height - 1) // -1 for the drawing the border
      .attr('rx', 4);

    // Add the placeholder
    select(node).select('text')
      .attr('x', 10).attr('y', 8 + st.font.size)
      .style('font-size', `${st.font.size || 16}px`)
      .style('font-weight', st.font.weight || 'normal');

    // Add the dropdown arrow
    this.renderCue(select(node).select('polyline'), {
      x: dropdown.width - 25,
      y: (dropdown.height / 2) - 2,
      width: 10,
      height: 5
    });
  }

  renderCue (sel, env) {
    const pts = [
      `${env.x},${env.y}`,
      `${env.x + (env.width / 2)},${env.y + env.height}`,
      `${env.x + env.width},${env.y}`
    ];
    sel.attr('points', pts.join(' '));
  }

  // Methods for drawing the individual text elements
  initElement (_data, _state, _dropdown) {}
  prerenderElement (_data, _state, _dropdown) {}
  renderElement (_data, _state, _dropdown) {}

  // Methods for drawing the symbols
  initSymbol (_data, _state, _dropdown) {}
  prerenderSymbol (_data, _state, _dropdown) {}
  renderSymbol (_data, _state, _dropdown) {}
}

class ZeroChoiceDropdownRenderer extends DropdownRenderer {
  render (node, state, dropdown) {
    super.render(node, state, dropdown);
    this._node = node;

    if (dropdown._customRenderer) return

    // Store the reference to the text node
    this.textNode = select(node).select('text');

    // Update the display
    this.update(dropdown);
    this.truncate();
  }

  update (dropdown) {
    // In the case of a zero choice dropdown we always display the placeholder
    this.textNode.text(dropdown._placeholder);
  }

  truncate () {
    const w = this._node.querySelector('rect').getBoundingClientRect().width - 40;
    if (this.textNode.node().getBoundingClientRect().width > w && w > 60) {
      let t = this.textNode.text();
      while (this.textNode.node().getBoundingClientRect().width > w) {
        t = t.substring(0, t.length - 2) + '…';
        this.textNode.text(t);
      }
    }
  }

  initElement (data, state, dropdown) {
    const st = dropdown._style.content;

    // Add a rect node as background
    data.node.append('rect')
      .attr('class', 'dvDropdownElementBkgd')
      .attr('x', 0)
      .attr('y', 0);

    const iconWidth = typeof data.choice.icon !== 'undefined'
      ? this._iconSize[0] + this._iconPaddding.right
      : 0;

    // Add a text node to the group node and add the choice data to it
    data.node.append('g').attr('class', 'dvElement')
      .attr('transform', `translate(${st.padding.left + this._symbolWidth.left + iconWidth} ${st.padding.top})`);

    // If there is an icon, add a group node for it
    if (data.choice.icon) {
      data.node.append('g').attr('class', 'dvIcon')
        .attr('transform', `translate(${st.padding.left + this._symbolWidth.left} ${st.padding.top})`);
    }
  }

  prerenderElement (data, state, dropdown) {
    const st = dropdown._style.content;

    const iconWidth = typeof data.choice.icon !== 'undefined'
      ? this._iconSize[0] + this._iconPaddding.right
      : 0;

    const paddingPlusSymbol = st.padding.left + st.padding.right + iconWidth +
      this._symbolWidth.left + this._symbolWidth.right;

    // Set the base style width
    this._textRenderer.baseStyle.width = data.maxWidth - paddingPlusSymbol;

    // Fill the text node with the content
    const txt = typeof data.choice.value === 'string' && data.choice.value.startsWith('<text')
      ? data.choice.value
      : `<text>${data.choice.value}</text>`;
    this._textRenderer.render(txt, data.node.select('g').node(), {});

    // Get the width of the text node
    return data.node.select('.dvElement').node().getBoundingClientRect().width + paddingPlusSymbol
  }

  renderElement (data, state, dropdown) {
    const st = dropdown._style.content;

    const iconWidth = typeof data.choice.icon !== 'undefined'
      ? this._iconSize[0] + this._iconPaddding.right
      : 0;

    this._textRenderer.baseStyle.width = data.width - st.padding.left - st.padding.right -
      iconWidth - this._symbolWidth.left - this._symbolWidth.right;

    // Add the icon if there is one
    if (data.choice.icon) {
      data.node.node().querySelector('g.dvIcon').innerHTML = typeof data.choice.icon === 'function'
        ? data.choice.icon(this._iconSize)
        : data.choice.icon;
    }

    const txt = typeof data.choice.value === 'string' && data.choice.value.startsWith('<text')
      ? data.choice.value
      : `<text>${data.choice.value}</text>`;
    this._textRenderer.render(txt, data.node.select('g.dvElement').node(), {});

    // Compute the height
    const h = data.node.select('.dvElement').node().getBoundingClientRect().height +
      st.padding.top + st.padding.bottom;

    // Set the dimensions of the background rect
    data.node.select('rect').attr('width', data.width).attr('height', h);

    return h
  }
}

class SingleChoiceDropdownRenderer extends ZeroChoiceDropdownRenderer {
  constructor () {
    super();
    this._symbolWidth.right = 40;
  }

  initSymbol (data, _state, dropdown) {
    if (data.choice.key === dropdown._currentChoice) {
      data.node.append('polyline')
        .attr('class', 'dvCheckedSymbol')
        .attr('points', '0,8 6,14 16,3');
    }
  }

  renderSymbol (data, _state, _dropdown) {
    const symbol = data.node.select('.dvCheckedSymbol');
    if (symbol) {
      symbol.attr('transform', () => {
        const dx = data.width - this._symbolWidth.right + 10;
        const dy = Math.floor((data.elementHeight - 16) / 2);
        return `translate(${dx} ${dy})`
      });
    }
  }

  update (dropdown) {
    // Fill in the current choice, or if no choice is made, display the
    // placeholder if there is one. If no choice is made and no placeholder
    // defined, we leave the text empty.
    let choice = dropdown._currentChoice
      ? dropdown._choices.filter(v => v.key === dropdown._currentChoice)
      : [];

    choice = choice.length === 0 ? null : choice[0];
    this.textNode.text(choice ? choice.value : dropdown._placeholder || '');

    this.truncate();
  }
}

class MultipleChoiceDropdownRenderer extends ZeroChoiceDropdownRenderer {
  constructor () {
    super();
    this._symbolWidth.left = 40;
  }

  initSymbol (data, _state, _dropdown) {
    const g = data.node.append('g').attr('class', 'dvCheckbox');
    g.append('rect').attr('x', 0).attr('y', 0).attr('width', 20).attr('height', 20).attr('rx', 2);
    g.append('polyline').attr('class', 'dvSymbol').attr('points', '4,10 8,14 16,6');
  }

  renderSymbol (data, state, dropdown) {
    // Control the presence of the selected class on the element node. The corresponding CSS will
    // make sure the visual display is correct.
    if (dropdown._currentChoice.map(v => v.key).indexOf(data.choice.key) > -1) {
      data.node.node().classList.add('dvSelected');
    } else {
      data.node.node().classList.remove('dvSelected');
    }

    // Display the checkbox at the correct location
    const st = dropdown._style.content;
    data.node.select('.dvCheckbox')
      .attr('transform', `translate(${st.padding.left} ${st.padding.top})`);
  }

  update (dropdown) {
    // Fill in the current choices, or if no choice is made, display the
    // placeholder if there is one. If no choice is made and no placeholder
    // defined, we leave the text empty.
    this.textNode.text(
      dropdown._currentChoice.length > 0
        ? dropdown._choices.filter(v => v._sel).map(v => v.value).join(', ')
        : dropdown._placeholder || ''
    );
  }
}

/**
 * @class Dropdown
 */
class Dropdown extends Control {
  constructor (config, style) {
    super(config, style);

    this._type = config.type || 'single-choice';
    if (['zero-choice', 'single-choice', 'multiple-choice'].indexOf(this._type) === -1) {
      throw new Error(
        `Invalid dropdown type: ${this._type}. ` +
        'Valid types are: zero-choice, single-choice, multiple-choice.'
      )
    }

    // A label explains the content of the dropdown.
    // Currently this is only needed for accessibility purposes.
    this._label = config.label || null;

    // Placeholder is the option displayed by default in the menu if no
    // selection is made. For 0-zero menus, this option is always shown.
    this._placeholder = config.placeholder || null;

    // The choices for the dropdown. _dropdownChoices holds the values the
    // user passes to the dropdown. This can be an array or a function returning an array.
    // Each entry in the array is an object of the shape:
    // { value: "key", text: "text to display", icon: "SVG icon" }
    // The text to display can be a static string or a function which is called
    // every time the buttons are rendered. The state is passed to this function.
    this._dropdownChoices = config.choices;

    // During rendering, _choices is filled based on `dropdownChoices`. This is, if it is an array
    // it is simply referenced, and if it is a function, the function is executed.
    this._choices = null;

    // The current choice. If a state key is defined, it contains the same
    // value as the state.
    this._currentChoice = config.currentChoice || null;
    this._closeOnSelection = typeof config.closeOnSelection === 'undefined'
      ? !(this._type === 'multiple-choice')
      : config.closeOnSelection;

    // To which key in the state we should map the selection.
    this._stateKey = config.mapToState || null;

    // Optional action to be executed before the state is set.
    this._stateKeyAction = config.mapToStateAction || ((newState, _dropdown) => newState);

    // The renderer draws the permanently visible part of the dropdown.
    // If there is no renderer defined until init a default renderer will be
    // created based on the dropdown type.
    this._renderer = null;
    if (typeof config.customRenderer === 'undefined') {
      this._customRenderer = false;
    } else {
      this._customRenderer = Object.assign(
        Object.fromEntries(['init', 'prerender', 'render'].map(k => [k, () => {}])),
        config.customRenderer
      );
    }

    // The maximum and minimum number of selections for multiple-choice dropdowns.
    this._minSelections = Math.max(config.minSelections || 0, 0);
    this._maxSelections = config.maxSelections || Infinity;

    // Set the default style
    this.mergeStyle({
      padding: { top: 7, right: 0, bottom: 7, left: 0 },
      font: { size: 14, weight: 400 },
      content: { minWidth: 100, padding: { top: 5, right: 7, bottom: 5, left: 7 } }
    });

    this.shown = null;

    return this
  }

  renderer (renderer) {
    this._customRenderer = Object.assign(
      Object.fromEntries(['init', 'prerender', 'render'].map(k => [k, () => {}])),
      renderer
    );
    return this
  }

  initControl (node, state) {
    this.publish('init', { node, state });

    // Keep a reference to the node. This is needed when we open the dropdown to insert the content.
    this._node = node;

    // Add the dvDropdown class to the node
    node.classList.add('dvDropdown');

    // Define the renderer
    if (this._type === 'single-choice') {
      this._renderer = new SingleChoiceDropdownRenderer();
    } else if (this._type === 'multiple-choice') {
      this._renderer = new MultipleChoiceDropdownRenderer();
    } else {
      this._renderer = new ZeroChoiceDropdownRenderer();
    }

    // Call the renderer init if it has an init function.
    if (typeof this._renderer.init === 'function') {
      this._renderer.init(node, state, this);
    }

    // Set the dropdown role and label
    if (this._type === 'zero-choice') {
      node.setAttribute('role', 'menu');
    } else {
      node.setAttribute('role', 'listbox');
    }
    node.setAttribute('aria-label', this._label || this._placeholder || '');
    node.setAttribute('tabindex', '0');

    select(node).on('mousedown', e => {
      if (e.button === 0) this.show();
    });

    this._initialized = true;
  }

  prerenderControl (node, state) {
    this.publish('prerenderWillStart', { node, state });

    // Set the height of the dropdown
    this.height = this._style.font.size + 19;

    // Fill the final choices
    if (typeof this._dropdownChoices === 'function') {
      this._choices = this._dropdownChoices(this, state);
    } else {
      this._choices = this._dropdownChoices;
    }

    // Prerender the dropdown
    this._renderer.prerender(node, state, this);

    this.publish('prerenderDidEnd', { node, state });
  }

  renderControl (node, state) {
    this.publish('renderWillStart', { node, state });

    // Sync the current choice with the state if a state key is defined
    if (this._stateKey) {
      if (this._type === 'multiple-choice') {
        this._currentChoice = this._choices.filter(v => {
          v._sel = (state.get(this._stateKey).indexOf(v.key) > -1);
          return v._sel
        });
      } else {
        this._currentChoice = state.get(this._stateKey);
      }
    }

    // Render the dropdown.
    this._renderer.render(node, state, this);

    if (this.shown !== null) this.show();

    this.publish('renderDidEnd', { node, state });
  }

  /**
   * Called when the user did click on the dropdown menu. Shows the dropdown content.
   */
  show () {
    // Check if there is already a dropdown open. This can happen in case of a re-render, e.g.
    // when the window is resized. In this case, we close the current dropdown.
    if (this._node.classList.contains('dvOpen')) this.hide(false);

    // Add a CSS class to the base node
    this._node.classList.add('dvOpen');

    // First we add a DIV which covers all the content to intercept all events and react to a
    // mouse up event at any location in order to hide the dropdown.
    this._dropdownInteractionBkgd = select('body').append('div')
      .attr('class', 'dvDropdownInteractionBkgd')
      .on('mouseup', e => {
        // If the mouse up event occurred inside the dropdown node and can be considered as a click
        // we leave the dropdown open.
        const bbox = this._node.getBoundingClientRect();
        if (e.x >= bbox.left && e.x <= bbox.right && e.y >= bbox.top && e.y <= bbox.bottom) {
          // The mouse has been released inside the dropdown node. Check how much time ago the
          // mouse down event occurred. If it is a short time ago, leave the dropdown open.
          if (new Date() - this.shown > 300) this.hide();
        } else {
          this.hide();
        }
      });

    // The dropdown is rendered inside an SVG element which is inserted in a new DIV at the end of
    // the HTML document. The DIV is needed to enable scrolling if the dropdown is too big to be
    // shown completely.
    this._dropdownDiv = select('body').append('div').attr('class', 'dvDropdownContentWrapper');

    select(document.body).on('keyup', e => {
      if (e.keyCode === 27) { // escape key
        this.hide();
      }
    });

    this._root = this._dropdownDiv.append('svg').attr('class', 'dvDropdownContent');

    // Initialize the dropdown content elements. Each content element is a separate group element
    // which will be positioned using a transform.
    this._dropdownElements = this._choices.map(choice => {
      // Add the group element to the SVG root node
      const g = this._root.append('g').attr('class', 'dvDropdownElement').datum(choice);
      if (choice.enabled === false) g.classed('dvDisabled', true);

      // The renderer will initialize the dropdown element and the symbol
      this._renderer.initElement({ choice: choice, node: g }, this.state, this);
      this._renderer.initSymbol({ choice: choice, node: g }, this.state, this);

      // Bind the selection event to the content element node
      if (choice.enabled !== false) g.on('mouseup', this.handleSelect.bind(this));

      // Return the choice and the group node which will be kept in the _dropdownElements variable.
      return { choice: choice, node: g }
    });

    this.renderControlContent();

    this.shown = new Date();
  }

  renderControlContent () {
    // Compute the available width. There is an optimal width which is at least the width of the
    // dropdown itself, and there is a maximum width which is the width of the document itself.
    const documentWidth = document.body.getBoundingClientRect().width - 4;

    // The optimal width is ideally the width of the dropdown, but at least the minimum width
    // defined in the dropdown style (by default 100 pixels). If the document width is less, the
    // document width is taken instead.
    const optimalWidth = Math.min(
      Math.max(this.width - 4, this._style.content.minWidth),
      documentWidth
    );

    // Prerender the dropdown content elements. The prerender stage is where the dimensions should
    // be fixed. The prerendering itself is done by the renderer which receives the available width
    // for the content element (both the document width and the optimal width are provided).
    // The prerender step needs to return the required width for the element.
    const elementWidths = this._dropdownElements.map(el => {
      const w = this._renderer.prerenderElement(
        { choice: el.choice, node: el.node, width: optimalWidth, maxWidth: documentWidth },
        this.state,
        this
      );
      this._renderer.prerenderSymbol(
        { choice: el.choice, node: el.node, elementWidth: w },
        this.state,
        this
      );
      return w
    });

    // Compute the final width and set the width of the root SVG element.
    const finalWidth = Math.max(Math.max(...elementWidths), optimalWidth);
    this._root.attr('width', finalWidth);

    // Render the dropdown content elements. Only now the final width is known and hence the
    // required height for each element can be determined.
    let currentY = 0;
    this._dropdownElements.forEach(el => {
      const h = this._renderer.renderElement(
        { choice: el.choice, node: el.node, width: finalWidth },
        this.state,
        this
      );
      el.node.attr('transform', `translate(0 ${currentY})`);
      currentY += h;

      this._renderer.renderSymbol(
        { choice: el.choice, node: el.node, width: finalWidth, elementHeight: h },
        this.state,
        this
      );

      return h
    });

    // Set the height of the root SVG element
    this._root.attr('height', currentY);

    // Position the DIV
    const brect = this._node.getBoundingClientRect();
    const yOffset = window.scrollY;

    const left = Math.min(brect.left, documentWidth + 4 - finalWidth);
    this._dropdownDiv
      .style('width', `${finalWidth}px`)
      .style('left', `${left}px`)
      .style('top', `${brect.bottom + yOffset + 2}px`);

    // Most of the time the positioning is correct using the code above. In some cases, there is
    // a small deviation which disappears if we call the client rect once more.
    const top = this._node.getBoundingClientRect().bottom + yOffset + 3;
    this._dropdownDiv.style('top', `${top}px`);

    // Check if the dropdown content is too big for the window. If so, activate the scroll
    const height = Math.min(currentY, window.innerHeight - top - 8);
    this._dropdownDiv.style('height', `${height}px`);
    if (height < currentY) this._dropdownDiv.style('overflow-y', 'scroll');

    // Switch the cue if there is one
    const cue = this._node.querySelector('polyline');
    cue && cue.setAttribute('transform', 'translate(0,35)scale(1,-1)');
  }

  hide (close = true) {
    this._dropdownInteractionBkgd.remove();
    this._dropdownDiv.remove();
    select(document.body).on('keyup', null);
    if (close) {
      this._node.classList.remove('dvOpen');
      const cue = this._node.querySelector('polyline');
      cue && cue.setAttribute('transform', '');
      this.shown = null;
    }
  }

  handleSelect (e, opt) {
    if (this._type === 'multiple-choice') {
      // Make sure there is a current choice object available.
      if (!this._currentChoiceObj) this._currentChoiceObj = this._choices.filter(v => v._sel);

      // Validate minimum and maximum number of selections
      const nSelectedItems = this._currentChoiceObj.length + (opt._sel ? -1 : +1);
      if (nSelectedItems < this._minSelections) {
        this.publish('validationError', {
          error: {
            currentChoice: this._currentChoiceObj,
            offendingChoice: opt,
            message: `Minimum number of required selections: ${this._minSelections}`,
            code: 101
          },
          state: this.state
        });
        return
      }

      if (nSelectedItems > this._maxSelections) {
        this.publish('validationError', {
          error: {
            currentChoice: this._currentChoiceObj,
            offendingChoice: opt,
            message: `Maximum number of allowed selections: ${this._maxSelections}`,
            code: 102
          },
          state: this.state
        });
        return
      }

      opt._sel = !(opt._sel || false);
      this._currentChoiceObj = this._choices.filter(v => v._sel);
      this._currentChoice = this._currentChoiceObj.map(v => v.key);
    } else {
      this._currentChoiceObj = opt;
      this._currentChoice = opt.key;
    }

    // Hide the dropdown content
    this.hide(this._closeOnSelection);

    // Fire the select event
    this.publish('select', {
      selection: this._currentChoiceObj,
      state: this.state
    });

    // Update the state if a key is set
    if (this._stateKey) {
      let newState = {};
      newState[this._stateKey] = this._currentChoice;
      newState = this._stateKeyAction(newState, this, this.state) || newState;
      Object.keys(newState).forEach(k => {
        if (this.state.get(k) !== newState[k]) {
          this.state.set(k, newState[k]);
        }
      });
    } else {
      // If there is a state no need to manually update as the dropdown will
      // get rerendered anyway. Otherwise, we need to update the dropdown
      if (typeof this._renderer.update === 'function') {
        this._renderer.update(this);
      }
    }
  }
}

function dropdown (config, style) {
  return new Dropdown(config, style)
}

class ExportIcon {
  constructor (options = {}) {
    this._style = {
      fill: 'none',
      stroke: '#069',
      'stroke-width': '2px'
    };
    this._style = merge(this._style, options.style || {});
  }

  render (node, _viewRect) {
    select(node).selectAll('g.dv_exportIcon')
      .data([1])
      .join('g')
      .attr('class', 'dv_exportIcon');

    // Draw the background rect
    select(node).select('g.dv_exportIcon')
      .selectAll('rect')
      .data([1])
      .join('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 24)
      .attr('height', 24)
      .style('fill', '#fff')
      .style('stroke', 'none')
      .style('stroke-width', 0);

    // Draw the icon with a standard size of 24 x 24 pixels
    const path = select(node).select('g.dv_exportIcon')
      .selectAll('path')
      .data([1])
      .join('path')
      .attr('d', 'M1,15 L1,21 L23,21 L23,15 M12,3 L12,15 M6,11 L12,17 L18,11')
      .style('stroke-linecap', 'square');

    for (const k in this._style) {
      path.style(k, this._style[k]);
    }
  }
}

class ExportControl extends Dropdown {
  constructor (config, style) {
    config.type = 'zero-choice';
    super(config, style);

    this._dropdownChoices = [];
    for (const fmt of config.formats || []) {
      this._dropdownChoices.push({
        key: fmt.format,
        value: (fmt.options && fmt.options.text) || fmt.format.toUpperCase(),
        options: fmt.options || {}
      });
    }

    this._iconRenderer = new ExportIcon();
    this.mergeStyle({ padding: { top: 0, bottom: 0 } });

    this.renderer({
      init: this._initIcon.bind(this),
      prerender: this._prerenderIcon.bind(this),
      render: this._renderIcon.bind(this)
    });
  }

  init (node, state, dropdown) {
    super.init(node, state, dropdown);
    node.classList.add('dvNoprint');
  }

  handleSelect (_e, opt) {
    // Close the dropdown
    this._dropdown.hide(true);

    // Gather the data from the data sources if needed. SVG and PNG formats without custom export
    // function don't need any data for the export.
    let data = null;
    if (!['svg', 'png'].includes(opt.key) || opt.options.exportFunction) {
      const dsKeys = this.layout.dataSourceNames();
      if (dsKeys.length === 0) {
        throw new Error('Data export error. No data sources registered with the layout.')
      }

      // Gather all data from the data sources
      const dsData = {};
      dsKeys.forEach(k => {
        const ds = this.layout.dataSource(k);
        dsData[k] = ds.get();
      });

      // Prepare the data for export
      data = opt.options.dataExtractor
        ? opt.options.dataExtractor(dsData, this.state, this)
        : dsData;
    }

    // If an export function is defined, gather the data and call it.
    if (opt.options.exportFunction && typeof opt.options.exportFunction === 'function') {
      opt.options.exportFunction(
        { data: data, layout: this.layout, options: opt.options },
        this.state,
        this
      );
      return
    }

    // SVG and PNG formats are handled by the layout's save functions.
    if (['svg', 'png'].includes(opt.key)) {
      const saveFn = opt.key === 'svg'
        ? this.layout.saveAsSvg.bind(this.layout)
        : this.layout.saveAsPng.bind(this.layout);

      const defaultFileName = `chart.${opt.key}`;
      saveFn(opt.options.filename || defaultFileName, opt.options);
      return
    }

    // Other accepted formats are CSV, DSV and TSV.
    if (!['csv', 'dsv', 'tsv'].includes(opt.key)) {
      console.error(`No export function available for format ${opt.key.toUpperCase()}.`);
      return
    }

    // Make sure the separator and filename options are defined.
    opt.options.sep = opt.options.sep || (opt.key === 'csv' ? ',' : '\t');
    opt.options.filename = opt.options.filename || `chart.${opt.key}`;

    // Make sure the data is an array. If it is an object, get its first array property.
    let exportData = data;
    if (typeof data === 'object' && !Array.isArray(data)) {
      const arrays = Object.values(data).filter(v => Array.isArray(v));
      if (arrays.length === 0) {
        throw new Error('Data export error. No array data found in the data object.')
      }
      exportData = arrays[0];
    }

    saveAsDsv(
      opt.options.filename,
      exportData,
      opt.options.sep,
      {
        columns: opt.options.columns || null,
        header: opt.options.header || null,
        footer: opt.options.footer || null
      }
    );
  }

  _initIcon (node, _state, _dropdown) {
    select(node).append('rect').style('opacity', 0);
  }

  _prerenderIcon (_node, _state, dropdown) {
    this._dropdown = dropdown;
    dropdown.height = 24;
  }

  _renderIcon (node, _state, dropdown) {
    select(node).select('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', dropdown.width)
      .attr('height', dropdown.height);

    this._iconRenderer.render(node, { width: dropdown.width, height: dropdown.height });
    return node
  }
}

function exportControl (config, style) {
  return new ExportControl(config, style)
}

/**
 * A ButtonCollection groups together several buttons and arranges them
 * in a row or stacks them according to the available space.
 * A ButtonCollection itself does not do anything yet, it is useful for
 * the Checkboxes and RadioButtons, and for implementing custom button
 * collections.
 */
class ButtonCollection extends Control {
  constructor (config, style) {
    super(config, style);

    this.classList = this.classList || [];
    this.classList.push('dvButtonCollection');

    this._buttons = [];

    // Get the config
    this._buttonOptions = config.options || [];
    this._key = typeof this._buttonOptions === 'object' && !Array.isArray(this._buttonOptions)
      ? config.optionsKey
      : undefined;

    this._stateKey = config.mapToState;

    // All buttons are displayed in a single row by default. If not possible, and the
    // allowGridLayout flag is set, the buttons are rendered in several rows, in a grid layout.
    // If the allowGridLayout flag is false, or if the space does not permit several columns,
    // all buttons are stacked on top of each other.
    this._allowGridLayout = config.allowGridLayout !== undefined ? config.allowGridLayout : true;

    // Set the default style
    this.mergeStyle({
      align: 'center',
      padding: { top: 2, right: 2, bottom: 10, left: 2, horizontal: 20, vertical: 7 },
      font: { size: 16, weight: 400 },
      maxWidth: null
    });
  }

  initControl (node, state) {
    this.publish('init', { node, state });
    this._initialized = true;
  }

  renderControl (node, state) {
    this.publish('renderWillStart', { node, state });
    this._renderButtons(node, state);
    this.publish('renderDidEnd', { node, state });
  }

  prerenderControl (node, state) {
    this.publish('prerenderWillStart', { node, state });

    // If the options is a function, execute it now.
    this._buttons = x$1(this._buttonOptions, {}, state, this);

    // Set the text style attributes as they will affect the text width.
    select(node)
      .style('font-size', `${this._style.font.size || 12}px`)
      .style('font-weight', this._style.font.weight || 'normal');

    // Create a group element for each button
    select(node)
      .selectAll('g.dvButtonCollection')
      .data(this._buttons)
      .join('g')
      .attr('class', 'dvButtonCollection')
      .classed(this.classList.join(' '), true)
      .attr('role', 'button')
      .attr('tabindex', '0')
      .on('click', this.handleButtonClick.bind(this))
      .on('keyup', this.handleKeyUp.bind(this))
      .each((d, i, sel) => {
        if (!sel[i].getAttribute('data-init')) {
          this.initButton(sel[i], state, d, i);
          sel[i].setAttribute('data-init', '1');
        }
      });

    // Collect all button sizes. We need to prerender each button to get its size.
    // The button size is just the bounding box of the symbol and text without any padding.
    const buttonSizes = [];
    select(node)
      .selectAll('g.dvButtonCollection')
      .each((d, i, sel) => {
        buttonSizes.push(this.prerenderButton(sel[i], state, d, i));
      });

    // Compute the button layout.
    this.buttonLayout = this._layoutButtons(buttonSizes.map(bs => bs.width));

    // Computed the cumulated width and height for each button
    this.cumulatedWidth = [];
    this.cumulatedHeight = [];
    let w = this._style.padding.left;
    let h = this._style.padding.top;
    for (let i = 0; i < buttonSizes.length; i++) {
      // Compute the row (y) and column (x) index
      const x = i % this.buttonLayout.cols;
      if (x === 0) {
        w = this._style.padding.left;
        if (i > 0) h += buttonSizes[i - 1].height + this._style.padding.vertical;
      } else {
        w += this.buttonLayout.columnWidths[x - 1];
      }
      this.cumulatedWidth.push(w);
      this.cumulatedHeight.push(h);
    }

    // Compute the total height, which is the cumulated height for each button plus its own height
    const totalHeight = Math.max(...buttonSizes.map((v, i) => this.cumulatedHeight[i] + v.height));

    // If the buttons should be centered, compute the overall x-offset
    this.buttonXOffset = 0;
    if (this._style.align === 'center' && this.buttonLayout.cols > 1) {
      this.buttonXOffset = Math.max(0, (this.width - this.buttonLayout.width) / 2);
    }

    // Set the height of the checkbox control
    this.height = totalHeight + this._style.padding.bottom;

    this.publish('prerenderDidEnd', { node, state });
  }

  _renderButtons (node, state) {
    // Set the selected button class
    select(node)
      .selectAll('g.dvButtonCollection')
      .data(this._buttons)
      .classed('dvSelected', d => this.isSelected(d, state))
      .attr('aria-pressed', d => this.isSelected(d, state) ? 'true' : 'false');

    // Render each button
    select(node)
      .selectAll('g.dvButtonCollection')
      .each((d, i, sel) => {
        this.renderButton(sel[i], state, d, i);
      });
  }

  _layoutButtons (buttonSizes) {
    // Get the available width
    const aw = this.width - this._style.padding.left - this._style.padding.right;

    // The number of buttons to layout
    const n = buttonSizes.length;

    // The sum of all button sizes.
    const sw = buttonSizes.reduce((a, b) => a + b) + (n - 1) * this._style.padding.horizontal;

    // If no grid layout is possible, we can only have the buttons in one row or in one column.
    if (!this._allowGridLayout) {
      if (sw > aw) {
        // Stacked layout, only one column.
        const buttonWidth = buttonSizes.reduce((a, b) => Math.max(a, b));
        return {
          rows: n,
          cols: 1,
          columnWidths: [buttonWidth],
          width: buttonWidth
        }
      }
    }

    // If a grid layout is possible, we start with 1 row and evaluate if it fits. If not, increase
    // the number of rows by 1, until it fits.
    let nrows = 1;
    let btnLayout = null;
    while (nrows <= n) {
      btnLayout = this._layoutButtonsInGrid(nrows, buttonSizes);
      if (btnLayout.width <= aw) return btnLayout
      nrows += 1;
    }
    return btnLayout
  }

  _layoutButtonsInGrid (nrows, buttonSizes) {
    const ncols = Math.ceil(buttonSizes.length / nrows);

    // Compute the width of each column. This is the maximum width between all buttons in the
    // column. Start with a width of 0.
    const colw = new Array(ncols).fill(0);
    buttonSizes.forEach((w, i) => {
      colw[i % ncols] = Math.max(colw[i % ncols], w);
    });

    // Add the horizontal padding except for the last column.
    for (let i = 0; i < ncols - 1; i++) {
      colw[i] += this._style.padding.horizontal;
    }

    return {
      rows: nrows,
      cols: ncols,
      columnWidths: colw,
      width: colw.reduce((a, b) => a + b)
    }
  }

  /**
   * initButton is called exactly once for each button. The node passed is a
   * SVG group element inside which the button can be placed.
   *
   * This method is typically implemented by the subclass.
   *
   * @param {DOM element} node The DOM node where the button should be placed
   *  into. This is a SVG group element.
   * @param {*} state The current state as passed from the layout.
   * @param {*} option The value for this button as passed to `.options`.
   * @param {integer} idx The index for this button in the array of values.
   */
  initButton (_node, _state, _option, _idx) {
    console.warn('ButtonCollection.initButton not implemented.');
  }

  /**
   * Allows the button to render itself to evaluate its size (width and height).
   * This method is always called after `initButton` and before `renderButton`.
   *
   * @param {DOM element} node The DOM node where the button should be placed
   *  into. This is a SVG group element.
   * @param {*} state The current state as passed from the layout.
   * @param {*} option The value for this button as passed to `.options`.
   * @param {integer} idx The index for this button in the array of values.
   *
   * @returns an object with the width and height:
   *  `{ width: <number>, height: <int> }`
   */
  prerenderButton (_node, _state, _option, _idx) {
    console.warn('ButtonCollection.prerenderButton not implemented.');
    return { width: 0, height: 0 }
  }

  renderButton (_node, _state, _option, _idx) {
    console.warn('ButtonCollection.renderButton not implemented.');
  }

  handleButtonClick (_evt, _option) {
    console.warn('ButtonCollection.handleButtonClick not implemented.');
  }

  handleKeyUp (evt, option) {
    if (evt.keyCode === 13) { // Enter, return
      this.handleButtonClick(evt, option);
    }
  }

  /**
   * Returns true if the passed option is selected.
   */
  isSelected (_option) {
    console.warn('ButtonCollection.isSelected not implemented.');
    return false
  }
}

class RadioButtons extends ButtonCollection {
  constructor (config, style) {
    super(config, style);

    this.mergeStyle({
      symbol: {
        size: 20,
        margin: { top: 0, right: 5, bottom: 0, left: 0 }
      }
    });
  }

  initButton (node, _state, option, _idx) {
    option._uid = v4().replace(/-/g, '');
    select(node).append('rect').attr('class', 'dvBkgd');
    select(node).append('g').attr('class', 'dvText').attr('id', `txt${option._uid}`);
    select(node).append('circle').attr('class', 'dvFocus');
    select(node).append('circle').attr('class', 'dvSymbol');
    select(node).append('circle').attr('class', 'dvSymbolInner');
    select(node).attr('aria-labelledby', `txt${option._uid}`);
  }

  prerenderButton (node, state, option, _idx) {
    // Get a reference to the style as we use it a lot
    const st = this._style;
    const sy = st.symbol;

    const renderer = new TextRenderer({
      fontSize: this._style.font.size,
      fontWeight: this._style.font.weight
    });

    // Compute the available width for the label text. The label text width can be at most the width
    // of the button collection, or if given the maxWidth. We need to substract the space for the
    // symbol.
    const maxLabelWidth = (st.maxWidth > 0 ? st.maxWidth : this.width) -
      (sy.margin.left + sy.size + sy.margin.right);

    // We don't need to actually render anything at this stage.
    // We just need to figure out the size the button will have.
    // Make also sure we have the latest text label.
    renderer.render(
      option.text,
      node.querySelector('g.dvText'),
      { state: state },
      null,
      { width: maxLabelWidth }
    );

    option._textClientRect = node.querySelector('g.dvText').getBoundingClientRect();
    option._textWidth = option._textClientRect.width;
    option._textHeight = option._textClientRect.height;

    // Compute the width and keep it around inside the button data.
    // The width is computed without any padding. The padding is handled by the button collection.
    option._width = sy.margin.left + sy.size + sy.margin.right + option._textWidth;

    // Compute the height: this is either the symbol height or the text height, whatever is bigger,
    // plus the margins.
    option._height = sy.margin.top + Math.max(sy.size, option._textHeight) + sy.margin.bottom;

    return { width: option._width, height: option._height }
  }

  renderButton (node, _state, option, idx) {
    this._renderBackgroundRect(node, idx);
    this._renderLabel(node, option, idx);
    this._renderSymbol(node, option, idx);
    this._renderCheckmark(node, option, idx);
  }

  _renderBackgroundRect (node, idx) {
    // Define the background rectangles
    select(node)
      .select('rect.dvBkgd')
      .attr('x', () => {
        return this.cumulatedWidth[idx] + this.buttonXOffset
      })
      .attr('y', _d => {
        return this.cumulatedHeight[idx]
      })
      .attr('width', _d => {
        const colIdx = idx % this.buttonLayout.cols;
        return (
          this.buttonLayout.columnWidths[colIdx] -
          (colIdx === this.buttonLayout.cols - 1 ? 0 : this._style.padding.horizontal)
        )
      })
      .attr('height', d => d._height);
  }

  _renderLabel (node, _option, idx) {
    const st = this._style;

    // Define the location of the text labels.
    const xOffset = this.cumulatedWidth[idx] + this.buttonXOffset + st.symbol.margin.left +
      st.symbol.size + st.symbol.margin.right;

    const yOffset = this.cumulatedHeight[idx];

    select(node)
      .select('g.dvText')
      .attr('transform', `translate(${xOffset} ${yOffset})`);
  }

  _renderSymbol (node, _option, idx) {
    const st = this._style;

    const xOffset = this.cumulatedWidth[idx] + this.buttonXOffset;
    const x = xOffset + st.symbol.margin.left + (st.symbol.size / 2);

    const yOffset = this.cumulatedHeight[idx];
    const y = yOffset + st.symbol.margin.top + (st.symbol.size / 2);

    // Draw the circles for the symbol and focus ring
    select(node).select('circle.dvFocus')
      .attr('cx', x).attr('cy', y)
      .attr('r', (st.symbol.size / 2) + 1.5);

    select(node).select('circle.dvSymbol')
      .attr('cx', x).attr('cy', y)
      .attr('r', (st.symbol.size / 2) - 1);

    select(node).select('circle.dvSymbolInner')
      .attr('cx', x).attr('cy', y)
      .attr('r', (st.symbol.size / 2) - 6);
  }

  _renderCheckmark (_node, _option, _idx) {}

  handleButtonClick (_evt, option) {
    // If not state key is defined, we don't do anything.
    if (!this._stateKey) return

    // This function is called when the user clicks on a radio button.
    // If the button is already selected, we don't do anything.
    if (option.value === this.state.get(this._stateKey)) return

    // Update the state
    this.state.set(this._stateKey, option.value);
  }

  isSelected (option) {
    if (!this._stateKey) return false
    return option.value === this.state.get(this._stateKey)
  }
}

function radioButtons (config, style) {
  return new RadioButtons(config, style)
}

class Checkboxes extends RadioButtons {
  constructor (config, style) {
    super(config, style);

    // The maximum and minimum number of selections.
    this._minSelections = Math.max(0, config.minSelections || 0);
    this._maxSelections = config.maxSelections || Infinity;
  }

  initButton (node, _state, option, _idx) {
    option._uid = v4().replace(/-/g, '');
    select(node).append('rect').attr('class', 'dvBkgd');
    select(node).append('g').attr('class', 'dvText').attr('id', `txt${option._uid}`);
    select(node).append('rect').attr('class', 'dvFocus');
    select(node).append('rect').attr('class', 'dvSymbol');
    select(node).append('polyline');
    select(node).attr('aria-labelledby', `txt${option._uid}`);
  }

  _renderSymbol (node, _option, idx) {
    const st = this._style;

    const xOffset = this.cumulatedWidth[idx] + this.buttonXOffset;
    const x = xOffset + st.symbol.margin.left;

    const yOffset = this.cumulatedHeight[idx];
    const y = yOffset + st.symbol.margin.top;

    select(node).select('rect.dvFocus')
      .attr('x', x - 2.5).attr('y', y - 2.5)
      .attr('width', st.symbol.size + 4)
      .attr('height', st.symbol.size + 4);

    select(node)
      .select('rect.dvSymbol')
      .attr('x', x)
      .attr('y', y)
      .attr('width', st.symbol.size - 1)
      .attr('height', st.symbol.size - 1)
      .attr('rx', 2);
  }

  _renderCheckmark (node, _option, idx) {
    const st = this._style;

    // Draw the path for the symbols
    select(node)
      .select('polyline')
      .attr('points', () => {
        const xOffset = this.cumulatedWidth[idx] + this.buttonXOffset;
        const yOffset = this.cumulatedHeight[idx];
        const x = st.symbol.margin.left + xOffset;
        const y = yOffset + st.symbol.margin.top;
        const s = st.symbol.size;
        return `${x + 0.2 * s},${y + 0.5 * s} ${x + 0.4 * s},${y + 0.7 * s} ${x + 0.8 * s},${y + 0.2 * s}`
      });
  }

  handleButtonClick (_evt, option) {
    const st = this.state.get(this._stateKey) || [];

    // Calculate the number of checked boxes after the update in order to validate against the
    // minimum and maximum number of selections.
    const nSelectedItems = st.length + (st.indexOf(option.value) > -1 ? -1 : 1);
    if (nSelectedItems < this._minSelections) {
      this.publish('validationError', {
        currentChoice: st,
        offendingChoice: option.value,
        message: `Minimum number of required selections: ${this._minSelections}`,
        code: 101
      });
      return
    }

    if (nSelectedItems > this._maxSelections) {
      this.publish('validationError', {
        currentChoice: st,
        offendingChoice: option.value,
        message: `Maximum number of allowed selections: ${this._maxSelections}`,
        code: 102
      });
      return
    }

    // Toggle the button
    if (st.indexOf(option.value) > -1) {
      st.splice(st.indexOf(option.value), 1);
    } else {
      st.push(option.value);
    }

    // Update the state which will trigger a re-render
    this.state.set(this._stateKey, st);
  }

  isSelected (option) {
    return (this.state.get(this._stateKey) || []).indexOf(option.value) > -1
  }
}

function checkboxes (config, style) {
  return new Checkboxes(config, style)
}

// These are typically used in conjunction with noevent to ensure that we can
// preventDefault on the event.
const nonpassive = {passive: false};
const nonpassivecapture = {capture: true, passive: false};

function nopropagation(event) {
  event.stopImmediatePropagation();
}

function noevent(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}

function nodrag(view) {
  var root = view.document.documentElement,
      selection = select(view).on("dragstart.drag", noevent, nonpassivecapture);
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", noevent, nonpassivecapture);
  } else {
    root.__noselect = root.style.MozUserSelect;
    root.style.MozUserSelect = "none";
  }
}

function yesdrag(view, noclick) {
  var root = view.document.documentElement,
      selection = select(view).on("dragstart.drag", null);
  if (noclick) {
    selection.on("click.drag", noevent, nonpassivecapture);
    setTimeout(function() { selection.on("click.drag", null); }, 0);
  }
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", null);
  } else {
    root.style.MozUserSelect = root.__noselect;
    delete root.__noselect;
  }
}

var constant = x => () => x;

function DragEvent(type, {
  sourceEvent,
  subject,
  target,
  identifier,
  active,
  x, y, dx, dy,
  dispatch
}) {
  Object.defineProperties(this, {
    type: {value: type, enumerable: true, configurable: true},
    sourceEvent: {value: sourceEvent, enumerable: true, configurable: true},
    subject: {value: subject, enumerable: true, configurable: true},
    target: {value: target, enumerable: true, configurable: true},
    identifier: {value: identifier, enumerable: true, configurable: true},
    active: {value: active, enumerable: true, configurable: true},
    x: {value: x, enumerable: true, configurable: true},
    y: {value: y, enumerable: true, configurable: true},
    dx: {value: dx, enumerable: true, configurable: true},
    dy: {value: dy, enumerable: true, configurable: true},
    _: {value: dispatch}
  });
}

DragEvent.prototype.on = function() {
  var value = this._.on.apply(this._, arguments);
  return value === this._ ? this : value;
};

// Ignore right-click, since that should open the context menu.
function defaultFilter(event) {
  return !event.ctrlKey && !event.button;
}

function defaultContainer() {
  return this.parentNode;
}

function defaultSubject(event, d) {
  return d == null ? {x: event.x, y: event.y} : d;
}

function defaultTouchable() {
  return navigator.maxTouchPoints || ("ontouchstart" in this);
}

function drag() {
  var filter = defaultFilter,
      container = defaultContainer,
      subject = defaultSubject,
      touchable = defaultTouchable,
      gestures = {},
      listeners = dispatch("start", "drag", "end"),
      active = 0,
      mousedownx,
      mousedowny,
      mousemoving,
      touchending,
      clickDistance2 = 0;

  function drag(selection) {
    selection
        .on("mousedown.drag", mousedowned)
      .filter(touchable)
        .on("touchstart.drag", touchstarted)
        .on("touchmove.drag", touchmoved, nonpassive)
        .on("touchend.drag touchcancel.drag", touchended)
        .style("touch-action", "none")
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  function mousedowned(event, d) {
    if (touchending || !filter.call(this, event, d)) return;
    var gesture = beforestart(this, container.call(this, event, d), event, d, "mouse");
    if (!gesture) return;
    select(event.view)
      .on("mousemove.drag", mousemoved, nonpassivecapture)
      .on("mouseup.drag", mouseupped, nonpassivecapture);
    nodrag(event.view);
    nopropagation(event);
    mousemoving = false;
    mousedownx = event.clientX;
    mousedowny = event.clientY;
    gesture("start", event);
  }

  function mousemoved(event) {
    noevent(event);
    if (!mousemoving) {
      var dx = event.clientX - mousedownx, dy = event.clientY - mousedowny;
      mousemoving = dx * dx + dy * dy > clickDistance2;
    }
    gestures.mouse("drag", event);
  }

  function mouseupped(event) {
    select(event.view).on("mousemove.drag mouseup.drag", null);
    yesdrag(event.view, mousemoving);
    noevent(event);
    gestures.mouse("end", event);
  }

  function touchstarted(event, d) {
    if (!filter.call(this, event, d)) return;
    var touches = event.changedTouches,
        c = container.call(this, event, d),
        n = touches.length, i, gesture;

    for (i = 0; i < n; ++i) {
      if (gesture = beforestart(this, c, event, d, touches[i].identifier, touches[i])) {
        nopropagation(event);
        gesture("start", event, touches[i]);
      }
    }
  }

  function touchmoved(event) {
    var touches = event.changedTouches,
        n = touches.length, i, gesture;

    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        noevent(event);
        gesture("drag", event, touches[i]);
      }
    }
  }

  function touchended(event) {
    var touches = event.changedTouches,
        n = touches.length, i, gesture;

    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() { touchending = null; }, 500); // Ghost clicks are delayed!
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        nopropagation(event);
        gesture("end", event, touches[i]);
      }
    }
  }

  function beforestart(that, container, event, d, identifier, touch) {
    var dispatch = listeners.copy(),
        p = pointer(touch || event, container), dx, dy,
        s;

    if ((s = subject.call(that, new DragEvent("beforestart", {
        sourceEvent: event,
        target: drag,
        identifier,
        active,
        x: p[0],
        y: p[1],
        dx: 0,
        dy: 0,
        dispatch
      }), d)) == null) return;

    dx = s.x - p[0] || 0;
    dy = s.y - p[1] || 0;

    return function gesture(type, event, touch) {
      var p0 = p, n;
      switch (type) {
        case "start": gestures[identifier] = gesture, n = active++; break;
        case "end": delete gestures[identifier], --active; // falls through
        case "drag": p = pointer(touch || event, container), n = active; break;
      }
      dispatch.call(
        type,
        that,
        new DragEvent(type, {
          sourceEvent: event,
          subject: s,
          target: drag,
          identifier,
          active: n,
          x: p[0] + dx,
          y: p[1] + dy,
          dx: p[0] - p0[0],
          dy: p[1] - p0[1],
          dispatch
        }),
        d
      );
    };
  }

  drag.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : constant(!!_), drag) : filter;
  };

  drag.container = function(_) {
    return arguments.length ? (container = typeof _ === "function" ? _ : constant(_), drag) : container;
  };

  drag.subject = function(_) {
    return arguments.length ? (subject = typeof _ === "function" ? _ : constant(_), drag) : subject;
  };

  drag.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant(!!_), drag) : touchable;
  };

  drag.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? drag : value;
  };

  drag.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
  };

  return drag;
}

class Slider extends Control {
  constructor (config, style) {
    super(config, style);

    this._initialValue = config.initialValue || null;
    this._label = config.label || null;
    this._range = config.range || [0, 100];
    this._steps = config.steps || null;

    // A block slider has two values (the state value is an array of two values),
    // but the distance between the two values is constant. This means, the slider
    // with the two handles moves as a single block (hence the name). There is also
    // a visual cue in the middle which can also be moved.
    this._blockSlider = config.blockSlider || false;
    /*
    To disable a handler, we can input an array of true or false values having the same
    number of arguments. If true, the handle will not move. the default values is false.
    */
    this._disable = config.disable || [false, false];
    this._ticks = config.ticks || null;
    this._tickLabels = config.tickLabels || null;
    this._thumbLabel = typeof config.thumbLabel === 'undefined' ? true : config.thumbLabel;
    this._thumbLabelFormatter = config.thumbLabelFormatter || (v => `${v}`);
    this._sliderWidth = config.sliderWidth || (w => w);
    this._sliderHeight = config.sliderHeight || (h => h);
    this._validation = config.validation || (_newState => true);

    this._stateKey = config.mapToState || null;

    this.mergeStyle({
      tickLabel: { font: { size: 12 } },
      thumbLabel: { font: { size: 12, weight: 700, color: '#757575' } },
      margin: { left: 18, top: 18, right: 18, bottom: 30 }
    });
    this.mergeStyle(style);

    this.textRenderer = null;
    this._handleKeyup = this._handleKeyup.bind(this);

    // Define a flag to control if an initial value has been set.
    this._initialValueSet = false;

    this._blockDistance = null;

    this._c = {
      width: null
    };
  }

  checkSliderValue () {
    const v = this.state.get(this._stateKey);
    if (this.isRangeSlider()) {
      return (v[0] >= this._rangeValues()[0] && v[0] <= this._rangeValues()[1] &&
        v[1] >= this._rangeValues()[0] && v[1] <= this._rangeValues()[1])
    }
    return v >= this._rangeValues()[0] && v <= this._rangeValues()[1]
  }

  /**
   * Returns true if the slider is a range slider (with two handles).
   * A range slider is simply defined by setting the mapped state value to an array.
   */
  isRangeSlider () {
    return (
      this.state.get(this._stateKey) instanceof Array &&
      this.state.get(this._stateKey).length >= 2
    )
  }

  initControl (node, state) {
    // Check if the stateKey is set
    if (typeof this._stateKey !== 'string') {
      console.error('The value for a slider must be mapped to a state key.');
      return
    }

    // Add the dvSlider class if not defined
    node.classList.add('dvSlider');

    const range = this._rangeValues();

    // Check if the current slider value is valid, or if a initial value should be set.
    // If not, we set it to the initial value if provided, or to the minimum value defined in the
    // range by setting the state,
    if (
      !this.checkSliderValue() ||
      (this._initialValue !== null && this._initialValueSet === false)
    ) {
      this._initialValueSet = true;

      const newState = {};

      // Check if we have an initial value for the slider. It is best practice to set an initial
      // value by passing the appropriate state values to the layout. This avoids one round of
      // rendering. However, if the slider is data-drive, it might be needed to set it using a
      // callback function.
      if (this._initialValue) {
        const sliderData = {};
        this.requiredDataSources.forEach(ds => {
          sliderData[ds] = this.data(ds);
        });
        newState[this._stateKey] = x$1(this._initialValue, sliderData, state, this);
      } else {
        console.warn('Initial slider value not valid. Setting to minimum value.');
        newState[this._stateKey] = range[0];
      }

      Object.keys(newState).forEach(k => {
        this.state.set(k, newState[k]);
      });
    }

    // Create the base nodes for the slider. The dvBkgd line is the visible horizontal line of
    // the slider. There is also a dvBkgd_hdl which is a transparent line in on top of the dvBkgd
    // line which serves as click handler.
    // Additionnally, we have a dvCurval line which can indicate the current value using a
    // different style.

    select(node).append('line').attr('class', 'dvBkgd');

    select(node).append('line')
      .attr('class', 'dvCurval' + (this.isRangeSlider() ? ' dvRange' : ''));

    select(node).append('g').attr('class', 'dvTicks');
    select(node).append('g').attr('class', 'dvFocus');

    // Create the text renderer for the thumb labels
    this.textRenderer = new TextRenderer({
      width: 300,
      textAlign: 'center',
      fontSize: this._style.thumbLabel.font.size,
      fontWeight: this._style.thumbLabel.font.weight,
      fontColor: this._style.thumbLabel.font.color
    });

    if (this._thumbLabel) {
      select(node).append('g').attr('class', 'dvThumbLabel dvThumbLabel1');
      if (this.isRangeSlider()) {
        select(node).append('g').attr('class', 'dvThumbLabel dvThumbLabel2');
      }

      this._style.margin.top += this._style.thumbLabel.font.size;
    }

    select(node).append('line').attr('class', 'dvBkgd_hdl dvNoprint')
      .on('click', this._handleClickOnLine.bind(this));

    select(node).append('circle')
      .attr('class', 'dvVal1')
      .attr('role', 'slider');

    if (this.isRangeSlider()) {
      select(node).append('circle')
        .attr('class', 'dvVal2');
    }

    if (this.isRangeSlider() && this._blockSlider === true) {
      // Insert the small visible rectangle in the middle of the block slider.
      // This is the visible part of the block slider.
      select(node).append('rect').attr('class', 'dvBlockValue')
        .style('fill', '#fff')
        .style('stroke', '#000')
        .style('stroke-width', '1px');

      // Insert the handle for the block slider. This is a transparent rect which is bigger than
      // the visual cue itself. We insert it behind the circle handles. The handle is used by the
      // mouse event.
      select(node).append('rect')
        .attr('class', 'dvBlockValueHandle dvNoprint')
        .attr('role', 'slider')
        .attr('tabindex', '0')
        .attr('aria-valuemax', range[0])
        .attr('aria-valuemin', range[1])
        .attr('aria-label', typeof this._label === 'function' ? this._label(state, this) : this._label)
        .on('focus', this._handleFocus(-1).bind(this))
        .on('blur', this._handleBlur(-1).bind(this))
        .call(
          drag()
            .on('start', this._dragStart(-1).bind(this))
            .on('drag', this._drag(-1).bind(this))
            .on('end', this._dragEnd(-1).bind(this))
        )
        .style('fill-opacity', 0);
    }
    if (this._disable[0] === false) {
      select(node)
        .append('circle')
        .attr('class', 'dvHdl1 dvNoprint')
        .attr('role', 'slider')
        .attr('tabindex', '0')
        .attr('aria-valuemax', range[0])
        .attr('aria-valuemin', range[1])
        .attr('aria-label', typeof this._label === 'function' ? this._label(state, this) : this._label)
        .on('focus', this._handleFocus(1).bind(this))
        .on('blur', this._handleBlur(1).bind(this))
        .call(
          drag()
            .on('start', this._dragStart(1).bind(this))
            .on('drag', this._drag(1).bind(this))
            .on('end', this._dragEnd(1).bind(this))
        );
    } else {
      select(node)
        .append('circle')
        .attr('class', 'dvHdl1 dvNoprint')
        .attr('role', 'slider')
        .attr('tabindex', '0')
        .attr('aria-valuemax', range[0])
        .attr('aria-valuemin', range[1])
        .attr('aria-label', typeof this._label === 'function' ? this._label(state, this) : this._label);
    }
    if (this._disable[1] === false) {
      if (this.isRangeSlider()) {
        select(node)
          .append('circle')
          .attr('class', 'dvHdl2 dvNoprint')
          .attr('role', 'slider')
          .attr('tabindex', '0')
          .attr('aria-valuemax', range[0])
          .attr('aria-valuemin', range[1])
          .attr('aria-label', typeof this._label === 'function' ? this._label(state, this) : this._label)
          .on('focus', this._handleFocus(2).bind(this))
          .on('blur', this._handleBlur(2).bind(this))
          .call(
            drag()
              .on('start', this._dragStart(2).bind(this))
              .on('drag', this._drag(2).bind(this))
              .on('end', this._dragEnd(2).bind(this))
          );
      }
    } else {
      if (this.isRangeSlider()) {
        select(node)
          .append('circle')
          .attr('class', 'dvHdl2 dvNoprint')
          .attr('role', 'slider')
          .attr('tabindex', '0')
          .attr('aria-valuemax', range[0])
          .attr('aria-valuemin', range[1])
          .attr('aria-label', typeof this._label === 'function' ? this._label(state, this) : this._label);
      }
    }
  }

  prerenderControl (node, state) {
    this.publish('prerenderWillStart', { node, state });

    const range = this._rangeValues();

    // Get the current slider values and store them in a local variable.
    // This way, we don't have to set the state during a drag event.
    this._rangeSlider = this.isRangeSlider();
    this._curval1 = clampValueToRange(state.get(this._stateKey), range);
    this._curval2 = null;
    if (this._rangeSlider) {
      this._curval1 = clampValueToRange(state.get(this._stateKey)[0], range);
      this._curval2 = clampValueToRange(state.get(this._stateKey)[1], range);

      // Keep the block distance
      if (this._blockSlider === true && this._blockDistance === null) {
        this._blockDistance = this._curval2 - this._curval1;
      }
    }

    this._calculateSteps();
    this._calculateTicks();
    this._calculateTickLabels();

    // Set the height and width of the slider box. This depends on the orientation.
    if (this._orientation === 'vertical') {
      this.outerWidth = this._tickLabels ? 80 : 40;

      const h = typeof this._sliderHeight === 'function'
        ? this._sliderHeight(this.node.getBBox().height)
        : this._sliderHeight;
      this.height = h;
    } else {
      const w = typeof this._sliderWidth === 'function'
        ? this._sliderWidth(this.width, state, this)
        : this._sliderWidth;

      // Keep the precalculated slider width
      this._c.width = w;

      // The height is fixed for a horizontal slider and the value in _sliderHeight is ignored.
      const h = this._style.margin.top + this._style.margin.bottom;
      this.height = this._tickLabels ? h + this._style.tickLabel.font.size : h;
    }

    this.publish('prerenderDidEnd', { node, state });
  }

  renderControl (node, state) {
    this.publish('renderWillStart', { node, state });
    const st = this._style;

    select(node)
      .select('line.dvBkgd')
      .attr('x1', st.margin.left)
      .attr('y1', st.margin.top)
      .attr('x2', this._c.width - st.margin.right)
      .attr('y2', st.margin.top);

    select(node)
      .select('line.dvBkgd_hdl')
      .attr('x1', st.margin.left)
      .attr('y1', st.margin.top)
      .attr('x2', this._c.width - st.margin.right)
      .attr('y2', st.margin.top);

    this._scale = linear()
      .domain(this._rangeValues())
      .range([st.margin.left, this._c.width - st.margin.right])
      .clamp(true);

    select(node)
      .select('circle.dvVal1')
      .attr('cx', this._scale(this._curval1))
      .attr('cy', st.margin.top)
      .attr('r', 7);

    select(node)
      .select('circle.dvHdl1')
      .attr('cx', this._scale(this._curval1))
      .attr('cy', st.margin.top)
      .attr('r', 16)
      .attr('aria-valuenow', this._curval1);

    if (this._thumbLabel) {
      select(node)
        .select('g.dvThumbLabel1')
        .attr('transform', `translate(${this._scale(this._curval1) - 150} 0)`);

      this.textRenderer.render(
        this._thumbLabelFormatter(this._curval1, state, this),
        node.querySelector('g.dvThumbLabel1'),
        {}
      );
    }

    if (typeof this._focusedVal === 'number') {
      select(node)
        .select('g.dvFocus circle')
        .attr('cx', this._scale(this[`_curval${this._focusedVal}`]))
        .attr('cy', st.margin.top);
    }

    if (this._rangeSlider) {
      select(node)
        .select('circle.dvVal2')
        .attr('cx', this._scale(this._curval2))
        .attr('cy', st.margin.top)
        .attr('r', 7);

      select(node)
        .select('circle.dvHdl2')
        .attr('cx', this._scale(this._curval2))
        .attr('cy', st.margin.top)
        .attr('r', 16)
        .attr('aria-valuenow', this._curval2);

      if (this._thumbLabel) {
        select(node)
          .select('g.dvThumbLabel2')
          .attr('transform', `translate(${this._scale(this._curval2) - 150} 0)`);

        this.textRenderer.render(
          this._thumbLabelFormatter(this._curval2, state, this),
          this.node.querySelector('g.dvThumbLabel2'),
          {}
        );
      }

      if (this._blockSlider === true) {
        select(node)
          .select('rect.dvBlockValue')
          .attr('x', 0.5 * (this._scale(this._curval1) + this._scale(this._curval2)) - 10)
          .attr('y', st.margin.top - 2)
          .attr('width', 20)
          .attr('height', 4);

        select(node)
          .select('rect.dvBlockValueHandle')
          .attr('x', 0.5 * (this._scale(this._curval1) + this._scale(this._curval2)) - 16)
          .attr('y', st.margin.top - 8)
          .attr('width', 32)
          .attr('height', 16);
      }

      select(node)
        .select('line.dvCurval')
        .attr('x1', this._scale(this._curval1))
        .attr('y1', st.margin.top)
        .attr('x2', this._scale(this._curval2))
        .attr('y2', st.margin.top);
    } else {
      select(node)
        .select('line.dvCurval')
        .attr('x1', st.margin.left)
        .attr('y1', st.margin.top)
        .attr('x2', this._scale(this._curval1))
        .attr('y2', st.margin.top);
    }

    if (this._calculatedTicks) {
      select(node)
        .select('g.dvTicks')
        .selectAll('line')
        .data(this._calculatedTicks)
        .join('line')
        .attr('x1', d => this._scale(d))
        .attr('y1', st.margin.top - 3)
        .attr('x2', d => this._scale(d))
        .attr('y2', st.margin.top + 3);
    }

    if (this._calculatedTickLabels) {
      select(node)
        .select('g.dvTicks')
        .selectAll('text')
        .data(this._calculatedTickLabels)
        .join('text')
        .text(d => d)
        .attr('text-anchor', 'middle')
        .style('font-size', `${this._style.tickLabel.font.size}px`)
        .attr('x', d => this._scale(d))
        .attr('y', st.margin.top + st.tickLabel.font.size + 15);
    }

    this.publish('renderWillEnd', { node, state });
  }

  _setSingleValue (val) {
    return v => {
      this[`_curval${val}`] = v;
      select(this.node)
        .select(`circle.dvVal${val}`)
        .attr('cx', this._scale(this._snapValue(this[`_curval${val}`])))
        .attr('aria-valuenow', this._snapValue(this[`_curval${val}`]));

      select(this.node)
        .select('g.dvFocus circle')
        .attr('cx', this._scale(this._snapValue(this[`_curval${val}`])));

      if (this._thumbLabel) {
        const labelX = this._scale(this._snapValue(this[`_curval${val}`])) - 150;
        select(this.node)
          .select(`g.dvThumbLabel${val}`)
          .attr(
            'transform',
            `translate(${labelX} 0)`
          );

        this.textRenderer.render(
          this._thumbLabelFormatter(this._snapValue(this[`_curval${val}`]), this.state, this),
          this.node.querySelector(`g.dvThumbLabel${val}`),
          {}
        );
      }

      if (this._rangeSlider) {
        select(this.node)
          .select('line.dvCurval')
          .attr('x1', this._scale(this._snapValue(this._curval1)))
          .attr('x2', this._scale(this._snapValue(this._curval2)));
      } else {
        select(this.node)
          .select('line.dvCurval')
          .attr('x2', this._scale(this._snapValue(this._curval1)));
      }
    }
  }

  _setBlockValue (val) {
    return v => {
      const d = this._blockDistance / 2;

      // Set the new values. This depends on which handle is moved (this is in `val`).
      switch (val) {
        case 1:
          this._curval1 = Math.min(v, this._range[1] - 2 * d);
          this._curval2 = Math.max(v + 2 * d, this._range[0] + 2 * d);
          break
        case 2:
          this._curval2 = Math.max(v, this._range[0] + 2 * d);
          this._curval1 = Math.min(v - 2 * d, this._range[1] - 2 * d);
          break
        default:
          this._curval1 = Math.min(v - d, this._range[1] - 2 * d);
          this._curval2 = Math.max(v + d, this._range[0] + 2 * d);
          break
      }

      // Move the handles (the 2 circles and the block handle)
      select(this.node)
        .select('circle.dvVal1')
        .attr('cx', this._scale(this._snapValue(this._curval1)))
        .attr('aria-valuenow', this._snapValue(this._curval1));
      select(this.node)
        .select('circle.dvVal2')
        .attr('cx', this._scale(this._snapValue(this._curval2)))
        .attr('aria-valuenow', this._snapValue(this._curval2));
      select(this.node)
        .select('rect.dvBlockValue')
        .attr(
          'x',
          0.5 * (this._scale(this._snapValue(this._curval2)) +
            this._scale(this._snapValue(this._curval1))) - 10
        );

      if (this._thumbLabel) {
        for (let val = 1; val <= 2; val++) {
          const labelX = this._scale(this._snapValue(this[`_curval${val}`])) - 150;
          select(this.node)
            .select(`g.dvThumbLabel${val}`)
            .attr(
              'transform',
              `translate(${labelX} 0)`
            );

          this.textRenderer.render(
            this._thumbLabelFormatter(this._snapValue(this[`_curval${val}`]), this.state, this),
            this.node.querySelector(`g.dvThumbLabel${val}`),
            {}
          );
        }
      }

      // Move the range value line
      select(this.node)
        .select('line.dvCurval')
        .attr('x1', this._scale(this._snapValue(this._curval1)))
        .attr('x2', this._scale(this._snapValue(this._curval2)));

      // Set the focus circle or rect
      if (val > 0) {
        select(this.node)
          .select('g.dvFocus circle')
          .attr('cx', this._scale(this._snapValue(this[`_curval${val}`])));
      } else {
        select(this.node)
          .select('g.dvFocus rect')
          .attr(
            'x',
            0.5 * (this._scale(this._snapValue(this._curval2)) +
              this._scale(this._snapValue(this._curval1))) - 16
          );
      }
    }
  }

  /**
   * Snaps the provided value to the closest permitted step.
   */
  _snapValue (val) {
    if (this._calculatedSteps === null) return val
    let minDist = Infinity;
    let minDistVal = null;
    this._calculatedSteps.forEach(v => {
      const d = Math.abs(val - v);
      if (d < minDist) {
        minDist = d;
        minDistVal = v;
      }
    });
    return minDistVal
  }

  /**
   * Returns the range as an array of the minimum and maximum values.
   * If the range has been defined as a function, the function is executed.
   */

  _rangeValues () {
    if (typeof this._range === 'function') return this._range(this.state, this)
    return this._range
  }

  _calculateSteps () {
    // Extract the step values if any are given
    this._calculatedSteps = null;
    if (this._steps instanceof Array) this._calculatedSteps = this._steps;
    if (typeof this._steps === 'number') {
      let x = this._rangeValues()[0];
      this._calculatedSteps = [];
      while (x < this._rangeValues()[1]) {
        this._calculatedSteps.push(x);
        x += this._steps;
      }
    }
    if (typeof this._steps === 'function') {
      this._calculatedSteps = this._steps(this.state, this);
    }

    // Check if the minimum and maximum values are included in the calculated steps.
    if (this._calculatedSteps && this._calculatedSteps.indexOf(this._rangeValues()[0]) < 0) {
      this._calculatedSteps.unshift(this._rangeValues()[0]);
    }
    if (this._calculatedSteps && this._calculatedSteps.indexOf(this._rangeValues()[1]) < 0) {
      this._calculatedSteps.push(this._rangeValues()[1]);
    }
  }

  _increase (val) {
    if (val < 0) return

    let newval = null;

    if (this._calculatedSteps) {
      const idx = this._calculatedSteps.indexOf(this[`_curval${val}`]);
      const newidx = Math.min(idx + 1, this._calculatedSteps.length - 1);
      newval = this._calculatedSteps[newidx];
    } else {
      newval = Math.min(
        this[`_curval${val}`] + (this._rangeValues()[1] - this._rangeValues()[0]) / 50,
        this._rangeValues()[1]
      );
    }

    // Increase the larger handle in a range slider if both values are the same
    // and switch the focus to the larger handle
    if (this.isRangeSlider() && val === 1 && newval > this._curval2) {
      this._curval2 = newval;
      select(this.node).select('circle.dvHdl2').node().focus();
    } else {
      this[`_curval${val}`] = newval;
    }

    // Make sure the distance stays constant in a block slider
    if (this._blockSlider === true) {
      if (val === 1) {
        this._curval1 = Math.min(newval, this._range[1] - this._blockDistance);
        this._curval2 = this._curval1 + this._blockDistance;
      } else {
        this._curval1 = newval - this._blockDistance;
      }
    }

    this._saveValueToState();
  }

  _decrease (val) {
    if (val < 0) return

    let newval = null;

    if (this._calculatedSteps) {
      const idx = this._calculatedSteps.indexOf(this[`_curval${val}`]);
      const newidx = Math.max(idx - 1, 0);
      newval = this._calculatedSteps[newidx];
    } else {
      newval = Math.max(
        this[`_curval${val}`] - (this._rangeValues()[1] - this._rangeValues()[0]) / 50,
        this._rangeValues()[0]
      );
    }

    // Decrease the smaller handle in a range slider if both values are the same
    // and switch the focus to the smaller handle
    if (this.isRangeSlider() && val === 2 && newval < this._curval1) {
      this._curval1 = newval;
      select(this.node).select('circle.dvHdl1').node().focus();
    } else {
      this[`_curval${val}`] = newval;
    }

    // Make sure the distance stays constant in a block slider
    if (this._blockSlider === true) {
      if (val === 1) {
        this._curval2 = this._curval1 + this._blockDistance;
      } else {
        this._curval2 = Math.max(newval, this._range[0] + this._blockDistance);
        this._curval1 = this._curval2 - this._blockDistance;
      }
    }

    this._saveValueToState();
  }

  _calculateTicks () {
    // Extract the tick values if any are given
    this._calculatedTicks = null;
    if (this._ticks === null) return

    if (this._ticks instanceof Array) this._calculatedTicks = this._ticks;
    if (typeof this._ticks === 'number') {
      let x = this._rangeValues()[0];
      this._calculatedTicks = [];
      while (x < this._rangeValues()[1] + this._ticks) {
        this._calculatedTicks.push(x);
        x += this._ticks;
      }
    }
    if (typeof this._ticks === 'function') {
      this._calculatedTicks = this._ticks(this.state, this);
    }
  }

  _calculateTickLabels () {
    // Extract the tick values if any are given
    this._calculatedTickLabels = null;
    if (this._tickLabels === null) return

    if (this._tickLabels instanceof Array) this._calculatedTickLabels = this._tickLabels;
    if (typeof this._tickLabels === 'number') {
      let x = this._rangeValues()[0];
      this._calculatedTickLabels = [];
      while (x <= this._rangeValues()[1]) {
        this._calculatedTickLabels.push(x);
        x += this._tickLabels;
      }
    }
    if (typeof this._tickLabels === 'function') {
      this._calculatedTickLabels = this._tickLabels(this.state, this);
    }
  }

  _dragStart (val) {
    return () => {
      if (val > 0) {
        select(this.node)
          .select(`circle.dvVal${val}`)
          .attr('r', 8)
          .style('cursor', 'move');
      }

      // Set the mouse cursor to move
      document.body.style.cursor = 'move';
    }
  }

  _drag (val) {
    return e => {
      this._blockSlider === true
        ? this._setBlockValue(val)(this._scale.invert(e.x))
        : this._setSingleValue(val)(this._scale.invert(e.x));
    }
  }

  _dragEnd (val) {
    return () => {
      if (val > 0) {
        select(this.node)
          .select(`circle.dvVal${val}`)
          .attr('r', 7)
          .style('cursor', 'grab');
      }

      document.body.style.cursor = null;

      // Switch focus if needed
      if (this.isRangeSlider() && this._curval1 > this._curval2) {
        select(this.node).select(`circle.dvHdl${val === 1 ? 2 : 1}`).node().focus();
      }

      this._saveValueToState();
    }
  }

  _saveValueToState () {
    const newState = {};
    const v1 = this._snapValue(this._curval1);

    if (this._rangeSlider) {
      select(this.node)
        .select('circle.dvVal2')
        .attr('r', 8);

      const v2 = this._snapValue(this._curval2);
      newState[this._stateKey] = [Math.min(v1, v2), Math.max(v1, v2)];
    } else {
      newState[this._stateKey] = v1;
    }

    if (this._validation(newState)) {
      Object.keys(newState).forEach(k => {
        this.state.set(k, newState[k]);
      });
    } else {
      Object.keys(this.state).forEach(k => {
        this.state.set(k, this.state.get(k));
      });
    }
  }

  _handleFocus (val) {
    return _ => {
      // Register key listeners
      document.addEventListener('keydown', this._handleKeyup);
      this._focusedVal = val;

      if (val > 0) {
        select(this.node)
          .select('g.dvFocus')
          .append('circle')
          .attr('r', 16)
          .attr('cx', this._scale(this[`_curval${val}`]))
          .attr('cy', this._style.margin.top);
      } else {
        select(this.node)
          .select('g.dvFocus')
          .append('rect')
          .attr('width', 32)
          .attr('height', 20)
          .attr(
            'x',
            0.5 * (this._scale(this._snapValue(this._curval2)) +
              this._scale(this._snapValue(this._curval1))) - 16
          )
          .attr('y', this._style.margin.top - 10);
      }
    }
  }

  _handleBlur (_val) {
    return _ => {
      // Unregister key listeners
      document.removeEventListener('keydown', this._handleKeyup);
      this._focusedVal = null;

      select(this.node)
        .select('g.dvFocus circle')
        .remove();

      select(this.node)
        .select('g.dvFocus rect')
        .remove();
    }
  }

  _handleKeyup (e) {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') this._decrease(this._focusedVal);
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') this._increase(this._focusedVal);
  }

  _handleClickOnLine (e) {
    const v = this._scale.invert(this._toLocalPoint(e).x);
    if (this._rangeSlider && Math.abs(v - this._curval1) > Math.abs(v - this._curval2)) {
      this._curval2 = v;
      select(this.node).select('circle.dvHdl2').node().focus();
    } else {
      this._curval1 = v;
      select(this.node).select('circle.dvHdl1').node().focus();
    }
    this._saveValueToState();
  }

  _toLocalPoint (pt) {
    const refElem = select(this.node)
      .select('line.dvBkgd')
      .node();

    const cr = refElem.getBoundingClientRect();
    const delta = {
      x: cr.x - refElem.getAttribute('x1'),
      y: cr.y + (cr.height / 2) - refElem.getAttribute('y1')
    };
    return { x: pt.x - delta.x, y: pt.y - delta.y }
  }
}

function slider (config, style) {
  return new Slider(config, style)
}

function isUrl (s) {
  if (s.startsWith('http://')) return true
  if (s.startsWith('https://')) return true
  if (s.startsWith('./')) return true
  if (s.startsWith('/')) return true
  return false
}

class Widget {
  constructor (node, vizid, lang, options) {
    this.node = node;
    this.vizid = vizid;
    this.lang = lang;
    this.opts = options || {};

    this.uid = this.node.getAttribute('data-uid');

    // Define the callback method for the onload event from the iframe content.
    this.onload = this.opts.onload || function () {};

    // The iframe element created by the widget
    this.iframe = null;

    // Load the attributes to add to the iFrame element.
    this.element_attributes = this.opts.attributes || {};

    // The config to be passed to the loading visualization.
    this.config = this.opts.config || {};

    // Try to parse the config key-value pairs as JSON objects
    Object.keys(this.config).forEach(k => {
      try {
        const obj = JSON.parse(this.config[k]);
        this.config[k] = obj;
      } catch (_) {}
    });

    // The state to be passed to the loading visualization.
    this.state = this.opts.state || {};

    // Try to parse the state key-value pairs as JSON objects
    Object.keys(this.state).forEach(k => {
      try {
        const obj = JSON.parse(this.state[k]);
        this.state[k] = obj;
      } catch (_) {}
    });

    this.stateSetAfterOnload = false;

    this.build();
  }

  build () {
    console.info(`Creating new widget: ${this.vizid}`);

    // Get the URL of the visualization. Check if the vizid is an URL or a vizId.
    if (isUrl(this.vizid)) {
      console.info('vizid looks like a valid URL. Ignoring the language setting.');
      this.vizurl = this.vizid;
    } else {
      const vizInfo = decomposeDocId(this.vizid, this.lang);
      const baseUrl = window.location.origin;
      this.vizurl = `${baseUrl}${vizInfo.assetPath}`;
    }

    // Build the iframe
    const iframe = document.createElement('iframe');
    iframe.setAttribute('id', this.uid);
    iframe.setAttribute('allow', 'clipboard-write \'src\'; fullscreen \'src\'');
    iframe.setAttribute('allowFullScreen', 'true');
    iframe.src = this.vizurl;
    iframe.style.display = 'block';
    iframe.style.border = '0';
    iframe.style.width = '100%';
    iframe.style.minWidth = '100%';

    // Remove the current content in the hosting node
    this.node.innerHTML = '';

    // Add the iFrame to the page
    this.node.appendChild(iframe);

    // Keep a reference to the iframe element around
    this.iframe = iframe;
  }

  /**
   * Initializes the widget by setting the initial state and the config as defined by the
   * attributes. If both state and config are empty, no initialization is done.
   * Initialization of the widget is triggered by the `handleReady` callback in the
   * WidgetManager after receiving the `ready` message from the iframe content.
   */
  init () {
    if (this.stateSetAfterOnload === true) return
    this.stateSetAfterOnload = true;

    if (Object.keys(this.state).length === 0 && Object.keys(this.config).length === 0) return

    // Pass the state and config to the iframe.
    console.info(
      'Setting iframe config and state:\n',
      `. ID:     ${this.iframe.id}\n`,
      `. State:  ${JSON.stringify(this.state)}\n`,
      `. Config: ${JSON.stringify(this.config)}`
    );

    this.iframe.contentWindow.postMessage(
      { type: 'setState', data: { state: this.state, config: this.config } },
      '*'
    );
  }
}

class WidgetManager {
  constructor () {
    // The widgets which have been created
    this.widgets = [];

    this.subscribers = {};

    // Listen to the `message` events from the embedded widgets
    window.addEventListener('message', this.handleMessage.bind(this));
  }

  /**
   * Scans for widgets inside the HTML document, and if finds some, it calls the createWidget
   * function for each of them. This is the entry point for the widget functionality.
   */
  init () {
    // Find all DIVs with class `fso-datavis-widget`
    const divs = document.querySelectorAll('div.fso-datavis-widget');
    divs.forEach(div => {
      // If the widget has already been created, there is an attribute `data-uid`.
      const dataUid = div.getAttribute('data-uid');
      if (dataUid) return

      const w = this.createWidget(div);
      if (w !== null) this.widgets.push(w);
    });
    return this
  }

  createWidget (div) {
    // Set the `data-uid` attribute. It is an encoded UUIDv4 value.
    const uid = uuid64();
    div.setAttribute('data-uid', uid);

    // Extract the name, vizid and lang values.
    const name = div.getAttribute('name') || '';
    const vizId = div.getAttribute('data-vizid');
    const lang = div.getAttribute('data-lang') || 'de';
    console.info(`New widget found: ${name} [vizid: ${vizId} uid:${uid}]`);

    // Build state and config
    const config = {};
    const state = {};
    for (let j = 0; j < div.attributes.length; j++) {
      if (div.attributes[j].name.indexOf('data-state-') === 0) {
        state[div.attributes[j].name.substring('data-state-'.length)] = div.attributes[j].value;
      }
      if (div.attributes[j].name.indexOf('data-config-') === 0) {
        config[div.attributes[j].name.substring('data-config-'.length)] = div.attributes[j].value;
      }
    }

    const w = new Widget(div, vizId, lang, { state, config });
    return w
  }

  /**
   * Handle incoming messages from the widgets
   * @param {MessageEvent} evt - Message event
   */
  handleMessage (evt) {
    // Ignore message which are not for us
    if (!evt.data || !evt.data.type) return

    // Check if this is a message from one of the widgets
    const w = this.widgetForEvent(evt);

    // Widget not found: return
    if (w === null) return

    // TBD: check if the URL is valid

    // Get the event data
    const payload = evt.data;

    // Ignore messages without proper format
    if (!payload || typeof payload !== 'object' || !payload.type || !payload.data) return

    const messageType = payload.type || null;
    if (!messageType) return

    const data = payload.data;

    // The ready and resize events are handled internally.
    // Other events are published. These can be setState messages, or custom messages
    switch (messageType) {
      case 'ready':
        this.handleReady(w, data);
        break
      case 'resize':
        this.handleResize(w, data);
        break
      default:
        this.publish(messageType, data, w);
    }
  }

  handleReady (widget, _data) {
    widget.init();
  }

  handleResize (widget, data) {
    widget.iframe.style.height = `${data.document.height}px`;
  }

  /**
   * Send a message to all widgets
   * @param {String} messageType The name of the message to send
   * @param {Object} data A data object to attach to the message, `{}` if no data needs to be sent.
   */
  publish (messageType, data, source) {
    // Send the message to all local subscribers
    (this.subscribers[messageType] || []).forEach(handler => {
      handler(data, source);
    });

    // Send the message to all widget except the originating one.
    this.widgets.forEach(w => {
      if (source !== w) {
        w.iframe.contentWindow.postMessage({ type: messageType, data: data }, '*');
      }
    });
  }

  subscribe (messageType, handler) {
    if (!this.subscribers[messageType]) this.subscribers[messageType] = [];
    this.subscribers[messageType].push(handler);
  }

  unsubscribe (messageType, handler) {
    if (!this.subscribers[messageType]) return
    if (handler) {
      this.subscribers[messageType] = this.subscribers[messageType].filter(h => h !== handler);
    } else {
      this.subscribers[messageType] = [];
    }
  }

  unsubscribeAll (messageType) {
    if (!this.subscribers[messageType]) return
    this.subscribers[messageType] = [];
  }

  /**
   * Gets the widget which did sent the `message` event
   * @param {MessageEvent} evt - Message event
   * @returns The instance of the Widget, or null if not found
   */
  widgetForEvent (evt) {
    for (let i = 0; i < this.widgets.length; i++) {
      const w = this.widgets[i];
      if (w.iframe.contentWindow === evt.source) return w
    }
    return null
  }
}

const processing = {
  hierarchy: hierarchy$1
};
const widgetManager = new WidgetManager();
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  widgetManager.init();
} else {
  document.addEventListener('DOMContentLoaded', () => {
    widgetManager.init();
  });
}

exports.Control = Control;
exports.State = en;
exports.barChart = barChart;
exports.box = box;
exports.butterflyChart = butterflyChart;
exports.categoricalLegend = categoricalLegend;
exports.checkboxes = checkboxes;
exports.dataSource = dataSource;
exports.dropdown = dropdown;
exports.embedControl = embedControl;
exports.exportControl = exportControl;
exports.flexBox = flexBox;
exports.layout = layout;
exports.lineChart = lineChart;
exports.processing = processing;
exports.radioButtons = radioButtons;
exports.sankey = sankey;
exports.slider = slider;
exports.slopeChart = slopeChart;
exports.state = state;
exports.textBox = textBox;
exports.tooltip = tooltip;
exports.treemap = treemap;
exports.widgetManager = widgetManager;

Object.defineProperty(exports, '__esModule', { value: true });

}));
