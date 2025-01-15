var R2 = Object.defineProperty
var I2 = (e, t, n) =>
  t in e
    ? R2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n)
var iu = (e, t, n) => I2(e, typeof t != 'symbol' ? t + '' : t, n)
function Iv(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n]
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const i in r)
        if (i !== 'default' && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i)
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            )
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  )
}
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i)
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === 'childList')
        for (const a of o.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && r(a)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(i) {
    const o = {}
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : i.crossOrigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    )
  }
  function r(i) {
    if (i.ep) return
    i.ep = !0
    const o = n(i)
    fetch(i.href, o)
  }
})()
function hf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
var Fv = { exports: {} },
  gl = {},
  $v = { exports: {} },
  J = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ua = Symbol.for('react.element'),
  F2 = Symbol.for('react.portal'),
  $2 = Symbol.for('react.fragment'),
  D2 = Symbol.for('react.strict_mode'),
  z2 = Symbol.for('react.profiler'),
  V2 = Symbol.for('react.provider'),
  B2 = Symbol.for('react.context'),
  H2 = Symbol.for('react.forward_ref'),
  q2 = Symbol.for('react.suspense'),
  W2 = Symbol.for('react.memo'),
  U2 = Symbol.for('react.lazy'),
  Bp = Symbol.iterator
function G2(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Bp && e[Bp]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var Dv = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  zv = Object.assign,
  Vv = {}
function Fi(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = Vv),
    (this.updater = n || Dv)
}
Fi.prototype.isReactComponent = {}
Fi.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
Fi.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function Bv() {}
Bv.prototype = Fi.prototype
function mf(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = Vv),
    (this.updater = n || Dv)
}
var vf = (mf.prototype = new Bv())
vf.constructor = mf
zv(vf, Fi.prototype)
vf.isPureReactComponent = !0
var Hp = Array.isArray,
  Hv = Object.prototype.hasOwnProperty,
  gf = { current: null },
  qv = { key: !0, ref: !0, __self: !0, __source: !0 }
function Wv(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      Hv.call(t, r) && !qv.hasOwnProperty(r) && (i[r] = t[r])
  var s = arguments.length - 2
  if (s === 1) i.children = n
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2]
    i.children = l
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r])
  return { $$typeof: ua, type: e, key: o, ref: a, props: i, _owner: gf.current }
}
function Q2(e, t) {
  return {
    $$typeof: ua,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner
  }
}
function yf(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === ua
}
function K2(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var qp = /\/+/g
function ou(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? K2('' + e.key)
    : t.toString(36)
}
function us(e, t, n, r, i) {
  var o = typeof e
  ;(o === 'undefined' || o === 'boolean') && (e = null)
  var a = !1
  if (e === null) a = !0
  else
    switch (o) {
      case 'string':
      case 'number':
        a = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case ua:
          case F2:
            a = !0
        }
    }
  if (a)
    return (
      (a = e),
      (i = i(a)),
      (e = r === '' ? '.' + ou(a, 0) : r),
      Hp(i)
        ? ((n = ''),
          e != null && (n = e.replace(qp, '$&/') + '/'),
          us(i, t, n, '', function (u) {
            return u
          }))
        : i != null &&
          (yf(i) &&
            (i = Q2(
              i,
              n +
                (!i.key || (a && a.key === i.key)
                  ? ''
                  : ('' + i.key).replace(qp, '$&/') + '/') +
                e
            )),
          t.push(i)),
      1
    )
  if (((a = 0), (r = r === '' ? '.' : r + ':'), Hp(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s]
      var l = r + ou(o, s)
      a += us(o, t, n, l, i)
    }
  else if (((l = G2(e)), typeof l == 'function'))
    for (e = l.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (l = r + ou(o, s++)), (a += us(o, t, n, l, i))
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    )
  return a
}
function ja(e, t, n) {
  if (e == null) return e
  var r = [],
    i = 0
  return (
    us(e, r, '', '', function (o) {
      return t.call(n, o, i++)
    }),
    r
  )
}
function X2(e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      t.then(
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n))
        },
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n))
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var Ge = { current: null },
  cs = { transition: null },
  Y2 = {
    ReactCurrentDispatcher: Ge,
    ReactCurrentBatchConfig: cs,
    ReactCurrentOwner: gf
  }
function Uv() {
  throw Error('act(...) is not supported in production builds of React.')
}
J.Children = {
  map: ja,
  forEach: function (e, t, n) {
    ja(
      e,
      function () {
        t.apply(this, arguments)
      },
      n
    )
  },
  count: function (e) {
    var t = 0
    return (
      ja(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      ja(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!yf(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      )
    return e
  }
}
J.Component = Fi
J.Fragment = $2
J.Profiler = z2
J.PureComponent = mf
J.StrictMode = D2
J.Suspense = q2
J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y2
J.act = Uv
J.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    )
  var r = zv({}, e.props),
    i = e.key,
    o = e.ref,
    a = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (a = gf.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps
    for (l in t)
      Hv.call(t, l) &&
        !qv.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l])
  }
  var l = arguments.length - 2
  if (l === 1) r.children = n
  else if (1 < l) {
    s = Array(l)
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2]
    r.children = s
  }
  return { $$typeof: ua, type: e.type, key: i, ref: o, props: r, _owner: a }
}
J.createContext = function (e) {
  return (
    (e = {
      $$typeof: B2,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }),
    (e.Provider = { $$typeof: V2, _context: e }),
    (e.Consumer = e)
  )
}
J.createElement = Wv
J.createFactory = function (e) {
  var t = Wv.bind(null, e)
  return (t.type = e), t
}
J.createRef = function () {
  return { current: null }
}
J.forwardRef = function (e) {
  return { $$typeof: H2, render: e }
}
J.isValidElement = yf
J.lazy = function (e) {
  return { $$typeof: U2, _payload: { _status: -1, _result: e }, _init: X2 }
}
J.memo = function (e, t) {
  return { $$typeof: W2, type: e, compare: t === void 0 ? null : t }
}
J.startTransition = function (e) {
  var t = cs.transition
  cs.transition = {}
  try {
    e()
  } finally {
    cs.transition = t
  }
}
J.unstable_act = Uv
J.useCallback = function (e, t) {
  return Ge.current.useCallback(e, t)
}
J.useContext = function (e) {
  return Ge.current.useContext(e)
}
J.useDebugValue = function () {}
J.useDeferredValue = function (e) {
  return Ge.current.useDeferredValue(e)
}
J.useEffect = function (e, t) {
  return Ge.current.useEffect(e, t)
}
J.useId = function () {
  return Ge.current.useId()
}
J.useImperativeHandle = function (e, t, n) {
  return Ge.current.useImperativeHandle(e, t, n)
}
J.useInsertionEffect = function (e, t) {
  return Ge.current.useInsertionEffect(e, t)
}
J.useLayoutEffect = function (e, t) {
  return Ge.current.useLayoutEffect(e, t)
}
J.useMemo = function (e, t) {
  return Ge.current.useMemo(e, t)
}
J.useReducer = function (e, t, n) {
  return Ge.current.useReducer(e, t, n)
}
J.useRef = function (e) {
  return Ge.current.useRef(e)
}
J.useState = function (e) {
  return Ge.current.useState(e)
}
J.useSyncExternalStore = function (e, t, n) {
  return Ge.current.useSyncExternalStore(e, t, n)
}
J.useTransition = function () {
  return Ge.current.useTransition()
}
J.version = '18.3.1'
$v.exports = J
var j = $v.exports
const te = hf(j),
  Mo = Iv({ __proto__: null, default: te }, [j])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Z2 = j,
  J2 = Symbol.for('react.element'),
  e_ = Symbol.for('react.fragment'),
  t_ = Object.prototype.hasOwnProperty,
  n_ = Z2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  r_ = { key: !0, ref: !0, __self: !0, __source: !0 }
function Gv(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (a = t.ref)
  for (r in t) t_.call(t, r) && !r_.hasOwnProperty(r) && (i[r] = t[r])
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r])
  return { $$typeof: J2, type: e, key: o, ref: a, props: i, _owner: n_.current }
}
gl.Fragment = e_
gl.jsx = Gv
gl.jsxs = Gv
Fv.exports = gl
var h = Fv.exports,
  Qv = { exports: {} },
  ht = {},
  Kv = { exports: {} },
  Xv = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(N, F) {
    var $ = N.length
    N.push(F)
    e: for (; 0 < $; ) {
      var V = ($ - 1) >>> 1,
        q = N[V]
      if (0 < i(q, F)) (N[V] = F), (N[$] = q), ($ = V)
      else break e
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0]
  }
  function r(N) {
    if (N.length === 0) return null
    var F = N[0],
      $ = N.pop()
    if ($ !== F) {
      N[0] = $
      e: for (var V = 0, q = N.length, G = q >>> 1; V < G; ) {
        var U = 2 * (V + 1) - 1,
          Z = N[U],
          se = U + 1,
          re = N[se]
        if (0 > i(Z, $))
          se < q && 0 > i(re, Z)
            ? ((N[V] = re), (N[se] = $), (V = se))
            : ((N[V] = Z), (N[U] = $), (V = U))
        else if (se < q && 0 > i(re, $)) (N[V] = re), (N[se] = $), (V = se)
        else break e
      }
    }
    return F
  }
  function i(N, F) {
    var $ = N.sortIndex - F.sortIndex
    return $ !== 0 ? $ : N.id - F.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance
    e.unstable_now = function () {
      return o.now()
    }
  } else {
    var a = Date,
      s = a.now()
    e.unstable_now = function () {
      return a.now() - s
    }
  }
  var l = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    g = !1,
    y = !1,
    _ = !1,
    x = typeof setTimeout == 'function' ? setTimeout : null,
    v = typeof clearTimeout == 'function' ? clearTimeout : null,
    p = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function m(N) {
    for (var F = n(u); F !== null; ) {
      if (F.callback === null) r(u)
      else if (F.startTime <= N) r(u), (F.sortIndex = F.expirationTime), t(l, F)
      else break
      F = n(u)
    }
  }
  function w(N) {
    if (((_ = !1), m(N), !y))
      if (n(l) !== null) (y = !0), R(b)
      else {
        var F = n(u)
        F !== null && I(w, F.startTime - N)
      }
  }
  function b(N, F) {
    ;(y = !1), _ && ((_ = !1), v(E), (E = -1)), (g = !0)
    var $ = d
    try {
      for (
        m(F), f = n(l);
        f !== null && (!(f.expirationTime > F) || (N && !M()));

      ) {
        var V = f.callback
        if (typeof V == 'function') {
          ;(f.callback = null), (d = f.priorityLevel)
          var q = V(f.expirationTime <= F)
          ;(F = e.unstable_now()),
            typeof q == 'function' ? (f.callback = q) : f === n(l) && r(l),
            m(F)
        } else r(l)
        f = n(l)
      }
      if (f !== null) var G = !0
      else {
        var U = n(u)
        U !== null && I(w, U.startTime - F), (G = !1)
      }
      return G
    } finally {
      ;(f = null), (d = $), (g = !1)
    }
  }
  var C = !1,
    S = null,
    E = -1,
    T = 5,
    k = -1
  function M() {
    return !(e.unstable_now() - k < T)
  }
  function L() {
    if (S !== null) {
      var N = e.unstable_now()
      k = N
      var F = !0
      try {
        F = S(!0, N)
      } finally {
        F ? O() : ((C = !1), (S = null))
      }
    } else C = !1
  }
  var O
  if (typeof p == 'function')
    O = function () {
      p(L)
    }
  else if (typeof MessageChannel < 'u') {
    var A = new MessageChannel(),
      z = A.port2
    ;(A.port1.onmessage = L),
      (O = function () {
        z.postMessage(null)
      })
  } else
    O = function () {
      x(L, 0)
    }
  function R(N) {
    ;(S = N), C || ((C = !0), O())
  }
  function I(N, F) {
    E = x(function () {
      N(e.unstable_now())
    }, F)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), R(b))
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (T = 0 < N ? Math.floor(1e3 / N) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l)
    }),
    (e.unstable_next = function (N) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var F = 3
          break
        default:
          F = d
      }
      var $ = d
      d = F
      try {
        return N()
      } finally {
        d = $
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, F) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          N = 3
      }
      var $ = d
      d = N
      try {
        return F()
      } finally {
        d = $
      }
    }),
    (e.unstable_scheduleCallback = function (N, F, $) {
      var V = e.unstable_now()
      switch (
        (typeof $ == 'object' && $ !== null
          ? (($ = $.delay), ($ = typeof $ == 'number' && 0 < $ ? V + $ : V))
          : ($ = V),
        N)
      ) {
        case 1:
          var q = -1
          break
        case 2:
          q = 250
          break
        case 5:
          q = 1073741823
          break
        case 4:
          q = 1e4
          break
        default:
          q = 5e3
      }
      return (
        (q = $ + q),
        (N = {
          id: c++,
          callback: F,
          priorityLevel: N,
          startTime: $,
          expirationTime: q,
          sortIndex: -1
        }),
        $ > V
          ? ((N.sortIndex = $),
            t(u, N),
            n(l) === null &&
              N === n(u) &&
              (_ ? (v(E), (E = -1)) : (_ = !0), I(w, $ - V)))
          : ((N.sortIndex = q), t(l, N), y || g || ((y = !0), R(b))),
        N
      )
    }),
    (e.unstable_shouldYield = M),
    (e.unstable_wrapCallback = function (N) {
      var F = d
      return function () {
        var $ = d
        d = F
        try {
          return N.apply(this, arguments)
        } finally {
          d = $
        }
      }
    })
})(Xv)
Kv.exports = Xv
var i_ = Kv.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var o_ = j,
  ft = i_
function H(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n])
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var Yv = new Set(),
  No = {}
function Lr(e, t) {
  Ci(e, t), Ci(e + 'Capture', t)
}
function Ci(e, t) {
  for (No[e] = t, e = 0; e < t.length; e++) Yv.add(t[e])
}
var wn = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  pc = Object.prototype.hasOwnProperty,
  a_ =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Wp = {},
  Up = {}
function s_(e) {
  return pc.call(Up, e)
    ? !0
    : pc.call(Wp, e)
    ? !1
    : a_.test(e)
    ? (Up[e] = !0)
    : ((Wp[e] = !0), !1)
}
function l_(e, t, n, r) {
  if (n !== null && n.type === 0) return !1
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
    default:
      return !1
  }
}
function u_(e, t, n, r) {
  if (t === null || typeof t > 'u' || l_(e, t, n, r)) return !0
  if (r) return !1
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t
      case 4:
        return t === !1
      case 5:
        return isNaN(t)
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function Qe(e, t, n, r, i, o, a) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = a)
}
var Re = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Re[e] = new Qe(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv']
].forEach(function (e) {
  var t = e[0]
  Re[t] = new Qe(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Re[e] = new Qe(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha'
].forEach(function (e) {
  Re[e] = new Qe(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Re[e] = new Qe(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Re[e] = new Qe(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  Re[e] = new Qe(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Re[e] = new Qe(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  Re[e] = new Qe(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var _f = /[\-:]([a-z])/g
function wf(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(_f, wf)
    Re[t] = new Qe(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(_f, wf)
    Re[t] = new Qe(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(_f, wf)
  Re[t] = new Qe(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  Re[e] = new Qe(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
Re.xlinkHref = new Qe(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Re[e] = new Qe(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function xf(e, t, n, r) {
  var i = Re.hasOwnProperty(t) ? Re[t] : null
  ;(i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (u_(t, n, i, r) && (n = null),
    r || i === null
      ? s_(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var jn = o_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Pa = Symbol.for('react.element'),
  Jr = Symbol.for('react.portal'),
  ei = Symbol.for('react.fragment'),
  bf = Symbol.for('react.strict_mode'),
  hc = Symbol.for('react.profiler'),
  Zv = Symbol.for('react.provider'),
  Jv = Symbol.for('react.context'),
  Sf = Symbol.for('react.forward_ref'),
  mc = Symbol.for('react.suspense'),
  vc = Symbol.for('react.suspense_list'),
  Cf = Symbol.for('react.memo'),
  Ln = Symbol.for('react.lazy'),
  eg = Symbol.for('react.offscreen'),
  Gp = Symbol.iterator
function Qi(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Gp && e[Gp]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var me = Object.assign,
  au
function ao(e) {
  if (au === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      au = (t && t[1]) || ''
    }
  return (
    `
` +
    au +
    e
  )
}
var su = !1
function lu(e, t) {
  if (!e || su) return ''
  su = !0
  var n = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (t)
      if (
        ((t = function () {
          throw Error()
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error()
          }
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, [])
        } catch (u) {
          var r = u
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (u) {
          r = u
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (u) {
        r = u
      }
      e()
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          a = i.length - 1,
          s = o.length - 1;
        1 <= a && 0 <= s && i[a] !== o[s];

      )
        s--
      for (; 1 <= a && 0 <= s; a--, s--)
        if (i[a] !== o[s]) {
          if (a !== 1 || s !== 1)
            do
              if ((a--, s--, 0 > s || i[a] !== o[s])) {
                var l =
                  `
` + i[a].replace(' at new ', ' at ')
                return (
                  e.displayName &&
                    l.includes('<anonymous>') &&
                    (l = l.replace('<anonymous>', e.displayName)),
                  l
                )
              }
            while (1 <= a && 0 <= s)
          break
        }
    }
  } finally {
    ;(su = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? ao(e) : ''
}
function c_(e) {
  switch (e.tag) {
    case 5:
      return ao(e.type)
    case 16:
      return ao('Lazy')
    case 13:
      return ao('Suspense')
    case 19:
      return ao('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = lu(e.type, !1)), e
    case 11:
      return (e = lu(e.type.render, !1)), e
    case 1:
      return (e = lu(e.type, !0)), e
    default:
      return ''
  }
}
function gc(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case ei:
      return 'Fragment'
    case Jr:
      return 'Portal'
    case hc:
      return 'Profiler'
    case bf:
      return 'StrictMode'
    case mc:
      return 'Suspense'
    case vc:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Jv:
        return (e.displayName || 'Context') + '.Consumer'
      case Zv:
        return (e._context.displayName || 'Context') + '.Provider'
      case Sf:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case Cf:
        return (
          (t = e.displayName || null), t !== null ? t : gc(e.type) || 'Memo'
        )
      case Ln:
        ;(t = e._payload), (e = e._init)
        try {
          return gc(e(t))
        } catch {}
    }
  return null
}
function d_(e) {
  var t = e.type
  switch (e.tag) {
    case 24:
      return 'Cache'
    case 9:
      return (t.displayName || 'Context') + '.Consumer'
    case 10:
      return (t._context.displayName || 'Context') + '.Provider'
    case 18:
      return 'DehydratedFragment'
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      )
    case 7:
      return 'Fragment'
    case 5:
      return t
    case 4:
      return 'Portal'
    case 3:
      return 'Root'
    case 6:
      return 'Text'
    case 16:
      return gc(t)
    case 8:
      return t === bf ? 'StrictMode' : 'Mode'
    case 22:
      return 'Offscreen'
    case 12:
      return 'Profiler'
    case 21:
      return 'Scope'
    case 13:
      return 'Suspense'
    case 19:
      return 'SuspenseList'
    case 25:
      return 'TracingMarker'
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null
      if (typeof t == 'string') return t
  }
  return null
}
function Jn(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e
    case 'object':
      return e
    default:
      return ''
  }
}
function tg(e) {
  var t = e.type
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  )
}
function f_(e) {
  var t = tg(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var i = n.get,
      o = n.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this)
        },
        set: function (a) {
          ;(r = '' + a), o.call(this, a)
        }
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r
        },
        setValue: function (a) {
          r = '' + a
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        }
      }
    )
  }
}
function Ma(e) {
  e._valueTracker || (e._valueTracker = f_(e))
}
function ng(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ''
  return (
    e && (r = tg(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function Ns(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function yc(e, t) {
  var n = t.checked
  return me({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked
  })
}
function Qp(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;(n = Jn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null
    })
}
function rg(e, t) {
  ;(t = t.checked), t != null && xf(e, 'checked', t, !1)
}
function _c(e, t) {
  rg(e, t)
  var n = Jn(t.value),
    r = t.type
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n)
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value')
    return
  }
  t.hasOwnProperty('value')
    ? wc(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && wc(e, t.type, Jn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function Kp(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return
    ;(t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t)
  }
  ;(n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n)
}
function wc(e, t, n) {
  ;(t !== 'number' || Ns(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var so = Array.isArray
function hi(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + Jn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        ;(e[i].selected = !0), r && (e[i].defaultSelected = !0)
        return
      }
      t !== null || e[i].disabled || (t = e[i])
    }
    t !== null && (t.selected = !0)
  }
}
function xc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(H(91))
  return me({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue
  })
}
function Xp(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(H(92))
      if (so(n)) {
        if (1 < n.length) throw Error(H(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: Jn(n) }
}
function ig(e, t) {
  var n = Jn(t.value),
    r = Jn(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r)
}
function Yp(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function og(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function bc(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? og(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e
}
var Na,
  ag = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t
    else {
      for (
        Na = Na || document.createElement('div'),
          Na.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Na.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function Oo(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var po = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  },
  p_ = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(po).forEach(function (e) {
  p_.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (po[t] = po[e])
  })
})
function sg(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (po.hasOwnProperty(e) && po[e])
    ? ('' + t).trim()
    : t + 'px'
}
function lg(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = sg(n, t[n], r)
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i)
    }
}
var h_ = me(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
  }
)
function Sc(e, t) {
  if (t) {
    if (h_[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(H(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(H(60))
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(H(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(H(62))
  }
}
function Cc(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string'
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1
    default:
      return !0
  }
}
var Ec = null
function Ef(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var Tc = null,
  mi = null,
  vi = null
function Zp(e) {
  if ((e = fa(e))) {
    if (typeof Tc != 'function') throw Error(H(280))
    var t = e.stateNode
    t && ((t = bl(t)), Tc(e.stateNode, e.type, t))
  }
}
function ug(e) {
  mi ? (vi ? vi.push(e) : (vi = [e])) : (mi = e)
}
function cg() {
  if (mi) {
    var e = mi,
      t = vi
    if (((vi = mi = null), Zp(e), t)) for (e = 0; e < t.length; e++) Zp(t[e])
  }
}
function dg(e, t) {
  return e(t)
}
function fg() {}
var uu = !1
function pg(e, t, n) {
  if (uu) return e(t, n)
  uu = !0
  try {
    return dg(e, t, n)
  } finally {
    ;(uu = !1), (mi !== null || vi !== null) && (fg(), cg())
  }
}
function Lo(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = bl(n)
  if (r === null) return null
  n = r[t]
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ;(r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r)
      break e
    default:
      e = !1
  }
  if (e) return null
  if (n && typeof n != 'function') throw Error(H(231, t, typeof n))
  return n
}
var kc = !1
if (wn)
  try {
    var Ki = {}
    Object.defineProperty(Ki, 'passive', {
      get: function () {
        kc = !0
      }
    }),
      window.addEventListener('test', Ki, Ki),
      window.removeEventListener('test', Ki, Ki)
  } catch {
    kc = !1
  }
function m_(e, t, n, r, i, o, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, u)
  } catch (c) {
    this.onError(c)
  }
}
var ho = !1,
  Os = null,
  Ls = !1,
  jc = null,
  v_ = {
    onError: function (e) {
      ;(ho = !0), (Os = e)
    }
  }
function g_(e, t, n, r, i, o, a, s, l) {
  ;(ho = !1), (Os = null), m_.apply(v_, arguments)
}
function y_(e, t, n, r, i, o, a, s, l) {
  if ((g_.apply(this, arguments), ho)) {
    if (ho) {
      var u = Os
      ;(ho = !1), (Os = null)
    } else throw Error(H(198))
    Ls || ((Ls = !0), (jc = u))
  }
}
function Ar(e) {
  var t = e,
    n = e
  if (e.alternate) for (; t.return; ) t = t.return
  else {
    e = t
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
    while (e)
  }
  return t.tag === 3 ? n : null
}
function hg(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated
  }
  return null
}
function Jp(e) {
  if (Ar(e) !== e) throw Error(H(188))
}
function __(e) {
  var t = e.alternate
  if (!t) {
    if (((t = Ar(e)), t === null)) throw Error(H(188))
    return t !== e ? null : e
  }
  for (var n = e, r = t; ; ) {
    var i = n.return
    if (i === null) break
    var o = i.alternate
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r
        continue
      }
      break
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Jp(i), e
        if (o === r) return Jp(i), t
        o = o.sibling
      }
      throw Error(H(188))
    }
    if (n.return !== r.return) (n = i), (r = o)
    else {
      for (var a = !1, s = i.child; s; ) {
        if (s === n) {
          ;(a = !0), (n = i), (r = o)
          break
        }
        if (s === r) {
          ;(a = !0), (r = i), (n = o)
          break
        }
        s = s.sibling
      }
      if (!a) {
        for (s = o.child; s; ) {
          if (s === n) {
            ;(a = !0), (n = o), (r = i)
            break
          }
          if (s === r) {
            ;(a = !0), (r = o), (n = i)
            break
          }
          s = s.sibling
        }
        if (!a) throw Error(H(189))
      }
    }
    if (n.alternate !== r) throw Error(H(190))
  }
  if (n.tag !== 3) throw Error(H(188))
  return n.stateNode.current === n ? e : t
}
function mg(e) {
  return (e = __(e)), e !== null ? vg(e) : null
}
function vg(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = vg(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var gg = ft.unstable_scheduleCallback,
  eh = ft.unstable_cancelCallback,
  w_ = ft.unstable_shouldYield,
  x_ = ft.unstable_requestPaint,
  ye = ft.unstable_now,
  b_ = ft.unstable_getCurrentPriorityLevel,
  Tf = ft.unstable_ImmediatePriority,
  yg = ft.unstable_UserBlockingPriority,
  As = ft.unstable_NormalPriority,
  S_ = ft.unstable_LowPriority,
  _g = ft.unstable_IdlePriority,
  yl = null,
  tn = null
function C_(e) {
  if (tn && typeof tn.onCommitFiberRoot == 'function')
    try {
      tn.onCommitFiberRoot(yl, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var zt = Math.clz32 ? Math.clz32 : k_,
  E_ = Math.log,
  T_ = Math.LN2
function k_(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((E_(e) / T_) | 0)) | 0
}
var Oa = 64,
  La = 4194304
function lo(e) {
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return e
  }
}
function Rs(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    a = n & 268435455
  if (a !== 0) {
    var s = a & ~i
    s !== 0 ? (r = lo(s)) : ((o &= a), o !== 0 && (r = lo(o)))
  } else (a = n & ~i), a !== 0 ? (r = lo(a)) : o !== 0 && (r = lo(o))
  if (r === 0) return 0
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - zt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i)
  return r
}
function j_(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function P_(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var a = 31 - zt(o),
      s = 1 << a,
      l = i[a]
    l === -1
      ? (!(s & n) || s & r) && (i[a] = j_(s, t))
      : l <= t && (e.expiredLanes |= s),
      (o &= ~s)
  }
}
function Pc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  )
}
function wg() {
  var e = Oa
  return (Oa <<= 1), !(Oa & 4194240) && (Oa = 64), e
}
function cu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function ca(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - zt(t)),
    (e[t] = n)
}
function M_(e, t) {
  var n = e.pendingLanes & ~t
  ;(e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements)
  var r = e.eventTimes
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - zt(n),
      o = 1 << i
    ;(t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o)
  }
}
function kf(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var r = 31 - zt(n),
      i = 1 << r
    ;(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i)
  }
}
var ie = 0
function xg(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var bg,
  jf,
  Sg,
  Cg,
  Eg,
  Mc = !1,
  Aa = [],
  Wn = null,
  Un = null,
  Gn = null,
  Ao = new Map(),
  Ro = new Map(),
  In = [],
  N_ =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function th(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Wn = null
      break
    case 'dragenter':
    case 'dragleave':
      Un = null
      break
    case 'mouseover':
    case 'mouseout':
      Gn = null
      break
    case 'pointerover':
    case 'pointerout':
      Ao.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      Ro.delete(t.pointerId)
  }
}
function Xi(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
      }),
      t !== null && ((t = fa(t)), t !== null && jf(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e)
}
function O_(e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return (Wn = Xi(Wn, e, t, n, r, i)), !0
    case 'dragenter':
      return (Un = Xi(Un, e, t, n, r, i)), !0
    case 'mouseover':
      return (Gn = Xi(Gn, e, t, n, r, i)), !0
    case 'pointerover':
      var o = i.pointerId
      return Ao.set(o, Xi(Ao.get(o) || null, e, t, n, r, i)), !0
    case 'gotpointercapture':
      return (
        (o = i.pointerId), Ro.set(o, Xi(Ro.get(o) || null, e, t, n, r, i)), !0
      )
  }
  return !1
}
function Tg(e) {
  var t = dr(e.target)
  if (t !== null) {
    var n = Ar(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = hg(n)), t !== null)) {
          ;(e.blockedOn = t),
            Eg(e.priority, function () {
              Sg(n)
            })
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function ds(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Nc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(Ec = r), n.target.dispatchEvent(r), (Ec = null)
    } else return (t = fa(n)), t !== null && jf(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function nh(e, t, n) {
  ds(e) && n.delete(t)
}
function L_() {
  ;(Mc = !1),
    Wn !== null && ds(Wn) && (Wn = null),
    Un !== null && ds(Un) && (Un = null),
    Gn !== null && ds(Gn) && (Gn = null),
    Ao.forEach(nh),
    Ro.forEach(nh)
}
function Yi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Mc ||
      ((Mc = !0), ft.unstable_scheduleCallback(ft.unstable_NormalPriority, L_)))
}
function Io(e) {
  function t(i) {
    return Yi(i, e)
  }
  if (0 < Aa.length) {
    Yi(Aa[0], e)
    for (var n = 1; n < Aa.length; n++) {
      var r = Aa[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    Wn !== null && Yi(Wn, e),
      Un !== null && Yi(Un, e),
      Gn !== null && Yi(Gn, e),
      Ao.forEach(t),
      Ro.forEach(t),
      n = 0;
    n < In.length;
    n++
  )
    (r = In[n]), r.blockedOn === e && (r.blockedOn = null)
  for (; 0 < In.length && ((n = In[0]), n.blockedOn === null); )
    Tg(n), n.blockedOn === null && In.shift()
}
var gi = jn.ReactCurrentBatchConfig,
  Is = !0
function A_(e, t, n, r) {
  var i = ie,
    o = gi.transition
  gi.transition = null
  try {
    ;(ie = 1), Pf(e, t, n, r)
  } finally {
    ;(ie = i), (gi.transition = o)
  }
}
function R_(e, t, n, r) {
  var i = ie,
    o = gi.transition
  gi.transition = null
  try {
    ;(ie = 4), Pf(e, t, n, r)
  } finally {
    ;(ie = i), (gi.transition = o)
  }
}
function Pf(e, t, n, r) {
  if (Is) {
    var i = Nc(e, t, n, r)
    if (i === null) wu(e, t, r, Fs, n), th(e, r)
    else if (O_(i, e, t, n, r)) r.stopPropagation()
    else if ((th(e, r), t & 4 && -1 < N_.indexOf(e))) {
      for (; i !== null; ) {
        var o = fa(i)
        if (
          (o !== null && bg(o),
          (o = Nc(e, t, n, r)),
          o === null && wu(e, t, r, Fs, n),
          o === i)
        )
          break
        i = o
      }
      i !== null && r.stopPropagation()
    } else wu(e, t, r, null, n)
  }
}
var Fs = null
function Nc(e, t, n, r) {
  if (((Fs = null), (e = Ef(r)), (e = dr(e)), e !== null))
    if (((t = Ar(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = hg(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (Fs = e), null
}
function kg(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4
    case 'message':
      switch (b_()) {
        case Tf:
          return 1
        case yg:
          return 4
        case As:
        case S_:
          return 16
        case _g:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var Dn = null,
  Mf = null,
  fs = null
function jg() {
  if (fs) return fs
  var e,
    t = Mf,
    n = t.length,
    r,
    i = 'value' in Dn ? Dn.value : Dn.textContent,
    o = i.length
  for (e = 0; e < n && t[e] === i[e]; e++);
  var a = n - e
  for (r = 1; r <= a && t[n - r] === i[o - r]; r++);
  return (fs = i.slice(e, 1 < r ? 1 - r : void 0))
}
function ps(e) {
  var t = e.keyCode
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function Ra() {
  return !0
}
function rh() {
  return !1
}
function mt(e) {
  function t(n, r, i, o, a) {
    ;(this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = a),
      (this.currentTarget = null)
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]))
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Ra
        : rh),
      (this.isPropagationStopped = rh),
      this
    )
  }
  return (
    me(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Ra))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ra))
      },
      persist: function () {},
      isPersistent: Ra
    }),
    t
  )
}
var $i = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  Nf = mt($i),
  da = me({}, $i, { view: 0, detail: 0 }),
  I_ = mt(da),
  du,
  fu,
  Zi,
  _l = me({}, da, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Of,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Zi &&
            (Zi && e.type === 'mousemove'
              ? ((du = e.screenX - Zi.screenX), (fu = e.screenY - Zi.screenY))
              : (fu = du = 0),
            (Zi = e)),
          du)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : fu
    }
  }),
  ih = mt(_l),
  F_ = me({}, _l, { dataTransfer: 0 }),
  $_ = mt(F_),
  D_ = me({}, da, { relatedTarget: 0 }),
  pu = mt(D_),
  z_ = me({}, $i, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  V_ = mt(z_),
  B_ = me({}, $i, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    }
  }),
  H_ = mt(B_),
  q_ = me({}, $i, { data: 0 }),
  oh = mt(q_),
  W_ = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified'
  },
  U_ = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta'
  },
  G_ = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function Q_(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = G_[e]) ? !!t[e] : !1
}
function Of() {
  return Q_
}
var K_ = me({}, da, {
    key: function (e) {
      if (e.key) {
        var t = W_[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = ps(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? U_[e.keyCode] || 'Unidentified'
        : ''
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Of,
    charCode: function (e) {
      return e.type === 'keypress' ? ps(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? ps(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0
    }
  }),
  X_ = mt(K_),
  Y_ = me({}, _l, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }),
  ah = mt(Y_),
  Z_ = me({}, da, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Of
  }),
  J_ = mt(Z_),
  ew = me({}, $i, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  tw = mt(ew),
  nw = me({}, _l, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0
    },
    deltaZ: 0,
    deltaMode: 0
  }),
  rw = mt(nw),
  iw = [9, 13, 27, 32],
  Lf = wn && 'CompositionEvent' in window,
  mo = null
wn && 'documentMode' in document && (mo = document.documentMode)
var ow = wn && 'TextEvent' in window && !mo,
  Pg = wn && (!Lf || (mo && 8 < mo && 11 >= mo)),
  sh = ' ',
  lh = !1
function Mg(e, t) {
  switch (e) {
    case 'keyup':
      return iw.indexOf(t.keyCode) !== -1
    case 'keydown':
      return t.keyCode !== 229
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function Ng(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var ti = !1
function aw(e, t) {
  switch (e) {
    case 'compositionend':
      return Ng(t)
    case 'keypress':
      return t.which !== 32 ? null : ((lh = !0), sh)
    case 'textInput':
      return (e = t.data), e === sh && lh ? null : e
    default:
      return null
  }
}
function sw(e, t) {
  if (ti)
    return e === 'compositionend' || (!Lf && Mg(e, t))
      ? ((e = jg()), (fs = Mf = Dn = null), (ti = !1), e)
      : null
  switch (e) {
    case 'paste':
      return null
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char
        if (t.which) return String.fromCharCode(t.which)
      }
      return null
    case 'compositionend':
      return Pg && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var lw = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
}
function uh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!lw[e.type] : t === 'textarea'
}
function Og(e, t, n, r) {
  ug(r),
    (t = $s(t, 'onChange')),
    0 < t.length &&
      ((n = new Nf('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }))
}
var vo = null,
  Fo = null
function uw(e) {
  Hg(e, 0)
}
function wl(e) {
  var t = ii(e)
  if (ng(t)) return e
}
function cw(e, t) {
  if (e === 'change') return t
}
var Lg = !1
if (wn) {
  var hu
  if (wn) {
    var mu = 'oninput' in document
    if (!mu) {
      var ch = document.createElement('div')
      ch.setAttribute('oninput', 'return;'),
        (mu = typeof ch.oninput == 'function')
    }
    hu = mu
  } else hu = !1
  Lg = hu && (!document.documentMode || 9 < document.documentMode)
}
function dh() {
  vo && (vo.detachEvent('onpropertychange', Ag), (Fo = vo = null))
}
function Ag(e) {
  if (e.propertyName === 'value' && wl(Fo)) {
    var t = []
    Og(t, Fo, e, Ef(e)), pg(uw, t)
  }
}
function dw(e, t, n) {
  e === 'focusin'
    ? (dh(), (vo = t), (Fo = n), vo.attachEvent('onpropertychange', Ag))
    : e === 'focusout' && dh()
}
function fw(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return wl(Fo)
}
function pw(e, t) {
  if (e === 'click') return wl(t)
}
function hw(e, t) {
  if (e === 'input' || e === 'change') return wl(t)
}
function mw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var Wt = typeof Object.is == 'function' ? Object.is : mw
function $o(e, t) {
  if (Wt(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var i = n[r]
    if (!pc.call(t, i) || !Wt(e[i], t[i])) return !1
  }
  return !0
}
function fh(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function ph(e, t) {
  var n = fh(e)
  e = 0
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e }
      e = r
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = fh(n)
  }
}
function Rg(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Rg(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1
}
function Ig() {
  for (var e = window, t = Ns(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = Ns(e.document)
  }
  return t
}
function Af(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  )
}
function vw(e) {
  var t = Ig(),
    n = e.focusedElem,
    r = e.selectionRange
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Rg(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Af(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection()
        var i = n.textContent.length,
          o = Math.min(r.start, i)
        ;(r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = ph(n, o))
        var a = ph(n, r)
        i &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var gw = wn && 'documentMode' in document && 11 >= document.documentMode,
  ni = null,
  Oc = null,
  go = null,
  Lc = !1
function hh(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  Lc ||
    ni == null ||
    ni !== Ns(r) ||
    ((r = ni),
    'selectionStart' in r && Af(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset
        })),
    (go && $o(go, r)) ||
      ((go = r),
      (r = $s(Oc, 'onSelect')),
      0 < r.length &&
        ((t = new Nf('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = ni))))
}
function Ia(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var ri = {
    animationend: Ia('Animation', 'AnimationEnd'),
    animationiteration: Ia('Animation', 'AnimationIteration'),
    animationstart: Ia('Animation', 'AnimationStart'),
    transitionend: Ia('Transition', 'TransitionEnd')
  },
  vu = {},
  Fg = {}
wn &&
  ((Fg = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete ri.animationend.animation,
    delete ri.animationiteration.animation,
    delete ri.animationstart.animation),
  'TransitionEvent' in window || delete ri.transitionend.transition)
function xl(e) {
  if (vu[e]) return vu[e]
  if (!ri[e]) return e
  var t = ri[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in Fg) return (vu[e] = t[n])
  return e
}
var $g = xl('animationend'),
  Dg = xl('animationiteration'),
  zg = xl('animationstart'),
  Vg = xl('transitionend'),
  Bg = new Map(),
  mh =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function rr(e, t) {
  Bg.set(e, t), Lr(t, [e])
}
for (var gu = 0; gu < mh.length; gu++) {
  var yu = mh[gu],
    yw = yu.toLowerCase(),
    _w = yu[0].toUpperCase() + yu.slice(1)
  rr(yw, 'on' + _w)
}
rr($g, 'onAnimationEnd')
rr(Dg, 'onAnimationIteration')
rr(zg, 'onAnimationStart')
rr('dblclick', 'onDoubleClick')
rr('focusin', 'onFocus')
rr('focusout', 'onBlur')
rr(Vg, 'onTransitionEnd')
Ci('onMouseEnter', ['mouseout', 'mouseover'])
Ci('onMouseLeave', ['mouseout', 'mouseover'])
Ci('onPointerEnter', ['pointerout', 'pointerover'])
Ci('onPointerLeave', ['pointerout', 'pointerover'])
Lr(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
)
Lr(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
)
Lr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
Lr(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
)
Lr(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
)
Lr(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
)
var uo =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  ww = new Set('cancel close invalid load scroll toggle'.split(' ').concat(uo))
function vh(e, t, n) {
  var r = e.type || 'unknown-event'
  ;(e.currentTarget = n), y_(r, t, void 0, e), (e.currentTarget = null)
}
function Hg(e, t) {
  t = (t & 4) !== 0
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event
    r = r.listeners
    e: {
      var o = void 0
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var s = r[a],
            l = s.instance,
            u = s.currentTarget
          if (((s = s.listener), l !== o && i.isPropagationStopped())) break e
          vh(i, s, u), (o = l)
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((s = r[a]),
            (l = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            l !== o && i.isPropagationStopped())
          )
            break e
          vh(i, s, u), (o = l)
        }
    }
  }
  if (Ls) throw ((e = jc), (Ls = !1), (jc = null), e)
}
function ue(e, t) {
  var n = t[$c]
  n === void 0 && (n = t[$c] = new Set())
  var r = e + '__bubble'
  n.has(r) || (qg(t, e, 2, !1), n.add(r))
}
function _u(e, t, n) {
  var r = 0
  t && (r |= 4), qg(n, e, r, t)
}
var Fa = '_reactListening' + Math.random().toString(36).slice(2)
function Do(e) {
  if (!e[Fa]) {
    ;(e[Fa] = !0),
      Yv.forEach(function (n) {
        n !== 'selectionchange' && (ww.has(n) || _u(n, !1, e), _u(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[Fa] || ((t[Fa] = !0), _u('selectionchange', !1, t))
  }
}
function qg(e, t, n, r) {
  switch (kg(t)) {
    case 1:
      var i = A_
      break
    case 4:
      i = R_
      break
    default:
      i = Pf
  }
  ;(n = i.bind(null, t, n, e)),
    (i = void 0),
    !kc ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1)
}
function wu(e, t, n, r, i) {
  var o = r
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return
      var a = r.tag
      if (a === 3 || a === 4) {
        var s = r.stateNode.containerInfo
        if (s === i || (s.nodeType === 8 && s.parentNode === i)) break
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var l = a.tag
            if (
              (l === 3 || l === 4) &&
              ((l = a.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return
            a = a.return
          }
        for (; s !== null; ) {
          if (((a = dr(s)), a === null)) return
          if (((l = a.tag), l === 5 || l === 6)) {
            r = o = a
            continue e
          }
          s = s.parentNode
        }
      }
      r = r.return
    }
  pg(function () {
    var u = o,
      c = Ef(n),
      f = []
    e: {
      var d = Bg.get(e)
      if (d !== void 0) {
        var g = Nf,
          y = e
        switch (e) {
          case 'keypress':
            if (ps(n) === 0) break e
          case 'keydown':
          case 'keyup':
            g = X_
            break
          case 'focusin':
            ;(y = 'focus'), (g = pu)
            break
          case 'focusout':
            ;(y = 'blur'), (g = pu)
            break
          case 'beforeblur':
          case 'afterblur':
            g = pu
            break
          case 'click':
            if (n.button === 2) break e
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            g = ih
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            g = $_
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            g = J_
            break
          case $g:
          case Dg:
          case zg:
            g = V_
            break
          case Vg:
            g = tw
            break
          case 'scroll':
            g = I_
            break
          case 'wheel':
            g = rw
            break
          case 'copy':
          case 'cut':
          case 'paste':
            g = H_
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = ah
        }
        var _ = (t & 4) !== 0,
          x = !_ && e === 'scroll',
          v = _ ? (d !== null ? d + 'Capture' : null) : d
        _ = []
        for (var p = u, m; p !== null; ) {
          m = p
          var w = m.stateNode
          if (
            (m.tag === 5 &&
              w !== null &&
              ((m = w),
              v !== null && ((w = Lo(p, v)), w != null && _.push(zo(p, w, m)))),
            x)
          )
            break
          p = p.return
        }
        0 < _.length &&
          ((d = new g(d, y, null, n, c)), f.push({ event: d, listeners: _ }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === 'mouseover' || e === 'pointerover'),
          (g = e === 'mouseout' || e === 'pointerout'),
          d &&
            n !== Ec &&
            (y = n.relatedTarget || n.fromElement) &&
            (dr(y) || y[xn]))
        )
          break e
        if (
          (g || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = u),
              (y = y ? dr(y) : null),
              y !== null &&
                ((x = Ar(y)), y !== x || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = u)),
          g !== y)
        ) {
          if (
            ((_ = ih),
            (w = 'onMouseLeave'),
            (v = 'onMouseEnter'),
            (p = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((_ = ah),
              (w = 'onPointerLeave'),
              (v = 'onPointerEnter'),
              (p = 'pointer')),
            (x = g == null ? d : ii(g)),
            (m = y == null ? d : ii(y)),
            (d = new _(w, p + 'leave', g, n, c)),
            (d.target = x),
            (d.relatedTarget = m),
            (w = null),
            dr(c) === u &&
              ((_ = new _(v, p + 'enter', y, n, c)),
              (_.target = m),
              (_.relatedTarget = x),
              (w = _)),
            (x = w),
            g && y)
          )
            t: {
              for (_ = g, v = y, p = 0, m = _; m; m = Wr(m)) p++
              for (m = 0, w = v; w; w = Wr(w)) m++
              for (; 0 < p - m; ) (_ = Wr(_)), p--
              for (; 0 < m - p; ) (v = Wr(v)), m--
              for (; p--; ) {
                if (_ === v || (v !== null && _ === v.alternate)) break t
                ;(_ = Wr(_)), (v = Wr(v))
              }
              _ = null
            }
          else _ = null
          g !== null && gh(f, d, g, _, !1),
            y !== null && x !== null && gh(f, x, y, _, !0)
        }
      }
      e: {
        if (
          ((d = u ? ii(u) : window),
          (g = d.nodeName && d.nodeName.toLowerCase()),
          g === 'select' || (g === 'input' && d.type === 'file'))
        )
          var b = cw
        else if (uh(d))
          if (Lg) b = hw
          else {
            b = fw
            var C = dw
          }
        else
          (g = d.nodeName) &&
            g.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (b = pw)
        if (b && (b = b(e, u))) {
          Og(f, b, n, c)
          break e
        }
        C && C(e, d, u),
          e === 'focusout' &&
            (C = d._wrapperState) &&
            C.controlled &&
            d.type === 'number' &&
            wc(d, 'number', d.value)
      }
      switch (((C = u ? ii(u) : window), e)) {
        case 'focusin':
          ;(uh(C) || C.contentEditable === 'true') &&
            ((ni = C), (Oc = u), (go = null))
          break
        case 'focusout':
          go = Oc = ni = null
          break
        case 'mousedown':
          Lc = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(Lc = !1), hh(f, n, c)
          break
        case 'selectionchange':
          if (gw) break
        case 'keydown':
        case 'keyup':
          hh(f, n, c)
      }
      var S
      if (Lf)
        e: {
          switch (e) {
            case 'compositionstart':
              var E = 'onCompositionStart'
              break e
            case 'compositionend':
              E = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              E = 'onCompositionUpdate'
              break e
          }
          E = void 0
        }
      else
        ti
          ? Mg(e, n) && (E = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (E = 'onCompositionStart')
      E &&
        (Pg &&
          n.locale !== 'ko' &&
          (ti || E !== 'onCompositionStart'
            ? E === 'onCompositionEnd' && ti && (S = jg())
            : ((Dn = c),
              (Mf = 'value' in Dn ? Dn.value : Dn.textContent),
              (ti = !0))),
        (C = $s(u, E)),
        0 < C.length &&
          ((E = new oh(E, e, null, n, c)),
          f.push({ event: E, listeners: C }),
          S ? (E.data = S) : ((S = Ng(n)), S !== null && (E.data = S)))),
        (S = ow ? aw(e, n) : sw(e, n)) &&
          ((u = $s(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new oh('onBeforeInput', 'beforeinput', null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = S)))
    }
    Hg(f, t)
  })
}
function zo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function $s(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      o = i.stateNode
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Lo(e, n)),
      o != null && r.unshift(zo(e, o, i)),
      (o = Lo(e, t)),
      o != null && r.push(zo(e, o, i))),
      (e = e.return)
  }
  return r
}
function Wr(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function gh(e, t, n, r, i) {
  for (var o = t._reactName, a = []; n !== null && n !== r; ) {
    var s = n,
      l = s.alternate,
      u = s.stateNode
    if (l !== null && l === r) break
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      i
        ? ((l = Lo(n, o)), l != null && a.unshift(zo(n, l, s)))
        : i || ((l = Lo(n, o)), l != null && a.push(zo(n, l, s)))),
      (n = n.return)
  }
  a.length !== 0 && e.push({ event: t, listeners: a })
}
var xw = /\r\n?/g,
  bw = /\u0000|\uFFFD/g
function yh(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      xw,
      `
`
    )
    .replace(bw, '')
}
function $a(e, t, n) {
  if (((t = yh(t)), yh(e) !== t && n)) throw Error(H(425))
}
function Ds() {}
var Ac = null,
  Rc = null
function Ic(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  )
}
var Fc = typeof setTimeout == 'function' ? setTimeout : void 0,
  Sw = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  _h = typeof Promise == 'function' ? Promise : void 0,
  Cw =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof _h < 'u'
      ? function (e) {
          return _h.resolve(null).then(e).catch(Ew)
        }
      : Fc
function Ew(e) {
  setTimeout(function () {
    throw e
  })
}
function xu(e, t) {
  var n = t,
    r = 0
  do {
    var i = n.nextSibling
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(i), Io(t)
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = i
  } while (n)
  Io(t)
}
function Qn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
      if (t === '/$') return null
    }
  }
  return e
}
function wh(e) {
  e = e.previousSibling
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e
        t--
      } else n === '/$' && t++
    }
    e = e.previousSibling
  }
  return null
}
var Di = Math.random().toString(36).slice(2),
  Jt = '__reactFiber$' + Di,
  Vo = '__reactProps$' + Di,
  xn = '__reactContainer$' + Di,
  $c = '__reactEvents$' + Di,
  Tw = '__reactListeners$' + Di,
  kw = '__reactHandles$' + Di
function dr(e) {
  var t = e[Jt]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[xn] || n[Jt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = wh(e); e !== null; ) {
          if ((n = e[Jt])) return n
          e = wh(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function fa(e) {
  return (
    (e = e[Jt] || e[xn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function ii(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(H(33))
}
function bl(e) {
  return e[Vo] || null
}
var Dc = [],
  oi = -1
function ir(e) {
  return { current: e }
}
function ce(e) {
  0 > oi || ((e.current = Dc[oi]), (Dc[oi] = null), oi--)
}
function le(e, t) {
  oi++, (Dc[oi] = e.current), (e.current = t)
}
var er = {},
  Ve = ir(er),
  Ye = ir(!1),
  xr = er
function Ei(e, t) {
  var n = e.type.contextTypes
  if (!n) return er
  var r = e.stateNode
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext
  var i = {},
    o
  for (o in n) i[o] = t[o]
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  )
}
function Ze(e) {
  return (e = e.childContextTypes), e != null
}
function zs() {
  ce(Ye), ce(Ve)
}
function xh(e, t, n) {
  if (Ve.current !== er) throw Error(H(168))
  le(Ve, t), le(Ye, n)
}
function Wg(e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n
  r = r.getChildContext()
  for (var i in r) if (!(i in t)) throw Error(H(108, d_(e) || 'Unknown', i))
  return me({}, n, r)
}
function Vs(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || er),
    (xr = Ve.current),
    le(Ve, e),
    le(Ye, Ye.current),
    !0
  )
}
function bh(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(H(169))
  n
    ? ((e = Wg(e, t, xr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ce(Ye),
      ce(Ve),
      le(Ve, e))
    : ce(Ye),
    le(Ye, n)
}
var pn = null,
  Sl = !1,
  bu = !1
function Ug(e) {
  pn === null ? (pn = [e]) : pn.push(e)
}
function jw(e) {
  ;(Sl = !0), Ug(e)
}
function or() {
  if (!bu && pn !== null) {
    bu = !0
    var e = 0,
      t = ie
    try {
      var n = pn
      for (ie = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(pn = null), (Sl = !1)
    } catch (i) {
      throw (pn !== null && (pn = pn.slice(e + 1)), gg(Tf, or), i)
    } finally {
      ;(ie = t), (bu = !1)
    }
  }
  return null
}
var ai = [],
  si = 0,
  Bs = null,
  Hs = 0,
  xt = [],
  bt = 0,
  br = null,
  mn = 1,
  vn = ''
function sr(e, t) {
  ;(ai[si++] = Hs), (ai[si++] = Bs), (Bs = e), (Hs = t)
}
function Gg(e, t, n) {
  ;(xt[bt++] = mn), (xt[bt++] = vn), (xt[bt++] = br), (br = e)
  var r = mn
  e = vn
  var i = 32 - zt(r) - 1
  ;(r &= ~(1 << i)), (n += 1)
  var o = 32 - zt(t) + i
  if (30 < o) {
    var a = i - (i % 5)
    ;(o = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (i -= a),
      (mn = (1 << (32 - zt(t) + i)) | (n << i) | r),
      (vn = o + e)
  } else (mn = (1 << o) | (n << i) | r), (vn = e)
}
function Rf(e) {
  e.return !== null && (sr(e, 1), Gg(e, 1, 0))
}
function If(e) {
  for (; e === Bs; )
    (Bs = ai[--si]), (ai[si] = null), (Hs = ai[--si]), (ai[si] = null)
  for (; e === br; )
    (br = xt[--bt]),
      (xt[bt] = null),
      (vn = xt[--bt]),
      (xt[bt] = null),
      (mn = xt[--bt]),
      (xt[bt] = null)
}
var dt = null,
  lt = null,
  fe = !1,
  $t = null
function Qg(e, t) {
  var n = St(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function Sh(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (dt = e), (lt = Qn(t.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (dt = e), (lt = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = br !== null ? { id: mn, overflow: vn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824
            }),
            (n = St(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (dt = e),
            (lt = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function zc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Vc(e) {
  if (fe) {
    var t = lt
    if (t) {
      var n = t
      if (!Sh(e, t)) {
        if (zc(e)) throw Error(H(418))
        t = Qn(n.nextSibling)
        var r = dt
        t && Sh(e, t)
          ? Qg(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (fe = !1), (dt = e))
      }
    } else {
      if (zc(e)) throw Error(H(418))
      ;(e.flags = (e.flags & -4097) | 2), (fe = !1), (dt = e)
    }
  }
}
function Ch(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  dt = e
}
function Da(e) {
  if (e !== dt) return !1
  if (!fe) return Ch(e), (fe = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Ic(e.type, e.memoizedProps))),
    t && (t = lt))
  ) {
    if (zc(e)) throw (Kg(), Error(H(418)))
    for (; t; ) Qg(e, t), (t = Qn(t.nextSibling))
  }
  if ((Ch(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(H(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              lt = Qn(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      lt = null
    }
  } else lt = dt ? Qn(e.stateNode.nextSibling) : null
  return !0
}
function Kg() {
  for (var e = lt; e; ) e = Qn(e.nextSibling)
}
function Ti() {
  ;(lt = dt = null), (fe = !1)
}
function Ff(e) {
  $t === null ? ($t = [e]) : $t.push(e)
}
var Pw = jn.ReactCurrentBatchConfig
function Ji(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(H(309))
        var r = n.stateNode
      }
      if (!r) throw Error(H(147, e))
      var i = r,
        o = '' + e
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (a) {
            var s = i.refs
            a === null ? delete s[o] : (s[o] = a)
          }),
          (t._stringRef = o),
          t)
    }
    if (typeof e != 'string') throw Error(H(284))
    if (!n._owner) throw Error(H(290, e))
  }
  return e
}
function za(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      H(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  )
}
function Eh(e) {
  var t = e._init
  return t(e._payload)
}
function Xg(e) {
  function t(v, p) {
    if (e) {
      var m = v.deletions
      m === null ? ((v.deletions = [p]), (v.flags |= 16)) : m.push(p)
    }
  }
  function n(v, p) {
    if (!e) return null
    for (; p !== null; ) t(v, p), (p = p.sibling)
    return null
  }
  function r(v, p) {
    for (v = new Map(); p !== null; )
      p.key !== null ? v.set(p.key, p) : v.set(p.index, p), (p = p.sibling)
    return v
  }
  function i(v, p) {
    return (v = Zn(v, p)), (v.index = 0), (v.sibling = null), v
  }
  function o(v, p, m) {
    return (
      (v.index = m),
      e
        ? ((m = v.alternate),
          m !== null
            ? ((m = m.index), m < p ? ((v.flags |= 2), p) : m)
            : ((v.flags |= 2), p))
        : ((v.flags |= 1048576), p)
    )
  }
  function a(v) {
    return e && v.alternate === null && (v.flags |= 2), v
  }
  function s(v, p, m, w) {
    return p === null || p.tag !== 6
      ? ((p = Pu(m, v.mode, w)), (p.return = v), p)
      : ((p = i(p, m)), (p.return = v), p)
  }
  function l(v, p, m, w) {
    var b = m.type
    return b === ei
      ? c(v, p, m.props.children, w, m.key)
      : p !== null &&
        (p.elementType === b ||
          (typeof b == 'object' &&
            b !== null &&
            b.$$typeof === Ln &&
            Eh(b) === p.type))
      ? ((w = i(p, m.props)), (w.ref = Ji(v, p, m)), (w.return = v), w)
      : ((w = ws(m.type, m.key, m.props, null, v.mode, w)),
        (w.ref = Ji(v, p, m)),
        (w.return = v),
        w)
  }
  function u(v, p, m, w) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== m.containerInfo ||
      p.stateNode.implementation !== m.implementation
      ? ((p = Mu(m, v.mode, w)), (p.return = v), p)
      : ((p = i(p, m.children || [])), (p.return = v), p)
  }
  function c(v, p, m, w, b) {
    return p === null || p.tag !== 7
      ? ((p = _r(m, v.mode, w, b)), (p.return = v), p)
      : ((p = i(p, m)), (p.return = v), p)
  }
  function f(v, p, m) {
    if ((typeof p == 'string' && p !== '') || typeof p == 'number')
      return (p = Pu('' + p, v.mode, m)), (p.return = v), p
    if (typeof p == 'object' && p !== null) {
      switch (p.$$typeof) {
        case Pa:
          return (
            (m = ws(p.type, p.key, p.props, null, v.mode, m)),
            (m.ref = Ji(v, null, p)),
            (m.return = v),
            m
          )
        case Jr:
          return (p = Mu(p, v.mode, m)), (p.return = v), p
        case Ln:
          var w = p._init
          return f(v, w(p._payload), m)
      }
      if (so(p) || Qi(p)) return (p = _r(p, v.mode, m, null)), (p.return = v), p
      za(v, p)
    }
    return null
  }
  function d(v, p, m, w) {
    var b = p !== null ? p.key : null
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return b !== null ? null : s(v, p, '' + m, w)
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case Pa:
          return m.key === b ? l(v, p, m, w) : null
        case Jr:
          return m.key === b ? u(v, p, m, w) : null
        case Ln:
          return (b = m._init), d(v, p, b(m._payload), w)
      }
      if (so(m) || Qi(m)) return b !== null ? null : c(v, p, m, w, null)
      za(v, m)
    }
    return null
  }
  function g(v, p, m, w, b) {
    if ((typeof w == 'string' && w !== '') || typeof w == 'number')
      return (v = v.get(m) || null), s(p, v, '' + w, b)
    if (typeof w == 'object' && w !== null) {
      switch (w.$$typeof) {
        case Pa:
          return (v = v.get(w.key === null ? m : w.key) || null), l(p, v, w, b)
        case Jr:
          return (v = v.get(w.key === null ? m : w.key) || null), u(p, v, w, b)
        case Ln:
          var C = w._init
          return g(v, p, m, C(w._payload), b)
      }
      if (so(w) || Qi(w)) return (v = v.get(m) || null), c(p, v, w, b, null)
      za(p, w)
    }
    return null
  }
  function y(v, p, m, w) {
    for (
      var b = null, C = null, S = p, E = (p = 0), T = null;
      S !== null && E < m.length;
      E++
    ) {
      S.index > E ? ((T = S), (S = null)) : (T = S.sibling)
      var k = d(v, S, m[E], w)
      if (k === null) {
        S === null && (S = T)
        break
      }
      e && S && k.alternate === null && t(v, S),
        (p = o(k, p, E)),
        C === null ? (b = k) : (C.sibling = k),
        (C = k),
        (S = T)
    }
    if (E === m.length) return n(v, S), fe && sr(v, E), b
    if (S === null) {
      for (; E < m.length; E++)
        (S = f(v, m[E], w)),
          S !== null &&
            ((p = o(S, p, E)), C === null ? (b = S) : (C.sibling = S), (C = S))
      return fe && sr(v, E), b
    }
    for (S = r(v, S); E < m.length; E++)
      (T = g(S, v, E, m[E], w)),
        T !== null &&
          (e && T.alternate !== null && S.delete(T.key === null ? E : T.key),
          (p = o(T, p, E)),
          C === null ? (b = T) : (C.sibling = T),
          (C = T))
    return (
      e &&
        S.forEach(function (M) {
          return t(v, M)
        }),
      fe && sr(v, E),
      b
    )
  }
  function _(v, p, m, w) {
    var b = Qi(m)
    if (typeof b != 'function') throw Error(H(150))
    if (((m = b.call(m)), m == null)) throw Error(H(151))
    for (
      var C = (b = null), S = p, E = (p = 0), T = null, k = m.next();
      S !== null && !k.done;
      E++, k = m.next()
    ) {
      S.index > E ? ((T = S), (S = null)) : (T = S.sibling)
      var M = d(v, S, k.value, w)
      if (M === null) {
        S === null && (S = T)
        break
      }
      e && S && M.alternate === null && t(v, S),
        (p = o(M, p, E)),
        C === null ? (b = M) : (C.sibling = M),
        (C = M),
        (S = T)
    }
    if (k.done) return n(v, S), fe && sr(v, E), b
    if (S === null) {
      for (; !k.done; E++, k = m.next())
        (k = f(v, k.value, w)),
          k !== null &&
            ((p = o(k, p, E)), C === null ? (b = k) : (C.sibling = k), (C = k))
      return fe && sr(v, E), b
    }
    for (S = r(v, S); !k.done; E++, k = m.next())
      (k = g(S, v, E, k.value, w)),
        k !== null &&
          (e && k.alternate !== null && S.delete(k.key === null ? E : k.key),
          (p = o(k, p, E)),
          C === null ? (b = k) : (C.sibling = k),
          (C = k))
    return (
      e &&
        S.forEach(function (L) {
          return t(v, L)
        }),
      fe && sr(v, E),
      b
    )
  }
  function x(v, p, m, w) {
    if (
      (typeof m == 'object' &&
        m !== null &&
        m.type === ei &&
        m.key === null &&
        (m = m.props.children),
      typeof m == 'object' && m !== null)
    ) {
      switch (m.$$typeof) {
        case Pa:
          e: {
            for (var b = m.key, C = p; C !== null; ) {
              if (C.key === b) {
                if (((b = m.type), b === ei)) {
                  if (C.tag === 7) {
                    n(v, C.sibling),
                      (p = i(C, m.props.children)),
                      (p.return = v),
                      (v = p)
                    break e
                  }
                } else if (
                  C.elementType === b ||
                  (typeof b == 'object' &&
                    b !== null &&
                    b.$$typeof === Ln &&
                    Eh(b) === C.type)
                ) {
                  n(v, C.sibling),
                    (p = i(C, m.props)),
                    (p.ref = Ji(v, C, m)),
                    (p.return = v),
                    (v = p)
                  break e
                }
                n(v, C)
                break
              } else t(v, C)
              C = C.sibling
            }
            m.type === ei
              ? ((p = _r(m.props.children, v.mode, w, m.key)),
                (p.return = v),
                (v = p))
              : ((w = ws(m.type, m.key, m.props, null, v.mode, w)),
                (w.ref = Ji(v, p, m)),
                (w.return = v),
                (v = w))
          }
          return a(v)
        case Jr:
          e: {
            for (C = m.key; p !== null; ) {
              if (p.key === C)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === m.containerInfo &&
                  p.stateNode.implementation === m.implementation
                ) {
                  n(v, p.sibling),
                    (p = i(p, m.children || [])),
                    (p.return = v),
                    (v = p)
                  break e
                } else {
                  n(v, p)
                  break
                }
              else t(v, p)
              p = p.sibling
            }
            ;(p = Mu(m, v.mode, w)), (p.return = v), (v = p)
          }
          return a(v)
        case Ln:
          return (C = m._init), x(v, p, C(m._payload), w)
      }
      if (so(m)) return y(v, p, m, w)
      if (Qi(m)) return _(v, p, m, w)
      za(v, m)
    }
    return (typeof m == 'string' && m !== '') || typeof m == 'number'
      ? ((m = '' + m),
        p !== null && p.tag === 6
          ? (n(v, p.sibling), (p = i(p, m)), (p.return = v), (v = p))
          : (n(v, p), (p = Pu(m, v.mode, w)), (p.return = v), (v = p)),
        a(v))
      : n(v, p)
  }
  return x
}
var ki = Xg(!0),
  Yg = Xg(!1),
  qs = ir(null),
  Ws = null,
  li = null,
  $f = null
function Df() {
  $f = li = Ws = null
}
function zf(e) {
  var t = qs.current
  ce(qs), (e._currentValue = t)
}
function Bc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break
    e = e.return
  }
}
function yi(e, t) {
  ;(Ws = e),
    ($f = li = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Xe = !0), (e.firstContext = null))
}
function jt(e) {
  var t = e._currentValue
  if ($f !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), li === null)) {
      if (Ws === null) throw Error(H(308))
      ;(li = e), (Ws.dependencies = { lanes: 0, firstContext: e })
    } else li = li.next = e
  return t
}
var fr = null
function Vf(e) {
  fr === null ? (fr = [e]) : fr.push(e)
}
function Zg(e, t, n, r) {
  var i = t.interleaved
  return (
    i === null ? ((n.next = n), Vf(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    bn(e, r)
  )
}
function bn(e, t) {
  e.lanes |= t
  var n = e.alternate
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return)
  return n.tag === 3 ? n.stateNode : null
}
var An = !1
function Bf(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null
  }
}
function Jg(e, t) {
  ;(e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
      })
}
function yn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null
  }
}
function Kn(e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), ne & 2)) {
    var i = r.pending
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      bn(e, n)
    )
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Vf(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    bn(e, n)
  )
}
function hs(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), kf(e, n)
  }
}
function Th(e, t) {
  var n = e.updateQueue,
    r = e.alternate
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null
        }
        o === null ? (i = o = a) : (o = o.next = a), (n = n.next)
      } while (n !== null)
      o === null ? (i = o = t) : (o = o.next = t)
    } else i = o = t
    ;(n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects
    }),
      (e.updateQueue = n)
    return
  }
  ;(e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t)
}
function Us(e, t, n, r) {
  var i = e.updateQueue
  An = !1
  var o = i.firstBaseUpdate,
    a = i.lastBaseUpdate,
    s = i.shared.pending
  if (s !== null) {
    i.shared.pending = null
    var l = s,
      u = l.next
    ;(l.next = null), a === null ? (o = u) : (a.next = u), (a = l)
    var c = e.alternate
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== a &&
        (s === null ? (c.firstBaseUpdate = u) : (s.next = u),
        (c.lastBaseUpdate = l)))
  }
  if (o !== null) {
    var f = i.baseState
    ;(a = 0), (c = u = l = null), (s = o)
    do {
      var d = s.lane,
        g = s.eventTime
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null
            })
        e: {
          var y = e,
            _ = s
          switch (((d = t), (g = n), _.tag)) {
            case 1:
              if (((y = _.payload), typeof y == 'function')) {
                f = y.call(g, f, d)
                break e
              }
              f = y
              break e
            case 3:
              y.flags = (y.flags & -65537) | 128
            case 0:
              if (
                ((y = _.payload),
                (d = typeof y == 'function' ? y.call(g, f, d) : y),
                d == null)
              )
                break e
              f = me({}, f, d)
              break e
            case 2:
              An = !0
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [s]) : d.push(s))
      } else
        (g = {
          eventTime: g,
          lane: d,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        }),
          c === null ? ((u = c = g), (l = f)) : (c = c.next = g),
          (a |= d)
      if (((s = s.next), s === null)) {
        if (((s = i.shared.pending), s === null)) break
        ;(d = s),
          (s = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null)
      }
    } while (!0)
    if (
      (c === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t
      do (a |= i.lane), (i = i.next)
      while (i !== t)
    } else o === null && (i.shared.lanes = 0)
    ;(Cr |= a), (e.lanes = a), (e.memoizedState = f)
  }
}
function kh(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function'))
          throw Error(H(191, i))
        i.call(r)
      }
    }
}
var pa = {},
  nn = ir(pa),
  Bo = ir(pa),
  Ho = ir(pa)
function pr(e) {
  if (e === pa) throw Error(H(174))
  return e
}
function Hf(e, t) {
  switch ((le(Ho, t), le(Bo, e), le(nn, pa), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : bc(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = bc(t, e))
  }
  ce(nn), le(nn, t)
}
function ji() {
  ce(nn), ce(Bo), ce(Ho)
}
function e0(e) {
  pr(Ho.current)
  var t = pr(nn.current),
    n = bc(t, e.type)
  t !== n && (le(Bo, e), le(nn, n))
}
function qf(e) {
  Bo.current === e && (ce(nn), ce(Bo))
}
var pe = ir(0)
function Gs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      ;(t.child.return = t), (t = t.child)
      continue
    }
    if (t === e) break
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;(t.sibling.return = t.return), (t = t.sibling)
  }
  return null
}
var Su = []
function Wf() {
  for (var e = 0; e < Su.length; e++) Su[e]._workInProgressVersionPrimary = null
  Su.length = 0
}
var ms = jn.ReactCurrentDispatcher,
  Cu = jn.ReactCurrentBatchConfig,
  Sr = 0,
  he = null,
  be = null,
  Te = null,
  Qs = !1,
  yo = !1,
  qo = 0,
  Mw = 0
function Fe() {
  throw Error(H(321))
}
function Uf(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Wt(e[n], t[n])) return !1
  return !0
}
function Gf(e, t, n, r, i, o) {
  if (
    ((Sr = o),
    (he = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ms.current = e === null || e.memoizedState === null ? Aw : Rw),
    (e = n(r, i)),
    yo)
  ) {
    o = 0
    do {
      if (((yo = !1), (qo = 0), 25 <= o)) throw Error(H(301))
      ;(o += 1),
        (Te = be = null),
        (t.updateQueue = null),
        (ms.current = Iw),
        (e = n(r, i))
    } while (yo)
  }
  if (
    ((ms.current = Ks),
    (t = be !== null && be.next !== null),
    (Sr = 0),
    (Te = be = he = null),
    (Qs = !1),
    t)
  )
    throw Error(H(300))
  return e
}
function Qf() {
  var e = qo !== 0
  return (qo = 0), e
}
function Yt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  }
  return Te === null ? (he.memoizedState = Te = e) : (Te = Te.next = e), Te
}
function Pt() {
  if (be === null) {
    var e = he.alternate
    e = e !== null ? e.memoizedState : null
  } else e = be.next
  var t = Te === null ? he.memoizedState : Te.next
  if (t !== null) (Te = t), (be = e)
  else {
    if (e === null) throw Error(H(310))
    ;(be = e),
      (e = {
        memoizedState: be.memoizedState,
        baseState: be.baseState,
        baseQueue: be.baseQueue,
        queue: be.queue,
        next: null
      }),
      Te === null ? (he.memoizedState = Te = e) : (Te = Te.next = e)
  }
  return Te
}
function Wo(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function Eu(e) {
  var t = Pt(),
    n = t.queue
  if (n === null) throw Error(H(311))
  n.lastRenderedReducer = e
  var r = be,
    i = r.baseQueue,
    o = n.pending
  if (o !== null) {
    if (i !== null) {
      var a = i.next
      ;(i.next = o.next), (o.next = a)
    }
    ;(r.baseQueue = i = o), (n.pending = null)
  }
  if (i !== null) {
    ;(o = i.next), (r = r.baseState)
    var s = (a = null),
      l = null,
      u = o
    do {
      var c = u.lane
      if ((Sr & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action))
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        }
        l === null ? ((s = l = f), (a = r)) : (l = l.next = f),
          (he.lanes |= c),
          (Cr |= c)
      }
      u = u.next
    } while (u !== null && u !== o)
    l === null ? (a = r) : (l.next = s),
      Wt(r, t.memoizedState) || (Xe = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = l),
      (n.lastRenderedState = r)
  }
  if (((e = n.interleaved), e !== null)) {
    i = e
    do (o = i.lane), (he.lanes |= o), (Cr |= o), (i = i.next)
    while (i !== e)
  } else i === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function Tu(e) {
  var t = Pt(),
    n = t.queue
  if (n === null) throw Error(H(311))
  n.lastRenderedReducer = e
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState
  if (i !== null) {
    n.pending = null
    var a = (i = i.next)
    do (o = e(o, a.action)), (a = a.next)
    while (a !== i)
    Wt(o, t.memoizedState) || (Xe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o)
  }
  return [o, r]
}
function t0() {}
function n0(e, t) {
  var n = he,
    r = Pt(),
    i = t(),
    o = !Wt(r.memoizedState, i)
  if (
    (o && ((r.memoizedState = i), (Xe = !0)),
    (r = r.queue),
    Kf(o0.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Te !== null && Te.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Uo(9, i0.bind(null, n, r, i, t), void 0, null),
      ke === null)
    )
      throw Error(H(349))
    Sr & 30 || r0(n, t, i)
  }
  return i
}
function r0(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = he.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (he.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function i0(e, t, n, r) {
  ;(t.value = n), (t.getSnapshot = r), a0(t) && s0(e)
}
function o0(e, t, n) {
  return n(function () {
    a0(t) && s0(e)
  })
}
function a0(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !Wt(e, n)
  } catch {
    return !0
  }
}
function s0(e) {
  var t = bn(e, 1)
  t !== null && Vt(t, e, 1, -1)
}
function jh(e) {
  var t = Yt()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Wo,
      lastRenderedState: e
    }),
    (t.queue = e),
    (e = e.dispatch = Lw.bind(null, he, e)),
    [t.memoizedState, e]
  )
}
function Uo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = he.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (he.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  )
}
function l0() {
  return Pt().memoizedState
}
function vs(e, t, n, r) {
  var i = Yt()
  ;(he.flags |= e),
    (i.memoizedState = Uo(1 | t, n, void 0, r === void 0 ? null : r))
}
function Cl(e, t, n, r) {
  var i = Pt()
  r = r === void 0 ? null : r
  var o = void 0
  if (be !== null) {
    var a = be.memoizedState
    if (((o = a.destroy), r !== null && Uf(r, a.deps))) {
      i.memoizedState = Uo(t, n, o, r)
      return
    }
  }
  ;(he.flags |= e), (i.memoizedState = Uo(1 | t, n, o, r))
}
function Ph(e, t) {
  return vs(8390656, 8, e, t)
}
function Kf(e, t) {
  return Cl(2048, 8, e, t)
}
function u0(e, t) {
  return Cl(4, 2, e, t)
}
function c0(e, t) {
  return Cl(4, 4, e, t)
}
function d0(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null)
      }
    )
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null
      }
    )
}
function f0(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Cl(4, 4, d0.bind(null, t, e), n)
  )
}
function Xf() {}
function p0(e, t) {
  var n = Pt()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Uf(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e)
}
function h0(e, t) {
  var n = Pt()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Uf(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function m0(e, t, n) {
  return Sr & 21
    ? (Wt(n, t) || ((n = wg()), (he.lanes |= n), (Cr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Xe = !0)), (e.memoizedState = n))
}
function Nw(e, t) {
  var n = ie
  ;(ie = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = Cu.transition
  Cu.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(ie = n), (Cu.transition = r)
  }
}
function v0() {
  return Pt().memoizedState
}
function Ow(e, t, n) {
  var r = Yn(e)
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }),
    g0(e))
  )
    y0(t, n)
  else if (((n = Zg(e, t, n, r)), n !== null)) {
    var i = We()
    Vt(n, e, r, i), _0(n, t, r)
  }
}
function Lw(e, t, n) {
  var r = Yn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (g0(e)) y0(t, i)
  else {
    var o = e.alternate
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var a = t.lastRenderedState,
          s = o(a, n)
        if (((i.hasEagerState = !0), (i.eagerState = s), Wt(s, a))) {
          var l = t.interleaved
          l === null
            ? ((i.next = i), Vf(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i)
          return
        }
      } catch {
      } finally {
      }
    ;(n = Zg(e, t, i, r)),
      n !== null && ((i = We()), Vt(n, e, r, i), _0(n, t, r))
  }
}
function g0(e) {
  var t = e.alternate
  return e === he || (t !== null && t === he)
}
function y0(e, t) {
  yo = Qs = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function _0(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), kf(e, n)
  }
}
var Ks = {
    readContext: jt,
    useCallback: Fe,
    useContext: Fe,
    useEffect: Fe,
    useImperativeHandle: Fe,
    useInsertionEffect: Fe,
    useLayoutEffect: Fe,
    useMemo: Fe,
    useReducer: Fe,
    useRef: Fe,
    useState: Fe,
    useDebugValue: Fe,
    useDeferredValue: Fe,
    useTransition: Fe,
    useMutableSource: Fe,
    useSyncExternalStore: Fe,
    useId: Fe,
    unstable_isNewReconciler: !1
  },
  Aw = {
    readContext: jt,
    useCallback: function (e, t) {
      return (Yt().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: jt,
    useEffect: Ph,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        vs(4194308, 4, d0.bind(null, t, e), n)
      )
    },
    useLayoutEffect: function (e, t) {
      return vs(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return vs(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = Yt()
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      )
    },
    useReducer: function (e, t, n) {
      var r = Yt()
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t
        }),
        (r.queue = e),
        (e = e.dispatch = Ow.bind(null, he, e)),
        [r.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = Yt()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: jh,
    useDebugValue: Xf,
    useDeferredValue: function (e) {
      return (Yt().memoizedState = e)
    },
    useTransition: function () {
      var e = jh(!1),
        t = e[0]
      return (e = Nw.bind(null, e[1])), (Yt().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = he,
        i = Yt()
      if (fe) {
        if (n === void 0) throw Error(H(407))
        n = n()
      } else {
        if (((n = t()), ke === null)) throw Error(H(349))
        Sr & 30 || r0(r, t, n)
      }
      i.memoizedState = n
      var o = { value: n, getSnapshot: t }
      return (
        (i.queue = o),
        Ph(o0.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Uo(9, i0.bind(null, r, o, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = Yt(),
        t = ke.identifierPrefix
      if (fe) {
        var n = vn,
          r = mn
        ;(n = (r & ~(1 << (32 - zt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = qo++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = Mw++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1
  },
  Rw = {
    readContext: jt,
    useCallback: p0,
    useContext: jt,
    useEffect: Kf,
    useImperativeHandle: f0,
    useInsertionEffect: u0,
    useLayoutEffect: c0,
    useMemo: h0,
    useReducer: Eu,
    useRef: l0,
    useState: function () {
      return Eu(Wo)
    },
    useDebugValue: Xf,
    useDeferredValue: function (e) {
      var t = Pt()
      return m0(t, be.memoizedState, e)
    },
    useTransition: function () {
      var e = Eu(Wo)[0],
        t = Pt().memoizedState
      return [e, t]
    },
    useMutableSource: t0,
    useSyncExternalStore: n0,
    useId: v0,
    unstable_isNewReconciler: !1
  },
  Iw = {
    readContext: jt,
    useCallback: p0,
    useContext: jt,
    useEffect: Kf,
    useImperativeHandle: f0,
    useInsertionEffect: u0,
    useLayoutEffect: c0,
    useMemo: h0,
    useReducer: Tu,
    useRef: l0,
    useState: function () {
      return Tu(Wo)
    },
    useDebugValue: Xf,
    useDeferredValue: function (e) {
      var t = Pt()
      return be === null ? (t.memoizedState = e) : m0(t, be.memoizedState, e)
    },
    useTransition: function () {
      var e = Tu(Wo)[0],
        t = Pt().memoizedState
      return [e, t]
    },
    useMutableSource: t0,
    useSyncExternalStore: n0,
    useId: v0,
    unstable_isNewReconciler: !1
  }
function At(e, t) {
  if (e && e.defaultProps) {
    ;(t = me({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
function Hc(e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : me({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var El = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ar(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = We(),
      i = Yn(e),
      o = yn(r, i)
    ;(o.payload = t),
      n != null && (o.callback = n),
      (t = Kn(e, o, i)),
      t !== null && (Vt(t, e, i, r), hs(t, e, i))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = We(),
      i = Yn(e),
      o = yn(r, i)
    ;(o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Kn(e, o, i)),
      t !== null && (Vt(t, e, i, r), hs(t, e, i))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = We(),
      r = Yn(e),
      i = yn(n, r)
    ;(i.tag = 2),
      t != null && (i.callback = t),
      (t = Kn(e, i, r)),
      t !== null && (Vt(t, e, r, n), hs(t, e, r))
  }
}
function Mh(e, t, n, r, i, o, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !$o(n, r) || !$o(i, o)
      : !0
  )
}
function w0(e, t, n) {
  var r = !1,
    i = er,
    o = t.contextType
  return (
    typeof o == 'object' && o !== null
      ? (o = jt(o))
      : ((i = Ze(t) ? xr : Ve.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Ei(e, i) : er)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = El),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  )
}
function Nh(e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && El.enqueueReplaceState(t, t.state, null)
}
function qc(e, t, n, r) {
  var i = e.stateNode
  ;(i.props = n), (i.state = e.memoizedState), (i.refs = {}), Bf(e)
  var o = t.contextType
  typeof o == 'object' && o !== null
    ? (i.context = jt(o))
    : ((o = Ze(t) ? xr : Ve.current), (i.context = Ei(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (Hc(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && El.enqueueReplaceState(i, i.state, null),
      Us(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308)
}
function Pi(e, t) {
  try {
    var n = '',
      r = t
    do (n += c_(r)), (r = r.return)
    while (r)
    var i = n
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack
  }
  return { value: e, source: t, stack: i, digest: null }
}
function ku(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function Wc(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var Fw = typeof WeakMap == 'function' ? WeakMap : Map
function x0(e, t, n) {
  ;(n = yn(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = function () {
      Ys || ((Ys = !0), (td = r)), Wc(e, t)
    }),
    n
  )
}
function b0(e, t, n) {
  ;(n = yn(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var i = t.value
    ;(n.payload = function () {
      return r(i)
    }),
      (n.callback = function () {
        Wc(e, t)
      })
  }
  var o = e.stateNode
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        Wc(e, t),
          typeof r != 'function' &&
            (Xn === null ? (Xn = new Set([this])) : Xn.add(this))
        var a = t.stack
        this.componentDidCatch(t.value, { componentStack: a !== null ? a : '' })
      }),
    n
  )
}
function Oh(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new Fw()
    var i = new Set()
    r.set(t, i)
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i))
  i.has(n) || (i.add(n), (e = Yw.bind(null, e, t, n)), t.then(e, e))
}
function Lh(e) {
  do {
    var t
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e
    e = e.return
  } while (e !== null)
  return null
}
function Ah(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = yn(-1, 1)), (t.tag = 2), Kn(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var $w = jn.ReactCurrentOwner,
  Xe = !1
function He(e, t, n, r) {
  t.child = e === null ? Yg(t, null, n, r) : ki(t, e.child, n, r)
}
function Rh(e, t, n, r, i) {
  n = n.render
  var o = t.ref
  return (
    yi(t, i),
    (r = Gf(e, t, n, r, o, i)),
    (n = Qf()),
    e !== null && !Xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Sn(e, t, i))
      : (fe && n && Rf(t), (t.flags |= 1), He(e, t, r, i), t.child)
  )
}
function Ih(e, t, n, r, i) {
  if (e === null) {
    var o = n.type
    return typeof o == 'function' &&
      !ip(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), S0(e, t, o, r, i))
      : ((e = ws(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((o = e.child), !(e.lanes & i))) {
    var a = o.memoizedProps
    if (
      ((n = n.compare), (n = n !== null ? n : $o), n(a, r) && e.ref === t.ref)
    )
      return Sn(e, t, i)
  }
  return (
    (t.flags |= 1),
    (e = Zn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  )
}
function S0(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps
    if ($o(o, r) && e.ref === t.ref)
      if (((Xe = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Xe = !0)
      else return (t.lanes = e.lanes), Sn(e, t, i)
  }
  return Uc(e, t, n, r, i)
}
function C0(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        le(ci, at),
        (at |= n)
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null
          }),
          (t.updateQueue = null),
          le(ci, at),
          (at |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        le(ci, at),
        (at |= r)
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      le(ci, at),
      (at |= r)
  return He(e, t, i, n), t.child
}
function E0(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function Uc(e, t, n, r, i) {
  var o = Ze(n) ? xr : Ve.current
  return (
    (o = Ei(t, o)),
    yi(t, i),
    (n = Gf(e, t, n, r, o, i)),
    (r = Qf()),
    e !== null && !Xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Sn(e, t, i))
      : (fe && r && Rf(t), (t.flags |= 1), He(e, t, n, i), t.child)
  )
}
function Fh(e, t, n, r, i) {
  if (Ze(n)) {
    var o = !0
    Vs(t)
  } else o = !1
  if ((yi(t, i), t.stateNode === null))
    gs(e, t), w0(t, n, r), qc(t, n, r, i), (r = !0)
  else if (e === null) {
    var a = t.stateNode,
      s = t.memoizedProps
    a.props = s
    var l = a.context,
      u = n.contextType
    typeof u == 'object' && u !== null
      ? (u = jt(u))
      : ((u = Ze(n) ? xr : Ve.current), (u = Ei(t, u)))
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == 'function' || typeof a.getSnapshotBeforeUpdate == 'function'
    f ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((s !== r || l !== u) && Nh(t, a, r, u)),
      (An = !1)
    var d = t.memoizedState
    ;(a.state = d),
      Us(t, r, a, i),
      (l = t.memoizedState),
      s !== r || d !== l || Ye.current || An
        ? (typeof c == 'function' && (Hc(t, n, c, r), (l = t.memoizedState)),
          (s = An || Mh(t, n, s, r, d, l, u))
            ? (f ||
                (typeof a.UNSAFE_componentWillMount != 'function' &&
                  typeof a.componentWillMount != 'function') ||
                (typeof a.componentWillMount == 'function' &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == 'function' &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (a.props = r),
          (a.state = l),
          (a.context = u),
          (r = s))
        : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1))
  } else {
    ;(a = t.stateNode),
      Jg(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : At(t.type, s)),
      (a.props = u),
      (f = t.pendingProps),
      (d = a.context),
      (l = n.contextType),
      typeof l == 'object' && l !== null
        ? (l = jt(l))
        : ((l = Ze(n) ? xr : Ve.current), (l = Ei(t, l)))
    var g = n.getDerivedStateFromProps
    ;(c =
      typeof g == 'function' ||
      typeof a.getSnapshotBeforeUpdate == 'function') ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((s !== f || d !== l) && Nh(t, a, r, l)),
      (An = !1),
      (d = t.memoizedState),
      (a.state = d),
      Us(t, r, a, i)
    var y = t.memoizedState
    s !== f || d !== y || Ye.current || An
      ? (typeof g == 'function' && (Hc(t, n, g, r), (y = t.memoizedState)),
        (u = An || Mh(t, n, u, r, d, y, l) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != 'function' &&
                typeof a.componentWillUpdate != 'function') ||
              (typeof a.componentWillUpdate == 'function' &&
                a.componentWillUpdate(r, y, l),
              typeof a.UNSAFE_componentWillUpdate == 'function' &&
                a.UNSAFE_componentWillUpdate(r, y, l)),
            typeof a.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != 'function' ||
              (s === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != 'function' ||
              (s === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (a.props = r),
        (a.state = y),
        (a.context = l),
        (r = u))
      : (typeof a.componentDidUpdate != 'function' ||
          (s === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != 'function' ||
          (s === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1))
  }
  return Gc(e, t, n, r, o, i)
}
function Gc(e, t, n, r, i, o) {
  E0(e, t)
  var a = (t.flags & 128) !== 0
  if (!r && !a) return i && bh(t, n, !1), Sn(e, t, o)
  ;(r = t.stateNode), ($w.current = t)
  var s =
    a && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = ki(t, e.child, null, o)), (t.child = ki(t, null, s, o)))
      : He(e, t, s, o),
    (t.memoizedState = r.state),
    i && bh(t, n, !0),
    t.child
  )
}
function T0(e) {
  var t = e.stateNode
  t.pendingContext
    ? xh(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && xh(e, t.context, !1),
    Hf(e, t.containerInfo)
}
function $h(e, t, n, r, i) {
  return Ti(), Ff(i), (t.flags |= 256), He(e, t, n, r), t.child
}
var Qc = { dehydrated: null, treeContext: null, retryLane: 0 }
function Kc(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function k0(e, t, n) {
  var r = t.pendingProps,
    i = pe.current,
    o = !1,
    a = (t.flags & 128) !== 0,
    s
  if (
    ((s = a) ||
      (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    le(pe, i & 1),
    e === null)
  )
    return (
      Vc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (a = { mode: 'hidden', children: a }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = a))
                : (o = jl(a, r, 0, null)),
              (e = _r(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Kc(n)),
              (t.memoizedState = Qc),
              e)
            : Yf(t, a))
    )
  if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
    return Dw(e, t, a, r, s, i, n)
  if (o) {
    ;(o = r.fallback), (a = t.mode), (i = e.child), (s = i.sibling)
    var l = { mode: 'hidden', children: r.children }
    return (
      !(a & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Zn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      s !== null ? (o = Zn(s, o)) : ((o = _r(o, a, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Kc(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions
            }),
      (o.memoizedState = a),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Qc),
      r
    )
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Zn(o, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  )
}
function Yf(e, t) {
  return (
    (t = jl({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function Va(e, t, n, r) {
  return (
    r !== null && Ff(r),
    ki(t, e.child, null, n),
    (e = Yf(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function Dw(e, t, n, r, i, o, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ku(Error(H(422)))), Va(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = jl({ mode: 'visible', children: r.children }, i, 0, null)),
        (o = _r(o, i, a, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && ki(t, e.child, null, a),
        (t.child.memoizedState = Kc(a)),
        (t.memoizedState = Qc),
        o)
  if (!(t.mode & 1)) return Va(e, t, a, null)
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst
    return (r = s), (o = Error(H(419))), (r = ku(o, r, void 0)), Va(e, t, a, r)
  }
  if (((s = (a & e.childLanes) !== 0), Xe || s)) {
    if (((r = ke), r !== null)) {
      switch (a & -a) {
        case 4:
          i = 2
          break
        case 16:
          i = 8
          break
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32
          break
        case 536870912:
          i = 268435456
          break
        default:
          i = 0
      }
      ;(i = i & (r.suspendedLanes | a) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), bn(e, i), Vt(r, e, i, -1))
    }
    return rp(), (r = ku(Error(H(421)))), Va(e, t, a, r)
  }
  return i.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Zw.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (lt = Qn(i.nextSibling)),
      (dt = t),
      (fe = !0),
      ($t = null),
      e !== null &&
        ((xt[bt++] = mn),
        (xt[bt++] = vn),
        (xt[bt++] = br),
        (mn = e.id),
        (vn = e.overflow),
        (br = t)),
      (t = Yf(t, r.children)),
      (t.flags |= 4096),
      t)
}
function Dh(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), Bc(e.return, t, n)
}
function ju(e, t, n, r, i) {
  var o = e.memoizedState
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i))
}
function j0(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail
  if ((He(e, t, r.children, n), (r = pe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Dh(e, n, t)
        else if (e.tag === 19) Dh(e, n, t)
        else if (e.child !== null) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    r &= 1
  }
  if ((le(pe, r), !(t.mode & 1))) t.memoizedState = null
  else
    switch (i) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Gs(e) === null && (i = n),
            (n = n.sibling)
        ;(n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          ju(t, !1, i, n, o)
        break
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Gs(e) === null)) {
            t.child = i
            break
          }
          ;(e = i.sibling), (i.sibling = n), (n = i), (i = e)
        }
        ju(t, !0, n, null, o)
        break
      case 'together':
        ju(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function gs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function Sn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Cr |= t.lanes),
    !(n & t.childLanes))
  )
    return null
  if (e !== null && t.child !== e.child) throw Error(H(153))
  if (t.child !== null) {
    for (
      e = t.child, n = Zn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Zn(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function zw(e, t, n) {
  switch (t.tag) {
    case 3:
      T0(t), Ti()
      break
    case 5:
      e0(t)
      break
    case 1:
      Ze(t.type) && Vs(t)
      break
    case 4:
      Hf(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value
      le(qs, r._currentValue), (r._currentValue = i)
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (le(pe, pe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? k0(e, t, n)
          : (le(pe, pe.current & 1),
            (e = Sn(e, t, n)),
            e !== null ? e.sibling : null)
      le(pe, pe.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return j0(e, t, n)
        t.flags |= 128
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        le(pe, pe.current),
        r)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), C0(e, t, n)
  }
  return Sn(e, t, n)
}
var P0, Xc, M0, N0
P0 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
    else if (n.tag !== 4 && n.child !== null) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === t) break
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return
      n = n.return
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}
Xc = function () {}
M0 = function (e, t, n, r) {
  var i = e.memoizedProps
  if (i !== r) {
    ;(e = t.stateNode), pr(nn.current)
    var o = null
    switch (n) {
      case 'input':
        ;(i = yc(e, i)), (r = yc(e, r)), (o = [])
        break
      case 'select':
        ;(i = me({}, i, { value: void 0 })),
          (r = me({}, r, { value: void 0 })),
          (o = [])
        break
      case 'textarea':
        ;(i = xc(e, i)), (r = xc(e, r)), (o = [])
        break
      default:
        typeof i.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Ds)
    }
    Sc(n, r)
    var a
    n = null
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === 'style') {
          var s = i[u]
          for (a in s) s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ''))
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (No.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null))
    for (u in r) {
      var l = r[u]
      if (
        ((s = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== s && (l != null || s != null))
      )
        if (u === 'style')
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) ||
                (l && l.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ''))
            for (a in l)
              l.hasOwnProperty(a) &&
                s[a] !== l[a] &&
                (n || (n = {}), (n[a] = l[a]))
          } else n || (o || (o = []), o.push(u, n)), (n = l)
        else
          u === 'dangerouslySetInnerHTML'
            ? ((l = l ? l.__html : void 0),
              (s = s ? s.__html : void 0),
              l != null && s !== l && (o = o || []).push(u, l))
            : u === 'children'
            ? (typeof l != 'string' && typeof l != 'number') ||
              (o = o || []).push(u, '' + l)
            : u !== 'suppressContentEditableWarning' &&
              u !== 'suppressHydrationWarning' &&
              (No.hasOwnProperty(u)
                ? (l != null && u === 'onScroll' && ue('scroll', e),
                  o || s === l || (o = []))
                : (o = o || []).push(u, l))
    }
    n && (o = o || []).push('style', n)
    var u = o
    ;(t.updateQueue = u) && (t.flags |= 4)
  }
}
N0 = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
function eo(e, t) {
  if (!fe)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling)
        n === null ? (e.tail = null) : (n.sibling = null)
        break
      case 'collapsed':
        n = e.tail
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling)
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null)
    }
}
function $e(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling)
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling)
  return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function Vw(e, t, n) {
  var r = t.pendingProps
  switch ((If(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return $e(t), null
    case 1:
      return Ze(t.type) && zs(), $e(t), null
    case 3:
      return (
        (r = t.stateNode),
        ji(),
        ce(Ye),
        ce(Ve),
        Wf(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Da(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), $t !== null && (id($t), ($t = null)))),
        Xc(e, t),
        $e(t),
        null
      )
    case 5:
      qf(t)
      var i = pr(Ho.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        M0(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(H(166))
          return $e(t), null
        }
        if (((e = pr(nn.current)), Da(t))) {
          ;(r = t.stateNode), (n = t.type)
          var o = t.memoizedProps
          switch (((r[Jt] = t), (r[Vo] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              ue('cancel', r), ue('close', r)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              ue('load', r)
              break
            case 'video':
            case 'audio':
              for (i = 0; i < uo.length; i++) ue(uo[i], r)
              break
            case 'source':
              ue('error', r)
              break
            case 'img':
            case 'image':
            case 'link':
              ue('error', r), ue('load', r)
              break
            case 'details':
              ue('toggle', r)
              break
            case 'input':
              Qp(r, o), ue('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!o.multiple }),
                ue('invalid', r)
              break
            case 'textarea':
              Xp(r, o), ue('invalid', r)
          }
          Sc(n, o), (i = null)
          for (var a in o)
            if (o.hasOwnProperty(a)) {
              var s = o[a]
              a === 'children'
                ? typeof s == 'string'
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      $a(r.textContent, s, e),
                    (i = ['children', s]))
                  : typeof s == 'number' &&
                    r.textContent !== '' + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      $a(r.textContent, s, e),
                    (i = ['children', '' + s]))
                : No.hasOwnProperty(a) &&
                  s != null &&
                  a === 'onScroll' &&
                  ue('scroll', r)
            }
          switch (n) {
            case 'input':
              Ma(r), Kp(r, o, !0)
              break
            case 'textarea':
              Ma(r), Yp(r)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof o.onClick == 'function' && (r.onclick = Ds)
          }
          ;(r = i), (t.updateQueue = r), r !== null && (t.flags |= 4)
        } else {
          ;(a = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = og(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = a.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === 'select' &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[Jt] = t),
            (e[Vo] = r),
            P0(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((a = Cc(n, r)), n)) {
              case 'dialog':
                ue('cancel', e), ue('close', e), (i = r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                ue('load', e), (i = r)
                break
              case 'video':
              case 'audio':
                for (i = 0; i < uo.length; i++) ue(uo[i], e)
                i = r
                break
              case 'source':
                ue('error', e), (i = r)
                break
              case 'img':
              case 'image':
              case 'link':
                ue('error', e), ue('load', e), (i = r)
                break
              case 'details':
                ue('toggle', e), (i = r)
                break
              case 'input':
                Qp(e, r), (i = yc(e, r)), ue('invalid', e)
                break
              case 'option':
                i = r
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = me({}, r, { value: void 0 })),
                  ue('invalid', e)
                break
              case 'textarea':
                Xp(e, r), (i = xc(e, r)), ue('invalid', e)
                break
              default:
                i = r
            }
            Sc(n, i), (s = i)
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var l = s[o]
                o === 'style'
                  ? lg(e, l)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((l = l ? l.__html : void 0), l != null && ag(e, l))
                  : o === 'children'
                  ? typeof l == 'string'
                    ? (n !== 'textarea' || l !== '') && Oo(e, l)
                    : typeof l == 'number' && Oo(e, '' + l)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    (No.hasOwnProperty(o)
                      ? l != null && o === 'onScroll' && ue('scroll', e)
                      : l != null && xf(e, o, l, a))
              }
            switch (n) {
              case 'input':
                Ma(e), Kp(e, r, !1)
                break
              case 'textarea':
                Ma(e), Yp(e)
                break
              case 'option':
                r.value != null && e.setAttribute('value', '' + Jn(r.value))
                break
              case 'select':
                ;(e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? hi(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      hi(e, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof i.onClick == 'function' && (e.onclick = Ds)
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus
                break e
              case 'img':
                r = !0
                break e
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
      }
      return $e(t), null
    case 6:
      if (e && t.stateNode != null) N0(e, t, e.memoizedProps, r)
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(H(166))
        if (((n = pr(Ho.current)), pr(nn.current), Da(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Jt] = t),
            (o = r.nodeValue !== n) && ((e = dt), e !== null))
          )
            switch (e.tag) {
              case 3:
                $a(r.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  $a(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          o && (t.flags |= 4)
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Jt] = t),
            (t.stateNode = r)
      }
      return $e(t), null
    case 13:
      if (
        (ce(pe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (fe && lt !== null && t.mode & 1 && !(t.flags & 128))
          Kg(), Ti(), (t.flags |= 98560), (o = !1)
        else if (((o = Da(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(H(318))
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(H(317))
            o[Jt] = t
          } else
            Ti(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          $e(t), (o = !1)
        } else $t !== null && (id($t), ($t = null)), (o = !0)
        if (!o) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || pe.current & 1 ? Se === 0 && (Se = 3) : rp())),
          t.updateQueue !== null && (t.flags |= 4),
          $e(t),
          null)
    case 4:
      return (
        ji(), Xc(e, t), e === null && Do(t.stateNode.containerInfo), $e(t), null
      )
    case 10:
      return zf(t.type._context), $e(t), null
    case 17:
      return Ze(t.type) && zs(), $e(t), null
    case 19:
      if ((ce(pe), (o = t.memoizedState), o === null)) return $e(t), null
      if (((r = (t.flags & 128) !== 0), (a = o.rendering), a === null))
        if (r) eo(o, !1)
        else {
          if (Se !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = Gs(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    eo(o, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (a = o.alternate),
                    a === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = a.childLanes),
                        (o.lanes = a.lanes),
                        (o.child = a.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = a.memoizedProps),
                        (o.memoizedState = a.memoizedState),
                        (o.updateQueue = a.updateQueue),
                        (o.type = a.type),
                        (e = a.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext
                              })),
                    (n = n.sibling)
                return le(pe, (pe.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          o.tail !== null &&
            ye() > Mi &&
            ((t.flags |= 128), (r = !0), eo(o, !1), (t.lanes = 4194304))
        }
      else {
        if (!r)
          if (((e = Gs(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              eo(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !a.alternate && !fe)
            )
              return $e(t), null
          } else
            2 * ye() - o.renderingStartTime > Mi &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), eo(o, !1), (t.lanes = 4194304))
        o.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = o.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (o.last = a))
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ye()),
          (t.sibling = null),
          (n = pe.current),
          le(pe, r ? (n & 1) | 2 : n & 1),
          t)
        : ($e(t), null)
    case 22:
    case 23:
      return (
        np(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? at & 1073741824 && ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : $e(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(H(156, t.tag))
}
function Bw(e, t) {
  switch ((If(t), t.tag)) {
    case 1:
      return (
        Ze(t.type) && zs(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        ji(),
        ce(Ye),
        ce(Ve),
        Wf(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return qf(t), null
    case 13:
      if (
        (ce(pe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(H(340))
        Ti()
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 19:
      return ce(pe), null
    case 4:
      return ji(), null
    case 10:
      return zf(t.type._context), null
    case 22:
    case 23:
      return np(), null
    case 24:
      return null
    default:
      return null
  }
}
var Ba = !1,
  ze = !1,
  Hw = typeof WeakSet == 'function' ? WeakSet : Set,
  W = null
function ui(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (r) {
        ve(e, t, r)
      }
    else n.current = null
}
function Yc(e, t, n) {
  try {
    n()
  } catch (r) {
    ve(e, t, r)
  }
}
var zh = !1
function qw(e, t) {
  if (((Ac = Is), (e = Ig()), Af(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window
        var r = n.getSelection && n.getSelection()
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode
          var i = r.anchorOffset,
            o = r.focusNode
          r = r.focusOffset
          try {
            n.nodeType, o.nodeType
          } catch {
            n = null
            break e
          }
          var a = 0,
            s = -1,
            l = -1,
            u = 0,
            c = 0,
            f = e,
            d = null
          t: for (;;) {
            for (
              var g;
              f !== n || (i !== 0 && f.nodeType !== 3) || (s = a + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (l = a + r),
                f.nodeType === 3 && (a += f.nodeValue.length),
                (g = f.firstChild) !== null;

            )
              (d = f), (f = g)
            for (;;) {
              if (f === e) break t
              if (
                (d === n && ++u === i && (s = a),
                d === o && ++c === r && (l = a),
                (g = f.nextSibling) !== null)
              )
                break
              ;(f = d), (d = f.parentNode)
            }
            f = g
          }
          n = s === -1 || l === -1 ? null : { start: s, end: l }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (Rc = { focusedElem: e, selectionRange: n }, Is = !1, W = t; W !== null; )
    if (((t = W), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (W = e)
    else
      for (; W !== null; ) {
        t = W
        try {
          var y = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (y !== null) {
                  var _ = y.memoizedProps,
                    x = y.memoizedState,
                    v = t.stateNode,
                    p = v.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? _ : At(t.type, _),
                      x
                    )
                  v.__reactInternalSnapshotBeforeUpdate = p
                }
                break
              case 3:
                var m = t.stateNode.containerInfo
                m.nodeType === 1
                  ? (m.textContent = '')
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(H(163))
            }
        } catch (w) {
          ve(t, t.return, w)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (W = e)
          break
        }
        W = t.return
      }
  return (y = zh), (zh = !1), y
}
function _o(e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next)
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy
        ;(i.destroy = void 0), o !== void 0 && Yc(t, n, o)
      }
      i = i.next
    } while (i !== r)
  }
}
function Tl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next)
    do {
      if ((n.tag & e) === e) {
        var r = n.create
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}
function Zc(e) {
  var t = e.ref
  if (t !== null) {
    var n = e.stateNode
    switch (e.tag) {
      case 5:
        e = n
        break
      default:
        e = n
    }
    typeof t == 'function' ? t(e) : (t.current = e)
  }
}
function O0(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), O0(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Jt], delete t[Vo], delete t[$c], delete t[Tw], delete t[kw])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function L0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Vh(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || L0(e.return)) return null
      e = e.return
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function Jc(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ds))
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Jc(e, t, n), e = e.sibling; e !== null; ) Jc(e, t, n), (e = e.sibling)
}
function ed(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ed(e, t, n), e = e.sibling; e !== null; ) ed(e, t, n), (e = e.sibling)
}
var Ne = null,
  Rt = !1
function Mn(e, t, n) {
  for (n = n.child; n !== null; ) A0(e, t, n), (n = n.sibling)
}
function A0(e, t, n) {
  if (tn && typeof tn.onCommitFiberUnmount == 'function')
    try {
      tn.onCommitFiberUnmount(yl, n)
    } catch {}
  switch (n.tag) {
    case 5:
      ze || ui(n, t)
    case 6:
      var r = Ne,
        i = Rt
      ;(Ne = null),
        Mn(e, t, n),
        (Ne = r),
        (Rt = i),
        Ne !== null &&
          (Rt
            ? ((e = Ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ne.removeChild(n.stateNode))
      break
    case 18:
      Ne !== null &&
        (Rt
          ? ((e = Ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? xu(e.parentNode, n)
              : e.nodeType === 1 && xu(e, n),
            Io(e))
          : xu(Ne, n.stateNode))
      break
    case 4:
      ;(r = Ne),
        (i = Rt),
        (Ne = n.stateNode.containerInfo),
        (Rt = !0),
        Mn(e, t, n),
        (Ne = r),
        (Rt = i)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ze &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next
        do {
          var o = i,
            a = o.destroy
          ;(o = o.tag),
            a !== void 0 && (o & 2 || o & 4) && Yc(n, t, a),
            (i = i.next)
        } while (i !== r)
      }
      Mn(e, t, n)
      break
    case 1:
      if (
        !ze &&
        (ui(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          ;(r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount()
        } catch (s) {
          ve(n, t, s)
        }
      Mn(e, t, n)
      break
    case 21:
      Mn(e, t, n)
      break
    case 22:
      n.mode & 1
        ? ((ze = (r = ze) || n.memoizedState !== null), Mn(e, t, n), (ze = r))
        : Mn(e, t, n)
      break
    default:
      Mn(e, t, n)
  }
}
function Bh(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new Hw()),
      t.forEach(function (r) {
        var i = Jw.bind(null, e, r)
        n.has(r) || (n.add(r), r.then(i, i))
      })
  }
}
function Ot(e, t) {
  var n = t.deletions
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r]
      try {
        var o = e,
          a = t,
          s = a
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              ;(Ne = s.stateNode), (Rt = !1)
              break e
            case 3:
              ;(Ne = s.stateNode.containerInfo), (Rt = !0)
              break e
            case 4:
              ;(Ne = s.stateNode.containerInfo), (Rt = !0)
              break e
          }
          s = s.return
        }
        if (Ne === null) throw Error(H(160))
        A0(o, a, i), (Ne = null), (Rt = !1)
        var l = i.alternate
        l !== null && (l.return = null), (i.return = null)
      } catch (u) {
        ve(i, t, u)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) R0(t, e), (t = t.sibling)
}
function R0(e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ot(t, e), Kt(e), r & 4)) {
        try {
          _o(3, e, e.return), Tl(3, e)
        } catch (_) {
          ve(e, e.return, _)
        }
        try {
          _o(5, e, e.return)
        } catch (_) {
          ve(e, e.return, _)
        }
      }
      break
    case 1:
      Ot(t, e), Kt(e), r & 512 && n !== null && ui(n, n.return)
      break
    case 5:
      if (
        (Ot(t, e),
        Kt(e),
        r & 512 && n !== null && ui(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode
        try {
          Oo(i, '')
        } catch (_) {
          ve(e, e.return, _)
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          a = n !== null ? n.memoizedProps : o,
          s = e.type,
          l = e.updateQueue
        if (((e.updateQueue = null), l !== null))
          try {
            s === 'input' && o.type === 'radio' && o.name != null && rg(i, o),
              Cc(s, a)
            var u = Cc(s, o)
            for (a = 0; a < l.length; a += 2) {
              var c = l[a],
                f = l[a + 1]
              c === 'style'
                ? lg(i, f)
                : c === 'dangerouslySetInnerHTML'
                ? ag(i, f)
                : c === 'children'
                ? Oo(i, f)
                : xf(i, c, f, u)
            }
            switch (s) {
              case 'input':
                _c(i, o)
                break
              case 'textarea':
                ig(i, o)
                break
              case 'select':
                var d = i._wrapperState.wasMultiple
                i._wrapperState.wasMultiple = !!o.multiple
                var g = o.value
                g != null
                  ? hi(i, !!o.multiple, g, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? hi(i, !!o.multiple, o.defaultValue, !0)
                      : hi(i, !!o.multiple, o.multiple ? [] : '', !1))
            }
            i[Vo] = o
          } catch (_) {
            ve(e, e.return, _)
          }
      }
      break
    case 6:
      if ((Ot(t, e), Kt(e), r & 4)) {
        if (e.stateNode === null) throw Error(H(162))
        ;(i = e.stateNode), (o = e.memoizedProps)
        try {
          i.nodeValue = o
        } catch (_) {
          ve(e, e.return, _)
        }
      }
      break
    case 3:
      if (
        (Ot(t, e), Kt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Io(t.containerInfo)
        } catch (_) {
          ve(e, e.return, _)
        }
      break
    case 4:
      Ot(t, e), Kt(e)
      break
    case 13:
      Ot(t, e),
        Kt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (ep = ye())),
        r & 4 && Bh(e)
      break
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ze = (u = ze) || c), Ot(t, e), (ze = u)) : Ot(t, e),
        Kt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (W = e, c = e.child; c !== null; ) {
            for (f = W = c; W !== null; ) {
              switch (((d = W), (g = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  _o(4, d, d.return)
                  break
                case 1:
                  ui(d, d.return)
                  var y = d.stateNode
                  if (typeof y.componentWillUnmount == 'function') {
                    ;(r = d), (n = d.return)
                    try {
                      ;(t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount()
                    } catch (_) {
                      ve(r, n, _)
                    }
                  }
                  break
                case 5:
                  ui(d, d.return)
                  break
                case 22:
                  if (d.memoizedState !== null) {
                    qh(f)
                    continue
                  }
              }
              g !== null ? ((g.return = d), (W = g)) : qh(f)
            }
            c = c.sibling
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f
              try {
                ;(i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((s = f.stateNode),
                      (l = f.memoizedProps.style),
                      (a =
                        l != null && l.hasOwnProperty('display')
                          ? l.display
                          : null),
                      (s.style.display = sg('display', a)))
              } catch (_) {
                ve(e, e.return, _)
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? '' : f.memoizedProps
              } catch (_) {
                ve(e, e.return, _)
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            ;(f.child.return = f), (f = f.child)
            continue
          }
          if (f === e) break e
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e
            c === f && (c = null), (f = f.return)
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling)
        }
      }
      break
    case 19:
      Ot(t, e), Kt(e), r & 4 && Bh(e)
      break
    case 21:
      break
    default:
      Ot(t, e), Kt(e)
  }
}
function Kt(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (L0(n)) {
            var r = n
            break e
          }
          n = n.return
        }
        throw Error(H(160))
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode
          r.flags & 32 && (Oo(i, ''), (r.flags &= -33))
          var o = Vh(e)
          ed(e, o, i)
          break
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            s = Vh(e)
          Jc(e, s, a)
          break
        default:
          throw Error(H(161))
      }
    } catch (l) {
      ve(e, e.return, l)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function Ww(e, t, n) {
  ;(W = e), I0(e)
}
function I0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; W !== null; ) {
    var i = W,
      o = i.child
    if (i.tag === 22 && r) {
      var a = i.memoizedState !== null || Ba
      if (!a) {
        var s = i.alternate,
          l = (s !== null && s.memoizedState !== null) || ze
        s = Ba
        var u = ze
        if (((Ba = a), (ze = l) && !u))
          for (W = i; W !== null; )
            (a = W),
              (l = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Wh(i)
                : l !== null
                ? ((l.return = a), (W = l))
                : Wh(i)
        for (; o !== null; ) (W = o), I0(o), (o = o.sibling)
        ;(W = i), (Ba = s), (ze = u)
      }
      Hh(e)
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (W = o)) : Hh(e)
  }
}
function Hh(e) {
  for (; W !== null; ) {
    var t = W
    if (t.flags & 8772) {
      var n = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ze || Tl(5, t)
              break
            case 1:
              var r = t.stateNode
              if (t.flags & 4 && !ze)
                if (n === null) r.componentDidMount()
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : At(t.type, n.memoizedProps)
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  )
                }
              var o = t.updateQueue
              o !== null && kh(t, o, r)
              break
            case 3:
              var a = t.updateQueue
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode
                      break
                    case 1:
                      n = t.child.stateNode
                  }
                kh(t, a, n)
              }
              break
            case 5:
              var s = t.stateNode
              if (n === null && t.flags & 4) {
                n = s
                var l = t.memoizedProps
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    l.autoFocus && n.focus()
                    break
                  case 'img':
                    l.src && (n.src = l.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate
                if (u !== null) {
                  var c = u.memoizedState
                  if (c !== null) {
                    var f = c.dehydrated
                    f !== null && Io(f)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error(H(163))
          }
        ze || (t.flags & 512 && Zc(t))
      } catch (d) {
        ve(t, t.return, d)
      }
    }
    if (t === e) {
      W = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;(n.return = t.return), (W = n)
      break
    }
    W = t.return
  }
}
function qh(e) {
  for (; W !== null; ) {
    var t = W
    if (t === e) {
      W = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;(n.return = t.return), (W = n)
      break
    }
    W = t.return
  }
}
function Wh(e) {
  for (; W !== null; ) {
    var t = W
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            Tl(4, t)
          } catch (l) {
            ve(t, n, l)
          }
          break
        case 1:
          var r = t.stateNode
          if (typeof r.componentDidMount == 'function') {
            var i = t.return
            try {
              r.componentDidMount()
            } catch (l) {
              ve(t, i, l)
            }
          }
          var o = t.return
          try {
            Zc(t)
          } catch (l) {
            ve(t, o, l)
          }
          break
        case 5:
          var a = t.return
          try {
            Zc(t)
          } catch (l) {
            ve(t, a, l)
          }
      }
    } catch (l) {
      ve(t, t.return, l)
    }
    if (t === e) {
      W = null
      break
    }
    var s = t.sibling
    if (s !== null) {
      ;(s.return = t.return), (W = s)
      break
    }
    W = t.return
  }
}
var Uw = Math.ceil,
  Xs = jn.ReactCurrentDispatcher,
  Zf = jn.ReactCurrentOwner,
  Et = jn.ReactCurrentBatchConfig,
  ne = 0,
  ke = null,
  we = null,
  Le = 0,
  at = 0,
  ci = ir(0),
  Se = 0,
  Go = null,
  Cr = 0,
  kl = 0,
  Jf = 0,
  wo = null,
  Ke = null,
  ep = 0,
  Mi = 1 / 0,
  fn = null,
  Ys = !1,
  td = null,
  Xn = null,
  Ha = !1,
  zn = null,
  Zs = 0,
  xo = 0,
  nd = null,
  ys = -1,
  _s = 0
function We() {
  return ne & 6 ? ye() : ys !== -1 ? ys : (ys = ye())
}
function Yn(e) {
  return e.mode & 1
    ? ne & 2 && Le !== 0
      ? Le & -Le
      : Pw.transition !== null
      ? (_s === 0 && (_s = wg()), _s)
      : ((e = ie),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : kg(e.type))),
        e)
    : 1
}
function Vt(e, t, n, r) {
  if (50 < xo) throw ((xo = 0), (nd = null), Error(H(185)))
  ca(e, n, r),
    (!(ne & 2) || e !== ke) &&
      (e === ke && (!(ne & 2) && (kl |= n), Se === 4 && Fn(e, Le)),
      Je(e, r),
      n === 1 && ne === 0 && !(t.mode & 1) && ((Mi = ye() + 500), Sl && or()))
}
function Je(e, t) {
  var n = e.callbackNode
  P_(e, t)
  var r = Rs(e, e === ke ? Le : 0)
  if (r === 0)
    n !== null && eh(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && eh(n), t === 1))
      e.tag === 0 ? jw(Uh.bind(null, e)) : Ug(Uh.bind(null, e)),
        Cw(function () {
          !(ne & 6) && or()
        }),
        (n = null)
    else {
      switch (xg(r)) {
        case 1:
          n = Tf
          break
        case 4:
          n = yg
          break
        case 16:
          n = As
          break
        case 536870912:
          n = _g
          break
        default:
          n = As
      }
      n = q0(n, F0.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function F0(e, t) {
  if (((ys = -1), (_s = 0), ne & 6)) throw Error(H(327))
  var n = e.callbackNode
  if (_i() && e.callbackNode !== n) return null
  var r = Rs(e, e === ke ? Le : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = Js(e, r)
  else {
    t = r
    var i = ne
    ne |= 2
    var o = D0()
    ;(ke !== e || Le !== t) && ((fn = null), (Mi = ye() + 500), yr(e, t))
    do
      try {
        Kw()
        break
      } catch (s) {
        $0(e, s)
      }
    while (!0)
    Df(),
      (Xs.current = o),
      (ne = i),
      we !== null ? (t = 0) : ((ke = null), (Le = 0), (t = Se))
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Pc(e)), i !== 0 && ((r = i), (t = rd(e, i)))), t === 1)
    )
      throw ((n = Go), yr(e, 0), Fn(e, r), Je(e, ye()), n)
    if (t === 6) Fn(e, r)
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Gw(i) &&
          ((t = Js(e, r)),
          t === 2 && ((o = Pc(e)), o !== 0 && ((r = o), (t = rd(e, o)))),
          t === 1))
      )
        throw ((n = Go), yr(e, 0), Fn(e, r), Je(e, ye()), n)
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(H(345))
        case 2:
          lr(e, Ke, fn)
          break
        case 3:
          if (
            (Fn(e, r), (r & 130023424) === r && ((t = ep + 500 - ye()), 10 < t))
          ) {
            if (Rs(e, 0) !== 0) break
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              We(), (e.pingedLanes |= e.suspendedLanes & i)
              break
            }
            e.timeoutHandle = Fc(lr.bind(null, e, Ke, fn), t)
            break
          }
          lr(e, Ke, fn)
          break
        case 4:
          if ((Fn(e, r), (r & 4194240) === r)) break
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var a = 31 - zt(r)
            ;(o = 1 << a), (a = t[a]), a > i && (i = a), (r &= ~o)
          }
          if (
            ((r = i),
            (r = ye() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Uw(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Fc(lr.bind(null, e, Ke, fn), r)
            break
          }
          lr(e, Ke, fn)
          break
        case 5:
          lr(e, Ke, fn)
          break
        default:
          throw Error(H(329))
      }
    }
  }
  return Je(e, ye()), e.callbackNode === n ? F0.bind(null, e) : null
}
function rd(e, t) {
  var n = wo
  return (
    e.current.memoizedState.isDehydrated && (yr(e, t).flags |= 256),
    (e = Js(e, t)),
    e !== 2 && ((t = Ke), (Ke = n), t !== null && id(t)),
    e
  )
}
function id(e) {
  Ke === null ? (Ke = e) : Ke.push.apply(Ke, e)
}
function Gw(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot
          i = i.value
          try {
            if (!Wt(o(), i)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n)
    else {
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return !0
}
function Fn(e, t) {
  for (
    t &= ~Jf,
      t &= ~kl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - zt(t),
      r = 1 << n
    ;(e[n] = -1), (t &= ~r)
  }
}
function Uh(e) {
  if (ne & 6) throw Error(H(327))
  _i()
  var t = Rs(e, 0)
  if (!(t & 1)) return Je(e, ye()), null
  var n = Js(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = Pc(e)
    r !== 0 && ((t = r), (n = rd(e, r)))
  }
  if (n === 1) throw ((n = Go), yr(e, 0), Fn(e, t), Je(e, ye()), n)
  if (n === 6) throw Error(H(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    lr(e, Ke, fn),
    Je(e, ye()),
    null
  )
}
function tp(e, t) {
  var n = ne
  ne |= 1
  try {
    return e(t)
  } finally {
    ;(ne = n), ne === 0 && ((Mi = ye() + 500), Sl && or())
  }
}
function Er(e) {
  zn !== null && zn.tag === 0 && !(ne & 6) && _i()
  var t = ne
  ne |= 1
  var n = Et.transition,
    r = ie
  try {
    if (((Et.transition = null), (ie = 1), e)) return e()
  } finally {
    ;(ie = r), (Et.transition = n), (ne = t), !(ne & 6) && or()
  }
}
function np() {
  ;(at = ci.current), ce(ci)
}
function yr(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), Sw(n)), we !== null))
    for (n = we.return; n !== null; ) {
      var r = n
      switch ((If(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && zs()
          break
        case 3:
          ji(), ce(Ye), ce(Ve), Wf()
          break
        case 5:
          qf(r)
          break
        case 4:
          ji()
          break
        case 13:
          ce(pe)
          break
        case 19:
          ce(pe)
          break
        case 10:
          zf(r.type._context)
          break
        case 22:
        case 23:
          np()
      }
      n = n.return
    }
  if (
    ((ke = e),
    (we = e = Zn(e.current, null)),
    (Le = at = t),
    (Se = 0),
    (Go = null),
    (Jf = kl = Cr = 0),
    (Ke = wo = null),
    fr !== null)
  ) {
    for (t = 0; t < fr.length; t++)
      if (((n = fr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var i = r.next,
          o = n.pending
        if (o !== null) {
          var a = o.next
          ;(o.next = i), (r.next = a)
        }
        n.pending = r
      }
    fr = null
  }
  return e
}
function $0(e, t) {
  do {
    var n = we
    try {
      if ((Df(), (ms.current = Ks), Qs)) {
        for (var r = he.memoizedState; r !== null; ) {
          var i = r.queue
          i !== null && (i.pending = null), (r = r.next)
        }
        Qs = !1
      }
      if (
        ((Sr = 0),
        (Te = be = he = null),
        (yo = !1),
        (qo = 0),
        (Zf.current = null),
        n === null || n.return === null)
      ) {
        ;(Se = 1), (Go = t), (we = null)
        break
      }
      e: {
        var o = e,
          a = n.return,
          s = n,
          l = t
        if (
          ((t = Le),
          (s.flags |= 32768),
          l !== null && typeof l == 'object' && typeof l.then == 'function')
        ) {
          var u = l,
            c = s,
            f = c.tag
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null))
          }
          var g = Lh(a)
          if (g !== null) {
            ;(g.flags &= -257),
              Ah(g, a, s, o, t),
              g.mode & 1 && Oh(o, u, t),
              (t = g),
              (l = u)
            var y = t.updateQueue
            if (y === null) {
              var _ = new Set()
              _.add(l), (t.updateQueue = _)
            } else y.add(l)
            break e
          } else {
            if (!(t & 1)) {
              Oh(o, u, t), rp()
              break e
            }
            l = Error(H(426))
          }
        } else if (fe && s.mode & 1) {
          var x = Lh(a)
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              Ah(x, a, s, o, t),
              Ff(Pi(l, s))
            break e
          }
        }
        ;(o = l = Pi(l, s)),
          Se !== 4 && (Se = 2),
          wo === null ? (wo = [o]) : wo.push(o),
          (o = a)
        do {
          switch (o.tag) {
            case 3:
              ;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
              var v = x0(o, l, t)
              Th(o, v)
              break e
            case 1:
              s = l
              var p = o.type,
                m = o.stateNode
              if (
                !(o.flags & 128) &&
                (typeof p.getDerivedStateFromError == 'function' ||
                  (m !== null &&
                    typeof m.componentDidCatch == 'function' &&
                    (Xn === null || !Xn.has(m))))
              ) {
                ;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
                var w = b0(o, s, t)
                Th(o, w)
                break e
              }
          }
          o = o.return
        } while (o !== null)
      }
      V0(n)
    } catch (b) {
      ;(t = b), we === n && n !== null && (we = n = n.return)
      continue
    }
    break
  } while (!0)
}
function D0() {
  var e = Xs.current
  return (Xs.current = Ks), e === null ? Ks : e
}
function rp() {
  ;(Se === 0 || Se === 3 || Se === 2) && (Se = 4),
    ke === null || (!(Cr & 268435455) && !(kl & 268435455)) || Fn(ke, Le)
}
function Js(e, t) {
  var n = ne
  ne |= 2
  var r = D0()
  ;(ke !== e || Le !== t) && ((fn = null), yr(e, t))
  do
    try {
      Qw()
      break
    } catch (i) {
      $0(e, i)
    }
  while (!0)
  if ((Df(), (ne = n), (Xs.current = r), we !== null)) throw Error(H(261))
  return (ke = null), (Le = 0), Se
}
function Qw() {
  for (; we !== null; ) z0(we)
}
function Kw() {
  for (; we !== null && !w_(); ) z0(we)
}
function z0(e) {
  var t = H0(e.alternate, e, at)
  ;(e.memoizedProps = e.pendingProps),
    t === null ? V0(e) : (we = t),
    (Zf.current = null)
}
function V0(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Bw(n, t)), n !== null)) {
        ;(n.flags &= 32767), (we = n)
        return
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(Se = 6), (we = null)
        return
      }
    } else if (((n = Vw(n, t, at)), n !== null)) {
      we = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      we = t
      return
    }
    we = t = e
  } while (t !== null)
  Se === 0 && (Se = 5)
}
function lr(e, t, n) {
  var r = ie,
    i = Et.transition
  try {
    ;(Et.transition = null), (ie = 1), Xw(e, t, n, r)
  } finally {
    ;(Et.transition = i), (ie = r)
  }
  return null
}
function Xw(e, t, n, r) {
  do _i()
  while (zn !== null)
  if (ne & 6) throw Error(H(327))
  n = e.finishedWork
  var i = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(H(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var o = n.lanes | n.childLanes
  if (
    (M_(e, o),
    e === ke && ((we = ke = null), (Le = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ha ||
      ((Ha = !0),
      q0(As, function () {
        return _i(), null
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    ;(o = Et.transition), (Et.transition = null)
    var a = ie
    ie = 1
    var s = ne
    ;(ne |= 4),
      (Zf.current = null),
      qw(e, n),
      R0(n, e),
      vw(Rc),
      (Is = !!Ac),
      (Rc = Ac = null),
      (e.current = n),
      Ww(n),
      x_(),
      (ne = s),
      (ie = a),
      (Et.transition = o)
  } else e.current = n
  if (
    (Ha && ((Ha = !1), (zn = e), (Zs = i)),
    (o = e.pendingLanes),
    o === 0 && (Xn = null),
    C_(n.stateNode),
    Je(e, ye()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest })
  if (Ys) throw ((Ys = !1), (e = td), (td = null), e)
  return (
    Zs & 1 && e.tag !== 0 && _i(),
    (o = e.pendingLanes),
    o & 1 ? (e === nd ? xo++ : ((xo = 0), (nd = e))) : (xo = 0),
    or(),
    null
  )
}
function _i() {
  if (zn !== null) {
    var e = xg(Zs),
      t = Et.transition,
      n = ie
    try {
      if (((Et.transition = null), (ie = 16 > e ? 16 : e), zn === null))
        var r = !1
      else {
        if (((e = zn), (zn = null), (Zs = 0), ne & 6)) throw Error(H(331))
        var i = ne
        for (ne |= 4, W = e.current; W !== null; ) {
          var o = W,
            a = o.child
          if (W.flags & 16) {
            var s = o.deletions
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l]
                for (W = u; W !== null; ) {
                  var c = W
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _o(8, c, o)
                  }
                  var f = c.child
                  if (f !== null) (f.return = c), (W = f)
                  else
                    for (; W !== null; ) {
                      c = W
                      var d = c.sibling,
                        g = c.return
                      if ((O0(c), c === u)) {
                        W = null
                        break
                      }
                      if (d !== null) {
                        ;(d.return = g), (W = d)
                        break
                      }
                      W = g
                    }
                }
              }
              var y = o.alternate
              if (y !== null) {
                var _ = y.child
                if (_ !== null) {
                  y.child = null
                  do {
                    var x = _.sibling
                    ;(_.sibling = null), (_ = x)
                  } while (_ !== null)
                }
              }
              W = o
            }
          }
          if (o.subtreeFlags & 2064 && a !== null) (a.return = o), (W = a)
          else
            e: for (; W !== null; ) {
              if (((o = W), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    _o(9, o, o.return)
                }
              var v = o.sibling
              if (v !== null) {
                ;(v.return = o.return), (W = v)
                break e
              }
              W = o.return
            }
        }
        var p = e.current
        for (W = p; W !== null; ) {
          a = W
          var m = a.child
          if (a.subtreeFlags & 2064 && m !== null) (m.return = a), (W = m)
          else
            e: for (a = p; W !== null; ) {
              if (((s = W), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Tl(9, s)
                  }
                } catch (b) {
                  ve(s, s.return, b)
                }
              if (s === a) {
                W = null
                break e
              }
              var w = s.sibling
              if (w !== null) {
                ;(w.return = s.return), (W = w)
                break e
              }
              W = s.return
            }
        }
        if (
          ((ne = i), or(), tn && typeof tn.onPostCommitFiberRoot == 'function')
        )
          try {
            tn.onPostCommitFiberRoot(yl, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;(ie = n), (Et.transition = t)
    }
  }
  return !1
}
function Gh(e, t, n) {
  ;(t = Pi(n, t)),
    (t = x0(e, t, 1)),
    (e = Kn(e, t, 1)),
    (t = We()),
    e !== null && (ca(e, 1, t), Je(e, t))
}
function ve(e, t, n) {
  if (e.tag === 3) Gh(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Gh(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Xn === null || !Xn.has(r)))
        ) {
          ;(e = Pi(n, e)),
            (e = b0(t, e, 1)),
            (t = Kn(t, e, 1)),
            (e = We()),
            t !== null && (ca(t, 1, e), Je(t, e))
          break
        }
      }
      t = t.return
    }
}
function Yw(e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = We()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ke === e &&
      (Le & n) === n &&
      (Se === 4 || (Se === 3 && (Le & 130023424) === Le && 500 > ye() - ep)
        ? yr(e, 0)
        : (Jf |= n)),
    Je(e, t)
}
function B0(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = La), (La <<= 1), !(La & 130023424) && (La = 4194304))
      : (t = 1))
  var n = We()
  ;(e = bn(e, t)), e !== null && (ca(e, t, n), Je(e, n))
}
function Zw(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), B0(e, n)
}
function Jw(e, t) {
  var n = 0
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState
      i !== null && (n = i.retryLane)
      break
    case 19:
      r = e.stateNode
      break
    default:
      throw Error(H(314))
  }
  r !== null && r.delete(t), B0(e, n)
}
var H0
H0 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ye.current) Xe = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Xe = !1), zw(e, t, n)
      Xe = !!(e.flags & 131072)
    }
  else (Xe = !1), fe && t.flags & 1048576 && Gg(t, Hs, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      gs(e, t), (e = t.pendingProps)
      var i = Ei(t, Ve.current)
      yi(t, n), (i = Gf(null, t, r, e, i, n))
      var o = Qf()
      return (
        (t.flags |= 1),
        typeof i == 'object' &&
        i !== null &&
        typeof i.render == 'function' &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ze(r) ? ((o = !0), Vs(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Bf(t),
            (i.updater = El),
            (t.stateNode = i),
            (i._reactInternals = t),
            qc(t, r, e, n),
            (t = Gc(null, t, r, !0, o, n)))
          : ((t.tag = 0), fe && o && Rf(t), He(null, t, i, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch (
          (gs(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = tx(r)),
          (e = At(r, e)),
          i)
        ) {
          case 0:
            t = Uc(null, t, r, e, n)
            break e
          case 1:
            t = Fh(null, t, r, e, n)
            break e
          case 11:
            t = Rh(null, t, r, e, n)
            break e
          case 14:
            t = Ih(null, t, r, At(r.type, e), n)
            break e
        }
        throw Error(H(306, r, ''))
      }
      return t
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : At(r, i)),
        Uc(e, t, r, i, n)
      )
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : At(r, i)),
        Fh(e, t, r, i, n)
      )
    case 3:
      e: {
        if ((T0(t), e === null)) throw Error(H(387))
        ;(r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Jg(e, t),
          Us(t, r, null, n)
        var a = t.memoizedState
        if (((r = a.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            ;(i = Pi(Error(H(423)), t)), (t = $h(e, t, r, n, i))
            break e
          } else if (r !== i) {
            ;(i = Pi(Error(H(424)), t)), (t = $h(e, t, r, n, i))
            break e
          } else
            for (
              lt = Qn(t.stateNode.containerInfo.firstChild),
                dt = t,
                fe = !0,
                $t = null,
                n = Yg(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((Ti(), r === i)) {
            t = Sn(e, t, n)
            break e
          }
          He(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        e0(t),
        e === null && Vc(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (a = i.children),
        Ic(r, i) ? (a = null) : o !== null && Ic(r, o) && (t.flags |= 32),
        E0(e, t),
        He(e, t, a, n),
        t.child
      )
    case 6:
      return e === null && Vc(t), null
    case 13:
      return k0(e, t, n)
    case 4:
      return (
        Hf(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ki(t, null, r, n)) : He(e, t, r, n),
        t.child
      )
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : At(r, i)),
        Rh(e, t, r, i, n)
      )
    case 7:
      return He(e, t, t.pendingProps, n), t.child
    case 8:
      return He(e, t, t.pendingProps.children, n), t.child
    case 12:
      return He(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (a = i.value),
          le(qs, r._currentValue),
          (r._currentValue = a),
          o !== null)
        )
          if (Wt(o.value, a)) {
            if (o.children === i.children && !Ye.current) {
              t = Sn(e, t, n)
              break e
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies
              if (s !== null) {
                a = o.child
                for (var l = s.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      ;(l = yn(-1, n & -n)), (l.tag = 2)
                      var u = o.updateQueue
                      if (u !== null) {
                        u = u.shared
                        var c = u.pending
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l)
                      }
                    }
                    ;(o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      Bc(o.return, n, t),
                      (s.lanes |= n)
                    break
                  }
                  l = l.next
                }
              } else if (o.tag === 10) a = o.type === t.type ? null : o.child
              else if (o.tag === 18) {
                if (((a = o.return), a === null)) throw Error(H(341))
                ;(a.lanes |= n),
                  (s = a.alternate),
                  s !== null && (s.lanes |= n),
                  Bc(a, n, t),
                  (a = o.sibling)
              } else a = o.child
              if (a !== null) a.return = o
              else
                for (a = o; a !== null; ) {
                  if (a === t) {
                    a = null
                    break
                  }
                  if (((o = a.sibling), o !== null)) {
                    ;(o.return = a.return), (a = o)
                    break
                  }
                  a = a.return
                }
              o = a
            }
        He(e, t, i.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        yi(t, n),
        (i = jt(i)),
        (r = r(i)),
        (t.flags |= 1),
        He(e, t, r, n),
        t.child
      )
    case 14:
      return (
        (r = t.type),
        (i = At(r, t.pendingProps)),
        (i = At(r.type, i)),
        Ih(e, t, r, i, n)
      )
    case 15:
      return S0(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : At(r, i)),
        gs(e, t),
        (t.tag = 1),
        Ze(r) ? ((e = !0), Vs(t)) : (e = !1),
        yi(t, n),
        w0(t, r, i),
        qc(t, r, i, n),
        Gc(null, t, r, !0, e, n)
      )
    case 19:
      return j0(e, t, n)
    case 22:
      return C0(e, t, n)
  }
  throw Error(H(156, t.tag))
}
function q0(e, t) {
  return gg(e, t)
}
function ex(e, t, n, r) {
  ;(this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function St(e, t, n, r) {
  return new ex(e, t, n, r)
}
function ip(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function tx(e) {
  if (typeof e == 'function') return ip(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === Sf)) return 11
    if (e === Cf) return 14
  }
  return 2
}
function Zn(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = St(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  )
}
function ws(e, t, n, r, i, o) {
  var a = 2
  if (((r = e), typeof e == 'function')) ip(e) && (a = 1)
  else if (typeof e == 'string') a = 5
  else
    e: switch (e) {
      case ei:
        return _r(n.children, i, o, t)
      case bf:
        ;(a = 8), (i |= 8)
        break
      case hc:
        return (e = St(12, n, t, i | 2)), (e.elementType = hc), (e.lanes = o), e
      case mc:
        return (e = St(13, n, t, i)), (e.elementType = mc), (e.lanes = o), e
      case vc:
        return (e = St(19, n, t, i)), (e.elementType = vc), (e.lanes = o), e
      case eg:
        return jl(n, i, o, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Zv:
              a = 10
              break e
            case Jv:
              a = 9
              break e
            case Sf:
              a = 11
              break e
            case Cf:
              a = 14
              break e
            case Ln:
              ;(a = 16), (r = null)
              break e
          }
        throw Error(H(130, e == null ? e : typeof e, ''))
    }
  return (
    (t = St(a, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  )
}
function _r(e, t, n, r) {
  return (e = St(7, e, r, t)), (e.lanes = n), e
}
function jl(e, t, n, r) {
  return (
    (e = St(22, e, r, t)),
    (e.elementType = eg),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function Pu(e, t, n) {
  return (e = St(6, e, null, t)), (e.lanes = n), e
}
function Mu(e, t, n) {
  return (
    (t = St(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }),
    t
  )
}
function nx(e, t, n, r, i) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = cu(0)),
    (this.expirationTimes = cu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = cu(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null)
}
function op(e, t, n, r, i, o, a, s, l) {
  return (
    (e = new nx(e, t, n, s, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = St(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }),
    Bf(o),
    e
  )
}
function rx(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: Jr,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n
  }
}
function W0(e) {
  if (!e) return er
  e = e._reactInternals
  e: {
    if (Ar(e) !== e || e.tag !== 1) throw Error(H(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (Ze(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(H(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if (Ze(n)) return Wg(e, n, t)
  }
  return t
}
function U0(e, t, n, r, i, o, a, s, l) {
  return (
    (e = op(n, r, !0, e, i, o, a, s, l)),
    (e.context = W0(null)),
    (n = e.current),
    (r = We()),
    (i = Yn(n)),
    (o = yn(r, i)),
    (o.callback = t ?? null),
    Kn(n, o, i),
    (e.current.lanes = i),
    ca(e, i, r),
    Je(e, r),
    e
  )
}
function Pl(e, t, n, r) {
  var i = t.current,
    o = We(),
    a = Yn(i)
  return (
    (n = W0(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = yn(o, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Kn(i, t, a)),
    e !== null && (Vt(e, i, a, o), hs(e, i, a)),
    a
  )
}
function el(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function Qh(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function ap(e, t) {
  Qh(e, t), (e = e.alternate) && Qh(e, t)
}
function ix() {
  return null
}
var G0 =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function sp(e) {
  this._internalRoot = e
}
Ml.prototype.render = sp.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(H(409))
  Pl(e, t, null, null)
}
Ml.prototype.unmount = sp.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    Er(function () {
      Pl(null, e, null, null)
    }),
      (t[xn] = null)
  }
}
function Ml(e) {
  this._internalRoot = e
}
Ml.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Cg()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < In.length && t !== 0 && t < In[n].priority; n++);
    In.splice(n, 0, e), n === 0 && Tg(e)
  }
}
function lp(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function Nl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function Kh() {}
function ox(e, t, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var o = r
      r = function () {
        var u = el(a)
        o.call(u)
      }
    }
    var a = U0(t, r, e, 0, null, !1, !1, '', Kh)
    return (
      (e._reactRootContainer = a),
      (e[xn] = a.current),
      Do(e.nodeType === 8 ? e.parentNode : e),
      Er(),
      a
    )
  }
  for (; (i = e.lastChild); ) e.removeChild(i)
  if (typeof r == 'function') {
    var s = r
    r = function () {
      var u = el(l)
      s.call(u)
    }
  }
  var l = op(e, 0, !1, null, null, !1, !1, '', Kh)
  return (
    (e._reactRootContainer = l),
    (e[xn] = l.current),
    Do(e.nodeType === 8 ? e.parentNode : e),
    Er(function () {
      Pl(t, l, n, r)
    }),
    l
  )
}
function Ol(e, t, n, r, i) {
  var o = n._reactRootContainer
  if (o) {
    var a = o
    if (typeof i == 'function') {
      var s = i
      i = function () {
        var l = el(a)
        s.call(l)
      }
    }
    Pl(t, a, e, i)
  } else a = ox(n, t, e, i, r)
  return el(a)
}
bg = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = lo(t.pendingLanes)
        n !== 0 &&
          (kf(t, n | 1), Je(t, ye()), !(ne & 6) && ((Mi = ye() + 500), or()))
      }
      break
    case 13:
      Er(function () {
        var r = bn(e, 1)
        if (r !== null) {
          var i = We()
          Vt(r, e, 1, i)
        }
      }),
        ap(e, 1)
  }
}
jf = function (e) {
  if (e.tag === 13) {
    var t = bn(e, 134217728)
    if (t !== null) {
      var n = We()
      Vt(t, e, 134217728, n)
    }
    ap(e, 134217728)
  }
}
Sg = function (e) {
  if (e.tag === 13) {
    var t = Yn(e),
      n = bn(e, t)
    if (n !== null) {
      var r = We()
      Vt(n, e, t, r)
    }
    ap(e, t)
  }
}
Cg = function () {
  return ie
}
Eg = function (e, t) {
  var n = ie
  try {
    return (ie = e), t()
  } finally {
    ie = n
  }
}
Tc = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((_c(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t]
          if (r !== e && r.form === e.form) {
            var i = bl(r)
            if (!i) throw Error(H(90))
            ng(r), _c(r, i)
          }
        }
      }
      break
    case 'textarea':
      ig(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && hi(e, !!n.multiple, t, !1)
  }
}
dg = tp
fg = Er
var ax = { usingClientEntryPoint: !1, Events: [fa, ii, bl, ug, cg, tp] },
  to = {
    findFiberByHostInstance: dr,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom'
  },
  sx = {
    bundleType: to.bundleType,
    version: to.version,
    rendererPackageName: to.rendererPackageName,
    rendererConfig: to.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: jn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = mg(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: to.findFiberByHostInstance || ix,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426'
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var qa = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!qa.isDisabled && qa.supportsFiber)
    try {
      ;(yl = qa.inject(sx)), (tn = qa)
    } catch {}
}
ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ax
ht.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!lp(t)) throw Error(H(200))
  return rx(e, t, null, n)
}
ht.createRoot = function (e, t) {
  if (!lp(e)) throw Error(H(299))
  var n = !1,
    r = '',
    i = G0
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = op(e, 1, !1, null, null, n, !1, r, i)),
    (e[xn] = t.current),
    Do(e.nodeType === 8 ? e.parentNode : e),
    new sp(t)
  )
}
ht.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(H(188))
      : ((e = Object.keys(e).join(',')), Error(H(268, e)))
  return (e = mg(t)), (e = e === null ? null : e.stateNode), e
}
ht.flushSync = function (e) {
  return Er(e)
}
ht.hydrate = function (e, t, n) {
  if (!Nl(t)) throw Error(H(200))
  return Ol(null, e, t, !0, n)
}
ht.hydrateRoot = function (e, t, n) {
  if (!lp(e)) throw Error(H(405))
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = '',
    a = G0
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = U0(t, null, e, 1, n ?? null, i, !1, o, a)),
    (e[xn] = t.current),
    Do(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i)
  return new Ml(t)
}
ht.render = function (e, t, n) {
  if (!Nl(t)) throw Error(H(200))
  return Ol(null, e, t, !1, n)
}
ht.unmountComponentAtNode = function (e) {
  if (!Nl(e)) throw Error(H(40))
  return e._reactRootContainer
    ? (Er(function () {
        Ol(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[xn] = null)
        })
      }),
      !0)
    : !1
}
ht.unstable_batchedUpdates = tp
ht.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Nl(n)) throw Error(H(200))
  if (e == null || e._reactInternals === void 0) throw Error(H(38))
  return Ol(e, t, n, !1, r)
}
ht.version = '18.3.1-next-f1338f8080-20240426'
function Q0() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Q0)
    } catch (e) {
      console.error(e)
    }
}
Q0(), (Qv.exports = ht)
var up = Qv.exports
const od = hf(up),
  lx = Iv({ __proto__: null, default: od }, [up])
var K0,
  Xh = up
;(K0 = Xh.createRoot), Xh.hydrateRoot
var X0 = { exports: {} },
  Y0 = {}
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ha = j
function ux(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var cx = typeof Object.is == 'function' ? Object.is : ux,
  dx = ha.useSyncExternalStore,
  fx = ha.useRef,
  px = ha.useEffect,
  hx = ha.useMemo,
  mx = ha.useDebugValue
Y0.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var o = fx(null)
  if (o.current === null) {
    var a = { hasValue: !1, value: null }
    o.current = a
  } else a = o.current
  o = hx(
    function () {
      function l(g) {
        if (!u) {
          if (((u = !0), (c = g), (g = r(g)), i !== void 0 && a.hasValue)) {
            var y = a.value
            if (i(y, g)) return (f = y)
          }
          return (f = g)
        }
        if (((y = f), cx(c, g))) return y
        var _ = r(g)
        return i !== void 0 && i(y, _) ? y : ((c = g), (f = _))
      }
      var u = !1,
        c,
        f,
        d = n === void 0 ? null : n
      return [
        function () {
          return l(t())
        },
        d === null
          ? void 0
          : function () {
              return l(d())
            }
      ]
    },
    [t, n, r, i]
  )
  var s = dx(e, o[0], o[1])
  return (
    px(
      function () {
        ;(a.hasValue = !0), (a.value = s)
      },
      [s]
    ),
    mx(s),
    s
  )
}
X0.exports = Y0
var vx = X0.exports,
  ut = 'default' in Mo ? te : Mo,
  Yh = Symbol.for('react-redux-context'),
  Zh = typeof globalThis < 'u' ? globalThis : {}
function gx() {
  if (!ut.createContext) return {}
  const e = Zh[Yh] ?? (Zh[Yh] = new Map())
  let t = e.get(ut.createContext)
  return t || ((t = ut.createContext(null)), e.set(ut.createContext, t)), t
}
var tr = gx(),
  yx = () => {
    throw new Error('uSES not initialized!')
  }
function cp(e = tr) {
  return function () {
    return ut.useContext(e)
  }
}
var Z0 = cp(),
  J0 = yx,
  _x = (e) => {
    J0 = e
  },
  wx = (e, t) => e === t
function xx(e = tr) {
  const t = e === tr ? Z0 : cp(e),
    n = (r, i = {}) => {
      const { equalityFn: o = wx, devModeChecks: a = {} } =
          typeof i == 'function' ? { equalityFn: i } : i,
        {
          store: s,
          subscription: l,
          getServerState: u,
          stabilityCheck: c,
          identityFunctionCheck: f
        } = t()
      ut.useRef(!0)
      const d = ut.useCallback(
          {
            [r.name](y) {
              return r(y)
            }
          }[r.name],
          [r, c, a.stabilityCheck]
        ),
        g = J0(l.addNestedSub, s.getState, u || s.getState, d, o)
      return ut.useDebugValue(g), g
    }
  return Object.assign(n, { withTypes: () => n }), n
}
var e1 = xx()
function t1(e) {
  e()
}
function bx() {
  let e = null,
    t = null
  return {
    clear() {
      ;(e = null), (t = null)
    },
    notify() {
      t1(() => {
        let n = e
        for (; n; ) n.callback(), (n = n.next)
      })
    },
    get() {
      const n = []
      let r = e
      for (; r; ) n.push(r), (r = r.next)
      return n
    },
    subscribe(n) {
      let r = !0
      const i = (t = { callback: n, next: null, prev: t })
      return (
        i.prev ? (i.prev.next = i) : (e = i),
        function () {
          !r ||
            e === null ||
            ((r = !1),
            i.next ? (i.next.prev = i.prev) : (t = i.prev),
            i.prev ? (i.prev.next = i.next) : (e = i.next))
        }
      )
    }
  }
}
var Jh = { notify() {}, get: () => [] }
function Sx(e, t) {
  let n,
    r = Jh,
    i = 0,
    o = !1
  function a(_) {
    c()
    const x = r.subscribe(_)
    let v = !1
    return () => {
      v || ((v = !0), x(), f())
    }
  }
  function s() {
    r.notify()
  }
  function l() {
    y.onStateChange && y.onStateChange()
  }
  function u() {
    return o
  }
  function c() {
    i++, n || ((n = e.subscribe(l)), (r = bx()))
  }
  function f() {
    i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = Jh))
  }
  function d() {
    o || ((o = !0), c())
  }
  function g() {
    o && ((o = !1), f())
  }
  const y = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: g,
    getListeners: () => r
  }
  return y
}
var Cx =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Ex = typeof navigator < 'u' && navigator.product === 'ReactNative',
  Tx = Cx || Ex ? ut.useLayoutEffect : ut.useEffect
function em(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
}
function bo(e, t) {
  if (em(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  const n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (let i = 0; i < n.length; i++)
    if (!Object.prototype.hasOwnProperty.call(t, n[i]) || !em(e[n[i]], t[n[i]]))
      return !1
  return !0
}
function kx({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: i = 'once',
  identityFunctionCheck: o = 'once'
}) {
  const a = ut.useMemo(() => {
      const u = Sx(e)
      return {
        store: e,
        subscription: u,
        getServerState: r ? () => r : void 0,
        stabilityCheck: i,
        identityFunctionCheck: o
      }
    }, [e, r, i, o]),
    s = ut.useMemo(() => e.getState(), [e])
  Tx(() => {
    const { subscription: u } = a
    return (
      (u.onStateChange = u.notifyNestedSubs),
      u.trySubscribe(),
      s !== e.getState() && u.notifyNestedSubs(),
      () => {
        u.tryUnsubscribe(), (u.onStateChange = void 0)
      }
    )
  }, [a, s])
  const l = t || tr
  return ut.createElement(l.Provider, { value: a }, n)
}
var jx = kx
function n1(e = tr) {
  const t = e === tr ? Z0 : cp(e),
    n = () => {
      const { store: r } = t()
      return r
    }
  return Object.assign(n, { withTypes: () => n }), n
}
var r1 = n1()
function Px(e = tr) {
  const t = e === tr ? r1 : n1(e),
    n = () => t().dispatch
  return Object.assign(n, { withTypes: () => n }), n
}
var i1 = Px(),
  Mx = t1
_x(vx.useSyncExternalStoreWithSelector)
let Nx = { data: '' },
  Ox = (e) =>
    typeof window == 'object'
      ? (
          (e ? e.querySelector('#_goober') : window._goober) ||
          Object.assign(
            (e || document.head).appendChild(document.createElement('style')),
            { innerHTML: ' ', id: '_goober' }
          )
        ).firstChild
      : e || Nx,
  Lx = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  Ax = /\/\*[^]*?\*\/|  +/g,
  tm = /\n+/g,
  $n = (e, t) => {
    let n = '',
      r = '',
      i = ''
    for (let o in e) {
      let a = e[o]
      o[0] == '@'
        ? o[1] == 'i'
          ? (n = o + ' ' + a + ';')
          : (r +=
              o[1] == 'f'
                ? $n(a, o)
                : o + '{' + $n(a, o[1] == 'k' ? '' : t) + '}')
        : typeof a == 'object'
        ? (r += $n(
            a,
            t
              ? t.replace(/([^,])+/g, (s) =>
                  o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (l) =>
                    /&/.test(l) ? l.replace(/&/g, s) : s ? s + ' ' + l : l
                  )
                )
              : o
          ))
        : a != null &&
          ((o = /^--/.test(o) ? o : o.replace(/[A-Z]/g, '-$&').toLowerCase()),
          (i += $n.p ? $n.p(o, a) : o + ':' + a + ';'))
    }
    return n + (t && i ? t + '{' + i + '}' : i) + r
  },
  un = {},
  o1 = (e) => {
    if (typeof e == 'object') {
      let t = ''
      for (let n in e) t += n + o1(e[n])
      return t
    }
    return e
  },
  Rx = (e, t, n, r, i) => {
    let o = o1(e),
      a =
        un[o] ||
        (un[o] = ((l) => {
          let u = 0,
            c = 11
          for (; u < l.length; ) c = (101 * c + l.charCodeAt(u++)) >>> 0
          return 'go' + c
        })(o))
    if (!un[a]) {
      let l =
        o !== e
          ? e
          : ((u) => {
              let c,
                f,
                d = [{}]
              for (; (c = Lx.exec(u.replace(Ax, ''))); )
                c[4]
                  ? d.shift()
                  : c[3]
                  ? ((f = c[3].replace(tm, ' ').trim()),
                    d.unshift((d[0][f] = d[0][f] || {})))
                  : (d[0][c[1]] = c[2].replace(tm, ' ').trim())
              return d[0]
            })(e)
      un[a] = $n(i ? { ['@keyframes ' + a]: l } : l, n ? '' : '.' + a)
    }
    let s = n && un.g ? un.g : null
    return (
      n && (un.g = un[a]),
      ((l, u, c, f) => {
        f
          ? (u.data = u.data.replace(f, l))
          : u.data.indexOf(l) === -1 && (u.data = c ? l + u.data : u.data + l)
      })(un[a], t, r, s),
      a
    )
  },
  Ix = (e, t, n) =>
    e.reduce((r, i, o) => {
      let a = t[o]
      if (a && a.call) {
        let s = a(n),
          l = (s && s.props && s.props.className) || (/^go/.test(s) && s)
        a = l
          ? '.' + l
          : s && typeof s == 'object'
          ? s.props
            ? ''
            : $n(s, '')
          : s === !1
          ? ''
          : s
      }
      return r + i + (a ?? '')
    }, '')
function Ll(e) {
  let t = this || {},
    n = e.call ? e(t.p) : e
  return Rx(
    n.unshift
      ? n.raw
        ? Ix(n, [].slice.call(arguments, 1), t.p)
        : n.reduce((r, i) => Object.assign(r, i && i.call ? i(t.p) : i), {})
      : n,
    Ox(t.target),
    t.g,
    t.o,
    t.k
  )
}
let a1, ad, sd
Ll.bind({ g: 1 })
let Cn = Ll.bind({ k: 1 })
function Fx(e, t, n, r) {
  ;($n.p = t), (a1 = e), (ad = n), (sd = r)
}
function ar(e, t) {
  let n = this || {}
  return function () {
    let r = arguments
    function i(o, a) {
      let s = Object.assign({}, o),
        l = s.className || i.className
      ;(n.p = Object.assign({ theme: ad && ad() }, s)),
        (n.o = / *go\d+/.test(l)),
        (s.className = Ll.apply(n, r) + (l ? ' ' + l : ''))
      let u = e
      return (
        e[0] && ((u = s.as || e), delete s.as), sd && u[0] && sd(s), a1(u, s)
      )
    }
    return i
  }
}
var $x = (e) => typeof e == 'function',
  tl = (e, t) => ($x(e) ? e(t) : e),
  Dx = (() => {
    let e = 0
    return () => (++e).toString()
  })(),
  s1 = (() => {
    let e
    return () => {
      if (e === void 0 && typeof window < 'u') {
        let t = matchMedia('(prefers-reduced-motion: reduce)')
        e = !t || t.matches
      }
      return e
    }
  })(),
  zx = 20,
  xs = new Map(),
  Vx = 1e3,
  nm = (e) => {
    if (xs.has(e)) return
    let t = setTimeout(() => {
      xs.delete(e), Rr({ type: 4, toastId: e })
    }, Vx)
    xs.set(e, t)
  },
  Bx = (e) => {
    let t = xs.get(e)
    t && clearTimeout(t)
  },
  ld = (e, t) => {
    switch (t.type) {
      case 0:
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, zx) }
      case 1:
        return (
          t.toast.id && Bx(t.toast.id),
          {
            ...e,
            toasts: e.toasts.map((o) =>
              o.id === t.toast.id ? { ...o, ...t.toast } : o
            )
          }
        )
      case 2:
        let { toast: n } = t
        return e.toasts.find((o) => o.id === n.id)
          ? ld(e, { type: 1, toast: n })
          : ld(e, { type: 0, toast: n })
      case 3:
        let { toastId: r } = t
        return (
          r
            ? nm(r)
            : e.toasts.forEach((o) => {
                nm(o.id)
              }),
          {
            ...e,
            toasts: e.toasts.map((o) =>
              o.id === r || r === void 0 ? { ...o, visible: !1 } : o
            )
          }
        )
      case 4:
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((o) => o.id !== t.toastId) }
      case 5:
        return { ...e, pausedAt: t.time }
      case 6:
        let i = t.time - (e.pausedAt || 0)
        return {
          ...e,
          pausedAt: void 0,
          toasts: e.toasts.map((o) => ({
            ...o,
            pauseDuration: o.pauseDuration + i
          }))
        }
    }
  },
  bs = [],
  Ss = { toasts: [], pausedAt: void 0 },
  Rr = (e) => {
    ;(Ss = ld(Ss, e)),
      bs.forEach((t) => {
        t(Ss)
      })
  },
  Hx = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  qx = (e = {}) => {
    let [t, n] = j.useState(Ss)
    j.useEffect(
      () => (
        bs.push(n),
        () => {
          let i = bs.indexOf(n)
          i > -1 && bs.splice(i, 1)
        }
      ),
      [t]
    )
    let r = t.toasts.map((i) => {
      var o, a
      return {
        ...e,
        ...e[i.type],
        ...i,
        duration:
          i.duration ||
          ((o = e[i.type]) == null ? void 0 : o.duration) ||
          (e == null ? void 0 : e.duration) ||
          Hx[i.type],
        style: {
          ...e.style,
          ...((a = e[i.type]) == null ? void 0 : a.style),
          ...i.style
        }
      }
    })
    return { ...t, toasts: r }
  },
  Wx = (e, t = 'blank', n) => ({
    createdAt: Date.now(),
    visible: !0,
    type: t,
    ariaProps: { role: 'status', 'aria-live': 'polite' },
    message: e,
    pauseDuration: 0,
    ...n,
    id: (n == null ? void 0 : n.id) || Dx()
  }),
  ma = (e) => (t, n) => {
    let r = Wx(t, e, n)
    return Rr({ type: 2, toast: r }), r.id
  },
  Ct = (e, t) => ma('blank')(e, t)
Ct.error = ma('error')
Ct.success = ma('success')
Ct.loading = ma('loading')
Ct.custom = ma('custom')
Ct.dismiss = (e) => {
  Rr({ type: 3, toastId: e })
}
Ct.remove = (e) => Rr({ type: 4, toastId: e })
Ct.promise = (e, t, n) => {
  let r = Ct.loading(t.loading, { ...n, ...(n == null ? void 0 : n.loading) })
  return (
    e
      .then(
        (i) => (
          Ct.success(tl(t.success, i), {
            id: r,
            ...n,
            ...(n == null ? void 0 : n.success)
          }),
          i
        )
      )
      .catch((i) => {
        Ct.error(tl(t.error, i), {
          id: r,
          ...n,
          ...(n == null ? void 0 : n.error)
        })
      }),
    e
  )
}
var Ux = (e, t) => {
    Rr({ type: 1, toast: { id: e, height: t } })
  },
  Gx = () => {
    Rr({ type: 5, time: Date.now() })
  },
  Qx = (e) => {
    let { toasts: t, pausedAt: n } = qx(e)
    j.useEffect(() => {
      if (n) return
      let o = Date.now(),
        a = t.map((s) => {
          if (s.duration === 1 / 0) return
          let l = (s.duration || 0) + s.pauseDuration - (o - s.createdAt)
          if (l < 0) {
            s.visible && Ct.dismiss(s.id)
            return
          }
          return setTimeout(() => Ct.dismiss(s.id), l)
        })
      return () => {
        a.forEach((s) => s && clearTimeout(s))
      }
    }, [t, n])
    let r = j.useCallback(() => {
        n && Rr({ type: 6, time: Date.now() })
      }, [n]),
      i = j.useCallback(
        (o, a) => {
          let {
              reverseOrder: s = !1,
              gutter: l = 8,
              defaultPosition: u
            } = a || {},
            c = t.filter(
              (g) => (g.position || u) === (o.position || u) && g.height
            ),
            f = c.findIndex((g) => g.id === o.id),
            d = c.filter((g, y) => y < f && g.visible).length
          return c
            .filter((g) => g.visible)
            .slice(...(s ? [d + 1] : [0, d]))
            .reduce((g, y) => g + (y.height || 0) + l, 0)
        },
        [t]
      )
    return {
      toasts: t,
      handlers: {
        updateHeight: Ux,
        startPause: Gx,
        endPause: r,
        calculateOffset: i
      }
    }
  },
  Kx = Cn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  Xx = Cn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  Yx = Cn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  Zx = ar('div')`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || '#ff4b4b'};
  position: relative;
  transform: rotate(45deg);

  animation: ${Kx} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Xx} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || '#fff'};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Yx} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  Jx = Cn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  eb = ar('div')`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || '#e0e0e0'};
  border-right-color: ${(e) => e.primary || '#616161'};
  animation: ${Jx} 1s linear infinite;
`,
  tb = Cn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  nb = Cn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
  rb = ar('div')`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || '#61d345'};
  position: relative;
  transform: rotate(45deg);

  animation: ${tb} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${nb} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || '#fff'};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
  ib = ar('div')`
  position: absolute;
`,
  ob = ar('div')`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  ab = Cn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  sb = ar('div')`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ab} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  lb = ({ toast: e }) => {
    let { icon: t, type: n, iconTheme: r } = e
    return t !== void 0
      ? typeof t == 'string'
        ? j.createElement(sb, null, t)
        : t
      : n === 'blank'
      ? null
      : j.createElement(
          ob,
          null,
          j.createElement(eb, { ...r }),
          n !== 'loading' &&
            j.createElement(
              ib,
              null,
              n === 'error'
                ? j.createElement(Zx, { ...r })
                : j.createElement(rb, { ...r })
            )
        )
  },
  ub = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  cb = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`,
  db = '0%{opacity:0;} 100%{opacity:1;}',
  fb = '0%{opacity:1;} 100%{opacity:0;}',
  pb = ar('div')`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
  hb = ar('div')`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  mb = (e, t) => {
    let n = e.includes('top') ? 1 : -1,
      [r, i] = s1() ? [db, fb] : [ub(n), cb(n)]
    return {
      animation: t
        ? `${Cn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${Cn(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`
    }
  },
  vb = j.memo(({ toast: e, position: t, style: n, children: r }) => {
    let i = e.height
        ? mb(e.position || t || 'top-center', e.visible)
        : { opacity: 0 },
      o = j.createElement(lb, { toast: e }),
      a = j.createElement(hb, { ...e.ariaProps }, tl(e.message, e))
    return j.createElement(
      pb,
      { className: e.className, style: { ...i, ...n, ...e.style } },
      typeof r == 'function'
        ? r({ icon: o, message: a })
        : j.createElement(j.Fragment, null, o, a)
    )
  })
Fx(j.createElement)
var gb = ({
    id: e,
    className: t,
    style: n,
    onHeightUpdate: r,
    children: i
  }) => {
    let o = j.useCallback(
      (a) => {
        if (a) {
          let s = () => {
            let l = a.getBoundingClientRect().height
            r(e, l)
          }
          s(),
            new MutationObserver(s).observe(a, {
              subtree: !0,
              childList: !0,
              characterData: !0
            })
        }
      },
      [e, r]
    )
    return j.createElement('div', { ref: o, className: t, style: n }, i)
  },
  yb = (e, t) => {
    let n = e.includes('top'),
      r = n ? { top: 0 } : { bottom: 0 },
      i = e.includes('center')
        ? { justifyContent: 'center' }
        : e.includes('right')
        ? { justifyContent: 'flex-end' }
        : {}
    return {
      left: 0,
      right: 0,
      display: 'flex',
      position: 'absolute',
      transition: s1() ? void 0 : 'all 230ms cubic-bezier(.21,1.02,.73,1)',
      transform: `translateY(${t * (n ? 1 : -1)}px)`,
      ...r,
      ...i
    }
  },
  _b = Ll`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  Wa = 16,
  wb = ({
    reverseOrder: e,
    position: t = 'top-center',
    toastOptions: n,
    gutter: r,
    children: i,
    containerStyle: o,
    containerClassName: a
  }) => {
    let { toasts: s, handlers: l } = Qx(n)
    return j.createElement(
      'div',
      {
        style: {
          position: 'fixed',
          zIndex: 9999,
          top: Wa,
          left: Wa,
          right: Wa,
          bottom: Wa,
          pointerEvents: 'none',
          ...o
        },
        className: a,
        onMouseEnter: l.startPause,
        onMouseLeave: l.endPause
      },
      s.map((u) => {
        let c = u.position || t,
          f = l.calculateOffset(u, {
            reverseOrder: e,
            gutter: r,
            defaultPosition: t
          }),
          d = yb(c, f)
        return j.createElement(
          gb,
          {
            id: u.id,
            key: u.id,
            onHeightUpdate: l.updateHeight,
            className: u.visible ? _b : '',
            style: d
          },
          u.type === 'custom'
            ? tl(u.message, u)
            : i
            ? i(u)
            : j.createElement(vb, { toast: u, position: c })
        )
      })
    )
  }
const xb = '_opt_search_order_container_nnmpx_3',
  bb = '_loginComponent_nnmpx_19',
  Sb = '_loginForm_nnmpx_41',
  Cb = '_formContainer_nnmpx_55',
  Eb = '_title_nnmpx_65',
  Tb = '_subtitle_nnmpx_77',
  kb = '_form_nnmpx_55',
  jb = '_inputGroup_nnmpx_95',
  Pb = '_inputField_nnmpx_103',
  Mb = '_signInButton_nnmpx_131',
  Nb = '_loginBanner_nnmpx_165',
  Ob = '_bannerImage_nnmpx_179',
  Lb = '_buttonGroup_nnmpx_247',
  Be = {
    opt_search_order_container: xb,
    loginComponent: bb,
    loginForm: Sb,
    formContainer: Cb,
    title: Eb,
    subtitle: Tb,
    form: kb,
    inputGroup: jb,
    inputField: Pb,
    signInButton: Mb,
    loginBanner: Nb,
    bannerImage: Ob,
    buttonGroup: Lb
  }
function Me(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `
}
var Ab = (typeof Symbol == 'function' && Symbol.observable) || '@@observable',
  rm = Ab,
  Nu = () => Math.random().toString(36).substring(7).split('').join('.'),
  Rb = {
    INIT: `@@redux/INIT${Nu()}`,
    REPLACE: `@@redux/REPLACE${Nu()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Nu()}`
  },
  nl = Rb
function rn(e) {
  if (typeof e != 'object' || e === null) return !1
  let t = e
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t)
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null
}
function l1(e, t, n) {
  if (typeof e != 'function') throw new Error(Me(2))
  if (
    (typeof t == 'function' && typeof n == 'function') ||
    (typeof n == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(Me(0))
  if (
    (typeof t == 'function' && typeof n > 'u' && ((n = t), (t = void 0)),
    typeof n < 'u')
  ) {
    if (typeof n != 'function') throw new Error(Me(1))
    return n(l1)(e, t)
  }
  let r = e,
    i = t,
    o = new Map(),
    a = o,
    s = 0,
    l = !1
  function u() {
    a === o &&
      ((a = new Map()),
      o.forEach((x, v) => {
        a.set(v, x)
      }))
  }
  function c() {
    if (l) throw new Error(Me(3))
    return i
  }
  function f(x) {
    if (typeof x != 'function') throw new Error(Me(4))
    if (l) throw new Error(Me(5))
    let v = !0
    u()
    const p = s++
    return (
      a.set(p, x),
      function () {
        if (v) {
          if (l) throw new Error(Me(6))
          ;(v = !1), u(), a.delete(p), (o = null)
        }
      }
    )
  }
  function d(x) {
    if (!rn(x)) throw new Error(Me(7))
    if (typeof x.type > 'u') throw new Error(Me(8))
    if (typeof x.type != 'string') throw new Error(Me(17))
    if (l) throw new Error(Me(9))
    try {
      ;(l = !0), (i = r(i, x))
    } finally {
      l = !1
    }
    return (
      (o = a).forEach((p) => {
        p()
      }),
      x
    )
  }
  function g(x) {
    if (typeof x != 'function') throw new Error(Me(10))
    ;(r = x), d({ type: nl.REPLACE })
  }
  function y() {
    const x = f
    return {
      subscribe(v) {
        if (typeof v != 'object' || v === null) throw new Error(Me(11))
        function p() {
          const w = v
          w.next && w.next(c())
        }
        return p(), { unsubscribe: x(p) }
      },
      [rm]() {
        return this
      }
    }
  }
  return (
    d({ type: nl.INIT }),
    { dispatch: d, subscribe: f, getState: c, replaceReducer: g, [rm]: y }
  )
}
function Ib(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t]
    if (typeof n(void 0, { type: nl.INIT }) > 'u') throw new Error(Me(12))
    if (typeof n(void 0, { type: nl.PROBE_UNKNOWN_ACTION() }) > 'u')
      throw new Error(Me(13))
  })
}
function u1(e) {
  const t = Object.keys(e),
    n = {}
  for (let o = 0; o < t.length; o++) {
    const a = t[o]
    typeof e[a] == 'function' && (n[a] = e[a])
  }
  const r = Object.keys(n)
  let i
  try {
    Ib(n)
  } catch (o) {
    i = o
  }
  return function (a = {}, s) {
    if (i) throw i
    let l = !1
    const u = {}
    for (let c = 0; c < r.length; c++) {
      const f = r[c],
        d = n[f],
        g = a[f],
        y = d(g, s)
      if (typeof y > 'u') throw (s && s.type, new Error(Me(14)))
      ;(u[f] = y), (l = l || y !== g)
    }
    return (l = l || r.length !== Object.keys(a).length), l ? u : a
  }
}
function rl(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
    ? e[0]
    : e.reduce(
        (t, n) =>
          (...r) =>
            t(n(...r))
      )
}
function Fb(...e) {
  return (t) => (n, r) => {
    const i = t(n, r)
    let o = () => {
      throw new Error(Me(15))
    }
    const a = { getState: i.getState, dispatch: (l, ...u) => o(l, ...u) },
      s = e.map((l) => l(a))
    return (o = rl(...s)(i.dispatch)), { ...i, dispatch: o }
  }
}
function c1(e) {
  return rn(e) && 'type' in e && typeof e.type == 'string'
}
var dp = Symbol.for('immer-nothing'),
  So = Symbol.for('immer-draftable'),
  et = Symbol.for('immer-state')
function Oe(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  )
}
var Tr = Object.getPrototypeOf
function on(e) {
  return !!e && !!e[et]
}
function Ut(e) {
  var t
  return e
    ? d1(e) ||
        Array.isArray(e) ||
        !!e[So] ||
        !!((t = e.constructor) != null && t[So]) ||
        va(e) ||
        ga(e)
    : !1
}
var $b = Object.prototype.constructor.toString()
function d1(e) {
  if (!e || typeof e != 'object') return !1
  const t = Tr(e)
  if (t === null) return !0
  const n = Object.hasOwnProperty.call(t, 'constructor') && t.constructor
  return n === Object
    ? !0
    : typeof n == 'function' && Function.toString.call(n) === $b
}
function Db(e) {
  return on(e) || Oe(15, e), e[et].base_
}
function Qo(e, t) {
  kr(e) === 0
    ? Reflect.ownKeys(e).forEach((n) => {
        t(n, e[n], e)
      })
    : e.forEach((n, r) => t(r, n, e))
}
function kr(e) {
  const t = e[et]
  return t ? t.type_ : Array.isArray(e) ? 1 : va(e) ? 2 : ga(e) ? 3 : 0
}
function Ko(e, t) {
  return kr(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
}
function Ou(e, t) {
  return kr(e) === 2 ? e.get(t) : e[t]
}
function f1(e, t, n) {
  const r = kr(e)
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n)
}
function zb(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t
}
function va(e) {
  return e instanceof Map
}
function ga(e) {
  return e instanceof Set
}
function ur(e) {
  return e.copy_ || e.base_
}
function ud(e, t) {
  if (va(e)) return new Map(e)
  if (ga(e)) return new Set(e)
  if (Array.isArray(e)) return Array.prototype.slice.call(e)
  const n = d1(e)
  if (t === !0 || (t === 'class_only' && !n)) {
    const r = Object.getOwnPropertyDescriptors(e)
    delete r[et]
    let i = Reflect.ownKeys(r)
    for (let o = 0; o < i.length; o++) {
      const a = i[o],
        s = r[a]
      s.writable === !1 && ((s.writable = !0), (s.configurable = !0)),
        (s.get || s.set) &&
          (r[a] = {
            configurable: !0,
            writable: !0,
            enumerable: s.enumerable,
            value: e[a]
          })
    }
    return Object.create(Tr(e), r)
  } else {
    const r = Tr(e)
    if (r !== null && n) return { ...e }
    const i = Object.create(r)
    return Object.assign(i, e)
  }
}
function fp(e, t = !1) {
  return (
    Al(e) ||
      on(e) ||
      !Ut(e) ||
      (kr(e) > 1 && (e.set = e.add = e.clear = e.delete = Vb),
      Object.freeze(e),
      t && Object.entries(e).forEach(([n, r]) => fp(r, !0))),
    e
  )
}
function Vb() {
  Oe(2)
}
function Al(e) {
  return Object.isFrozen(e)
}
var cd = {}
function jr(e) {
  const t = cd[e]
  return t || Oe(0, e), t
}
function Bb(e, t) {
  cd[e] || (cd[e] = t)
}
var Xo
function p1() {
  return Xo
}
function Hb(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  }
}
function im(e, t) {
  t &&
    (jr('Patches'),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t))
}
function dd(e) {
  fd(e), e.drafts_.forEach(qb), (e.drafts_ = null)
}
function fd(e) {
  e === Xo && (Xo = e.parent_)
}
function om(e) {
  return (Xo = Hb(Xo, e))
}
function qb(e) {
  const t = e[et]
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0)
}
function am(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length
  const n = t.drafts_[0]
  return (
    e !== void 0 && e !== n
      ? (n[et].modified_ && (dd(t), Oe(4)),
        Ut(e) && ((e = il(t, e)), t.parent_ || ol(t, e)),
        t.patches_ &&
          jr('Patches').generateReplacementPatches_(
            n[et].base_,
            e,
            t.patches_,
            t.inversePatches_
          ))
      : (e = il(t, n, [])),
    dd(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== dp ? e : void 0
  )
}
function il(e, t, n) {
  if (Al(t)) return t
  const r = t[et]
  if (!r) return Qo(t, (i, o) => sm(e, r, t, i, o, n)), t
  if (r.scope_ !== e) return t
  if (!r.modified_) return ol(e, r.base_, !0), r.base_
  if (!r.finalized_) {
    ;(r.finalized_ = !0), r.scope_.unfinalizedDrafts_--
    const i = r.copy_
    let o = i,
      a = !1
    r.type_ === 3 && ((o = new Set(i)), i.clear(), (a = !0)),
      Qo(o, (s, l) => sm(e, r, i, s, l, n, a)),
      ol(e, i, !1),
      n &&
        e.patches_ &&
        jr('Patches').generatePatches_(r, n, e.patches_, e.inversePatches_)
  }
  return r.copy_
}
function sm(e, t, n, r, i, o, a) {
  if (on(i)) {
    const s =
        o && t && t.type_ !== 3 && !Ko(t.assigned_, r) ? o.concat(r) : void 0,
      l = il(e, i, s)
    if ((f1(n, r, l), on(l))) e.canAutoFreeze_ = !1
    else return
  } else a && n.add(i)
  if (Ut(i) && !Al(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return
    il(e, i),
      (!t || !t.scope_.parent_) &&
        typeof r != 'symbol' &&
        Object.prototype.propertyIsEnumerable.call(n, r) &&
        ol(e, i)
  }
}
function ol(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && fp(t, n)
}
function Wb(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : p1(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1
    }
  let i = r,
    o = pp
  n && ((i = [r]), (o = Yo))
  const { revoke: a, proxy: s } = Proxy.revocable(i, o)
  return (r.draft_ = s), (r.revoke_ = a), s
}
var pp = {
    get(e, t) {
      if (t === et) return e
      const n = ur(e)
      if (!Ko(n, t)) return Ub(e, n, t)
      const r = n[t]
      return e.finalized_ || !Ut(r)
        ? r
        : r === Lu(e.base_, t)
        ? (Au(e), (e.copy_[t] = hd(r, e)))
        : r
    },
    has(e, t) {
      return t in ur(e)
    },
    ownKeys(e) {
      return Reflect.ownKeys(ur(e))
    },
    set(e, t, n) {
      const r = h1(ur(e), t)
      if (r != null && r.set) return r.set.call(e.draft_, n), !0
      if (!e.modified_) {
        const i = Lu(ur(e), t),
          o = i == null ? void 0 : i[et]
        if (o && o.base_ === n)
          return (e.copy_[t] = n), (e.assigned_[t] = !1), !0
        if (zb(n, i) && (n !== void 0 || Ko(e.base_, t))) return !0
        Au(e), pd(e)
      }
      return (
        (e.copy_[t] === n && (n !== void 0 || t in e.copy_)) ||
          (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = n), (e.assigned_[t] = !0)),
        !0
      )
    },
    deleteProperty(e, t) {
      return (
        Lu(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), Au(e), pd(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      )
    },
    getOwnPropertyDescriptor(e, t) {
      const n = ur(e),
        r = Reflect.getOwnPropertyDescriptor(n, t)
      return (
        r && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== 'length',
          enumerable: r.enumerable,
          value: n[t]
        }
      )
    },
    defineProperty() {
      Oe(11)
    },
    getPrototypeOf(e) {
      return Tr(e.base_)
    },
    setPrototypeOf() {
      Oe(12)
    }
  },
  Yo = {}
Qo(pp, (e, t) => {
  Yo[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments)
  }
})
Yo.deleteProperty = function (e, t) {
  return Yo.set.call(this, e, t, void 0)
}
Yo.set = function (e, t, n) {
  return pp.set.call(this, e[0], t, n, e[0])
}
function Lu(e, t) {
  const n = e[et]
  return (n ? ur(n) : e)[t]
}
function Ub(e, t, n) {
  var i
  const r = h1(t, n)
  return r
    ? 'value' in r
      ? r.value
      : (i = r.get) == null
      ? void 0
      : i.call(e.draft_)
    : void 0
}
function h1(e, t) {
  if (!(t in e)) return
  let n = Tr(e)
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t)
    if (r) return r
    n = Tr(n)
  }
}
function pd(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && pd(e.parent_))
}
function Au(e) {
  e.copy_ || (e.copy_ = ud(e.base_, e.scope_.immer_.useStrictShallowCopy_))
}
var Gb = class {
  constructor(e) {
    ;(this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, n, r) => {
        if (typeof t == 'function' && typeof n != 'function') {
          const o = n
          n = t
          const a = this
          return function (l = o, ...u) {
            return a.produce(l, (c) => n.call(this, c, ...u))
          }
        }
        typeof n != 'function' && Oe(6),
          r !== void 0 && typeof r != 'function' && Oe(7)
        let i
        if (Ut(t)) {
          const o = om(this),
            a = hd(t, void 0)
          let s = !0
          try {
            ;(i = n(a)), (s = !1)
          } finally {
            s ? dd(o) : fd(o)
          }
          return im(o, r), am(i, o)
        } else if (!t || typeof t != 'object') {
          if (
            ((i = n(t)),
            i === void 0 && (i = t),
            i === dp && (i = void 0),
            this.autoFreeze_ && fp(i, !0),
            r)
          ) {
            const o = [],
              a = []
            jr('Patches').generateReplacementPatches_(t, i, o, a), r(o, a)
          }
          return i
        } else Oe(1, t)
      }),
      (this.produceWithPatches = (t, n) => {
        if (typeof t == 'function')
          return (a, ...s) => this.produceWithPatches(a, (l) => t(l, ...s))
        let r, i
        return [
          this.produce(t, n, (a, s) => {
            ;(r = a), (i = s)
          }),
          r,
          i
        ]
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == 'boolean' &&
        this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == 'boolean' &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy)
  }
  createDraft(e) {
    Ut(e) || Oe(8), on(e) && (e = Qb(e))
    const t = om(this),
      n = hd(e, void 0)
    return (n[et].isManual_ = !0), fd(t), n
  }
  finishDraft(e, t) {
    const n = e && e[et]
    ;(!n || !n.isManual_) && Oe(9)
    const { scope_: r } = n
    return im(r, t), am(void 0, r)
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e
  }
  applyPatches(e, t) {
    let n
    for (n = t.length - 1; n >= 0; n--) {
      const i = t[n]
      if (i.path.length === 0 && i.op === 'replace') {
        e = i.value
        break
      }
    }
    n > -1 && (t = t.slice(n + 1))
    const r = jr('Patches').applyPatches_
    return on(e) ? r(e, t) : this.produce(e, (i) => r(i, t))
  }
}
function hd(e, t) {
  const n = va(e)
    ? jr('MapSet').proxyMap_(e, t)
    : ga(e)
    ? jr('MapSet').proxySet_(e, t)
    : Wb(e, t)
  return (t ? t.scope_ : p1()).drafts_.push(n), n
}
function Qb(e) {
  return on(e) || Oe(10, e), m1(e)
}
function m1(e) {
  if (!Ut(e) || Al(e)) return e
  const t = e[et]
  let n
  if (t) {
    if (!t.modified_) return t.base_
    ;(t.finalized_ = !0), (n = ud(e, t.scope_.immer_.useStrictShallowCopy_))
  } else n = ud(e, !0)
  return (
    Qo(n, (r, i) => {
      f1(n, r, m1(i))
    }),
    t && (t.finalized_ = !1),
    n
  )
}
function Kb() {
  const t = 'replace',
    n = 'add',
    r = 'remove'
  function i(d, g, y, _) {
    switch (d.type_) {
      case 0:
      case 2:
        return a(d, g, y, _)
      case 1:
        return o(d, g, y, _)
      case 3:
        return s(d, g, y, _)
    }
  }
  function o(d, g, y, _) {
    let { base_: x, assigned_: v } = d,
      p = d.copy_
    p.length < x.length && (([x, p] = [p, x]), ([y, _] = [_, y]))
    for (let m = 0; m < x.length; m++)
      if (v[m] && p[m] !== x[m]) {
        const w = g.concat([m])
        y.push({ op: t, path: w, value: f(p[m]) }),
          _.push({ op: t, path: w, value: f(x[m]) })
      }
    for (let m = x.length; m < p.length; m++) {
      const w = g.concat([m])
      y.push({ op: n, path: w, value: f(p[m]) })
    }
    for (let m = p.length - 1; x.length <= m; --m) {
      const w = g.concat([m])
      _.push({ op: r, path: w })
    }
  }
  function a(d, g, y, _) {
    const { base_: x, copy_: v } = d
    Qo(d.assigned_, (p, m) => {
      const w = Ou(x, p),
        b = Ou(v, p),
        C = m ? (Ko(x, p) ? t : n) : r
      if (w === b && C === t) return
      const S = g.concat(p)
      y.push(C === r ? { op: C, path: S } : { op: C, path: S, value: b }),
        _.push(
          C === n
            ? { op: r, path: S }
            : C === r
            ? { op: n, path: S, value: f(w) }
            : { op: t, path: S, value: f(w) }
        )
    })
  }
  function s(d, g, y, _) {
    let { base_: x, copy_: v } = d,
      p = 0
    x.forEach((m) => {
      if (!v.has(m)) {
        const w = g.concat([p])
        y.push({ op: r, path: w, value: m }),
          _.unshift({ op: n, path: w, value: m })
      }
      p++
    }),
      (p = 0),
      v.forEach((m) => {
        if (!x.has(m)) {
          const w = g.concat([p])
          y.push({ op: n, path: w, value: m }),
            _.unshift({ op: r, path: w, value: m })
        }
        p++
      })
  }
  function l(d, g, y, _) {
    y.push({ op: t, path: [], value: g === dp ? void 0 : g }),
      _.push({ op: t, path: [], value: d })
  }
  function u(d, g) {
    return (
      g.forEach((y) => {
        const { path: _, op: x } = y
        let v = d
        for (let b = 0; b < _.length - 1; b++) {
          const C = kr(v)
          let S = _[b]
          typeof S != 'string' && typeof S != 'number' && (S = '' + S),
            (C === 0 || C === 1) &&
              (S === '__proto__' || S === 'constructor') &&
              Oe(19),
            typeof v == 'function' && S === 'prototype' && Oe(19),
            (v = Ou(v, S)),
            typeof v != 'object' && Oe(18, _.join('/'))
        }
        const p = kr(v),
          m = c(y.value),
          w = _[_.length - 1]
        switch (x) {
          case t:
            switch (p) {
              case 2:
                return v.set(w, m)
              case 3:
                Oe(16)
              default:
                return (v[w] = m)
            }
          case n:
            switch (p) {
              case 1:
                return w === '-' ? v.push(m) : v.splice(w, 0, m)
              case 2:
                return v.set(w, m)
              case 3:
                return v.add(m)
              default:
                return (v[w] = m)
            }
          case r:
            switch (p) {
              case 1:
                return v.splice(w, 1)
              case 2:
                return v.delete(w)
              case 3:
                return v.delete(y.value)
              default:
                return delete v[w]
            }
          default:
            Oe(17, x)
        }
      }),
      d
    )
  }
  function c(d) {
    if (!Ut(d)) return d
    if (Array.isArray(d)) return d.map(c)
    if (va(d))
      return new Map(Array.from(d.entries()).map(([y, _]) => [y, c(_)]))
    if (ga(d)) return new Set(Array.from(d).map(c))
    const g = Object.create(Tr(d))
    for (const y in d) g[y] = c(d[y])
    return Ko(d, So) && (g[So] = d[So]), g
  }
  function f(d) {
    return on(d) ? c(d) : d
  }
  Bb('Patches', {
    applyPatches_: u,
    generatePatches_: i,
    generateReplacementPatches_: l
  })
}
var pt = new Gb(),
  ya = pt.produce,
  v1 = pt.produceWithPatches.bind(pt)
pt.setAutoFreeze.bind(pt)
pt.setUseStrictShallowCopy.bind(pt)
var lm = pt.applyPatches.bind(pt)
pt.createDraft.bind(pt)
pt.finishDraft.bind(pt)
function Xb(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != 'function') throw new TypeError(t)
}
function Yb(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != 'object') throw new TypeError(t)
}
function Zb(
  e,
  t = 'expected all items to be functions, instead received the following types: '
) {
  if (!e.every((n) => typeof n == 'function')) {
    const n = e
      .map((r) =>
        typeof r == 'function' ? `function ${r.name || 'unnamed'}()` : typeof r
      )
      .join(', ')
    throw new TypeError(`${t}[${n}]`)
  }
}
var um = (e) => (Array.isArray(e) ? e : [e])
function Jb(e) {
  const t = Array.isArray(e[0]) ? e[0] : e
  return (
    Zb(
      t,
      'createSelector expects all input-selectors to be functions, but received the following types: '
    ),
    t
  )
}
function eS(e, t) {
  const n = [],
    { length: r } = e
  for (let i = 0; i < r; i++) n.push(e[i].apply(null, t))
  return n
}
var tS = class {
    constructor(e) {
      this.value = e
    }
    deref() {
      return this.value
    }
  },
  nS = typeof WeakRef < 'u' ? WeakRef : tS,
  rS = 0,
  cm = 1
function Ua() {
  return { s: rS, v: void 0, o: null, p: null }
}
function al(e, t = {}) {
  let n = Ua()
  const { resultEqualityCheck: r } = t
  let i,
    o = 0
  function a() {
    var f
    let s = n
    const { length: l } = arguments
    for (let d = 0, g = l; d < g; d++) {
      const y = arguments[d]
      if (typeof y == 'function' || (typeof y == 'object' && y !== null)) {
        let _ = s.o
        _ === null && (s.o = _ = new WeakMap())
        const x = _.get(y)
        x === void 0 ? ((s = Ua()), _.set(y, s)) : (s = x)
      } else {
        let _ = s.p
        _ === null && (s.p = _ = new Map())
        const x = _.get(y)
        x === void 0 ? ((s = Ua()), _.set(y, s)) : (s = x)
      }
    }
    const u = s
    let c
    if (s.s === cm) c = s.v
    else if (((c = e.apply(null, arguments)), o++, r)) {
      const d =
        ((f = i == null ? void 0 : i.deref) == null ? void 0 : f.call(i)) ?? i
      d != null && r(d, c) && ((c = d), o !== 0 && o--),
        (i =
          (typeof c == 'object' && c !== null) || typeof c == 'function'
            ? new nS(c)
            : c)
    }
    return (u.s = cm), (u.v = c), c
  }
  return (
    (a.clearCache = () => {
      ;(n = Ua()), a.resetResultsCount()
    }),
    (a.resultsCount = () => o),
    (a.resetResultsCount = () => {
      o = 0
    }),
    a
  )
}
function iS(e, ...t) {
  const n = typeof e == 'function' ? { memoize: e, memoizeOptions: t } : e,
    r = (...i) => {
      let o = 0,
        a = 0,
        s,
        l = {},
        u = i.pop()
      typeof u == 'object' && ((l = u), (u = i.pop())),
        Xb(
          u,
          `createSelector expects an output function after the inputs, but received: [${typeof u}]`
        )
      const c = { ...n, ...l },
        {
          memoize: f,
          memoizeOptions: d = [],
          argsMemoize: g = al,
          argsMemoizeOptions: y = [],
          devModeChecks: _ = {}
        } = c,
        x = um(d),
        v = um(y),
        p = Jb(i),
        m = f(function () {
          return o++, u.apply(null, arguments)
        }, ...x),
        w = g(function () {
          a++
          const C = eS(p, arguments)
          return (s = m.apply(null, C)), s
        }, ...v)
      return Object.assign(w, {
        resultFunc: u,
        memoizedResultFunc: m,
        dependencies: p,
        dependencyRecomputations: () => a,
        resetDependencyRecomputations: () => {
          a = 0
        },
        lastResult: () => s,
        recomputations: () => o,
        resetRecomputations: () => {
          o = 0
        },
        memoize: f,
        argsMemoize: g
      })
    }
  return Object.assign(r, { withTypes: () => r }), r
}
var hp = iS(al),
  oS = Object.assign(
    (e, t = hp) => {
      Yb(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
      )
      const n = Object.keys(e),
        r = n.map((o) => e[o])
      return t(r, (...o) => o.reduce((a, s, l) => ((a[n[l]] = s), a), {}))
    },
    { withTypes: () => oS }
  )
function g1(e) {
  return ({ dispatch: n, getState: r }) =>
    (i) =>
    (o) =>
      typeof o == 'function' ? o(n, r, e) : i(o)
}
var aS = g1(),
  sS = g1,
  lS =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object'
              ? rl
              : rl.apply(null, arguments)
        },
  uS = (e) => e && typeof e.match == 'function'
function Bt(e, t) {
  function n(...r) {
    if (t) {
      let i = t(...r)
      if (!i) throw new Error(Tt(0))
      return {
        type: e,
        payload: i.payload,
        ...('meta' in i && { meta: i.meta }),
        ...('error' in i && { error: i.error })
      }
    }
    return { type: e, payload: r[0] }
  }
  return (
    (n.toString = () => `${e}`),
    (n.type = e),
    (n.match = (r) => c1(r) && r.type === e),
    n
  )
}
var y1 = class co extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, co.prototype)
  }
  static get [Symbol.species]() {
    return co
  }
  concat(...t) {
    return super.concat.apply(this, t)
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new co(...t[0].concat(this))
      : new co(...t.concat(this))
  }
}
function dm(e) {
  return Ut(e) ? ya(e, () => {}) : e
}
function fm(e, t, n) {
  if (e.has(t)) {
    let i = e.get(t)
    return n.update && ((i = n.update(i, t, e)), e.set(t, i)), i
  }
  if (!n.insert) throw new Error(Tt(10))
  const r = n.insert(t, e)
  return e.set(t, r), r
}
function cS(e) {
  return typeof e == 'boolean'
}
var dS = () =>
    function (t) {
      const {
        thunk: n = !0,
        immutableCheck: r = !0,
        serializableCheck: i = !0,
        actionCreatorCheck: o = !0
      } = t ?? {}
      let a = new y1()
      return n && (cS(n) ? a.push(aS) : a.push(sS(n.extraArgument))), a
    },
  hr = 'RTK_autoBatch',
  no = () => (e) => ({ payload: e, meta: { [hr]: !0 } }),
  _1 = (e) => (t) => {
    setTimeout(t, e)
  },
  fS =
    typeof window < 'u' && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : _1(10),
  pS =
    (e = { type: 'raf' }) =>
    (t) =>
    (...n) => {
      const r = t(...n)
      let i = !0,
        o = !1,
        a = !1
      const s = new Set(),
        l =
          e.type === 'tick'
            ? queueMicrotask
            : e.type === 'raf'
            ? fS
            : e.type === 'callback'
            ? e.queueNotification
            : _1(e.timeout),
        u = () => {
          ;(a = !1), o && ((o = !1), s.forEach((c) => c()))
        }
      return Object.assign({}, r, {
        subscribe(c) {
          const f = () => i && c(),
            d = r.subscribe(f)
          return (
            s.add(c),
            () => {
              d(), s.delete(c)
            }
          )
        },
        dispatch(c) {
          var f
          try {
            return (
              (i = !((f = c == null ? void 0 : c.meta) != null && f[hr])),
              (o = !i),
              o && (a || ((a = !0), l(u))),
              r.dispatch(c)
            )
          } finally {
            i = !0
          }
        }
      })
    },
  hS = (e) =>
    function (n) {
      const { autoBatch: r = !0 } = n ?? {}
      let i = new y1(e)
      return r && i.push(pS(typeof r == 'object' ? r : void 0)), i
    }
function mS(e) {
  const t = dS(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: i = !0,
      preloadedState: o = void 0,
      enhancers: a = void 0
    } = e || {}
  let s
  if (typeof n == 'function') s = n
  else if (rn(n)) s = u1(n)
  else throw new Error(Tt(1))
  let l
  typeof r == 'function' ? (l = r(t)) : (l = t())
  let u = rl
  i && (u = lS({ trace: !1, ...(typeof i == 'object' && i) }))
  const c = Fb(...l),
    f = hS(c)
  let d = typeof a == 'function' ? a(f) : f()
  const g = u(...d)
  return l1(s, o, g)
}
function w1(e) {
  const t = {},
    n = []
  let r
  const i = {
    addCase(o, a) {
      const s = typeof o == 'string' ? o : o.type
      if (!s) throw new Error(Tt(28))
      if (s in t) throw new Error(Tt(29))
      return (t[s] = a), i
    },
    addMatcher(o, a) {
      return n.push({ matcher: o, reducer: a }), i
    },
    addDefaultCase(o) {
      return (r = o), i
    }
  }
  return e(i), [t, n, r]
}
function vS(e) {
  return typeof e == 'function'
}
function gS(e, t) {
  let [n, r, i] = w1(t),
    o
  if (vS(e)) o = () => dm(e())
  else {
    const s = dm(e)
    o = () => s
  }
  function a(s = o(), l) {
    let u = [
      n[l.type],
      ...r.filter(({ matcher: c }) => c(l)).map(({ reducer: c }) => c)
    ]
    return (
      u.filter((c) => !!c).length === 0 && (u = [i]),
      u.reduce((c, f) => {
        if (f)
          if (on(c)) {
            const g = f(c, l)
            return g === void 0 ? c : g
          } else {
            if (Ut(c)) return ya(c, (d) => f(d, l))
            {
              const d = f(c, l)
              if (d === void 0) {
                if (c === null) return c
                throw Error(
                  'A case reducer on a non-draftable value must not return undefined'
                )
              }
              return d
            }
          }
        return c
      }, s)
    )
  }
  return (a.getInitialState = o), a
}
var x1 = (e, t) => (uS(e) ? e.match(t) : e(t))
function En(...e) {
  return (t) => e.some((n) => x1(n, t))
}
function Co(...e) {
  return (t) => e.every((n) => x1(n, t))
}
function Rl(e, t) {
  if (!e || !e.meta) return !1
  const n = typeof e.meta.requestId == 'string',
    r = t.indexOf(e.meta.requestStatus) > -1
  return n && r
}
function _a(e) {
  return (
    typeof e[0] == 'function' &&
    'pending' in e[0] &&
    'fulfilled' in e[0] &&
    'rejected' in e[0]
  )
}
function mp(...e) {
  return e.length === 0
    ? (t) => Rl(t, ['pending'])
    : _a(e)
    ? En(...e.map((t) => t.pending))
    : mp()(e[0])
}
function Ni(...e) {
  return e.length === 0
    ? (t) => Rl(t, ['rejected'])
    : _a(e)
    ? En(...e.map((t) => t.rejected))
    : Ni()(e[0])
}
function Il(...e) {
  const t = (n) => n && n.meta && n.meta.rejectedWithValue
  return e.length === 0 ? Co(Ni(...e), t) : _a(e) ? Co(Ni(...e), t) : Il()(e[0])
}
function nr(...e) {
  return e.length === 0
    ? (t) => Rl(t, ['fulfilled'])
    : _a(e)
    ? En(...e.map((t) => t.fulfilled))
    : nr()(e[0])
}
function md(...e) {
  return e.length === 0
    ? (t) => Rl(t, ['pending', 'fulfilled', 'rejected'])
    : _a(e)
    ? En(...e.flatMap((t) => [t.pending, t.rejected, t.fulfilled]))
    : md()(e[0])
}
var yS = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW',
  vp = (e = 21) => {
    let t = '',
      n = e
    for (; n--; ) t += yS[(Math.random() * 64) | 0]
    return t
  },
  _S = ['name', 'message', 'stack', 'code'],
  Ru = class {
    constructor(e, t) {
      iu(this, '_type')
      ;(this.payload = e), (this.meta = t)
    }
  },
  pm = class {
    constructor(e, t) {
      iu(this, '_type')
      ;(this.payload = e), (this.meta = t)
    }
  },
  wS = (e) => {
    if (typeof e == 'object' && e !== null) {
      const t = {}
      for (const n of _S) typeof e[n] == 'string' && (t[n] = e[n])
      return t
    }
    return { message: String(e) }
  },
  hm = (() => {
    function e(t, n, r) {
      const i = Bt(t + '/fulfilled', (l, u, c, f) => ({
          payload: l,
          meta: {
            ...(f || {}),
            arg: c,
            requestId: u,
            requestStatus: 'fulfilled'
          }
        })),
        o = Bt(t + '/pending', (l, u, c) => ({
          payload: void 0,
          meta: { ...(c || {}), arg: u, requestId: l, requestStatus: 'pending' }
        })),
        a = Bt(t + '/rejected', (l, u, c, f, d) => ({
          payload: f,
          error: ((r && r.serializeError) || wS)(l || 'Rejected'),
          meta: {
            ...(d || {}),
            arg: c,
            requestId: u,
            rejectedWithValue: !!f,
            requestStatus: 'rejected',
            aborted: (l == null ? void 0 : l.name) === 'AbortError',
            condition: (l == null ? void 0 : l.name) === 'ConditionError'
          }
        }))
      function s(l) {
        return (u, c, f) => {
          const d = r != null && r.idGenerator ? r.idGenerator(l) : vp(),
            g = new AbortController()
          let y, _
          function x(p) {
            ;(_ = p), g.abort()
          }
          const v = (async function () {
            var w, b
            let p
            try {
              let C =
                (w = r == null ? void 0 : r.condition) == null
                  ? void 0
                  : w.call(r, l, { getState: c, extra: f })
              if ((bS(C) && (C = await C), C === !1 || g.signal.aborted))
                throw {
                  name: 'ConditionError',
                  message: 'Aborted due to condition callback returning false.'
                }
              const S = new Promise((E, T) => {
                ;(y = () => {
                  T({ name: 'AbortError', message: _ || 'Aborted' })
                }),
                  g.signal.addEventListener('abort', y)
              })
              u(
                o(
                  d,
                  l,
                  (b = r == null ? void 0 : r.getPendingMeta) == null
                    ? void 0
                    : b.call(
                        r,
                        { requestId: d, arg: l },
                        { getState: c, extra: f }
                      )
                )
              ),
                (p = await Promise.race([
                  S,
                  Promise.resolve(
                    n(l, {
                      dispatch: u,
                      getState: c,
                      extra: f,
                      requestId: d,
                      signal: g.signal,
                      abort: x,
                      rejectWithValue: (E, T) => new Ru(E, T),
                      fulfillWithValue: (E, T) => new pm(E, T)
                    })
                  ).then((E) => {
                    if (E instanceof Ru) throw E
                    return E instanceof pm
                      ? i(E.payload, d, l, E.meta)
                      : i(E, d, l)
                  })
                ]))
            } catch (C) {
              p =
                C instanceof Ru ? a(null, d, l, C.payload, C.meta) : a(C, d, l)
            } finally {
              y && g.signal.removeEventListener('abort', y)
            }
            return (
              (r &&
                !r.dispatchConditionRejection &&
                a.match(p) &&
                p.meta.condition) ||
                u(p),
              p
            )
          })()
          return Object.assign(v, {
            abort: x,
            requestId: d,
            arg: l,
            unwrap() {
              return v.then(xS)
            }
          })
        }
      }
      return Object.assign(s, {
        pending: o,
        rejected: a,
        fulfilled: i,
        settled: En(a, i),
        typePrefix: t
      })
    }
    return (e.withTypes = () => e), e
  })()
function xS(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload
  if (e.error) throw e.error
  return e.payload
}
function bS(e) {
  return e !== null && typeof e == 'object' && typeof e.then == 'function'
}
var SS = Symbol.for('rtk-slice-createasyncthunk')
function CS(e, t) {
  return `${e}/${t}`
}
function ES({ creators: e } = {}) {
  var n
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[SS]
  return function (i) {
    const { name: o, reducerPath: a = o } = i
    if (!o) throw new Error(Tt(11))
    typeof process < 'u'
    const s =
        (typeof i.reducers == 'function' ? i.reducers(kS()) : i.reducers) || {},
      l = Object.keys(s),
      u = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: []
      },
      c = {
        addCase(m, w) {
          const b = typeof m == 'string' ? m : m.type
          if (!b) throw new Error(Tt(12))
          if (b in u.sliceCaseReducersByType) throw new Error(Tt(13))
          return (u.sliceCaseReducersByType[b] = w), c
        },
        addMatcher(m, w) {
          return u.sliceMatchers.push({ matcher: m, reducer: w }), c
        },
        exposeAction(m, w) {
          return (u.actionCreators[m] = w), c
        },
        exposeCaseReducer(m, w) {
          return (u.sliceCaseReducersByName[m] = w), c
        }
      }
    l.forEach((m) => {
      const w = s[m],
        b = {
          reducerName: m,
          type: CS(o, m),
          createNotation: typeof i.reducers == 'function'
        }
      PS(w) ? NS(b, w, c, t) : jS(b, w, c)
    })
    function f() {
      const [m = {}, w = [], b = void 0] =
          typeof i.extraReducers == 'function'
            ? w1(i.extraReducers)
            : [i.extraReducers],
        C = { ...m, ...u.sliceCaseReducersByType }
      return gS(i.initialState, (S) => {
        for (let E in C) S.addCase(E, C[E])
        for (let E of u.sliceMatchers) S.addMatcher(E.matcher, E.reducer)
        for (let E of w) S.addMatcher(E.matcher, E.reducer)
        b && S.addDefaultCase(b)
      })
    }
    const d = (m) => m,
      g = new Map()
    let y
    function _(m, w) {
      return y || (y = f()), y(m, w)
    }
    function x() {
      return y || (y = f()), y.getInitialState()
    }
    function v(m, w = !1) {
      function b(S) {
        let E = S[m]
        return typeof E > 'u' && w && (E = x()), E
      }
      function C(S = d) {
        const E = fm(g, w, { insert: () => new WeakMap() })
        return fm(E, S, {
          insert: () => {
            const T = {}
            for (const [k, M] of Object.entries(i.selectors ?? {}))
              T[k] = TS(M, S, x, w)
            return T
          }
        })
      }
      return {
        reducerPath: m,
        getSelectors: C,
        get selectors() {
          return C(b)
        },
        selectSlice: b
      }
    }
    const p = {
      name: o,
      reducer: _,
      actions: u.actionCreators,
      caseReducers: u.sliceCaseReducersByName,
      getInitialState: x,
      ...v(a),
      injectInto(m, { reducerPath: w, ...b } = {}) {
        const C = w ?? a
        return (
          m.inject({ reducerPath: C, reducer: _ }, b), { ...p, ...v(C, !0) }
        )
      }
    }
    return p
  }
}
function TS(e, t, n, r) {
  function i(o, ...a) {
    let s = t(o)
    return typeof s > 'u' && r && (s = n()), e(s, ...a)
  }
  return (i.unwrapped = e), i
}
var Rn = ES()
function kS() {
  function e(t, n) {
    return { _reducerDefinitionType: 'asyncThunk', payloadCreator: t, ...n }
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(t) {
        return Object.assign(
          {
            [t.name](...n) {
              return t(...n)
            }
          }[t.name],
          { _reducerDefinitionType: 'reducer' }
        )
      },
      preparedReducer(t, n) {
        return {
          _reducerDefinitionType: 'reducerWithPrepare',
          prepare: t,
          reducer: n
        }
      },
      asyncThunk: e
    }
  )
}
function jS({ type: e, reducerName: t, createNotation: n }, r, i) {
  let o, a
  if ('reducer' in r) {
    if (n && !MS(r)) throw new Error(Tt(17))
    ;(o = r.reducer), (a = r.prepare)
  } else o = r
  i.addCase(e, o)
    .exposeCaseReducer(t, o)
    .exposeAction(t, a ? Bt(e, a) : Bt(e))
}
function PS(e) {
  return e._reducerDefinitionType === 'asyncThunk'
}
function MS(e) {
  return e._reducerDefinitionType === 'reducerWithPrepare'
}
function NS({ type: e, reducerName: t }, n, r, i) {
  if (!i) throw new Error(Tt(18))
  const {
      payloadCreator: o,
      fulfilled: a,
      pending: s,
      rejected: l,
      settled: u,
      options: c
    } = n,
    f = i(e, o, c)
  r.exposeAction(t, f),
    a && r.addCase(f.fulfilled, a),
    s && r.addCase(f.pending, s),
    l && r.addCase(f.rejected, l),
    u && r.addMatcher(f.settled, u),
    r.exposeCaseReducer(t, {
      fulfilled: a || Ga,
      pending: s || Ga,
      rejected: l || Ga,
      settled: u || Ga
    })
}
function Ga() {}
function Tt(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `
}
var b1 = ((e) => (
  (e.uninitialized = 'uninitialized'),
  (e.pending = 'pending'),
  (e.fulfilled = 'fulfilled'),
  (e.rejected = 'rejected'),
  e
))(b1 || {})
function OS(e) {
  return {
    status: e,
    isUninitialized: e === 'uninitialized',
    isLoading: e === 'pending',
    isSuccess: e === 'fulfilled',
    isError: e === 'rejected'
  }
}
var mm = rn
function S1(e, t) {
  if (e === t || !((mm(e) && mm(t)) || (Array.isArray(e) && Array.isArray(t))))
    return t
  const n = Object.keys(t),
    r = Object.keys(e)
  let i = n.length === r.length
  const o = Array.isArray(t) ? [] : {}
  for (const a of n) (o[a] = S1(e[a], t[a])), i && (i = e[a] === o[a])
  return i ? e : o
}
function wi(e) {
  let t = 0
  for (const n in e) t++
  return t
}
var vm = (e) => [].concat(...e)
function LS(e) {
  return new RegExp('(^|:)//').test(e)
}
function AS() {
  return typeof document > 'u' ? !0 : document.visibilityState !== 'hidden'
}
function gm(e) {
  return e != null
}
function RS() {
  return typeof navigator > 'u' || navigator.onLine === void 0
    ? !0
    : navigator.onLine
}
var IS = (e) => e.replace(/\/$/, ''),
  FS = (e) => e.replace(/^\//, '')
function $S(e, t) {
  if (!e) return t
  if (!t) return e
  if (LS(t)) return t
  const n = e.endsWith('/') || !t.startsWith('?') ? '/' : ''
  return (e = IS(e)), (t = FS(t)), `${e}${n}${t}`
}
var ym = (...e) => fetch(...e),
  DS = (e) => e.status >= 200 && e.status <= 299,
  zS = (e) => /ion\/(vnd\.api\+)?json/.test(e.get('content-type') || '')
function _m(e) {
  if (!rn(e)) return e
  const t = { ...e }
  for (const [n, r] of Object.entries(t)) r === void 0 && delete t[n]
  return t
}
function C1({
  baseUrl: e,
  prepareHeaders: t = (f) => f,
  fetchFn: n = ym,
  paramsSerializer: r,
  isJsonContentType: i = zS,
  jsonContentType: o = 'application/json',
  jsonReplacer: a,
  timeout: s,
  responseHandler: l,
  validateStatus: u,
  ...c
} = {}) {
  return (
    typeof fetch > 'u' &&
      n === ym &&
      console.warn(
        'Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments.'
      ),
    async (d, g, y) => {
      const { getState: _, extra: x, endpoint: v, forced: p, type: m } = g
      let w,
        {
          url: b,
          headers: C = new Headers(c.headers),
          params: S = void 0,
          responseHandler: E = l ?? 'json',
          validateStatus: T = u ?? DS,
          timeout: k = s,
          ...M
        } = typeof d == 'string' ? { url: d } : d,
        L,
        O = g.signal
      k &&
        ((L = new AbortController()),
        g.signal.addEventListener('abort', L.abort),
        (O = L.signal))
      let A = { ...c, signal: O, ...M }
      ;(C = new Headers(_m(C))),
        (A.headers =
          (await t(C, {
            getState: _,
            arg: d,
            extra: x,
            endpoint: v,
            forced: p,
            type: m,
            extraOptions: y
          })) || C)
      const z = (U) =>
        typeof U == 'object' &&
        (rn(U) || Array.isArray(U) || typeof U.toJSON == 'function')
      if (
        (!A.headers.has('content-type') &&
          z(A.body) &&
          A.headers.set('content-type', o),
        z(A.body) && i(A.headers) && (A.body = JSON.stringify(A.body, a)),
        S)
      ) {
        const U = ~b.indexOf('?') ? '&' : '?',
          Z = r ? r(S) : new URLSearchParams(_m(S))
        b += U + Z
      }
      b = $S(e, b)
      const R = new Request(b, A)
      w = { request: new Request(b, A) }
      let N,
        F = !1,
        $ =
          L &&
          setTimeout(() => {
            ;(F = !0), L.abort()
          }, k)
      try {
        N = await n(R)
      } catch (U) {
        return {
          error: {
            status: F ? 'TIMEOUT_ERROR' : 'FETCH_ERROR',
            error: String(U)
          },
          meta: w
        }
      } finally {
        $ && clearTimeout($),
          L == null || L.signal.removeEventListener('abort', L.abort)
      }
      const V = N.clone()
      w.response = V
      let q,
        G = ''
      try {
        let U
        if (
          (await Promise.all([
            f(N, E).then(
              (Z) => (q = Z),
              (Z) => (U = Z)
            ),
            V.text().then(
              (Z) => (G = Z),
              () => {}
            )
          ]),
          U)
        )
          throw U
      } catch (U) {
        return {
          error: {
            status: 'PARSING_ERROR',
            originalStatus: N.status,
            data: G,
            error: String(U)
          },
          meta: w
        }
      }
      return T(N, q)
        ? { data: q, meta: w }
        : { error: { status: N.status, data: q }, meta: w }
    }
  )
  async function f(d, g) {
    if (typeof g == 'function') return g(d)
    if (
      (g === 'content-type' && (g = i(d.headers) ? 'json' : 'text'),
      g === 'json')
    ) {
      const y = await d.text()
      return y.length ? JSON.parse(y) : null
    }
    return d.text()
  }
}
var wm = class {
    constructor(e, t = void 0) {
      ;(this.value = e), (this.meta = t)
    }
  },
  gp = Bt('__rtkq/focused'),
  E1 = Bt('__rtkq/unfocused'),
  yp = Bt('__rtkq/online'),
  T1 = Bt('__rtkq/offline')
function k1(e) {
  return e.type === 'query'
}
function VS(e) {
  return e.type === 'mutation'
}
function _p(e, t, n, r, i, o) {
  return BS(e)
    ? e(t, n, r, i).map(vd).map(o)
    : Array.isArray(e)
    ? e.map(vd).map(o)
    : []
}
function BS(e) {
  return typeof e == 'function'
}
function vd(e) {
  return typeof e == 'string' ? { type: e } : e
}
function HS(e, t) {
  return e.catch(t)
}
var Zo = Symbol('forceQueryFn'),
  gd = (e) => typeof e[Zo] == 'function'
function qS({
  serializeQueryArgs: e,
  queryThunk: t,
  mutationThunk: n,
  api: r,
  context: i
}) {
  const o = new Map(),
    a = new Map(),
    {
      unsubscribeQueryResult: s,
      removeMutationResult: l,
      updateSubscriptionOptions: u
    } = r.internalActions
  return {
    buildInitiateQuery: y,
    buildInitiateMutation: _,
    getRunningQueryThunk: c,
    getRunningMutationThunk: f,
    getRunningQueriesThunk: d,
    getRunningMutationsThunk: g
  }
  function c(x, v) {
    return (p) => {
      var b
      const m = i.endpointDefinitions[x],
        w = e({ queryArgs: v, endpointDefinition: m, endpointName: x })
      return (b = o.get(p)) == null ? void 0 : b[w]
    }
  }
  function f(x, v) {
    return (p) => {
      var m
      return (m = a.get(p)) == null ? void 0 : m[v]
    }
  }
  function d() {
    return (x) => Object.values(o.get(x) || {}).filter(gm)
  }
  function g() {
    return (x) => Object.values(a.get(x) || {}).filter(gm)
  }
  function y(x, v) {
    const p =
      (
        m,
        {
          subscribe: w = !0,
          forceRefetch: b,
          subscriptionOptions: C,
          [Zo]: S,
          ...E
        } = {}
      ) =>
      (T, k) => {
        var q
        const M = e({ queryArgs: m, endpointDefinition: v, endpointName: x }),
          L = t({
            ...E,
            type: 'query',
            subscribe: w,
            forceRefetch: b,
            subscriptionOptions: C,
            endpointName: x,
            originalArgs: m,
            queryCacheKey: M,
            [Zo]: S
          }),
          O = r.endpoints[x].select(m),
          A = T(L),
          z = O(k()),
          { requestId: R, abort: I } = A,
          N = z.requestId !== R,
          F = (q = o.get(T)) == null ? void 0 : q[M],
          $ = () => O(k()),
          V = Object.assign(
            S
              ? A.then($)
              : N && !F
              ? Promise.resolve(z)
              : Promise.all([F, A]).then($),
            {
              arg: m,
              requestId: R,
              subscriptionOptions: C,
              queryCacheKey: M,
              abort: I,
              async unwrap() {
                const G = await V
                if (G.isError) throw G.error
                return G.data
              },
              refetch: () => T(p(m, { subscribe: !1, forceRefetch: !0 })),
              unsubscribe() {
                w && T(s({ queryCacheKey: M, requestId: R }))
              },
              updateSubscriptionOptions(G) {
                ;(V.subscriptionOptions = G),
                  T(
                    u({
                      endpointName: x,
                      requestId: R,
                      queryCacheKey: M,
                      options: G
                    })
                  )
              }
            }
          )
        if (!F && !N && !S) {
          const G = o.get(T) || {}
          ;(G[M] = V),
            o.set(T, G),
            V.then(() => {
              delete G[M], wi(G) || o.delete(T)
            })
        }
        return V
      }
    return p
  }
  function _(x) {
    return (v, { track: p = !0, fixedCacheKey: m } = {}) =>
      (w, b) => {
        const C = n({
            type: 'mutation',
            endpointName: x,
            originalArgs: v,
            track: p,
            fixedCacheKey: m
          }),
          S = w(C),
          { requestId: E, abort: T, unwrap: k } = S,
          M = HS(
            S.unwrap().then((z) => ({ data: z })),
            (z) => ({ error: z })
          ),
          L = () => {
            w(l({ requestId: E, fixedCacheKey: m }))
          },
          O = Object.assign(M, {
            arg: S.arg,
            requestId: E,
            abort: T,
            unwrap: k,
            reset: L
          }),
          A = a.get(w) || {}
        return (
          a.set(w, A),
          (A[E] = O),
          O.then(() => {
            delete A[E], wi(A) || a.delete(w)
          }),
          m &&
            ((A[m] = O),
            O.then(() => {
              A[m] === O && (delete A[m], wi(A) || a.delete(w))
            })),
          O
        )
      }
  }
}
function xm(e) {
  return e
}
function WS({
  reducerPath: e,
  baseQuery: t,
  context: { endpointDefinitions: n },
  serializeQueryArgs: r,
  api: i,
  assertTagType: o
}) {
  const a = (p, m, w, b) => (C, S) => {
      const E = n[p],
        T = r({ queryArgs: m, endpointDefinition: E, endpointName: p })
      if (
        (C(
          i.internalActions.queryResultPatched({ queryCacheKey: T, patches: w })
        ),
        !b)
      )
        return
      const k = i.endpoints[p].select(m)(S()),
        M = _p(E.providesTags, k.data, void 0, m, {}, o)
      C(
        i.internalActions.updateProvidedBy({
          queryCacheKey: T,
          providedTags: M
        })
      )
    },
    s =
      (p, m, w, b = !0) =>
      (C, S) => {
        const T = i.endpoints[p].select(m)(S()),
          k = {
            patches: [],
            inversePatches: [],
            undo: () => C(i.util.patchQueryData(p, m, k.inversePatches, b))
          }
        if (T.status === 'uninitialized') return k
        let M
        if ('data' in T)
          if (Ut(T.data)) {
            const [L, O, A] = v1(T.data, w)
            k.patches.push(...O), k.inversePatches.push(...A), (M = L)
          } else
            (M = w(T.data)),
              k.patches.push({ op: 'replace', path: [], value: M }),
              k.inversePatches.push({ op: 'replace', path: [], value: T.data })
        return (
          k.patches.length === 0 ||
            C(i.util.patchQueryData(p, m, k.patches, b)),
          k
        )
      },
    l = (p, m, w) => (b) =>
      b(
        i.endpoints[p].initiate(m, {
          subscribe: !1,
          forceRefetch: !0,
          [Zo]: () => ({ data: w })
        })
      ),
    u = async (
      p,
      {
        signal: m,
        abort: w,
        rejectWithValue: b,
        fulfillWithValue: C,
        dispatch: S,
        getState: E,
        extra: T
      }
    ) => {
      const k = n[p.endpointName]
      try {
        let M = xm,
          L
        const O = {
            signal: m,
            abort: w,
            dispatch: S,
            getState: E,
            extra: T,
            endpoint: p.endpointName,
            type: p.type,
            forced: p.type === 'query' ? c(p, E()) : void 0,
            queryCacheKey: p.type === 'query' ? p.queryCacheKey : void 0
          },
          A = p.type === 'query' ? p[Zo] : void 0
        if (
          (A
            ? (L = A())
            : k.query
            ? ((L = await t(k.query(p.originalArgs), O, k.extraOptions)),
              k.transformResponse && (M = k.transformResponse))
            : (L = await k.queryFn(p.originalArgs, O, k.extraOptions, (z) =>
                t(z, O, k.extraOptions)
              )),
          typeof process < 'u',
          L.error)
        )
          throw new wm(L.error, L.meta)
        return C(await M(L.data, L.meta, p.originalArgs), {
          fulfilledTimeStamp: Date.now(),
          baseQueryMeta: L.meta,
          [hr]: !0
        })
      } catch (M) {
        let L = M
        if (L instanceof wm) {
          let O = xm
          k.query && k.transformErrorResponse && (O = k.transformErrorResponse)
          try {
            return b(await O(L.value, L.meta, p.originalArgs), {
              baseQueryMeta: L.meta,
              [hr]: !0
            })
          } catch (A) {
            L = A
          }
        }
        throw (typeof process < 'u', console.error(L), L)
      }
    }
  function c(p, m) {
    var E, T, k
    const w =
        (T = (E = m[e]) == null ? void 0 : E.queries) == null
          ? void 0
          : T[p.queryCacheKey],
      b = (k = m[e]) == null ? void 0 : k.config.refetchOnMountOrArgChange,
      C = w == null ? void 0 : w.fulfilledTimeStamp,
      S = p.forceRefetch ?? (p.subscribe && b)
    return S ? S === !0 || (Number(new Date()) - Number(C)) / 1e3 >= S : !1
  }
  const f = hm(`${e}/executeQuery`, u, {
      getPendingMeta() {
        return { startedTimeStamp: Date.now(), [hr]: !0 }
      },
      condition(p, { getState: m }) {
        var k, M, L
        const w = m(),
          b =
            (M = (k = w[e]) == null ? void 0 : k.queries) == null
              ? void 0
              : M[p.queryCacheKey],
          C = b == null ? void 0 : b.fulfilledTimeStamp,
          S = p.originalArgs,
          E = b == null ? void 0 : b.originalArgs,
          T = n[p.endpointName]
        return gd(p)
          ? !0
          : (b == null ? void 0 : b.status) === 'pending'
          ? !1
          : c(p, w) ||
            (k1(T) &&
              (L = T == null ? void 0 : T.forceRefetch) != null &&
              L.call(T, {
                currentArg: S,
                previousArg: E,
                endpointState: b,
                state: w
              }))
          ? !0
          : !C
      },
      dispatchConditionRejection: !0
    }),
    d = hm(`${e}/executeMutation`, u, {
      getPendingMeta() {
        return { startedTimeStamp: Date.now(), [hr]: !0 }
      }
    }),
    g = (p) => 'force' in p,
    y = (p) => 'ifOlderThan' in p,
    _ = (p, m, w) => (b, C) => {
      const S = g(w) && w.force,
        E = y(w) && w.ifOlderThan,
        T = (M = !0) => {
          const L = { forceRefetch: M, isPrefetch: !0 }
          return i.endpoints[p].initiate(m, L)
        },
        k = i.endpoints[p].select(m)(C())
      if (S) b(T())
      else if (E) {
        const M = k == null ? void 0 : k.fulfilledTimeStamp
        if (!M) {
          b(T())
          return
        }
        ;(Number(new Date()) - Number(new Date(M))) / 1e3 >= E && b(T())
      } else b(T(!1))
    }
  function x(p) {
    return (m) => {
      var w, b
      return (
        ((b = (w = m == null ? void 0 : m.meta) == null ? void 0 : w.arg) ==
        null
          ? void 0
          : b.endpointName) === p
      )
    }
  }
  function v(p, m) {
    return {
      matchPending: Co(mp(p), x(m)),
      matchFulfilled: Co(nr(p), x(m)),
      matchRejected: Co(Ni(p), x(m))
    }
  }
  return {
    queryThunk: f,
    mutationThunk: d,
    prefetch: _,
    updateQueryData: s,
    upsertQueryData: l,
    patchQueryData: a,
    buildMatchThunkActions: v
  }
}
function j1(e, t, n, r) {
  return _p(
    n[e.meta.arg.endpointName][t],
    nr(e) ? e.payload : void 0,
    Il(e) ? e.payload : void 0,
    e.meta.arg.originalArgs,
    'baseQueryMeta' in e.meta ? e.meta.baseQueryMeta : void 0,
    r
  )
}
function Qa(e, t, n) {
  const r = e[t]
  r && n(r)
}
function Jo(e) {
  return ('arg' in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId
}
function bm(e, t, n) {
  const r = e[Jo(t)]
  r && n(r)
}
var ro = {}
function US({
  reducerPath: e,
  queryThunk: t,
  mutationThunk: n,
  serializeQueryArgs: r,
  context: {
    endpointDefinitions: i,
    apiUid: o,
    extractRehydrationInfo: a,
    hasRehydrationInfo: s
  },
  assertTagType: l,
  config: u
}) {
  const c = Bt(`${e}/resetApiState`)
  function f(C, S, E, T) {
    var k
    C[(k = S.queryCacheKey)] ??
      (C[k] = { status: 'uninitialized', endpointName: S.endpointName }),
      Qa(C, S.queryCacheKey, (M) => {
        ;(M.status = 'pending'),
          (M.requestId = E && M.requestId ? M.requestId : T.requestId),
          S.originalArgs !== void 0 && (M.originalArgs = S.originalArgs),
          (M.startedTimeStamp = T.startedTimeStamp)
      })
  }
  function d(C, S, E) {
    Qa(C, S.arg.queryCacheKey, (T) => {
      if (T.requestId !== S.requestId && !gd(S.arg)) return
      const { merge: k } = i[S.arg.endpointName]
      if (((T.status = 'fulfilled'), k))
        if (T.data !== void 0) {
          const {
            fulfilledTimeStamp: M,
            arg: L,
            baseQueryMeta: O,
            requestId: A
          } = S
          let z = ya(T.data, (R) =>
            k(R, E, {
              arg: L.originalArgs,
              baseQueryMeta: O,
              fulfilledTimeStamp: M,
              requestId: A
            })
          )
          T.data = z
        } else T.data = E
      else
        T.data =
          i[S.arg.endpointName].structuralSharing ?? !0
            ? S1(on(T.data) ? Db(T.data) : T.data, E)
            : E
      delete T.error, (T.fulfilledTimeStamp = S.fulfilledTimeStamp)
    })
  }
  const g = Rn({
      name: `${e}/queries`,
      initialState: ro,
      reducers: {
        removeQueryResult: {
          reducer(C, { payload: { queryCacheKey: S } }) {
            delete C[S]
          },
          prepare: no()
        },
        cacheEntriesUpserted: {
          reducer(C, S) {
            for (const E of S.payload) {
              const { queryDescription: T, value: k } = E
              f(C, T, !0, {
                arg: T,
                requestId: S.meta.requestId,
                startedTimeStamp: S.meta.timestamp
              }),
                d(
                  C,
                  {
                    arg: T,
                    requestId: S.meta.requestId,
                    fulfilledTimeStamp: S.meta.timestamp,
                    baseQueryMeta: {}
                  },
                  k
                )
            }
          },
          prepare: (C) => ({
            payload: C.map((T) => {
              const { endpointName: k, arg: M, value: L } = T,
                O = i[k]
              return {
                queryDescription: {
                  type: 'query',
                  endpointName: k,
                  originalArgs: T.arg,
                  queryCacheKey: r({
                    queryArgs: M,
                    endpointDefinition: O,
                    endpointName: k
                  })
                },
                value: L
              }
            }),
            meta: { [hr]: !0, requestId: vp(), timestamp: Date.now() }
          })
        },
        queryResultPatched: {
          reducer(C, { payload: { queryCacheKey: S, patches: E } }) {
            Qa(C, S, (T) => {
              T.data = lm(T.data, E.concat())
            })
          },
          prepare: no()
        }
      },
      extraReducers(C) {
        C.addCase(t.pending, (S, { meta: E, meta: { arg: T } }) => {
          const k = gd(T)
          f(S, T, k, E)
        })
          .addCase(t.fulfilled, (S, { meta: E, payload: T }) => {
            d(S, E, T)
          })
          .addCase(
            t.rejected,
            (
              S,
              {
                meta: { condition: E, arg: T, requestId: k },
                error: M,
                payload: L
              }
            ) => {
              Qa(S, T.queryCacheKey, (O) => {
                if (!E) {
                  if (O.requestId !== k) return
                  ;(O.status = 'rejected'), (O.error = L ?? M)
                }
              })
            }
          )
          .addMatcher(s, (S, E) => {
            const { queries: T } = a(E)
            for (const [k, M] of Object.entries(T))
              ((M == null ? void 0 : M.status) === 'fulfilled' ||
                (M == null ? void 0 : M.status) === 'rejected') &&
                (S[k] = M)
          })
      }
    }),
    y = Rn({
      name: `${e}/mutations`,
      initialState: ro,
      reducers: {
        removeMutationResult: {
          reducer(C, { payload: S }) {
            const E = Jo(S)
            E in C && delete C[E]
          },
          prepare: no()
        }
      },
      extraReducers(C) {
        C.addCase(
          n.pending,
          (
            S,
            { meta: E, meta: { requestId: T, arg: k, startedTimeStamp: M } }
          ) => {
            k.track &&
              (S[Jo(E)] = {
                requestId: T,
                status: 'pending',
                endpointName: k.endpointName,
                startedTimeStamp: M
              })
          }
        )
          .addCase(n.fulfilled, (S, { payload: E, meta: T }) => {
            T.arg.track &&
              bm(S, T, (k) => {
                k.requestId === T.requestId &&
                  ((k.status = 'fulfilled'),
                  (k.data = E),
                  (k.fulfilledTimeStamp = T.fulfilledTimeStamp))
              })
          })
          .addCase(n.rejected, (S, { payload: E, error: T, meta: k }) => {
            k.arg.track &&
              bm(S, k, (M) => {
                M.requestId === k.requestId &&
                  ((M.status = 'rejected'), (M.error = E ?? T))
              })
          })
          .addMatcher(s, (S, E) => {
            const { mutations: T } = a(E)
            for (const [k, M] of Object.entries(T))
              ((M == null ? void 0 : M.status) === 'fulfilled' ||
                (M == null ? void 0 : M.status) === 'rejected') &&
                k !== (M == null ? void 0 : M.requestId) &&
                (S[k] = M)
          })
      }
    }),
    _ = Rn({
      name: `${e}/invalidation`,
      initialState: ro,
      reducers: {
        updateProvidedBy: {
          reducer(C, S) {
            var k, M
            const { queryCacheKey: E, providedTags: T } = S.payload
            for (const L of Object.values(C))
              for (const O of Object.values(L)) {
                const A = O.indexOf(E)
                A !== -1 && O.splice(A, 1)
              }
            for (const { type: L, id: O } of T) {
              const A =
                (k = C[L] ?? (C[L] = {}))[(M = O || '__internal_without_id')] ??
                (k[M] = [])
              A.includes(E) || A.push(E)
            }
          },
          prepare: no()
        }
      },
      extraReducers(C) {
        C.addCase(
          g.actions.removeQueryResult,
          (S, { payload: { queryCacheKey: E } }) => {
            for (const T of Object.values(S))
              for (const k of Object.values(T)) {
                const M = k.indexOf(E)
                M !== -1 && k.splice(M, 1)
              }
          }
        )
          .addMatcher(s, (S, E) => {
            var k, M
            const { provided: T } = a(E)
            for (const [L, O] of Object.entries(T))
              for (const [A, z] of Object.entries(O)) {
                const R =
                  (k = S[L] ?? (S[L] = {}))[
                    (M = A || '__internal_without_id')
                  ] ?? (k[M] = [])
                for (const I of z) R.includes(I) || R.push(I)
              }
          })
          .addMatcher(En(nr(t), Il(t)), (S, E) => {
            const T = j1(E, 'providesTags', i, l),
              { queryCacheKey: k } = E.meta.arg
            _.caseReducers.updateProvidedBy(
              S,
              _.actions.updateProvidedBy({ queryCacheKey: k, providedTags: T })
            )
          })
      }
    }),
    x = Rn({
      name: `${e}/subscriptions`,
      initialState: ro,
      reducers: {
        updateSubscriptionOptions(C, S) {},
        unsubscribeQueryResult(C, S) {},
        internal_getRTKQSubscriptions() {}
      }
    }),
    v = Rn({
      name: `${e}/internalSubscriptions`,
      initialState: ro,
      reducers: {
        subscriptionsUpdated: {
          reducer(C, S) {
            return lm(C, S.payload)
          },
          prepare: no()
        }
      }
    }),
    p = Rn({
      name: `${e}/config`,
      initialState: {
        online: RS(),
        focused: AS(),
        middlewareRegistered: !1,
        ...u
      },
      reducers: {
        middlewareRegistered(C, { payload: S }) {
          C.middlewareRegistered =
            C.middlewareRegistered === 'conflict' || o !== S ? 'conflict' : !0
        }
      },
      extraReducers: (C) => {
        C.addCase(yp, (S) => {
          S.online = !0
        })
          .addCase(T1, (S) => {
            S.online = !1
          })
          .addCase(gp, (S) => {
            S.focused = !0
          })
          .addCase(E1, (S) => {
            S.focused = !1
          })
          .addMatcher(s, (S) => ({ ...S }))
      }
    }),
    m = u1({
      queries: g.reducer,
      mutations: y.reducer,
      provided: _.reducer,
      subscriptions: v.reducer,
      config: p.reducer
    }),
    w = (C, S) => m(c.match(S) ? void 0 : C, S),
    b = {
      ...p.actions,
      ...g.actions,
      ...x.actions,
      ...v.actions,
      ...y.actions,
      ..._.actions,
      resetApiState: c
    }
  return { reducer: w, actions: b }
}
var mr = Symbol.for('RTKQ/skipToken'),
  P1 = { status: 'uninitialized' },
  Sm = ya(P1, () => {}),
  Cm = ya(P1, () => {})
function GS({ serializeQueryArgs: e, reducerPath: t, createSelector: n }) {
  const r = (f) => Sm,
    i = (f) => Cm
  return {
    buildQuerySelector: s,
    buildMutationSelector: l,
    selectInvalidatedBy: u,
    selectCachedArgsForQuery: c
  }
  function o(f) {
    return { ...f, ...OS(f.status) }
  }
  function a(f) {
    return f[t]
  }
  function s(f, d) {
    return (g) => {
      const y = e({ queryArgs: g, endpointDefinition: d, endpointName: f })
      return n(
        g === mr
          ? r
          : (v) => {
              var p, m
              return (
                ((m = (p = a(v)) == null ? void 0 : p.queries) == null
                  ? void 0
                  : m[y]) ?? Sm
              )
            },
        o
      )
    }
  }
  function l() {
    return (f) => {
      let d
      return (
        typeof f == 'object' ? (d = Jo(f) ?? mr) : (d = f),
        n(
          d === mr
            ? i
            : (_) => {
                var x, v
                return (
                  ((v = (x = a(_)) == null ? void 0 : x.mutations) == null
                    ? void 0
                    : v[d]) ?? Cm
                )
              },
          o
        )
      )
    }
  }
  function u(f, d) {
    const g = f[t],
      y = new Set()
    for (const _ of d.map(vd)) {
      const x = g.provided[_.type]
      if (!x) continue
      let v = (_.id !== void 0 ? x[_.id] : vm(Object.values(x))) ?? []
      for (const p of v) y.add(p)
    }
    return vm(
      Array.from(y.values()).map((_) => {
        const x = g.queries[_]
        return x
          ? [
              {
                queryCacheKey: _,
                endpointName: x.endpointName,
                originalArgs: x.originalArgs
              }
            ]
          : []
      })
    )
  }
  function c(f, d) {
    return Object.values(f[t].queries)
      .filter(
        (g) =>
          (g == null ? void 0 : g.endpointName) === d &&
          g.status !== 'uninitialized'
      )
      .map((g) => g.originalArgs)
  }
}
var Ur = WeakMap ? new WeakMap() : void 0,
  Em = ({ endpointName: e, queryArgs: t }) => {
    let n = ''
    const r = Ur == null ? void 0 : Ur.get(t)
    if (typeof r == 'string') n = r
    else {
      const i = JSON.stringify(
        t,
        (o, a) => (
          (a = typeof a == 'bigint' ? { $bigint: a.toString() } : a),
          (a = rn(a)
            ? Object.keys(a)
                .sort()
                .reduce((s, l) => ((s[l] = a[l]), s), {})
            : a),
          a
        )
      )
      rn(t) && (Ur == null || Ur.set(t, i)), (n = i)
    }
    return `${e}(${n})`
  }
function QS(...e) {
  return function (n) {
    const r = al((u) => {
        var c
        return (c = n.extractRehydrationInfo) == null
          ? void 0
          : c.call(n, u, { reducerPath: n.reducerPath ?? 'api' })
      }),
      i = {
        reducerPath: 'api',
        keepUnusedDataFor: 60,
        refetchOnMountOrArgChange: !1,
        refetchOnFocus: !1,
        refetchOnReconnect: !1,
        invalidationBehavior: 'delayed',
        ...n,
        extractRehydrationInfo: r,
        serializeQueryArgs(u) {
          let c = Em
          if ('serializeQueryArgs' in u.endpointDefinition) {
            const f = u.endpointDefinition.serializeQueryArgs
            c = (d) => {
              const g = f(d)
              return typeof g == 'string' ? g : Em({ ...d, queryArgs: g })
            }
          } else n.serializeQueryArgs && (c = n.serializeQueryArgs)
          return c(u)
        },
        tagTypes: [...(n.tagTypes || [])]
      },
      o = {
        endpointDefinitions: {},
        batch(u) {
          u()
        },
        apiUid: vp(),
        extractRehydrationInfo: r,
        hasRehydrationInfo: al((u) => r(u) != null)
      },
      a = {
        injectEndpoints: l,
        enhanceEndpoints({ addTagTypes: u, endpoints: c }) {
          if (u) for (const f of u) i.tagTypes.includes(f) || i.tagTypes.push(f)
          if (c)
            for (const [f, d] of Object.entries(c))
              typeof d == 'function'
                ? d(o.endpointDefinitions[f])
                : Object.assign(o.endpointDefinitions[f] || {}, d)
          return a
        }
      },
      s = e.map((u) => u.init(a, i, o))
    function l(u) {
      const c = u.endpoints({
        query: (f) => ({ ...f, type: 'query' }),
        mutation: (f) => ({ ...f, type: 'mutation' })
      })
      for (const [f, d] of Object.entries(c)) {
        if (u.overrideExisting !== !0 && f in o.endpointDefinitions) {
          if (u.overrideExisting === 'throw') throw new Error(Tt(39))
          typeof process < 'u'
          continue
        }
        o.endpointDefinitions[f] = d
        for (const g of s) g.injectEndpoint(f, d)
      }
      return a
    }
    return a.injectEndpoints({ endpoints: n.endpoints })
  }
}
function Nn(e, ...t) {
  return Object.assign(e, ...t)
}
var KS = ({ api: e, queryThunk: t, internalState: n }) => {
  const r = `${e.reducerPath}/subscriptions`
  let i = null,
    o = null
  const { updateSubscriptionOptions: a, unsubscribeQueryResult: s } =
      e.internalActions,
    l = (g, y) => {
      var x, v, p
      if (a.match(y)) {
        const { queryCacheKey: m, requestId: w, options: b } = y.payload
        return (
          (x = g == null ? void 0 : g[m]) != null && x[w] && (g[m][w] = b), !0
        )
      }
      if (s.match(y)) {
        const { queryCacheKey: m, requestId: w } = y.payload
        return g[m] && delete g[m][w], !0
      }
      if (e.internalActions.removeQueryResult.match(y))
        return delete g[y.payload.queryCacheKey], !0
      if (t.pending.match(y)) {
        const {
            meta: { arg: m, requestId: w }
          } = y,
          b = g[(v = m.queryCacheKey)] ?? (g[v] = {})
        return (
          (b[`${w}_running`] = {}),
          m.subscribe && (b[w] = m.subscriptionOptions ?? b[w] ?? {}),
          !0
        )
      }
      let _ = !1
      if (t.fulfilled.match(y) || t.rejected.match(y)) {
        const m = g[y.meta.arg.queryCacheKey] || {},
          w = `${y.meta.requestId}_running`
        _ || (_ = !!m[w]), delete m[w]
      }
      if (t.rejected.match(y)) {
        const {
          meta: { condition: m, arg: w, requestId: b }
        } = y
        if (m && w.subscribe) {
          const C = g[(p = w.queryCacheKey)] ?? (g[p] = {})
          ;(C[b] = w.subscriptionOptions ?? C[b] ?? {}), (_ = !0)
        }
      }
      return _
    },
    u = () => n.currentSubscriptions,
    d = {
      getSubscriptions: u,
      getSubscriptionCount: (g) => {
        const _ = u()[g] ?? {}
        return wi(_)
      },
      isRequestSubscribed: (g, y) => {
        var x
        const _ = u()
        return !!((x = _ == null ? void 0 : _[g]) != null && x[y])
      }
    }
  return (g, y) => {
    if (
      (i || (i = JSON.parse(JSON.stringify(n.currentSubscriptions))),
      e.util.resetApiState.match(g))
    )
      return (i = n.currentSubscriptions = {}), (o = null), [!0, !1]
    if (e.internalActions.internal_getRTKQSubscriptions.match(g)) return [!1, d]
    const _ = l(n.currentSubscriptions, g)
    let x = !0
    if (_) {
      o ||
        (o = setTimeout(() => {
          const m = JSON.parse(JSON.stringify(n.currentSubscriptions)),
            [, w] = v1(i, () => m)
          y.next(e.internalActions.subscriptionsUpdated(w)), (i = m), (o = null)
        }, 500))
      const v = typeof g.type == 'string' && !!g.type.startsWith(r),
        p = t.rejected.match(g) && g.meta.condition && !!g.meta.arg.subscribe
      x = !v && !p
    }
    return [x, !1]
  }
}
function XS(e) {
  for (const t in e) return !1
  return !0
}
var YS = 2147483647 / 1e3 - 1,
  ZS = ({
    reducerPath: e,
    api: t,
    queryThunk: n,
    context: r,
    internalState: i
  }) => {
    const {
        removeQueryResult: o,
        unsubscribeQueryResult: a,
        cacheEntriesUpserted: s
      } = t.internalActions,
      l = En(a.match, n.fulfilled, n.rejected, s.match)
    function u(g) {
      const y = i.currentSubscriptions[g]
      return !!y && !XS(y)
    }
    const c = {},
      f = (g, y, _) => {
        var x
        if (l(g)) {
          const v = y.getState()[e]
          let p
          if (s.match(g))
            p = g.payload.map((m) => m.queryDescription.queryCacheKey)
          else {
            const { queryCacheKey: m } = a.match(g) ? g.payload : g.meta.arg
            p = [m]
          }
          for (const m of p)
            d(
              m,
              (x = v.queries[m]) == null ? void 0 : x.endpointName,
              y,
              v.config
            )
        }
        if (t.util.resetApiState.match(g))
          for (const [v, p] of Object.entries(c))
            p && clearTimeout(p), delete c[v]
        if (r.hasRehydrationInfo(g)) {
          const v = y.getState()[e],
            { queries: p } = r.extractRehydrationInfo(g)
          for (const [m, w] of Object.entries(p))
            d(m, w == null ? void 0 : w.endpointName, y, v.config)
        }
      }
    function d(g, y, _, x) {
      const v = r.endpointDefinitions[y],
        p = (v == null ? void 0 : v.keepUnusedDataFor) ?? x.keepUnusedDataFor
      if (p === 1 / 0) return
      const m = Math.max(0, Math.min(p, YS))
      if (!u(g)) {
        const w = c[g]
        w && clearTimeout(w),
          (c[g] = setTimeout(() => {
            u(g) || _.dispatch(o({ queryCacheKey: g })), delete c[g]
          }, m * 1e3))
      }
    }
    return f
  },
  Tm = new Error('Promise never resolved before cacheEntryRemoved.'),
  JS = ({
    api: e,
    reducerPath: t,
    context: n,
    queryThunk: r,
    mutationThunk: i,
    internalState: o
  }) => {
    const a = md(r),
      s = md(i),
      l = nr(r, i),
      u = {}
    function c(_, x, v) {
      const p = u[_]
      p != null &&
        p.valueResolved &&
        (p.valueResolved({ data: x, meta: v }), delete p.valueResolved)
    }
    function f(_) {
      const x = u[_]
      x && (delete u[_], x.cacheEntryRemoved())
    }
    const d = (_, x, v) => {
      const p = g(_)
      function m(w, b, C, S) {
        const E = v[t].queries[b],
          T = x.getState()[t].queries[b]
        !E && T && y(w, S, b, x, C)
      }
      if (r.pending.match(_))
        m(_.meta.arg.endpointName, p, _.meta.requestId, _.meta.arg.originalArgs)
      else if (e.internalActions.cacheEntriesUpserted.match(_))
        for (const { queryDescription: w, value: b } of _.payload) {
          const { endpointName: C, originalArgs: S, queryCacheKey: E } = w
          m(C, E, _.meta.requestId, S), c(E, b, {})
        }
      else if (i.pending.match(_))
        x.getState()[t].mutations[p] &&
          y(
            _.meta.arg.endpointName,
            _.meta.arg.originalArgs,
            p,
            x,
            _.meta.requestId
          )
      else if (l(_)) c(p, _.payload, _.meta.baseQueryMeta)
      else if (
        e.internalActions.removeQueryResult.match(_) ||
        e.internalActions.removeMutationResult.match(_)
      )
        f(p)
      else if (e.util.resetApiState.match(_))
        for (const w of Object.keys(u)) f(w)
    }
    function g(_) {
      return a(_)
        ? _.meta.arg.queryCacheKey
        : s(_)
        ? _.meta.arg.fixedCacheKey ?? _.meta.requestId
        : e.internalActions.removeQueryResult.match(_)
        ? _.payload.queryCacheKey
        : e.internalActions.removeMutationResult.match(_)
        ? Jo(_.payload)
        : ''
    }
    function y(_, x, v, p, m) {
      const w = n.endpointDefinitions[_],
        b = w == null ? void 0 : w.onCacheEntryAdded
      if (!b) return
      const C = {},
        S = new Promise((O) => {
          C.cacheEntryRemoved = O
        }),
        E = Promise.race([
          new Promise((O) => {
            C.valueResolved = O
          }),
          S.then(() => {
            throw Tm
          })
        ])
      E.catch(() => {}), (u[v] = C)
      const T = e.endpoints[_].select(w.type === 'query' ? x : v),
        k = p.dispatch((O, A, z) => z),
        M = {
          ...p,
          getCacheEntry: () => T(p.getState()),
          requestId: m,
          extra: k,
          updateCachedData:
            w.type === 'query'
              ? (O) => p.dispatch(e.util.updateQueryData(_, x, O))
              : void 0,
          cacheDataLoaded: E,
          cacheEntryRemoved: S
        },
        L = b(x, M)
      Promise.resolve(L).catch((O) => {
        if (O !== Tm) throw O
      })
    }
    return d
  },
  eC =
    ({ api: e, context: { apiUid: t }, reducerPath: n }) =>
    (r, i) => {
      e.util.resetApiState.match(r) &&
        i.dispatch(e.internalActions.middlewareRegistered(t)),
        typeof process < 'u'
    },
  tC = ({
    reducerPath: e,
    context: t,
    context: { endpointDefinitions: n },
    mutationThunk: r,
    queryThunk: i,
    api: o,
    assertTagType: a,
    refetchQuery: s,
    internalState: l
  }) => {
    const { removeQueryResult: u } = o.internalActions,
      c = En(nr(r), Il(r)),
      f = En(nr(r, i), Ni(r, i))
    let d = []
    const g = (x, v) => {
      c(x)
        ? _(j1(x, 'invalidatesTags', n, a), v)
        : f(x)
        ? _([], v)
        : o.util.invalidateTags.match(x) &&
          _(_p(x.payload, void 0, void 0, void 0, void 0, a), v)
    }
    function y(x) {
      var v, p
      for (const m in x.queries)
        if (((v = x.queries[m]) == null ? void 0 : v.status) === 'pending')
          return !0
      for (const m in x.mutations)
        if (((p = x.mutations[m]) == null ? void 0 : p.status) === 'pending')
          return !0
      return !1
    }
    function _(x, v) {
      const p = v.getState(),
        m = p[e]
      if ((d.push(...x), m.config.invalidationBehavior === 'delayed' && y(m)))
        return
      const w = d
      if (((d = []), w.length === 0)) return
      const b = o.util.selectInvalidatedBy(p, w)
      t.batch(() => {
        const C = Array.from(b.values())
        for (const { queryCacheKey: S } of C) {
          const E = m.queries[S],
            T = l.currentSubscriptions[S] ?? {}
          E &&
            (wi(T) === 0
              ? v.dispatch(u({ queryCacheKey: S }))
              : E.status !== 'uninitialized' && v.dispatch(s(E)))
        }
      })
    }
    return g
  },
  nC = ({
    reducerPath: e,
    queryThunk: t,
    api: n,
    refetchQuery: r,
    internalState: i
  }) => {
    const o = {},
      a = (d, g) => {
        ;(n.internalActions.updateSubscriptionOptions.match(d) ||
          n.internalActions.unsubscribeQueryResult.match(d)) &&
          l(d.payload, g),
          (t.pending.match(d) || (t.rejected.match(d) && d.meta.condition)) &&
            l(d.meta.arg, g),
          (t.fulfilled.match(d) ||
            (t.rejected.match(d) && !d.meta.condition)) &&
            s(d.meta.arg, g),
          n.util.resetApiState.match(d) && c()
      }
    function s({ queryCacheKey: d }, g) {
      const y = g.getState()[e],
        _ = y.queries[d],
        x = i.currentSubscriptions[d]
      if (!_ || _.status === 'uninitialized') return
      const { lowestPollingInterval: v, skipPollingIfUnfocused: p } = f(x)
      if (!Number.isFinite(v)) return
      const m = o[d]
      m != null && m.timeout && (clearTimeout(m.timeout), (m.timeout = void 0))
      const w = Date.now() + v
      o[d] = {
        nextPollTimestamp: w,
        pollingInterval: v,
        timeout: setTimeout(() => {
          ;(y.config.focused || !p) && g.dispatch(r(_)),
            s({ queryCacheKey: d }, g)
        }, v)
      }
    }
    function l({ queryCacheKey: d }, g) {
      const _ = g.getState()[e].queries[d],
        x = i.currentSubscriptions[d]
      if (!_ || _.status === 'uninitialized') return
      const { lowestPollingInterval: v } = f(x)
      if (!Number.isFinite(v)) {
        u(d)
        return
      }
      const p = o[d],
        m = Date.now() + v
      ;(!p || m < p.nextPollTimestamp) && s({ queryCacheKey: d }, g)
    }
    function u(d) {
      const g = o[d]
      g != null && g.timeout && clearTimeout(g.timeout), delete o[d]
    }
    function c() {
      for (const d of Object.keys(o)) u(d)
    }
    function f(d = {}) {
      let g = !1,
        y = Number.POSITIVE_INFINITY
      for (let _ in d)
        d[_].pollingInterval &&
          ((y = Math.min(d[_].pollingInterval, y)),
          (g = d[_].skipPollingIfUnfocused || g))
      return { lowestPollingInterval: y, skipPollingIfUnfocused: g }
    }
    return a
  },
  rC = ({ api: e, context: t, queryThunk: n, mutationThunk: r }) => {
    const i = mp(n, r),
      o = Ni(n, r),
      a = nr(n, r),
      s = {}
    return (u, c) => {
      var f, d
      if (i(u)) {
        const {
            requestId: g,
            arg: { endpointName: y, originalArgs: _ }
          } = u.meta,
          x = t.endpointDefinitions[y],
          v = x == null ? void 0 : x.onQueryStarted
        if (v) {
          const p = {},
            m = new Promise((S, E) => {
              ;(p.resolve = S), (p.reject = E)
            })
          m.catch(() => {}), (s[g] = p)
          const w = e.endpoints[y].select(x.type === 'query' ? _ : g),
            b = c.dispatch((S, E, T) => T),
            C = {
              ...c,
              getCacheEntry: () => w(c.getState()),
              requestId: g,
              extra: b,
              updateCachedData:
                x.type === 'query'
                  ? (S) => c.dispatch(e.util.updateQueryData(y, _, S))
                  : void 0,
              queryFulfilled: m
            }
          v(_, C)
        }
      } else if (a(u)) {
        const { requestId: g, baseQueryMeta: y } = u.meta
        ;(f = s[g]) == null || f.resolve({ data: u.payload, meta: y }),
          delete s[g]
      } else if (o(u)) {
        const { requestId: g, rejectedWithValue: y, baseQueryMeta: _ } = u.meta
        ;(d = s[g]) == null ||
          d.reject({
            error: u.payload ?? u.error,
            isUnhandledError: !y,
            meta: _
          }),
          delete s[g]
      }
    }
  },
  iC = ({
    reducerPath: e,
    context: t,
    api: n,
    refetchQuery: r,
    internalState: i
  }) => {
    const { removeQueryResult: o } = n.internalActions,
      a = (l, u) => {
        gp.match(l) && s(u, 'refetchOnFocus'),
          yp.match(l) && s(u, 'refetchOnReconnect')
      }
    function s(l, u) {
      const c = l.getState()[e],
        f = c.queries,
        d = i.currentSubscriptions
      t.batch(() => {
        for (const g of Object.keys(d)) {
          const y = f[g],
            _ = d[g]
          if (!_ || !y) continue
          ;(Object.values(_).some((v) => v[u] === !0) ||
            (Object.values(_).every((v) => v[u] === void 0) && c.config[u])) &&
            (wi(_) === 0
              ? l.dispatch(o({ queryCacheKey: g }))
              : y.status !== 'uninitialized' && l.dispatch(r(y)))
        }
      })
    }
    return a
  }
function oC(e) {
  const { reducerPath: t, queryThunk: n, api: r, context: i } = e,
    { apiUid: o } = i,
    a = { invalidateTags: Bt(`${t}/invalidateTags`) },
    s = (f) => f.type.startsWith(`${t}/`),
    l = [eC, ZS, tC, nC, JS, rC]
  return {
    middleware: (f) => {
      let d = !1
      const y = {
          ...e,
          internalState: { currentSubscriptions: {} },
          refetchQuery: c,
          isThisApiSliceAction: s
        },
        _ = l.map((p) => p(y)),
        x = KS(y),
        v = iC(y)
      return (p) => (m) => {
        if (!c1(m)) return p(m)
        d || ((d = !0), f.dispatch(r.internalActions.middlewareRegistered(o)))
        const w = { ...f, next: p },
          b = f.getState(),
          [C, S] = x(m, w, b)
        let E
        if (
          (C ? (E = p(m)) : (E = S),
          f.getState()[t] && (v(m, w, b), s(m) || i.hasRehydrationInfo(m)))
        )
          for (const T of _) T(m, w, b)
        return E
      }
    },
    actions: a
  }
  function c(f) {
    return e.api.endpoints[f.endpointName].initiate(f.originalArgs, {
      subscribe: !1,
      forceRefetch: !0
    })
  }
}
var km = Symbol(),
  aC = ({ createSelector: e = hp } = {}) => ({
    name: km,
    init(
      t,
      {
        baseQuery: n,
        tagTypes: r,
        reducerPath: i,
        serializeQueryArgs: o,
        keepUnusedDataFor: a,
        refetchOnMountOrArgChange: s,
        refetchOnFocus: l,
        refetchOnReconnect: u,
        invalidationBehavior: c
      },
      f
    ) {
      Kb()
      const d = (N) => (typeof process < 'u', N)
      Object.assign(t, {
        reducerPath: i,
        endpoints: {},
        internalActions: {
          onOnline: yp,
          onOffline: T1,
          onFocus: gp,
          onFocusLost: E1
        },
        util: {}
      })
      const {
          queryThunk: g,
          mutationThunk: y,
          patchQueryData: _,
          updateQueryData: x,
          upsertQueryData: v,
          prefetch: p,
          buildMatchThunkActions: m
        } = WS({
          baseQuery: n,
          reducerPath: i,
          context: f,
          api: t,
          serializeQueryArgs: o,
          assertTagType: d
        }),
        { reducer: w, actions: b } = US({
          context: f,
          queryThunk: g,
          mutationThunk: y,
          serializeQueryArgs: o,
          reducerPath: i,
          assertTagType: d,
          config: {
            refetchOnFocus: l,
            refetchOnReconnect: u,
            refetchOnMountOrArgChange: s,
            keepUnusedDataFor: a,
            reducerPath: i,
            invalidationBehavior: c
          }
        })
      Nn(t.util, {
        patchQueryData: _,
        updateQueryData: x,
        upsertQueryData: v,
        prefetch: p,
        resetApiState: b.resetApiState,
        upsertQueryEntries: b.cacheEntriesUpserted
      }),
        Nn(t.internalActions, b)
      const { middleware: C, actions: S } = oC({
        reducerPath: i,
        context: f,
        queryThunk: g,
        mutationThunk: y,
        api: t,
        assertTagType: d
      })
      Nn(t.util, S), Nn(t, { reducer: w, middleware: C })
      const {
        buildQuerySelector: E,
        buildMutationSelector: T,
        selectInvalidatedBy: k,
        selectCachedArgsForQuery: M
      } = GS({ serializeQueryArgs: o, reducerPath: i, createSelector: e })
      Nn(t.util, { selectInvalidatedBy: k, selectCachedArgsForQuery: M })
      const {
        buildInitiateQuery: L,
        buildInitiateMutation: O,
        getRunningMutationThunk: A,
        getRunningMutationsThunk: z,
        getRunningQueriesThunk: R,
        getRunningQueryThunk: I
      } = qS({
        queryThunk: g,
        mutationThunk: y,
        api: t,
        serializeQueryArgs: o,
        context: f
      })
      return (
        Nn(t.util, {
          getRunningMutationThunk: A,
          getRunningMutationsThunk: z,
          getRunningQueryThunk: I,
          getRunningQueriesThunk: R
        }),
        {
          name: km,
          injectEndpoint(N, F) {
            var V
            const $ = t
            ;(V = $.endpoints)[N] ?? (V[N] = {}),
              k1(F)
                ? Nn(
                    $.endpoints[N],
                    { name: N, select: E(N, F), initiate: L(N, F) },
                    m(g, N)
                  )
                : VS(F) &&
                  Nn(
                    $.endpoints[N],
                    { name: N, select: T(), initiate: O(N) },
                    m(y, N)
                  )
          }
        }
      )
    }
  })
function sC(e) {
  return e.type === 'query'
}
function lC(e) {
  return e.type === 'mutation'
}
function Ka(e, ...t) {
  return Object.assign(e, ...t)
}
function Iu(e) {
  return e.replace(e[0], e[0].toUpperCase())
}
var Gr = WeakMap ? new WeakMap() : void 0,
  uC = ({ endpointName: e, queryArgs: t }) => {
    let n = ''
    const r = Gr == null ? void 0 : Gr.get(t)
    if (typeof r == 'string') n = r
    else {
      const i = JSON.stringify(
        t,
        (o, a) => (
          (a = typeof a == 'bigint' ? { $bigint: a.toString() } : a),
          (a = rn(a)
            ? Object.keys(a)
                .sort()
                .reduce((s, l) => ((s[l] = a[l]), s), {})
            : a),
          a
        )
      )
      rn(t) && (Gr == null || Gr.set(t, i)), (n = i)
    }
    return `${e}(${n})`
  },
  Fu = Symbol()
function jm(e, t, n, r) {
  const i = j.useMemo(
      () => ({
        queryArgs: e,
        serialized:
          typeof e == 'object'
            ? t({ queryArgs: e, endpointDefinition: n, endpointName: r })
            : e
      }),
      [e, t, n, r]
    ),
    o = j.useRef(i)
  return (
    j.useEffect(() => {
      o.current.serialized !== i.serialized && (o.current = i)
    }, [i]),
    o.current.serialized === i.serialized ? o.current.queryArgs : e
  )
}
function $u(e) {
  const t = j.useRef(e)
  return (
    j.useEffect(() => {
      bo(t.current, e) || (t.current = e)
    }, [e]),
    bo(t.current, e) ? t.current : e
  )
}
var cC = () =>
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  dC = cC(),
  fC = () => typeof navigator < 'u' && navigator.product === 'ReactNative',
  pC = fC(),
  hC = () => (dC || pC ? j.useLayoutEffect : j.useEffect),
  mC = hC(),
  vC = (e) =>
    e.isUninitialized
      ? {
          ...e,
          isUninitialized: !1,
          isFetching: !0,
          isLoading: e.data === void 0,
          status: b1.pending
        }
      : e
function gC({
  api: e,
  moduleOptions: {
    batch: t,
    hooks: { useDispatch: n, useSelector: r, useStore: i },
    unstable__sideEffectsInRender: o,
    createSelector: a
  },
  serializeQueryArgs: s,
  context: l
}) {
  const u = o ? (y) => y() : j.useEffect
  return { buildQueryHooks: d, buildMutationHook: g, usePrefetch: f }
  function c(y, _, x) {
    if (_ != null && _.endpointName && y.isUninitialized) {
      const { endpointName: C } = _,
        S = l.endpointDefinitions[C]
      s({
        queryArgs: _.originalArgs,
        endpointDefinition: S,
        endpointName: C
      }) === s({ queryArgs: x, endpointDefinition: S, endpointName: C }) &&
        (_ = void 0)
    }
    let v = y.isSuccess ? y.data : _ == null ? void 0 : _.data
    v === void 0 && (v = y.data)
    const p = v !== void 0,
      m = y.isLoading,
      w = (!_ || _.isLoading || _.isUninitialized) && !p && m,
      b = y.isSuccess || (m && p)
    return {
      ...y,
      data: v,
      currentData: y.data,
      isFetching: m,
      isLoading: w,
      isSuccess: b
    }
  }
  function f(y, _) {
    const x = n(),
      v = $u(_)
    return j.useCallback(
      (p, m) => x(e.util.prefetch(y, p, { ...v, ...m })),
      [y, x, v]
    )
  }
  function d(y) {
    const _ = (
        p,
        {
          refetchOnReconnect: m,
          refetchOnFocus: w,
          refetchOnMountOrArgChange: b,
          skip: C = !1,
          pollingInterval: S = 0,
          skipPollingIfUnfocused: E = !1
        } = {}
      ) => {
        const { initiate: T } = e.endpoints[y],
          k = n(),
          M = j.useRef(void 0)
        if (!M.current) {
          const $ = k(e.internalActions.internal_getRTKQSubscriptions())
          M.current = $
        }
        const L = jm(C ? mr : p, uC, l.endpointDefinitions[y], y),
          O = $u({
            refetchOnReconnect: m,
            refetchOnFocus: w,
            pollingInterval: S,
            skipPollingIfUnfocused: E
          }),
          A = j.useRef(!1),
          z = j.useRef(void 0)
        let { queryCacheKey: R, requestId: I } = z.current || {},
          N = !1
        R && I && (N = M.current.isRequestSubscribed(R, I))
        const F = !N && A.current
        return (
          u(() => {
            A.current = N
          }),
          u(() => {
            F && (z.current = void 0)
          }, [F]),
          u(() => {
            var q
            const $ = z.current
            if ((typeof process < 'u', L === mr)) {
              $ == null || $.unsubscribe(), (z.current = void 0)
              return
            }
            const V = (q = z.current) == null ? void 0 : q.subscriptionOptions
            if (!$ || $.arg !== L) {
              $ == null || $.unsubscribe()
              const G = k(T(L, { subscriptionOptions: O, forceRefetch: b }))
              z.current = G
            } else O !== V && $.updateSubscriptionOptions(O)
          }, [k, T, b, L, O, F]),
          j.useEffect(
            () => () => {
              var $
              ;($ = z.current) == null || $.unsubscribe(), (z.current = void 0)
            },
            []
          ),
          j.useMemo(
            () => ({
              refetch: () => {
                var $
                if (!z.current) throw new Error(Tt(38))
                return ($ = z.current) == null ? void 0 : $.refetch()
              }
            }),
            []
          )
        )
      },
      x = ({
        refetchOnReconnect: p,
        refetchOnFocus: m,
        pollingInterval: w = 0,
        skipPollingIfUnfocused: b = !1
      } = {}) => {
        const { initiate: C } = e.endpoints[y],
          S = n(),
          [E, T] = j.useState(Fu),
          k = j.useRef(void 0),
          M = $u({
            refetchOnReconnect: p,
            refetchOnFocus: m,
            pollingInterval: w,
            skipPollingIfUnfocused: b
          })
        u(() => {
          var z, R
          const A = (z = k.current) == null ? void 0 : z.subscriptionOptions
          M !== A && ((R = k.current) == null || R.updateSubscriptionOptions(M))
        }, [M])
        const L = j.useRef(M)
        u(() => {
          L.current = M
        }, [M])
        const O = j.useCallback(
          function (A, z = !1) {
            let R
            return (
              t(() => {
                var I
                ;(I = k.current) == null || I.unsubscribe(),
                  (k.current = R =
                    S(
                      C(A, { subscriptionOptions: L.current, forceRefetch: !z })
                    )),
                  T(A)
              }),
              R
            )
          },
          [S, C]
        )
        return (
          j.useEffect(
            () => () => {
              var A
              ;(A = k == null ? void 0 : k.current) == null || A.unsubscribe()
            },
            []
          ),
          j.useEffect(() => {
            E !== Fu && !k.current && O(E, !0)
          }, [E, O]),
          j.useMemo(() => [O, E], [O, E])
        )
      },
      v = (p, { skip: m = !1, selectFromResult: w } = {}) => {
        const { select: b } = e.endpoints[y],
          C = jm(m ? mr : p, s, l.endpointDefinitions[y], y),
          S = j.useRef(void 0),
          E = j.useMemo(
            () =>
              a([b(C), (O, A) => A, (O) => C], c, {
                memoizeOptions: { resultEqualityCheck: bo }
              }),
            [b, C]
          ),
          T = j.useMemo(
            () =>
              w
                ? a([E], w, {
                    devModeChecks: { identityFunctionCheck: 'never' }
                  })
                : E,
            [E, w]
          ),
          k = r((O) => T(O, S.current), bo),
          M = i(),
          L = E(M.getState(), S.current)
        return (
          mC(() => {
            S.current = L
          }, [L]),
          k
        )
      }
    return {
      useQueryState: v,
      useQuerySubscription: _,
      useLazyQuerySubscription: x,
      useLazyQuery(p) {
        const [m, w] = x(p),
          b = v(w, { ...p, skip: w === Fu }),
          C = j.useMemo(() => ({ lastArg: w }), [w])
        return j.useMemo(() => [m, b, C], [m, b, C])
      },
      useQuery(p, m) {
        const w = _(p, m),
          b = v(p, {
            selectFromResult: p === mr || (m != null && m.skip) ? void 0 : vC,
            ...m
          }),
          {
            data: C,
            status: S,
            isLoading: E,
            isSuccess: T,
            isError: k,
            error: M
          } = b
        return (
          j.useDebugValue({
            data: C,
            status: S,
            isLoading: E,
            isSuccess: T,
            isError: k,
            error: M
          }),
          j.useMemo(() => ({ ...b, ...w }), [b, w])
        )
      }
    }
  }
  function g(y) {
    return ({ selectFromResult: _, fixedCacheKey: x } = {}) => {
      const { select: v, initiate: p } = e.endpoints[y],
        m = n(),
        [w, b] = j.useState()
      j.useEffect(
        () => () => {
          ;(w != null && w.arg.fixedCacheKey) || w == null || w.reset()
        },
        [w]
      )
      const C = j.useCallback(
          function (V) {
            const q = m(p(V, { fixedCacheKey: x }))
            return b(q), q
          },
          [m, p, x]
        ),
        { requestId: S } = w || {},
        E = j.useMemo(
          () =>
            v({
              fixedCacheKey: x,
              requestId: w == null ? void 0 : w.requestId
            }),
          [x, w, v]
        ),
        T = j.useMemo(() => (_ ? a([E], _) : E), [_, E]),
        k = r(T, bo),
        M = x == null ? (w == null ? void 0 : w.arg.originalArgs) : void 0,
        L = j.useCallback(() => {
          t(() => {
            w && b(void 0),
              x &&
                m(
                  e.internalActions.removeMutationResult({
                    requestId: S,
                    fixedCacheKey: x
                  })
                )
          })
        }, [m, x, w, S]),
        {
          endpointName: O,
          data: A,
          status: z,
          isLoading: R,
          isSuccess: I,
          isError: N,
          error: F
        } = k
      j.useDebugValue({
        endpointName: O,
        data: A,
        status: z,
        isLoading: R,
        isSuccess: I,
        isError: N,
        error: F
      })
      const $ = j.useMemo(
        () => ({ ...k, originalArgs: M, reset: L }),
        [k, M, L]
      )
      return j.useMemo(() => [C, $], [C, $])
    }
  }
}
var yC = Symbol(),
  _C = ({
    batch: e = Mx,
    hooks: t = { useDispatch: i1, useSelector: e1, useStore: r1 },
    createSelector: n = hp,
    unstable__sideEffectsInRender: r = !1,
    ...i
  } = {}) => ({
    name: yC,
    init(o, { serializeQueryArgs: a }, s) {
      const l = o,
        {
          buildQueryHooks: u,
          buildMutationHook: c,
          usePrefetch: f
        } = gC({
          api: o,
          moduleOptions: {
            batch: e,
            hooks: t,
            unstable__sideEffectsInRender: r,
            createSelector: n
          },
          serializeQueryArgs: a,
          context: s
        })
      return (
        Ka(l, { usePrefetch: f }),
        Ka(s, { batch: e }),
        {
          injectEndpoint(d, g) {
            if (sC(g)) {
              const {
                useQuery: y,
                useLazyQuery: _,
                useLazyQuerySubscription: x,
                useQueryState: v,
                useQuerySubscription: p
              } = u(d)
              Ka(l.endpoints[d], {
                useQuery: y,
                useLazyQuery: _,
                useLazyQuerySubscription: x,
                useQueryState: v,
                useQuerySubscription: p
              }),
                (o[`use${Iu(d)}Query`] = y),
                (o[`useLazy${Iu(d)}Query`] = _)
            } else if (lC(g)) {
              const y = c(d)
              Ka(l.endpoints[d], { useMutation: y }),
                (o[`use${Iu(d)}Mutation`] = y)
            }
          }
        }
      )
    }
  }),
  M1 = QS(aC(), _C())
const Qr = 'shopninja-optimarko.myshopify.com',
  Eo = M1({
    reducerPath: 'orderEditApi',
    baseQuery: C1({
      baseUrl: 'https://order-editing-staging.cleversity.com/api/storefront'
    }),
    endpoints: (e) => ({
      searchOrder: e.mutation({
        query: (t, n) => ({
          url: `process-eligible-order?order_name=${t}&shop_url=${Qr}&email=${n}`,
          method: 'GET'
        })
      }),
      cancelOrder: e.mutation({
        query: (t) => ({
          url: `order-cancellation?shop_url=${Qr}`,
          method: 'POST',
          body: t
        })
      }),
      getCalculatedOrder: e.query({
        query: (t) =>
          `adjust-product-quantity/${t.split('/').pop()}?shop_url=${Qr}`,
        transformResponse: (t) => t.data
      }),
      changeQuantity: e.mutation({
        query: (t) => ({
          url: `adjust-product-quantity?shop_url=${Qr}`,
          method: 'POST',
          body: t
        })
      }),
      changeSippingAddress: e.mutation({
        query: (t) => ({
          url: `update-shipping-address?shop_url=${Qr}`,
          method: 'POST',
          body: t
        })
      }),
      changeSizeAndVariants: e.mutation({
        query: (t) => ({
          url: `switch-product?shop_url=${Qr}`,
          method: 'POST',
          body: t
        })
      })
    })
  }),
  {
    useSearchOrderMutation: wC,
    useCancelOrderMutation: $7,
    useLazyGetCalculatedOrderQuery: D7,
    useChangeQuantityMutation: z7,
    useChangeSippingAddressMutation: V7,
    useChangeSizeAndVariantsMutation: B7
  } = Eo,
  xC = { order: {}, page: 'Home' },
  N1 = Rn({
    name: 'orderEdit',
    initialState: xC,
    reducers: {
      setPage: (e, t) => {
        e.page = t.payload
      }
    },
    extraReducers: (e) => {
      e.addMatcher(Eo.endpoints.searchOrder.matchFulfilled, (t, n) => {
        t.order = n.payload.order
      })
    }
  }),
  { setPage: bC } = N1.actions,
  SC = N1.reducer,
  CC = () => {
    const [e, t] = j.useState(''),
      [n, { isLoading: r, isError: i }] = wC(),
      [o, a] = j.useState(''),
      s = i1(),
      l = async (u) => {
        var d, g, y, _, x
        u.preventDefault()
        const c = {
            email: u.target.email.value,
            order_name: u.target.orderName.value
          },
          f = await n(c)
        ;((d = f.error) == null ? void 0 : d.status) === 404 &&
          a('Order not found'),
          (((g = f.data) == null ? void 0 : g.eligibility) === !1 ||
            ((y = f.error) == null ? void 0 : y.status) === 403) &&
            a("You can't order this order"),
          (x = (_ = f.data) == null ? void 0 : _.order) != null &&
            x.id &&
            s(bC('OrderDetails'))
      }
    return (
      j.useEffect(() => {
        const u = () => {
          const c = window.matchMedia('(max-width: 721px)').matches
          t(
            c
              ? 'https://i.ibb.co.com/N9T6Jpv/shoe.png'
              : 'https://i.ibb.co.com/3SJnCqV/product.png'
          )
        }
        return (
          u(),
          window.addEventListener('resize', u),
          () => {
            window.removeEventListener('resize', u)
          }
        )
      }, []),
      h.jsx('div', {
        className: Be.opt_search_order_container,
        children: h.jsxs('div', {
          className: Be.loginComponent,
          children: [
            h.jsx('div', {
              className: Be.loginBanner,
              children: h.jsx('img', {
                className: Be.bannerImage,
                src: e,
                alt: 'Login Banner'
              })
            }),
            h.jsx('div', {
              className: Be.loginForm,
              children: h.jsxs('div', {
                className: Be.formContainer,
                children: [
                  h.jsx('h1', { className: Be.title, children: 'Edit order' }),
                  h.jsx('small', {
                    className: Be.subtitle,
                    children:
                      'Enter your order name and Email to find your order.'
                  }),
                  h.jsxs('form', {
                    onSubmit: l,
                    className: Be.form,
                    children: [
                      h.jsx('div', {
                        className: Be.inputGroup,
                        children: h.jsx('input', {
                          required: !0,
                          name: 'orderName',
                          type: 'text',
                          placeholder: 'Order name',
                          className: Be.inputField
                        })
                      }),
                      h.jsx('div', {
                        className: Be.inputGroup,
                        children: h.jsx('input', {
                          required: !0,
                          name: 'email',
                          type: 'text',
                          placeholder: 'Email address',
                          className: Be.inputField
                        })
                      }),
                      h.jsx('div', {
                        className: Be.buttonGroup,
                        children: h.jsx('button', {
                          className: Be.signInButton,
                          children: 'Sign in'
                        })
                      })
                    ]
                  })
                ]
              })
            })
          ]
        })
      })
    )
  },
  EC = '_opt_order_edit_container_1xqi0_1',
  TC = '_setting_1xqi0_15',
  kC = '_content_1xqi0_37',
  jC = '_order_details_desktop_1xqi0_51',
  PC = '_order_summary_desktop_1xqi0_53',
  MC = '_productSection_1xqi0_61',
  NC = '_productLabel_1xqi0_71',
  OC = '_settings_box_1xqi0_83',
  LC = '_settings_icon_1xqi0_99',
  AC = '_settings_label_1xqi0_125',
  RC = '_productCard_1xqi0_133',
  IC = '_productImage_1xqi0_151',
  FC = '_productContent_1xqi0_175',
  $C = '_title_1xqi0_181',
  DC = '_description_1xqi0_197',
  zC = '_price_1xqi0_209',
  VC = '_addToCartBtn_1xqi0_221',
  BC = '_modal_main_container_1xqi0_257',
  HC = '_settings_more_box_1xqi0_283',
  de = {
    opt_order_edit_container: EC,
    setting: TC,
    content: kC,
    order_details_desktop: jC,
    order_summary_desktop: PC,
    productSection: MC,
    productLabel: NC,
    settings_box: OC,
    settings_icon: LC,
    settings_label: AC,
    productCard: RC,
    productImage: IC,
    productContent: FC,
    title: $C,
    description: DC,
    price: zC,
    addToCartBtn: VC,
    modal_main_container: BC,
    settings_more_box: HC
  },
  qC = ({
    width: e = '20px',
    height: t = '20px',
    stroke: n = 'currentColor',
    fill: r = 'none'
  }) =>
    h.jsxs('svg', {
      stroke: n,
      fill: r,
      strokeWidth: '2',
      viewBox: '0 0 24 24',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      height: e,
      width: t,
      xmlns: 'http://www.w3.org/2000/svg',
      children: [
        h.jsx('path', { d: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' }),
        h.jsx('circle', { cx: '12', cy: '10', r: '3' })
      ]
    }),
  Pm = ({
    width: e = '20px',
    height: t = '20px',
    stroke: n = 'currentColor',
    fill: r = 'none'
  }) =>
    h.jsxs('svg', {
      stroke: n,
      fill: r,
      strokeWidth: '2',
      viewBox: '0 0 24 24',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      height: t,
      width: e,
      xmlns: 'http://www.w3.org/2000/svg',
      children: [
        h.jsx('polyline', { points: '23 7 23 1 17 1' }),
        h.jsx('line', { x1: '16', y1: '8', x2: '23', y2: '1' }),
        h.jsx('path', {
          d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'
        })
      ]
    }),
  WC = ({
    width: e = '20px',
    height: t = '20px',
    stroke: n = 'currentColor',
    fill: r = 'currentColor'
  }) =>
    h.jsxs('svg', {
      stroke: n,
      fill: r,
      strokeWidth: '0',
      version: '1.1',
      viewBox: '0 0 17 17',
      height: t,
      width: e,
      xmlns: 'http://www.w3.org/2000/svg',
      children: [
        h.jsx('g', {}),
        h.jsx('path', { d: 'M16 9h-7v7h-1v-7h-7v-1h7v-7h1v7h7v1z' })
      ]
    }),
  UC = ({
    width: e = '20px',
    height: t = '20px',
    stroke: n = 'currentColor',
    fill: r = 'none'
  }) =>
    h.jsxs('svg', {
      stroke: n,
      fill: r,
      strokeWidth: '2',
      viewBox: '0 0 24 24',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      height: t,
      width: e,
      xmlns: 'http://www.w3.org/2000/svg',
      children: [
        h.jsx('path', {
          d: 'M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5'
        }),
        h.jsx('polyline', { points: '14 2 14 8 20 8' }),
        h.jsx('path', {
          d: 'M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z'
        })
      ]
    }),
  GC = ({
    width: e = '20px',
    height: t = '20px',
    stroke: n = 'currentColor',
    fill: r = 'none'
  }) =>
    h.jsxs('svg', {
      stroke: n,
      fill: r,
      strokeWidth: '2',
      viewBox: '0 0 24 24',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      height: t,
      width: e,
      xmlns: 'http://www.w3.org/2000/svg',
      children: [
        h.jsx('polyline', { points: '17 1 21 5 17 9' }),
        h.jsx('path', { d: 'M3 11V9a4 4 0 0 1 4-4h14' }),
        h.jsx('polyline', { points: '7 23 3 19 7 15' }),
        h.jsx('path', { d: 'M21 13v2a4 4 0 0 1-4 4H3' })
      ]
    }),
  QC = ({
    width: e = '20px',
    height: t = '20px',
    stroke: n = 'currentColor',
    fill: r = 'currentColor'
  }) =>
    h.jsx('svg', {
      stroke: n,
      fill: r,
      strokeWidth: '0',
      viewBox: '0 0 16 16',
      height: t,
      width: e,
      xmlns: 'http://www.w3.org/2000/svg',
      children: h.jsx('path', {
        d: 'M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z'
      })
    }),
  KC = ({
    width: e = '20px',
    height: t = '20px',
    stroke: n = 'currentColor',
    fill: r = 'currentColor'
  }) =>
    h.jsxs('svg', {
      stroke: n,
      fill: r,
      strokeWidth: '0',
      viewBox: '0 0 24 24',
      height: t,
      width: e,
      xmlns: 'http://www.w3.org/2000/svg',
      children: [
        h.jsx('path', { fill: 'none', d: 'M0 0h24v24H0z' }),
        h.jsx('path', {
          d: 'M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z'
        })
      ]
    }),
  Du = ({
    width: e = '20px',
    height: t = '20px',
    stroke: n = 'currentColor',
    fill: r = 'currentColor'
  }) =>
    h.jsxs('svg', {
      stroke: n,
      fill: r,
      strokeWidth: '0',
      viewBox: '0 0 16 16',
      height: t,
      width: e,
      xmlns: 'http://www.w3.org/2000/svg',
      children: [
        h.jsx('path', {
          d: 'M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293z'
        }),
        h.jsx('path', {
          d: 'M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z'
        })
      ]
    }),
  XC = ({
    width: e = '20px',
    height: t = '20px',
    stroke: n = 'currentColor',
    fill: r = 'currentColor'
  }) =>
    h.jsx('svg', {
      stroke: n,
      fill: r,
      strokeWidth: '0',
      height: t,
      width: e,
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 24 24',
      children: h.jsx('path', {
        d: 'M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z'
      })
    })
function Mm(e) {
  return (
    e !== null &&
    typeof e == 'object' &&
    'constructor' in e &&
    e.constructor === Object
  )
}
function wp(e, t) {
  e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach((n) => {
      typeof e[n] > 'u'
        ? (e[n] = t[n])
        : Mm(t[n]) && Mm(e[n]) && Object.keys(t[n]).length > 0 && wp(e[n], t[n])
    })
}
const O1 = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: '' },
  querySelector() {
    return null
  },
  querySelectorAll() {
    return []
  },
  getElementById() {
    return null
  },
  createEvent() {
    return { initEvent() {} }
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return []
      }
    }
  },
  createElementNS() {
    return {}
  },
  importNode() {
    return null
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  }
}
function _n() {
  const e = typeof document < 'u' ? document : {}
  return wp(e, O1), e
}
const YC = {
  document: O1,
  navigator: { userAgent: '' },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return ''
      }
    }
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {}
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > 'u' ? (e(), null) : setTimeout(e, 0)
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > 'u' || clearTimeout(e)
  }
}
function vt() {
  const e = typeof window < 'u' ? window : {}
  return wp(e, YC), e
}
function ZC(e) {
  return (
    e === void 0 && (e = ''),
    e
      .trim()
      .split(' ')
      .filter((t) => !!t.trim())
  )
}
function JC(e) {
  const t = e
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null
    } catch {}
    try {
      delete t[n]
    } catch {}
  })
}
function yd(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t)
}
function sl() {
  return Date.now()
}
function eE(e) {
  const t = vt()
  let n
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  )
}
function tE(e, t) {
  t === void 0 && (t = 'x')
  const n = vt()
  let r, i, o
  const a = eE(e)
  return (
    n.WebKitCSSMatrix
      ? ((i = a.transform || a.webkitTransform),
        i.split(',').length > 6 &&
          (i = i
            .split(', ')
            .map((s) => s.replace(',', '.'))
            .join(', ')),
        (o = new n.WebKitCSSMatrix(i === 'none' ? '' : i)))
      : ((o =
          a.MozTransform ||
          a.OTransform ||
          a.MsTransform ||
          a.msTransform ||
          a.transform ||
          a
            .getPropertyValue('transform')
            .replace('translate(', 'matrix(1, 0, 0, 1,')),
        (r = o.toString().split(','))),
    t === 'x' &&
      (n.WebKitCSSMatrix
        ? (i = o.m41)
        : r.length === 16
        ? (i = parseFloat(r[12]))
        : (i = parseFloat(r[4]))),
    t === 'y' &&
      (n.WebKitCSSMatrix
        ? (i = o.m42)
        : r.length === 16
        ? (i = parseFloat(r[13]))
        : (i = parseFloat(r[5]))),
    i || 0
  )
}
function Xa(e) {
  return (
    typeof e == 'object' &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === 'Object'
  )
}
function nE(e) {
  return typeof window < 'u' && typeof window.HTMLElement < 'u'
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11)
}
function st() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ['__proto__', 'constructor', 'prototype']
  for (let n = 1; n < arguments.length; n += 1) {
    const r = n < 0 || arguments.length <= n ? void 0 : arguments[n]
    if (r != null && !nE(r)) {
      const i = Object.keys(Object(r)).filter((o) => t.indexOf(o) < 0)
      for (let o = 0, a = i.length; o < a; o += 1) {
        const s = i[o],
          l = Object.getOwnPropertyDescriptor(r, s)
        l !== void 0 &&
          l.enumerable &&
          (Xa(e[s]) && Xa(r[s])
            ? r[s].__swiper__
              ? (e[s] = r[s])
              : st(e[s], r[s])
            : !Xa(e[s]) && Xa(r[s])
            ? ((e[s] = {}), r[s].__swiper__ ? (e[s] = r[s]) : st(e[s], r[s]))
            : (e[s] = r[s]))
      }
    }
  }
  return e
}
function Ya(e, t, n) {
  e.style.setProperty(t, n)
}
function L1(e) {
  let { swiper: t, targetPosition: n, side: r } = e
  const i = vt(),
    o = -t.translate
  let a = null,
    s
  const l = t.params.speed
  ;(t.wrapperEl.style.scrollSnapType = 'none'),
    i.cancelAnimationFrame(t.cssModeFrameID)
  const u = n > o ? 'next' : 'prev',
    c = (d, g) => (u === 'next' && d >= g) || (u === 'prev' && d <= g),
    f = () => {
      ;(s = new Date().getTime()), a === null && (a = s)
      const d = Math.max(Math.min((s - a) / l, 1), 0),
        g = 0.5 - Math.cos(d * Math.PI) / 2
      let y = o + g * (n - o)
      if ((c(y, n) && (y = n), t.wrapperEl.scrollTo({ [r]: y }), c(y, n))) {
        ;(t.wrapperEl.style.overflow = 'hidden'),
          (t.wrapperEl.style.scrollSnapType = ''),
          setTimeout(() => {
            ;(t.wrapperEl.style.overflow = ''), t.wrapperEl.scrollTo({ [r]: y })
          }),
          i.cancelAnimationFrame(t.cssModeFrameID)
        return
      }
      t.cssModeFrameID = i.requestAnimationFrame(f)
    }
  f()
}
function gn(e, t) {
  t === void 0 && (t = '')
  const n = [...e.children]
  return (
    e instanceof HTMLSlotElement && n.push(...e.assignedElements()),
    t ? n.filter((r) => r.matches(t)) : n
  )
}
function rE(e, t) {
  const n = t.contains(e)
  return !n && t instanceof HTMLSlotElement
    ? [...t.assignedElements()].includes(e)
    : n
}
function ll(e) {
  try {
    console.warn(e)
    return
  } catch {}
}
function _d(e, t) {
  t === void 0 && (t = [])
  const n = document.createElement(e)
  return n.classList.add(...(Array.isArray(t) ? t : ZC(t))), n
}
function iE(e, t) {
  const n = []
  for (; e.previousElementSibling; ) {
    const r = e.previousElementSibling
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r)
  }
  return n
}
function oE(e, t) {
  const n = []
  for (; e.nextElementSibling; ) {
    const r = e.nextElementSibling
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r)
  }
  return n
}
function Vn(e, t) {
  return vt().getComputedStyle(e, null).getPropertyValue(t)
}
function Nm(e) {
  let t = e,
    n
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; ) t.nodeType === 1 && (n += 1)
    return n
  }
}
function aE(e, t) {
  const n = []
  let r = e.parentElement
  for (; r; ) n.push(r), (r = r.parentElement)
  return n
}
function Om(e, t, n) {
  const r = vt()
  return (
    e[t === 'width' ? 'offsetWidth' : 'offsetHeight'] +
    parseFloat(
      r
        .getComputedStyle(e, null)
        .getPropertyValue(t === 'width' ? 'margin-right' : 'margin-top')
    ) +
    parseFloat(
      r
        .getComputedStyle(e, null)
        .getPropertyValue(t === 'width' ? 'margin-left' : 'margin-bottom')
    )
  )
}
let zu
function sE() {
  const e = vt(),
    t = _n()
  return {
    smoothScroll:
      t.documentElement &&
      t.documentElement.style &&
      'scrollBehavior' in t.documentElement.style,
    touch: !!(
      'ontouchstart' in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    )
  }
}
function A1() {
  return zu || (zu = sE()), zu
}
let Vu
function lE(e) {
  let { userAgent: t } = e === void 0 ? {} : e
  const n = A1(),
    r = vt(),
    i = r.navigator.platform,
    o = t || r.navigator.userAgent,
    a = { ios: !1, android: !1 },
    s = r.screen.width,
    l = r.screen.height,
    u = o.match(/(Android);?[\s\/]+([\d.]+)?/)
  let c = o.match(/(iPad).*OS\s([\d_]+)/)
  const f = o.match(/(iPod)(.*OS\s([\d_]+))?/),
    d = !c && o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    g = i === 'Win32'
  let y = i === 'MacIntel'
  const _ = [
    '1024x1366',
    '1366x1024',
    '834x1194',
    '1194x834',
    '834x1112',
    '1112x834',
    '768x1024',
    '1024x768',
    '820x1180',
    '1180x820',
    '810x1080',
    '1080x810'
  ]
  return (
    !c &&
      y &&
      n.touch &&
      _.indexOf(`${s}x${l}`) >= 0 &&
      ((c = o.match(/(Version)\/([\d.]+)/)),
      c || (c = [0, 1, '13_0_0']),
      (y = !1)),
    u && !g && ((a.os = 'android'), (a.android = !0)),
    (c || d || f) && ((a.os = 'ios'), (a.ios = !0)),
    a
  )
}
function R1(e) {
  return e === void 0 && (e = {}), Vu || (Vu = lE(e)), Vu
}
let Bu
function uE() {
  const e = vt(),
    t = R1()
  let n = !1
  function r() {
    const s = e.navigator.userAgent.toLowerCase()
    return (
      s.indexOf('safari') >= 0 &&
      s.indexOf('chrome') < 0 &&
      s.indexOf('android') < 0
    )
  }
  if (r()) {
    const s = String(e.navigator.userAgent)
    if (s.includes('Version/')) {
      const [l, u] = s
        .split('Version/')[1]
        .split(' ')[0]
        .split('.')
        .map((c) => Number(c))
      n = l < 16 || (l === 16 && u < 2)
    }
  }
  const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent
    ),
    o = r(),
    a = o || (i && t.ios)
  return { isSafari: n || o, needPerspectiveFix: n, need3dFix: a, isWebView: i }
}
function cE() {
  return Bu || (Bu = uE()), Bu
}
function dE(e) {
  let { swiper: t, on: n, emit: r } = e
  const i = vt()
  let o = null,
    a = null
  const s = () => {
      !t || t.destroyed || !t.initialized || (r('beforeResize'), r('resize'))
    },
    l = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((o = new ResizeObserver((f) => {
          a = i.requestAnimationFrame(() => {
            const { width: d, height: g } = t
            let y = d,
              _ = g
            f.forEach((x) => {
              let { contentBoxSize: v, contentRect: p, target: m } = x
              ;(m && m !== t.el) ||
                ((y = p ? p.width : (v[0] || v).inlineSize),
                (_ = p ? p.height : (v[0] || v).blockSize))
            }),
              (y !== d || _ !== g) && s()
          })
        })),
        o.observe(t.el))
    },
    u = () => {
      a && i.cancelAnimationFrame(a),
        o && o.unobserve && t.el && (o.unobserve(t.el), (o = null))
    },
    c = () => {
      !t || t.destroyed || !t.initialized || r('orientationchange')
    }
  n('init', () => {
    if (t.params.resizeObserver && typeof i.ResizeObserver < 'u') {
      l()
      return
    }
    i.addEventListener('resize', s), i.addEventListener('orientationchange', c)
  }),
    n('destroy', () => {
      u(),
        i.removeEventListener('resize', s),
        i.removeEventListener('orientationchange', c)
    })
}
function fE(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e
  const o = [],
    a = vt(),
    s = function (c, f) {
      f === void 0 && (f = {})
      const d = a.MutationObserver || a.WebkitMutationObserver,
        g = new d((y) => {
          if (t.__preventObserver__) return
          if (y.length === 1) {
            i('observerUpdate', y[0])
            return
          }
          const _ = function () {
            i('observerUpdate', y[0])
          }
          a.requestAnimationFrame
            ? a.requestAnimationFrame(_)
            : a.setTimeout(_, 0)
        })
      g.observe(c, {
        attributes: typeof f.attributes > 'u' ? !0 : f.attributes,
        childList: t.isElement || (typeof f.childList > 'u' ? !0 : f).childList,
        characterData: typeof f.characterData > 'u' ? !0 : f.characterData
      }),
        o.push(g)
    },
    l = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const c = aE(t.hostEl)
          for (let f = 0; f < c.length; f += 1) s(c[f])
        }
        s(t.hostEl, { childList: t.params.observeSlideChildren }),
          s(t.wrapperEl, { attributes: !1 })
      }
    },
    u = () => {
      o.forEach((c) => {
        c.disconnect()
      }),
        o.splice(0, o.length)
    }
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    r('init', l),
    r('destroy', u)
}
var pE = {
  on(e, t, n) {
    const r = this
    if (!r.eventsListeners || r.destroyed || typeof t != 'function') return r
    const i = n ? 'unshift' : 'push'
    return (
      e.split(' ').forEach((o) => {
        r.eventsListeners[o] || (r.eventsListeners[o] = []),
          r.eventsListeners[o][i](t)
      }),
      r
    )
  },
  once(e, t, n) {
    const r = this
    if (!r.eventsListeners || r.destroyed || typeof t != 'function') return r
    function i() {
      r.off(e, i), i.__emitterProxy && delete i.__emitterProxy
      for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
        a[s] = arguments[s]
      t.apply(r, a)
    }
    return (i.__emitterProxy = t), r.on(e, i, n)
  },
  onAny(e, t) {
    const n = this
    if (!n.eventsListeners || n.destroyed || typeof e != 'function') return n
    const r = t ? 'unshift' : 'push'
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n
  },
  offAny(e) {
    const t = this
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t
    const n = t.eventsAnyListeners.indexOf(e)
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t
  },
  off(e, t) {
    const n = this
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(' ').forEach((r) => {
          typeof t > 'u'
            ? (n.eventsListeners[r] = [])
            : n.eventsListeners[r] &&
              n.eventsListeners[r].forEach((i, o) => {
                ;(i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                  n.eventsListeners[r].splice(o, 1)
              })
        }),
      n
    )
  },
  emit() {
    const e = this
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e
    let t, n, r
    for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++)
      o[a] = arguments[a]
    return (
      typeof o[0] == 'string' || Array.isArray(o[0])
        ? ((t = o[0]), (n = o.slice(1, o.length)), (r = e))
        : ((t = o[0].events), (n = o[0].data), (r = o[0].context || e)),
      n.unshift(r),
      (Array.isArray(t) ? t : t.split(' ')).forEach((l) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((u) => {
            u.apply(r, [l, ...n])
          }),
          e.eventsListeners &&
            e.eventsListeners[l] &&
            e.eventsListeners[l].forEach((u) => {
              u.apply(r, n)
            })
      }),
      e
    )
  }
}
function hE() {
  const e = this
  let t, n
  const r = e.el
  typeof e.params.width < 'u' && e.params.width !== null
    ? (t = e.params.width)
    : (t = r.clientWidth),
    typeof e.params.height < 'u' && e.params.height !== null
      ? (n = e.params.height)
      : (n = r.clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(Vn(r, 'padding-left') || 0, 10) -
        parseInt(Vn(r, 'padding-right') || 0, 10)),
      (n =
        n -
        parseInt(Vn(r, 'padding-top') || 0, 10) -
        parseInt(Vn(r, 'padding-bottom') || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, { width: t, height: n, size: e.isHorizontal() ? t : n }))
}
function mE() {
  const e = this
  function t(k, M) {
    return parseFloat(k.getPropertyValue(e.getDirectionLabel(M)) || 0)
  }
  const n = e.params,
    { wrapperEl: r, slidesEl: i, size: o, rtlTranslate: a, wrongRTL: s } = e,
    l = e.virtual && n.virtual.enabled,
    u = l ? e.virtual.slides.length : e.slides.length,
    c = gn(i, `.${e.params.slideClass}, swiper-slide`),
    f = l ? e.virtual.slides.length : c.length
  let d = []
  const g = [],
    y = []
  let _ = n.slidesOffsetBefore
  typeof _ == 'function' && (_ = n.slidesOffsetBefore.call(e))
  let x = n.slidesOffsetAfter
  typeof x == 'function' && (x = n.slidesOffsetAfter.call(e))
  const v = e.snapGrid.length,
    p = e.slidesGrid.length
  let m = n.spaceBetween,
    w = -_,
    b = 0,
    C = 0
  if (typeof o > 'u') return
  typeof m == 'string' && m.indexOf('%') >= 0
    ? (m = (parseFloat(m.replace('%', '')) / 100) * o)
    : typeof m == 'string' && (m = parseFloat(m)),
    (e.virtualSize = -m),
    c.forEach((k) => {
      a ? (k.style.marginLeft = '') : (k.style.marginRight = ''),
        (k.style.marginBottom = ''),
        (k.style.marginTop = '')
    }),
    n.centeredSlides &&
      n.cssMode &&
      (Ya(r, '--swiper-centered-offset-before', ''),
      Ya(r, '--swiper-centered-offset-after', ''))
  const S = n.grid && n.grid.rows > 1 && e.grid
  S ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides()
  let E
  const T =
    n.slidesPerView === 'auto' &&
    n.breakpoints &&
    Object.keys(n.breakpoints).filter(
      (k) => typeof n.breakpoints[k].slidesPerView < 'u'
    ).length > 0
  for (let k = 0; k < f; k += 1) {
    E = 0
    let M
    if (
      (c[k] && (M = c[k]),
      S && e.grid.updateSlide(k, M, c),
      !(c[k] && Vn(M, 'display') === 'none'))
    ) {
      if (n.slidesPerView === 'auto') {
        T && (c[k].style[e.getDirectionLabel('width')] = '')
        const L = getComputedStyle(M),
          O = M.style.transform,
          A = M.style.webkitTransform
        if (
          (O && (M.style.transform = 'none'),
          A && (M.style.webkitTransform = 'none'),
          n.roundLengths)
        )
          E = e.isHorizontal() ? Om(M, 'width') : Om(M, 'height')
        else {
          const z = t(L, 'width'),
            R = t(L, 'padding-left'),
            I = t(L, 'padding-right'),
            N = t(L, 'margin-left'),
            F = t(L, 'margin-right'),
            $ = L.getPropertyValue('box-sizing')
          if ($ && $ === 'border-box') E = z + N + F
          else {
            const { clientWidth: V, offsetWidth: q } = M
            E = z + R + I + N + F + (q - V)
          }
        }
        O && (M.style.transform = O),
          A && (M.style.webkitTransform = A),
          n.roundLengths && (E = Math.floor(E))
      } else
        (E = (o - (n.slidesPerView - 1) * m) / n.slidesPerView),
          n.roundLengths && (E = Math.floor(E)),
          c[k] && (c[k].style[e.getDirectionLabel('width')] = `${E}px`)
      c[k] && (c[k].swiperSlideSize = E),
        y.push(E),
        n.centeredSlides
          ? ((w = w + E / 2 + b / 2 + m),
            b === 0 && k !== 0 && (w = w - o / 2 - m),
            k === 0 && (w = w - o / 2 - m),
            Math.abs(w) < 1 / 1e3 && (w = 0),
            n.roundLengths && (w = Math.floor(w)),
            C % n.slidesPerGroup === 0 && d.push(w),
            g.push(w))
          : (n.roundLengths && (w = Math.floor(w)),
            (C - Math.min(e.params.slidesPerGroupSkip, C)) %
              e.params.slidesPerGroup ===
              0 && d.push(w),
            g.push(w),
            (w = w + E + m)),
        (e.virtualSize += E + m),
        (b = E),
        (C += 1)
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, o) + x),
    a &&
      s &&
      (n.effect === 'slide' || n.effect === 'coverflow') &&
      (r.style.width = `${e.virtualSize + m}px`),
    n.setWrapperSize &&
      (r.style[e.getDirectionLabel('width')] = `${e.virtualSize + m}px`),
    S && e.grid.updateWrapperSize(E, d),
    !n.centeredSlides)
  ) {
    const k = []
    for (let M = 0; M < d.length; M += 1) {
      let L = d[M]
      n.roundLengths && (L = Math.floor(L)),
        d[M] <= e.virtualSize - o && k.push(L)
    }
    ;(d = k),
      Math.floor(e.virtualSize - o) - Math.floor(d[d.length - 1]) > 1 &&
        d.push(e.virtualSize - o)
  }
  if (l && n.loop) {
    const k = y[0] + m
    if (n.slidesPerGroup > 1) {
      const M = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup
        ),
        L = k * n.slidesPerGroup
      for (let O = 0; O < M; O += 1) d.push(d[d.length - 1] + L)
    }
    for (let M = 0; M < e.virtual.slidesBefore + e.virtual.slidesAfter; M += 1)
      n.slidesPerGroup === 1 && d.push(d[d.length - 1] + k),
        g.push(g[g.length - 1] + k),
        (e.virtualSize += k)
  }
  if ((d.length === 0 && (d = [0]), m !== 0)) {
    const k =
      e.isHorizontal() && a ? 'marginLeft' : e.getDirectionLabel('marginRight')
    c.filter((M, L) =>
      !n.cssMode || n.loop ? !0 : L !== c.length - 1
    ).forEach((M) => {
      M.style[k] = `${m}px`
    })
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let k = 0
    y.forEach((L) => {
      k += L + (m || 0)
    }),
      (k -= m)
    const M = k > o ? k - o : 0
    d = d.map((L) => (L <= 0 ? -_ : L > M ? M + x : L))
  }
  if (n.centerInsufficientSlides) {
    let k = 0
    y.forEach((L) => {
      k += L + (m || 0)
    }),
      (k -= m)
    const M = (n.slidesOffsetBefore || 0) + (n.slidesOffsetAfter || 0)
    if (k + M < o) {
      const L = (o - k - M) / 2
      d.forEach((O, A) => {
        d[A] = O - L
      }),
        g.forEach((O, A) => {
          g[A] = O + L
        })
    }
  }
  if (
    (Object.assign(e, {
      slides: c,
      snapGrid: d,
      slidesGrid: g,
      slidesSizesGrid: y
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    Ya(r, '--swiper-centered-offset-before', `${-d[0]}px`),
      Ya(
        r,
        '--swiper-centered-offset-after',
        `${e.size / 2 - y[y.length - 1] / 2}px`
      )
    const k = -e.snapGrid[0],
      M = -e.slidesGrid[0]
    ;(e.snapGrid = e.snapGrid.map((L) => L + k)),
      (e.slidesGrid = e.slidesGrid.map((L) => L + M))
  }
  if (
    (f !== u && e.emit('slidesLengthChange'),
    d.length !== v &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit('snapGridLengthChange')),
    g.length !== p && e.emit('slidesGridLengthChange'),
    n.watchSlidesProgress && e.updateSlidesOffset(),
    e.emit('slidesUpdated'),
    !l && !n.cssMode && (n.effect === 'slide' || n.effect === 'fade'))
  ) {
    const k = `${n.containerModifierClass}backface-hidden`,
      M = e.el.classList.contains(k)
    f <= n.maxBackfaceHiddenSlides
      ? M || e.el.classList.add(k)
      : M && e.el.classList.remove(k)
  }
}
function vE(e) {
  const t = this,
    n = [],
    r = t.virtual && t.params.virtual.enabled
  let i = 0,
    o
  typeof e == 'number'
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed)
  const a = (s) => (r ? t.slides[t.getSlideIndexByData(s)] : t.slides[s])
  if (t.params.slidesPerView !== 'auto' && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((s) => {
        n.push(s)
      })
    else
      for (o = 0; o < Math.ceil(t.params.slidesPerView); o += 1) {
        const s = t.activeIndex + o
        if (s > t.slides.length && !r) break
        n.push(a(s))
      }
  else n.push(a(t.activeIndex))
  for (o = 0; o < n.length; o += 1)
    if (typeof n[o] < 'u') {
      const s = n[o].offsetHeight
      i = s > i ? s : i
    }
  ;(i || i === 0) && (t.wrapperEl.style.height = `${i}px`)
}
function gE() {
  const e = this,
    t = e.slides,
    n = e.isElement
      ? e.isHorizontal()
        ? e.wrapperEl.offsetLeft
        : e.wrapperEl.offsetTop
      : 0
  for (let r = 0; r < t.length; r += 1)
    t[r].swiperSlideOffset =
      (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) -
      n -
      e.cssOverflowAdjustment()
}
const Lm = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n)
}
function yE(e) {
  e === void 0 && (e = (this && this.translate) || 0)
  const t = this,
    n = t.params,
    { slides: r, rtlTranslate: i, snapGrid: o } = t
  if (r.length === 0) return
  typeof r[0].swiperSlideOffset > 'u' && t.updateSlidesOffset()
  let a = -e
  i && (a = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = [])
  let s = n.spaceBetween
  typeof s == 'string' && s.indexOf('%') >= 0
    ? (s = (parseFloat(s.replace('%', '')) / 100) * t.size)
    : typeof s == 'string' && (s = parseFloat(s))
  for (let l = 0; l < r.length; l += 1) {
    const u = r[l]
    let c = u.swiperSlideOffset
    n.cssMode && n.centeredSlides && (c -= r[0].swiperSlideOffset)
    const f =
        (a + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (u.swiperSlideSize + s),
      d =
        (a - o[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (u.swiperSlideSize + s),
      g = -(a - c),
      y = g + t.slidesSizesGrid[l],
      _ = g >= 0 && g <= t.size - t.slidesSizesGrid[l],
      x =
        (g >= 0 && g < t.size - 1) ||
        (y > 1 && y <= t.size) ||
        (g <= 0 && y >= t.size)
    x && (t.visibleSlides.push(u), t.visibleSlidesIndexes.push(l)),
      Lm(u, x, n.slideVisibleClass),
      Lm(u, _, n.slideFullyVisibleClass),
      (u.progress = i ? -f : f),
      (u.originalProgress = i ? -d : d)
  }
}
function _E(e) {
  const t = this
  if (typeof e > 'u') {
    const c = t.rtlTranslate ? -1 : 1
    e = (t && t.translate && t.translate * c) || 0
  }
  const n = t.params,
    r = t.maxTranslate() - t.minTranslate()
  let { progress: i, isBeginning: o, isEnd: a, progressLoop: s } = t
  const l = o,
    u = a
  if (r === 0) (i = 0), (o = !0), (a = !0)
  else {
    i = (e - t.minTranslate()) / r
    const c = Math.abs(e - t.minTranslate()) < 1,
      f = Math.abs(e - t.maxTranslate()) < 1
    ;(o = c || i <= 0), (a = f || i >= 1), c && (i = 0), f && (i = 1)
  }
  if (n.loop) {
    const c = t.getSlideIndexByData(0),
      f = t.getSlideIndexByData(t.slides.length - 1),
      d = t.slidesGrid[c],
      g = t.slidesGrid[f],
      y = t.slidesGrid[t.slidesGrid.length - 1],
      _ = Math.abs(e)
    _ >= d ? (s = (_ - d) / y) : (s = (_ + y - g) / y), s > 1 && (s -= 1)
  }
  Object.assign(t, { progress: i, progressLoop: s, isBeginning: o, isEnd: a }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    o && !l && t.emit('reachBeginning toEdge'),
    a && !u && t.emit('reachEnd toEdge'),
    ((l && !o) || (u && !a)) && t.emit('fromEdge'),
    t.emit('progress', i)
}
const Hu = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n)
}
function wE() {
  const e = this,
    { slides: t, params: n, slidesEl: r, activeIndex: i } = e,
    o = e.virtual && n.virtual.enabled,
    a = e.grid && n.grid && n.grid.rows > 1,
    s = (f) => gn(r, `.${n.slideClass}${f}, swiper-slide${f}`)[0]
  let l, u, c
  if (o)
    if (n.loop) {
      let f = i - e.virtual.slidesBefore
      f < 0 && (f = e.virtual.slides.length + f),
        f >= e.virtual.slides.length && (f -= e.virtual.slides.length),
        (l = s(`[data-swiper-slide-index="${f}"]`))
    } else l = s(`[data-swiper-slide-index="${i}"]`)
  else
    a
      ? ((l = t.filter((f) => f.column === i)[0]),
        (c = t.filter((f) => f.column === i + 1)[0]),
        (u = t.filter((f) => f.column === i - 1)[0]))
      : (l = t[i])
  l &&
    (a ||
      ((c = oE(l, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !c && (c = t[0]),
      (u = iE(l, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !u === 0 && (u = t[t.length - 1]))),
    t.forEach((f) => {
      Hu(f, f === l, n.slideActiveClass),
        Hu(f, f === c, n.slideNextClass),
        Hu(f, f === u, n.slidePrevClass)
    }),
    e.emitSlidesClasses()
}
const Cs = (e, t) => {
    if (!e || e.destroyed || !e.params) return
    const n = () => (e.isElement ? 'swiper-slide' : `.${e.params.slideClass}`),
      r = t.closest(n())
    if (r) {
      let i = r.querySelector(`.${e.params.lazyPreloaderClass}`)
      !i &&
        e.isElement &&
        (r.shadowRoot
          ? (i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              r.shadowRoot &&
                ((i = r.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`
                )),
                i && i.remove())
            })),
        i && i.remove()
    }
  },
  qu = (e, t) => {
    if (!e.slides[t]) return
    const n = e.slides[t].querySelector('[loading="lazy"]')
    n && n.removeAttribute('loading')
  },
  wd = (e) => {
    if (!e || e.destroyed || !e.params) return
    let t = e.params.lazyPreloadPrevNext
    const n = e.slides.length
    if (!n || !t || t < 0) return
    t = Math.min(t, n)
    const r =
        e.params.slidesPerView === 'auto'
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      i = e.activeIndex
    if (e.params.grid && e.params.grid.rows > 1) {
      const a = i,
        s = [a - t]
      s.push(...Array.from({ length: t }).map((l, u) => a + r + u)),
        e.slides.forEach((l, u) => {
          s.includes(l.column) && qu(e, u)
        })
      return
    }
    const o = i + r - 1
    if (e.params.rewind || e.params.loop)
      for (let a = i - t; a <= o + t; a += 1) {
        const s = ((a % n) + n) % n
        ;(s < i || s > o) && qu(e, s)
      }
    else
      for (let a = Math.max(i - t, 0); a <= Math.min(o + t, n - 1); a += 1)
        a !== i && (a > o || a < i) && qu(e, a)
  }
function xE(e) {
  const { slidesGrid: t, params: n } = e,
    r = e.rtlTranslate ? e.translate : -e.translate
  let i
  for (let o = 0; o < t.length; o += 1)
    typeof t[o + 1] < 'u'
      ? r >= t[o] && r < t[o + 1] - (t[o + 1] - t[o]) / 2
        ? (i = o)
        : r >= t[o] && r < t[o + 1] && (i = o + 1)
      : r >= t[o] && (i = o)
  return n.normalizeSlideIndex && (i < 0 || typeof i > 'u') && (i = 0), i
}
function bE(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: r, params: i, activeIndex: o, realIndex: a, snapIndex: s } = t
  let l = e,
    u
  const c = (g) => {
    let y = g - t.virtual.slidesBefore
    return (
      y < 0 && (y = t.virtual.slides.length + y),
      y >= t.virtual.slides.length && (y -= t.virtual.slides.length),
      y
    )
  }
  if ((typeof l > 'u' && (l = xE(t)), r.indexOf(n) >= 0)) u = r.indexOf(n)
  else {
    const g = Math.min(i.slidesPerGroupSkip, l)
    u = g + Math.floor((l - g) / i.slidesPerGroup)
  }
  if ((u >= r.length && (u = r.length - 1), l === o && !t.params.loop)) {
    u !== s && ((t.snapIndex = u), t.emit('snapIndexChange'))
    return
  }
  if (l === o && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = c(l)
    return
  }
  const f = t.grid && i.grid && i.grid.rows > 1
  let d
  if (t.virtual && i.virtual.enabled && i.loop) d = c(l)
  else if (f) {
    const g = t.slides.filter((_) => _.column === l)[0]
    let y = parseInt(g.getAttribute('data-swiper-slide-index'), 10)
    Number.isNaN(y) && (y = Math.max(t.slides.indexOf(g), 0)),
      (d = Math.floor(y / i.grid.rows))
  } else if (t.slides[l]) {
    const g = t.slides[l].getAttribute('data-swiper-slide-index')
    g ? (d = parseInt(g, 10)) : (d = l)
  } else d = l
  Object.assign(t, {
    previousSnapIndex: s,
    snapIndex: u,
    previousRealIndex: a,
    realIndex: d,
    previousIndex: o,
    activeIndex: l
  }),
    t.initialized && wd(t),
    t.emit('activeIndexChange'),
    t.emit('snapIndexChange'),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (a !== d && t.emit('realIndexChange'), t.emit('slideChange'))
}
function SE(e, t) {
  const n = this,
    r = n.params
  let i = e.closest(`.${r.slideClass}, swiper-slide`)
  !i &&
    n.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach((s) => {
      !i && s.matches && s.matches(`.${r.slideClass}, swiper-slide`) && (i = s)
    })
  let o = !1,
    a
  if (i) {
    for (let s = 0; s < n.slides.length; s += 1)
      if (n.slides[s] === i) {
        ;(o = !0), (a = s)
        break
      }
  }
  if (i && o)
    (n.clickedSlide = i),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(
            i.getAttribute('data-swiper-slide-index'),
            10
          ))
        : (n.clickedIndex = a)
  else {
    ;(n.clickedSlide = void 0), (n.clickedIndex = void 0)
    return
  }
  r.slideToClickedSlide &&
    n.clickedIndex !== void 0 &&
    n.clickedIndex !== n.activeIndex &&
    n.slideToClickedSlide()
}
var CE = {
  updateSize: hE,
  updateSlides: mE,
  updateAutoHeight: vE,
  updateSlidesOffset: gE,
  updateSlidesProgress: yE,
  updateProgress: _E,
  updateSlidesClasses: wE,
  updateActiveIndex: bE,
  updateClickedSlide: SE
}
function EE(e) {
  e === void 0 && (e = this.isHorizontal() ? 'x' : 'y')
  const t = this,
    { params: n, rtlTranslate: r, translate: i, wrapperEl: o } = t
  if (n.virtualTranslate) return r ? -i : i
  if (n.cssMode) return i
  let a = tE(o, e)
  return (a += t.cssOverflowAdjustment()), r && (a = -a), a || 0
}
function TE(e, t) {
  const n = this,
    { rtlTranslate: r, params: i, wrapperEl: o, progress: a } = n
  let s = 0,
    l = 0
  const u = 0
  n.isHorizontal() ? (s = r ? -e : e) : (l = e),
    i.roundLengths && ((s = Math.floor(s)), (l = Math.floor(l))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? s : l),
    i.cssMode
      ? (o[n.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = n.isHorizontal()
          ? -s
          : -l)
      : i.virtualTranslate ||
        (n.isHorizontal()
          ? (s -= n.cssOverflowAdjustment())
          : (l -= n.cssOverflowAdjustment()),
        (o.style.transform = `translate3d(${s}px, ${l}px, ${u}px)`))
  let c
  const f = n.maxTranslate() - n.minTranslate()
  f === 0 ? (c = 0) : (c = (e - n.minTranslate()) / f),
    c !== a && n.updateProgress(e),
    n.emit('setTranslate', n.translate, t)
}
function kE() {
  return -this.snapGrid[0]
}
function jE() {
  return -this.snapGrid[this.snapGrid.length - 1]
}
function PE(e, t, n, r, i) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    r === void 0 && (r = !0)
  const o = this,
    { params: a, wrapperEl: s } = o
  if (o.animating && a.preventInteractionOnTransition) return !1
  const l = o.minTranslate(),
    u = o.maxTranslate()
  let c
  if (
    (r && e > l ? (c = l) : r && e < u ? (c = u) : (c = e),
    o.updateProgress(c),
    a.cssMode)
  ) {
    const f = o.isHorizontal()
    if (t === 0) s[f ? 'scrollLeft' : 'scrollTop'] = -c
    else {
      if (!o.support.smoothScroll)
        return (
          L1({ swiper: o, targetPosition: -c, side: f ? 'left' : 'top' }), !0
        )
      s.scrollTo({ [f ? 'left' : 'top']: -c, behavior: 'smooth' })
    }
    return !0
  }
  return (
    t === 0
      ? (o.setTransition(0),
        o.setTranslate(c),
        n && (o.emit('beforeTransitionStart', t, i), o.emit('transitionEnd')))
      : (o.setTransition(t),
        o.setTranslate(c),
        n && (o.emit('beforeTransitionStart', t, i), o.emit('transitionStart')),
        o.animating ||
          ((o.animating = !0),
          o.onTranslateToWrapperTransitionEnd ||
            (o.onTranslateToWrapperTransitionEnd = function (d) {
              !o ||
                o.destroyed ||
                (d.target === this &&
                  (o.wrapperEl.removeEventListener(
                    'transitionend',
                    o.onTranslateToWrapperTransitionEnd
                  ),
                  (o.onTranslateToWrapperTransitionEnd = null),
                  delete o.onTranslateToWrapperTransitionEnd,
                  (o.animating = !1),
                  n && o.emit('transitionEnd')))
            }),
          o.wrapperEl.addEventListener(
            'transitionend',
            o.onTranslateToWrapperTransitionEnd
          ))),
    !0
  )
}
var ME = {
  getTranslate: EE,
  setTranslate: TE,
  minTranslate: kE,
  maxTranslate: jE,
  translateTo: PE
}
function NE(e, t) {
  const n = this
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? '0ms' : '')),
    n.emit('setTransition', e, t)
}
function I1(e) {
  let { swiper: t, runCallbacks: n, direction: r, step: i } = e
  const { activeIndex: o, previousIndex: a } = t
  let s = r
  if (
    (s || (o > a ? (s = 'next') : o < a ? (s = 'prev') : (s = 'reset')),
    t.emit(`transition${i}`),
    n && o !== a)
  ) {
    if (s === 'reset') {
      t.emit(`slideResetTransition${i}`)
      return
    }
    t.emit(`slideChangeTransition${i}`),
      s === 'next'
        ? t.emit(`slideNextTransition${i}`)
        : t.emit(`slidePrevTransition${i}`)
  }
}
function OE(e, t) {
  e === void 0 && (e = !0)
  const n = this,
    { params: r } = n
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    I1({ swiper: n, runCallbacks: e, direction: t, step: 'Start' }))
}
function LE(e, t) {
  e === void 0 && (e = !0)
  const n = this,
    { params: r } = n
  ;(n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      I1({ swiper: n, runCallbacks: e, direction: t, step: 'End' }))
}
var AE = { setTransition: NE, transitionStart: OE, transitionEnd: LE }
function RE(e, t, n, r, i) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == 'string' && (e = parseInt(e, 10))
  const o = this
  let a = e
  a < 0 && (a = 0)
  const {
    params: s,
    snapGrid: l,
    slidesGrid: u,
    previousIndex: c,
    activeIndex: f,
    rtlTranslate: d,
    wrapperEl: g,
    enabled: y
  } = o
  if (
    (!y && !r && !i) ||
    o.destroyed ||
    (o.animating && s.preventInteractionOnTransition)
  )
    return !1
  typeof t > 'u' && (t = o.params.speed)
  const _ = Math.min(o.params.slidesPerGroupSkip, a)
  let x = _ + Math.floor((a - _) / o.params.slidesPerGroup)
  x >= l.length && (x = l.length - 1)
  const v = -l[x]
  if (s.normalizeSlideIndex)
    for (let b = 0; b < u.length; b += 1) {
      const C = -Math.floor(v * 100),
        S = Math.floor(u[b] * 100),
        E = Math.floor(u[b + 1] * 100)
      typeof u[b + 1] < 'u'
        ? C >= S && C < E - (E - S) / 2
          ? (a = b)
          : C >= S && C < E && (a = b + 1)
        : C >= S && (a = b)
    }
  if (
    o.initialized &&
    a !== f &&
    ((!o.allowSlideNext &&
      (d
        ? v > o.translate && v > o.minTranslate()
        : v < o.translate && v < o.minTranslate())) ||
      (!o.allowSlidePrev &&
        v > o.translate &&
        v > o.maxTranslate() &&
        (f || 0) !== a))
  )
    return !1
  a !== (c || 0) && n && o.emit('beforeSlideChangeStart'), o.updateProgress(v)
  let p
  a > f ? (p = 'next') : a < f ? (p = 'prev') : (p = 'reset')
  const m = o.virtual && o.params.virtual.enabled
  if (!(m && i) && ((d && -v === o.translate) || (!d && v === o.translate)))
    return (
      o.updateActiveIndex(a),
      s.autoHeight && o.updateAutoHeight(),
      o.updateSlidesClasses(),
      s.effect !== 'slide' && o.setTranslate(v),
      p !== 'reset' && (o.transitionStart(n, p), o.transitionEnd(n, p)),
      !1
    )
  if (s.cssMode) {
    const b = o.isHorizontal(),
      C = d ? v : -v
    if (t === 0)
      m &&
        ((o.wrapperEl.style.scrollSnapType = 'none'),
        (o._immediateVirtual = !0)),
        m && !o._cssModeVirtualInitialSet && o.params.initialSlide > 0
          ? ((o._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              g[b ? 'scrollLeft' : 'scrollTop'] = C
            }))
          : (g[b ? 'scrollLeft' : 'scrollTop'] = C),
        m &&
          requestAnimationFrame(() => {
            ;(o.wrapperEl.style.scrollSnapType = ''), (o._immediateVirtual = !1)
          })
    else {
      if (!o.support.smoothScroll)
        return (
          L1({ swiper: o, targetPosition: C, side: b ? 'left' : 'top' }), !0
        )
      g.scrollTo({ [b ? 'left' : 'top']: C, behavior: 'smooth' })
    }
    return !0
  }
  return (
    o.setTransition(t),
    o.setTranslate(v),
    o.updateActiveIndex(a),
    o.updateSlidesClasses(),
    o.emit('beforeTransitionStart', t, r),
    o.transitionStart(n, p),
    t === 0
      ? o.transitionEnd(n, p)
      : o.animating ||
        ((o.animating = !0),
        o.onSlideToWrapperTransitionEnd ||
          (o.onSlideToWrapperTransitionEnd = function (C) {
            !o ||
              o.destroyed ||
              (C.target === this &&
                (o.wrapperEl.removeEventListener(
                  'transitionend',
                  o.onSlideToWrapperTransitionEnd
                ),
                (o.onSlideToWrapperTransitionEnd = null),
                delete o.onSlideToWrapperTransitionEnd,
                o.transitionEnd(n, p)))
          }),
        o.wrapperEl.addEventListener(
          'transitionend',
          o.onSlideToWrapperTransitionEnd
        )),
    !0
  )
}
function IE(e, t, n, r) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == 'string' && (e = parseInt(e, 10))
  const i = this
  if (i.destroyed) return
  typeof t > 'u' && (t = i.params.speed)
  const o = i.grid && i.params.grid && i.params.grid.rows > 1
  let a = e
  if (i.params.loop)
    if (i.virtual && i.params.virtual.enabled) a = a + i.virtual.slidesBefore
    else {
      let s
      if (o) {
        const d = a * i.params.grid.rows
        s = i.slides.filter(
          (g) => g.getAttribute('data-swiper-slide-index') * 1 === d
        )[0].column
      } else s = i.getSlideIndexByData(a)
      const l = o
          ? Math.ceil(i.slides.length / i.params.grid.rows)
          : i.slides.length,
        { centeredSlides: u } = i.params
      let c = i.params.slidesPerView
      c === 'auto'
        ? (c = i.slidesPerViewDynamic())
        : ((c = Math.ceil(parseFloat(i.params.slidesPerView, 10))),
          u && c % 2 === 0 && (c = c + 1))
      let f = l - s < c
      if (
        (u && (f = f || s < Math.ceil(c / 2)),
        r && u && i.params.slidesPerView !== 'auto' && !o && (f = !1),
        f)
      ) {
        const d = u
          ? s < i.activeIndex
            ? 'prev'
            : 'next'
          : s - i.activeIndex - 1 < i.params.slidesPerView
          ? 'next'
          : 'prev'
        i.loopFix({
          direction: d,
          slideTo: !0,
          activeSlideIndex: d === 'next' ? s + 1 : s - l + 1,
          slideRealIndex: d === 'next' ? i.realIndex : void 0
        })
      }
      if (o) {
        const d = a * i.params.grid.rows
        a = i.slides.filter(
          (g) => g.getAttribute('data-swiper-slide-index') * 1 === d
        )[0].column
      } else a = i.getSlideIndexByData(a)
    }
  return (
    requestAnimationFrame(() => {
      i.slideTo(a, t, n, r)
    }),
    i
  )
}
function FE(e, t, n) {
  t === void 0 && (t = !0)
  const r = this,
    { enabled: i, params: o, animating: a } = r
  if (!i || r.destroyed) return r
  typeof e > 'u' && (e = r.params.speed)
  let s = o.slidesPerGroup
  o.slidesPerView === 'auto' &&
    o.slidesPerGroup === 1 &&
    o.slidesPerGroupAuto &&
    (s = Math.max(r.slidesPerViewDynamic('current', !0), 1))
  const l = r.activeIndex < o.slidesPerGroupSkip ? 1 : s,
    u = r.virtual && o.virtual.enabled
  if (o.loop) {
    if (a && !u && o.loopPreventsSliding) return !1
    if (
      (r.loopFix({ direction: 'next' }),
      (r._clientLeft = r.wrapperEl.clientLeft),
      r.activeIndex === r.slides.length - 1 && o.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          r.slideTo(r.activeIndex + l, e, t, n)
        }),
        !0
      )
  }
  return o.rewind && r.isEnd
    ? r.slideTo(0, e, t, n)
    : r.slideTo(r.activeIndex + l, e, t, n)
}
function $E(e, t, n) {
  t === void 0 && (t = !0)
  const r = this,
    {
      params: i,
      snapGrid: o,
      slidesGrid: a,
      rtlTranslate: s,
      enabled: l,
      animating: u
    } = r
  if (!l || r.destroyed) return r
  typeof e > 'u' && (e = r.params.speed)
  const c = r.virtual && i.virtual.enabled
  if (i.loop) {
    if (u && !c && i.loopPreventsSliding) return !1
    r.loopFix({ direction: 'prev' }), (r._clientLeft = r.wrapperEl.clientLeft)
  }
  const f = s ? r.translate : -r.translate
  function d(v) {
    return v < 0 ? -Math.floor(Math.abs(v)) : Math.floor(v)
  }
  const g = d(f),
    y = o.map((v) => d(v))
  let _ = o[y.indexOf(g) - 1]
  if (typeof _ > 'u' && i.cssMode) {
    let v
    o.forEach((p, m) => {
      g >= p && (v = m)
    }),
      typeof v < 'u' && (_ = o[v > 0 ? v - 1 : v])
  }
  let x = 0
  if (
    (typeof _ < 'u' &&
      ((x = a.indexOf(_)),
      x < 0 && (x = r.activeIndex - 1),
      i.slidesPerView === 'auto' &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((x = x - r.slidesPerViewDynamic('previous', !0) + 1),
        (x = Math.max(x, 0)))),
    i.rewind && r.isBeginning)
  ) {
    const v =
      r.params.virtual && r.params.virtual.enabled && r.virtual
        ? r.virtual.slides.length - 1
        : r.slides.length - 1
    return r.slideTo(v, e, t, n)
  } else if (i.loop && r.activeIndex === 0 && i.cssMode)
    return (
      requestAnimationFrame(() => {
        r.slideTo(x, e, t, n)
      }),
      !0
    )
  return r.slideTo(x, e, t, n)
}
function DE(e, t, n) {
  t === void 0 && (t = !0)
  const r = this
  if (!r.destroyed)
    return (
      typeof e > 'u' && (e = r.params.speed), r.slideTo(r.activeIndex, e, t, n)
    )
}
function zE(e, t, n, r) {
  t === void 0 && (t = !0), r === void 0 && (r = 0.5)
  const i = this
  if (i.destroyed) return
  typeof e > 'u' && (e = i.params.speed)
  let o = i.activeIndex
  const a = Math.min(i.params.slidesPerGroupSkip, o),
    s = a + Math.floor((o - a) / i.params.slidesPerGroup),
    l = i.rtlTranslate ? i.translate : -i.translate
  if (l >= i.snapGrid[s]) {
    const u = i.snapGrid[s],
      c = i.snapGrid[s + 1]
    l - u > (c - u) * r && (o += i.params.slidesPerGroup)
  } else {
    const u = i.snapGrid[s - 1],
      c = i.snapGrid[s]
    l - u <= (c - u) * r && (o -= i.params.slidesPerGroup)
  }
  return (
    (o = Math.max(o, 0)),
    (o = Math.min(o, i.slidesGrid.length - 1)),
    i.slideTo(o, e, t, n)
  )
}
function VE() {
  const e = this
  if (e.destroyed) return
  const { params: t, slidesEl: n } = e,
    r = t.slidesPerView === 'auto' ? e.slidesPerViewDynamic() : t.slidesPerView
  let i = e.clickedIndex,
    o
  const a = e.isElement ? 'swiper-slide' : `.${t.slideClass}`
  if (t.loop) {
    if (e.animating) return
    ;(o = parseInt(e.clickedSlide.getAttribute('data-swiper-slide-index'), 10)),
      t.centeredSlides
        ? i < e.loopedSlides - r / 2 ||
          i > e.slides.length - e.loopedSlides + r / 2
          ? (e.loopFix(),
            (i = e.getSlideIndex(
              gn(n, `${a}[data-swiper-slide-index="${o}"]`)[0]
            )),
            yd(() => {
              e.slideTo(i)
            }))
          : e.slideTo(i)
        : i > e.slides.length - r
        ? (e.loopFix(),
          (i = e.getSlideIndex(
            gn(n, `${a}[data-swiper-slide-index="${o}"]`)[0]
          )),
          yd(() => {
            e.slideTo(i)
          }))
        : e.slideTo(i)
  } else e.slideTo(i)
}
var BE = {
  slideTo: RE,
  slideToLoop: IE,
  slideNext: FE,
  slidePrev: $E,
  slideReset: DE,
  slideToClosest: zE,
  slideToClickedSlide: VE
}
function HE(e) {
  const t = this,
    { params: n, slidesEl: r } = t
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return
  const i = () => {
      gn(r, `.${n.slideClass}, swiper-slide`).forEach((f, d) => {
        f.setAttribute('data-swiper-slide-index', d)
      })
    },
    o = t.grid && n.grid && n.grid.rows > 1,
    a = n.slidesPerGroup * (o ? n.grid.rows : 1),
    s = t.slides.length % a !== 0,
    l = o && t.slides.length % n.grid.rows !== 0,
    u = (c) => {
      for (let f = 0; f < c; f += 1) {
        const d = t.isElement
          ? _d('swiper-slide', [n.slideBlankClass])
          : _d('div', [n.slideClass, n.slideBlankClass])
        t.slidesEl.append(d)
      }
    }
  if (s) {
    if (n.loopAddBlankSlides) {
      const c = a - (t.slides.length % a)
      u(c), t.recalcSlides(), t.updateSlides()
    } else
      ll(
        'Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
      )
    i()
  } else if (l) {
    if (n.loopAddBlankSlides) {
      const c = n.grid.rows - (t.slides.length % n.grid.rows)
      u(c), t.recalcSlides(), t.updateSlides()
    } else
      ll(
        'Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
      )
    i()
  } else i()
  t.loopFix({
    slideRealIndex: e,
    direction: n.centeredSlides ? void 0 : 'next'
  })
}
function qE(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: r,
    setTranslate: i,
    activeSlideIndex: o,
    byController: a,
    byMousewheel: s
  } = e === void 0 ? {} : e
  const l = this
  if (!l.params.loop) return
  l.emit('beforeLoopFix')
  const {
      slides: u,
      allowSlidePrev: c,
      allowSlideNext: f,
      slidesEl: d,
      params: g
    } = l,
    { centeredSlides: y } = g
  if (
    ((l.allowSlidePrev = !0),
    (l.allowSlideNext = !0),
    l.virtual && g.virtual.enabled)
  ) {
    n &&
      (!g.centeredSlides && l.snapIndex === 0
        ? l.slideTo(l.virtual.slides.length, 0, !1, !0)
        : g.centeredSlides && l.snapIndex < g.slidesPerView
        ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0)
        : l.snapIndex === l.snapGrid.length - 1 &&
          l.slideTo(l.virtual.slidesBefore, 0, !1, !0)),
      (l.allowSlidePrev = c),
      (l.allowSlideNext = f),
      l.emit('loopFix')
    return
  }
  let _ = g.slidesPerView
  _ === 'auto'
    ? (_ = l.slidesPerViewDynamic())
    : ((_ = Math.ceil(parseFloat(g.slidesPerView, 10))),
      y && _ % 2 === 0 && (_ = _ + 1))
  const x = g.slidesPerGroupAuto ? _ : g.slidesPerGroup
  let v = x
  v % x !== 0 && (v += x - (v % x)),
    (v += g.loopAdditionalSlides),
    (l.loopedSlides = v)
  const p = l.grid && g.grid && g.grid.rows > 1
  u.length < _ + v
    ? ll(
        'Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters'
      )
    : p &&
      g.grid.fill === 'row' &&
      ll(
        'Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`'
      )
  const m = [],
    w = []
  let b = l.activeIndex
  typeof o > 'u'
    ? (o = l.getSlideIndex(
        u.filter((O) => O.classList.contains(g.slideActiveClass))[0]
      ))
    : (b = o)
  const C = r === 'next' || !r,
    S = r === 'prev' || !r
  let E = 0,
    T = 0
  const k = p ? Math.ceil(u.length / g.grid.rows) : u.length,
    L = (p ? u[o].column : o) + (y && typeof i > 'u' ? -_ / 2 + 0.5 : 0)
  if (L < v) {
    E = Math.max(v - L, x)
    for (let O = 0; O < v - L; O += 1) {
      const A = O - Math.floor(O / k) * k
      if (p) {
        const z = k - A - 1
        for (let R = u.length - 1; R >= 0; R -= 1)
          u[R].column === z && m.push(R)
      } else m.push(k - A - 1)
    }
  } else if (L + _ > k - v) {
    T = Math.max(L - (k - v * 2), x)
    for (let O = 0; O < T; O += 1) {
      const A = O - Math.floor(O / k) * k
      p
        ? u.forEach((z, R) => {
            z.column === A && w.push(R)
          })
        : w.push(A)
    }
  }
  if (
    ((l.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      l.__preventObserver__ = !1
    }),
    S &&
      m.forEach((O) => {
        ;(u[O].swiperLoopMoveDOM = !0),
          d.prepend(u[O]),
          (u[O].swiperLoopMoveDOM = !1)
      }),
    C &&
      w.forEach((O) => {
        ;(u[O].swiperLoopMoveDOM = !0),
          d.append(u[O]),
          (u[O].swiperLoopMoveDOM = !1)
      }),
    l.recalcSlides(),
    g.slidesPerView === 'auto'
      ? l.updateSlides()
      : p &&
        ((m.length > 0 && S) || (w.length > 0 && C)) &&
        l.slides.forEach((O, A) => {
          l.grid.updateSlide(A, O, l.slides)
        }),
    g.watchSlidesProgress && l.updateSlidesOffset(),
    n)
  ) {
    if (m.length > 0 && S) {
      if (typeof t > 'u') {
        const O = l.slidesGrid[b],
          z = l.slidesGrid[b + E] - O
        s
          ? l.setTranslate(l.translate - z)
          : (l.slideTo(b + Math.ceil(E), 0, !1, !0),
            i &&
              ((l.touchEventsData.startTranslate =
                l.touchEventsData.startTranslate - z),
              (l.touchEventsData.currentTranslate =
                l.touchEventsData.currentTranslate - z)))
      } else if (i) {
        const O = p ? m.length / g.grid.rows : m.length
        l.slideTo(l.activeIndex + O, 0, !1, !0),
          (l.touchEventsData.currentTranslate = l.translate)
      }
    } else if (w.length > 0 && C)
      if (typeof t > 'u') {
        const O = l.slidesGrid[b],
          z = l.slidesGrid[b - T] - O
        s
          ? l.setTranslate(l.translate - z)
          : (l.slideTo(b - T, 0, !1, !0),
            i &&
              ((l.touchEventsData.startTranslate =
                l.touchEventsData.startTranslate - z),
              (l.touchEventsData.currentTranslate =
                l.touchEventsData.currentTranslate - z)))
      } else {
        const O = p ? w.length / g.grid.rows : w.length
        l.slideTo(l.activeIndex - O, 0, !1, !0)
      }
  }
  if (
    ((l.allowSlidePrev = c),
    (l.allowSlideNext = f),
    l.controller && l.controller.control && !a)
  ) {
    const O = {
      slideRealIndex: t,
      direction: r,
      setTranslate: i,
      activeSlideIndex: o,
      byController: !0
    }
    Array.isArray(l.controller.control)
      ? l.controller.control.forEach((A) => {
          !A.destroyed &&
            A.params.loop &&
            A.loopFix({
              ...O,
              slideTo: A.params.slidesPerView === g.slidesPerView ? n : !1
            })
        })
      : l.controller.control instanceof l.constructor &&
        l.controller.control.params.loop &&
        l.controller.control.loopFix({
          ...O,
          slideTo:
            l.controller.control.params.slidesPerView === g.slidesPerView
              ? n
              : !1
        })
  }
  l.emit('loopFix')
}
function WE() {
  const e = this,
    { params: t, slidesEl: n } = e
  if (!t.loop || (e.virtual && e.params.virtual.enabled)) return
  e.recalcSlides()
  const r = []
  e.slides.forEach((i) => {
    const o =
      typeof i.swiperSlideIndex > 'u'
        ? i.getAttribute('data-swiper-slide-index') * 1
        : i.swiperSlideIndex
    r[o] = i
  }),
    e.slides.forEach((i) => {
      i.removeAttribute('data-swiper-slide-index')
    }),
    r.forEach((i) => {
      n.append(i)
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0)
}
var UE = { loopCreate: HE, loopFix: qE, loopDestroy: WE }
function GE(e) {
  const t = this
  if (
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return
  const n = t.params.touchEventsTarget === 'container' ? t.el : t.wrapperEl
  t.isElement && (t.__preventObserver__ = !0),
    (n.style.cursor = 'move'),
    (n.style.cursor = e ? 'grabbing' : 'grab'),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1
      })
}
function QE() {
  const e = this
  ;(e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[
      e.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'
    ].style.cursor = ''),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1
      }))
}
var KE = { setGrabCursor: GE, unsetGrabCursor: QE }
function XE(e, t) {
  t === void 0 && (t = this)
  function n(r) {
    if (!r || r === _n() || r === vt()) return null
    r.assignedSlot && (r = r.assignedSlot)
    const i = r.closest(e)
    return !i && !r.getRootNode ? null : i || n(r.getRootNode().host)
  }
  return n(t)
}
function Am(e, t, n) {
  const r = vt(),
    { params: i } = e,
    o = i.edgeSwipeDetection,
    a = i.edgeSwipeThreshold
  return o && (n <= a || n >= r.innerWidth - a)
    ? o === 'prevent'
      ? (t.preventDefault(), !0)
      : !1
    : !0
}
function YE(e) {
  const t = this,
    n = _n()
  let r = e
  r.originalEvent && (r = r.originalEvent)
  const i = t.touchEventsData
  if (r.type === 'pointerdown') {
    if (i.pointerId !== null && i.pointerId !== r.pointerId) return
    i.pointerId = r.pointerId
  } else
    r.type === 'touchstart' &&
      r.targetTouches.length === 1 &&
      (i.touchId = r.targetTouches[0].identifier)
  if (r.type === 'touchstart') {
    Am(t, r, r.targetTouches[0].pageX)
    return
  }
  const { params: o, touches: a, enabled: s } = t
  if (
    !s ||
    (!o.simulateTouch && r.pointerType === 'mouse') ||
    (t.animating && o.preventInteractionOnTransition)
  )
    return
  !t.animating && o.cssMode && o.loop && t.loopFix()
  let l = r.target
  if (
    (o.touchEventsTarget === 'wrapper' && !rE(l, t.wrapperEl)) ||
    ('which' in r && r.which === 3) ||
    ('button' in r && r.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return
  const u = !!o.noSwipingClass && o.noSwipingClass !== '',
    c = r.composedPath ? r.composedPath() : r.path
  u && r.target && r.target.shadowRoot && c && (l = c[0])
  const f = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`,
    d = !!(r.target && r.target.shadowRoot)
  if (o.noSwiping && (d ? XE(f, l) : l.closest(f))) {
    t.allowClick = !0
    return
  }
  if (o.swipeHandler && !l.closest(o.swipeHandler)) return
  ;(a.currentX = r.pageX), (a.currentY = r.pageY)
  const g = a.currentX,
    y = a.currentY
  if (!Am(t, r, g)) return
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }),
    (a.startX = g),
    (a.startY = y),
    (i.touchStartTime = sl()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    o.threshold > 0 && (i.allowThresholdMove = !1)
  let _ = !0
  l.matches(i.focusableElements) &&
    ((_ = !1), l.nodeName === 'SELECT' && (i.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(i.focusableElements) &&
      n.activeElement !== l &&
      (r.pointerType === 'mouse' ||
        (r.pointerType !== 'mouse' && !l.matches(i.focusableElements))) &&
      n.activeElement.blur()
  const x = _ && t.allowTouchMove && o.touchStartPreventDefault
  ;(o.touchStartForcePreventDefault || x) &&
    !l.isContentEditable &&
    r.preventDefault(),
    o.freeMode &&
      o.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !o.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit('touchStart', r)
}
function ZE(e) {
  const t = _n(),
    n = this,
    r = n.touchEventsData,
    { params: i, touches: o, rtlTranslate: a, enabled: s } = n
  if (!s || (!i.simulateTouch && e.pointerType === 'mouse')) return
  let l = e
  if (
    (l.originalEvent && (l = l.originalEvent),
    l.type === 'pointermove' &&
      (r.touchId !== null || l.pointerId !== r.pointerId))
  )
    return
  let u
  if (l.type === 'touchmove') {
    if (
      ((u = [...l.changedTouches].filter((C) => C.identifier === r.touchId)[0]),
      !u || u.identifier !== r.touchId)
    )
      return
  } else u = l
  if (!r.isTouched) {
    r.startMoving && r.isScrolling && n.emit('touchMoveOpposite', l)
    return
  }
  const c = u.pageX,
    f = u.pageY
  if (l.preventedByNestedSwiper) {
    ;(o.startX = c), (o.startY = f)
    return
  }
  if (!n.allowTouchMove) {
    l.target.matches(r.focusableElements) || (n.allowClick = !1),
      r.isTouched &&
        (Object.assign(o, { startX: c, startY: f, currentX: c, currentY: f }),
        (r.touchStartTime = sl()))
    return
  }
  if (i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
      if (
        (f < o.startY && n.translate <= n.maxTranslate()) ||
        (f > o.startY && n.translate >= n.minTranslate())
      ) {
        ;(r.isTouched = !1), (r.isMoved = !1)
        return
      }
    } else if (
      (c < o.startX && n.translate <= n.maxTranslate()) ||
      (c > o.startX && n.translate >= n.minTranslate())
    )
      return
  }
  if (
    (t.activeElement &&
      t.activeElement.matches(r.focusableElements) &&
      t.activeElement !== l.target &&
      l.pointerType !== 'mouse' &&
      t.activeElement.blur(),
    t.activeElement &&
      l.target === t.activeElement &&
      l.target.matches(r.focusableElements))
  ) {
    ;(r.isMoved = !0), (n.allowClick = !1)
    return
  }
  r.allowTouchCallbacks && n.emit('touchMove', l),
    (o.previousX = o.currentX),
    (o.previousY = o.currentY),
    (o.currentX = c),
    (o.currentY = f)
  const d = o.currentX - o.startX,
    g = o.currentY - o.startY
  if (n.params.threshold && Math.sqrt(d ** 2 + g ** 2) < n.params.threshold)
    return
  if (typeof r.isScrolling > 'u') {
    let C
    ;(n.isHorizontal() && o.currentY === o.startY) ||
    (n.isVertical() && o.currentX === o.startX)
      ? (r.isScrolling = !1)
      : d * d + g * g >= 25 &&
        ((C = (Math.atan2(Math.abs(g), Math.abs(d)) * 180) / Math.PI),
        (r.isScrolling = n.isHorizontal()
          ? C > i.touchAngle
          : 90 - C > i.touchAngle))
  }
  if (
    (r.isScrolling && n.emit('touchMoveOpposite', l),
    typeof r.startMoving > 'u' &&
      (o.currentX !== o.startX || o.currentY !== o.startY) &&
      (r.startMoving = !0),
    r.isScrolling ||
      (l.type === 'touchmove' && r.preventTouchMoveFromPointerMove))
  ) {
    r.isTouched = !1
    return
  }
  if (!r.startMoving) return
  ;(n.allowClick = !1),
    !i.cssMode && l.cancelable && l.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && l.stopPropagation()
  let y = n.isHorizontal() ? d : g,
    _ = n.isHorizontal() ? o.currentX - o.previousX : o.currentY - o.previousY
  i.oneWayMovement &&
    ((y = Math.abs(y) * (a ? 1 : -1)), (_ = Math.abs(_) * (a ? 1 : -1))),
    (o.diff = y),
    (y *= i.touchRatio),
    a && ((y = -y), (_ = -_))
  const x = n.touchesDirection
  ;(n.swipeDirection = y > 0 ? 'prev' : 'next'),
    (n.touchesDirection = _ > 0 ? 'prev' : 'next')
  const v = n.params.loop && !i.cssMode,
    p =
      (n.touchesDirection === 'next' && n.allowSlideNext) ||
      (n.touchesDirection === 'prev' && n.allowSlidePrev)
  if (!r.isMoved) {
    if (
      (v && p && n.loopFix({ direction: n.swipeDirection }),
      (r.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const C = new window.CustomEvent('transitionend', {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 }
      })
      n.wrapperEl.dispatchEvent(C)
    }
    ;(r.allowMomentumBounce = !1),
      i.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit('sliderFirstMove', l)
  }
  let m
  if (
    (new Date().getTime(),
    r.isMoved &&
      r.allowThresholdMove &&
      x !== n.touchesDirection &&
      v &&
      p &&
      Math.abs(y) >= 1)
  ) {
    Object.assign(o, {
      startX: c,
      startY: f,
      currentX: c,
      currentY: f,
      startTranslate: r.currentTranslate
    }),
      (r.loopSwapReset = !0),
      (r.startTranslate = r.currentTranslate)
    return
  }
  n.emit('sliderMove', l),
    (r.isMoved = !0),
    (r.currentTranslate = y + r.startTranslate)
  let w = !0,
    b = i.resistanceRatio
  if (
    (i.touchReleaseOnEdges && (b = 0),
    y > 0
      ? (v &&
          p &&
          !m &&
          r.allowThresholdMove &&
          r.currentTranslate >
            (i.centeredSlides
              ? n.minTranslate() -
                n.slidesSizesGrid[n.activeIndex + 1] -
                (i.slidesPerView !== 'auto' &&
                n.slides.length - i.slidesPerView >= 2
                  ? n.slidesSizesGrid[n.activeIndex + 1] + n.params.spaceBetween
                  : 0) -
                n.params.spaceBetween
              : n.minTranslate()) &&
          n.loopFix({
            direction: 'prev',
            setTranslate: !0,
            activeSlideIndex: 0
          }),
        r.currentTranslate > n.minTranslate() &&
          ((w = !1),
          i.resistance &&
            (r.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + r.startTranslate + y) ** b)))
      : y < 0 &&
        (v &&
          p &&
          !m &&
          r.allowThresholdMove &&
          r.currentTranslate <
            (i.centeredSlides
              ? n.maxTranslate() +
                n.slidesSizesGrid[n.slidesSizesGrid.length - 1] +
                n.params.spaceBetween +
                (i.slidesPerView !== 'auto' &&
                n.slides.length - i.slidesPerView >= 2
                  ? n.slidesSizesGrid[n.slidesSizesGrid.length - 1] +
                    n.params.spaceBetween
                  : 0)
              : n.maxTranslate()) &&
          n.loopFix({
            direction: 'next',
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (i.slidesPerView === 'auto'
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(i.slidesPerView, 10)))
          }),
        r.currentTranslate < n.maxTranslate() &&
          ((w = !1),
          i.resistance &&
            (r.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - r.startTranslate - y) ** b))),
    w && (l.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === 'next' &&
      r.currentTranslate < r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === 'prev' &&
      r.currentTranslate > r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (r.currentTranslate = r.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(y) > i.threshold || r.allowThresholdMove) {
      if (!r.allowThresholdMove) {
        ;(r.allowThresholdMove = !0),
          (o.startX = o.currentX),
          (o.startY = o.currentY),
          (r.currentTranslate = r.startTranslate),
          (o.diff = n.isHorizontal()
            ? o.currentX - o.startX
            : o.currentY - o.startY)
        return
      }
    } else {
      r.currentTranslate = r.startTranslate
      return
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
      i.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(r.currentTranslate),
    n.setTranslate(r.currentTranslate))
}
function JE(e) {
  const t = this,
    n = t.touchEventsData
  let r = e
  r.originalEvent && (r = r.originalEvent)
  let i
  if (r.type === 'touchend' || r.type === 'touchcancel') {
    if (
      ((i = [...r.changedTouches].filter((b) => b.identifier === n.touchId)[0]),
      !i || i.identifier !== n.touchId)
    )
      return
  } else {
    if (n.touchId !== null || r.pointerId !== n.pointerId) return
    i = r
  }
  if (
    ['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(
      r.type
    ) &&
    !(
      ['pointercancel', 'contextmenu'].includes(r.type) &&
      (t.browser.isSafari || t.browser.isWebView)
    )
  )
    return
  ;(n.pointerId = null), (n.touchId = null)
  const {
    params: a,
    touches: s,
    rtlTranslate: l,
    slidesGrid: u,
    enabled: c
  } = t
  if (!c || (!a.simulateTouch && r.pointerType === 'mouse')) return
  if (
    (n.allowTouchCallbacks && t.emit('touchEnd', r),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && a.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1)
    return
  }
  a.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1)
  const f = sl(),
    d = f - n.touchStartTime
  if (t.allowClick) {
    const b = r.path || (r.composedPath && r.composedPath())
    t.updateClickedSlide((b && b[0]) || r.target, b),
      t.emit('tap click', r),
      d < 300 && f - n.lastClickTime < 300 && t.emit('doubleTap doubleClick', r)
  }
  if (
    ((n.lastClickTime = sl()),
    yd(() => {
      t.destroyed || (t.allowClick = !0)
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      (s.diff === 0 && !n.loopSwapReset) ||
      (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
  ) {
    ;(n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1)
    return
  }
  ;(n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1)
  let g
  if (
    (a.followFinger
      ? (g = l ? t.translate : -t.translate)
      : (g = -n.currentTranslate),
    a.cssMode)
  )
    return
  if (a.freeMode && a.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: g })
    return
  }
  const y = g >= -t.maxTranslate() && !t.params.loop
  let _ = 0,
    x = t.slidesSizesGrid[0]
  for (
    let b = 0;
    b < u.length;
    b += b < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
  ) {
    const C = b < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup
    typeof u[b + C] < 'u'
      ? (y || (g >= u[b] && g < u[b + C])) && ((_ = b), (x = u[b + C] - u[b]))
      : (y || g >= u[b]) && ((_ = b), (x = u[u.length - 1] - u[u.length - 2]))
  }
  let v = null,
    p = null
  a.rewind &&
    (t.isBeginning
      ? (p =
          a.virtual && a.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (v = 0))
  const m = (g - u[_]) / x,
    w = _ < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup
  if (d > a.longSwipesMs) {
    if (!a.longSwipes) {
      t.slideTo(t.activeIndex)
      return
    }
    t.swipeDirection === 'next' &&
      (m >= a.longSwipesRatio
        ? t.slideTo(a.rewind && t.isEnd ? v : _ + w)
        : t.slideTo(_)),
      t.swipeDirection === 'prev' &&
        (m > 1 - a.longSwipesRatio
          ? t.slideTo(_ + w)
          : p !== null && m < 0 && Math.abs(m) > a.longSwipesRatio
          ? t.slideTo(p)
          : t.slideTo(_))
  } else {
    if (!a.shortSwipes) {
      t.slideTo(t.activeIndex)
      return
    }
    t.navigation &&
    (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl)
      ? r.target === t.navigation.nextEl
        ? t.slideTo(_ + w)
        : t.slideTo(_)
      : (t.swipeDirection === 'next' && t.slideTo(v !== null ? v : _ + w),
        t.swipeDirection === 'prev' && t.slideTo(p !== null ? p : _))
  }
}
function Rm() {
  const e = this,
    { params: t, el: n } = e
  if (n && n.offsetWidth === 0) return
  t.breakpoints && e.setBreakpoint()
  const { allowSlideNext: r, allowSlidePrev: i, snapGrid: o } = e,
    a = e.virtual && e.params.virtual.enabled
  ;(e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses()
  const s = a && t.loop
  ;(t.slidesPerView === 'auto' || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !s
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !a
    ? e.slideToLoop(e.realIndex, 0, !1, !0)
    : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
      (e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.resume()
      }, 500))),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = r),
    e.params.watchOverflow && o !== e.snapGrid && e.checkOverflow()
}
function e4(e) {
  const t = this
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())))
}
function t4() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: r } = e
  if (!r) return
  ;(e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses()
  let i
  const o = e.maxTranslate() - e.minTranslate()
  o === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / o),
    i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit('setTranslate', e.translate, !1)
}
function n4(e) {
  const t = this
  Cs(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== 'auto' && !t.params.autoHeight)
    ) && t.update()
}
function r4() {
  const e = this
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0),
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = 'auto'))
}
const F1 = (e, t) => {
  const n = _n(),
    { params: r, el: i, wrapperEl: o, device: a } = e,
    s = !!r.nested,
    l = t === 'on' ? 'addEventListener' : 'removeEventListener',
    u = t
  !i ||
    typeof i == 'string' ||
    (n[l]('touchstart', e.onDocumentTouchStart, { passive: !1, capture: s }),
    i[l]('touchstart', e.onTouchStart, { passive: !1 }),
    i[l]('pointerdown', e.onTouchStart, { passive: !1 }),
    n[l]('touchmove', e.onTouchMove, { passive: !1, capture: s }),
    n[l]('pointermove', e.onTouchMove, { passive: !1, capture: s }),
    n[l]('touchend', e.onTouchEnd, { passive: !0 }),
    n[l]('pointerup', e.onTouchEnd, { passive: !0 }),
    n[l]('pointercancel', e.onTouchEnd, { passive: !0 }),
    n[l]('touchcancel', e.onTouchEnd, { passive: !0 }),
    n[l]('pointerout', e.onTouchEnd, { passive: !0 }),
    n[l]('pointerleave', e.onTouchEnd, { passive: !0 }),
    n[l]('contextmenu', e.onTouchEnd, { passive: !0 }),
    (r.preventClicks || r.preventClicksPropagation) &&
      i[l]('click', e.onClick, !0),
    r.cssMode && o[l]('scroll', e.onScroll),
    r.updateOnWindowResize
      ? e[u](
          a.ios || a.android
            ? 'resize orientationchange observerUpdate'
            : 'resize observerUpdate',
          Rm,
          !0
        )
      : e[u]('observerUpdate', Rm, !0),
    i[l]('load', e.onLoad, { capture: !0 }))
}
function i4() {
  const e = this,
    { params: t } = e
  ;(e.onTouchStart = YE.bind(e)),
    (e.onTouchMove = ZE.bind(e)),
    (e.onTouchEnd = JE.bind(e)),
    (e.onDocumentTouchStart = r4.bind(e)),
    t.cssMode && (e.onScroll = t4.bind(e)),
    (e.onClick = e4.bind(e)),
    (e.onLoad = n4.bind(e)),
    F1(e, 'on')
}
function o4() {
  F1(this, 'off')
}
var a4 = { attachEvents: i4, detachEvents: o4 }
const Im = (e, t) => e.grid && t.grid && t.grid.rows > 1
function s4() {
  const e = this,
    { realIndex: t, initialized: n, params: r, el: i } = e,
    o = r.breakpoints
  if (!o || (o && Object.keys(o).length === 0)) return
  const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el)
  if (!a || e.currentBreakpoint === a) return
  const l = (a in o ? o[a] : void 0) || e.originalParams,
    u = Im(e, r),
    c = Im(e, l),
    f = e.params.grabCursor,
    d = l.grabCursor,
    g = r.enabled
  u && !c
    ? (i.classList.remove(
        `${r.containerModifierClass}grid`,
        `${r.containerModifierClass}grid-column`
      ),
      e.emitContainerClasses())
    : !u &&
      c &&
      (i.classList.add(`${r.containerModifierClass}grid`),
      ((l.grid.fill && l.grid.fill === 'column') ||
        (!l.grid.fill && r.grid.fill === 'column')) &&
        i.classList.add(`${r.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    f && !d ? e.unsetGrabCursor() : !f && d && e.setGrabCursor(),
    ['navigation', 'pagination', 'scrollbar'].forEach((m) => {
      if (typeof l[m] > 'u') return
      const w = r[m] && r[m].enabled,
        b = l[m] && l[m].enabled
      w && !b && e[m].disable(), !w && b && e[m].enable()
    })
  const y = l.direction && l.direction !== r.direction,
    _ = r.loop && (l.slidesPerView !== r.slidesPerView || y),
    x = r.loop
  y && n && e.changeDirection(), st(e.params, l)
  const v = e.params.enabled,
    p = e.params.loop
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev
  }),
    g && !v ? e.disable() : !g && v && e.enable(),
    (e.currentBreakpoint = a),
    e.emit('_beforeBreakpoint', l),
    n &&
      (_
        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
        : !x && p
        ? (e.loopCreate(t), e.updateSlides())
        : x && !p && e.loopDestroy()),
    e.emit('breakpoint', l)
}
function l4(e, t, n) {
  if ((t === void 0 && (t = 'window'), !e || (t === 'container' && !n))) return
  let r = !1
  const i = vt(),
    o = t === 'window' ? i.innerHeight : n.clientHeight,
    a = Object.keys(e).map((s) => {
      if (typeof s == 'string' && s.indexOf('@') === 0) {
        const l = parseFloat(s.substr(1))
        return { value: o * l, point: s }
      }
      return { value: s, point: s }
    })
  a.sort((s, l) => parseInt(s.value, 10) - parseInt(l.value, 10))
  for (let s = 0; s < a.length; s += 1) {
    const { point: l, value: u } = a[s]
    t === 'window'
      ? i.matchMedia(`(min-width: ${u}px)`).matches && (r = l)
      : u <= n.clientWidth && (r = l)
  }
  return r || 'max'
}
var u4 = { setBreakpoint: s4, getBreakpoint: l4 }
function c4(e, t) {
  const n = []
  return (
    e.forEach((r) => {
      typeof r == 'object'
        ? Object.keys(r).forEach((i) => {
            r[i] && n.push(t + i)
          })
        : typeof r == 'string' && n.push(t + r)
    }),
    n
  )
}
function d4() {
  const e = this,
    { classNames: t, params: n, rtl: r, el: i, device: o } = e,
    a = c4(
      [
        'initialized',
        n.direction,
        { 'free-mode': e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: r },
        { grid: n.grid && n.grid.rows > 1 },
        {
          'grid-column': n.grid && n.grid.rows > 1 && n.grid.fill === 'column'
        },
        { android: o.android },
        { ios: o.ios },
        { 'css-mode': n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { 'watch-progress': n.watchSlidesProgress }
      ],
      n.containerModifierClass
    )
  t.push(...a), i.classList.add(...t), e.emitContainerClasses()
}
function f4() {
  const e = this,
    { el: t, classNames: n } = e
  !t ||
    typeof t == 'string' ||
    (t.classList.remove(...n), e.emitContainerClasses())
}
var p4 = { addClasses: d4, removeClasses: f4 }
function h4() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: r } = n
  if (r) {
    const i = e.slides.length - 1,
      o = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2
    e.isLocked = e.size > o
  } else e.isLocked = e.snapGrid.length === 1
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock')
}
var m4 = { checkOverflow: h4 },
  xd = {
    init: !0,
    direction: 'horizontal',
    oneWayMovement: !1,
    swiperElementNodeName: 'SWIPER-CONTAINER',
    touchEventsTarget: 'wrapper',
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: 'swiper',
    enabled: !0,
    focusableElements: 'input, select, option, textarea, button, video, label',
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: 'slide',
    breakpoints: void 0,
    breakpointsBase: 'window',
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: 'swiper-',
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-blank',
    slideActiveClass: 'swiper-slide-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideFullyVisibleClass: 'swiper-slide-fully-visible',
    slideNextClass: 'swiper-slide-next',
    slidePrevClass: 'swiper-slide-prev',
    wrapperClass: 'swiper-wrapper',
    lazyPreloaderClass: 'swiper-lazy-preloader',
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1
  }
function v4(e, t) {
  return function (r) {
    r === void 0 && (r = {})
    const i = Object.keys(r)[0],
      o = r[i]
    if (typeof o != 'object' || o === null) {
      st(t, r)
      return
    }
    if (
      (e[i] === !0 && (e[i] = { enabled: !0 }),
      i === 'navigation' &&
        e[i] &&
        e[i].enabled &&
        !e[i].prevEl &&
        !e[i].nextEl &&
        (e[i].auto = !0),
      ['pagination', 'scrollbar'].indexOf(i) >= 0 &&
        e[i] &&
        e[i].enabled &&
        !e[i].el &&
        (e[i].auto = !0),
      !(i in e && 'enabled' in o))
    ) {
      st(t, r)
      return
    }
    typeof e[i] == 'object' && !('enabled' in e[i]) && (e[i].enabled = !0),
      e[i] || (e[i] = { enabled: !1 }),
      st(t, r)
  }
}
const Wu = {
    eventsEmitter: pE,
    update: CE,
    translate: ME,
    transition: AE,
    slide: BE,
    loop: UE,
    grabCursor: KE,
    events: a4,
    breakpoints: u4,
    checkOverflow: m4,
    classes: p4
  },
  Uu = {}
let xp = class dn {
  constructor() {
    let t, n
    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
      i[o] = arguments[o]
    i.length === 1 &&
    i[0].constructor &&
    Object.prototype.toString.call(i[0]).slice(8, -1) === 'Object'
      ? (n = i[0])
      : ([t, n] = i),
      n || (n = {}),
      (n = st({}, n)),
      t && !n.el && (n.el = t)
    const a = _n()
    if (
      n.el &&
      typeof n.el == 'string' &&
      a.querySelectorAll(n.el).length > 1
    ) {
      const c = []
      return (
        a.querySelectorAll(n.el).forEach((f) => {
          const d = st({}, n, { el: f })
          c.push(new dn(d))
        }),
        c
      )
    }
    const s = this
    ;(s.__swiper__ = !0),
      (s.support = A1()),
      (s.device = R1({ userAgent: n.userAgent })),
      (s.browser = cE()),
      (s.eventsListeners = {}),
      (s.eventsAnyListeners = []),
      (s.modules = [...s.__modules__]),
      n.modules && Array.isArray(n.modules) && s.modules.push(...n.modules)
    const l = {}
    s.modules.forEach((c) => {
      c({
        params: n,
        swiper: s,
        extendParams: v4(n, l),
        on: s.on.bind(s),
        once: s.once.bind(s),
        off: s.off.bind(s),
        emit: s.emit.bind(s)
      })
    })
    const u = st({}, xd, l)
    return (
      (s.params = st({}, u, Uu, n)),
      (s.originalParams = st({}, s.params)),
      (s.passedParams = st({}, n)),
      s.params &&
        s.params.on &&
        Object.keys(s.params.on).forEach((c) => {
          s.on(c, s.params.on[c])
        }),
      s.params && s.params.onAny && s.onAny(s.params.onAny),
      Object.assign(s, {
        enabled: s.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return s.params.direction === 'horizontal'
        },
        isVertical() {
          return s.params.direction === 'vertical'
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
        },
        allowSlideNext: s.params.allowSlideNext,
        allowSlidePrev: s.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: s.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null
        },
        allowClick: !0,
        allowTouchMove: s.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0
      }),
      s.emit('_swiper'),
      s.params.init && s.init(),
      s
    )
  }
  getDirectionLabel(t) {
    return this.isHorizontal()
      ? t
      : {
          width: 'height',
          'margin-top': 'margin-left',
          'margin-bottom ': 'margin-right',
          'margin-left': 'margin-top',
          'margin-right': 'margin-bottom',
          'padding-left': 'padding-top',
          'padding-right': 'padding-bottom',
          marginRight: 'marginBottom'
        }[t]
  }
  getSlideIndex(t) {
    const { slidesEl: n, params: r } = this,
      i = gn(n, `.${r.slideClass}, swiper-slide`),
      o = Nm(i[0])
    return Nm(t) - o
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.filter(
        (n) => n.getAttribute('data-swiper-slide-index') * 1 === t
      )[0]
    )
  }
  recalcSlides() {
    const t = this,
      { slidesEl: n, params: r } = t
    t.slides = gn(n, `.${r.slideClass}, swiper-slide`)
  }
  enable() {
    const t = this
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit('enable'))
  }
  disable() {
    const t = this
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit('disable'))
  }
  setProgress(t, n) {
    const r = this
    t = Math.min(Math.max(t, 0), 1)
    const i = r.minTranslate(),
      a = (r.maxTranslate() - i) * t + i
    r.translateTo(a, typeof n > 'u' ? 0 : n),
      r.updateActiveIndex(),
      r.updateSlidesClasses()
  }
  emitContainerClasses() {
    const t = this
    if (!t.params._emitClasses || !t.el) return
    const n = t.el.className
      .split(' ')
      .filter(
        (r) =>
          r.indexOf('swiper') === 0 ||
          r.indexOf(t.params.containerModifierClass) === 0
      )
    t.emit('_containerClasses', n.join(' '))
  }
  getSlideClasses(t) {
    const n = this
    return n.destroyed
      ? ''
      : t.className
          .split(' ')
          .filter(
            (r) =>
              r.indexOf('swiper-slide') === 0 ||
              r.indexOf(n.params.slideClass) === 0
          )
          .join(' ')
  }
  emitSlidesClasses() {
    const t = this
    if (!t.params._emitClasses || !t.el) return
    const n = []
    t.slides.forEach((r) => {
      const i = t.getSlideClasses(r)
      n.push({ slideEl: r, classNames: i }), t.emit('_slideClass', r, i)
    }),
      t.emit('_slideClasses', n)
  }
  slidesPerViewDynamic(t, n) {
    t === void 0 && (t = 'current'), n === void 0 && (n = !1)
    const r = this,
      {
        params: i,
        slides: o,
        slidesGrid: a,
        slidesSizesGrid: s,
        size: l,
        activeIndex: u
      } = r
    let c = 1
    if (typeof i.slidesPerView == 'number') return i.slidesPerView
    if (i.centeredSlides) {
      let f = o[u] ? Math.ceil(o[u].swiperSlideSize) : 0,
        d
      for (let g = u + 1; g < o.length; g += 1)
        o[g] &&
          !d &&
          ((f += Math.ceil(o[g].swiperSlideSize)), (c += 1), f > l && (d = !0))
      for (let g = u - 1; g >= 0; g -= 1)
        o[g] && !d && ((f += o[g].swiperSlideSize), (c += 1), f > l && (d = !0))
    } else if (t === 'current')
      for (let f = u + 1; f < o.length; f += 1)
        (n ? a[f] + s[f] - a[u] < l : a[f] - a[u] < l) && (c += 1)
    else for (let f = u - 1; f >= 0; f -= 1) a[u] - a[f] < l && (c += 1)
    return c
  }
  update() {
    const t = this
    if (!t || t.destroyed) return
    const { snapGrid: n, params: r } = t
    r.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((a) => {
        a.complete && Cs(t, a)
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses()
    function i() {
      const a = t.rtlTranslate ? t.translate * -1 : t.translate,
        s = Math.min(Math.max(a, t.maxTranslate()), t.minTranslate())
      t.setTranslate(s), t.updateActiveIndex(), t.updateSlidesClasses()
    }
    let o
    if (r.freeMode && r.freeMode.enabled && !r.cssMode)
      i(), r.autoHeight && t.updateAutoHeight()
    else {
      if (
        (r.slidesPerView === 'auto' || r.slidesPerView > 1) &&
        t.isEnd &&
        !r.centeredSlides
      ) {
        const a = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides
        o = t.slideTo(a.length - 1, 0, !1, !0)
      } else o = t.slideTo(t.activeIndex, 0, !1, !0)
      o || i()
    }
    r.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit('update')
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0)
    const r = this,
      i = r.params.direction
    return (
      t || (t = i === 'horizontal' ? 'vertical' : 'horizontal'),
      t === i ||
        (t !== 'horizontal' && t !== 'vertical') ||
        (r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
        r.el.classList.add(`${r.params.containerModifierClass}${t}`),
        r.emitContainerClasses(),
        (r.params.direction = t),
        r.slides.forEach((o) => {
          t === 'vertical' ? (o.style.width = '') : (o.style.height = '')
        }),
        r.emit('changeDirection'),
        n && r.update()),
      r
    )
  }
  changeLanguageDirection(t) {
    const n = this
    ;(n.rtl && t === 'rtl') ||
      (!n.rtl && t === 'ltr') ||
      ((n.rtl = t === 'rtl'),
      (n.rtlTranslate = n.params.direction === 'horizontal' && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = 'rtl'))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = 'ltr')),
      n.update())
  }
  mount(t) {
    const n = this
    if (n.mounted) return !0
    let r = t || n.params.el
    if ((typeof r == 'string' && (r = document.querySelector(r)), !r)) return !1
    ;(r.swiper = n),
      r.parentNode &&
        r.parentNode.host &&
        r.parentNode.host.nodeName ===
          n.params.swiperElementNodeName.toUpperCase() &&
        (n.isElement = !0)
    const i = () =>
      `.${(n.params.wrapperClass || '').trim().split(' ').join('.')}`
    let a =
      r && r.shadowRoot && r.shadowRoot.querySelector
        ? r.shadowRoot.querySelector(i())
        : gn(r, i())[0]
    return (
      !a &&
        n.params.createElements &&
        ((a = _d('div', n.params.wrapperClass)),
        r.append(a),
        gn(r, `.${n.params.slideClass}`).forEach((s) => {
          a.append(s)
        })),
      Object.assign(n, {
        el: r,
        wrapperEl: a,
        slidesEl:
          n.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : a,
        hostEl: n.isElement ? r.parentNode.host : r,
        mounted: !0,
        rtl: r.dir.toLowerCase() === 'rtl' || Vn(r, 'direction') === 'rtl',
        rtlTranslate:
          n.params.direction === 'horizontal' &&
          (r.dir.toLowerCase() === 'rtl' || Vn(r, 'direction') === 'rtl'),
        wrongRTL: Vn(a, 'display') === '-webkit-box'
      }),
      !0
    )
  }
  init(t) {
    const n = this
    if (n.initialized || n.mount(t) === !1) return n
    n.emit('beforeInit'),
      n.params.breakpoints && n.setBreakpoint(),
      n.addClasses(),
      n.updateSize(),
      n.updateSlides(),
      n.params.watchOverflow && n.checkOverflow(),
      n.params.grabCursor && n.enabled && n.setGrabCursor(),
      n.params.loop && n.virtual && n.params.virtual.enabled
        ? n.slideTo(
            n.params.initialSlide + n.virtual.slidesBefore,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          )
        : n.slideTo(
            n.params.initialSlide,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          ),
      n.params.loop && n.loopCreate(),
      n.attachEvents()
    const i = [...n.el.querySelectorAll('[loading="lazy"]')]
    return (
      n.isElement && i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
      i.forEach((o) => {
        o.complete
          ? Cs(n, o)
          : o.addEventListener('load', (a) => {
              Cs(n, a.target)
            })
      }),
      wd(n),
      (n.initialized = !0),
      wd(n),
      n.emit('init'),
      n.emit('afterInit'),
      n
    )
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0)
    const r = this,
      { params: i, el: o, wrapperEl: a, slides: s } = r
    return (
      typeof r.params > 'u' ||
        r.destroyed ||
        (r.emit('beforeDestroy'),
        (r.initialized = !1),
        r.detachEvents(),
        i.loop && r.loopDestroy(),
        n &&
          (r.removeClasses(),
          o && typeof o != 'string' && o.removeAttribute('style'),
          a && a.removeAttribute('style'),
          s &&
            s.length &&
            s.forEach((l) => {
              l.classList.remove(
                i.slideVisibleClass,
                i.slideFullyVisibleClass,
                i.slideActiveClass,
                i.slideNextClass,
                i.slidePrevClass
              ),
                l.removeAttribute('style'),
                l.removeAttribute('data-swiper-slide-index')
            })),
        r.emit('destroy'),
        Object.keys(r.eventsListeners).forEach((l) => {
          r.off(l)
        }),
        t !== !1 &&
          (r.el && typeof r.el != 'string' && (r.el.swiper = null), JC(r)),
        (r.destroyed = !0)),
      null
    )
  }
  static extendDefaults(t) {
    st(Uu, t)
  }
  static get extendedDefaults() {
    return Uu
  }
  static get defaults() {
    return xd
  }
  static installModule(t) {
    dn.prototype.__modules__ || (dn.prototype.__modules__ = [])
    const n = dn.prototype.__modules__
    typeof t == 'function' && n.indexOf(t) < 0 && n.push(t)
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => dn.installModule(n)), dn)
      : (dn.installModule(t), dn)
  }
}
Object.keys(Wu).forEach((e) => {
  Object.keys(Wu[e]).forEach((t) => {
    xp.prototype[t] = Wu[e][t]
  })
})
xp.use([dE, fE])
const $1 = [
  'eventsPrefix',
  'injectStyles',
  'injectStylesUrls',
  'modules',
  'init',
  '_direction',
  'oneWayMovement',
  'swiperElementNodeName',
  'touchEventsTarget',
  'initialSlide',
  '_speed',
  'cssMode',
  'updateOnWindowResize',
  'resizeObserver',
  'nested',
  'focusableElements',
  '_enabled',
  '_width',
  '_height',
  'preventInteractionOnTransition',
  'userAgent',
  'url',
  '_edgeSwipeDetection',
  '_edgeSwipeThreshold',
  '_freeMode',
  '_autoHeight',
  'setWrapperSize',
  'virtualTranslate',
  '_effect',
  'breakpoints',
  'breakpointsBase',
  '_spaceBetween',
  '_slidesPerView',
  'maxBackfaceHiddenSlides',
  '_grid',
  '_slidesPerGroup',
  '_slidesPerGroupSkip',
  '_slidesPerGroupAuto',
  '_centeredSlides',
  '_centeredSlidesBounds',
  '_slidesOffsetBefore',
  '_slidesOffsetAfter',
  'normalizeSlideIndex',
  '_centerInsufficientSlides',
  '_watchOverflow',
  'roundLengths',
  'touchRatio',
  'touchAngle',
  'simulateTouch',
  '_shortSwipes',
  '_longSwipes',
  'longSwipesRatio',
  'longSwipesMs',
  '_followFinger',
  'allowTouchMove',
  '_threshold',
  'touchMoveStopPropagation',
  'touchStartPreventDefault',
  'touchStartForcePreventDefault',
  'touchReleaseOnEdges',
  'uniqueNavElements',
  '_resistance',
  '_resistanceRatio',
  '_watchSlidesProgress',
  '_grabCursor',
  'preventClicks',
  'preventClicksPropagation',
  '_slideToClickedSlide',
  '_loop',
  'loopAdditionalSlides',
  'loopAddBlankSlides',
  'loopPreventsSliding',
  '_rewind',
  '_allowSlidePrev',
  '_allowSlideNext',
  '_swipeHandler',
  '_noSwiping',
  'noSwipingClass',
  'noSwipingSelector',
  'passiveListeners',
  'containerModifierClass',
  'slideClass',
  'slideActiveClass',
  'slideVisibleClass',
  'slideFullyVisibleClass',
  'slideNextClass',
  'slidePrevClass',
  'slideBlankClass',
  'wrapperClass',
  'lazyPreloaderClass',
  'lazyPreloadPrevNext',
  'runCallbacksOnInit',
  'observer',
  'observeParents',
  'observeSlideChildren',
  'a11y',
  '_autoplay',
  '_controller',
  'coverflowEffect',
  'cubeEffect',
  'fadeEffect',
  'flipEffect',
  'creativeEffect',
  'cardsEffect',
  'hashNavigation',
  'history',
  'keyboard',
  'mousewheel',
  '_navigation',
  '_pagination',
  'parallax',
  '_scrollbar',
  '_thumbs',
  'virtual',
  'zoom',
  'control'
]
function Pr(e) {
  return (
    typeof e == 'object' &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === 'Object' &&
    !e.__swiper__
  )
}
function xi(e, t) {
  const n = ['__proto__', 'constructor', 'prototype']
  Object.keys(t)
    .filter((r) => n.indexOf(r) < 0)
    .forEach((r) => {
      typeof e[r] > 'u'
        ? (e[r] = t[r])
        : Pr(t[r]) && Pr(e[r]) && Object.keys(t[r]).length > 0
        ? t[r].__swiper__
          ? (e[r] = t[r])
          : xi(e[r], t[r])
        : (e[r] = t[r])
    })
}
function D1(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > 'u' &&
      typeof e.navigation.prevEl > 'u'
  )
}
function z1(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > 'u'
}
function V1(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > 'u'
}
function B1(e) {
  e === void 0 && (e = '')
  const t = e
      .split(' ')
      .map((r) => r.trim())
      .filter((r) => !!r),
    n = []
  return (
    t.forEach((r) => {
      n.indexOf(r) < 0 && n.push(r)
    }),
    n.join(' ')
  )
}
function g4(e) {
  return (
    e === void 0 && (e = ''),
    e
      ? e.includes('swiper-wrapper')
        ? e
        : `swiper-wrapper ${e}`
      : 'swiper-wrapper'
  )
}
function y4(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: r,
    changedParams: i,
    nextEl: o,
    prevEl: a,
    scrollbarEl: s,
    paginationEl: l
  } = e
  const u = i.filter(
      (T) => T !== 'children' && T !== 'direction' && T !== 'wrapperClass'
    ),
    {
      params: c,
      pagination: f,
      navigation: d,
      scrollbar: g,
      virtual: y,
      thumbs: _
    } = t
  let x, v, p, m, w, b, C, S
  i.includes('thumbs') &&
    r.thumbs &&
    r.thumbs.swiper &&
    !r.thumbs.swiper.destroyed &&
    c.thumbs &&
    (!c.thumbs.swiper || c.thumbs.swiper.destroyed) &&
    (x = !0),
    i.includes('controller') &&
      r.controller &&
      r.controller.control &&
      c.controller &&
      !c.controller.control &&
      (v = !0),
    i.includes('pagination') &&
      r.pagination &&
      (r.pagination.el || l) &&
      (c.pagination || c.pagination === !1) &&
      f &&
      !f.el &&
      (p = !0),
    i.includes('scrollbar') &&
      r.scrollbar &&
      (r.scrollbar.el || s) &&
      (c.scrollbar || c.scrollbar === !1) &&
      g &&
      !g.el &&
      (m = !0),
    i.includes('navigation') &&
      r.navigation &&
      (r.navigation.prevEl || a) &&
      (r.navigation.nextEl || o) &&
      (c.navigation || c.navigation === !1) &&
      d &&
      !d.prevEl &&
      !d.nextEl &&
      (w = !0)
  const E = (T) => {
    t[T] &&
      (t[T].destroy(),
      T === 'navigation'
        ? (t.isElement && (t[T].prevEl.remove(), t[T].nextEl.remove()),
          (c[T].prevEl = void 0),
          (c[T].nextEl = void 0),
          (t[T].prevEl = void 0),
          (t[T].nextEl = void 0))
        : (t.isElement && t[T].el.remove(),
          (c[T].el = void 0),
          (t[T].el = void 0)))
  }
  i.includes('loop') &&
    t.isElement &&
    (c.loop && !r.loop ? (b = !0) : !c.loop && r.loop ? (C = !0) : (S = !0)),
    u.forEach((T) => {
      if (Pr(c[T]) && Pr(r[T]))
        Object.assign(c[T], r[T]),
          (T === 'navigation' || T === 'pagination' || T === 'scrollbar') &&
            'enabled' in r[T] &&
            !r[T].enabled &&
            E(T)
      else {
        const k = r[T]
        ;(k === !0 || k === !1) &&
        (T === 'navigation' || T === 'pagination' || T === 'scrollbar')
          ? k === !1 && E(T)
          : (c[T] = r[T])
      }
    }),
    u.includes('controller') &&
      !v &&
      t.controller &&
      t.controller.control &&
      c.controller &&
      c.controller.control &&
      (t.controller.control = c.controller.control),
    i.includes('children') && n && y && c.virtual.enabled
      ? ((y.slides = n), y.update(!0))
      : i.includes('virtual') &&
        y &&
        c.virtual.enabled &&
        (n && (y.slides = n), y.update(!0)),
    i.includes('children') && n && c.loop && (S = !0),
    x && _.init() && _.update(!0),
    v && (t.controller.control = c.controller.control),
    p &&
      (t.isElement &&
        (!l || typeof l == 'string') &&
        ((l = document.createElement('div')),
        l.classList.add('swiper-pagination'),
        l.part.add('pagination'),
        t.el.appendChild(l)),
      l && (c.pagination.el = l),
      f.init(),
      f.render(),
      f.update()),
    m &&
      (t.isElement &&
        (!s || typeof s == 'string') &&
        ((s = document.createElement('div')),
        s.classList.add('swiper-scrollbar'),
        s.part.add('scrollbar'),
        t.el.appendChild(s)),
      s && (c.scrollbar.el = s),
      g.init(),
      g.updateSize(),
      g.setTranslate()),
    w &&
      (t.isElement &&
        ((!o || typeof o == 'string') &&
          ((o = document.createElement('div')),
          o.classList.add('swiper-button-next'),
          (o.innerHTML = t.hostEl.constructor.nextButtonSvg),
          o.part.add('button-next'),
          t.el.appendChild(o)),
        (!a || typeof a == 'string') &&
          ((a = document.createElement('div')),
          a.classList.add('swiper-button-prev'),
          (a.innerHTML = t.hostEl.constructor.prevButtonSvg),
          a.part.add('button-prev'),
          t.el.appendChild(a))),
      o && (c.navigation.nextEl = o),
      a && (c.navigation.prevEl = a),
      d.init(),
      d.update()),
    i.includes('allowSlideNext') && (t.allowSlideNext = r.allowSlideNext),
    i.includes('allowSlidePrev') && (t.allowSlidePrev = r.allowSlidePrev),
    i.includes('direction') && t.changeDirection(r.direction, !1),
    (b || S) && t.loopDestroy(),
    (C || S) && t.loopCreate(),
    t.update()
}
function _4(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !0)
  const n = { on: {} },
    r = {},
    i = {}
  xi(n, xd), (n._emitClasses = !0), (n.init = !1)
  const o = {},
    a = $1.map((l) => l.replace(/_/, '')),
    s = Object.assign({}, e)
  return (
    Object.keys(s).forEach((l) => {
      typeof e[l] > 'u' ||
        (a.indexOf(l) >= 0
          ? Pr(e[l])
            ? ((n[l] = {}), (i[l] = {}), xi(n[l], e[l]), xi(i[l], e[l]))
            : ((n[l] = e[l]), (i[l] = e[l]))
          : l.search(/on[A-Z]/) === 0 && typeof e[l] == 'function'
          ? t
            ? (r[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l])
            : (n.on[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l])
          : (o[l] = e[l]))
    }),
    ['navigation', 'pagination', 'scrollbar'].forEach((l) => {
      n[l] === !0 && (n[l] = {}), n[l] === !1 && delete n[l]
    }),
    { params: n, passedParams: i, rest: o, events: r }
  )
}
function w4(e, t) {
  let {
    el: n,
    nextEl: r,
    prevEl: i,
    paginationEl: o,
    scrollbarEl: a,
    swiper: s
  } = e
  D1(t) &&
    r &&
    i &&
    ((s.params.navigation.nextEl = r),
    (s.originalParams.navigation.nextEl = r),
    (s.params.navigation.prevEl = i),
    (s.originalParams.navigation.prevEl = i)),
    z1(t) &&
      o &&
      ((s.params.pagination.el = o), (s.originalParams.pagination.el = o)),
    V1(t) &&
      a &&
      ((s.params.scrollbar.el = a), (s.originalParams.scrollbar.el = a)),
    s.init(n)
}
function x4(e, t, n, r, i) {
  const o = []
  if (!t) return o
  const a = (l) => {
    o.indexOf(l) < 0 && o.push(l)
  }
  if (n && r) {
    const l = r.map(i),
      u = n.map(i)
    l.join('') !== u.join('') && a('children'),
      r.length !== n.length && a('children')
  }
  return (
    $1
      .filter((l) => l[0] === '_')
      .map((l) => l.replace(/_/, ''))
      .forEach((l) => {
        if (l in e && l in t)
          if (Pr(e[l]) && Pr(t[l])) {
            const u = Object.keys(e[l]),
              c = Object.keys(t[l])
            u.length !== c.length
              ? a(l)
              : (u.forEach((f) => {
                  e[l][f] !== t[l][f] && a(l)
                }),
                c.forEach((f) => {
                  e[l][f] !== t[l][f] && a(l)
                }))
          } else e[l] !== t[l] && a(l)
      }),
    o
  )
}
const b4 = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate())
}
function ul() {
  return (
    (ul = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    ul.apply(this, arguments)
  )
}
function H1(e) {
  return (
    e.type && e.type.displayName && e.type.displayName.includes('SwiperSlide')
  )
}
function q1(e) {
  const t = []
  return (
    te.Children.toArray(e).forEach((n) => {
      H1(n)
        ? t.push(n)
        : n.props &&
          n.props.children &&
          q1(n.props.children).forEach((r) => t.push(r))
    }),
    t
  )
}
function S4(e) {
  const t = [],
    n = {
      'container-start': [],
      'container-end': [],
      'wrapper-start': [],
      'wrapper-end': []
    }
  return (
    te.Children.toArray(e).forEach((r) => {
      if (H1(r)) t.push(r)
      else if (r.props && r.props.slot && n[r.props.slot])
        n[r.props.slot].push(r)
      else if (r.props && r.props.children) {
        const i = q1(r.props.children)
        i.length > 0 ? i.forEach((o) => t.push(o)) : n['container-end'].push(r)
      } else n['container-end'].push(r)
    }),
    { slides: t, slots: n }
  )
}
function C4(e, t, n) {
  if (!n) return null
  const r = (c) => {
      let f = c
      return c < 0 ? (f = t.length + c) : f >= t.length && (f = f - t.length), f
    },
    i = e.isHorizontal()
      ? { [e.rtlTranslate ? 'right' : 'left']: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: o, to: a } = n,
    s = e.params.loop ? -t.length : 0,
    l = e.params.loop ? t.length * 2 : t.length,
    u = []
  for (let c = s; c < l; c += 1) c >= o && c <= a && u.push(t[r(c)])
  return u.map((c, f) =>
    te.cloneElement(c, {
      swiper: e,
      style: i,
      key: c.props.virtualIndex || c.key || `slide-${f}`
    })
  )
}
function To(e, t) {
  return typeof window > 'u' ? j.useEffect(e, t) : j.useLayoutEffect(e, t)
}
const Fm = j.createContext(null),
  E4 = j.createContext(null),
  W1 = j.forwardRef(function (e, t) {
    let {
        className: n,
        tag: r = 'div',
        wrapperTag: i = 'div',
        children: o,
        onSwiper: a,
        ...s
      } = e === void 0 ? {} : e,
      l = !1
    const [u, c] = j.useState('swiper'),
      [f, d] = j.useState(null),
      [g, y] = j.useState(!1),
      _ = j.useRef(!1),
      x = j.useRef(null),
      v = j.useRef(null),
      p = j.useRef(null),
      m = j.useRef(null),
      w = j.useRef(null),
      b = j.useRef(null),
      C = j.useRef(null),
      S = j.useRef(null),
      { params: E, passedParams: T, rest: k, events: M } = _4(s),
      { slides: L, slots: O } = S4(o),
      A = () => {
        y(!g)
      }
    Object.assign(E.on, {
      _containerClasses(F, $) {
        c($)
      }
    })
    const z = () => {
      Object.assign(E.on, M), (l = !0)
      const F = { ...E }
      if (
        (delete F.wrapperClass,
        (v.current = new xp(F)),
        v.current.virtual && v.current.params.virtual.enabled)
      ) {
        v.current.virtual.slides = L
        const $ = {
          cache: !1,
          slides: L,
          renderExternal: d,
          renderExternalUpdate: !1
        }
        xi(v.current.params.virtual, $), xi(v.current.originalParams.virtual, $)
      }
    }
    x.current || z(), v.current && v.current.on('_beforeBreakpoint', A)
    const R = () => {
        l ||
          !M ||
          !v.current ||
          Object.keys(M).forEach((F) => {
            v.current.on(F, M[F])
          })
      },
      I = () => {
        !M ||
          !v.current ||
          Object.keys(M).forEach((F) => {
            v.current.off(F, M[F])
          })
      }
    j.useEffect(() => () => {
      v.current && v.current.off('_beforeBreakpoint', A)
    }),
      j.useEffect(() => {
        !_.current &&
          v.current &&
          (v.current.emitSlidesClasses(), (_.current = !0))
      }),
      To(() => {
        if ((t && (t.current = x.current), !!x.current))
          return (
            v.current.destroyed && z(),
            w4(
              {
                el: x.current,
                nextEl: w.current,
                prevEl: b.current,
                paginationEl: C.current,
                scrollbarEl: S.current,
                swiper: v.current
              },
              E
            ),
            a && !v.current.destroyed && a(v.current),
            () => {
              v.current && !v.current.destroyed && v.current.destroy(!0, !1)
            }
          )
      }, []),
      To(() => {
        R()
        const F = x4(T, p.current, L, m.current, ($) => $.key)
        return (
          (p.current = T),
          (m.current = L),
          F.length &&
            v.current &&
            !v.current.destroyed &&
            y4({
              swiper: v.current,
              slides: L,
              passedParams: T,
              changedParams: F,
              nextEl: w.current,
              prevEl: b.current,
              scrollbarEl: S.current,
              paginationEl: C.current
            }),
          () => {
            I()
          }
        )
      }),
      To(() => {
        b4(v.current)
      }, [f])
    function N() {
      return E.virtual
        ? C4(v.current, L, f)
        : L.map((F, $) =>
            te.cloneElement(F, { swiper: v.current, swiperSlideIndex: $ })
          )
    }
    return te.createElement(
      r,
      ul({ ref: x, className: B1(`${u}${n ? ` ${n}` : ''}`) }, k),
      te.createElement(
        E4.Provider,
        { value: v.current },
        O['container-start'],
        te.createElement(
          i,
          { className: g4(E.wrapperClass) },
          O['wrapper-start'],
          N(),
          O['wrapper-end']
        ),
        D1(E) &&
          te.createElement(
            te.Fragment,
            null,
            te.createElement('div', {
              ref: b,
              className: 'swiper-button-prev'
            }),
            te.createElement('div', { ref: w, className: 'swiper-button-next' })
          ),
        V1(E) &&
          te.createElement('div', { ref: S, className: 'swiper-scrollbar' }),
        z1(E) &&
          te.createElement('div', { ref: C, className: 'swiper-pagination' }),
        O['container-end']
      )
    )
  })
W1.displayName = 'Swiper'
const U1 = j.forwardRef(function (e, t) {
  let {
    tag: n = 'div',
    children: r,
    className: i = '',
    swiper: o,
    zoom: a,
    lazy: s,
    virtualIndex: l,
    swiperSlideIndex: u,
    ...c
  } = e === void 0 ? {} : e
  const f = j.useRef(null),
    [d, g] = j.useState('swiper-slide'),
    [y, _] = j.useState(!1)
  function x(w, b, C) {
    b === f.current && g(C)
  }
  To(() => {
    if (
      (typeof u < 'u' && (f.current.swiperSlideIndex = u),
      t && (t.current = f.current),
      !(!f.current || !o))
    ) {
      if (o.destroyed) {
        d !== 'swiper-slide' && g('swiper-slide')
        return
      }
      return (
        o.on('_slideClass', x),
        () => {
          o && o.off('_slideClass', x)
        }
      )
    }
  }),
    To(() => {
      o && f.current && !o.destroyed && g(o.getSlideClasses(f.current))
    }, [o])
  const v = {
      isActive: d.indexOf('swiper-slide-active') >= 0,
      isVisible: d.indexOf('swiper-slide-visible') >= 0,
      isPrev: d.indexOf('swiper-slide-prev') >= 0,
      isNext: d.indexOf('swiper-slide-next') >= 0
    },
    p = () => (typeof r == 'function' ? r(v) : r),
    m = () => {
      _(!0)
    }
  return te.createElement(
    n,
    ul(
      {
        ref: f,
        className: B1(`${d}${i ? ` ${i}` : ''}`),
        'data-swiper-slide-index': l,
        onLoad: m
      },
      c
    ),
    a &&
      te.createElement(
        Fm.Provider,
        { value: v },
        te.createElement(
          'div',
          {
            className: 'swiper-zoom-container',
            'data-swiper-zoom': typeof a == 'number' ? a : void 0
          },
          p(),
          s &&
            !y &&
            te.createElement('div', { className: 'swiper-lazy-preloader' })
        )
      ),
    !a &&
      te.createElement(
        Fm.Provider,
        { value: v },
        p(),
        s &&
          !y &&
          te.createElement('div', { className: 'swiper-lazy-preloader' })
      )
  )
})
U1.displayName = 'SwiperSlide'
function T4(e) {
  let { swiper: t, extendParams: n, on: r, emit: i, params: o } = e
  ;(t.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
    n({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !1,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1
      }
    })
  let a,
    s,
    l = o && o.autoplay ? o.autoplay.delay : 3e3,
    u = o && o.autoplay ? o.autoplay.delay : 3e3,
    c,
    f = new Date().getTime(),
    d,
    g,
    y,
    _,
    x,
    v,
    p
  function m(N) {
    !t ||
      t.destroyed ||
      !t.wrapperEl ||
      (N.target === t.wrapperEl &&
        (t.wrapperEl.removeEventListener('transitionend', m),
        !(p || (N.detail && N.detail.bySwiperTouchMove)) && k()))
  }
  const w = () => {
      if (t.destroyed || !t.autoplay.running) return
      t.autoplay.paused ? (d = !0) : d && ((u = c), (d = !1))
      const N = t.autoplay.paused ? c : f + u - new Date().getTime()
      ;(t.autoplay.timeLeft = N),
        i('autoplayTimeLeft', N, N / l),
        (s = requestAnimationFrame(() => {
          w()
        }))
    },
    b = () => {
      let N
      return (
        t.virtual && t.params.virtual.enabled
          ? (N = t.slides.filter(($) =>
              $.classList.contains('swiper-slide-active')
            )[0])
          : (N = t.slides[t.activeIndex]),
        N ? parseInt(N.getAttribute('data-swiper-autoplay'), 10) : void 0
      )
    },
    C = (N) => {
      if (t.destroyed || !t.autoplay.running) return
      cancelAnimationFrame(s), w()
      let F = typeof N > 'u' ? t.params.autoplay.delay : N
      ;(l = t.params.autoplay.delay), (u = t.params.autoplay.delay)
      const $ = b()
      !Number.isNaN($) &&
        $ > 0 &&
        typeof N > 'u' &&
        ((F = $), (l = $), (u = $)),
        (c = F)
      const V = t.params.speed,
        q = () => {
          !t ||
            t.destroyed ||
            (t.params.autoplay.reverseDirection
              ? !t.isBeginning || t.params.loop || t.params.rewind
                ? (t.slidePrev(V, !0, !0), i('autoplay'))
                : t.params.autoplay.stopOnLastSlide ||
                  (t.slideTo(t.slides.length - 1, V, !0, !0), i('autoplay'))
              : !t.isEnd || t.params.loop || t.params.rewind
              ? (t.slideNext(V, !0, !0), i('autoplay'))
              : t.params.autoplay.stopOnLastSlide ||
                (t.slideTo(0, V, !0, !0), i('autoplay')),
            t.params.cssMode &&
              ((f = new Date().getTime()),
              requestAnimationFrame(() => {
                C()
              })))
        }
      return (
        F > 0
          ? (clearTimeout(a),
            (a = setTimeout(() => {
              q()
            }, F)))
          : requestAnimationFrame(() => {
              q()
            }),
        F
      )
    },
    S = () => {
      ;(f = new Date().getTime()),
        (t.autoplay.running = !0),
        C(),
        i('autoplayStart')
    },
    E = () => {
      ;(t.autoplay.running = !1),
        clearTimeout(a),
        cancelAnimationFrame(s),
        i('autoplayStop')
    },
    T = (N, F) => {
      if (t.destroyed || !t.autoplay.running) return
      clearTimeout(a), N || (v = !0)
      const $ = () => {
        i('autoplayPause'),
          t.params.autoplay.waitForTransition
            ? t.wrapperEl.addEventListener('transitionend', m)
            : k()
      }
      if (((t.autoplay.paused = !0), F)) {
        x && (c = t.params.autoplay.delay), (x = !1), $()
        return
      }
      ;(c = (c || t.params.autoplay.delay) - (new Date().getTime() - f)),
        !(t.isEnd && c < 0 && !t.params.loop) && (c < 0 && (c = 0), $())
    },
    k = () => {
      ;(t.isEnd && c < 0 && !t.params.loop) ||
        t.destroyed ||
        !t.autoplay.running ||
        ((f = new Date().getTime()),
        v ? ((v = !1), C(c)) : C(),
        (t.autoplay.paused = !1),
        i('autoplayResume'))
    },
    M = () => {
      if (t.destroyed || !t.autoplay.running) return
      const N = _n()
      N.visibilityState === 'hidden' && ((v = !0), T(!0)),
        N.visibilityState === 'visible' && k()
    },
    L = (N) => {
      N.pointerType === 'mouse' &&
        ((v = !0), (p = !0), !(t.animating || t.autoplay.paused) && T(!0))
    },
    O = (N) => {
      N.pointerType === 'mouse' && ((p = !1), t.autoplay.paused && k())
    },
    A = () => {
      t.params.autoplay.pauseOnMouseEnter &&
        (t.el.addEventListener('pointerenter', L),
        t.el.addEventListener('pointerleave', O))
    },
    z = () => {
      t.el &&
        typeof t.el != 'string' &&
        (t.el.removeEventListener('pointerenter', L),
        t.el.removeEventListener('pointerleave', O))
    },
    R = () => {
      _n().addEventListener('visibilitychange', M)
    },
    I = () => {
      _n().removeEventListener('visibilitychange', M)
    }
  r('init', () => {
    t.params.autoplay.enabled && (A(), R(), S())
  }),
    r('destroy', () => {
      z(), I(), t.autoplay.running && E()
    }),
    r('_freeModeStaticRelease', () => {
      ;(y || v) && k()
    }),
    r('_freeModeNoMomentumRelease', () => {
      t.params.autoplay.disableOnInteraction ? E() : T(!0, !0)
    }),
    r('beforeTransitionStart', (N, F, $) => {
      t.destroyed ||
        !t.autoplay.running ||
        ($ || !t.params.autoplay.disableOnInteraction ? T(!0, !0) : E())
    }),
    r('sliderFirstMove', () => {
      if (!(t.destroyed || !t.autoplay.running)) {
        if (t.params.autoplay.disableOnInteraction) {
          E()
          return
        }
        ;(g = !0),
          (y = !1),
          (v = !1),
          (_ = setTimeout(() => {
            ;(v = !0), (y = !0), T(!0)
          }, 200))
      }
    }),
    r('touchEnd', () => {
      if (!(t.destroyed || !t.autoplay.running || !g)) {
        if (
          (clearTimeout(_),
          clearTimeout(a),
          t.params.autoplay.disableOnInteraction)
        ) {
          ;(y = !1), (g = !1)
          return
        }
        y && t.params.cssMode && k(), (y = !1), (g = !1)
      }
    }),
    r('slideChange', () => {
      t.destroyed || !t.autoplay.running || (x = !0)
    }),
    Object.assign(t.autoplay, { start: S, stop: E, pause: T, resume: k })
}
const k4 = '_modal_content_9qfau_1',
  j4 = '_singleModalContent_9qfau_27',
  P4 = '_save_btn_9qfau_27',
  M4 = '_generate_invoice_btn_9qfau_29',
  N4 = '_modal_close_icon_9qfau_53',
  O4 = '_product_search_box_9qfau_59',
  L4 = '_search_icon_9qfau_83',
  A4 = '_sidebar_9qfau_95',
  R4 = '_sidebarTitle_9qfau_107',
  I4 = '_sidebarMenu_9qfau_117',
  F4 = '_sidebarItem_9qfau_129',
  $4 = '_settingsContainer_9qfau_159',
  D4 = '_modal_content_header_9qfau_171',
  z4 = '_form_item_9qfau_185',
  V4 = '_selectContainer_9qfau_199',
  B4 = '_form_Item_double_9qfau_239',
  H4 = '_input__label_9qfau_251',
  q4 = '_select_country_icon_9qfau_301',
  W4 = '_select_proviences_icon_9qfau_303',
  U4 = '_phone_field_9qfau_319',
  G4 = '_country_code_9qfau_327',
  Q4 = '_phone_code_select_container_9qfau_343',
  K4 = '_country_code_select_9qfau_367',
  X4 = '_vatriant_product_main_container_9qfau_397',
  Y4 = '_quantity_product_main_container_9qfau_399',
  Z4 = '_switch_product_main_container_9qfau_417',
  J4 = '_download_invoice_content_9qfau_419',
  e5 = '_add_another_product_main_container_9qfau_421',
  t5 = '_product_box_9qfau_473',
  n5 = '_action_btn_box_9qfau_475',
  r5 = '_product_box_content_9qfau_477',
  i5 = '_product_content_9qfau_489',
  o5 = '_product_variant_9qfau_505',
  a5 = '_product_title_9qfau_515',
  s5 = '_product_price_9qfau_523',
  l5 = '_product_image_box_9qfau_543',
  u5 = '_action_btn_9qfau_475',
  c5 = '_product_quantity_9qfau_591',
  d5 = '_product_quantity_title_9qfau_593',
  f5 = '_variant_product_box_9qfau_607',
  p5 = '_variant_product_box_content_9qfau_609',
  h5 = '_variant_select_box_9qfau_619',
  m5 = '_shipping_method_content_9qfau_651',
  v5 = '_method_radio_9qfau_669',
  g5 = '_shipping_method_name_9qfau_681',
  y5 = '_method_price_9qfau_683',
  _5 = '_product_variant_container_9qfau_691',
  w5 = '_address_container_9qfau_805',
  x5 = '_address_title_9qfau_819',
  b5 = '_address_name_9qfau_831',
  S5 = '_address_9qfau_805',
  C5 = '_customize_invoice_title_9qfau_843',
  E5 = '_purchasing_checkbox_9qfau_853',
  T5 = '_billing_details_checkbox_9qfau_855',
  k5 = '_invoice_radio_container_9qfau_865',
  j5 = '_invoice_radio_9qfau_865',
  P5 = '_download_method_9qfau_889',
  M5 = '_business_form_9qfau_895',
  N5 = '_billing_address_form_9qfau_897',
  O5 = '_gift_message_text_area_9qfau_905',
  L5 = '_switch_product_box_9qfau_921',
  A5 = '_switch_product_box_content_9qfau_923',
  R5 = '_view_details_box_9qfau_953',
  I5 = '_switch_product_action_btn_9qfau_965',
  F5 = '_add_to_cart_9qfau_985',
  $5 = '_switch_single_product_box_9qfau_993',
  D5 = '_switch_product_image_box_9qfau_1003',
  z5 = '_switch_single_product_default_image_9qfau_1021',
  V5 = '_switch_single_product_quantity_box_9qfau_1031',
  B5 = '_switch_product_variant_select_9qfau_1039',
  H5 = '_switch_single_product_title_9qfau_1053',
  q5 = '_switch_single_product_price_9qfau_1063',
  W5 = '_switch_single_product_quantity_btn_9qfau_1073',
  U5 = '_switch_single_product_more_image_box_9qfau_1087',
  G5 = '_switch_single_product_more_image_9qfau_1087',
  Q5 = '_add_another_product_box_9qfau_1133',
  K5 = '_add_another_product_box_content_9qfau_1135',
  X5 = '_add_another_product_action_btn_9qfau_1177',
  Y5 = '_buy_now_9qfau_1197',
  Z5 = '_add_another_single_product_box_9qfau_1205',
  J5 = '_add_another_product_image_box_9qfau_1215',
  eT = '_add_another_single_product_default_image_9qfau_1233',
  tT = '_add_another_single_product_quantity_box_9qfau_1243',
  nT = '_add_another_product_variant_select_9qfau_1251',
  rT = '_add_another_single_product_title_9qfau_1265',
  iT = '_add_another_single_product_price_9qfau_1275',
  oT = '_add_another_single_product_quantity_btn_9qfau_1285',
  aT = '_add_another_single_product_more_image_box_9qfau_1299',
  sT = '_add_another_single_product_more_image_9qfau_1299',
  P = {
    modal_content: k4,
    singleModalContent: j4,
    save_btn: P4,
    generate_invoice_btn: M4,
    modal_close_icon: N4,
    product_search_box: O4,
    search_icon: L4,
    sidebar: A4,
    sidebarTitle: R4,
    sidebarMenu: I4,
    sidebarItem: F4,
    settingsContainer: $4,
    modal_content_header: D4,
    form_item: z4,
    selectContainer: V4,
    form_Item_double: B4,
    input__label: H4,
    select_country_icon: q4,
    select_proviences_icon: W4,
    phone_field: U4,
    country_code: G4,
    phone_code_select_container: Q4,
    country_code_select: K4,
    vatriant_product_main_container: X4,
    quantity_product_main_container: Y4,
    switch_product_main_container: Z4,
    download_invoice_content: J4,
    add_another_product_main_container: e5,
    product_box: t5,
    action_btn_box: n5,
    product_box_content: r5,
    product_content: i5,
    product_variant: o5,
    product_title: a5,
    product_price: s5,
    product_image_box: l5,
    action_btn: u5,
    product_quantity: c5,
    product_quantity_title: d5,
    variant_product_box: f5,
    variant_product_box_content: p5,
    variant_select_box: h5,
    shipping_method_content: m5,
    method_radio: v5,
    shipping_method_name: g5,
    method_price: y5,
    product_variant_container: _5,
    address_container: w5,
    address_title: x5,
    address_name: b5,
    address: S5,
    customize_invoice_title: C5,
    purchasing_checkbox: E5,
    billing_details_checkbox: T5,
    invoice_radio_container: k5,
    invoice_radio: j5,
    download_method: P5,
    business_form: M5,
    billing_address_form: N5,
    gift_message_text_area: O5,
    switch_product_box: L5,
    switch_product_box_content: A5,
    view_details_box: R5,
    switch_product_action_btn: I5,
    add_to_cart: F5,
    switch_single_product_box: $5,
    switch_product_image_box: D5,
    switch_single_product_default_image: z5,
    switch_single_product_quantity_box: V5,
    switch_product_variant_select: B5,
    switch_single_product_title: H5,
    switch_single_product_price: q5,
    switch_single_product_quantity_btn: W5,
    switch_single_product_more_image_box: U5,
    switch_single_product_more_image: G5,
    add_another_product_box: Q5,
    add_another_product_box_content: K5,
    add_another_product_action_btn: X5,
    buy_now: Y5,
    add_another_single_product_box: Z5,
    add_another_product_image_box: J5,
    add_another_single_product_default_image: eT,
    add_another_single_product_quantity_box: tT,
    add_another_product_variant_select: nT,
    add_another_single_product_title: rT,
    add_another_single_product_price: iT,
    add_another_single_product_quantity_btn: oT,
    add_another_single_product_more_image_box: aT,
    add_another_single_product_more_image: sT
  },
  Dt = [
    { value: 'AF', label: 'Afghanistan', phoneCode: '+93' },
    { value: 'AX', label: 'Åland Islands', phoneCode: '+358' },
    { value: 'AL', label: 'Albania', phoneCode: '+355' },
    { value: 'DZ', label: 'Algeria', phoneCode: '+213' },
    { value: 'AD', label: 'Andorra', phoneCode: '+376' },
    { value: 'AO', label: 'Angola', phoneCode: '+244' },
    { value: 'AI', label: 'Anguilla', phoneCode: '+1-264' },
    { value: 'AG', label: 'Antigua and Barbuda', phoneCode: '+1-268' },
    { value: 'AR', label: 'Argentina', phoneCode: '+54' },
    { value: 'AM', label: 'Armenia', phoneCode: '+374' },
    { value: 'AW', label: 'Aruba', phoneCode: '+297' },
    { value: 'AU', label: 'Australia', phoneCode: '+61' },
    { value: 'AT', label: 'Austria', phoneCode: '+43' },
    { value: 'AZ', label: 'Azerbaijan', phoneCode: '+994' },
    { value: 'BS', label: 'Bahamas', phoneCode: '+1-242' },
    { value: 'BH', label: 'Bahrain', phoneCode: '+973' },
    { value: 'BD', label: 'Bangladesh', phoneCode: '+880' },
    { value: 'BB', label: 'Barbados', phoneCode: '+1-246' },
    { value: 'BY', label: 'Belarus', phoneCode: '+375' },
    { value: 'BE', label: 'Belgium', phoneCode: '+32' },
    { value: 'BZ', label: 'Belize', phoneCode: '+501' },
    { value: 'BJ', label: 'Benin', phoneCode: '+229' },
    { value: 'BM', label: 'Bermuda', phoneCode: '+1-441' },
    { value: 'BT', label: 'Bhutan', phoneCode: '+975' },
    {
      value: 'BO',
      label: 'Bolivia (Plurinational State of)',
      phoneCode: '+591'
    },
    {
      value: 'BQ',
      label: 'Bonaire, Sint Eustatius and Saba',
      phoneCode: '+599'
    },
    { value: 'BA', label: 'Bosnia and Herzegovina', phoneCode: '+387' },
    { value: 'BW', label: 'Botswana', phoneCode: '+267' },
    { value: 'BR', label: 'Brazil', phoneCode: '+55' },
    { value: 'IO', label: 'British Indian Ocean Territory', phoneCode: '+246' },
    { value: 'BN', label: 'Brunei Darussalam', phoneCode: '+673' },
    { value: 'BG', label: 'Bulgaria', phoneCode: '+359' },
    { value: 'BF', label: 'Burkina Faso', phoneCode: '+226' },
    { value: 'BI', label: 'Burundi', phoneCode: '+257' },
    { value: 'CV', label: 'Cabo Verde', phoneCode: '+238' },
    { value: 'KH', label: 'Cambodia', phoneCode: '+855' },
    { value: 'CM', label: 'Cameroon', phoneCode: '+237' },
    { value: 'CA', label: 'Canada', phoneCode: '+1' },
    { value: 'KY', label: 'Cayman Islands', phoneCode: '+1-345' },
    { value: 'CF', label: 'Central African Republic', phoneCode: '+236' },
    { value: 'TD', label: 'Chad', phoneCode: '+235' },
    { value: 'CL', label: 'Chile', phoneCode: '+56' },
    { value: 'CN', label: 'China', phoneCode: '+86' },
    { value: 'CX', label: 'Christmas Island', phoneCode: '+61' },
    { value: 'CC', label: 'Cocos (Keeling) Islands', phoneCode: '+61' },
    { value: 'CO', label: 'Colombia', phoneCode: '+57' },
    { value: 'KM', label: 'Comoros', phoneCode: '+269' },
    { value: 'CD', label: 'Congo (DRC)', phoneCode: '+243' },
    { value: 'CG', label: 'Congo', phoneCode: '+242' },
    { value: 'CK', label: 'Cook Islands', phoneCode: '+682' },
    { value: 'CR', label: 'Costa Rica', phoneCode: '+506' },
    { value: 'CI', label: "Côte d'Ivoire", phoneCode: '+225' },
    { value: 'HR', label: 'Croatia', phoneCode: '+385' },
    { value: 'CW', label: 'Curaçao', phoneCode: '+599' },
    { value: 'CY', label: 'Cyprus', phoneCode: '+357' },
    { value: 'CZ', label: 'Czechia', phoneCode: '+420' },
    { value: 'DK', label: 'Denmark', phoneCode: '+45' },
    { value: 'DJ', label: 'Djibouti', phoneCode: '+253' },
    { value: 'DM', label: 'Dominica', phoneCode: '+1-767' },
    { value: 'DO', label: 'Dominican Republic', phoneCode: '+1-809' },
    { value: 'EC', label: 'Ecuador', phoneCode: '+593' },
    { value: 'EG', label: 'Egypt', phoneCode: '+20' },
    { value: 'SV', label: 'El Salvador', phoneCode: '+503' },
    { value: 'GQ', label: 'Equatorial Guinea', phoneCode: '+240' },
    { value: 'ER', label: 'Eritrea', phoneCode: '+291' },
    { value: 'EE', label: 'Estonia', phoneCode: '+372' },
    { value: 'SZ', label: 'Eswatini', phoneCode: '+268' },
    { value: 'ET', label: 'Ethiopia', phoneCode: '+251' },
    { value: 'FK', label: 'Falkland Islands [Malvinas]', phoneCode: '+500' },
    { value: 'FO', label: 'Faroe Islands', phoneCode: '+298' },
    { value: 'FJ', label: 'Fiji', phoneCode: '+679' },
    { value: 'FI', label: 'Finland', phoneCode: '+358' },
    { value: 'FR', label: 'France', phoneCode: '+33' },
    { value: 'GF', label: 'French Guiana', phoneCode: '+594' },
    { value: 'PF', label: 'French Polynesia', phoneCode: '+689' },
    { value: 'TF', label: 'French Southern Territories', phoneCode: '+262' },
    { value: 'GA', label: 'Gabon', phoneCode: '+241' },
    { value: 'GM', label: 'Gambia', phoneCode: '+220' },
    { value: 'GE', label: 'Georgia', phoneCode: '+995' },
    { value: 'DE', label: 'Germany', phoneCode: '+49' },
    { value: 'GH', label: 'Ghana', phoneCode: '+233' },
    { value: 'GI', label: 'Gibraltar', phoneCode: '+350' },
    { value: 'GR', label: 'Greece', phoneCode: '+30' },
    { value: 'GL', label: 'Greenland', phoneCode: '+299' },
    { value: 'GD', label: 'Grenada', phoneCode: '+1-473' },
    { value: 'GP', label: 'Guadeloupe', phoneCode: '+590' },
    { value: 'GT', label: 'Guatemala', phoneCode: '+502' },
    { value: 'GG', label: 'Guernsey', phoneCode: '+44' },
    { value: 'GN', label: 'Guinea', phoneCode: '+224' },
    { value: 'GW', label: 'Guinea-Bissau', phoneCode: '+245' },
    { value: 'GY', label: 'Guyana', phoneCode: '+592' },
    { value: 'HT', label: 'Haiti', phoneCode: '+509' },
    { value: 'VA', label: 'Holy See', phoneCode: '+379' },
    { value: 'HN', label: 'Honduras', phoneCode: '+504' },
    { value: 'HK', label: 'Hong Kong', phoneCode: '+852' },
    { value: 'HU', label: 'Hungary', phoneCode: '+36' },
    { value: 'IS', label: 'Iceland', phoneCode: '+354' },
    { value: 'IN', label: 'India', phoneCode: '+91' },
    { value: 'ID', label: 'Indonesia', phoneCode: '+62' },
    { value: 'IR', label: 'Iran (Islamic Republic of)', phoneCode: '+98' },
    { value: 'IQ', label: 'Iraq', phoneCode: '+964' },
    { value: 'IE', label: 'Ireland', phoneCode: '+353' },
    { value: 'IM', label: 'Isle of Man', phoneCode: '+44' },
    { value: 'IL', label: 'Israel', phoneCode: '+972' },
    { value: 'IT', label: 'Italy', phoneCode: '+39' },
    { value: 'JM', label: 'Jamaica', phoneCode: '+1-876' },
    { value: 'JP', label: 'Japan', phoneCode: '+81' },
    { value: 'JE', label: 'Jersey', phoneCode: '+44' },
    { value: 'JO', label: 'Jordan', phoneCode: '+962' },
    { value: 'KZ', label: 'Kazakhstan', phoneCode: '+7' },
    { value: 'KE', label: 'Kenya', phoneCode: '+254' },
    { value: 'KI', label: 'Kiribati', phoneCode: '+686' },
    {
      value: 'KP',
      label: "Korea (Democratic People's Republic of)",
      phoneCode: '+850'
    },
    { value: 'KR', label: 'Korea, Republic of', phoneCode: '+82' },
    { value: 'KW', label: 'Kuwait', phoneCode: '+965' },
    { value: 'KG', label: 'Kyrgyzstan', phoneCode: '+996' },
    {
      value: 'LA',
      label: "Lao People's Democratic Republic",
      phoneCode: '+856'
    },
    { value: 'LV', label: 'Latvia', phoneCode: '+371' },
    { value: 'LB', label: 'Lebanon', phoneCode: '+961' },
    { value: 'LS', label: 'Lesotho', phoneCode: '+266' },
    { value: 'LR', label: 'Liberia', phoneCode: '+231' },
    { value: 'LY', label: 'Libya', phoneCode: '+218' },
    { value: 'LI', label: 'Liechtenstein', phoneCode: '+423' },
    { value: 'LT', label: 'Lithuania', phoneCode: '+370' },
    { value: 'LU', label: 'Luxembourg', phoneCode: '+352' },
    { value: 'MO', label: 'Macao', phoneCode: '+853' },
    { value: 'MG', label: 'Madagascar', phoneCode: '+261' },
    { value: 'MW', label: 'Malawi', phoneCode: '+265' },
    { value: 'MY', label: 'Malaysia', phoneCode: '+60' },
    { value: 'MV', label: 'Maldives', phoneCode: '+960' },
    { value: 'ML', label: 'Mali', phoneCode: '+223' },
    { value: 'MT', label: 'Malta', phoneCode: '+356' },
    { value: 'MH', label: 'Marshall Islands', phoneCode: '+692' },
    { value: 'MQ', label: 'Martinique', phoneCode: '+596' },
    { value: 'MR', label: 'Mauritania', phoneCode: '+222' },
    { value: 'MU', label: 'Mauritius', phoneCode: '+230' },
    { value: 'YT', label: 'Mayotte', phoneCode: '+262' },
    { value: 'MX', label: 'Mexico', phoneCode: '+52' },
    {
      value: 'FM',
      label: 'Micronesia (Federated States of)',
      phoneCode: '+691'
    },
    { value: 'MD', label: 'Moldova, Republic of', phoneCode: '+373' },
    { value: 'MC', label: 'Monaco', phoneCode: '+377' },
    { value: 'MN', label: 'Mongolia', phoneCode: '+976' },
    { value: 'ME', label: 'Montenegro', phoneCode: '+382' },
    { value: 'MS', label: 'Montserrat', phoneCode: '+1-664' },
    { value: 'MA', label: 'Morocco', phoneCode: '+212' },
    { value: 'MZ', label: 'Mozambique', phoneCode: '+258' },
    { value: 'MM', label: 'Myanmar', phoneCode: '+95' },
    { value: 'NA', label: 'Namibia', phoneCode: '+264' },
    { value: 'NR', label: 'Nauru', phoneCode: '+674' },
    { value: 'NP', label: 'Nepal', phoneCode: '+977' },
    { value: 'NL', label: 'Netherlands', phoneCode: '+31' },
    { value: 'NC', label: 'New Caledonia', phoneCode: '+687' },
    { value: 'NZ', label: 'New Zealand', phoneCode: '+64' },
    { value: 'NI', label: 'Nicaragua', phoneCode: '+505' },
    { value: 'NE', label: 'Niger', phoneCode: '+227' },
    { value: 'NG', label: 'Nigeria', phoneCode: '+234' },
    { value: 'NU', label: 'Niue', phoneCode: '+683' },
    { value: 'NF', label: 'Norfolk Island', phoneCode: '+672' },
    { value: 'MK', label: 'North Macedonia', phoneCode: '+389' },
    { value: 'MP', label: 'Northern Mariana Islands', phoneCode: '+1-670' },
    { value: 'NO', label: 'Norway', phoneCode: '+47' },
    { value: 'OM', label: 'Oman', phoneCode: '+968' },
    { value: 'PK', label: 'Pakistan', phoneCode: '+92' },
    { value: 'PW', label: 'Palau', phoneCode: '+680' },
    { value: 'PS', label: 'Palestine, State of', phoneCode: '+970' },
    { value: 'PA', label: 'Panama', phoneCode: '+507' },
    { value: 'PG', label: 'Papua New Guinea', phoneCode: '+675' },
    { value: 'PY', label: 'Paraguay', phoneCode: '+595' },
    { value: 'PE', label: 'Peru', phoneCode: '+51' },
    { value: 'PH', label: 'Philippines', phoneCode: '+63' },
    { value: 'PL', label: 'Poland', phoneCode: '+48' },
    { value: 'PT', label: 'Portugal', phoneCode: '+351' },
    { value: 'PR', label: 'Puerto Rico', phoneCode: '+1-787' },
    { value: 'QA', label: 'Qatar', phoneCode: '+974' },
    { value: 'RE', label: 'Réunion', phoneCode: '+262' },
    { value: 'RO', label: 'Romania', phoneCode: '+40' },
    { value: 'RU', label: 'Russian Federation', phoneCode: '+7' },
    { value: 'RW', label: 'Rwanda', phoneCode: '+250' },
    { value: 'BL', label: 'Saint Barthélemy', phoneCode: '+590' },
    {
      value: 'SH',
      label: 'Saint Helena, Ascension and Tristan da Cunha',
      phoneCode: '+290'
    },
    { value: 'KN', label: 'Saint Kitts and Nevis', phoneCode: '+1-869' },
    { value: 'LC', label: 'Saint Lucia', phoneCode: '+1-758' },
    { value: 'MF', label: 'Saint Martin (French part)', phoneCode: '+590' },
    { value: 'PM', label: 'Saint Pierre and Miquelon', phoneCode: '+508' },
    {
      value: 'VC',
      label: 'Saint Vincent and the Grenadines',
      phoneCode: '+1-784'
    },
    { value: 'WS', label: 'Samoa', phoneCode: '+685' },
    { value: 'SM', label: 'San Marino', phoneCode: '+378' },
    { value: 'ST', label: 'Sao Tome and Principe', phoneCode: '+239' },
    { value: 'SA', label: 'Saudi Arabia', phoneCode: '+966' },
    { value: 'SN', label: 'Senegal', phoneCode: '+221' },
    { value: 'RS', label: 'Serbia', phoneCode: '+381' },
    { value: 'SC', label: 'Seychelles', phoneCode: '+248' },
    { value: 'SL', label: 'Sierra Leone', phoneCode: '+232' },
    { value: 'SG', label: 'Singapore', phoneCode: '+65' },
    { value: 'SX', label: 'Sint Maarten (Dutch part)', phoneCode: '+1-721' },
    { value: 'SK', label: 'Slovakia', phoneCode: '+421' },
    { value: 'SI', label: 'Slovenia', phoneCode: '+386' },
    { value: 'SB', label: 'Solomon Islands', phoneCode: '+677' },
    { value: 'SO', label: 'Somalia', phoneCode: '+252' },
    { value: 'ZA', label: 'South Africa', phoneCode: '+27' },
    { value: 'SS', label: 'South Sudan', phoneCode: '+211' },
    { value: 'ES', label: 'Spain', phoneCode: '+34' },
    { value: 'LK', label: 'Sri Lanka', phoneCode: '+94' },
    { value: 'SD', label: 'Sudan', phoneCode: '+249' },
    { value: 'SR', label: 'Suriname', phoneCode: '+597' },
    { value: 'SE', label: 'Sweden', phoneCode: '+46' },
    { value: 'CH', label: 'Switzerland', phoneCode: '+41' },
    { value: 'SY', label: 'Syrian Arab Republic', phoneCode: '+963' },
    { value: 'TW', label: 'Taiwan, Province of China', phoneCode: '+886' },
    { value: 'TJ', label: 'Tajikistan', phoneCode: '+992' },
    { value: 'TZ', label: 'Tanzania, United Republic of', phoneCode: '+255' },
    { value: 'TH', label: 'Thailand', phoneCode: '+66' },
    { value: 'TL', label: 'Timor-Leste', phoneCode: '+670' },
    { value: 'TG', label: 'Togo', phoneCode: '+228' },
    { value: 'TK', label: 'Tokelau', phoneCode: '+690' },
    { value: 'TO', label: 'Tonga', phoneCode: '+676' },
    { value: 'TT', label: 'Trinidad and Tobago', phoneCode: '+1-868' },
    { value: 'TN', label: 'Tunisia', phoneCode: '+216' },
    { value: 'TR', label: 'Türkiye', phoneCode: '+90' },
    { value: 'TM', label: 'Turkmenistan', phoneCode: '+993' },
    { value: 'TC', label: 'Turks and Caicos Islands', phoneCode: '+1-649' },
    { value: 'TV', label: 'Tuvalu', phoneCode: '+688' },
    { value: 'UG', label: 'Uganda', phoneCode: '+256' },
    { value: 'UA', label: 'Ukraine', phoneCode: '+380' },
    { value: 'AE', label: 'United Arab Emirates', phoneCode: '+971' },
    { value: 'GB', label: 'United Kingdom', phoneCode: '+44' },
    { value: 'US', label: 'United States of America', phoneCode: '+1' },
    { value: 'UY', label: 'Uruguay', phoneCode: '+598' },
    { value: 'UZ', label: 'Uzbekistan', phoneCode: '+998' },
    { value: 'VU', label: 'Vanuatu', phoneCode: '+678' },
    {
      value: 'VE',
      label: 'Venezuela (Bolivarian Republic of)',
      phoneCode: '+58'
    },
    { value: 'VN', label: 'Viet Nam', phoneCode: '+84' },
    { value: 'WF', label: 'Wallis and Futuna', phoneCode: '+681' },
    { value: 'EH', label: 'Western Sahara', phoneCode: '+212' },
    { value: 'YE', label: 'Yemen', phoneCode: '+967' },
    { value: 'ZM', label: 'Zambia', phoneCode: '+260' },
    { value: 'ZW', label: 'Zimbabwe', phoneCode: '+263' }
  ],
  hn = [
    { value: 'AL', label: 'Alabama' },
    { value: 'AK', label: 'Alaska' },
    { value: 'AS', label: 'American Samoa' },
    { value: 'AZ', label: 'Arizona' },
    { value: 'AR', label: 'Arkansas' },
    { value: 'CA', label: 'California' },
    { value: 'CO', label: 'Colorado' },
    { value: 'CT', label: 'Connecticut' },
    { value: 'DE', label: 'Delaware' },
    { value: 'FM', label: 'Micronesia' },
    { value: 'FL', label: 'Florida' },
    { value: 'GA', label: 'Georgia' },
    { value: 'GU', label: 'Guam' },
    { value: 'HI', label: 'Hawaii' },
    { value: 'ID', label: 'Idaho' },
    { value: 'IL', label: 'Illinois' },
    { value: 'IN', label: 'Indiana' },
    { value: 'IA', label: 'Iowa' },
    { value: 'KS', label: 'Kansas' },
    { value: 'KY', label: 'Kentucky' },
    { value: 'LA', label: 'Louisiana' },
    { value: 'ME', label: 'Maine' },
    { value: 'MH', label: 'Marshall Islands' },
    { value: 'MD', label: 'Maryland' },
    { value: 'MA', label: 'Massachusetts' },
    { value: 'MI', label: 'Michigan' },
    { value: 'MN', label: 'Minnesota' },
    { value: 'MS', label: 'Mississippi' },
    { value: 'MO', label: 'Missouri' },
    { value: 'MT', label: 'Montana' },
    { value: 'NE', label: 'Nebraska' },
    { value: 'NV', label: 'Nevada' },
    { value: 'NH', label: 'New Hampshire' },
    { value: 'NJ', label: 'New Jersey' },
    { value: 'NM', label: 'New Mexico' },
    { value: 'NY', label: 'New York' },
    { value: 'NC', label: 'North Carolina' },
    { value: 'ND', label: 'North Dakota' },
    { value: 'MP', label: 'Northern Mariana Islands' },
    { value: 'OH', label: 'Ohio' },
    { value: 'OK', label: 'Oklahoma' },
    { value: 'OR', label: 'Oregon' },
    { value: 'PW', label: 'Palau' },
    { value: 'PA', label: 'Pennsylvania' },
    { value: 'PR', label: 'Puerto Rico' },
    { value: 'RI', label: 'Rhode Island' },
    { value: 'SC', label: 'South Carolina' },
    { value: 'SD', label: 'South Dakota' },
    { value: 'TN', label: 'Tennessee' },
    { value: 'TX', label: 'Texas' },
    { value: 'UT', label: 'Utah' },
    { value: 'VT', label: 'Vermont' },
    { value: 'VA', label: 'Virginia' },
    { value: 'WA', label: 'Washington' },
    { value: 'DC', label: 'Washington DC' },
    { value: 'WV', label: 'West Virginia' },
    { value: 'WI', label: 'Wisconsin' },
    { value: 'WY', label: 'Wyoming' },
    { value: 'VI', label: 'U.S. Virgin Islands' },
    { value: 'AA', label: 'Armed Forces Americas' },
    { value: 'AE', label: 'Armed Forces Europe' },
    { value: 'AP', label: 'Armed Forces Pacific' }
  ],
  lT = ({ handleCloseModal: e }) => {
    const [t, n] = j.useState(''),
      [r, i] = j.useState('+1'),
      o = (s) => {
        const l = s.target.value,
          u = Dt.find((c) => c.value === l)
        i((u == null ? void 0 : u.phoneCode) || '')
      },
      a = (s) => {
        n(s.target.value)
      }
    return h.jsxs('div', {
      className: P.singleModalContent,
      children: [
        h.jsxs('div', {
          className: P.modal_content_header,
          children: [
            h.jsx('p', {
              className: P.modal_content_title,
              children: 'Shipping Address'
            }),
            h.jsx('div', {
              className: P.modal_close_icon,
              onClick: e,
              children: h.jsx('svg', {
                width: '24px',
                height: '24px',
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                fill: '#5B21B6',
                children: h.jsx('path', {
                  d: 'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z'
                })
              })
            })
          ]
        }),
        h.jsx('div', {
          className: P.settingsContent,
          children: h.jsxs('form', {
            action: '',
            className: P.formContainer,
            children: [
              h.jsx('div', {
                className: `${P.form_item}`,
                children: h.jsxs('div', {
                  className: P.selectContainer,
                  children: [
                    h.jsx('label', {
                      className: P.input__label,
                      children: 'Country/Region'
                    }),
                    h.jsx('select', {
                      onChange: o,
                      children:
                        Dt == null
                          ? void 0
                          : Dt.map((s, l) =>
                              h.jsx(
                                'option',
                                {
                                  value: s.value,
                                  children: s == null ? void 0 : s.label
                                },
                                l
                              )
                            )
                    }),
                    h.jsx('svg', {
                      className: P.select_country_icon,
                      width: '16px',
                      height: '16px',
                      xmlns: 'http://www.w3.org/2000/svg',
                      viewBox: '0 0 24 24',
                      fill: 'currentColor',
                      children: h.jsx('path', {
                        d: 'M18.2072 9.0428 12.0001 2.83569 5.793 9.0428 7.20721 10.457 12.0001 5.66412 16.793 10.457 18.2072 9.0428ZM5.79285 14.9572 12 21.1643 18.2071 14.9572 16.7928 13.543 12 18.3359 7.20706 13.543 5.79285 14.9572Z'
                      })
                    })
                  ]
                })
              }),
              h.jsxs('div', {
                className: ` ${P.form_Item_double}`,
                children: [
                  h.jsxs('div', {
                    className: `${P.form_item}`,
                    children: [
                      h.jsx('label', {
                        className: P.input__label,
                        children: 'First Name'
                      }),
                      h.jsx('input', { type: 'text', placeholder: 'John' })
                    ]
                  }),
                  h.jsxs('div', {
                    className: `${P.form_item}`,
                    children: [
                      h.jsx('label', {
                        className: P.input__label,
                        children: 'Last name'
                      }),
                      h.jsx('input', { type: 'text', placeholder: 'Doe' })
                    ]
                  })
                ]
              }),
              h.jsxs('div', {
                className: `${P.form_item} ${P.phone_field}`,
                children: [
                  h.jsx('label', {
                    className: P.input__label,
                    children: 'Phone'
                  }),
                  h.jsx('span', { className: P.country_code, children: r }),
                  h.jsx('input', {
                    type: 'tel',
                    required: !0,
                    id: 'phoneNumber',
                    placeholder: 'Enter phone number',
                    className: P.phoneInputCustom,
                    value: t,
                    onChange: a,
                    style: { paddingLeft: `${r.length * 8 + 20}px` }
                  })
                ]
              }),
              h.jsxs('div', {
                className: `${P.form_item}`,
                children: [
                  h.jsx('label', {
                    className: P.input__label,
                    children: 'Address'
                  }),
                  h.jsx('input', {
                    type: 'text',
                    placeholder: 'Address',
                    required: !0,
                    id: 'address1'
                  })
                ]
              }),
              h.jsxs('div', {
                className: `${P.form_item}`,
                children: [
                  h.jsx('label', {
                    className: P.input__label,
                    children: 'Address (Optional)'
                  }),
                  h.jsx('input', {
                    type: 'text',
                    placeholder: 'Apartment, suit, etc (Optional)',
                    required: !0,
                    id: 'address2'
                  })
                ]
              }),
              h.jsx('div', {
                className: `${P.form_item}`,
                children: h.jsxs('div', {
                  className: P.selectContainer,
                  children: [
                    h.jsx('label', {
                      className: P.input__label,
                      children: 'Provience'
                    }),
                    h.jsx('select', {
                      children:
                        hn == null
                          ? void 0
                          : hn.map((s, l) =>
                              h.jsx(
                                'option',
                                { children: s == null ? void 0 : s.label },
                                l
                              )
                            )
                    }),
                    h.jsx('svg', {
                      className: P.select_proviences_icon,
                      width: '16px',
                      height: '16px',
                      xmlns: 'http://www.w3.org/2000/svg',
                      viewBox: '0 0 24 24',
                      fill: 'currentColor',
                      children: h.jsx('path', {
                        d: 'M18.2072 9.0428 12.0001 2.83569 5.793 9.0428 7.20721 10.457 12.0001 5.66412 16.793 10.457 18.2072 9.0428ZM5.79285 14.9572 12 21.1643 18.2071 14.9572 16.7928 13.543 12 18.3359 7.20706 13.543 5.79285 14.9572Z'
                      })
                    })
                  ]
                })
              }),
              h.jsxs('div', {
                className: ` ${P.form_Item_double}`,
                children: [
                  h.jsxs('div', {
                    className: `${P.form_item} ${P.upperLabel}`,
                    children: [
                      h.jsx('label', {
                        className: P.input__label,
                        children: 'City'
                      }),
                      h.jsx('input', { type: 'text', placeholder: 'New work' })
                    ]
                  }),
                  h.jsxs('div', {
                    className: `${P.form_item} ${P.upperLabel}`,
                    children: [
                      h.jsx('label', {
                        className: P.input__label,
                        children: 'Zip/Postal Code'
                      }),
                      h.jsx('input', { type: 'text', placeholder: '10001' })
                    ]
                  })
                ]
              }),
              h.jsx('button', { className: P.save_btn, children: 'Save' })
            ]
          })
        })
      ]
    })
  },
  uT = ({ handleCloseModal: e }) => {
    const [t, n] = j.useState('222658846989'),
      [r, i] = j.useState('+268'),
      o = (a) => {
        n(a.target.value)
      }
    return h.jsxs('div', {
      className: P.singleModalContent,
      children: [
        h.jsxs('div', {
          className: P.modal_content_header,
          children: [
            h.jsx('p', {
              className: P.modal_content_title,
              children: 'Contact Information'
            }),
            h.jsx('div', {
              className: P.modal_close_icon,
              onClick: e,
              children: h.jsx('svg', {
                width: '24px',
                height: '24px',
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                fill: '#5B21B6',
                children: h.jsx('path', {
                  d: 'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z'
                })
              })
            })
          ]
        }),
        h.jsx('div', {
          className: P.settingsContent,
          children: h.jsxs('form', {
            action: '',
            className: P.formContainer,
            children: [
              h.jsxs('div', {
                className: `${P.form_item}`,
                children: [
                  h.jsx('label', {
                    className: P.input__label,
                    children: 'Email'
                  }),
                  h.jsx('input', {
                    type: 'email',
                    placeholder: 'john.doe@example.com'
                  })
                ]
              }),
              h.jsxs('div', {
                className: `${P.form_item} ${P.phone_field}`,
                children: [
                  h.jsx('label', {
                    className: P.input__label,
                    children: 'Phone'
                  }),
                  h.jsx('div', {
                    className: P.phone_code_select_container,
                    children: h.jsx('select', {
                      className: P.country_code_select,
                      children: h.jsx('option', { children: r })
                    })
                  }),
                  h.jsx('input', {
                    type: 'tel',
                    required: !0,
                    id: 'phoneNumber',
                    placeholder: 'Enter phone number',
                    className: P.phoneInputCustom,
                    value: t,
                    onChange: o,
                    style: { paddingLeft: `${r.length * 8 + 20}px` }
                  })
                ]
              }),
              h.jsx('button', { className: P.save_btn, children: 'Save' })
            ]
          })
        })
      ]
    })
  },
  cT = ({ handleCloseModal: e }) => {
    const t = [
      {
        id: '001',
        image:
          'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
        title: 'The Collection Snowboard: Hydrogen',
        variant: { title: 'medium / black / large', price: '200' }
      },
      {
        id: '002',
        image:
          'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
        title: 'The Collection Snowboard: Hydrogen',
        variant: { title: 'medium / black / large', price: '200' }
      },
      {
        id: '003',
        image:
          'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
        title: 'The Collection Snowboard: Hydrogen',
        variant: { title: 'medium / black / large', price: '200' }
      },
      {
        id: '004',
        image:
          'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
        title: 'The Collection Snowboard: Hydrogen',
        variant: { title: 'medium / black / large', price: '200' }
      },
      {
        id: '005',
        image:
          'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
        title: 'The Collection Snowboard: Hydrogen',
        variant: { title: 'medium / black / large', price: '200' }
      },
      {
        id: '006',
        image:
          'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
        title: 'The Collection Snowboard: Hydrogen',
        variant: { title: 'medium / black / large', price: '200' }
      },
      {
        id: '007',
        image:
          'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
        title: 'The Collection Snowboard: Hydrogen',
        variant: { title: 'medium / black / large', price: '200' }
      }
    ]
    return h.jsxs('div', {
      className: P.singleModalContent,
      children: [
        h.jsxs('div', {
          className: P.modal_content_header,
          children: [
            h.jsx('p', {
              className: P.modal_content_title,
              children: 'Change Product Quantity'
            }),
            h.jsx('div', {
              className: P.modal_close_icon,
              onClick: e,
              children: h.jsx('svg', {
                width: '24px',
                height: '24px',
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                fill: '#5B21B6',
                children: h.jsx('path', {
                  d: 'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z'
                })
              })
            })
          ]
        }),
        h.jsxs('div', {
          className: P.settingsContent,
          children: [
            h.jsxs('div', {
              className: P.product_search_box,
              children: [
                h.jsx('input', {
                  type: 'search',
                  placeholder: 'Search here..'
                }),
                h.jsx('svg', {
                  className: P.search_icon,
                  width: '15px',
                  height: '15px',
                  xmlns: 'http://www.w3.org/2000/svg',
                  viewBox: '0 0 24 24',
                  fill: 'currentColor',
                  children: h.jsx('path', {
                    d: 'M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z'
                  })
                })
              ]
            }),
            h.jsx('div', {
              className: P.quantity_product_main_container,
              children:
                t == null
                  ? void 0
                  : t.map((n) =>
                      h.jsxs(h.Fragment, {
                        children: [
                          h.jsxs(
                            'div',
                            {
                              className: P.product_box,
                              children: [
                                h.jsxs('div', {
                                  className: P.product_box_content,
                                  children: [
                                    h.jsx('div', {
                                      children: h.jsx('svg', {
                                        width: '18px',
                                        height: '18px',
                                        xmlns: 'http://www.w3.org/2000/svg',
                                        viewBox: '0 0 24 24',
                                        fill: 'currentColor',
                                        children: h.jsx('path', {
                                          d: 'M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z'
                                        })
                                      })
                                    }),
                                    h.jsx('div', {
                                      className: P.product_image_box,
                                      children: h.jsx('img', {
                                        src: 'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
                                        alt: ''
                                      })
                                    }),
                                    h.jsxs('div', {
                                      className: P.product_content,
                                      children: [
                                        h.jsx('h5', {
                                          className: P.product_title,
                                          children:
                                            'The Collection Snowboard: Hydrogen'
                                        }),
                                        h.jsx('p', {
                                          className: P.product_variant,
                                          children: 'medium / black / large'
                                        })
                                      ]
                                    })
                                  ]
                                }),
                                h.jsx('div', {
                                  className: P.product_action_box,
                                  children: h.jsxs('div', {
                                    className: P.action_btn_box,
                                    children: [
                                      h.jsx('button', {
                                        className: P.action_btn,
                                        children: h.jsx('svg', {
                                          width: '14px',
                                          height: '14px',
                                          xmlns: 'http://www.w3.org/2000/svg',
                                          viewBox: '0 0 24 24',
                                          fill: 'currentColor',
                                          children: h.jsx('path', {
                                            d: 'M5 11V13H19V11H5Z'
                                          })
                                        })
                                      }),
                                      h.jsx('p', {
                                        className: P.product_quantity,
                                        children: '1'
                                      }),
                                      h.jsx('button', {
                                        className: P.action_btn,
                                        children: h.jsx('svg', {
                                          width: '14px',
                                          height: '14px',
                                          xmlns: 'http://www.w3.org/2000/svg',
                                          viewBox: '0 0 24 24',
                                          fill: 'currentColor',
                                          children: h.jsx('path', {
                                            d: 'M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z'
                                          })
                                        })
                                      })
                                    ]
                                  })
                                }),
                                h.jsx('p', {
                                  className: P.product_price,
                                  children: '$200'
                                })
                              ]
                            },
                            n.id
                          ),
                          h.jsx('div', { className: 'opt_order_edit_divider' })
                        ]
                      })
                    )
            }),
            h.jsx('button', { className: P.save_btn, children: 'Save' })
          ]
        })
      ]
    })
  },
  dT = ({ handleCloseModal: e }) => {
    const [t, n] = j.useState(''),
      [r, i] = j.useState('+1'),
      o = (l) => {
        const u = l.target.value,
          c = Dt.find((f) => f.value === u)
        i((c == null ? void 0 : c.phoneCode) || '')
      },
      a = (l) => {
        n(l.target.value)
      },
      s = [
        'I have a question about the product',
        'I want to change something about my order',
        'I want to cancel my order',
        "I have'nt received my order",
        "There's a problem with my order",
        'Other'
      ]
    return h.jsxs('div', {
      className: P.singleModalContent,
      children: [
        h.jsxs('div', {
          className: P.modal_content_header,
          children: [
            h.jsx('p', {
              className: P.modal_content_title,
              children: 'Customer Support'
            }),
            h.jsx('div', {
              className: P.modal_close_icon,
              onClick: e,
              children: h.jsx('svg', {
                width: '24px',
                height: '24px',
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                fill: '#5B21B6',
                children: h.jsx('path', {
                  d: 'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z'
                })
              })
            })
          ]
        }),
        h.jsx('div', {
          className: P.settingsContent,
          children: h.jsxs('form', {
            action: '',
            className: P.customer_support_form_container,
            children: [
              h.jsx('div', {
                className: `${P.form_item}`,
                children: h.jsxs('div', {
                  className: P.selectContainer,
                  children: [
                    h.jsx('label', {
                      className: P.input__label,
                      children: 'Support Reason'
                    }),
                    h.jsx('select', {
                      onChange: o,
                      children:
                        s == null
                          ? void 0
                          : s.map((l, u) =>
                              h.jsx('option', { value: l, children: l }, u)
                            )
                    }),
                    h.jsx('svg', {
                      className: P.select_country_icon,
                      width: '16px',
                      height: '16px',
                      xmlns: 'http://www.w3.org/2000/svg',
                      viewBox: '0 0 24 24',
                      fill: 'currentColor',
                      children: h.jsx('path', {
                        d: 'M18.2072 9.0428 12.0001 2.83569 5.793 9.0428 7.20721 10.457 12.0001 5.66412 16.793 10.457 18.2072 9.0428ZM5.79285 14.9572 12 21.1643 18.2071 14.9572 16.7928 13.543 12 18.3359 7.20706 13.543 5.79285 14.9572Z'
                      })
                    })
                  ]
                })
              }),
              h.jsxs('div', {
                className: `${P.form_item}`,
                children: [
                  h.jsx('label', {
                    className: P.input__label,
                    children: 'Email'
                  }),
                  h.jsx('input', {
                    type: 'text',
                    placeholder: 'john.doe@example.com'
                  })
                ]
              }),
              h.jsxs('div', {
                className: `${P.form_item} ${P.phone_field}`,
                children: [
                  h.jsx('label', {
                    className: P.input__label,
                    children: 'Phone'
                  }),
                  h.jsx('span', { className: P.country_code, children: r }),
                  h.jsx('input', {
                    type: 'tel',
                    required: !0,
                    id: 'phoneNumber',
                    placeholder: 'Enter phone number',
                    className: P.phoneInputCustom,
                    value: t,
                    onChange: a,
                    style: { paddingLeft: `${r.length * 8 + 20}px` }
                  })
                ]
              }),
              h.jsxs('div', {
                className: `${P.form_item}`,
                children: [
                  h.jsx('label', {
                    className: P.input__label,
                    children: 'Address'
                  }),
                  h.jsx('textarea', {
                    rows: 5,
                    type: 'text',
                    placeholder: 'Address',
                    required: !0,
                    id: 'address1'
                  })
                ]
              }),
              h.jsx('button', { className: P.save_btn, children: 'Save' })
            ]
          })
        })
      ]
    })
  },
  fT = ({ handleCloseModal: e }) => {
    const t = [
      {
        id: '001',
        image:
          'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
        title: 'The Collection Snowboard: Hydrogen',
        variant: { title: 'medium / black / large', price: '200' }
      },
      {
        id: '002',
        image:
          'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
        title: 'The Collection Snowboard: Hydrogen',
        variant: { title: 'medium / black / large', price: '200' }
      },
      {
        id: '003',
        image:
          'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
        title: 'The Collection Snowboard: Hydrogen',
        variant: { title: 'medium / black / large', price: '200' }
      },
      {
        id: '004',
        image:
          'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
        title: 'The Collection Snowboard: Hydrogen',
        variant: { title: 'medium / black / large', price: '200' }
      },
      {
        id: '005',
        image:
          'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
        title: 'The Collection Snowboard: Hydrogen',
        variant: { title: 'medium / black / large', price: '200' }
      },
      {
        id: '006',
        image:
          'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
        title: 'The Collection Snowboard: Hydrogen',
        variant: { title: 'medium / black / large', price: '200' }
      },
      {
        id: '007',
        image:
          'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
        title: 'The Collection Snowboard: Hydrogen',
        variant: { title: 'medium / black / large', price: '200' }
      }
    ]
    return h.jsxs('div', {
      className: P.singleModalContent,
      children: [
        h.jsxs('div', {
          className: P.modal_content_header,
          children: [
            h.jsx('p', {
              className: P.modal_content_title,
              children: 'Change Product Variant'
            }),
            h.jsx('div', {
              className: P.modal_close_icon,
              onClick: e,
              children: h.jsx('svg', {
                width: '24px',
                height: '24px',
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                fill: '#5B21B6',
                children: h.jsx('path', {
                  d: 'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z'
                })
              })
            })
          ]
        }),
        h.jsxs('div', {
          className: P.settingsContent,
          children: [
            h.jsxs('div', {
              className: P.product_search_box,
              children: [
                h.jsx('input', {
                  type: 'search',
                  placeholder: 'Search here..'
                }),
                h.jsx('svg', {
                  className: P.search_icon,
                  width: '15px',
                  height: '15px',
                  xmlns: 'http://www.w3.org/2000/svg',
                  viewBox: '0 0 24 24',
                  fill: 'currentColor',
                  children: h.jsx('path', {
                    d: 'M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z'
                  })
                })
              ]
            }),
            h.jsx('div', {
              className: P.vatriant_product_main_container,
              children:
                t == null
                  ? void 0
                  : t.map((n) =>
                      h.jsxs(h.Fragment, {
                        children: [
                          h.jsxs(
                            'div',
                            {
                              className: P.variant_product_box,
                              children: [
                                h.jsxs('div', {
                                  className: P.variant_product_box_content,
                                  children: [
                                    h.jsx('div', {
                                      className: P.product_image_box,
                                      children: h.jsx('img', {
                                        src: 'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
                                        alt: ''
                                      })
                                    }),
                                    h.jsxs('div', {
                                      className: P.product_content,
                                      children: [
                                        h.jsx('h5', {
                                          className: P.product_title,
                                          children:
                                            'The Collection Snowboard: Hydrogen'
                                        }),
                                        h.jsx('p', {
                                          className: P.product_variant,
                                          children: 'medium / black / large'
                                        }),
                                        h.jsx('p', {
                                          className: P.product_price,
                                          children: 'Price: $200'
                                        })
                                      ]
                                    })
                                  ]
                                }),
                                h.jsx('div', {
                                  className: P.variant_select_box,
                                  children: h.jsx('select', {
                                    children: h.jsx('option', {
                                      children: 'medium / black / large'
                                    })
                                  })
                                })
                              ]
                            },
                            n.id
                          ),
                          h.jsx('div', { className: 'opt_order_edit_divider' })
                        ]
                      })
                    )
            }),
            h.jsx('button', { className: P.save_btn, children: 'Save' })
          ]
        })
      ]
    })
  },
  pT = ({ handleCloseModal: e }) => {
    const t = [
      { id: '01', name: 'Standard', price: '00' },
      { id: '02', name: 'Economy', price: '30' },
      { id: '03', name: 'Business', price: '60' }
    ]
    return h.jsxs('div', {
      className: `${P.singleModalContent} ${P.product_variant_container}`,
      children: [
        h.jsxs('div', {
          className: P.modal_content_header,
          children: [
            h.jsx('p', {
              className: P.modal_content_title,
              children: 'Change Product Variant'
            }),
            h.jsx('div', {
              className: P.modal_close_icon,
              onClick: e,
              children: h.jsx('svg', {
                width: '24px',
                height: '24px',
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                fill: '#5B21B6',
                children: h.jsx('path', {
                  d: 'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z'
                })
              })
            })
          ]
        }),
        h.jsxs('div', {
          className: P.settingsContent,
          children: [
            h.jsx('div', {
              className: P.shipping_method_content_box,
              children:
                t == null
                  ? void 0
                  : t.map((n) =>
                      h.jsxs(
                        'div',
                        {
                          className: P.shipping_method_content,
                          children: [
                            h.jsxs('div', {
                              className: P.method_radio,
                              children: [
                                h.jsx('input', {
                                  id: n.name.toLowerCase(),
                                  name: n.name.toLowerCase(),
                                  type: 'radio'
                                }),
                                h.jsx('label', {
                                  htmlFor: n.name.toLowerCase(),
                                  className: P.shipping_method_name,
                                  children: n.name
                                })
                              ]
                            }),
                            h.jsxs('p', {
                              className: P.method_price,
                              children: [n.price, ' USD']
                            })
                          ]
                        },
                        n.id
                      )
                    )
            }),
            h.jsx('button', { className: P.save_btn, children: 'Save' })
          ]
        })
      ]
    })
  },
  hT = ({ handleCloseModal: e }) =>
    h.jsxs('div', {
      className: `${P.singleModalContent}`,
      children: [
        h.jsxs('div', {
          className: P.modal_content_header,
          children: [
            h.jsx('p', {
              className: P.modal_content_title,
              children: 'Gift Message'
            }),
            h.jsx('div', {
              className: P.modal_close_icon,
              onClick: e,
              children: h.jsx('svg', {
                width: '24px',
                height: '24px',
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                fill: '#5B21B6',
                children: h.jsx('path', {
                  d: 'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z'
                })
              })
            })
          ]
        }),
        h.jsxs('div', {
          className: P.settingsContent,
          children: [
            h.jsx('div', {
              className: P.gift_message_box,
              children: h.jsx('div', {
                className: P.gift_message_text_area,
                children: h.jsx('textarea', { rows: '5' })
              })
            }),
            h.jsx('button', { className: P.save_btn, children: 'Save' })
          ]
        })
      ]
    })
var G1 = { exports: {} }
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ ;(function (e) {
  ;(function () {
    var t = {}.hasOwnProperty
    function n() {
      for (var o = '', a = 0; a < arguments.length; a++) {
        var s = arguments[a]
        s && (o = i(o, r(s)))
      }
      return o
    }
    function r(o) {
      if (typeof o == 'string' || typeof o == 'number') return o
      if (typeof o != 'object') return ''
      if (Array.isArray(o)) return n.apply(null, o)
      if (
        o.toString !== Object.prototype.toString &&
        !o.toString.toString().includes('[native code]')
      )
        return o.toString()
      var a = ''
      for (var s in o) t.call(o, s) && o[s] && (a = i(a, s))
      return a
    }
    function i(o, a) {
      return a ? (o ? o + ' ' + a : o + a) : o
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n)
  })()
})(G1)
var mT = G1.exports
const Mr = hf(mT)
function Nr() {
  return (
    (Nr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    Nr.apply(null, arguments)
  )
}
function X(e) {
  '@babel/helpers - typeof'
  return (
    (X =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    X(e)
  )
}
var vT = Symbol.for('react.element'),
  gT = Symbol.for('react.transitional.element'),
  yT = Symbol.for('react.fragment')
function Q1(e) {
  return (
    e &&
    X(e) === 'object' &&
    (e.$$typeof === vT || e.$$typeof === gT) &&
    e.type === yT
  )
}
function bd(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = []
  return (
    te.Children.forEach(e, function (r) {
      ;(r == null && !t.keepEmpty) ||
        (Array.isArray(r)
          ? (n = n.concat(bd(r)))
          : Q1(r) && r.props
          ? (n = n.concat(bd(r.props.children, t)))
          : n.push(r))
    }),
    n
  )
}
var Sd = {},
  _T = function (t) {}
function wT(e, t) {}
function xT(e, t) {}
function bT() {
  Sd = {}
}
function K1(e, t, n) {
  !t && !Sd[n] && (e(!1, n), (Sd[n] = !0))
}
function kt(e, t) {
  K1(wT, e, t)
}
function ST(e, t) {
  K1(xT, e, t)
}
kt.preMessage = _T
kt.resetWarned = bT
kt.noteOnce = ST
function CT(e, t) {
  if (X(e) != 'object' || !e) return e
  var n = e[Symbol.toPrimitive]
  if (n !== void 0) {
    var r = n.call(e, t || 'default')
    if (X(r) != 'object') return r
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
function X1(e) {
  var t = CT(e, 'string')
  return X(t) == 'symbol' ? t : t + ''
}
function D(e, t, n) {
  return (
    (t = X1(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  )
}
function $m(e, t) {
  var n = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e)
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? $m(Object(n), !0).forEach(function (r) {
          D(e, r, n[r])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : $m(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
  }
  return e
}
function Dm(e) {
  return e instanceof HTMLElement || e instanceof SVGElement
}
function ET(e) {
  return e && X(e) === 'object' && Dm(e.nativeElement)
    ? e.nativeElement
    : Dm(e)
    ? e
    : null
}
function TT(e) {
  var t = ET(e)
  if (t) return t
  if (e instanceof te.Component) {
    var n
    return (n = od.findDOMNode) === null || n === void 0
      ? void 0
      : n.call(od, e)
  }
  return null
}
var Y1 = { exports: {} },
  oe = {}
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bp = Symbol.for('react.element'),
  Sp = Symbol.for('react.portal'),
  Fl = Symbol.for('react.fragment'),
  $l = Symbol.for('react.strict_mode'),
  Dl = Symbol.for('react.profiler'),
  zl = Symbol.for('react.provider'),
  Vl = Symbol.for('react.context'),
  kT = Symbol.for('react.server_context'),
  Bl = Symbol.for('react.forward_ref'),
  Hl = Symbol.for('react.suspense'),
  ql = Symbol.for('react.suspense_list'),
  Wl = Symbol.for('react.memo'),
  Ul = Symbol.for('react.lazy'),
  jT = Symbol.for('react.offscreen'),
  Z1
Z1 = Symbol.for('react.module.reference')
function Nt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case bp:
        switch (((e = e.type), e)) {
          case Fl:
          case Dl:
          case $l:
          case Hl:
          case ql:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case kT:
              case Vl:
              case Bl:
              case Ul:
              case Wl:
              case zl:
                return e
              default:
                return t
            }
        }
      case Sp:
        return t
    }
  }
}
oe.ContextConsumer = Vl
oe.ContextProvider = zl
oe.Element = bp
oe.ForwardRef = Bl
oe.Fragment = Fl
oe.Lazy = Ul
oe.Memo = Wl
oe.Portal = Sp
oe.Profiler = Dl
oe.StrictMode = $l
oe.Suspense = Hl
oe.SuspenseList = ql
oe.isAsyncMode = function () {
  return !1
}
oe.isConcurrentMode = function () {
  return !1
}
oe.isContextConsumer = function (e) {
  return Nt(e) === Vl
}
oe.isContextProvider = function (e) {
  return Nt(e) === zl
}
oe.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === bp
}
oe.isForwardRef = function (e) {
  return Nt(e) === Bl
}
oe.isFragment = function (e) {
  return Nt(e) === Fl
}
oe.isLazy = function (e) {
  return Nt(e) === Ul
}
oe.isMemo = function (e) {
  return Nt(e) === Wl
}
oe.isPortal = function (e) {
  return Nt(e) === Sp
}
oe.isProfiler = function (e) {
  return Nt(e) === Dl
}
oe.isStrictMode = function (e) {
  return Nt(e) === $l
}
oe.isSuspense = function (e) {
  return Nt(e) === Hl
}
oe.isSuspenseList = function (e) {
  return Nt(e) === ql
}
oe.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Fl ||
    e === Dl ||
    e === $l ||
    e === Hl ||
    e === ql ||
    e === jT ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Ul ||
        e.$$typeof === Wl ||
        e.$$typeof === zl ||
        e.$$typeof === Vl ||
        e.$$typeof === Bl ||
        e.$$typeof === Z1 ||
        e.getModuleId !== void 0))
  )
}
oe.typeOf = Nt
Y1.exports = oe
var Gu = Y1.exports
function J1(e, t, n) {
  var r = j.useRef({})
  return (
    (!('value' in r.current) || n(r.current.condition, t)) &&
      ((r.current.value = e()), (r.current.condition = t)),
    r.current.value
  )
}
var ey = function (t, n) {
    typeof t == 'function'
      ? t(n)
      : X(t) === 'object' && t && 'current' in t && (t.current = n)
  },
  Cp = function () {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r]
    var i = n.filter(Boolean)
    return i.length <= 1
      ? i[0]
      : function (o) {
          n.forEach(function (a) {
            ey(a, o)
          })
        }
  },
  ty = function (t) {
    var n, r
    if (!t) return !1
    if (ny(t) && t.props.propertyIsEnumerable('ref')) return !0
    var i = Gu.isMemo(t) ? t.type.type : t.type
    return !(
      (typeof i == 'function' &&
        !((n = i.prototype) !== null && n !== void 0 && n.render) &&
        i.$$typeof !== Gu.ForwardRef) ||
      (typeof t == 'function' &&
        !((r = t.prototype) !== null && r !== void 0 && r.render) &&
        t.$$typeof !== Gu.ForwardRef)
    )
  }
function ny(e) {
  return j.isValidElement(e) && !Q1(e)
}
var ry = function (t) {
  if (t && ny(t)) {
    var n = t
    return n.props.propertyIsEnumerable('ref') ? n.props.ref : n.ref
  }
  return null
}
function tt(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function')
}
function zm(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n]
    ;(r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, X1(r.key), r)
  }
}
function nt(e, t, n) {
  return (
    t && zm(e.prototype, t),
    n && zm(e, n),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  )
}
function ea(e, t) {
  return (
    (ea = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n
        }),
    ea(e, t)
  )
}
function zi(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function')
  ;(e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 }
  })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && ea(e, t)
}
function ta(e) {
  return (
    (ta = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }),
    ta(e)
  )
}
function Ep() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    )
  } catch {}
  return (Ep = function () {
    return !!e
  })()
}
function Y(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  return e
}
function PT(e, t) {
  if (t && (X(t) == 'object' || typeof t == 'function')) return t
  if (t !== void 0)
    throw new TypeError(
      'Derived constructors may only return object or undefined'
    )
  return Y(e)
}
function Vi(e) {
  var t = Ep()
  return function () {
    var n,
      r = ta(e)
    if (t) {
      var i = ta(this).constructor
      n = Reflect.construct(r, arguments, i)
    } else n = r.apply(this, arguments)
    return PT(this, n)
  }
}
function MT(e, t) {
  var n = Object.assign({}, e)
  return (
    Array.isArray(t) &&
      t.forEach(function (r) {
        delete n[r]
      }),
    n
  )
}
function Cd(e, t) {
  ;(t == null || t > e.length) && (t = e.length)
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n]
  return r
}
function NT(e) {
  if (Array.isArray(e)) return Cd(e)
}
function iy(e) {
  if (
    (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e)
}
function Tp(e, t) {
  if (e) {
    if (typeof e == 'string') return Cd(e, t)
    var n = {}.toString.call(e).slice(8, -1)
    return (
      n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set'
        ? Array.from(e)
        : n === 'Arguments' ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? Cd(e, t)
        : void 0
    )
  }
}
function OT() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function Q(e) {
  return NT(e) || iy(e) || Tp(e) || OT()
}
var oy = function (t) {
    return +setTimeout(t, 16)
  },
  ay = function (t) {
    return clearTimeout(t)
  }
typeof window < 'u' &&
  'requestAnimationFrame' in window &&
  ((oy = function (t) {
    return window.requestAnimationFrame(t)
  }),
  (ay = function (t) {
    return window.cancelAnimationFrame(t)
  }))
var Vm = 0,
  kp = new Map()
function sy(e) {
  kp.delete(e)
}
var Tn = function (t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1
  Vm += 1
  var r = Vm
  function i(o) {
    if (o === 0) sy(r), t()
    else {
      var a = oy(function () {
        i(o - 1)
      })
      kp.set(r, a)
    }
  }
  return i(n), r
}
Tn.cancel = function (e) {
  var t = kp.get(e)
  return sy(e), ay(t)
}
function ly(e) {
  if (Array.isArray(e)) return e
}
function LT(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator']
  if (n != null) {
    var r,
      i,
      o,
      a,
      s = [],
      l = !0,
      u = !1
    try {
      if (((o = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return
        l = !1
      } else
        for (
          ;
          !(l = (r = o.call(n)).done) && (s.push(r.value), s.length !== t);
          l = !0
        );
    } catch (c) {
      ;(u = !0), (i = c)
    } finally {
      try {
        if (!l && n.return != null && ((a = n.return()), Object(a) !== a))
          return
      } finally {
        if (u) throw i
      }
    }
    return s
  }
}
function uy() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function K(e, t) {
  return ly(e) || LT(e, t) || Tp(e, t) || uy()
}
function na(e) {
  for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)))
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8
    case 1:
      ;(t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16))
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  )
}
function Pn() {
  return !!(
    typeof window < 'u' &&
    window.document &&
    window.document.createElement
  )
}
function AT(e, t) {
  if (!e) return !1
  if (e.contains) return e.contains(t)
  for (var n = t; n; ) {
    if (n === e) return !0
    n = n.parentNode
  }
  return !1
}
var Bm = 'data-rc-order',
  Hm = 'data-rc-priority',
  RT = 'rc-util-key',
  Ed = new Map()
function cy() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = e.mark
  return t ? (t.startsWith('data-') ? t : 'data-'.concat(t)) : RT
}
function Gl(e) {
  if (e.attachTo) return e.attachTo
  var t = document.querySelector('head')
  return t || document.body
}
function IT(e) {
  return e === 'queue' ? 'prependQueue' : e ? 'prepend' : 'append'
}
function jp(e) {
  return Array.from((Ed.get(e) || e).children).filter(function (t) {
    return t.tagName === 'STYLE'
  })
}
function dy(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
  if (!Pn()) return null
  var n = t.csp,
    r = t.prepend,
    i = t.priority,
    o = i === void 0 ? 0 : i,
    a = IT(r),
    s = a === 'prependQueue',
    l = document.createElement('style')
  l.setAttribute(Bm, a),
    s && o && l.setAttribute(Hm, ''.concat(o)),
    n != null && n.nonce && (l.nonce = n == null ? void 0 : n.nonce),
    (l.innerHTML = e)
  var u = Gl(t),
    c = u.firstChild
  if (r) {
    if (s) {
      var f = (t.styles || jp(u)).filter(function (d) {
        if (!['prepend', 'prependQueue'].includes(d.getAttribute(Bm))) return !1
        var g = Number(d.getAttribute(Hm) || 0)
        return o >= g
      })
      if (f.length) return u.insertBefore(l, f[f.length - 1].nextSibling), l
    }
    u.insertBefore(l, c)
  } else u.appendChild(l)
  return l
}
function fy(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = Gl(t)
  return (t.styles || jp(n)).find(function (r) {
    return r.getAttribute(cy(t)) === e
  })
}
function py(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = fy(e, t)
  if (n) {
    var r = Gl(t)
    r.removeChild(n)
  }
}
function FT(e, t) {
  var n = Ed.get(e)
  if (!n || !AT(document, n)) {
    var r = dy('', t),
      i = r.parentNode
    Ed.set(e, i), e.removeChild(r)
  }
}
function bi(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = Gl(n),
    i = jp(r),
    o = B(B({}, n), {}, { styles: i })
  FT(r, o)
  var a = fy(t, o)
  if (a) {
    var s, l
    if (
      (s = o.csp) !== null &&
      s !== void 0 &&
      s.nonce &&
      a.nonce !== ((l = o.csp) === null || l === void 0 ? void 0 : l.nonce)
    ) {
      var u
      a.nonce = (u = o.csp) === null || u === void 0 ? void 0 : u.nonce
    }
    return a.innerHTML !== e && (a.innerHTML = e), a
  }
  var c = dy(e, o)
  return c.setAttribute(cy(o), t), c
}
function $T(e, t) {
  if (e == null) return {}
  var n = {}
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.includes(r)) continue
      n[r] = e[r]
    }
  return n
}
function Or(e, t) {
  if (e == null) return {}
  var n,
    r,
    i = $T(e, t)
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e)
    for (r = 0; r < o.length; r++)
      (n = o[r]),
        t.includes(n) || ({}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]))
  }
  return i
}
function Td(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
    r = new Set()
  function i(o, a) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      l = r.has(o)
    if ((kt(!l, 'Warning: There may be circular references'), l)) return !1
    if (o === a) return !0
    if (n && s > 1) return !1
    r.add(o)
    var u = s + 1
    if (Array.isArray(o)) {
      if (!Array.isArray(a) || o.length !== a.length) return !1
      for (var c = 0; c < o.length; c++) if (!i(o[c], a[c], u)) return !1
      return !0
    }
    if (o && a && X(o) === 'object' && X(a) === 'object') {
      var f = Object.keys(o)
      return f.length !== Object.keys(a).length
        ? !1
        : f.every(function (d) {
            return i(o[d], a[d], u)
          })
    }
    return !1
  }
  return i(e, t)
}
var DT = '%'
function kd(e) {
  return e.join(DT)
}
var zT = (function () {
    function e(t) {
      tt(this, e),
        D(this, 'instanceId', void 0),
        D(this, 'cache', new Map()),
        (this.instanceId = t)
    }
    return (
      nt(e, [
        {
          key: 'get',
          value: function (n) {
            return this.opGet(kd(n))
          }
        },
        {
          key: 'opGet',
          value: function (n) {
            return this.cache.get(n) || null
          }
        },
        {
          key: 'update',
          value: function (n, r) {
            return this.opUpdate(kd(n), r)
          }
        },
        {
          key: 'opUpdate',
          value: function (n, r) {
            var i = this.cache.get(n),
              o = r(i)
            o === null ? this.cache.delete(n) : this.cache.set(n, o)
          }
        }
      ]),
      e
    )
  })(),
  Oi = 'data-token-hash',
  Ht = 'data-css-hash',
  Bn = '__cssinjs_instance__'
function VT() {
  var e = Math.random().toString(12).slice(2)
  if (typeof document < 'u' && document.head && document.body) {
    var t = document.body.querySelectorAll('style['.concat(Ht, ']')) || [],
      n = document.head.firstChild
    Array.from(t).forEach(function (i) {
      ;(i[Bn] = i[Bn] || e), i[Bn] === e && document.head.insertBefore(i, n)
    })
    var r = {}
    Array.from(document.querySelectorAll('style['.concat(Ht, ']'))).forEach(
      function (i) {
        var o = i.getAttribute(Ht)
        if (r[o]) {
          if (i[Bn] === e) {
            var a
            ;(a = i.parentNode) === null || a === void 0 || a.removeChild(i)
          }
        } else r[o] = !0
      }
    )
  }
  return new zT(e)
}
var Ql = j.createContext({ hashPriority: 'low', cache: VT(), defaultCache: !0 })
function BT(e, t) {
  if (e.length !== t.length) return !1
  for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1
  return !0
}
var Pp = (function () {
  function e() {
    tt(this, e),
      D(this, 'cache', void 0),
      D(this, 'keys', void 0),
      D(this, 'cacheCallTimes', void 0),
      (this.cache = new Map()),
      (this.keys = []),
      (this.cacheCallTimes = 0)
  }
  return (
    nt(e, [
      {
        key: 'size',
        value: function () {
          return this.keys.length
        }
      },
      {
        key: 'internalGet',
        value: function (n) {
          var r,
            i,
            o =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : !1,
            a = { map: this.cache }
          return (
            n.forEach(function (s) {
              if (!a) a = void 0
              else {
                var l
                a =
                  (l = a) === null ||
                  l === void 0 ||
                  (l = l.map) === null ||
                  l === void 0
                    ? void 0
                    : l.get(s)
              }
            }),
            (r = a) !== null &&
              r !== void 0 &&
              r.value &&
              o &&
              (a.value[1] = this.cacheCallTimes++),
            (i = a) === null || i === void 0 ? void 0 : i.value
          )
        }
      },
      {
        key: 'get',
        value: function (n) {
          var r
          return (r = this.internalGet(n, !0)) === null || r === void 0
            ? void 0
            : r[0]
        }
      },
      {
        key: 'has',
        value: function (n) {
          return !!this.internalGet(n)
        }
      },
      {
        key: 'set',
        value: function (n, r) {
          var i = this
          if (!this.has(n)) {
            if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
              var o = this.keys.reduce(
                  function (u, c) {
                    var f = K(u, 2),
                      d = f[1]
                    return i.internalGet(c)[1] < d
                      ? [c, i.internalGet(c)[1]]
                      : u
                  },
                  [this.keys[0], this.cacheCallTimes]
                ),
                a = K(o, 1),
                s = a[0]
              this.delete(s)
            }
            this.keys.push(n)
          }
          var l = this.cache
          n.forEach(function (u, c) {
            if (c === n.length - 1) l.set(u, { value: [r, i.cacheCallTimes++] })
            else {
              var f = l.get(u)
              f ? f.map || (f.map = new Map()) : l.set(u, { map: new Map() }),
                (l = l.get(u).map)
            }
          })
        }
      },
      {
        key: 'deleteByPath',
        value: function (n, r) {
          var i = n.get(r[0])
          if (r.length === 1) {
            var o
            return (
              i.map ? n.set(r[0], { map: i.map }) : n.delete(r[0]),
              (o = i.value) === null || o === void 0 ? void 0 : o[0]
            )
          }
          var a = this.deleteByPath(i.map, r.slice(1))
          return (!i.map || i.map.size === 0) && !i.value && n.delete(r[0]), a
        }
      },
      {
        key: 'delete',
        value: function (n) {
          if (this.has(n))
            return (
              (this.keys = this.keys.filter(function (r) {
                return !BT(r, n)
              })),
              this.deleteByPath(this.cache, n)
            )
        }
      }
    ]),
    e
  )
})()
D(Pp, 'MAX_CACHE_SIZE', 20)
D(Pp, 'MAX_CACHE_OFFSET', 5)
var qm = 0,
  hy = (function () {
    function e(t) {
      tt(this, e),
        D(this, 'derivatives', void 0),
        D(this, 'id', void 0),
        (this.derivatives = Array.isArray(t) ? t : [t]),
        (this.id = qm),
        t.length === 0 && (t.length > 0, void 0),
        (qm += 1)
    }
    return (
      nt(e, [
        {
          key: 'getDerivativeToken',
          value: function (n) {
            return this.derivatives.reduce(function (r, i) {
              return i(n, r)
            }, void 0)
          }
        }
      ]),
      e
    )
  })(),
  Qu = new Pp()
function jd(e) {
  var t = Array.isArray(e) ? e : [e]
  return Qu.has(t) || Qu.set(t, new hy(t)), Qu.get(t)
}
var HT = new WeakMap(),
  Ku = {}
function qT(e, t) {
  for (var n = HT, r = 0; r < t.length; r += 1) {
    var i = t[r]
    n.has(i) || n.set(i, new WeakMap()), (n = n.get(i))
  }
  return n.has(Ku) || n.set(Ku, e()), n.get(Ku)
}
var Wm = new WeakMap()
function ko(e) {
  var t = Wm.get(e) || ''
  return (
    t ||
      (Object.keys(e).forEach(function (n) {
        var r = e[n]
        ;(t += n),
          r instanceof hy
            ? (t += r.id)
            : r && X(r) === 'object'
            ? (t += ko(r))
            : (t += r)
      }),
      (t = na(t)),
      Wm.set(e, t)),
    t
  )
}
function Um(e, t) {
  return na(''.concat(t, '_').concat(ko(e)))
}
var Pd = Pn()
function ra(e) {
  return typeof e == 'number' ? ''.concat(e, 'px') : e
}
function cl(e, t, n) {
  var r,
    i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
    o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1
  if (o) return e
  var a = B(B({}, i), {}, ((r = {}), D(r, Oi, t), D(r, Ht, n), r)),
    s = Object.keys(a)
      .map(function (l) {
        var u = a[l]
        return u ? ''.concat(l, '="').concat(u, '"') : null
      })
      .filter(function (l) {
        return l
      })
      .join(' ')
  return '<style '.concat(s, '>').concat(e, '</style>')
}
var Es = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ''
    return '--'
      .concat(n ? ''.concat(n, '-') : '')
      .concat(t)
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, '$1-$2')
      .replace(/([a-z])([A-Z0-9])/g, '$1-$2')
      .toLowerCase()
  },
  WT = function (t, n, r) {
    return Object.keys(t).length
      ? '.'
          .concat(n)
          .concat(r != null && r.scope ? '.'.concat(r.scope) : '', '{')
          .concat(
            Object.entries(t)
              .map(function (i) {
                var o = K(i, 2),
                  a = o[0],
                  s = o[1]
                return ''.concat(a, ':').concat(s, ';')
              })
              .join(''),
            '}'
          )
      : ''
  },
  my = function (t, n, r) {
    var i = {},
      o = {}
    return (
      Object.entries(t).forEach(function (a) {
        var s,
          l,
          u = K(a, 2),
          c = u[0],
          f = u[1]
        if (r != null && (s = r.preserve) !== null && s !== void 0 && s[c])
          o[c] = f
        else if (
          (typeof f == 'string' || typeof f == 'number') &&
          !(r != null && (l = r.ignore) !== null && l !== void 0 && l[c])
        ) {
          var d,
            g = Es(c, r == null ? void 0 : r.prefix)
          ;(i[g] =
            typeof f == 'number' &&
            !(r != null && (d = r.unitless) !== null && d !== void 0 && d[c])
              ? ''.concat(f, 'px')
              : String(f)),
            (o[c] = 'var('.concat(g, ')'))
        }
      }),
      [o, WT(i, n, { scope: r == null ? void 0 : r.scope })]
    )
  },
  Gm = Pn() ? j.useLayoutEffect : j.useEffect,
  vy = function (t, n) {
    var r = j.useRef(!0)
    Gm(function () {
      return t(r.current)
    }, n),
      Gm(function () {
        return (
          (r.current = !1),
          function () {
            r.current = !0
          }
        )
      }, [])
  },
  Qm = function (t, n) {
    vy(function (r) {
      if (!r) return t()
    }, n)
  },
  UT = B({}, Mo),
  Km = UT.useInsertionEffect,
  GT = function (t, n, r) {
    j.useMemo(t, r),
      vy(function () {
        return n(!0)
      }, r)
  },
  QT = Km
    ? function (e, t, n) {
        return Km(function () {
          return e(), t()
        }, n)
      }
    : GT,
  KT = B({}, Mo),
  XT = KT.useInsertionEffect,
  YT = function (t) {
    var n = [],
      r = !1
    function i(o) {
      r || n.push(o)
    }
    return (
      j.useEffect(function () {
        return (
          (r = !1),
          function () {
            ;(r = !0),
              n.length &&
                n.forEach(function (o) {
                  return o()
                })
          }
        )
      }, t),
      i
    )
  },
  ZT = function () {
    return function (t) {
      t()
    }
  },
  JT = typeof XT < 'u' ? YT : ZT
function Mp(e, t, n, r, i) {
  var o = j.useContext(Ql),
    a = o.cache,
    s = [e].concat(Q(t)),
    l = kd(s),
    u = JT([l]),
    c = function (y) {
      a.opUpdate(l, function (_) {
        var x = _ || [void 0, void 0],
          v = K(x, 2),
          p = v[0],
          m = p === void 0 ? 0 : p,
          w = v[1],
          b = w,
          C = b || n(),
          S = [m, C]
        return y ? y(S) : S
      })
    }
  j.useMemo(
    function () {
      c()
    },
    [l]
  )
  var f = a.opGet(l),
    d = f[1]
  return (
    QT(
      function () {
        i == null || i(d)
      },
      function (g) {
        return (
          c(function (y) {
            var _ = K(y, 2),
              x = _[0],
              v = _[1]
            return g && x === 0 && (i == null || i(d)), [x + 1, v]
          }),
          function () {
            a.opUpdate(l, function (y) {
              var _ = y || [],
                x = K(_, 2),
                v = x[0],
                p = v === void 0 ? 0 : v,
                m = x[1],
                w = p - 1
              return w === 0
                ? (u(function () {
                    ;(g || !a.opGet(l)) && (r == null || r(m, !1))
                  }),
                  null)
                : [p - 1, m]
            })
          }
        )
      },
      [l]
    ),
    d
  )
}
var ek = {},
  tk = 'css',
  cr = new Map()
function nk(e) {
  cr.set(e, (cr.get(e) || 0) + 1)
}
function rk(e, t) {
  if (typeof document < 'u') {
    var n = document.querySelectorAll('style['.concat(Oi, '="').concat(e, '"]'))
    n.forEach(function (r) {
      if (r[Bn] === t) {
        var i
        ;(i = r.parentNode) === null || i === void 0 || i.removeChild(r)
      }
    })
  }
}
var ik = 0
function ok(e, t) {
  cr.set(e, (cr.get(e) || 0) - 1)
  var n = Array.from(cr.keys()),
    r = n.filter(function (i) {
      var o = cr.get(i) || 0
      return o <= 0
    })
  n.length - r.length > ik &&
    r.forEach(function (i) {
      rk(i, t), cr.delete(i)
    })
}
var ak = function (t, n, r, i) {
    var o = r.getDerivativeToken(t),
      a = B(B({}, o), n)
    return i && (a = i(a)), a
  },
  gy = 'token'
function sk(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = j.useContext(Ql),
    i = r.cache.instanceId,
    o = r.container,
    a = n.salt,
    s = a === void 0 ? '' : a,
    l = n.override,
    u = l === void 0 ? ek : l,
    c = n.formatToken,
    f = n.getComputedToken,
    d = n.cssVar,
    g = qT(function () {
      return Object.assign.apply(Object, [{}].concat(Q(t)))
    }, t),
    y = ko(g),
    _ = ko(u),
    x = d ? ko(d) : '',
    v = Mp(
      gy,
      [s, e.id, y, _, x],
      function () {
        var p,
          m = f ? f(g, u, e) : ak(g, u, e, c),
          w = B({}, m),
          b = ''
        if (d) {
          var C = my(m, d.key, {
              prefix: d.prefix,
              ignore: d.ignore,
              unitless: d.unitless,
              preserve: d.preserve
            }),
            S = K(C, 2)
          ;(m = S[0]), (b = S[1])
        }
        var E = Um(m, s)
        ;(m._tokenKey = E), (w._tokenKey = Um(w, s))
        var T =
          (p = d == null ? void 0 : d.key) !== null && p !== void 0 ? p : E
        ;(m._themeKey = T), nk(T)
        var k = ''.concat(tk, '-').concat(na(E))
        return (m._hashId = k), [m, k, w, b, (d == null ? void 0 : d.key) || '']
      },
      function (p) {
        ok(p[0]._themeKey, i)
      },
      function (p) {
        var m = K(p, 4),
          w = m[0],
          b = m[3]
        if (d && b) {
          var C = bi(b, na('css-variables-'.concat(w._themeKey)), {
            mark: Ht,
            prepend: 'queue',
            attachTo: o,
            priority: -999
          })
          ;(C[Bn] = i), C.setAttribute(Oi, w._themeKey)
        }
      }
    )
  return v
}
var lk = function (t, n, r) {
    var i = K(t, 5),
      o = i[2],
      a = i[3],
      s = i[4],
      l = r || {},
      u = l.plain
    if (!a) return null
    var c = o._tokenKey,
      f = -999,
      d = { 'data-rc-order': 'prependQueue', 'data-rc-priority': ''.concat(f) },
      g = cl(a, s, c, d, u)
    return [f, c, g]
  },
  uk = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  },
  yy = 'comm',
  _y = 'rule',
  wy = 'decl',
  ck = '@import',
  dk = '@keyframes',
  fk = '@layer',
  xy = Math.abs,
  Np = String.fromCharCode
function by(e) {
  return e.trim()
}
function Ts(e, t, n) {
  return e.replace(t, n)
}
function pk(e, t, n) {
  return e.indexOf(t, n)
}
function ia(e, t) {
  return e.charCodeAt(t) | 0
}
function Li(e, t, n) {
  return e.slice(t, n)
}
function Zt(e) {
  return e.length
}
function hk(e) {
  return e.length
}
function Za(e, t) {
  return t.push(e), e
}
var Kl = 1,
  Ai = 1,
  Sy = 0,
  Mt = 0,
  _e = 0,
  Bi = ''
function Op(e, t, n, r, i, o, a, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: o,
    line: Kl,
    column: Ai,
    length: a,
    return: '',
    siblings: s
  }
}
function mk() {
  return _e
}
function vk() {
  return (
    (_e = Mt > 0 ? ia(Bi, --Mt) : 0), Ai--, _e === 10 && ((Ai = 1), Kl--), _e
  )
}
function qt() {
  return (
    (_e = Mt < Sy ? ia(Bi, Mt++) : 0), Ai++, _e === 10 && ((Ai = 1), Kl++), _e
  )
}
function Hn() {
  return ia(Bi, Mt)
}
function ks() {
  return Mt
}
function Xl(e, t) {
  return Li(Bi, e, t)
}
function oa(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4
    case 58:
      return 3
    case 34:
    case 39:
    case 40:
    case 91:
      return 2
    case 41:
    case 93:
      return 1
  }
  return 0
}
function gk(e) {
  return (Kl = Ai = 1), (Sy = Zt((Bi = e))), (Mt = 0), []
}
function yk(e) {
  return (Bi = ''), e
}
function Xu(e) {
  return by(Xl(Mt - 1, Md(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}
function _k(e) {
  for (; (_e = Hn()) && _e < 33; ) qt()
  return oa(e) > 2 || oa(_e) > 3 ? '' : ' '
}
function wk(e, t) {
  for (
    ;
    --t &&
    qt() &&
    !(_e < 48 || _e > 102 || (_e > 57 && _e < 65) || (_e > 70 && _e < 97));

  );
  return Xl(e, ks() + (t < 6 && Hn() == 32 && qt() == 32))
}
function Md(e) {
  for (; qt(); )
    switch (_e) {
      case e:
        return Mt
      case 34:
      case 39:
        e !== 34 && e !== 39 && Md(_e)
        break
      case 40:
        e === 41 && Md(e)
        break
      case 92:
        qt()
        break
    }
  return Mt
}
function xk(e, t) {
  for (; qt() && e + _e !== 57; ) if (e + _e === 84 && Hn() === 47) break
  return '/*' + Xl(t, Mt - 1) + '*' + Np(e === 47 ? e : qt())
}
function bk(e) {
  for (; !oa(Hn()); ) qt()
  return Xl(e, Mt)
}
function Sk(e) {
  return yk(js('', null, null, null, [''], (e = gk(e)), 0, [0], e))
}
function js(e, t, n, r, i, o, a, s, l) {
  for (
    var u = 0,
      c = 0,
      f = a,
      d = 0,
      g = 0,
      y = 0,
      _ = 1,
      x = 1,
      v = 1,
      p = 0,
      m = '',
      w = i,
      b = o,
      C = r,
      S = m;
    x;

  )
    switch (((y = p), (p = qt()))) {
      case 40:
        if (y != 108 && ia(S, f - 1) == 58) {
          pk((S += Ts(Xu(p), '&', '&\f')), '&\f', xy(u ? s[u - 1] : 0)) != -1 &&
            (v = -1)
          break
        }
      case 34:
      case 39:
      case 91:
        S += Xu(p)
        break
      case 9:
      case 10:
      case 13:
      case 32:
        S += _k(y)
        break
      case 92:
        S += wk(ks() - 1, 7)
        continue
      case 47:
        switch (Hn()) {
          case 42:
          case 47:
            Za(Ck(xk(qt(), ks()), t, n, l), l),
              (oa(y || 1) == 5 || oa(Hn() || 1) == 5) &&
                Zt(S) &&
                Li(S, -1, void 0) !== ' ' &&
                (S += ' ')
            break
          default:
            S += '/'
        }
        break
      case 123 * _:
        s[u++] = Zt(S) * v
      case 125 * _:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            x = 0
          case 59 + c:
            v == -1 && (S = Ts(S, /\f/g, '')),
              g > 0 &&
                (Zt(S) - f || (_ === 0 && y === 47)) &&
                Za(
                  g > 32
                    ? Ym(S + ';', r, n, f - 1, l)
                    : Ym(Ts(S, ' ', '') + ';', r, n, f - 2, l),
                  l
                )
            break
          case 59:
            S += ';'
          default:
            if (
              (Za(
                (C = Xm(S, t, n, u, c, i, s, m, (w = []), (b = []), f, o)),
                o
              ),
              p === 123)
            )
              if (c === 0) js(S, t, C, C, w, o, f, s, b)
              else
                switch (d === 99 && ia(S, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    js(
                      e,
                      C,
                      C,
                      r && Za(Xm(e, C, C, 0, 0, i, s, m, i, (w = []), f, b), b),
                      i,
                      b,
                      f,
                      s,
                      r ? w : b
                    )
                    break
                  default:
                    js(S, C, C, C, [''], b, 0, s, b)
                }
        }
        ;(u = c = g = 0), (_ = v = 1), (m = S = ''), (f = a)
        break
      case 58:
        ;(f = 1 + Zt(S)), (g = y)
      default:
        if (_ < 1) {
          if (p == 123) --_
          else if (p == 125 && _++ == 0 && vk() == 125) continue
        }
        switch (((S += Np(p)), p * _)) {
          case 38:
            v = c > 0 ? 1 : ((S += '\f'), -1)
            break
          case 44:
            ;(s[u++] = (Zt(S) - 1) * v), (v = 1)
            break
          case 64:
            Hn() === 45 && (S += Xu(qt())),
              (d = Hn()),
              (c = f = Zt((m = S += bk(ks())))),
              p++
            break
          case 45:
            y === 45 && Zt(S) == 2 && (_ = 0)
        }
    }
  return o
}
function Xm(e, t, n, r, i, o, a, s, l, u, c, f) {
  for (
    var d = i - 1, g = i === 0 ? o : [''], y = hk(g), _ = 0, x = 0, v = 0;
    _ < r;
    ++_
  )
    for (var p = 0, m = Li(e, d + 1, (d = xy((x = a[_])))), w = e; p < y; ++p)
      (w = by(x > 0 ? g[p] + ' ' + m : Ts(m, /&\f/g, g[p]))) && (l[v++] = w)
  return Op(e, t, n, i === 0 ? _y : s, l, u, c, f)
}
function Ck(e, t, n, r) {
  return Op(e, t, n, yy, Np(mk()), Li(e, 2, -2), 0, r)
}
function Ym(e, t, n, r, i) {
  return Op(e, t, n, wy, Li(e, 0, r), Li(e, r + 1, -1), r, i)
}
function Nd(e, t) {
  for (var n = '', r = 0; r < e.length; r++) n += t(e[r], r, e, t) || ''
  return n
}
function Ek(e, t, n, r) {
  switch (e.type) {
    case fk:
      if (e.children.length) break
    case ck:
    case wy:
      return (e.return = e.return || e.value)
    case yy:
      return ''
    case dk:
      return (e.return = e.value + '{' + Nd(e.children, r) + '}')
    case _y:
      if (!Zt((e.value = e.props.join(',')))) return ''
  }
  return Zt((n = Nd(e.children, r))) ? (e.return = e.value + '{' + n + '}') : ''
}
var Zm = 'data-ant-cssinjs-cache-path',
  Cy = '_FILE_STYLE__',
  wr,
  Ey = !0
function Tk() {
  if (!wr && ((wr = {}), Pn())) {
    var e = document.createElement('div')
    ;(e.className = Zm),
      (e.style.position = 'fixed'),
      (e.style.visibility = 'hidden'),
      (e.style.top = '-9999px'),
      document.body.appendChild(e)
    var t = getComputedStyle(e).content || ''
    ;(t = t.replace(/^"/, '').replace(/"$/, '')),
      t.split(';').forEach(function (i) {
        var o = i.split(':'),
          a = K(o, 2),
          s = a[0],
          l = a[1]
        wr[s] = l
      })
    var n = document.querySelector('style['.concat(Zm, ']'))
    if (n) {
      var r
      ;(Ey = !1),
        (r = n.parentNode) === null || r === void 0 || r.removeChild(n)
    }
    document.body.removeChild(e)
  }
}
function kk(e) {
  return Tk(), !!wr[e]
}
function jk(e) {
  var t = wr[e],
    n = null
  if (t && Pn())
    if (Ey) n = Cy
    else {
      var r = document.querySelector(
        'style['.concat(Ht, '="').concat(wr[e], '"]')
      )
      r ? (n = r.innerHTML) : delete wr[e]
    }
  return [n, t]
}
var Pk = '_skip_check_',
  Ty = '_multi_value_'
function Ps(e) {
  var t = Nd(Sk(e), Ek)
  return t.replace(/\{%%%\:[^;];}/g, ';')
}
function Mk(e) {
  return X(e) === 'object' && e && (Pk in e || Ty in e)
}
function Jm(e, t, n) {
  if (!t) return e
  var r = '.'.concat(t),
    i = n === 'low' ? ':where('.concat(r, ')') : r,
    o = e.split(',').map(function (a) {
      var s,
        l = a.trim().split(/\s+/),
        u = l[0] || '',
        c =
          ((s = u.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || ''
      return (
        (u = ''.concat(c).concat(i).concat(u.slice(c.length))),
        [u].concat(Q(l.slice(1))).join(' ')
      )
    })
  return o.join(',')
}
var Nk = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r =
      arguments.length > 2 && arguments[2] !== void 0
        ? arguments[2]
        : { root: !0, parentSelectors: [] },
    i = r.root,
    o = r.injectHash,
    a = r.parentSelectors,
    s = n.hashId,
    l = n.layer
  n.path
  var u = n.hashPriority,
    c = n.transformers,
    f = c === void 0 ? [] : c
  n.linters
  var d = '',
    g = {}
  function y(v) {
    var p = v.getName(s)
    if (!g[p]) {
      var m = e(v.style, n, { root: !1, parentSelectors: a }),
        w = K(m, 1),
        b = w[0]
      g[p] = '@keyframes '.concat(v.getName(s)).concat(b)
    }
  }
  function _(v) {
    var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : []
    return (
      v.forEach(function (m) {
        Array.isArray(m) ? _(m, p) : m && p.push(m)
      }),
      p
    )
  }
  var x = _(Array.isArray(t) ? t : [t])
  return (
    x.forEach(function (v) {
      var p = typeof v == 'string' && !i ? {} : v
      if (typeof p == 'string')
        d += ''.concat(
          p,
          `
`
        )
      else if (p._keyframe) y(p)
      else {
        var m = f.reduce(function (w, b) {
          var C
          return (
            (b == null || (C = b.visit) === null || C === void 0
              ? void 0
              : C.call(b, w)) || w
          )
        }, p)
        Object.keys(m).forEach(function (w) {
          var b = m[w]
          if (
            X(b) === 'object' &&
            b &&
            (w !== 'animationName' || !b._keyframe) &&
            !Mk(b)
          ) {
            var C = !1,
              S = w.trim(),
              E = !1
            ;(i || o) && s
              ? S.startsWith('@')
                ? (C = !0)
                : S === '&'
                ? (S = Jm('', s, u))
                : (S = Jm(w, s, u))
              : i && !s && (S === '&' || S === '') && ((S = ''), (E = !0))
            var T = e(b, n, {
                root: E,
                injectHash: C,
                parentSelectors: [].concat(Q(a), [S])
              }),
              k = K(T, 2),
              M = k[0],
              L = k[1]
            ;(g = B(B({}, g), L)), (d += ''.concat(S).concat(M))
          } else {
            let z = function (R, I) {
              var N = R.replace(/[A-Z]/g, function ($) {
                  return '-'.concat($.toLowerCase())
                }),
                F = I
              !uk[R] &&
                typeof F == 'number' &&
                F !== 0 &&
                (F = ''.concat(F, 'px')),
                R === 'animationName' &&
                  I !== null &&
                  I !== void 0 &&
                  I._keyframe &&
                  (y(I), (F = I.getName(s))),
                (d += ''.concat(N, ':').concat(F, ';'))
            }
            var O,
              A =
                (O = b == null ? void 0 : b.value) !== null && O !== void 0
                  ? O
                  : b
            X(b) === 'object' &&
            b !== null &&
            b !== void 0 &&
            b[Ty] &&
            Array.isArray(A)
              ? A.forEach(function (R) {
                  z(w, R)
                })
              : z(w, A)
          }
        })
      }
    }),
    i
      ? l &&
        (d && (d = '@layer '.concat(l.name, ' {').concat(d, '}')),
        l.dependencies &&
          (g['@layer '.concat(l.name)] = l.dependencies.map(function (v) {
            return '@layer '.concat(v, ', ').concat(l.name, ';')
          }).join(`
`)))
      : (d = '{'.concat(d, '}')),
    [d, g]
  )
}
function ky(e, t) {
  return na(''.concat(e.join('%')).concat(t))
}
function Ok() {
  return null
}
var jy = 'style'
function Od(e, t) {
  var n = e.token,
    r = e.path,
    i = e.hashId,
    o = e.layer,
    a = e.nonce,
    s = e.clientOnly,
    l = e.order,
    u = l === void 0 ? 0 : l,
    c = j.useContext(Ql),
    f = c.autoClear
  c.mock
  var d = c.defaultCache,
    g = c.hashPriority,
    y = c.container,
    _ = c.ssrInline,
    x = c.transformers,
    v = c.linters,
    p = c.cache,
    m = c.layer,
    w = n._tokenKey,
    b = [w]
  m && b.push('layer'), b.push.apply(b, Q(r))
  var C = Pd,
    S = Mp(
      jy,
      b,
      function () {
        var L = b.join('|')
        if (kk(L)) {
          var O = jk(L),
            A = K(O, 2),
            z = A[0],
            R = A[1]
          if (z) return [z, w, R, {}, s, u]
        }
        var I = t(),
          N = Nk(I, {
            hashId: i,
            hashPriority: g,
            layer: m ? o : void 0,
            path: r.join('-'),
            transformers: x,
            linters: v
          }),
          F = K(N, 2),
          $ = F[0],
          V = F[1],
          q = Ps($),
          G = ky(b, q)
        return [q, w, G, V, s, u]
      },
      function (L, O) {
        var A = K(L, 3),
          z = A[2]
        ;(O || f) && Pd && py(z, { mark: Ht })
      },
      function (L) {
        var O = K(L, 4),
          A = O[0]
        O[1]
        var z = O[2],
          R = O[3]
        if (C && A !== Cy) {
          var I = {
              mark: Ht,
              prepend: m ? !1 : 'queue',
              attachTo: y,
              priority: u
            },
            N = typeof a == 'function' ? a() : a
          N && (I.csp = { nonce: N })
          var F = [],
            $ = []
          Object.keys(R).forEach(function (q) {
            q.startsWith('@layer') ? F.push(q) : $.push(q)
          }),
            F.forEach(function (q) {
              bi(
                Ps(R[q]),
                '_layer-'.concat(q),
                B(B({}, I), {}, { prepend: !0 })
              )
            })
          var V = bi(A, z, I)
          ;(V[Bn] = p.instanceId),
            V.setAttribute(Oi, w),
            $.forEach(function (q) {
              bi(Ps(R[q]), '_effect-'.concat(q), I)
            })
        }
      }
    ),
    E = K(S, 3),
    T = E[0],
    k = E[1],
    M = E[2]
  return function (L) {
    var O
    if (!_ || C || !d) O = j.createElement(Ok, null)
    else {
      var A
      O = j.createElement(
        'style',
        Nr({}, ((A = {}), D(A, Oi, k), D(A, Ht, M), A), {
          dangerouslySetInnerHTML: { __html: T }
        })
      )
    }
    return j.createElement(j.Fragment, null, O, L)
  }
}
var Lk = function (t, n, r) {
    var i = K(t, 6),
      o = i[0],
      a = i[1],
      s = i[2],
      l = i[3],
      u = i[4],
      c = i[5],
      f = r || {},
      d = f.plain
    if (u) return null
    var g = o,
      y = { 'data-rc-order': 'prependQueue', 'data-rc-priority': ''.concat(c) }
    return (
      (g = cl(o, a, s, y, d)),
      l &&
        Object.keys(l).forEach(function (_) {
          if (!n[_]) {
            n[_] = !0
            var x = Ps(l[_]),
              v = cl(x, a, '_effect-'.concat(_), y, d)
            _.startsWith('@layer') ? (g = v + g) : (g += v)
          }
        }),
      [c, s, g]
    )
  },
  Py = 'cssVar',
  Ak = function (t, n) {
    var r = t.key,
      i = t.prefix,
      o = t.unitless,
      a = t.ignore,
      s = t.token,
      l = t.scope,
      u = l === void 0 ? '' : l,
      c = j.useContext(Ql),
      f = c.cache.instanceId,
      d = c.container,
      g = s._tokenKey,
      y = [].concat(Q(t.path), [r, u, g]),
      _ = Mp(
        Py,
        y,
        function () {
          var x = n(),
            v = my(x, r, { prefix: i, unitless: o, ignore: a, scope: u }),
            p = K(v, 2),
            m = p[0],
            w = p[1],
            b = ky(y, w)
          return [m, w, b, r]
        },
        function (x) {
          var v = K(x, 3),
            p = v[2]
          Pd && py(p, { mark: Ht })
        },
        function (x) {
          var v = K(x, 3),
            p = v[1],
            m = v[2]
          if (p) {
            var w = bi(p, m, {
              mark: Ht,
              prepend: 'queue',
              attachTo: d,
              priority: -999
            })
            ;(w[Bn] = f), w.setAttribute(Oi, r)
          }
        }
      )
    return _
  },
  Rk = function (t, n, r) {
    var i = K(t, 4),
      o = i[1],
      a = i[2],
      s = i[3],
      l = r || {},
      u = l.plain
    if (!o) return null
    var c = -999,
      f = { 'data-rc-order': 'prependQueue', 'data-rc-priority': ''.concat(c) },
      d = cl(o, s, a, f, u)
    return [c, a, d]
  },
  io
;(io = {}), D(io, jy, Lk), D(io, gy, lk), D(io, Py, Rk)
function Kr(e) {
  return (e.notSplit = !0), e
}
Kr(['borderTop', 'borderBottom']),
  Kr(['borderTop']),
  Kr(['borderBottom']),
  Kr(['borderLeft', 'borderRight']),
  Kr(['borderLeft']),
  Kr(['borderRight'])
var Ik = j.createContext({})
function Fk(e) {
  return ly(e) || iy(e) || Tp(e) || uy()
}
function en(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null) return
    n = n[t[r]]
  }
  return n
}
function My(e, t, n, r) {
  if (!t.length) return n
  var i = Fk(t),
    o = i[0],
    a = i.slice(1),
    s
  return (
    !e && typeof o == 'number'
      ? (s = [])
      : Array.isArray(e)
      ? (s = Q(e))
      : (s = B({}, e)),
    r && n === void 0 && a.length === 1
      ? delete s[o][a[0]]
      : (s[o] = My(s[o], a, n, r)),
    s
  )
}
function It(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1
  return t.length && r && n === void 0 && !en(e, t.slice(0, -1))
    ? e
    : My(e, t, n, r)
}
function $k(e) {
  return (
    X(e) === 'object' &&
    e !== null &&
    Object.getPrototypeOf(e) === Object.prototype
  )
}
function ev(e) {
  return Array.isArray(e) ? [] : {}
}
var Dk = typeof Reflect > 'u' ? Object.keys : Reflect.ownKeys
function di() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n]
  var r = ev(t[0])
  return (
    t.forEach(function (i) {
      function o(a, s) {
        var l = new Set(s),
          u = en(i, a),
          c = Array.isArray(u)
        if (c || $k(u)) {
          if (!l.has(u)) {
            l.add(u)
            var f = en(r, a)
            c
              ? (r = It(r, a, []))
              : (!f || X(f) !== 'object') && (r = It(r, a, ev(u))),
              Dk(u).forEach(function (d) {
                o([].concat(Q(a), [d]), l)
              })
          }
        } else r = It(r, a, u)
      }
      o([])
    }),
    r
  )
}
const zk = j.createContext({}),
  Vk = j.createContext(void 0)
var Bk = {
    items_per_page: '/ page',
    jump_to: 'Go to',
    jump_to_confirm: 'confirm',
    page: 'Page',
    prev_page: 'Previous Page',
    next_page: 'Next Page',
    prev_5: 'Previous 5 Pages',
    next_5: 'Next 5 Pages',
    prev_3: 'Previous 3 Pages',
    next_3: 'Next 3 Pages',
    page_size: 'Page Size'
  },
  Hk = {
    yearFormat: 'YYYY',
    dayFormat: 'D',
    cellMeridiemFormat: 'A',
    monthBeforeYear: !0
  },
  qk = B(
    B({}, Hk),
    {},
    {
      locale: 'en_US',
      today: 'Today',
      now: 'Now',
      backToToday: 'Back to today',
      ok: 'OK',
      clear: 'Clear',
      month: 'Month',
      year: 'Year',
      timeSelect: 'select time',
      dateSelect: 'select date',
      weekSelect: 'Choose a week',
      monthSelect: 'Choose a month',
      yearSelect: 'Choose a year',
      decadeSelect: 'Choose a decade',
      dateFormat: 'M/D/YYYY',
      dateTimeFormat: 'M/D/YYYY HH:mm:ss',
      previousMonth: 'Previous month (PageUp)',
      nextMonth: 'Next month (PageDown)',
      previousYear: 'Last year (Control + left)',
      nextYear: 'Next year (Control + right)',
      previousDecade: 'Last decade',
      nextDecade: 'Next decade',
      previousCentury: 'Last century',
      nextCentury: 'Next century'
    }
  )
const Ny = {
    placeholder: 'Select time',
    rangePlaceholder: ['Start time', 'End time']
  },
  tv = {
    lang: Object.assign(
      {
        placeholder: 'Select date',
        yearPlaceholder: 'Select year',
        quarterPlaceholder: 'Select quarter',
        monthPlaceholder: 'Select month',
        weekPlaceholder: 'Select week',
        rangePlaceholder: ['Start date', 'End date'],
        rangeYearPlaceholder: ['Start year', 'End year'],
        rangeQuarterPlaceholder: ['Start quarter', 'End quarter'],
        rangeMonthPlaceholder: ['Start month', 'End month'],
        rangeWeekPlaceholder: ['Start week', 'End week']
      },
      qk
    ),
    timePickerLocale: Object.assign({}, Ny)
  },
  rt = '${label} is not a valid ${type}',
  Yl = {
    locale: 'en',
    Pagination: Bk,
    DatePicker: tv,
    TimePicker: Ny,
    Calendar: tv,
    global: { placeholder: 'Please select' },
    Table: {
      filterTitle: 'Filter menu',
      filterConfirm: 'OK',
      filterReset: 'Reset',
      filterEmptyText: 'No filters',
      filterCheckall: 'Select all items',
      filterSearchPlaceholder: 'Search in filters',
      emptyText: 'No data',
      selectAll: 'Select current page',
      selectInvert: 'Invert current page',
      selectNone: 'Clear all data',
      selectionAll: 'Select all data',
      sortTitle: 'Sort',
      expand: 'Expand row',
      collapse: 'Collapse row',
      triggerDesc: 'Click to sort descending',
      triggerAsc: 'Click to sort ascending',
      cancelSort: 'Click to cancel sorting'
    },
    Tour: { Next: 'Next', Previous: 'Previous', Finish: 'Finish' },
    Modal: { okText: 'OK', cancelText: 'Cancel', justOkText: 'OK' },
    Popconfirm: { okText: 'OK', cancelText: 'Cancel' },
    Transfer: {
      titles: ['', ''],
      searchPlaceholder: 'Search here',
      itemUnit: 'item',
      itemsUnit: 'items',
      remove: 'Remove',
      selectCurrent: 'Select current page',
      removeCurrent: 'Remove current page',
      selectAll: 'Select all data',
      deselectAll: 'Deselect all data',
      removeAll: 'Remove all data',
      selectInvert: 'Invert current page'
    },
    Upload: {
      uploading: 'Uploading...',
      removeFile: 'Remove file',
      uploadError: 'Upload error',
      previewFile: 'Preview file',
      downloadFile: 'Download file'
    },
    Empty: { description: 'No data' },
    Icon: { icon: 'icon' },
    Text: {
      edit: 'Edit',
      copy: 'Copy',
      copied: 'Copied',
      expand: 'Expand',
      collapse: 'Collapse'
    },
    Form: {
      optional: '(optional)',
      defaultValidateMessages: {
        default: 'Field validation error for ${label}',
        required: 'Please enter ${label}',
        enum: '${label} must be one of [${enum}]',
        whitespace: '${label} cannot be a blank character',
        date: {
          format: '${label} date format is invalid',
          parse: '${label} cannot be converted to a date',
          invalid: '${label} is an invalid date'
        },
        types: {
          string: rt,
          method: rt,
          array: rt,
          object: rt,
          number: rt,
          date: rt,
          boolean: rt,
          integer: rt,
          float: rt,
          regexp: rt,
          email: rt,
          url: rt,
          hex: rt
        },
        string: {
          len: '${label} must be ${len} characters',
          min: '${label} must be at least ${min} characters',
          max: '${label} must be up to ${max} characters',
          range: '${label} must be between ${min}-${max} characters'
        },
        number: {
          len: '${label} must be equal to ${len}',
          min: '${label} must be minimum ${min}',
          max: '${label} must be maximum ${max}',
          range: '${label} must be between ${min}-${max}'
        },
        array: {
          len: 'Must be ${len} ${label}',
          min: 'At least ${min} ${label}',
          max: 'At most ${max} ${label}',
          range: 'The amount of ${label} must be between ${min}-${max}'
        },
        pattern: { mismatch: '${label} does not match the pattern ${pattern}' }
      }
    },
    Image: { preview: 'Preview' },
    QRCode: {
      expired: 'QR code expired',
      refresh: 'Refresh',
      scanned: 'Scanned'
    },
    ColorPicker: {
      presetEmpty: 'Empty',
      transparent: 'Transparent',
      singleColor: 'Single',
      gradientColor: 'Gradient'
    }
  }
Object.assign({}, Yl.Modal)
let Ms = []
const nv = () =>
  Ms.reduce((e, t) => Object.assign(Object.assign({}, e), t), Yl.Modal)
function Wk(e) {
  if (e) {
    const t = Object.assign({}, e)
    return (
      Ms.push(t),
      nv(),
      () => {
        ;(Ms = Ms.filter((n) => n !== t)), nv()
      }
    )
  }
  Object.assign({}, Yl.Modal)
}
const Oy = j.createContext(void 0),
  Uk = 'internalMark',
  Gk = (e) => {
    const { locale: t = {}, children: n, _ANT_MARK__: r } = e
    j.useEffect(() => Wk(t == null ? void 0 : t.Modal), [t])
    const i = j.useMemo(
      () => Object.assign(Object.assign({}, t), { exist: !0 }),
      [t]
    )
    return j.createElement(Oy.Provider, { value: i }, n)
  }
function Ae(e, t) {
  Qk(e) && (e = '100%')
  var n = Kk(e)
  return (
    (e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e)))),
    n && (e = parseInt(String(e * t), 10) / 100),
    Math.abs(e - t) < 1e-6
      ? 1
      : (t === 360
          ? (e = (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t)))
          : (e = (e % t) / parseFloat(String(t))),
        e)
  )
}
function Ja(e) {
  return Math.min(1, Math.max(0, e))
}
function Qk(e) {
  return typeof e == 'string' && e.indexOf('.') !== -1 && parseFloat(e) === 1
}
function Kk(e) {
  return typeof e == 'string' && e.indexOf('%') !== -1
}
function Ly(e) {
  return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e
}
function es(e) {
  return e <= 1 ? ''.concat(Number(e) * 100, '%') : e
}
function vr(e) {
  return e.length === 1 ? '0' + e : String(e)
}
function Xk(e, t, n) {
  return { r: Ae(e, 255) * 255, g: Ae(t, 255) * 255, b: Ae(n, 255) * 255 }
}
function rv(e, t, n) {
  ;(e = Ae(e, 255)), (t = Ae(t, 255)), (n = Ae(n, 255))
  var r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    o = 0,
    a = 0,
    s = (r + i) / 2
  if (r === i) (a = 0), (o = 0)
  else {
    var l = r - i
    switch (((a = s > 0.5 ? l / (2 - r - i) : l / (r + i)), r)) {
      case e:
        o = (t - n) / l + (t < n ? 6 : 0)
        break
      case t:
        o = (n - e) / l + 2
        break
      case n:
        o = (e - t) / l + 4
        break
    }
    o /= 6
  }
  return { h: o, s: a, l: s }
}
function Yu(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * (6 * n)
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  )
}
function Yk(e, t, n) {
  var r, i, o
  if (((e = Ae(e, 360)), (t = Ae(t, 100)), (n = Ae(n, 100)), t === 0))
    (i = n), (o = n), (r = n)
  else {
    var a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - a
    ;(r = Yu(s, a, e + 1 / 3)), (i = Yu(s, a, e)), (o = Yu(s, a, e - 1 / 3))
  }
  return { r: r * 255, g: i * 255, b: o * 255 }
}
function Ld(e, t, n) {
  ;(e = Ae(e, 255)), (t = Ae(t, 255)), (n = Ae(n, 255))
  var r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    o = 0,
    a = r,
    s = r - i,
    l = r === 0 ? 0 : s / r
  if (r === i) o = 0
  else {
    switch (r) {
      case e:
        o = (t - n) / s + (t < n ? 6 : 0)
        break
      case t:
        o = (n - e) / s + 2
        break
      case n:
        o = (e - t) / s + 4
        break
    }
    o /= 6
  }
  return { h: o, s: l, v: a }
}
function Zk(e, t, n) {
  ;(e = Ae(e, 360) * 6), (t = Ae(t, 100)), (n = Ae(n, 100))
  var r = Math.floor(e),
    i = e - r,
    o = n * (1 - t),
    a = n * (1 - i * t),
    s = n * (1 - (1 - i) * t),
    l = r % 6,
    u = [n, a, o, o, s, n][l],
    c = [s, n, n, a, o, o][l],
    f = [o, o, s, n, n, a][l]
  return { r: u * 255, g: c * 255, b: f * 255 }
}
function Ad(e, t, n, r) {
  var i = [
    vr(Math.round(e).toString(16)),
    vr(Math.round(t).toString(16)),
    vr(Math.round(n).toString(16))
  ]
  return r &&
    i[0].startsWith(i[0].charAt(1)) &&
    i[1].startsWith(i[1].charAt(1)) &&
    i[2].startsWith(i[2].charAt(1))
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join('')
}
function Jk(e, t, n, r, i) {
  var o = [
    vr(Math.round(e).toString(16)),
    vr(Math.round(t).toString(16)),
    vr(Math.round(n).toString(16)),
    vr(e8(r))
  ]
  return i &&
    o[0].startsWith(o[0].charAt(1)) &&
    o[1].startsWith(o[1].charAt(1)) &&
    o[2].startsWith(o[2].charAt(1)) &&
    o[3].startsWith(o[3].charAt(1))
    ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0)
    : o.join('')
}
function e8(e) {
  return Math.round(parseFloat(e) * 255).toString(16)
}
function iv(e) {
  return ot(e) / 255
}
function ot(e) {
  return parseInt(e, 16)
}
function t8(e) {
  return { r: e >> 16, g: (e & 65280) >> 8, b: e & 255 }
}
var Rd = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkgrey: '#a9a9a9',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  goldenrod: '#daa520',
  gold: '#ffd700',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  grey: '#808080',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavenderblush: '#fff0f5',
  lavender: '#e6e6fa',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgreen: '#90ee90',
  lightgrey: '#d3d3d3',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32'
}
function Zr(e) {
  var t = { r: 0, g: 0, b: 0 },
    n = 1,
    r = null,
    i = null,
    o = null,
    a = !1,
    s = !1
  return (
    typeof e == 'string' && (e = i8(e)),
    typeof e == 'object' &&
      (cn(e.r) && cn(e.g) && cn(e.b)
        ? ((t = Xk(e.r, e.g, e.b)),
          (a = !0),
          (s = String(e.r).substr(-1) === '%' ? 'prgb' : 'rgb'))
        : cn(e.h) && cn(e.s) && cn(e.v)
        ? ((r = es(e.s)),
          (i = es(e.v)),
          (t = Zk(e.h, r, i)),
          (a = !0),
          (s = 'hsv'))
        : cn(e.h) &&
          cn(e.s) &&
          cn(e.l) &&
          ((r = es(e.s)),
          (o = es(e.l)),
          (t = Yk(e.h, r, o)),
          (a = !0),
          (s = 'hsl')),
      Object.prototype.hasOwnProperty.call(e, 'a') && (n = e.a)),
    (n = Ly(n)),
    {
      ok: a,
      format: e.format || s,
      r: Math.min(255, Math.max(t.r, 0)),
      g: Math.min(255, Math.max(t.g, 0)),
      b: Math.min(255, Math.max(t.b, 0)),
      a: n
    }
  )
}
var n8 = '[-\\+]?\\d+%?',
  r8 = '[-\\+]?\\d*\\.\\d+%?',
  qn = '(?:'.concat(r8, ')|(?:').concat(n8, ')'),
  Zu = '[\\s|\\(]+('
    .concat(qn, ')[,|\\s]+(')
    .concat(qn, ')[,|\\s]+(')
    .concat(qn, ')\\s*\\)?'),
  Ju = '[\\s|\\(]+('
    .concat(qn, ')[,|\\s]+(')
    .concat(qn, ')[,|\\s]+(')
    .concat(qn, ')[,|\\s]+(')
    .concat(qn, ')\\s*\\)?'),
  Lt = {
    CSS_UNIT: new RegExp(qn),
    rgb: new RegExp('rgb' + Zu),
    rgba: new RegExp('rgba' + Ju),
    hsl: new RegExp('hsl' + Zu),
    hsla: new RegExp('hsla' + Ju),
    hsv: new RegExp('hsv' + Zu),
    hsva: new RegExp('hsva' + Ju),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  }
function i8(e) {
  if (((e = e.trim().toLowerCase()), e.length === 0)) return !1
  var t = !1
  if (Rd[e]) (e = Rd[e]), (t = !0)
  else if (e === 'transparent')
    return { r: 0, g: 0, b: 0, a: 0, format: 'name' }
  var n = Lt.rgb.exec(e)
  return n
    ? { r: n[1], g: n[2], b: n[3] }
    : ((n = Lt.rgba.exec(e)),
      n
        ? { r: n[1], g: n[2], b: n[3], a: n[4] }
        : ((n = Lt.hsl.exec(e)),
          n
            ? { h: n[1], s: n[2], l: n[3] }
            : ((n = Lt.hsla.exec(e)),
              n
                ? { h: n[1], s: n[2], l: n[3], a: n[4] }
                : ((n = Lt.hsv.exec(e)),
                  n
                    ? { h: n[1], s: n[2], v: n[3] }
                    : ((n = Lt.hsva.exec(e)),
                      n
                        ? { h: n[1], s: n[2], v: n[3], a: n[4] }
                        : ((n = Lt.hex8.exec(e)),
                          n
                            ? {
                                r: ot(n[1]),
                                g: ot(n[2]),
                                b: ot(n[3]),
                                a: iv(n[4]),
                                format: t ? 'name' : 'hex8'
                              }
                            : ((n = Lt.hex6.exec(e)),
                              n
                                ? {
                                    r: ot(n[1]),
                                    g: ot(n[2]),
                                    b: ot(n[3]),
                                    format: t ? 'name' : 'hex'
                                  }
                                : ((n = Lt.hex4.exec(e)),
                                  n
                                    ? {
                                        r: ot(n[1] + n[1]),
                                        g: ot(n[2] + n[2]),
                                        b: ot(n[3] + n[3]),
                                        a: iv(n[4] + n[4]),
                                        format: t ? 'name' : 'hex8'
                                      }
                                    : ((n = Lt.hex3.exec(e)),
                                      n
                                        ? {
                                            r: ot(n[1] + n[1]),
                                            g: ot(n[2] + n[2]),
                                            b: ot(n[3] + n[3]),
                                            format: t ? 'name' : 'hex'
                                          }
                                        : !1)))))))))
}
function cn(e) {
  return !!Lt.CSS_UNIT.exec(String(e))
}
var qe = (function () {
    function e(t, n) {
      t === void 0 && (t = ''), n === void 0 && (n = {})
      var r
      if (t instanceof e) return t
      typeof t == 'number' && (t = t8(t)), (this.originalInput = t)
      var i = Zr(t)
      ;(this.originalInput = t),
        (this.r = i.r),
        (this.g = i.g),
        (this.b = i.b),
        (this.a = i.a),
        (this.roundA = Math.round(100 * this.a) / 100),
        (this.format = (r = n.format) !== null && r !== void 0 ? r : i.format),
        (this.gradientType = n.gradientType),
        this.r < 1 && (this.r = Math.round(this.r)),
        this.g < 1 && (this.g = Math.round(this.g)),
        this.b < 1 && (this.b = Math.round(this.b)),
        (this.isValid = i.ok)
    }
    return (
      (e.prototype.isDark = function () {
        return this.getBrightness() < 128
      }),
      (e.prototype.isLight = function () {
        return !this.isDark()
      }),
      (e.prototype.getBrightness = function () {
        var t = this.toRgb()
        return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3
      }),
      (e.prototype.getLuminance = function () {
        var t = this.toRgb(),
          n,
          r,
          i,
          o = t.r / 255,
          a = t.g / 255,
          s = t.b / 255
        return (
          o <= 0.03928
            ? (n = o / 12.92)
            : (n = Math.pow((o + 0.055) / 1.055, 2.4)),
          a <= 0.03928
            ? (r = a / 12.92)
            : (r = Math.pow((a + 0.055) / 1.055, 2.4)),
          s <= 0.03928
            ? (i = s / 12.92)
            : (i = Math.pow((s + 0.055) / 1.055, 2.4)),
          0.2126 * n + 0.7152 * r + 0.0722 * i
        )
      }),
      (e.prototype.getAlpha = function () {
        return this.a
      }),
      (e.prototype.setAlpha = function (t) {
        return (
          (this.a = Ly(t)), (this.roundA = Math.round(100 * this.a) / 100), this
        )
      }),
      (e.prototype.isMonochrome = function () {
        var t = this.toHsl().s
        return t === 0
      }),
      (e.prototype.toHsv = function () {
        var t = Ld(this.r, this.g, this.b)
        return { h: t.h * 360, s: t.s, v: t.v, a: this.a }
      }),
      (e.prototype.toHsvString = function () {
        var t = Ld(this.r, this.g, this.b),
          n = Math.round(t.h * 360),
          r = Math.round(t.s * 100),
          i = Math.round(t.v * 100)
        return this.a === 1
          ? 'hsv('.concat(n, ', ').concat(r, '%, ').concat(i, '%)')
          : 'hsva('
              .concat(n, ', ')
              .concat(r, '%, ')
              .concat(i, '%, ')
              .concat(this.roundA, ')')
      }),
      (e.prototype.toHsl = function () {
        var t = rv(this.r, this.g, this.b)
        return { h: t.h * 360, s: t.s, l: t.l, a: this.a }
      }),
      (e.prototype.toHslString = function () {
        var t = rv(this.r, this.g, this.b),
          n = Math.round(t.h * 360),
          r = Math.round(t.s * 100),
          i = Math.round(t.l * 100)
        return this.a === 1
          ? 'hsl('.concat(n, ', ').concat(r, '%, ').concat(i, '%)')
          : 'hsla('
              .concat(n, ', ')
              .concat(r, '%, ')
              .concat(i, '%, ')
              .concat(this.roundA, ')')
      }),
      (e.prototype.toHex = function (t) {
        return t === void 0 && (t = !1), Ad(this.r, this.g, this.b, t)
      }),
      (e.prototype.toHexString = function (t) {
        return t === void 0 && (t = !1), '#' + this.toHex(t)
      }),
      (e.prototype.toHex8 = function (t) {
        return t === void 0 && (t = !1), Jk(this.r, this.g, this.b, this.a, t)
      }),
      (e.prototype.toHex8String = function (t) {
        return t === void 0 && (t = !1), '#' + this.toHex8(t)
      }),
      (e.prototype.toHexShortString = function (t) {
        return (
          t === void 0 && (t = !1),
          this.a === 1 ? this.toHexString(t) : this.toHex8String(t)
        )
      }),
      (e.prototype.toRgb = function () {
        return {
          r: Math.round(this.r),
          g: Math.round(this.g),
          b: Math.round(this.b),
          a: this.a
        }
      }),
      (e.prototype.toRgbString = function () {
        var t = Math.round(this.r),
          n = Math.round(this.g),
          r = Math.round(this.b)
        return this.a === 1
          ? 'rgb('.concat(t, ', ').concat(n, ', ').concat(r, ')')
          : 'rgba('
              .concat(t, ', ')
              .concat(n, ', ')
              .concat(r, ', ')
              .concat(this.roundA, ')')
      }),
      (e.prototype.toPercentageRgb = function () {
        var t = function (n) {
          return ''.concat(Math.round(Ae(n, 255) * 100), '%')
        }
        return { r: t(this.r), g: t(this.g), b: t(this.b), a: this.a }
      }),
      (e.prototype.toPercentageRgbString = function () {
        var t = function (n) {
          return Math.round(Ae(n, 255) * 100)
        }
        return this.a === 1
          ? 'rgb('
              .concat(t(this.r), '%, ')
              .concat(t(this.g), '%, ')
              .concat(t(this.b), '%)')
          : 'rgba('
              .concat(t(this.r), '%, ')
              .concat(t(this.g), '%, ')
              .concat(t(this.b), '%, ')
              .concat(this.roundA, ')')
      }),
      (e.prototype.toName = function () {
        if (this.a === 0) return 'transparent'
        if (this.a < 1) return !1
        for (
          var t = '#' + Ad(this.r, this.g, this.b, !1),
            n = 0,
            r = Object.entries(Rd);
          n < r.length;
          n++
        ) {
          var i = r[n],
            o = i[0],
            a = i[1]
          if (t === a) return o
        }
        return !1
      }),
      (e.prototype.toString = function (t) {
        var n = !!t
        t = t ?? this.format
        var r = !1,
          i = this.a < 1 && this.a >= 0,
          o = !n && i && (t.startsWith('hex') || t === 'name')
        return o
          ? t === 'name' && this.a === 0
            ? this.toName()
            : this.toRgbString()
          : (t === 'rgb' && (r = this.toRgbString()),
            t === 'prgb' && (r = this.toPercentageRgbString()),
            (t === 'hex' || t === 'hex6') && (r = this.toHexString()),
            t === 'hex3' && (r = this.toHexString(!0)),
            t === 'hex4' && (r = this.toHex8String(!0)),
            t === 'hex8' && (r = this.toHex8String()),
            t === 'name' && (r = this.toName()),
            t === 'hsl' && (r = this.toHslString()),
            t === 'hsv' && (r = this.toHsvString()),
            r || this.toHexString())
      }),
      (e.prototype.toNumber = function () {
        return (
          (Math.round(this.r) << 16) +
          (Math.round(this.g) << 8) +
          Math.round(this.b)
        )
      }),
      (e.prototype.clone = function () {
        return new e(this.toString())
      }),
      (e.prototype.lighten = function (t) {
        t === void 0 && (t = 10)
        var n = this.toHsl()
        return (n.l += t / 100), (n.l = Ja(n.l)), new e(n)
      }),
      (e.prototype.brighten = function (t) {
        t === void 0 && (t = 10)
        var n = this.toRgb()
        return (
          (n.r = Math.max(
            0,
            Math.min(255, n.r - Math.round(255 * -(t / 100)))
          )),
          (n.g = Math.max(
            0,
            Math.min(255, n.g - Math.round(255 * -(t / 100)))
          )),
          (n.b = Math.max(
            0,
            Math.min(255, n.b - Math.round(255 * -(t / 100)))
          )),
          new e(n)
        )
      }),
      (e.prototype.darken = function (t) {
        t === void 0 && (t = 10)
        var n = this.toHsl()
        return (n.l -= t / 100), (n.l = Ja(n.l)), new e(n)
      }),
      (e.prototype.tint = function (t) {
        return t === void 0 && (t = 10), this.mix('white', t)
      }),
      (e.prototype.shade = function (t) {
        return t === void 0 && (t = 10), this.mix('black', t)
      }),
      (e.prototype.desaturate = function (t) {
        t === void 0 && (t = 10)
        var n = this.toHsl()
        return (n.s -= t / 100), (n.s = Ja(n.s)), new e(n)
      }),
      (e.prototype.saturate = function (t) {
        t === void 0 && (t = 10)
        var n = this.toHsl()
        return (n.s += t / 100), (n.s = Ja(n.s)), new e(n)
      }),
      (e.prototype.greyscale = function () {
        return this.desaturate(100)
      }),
      (e.prototype.spin = function (t) {
        var n = this.toHsl(),
          r = (n.h + t) % 360
        return (n.h = r < 0 ? 360 + r : r), new e(n)
      }),
      (e.prototype.mix = function (t, n) {
        n === void 0 && (n = 50)
        var r = this.toRgb(),
          i = new e(t).toRgb(),
          o = n / 100,
          a = {
            r: (i.r - r.r) * o + r.r,
            g: (i.g - r.g) * o + r.g,
            b: (i.b - r.b) * o + r.b,
            a: (i.a - r.a) * o + r.a
          }
        return new e(a)
      }),
      (e.prototype.analogous = function (t, n) {
        t === void 0 && (t = 6), n === void 0 && (n = 30)
        var r = this.toHsl(),
          i = 360 / n,
          o = [this]
        for (r.h = (r.h - ((i * t) >> 1) + 720) % 360; --t; )
          (r.h = (r.h + i) % 360), o.push(new e(r))
        return o
      }),
      (e.prototype.complement = function () {
        var t = this.toHsl()
        return (t.h = (t.h + 180) % 360), new e(t)
      }),
      (e.prototype.monochromatic = function (t) {
        t === void 0 && (t = 6)
        for (
          var n = this.toHsv(), r = n.h, i = n.s, o = n.v, a = [], s = 1 / t;
          t--;

        )
          a.push(new e({ h: r, s: i, v: o })), (o = (o + s) % 1)
        return a
      }),
      (e.prototype.splitcomplement = function () {
        var t = this.toHsl(),
          n = t.h
        return [
          this,
          new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
          new e({ h: (n + 216) % 360, s: t.s, l: t.l })
        ]
      }),
      (e.prototype.onBackground = function (t) {
        var n = this.toRgb(),
          r = new e(t).toRgb(),
          i = n.a + r.a * (1 - n.a)
        return new e({
          r: (n.r * n.a + r.r * r.a * (1 - n.a)) / i,
          g: (n.g * n.a + r.g * r.a * (1 - n.a)) / i,
          b: (n.b * n.a + r.b * r.a * (1 - n.a)) / i,
          a: i
        })
      }),
      (e.prototype.triad = function () {
        return this.polyad(3)
      }),
      (e.prototype.tetrad = function () {
        return this.polyad(4)
      }),
      (e.prototype.polyad = function (t) {
        for (
          var n = this.toHsl(), r = n.h, i = [this], o = 360 / t, a = 1;
          a < t;
          a++
        )
          i.push(new e({ h: (r + a * o) % 360, s: n.s, l: n.l }))
        return i
      }),
      (e.prototype.equals = function (t) {
        return this.toRgbString() === new e(t).toRgbString()
      }),
      e
    )
  })(),
  ts = 2,
  ov = 0.16,
  o8 = 0.05,
  a8 = 0.05,
  s8 = 0.15,
  Ay = 5,
  Ry = 4,
  l8 = [
    { index: 7, opacity: 0.15 },
    { index: 6, opacity: 0.25 },
    { index: 5, opacity: 0.3 },
    { index: 5, opacity: 0.45 },
    { index: 5, opacity: 0.65 },
    { index: 5, opacity: 0.85 },
    { index: 4, opacity: 0.9 },
    { index: 3, opacity: 0.95 },
    { index: 2, opacity: 0.97 },
    { index: 1, opacity: 0.98 }
  ]
function av(e) {
  var t = e.r,
    n = e.g,
    r = e.b,
    i = Ld(t, n, r)
  return { h: i.h * 360, s: i.s, v: i.v }
}
function ns(e) {
  var t = e.r,
    n = e.g,
    r = e.b
  return '#'.concat(Ad(t, n, r, !1))
}
function u8(e, t, n) {
  var r = n / 100,
    i = {
      r: (t.r - e.r) * r + e.r,
      g: (t.g - e.g) * r + e.g,
      b: (t.b - e.b) * r + e.b
    }
  return i
}
function sv(e, t, n) {
  var r
  return (
    Math.round(e.h) >= 60 && Math.round(e.h) <= 240
      ? (r = n ? Math.round(e.h) - ts * t : Math.round(e.h) + ts * t)
      : (r = n ? Math.round(e.h) + ts * t : Math.round(e.h) - ts * t),
    r < 0 ? (r += 360) : r >= 360 && (r -= 360),
    r
  )
}
function lv(e, t, n) {
  if (e.h === 0 && e.s === 0) return e.s
  var r
  return (
    n ? (r = e.s - ov * t) : t === Ry ? (r = e.s + ov) : (r = e.s + o8 * t),
    r > 1 && (r = 1),
    n && t === Ay && r > 0.1 && (r = 0.1),
    r < 0.06 && (r = 0.06),
    Number(r.toFixed(2))
  )
}
function uv(e, t, n) {
  var r
  return (
    n ? (r = e.v + a8 * t) : (r = e.v - s8 * t),
    r > 1 && (r = 1),
    Number(r.toFixed(2))
  )
}
function dl(e) {
  for (
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = [],
      r = Zr(e),
      i = Ay;
    i > 0;
    i -= 1
  ) {
    var o = av(r),
      a = ns(Zr({ h: sv(o, i, !0), s: lv(o, i, !0), v: uv(o, i, !0) }))
    n.push(a)
  }
  n.push(ns(r))
  for (var s = 1; s <= Ry; s += 1) {
    var l = av(r),
      u = ns(Zr({ h: sv(l, s), s: lv(l, s), v: uv(l, s) }))
    n.push(u)
  }
  return t.theme === 'dark'
    ? l8.map(function (c) {
        var f = c.index,
          d = c.opacity,
          g = ns(u8(Zr(t.backgroundColor || '#141414'), Zr(n[f]), d * 100))
        return g
      })
    : n
}
var ec = {
    red: '#F5222D',
    volcano: '#FA541C',
    orange: '#FA8C16',
    gold: '#FAAD14',
    yellow: '#FADB14',
    lime: '#A0D911',
    green: '#52C41A',
    cyan: '#13C2C2',
    blue: '#1677FF',
    geekblue: '#2F54EB',
    purple: '#722ED1',
    magenta: '#EB2F96',
    grey: '#666666'
  },
  Id = [
    '#fff1f0',
    '#ffccc7',
    '#ffa39e',
    '#ff7875',
    '#ff4d4f',
    '#f5222d',
    '#cf1322',
    '#a8071a',
    '#820014',
    '#5c0011'
  ]
Id.primary = Id[5]
var Fd = [
  '#fff2e8',
  '#ffd8bf',
  '#ffbb96',
  '#ff9c6e',
  '#ff7a45',
  '#fa541c',
  '#d4380d',
  '#ad2102',
  '#871400',
  '#610b00'
]
Fd.primary = Fd[5]
var $d = [
  '#fff7e6',
  '#ffe7ba',
  '#ffd591',
  '#ffc069',
  '#ffa940',
  '#fa8c16',
  '#d46b08',
  '#ad4e00',
  '#873800',
  '#612500'
]
$d.primary = $d[5]
var Dd = [
  '#fffbe6',
  '#fff1b8',
  '#ffe58f',
  '#ffd666',
  '#ffc53d',
  '#faad14',
  '#d48806',
  '#ad6800',
  '#874d00',
  '#613400'
]
Dd.primary = Dd[5]
var zd = [
  '#feffe6',
  '#ffffb8',
  '#fffb8f',
  '#fff566',
  '#ffec3d',
  '#fadb14',
  '#d4b106',
  '#ad8b00',
  '#876800',
  '#614700'
]
zd.primary = zd[5]
var Vd = [
  '#fcffe6',
  '#f4ffb8',
  '#eaff8f',
  '#d3f261',
  '#bae637',
  '#a0d911',
  '#7cb305',
  '#5b8c00',
  '#3f6600',
  '#254000'
]
Vd.primary = Vd[5]
var Bd = [
  '#f6ffed',
  '#d9f7be',
  '#b7eb8f',
  '#95de64',
  '#73d13d',
  '#52c41a',
  '#389e0d',
  '#237804',
  '#135200',
  '#092b00'
]
Bd.primary = Bd[5]
var Hd = [
  '#e6fffb',
  '#b5f5ec',
  '#87e8de',
  '#5cdbd3',
  '#36cfc9',
  '#13c2c2',
  '#08979c',
  '#006d75',
  '#00474f',
  '#002329'
]
Hd.primary = Hd[5]
var qd = [
  '#e6f4ff',
  '#bae0ff',
  '#91caff',
  '#69b1ff',
  '#4096ff',
  '#1677ff',
  '#0958d9',
  '#003eb3',
  '#002c8c',
  '#001d66'
]
qd.primary = qd[5]
var Wd = [
  '#f0f5ff',
  '#d6e4ff',
  '#adc6ff',
  '#85a5ff',
  '#597ef7',
  '#2f54eb',
  '#1d39c4',
  '#10239e',
  '#061178',
  '#030852'
]
Wd.primary = Wd[5]
var Ud = [
  '#f9f0ff',
  '#efdbff',
  '#d3adf7',
  '#b37feb',
  '#9254de',
  '#722ed1',
  '#531dab',
  '#391085',
  '#22075e',
  '#120338'
]
Ud.primary = Ud[5]
var Gd = [
  '#fff0f6',
  '#ffd6e7',
  '#ffadd2',
  '#ff85c0',
  '#f759ab',
  '#eb2f96',
  '#c41d7f',
  '#9e1068',
  '#780650',
  '#520339'
]
Gd.primary = Gd[5]
var Qd = [
  '#a6a6a6',
  '#999999',
  '#8c8c8c',
  '#808080',
  '#737373',
  '#666666',
  '#404040',
  '#1a1a1a',
  '#000000',
  '#000000'
]
Qd.primary = Qd[5]
var tc = {
  red: Id,
  volcano: Fd,
  orange: $d,
  gold: Dd,
  yellow: zd,
  lime: Vd,
  green: Bd,
  cyan: Hd,
  blue: qd,
  geekblue: Wd,
  purple: Ud,
  magenta: Gd,
  grey: Qd
}
const Iy = {
    blue: '#1677FF',
    purple: '#722ED1',
    cyan: '#13C2C2',
    green: '#52C41A',
    magenta: '#EB2F96',
    pink: '#EB2F96',
    red: '#F5222D',
    orange: '#FA8C16',
    yellow: '#FADB14',
    volcano: '#FA541C',
    geekblue: '#2F54EB',
    gold: '#FAAD14',
    lime: '#A0D911'
  },
  aa = Object.assign(Object.assign({}, Iy), {
    colorPrimary: '#1677ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    colorInfo: '#1677ff',
    colorLink: '',
    colorTextBase: '',
    colorBgBase: '',
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
    fontFamilyCode:
      "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    fontSize: 14,
    lineWidth: 1,
    lineType: 'solid',
    motionUnit: 0.1,
    motionBase: 0,
    motionEaseOutCirc: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
    motionEaseInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
    motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    motionEaseOutBack: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
    motionEaseInBack: 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
    motionEaseInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    motionEaseOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
    borderRadius: 6,
    sizeUnit: 4,
    sizeStep: 4,
    sizePopupArrow: 16,
    controlHeight: 32,
    zIndexBase: 0,
    zIndexPopupBase: 1e3,
    opacityImage: 1,
    wireframe: !1,
    motion: !0
  })
function c8(e, t) {
  let { generateColorPalettes: n, generateNeutralColorPalettes: r } = t
  const {
      colorSuccess: i,
      colorWarning: o,
      colorError: a,
      colorInfo: s,
      colorPrimary: l,
      colorBgBase: u,
      colorTextBase: c
    } = e,
    f = n(l),
    d = n(i),
    g = n(o),
    y = n(a),
    _ = n(s),
    x = r(u, c),
    v = e.colorLink || e.colorInfo,
    p = n(v),
    m = new qe(y[1]).mix(new qe(y[3]), 50).toHexString()
  return Object.assign(Object.assign({}, x), {
    colorPrimaryBg: f[1],
    colorPrimaryBgHover: f[2],
    colorPrimaryBorder: f[3],
    colorPrimaryBorderHover: f[4],
    colorPrimaryHover: f[5],
    colorPrimary: f[6],
    colorPrimaryActive: f[7],
    colorPrimaryTextHover: f[8],
    colorPrimaryText: f[9],
    colorPrimaryTextActive: f[10],
    colorSuccessBg: d[1],
    colorSuccessBgHover: d[2],
    colorSuccessBorder: d[3],
    colorSuccessBorderHover: d[4],
    colorSuccessHover: d[4],
    colorSuccess: d[6],
    colorSuccessActive: d[7],
    colorSuccessTextHover: d[8],
    colorSuccessText: d[9],
    colorSuccessTextActive: d[10],
    colorErrorBg: y[1],
    colorErrorBgHover: y[2],
    colorErrorBgFilledHover: m,
    colorErrorBgActive: y[3],
    colorErrorBorder: y[3],
    colorErrorBorderHover: y[4],
    colorErrorHover: y[5],
    colorError: y[6],
    colorErrorActive: y[7],
    colorErrorTextHover: y[8],
    colorErrorText: y[9],
    colorErrorTextActive: y[10],
    colorWarningBg: g[1],
    colorWarningBgHover: g[2],
    colorWarningBorder: g[3],
    colorWarningBorderHover: g[4],
    colorWarningHover: g[4],
    colorWarning: g[6],
    colorWarningActive: g[7],
    colorWarningTextHover: g[8],
    colorWarningText: g[9],
    colorWarningTextActive: g[10],
    colorInfoBg: _[1],
    colorInfoBgHover: _[2],
    colorInfoBorder: _[3],
    colorInfoBorderHover: _[4],
    colorInfoHover: _[4],
    colorInfo: _[6],
    colorInfoActive: _[7],
    colorInfoTextHover: _[8],
    colorInfoText: _[9],
    colorInfoTextActive: _[10],
    colorLinkHover: p[4],
    colorLink: p[6],
    colorLinkActive: p[7],
    colorBgMask: new qe('#000').setAlpha(0.45).toRgbString(),
    colorWhite: '#fff'
  })
}
const d8 = (e) => {
  let t = e,
    n = e,
    r = e,
    i = e
  return (
    e < 6 && e >= 5
      ? (t = e + 1)
      : e < 16 && e >= 6
      ? (t = e + 2)
      : e >= 16 && (t = 16),
    e < 7 && e >= 5
      ? (n = 4)
      : e < 8 && e >= 7
      ? (n = 5)
      : e < 14 && e >= 8
      ? (n = 6)
      : e < 16 && e >= 14
      ? (n = 7)
      : e >= 16 && (n = 8),
    e < 6 && e >= 2 ? (r = 1) : e >= 6 && (r = 2),
    e > 4 && e < 8 ? (i = 4) : e >= 8 && (i = 6),
    {
      borderRadius: e,
      borderRadiusXS: r,
      borderRadiusSM: n,
      borderRadiusLG: t,
      borderRadiusOuter: i
    }
  )
}
function f8(e) {
  const { motionUnit: t, motionBase: n, borderRadius: r, lineWidth: i } = e
  return Object.assign(
    {
      motionDurationFast: `${(n + t).toFixed(1)}s`,
      motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
      motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
      lineWidthBold: i + 1
    },
    d8(r)
  )
}
const p8 = (e) => {
  const { controlHeight: t } = e
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  }
}
function h8(e) {
  return (e + 8) / e
}
function m8(e) {
  const t = new Array(10).fill(null).map((n, r) => {
    const i = r - 1,
      o = e * Math.pow(Math.E, i / 5),
      a = r > 1 ? Math.floor(o) : Math.ceil(o)
    return Math.floor(a / 2) * 2
  })
  return (t[1] = e), t.map((n) => ({ size: n, lineHeight: h8(n) }))
}
const v8 = (e) => {
  const t = m8(e),
    n = t.map((c) => c.size),
    r = t.map((c) => c.lineHeight),
    i = n[1],
    o = n[0],
    a = n[2],
    s = r[1],
    l = r[0],
    u = r[2]
  return {
    fontSizeSM: o,
    fontSize: i,
    fontSizeLG: a,
    fontSizeXL: n[3],
    fontSizeHeading1: n[6],
    fontSizeHeading2: n[5],
    fontSizeHeading3: n[4],
    fontSizeHeading4: n[3],
    fontSizeHeading5: n[2],
    lineHeight: s,
    lineHeightLG: u,
    lineHeightSM: l,
    fontHeight: Math.round(s * i),
    fontHeightLG: Math.round(u * a),
    fontHeightSM: Math.round(l * o),
    lineHeightHeading1: r[6],
    lineHeightHeading2: r[5],
    lineHeightHeading3: r[4],
    lineHeightHeading4: r[3],
    lineHeightHeading5: r[2]
  }
}
function g8(e) {
  const { sizeUnit: t, sizeStep: n } = e
  return {
    sizeXXL: t * (n + 8),
    sizeXL: t * (n + 4),
    sizeLG: t * (n + 2),
    sizeMD: t * (n + 1),
    sizeMS: t * n,
    size: t * n,
    sizeSM: t * (n - 1),
    sizeXS: t * (n - 2),
    sizeXXS: t * (n - 3)
  }
}
const yt = (e, t) => new qe(e).setAlpha(t).toRgbString(),
  oo = (e, t) => new qe(e).darken(t).toHexString(),
  y8 = (e) => {
    const t = dl(e)
    return {
      1: t[0],
      2: t[1],
      3: t[2],
      4: t[3],
      5: t[4],
      6: t[5],
      7: t[6],
      8: t[4],
      9: t[5],
      10: t[6]
    }
  },
  _8 = (e, t) => {
    const n = e || '#fff',
      r = t || '#000'
    return {
      colorBgBase: n,
      colorTextBase: r,
      colorText: yt(r, 0.88),
      colorTextSecondary: yt(r, 0.65),
      colorTextTertiary: yt(r, 0.45),
      colorTextQuaternary: yt(r, 0.25),
      colorFill: yt(r, 0.15),
      colorFillSecondary: yt(r, 0.06),
      colorFillTertiary: yt(r, 0.04),
      colorFillQuaternary: yt(r, 0.02),
      colorBgSolid: yt(r, 1),
      colorBgSolidHover: yt(r, 0.75),
      colorBgSolidActive: yt(r, 0.95),
      colorBgLayout: oo(n, 4),
      colorBgContainer: oo(n, 0),
      colorBgElevated: oo(n, 0),
      colorBgSpotlight: yt(r, 0.85),
      colorBgBlur: 'transparent',
      colorBorder: oo(n, 15),
      colorBorderSecondary: oo(n, 6)
    }
  }
function w8(e) {
  ;(ec.pink = ec.magenta), (tc.pink = tc.magenta)
  const t = Object.keys(Iy)
    .map((n) => {
      const r = e[n] === ec[n] ? tc[n] : dl(e[n])
      return new Array(10)
        .fill(1)
        .reduce(
          (i, o, a) => (
            (i[`${n}-${a + 1}`] = r[a]), (i[`${n}${a + 1}`] = r[a]), i
          ),
          {}
        )
    })
    .reduce((n, r) => ((n = Object.assign(Object.assign({}, n), r)), n), {})
  return Object.assign(
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(Object.assign({}, e), t),
            c8(e, {
              generateColorPalettes: y8,
              generateNeutralColorPalettes: _8
            })
          ),
          v8(e.fontSize)
        ),
        g8(e)
      ),
      p8(e)
    ),
    f8(e)
  )
}
const Fy = jd(w8),
  Kd = { token: aa, override: { override: aa }, hashed: !0 },
  $y = te.createContext(Kd),
  fl = 'ant',
  Lp = 'anticon',
  x8 = (e, t) => t || (e ? `${fl}-${e}` : fl),
  kn = j.createContext({ getPrefixCls: x8, iconPrefixCls: Lp }),
  b8 = `-ant-${Date.now()}-${Math.random()}`
function S8(e, t) {
  const n = {},
    r = (a, s) => {
      let l = a.clone()
      return (l = (s == null ? void 0 : s(l)) || l), l.toRgbString()
    },
    i = (a, s) => {
      const l = new qe(a),
        u = dl(l.toRgbString())
      ;(n[`${s}-color`] = r(l)),
        (n[`${s}-color-disabled`] = u[1]),
        (n[`${s}-color-hover`] = u[4]),
        (n[`${s}-color-active`] = u[6]),
        (n[`${s}-color-outline`] = l.clone().setAlpha(0.2).toRgbString()),
        (n[`${s}-color-deprecated-bg`] = u[0]),
        (n[`${s}-color-deprecated-border`] = u[2])
    }
  if (t.primaryColor) {
    i(t.primaryColor, 'primary')
    const a = new qe(t.primaryColor),
      s = dl(a.toRgbString())
    s.forEach((u, c) => {
      n[`primary-${c + 1}`] = u
    }),
      (n['primary-color-deprecated-l-35'] = r(a, (u) => u.lighten(35))),
      (n['primary-color-deprecated-l-20'] = r(a, (u) => u.lighten(20))),
      (n['primary-color-deprecated-t-20'] = r(a, (u) => u.tint(20))),
      (n['primary-color-deprecated-t-50'] = r(a, (u) => u.tint(50))),
      (n['primary-color-deprecated-f-12'] = r(a, (u) =>
        u.setAlpha(u.getAlpha() * 0.12)
      ))
    const l = new qe(s[0])
    ;(n['primary-color-active-deprecated-f-30'] = r(l, (u) =>
      u.setAlpha(u.getAlpha() * 0.3)
    )),
      (n['primary-color-active-deprecated-d-02'] = r(l, (u) => u.darken(2)))
  }
  return (
    t.successColor && i(t.successColor, 'success'),
    t.warningColor && i(t.warningColor, 'warning'),
    t.errorColor && i(t.errorColor, 'error'),
    t.infoColor && i(t.infoColor, 'info'),
    `
  :root {
    ${Object.keys(n).map((a) => `--${e}-${a}: ${n[a]};`).join(`
`)}
  }
  `.trim()
  )
}
function C8(e, t) {
  const n = S8(e, t)
  Pn() && bi(n, `${b8}-dynamic-theme`)
}
const pl = j.createContext(!1),
  E8 = (e) => {
    let { children: t, disabled: n } = e
    const r = j.useContext(pl)
    return j.createElement(pl.Provider, { value: n ?? r }, t)
  },
  sa = j.createContext(void 0),
  T8 = (e) => {
    let { children: t, size: n } = e
    const r = j.useContext(sa)
    return j.createElement(sa.Provider, { value: n || r }, t)
  }
function k8() {
  const e = j.useContext(pl),
    t = j.useContext(sa)
  return { componentDisabled: e, componentSize: t }
}
var Dy = nt(function e() {
    tt(this, e)
  }),
  zy = 'CALC_UNIT',
  j8 = new RegExp(zy, 'g')
function nc(e) {
  return typeof e == 'number' ? ''.concat(e).concat(zy) : e
}
var P8 = (function (e) {
    zi(n, e)
    var t = Vi(n)
    function n(r, i) {
      var o
      tt(this, n),
        (o = t.call(this)),
        D(Y(o), 'result', ''),
        D(Y(o), 'unitlessCssVar', void 0),
        D(Y(o), 'lowPriority', void 0)
      var a = X(r)
      return (
        (o.unitlessCssVar = i),
        r instanceof n
          ? (o.result = '('.concat(r.result, ')'))
          : a === 'number'
          ? (o.result = nc(r))
          : a === 'string' && (o.result = r),
        o
      )
    }
    return (
      nt(n, [
        {
          key: 'add',
          value: function (i) {
            return (
              i instanceof n
                ? (this.result = ''
                    .concat(this.result, ' + ')
                    .concat(i.getResult()))
                : (typeof i == 'number' || typeof i == 'string') &&
                  (this.result = ''.concat(this.result, ' + ').concat(nc(i))),
              (this.lowPriority = !0),
              this
            )
          }
        },
        {
          key: 'sub',
          value: function (i) {
            return (
              i instanceof n
                ? (this.result = ''
                    .concat(this.result, ' - ')
                    .concat(i.getResult()))
                : (typeof i == 'number' || typeof i == 'string') &&
                  (this.result = ''.concat(this.result, ' - ').concat(nc(i))),
              (this.lowPriority = !0),
              this
            )
          }
        },
        {
          key: 'mul',
          value: function (i) {
            return (
              this.lowPriority && (this.result = '('.concat(this.result, ')')),
              i instanceof n
                ? (this.result = ''
                    .concat(this.result, ' * ')
                    .concat(i.getResult(!0)))
                : (typeof i == 'number' || typeof i == 'string') &&
                  (this.result = ''.concat(this.result, ' * ').concat(i)),
              (this.lowPriority = !1),
              this
            )
          }
        },
        {
          key: 'div',
          value: function (i) {
            return (
              this.lowPriority && (this.result = '('.concat(this.result, ')')),
              i instanceof n
                ? (this.result = ''
                    .concat(this.result, ' / ')
                    .concat(i.getResult(!0)))
                : (typeof i == 'number' || typeof i == 'string') &&
                  (this.result = ''.concat(this.result, ' / ').concat(i)),
              (this.lowPriority = !1),
              this
            )
          }
        },
        {
          key: 'getResult',
          value: function (i) {
            return this.lowPriority || i
              ? '('.concat(this.result, ')')
              : this.result
          }
        },
        {
          key: 'equal',
          value: function (i) {
            var o = this,
              a = i || {},
              s = a.unit,
              l = !0
            return (
              typeof s == 'boolean'
                ? (l = s)
                : Array.from(this.unitlessCssVar).some(function (u) {
                    return o.result.includes(u)
                  }) && (l = !1),
              (this.result = this.result.replace(j8, l ? 'px' : '')),
              typeof this.lowPriority < 'u'
                ? 'calc('.concat(this.result, ')')
                : this.result
            )
          }
        }
      ]),
      n
    )
  })(Dy),
  M8 = (function (e) {
    zi(n, e)
    var t = Vi(n)
    function n(r) {
      var i
      return (
        tt(this, n),
        (i = t.call(this)),
        D(Y(i), 'result', 0),
        r instanceof n
          ? (i.result = r.result)
          : typeof r == 'number' && (i.result = r),
        i
      )
    }
    return (
      nt(n, [
        {
          key: 'add',
          value: function (i) {
            return (
              i instanceof n
                ? (this.result += i.result)
                : typeof i == 'number' && (this.result += i),
              this
            )
          }
        },
        {
          key: 'sub',
          value: function (i) {
            return (
              i instanceof n
                ? (this.result -= i.result)
                : typeof i == 'number' && (this.result -= i),
              this
            )
          }
        },
        {
          key: 'mul',
          value: function (i) {
            return (
              i instanceof n
                ? (this.result *= i.result)
                : typeof i == 'number' && (this.result *= i),
              this
            )
          }
        },
        {
          key: 'div',
          value: function (i) {
            return (
              i instanceof n
                ? (this.result /= i.result)
                : typeof i == 'number' && (this.result /= i),
              this
            )
          }
        },
        {
          key: 'equal',
          value: function () {
            return this.result
          }
        }
      ]),
      n
    )
  })(Dy),
  N8 = function (t, n) {
    var r = t === 'css' ? P8 : M8
    return function (i) {
      return new r(i, n)
    }
  },
  cv = function (t, n) {
    return ''.concat(
      [
        n,
        t
          .replace(/([A-Z]+)([A-Z][a-z]+)/g, '$1-$2')
          .replace(/([a-z])([A-Z])/g, '$1-$2')
      ]
        .filter(Boolean)
        .join('-')
    )
  }
function Ri(e) {
  var t = j.useRef()
  t.current = e
  var n = j.useCallback(function () {
    for (var r, i = arguments.length, o = new Array(i), a = 0; a < i; a++)
      o[a] = arguments[a]
    return (r = t.current) === null || r === void 0
      ? void 0
      : r.call.apply(r, [t].concat(o))
  }, [])
  return n
}
function la(e) {
  var t = j.useRef(!1),
    n = j.useState(e),
    r = K(n, 2),
    i = r[0],
    o = r[1]
  j.useEffect(function () {
    return (
      (t.current = !1),
      function () {
        t.current = !0
      }
    )
  }, [])
  function a(s, l) {
    ;(l && t.current) || o(s)
  }
  return [i, a]
}
function rc(e) {
  return e !== void 0
}
function O8(e, t) {
  var n = t || {},
    r = n.defaultValue,
    i = n.value,
    o = n.onChange,
    a = n.postState,
    s = la(function () {
      return rc(i)
        ? i
        : rc(r)
        ? typeof r == 'function'
          ? r()
          : r
        : typeof e == 'function'
        ? e()
        : e
    }),
    l = K(s, 2),
    u = l[0],
    c = l[1],
    f = i !== void 0 ? i : u,
    d = a ? a(f) : f,
    g = Ri(o),
    y = la([f]),
    _ = K(y, 2),
    x = _[0],
    v = _[1]
  Qm(
    function () {
      var m = x[0]
      u !== m && g(u, m)
    },
    [x]
  ),
    Qm(
      function () {
        rc(i) || c(i)
      },
      [i]
    )
  var p = Ri(function (m, w) {
    c(m, w), v([f], w)
  })
  return [d, p]
}
function dv(e, t, n, r) {
  var i = B({}, t[e])
  if (r != null && r.deprecatedTokens) {
    var o = r.deprecatedTokens
    o.forEach(function (s) {
      var l = K(s, 2),
        u = l[0],
        c = l[1]
      if ((i != null && i[u]) || (i != null && i[c])) {
        var f
        ;((f = i[c]) !== null && f !== void 0) ||
          (i[c] = i == null ? void 0 : i[u])
      }
    })
  }
  var a = B(B({}, n), i)
  return (
    Object.keys(a).forEach(function (s) {
      a[s] === t[s] && delete a[s]
    }),
    a
  )
}
var Vy = typeof CSSINJS_STATISTIC < 'u',
  Xd = !0
function Ap() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n]
  if (!Vy) return Object.assign.apply(Object, [{}].concat(t))
  Xd = !1
  var r = {}
  return (
    t.forEach(function (i) {
      if (X(i) === 'object') {
        var o = Object.keys(i)
        o.forEach(function (a) {
          Object.defineProperty(r, a, {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return i[a]
            }
          })
        })
      }
    }),
    (Xd = !0),
    r
  )
}
var fv = {}
function L8() {}
var A8 = function (t) {
  var n,
    r = t,
    i = L8
  return (
    Vy &&
      typeof Proxy < 'u' &&
      ((n = new Set()),
      (r = new Proxy(t, {
        get: function (a, s) {
          if (Xd) {
            var l
            ;(l = n) === null || l === void 0 || l.add(s)
          }
          return a[s]
        }
      })),
      (i = function (a, s) {
        var l
        fv[a] = {
          global: Array.from(n),
          component: B(
            B({}, (l = fv[a]) === null || l === void 0 ? void 0 : l.component),
            s
          )
        }
      })),
    { token: r, keys: n, flush: i }
  )
}
function pv(e, t, n) {
  if (typeof n == 'function') {
    var r
    return n(Ap(t, (r = t[e]) !== null && r !== void 0 ? r : {}))
  }
  return n ?? {}
}
function R8(e) {
  return e === 'js'
    ? { max: Math.max, min: Math.min }
    : {
        max: function () {
          for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
            r[i] = arguments[i]
          return 'max('.concat(
            r
              .map(function (o) {
                return ra(o)
              })
              .join(','),
            ')'
          )
        },
        min: function () {
          for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
            r[i] = arguments[i]
          return 'min('.concat(
            r
              .map(function (o) {
                return ra(o)
              })
              .join(','),
            ')'
          )
        }
      }
}
var I8 = 1e3 * 60 * 10,
  F8 = (function () {
    function e() {
      tt(this, e),
        D(this, 'map', new Map()),
        D(this, 'objectIDMap', new WeakMap()),
        D(this, 'nextID', 0),
        D(this, 'lastAccessBeat', new Map()),
        D(this, 'accessBeat', 0)
    }
    return (
      nt(e, [
        {
          key: 'set',
          value: function (n, r) {
            this.clear()
            var i = this.getCompositeKey(n)
            this.map.set(i, r), this.lastAccessBeat.set(i, Date.now())
          }
        },
        {
          key: 'get',
          value: function (n) {
            var r = this.getCompositeKey(n),
              i = this.map.get(r)
            return (
              this.lastAccessBeat.set(r, Date.now()), (this.accessBeat += 1), i
            )
          }
        },
        {
          key: 'getCompositeKey',
          value: function (n) {
            var r = this,
              i = n.map(function (o) {
                return o && X(o) === 'object'
                  ? 'obj_'.concat(r.getObjectID(o))
                  : ''.concat(X(o), '_').concat(o)
              })
            return i.join('|')
          }
        },
        {
          key: 'getObjectID',
          value: function (n) {
            if (this.objectIDMap.has(n)) return this.objectIDMap.get(n)
            var r = this.nextID
            return this.objectIDMap.set(n, r), (this.nextID += 1), r
          }
        },
        {
          key: 'clear',
          value: function () {
            var n = this
            if (this.accessBeat > 1e4) {
              var r = Date.now()
              this.lastAccessBeat.forEach(function (i, o) {
                r - i > I8 && (n.map.delete(o), n.lastAccessBeat.delete(o))
              }),
                (this.accessBeat = 0)
            }
          }
        }
      ]),
      e
    )
  })(),
  hv = new F8()
function $8(e, t) {
  return te.useMemo(function () {
    var n = hv.get(t)
    if (n) return n
    var r = e()
    return hv.set(t, r), r
  }, t)
}
var D8 = function () {
  return {}
}
function z8(e) {
  var t = e.useCSP,
    n = t === void 0 ? D8 : t,
    r = e.useToken,
    i = e.usePrefix,
    o = e.getResetStyles,
    a = e.getCommonStyle,
    s = e.getCompUnitless
  function l(d, g, y, _) {
    var x = Array.isArray(d) ? d[0] : d
    function v(E) {
      return ''
        .concat(String(x))
        .concat(E.slice(0, 1).toUpperCase())
        .concat(E.slice(1))
    }
    var p = (_ == null ? void 0 : _.unitless) || {},
      m = typeof s == 'function' ? s(d) : {},
      w = B(B({}, m), {}, D({}, v('zIndexPopup'), !0))
    Object.keys(p).forEach(function (E) {
      w[v(E)] = p[E]
    })
    var b = B(B({}, _), {}, { unitless: w, prefixToken: v }),
      C = c(d, g, y, b),
      S = u(x, y, b)
    return function (E) {
      var T =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : E,
        k = C(E, T),
        M = K(k, 2),
        L = M[1],
        O = S(T),
        A = K(O, 2),
        z = A[0],
        R = A[1]
      return [z, L, R]
    }
  }
  function u(d, g, y) {
    var _ = y.unitless,
      x = y.injectStyle,
      v = x === void 0 ? !0 : x,
      p = y.prefixToken,
      m = y.ignore,
      w = function (S) {
        var E = S.rootCls,
          T = S.cssVar,
          k = T === void 0 ? {} : T,
          M = r(),
          L = M.realToken
        return (
          Ak(
            {
              path: [d],
              prefix: k.prefix,
              key: k.key,
              unitless: _,
              ignore: m,
              token: L,
              scope: E
            },
            function () {
              var O = pv(d, L, g),
                A = dv(d, L, O, {
                  deprecatedTokens: y == null ? void 0 : y.deprecatedTokens
                })
              return (
                Object.keys(O).forEach(function (z) {
                  ;(A[p(z)] = A[z]), delete A[z]
                }),
                A
              )
            }
          ),
          null
        )
      },
      b = function (S) {
        var E = r(),
          T = E.cssVar
        return [
          function (k) {
            return v && T
              ? te.createElement(
                  te.Fragment,
                  null,
                  te.createElement(w, { rootCls: S, cssVar: T, component: d }),
                  k
                )
              : k
          },
          T == null ? void 0 : T.key
        ]
      }
    return b
  }
  function c(d, g, y) {
    var _ = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
      x = Array.isArray(d) ? d : [d, d],
      v = K(x, 1),
      p = v[0],
      m = x.join('-'),
      w = e.layer || { name: 'antd' }
    return function (b) {
      var C =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : b,
        S = r(),
        E = S.theme,
        T = S.realToken,
        k = S.hashId,
        M = S.token,
        L = S.cssVar,
        O = i(),
        A = O.rootPrefixCls,
        z = O.iconPrefixCls,
        R = n(),
        I = L ? 'css' : 'js',
        N = $8(
          function () {
            var U = new Set()
            return (
              L &&
                Object.keys(_.unitless || {}).forEach(function (Z) {
                  U.add(Es(Z, L.prefix)), U.add(Es(Z, cv(p, L.prefix)))
                }),
              N8(I, U)
            )
          },
          [I, p, L == null ? void 0 : L.prefix]
        ),
        F = R8(I),
        $ = F.max,
        V = F.min,
        q = {
          theme: E,
          token: M,
          hashId: k,
          nonce: function () {
            return R.nonce
          },
          clientOnly: _.clientOnly,
          layer: w,
          order: _.order || -999
        }
      typeof o == 'function' &&
        Od(
          B(B({}, q), {}, { clientOnly: !1, path: ['Shared', A] }),
          function () {
            return o(M, {
              prefix: { rootPrefixCls: A, iconPrefixCls: z },
              csp: R
            })
          }
        )
      var G = Od(B(B({}, q), {}, { path: [m, b, z] }), function () {
        if (_.injectStyle === !1) return []
        var U = A8(M),
          Z = U.token,
          se = U.flush,
          re = pv(p, T, y),
          Hi = '.'.concat(b),
          Fr = dv(p, T, re, { deprecatedTokens: _.deprecatedTokens })
        L &&
          re &&
          X(re) === 'object' &&
          Object.keys(re).forEach(function (zr) {
            re[zr] = 'var('.concat(Es(zr, cv(p, L.prefix)), ')')
          })
        var $r = Ap(
            Z,
            {
              componentCls: Hi,
              prefixCls: b,
              iconCls: '.'.concat(z),
              antCls: '.'.concat(A),
              calc: N,
              max: $,
              min: V
            },
            L ? re : Fr
          ),
          Dr = g($r, {
            hashId: k,
            prefixCls: b,
            rootPrefixCls: A,
            iconPrefixCls: z
          })
        se(p, Fr)
        var an = typeof a == 'function' ? a($r, b, C, _.resetFont) : null
        return [_.resetStyle === !1 ? null : an, Dr]
      })
      return [G, k]
    }
  }
  function f(d, g, y) {
    var _ = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
      x = c(d, g, y, B({ resetStyle: !1, order: -998 }, _)),
      v = function (m) {
        var w = m.prefixCls,
          b = m.rootCls,
          C = b === void 0 ? w : b
        return x(w, C), null
      }
    return v
  }
  return { genStyleHooks: l, genSubStyleComponent: f, genComponentStyleHook: c }
}
const V8 = '5.22.7'
function ic(e) {
  return e >= 0 && e <= 255
}
function rs(e, t) {
  const { r: n, g: r, b: i, a: o } = new qe(e).toRgb()
  if (o < 1) return e
  const { r: a, g: s, b: l } = new qe(t).toRgb()
  for (let u = 0.01; u <= 1; u += 0.01) {
    const c = Math.round((n - a * (1 - u)) / u),
      f = Math.round((r - s * (1 - u)) / u),
      d = Math.round((i - l * (1 - u)) / u)
    if (ic(c) && ic(f) && ic(d))
      return new qe({
        r: c,
        g: f,
        b: d,
        a: Math.round(u * 100) / 100
      }).toRgbString()
  }
  return new qe({ r: n, g: r, b: i, a: 1 }).toRgbString()
}
var B8 = function (e, t) {
  var n = {}
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]])
  return n
}
function By(e) {
  const { override: t } = e,
    n = B8(e, ['override']),
    r = Object.assign({}, t)
  Object.keys(aa).forEach((d) => {
    delete r[d]
  })
  const i = Object.assign(Object.assign({}, n), r),
    o = 480,
    a = 576,
    s = 768,
    l = 992,
    u = 1200,
    c = 1600
  if (i.motion === !1) {
    const d = '0s'
    ;(i.motionDurationFast = d),
      (i.motionDurationMid = d),
      (i.motionDurationSlow = d)
  }
  return Object.assign(
    Object.assign(Object.assign({}, i), {
      colorFillContent: i.colorFillSecondary,
      colorFillContentHover: i.colorFill,
      colorFillAlter: i.colorFillQuaternary,
      colorBgContainerDisabled: i.colorFillTertiary,
      colorBorderBg: i.colorBgContainer,
      colorSplit: rs(i.colorBorderSecondary, i.colorBgContainer),
      colorTextPlaceholder: i.colorTextQuaternary,
      colorTextDisabled: i.colorTextQuaternary,
      colorTextHeading: i.colorText,
      colorTextLabel: i.colorTextSecondary,
      colorTextDescription: i.colorTextTertiary,
      colorTextLightSolid: i.colorWhite,
      colorHighlight: i.colorError,
      colorBgTextHover: i.colorFillSecondary,
      colorBgTextActive: i.colorFill,
      colorIcon: i.colorTextTertiary,
      colorIconHover: i.colorText,
      colorErrorOutline: rs(i.colorErrorBg, i.colorBgContainer),
      colorWarningOutline: rs(i.colorWarningBg, i.colorBgContainer),
      fontSizeIcon: i.fontSizeSM,
      lineWidthFocus: i.lineWidth * 3,
      lineWidth: i.lineWidth,
      controlOutlineWidth: i.lineWidth * 2,
      controlInteractiveSize: i.controlHeight / 2,
      controlItemBgHover: i.colorFillTertiary,
      controlItemBgActive: i.colorPrimaryBg,
      controlItemBgActiveHover: i.colorPrimaryBgHover,
      controlItemBgActiveDisabled: i.colorFill,
      controlTmpOutline: i.colorFillQuaternary,
      controlOutline: rs(i.colorPrimaryBg, i.colorBgContainer),
      lineType: i.lineType,
      borderRadius: i.borderRadius,
      borderRadiusXS: i.borderRadiusXS,
      borderRadiusSM: i.borderRadiusSM,
      borderRadiusLG: i.borderRadiusLG,
      fontWeightStrong: 600,
      opacityLoading: 0.65,
      linkDecoration: 'none',
      linkHoverDecoration: 'none',
      linkFocusDecoration: 'none',
      controlPaddingHorizontal: 12,
      controlPaddingHorizontalSM: 8,
      paddingXXS: i.sizeXXS,
      paddingXS: i.sizeXS,
      paddingSM: i.sizeSM,
      padding: i.size,
      paddingMD: i.sizeMD,
      paddingLG: i.sizeLG,
      paddingXL: i.sizeXL,
      paddingContentHorizontalLG: i.sizeLG,
      paddingContentVerticalLG: i.sizeMS,
      paddingContentHorizontal: i.sizeMS,
      paddingContentVertical: i.sizeSM,
      paddingContentHorizontalSM: i.size,
      paddingContentVerticalSM: i.sizeXS,
      marginXXS: i.sizeXXS,
      marginXS: i.sizeXS,
      marginSM: i.sizeSM,
      margin: i.size,
      marginMD: i.sizeMD,
      marginLG: i.sizeLG,
      marginXL: i.sizeXL,
      marginXXL: i.sizeXXL,
      boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
      screenXS: o,
      screenXSMin: o,
      screenXSMax: a - 1,
      screenSM: a,
      screenSMMin: a,
      screenSMMax: s - 1,
      screenMD: s,
      screenMDMin: s,
      screenMDMax: l - 1,
      screenLG: l,
      screenLGMin: l,
      screenLGMax: u - 1,
      screenXL: u,
      screenXLMin: u,
      screenXLMax: c - 1,
      screenXXL: c,
      screenXXLMin: c,
      boxShadowPopoverArrow: '2px 2px 5px rgba(0, 0, 0, 0.05)',
      boxShadowCard: `
      0 1px 2px -2px ${new qe('rgba(0, 0, 0, 0.16)').toRgbString()},
      0 3px 6px 0 ${new qe('rgba(0, 0, 0, 0.12)').toRgbString()},
      0 5px 12px 4px ${new qe('rgba(0, 0, 0, 0.09)').toRgbString()}
    `,
      boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTabsOverflowLeft: 'inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)',
      boxShadowTabsOverflowRight: 'inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)',
      boxShadowTabsOverflowTop: 'inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)',
      boxShadowTabsOverflowBottom: 'inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)'
    }),
    r
  )
}
var mv = function (e, t) {
  var n = {}
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]])
  return n
}
const Hy = {
    lineHeight: !0,
    lineHeightSM: !0,
    lineHeightLG: !0,
    lineHeightHeading1: !0,
    lineHeightHeading2: !0,
    lineHeightHeading3: !0,
    lineHeightHeading4: !0,
    lineHeightHeading5: !0,
    opacityLoading: !0,
    fontWeightStrong: !0,
    zIndexPopupBase: !0,
    zIndexBase: !0,
    opacityImage: !0
  },
  H8 = {
    size: !0,
    sizeSM: !0,
    sizeLG: !0,
    sizeMD: !0,
    sizeXS: !0,
    sizeXXS: !0,
    sizeMS: !0,
    sizeXL: !0,
    sizeXXL: !0,
    sizeUnit: !0,
    sizeStep: !0,
    motionBase: !0,
    motionUnit: !0
  },
  q8 = {
    screenXS: !0,
    screenXSMin: !0,
    screenXSMax: !0,
    screenSM: !0,
    screenSMMin: !0,
    screenSMMax: !0,
    screenMD: !0,
    screenMDMin: !0,
    screenMDMax: !0,
    screenLG: !0,
    screenLGMin: !0,
    screenLGMax: !0,
    screenXL: !0,
    screenXLMin: !0,
    screenXLMax: !0,
    screenXXL: !0,
    screenXXLMin: !0
  },
  qy = (e, t, n) => {
    const r = n.getDerivativeToken(e),
      { override: i } = t,
      o = mv(t, ['override'])
    let a = Object.assign(Object.assign({}, r), { override: i })
    return (
      (a = By(a)),
      o &&
        Object.entries(o).forEach((s) => {
          let [l, u] = s
          const { theme: c } = u,
            f = mv(u, ['theme'])
          let d = f
          c &&
            (d = qy(
              Object.assign(Object.assign({}, a), f),
              { override: f },
              c
            )),
            (a[l] = d)
        }),
      a
    )
  }
function wa() {
  const {
      token: e,
      hashed: t,
      theme: n,
      override: r,
      cssVar: i
    } = te.useContext($y),
    o = `${V8}-${t || ''}`,
    a = n || Fy,
    [s, l, u] = sk(a, [aa, e], {
      salt: o,
      override: r,
      getComputedToken: qy,
      formatToken: By,
      cssVar: i && {
        prefix: i.prefix,
        key: i.key,
        unitless: Hy,
        ignore: H8,
        preserve: q8
      }
    })
  return [a, u, t ? l : '', s, i]
}
const oc = function (e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
    return {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      color: e.colorText,
      fontSize: e.fontSize,
      lineHeight: e.lineHeight,
      listStyle: 'none',
      fontFamily: t ? 'inherit' : e.fontFamily
    }
  },
  W8 = () => ({
    display: 'inline-flex',
    alignItems: 'center',
    color: 'inherit',
    fontStyle: 'normal',
    lineHeight: 0,
    textAlign: 'center',
    textTransform: 'none',
    verticalAlign: '-0.125em',
    textRendering: 'optimizeLegibility',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    '> *': { lineHeight: 1 },
    svg: { display: 'inline-block' }
  }),
  U8 = (e) => ({
    a: {
      color: e.colorLink,
      textDecoration: e.linkDecoration,
      backgroundColor: 'transparent',
      outline: 'none',
      cursor: 'pointer',
      transition: `color ${e.motionDurationSlow}`,
      '-webkit-text-decoration-skip': 'objects',
      '&:hover': { color: e.colorLinkHover },
      '&:active': { color: e.colorLinkActive },
      '&:active, &:hover': {
        textDecoration: e.linkHoverDecoration,
        outline: 0
      },
      '&:focus': { textDecoration: e.linkFocusDecoration, outline: 0 },
      '&[disabled]': { color: e.colorTextDisabled, cursor: 'not-allowed' }
    }
  }),
  G8 = (e, t, n, r) => {
    const i = `[class^="${t}"], [class*=" ${t}"]`,
      o = n ? `.${n}` : i,
      a = {
        boxSizing: 'border-box',
        '&::before, &::after': { boxSizing: 'border-box' }
      }
    let s = {}
    return (
      r !== !1 && (s = { fontFamily: e.fontFamily, fontSize: e.fontSize }),
      { [o]: Object.assign(Object.assign(Object.assign({}, s), a), { [i]: a }) }
    )
  },
  Q8 = (e) => ({
    outline: `${ra(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
    outlineOffset: 1,
    transition: 'outline-offset 0s, outline 0s'
  }),
  Wy = (e) => ({
    [`.${e}`]: Object.assign(Object.assign({}, W8()), {
      [`.${e} .${e}-icon`]: { display: 'block' }
    })
  }),
  {
    genStyleHooks: K8,
    genComponentStyleHook: X8,
    genSubStyleComponent: H7
  } = z8({
    usePrefix: () => {
      const { getPrefixCls: e, iconPrefixCls: t } = j.useContext(kn)
      return { rootPrefixCls: e(), iconPrefixCls: t }
    },
    useToken: () => {
      const [e, t, n, r, i] = wa()
      return { theme: e, realToken: t, hashId: n, token: r, cssVar: i }
    },
    useCSP: () => {
      const { csp: e } = j.useContext(kn)
      return e ?? {}
    },
    getResetStyles: (e, t) => {
      var n
      return [
        { '&': U8(e) },
        Wy(
          (n = t == null ? void 0 : t.prefix.iconPrefixCls) !== null &&
            n !== void 0
            ? n
            : Lp
        )
      ]
    },
    getCommonStyle: G8,
    getCompUnitless: () => Hy
  }),
  Y8 = (e, t) => {
    const [n, r] = wa()
    return Od(
      {
        theme: n,
        token: r,
        hashId: '',
        path: ['ant-design-icons', e],
        nonce: () => (t == null ? void 0 : t.nonce),
        layer: { name: 'antd' }
      },
      () => [Wy(e)]
    )
  },
  Z8 = Object.assign({}, Mo),
  { useId: vv } = Z8,
  J8 = () => '',
  e3 = typeof vv > 'u' ? J8 : vv
function t3(e, t, n) {
  var r
  const i = e || {},
    o =
      i.inherit === !1 || !t
        ? Object.assign(Object.assign({}, Kd), {
            hashed:
              (r = t == null ? void 0 : t.hashed) !== null && r !== void 0
                ? r
                : Kd.hashed,
            cssVar: t == null ? void 0 : t.cssVar
          })
        : t,
    a = e3()
  return J1(
    () => {
      var s, l
      if (!e) return t
      const u = Object.assign({}, o.components)
      Object.keys(e.components || {}).forEach((d) => {
        u[d] = Object.assign(Object.assign({}, u[d]), e.components[d])
      })
      const c = `css-var-${a.replace(/:/g, '')}`,
        f =
          ((s = i.cssVar) !== null && s !== void 0 ? s : o.cssVar) &&
          Object.assign(
            Object.assign(
              Object.assign(
                { prefix: n == null ? void 0 : n.prefixCls },
                typeof o.cssVar == 'object' ? o.cssVar : {}
              ),
              typeof i.cssVar == 'object' ? i.cssVar : {}
            ),
            {
              key:
                (typeof i.cssVar == 'object' &&
                  ((l = i.cssVar) === null || l === void 0 ? void 0 : l.key)) ||
                c
            }
          )
      return Object.assign(Object.assign(Object.assign({}, o), i), {
        token: Object.assign(Object.assign({}, o.token), i.token),
        components: u,
        cssVar: f
      })
    },
    [i, o],
    (s, l) =>
      s.some((u, c) => {
        const f = l[c]
        return !Td(u, f, !0)
      })
  )
}
var n3 = ['children'],
  Uy = j.createContext({})
function r3(e) {
  var t = e.children,
    n = Or(e, n3)
  return j.createElement(Uy.Provider, { value: n }, t)
}
var i3 = (function (e) {
  zi(n, e)
  var t = Vi(n)
  function n() {
    return tt(this, n), t.apply(this, arguments)
  }
  return (
    nt(n, [
      {
        key: 'render',
        value: function () {
          return this.props.children
        }
      }
    ]),
    n
  )
})(j.Component)
function o3(e) {
  var t = j.useReducer(function (s) {
      return s + 1
    }, 0),
    n = K(t, 2),
    r = n[1],
    i = j.useRef(e),
    o = Ri(function () {
      return i.current
    }),
    a = Ri(function (s) {
      ;(i.current = typeof s == 'function' ? s(i.current) : s), r()
    })
  return [o, a]
}
var On = 'none',
  is = 'appear',
  os = 'enter',
  as = 'leave',
  gv = 'none',
  Ft = 'prepare',
  fi = 'start',
  pi = 'active',
  Rp = 'end',
  Gy = 'prepared'
function yv(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit'.concat(e)] = 'webkit'.concat(t)),
    (n['Moz'.concat(e)] = 'moz'.concat(t)),
    (n['ms'.concat(e)] = 'MS'.concat(t)),
    (n['O'.concat(e)] = 'o'.concat(t.toLowerCase())),
    n
  )
}
function a3(e, t) {
  var n = {
    animationend: yv('Animation', 'AnimationEnd'),
    transitionend: yv('Transition', 'TransitionEnd')
  }
  return (
    e &&
      ('AnimationEvent' in t || delete n.animationend.animation,
      'TransitionEvent' in t || delete n.transitionend.transition),
    n
  )
}
var s3 = a3(Pn(), typeof window < 'u' ? window : {}),
  Qy = {}
if (Pn()) {
  var l3 = document.createElement('div')
  Qy = l3.style
}
var ss = {}
function Ky(e) {
  if (ss[e]) return ss[e]
  var t = s3[e]
  if (t)
    for (var n = Object.keys(t), r = n.length, i = 0; i < r; i += 1) {
      var o = n[i]
      if (Object.prototype.hasOwnProperty.call(t, o) && o in Qy)
        return (ss[e] = t[o]), ss[e]
    }
  return ''
}
var Xy = Ky('animationend'),
  Yy = Ky('transitionend'),
  Zy = !!(Xy && Yy),
  _v = Xy || 'animationend',
  wv = Yy || 'transitionend'
function xv(e, t) {
  if (!e) return null
  if (X(e) === 'object') {
    var n = t.replace(/-\w/g, function (r) {
      return r[1].toUpperCase()
    })
    return e[n]
  }
  return ''.concat(e, '-').concat(t)
}
const u3 = function (e) {
  var t = j.useRef()
  function n(i) {
    i && (i.removeEventListener(wv, e), i.removeEventListener(_v, e))
  }
  function r(i) {
    t.current && t.current !== i && n(t.current),
      i &&
        i !== t.current &&
        (i.addEventListener(wv, e), i.addEventListener(_v, e), (t.current = i))
  }
  return (
    j.useEffect(function () {
      return function () {
        n(t.current)
      }
    }, []),
    [r, n]
  )
}
var Jy = Pn() ? j.useLayoutEffect : j.useEffect
const c3 = function () {
  var e = j.useRef(null)
  function t() {
    Tn.cancel(e.current)
  }
  function n(r) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2
    t()
    var o = Tn(function () {
      i <= 1
        ? r({
            isCanceled: function () {
              return o !== e.current
            }
          })
        : n(r, i - 1)
    })
    e.current = o
  }
  return (
    j.useEffect(function () {
      return function () {
        t()
      }
    }, []),
    [n, t]
  )
}
var d3 = [Ft, fi, pi, Rp],
  f3 = [Ft, Gy],
  e2 = !1,
  p3 = !0
function t2(e) {
  return e === pi || e === Rp
}
const h3 = function (e, t, n) {
  var r = la(gv),
    i = K(r, 2),
    o = i[0],
    a = i[1],
    s = c3(),
    l = K(s, 2),
    u = l[0],
    c = l[1]
  function f() {
    a(Ft, !0)
  }
  var d = t ? f3 : d3
  return (
    Jy(
      function () {
        if (o !== gv && o !== Rp) {
          var g = d.indexOf(o),
            y = d[g + 1],
            _ = n(o)
          _ === e2
            ? a(y, !0)
            : y &&
              u(function (x) {
                function v() {
                  x.isCanceled() || a(y, !0)
                }
                _ === !0 ? v() : Promise.resolve(_).then(v)
              })
        }
      },
      [e, o]
    ),
    j.useEffect(function () {
      return function () {
        c()
      }
    }, []),
    [f, o]
  )
}
function m3(e, t, n, r) {
  var i = r.motionEnter,
    o = i === void 0 ? !0 : i,
    a = r.motionAppear,
    s = a === void 0 ? !0 : a,
    l = r.motionLeave,
    u = l === void 0 ? !0 : l,
    c = r.motionDeadline,
    f = r.motionLeaveImmediately,
    d = r.onAppearPrepare,
    g = r.onEnterPrepare,
    y = r.onLeavePrepare,
    _ = r.onAppearStart,
    x = r.onEnterStart,
    v = r.onLeaveStart,
    p = r.onAppearActive,
    m = r.onEnterActive,
    w = r.onLeaveActive,
    b = r.onAppearEnd,
    C = r.onEnterEnd,
    S = r.onLeaveEnd,
    E = r.onVisibleChanged,
    T = la(),
    k = K(T, 2),
    M = k[0],
    L = k[1],
    O = o3(On),
    A = K(O, 2),
    z = A[0],
    R = A[1],
    I = la(null),
    N = K(I, 2),
    F = N[0],
    $ = N[1],
    V = z(),
    q = j.useRef(!1),
    G = j.useRef(null)
  function U() {
    return n()
  }
  var Z = j.useRef(!1)
  function se() {
    R(On), $(null, !0)
  }
  var re = Ri(function (Ie) {
      var Ee = z()
      if (Ee !== On) {
        var gt = U()
        if (!(Ie && !Ie.deadline && Ie.target !== gt)) {
          var Vr = Z.current,
            Br
          Ee === is && Vr
            ? (Br = b == null ? void 0 : b(gt, Ie))
            : Ee === os && Vr
            ? (Br = C == null ? void 0 : C(gt, Ie))
            : Ee === as && Vr && (Br = S == null ? void 0 : S(gt, Ie)),
            Vr && Br !== !1 && se()
        }
      }
    }),
    Hi = u3(re),
    Fr = K(Hi, 1),
    $r = Fr[0],
    Dr = function (Ee) {
      switch (Ee) {
        case is:
          return D(D(D({}, Ft, d), fi, _), pi, p)
        case os:
          return D(D(D({}, Ft, g), fi, x), pi, m)
        case as:
          return D(D(D({}, Ft, y), fi, v), pi, w)
        default:
          return {}
      }
    },
    an = j.useMemo(
      function () {
        return Dr(V)
      },
      [V]
    ),
    zr = h3(V, !e, function (Ie) {
      if (Ie === Ft) {
        var Ee = an[Ft]
        return Ee ? Ee(U()) : e2
      }
      if (sn in an) {
        var gt
        $(
          ((gt = an[sn]) === null || gt === void 0
            ? void 0
            : gt.call(an, U(), null)) || null
        )
      }
      return (
        sn === pi &&
          V !== On &&
          ($r(U()),
          c > 0 &&
            (clearTimeout(G.current),
            (G.current = setTimeout(function () {
              re({ deadline: !0 })
            }, c)))),
        sn === Gy && se(),
        p3
      )
    }),
    Ea = K(zr, 2),
    Jl = Ea[0],
    sn = Ea[1],
    eu = t2(sn)
  Z.current = eu
  var Ta = j.useRef(null)
  Jy(
    function () {
      if (!(q.current && Ta.current === t)) {
        L(t)
        var Ie = q.current
        q.current = !0
        var Ee
        !Ie && t && s && (Ee = is),
          Ie && t && o && (Ee = os),
          ((Ie && !t && u) || (!Ie && f && !t && u)) && (Ee = as)
        var gt = Dr(Ee)
        Ee && (e || gt[Ft]) ? (R(Ee), Jl()) : R(On), (Ta.current = t)
      }
    },
    [t]
  ),
    j.useEffect(
      function () {
        ;((V === is && !s) || (V === os && !o) || (V === as && !u)) && R(On)
      },
      [s, o, u]
    ),
    j.useEffect(function () {
      return function () {
        ;(q.current = !1), clearTimeout(G.current)
      }
    }, [])
  var qi = j.useRef(!1)
  j.useEffect(
    function () {
      M && (qi.current = !0),
        M !== void 0 &&
          V === On &&
          ((qi.current || M) && (E == null || E(M)), (qi.current = !0))
    },
    [M, V]
  )
  var Wi = F
  return (
    an[Ft] && sn === fi && (Wi = B({ transition: 'none' }, Wi)),
    [V, sn, Wi, M ?? t]
  )
}
function v3(e) {
  var t = e
  X(e) === 'object' && (t = e.transitionSupport)
  function n(i, o) {
    return !!(i.motionName && t && o !== !1)
  }
  var r = j.forwardRef(function (i, o) {
    var a = i.visible,
      s = a === void 0 ? !0 : a,
      l = i.removeOnLeave,
      u = l === void 0 ? !0 : l,
      c = i.forceRender,
      f = i.children,
      d = i.motionName,
      g = i.leavedClassName,
      y = i.eventProps,
      _ = j.useContext(Uy),
      x = _.motion,
      v = n(i, x),
      p = j.useRef(),
      m = j.useRef()
    function w() {
      try {
        return p.current instanceof HTMLElement ? p.current : TT(m.current)
      } catch {
        return null
      }
    }
    var b = m3(v, s, w, i),
      C = K(b, 4),
      S = C[0],
      E = C[1],
      T = C[2],
      k = C[3],
      M = j.useRef(k)
    k && (M.current = !0)
    var L = j.useCallback(
        function (N) {
          ;(p.current = N), ey(o, N)
        },
        [o]
      ),
      O,
      A = B(B({}, y), {}, { visible: s })
    if (!f) O = null
    else if (S === On)
      k
        ? (O = f(B({}, A), L))
        : !u && M.current && g
        ? (O = f(B(B({}, A), {}, { className: g }), L))
        : c || (!u && !g)
        ? (O = f(B(B({}, A), {}, { style: { display: 'none' } }), L))
        : (O = null)
    else {
      var z
      E === Ft
        ? (z = 'prepare')
        : t2(E)
        ? (z = 'active')
        : E === fi && (z = 'start')
      var R = xv(d, ''.concat(S, '-').concat(z))
      O = f(
        B(
          B({}, A),
          {},
          {
            className: Mr(
              xv(d, S),
              D(D({}, R, R && z), d, typeof d == 'string')
            ),
            style: T
          }
        ),
        L
      )
    }
    if (j.isValidElement(O) && ty(O)) {
      var I = ry(O)
      I || (O = j.cloneElement(O, { ref: L }))
    }
    return j.createElement(i3, { ref: m }, O)
  })
  return (r.displayName = 'CSSMotion'), r
}
const n2 = v3(Zy)
var Yd = 'add',
  Zd = 'keep',
  Jd = 'remove',
  ac = 'removed'
function g3(e) {
  var t
  return (
    e && X(e) === 'object' && 'key' in e ? (t = e) : (t = { key: e }),
    B(B({}, t), {}, { key: String(t.key) })
  )
}
function ef() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
  return e.map(g3)
}
function y3() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
    n = [],
    r = 0,
    i = t.length,
    o = ef(e),
    a = ef(t)
  o.forEach(function (u) {
    for (var c = !1, f = r; f < i; f += 1) {
      var d = a[f]
      if (d.key === u.key) {
        r < f &&
          ((n = n.concat(
            a.slice(r, f).map(function (g) {
              return B(B({}, g), {}, { status: Yd })
            })
          )),
          (r = f)),
          n.push(B(B({}, d), {}, { status: Zd })),
          (r += 1),
          (c = !0)
        break
      }
    }
    c || n.push(B(B({}, u), {}, { status: Jd }))
  }),
    r < i &&
      (n = n.concat(
        a.slice(r).map(function (u) {
          return B(B({}, u), {}, { status: Yd })
        })
      ))
  var s = {}
  n.forEach(function (u) {
    var c = u.key
    s[c] = (s[c] || 0) + 1
  })
  var l = Object.keys(s).filter(function (u) {
    return s[u] > 1
  })
  return (
    l.forEach(function (u) {
      ;(n = n.filter(function (c) {
        var f = c.key,
          d = c.status
        return f !== u || d !== Jd
      })),
        n.forEach(function (c) {
          c.key === u && (c.status = Zd)
        })
    }),
    n
  )
}
var _3 = ['component', 'children', 'onVisibleChanged', 'onAllRemoved'],
  w3 = ['status'],
  x3 = [
    'eventProps',
    'visible',
    'children',
    'motionName',
    'motionAppear',
    'motionEnter',
    'motionLeave',
    'motionLeaveImmediately',
    'motionDeadline',
    'removeOnLeave',
    'leavedClassName',
    'onAppearPrepare',
    'onAppearStart',
    'onAppearActive',
    'onAppearEnd',
    'onEnterStart',
    'onEnterActive',
    'onEnterEnd',
    'onLeaveStart',
    'onLeaveActive',
    'onLeaveEnd'
  ]
function b3(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : n2,
    n = (function (r) {
      zi(o, r)
      var i = Vi(o)
      function o() {
        var a
        tt(this, o)
        for (var s = arguments.length, l = new Array(s), u = 0; u < s; u++)
          l[u] = arguments[u]
        return (
          (a = i.call.apply(i, [this].concat(l))),
          D(Y(a), 'state', { keyEntities: [] }),
          D(Y(a), 'removeKey', function (c) {
            a.setState(
              function (f) {
                var d = f.keyEntities.map(function (g) {
                  return g.key !== c ? g : B(B({}, g), {}, { status: ac })
                })
                return { keyEntities: d }
              },
              function () {
                var f = a.state.keyEntities,
                  d = f.filter(function (g) {
                    var y = g.status
                    return y !== ac
                  }).length
                d === 0 && a.props.onAllRemoved && a.props.onAllRemoved()
              }
            )
          }),
          a
        )
      }
      return (
        nt(
          o,
          [
            {
              key: 'render',
              value: function () {
                var s = this,
                  l = this.state.keyEntities,
                  u = this.props,
                  c = u.component,
                  f = u.children,
                  d = u.onVisibleChanged
                u.onAllRemoved
                var g = Or(u, _3),
                  y = c || j.Fragment,
                  _ = {}
                return (
                  x3.forEach(function (x) {
                    ;(_[x] = g[x]), delete g[x]
                  }),
                  delete g.keys,
                  j.createElement(
                    y,
                    g,
                    l.map(function (x, v) {
                      var p = x.status,
                        m = Or(x, w3),
                        w = p === Yd || p === Zd
                      return j.createElement(
                        t,
                        Nr({}, _, {
                          key: m.key,
                          visible: w,
                          eventProps: m,
                          onVisibleChanged: function (C) {
                            d == null || d(C, { key: m.key }),
                              C || s.removeKey(m.key)
                          }
                        }),
                        function (b, C) {
                          return f(B(B({}, b), {}, { index: v }), C)
                        }
                      )
                    })
                  )
                )
              }
            }
          ],
          [
            {
              key: 'getDerivedStateFromProps',
              value: function (s, l) {
                var u = s.keys,
                  c = l.keyEntities,
                  f = ef(u),
                  d = y3(c, f)
                return {
                  keyEntities: d.filter(function (g) {
                    var y = c.find(function (_) {
                      var x = _.key
                      return g.key === x
                    })
                    return !(y && y.status === ac && g.status === Jd)
                  })
                }
              }
            }
          ]
        ),
        o
      )
    })(j.Component)
  return D(n, 'defaultProps', { component: 'div' }), n
}
b3(Zy)
function S3(e) {
  const { children: t } = e,
    [, n] = wa(),
    { motion: r } = n,
    i = j.useRef(!1)
  return (
    (i.current = i.current || r === !1),
    i.current ? j.createElement(r3, { motion: r }, t) : t
  )
}
const C3 = () => null
var E3 = function (e, t) {
  var n = {}
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]])
  return n
}
const T3 = [
  'getTargetContainer',
  'getPopupContainer',
  'renderEmpty',
  'input',
  'pagination',
  'form',
  'select',
  'button'
]
let r2
function k3() {
  return r2 || fl
}
function j3(e) {
  return Object.keys(e).some((t) => t.endsWith('Color'))
}
const P3 = (e) => {
    const { prefixCls: t, iconPrefixCls: n, theme: r, holderRender: i } = e
    t !== void 0 && (r2 = t), r && j3(r) && C8(k3(), r)
  },
  M3 = (e) => {
    const {
        children: t,
        csp: n,
        autoInsertSpaceInButton: r,
        alert: i,
        anchor: o,
        form: a,
        locale: s,
        componentSize: l,
        direction: u,
        space: c,
        splitter: f,
        virtual: d,
        dropdownMatchSelectWidth: g,
        popupMatchSelectWidth: y,
        popupOverflow: _,
        legacyLocale: x,
        parentContext: v,
        iconPrefixCls: p,
        theme: m,
        componentDisabled: w,
        segmented: b,
        statistic: C,
        spin: S,
        calendar: E,
        carousel: T,
        cascader: k,
        collapse: M,
        typography: L,
        checkbox: O,
        descriptions: A,
        divider: z,
        drawer: R,
        skeleton: I,
        steps: N,
        image: F,
        layout: $,
        list: V,
        mentions: q,
        modal: G,
        progress: U,
        result: Z,
        slider: se,
        breadcrumb: re,
        menu: Hi,
        pagination: Fr,
        input: $r,
        textArea: Dr,
        empty: an,
        badge: zr,
        radio: Ea,
        rate: Jl,
        switch: sn,
        transfer: eu,
        avatar: Ta,
        message: qi,
        tag: Wi,
        table: Ie,
        card: Ee,
        tabs: gt,
        timeline: Vr,
        timePicker: Br,
        upload: h2,
        notification: m2,
        tree: v2,
        colorPicker: g2,
        datePicker: y2,
        rangePicker: _2,
        flex: w2,
        wave: x2,
        dropdown: b2,
        warning: S2,
        tour: C2,
        floatButtonGroup: E2,
        variant: T2,
        inputNumber: k2,
        treeSelect: j2
      } = e,
      $p = j.useCallback(
        (xe, Pe) => {
          const { prefixCls: Gt } = e
          if (Pe) return Pe
          const Qt = Gt || v.getPrefixCls('')
          return xe ? `${Qt}-${xe}` : Qt
        },
        [v.getPrefixCls, e.prefixCls]
      ),
      Ui = p || v.iconPrefixCls || Lp,
      Gi = n || v.csp
    Y8(Ui, Gi)
    const tu = t3(m, v.theme, { prefixCls: $p('') }),
      nu = {
        csp: Gi,
        autoInsertSpaceInButton: r,
        alert: i,
        anchor: o,
        locale: s || x,
        direction: u,
        space: c,
        splitter: f,
        virtual: d,
        popupMatchSelectWidth: y ?? g,
        popupOverflow: _,
        getPrefixCls: $p,
        iconPrefixCls: Ui,
        theme: tu,
        segmented: b,
        statistic: C,
        spin: S,
        calendar: E,
        carousel: T,
        cascader: k,
        collapse: M,
        typography: L,
        checkbox: O,
        descriptions: A,
        divider: z,
        drawer: R,
        skeleton: I,
        steps: N,
        image: F,
        input: $r,
        textArea: Dr,
        layout: $,
        list: V,
        mentions: q,
        modal: G,
        progress: U,
        result: Z,
        slider: se,
        breadcrumb: re,
        menu: Hi,
        pagination: Fr,
        empty: an,
        badge: zr,
        radio: Ea,
        rate: Jl,
        switch: sn,
        transfer: eu,
        avatar: Ta,
        message: qi,
        tag: Wi,
        table: Ie,
        card: Ee,
        tabs: gt,
        timeline: Vr,
        timePicker: Br,
        upload: h2,
        notification: m2,
        tree: v2,
        colorPicker: g2,
        datePicker: y2,
        rangePicker: _2,
        flex: w2,
        wave: x2,
        dropdown: b2,
        warning: S2,
        tour: C2,
        floatButtonGroup: E2,
        variant: T2,
        inputNumber: k2,
        treeSelect: j2
      },
      Hr = Object.assign({}, v)
    Object.keys(nu).forEach((xe) => {
      nu[xe] !== void 0 && (Hr[xe] = nu[xe])
    }),
      T3.forEach((xe) => {
        const Pe = e[xe]
        Pe && (Hr[xe] = Pe)
      }),
      typeof r < 'u' &&
        (Hr.button = Object.assign({ autoInsertSpace: r }, Hr.button))
    const qr = J1(
        () => Hr,
        Hr,
        (xe, Pe) => {
          const Gt = Object.keys(xe),
            Qt = Object.keys(Pe)
          return Gt.length !== Qt.length || Gt.some((ka) => xe[ka] !== Pe[ka])
        }
      ),
      P2 = j.useMemo(() => ({ prefixCls: Ui, csp: Gi }), [Ui, Gi])
    let je = j.createElement(
      j.Fragment,
      null,
      j.createElement(C3, { dropdownMatchSelectWidth: g }),
      t
    )
    const Dp = j.useMemo(() => {
      var xe, Pe, Gt, Qt
      return di(
        ((xe = Yl.Form) === null || xe === void 0
          ? void 0
          : xe.defaultValidateMessages) || {},
        ((Gt =
          (Pe = qr.locale) === null || Pe === void 0 ? void 0 : Pe.Form) ===
          null || Gt === void 0
          ? void 0
          : Gt.defaultValidateMessages) || {},
        ((Qt = qr.form) === null || Qt === void 0
          ? void 0
          : Qt.validateMessages) || {},
        (a == null ? void 0 : a.validateMessages) || {}
      )
    }, [qr, a == null ? void 0 : a.validateMessages])
    Object.keys(Dp).length > 0 &&
      (je = j.createElement(Vk.Provider, { value: Dp }, je)),
      s && (je = j.createElement(Gk, { locale: s, _ANT_MARK__: Uk }, je)),
      (Ui || Gi) && (je = j.createElement(Ik.Provider, { value: P2 }, je)),
      l && (je = j.createElement(T8, { size: l }, je)),
      (je = j.createElement(S3, null, je))
    const M2 = j.useMemo(() => {
      const xe = tu || {},
        { algorithm: Pe, token: Gt, components: Qt, cssVar: ka } = xe,
        N2 = E3(xe, ['algorithm', 'token', 'components', 'cssVar']),
        zp = Pe && (!Array.isArray(Pe) || Pe.length > 0) ? jd(Pe) : Fy,
        ru = {}
      Object.entries(Qt || {}).forEach((O2) => {
        let [L2, A2] = O2
        const ln = Object.assign({}, A2)
        'algorithm' in ln &&
          (ln.algorithm === !0
            ? (ln.theme = zp)
            : (Array.isArray(ln.algorithm) ||
                typeof ln.algorithm == 'function') &&
              (ln.theme = jd(ln.algorithm)),
          delete ln.algorithm),
          (ru[L2] = ln)
      })
      const Vp = Object.assign(Object.assign({}, aa), Gt)
      return Object.assign(Object.assign({}, N2), {
        theme: zp,
        token: Vp,
        components: ru,
        override: Object.assign({ override: Vp }, ru),
        cssVar: ka
      })
    }, [tu])
    return (
      m && (je = j.createElement($y.Provider, { value: M2 }, je)),
      qr.warning &&
        (je = j.createElement(zk.Provider, { value: qr.warning }, je)),
      w !== void 0 && (je = j.createElement(E8, { disabled: w }, je)),
      j.createElement(kn.Provider, { value: qr }, je)
    )
  },
  xa = (e) => {
    const t = j.useContext(kn),
      n = j.useContext(Oy)
    return j.createElement(
      M3,
      Object.assign({ parentContext: t, legacyLocale: n }, e)
    )
  }
xa.ConfigContext = kn
xa.SizeContext = sa
xa.config = P3
xa.useConfig = k8
Object.defineProperty(xa, 'SizeContext', { get: () => sa })
const N3 = (e, t, n) =>
  te.isValidElement(e)
    ? te.cloneElement(e, typeof n == 'function' ? n(e.props || {}) : n)
    : t
function O3(e, t) {
  return N3(e, e, t)
}
const i2 = (e) => {
  const [, , , , t] = wa()
  return t ? `${e}-css-var` : ''
}
function Ue() {
  Ue = function () {
    return t
  }
  var e,
    t = {},
    n = Object.prototype,
    r = n.hasOwnProperty,
    i =
      Object.defineProperty ||
      function (R, I, N) {
        R[I] = N.value
      },
    o = typeof Symbol == 'function' ? Symbol : {},
    a = o.iterator || '@@iterator',
    s = o.asyncIterator || '@@asyncIterator',
    l = o.toStringTag || '@@toStringTag'
  function u(R, I, N) {
    return (
      Object.defineProperty(R, I, {
        value: N,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }),
      R[I]
    )
  }
  try {
    u({}, '')
  } catch {
    u = function (N, F, $) {
      return (N[F] = $)
    }
  }
  function c(R, I, N, F) {
    var $ = I && I.prototype instanceof v ? I : v,
      V = Object.create($.prototype),
      q = new A(F || [])
    return i(V, '_invoke', { value: k(R, N, q) }), V
  }
  function f(R, I, N) {
    try {
      return { type: 'normal', arg: R.call(I, N) }
    } catch (F) {
      return { type: 'throw', arg: F }
    }
  }
  t.wrap = c
  var d = 'suspendedStart',
    g = 'suspendedYield',
    y = 'executing',
    _ = 'completed',
    x = {}
  function v() {}
  function p() {}
  function m() {}
  var w = {}
  u(w, a, function () {
    return this
  })
  var b = Object.getPrototypeOf,
    C = b && b(b(z([])))
  C && C !== n && r.call(C, a) && (w = C)
  var S = (m.prototype = v.prototype = Object.create(w))
  function E(R) {
    ;['next', 'throw', 'return'].forEach(function (I) {
      u(R, I, function (N) {
        return this._invoke(I, N)
      })
    })
  }
  function T(R, I) {
    function N($, V, q, G) {
      var U = f(R[$], R, V)
      if (U.type !== 'throw') {
        var Z = U.arg,
          se = Z.value
        return se && X(se) == 'object' && r.call(se, '__await')
          ? I.resolve(se.__await).then(
              function (re) {
                N('next', re, q, G)
              },
              function (re) {
                N('throw', re, q, G)
              }
            )
          : I.resolve(se).then(
              function (re) {
                ;(Z.value = re), q(Z)
              },
              function (re) {
                return N('throw', re, q, G)
              }
            )
      }
      G(U.arg)
    }
    var F
    i(this, '_invoke', {
      value: function (V, q) {
        function G() {
          return new I(function (U, Z) {
            N(V, q, U, Z)
          })
        }
        return (F = F ? F.then(G, G) : G())
      }
    })
  }
  function k(R, I, N) {
    var F = d
    return function ($, V) {
      if (F === y) throw Error('Generator is already running')
      if (F === _) {
        if ($ === 'throw') throw V
        return { value: e, done: !0 }
      }
      for (N.method = $, N.arg = V; ; ) {
        var q = N.delegate
        if (q) {
          var G = M(q, N)
          if (G) {
            if (G === x) continue
            return G
          }
        }
        if (N.method === 'next') N.sent = N._sent = N.arg
        else if (N.method === 'throw') {
          if (F === d) throw ((F = _), N.arg)
          N.dispatchException(N.arg)
        } else N.method === 'return' && N.abrupt('return', N.arg)
        F = y
        var U = f(R, I, N)
        if (U.type === 'normal') {
          if (((F = N.done ? _ : g), U.arg === x)) continue
          return { value: U.arg, done: N.done }
        }
        U.type === 'throw' && ((F = _), (N.method = 'throw'), (N.arg = U.arg))
      }
    }
  }
  function M(R, I) {
    var N = I.method,
      F = R.iterator[N]
    if (F === e)
      return (
        (I.delegate = null),
        (N === 'throw' &&
          R.iterator.return &&
          ((I.method = 'return'),
          (I.arg = e),
          M(R, I),
          I.method === 'throw')) ||
          (N !== 'return' &&
            ((I.method = 'throw'),
            (I.arg = new TypeError(
              "The iterator does not provide a '" + N + "' method"
            )))),
        x
      )
    var $ = f(F, R.iterator, I.arg)
    if ($.type === 'throw')
      return (I.method = 'throw'), (I.arg = $.arg), (I.delegate = null), x
    var V = $.arg
    return V
      ? V.done
        ? ((I[R.resultName] = V.value),
          (I.next = R.nextLoc),
          I.method !== 'return' && ((I.method = 'next'), (I.arg = e)),
          (I.delegate = null),
          x)
        : V
      : ((I.method = 'throw'),
        (I.arg = new TypeError('iterator result is not an object')),
        (I.delegate = null),
        x)
  }
  function L(R) {
    var I = { tryLoc: R[0] }
    1 in R && (I.catchLoc = R[1]),
      2 in R && ((I.finallyLoc = R[2]), (I.afterLoc = R[3])),
      this.tryEntries.push(I)
  }
  function O(R) {
    var I = R.completion || {}
    ;(I.type = 'normal'), delete I.arg, (R.completion = I)
  }
  function A(R) {
    ;(this.tryEntries = [{ tryLoc: 'root' }]),
      R.forEach(L, this),
      this.reset(!0)
  }
  function z(R) {
    if (R || R === '') {
      var I = R[a]
      if (I) return I.call(R)
      if (typeof R.next == 'function') return R
      if (!isNaN(R.length)) {
        var N = -1,
          F = function $() {
            for (; ++N < R.length; )
              if (r.call(R, N)) return ($.value = R[N]), ($.done = !1), $
            return ($.value = e), ($.done = !0), $
          }
        return (F.next = F)
      }
    }
    throw new TypeError(X(R) + ' is not iterable')
  }
  return (
    (p.prototype = m),
    i(S, 'constructor', { value: m, configurable: !0 }),
    i(m, 'constructor', { value: p, configurable: !0 }),
    (p.displayName = u(m, l, 'GeneratorFunction')),
    (t.isGeneratorFunction = function (R) {
      var I = typeof R == 'function' && R.constructor
      return (
        !!I && (I === p || (I.displayName || I.name) === 'GeneratorFunction')
      )
    }),
    (t.mark = function (R) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(R, m)
          : ((R.__proto__ = m), u(R, l, 'GeneratorFunction')),
        (R.prototype = Object.create(S)),
        R
      )
    }),
    (t.awrap = function (R) {
      return { __await: R }
    }),
    E(T.prototype),
    u(T.prototype, s, function () {
      return this
    }),
    (t.AsyncIterator = T),
    (t.async = function (R, I, N, F, $) {
      $ === void 0 && ($ = Promise)
      var V = new T(c(R, I, N, F), $)
      return t.isGeneratorFunction(I)
        ? V
        : V.next().then(function (q) {
            return q.done ? q.value : V.next()
          })
    }),
    E(S),
    u(S, l, 'Generator'),
    u(S, a, function () {
      return this
    }),
    u(S, 'toString', function () {
      return '[object Generator]'
    }),
    (t.keys = function (R) {
      var I = Object(R),
        N = []
      for (var F in I) N.push(F)
      return (
        N.reverse(),
        function $() {
          for (; N.length; ) {
            var V = N.pop()
            if (V in I) return ($.value = V), ($.done = !1), $
          }
          return ($.done = !0), $
        }
      )
    }),
    (t.values = z),
    (A.prototype = {
      constructor: A,
      reset: function (I) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = e),
          (this.done = !1),
          (this.delegate = null),
          (this.method = 'next'),
          (this.arg = e),
          this.tryEntries.forEach(O),
          !I)
        )
          for (var N in this)
            N.charAt(0) === 't' &&
              r.call(this, N) &&
              !isNaN(+N.slice(1)) &&
              (this[N] = e)
      },
      stop: function () {
        this.done = !0
        var I = this.tryEntries[0].completion
        if (I.type === 'throw') throw I.arg
        return this.rval
      },
      dispatchException: function (I) {
        if (this.done) throw I
        var N = this
        function F(Z, se) {
          return (
            (q.type = 'throw'),
            (q.arg = I),
            (N.next = Z),
            se && ((N.method = 'next'), (N.arg = e)),
            !!se
          )
        }
        for (var $ = this.tryEntries.length - 1; $ >= 0; --$) {
          var V = this.tryEntries[$],
            q = V.completion
          if (V.tryLoc === 'root') return F('end')
          if (V.tryLoc <= this.prev) {
            var G = r.call(V, 'catchLoc'),
              U = r.call(V, 'finallyLoc')
            if (G && U) {
              if (this.prev < V.catchLoc) return F(V.catchLoc, !0)
              if (this.prev < V.finallyLoc) return F(V.finallyLoc)
            } else if (G) {
              if (this.prev < V.catchLoc) return F(V.catchLoc, !0)
            } else {
              if (!U) throw Error('try statement without catch or finally')
              if (this.prev < V.finallyLoc) return F(V.finallyLoc)
            }
          }
        }
      },
      abrupt: function (I, N) {
        for (var F = this.tryEntries.length - 1; F >= 0; --F) {
          var $ = this.tryEntries[F]
          if (
            $.tryLoc <= this.prev &&
            r.call($, 'finallyLoc') &&
            this.prev < $.finallyLoc
          ) {
            var V = $
            break
          }
        }
        V &&
          (I === 'break' || I === 'continue') &&
          V.tryLoc <= N &&
          N <= V.finallyLoc &&
          (V = null)
        var q = V ? V.completion : {}
        return (
          (q.type = I),
          (q.arg = N),
          V
            ? ((this.method = 'next'), (this.next = V.finallyLoc), x)
            : this.complete(q)
        )
      },
      complete: function (I, N) {
        if (I.type === 'throw') throw I.arg
        return (
          I.type === 'break' || I.type === 'continue'
            ? (this.next = I.arg)
            : I.type === 'return'
            ? ((this.rval = this.arg = I.arg),
              (this.method = 'return'),
              (this.next = 'end'))
            : I.type === 'normal' && N && (this.next = N),
          x
        )
      },
      finish: function (I) {
        for (var N = this.tryEntries.length - 1; N >= 0; --N) {
          var F = this.tryEntries[N]
          if (F.finallyLoc === I)
            return this.complete(F.completion, F.afterLoc), O(F), x
        }
      },
      catch: function (I) {
        for (var N = this.tryEntries.length - 1; N >= 0; --N) {
          var F = this.tryEntries[N]
          if (F.tryLoc === I) {
            var $ = F.completion
            if ($.type === 'throw') {
              var V = $.arg
              O(F)
            }
            return V
          }
        }
        throw Error('illegal catch attempt')
      },
      delegateYield: function (I, N, F) {
        return (
          (this.delegate = { iterator: z(I), resultName: N, nextLoc: F }),
          this.method === 'next' && (this.arg = e),
          x
        )
      }
    }),
    t
  )
}
function bv(e, t, n, r, i, o, a) {
  try {
    var s = e[o](a),
      l = s.value
  } catch (u) {
    return void n(u)
  }
  s.done ? t(l) : Promise.resolve(l).then(r, i)
}
function Ir(e) {
  return function () {
    var t = this,
      n = arguments
    return new Promise(function (r, i) {
      var o = e.apply(t, n)
      function a(l) {
        bv(o, r, i, a, s, 'next', l)
      }
      function s(l) {
        bv(o, r, i, a, s, 'throw', l)
      }
      a(void 0)
    })
  }
}
var ba = B({}, lx),
  L3 = ba.version,
  sc = ba.render,
  A3 = ba.unmountComponentAtNode,
  Zl
try {
  var R3 = Number((L3 || '').split('.')[0])
  R3 >= 18 && (Zl = ba.createRoot)
} catch {}
function Sv(e) {
  var t = ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  t && X(t) === 'object' && (t.usingClientEntryPoint = e)
}
var hl = '__rc_react_root__'
function I3(e, t) {
  Sv(!0)
  var n = t[hl] || Zl(t)
  Sv(!1), n.render(e), (t[hl] = n)
}
function F3(e, t) {
  sc == null || sc(e, t)
}
function $3(e, t) {
  if (Zl) {
    I3(e, t)
    return
  }
  F3(e, t)
}
function D3(e) {
  return tf.apply(this, arguments)
}
function tf() {
  return (
    (tf = Ir(
      Ue().mark(function e(t) {
        return Ue().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                return r.abrupt(
                  'return',
                  Promise.resolve().then(function () {
                    var i
                    ;(i = t[hl]) === null || i === void 0 || i.unmount(),
                      delete t[hl]
                  })
                )
              case 1:
              case 'end':
                return r.stop()
            }
        }, e)
      })
    )),
    tf.apply(this, arguments)
  )
}
function z3(e) {
  A3(e)
}
function V3(e) {
  return nf.apply(this, arguments)
}
function nf() {
  return (
    (nf = Ir(
      Ue().mark(function e(t) {
        return Ue().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                if (Zl === void 0) {
                  r.next = 2
                  break
                }
                return r.abrupt('return', D3(t))
              case 2:
                z3(t)
              case 3:
              case 'end':
                return r.stop()
            }
        }, e)
      })
    )),
    nf.apply(this, arguments)
  )
}
const B3 = (e, t) => ($3(e, t), () => V3(t))
let H3 = B3
function q3() {
  return H3
}
const W3 = function (e) {
    if (!e) return !1
    if (e instanceof Element) {
      if (e.offsetParent) return !0
      if (e.getBBox) {
        var t = e.getBBox(),
          n = t.width,
          r = t.height
        if (n || r) return !0
      }
      if (e.getBoundingClientRect) {
        var i = e.getBoundingClientRect(),
          o = i.width,
          a = i.height
        if (o || a) return !0
      }
    }
    return !1
  },
  U3 = (e) => {
    const { componentCls: t, colorPrimary: n } = e
    return {
      [t]: {
        position: 'absolute',
        background: 'transparent',
        pointerEvents: 'none',
        boxSizing: 'border-box',
        color: `var(--wave-color, ${n})`,
        boxShadow: '0 0 0 0 currentcolor',
        opacity: 0.2,
        '&.wave-motion-appear': {
          transition: [
            `box-shadow 0.4s ${e.motionEaseOutCirc}`,
            `opacity 2s ${e.motionEaseOutCirc}`
          ].join(','),
          '&-active': { boxShadow: '0 0 0 6px currentcolor', opacity: 0 },
          '&.wave-quick': {
            transition: [
              `box-shadow ${e.motionDurationSlow} ${e.motionEaseInOut}`,
              `opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`
            ].join(',')
          }
        }
      }
    }
  },
  G3 = X8('Wave', (e) => [U3(e)]),
  Ip = `${fl}-wave-target`
function lc(e) {
  return (
    e &&
    e !== '#fff' &&
    e !== '#ffffff' &&
    e !== 'rgb(255, 255, 255)' &&
    e !== 'rgba(255, 255, 255, 1)' &&
    !/rgba\((?:\d*, ){3}0\)/.test(e) &&
    e !== 'transparent'
  )
}
function Q3(e) {
  const {
    borderTopColor: t,
    borderColor: n,
    backgroundColor: r
  } = getComputedStyle(e)
  return lc(t) ? t : lc(n) ? n : lc(r) ? r : null
}
function uc(e) {
  return Number.isNaN(e) ? 0 : e
}
const K3 = (e) => {
    const { className: t, target: n, component: r, registerUnmount: i } = e,
      o = j.useRef(null),
      a = j.useRef(null)
    j.useEffect(() => {
      a.current = i()
    }, [])
    const [s, l] = j.useState(null),
      [u, c] = j.useState([]),
      [f, d] = j.useState(0),
      [g, y] = j.useState(0),
      [_, x] = j.useState(0),
      [v, p] = j.useState(0),
      [m, w] = j.useState(!1),
      b = {
        left: f,
        top: g,
        width: _,
        height: v,
        borderRadius: u.map((E) => `${E}px`).join(' ')
      }
    s && (b['--wave-color'] = s)
    function C() {
      const E = getComputedStyle(n)
      l(Q3(n))
      const T = E.position === 'static',
        { borderLeftWidth: k, borderTopWidth: M } = E
      d(T ? n.offsetLeft : uc(-parseFloat(k))),
        y(T ? n.offsetTop : uc(-parseFloat(M))),
        x(n.offsetWidth),
        p(n.offsetHeight)
      const {
        borderTopLeftRadius: L,
        borderTopRightRadius: O,
        borderBottomLeftRadius: A,
        borderBottomRightRadius: z
      } = E
      c([L, O, z, A].map((R) => uc(parseFloat(R))))
    }
    if (
      (j.useEffect(() => {
        if (n) {
          const E = Tn(() => {
            C(), w(!0)
          })
          let T
          return (
            typeof ResizeObserver < 'u' &&
              ((T = new ResizeObserver(C)), T.observe(n)),
            () => {
              Tn.cancel(E), T == null || T.disconnect()
            }
          )
        }
      }, []),
      !m)
    )
      return null
    const S =
      (r === 'Checkbox' || r === 'Radio') &&
      (n == null ? void 0 : n.classList.contains(Ip))
    return j.createElement(
      n2,
      {
        visible: !0,
        motionAppear: !0,
        motionName: 'wave-motion',
        motionDeadline: 5e3,
        onAppearEnd: (E, T) => {
          var k, M
          if (T.deadline || T.propertyName === 'opacity') {
            const L =
              (k = o.current) === null || k === void 0
                ? void 0
                : k.parentElement
            ;(M = a.current) === null ||
              M === void 0 ||
              M.call(a).then(() => {
                L == null || L.remove()
              })
          }
          return !1
        }
      },
      (E, T) => {
        let { className: k } = E
        return j.createElement('div', {
          ref: Cp(o, T),
          className: Mr(t, k, { 'wave-quick': S }),
          style: b
        })
      }
    )
  },
  X3 = (e, t) => {
    var n
    const { component: r } = t
    if (
      r === 'Checkbox' &&
      !(!((n = e.querySelector('input')) === null || n === void 0) && n.checked)
    )
      return
    const i = document.createElement('div')
    ;(i.style.position = 'absolute'),
      (i.style.left = '0px'),
      (i.style.top = '0px'),
      e == null || e.insertBefore(i, e == null ? void 0 : e.firstChild)
    const o = q3()
    let a = null
    function s() {
      return a
    }
    a = o(
      j.createElement(
        K3,
        Object.assign({}, t, { target: e, registerUnmount: s })
      ),
      i
    )
  },
  Y3 = (e, t, n) => {
    const { wave: r } = j.useContext(kn),
      [, i, o] = wa(),
      a = Ri((u) => {
        const c = e.current
        if ((r != null && r.disabled) || !c) return
        const f = c.querySelector(`.${Ip}`) || c,
          { showEffect: d } = r || {}
        ;(d || X3)(f, {
          className: t,
          token: i,
          component: n,
          event: u,
          hashId: o
        })
      }),
      s = j.useRef(null)
    return (u) => {
      Tn.cancel(s.current),
        (s.current = Tn(() => {
          a(u)
        }))
    }
  },
  Z3 = (e) => {
    const { children: t, disabled: n, component: r } = e,
      { getPrefixCls: i } = j.useContext(kn),
      o = j.useRef(null),
      a = i('wave'),
      [, s] = G3(a),
      l = Y3(o, Mr(a, s), r)
    if (
      (te.useEffect(() => {
        const c = o.current
        if (!c || c.nodeType !== 1 || n) return
        const f = (d) => {
          !W3(d.target) ||
            !c.getAttribute ||
            c.getAttribute('disabled') ||
            c.disabled ||
            c.className.includes('disabled') ||
            c.className.includes('-leave') ||
            l(d)
        }
        return (
          c.addEventListener('click', f, !0),
          () => {
            c.removeEventListener('click', f, !0)
          }
        )
      }, [n]),
      !te.isValidElement(t))
    )
      return t ?? null
    const u = ty(t) ? Cp(ry(t), o) : o
    return O3(t, { ref: u })
  }
var gr = 'RC_FORM_INTERNAL_HOOKS',
  ae = function () {
    kt(
      !1,
      'Can not find FormContext. Please make sure you wrap Field under Form.'
    )
  },
  Ii = j.createContext({
    getFieldValue: ae,
    getFieldsValue: ae,
    getFieldError: ae,
    getFieldWarning: ae,
    getFieldsError: ae,
    isFieldsTouched: ae,
    isFieldTouched: ae,
    isFieldValidating: ae,
    isFieldsValidating: ae,
    resetFields: ae,
    setFields: ae,
    setFieldValue: ae,
    setFieldsValue: ae,
    validateFields: ae,
    submit: ae,
    getInternalHooks: function () {
      return (
        ae(),
        {
          dispatch: ae,
          initEntityValue: ae,
          registerField: ae,
          useSubscribe: ae,
          setInitialValues: ae,
          destroyForm: ae,
          setCallbacks: ae,
          registerWatch: ae,
          getFields: ae,
          setValidateMessages: ae,
          setPreserve: ae,
          getInitialValue: ae
        }
      )
    }
  }),
  ml = j.createContext(null)
function rf(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e]
}
function J3(e) {
  return e && !!e._init
}
function of() {
  return {
    default: 'Validation error on field %s',
    required: '%s is required',
    enum: '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid'
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      boolean: '%s is not a %s',
      integer: '%s is not an %s',
      float: '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s'
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters'
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s'
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length'
    },
    pattern: { mismatch: '%s value %s does not match pattern %s' },
    clone: function () {
      var t = JSON.parse(JSON.stringify(this))
      return (t.clone = this.clone), t
    }
  }
}
var af = of()
function ej(e) {
  try {
    return Function.toString.call(e).indexOf('[native code]') !== -1
  } catch {
    return typeof e == 'function'
  }
}
function tj(e, t, n) {
  if (Ep()) return Reflect.construct.apply(null, arguments)
  var r = [null]
  r.push.apply(r, t)
  var i = new (e.bind.apply(e, r))()
  return n && ea(i, n.prototype), i
}
function sf(e) {
  var t = typeof Map == 'function' ? new Map() : void 0
  return (
    (sf = function (r) {
      if (r === null || !ej(r)) return r
      if (typeof r != 'function')
        throw new TypeError(
          'Super expression must either be null or a function'
        )
      if (t !== void 0) {
        if (t.has(r)) return t.get(r)
        t.set(r, i)
      }
      function i() {
        return tj(r, arguments, ta(this).constructor)
      }
      return (
        (i.prototype = Object.create(r.prototype, {
          constructor: {
            value: i,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
        ea(i, r)
      )
    }),
    sf(e)
  )
}
var nj = /%[sdj%]/g,
  rj = function () {}
function lf(e) {
  if (!e || !e.length) return null
  var t = {}
  return (
    e.forEach(function (n) {
      var r = n.field
      ;(t[r] = t[r] || []), t[r].push(n)
    }),
    t
  )
}
function ct(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r]
  var i = 0,
    o = n.length
  if (typeof e == 'function') return e.apply(null, n)
  if (typeof e == 'string') {
    var a = e.replace(nj, function (s) {
      if (s === '%%') return '%'
      if (i >= o) return s
      switch (s) {
        case '%s':
          return String(n[i++])
        case '%d':
          return Number(n[i++])
        case '%j':
          try {
            return JSON.stringify(n[i++])
          } catch {
            return '[Circular]'
          }
          break
        default:
          return s
      }
    })
    return a
  }
  return e
}
function ij(e) {
  return (
    e === 'string' ||
    e === 'url' ||
    e === 'hex' ||
    e === 'email' ||
    e === 'date' ||
    e === 'pattern'
  )
}
function Ce(e, t) {
  return !!(
    e == null ||
    (t === 'array' && Array.isArray(e) && !e.length) ||
    (ij(t) && typeof e == 'string' && !e)
  )
}
function oj(e, t, n) {
  var r = [],
    i = 0,
    o = e.length
  function a(s) {
    r.push.apply(r, Q(s || [])), i++, i === o && n(r)
  }
  e.forEach(function (s) {
    t(s, a)
  })
}
function Cv(e, t, n) {
  var r = 0,
    i = e.length
  function o(a) {
    if (a && a.length) {
      n(a)
      return
    }
    var s = r
    ;(r = r + 1), s < i ? t(e[s], o) : n([])
  }
  o([])
}
function aj(e) {
  var t = []
  return (
    Object.keys(e).forEach(function (n) {
      t.push.apply(t, Q(e[n] || []))
    }),
    t
  )
}
var Ev = (function (e) {
  zi(n, e)
  var t = Vi(n)
  function n(r, i) {
    var o
    return (
      tt(this, n),
      (o = t.call(this, 'Async Validation Error')),
      D(Y(o), 'errors', void 0),
      D(Y(o), 'fields', void 0),
      (o.errors = r),
      (o.fields = i),
      o
    )
  }
  return nt(n)
})(sf(Error))
function sj(e, t, n, r, i) {
  if (t.first) {
    var o = new Promise(function (d, g) {
      var y = function (v) {
          return r(v), v.length ? g(new Ev(v, lf(v))) : d(i)
        },
        _ = aj(e)
      Cv(_, n, y)
    })
    return (
      o.catch(function (d) {
        return d
      }),
      o
    )
  }
  var a = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [],
    s = Object.keys(e),
    l = s.length,
    u = 0,
    c = [],
    f = new Promise(function (d, g) {
      var y = function (x) {
        if ((c.push.apply(c, x), u++, u === l))
          return r(c), c.length ? g(new Ev(c, lf(c))) : d(i)
      }
      s.length || (r(c), d(i)),
        s.forEach(function (_) {
          var x = e[_]
          a.indexOf(_) !== -1 ? Cv(x, n, y) : oj(x, n, y)
        })
    })
  return (
    f.catch(function (d) {
      return d
    }),
    f
  )
}
function lj(e) {
  return !!(e && e.message !== void 0)
}
function uj(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null) return n
    n = n[t[r]]
  }
  return n
}
function Tv(e, t) {
  return function (n) {
    var r
    return (
      e.fullFields
        ? (r = uj(t, e.fullFields))
        : (r = t[n.field || e.fullField]),
      lj(n)
        ? ((n.field = n.field || e.fullField), (n.fieldValue = r), n)
        : {
            message: typeof n == 'function' ? n() : n,
            fieldValue: r,
            field: n.field || e.fullField
          }
    )
  }
}
function kv(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n]
        X(r) === 'object' && X(e[n]) === 'object'
          ? (e[n] = B(B({}, e[n]), r))
          : (e[n] = r)
      }
  }
  return e
}
var Xr = 'enum',
  cj = function (t, n, r, i, o) {
    ;(t[Xr] = Array.isArray(t[Xr]) ? t[Xr] : []),
      t[Xr].indexOf(n) === -1 &&
        i.push(ct(o.messages[Xr], t.fullField, t[Xr].join(', ')))
  },
  dj = function (t, n, r, i, o) {
    if (t.pattern) {
      if (t.pattern instanceof RegExp)
        (t.pattern.lastIndex = 0),
          t.pattern.test(n) ||
            i.push(ct(o.messages.pattern.mismatch, t.fullField, n, t.pattern))
      else if (typeof t.pattern == 'string') {
        var a = new RegExp(t.pattern)
        a.test(n) ||
          i.push(ct(o.messages.pattern.mismatch, t.fullField, n, t.pattern))
      }
    }
  },
  fj = function (t, n, r, i, o) {
    var a = typeof t.len == 'number',
      s = typeof t.min == 'number',
      l = typeof t.max == 'number',
      u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
      c = n,
      f = null,
      d = typeof n == 'number',
      g = typeof n == 'string',
      y = Array.isArray(n)
    if ((d ? (f = 'number') : g ? (f = 'string') : y && (f = 'array'), !f))
      return !1
    y && (c = n.length),
      g && (c = n.replace(u, '_').length),
      a
        ? c !== t.len && i.push(ct(o.messages[f].len, t.fullField, t.len))
        : s && !l && c < t.min
        ? i.push(ct(o.messages[f].min, t.fullField, t.min))
        : l && !s && c > t.max
        ? i.push(ct(o.messages[f].max, t.fullField, t.max))
        : s &&
          l &&
          (c < t.min || c > t.max) &&
          i.push(ct(o.messages[f].range, t.fullField, t.min, t.max))
  },
  o2 = function (t, n, r, i, o, a) {
    t.required &&
      (!r.hasOwnProperty(t.field) || Ce(n, a || t.type)) &&
      i.push(ct(o.messages.required, t.fullField))
  },
  ls
const pj = function () {
  if (ls) return ls
  var e = '[a-fA-F\\d:]',
    t = function (C) {
      return C && C.includeBoundaries
        ? '(?:(?<=\\s|^)(?='.concat(e, ')|(?<=').concat(e, ')(?=\\s|$))')
        : ''
    },
    n =
      '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}',
    r = '[a-fA-F\\d]{1,4}',
    i = [
      '(?:'.concat(r, ':){7}(?:').concat(r, '|:)'),
      '(?:'.concat(r, ':){6}(?:').concat(n, '|:').concat(r, '|:)'),
      '(?:'.concat(r, ':){5}(?::').concat(n, '|(?::').concat(r, '){1,2}|:)'),
      '(?:'
        .concat(r, ':){4}(?:(?::')
        .concat(r, '){0,1}:')
        .concat(n, '|(?::')
        .concat(r, '){1,3}|:)'),
      '(?:'
        .concat(r, ':){3}(?:(?::')
        .concat(r, '){0,2}:')
        .concat(n, '|(?::')
        .concat(r, '){1,4}|:)'),
      '(?:'
        .concat(r, ':){2}(?:(?::')
        .concat(r, '){0,3}:')
        .concat(n, '|(?::')
        .concat(r, '){1,5}|:)'),
      '(?:'
        .concat(r, ':){1}(?:(?::')
        .concat(r, '){0,4}:')
        .concat(n, '|(?::')
        .concat(r, '){1,6}|:)'),
      '(?::(?:(?::'
        .concat(r, '){0,5}:')
        .concat(n, '|(?::')
        .concat(r, '){1,7}|:))')
    ],
    o = '(?:%[0-9a-zA-Z]{1,})?',
    a = '(?:'.concat(i.join('|'), ')').concat(o),
    s = new RegExp('(?:^'.concat(n, '$)|(?:^').concat(a, '$)')),
    l = new RegExp('^'.concat(n, '$')),
    u = new RegExp('^'.concat(a, '$')),
    c = function (C) {
      return C && C.exact
        ? s
        : new RegExp(
            '(?:'
              .concat(t(C))
              .concat(n)
              .concat(t(C), ')|(?:')
              .concat(t(C))
              .concat(a)
              .concat(t(C), ')'),
            'g'
          )
    }
  ;(c.v4 = function (b) {
    return b && b.exact
      ? l
      : new RegExp(''.concat(t(b)).concat(n).concat(t(b)), 'g')
  }),
    (c.v6 = function (b) {
      return b && b.exact
        ? u
        : new RegExp(''.concat(t(b)).concat(a).concat(t(b)), 'g')
    })
  var f = '(?:(?:[a-z]+:)?//)',
    d = '(?:\\S+(?::\\S*)?@)?',
    g = c.v4().source,
    y = c.v6().source,
    _ = '(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)',
    x = '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*',
    v = '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))',
    p = '(?::\\d{2,5})?',
    m = '(?:[/?#][^\\s"]*)?',
    w = '(?:'
      .concat(f, '|www\\.)')
      .concat(d, '(?:localhost|')
      .concat(g, '|')
      .concat(y, '|')
      .concat(_)
      .concat(x)
      .concat(v, ')')
      .concat(p)
      .concat(m)
  return (ls = new RegExp('(?:^'.concat(w, '$)'), 'i')), ls
}
var jv = {
    email:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
    hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
  },
  fo = {
    integer: function (t) {
      return fo.number(t) && parseInt(t, 10) === t
    },
    float: function (t) {
      return fo.number(t) && !fo.integer(t)
    },
    array: function (t) {
      return Array.isArray(t)
    },
    regexp: function (t) {
      if (t instanceof RegExp) return !0
      try {
        return !!new RegExp(t)
      } catch {
        return !1
      }
    },
    date: function (t) {
      return (
        typeof t.getTime == 'function' &&
        typeof t.getMonth == 'function' &&
        typeof t.getYear == 'function' &&
        !isNaN(t.getTime())
      )
    },
    number: function (t) {
      return isNaN(t) ? !1 : typeof t == 'number'
    },
    object: function (t) {
      return X(t) === 'object' && !fo.array(t)
    },
    method: function (t) {
      return typeof t == 'function'
    },
    email: function (t) {
      return typeof t == 'string' && t.length <= 320 && !!t.match(jv.email)
    },
    url: function (t) {
      return typeof t == 'string' && t.length <= 2048 && !!t.match(pj())
    },
    hex: function (t) {
      return typeof t == 'string' && !!t.match(jv.hex)
    }
  },
  hj = function (t, n, r, i, o) {
    if (t.required && n === void 0) {
      o2(t, n, r, i, o)
      return
    }
    var a = [
        'integer',
        'float',
        'array',
        'regexp',
        'object',
        'method',
        'email',
        'number',
        'date',
        'url',
        'hex'
      ],
      s = t.type
    a.indexOf(s) > -1
      ? fo[s](n) || i.push(ct(o.messages.types[s], t.fullField, t.type))
      : s &&
        X(n) !== t.type &&
        i.push(ct(o.messages.types[s], t.fullField, t.type))
  },
  mj = function (t, n, r, i, o) {
    ;(/^\s+$/.test(n) || n === '') &&
      i.push(ct(o.messages.whitespace, t.fullField))
  }
const ee = {
  required: o2,
  whitespace: mj,
  type: hj,
  range: fj,
  enum: cj,
  pattern: dj
}
var vj = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (Ce(n) && !t.required) return r()
      ee.required(t, n, i, a, o)
    }
    r(a)
  },
  gj = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (n == null && !t.required) return r()
      ee.required(t, n, i, a, o, 'array'),
        n != null && (ee.type(t, n, i, a, o), ee.range(t, n, i, a, o))
    }
    r(a)
  },
  yj = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (Ce(n) && !t.required) return r()
      ee.required(t, n, i, a, o), n !== void 0 && ee.type(t, n, i, a, o)
    }
    r(a)
  },
  _j = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (Ce(n, 'date') && !t.required) return r()
      if ((ee.required(t, n, i, a, o), !Ce(n, 'date'))) {
        var l
        n instanceof Date ? (l = n) : (l = new Date(n)),
          ee.type(t, l, i, a, o),
          l && ee.range(t, l.getTime(), i, a, o)
      }
    }
    r(a)
  },
  wj = 'enum',
  xj = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (Ce(n) && !t.required) return r()
      ee.required(t, n, i, a, o), n !== void 0 && ee[wj](t, n, i, a, o)
    }
    r(a)
  },
  bj = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (Ce(n) && !t.required) return r()
      ee.required(t, n, i, a, o),
        n !== void 0 && (ee.type(t, n, i, a, o), ee.range(t, n, i, a, o))
    }
    r(a)
  },
  Sj = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (Ce(n) && !t.required) return r()
      ee.required(t, n, i, a, o),
        n !== void 0 && (ee.type(t, n, i, a, o), ee.range(t, n, i, a, o))
    }
    r(a)
  },
  Cj = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (Ce(n) && !t.required) return r()
      ee.required(t, n, i, a, o), n !== void 0 && ee.type(t, n, i, a, o)
    }
    r(a)
  },
  Ej = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if ((n === '' && (n = void 0), Ce(n) && !t.required)) return r()
      ee.required(t, n, i, a, o),
        n !== void 0 && (ee.type(t, n, i, a, o), ee.range(t, n, i, a, o))
    }
    r(a)
  },
  Tj = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (Ce(n) && !t.required) return r()
      ee.required(t, n, i, a, o), n !== void 0 && ee.type(t, n, i, a, o)
    }
    r(a)
  },
  kj = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (Ce(n, 'string') && !t.required) return r()
      ee.required(t, n, i, a, o), Ce(n, 'string') || ee.pattern(t, n, i, a, o)
    }
    r(a)
  },
  jj = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (Ce(n) && !t.required) return r()
      ee.required(t, n, i, a, o), Ce(n) || ee.type(t, n, i, a, o)
    }
    r(a)
  },
  Pj = function (t, n, r, i, o) {
    var a = [],
      s = Array.isArray(n) ? 'array' : X(n)
    ee.required(t, n, i, a, o, s), r(a)
  },
  Mj = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (Ce(n, 'string') && !t.required) return r()
      ee.required(t, n, i, a, o, 'string'),
        Ce(n, 'string') ||
          (ee.type(t, n, i, a, o),
          ee.range(t, n, i, a, o),
          ee.pattern(t, n, i, a, o),
          t.whitespace === !0 && ee.whitespace(t, n, i, a, o))
    }
    r(a)
  },
  cc = function (t, n, r, i, o) {
    var a = t.type,
      s = [],
      l = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (l) {
      if (Ce(n, a) && !t.required) return r()
      ee.required(t, n, i, s, o, a), Ce(n, a) || ee.type(t, n, i, s, o)
    }
    r(s)
  }
const jo = {
  string: Mj,
  method: Cj,
  number: Ej,
  boolean: yj,
  regexp: jj,
  integer: Sj,
  float: bj,
  array: gj,
  object: Tj,
  enum: xj,
  pattern: kj,
  date: _j,
  url: cc,
  hex: cc,
  email: cc,
  required: Pj,
  any: vj
}
var Sa = (function () {
  function e(t) {
    tt(this, e),
      D(this, 'rules', null),
      D(this, '_messages', af),
      this.define(t)
  }
  return (
    nt(e, [
      {
        key: 'define',
        value: function (n) {
          var r = this
          if (!n) throw new Error('Cannot configure a schema with no rules')
          if (X(n) !== 'object' || Array.isArray(n))
            throw new Error('Rules must be an object')
          ;(this.rules = {}),
            Object.keys(n).forEach(function (i) {
              var o = n[i]
              r.rules[i] = Array.isArray(o) ? o : [o]
            })
        }
      },
      {
        key: 'messages',
        value: function (n) {
          return n && (this._messages = kv(of(), n)), this._messages
        }
      },
      {
        key: 'validate',
        value: function (n) {
          var r = this,
            i =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            o =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : function () {},
            a = n,
            s = i,
            l = o
          if (
            (typeof s == 'function' && ((l = s), (s = {})),
            !this.rules || Object.keys(this.rules).length === 0)
          )
            return l && l(null, a), Promise.resolve(a)
          function u(y) {
            var _ = [],
              x = {}
            function v(m) {
              if (Array.isArray(m)) {
                var w
                _ = (w = _).concat.apply(w, Q(m))
              } else _.push(m)
            }
            for (var p = 0; p < y.length; p++) v(y[p])
            _.length ? ((x = lf(_)), l(_, x)) : l(null, a)
          }
          if (s.messages) {
            var c = this.messages()
            c === af && (c = of()), kv(c, s.messages), (s.messages = c)
          } else s.messages = this.messages()
          var f = {},
            d = s.keys || Object.keys(this.rules)
          d.forEach(function (y) {
            var _ = r.rules[y],
              x = a[y]
            _.forEach(function (v) {
              var p = v
              typeof p.transform == 'function' &&
                (a === n && (a = B({}, a)),
                (x = a[y] = p.transform(x)),
                x != null &&
                  (p.type = p.type || (Array.isArray(x) ? 'array' : X(x)))),
                typeof p == 'function'
                  ? (p = { validator: p })
                  : (p = B({}, p)),
                (p.validator = r.getValidationMethod(p)),
                p.validator &&
                  ((p.field = y),
                  (p.fullField = p.fullField || y),
                  (p.type = r.getType(p)),
                  (f[y] = f[y] || []),
                  f[y].push({ rule: p, value: x, source: a, field: y }))
            })
          })
          var g = {}
          return sj(
            f,
            s,
            function (y, _) {
              var x = y.rule,
                v =
                  (x.type === 'object' || x.type === 'array') &&
                  (X(x.fields) === 'object' || X(x.defaultField) === 'object')
              ;(v = v && (x.required || (!x.required && y.value))),
                (x.field = y.field)
              function p(S, E) {
                return B(
                  B({}, E),
                  {},
                  {
                    fullField: ''.concat(x.fullField, '.').concat(S),
                    fullFields: x.fullFields
                      ? [].concat(Q(x.fullFields), [S])
                      : [S]
                  }
                )
              }
              function m() {
                var S =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : [],
                  E = Array.isArray(S) ? S : [S]
                !s.suppressWarning &&
                  E.length &&
                  e.warning('async-validator:', E),
                  E.length && x.message !== void 0 && (E = [].concat(x.message))
                var T = E.map(Tv(x, a))
                if (s.first && T.length) return (g[x.field] = 1), _(T)
                if (!v) _(T)
                else {
                  if (x.required && !y.value)
                    return (
                      x.message !== void 0
                        ? (T = [].concat(x.message).map(Tv(x, a)))
                        : s.error &&
                          (T = [s.error(x, ct(s.messages.required, x.field))]),
                      _(T)
                    )
                  var k = {}
                  x.defaultField &&
                    Object.keys(y.value).map(function (O) {
                      k[O] = x.defaultField
                    }),
                    (k = B(B({}, k), y.rule.fields))
                  var M = {}
                  Object.keys(k).forEach(function (O) {
                    var A = k[O],
                      z = Array.isArray(A) ? A : [A]
                    M[O] = z.map(p.bind(null, O))
                  })
                  var L = new e(M)
                  L.messages(s.messages),
                    y.rule.options &&
                      ((y.rule.options.messages = s.messages),
                      (y.rule.options.error = s.error)),
                    L.validate(y.value, y.rule.options || s, function (O) {
                      var A = []
                      T && T.length && A.push.apply(A, Q(T)),
                        O && O.length && A.push.apply(A, Q(O)),
                        _(A.length ? A : null)
                    })
                }
              }
              var w
              if (x.asyncValidator)
                w = x.asyncValidator(x, y.value, m, y.source, s)
              else if (x.validator) {
                try {
                  w = x.validator(x, y.value, m, y.source, s)
                } catch (S) {
                  var b, C
                  ;(b = (C = console).error) === null ||
                    b === void 0 ||
                    b.call(C, S),
                    s.suppressValidatorError ||
                      setTimeout(function () {
                        throw S
                      }, 0),
                    m(S.message)
                }
                w === !0
                  ? m()
                  : w === !1
                  ? m(
                      typeof x.message == 'function'
                        ? x.message(x.fullField || x.field)
                        : x.message ||
                            ''.concat(x.fullField || x.field, ' fails')
                    )
                  : w instanceof Array
                  ? m(w)
                  : w instanceof Error && m(w.message)
              }
              w &&
                w.then &&
                w.then(
                  function () {
                    return m()
                  },
                  function (S) {
                    return m(S)
                  }
                )
            },
            function (y) {
              u(y)
            },
            a
          )
        }
      },
      {
        key: 'getType',
        value: function (n) {
          if (
            (n.type === void 0 &&
              n.pattern instanceof RegExp &&
              (n.type = 'pattern'),
            typeof n.validator != 'function' &&
              n.type &&
              !jo.hasOwnProperty(n.type))
          )
            throw new Error(ct('Unknown rule type %s', n.type))
          return n.type || 'string'
        }
      },
      {
        key: 'getValidationMethod',
        value: function (n) {
          if (typeof n.validator == 'function') return n.validator
          var r = Object.keys(n),
            i = r.indexOf('message')
          return (
            i !== -1 && r.splice(i, 1),
            r.length === 1 && r[0] === 'required'
              ? jo.required
              : jo[this.getType(n)] || void 0
          )
        }
      }
    ]),
    e
  )
})()
D(Sa, 'register', function (t, n) {
  if (typeof n != 'function')
    throw new Error(
      'Cannot register a validator by type, validator is not a function'
    )
  jo[t] = n
})
D(Sa, 'warning', rj)
D(Sa, 'messages', af)
D(Sa, 'validators', jo)
var it = "'${name}' is not a valid ${type}",
  a2 = {
    default: "Validation error on field '${name}'",
    required: "'${name}' is required",
    enum: "'${name}' must be one of [${enum}]",
    whitespace: "'${name}' cannot be empty",
    date: {
      format: "'${name}' is invalid for format date",
      parse: "'${name}' could not be parsed as date",
      invalid: "'${name}' is invalid date"
    },
    types: {
      string: it,
      method: it,
      array: it,
      object: it,
      number: it,
      date: it,
      boolean: it,
      integer: it,
      float: it,
      regexp: it,
      email: it,
      url: it,
      hex: it
    },
    string: {
      len: "'${name}' must be exactly ${len} characters",
      min: "'${name}' must be at least ${min} characters",
      max: "'${name}' cannot be longer than ${max} characters",
      range: "'${name}' must be between ${min} and ${max} characters"
    },
    number: {
      len: "'${name}' must equal ${len}",
      min: "'${name}' cannot be less than ${min}",
      max: "'${name}' cannot be greater than ${max}",
      range: "'${name}' must be between ${min} and ${max}"
    },
    array: {
      len: "'${name}' must be exactly ${len} in length",
      min: "'${name}' cannot be less than ${min} in length",
      max: "'${name}' cannot be greater than ${max} in length",
      range: "'${name}' must be between ${min} and ${max} in length"
    },
    pattern: { mismatch: "'${name}' does not match pattern ${pattern}" }
  },
  Pv = Sa
function Nj(e, t) {
  return e.replace(/\\?\$\{\w+\}/g, function (n) {
    if (n.startsWith('\\')) return n.slice(1)
    var r = n.slice(2, -1)
    return t[r]
  })
}
var Mv = 'CODE_LOGIC_ERROR'
function uf(e, t, n, r, i) {
  return cf.apply(this, arguments)
}
function cf() {
  return (
    (cf = Ir(
      Ue().mark(function e(t, n, r, i, o) {
        var a, s, l, u, c, f, d, g, y
        return Ue().wrap(
          function (x) {
            for (;;)
              switch ((x.prev = x.next)) {
                case 0:
                  return (
                    (a = B({}, r)),
                    delete a.ruleIndex,
                    (Pv.warning = function () {}),
                    a.validator &&
                      ((s = a.validator),
                      (a.validator = function () {
                        try {
                          return s.apply(void 0, arguments)
                        } catch (v) {
                          return console.error(v), Promise.reject(Mv)
                        }
                      })),
                    (l = null),
                    a &&
                      a.type === 'array' &&
                      a.defaultField &&
                      ((l = a.defaultField), delete a.defaultField),
                    (u = new Pv(D({}, t, [a]))),
                    (c = di(a2, i.validateMessages)),
                    u.messages(c),
                    (f = []),
                    (x.prev = 10),
                    (x.next = 13),
                    Promise.resolve(u.validate(D({}, t, n), B({}, i)))
                  )
                case 13:
                  x.next = 18
                  break
                case 15:
                  ;(x.prev = 15),
                    (x.t0 = x.catch(10)),
                    x.t0.errors &&
                      (f = x.t0.errors.map(function (v, p) {
                        var m = v.message,
                          w = m === Mv ? c.default : m
                        return j.isValidElement(w)
                          ? j.cloneElement(w, { key: 'error_'.concat(p) })
                          : w
                      }))
                case 18:
                  if (!(!f.length && l)) {
                    x.next = 23
                    break
                  }
                  return (
                    (x.next = 21),
                    Promise.all(
                      n.map(function (v, p) {
                        return uf(''.concat(t, '.').concat(p), v, l, i, o)
                      })
                    )
                  )
                case 21:
                  return (
                    (d = x.sent),
                    x.abrupt(
                      'return',
                      d.reduce(function (v, p) {
                        return [].concat(Q(v), Q(p))
                      }, [])
                    )
                  )
                case 23:
                  return (
                    (g = B(
                      B({}, r),
                      {},
                      { name: t, enum: (r.enum || []).join(', ') },
                      o
                    )),
                    (y = f.map(function (v) {
                      return typeof v == 'string' ? Nj(v, g) : v
                    })),
                    x.abrupt('return', y)
                  )
                case 26:
                case 'end':
                  return x.stop()
              }
          },
          e,
          null,
          [[10, 15]]
        )
      })
    )),
    cf.apply(this, arguments)
  )
}
function Oj(e, t, n, r, i, o) {
  var a = e.join('.'),
    s = n
      .map(function (c, f) {
        var d = c.validator,
          g = B(B({}, c), {}, { ruleIndex: f })
        return (
          d &&
            (g.validator = function (y, _, x) {
              var v = !1,
                p = function () {
                  for (
                    var b = arguments.length, C = new Array(b), S = 0;
                    S < b;
                    S++
                  )
                    C[S] = arguments[S]
                  Promise.resolve().then(function () {
                    kt(
                      !v,
                      'Your validator function has already return a promise. `callback` will be ignored.'
                    ),
                      v || x.apply(void 0, C)
                  })
                },
                m = d(y, _, p)
              ;(v =
                m &&
                typeof m.then == 'function' &&
                typeof m.catch == 'function'),
                kt(
                  v,
                  '`callback` is deprecated. Please return a promise instead.'
                ),
                v &&
                  m
                    .then(function () {
                      x()
                    })
                    .catch(function (w) {
                      x(w || ' ')
                    })
            }),
          g
        )
      })
      .sort(function (c, f) {
        var d = c.warningOnly,
          g = c.ruleIndex,
          y = f.warningOnly,
          _ = f.ruleIndex
        return !!d == !!y ? g - _ : d ? 1 : -1
      }),
    l
  if (i === !0)
    l = new Promise(
      (function () {
        var c = Ir(
          Ue().mark(function f(d, g) {
            var y, _, x
            return Ue().wrap(function (p) {
              for (;;)
                switch ((p.prev = p.next)) {
                  case 0:
                    y = 0
                  case 1:
                    if (!(y < s.length)) {
                      p.next = 12
                      break
                    }
                    return (_ = s[y]), (p.next = 5), uf(a, t, _, r, o)
                  case 5:
                    if (((x = p.sent), !x.length)) {
                      p.next = 9
                      break
                    }
                    return g([{ errors: x, rule: _ }]), p.abrupt('return')
                  case 9:
                    ;(y += 1), (p.next = 1)
                    break
                  case 12:
                    d([])
                  case 13:
                  case 'end':
                    return p.stop()
                }
            }, f)
          })
        )
        return function (f, d) {
          return c.apply(this, arguments)
        }
      })()
    )
  else {
    var u = s.map(function (c) {
      return uf(a, t, c, r, o).then(function (f) {
        return { errors: f, rule: c }
      })
    })
    l = (i ? Aj(u) : Lj(u)).then(function (c) {
      return Promise.reject(c)
    })
  }
  return (
    l.catch(function (c) {
      return c
    }),
    l
  )
}
function Lj(e) {
  return df.apply(this, arguments)
}
function df() {
  return (
    (df = Ir(
      Ue().mark(function e(t) {
        return Ue().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                return r.abrupt(
                  'return',
                  Promise.all(t).then(function (i) {
                    var o,
                      a = (o = []).concat.apply(o, Q(i))
                    return a
                  })
                )
              case 1:
              case 'end':
                return r.stop()
            }
        }, e)
      })
    )),
    df.apply(this, arguments)
  )
}
function Aj(e) {
  return ff.apply(this, arguments)
}
function ff() {
  return (
    (ff = Ir(
      Ue().mark(function e(t) {
        var n
        return Ue().wrap(function (i) {
          for (;;)
            switch ((i.prev = i.next)) {
              case 0:
                return (
                  (n = 0),
                  i.abrupt(
                    'return',
                    new Promise(function (o) {
                      t.forEach(function (a) {
                        a.then(function (s) {
                          s.errors.length && o([s]),
                            (n += 1),
                            n === t.length && o([])
                        })
                      })
                    })
                  )
                )
              case 2:
              case 'end':
                return i.stop()
            }
        }, e)
      })
    )),
    ff.apply(this, arguments)
  )
}
function ge(e) {
  return rf(e)
}
function Nv(e, t) {
  var n = {}
  return (
    t.forEach(function (r) {
      var i = en(e, r)
      n = It(n, r, i)
    }),
    n
  )
}
function Si(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1
  return (
    e &&
    e.some(function (r) {
      return s2(t, r, n)
    })
  )
}
function s2(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1
  return !e || !t || (!n && e.length !== t.length)
    ? !1
    : t.every(function (r, i) {
        return e[i] === r
      })
}
function Rj(e, t) {
  if (e === t) return !0
  if (
    (!e && t) ||
    (e && !t) ||
    !e ||
    !t ||
    X(e) !== 'object' ||
    X(t) !== 'object'
  )
    return !1
  var n = Object.keys(e),
    r = Object.keys(t),
    i = new Set([].concat(n, r))
  return Q(i).every(function (o) {
    var a = e[o],
      s = t[o]
    return typeof a == 'function' && typeof s == 'function' ? !0 : a === s
  })
}
function Ij(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1]
  return t && t.target && X(t.target) === 'object' && e in t.target
    ? t.target[e]
    : t
}
function Ov(e, t, n) {
  var r = e.length
  if (t < 0 || t >= r || n < 0 || n >= r) return e
  var i = e[t],
    o = t - n
  return o > 0
    ? [].concat(Q(e.slice(0, n)), [i], Q(e.slice(n, t)), Q(e.slice(t + 1, r)))
    : o < 0
    ? [].concat(
        Q(e.slice(0, t)),
        Q(e.slice(t + 1, n + 1)),
        [i],
        Q(e.slice(n + 1, r))
      )
    : e
}
var Fj = ['name'],
  _t = []
function dc(e, t, n, r, i, o) {
  return typeof e == 'function'
    ? e(t, n, 'source' in o ? { source: o.source } : {})
    : r !== i
}
var Fp = (function (e) {
  zi(n, e)
  var t = Vi(n)
  function n(r) {
    var i
    if (
      (tt(this, n),
      (i = t.call(this, r)),
      D(Y(i), 'state', { resetCount: 0 }),
      D(Y(i), 'cancelRegisterFunc', null),
      D(Y(i), 'mounted', !1),
      D(Y(i), 'touched', !1),
      D(Y(i), 'dirty', !1),
      D(Y(i), 'validatePromise', void 0),
      D(Y(i), 'prevValidating', void 0),
      D(Y(i), 'errors', _t),
      D(Y(i), 'warnings', _t),
      D(Y(i), 'cancelRegister', function () {
        var l = i.props,
          u = l.preserve,
          c = l.isListField,
          f = l.name
        i.cancelRegisterFunc && i.cancelRegisterFunc(c, u, ge(f)),
          (i.cancelRegisterFunc = null)
      }),
      D(Y(i), 'getNamePath', function () {
        var l = i.props,
          u = l.name,
          c = l.fieldContext,
          f = c.prefixName,
          d = f === void 0 ? [] : f
        return u !== void 0 ? [].concat(Q(d), Q(u)) : []
      }),
      D(Y(i), 'getRules', function () {
        var l = i.props,
          u = l.rules,
          c = u === void 0 ? [] : u,
          f = l.fieldContext
        return c.map(function (d) {
          return typeof d == 'function' ? d(f) : d
        })
      }),
      D(Y(i), 'refresh', function () {
        i.mounted &&
          i.setState(function (l) {
            var u = l.resetCount
            return { resetCount: u + 1 }
          })
      }),
      D(Y(i), 'metaCache', null),
      D(Y(i), 'triggerMetaEvent', function (l) {
        var u = i.props.onMetaChange
        if (u) {
          var c = B(B({}, i.getMeta()), {}, { destroy: l })
          Td(i.metaCache, c) || u(c), (i.metaCache = c)
        } else i.metaCache = null
      }),
      D(Y(i), 'onStoreChange', function (l, u, c) {
        var f = i.props,
          d = f.shouldUpdate,
          g = f.dependencies,
          y = g === void 0 ? [] : g,
          _ = f.onReset,
          x = c.store,
          v = i.getNamePath(),
          p = i.getValue(l),
          m = i.getValue(x),
          w = u && Si(u, v)
        switch (
          (c.type === 'valueUpdate' &&
            c.source === 'external' &&
            !Td(p, m) &&
            ((i.touched = !0),
            (i.dirty = !0),
            (i.validatePromise = null),
            (i.errors = _t),
            (i.warnings = _t),
            i.triggerMetaEvent()),
          c.type)
        ) {
          case 'reset':
            if (!u || w) {
              ;(i.touched = !1),
                (i.dirty = !1),
                (i.validatePromise = void 0),
                (i.errors = _t),
                (i.warnings = _t),
                i.triggerMetaEvent(),
                _ == null || _(),
                i.refresh()
              return
            }
            break
          case 'remove': {
            if (d && dc(d, l, x, p, m, c)) {
              i.reRender()
              return
            }
            break
          }
          case 'setField': {
            var b = c.data
            if (w) {
              'touched' in b && (i.touched = b.touched),
                'validating' in b &&
                  !('originRCField' in b) &&
                  (i.validatePromise = b.validating
                    ? Promise.resolve([])
                    : null),
                'errors' in b && (i.errors = b.errors || _t),
                'warnings' in b && (i.warnings = b.warnings || _t),
                (i.dirty = !0),
                i.triggerMetaEvent(),
                i.reRender()
              return
            } else if ('value' in b && Si(u, v, !0)) {
              i.reRender()
              return
            }
            if (d && !v.length && dc(d, l, x, p, m, c)) {
              i.reRender()
              return
            }
            break
          }
          case 'dependenciesUpdate': {
            var C = y.map(ge)
            if (
              C.some(function (S) {
                return Si(c.relatedFields, S)
              })
            ) {
              i.reRender()
              return
            }
            break
          }
          default:
            if (w || ((!y.length || v.length || d) && dc(d, l, x, p, m, c))) {
              i.reRender()
              return
            }
            break
        }
        d === !0 && i.reRender()
      }),
      D(Y(i), 'validateRules', function (l) {
        var u = i.getNamePath(),
          c = i.getValue(),
          f = l || {},
          d = f.triggerName,
          g = f.validateOnly,
          y = g === void 0 ? !1 : g,
          _ = Promise.resolve().then(
            Ir(
              Ue().mark(function x() {
                var v, p, m, w, b, C, S
                return Ue().wrap(function (T) {
                  for (;;)
                    switch ((T.prev = T.next)) {
                      case 0:
                        if (i.mounted) {
                          T.next = 2
                          break
                        }
                        return T.abrupt('return', [])
                      case 2:
                        if (
                          ((v = i.props),
                          (p = v.validateFirst),
                          (m = p === void 0 ? !1 : p),
                          (w = v.messageVariables),
                          (b = v.validateDebounce),
                          (C = i.getRules()),
                          d &&
                            (C = C.filter(function (k) {
                              return k
                            }).filter(function (k) {
                              var M = k.validateTrigger
                              if (!M) return !0
                              var L = rf(M)
                              return L.includes(d)
                            })),
                          !(b && d))
                        ) {
                          T.next = 10
                          break
                        }
                        return (
                          (T.next = 8),
                          new Promise(function (k) {
                            setTimeout(k, b)
                          })
                        )
                      case 8:
                        if (i.validatePromise === _) {
                          T.next = 10
                          break
                        }
                        return T.abrupt('return', [])
                      case 10:
                        return (
                          (S = Oj(u, c, C, l, m, w)),
                          S.catch(function (k) {
                            return k
                          }).then(function () {
                            var k =
                              arguments.length > 0 && arguments[0] !== void 0
                                ? arguments[0]
                                : _t
                            if (i.validatePromise === _) {
                              var M
                              i.validatePromise = null
                              var L = [],
                                O = []
                              ;(M = k.forEach) === null ||
                                M === void 0 ||
                                M.call(k, function (A) {
                                  var z = A.rule.warningOnly,
                                    R = A.errors,
                                    I = R === void 0 ? _t : R
                                  z
                                    ? O.push.apply(O, Q(I))
                                    : L.push.apply(L, Q(I))
                                }),
                                (i.errors = L),
                                (i.warnings = O),
                                i.triggerMetaEvent(),
                                i.reRender()
                            }
                          }),
                          T.abrupt('return', S)
                        )
                      case 13:
                      case 'end':
                        return T.stop()
                    }
                }, x)
              })
            )
          )
        return (
          y ||
            ((i.validatePromise = _),
            (i.dirty = !0),
            (i.errors = _t),
            (i.warnings = _t),
            i.triggerMetaEvent(),
            i.reRender()),
          _
        )
      }),
      D(Y(i), 'isFieldValidating', function () {
        return !!i.validatePromise
      }),
      D(Y(i), 'isFieldTouched', function () {
        return i.touched
      }),
      D(Y(i), 'isFieldDirty', function () {
        if (i.dirty || i.props.initialValue !== void 0) return !0
        var l = i.props.fieldContext,
          u = l.getInternalHooks(gr),
          c = u.getInitialValue
        return c(i.getNamePath()) !== void 0
      }),
      D(Y(i), 'getErrors', function () {
        return i.errors
      }),
      D(Y(i), 'getWarnings', function () {
        return i.warnings
      }),
      D(Y(i), 'isListField', function () {
        return i.props.isListField
      }),
      D(Y(i), 'isList', function () {
        return i.props.isList
      }),
      D(Y(i), 'isPreserve', function () {
        return i.props.preserve
      }),
      D(Y(i), 'getMeta', function () {
        i.prevValidating = i.isFieldValidating()
        var l = {
          touched: i.isFieldTouched(),
          validating: i.prevValidating,
          errors: i.errors,
          warnings: i.warnings,
          name: i.getNamePath(),
          validated: i.validatePromise === null
        }
        return l
      }),
      D(Y(i), 'getOnlyChild', function (l) {
        if (typeof l == 'function') {
          var u = i.getMeta()
          return B(
            B(
              {},
              i.getOnlyChild(l(i.getControlled(), u, i.props.fieldContext))
            ),
            {},
            { isFunction: !0 }
          )
        }
        var c = bd(l)
        return c.length !== 1 || !j.isValidElement(c[0])
          ? { child: c, isFunction: !1 }
          : { child: c[0], isFunction: !1 }
      }),
      D(Y(i), 'getValue', function (l) {
        var u = i.props.fieldContext.getFieldsValue,
          c = i.getNamePath()
        return en(l || u(!0), c)
      }),
      D(Y(i), 'getControlled', function () {
        var l =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          u = i.props,
          c = u.name,
          f = u.trigger,
          d = u.validateTrigger,
          g = u.getValueFromEvent,
          y = u.normalize,
          _ = u.valuePropName,
          x = u.getValueProps,
          v = u.fieldContext,
          p = d !== void 0 ? d : v.validateTrigger,
          m = i.getNamePath(),
          w = v.getInternalHooks,
          b = v.getFieldsValue,
          C = w(gr),
          S = C.dispatch,
          E = i.getValue(),
          T =
            x ||
            function (A) {
              return D({}, _, A)
            },
          k = l[f],
          M = c !== void 0 ? T(E) : {},
          L = B(B({}, l), M)
        L[f] = function () {
          ;(i.touched = !0), (i.dirty = !0), i.triggerMetaEvent()
          for (var A, z = arguments.length, R = new Array(z), I = 0; I < z; I++)
            R[I] = arguments[I]
          g ? (A = g.apply(void 0, R)) : (A = Ij.apply(void 0, [_].concat(R))),
            y && (A = y(A, E, b(!0))),
            A !== E && S({ type: 'updateValue', namePath: m, value: A }),
            k && k.apply(void 0, R)
        }
        var O = rf(p || [])
        return (
          O.forEach(function (A) {
            var z = L[A]
            L[A] = function () {
              z && z.apply(void 0, arguments)
              var R = i.props.rules
              R &&
                R.length &&
                S({ type: 'validateField', namePath: m, triggerName: A })
            }
          }),
          L
        )
      }),
      r.fieldContext)
    ) {
      var o = r.fieldContext.getInternalHooks,
        a = o(gr),
        s = a.initEntityValue
      s(Y(i))
    }
    return i
  }
  return (
    nt(n, [
      {
        key: 'componentDidMount',
        value: function () {
          var i = this.props,
            o = i.shouldUpdate,
            a = i.fieldContext
          if (((this.mounted = !0), a)) {
            var s = a.getInternalHooks,
              l = s(gr),
              u = l.registerField
            this.cancelRegisterFunc = u(this)
          }
          o === !0 && this.reRender()
        }
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this.cancelRegister(), this.triggerMetaEvent(!0), (this.mounted = !1)
        }
      },
      {
        key: 'reRender',
        value: function () {
          this.mounted && this.forceUpdate()
        }
      },
      {
        key: 'render',
        value: function () {
          var i = this.state.resetCount,
            o = this.props.children,
            a = this.getOnlyChild(o),
            s = a.child,
            l = a.isFunction,
            u
          return (
            l
              ? (u = s)
              : j.isValidElement(s)
              ? (u = j.cloneElement(s, this.getControlled(s.props)))
              : (kt(!s, '`children` of Field is not validate ReactElement.'),
                (u = s)),
            j.createElement(j.Fragment, { key: i }, u)
          )
        }
      }
    ]),
    n
  )
})(j.Component)
D(Fp, 'contextType', Ii)
D(Fp, 'defaultProps', { trigger: 'onChange', valuePropName: 'value' })
function l2(e) {
  var t,
    n = e.name,
    r = Or(e, Fj),
    i = j.useContext(Ii),
    o = j.useContext(ml),
    a = n !== void 0 ? ge(n) : void 0,
    s = (t = r.isListField) !== null && t !== void 0 ? t : !!o,
    l = 'keep'
  return (
    s || (l = '_'.concat((a || []).join('_'))),
    j.createElement(
      Fp,
      Nr({ key: l, name: a, isListField: s }, r, { fieldContext: i })
    )
  )
}
function $j(e) {
  var t = e.name,
    n = e.initialValue,
    r = e.children,
    i = e.rules,
    o = e.validateTrigger,
    a = e.isListField,
    s = j.useContext(Ii),
    l = j.useContext(ml),
    u = j.useRef({ keys: [], id: 0 }),
    c = u.current,
    f = j.useMemo(
      function () {
        var _ = ge(s.prefixName) || []
        return [].concat(Q(_), Q(ge(t)))
      },
      [s.prefixName, t]
    ),
    d = j.useMemo(
      function () {
        return B(B({}, s), {}, { prefixName: f })
      },
      [s, f]
    ),
    g = j.useMemo(
      function () {
        return {
          getKey: function (x) {
            var v = f.length,
              p = x[v]
            return [c.keys[p], x.slice(v + 1)]
          }
        }
      },
      [f]
    )
  if (typeof r != 'function')
    return kt(!1, 'Form.List only accepts function as children.'), null
  var y = function (x, v, p) {
    var m = p.source
    return m === 'internal' ? !1 : x !== v
  }
  return j.createElement(
    ml.Provider,
    { value: g },
    j.createElement(
      Ii.Provider,
      { value: d },
      j.createElement(
        l2,
        {
          name: [],
          shouldUpdate: y,
          rules: i,
          validateTrigger: o,
          initialValue: n,
          isList: !0,
          isListField: a ?? !!l
        },
        function (_, x) {
          var v = _.value,
            p = v === void 0 ? [] : v,
            m = _.onChange,
            w = s.getFieldValue,
            b = function () {
              var T = w(f || [])
              return T || []
            },
            C = {
              add: function (T, k) {
                var M = b()
                k >= 0 && k <= M.length
                  ? ((c.keys = [].concat(
                      Q(c.keys.slice(0, k)),
                      [c.id],
                      Q(c.keys.slice(k))
                    )),
                    m([].concat(Q(M.slice(0, k)), [T], Q(M.slice(k)))))
                  : ((c.keys = [].concat(Q(c.keys), [c.id])),
                    m([].concat(Q(M), [T]))),
                  (c.id += 1)
              },
              remove: function (T) {
                var k = b(),
                  M = new Set(Array.isArray(T) ? T : [T])
                M.size <= 0 ||
                  ((c.keys = c.keys.filter(function (L, O) {
                    return !M.has(O)
                  })),
                  m(
                    k.filter(function (L, O) {
                      return !M.has(O)
                    })
                  ))
              },
              move: function (T, k) {
                if (T !== k) {
                  var M = b()
                  T < 0 ||
                    T >= M.length ||
                    k < 0 ||
                    k >= M.length ||
                    ((c.keys = Ov(c.keys, T, k)), m(Ov(M, T, k)))
                }
              }
            },
            S = p || []
          return (
            Array.isArray(S) || (S = []),
            r(
              S.map(function (E, T) {
                var k = c.keys[T]
                return (
                  k === void 0 &&
                    ((c.keys[T] = c.id), (k = c.keys[T]), (c.id += 1)),
                  { name: T, key: k, isListField: !0 }
                )
              }),
              C,
              x
            )
          )
        }
      )
    )
  )
}
function Dj(e) {
  var t = !1,
    n = e.length,
    r = []
  return e.length
    ? new Promise(function (i, o) {
        e.forEach(function (a, s) {
          a.catch(function (l) {
            return (t = !0), l
          }).then(function (l) {
            ;(n -= 1), (r[s] = l), !(n > 0) && (t && o(r), i(r))
          })
        })
      })
    : Promise.resolve([])
}
var u2 = '__@field_split__'
function fc(e) {
  return e
    .map(function (t) {
      return ''.concat(X(t), ':').concat(t)
    })
    .join(u2)
}
var Yr = (function () {
    function e() {
      tt(this, e), D(this, 'kvs', new Map())
    }
    return (
      nt(e, [
        {
          key: 'set',
          value: function (n, r) {
            this.kvs.set(fc(n), r)
          }
        },
        {
          key: 'get',
          value: function (n) {
            return this.kvs.get(fc(n))
          }
        },
        {
          key: 'update',
          value: function (n, r) {
            var i = this.get(n),
              o = r(i)
            o ? this.set(n, o) : this.delete(n)
          }
        },
        {
          key: 'delete',
          value: function (n) {
            this.kvs.delete(fc(n))
          }
        },
        {
          key: 'map',
          value: function (n) {
            return Q(this.kvs.entries()).map(function (r) {
              var i = K(r, 2),
                o = i[0],
                a = i[1],
                s = o.split(u2)
              return n({
                key: s.map(function (l) {
                  var u = l.match(/^([^:]*):(.*)$/),
                    c = K(u, 3),
                    f = c[1],
                    d = c[2]
                  return f === 'number' ? Number(d) : d
                }),
                value: a
              })
            })
          }
        },
        {
          key: 'toJSON',
          value: function () {
            var n = {}
            return (
              this.map(function (r) {
                var i = r.key,
                  o = r.value
                return (n[i.join('.')] = o), null
              }),
              n
            )
          }
        }
      ]),
      e
    )
  })(),
  zj = ['name'],
  Vj = nt(function e(t) {
    var n = this
    tt(this, e),
      D(this, 'formHooked', !1),
      D(this, 'forceRootUpdate', void 0),
      D(this, 'subscribable', !0),
      D(this, 'store', {}),
      D(this, 'fieldEntities', []),
      D(this, 'initialValues', {}),
      D(this, 'callbacks', {}),
      D(this, 'validateMessages', null),
      D(this, 'preserve', null),
      D(this, 'lastValidatePromise', null),
      D(this, 'getForm', function () {
        return {
          getFieldValue: n.getFieldValue,
          getFieldsValue: n.getFieldsValue,
          getFieldError: n.getFieldError,
          getFieldWarning: n.getFieldWarning,
          getFieldsError: n.getFieldsError,
          isFieldsTouched: n.isFieldsTouched,
          isFieldTouched: n.isFieldTouched,
          isFieldValidating: n.isFieldValidating,
          isFieldsValidating: n.isFieldsValidating,
          resetFields: n.resetFields,
          setFields: n.setFields,
          setFieldValue: n.setFieldValue,
          setFieldsValue: n.setFieldsValue,
          validateFields: n.validateFields,
          submit: n.submit,
          _init: !0,
          getInternalHooks: n.getInternalHooks
        }
      }),
      D(this, 'getInternalHooks', function (r) {
        return r === gr
          ? ((n.formHooked = !0),
            {
              dispatch: n.dispatch,
              initEntityValue: n.initEntityValue,
              registerField: n.registerField,
              useSubscribe: n.useSubscribe,
              setInitialValues: n.setInitialValues,
              destroyForm: n.destroyForm,
              setCallbacks: n.setCallbacks,
              setValidateMessages: n.setValidateMessages,
              getFields: n.getFields,
              setPreserve: n.setPreserve,
              getInitialValue: n.getInitialValue,
              registerWatch: n.registerWatch
            })
          : (kt(
              !1,
              '`getInternalHooks` is internal usage. Should not call directly.'
            ),
            null)
      }),
      D(this, 'useSubscribe', function (r) {
        n.subscribable = r
      }),
      D(this, 'prevWithoutPreserves', null),
      D(this, 'setInitialValues', function (r, i) {
        if (((n.initialValues = r || {}), i)) {
          var o,
            a = di(r, n.store)
          ;(o = n.prevWithoutPreserves) === null ||
            o === void 0 ||
            o.map(function (s) {
              var l = s.key
              a = It(a, l, en(r, l))
            }),
            (n.prevWithoutPreserves = null),
            n.updateStore(a)
        }
      }),
      D(this, 'destroyForm', function (r) {
        if (r) n.updateStore({})
        else {
          var i = new Yr()
          n.getFieldEntities(!0).forEach(function (o) {
            n.isMergedPreserve(o.isPreserve()) || i.set(o.getNamePath(), !0)
          }),
            (n.prevWithoutPreserves = i)
        }
      }),
      D(this, 'getInitialValue', function (r) {
        var i = en(n.initialValues, r)
        return r.length ? di(i) : i
      }),
      D(this, 'setCallbacks', function (r) {
        n.callbacks = r
      }),
      D(this, 'setValidateMessages', function (r) {
        n.validateMessages = r
      }),
      D(this, 'setPreserve', function (r) {
        n.preserve = r
      }),
      D(this, 'watchList', []),
      D(this, 'registerWatch', function (r) {
        return (
          n.watchList.push(r),
          function () {
            n.watchList = n.watchList.filter(function (i) {
              return i !== r
            })
          }
        )
      }),
      D(this, 'notifyWatch', function () {
        var r =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
        if (n.watchList.length) {
          var i = n.getFieldsValue(),
            o = n.getFieldsValue(!0)
          n.watchList.forEach(function (a) {
            a(i, o, r)
          })
        }
      }),
      D(this, 'timeoutId', null),
      D(this, 'warningUnhooked', function () {}),
      D(this, 'updateStore', function (r) {
        n.store = r
      }),
      D(this, 'getFieldEntities', function () {
        var r =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1
        return r
          ? n.fieldEntities.filter(function (i) {
              return i.getNamePath().length
            })
          : n.fieldEntities
      }),
      D(this, 'getFieldsMap', function () {
        var r =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
          i = new Yr()
        return (
          n.getFieldEntities(r).forEach(function (o) {
            var a = o.getNamePath()
            i.set(a, o)
          }),
          i
        )
      }),
      D(this, 'getFieldEntitiesForNamePathList', function (r) {
        if (!r) return n.getFieldEntities(!0)
        var i = n.getFieldsMap(!0)
        return r.map(function (o) {
          var a = ge(o)
          return i.get(a) || { INVALIDATE_NAME_PATH: ge(o) }
        })
      }),
      D(this, 'getFieldsValue', function (r, i) {
        n.warningUnhooked()
        var o, a, s
        if (
          (r === !0 || Array.isArray(r)
            ? ((o = r), (a = i))
            : r && X(r) === 'object' && ((s = r.strict), (a = r.filter)),
          o === !0 && !a)
        )
          return n.store
        var l = n.getFieldEntitiesForNamePathList(Array.isArray(o) ? o : null),
          u = []
        return (
          l.forEach(function (c) {
            var f,
              d,
              g =
                'INVALIDATE_NAME_PATH' in c
                  ? c.INVALIDATE_NAME_PATH
                  : c.getNamePath()
            if (s) {
              var y, _
              if ((y = (_ = c).isList) !== null && y !== void 0 && y.call(_))
                return
            } else if (!o && (f = (d = c).isListField) !== null && f !== void 0 && f.call(d)) return
            if (!a) u.push(g)
            else {
              var x = 'getMeta' in c ? c.getMeta() : null
              a(x) && u.push(g)
            }
          }),
          Nv(n.store, u.map(ge))
        )
      }),
      D(this, 'getFieldValue', function (r) {
        n.warningUnhooked()
        var i = ge(r)
        return en(n.store, i)
      }),
      D(this, 'getFieldsError', function (r) {
        n.warningUnhooked()
        var i = n.getFieldEntitiesForNamePathList(r)
        return i.map(function (o, a) {
          return o && !('INVALIDATE_NAME_PATH' in o)
            ? {
                name: o.getNamePath(),
                errors: o.getErrors(),
                warnings: o.getWarnings()
              }
            : { name: ge(r[a]), errors: [], warnings: [] }
        })
      }),
      D(this, 'getFieldError', function (r) {
        n.warningUnhooked()
        var i = ge(r),
          o = n.getFieldsError([i])[0]
        return o.errors
      }),
      D(this, 'getFieldWarning', function (r) {
        n.warningUnhooked()
        var i = ge(r),
          o = n.getFieldsError([i])[0]
        return o.warnings
      }),
      D(this, 'isFieldsTouched', function () {
        n.warningUnhooked()
        for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
          i[o] = arguments[o]
        var a = i[0],
          s = i[1],
          l,
          u = !1
        i.length === 0
          ? (l = null)
          : i.length === 1
          ? Array.isArray(a)
            ? ((l = a.map(ge)), (u = !1))
            : ((l = null), (u = a))
          : ((l = a.map(ge)), (u = s))
        var c = n.getFieldEntities(!0),
          f = function (x) {
            return x.isFieldTouched()
          }
        if (!l)
          return u
            ? c.every(function (_) {
                return f(_) || _.isList()
              })
            : c.some(f)
        var d = new Yr()
        l.forEach(function (_) {
          d.set(_, [])
        }),
          c.forEach(function (_) {
            var x = _.getNamePath()
            l.forEach(function (v) {
              v.every(function (p, m) {
                return x[m] === p
              }) &&
                d.update(v, function (p) {
                  return [].concat(Q(p), [_])
                })
            })
          })
        var g = function (x) {
            return x.some(f)
          },
          y = d.map(function (_) {
            var x = _.value
            return x
          })
        return u ? y.every(g) : y.some(g)
      }),
      D(this, 'isFieldTouched', function (r) {
        return n.warningUnhooked(), n.isFieldsTouched([r])
      }),
      D(this, 'isFieldsValidating', function (r) {
        n.warningUnhooked()
        var i = n.getFieldEntities()
        if (!r)
          return i.some(function (a) {
            return a.isFieldValidating()
          })
        var o = r.map(ge)
        return i.some(function (a) {
          var s = a.getNamePath()
          return Si(o, s) && a.isFieldValidating()
        })
      }),
      D(this, 'isFieldValidating', function (r) {
        return n.warningUnhooked(), n.isFieldsValidating([r])
      }),
      D(this, 'resetWithFieldInitialValue', function () {
        var r =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          i = new Yr(),
          o = n.getFieldEntities(!0)
        o.forEach(function (l) {
          var u = l.props.initialValue,
            c = l.getNamePath()
          if (u !== void 0) {
            var f = i.get(c) || new Set()
            f.add({ entity: l, value: u }), i.set(c, f)
          }
        })
        var a = function (u) {
            u.forEach(function (c) {
              var f = c.props.initialValue
              if (f !== void 0) {
                var d = c.getNamePath(),
                  g = n.getInitialValue(d)
                if (g !== void 0)
                  kt(
                    !1,
                    "Form already set 'initialValues' with path '".concat(
                      d.join('.'),
                      "'. Field can not overwrite it."
                    )
                  )
                else {
                  var y = i.get(d)
                  if (y && y.size > 1)
                    kt(
                      !1,
                      "Multiple Field with path '".concat(
                        d.join('.'),
                        "' set 'initialValue'. Can not decide which one to pick."
                      )
                    )
                  else if (y) {
                    var _ = n.getFieldValue(d),
                      x = c.isListField()
                    !x &&
                      (!r.skipExist || _ === void 0) &&
                      n.updateStore(It(n.store, d, Q(y)[0].value))
                  }
                }
              }
            })
          },
          s
        r.entities
          ? (s = r.entities)
          : r.namePathList
          ? ((s = []),
            r.namePathList.forEach(function (l) {
              var u = i.get(l)
              if (u) {
                var c
                ;(c = s).push.apply(
                  c,
                  Q(
                    Q(u).map(function (f) {
                      return f.entity
                    })
                  )
                )
              }
            }))
          : (s = o),
          a(s)
      }),
      D(this, 'resetFields', function (r) {
        n.warningUnhooked()
        var i = n.store
        if (!r) {
          n.updateStore(di(n.initialValues)),
            n.resetWithFieldInitialValue(),
            n.notifyObservers(i, null, { type: 'reset' }),
            n.notifyWatch()
          return
        }
        var o = r.map(ge)
        o.forEach(function (a) {
          var s = n.getInitialValue(a)
          n.updateStore(It(n.store, a, s))
        }),
          n.resetWithFieldInitialValue({ namePathList: o }),
          n.notifyObservers(i, o, { type: 'reset' }),
          n.notifyWatch(o)
      }),
      D(this, 'setFields', function (r) {
        n.warningUnhooked()
        var i = n.store,
          o = []
        r.forEach(function (a) {
          var s = a.name,
            l = Or(a, zj),
            u = ge(s)
          o.push(u),
            'value' in l && n.updateStore(It(n.store, u, l.value)),
            n.notifyObservers(i, [u], { type: 'setField', data: a })
        }),
          n.notifyWatch(o)
      }),
      D(this, 'getFields', function () {
        var r = n.getFieldEntities(!0),
          i = r.map(function (o) {
            var a = o.getNamePath(),
              s = o.getMeta(),
              l = B(B({}, s), {}, { name: a, value: n.getFieldValue(a) })
            return Object.defineProperty(l, 'originRCField', { value: !0 }), l
          })
        return i
      }),
      D(this, 'initEntityValue', function (r) {
        var i = r.props.initialValue
        if (i !== void 0) {
          var o = r.getNamePath(),
            a = en(n.store, o)
          a === void 0 && n.updateStore(It(n.store, o, i))
        }
      }),
      D(this, 'isMergedPreserve', function (r) {
        var i = r !== void 0 ? r : n.preserve
        return i ?? !0
      }),
      D(this, 'registerField', function (r) {
        n.fieldEntities.push(r)
        var i = r.getNamePath()
        if ((n.notifyWatch([i]), r.props.initialValue !== void 0)) {
          var o = n.store
          n.resetWithFieldInitialValue({ entities: [r], skipExist: !0 }),
            n.notifyObservers(o, [r.getNamePath()], {
              type: 'valueUpdate',
              source: 'internal'
            })
        }
        return function (a, s) {
          var l =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : []
          if (
            ((n.fieldEntities = n.fieldEntities.filter(function (f) {
              return f !== r
            })),
            !n.isMergedPreserve(s) && (!a || l.length > 1))
          ) {
            var u = a ? void 0 : n.getInitialValue(i)
            if (
              i.length &&
              n.getFieldValue(i) !== u &&
              n.fieldEntities.every(function (f) {
                return !s2(f.getNamePath(), i)
              })
            ) {
              var c = n.store
              n.updateStore(It(c, i, u, !0)),
                n.notifyObservers(c, [i], { type: 'remove' }),
                n.triggerDependenciesUpdate(c, i)
            }
          }
          n.notifyWatch([i])
        }
      }),
      D(this, 'dispatch', function (r) {
        switch (r.type) {
          case 'updateValue': {
            var i = r.namePath,
              o = r.value
            n.updateValue(i, o)
            break
          }
          case 'validateField': {
            var a = r.namePath,
              s = r.triggerName
            n.validateFields([a], { triggerName: s })
            break
          }
        }
      }),
      D(this, 'notifyObservers', function (r, i, o) {
        if (n.subscribable) {
          var a = B(B({}, o), {}, { store: n.getFieldsValue(!0) })
          n.getFieldEntities().forEach(function (s) {
            var l = s.onStoreChange
            l(r, i, a)
          })
        } else n.forceRootUpdate()
      }),
      D(this, 'triggerDependenciesUpdate', function (r, i) {
        var o = n.getDependencyChildrenFields(i)
        return (
          o.length && n.validateFields(o),
          n.notifyObservers(r, o, {
            type: 'dependenciesUpdate',
            relatedFields: [i].concat(Q(o))
          }),
          o
        )
      }),
      D(this, 'updateValue', function (r, i) {
        var o = ge(r),
          a = n.store
        n.updateStore(It(n.store, o, i)),
          n.notifyObservers(a, [o], {
            type: 'valueUpdate',
            source: 'internal'
          }),
          n.notifyWatch([o])
        var s = n.triggerDependenciesUpdate(a, o),
          l = n.callbacks.onValuesChange
        if (l) {
          var u = Nv(n.store, [o])
          l(u, n.getFieldsValue())
        }
        n.triggerOnFieldsChange([o].concat(Q(s)))
      }),
      D(this, 'setFieldsValue', function (r) {
        n.warningUnhooked()
        var i = n.store
        if (r) {
          var o = di(n.store, r)
          n.updateStore(o)
        }
        n.notifyObservers(i, null, { type: 'valueUpdate', source: 'external' }),
          n.notifyWatch()
      }),
      D(this, 'setFieldValue', function (r, i) {
        n.setFields([{ name: r, value: i, errors: [], warnings: [] }])
      }),
      D(this, 'getDependencyChildrenFields', function (r) {
        var i = new Set(),
          o = [],
          a = new Yr()
        n.getFieldEntities().forEach(function (l) {
          var u = l.props.dependencies
          ;(u || []).forEach(function (c) {
            var f = ge(c)
            a.update(f, function () {
              var d =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : new Set()
              return d.add(l), d
            })
          })
        })
        var s = function l(u) {
          var c = a.get(u) || new Set()
          c.forEach(function (f) {
            if (!i.has(f)) {
              i.add(f)
              var d = f.getNamePath()
              f.isFieldDirty() && d.length && (o.push(d), l(d))
            }
          })
        }
        return s(r), o
      }),
      D(this, 'triggerOnFieldsChange', function (r, i) {
        var o = n.callbacks.onFieldsChange
        if (o) {
          var a = n.getFields()
          if (i) {
            var s = new Yr()
            i.forEach(function (u) {
              var c = u.name,
                f = u.errors
              s.set(c, f)
            }),
              a.forEach(function (u) {
                u.errors = s.get(u.name) || u.errors
              })
          }
          var l = a.filter(function (u) {
            var c = u.name
            return Si(r, c)
          })
          l.length && o(l, a)
        }
      }),
      D(this, 'validateFields', function (r, i) {
        n.warningUnhooked()
        var o, a
        Array.isArray(r) || typeof r == 'string' || typeof i == 'string'
          ? ((o = r), (a = i))
          : (a = r)
        var s = !!o,
          l = s ? o.map(ge) : [],
          u = [],
          c = String(Date.now()),
          f = new Set(),
          d = a || {},
          g = d.recursive,
          y = d.dirty
        n.getFieldEntities(!0).forEach(function (p) {
          if (
            (s || l.push(p.getNamePath()),
            !(!p.props.rules || !p.props.rules.length) &&
              !(y && !p.isFieldDirty()))
          ) {
            var m = p.getNamePath()
            if ((f.add(m.join(c)), !s || Si(l, m, g))) {
              var w = p.validateRules(
                B({ validateMessages: B(B({}, a2), n.validateMessages) }, a)
              )
              u.push(
                w
                  .then(function () {
                    return { name: m, errors: [], warnings: [] }
                  })
                  .catch(function (b) {
                    var C,
                      S = [],
                      E = []
                    return (
                      (C = b.forEach) === null ||
                        C === void 0 ||
                        C.call(b, function (T) {
                          var k = T.rule.warningOnly,
                            M = T.errors
                          k ? E.push.apply(E, Q(M)) : S.push.apply(S, Q(M))
                        }),
                      S.length
                        ? Promise.reject({ name: m, errors: S, warnings: E })
                        : { name: m, errors: S, warnings: E }
                    )
                  })
              )
            }
          }
        })
        var _ = Dj(u)
        ;(n.lastValidatePromise = _),
          _.catch(function (p) {
            return p
          }).then(function (p) {
            var m = p.map(function (w) {
              var b = w.name
              return b
            })
            n.notifyObservers(n.store, m, { type: 'validateFinish' }),
              n.triggerOnFieldsChange(m, p)
          })
        var x = _.then(function () {
          return n.lastValidatePromise === _
            ? Promise.resolve(n.getFieldsValue(l))
            : Promise.reject([])
        }).catch(function (p) {
          var m = p.filter(function (w) {
            return w && w.errors.length
          })
          return Promise.reject({
            values: n.getFieldsValue(l),
            errorFields: m,
            outOfDate: n.lastValidatePromise !== _
          })
        })
        x.catch(function (p) {
          return p
        })
        var v = l.filter(function (p) {
          return f.has(p.join(c))
        })
        return n.triggerOnFieldsChange(v), x
      }),
      D(this, 'submit', function () {
        n.warningUnhooked(),
          n
            .validateFields()
            .then(function (r) {
              var i = n.callbacks.onFinish
              if (i)
                try {
                  i(r)
                } catch (o) {
                  console.error(o)
                }
            })
            .catch(function (r) {
              var i = n.callbacks.onFinishFailed
              i && i(r)
            })
      }),
      (this.forceRootUpdate = t)
  })
function c2(e) {
  var t = j.useRef(),
    n = j.useState({}),
    r = K(n, 2),
    i = r[1]
  if (!t.current)
    if (e) t.current = e
    else {
      var o = function () {
          i({})
        },
        a = new Vj(o)
      t.current = a.getForm()
    }
  return [t.current]
}
var pf = j.createContext({
    triggerFormChange: function () {},
    triggerFormFinish: function () {},
    registerForm: function () {},
    unregisterForm: function () {}
  }),
  Bj = function (t) {
    var n = t.validateMessages,
      r = t.onFormChange,
      i = t.onFormFinish,
      o = t.children,
      a = j.useContext(pf),
      s = j.useRef({})
    return j.createElement(
      pf.Provider,
      {
        value: B(
          B({}, a),
          {},
          {
            validateMessages: B(B({}, a.validateMessages), n),
            triggerFormChange: function (u, c) {
              r && r(u, { changedFields: c, forms: s.current }),
                a.triggerFormChange(u, c)
            },
            triggerFormFinish: function (u, c) {
              i && i(u, { values: c, forms: s.current }),
                a.triggerFormFinish(u, c)
            },
            registerForm: function (u, c) {
              u && (s.current = B(B({}, s.current), {}, D({}, u, c))),
                a.registerForm(u, c)
            },
            unregisterForm: function (u) {
              var c = B({}, s.current)
              delete c[u], (s.current = c), a.unregisterForm(u)
            }
          }
        )
      },
      o
    )
  },
  Hj = [
    'name',
    'initialValues',
    'fields',
    'form',
    'preserve',
    'children',
    'component',
    'validateMessages',
    'validateTrigger',
    'onValuesChange',
    'onFieldsChange',
    'onFinish',
    'onFinishFailed',
    'clearOnDestroy'
  ],
  qj = function (t, n) {
    var r = t.name,
      i = t.initialValues,
      o = t.fields,
      a = t.form,
      s = t.preserve,
      l = t.children,
      u = t.component,
      c = u === void 0 ? 'form' : u,
      f = t.validateMessages,
      d = t.validateTrigger,
      g = d === void 0 ? 'onChange' : d,
      y = t.onValuesChange,
      _ = t.onFieldsChange,
      x = t.onFinish,
      v = t.onFinishFailed,
      p = t.clearOnDestroy,
      m = Or(t, Hj),
      w = j.useRef(null),
      b = j.useContext(pf),
      C = c2(a),
      S = K(C, 1),
      E = S[0],
      T = E.getInternalHooks(gr),
      k = T.useSubscribe,
      M = T.setInitialValues,
      L = T.setCallbacks,
      O = T.setValidateMessages,
      A = T.setPreserve,
      z = T.destroyForm
    j.useImperativeHandle(n, function () {
      return B(B({}, E), {}, { nativeElement: w.current })
    }),
      j.useEffect(
        function () {
          return (
            b.registerForm(r, E),
            function () {
              b.unregisterForm(r)
            }
          )
        },
        [b, E, r]
      ),
      O(B(B({}, b.validateMessages), f)),
      L({
        onValuesChange: y,
        onFieldsChange: function (U) {
          if ((b.triggerFormChange(r, U), _)) {
            for (
              var Z = arguments.length,
                se = new Array(Z > 1 ? Z - 1 : 0),
                re = 1;
              re < Z;
              re++
            )
              se[re - 1] = arguments[re]
            _.apply(void 0, [U].concat(se))
          }
        },
        onFinish: function (U) {
          b.triggerFormFinish(r, U), x && x(U)
        },
        onFinishFailed: v
      }),
      A(s)
    var R = j.useRef(null)
    M(i, !R.current),
      R.current || (R.current = !0),
      j.useEffect(function () {
        return function () {
          return z(p)
        }
      }, [])
    var I,
      N = typeof l == 'function'
    if (N) {
      var F = E.getFieldsValue(!0)
      I = l(F, E)
    } else I = l
    k(!N)
    var $ = j.useRef()
    j.useEffect(
      function () {
        Rj($.current || [], o || []) || E.setFields(o || []), ($.current = o)
      },
      [o, E]
    )
    var V = j.useMemo(
        function () {
          return B(B({}, E), {}, { validateTrigger: g })
        },
        [E, g]
      ),
      q = j.createElement(
        ml.Provider,
        { value: null },
        j.createElement(Ii.Provider, { value: V }, I)
      )
    return c === !1
      ? q
      : j.createElement(
          c,
          Nr({}, m, {
            ref: w,
            onSubmit: function (U) {
              U.preventDefault(), U.stopPropagation(), E.submit()
            },
            onReset: function (U) {
              var Z
              U.preventDefault(),
                E.resetFields(),
                (Z = m.onReset) === null || Z === void 0 || Z.call(m, U)
            }
          }),
          q
        )
  }
function Lv(e) {
  try {
    return JSON.stringify(e)
  } catch {
    return Math.random()
  }
}
function Wj() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n]
  var r = t[0],
    i = t[1],
    o = i === void 0 ? {} : i,
    a = J3(o) ? { form: o } : o,
    s = a.form,
    l = j.useState(),
    u = K(l, 2),
    c = u[0],
    f = u[1],
    d = j.useMemo(
      function () {
        return Lv(c)
      },
      [c]
    ),
    g = j.useRef(d)
  g.current = d
  var y = j.useContext(Ii),
    _ = s || y,
    x = _ && _._init,
    v = ge(r),
    p = j.useRef(v)
  return (
    (p.current = v),
    j.useEffect(
      function () {
        if (x) {
          var m = _.getFieldsValue,
            w = _.getInternalHooks,
            b = w(gr),
            C = b.registerWatch,
            S = function (M, L) {
              var O = a.preserve ? L : M
              return typeof r == 'function' ? r(O) : en(O, p.current)
            },
            E = C(function (k, M) {
              var L = S(k, M),
                O = Lv(L)
              g.current !== O && ((g.current = O), f(L))
            }),
            T = S(m(), m(!0))
          return c !== T && f(T), E
        }
      },
      [x]
    ),
    c
  )
}
var Uj = j.forwardRef(qj),
  Ca = Uj
Ca.FormProvider = Bj
Ca.Field = l2
Ca.List = $j
Ca.useForm = c2
Ca.useWatch = Wj
const Gj = j.createContext({})
var Qj = [
    'prefixCls',
    'className',
    'style',
    'checked',
    'disabled',
    'defaultChecked',
    'type',
    'title',
    'onChange'
  ],
  Kj = j.forwardRef(function (e, t) {
    var n = e.prefixCls,
      r = n === void 0 ? 'rc-checkbox' : n,
      i = e.className,
      o = e.style,
      a = e.checked,
      s = e.disabled,
      l = e.defaultChecked,
      u = l === void 0 ? !1 : l,
      c = e.type,
      f = c === void 0 ? 'checkbox' : c,
      d = e.title,
      g = e.onChange,
      y = Or(e, Qj),
      _ = j.useRef(null),
      x = j.useRef(null),
      v = O8(u, { value: a }),
      p = K(v, 2),
      m = p[0],
      w = p[1]
    j.useImperativeHandle(t, function () {
      return {
        focus: function (E) {
          var T
          ;(T = _.current) === null || T === void 0 || T.focus(E)
        },
        blur: function () {
          var E
          ;(E = _.current) === null || E === void 0 || E.blur()
        },
        input: _.current,
        nativeElement: x.current
      }
    })
    var b = Mr(
        r,
        i,
        D(D({}, ''.concat(r, '-checked'), m), ''.concat(r, '-disabled'), s)
      ),
      C = function (E) {
        s ||
          ('checked' in e || w(E.target.checked),
          g == null ||
            g({
              target: B(B({}, e), {}, { type: f, checked: E.target.checked }),
              stopPropagation: function () {
                E.stopPropagation()
              },
              preventDefault: function () {
                E.preventDefault()
              },
              nativeEvent: E.nativeEvent
            }))
      }
    return j.createElement(
      'span',
      { className: b, title: d, style: o, ref: x },
      j.createElement(
        'input',
        Nr({}, y, {
          className: ''.concat(r, '-input'),
          ref: _,
          onChange: C,
          disabled: s,
          checked: !!m,
          type: f
        })
      ),
      j.createElement('span', { className: ''.concat(r, '-inner') })
    )
  })
function Xj(e) {
  const t = te.useRef(null),
    n = () => {
      Tn.cancel(t.current), (t.current = null)
    }
  return [
    () => {
      n(),
        (t.current = Tn(() => {
          t.current = null
        }))
    },
    (o) => {
      t.current && (o.stopPropagation(), n()), e == null || e(o)
    }
  ]
}
const Yj = (e) => {
  const { checkboxCls: t } = e,
    n = `${t}-wrapper`
  return [
    {
      [`${t}-group`]: Object.assign(Object.assign({}, oc(e)), {
        display: 'inline-flex',
        flexWrap: 'wrap',
        columnGap: e.marginXS,
        [`> ${e.antCls}-row`]: { flex: 1 }
      }),
      [n]: Object.assign(Object.assign({}, oc(e)), {
        display: 'inline-flex',
        alignItems: 'baseline',
        cursor: 'pointer',
        '&:after': {
          display: 'inline-block',
          width: 0,
          overflow: 'hidden',
          content: "'\\a0'"
        },
        [`& + ${n}`]: { marginInlineStart: 0 },
        [`&${n}-in-form-item`]: {
          'input[type="checkbox"]': { width: 14, height: 14 }
        }
      }),
      [t]: Object.assign(Object.assign({}, oc(e)), {
        position: 'relative',
        whiteSpace: 'nowrap',
        lineHeight: 1,
        cursor: 'pointer',
        borderRadius: e.borderRadiusSM,
        alignSelf: 'center',
        [`${t}-input`]: {
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          cursor: 'pointer',
          opacity: 0,
          margin: 0,
          [`&:focus-visible + ${t}-inner`]: Object.assign({}, Q8(e))
        },
        [`${t}-inner`]: {
          boxSizing: 'border-box',
          display: 'block',
          width: e.checkboxSize,
          height: e.checkboxSize,
          direction: 'ltr',
          backgroundColor: e.colorBgContainer,
          border: `${ra(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderRadius: e.borderRadiusSM,
          borderCollapse: 'separate',
          transition: `all ${e.motionDurationSlow}`,
          '&:after': {
            boxSizing: 'border-box',
            position: 'absolute',
            top: '50%',
            insetInlineStart: '25%',
            display: 'table',
            width: e.calc(e.checkboxSize).div(14).mul(5).equal(),
            height: e.calc(e.checkboxSize).div(14).mul(8).equal(),
            border: `${ra(e.lineWidthBold)} solid ${e.colorWhite}`,
            borderTop: 0,
            borderInlineStart: 0,
            transform: 'rotate(45deg) scale(0) translate(-50%,-50%)',
            opacity: 0,
            content: '""',
            transition: `all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`
          }
        },
        '& + span': {
          paddingInlineStart: e.paddingXS,
          paddingInlineEnd: e.paddingXS
        }
      })
    },
    {
      [`
        ${n}:not(${n}-disabled),
        ${t}:not(${t}-disabled)
      `]: { [`&:hover ${t}-inner`]: { borderColor: e.colorPrimary } },
      [`${n}:not(${n}-disabled)`]: {
        [`&:hover ${t}-checked:not(${t}-disabled) ${t}-inner`]: {
          backgroundColor: e.colorPrimaryHover,
          borderColor: 'transparent'
        },
        [`&:hover ${t}-checked:not(${t}-disabled):after`]: {
          borderColor: e.colorPrimaryHover
        }
      }
    },
    {
      [`${t}-checked`]: {
        [`${t}-inner`]: {
          backgroundColor: e.colorPrimary,
          borderColor: e.colorPrimary,
          '&:after': {
            opacity: 1,
            transform: 'rotate(45deg) scale(1) translate(-50%,-50%)',
            transition: `all ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`
          }
        }
      },
      [`
        ${n}-checked:not(${n}-disabled),
        ${t}-checked:not(${t}-disabled)
      `]: {
        [`&:hover ${t}-inner`]: {
          backgroundColor: e.colorPrimaryHover,
          borderColor: 'transparent'
        }
      }
    },
    {
      [t]: {
        '&-indeterminate': {
          [`${t}-inner`]: {
            backgroundColor: `${e.colorBgContainer} !important`,
            borderColor: `${e.colorBorder} !important`,
            '&:after': {
              top: '50%',
              insetInlineStart: '50%',
              width: e.calc(e.fontSizeLG).div(2).equal(),
              height: e.calc(e.fontSizeLG).div(2).equal(),
              backgroundColor: e.colorPrimary,
              border: 0,
              transform: 'translate(-50%, -50%) scale(1)',
              opacity: 1,
              content: '""'
            }
          },
          [`&:hover ${t}-inner`]: {
            backgroundColor: `${e.colorBgContainer} !important`,
            borderColor: `${e.colorPrimary} !important`
          }
        }
      }
    },
    {
      [`${n}-disabled`]: { cursor: 'not-allowed' },
      [`${t}-disabled`]: {
        [`&, ${t}-input`]: { cursor: 'not-allowed', pointerEvents: 'none' },
        [`${t}-inner`]: {
          background: e.colorBgContainerDisabled,
          borderColor: e.colorBorder,
          '&:after': { borderColor: e.colorTextDisabled }
        },
        '&:after': { display: 'none' },
        '& + span': { color: e.colorTextDisabled },
        [`&${t}-indeterminate ${t}-inner::after`]: {
          background: e.colorTextDisabled
        }
      }
    }
  ]
}
function Zj(e, t) {
  const n = Ap(t, {
    checkboxCls: `.${e}`,
    checkboxSize: t.controlInteractiveSize
  })
  return [Yj(n)]
}
const d2 = K8('Checkbox', (e, t) => {
    let { prefixCls: n } = t
    return [Zj(n, e)]
  }),
  f2 = te.createContext(null)
var Jj = function (e, t) {
  var n = {}
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]])
  return n
}
const e7 = (e, t) => {
    var n
    const {
        prefixCls: r,
        className: i,
        rootClassName: o,
        children: a,
        indeterminate: s = !1,
        style: l,
        onMouseEnter: u,
        onMouseLeave: c,
        skipGroup: f = !1,
        disabled: d
      } = e,
      g = Jj(e, [
        'prefixCls',
        'className',
        'rootClassName',
        'children',
        'indeterminate',
        'style',
        'onMouseEnter',
        'onMouseLeave',
        'skipGroup',
        'disabled'
      ]),
      { getPrefixCls: y, direction: _, checkbox: x } = j.useContext(kn),
      v = j.useContext(f2),
      { isFormItemInput: p } = j.useContext(Gj),
      m = j.useContext(pl),
      w =
        (n = (v == null ? void 0 : v.disabled) || d) !== null && n !== void 0
          ? n
          : m,
      b = j.useRef(g.value),
      C = j.useRef(null),
      S = Cp(t, C)
    j.useEffect(() => {
      v == null || v.registerValue(g.value)
    }, []),
      j.useEffect(() => {
        if (!f)
          return (
            g.value !== b.current &&
              (v == null || v.cancelValue(b.current),
              v == null || v.registerValue(g.value),
              (b.current = g.value)),
            () => (v == null ? void 0 : v.cancelValue(g.value))
          )
      }, [g.value]),
      j.useEffect(() => {
        var N
        !((N = C.current) === null || N === void 0) &&
          N.input &&
          (C.current.input.indeterminate = s)
      }, [s])
    const E = y('checkbox', r),
      T = i2(E),
      [k, M, L] = d2(E, T),
      O = Object.assign({}, g)
    v &&
      !f &&
      ((O.onChange = function () {
        g.onChange && g.onChange.apply(g, arguments),
          v.toggleOption && v.toggleOption({ label: a, value: g.value })
      }),
      (O.name = v.name),
      (O.checked = v.value.includes(g.value)))
    const A = Mr(
        `${E}-wrapper`,
        {
          [`${E}-rtl`]: _ === 'rtl',
          [`${E}-wrapper-checked`]: O.checked,
          [`${E}-wrapper-disabled`]: w,
          [`${E}-wrapper-in-form-item`]: p
        },
        x == null ? void 0 : x.className,
        i,
        o,
        L,
        T,
        M
      ),
      z = Mr({ [`${E}-indeterminate`]: s }, Ip, M),
      [R, I] = Xj(O.onClick)
    return k(
      j.createElement(
        Z3,
        { component: 'Checkbox', disabled: w },
        j.createElement(
          'label',
          {
            className: A,
            style: Object.assign(
              Object.assign({}, x == null ? void 0 : x.style),
              l
            ),
            onMouseEnter: u,
            onMouseLeave: c,
            onClick: R
          },
          j.createElement(
            Kj,
            Object.assign({}, O, {
              onClick: I,
              prefixCls: E,
              className: z,
              disabled: w,
              ref: S
            })
          ),
          a !== void 0 && j.createElement('span', null, a)
        )
      )
    )
  },
  p2 = j.forwardRef(e7)
var t7 = function (e, t) {
  var n = {}
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]])
  return n
}
const n7 = j.forwardRef((e, t) => {
    const {
        defaultValue: n,
        children: r,
        options: i = [],
        prefixCls: o,
        className: a,
        rootClassName: s,
        style: l,
        onChange: u
      } = e,
      c = t7(e, [
        'defaultValue',
        'children',
        'options',
        'prefixCls',
        'className',
        'rootClassName',
        'style',
        'onChange'
      ]),
      { getPrefixCls: f, direction: d } = j.useContext(kn),
      [g, y] = j.useState(c.value || n || []),
      [_, x] = j.useState([])
    j.useEffect(() => {
      'value' in c && y(c.value || [])
    }, [c.value])
    const v = j.useMemo(
        () =>
          i.map((z) =>
            typeof z == 'string' || typeof z == 'number'
              ? { label: z, value: z }
              : z
          ),
        [i]
      ),
      p = (z) => {
        x((R) => R.filter((I) => I !== z))
      },
      m = (z) => {
        x((R) => [].concat(Q(R), [z]))
      },
      w = (z) => {
        const R = g.indexOf(z.value),
          I = Q(g)
        R === -1 ? I.push(z.value) : I.splice(R, 1),
          'value' in c || y(I),
          u == null ||
            u(
              I.filter((N) => _.includes(N)).sort((N, F) => {
                const $ = v.findIndex((q) => q.value === N),
                  V = v.findIndex((q) => q.value === F)
                return $ - V
              })
            )
      },
      b = f('checkbox', o),
      C = `${b}-group`,
      S = i2(b),
      [E, T, k] = d2(b, S),
      M = MT(c, ['value', 'disabled']),
      L = i.length
        ? v.map((z) =>
            j.createElement(
              p2,
              {
                prefixCls: b,
                key: z.value.toString(),
                disabled: 'disabled' in z ? z.disabled : c.disabled,
                value: z.value,
                checked: g.includes(z.value),
                onChange: z.onChange,
                className: `${C}-item`,
                style: z.style,
                title: z.title,
                id: z.id,
                required: z.required
              },
              z.label
            )
          )
        : r,
      O = {
        toggleOption: w,
        value: g,
        disabled: c.disabled,
        name: c.name,
        registerValue: m,
        cancelValue: p
      },
      A = Mr(C, { [`${C}-rtl`]: d === 'rtl' }, a, s, k, S, T)
    return E(
      j.createElement(
        'div',
        Object.assign({ className: A, style: l }, M, { ref: t }),
        j.createElement(f2.Provider, { value: O }, L)
      )
    )
  }),
  vl = p2
vl.Group = n7
vl.__ANT_CHECKBOX = !0
const r7 = ({ handleCloseModal: e }) => {
    const [t, n] = j.useState(!1),
      [r, i] = j.useState(!1),
      o = (s) => {
        n(s.target.checked)
      },
      a = (s) => {
        i(s.target.checked)
      }
    return h.jsxs('div', {
      className: P.singleModalContent,
      children: [
        h.jsxs('div', {
          className: P.modal_content_header,
          children: [
            h.jsx('p', {
              className: P.modal_content_title,
              children: 'Download Invoice'
            }),
            h.jsx('div', {
              className: P.modal_close_icon,
              onClick: e,
              children: h.jsx('svg', {
                width: '24px',
                height: '24px',
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                fill: '#5B21B6',
                children: h.jsx('path', {
                  d: 'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z'
                })
              })
            })
          ]
        }),
        h.jsx('div', {
          className: P.settingsContent,
          children: h.jsxs('div', {
            className: P.download_invoice_content,
            children: [
              h.jsxs('div', {
                className: P.address_container,
                children: [
                  h.jsxs('div', {
                    className: P.shipping_address,
                    children: [
                      h.jsx('p', {
                        className: P.address_title,
                        children: 'Shipping Address'
                      }),
                      h.jsxs('div', {
                        children: [
                          h.jsx('p', {
                            className: P.address_name,
                            children: 'Ahmed Faysal'
                          }),
                          h.jsx('p', {
                            className: P.address,
                            children: 'Mirpur'
                          }),
                          h.jsx('p', {
                            className: P.address,
                            children: 'Dhaka 1216, BD'
                          })
                        ]
                      })
                    ]
                  }),
                  h.jsxs('div', {
                    className: P.billing_address,
                    children: [
                      h.jsx('p', {
                        className: P.address_title,
                        children: 'Billing Address'
                      }),
                      h.jsxs('div', {
                        children: [
                          h.jsx('p', {
                            className: P.address_name,
                            children: 'Ahmed Faysal'
                          }),
                          h.jsx('p', {
                            className: P.address,
                            children: 'Mirpur'
                          }),
                          h.jsx('p', {
                            className: P.address,
                            children: 'Dhaka 1216, BD'
                          })
                        ]
                      })
                    ]
                  })
                ]
              }),
              h.jsxs('div', {
                children: [
                  h.jsx('p', {
                    className: P.customize_invoice_title,
                    children: 'Customize your invoice'
                  }),
                  h.jsxs('div', {
                    className: P.customize_checkbox_container,
                    children: [
                      h.jsxs('div', {
                        className: P.customize_checkbox_box,
                        children: [
                          h.jsx(vl, {
                            className: P.purchasing_checkbox,
                            id: 'business',
                            checked: t,
                            onChange: o,
                            children: 'Purchasing as a business'
                          }),
                          t &&
                            h.jsx('div', {
                              className: P.business_form,
                              children: h.jsxs('form', {
                                action: '',
                                className: P.formContainer,
                                children: [
                                  h.jsxs('div', {
                                    className: P.form_item,
                                    children: [
                                      h.jsx('label', {
                                        className: P.input__label,
                                        children: 'Company Name'
                                      }),
                                      h.jsx('input', {
                                        type: 'text',
                                        placeholder: 'Company Name',
                                        required: !0,
                                        id: 'company_name'
                                      })
                                    ]
                                  }),
                                  h.jsx('div', {
                                    className: P.form_item,
                                    children: h.jsxs('div', {
                                      className: P.selectContainer,
                                      children: [
                                        h.jsx('label', {
                                          className: P.input__label,
                                          children: 'Country/Region'
                                        }),
                                        h.jsx('select', {
                                          children:
                                            Dt == null
                                              ? void 0
                                              : Dt.map((s, l) =>
                                                  h.jsx(
                                                    'option',
                                                    {
                                                      value: s.value,
                                                      children:
                                                        s == null
                                                          ? void 0
                                                          : s.label
                                                    },
                                                    l
                                                  )
                                                )
                                        }),
                                        h.jsx('svg', {
                                          className: P.select_country_icon,
                                          width: '16px',
                                          height: '16px',
                                          xmlns: 'http://www.w3.org/2000/svg',
                                          viewBox: '0 0 24 24',
                                          fill: 'currentColor',
                                          children: h.jsx('path', {
                                            d: 'M18.2072 9.0428 12.0001 2.83569 5.793 9.0428 7.20721 10.457 12.0001 5.66412 16.793 10.457 18.2072 9.0428ZM5.79285 14.9572 12 21.1643 18.2071 14.9572 16.7928 13.543 12 18.3359 7.20706 13.543 5.79285 14.9572Z'
                                          })
                                        })
                                      ]
                                    })
                                  }),
                                  h.jsx('div', {
                                    className: P.form_item,
                                    children: h.jsxs('div', {
                                      className: P.selectContainer,
                                      children: [
                                        h.jsx('label', {
                                          className: P.input__label,
                                          children: 'Tax ID'
                                        }),
                                        h.jsx('select', {
                                          children:
                                            hn == null
                                              ? void 0
                                              : hn.map((s, l) =>
                                                  h.jsx(
                                                    'option',
                                                    {
                                                      children:
                                                        s == null
                                                          ? void 0
                                                          : s.label
                                                    },
                                                    l
                                                  )
                                                )
                                        }),
                                        h.jsx('svg', {
                                          className: P.select_proviences_icon,
                                          width: '16px',
                                          height: '16px',
                                          xmlns: 'http://www.w3.org/2000/svg',
                                          viewBox: '0 0 24 24',
                                          fill: 'currentColor',
                                          children: h.jsx('path', {
                                            d: 'M18.2072 9.0428 12.0001 2.83569 5.793 9.0428 7.20721 10.457 12.0001 5.66412 16.793 10.457 18.2072 9.0428ZM5.79285 14.9572 12 21.1643 18.2071 14.9572 16.7928 13.543 12 18.3359 7.20706 13.543 5.79285 14.9572Z'
                                          })
                                        })
                                      ]
                                    })
                                  }),
                                  h.jsxs('div', {
                                    className: P.form_item,
                                    children: [
                                      h.jsx('label', {
                                        className: P.input__label,
                                        children: 'Tax Number'
                                      }),
                                      h.jsx('input', {
                                        type: 'text',
                                        placeholder: 'Tax Number',
                                        required: !0,
                                        id: 'tax_number'
                                      })
                                    ]
                                  })
                                ]
                              })
                            })
                        ]
                      }),
                      h.jsxs('div', {
                        className: P.customize_checkbox_box,
                        children: [
                          h.jsx(vl, {
                            className: P.billing_details_checkbox,
                            id: 'update_billing_address',
                            checked: r,
                            onChange: a,
                            children: 'Update invoice billing details'
                          }),
                          r &&
                            h.jsx('div', {
                              className: P.billing_address_form,
                              children: h.jsxs('form', {
                                action: '',
                                className: P.formContainer,
                                children: [
                                  h.jsx('div', {
                                    className: P.form_item,
                                    children: h.jsxs('div', {
                                      className: P.selectContainer,
                                      children: [
                                        h.jsx('label', {
                                          className: P.input__label,
                                          children: 'Country/Region'
                                        }),
                                        h.jsx('select', {
                                          children:
                                            Dt == null
                                              ? void 0
                                              : Dt.map((s, l) =>
                                                  h.jsx(
                                                    'option',
                                                    {
                                                      value: s.value,
                                                      children:
                                                        s == null
                                                          ? void 0
                                                          : s.label
                                                    },
                                                    l
                                                  )
                                                )
                                        }),
                                        h.jsx('svg', {
                                          className: P.select_country_icon,
                                          width: '16px',
                                          height: '16px',
                                          xmlns: 'http://www.w3.org/2000/svg',
                                          viewBox: '0 0 24 24',
                                          fill: 'currentColor',
                                          children: h.jsx('path', {
                                            d: 'M18.2072 9.0428 12.0001 2.83569 5.793 9.0428 7.20721 10.457 12.0001 5.66412 16.793 10.457 18.2072 9.0428ZM5.79285 14.9572 12 21.1643 18.2071 14.9572 16.7928 13.543 12 18.3359 7.20706 13.543 5.79285 14.9572Z'
                                          })
                                        })
                                      ]
                                    })
                                  }),
                                  h.jsxs('div', {
                                    className: P.form_item,
                                    children: [
                                      h.jsx('label', {
                                        className: P.input__label,
                                        children: 'Address'
                                      }),
                                      h.jsx('input', {
                                        type: 'text',
                                        placeholder: 'Address',
                                        required: !0,
                                        id: 'address1'
                                      })
                                    ]
                                  }),
                                  h.jsxs('div', {
                                    className: P.form_item,
                                    children: [
                                      h.jsx('label', {
                                        className: P.input__label,
                                        children: 'Address (Optional)'
                                      }),
                                      h.jsx('input', {
                                        type: 'text',
                                        placeholder:
                                          'Apartment, suite, etc (Optional)',
                                        required: !0,
                                        id: 'address2'
                                      })
                                    ]
                                  }),
                                  h.jsx('div', {
                                    className: P.form_item,
                                    children: h.jsxs('div', {
                                      className: P.selectContainer,
                                      children: [
                                        h.jsx('label', {
                                          className: P.input__label,
                                          children: 'Province'
                                        }),
                                        h.jsx('select', {
                                          children:
                                            hn == null
                                              ? void 0
                                              : hn.map((s, l) =>
                                                  h.jsx(
                                                    'option',
                                                    {
                                                      children:
                                                        s == null
                                                          ? void 0
                                                          : s.label
                                                    },
                                                    l
                                                  )
                                                )
                                        }),
                                        h.jsx('svg', {
                                          className: P.select_proviences_icon,
                                          width: '16px',
                                          height: '16px',
                                          xmlns: 'http://www.w3.org/2000/svg',
                                          viewBox: '0 0 24 24',
                                          fill: 'currentColor',
                                          children: h.jsx('path', {
                                            d: 'M18.2072 9.0428 12.0001 2.83569 5.793 9.0428 7.20721 10.457 12.0001 5.66412 16.793 10.457 18.2072 9.0428ZM5.79285 14.9572 12 21.1643 18.2071 14.9572 16.7928 13.543 12 18.3359 7.20706 13.543 5.79285 14.9572Z'
                                          })
                                        })
                                      ]
                                    })
                                  }),
                                  h.jsxs('div', {
                                    className: P.form_Item_double,
                                    children: [
                                      h.jsxs('div', {
                                        className: `${P.form_item} ${P.upperLabel}`,
                                        children: [
                                          h.jsx('label', {
                                            className: P.input__label,
                                            children: 'City'
                                          }),
                                          h.jsx('input', {
                                            type: 'text',
                                            placeholder: 'New York'
                                          })
                                        ]
                                      }),
                                      h.jsxs('div', {
                                        className: `${P.form_item} ${P.upperLabel}`,
                                        children: [
                                          h.jsx('label', {
                                            className: P.input__label,
                                            children: 'Zip/Postal Code'
                                          }),
                                          h.jsx('input', {
                                            type: 'text',
                                            placeholder: '10001'
                                          })
                                        ]
                                      })
                                    ]
                                  })
                                ]
                              })
                            })
                        ]
                      })
                    ]
                  }),
                  h.jsxs('div', {
                    className: P.invoice_radio_container,
                    children: [
                      h.jsxs('div', {
                        className: P.invoice_radio,
                        children: [
                          h.jsx('input', {
                            id: 'send_email',
                            name: 'send_email',
                            type: 'radio'
                          }),
                          h.jsx('label', {
                            htmlFor: 'send_email',
                            className: P.download_method,
                            children: 'Send Invoice by Email'
                          })
                        ]
                      }),
                      h.jsxs('div', {
                        className: P.invoice_radio,
                        children: [
                          h.jsx('input', {
                            id: 'download',
                            name: 'download',
                            type: 'radio'
                          }),
                          h.jsx('label', {
                            htmlFor: 'download',
                            className: P.download_method,
                            children: 'Download Invoice'
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          })
        }),
        h.jsx('button', {
          className: P.generate_invoice_btn,
          children: 'Generate Invoice'
        })
      ]
    })
  },
  i7 = ({ handleCloseModal: e }) => {
    const t = [
      'Found a better price elsewhere',
      'Item is no longer neeeded',
      'Delivery costs are too expensive',
      'The item was purchased by mistake',
      'The order is taking too long to arrive',
      'Change mind about the product',
      'Other'
    ]
    return h.jsxs('div', {
      className: P.singleModalContent,
      children: [
        h.jsxs('div', {
          className: P.modal_content_header,
          children: [
            h.jsx('p', {
              className: P.modal_content_title,
              children: 'Request for Order Cancel'
            }),
            h.jsx('div', {
              className: P.modal_close_icon,
              onClick: e,
              children: h.jsx('svg', {
                width: '24px',
                height: '24px',
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                fill: '#5B21B6',
                children: h.jsx('path', {
                  d: 'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z'
                })
              })
            })
          ]
        }),
        h.jsx('div', {
          className: P.settingsContent,
          children: h.jsxs('form', {
            action: '',
            className: P.customer_support_form_container,
            children: [
              h.jsx('div', {
                className: `${P.form_item}`,
                children: h.jsxs('div', {
                  className: P.selectContainer,
                  children: [
                    h.jsx('label', {
                      className: P.input__label,
                      children: 'Cancel Reason'
                    }),
                    h.jsx('select', {
                      children:
                        t == null
                          ? void 0
                          : t.map((n, r) =>
                              h.jsx('option', { value: n, children: n }, r)
                            )
                    }),
                    h.jsx('svg', {
                      className: P.select_country_icon,
                      width: '16px',
                      height: '16px',
                      xmlns: 'http://www.w3.org/2000/svg',
                      viewBox: '0 0 24 24',
                      fill: 'currentColor',
                      children: h.jsx('path', {
                        d: 'M18.2072 9.0428 12.0001 2.83569 5.793 9.0428 7.20721 10.457 12.0001 5.66412 16.793 10.457 18.2072 9.0428ZM5.79285 14.9572 12 21.1643 18.2071 14.9572 16.7928 13.543 12 18.3359 7.20706 13.543 5.79285 14.9572Z'
                      })
                    })
                  ]
                })
              }),
              h.jsxs('div', {
                className: `${P.form_item}`,
                children: [
                  h.jsx('label', {
                    className: P.input__label,
                    children: 'Describe'
                  }),
                  h.jsx('textarea', {
                    rows: 7,
                    type: 'text',
                    placeholder: 'Why you want to cancel your order?',
                    required: !0,
                    id: 'address1'
                  }),
                  h.jsx('small', {
                    children: `You'll be contacted by the customer support team to confirm the
               cancellation.`
                  })
                ]
              }),
              h.jsx('button', { className: P.save_btn, children: 'Save' })
            ]
          })
        })
      ]
    })
  },
  o7 = ({ handleCloseModal: e }) => {
    var a, s
    const [t, n] = j.useState(null),
      r = [
        {
          id: '001',
          image:
            'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
          title: 'The Collection Snowboard: Hydrogen',
          variant: { title: 'medium / black / large', price: '200' }
        },
        {
          id: '002',
          image:
            'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
          title: 'The Collection Snowboard: Hydrogen',
          variant: { title: 'medium / black / large', price: '200' }
        },
        {
          id: '003',
          image:
            'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
          title: 'The Collection Snowboard: Hydrogen',
          variant: { title: 'medium / black / large', price: '200' }
        },
        {
          id: '004',
          image:
            'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
          title: 'The Collection Snowboard: Hydrogen',
          variant: { title: 'medium / black / large', price: '200' }
        },
        {
          id: '005',
          image:
            'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
          title: 'The Collection Snowboard: Hydrogen',
          variant: { title: 'medium / black / large', price: '200' }
        },
        {
          id: '006',
          image:
            'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
          title: 'The Collection Snowboard: Hydrogen',
          variant: { title: 'medium / black / large', price: '200' }
        },
        {
          id: '007',
          image:
            'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
          title: 'The Collection Snowboard: Hydrogen',
          variant: { title: 'medium / black / large', price: '200' }
        }
      ],
      i = (l) => {
        n(l)
      },
      o = () => {
        n(null)
      }
    return (
      console.log(t),
      h.jsxs('div', {
        className: P.singleModalContent,
        children: [
          h.jsxs('div', {
            className: P.modal_content_header,
            children: [
              h.jsx('p', {
                className: P.modal_content_title,
                children: 'Switch Product'
              }),
              h.jsx('div', {
                className: P.modal_close_icon,
                onClick: e,
                children: h.jsx('svg', {
                  width: '24px',
                  height: '24px',
                  xmlns: 'http://www.w3.org/2000/svg',
                  viewBox: '0 0 24 24',
                  fill: '#5B21B6',
                  children: h.jsx('path', {
                    d: 'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z'
                  })
                })
              })
            ]
          }),
          h.jsxs('div', {
            className: P.settingsContent,
            children: [
              t === null &&
                h.jsxs('div', {
                  className: P.product_search_box,
                  children: [
                    h.jsx('input', {
                      type: 'search',
                      placeholder: 'Search here..'
                    }),
                    h.jsx('svg', {
                      className: P.search_icon,
                      width: '15px',
                      height: '15px',
                      xmlns: 'http://www.w3.org/2000/svg',
                      viewBox: '0 0 24 24',
                      fill: 'currentColor',
                      children: h.jsx('path', {
                        d: 'M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z'
                      })
                    })
                  ]
                }),
              h.jsx('div', {
                children: t
                  ? h.jsxs('div', {
                      children: [
                        h.jsxs('div', {
                          className: P.switch_single_product_box,
                          children: [
                            h.jsxs('div', {
                              className: P.switch_product_image_box,
                              children: [
                                h.jsx('div', {
                                  className:
                                    P.switch_single_product_default_image,
                                  children: h.jsx('img', {
                                    src: t == null ? void 0 : t.image,
                                    alt: ''
                                  })
                                }),
                                h.jsxs('div', {
                                  className:
                                    P.switch_single_product_more_image_box,
                                  children: [
                                    h.jsx('div', {
                                      className:
                                        P.switch_single_product_more_image,
                                      children: h.jsx('img', {
                                        src: t == null ? void 0 : t.image,
                                        alt: ''
                                      })
                                    }),
                                    h.jsx('div', {
                                      className:
                                        P.switch_single_product_more_image,
                                      children: h.jsx('img', {
                                        src: t == null ? void 0 : t.image,
                                        alt: ''
                                      })
                                    }),
                                    h.jsx('div', {
                                      className:
                                        P.switch_single_product_more_image,
                                      children: h.jsx('img', {
                                        src: t == null ? void 0 : t.image,
                                        alt: ''
                                      })
                                    }),
                                    h.jsx('div', {
                                      className:
                                        P.switch_single_product_more_image,
                                      children: h.jsx('img', {
                                        src: t == null ? void 0 : t.image,
                                        alt: ''
                                      })
                                    }),
                                    h.jsx('div', {
                                      className:
                                        P.switch_single_product_more_image,
                                      children: h.jsx('img', {
                                        src: t == null ? void 0 : t.image,
                                        alt: ''
                                      })
                                    })
                                  ]
                                })
                              ]
                            }),
                            h.jsxs('div', {
                              className: P.switch_product_content_box,
                              children: [
                                h.jsx('p', {
                                  className: P.switch_single_product_title,
                                  children: t == null ? void 0 : t.title
                                }),
                                h.jsxs('p', {
                                  className: P.switch_single_product_price,
                                  children: [
                                    '$',
                                    (a = t == null ? void 0 : t.variant) == null
                                      ? void 0
                                      : a.price
                                  ]
                                }),
                                h.jsx('div', {
                                  className:
                                    P.switch_single_product_quantity_box,
                                  children: h.jsxs('div', {
                                    className:
                                      P.switch_single_product_quantity_btn,
                                    children: [
                                      h.jsx('button', {
                                        className: P.action_btn,
                                        children: h.jsx('svg', {
                                          width: '14px',
                                          height: '14px',
                                          xmlns: 'http://www.w3.org/2000/svg',
                                          viewBox: '0 0 24 24',
                                          fill: 'currentColor',
                                          children: h.jsx('path', {
                                            d: 'M5 11V13H19V11H5Z'
                                          })
                                        })
                                      }),
                                      h.jsx('p', {
                                        className: P.product_quantity,
                                        children: '1'
                                      }),
                                      h.jsx('button', {
                                        className: P.action_btn,
                                        children: h.jsx('svg', {
                                          width: '14px',
                                          height: '14px',
                                          xmlns: 'http://www.w3.org/2000/svg',
                                          viewBox: '0 0 24 24',
                                          fill: 'currentColor',
                                          children: h.jsx('path', {
                                            d: 'M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z'
                                          })
                                        })
                                      })
                                    ]
                                  })
                                }),
                                h.jsx('select', {
                                  className: P.switch_product_variant_select,
                                  children: h.jsx('option', {
                                    children:
                                      (s = t == null ? void 0 : t.variant) ==
                                      null
                                        ? void 0
                                        : s.title
                                  })
                                })
                              ]
                            })
                          ]
                        }),
                        h.jsxs('div', {
                          className: P.switch_product_action_btn,
                          children: [
                            h.jsx('button', {
                              className: P.add_to_cart,
                              children: 'Switch'
                            }),
                            h.jsx('button', {
                              className: P.back_btn,
                              onClick: o,
                              children: 'back'
                            })
                          ]
                        })
                      ]
                    })
                  : h.jsx('div', {
                      className: P.switch_product_main_container,
                      children:
                        r == null
                          ? void 0
                          : r.map((l) =>
                              h.jsxs(h.Fragment, {
                                children: [
                                  h.jsxs(
                                    'div',
                                    {
                                      className: P.switch_product_box,
                                      children: [
                                        h.jsxs('div', {
                                          className:
                                            P.switch_product_box_content,
                                          children: [
                                            h.jsx('div', {
                                              className: P.product_image_box,
                                              children: h.jsx('img', {
                                                src: 'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
                                                alt: ''
                                              })
                                            }),
                                            h.jsxs('div', {
                                              className: P.product_content,
                                              children: [
                                                h.jsx('h5', {
                                                  className: P.product_title,
                                                  children:
                                                    'The Collection Snowboard: Hydrogen'
                                                }),
                                                h.jsx('p', {
                                                  className: P.product_price,
                                                  children: 'Price: $200'
                                                })
                                              ]
                                            })
                                          ]
                                        }),
                                        h.jsx('div', {
                                          className: P.view_details_box,
                                          children: h.jsx('p', {
                                            onClick: () => i(l),
                                            children: 'View Details'
                                          })
                                        })
                                      ]
                                    },
                                    l.id
                                  ),
                                  h.jsx('div', {
                                    className: 'opt_order_edit_divider'
                                  })
                                ]
                              })
                            )
                    })
              })
            ]
          })
        ]
      })
    )
  },
  a7 = ({ handleCloseModal: e }) => {
    var a, s
    const [t, n] = j.useState(null),
      r = [
        {
          id: '001',
          image:
            'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
          title: 'The Collection Snowboard: Hydrogen',
          variant: { title: 'medium / black / large', price: '200' }
        },
        {
          id: '002',
          image:
            'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
          title: 'The Collection Snowboard: Hydrogen',
          variant: { title: 'medium / black / large', price: '200' }
        },
        {
          id: '003',
          image:
            'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
          title: 'The Collection Snowboard: Hydrogen',
          variant: { title: 'medium / black / large', price: '200' }
        },
        {
          id: '004',
          image:
            'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
          title: 'The Collection Snowboard: Hydrogen',
          variant: { title: 'medium / black / large', price: '200' }
        },
        {
          id: '005',
          image:
            'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
          title: 'The Collection Snowboard: Hydrogen',
          variant: { title: 'medium / black / large', price: '200' }
        },
        {
          id: '006',
          image:
            'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
          title: 'The Collection Snowboard: Hydrogen',
          variant: { title: 'medium / black / large', price: '200' }
        },
        {
          id: '007',
          image:
            'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
          title: 'The Collection Snowboard: Hydrogen',
          variant: { title: 'medium / black / large', price: '200' }
        }
      ],
      i = (l) => {
        n(l)
      },
      o = () => {
        n(null)
      }
    return (
      console.log(t),
      h.jsxs('div', {
        className: P.singleModalContent,
        children: [
          h.jsxs('div', {
            className: P.modal_content_header,
            children: [
              h.jsx('p', {
                className: P.modal_content_title,
                children: 'Add Another Product'
              }),
              h.jsx('div', {
                className: P.modal_close_icon,
                onClick: e,
                children: h.jsx('svg', {
                  width: '24px',
                  height: '24px',
                  xmlns: 'http://www.w3.org/2000/svg',
                  viewBox: '0 0 24 24',
                  fill: '#5B21B6',
                  children: h.jsx('path', {
                    d: 'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z'
                  })
                })
              })
            ]
          }),
          h.jsxs('div', {
            className: P.settingsContent,
            children: [
              t === null &&
                h.jsxs('div', {
                  className: P.product_search_box,
                  children: [
                    h.jsx('input', {
                      type: 'search',
                      placeholder: 'Search here..'
                    }),
                    h.jsx('svg', {
                      className: P.search_icon,
                      width: '15px',
                      height: '15px',
                      xmlns: 'http://www.w3.org/2000/svg',
                      viewBox: '0 0 24 24',
                      fill: 'currentColor',
                      children: h.jsx('path', {
                        d: 'M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z'
                      })
                    })
                  ]
                }),
              h.jsx('div', {
                children: t
                  ? h.jsxs('div', {
                      children: [
                        h.jsxs('div', {
                          className: P.add_another_single_product_box,
                          children: [
                            h.jsxs('div', {
                              className: P.add_another_product_image_box,
                              children: [
                                h.jsx('div', {
                                  className:
                                    P.add_another_single_product_default_image,
                                  children: h.jsx('img', {
                                    src: t == null ? void 0 : t.image,
                                    alt: ''
                                  })
                                }),
                                h.jsxs('div', {
                                  className:
                                    P.add_another_single_product_more_image_box,
                                  children: [
                                    h.jsx('div', {
                                      className:
                                        P.add_another_single_product_more_image,
                                      children: h.jsx('img', {
                                        src: t == null ? void 0 : t.image,
                                        alt: ''
                                      })
                                    }),
                                    h.jsx('div', {
                                      className:
                                        P.add_another_single_product_more_image,
                                      children: h.jsx('img', {
                                        src: t == null ? void 0 : t.image,
                                        alt: ''
                                      })
                                    }),
                                    h.jsx('div', {
                                      className:
                                        P.add_another_single_product_more_image,
                                      children: h.jsx('img', {
                                        src: t == null ? void 0 : t.image,
                                        alt: ''
                                      })
                                    }),
                                    h.jsx('div', {
                                      className:
                                        P.add_another_single_product_more_image,
                                      children: h.jsx('img', {
                                        src: t == null ? void 0 : t.image,
                                        alt: ''
                                      })
                                    }),
                                    h.jsx('div', {
                                      className:
                                        P.add_another_single_product_more_image,
                                      children: h.jsx('img', {
                                        src: t == null ? void 0 : t.image,
                                        alt: ''
                                      })
                                    })
                                  ]
                                })
                              ]
                            }),
                            h.jsxs('div', {
                              className: P.switch_product_content_box,
                              children: [
                                h.jsx('p', {
                                  className: P.add_another_single_product_title,
                                  children: t == null ? void 0 : t.title
                                }),
                                h.jsxs('p', {
                                  className: P.add_another_single_product_price,
                                  children: [
                                    '$',
                                    (a = t == null ? void 0 : t.variant) == null
                                      ? void 0
                                      : a.price
                                  ]
                                }),
                                h.jsx('div', {
                                  className:
                                    P.add_another_single_product_quantity_box,
                                  children: h.jsxs('div', {
                                    className:
                                      P.add_another_single_product_quantity_btn,
                                    children: [
                                      h.jsx('button', {
                                        className: P.action_btn,
                                        children: h.jsx('svg', {
                                          width: '14px',
                                          height: '14px',
                                          xmlns: 'http://www.w3.org/2000/svg',
                                          viewBox: '0 0 24 24',
                                          fill: 'currentColor',
                                          children: h.jsx('path', {
                                            d: 'M5 11V13H19V11H5Z'
                                          })
                                        })
                                      }),
                                      h.jsx('p', {
                                        className: P.product_quantity,
                                        children: '1'
                                      }),
                                      h.jsx('button', {
                                        className: P.action_btn,
                                        children: h.jsx('svg', {
                                          width: '14px',
                                          height: '14px',
                                          xmlns: 'http://www.w3.org/2000/svg',
                                          viewBox: '0 0 24 24',
                                          fill: 'currentColor',
                                          children: h.jsx('path', {
                                            d: 'M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z'
                                          })
                                        })
                                      })
                                    ]
                                  })
                                }),
                                h.jsx('select', {
                                  className:
                                    P.add_another_product_variant_select,
                                  children: h.jsx('option', {
                                    children:
                                      (s = t == null ? void 0 : t.variant) ==
                                      null
                                        ? void 0
                                        : s.title
                                  })
                                })
                              ]
                            })
                          ]
                        }),
                        h.jsxs('div', {
                          className: P.add_another_product_action_btn,
                          children: [
                            h.jsx('button', {
                              className: P.buy_now,
                              children: 'Buy Now'
                            }),
                            h.jsx('button', {
                              className: P.back_btn,
                              onClick: o,
                              children: 'back'
                            })
                          ]
                        })
                      ]
                    })
                  : h.jsx('div', {
                      className: P.add_another_product_main_container,
                      children:
                        r == null
                          ? void 0
                          : r.map((l) =>
                              h.jsxs(h.Fragment, {
                                children: [
                                  h.jsxs(
                                    'div',
                                    {
                                      className: P.add_another_product_box,
                                      children: [
                                        h.jsxs('div', {
                                          className:
                                            P.add_another_product_box_content,
                                          children: [
                                            h.jsx('div', {
                                              className: P.product_image_box,
                                              children: h.jsx('img', {
                                                src: 'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
                                                alt: ''
                                              })
                                            }),
                                            h.jsxs('div', {
                                              className: P.product_content,
                                              children: [
                                                h.jsx('h5', {
                                                  className: P.product_title,
                                                  children:
                                                    'The Collection Snowboard: Hydrogen'
                                                }),
                                                h.jsx('p', {
                                                  className: P.product_price,
                                                  children: 'Price: $200'
                                                })
                                              ]
                                            })
                                          ]
                                        }),
                                        h.jsx('div', {
                                          className: P.view_details_box,
                                          children: h.jsx('p', {
                                            onClick: () => i(l),
                                            children: 'View Details'
                                          })
                                        })
                                      ]
                                    },
                                    l.id
                                  ),
                                  h.jsx('div', {
                                    className: 'opt_order_edit_divider'
                                  })
                                ]
                              })
                            )
                    })
              })
            ]
          })
        ]
      })
    )
  },
  s7 = ({
    handleCloseModal: e,
    setActiveModal: t,
    activeModal: n,
    editOrderOption: r
  }) =>
    h.jsxs('div', {
      className: P.modal_content,
      children: [
        h.jsxs('div', {
          className: P.sidebar,
          children: [
            h.jsx('h3', {
              className: P.sidebarTitle,
              children: 'Change what you want'
            }),
            h.jsx('ul', {
              className: P.sidebarMenu,
              children:
                r == null
                  ? void 0
                  : r.map((i) =>
                      h.jsxs(
                        'div',
                        {
                          className: P.sidebarItem,
                          onClick: () => t(i.modalType),
                          children: [
                            h.jsx('div', {
                              children: i == null ? void 0 : i.icon
                            }),
                            h.jsx('li', {
                              children: i == null ? void 0 : i.name
                            })
                          ]
                        },
                        i == null ? void 0 : i.id
                      )
                    )
            })
          ]
        }),
        h.jsxs('div', {
          className: P.settingsContainer,
          children: [
            n === 'shipping' && h.jsx(lT, { handleCloseModal: e }),
            n === 'contact_information' && h.jsx(uT, { handleCloseModal: e }),
            n === 'quantities' && h.jsx(cT, { handleCloseModal: e }),
            n === 'contact_customer_support' &&
              h.jsx(dT, { handleCloseModal: e }),
            n === 'change_product_variant' &&
              h.jsx(fT, { handleCloseModal: e }),
            n === 'upgrade_shipping_method' &&
              h.jsx(pT, { handleCloseModal: e }),
            n === 'edit_gift_message' && h.jsx(hT, { handleCloseModal: e }),
            n === 'download_invoice' && h.jsx(r7, { handleCloseModal: e }),
            n === 'request_order_cancel' && h.jsx(i7, { handleCloseModal: e }),
            n === 'switch_product' && h.jsx(o7, { handleCloseModal: e }),
            n === 'add_another_product' && h.jsx(a7, { handleCloseModal: e })
          ]
        })
      ]
    }),
  Xt = [
    {
      id: '1',
      name: 'Shipping Address',
      icon: h.jsx(qC, {}),
      modalType: 'shipping'
    },
    {
      id: '2',
      name: 'Change Contact Information',
      icon: h.jsx(Pm, {}),
      modalType: 'contact_information'
    },
    {
      id: '2',
      name: 'Contact Customer Support',
      icon: h.jsx(Pm, {}),
      modalType: 'contact_customer_support'
    },
    {
      id: '3',
      name: 'Change Product Quantities',
      icon: h.jsx(WC, {}),
      modalType: 'quantities'
    },
    {
      id: '10',
      name: 'Add Another Product',
      icon: h.jsx(Du, {}),
      modalType: 'add_another_product'
    },
    {
      id: '4',
      name: 'Change Product Variant',
      icon: h.jsx(UC, {}),
      modalType: 'change_product_variant'
    },
    {
      id: '5',
      name: 'Switch Product',
      icon: h.jsx(GC, {}),
      modalType: 'switch_product'
    },
    {
      id: '6',
      name: 'Upgrade Shipping Methods',
      icon: h.jsx(QC, {}),
      modalType: 'upgrade_shipping_method'
    },
    {
      id: '9',
      name: 'Edit Gift Message',
      icon: h.jsx(KC, {}),
      modalType: 'edit_gift_message'
    },
    {
      id: '10',
      name: 'Download Invoice',
      icon: h.jsx(Du, {}),
      modalType: 'download_invoice'
    },
    {
      id: '10',
      name: 'Request For Order Cancel',
      icon: h.jsx(Du, {}),
      modalType: 'request_order_cancel'
    }
  ],
  l7 = '_promotion_qrmo6_1',
  Av = { promotion: l7 },
  u7 = () =>
    h.jsx('div', {
      className: Av.promotion,
      children: h.jsx('img', {
        className: Av.promotion_image,
        src: 'https://i.ibb.co.com/9q7kJYv/promotion-banner.png',
        alt: ''
      })
    }),
  c7 = '_orderDetailsContent_ncvid_1',
  d7 = '_orderDetails_ncvid_1',
  f7 = '_orderDetailsItem_ncvid_21',
  p7 = '_orderDetailsItemTitle_ncvid_29',
  h7 = '_information_ncvid_41',
  m7 = '_deadline_ncvid_59',
  De = {
    orderDetailsContent: c7,
    orderDetails: d7,
    orderDetailsItem: f7,
    orderDetailsItemTitle: p7,
    information: h7,
    deadline: m7
  },
  v7 = () =>
    h.jsxs('div', {
      className: De.orderDetails,
      children: [
        h.jsxs('div', {
          className: `${De.deadline}`,
          children: [
            h.jsx('svg', {
              width: '22px',
              height: '22px',
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 24 24',
              fill: 'currentColor',
              children: h.jsx('path', {
                d: 'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z'
              })
            }),
            h.jsx('p', {
              children: 'You can edit your order until Wed, Jan 15, 11 AM'
            })
          ]
        }),
        h.jsxs('div', {
          className: De.orderDetailsContent,
          children: [
            h.jsxs('div', {
              className: `${De.contactInformation} ${De.orderDetailsItem}`,
              children: [
                h.jsx('p', {
                  className: De.orderDetailsItemTitle,
                  children: 'Contact information'
                }),
                h.jsxs('div', {
                  className: De.information,
                  children: [
                    h.jsx('p', { children: 'Ahmed Faysal' }),
                    h.jsx('p', { children: '+09748347889' }),
                    h.jsx('p', { children: 'ahmedfaysal01797@gmail.com' })
                  ]
                })
              ]
            }),
            h.jsxs('div', {
              className: `${De.shippingAddress} ${De.orderDetailsItem}`,
              children: [
                h.jsx('p', {
                  className: De.orderDetailsItemTitle,
                  children: 'Shipping address'
                }),
                h.jsxs('div', {
                  className: De.information,
                  children: [
                    h.jsx('p', { children: 'Ahmed Faysal' }),
                    h.jsx('p', { children: 'Mirpur-1' }),
                    h.jsx('p', { children: ' Dhaka, 1216' }),
                    h.jsx('p', { children: 'BD' })
                  ]
                })
              ]
            }),
            h.jsxs('div', {
              className: `${De.billingAddress} ${De.orderDetailsItem}`,
              children: [
                h.jsx('p', {
                  className: De.orderDetailsItemTitle,
                  children: 'Billing address'
                }),
                h.jsxs('div', {
                  className: De.information,
                  children: [
                    h.jsx('p', { children: 'Ahmed Faysal' }),
                    h.jsx('p', { children: ' Mirpur-1' }),
                    h.jsx('p', { children: ' Dhaka, 1216' }),
                    h.jsx('p', { children: 'BD' })
                  ]
                })
              ]
            })
          ]
        }),
        h.jsx('div', {
          className: De.promotion_banner_desktop,
          children: h.jsx(u7, {})
        })
      ]
    }),
  g7 = '_orderSummary_1u5cz_1',
  y7 = '_orderItems_1u5cz_39',
  _7 = '_orderItem_1u5cz_39',
  w7 = '_itemDetails_1u5cz_85',
  x7 = '_priceDetails_1u5cz_121',
  b7 = '_taxSection_1u5cz_123',
  S7 = '_paymentDetails_1u5cz_125',
  C7 = '_shippingSection_1u5cz_155',
  E7 = '_shippingOption_1u5cz_175',
  T7 = '_saveButton_1u5cz_217',
  k7 = '_deadline_mobile_1u5cz_279',
  j7 = '_deadline_1u5cz_279',
  wt = {
    orderSummary: g7,
    orderItems: y7,
    orderItem: _7,
    itemDetails: w7,
    priceDetails: x7,
    taxSection: b7,
    paymentDetails: S7,
    shippingSection: C7,
    shippingOption: E7,
    saveButton: T7,
    deadline_mobile: k7,
    deadline: j7
  },
  P7 = () => {
    const e = [
      {
        id: '1',
        name: 'The Collection Snowboard: Hydrogen',
        variant: 'Default Title',
        image:
          'https://shopninja-optimarko.myshopify.com/cdn/shop/files/7883dc186e15bf29dad696e1e989e914.jpg?v=1731948307&width=823',
        price: '700',
        quantity: '1'
      },
      {
        id: '2',
        name: 'The Collection Snowboard: Liquid',
        variant: 'Default Title',
        image:
          'https://shopninja-optimarko.myshopify.com/cdn/shop/files/7883dc186e15bf29dad696e1e989e914.jpg?v=1731948307&width=823',
        price: '800',
        quantity: '1'
      },
      {
        id: '3',
        name: 'The Collection Snowboard: Oxygen',
        variant: 'Default Title',
        image:
          'https://shopninja-optimarko.myshopify.com/cdn/shop/files/7883dc186e15bf29dad696e1e989e914.jpg?v=1731948307&width=823',
        price: '900',
        quantity: '1'
      },
      {
        id: '3',
        name: 'The Collection Snowboard: Oxygen',
        variant: 'Default Title',
        image:
          'https://shopninja-optimarko.myshopify.com/cdn/shop/files/7883dc186e15bf29dad696e1e989e914.jpg?v=1731948307&width=823',
        price: '900',
        quantity: '1'
      },
      {
        id: '3',
        name: 'The Collection Snowboard: Oxygen',
        variant: 'Default Title',
        image:
          'https://shopninja-optimarko.myshopify.com/cdn/shop/files/7883dc186e15bf29dad696e1e989e914.jpg?v=1731948307&width=823',
        price: '900',
        quantity: '1'
      },
      {
        id: '3',
        name: 'The Collection Snowboard: Oxygen',
        variant: 'Default Title',
        image:
          'https://shopninja-optimarko.myshopify.com/cdn/shop/files/7883dc186e15bf29dad696e1e989e914.jpg?v=1731948307&width=823',
        price: '900',
        quantity: '1'
      },
      {
        id: '3',
        name: 'The Collection Snowboard: Oxygen',
        variant: 'Default Title',
        image:
          'https://shopninja-optimarko.myshopify.com/cdn/shop/files/7883dc186e15bf29dad696e1e989e914.jpg?v=1731948307&width=823',
        price: '900',
        quantity: '1'
      },
      {
        id: '3',
        name: 'The Collection Snowboard: Oxygen',
        variant: 'Default Title',
        image:
          'https://shopninja-optimarko.myshopify.com/cdn/shop/files/7883dc186e15bf29dad696e1e989e914.jpg?v=1731948307&width=823',
        price: '900',
        quantity: '1'
      }
    ]
    return h.jsxs('div', {
      children: [
        h.jsx('div', {
          className: `${wt.deadline_mobile}`,
          children: h.jsxs('div', {
            className: `${wt.deadline} `,
            children: [
              h.jsx('svg', {
                width: '22px',
                height: '22px',
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                fill: 'currentColor',
                children: h.jsx('path', {
                  d: 'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z'
                })
              }),
              h.jsx('p', {
                children: 'You can edit your order until Wed, Jan 15, 11 AM'
              })
            ]
          })
        }),
        h.jsxs('div', {
          className: wt.orderSummary,
          children: [
            h.jsx('h2', { children: 'Order summary' }),
            h.jsx('div', {
              className: wt.orderItems,
              children:
                e == null
                  ? void 0
                  : e.map((t) =>
                      h.jsxs(
                        'div',
                        {
                          className: wt.orderItem,
                          children: [
                            h.jsx('img', {
                              src: t.image,
                              alt: 'The Collection Snowboard: Hydrogen'
                            }),
                            h.jsxs('div', {
                              className: wt.itemDetails,
                              children: [
                                h.jsxs('div', {
                                  children: [
                                    h.jsx('p', { children: t.name }),
                                    h.jsx('p', { children: t.variant })
                                  ]
                                }),
                                h.jsxs('span', { children: ['BDT ', t.price] })
                              ]
                            })
                          ]
                        },
                        t.id
                      )
                    )
            }),
            h.jsxs('div', {
              children: [
                h.jsxs('div', {
                  className: wt.priceDetails,
                  children: [
                    h.jsxs('p', {
                      children: [
                        h.jsx('strong', { children: 'Subtotal' }),
                        h.jsx('span', { children: 'BDT 2,374.95' })
                      ]
                    }),
                    h.jsxs('p', {
                      children: [
                        h.jsx('strong', { children: 'Cart Discounts' }),
                        h.jsx('span', { children: 'None' })
                      ]
                    }),
                    h.jsxs('p', {
                      children: [
                        h.jsx('strong', { children: 'Outstanding Payment' }),
                        h.jsx('span', { children: 'None' })
                      ]
                    })
                  ]
                }),
                h.jsxs('div', {
                  className: wt.shippingSection,
                  children: [
                    h.jsx('h3', { children: 'Shipping' }),
                    h.jsxs('div', {
                      className: wt.shippingOption,
                      children: [
                        h.jsx('input', {
                          type: 'radio',
                          id: 'standard',
                          name: 'shipping',
                          defaultChecked: !0
                        }),
                        h.jsx('label', {
                          htmlFor: 'standard',
                          children: 'Standard'
                        }),
                        h.jsx('span', { children: 'BDT 0.00' })
                      ]
                    })
                  ]
                }),
                h.jsxs('div', {
                  className: wt.taxSection,
                  children: [
                    h.jsxs('p', {
                      children: [
                        h.jsx('strong', { children: 'Applied Taxes' }),
                        h.jsx('span', { children: 'BDT 356.24' })
                      ]
                    }),
                    h.jsxs('p', {
                      children: [
                        h.jsx('strong', { children: 'VAT' }),
                        h.jsx('span', { children: 'BDT 356.24' })
                      ]
                    })
                  ]
                }),
                h.jsxs('div', {
                  className: wt.paymentDetails,
                  children: [
                    h.jsxs('p', {
                      children: [
                        h.jsx('strong', { children: 'Paid' }),
                        h.jsx('span', { children: 'BDT 2,731.19' })
                      ]
                    }),
                    h.jsxs('p', {
                      children: [
                        h.jsx('strong', { children: 'Net Payments' }),
                        h.jsx('span', { children: 'BDT 2,731.19' })
                      ]
                    })
                  ]
                }),
                h.jsx('button', {
                  className: wt.saveButton,
                  children: 'Pay Now'
                })
              ]
            })
          ]
        })
      ]
    })
  },
  M7 = () => {
    const [e, t] = j.useState(!1),
      [n, r] = j.useState('shipping'),
      [i, o] = j.useState(Xt),
      a = (u) => {
        t(!0), r(u)
      },
      s = () => {
        t(!1), r(null)
      },
      l = [
        {
          id: '1',
          name: 'The Collection Snowboard: Hydrogen',
          variant: 'Default title',
          price: '700',
          image:
            'https://shopninja-optimarko.myshopify.com/cdn/shop/files/85cc58608bf138a50036bcfe86a3a362.jpg?v=1731948324&width=823'
        },
        {
          id: '2',
          name: 'The Complete Snowboard',
          variant: 'Default title',
          price: '700',
          image:
            'https://shopninja-optimarko.myshopify.com/cdn/shop/files/85cc58608bf138a50036bcfe86a3a362.jpg?v=1731948324&width=823'
        },
        {
          id: '3',
          name: 'The Complete Snowboard',
          variant: 'Default title',
          price: '700',
          image:
            'https://shopninja-optimarko.myshopify.com/cdn/shop/files/85cc58608bf138a50036bcfe86a3a362.jpg?v=1731948324&width=823'
        },
        {
          id: '4',
          name: 'The Complete Snowboard',
          variant: 'Default title',
          price: '700',
          image:
            'https://shopninja-optimarko.myshopify.com/cdn/shop/files/8072c8b5718306d4be25aac21836ce16.jpg?v=1731948327&width=823'
        },
        {
          id: '5',
          name: 'The Collection Snowboard: Hydrogen',
          variant: 'Default title',
          price: '700',
          image:
            'https://shopninja-optimarko.myshopify.com/cdn/shop/files/8072c8b5718306d4be25aac21836ce16.jpg?v=1731948327&width=823'
        },
        {
          id: '6',
          name: 'The Complete Snowboard',
          variant: 'Default title',
          price: '700',
          image:
            'https://shopninja-optimarko.myshopify.com/cdn/shop/files/7883dc186e15bf29dad696e1e989e914.jpg?v=1731948307&width=823'
        },
        {
          id: '7',
          name: 'The Complete Snowboard',
          variant: 'Default title',
          price: '700',
          image:
            'https://shopninja-optimarko.myshopify.com/cdn/shop/files/7883dc186e15bf29dad696e1e989e914.jpg?v=1731948307&width=823'
        },
        {
          id: '8',
          name: 'The Collection Snowboard: Oxygen',
          variant: 'Default title',
          price: '700',
          image:
            'https://shopninja-optimarko.myshopify.com/cdn/shop/files/7883dc186e15bf29dad696e1e989e914.jpg?v=1731948307&width=823'
        }
      ]
    return (
      j.useEffect(() => {
        const u = () => {
          const c = window.innerWidth
          c > 1154
            ? o(Xt)
            : c <= 1153 && c > 977
            ? o(Xt.slice(0, 9))
            : c <= 978 && c > 878
            ? o(Xt.slice(0, 7))
            : c <= 877 && c > 706
            ? o(Xt.slice(0, 6))
            : c <= 705 && c > 616
            ? o(Xt.slice(0, 5))
            : c <= 615 && c > 516
            ? o(Xt.slice(0, 4))
            : c <= 516 && c > 430
            ? o(Xt.slice(0, 3))
            : o(Xt.slice(0, 2))
        }
        return (
          u(),
          window.addEventListener('resize', u),
          () => {
            window.removeEventListener('resize', u)
          }
        )
      }, []),
      h.jsxs('div', {
        className: de.opt_order_edit_container,
        children: [
          h.jsxs('div', {
            className: de.setting,
            children: [
              i == null
                ? void 0
                : i.map((u) =>
                    h.jsxs(
                      'div',
                      {
                        className: de.settings_box,
                        onClick: () => a(u == null ? void 0 : u.modalType),
                        children: [
                          h.jsx('div', {
                            className: de.settings_icon,
                            children: u.icon
                          }),
                          h.jsx('p', {
                            className: de.settings_label,
                            children: u.name
                          })
                        ]
                      },
                      u.id
                    )
                  ),
              h.jsx('div', {
                className: de.settings_more_box,
                onClick: () => a('shipping'),
                children: h.jsxs('div', {
                  className: `${de.settings_box}`,
                  children: [
                    h.jsx('div', {
                      className: de.settings_icon,
                      children: h.jsx(XC, {})
                    }),
                    h.jsx('p', {
                      className: de.settings_label,
                      children: 'More'
                    })
                  ]
                })
              })
            ]
          }),
          e &&
            h.jsx('div', {
              className: de.modal_main_container,
              children: h.jsx(s7, {
                editOrderOption: Xt,
                handleCloseModal: s,
                activeModal: n,
                setActiveModal: r
              })
            }),
          h.jsxs('div', {
            className: de.content,
            children: [
              h.jsx('div', {
                className: de.order_details_desktop,
                children: h.jsx(v7, {})
              }),
              h.jsx('div', {
                className: de.order_summary_desktop,
                children: h.jsx(P7, {})
              })
            ]
          }),
          h.jsxs('div', {
            className: de.productSection,
            children: [
              h.jsx('div', {
                className: de.productLabel,
                children: h.jsx('h3', { children: 'YOU MAY LIKE' })
              }),
              h.jsx('div', {
                className: `${de.suggestedProductContainer} card-slider`,
                children: h.jsx(W1, {
                  slidesPerView: 1,
                  spaceBetween: 25,
                  autoplay: { delay: 2500, disableOnInteraction: !1 },
                  loop: !0,
                  mousewheel: !0,
                  modules: [T4],
                  breakpoints: {
                    1342: { slidesPerView: 6 },
                    1024: { slidesPerView: 5 },
                    830: { slidesPerView: 4 },
                    736: { slidesPerView: 3 },
                    455: { slidesPerView: 2 }
                  },
                  className: 'mySwiper',
                  children:
                    l == null
                      ? void 0
                      : l.map((u) =>
                          h.jsx(
                            U1,
                            {
                              children: h.jsx('div', {
                                className: de.productCard,
                                children: h.jsxs('a', {
                                  href: '#',
                                  className: de.mainLink,
                                  children: [
                                    h.jsx('div', {
                                      className: de.productImage,
                                      children: h.jsx('img', {
                                        src: u.image,
                                        alt: `${u.name} - ${u.variant}`
                                      })
                                    }),
                                    h.jsxs('div', {
                                      className: de.productContent,
                                      children: [
                                        h.jsx('h4', {
                                          className: de.title,
                                          children: u.name
                                        }),
                                        h.jsx('p', {
                                          className: de.description,
                                          children: u.variant
                                        }),
                                        h.jsxs('p', {
                                          className: de.price,
                                          children: ['BDT ', u.price]
                                        }),
                                        h.jsx('div', {
                                          className: de.addToCartBtn,
                                          children: h.jsx('button', {
                                            children: 'Add to cart'
                                          })
                                        })
                                      ]
                                    })
                                  ]
                                })
                              })
                            },
                            u.id
                          )
                        )
                })
              })
            ]
          })
        ]
      })
    )
  }
function N7() {
  const e = e1((r) => r.orderEdit.page),
    n = (() => {
      switch (e) {
        case 'Home':
          return h.jsx(M7, {})
        case 'EditOrder':
          return h.jsx(CC, {})
        default:
          return null
      }
    })()
  return h.jsxs('section', {
    className: 'order-edit-container',
    children: [n, h.jsx(wb, {})]
  })
}
const Rv = 'shopninja-optimarko.myshopify.com',
  Po = M1({
    reducerPath: 'orderEditConfigApi',
    baseQuery: C1({
      baseUrl: 'https://order-editing-staging.cleversity.com/api/storefront'
    }),
    endpoints: (e) => ({
      getStyleData: e.query({
        query: () => ({ url: `/order-edit-portal-data?shop_url=${Rv}` }),
        transformResponse: (t) => t.data,
        transformErrorResponse: (t) => t.status
      }),
      getOrderEditSettings: e.query({
        query: () => ({ url: `/order-edit-setting?shop_url=${Rv}` }),
        transformResponse: (t) => t.edit_setting,
        transformErrorResponse: (t) => t.status
      })
    })
  }),
  O7 = { styleData: {}, orderEditSettings: {} },
  L7 = Rn({
    name: 'orderEditStyle',
    initialState: O7,
    reducers: {},
    extraReducers: (e) => {
      e.addMatcher(Po.endpoints.getStyleData.matchFulfilled, (t, n) => {
        t.styleData = n.payload
      }),
        e.addMatcher(
          Po.endpoints.getOrderEditSettings.matchFulfilled,
          (t, n) => {
            t.orderEditSettings = n.payload
          }
        )
    }
  }),
  A7 = L7.reducer,
  R7 = mS({
    reducer: {
      orderEdit: SC,
      orderEditConfig: A7,
      [Eo.reducerPath]: Eo.reducer,
      [Po.reducerPath]: Po.reducer
    },
    middleware: (e) => e().concat(Eo.middleware).concat(Po.middleware)
  }),
  I7 = K0(document.getElementById('opt-order-edit'))
I7.render(h.jsx(jx, { store: R7, children: h.jsx(N7, {}) }))
