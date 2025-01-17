var I2 = Object.defineProperty
var F2 = (e, t, n) =>
  t in e
    ? I2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n)
var au = (e, t, n) => F2(e, typeof t != 'symbol' ? t + '' : t, n)
function $v(e, t) {
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
function mf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
var Dv = { exports: {} },
  _l = {},
  Vv = { exports: {} },
  J = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ca = Symbol.for('react.element'),
  z2 = Symbol.for('react.portal'),
  $2 = Symbol.for('react.fragment'),
  D2 = Symbol.for('react.strict_mode'),
  V2 = Symbol.for('react.profiler'),
  B2 = Symbol.for('react.provider'),
  H2 = Symbol.for('react.context'),
  q2 = Symbol.for('react.forward_ref'),
  W2 = Symbol.for('react.suspense'),
  U2 = Symbol.for('react.memo'),
  G2 = Symbol.for('react.lazy'),
  Wp = Symbol.iterator
function Q2(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Wp && e[Wp]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var Bv = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  Hv = Object.assign,
  qv = {}
function zi(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = qv),
    (this.updater = n || Bv)
}
zi.prototype.isReactComponent = {}
zi.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
zi.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function Wv() {}
Wv.prototype = zi.prototype
function vf(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = qv),
    (this.updater = n || Bv)
}
var gf = (vf.prototype = new Wv())
gf.constructor = vf
Hv(gf, zi.prototype)
gf.isPureReactComponent = !0
var Up = Array.isArray,
  Uv = Object.prototype.hasOwnProperty,
  yf = { current: null },
  Gv = { key: !0, ref: !0, __self: !0, __source: !0 }
function Qv(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      Uv.call(t, r) && !Gv.hasOwnProperty(r) && (i[r] = t[r])
  var s = arguments.length - 2
  if (s === 1) i.children = n
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2]
    i.children = l
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r])
  return { $$typeof: ca, type: e, key: o, ref: a, props: i, _owner: yf.current }
}
function K2(e, t) {
  return {
    $$typeof: ca,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner
  }
}
function _f(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === ca
}
function X2(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var Gp = /\/+/g
function su(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? X2('' + e.key)
    : t.toString(36)
}
function cs(e, t, n, r, i) {
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
          case ca:
          case z2:
            a = !0
        }
    }
  if (a)
    return (
      (a = e),
      (i = i(a)),
      (e = r === '' ? '.' + su(a, 0) : r),
      Up(i)
        ? ((n = ''),
          e != null && (n = e.replace(Gp, '$&/') + '/'),
          cs(i, t, n, '', function (u) {
            return u
          }))
        : i != null &&
          (_f(i) &&
            (i = K2(
              i,
              n +
                (!i.key || (a && a.key === i.key)
                  ? ''
                  : ('' + i.key).replace(Gp, '$&/') + '/') +
                e
            )),
          t.push(i)),
      1
    )
  if (((a = 0), (r = r === '' ? '.' : r + ':'), Up(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s]
      var l = r + su(o, s)
      a += cs(o, t, n, l, i)
    }
  else if (((l = Q2(e)), typeof l == 'function'))
    for (e = l.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (l = r + su(o, s++)), (a += cs(o, t, n, l, i))
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
function Pa(e, t, n) {
  if (e == null) return e
  var r = [],
    i = 0
  return (
    cs(e, r, '', '', function (o) {
      return t.call(n, o, i++)
    }),
    r
  )
}
function Y2(e) {
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
  ds = { transition: null },
  Z2 = {
    ReactCurrentDispatcher: Ge,
    ReactCurrentBatchConfig: ds,
    ReactCurrentOwner: yf
  }
function Kv() {
  throw Error('act(...) is not supported in production builds of React.')
}
J.Children = {
  map: Pa,
  forEach: function (e, t, n) {
    Pa(
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
      Pa(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      Pa(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!_f(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      )
    return e
  }
}
J.Component = zi
J.Fragment = $2
J.Profiler = V2
J.PureComponent = vf
J.StrictMode = D2
J.Suspense = W2
J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z2
J.act = Kv
J.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    )
  var r = Hv({}, e.props),
    i = e.key,
    o = e.ref,
    a = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (a = yf.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps
    for (l in t)
      Uv.call(t, l) &&
        !Gv.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l])
  }
  var l = arguments.length - 2
  if (l === 1) r.children = n
  else if (1 < l) {
    s = Array(l)
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2]
    r.children = s
  }
  return { $$typeof: ca, type: e.type, key: i, ref: o, props: r, _owner: a }
}
J.createContext = function (e) {
  return (
    (e = {
      $$typeof: H2,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }),
    (e.Provider = { $$typeof: B2, _context: e }),
    (e.Consumer = e)
  )
}
J.createElement = Qv
J.createFactory = function (e) {
  var t = Qv.bind(null, e)
  return (t.type = e), t
}
J.createRef = function () {
  return { current: null }
}
J.forwardRef = function (e) {
  return { $$typeof: q2, render: e }
}
J.isValidElement = _f
J.lazy = function (e) {
  return { $$typeof: G2, _payload: { _status: -1, _result: e }, _init: Y2 }
}
J.memo = function (e, t) {
  return { $$typeof: U2, type: e, compare: t === void 0 ? null : t }
}
J.startTransition = function (e) {
  var t = ds.transition
  ds.transition = {}
  try {
    e()
  } finally {
    ds.transition = t
  }
}
J.unstable_act = Kv
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
Vv.exports = J
var k = Vv.exports
const te = mf(k),
  No = $v({ __proto__: null, default: te }, [k])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var J2 = k,
  e_ = Symbol.for('react.element'),
  t_ = Symbol.for('react.fragment'),
  n_ = Object.prototype.hasOwnProperty,
  r_ = J2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  i_ = { key: !0, ref: !0, __self: !0, __source: !0 }
function Xv(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (a = t.ref)
  for (r in t) n_.call(t, r) && !i_.hasOwnProperty(r) && (i[r] = t[r])
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r])
  return { $$typeof: e_, type: e, key: o, ref: a, props: i, _owner: r_.current }
}
_l.Fragment = t_
_l.jsx = Xv
_l.jsxs = Xv
Dv.exports = _l
var h = Dv.exports,
  Yv = { exports: {} },
  ht = {},
  Zv = { exports: {} },
  Jv = {}
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
    var z = N.length
    N.push(F)
    e: for (; 0 < z; ) {
      var V = (z - 1) >>> 1,
        q = N[V]
      if (0 < i(q, F)) (N[V] = F), (N[z] = q), (z = V)
      else break e
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0]
  }
  function r(N) {
    if (N.length === 0) return null
    var F = N[0],
      z = N.pop()
    if (z !== F) {
      N[0] = z
      e: for (var V = 0, q = N.length, G = q >>> 1; V < G; ) {
        var U = 2 * (V + 1) - 1,
          Z = N[U],
          se = U + 1,
          re = N[se]
        if (0 > i(Z, z))
          se < q && 0 > i(re, Z)
            ? ((N[V] = re), (N[se] = z), (V = se))
            : ((N[V] = Z), (N[U] = z), (V = U))
        else if (se < q && 0 > i(re, z)) (N[V] = re), (N[se] = z), (V = se)
        else break e
      }
    }
    return F
  }
  function i(N, F) {
    var z = N.sortIndex - F.sortIndex
    return z !== 0 ? z : N.id - F.id
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
    m = typeof clearTimeout == 'function' ? clearTimeout : null,
    p = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function v(N) {
    for (var F = n(u); F !== null; ) {
      if (F.callback === null) r(u)
      else if (F.startTime <= N) r(u), (F.sortIndex = F.expirationTime), t(l, F)
      else break
      F = n(u)
    }
  }
  function w(N) {
    if (((_ = !1), v(N), !y))
      if (n(l) !== null) (y = !0), R(b)
      else {
        var F = n(u)
        F !== null && I(w, F.startTime - N)
      }
  }
  function b(N, F) {
    ;(y = !1), _ && ((_ = !1), m(E), (E = -1)), (g = !0)
    var z = d
    try {
      for (
        v(F), f = n(l);
        f !== null && (!(f.expirationTime > F) || (N && !M()));

      ) {
        var V = f.callback
        if (typeof V == 'function') {
          ;(f.callback = null), (d = f.priorityLevel)
          var q = V(f.expirationTime <= F)
          ;(F = e.unstable_now()),
            typeof q == 'function' ? (f.callback = q) : f === n(l) && r(l),
            v(F)
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
      ;(f = null), (d = z), (g = !1)
    }
  }
  var C = !1,
    S = null,
    E = -1,
    j = 5,
    T = -1
  function M() {
    return !(e.unstable_now() - T < j)
  }
  function O() {
    if (S !== null) {
      var N = e.unstable_now()
      T = N
      var F = !0
      try {
        F = S(!0, N)
      } finally {
        F ? L() : ((C = !1), (S = null))
      }
    } else C = !1
  }
  var L
  if (typeof p == 'function')
    L = function () {
      p(O)
    }
  else if (typeof MessageChannel < 'u') {
    var A = new MessageChannel(),
      D = A.port2
    ;(A.port1.onmessage = O),
      (L = function () {
        D.postMessage(null)
      })
  } else
    L = function () {
      x(O, 0)
    }
  function R(N) {
    ;(S = N), C || ((C = !0), L())
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
        : (j = 0 < N ? Math.floor(1e3 / N) : 5)
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
      var z = d
      d = F
      try {
        return N()
      } finally {
        d = z
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
      var z = d
      d = N
      try {
        return F()
      } finally {
        d = z
      }
    }),
    (e.unstable_scheduleCallback = function (N, F, z) {
      var V = e.unstable_now()
      switch (
        (typeof z == 'object' && z !== null
          ? ((z = z.delay), (z = typeof z == 'number' && 0 < z ? V + z : V))
          : (z = V),
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
        (q = z + q),
        (N = {
          id: c++,
          callback: F,
          priorityLevel: N,
          startTime: z,
          expirationTime: q,
          sortIndex: -1
        }),
        z > V
          ? ((N.sortIndex = z),
            t(u, N),
            n(l) === null &&
              N === n(u) &&
              (_ ? (m(E), (E = -1)) : (_ = !0), I(w, z - V)))
          : ((N.sortIndex = q), t(l, N), y || g || ((y = !0), R(b))),
        N
      )
    }),
    (e.unstable_shouldYield = M),
    (e.unstable_wrapCallback = function (N) {
      var F = d
      return function () {
        var z = d
        d = F
        try {
          return N.apply(this, arguments)
        } finally {
          d = z
        }
      }
    })
})(Jv)
Zv.exports = Jv
var o_ = Zv.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var a_ = k,
  ft = o_
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
var eg = new Set(),
  Lo = {}
function Ar(e, t) {
  Ei(e, t), Ei(e + 'Capture', t)
}
function Ei(e, t) {
  for (Lo[e] = t, e = 0; e < t.length; e++) eg.add(t[e])
}
var wn = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  mc = Object.prototype.hasOwnProperty,
  s_ =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Qp = {},
  Kp = {}
function l_(e) {
  return mc.call(Kp, e)
    ? !0
    : mc.call(Qp, e)
    ? !1
    : s_.test(e)
    ? (Kp[e] = !0)
    : ((Qp[e] = !0), !1)
}
function u_(e, t, n, r) {
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
function c_(e, t, n, r) {
  if (t === null || typeof t > 'u' || u_(e, t, n, r)) return !0
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
var xf = /[\-:]([a-z])/g
function wf(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(xf, wf)
    Re[t] = new Qe(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(xf, wf)
    Re[t] = new Qe(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(xf, wf)
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
function bf(e, t, n, r) {
  var i = Re.hasOwnProperty(t) ? Re[t] : null
  ;(i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (c_(t, n, i, r) && (n = null),
    r || i === null
      ? l_(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
var Pn = a_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ma = Symbol.for('react.element'),
  ei = Symbol.for('react.portal'),
  ti = Symbol.for('react.fragment'),
  Sf = Symbol.for('react.strict_mode'),
  vc = Symbol.for('react.profiler'),
  tg = Symbol.for('react.provider'),
  ng = Symbol.for('react.context'),
  Cf = Symbol.for('react.forward_ref'),
  gc = Symbol.for('react.suspense'),
  yc = Symbol.for('react.suspense_list'),
  Ef = Symbol.for('react.memo'),
  An = Symbol.for('react.lazy'),
  rg = Symbol.for('react.offscreen'),
  Xp = Symbol.iterator
function Ki(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Xp && e[Xp]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var me = Object.assign,
  lu
function so(e) {
  if (lu === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      lu = (t && t[1]) || ''
    }
  return (
    `
` +
    lu +
    e
  )
}
var uu = !1
function cu(e, t) {
  if (!e || uu) return ''
  uu = !0
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
    ;(uu = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? so(e) : ''
}
function d_(e) {
  switch (e.tag) {
    case 5:
      return so(e.type)
    case 16:
      return so('Lazy')
    case 13:
      return so('Suspense')
    case 19:
      return so('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = cu(e.type, !1)), e
    case 11:
      return (e = cu(e.type.render, !1)), e
    case 1:
      return (e = cu(e.type, !0)), e
    default:
      return ''
  }
}
function _c(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case ti:
      return 'Fragment'
    case ei:
      return 'Portal'
    case vc:
      return 'Profiler'
    case Sf:
      return 'StrictMode'
    case gc:
      return 'Suspense'
    case yc:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case ng:
        return (e.displayName || 'Context') + '.Consumer'
      case tg:
        return (e._context.displayName || 'Context') + '.Provider'
      case Cf:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case Ef:
        return (
          (t = e.displayName || null), t !== null ? t : _c(e.type) || 'Memo'
        )
      case An:
        ;(t = e._payload), (e = e._init)
        try {
          return _c(e(t))
        } catch {}
    }
  return null
}
function f_(e) {
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
      return _c(t)
    case 8:
      return t === Sf ? 'StrictMode' : 'Mode'
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
function er(e) {
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
function ig(e) {
  var t = e.type
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  )
}
function p_(e) {
  var t = ig(e) ? 'checked' : 'value',
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
function Na(e) {
  e._valueTracker || (e._valueTracker = p_(e))
}
function og(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ''
  return (
    e && (r = ig(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function Ls(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function xc(e, t) {
  var n = t.checked
  return me({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked
  })
}
function Yp(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;(n = er(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null
    })
}
function ag(e, t) {
  ;(t = t.checked), t != null && bf(e, 'checked', t, !1)
}
function wc(e, t) {
  ag(e, t)
  var n = er(t.value),
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
    ? bc(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && bc(e, t.type, er(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function Zp(e, t, n) {
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
function bc(e, t, n) {
  ;(t !== 'number' || Ls(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var lo = Array.isArray
function mi(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + er(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        ;(e[i].selected = !0), r && (e[i].defaultSelected = !0)
        return
      }
      t !== null || e[i].disabled || (t = e[i])
    }
    t !== null && (t.selected = !0)
  }
}
function Sc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(H(91))
  return me({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue
  })
}
function Jp(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(H(92))
      if (lo(n)) {
        if (1 < n.length) throw Error(H(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: er(n) }
}
function sg(e, t) {
  var n = er(t.value),
    r = er(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r)
}
function eh(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function lg(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function Cc(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? lg(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e
}
var La,
  ug = (function (e) {
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
        La = La || document.createElement('div'),
          La.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = La.firstChild;
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
var ho = {
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
  h_ = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(ho).forEach(function (e) {
  h_.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ho[t] = ho[e])
  })
})
function cg(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (ho.hasOwnProperty(e) && ho[e])
    ? ('' + t).trim()
    : t + 'px'
}
function dg(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = cg(n, t[n], r)
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i)
    }
}
var m_ = me(
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
function Ec(e, t) {
  if (t) {
    if (m_[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function jc(e, t) {
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
var Tc = null
function jf(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var kc = null,
  vi = null,
  gi = null
function th(e) {
  if ((e = pa(e))) {
    if (typeof kc != 'function') throw Error(H(280))
    var t = e.stateNode
    t && ((t = Cl(t)), kc(e.stateNode, e.type, t))
  }
}
function fg(e) {
  vi ? (gi ? gi.push(e) : (gi = [e])) : (vi = e)
}
function pg() {
  if (vi) {
    var e = vi,
      t = gi
    if (((gi = vi = null), th(e), t)) for (e = 0; e < t.length; e++) th(t[e])
  }
}
function hg(e, t) {
  return e(t)
}
function mg() {}
var du = !1
function vg(e, t, n) {
  if (du) return e(t, n)
  du = !0
  try {
    return hg(e, t, n)
  } finally {
    ;(du = !1), (vi !== null || gi !== null) && (mg(), pg())
  }
}
function Ao(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = Cl(n)
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
var Pc = !1
if (wn)
  try {
    var Xi = {}
    Object.defineProperty(Xi, 'passive', {
      get: function () {
        Pc = !0
      }
    }),
      window.addEventListener('test', Xi, Xi),
      window.removeEventListener('test', Xi, Xi)
  } catch {
    Pc = !1
  }
function v_(e, t, n, r, i, o, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, u)
  } catch (c) {
    this.onError(c)
  }
}
var mo = !1,
  Os = null,
  As = !1,
  Mc = null,
  g_ = {
    onError: function (e) {
      ;(mo = !0), (Os = e)
    }
  }
function y_(e, t, n, r, i, o, a, s, l) {
  ;(mo = !1), (Os = null), v_.apply(g_, arguments)
}
function __(e, t, n, r, i, o, a, s, l) {
  if ((y_.apply(this, arguments), mo)) {
    if (mo) {
      var u = Os
      ;(mo = !1), (Os = null)
    } else throw Error(H(198))
    As || ((As = !0), (Mc = u))
  }
}
function Rr(e) {
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
function gg(e) {
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
function nh(e) {
  if (Rr(e) !== e) throw Error(H(188))
}
function x_(e) {
  var t = e.alternate
  if (!t) {
    if (((t = Rr(e)), t === null)) throw Error(H(188))
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
        if (o === n) return nh(i), e
        if (o === r) return nh(i), t
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
function yg(e) {
  return (e = x_(e)), e !== null ? _g(e) : null
}
function _g(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = _g(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var xg = ft.unstable_scheduleCallback,
  rh = ft.unstable_cancelCallback,
  w_ = ft.unstable_shouldYield,
  b_ = ft.unstable_requestPaint,
  ye = ft.unstable_now,
  S_ = ft.unstable_getCurrentPriorityLevel,
  Tf = ft.unstable_ImmediatePriority,
  wg = ft.unstable_UserBlockingPriority,
  Rs = ft.unstable_NormalPriority,
  C_ = ft.unstable_LowPriority,
  bg = ft.unstable_IdlePriority,
  xl = null,
  nn = null
function E_(e) {
  if (nn && typeof nn.onCommitFiberRoot == 'function')
    try {
      nn.onCommitFiberRoot(xl, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Dt = Math.clz32 ? Math.clz32 : k_,
  j_ = Math.log,
  T_ = Math.LN2
function k_(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((j_(e) / T_) | 0)) | 0
}
var Oa = 64,
  Aa = 4194304
function uo(e) {
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
function Is(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    a = n & 268435455
  if (a !== 0) {
    var s = a & ~i
    s !== 0 ? (r = uo(s)) : ((o &= a), o !== 0 && (r = uo(o)))
  } else (a = n & ~i), a !== 0 ? (r = uo(a)) : o !== 0 && (r = uo(o))
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
      (n = 31 - Dt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i)
  return r
}
function P_(e, t) {
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
function M_(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var a = 31 - Dt(o),
      s = 1 << a,
      l = i[a]
    l === -1
      ? (!(s & n) || s & r) && (i[a] = P_(s, t))
      : l <= t && (e.expiredLanes |= s),
      (o &= ~s)
  }
}
function Nc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  )
}
function Sg() {
  var e = Oa
  return (Oa <<= 1), !(Oa & 4194240) && (Oa = 64), e
}
function fu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function da(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Dt(t)),
    (e[t] = n)
}
function N_(e, t) {
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
    var i = 31 - Dt(n),
      o = 1 << i
    ;(t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o)
  }
}
function kf(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var r = 31 - Dt(n),
      i = 1 << r
    ;(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i)
  }
}
var ie = 0
function Cg(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var Eg,
  Pf,
  jg,
  Tg,
  kg,
  Lc = !1,
  Ra = [],
  Un = null,
  Gn = null,
  Qn = null,
  Ro = new Map(),
  Io = new Map(),
  Fn = [],
  L_ =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function ih(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Un = null
      break
    case 'dragenter':
    case 'dragleave':
      Gn = null
      break
    case 'mouseover':
    case 'mouseout':
      Qn = null
      break
    case 'pointerover':
    case 'pointerout':
      Ro.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      Io.delete(t.pointerId)
  }
}
function Yi(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
      }),
      t !== null && ((t = pa(t)), t !== null && Pf(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e)
}
function O_(e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return (Un = Yi(Un, e, t, n, r, i)), !0
    case 'dragenter':
      return (Gn = Yi(Gn, e, t, n, r, i)), !0
    case 'mouseover':
      return (Qn = Yi(Qn, e, t, n, r, i)), !0
    case 'pointerover':
      var o = i.pointerId
      return Ro.set(o, Yi(Ro.get(o) || null, e, t, n, r, i)), !0
    case 'gotpointercapture':
      return (
        (o = i.pointerId), Io.set(o, Yi(Io.get(o) || null, e, t, n, r, i)), !0
      )
  }
  return !1
}
function Pg(e) {
  var t = fr(e.target)
  if (t !== null) {
    var n = Rr(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = gg(n)), t !== null)) {
          ;(e.blockedOn = t),
            kg(e.priority, function () {
              jg(n)
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
function fs(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Oc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(Tc = r), n.target.dispatchEvent(r), (Tc = null)
    } else return (t = pa(n)), t !== null && Pf(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function oh(e, t, n) {
  fs(e) && n.delete(t)
}
function A_() {
  ;(Lc = !1),
    Un !== null && fs(Un) && (Un = null),
    Gn !== null && fs(Gn) && (Gn = null),
    Qn !== null && fs(Qn) && (Qn = null),
    Ro.forEach(oh),
    Io.forEach(oh)
}
function Zi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Lc ||
      ((Lc = !0), ft.unstable_scheduleCallback(ft.unstable_NormalPriority, A_)))
}
function Fo(e) {
  function t(i) {
    return Zi(i, e)
  }
  if (0 < Ra.length) {
    Zi(Ra[0], e)
    for (var n = 1; n < Ra.length; n++) {
      var r = Ra[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    Un !== null && Zi(Un, e),
      Gn !== null && Zi(Gn, e),
      Qn !== null && Zi(Qn, e),
      Ro.forEach(t),
      Io.forEach(t),
      n = 0;
    n < Fn.length;
    n++
  )
    (r = Fn[n]), r.blockedOn === e && (r.blockedOn = null)
  for (; 0 < Fn.length && ((n = Fn[0]), n.blockedOn === null); )
    Pg(n), n.blockedOn === null && Fn.shift()
}
var yi = Pn.ReactCurrentBatchConfig,
  Fs = !0
function R_(e, t, n, r) {
  var i = ie,
    o = yi.transition
  yi.transition = null
  try {
    ;(ie = 1), Mf(e, t, n, r)
  } finally {
    ;(ie = i), (yi.transition = o)
  }
}
function I_(e, t, n, r) {
  var i = ie,
    o = yi.transition
  yi.transition = null
  try {
    ;(ie = 4), Mf(e, t, n, r)
  } finally {
    ;(ie = i), (yi.transition = o)
  }
}
function Mf(e, t, n, r) {
  if (Fs) {
    var i = Oc(e, t, n, r)
    if (i === null) bu(e, t, r, zs, n), ih(e, r)
    else if (O_(i, e, t, n, r)) r.stopPropagation()
    else if ((ih(e, r), t & 4 && -1 < L_.indexOf(e))) {
      for (; i !== null; ) {
        var o = pa(i)
        if (
          (o !== null && Eg(o),
          (o = Oc(e, t, n, r)),
          o === null && bu(e, t, r, zs, n),
          o === i)
        )
          break
        i = o
      }
      i !== null && r.stopPropagation()
    } else bu(e, t, r, null, n)
  }
}
var zs = null
function Oc(e, t, n, r) {
  if (((zs = null), (e = jf(r)), (e = fr(e)), e !== null))
    if (((t = Rr(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = gg(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (zs = e), null
}
function Mg(e) {
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
      switch (S_()) {
        case Tf:
          return 1
        case wg:
          return 4
        case Rs:
        case C_:
          return 16
        case bg:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var Dn = null,
  Nf = null,
  ps = null
function Ng() {
  if (ps) return ps
  var e,
    t = Nf,
    n = t.length,
    r,
    i = 'value' in Dn ? Dn.value : Dn.textContent,
    o = i.length
  for (e = 0; e < n && t[e] === i[e]; e++);
  var a = n - e
  for (r = 1; r <= a && t[n - r] === i[o - r]; r++);
  return (ps = i.slice(e, 1 < r ? 1 - r : void 0))
}
function hs(e) {
  var t = e.keyCode
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function Ia() {
  return !0
}
function ah() {
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
        ? Ia
        : ah),
      (this.isPropagationStopped = ah),
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
          (this.isDefaultPrevented = Ia))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ia))
      },
      persist: function () {},
      isPersistent: Ia
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
  Lf = mt($i),
  fa = me({}, $i, { view: 0, detail: 0 }),
  F_ = mt(fa),
  pu,
  hu,
  Ji,
  wl = me({}, fa, {
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
        : (e !== Ji &&
            (Ji && e.type === 'mousemove'
              ? ((pu = e.screenX - Ji.screenX), (hu = e.screenY - Ji.screenY))
              : (hu = pu = 0),
            (Ji = e)),
          pu)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : hu
    }
  }),
  sh = mt(wl),
  z_ = me({}, wl, { dataTransfer: 0 }),
  $_ = mt(z_),
  D_ = me({}, fa, { relatedTarget: 0 }),
  mu = mt(D_),
  V_ = me({}, $i, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  B_ = mt(V_),
  H_ = me({}, $i, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    }
  }),
  q_ = mt(H_),
  W_ = me({}, $i, { data: 0 }),
  lh = mt(W_),
  U_ = {
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
  G_ = {
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
  Q_ = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function K_(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = Q_[e]) ? !!t[e] : !1
}
function Of() {
  return K_
}
var X_ = me({}, fa, {
    key: function (e) {
      if (e.key) {
        var t = U_[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = hs(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? G_[e.keyCode] || 'Unidentified'
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
      return e.type === 'keypress' ? hs(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? hs(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0
    }
  }),
  Y_ = mt(X_),
  Z_ = me({}, wl, {
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
  uh = mt(Z_),
  J_ = me({}, fa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Of
  }),
  ex = mt(J_),
  tx = me({}, $i, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  nx = mt(tx),
  rx = me({}, wl, {
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
  ix = mt(rx),
  ox = [9, 13, 27, 32],
  Af = wn && 'CompositionEvent' in window,
  vo = null
wn && 'documentMode' in document && (vo = document.documentMode)
var ax = wn && 'TextEvent' in window && !vo,
  Lg = wn && (!Af || (vo && 8 < vo && 11 >= vo)),
  ch = ' ',
  dh = !1
function Og(e, t) {
  switch (e) {
    case 'keyup':
      return ox.indexOf(t.keyCode) !== -1
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
function Ag(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var ni = !1
function sx(e, t) {
  switch (e) {
    case 'compositionend':
      return Ag(t)
    case 'keypress':
      return t.which !== 32 ? null : ((dh = !0), ch)
    case 'textInput':
      return (e = t.data), e === ch && dh ? null : e
    default:
      return null
  }
}
function lx(e, t) {
  if (ni)
    return e === 'compositionend' || (!Af && Og(e, t))
      ? ((e = Ng()), (ps = Nf = Dn = null), (ni = !1), e)
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
      return Lg && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var ux = {
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
function fh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!ux[e.type] : t === 'textarea'
}
function Rg(e, t, n, r) {
  fg(r),
    (t = $s(t, 'onChange')),
    0 < t.length &&
      ((n = new Lf('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }))
}
var go = null,
  zo = null
function cx(e) {
  Ug(e, 0)
}
function bl(e) {
  var t = oi(e)
  if (og(t)) return e
}
function dx(e, t) {
  if (e === 'change') return t
}
var Ig = !1
if (wn) {
  var vu
  if (wn) {
    var gu = 'oninput' in document
    if (!gu) {
      var ph = document.createElement('div')
      ph.setAttribute('oninput', 'return;'),
        (gu = typeof ph.oninput == 'function')
    }
    vu = gu
  } else vu = !1
  Ig = vu && (!document.documentMode || 9 < document.documentMode)
}
function hh() {
  go && (go.detachEvent('onpropertychange', Fg), (zo = go = null))
}
function Fg(e) {
  if (e.propertyName === 'value' && bl(zo)) {
    var t = []
    Rg(t, zo, e, jf(e)), vg(cx, t)
  }
}
function fx(e, t, n) {
  e === 'focusin'
    ? (hh(), (go = t), (zo = n), go.attachEvent('onpropertychange', Fg))
    : e === 'focusout' && hh()
}
function px(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return bl(zo)
}
function hx(e, t) {
  if (e === 'click') return bl(t)
}
function mx(e, t) {
  if (e === 'input' || e === 'change') return bl(t)
}
function vx(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var Wt = typeof Object.is == 'function' ? Object.is : vx
function $o(e, t) {
  if (Wt(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var i = n[r]
    if (!mc.call(t, i) || !Wt(e[i], t[i])) return !1
  }
  return !0
}
function mh(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function vh(e, t) {
  var n = mh(e)
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
    n = mh(n)
  }
}
function zg(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? zg(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1
}
function $g() {
  for (var e = window, t = Ls(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = Ls(e.document)
  }
  return t
}
function Rf(e) {
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
function gx(e) {
  var t = $g(),
    n = e.focusedElem,
    r = e.selectionRange
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    zg(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Rf(n)) {
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
          (i = vh(n, o))
        var a = vh(n, r)
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
var yx = wn && 'documentMode' in document && 11 >= document.documentMode,
  ri = null,
  Ac = null,
  yo = null,
  Rc = !1
function gh(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  Rc ||
    ri == null ||
    ri !== Ls(r) ||
    ((r = ri),
    'selectionStart' in r && Rf(r)
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
    (yo && $o(yo, r)) ||
      ((yo = r),
      (r = $s(Ac, 'onSelect')),
      0 < r.length &&
        ((t = new Lf('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = ri))))
}
function Fa(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var ii = {
    animationend: Fa('Animation', 'AnimationEnd'),
    animationiteration: Fa('Animation', 'AnimationIteration'),
    animationstart: Fa('Animation', 'AnimationStart'),
    transitionend: Fa('Transition', 'TransitionEnd')
  },
  yu = {},
  Dg = {}
wn &&
  ((Dg = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete ii.animationend.animation,
    delete ii.animationiteration.animation,
    delete ii.animationstart.animation),
  'TransitionEvent' in window || delete ii.transitionend.transition)
function Sl(e) {
  if (yu[e]) return yu[e]
  if (!ii[e]) return e
  var t = ii[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in Dg) return (yu[e] = t[n])
  return e
}
var Vg = Sl('animationend'),
  Bg = Sl('animationiteration'),
  Hg = Sl('animationstart'),
  qg = Sl('transitionend'),
  Wg = new Map(),
  yh =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function ir(e, t) {
  Wg.set(e, t), Ar(t, [e])
}
for (var _u = 0; _u < yh.length; _u++) {
  var xu = yh[_u],
    _x = xu.toLowerCase(),
    xx = xu[0].toUpperCase() + xu.slice(1)
  ir(_x, 'on' + xx)
}
ir(Vg, 'onAnimationEnd')
ir(Bg, 'onAnimationIteration')
ir(Hg, 'onAnimationStart')
ir('dblclick', 'onDoubleClick')
ir('focusin', 'onFocus')
ir('focusout', 'onBlur')
ir(qg, 'onTransitionEnd')
Ei('onMouseEnter', ['mouseout', 'mouseover'])
Ei('onMouseLeave', ['mouseout', 'mouseover'])
Ei('onPointerEnter', ['pointerout', 'pointerover'])
Ei('onPointerLeave', ['pointerout', 'pointerover'])
Ar(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
)
Ar(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
)
Ar('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
Ar(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
)
Ar(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
)
Ar(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
)
var co =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  wx = new Set('cancel close invalid load scroll toggle'.split(' ').concat(co))
function _h(e, t, n) {
  var r = e.type || 'unknown-event'
  ;(e.currentTarget = n), __(r, t, void 0, e), (e.currentTarget = null)
}
function Ug(e, t) {
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
          _h(i, s, u), (o = l)
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
          _h(i, s, u), (o = l)
        }
    }
  }
  if (As) throw ((e = Mc), (As = !1), (Mc = null), e)
}
function ue(e, t) {
  var n = t[Dc]
  n === void 0 && (n = t[Dc] = new Set())
  var r = e + '__bubble'
  n.has(r) || (Gg(t, e, 2, !1), n.add(r))
}
function wu(e, t, n) {
  var r = 0
  t && (r |= 4), Gg(n, e, r, t)
}
var za = '_reactListening' + Math.random().toString(36).slice(2)
function Do(e) {
  if (!e[za]) {
    ;(e[za] = !0),
      eg.forEach(function (n) {
        n !== 'selectionchange' && (wx.has(n) || wu(n, !1, e), wu(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[za] || ((t[za] = !0), wu('selectionchange', !1, t))
  }
}
function Gg(e, t, n, r) {
  switch (Mg(t)) {
    case 1:
      var i = R_
      break
    case 4:
      i = I_
      break
    default:
      i = Mf
  }
  ;(n = i.bind(null, t, n, e)),
    (i = void 0),
    !Pc ||
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
function bu(e, t, n, r, i) {
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
          if (((a = fr(s)), a === null)) return
          if (((l = a.tag), l === 5 || l === 6)) {
            r = o = a
            continue e
          }
          s = s.parentNode
        }
      }
      r = r.return
    }
  vg(function () {
    var u = o,
      c = jf(n),
      f = []
    e: {
      var d = Wg.get(e)
      if (d !== void 0) {
        var g = Lf,
          y = e
        switch (e) {
          case 'keypress':
            if (hs(n) === 0) break e
          case 'keydown':
          case 'keyup':
            g = Y_
            break
          case 'focusin':
            ;(y = 'focus'), (g = mu)
            break
          case 'focusout':
            ;(y = 'blur'), (g = mu)
            break
          case 'beforeblur':
          case 'afterblur':
            g = mu
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
            g = sh
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
            g = ex
            break
          case Vg:
          case Bg:
          case Hg:
            g = B_
            break
          case qg:
            g = nx
            break
          case 'scroll':
            g = F_
            break
          case 'wheel':
            g = ix
            break
          case 'copy':
          case 'cut':
          case 'paste':
            g = q_
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = uh
        }
        var _ = (t & 4) !== 0,
          x = !_ && e === 'scroll',
          m = _ ? (d !== null ? d + 'Capture' : null) : d
        _ = []
        for (var p = u, v; p !== null; ) {
          v = p
          var w = v.stateNode
          if (
            (v.tag === 5 &&
              w !== null &&
              ((v = w),
              m !== null && ((w = Ao(p, m)), w != null && _.push(Vo(p, w, v)))),
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
            n !== Tc &&
            (y = n.relatedTarget || n.fromElement) &&
            (fr(y) || y[bn]))
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
              (y = y ? fr(y) : null),
              y !== null &&
                ((x = Rr(y)), y !== x || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = u)),
          g !== y)
        ) {
          if (
            ((_ = sh),
            (w = 'onMouseLeave'),
            (m = 'onMouseEnter'),
            (p = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((_ = uh),
              (w = 'onPointerLeave'),
              (m = 'onPointerEnter'),
              (p = 'pointer')),
            (x = g == null ? d : oi(g)),
            (v = y == null ? d : oi(y)),
            (d = new _(w, p + 'leave', g, n, c)),
            (d.target = x),
            (d.relatedTarget = v),
            (w = null),
            fr(c) === u &&
              ((_ = new _(m, p + 'enter', y, n, c)),
              (_.target = v),
              (_.relatedTarget = x),
              (w = _)),
            (x = w),
            g && y)
          )
            t: {
              for (_ = g, m = y, p = 0, v = _; v; v = Ur(v)) p++
              for (v = 0, w = m; w; w = Ur(w)) v++
              for (; 0 < p - v; ) (_ = Ur(_)), p--
              for (; 0 < v - p; ) (m = Ur(m)), v--
              for (; p--; ) {
                if (_ === m || (m !== null && _ === m.alternate)) break t
                ;(_ = Ur(_)), (m = Ur(m))
              }
              _ = null
            }
          else _ = null
          g !== null && xh(f, d, g, _, !1),
            y !== null && x !== null && xh(f, x, y, _, !0)
        }
      }
      e: {
        if (
          ((d = u ? oi(u) : window),
          (g = d.nodeName && d.nodeName.toLowerCase()),
          g === 'select' || (g === 'input' && d.type === 'file'))
        )
          var b = dx
        else if (fh(d))
          if (Ig) b = mx
          else {
            b = px
            var C = fx
          }
        else
          (g = d.nodeName) &&
            g.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (b = hx)
        if (b && (b = b(e, u))) {
          Rg(f, b, n, c)
          break e
        }
        C && C(e, d, u),
          e === 'focusout' &&
            (C = d._wrapperState) &&
            C.controlled &&
            d.type === 'number' &&
            bc(d, 'number', d.value)
      }
      switch (((C = u ? oi(u) : window), e)) {
        case 'focusin':
          ;(fh(C) || C.contentEditable === 'true') &&
            ((ri = C), (Ac = u), (yo = null))
          break
        case 'focusout':
          yo = Ac = ri = null
          break
        case 'mousedown':
          Rc = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(Rc = !1), gh(f, n, c)
          break
        case 'selectionchange':
          if (yx) break
        case 'keydown':
        case 'keyup':
          gh(f, n, c)
      }
      var S
      if (Af)
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
        ni
          ? Og(e, n) && (E = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (E = 'onCompositionStart')
      E &&
        (Lg &&
          n.locale !== 'ko' &&
          (ni || E !== 'onCompositionStart'
            ? E === 'onCompositionEnd' && ni && (S = Ng())
            : ((Dn = c),
              (Nf = 'value' in Dn ? Dn.value : Dn.textContent),
              (ni = !0))),
        (C = $s(u, E)),
        0 < C.length &&
          ((E = new lh(E, e, null, n, c)),
          f.push({ event: E, listeners: C }),
          S ? (E.data = S) : ((S = Ag(n)), S !== null && (E.data = S)))),
        (S = ax ? sx(e, n) : lx(e, n)) &&
          ((u = $s(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new lh('onBeforeInput', 'beforeinput', null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = S)))
    }
    Ug(f, t)
  })
}
function Vo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function $s(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      o = i.stateNode
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Ao(e, n)),
      o != null && r.unshift(Vo(e, o, i)),
      (o = Ao(e, t)),
      o != null && r.push(Vo(e, o, i))),
      (e = e.return)
  }
  return r
}
function Ur(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function xh(e, t, n, r, i) {
  for (var o = t._reactName, a = []; n !== null && n !== r; ) {
    var s = n,
      l = s.alternate,
      u = s.stateNode
    if (l !== null && l === r) break
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      i
        ? ((l = Ao(n, o)), l != null && a.unshift(Vo(n, l, s)))
        : i || ((l = Ao(n, o)), l != null && a.push(Vo(n, l, s)))),
      (n = n.return)
  }
  a.length !== 0 && e.push({ event: t, listeners: a })
}
var bx = /\r\n?/g,
  Sx = /\u0000|\uFFFD/g
function wh(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      bx,
      `
`
    )
    .replace(Sx, '')
}
function $a(e, t, n) {
  if (((t = wh(t)), wh(e) !== t && n)) throw Error(H(425))
}
function Ds() {}
var Ic = null,
  Fc = null
function zc(e, t) {
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
var $c = typeof setTimeout == 'function' ? setTimeout : void 0,
  Cx = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  bh = typeof Promise == 'function' ? Promise : void 0,
  Ex =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof bh < 'u'
      ? function (e) {
          return bh.resolve(null).then(e).catch(jx)
        }
      : $c
function jx(e) {
  setTimeout(function () {
    throw e
  })
}
function Su(e, t) {
  var n = t,
    r = 0
  do {
    var i = n.nextSibling
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(i), Fo(t)
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = i
  } while (n)
  Fo(t)
}
function Kn(e) {
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
function Sh(e) {
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
  Bo = '__reactProps$' + Di,
  bn = '__reactContainer$' + Di,
  Dc = '__reactEvents$' + Di,
  Tx = '__reactListeners$' + Di,
  kx = '__reactHandles$' + Di
function fr(e) {
  var t = e[Jt]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[bn] || n[Jt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Sh(e); e !== null; ) {
          if ((n = e[Jt])) return n
          e = Sh(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function pa(e) {
  return (
    (e = e[Jt] || e[bn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function oi(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(H(33))
}
function Cl(e) {
  return e[Bo] || null
}
var Vc = [],
  ai = -1
function or(e) {
  return { current: e }
}
function ce(e) {
  0 > ai || ((e.current = Vc[ai]), (Vc[ai] = null), ai--)
}
function le(e, t) {
  ai++, (Vc[ai] = e.current), (e.current = t)
}
var tr = {},
  Ve = or(tr),
  Ye = or(!1),
  br = tr
function ji(e, t) {
  var n = e.type.contextTypes
  if (!n) return tr
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
function Vs() {
  ce(Ye), ce(Ve)
}
function Ch(e, t, n) {
  if (Ve.current !== tr) throw Error(H(168))
  le(Ve, t), le(Ye, n)
}
function Qg(e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n
  r = r.getChildContext()
  for (var i in r) if (!(i in t)) throw Error(H(108, f_(e) || 'Unknown', i))
  return me({}, n, r)
}
function Bs(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || tr),
    (br = Ve.current),
    le(Ve, e),
    le(Ye, Ye.current),
    !0
  )
}
function Eh(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(H(169))
  n
    ? ((e = Qg(e, t, br)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ce(Ye),
      ce(Ve),
      le(Ve, e))
    : ce(Ye),
    le(Ye, n)
}
var mn = null,
  El = !1,
  Cu = !1
function Kg(e) {
  mn === null ? (mn = [e]) : mn.push(e)
}
function Px(e) {
  ;(El = !0), Kg(e)
}
function ar() {
  if (!Cu && mn !== null) {
    Cu = !0
    var e = 0,
      t = ie
    try {
      var n = mn
      for (ie = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(mn = null), (El = !1)
    } catch (i) {
      throw (mn !== null && (mn = mn.slice(e + 1)), xg(Tf, ar), i)
    } finally {
      ;(ie = t), (Cu = !1)
    }
  }
  return null
}
var si = [],
  li = 0,
  Hs = null,
  qs = 0,
  wt = [],
  bt = 0,
  Sr = null,
  gn = 1,
  yn = ''
function lr(e, t) {
  ;(si[li++] = qs), (si[li++] = Hs), (Hs = e), (qs = t)
}
function Xg(e, t, n) {
  ;(wt[bt++] = gn), (wt[bt++] = yn), (wt[bt++] = Sr), (Sr = e)
  var r = gn
  e = yn
  var i = 32 - Dt(r) - 1
  ;(r &= ~(1 << i)), (n += 1)
  var o = 32 - Dt(t) + i
  if (30 < o) {
    var a = i - (i % 5)
    ;(o = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (i -= a),
      (gn = (1 << (32 - Dt(t) + i)) | (n << i) | r),
      (yn = o + e)
  } else (gn = (1 << o) | (n << i) | r), (yn = e)
}
function If(e) {
  e.return !== null && (lr(e, 1), Xg(e, 1, 0))
}
function Ff(e) {
  for (; e === Hs; )
    (Hs = si[--li]), (si[li] = null), (qs = si[--li]), (si[li] = null)
  for (; e === Sr; )
    (Sr = wt[--bt]),
      (wt[bt] = null),
      (yn = wt[--bt]),
      (wt[bt] = null),
      (gn = wt[--bt]),
      (wt[bt] = null)
}
var dt = null,
  lt = null,
  fe = !1,
  zt = null
function Yg(e, t) {
  var n = St(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function jh(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (dt = e), (lt = Kn(t.firstChild)), !0)
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
          ? ((n = Sr !== null ? { id: gn, overflow: yn } : null),
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
function Bc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Hc(e) {
  if (fe) {
    var t = lt
    if (t) {
      var n = t
      if (!jh(e, t)) {
        if (Bc(e)) throw Error(H(418))
        t = Kn(n.nextSibling)
        var r = dt
        t && jh(e, t)
          ? Yg(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (fe = !1), (dt = e))
      }
    } else {
      if (Bc(e)) throw Error(H(418))
      ;(e.flags = (e.flags & -4097) | 2), (fe = !1), (dt = e)
    }
  }
}
function Th(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  dt = e
}
function Da(e) {
  if (e !== dt) return !1
  if (!fe) return Th(e), (fe = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !zc(e.type, e.memoizedProps))),
    t && (t = lt))
  ) {
    if (Bc(e)) throw (Zg(), Error(H(418)))
    for (; t; ) Yg(e, t), (t = Kn(t.nextSibling))
  }
  if ((Th(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(H(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              lt = Kn(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      lt = null
    }
  } else lt = dt ? Kn(e.stateNode.nextSibling) : null
  return !0
}
function Zg() {
  for (var e = lt; e; ) e = Kn(e.nextSibling)
}
function Ti() {
  ;(lt = dt = null), (fe = !1)
}
function zf(e) {
  zt === null ? (zt = [e]) : zt.push(e)
}
var Mx = Pn.ReactCurrentBatchConfig
function eo(e, t, n) {
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
function Va(e, t) {
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
function kh(e) {
  var t = e._init
  return t(e._payload)
}
function Jg(e) {
  function t(m, p) {
    if (e) {
      var v = m.deletions
      v === null ? ((m.deletions = [p]), (m.flags |= 16)) : v.push(p)
    }
  }
  function n(m, p) {
    if (!e) return null
    for (; p !== null; ) t(m, p), (p = p.sibling)
    return null
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling)
    return m
  }
  function i(m, p) {
    return (m = Jn(m, p)), (m.index = 0), (m.sibling = null), m
  }
  function o(m, p, v) {
    return (
      (m.index = v),
      e
        ? ((v = m.alternate),
          v !== null
            ? ((v = v.index), v < p ? ((m.flags |= 2), p) : v)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    )
  }
  function a(m) {
    return e && m.alternate === null && (m.flags |= 2), m
  }
  function s(m, p, v, w) {
    return p === null || p.tag !== 6
      ? ((p = Nu(v, m.mode, w)), (p.return = m), p)
      : ((p = i(p, v)), (p.return = m), p)
  }
  function l(m, p, v, w) {
    var b = v.type
    return b === ti
      ? c(m, p, v.props.children, w, v.key)
      : p !== null &&
        (p.elementType === b ||
          (typeof b == 'object' &&
            b !== null &&
            b.$$typeof === An &&
            kh(b) === p.type))
      ? ((w = i(p, v.props)), (w.ref = eo(m, p, v)), (w.return = m), w)
      : ((w = ws(v.type, v.key, v.props, null, m.mode, w)),
        (w.ref = eo(m, p, v)),
        (w.return = m),
        w)
  }
  function u(m, p, v, w) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== v.containerInfo ||
      p.stateNode.implementation !== v.implementation
      ? ((p = Lu(v, m.mode, w)), (p.return = m), p)
      : ((p = i(p, v.children || [])), (p.return = m), p)
  }
  function c(m, p, v, w, b) {
    return p === null || p.tag !== 7
      ? ((p = xr(v, m.mode, w, b)), (p.return = m), p)
      : ((p = i(p, v)), (p.return = m), p)
  }
  function f(m, p, v) {
    if ((typeof p == 'string' && p !== '') || typeof p == 'number')
      return (p = Nu('' + p, m.mode, v)), (p.return = m), p
    if (typeof p == 'object' && p !== null) {
      switch (p.$$typeof) {
        case Ma:
          return (
            (v = ws(p.type, p.key, p.props, null, m.mode, v)),
            (v.ref = eo(m, null, p)),
            (v.return = m),
            v
          )
        case ei:
          return (p = Lu(p, m.mode, v)), (p.return = m), p
        case An:
          var w = p._init
          return f(m, w(p._payload), v)
      }
      if (lo(p) || Ki(p)) return (p = xr(p, m.mode, v, null)), (p.return = m), p
      Va(m, p)
    }
    return null
  }
  function d(m, p, v, w) {
    var b = p !== null ? p.key : null
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return b !== null ? null : s(m, p, '' + v, w)
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case Ma:
          return v.key === b ? l(m, p, v, w) : null
        case ei:
          return v.key === b ? u(m, p, v, w) : null
        case An:
          return (b = v._init), d(m, p, b(v._payload), w)
      }
      if (lo(v) || Ki(v)) return b !== null ? null : c(m, p, v, w, null)
      Va(m, v)
    }
    return null
  }
  function g(m, p, v, w, b) {
    if ((typeof w == 'string' && w !== '') || typeof w == 'number')
      return (m = m.get(v) || null), s(p, m, '' + w, b)
    if (typeof w == 'object' && w !== null) {
      switch (w.$$typeof) {
        case Ma:
          return (m = m.get(w.key === null ? v : w.key) || null), l(p, m, w, b)
        case ei:
          return (m = m.get(w.key === null ? v : w.key) || null), u(p, m, w, b)
        case An:
          var C = w._init
          return g(m, p, v, C(w._payload), b)
      }
      if (lo(w) || Ki(w)) return (m = m.get(v) || null), c(p, m, w, b, null)
      Va(p, w)
    }
    return null
  }
  function y(m, p, v, w) {
    for (
      var b = null, C = null, S = p, E = (p = 0), j = null;
      S !== null && E < v.length;
      E++
    ) {
      S.index > E ? ((j = S), (S = null)) : (j = S.sibling)
      var T = d(m, S, v[E], w)
      if (T === null) {
        S === null && (S = j)
        break
      }
      e && S && T.alternate === null && t(m, S),
        (p = o(T, p, E)),
        C === null ? (b = T) : (C.sibling = T),
        (C = T),
        (S = j)
    }
    if (E === v.length) return n(m, S), fe && lr(m, E), b
    if (S === null) {
      for (; E < v.length; E++)
        (S = f(m, v[E], w)),
          S !== null &&
            ((p = o(S, p, E)), C === null ? (b = S) : (C.sibling = S), (C = S))
      return fe && lr(m, E), b
    }
    for (S = r(m, S); E < v.length; E++)
      (j = g(S, m, E, v[E], w)),
        j !== null &&
          (e && j.alternate !== null && S.delete(j.key === null ? E : j.key),
          (p = o(j, p, E)),
          C === null ? (b = j) : (C.sibling = j),
          (C = j))
    return (
      e &&
        S.forEach(function (M) {
          return t(m, M)
        }),
      fe && lr(m, E),
      b
    )
  }
  function _(m, p, v, w) {
    var b = Ki(v)
    if (typeof b != 'function') throw Error(H(150))
    if (((v = b.call(v)), v == null)) throw Error(H(151))
    for (
      var C = (b = null), S = p, E = (p = 0), j = null, T = v.next();
      S !== null && !T.done;
      E++, T = v.next()
    ) {
      S.index > E ? ((j = S), (S = null)) : (j = S.sibling)
      var M = d(m, S, T.value, w)
      if (M === null) {
        S === null && (S = j)
        break
      }
      e && S && M.alternate === null && t(m, S),
        (p = o(M, p, E)),
        C === null ? (b = M) : (C.sibling = M),
        (C = M),
        (S = j)
    }
    if (T.done) return n(m, S), fe && lr(m, E), b
    if (S === null) {
      for (; !T.done; E++, T = v.next())
        (T = f(m, T.value, w)),
          T !== null &&
            ((p = o(T, p, E)), C === null ? (b = T) : (C.sibling = T), (C = T))
      return fe && lr(m, E), b
    }
    for (S = r(m, S); !T.done; E++, T = v.next())
      (T = g(S, m, E, T.value, w)),
        T !== null &&
          (e && T.alternate !== null && S.delete(T.key === null ? E : T.key),
          (p = o(T, p, E)),
          C === null ? (b = T) : (C.sibling = T),
          (C = T))
    return (
      e &&
        S.forEach(function (O) {
          return t(m, O)
        }),
      fe && lr(m, E),
      b
    )
  }
  function x(m, p, v, w) {
    if (
      (typeof v == 'object' &&
        v !== null &&
        v.type === ti &&
        v.key === null &&
        (v = v.props.children),
      typeof v == 'object' && v !== null)
    ) {
      switch (v.$$typeof) {
        case Ma:
          e: {
            for (var b = v.key, C = p; C !== null; ) {
              if (C.key === b) {
                if (((b = v.type), b === ti)) {
                  if (C.tag === 7) {
                    n(m, C.sibling),
                      (p = i(C, v.props.children)),
                      (p.return = m),
                      (m = p)
                    break e
                  }
                } else if (
                  C.elementType === b ||
                  (typeof b == 'object' &&
                    b !== null &&
                    b.$$typeof === An &&
                    kh(b) === C.type)
                ) {
                  n(m, C.sibling),
                    (p = i(C, v.props)),
                    (p.ref = eo(m, C, v)),
                    (p.return = m),
                    (m = p)
                  break e
                }
                n(m, C)
                break
              } else t(m, C)
              C = C.sibling
            }
            v.type === ti
              ? ((p = xr(v.props.children, m.mode, w, v.key)),
                (p.return = m),
                (m = p))
              : ((w = ws(v.type, v.key, v.props, null, m.mode, w)),
                (w.ref = eo(m, p, v)),
                (w.return = m),
                (m = w))
          }
          return a(m)
        case ei:
          e: {
            for (C = v.key; p !== null; ) {
              if (p.key === C)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === v.containerInfo &&
                  p.stateNode.implementation === v.implementation
                ) {
                  n(m, p.sibling),
                    (p = i(p, v.children || [])),
                    (p.return = m),
                    (m = p)
                  break e
                } else {
                  n(m, p)
                  break
                }
              else t(m, p)
              p = p.sibling
            }
            ;(p = Lu(v, m.mode, w)), (p.return = m), (m = p)
          }
          return a(m)
        case An:
          return (C = v._init), x(m, p, C(v._payload), w)
      }
      if (lo(v)) return y(m, p, v, w)
      if (Ki(v)) return _(m, p, v, w)
      Va(m, v)
    }
    return (typeof v == 'string' && v !== '') || typeof v == 'number'
      ? ((v = '' + v),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = i(p, v)), (p.return = m), (m = p))
          : (n(m, p), (p = Nu(v, m.mode, w)), (p.return = m), (m = p)),
        a(m))
      : n(m, p)
  }
  return x
}
var ki = Jg(!0),
  e0 = Jg(!1),
  Ws = or(null),
  Us = null,
  ui = null,
  $f = null
function Df() {
  $f = ui = Us = null
}
function Vf(e) {
  var t = Ws.current
  ce(Ws), (e._currentValue = t)
}
function qc(e, t, n) {
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
function _i(e, t) {
  ;(Us = e),
    ($f = ui = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Xe = !0), (e.firstContext = null))
}
function kt(e) {
  var t = e._currentValue
  if ($f !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ui === null)) {
      if (Us === null) throw Error(H(308))
      ;(ui = e), (Us.dependencies = { lanes: 0, firstContext: e })
    } else ui = ui.next = e
  return t
}
var pr = null
function Bf(e) {
  pr === null ? (pr = [e]) : pr.push(e)
}
function t0(e, t, n, r) {
  var i = t.interleaved
  return (
    i === null ? ((n.next = n), Bf(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Sn(e, r)
  )
}
function Sn(e, t) {
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
var Rn = !1
function Hf(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null
  }
}
function n0(e, t) {
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
function _n(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null
  }
}
function Xn(e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), ne & 2)) {
    var i = r.pending
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Sn(e, n)
    )
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Bf(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Sn(e, n)
  )
}
function ms(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), kf(e, n)
  }
}
function Ph(e, t) {
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
function Gs(e, t, n, r) {
  var i = e.updateQueue
  Rn = !1
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
              Rn = !0
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
    ;(Er |= a), (e.lanes = a), (e.memoizedState = f)
  }
}
function Mh(e, t, n) {
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
var ha = {},
  rn = or(ha),
  Ho = or(ha),
  qo = or(ha)
function hr(e) {
  if (e === ha) throw Error(H(174))
  return e
}
function qf(e, t) {
  switch ((le(qo, t), le(Ho, e), le(rn, ha), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Cc(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Cc(t, e))
  }
  ce(rn), le(rn, t)
}
function Pi() {
  ce(rn), ce(Ho), ce(qo)
}
function r0(e) {
  hr(qo.current)
  var t = hr(rn.current),
    n = Cc(t, e.type)
  t !== n && (le(Ho, e), le(rn, n))
}
function Wf(e) {
  Ho.current === e && (ce(rn), ce(Ho))
}
var pe = or(0)
function Qs(e) {
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
var Eu = []
function Uf() {
  for (var e = 0; e < Eu.length; e++) Eu[e]._workInProgressVersionPrimary = null
  Eu.length = 0
}
var vs = Pn.ReactCurrentDispatcher,
  ju = Pn.ReactCurrentBatchConfig,
  Cr = 0,
  he = null,
  be = null,
  je = null,
  Ks = !1,
  _o = !1,
  Wo = 0,
  Nx = 0
function Fe() {
  throw Error(H(321))
}
function Gf(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Wt(e[n], t[n])) return !1
  return !0
}
function Qf(e, t, n, r, i, o) {
  if (
    ((Cr = o),
    (he = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (vs.current = e === null || e.memoizedState === null ? Rx : Ix),
    (e = n(r, i)),
    _o)
  ) {
    o = 0
    do {
      if (((_o = !1), (Wo = 0), 25 <= o)) throw Error(H(301))
      ;(o += 1),
        (je = be = null),
        (t.updateQueue = null),
        (vs.current = Fx),
        (e = n(r, i))
    } while (_o)
  }
  if (
    ((vs.current = Xs),
    (t = be !== null && be.next !== null),
    (Cr = 0),
    (je = be = he = null),
    (Ks = !1),
    t)
  )
    throw Error(H(300))
  return e
}
function Kf() {
  var e = Wo !== 0
  return (Wo = 0), e
}
function Yt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  }
  return je === null ? (he.memoizedState = je = e) : (je = je.next = e), je
}
function Pt() {
  if (be === null) {
    var e = he.alternate
    e = e !== null ? e.memoizedState : null
  } else e = be.next
  var t = je === null ? he.memoizedState : je.next
  if (t !== null) (je = t), (be = e)
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
      je === null ? (he.memoizedState = je = e) : (je = je.next = e)
  }
  return je
}
function Uo(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function Tu(e) {
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
      if ((Cr & c) === c)
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
          (Er |= c)
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
    do (o = i.lane), (he.lanes |= o), (Er |= o), (i = i.next)
    while (i !== e)
  } else i === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function ku(e) {
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
function i0() {}
function o0(e, t) {
  var n = he,
    r = Pt(),
    i = t(),
    o = !Wt(r.memoizedState, i)
  if (
    (o && ((r.memoizedState = i), (Xe = !0)),
    (r = r.queue),
    Xf(l0.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (je !== null && je.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Go(9, s0.bind(null, n, r, i, t), void 0, null),
      Te === null)
    )
      throw Error(H(349))
    Cr & 30 || a0(n, t, i)
  }
  return i
}
function a0(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = he.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (he.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function s0(e, t, n, r) {
  ;(t.value = n), (t.getSnapshot = r), u0(t) && c0(e)
}
function l0(e, t, n) {
  return n(function () {
    u0(t) && c0(e)
  })
}
function u0(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !Wt(e, n)
  } catch {
    return !0
  }
}
function c0(e) {
  var t = Sn(e, 1)
  t !== null && Vt(t, e, 1, -1)
}
function Nh(e) {
  var t = Yt()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Uo,
      lastRenderedState: e
    }),
    (t.queue = e),
    (e = e.dispatch = Ax.bind(null, he, e)),
    [t.memoizedState, e]
  )
}
function Go(e, t, n, r) {
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
function d0() {
  return Pt().memoizedState
}
function gs(e, t, n, r) {
  var i = Yt()
  ;(he.flags |= e),
    (i.memoizedState = Go(1 | t, n, void 0, r === void 0 ? null : r))
}
function jl(e, t, n, r) {
  var i = Pt()
  r = r === void 0 ? null : r
  var o = void 0
  if (be !== null) {
    var a = be.memoizedState
    if (((o = a.destroy), r !== null && Gf(r, a.deps))) {
      i.memoizedState = Go(t, n, o, r)
      return
    }
  }
  ;(he.flags |= e), (i.memoizedState = Go(1 | t, n, o, r))
}
function Lh(e, t) {
  return gs(8390656, 8, e, t)
}
function Xf(e, t) {
  return jl(2048, 8, e, t)
}
function f0(e, t) {
  return jl(4, 2, e, t)
}
function p0(e, t) {
  return jl(4, 4, e, t)
}
function h0(e, t) {
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
function m0(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), jl(4, 4, h0.bind(null, t, e), n)
  )
}
function Yf() {}
function v0(e, t) {
  var n = Pt()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Gf(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e)
}
function g0(e, t) {
  var n = Pt()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Gf(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function y0(e, t, n) {
  return Cr & 21
    ? (Wt(n, t) || ((n = Sg()), (he.lanes |= n), (Er |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Xe = !0)), (e.memoizedState = n))
}
function Lx(e, t) {
  var n = ie
  ;(ie = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = ju.transition
  ju.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(ie = n), (ju.transition = r)
  }
}
function _0() {
  return Pt().memoizedState
}
function Ox(e, t, n) {
  var r = Zn(e)
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }),
    x0(e))
  )
    w0(t, n)
  else if (((n = t0(e, t, n, r)), n !== null)) {
    var i = We()
    Vt(n, e, r, i), b0(n, t, r)
  }
}
function Ax(e, t, n) {
  var r = Zn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (x0(e)) w0(t, i)
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
            ? ((i.next = i), Bf(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i)
          return
        }
      } catch {
      } finally {
      }
    ;(n = t0(e, t, i, r)),
      n !== null && ((i = We()), Vt(n, e, r, i), b0(n, t, r))
  }
}
function x0(e) {
  var t = e.alternate
  return e === he || (t !== null && t === he)
}
function w0(e, t) {
  _o = Ks = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function b0(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), kf(e, n)
  }
}
var Xs = {
    readContext: kt,
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
  Rx = {
    readContext: kt,
    useCallback: function (e, t) {
      return (Yt().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: kt,
    useEffect: Lh,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        gs(4194308, 4, h0.bind(null, t, e), n)
      )
    },
    useLayoutEffect: function (e, t) {
      return gs(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return gs(4, 2, e, t)
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
        (e = e.dispatch = Ox.bind(null, he, e)),
        [r.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = Yt()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: Nh,
    useDebugValue: Yf,
    useDeferredValue: function (e) {
      return (Yt().memoizedState = e)
    },
    useTransition: function () {
      var e = Nh(!1),
        t = e[0]
      return (e = Lx.bind(null, e[1])), (Yt().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = he,
        i = Yt()
      if (fe) {
        if (n === void 0) throw Error(H(407))
        n = n()
      } else {
        if (((n = t()), Te === null)) throw Error(H(349))
        Cr & 30 || a0(r, t, n)
      }
      i.memoizedState = n
      var o = { value: n, getSnapshot: t }
      return (
        (i.queue = o),
        Lh(l0.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Go(9, s0.bind(null, r, o, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = Yt(),
        t = Te.identifierPrefix
      if (fe) {
        var n = yn,
          r = gn
        ;(n = (r & ~(1 << (32 - Dt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Wo++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = Nx++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1
  },
  Ix = {
    readContext: kt,
    useCallback: v0,
    useContext: kt,
    useEffect: Xf,
    useImperativeHandle: m0,
    useInsertionEffect: f0,
    useLayoutEffect: p0,
    useMemo: g0,
    useReducer: Tu,
    useRef: d0,
    useState: function () {
      return Tu(Uo)
    },
    useDebugValue: Yf,
    useDeferredValue: function (e) {
      var t = Pt()
      return y0(t, be.memoizedState, e)
    },
    useTransition: function () {
      var e = Tu(Uo)[0],
        t = Pt().memoizedState
      return [e, t]
    },
    useMutableSource: i0,
    useSyncExternalStore: o0,
    useId: _0,
    unstable_isNewReconciler: !1
  },
  Fx = {
    readContext: kt,
    useCallback: v0,
    useContext: kt,
    useEffect: Xf,
    useImperativeHandle: m0,
    useInsertionEffect: f0,
    useLayoutEffect: p0,
    useMemo: g0,
    useReducer: ku,
    useRef: d0,
    useState: function () {
      return ku(Uo)
    },
    useDebugValue: Yf,
    useDeferredValue: function (e) {
      var t = Pt()
      return be === null ? (t.memoizedState = e) : y0(t, be.memoizedState, e)
    },
    useTransition: function () {
      var e = ku(Uo)[0],
        t = Pt().memoizedState
      return [e, t]
    },
    useMutableSource: i0,
    useSyncExternalStore: o0,
    useId: _0,
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
function Wc(e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : me({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Tl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Rr(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = We(),
      i = Zn(e),
      o = _n(r, i)
    ;(o.payload = t),
      n != null && (o.callback = n),
      (t = Xn(e, o, i)),
      t !== null && (Vt(t, e, i, r), ms(t, e, i))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = We(),
      i = Zn(e),
      o = _n(r, i)
    ;(o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Xn(e, o, i)),
      t !== null && (Vt(t, e, i, r), ms(t, e, i))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = We(),
      r = Zn(e),
      i = _n(n, r)
    ;(i.tag = 2),
      t != null && (i.callback = t),
      (t = Xn(e, i, r)),
      t !== null && (Vt(t, e, r, n), ms(t, e, r))
  }
}
function Oh(e, t, n, r, i, o, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !$o(n, r) || !$o(i, o)
      : !0
  )
}
function S0(e, t, n) {
  var r = !1,
    i = tr,
    o = t.contextType
  return (
    typeof o == 'object' && o !== null
      ? (o = kt(o))
      : ((i = Ze(t) ? br : Ve.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? ji(e, i) : tr)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Tl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  )
}
function Ah(e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Tl.enqueueReplaceState(t, t.state, null)
}
function Uc(e, t, n, r) {
  var i = e.stateNode
  ;(i.props = n), (i.state = e.memoizedState), (i.refs = {}), Hf(e)
  var o = t.contextType
  typeof o == 'object' && o !== null
    ? (i.context = kt(o))
    : ((o = Ze(t) ? br : Ve.current), (i.context = ji(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (Wc(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Tl.enqueueReplaceState(i, i.state, null),
      Gs(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308)
}
function Mi(e, t) {
  try {
    var n = '',
      r = t
    do (n += d_(r)), (r = r.return)
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
function Pu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function Gc(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var zx = typeof WeakMap == 'function' ? WeakMap : Map
function C0(e, t, n) {
  ;(n = _n(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = function () {
      Zs || ((Zs = !0), (rd = r)), Gc(e, t)
    }),
    n
  )
}
function E0(e, t, n) {
  ;(n = _n(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var i = t.value
    ;(n.payload = function () {
      return r(i)
    }),
      (n.callback = function () {
        Gc(e, t)
      })
  }
  var o = e.stateNode
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        Gc(e, t),
          typeof r != 'function' &&
            (Yn === null ? (Yn = new Set([this])) : Yn.add(this))
        var a = t.stack
        this.componentDidCatch(t.value, { componentStack: a !== null ? a : '' })
      }),
    n
  )
}
function Rh(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new zx()
    var i = new Set()
    r.set(t, i)
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i))
  i.has(n) || (i.add(n), (e = Zx.bind(null, e, t, n)), t.then(e, e))
}
function Ih(e) {
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
function Fh(e, t, n, r, i) {
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
              : ((t = _n(-1, 1)), (t.tag = 2), Xn(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var $x = Pn.ReactCurrentOwner,
  Xe = !1
function He(e, t, n, r) {
  t.child = e === null ? e0(t, null, n, r) : ki(t, e.child, n, r)
}
function zh(e, t, n, r, i) {
  n = n.render
  var o = t.ref
  return (
    _i(t, i),
    (r = Qf(e, t, n, r, o, i)),
    (n = Kf()),
    e !== null && !Xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Cn(e, t, i))
      : (fe && n && If(t), (t.flags |= 1), He(e, t, r, i), t.child)
  )
}
function $h(e, t, n, r, i) {
  if (e === null) {
    var o = n.type
    return typeof o == 'function' &&
      !op(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), j0(e, t, o, r, i))
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
      return Cn(e, t, i)
  }
  return (
    (t.flags |= 1),
    (e = Jn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  )
}
function j0(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps
    if ($o(o, r) && e.ref === t.ref)
      if (((Xe = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Xe = !0)
      else return (t.lanes = e.lanes), Cn(e, t, i)
  }
  return Qc(e, t, n, r, i)
}
function T0(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        le(di, at),
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
          le(di, at),
          (at |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        le(di, at),
        (at |= r)
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      le(di, at),
      (at |= r)
  return He(e, t, i, n), t.child
}
function k0(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function Qc(e, t, n, r, i) {
  var o = Ze(n) ? br : Ve.current
  return (
    (o = ji(t, o)),
    _i(t, i),
    (n = Qf(e, t, n, r, o, i)),
    (r = Kf()),
    e !== null && !Xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Cn(e, t, i))
      : (fe && r && If(t), (t.flags |= 1), He(e, t, n, i), t.child)
  )
}
function Dh(e, t, n, r, i) {
  if (Ze(n)) {
    var o = !0
    Bs(t)
  } else o = !1
  if ((_i(t, i), t.stateNode === null))
    ys(e, t), S0(t, n, r), Uc(t, n, r, i), (r = !0)
  else if (e === null) {
    var a = t.stateNode,
      s = t.memoizedProps
    a.props = s
    var l = a.context,
      u = n.contextType
    typeof u == 'object' && u !== null
      ? (u = kt(u))
      : ((u = Ze(n) ? br : Ve.current), (u = ji(t, u)))
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == 'function' || typeof a.getSnapshotBeforeUpdate == 'function'
    f ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((s !== r || l !== u) && Ah(t, a, r, u)),
      (Rn = !1)
    var d = t.memoizedState
    ;(a.state = d),
      Gs(t, r, a, i),
      (l = t.memoizedState),
      s !== r || d !== l || Ye.current || Rn
        ? (typeof c == 'function' && (Wc(t, n, c, r), (l = t.memoizedState)),
          (s = Rn || Oh(t, n, s, r, d, l, u))
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
      n0(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : At(t.type, s)),
      (a.props = u),
      (f = t.pendingProps),
      (d = a.context),
      (l = n.contextType),
      typeof l == 'object' && l !== null
        ? (l = kt(l))
        : ((l = Ze(n) ? br : Ve.current), (l = ji(t, l)))
    var g = n.getDerivedStateFromProps
    ;(c =
      typeof g == 'function' ||
      typeof a.getSnapshotBeforeUpdate == 'function') ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((s !== f || d !== l) && Ah(t, a, r, l)),
      (Rn = !1),
      (d = t.memoizedState),
      (a.state = d),
      Gs(t, r, a, i)
    var y = t.memoizedState
    s !== f || d !== y || Ye.current || Rn
      ? (typeof g == 'function' && (Wc(t, n, g, r), (y = t.memoizedState)),
        (u = Rn || Oh(t, n, u, r, d, y, l) || !1)
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
  return Kc(e, t, n, r, o, i)
}
function Kc(e, t, n, r, i, o) {
  k0(e, t)
  var a = (t.flags & 128) !== 0
  if (!r && !a) return i && Eh(t, n, !1), Cn(e, t, o)
  ;(r = t.stateNode), ($x.current = t)
  var s =
    a && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = ki(t, e.child, null, o)), (t.child = ki(t, null, s, o)))
      : He(e, t, s, o),
    (t.memoizedState = r.state),
    i && Eh(t, n, !0),
    t.child
  )
}
function P0(e) {
  var t = e.stateNode
  t.pendingContext
    ? Ch(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ch(e, t.context, !1),
    qf(e, t.containerInfo)
}
function Vh(e, t, n, r, i) {
  return Ti(), zf(i), (t.flags |= 256), He(e, t, n, r), t.child
}
var Xc = { dehydrated: null, treeContext: null, retryLane: 0 }
function Yc(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function M0(e, t, n) {
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
      Hc(t),
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
                : (o = Ml(a, r, 0, null)),
              (e = xr(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Yc(n)),
              (t.memoizedState = Xc),
              e)
            : Zf(t, a))
    )
  if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
    return Dx(e, t, a, r, s, i, n)
  if (o) {
    ;(o = r.fallback), (a = t.mode), (i = e.child), (s = i.sibling)
    var l = { mode: 'hidden', children: r.children }
    return (
      !(a & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Jn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      s !== null ? (o = Jn(s, o)) : ((o = xr(o, a, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Yc(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions
            }),
      (o.memoizedState = a),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Xc),
      r
    )
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Jn(o, { mode: 'visible', children: r.children })),
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
function Zf(e, t) {
  return (
    (t = Ml({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function Ba(e, t, n, r) {
  return (
    r !== null && zf(r),
    ki(t, e.child, null, n),
    (e = Zf(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function Dx(e, t, n, r, i, o, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Pu(Error(H(422)))), Ba(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Ml({ mode: 'visible', children: r.children }, i, 0, null)),
        (o = xr(o, i, a, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && ki(t, e.child, null, a),
        (t.child.memoizedState = Yc(a)),
        (t.memoizedState = Xc),
        o)
  if (!(t.mode & 1)) return Ba(e, t, a, null)
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst
    return (r = s), (o = Error(H(419))), (r = Pu(o, r, void 0)), Ba(e, t, a, r)
  }
  if (((s = (a & e.childLanes) !== 0), Xe || s)) {
    if (((r = Te), r !== null)) {
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
          ((o.retryLane = i), Sn(e, i), Vt(r, e, i, -1))
    }
    return ip(), (r = Pu(Error(H(421)))), Ba(e, t, a, r)
  }
  return i.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Jx.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (lt = Kn(i.nextSibling)),
      (dt = t),
      (fe = !0),
      (zt = null),
      e !== null &&
        ((wt[bt++] = gn),
        (wt[bt++] = yn),
        (wt[bt++] = Sr),
        (gn = e.id),
        (yn = e.overflow),
        (Sr = t)),
      (t = Zf(t, r.children)),
      (t.flags |= 4096),
      t)
}
function Bh(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), qc(e.return, t, n)
}
function Mu(e, t, n, r, i) {
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
function N0(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail
  if ((He(e, t, r.children, n), (r = pe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Bh(e, n, t)
        else if (e.tag === 19) Bh(e, n, t)
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
            e !== null && Qs(e) === null && (i = n),
            (n = n.sibling)
        ;(n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Mu(t, !1, i, n, o)
        break
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Qs(e) === null)) {
            t.child = i
            break
          }
          ;(e = i.sibling), (i.sibling = n), (n = i), (i = e)
        }
        Mu(t, !0, n, null, o)
        break
      case 'together':
        Mu(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function ys(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function Cn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Er |= t.lanes),
    !(n & t.childLanes))
  )
    return null
  if (e !== null && t.child !== e.child) throw Error(H(153))
  if (t.child !== null) {
    for (
      e = t.child, n = Jn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Jn(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function Vx(e, t, n) {
  switch (t.tag) {
    case 3:
      P0(t), Ti()
      break
    case 5:
      r0(t)
      break
    case 1:
      Ze(t.type) && Bs(t)
      break
    case 4:
      qf(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value
      le(Ws, r._currentValue), (r._currentValue = i)
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (le(pe, pe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? M0(e, t, n)
          : (le(pe, pe.current & 1),
            (e = Cn(e, t, n)),
            e !== null ? e.sibling : null)
      le(pe, pe.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return N0(e, t, n)
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
      return (t.lanes = 0), T0(e, t, n)
  }
  return Cn(e, t, n)
}
var L0, Zc, O0, A0
L0 = function (e, t) {
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
Zc = function () {}
O0 = function (e, t, n, r) {
  var i = e.memoizedProps
  if (i !== r) {
    ;(e = t.stateNode), hr(rn.current)
    var o = null
    switch (n) {
      case 'input':
        ;(i = xc(e, i)), (r = xc(e, r)), (o = [])
        break
      case 'select':
        ;(i = me({}, i, { value: void 0 })),
          (r = me({}, r, { value: void 0 })),
          (o = [])
        break
      case 'textarea':
        ;(i = Sc(e, i)), (r = Sc(e, r)), (o = [])
        break
      default:
        typeof i.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Ds)
    }
    Ec(n, r)
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
            (Lo.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null))
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
              (Lo.hasOwnProperty(u)
                ? (l != null && u === 'onScroll' && ue('scroll', e),
                  o || s === l || (o = []))
                : (o = o || []).push(u, l))
    }
    n && (o = o || []).push('style', n)
    var u = o
    ;(t.updateQueue = u) && (t.flags |= 4)
  }
}
A0 = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
function to(e, t) {
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
function ze(e) {
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
function Bx(e, t, n) {
  var r = t.pendingProps
  switch ((Ff(t), t.tag)) {
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
      return ze(t), null
    case 1:
      return Ze(t.type) && Vs(), ze(t), null
    case 3:
      return (
        (r = t.stateNode),
        Pi(),
        ce(Ye),
        ce(Ve),
        Uf(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Da(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), zt !== null && (ad(zt), (zt = null)))),
        Zc(e, t),
        ze(t),
        null
      )
    case 5:
      Wf(t)
      var i = hr(qo.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        O0(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(H(166))
          return ze(t), null
        }
        if (((e = hr(rn.current)), Da(t))) {
          ;(r = t.stateNode), (n = t.type)
          var o = t.memoizedProps
          switch (((r[Jt] = t), (r[Bo] = o), (e = (t.mode & 1) !== 0), n)) {
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
              for (i = 0; i < co.length; i++) ue(co[i], r)
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
              Yp(r, o), ue('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!o.multiple }),
                ue('invalid', r)
              break
            case 'textarea':
              Jp(r, o), ue('invalid', r)
          }
          Ec(n, o), (i = null)
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
                : Lo.hasOwnProperty(a) &&
                  s != null &&
                  a === 'onScroll' &&
                  ue('scroll', r)
            }
          switch (n) {
            case 'input':
              Na(r), Zp(r, o, !0)
              break
            case 'textarea':
              Na(r), eh(r)
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
            e === 'http://www.w3.org/1999/xhtml' && (e = lg(n)),
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
            (e[Bo] = r),
            L0(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((a = jc(n, r)), n)) {
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
                for (i = 0; i < co.length; i++) ue(co[i], e)
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
                Yp(e, r), (i = xc(e, r)), ue('invalid', e)
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
                Jp(e, r), (i = Sc(e, r)), ue('invalid', e)
                break
              default:
                i = r
            }
            Ec(n, i), (s = i)
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var l = s[o]
                o === 'style'
                  ? dg(e, l)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((l = l ? l.__html : void 0), l != null && ug(e, l))
                  : o === 'children'
                  ? typeof l == 'string'
                    ? (n !== 'textarea' || l !== '') && Oo(e, l)
                    : typeof l == 'number' && Oo(e, '' + l)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    (Lo.hasOwnProperty(o)
                      ? l != null && o === 'onScroll' && ue('scroll', e)
                      : l != null && bf(e, o, l, a))
              }
            switch (n) {
              case 'input':
                Na(e), Zp(e, r, !1)
                break
              case 'textarea':
                Na(e), eh(e)
                break
              case 'option':
                r.value != null && e.setAttribute('value', '' + er(r.value))
                break
              case 'select':
                ;(e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? mi(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      mi(e, !!r.multiple, r.defaultValue, !0)
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
      return ze(t), null
    case 6:
      if (e && t.stateNode != null) A0(e, t, e.memoizedProps, r)
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(H(166))
        if (((n = hr(qo.current)), hr(rn.current), Da(t))) {
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
      return ze(t), null
    case 13:
      if (
        (ce(pe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (fe && lt !== null && t.mode & 1 && !(t.flags & 128))
          Zg(), Ti(), (t.flags |= 98560), (o = !1)
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
          ze(t), (o = !1)
        } else zt !== null && (ad(zt), (zt = null)), (o = !0)
        if (!o) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || pe.current & 1 ? Se === 0 && (Se = 3) : ip())),
          t.updateQueue !== null && (t.flags |= 4),
          ze(t),
          null)
    case 4:
      return (
        Pi(), Zc(e, t), e === null && Do(t.stateNode.containerInfo), ze(t), null
      )
    case 10:
      return Vf(t.type._context), ze(t), null
    case 17:
      return Ze(t.type) && Vs(), ze(t), null
    case 19:
      if ((ce(pe), (o = t.memoizedState), o === null)) return ze(t), null
      if (((r = (t.flags & 128) !== 0), (a = o.rendering), a === null))
        if (r) to(o, !1)
        else {
          if (Se !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = Qs(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    to(o, !1),
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
            ye() > Ni &&
            ((t.flags |= 128), (r = !0), to(o, !1), (t.lanes = 4194304))
        }
      else {
        if (!r)
          if (((e = Qs(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              to(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !a.alternate && !fe)
            )
              return ze(t), null
          } else
            2 * ye() - o.renderingStartTime > Ni &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), to(o, !1), (t.lanes = 4194304))
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
        : (ze(t), null)
    case 22:
    case 23:
      return (
        rp(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? at & 1073741824 && (ze(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ze(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(H(156, t.tag))
}
function Hx(e, t) {
  switch ((Ff(t), t.tag)) {
    case 1:
      return (
        Ze(t.type) && Vs(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        Pi(),
        ce(Ye),
        ce(Ve),
        Uf(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return Wf(t), null
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
      return Pi(), null
    case 10:
      return Vf(t.type._context), null
    case 22:
    case 23:
      return rp(), null
    case 24:
      return null
    default:
      return null
  }
}
var Ha = !1,
  De = !1,
  qx = typeof WeakSet == 'function' ? WeakSet : Set,
  W = null
function ci(e, t) {
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
function Jc(e, t, n) {
  try {
    n()
  } catch (r) {
    ve(e, t, r)
  }
}
var Hh = !1
function Wx(e, t) {
  if (((Ic = Fs), (e = $g()), Rf(e))) {
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
  for (Fc = { focusedElem: e, selectionRange: n }, Fs = !1, W = t; W !== null; )
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
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? _ : At(t.type, _),
                      x
                    )
                  m.__reactInternalSnapshotBeforeUpdate = p
                }
                break
              case 3:
                var v = t.stateNode.containerInfo
                v.nodeType === 1
                  ? (v.textContent = '')
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement)
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
  return (y = Hh), (Hh = !1), y
}
function xo(e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next)
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy
        ;(i.destroy = void 0), o !== void 0 && Jc(t, n, o)
      }
      i = i.next
    } while (i !== r)
  }
}
function kl(e, t) {
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
function ed(e) {
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
function R0(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), R0(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Jt], delete t[Bo], delete t[Dc], delete t[Tx], delete t[kx])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function I0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function qh(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || I0(e.return)) return null
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
function td(e, t, n) {
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
    for (td(e, t, n), e = e.sibling; e !== null; ) td(e, t, n), (e = e.sibling)
}
function nd(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null))
    for (nd(e, t, n), e = e.sibling; e !== null; ) nd(e, t, n), (e = e.sibling)
}
var Ne = null,
  Rt = !1
function Nn(e, t, n) {
  for (n = n.child; n !== null; ) F0(e, t, n), (n = n.sibling)
}
function F0(e, t, n) {
  if (nn && typeof nn.onCommitFiberUnmount == 'function')
    try {
      nn.onCommitFiberUnmount(xl, n)
    } catch {}
  switch (n.tag) {
    case 5:
      De || ci(n, t)
    case 6:
      var r = Ne,
        i = Rt
      ;(Ne = null),
        Nn(e, t, n),
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
              ? Su(e.parentNode, n)
              : e.nodeType === 1 && Su(e, n),
            Fo(e))
          : Su(Ne, n.stateNode))
      break
    case 4:
      ;(r = Ne),
        (i = Rt),
        (Ne = n.stateNode.containerInfo),
        (Rt = !0),
        Nn(e, t, n),
        (Ne = r),
        (Rt = i)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !De &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next
        do {
          var o = i,
            a = o.destroy
          ;(o = o.tag),
            a !== void 0 && (o & 2 || o & 4) && Jc(n, t, a),
            (i = i.next)
        } while (i !== r)
      }
      Nn(e, t, n)
      break
    case 1:
      if (
        !De &&
        (ci(n, t),
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
      Nn(e, t, n)
      break
    case 21:
      Nn(e, t, n)
      break
    case 22:
      n.mode & 1
        ? ((De = (r = De) || n.memoizedState !== null), Nn(e, t, n), (De = r))
        : Nn(e, t, n)
      break
    default:
      Nn(e, t, n)
  }
}
function Wh(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new qx()),
      t.forEach(function (r) {
        var i = ew.bind(null, e, r)
        n.has(r) || (n.add(r), r.then(i, i))
      })
  }
}
function Lt(e, t) {
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
        F0(o, a, i), (Ne = null), (Rt = !1)
        var l = i.alternate
        l !== null && (l.return = null), (i.return = null)
      } catch (u) {
        ve(i, t, u)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) z0(t, e), (t = t.sibling)
}
function z0(e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Lt(t, e), Kt(e), r & 4)) {
        try {
          xo(3, e, e.return), kl(3, e)
        } catch (_) {
          ve(e, e.return, _)
        }
        try {
          xo(5, e, e.return)
        } catch (_) {
          ve(e, e.return, _)
        }
      }
      break
    case 1:
      Lt(t, e), Kt(e), r & 512 && n !== null && ci(n, n.return)
      break
    case 5:
      if (
        (Lt(t, e),
        Kt(e),
        r & 512 && n !== null && ci(n, n.return),
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
            s === 'input' && o.type === 'radio' && o.name != null && ag(i, o),
              jc(s, a)
            var u = jc(s, o)
            for (a = 0; a < l.length; a += 2) {
              var c = l[a],
                f = l[a + 1]
              c === 'style'
                ? dg(i, f)
                : c === 'dangerouslySetInnerHTML'
                ? ug(i, f)
                : c === 'children'
                ? Oo(i, f)
                : bf(i, c, f, u)
            }
            switch (s) {
              case 'input':
                wc(i, o)
                break
              case 'textarea':
                sg(i, o)
                break
              case 'select':
                var d = i._wrapperState.wasMultiple
                i._wrapperState.wasMultiple = !!o.multiple
                var g = o.value
                g != null
                  ? mi(i, !!o.multiple, g, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? mi(i, !!o.multiple, o.defaultValue, !0)
                      : mi(i, !!o.multiple, o.multiple ? [] : '', !1))
            }
            i[Bo] = o
          } catch (_) {
            ve(e, e.return, _)
          }
      }
      break
    case 6:
      if ((Lt(t, e), Kt(e), r & 4)) {
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
        (Lt(t, e), Kt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Fo(t.containerInfo)
        } catch (_) {
          ve(e, e.return, _)
        }
      break
    case 4:
      Lt(t, e), Kt(e)
      break
    case 13:
      Lt(t, e),
        Kt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (tp = ye())),
        r & 4 && Wh(e)
      break
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((De = (u = De) || c), Lt(t, e), (De = u)) : Lt(t, e),
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
                  xo(4, d, d.return)
                  break
                case 1:
                  ci(d, d.return)
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
                  ci(d, d.return)
                  break
                case 22:
                  if (d.memoizedState !== null) {
                    Gh(f)
                    continue
                  }
              }
              g !== null ? ((g.return = d), (W = g)) : Gh(f)
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
                      (s.style.display = cg('display', a)))
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
      Lt(t, e), Kt(e), r & 4 && Wh(e)
      break
    case 21:
      break
    default:
      Lt(t, e), Kt(e)
  }
}
function Kt(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (I0(n)) {
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
          var o = qh(e)
          nd(e, o, i)
          break
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            s = qh(e)
          td(e, s, a)
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
function Ux(e, t, n) {
  ;(W = e), $0(e)
}
function $0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; W !== null; ) {
    var i = W,
      o = i.child
    if (i.tag === 22 && r) {
      var a = i.memoizedState !== null || Ha
      if (!a) {
        var s = i.alternate,
          l = (s !== null && s.memoizedState !== null) || De
        s = Ha
        var u = De
        if (((Ha = a), (De = l) && !u))
          for (W = i; W !== null; )
            (a = W),
              (l = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Qh(i)
                : l !== null
                ? ((l.return = a), (W = l))
                : Qh(i)
        for (; o !== null; ) (W = o), $0(o), (o = o.sibling)
        ;(W = i), (Ha = s), (De = u)
      }
      Uh(e)
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (W = o)) : Uh(e)
  }
}
function Uh(e) {
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
              De || kl(5, t)
              break
            case 1:
              var r = t.stateNode
              if (t.flags & 4 && !De)
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
              o !== null && Mh(t, o, r)
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
                Mh(t, a, n)
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
                    f !== null && Fo(f)
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
        De || (t.flags & 512 && ed(t))
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
function Gh(e) {
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
function Qh(e) {
  for (; W !== null; ) {
    var t = W
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            kl(4, t)
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
            ed(t)
          } catch (l) {
            ve(t, o, l)
          }
          break
        case 5:
          var a = t.return
          try {
            ed(t)
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
var Gx = Math.ceil,
  Ys = Pn.ReactCurrentDispatcher,
  Jf = Pn.ReactCurrentOwner,
  Et = Pn.ReactCurrentBatchConfig,
  ne = 0,
  Te = null,
  xe = null,
  Oe = 0,
  at = 0,
  di = or(0),
  Se = 0,
  Qo = null,
  Er = 0,
  Pl = 0,
  ep = 0,
  wo = null,
  Ke = null,
  tp = 0,
  Ni = 1 / 0,
  hn = null,
  Zs = !1,
  rd = null,
  Yn = null,
  qa = !1,
  Vn = null,
  Js = 0,
  bo = 0,
  id = null,
  _s = -1,
  xs = 0
function We() {
  return ne & 6 ? ye() : _s !== -1 ? _s : (_s = ye())
}
function Zn(e) {
  return e.mode & 1
    ? ne & 2 && Oe !== 0
      ? Oe & -Oe
      : Mx.transition !== null
      ? (xs === 0 && (xs = Sg()), xs)
      : ((e = ie),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Mg(e.type))),
        e)
    : 1
}
function Vt(e, t, n, r) {
  if (50 < bo) throw ((bo = 0), (id = null), Error(H(185)))
  da(e, n, r),
    (!(ne & 2) || e !== Te) &&
      (e === Te && (!(ne & 2) && (Pl |= n), Se === 4 && zn(e, Oe)),
      Je(e, r),
      n === 1 && ne === 0 && !(t.mode & 1) && ((Ni = ye() + 500), El && ar()))
}
function Je(e, t) {
  var n = e.callbackNode
  M_(e, t)
  var r = Is(e, e === Te ? Oe : 0)
  if (r === 0)
    n !== null && rh(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && rh(n), t === 1))
      e.tag === 0 ? Px(Kh.bind(null, e)) : Kg(Kh.bind(null, e)),
        Ex(function () {
          !(ne & 6) && ar()
        }),
        (n = null)
    else {
      switch (Cg(r)) {
        case 1:
          n = Tf
          break
        case 4:
          n = wg
          break
        case 16:
          n = Rs
          break
        case 536870912:
          n = bg
          break
        default:
          n = Rs
      }
      n = G0(n, D0.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function D0(e, t) {
  if (((_s = -1), (xs = 0), ne & 6)) throw Error(H(327))
  var n = e.callbackNode
  if (xi() && e.callbackNode !== n) return null
  var r = Is(e, e === Te ? Oe : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = el(e, r)
  else {
    t = r
    var i = ne
    ne |= 2
    var o = B0()
    ;(Te !== e || Oe !== t) && ((hn = null), (Ni = ye() + 500), _r(e, t))
    do
      try {
        Xx()
        break
      } catch (s) {
        V0(e, s)
      }
    while (!0)
    Df(),
      (Ys.current = o),
      (ne = i),
      xe !== null ? (t = 0) : ((Te = null), (Oe = 0), (t = Se))
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Nc(e)), i !== 0 && ((r = i), (t = od(e, i)))), t === 1)
    )
      throw ((n = Qo), _r(e, 0), zn(e, r), Je(e, ye()), n)
    if (t === 6) zn(e, r)
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Qx(i) &&
          ((t = el(e, r)),
          t === 2 && ((o = Nc(e)), o !== 0 && ((r = o), (t = od(e, o)))),
          t === 1))
      )
        throw ((n = Qo), _r(e, 0), zn(e, r), Je(e, ye()), n)
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(H(345))
        case 2:
          ur(e, Ke, hn)
          break
        case 3:
          if (
            (zn(e, r), (r & 130023424) === r && ((t = tp + 500 - ye()), 10 < t))
          ) {
            if (Is(e, 0) !== 0) break
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              We(), (e.pingedLanes |= e.suspendedLanes & i)
              break
            }
            e.timeoutHandle = $c(ur.bind(null, e, Ke, hn), t)
            break
          }
          ur(e, Ke, hn)
          break
        case 4:
          if ((zn(e, r), (r & 4194240) === r)) break
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var a = 31 - Dt(r)
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
                : 1960 * Gx(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = $c(ur.bind(null, e, Ke, hn), r)
            break
          }
          ur(e, Ke, hn)
          break
        case 5:
          ur(e, Ke, hn)
          break
        default:
          throw Error(H(329))
      }
    }
  }
  return Je(e, ye()), e.callbackNode === n ? D0.bind(null, e) : null
}
function od(e, t) {
  var n = wo
  return (
    e.current.memoizedState.isDehydrated && (_r(e, t).flags |= 256),
    (e = el(e, t)),
    e !== 2 && ((t = Ke), (Ke = n), t !== null && ad(t)),
    e
  )
}
function ad(e) {
  Ke === null ? (Ke = e) : Ke.push.apply(Ke, e)
}
function Qx(e) {
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
function zn(e, t) {
  for (
    t &= ~ep,
      t &= ~Pl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Dt(t),
      r = 1 << n
    ;(e[n] = -1), (t &= ~r)
  }
}
function Kh(e) {
  if (ne & 6) throw Error(H(327))
  xi()
  var t = Is(e, 0)
  if (!(t & 1)) return Je(e, ye()), null
  var n = el(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = Nc(e)
    r !== 0 && ((t = r), (n = od(e, r)))
  }
  if (n === 1) throw ((n = Qo), _r(e, 0), zn(e, t), Je(e, ye()), n)
  if (n === 6) throw Error(H(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    ur(e, Ke, hn),
    Je(e, ye()),
    null
  )
}
function np(e, t) {
  var n = ne
  ne |= 1
  try {
    return e(t)
  } finally {
    ;(ne = n), ne === 0 && ((Ni = ye() + 500), El && ar())
  }
}
function jr(e) {
  Vn !== null && Vn.tag === 0 && !(ne & 6) && xi()
  var t = ne
  ne |= 1
  var n = Et.transition,
    r = ie
  try {
    if (((Et.transition = null), (ie = 1), e)) return e()
  } finally {
    ;(ie = r), (Et.transition = n), (ne = t), !(ne & 6) && ar()
  }
}
function rp() {
  ;(at = di.current), ce(di)
}
function _r(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), Cx(n)), xe !== null))
    for (n = xe.return; n !== null; ) {
      var r = n
      switch ((Ff(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && Vs()
          break
        case 3:
          Pi(), ce(Ye), ce(Ve), Uf()
          break
        case 5:
          Wf(r)
          break
        case 4:
          Pi()
          break
        case 13:
          ce(pe)
          break
        case 19:
          ce(pe)
          break
        case 10:
          Vf(r.type._context)
          break
        case 22:
        case 23:
          rp()
      }
      n = n.return
    }
  if (
    ((Te = e),
    (xe = e = Jn(e.current, null)),
    (Oe = at = t),
    (Se = 0),
    (Qo = null),
    (ep = Pl = Er = 0),
    (Ke = wo = null),
    pr !== null)
  ) {
    for (t = 0; t < pr.length; t++)
      if (((n = pr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var i = r.next,
          o = n.pending
        if (o !== null) {
          var a = o.next
          ;(o.next = i), (r.next = a)
        }
        n.pending = r
      }
    pr = null
  }
  return e
}
function V0(e, t) {
  do {
    var n = xe
    try {
      if ((Df(), (vs.current = Xs), Ks)) {
        for (var r = he.memoizedState; r !== null; ) {
          var i = r.queue
          i !== null && (i.pending = null), (r = r.next)
        }
        Ks = !1
      }
      if (
        ((Cr = 0),
        (je = be = he = null),
        (_o = !1),
        (Wo = 0),
        (Jf.current = null),
        n === null || n.return === null)
      ) {
        ;(Se = 1), (Qo = t), (xe = null)
        break
      }
      e: {
        var o = e,
          a = n.return,
          s = n,
          l = t
        if (
          ((t = Oe),
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
          var g = Ih(a)
          if (g !== null) {
            ;(g.flags &= -257),
              Fh(g, a, s, o, t),
              g.mode & 1 && Rh(o, u, t),
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
              Rh(o, u, t), ip()
              break e
            }
            l = Error(H(426))
          }
        } else if (fe && s.mode & 1) {
          var x = Ih(a)
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              Fh(x, a, s, o, t),
              zf(Mi(l, s))
            break e
          }
        }
        ;(o = l = Mi(l, s)),
          Se !== 4 && (Se = 2),
          wo === null ? (wo = [o]) : wo.push(o),
          (o = a)
        do {
          switch (o.tag) {
            case 3:
              ;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
              var m = C0(o, l, t)
              Ph(o, m)
              break e
            case 1:
              s = l
              var p = o.type,
                v = o.stateNode
              if (
                !(o.flags & 128) &&
                (typeof p.getDerivedStateFromError == 'function' ||
                  (v !== null &&
                    typeof v.componentDidCatch == 'function' &&
                    (Yn === null || !Yn.has(v))))
              ) {
                ;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
                var w = E0(o, s, t)
                Ph(o, w)
                break e
              }
          }
          o = o.return
        } while (o !== null)
      }
      q0(n)
    } catch (b) {
      ;(t = b), xe === n && n !== null && (xe = n = n.return)
      continue
    }
    break
  } while (!0)
}
function B0() {
  var e = Ys.current
  return (Ys.current = Xs), e === null ? Xs : e
}
function ip() {
  ;(Se === 0 || Se === 3 || Se === 2) && (Se = 4),
    Te === null || (!(Er & 268435455) && !(Pl & 268435455)) || zn(Te, Oe)
}
function el(e, t) {
  var n = ne
  ne |= 2
  var r = B0()
  ;(Te !== e || Oe !== t) && ((hn = null), _r(e, t))
  do
    try {
      Kx()
      break
    } catch (i) {
      V0(e, i)
    }
  while (!0)
  if ((Df(), (ne = n), (Ys.current = r), xe !== null)) throw Error(H(261))
  return (Te = null), (Oe = 0), Se
}
function Kx() {
  for (; xe !== null; ) H0(xe)
}
function Xx() {
  for (; xe !== null && !w_(); ) H0(xe)
}
function H0(e) {
  var t = U0(e.alternate, e, at)
  ;(e.memoizedProps = e.pendingProps),
    t === null ? q0(e) : (xe = t),
    (Jf.current = null)
}
function q0(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Hx(n, t)), n !== null)) {
        ;(n.flags &= 32767), (xe = n)
        return
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(Se = 6), (xe = null)
        return
      }
    } else if (((n = Bx(n, t, at)), n !== null)) {
      xe = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      xe = t
      return
    }
    xe = t = e
  } while (t !== null)
  Se === 0 && (Se = 5)
}
function ur(e, t, n) {
  var r = ie,
    i = Et.transition
  try {
    ;(Et.transition = null), (ie = 1), Yx(e, t, n, r)
  } finally {
    ;(Et.transition = i), (ie = r)
  }
  return null
}
function Yx(e, t, n, r) {
  do xi()
  while (Vn !== null)
  if (ne & 6) throw Error(H(327))
  n = e.finishedWork
  var i = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(H(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var o = n.lanes | n.childLanes
  if (
    (N_(e, o),
    e === Te && ((xe = Te = null), (Oe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      qa ||
      ((qa = !0),
      G0(Rs, function () {
        return xi(), null
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    ;(o = Et.transition), (Et.transition = null)
    var a = ie
    ie = 1
    var s = ne
    ;(ne |= 4),
      (Jf.current = null),
      Wx(e, n),
      z0(n, e),
      gx(Fc),
      (Fs = !!Ic),
      (Fc = Ic = null),
      (e.current = n),
      Ux(n),
      b_(),
      (ne = s),
      (ie = a),
      (Et.transition = o)
  } else e.current = n
  if (
    (qa && ((qa = !1), (Vn = e), (Js = i)),
    (o = e.pendingLanes),
    o === 0 && (Yn = null),
    E_(n.stateNode),
    Je(e, ye()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest })
  if (Zs) throw ((Zs = !1), (e = rd), (rd = null), e)
  return (
    Js & 1 && e.tag !== 0 && xi(),
    (o = e.pendingLanes),
    o & 1 ? (e === id ? bo++ : ((bo = 0), (id = e))) : (bo = 0),
    ar(),
    null
  )
}
function xi() {
  if (Vn !== null) {
    var e = Cg(Js),
      t = Et.transition,
      n = ie
    try {
      if (((Et.transition = null), (ie = 16 > e ? 16 : e), Vn === null))
        var r = !1
      else {
        if (((e = Vn), (Vn = null), (Js = 0), ne & 6)) throw Error(H(331))
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
                      xo(8, c, o)
                  }
                  var f = c.child
                  if (f !== null) (f.return = c), (W = f)
                  else
                    for (; W !== null; ) {
                      c = W
                      var d = c.sibling,
                        g = c.return
                      if ((R0(c), c === u)) {
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
                    xo(9, o, o.return)
                }
              var m = o.sibling
              if (m !== null) {
                ;(m.return = o.return), (W = m)
                break e
              }
              W = o.return
            }
        }
        var p = e.current
        for (W = p; W !== null; ) {
          a = W
          var v = a.child
          if (a.subtreeFlags & 2064 && v !== null) (v.return = a), (W = v)
          else
            e: for (a = p; W !== null; ) {
              if (((s = W), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      kl(9, s)
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
          ((ne = i), ar(), nn && typeof nn.onPostCommitFiberRoot == 'function')
        )
          try {
            nn.onPostCommitFiberRoot(xl, e)
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
function Xh(e, t, n) {
  ;(t = Mi(n, t)),
    (t = C0(e, t, 1)),
    (e = Xn(e, t, 1)),
    (t = We()),
    e !== null && (da(e, 1, t), Je(e, t))
}
function ve(e, t, n) {
  if (e.tag === 3) Xh(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Xh(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Yn === null || !Yn.has(r)))
        ) {
          ;(e = Mi(n, e)),
            (e = E0(t, e, 1)),
            (t = Xn(t, e, 1)),
            (e = We()),
            t !== null && (da(t, 1, e), Je(t, e))
          break
        }
      }
      t = t.return
    }
}
function Zx(e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = We()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Te === e &&
      (Oe & n) === n &&
      (Se === 4 || (Se === 3 && (Oe & 130023424) === Oe && 500 > ye() - tp)
        ? _r(e, 0)
        : (ep |= n)),
    Je(e, t)
}
function W0(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Aa), (Aa <<= 1), !(Aa & 130023424) && (Aa = 4194304))
      : (t = 1))
  var n = We()
  ;(e = Sn(e, t)), e !== null && (da(e, t, n), Je(e, n))
}
function Jx(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), W0(e, n)
}
function ew(e, t) {
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
  r !== null && r.delete(t), W0(e, n)
}
var U0
U0 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ye.current) Xe = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Xe = !1), Vx(e, t, n)
      Xe = !!(e.flags & 131072)
    }
  else (Xe = !1), fe && t.flags & 1048576 && Xg(t, qs, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      ys(e, t), (e = t.pendingProps)
      var i = ji(t, Ve.current)
      _i(t, n), (i = Qf(null, t, r, e, i, n))
      var o = Kf()
      return (
        (t.flags |= 1),
        typeof i == 'object' &&
        i !== null &&
        typeof i.render == 'function' &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ze(r) ? ((o = !0), Bs(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Hf(t),
            (i.updater = Tl),
            (t.stateNode = i),
            (i._reactInternals = t),
            Uc(t, r, e, n),
            (t = Kc(null, t, r, !0, o, n)))
          : ((t.tag = 0), fe && o && If(t), He(null, t, i, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch (
          (ys(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = nw(r)),
          (e = At(r, e)),
          i)
        ) {
          case 0:
            t = Qc(null, t, r, e, n)
            break e
          case 1:
            t = Dh(null, t, r, e, n)
            break e
          case 11:
            t = zh(null, t, r, e, n)
            break e
          case 14:
            t = $h(null, t, r, At(r.type, e), n)
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
        Qc(e, t, r, i, n)
      )
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : At(r, i)),
        Dh(e, t, r, i, n)
      )
    case 3:
      e: {
        if ((P0(t), e === null)) throw Error(H(387))
        ;(r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          n0(e, t),
          Gs(t, r, null, n)
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
            ;(i = Mi(Error(H(423)), t)), (t = Vh(e, t, r, n, i))
            break e
          } else if (r !== i) {
            ;(i = Mi(Error(H(424)), t)), (t = Vh(e, t, r, n, i))
            break e
          } else
            for (
              lt = Kn(t.stateNode.containerInfo.firstChild),
                dt = t,
                fe = !0,
                zt = null,
                n = e0(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((Ti(), r === i)) {
            t = Cn(e, t, n)
            break e
          }
          He(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        r0(t),
        e === null && Hc(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (a = i.children),
        zc(r, i) ? (a = null) : o !== null && zc(r, o) && (t.flags |= 32),
        k0(e, t),
        He(e, t, a, n),
        t.child
      )
    case 6:
      return e === null && Hc(t), null
    case 13:
      return M0(e, t, n)
    case 4:
      return (
        qf(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ki(t, null, r, n)) : He(e, t, r, n),
        t.child
      )
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : At(r, i)),
        zh(e, t, r, i, n)
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
          le(Ws, r._currentValue),
          (r._currentValue = a),
          o !== null)
        )
          if (Wt(o.value, a)) {
            if (o.children === i.children && !Ye.current) {
              t = Cn(e, t, n)
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
                      ;(l = _n(-1, n & -n)), (l.tag = 2)
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
                      qc(o.return, n, t),
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
                  qc(a, n, t),
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
        _i(t, n),
        (i = kt(i)),
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
        $h(e, t, r, i, n)
      )
    case 15:
      return j0(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : At(r, i)),
        ys(e, t),
        (t.tag = 1),
        Ze(r) ? ((e = !0), Bs(t)) : (e = !1),
        _i(t, n),
        S0(t, r, i),
        Uc(t, r, i, n),
        Kc(null, t, r, !0, e, n)
      )
    case 19:
      return N0(e, t, n)
    case 22:
      return T0(e, t, n)
  }
  throw Error(H(156, t.tag))
}
function G0(e, t) {
  return xg(e, t)
}
function tw(e, t, n, r) {
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
  return new tw(e, t, n, r)
}
function op(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function nw(e) {
  if (typeof e == 'function') return op(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === Cf)) return 11
    if (e === Ef) return 14
  }
  return 2
}
function Jn(e, t) {
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
  if (((r = e), typeof e == 'function')) op(e) && (a = 1)
  else if (typeof e == 'string') a = 5
  else
    e: switch (e) {
      case ti:
        return xr(n.children, i, o, t)
      case Sf:
        ;(a = 8), (i |= 8)
        break
      case vc:
        return (e = St(12, n, t, i | 2)), (e.elementType = vc), (e.lanes = o), e
      case gc:
        return (e = St(13, n, t, i)), (e.elementType = gc), (e.lanes = o), e
      case yc:
        return (e = St(19, n, t, i)), (e.elementType = yc), (e.lanes = o), e
      case rg:
        return Ml(n, i, o, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case tg:
              a = 10
              break e
            case ng:
              a = 9
              break e
            case Cf:
              a = 11
              break e
            case Ef:
              a = 14
              break e
            case An:
              ;(a = 16), (r = null)
              break e
          }
        throw Error(H(130, e == null ? e : typeof e, ''))
    }
  return (
    (t = St(a, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  )
}
function xr(e, t, n, r) {
  return (e = St(7, e, r, t)), (e.lanes = n), e
}
function Ml(e, t, n, r) {
  return (
    (e = St(22, e, r, t)),
    (e.elementType = rg),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function Nu(e, t, n) {
  return (e = St(6, e, null, t)), (e.lanes = n), e
}
function Lu(e, t, n) {
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
function rw(e, t, n, r, i) {
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
    (this.eventTimes = fu(0)),
    (this.expirationTimes = fu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = fu(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null)
}
function ap(e, t, n, r, i, o, a, s, l) {
  return (
    (e = new rw(e, t, n, s, l)),
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
    Hf(o),
    e
  )
}
function iw(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: ei,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n
  }
}
function Q0(e) {
  if (!e) return tr
  e = e._reactInternals
  e: {
    if (Rr(e) !== e || e.tag !== 1) throw Error(H(170))
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
    if (Ze(n)) return Qg(e, n, t)
  }
  return t
}
function K0(e, t, n, r, i, o, a, s, l) {
  return (
    (e = ap(n, r, !0, e, i, o, a, s, l)),
    (e.context = Q0(null)),
    (n = e.current),
    (r = We()),
    (i = Zn(n)),
    (o = _n(r, i)),
    (o.callback = t ?? null),
    Xn(n, o, i),
    (e.current.lanes = i),
    da(e, i, r),
    Je(e, r),
    e
  )
}
function Nl(e, t, n, r) {
  var i = t.current,
    o = We(),
    a = Zn(i)
  return (
    (n = Q0(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = _n(o, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Xn(i, t, a)),
    e !== null && (Vt(e, i, a, o), ms(e, i, a)),
    a
  )
}
function tl(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function Yh(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function sp(e, t) {
  Yh(e, t), (e = e.alternate) && Yh(e, t)
}
function ow() {
  return null
}
var X0 =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function lp(e) {
  this._internalRoot = e
}
Ll.prototype.render = lp.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(H(409))
  Nl(e, t, null, null)
}
Ll.prototype.unmount = lp.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    jr(function () {
      Nl(null, e, null, null)
    }),
      (t[bn] = null)
  }
}
function Ll(e) {
  this._internalRoot = e
}
Ll.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Tg()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < Fn.length && t !== 0 && t < Fn[n].priority; n++);
    Fn.splice(n, 0, e), n === 0 && Pg(e)
  }
}
function up(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function Ol(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function Zh() {}
function aw(e, t, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var o = r
      r = function () {
        var u = tl(a)
        o.call(u)
      }
    }
    var a = K0(t, r, e, 0, null, !1, !1, '', Zh)
    return (
      (e._reactRootContainer = a),
      (e[bn] = a.current),
      Do(e.nodeType === 8 ? e.parentNode : e),
      jr(),
      a
    )
  }
  for (; (i = e.lastChild); ) e.removeChild(i)
  if (typeof r == 'function') {
    var s = r
    r = function () {
      var u = tl(l)
      s.call(u)
    }
  }
  var l = ap(e, 0, !1, null, null, !1, !1, '', Zh)
  return (
    (e._reactRootContainer = l),
    (e[bn] = l.current),
    Do(e.nodeType === 8 ? e.parentNode : e),
    jr(function () {
      Nl(t, l, n, r)
    }),
    l
  )
}
function Al(e, t, n, r, i) {
  var o = n._reactRootContainer
  if (o) {
    var a = o
    if (typeof i == 'function') {
      var s = i
      i = function () {
        var l = tl(a)
        s.call(l)
      }
    }
    Nl(t, a, e, i)
  } else a = aw(n, t, e, i, r)
  return tl(a)
}
Eg = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = uo(t.pendingLanes)
        n !== 0 &&
          (kf(t, n | 1), Je(t, ye()), !(ne & 6) && ((Ni = ye() + 500), ar()))
      }
      break
    case 13:
      jr(function () {
        var r = Sn(e, 1)
        if (r !== null) {
          var i = We()
          Vt(r, e, 1, i)
        }
      }),
        sp(e, 1)
  }
}
Pf = function (e) {
  if (e.tag === 13) {
    var t = Sn(e, 134217728)
    if (t !== null) {
      var n = We()
      Vt(t, e, 134217728, n)
    }
    sp(e, 134217728)
  }
}
jg = function (e) {
  if (e.tag === 13) {
    var t = Zn(e),
      n = Sn(e, t)
    if (n !== null) {
      var r = We()
      Vt(n, e, t, r)
    }
    sp(e, t)
  }
}
Tg = function () {
  return ie
}
kg = function (e, t) {
  var n = ie
  try {
    return (ie = e), t()
  } finally {
    ie = n
  }
}
kc = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((wc(e, n), (t = n.name), n.type === 'radio' && t != null)) {
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
            var i = Cl(r)
            if (!i) throw Error(H(90))
            og(r), wc(r, i)
          }
        }
      }
      break
    case 'textarea':
      sg(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && mi(e, !!n.multiple, t, !1)
  }
}
hg = np
mg = jr
var sw = { usingClientEntryPoint: !1, Events: [pa, oi, Cl, fg, pg, np] },
  no = {
    findFiberByHostInstance: fr,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom'
  },
  lw = {
    bundleType: no.bundleType,
    version: no.version,
    rendererPackageName: no.rendererPackageName,
    rendererConfig: no.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Pn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = yg(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: no.findFiberByHostInstance || ow,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426'
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Wa = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!Wa.isDisabled && Wa.supportsFiber)
    try {
      ;(xl = Wa.inject(lw)), (nn = Wa)
    } catch {}
}
ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sw
ht.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!up(t)) throw Error(H(200))
  return iw(e, t, null, n)
}
ht.createRoot = function (e, t) {
  if (!up(e)) throw Error(H(299))
  var n = !1,
    r = '',
    i = X0
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = ap(e, 1, !1, null, null, n, !1, r, i)),
    (e[bn] = t.current),
    Do(e.nodeType === 8 ? e.parentNode : e),
    new lp(t)
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
  return (e = yg(t)), (e = e === null ? null : e.stateNode), e
}
ht.flushSync = function (e) {
  return jr(e)
}
ht.hydrate = function (e, t, n) {
  if (!Ol(t)) throw Error(H(200))
  return Al(null, e, t, !0, n)
}
ht.hydrateRoot = function (e, t, n) {
  if (!up(e)) throw Error(H(405))
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = '',
    a = X0
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = K0(t, null, e, 1, n ?? null, i, !1, o, a)),
    (e[bn] = t.current),
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
  return new Ll(t)
}
ht.render = function (e, t, n) {
  if (!Ol(t)) throw Error(H(200))
  return Al(null, e, t, !1, n)
}
ht.unmountComponentAtNode = function (e) {
  if (!Ol(e)) throw Error(H(40))
  return e._reactRootContainer
    ? (jr(function () {
        Al(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[bn] = null)
        })
      }),
      !0)
    : !1
}
ht.unstable_batchedUpdates = np
ht.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ol(n)) throw Error(H(200))
  if (e == null || e._reactInternals === void 0) throw Error(H(38))
  return Al(e, t, n, !1, r)
}
ht.version = '18.3.1-next-f1338f8080-20240426'
function Y0() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Y0)
    } catch (e) {
      console.error(e)
    }
}
Y0(), (Yv.exports = ht)
var cp = Yv.exports
const sd = mf(cp),
  uw = $v({ __proto__: null, default: sd }, [cp])
var Z0,
  Jh = cp
;(Z0 = Jh.createRoot), Jh.hydrateRoot
var J0 = { exports: {} },
  e1 = {}
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ma = k
function cw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var dw = typeof Object.is == 'function' ? Object.is : cw,
  fw = ma.useSyncExternalStore,
  pw = ma.useRef,
  hw = ma.useEffect,
  mw = ma.useMemo,
  vw = ma.useDebugValue
e1.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var o = pw(null)
  if (o.current === null) {
    var a = { hasValue: !1, value: null }
    o.current = a
  } else a = o.current
  o = mw(
    function () {
      function l(g) {
        if (!u) {
          if (((u = !0), (c = g), (g = r(g)), i !== void 0 && a.hasValue)) {
            var y = a.value
            if (i(y, g)) return (f = y)
          }
          return (f = g)
        }
        if (((y = f), dw(c, g))) return y
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
  var s = fw(e, o[0], o[1])
  return (
    hw(
      function () {
        ;(a.hasValue = !0), (a.value = s)
      },
      [s]
    ),
    vw(s),
    s
  )
}
J0.exports = e1
var gw = J0.exports,
  ut = 'default' in No ? te : No,
  em = Symbol.for('react-redux-context'),
  tm = typeof globalThis < 'u' ? globalThis : {}
function yw() {
  if (!ut.createContext) return {}
  const e = tm[em] ?? (tm[em] = new Map())
  let t = e.get(ut.createContext)
  return t || ((t = ut.createContext(null)), e.set(ut.createContext, t)), t
}
var nr = yw(),
  _w = () => {
    throw new Error('uSES not initialized!')
  }
function dp(e = nr) {
  return function () {
    return ut.useContext(e)
  }
}
var t1 = dp(),
  n1 = _w,
  xw = (e) => {
    n1 = e
  },
  ww = (e, t) => e === t
function bw(e = nr) {
  const t = e === nr ? t1 : dp(e),
    n = (r, i = {}) => {
      const { equalityFn: o = ww, devModeChecks: a = {} } =
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
        g = n1(l.addNestedSub, s.getState, u || s.getState, d, o)
      return ut.useDebugValue(g), g
    }
  return Object.assign(n, { withTypes: () => n }), n
}
var r1 = bw()
function i1(e) {
  e()
}
function Sw() {
  let e = null,
    t = null
  return {
    clear() {
      ;(e = null), (t = null)
    },
    notify() {
      i1(() => {
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
var nm = { notify() {}, get: () => [] }
function Cw(e, t) {
  let n,
    r = nm,
    i = 0,
    o = !1
  function a(_) {
    c()
    const x = r.subscribe(_)
    let m = !1
    return () => {
      m || ((m = !0), x(), f())
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
    i++, n || ((n = e.subscribe(l)), (r = Sw()))
  }
  function f() {
    i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = nm))
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
var Ew =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  jw = typeof navigator < 'u' && navigator.product === 'ReactNative',
  Tw = Ew || jw ? ut.useLayoutEffect : ut.useEffect
function rm(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
}
function So(e, t) {
  if (rm(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  const n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (let i = 0; i < n.length; i++)
    if (!Object.prototype.hasOwnProperty.call(t, n[i]) || !rm(e[n[i]], t[n[i]]))
      return !1
  return !0
}
function kw({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: i = 'once',
  identityFunctionCheck: o = 'once'
}) {
  const a = ut.useMemo(() => {
      const u = Cw(e)
      return {
        store: e,
        subscription: u,
        getServerState: r ? () => r : void 0,
        stabilityCheck: i,
        identityFunctionCheck: o
      }
    }, [e, r, i, o]),
    s = ut.useMemo(() => e.getState(), [e])
  Tw(() => {
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
  const l = t || nr
  return ut.createElement(l.Provider, { value: a }, n)
}
var Pw = kw
function o1(e = nr) {
  const t = e === nr ? t1 : dp(e),
    n = () => {
      const { store: r } = t()
      return r
    }
  return Object.assign(n, { withTypes: () => n }), n
}
var a1 = o1()
function Mw(e = nr) {
  const t = e === nr ? a1 : o1(e),
    n = () => t().dispatch
  return Object.assign(n, { withTypes: () => n }), n
}
var s1 = Mw(),
  Nw = i1
xw(gw.useSyncExternalStoreWithSelector)
let Lw = { data: '' },
  Ow = (e) =>
    typeof window == 'object'
      ? (
          (e ? e.querySelector('#_goober') : window._goober) ||
          Object.assign(
            (e || document.head).appendChild(document.createElement('style')),
            { innerHTML: ' ', id: '_goober' }
          )
        ).firstChild
      : e || Lw,
  Aw = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  Rw = /\/\*[^]*?\*\/|  +/g,
  im = /\n+/g,
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
  cn = {},
  l1 = (e) => {
    if (typeof e == 'object') {
      let t = ''
      for (let n in e) t += n + l1(e[n])
      return t
    }
    return e
  },
  Iw = (e, t, n, r, i) => {
    let o = l1(e),
      a =
        cn[o] ||
        (cn[o] = ((l) => {
          let u = 0,
            c = 11
          for (; u < l.length; ) c = (101 * c + l.charCodeAt(u++)) >>> 0
          return 'go' + c
        })(o))
    if (!cn[a]) {
      let l =
        o !== e
          ? e
          : ((u) => {
              let c,
                f,
                d = [{}]
              for (; (c = Aw.exec(u.replace(Rw, ''))); )
                c[4]
                  ? d.shift()
                  : c[3]
                  ? ((f = c[3].replace(im, ' ').trim()),
                    d.unshift((d[0][f] = d[0][f] || {})))
                  : (d[0][c[1]] = c[2].replace(im, ' ').trim())
              return d[0]
            })(e)
      cn[a] = $n(i ? { ['@keyframes ' + a]: l } : l, n ? '' : '.' + a)
    }
    let s = n && cn.g ? cn.g : null
    return (
      n && (cn.g = cn[a]),
      ((l, u, c, f) => {
        f
          ? (u.data = u.data.replace(f, l))
          : u.data.indexOf(l) === -1 && (u.data = c ? l + u.data : u.data + l)
      })(cn[a], t, r, s),
      a
    )
  },
  Fw = (e, t, n) =>
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
function Rl(e) {
  let t = this || {},
    n = e.call ? e(t.p) : e
  return Iw(
    n.unshift
      ? n.raw
        ? Fw(n, [].slice.call(arguments, 1), t.p)
        : n.reduce((r, i) => Object.assign(r, i && i.call ? i(t.p) : i), {})
      : n,
    Ow(t.target),
    t.g,
    t.o,
    t.k
  )
}
let u1, ld, ud
Rl.bind({ g: 1 })
let En = Rl.bind({ k: 1 })
function zw(e, t, n, r) {
  ;($n.p = t), (u1 = e), (ld = n), (ud = r)
}
function sr(e, t) {
  let n = this || {}
  return function () {
    let r = arguments
    function i(o, a) {
      let s = Object.assign({}, o),
        l = s.className || i.className
      ;(n.p = Object.assign({ theme: ld && ld() }, s)),
        (n.o = / *go\d+/.test(l)),
        (s.className = Rl.apply(n, r) + (l ? ' ' + l : ''))
      let u = e
      return (
        e[0] && ((u = s.as || e), delete s.as), ud && u[0] && ud(s), u1(u, s)
      )
    }
    return i
  }
}
var $w = (e) => typeof e == 'function',
  nl = (e, t) => ($w(e) ? e(t) : e),
  Dw = (() => {
    let e = 0
    return () => (++e).toString()
  })(),
  c1 = (() => {
    let e
    return () => {
      if (e === void 0 && typeof window < 'u') {
        let t = matchMedia('(prefers-reduced-motion: reduce)')
        e = !t || t.matches
      }
      return e
    }
  })(),
  Vw = 20,
  bs = new Map(),
  Bw = 1e3,
  om = (e) => {
    if (bs.has(e)) return
    let t = setTimeout(() => {
      bs.delete(e), Ir({ type: 4, toastId: e })
    }, Bw)
    bs.set(e, t)
  },
  Hw = (e) => {
    let t = bs.get(e)
    t && clearTimeout(t)
  },
  cd = (e, t) => {
    switch (t.type) {
      case 0:
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, Vw) }
      case 1:
        return (
          t.toast.id && Hw(t.toast.id),
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
          ? cd(e, { type: 1, toast: n })
          : cd(e, { type: 0, toast: n })
      case 3:
        let { toastId: r } = t
        return (
          r
            ? om(r)
            : e.toasts.forEach((o) => {
                om(o.id)
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
  Ss = [],
  Cs = { toasts: [], pausedAt: void 0 },
  Ir = (e) => {
    ;(Cs = cd(Cs, e)),
      Ss.forEach((t) => {
        t(Cs)
      })
  },
  qw = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  Ww = (e = {}) => {
    let [t, n] = k.useState(Cs)
    k.useEffect(
      () => (
        Ss.push(n),
        () => {
          let i = Ss.indexOf(n)
          i > -1 && Ss.splice(i, 1)
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
          qw[i.type],
        style: {
          ...e.style,
          ...((a = e[i.type]) == null ? void 0 : a.style),
          ...i.style
        }
      }
    })
    return { ...t, toasts: r }
  },
  Uw = (e, t = 'blank', n) => ({
    createdAt: Date.now(),
    visible: !0,
    type: t,
    ariaProps: { role: 'status', 'aria-live': 'polite' },
    message: e,
    pauseDuration: 0,
    ...n,
    id: (n == null ? void 0 : n.id) || Dw()
  }),
  va = (e) => (t, n) => {
    let r = Uw(t, e, n)
    return Ir({ type: 2, toast: r }), r.id
  },
  Ct = (e, t) => va('blank')(e, t)
Ct.error = va('error')
Ct.success = va('success')
Ct.loading = va('loading')
Ct.custom = va('custom')
Ct.dismiss = (e) => {
  Ir({ type: 3, toastId: e })
}
Ct.remove = (e) => Ir({ type: 4, toastId: e })
Ct.promise = (e, t, n) => {
  let r = Ct.loading(t.loading, { ...n, ...(n == null ? void 0 : n.loading) })
  return (
    e
      .then(
        (i) => (
          Ct.success(nl(t.success, i), {
            id: r,
            ...n,
            ...(n == null ? void 0 : n.success)
          }),
          i
        )
      )
      .catch((i) => {
        Ct.error(nl(t.error, i), {
          id: r,
          ...n,
          ...(n == null ? void 0 : n.error)
        })
      }),
    e
  )
}
var Gw = (e, t) => {
    Ir({ type: 1, toast: { id: e, height: t } })
  },
  Qw = () => {
    Ir({ type: 5, time: Date.now() })
  },
  Kw = (e) => {
    let { toasts: t, pausedAt: n } = Ww(e)
    k.useEffect(() => {
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
    let r = k.useCallback(() => {
        n && Ir({ type: 6, time: Date.now() })
      }, [n]),
      i = k.useCallback(
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
        updateHeight: Gw,
        startPause: Qw,
        endPause: r,
        calculateOffset: i
      }
    }
  },
  Xw = En`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  Yw = En`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  Zw = En`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  Jw = sr('div')`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || '#ff4b4b'};
  position: relative;
  transform: rotate(45deg);

  animation: ${Xw} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Yw} 0.15s ease-out forwards;
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
    animation: ${Zw} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  eb = En`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  tb = sr('div')`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || '#e0e0e0'};
  border-right-color: ${(e) => e.primary || '#616161'};
  animation: ${eb} 1s linear infinite;
`,
  nb = En`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  rb = En`
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
  ib = sr('div')`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || '#61d345'};
  position: relative;
  transform: rotate(45deg);

  animation: ${nb} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${rb} 0.2s ease-out forwards;
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
  ob = sr('div')`
  position: absolute;
`,
  ab = sr('div')`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  sb = En`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  lb = sr('div')`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${sb} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  ub = ({ toast: e }) => {
    let { icon: t, type: n, iconTheme: r } = e
    return t !== void 0
      ? typeof t == 'string'
        ? k.createElement(lb, null, t)
        : t
      : n === 'blank'
      ? null
      : k.createElement(
          ab,
          null,
          k.createElement(tb, { ...r }),
          n !== 'loading' &&
            k.createElement(
              ob,
              null,
              n === 'error'
                ? k.createElement(Jw, { ...r })
                : k.createElement(ib, { ...r })
            )
        )
  },
  cb = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  db = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`,
  fb = '0%{opacity:0;} 100%{opacity:1;}',
  pb = '0%{opacity:1;} 100%{opacity:0;}',
  hb = sr('div')`
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
  mb = sr('div')`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  vb = (e, t) => {
    let n = e.includes('top') ? 1 : -1,
      [r, i] = c1() ? [fb, pb] : [cb(n), db(n)]
    return {
      animation: t
        ? `${En(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${En(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`
    }
  },
  gb = k.memo(({ toast: e, position: t, style: n, children: r }) => {
    let i = e.height
        ? vb(e.position || t || 'top-center', e.visible)
        : { opacity: 0 },
      o = k.createElement(ub, { toast: e }),
      a = k.createElement(mb, { ...e.ariaProps }, nl(e.message, e))
    return k.createElement(
      hb,
      { className: e.className, style: { ...i, ...n, ...e.style } },
      typeof r == 'function'
        ? r({ icon: o, message: a })
        : k.createElement(k.Fragment, null, o, a)
    )
  })
zw(k.createElement)
var yb = ({
    id: e,
    className: t,
    style: n,
    onHeightUpdate: r,
    children: i
  }) => {
    let o = k.useCallback(
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
    return k.createElement('div', { ref: o, className: t, style: n }, i)
  },
  _b = (e, t) => {
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
      transition: c1() ? void 0 : 'all 230ms cubic-bezier(.21,1.02,.73,1)',
      transform: `translateY(${t * (n ? 1 : -1)}px)`,
      ...r,
      ...i
    }
  },
  xb = Rl`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  Ua = 16,
  wb = ({
    reverseOrder: e,
    position: t = 'top-center',
    toastOptions: n,
    gutter: r,
    children: i,
    containerStyle: o,
    containerClassName: a
  }) => {
    let { toasts: s, handlers: l } = Kw(n)
    return k.createElement(
      'div',
      {
        style: {
          position: 'fixed',
          zIndex: 9999,
          top: Ua,
          left: Ua,
          right: Ua,
          bottom: Ua,
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
          d = _b(c, f)
        return k.createElement(
          yb,
          {
            id: u.id,
            key: u.id,
            onHeightUpdate: l.updateHeight,
            className: u.visible ? xb : '',
            style: d
          },
          u.type === 'custom'
            ? nl(u.message, u)
            : i
            ? i(u)
            : k.createElement(gb, { toast: u, position: c })
        )
      })
    )
  }
const bb = '_opt_search_order_container_nnmpx_3',
  Sb = '_loginComponent_nnmpx_19',
  Cb = '_loginForm_nnmpx_41',
  Eb = '_formContainer_nnmpx_55',
  jb = '_title_nnmpx_65',
  Tb = '_subtitle_nnmpx_77',
  kb = '_form_nnmpx_55',
  Pb = '_inputGroup_nnmpx_95',
  Mb = '_inputField_nnmpx_103',
  Nb = '_signInButton_nnmpx_131',
  Lb = '_loginBanner_nnmpx_165',
  Ob = '_bannerImage_nnmpx_179',
  Ab = '_buttonGroup_nnmpx_247',
  Be = {
    opt_search_order_container: bb,
    loginComponent: Sb,
    loginForm: Cb,
    formContainer: Eb,
    title: jb,
    subtitle: Tb,
    form: kb,
    inputGroup: Pb,
    inputField: Mb,
    signInButton: Nb,
    loginBanner: Lb,
    bannerImage: Ob,
    buttonGroup: Ab
  }
function Me(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `
}
var Rb = (typeof Symbol == 'function' && Symbol.observable) || '@@observable',
  am = Rb,
  Ou = () => Math.random().toString(36).substring(7).split('').join('.'),
  Ib = {
    INIT: `@@redux/INIT${Ou()}`,
    REPLACE: `@@redux/REPLACE${Ou()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Ou()}`
  },
  rl = Ib
function on(e) {
  if (typeof e != 'object' || e === null) return !1
  let t = e
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t)
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null
}
function d1(e, t, n) {
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
    return n(d1)(e, t)
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
      o.forEach((x, m) => {
        a.set(m, x)
      }))
  }
  function c() {
    if (l) throw new Error(Me(3))
    return i
  }
  function f(x) {
    if (typeof x != 'function') throw new Error(Me(4))
    if (l) throw new Error(Me(5))
    let m = !0
    u()
    const p = s++
    return (
      a.set(p, x),
      function () {
        if (m) {
          if (l) throw new Error(Me(6))
          ;(m = !1), u(), a.delete(p), (o = null)
        }
      }
    )
  }
  function d(x) {
    if (!on(x)) throw new Error(Me(7))
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
    ;(r = x), d({ type: rl.REPLACE })
  }
  function y() {
    const x = f
    return {
      subscribe(m) {
        if (typeof m != 'object' || m === null) throw new Error(Me(11))
        function p() {
          const w = m
          w.next && w.next(c())
        }
        return p(), { unsubscribe: x(p) }
      },
      [am]() {
        return this
      }
    }
  }
  return (
    d({ type: rl.INIT }),
    { dispatch: d, subscribe: f, getState: c, replaceReducer: g, [am]: y }
  )
}
function Fb(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t]
    if (typeof n(void 0, { type: rl.INIT }) > 'u') throw new Error(Me(12))
    if (typeof n(void 0, { type: rl.PROBE_UNKNOWN_ACTION() }) > 'u')
      throw new Error(Me(13))
  })
}
function f1(e) {
  const t = Object.keys(e),
    n = {}
  for (let o = 0; o < t.length; o++) {
    const a = t[o]
    typeof e[a] == 'function' && (n[a] = e[a])
  }
  const r = Object.keys(n)
  let i
  try {
    Fb(n)
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
function il(...e) {
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
function zb(...e) {
  return (t) => (n, r) => {
    const i = t(n, r)
    let o = () => {
      throw new Error(Me(15))
    }
    const a = { getState: i.getState, dispatch: (l, ...u) => o(l, ...u) },
      s = e.map((l) => l(a))
    return (o = il(...s)(i.dispatch)), { ...i, dispatch: o }
  }
}
function p1(e) {
  return on(e) && 'type' in e && typeof e.type == 'string'
}
var fp = Symbol.for('immer-nothing'),
  Co = Symbol.for('immer-draftable'),
  et = Symbol.for('immer-state')
function Le(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  )
}
var Tr = Object.getPrototypeOf
function an(e) {
  return !!e && !!e[et]
}
function Ut(e) {
  var t
  return e
    ? h1(e) ||
        Array.isArray(e) ||
        !!e[Co] ||
        !!((t = e.constructor) != null && t[Co]) ||
        ga(e) ||
        ya(e)
    : !1
}
var $b = Object.prototype.constructor.toString()
function h1(e) {
  if (!e || typeof e != 'object') return !1
  const t = Tr(e)
  if (t === null) return !0
  const n = Object.hasOwnProperty.call(t, 'constructor') && t.constructor
  return n === Object
    ? !0
    : typeof n == 'function' && Function.toString.call(n) === $b
}
function Db(e) {
  return an(e) || Le(15, e), e[et].base_
}
function Ko(e, t) {
  kr(e) === 0
    ? Reflect.ownKeys(e).forEach((n) => {
        t(n, e[n], e)
      })
    : e.forEach((n, r) => t(r, n, e))
}
function kr(e) {
  const t = e[et]
  return t ? t.type_ : Array.isArray(e) ? 1 : ga(e) ? 2 : ya(e) ? 3 : 0
}
function Xo(e, t) {
  return kr(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
}
function Au(e, t) {
  return kr(e) === 2 ? e.get(t) : e[t]
}
function m1(e, t, n) {
  const r = kr(e)
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n)
}
function Vb(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t
}
function ga(e) {
  return e instanceof Map
}
function ya(e) {
  return e instanceof Set
}
function cr(e) {
  return e.copy_ || e.base_
}
function dd(e, t) {
  if (ga(e)) return new Map(e)
  if (ya(e)) return new Set(e)
  if (Array.isArray(e)) return Array.prototype.slice.call(e)
  const n = h1(e)
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
function pp(e, t = !1) {
  return (
    Il(e) ||
      an(e) ||
      !Ut(e) ||
      (kr(e) > 1 && (e.set = e.add = e.clear = e.delete = Bb),
      Object.freeze(e),
      t && Object.entries(e).forEach(([n, r]) => pp(r, !0))),
    e
  )
}
function Bb() {
  Le(2)
}
function Il(e) {
  return Object.isFrozen(e)
}
var fd = {}
function Pr(e) {
  const t = fd[e]
  return t || Le(0, e), t
}
function Hb(e, t) {
  fd[e] || (fd[e] = t)
}
var Yo
function v1() {
  return Yo
}
function qb(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  }
}
function sm(e, t) {
  t &&
    (Pr('Patches'),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t))
}
function pd(e) {
  hd(e), e.drafts_.forEach(Wb), (e.drafts_ = null)
}
function hd(e) {
  e === Yo && (Yo = e.parent_)
}
function lm(e) {
  return (Yo = qb(Yo, e))
}
function Wb(e) {
  const t = e[et]
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0)
}
function um(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length
  const n = t.drafts_[0]
  return (
    e !== void 0 && e !== n
      ? (n[et].modified_ && (pd(t), Le(4)),
        Ut(e) && ((e = ol(t, e)), t.parent_ || al(t, e)),
        t.patches_ &&
          Pr('Patches').generateReplacementPatches_(
            n[et].base_,
            e,
            t.patches_,
            t.inversePatches_
          ))
      : (e = ol(t, n, [])),
    pd(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== fp ? e : void 0
  )
}
function ol(e, t, n) {
  if (Il(t)) return t
  const r = t[et]
  if (!r) return Ko(t, (i, o) => cm(e, r, t, i, o, n)), t
  if (r.scope_ !== e) return t
  if (!r.modified_) return al(e, r.base_, !0), r.base_
  if (!r.finalized_) {
    ;(r.finalized_ = !0), r.scope_.unfinalizedDrafts_--
    const i = r.copy_
    let o = i,
      a = !1
    r.type_ === 3 && ((o = new Set(i)), i.clear(), (a = !0)),
      Ko(o, (s, l) => cm(e, r, i, s, l, n, a)),
      al(e, i, !1),
      n &&
        e.patches_ &&
        Pr('Patches').generatePatches_(r, n, e.patches_, e.inversePatches_)
  }
  return r.copy_
}
function cm(e, t, n, r, i, o, a) {
  if (an(i)) {
    const s =
        o && t && t.type_ !== 3 && !Xo(t.assigned_, r) ? o.concat(r) : void 0,
      l = ol(e, i, s)
    if ((m1(n, r, l), an(l))) e.canAutoFreeze_ = !1
    else return
  } else a && n.add(i)
  if (Ut(i) && !Il(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return
    ol(e, i),
      (!t || !t.scope_.parent_) &&
        typeof r != 'symbol' &&
        Object.prototype.propertyIsEnumerable.call(n, r) &&
        al(e, i)
  }
}
function al(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && pp(t, n)
}
function Ub(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : v1(),
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
    o = hp
  n && ((i = [r]), (o = Zo))
  const { revoke: a, proxy: s } = Proxy.revocable(i, o)
  return (r.draft_ = s), (r.revoke_ = a), s
}
var hp = {
    get(e, t) {
      if (t === et) return e
      const n = cr(e)
      if (!Xo(n, t)) return Gb(e, n, t)
      const r = n[t]
      return e.finalized_ || !Ut(r)
        ? r
        : r === Ru(e.base_, t)
        ? (Iu(e), (e.copy_[t] = vd(r, e)))
        : r
    },
    has(e, t) {
      return t in cr(e)
    },
    ownKeys(e) {
      return Reflect.ownKeys(cr(e))
    },
    set(e, t, n) {
      const r = g1(cr(e), t)
      if (r != null && r.set) return r.set.call(e.draft_, n), !0
      if (!e.modified_) {
        const i = Ru(cr(e), t),
          o = i == null ? void 0 : i[et]
        if (o && o.base_ === n)
          return (e.copy_[t] = n), (e.assigned_[t] = !1), !0
        if (Vb(n, i) && (n !== void 0 || Xo(e.base_, t))) return !0
        Iu(e), md(e)
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
        Ru(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), Iu(e), md(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      )
    },
    getOwnPropertyDescriptor(e, t) {
      const n = cr(e),
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
      Le(11)
    },
    getPrototypeOf(e) {
      return Tr(e.base_)
    },
    setPrototypeOf() {
      Le(12)
    }
  },
  Zo = {}
Ko(hp, (e, t) => {
  Zo[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments)
  }
})
Zo.deleteProperty = function (e, t) {
  return Zo.set.call(this, e, t, void 0)
}
Zo.set = function (e, t, n) {
  return hp.set.call(this, e[0], t, n, e[0])
}
function Ru(e, t) {
  const n = e[et]
  return (n ? cr(n) : e)[t]
}
function Gb(e, t, n) {
  var i
  const r = g1(t, n)
  return r
    ? 'value' in r
      ? r.value
      : (i = r.get) == null
      ? void 0
      : i.call(e.draft_)
    : void 0
}
function g1(e, t) {
  if (!(t in e)) return
  let n = Tr(e)
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t)
    if (r) return r
    n = Tr(n)
  }
}
function md(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && md(e.parent_))
}
function Iu(e) {
  e.copy_ || (e.copy_ = dd(e.base_, e.scope_.immer_.useStrictShallowCopy_))
}
var Qb = class {
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
        typeof n != 'function' && Le(6),
          r !== void 0 && typeof r != 'function' && Le(7)
        let i
        if (Ut(t)) {
          const o = lm(this),
            a = vd(t, void 0)
          let s = !0
          try {
            ;(i = n(a)), (s = !1)
          } finally {
            s ? pd(o) : hd(o)
          }
          return sm(o, r), um(i, o)
        } else if (!t || typeof t != 'object') {
          if (
            ((i = n(t)),
            i === void 0 && (i = t),
            i === fp && (i = void 0),
            this.autoFreeze_ && pp(i, !0),
            r)
          ) {
            const o = [],
              a = []
            Pr('Patches').generateReplacementPatches_(t, i, o, a), r(o, a)
          }
          return i
        } else Le(1, t)
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
    Ut(e) || Le(8), an(e) && (e = Kb(e))
    const t = lm(this),
      n = vd(e, void 0)
    return (n[et].isManual_ = !0), hd(t), n
  }
  finishDraft(e, t) {
    const n = e && e[et]
    ;(!n || !n.isManual_) && Le(9)
    const { scope_: r } = n
    return sm(r, t), um(void 0, r)
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
    const r = Pr('Patches').applyPatches_
    return an(e) ? r(e, t) : this.produce(e, (i) => r(i, t))
  }
}
function vd(e, t) {
  const n = ga(e)
    ? Pr('MapSet').proxyMap_(e, t)
    : ya(e)
    ? Pr('MapSet').proxySet_(e, t)
    : Ub(e, t)
  return (t ? t.scope_ : v1()).drafts_.push(n), n
}
function Kb(e) {
  return an(e) || Le(10, e), y1(e)
}
function y1(e) {
  if (!Ut(e) || Il(e)) return e
  const t = e[et]
  let n
  if (t) {
    if (!t.modified_) return t.base_
    ;(t.finalized_ = !0), (n = dd(e, t.scope_.immer_.useStrictShallowCopy_))
  } else n = dd(e, !0)
  return (
    Ko(n, (r, i) => {
      m1(n, r, y1(i))
    }),
    t && (t.finalized_ = !1),
    n
  )
}
function Xb() {
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
    let { base_: x, assigned_: m } = d,
      p = d.copy_
    p.length < x.length && (([x, p] = [p, x]), ([y, _] = [_, y]))
    for (let v = 0; v < x.length; v++)
      if (m[v] && p[v] !== x[v]) {
        const w = g.concat([v])
        y.push({ op: t, path: w, value: f(p[v]) }),
          _.push({ op: t, path: w, value: f(x[v]) })
      }
    for (let v = x.length; v < p.length; v++) {
      const w = g.concat([v])
      y.push({ op: n, path: w, value: f(p[v]) })
    }
    for (let v = p.length - 1; x.length <= v; --v) {
      const w = g.concat([v])
      _.push({ op: r, path: w })
    }
  }
  function a(d, g, y, _) {
    const { base_: x, copy_: m } = d
    Ko(d.assigned_, (p, v) => {
      const w = Au(x, p),
        b = Au(m, p),
        C = v ? (Xo(x, p) ? t : n) : r
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
    let { base_: x, copy_: m } = d,
      p = 0
    x.forEach((v) => {
      if (!m.has(v)) {
        const w = g.concat([p])
        y.push({ op: r, path: w, value: v }),
          _.unshift({ op: n, path: w, value: v })
      }
      p++
    }),
      (p = 0),
      m.forEach((v) => {
        if (!x.has(v)) {
          const w = g.concat([p])
          y.push({ op: n, path: w, value: v }),
            _.unshift({ op: r, path: w, value: v })
        }
        p++
      })
  }
  function l(d, g, y, _) {
    y.push({ op: t, path: [], value: g === fp ? void 0 : g }),
      _.push({ op: t, path: [], value: d })
  }
  function u(d, g) {
    return (
      g.forEach((y) => {
        const { path: _, op: x } = y
        let m = d
        for (let b = 0; b < _.length - 1; b++) {
          const C = kr(m)
          let S = _[b]
          typeof S != 'string' && typeof S != 'number' && (S = '' + S),
            (C === 0 || C === 1) &&
              (S === '__proto__' || S === 'constructor') &&
              Le(19),
            typeof m == 'function' && S === 'prototype' && Le(19),
            (m = Au(m, S)),
            typeof m != 'object' && Le(18, _.join('/'))
        }
        const p = kr(m),
          v = c(y.value),
          w = _[_.length - 1]
        switch (x) {
          case t:
            switch (p) {
              case 2:
                return m.set(w, v)
              case 3:
                Le(16)
              default:
                return (m[w] = v)
            }
          case n:
            switch (p) {
              case 1:
                return w === '-' ? m.push(v) : m.splice(w, 0, v)
              case 2:
                return m.set(w, v)
              case 3:
                return m.add(v)
              default:
                return (m[w] = v)
            }
          case r:
            switch (p) {
              case 1:
                return m.splice(w, 1)
              case 2:
                return m.delete(w)
              case 3:
                return m.delete(y.value)
              default:
                return delete m[w]
            }
          default:
            Le(17, x)
        }
      }),
      d
    )
  }
  function c(d) {
    if (!Ut(d)) return d
    if (Array.isArray(d)) return d.map(c)
    if (ga(d))
      return new Map(Array.from(d.entries()).map(([y, _]) => [y, c(_)]))
    if (ya(d)) return new Set(Array.from(d).map(c))
    const g = Object.create(Tr(d))
    for (const y in d) g[y] = c(d[y])
    return Xo(d, Co) && (g[Co] = d[Co]), g
  }
  function f(d) {
    return an(d) ? c(d) : d
  }
  Hb('Patches', {
    applyPatches_: u,
    generatePatches_: i,
    generateReplacementPatches_: l
  })
}
var pt = new Qb(),
  _a = pt.produce,
  _1 = pt.produceWithPatches.bind(pt)
pt.setAutoFreeze.bind(pt)
pt.setUseStrictShallowCopy.bind(pt)
var dm = pt.applyPatches.bind(pt)
pt.createDraft.bind(pt)
pt.finishDraft.bind(pt)
function Yb(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != 'function') throw new TypeError(t)
}
function Zb(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != 'object') throw new TypeError(t)
}
function Jb(
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
var fm = (e) => (Array.isArray(e) ? e : [e])
function eS(e) {
  const t = Array.isArray(e[0]) ? e[0] : e
  return (
    Jb(
      t,
      'createSelector expects all input-selectors to be functions, but received the following types: '
    ),
    t
  )
}
function tS(e, t) {
  const n = [],
    { length: r } = e
  for (let i = 0; i < r; i++) n.push(e[i].apply(null, t))
  return n
}
var nS = class {
    constructor(e) {
      this.value = e
    }
    deref() {
      return this.value
    }
  },
  rS = typeof WeakRef < 'u' ? WeakRef : nS,
  iS = 0,
  pm = 1
function Ga() {
  return { s: iS, v: void 0, o: null, p: null }
}
function sl(e, t = {}) {
  let n = Ga()
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
        x === void 0 ? ((s = Ga()), _.set(y, s)) : (s = x)
      } else {
        let _ = s.p
        _ === null && (s.p = _ = new Map())
        const x = _.get(y)
        x === void 0 ? ((s = Ga()), _.set(y, s)) : (s = x)
      }
    }
    const u = s
    let c
    if (s.s === pm) c = s.v
    else if (((c = e.apply(null, arguments)), o++, r)) {
      const d =
        ((f = i == null ? void 0 : i.deref) == null ? void 0 : f.call(i)) ?? i
      d != null && r(d, c) && ((c = d), o !== 0 && o--),
        (i =
          (typeof c == 'object' && c !== null) || typeof c == 'function'
            ? new rS(c)
            : c)
    }
    return (u.s = pm), (u.v = c), c
  }
  return (
    (a.clearCache = () => {
      ;(n = Ga()), a.resetResultsCount()
    }),
    (a.resultsCount = () => o),
    (a.resetResultsCount = () => {
      o = 0
    }),
    a
  )
}
function oS(e, ...t) {
  const n = typeof e == 'function' ? { memoize: e, memoizeOptions: t } : e,
    r = (...i) => {
      let o = 0,
        a = 0,
        s,
        l = {},
        u = i.pop()
      typeof u == 'object' && ((l = u), (u = i.pop())),
        Yb(
          u,
          `createSelector expects an output function after the inputs, but received: [${typeof u}]`
        )
      const c = { ...n, ...l },
        {
          memoize: f,
          memoizeOptions: d = [],
          argsMemoize: g = sl,
          argsMemoizeOptions: y = [],
          devModeChecks: _ = {}
        } = c,
        x = fm(d),
        m = fm(y),
        p = eS(i),
        v = f(function () {
          return o++, u.apply(null, arguments)
        }, ...x),
        w = g(function () {
          a++
          const C = tS(p, arguments)
          return (s = v.apply(null, C)), s
        }, ...m)
      return Object.assign(w, {
        resultFunc: u,
        memoizedResultFunc: v,
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
var mp = oS(sl),
  aS = Object.assign(
    (e, t = mp) => {
      Zb(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
      )
      const n = Object.keys(e),
        r = n.map((o) => e[o])
      return t(r, (...o) => o.reduce((a, s, l) => ((a[n[l]] = s), a), {}))
    },
    { withTypes: () => aS }
  )
function x1(e) {
  return ({ dispatch: n, getState: r }) =>
    (i) =>
    (o) =>
      typeof o == 'function' ? o(n, r, e) : i(o)
}
var sS = x1(),
  lS = x1,
  uS =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object'
              ? il
              : il.apply(null, arguments)
        },
  cS = (e) => e && typeof e.match == 'function'
function Bt(e, t) {
  function n(...r) {
    if (t) {
      let i = t(...r)
      if (!i) throw new Error(jt(0))
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
    (n.match = (r) => p1(r) && r.type === e),
    n
  )
}
var w1 = class fo extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, fo.prototype)
  }
  static get [Symbol.species]() {
    return fo
  }
  concat(...t) {
    return super.concat.apply(this, t)
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new fo(...t[0].concat(this))
      : new fo(...t.concat(this))
  }
}
function hm(e) {
  return Ut(e) ? _a(e, () => {}) : e
}
function mm(e, t, n) {
  if (e.has(t)) {
    let i = e.get(t)
    return n.update && ((i = n.update(i, t, e)), e.set(t, i)), i
  }
  if (!n.insert) throw new Error(jt(10))
  const r = n.insert(t, e)
  return e.set(t, r), r
}
function dS(e) {
  return typeof e == 'boolean'
}
var fS = () =>
    function (t) {
      const {
        thunk: n = !0,
        immutableCheck: r = !0,
        serializableCheck: i = !0,
        actionCreatorCheck: o = !0
      } = t ?? {}
      let a = new w1()
      return n && (dS(n) ? a.push(sS) : a.push(lS(n.extraArgument))), a
    },
  mr = 'RTK_autoBatch',
  ro = () => (e) => ({ payload: e, meta: { [mr]: !0 } }),
  b1 = (e) => (t) => {
    setTimeout(t, e)
  },
  pS =
    typeof window < 'u' && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : b1(10),
  hS =
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
            ? pS
            : e.type === 'callback'
            ? e.queueNotification
            : b1(e.timeout),
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
              (i = !((f = c == null ? void 0 : c.meta) != null && f[mr])),
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
  mS = (e) =>
    function (n) {
      const { autoBatch: r = !0 } = n ?? {}
      let i = new w1(e)
      return r && i.push(hS(typeof r == 'object' ? r : void 0)), i
    }
function vS(e) {
  const t = fS(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: i = !0,
      preloadedState: o = void 0,
      enhancers: a = void 0
    } = e || {}
  let s
  if (typeof n == 'function') s = n
  else if (on(n)) s = f1(n)
  else throw new Error(jt(1))
  let l
  typeof r == 'function' ? (l = r(t)) : (l = t())
  let u = il
  i && (u = uS({ trace: !1, ...(typeof i == 'object' && i) }))
  const c = zb(...l),
    f = mS(c)
  let d = typeof a == 'function' ? a(f) : f()
  const g = u(...d)
  return d1(s, o, g)
}
function S1(e) {
  const t = {},
    n = []
  let r
  const i = {
    addCase(o, a) {
      const s = typeof o == 'string' ? o : o.type
      if (!s) throw new Error(jt(28))
      if (s in t) throw new Error(jt(29))
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
function gS(e) {
  return typeof e == 'function'
}
function yS(e, t) {
  let [n, r, i] = S1(t),
    o
  if (gS(e)) o = () => hm(e())
  else {
    const s = hm(e)
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
          if (an(c)) {
            const g = f(c, l)
            return g === void 0 ? c : g
          } else {
            if (Ut(c)) return _a(c, (d) => f(d, l))
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
var C1 = (e, t) => (cS(e) ? e.match(t) : e(t))
function jn(...e) {
  return (t) => e.some((n) => C1(n, t))
}
function Eo(...e) {
  return (t) => e.every((n) => C1(n, t))
}
function Fl(e, t) {
  if (!e || !e.meta) return !1
  const n = typeof e.meta.requestId == 'string',
    r = t.indexOf(e.meta.requestStatus) > -1
  return n && r
}
function xa(e) {
  return (
    typeof e[0] == 'function' &&
    'pending' in e[0] &&
    'fulfilled' in e[0] &&
    'rejected' in e[0]
  )
}
function vp(...e) {
  return e.length === 0
    ? (t) => Fl(t, ['pending'])
    : xa(e)
    ? jn(...e.map((t) => t.pending))
    : vp()(e[0])
}
function Li(...e) {
  return e.length === 0
    ? (t) => Fl(t, ['rejected'])
    : xa(e)
    ? jn(...e.map((t) => t.rejected))
    : Li()(e[0])
}
function zl(...e) {
  const t = (n) => n && n.meta && n.meta.rejectedWithValue
  return e.length === 0 ? Eo(Li(...e), t) : xa(e) ? Eo(Li(...e), t) : zl()(e[0])
}
function rr(...e) {
  return e.length === 0
    ? (t) => Fl(t, ['fulfilled'])
    : xa(e)
    ? jn(...e.map((t) => t.fulfilled))
    : rr()(e[0])
}
function gd(...e) {
  return e.length === 0
    ? (t) => Fl(t, ['pending', 'fulfilled', 'rejected'])
    : xa(e)
    ? jn(...e.flatMap((t) => [t.pending, t.rejected, t.fulfilled]))
    : gd()(e[0])
}
var _S = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW',
  gp = (e = 21) => {
    let t = '',
      n = e
    for (; n--; ) t += _S[(Math.random() * 64) | 0]
    return t
  },
  xS = ['name', 'message', 'stack', 'code'],
  Fu = class {
    constructor(e, t) {
      au(this, '_type')
      ;(this.payload = e), (this.meta = t)
    }
  },
  vm = class {
    constructor(e, t) {
      au(this, '_type')
      ;(this.payload = e), (this.meta = t)
    }
  },
  wS = (e) => {
    if (typeof e == 'object' && e !== null) {
      const t = {}
      for (const n of xS) typeof e[n] == 'string' && (t[n] = e[n])
      return t
    }
    return { message: String(e) }
  },
  gm = (() => {
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
          const d = r != null && r.idGenerator ? r.idGenerator(l) : gp(),
            g = new AbortController()
          let y, _
          function x(p) {
            ;(_ = p), g.abort()
          }
          const m = (async function () {
            var w, b
            let p
            try {
              let C =
                (w = r == null ? void 0 : r.condition) == null
                  ? void 0
                  : w.call(r, l, { getState: c, extra: f })
              if ((SS(C) && (C = await C), C === !1 || g.signal.aborted))
                throw {
                  name: 'ConditionError',
                  message: 'Aborted due to condition callback returning false.'
                }
              const S = new Promise((E, j) => {
                ;(y = () => {
                  j({ name: 'AbortError', message: _ || 'Aborted' })
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
                      rejectWithValue: (E, j) => new Fu(E, j),
                      fulfillWithValue: (E, j) => new vm(E, j)
                    })
                  ).then((E) => {
                    if (E instanceof Fu) throw E
                    return E instanceof vm
                      ? i(E.payload, d, l, E.meta)
                      : i(E, d, l)
                  })
                ]))
            } catch (C) {
              p =
                C instanceof Fu ? a(null, d, l, C.payload, C.meta) : a(C, d, l)
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
          return Object.assign(m, {
            abort: x,
            requestId: d,
            arg: l,
            unwrap() {
              return m.then(bS)
            }
          })
        }
      }
      return Object.assign(s, {
        pending: o,
        rejected: a,
        fulfilled: i,
        settled: jn(a, i),
        typePrefix: t
      })
    }
    return (e.withTypes = () => e), e
  })()
function bS(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload
  if (e.error) throw e.error
  return e.payload
}
function SS(e) {
  return e !== null && typeof e == 'object' && typeof e.then == 'function'
}
var CS = Symbol.for('rtk-slice-createasyncthunk')
function ES(e, t) {
  return `${e}/${t}`
}
function jS({ creators: e } = {}) {
  var n
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[CS]
  return function (i) {
    const { name: o, reducerPath: a = o } = i
    if (!o) throw new Error(jt(11))
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
        addCase(v, w) {
          const b = typeof v == 'string' ? v : v.type
          if (!b) throw new Error(jt(12))
          if (b in u.sliceCaseReducersByType) throw new Error(jt(13))
          return (u.sliceCaseReducersByType[b] = w), c
        },
        addMatcher(v, w) {
          return u.sliceMatchers.push({ matcher: v, reducer: w }), c
        },
        exposeAction(v, w) {
          return (u.actionCreators[v] = w), c
        },
        exposeCaseReducer(v, w) {
          return (u.sliceCaseReducersByName[v] = w), c
        }
      }
    l.forEach((v) => {
      const w = s[v],
        b = {
          reducerName: v,
          type: ES(o, v),
          createNotation: typeof i.reducers == 'function'
        }
      MS(w) ? LS(b, w, c, t) : PS(b, w, c)
    })
    function f() {
      const [v = {}, w = [], b = void 0] =
          typeof i.extraReducers == 'function'
            ? S1(i.extraReducers)
            : [i.extraReducers],
        C = { ...v, ...u.sliceCaseReducersByType }
      return yS(i.initialState, (S) => {
        for (let E in C) S.addCase(E, C[E])
        for (let E of u.sliceMatchers) S.addMatcher(E.matcher, E.reducer)
        for (let E of w) S.addMatcher(E.matcher, E.reducer)
        b && S.addDefaultCase(b)
      })
    }
    const d = (v) => v,
      g = new Map()
    let y
    function _(v, w) {
      return y || (y = f()), y(v, w)
    }
    function x() {
      return y || (y = f()), y.getInitialState()
    }
    function m(v, w = !1) {
      function b(S) {
        let E = S[v]
        return typeof E > 'u' && w && (E = x()), E
      }
      function C(S = d) {
        const E = mm(g, w, { insert: () => new WeakMap() })
        return mm(E, S, {
          insert: () => {
            const j = {}
            for (const [T, M] of Object.entries(i.selectors ?? {}))
              j[T] = TS(M, S, x, w)
            return j
          }
        })
      }
      return {
        reducerPath: v,
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
      ...m(a),
      injectInto(v, { reducerPath: w, ...b } = {}) {
        const C = w ?? a
        return (
          v.inject({ reducerPath: C, reducer: _ }, b), { ...p, ...m(C, !0) }
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
var In = jS()
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
function PS({ type: e, reducerName: t, createNotation: n }, r, i) {
  let o, a
  if ('reducer' in r) {
    if (n && !NS(r)) throw new Error(jt(17))
    ;(o = r.reducer), (a = r.prepare)
  } else o = r
  i.addCase(e, o)
    .exposeCaseReducer(t, o)
    .exposeAction(t, a ? Bt(e, a) : Bt(e))
}
function MS(e) {
  return e._reducerDefinitionType === 'asyncThunk'
}
function NS(e) {
  return e._reducerDefinitionType === 'reducerWithPrepare'
}
function LS({ type: e, reducerName: t }, n, r, i) {
  if (!i) throw new Error(jt(18))
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
      fulfilled: a || Qa,
      pending: s || Qa,
      rejected: l || Qa,
      settled: u || Qa
    })
}
function Qa() {}
function jt(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `
}
var E1 = ((e) => (
  (e.uninitialized = 'uninitialized'),
  (e.pending = 'pending'),
  (e.fulfilled = 'fulfilled'),
  (e.rejected = 'rejected'),
  e
))(E1 || {})
function OS(e) {
  return {
    status: e,
    isUninitialized: e === 'uninitialized',
    isLoading: e === 'pending',
    isSuccess: e === 'fulfilled',
    isError: e === 'rejected'
  }
}
var ym = on
function j1(e, t) {
  if (e === t || !((ym(e) && ym(t)) || (Array.isArray(e) && Array.isArray(t))))
    return t
  const n = Object.keys(t),
    r = Object.keys(e)
  let i = n.length === r.length
  const o = Array.isArray(t) ? [] : {}
  for (const a of n) (o[a] = j1(e[a], t[a])), i && (i = e[a] === o[a])
  return i ? e : o
}
function wi(e) {
  let t = 0
  for (const n in e) t++
  return t
}
var _m = (e) => [].concat(...e)
function AS(e) {
  return new RegExp('(^|:)//').test(e)
}
function RS() {
  return typeof document > 'u' ? !0 : document.visibilityState !== 'hidden'
}
function xm(e) {
  return e != null
}
function IS() {
  return typeof navigator > 'u' || navigator.onLine === void 0
    ? !0
    : navigator.onLine
}
var FS = (e) => e.replace(/\/$/, ''),
  zS = (e) => e.replace(/^\//, '')
function $S(e, t) {
  if (!e) return t
  if (!t) return e
  if (AS(t)) return t
  const n = e.endsWith('/') || !t.startsWith('?') ? '/' : ''
  return (e = FS(e)), (t = zS(t)), `${e}${n}${t}`
}
var wm = (...e) => fetch(...e),
  DS = (e) => e.status >= 200 && e.status <= 299,
  VS = (e) => /ion\/(vnd\.api\+)?json/.test(e.get('content-type') || '')
function bm(e) {
  if (!on(e)) return e
  const t = { ...e }
  for (const [n, r] of Object.entries(t)) r === void 0 && delete t[n]
  return t
}
function T1({
  baseUrl: e,
  prepareHeaders: t = (f) => f,
  fetchFn: n = wm,
  paramsSerializer: r,
  isJsonContentType: i = VS,
  jsonContentType: o = 'application/json',
  jsonReplacer: a,
  timeout: s,
  responseHandler: l,
  validateStatus: u,
  ...c
} = {}) {
  return (
    typeof fetch > 'u' &&
      n === wm &&
      console.warn(
        'Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments.'
      ),
    async (d, g, y) => {
      const { getState: _, extra: x, endpoint: m, forced: p, type: v } = g
      let w,
        {
          url: b,
          headers: C = new Headers(c.headers),
          params: S = void 0,
          responseHandler: E = l ?? 'json',
          validateStatus: j = u ?? DS,
          timeout: T = s,
          ...M
        } = typeof d == 'string' ? { url: d } : d,
        O,
        L = g.signal
      T &&
        ((O = new AbortController()),
        g.signal.addEventListener('abort', O.abort),
        (L = O.signal))
      let A = { ...c, signal: L, ...M }
      ;(C = new Headers(bm(C))),
        (A.headers =
          (await t(C, {
            getState: _,
            arg: d,
            extra: x,
            endpoint: m,
            forced: p,
            type: v,
            extraOptions: y
          })) || C)
      const D = (U) =>
        typeof U == 'object' &&
        (on(U) || Array.isArray(U) || typeof U.toJSON == 'function')
      if (
        (!A.headers.has('content-type') &&
          D(A.body) &&
          A.headers.set('content-type', o),
        D(A.body) && i(A.headers) && (A.body = JSON.stringify(A.body, a)),
        S)
      ) {
        const U = ~b.indexOf('?') ? '&' : '?',
          Z = r ? r(S) : new URLSearchParams(bm(S))
        b += U + Z
      }
      b = $S(e, b)
      const R = new Request(b, A)
      w = { request: new Request(b, A) }
      let N,
        F = !1,
        z =
          O &&
          setTimeout(() => {
            ;(F = !0), O.abort()
          }, T)
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
        z && clearTimeout(z),
          O == null || O.signal.removeEventListener('abort', O.abort)
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
      return j(N, q)
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
var Sm = class {
    constructor(e, t = void 0) {
      ;(this.value = e), (this.meta = t)
    }
  },
  yp = Bt('__rtkq/focused'),
  k1 = Bt('__rtkq/unfocused'),
  _p = Bt('__rtkq/online'),
  P1 = Bt('__rtkq/offline')
function M1(e) {
  return e.type === 'query'
}
function BS(e) {
  return e.type === 'mutation'
}
function xp(e, t, n, r, i, o) {
  return HS(e)
    ? e(t, n, r, i).map(yd).map(o)
    : Array.isArray(e)
    ? e.map(yd).map(o)
    : []
}
function HS(e) {
  return typeof e == 'function'
}
function yd(e) {
  return typeof e == 'string' ? { type: e } : e
}
function qS(e, t) {
  return e.catch(t)
}
var Jo = Symbol('forceQueryFn'),
  _d = (e) => typeof e[Jo] == 'function'
function WS({
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
  function c(x, m) {
    return (p) => {
      var b
      const v = i.endpointDefinitions[x],
        w = e({ queryArgs: m, endpointDefinition: v, endpointName: x })
      return (b = o.get(p)) == null ? void 0 : b[w]
    }
  }
  function f(x, m) {
    return (p) => {
      var v
      return (v = a.get(p)) == null ? void 0 : v[m]
    }
  }
  function d() {
    return (x) => Object.values(o.get(x) || {}).filter(xm)
  }
  function g() {
    return (x) => Object.values(a.get(x) || {}).filter(xm)
  }
  function y(x, m) {
    const p =
      (
        v,
        {
          subscribe: w = !0,
          forceRefetch: b,
          subscriptionOptions: C,
          [Jo]: S,
          ...E
        } = {}
      ) =>
      (j, T) => {
        var q
        const M = e({ queryArgs: v, endpointDefinition: m, endpointName: x }),
          O = t({
            ...E,
            type: 'query',
            subscribe: w,
            forceRefetch: b,
            subscriptionOptions: C,
            endpointName: x,
            originalArgs: v,
            queryCacheKey: M,
            [Jo]: S
          }),
          L = r.endpoints[x].select(v),
          A = j(O),
          D = L(T()),
          { requestId: R, abort: I } = A,
          N = D.requestId !== R,
          F = (q = o.get(j)) == null ? void 0 : q[M],
          z = () => L(T()),
          V = Object.assign(
            S
              ? A.then(z)
              : N && !F
              ? Promise.resolve(D)
              : Promise.all([F, A]).then(z),
            {
              arg: v,
              requestId: R,
              subscriptionOptions: C,
              queryCacheKey: M,
              abort: I,
              async unwrap() {
                const G = await V
                if (G.isError) throw G.error
                return G.data
              },
              refetch: () => j(p(v, { subscribe: !1, forceRefetch: !0 })),
              unsubscribe() {
                w && j(s({ queryCacheKey: M, requestId: R }))
              },
              updateSubscriptionOptions(G) {
                ;(V.subscriptionOptions = G),
                  j(
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
          const G = o.get(j) || {}
          ;(G[M] = V),
            o.set(j, G),
            V.then(() => {
              delete G[M], wi(G) || o.delete(j)
            })
        }
        return V
      }
    return p
  }
  function _(x) {
    return (m, { track: p = !0, fixedCacheKey: v } = {}) =>
      (w, b) => {
        const C = n({
            type: 'mutation',
            endpointName: x,
            originalArgs: m,
            track: p,
            fixedCacheKey: v
          }),
          S = w(C),
          { requestId: E, abort: j, unwrap: T } = S,
          M = qS(
            S.unwrap().then((D) => ({ data: D })),
            (D) => ({ error: D })
          ),
          O = () => {
            w(l({ requestId: E, fixedCacheKey: v }))
          },
          L = Object.assign(M, {
            arg: S.arg,
            requestId: E,
            abort: j,
            unwrap: T,
            reset: O
          }),
          A = a.get(w) || {}
        return (
          a.set(w, A),
          (A[E] = L),
          L.then(() => {
            delete A[E], wi(A) || a.delete(w)
          }),
          v &&
            ((A[v] = L),
            L.then(() => {
              A[v] === L && (delete A[v], wi(A) || a.delete(w))
            })),
          L
        )
      }
  }
}
function Cm(e) {
  return e
}
function US({
  reducerPath: e,
  baseQuery: t,
  context: { endpointDefinitions: n },
  serializeQueryArgs: r,
  api: i,
  assertTagType: o
}) {
  const a = (p, v, w, b) => (C, S) => {
      const E = n[p],
        j = r({ queryArgs: v, endpointDefinition: E, endpointName: p })
      if (
        (C(
          i.internalActions.queryResultPatched({ queryCacheKey: j, patches: w })
        ),
        !b)
      )
        return
      const T = i.endpoints[p].select(v)(S()),
        M = xp(E.providesTags, T.data, void 0, v, {}, o)
      C(
        i.internalActions.updateProvidedBy({
          queryCacheKey: j,
          providedTags: M
        })
      )
    },
    s =
      (p, v, w, b = !0) =>
      (C, S) => {
        const j = i.endpoints[p].select(v)(S()),
          T = {
            patches: [],
            inversePatches: [],
            undo: () => C(i.util.patchQueryData(p, v, T.inversePatches, b))
          }
        if (j.status === 'uninitialized') return T
        let M
        if ('data' in j)
          if (Ut(j.data)) {
            const [O, L, A] = _1(j.data, w)
            T.patches.push(...L), T.inversePatches.push(...A), (M = O)
          } else
            (M = w(j.data)),
              T.patches.push({ op: 'replace', path: [], value: M }),
              T.inversePatches.push({ op: 'replace', path: [], value: j.data })
        return (
          T.patches.length === 0 ||
            C(i.util.patchQueryData(p, v, T.patches, b)),
          T
        )
      },
    l = (p, v, w) => (b) =>
      b(
        i.endpoints[p].initiate(v, {
          subscribe: !1,
          forceRefetch: !0,
          [Jo]: () => ({ data: w })
        })
      ),
    u = async (
      p,
      {
        signal: v,
        abort: w,
        rejectWithValue: b,
        fulfillWithValue: C,
        dispatch: S,
        getState: E,
        extra: j
      }
    ) => {
      const T = n[p.endpointName]
      try {
        let M = Cm,
          O
        const L = {
            signal: v,
            abort: w,
            dispatch: S,
            getState: E,
            extra: j,
            endpoint: p.endpointName,
            type: p.type,
            forced: p.type === 'query' ? c(p, E()) : void 0,
            queryCacheKey: p.type === 'query' ? p.queryCacheKey : void 0
          },
          A = p.type === 'query' ? p[Jo] : void 0
        if (
          (A
            ? (O = A())
            : T.query
            ? ((O = await t(T.query(p.originalArgs), L, T.extraOptions)),
              T.transformResponse && (M = T.transformResponse))
            : (O = await T.queryFn(p.originalArgs, L, T.extraOptions, (D) =>
                t(D, L, T.extraOptions)
              )),
          typeof process < 'u',
          O.error)
        )
          throw new Sm(O.error, O.meta)
        return C(await M(O.data, O.meta, p.originalArgs), {
          fulfilledTimeStamp: Date.now(),
          baseQueryMeta: O.meta,
          [mr]: !0
        })
      } catch (M) {
        let O = M
        if (O instanceof Sm) {
          let L = Cm
          T.query && T.transformErrorResponse && (L = T.transformErrorResponse)
          try {
            return b(await L(O.value, O.meta, p.originalArgs), {
              baseQueryMeta: O.meta,
              [mr]: !0
            })
          } catch (A) {
            O = A
          }
        }
        throw (typeof process < 'u', console.error(O), O)
      }
    }
  function c(p, v) {
    var E, j, T
    const w =
        (j = (E = v[e]) == null ? void 0 : E.queries) == null
          ? void 0
          : j[p.queryCacheKey],
      b = (T = v[e]) == null ? void 0 : T.config.refetchOnMountOrArgChange,
      C = w == null ? void 0 : w.fulfilledTimeStamp,
      S = p.forceRefetch ?? (p.subscribe && b)
    return S ? S === !0 || (Number(new Date()) - Number(C)) / 1e3 >= S : !1
  }
  const f = gm(`${e}/executeQuery`, u, {
      getPendingMeta() {
        return { startedTimeStamp: Date.now(), [mr]: !0 }
      },
      condition(p, { getState: v }) {
        var T, M, O
        const w = v(),
          b =
            (M = (T = w[e]) == null ? void 0 : T.queries) == null
              ? void 0
              : M[p.queryCacheKey],
          C = b == null ? void 0 : b.fulfilledTimeStamp,
          S = p.originalArgs,
          E = b == null ? void 0 : b.originalArgs,
          j = n[p.endpointName]
        return _d(p)
          ? !0
          : (b == null ? void 0 : b.status) === 'pending'
          ? !1
          : c(p, w) ||
            (M1(j) &&
              (O = j == null ? void 0 : j.forceRefetch) != null &&
              O.call(j, {
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
    d = gm(`${e}/executeMutation`, u, {
      getPendingMeta() {
        return { startedTimeStamp: Date.now(), [mr]: !0 }
      }
    }),
    g = (p) => 'force' in p,
    y = (p) => 'ifOlderThan' in p,
    _ = (p, v, w) => (b, C) => {
      const S = g(w) && w.force,
        E = y(w) && w.ifOlderThan,
        j = (M = !0) => {
          const O = { forceRefetch: M, isPrefetch: !0 }
          return i.endpoints[p].initiate(v, O)
        },
        T = i.endpoints[p].select(v)(C())
      if (S) b(j())
      else if (E) {
        const M = T == null ? void 0 : T.fulfilledTimeStamp
        if (!M) {
          b(j())
          return
        }
        ;(Number(new Date()) - Number(new Date(M))) / 1e3 >= E && b(j())
      } else b(j(!1))
    }
  function x(p) {
    return (v) => {
      var w, b
      return (
        ((b = (w = v == null ? void 0 : v.meta) == null ? void 0 : w.arg) ==
        null
          ? void 0
          : b.endpointName) === p
      )
    }
  }
  function m(p, v) {
    return {
      matchPending: Eo(vp(p), x(v)),
      matchFulfilled: Eo(rr(p), x(v)),
      matchRejected: Eo(Li(p), x(v))
    }
  }
  return {
    queryThunk: f,
    mutationThunk: d,
    prefetch: _,
    updateQueryData: s,
    upsertQueryData: l,
    patchQueryData: a,
    buildMatchThunkActions: m
  }
}
function N1(e, t, n, r) {
  return xp(
    n[e.meta.arg.endpointName][t],
    rr(e) ? e.payload : void 0,
    zl(e) ? e.payload : void 0,
    e.meta.arg.originalArgs,
    'baseQueryMeta' in e.meta ? e.meta.baseQueryMeta : void 0,
    r
  )
}
function Ka(e, t, n) {
  const r = e[t]
  r && n(r)
}
function ea(e) {
  return ('arg' in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId
}
function Em(e, t, n) {
  const r = e[ea(t)]
  r && n(r)
}
var io = {}
function GS({
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
  function f(C, S, E, j) {
    var T
    C[(T = S.queryCacheKey)] ??
      (C[T] = { status: 'uninitialized', endpointName: S.endpointName }),
      Ka(C, S.queryCacheKey, (M) => {
        ;(M.status = 'pending'),
          (M.requestId = E && M.requestId ? M.requestId : j.requestId),
          S.originalArgs !== void 0 && (M.originalArgs = S.originalArgs),
          (M.startedTimeStamp = j.startedTimeStamp)
      })
  }
  function d(C, S, E) {
    Ka(C, S.arg.queryCacheKey, (j) => {
      if (j.requestId !== S.requestId && !_d(S.arg)) return
      const { merge: T } = i[S.arg.endpointName]
      if (((j.status = 'fulfilled'), T))
        if (j.data !== void 0) {
          const {
            fulfilledTimeStamp: M,
            arg: O,
            baseQueryMeta: L,
            requestId: A
          } = S
          let D = _a(j.data, (R) =>
            T(R, E, {
              arg: O.originalArgs,
              baseQueryMeta: L,
              fulfilledTimeStamp: M,
              requestId: A
            })
          )
          j.data = D
        } else j.data = E
      else
        j.data =
          i[S.arg.endpointName].structuralSharing ?? !0
            ? j1(an(j.data) ? Db(j.data) : j.data, E)
            : E
      delete j.error, (j.fulfilledTimeStamp = S.fulfilledTimeStamp)
    })
  }
  const g = In({
      name: `${e}/queries`,
      initialState: io,
      reducers: {
        removeQueryResult: {
          reducer(C, { payload: { queryCacheKey: S } }) {
            delete C[S]
          },
          prepare: ro()
        },
        cacheEntriesUpserted: {
          reducer(C, S) {
            for (const E of S.payload) {
              const { queryDescription: j, value: T } = E
              f(C, j, !0, {
                arg: j,
                requestId: S.meta.requestId,
                startedTimeStamp: S.meta.timestamp
              }),
                d(
                  C,
                  {
                    arg: j,
                    requestId: S.meta.requestId,
                    fulfilledTimeStamp: S.meta.timestamp,
                    baseQueryMeta: {}
                  },
                  T
                )
            }
          },
          prepare: (C) => ({
            payload: C.map((j) => {
              const { endpointName: T, arg: M, value: O } = j,
                L = i[T]
              return {
                queryDescription: {
                  type: 'query',
                  endpointName: T,
                  originalArgs: j.arg,
                  queryCacheKey: r({
                    queryArgs: M,
                    endpointDefinition: L,
                    endpointName: T
                  })
                },
                value: O
              }
            }),
            meta: { [mr]: !0, requestId: gp(), timestamp: Date.now() }
          })
        },
        queryResultPatched: {
          reducer(C, { payload: { queryCacheKey: S, patches: E } }) {
            Ka(C, S, (j) => {
              j.data = dm(j.data, E.concat())
            })
          },
          prepare: ro()
        }
      },
      extraReducers(C) {
        C.addCase(t.pending, (S, { meta: E, meta: { arg: j } }) => {
          const T = _d(j)
          f(S, j, T, E)
        })
          .addCase(t.fulfilled, (S, { meta: E, payload: j }) => {
            d(S, E, j)
          })
          .addCase(
            t.rejected,
            (
              S,
              {
                meta: { condition: E, arg: j, requestId: T },
                error: M,
                payload: O
              }
            ) => {
              Ka(S, j.queryCacheKey, (L) => {
                if (!E) {
                  if (L.requestId !== T) return
                  ;(L.status = 'rejected'), (L.error = O ?? M)
                }
              })
            }
          )
          .addMatcher(s, (S, E) => {
            const { queries: j } = a(E)
            for (const [T, M] of Object.entries(j))
              ((M == null ? void 0 : M.status) === 'fulfilled' ||
                (M == null ? void 0 : M.status) === 'rejected') &&
                (S[T] = M)
          })
      }
    }),
    y = In({
      name: `${e}/mutations`,
      initialState: io,
      reducers: {
        removeMutationResult: {
          reducer(C, { payload: S }) {
            const E = ea(S)
            E in C && delete C[E]
          },
          prepare: ro()
        }
      },
      extraReducers(C) {
        C.addCase(
          n.pending,
          (
            S,
            { meta: E, meta: { requestId: j, arg: T, startedTimeStamp: M } }
          ) => {
            T.track &&
              (S[ea(E)] = {
                requestId: j,
                status: 'pending',
                endpointName: T.endpointName,
                startedTimeStamp: M
              })
          }
        )
          .addCase(n.fulfilled, (S, { payload: E, meta: j }) => {
            j.arg.track &&
              Em(S, j, (T) => {
                T.requestId === j.requestId &&
                  ((T.status = 'fulfilled'),
                  (T.data = E),
                  (T.fulfilledTimeStamp = j.fulfilledTimeStamp))
              })
          })
          .addCase(n.rejected, (S, { payload: E, error: j, meta: T }) => {
            T.arg.track &&
              Em(S, T, (M) => {
                M.requestId === T.requestId &&
                  ((M.status = 'rejected'), (M.error = E ?? j))
              })
          })
          .addMatcher(s, (S, E) => {
            const { mutations: j } = a(E)
            for (const [T, M] of Object.entries(j))
              ((M == null ? void 0 : M.status) === 'fulfilled' ||
                (M == null ? void 0 : M.status) === 'rejected') &&
                T !== (M == null ? void 0 : M.requestId) &&
                (S[T] = M)
          })
      }
    }),
    _ = In({
      name: `${e}/invalidation`,
      initialState: io,
      reducers: {
        updateProvidedBy: {
          reducer(C, S) {
            var T, M
            const { queryCacheKey: E, providedTags: j } = S.payload
            for (const O of Object.values(C))
              for (const L of Object.values(O)) {
                const A = L.indexOf(E)
                A !== -1 && L.splice(A, 1)
              }
            for (const { type: O, id: L } of j) {
              const A =
                (T = C[O] ?? (C[O] = {}))[(M = L || '__internal_without_id')] ??
                (T[M] = [])
              A.includes(E) || A.push(E)
            }
          },
          prepare: ro()
        }
      },
      extraReducers(C) {
        C.addCase(
          g.actions.removeQueryResult,
          (S, { payload: { queryCacheKey: E } }) => {
            for (const j of Object.values(S))
              for (const T of Object.values(j)) {
                const M = T.indexOf(E)
                M !== -1 && T.splice(M, 1)
              }
          }
        )
          .addMatcher(s, (S, E) => {
            var T, M
            const { provided: j } = a(E)
            for (const [O, L] of Object.entries(j))
              for (const [A, D] of Object.entries(L)) {
                const R =
                  (T = S[O] ?? (S[O] = {}))[
                    (M = A || '__internal_without_id')
                  ] ?? (T[M] = [])
                for (const I of D) R.includes(I) || R.push(I)
              }
          })
          .addMatcher(jn(rr(t), zl(t)), (S, E) => {
            const j = N1(E, 'providesTags', i, l),
              { queryCacheKey: T } = E.meta.arg
            _.caseReducers.updateProvidedBy(
              S,
              _.actions.updateProvidedBy({ queryCacheKey: T, providedTags: j })
            )
          })
      }
    }),
    x = In({
      name: `${e}/subscriptions`,
      initialState: io,
      reducers: {
        updateSubscriptionOptions(C, S) {},
        unsubscribeQueryResult(C, S) {},
        internal_getRTKQSubscriptions() {}
      }
    }),
    m = In({
      name: `${e}/internalSubscriptions`,
      initialState: io,
      reducers: {
        subscriptionsUpdated: {
          reducer(C, S) {
            return dm(C, S.payload)
          },
          prepare: ro()
        }
      }
    }),
    p = In({
      name: `${e}/config`,
      initialState: {
        online: IS(),
        focused: RS(),
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
        C.addCase(_p, (S) => {
          S.online = !0
        })
          .addCase(P1, (S) => {
            S.online = !1
          })
          .addCase(yp, (S) => {
            S.focused = !0
          })
          .addCase(k1, (S) => {
            S.focused = !1
          })
          .addMatcher(s, (S) => ({ ...S }))
      }
    }),
    v = f1({
      queries: g.reducer,
      mutations: y.reducer,
      provided: _.reducer,
      subscriptions: m.reducer,
      config: p.reducer
    }),
    w = (C, S) => v(c.match(S) ? void 0 : C, S),
    b = {
      ...p.actions,
      ...g.actions,
      ...x.actions,
      ...m.actions,
      ...y.actions,
      ..._.actions,
      resetApiState: c
    }
  return { reducer: w, actions: b }
}
var vr = Symbol.for('RTKQ/skipToken'),
  L1 = { status: 'uninitialized' },
  jm = _a(L1, () => {}),
  Tm = _a(L1, () => {})
function QS({ serializeQueryArgs: e, reducerPath: t, createSelector: n }) {
  const r = (f) => jm,
    i = (f) => Tm
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
        g === vr
          ? r
          : (m) => {
              var p, v
              return (
                ((v = (p = a(m)) == null ? void 0 : p.queries) == null
                  ? void 0
                  : v[y]) ?? jm
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
        typeof f == 'object' ? (d = ea(f) ?? vr) : (d = f),
        n(
          d === vr
            ? i
            : (_) => {
                var x, m
                return (
                  ((m = (x = a(_)) == null ? void 0 : x.mutations) == null
                    ? void 0
                    : m[d]) ?? Tm
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
    for (const _ of d.map(yd)) {
      const x = g.provided[_.type]
      if (!x) continue
      let m = (_.id !== void 0 ? x[_.id] : _m(Object.values(x))) ?? []
      for (const p of m) y.add(p)
    }
    return _m(
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
var Gr = WeakMap ? new WeakMap() : void 0,
  km = ({ endpointName: e, queryArgs: t }) => {
    let n = ''
    const r = Gr == null ? void 0 : Gr.get(t)
    if (typeof r == 'string') n = r
    else {
      const i = JSON.stringify(
        t,
        (o, a) => (
          (a = typeof a == 'bigint' ? { $bigint: a.toString() } : a),
          (a = on(a)
            ? Object.keys(a)
                .sort()
                .reduce((s, l) => ((s[l] = a[l]), s), {})
            : a),
          a
        )
      )
      on(t) && (Gr == null || Gr.set(t, i)), (n = i)
    }
    return `${e}(${n})`
  }
function KS(...e) {
  return function (n) {
    const r = sl((u) => {
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
          let c = km
          if ('serializeQueryArgs' in u.endpointDefinition) {
            const f = u.endpointDefinition.serializeQueryArgs
            c = (d) => {
              const g = f(d)
              return typeof g == 'string' ? g : km({ ...d, queryArgs: g })
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
        apiUid: gp(),
        extractRehydrationInfo: r,
        hasRehydrationInfo: sl((u) => r(u) != null)
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
          if (u.overrideExisting === 'throw') throw new Error(jt(39))
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
function Ln(e, ...t) {
  return Object.assign(e, ...t)
}
var XS = ({ api: e, queryThunk: t, internalState: n }) => {
  const r = `${e.reducerPath}/subscriptions`
  let i = null,
    o = null
  const { updateSubscriptionOptions: a, unsubscribeQueryResult: s } =
      e.internalActions,
    l = (g, y) => {
      var x, m, p
      if (a.match(y)) {
        const { queryCacheKey: v, requestId: w, options: b } = y.payload
        return (
          (x = g == null ? void 0 : g[v]) != null && x[w] && (g[v][w] = b), !0
        )
      }
      if (s.match(y)) {
        const { queryCacheKey: v, requestId: w } = y.payload
        return g[v] && delete g[v][w], !0
      }
      if (e.internalActions.removeQueryResult.match(y))
        return delete g[y.payload.queryCacheKey], !0
      if (t.pending.match(y)) {
        const {
            meta: { arg: v, requestId: w }
          } = y,
          b = g[(m = v.queryCacheKey)] ?? (g[m] = {})
        return (
          (b[`${w}_running`] = {}),
          v.subscribe && (b[w] = v.subscriptionOptions ?? b[w] ?? {}),
          !0
        )
      }
      let _ = !1
      if (t.fulfilled.match(y) || t.rejected.match(y)) {
        const v = g[y.meta.arg.queryCacheKey] || {},
          w = `${y.meta.requestId}_running`
        _ || (_ = !!v[w]), delete v[w]
      }
      if (t.rejected.match(y)) {
        const {
          meta: { condition: v, arg: w, requestId: b }
        } = y
        if (v && w.subscribe) {
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
          const v = JSON.parse(JSON.stringify(n.currentSubscriptions)),
            [, w] = _1(i, () => v)
          y.next(e.internalActions.subscriptionsUpdated(w)), (i = v), (o = null)
        }, 500))
      const m = typeof g.type == 'string' && !!g.type.startsWith(r),
        p = t.rejected.match(g) && g.meta.condition && !!g.meta.arg.subscribe
      x = !m && !p
    }
    return [x, !1]
  }
}
function YS(e) {
  for (const t in e) return !1
  return !0
}
var ZS = 2147483647 / 1e3 - 1,
  JS = ({
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
      l = jn(a.match, n.fulfilled, n.rejected, s.match)
    function u(g) {
      const y = i.currentSubscriptions[g]
      return !!y && !YS(y)
    }
    const c = {},
      f = (g, y, _) => {
        var x
        if (l(g)) {
          const m = y.getState()[e]
          let p
          if (s.match(g))
            p = g.payload.map((v) => v.queryDescription.queryCacheKey)
          else {
            const { queryCacheKey: v } = a.match(g) ? g.payload : g.meta.arg
            p = [v]
          }
          for (const v of p)
            d(
              v,
              (x = m.queries[v]) == null ? void 0 : x.endpointName,
              y,
              m.config
            )
        }
        if (t.util.resetApiState.match(g))
          for (const [m, p] of Object.entries(c))
            p && clearTimeout(p), delete c[m]
        if (r.hasRehydrationInfo(g)) {
          const m = y.getState()[e],
            { queries: p } = r.extractRehydrationInfo(g)
          for (const [v, w] of Object.entries(p))
            d(v, w == null ? void 0 : w.endpointName, y, m.config)
        }
      }
    function d(g, y, _, x) {
      const m = r.endpointDefinitions[y],
        p = (m == null ? void 0 : m.keepUnusedDataFor) ?? x.keepUnusedDataFor
      if (p === 1 / 0) return
      const v = Math.max(0, Math.min(p, ZS))
      if (!u(g)) {
        const w = c[g]
        w && clearTimeout(w),
          (c[g] = setTimeout(() => {
            u(g) || _.dispatch(o({ queryCacheKey: g })), delete c[g]
          }, v * 1e3))
      }
    }
    return f
  },
  Pm = new Error('Promise never resolved before cacheEntryRemoved.'),
  eC = ({
    api: e,
    reducerPath: t,
    context: n,
    queryThunk: r,
    mutationThunk: i,
    internalState: o
  }) => {
    const a = gd(r),
      s = gd(i),
      l = rr(r, i),
      u = {}
    function c(_, x, m) {
      const p = u[_]
      p != null &&
        p.valueResolved &&
        (p.valueResolved({ data: x, meta: m }), delete p.valueResolved)
    }
    function f(_) {
      const x = u[_]
      x && (delete u[_], x.cacheEntryRemoved())
    }
    const d = (_, x, m) => {
      const p = g(_)
      function v(w, b, C, S) {
        const E = m[t].queries[b],
          j = x.getState()[t].queries[b]
        !E && j && y(w, S, b, x, C)
      }
      if (r.pending.match(_))
        v(_.meta.arg.endpointName, p, _.meta.requestId, _.meta.arg.originalArgs)
      else if (e.internalActions.cacheEntriesUpserted.match(_))
        for (const { queryDescription: w, value: b } of _.payload) {
          const { endpointName: C, originalArgs: S, queryCacheKey: E } = w
          v(C, E, _.meta.requestId, S), c(E, b, {})
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
        ? ea(_.payload)
        : ''
    }
    function y(_, x, m, p, v) {
      const w = n.endpointDefinitions[_],
        b = w == null ? void 0 : w.onCacheEntryAdded
      if (!b) return
      const C = {},
        S = new Promise((L) => {
          C.cacheEntryRemoved = L
        }),
        E = Promise.race([
          new Promise((L) => {
            C.valueResolved = L
          }),
          S.then(() => {
            throw Pm
          })
        ])
      E.catch(() => {}), (u[m] = C)
      const j = e.endpoints[_].select(w.type === 'query' ? x : m),
        T = p.dispatch((L, A, D) => D),
        M = {
          ...p,
          getCacheEntry: () => j(p.getState()),
          requestId: v,
          extra: T,
          updateCachedData:
            w.type === 'query'
              ? (L) => p.dispatch(e.util.updateQueryData(_, x, L))
              : void 0,
          cacheDataLoaded: E,
          cacheEntryRemoved: S
        },
        O = b(x, M)
      Promise.resolve(O).catch((L) => {
        if (L !== Pm) throw L
      })
    }
    return d
  },
  tC =
    ({ api: e, context: { apiUid: t }, reducerPath: n }) =>
    (r, i) => {
      e.util.resetApiState.match(r) &&
        i.dispatch(e.internalActions.middlewareRegistered(t)),
        typeof process < 'u'
    },
  nC = ({
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
      c = jn(rr(r), zl(r)),
      f = jn(rr(r, i), Li(r, i))
    let d = []
    const g = (x, m) => {
      c(x)
        ? _(N1(x, 'invalidatesTags', n, a), m)
        : f(x)
        ? _([], m)
        : o.util.invalidateTags.match(x) &&
          _(xp(x.payload, void 0, void 0, void 0, void 0, a), m)
    }
    function y(x) {
      var m, p
      for (const v in x.queries)
        if (((m = x.queries[v]) == null ? void 0 : m.status) === 'pending')
          return !0
      for (const v in x.mutations)
        if (((p = x.mutations[v]) == null ? void 0 : p.status) === 'pending')
          return !0
      return !1
    }
    function _(x, m) {
      const p = m.getState(),
        v = p[e]
      if ((d.push(...x), v.config.invalidationBehavior === 'delayed' && y(v)))
        return
      const w = d
      if (((d = []), w.length === 0)) return
      const b = o.util.selectInvalidatedBy(p, w)
      t.batch(() => {
        const C = Array.from(b.values())
        for (const { queryCacheKey: S } of C) {
          const E = v.queries[S],
            j = l.currentSubscriptions[S] ?? {}
          E &&
            (wi(j) === 0
              ? m.dispatch(u({ queryCacheKey: S }))
              : E.status !== 'uninitialized' && m.dispatch(s(E)))
        }
      })
    }
    return g
  },
  rC = ({
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
      const { lowestPollingInterval: m, skipPollingIfUnfocused: p } = f(x)
      if (!Number.isFinite(m)) return
      const v = o[d]
      v != null && v.timeout && (clearTimeout(v.timeout), (v.timeout = void 0))
      const w = Date.now() + m
      o[d] = {
        nextPollTimestamp: w,
        pollingInterval: m,
        timeout: setTimeout(() => {
          ;(y.config.focused || !p) && g.dispatch(r(_)),
            s({ queryCacheKey: d }, g)
        }, m)
      }
    }
    function l({ queryCacheKey: d }, g) {
      const _ = g.getState()[e].queries[d],
        x = i.currentSubscriptions[d]
      if (!_ || _.status === 'uninitialized') return
      const { lowestPollingInterval: m } = f(x)
      if (!Number.isFinite(m)) {
        u(d)
        return
      }
      const p = o[d],
        v = Date.now() + m
      ;(!p || v < p.nextPollTimestamp) && s({ queryCacheKey: d }, g)
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
  iC = ({ api: e, context: t, queryThunk: n, mutationThunk: r }) => {
    const i = vp(n, r),
      o = Li(n, r),
      a = rr(n, r),
      s = {}
    return (u, c) => {
      var f, d
      if (i(u)) {
        const {
            requestId: g,
            arg: { endpointName: y, originalArgs: _ }
          } = u.meta,
          x = t.endpointDefinitions[y],
          m = x == null ? void 0 : x.onQueryStarted
        if (m) {
          const p = {},
            v = new Promise((S, E) => {
              ;(p.resolve = S), (p.reject = E)
            })
          v.catch(() => {}), (s[g] = p)
          const w = e.endpoints[y].select(x.type === 'query' ? _ : g),
            b = c.dispatch((S, E, j) => j),
            C = {
              ...c,
              getCacheEntry: () => w(c.getState()),
              requestId: g,
              extra: b,
              updateCachedData:
                x.type === 'query'
                  ? (S) => c.dispatch(e.util.updateQueryData(y, _, S))
                  : void 0,
              queryFulfilled: v
            }
          m(_, C)
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
  oC = ({
    reducerPath: e,
    context: t,
    api: n,
    refetchQuery: r,
    internalState: i
  }) => {
    const { removeQueryResult: o } = n.internalActions,
      a = (l, u) => {
        yp.match(l) && s(u, 'refetchOnFocus'),
          _p.match(l) && s(u, 'refetchOnReconnect')
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
          ;(Object.values(_).some((m) => m[u] === !0) ||
            (Object.values(_).every((m) => m[u] === void 0) && c.config[u])) &&
            (wi(_) === 0
              ? l.dispatch(o({ queryCacheKey: g }))
              : y.status !== 'uninitialized' && l.dispatch(r(y)))
        }
      })
    }
    return a
  }
function aC(e) {
  const { reducerPath: t, queryThunk: n, api: r, context: i } = e,
    { apiUid: o } = i,
    a = { invalidateTags: Bt(`${t}/invalidateTags`) },
    s = (f) => f.type.startsWith(`${t}/`),
    l = [tC, JS, nC, rC, eC, iC]
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
        x = XS(y),
        m = oC(y)
      return (p) => (v) => {
        if (!p1(v)) return p(v)
        d || ((d = !0), f.dispatch(r.internalActions.middlewareRegistered(o)))
        const w = { ...f, next: p },
          b = f.getState(),
          [C, S] = x(v, w, b)
        let E
        if (
          (C ? (E = p(v)) : (E = S),
          f.getState()[t] && (m(v, w, b), s(v) || i.hasRehydrationInfo(v)))
        )
          for (const j of _) j(v, w, b)
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
var Mm = Symbol(),
  sC = ({ createSelector: e = mp } = {}) => ({
    name: Mm,
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
      Xb()
      const d = (N) => (typeof process < 'u', N)
      Object.assign(t, {
        reducerPath: i,
        endpoints: {},
        internalActions: {
          onOnline: _p,
          onOffline: P1,
          onFocus: yp,
          onFocusLost: k1
        },
        util: {}
      })
      const {
          queryThunk: g,
          mutationThunk: y,
          patchQueryData: _,
          updateQueryData: x,
          upsertQueryData: m,
          prefetch: p,
          buildMatchThunkActions: v
        } = US({
          baseQuery: n,
          reducerPath: i,
          context: f,
          api: t,
          serializeQueryArgs: o,
          assertTagType: d
        }),
        { reducer: w, actions: b } = GS({
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
      Ln(t.util, {
        patchQueryData: _,
        updateQueryData: x,
        upsertQueryData: m,
        prefetch: p,
        resetApiState: b.resetApiState,
        upsertQueryEntries: b.cacheEntriesUpserted
      }),
        Ln(t.internalActions, b)
      const { middleware: C, actions: S } = aC({
        reducerPath: i,
        context: f,
        queryThunk: g,
        mutationThunk: y,
        api: t,
        assertTagType: d
      })
      Ln(t.util, S), Ln(t, { reducer: w, middleware: C })
      const {
        buildQuerySelector: E,
        buildMutationSelector: j,
        selectInvalidatedBy: T,
        selectCachedArgsForQuery: M
      } = QS({ serializeQueryArgs: o, reducerPath: i, createSelector: e })
      Ln(t.util, { selectInvalidatedBy: T, selectCachedArgsForQuery: M })
      const {
        buildInitiateQuery: O,
        buildInitiateMutation: L,
        getRunningMutationThunk: A,
        getRunningMutationsThunk: D,
        getRunningQueriesThunk: R,
        getRunningQueryThunk: I
      } = WS({
        queryThunk: g,
        mutationThunk: y,
        api: t,
        serializeQueryArgs: o,
        context: f
      })
      return (
        Ln(t.util, {
          getRunningMutationThunk: A,
          getRunningMutationsThunk: D,
          getRunningQueryThunk: I,
          getRunningQueriesThunk: R
        }),
        {
          name: Mm,
          injectEndpoint(N, F) {
            var V
            const z = t
            ;(V = z.endpoints)[N] ?? (V[N] = {}),
              M1(F)
                ? Ln(
                    z.endpoints[N],
                    { name: N, select: E(N, F), initiate: O(N, F) },
                    v(g, N)
                  )
                : BS(F) &&
                  Ln(
                    z.endpoints[N],
                    { name: N, select: j(), initiate: L(N) },
                    v(y, N)
                  )
          }
        }
      )
    }
  })
function lC(e) {
  return e.type === 'query'
}
function uC(e) {
  return e.type === 'mutation'
}
function Xa(e, ...t) {
  return Object.assign(e, ...t)
}
function zu(e) {
  return e.replace(e[0], e[0].toUpperCase())
}
var Qr = WeakMap ? new WeakMap() : void 0,
  cC = ({ endpointName: e, queryArgs: t }) => {
    let n = ''
    const r = Qr == null ? void 0 : Qr.get(t)
    if (typeof r == 'string') n = r
    else {
      const i = JSON.stringify(
        t,
        (o, a) => (
          (a = typeof a == 'bigint' ? { $bigint: a.toString() } : a),
          (a = on(a)
            ? Object.keys(a)
                .sort()
                .reduce((s, l) => ((s[l] = a[l]), s), {})
            : a),
          a
        )
      )
      on(t) && (Qr == null || Qr.set(t, i)), (n = i)
    }
    return `${e}(${n})`
  },
  $u = Symbol()
function Nm(e, t, n, r) {
  const i = k.useMemo(
      () => ({
        queryArgs: e,
        serialized:
          typeof e == 'object'
            ? t({ queryArgs: e, endpointDefinition: n, endpointName: r })
            : e
      }),
      [e, t, n, r]
    ),
    o = k.useRef(i)
  return (
    k.useEffect(() => {
      o.current.serialized !== i.serialized && (o.current = i)
    }, [i]),
    o.current.serialized === i.serialized ? o.current.queryArgs : e
  )
}
function Du(e) {
  const t = k.useRef(e)
  return (
    k.useEffect(() => {
      So(t.current, e) || (t.current = e)
    }, [e]),
    So(t.current, e) ? t.current : e
  )
}
var dC = () =>
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  fC = dC(),
  pC = () => typeof navigator < 'u' && navigator.product === 'ReactNative',
  hC = pC(),
  mC = () => (fC || hC ? k.useLayoutEffect : k.useEffect),
  vC = mC(),
  gC = (e) =>
    e.isUninitialized
      ? {
          ...e,
          isUninitialized: !1,
          isFetching: !0,
          isLoading: e.data === void 0,
          status: E1.pending
        }
      : e
function yC({
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
  const u = o ? (y) => y() : k.useEffect
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
    let m = y.isSuccess ? y.data : _ == null ? void 0 : _.data
    m === void 0 && (m = y.data)
    const p = m !== void 0,
      v = y.isLoading,
      w = (!_ || _.isLoading || _.isUninitialized) && !p && v,
      b = y.isSuccess || (v && p)
    return {
      ...y,
      data: m,
      currentData: y.data,
      isFetching: v,
      isLoading: w,
      isSuccess: b
    }
  }
  function f(y, _) {
    const x = n(),
      m = Du(_)
    return k.useCallback(
      (p, v) => x(e.util.prefetch(y, p, { ...m, ...v })),
      [y, x, m]
    )
  }
  function d(y) {
    const _ = (
        p,
        {
          refetchOnReconnect: v,
          refetchOnFocus: w,
          refetchOnMountOrArgChange: b,
          skip: C = !1,
          pollingInterval: S = 0,
          skipPollingIfUnfocused: E = !1
        } = {}
      ) => {
        const { initiate: j } = e.endpoints[y],
          T = n(),
          M = k.useRef(void 0)
        if (!M.current) {
          const z = T(e.internalActions.internal_getRTKQSubscriptions())
          M.current = z
        }
        const O = Nm(C ? vr : p, cC, l.endpointDefinitions[y], y),
          L = Du({
            refetchOnReconnect: v,
            refetchOnFocus: w,
            pollingInterval: S,
            skipPollingIfUnfocused: E
          }),
          A = k.useRef(!1),
          D = k.useRef(void 0)
        let { queryCacheKey: R, requestId: I } = D.current || {},
          N = !1
        R && I && (N = M.current.isRequestSubscribed(R, I))
        const F = !N && A.current
        return (
          u(() => {
            A.current = N
          }),
          u(() => {
            F && (D.current = void 0)
          }, [F]),
          u(() => {
            var q
            const z = D.current
            if ((typeof process < 'u', O === vr)) {
              z == null || z.unsubscribe(), (D.current = void 0)
              return
            }
            const V = (q = D.current) == null ? void 0 : q.subscriptionOptions
            if (!z || z.arg !== O) {
              z == null || z.unsubscribe()
              const G = T(j(O, { subscriptionOptions: L, forceRefetch: b }))
              D.current = G
            } else L !== V && z.updateSubscriptionOptions(L)
          }, [T, j, b, O, L, F]),
          k.useEffect(
            () => () => {
              var z
              ;(z = D.current) == null || z.unsubscribe(), (D.current = void 0)
            },
            []
          ),
          k.useMemo(
            () => ({
              refetch: () => {
                var z
                if (!D.current) throw new Error(jt(38))
                return (z = D.current) == null ? void 0 : z.refetch()
              }
            }),
            []
          )
        )
      },
      x = ({
        refetchOnReconnect: p,
        refetchOnFocus: v,
        pollingInterval: w = 0,
        skipPollingIfUnfocused: b = !1
      } = {}) => {
        const { initiate: C } = e.endpoints[y],
          S = n(),
          [E, j] = k.useState($u),
          T = k.useRef(void 0),
          M = Du({
            refetchOnReconnect: p,
            refetchOnFocus: v,
            pollingInterval: w,
            skipPollingIfUnfocused: b
          })
        u(() => {
          var D, R
          const A = (D = T.current) == null ? void 0 : D.subscriptionOptions
          M !== A && ((R = T.current) == null || R.updateSubscriptionOptions(M))
        }, [M])
        const O = k.useRef(M)
        u(() => {
          O.current = M
        }, [M])
        const L = k.useCallback(
          function (A, D = !1) {
            let R
            return (
              t(() => {
                var I
                ;(I = T.current) == null || I.unsubscribe(),
                  (T.current = R =
                    S(
                      C(A, { subscriptionOptions: O.current, forceRefetch: !D })
                    )),
                  j(A)
              }),
              R
            )
          },
          [S, C]
        )
        return (
          k.useEffect(
            () => () => {
              var A
              ;(A = T == null ? void 0 : T.current) == null || A.unsubscribe()
            },
            []
          ),
          k.useEffect(() => {
            E !== $u && !T.current && L(E, !0)
          }, [E, L]),
          k.useMemo(() => [L, E], [L, E])
        )
      },
      m = (p, { skip: v = !1, selectFromResult: w } = {}) => {
        const { select: b } = e.endpoints[y],
          C = Nm(v ? vr : p, s, l.endpointDefinitions[y], y),
          S = k.useRef(void 0),
          E = k.useMemo(
            () =>
              a([b(C), (L, A) => A, (L) => C], c, {
                memoizeOptions: { resultEqualityCheck: So }
              }),
            [b, C]
          ),
          j = k.useMemo(
            () =>
              w
                ? a([E], w, {
                    devModeChecks: { identityFunctionCheck: 'never' }
                  })
                : E,
            [E, w]
          ),
          T = r((L) => j(L, S.current), So),
          M = i(),
          O = E(M.getState(), S.current)
        return (
          vC(() => {
            S.current = O
          }, [O]),
          T
        )
      }
    return {
      useQueryState: m,
      useQuerySubscription: _,
      useLazyQuerySubscription: x,
      useLazyQuery(p) {
        const [v, w] = x(p),
          b = m(w, { ...p, skip: w === $u }),
          C = k.useMemo(() => ({ lastArg: w }), [w])
        return k.useMemo(() => [v, b, C], [v, b, C])
      },
      useQuery(p, v) {
        const w = _(p, v),
          b = m(p, {
            selectFromResult: p === vr || (v != null && v.skip) ? void 0 : gC,
            ...v
          }),
          {
            data: C,
            status: S,
            isLoading: E,
            isSuccess: j,
            isError: T,
            error: M
          } = b
        return (
          k.useDebugValue({
            data: C,
            status: S,
            isLoading: E,
            isSuccess: j,
            isError: T,
            error: M
          }),
          k.useMemo(() => ({ ...b, ...w }), [b, w])
        )
      }
    }
  }
  function g(y) {
    return ({ selectFromResult: _, fixedCacheKey: x } = {}) => {
      const { select: m, initiate: p } = e.endpoints[y],
        v = n(),
        [w, b] = k.useState()
      k.useEffect(
        () => () => {
          ;(w != null && w.arg.fixedCacheKey) || w == null || w.reset()
        },
        [w]
      )
      const C = k.useCallback(
          function (V) {
            const q = v(p(V, { fixedCacheKey: x }))
            return b(q), q
          },
          [v, p, x]
        ),
        { requestId: S } = w || {},
        E = k.useMemo(
          () =>
            m({
              fixedCacheKey: x,
              requestId: w == null ? void 0 : w.requestId
            }),
          [x, w, m]
        ),
        j = k.useMemo(() => (_ ? a([E], _) : E), [_, E]),
        T = r(j, So),
        M = x == null ? (w == null ? void 0 : w.arg.originalArgs) : void 0,
        O = k.useCallback(() => {
          t(() => {
            w && b(void 0),
              x &&
                v(
                  e.internalActions.removeMutationResult({
                    requestId: S,
                    fixedCacheKey: x
                  })
                )
          })
        }, [v, x, w, S]),
        {
          endpointName: L,
          data: A,
          status: D,
          isLoading: R,
          isSuccess: I,
          isError: N,
          error: F
        } = T
      k.useDebugValue({
        endpointName: L,
        data: A,
        status: D,
        isLoading: R,
        isSuccess: I,
        isError: N,
        error: F
      })
      const z = k.useMemo(
        () => ({ ...T, originalArgs: M, reset: O }),
        [T, M, O]
      )
      return k.useMemo(() => [C, z], [C, z])
    }
  }
}
var _C = Symbol(),
  xC = ({
    batch: e = Nw,
    hooks: t = { useDispatch: s1, useSelector: r1, useStore: a1 },
    createSelector: n = mp,
    unstable__sideEffectsInRender: r = !1,
    ...i
  } = {}) => ({
    name: _C,
    init(o, { serializeQueryArgs: a }, s) {
      const l = o,
        {
          buildQueryHooks: u,
          buildMutationHook: c,
          usePrefetch: f
        } = yC({
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
        Xa(l, { usePrefetch: f }),
        Xa(s, { batch: e }),
        {
          injectEndpoint(d, g) {
            if (lC(g)) {
              const {
                useQuery: y,
                useLazyQuery: _,
                useLazyQuerySubscription: x,
                useQueryState: m,
                useQuerySubscription: p
              } = u(d)
              Xa(l.endpoints[d], {
                useQuery: y,
                useLazyQuery: _,
                useLazyQuerySubscription: x,
                useQueryState: m,
                useQuerySubscription: p
              }),
                (o[`use${zu(d)}Query`] = y),
                (o[`useLazy${zu(d)}Query`] = _)
            } else if (uC(g)) {
              const y = c(d)
              Xa(l.endpoints[d], { useMutation: y }),
                (o[`use${zu(d)}Mutation`] = y)
            }
          }
        }
      )
    }
  }),
  O1 = KS(sC(), xC())
const Kr = 'shopninja-optimarko.myshopify.com',
  jo = O1({
    reducerPath: 'orderEditApi',
    baseQuery: T1({
      baseUrl: 'https://order-editing-staging.cleversity.com/api/storefront'
    }),
    endpoints: (e) => ({
      searchOrder: e.mutation({
        query: (t, n) => ({
          url: `process-eligible-order?order_name=${t}&shop_url=${Kr}&email=${n}`,
          method: 'GET'
        })
      }),
      cancelOrder: e.mutation({
        query: (t) => ({
          url: `order-cancellation?shop_url=${Kr}`,
          method: 'POST',
          body: t
        })
      }),
      getCalculatedOrder: e.query({
        query: (t) =>
          `adjust-product-quantity/${t.split('/').pop()}?shop_url=${Kr}`,
        transformResponse: (t) => t.data
      }),
      changeQuantity: e.mutation({
        query: (t) => ({
          url: `adjust-product-quantity?shop_url=${Kr}`,
          method: 'POST',
          body: t
        })
      }),
      changeSippingAddress: e.mutation({
        query: (t) => ({
          url: `update-shipping-address?shop_url=${Kr}`,
          method: 'POST',
          body: t
        })
      }),
      changeSizeAndVariants: e.mutation({
        query: (t) => ({
          url: `switch-product?shop_url=${Kr}`,
          method: 'POST',
          body: t
        })
      })
    })
  }),
  {
    useSearchOrderMutation: wC,
    useCancelOrderMutation: U7,
    useLazyGetCalculatedOrderQuery: G7,
    useChangeQuantityMutation: Q7,
    useChangeSippingAddressMutation: K7,
    useChangeSizeAndVariantsMutation: X7
  } = jo,
  bC = { order: {}, page: 'Home' },
  A1 = In({
    name: 'orderEdit',
    initialState: bC,
    reducers: {
      setPage: (e, t) => {
        e.page = t.payload
      }
    },
    extraReducers: (e) => {
      e.addMatcher(jo.endpoints.searchOrder.matchFulfilled, (t, n) => {
        t.order = n.payload.order
      })
    }
  }),
  { setPage: SC } = A1.actions,
  CC = A1.reducer,
  EC = () => {
    const [e, t] = k.useState(''),
      [n, { isLoading: r, isError: i }] = wC(),
      [o, a] = k.useState(''),
      s = s1(),
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
            s(SC('OrderDetails'))
      }
    return (
      k.useEffect(() => {
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
  jC = '_opt_order_edit_container_a7qqi_1',
  TC = '_setting_a7qqi_15',
  kC = '_content_a7qqi_37',
  PC = '_order_details_desktop_a7qqi_51',
  MC = '_order_summary_desktop_a7qqi_53',
  NC = '_productSection_a7qqi_61',
  LC = '_productLabel_a7qqi_71',
  OC = '_settings_box_a7qqi_83',
  AC = '_settings_icon_a7qqi_99',
  RC = '_settings_label_a7qqi_125',
  IC = '_productCard_a7qqi_133',
  FC = '_productImage_a7qqi_151',
  zC = '_productContent_a7qqi_175',
  $C = '_title_a7qqi_181',
  DC = '_description_a7qqi_197',
  VC = '_price_a7qqi_209',
  BC = '_addToCartBtn_a7qqi_221',
  HC = '_modal_main_container_a7qqi_257',
  qC = '_settings_more_box_a7qqi_287',
  de = {
    opt_order_edit_container: jC,
    setting: TC,
    content: kC,
    order_details_desktop: PC,
    order_summary_desktop: MC,
    productSection: NC,
    productLabel: LC,
    settings_box: OC,
    settings_icon: AC,
    settings_label: RC,
    productCard: IC,
    productImage: FC,
    productContent: zC,
    title: $C,
    description: DC,
    price: VC,
    addToCartBtn: BC,
    modal_main_container: HC,
    settings_more_box: qC
  },
  WC = ({
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
  Lm = ({
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
  UC = ({
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
        h.jsx('path', {
          d: 'M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5'
        }),
        h.jsx('polyline', { points: '14 2 14 8 20 8' }),
        h.jsx('path', {
          d: 'M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z'
        })
      ]
    }),
  QC = ({
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
  KC = ({
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
  XC = ({
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
  Vu = ({
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
  YC = ({
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
function Om(e) {
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
        : Om(t[n]) && Om(e[n]) && Object.keys(t[n]).length > 0 && wp(e[n], t[n])
    })
}
const R1 = {
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
function xn() {
  const e = typeof document < 'u' ? document : {}
  return wp(e, R1), e
}
const ZC = {
  document: R1,
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
  return wp(e, ZC), e
}
function JC(e) {
  return (
    e === void 0 && (e = ''),
    e
      .trim()
      .split(' ')
      .filter((t) => !!t.trim())
  )
}
function eE(e) {
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
function xd(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t)
}
function ll() {
  return Date.now()
}
function tE(e) {
  const t = vt()
  let n
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  )
}
function nE(e, t) {
  t === void 0 && (t = 'x')
  const n = vt()
  let r, i, o
  const a = tE(e)
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
function Ya(e) {
  return (
    typeof e == 'object' &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === 'Object'
  )
}
function rE(e) {
  return typeof window < 'u' && typeof window.HTMLElement < 'u'
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11)
}
function st() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ['__proto__', 'constructor', 'prototype']
  for (let n = 1; n < arguments.length; n += 1) {
    const r = n < 0 || arguments.length <= n ? void 0 : arguments[n]
    if (r != null && !rE(r)) {
      const i = Object.keys(Object(r)).filter((o) => t.indexOf(o) < 0)
      for (let o = 0, a = i.length; o < a; o += 1) {
        const s = i[o],
          l = Object.getOwnPropertyDescriptor(r, s)
        l !== void 0 &&
          l.enumerable &&
          (Ya(e[s]) && Ya(r[s])
            ? r[s].__swiper__
              ? (e[s] = r[s])
              : st(e[s], r[s])
            : !Ya(e[s]) && Ya(r[s])
            ? ((e[s] = {}), r[s].__swiper__ ? (e[s] = r[s]) : st(e[s], r[s]))
            : (e[s] = r[s]))
      }
    }
  }
  return e
}
function Za(e, t, n) {
  e.style.setProperty(t, n)
}
function I1(e) {
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
function en(e, t) {
  t === void 0 && (t = '')
  const n = [...e.children]
  return (
    e instanceof HTMLSlotElement && n.push(...e.assignedElements()),
    t ? n.filter((r) => r.matches(t)) : n
  )
}
function iE(e, t) {
  const n = t.contains(e)
  return !n && t instanceof HTMLSlotElement
    ? [...t.assignedElements()].includes(e)
    : n
}
function ul(e) {
  try {
    console.warn(e)
    return
  } catch {}
}
function cl(e, t) {
  t === void 0 && (t = [])
  const n = document.createElement(e)
  return n.classList.add(...(Array.isArray(t) ? t : JC(t))), n
}
function oE(e, t) {
  const n = []
  for (; e.previousElementSibling; ) {
    const r = e.previousElementSibling
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r)
  }
  return n
}
function aE(e, t) {
  const n = []
  for (; e.nextElementSibling; ) {
    const r = e.nextElementSibling
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r)
  }
  return n
}
function Bn(e, t) {
  return vt().getComputedStyle(e, null).getPropertyValue(t)
}
function Am(e) {
  let t = e,
    n
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; ) t.nodeType === 1 && (n += 1)
    return n
  }
}
function sE(e, t) {
  const n = []
  let r = e.parentElement
  for (; r; ) n.push(r), (r = r.parentElement)
  return n
}
function Rm(e, t, n) {
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
function dn(e) {
  return (Array.isArray(e) ? e : [e]).filter((t) => !!t)
}
let Bu
function lE() {
  const e = vt(),
    t = xn()
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
function F1() {
  return Bu || (Bu = lE()), Bu
}
let Hu
function uE(e) {
  let { userAgent: t } = e === void 0 ? {} : e
  const n = F1(),
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
function z1(e) {
  return e === void 0 && (e = {}), Hu || (Hu = uE(e)), Hu
}
let qu
function cE() {
  const e = vt(),
    t = z1()
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
function dE() {
  return qu || (qu = cE()), qu
}
function fE(e) {
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
              let { contentBoxSize: m, contentRect: p, target: v } = x
              ;(v && v !== t.el) ||
                ((y = p ? p.width : (m[0] || m).inlineSize),
                (_ = p ? p.height : (m[0] || m).blockSize))
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
function pE(e) {
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
          const c = sE(t.hostEl)
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
var hE = {
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
function mE() {
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
        parseInt(Bn(r, 'padding-left') || 0, 10) -
        parseInt(Bn(r, 'padding-right') || 0, 10)),
      (n =
        n -
        parseInt(Bn(r, 'padding-top') || 0, 10) -
        parseInt(Bn(r, 'padding-bottom') || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, { width: t, height: n, size: e.isHorizontal() ? t : n }))
}
function vE() {
  const e = this
  function t(T, M) {
    return parseFloat(T.getPropertyValue(e.getDirectionLabel(M)) || 0)
  }
  const n = e.params,
    { wrapperEl: r, slidesEl: i, size: o, rtlTranslate: a, wrongRTL: s } = e,
    l = e.virtual && n.virtual.enabled,
    u = l ? e.virtual.slides.length : e.slides.length,
    c = en(i, `.${e.params.slideClass}, swiper-slide`),
    f = l ? e.virtual.slides.length : c.length
  let d = []
  const g = [],
    y = []
  let _ = n.slidesOffsetBefore
  typeof _ == 'function' && (_ = n.slidesOffsetBefore.call(e))
  let x = n.slidesOffsetAfter
  typeof x == 'function' && (x = n.slidesOffsetAfter.call(e))
  const m = e.snapGrid.length,
    p = e.slidesGrid.length
  let v = n.spaceBetween,
    w = -_,
    b = 0,
    C = 0
  if (typeof o > 'u') return
  typeof v == 'string' && v.indexOf('%') >= 0
    ? (v = (parseFloat(v.replace('%', '')) / 100) * o)
    : typeof v == 'string' && (v = parseFloat(v)),
    (e.virtualSize = -v),
    c.forEach((T) => {
      a ? (T.style.marginLeft = '') : (T.style.marginRight = ''),
        (T.style.marginBottom = ''),
        (T.style.marginTop = '')
    }),
    n.centeredSlides &&
      n.cssMode &&
      (Za(r, '--swiper-centered-offset-before', ''),
      Za(r, '--swiper-centered-offset-after', ''))
  const S = n.grid && n.grid.rows > 1 && e.grid
  S ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides()
  let E
  const j =
    n.slidesPerView === 'auto' &&
    n.breakpoints &&
    Object.keys(n.breakpoints).filter(
      (T) => typeof n.breakpoints[T].slidesPerView < 'u'
    ).length > 0
  for (let T = 0; T < f; T += 1) {
    E = 0
    let M
    if (
      (c[T] && (M = c[T]),
      S && e.grid.updateSlide(T, M, c),
      !(c[T] && Bn(M, 'display') === 'none'))
    ) {
      if (n.slidesPerView === 'auto') {
        j && (c[T].style[e.getDirectionLabel('width')] = '')
        const O = getComputedStyle(M),
          L = M.style.transform,
          A = M.style.webkitTransform
        if (
          (L && (M.style.transform = 'none'),
          A && (M.style.webkitTransform = 'none'),
          n.roundLengths)
        )
          E = e.isHorizontal() ? Rm(M, 'width') : Rm(M, 'height')
        else {
          const D = t(O, 'width'),
            R = t(O, 'padding-left'),
            I = t(O, 'padding-right'),
            N = t(O, 'margin-left'),
            F = t(O, 'margin-right'),
            z = O.getPropertyValue('box-sizing')
          if (z && z === 'border-box') E = D + N + F
          else {
            const { clientWidth: V, offsetWidth: q } = M
            E = D + R + I + N + F + (q - V)
          }
        }
        L && (M.style.transform = L),
          A && (M.style.webkitTransform = A),
          n.roundLengths && (E = Math.floor(E))
      } else
        (E = (o - (n.slidesPerView - 1) * v) / n.slidesPerView),
          n.roundLengths && (E = Math.floor(E)),
          c[T] && (c[T].style[e.getDirectionLabel('width')] = `${E}px`)
      c[T] && (c[T].swiperSlideSize = E),
        y.push(E),
        n.centeredSlides
          ? ((w = w + E / 2 + b / 2 + v),
            b === 0 && T !== 0 && (w = w - o / 2 - v),
            T === 0 && (w = w - o / 2 - v),
            Math.abs(w) < 1 / 1e3 && (w = 0),
            n.roundLengths && (w = Math.floor(w)),
            C % n.slidesPerGroup === 0 && d.push(w),
            g.push(w))
          : (n.roundLengths && (w = Math.floor(w)),
            (C - Math.min(e.params.slidesPerGroupSkip, C)) %
              e.params.slidesPerGroup ===
              0 && d.push(w),
            g.push(w),
            (w = w + E + v)),
        (e.virtualSize += E + v),
        (b = E),
        (C += 1)
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, o) + x),
    a &&
      s &&
      (n.effect === 'slide' || n.effect === 'coverflow') &&
      (r.style.width = `${e.virtualSize + v}px`),
    n.setWrapperSize &&
      (r.style[e.getDirectionLabel('width')] = `${e.virtualSize + v}px`),
    S && e.grid.updateWrapperSize(E, d),
    !n.centeredSlides)
  ) {
    const T = []
    for (let M = 0; M < d.length; M += 1) {
      let O = d[M]
      n.roundLengths && (O = Math.floor(O)),
        d[M] <= e.virtualSize - o && T.push(O)
    }
    ;(d = T),
      Math.floor(e.virtualSize - o) - Math.floor(d[d.length - 1]) > 1 &&
        d.push(e.virtualSize - o)
  }
  if (l && n.loop) {
    const T = y[0] + v
    if (n.slidesPerGroup > 1) {
      const M = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup
        ),
        O = T * n.slidesPerGroup
      for (let L = 0; L < M; L += 1) d.push(d[d.length - 1] + O)
    }
    for (let M = 0; M < e.virtual.slidesBefore + e.virtual.slidesAfter; M += 1)
      n.slidesPerGroup === 1 && d.push(d[d.length - 1] + T),
        g.push(g[g.length - 1] + T),
        (e.virtualSize += T)
  }
  if ((d.length === 0 && (d = [0]), v !== 0)) {
    const T =
      e.isHorizontal() && a ? 'marginLeft' : e.getDirectionLabel('marginRight')
    c.filter((M, O) =>
      !n.cssMode || n.loop ? !0 : O !== c.length - 1
    ).forEach((M) => {
      M.style[T] = `${v}px`
    })
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let T = 0
    y.forEach((O) => {
      T += O + (v || 0)
    }),
      (T -= v)
    const M = T > o ? T - o : 0
    d = d.map((O) => (O <= 0 ? -_ : O > M ? M + x : O))
  }
  if (n.centerInsufficientSlides) {
    let T = 0
    y.forEach((O) => {
      T += O + (v || 0)
    }),
      (T -= v)
    const M = (n.slidesOffsetBefore || 0) + (n.slidesOffsetAfter || 0)
    if (T + M < o) {
      const O = (o - T - M) / 2
      d.forEach((L, A) => {
        d[A] = L - O
      }),
        g.forEach((L, A) => {
          g[A] = L + O
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
    Za(r, '--swiper-centered-offset-before', `${-d[0]}px`),
      Za(
        r,
        '--swiper-centered-offset-after',
        `${e.size / 2 - y[y.length - 1] / 2}px`
      )
    const T = -e.snapGrid[0],
      M = -e.slidesGrid[0]
    ;(e.snapGrid = e.snapGrid.map((O) => O + T)),
      (e.slidesGrid = e.slidesGrid.map((O) => O + M))
  }
  if (
    (f !== u && e.emit('slidesLengthChange'),
    d.length !== m &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit('snapGridLengthChange')),
    g.length !== p && e.emit('slidesGridLengthChange'),
    n.watchSlidesProgress && e.updateSlidesOffset(),
    e.emit('slidesUpdated'),
    !l && !n.cssMode && (n.effect === 'slide' || n.effect === 'fade'))
  ) {
    const T = `${n.containerModifierClass}backface-hidden`,
      M = e.el.classList.contains(T)
    f <= n.maxBackfaceHiddenSlides
      ? M || e.el.classList.add(T)
      : M && e.el.classList.remove(T)
  }
}
function gE(e) {
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
function yE() {
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
const Im = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n)
}
function _E(e) {
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
      Im(u, x, n.slideVisibleClass),
      Im(u, _, n.slideFullyVisibleClass),
      (u.progress = i ? -f : f),
      (u.originalProgress = i ? -d : d)
  }
}
function xE(e) {
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
const Wu = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n)
}
function wE() {
  const e = this,
    { slides: t, params: n, slidesEl: r, activeIndex: i } = e,
    o = e.virtual && n.virtual.enabled,
    a = e.grid && n.grid && n.grid.rows > 1,
    s = (f) => en(r, `.${n.slideClass}${f}, swiper-slide${f}`)[0]
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
      ((c = aE(l, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !c && (c = t[0]),
      (u = oE(l, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !u === 0 && (u = t[t.length - 1]))),
    t.forEach((f) => {
      Wu(f, f === l, n.slideActiveClass),
        Wu(f, f === c, n.slideNextClass),
        Wu(f, f === u, n.slidePrevClass)
    }),
    e.emitSlidesClasses()
}
const Es = (e, t) => {
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
  Uu = (e, t) => {
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
          s.includes(l.column) && Uu(e, u)
        })
      return
    }
    const o = i + r - 1
    if (e.params.rewind || e.params.loop)
      for (let a = i - t; a <= o + t; a += 1) {
        const s = ((a % n) + n) % n
        ;(s < i || s > o) && Uu(e, s)
      }
    else
      for (let a = Math.max(i - t, 0); a <= Math.min(o + t, n - 1); a += 1)
        a !== i && (a > o || a < i) && Uu(e, a)
  }
function bE(e) {
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
function SE(e) {
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
  if ((typeof l > 'u' && (l = bE(t)), r.indexOf(n) >= 0)) u = r.indexOf(n)
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
function CE(e, t) {
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
var EE = {
  updateSize: mE,
  updateSlides: vE,
  updateAutoHeight: gE,
  updateSlidesOffset: yE,
  updateSlidesProgress: _E,
  updateProgress: xE,
  updateSlidesClasses: wE,
  updateActiveIndex: SE,
  updateClickedSlide: CE
}
function jE(e) {
  e === void 0 && (e = this.isHorizontal() ? 'x' : 'y')
  const t = this,
    { params: n, rtlTranslate: r, translate: i, wrapperEl: o } = t
  if (n.virtualTranslate) return r ? -i : i
  if (n.cssMode) return i
  let a = nE(o, e)
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
function PE() {
  return -this.snapGrid[this.snapGrid.length - 1]
}
function ME(e, t, n, r, i) {
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
          I1({ swiper: o, targetPosition: -c, side: f ? 'left' : 'top' }), !0
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
var NE = {
  getTranslate: jE,
  setTranslate: TE,
  minTranslate: kE,
  maxTranslate: PE,
  translateTo: ME
}
function LE(e, t) {
  const n = this
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? '0ms' : '')),
    n.emit('setTransition', e, t)
}
function $1(e) {
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
    $1({ swiper: n, runCallbacks: e, direction: t, step: 'Start' }))
}
function AE(e, t) {
  e === void 0 && (e = !0)
  const n = this,
    { params: r } = n
  ;(n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      $1({ swiper: n, runCallbacks: e, direction: t, step: 'End' }))
}
var RE = { setTransition: LE, transitionStart: OE, transitionEnd: AE }
function IE(e, t, n, r, i) {
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
  const m = -l[x]
  if (s.normalizeSlideIndex)
    for (let b = 0; b < u.length; b += 1) {
      const C = -Math.floor(m * 100),
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
        ? m > o.translate && m > o.minTranslate()
        : m < o.translate && m < o.minTranslate())) ||
      (!o.allowSlidePrev &&
        m > o.translate &&
        m > o.maxTranslate() &&
        (f || 0) !== a))
  )
    return !1
  a !== (c || 0) && n && o.emit('beforeSlideChangeStart'), o.updateProgress(m)
  let p
  a > f ? (p = 'next') : a < f ? (p = 'prev') : (p = 'reset')
  const v = o.virtual && o.params.virtual.enabled
  if (!(v && i) && ((d && -m === o.translate) || (!d && m === o.translate)))
    return (
      o.updateActiveIndex(a),
      s.autoHeight && o.updateAutoHeight(),
      o.updateSlidesClasses(),
      s.effect !== 'slide' && o.setTranslate(m),
      p !== 'reset' && (o.transitionStart(n, p), o.transitionEnd(n, p)),
      !1
    )
  if (s.cssMode) {
    const b = o.isHorizontal(),
      C = d ? m : -m
    if (t === 0)
      v &&
        ((o.wrapperEl.style.scrollSnapType = 'none'),
        (o._immediateVirtual = !0)),
        v && !o._cssModeVirtualInitialSet && o.params.initialSlide > 0
          ? ((o._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              g[b ? 'scrollLeft' : 'scrollTop'] = C
            }))
          : (g[b ? 'scrollLeft' : 'scrollTop'] = C),
        v &&
          requestAnimationFrame(() => {
            ;(o.wrapperEl.style.scrollSnapType = ''), (o._immediateVirtual = !1)
          })
    else {
      if (!o.support.smoothScroll)
        return (
          I1({ swiper: o, targetPosition: C, side: b ? 'left' : 'top' }), !0
        )
      g.scrollTo({ [b ? 'left' : 'top']: C, behavior: 'smooth' })
    }
    return !0
  }
  return (
    o.setTransition(t),
    o.setTranslate(m),
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
function FE(e, t, n, r) {
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
function zE(e, t, n) {
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
  function d(m) {
    return m < 0 ? -Math.floor(Math.abs(m)) : Math.floor(m)
  }
  const g = d(f),
    y = o.map((m) => d(m))
  let _ = o[y.indexOf(g) - 1]
  if (typeof _ > 'u' && i.cssMode) {
    let m
    o.forEach((p, v) => {
      g >= p && (m = v)
    }),
      typeof m < 'u' && (_ = o[m > 0 ? m - 1 : m])
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
    const m =
      r.params.virtual && r.params.virtual.enabled && r.virtual
        ? r.virtual.slides.length - 1
        : r.slides.length - 1
    return r.slideTo(m, e, t, n)
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
function VE(e, t, n, r) {
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
function BE() {
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
              en(n, `${a}[data-swiper-slide-index="${o}"]`)[0]
            )),
            xd(() => {
              e.slideTo(i)
            }))
          : e.slideTo(i)
        : i > e.slides.length - r
        ? (e.loopFix(),
          (i = e.getSlideIndex(
            en(n, `${a}[data-swiper-slide-index="${o}"]`)[0]
          )),
          xd(() => {
            e.slideTo(i)
          }))
        : e.slideTo(i)
  } else e.slideTo(i)
}
var HE = {
  slideTo: IE,
  slideToLoop: FE,
  slideNext: zE,
  slidePrev: $E,
  slideReset: DE,
  slideToClosest: VE,
  slideToClickedSlide: BE
}
function qE(e) {
  const t = this,
    { params: n, slidesEl: r } = t
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return
  const i = () => {
      en(r, `.${n.slideClass}, swiper-slide`).forEach((f, d) => {
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
          ? cl('swiper-slide', [n.slideBlankClass])
          : cl('div', [n.slideClass, n.slideBlankClass])
        t.slidesEl.append(d)
      }
    }
  if (s) {
    if (n.loopAddBlankSlides) {
      const c = a - (t.slides.length % a)
      u(c), t.recalcSlides(), t.updateSlides()
    } else
      ul(
        'Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
      )
    i()
  } else if (l) {
    if (n.loopAddBlankSlides) {
      const c = n.grid.rows - (t.slides.length % n.grid.rows)
      u(c), t.recalcSlides(), t.updateSlides()
    } else
      ul(
        'Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
      )
    i()
  } else i()
  t.loopFix({
    slideRealIndex: e,
    direction: n.centeredSlides ? void 0 : 'next'
  })
}
function WE(e) {
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
  let m = x
  m % x !== 0 && (m += x - (m % x)),
    (m += g.loopAdditionalSlides),
    (l.loopedSlides = m)
  const p = l.grid && g.grid && g.grid.rows > 1
  u.length < _ + m
    ? ul(
        'Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters'
      )
    : p &&
      g.grid.fill === 'row' &&
      ul(
        'Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`'
      )
  const v = [],
    w = []
  let b = l.activeIndex
  typeof o > 'u'
    ? (o = l.getSlideIndex(
        u.filter((L) => L.classList.contains(g.slideActiveClass))[0]
      ))
    : (b = o)
  const C = r === 'next' || !r,
    S = r === 'prev' || !r
  let E = 0,
    j = 0
  const T = p ? Math.ceil(u.length / g.grid.rows) : u.length,
    O = (p ? u[o].column : o) + (y && typeof i > 'u' ? -_ / 2 + 0.5 : 0)
  if (O < m) {
    E = Math.max(m - O, x)
    for (let L = 0; L < m - O; L += 1) {
      const A = L - Math.floor(L / T) * T
      if (p) {
        const D = T - A - 1
        for (let R = u.length - 1; R >= 0; R -= 1)
          u[R].column === D && v.push(R)
      } else v.push(T - A - 1)
    }
  } else if (O + _ > T - m) {
    j = Math.max(O - (T - m * 2), x)
    for (let L = 0; L < j; L += 1) {
      const A = L - Math.floor(L / T) * T
      p
        ? u.forEach((D, R) => {
            D.column === A && w.push(R)
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
      v.forEach((L) => {
        ;(u[L].swiperLoopMoveDOM = !0),
          d.prepend(u[L]),
          (u[L].swiperLoopMoveDOM = !1)
      }),
    C &&
      w.forEach((L) => {
        ;(u[L].swiperLoopMoveDOM = !0),
          d.append(u[L]),
          (u[L].swiperLoopMoveDOM = !1)
      }),
    l.recalcSlides(),
    g.slidesPerView === 'auto'
      ? l.updateSlides()
      : p &&
        ((v.length > 0 && S) || (w.length > 0 && C)) &&
        l.slides.forEach((L, A) => {
          l.grid.updateSlide(A, L, l.slides)
        }),
    g.watchSlidesProgress && l.updateSlidesOffset(),
    n)
  ) {
    if (v.length > 0 && S) {
      if (typeof t > 'u') {
        const L = l.slidesGrid[b],
          D = l.slidesGrid[b + E] - L
        s
          ? l.setTranslate(l.translate - D)
          : (l.slideTo(b + Math.ceil(E), 0, !1, !0),
            i &&
              ((l.touchEventsData.startTranslate =
                l.touchEventsData.startTranslate - D),
              (l.touchEventsData.currentTranslate =
                l.touchEventsData.currentTranslate - D)))
      } else if (i) {
        const L = p ? v.length / g.grid.rows : v.length
        l.slideTo(l.activeIndex + L, 0, !1, !0),
          (l.touchEventsData.currentTranslate = l.translate)
      }
    } else if (w.length > 0 && C)
      if (typeof t > 'u') {
        const L = l.slidesGrid[b],
          D = l.slidesGrid[b - j] - L
        s
          ? l.setTranslate(l.translate - D)
          : (l.slideTo(b - j, 0, !1, !0),
            i &&
              ((l.touchEventsData.startTranslate =
                l.touchEventsData.startTranslate - D),
              (l.touchEventsData.currentTranslate =
                l.touchEventsData.currentTranslate - D)))
      } else {
        const L = p ? w.length / g.grid.rows : w.length
        l.slideTo(l.activeIndex - L, 0, !1, !0)
      }
  }
  if (
    ((l.allowSlidePrev = c),
    (l.allowSlideNext = f),
    l.controller && l.controller.control && !a)
  ) {
    const L = {
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
              ...L,
              slideTo: A.params.slidesPerView === g.slidesPerView ? n : !1
            })
        })
      : l.controller.control instanceof l.constructor &&
        l.controller.control.params.loop &&
        l.controller.control.loopFix({
          ...L,
          slideTo:
            l.controller.control.params.slidesPerView === g.slidesPerView
              ? n
              : !1
        })
  }
  l.emit('loopFix')
}
function UE() {
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
var GE = { loopCreate: qE, loopFix: WE, loopDestroy: UE }
function QE(e) {
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
function KE() {
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
var XE = { setGrabCursor: QE, unsetGrabCursor: KE }
function YE(e, t) {
  t === void 0 && (t = this)
  function n(r) {
    if (!r || r === xn() || r === vt()) return null
    r.assignedSlot && (r = r.assignedSlot)
    const i = r.closest(e)
    return !i && !r.getRootNode ? null : i || n(r.getRootNode().host)
  }
  return n(t)
}
function Fm(e, t, n) {
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
function ZE(e) {
  const t = this,
    n = xn()
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
    Fm(t, r, r.targetTouches[0].pageX)
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
    (o.touchEventsTarget === 'wrapper' && !iE(l, t.wrapperEl)) ||
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
  if (o.noSwiping && (d ? YE(f, l) : l.closest(f))) {
    t.allowClick = !0
    return
  }
  if (o.swipeHandler && !l.closest(o.swipeHandler)) return
  ;(a.currentX = r.pageX), (a.currentY = r.pageY)
  const g = a.currentX,
    y = a.currentY
  if (!Fm(t, r, g)) return
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }),
    (a.startX = g),
    (a.startY = y),
    (i.touchStartTime = ll()),
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
function JE(e) {
  const t = xn(),
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
        (r.touchStartTime = ll()))
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
  const m = n.params.loop && !i.cssMode,
    p =
      (n.touchesDirection === 'next' && n.allowSlideNext) ||
      (n.touchesDirection === 'prev' && n.allowSlidePrev)
  if (!r.isMoved) {
    if (
      (m && p && n.loopFix({ direction: n.swipeDirection }),
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
  let v
  if (
    (new Date().getTime(),
    r.isMoved &&
      r.allowThresholdMove &&
      x !== n.touchesDirection &&
      m &&
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
      ? (m &&
          p &&
          !v &&
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
        (m &&
          p &&
          !v &&
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
function e4(e) {
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
  const f = ll(),
    d = f - n.touchStartTime
  if (t.allowClick) {
    const b = r.path || (r.composedPath && r.composedPath())
    t.updateClickedSlide((b && b[0]) || r.target, b),
      t.emit('tap click', r),
      d < 300 && f - n.lastClickTime < 300 && t.emit('doubleTap doubleClick', r)
  }
  if (
    ((n.lastClickTime = ll()),
    xd(() => {
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
  let m = null,
    p = null
  a.rewind &&
    (t.isBeginning
      ? (p =
          a.virtual && a.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (m = 0))
  const v = (g - u[_]) / x,
    w = _ < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup
  if (d > a.longSwipesMs) {
    if (!a.longSwipes) {
      t.slideTo(t.activeIndex)
      return
    }
    t.swipeDirection === 'next' &&
      (v >= a.longSwipesRatio
        ? t.slideTo(a.rewind && t.isEnd ? m : _ + w)
        : t.slideTo(_)),
      t.swipeDirection === 'prev' &&
        (v > 1 - a.longSwipesRatio
          ? t.slideTo(_ + w)
          : p !== null && v < 0 && Math.abs(v) > a.longSwipesRatio
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
      : (t.swipeDirection === 'next' && t.slideTo(m !== null ? m : _ + w),
        t.swipeDirection === 'prev' && t.slideTo(p !== null ? p : _))
  }
}
function zm() {
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
function t4(e) {
  const t = this
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())))
}
function n4() {
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
function r4(e) {
  const t = this
  Es(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== 'auto' && !t.params.autoHeight)
    ) && t.update()
}
function i4() {
  const e = this
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0),
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = 'auto'))
}
const D1 = (e, t) => {
  const n = xn(),
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
          zm,
          !0
        )
      : e[u]('observerUpdate', zm, !0),
    i[l]('load', e.onLoad, { capture: !0 }))
}
function o4() {
  const e = this,
    { params: t } = e
  ;(e.onTouchStart = ZE.bind(e)),
    (e.onTouchMove = JE.bind(e)),
    (e.onTouchEnd = e4.bind(e)),
    (e.onDocumentTouchStart = i4.bind(e)),
    t.cssMode && (e.onScroll = n4.bind(e)),
    (e.onClick = t4.bind(e)),
    (e.onLoad = r4.bind(e)),
    D1(e, 'on')
}
function a4() {
  D1(this, 'off')
}
var s4 = { attachEvents: o4, detachEvents: a4 }
const $m = (e, t) => e.grid && t.grid && t.grid.rows > 1
function l4() {
  const e = this,
    { realIndex: t, initialized: n, params: r, el: i } = e,
    o = r.breakpoints
  if (!o || (o && Object.keys(o).length === 0)) return
  const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el)
  if (!a || e.currentBreakpoint === a) return
  const l = (a in o ? o[a] : void 0) || e.originalParams,
    u = $m(e, r),
    c = $m(e, l),
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
    ['navigation', 'pagination', 'scrollbar'].forEach((v) => {
      if (typeof l[v] > 'u') return
      const w = r[v] && r[v].enabled,
        b = l[v] && l[v].enabled
      w && !b && e[v].disable(), !w && b && e[v].enable()
    })
  const y = l.direction && l.direction !== r.direction,
    _ = r.loop && (l.slidesPerView !== r.slidesPerView || y),
    x = r.loop
  y && n && e.changeDirection(), st(e.params, l)
  const m = e.params.enabled,
    p = e.params.loop
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev
  }),
    g && !m ? e.disable() : !g && m && e.enable(),
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
function u4(e, t, n) {
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
var c4 = { setBreakpoint: l4, getBreakpoint: u4 }
function d4(e, t) {
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
function f4() {
  const e = this,
    { classNames: t, params: n, rtl: r, el: i, device: o } = e,
    a = d4(
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
function p4() {
  const e = this,
    { el: t, classNames: n } = e
  !t ||
    typeof t == 'string' ||
    (t.classList.remove(...n), e.emitContainerClasses())
}
var h4 = { addClasses: f4, removeClasses: p4 }
function m4() {
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
var v4 = { checkOverflow: m4 },
  bd = {
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
function g4(e, t) {
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
const Gu = {
    eventsEmitter: hE,
    update: EE,
    translate: NE,
    transition: RE,
    slide: HE,
    loop: GE,
    grabCursor: XE,
    events: s4,
    breakpoints: c4,
    checkOverflow: v4,
    classes: h4
  },
  Qu = {}
let bp = class pn {
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
    const a = xn()
    if (
      n.el &&
      typeof n.el == 'string' &&
      a.querySelectorAll(n.el).length > 1
    ) {
      const c = []
      return (
        a.querySelectorAll(n.el).forEach((f) => {
          const d = st({}, n, { el: f })
          c.push(new pn(d))
        }),
        c
      )
    }
    const s = this
    ;(s.__swiper__ = !0),
      (s.support = F1()),
      (s.device = z1({ userAgent: n.userAgent })),
      (s.browser = dE()),
      (s.eventsListeners = {}),
      (s.eventsAnyListeners = []),
      (s.modules = [...s.__modules__]),
      n.modules && Array.isArray(n.modules) && s.modules.push(...n.modules)
    const l = {}
    s.modules.forEach((c) => {
      c({
        params: n,
        swiper: s,
        extendParams: g4(n, l),
        on: s.on.bind(s),
        once: s.once.bind(s),
        off: s.off.bind(s),
        emit: s.emit.bind(s)
      })
    })
    const u = st({}, bd, l)
    return (
      (s.params = st({}, u, Qu, n)),
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
      i = en(n, `.${r.slideClass}, swiper-slide`),
      o = Am(i[0])
    return Am(t) - o
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
    t.slides = en(n, `.${r.slideClass}, swiper-slide`)
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
        a.complete && Es(t, a)
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
        : en(r, i())[0]
    return (
      !a &&
        n.params.createElements &&
        ((a = cl('div', n.params.wrapperClass)),
        r.append(a),
        en(r, `.${n.params.slideClass}`).forEach((s) => {
          a.append(s)
        })),
      Object.assign(n, {
        el: r,
        wrapperEl: a,
        slidesEl:
          n.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : a,
        hostEl: n.isElement ? r.parentNode.host : r,
        mounted: !0,
        rtl: r.dir.toLowerCase() === 'rtl' || Bn(r, 'direction') === 'rtl',
        rtlTranslate:
          n.params.direction === 'horizontal' &&
          (r.dir.toLowerCase() === 'rtl' || Bn(r, 'direction') === 'rtl'),
        wrongRTL: Bn(a, 'display') === '-webkit-box'
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
          ? Es(n, o)
          : o.addEventListener('load', (a) => {
              Es(n, a.target)
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
          (r.el && typeof r.el != 'string' && (r.el.swiper = null), eE(r)),
        (r.destroyed = !0)),
      null
    )
  }
  static extendDefaults(t) {
    st(Qu, t)
  }
  static get extendedDefaults() {
    return Qu
  }
  static get defaults() {
    return bd
  }
  static installModule(t) {
    pn.prototype.__modules__ || (pn.prototype.__modules__ = [])
    const n = pn.prototype.__modules__
    typeof t == 'function' && n.indexOf(t) < 0 && n.push(t)
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => pn.installModule(n)), pn)
      : (pn.installModule(t), pn)
  }
}
Object.keys(Gu).forEach((e) => {
  Object.keys(Gu[e]).forEach((t) => {
    bp.prototype[t] = Gu[e][t]
  })
})
bp.use([fE, pE])
const V1 = [
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
function Mr(e) {
  return (
    typeof e == 'object' &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === 'Object' &&
    !e.__swiper__
  )
}
function bi(e, t) {
  const n = ['__proto__', 'constructor', 'prototype']
  Object.keys(t)
    .filter((r) => n.indexOf(r) < 0)
    .forEach((r) => {
      typeof e[r] > 'u'
        ? (e[r] = t[r])
        : Mr(t[r]) && Mr(e[r]) && Object.keys(t[r]).length > 0
        ? t[r].__swiper__
          ? (e[r] = t[r])
          : bi(e[r], t[r])
        : (e[r] = t[r])
    })
}
function B1(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > 'u' &&
      typeof e.navigation.prevEl > 'u'
  )
}
function H1(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > 'u'
}
function q1(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > 'u'
}
function W1(e) {
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
function y4(e) {
  return (
    e === void 0 && (e = ''),
    e
      ? e.includes('swiper-wrapper')
        ? e
        : `swiper-wrapper ${e}`
      : 'swiper-wrapper'
  )
}
function _4(e) {
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
      (j) => j !== 'children' && j !== 'direction' && j !== 'wrapperClass'
    ),
    {
      params: c,
      pagination: f,
      navigation: d,
      scrollbar: g,
      virtual: y,
      thumbs: _
    } = t
  let x, m, p, v, w, b, C, S
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
      (m = !0),
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
      (v = !0),
    i.includes('navigation') &&
      r.navigation &&
      (r.navigation.prevEl || a) &&
      (r.navigation.nextEl || o) &&
      (c.navigation || c.navigation === !1) &&
      d &&
      !d.prevEl &&
      !d.nextEl &&
      (w = !0)
  const E = (j) => {
    t[j] &&
      (t[j].destroy(),
      j === 'navigation'
        ? (t.isElement && (t[j].prevEl.remove(), t[j].nextEl.remove()),
          (c[j].prevEl = void 0),
          (c[j].nextEl = void 0),
          (t[j].prevEl = void 0),
          (t[j].nextEl = void 0))
        : (t.isElement && t[j].el.remove(),
          (c[j].el = void 0),
          (t[j].el = void 0)))
  }
  i.includes('loop') &&
    t.isElement &&
    (c.loop && !r.loop ? (b = !0) : !c.loop && r.loop ? (C = !0) : (S = !0)),
    u.forEach((j) => {
      if (Mr(c[j]) && Mr(r[j]))
        Object.assign(c[j], r[j]),
          (j === 'navigation' || j === 'pagination' || j === 'scrollbar') &&
            'enabled' in r[j] &&
            !r[j].enabled &&
            E(j)
      else {
        const T = r[j]
        ;(T === !0 || T === !1) &&
        (j === 'navigation' || j === 'pagination' || j === 'scrollbar')
          ? T === !1 && E(j)
          : (c[j] = r[j])
      }
    }),
    u.includes('controller') &&
      !m &&
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
    m && (t.controller.control = c.controller.control),
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
    v &&
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
function x4(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !0)
  const n = { on: {} },
    r = {},
    i = {}
  bi(n, bd), (n._emitClasses = !0), (n.init = !1)
  const o = {},
    a = V1.map((l) => l.replace(/_/, '')),
    s = Object.assign({}, e)
  return (
    Object.keys(s).forEach((l) => {
      typeof e[l] > 'u' ||
        (a.indexOf(l) >= 0
          ? Mr(e[l])
            ? ((n[l] = {}), (i[l] = {}), bi(n[l], e[l]), bi(i[l], e[l]))
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
  B1(t) &&
    r &&
    i &&
    ((s.params.navigation.nextEl = r),
    (s.originalParams.navigation.nextEl = r),
    (s.params.navigation.prevEl = i),
    (s.originalParams.navigation.prevEl = i)),
    H1(t) &&
      o &&
      ((s.params.pagination.el = o), (s.originalParams.pagination.el = o)),
    q1(t) &&
      a &&
      ((s.params.scrollbar.el = a), (s.originalParams.scrollbar.el = a)),
    s.init(n)
}
function b4(e, t, n, r, i) {
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
    V1.filter((l) => l[0] === '_')
      .map((l) => l.replace(/_/, ''))
      .forEach((l) => {
        if (l in e && l in t)
          if (Mr(e[l]) && Mr(t[l])) {
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
const S4 = (e) => {
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
function dl() {
  return (
    (dl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    dl.apply(this, arguments)
  )
}
function U1(e) {
  return (
    e.type && e.type.displayName && e.type.displayName.includes('SwiperSlide')
  )
}
function G1(e) {
  const t = []
  return (
    te.Children.toArray(e).forEach((n) => {
      U1(n)
        ? t.push(n)
        : n.props &&
          n.props.children &&
          G1(n.props.children).forEach((r) => t.push(r))
    }),
    t
  )
}
function C4(e) {
  const t = [],
    n = {
      'container-start': [],
      'container-end': [],
      'wrapper-start': [],
      'wrapper-end': []
    }
  return (
    te.Children.toArray(e).forEach((r) => {
      if (U1(r)) t.push(r)
      else if (r.props && r.props.slot && n[r.props.slot])
        n[r.props.slot].push(r)
      else if (r.props && r.props.children) {
        const i = G1(r.props.children)
        i.length > 0 ? i.forEach((o) => t.push(o)) : n['container-end'].push(r)
      } else n['container-end'].push(r)
    }),
    { slides: t, slots: n }
  )
}
function E4(e, t, n) {
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
  return typeof window > 'u' ? k.useEffect(e, t) : k.useLayoutEffect(e, t)
}
const Dm = k.createContext(null),
  j4 = k.createContext(null),
  Sp = k.forwardRef(function (e, t) {
    let {
        className: n,
        tag: r = 'div',
        wrapperTag: i = 'div',
        children: o,
        onSwiper: a,
        ...s
      } = e === void 0 ? {} : e,
      l = !1
    const [u, c] = k.useState('swiper'),
      [f, d] = k.useState(null),
      [g, y] = k.useState(!1),
      _ = k.useRef(!1),
      x = k.useRef(null),
      m = k.useRef(null),
      p = k.useRef(null),
      v = k.useRef(null),
      w = k.useRef(null),
      b = k.useRef(null),
      C = k.useRef(null),
      S = k.useRef(null),
      { params: E, passedParams: j, rest: T, events: M } = x4(s),
      { slides: O, slots: L } = C4(o),
      A = () => {
        y(!g)
      }
    Object.assign(E.on, {
      _containerClasses(F, z) {
        c(z)
      }
    })
    const D = () => {
      Object.assign(E.on, M), (l = !0)
      const F = { ...E }
      if (
        (delete F.wrapperClass,
        (m.current = new bp(F)),
        m.current.virtual && m.current.params.virtual.enabled)
      ) {
        m.current.virtual.slides = O
        const z = {
          cache: !1,
          slides: O,
          renderExternal: d,
          renderExternalUpdate: !1
        }
        bi(m.current.params.virtual, z), bi(m.current.originalParams.virtual, z)
      }
    }
    x.current || D(), m.current && m.current.on('_beforeBreakpoint', A)
    const R = () => {
        l ||
          !M ||
          !m.current ||
          Object.keys(M).forEach((F) => {
            m.current.on(F, M[F])
          })
      },
      I = () => {
        !M ||
          !m.current ||
          Object.keys(M).forEach((F) => {
            m.current.off(F, M[F])
          })
      }
    k.useEffect(() => () => {
      m.current && m.current.off('_beforeBreakpoint', A)
    }),
      k.useEffect(() => {
        !_.current &&
          m.current &&
          (m.current.emitSlidesClasses(), (_.current = !0))
      }),
      To(() => {
        if ((t && (t.current = x.current), !!x.current))
          return (
            m.current.destroyed && D(),
            w4(
              {
                el: x.current,
                nextEl: w.current,
                prevEl: b.current,
                paginationEl: C.current,
                scrollbarEl: S.current,
                swiper: m.current
              },
              E
            ),
            a && !m.current.destroyed && a(m.current),
            () => {
              m.current && !m.current.destroyed && m.current.destroy(!0, !1)
            }
          )
      }, []),
      To(() => {
        R()
        const F = b4(j, p.current, O, v.current, (z) => z.key)
        return (
          (p.current = j),
          (v.current = O),
          F.length &&
            m.current &&
            !m.current.destroyed &&
            _4({
              swiper: m.current,
              slides: O,
              passedParams: j,
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
        S4(m.current)
      }, [f])
    function N() {
      return E.virtual
        ? E4(m.current, O, f)
        : O.map((F, z) =>
            te.cloneElement(F, { swiper: m.current, swiperSlideIndex: z })
          )
    }
    return te.createElement(
      r,
      dl({ ref: x, className: W1(`${u}${n ? ` ${n}` : ''}`) }, T),
      te.createElement(
        j4.Provider,
        { value: m.current },
        L['container-start'],
        te.createElement(
          i,
          { className: y4(E.wrapperClass) },
          L['wrapper-start'],
          N(),
          L['wrapper-end']
        ),
        B1(E) &&
          te.createElement(
            te.Fragment,
            null,
            te.createElement('div', {
              ref: b,
              className: 'swiper-button-prev'
            }),
            te.createElement('div', { ref: w, className: 'swiper-button-next' })
          ),
        q1(E) &&
          te.createElement('div', { ref: S, className: 'swiper-scrollbar' }),
        H1(E) &&
          te.createElement('div', { ref: C, className: 'swiper-pagination' }),
        L['container-end']
      )
    )
  })
Sp.displayName = 'Swiper'
const Cp = k.forwardRef(function (e, t) {
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
  const f = k.useRef(null),
    [d, g] = k.useState('swiper-slide'),
    [y, _] = k.useState(!1)
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
  const m = {
      isActive: d.indexOf('swiper-slide-active') >= 0,
      isVisible: d.indexOf('swiper-slide-visible') >= 0,
      isPrev: d.indexOf('swiper-slide-prev') >= 0,
      isNext: d.indexOf('swiper-slide-next') >= 0
    },
    p = () => (typeof r == 'function' ? r(m) : r),
    v = () => {
      _(!0)
    }
  return te.createElement(
    n,
    dl(
      {
        ref: f,
        className: W1(`${d}${i ? ` ${i}` : ''}`),
        'data-swiper-slide-index': l,
        onLoad: v
      },
      c
    ),
    a &&
      te.createElement(
        Dm.Provider,
        { value: m },
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
        Dm.Provider,
        { value: m },
        p(),
        s &&
          !y &&
          te.createElement('div', { className: 'swiper-lazy-preloader' })
      )
  )
})
Cp.displayName = 'SwiperSlide'
function T4(e, t, n, r) {
  return (
    e.params.createElements &&
      Object.keys(r).forEach((i) => {
        if (!n[i] && n.auto === !0) {
          let o = en(e.el, `.${r[i]}`)[0]
          o || ((o = cl('div', r[i])), (o.className = r[i]), e.el.append(o)),
            (n[i] = o),
            (t[i] = o)
        }
      }),
    n
  )
}
function k4(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e
  n({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock',
      navigationDisabledClass: 'swiper-navigation-disabled'
    }
  }),
    (t.navigation = { nextEl: null, prevEl: null })
  function o(y) {
    let _
    return y &&
      typeof y == 'string' &&
      t.isElement &&
      ((_ = t.el.querySelector(y) || t.hostEl.querySelector(y)), _)
      ? _
      : (y &&
          (typeof y == 'string' && (_ = [...document.querySelectorAll(y)]),
          t.params.uniqueNavElements &&
          typeof y == 'string' &&
          _ &&
          _.length > 1 &&
          t.el.querySelectorAll(y).length === 1
            ? (_ = t.el.querySelector(y))
            : _ && _.length === 1 && (_ = _[0])),
        y && !_ ? y : _)
  }
  function a(y, _) {
    const x = t.params.navigation
    ;(y = dn(y)),
      y.forEach((m) => {
        m &&
          (m.classList[_ ? 'add' : 'remove'](...x.disabledClass.split(' ')),
          m.tagName === 'BUTTON' && (m.disabled = _),
          t.params.watchOverflow &&
            t.enabled &&
            m.classList[t.isLocked ? 'add' : 'remove'](x.lockClass))
      })
  }
  function s() {
    const { nextEl: y, prevEl: _ } = t.navigation
    if (t.params.loop) {
      a(_, !1), a(y, !1)
      return
    }
    a(_, t.isBeginning && !t.params.rewind), a(y, t.isEnd && !t.params.rewind)
  }
  function l(y) {
    y.preventDefault(),
      !(t.isBeginning && !t.params.loop && !t.params.rewind) &&
        (t.slidePrev(), i('navigationPrev'))
  }
  function u(y) {
    y.preventDefault(),
      !(t.isEnd && !t.params.loop && !t.params.rewind) &&
        (t.slideNext(), i('navigationNext'))
  }
  function c() {
    const y = t.params.navigation
    if (
      ((t.params.navigation = T4(
        t,
        t.originalParams.navigation,
        t.params.navigation,
        { nextEl: 'swiper-button-next', prevEl: 'swiper-button-prev' }
      )),
      !(y.nextEl || y.prevEl))
    )
      return
    let _ = o(y.nextEl),
      x = o(y.prevEl)
    Object.assign(t.navigation, { nextEl: _, prevEl: x }),
      (_ = dn(_)),
      (x = dn(x))
    const m = (p, v) => {
      p && p.addEventListener('click', v === 'next' ? u : l),
        !t.enabled && p && p.classList.add(...y.lockClass.split(' '))
    }
    _.forEach((p) => m(p, 'next')), x.forEach((p) => m(p, 'prev'))
  }
  function f() {
    let { nextEl: y, prevEl: _ } = t.navigation
    ;(y = dn(y)), (_ = dn(_))
    const x = (m, p) => {
      m.removeEventListener('click', p === 'next' ? u : l),
        m.classList.remove(...t.params.navigation.disabledClass.split(' '))
    }
    y.forEach((m) => x(m, 'next')), _.forEach((m) => x(m, 'prev'))
  }
  r('init', () => {
    t.params.navigation.enabled === !1 ? g() : (c(), s())
  }),
    r('toEdge fromEdge lock unlock', () => {
      s()
    }),
    r('destroy', () => {
      f()
    }),
    r('enable disable', () => {
      let { nextEl: y, prevEl: _ } = t.navigation
      if (((y = dn(y)), (_ = dn(_)), t.enabled)) {
        s()
        return
      }
      ;[...y, ..._]
        .filter((x) => !!x)
        .forEach((x) => x.classList.add(t.params.navigation.lockClass))
    }),
    r('click', (y, _) => {
      let { nextEl: x, prevEl: m } = t.navigation
      ;(x = dn(x)), (m = dn(m))
      const p = _.target
      let v = m.includes(p) || x.includes(p)
      if (t.isElement && !v) {
        const w = _.path || (_.composedPath && _.composedPath())
        w && (v = w.find((b) => x.includes(b) || m.includes(b)))
      }
      if (t.params.navigation.hideOnClick && !v) {
        if (
          t.pagination &&
          t.params.pagination &&
          t.params.pagination.clickable &&
          (t.pagination.el === p || t.pagination.el.contains(p))
        )
          return
        let w
        x.length
          ? (w = x[0].classList.contains(t.params.navigation.hiddenClass))
          : m.length &&
            (w = m[0].classList.contains(t.params.navigation.hiddenClass)),
          i(w === !0 ? 'navigationShow' : 'navigationHide'),
          [...x, ...m]
            .filter((b) => !!b)
            .forEach((b) => b.classList.toggle(t.params.navigation.hiddenClass))
      }
    })
  const d = () => {
      t.el.classList.remove(
        ...t.params.navigation.navigationDisabledClass.split(' ')
      ),
        c(),
        s()
    },
    g = () => {
      t.el.classList.add(
        ...t.params.navigation.navigationDisabledClass.split(' ')
      ),
        f()
    }
  Object.assign(t.navigation, {
    enable: d,
    disable: g,
    update: s,
    init: c,
    destroy: f
  })
}
function P4(e) {
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
    m,
    p
  function v(N) {
    !t ||
      t.destroyed ||
      !t.wrapperEl ||
      (N.target === t.wrapperEl &&
        (t.wrapperEl.removeEventListener('transitionend', v),
        !(p || (N.detail && N.detail.bySwiperTouchMove)) && T()))
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
          ? (N = t.slides.filter((z) =>
              z.classList.contains('swiper-slide-active')
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
      const z = b()
      !Number.isNaN(z) &&
        z > 0 &&
        typeof N > 'u' &&
        ((F = z), (l = z), (u = z)),
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
    j = (N, F) => {
      if (t.destroyed || !t.autoplay.running) return
      clearTimeout(a), N || (m = !0)
      const z = () => {
        i('autoplayPause'),
          t.params.autoplay.waitForTransition
            ? t.wrapperEl.addEventListener('transitionend', v)
            : T()
      }
      if (((t.autoplay.paused = !0), F)) {
        x && (c = t.params.autoplay.delay), (x = !1), z()
        return
      }
      ;(c = (c || t.params.autoplay.delay) - (new Date().getTime() - f)),
        !(t.isEnd && c < 0 && !t.params.loop) && (c < 0 && (c = 0), z())
    },
    T = () => {
      ;(t.isEnd && c < 0 && !t.params.loop) ||
        t.destroyed ||
        !t.autoplay.running ||
        ((f = new Date().getTime()),
        m ? ((m = !1), C(c)) : C(),
        (t.autoplay.paused = !1),
        i('autoplayResume'))
    },
    M = () => {
      if (t.destroyed || !t.autoplay.running) return
      const N = xn()
      N.visibilityState === 'hidden' && ((m = !0), j(!0)),
        N.visibilityState === 'visible' && T()
    },
    O = (N) => {
      N.pointerType === 'mouse' &&
        ((m = !0), (p = !0), !(t.animating || t.autoplay.paused) && j(!0))
    },
    L = (N) => {
      N.pointerType === 'mouse' && ((p = !1), t.autoplay.paused && T())
    },
    A = () => {
      t.params.autoplay.pauseOnMouseEnter &&
        (t.el.addEventListener('pointerenter', O),
        t.el.addEventListener('pointerleave', L))
    },
    D = () => {
      t.el &&
        typeof t.el != 'string' &&
        (t.el.removeEventListener('pointerenter', O),
        t.el.removeEventListener('pointerleave', L))
    },
    R = () => {
      xn().addEventListener('visibilitychange', M)
    },
    I = () => {
      xn().removeEventListener('visibilitychange', M)
    }
  r('init', () => {
    t.params.autoplay.enabled && (A(), R(), S())
  }),
    r('destroy', () => {
      D(), I(), t.autoplay.running && E()
    }),
    r('_freeModeStaticRelease', () => {
      ;(y || m) && T()
    }),
    r('_freeModeNoMomentumRelease', () => {
      t.params.autoplay.disableOnInteraction ? E() : j(!0, !0)
    }),
    r('beforeTransitionStart', (N, F, z) => {
      t.destroyed ||
        !t.autoplay.running ||
        (z || !t.params.autoplay.disableOnInteraction ? j(!0, !0) : E())
    }),
    r('sliderFirstMove', () => {
      if (!(t.destroyed || !t.autoplay.running)) {
        if (t.params.autoplay.disableOnInteraction) {
          E()
          return
        }
        ;(g = !0),
          (y = !1),
          (m = !1),
          (_ = setTimeout(() => {
            ;(m = !0), (y = !0), j(!0)
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
        y && t.params.cssMode && T(), (y = !1), (g = !1)
      }
    }),
    r('slideChange', () => {
      t.destroyed || !t.autoplay.running || (x = !0)
    }),
    Object.assign(t.autoplay, { start: S, stop: E, pause: j, resume: T })
}
const M4 = '_modal_content_3x0jz_1',
  N4 = '_singleModalContent_3x0jz_27',
  L4 = '_save_btn_3x0jz_27',
  O4 = '_generate_invoice_btn_3x0jz_29',
  A4 = '_modal_close_icon_3x0jz_53',
  R4 = '_product_search_box_3x0jz_59',
  I4 = '_search_icon_3x0jz_83',
  F4 = '_sidebar_3x0jz_95',
  z4 = '_sidebarTitle_3x0jz_107',
  $4 = '_sidebarMenu_3x0jz_117',
  D4 = '_sidebarItem_3x0jz_129',
  V4 = '_settingsContainer_3x0jz_159',
  B4 = '_modal_content_header_3x0jz_171',
  H4 = '_form_item_3x0jz_185',
  q4 = '_selectContainer_3x0jz_199',
  W4 = '_form_Item_double_3x0jz_239',
  U4 = '_input__label_3x0jz_251',
  G4 = '_select_country_icon_3x0jz_301',
  Q4 = '_select_proviences_icon_3x0jz_303',
  K4 = '_phone_field_3x0jz_319',
  X4 = '_country_code_3x0jz_327',
  Y4 = '_phone_code_select_container_3x0jz_343',
  Z4 = '_country_code_select_3x0jz_367',
  J4 = '_vatriant_product_main_container_3x0jz_397',
  e5 = '_quantity_product_main_container_3x0jz_399',
  t5 = '_switch_product_main_container_3x0jz_417',
  n5 = '_download_invoice_content_3x0jz_419',
  r5 = '_add_another_product_main_container_3x0jz_421',
  i5 = '_product_box_3x0jz_473',
  o5 = '_action_btn_box_3x0jz_475',
  a5 = '_product_box_content_3x0jz_477',
  s5 = '_product_content_3x0jz_489',
  l5 = '_product_variant_3x0jz_505',
  u5 = '_product_title_3x0jz_515',
  c5 = '_product_price_3x0jz_523',
  d5 = '_product_image_box_3x0jz_543',
  f5 = '_action_btn_3x0jz_475',
  p5 = '_product_quantity_3x0jz_591',
  h5 = '_product_quantity_title_3x0jz_593',
  m5 = '_variant_product_box_3x0jz_607',
  v5 = '_variant_product_box_content_3x0jz_609',
  g5 = '_variant_select_box_3x0jz_619',
  y5 = '_shipping_method_content_3x0jz_651',
  _5 = '_method_radio_3x0jz_669',
  x5 = '_shipping_method_name_3x0jz_681',
  w5 = '_method_price_3x0jz_683',
  b5 = '_product_variant_container_3x0jz_691',
  S5 = '_address_container_3x0jz_805',
  C5 = '_address_title_3x0jz_819',
  E5 = '_address_name_3x0jz_831',
  j5 = '_address_3x0jz_805',
  T5 = '_customize_invoice_title_3x0jz_843',
  k5 = '_purchasing_checkbox_3x0jz_853',
  P5 = '_billing_details_checkbox_3x0jz_855',
  M5 = '_invoice_radio_container_3x0jz_865',
  N5 = '_invoice_radio_3x0jz_865',
  L5 = '_download_method_3x0jz_889',
  O5 = '_business_form_3x0jz_895',
  A5 = '_billing_address_form_3x0jz_897',
  R5 = '_gift_message_text_area_3x0jz_905',
  I5 = '_switch_product_box_3x0jz_921',
  F5 = '_switch_product_box_content_3x0jz_923',
  z5 = '_view_details_box_3x0jz_953',
  $5 = '_switch_product_action_btn_3x0jz_965',
  D5 = '_add_to_cart_3x0jz_985',
  V5 = '_switch_single_product_box_3x0jz_993',
  B5 = '_switch_product_image_box_3x0jz_1003',
  H5 = '_switch_single_product_default_image_3x0jz_1021',
  q5 = '_switch_single_product_quantity_box_3x0jz_1031',
  W5 = '_switch_product_variant_select_3x0jz_1039',
  U5 = '_switch_single_product_title_3x0jz_1053',
  G5 = '_switch_single_product_price_3x0jz_1063',
  Q5 = '_switch_single_product_quantity_btn_3x0jz_1073',
  K5 = '_switch_single_product_more_image_box_3x0jz_1087',
  X5 = '_switch_single_product_more_image_3x0jz_1087',
  Y5 = '_add_another_product_box_3x0jz_1133',
  Z5 = '_add_another_product_box_content_3x0jz_1135',
  J5 = '_add_another_product_action_btn_3x0jz_1177',
  e3 = '_buy_now_3x0jz_1197',
  t3 = '_add_another_single_product_box_3x0jz_1205',
  n3 = '_add_another_product_image_box_3x0jz_1215',
  r3 = '_add_another_single_product_default_image_3x0jz_1233',
  i3 = '_add_another_single_product_quantity_box_3x0jz_1243',
  o3 = '_add_another_product_variant_select_3x0jz_1251',
  a3 = '_add_another_single_product_title_3x0jz_1265',
  s3 = '_add_another_single_product_price_3x0jz_1275',
  l3 = '_add_another_single_product_quantity_btn_3x0jz_1285',
  u3 = '_add_another_single_product_more_image_box_3x0jz_1299',
  c3 = '_add_another_single_product_more_image_3x0jz_1299',
  d3 = '_settings_mobile_box_3x0jz_1339',
  f3 = '_mobile_sidebar_item_3x0jz_1399',
  p3 = '_mobile_settings_icon_3x0jz_1427',
  h3 = '_disabled_3x0jz_1493',
  m3 = '_settings_header_box_3x0jz_1503',
  P = {
    modal_content: M4,
    singleModalContent: N4,
    save_btn: L4,
    generate_invoice_btn: O4,
    modal_close_icon: A4,
    product_search_box: R4,
    search_icon: I4,
    sidebar: F4,
    sidebarTitle: z4,
    sidebarMenu: $4,
    sidebarItem: D4,
    settingsContainer: V4,
    modal_content_header: B4,
    form_item: H4,
    selectContainer: q4,
    form_Item_double: W4,
    input__label: U4,
    select_country_icon: G4,
    select_proviences_icon: Q4,
    phone_field: K4,
    country_code: X4,
    phone_code_select_container: Y4,
    country_code_select: Z4,
    vatriant_product_main_container: J4,
    quantity_product_main_container: e5,
    switch_product_main_container: t5,
    download_invoice_content: n5,
    add_another_product_main_container: r5,
    product_box: i5,
    action_btn_box: o5,
    product_box_content: a5,
    product_content: s5,
    product_variant: l5,
    product_title: u5,
    product_price: c5,
    product_image_box: d5,
    action_btn: f5,
    product_quantity: p5,
    product_quantity_title: h5,
    variant_product_box: m5,
    variant_product_box_content: v5,
    variant_select_box: g5,
    shipping_method_content: y5,
    method_radio: _5,
    shipping_method_name: x5,
    method_price: w5,
    product_variant_container: b5,
    address_container: S5,
    address_title: C5,
    address_name: E5,
    address: j5,
    customize_invoice_title: T5,
    purchasing_checkbox: k5,
    billing_details_checkbox: P5,
    invoice_radio_container: M5,
    invoice_radio: N5,
    download_method: L5,
    business_form: O5,
    billing_address_form: A5,
    gift_message_text_area: R5,
    switch_product_box: I5,
    switch_product_box_content: F5,
    view_details_box: z5,
    switch_product_action_btn: $5,
    add_to_cart: D5,
    switch_single_product_box: V5,
    switch_product_image_box: B5,
    switch_single_product_default_image: H5,
    switch_single_product_quantity_box: q5,
    switch_product_variant_select: W5,
    switch_single_product_title: U5,
    switch_single_product_price: G5,
    switch_single_product_quantity_btn: Q5,
    switch_single_product_more_image_box: K5,
    switch_single_product_more_image: X5,
    add_another_product_box: Y5,
    add_another_product_box_content: Z5,
    add_another_product_action_btn: J5,
    buy_now: e3,
    add_another_single_product_box: t3,
    add_another_product_image_box: n3,
    add_another_single_product_default_image: r3,
    add_another_single_product_quantity_box: i3,
    add_another_product_variant_select: o3,
    add_another_single_product_title: a3,
    add_another_single_product_price: s3,
    add_another_single_product_quantity_btn: l3,
    add_another_single_product_more_image_box: u3,
    add_another_single_product_more_image: c3,
    settings_mobile_box: d3,
    mobile_sidebar_item: f3,
    mobile_settings_icon: p3,
    disabled: h3,
    settings_header_box: m3
  },
  $t = [
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
  vn = [
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
  v3 = ({ handleCloseModal: e }) => {
    const [t, n] = k.useState(''),
      [r, i] = k.useState('+1'),
      o = (s) => {
        const l = s.target.value,
          u = $t.find((c) => c.value === l)
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
              h.jsxs('div', {
                className: P.formSection,
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
                            $t == null
                              ? void 0
                              : $t.map((s, l) =>
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
                            vn == null
                              ? void 0
                              : vn.map((s, l) =>
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
                          h.jsx('input', {
                            type: 'text',
                            placeholder: 'New work'
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
                          h.jsx('input', { type: 'text', placeholder: '10001' })
                        ]
                      })
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
  g3 = ({ handleCloseModal: e }) => {
    const [t, n] = k.useState('222658846989'),
      [r, i] = k.useState('+268'),
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
  y3 = ({ handleCloseModal: e }) => {
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
  _3 = ({ handleCloseModal: e }) => {
    const [t, n] = k.useState(''),
      [r, i] = k.useState('+1'),
      o = (l) => {
        const u = l.target.value,
          c = $t.find((f) => f.value === u)
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
  x3 = ({ handleCloseModal: e }) => {
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
  w3 = ({ handleCloseModal: e }) => {
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
  b3 = ({ handleCloseModal: e }) =>
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
var Q1 = { exports: {} }
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
})(Q1)
var S3 = Q1.exports
const Nr = mf(S3)
function Lr() {
  return (
    (Lr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    Lr.apply(null, arguments)
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
var C3 = Symbol.for('react.element'),
  E3 = Symbol.for('react.transitional.element'),
  j3 = Symbol.for('react.fragment')
function K1(e) {
  return (
    e &&
    X(e) === 'object' &&
    (e.$$typeof === C3 || e.$$typeof === E3) &&
    e.type === j3
  )
}
function Sd(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = []
  return (
    te.Children.forEach(e, function (r) {
      ;(r == null && !t.keepEmpty) ||
        (Array.isArray(r)
          ? (n = n.concat(Sd(r)))
          : K1(r) && r.props
          ? (n = n.concat(Sd(r.props.children, t)))
          : n.push(r))
    }),
    n
  )
}
var Cd = {},
  T3 = function (t) {}
function k3(e, t) {}
function P3(e, t) {}
function M3() {
  Cd = {}
}
function X1(e, t, n) {
  !t && !Cd[n] && (e(!1, n), (Cd[n] = !0))
}
function Tt(e, t) {
  X1(k3, e, t)
}
function N3(e, t) {
  X1(P3, e, t)
}
Tt.preMessage = T3
Tt.resetWarned = M3
Tt.noteOnce = N3
function L3(e, t) {
  if (X(e) != 'object' || !e) return e
  var n = e[Symbol.toPrimitive]
  if (n !== void 0) {
    var r = n.call(e, t || 'default')
    if (X(r) != 'object') return r
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
function Y1(e) {
  var t = L3(e, 'string')
  return X(t) == 'symbol' ? t : t + ''
}
function $(e, t, n) {
  return (
    (t = Y1(t)) in e
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
function Vm(e, t) {
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
      ? Vm(Object(n), !0).forEach(function (r) {
          $(e, r, n[r])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Vm(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
  }
  return e
}
function Bm(e) {
  return e instanceof HTMLElement || e instanceof SVGElement
}
function O3(e) {
  return e && X(e) === 'object' && Bm(e.nativeElement)
    ? e.nativeElement
    : Bm(e)
    ? e
    : null
}
function A3(e) {
  var t = O3(e)
  if (t) return t
  if (e instanceof te.Component) {
    var n
    return (n = sd.findDOMNode) === null || n === void 0
      ? void 0
      : n.call(sd, e)
  }
  return null
}
var Z1 = { exports: {} },
  oe = {}
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ep = Symbol.for('react.element'),
  jp = Symbol.for('react.portal'),
  $l = Symbol.for('react.fragment'),
  Dl = Symbol.for('react.strict_mode'),
  Vl = Symbol.for('react.profiler'),
  Bl = Symbol.for('react.provider'),
  Hl = Symbol.for('react.context'),
  R3 = Symbol.for('react.server_context'),
  ql = Symbol.for('react.forward_ref'),
  Wl = Symbol.for('react.suspense'),
  Ul = Symbol.for('react.suspense_list'),
  Gl = Symbol.for('react.memo'),
  Ql = Symbol.for('react.lazy'),
  I3 = Symbol.for('react.offscreen'),
  J1
J1 = Symbol.for('react.module.reference')
function Nt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case Ep:
        switch (((e = e.type), e)) {
          case $l:
          case Vl:
          case Dl:
          case Wl:
          case Ul:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case R3:
              case Hl:
              case ql:
              case Ql:
              case Gl:
              case Bl:
                return e
              default:
                return t
            }
        }
      case jp:
        return t
    }
  }
}
oe.ContextConsumer = Hl
oe.ContextProvider = Bl
oe.Element = Ep
oe.ForwardRef = ql
oe.Fragment = $l
oe.Lazy = Ql
oe.Memo = Gl
oe.Portal = jp
oe.Profiler = Vl
oe.StrictMode = Dl
oe.Suspense = Wl
oe.SuspenseList = Ul
oe.isAsyncMode = function () {
  return !1
}
oe.isConcurrentMode = function () {
  return !1
}
oe.isContextConsumer = function (e) {
  return Nt(e) === Hl
}
oe.isContextProvider = function (e) {
  return Nt(e) === Bl
}
oe.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Ep
}
oe.isForwardRef = function (e) {
  return Nt(e) === ql
}
oe.isFragment = function (e) {
  return Nt(e) === $l
}
oe.isLazy = function (e) {
  return Nt(e) === Ql
}
oe.isMemo = function (e) {
  return Nt(e) === Gl
}
oe.isPortal = function (e) {
  return Nt(e) === jp
}
oe.isProfiler = function (e) {
  return Nt(e) === Vl
}
oe.isStrictMode = function (e) {
  return Nt(e) === Dl
}
oe.isSuspense = function (e) {
  return Nt(e) === Wl
}
oe.isSuspenseList = function (e) {
  return Nt(e) === Ul
}
oe.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === $l ||
    e === Vl ||
    e === Dl ||
    e === Wl ||
    e === Ul ||
    e === I3 ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Ql ||
        e.$$typeof === Gl ||
        e.$$typeof === Bl ||
        e.$$typeof === Hl ||
        e.$$typeof === ql ||
        e.$$typeof === J1 ||
        e.getModuleId !== void 0))
  )
}
oe.typeOf = Nt
Z1.exports = oe
var Ku = Z1.exports
function ey(e, t, n) {
  var r = k.useRef({})
  return (
    (!('value' in r.current) || n(r.current.condition, t)) &&
      ((r.current.value = e()), (r.current.condition = t)),
    r.current.value
  )
}
var ty = function (t, n) {
    typeof t == 'function'
      ? t(n)
      : X(t) === 'object' && t && 'current' in t && (t.current = n)
  },
  Tp = function () {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r]
    var i = n.filter(Boolean)
    return i.length <= 1
      ? i[0]
      : function (o) {
          n.forEach(function (a) {
            ty(a, o)
          })
        }
  },
  ny = function (t) {
    var n, r
    if (!t) return !1
    if (ry(t) && t.props.propertyIsEnumerable('ref')) return !0
    var i = Ku.isMemo(t) ? t.type.type : t.type
    return !(
      (typeof i == 'function' &&
        !((n = i.prototype) !== null && n !== void 0 && n.render) &&
        i.$$typeof !== Ku.ForwardRef) ||
      (typeof t == 'function' &&
        !((r = t.prototype) !== null && r !== void 0 && r.render) &&
        t.$$typeof !== Ku.ForwardRef)
    )
  }
function ry(e) {
  return k.isValidElement(e) && !K1(e)
}
var iy = function (t) {
  if (t && ry(t)) {
    var n = t
    return n.props.propertyIsEnumerable('ref') ? n.props.ref : n.ref
  }
  return null
}
function tt(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function')
}
function Hm(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n]
    ;(r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, Y1(r.key), r)
  }
}
function nt(e, t, n) {
  return (
    t && Hm(e.prototype, t),
    n && Hm(e, n),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  )
}
function ta(e, t) {
  return (
    (ta = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n
        }),
    ta(e, t)
  )
}
function Vi(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function')
  ;(e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 }
  })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && ta(e, t)
}
function na(e) {
  return (
    (na = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }),
    na(e)
  )
}
function kp() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    )
  } catch {}
  return (kp = function () {
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
function F3(e, t) {
  if (t && (X(t) == 'object' || typeof t == 'function')) return t
  if (t !== void 0)
    throw new TypeError(
      'Derived constructors may only return object or undefined'
    )
  return Y(e)
}
function Bi(e) {
  var t = kp()
  return function () {
    var n,
      r = na(e)
    if (t) {
      var i = na(this).constructor
      n = Reflect.construct(r, arguments, i)
    } else n = r.apply(this, arguments)
    return F3(this, n)
  }
}
function z3(e, t) {
  var n = Object.assign({}, e)
  return (
    Array.isArray(t) &&
      t.forEach(function (r) {
        delete n[r]
      }),
    n
  )
}
function Ed(e, t) {
  ;(t == null || t > e.length) && (t = e.length)
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n]
  return r
}
function $3(e) {
  if (Array.isArray(e)) return Ed(e)
}
function oy(e) {
  if (
    (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e)
}
function Pp(e, t) {
  if (e) {
    if (typeof e == 'string') return Ed(e, t)
    var n = {}.toString.call(e).slice(8, -1)
    return (
      n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set'
        ? Array.from(e)
        : n === 'Arguments' ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? Ed(e, t)
        : void 0
    )
  }
}
function D3() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function Q(e) {
  return $3(e) || oy(e) || Pp(e) || D3()
}
var ay = function (t) {
    return +setTimeout(t, 16)
  },
  sy = function (t) {
    return clearTimeout(t)
  }
typeof window < 'u' &&
  'requestAnimationFrame' in window &&
  ((ay = function (t) {
    return window.requestAnimationFrame(t)
  }),
  (sy = function (t) {
    return window.cancelAnimationFrame(t)
  }))
var qm = 0,
  Mp = new Map()
function ly(e) {
  Mp.delete(e)
}
var Tn = function (t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1
  qm += 1
  var r = qm
  function i(o) {
    if (o === 0) ly(r), t()
    else {
      var a = ay(function () {
        i(o - 1)
      })
      Mp.set(r, a)
    }
  }
  return i(n), r
}
Tn.cancel = function (e) {
  var t = Mp.get(e)
  return ly(e), sy(t)
}
function uy(e) {
  if (Array.isArray(e)) return e
}
function V3(e, t) {
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
function cy() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function K(e, t) {
  return uy(e) || V3(e, t) || Pp(e, t) || cy()
}
function ra(e) {
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
function Mn() {
  return !!(
    typeof window < 'u' &&
    window.document &&
    window.document.createElement
  )
}
function B3(e, t) {
  if (!e) return !1
  if (e.contains) return e.contains(t)
  for (var n = t; n; ) {
    if (n === e) return !0
    n = n.parentNode
  }
  return !1
}
var Wm = 'data-rc-order',
  Um = 'data-rc-priority',
  H3 = 'rc-util-key',
  jd = new Map()
function dy() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = e.mark
  return t ? (t.startsWith('data-') ? t : 'data-'.concat(t)) : H3
}
function Kl(e) {
  if (e.attachTo) return e.attachTo
  var t = document.querySelector('head')
  return t || document.body
}
function q3(e) {
  return e === 'queue' ? 'prependQueue' : e ? 'prepend' : 'append'
}
function Np(e) {
  return Array.from((jd.get(e) || e).children).filter(function (t) {
    return t.tagName === 'STYLE'
  })
}
function fy(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
  if (!Mn()) return null
  var n = t.csp,
    r = t.prepend,
    i = t.priority,
    o = i === void 0 ? 0 : i,
    a = q3(r),
    s = a === 'prependQueue',
    l = document.createElement('style')
  l.setAttribute(Wm, a),
    s && o && l.setAttribute(Um, ''.concat(o)),
    n != null && n.nonce && (l.nonce = n == null ? void 0 : n.nonce),
    (l.innerHTML = e)
  var u = Kl(t),
    c = u.firstChild
  if (r) {
    if (s) {
      var f = (t.styles || Np(u)).filter(function (d) {
        if (!['prepend', 'prependQueue'].includes(d.getAttribute(Wm))) return !1
        var g = Number(d.getAttribute(Um) || 0)
        return o >= g
      })
      if (f.length) return u.insertBefore(l, f[f.length - 1].nextSibling), l
    }
    u.insertBefore(l, c)
  } else u.appendChild(l)
  return l
}
function py(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = Kl(t)
  return (t.styles || Np(n)).find(function (r) {
    return r.getAttribute(dy(t)) === e
  })
}
function hy(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = py(e, t)
  if (n) {
    var r = Kl(t)
    r.removeChild(n)
  }
}
function W3(e, t) {
  var n = jd.get(e)
  if (!n || !B3(document, n)) {
    var r = fy('', t),
      i = r.parentNode
    jd.set(e, i), e.removeChild(r)
  }
}
function Si(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = Kl(n),
    i = Np(r),
    o = B(B({}, n), {}, { styles: i })
  W3(r, o)
  var a = py(t, o)
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
  var c = fy(e, o)
  return c.setAttribute(dy(o), t), c
}
function U3(e, t) {
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
    i = U3(e, t)
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
    if ((Tt(!l, 'Warning: There may be circular references'), l)) return !1
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
var G3 = '%'
function kd(e) {
  return e.join(G3)
}
var Q3 = (function () {
    function e(t) {
      tt(this, e),
        $(this, 'instanceId', void 0),
        $(this, 'cache', new Map()),
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
  Hn = '__cssinjs_instance__'
function K3() {
  var e = Math.random().toString(12).slice(2)
  if (typeof document < 'u' && document.head && document.body) {
    var t = document.body.querySelectorAll('style['.concat(Ht, ']')) || [],
      n = document.head.firstChild
    Array.from(t).forEach(function (i) {
      ;(i[Hn] = i[Hn] || e), i[Hn] === e && document.head.insertBefore(i, n)
    })
    var r = {}
    Array.from(document.querySelectorAll('style['.concat(Ht, ']'))).forEach(
      function (i) {
        var o = i.getAttribute(Ht)
        if (r[o]) {
          if (i[Hn] === e) {
            var a
            ;(a = i.parentNode) === null || a === void 0 || a.removeChild(i)
          }
        } else r[o] = !0
      }
    )
  }
  return new Q3(e)
}
var Xl = k.createContext({ hashPriority: 'low', cache: K3(), defaultCache: !0 })
function X3(e, t) {
  if (e.length !== t.length) return !1
  for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1
  return !0
}
var Lp = (function () {
  function e() {
    tt(this, e),
      $(this, 'cache', void 0),
      $(this, 'keys', void 0),
      $(this, 'cacheCallTimes', void 0),
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
                return !X3(r, n)
              })),
              this.deleteByPath(this.cache, n)
            )
        }
      }
    ]),
    e
  )
})()
$(Lp, 'MAX_CACHE_SIZE', 20)
$(Lp, 'MAX_CACHE_OFFSET', 5)
var Gm = 0,
  my = (function () {
    function e(t) {
      tt(this, e),
        $(this, 'derivatives', void 0),
        $(this, 'id', void 0),
        (this.derivatives = Array.isArray(t) ? t : [t]),
        (this.id = Gm),
        t.length === 0 && (t.length > 0, void 0),
        (Gm += 1)
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
  Xu = new Lp()
function Pd(e) {
  var t = Array.isArray(e) ? e : [e]
  return Xu.has(t) || Xu.set(t, new my(t)), Xu.get(t)
}
var Y3 = new WeakMap(),
  Yu = {}
function Z3(e, t) {
  for (var n = Y3, r = 0; r < t.length; r += 1) {
    var i = t[r]
    n.has(i) || n.set(i, new WeakMap()), (n = n.get(i))
  }
  return n.has(Yu) || n.set(Yu, e()), n.get(Yu)
}
var Qm = new WeakMap()
function ko(e) {
  var t = Qm.get(e) || ''
  return (
    t ||
      (Object.keys(e).forEach(function (n) {
        var r = e[n]
        ;(t += n),
          r instanceof my
            ? (t += r.id)
            : r && X(r) === 'object'
            ? (t += ko(r))
            : (t += r)
      }),
      (t = ra(t)),
      Qm.set(e, t)),
    t
  )
}
function Km(e, t) {
  return ra(''.concat(t, '_').concat(ko(e)))
}
var Md = Mn()
function ia(e) {
  return typeof e == 'number' ? ''.concat(e, 'px') : e
}
function fl(e, t, n) {
  var r,
    i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
    o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1
  if (o) return e
  var a = B(B({}, i), {}, ((r = {}), $(r, Oi, t), $(r, Ht, n), r)),
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
var js = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ''
    return '--'
      .concat(n ? ''.concat(n, '-') : '')
      .concat(t)
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, '$1-$2')
      .replace(/([a-z])([A-Z0-9])/g, '$1-$2')
      .toLowerCase()
  },
  J3 = function (t, n, r) {
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
  vy = function (t, n, r) {
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
            g = js(c, r == null ? void 0 : r.prefix)
          ;(i[g] =
            typeof f == 'number' &&
            !(r != null && (d = r.unitless) !== null && d !== void 0 && d[c])
              ? ''.concat(f, 'px')
              : String(f)),
            (o[c] = 'var('.concat(g, ')'))
        }
      }),
      [o, J3(i, n, { scope: r == null ? void 0 : r.scope })]
    )
  },
  Xm = Mn() ? k.useLayoutEffect : k.useEffect,
  gy = function (t, n) {
    var r = k.useRef(!0)
    Xm(function () {
      return t(r.current)
    }, n),
      Xm(function () {
        return (
          (r.current = !1),
          function () {
            r.current = !0
          }
        )
      }, [])
  },
  Ym = function (t, n) {
    gy(function (r) {
      if (!r) return t()
    }, n)
  },
  ej = B({}, No),
  Zm = ej.useInsertionEffect,
  tj = function (t, n, r) {
    k.useMemo(t, r),
      gy(function () {
        return n(!0)
      }, r)
  },
  nj = Zm
    ? function (e, t, n) {
        return Zm(function () {
          return e(), t()
        }, n)
      }
    : tj,
  rj = B({}, No),
  ij = rj.useInsertionEffect,
  oj = function (t) {
    var n = [],
      r = !1
    function i(o) {
      r || n.push(o)
    }
    return (
      k.useEffect(function () {
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
  aj = function () {
    return function (t) {
      t()
    }
  },
  sj = typeof ij < 'u' ? oj : aj
function Op(e, t, n, r, i) {
  var o = k.useContext(Xl),
    a = o.cache,
    s = [e].concat(Q(t)),
    l = kd(s),
    u = sj([l]),
    c = function (y) {
      a.opUpdate(l, function (_) {
        var x = _ || [void 0, void 0],
          m = K(x, 2),
          p = m[0],
          v = p === void 0 ? 0 : p,
          w = m[1],
          b = w,
          C = b || n(),
          S = [v, C]
        return y ? y(S) : S
      })
    }
  k.useMemo(
    function () {
      c()
    },
    [l]
  )
  var f = a.opGet(l),
    d = f[1]
  return (
    nj(
      function () {
        i == null || i(d)
      },
      function (g) {
        return (
          c(function (y) {
            var _ = K(y, 2),
              x = _[0],
              m = _[1]
            return g && x === 0 && (i == null || i(d)), [x + 1, m]
          }),
          function () {
            a.opUpdate(l, function (y) {
              var _ = y || [],
                x = K(_, 2),
                m = x[0],
                p = m === void 0 ? 0 : m,
                v = x[1],
                w = p - 1
              return w === 0
                ? (u(function () {
                    ;(g || !a.opGet(l)) && (r == null || r(v, !1))
                  }),
                  null)
                : [p - 1, v]
            })
          }
        )
      },
      [l]
    ),
    d
  )
}
var lj = {},
  uj = 'css',
  dr = new Map()
function cj(e) {
  dr.set(e, (dr.get(e) || 0) + 1)
}
function dj(e, t) {
  if (typeof document < 'u') {
    var n = document.querySelectorAll('style['.concat(Oi, '="').concat(e, '"]'))
    n.forEach(function (r) {
      if (r[Hn] === t) {
        var i
        ;(i = r.parentNode) === null || i === void 0 || i.removeChild(r)
      }
    })
  }
}
var fj = 0
function pj(e, t) {
  dr.set(e, (dr.get(e) || 0) - 1)
  var n = Array.from(dr.keys()),
    r = n.filter(function (i) {
      var o = dr.get(i) || 0
      return o <= 0
    })
  n.length - r.length > fj &&
    r.forEach(function (i) {
      dj(i, t), dr.delete(i)
    })
}
var hj = function (t, n, r, i) {
    var o = r.getDerivativeToken(t),
      a = B(B({}, o), n)
    return i && (a = i(a)), a
  },
  yy = 'token'
function mj(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = k.useContext(Xl),
    i = r.cache.instanceId,
    o = r.container,
    a = n.salt,
    s = a === void 0 ? '' : a,
    l = n.override,
    u = l === void 0 ? lj : l,
    c = n.formatToken,
    f = n.getComputedToken,
    d = n.cssVar,
    g = Z3(function () {
      return Object.assign.apply(Object, [{}].concat(Q(t)))
    }, t),
    y = ko(g),
    _ = ko(u),
    x = d ? ko(d) : '',
    m = Op(
      yy,
      [s, e.id, y, _, x],
      function () {
        var p,
          v = f ? f(g, u, e) : hj(g, u, e, c),
          w = B({}, v),
          b = ''
        if (d) {
          var C = vy(v, d.key, {
              prefix: d.prefix,
              ignore: d.ignore,
              unitless: d.unitless,
              preserve: d.preserve
            }),
            S = K(C, 2)
          ;(v = S[0]), (b = S[1])
        }
        var E = Km(v, s)
        ;(v._tokenKey = E), (w._tokenKey = Km(w, s))
        var j =
          (p = d == null ? void 0 : d.key) !== null && p !== void 0 ? p : E
        ;(v._themeKey = j), cj(j)
        var T = ''.concat(uj, '-').concat(ra(E))
        return (v._hashId = T), [v, T, w, b, (d == null ? void 0 : d.key) || '']
      },
      function (p) {
        pj(p[0]._themeKey, i)
      },
      function (p) {
        var v = K(p, 4),
          w = v[0],
          b = v[3]
        if (d && b) {
          var C = Si(b, ra('css-variables-'.concat(w._themeKey)), {
            mark: Ht,
            prepend: 'queue',
            attachTo: o,
            priority: -999
          })
          ;(C[Hn] = i), C.setAttribute(Oi, w._themeKey)
        }
      }
    )
  return m
}
var vj = function (t, n, r) {
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
      g = fl(a, s, c, d, u)
    return [f, c, g]
  },
  gj = {
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
  _y = 'comm',
  xy = 'rule',
  wy = 'decl',
  yj = '@import',
  _j = '@keyframes',
  xj = '@layer',
  by = Math.abs,
  Ap = String.fromCharCode
function Sy(e) {
  return e.trim()
}
function Ts(e, t, n) {
  return e.replace(t, n)
}
function wj(e, t, n) {
  return e.indexOf(t, n)
}
function oa(e, t) {
  return e.charCodeAt(t) | 0
}
function Ai(e, t, n) {
  return e.slice(t, n)
}
function Zt(e) {
  return e.length
}
function bj(e) {
  return e.length
}
function Ja(e, t) {
  return t.push(e), e
}
var Yl = 1,
  Ri = 1,
  Cy = 0,
  Mt = 0,
  _e = 0,
  Hi = ''
function Rp(e, t, n, r, i, o, a, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: o,
    line: Yl,
    column: Ri,
    length: a,
    return: '',
    siblings: s
  }
}
function Sj() {
  return _e
}
function Cj() {
  return (
    (_e = Mt > 0 ? oa(Hi, --Mt) : 0), Ri--, _e === 10 && ((Ri = 1), Yl--), _e
  )
}
function qt() {
  return (
    (_e = Mt < Cy ? oa(Hi, Mt++) : 0), Ri++, _e === 10 && ((Ri = 1), Yl++), _e
  )
}
function qn() {
  return oa(Hi, Mt)
}
function ks() {
  return Mt
}
function Zl(e, t) {
  return Ai(Hi, e, t)
}
function aa(e) {
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
function Ej(e) {
  return (Yl = Ri = 1), (Cy = Zt((Hi = e))), (Mt = 0), []
}
function jj(e) {
  return (Hi = ''), e
}
function Zu(e) {
  return Sy(Zl(Mt - 1, Nd(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}
function Tj(e) {
  for (; (_e = qn()) && _e < 33; ) qt()
  return aa(e) > 2 || aa(_e) > 3 ? '' : ' '
}
function kj(e, t) {
  for (
    ;
    --t &&
    qt() &&
    !(_e < 48 || _e > 102 || (_e > 57 && _e < 65) || (_e > 70 && _e < 97));

  );
  return Zl(e, ks() + (t < 6 && qn() == 32 && qt() == 32))
}
function Nd(e) {
  for (; qt(); )
    switch (_e) {
      case e:
        return Mt
      case 34:
      case 39:
        e !== 34 && e !== 39 && Nd(_e)
        break
      case 40:
        e === 41 && Nd(e)
        break
      case 92:
        qt()
        break
    }
  return Mt
}
function Pj(e, t) {
  for (; qt() && e + _e !== 57; ) if (e + _e === 84 && qn() === 47) break
  return '/*' + Zl(t, Mt - 1) + '*' + Ap(e === 47 ? e : qt())
}
function Mj(e) {
  for (; !aa(qn()); ) qt()
  return Zl(e, Mt)
}
function Nj(e) {
  return jj(Ps('', null, null, null, [''], (e = Ej(e)), 0, [0], e))
}
function Ps(e, t, n, r, i, o, a, s, l) {
  for (
    var u = 0,
      c = 0,
      f = a,
      d = 0,
      g = 0,
      y = 0,
      _ = 1,
      x = 1,
      m = 1,
      p = 0,
      v = '',
      w = i,
      b = o,
      C = r,
      S = v;
    x;

  )
    switch (((y = p), (p = qt()))) {
      case 40:
        if (y != 108 && oa(S, f - 1) == 58) {
          wj((S += Ts(Zu(p), '&', '&\f')), '&\f', by(u ? s[u - 1] : 0)) != -1 &&
            (m = -1)
          break
        }
      case 34:
      case 39:
      case 91:
        S += Zu(p)
        break
      case 9:
      case 10:
      case 13:
      case 32:
        S += Tj(y)
        break
      case 92:
        S += kj(ks() - 1, 7)
        continue
      case 47:
        switch (qn()) {
          case 42:
          case 47:
            Ja(Lj(Pj(qt(), ks()), t, n, l), l),
              (aa(y || 1) == 5 || aa(qn() || 1) == 5) &&
                Zt(S) &&
                Ai(S, -1, void 0) !== ' ' &&
                (S += ' ')
            break
          default:
            S += '/'
        }
        break
      case 123 * _:
        s[u++] = Zt(S) * m
      case 125 * _:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            x = 0
          case 59 + c:
            m == -1 && (S = Ts(S, /\f/g, '')),
              g > 0 &&
                (Zt(S) - f || (_ === 0 && y === 47)) &&
                Ja(
                  g > 32
                    ? ev(S + ';', r, n, f - 1, l)
                    : ev(Ts(S, ' ', '') + ';', r, n, f - 2, l),
                  l
                )
            break
          case 59:
            S += ';'
          default:
            if (
              (Ja(
                (C = Jm(S, t, n, u, c, i, s, v, (w = []), (b = []), f, o)),
                o
              ),
              p === 123)
            )
              if (c === 0) Ps(S, t, C, C, w, o, f, s, b)
              else
                switch (d === 99 && oa(S, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ps(
                      e,
                      C,
                      C,
                      r && Ja(Jm(e, C, C, 0, 0, i, s, v, i, (w = []), f, b), b),
                      i,
                      b,
                      f,
                      s,
                      r ? w : b
                    )
                    break
                  default:
                    Ps(S, C, C, C, [''], b, 0, s, b)
                }
        }
        ;(u = c = g = 0), (_ = m = 1), (v = S = ''), (f = a)
        break
      case 58:
        ;(f = 1 + Zt(S)), (g = y)
      default:
        if (_ < 1) {
          if (p == 123) --_
          else if (p == 125 && _++ == 0 && Cj() == 125) continue
        }
        switch (((S += Ap(p)), p * _)) {
          case 38:
            m = c > 0 ? 1 : ((S += '\f'), -1)
            break
          case 44:
            ;(s[u++] = (Zt(S) - 1) * m), (m = 1)
            break
          case 64:
            qn() === 45 && (S += Zu(qt())),
              (d = qn()),
              (c = f = Zt((v = S += Mj(ks())))),
              p++
            break
          case 45:
            y === 45 && Zt(S) == 2 && (_ = 0)
        }
    }
  return o
}
function Jm(e, t, n, r, i, o, a, s, l, u, c, f) {
  for (
    var d = i - 1, g = i === 0 ? o : [''], y = bj(g), _ = 0, x = 0, m = 0;
    _ < r;
    ++_
  )
    for (var p = 0, v = Ai(e, d + 1, (d = by((x = a[_])))), w = e; p < y; ++p)
      (w = Sy(x > 0 ? g[p] + ' ' + v : Ts(v, /&\f/g, g[p]))) && (l[m++] = w)
  return Rp(e, t, n, i === 0 ? xy : s, l, u, c, f)
}
function Lj(e, t, n, r) {
  return Rp(e, t, n, _y, Ap(Sj()), Ai(e, 2, -2), 0, r)
}
function ev(e, t, n, r, i) {
  return Rp(e, t, n, wy, Ai(e, 0, r), Ai(e, r + 1, -1), r, i)
}
function Ld(e, t) {
  for (var n = '', r = 0; r < e.length; r++) n += t(e[r], r, e, t) || ''
  return n
}
function Oj(e, t, n, r) {
  switch (e.type) {
    case xj:
      if (e.children.length) break
    case yj:
    case wy:
      return (e.return = e.return || e.value)
    case _y:
      return ''
    case _j:
      return (e.return = e.value + '{' + Ld(e.children, r) + '}')
    case xy:
      if (!Zt((e.value = e.props.join(',')))) return ''
  }
  return Zt((n = Ld(e.children, r))) ? (e.return = e.value + '{' + n + '}') : ''
}
var tv = 'data-ant-cssinjs-cache-path',
  Ey = '_FILE_STYLE__',
  wr,
  jy = !0
function Aj() {
  if (!wr && ((wr = {}), Mn())) {
    var e = document.createElement('div')
    ;(e.className = tv),
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
    var n = document.querySelector('style['.concat(tv, ']'))
    if (n) {
      var r
      ;(jy = !1),
        (r = n.parentNode) === null || r === void 0 || r.removeChild(n)
    }
    document.body.removeChild(e)
  }
}
function Rj(e) {
  return Aj(), !!wr[e]
}
function Ij(e) {
  var t = wr[e],
    n = null
  if (t && Mn())
    if (jy) n = Ey
    else {
      var r = document.querySelector(
        'style['.concat(Ht, '="').concat(wr[e], '"]')
      )
      r ? (n = r.innerHTML) : delete wr[e]
    }
  return [n, t]
}
var Fj = '_skip_check_',
  Ty = '_multi_value_'
function Ms(e) {
  var t = Ld(Nj(e), Oj)
  return t.replace(/\{%%%\:[^;];}/g, ';')
}
function zj(e) {
  return X(e) === 'object' && e && (Fj in e || Ty in e)
}
function nv(e, t, n) {
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
var $j = function e(t) {
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
  function y(m) {
    var p = m.getName(s)
    if (!g[p]) {
      var v = e(m.style, n, { root: !1, parentSelectors: a }),
        w = K(v, 1),
        b = w[0]
      g[p] = '@keyframes '.concat(m.getName(s)).concat(b)
    }
  }
  function _(m) {
    var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : []
    return (
      m.forEach(function (v) {
        Array.isArray(v) ? _(v, p) : v && p.push(v)
      }),
      p
    )
  }
  var x = _(Array.isArray(t) ? t : [t])
  return (
    x.forEach(function (m) {
      var p = typeof m == 'string' && !i ? {} : m
      if (typeof p == 'string')
        d += ''.concat(
          p,
          `
`
        )
      else if (p._keyframe) y(p)
      else {
        var v = f.reduce(function (w, b) {
          var C
          return (
            (b == null || (C = b.visit) === null || C === void 0
              ? void 0
              : C.call(b, w)) || w
          )
        }, p)
        Object.keys(v).forEach(function (w) {
          var b = v[w]
          if (
            X(b) === 'object' &&
            b &&
            (w !== 'animationName' || !b._keyframe) &&
            !zj(b)
          ) {
            var C = !1,
              S = w.trim(),
              E = !1
            ;(i || o) && s
              ? S.startsWith('@')
                ? (C = !0)
                : S === '&'
                ? (S = nv('', s, u))
                : (S = nv(w, s, u))
              : i && !s && (S === '&' || S === '') && ((S = ''), (E = !0))
            var j = e(b, n, {
                root: E,
                injectHash: C,
                parentSelectors: [].concat(Q(a), [S])
              }),
              T = K(j, 2),
              M = T[0],
              O = T[1]
            ;(g = B(B({}, g), O)), (d += ''.concat(S).concat(M))
          } else {
            let D = function (R, I) {
              var N = R.replace(/[A-Z]/g, function (z) {
                  return '-'.concat(z.toLowerCase())
                }),
                F = I
              !gj[R] &&
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
            var L,
              A =
                (L = b == null ? void 0 : b.value) !== null && L !== void 0
                  ? L
                  : b
            X(b) === 'object' &&
            b !== null &&
            b !== void 0 &&
            b[Ty] &&
            Array.isArray(A)
              ? A.forEach(function (R) {
                  D(w, R)
                })
              : D(w, A)
          }
        })
      }
    }),
    i
      ? l &&
        (d && (d = '@layer '.concat(l.name, ' {').concat(d, '}')),
        l.dependencies &&
          (g['@layer '.concat(l.name)] = l.dependencies.map(function (m) {
            return '@layer '.concat(m, ', ').concat(l.name, ';')
          }).join(`
`)))
      : (d = '{'.concat(d, '}')),
    [d, g]
  )
}
function ky(e, t) {
  return ra(''.concat(e.join('%')).concat(t))
}
function Dj() {
  return null
}
var Py = 'style'
function Od(e, t) {
  var n = e.token,
    r = e.path,
    i = e.hashId,
    o = e.layer,
    a = e.nonce,
    s = e.clientOnly,
    l = e.order,
    u = l === void 0 ? 0 : l,
    c = k.useContext(Xl),
    f = c.autoClear
  c.mock
  var d = c.defaultCache,
    g = c.hashPriority,
    y = c.container,
    _ = c.ssrInline,
    x = c.transformers,
    m = c.linters,
    p = c.cache,
    v = c.layer,
    w = n._tokenKey,
    b = [w]
  v && b.push('layer'), b.push.apply(b, Q(r))
  var C = Md,
    S = Op(
      Py,
      b,
      function () {
        var O = b.join('|')
        if (Rj(O)) {
          var L = Ij(O),
            A = K(L, 2),
            D = A[0],
            R = A[1]
          if (D) return [D, w, R, {}, s, u]
        }
        var I = t(),
          N = $j(I, {
            hashId: i,
            hashPriority: g,
            layer: v ? o : void 0,
            path: r.join('-'),
            transformers: x,
            linters: m
          }),
          F = K(N, 2),
          z = F[0],
          V = F[1],
          q = Ms(z),
          G = ky(b, q)
        return [q, w, G, V, s, u]
      },
      function (O, L) {
        var A = K(O, 3),
          D = A[2]
        ;(L || f) && Md && hy(D, { mark: Ht })
      },
      function (O) {
        var L = K(O, 4),
          A = L[0]
        L[1]
        var D = L[2],
          R = L[3]
        if (C && A !== Ey) {
          var I = {
              mark: Ht,
              prepend: v ? !1 : 'queue',
              attachTo: y,
              priority: u
            },
            N = typeof a == 'function' ? a() : a
          N && (I.csp = { nonce: N })
          var F = [],
            z = []
          Object.keys(R).forEach(function (q) {
            q.startsWith('@layer') ? F.push(q) : z.push(q)
          }),
            F.forEach(function (q) {
              Si(
                Ms(R[q]),
                '_layer-'.concat(q),
                B(B({}, I), {}, { prepend: !0 })
              )
            })
          var V = Si(A, D, I)
          ;(V[Hn] = p.instanceId),
            V.setAttribute(Oi, w),
            z.forEach(function (q) {
              Si(Ms(R[q]), '_effect-'.concat(q), I)
            })
        }
      }
    ),
    E = K(S, 3),
    j = E[0],
    T = E[1],
    M = E[2]
  return function (O) {
    var L
    if (!_ || C || !d) L = k.createElement(Dj, null)
    else {
      var A
      L = k.createElement(
        'style',
        Lr({}, ((A = {}), $(A, Oi, T), $(A, Ht, M), A), {
          dangerouslySetInnerHTML: { __html: j }
        })
      )
    }
    return k.createElement(k.Fragment, null, L, O)
  }
}
var Vj = function (t, n, r) {
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
      (g = fl(o, a, s, y, d)),
      l &&
        Object.keys(l).forEach(function (_) {
          if (!n[_]) {
            n[_] = !0
            var x = Ms(l[_]),
              m = fl(x, a, '_effect-'.concat(_), y, d)
            _.startsWith('@layer') ? (g = m + g) : (g += m)
          }
        }),
      [c, s, g]
    )
  },
  My = 'cssVar',
  Bj = function (t, n) {
    var r = t.key,
      i = t.prefix,
      o = t.unitless,
      a = t.ignore,
      s = t.token,
      l = t.scope,
      u = l === void 0 ? '' : l,
      c = k.useContext(Xl),
      f = c.cache.instanceId,
      d = c.container,
      g = s._tokenKey,
      y = [].concat(Q(t.path), [r, u, g]),
      _ = Op(
        My,
        y,
        function () {
          var x = n(),
            m = vy(x, r, { prefix: i, unitless: o, ignore: a, scope: u }),
            p = K(m, 2),
            v = p[0],
            w = p[1],
            b = ky(y, w)
          return [v, w, b, r]
        },
        function (x) {
          var m = K(x, 3),
            p = m[2]
          Md && hy(p, { mark: Ht })
        },
        function (x) {
          var m = K(x, 3),
            p = m[1],
            v = m[2]
          if (p) {
            var w = Si(p, v, {
              mark: Ht,
              prepend: 'queue',
              attachTo: d,
              priority: -999
            })
            ;(w[Hn] = f), w.setAttribute(Oi, r)
          }
        }
      )
    return _
  },
  Hj = function (t, n, r) {
    var i = K(t, 4),
      o = i[1],
      a = i[2],
      s = i[3],
      l = r || {},
      u = l.plain
    if (!o) return null
    var c = -999,
      f = { 'data-rc-order': 'prependQueue', 'data-rc-priority': ''.concat(c) },
      d = fl(o, s, a, f, u)
    return [c, a, d]
  },
  oo
;(oo = {}), $(oo, Py, Vj), $(oo, yy, vj), $(oo, My, Hj)
function Xr(e) {
  return (e.notSplit = !0), e
}
Xr(['borderTop', 'borderBottom']),
  Xr(['borderTop']),
  Xr(['borderBottom']),
  Xr(['borderLeft', 'borderRight']),
  Xr(['borderLeft']),
  Xr(['borderRight'])
var qj = k.createContext({})
function Wj(e) {
  return uy(e) || oy(e) || Pp(e) || cy()
}
function tn(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null) return
    n = n[t[r]]
  }
  return n
}
function Ny(e, t, n, r) {
  if (!t.length) return n
  var i = Wj(t),
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
      : (s[o] = Ny(s[o], a, n, r)),
    s
  )
}
function It(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1
  return t.length && r && n === void 0 && !tn(e, t.slice(0, -1))
    ? e
    : Ny(e, t, n, r)
}
function Uj(e) {
  return (
    X(e) === 'object' &&
    e !== null &&
    Object.getPrototypeOf(e) === Object.prototype
  )
}
function rv(e) {
  return Array.isArray(e) ? [] : {}
}
var Gj = typeof Reflect > 'u' ? Object.keys : Reflect.ownKeys
function fi() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n]
  var r = rv(t[0])
  return (
    t.forEach(function (i) {
      function o(a, s) {
        var l = new Set(s),
          u = tn(i, a),
          c = Array.isArray(u)
        if (c || Uj(u)) {
          if (!l.has(u)) {
            l.add(u)
            var f = tn(r, a)
            c
              ? (r = It(r, a, []))
              : (!f || X(f) !== 'object') && (r = It(r, a, rv(u))),
              Gj(u).forEach(function (d) {
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
const Qj = k.createContext({}),
  Kj = k.createContext(void 0)
var Xj = {
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
  Yj = {
    yearFormat: 'YYYY',
    dayFormat: 'D',
    cellMeridiemFormat: 'A',
    monthBeforeYear: !0
  },
  Zj = B(
    B({}, Yj),
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
const Ly = {
    placeholder: 'Select time',
    rangePlaceholder: ['Start time', 'End time']
  },
  iv = {
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
      Zj
    ),
    timePickerLocale: Object.assign({}, Ly)
  },
  rt = '${label} is not a valid ${type}',
  Jl = {
    locale: 'en',
    Pagination: Xj,
    DatePicker: iv,
    TimePicker: Ly,
    Calendar: iv,
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
Object.assign({}, Jl.Modal)
let Ns = []
const ov = () =>
  Ns.reduce((e, t) => Object.assign(Object.assign({}, e), t), Jl.Modal)
function Jj(e) {
  if (e) {
    const t = Object.assign({}, e)
    return (
      Ns.push(t),
      ov(),
      () => {
        ;(Ns = Ns.filter((n) => n !== t)), ov()
      }
    )
  }
  Object.assign({}, Jl.Modal)
}
const Oy = k.createContext(void 0),
  eT = 'internalMark',
  tT = (e) => {
    const { locale: t = {}, children: n, _ANT_MARK__: r } = e
    k.useEffect(() => Jj(t == null ? void 0 : t.Modal), [t])
    const i = k.useMemo(
      () => Object.assign(Object.assign({}, t), { exist: !0 }),
      [t]
    )
    return k.createElement(Oy.Provider, { value: i }, n)
  }
function Ae(e, t) {
  nT(e) && (e = '100%')
  var n = rT(e)
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
function es(e) {
  return Math.min(1, Math.max(0, e))
}
function nT(e) {
  return typeof e == 'string' && e.indexOf('.') !== -1 && parseFloat(e) === 1
}
function rT(e) {
  return typeof e == 'string' && e.indexOf('%') !== -1
}
function Ay(e) {
  return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e
}
function ts(e) {
  return e <= 1 ? ''.concat(Number(e) * 100, '%') : e
}
function gr(e) {
  return e.length === 1 ? '0' + e : String(e)
}
function iT(e, t, n) {
  return { r: Ae(e, 255) * 255, g: Ae(t, 255) * 255, b: Ae(n, 255) * 255 }
}
function av(e, t, n) {
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
function Ju(e, t, n) {
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
function oT(e, t, n) {
  var r, i, o
  if (((e = Ae(e, 360)), (t = Ae(t, 100)), (n = Ae(n, 100)), t === 0))
    (i = n), (o = n), (r = n)
  else {
    var a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - a
    ;(r = Ju(s, a, e + 1 / 3)), (i = Ju(s, a, e)), (o = Ju(s, a, e - 1 / 3))
  }
  return { r: r * 255, g: i * 255, b: o * 255 }
}
function Ad(e, t, n) {
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
function aT(e, t, n) {
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
function Rd(e, t, n, r) {
  var i = [
    gr(Math.round(e).toString(16)),
    gr(Math.round(t).toString(16)),
    gr(Math.round(n).toString(16))
  ]
  return r &&
    i[0].startsWith(i[0].charAt(1)) &&
    i[1].startsWith(i[1].charAt(1)) &&
    i[2].startsWith(i[2].charAt(1))
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join('')
}
function sT(e, t, n, r, i) {
  var o = [
    gr(Math.round(e).toString(16)),
    gr(Math.round(t).toString(16)),
    gr(Math.round(n).toString(16)),
    gr(lT(r))
  ]
  return i &&
    o[0].startsWith(o[0].charAt(1)) &&
    o[1].startsWith(o[1].charAt(1)) &&
    o[2].startsWith(o[2].charAt(1)) &&
    o[3].startsWith(o[3].charAt(1))
    ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0)
    : o.join('')
}
function lT(e) {
  return Math.round(parseFloat(e) * 255).toString(16)
}
function sv(e) {
  return ot(e) / 255
}
function ot(e) {
  return parseInt(e, 16)
}
function uT(e) {
  return { r: e >> 16, g: (e & 65280) >> 8, b: e & 255 }
}
var Id = {
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
function Jr(e) {
  var t = { r: 0, g: 0, b: 0 },
    n = 1,
    r = null,
    i = null,
    o = null,
    a = !1,
    s = !1
  return (
    typeof e == 'string' && (e = fT(e)),
    typeof e == 'object' &&
      (fn(e.r) && fn(e.g) && fn(e.b)
        ? ((t = iT(e.r, e.g, e.b)),
          (a = !0),
          (s = String(e.r).substr(-1) === '%' ? 'prgb' : 'rgb'))
        : fn(e.h) && fn(e.s) && fn(e.v)
        ? ((r = ts(e.s)),
          (i = ts(e.v)),
          (t = aT(e.h, r, i)),
          (a = !0),
          (s = 'hsv'))
        : fn(e.h) &&
          fn(e.s) &&
          fn(e.l) &&
          ((r = ts(e.s)),
          (o = ts(e.l)),
          (t = oT(e.h, r, o)),
          (a = !0),
          (s = 'hsl')),
      Object.prototype.hasOwnProperty.call(e, 'a') && (n = e.a)),
    (n = Ay(n)),
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
var cT = '[-\\+]?\\d+%?',
  dT = '[-\\+]?\\d*\\.\\d+%?',
  Wn = '(?:'.concat(dT, ')|(?:').concat(cT, ')'),
  ec = '[\\s|\\(]+('
    .concat(Wn, ')[,|\\s]+(')
    .concat(Wn, ')[,|\\s]+(')
    .concat(Wn, ')\\s*\\)?'),
  tc = '[\\s|\\(]+('
    .concat(Wn, ')[,|\\s]+(')
    .concat(Wn, ')[,|\\s]+(')
    .concat(Wn, ')[,|\\s]+(')
    .concat(Wn, ')\\s*\\)?'),
  Ot = {
    CSS_UNIT: new RegExp(Wn),
    rgb: new RegExp('rgb' + ec),
    rgba: new RegExp('rgba' + tc),
    hsl: new RegExp('hsl' + ec),
    hsla: new RegExp('hsla' + tc),
    hsv: new RegExp('hsv' + ec),
    hsva: new RegExp('hsva' + tc),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  }
function fT(e) {
  if (((e = e.trim().toLowerCase()), e.length === 0)) return !1
  var t = !1
  if (Id[e]) (e = Id[e]), (t = !0)
  else if (e === 'transparent')
    return { r: 0, g: 0, b: 0, a: 0, format: 'name' }
  var n = Ot.rgb.exec(e)
  return n
    ? { r: n[1], g: n[2], b: n[3] }
    : ((n = Ot.rgba.exec(e)),
      n
        ? { r: n[1], g: n[2], b: n[3], a: n[4] }
        : ((n = Ot.hsl.exec(e)),
          n
            ? { h: n[1], s: n[2], l: n[3] }
            : ((n = Ot.hsla.exec(e)),
              n
                ? { h: n[1], s: n[2], l: n[3], a: n[4] }
                : ((n = Ot.hsv.exec(e)),
                  n
                    ? { h: n[1], s: n[2], v: n[3] }
                    : ((n = Ot.hsva.exec(e)),
                      n
                        ? { h: n[1], s: n[2], v: n[3], a: n[4] }
                        : ((n = Ot.hex8.exec(e)),
                          n
                            ? {
                                r: ot(n[1]),
                                g: ot(n[2]),
                                b: ot(n[3]),
                                a: sv(n[4]),
                                format: t ? 'name' : 'hex8'
                              }
                            : ((n = Ot.hex6.exec(e)),
                              n
                                ? {
                                    r: ot(n[1]),
                                    g: ot(n[2]),
                                    b: ot(n[3]),
                                    format: t ? 'name' : 'hex'
                                  }
                                : ((n = Ot.hex4.exec(e)),
                                  n
                                    ? {
                                        r: ot(n[1] + n[1]),
                                        g: ot(n[2] + n[2]),
                                        b: ot(n[3] + n[3]),
                                        a: sv(n[4] + n[4]),
                                        format: t ? 'name' : 'hex8'
                                      }
                                    : ((n = Ot.hex3.exec(e)),
                                      n
                                        ? {
                                            r: ot(n[1] + n[1]),
                                            g: ot(n[2] + n[2]),
                                            b: ot(n[3] + n[3]),
                                            format: t ? 'name' : 'hex'
                                          }
                                        : !1)))))))))
}
function fn(e) {
  return !!Ot.CSS_UNIT.exec(String(e))
}
var qe = (function () {
    function e(t, n) {
      t === void 0 && (t = ''), n === void 0 && (n = {})
      var r
      if (t instanceof e) return t
      typeof t == 'number' && (t = uT(t)), (this.originalInput = t)
      var i = Jr(t)
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
          (this.a = Ay(t)), (this.roundA = Math.round(100 * this.a) / 100), this
        )
      }),
      (e.prototype.isMonochrome = function () {
        var t = this.toHsl().s
        return t === 0
      }),
      (e.prototype.toHsv = function () {
        var t = Ad(this.r, this.g, this.b)
        return { h: t.h * 360, s: t.s, v: t.v, a: this.a }
      }),
      (e.prototype.toHsvString = function () {
        var t = Ad(this.r, this.g, this.b),
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
        var t = av(this.r, this.g, this.b)
        return { h: t.h * 360, s: t.s, l: t.l, a: this.a }
      }),
      (e.prototype.toHslString = function () {
        var t = av(this.r, this.g, this.b),
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
        return t === void 0 && (t = !1), Rd(this.r, this.g, this.b, t)
      }),
      (e.prototype.toHexString = function (t) {
        return t === void 0 && (t = !1), '#' + this.toHex(t)
      }),
      (e.prototype.toHex8 = function (t) {
        return t === void 0 && (t = !1), sT(this.r, this.g, this.b, this.a, t)
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
          var t = '#' + Rd(this.r, this.g, this.b, !1),
            n = 0,
            r = Object.entries(Id);
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
        return (n.l += t / 100), (n.l = es(n.l)), new e(n)
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
        return (n.l -= t / 100), (n.l = es(n.l)), new e(n)
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
        return (n.s -= t / 100), (n.s = es(n.s)), new e(n)
      }),
      (e.prototype.saturate = function (t) {
        t === void 0 && (t = 10)
        var n = this.toHsl()
        return (n.s += t / 100), (n.s = es(n.s)), new e(n)
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
  ns = 2,
  lv = 0.16,
  pT = 0.05,
  hT = 0.05,
  mT = 0.15,
  Ry = 5,
  Iy = 4,
  vT = [
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
function uv(e) {
  var t = e.r,
    n = e.g,
    r = e.b,
    i = Ad(t, n, r)
  return { h: i.h * 360, s: i.s, v: i.v }
}
function rs(e) {
  var t = e.r,
    n = e.g,
    r = e.b
  return '#'.concat(Rd(t, n, r, !1))
}
function gT(e, t, n) {
  var r = n / 100,
    i = {
      r: (t.r - e.r) * r + e.r,
      g: (t.g - e.g) * r + e.g,
      b: (t.b - e.b) * r + e.b
    }
  return i
}
function cv(e, t, n) {
  var r
  return (
    Math.round(e.h) >= 60 && Math.round(e.h) <= 240
      ? (r = n ? Math.round(e.h) - ns * t : Math.round(e.h) + ns * t)
      : (r = n ? Math.round(e.h) + ns * t : Math.round(e.h) - ns * t),
    r < 0 ? (r += 360) : r >= 360 && (r -= 360),
    r
  )
}
function dv(e, t, n) {
  if (e.h === 0 && e.s === 0) return e.s
  var r
  return (
    n ? (r = e.s - lv * t) : t === Iy ? (r = e.s + lv) : (r = e.s + pT * t),
    r > 1 && (r = 1),
    n && t === Ry && r > 0.1 && (r = 0.1),
    r < 0.06 && (r = 0.06),
    Number(r.toFixed(2))
  )
}
function fv(e, t, n) {
  var r
  return (
    n ? (r = e.v + hT * t) : (r = e.v - mT * t),
    r > 1 && (r = 1),
    Number(r.toFixed(2))
  )
}
function pl(e) {
  for (
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = [],
      r = Jr(e),
      i = Ry;
    i > 0;
    i -= 1
  ) {
    var o = uv(r),
      a = rs(Jr({ h: cv(o, i, !0), s: dv(o, i, !0), v: fv(o, i, !0) }))
    n.push(a)
  }
  n.push(rs(r))
  for (var s = 1; s <= Iy; s += 1) {
    var l = uv(r),
      u = rs(Jr({ h: cv(l, s), s: dv(l, s), v: fv(l, s) }))
    n.push(u)
  }
  return t.theme === 'dark'
    ? vT.map(function (c) {
        var f = c.index,
          d = c.opacity,
          g = rs(gT(Jr(t.backgroundColor || '#141414'), Jr(n[f]), d * 100))
        return g
      })
    : n
}
var nc = {
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
  Fd = [
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
Fd.primary = Fd[5]
var zd = [
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
zd.primary = zd[5]
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
var Vd = [
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
Vd.primary = Vd[5]
var Bd = [
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
Bd.primary = Bd[5]
var Hd = [
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
Hd.primary = Hd[5]
var qd = [
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
qd.primary = qd[5]
var Wd = [
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
Wd.primary = Wd[5]
var Ud = [
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
Ud.primary = Ud[5]
var Gd = [
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
Gd.primary = Gd[5]
var Qd = [
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
Qd.primary = Qd[5]
var Kd = [
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
Kd.primary = Kd[5]
var rc = {
  red: Fd,
  volcano: zd,
  orange: $d,
  gold: Dd,
  yellow: Vd,
  lime: Bd,
  green: Hd,
  cyan: qd,
  blue: Wd,
  geekblue: Ud,
  purple: Gd,
  magenta: Qd,
  grey: Kd
}
const Fy = {
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
  sa = Object.assign(Object.assign({}, Fy), {
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
function yT(e, t) {
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
    m = e.colorLink || e.colorInfo,
    p = n(m),
    v = new qe(y[1]).mix(new qe(y[3]), 50).toHexString()
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
    colorErrorBgFilledHover: v,
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
const _T = (e) => {
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
function xT(e) {
  const { motionUnit: t, motionBase: n, borderRadius: r, lineWidth: i } = e
  return Object.assign(
    {
      motionDurationFast: `${(n + t).toFixed(1)}s`,
      motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
      motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
      lineWidthBold: i + 1
    },
    _T(r)
  )
}
const wT = (e) => {
  const { controlHeight: t } = e
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  }
}
function bT(e) {
  return (e + 8) / e
}
function ST(e) {
  const t = new Array(10).fill(null).map((n, r) => {
    const i = r - 1,
      o = e * Math.pow(Math.E, i / 5),
      a = r > 1 ? Math.floor(o) : Math.ceil(o)
    return Math.floor(a / 2) * 2
  })
  return (t[1] = e), t.map((n) => ({ size: n, lineHeight: bT(n) }))
}
const CT = (e) => {
  const t = ST(e),
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
function ET(e) {
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
  ao = (e, t) => new qe(e).darken(t).toHexString(),
  jT = (e) => {
    const t = pl(e)
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
  TT = (e, t) => {
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
      colorBgLayout: ao(n, 4),
      colorBgContainer: ao(n, 0),
      colorBgElevated: ao(n, 0),
      colorBgSpotlight: yt(r, 0.85),
      colorBgBlur: 'transparent',
      colorBorder: ao(n, 15),
      colorBorderSecondary: ao(n, 6)
    }
  }
function kT(e) {
  ;(nc.pink = nc.magenta), (rc.pink = rc.magenta)
  const t = Object.keys(Fy)
    .map((n) => {
      const r = e[n] === nc[n] ? rc[n] : pl(e[n])
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
            yT(e, {
              generateColorPalettes: jT,
              generateNeutralColorPalettes: TT
            })
          ),
          CT(e.fontSize)
        ),
        ET(e)
      ),
      wT(e)
    ),
    xT(e)
  )
}
const zy = Pd(kT),
  Xd = { token: sa, override: { override: sa }, hashed: !0 },
  $y = te.createContext(Xd),
  hl = 'ant',
  Ip = 'anticon',
  PT = (e, t) => t || (e ? `${hl}-${e}` : hl),
  kn = k.createContext({ getPrefixCls: PT, iconPrefixCls: Ip }),
  MT = `-ant-${Date.now()}-${Math.random()}`
function NT(e, t) {
  const n = {},
    r = (a, s) => {
      let l = a.clone()
      return (l = (s == null ? void 0 : s(l)) || l), l.toRgbString()
    },
    i = (a, s) => {
      const l = new qe(a),
        u = pl(l.toRgbString())
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
      s = pl(a.toRgbString())
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
function LT(e, t) {
  const n = NT(e, t)
  Mn() && Si(n, `${MT}-dynamic-theme`)
}
const ml = k.createContext(!1),
  OT = (e) => {
    let { children: t, disabled: n } = e
    const r = k.useContext(ml)
    return k.createElement(ml.Provider, { value: n ?? r }, t)
  },
  la = k.createContext(void 0),
  AT = (e) => {
    let { children: t, size: n } = e
    const r = k.useContext(la)
    return k.createElement(la.Provider, { value: n || r }, t)
  }
function RT() {
  const e = k.useContext(ml),
    t = k.useContext(la)
  return { componentDisabled: e, componentSize: t }
}
var Dy = nt(function e() {
    tt(this, e)
  }),
  Vy = 'CALC_UNIT',
  IT = new RegExp(Vy, 'g')
function ic(e) {
  return typeof e == 'number' ? ''.concat(e).concat(Vy) : e
}
var FT = (function (e) {
    Vi(n, e)
    var t = Bi(n)
    function n(r, i) {
      var o
      tt(this, n),
        (o = t.call(this)),
        $(Y(o), 'result', ''),
        $(Y(o), 'unitlessCssVar', void 0),
        $(Y(o), 'lowPriority', void 0)
      var a = X(r)
      return (
        (o.unitlessCssVar = i),
        r instanceof n
          ? (o.result = '('.concat(r.result, ')'))
          : a === 'number'
          ? (o.result = ic(r))
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
                  (this.result = ''.concat(this.result, ' + ').concat(ic(i))),
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
                  (this.result = ''.concat(this.result, ' - ').concat(ic(i))),
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
              (this.result = this.result.replace(IT, l ? 'px' : '')),
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
  zT = (function (e) {
    Vi(n, e)
    var t = Bi(n)
    function n(r) {
      var i
      return (
        tt(this, n),
        (i = t.call(this)),
        $(Y(i), 'result', 0),
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
  $T = function (t, n) {
    var r = t === 'css' ? FT : zT
    return function (i) {
      return new r(i, n)
    }
  },
  pv = function (t, n) {
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
function Ii(e) {
  var t = k.useRef()
  t.current = e
  var n = k.useCallback(function () {
    for (var r, i = arguments.length, o = new Array(i), a = 0; a < i; a++)
      o[a] = arguments[a]
    return (r = t.current) === null || r === void 0
      ? void 0
      : r.call.apply(r, [t].concat(o))
  }, [])
  return n
}
function ua(e) {
  var t = k.useRef(!1),
    n = k.useState(e),
    r = K(n, 2),
    i = r[0],
    o = r[1]
  k.useEffect(function () {
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
function oc(e) {
  return e !== void 0
}
function DT(e, t) {
  var n = t || {},
    r = n.defaultValue,
    i = n.value,
    o = n.onChange,
    a = n.postState,
    s = ua(function () {
      return oc(i)
        ? i
        : oc(r)
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
    g = Ii(o),
    y = ua([f]),
    _ = K(y, 2),
    x = _[0],
    m = _[1]
  Ym(
    function () {
      var v = x[0]
      u !== v && g(u, v)
    },
    [x]
  ),
    Ym(
      function () {
        oc(i) || c(i)
      },
      [i]
    )
  var p = Ii(function (v, w) {
    c(v, w), m([f], w)
  })
  return [d, p]
}
function hv(e, t, n, r) {
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
var By = typeof CSSINJS_STATISTIC < 'u',
  Yd = !0
function Fp() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n]
  if (!By) return Object.assign.apply(Object, [{}].concat(t))
  Yd = !1
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
    (Yd = !0),
    r
  )
}
var mv = {}
function VT() {}
var BT = function (t) {
  var n,
    r = t,
    i = VT
  return (
    By &&
      typeof Proxy < 'u' &&
      ((n = new Set()),
      (r = new Proxy(t, {
        get: function (a, s) {
          if (Yd) {
            var l
            ;(l = n) === null || l === void 0 || l.add(s)
          }
          return a[s]
        }
      })),
      (i = function (a, s) {
        var l
        mv[a] = {
          global: Array.from(n),
          component: B(
            B({}, (l = mv[a]) === null || l === void 0 ? void 0 : l.component),
            s
          )
        }
      })),
    { token: r, keys: n, flush: i }
  )
}
function vv(e, t, n) {
  if (typeof n == 'function') {
    var r
    return n(Fp(t, (r = t[e]) !== null && r !== void 0 ? r : {}))
  }
  return n ?? {}
}
function HT(e) {
  return e === 'js'
    ? { max: Math.max, min: Math.min }
    : {
        max: function () {
          for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
            r[i] = arguments[i]
          return 'max('.concat(
            r
              .map(function (o) {
                return ia(o)
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
                return ia(o)
              })
              .join(','),
            ')'
          )
        }
      }
}
var qT = 1e3 * 60 * 10,
  WT = (function () {
    function e() {
      tt(this, e),
        $(this, 'map', new Map()),
        $(this, 'objectIDMap', new WeakMap()),
        $(this, 'nextID', 0),
        $(this, 'lastAccessBeat', new Map()),
        $(this, 'accessBeat', 0)
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
                r - i > qT && (n.map.delete(o), n.lastAccessBeat.delete(o))
              }),
                (this.accessBeat = 0)
            }
          }
        }
      ]),
      e
    )
  })(),
  gv = new WT()
function UT(e, t) {
  return te.useMemo(function () {
    var n = gv.get(t)
    if (n) return n
    var r = e()
    return gv.set(t, r), r
  }, t)
}
var GT = function () {
  return {}
}
function QT(e) {
  var t = e.useCSP,
    n = t === void 0 ? GT : t,
    r = e.useToken,
    i = e.usePrefix,
    o = e.getResetStyles,
    a = e.getCommonStyle,
    s = e.getCompUnitless
  function l(d, g, y, _) {
    var x = Array.isArray(d) ? d[0] : d
    function m(E) {
      return ''
        .concat(String(x))
        .concat(E.slice(0, 1).toUpperCase())
        .concat(E.slice(1))
    }
    var p = (_ == null ? void 0 : _.unitless) || {},
      v = typeof s == 'function' ? s(d) : {},
      w = B(B({}, v), {}, $({}, m('zIndexPopup'), !0))
    Object.keys(p).forEach(function (E) {
      w[m(E)] = p[E]
    })
    var b = B(B({}, _), {}, { unitless: w, prefixToken: m }),
      C = c(d, g, y, b),
      S = u(x, y, b)
    return function (E) {
      var j =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : E,
        T = C(E, j),
        M = K(T, 2),
        O = M[1],
        L = S(j),
        A = K(L, 2),
        D = A[0],
        R = A[1]
      return [D, O, R]
    }
  }
  function u(d, g, y) {
    var _ = y.unitless,
      x = y.injectStyle,
      m = x === void 0 ? !0 : x,
      p = y.prefixToken,
      v = y.ignore,
      w = function (S) {
        var E = S.rootCls,
          j = S.cssVar,
          T = j === void 0 ? {} : j,
          M = r(),
          O = M.realToken
        return (
          Bj(
            {
              path: [d],
              prefix: T.prefix,
              key: T.key,
              unitless: _,
              ignore: v,
              token: O,
              scope: E
            },
            function () {
              var L = vv(d, O, g),
                A = hv(d, O, L, {
                  deprecatedTokens: y == null ? void 0 : y.deprecatedTokens
                })
              return (
                Object.keys(L).forEach(function (D) {
                  ;(A[p(D)] = A[D]), delete A[D]
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
          j = E.cssVar
        return [
          function (T) {
            return m && j
              ? te.createElement(
                  te.Fragment,
                  null,
                  te.createElement(w, { rootCls: S, cssVar: j, component: d }),
                  T
                )
              : T
          },
          j == null ? void 0 : j.key
        ]
      }
    return b
  }
  function c(d, g, y) {
    var _ = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
      x = Array.isArray(d) ? d : [d, d],
      m = K(x, 1),
      p = m[0],
      v = x.join('-'),
      w = e.layer || { name: 'antd' }
    return function (b) {
      var C =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : b,
        S = r(),
        E = S.theme,
        j = S.realToken,
        T = S.hashId,
        M = S.token,
        O = S.cssVar,
        L = i(),
        A = L.rootPrefixCls,
        D = L.iconPrefixCls,
        R = n(),
        I = O ? 'css' : 'js',
        N = UT(
          function () {
            var U = new Set()
            return (
              O &&
                Object.keys(_.unitless || {}).forEach(function (Z) {
                  U.add(js(Z, O.prefix)), U.add(js(Z, pv(p, O.prefix)))
                }),
              $T(I, U)
            )
          },
          [I, p, O == null ? void 0 : O.prefix]
        ),
        F = HT(I),
        z = F.max,
        V = F.min,
        q = {
          theme: E,
          token: M,
          hashId: T,
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
              prefix: { rootPrefixCls: A, iconPrefixCls: D },
              csp: R
            })
          }
        )
      var G = Od(B(B({}, q), {}, { path: [v, b, D] }), function () {
        if (_.injectStyle === !1) return []
        var U = BT(M),
          Z = U.token,
          se = U.flush,
          re = vv(p, j, y),
          qi = '.'.concat(b),
          zr = hv(p, j, re, { deprecatedTokens: _.deprecatedTokens })
        O &&
          re &&
          X(re) === 'object' &&
          Object.keys(re).forEach(function (Vr) {
            re[Vr] = 'var('.concat(js(Vr, pv(p, O.prefix)), ')')
          })
        var $r = Fp(
            Z,
            {
              componentCls: qi,
              prefixCls: b,
              iconCls: '.'.concat(D),
              antCls: '.'.concat(A),
              calc: N,
              max: z,
              min: V
            },
            O ? re : zr
          ),
          Dr = g($r, {
            hashId: T,
            prefixCls: b,
            rootPrefixCls: A,
            iconPrefixCls: D
          })
        se(p, zr)
        var sn = typeof a == 'function' ? a($r, b, C, _.resetFont) : null
        return [_.resetStyle === !1 ? null : sn, Dr]
      })
      return [G, T]
    }
  }
  function f(d, g, y) {
    var _ = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
      x = c(d, g, y, B({ resetStyle: !1, order: -998 }, _)),
      m = function (v) {
        var w = v.prefixCls,
          b = v.rootCls,
          C = b === void 0 ? w : b
        return x(w, C), null
      }
    return m
  }
  return { genStyleHooks: l, genSubStyleComponent: f, genComponentStyleHook: c }
}
const KT = '5.22.7'
function ac(e) {
  return e >= 0 && e <= 255
}
function is(e, t) {
  const { r: n, g: r, b: i, a: o } = new qe(e).toRgb()
  if (o < 1) return e
  const { r: a, g: s, b: l } = new qe(t).toRgb()
  for (let u = 0.01; u <= 1; u += 0.01) {
    const c = Math.round((n - a * (1 - u)) / u),
      f = Math.round((r - s * (1 - u)) / u),
      d = Math.round((i - l * (1 - u)) / u)
    if (ac(c) && ac(f) && ac(d))
      return new qe({
        r: c,
        g: f,
        b: d,
        a: Math.round(u * 100) / 100
      }).toRgbString()
  }
  return new qe({ r: n, g: r, b: i, a: 1 }).toRgbString()
}
var XT = function (e, t) {
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
function Hy(e) {
  const { override: t } = e,
    n = XT(e, ['override']),
    r = Object.assign({}, t)
  Object.keys(sa).forEach((d) => {
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
      colorSplit: is(i.colorBorderSecondary, i.colorBgContainer),
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
      colorErrorOutline: is(i.colorErrorBg, i.colorBgContainer),
      colorWarningOutline: is(i.colorWarningBg, i.colorBgContainer),
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
      controlOutline: is(i.colorPrimaryBg, i.colorBgContainer),
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
var yv = function (e, t) {
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
const qy = {
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
  YT = {
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
  ZT = {
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
  Wy = (e, t, n) => {
    const r = n.getDerivativeToken(e),
      { override: i } = t,
      o = yv(t, ['override'])
    let a = Object.assign(Object.assign({}, r), { override: i })
    return (
      (a = Hy(a)),
      o &&
        Object.entries(o).forEach((s) => {
          let [l, u] = s
          const { theme: c } = u,
            f = yv(u, ['theme'])
          let d = f
          c &&
            (d = Wy(
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
    o = `${KT}-${t || ''}`,
    a = n || zy,
    [s, l, u] = mj(a, [sa, e], {
      salt: o,
      override: r,
      getComputedToken: Wy,
      formatToken: Hy,
      cssVar: i && {
        prefix: i.prefix,
        key: i.key,
        unitless: qy,
        ignore: YT,
        preserve: ZT
      }
    })
  return [a, u, t ? l : '', s, i]
}
const sc = function (e) {
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
  JT = () => ({
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
  e8 = (e) => ({
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
  t8 = (e, t, n, r) => {
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
  n8 = (e) => ({
    outline: `${ia(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
    outlineOffset: 1,
    transition: 'outline-offset 0s, outline 0s'
  }),
  Uy = (e) => ({
    [`.${e}`]: Object.assign(Object.assign({}, JT()), {
      [`.${e} .${e}-icon`]: { display: 'block' }
    })
  }),
  {
    genStyleHooks: r8,
    genComponentStyleHook: i8,
    genSubStyleComponent: Y7
  } = QT({
    usePrefix: () => {
      const { getPrefixCls: e, iconPrefixCls: t } = k.useContext(kn)
      return { rootPrefixCls: e(), iconPrefixCls: t }
    },
    useToken: () => {
      const [e, t, n, r, i] = wa()
      return { theme: e, realToken: t, hashId: n, token: r, cssVar: i }
    },
    useCSP: () => {
      const { csp: e } = k.useContext(kn)
      return e ?? {}
    },
    getResetStyles: (e, t) => {
      var n
      return [
        { '&': e8(e) },
        Uy(
          (n = t == null ? void 0 : t.prefix.iconPrefixCls) !== null &&
            n !== void 0
            ? n
            : Ip
        )
      ]
    },
    getCommonStyle: t8,
    getCompUnitless: () => qy
  }),
  o8 = (e, t) => {
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
      () => [Uy(e)]
    )
  },
  a8 = Object.assign({}, No),
  { useId: _v } = a8,
  s8 = () => '',
  l8 = typeof _v > 'u' ? s8 : _v
function u8(e, t, n) {
  var r
  const i = e || {},
    o =
      i.inherit === !1 || !t
        ? Object.assign(Object.assign({}, Xd), {
            hashed:
              (r = t == null ? void 0 : t.hashed) !== null && r !== void 0
                ? r
                : Xd.hashed,
            cssVar: t == null ? void 0 : t.cssVar
          })
        : t,
    a = l8()
  return ey(
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
var c8 = ['children'],
  Gy = k.createContext({})
function d8(e) {
  var t = e.children,
    n = Or(e, c8)
  return k.createElement(Gy.Provider, { value: n }, t)
}
var f8 = (function (e) {
  Vi(n, e)
  var t = Bi(n)
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
})(k.Component)
function p8(e) {
  var t = k.useReducer(function (s) {
      return s + 1
    }, 0),
    n = K(t, 2),
    r = n[1],
    i = k.useRef(e),
    o = Ii(function () {
      return i.current
    }),
    a = Ii(function (s) {
      ;(i.current = typeof s == 'function' ? s(i.current) : s), r()
    })
  return [o, a]
}
var On = 'none',
  os = 'appear',
  as = 'enter',
  ss = 'leave',
  xv = 'none',
  Ft = 'prepare',
  pi = 'start',
  hi = 'active',
  zp = 'end',
  Qy = 'prepared'
function wv(e, t) {
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
function h8(e, t) {
  var n = {
    animationend: wv('Animation', 'AnimationEnd'),
    transitionend: wv('Transition', 'TransitionEnd')
  }
  return (
    e &&
      ('AnimationEvent' in t || delete n.animationend.animation,
      'TransitionEvent' in t || delete n.transitionend.transition),
    n
  )
}
var m8 = h8(Mn(), typeof window < 'u' ? window : {}),
  Ky = {}
if (Mn()) {
  var v8 = document.createElement('div')
  Ky = v8.style
}
var ls = {}
function Xy(e) {
  if (ls[e]) return ls[e]
  var t = m8[e]
  if (t)
    for (var n = Object.keys(t), r = n.length, i = 0; i < r; i += 1) {
      var o = n[i]
      if (Object.prototype.hasOwnProperty.call(t, o) && o in Ky)
        return (ls[e] = t[o]), ls[e]
    }
  return ''
}
var Yy = Xy('animationend'),
  Zy = Xy('transitionend'),
  Jy = !!(Yy && Zy),
  bv = Yy || 'animationend',
  Sv = Zy || 'transitionend'
function Cv(e, t) {
  if (!e) return null
  if (X(e) === 'object') {
    var n = t.replace(/-\w/g, function (r) {
      return r[1].toUpperCase()
    })
    return e[n]
  }
  return ''.concat(e, '-').concat(t)
}
const g8 = function (e) {
  var t = k.useRef()
  function n(i) {
    i && (i.removeEventListener(Sv, e), i.removeEventListener(bv, e))
  }
  function r(i) {
    t.current && t.current !== i && n(t.current),
      i &&
        i !== t.current &&
        (i.addEventListener(Sv, e), i.addEventListener(bv, e), (t.current = i))
  }
  return (
    k.useEffect(function () {
      return function () {
        n(t.current)
      }
    }, []),
    [r, n]
  )
}
var e2 = Mn() ? k.useLayoutEffect : k.useEffect
const y8 = function () {
  var e = k.useRef(null)
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
    k.useEffect(function () {
      return function () {
        t()
      }
    }, []),
    [n, t]
  )
}
var _8 = [Ft, pi, hi, zp],
  x8 = [Ft, Qy],
  t2 = !1,
  w8 = !0
function n2(e) {
  return e === hi || e === zp
}
const b8 = function (e, t, n) {
  var r = ua(xv),
    i = K(r, 2),
    o = i[0],
    a = i[1],
    s = y8(),
    l = K(s, 2),
    u = l[0],
    c = l[1]
  function f() {
    a(Ft, !0)
  }
  var d = t ? x8 : _8
  return (
    e2(
      function () {
        if (o !== xv && o !== zp) {
          var g = d.indexOf(o),
            y = d[g + 1],
            _ = n(o)
          _ === t2
            ? a(y, !0)
            : y &&
              u(function (x) {
                function m() {
                  x.isCanceled() || a(y, !0)
                }
                _ === !0 ? m() : Promise.resolve(_).then(m)
              })
        }
      },
      [e, o]
    ),
    k.useEffect(function () {
      return function () {
        c()
      }
    }, []),
    [f, o]
  )
}
function S8(e, t, n, r) {
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
    m = r.onLeaveStart,
    p = r.onAppearActive,
    v = r.onEnterActive,
    w = r.onLeaveActive,
    b = r.onAppearEnd,
    C = r.onEnterEnd,
    S = r.onLeaveEnd,
    E = r.onVisibleChanged,
    j = ua(),
    T = K(j, 2),
    M = T[0],
    O = T[1],
    L = p8(On),
    A = K(L, 2),
    D = A[0],
    R = A[1],
    I = ua(null),
    N = K(I, 2),
    F = N[0],
    z = N[1],
    V = D(),
    q = k.useRef(!1),
    G = k.useRef(null)
  function U() {
    return n()
  }
  var Z = k.useRef(!1)
  function se() {
    R(On), z(null, !0)
  }
  var re = Ii(function (Ie) {
      var Ee = D()
      if (Ee !== On) {
        var gt = U()
        if (!(Ie && !Ie.deadline && Ie.target !== gt)) {
          var Br = Z.current,
            Hr
          Ee === os && Br
            ? (Hr = b == null ? void 0 : b(gt, Ie))
            : Ee === as && Br
            ? (Hr = C == null ? void 0 : C(gt, Ie))
            : Ee === ss && Br && (Hr = S == null ? void 0 : S(gt, Ie)),
            Br && Hr !== !1 && se()
        }
      }
    }),
    qi = g8(re),
    zr = K(qi, 1),
    $r = zr[0],
    Dr = function (Ee) {
      switch (Ee) {
        case os:
          return $($($({}, Ft, d), pi, _), hi, p)
        case as:
          return $($($({}, Ft, g), pi, x), hi, v)
        case ss:
          return $($($({}, Ft, y), pi, m), hi, w)
        default:
          return {}
      }
    },
    sn = k.useMemo(
      function () {
        return Dr(V)
      },
      [V]
    ),
    Vr = b8(V, !e, function (Ie) {
      if (Ie === Ft) {
        var Ee = sn[Ft]
        return Ee ? Ee(U()) : t2
      }
      if (ln in sn) {
        var gt
        z(
          ((gt = sn[ln]) === null || gt === void 0
            ? void 0
            : gt.call(sn, U(), null)) || null
        )
      }
      return (
        ln === hi &&
          V !== On &&
          ($r(U()),
          c > 0 &&
            (clearTimeout(G.current),
            (G.current = setTimeout(function () {
              re({ deadline: !0 })
            }, c)))),
        ln === Qy && se(),
        w8
      )
    }),
    ja = K(Vr, 2),
    tu = ja[0],
    ln = ja[1],
    nu = n2(ln)
  Z.current = nu
  var Ta = k.useRef(null)
  e2(
    function () {
      if (!(q.current && Ta.current === t)) {
        O(t)
        var Ie = q.current
        q.current = !0
        var Ee
        !Ie && t && s && (Ee = os),
          Ie && t && o && (Ee = as),
          ((Ie && !t && u) || (!Ie && f && !t && u)) && (Ee = ss)
        var gt = Dr(Ee)
        Ee && (e || gt[Ft]) ? (R(Ee), tu()) : R(On), (Ta.current = t)
      }
    },
    [t]
  ),
    k.useEffect(
      function () {
        ;((V === os && !s) || (V === as && !o) || (V === ss && !u)) && R(On)
      },
      [s, o, u]
    ),
    k.useEffect(function () {
      return function () {
        ;(q.current = !1), clearTimeout(G.current)
      }
    }, [])
  var Wi = k.useRef(!1)
  k.useEffect(
    function () {
      M && (Wi.current = !0),
        M !== void 0 &&
          V === On &&
          ((Wi.current || M) && (E == null || E(M)), (Wi.current = !0))
    },
    [M, V]
  )
  var Ui = F
  return (
    sn[Ft] && ln === pi && (Ui = B({ transition: 'none' }, Ui)),
    [V, ln, Ui, M ?? t]
  )
}
function C8(e) {
  var t = e
  X(e) === 'object' && (t = e.transitionSupport)
  function n(i, o) {
    return !!(i.motionName && t && o !== !1)
  }
  var r = k.forwardRef(function (i, o) {
    var a = i.visible,
      s = a === void 0 ? !0 : a,
      l = i.removeOnLeave,
      u = l === void 0 ? !0 : l,
      c = i.forceRender,
      f = i.children,
      d = i.motionName,
      g = i.leavedClassName,
      y = i.eventProps,
      _ = k.useContext(Gy),
      x = _.motion,
      m = n(i, x),
      p = k.useRef(),
      v = k.useRef()
    function w() {
      try {
        return p.current instanceof HTMLElement ? p.current : A3(v.current)
      } catch {
        return null
      }
    }
    var b = S8(m, s, w, i),
      C = K(b, 4),
      S = C[0],
      E = C[1],
      j = C[2],
      T = C[3],
      M = k.useRef(T)
    T && (M.current = !0)
    var O = k.useCallback(
        function (N) {
          ;(p.current = N), ty(o, N)
        },
        [o]
      ),
      L,
      A = B(B({}, y), {}, { visible: s })
    if (!f) L = null
    else if (S === On)
      T
        ? (L = f(B({}, A), O))
        : !u && M.current && g
        ? (L = f(B(B({}, A), {}, { className: g }), O))
        : c || (!u && !g)
        ? (L = f(B(B({}, A), {}, { style: { display: 'none' } }), O))
        : (L = null)
    else {
      var D
      E === Ft
        ? (D = 'prepare')
        : n2(E)
        ? (D = 'active')
        : E === pi && (D = 'start')
      var R = Cv(d, ''.concat(S, '-').concat(D))
      L = f(
        B(
          B({}, A),
          {},
          {
            className: Nr(
              Cv(d, S),
              $($({}, R, R && D), d, typeof d == 'string')
            ),
            style: j
          }
        ),
        O
      )
    }
    if (k.isValidElement(L) && ny(L)) {
      var I = iy(L)
      I || (L = k.cloneElement(L, { ref: O }))
    }
    return k.createElement(f8, { ref: v }, L)
  })
  return (r.displayName = 'CSSMotion'), r
}
const r2 = C8(Jy)
var Zd = 'add',
  Jd = 'keep',
  ef = 'remove',
  lc = 'removed'
function E8(e) {
  var t
  return (
    e && X(e) === 'object' && 'key' in e ? (t = e) : (t = { key: e }),
    B(B({}, t), {}, { key: String(t.key) })
  )
}
function tf() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
  return e.map(E8)
}
function j8() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
    n = [],
    r = 0,
    i = t.length,
    o = tf(e),
    a = tf(t)
  o.forEach(function (u) {
    for (var c = !1, f = r; f < i; f += 1) {
      var d = a[f]
      if (d.key === u.key) {
        r < f &&
          ((n = n.concat(
            a.slice(r, f).map(function (g) {
              return B(B({}, g), {}, { status: Zd })
            })
          )),
          (r = f)),
          n.push(B(B({}, d), {}, { status: Jd })),
          (r += 1),
          (c = !0)
        break
      }
    }
    c || n.push(B(B({}, u), {}, { status: ef }))
  }),
    r < i &&
      (n = n.concat(
        a.slice(r).map(function (u) {
          return B(B({}, u), {}, { status: Zd })
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
        return f !== u || d !== ef
      })),
        n.forEach(function (c) {
          c.key === u && (c.status = Jd)
        })
    }),
    n
  )
}
var T8 = ['component', 'children', 'onVisibleChanged', 'onAllRemoved'],
  k8 = ['status'],
  P8 = [
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
function M8(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : r2,
    n = (function (r) {
      Vi(o, r)
      var i = Bi(o)
      function o() {
        var a
        tt(this, o)
        for (var s = arguments.length, l = new Array(s), u = 0; u < s; u++)
          l[u] = arguments[u]
        return (
          (a = i.call.apply(i, [this].concat(l))),
          $(Y(a), 'state', { keyEntities: [] }),
          $(Y(a), 'removeKey', function (c) {
            a.setState(
              function (f) {
                var d = f.keyEntities.map(function (g) {
                  return g.key !== c ? g : B(B({}, g), {}, { status: lc })
                })
                return { keyEntities: d }
              },
              function () {
                var f = a.state.keyEntities,
                  d = f.filter(function (g) {
                    var y = g.status
                    return y !== lc
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
                var g = Or(u, T8),
                  y = c || k.Fragment,
                  _ = {}
                return (
                  P8.forEach(function (x) {
                    ;(_[x] = g[x]), delete g[x]
                  }),
                  delete g.keys,
                  k.createElement(
                    y,
                    g,
                    l.map(function (x, m) {
                      var p = x.status,
                        v = Or(x, k8),
                        w = p === Zd || p === Jd
                      return k.createElement(
                        t,
                        Lr({}, _, {
                          key: v.key,
                          visible: w,
                          eventProps: v,
                          onVisibleChanged: function (C) {
                            d == null || d(C, { key: v.key }),
                              C || s.removeKey(v.key)
                          }
                        }),
                        function (b, C) {
                          return f(B(B({}, b), {}, { index: m }), C)
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
                  f = tf(u),
                  d = j8(c, f)
                return {
                  keyEntities: d.filter(function (g) {
                    var y = c.find(function (_) {
                      var x = _.key
                      return g.key === x
                    })
                    return !(y && y.status === lc && g.status === ef)
                  })
                }
              }
            }
          ]
        ),
        o
      )
    })(k.Component)
  return $(n, 'defaultProps', { component: 'div' }), n
}
M8(Jy)
function N8(e) {
  const { children: t } = e,
    [, n] = wa(),
    { motion: r } = n,
    i = k.useRef(!1)
  return (
    (i.current = i.current || r === !1),
    i.current ? k.createElement(d8, { motion: r }, t) : t
  )
}
const L8 = () => null
var O8 = function (e, t) {
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
const A8 = [
  'getTargetContainer',
  'getPopupContainer',
  'renderEmpty',
  'input',
  'pagination',
  'form',
  'select',
  'button'
]
let i2
function R8() {
  return i2 || hl
}
function I8(e) {
  return Object.keys(e).some((t) => t.endsWith('Color'))
}
const F8 = (e) => {
    const { prefixCls: t, iconPrefixCls: n, theme: r, holderRender: i } = e
    t !== void 0 && (i2 = t), r && I8(r) && LT(R8(), r)
  },
  z8 = (e) => {
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
        parentContext: m,
        iconPrefixCls: p,
        theme: v,
        componentDisabled: w,
        segmented: b,
        statistic: C,
        spin: S,
        calendar: E,
        carousel: j,
        cascader: T,
        collapse: M,
        typography: O,
        checkbox: L,
        descriptions: A,
        divider: D,
        drawer: R,
        skeleton: I,
        steps: N,
        image: F,
        layout: z,
        list: V,
        mentions: q,
        modal: G,
        progress: U,
        result: Z,
        slider: se,
        breadcrumb: re,
        menu: qi,
        pagination: zr,
        input: $r,
        textArea: Dr,
        empty: sn,
        badge: Vr,
        radio: ja,
        rate: tu,
        switch: ln,
        transfer: nu,
        avatar: Ta,
        message: Wi,
        tag: Ui,
        table: Ie,
        card: Ee,
        tabs: gt,
        timeline: Br,
        timePicker: Hr,
        upload: m2,
        notification: v2,
        tree: g2,
        colorPicker: y2,
        datePicker: _2,
        rangePicker: x2,
        flex: w2,
        wave: b2,
        dropdown: S2,
        warning: C2,
        tour: E2,
        floatButtonGroup: j2,
        variant: T2,
        inputNumber: k2,
        treeSelect: P2
      } = e,
      Vp = k.useCallback(
        (we, Pe) => {
          const { prefixCls: Gt } = e
          if (Pe) return Pe
          const Qt = Gt || m.getPrefixCls('')
          return we ? `${Qt}-${we}` : Qt
        },
        [m.getPrefixCls, e.prefixCls]
      ),
      Gi = p || m.iconPrefixCls || Ip,
      Qi = n || m.csp
    o8(Gi, Qi)
    const ru = u8(v, m.theme, { prefixCls: Vp('') }),
      iu = {
        csp: Qi,
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
        getPrefixCls: Vp,
        iconPrefixCls: Gi,
        theme: ru,
        segmented: b,
        statistic: C,
        spin: S,
        calendar: E,
        carousel: j,
        cascader: T,
        collapse: M,
        typography: O,
        checkbox: L,
        descriptions: A,
        divider: D,
        drawer: R,
        skeleton: I,
        steps: N,
        image: F,
        input: $r,
        textArea: Dr,
        layout: z,
        list: V,
        mentions: q,
        modal: G,
        progress: U,
        result: Z,
        slider: se,
        breadcrumb: re,
        menu: qi,
        pagination: zr,
        empty: sn,
        badge: Vr,
        radio: ja,
        rate: tu,
        switch: ln,
        transfer: nu,
        avatar: Ta,
        message: Wi,
        tag: Ui,
        table: Ie,
        card: Ee,
        tabs: gt,
        timeline: Br,
        timePicker: Hr,
        upload: m2,
        notification: v2,
        tree: g2,
        colorPicker: y2,
        datePicker: _2,
        rangePicker: x2,
        flex: w2,
        wave: b2,
        dropdown: S2,
        warning: C2,
        tour: E2,
        floatButtonGroup: j2,
        variant: T2,
        inputNumber: k2,
        treeSelect: P2
      },
      qr = Object.assign({}, m)
    Object.keys(iu).forEach((we) => {
      iu[we] !== void 0 && (qr[we] = iu[we])
    }),
      A8.forEach((we) => {
        const Pe = e[we]
        Pe && (qr[we] = Pe)
      }),
      typeof r < 'u' &&
        (qr.button = Object.assign({ autoInsertSpace: r }, qr.button))
    const Wr = ey(
        () => qr,
        qr,
        (we, Pe) => {
          const Gt = Object.keys(we),
            Qt = Object.keys(Pe)
          return Gt.length !== Qt.length || Gt.some((ka) => we[ka] !== Pe[ka])
        }
      ),
      M2 = k.useMemo(() => ({ prefixCls: Gi, csp: Qi }), [Gi, Qi])
    let ke = k.createElement(
      k.Fragment,
      null,
      k.createElement(L8, { dropdownMatchSelectWidth: g }),
      t
    )
    const Bp = k.useMemo(() => {
      var we, Pe, Gt, Qt
      return fi(
        ((we = Jl.Form) === null || we === void 0
          ? void 0
          : we.defaultValidateMessages) || {},
        ((Gt =
          (Pe = Wr.locale) === null || Pe === void 0 ? void 0 : Pe.Form) ===
          null || Gt === void 0
          ? void 0
          : Gt.defaultValidateMessages) || {},
        ((Qt = Wr.form) === null || Qt === void 0
          ? void 0
          : Qt.validateMessages) || {},
        (a == null ? void 0 : a.validateMessages) || {}
      )
    }, [Wr, a == null ? void 0 : a.validateMessages])
    Object.keys(Bp).length > 0 &&
      (ke = k.createElement(Kj.Provider, { value: Bp }, ke)),
      s && (ke = k.createElement(tT, { locale: s, _ANT_MARK__: eT }, ke)),
      (Gi || Qi) && (ke = k.createElement(qj.Provider, { value: M2 }, ke)),
      l && (ke = k.createElement(AT, { size: l }, ke)),
      (ke = k.createElement(N8, null, ke))
    const N2 = k.useMemo(() => {
      const we = ru || {},
        { algorithm: Pe, token: Gt, components: Qt, cssVar: ka } = we,
        L2 = O8(we, ['algorithm', 'token', 'components', 'cssVar']),
        Hp = Pe && (!Array.isArray(Pe) || Pe.length > 0) ? Pd(Pe) : zy,
        ou = {}
      Object.entries(Qt || {}).forEach((O2) => {
        let [A2, R2] = O2
        const un = Object.assign({}, R2)
        'algorithm' in un &&
          (un.algorithm === !0
            ? (un.theme = Hp)
            : (Array.isArray(un.algorithm) ||
                typeof un.algorithm == 'function') &&
              (un.theme = Pd(un.algorithm)),
          delete un.algorithm),
          (ou[A2] = un)
      })
      const qp = Object.assign(Object.assign({}, sa), Gt)
      return Object.assign(Object.assign({}, L2), {
        theme: Hp,
        token: qp,
        components: ou,
        override: Object.assign({ override: qp }, ou),
        cssVar: ka
      })
    }, [ru])
    return (
      v && (ke = k.createElement($y.Provider, { value: N2 }, ke)),
      Wr.warning &&
        (ke = k.createElement(Qj.Provider, { value: Wr.warning }, ke)),
      w !== void 0 && (ke = k.createElement(OT, { disabled: w }, ke)),
      k.createElement(kn.Provider, { value: Wr }, ke)
    )
  },
  ba = (e) => {
    const t = k.useContext(kn),
      n = k.useContext(Oy)
    return k.createElement(
      z8,
      Object.assign({ parentContext: t, legacyLocale: n }, e)
    )
  }
ba.ConfigContext = kn
ba.SizeContext = la
ba.config = F8
ba.useConfig = RT
Object.defineProperty(ba, 'SizeContext', { get: () => la })
const $8 = (e, t, n) =>
  te.isValidElement(e)
    ? te.cloneElement(e, typeof n == 'function' ? n(e.props || {}) : n)
    : t
function D8(e, t) {
  return $8(e, e, t)
}
const o2 = (e) => {
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
    u = function (N, F, z) {
      return (N[F] = z)
    }
  }
  function c(R, I, N, F) {
    var z = I && I.prototype instanceof m ? I : m,
      V = Object.create(z.prototype),
      q = new A(F || [])
    return i(V, '_invoke', { value: T(R, N, q) }), V
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
  function m() {}
  function p() {}
  function v() {}
  var w = {}
  u(w, a, function () {
    return this
  })
  var b = Object.getPrototypeOf,
    C = b && b(b(D([])))
  C && C !== n && r.call(C, a) && (w = C)
  var S = (v.prototype = m.prototype = Object.create(w))
  function E(R) {
    ;['next', 'throw', 'return'].forEach(function (I) {
      u(R, I, function (N) {
        return this._invoke(I, N)
      })
    })
  }
  function j(R, I) {
    function N(z, V, q, G) {
      var U = f(R[z], R, V)
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
  function T(R, I, N) {
    var F = d
    return function (z, V) {
      if (F === y) throw Error('Generator is already running')
      if (F === _) {
        if (z === 'throw') throw V
        return { value: e, done: !0 }
      }
      for (N.method = z, N.arg = V; ; ) {
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
    var z = f(F, R.iterator, I.arg)
    if (z.type === 'throw')
      return (I.method = 'throw'), (I.arg = z.arg), (I.delegate = null), x
    var V = z.arg
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
  function O(R) {
    var I = { tryLoc: R[0] }
    1 in R && (I.catchLoc = R[1]),
      2 in R && ((I.finallyLoc = R[2]), (I.afterLoc = R[3])),
      this.tryEntries.push(I)
  }
  function L(R) {
    var I = R.completion || {}
    ;(I.type = 'normal'), delete I.arg, (R.completion = I)
  }
  function A(R) {
    ;(this.tryEntries = [{ tryLoc: 'root' }]),
      R.forEach(O, this),
      this.reset(!0)
  }
  function D(R) {
    if (R || R === '') {
      var I = R[a]
      if (I) return I.call(R)
      if (typeof R.next == 'function') return R
      if (!isNaN(R.length)) {
        var N = -1,
          F = function z() {
            for (; ++N < R.length; )
              if (r.call(R, N)) return (z.value = R[N]), (z.done = !1), z
            return (z.value = e), (z.done = !0), z
          }
        return (F.next = F)
      }
    }
    throw new TypeError(X(R) + ' is not iterable')
  }
  return (
    (p.prototype = v),
    i(S, 'constructor', { value: v, configurable: !0 }),
    i(v, 'constructor', { value: p, configurable: !0 }),
    (p.displayName = u(v, l, 'GeneratorFunction')),
    (t.isGeneratorFunction = function (R) {
      var I = typeof R == 'function' && R.constructor
      return (
        !!I && (I === p || (I.displayName || I.name) === 'GeneratorFunction')
      )
    }),
    (t.mark = function (R) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(R, v)
          : ((R.__proto__ = v), u(R, l, 'GeneratorFunction')),
        (R.prototype = Object.create(S)),
        R
      )
    }),
    (t.awrap = function (R) {
      return { __await: R }
    }),
    E(j.prototype),
    u(j.prototype, s, function () {
      return this
    }),
    (t.AsyncIterator = j),
    (t.async = function (R, I, N, F, z) {
      z === void 0 && (z = Promise)
      var V = new j(c(R, I, N, F), z)
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
        function z() {
          for (; N.length; ) {
            var V = N.pop()
            if (V in I) return (z.value = V), (z.done = !1), z
          }
          return (z.done = !0), z
        }
      )
    }),
    (t.values = D),
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
          this.tryEntries.forEach(L),
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
        for (var z = this.tryEntries.length - 1; z >= 0; --z) {
          var V = this.tryEntries[z],
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
          var z = this.tryEntries[F]
          if (
            z.tryLoc <= this.prev &&
            r.call(z, 'finallyLoc') &&
            this.prev < z.finallyLoc
          ) {
            var V = z
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
            return this.complete(F.completion, F.afterLoc), L(F), x
        }
      },
      catch: function (I) {
        for (var N = this.tryEntries.length - 1; N >= 0; --N) {
          var F = this.tryEntries[N]
          if (F.tryLoc === I) {
            var z = F.completion
            if (z.type === 'throw') {
              var V = z.arg
              L(F)
            }
            return V
          }
        }
        throw Error('illegal catch attempt')
      },
      delegateYield: function (I, N, F) {
        return (
          (this.delegate = { iterator: D(I), resultName: N, nextLoc: F }),
          this.method === 'next' && (this.arg = e),
          x
        )
      }
    }),
    t
  )
}
function Ev(e, t, n, r, i, o, a) {
  try {
    var s = e[o](a),
      l = s.value
  } catch (u) {
    return void n(u)
  }
  s.done ? t(l) : Promise.resolve(l).then(r, i)
}
function Fr(e) {
  return function () {
    var t = this,
      n = arguments
    return new Promise(function (r, i) {
      var o = e.apply(t, n)
      function a(l) {
        Ev(o, r, i, a, s, 'next', l)
      }
      function s(l) {
        Ev(o, r, i, a, s, 'throw', l)
      }
      a(void 0)
    })
  }
}
var Sa = B({}, uw),
  V8 = Sa.version,
  uc = Sa.render,
  B8 = Sa.unmountComponentAtNode,
  eu
try {
  var H8 = Number((V8 || '').split('.')[0])
  H8 >= 18 && (eu = Sa.createRoot)
} catch {}
function jv(e) {
  var t = Sa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  t && X(t) === 'object' && (t.usingClientEntryPoint = e)
}
var vl = '__rc_react_root__'
function q8(e, t) {
  jv(!0)
  var n = t[vl] || eu(t)
  jv(!1), n.render(e), (t[vl] = n)
}
function W8(e, t) {
  uc == null || uc(e, t)
}
function U8(e, t) {
  if (eu) {
    q8(e, t)
    return
  }
  W8(e, t)
}
function G8(e) {
  return nf.apply(this, arguments)
}
function nf() {
  return (
    (nf = Fr(
      Ue().mark(function e(t) {
        return Ue().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                return r.abrupt(
                  'return',
                  Promise.resolve().then(function () {
                    var i
                    ;(i = t[vl]) === null || i === void 0 || i.unmount(),
                      delete t[vl]
                  })
                )
              case 1:
              case 'end':
                return r.stop()
            }
        }, e)
      })
    )),
    nf.apply(this, arguments)
  )
}
function Q8(e) {
  B8(e)
}
function K8(e) {
  return rf.apply(this, arguments)
}
function rf() {
  return (
    (rf = Fr(
      Ue().mark(function e(t) {
        return Ue().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                if (eu === void 0) {
                  r.next = 2
                  break
                }
                return r.abrupt('return', G8(t))
              case 2:
                Q8(t)
              case 3:
              case 'end':
                return r.stop()
            }
        }, e)
      })
    )),
    rf.apply(this, arguments)
  )
}
const X8 = (e, t) => (U8(e, t), () => K8(t))
let Y8 = X8
function Z8() {
  return Y8
}
const J8 = function (e) {
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
  ek = (e) => {
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
  tk = i8('Wave', (e) => [ek(e)]),
  $p = `${hl}-wave-target`
function cc(e) {
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
function nk(e) {
  const {
    borderTopColor: t,
    borderColor: n,
    backgroundColor: r
  } = getComputedStyle(e)
  return cc(t) ? t : cc(n) ? n : cc(r) ? r : null
}
function dc(e) {
  return Number.isNaN(e) ? 0 : e
}
const rk = (e) => {
    const { className: t, target: n, component: r, registerUnmount: i } = e,
      o = k.useRef(null),
      a = k.useRef(null)
    k.useEffect(() => {
      a.current = i()
    }, [])
    const [s, l] = k.useState(null),
      [u, c] = k.useState([]),
      [f, d] = k.useState(0),
      [g, y] = k.useState(0),
      [_, x] = k.useState(0),
      [m, p] = k.useState(0),
      [v, w] = k.useState(!1),
      b = {
        left: f,
        top: g,
        width: _,
        height: m,
        borderRadius: u.map((E) => `${E}px`).join(' ')
      }
    s && (b['--wave-color'] = s)
    function C() {
      const E = getComputedStyle(n)
      l(nk(n))
      const j = E.position === 'static',
        { borderLeftWidth: T, borderTopWidth: M } = E
      d(j ? n.offsetLeft : dc(-parseFloat(T))),
        y(j ? n.offsetTop : dc(-parseFloat(M))),
        x(n.offsetWidth),
        p(n.offsetHeight)
      const {
        borderTopLeftRadius: O,
        borderTopRightRadius: L,
        borderBottomLeftRadius: A,
        borderBottomRightRadius: D
      } = E
      c([O, L, D, A].map((R) => dc(parseFloat(R))))
    }
    if (
      (k.useEffect(() => {
        if (n) {
          const E = Tn(() => {
            C(), w(!0)
          })
          let j
          return (
            typeof ResizeObserver < 'u' &&
              ((j = new ResizeObserver(C)), j.observe(n)),
            () => {
              Tn.cancel(E), j == null || j.disconnect()
            }
          )
        }
      }, []),
      !v)
    )
      return null
    const S =
      (r === 'Checkbox' || r === 'Radio') &&
      (n == null ? void 0 : n.classList.contains($p))
    return k.createElement(
      r2,
      {
        visible: !0,
        motionAppear: !0,
        motionName: 'wave-motion',
        motionDeadline: 5e3,
        onAppearEnd: (E, j) => {
          var T, M
          if (j.deadline || j.propertyName === 'opacity') {
            const O =
              (T = o.current) === null || T === void 0
                ? void 0
                : T.parentElement
            ;(M = a.current) === null ||
              M === void 0 ||
              M.call(a).then(() => {
                O == null || O.remove()
              })
          }
          return !1
        }
      },
      (E, j) => {
        let { className: T } = E
        return k.createElement('div', {
          ref: Tp(o, j),
          className: Nr(t, T, { 'wave-quick': S }),
          style: b
        })
      }
    )
  },
  ik = (e, t) => {
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
    const o = Z8()
    let a = null
    function s() {
      return a
    }
    a = o(
      k.createElement(
        rk,
        Object.assign({}, t, { target: e, registerUnmount: s })
      ),
      i
    )
  },
  ok = (e, t, n) => {
    const { wave: r } = k.useContext(kn),
      [, i, o] = wa(),
      a = Ii((u) => {
        const c = e.current
        if ((r != null && r.disabled) || !c) return
        const f = c.querySelector(`.${$p}`) || c,
          { showEffect: d } = r || {}
        ;(d || ik)(f, {
          className: t,
          token: i,
          component: n,
          event: u,
          hashId: o
        })
      }),
      s = k.useRef(null)
    return (u) => {
      Tn.cancel(s.current),
        (s.current = Tn(() => {
          a(u)
        }))
    }
  },
  ak = (e) => {
    const { children: t, disabled: n, component: r } = e,
      { getPrefixCls: i } = k.useContext(kn),
      o = k.useRef(null),
      a = i('wave'),
      [, s] = tk(a),
      l = ok(o, Nr(a, s), r)
    if (
      (te.useEffect(() => {
        const c = o.current
        if (!c || c.nodeType !== 1 || n) return
        const f = (d) => {
          !J8(d.target) ||
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
    const u = ny(t) ? Tp(iy(t), o) : o
    return D8(t, { ref: u })
  }
var yr = 'RC_FORM_INTERNAL_HOOKS',
  ae = function () {
    Tt(
      !1,
      'Can not find FormContext. Please make sure you wrap Field under Form.'
    )
  },
  Fi = k.createContext({
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
  gl = k.createContext(null)
function of(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e]
}
function sk(e) {
  return e && !!e._init
}
function af() {
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
var sf = af()
function lk(e) {
  try {
    return Function.toString.call(e).indexOf('[native code]') !== -1
  } catch {
    return typeof e == 'function'
  }
}
function uk(e, t, n) {
  if (kp()) return Reflect.construct.apply(null, arguments)
  var r = [null]
  r.push.apply(r, t)
  var i = new (e.bind.apply(e, r))()
  return n && ta(i, n.prototype), i
}
function lf(e) {
  var t = typeof Map == 'function' ? new Map() : void 0
  return (
    (lf = function (r) {
      if (r === null || !lk(r)) return r
      if (typeof r != 'function')
        throw new TypeError(
          'Super expression must either be null or a function'
        )
      if (t !== void 0) {
        if (t.has(r)) return t.get(r)
        t.set(r, i)
      }
      function i() {
        return uk(r, arguments, na(this).constructor)
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
        ta(i, r)
      )
    }),
    lf(e)
  )
}
var ck = /%[sdj%]/g,
  dk = function () {}
function uf(e) {
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
    var a = e.replace(ck, function (s) {
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
function fk(e) {
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
    (fk(t) && typeof e == 'string' && !e)
  )
}
function pk(e, t, n) {
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
function Tv(e, t, n) {
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
function hk(e) {
  var t = []
  return (
    Object.keys(e).forEach(function (n) {
      t.push.apply(t, Q(e[n] || []))
    }),
    t
  )
}
var kv = (function (e) {
  Vi(n, e)
  var t = Bi(n)
  function n(r, i) {
    var o
    return (
      tt(this, n),
      (o = t.call(this, 'Async Validation Error')),
      $(Y(o), 'errors', void 0),
      $(Y(o), 'fields', void 0),
      (o.errors = r),
      (o.fields = i),
      o
    )
  }
  return nt(n)
})(lf(Error))
function mk(e, t, n, r, i) {
  if (t.first) {
    var o = new Promise(function (d, g) {
      var y = function (m) {
          return r(m), m.length ? g(new kv(m, uf(m))) : d(i)
        },
        _ = hk(e)
      Tv(_, n, y)
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
          return r(c), c.length ? g(new kv(c, uf(c))) : d(i)
      }
      s.length || (r(c), d(i)),
        s.forEach(function (_) {
          var x = e[_]
          a.indexOf(_) !== -1 ? Tv(x, n, y) : pk(x, n, y)
        })
    })
  return (
    f.catch(function (d) {
      return d
    }),
    f
  )
}
function vk(e) {
  return !!(e && e.message !== void 0)
}
function gk(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null) return n
    n = n[t[r]]
  }
  return n
}
function Pv(e, t) {
  return function (n) {
    var r
    return (
      e.fullFields
        ? (r = gk(t, e.fullFields))
        : (r = t[n.field || e.fullField]),
      vk(n)
        ? ((n.field = n.field || e.fullField), (n.fieldValue = r), n)
        : {
            message: typeof n == 'function' ? n() : n,
            fieldValue: r,
            field: n.field || e.fullField
          }
    )
  }
}
function Mv(e, t) {
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
var Yr = 'enum',
  yk = function (t, n, r, i, o) {
    ;(t[Yr] = Array.isArray(t[Yr]) ? t[Yr] : []),
      t[Yr].indexOf(n) === -1 &&
        i.push(ct(o.messages[Yr], t.fullField, t[Yr].join(', ')))
  },
  _k = function (t, n, r, i, o) {
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
  xk = function (t, n, r, i, o) {
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
  a2 = function (t, n, r, i, o, a) {
    t.required &&
      (!r.hasOwnProperty(t.field) || Ce(n, a || t.type)) &&
      i.push(ct(o.messages.required, t.fullField))
  },
  us
const wk = function () {
  if (us) return us
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
    m = '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))',
    p = '(?::\\d{2,5})?',
    v = '(?:[/?#][^\\s"]*)?',
    w = '(?:'
      .concat(f, '|www\\.)')
      .concat(d, '(?:localhost|')
      .concat(g, '|')
      .concat(y, '|')
      .concat(_)
      .concat(x)
      .concat(m, ')')
      .concat(p)
      .concat(v)
  return (us = new RegExp('(?:^'.concat(w, '$)'), 'i')), us
}
var Nv = {
    email:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
    hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
  },
  po = {
    integer: function (t) {
      return po.number(t) && parseInt(t, 10) === t
    },
    float: function (t) {
      return po.number(t) && !po.integer(t)
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
      return X(t) === 'object' && !po.array(t)
    },
    method: function (t) {
      return typeof t == 'function'
    },
    email: function (t) {
      return typeof t == 'string' && t.length <= 320 && !!t.match(Nv.email)
    },
    url: function (t) {
      return typeof t == 'string' && t.length <= 2048 && !!t.match(wk())
    },
    hex: function (t) {
      return typeof t == 'string' && !!t.match(Nv.hex)
    }
  },
  bk = function (t, n, r, i, o) {
    if (t.required && n === void 0) {
      a2(t, n, r, i, o)
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
      ? po[s](n) || i.push(ct(o.messages.types[s], t.fullField, t.type))
      : s &&
        X(n) !== t.type &&
        i.push(ct(o.messages.types[s], t.fullField, t.type))
  },
  Sk = function (t, n, r, i, o) {
    ;(/^\s+$/.test(n) || n === '') &&
      i.push(ct(o.messages.whitespace, t.fullField))
  }
const ee = {
  required: a2,
  whitespace: Sk,
  type: bk,
  range: xk,
  enum: yk,
  pattern: _k
}
var Ck = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (Ce(n) && !t.required) return r()
      ee.required(t, n, i, a, o)
    }
    r(a)
  },
  Ek = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (n == null && !t.required) return r()
      ee.required(t, n, i, a, o, 'array'),
        n != null && (ee.type(t, n, i, a, o), ee.range(t, n, i, a, o))
    }
    r(a)
  },
  jk = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (Ce(n) && !t.required) return r()
      ee.required(t, n, i, a, o), n !== void 0 && ee.type(t, n, i, a, o)
    }
    r(a)
  },
  Tk = function (t, n, r, i, o) {
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
  kk = 'enum',
  Pk = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (Ce(n) && !t.required) return r()
      ee.required(t, n, i, a, o), n !== void 0 && ee[kk](t, n, i, a, o)
    }
    r(a)
  },
  Mk = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (Ce(n) && !t.required) return r()
      ee.required(t, n, i, a, o),
        n !== void 0 && (ee.type(t, n, i, a, o), ee.range(t, n, i, a, o))
    }
    r(a)
  },
  Nk = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (Ce(n) && !t.required) return r()
      ee.required(t, n, i, a, o),
        n !== void 0 && (ee.type(t, n, i, a, o), ee.range(t, n, i, a, o))
    }
    r(a)
  },
  Lk = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (Ce(n) && !t.required) return r()
      ee.required(t, n, i, a, o), n !== void 0 && ee.type(t, n, i, a, o)
    }
    r(a)
  },
  Ok = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if ((n === '' && (n = void 0), Ce(n) && !t.required)) return r()
      ee.required(t, n, i, a, o),
        n !== void 0 && (ee.type(t, n, i, a, o), ee.range(t, n, i, a, o))
    }
    r(a)
  },
  Ak = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (Ce(n) && !t.required) return r()
      ee.required(t, n, i, a, o), n !== void 0 && ee.type(t, n, i, a, o)
    }
    r(a)
  },
  Rk = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (Ce(n, 'string') && !t.required) return r()
      ee.required(t, n, i, a, o), Ce(n, 'string') || ee.pattern(t, n, i, a, o)
    }
    r(a)
  },
  Ik = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (Ce(n) && !t.required) return r()
      ee.required(t, n, i, a, o), Ce(n) || ee.type(t, n, i, a, o)
    }
    r(a)
  },
  Fk = function (t, n, r, i, o) {
    var a = [],
      s = Array.isArray(n) ? 'array' : X(n)
    ee.required(t, n, i, a, o, s), r(a)
  },
  zk = function (t, n, r, i, o) {
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
  fc = function (t, n, r, i, o) {
    var a = t.type,
      s = [],
      l = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (l) {
      if (Ce(n, a) && !t.required) return r()
      ee.required(t, n, i, s, o, a), Ce(n, a) || ee.type(t, n, i, s, o)
    }
    r(s)
  }
const Po = {
  string: zk,
  method: Lk,
  number: Ok,
  boolean: jk,
  regexp: Ik,
  integer: Nk,
  float: Mk,
  array: Ek,
  object: Ak,
  enum: Pk,
  pattern: Rk,
  date: Tk,
  url: fc,
  hex: fc,
  email: fc,
  required: Fk,
  any: Ck
}
var Ca = (function () {
  function e(t) {
    tt(this, e),
      $(this, 'rules', null),
      $(this, '_messages', sf),
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
          return n && (this._messages = Mv(af(), n)), this._messages
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
            function m(v) {
              if (Array.isArray(v)) {
                var w
                _ = (w = _).concat.apply(w, Q(v))
              } else _.push(v)
            }
            for (var p = 0; p < y.length; p++) m(y[p])
            _.length ? ((x = uf(_)), l(_, x)) : l(null, a)
          }
          if (s.messages) {
            var c = this.messages()
            c === sf && (c = af()), Mv(c, s.messages), (s.messages = c)
          } else s.messages = this.messages()
          var f = {},
            d = s.keys || Object.keys(this.rules)
          d.forEach(function (y) {
            var _ = r.rules[y],
              x = a[y]
            _.forEach(function (m) {
              var p = m
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
          return mk(
            f,
            s,
            function (y, _) {
              var x = y.rule,
                m =
                  (x.type === 'object' || x.type === 'array') &&
                  (X(x.fields) === 'object' || X(x.defaultField) === 'object')
              ;(m = m && (x.required || (!x.required && y.value))),
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
              function v() {
                var S =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : [],
                  E = Array.isArray(S) ? S : [S]
                !s.suppressWarning &&
                  E.length &&
                  e.warning('async-validator:', E),
                  E.length && x.message !== void 0 && (E = [].concat(x.message))
                var j = E.map(Pv(x, a))
                if (s.first && j.length) return (g[x.field] = 1), _(j)
                if (!m) _(j)
                else {
                  if (x.required && !y.value)
                    return (
                      x.message !== void 0
                        ? (j = [].concat(x.message).map(Pv(x, a)))
                        : s.error &&
                          (j = [s.error(x, ct(s.messages.required, x.field))]),
                      _(j)
                    )
                  var T = {}
                  x.defaultField &&
                    Object.keys(y.value).map(function (L) {
                      T[L] = x.defaultField
                    }),
                    (T = B(B({}, T), y.rule.fields))
                  var M = {}
                  Object.keys(T).forEach(function (L) {
                    var A = T[L],
                      D = Array.isArray(A) ? A : [A]
                    M[L] = D.map(p.bind(null, L))
                  })
                  var O = new e(M)
                  O.messages(s.messages),
                    y.rule.options &&
                      ((y.rule.options.messages = s.messages),
                      (y.rule.options.error = s.error)),
                    O.validate(y.value, y.rule.options || s, function (L) {
                      var A = []
                      j && j.length && A.push.apply(A, Q(j)),
                        L && L.length && A.push.apply(A, Q(L)),
                        _(A.length ? A : null)
                    })
                }
              }
              var w
              if (x.asyncValidator)
                w = x.asyncValidator(x, y.value, v, y.source, s)
              else if (x.validator) {
                try {
                  w = x.validator(x, y.value, v, y.source, s)
                } catch (S) {
                  var b, C
                  ;(b = (C = console).error) === null ||
                    b === void 0 ||
                    b.call(C, S),
                    s.suppressValidatorError ||
                      setTimeout(function () {
                        throw S
                      }, 0),
                    v(S.message)
                }
                w === !0
                  ? v()
                  : w === !1
                  ? v(
                      typeof x.message == 'function'
                        ? x.message(x.fullField || x.field)
                        : x.message ||
                            ''.concat(x.fullField || x.field, ' fails')
                    )
                  : w instanceof Array
                  ? v(w)
                  : w instanceof Error && v(w.message)
              }
              w &&
                w.then &&
                w.then(
                  function () {
                    return v()
                  },
                  function (S) {
                    return v(S)
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
              !Po.hasOwnProperty(n.type))
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
              ? Po.required
              : Po[this.getType(n)] || void 0
          )
        }
      }
    ]),
    e
  )
})()
$(Ca, 'register', function (t, n) {
  if (typeof n != 'function')
    throw new Error(
      'Cannot register a validator by type, validator is not a function'
    )
  Po[t] = n
})
$(Ca, 'warning', dk)
$(Ca, 'messages', sf)
$(Ca, 'validators', Po)
var it = "'${name}' is not a valid ${type}",
  s2 = {
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
  Lv = Ca
function $k(e, t) {
  return e.replace(/\\?\$\{\w+\}/g, function (n) {
    if (n.startsWith('\\')) return n.slice(1)
    var r = n.slice(2, -1)
    return t[r]
  })
}
var Ov = 'CODE_LOGIC_ERROR'
function cf(e, t, n, r, i) {
  return df.apply(this, arguments)
}
function df() {
  return (
    (df = Fr(
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
                    (Lv.warning = function () {}),
                    a.validator &&
                      ((s = a.validator),
                      (a.validator = function () {
                        try {
                          return s.apply(void 0, arguments)
                        } catch (m) {
                          return console.error(m), Promise.reject(Ov)
                        }
                      })),
                    (l = null),
                    a &&
                      a.type === 'array' &&
                      a.defaultField &&
                      ((l = a.defaultField), delete a.defaultField),
                    (u = new Lv($({}, t, [a]))),
                    (c = fi(s2, i.validateMessages)),
                    u.messages(c),
                    (f = []),
                    (x.prev = 10),
                    (x.next = 13),
                    Promise.resolve(u.validate($({}, t, n), B({}, i)))
                  )
                case 13:
                  x.next = 18
                  break
                case 15:
                  ;(x.prev = 15),
                    (x.t0 = x.catch(10)),
                    x.t0.errors &&
                      (f = x.t0.errors.map(function (m, p) {
                        var v = m.message,
                          w = v === Ov ? c.default : v
                        return k.isValidElement(w)
                          ? k.cloneElement(w, { key: 'error_'.concat(p) })
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
                      n.map(function (m, p) {
                        return cf(''.concat(t, '.').concat(p), m, l, i, o)
                      })
                    )
                  )
                case 21:
                  return (
                    (d = x.sent),
                    x.abrupt(
                      'return',
                      d.reduce(function (m, p) {
                        return [].concat(Q(m), Q(p))
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
                    (y = f.map(function (m) {
                      return typeof m == 'string' ? $k(m, g) : m
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
    df.apply(this, arguments)
  )
}
function Dk(e, t, n, r, i, o) {
  var a = e.join('.'),
    s = n
      .map(function (c, f) {
        var d = c.validator,
          g = B(B({}, c), {}, { ruleIndex: f })
        return (
          d &&
            (g.validator = function (y, _, x) {
              var m = !1,
                p = function () {
                  for (
                    var b = arguments.length, C = new Array(b), S = 0;
                    S < b;
                    S++
                  )
                    C[S] = arguments[S]
                  Promise.resolve().then(function () {
                    Tt(
                      !m,
                      'Your validator function has already return a promise. `callback` will be ignored.'
                    ),
                      m || x.apply(void 0, C)
                  })
                },
                v = d(y, _, p)
              ;(m =
                v &&
                typeof v.then == 'function' &&
                typeof v.catch == 'function'),
                Tt(
                  m,
                  '`callback` is deprecated. Please return a promise instead.'
                ),
                m &&
                  v
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
        var c = Fr(
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
                    return (_ = s[y]), (p.next = 5), cf(a, t, _, r, o)
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
      return cf(a, t, c, r, o).then(function (f) {
        return { errors: f, rule: c }
      })
    })
    l = (i ? Bk(u) : Vk(u)).then(function (c) {
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
function Vk(e) {
  return ff.apply(this, arguments)
}
function ff() {
  return (
    (ff = Fr(
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
    ff.apply(this, arguments)
  )
}
function Bk(e) {
  return pf.apply(this, arguments)
}
function pf() {
  return (
    (pf = Fr(
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
    pf.apply(this, arguments)
  )
}
function ge(e) {
  return of(e)
}
function Av(e, t) {
  var n = {}
  return (
    t.forEach(function (r) {
      var i = tn(e, r)
      n = It(n, r, i)
    }),
    n
  )
}
function Ci(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1
  return (
    e &&
    e.some(function (r) {
      return l2(t, r, n)
    })
  )
}
function l2(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1
  return !e || !t || (!n && e.length !== t.length)
    ? !1
    : t.every(function (r, i) {
        return e[i] === r
      })
}
function Hk(e, t) {
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
function qk(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1]
  return t && t.target && X(t.target) === 'object' && e in t.target
    ? t.target[e]
    : t
}
function Rv(e, t, n) {
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
var Wk = ['name'],
  _t = []
function pc(e, t, n, r, i, o) {
  return typeof e == 'function'
    ? e(t, n, 'source' in o ? { source: o.source } : {})
    : r !== i
}
var Dp = (function (e) {
  Vi(n, e)
  var t = Bi(n)
  function n(r) {
    var i
    if (
      (tt(this, n),
      (i = t.call(this, r)),
      $(Y(i), 'state', { resetCount: 0 }),
      $(Y(i), 'cancelRegisterFunc', null),
      $(Y(i), 'mounted', !1),
      $(Y(i), 'touched', !1),
      $(Y(i), 'dirty', !1),
      $(Y(i), 'validatePromise', void 0),
      $(Y(i), 'prevValidating', void 0),
      $(Y(i), 'errors', _t),
      $(Y(i), 'warnings', _t),
      $(Y(i), 'cancelRegister', function () {
        var l = i.props,
          u = l.preserve,
          c = l.isListField,
          f = l.name
        i.cancelRegisterFunc && i.cancelRegisterFunc(c, u, ge(f)),
          (i.cancelRegisterFunc = null)
      }),
      $(Y(i), 'getNamePath', function () {
        var l = i.props,
          u = l.name,
          c = l.fieldContext,
          f = c.prefixName,
          d = f === void 0 ? [] : f
        return u !== void 0 ? [].concat(Q(d), Q(u)) : []
      }),
      $(Y(i), 'getRules', function () {
        var l = i.props,
          u = l.rules,
          c = u === void 0 ? [] : u,
          f = l.fieldContext
        return c.map(function (d) {
          return typeof d == 'function' ? d(f) : d
        })
      }),
      $(Y(i), 'refresh', function () {
        i.mounted &&
          i.setState(function (l) {
            var u = l.resetCount
            return { resetCount: u + 1 }
          })
      }),
      $(Y(i), 'metaCache', null),
      $(Y(i), 'triggerMetaEvent', function (l) {
        var u = i.props.onMetaChange
        if (u) {
          var c = B(B({}, i.getMeta()), {}, { destroy: l })
          Td(i.metaCache, c) || u(c), (i.metaCache = c)
        } else i.metaCache = null
      }),
      $(Y(i), 'onStoreChange', function (l, u, c) {
        var f = i.props,
          d = f.shouldUpdate,
          g = f.dependencies,
          y = g === void 0 ? [] : g,
          _ = f.onReset,
          x = c.store,
          m = i.getNamePath(),
          p = i.getValue(l),
          v = i.getValue(x),
          w = u && Ci(u, m)
        switch (
          (c.type === 'valueUpdate' &&
            c.source === 'external' &&
            !Td(p, v) &&
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
            if (d && pc(d, l, x, p, v, c)) {
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
            } else if ('value' in b && Ci(u, m, !0)) {
              i.reRender()
              return
            }
            if (d && !m.length && pc(d, l, x, p, v, c)) {
              i.reRender()
              return
            }
            break
          }
          case 'dependenciesUpdate': {
            var C = y.map(ge)
            if (
              C.some(function (S) {
                return Ci(c.relatedFields, S)
              })
            ) {
              i.reRender()
              return
            }
            break
          }
          default:
            if (w || ((!y.length || m.length || d) && pc(d, l, x, p, v, c))) {
              i.reRender()
              return
            }
            break
        }
        d === !0 && i.reRender()
      }),
      $(Y(i), 'validateRules', function (l) {
        var u = i.getNamePath(),
          c = i.getValue(),
          f = l || {},
          d = f.triggerName,
          g = f.validateOnly,
          y = g === void 0 ? !1 : g,
          _ = Promise.resolve().then(
            Fr(
              Ue().mark(function x() {
                var m, p, v, w, b, C, S
                return Ue().wrap(function (j) {
                  for (;;)
                    switch ((j.prev = j.next)) {
                      case 0:
                        if (i.mounted) {
                          j.next = 2
                          break
                        }
                        return j.abrupt('return', [])
                      case 2:
                        if (
                          ((m = i.props),
                          (p = m.validateFirst),
                          (v = p === void 0 ? !1 : p),
                          (w = m.messageVariables),
                          (b = m.validateDebounce),
                          (C = i.getRules()),
                          d &&
                            (C = C.filter(function (T) {
                              return T
                            }).filter(function (T) {
                              var M = T.validateTrigger
                              if (!M) return !0
                              var O = of(M)
                              return O.includes(d)
                            })),
                          !(b && d))
                        ) {
                          j.next = 10
                          break
                        }
                        return (
                          (j.next = 8),
                          new Promise(function (T) {
                            setTimeout(T, b)
                          })
                        )
                      case 8:
                        if (i.validatePromise === _) {
                          j.next = 10
                          break
                        }
                        return j.abrupt('return', [])
                      case 10:
                        return (
                          (S = Dk(u, c, C, l, v, w)),
                          S.catch(function (T) {
                            return T
                          }).then(function () {
                            var T =
                              arguments.length > 0 && arguments[0] !== void 0
                                ? arguments[0]
                                : _t
                            if (i.validatePromise === _) {
                              var M
                              i.validatePromise = null
                              var O = [],
                                L = []
                              ;(M = T.forEach) === null ||
                                M === void 0 ||
                                M.call(T, function (A) {
                                  var D = A.rule.warningOnly,
                                    R = A.errors,
                                    I = R === void 0 ? _t : R
                                  D
                                    ? L.push.apply(L, Q(I))
                                    : O.push.apply(O, Q(I))
                                }),
                                (i.errors = O),
                                (i.warnings = L),
                                i.triggerMetaEvent(),
                                i.reRender()
                            }
                          }),
                          j.abrupt('return', S)
                        )
                      case 13:
                      case 'end':
                        return j.stop()
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
      $(Y(i), 'isFieldValidating', function () {
        return !!i.validatePromise
      }),
      $(Y(i), 'isFieldTouched', function () {
        return i.touched
      }),
      $(Y(i), 'isFieldDirty', function () {
        if (i.dirty || i.props.initialValue !== void 0) return !0
        var l = i.props.fieldContext,
          u = l.getInternalHooks(yr),
          c = u.getInitialValue
        return c(i.getNamePath()) !== void 0
      }),
      $(Y(i), 'getErrors', function () {
        return i.errors
      }),
      $(Y(i), 'getWarnings', function () {
        return i.warnings
      }),
      $(Y(i), 'isListField', function () {
        return i.props.isListField
      }),
      $(Y(i), 'isList', function () {
        return i.props.isList
      }),
      $(Y(i), 'isPreserve', function () {
        return i.props.preserve
      }),
      $(Y(i), 'getMeta', function () {
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
      $(Y(i), 'getOnlyChild', function (l) {
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
        var c = Sd(l)
        return c.length !== 1 || !k.isValidElement(c[0])
          ? { child: c, isFunction: !1 }
          : { child: c[0], isFunction: !1 }
      }),
      $(Y(i), 'getValue', function (l) {
        var u = i.props.fieldContext.getFieldsValue,
          c = i.getNamePath()
        return tn(l || u(!0), c)
      }),
      $(Y(i), 'getControlled', function () {
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
          m = u.fieldContext,
          p = d !== void 0 ? d : m.validateTrigger,
          v = i.getNamePath(),
          w = m.getInternalHooks,
          b = m.getFieldsValue,
          C = w(yr),
          S = C.dispatch,
          E = i.getValue(),
          j =
            x ||
            function (A) {
              return $({}, _, A)
            },
          T = l[f],
          M = c !== void 0 ? j(E) : {},
          O = B(B({}, l), M)
        O[f] = function () {
          ;(i.touched = !0), (i.dirty = !0), i.triggerMetaEvent()
          for (var A, D = arguments.length, R = new Array(D), I = 0; I < D; I++)
            R[I] = arguments[I]
          g ? (A = g.apply(void 0, R)) : (A = qk.apply(void 0, [_].concat(R))),
            y && (A = y(A, E, b(!0))),
            A !== E && S({ type: 'updateValue', namePath: v, value: A }),
            T && T.apply(void 0, R)
        }
        var L = of(p || [])
        return (
          L.forEach(function (A) {
            var D = O[A]
            O[A] = function () {
              D && D.apply(void 0, arguments)
              var R = i.props.rules
              R &&
                R.length &&
                S({ type: 'validateField', namePath: v, triggerName: A })
            }
          }),
          O
        )
      }),
      r.fieldContext)
    ) {
      var o = r.fieldContext.getInternalHooks,
        a = o(yr),
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
              l = s(yr),
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
              : k.isValidElement(s)
              ? (u = k.cloneElement(s, this.getControlled(s.props)))
              : (Tt(!s, '`children` of Field is not validate ReactElement.'),
                (u = s)),
            k.createElement(k.Fragment, { key: i }, u)
          )
        }
      }
    ]),
    n
  )
})(k.Component)
$(Dp, 'contextType', Fi)
$(Dp, 'defaultProps', { trigger: 'onChange', valuePropName: 'value' })
function u2(e) {
  var t,
    n = e.name,
    r = Or(e, Wk),
    i = k.useContext(Fi),
    o = k.useContext(gl),
    a = n !== void 0 ? ge(n) : void 0,
    s = (t = r.isListField) !== null && t !== void 0 ? t : !!o,
    l = 'keep'
  return (
    s || (l = '_'.concat((a || []).join('_'))),
    k.createElement(
      Dp,
      Lr({ key: l, name: a, isListField: s }, r, { fieldContext: i })
    )
  )
}
function Uk(e) {
  var t = e.name,
    n = e.initialValue,
    r = e.children,
    i = e.rules,
    o = e.validateTrigger,
    a = e.isListField,
    s = k.useContext(Fi),
    l = k.useContext(gl),
    u = k.useRef({ keys: [], id: 0 }),
    c = u.current,
    f = k.useMemo(
      function () {
        var _ = ge(s.prefixName) || []
        return [].concat(Q(_), Q(ge(t)))
      },
      [s.prefixName, t]
    ),
    d = k.useMemo(
      function () {
        return B(B({}, s), {}, { prefixName: f })
      },
      [s, f]
    ),
    g = k.useMemo(
      function () {
        return {
          getKey: function (x) {
            var m = f.length,
              p = x[m]
            return [c.keys[p], x.slice(m + 1)]
          }
        }
      },
      [f]
    )
  if (typeof r != 'function')
    return Tt(!1, 'Form.List only accepts function as children.'), null
  var y = function (x, m, p) {
    var v = p.source
    return v === 'internal' ? !1 : x !== m
  }
  return k.createElement(
    gl.Provider,
    { value: g },
    k.createElement(
      Fi.Provider,
      { value: d },
      k.createElement(
        u2,
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
          var m = _.value,
            p = m === void 0 ? [] : m,
            v = _.onChange,
            w = s.getFieldValue,
            b = function () {
              var j = w(f || [])
              return j || []
            },
            C = {
              add: function (j, T) {
                var M = b()
                T >= 0 && T <= M.length
                  ? ((c.keys = [].concat(
                      Q(c.keys.slice(0, T)),
                      [c.id],
                      Q(c.keys.slice(T))
                    )),
                    v([].concat(Q(M.slice(0, T)), [j], Q(M.slice(T)))))
                  : ((c.keys = [].concat(Q(c.keys), [c.id])),
                    v([].concat(Q(M), [j]))),
                  (c.id += 1)
              },
              remove: function (j) {
                var T = b(),
                  M = new Set(Array.isArray(j) ? j : [j])
                M.size <= 0 ||
                  ((c.keys = c.keys.filter(function (O, L) {
                    return !M.has(L)
                  })),
                  v(
                    T.filter(function (O, L) {
                      return !M.has(L)
                    })
                  ))
              },
              move: function (j, T) {
                if (j !== T) {
                  var M = b()
                  j < 0 ||
                    j >= M.length ||
                    T < 0 ||
                    T >= M.length ||
                    ((c.keys = Rv(c.keys, j, T)), v(Rv(M, j, T)))
                }
              }
            },
            S = p || []
          return (
            Array.isArray(S) || (S = []),
            r(
              S.map(function (E, j) {
                var T = c.keys[j]
                return (
                  T === void 0 &&
                    ((c.keys[j] = c.id), (T = c.keys[j]), (c.id += 1)),
                  { name: j, key: T, isListField: !0 }
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
function Gk(e) {
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
var c2 = '__@field_split__'
function hc(e) {
  return e
    .map(function (t) {
      return ''.concat(X(t), ':').concat(t)
    })
    .join(c2)
}
var Zr = (function () {
    function e() {
      tt(this, e), $(this, 'kvs', new Map())
    }
    return (
      nt(e, [
        {
          key: 'set',
          value: function (n, r) {
            this.kvs.set(hc(n), r)
          }
        },
        {
          key: 'get',
          value: function (n) {
            return this.kvs.get(hc(n))
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
            this.kvs.delete(hc(n))
          }
        },
        {
          key: 'map',
          value: function (n) {
            return Q(this.kvs.entries()).map(function (r) {
              var i = K(r, 2),
                o = i[0],
                a = i[1],
                s = o.split(c2)
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
  Qk = ['name'],
  Kk = nt(function e(t) {
    var n = this
    tt(this, e),
      $(this, 'formHooked', !1),
      $(this, 'forceRootUpdate', void 0),
      $(this, 'subscribable', !0),
      $(this, 'store', {}),
      $(this, 'fieldEntities', []),
      $(this, 'initialValues', {}),
      $(this, 'callbacks', {}),
      $(this, 'validateMessages', null),
      $(this, 'preserve', null),
      $(this, 'lastValidatePromise', null),
      $(this, 'getForm', function () {
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
      $(this, 'getInternalHooks', function (r) {
        return r === yr
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
          : (Tt(
              !1,
              '`getInternalHooks` is internal usage. Should not call directly.'
            ),
            null)
      }),
      $(this, 'useSubscribe', function (r) {
        n.subscribable = r
      }),
      $(this, 'prevWithoutPreserves', null),
      $(this, 'setInitialValues', function (r, i) {
        if (((n.initialValues = r || {}), i)) {
          var o,
            a = fi(r, n.store)
          ;(o = n.prevWithoutPreserves) === null ||
            o === void 0 ||
            o.map(function (s) {
              var l = s.key
              a = It(a, l, tn(r, l))
            }),
            (n.prevWithoutPreserves = null),
            n.updateStore(a)
        }
      }),
      $(this, 'destroyForm', function (r) {
        if (r) n.updateStore({})
        else {
          var i = new Zr()
          n.getFieldEntities(!0).forEach(function (o) {
            n.isMergedPreserve(o.isPreserve()) || i.set(o.getNamePath(), !0)
          }),
            (n.prevWithoutPreserves = i)
        }
      }),
      $(this, 'getInitialValue', function (r) {
        var i = tn(n.initialValues, r)
        return r.length ? fi(i) : i
      }),
      $(this, 'setCallbacks', function (r) {
        n.callbacks = r
      }),
      $(this, 'setValidateMessages', function (r) {
        n.validateMessages = r
      }),
      $(this, 'setPreserve', function (r) {
        n.preserve = r
      }),
      $(this, 'watchList', []),
      $(this, 'registerWatch', function (r) {
        return (
          n.watchList.push(r),
          function () {
            n.watchList = n.watchList.filter(function (i) {
              return i !== r
            })
          }
        )
      }),
      $(this, 'notifyWatch', function () {
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
      $(this, 'timeoutId', null),
      $(this, 'warningUnhooked', function () {}),
      $(this, 'updateStore', function (r) {
        n.store = r
      }),
      $(this, 'getFieldEntities', function () {
        var r =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1
        return r
          ? n.fieldEntities.filter(function (i) {
              return i.getNamePath().length
            })
          : n.fieldEntities
      }),
      $(this, 'getFieldsMap', function () {
        var r =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
          i = new Zr()
        return (
          n.getFieldEntities(r).forEach(function (o) {
            var a = o.getNamePath()
            i.set(a, o)
          }),
          i
        )
      }),
      $(this, 'getFieldEntitiesForNamePathList', function (r) {
        if (!r) return n.getFieldEntities(!0)
        var i = n.getFieldsMap(!0)
        return r.map(function (o) {
          var a = ge(o)
          return i.get(a) || { INVALIDATE_NAME_PATH: ge(o) }
        })
      }),
      $(this, 'getFieldsValue', function (r, i) {
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
          Av(n.store, u.map(ge))
        )
      }),
      $(this, 'getFieldValue', function (r) {
        n.warningUnhooked()
        var i = ge(r)
        return tn(n.store, i)
      }),
      $(this, 'getFieldsError', function (r) {
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
      $(this, 'getFieldError', function (r) {
        n.warningUnhooked()
        var i = ge(r),
          o = n.getFieldsError([i])[0]
        return o.errors
      }),
      $(this, 'getFieldWarning', function (r) {
        n.warningUnhooked()
        var i = ge(r),
          o = n.getFieldsError([i])[0]
        return o.warnings
      }),
      $(this, 'isFieldsTouched', function () {
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
        var d = new Zr()
        l.forEach(function (_) {
          d.set(_, [])
        }),
          c.forEach(function (_) {
            var x = _.getNamePath()
            l.forEach(function (m) {
              m.every(function (p, v) {
                return x[v] === p
              }) &&
                d.update(m, function (p) {
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
      $(this, 'isFieldTouched', function (r) {
        return n.warningUnhooked(), n.isFieldsTouched([r])
      }),
      $(this, 'isFieldsValidating', function (r) {
        n.warningUnhooked()
        var i = n.getFieldEntities()
        if (!r)
          return i.some(function (a) {
            return a.isFieldValidating()
          })
        var o = r.map(ge)
        return i.some(function (a) {
          var s = a.getNamePath()
          return Ci(o, s) && a.isFieldValidating()
        })
      }),
      $(this, 'isFieldValidating', function (r) {
        return n.warningUnhooked(), n.isFieldsValidating([r])
      }),
      $(this, 'resetWithFieldInitialValue', function () {
        var r =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          i = new Zr(),
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
                  Tt(
                    !1,
                    "Form already set 'initialValues' with path '".concat(
                      d.join('.'),
                      "'. Field can not overwrite it."
                    )
                  )
                else {
                  var y = i.get(d)
                  if (y && y.size > 1)
                    Tt(
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
      $(this, 'resetFields', function (r) {
        n.warningUnhooked()
        var i = n.store
        if (!r) {
          n.updateStore(fi(n.initialValues)),
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
      $(this, 'setFields', function (r) {
        n.warningUnhooked()
        var i = n.store,
          o = []
        r.forEach(function (a) {
          var s = a.name,
            l = Or(a, Qk),
            u = ge(s)
          o.push(u),
            'value' in l && n.updateStore(It(n.store, u, l.value)),
            n.notifyObservers(i, [u], { type: 'setField', data: a })
        }),
          n.notifyWatch(o)
      }),
      $(this, 'getFields', function () {
        var r = n.getFieldEntities(!0),
          i = r.map(function (o) {
            var a = o.getNamePath(),
              s = o.getMeta(),
              l = B(B({}, s), {}, { name: a, value: n.getFieldValue(a) })
            return Object.defineProperty(l, 'originRCField', { value: !0 }), l
          })
        return i
      }),
      $(this, 'initEntityValue', function (r) {
        var i = r.props.initialValue
        if (i !== void 0) {
          var o = r.getNamePath(),
            a = tn(n.store, o)
          a === void 0 && n.updateStore(It(n.store, o, i))
        }
      }),
      $(this, 'isMergedPreserve', function (r) {
        var i = r !== void 0 ? r : n.preserve
        return i ?? !0
      }),
      $(this, 'registerField', function (r) {
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
                return !l2(f.getNamePath(), i)
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
      $(this, 'dispatch', function (r) {
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
      $(this, 'notifyObservers', function (r, i, o) {
        if (n.subscribable) {
          var a = B(B({}, o), {}, { store: n.getFieldsValue(!0) })
          n.getFieldEntities().forEach(function (s) {
            var l = s.onStoreChange
            l(r, i, a)
          })
        } else n.forceRootUpdate()
      }),
      $(this, 'triggerDependenciesUpdate', function (r, i) {
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
      $(this, 'updateValue', function (r, i) {
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
          var u = Av(n.store, [o])
          l(u, n.getFieldsValue())
        }
        n.triggerOnFieldsChange([o].concat(Q(s)))
      }),
      $(this, 'setFieldsValue', function (r) {
        n.warningUnhooked()
        var i = n.store
        if (r) {
          var o = fi(n.store, r)
          n.updateStore(o)
        }
        n.notifyObservers(i, null, { type: 'valueUpdate', source: 'external' }),
          n.notifyWatch()
      }),
      $(this, 'setFieldValue', function (r, i) {
        n.setFields([{ name: r, value: i, errors: [], warnings: [] }])
      }),
      $(this, 'getDependencyChildrenFields', function (r) {
        var i = new Set(),
          o = [],
          a = new Zr()
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
      $(this, 'triggerOnFieldsChange', function (r, i) {
        var o = n.callbacks.onFieldsChange
        if (o) {
          var a = n.getFields()
          if (i) {
            var s = new Zr()
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
            return Ci(r, c)
          })
          l.length && o(l, a)
        }
      }),
      $(this, 'validateFields', function (r, i) {
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
            var v = p.getNamePath()
            if ((f.add(v.join(c)), !s || Ci(l, v, g))) {
              var w = p.validateRules(
                B({ validateMessages: B(B({}, s2), n.validateMessages) }, a)
              )
              u.push(
                w
                  .then(function () {
                    return { name: v, errors: [], warnings: [] }
                  })
                  .catch(function (b) {
                    var C,
                      S = [],
                      E = []
                    return (
                      (C = b.forEach) === null ||
                        C === void 0 ||
                        C.call(b, function (j) {
                          var T = j.rule.warningOnly,
                            M = j.errors
                          T ? E.push.apply(E, Q(M)) : S.push.apply(S, Q(M))
                        }),
                      S.length
                        ? Promise.reject({ name: v, errors: S, warnings: E })
                        : { name: v, errors: S, warnings: E }
                    )
                  })
              )
            }
          }
        })
        var _ = Gk(u)
        ;(n.lastValidatePromise = _),
          _.catch(function (p) {
            return p
          }).then(function (p) {
            var v = p.map(function (w) {
              var b = w.name
              return b
            })
            n.notifyObservers(n.store, v, { type: 'validateFinish' }),
              n.triggerOnFieldsChange(v, p)
          })
        var x = _.then(function () {
          return n.lastValidatePromise === _
            ? Promise.resolve(n.getFieldsValue(l))
            : Promise.reject([])
        }).catch(function (p) {
          var v = p.filter(function (w) {
            return w && w.errors.length
          })
          return Promise.reject({
            values: n.getFieldsValue(l),
            errorFields: v,
            outOfDate: n.lastValidatePromise !== _
          })
        })
        x.catch(function (p) {
          return p
        })
        var m = l.filter(function (p) {
          return f.has(p.join(c))
        })
        return n.triggerOnFieldsChange(m), x
      }),
      $(this, 'submit', function () {
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
function d2(e) {
  var t = k.useRef(),
    n = k.useState({}),
    r = K(n, 2),
    i = r[1]
  if (!t.current)
    if (e) t.current = e
    else {
      var o = function () {
          i({})
        },
        a = new Kk(o)
      t.current = a.getForm()
    }
  return [t.current]
}
var hf = k.createContext({
    triggerFormChange: function () {},
    triggerFormFinish: function () {},
    registerForm: function () {},
    unregisterForm: function () {}
  }),
  Xk = function (t) {
    var n = t.validateMessages,
      r = t.onFormChange,
      i = t.onFormFinish,
      o = t.children,
      a = k.useContext(hf),
      s = k.useRef({})
    return k.createElement(
      hf.Provider,
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
              u && (s.current = B(B({}, s.current), {}, $({}, u, c))),
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
  Yk = [
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
  Zk = function (t, n) {
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
      m = t.onFinishFailed,
      p = t.clearOnDestroy,
      v = Or(t, Yk),
      w = k.useRef(null),
      b = k.useContext(hf),
      C = d2(a),
      S = K(C, 1),
      E = S[0],
      j = E.getInternalHooks(yr),
      T = j.useSubscribe,
      M = j.setInitialValues,
      O = j.setCallbacks,
      L = j.setValidateMessages,
      A = j.setPreserve,
      D = j.destroyForm
    k.useImperativeHandle(n, function () {
      return B(B({}, E), {}, { nativeElement: w.current })
    }),
      k.useEffect(
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
      L(B(B({}, b.validateMessages), f)),
      O({
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
        onFinishFailed: m
      }),
      A(s)
    var R = k.useRef(null)
    M(i, !R.current),
      R.current || (R.current = !0),
      k.useEffect(function () {
        return function () {
          return D(p)
        }
      }, [])
    var I,
      N = typeof l == 'function'
    if (N) {
      var F = E.getFieldsValue(!0)
      I = l(F, E)
    } else I = l
    T(!N)
    var z = k.useRef()
    k.useEffect(
      function () {
        Hk(z.current || [], o || []) || E.setFields(o || []), (z.current = o)
      },
      [o, E]
    )
    var V = k.useMemo(
        function () {
          return B(B({}, E), {}, { validateTrigger: g })
        },
        [E, g]
      ),
      q = k.createElement(
        gl.Provider,
        { value: null },
        k.createElement(Fi.Provider, { value: V }, I)
      )
    return c === !1
      ? q
      : k.createElement(
          c,
          Lr({}, v, {
            ref: w,
            onSubmit: function (U) {
              U.preventDefault(), U.stopPropagation(), E.submit()
            },
            onReset: function (U) {
              var Z
              U.preventDefault(),
                E.resetFields(),
                (Z = v.onReset) === null || Z === void 0 || Z.call(v, U)
            }
          }),
          q
        )
  }
function Iv(e) {
  try {
    return JSON.stringify(e)
  } catch {
    return Math.random()
  }
}
function Jk() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n]
  var r = t[0],
    i = t[1],
    o = i === void 0 ? {} : i,
    a = sk(o) ? { form: o } : o,
    s = a.form,
    l = k.useState(),
    u = K(l, 2),
    c = u[0],
    f = u[1],
    d = k.useMemo(
      function () {
        return Iv(c)
      },
      [c]
    ),
    g = k.useRef(d)
  g.current = d
  var y = k.useContext(Fi),
    _ = s || y,
    x = _ && _._init,
    m = ge(r),
    p = k.useRef(m)
  return (
    (p.current = m),
    k.useEffect(
      function () {
        if (x) {
          var v = _.getFieldsValue,
            w = _.getInternalHooks,
            b = w(yr),
            C = b.registerWatch,
            S = function (M, O) {
              var L = a.preserve ? O : M
              return typeof r == 'function' ? r(L) : tn(L, p.current)
            },
            E = C(function (T, M) {
              var O = S(T, M),
                L = Iv(O)
              g.current !== L && ((g.current = L), f(O))
            }),
            j = S(v(), v(!0))
          return c !== j && f(j), E
        }
      },
      [x]
    ),
    c
  )
}
var e7 = k.forwardRef(Zk),
  Ea = e7
Ea.FormProvider = Xk
Ea.Field = u2
Ea.List = Uk
Ea.useForm = d2
Ea.useWatch = Jk
const t7 = k.createContext({})
var n7 = [
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
  r7 = k.forwardRef(function (e, t) {
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
      y = Or(e, n7),
      _ = k.useRef(null),
      x = k.useRef(null),
      m = DT(u, { value: a }),
      p = K(m, 2),
      v = p[0],
      w = p[1]
    k.useImperativeHandle(t, function () {
      return {
        focus: function (E) {
          var j
          ;(j = _.current) === null || j === void 0 || j.focus(E)
        },
        blur: function () {
          var E
          ;(E = _.current) === null || E === void 0 || E.blur()
        },
        input: _.current,
        nativeElement: x.current
      }
    })
    var b = Nr(
        r,
        i,
        $($({}, ''.concat(r, '-checked'), v), ''.concat(r, '-disabled'), s)
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
    return k.createElement(
      'span',
      { className: b, title: d, style: o, ref: x },
      k.createElement(
        'input',
        Lr({}, y, {
          className: ''.concat(r, '-input'),
          ref: _,
          onChange: C,
          disabled: s,
          checked: !!v,
          type: f
        })
      ),
      k.createElement('span', { className: ''.concat(r, '-inner') })
    )
  })
function i7(e) {
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
const o7 = (e) => {
  const { checkboxCls: t } = e,
    n = `${t}-wrapper`
  return [
    {
      [`${t}-group`]: Object.assign(Object.assign({}, sc(e)), {
        display: 'inline-flex',
        flexWrap: 'wrap',
        columnGap: e.marginXS,
        [`> ${e.antCls}-row`]: { flex: 1 }
      }),
      [n]: Object.assign(Object.assign({}, sc(e)), {
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
      [t]: Object.assign(Object.assign({}, sc(e)), {
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
          [`&:focus-visible + ${t}-inner`]: Object.assign({}, n8(e))
        },
        [`${t}-inner`]: {
          boxSizing: 'border-box',
          display: 'block',
          width: e.checkboxSize,
          height: e.checkboxSize,
          direction: 'ltr',
          backgroundColor: e.colorBgContainer,
          border: `${ia(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
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
            border: `${ia(e.lineWidthBold)} solid ${e.colorWhite}`,
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
function a7(e, t) {
  const n = Fp(t, {
    checkboxCls: `.${e}`,
    checkboxSize: t.controlInteractiveSize
  })
  return [o7(n)]
}
const f2 = r8('Checkbox', (e, t) => {
    let { prefixCls: n } = t
    return [a7(n, e)]
  }),
  p2 = te.createContext(null)
var s7 = function (e, t) {
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
const l7 = (e, t) => {
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
      g = s7(e, [
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
      { getPrefixCls: y, direction: _, checkbox: x } = k.useContext(kn),
      m = k.useContext(p2),
      { isFormItemInput: p } = k.useContext(t7),
      v = k.useContext(ml),
      w =
        (n = (m == null ? void 0 : m.disabled) || d) !== null && n !== void 0
          ? n
          : v,
      b = k.useRef(g.value),
      C = k.useRef(null),
      S = Tp(t, C)
    k.useEffect(() => {
      m == null || m.registerValue(g.value)
    }, []),
      k.useEffect(() => {
        if (!f)
          return (
            g.value !== b.current &&
              (m == null || m.cancelValue(b.current),
              m == null || m.registerValue(g.value),
              (b.current = g.value)),
            () => (m == null ? void 0 : m.cancelValue(g.value))
          )
      }, [g.value]),
      k.useEffect(() => {
        var N
        !((N = C.current) === null || N === void 0) &&
          N.input &&
          (C.current.input.indeterminate = s)
      }, [s])
    const E = y('checkbox', r),
      j = o2(E),
      [T, M, O] = f2(E, j),
      L = Object.assign({}, g)
    m &&
      !f &&
      ((L.onChange = function () {
        g.onChange && g.onChange.apply(g, arguments),
          m.toggleOption && m.toggleOption({ label: a, value: g.value })
      }),
      (L.name = m.name),
      (L.checked = m.value.includes(g.value)))
    const A = Nr(
        `${E}-wrapper`,
        {
          [`${E}-rtl`]: _ === 'rtl',
          [`${E}-wrapper-checked`]: L.checked,
          [`${E}-wrapper-disabled`]: w,
          [`${E}-wrapper-in-form-item`]: p
        },
        x == null ? void 0 : x.className,
        i,
        o,
        O,
        j,
        M
      ),
      D = Nr({ [`${E}-indeterminate`]: s }, $p, M),
      [R, I] = i7(L.onClick)
    return T(
      k.createElement(
        ak,
        { component: 'Checkbox', disabled: w },
        k.createElement(
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
          k.createElement(
            r7,
            Object.assign({}, L, {
              onClick: I,
              prefixCls: E,
              className: D,
              disabled: w,
              ref: S
            })
          ),
          a !== void 0 && k.createElement('span', null, a)
        )
      )
    )
  },
  h2 = k.forwardRef(l7)
var u7 = function (e, t) {
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
const c7 = k.forwardRef((e, t) => {
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
      c = u7(e, [
        'defaultValue',
        'children',
        'options',
        'prefixCls',
        'className',
        'rootClassName',
        'style',
        'onChange'
      ]),
      { getPrefixCls: f, direction: d } = k.useContext(kn),
      [g, y] = k.useState(c.value || n || []),
      [_, x] = k.useState([])
    k.useEffect(() => {
      'value' in c && y(c.value || [])
    }, [c.value])
    const m = k.useMemo(
        () =>
          i.map((D) =>
            typeof D == 'string' || typeof D == 'number'
              ? { label: D, value: D }
              : D
          ),
        [i]
      ),
      p = (D) => {
        x((R) => R.filter((I) => I !== D))
      },
      v = (D) => {
        x((R) => [].concat(Q(R), [D]))
      },
      w = (D) => {
        const R = g.indexOf(D.value),
          I = Q(g)
        R === -1 ? I.push(D.value) : I.splice(R, 1),
          'value' in c || y(I),
          u == null ||
            u(
              I.filter((N) => _.includes(N)).sort((N, F) => {
                const z = m.findIndex((q) => q.value === N),
                  V = m.findIndex((q) => q.value === F)
                return z - V
              })
            )
      },
      b = f('checkbox', o),
      C = `${b}-group`,
      S = o2(b),
      [E, j, T] = f2(b, S),
      M = z3(c, ['value', 'disabled']),
      O = i.length
        ? m.map((D) =>
            k.createElement(
              h2,
              {
                prefixCls: b,
                key: D.value.toString(),
                disabled: 'disabled' in D ? D.disabled : c.disabled,
                value: D.value,
                checked: g.includes(D.value),
                onChange: D.onChange,
                className: `${C}-item`,
                style: D.style,
                title: D.title,
                id: D.id,
                required: D.required
              },
              D.label
            )
          )
        : r,
      L = {
        toggleOption: w,
        value: g,
        disabled: c.disabled,
        name: c.name,
        registerValue: v,
        cancelValue: p
      },
      A = Nr(C, { [`${C}-rtl`]: d === 'rtl' }, a, s, T, S, j)
    return E(
      k.createElement(
        'div',
        Object.assign({ className: A, style: l }, M, { ref: t }),
        k.createElement(p2.Provider, { value: L }, O)
      )
    )
  }),
  yl = h2
yl.Group = c7
yl.__ANT_CHECKBOX = !0
const d7 = ({ handleCloseModal: e }) => {
    const [t, n] = k.useState(!1),
      [r, i] = k.useState(!1),
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
        h.jsxs('form', {
          action: '',
          className: P.download_invoice_form,
          children: [
            h.jsx('div', {
              className: `${P.settingsContent}`,
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
                              h.jsx(yl, {
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
                                                $t == null
                                                  ? void 0
                                                  : $t.map((s, l) =>
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
                                              xmlns:
                                                'http://www.w3.org/2000/svg',
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
                                                vn == null
                                                  ? void 0
                                                  : vn.map((s, l) =>
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
                                              className:
                                                P.select_proviences_icon,
                                              width: '16px',
                                              height: '16px',
                                              xmlns:
                                                'http://www.w3.org/2000/svg',
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
                              h.jsx(yl, {
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
                                                $t == null
                                                  ? void 0
                                                  : $t.map((s, l) =>
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
                                              xmlns:
                                                'http://www.w3.org/2000/svg',
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
                                                vn == null
                                                  ? void 0
                                                  : vn.map((s, l) =>
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
                                              className:
                                                P.select_proviences_icon,
                                              width: '16px',
                                              height: '16px',
                                              xmlns:
                                                'http://www.w3.org/2000/svg',
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
      ]
    })
  },
  f7 = ({ handleCloseModal: e }) => {
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
  p7 = ({ handleCloseModal: e }) => {
    var a, s
    const [t, n] = k.useState(null),
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
  h7 = ({ handleCloseModal: e }) => {
    var a, s
    const [t, n] = k.useState(null),
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
  m7 = ({
    handleCloseModal: e,
    setActiveModal: t,
    activeModal: n,
    editOrderOption: r
  }) => {
    const [i, o] = k.useState(!0),
      [a, s] = k.useState(!1),
      l = k.useRef(null)
    return (
      k.useEffect(() => {
        if (l.current && l.current.swiper) {
          const u = l.current.swiper
          u.update(), o(u.isBeginning), s(u.isEnd)
        }
      }, [r]),
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
                    : r.map((u) =>
                        h.jsxs(
                          'div',
                          {
                            className: P.sidebarItem,
                            onClick: () => t(u.modalType),
                            children: [
                              h.jsx('div', {
                                children: u == null ? void 0 : u.icon
                              }),
                              h.jsx('li', {
                                children: u == null ? void 0 : u.name
                              })
                            ]
                          },
                          u == null ? void 0 : u.id
                        )
                      )
              })
            ]
          }),
          h.jsxs('div', {
            className: P.settings_mobile_box,
            children: [
              h.jsxs('div', {
                className: P.settings_header_box,
                children: [
                  h.jsx('h3', {
                    className: P.sidebarTitle,
                    children: 'Change what you want'
                  }),
                  ' ',
                  h.jsx('div', {
                    className: P.mobile_modal_close_icon,
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
              h.jsxs(Sp, {
                ref: l,
                modules: [k4],
                navigation: {
                  nextEl: '.settings_button_next',
                  prevEl: '.settings_button_prev'
                },
                slidesPerView: 3,
                spaceBetween: 10,
                mousewheel: !0,
                breakpoints: {
                  874: { slidesPerView: 8 },
                  700: { slidesPerView: 7 },
                  600: { slidesPerView: 6 },
                  500: { slidesPerView: 5 },
                  400: { slidesPerView: 4 }
                },
                onSwiper: (u) => {
                  o(u.isBeginning), s(u.isEnd)
                },
                onSlideChange: (u) => {
                  o(u.isBeginning), s(u.isEnd)
                },
                className: 'mySwiper',
                children: [
                  r == null
                    ? void 0
                    : r.map((u) =>
                        h.jsx(
                          Cp,
                          {
                            children: h.jsxs('div', {
                              className: P.mobile_sidebar_item,
                              onClick: () => t(u.modalType),
                              children: [
                                h.jsx('div', {
                                  className: P.mobile_settings_icon,
                                  children: u == null ? void 0 : u.icon
                                }),
                                h.jsx('p', {
                                  children: u == null ? void 0 : u.name
                                })
                              ]
                            })
                          },
                          u == null ? void 0 : u.id
                        )
                      ),
                  h.jsx('div', {
                    className: `settings_button_prev ${i ? P.disabled : ''}`,
                    children: h.jsx('svg', {
                      width: '24px',
                      height: '24px',
                      xmlns: 'http://www.w3.org/2000/svg',
                      viewBox: '0 0 24 24',
                      fill: 'purple',
                      children: h.jsx('path', {
                        d: 'M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z'
                      })
                    })
                  }),
                  h.jsx('div', {
                    className: `settings_button_next ${a ? P.disabled : ''}`,
                    children: h.jsx('svg', {
                      width: '24px',
                      height: '24px',
                      xmlns: 'http://www.w3.org/2000/svg',
                      viewBox: '0 0 24 24',
                      fill: 'purple',
                      children: h.jsx('path', {
                        d: 'M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z'
                      })
                    })
                  })
                ]
              })
            ]
          }),
          h.jsxs('div', {
            className: P.settingsContainer,
            children: [
              n === 'shipping' && h.jsx(v3, { handleCloseModal: e }),
              n === 'contact_information' && h.jsx(g3, { handleCloseModal: e }),
              n === 'quantities' && h.jsx(y3, { handleCloseModal: e }),
              n === 'contact_customer_support' &&
                h.jsx(_3, { handleCloseModal: e }),
              n === 'change_product_variant' &&
                h.jsx(x3, { handleCloseModal: e }),
              n === 'upgrade_shipping_method' &&
                h.jsx(w3, { handleCloseModal: e }),
              n === 'edit_gift_message' && h.jsx(b3, { handleCloseModal: e }),
              n === 'download_invoice' && h.jsx(d7, { handleCloseModal: e }),
              n === 'request_order_cancel' &&
                h.jsx(f7, { handleCloseModal: e }),
              n === 'switch_product' && h.jsx(p7, { handleCloseModal: e }),
              n === 'add_another_product' && h.jsx(h7, { handleCloseModal: e })
            ]
          })
        ]
      })
    )
  },
  Xt = [
    {
      id: '1',
      name: 'Shipping Address',
      icon: h.jsx(WC, {}),
      modalType: 'shipping'
    },
    {
      id: '2',
      name: 'Change Contact Information',
      icon: h.jsx(Lm, {}),
      modalType: 'contact_information'
    },
    {
      id: '2',
      name: 'Contact Customer Support',
      icon: h.jsx(Lm, {}),
      modalType: 'contact_customer_support'
    },
    {
      id: '3',
      name: 'Change Product Quantities',
      icon: h.jsx(UC, {}),
      modalType: 'quantities'
    },
    {
      id: '10',
      name: 'Add Another Product',
      icon: h.jsx(Vu, {}),
      modalType: 'add_another_product'
    },
    {
      id: '4',
      name: 'Change Product Variant',
      icon: h.jsx(GC, {}),
      modalType: 'change_product_variant'
    },
    {
      id: '5',
      name: 'Switch Product',
      icon: h.jsx(QC, {}),
      modalType: 'switch_product'
    },
    {
      id: '6',
      name: 'Upgrade Shipping Methods',
      icon: h.jsx(KC, {}),
      modalType: 'upgrade_shipping_method'
    },
    {
      id: '9',
      name: 'Edit Gift Message',
      icon: h.jsx(XC, {}),
      modalType: 'edit_gift_message'
    },
    {
      id: '10',
      name: 'Download Invoice',
      icon: h.jsx(Vu, {}),
      modalType: 'download_invoice'
    },
    {
      id: '10',
      name: 'Request For Order Cancel',
      icon: h.jsx(Vu, {}),
      modalType: 'request_order_cancel'
    }
  ],
  v7 = '_promotion_qrmo6_1',
  Fv = { promotion: v7 },
  g7 = () =>
    h.jsx('div', {
      className: Fv.promotion,
      children: h.jsx('img', {
        className: Fv.promotion_image,
        src: 'https://i.ibb.co.com/9q7kJYv/promotion-banner.png',
        alt: ''
      })
    }),
  y7 = '_orderDetailsContent_ncvid_1',
  _7 = '_orderDetails_ncvid_1',
  x7 = '_orderDetailsItem_ncvid_21',
  w7 = '_orderDetailsItemTitle_ncvid_29',
  b7 = '_information_ncvid_41',
  S7 = '_deadline_ncvid_59',
  $e = {
    orderDetailsContent: y7,
    orderDetails: _7,
    orderDetailsItem: x7,
    orderDetailsItemTitle: w7,
    information: b7,
    deadline: S7
  },
  C7 = () =>
    h.jsxs('div', {
      className: $e.orderDetails,
      children: [
        h.jsxs('div', {
          className: `${$e.deadline}`,
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
          className: $e.orderDetailsContent,
          children: [
            h.jsxs('div', {
              className: `${$e.contactInformation} ${$e.orderDetailsItem}`,
              children: [
                h.jsx('p', {
                  className: $e.orderDetailsItemTitle,
                  children: 'Contact information'
                }),
                h.jsxs('div', {
                  className: $e.information,
                  children: [
                    h.jsx('p', { children: 'Ahmed Faysal' }),
                    h.jsx('p', { children: '+09748347889' }),
                    h.jsx('p', { children: 'ahmedfaysal01797@gmail.com' })
                  ]
                })
              ]
            }),
            h.jsxs('div', {
              className: `${$e.shippingAddress} ${$e.orderDetailsItem}`,
              children: [
                h.jsx('p', {
                  className: $e.orderDetailsItemTitle,
                  children: 'Shipping address'
                }),
                h.jsxs('div', {
                  className: $e.information,
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
              className: `${$e.billingAddress} ${$e.orderDetailsItem}`,
              children: [
                h.jsx('p', {
                  className: $e.orderDetailsItemTitle,
                  children: 'Billing address'
                }),
                h.jsxs('div', {
                  className: $e.information,
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
          className: $e.promotion_banner_desktop,
          children: h.jsx(g7, {})
        })
      ]
    }),
  E7 = '_orderSummary_1u5cz_1',
  j7 = '_orderItems_1u5cz_39',
  T7 = '_orderItem_1u5cz_39',
  k7 = '_itemDetails_1u5cz_85',
  P7 = '_priceDetails_1u5cz_121',
  M7 = '_taxSection_1u5cz_123',
  N7 = '_paymentDetails_1u5cz_125',
  L7 = '_shippingSection_1u5cz_155',
  O7 = '_shippingOption_1u5cz_175',
  A7 = '_saveButton_1u5cz_217',
  R7 = '_deadline_mobile_1u5cz_279',
  I7 = '_deadline_1u5cz_279',
  xt = {
    orderSummary: E7,
    orderItems: j7,
    orderItem: T7,
    itemDetails: k7,
    priceDetails: P7,
    taxSection: M7,
    paymentDetails: N7,
    shippingSection: L7,
    shippingOption: O7,
    saveButton: A7,
    deadline_mobile: R7,
    deadline: I7
  },
  F7 = () => {
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
          className: `${xt.deadline_mobile}`,
          children: h.jsxs('div', {
            className: `${xt.deadline} `,
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
          className: xt.orderSummary,
          children: [
            h.jsx('h2', { children: 'Order summary' }),
            h.jsx('div', {
              className: xt.orderItems,
              children:
                e == null
                  ? void 0
                  : e.map((t) =>
                      h.jsxs(
                        'div',
                        {
                          className: xt.orderItem,
                          children: [
                            h.jsx('img', {
                              src: t.image,
                              alt: 'The Collection Snowboard: Hydrogen'
                            }),
                            h.jsxs('div', {
                              className: xt.itemDetails,
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
                  className: xt.priceDetails,
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
                  className: xt.shippingSection,
                  children: [
                    h.jsx('h3', { children: 'Shipping' }),
                    h.jsxs('div', {
                      className: xt.shippingOption,
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
                  className: xt.taxSection,
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
                  className: xt.paymentDetails,
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
                  className: xt.saveButton,
                  children: 'Pay Now'
                })
              ]
            })
          ]
        })
      ]
    })
  },
  z7 = () => {
    const [e, t] = k.useState(!1),
      [n, r] = k.useState('shipping'),
      [i, o] = k.useState(Xt),
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
      k.useEffect(() => {
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
                      children: h.jsx(YC, {})
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
              children: h.jsx(m7, {
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
                children: h.jsx(C7, {})
              }),
              h.jsx('div', {
                className: de.order_summary_desktop,
                children: h.jsx(F7, {})
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
                children: h.jsx(Sp, {
                  slidesPerView: 1,
                  spaceBetween: 25,
                  autoplay: { delay: 2500, disableOnInteraction: !1 },
                  loop: !0,
                  mousewheel: !0,
                  modules: [P4],
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
                            Cp,
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
function $7() {
  const e = r1((r) => r.orderEdit.page),
    n = (() => {
      switch (e) {
        case 'Home':
          return h.jsx(z7, {})
        case 'EditOrder':
          return h.jsx(EC, {})
        default:
          return null
      }
    })()
  return h.jsxs('section', {
    className: 'order-edit-container',
    children: [n, h.jsx(wb, {})]
  })
}
const zv = 'shopninja-optimarko.myshopify.com',
  Mo = O1({
    reducerPath: 'orderEditConfigApi',
    baseQuery: T1({
      baseUrl: 'https://order-editing-staging.cleversity.com/api/storefront'
    }),
    endpoints: (e) => ({
      getStyleData: e.query({
        query: () => ({ url: `/order-edit-portal-data?shop_url=${zv}` }),
        transformResponse: (t) => t.data,
        transformErrorResponse: (t) => t.status
      }),
      getOrderEditSettings: e.query({
        query: () => ({ url: `/order-edit-setting?shop_url=${zv}` }),
        transformResponse: (t) => t.edit_setting,
        transformErrorResponse: (t) => t.status
      })
    })
  }),
  D7 = { styleData: {}, orderEditSettings: {} },
  V7 = In({
    name: 'orderEditStyle',
    initialState: D7,
    reducers: {},
    extraReducers: (e) => {
      e.addMatcher(Mo.endpoints.getStyleData.matchFulfilled, (t, n) => {
        t.styleData = n.payload
      }),
        e.addMatcher(
          Mo.endpoints.getOrderEditSettings.matchFulfilled,
          (t, n) => {
            t.orderEditSettings = n.payload
          }
        )
    }
  }),
  B7 = V7.reducer,
  H7 = vS({
    reducer: {
      orderEdit: CC,
      orderEditConfig: B7,
      [jo.reducerPath]: jo.reducer,
      [Mo.reducerPath]: Mo.reducer
    },
    middleware: (e) => e().concat(jo.middleware).concat(Mo.middleware)
  }),
  q7 = Z0(document.getElementById('opt-order-edit'))
q7.render(h.jsx(Pw, { store: H7, children: h.jsx($7, {}) }))
