(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload"))
    return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
    o(r);
  new MutationObserver((r) => {
    for (const i of r)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && o(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const i = {};
    return r.integrity && (i.integrity = r.integrity), r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? i.credentials = "include" : r.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
  }
  function o(r) {
    if (r.ep)
      return;
    r.ep = !0;
    const i = n(r);
    fetch(r.href, i);
  }
})();
var li = {};
/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Xe(e, t) {
  const n = new Set(e.split(","));
  return t ? (o) => n.has(o.toLowerCase()) : (o) => n.has(o);
}
const X = li.NODE_ENV !== "production" ? Object.freeze({}) : {}, It = li.NODE_ENV !== "production" ? Object.freeze([]) : [], le = () => {
}, Vs = () => !1, un = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Mn = (e) => e.startsWith("onUpdate:"), ne = Object.assign, Uo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ss = Object.prototype.hasOwnProperty, B = (e, t) => Ss.call(e, t), F = Array.isArray, gt = (e) => Wn(e) === "[object Map]", ci = (e) => Wn(e) === "[object Set]", P = (e) => typeof e == "function", oe = (e) => typeof e == "string", Lt = (e) => typeof e == "symbol", Y = (e) => e !== null && typeof e == "object", Ho = (e) => (Y(e) || P(e)) && P(e.then) && P(e.catch), ui = Object.prototype.toString, Wn = (e) => ui.call(e), ko = (e) => Wn(e).slice(8, -1), fi = (e) => Wn(e) === "[object Object]", Bo = (e) => oe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Yt = /* @__PURE__ */ Xe(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Cs = /* @__PURE__ */ Xe(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), qn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ts = /-(\w)/g, Rt = qn((e) => e.replace(Ts, (t, n) => n ? n.toUpperCase() : "")), $s = /\B([A-Z])/g, Je = qn(
  (e) => e.replace($s, "-$1").toLowerCase()
), Gn = qn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ht = qn((e) => e ? `on${Gn(e)}` : ""), lt = (e, t) => !Object.is(e, t), $t = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Rn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, vo = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Er;
const Ko = () => Er || (Er = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Wo(e) {
  if (F(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = oe(o) ? Is(o) : Wo(o);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (oe(e) || Y(e))
    return e;
}
const Fs = /;(?![^(]*\))/g, As = /:([^]+)/, Ps = /\/\*[^]*?\*\//g;
function Is(e) {
  const t = {};
  return e.replace(Ps, "").split(Fs).forEach((n) => {
    if (n) {
      const o = n.split(As);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Ut(e) {
  let t = "";
  if (oe(e))
    t = e;
  else if (F(e))
    for (let n = 0; n < e.length; n++) {
      const o = Ut(e[n]);
      o && (t += o + " ");
    }
  else if (Y(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Ms = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Rs = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", js = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Ls = /* @__PURE__ */ Xe(Ms), Us = /* @__PURE__ */ Xe(Rs), Hs = /* @__PURE__ */ Xe(js), ks = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Bs = /* @__PURE__ */ Xe(ks);
function ai(e) {
  return !!e || e === "";
}
const it = (e) => oe(e) ? e : e == null ? "" : F(e) || Y(e) && (e.toString === ui || !P(e.toString)) ? JSON.stringify(e, di, 2) : String(e), di = (e, t) => t && t.__v_isRef ? di(e, t.value) : gt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, r], i) => (n[fo(o, i) + " =>"] = r, n),
    {}
  )
} : ci(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => fo(n))
} : Lt(t) ? fo(t) : Y(t) && !F(t) && !fi(t) ? String(t) : t, fo = (e, t = "") => {
  var n;
  return Lt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
var ce = {};
function Ye(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Oe;
class Ks {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Oe, !t && Oe && (this.index = (Oe.scopes || (Oe.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Oe;
      try {
        return Oe = this, t();
      } finally {
        Oe = n;
      }
    } else
      ce.NODE_ENV !== "production" && Ye("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Oe = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Oe = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Ws(e, t = Oe) {
  t && t.active && t.effects.push(e);
}
function qo() {
  return Oe;
}
function qs(e) {
  Oe ? Oe.cleanups.push(e) : ce.NODE_ENV !== "production" && Ye(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let _t;
class Go {
  constructor(t, n, o, r) {
    this.fn = t, this.trigger = n, this.scheduler = o, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Ws(this, r);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, ft();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (Gs(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), at();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = st, n = _t;
    try {
      return st = !0, _t = this, this._runnings++, yr(this), this.fn();
    } finally {
      br(this), this._runnings--, _t = n, st = t;
    }
  }
  stop() {
    var t;
    this.active && (yr(this), br(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function Gs(e) {
  return e.value;
}
function yr(e) {
  e._trackId++, e._depsLength = 0;
}
function br(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      pi(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function pi(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let st = !0, No = 0;
const hi = [];
function ft() {
  hi.push(st), st = !1;
}
function at() {
  const e = hi.pop();
  st = e === void 0 ? !0 : e;
}
function zo() {
  No++;
}
function Jo() {
  for (No--; !No && Oo.length; )
    Oo.shift()();
}
function mi(e, t, n) {
  var o;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const r = e.deps[e._depsLength];
    r !== t ? (r && pi(r, e), e.deps[e._depsLength++] = t) : e._depsLength++, ce.NODE_ENV !== "production" && ((o = e.onTrack) == null || o.call(e, ne({ effect: e }, n)));
  }
}
const Oo = [];
function gi(e, t, n) {
  var o;
  zo();
  for (const r of e.keys()) {
    let i;
    r._dirtyLevel < t && (i ?? (i = e.get(r) === r._trackId)) && (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0), r._dirtyLevel = t), r._shouldSchedule && (i ?? (i = e.get(r) === r._trackId)) && (ce.NODE_ENV !== "production" && ((o = r.onTrigger) == null || o.call(r, ne({ effect: r }, n))), r.trigger(), (!r._runnings || r.allowRecurse) && r._dirtyLevel !== 2 && (r._shouldSchedule = !1, r.scheduler && Oo.push(r.scheduler)));
  }
  Jo();
}
const _i = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, jn = /* @__PURE__ */ new WeakMap(), Et = Symbol(ce.NODE_ENV !== "production" ? "iterate" : ""), wo = Symbol(ce.NODE_ENV !== "production" ? "Map key iterate" : "");
function de(e, t, n) {
  if (st && _t) {
    let o = jn.get(e);
    o || jn.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = _i(() => o.delete(n))), mi(
      _t,
      r,
      ce.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n
      } : void 0
    );
  }
}
function ke(e, t, n, o, r, i) {
  const s = jn.get(e);
  if (!s)
    return;
  let l = [];
  if (t === "clear")
    l = [...s.values()];
  else if (n === "length" && F(e)) {
    const u = Number(o);
    s.forEach((f, h) => {
      (h === "length" || !Lt(h) && h >= u) && l.push(f);
    });
  } else
    switch (n !== void 0 && l.push(s.get(n)), t) {
      case "add":
        F(e) ? Bo(n) && l.push(s.get("length")) : (l.push(s.get(Et)), gt(e) && l.push(s.get(wo)));
        break;
      case "delete":
        F(e) || (l.push(s.get(Et)), gt(e) && l.push(s.get(wo)));
        break;
      case "set":
        gt(e) && l.push(s.get(Et));
        break;
    }
  zo();
  for (const u of l)
    u && gi(
      u,
      4,
      ce.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n,
        newValue: o,
        oldValue: r,
        oldTarget: i
      } : void 0
    );
  Jo();
}
function zs(e, t) {
  var n;
  return (n = jn.get(e)) == null ? void 0 : n.get(t);
}
const Js = /* @__PURE__ */ Xe("__proto__,__v_isRef,__isVue"), Ei = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Lt)
), vr = /* @__PURE__ */ Ys();
function Ys() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = L(this);
      for (let i = 0, s = this.length; i < s; i++)
        de(o, "get", i + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map(L)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      ft(), zo();
      const o = L(this)[t].apply(this, n);
      return Jo(), at(), o;
    };
  }), e;
}
function Xs(e) {
  const t = L(this);
  return de(t, "has", e), t.hasOwnProperty(e);
}
class yi {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    const r = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return o === (r ? i ? xi : Di : i ? wi : Oi).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const s = F(t);
    if (!r) {
      if (s && B(vr, n))
        return Reflect.get(vr, n, o);
      if (n === "hasOwnProperty")
        return Xs;
    }
    const l = Reflect.get(t, n, o);
    return (Lt(n) ? Ei.has(n) : Js(n)) || (r || de(t, "get", n), i) ? l : ie(l) ? s && Bo(n) ? l : l.value : Y(l) ? r ? Dt(l) : Xo(l) : l;
  }
}
class bi extends yi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, r) {
    let i = t[n];
    if (!this._isShallow) {
      const u = ct(i);
      if (!bt(o) && !ct(o) && (i = L(i), o = L(o)), !F(t) && ie(i) && !ie(o))
        return u ? !1 : (i.value = o, !0);
    }
    const s = F(t) && Bo(n) ? Number(n) < t.length : B(t, n), l = Reflect.set(t, n, o, r);
    return t === L(r) && (s ? lt(o, i) && ke(t, "set", n, o, i) : ke(t, "add", n, o)), l;
  }
  deleteProperty(t, n) {
    const o = B(t, n), r = t[n], i = Reflect.deleteProperty(t, n);
    return i && o && ke(t, "delete", n, void 0, r), i;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Lt(n) || !Ei.has(n)) && de(t, "has", n), o;
  }
  ownKeys(t) {
    return de(
      t,
      "iterate",
      F(t) ? "length" : Et
    ), Reflect.ownKeys(t);
  }
}
class vi extends yi {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return ce.NODE_ENV !== "production" && Ye(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return ce.NODE_ENV !== "production" && Ye(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Zs = /* @__PURE__ */ new bi(), Qs = /* @__PURE__ */ new vi(), el = /* @__PURE__ */ new bi(
  !0
), tl = /* @__PURE__ */ new vi(!0), Yo = (e) => e, zn = (e) => Reflect.getPrototypeOf(e);
function En(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = L(e), i = L(t);
  n || (lt(t, i) && de(r, "get", t), de(r, "get", i));
  const { has: s } = zn(r), l = o ? Yo : n ? Zo : on;
  if (s.call(r, t))
    return l(e.get(t));
  if (s.call(r, i))
    return l(e.get(i));
  e !== r && e.get(t);
}
function yn(e, t = !1) {
  const n = this.__v_raw, o = L(n), r = L(e);
  return t || (lt(e, r) && de(o, "has", e), de(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function bn(e, t = !1) {
  return e = e.__v_raw, !t && de(L(e), "iterate", Et), Reflect.get(e, "size", e);
}
function Nr(e) {
  e = L(e);
  const t = L(this);
  return zn(t).has.call(t, e) || (t.add(e), ke(t, "add", e, e)), this;
}
function Or(e, t) {
  t = L(t);
  const n = L(this), { has: o, get: r } = zn(n);
  let i = o.call(n, e);
  i ? ce.NODE_ENV !== "production" && Ni(n, o, e) : (e = L(e), i = o.call(n, e));
  const s = r.call(n, e);
  return n.set(e, t), i ? lt(t, s) && ke(n, "set", e, t, s) : ke(n, "add", e, t), this;
}
function wr(e) {
  const t = L(this), { has: n, get: o } = zn(t);
  let r = n.call(t, e);
  r ? ce.NODE_ENV !== "production" && Ni(t, n, e) : (e = L(e), r = n.call(t, e));
  const i = o ? o.call(t, e) : void 0, s = t.delete(e);
  return r && ke(t, "delete", e, void 0, i), s;
}
function Dr() {
  const e = L(this), t = e.size !== 0, n = ce.NODE_ENV !== "production" ? gt(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && ke(e, "clear", void 0, void 0, n), o;
}
function vn(e, t) {
  return function(o, r) {
    const i = this, s = i.__v_raw, l = L(s), u = t ? Yo : e ? Zo : on;
    return !e && de(l, "iterate", Et), s.forEach((f, h) => o.call(r, u(f), u(h), i));
  };
}
function Nn(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, i = L(r), s = gt(i), l = e === "entries" || e === Symbol.iterator && s, u = e === "keys" && s, f = r[e](...o), h = n ? Yo : t ? Zo : on;
    return !t && de(
      i,
      "iterate",
      u ? wo : Et
    ), {
      // iterator protocol
      next() {
        const { value: a, done: g } = f.next();
        return g ? { value: a, done: g } : {
          value: l ? [h(a[0]), h(a[1])] : h(a),
          done: g
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function et(e) {
  return function(...t) {
    if (ce.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Ye(
        `${Gn(e)} operation ${n}failed: target is readonly.`,
        L(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function nl() {
  const e = {
    get(i) {
      return En(this, i);
    },
    get size() {
      return bn(this);
    },
    has: yn,
    add: Nr,
    set: Or,
    delete: wr,
    clear: Dr,
    forEach: vn(!1, !1)
  }, t = {
    get(i) {
      return En(this, i, !1, !0);
    },
    get size() {
      return bn(this);
    },
    has: yn,
    add: Nr,
    set: Or,
    delete: wr,
    clear: Dr,
    forEach: vn(!1, !0)
  }, n = {
    get(i) {
      return En(this, i, !0);
    },
    get size() {
      return bn(this, !0);
    },
    has(i) {
      return yn.call(this, i, !0);
    },
    add: et("add"),
    set: et("set"),
    delete: et("delete"),
    clear: et("clear"),
    forEach: vn(!0, !1)
  }, o = {
    get(i) {
      return En(this, i, !0, !0);
    },
    get size() {
      return bn(this, !0);
    },
    has(i) {
      return yn.call(this, i, !0);
    },
    add: et("add"),
    set: et("set"),
    delete: et("delete"),
    clear: et("clear"),
    forEach: vn(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
    e[i] = Nn(
      i,
      !1,
      !1
    ), n[i] = Nn(
      i,
      !0,
      !1
    ), t[i] = Nn(
      i,
      !1,
      !0
    ), o[i] = Nn(
      i,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    o
  ];
}
const [
  ol,
  rl,
  il,
  sl
] = /* @__PURE__ */ nl();
function Jn(e, t) {
  const n = t ? e ? sl : il : e ? rl : ol;
  return (o, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(
    B(n, r) && r in o ? n : o,
    r,
    i
  );
}
const ll = {
  get: /* @__PURE__ */ Jn(!1, !1)
}, cl = {
  get: /* @__PURE__ */ Jn(!1, !0)
}, ul = {
  get: /* @__PURE__ */ Jn(!0, !1)
}, fl = {
  get: /* @__PURE__ */ Jn(!0, !0)
};
function Ni(e, t, n) {
  const o = L(n);
  if (o !== n && t.call(e, o)) {
    const r = ko(e);
    Ye(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Oi = /* @__PURE__ */ new WeakMap(), wi = /* @__PURE__ */ new WeakMap(), Di = /* @__PURE__ */ new WeakMap(), xi = /* @__PURE__ */ new WeakMap();
function al(e) {
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
function dl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : al(ko(e));
}
function Xo(e) {
  return ct(e) ? e : Yn(
    e,
    !1,
    Zs,
    ll,
    Oi
  );
}
function pl(e) {
  return Yn(
    e,
    !1,
    el,
    cl,
    wi
  );
}
function Dt(e) {
  return Yn(
    e,
    !0,
    Qs,
    ul,
    Di
  );
}
function Pt(e) {
  return Yn(
    e,
    !0,
    tl,
    fl,
    xi
  );
}
function Yn(e, t, n, o, r) {
  if (!Y(e))
    return ce.NODE_ENV !== "production" && Ye(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const s = dl(e);
  if (s === 0)
    return e;
  const l = new Proxy(
    e,
    s === 2 ? o : n
  );
  return r.set(e, l), l;
}
function yt(e) {
  return ct(e) ? yt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ct(e) {
  return !!(e && e.__v_isReadonly);
}
function bt(e) {
  return !!(e && e.__v_isShallow);
}
function Do(e) {
  return yt(e) || ct(e);
}
function L(e) {
  const t = e && e.__v_raw;
  return t ? L(t) : e;
}
function Vi(e) {
  return Object.isExtensible(e) && Rn(e, "__v_skip", !0), e;
}
const on = (e) => Y(e) ? Xo(e) : e, Zo = (e) => Y(e) ? Dt(e) : e, hl = "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";
class Si {
  constructor(t, n, o, r) {
    this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new Go(
      () => t(this._value),
      () => Xt(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = L(this);
    return (!t._cacheable || t.effect.dirty) && lt(t._value, t._value = t.effect.run()) && Xt(t, 4), Qo(t), t.effect._dirtyLevel >= 2 && (ce.NODE_ENV !== "production" && this._warnRecursive && Ye(hl, `

getter: `, this.getter), Xt(t, 2)), t._value;
  }
  set value(t) {
    this._setter(t);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
  // #endregion
}
function ml(e, t, n = !1) {
  let o, r;
  const i = P(e);
  i ? (o = e, r = ce.NODE_ENV !== "production" ? () => {
    Ye("Write operation failed: computed value is readonly");
  } : le) : (o = e.get, r = e.set);
  const s = new Si(o, r, i || !r, n);
  return ce.NODE_ENV !== "production" && t && !n && (s.effect.onTrack = t.onTrack, s.effect.onTrigger = t.onTrigger), s;
}
function Qo(e) {
  var t;
  st && _t && (e = L(e), mi(
    _t,
    (t = e.dep) != null ? t : e.dep = _i(
      () => e.dep = void 0,
      e instanceof Si ? e : void 0
    ),
    ce.NODE_ENV !== "production" ? {
      target: e,
      type: "get",
      key: "value"
    } : void 0
  ));
}
function Xt(e, t = 4, n) {
  e = L(e);
  const o = e.dep;
  o && gi(
    o,
    t,
    ce.NODE_ENV !== "production" ? {
      target: e,
      type: "set",
      key: "value",
      newValue: n
    } : void 0
  );
}
function ie(e) {
  return !!(e && e.__v_isRef === !0);
}
function ge(e) {
  return Ci(e, !1);
}
function Vn(e) {
  return Ci(e, !0);
}
function Ci(e, t) {
  return ie(e) ? e : new gl(e, t);
}
class gl {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : L(t), this._value = n ? t : on(t);
  }
  get value() {
    return Qo(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || bt(t) || ct(t);
    t = n ? t : L(t), lt(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : on(t), Xt(this, 4, t));
  }
}
function fn(e) {
  return ie(e) ? e.value : e;
}
const _l = {
  get: (e, t, n) => fn(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return ie(r) && !ie(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Ti(e) {
  return yt(e) ? e : new Proxy(e, _l);
}
class El {
  constructor(t) {
    this.dep = void 0, this.__v_isRef = !0;
    const { get: n, set: o } = t(
      () => Qo(this),
      () => Xt(this)
    );
    this._get = n, this._set = o;
  }
  get value() {
    return this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function yl(e) {
  return new El(e);
}
class bl {
  constructor(t, n, o) {
    this._object = t, this._key = n, this._defaultValue = o, this.__v_isRef = !0;
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return zs(L(this._object), this._key);
  }
}
class vl {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function Nl(e, t, n) {
  return ie(e) ? e : P(e) ? new vl(e) : Y(e) && arguments.length > 1 ? Ol(e, t, n) : ge(e);
}
function Ol(e, t, n) {
  const o = e[t];
  return ie(o) ? o : new bl(e, t, n);
}
var p = {};
const vt = [];
function Sn(e) {
  vt.push(e);
}
function Cn() {
  vt.pop();
}
function w(e, ...t) {
  ft();
  const n = vt.length ? vt[vt.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = wl();
  if (o)
    ze(
      o,
      n,
      11,
      [
        e + t.map((i) => {
          var s, l;
          return (l = (s = i.toString) == null ? void 0 : s.call(i)) != null ? l : JSON.stringify(i);
        }).join(""),
        n && n.proxy,
        r.map(
          ({ vnode: i }) => `at <${oo(n, i.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    r.length && i.push(`
`, ...Dl(r)), console.warn(...i);
  }
  at();
}
function wl() {
  let e = vt[vt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function Dl(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...xl(n));
  }), t;
}
function xl({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${oo(
    e.component,
    e.type,
    o
  )}`, i = ">" + n;
  return e.props ? [r, ...Vl(e.props), i] : [r + i];
}
function Vl(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...$i(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function $i(e, t, n) {
  return oe(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ie(t) ? (t = $i(e, L(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : P(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = L(t), n ? t : [`${e}=`, t]);
}
const er = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function ze(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (r) {
    an(r, t, n);
  }
}
function Me(e, t, n, o) {
  if (P(e)) {
    const i = ze(e, t, n, o);
    return i && Ho(i) && i.catch((s) => {
      an(s, t, n);
    }), i;
  }
  const r = [];
  for (let i = 0; i < e.length; i++)
    r.push(Me(e[i], t, n, o));
  return r;
}
function an(e, t, n, o = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let i = t.parent;
    const s = t.proxy, l = p.NODE_ENV !== "production" ? er[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; i; ) {
      const f = i.ec;
      if (f) {
        for (let h = 0; h < f.length; h++)
          if (f[h](e, s, l) === !1)
            return;
      }
      i = i.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      ze(
        u,
        null,
        10,
        [e, s, l]
      );
      return;
    }
  }
  Sl(e, n, r, o);
}
function Sl(e, t, n, o = !0) {
  if (p.NODE_ENV !== "production") {
    const r = er[t];
    if (n && Sn(n), w(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && Cn(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let rn = !1, xo = !1;
const me = [];
let Ue = 0;
const Mt = [];
let Ge = null, tt = 0;
const Fi = /* @__PURE__ */ Promise.resolve();
let tr = null;
const Cl = 100;
function nr(e) {
  const t = tr || Fi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Tl(e) {
  let t = Ue + 1, n = me.length;
  for (; t < n; ) {
    const o = t + n >>> 1, r = me[o], i = sn(r);
    i < e || i === e && r.pre ? t = o + 1 : n = o;
  }
  return t;
}
function Xn(e) {
  (!me.length || !me.includes(
    e,
    rn && e.allowRecurse ? Ue + 1 : Ue
  )) && (e.id == null ? me.push(e) : me.splice(Tl(e.id), 0, e), Ai());
}
function Ai() {
  !rn && !xo && (xo = !0, tr = Fi.then(Mi));
}
function $l(e) {
  const t = me.indexOf(e);
  t > Ue && me.splice(t, 1);
}
function Pi(e) {
  F(e) ? Mt.push(...e) : (!Ge || !Ge.includes(
    e,
    e.allowRecurse ? tt + 1 : tt
  )) && Mt.push(e), Ai();
}
function xr(e, t, n = rn ? Ue + 1 : 0) {
  for (p.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < me.length; n++) {
    const o = me[n];
    if (o && o.pre) {
      if (e && o.id !== e.uid || p.NODE_ENV !== "production" && or(t, o))
        continue;
      me.splice(n, 1), n--, o();
    }
  }
}
function Ii(e) {
  if (Mt.length) {
    const t = [...new Set(Mt)].sort(
      (n, o) => sn(n) - sn(o)
    );
    if (Mt.length = 0, Ge) {
      Ge.push(...t);
      return;
    }
    for (Ge = t, p.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), tt = 0; tt < Ge.length; tt++)
      p.NODE_ENV !== "production" && or(e, Ge[tt]) || Ge[tt]();
    Ge = null, tt = 0;
  }
}
const sn = (e) => e.id == null ? 1 / 0 : e.id, Fl = (e, t) => {
  const n = sn(e) - sn(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Mi(e) {
  xo = !1, rn = !0, p.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), me.sort(Fl);
  const t = p.NODE_ENV !== "production" ? (n) => or(e, n) : le;
  try {
    for (Ue = 0; Ue < me.length; Ue++) {
      const n = me[Ue];
      if (n && n.active !== !1) {
        if (p.NODE_ENV !== "production" && t(n))
          continue;
        ze(n, null, 14);
      }
    }
  } finally {
    Ue = 0, me.length = 0, Ii(e), rn = !1, tr = null, (me.length || Mt.length) && Mi(e);
  }
}
function or(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Cl) {
      const o = t.ownerInstance, r = o && ds(o.type);
      return an(
        `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
let Nt = !1;
const Ft = /* @__PURE__ */ new Set();
p.NODE_ENV !== "production" && (Ko().__VUE_HMR_RUNTIME__ = {
  createRecord: ao(Ri),
  rerender: ao(Il),
  reload: ao(Ml)
});
const xt = /* @__PURE__ */ new Map();
function Al(e) {
  const t = e.type.__hmrId;
  let n = xt.get(t);
  n || (Ri(t, e.type), n = xt.get(t)), n.instances.add(e);
}
function Pl(e) {
  xt.get(e.type.__hmrId).instances.delete(e);
}
function Ri(e, t) {
  return xt.has(e) ? !1 : (xt.set(e, {
    initialDef: Zt(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Zt(e) {
  return ps(e) ? e.__vccOpts : e;
}
function Il(e, t) {
  const n = xt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Zt(o.type).render = t), o.renderCache = [], Nt = !0, o.effect.dirty = !0, o.update(), Nt = !1;
  }));
}
function Ml(e, t) {
  const n = xt.get(e);
  if (!n)
    return;
  t = Zt(t), Vr(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const i = Zt(r.type);
    Ft.has(i) || (i !== n.initialDef && Vr(i, t), Ft.add(i)), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (Ft.add(i), r.ceReload(t.styles), Ft.delete(i)) : r.parent ? (r.parent.effect.dirty = !0, Xn(r.parent.update)) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Pi(() => {
    for (const r of o)
      Ft.delete(
        Zt(r.type)
      );
  });
}
function Vr(e, t) {
  ne(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function ao(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let He, zt = [], Vo = !1;
function dn(e, ...t) {
  He ? He.emit(e, ...t) : Vo || zt.push({ event: e, args: t });
}
function ji(e, t) {
  var n, o;
  He = e, He ? (He.enabled = !0, zt.forEach(({ event: r, args: i }) => He.emit(r, ...i)), zt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    ji(i, t);
  }), setTimeout(() => {
    He || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Vo = !0, zt = []);
  }, 3e3)) : (Vo = !0, zt = []);
}
function Rl(e, t) {
  dn("app:init", e, t, {
    Fragment: we,
    Text: hn,
    Comment: xe,
    Static: An
  });
}
function jl(e) {
  dn("app:unmount", e);
}
const Ll = /* @__PURE__ */ rr(
  "component:added"
  /* COMPONENT_ADDED */
), Li = /* @__PURE__ */ rr(
  "component:updated"
  /* COMPONENT_UPDATED */
), Ul = /* @__PURE__ */ rr(
  "component:removed"
  /* COMPONENT_REMOVED */
), Hl = (e) => {
  He && typeof He.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !He.cleanupBuffer(e) && Ul(e);
};
function rr(e) {
  return (t) => {
    dn(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const kl = /* @__PURE__ */ Ui(
  "perf:start"
  /* PERFORMANCE_START */
), Bl = /* @__PURE__ */ Ui(
  "perf:end"
  /* PERFORMANCE_END */
);
function Ui(e) {
  return (t, n, o) => {
    dn(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Kl(e, t, n) {
  dn(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
function Wl(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || X;
  if (p.NODE_ENV !== "production") {
    const {
      emitsOptions: h,
      propsOptions: [a]
    } = e;
    if (h)
      if (!(t in h))
        (!a || !(ht(t) in a)) && w(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${ht(t)}" prop.`
        );
      else {
        const g = h[t];
        P(g) && (g(...n) || w(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let r = n;
  const i = t.startsWith("update:"), s = i && t.slice(7);
  if (s && s in o) {
    const h = `${s === "modelValue" ? "model" : s}Modifiers`, { number: a, trim: g } = o[h] || X;
    g && (r = n.map((y) => oe(y) ? y.trim() : y)), a && (r = n.map(vo));
  }
  if (p.NODE_ENV !== "production" && Kl(e, t, r), p.NODE_ENV !== "production") {
    const h = t.toLowerCase();
    h !== t && o[ht(h)] && w(
      `Event "${h}" is emitted in component ${oo(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Je(
        t
      )}" instead of "${t}".`
    );
  }
  let l, u = o[l = ht(t)] || // also try camelCase event handler (#2249)
  o[l = ht(Rt(t))];
  !u && i && (u = o[l = ht(Je(t))]), u && Me(
    u,
    e,
    6,
    r
  );
  const f = o[l + "Once"];
  if (f) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Me(
      f,
      e,
      6,
      r
    );
  }
}
function Hi(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let s = {}, l = !1;
  if (!P(e)) {
    const u = (f) => {
      const h = Hi(f, t, !0);
      h && (l = !0, ne(s, h));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !i && !l ? (Y(e) && o.set(e, null), null) : (F(i) ? i.forEach((u) => s[u] = null) : ne(s, i), Y(e) && o.set(e, s), s);
}
function Zn(e, t) {
  return !e || !un(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), B(e, t[0].toLowerCase() + t.slice(1)) || B(e, Je(t)) || B(e, t));
}
let _e = null, ki = null;
function Ln(e) {
  const t = _e;
  return _e = e, ki = e && e.type.__scopeId || null, t;
}
function ql(e, t = _e, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && Lr(-1);
    const i = Ln(t);
    let s;
    try {
      s = e(...r);
    } finally {
      Ln(i), o._d && Lr(1);
    }
    return p.NODE_ENV !== "production" && Li(t), s;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let So = !1;
function Un() {
  So = !0;
}
function po(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: r,
    props: i,
    propsOptions: [s],
    slots: l,
    attrs: u,
    emit: f,
    render: h,
    renderCache: a,
    data: g,
    setupState: y,
    ctx: x,
    inheritAttrs: S
  } = e;
  let $, U;
  const G = Ln(e);
  p.NODE_ENV !== "production" && (So = !1);
  try {
    if (n.shapeFlag & 4) {
      const k = r || o, Q = p.NODE_ENV !== "production" && y.__isScriptSetup ? new Proxy(k, {
        get(A, q, re) {
          return w(
            `Property '${String(
              q
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(A, q, re);
        }
      }) : k;
      $ = Pe(
        h.call(
          Q,
          k,
          a,
          i,
          y,
          g,
          x
        )
      ), U = u;
    } else {
      const k = t;
      p.NODE_ENV !== "production" && u === i && Un(), $ = Pe(
        k.length > 1 ? k(
          i,
          p.NODE_ENV !== "production" ? {
            get attrs() {
              return Un(), u;
            },
            slots: l,
            emit: f
          } : { attrs: u, slots: l, emit: f }
        ) : k(
          i,
          null
          /* we know it doesn't need it */
        )
      ), U = t.props ? u : Gl(u);
    }
  } catch (k) {
    en.length = 0, an(k, e, 1), $ = Ne(xe);
  }
  let H = $, K;
  if (p.NODE_ENV !== "production" && $.patchFlag > 0 && $.patchFlag & 2048 && ([H, K] = Bi($)), U && S !== !1) {
    const k = Object.keys(U), { shapeFlag: Q } = H;
    if (k.length) {
      if (Q & 7)
        s && k.some(Mn) && (U = zl(
          U,
          s
        )), H = ut(H, U);
      else if (p.NODE_ENV !== "production" && !So && H.type !== xe) {
        const A = Object.keys(u), q = [], re = [];
        for (let j = 0, Z = A.length; j < Z; j++) {
          const ee = A[j];
          un(ee) ? Mn(ee) || q.push(ee[2].toLowerCase() + ee.slice(3)) : re.push(ee);
        }
        re.length && w(
          `Extraneous non-props attributes (${re.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), q.length && w(
          `Extraneous non-emits event listeners (${q.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (p.NODE_ENV !== "production" && !Sr(H) && w(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), H = ut(H), H.dirs = H.dirs ? H.dirs.concat(n.dirs) : n.dirs), n.transition && (p.NODE_ENV !== "production" && !Sr(H) && w(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), H.transition = n.transition), p.NODE_ENV !== "production" && K ? K(H) : $ = H, Ln(G), $;
}
const Bi = (e) => {
  const t = e.children, n = e.dynamicChildren, o = ir(t, !1);
  if (o) {
    if (p.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return Bi(o);
  } else
    return [e, void 0];
  const r = t.indexOf(o), i = n ? n.indexOf(o) : -1, s = (l) => {
    t[r] = l, n && (i > -1 ? n[i] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Pe(o), s];
};
function ir(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    if (ar(r)) {
      if (r.type !== xe || r.children === "v-if") {
        if (n)
          return;
        if (n = r, p.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return ir(n.children);
      }
    } else
      return;
  }
  return n;
}
const Gl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || un(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, zl = (e, t) => {
  const n = {};
  for (const o in e)
    (!Mn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Sr = (e) => e.shapeFlag & 7 || e.type === xe;
function Jl(e, t, n) {
  const { props: o, children: r, component: i } = e, { props: s, children: l, patchFlag: u } = t, f = i.emitsOptions;
  if (p.NODE_ENV !== "production" && (r || l) && Nt || t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return o ? Cr(o, s, f) : !!s;
    if (u & 8) {
      const h = t.dynamicProps;
      for (let a = 0; a < h.length; a++) {
        const g = h[a];
        if (s[g] !== o[g] && !Zn(f, g))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : o === s ? !1 : o ? s ? Cr(o, s, f) : !0 : !!s;
  return !1;
}
function Cr(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const i = o[r];
    if (t[i] !== e[i] && !Zn(n, i))
      return !0;
  }
  return !1;
}
function Yl({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Xl = Symbol.for("v-ndc"), Zl = (e) => e.__isSuspense;
function Ql(e, t) {
  t && t.pendingBranch ? F(e) ? t.effects.push(...e) : t.effects.push(e) : Pi(e);
}
const ec = Symbol.for("v-scx"), tc = () => {
  {
    const e = $n(ec);
    return e || p.NODE_ENV !== "production" && w(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, On = {};
function Te(e, t, n) {
  return p.NODE_ENV !== "production" && !P(t) && w(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Ki(e, t, n);
}
function Ki(e, t, {
  immediate: n,
  deep: o,
  flush: r,
  once: i,
  onTrack: s,
  onTrigger: l
} = X) {
  if (t && i) {
    const A = t;
    t = (...q) => {
      A(...q), Q();
    };
  }
  p.NODE_ENV !== "production" && o !== void 0 && typeof o == "number" && w(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), p.NODE_ENV !== "production" && !t && (n !== void 0 && w(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && w(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && w(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const u = (A) => {
    w(
      "Invalid watch source: ",
      A,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, f = fe, h = (A) => o === !0 ? A : (
    // for deep: false, only traverse root-level properties
    mt(A, o === !1 ? 1 : void 0)
  );
  let a, g = !1, y = !1;
  if (ie(e) ? (a = () => e.value, g = bt(e)) : yt(e) ? (a = () => h(e), g = !0) : F(e) ? (y = !0, g = e.some((A) => yt(A) || bt(A)), a = () => e.map((A) => {
    if (ie(A))
      return A.value;
    if (yt(A))
      return h(A);
    if (P(A))
      return ze(A, f, 2);
    p.NODE_ENV !== "production" && u(A);
  })) : P(e) ? t ? a = () => ze(e, f, 2) : a = () => (x && x(), Me(
    e,
    f,
    3,
    [S]
  )) : (a = le, p.NODE_ENV !== "production" && u(e)), t && o) {
    const A = a;
    a = () => mt(A());
  }
  let x, S = (A) => {
    x = K.onStop = () => {
      ze(A, f, 4), x = K.onStop = void 0;
    };
  }, $;
  if (to)
    if (S = le, t ? n && Me(t, f, 3, [
      a(),
      y ? [] : void 0,
      S
    ]) : a(), r === "sync") {
      const A = tc();
      $ = A.__watcherHandles || (A.__watcherHandles = []);
    } else
      return le;
  let U = y ? new Array(e.length).fill(On) : On;
  const G = () => {
    if (!(!K.active || !K.dirty))
      if (t) {
        const A = K.run();
        (o || g || (y ? A.some((q, re) => lt(q, U[re])) : lt(A, U))) && (x && x(), Me(t, f, 3, [
          A,
          // pass undefined as the old value when it's changed for the first time
          U === On ? void 0 : y && U[0] === On ? [] : U,
          S
        ]), U = A);
      } else
        K.run();
  };
  G.allowRecurse = !!t;
  let H;
  r === "sync" ? H = G : r === "post" ? H = () => ve(G, f && f.suspense) : (G.pre = !0, f && (G.id = f.uid), H = () => Xn(G));
  const K = new Go(a, le, H), k = qo(), Q = () => {
    K.stop(), k && Uo(k.effects, K);
  };
  return p.NODE_ENV !== "production" && (K.onTrack = s, K.onTrigger = l), t ? n ? G() : U = K.run() : r === "post" ? ve(
    K.run.bind(K),
    f && f.suspense
  ) : K.run(), $ && $.push(Q), Q;
}
function nc(e, t, n) {
  const o = this.proxy, r = oe(e) ? e.includes(".") ? Wi(o, e) : () => o[e] : e.bind(o, o);
  let i;
  P(t) ? i = t : (i = t.handler, n = t);
  const s = mn(this), l = Ki(r, i.bind(o), n);
  return s(), l;
}
function Wi(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function mt(e, t, n = 0, o) {
  if (!Y(e) || e.__v_skip)
    return e;
  if (t && t > 0) {
    if (n >= t)
      return e;
    n++;
  }
  if (o = o || /* @__PURE__ */ new Set(), o.has(e))
    return e;
  if (o.add(e), ie(e))
    mt(e.value, t, n, o);
  else if (F(e))
    for (let r = 0; r < e.length; r++)
      mt(e[r], t, n, o);
  else if (ci(e) || gt(e))
    e.forEach((r) => {
      mt(r, t, n, o);
    });
  else if (fi(e))
    for (const r in e)
      mt(e[r], t, n, o);
  return e;
}
function qi(e) {
  Cs(e) && w("Do not use built-in directive ids as custom directive id: " + e);
}
function Gi(e, t) {
  if (_e === null)
    return p.NODE_ENV !== "production" && w("withDirectives can only be used inside render functions."), e;
  const n = no(_e) || _e.proxy, o = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, s, l, u = X] = t[r];
    i && (P(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && mt(s), o.push({
      dir: i,
      instance: n,
      value: s,
      oldValue: void 0,
      arg: l,
      modifiers: u
    }));
  }
  return e;
}
function dt(e, t, n, o) {
  const r = e.dirs, i = t && t.dirs;
  for (let s = 0; s < r.length; s++) {
    const l = r[s];
    i && (l.oldValue = i[s].value);
    let u = l.dir[o];
    u && (ft(), Me(u, n, 8, [
      e.el,
      l,
      e,
      t
    ]), at());
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ht(e, t) {
  return P(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ne({ name: e.name }, t, { setup: e })
  ) : e;
}
const Tn = (e) => !!e.type.__asyncLoader, sr = (e) => e.type.__isKeepAlive;
function oc(e, t) {
  zi(e, "a", t);
}
function rc(e, t) {
  zi(e, "da", t);
}
function zi(e, t, n = fe) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Qn(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      sr(r.parent.vnode) && ic(o, t, n, r), r = r.parent;
  }
}
function ic(e, t, n, o) {
  const r = Qn(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  pn(() => {
    Uo(o[t], r);
  }, n);
}
function Qn(e, t, n = fe, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...s) => {
      if (n.isUnmounted)
        return;
      ft();
      const l = mn(n), u = Me(t, n, e, s);
      return l(), at(), u;
    });
    return o ? r.unshift(i) : r.push(i), i;
  } else if (p.NODE_ENV !== "production") {
    const r = ht(er[e].replace(/ hook$/, ""));
    w(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Ze = (e) => (t, n = fe) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!to || e === "sp") && Qn(e, (...o) => t(...o), n)
), sc = Ze("bm"), kt = Ze("m"), lc = Ze("bu"), cc = Ze("u"), uc = Ze("bum"), pn = Ze("um"), fc = Ze("sp"), ac = Ze(
  "rtg"
), dc = Ze(
  "rtc"
);
function pc(e, t = fe) {
  Qn("ec", e, t);
}
function lr(e, t, n, o) {
  let r;
  const i = n && n[o];
  if (F(e) || oe(e)) {
    r = new Array(e.length);
    for (let s = 0, l = e.length; s < l; s++)
      r[s] = t(e[s], s, void 0, i && i[s]);
  } else if (typeof e == "number") {
    p.NODE_ENV !== "production" && !Number.isInteger(e) && w(`The v-for range expect an integer value but got ${e}.`), r = new Array(e);
    for (let s = 0; s < e; s++)
      r[s] = t(s + 1, s, void 0, i && i[s]);
  } else if (Y(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (s, l) => t(s, l, void 0, i && i[l])
      );
    else {
      const s = Object.keys(e);
      r = new Array(s.length);
      for (let l = 0, u = s.length; l < u; l++) {
        const f = s[l];
        r[l] = t(e[f], f, l, i && i[l]);
      }
    }
  else
    r = [];
  return n && (n[o] = r), r;
}
const Co = (e) => e ? fs(e) ? no(e) || e.proxy : Co(e.parent) : null, Ot = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ne(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => p.NODE_ENV !== "production" ? Pt(e.props) : e.props,
    $attrs: (e) => p.NODE_ENV !== "production" ? Pt(e.attrs) : e.attrs,
    $slots: (e) => p.NODE_ENV !== "production" ? Pt(e.slots) : e.slots,
    $refs: (e) => p.NODE_ENV !== "production" ? Pt(e.refs) : e.refs,
    $parent: (e) => Co(e.parent),
    $root: (e) => Co(e.root),
    $emit: (e) => e.emit,
    $options: (e) => ur(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, Xn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = nr.bind(e.proxy)),
    $watch: (e) => nc.bind(e)
  })
), cr = (e) => e === "_" || e === "$", ho = (e, t) => e !== X && !e.__isScriptSetup && B(e, t), Ji = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: r, props: i, accessCache: s, type: l, appContext: u } = e;
    if (p.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let f;
    if (t[0] !== "$") {
      const y = s[t];
      if (y !== void 0)
        switch (y) {
          case 1:
            return o[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (ho(o, t))
          return s[t] = 1, o[t];
        if (r !== X && B(r, t))
          return s[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && B(f, t)
        )
          return s[t] = 3, i[t];
        if (n !== X && B(n, t))
          return s[t] = 4, n[t];
        To && (s[t] = 0);
      }
    }
    const h = Ot[t];
    let a, g;
    if (h)
      return t === "$attrs" ? (de(e, "get", t), p.NODE_ENV !== "production" && Un()) : p.NODE_ENV !== "production" && t === "$slots" && de(e, "get", t), h(e);
    if (
      // css module (injected by vue-loader)
      (a = l.__cssModules) && (a = a[t])
    )
      return a;
    if (n !== X && B(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      g = u.config.globalProperties, B(g, t)
    )
      return g[t];
    p.NODE_ENV !== "production" && _e && (!oe(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== X && cr(t[0]) && B(r, t) ? w(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === _e && w(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: i } = e;
    return ho(r, t) ? (r[t] = n, !0) : p.NODE_ENV !== "production" && r.__isScriptSetup && B(r, t) ? (w(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== X && B(o, t) ? (o[t] = n, !0) : B(e.props, t) ? (p.NODE_ENV !== "production" && w(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (p.NODE_ENV !== "production" && w(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (p.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(i, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: i }
  }, s) {
    let l;
    return !!n[s] || e !== X && B(e, s) || ho(t, s) || (l = i[0]) && B(l, s) || B(o, s) || B(Ot, s) || B(r.config.globalProperties, s);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : B(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
p.NODE_ENV !== "production" && (Ji.ownKeys = (e) => (w(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function hc(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Ot).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Ot[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: le
    });
  }), t;
}
function mc(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: le
    });
  });
}
function gc(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(L(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (cr(o[0])) {
        w(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: le
      });
    }
  });
}
function Tr(e) {
  return F(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function _c() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? w(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let To = !0;
function Ec(e) {
  const t = ur(e), n = e.proxy, o = e.ctx;
  To = !1, t.beforeCreate && $r(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: s,
    watch: l,
    provide: u,
    inject: f,
    // lifecycle
    created: h,
    beforeMount: a,
    mounted: g,
    beforeUpdate: y,
    updated: x,
    activated: S,
    deactivated: $,
    beforeDestroy: U,
    beforeUnmount: G,
    destroyed: H,
    unmounted: K,
    render: k,
    renderTracked: Q,
    renderTriggered: A,
    errorCaptured: q,
    serverPrefetch: re,
    // public API
    expose: j,
    inheritAttrs: Z,
    // assets
    components: ee,
    directives: Se,
    filters: Vt
  } = t, be = p.NODE_ENV !== "production" ? _c() : null;
  if (p.NODE_ENV !== "production") {
    const [I] = e.propsOptions;
    if (I)
      for (const M in I)
        be("Props", M);
  }
  if (f && yc(f, o, be), s)
    for (const I in s) {
      const M = s[I];
      P(M) ? (p.NODE_ENV !== "production" ? Object.defineProperty(o, I, {
        value: M.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[I] = M.bind(n), p.NODE_ENV !== "production" && be("Methods", I)) : p.NODE_ENV !== "production" && w(
        `Method "${I}" has type "${typeof M}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (r) {
    p.NODE_ENV !== "production" && !P(r) && w(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const I = r.call(n, n);
    if (p.NODE_ENV !== "production" && Ho(I) && w(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !Y(I))
      p.NODE_ENV !== "production" && w("data() should return an object.");
    else if (e.data = Xo(I), p.NODE_ENV !== "production")
      for (const M in I)
        be("Data", M), cr(M[0]) || Object.defineProperty(o, M, {
          configurable: !0,
          enumerable: !0,
          get: () => I[M],
          set: le
        });
  }
  if (To = !0, i)
    for (const I in i) {
      const M = i[I], pe = P(M) ? M.bind(n, n) : P(M.get) ? M.get.bind(n, n) : le;
      p.NODE_ENV !== "production" && pe === le && w(`Computed property "${I}" has no getter.`);
      const Fe = !P(M) && P(M.set) ? M.set.bind(n) : p.NODE_ENV !== "production" ? () => {
        w(
          `Write operation failed: computed property "${I}" is readonly.`
        );
      } : le, Qe = ro({
        get: pe,
        set: Fe
      });
      Object.defineProperty(o, I, {
        enumerable: !0,
        configurable: !0,
        get: () => Qe.value,
        set: (Ce) => Qe.value = Ce
      }), p.NODE_ENV !== "production" && be("Computed", I);
    }
  if (l)
    for (const I in l)
      Yi(l[I], o, n, I);
  if (u) {
    const I = P(u) ? u.call(n) : u;
    Reflect.ownKeys(I).forEach((M) => {
      Dc(M, I[M]);
    });
  }
  h && $r(h, e, "c");
  function z(I, M) {
    F(M) ? M.forEach((pe) => I(pe.bind(n))) : M && I(M.bind(n));
  }
  if (z(sc, a), z(kt, g), z(lc, y), z(cc, x), z(oc, S), z(rc, $), z(pc, q), z(dc, Q), z(ac, A), z(uc, G), z(pn, K), z(fc, re), F(j))
    if (j.length) {
      const I = e.exposed || (e.exposed = {});
      j.forEach((M) => {
        Object.defineProperty(I, M, {
          get: () => n[M],
          set: (pe) => n[M] = pe
        });
      });
    } else
      e.exposed || (e.exposed = {});
  k && e.render === le && (e.render = k), Z != null && (e.inheritAttrs = Z), ee && (e.components = ee), Se && (e.directives = Se);
}
function yc(e, t, n = le) {
  F(e) && (e = $o(e));
  for (const o in e) {
    const r = e[o];
    let i;
    Y(r) ? "default" in r ? i = $n(
      r.from || o,
      r.default,
      !0
    ) : i = $n(r.from || o) : i = $n(r), ie(i) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (s) => i.value = s
    }) : t[o] = i, p.NODE_ENV !== "production" && n("Inject", o);
  }
}
function $r(e, t, n) {
  Me(
    F(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Yi(e, t, n, o) {
  const r = o.includes(".") ? Wi(n, o) : () => n[o];
  if (oe(e)) {
    const i = t[e];
    P(i) ? Te(r, i) : p.NODE_ENV !== "production" && w(`Invalid watch handler specified by key "${e}"`, i);
  } else if (P(e))
    Te(r, e.bind(n));
  else if (Y(e))
    if (F(e))
      e.forEach((i) => Yi(i, t, n, o));
    else {
      const i = P(e.handler) ? e.handler.bind(n) : t[e.handler];
      P(i) ? Te(r, i, e) : p.NODE_ENV !== "production" && w(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else
    p.NODE_ENV !== "production" && w(`Invalid watch option: "${o}"`, e);
}
function ur(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: s }
  } = e.appContext, l = i.get(t);
  let u;
  return l ? u = l : !r.length && !n && !o ? u = t : (u = {}, r.length && r.forEach(
    (f) => Hn(u, f, s, !0)
  ), Hn(u, t, s)), Y(t) && i.set(t, u), u;
}
function Hn(e, t, n, o = !1) {
  const { mixins: r, extends: i } = t;
  i && Hn(e, i, n, !0), r && r.forEach(
    (s) => Hn(e, s, n, !0)
  );
  for (const s in t)
    if (o && s === "expose")
      p.NODE_ENV !== "production" && w(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = bc[s] || n && n[s];
      e[s] = l ? l(e[s], t[s]) : t[s];
    }
  return e;
}
const bc = {
  data: Fr,
  props: Ar,
  emits: Ar,
  // objects
  methods: Jt,
  computed: Jt,
  // lifecycle
  beforeCreate: ye,
  created: ye,
  beforeMount: ye,
  mounted: ye,
  beforeUpdate: ye,
  updated: ye,
  beforeDestroy: ye,
  beforeUnmount: ye,
  destroyed: ye,
  unmounted: ye,
  activated: ye,
  deactivated: ye,
  errorCaptured: ye,
  serverPrefetch: ye,
  // assets
  components: Jt,
  directives: Jt,
  // watch
  watch: Nc,
  // provide / inject
  provide: Fr,
  inject: vc
};
function Fr(e, t) {
  return t ? e ? function() {
    return ne(
      P(e) ? e.call(this, this) : e,
      P(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function vc(e, t) {
  return Jt($o(e), $o(t));
}
function $o(e) {
  if (F(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ye(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Jt(e, t) {
  return e ? ne(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ar(e, t) {
  return e ? F(e) && F(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ne(
    /* @__PURE__ */ Object.create(null),
    Tr(e),
    Tr(t ?? {})
  ) : t;
}
function Nc(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = ne(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = ye(e[o], t[o]);
  return n;
}
function Xi() {
  return {
    app: null,
    config: {
      isNativeTag: Vs,
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
let Oc = 0;
function wc(e, t) {
  return function(o, r = null) {
    P(o) || (o = ne({}, o)), r != null && !Y(r) && (p.NODE_ENV !== "production" && w("root props passed to app.mount() must be an object."), r = null);
    const i = Xi(), s = /* @__PURE__ */ new WeakSet();
    let l = !1;
    const u = i.app = {
      _uid: Oc++,
      _component: o,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Br,
      get config() {
        return i.config;
      },
      set config(f) {
        p.NODE_ENV !== "production" && w(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(f, ...h) {
        return s.has(f) ? p.NODE_ENV !== "production" && w("Plugin has already been applied to target app.") : f && P(f.install) ? (s.add(f), f.install(u, ...h)) : P(f) ? (s.add(f), f(u, ...h)) : p.NODE_ENV !== "production" && w(
          'A plugin must either be a function or an object with an "install" function.'
        ), u;
      },
      mixin(f) {
        return i.mixins.includes(f) ? p.NODE_ENV !== "production" && w(
          "Mixin has already been applied to target app" + (f.name ? `: ${f.name}` : "")
        ) : i.mixins.push(f), u;
      },
      component(f, h) {
        return p.NODE_ENV !== "production" && Mo(f, i.config), h ? (p.NODE_ENV !== "production" && i.components[f] && w(`Component "${f}" has already been registered in target app.`), i.components[f] = h, u) : i.components[f];
      },
      directive(f, h) {
        return p.NODE_ENV !== "production" && qi(f), h ? (p.NODE_ENV !== "production" && i.directives[f] && w(`Directive "${f}" has already been registered in target app.`), i.directives[f] = h, u) : i.directives[f];
      },
      mount(f, h, a) {
        if (l)
          p.NODE_ENV !== "production" && w(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          p.NODE_ENV !== "production" && f.__vue_app__ && w(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const g = Ne(o, r);
          return g.appContext = i, a === !0 ? a = "svg" : a === !1 && (a = void 0), p.NODE_ENV !== "production" && (i.reload = () => {
            e(
              ut(g),
              f,
              a
            );
          }), h && t ? t(g, f) : e(g, f, a), l = !0, u._container = f, f.__vue_app__ = u, p.NODE_ENV !== "production" && (u._instance = g.component, Rl(u, Br)), no(g.component) || g.component.proxy;
        }
      },
      unmount() {
        l ? (e(null, u._container), p.NODE_ENV !== "production" && (u._instance = null, jl(u)), delete u._container.__vue_app__) : p.NODE_ENV !== "production" && w("Cannot unmount an app that is not mounted.");
      },
      provide(f, h) {
        return p.NODE_ENV !== "production" && f in i.provides && w(
          `App already provides property with key "${String(f)}". It will be overwritten with the new value.`
        ), i.provides[f] = h, u;
      },
      runWithContext(f) {
        const h = Qt;
        Qt = u;
        try {
          return f();
        } finally {
          Qt = h;
        }
      }
    };
    return u;
  };
}
let Qt = null;
function Dc(e, t) {
  if (!fe)
    p.NODE_ENV !== "production" && w("provide() can only be used inside setup().");
  else {
    let n = fe.provides;
    const o = fe.parent && fe.parent.provides;
    o === n && (n = fe.provides = Object.create(o)), n[e] = t;
  }
}
function $n(e, t, n = !1) {
  const o = fe || _e;
  if (o || Qt) {
    const r = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : Qt._context.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && P(t) ? t.call(o && o.proxy) : t;
    p.NODE_ENV !== "production" && w(`injection "${String(e)}" not found.`);
  } else
    p.NODE_ENV !== "production" && w("inject() can only be used inside setup() or functional components.");
}
function xc(e, t, n, o = !1) {
  const r = {}, i = {};
  Rn(i, eo, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), Zi(e, t, r, i);
  for (const s in e.propsOptions[0])
    s in r || (r[s] = void 0);
  p.NODE_ENV !== "production" && es(t || {}, r, e), n ? e.props = o ? r : pl(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function Vc(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function Sc(e, t, n, o) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: s }
  } = e, l = L(r), [u] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(p.NODE_ENV !== "production" && Vc(e)) && (o || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const h = e.vnode.dynamicProps;
      for (let a = 0; a < h.length; a++) {
        let g = h[a];
        if (Zn(e.emitsOptions, g))
          continue;
        const y = t[g];
        if (u)
          if (B(i, g))
            y !== i[g] && (i[g] = y, f = !0);
          else {
            const x = Rt(g);
            r[x] = Fo(
              u,
              l,
              x,
              y,
              e,
              !1
            );
          }
        else
          y !== i[g] && (i[g] = y, f = !0);
      }
    }
  } else {
    Zi(e, t, r, i) && (f = !0);
    let h;
    for (const a in l)
      (!t || // for camelCase
      !B(t, a) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((h = Je(a)) === a || !B(t, h))) && (u ? n && // for camelCase
      (n[a] !== void 0 || // for kebab-case
      n[h] !== void 0) && (r[a] = Fo(
        u,
        l,
        a,
        void 0,
        e,
        !0
      )) : delete r[a]);
    if (i !== l)
      for (const a in i)
        (!t || !B(t, a)) && (delete i[a], f = !0);
  }
  f && ke(e, "set", "$attrs"), p.NODE_ENV !== "production" && es(t || {}, r, e);
}
function Zi(e, t, n, o) {
  const [r, i] = e.propsOptions;
  let s = !1, l;
  if (t)
    for (let u in t) {
      if (Yt(u))
        continue;
      const f = t[u];
      let h;
      r && B(r, h = Rt(u)) ? !i || !i.includes(h) ? n[h] = f : (l || (l = {}))[h] = f : Zn(e.emitsOptions, u) || (!(u in o) || f !== o[u]) && (o[u] = f, s = !0);
    }
  if (i) {
    const u = L(n), f = l || X;
    for (let h = 0; h < i.length; h++) {
      const a = i[h];
      n[a] = Fo(
        r,
        u,
        a,
        f[a],
        e,
        !B(f, a)
      );
    }
  }
  return s;
}
function Fo(e, t, n, o, r, i) {
  const s = e[n];
  if (s != null) {
    const l = B(s, "default");
    if (l && o === void 0) {
      const u = s.default;
      if (s.type !== Function && !s.skipFactory && P(u)) {
        const { propsDefaults: f } = r;
        if (n in f)
          o = f[n];
        else {
          const h = mn(r);
          o = f[n] = u.call(
            null,
            t
          ), h();
        }
      } else
        o = u;
    }
    s[
      0
      /* shouldCast */
    ] && (i && !l ? o = !1 : s[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === Je(n)) && (o = !0));
  }
  return o;
}
function Qi(e, t, n = !1) {
  const o = t.propsCache, r = o.get(e);
  if (r)
    return r;
  const i = e.props, s = {}, l = [];
  let u = !1;
  if (!P(e)) {
    const h = (a) => {
      u = !0;
      const [g, y] = Qi(a, t, !0);
      ne(s, g), y && l.push(...y);
    };
    !n && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  if (!i && !u)
    return Y(e) && o.set(e, It), It;
  if (F(i))
    for (let h = 0; h < i.length; h++) {
      p.NODE_ENV !== "production" && !oe(i[h]) && w("props must be strings when using array syntax.", i[h]);
      const a = Rt(i[h]);
      Pr(a) && (s[a] = X);
    }
  else if (i) {
    p.NODE_ENV !== "production" && !Y(i) && w("invalid props options", i);
    for (const h in i) {
      const a = Rt(h);
      if (Pr(a)) {
        const g = i[h], y = s[a] = F(g) || P(g) ? { type: g } : ne({}, g);
        if (y) {
          const x = Mr(Boolean, y.type), S = Mr(String, y.type);
          y[
            0
            /* shouldCast */
          ] = x > -1, y[
            1
            /* shouldCastTrue */
          ] = S < 0 || x < S, (x > -1 || B(y, "default")) && l.push(a);
        }
      }
    }
  }
  const f = [s, l];
  return Y(e) && o.set(e, f), f;
}
function Pr(e) {
  return e[0] !== "$" && !Yt(e) ? !0 : (p.NODE_ENV !== "production" && w(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Ao(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Ir(e, t) {
  return Ao(e) === Ao(t);
}
function Mr(e, t) {
  return F(t) ? t.findIndex((n) => Ir(n, e)) : P(t) && Ir(t, e) ? 0 : -1;
}
function es(e, t, n) {
  const o = L(t), r = n.propsOptions[0];
  for (const i in r) {
    let s = r[i];
    s != null && Cc(
      i,
      o[i],
      s,
      p.NODE_ENV !== "production" ? Pt(o) : o,
      !B(e, i) && !B(e, Je(i))
    );
  }
}
function Cc(e, t, n, o, r) {
  const { type: i, required: s, validator: l, skipCheck: u } = n;
  if (s && r) {
    w('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !s)) {
    if (i != null && i !== !0 && !u) {
      let f = !1;
      const h = F(i) ? i : [i], a = [];
      for (let g = 0; g < h.length && !f; g++) {
        const { valid: y, expectedType: x } = $c(t, h[g]);
        a.push(x || ""), f = y;
      }
      if (!f) {
        w(Fc(e, t, a));
        return;
      }
    }
    l && !l(t, o) && w('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Tc = /* @__PURE__ */ Xe(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function $c(e, t) {
  let n;
  const o = Ao(t);
  if (Tc(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = Y(e) : o === "Array" ? n = F(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Fc(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Gn).join(" | ")}`;
  const r = n[0], i = ko(t), s = Rr(t, r), l = Rr(t, i);
  return n.length === 1 && jr(r) && !Ac(r, i) && (o += ` with value ${s}`), o += `, got ${i} `, jr(i) && (o += `with value ${l}.`), o;
}
function Rr(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function jr(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Ac(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const ts = (e) => e[0] === "_" || e === "$stable", fr = (e) => F(e) ? e.map(Pe) : [Pe(e)], Pc = (e, t, n) => {
  if (t._n)
    return t;
  const o = ql((...r) => (p.NODE_ENV !== "production" && fe && (!n || n.root === fe.root) && w(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), fr(t(...r))), n);
  return o._c = !1, o;
}, ns = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (ts(r))
      continue;
    const i = e[r];
    if (P(i))
      t[r] = Pc(r, i, o);
    else if (i != null) {
      p.NODE_ENV !== "production" && w(
        `Non-function value encountered for slot "${r}". Prefer function slots for better performance.`
      );
      const s = fr(i);
      t[r] = () => s;
    }
  }
}, os = (e, t) => {
  p.NODE_ENV !== "production" && !sr(e.vnode) && w(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = fr(t);
  e.slots.default = () => n;
}, Ic = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = L(t), Rn(t, "_", n)) : ns(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && os(e, t);
  Rn(e.slots, eo, 1);
}, Mc = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let i = !0, s = X;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? p.NODE_ENV !== "production" && Nt ? (ne(r, t), ke(e, "set", "$slots")) : n && l === 1 ? i = !1 : (ne(r, t), !n && l === 1 && delete r._) : (i = !t.$stable, ns(t, r)), s = t;
  } else
    t && (os(e, t), s = { default: 1 });
  if (i)
    for (const l in r)
      !ts(l) && s[l] == null && delete r[l];
};
function Po(e, t, n, o, r = !1) {
  if (F(e)) {
    e.forEach(
      (g, y) => Po(
        g,
        t && (F(t) ? t[y] : t),
        n,
        o,
        r
      )
    );
    return;
  }
  if (Tn(o) && !r)
    return;
  const i = o.shapeFlag & 4 ? no(o.component) || o.component.proxy : o.el, s = r ? null : i, { i: l, r: u } = e;
  if (p.NODE_ENV !== "production" && !l) {
    w(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const f = t && t.r, h = l.refs === X ? l.refs = {} : l.refs, a = l.setupState;
  if (f != null && f !== u && (oe(f) ? (h[f] = null, B(a, f) && (a[f] = null)) : ie(f) && (f.value = null)), P(u))
    ze(u, l, 12, [s, h]);
  else {
    const g = oe(u), y = ie(u);
    if (g || y) {
      const x = () => {
        if (e.f) {
          const S = g ? B(a, u) ? a[u] : h[u] : u.value;
          r ? F(S) && Uo(S, i) : F(S) ? S.includes(i) || S.push(i) : g ? (h[u] = [i], B(a, u) && (a[u] = h[u])) : (u.value = [i], e.k && (h[e.k] = u.value));
        } else
          g ? (h[u] = s, B(a, u) && (a[u] = s)) : y ? (u.value = s, e.k && (h[e.k] = s)) : p.NODE_ENV !== "production" && w("Invalid template ref type:", u, `(${typeof u})`);
      };
      s ? (x.id = -1, ve(x, n)) : x();
    } else
      p.NODE_ENV !== "production" && w("Invalid template ref type:", u, `(${typeof u})`);
  }
}
let Kt, rt;
function We(e, t) {
  e.appContext.config.performance && kn() && rt.mark(`vue-${t}-${e.uid}`), p.NODE_ENV !== "production" && kl(e, t, kn() ? rt.now() : Date.now());
}
function qe(e, t) {
  if (e.appContext.config.performance && kn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    rt.mark(o), rt.measure(
      `<${oo(e, e.type)}> ${t}`,
      n,
      o
    ), rt.clearMarks(n), rt.clearMarks(o);
  }
  p.NODE_ENV !== "production" && Bl(e, t, kn() ? rt.now() : Date.now());
}
function kn() {
  return Kt !== void 0 || (typeof window < "u" && window.performance ? (Kt = !0, rt = window.performance) : Kt = !1), Kt;
}
function Rc() {
  const e = [];
  if (p.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const ve = Ql;
function jc(e) {
  return Lc(e);
}
function Lc(e, t) {
  Rc();
  const n = Ko();
  n.__VUE__ = !0, p.NODE_ENV !== "production" && ji(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: r,
    patchProp: i,
    createElement: s,
    createText: l,
    createComment: u,
    setText: f,
    setElementText: h,
    parentNode: a,
    nextSibling: g,
    setScopeId: y = le,
    insertStaticContent: x
  } = e, S = (c, d, m, _ = null, E = null, N = null, D = void 0, v = null, O = p.NODE_ENV !== "production" && Nt ? !1 : !!d.dynamicChildren) => {
    if (c === d)
      return;
    c && !Wt(c, d) && (_ = _n(c), he(c, E, N, !0), c = null), d.patchFlag === -2 && (O = !1, d.dynamicChildren = null);
    const { type: b, ref: V, shapeFlag: T } = d;
    switch (b) {
      case hn:
        $(c, d, m, _);
        break;
      case xe:
        U(c, d, m, _);
        break;
      case An:
        c == null ? G(d, m, _, D) : p.NODE_ENV !== "production" && H(c, d, m, D);
        break;
      case we:
        Se(
          c,
          d,
          m,
          _,
          E,
          N,
          D,
          v,
          O
        );
        break;
      default:
        T & 1 ? Q(
          c,
          d,
          m,
          _,
          E,
          N,
          D,
          v,
          O
        ) : T & 6 ? Vt(
          c,
          d,
          m,
          _,
          E,
          N,
          D,
          v,
          O
        ) : T & 64 || T & 128 ? b.process(
          c,
          d,
          m,
          _,
          E,
          N,
          D,
          v,
          O,
          St
        ) : p.NODE_ENV !== "production" && w("Invalid VNode type:", b, `(${typeof b})`);
    }
    V != null && E && Po(V, c && c.ref, N, d || c, !d);
  }, $ = (c, d, m, _) => {
    if (c == null)
      o(
        d.el = l(d.children),
        m,
        _
      );
    else {
      const E = d.el = c.el;
      d.children !== c.children && f(E, d.children);
    }
  }, U = (c, d, m, _) => {
    c == null ? o(
      d.el = u(d.children || ""),
      m,
      _
    ) : d.el = c.el;
  }, G = (c, d, m, _) => {
    [c.el, c.anchor] = x(
      c.children,
      d,
      m,
      _,
      c.el,
      c.anchor
    );
  }, H = (c, d, m, _) => {
    if (d.children !== c.children) {
      const E = g(c.anchor);
      k(c), [d.el, d.anchor] = x(
        d.children,
        m,
        E,
        _
      );
    } else
      d.el = c.el, d.anchor = c.anchor;
  }, K = ({ el: c, anchor: d }, m, _) => {
    let E;
    for (; c && c !== d; )
      E = g(c), o(c, m, _), c = E;
    o(d, m, _);
  }, k = ({ el: c, anchor: d }) => {
    let m;
    for (; c && c !== d; )
      m = g(c), r(c), c = m;
    r(d);
  }, Q = (c, d, m, _, E, N, D, v, O) => {
    d.type === "svg" ? D = "svg" : d.type === "math" && (D = "mathml"), c == null ? A(
      d,
      m,
      _,
      E,
      N,
      D,
      v,
      O
    ) : j(
      c,
      d,
      E,
      N,
      D,
      v,
      O
    );
  }, A = (c, d, m, _, E, N, D, v) => {
    let O, b;
    const { props: V, shapeFlag: T, transition: C, dirs: R } = c;
    if (O = c.el = s(
      c.type,
      N,
      V && V.is,
      V
    ), T & 8 ? h(O, c.children) : T & 16 && re(
      c.children,
      O,
      null,
      _,
      E,
      mo(c, N),
      D,
      v
    ), R && dt(c, null, _, "created"), q(O, c, c.scopeId, D, _), V) {
      for (const J in V)
        J !== "value" && !Yt(J) && i(
          O,
          J,
          null,
          V[J],
          N,
          c.children,
          _,
          E,
          Ke
        );
      "value" in V && i(O, "value", null, V.value, N), (b = V.onVnodeBeforeMount) && Le(b, _, c);
    }
    p.NODE_ENV !== "production" && (Object.defineProperty(O, "__vnode", {
      value: c,
      enumerable: !1
    }), Object.defineProperty(O, "__vueParentComponent", {
      value: _,
      enumerable: !1
    })), R && dt(c, null, _, "beforeMount");
    const W = Uc(E, C);
    W && C.beforeEnter(O), o(O, d, m), ((b = V && V.onVnodeMounted) || W || R) && ve(() => {
      b && Le(b, _, c), W && C.enter(O), R && dt(c, null, _, "mounted");
    }, E);
  }, q = (c, d, m, _, E) => {
    if (m && y(c, m), _)
      for (let N = 0; N < _.length; N++)
        y(c, _[N]);
    if (E) {
      let N = E.subTree;
      if (p.NODE_ENV !== "production" && N.patchFlag > 0 && N.patchFlag & 2048 && (N = ir(N.children) || N), d === N) {
        const D = E.vnode;
        q(
          c,
          D,
          D.scopeId,
          D.slotScopeIds,
          E.parent
        );
      }
    }
  }, re = (c, d, m, _, E, N, D, v, O = 0) => {
    for (let b = O; b < c.length; b++) {
      const V = c[b] = v ? nt(c[b]) : Pe(c[b]);
      S(
        null,
        V,
        d,
        m,
        _,
        E,
        N,
        D,
        v
      );
    }
  }, j = (c, d, m, _, E, N, D) => {
    const v = d.el = c.el;
    let { patchFlag: O, dynamicChildren: b, dirs: V } = d;
    O |= c.patchFlag & 16;
    const T = c.props || X, C = d.props || X;
    let R;
    if (m && pt(m, !1), (R = C.onVnodeBeforeUpdate) && Le(R, m, d, c), V && dt(d, c, m, "beforeUpdate"), m && pt(m, !0), p.NODE_ENV !== "production" && Nt && (O = 0, D = !1, b = null), b ? (Z(
      c.dynamicChildren,
      b,
      v,
      m,
      _,
      mo(d, E),
      N
    ), p.NODE_ENV !== "production" && Fn(c, d)) : D || pe(
      c,
      d,
      v,
      null,
      m,
      _,
      mo(d, E),
      N,
      !1
    ), O > 0) {
      if (O & 16)
        ee(
          v,
          d,
          T,
          C,
          m,
          _,
          E
        );
      else if (O & 2 && T.class !== C.class && i(v, "class", null, C.class, E), O & 4 && i(v, "style", T.style, C.style, E), O & 8) {
        const W = d.dynamicProps;
        for (let J = 0; J < W.length; J++) {
          const te = W[J], ue = T[te], Ae = C[te];
          (Ae !== ue || te === "value") && i(
            v,
            te,
            ue,
            Ae,
            E,
            c.children,
            m,
            _,
            Ke
          );
        }
      }
      O & 1 && c.children !== d.children && h(v, d.children);
    } else
      !D && b == null && ee(
        v,
        d,
        T,
        C,
        m,
        _,
        E
      );
    ((R = C.onVnodeUpdated) || V) && ve(() => {
      R && Le(R, m, d, c), V && dt(d, c, m, "updated");
    }, _);
  }, Z = (c, d, m, _, E, N, D) => {
    for (let v = 0; v < d.length; v++) {
      const O = c[v], b = d[v], V = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        O.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (O.type === we || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Wt(O, b) || // - In the case of a component, it could contain anything.
        O.shapeFlag & 70) ? a(O.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      S(
        O,
        b,
        V,
        null,
        _,
        E,
        N,
        D,
        !0
      );
    }
  }, ee = (c, d, m, _, E, N, D) => {
    if (m !== _) {
      if (m !== X)
        for (const v in m)
          !Yt(v) && !(v in _) && i(
            c,
            v,
            m[v],
            null,
            D,
            d.children,
            E,
            N,
            Ke
          );
      for (const v in _) {
        if (Yt(v))
          continue;
        const O = _[v], b = m[v];
        O !== b && v !== "value" && i(
          c,
          v,
          b,
          O,
          D,
          d.children,
          E,
          N,
          Ke
        );
      }
      "value" in _ && i(c, "value", m.value, _.value, D);
    }
  }, Se = (c, d, m, _, E, N, D, v, O) => {
    const b = d.el = c ? c.el : l(""), V = d.anchor = c ? c.anchor : l("");
    let { patchFlag: T, dynamicChildren: C, slotScopeIds: R } = d;
    p.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Nt || T & 2048) && (T = 0, O = !1, C = null), R && (v = v ? v.concat(R) : R), c == null ? (o(b, m, _), o(V, m, _), re(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      m,
      V,
      E,
      N,
      D,
      v,
      O
    )) : T > 0 && T & 64 && C && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (Z(
      c.dynamicChildren,
      C,
      m,
      E,
      N,
      D,
      v
    ), p.NODE_ENV !== "production" ? Fn(c, d) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (d.key != null || E && d === E.subTree) && Fn(
        c,
        d,
        !0
        /* shallow */
      )
    )) : pe(
      c,
      d,
      m,
      V,
      E,
      N,
      D,
      v,
      O
    );
  }, Vt = (c, d, m, _, E, N, D, v, O) => {
    d.slotScopeIds = v, c == null ? d.shapeFlag & 512 ? E.ctx.activate(
      d,
      m,
      _,
      D,
      O
    ) : be(
      d,
      m,
      _,
      E,
      N,
      D,
      O
    ) : z(c, d, O);
  }, be = (c, d, m, _, E, N, D) => {
    const v = c.component = Zc(
      c,
      _,
      E
    );
    if (p.NODE_ENV !== "production" && v.type.__hmrId && Al(v), p.NODE_ENV !== "production" && (Sn(c), We(v, "mount")), sr(c) && (v.ctx.renderer = St), p.NODE_ENV !== "production" && We(v, "init"), eu(v), p.NODE_ENV !== "production" && qe(v, "init"), v.asyncDep) {
      if (E && E.registerDep(v, I), !c.el) {
        const O = v.subTree = Ne(xe);
        U(null, O, d, m);
      }
    } else
      I(
        v,
        c,
        d,
        m,
        E,
        N,
        D
      );
    p.NODE_ENV !== "production" && (Cn(), qe(v, "mount"));
  }, z = (c, d, m) => {
    const _ = d.component = c.component;
    if (Jl(c, d, m))
      if (_.asyncDep && !_.asyncResolved) {
        p.NODE_ENV !== "production" && Sn(d), M(_, d, m), p.NODE_ENV !== "production" && Cn();
        return;
      } else
        _.next = d, $l(_.update), _.effect.dirty = !0, _.update();
    else
      d.el = c.el, _.vnode = d;
  }, I = (c, d, m, _, E, N, D) => {
    const v = () => {
      if (c.isMounted) {
        let { next: V, bu: T, u: C, parent: R, vnode: W } = c;
        {
          const Ct = rs(c);
          if (Ct) {
            V && (V.el = W.el, M(c, V, D)), Ct.asyncDep.then(() => {
              c.isUnmounted || v();
            });
            return;
          }
        }
        let J = V, te;
        p.NODE_ENV !== "production" && Sn(V || c.vnode), pt(c, !1), V ? (V.el = W.el, M(c, V, D)) : V = W, T && $t(T), (te = V.props && V.props.onVnodeBeforeUpdate) && Le(te, R, V, W), pt(c, !0), p.NODE_ENV !== "production" && We(c, "render");
        const ue = po(c);
        p.NODE_ENV !== "production" && qe(c, "render");
        const Ae = c.subTree;
        c.subTree = ue, p.NODE_ENV !== "production" && We(c, "patch"), S(
          Ae,
          ue,
          // parent may have changed if it's in a teleport
          a(Ae.el),
          // anchor may have changed if it's in a fragment
          _n(Ae),
          c,
          E,
          N
        ), p.NODE_ENV !== "production" && qe(c, "patch"), V.el = ue.el, J === null && Yl(c, ue.el), C && ve(C, E), (te = V.props && V.props.onVnodeUpdated) && ve(
          () => Le(te, R, V, W),
          E
        ), p.NODE_ENV !== "production" && Li(c), p.NODE_ENV !== "production" && Cn();
      } else {
        let V;
        const { el: T, props: C } = d, { bm: R, m: W, parent: J } = c, te = Tn(d);
        if (pt(c, !1), R && $t(R), !te && (V = C && C.onVnodeBeforeMount) && Le(V, J, d), pt(c, !0), T && uo) {
          const ue = () => {
            p.NODE_ENV !== "production" && We(c, "render"), c.subTree = po(c), p.NODE_ENV !== "production" && qe(c, "render"), p.NODE_ENV !== "production" && We(c, "hydrate"), uo(
              T,
              c.subTree,
              c,
              E,
              null
            ), p.NODE_ENV !== "production" && qe(c, "hydrate");
          };
          te ? d.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !c.isUnmounted && ue()
          ) : ue();
        } else {
          p.NODE_ENV !== "production" && We(c, "render");
          const ue = c.subTree = po(c);
          p.NODE_ENV !== "production" && qe(c, "render"), p.NODE_ENV !== "production" && We(c, "patch"), S(
            null,
            ue,
            m,
            _,
            c,
            E,
            N
          ), p.NODE_ENV !== "production" && qe(c, "patch"), d.el = ue.el;
        }
        if (W && ve(W, E), !te && (V = C && C.onVnodeMounted)) {
          const ue = d;
          ve(
            () => Le(V, J, ue),
            E
          );
        }
        (d.shapeFlag & 256 || J && Tn(J.vnode) && J.vnode.shapeFlag & 256) && c.a && ve(c.a, E), c.isMounted = !0, p.NODE_ENV !== "production" && Ll(c), d = m = _ = null;
      }
    }, O = c.effect = new Go(
      v,
      le,
      () => Xn(b),
      c.scope
      // track it in component's effect scope
    ), b = c.update = () => {
      O.dirty && O.run();
    };
    b.id = c.uid, pt(c, !0), p.NODE_ENV !== "production" && (O.onTrack = c.rtc ? (V) => $t(c.rtc, V) : void 0, O.onTrigger = c.rtg ? (V) => $t(c.rtg, V) : void 0, b.ownerInstance = c), b();
  }, M = (c, d, m) => {
    d.component = c;
    const _ = c.vnode.props;
    c.vnode = d, c.next = null, Sc(c, d.props, _, m), Mc(c, d.children, m), ft(), xr(c), at();
  }, pe = (c, d, m, _, E, N, D, v, O = !1) => {
    const b = c && c.children, V = c ? c.shapeFlag : 0, T = d.children, { patchFlag: C, shapeFlag: R } = d;
    if (C > 0) {
      if (C & 128) {
        Qe(
          b,
          T,
          m,
          _,
          E,
          N,
          D,
          v,
          O
        );
        return;
      } else if (C & 256) {
        Fe(
          b,
          T,
          m,
          _,
          E,
          N,
          D,
          v,
          O
        );
        return;
      }
    }
    R & 8 ? (V & 16 && Ke(b, E, N), T !== b && h(m, T)) : V & 16 ? R & 16 ? Qe(
      b,
      T,
      m,
      _,
      E,
      N,
      D,
      v,
      O
    ) : Ke(b, E, N, !0) : (V & 8 && h(m, ""), R & 16 && re(
      T,
      m,
      _,
      E,
      N,
      D,
      v,
      O
    ));
  }, Fe = (c, d, m, _, E, N, D, v, O) => {
    c = c || It, d = d || It;
    const b = c.length, V = d.length, T = Math.min(b, V);
    let C;
    for (C = 0; C < T; C++) {
      const R = d[C] = O ? nt(d[C]) : Pe(d[C]);
      S(
        c[C],
        R,
        m,
        null,
        E,
        N,
        D,
        v,
        O
      );
    }
    b > V ? Ke(
      c,
      E,
      N,
      !0,
      !1,
      T
    ) : re(
      d,
      m,
      _,
      E,
      N,
      D,
      v,
      O,
      T
    );
  }, Qe = (c, d, m, _, E, N, D, v, O) => {
    let b = 0;
    const V = d.length;
    let T = c.length - 1, C = V - 1;
    for (; b <= T && b <= C; ) {
      const R = c[b], W = d[b] = O ? nt(d[b]) : Pe(d[b]);
      if (Wt(R, W))
        S(
          R,
          W,
          m,
          null,
          E,
          N,
          D,
          v,
          O
        );
      else
        break;
      b++;
    }
    for (; b <= T && b <= C; ) {
      const R = c[T], W = d[C] = O ? nt(d[C]) : Pe(d[C]);
      if (Wt(R, W))
        S(
          R,
          W,
          m,
          null,
          E,
          N,
          D,
          v,
          O
        );
      else
        break;
      T--, C--;
    }
    if (b > T) {
      if (b <= C) {
        const R = C + 1, W = R < V ? d[R].el : _;
        for (; b <= C; )
          S(
            null,
            d[b] = O ? nt(d[b]) : Pe(d[b]),
            m,
            W,
            E,
            N,
            D,
            v,
            O
          ), b++;
      }
    } else if (b > C)
      for (; b <= T; )
        he(c[b], E, N, !0), b++;
    else {
      const R = b, W = b, J = /* @__PURE__ */ new Map();
      for (b = W; b <= C; b++) {
        const Ee = d[b] = O ? nt(d[b]) : Pe(d[b]);
        Ee.key != null && (p.NODE_ENV !== "production" && J.has(Ee.key) && w(
          "Duplicate keys found during update:",
          JSON.stringify(Ee.key),
          "Make sure keys are unique."
        ), J.set(Ee.key, b));
      }
      let te, ue = 0;
      const Ae = C - W + 1;
      let Ct = !1, mr = 0;
      const Bt = new Array(Ae);
      for (b = 0; b < Ae; b++)
        Bt[b] = 0;
      for (b = R; b <= T; b++) {
        const Ee = c[b];
        if (ue >= Ae) {
          he(Ee, E, N, !0);
          continue;
        }
        let je;
        if (Ee.key != null)
          je = J.get(Ee.key);
        else
          for (te = W; te <= C; te++)
            if (Bt[te - W] === 0 && Wt(Ee, d[te])) {
              je = te;
              break;
            }
        je === void 0 ? he(Ee, E, N, !0) : (Bt[je - W] = b + 1, je >= mr ? mr = je : Ct = !0, S(
          Ee,
          d[je],
          m,
          null,
          E,
          N,
          D,
          v,
          O
        ), ue++);
      }
      const gr = Ct ? Hc(Bt) : It;
      for (te = gr.length - 1, b = Ae - 1; b >= 0; b--) {
        const Ee = W + b, je = d[Ee], _r = Ee + 1 < V ? d[Ee + 1].el : _;
        Bt[b] === 0 ? S(
          null,
          je,
          m,
          _r,
          E,
          N,
          D,
          v,
          O
        ) : Ct && (te < 0 || b !== gr[te] ? Ce(je, m, _r, 2) : te--);
      }
    }
  }, Ce = (c, d, m, _, E = null) => {
    const { el: N, type: D, transition: v, children: O, shapeFlag: b } = c;
    if (b & 6) {
      Ce(c.component.subTree, d, m, _);
      return;
    }
    if (b & 128) {
      c.suspense.move(d, m, _);
      return;
    }
    if (b & 64) {
      D.move(c, d, m, St);
      return;
    }
    if (D === we) {
      o(N, d, m);
      for (let T = 0; T < O.length; T++)
        Ce(O[T], d, m, _);
      o(c.anchor, d, m);
      return;
    }
    if (D === An) {
      K(c, d, m);
      return;
    }
    if (_ !== 2 && b & 1 && v)
      if (_ === 0)
        v.beforeEnter(N), o(N, d, m), ve(() => v.enter(N), E);
      else {
        const { leave: T, delayLeave: C, afterLeave: R } = v, W = () => o(N, d, m), J = () => {
          T(N, () => {
            W(), R && R();
          });
        };
        C ? C(N, W, J) : J();
      }
    else
      o(N, d, m);
  }, he = (c, d, m, _ = !1, E = !1) => {
    const {
      type: N,
      props: D,
      ref: v,
      children: O,
      dynamicChildren: b,
      shapeFlag: V,
      patchFlag: T,
      dirs: C
    } = c;
    if (v != null && Po(v, null, m, c, !0), V & 256) {
      d.ctx.deactivate(c);
      return;
    }
    const R = V & 1 && C, W = !Tn(c);
    let J;
    if (W && (J = D && D.onVnodeBeforeUnmount) && Le(J, d, c), V & 6)
      xs(c.component, m, _);
    else {
      if (V & 128) {
        c.suspense.unmount(m, _);
        return;
      }
      R && dt(c, null, d, "beforeUnmount"), V & 64 ? c.type.remove(
        c,
        d,
        m,
        E,
        St,
        _
      ) : b && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (N !== we || T > 0 && T & 64) ? Ke(
        b,
        d,
        m,
        !1,
        !0
      ) : (N === we && T & 384 || !E && V & 16) && Ke(O, d, m), _ && se(c);
    }
    (W && (J = D && D.onVnodeUnmounted) || R) && ve(() => {
      J && Le(J, d, c), R && dt(c, null, d, "unmounted");
    }, m);
  }, se = (c) => {
    const { type: d, el: m, anchor: _, transition: E } = c;
    if (d === we) {
      p.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && E && !E.persisted ? c.children.forEach((D) => {
        D.type === xe ? r(D.el) : se(D);
      }) : Re(m, _);
      return;
    }
    if (d === An) {
      k(c);
      return;
    }
    const N = () => {
      r(m), E && !E.persisted && E.afterLeave && E.afterLeave();
    };
    if (c.shapeFlag & 1 && E && !E.persisted) {
      const { leave: D, delayLeave: v } = E, O = () => D(m, N);
      v ? v(c.el, N, O) : O();
    } else
      N();
  }, Re = (c, d) => {
    let m;
    for (; c !== d; )
      m = g(c), r(c), c = m;
    r(d);
  }, xs = (c, d, m) => {
    p.NODE_ENV !== "production" && c.type.__hmrId && Pl(c);
    const { bum: _, scope: E, update: N, subTree: D, um: v } = c;
    _ && $t(_), E.stop(), N && (N.active = !1, he(D, c, d, m)), v && ve(v, d), ve(() => {
      c.isUnmounted = !0;
    }, d), d && d.pendingBranch && !d.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === d.pendingId && (d.deps--, d.deps === 0 && d.resolve()), p.NODE_ENV !== "production" && Hl(c);
  }, Ke = (c, d, m, _ = !1, E = !1, N = 0) => {
    for (let D = N; D < c.length; D++)
      he(c[D], d, m, _, E);
  }, _n = (c) => c.shapeFlag & 6 ? _n(c.component.subTree) : c.shapeFlag & 128 ? c.suspense.next() : g(c.anchor || c.el);
  let lo = !1;
  const hr = (c, d, m) => {
    c == null ? d._vnode && he(d._vnode, null, null, !0) : S(
      d._vnode || null,
      c,
      d,
      null,
      null,
      null,
      m
    ), lo || (lo = !0, xr(), Ii(), lo = !1), d._vnode = c;
  }, St = {
    p: S,
    um: he,
    m: Ce,
    r: se,
    mt: be,
    mc: re,
    pc: pe,
    pbc: Z,
    n: _n,
    o: e
  };
  let co, uo;
  return t && ([co, uo] = t(
    St
  )), {
    render: hr,
    hydrate: co,
    createApp: wc(hr, co)
  };
}
function mo({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function pt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Uc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Fn(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (F(o) && F(r))
    for (let i = 0; i < o.length; i++) {
      const s = o[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = nt(r[i]), l.el = s.el), n || Fn(s, l)), l.type === hn && (l.el = s.el), p.NODE_ENV !== "production" && l.type === xe && !l.el && (l.el = s.el);
    }
}
function Hc(e) {
  const t = e.slice(), n = [0];
  let o, r, i, s, l;
  const u = e.length;
  for (o = 0; o < u; o++) {
    const f = e[o];
    if (f !== 0) {
      if (r = n[n.length - 1], e[r] < f) {
        t[o] = r, n.push(o);
        continue;
      }
      for (i = 0, s = n.length - 1; i < s; )
        l = i + s >> 1, e[n[l]] < f ? i = l + 1 : s = l;
      f < e[n[i]] && (i > 0 && (t[o] = n[i - 1]), n[i] = o);
    }
  }
  for (i = n.length, s = n[i - 1]; i-- > 0; )
    n[i] = s, s = t[s];
  return n;
}
function rs(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : rs(t);
}
const kc = (e) => e.__isTeleport, we = Symbol.for("v-fgt"), hn = Symbol.for("v-txt"), xe = Symbol.for("v-cmt"), An = Symbol.for("v-stc"), en = [];
let Ie = null;
function Ve(e = !1) {
  en.push(Ie = e ? null : []);
}
function Bc() {
  en.pop(), Ie = en[en.length - 1] || null;
}
let ln = 1;
function Lr(e) {
  ln += e;
}
function is(e) {
  return e.dynamicChildren = ln > 0 ? Ie || It : null, Bc(), ln > 0 && Ie && Ie.push(e), e;
}
function $e(e, t, n, o, r, i) {
  return is(
    ae(
      e,
      t,
      n,
      o,
      r,
      i,
      !0
    )
  );
}
function Kc(e, t, n, o, r) {
  return is(
    Ne(
      e,
      t,
      n,
      o,
      r,
      !0
    )
  );
}
function ar(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Wt(e, t) {
  return p.NODE_ENV !== "production" && t.shapeFlag & 6 && Ft.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const Wc = (...e) => ls(
  ...e
), eo = "__vInternal", ss = ({ key: e }) => e ?? null, Pn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? oe(e) || ie(e) || P(e) ? { i: _e, r: e, k: t, f: !!n } : e : null);
function ae(e, t = null, n = null, o = 0, r = null, i = e === we ? 0 : 1, s = !1, l = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ss(t),
    ref: t && Pn(t),
    scopeId: ki,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: _e
  };
  return l ? (dr(u, n), i & 128 && e.normalize(u)) : n && (u.shapeFlag |= oe(n) ? 8 : 16), p.NODE_ENV !== "production" && u.key !== u.key && w("VNode created with invalid key (NaN). VNode type:", u.type), ln > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  Ie && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && Ie.push(u), u;
}
const Ne = p.NODE_ENV !== "production" ? Wc : ls;
function ls(e, t = null, n = null, o = 0, r = null, i = !1) {
  if ((!e || e === Xl) && (p.NODE_ENV !== "production" && !e && w(`Invalid vnode type when creating vnode: ${e}.`), e = xe), ar(e)) {
    const l = ut(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && dr(l, n), ln > 0 && !i && Ie && (l.shapeFlag & 6 ? Ie[Ie.indexOf(e)] = l : Ie.push(l)), l.patchFlag |= -2, l;
  }
  if (ps(e) && (e = e.__vccOpts), t) {
    t = qc(t);
    let { class: l, style: u } = t;
    l && !oe(l) && (t.class = Ut(l)), Y(u) && (Do(u) && !F(u) && (u = ne({}, u)), t.style = Wo(u));
  }
  const s = oe(e) ? 1 : Zl(e) ? 128 : kc(e) ? 64 : Y(e) ? 4 : P(e) ? 2 : 0;
  return p.NODE_ENV !== "production" && s & 4 && Do(e) && (e = L(e), w(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), ae(
    e,
    t,
    n,
    o,
    r,
    s,
    i,
    !0
  );
}
function qc(e) {
  return e ? Do(e) || eo in e ? ne({}, e) : e : null;
}
function ut(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: i, children: s } = e, l = t ? Jc(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && ss(l),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? F(r) ? r.concat(Pn(t)) : [r, Pn(t)] : Pn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: p.NODE_ENV !== "production" && i === -1 && F(s) ? s.map(cs) : s,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== we ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && ut(e.ssContent),
    ssFallback: e.ssFallback && ut(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function cs(e) {
  const t = ut(e);
  return F(e.children) && (t.children = e.children.map(cs)), t;
}
function Gc(e = " ", t = 0) {
  return Ne(hn, null, e, t);
}
function zc(e = "", t = !1) {
  return t ? (Ve(), Kc(xe, null, e)) : Ne(xe, null, e);
}
function Pe(e) {
  return e == null || typeof e == "boolean" ? Ne(xe) : F(e) ? Ne(
    we,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? nt(e) : Ne(hn, null, String(e));
}
function nt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ut(e);
}
function dr(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (F(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), dr(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(eo in t) ? t._ctx = _e : r === 3 && _e && (_e.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    P(t) ? (t = { default: t, _ctx: _e }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Gc(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Jc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = Ut([t.class, o.class]));
      else if (r === "style")
        t.style = Wo([t.style, o.style]);
      else if (un(r)) {
        const i = t[r], s = o[r];
        s && i !== s && !(F(i) && i.includes(s)) && (t[r] = i ? [].concat(i, s) : s);
      } else
        r !== "" && (t[r] = o[r]);
  }
  return t;
}
function Le(e, t, n, o = null) {
  Me(e, t, 7, [
    n,
    o
  ]);
}
const Yc = Xi();
let Xc = 0;
function Zc(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || Yc, i = {
    uid: Xc++,
    vnode: e,
    type: o,
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
    scope: new Ks(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Qi(o, r),
    emitsOptions: Hi(o, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: X,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: X,
    data: X,
    props: X,
    attrs: X,
    slots: X,
    refs: X,
    setupState: X,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
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
  return p.NODE_ENV !== "production" ? i.ctx = hc(i) : i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Wl.bind(null, i), e.ce && e.ce(i), i;
}
let fe = null;
const us = () => fe || _e;
let Bn, Io;
{
  const e = Ko(), t = (n, o) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(o), (i) => {
      r.length > 1 ? r.forEach((s) => s(i)) : r[0](i);
    };
  };
  Bn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => fe = n
  ), Io = t(
    "__VUE_SSR_SETTERS__",
    (n) => to = n
  );
}
const mn = (e) => {
  const t = fe;
  return Bn(e), e.scope.on(), () => {
    e.scope.off(), Bn(t);
  };
}, Ur = () => {
  fe && fe.scope.off(), Bn(null);
}, Qc = /* @__PURE__ */ Xe("slot,component");
function Mo(e, { isNativeTag: t }) {
  (Qc(e) || t(e)) && w(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function fs(e) {
  return e.vnode.shapeFlag & 4;
}
let to = !1;
function eu(e, t = !1) {
  t && Io(t);
  const { props: n, children: o } = e.vnode, r = fs(e);
  xc(e, n, r, t), Ic(e, o);
  const i = r ? tu(e, t) : void 0;
  return t && Io(!1), i;
}
function tu(e, t) {
  var n;
  const o = e.type;
  if (p.NODE_ENV !== "production") {
    if (o.name && Mo(o.name, e.appContext.config), o.components) {
      const i = Object.keys(o.components);
      for (let s = 0; s < i.length; s++)
        Mo(i[s], e.appContext.config);
    }
    if (o.directives) {
      const i = Object.keys(o.directives);
      for (let s = 0; s < i.length; s++)
        qi(i[s]);
    }
    o.compilerOptions && nu() && w(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Vi(new Proxy(e.ctx, Ji)), p.NODE_ENV !== "production" && mc(e);
  const { setup: r } = o;
  if (r) {
    const i = e.setupContext = r.length > 1 ? ru(e) : null, s = mn(e);
    ft();
    const l = ze(
      r,
      e,
      0,
      [
        p.NODE_ENV !== "production" ? Pt(e.props) : e.props,
        i
      ]
    );
    if (at(), s(), Ho(l)) {
      if (l.then(Ur, Ur), t)
        return l.then((u) => {
          Hr(e, u, t);
        }).catch((u) => {
          an(u, e, 0);
        });
      if (e.asyncDep = l, p.NODE_ENV !== "production" && !e.suspense) {
        const u = (n = o.name) != null ? n : "Anonymous";
        w(
          `Component <${u}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Hr(e, l, t);
  } else
    as(e, t);
}
function Hr(e, t, n) {
  P(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Y(t) ? (p.NODE_ENV !== "production" && ar(t) && w(
    "setup() should not return VNodes directly - return a render function instead."
  ), p.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Ti(t), p.NODE_ENV !== "production" && gc(e)) : p.NODE_ENV !== "production" && t !== void 0 && w(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), as(e, n);
}
let Ro;
const nu = () => !Ro;
function as(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && Ro && !o.render) {
      const r = o.template || ur(e).template;
      if (r) {
        p.NODE_ENV !== "production" && We(e, "compile");
        const { isCustomElement: i, compilerOptions: s } = e.appContext.config, { delimiters: l, compilerOptions: u } = o, f = ne(
          ne(
            {
              isCustomElement: i,
              delimiters: l
            },
            s
          ),
          u
        );
        o.render = Ro(r, f), p.NODE_ENV !== "production" && qe(e, "compile");
      }
    }
    e.render = o.render || le;
  }
  {
    const r = mn(e);
    ft();
    try {
      Ec(e);
    } finally {
      at(), r();
    }
  }
  p.NODE_ENV !== "production" && !o.render && e.render === le && !t && (o.template ? w(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : w("Component is missing template or render function."));
}
function kr(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    p.NODE_ENV !== "production" ? {
      get(t, n) {
        return Un(), de(e, "get", "$attrs"), t[n];
      },
      set() {
        return w("setupContext.attrs is readonly."), !1;
      },
      deleteProperty() {
        return w("setupContext.attrs is readonly."), !1;
      }
    } : {
      get(t, n) {
        return de(e, "get", "$attrs"), t[n];
      }
    }
  ));
}
function ou(e) {
  return e.slotsProxy || (e.slotsProxy = new Proxy(e.slots, {
    get(t, n) {
      return de(e, "get", "$slots"), t[n];
    }
  }));
}
function ru(e) {
  const t = (n) => {
    if (p.NODE_ENV !== "production" && (e.exposed && w("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (F(n) ? o = "array" : ie(n) && (o = "ref")), o !== "object" && w(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  return p.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return kr(e);
    },
    get slots() {
      return ou(e);
    },
    get emit() {
      return (n, ...o) => e.emit(n, ...o);
    },
    expose: t
  }) : {
    get attrs() {
      return kr(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function no(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Ti(Vi(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in Ot)
          return Ot[n](e);
      },
      has(t, n) {
        return n in t || n in Ot;
      }
    }));
}
const iu = /(?:^|[-_])(\w)/g, su = (e) => e.replace(iu, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function ds(e, t = !0) {
  return P(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function oo(e, t, n = !1) {
  let o = ds(t);
  if (!o && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && e && e.parent) {
    const r = (i) => {
      for (const s in i)
        if (i[s] === t)
          return s;
    };
    o = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return o ? su(o) : n ? "App" : "Anonymous";
}
function ps(e) {
  return P(e) && "__vccOpts" in e;
}
const ro = (e, t) => {
  const n = ml(e, t, to);
  if (p.NODE_ENV !== "production") {
    const o = us();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function lu() {
  if (p.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, r = {
    header(a) {
      return Y(a) ? a.__isVue ? ["div", e, "VueInstance"] : ie(a) ? [
        "div",
        {},
        ["span", e, h(a)],
        "<",
        l(a.value),
        ">"
      ] : yt(a) ? [
        "div",
        {},
        ["span", e, bt(a) ? "ShallowReactive" : "Reactive"],
        "<",
        l(a),
        `>${ct(a) ? " (readonly)" : ""}`
      ] : ct(a) ? [
        "div",
        {},
        ["span", e, bt(a) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(a),
        ">"
      ] : null : null;
    },
    hasBody(a) {
      return a && a.__isVue;
    },
    body(a) {
      if (a && a.__isVue)
        return [
          "div",
          {},
          ...i(a.$)
        ];
    }
  };
  function i(a) {
    const g = [];
    a.type.props && a.props && g.push(s("props", L(a.props))), a.setupState !== X && g.push(s("setup", a.setupState)), a.data !== X && g.push(s("data", L(a.data)));
    const y = u(a, "computed");
    y && g.push(s("computed", y));
    const x = u(a, "inject");
    return x && g.push(s("injected", x)), g.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: a }]
    ]), g;
  }
  function s(a, g) {
    return g = ne({}, g), Object.keys(g).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        a
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(g).map((y) => [
          "div",
          {},
          ["span", o, y + ": "],
          l(g[y], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(a, g = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", o, a] : Y(a) ? ["object", { object: g ? L(a) : a }] : ["span", n, String(a)];
  }
  function u(a, g) {
    const y = a.type;
    if (P(y))
      return;
    const x = {};
    for (const S in a.ctx)
      f(y, S, g) && (x[S] = a.ctx[S]);
    return x;
  }
  function f(a, g, y) {
    const x = a[y];
    if (F(x) && x.includes(g) || Y(x) && g in x || a.extends && f(a.extends, g, y) || a.mixins && a.mixins.some((S) => f(S, g, y)))
      return !0;
  }
  function h(a) {
    return bt(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const Br = "3.4.21", wt = p.NODE_ENV !== "production" ? w : le;
var jt = {};
const cu = "http://www.w3.org/2000/svg", uu = "http://www.w3.org/1998/Math/MathML", ot = typeof document < "u" ? document : null, Kr = ot && /* @__PURE__ */ ot.createElement("template"), fu = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t === "svg" ? ot.createElementNS(cu, e) : t === "mathml" ? ot.createElementNS(uu, e) : ot.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => ot.createTextNode(e),
  createComment: (e) => ot.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ot.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, r, i) {
    const s = n ? n.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      Kr.innerHTML = o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e;
      const l = Kr.content;
      if (o === "svg" || o === "mathml") {
        const u = l.firstChild;
        for (; u.firstChild; )
          l.appendChild(u.firstChild);
        l.removeChild(u);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, au = Symbol("_vtc");
function du(e, t, n) {
  const o = e[au];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Wr = Symbol("_vod"), pu = Symbol("_vsh"), hu = Symbol(jt.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), mu = /(^|;)\s*display\s*:/;
function gu(e, t, n) {
  const o = e.style, r = oe(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (oe(t))
        for (const s of t.split(";")) {
          const l = s.slice(0, s.indexOf(":")).trim();
          n[l] == null && In(o, l, "");
        }
      else
        for (const s in t)
          n[s] == null && In(o, s, "");
    for (const s in n)
      s === "display" && (i = !0), In(o, s, n[s]);
  } else if (r) {
    if (t !== n) {
      const s = o[hu];
      s && (n += ";" + s), o.cssText = n, i = mu.test(n);
    }
  } else
    t && e.removeAttribute("style");
  Wr in e && (e[Wr] = i ? o.display : "", e[pu] && (o.display = "none"));
}
const _u = /[^\\];\s*$/, qr = /\s*!important$/;
function In(e, t, n) {
  if (F(n))
    n.forEach((o) => In(e, t, o));
  else if (n == null && (n = ""), jt.NODE_ENV !== "production" && _u.test(n) && wt(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = Eu(e, t);
    qr.test(n) ? e.setProperty(
      Je(o),
      n.replace(qr, ""),
      "important"
    ) : e[o] = n;
  }
}
const Gr = ["Webkit", "Moz", "ms"], go = {};
function Eu(e, t) {
  const n = go[t];
  if (n)
    return n;
  let o = Rt(t);
  if (o !== "filter" && o in e)
    return go[t] = o;
  o = Gn(o);
  for (let r = 0; r < Gr.length; r++) {
    const i = Gr[r] + o;
    if (i in e)
      return go[t] = i;
  }
  return t;
}
const zr = "http://www.w3.org/1999/xlink";
function yu(e, t, n, o, r) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(zr, t.slice(6, t.length)) : e.setAttributeNS(zr, t, n);
  else {
    const i = Bs(t);
    n == null || i && !ai(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : n);
  }
}
function bu(e, t, n, o, r, i, s) {
  if (t === "innerHTML" || t === "textContent") {
    o && s(o, r, i), e[t] = n ?? "";
    return;
  }
  const l = e.tagName;
  if (t === "value" && l !== "PROGRESS" && // custom elements may use _value internally
  !l.includes("-")) {
    const f = l === "OPTION" ? e.getAttribute("value") || "" : e.value, h = n ?? "";
    (f !== h || !("_value" in e)) && (e.value = h), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let u = !1;
  if (n === "" || n == null) {
    const f = typeof e[t];
    f === "boolean" ? n = ai(n) : n == null && f === "string" ? (n = "", u = !0) : f === "number" && (n = 0, u = !0);
  }
  try {
    e[t] = n;
  } catch (f) {
    jt.NODE_ENV !== "production" && !u && wt(
      `Failed setting prop "${t}" on <${l.toLowerCase()}>: value ${n} is invalid.`,
      f
    );
  }
  u && e.removeAttribute(t);
}
function At(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function vu(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const Jr = Symbol("_vei");
function Nu(e, t, n, o, r = null) {
  const i = e[Jr] || (e[Jr] = {}), s = i[t];
  if (o && s)
    s.value = o;
  else {
    const [l, u] = Ou(t);
    if (o) {
      const f = i[t] = xu(o, r);
      At(e, l, f, u);
    } else
      s && (vu(e, l, s, u), i[t] = void 0);
  }
}
const Yr = /(?:Once|Passive|Capture)$/;
function Ou(e) {
  let t;
  if (Yr.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Yr); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Je(e.slice(2)), t];
}
let _o = 0;
const wu = /* @__PURE__ */ Promise.resolve(), Du = () => _o || (wu.then(() => _o = 0), _o = Date.now());
function xu(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Me(
      Vu(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = Du(), n;
}
function Vu(e, t) {
  if (F(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (r) => !r._stopped && o && o(r));
  } else
    return t;
}
const Xr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Su = (e, t, n, o, r, i, s, l, u) => {
  const f = r === "svg";
  t === "class" ? du(e, o, f) : t === "style" ? gu(e, n, o) : un(t) ? Mn(t) || Nu(e, t, n, o, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Cu(e, t, o, f)) ? bu(
    e,
    t,
    o,
    i,
    s,
    l,
    u
  ) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), yu(e, t, o, f));
};
function Cu(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Xr(t) && P(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Xr(t) && oe(n) ? !1 : t in e;
}
const Zr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return F(t) ? (n) => $t(t, n) : t;
};
function Tu(e) {
  e.target.composing = !0;
}
function Qr(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Eo = Symbol("_assign"), hs = {
  created(e, { modifiers: { lazy: t, trim: n, number: o } }, r) {
    e[Eo] = Zr(r);
    const i = o || r.props && r.props.type === "number";
    At(e, t ? "change" : "input", (s) => {
      if (s.target.composing)
        return;
      let l = e.value;
      n && (l = l.trim()), i && (l = vo(l)), e[Eo](l);
    }), n && At(e, "change", () => {
      e.value = e.value.trim();
    }), t || (At(e, "compositionstart", Tu), At(e, "compositionend", Qr), At(e, "change", Qr));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: o, number: r } }, i) {
    if (e[Eo] = Zr(i), e.composing)
      return;
    const s = r || e.type === "number" ? vo(e.value) : e.value, l = t ?? "";
    s !== l && (document.activeElement === e && e.type !== "range" && (n || o && e.value.trim() === l) || (e.value = l));
  }
}, $u = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, ms = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), o = t.join(".");
  return n[o] || (n[o] = (r) => {
    if (!("key" in r))
      return;
    const i = Je(r.key);
    if (t.some((s) => s === i || $u[s] === i))
      return e(r);
  });
}, Fu = /* @__PURE__ */ ne({ patchProp: Su }, fu);
let ei;
function Au() {
  return ei || (ei = jc(Fu));
}
const Pu = (...e) => {
  const t = Au().createApp(...e);
  jt.NODE_ENV !== "production" && (Mu(t), Ru(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const r = ju(o);
    if (!r)
      return;
    const i = t._component;
    !P(i) && !i.render && !i.template && (i.template = r.innerHTML), r.innerHTML = "";
    const s = n(r, !1, Iu(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), s;
  }, t;
};
function Iu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Mu(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Ls(t) || Us(t) || Hs(t),
    writable: !1
  });
}
function Ru(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        wt(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return wt(o), n;
      },
      set() {
        wt(o);
      }
    });
  }
}
function ju(e) {
  if (oe(e)) {
    const t = document.querySelector(e);
    return jt.NODE_ENV !== "production" && !t && wt(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return jt.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && wt(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var Lu = {};
function Uu() {
  lu();
}
Lu.NODE_ENV !== "production" && Uu();
const gs = Symbol("log-event"), _s = Symbol("system-message-event"), Es = Symbol("chat-message-event"), ys = Symbol("request-user-event"), bs = Symbol("request-selected-users-event"), Hu = "user-login";
function pr(e) {
  return qo() ? (qs(e), !0) : !1;
}
function yo() {
  const e = /* @__PURE__ */ new Set(), t = (r) => {
    e.delete(r);
  };
  return {
    on: (r) => {
      e.add(r);
      const i = () => t(r);
      return pr(i), {
        off: i
      };
    },
    off: t,
    trigger: (...r) => Promise.all(Array.from(e).map((i) => i(...r)))
  };
}
function De(e) {
  return typeof e == "function" ? e() : fn(e);
}
const vs = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ku = Object.prototype.toString, Bu = (e) => ku.call(e) === "[object Object]", Ns = () => {
};
function Ku(e, t) {
  function n(...o) {
    return new Promise((r, i) => {
      Promise.resolve(e(() => t.apply(this, o), { fn: t, thisArg: this, args: o })).then(r).catch(i);
    });
  }
  return n;
}
const Os = (e) => e();
function Wu(e = Os) {
  const t = ge(!0);
  function n() {
    t.value = !1;
  }
  function o() {
    t.value = !0;
  }
  const r = (...i) => {
    t.value && e(...i);
  };
  return { isActive: Dt(t), pause: n, resume: o, eventFilter: r };
}
function ti(e, t = !1, n = "Timeout") {
  return new Promise((o, r) => {
    setTimeout(t ? () => r(n) : o, e);
  });
}
function qu(e, ...t) {
  return t.some((n) => n in e);
}
function Gu(e) {
  return e || us();
}
function bo(...e) {
  if (e.length !== 1)
    return Nl(...e);
  const t = e[0];
  return typeof t == "function" ? Dt(yl(() => ({ get: t, set: Ns }))) : ge(t);
}
function zu(e, t, n = {}) {
  const {
    eventFilter: o = Os,
    ...r
  } = n;
  return Te(
    e,
    Ku(
      o,
      t
    ),
    r
  );
}
function Ju(e, t, n = {}) {
  const {
    eventFilter: o,
    ...r
  } = n, { eventFilter: i, pause: s, resume: l, isActive: u } = Wu(o);
  return { stop: zu(
    e,
    t,
    {
      ...r,
      eventFilter: i
    }
  ), pause: s, resume: l, isActive: u };
}
function Yu(e, t = !0, n) {
  Gu() ? kt(e, n) : t ? e() : nr(e);
}
function jo(e, t = !1) {
  function n(a, { flush: g = "sync", deep: y = !1, timeout: x, throwOnTimeout: S } = {}) {
    let $ = null;
    const G = [new Promise((H) => {
      $ = Te(
        e,
        (K) => {
          a(K) !== t && ($?.(), H(K));
        },
        {
          flush: g,
          deep: y,
          immediate: !0
        }
      );
    })];
    return x != null && G.push(
      ti(x, S).then(() => De(e)).finally(() => $?.())
    ), Promise.race(G);
  }
  function o(a, g) {
    if (!ie(a))
      return n((K) => K === a, g);
    const { flush: y = "sync", deep: x = !1, timeout: S, throwOnTimeout: $ } = g ?? {};
    let U = null;
    const H = [new Promise((K) => {
      U = Te(
        [e, a],
        ([k, Q]) => {
          t !== (k === Q) && (U?.(), K(k));
        },
        {
          flush: y,
          deep: x,
          immediate: !0
        }
      );
    })];
    return S != null && H.push(
      ti(S, $).then(() => De(e)).finally(() => (U?.(), De(e)))
    ), Promise.race(H);
  }
  function r(a) {
    return n((g) => !!g, a);
  }
  function i(a) {
    return o(null, a);
  }
  function s(a) {
    return o(void 0, a);
  }
  function l(a) {
    return n(Number.isNaN, a);
  }
  function u(a, g) {
    return n((y) => {
      const x = Array.from(y);
      return x.includes(a) || x.includes(De(a));
    }, g);
  }
  function f(a) {
    return h(1, a);
  }
  function h(a = 1, g) {
    let y = -1;
    return n(() => (y += 1, y >= a), g);
  }
  return Array.isArray(De(e)) ? {
    toMatch: n,
    toContains: u,
    changed: f,
    changedTimes: h,
    get not() {
      return jo(e, !t);
    }
  } : {
    toMatch: n,
    toBe: o,
    toBeTruthy: r,
    toBeNull: i,
    toBeNaN: l,
    toBeUndefined: s,
    changed: f,
    changedTimes: h,
    get not() {
      return jo(e, !t);
    }
  };
}
function Xu(e) {
  return jo(e);
}
function Zu(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, r = ge(!1);
  let i = null;
  function s() {
    i && (clearTimeout(i), i = null);
  }
  function l() {
    r.value = !1, s();
  }
  function u(...f) {
    s(), r.value = !0, i = setTimeout(() => {
      r.value = !1, i = null, e(...f);
    }, De(t));
  }
  return o && (r.value = !0, vs && u()), pr(l), {
    isPending: Dt(r),
    start: u,
    stop: l
  };
}
function Qu(e) {
  var t;
  const n = De(e);
  return (t = n?.$el) != null ? t : n;
}
const cn = vs ? window : void 0;
function ni(...e) {
  let t, n, o, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, o, r] = e, t = cn) : [t, n, o, r] = e, !t)
    return Ns;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const i = [], s = () => {
    i.forEach((h) => h()), i.length = 0;
  }, l = (h, a, g, y) => (h.addEventListener(a, g, y), () => h.removeEventListener(a, g, y)), u = Te(
    () => [Qu(t), De(r)],
    ([h, a]) => {
      if (s(), !h)
        return;
      const g = Bu(a) ? { ...a } : a;
      i.push(
        ...n.flatMap((y) => o.map((x) => l(h, y, x, g)))
      );
    },
    { immediate: !0, flush: "post" }
  ), f = () => {
    u(), s();
  };
  return pr(f), f;
}
const wn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Dn = "__vueuse_ssr_handlers__", ef = /* @__PURE__ */ tf();
function tf() {
  return Dn in wn || (wn[Dn] = wn[Dn] || {}), wn[Dn];
}
function nf(e, t) {
  return ef[e] || t;
}
function of(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const rf = {
  boolean: {
    read: (e) => e === "true",
    write: (e) => String(e)
  },
  object: {
    read: (e) => JSON.parse(e),
    write: (e) => JSON.stringify(e)
  },
  number: {
    read: (e) => Number.parseFloat(e),
    write: (e) => String(e)
  },
  any: {
    read: (e) => e,
    write: (e) => String(e)
  },
  string: {
    read: (e) => e,
    write: (e) => String(e)
  },
  map: {
    read: (e) => new Map(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e.entries()))
  },
  set: {
    read: (e) => new Set(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e))
  },
  date: {
    read: (e) => new Date(e),
    write: (e) => e.toISOString()
  }
}, oi = "vueuse-storage";
function sf(e, t, n, o = {}) {
  var r;
  const {
    flush: i = "pre",
    deep: s = !0,
    listenToStorageChanges: l = !0,
    writeDefaults: u = !0,
    mergeDefaults: f = !1,
    shallow: h,
    window: a = cn,
    eventFilter: g,
    onError: y = (j) => {
      console.error(j);
    },
    initOnMounted: x
  } = o, S = (h ? Vn : ge)(typeof t == "function" ? t() : t);
  if (!n)
    try {
      n = nf("getDefaultStorage", () => {
        var j;
        return (j = cn) == null ? void 0 : j.localStorage;
      })();
    } catch (j) {
      y(j);
    }
  if (!n)
    return S;
  const $ = De(t), U = of($), G = (r = o.serializer) != null ? r : rf[U], { pause: H, resume: K } = Ju(
    S,
    () => Q(S.value),
    { flush: i, deep: s, eventFilter: g }
  );
  a && l && Yu(() => {
    ni(a, "storage", q), ni(a, oi, re), x && q();
  }), x || q();
  function k(j, Z) {
    a && a.dispatchEvent(new CustomEvent(oi, {
      detail: {
        key: e,
        oldValue: j,
        newValue: Z,
        storageArea: n
      }
    }));
  }
  function Q(j) {
    try {
      const Z = n.getItem(e);
      if (j == null)
        k(Z, null), n.removeItem(e);
      else {
        const ee = G.write(j);
        Z !== ee && (n.setItem(e, ee), k(Z, ee));
      }
    } catch (Z) {
      y(Z);
    }
  }
  function A(j) {
    const Z = j ? j.newValue : n.getItem(e);
    if (Z == null)
      return u && $ != null && n.setItem(e, G.write($)), $;
    if (!j && f) {
      const ee = G.read(Z);
      return typeof f == "function" ? f(ee, $) : U === "object" && !Array.isArray(ee) ? { ...$, ...ee } : ee;
    } else
      return typeof Z != "string" ? Z : G.read(Z);
  }
  function q(j) {
    if (!(j && j.storageArea !== n)) {
      if (j && j.key == null) {
        S.value = $;
        return;
      }
      if (!(j && j.key !== e)) {
        H();
        try {
          j?.newValue !== G.write(S.value) && (S.value = A(j));
        } catch (Z) {
          y(Z);
        } finally {
          j ? nr(K) : K();
        }
      }
    }
  }
  function re(j) {
    q(j.detail);
  }
  return S;
}
const qt = /* @__PURE__ */ new Map();
function Be(e) {
  const t = qo();
  function n(l) {
    var u;
    const f = qt.get(e) || /* @__PURE__ */ new Set();
    f.add(l), qt.set(e, f);
    const h = () => r(l);
    return (u = t?.cleanups) == null || u.push(h), h;
  }
  function o(l) {
    function u(...f) {
      r(u), l(...f);
    }
    return n(u);
  }
  function r(l) {
    const u = qt.get(e);
    u && (u.delete(l), u.size || i());
  }
  function i() {
    qt.delete(e);
  }
  function s(l, u) {
    var f;
    (f = qt.get(e)) == null || f.forEach((h) => h(l, u));
  }
  return { on: n, once: o, off: r, emit: s, reset: i };
}
const lf = {
  json: "application/json",
  text: "text/plain"
};
function Kn(e) {
  return e && qu(e, "immediate", "refetch", "initialData", "timeout", "beforeFetch", "afterFetch", "onFetchError", "fetch", "updateDataOnError");
}
function cf(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function tn(e) {
  return typeof Headers < "u" && e instanceof Headers ? Object.fromEntries(e.entries()) : e;
}
function Tt(e, ...t) {
  return e === "overwrite" ? async (n) => {
    const o = t[t.length - 1];
    return o ? { ...n, ...await o(n) } : n;
  } : async (n) => {
    for (const o of t)
      o && (n = { ...n, ...await o(n) });
    return n;
  };
}
function uf(e = {}) {
  const t = e.combination || "chain", n = e.options || {}, o = e.fetchOptions || {};
  function r(i, ...s) {
    const l = ro(() => {
      const h = De(e.baseUrl), a = De(i);
      return h && !cf(a) ? af(h, a) : a;
    });
    let u = n, f = o;
    return s.length > 0 && (Kn(s[0]) ? u = {
      ...u,
      ...s[0],
      beforeFetch: Tt(t, n.beforeFetch, s[0].beforeFetch),
      afterFetch: Tt(t, n.afterFetch, s[0].afterFetch),
      onFetchError: Tt(t, n.onFetchError, s[0].onFetchError)
    } : f = {
      ...f,
      ...s[0],
      headers: {
        ...tn(f.headers) || {},
        ...tn(s[0].headers) || {}
      }
    }), s.length > 1 && Kn(s[1]) && (u = {
      ...u,
      ...s[1],
      beforeFetch: Tt(t, n.beforeFetch, s[1].beforeFetch),
      afterFetch: Tt(t, n.afterFetch, s[1].afterFetch),
      onFetchError: Tt(t, n.onFetchError, s[1].onFetchError)
    }), ff(l, f, u);
  }
  return r;
}
function ff(e, ...t) {
  var n;
  const o = typeof AbortController == "function";
  let r = {}, i = {
    immediate: !0,
    refetch: !1,
    timeout: 0,
    updateDataOnError: !1
  };
  const s = {
    method: "GET",
    type: "text",
    payload: void 0
  };
  t.length > 0 && (Kn(t[0]) ? i = { ...i, ...t[0] } : r = t[0]), t.length > 1 && Kn(t[1]) && (i = { ...i, ...t[1] });
  const {
    fetch: l = (n = cn) == null ? void 0 : n.fetch,
    initialData: u,
    timeout: f
  } = i, h = yo(), a = yo(), g = yo(), y = ge(!1), x = ge(!1), S = ge(!1), $ = ge(null), U = Vn(null), G = Vn(null), H = Vn(u || null), K = ro(() => o && x.value);
  let k, Q;
  const A = () => {
    o && (k?.abort(), k = new AbortController(), k.signal.onabort = () => S.value = !0, r = {
      ...r,
      signal: k.signal
    });
  }, q = (z) => {
    x.value = z, y.value = !z;
  };
  f && (Q = Zu(A, f, { immediate: !1 }));
  let re = 0;
  const j = async (z = !1) => {
    var I, M;
    A(), q(!0), G.value = null, $.value = null, S.value = !1, re += 1;
    const pe = re, Fe = {
      method: s.method,
      headers: {}
    };
    if (s.payload) {
      const se = tn(Fe.headers), Re = De(s.payload);
      !s.payloadType && Re && Object.getPrototypeOf(Re) === Object.prototype && !(Re instanceof FormData) && (s.payloadType = "json"), s.payloadType && (se["Content-Type"] = (I = lf[s.payloadType]) != null ? I : s.payloadType), Fe.body = s.payloadType === "json" ? JSON.stringify(Re) : Re;
    }
    let Qe = !1;
    const Ce = {
      url: De(e),
      options: {
        ...Fe,
        ...r
      },
      cancel: () => {
        Qe = !0;
      }
    };
    if (i.beforeFetch && Object.assign(Ce, await i.beforeFetch(Ce)), Qe || !l)
      return q(!1), Promise.resolve(null);
    let he = null;
    return Q && Q.start(), l(
      Ce.url,
      {
        ...Fe,
        ...Ce.options,
        headers: {
          ...tn(Fe.headers),
          ...tn((M = Ce.options) == null ? void 0 : M.headers)
        }
      }
    ).then(async (se) => {
      if (U.value = se, $.value = se.status, he = await se.clone()[s.type](), !se.ok)
        throw H.value = u || null, new Error(se.statusText);
      return i.afterFetch && ({ data: he } = await i.afterFetch({
        data: he,
        response: se
      })), H.value = he, h.trigger(se), se;
    }).catch(async (se) => {
      let Re = se.message || se.name;
      if (i.onFetchError && ({ error: Re, data: he } = await i.onFetchError({
        data: he,
        error: se,
        response: U.value
      })), G.value = Re, i.updateDataOnError && (H.value = he), a.trigger(se), z)
        throw se;
      return null;
    }).finally(() => {
      pe === re && q(!1), Q && Q.stop(), g.trigger(null);
    });
  }, Z = bo(i.refetch);
  Te(
    [
      Z,
      bo(e)
    ],
    ([z]) => z && j(),
    { deep: !0 }
  );
  const ee = {
    isFinished: Dt(y),
    isFetching: Dt(x),
    statusCode: $,
    response: U,
    error: G,
    data: H,
    canAbort: K,
    aborted: S,
    abort: A,
    execute: j,
    onFetchResponse: h.on,
    onFetchError: a.on,
    onFetchFinally: g.on,
    // method
    get: Se("GET"),
    put: Se("PUT"),
    post: Se("POST"),
    delete: Se("DELETE"),
    patch: Se("PATCH"),
    head: Se("HEAD"),
    options: Se("OPTIONS"),
    // type
    json: be("json"),
    text: be("text"),
    blob: be("blob"),
    arrayBuffer: be("arrayBuffer"),
    formData: be("formData")
  };
  function Se(z) {
    return (I, M) => {
      if (!x.value)
        return s.method = z, s.payload = I, s.payloadType = M, ie(s.payload) && Te(
          [
            Z,
            bo(s.payload)
          ],
          ([pe]) => pe && j(),
          { deep: !0 }
        ), {
          ...ee,
          then(pe, Fe) {
            return Vt().then(pe, Fe);
          }
        };
    };
  }
  function Vt() {
    return new Promise((z, I) => {
      Xu(y).toBe(!0).then(() => z(ee)).catch((M) => I(M));
    });
  }
  function be(z) {
    return () => {
      if (!x.value)
        return s.type = z, {
          ...ee,
          then(I, M) {
            return Vt().then(I, M);
          }
        };
    };
  }
  return i.immediate && Promise.resolve().then(() => j()), {
    ...ee,
    then(z, I) {
      return Vt().then(z, I);
    }
  };
}
function af(e, t) {
  return !e.endsWith("/") && !t.startsWith("/") ? `${e}/${t}` : `${e}${t}`;
}
function df(e, t, n = {}) {
  const { window: o = cn } = n;
  return sf(e, t, o?.sessionStorage, n);
}
const pf = Be(gs), Gt = "app";
let hf = 1;
function io() {
  function e(s, l = Gt) {
    r(s, l, "info");
  }
  function t(s, l = Gt) {
    r(s, l, "warning");
  }
  function n(s, l = Gt) {
    r(s, l, "error");
  }
  function o(s, l = Gt) {
    if (s ?? !0)
      return;
    const u = typeof s == "string" ? s : s?.message ?? "Unspecified error";
    r(u, l, "error");
  }
  function r(s, l = Gt, u = "info", f = /* @__PURE__ */ new Date()) {
    const h = { id: ++hf, message: s, source: l, severity: u, created: f };
    pf.emit(h);
  }
  const i = ge();
  return Te(i, () => {
    o(i.value);
  }), {
    logInfo: e,
    logWarning: t,
    logError: n,
    logErrorObject: o,
    log: r,
    errorRef: i
  };
}
const nn = {
  baseUrl: ""
};
function mf(e = "GET", t) {
  const n = { "Content-Type": "application/json" };
  return nn.authToken != null && (n.Authorization = `Bearer ${nn.authToken}`), {
    baseUrl: nn.baseUrl,
    options: {
      onFetchError(o) {
        return { error: o.data?.detail };
      }
    },
    fetchOptions: {
      headers: n,
      method: e,
      body: t
    }
  };
}
function so() {
  function e(s) {
    Object.assign(nn, { ...nn, ...s });
  }
  async function t(s, l) {
    const u = { name: s }, f = ge(null);
    return await i("/users/login", "POST", u, f, l), f.value;
  }
  async function n(s, l) {
    await i(`/users/${s}`, "DELETE", null, null, l);
  }
  async function o(s, l) {
    await i("/users", "GET", void 0, s, l);
  }
  async function r(s, l) {
    await i("/messages", "POST", s, null, l);
  }
  async function i(s, l, u, f = null, h = null) {
    const a = u == null ? void 0 : JSON.stringify(u), g = uf(mf(l, a)), { data: y, error: x } = await g(s).json();
    f != null && (f.value = y.value), h != null && (h.value = x.value);
  }
  return {
    configureChatApi: e,
    login: t,
    logout: n,
    getUsers: o,
    sendMessage: r
  };
}
const ws = { id: 0, name: "", authToken: "" };
function gn() {
  return df(Hu, ws);
}
const gf = {
  key: 0,
  class: "overlay"
}, _f = {
  class: "pure-form login",
  onsubmit: "return false"
}, Ef = /* @__PURE__ */ Ht({
  __name: "LoginComponent",
  setup(e) {
    const t = gn(), { login: n } = so(), { errorRef: o } = io(), r = ge(""), i = ro(() => t.value.id == 0), s = async () => {
      const l = await n(r.value, o);
      if (l != null) {
        const u = { name: r.value, id: l.userId, authToken: l.token };
        t.value = u;
      }
    };
    return (l, u) => i.value ? (Ve(), $e("div", gf, [
      ae("form", _f, [
        Gi(ae("input", {
          type: "text",
          "onUpdate:modelValue": u[0] || (u[0] = (f) => r.value = f),
          placeholder: "user name",
          onKeydown: ms(s, ["enter"]),
          style: { width: "96%" }
        }, null, 544), [
          [hs, r.value]
        ]),
        ae("input", {
          type: "button",
          onClick: s,
          value: "login",
          class: "pure-button pure-button-primary"
        })
      ])
    ])) : zc("", !0);
  }
}), yf = { class: "message-form" }, bf = {
  class: "pure-form",
  onsubmit: "return false"
}, vf = /* @__PURE__ */ Ht({
  __name: "MessageFormComponent",
  setup(e) {
    const t = gn(), n = ge(""), { sendMessage: o } = so(), { errorRef: r, logError: i } = io(), s = Be(bs), l = (f) => {
      f.shiftKey || u();
    }, u = () => {
      if (n.value.length == 0)
        return;
      if (t.value.id == 0) {
        i("Login user unknown");
        return;
      }
      const f = { users: [] };
      s.emit(f);
      const h = f.users.map((g) => g.id);
      h.length > 0 && h.push(t.value.id);
      const a = {
        fromUserId: t.value.id,
        toUserIds: h,
        text: n.value
      };
      o(a, r), n.value = "";
    };
    return (f, h) => (Ve(), $e("div", yf, [
      ae("form", bf, [
        ae("div", null, [
          Gi(ae("textarea", {
            "onUpdate:modelValue": h[0] || (h[0] = (a) => n.value = a),
            onKeyup: ms(l, ["enter"]),
            style: { height: "100%", width: "100%", resize: "none" }
          }, null, 544), [
            [hs, n.value]
          ])
        ]),
        ae("div", null, [
          ae("input", {
            type: "button",
            onClick: u,
            value: "send",
            style: { width: "100%", height: "100%" }
          })
        ])
      ])
    ]));
  }
}), ri = (e) => e.toString().padStart(2, "0");
function Ds(e) {
  if (e == null)
    return "";
  const t = [e.getFullYear(), e.getMonth() + 1, e.getDay()], n = [e.getHours(), e.getMinutes(), e.getSeconds()];
  return t.map(ri).join("-") + " " + n.map(ri).join(":");
}
const Nf = { class: "messages" }, Of = { class: "header" }, wf = { class: "text" }, Df = /* @__PURE__ */ Ht({
  __name: "MessagesComponent",
  setup(e) {
    const t = gn(), n = ge([]), o = Be(Es), r = Be(ys), i = (s) => {
      const l = { userId: s.fromUserId };
      r.emit(l);
      const u = { ...s, fromUserName: l.user?.name ?? "", fromSelf: t.value.id == s.fromUserId };
      n.value.unshift(u);
    };
    return kt(() => {
      o.on(i);
    }), pn(() => {
      o.off(i);
    }), (s, l) => (Ve(), $e("div", Nf, [
      (Ve(!0), $e(we, null, lr(n.value, (u) => (Ve(), $e("div", {
        key: u.id,
        class: Ut({ "from-self": u.fromSelf })
      }, [
        ae("div", Of, it(u.fromUserName) + " " + it(fn(Ds)(u.created)), 1),
        ae("div", wf, it(u.text), 1)
      ], 2))), 128))
    ]));
  }
}), xf = { class: "users" }, Vf = { class: "logout" }, Sf = ["onClick"], Cf = /* @__PURE__ */ Ht({
  __name: "UsersComponent",
  setup(e) {
    const t = gn(), n = ge([]), { getUsers: o, logout: r } = so(), { errorRef: i } = io(), s = Be(ys), l = Be(bs), u = Be(_s), f = (x) => {
      x.user = n.value.find((S) => S.id == x.userId);
    }, h = (x) => {
      x.users = n.value.filter((S) => S.isSelected);
    }, a = (x) => {
      if (!x.messageType.startsWith("User"))
        return;
      const S = x.data, $ = n.value.find((U) => U.id == S.id);
      switch (x.messageType) {
        case "UserModified":
          $ != null && Object.assign($, S);
          break;
        case "UserRemoved":
          $ != null && n.value.splice(n.value.indexOf($), 1);
          break;
        case "UserAdded":
          $ == null && n.value.push(S);
          break;
      }
    }, g = async () => {
      await r(t.value.id, i), setTimeout(() => {
        t.value = ws;
      }, 500);
    }, y = () => {
      t.value.id != 0 && setTimeout(() => {
        o(n, i);
      }, 500);
    };
    return Te(t, y), kt(() => {
      s.on(f), l.on(h), u.on(a), y();
    }), pn(() => {
      s.off(f), l.off(h), u.off(a);
    }), (x, S) => (Ve(), $e("div", xf, [
      ae("div", Vf, [
        ae("button", {
          class: "pure-btn",
          onClick: g
        }, it(fn(t).name) + " logout", 1)
      ]),
      (Ve(!0), $e(we, null, lr(n.value, ($) => (Ve(), $e("div", {
        key: $.id,
        onClick: (U) => {
          $.isSelected = !$.isSelected;
        },
        class: Ut({ "is-selected": $.isSelected })
      }, it($.name), 11, Sf))), 128))
    ]));
  }
}), Tf = { class: "app-log" }, $f = /* @__PURE__ */ Ht({
  __name: "AppLogComponent",
  setup(e) {
    const t = Be(gs), n = ge([]), o = (r) => {
      n.value.unshift(r);
    };
    return kt(() => {
      t.on(o);
    }), pn(() => {
      t.off(o);
    }), (r, i) => (Ve(), $e("div", Tf, [
      (Ve(!0), $e(we, null, lr(n.value, (s) => (Ve(), $e("div", {
        key: s.id,
        class: Ut(s.severity)
      }, [
        ae("span", null, it(fn(Ds)(s.created)), 1),
        ae("span", null, it(s.source), 1),
        ae("span", null, it(s.message), 1)
      ], 2))), 128))
    ]));
  }
});
async function Ff(e, t) {
  const n = e.getReader();
  let o;
  for (; !(o = await n.read()).done; )
    t(o.value);
}
function Af(e) {
  let t, n, o, r = !1;
  return function(s) {
    t === void 0 ? (t = s, n = 0, o = -1) : t = If(t, s);
    const l = t.length;
    let u = 0;
    for (; n < l; ) {
      r && (t[n] === 10 && (u = ++n), r = !1);
      let f = -1;
      for (; n < l && f === -1; ++n)
        switch (t[n]) {
          case 58:
            o === -1 && (o = n - u);
            break;
          case 13:
            r = !0;
          case 10:
            f = n;
            break;
        }
      if (f === -1)
        break;
      e(t.subarray(u, f), o), u = n, o = -1;
    }
    u === l ? t = void 0 : u !== 0 && (t = t.subarray(u), n -= u);
  };
}
function Pf(e, t, n) {
  let o = ii();
  const r = new TextDecoder();
  return function(s, l) {
    if (s.length === 0)
      n?.(o), o = ii();
    else if (l > 0) {
      const u = r.decode(s.subarray(0, l)), f = l + (s[l + 1] === 32 ? 2 : 1), h = r.decode(s.subarray(f));
      switch (u) {
        case "data":
          o.data = o.data ? o.data + `
` + h : h;
          break;
        case "event":
          o.event = h;
          break;
        case "id":
          e(o.id = h);
          break;
        case "retry":
          const a = parseInt(h, 10);
          isNaN(a) || t(o.retry = a);
          break;
      }
    }
  };
}
function If(e, t) {
  const n = new Uint8Array(e.length + t.length);
  return n.set(e), n.set(t, e.length), n;
}
function ii() {
  return {
    data: "",
    event: "",
    id: "",
    retry: void 0
  };
}
var Mf = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const Lo = "text/event-stream", Rf = 1e3, si = "last-event-id";
function jf(e, t) {
  var { signal: n, headers: o, onopen: r, onmessage: i, onclose: s, onerror: l, openWhenHidden: u, fetch: f } = t, h = Mf(t, ["signal", "headers", "onopen", "onmessage", "onclose", "onerror", "openWhenHidden", "fetch"]);
  return new Promise((a, g) => {
    const y = Object.assign({}, o);
    y.accept || (y.accept = Lo);
    let x;
    function S() {
      x.abort(), document.hidden || k();
    }
    u || document.addEventListener("visibilitychange", S);
    let $ = Rf, U = 0;
    function G() {
      document.removeEventListener("visibilitychange", S), window.clearTimeout(U), x.abort();
    }
    n?.addEventListener("abort", () => {
      G(), a();
    });
    const H = f ?? window.fetch, K = r ?? Lf;
    async function k() {
      var Q;
      x = new AbortController();
      try {
        const A = await H(e, Object.assign(Object.assign({}, h), { headers: y, signal: x.signal }));
        await K(A), await Ff(A.body, Af(Pf((q) => {
          q ? y[si] = q : delete y[si];
        }, (q) => {
          $ = q;
        }, i))), s?.(), G(), a();
      } catch (A) {
        if (!x.signal.aborted)
          try {
            const q = (Q = l?.(A)) !== null && Q !== void 0 ? Q : $;
            window.clearTimeout(U), U = window.setTimeout(k, q);
          } catch (q) {
            G(), g(q);
          }
      }
    }
    k();
  });
}
function Lf(e) {
  const t = e.headers.get("content-type");
  if (!t?.startsWith(Lo))
    throw new Error(`Expected content-type to be ${Lo}, Actual: ${t}`);
}
const xn = { baseUrl: "" }, Uf = (e) => /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(e), Hf = (e, t) => typeof t != "string" || !Uf(t) ? t : new Date(t);
function kf() {
  function e(n) {
    Object.assign(xn, { ...xn, ...n });
  }
  function t(n, o, r, i) {
    const s = `${xn.baseUrl}${n}`;
    jf(s, {
      signal: o,
      headers: { Authorization: `Bearer ${xn.authToken}` },
      onmessage: (l) => {
        r(JSON.parse(l.data, Hf));
      },
      onerror: i
    });
  }
  return {
    configureFetchEventSource: e,
    listen: t
  };
}
const Bf = { class: "main" }, Kf = /* @__PURE__ */ Ht({
  __name: "App",
  setup(e) {
    const t = gn(), { configureChatApi: n } = so(), { listen: o, configureFetchEventSource: r } = kf(), { logErrorObject: i } = io();
    let s;
    const l = Be(Es), u = Be(_s), f = (y) => {
      i(y);
    }, h = (y) => {
      l.emit(y);
    }, a = (y) => {
      u.emit(y);
    }, g = (y) => {
      y.id == 0 ? s?.abort() : (r({ authToken: y.authToken }), n({ authToken: y.authToken }), s = new AbortController(), o(`/sse/ChatMessage?userId=${y.id}`, s.signal, h, f), o("/sse/SystemMessage", s.signal, a, f));
    };
    return Te(t, () => {
      g(t.value);
    }), kt(() => {
      g(t.value);
    }), (y, x) => (Ve(), $e("div", Bf, [
      Ne($f),
      Ne(Df),
      Ne(Cf),
      Ne(vf),
      Ne(Ef)
    ]));
  }
});
Pu(Kf).mount("#app");
//# sourceMappingURL=web1-sse-chat-app.js.map
