var F_ = Object.defineProperty
var $_ = (e, t, n) =>
  t in e
    ? F_(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n)
var ou = (e, t, n) => $_(e, typeof t != 'symbol' ? t + '' : t, n)
function Dv(e, t) {
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
var zv = { exports: {} },
  yl = {},
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
 */ var ua = Symbol.for('react.element'),
  D_ = Symbol.for('react.portal'),
  z_ = Symbol.for('react.fragment'),
  V_ = Symbol.for('react.strict_mode'),
  B_ = Symbol.for('react.profiler'),
  H_ = Symbol.for('react.provider'),
  q_ = Symbol.for('react.context'),
  W_ = Symbol.for('react.forward_ref'),
  U_ = Symbol.for('react.suspense'),
  G_ = Symbol.for('react.memo'),
  Q_ = Symbol.for('react.lazy'),
  qp = Symbol.iterator
function K_(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (qp && e[qp]) || e['@@iterator']),
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
function Fi(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = qv),
    (this.updater = n || Bv)
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
function Wv() {}
Wv.prototype = Fi.prototype
function mf(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = qv),
    (this.updater = n || Bv)
}
var vf = (mf.prototype = new Wv())
vf.constructor = mf
Hv(vf, Fi.prototype)
vf.isPureReactComponent = !0
var Wp = Array.isArray,
  Uv = Object.prototype.hasOwnProperty,
  gf = { current: null },
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
  return { $$typeof: ua, type: e, key: o, ref: a, props: i, _owner: gf.current }
}
function X_(e, t) {
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
function Y_(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var Up = /\/+/g
function au(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Y_('' + e.key)
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
          case D_:
            a = !0
        }
    }
  if (a)
    return (
      (a = e),
      (i = i(a)),
      (e = r === '' ? '.' + au(a, 0) : r),
      Wp(i)
        ? ((n = ''),
          e != null && (n = e.replace(Up, '$&/') + '/'),
          us(i, t, n, '', function (u) {
            return u
          }))
        : i != null &&
          (yf(i) &&
            (i = X_(
              i,
              n +
                (!i.key || (a && a.key === i.key)
                  ? ''
                  : ('' + i.key).replace(Up, '$&/') + '/') +
                e
            )),
          t.push(i)),
      1
    )
  if (((a = 0), (r = r === '' ? '.' : r + ':'), Wp(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s]
      var l = r + au(o, s)
      a += us(o, t, n, l, i)
    }
  else if (((l = K_(e)), typeof l == 'function'))
    for (e = l.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (l = r + au(o, s++)), (a += us(o, t, n, l, i))
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
function Z_(e) {
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
var Qe = { current: null },
  cs = { transition: null },
  J_ = {
    ReactCurrentDispatcher: Qe,
    ReactCurrentBatchConfig: cs,
    ReactCurrentOwner: gf
  }
function Kv() {
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
J.Fragment = z_
J.Profiler = B_
J.PureComponent = mf
J.StrictMode = V_
J.Suspense = U_
J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = J_
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
      (t.ref !== void 0 && ((o = t.ref), (a = gf.current)),
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
  return { $$typeof: ua, type: e.type, key: i, ref: o, props: r, _owner: a }
}
J.createContext = function (e) {
  return (
    (e = {
      $$typeof: q_,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }),
    (e.Provider = { $$typeof: H_, _context: e }),
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
  return { $$typeof: W_, render: e }
}
J.isValidElement = yf
J.lazy = function (e) {
  return { $$typeof: Q_, _payload: { _status: -1, _result: e }, _init: Z_ }
}
J.memo = function (e, t) {
  return { $$typeof: G_, type: e, compare: t === void 0 ? null : t }
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
J.unstable_act = Kv
J.useCallback = function (e, t) {
  return Qe.current.useCallback(e, t)
}
J.useContext = function (e) {
  return Qe.current.useContext(e)
}
J.useDebugValue = function () {}
J.useDeferredValue = function (e) {
  return Qe.current.useDeferredValue(e)
}
J.useEffect = function (e, t) {
  return Qe.current.useEffect(e, t)
}
J.useId = function () {
  return Qe.current.useId()
}
J.useImperativeHandle = function (e, t, n) {
  return Qe.current.useImperativeHandle(e, t, n)
}
J.useInsertionEffect = function (e, t) {
  return Qe.current.useInsertionEffect(e, t)
}
J.useLayoutEffect = function (e, t) {
  return Qe.current.useLayoutEffect(e, t)
}
J.useMemo = function (e, t) {
  return Qe.current.useMemo(e, t)
}
J.useReducer = function (e, t, n) {
  return Qe.current.useReducer(e, t, n)
}
J.useRef = function (e) {
  return Qe.current.useRef(e)
}
J.useState = function (e) {
  return Qe.current.useState(e)
}
J.useSyncExternalStore = function (e, t, n) {
  return Qe.current.useSyncExternalStore(e, t, n)
}
J.useTransition = function () {
  return Qe.current.useTransition()
}
J.version = '18.3.1'
Vv.exports = J
var j = Vv.exports
const te = hf(j),
  Mo = Dv({ __proto__: null, default: te }, [j])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var e2 = j,
  t2 = Symbol.for('react.element'),
  n2 = Symbol.for('react.fragment'),
  r2 = Object.prototype.hasOwnProperty,
  i2 = e2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  o2 = { key: !0, ref: !0, __self: !0, __source: !0 }
function Xv(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (a = t.ref)
  for (r in t) r2.call(t, r) && !o2.hasOwnProperty(r) && (i[r] = t[r])
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r])
  return { $$typeof: t2, type: e, key: o, ref: a, props: i, _owner: i2.current }
}
yl.Fragment = n2
yl.jsx = Xv
yl.jsxs = Xv
zv.exports = yl
var h = zv.exports,
  Yv = { exports: {} },
  mt = {},
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
    w = typeof setTimeout == 'function' ? setTimeout : null,
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
  function x(N) {
    if (((_ = !1), v(N), !y))
      if (n(l) !== null) (y = !0), I(b)
      else {
        var F = n(u)
        F !== null && R(x, F.startTime - N)
      }
  }
  function b(N, F) {
    ;(y = !1), _ && ((_ = !1), m(E), (E = -1)), (g = !0)
    var $ = d
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
        U !== null && R(x, U.startTime - F), (G = !1)
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
      w(L, 0)
    }
  function I(N) {
    ;(S = N), C || ((C = !0), O())
  }
  function R(N, F) {
    E = w(function () {
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
      y || g || ((y = !0), I(b))
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
              (_ ? (m(E), (E = -1)) : (_ = !0), R(x, $ - V)))
          : ((N.sortIndex = q), t(l, N), y || g || ((y = !0), I(b))),
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
})(Jv)
Zv.exports = Jv
var a2 = Zv.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var s2 = j,
  pt = a2
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
  No = {}
function Lr(e, t) {
  Ci(e, t), Ci(e + 'Capture', t)
}
function Ci(e, t) {
  for (No[e] = t, e = 0; e < t.length; e++) eg.add(t[e])
}
var wn = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  hc = Object.prototype.hasOwnProperty,
  l2 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Gp = {},
  Qp = {}
function u2(e) {
  return hc.call(Qp, e)
    ? !0
    : hc.call(Gp, e)
    ? !1
    : l2.test(e)
    ? (Qp[e] = !0)
    : ((Gp[e] = !0), !1)
}
function c2(e, t, n, r) {
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
function d2(e, t, n, r) {
  if (t === null || typeof t > 'u' || c2(e, t, n, r)) return !0
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
function Ke(e, t, n, r, i, o, a) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = a)
}
var Ie = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Ie[e] = new Ke(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv']
].forEach(function (e) {
  var t = e[0]
  Ie[t] = new Ke(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Ie[e] = new Ke(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha'
].forEach(function (e) {
  Ie[e] = new Ke(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Ie[e] = new Ke(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Ie[e] = new Ke(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  Ie[e] = new Ke(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Ie[e] = new Ke(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  Ie[e] = new Ke(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var _f = /[\-:]([a-z])/g
function wf(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(_f, wf)
    Ie[t] = new Ke(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(_f, wf)
    Ie[t] = new Ke(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(_f, wf)
  Ie[t] = new Ke(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  Ie[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
Ie.xlinkHref = new Ke(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Ie[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function xf(e, t, n, r) {
  var i = Ie.hasOwnProperty(t) ? Ie[t] : null
  ;(i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (d2(t, n, i, r) && (n = null),
    r || i === null
      ? u2(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
var jn = s2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Pa = Symbol.for('react.element'),
  Jr = Symbol.for('react.portal'),
  ei = Symbol.for('react.fragment'),
  bf = Symbol.for('react.strict_mode'),
  mc = Symbol.for('react.profiler'),
  tg = Symbol.for('react.provider'),
  ng = Symbol.for('react.context'),
  Sf = Symbol.for('react.forward_ref'),
  vc = Symbol.for('react.suspense'),
  gc = Symbol.for('react.suspense_list'),
  Cf = Symbol.for('react.memo'),
  Ln = Symbol.for('react.lazy'),
  rg = Symbol.for('react.offscreen'),
  Kp = Symbol.iterator
function Qi(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Kp && e[Kp]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var me = Object.assign,
  su
function ao(e) {
  if (su === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      su = (t && t[1]) || ''
    }
  return (
    `
` +
    su +
    e
  )
}
var lu = !1
function uu(e, t) {
  if (!e || lu) return ''
  lu = !0
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
    ;(lu = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? ao(e) : ''
}
function f2(e) {
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
      return (e = uu(e.type, !1)), e
    case 11:
      return (e = uu(e.type.render, !1)), e
    case 1:
      return (e = uu(e.type, !0)), e
    default:
      return ''
  }
}
function yc(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case ei:
      return 'Fragment'
    case Jr:
      return 'Portal'
    case mc:
      return 'Profiler'
    case bf:
      return 'StrictMode'
    case vc:
      return 'Suspense'
    case gc:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case ng:
        return (e.displayName || 'Context') + '.Consumer'
      case tg:
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
          (t = e.displayName || null), t !== null ? t : yc(e.type) || 'Memo'
        )
      case Ln:
        ;(t = e._payload), (e = e._init)
        try {
          return yc(e(t))
        } catch {}
    }
  return null
}
function p2(e) {
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
      return yc(t)
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
function ig(e) {
  var t = e.type
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  )
}
function h2(e) {
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
function Ma(e) {
  e._valueTracker || (e._valueTracker = h2(e))
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
function Ns(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function _c(e, t) {
  var n = t.checked
  return me({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked
  })
}
function Xp(e, t) {
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
function ag(e, t) {
  ;(t = t.checked), t != null && xf(e, 'checked', t, !1)
}
function wc(e, t) {
  ag(e, t)
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
    ? xc(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && xc(e, t.type, Jn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function Yp(e, t, n) {
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
function xc(e, t, n) {
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
function bc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(H(91))
  return me({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue
  })
}
function Zp(e, t) {
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
function sg(e, t) {
  var n = Jn(t.value),
    r = Jn(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r)
}
function Jp(e) {
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
function Sc(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? lg(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e
}
var Na,
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
  m2 = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(po).forEach(function (e) {
  m2.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (po[t] = po[e])
  })
})
function cg(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (po.hasOwnProperty(e) && po[e])
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
var v2 = me(
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
function Cc(e, t) {
  if (t) {
    if (v2[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Ec(e, t) {
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
function Ef(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var kc = null,
  mi = null,
  vi = null
function eh(e) {
  if ((e = fa(e))) {
    if (typeof kc != 'function') throw Error(H(280))
    var t = e.stateNode
    t && ((t = Sl(t)), kc(e.stateNode, e.type, t))
  }
}
function fg(e) {
  mi ? (vi ? vi.push(e) : (vi = [e])) : (mi = e)
}
function pg() {
  if (mi) {
    var e = mi,
      t = vi
    if (((vi = mi = null), eh(e), t)) for (e = 0; e < t.length; e++) eh(t[e])
  }
}
function hg(e, t) {
  return e(t)
}
function mg() {}
var cu = !1
function vg(e, t, n) {
  if (cu) return e(t, n)
  cu = !0
  try {
    return hg(e, t, n)
  } finally {
    ;(cu = !1), (mi !== null || vi !== null) && (mg(), pg())
  }
}
function Lo(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = Sl(n)
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
var jc = !1
if (wn)
  try {
    var Ki = {}
    Object.defineProperty(Ki, 'passive', {
      get: function () {
        jc = !0
      }
    }),
      window.addEventListener('test', Ki, Ki),
      window.removeEventListener('test', Ki, Ki)
  } catch {
    jc = !1
  }
function g2(e, t, n, r, i, o, a, s, l) {
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
  Pc = null,
  y2 = {
    onError: function (e) {
      ;(ho = !0), (Os = e)
    }
  }
function _2(e, t, n, r, i, o, a, s, l) {
  ;(ho = !1), (Os = null), g2.apply(y2, arguments)
}
function w2(e, t, n, r, i, o, a, s, l) {
  if ((_2.apply(this, arguments), ho)) {
    if (ho) {
      var u = Os
      ;(ho = !1), (Os = null)
    } else throw Error(H(198))
    Ls || ((Ls = !0), (Pc = u))
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
function th(e) {
  if (Ar(e) !== e) throw Error(H(188))
}
function x2(e) {
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
        if (o === n) return th(i), e
        if (o === r) return th(i), t
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
  return (e = x2(e)), e !== null ? _g(e) : null
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
var wg = pt.unstable_scheduleCallback,
  nh = pt.unstable_cancelCallback,
  b2 = pt.unstable_shouldYield,
  S2 = pt.unstable_requestPaint,
  ye = pt.unstable_now,
  C2 = pt.unstable_getCurrentPriorityLevel,
  Tf = pt.unstable_ImmediatePriority,
  xg = pt.unstable_UserBlockingPriority,
  As = pt.unstable_NormalPriority,
  E2 = pt.unstable_LowPriority,
  bg = pt.unstable_IdlePriority,
  _l = null,
  tn = null
function T2(e) {
  if (tn && typeof tn.onCommitFiberRoot == 'function')
    try {
      tn.onCommitFiberRoot(_l, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var zt = Math.clz32 ? Math.clz32 : P2,
  k2 = Math.log,
  j2 = Math.LN2
function P2(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((k2(e) / j2) | 0)) | 0
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
function Is(e, t) {
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
function M2(e, t) {
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
function N2(e, t) {
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
      ? (!(s & n) || s & r) && (i[a] = M2(s, t))
      : l <= t && (e.expiredLanes |= s),
      (o &= ~s)
  }
}
function Mc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  )
}
function Sg() {
  var e = Oa
  return (Oa <<= 1), !(Oa & 4194240) && (Oa = 64), e
}
function du(e) {
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
function O2(e, t) {
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
function Cg(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var Eg,
  jf,
  Tg,
  kg,
  jg,
  Nc = !1,
  Aa = [],
  Wn = null,
  Un = null,
  Gn = null,
  Ao = new Map(),
  Io = new Map(),
  Rn = [],
  L2 =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function rh(e, t) {
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
      Io.delete(t.pointerId)
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
function A2(e, t, n, r, i) {
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
        (o = i.pointerId), Io.set(o, Xi(Io.get(o) || null, e, t, n, r, i)), !0
      )
  }
  return !1
}
function Pg(e) {
  var t = dr(e.target)
  if (t !== null) {
    var n = Ar(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = gg(n)), t !== null)) {
          ;(e.blockedOn = t),
            jg(e.priority, function () {
              Tg(n)
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
    var n = Oc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(Tc = r), n.target.dispatchEvent(r), (Tc = null)
    } else return (t = fa(n)), t !== null && jf(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function ih(e, t, n) {
  ds(e) && n.delete(t)
}
function I2() {
  ;(Nc = !1),
    Wn !== null && ds(Wn) && (Wn = null),
    Un !== null && ds(Un) && (Un = null),
    Gn !== null && ds(Gn) && (Gn = null),
    Ao.forEach(ih),
    Io.forEach(ih)
}
function Yi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Nc ||
      ((Nc = !0), pt.unstable_scheduleCallback(pt.unstable_NormalPriority, I2)))
}
function Ro(e) {
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
      Io.forEach(t),
      n = 0;
    n < Rn.length;
    n++
  )
    (r = Rn[n]), r.blockedOn === e && (r.blockedOn = null)
  for (; 0 < Rn.length && ((n = Rn[0]), n.blockedOn === null); )
    Pg(n), n.blockedOn === null && Rn.shift()
}
var gi = jn.ReactCurrentBatchConfig,
  Rs = !0
function R2(e, t, n, r) {
  var i = ie,
    o = gi.transition
  gi.transition = null
  try {
    ;(ie = 1), Pf(e, t, n, r)
  } finally {
    ;(ie = i), (gi.transition = o)
  }
}
function F2(e, t, n, r) {
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
  if (Rs) {
    var i = Oc(e, t, n, r)
    if (i === null) xu(e, t, r, Fs, n), rh(e, r)
    else if (A2(i, e, t, n, r)) r.stopPropagation()
    else if ((rh(e, r), t & 4 && -1 < L2.indexOf(e))) {
      for (; i !== null; ) {
        var o = fa(i)
        if (
          (o !== null && Eg(o),
          (o = Oc(e, t, n, r)),
          o === null && xu(e, t, r, Fs, n),
          o === i)
        )
          break
        i = o
      }
      i !== null && r.stopPropagation()
    } else xu(e, t, r, null, n)
  }
}
var Fs = null
function Oc(e, t, n, r) {
  if (((Fs = null), (e = Ef(r)), (e = dr(e)), e !== null))
    if (((t = Ar(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = gg(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (Fs = e), null
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
      switch (C2()) {
        case Tf:
          return 1
        case xg:
          return 4
        case As:
        case E2:
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
  Mf = null,
  fs = null
function Ng() {
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
function Ia() {
  return !0
}
function oh() {
  return !1
}
function vt(e) {
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
        : oh),
      (this.isPropagationStopped = oh),
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
  Nf = vt($i),
  da = me({}, $i, { view: 0, detail: 0 }),
  $2 = vt(da),
  fu,
  pu,
  Zi,
  wl = me({}, da, {
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
              ? ((fu = e.screenX - Zi.screenX), (pu = e.screenY - Zi.screenY))
              : (pu = fu = 0),
            (Zi = e)),
          fu)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : pu
    }
  }),
  ah = vt(wl),
  D2 = me({}, wl, { dataTransfer: 0 }),
  z2 = vt(D2),
  V2 = me({}, da, { relatedTarget: 0 }),
  hu = vt(V2),
  B2 = me({}, $i, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  H2 = vt(B2),
  q2 = me({}, $i, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    }
  }),
  W2 = vt(q2),
  U2 = me({}, $i, { data: 0 }),
  sh = vt(U2),
  G2 = {
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
  Q2 = {
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
  K2 = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function X2(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = K2[e]) ? !!t[e] : !1
}
function Of() {
  return X2
}
var Y2 = me({}, da, {
    key: function (e) {
      if (e.key) {
        var t = G2[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = ps(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? Q2[e.keyCode] || 'Unidentified'
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
  Z2 = vt(Y2),
  J2 = me({}, wl, {
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
  lh = vt(J2),
  ew = me({}, da, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Of
  }),
  tw = vt(ew),
  nw = me({}, $i, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  rw = vt(nw),
  iw = me({}, wl, {
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
  ow = vt(iw),
  aw = [9, 13, 27, 32],
  Lf = wn && 'CompositionEvent' in window,
  mo = null
wn && 'documentMode' in document && (mo = document.documentMode)
var sw = wn && 'TextEvent' in window && !mo,
  Og = wn && (!Lf || (mo && 8 < mo && 11 >= mo)),
  uh = ' ',
  ch = !1
function Lg(e, t) {
  switch (e) {
    case 'keyup':
      return aw.indexOf(t.keyCode) !== -1
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
var ti = !1
function lw(e, t) {
  switch (e) {
    case 'compositionend':
      return Ag(t)
    case 'keypress':
      return t.which !== 32 ? null : ((ch = !0), uh)
    case 'textInput':
      return (e = t.data), e === uh && ch ? null : e
    default:
      return null
  }
}
function uw(e, t) {
  if (ti)
    return e === 'compositionend' || (!Lf && Lg(e, t))
      ? ((e = Ng()), (fs = Mf = Dn = null), (ti = !1), e)
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
      return Og && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var cw = {
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
function dh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!cw[e.type] : t === 'textarea'
}
function Ig(e, t, n, r) {
  fg(r),
    (t = $s(t, 'onChange')),
    0 < t.length &&
      ((n = new Nf('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }))
}
var vo = null,
  Fo = null
function dw(e) {
  Ug(e, 0)
}
function xl(e) {
  var t = ii(e)
  if (og(t)) return e
}
function fw(e, t) {
  if (e === 'change') return t
}
var Rg = !1
if (wn) {
  var mu
  if (wn) {
    var vu = 'oninput' in document
    if (!vu) {
      var fh = document.createElement('div')
      fh.setAttribute('oninput', 'return;'),
        (vu = typeof fh.oninput == 'function')
    }
    mu = vu
  } else mu = !1
  Rg = mu && (!document.documentMode || 9 < document.documentMode)
}
function ph() {
  vo && (vo.detachEvent('onpropertychange', Fg), (Fo = vo = null))
}
function Fg(e) {
  if (e.propertyName === 'value' && xl(Fo)) {
    var t = []
    Ig(t, Fo, e, Ef(e)), vg(dw, t)
  }
}
function pw(e, t, n) {
  e === 'focusin'
    ? (ph(), (vo = t), (Fo = n), vo.attachEvent('onpropertychange', Fg))
    : e === 'focusout' && ph()
}
function hw(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return xl(Fo)
}
function mw(e, t) {
  if (e === 'click') return xl(t)
}
function vw(e, t) {
  if (e === 'input' || e === 'change') return xl(t)
}
function gw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var Wt = typeof Object.is == 'function' ? Object.is : gw
function $o(e, t) {
  if (Wt(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var i = n[r]
    if (!hc.call(t, i) || !Wt(e[i], t[i])) return !1
  }
  return !0
}
function hh(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function mh(e, t) {
  var n = hh(e)
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
    n = hh(n)
  }
}
function $g(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? $g(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1
}
function Dg() {
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
function yw(e) {
  var t = Dg(),
    n = e.focusedElem,
    r = e.selectionRange
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    $g(n.ownerDocument.documentElement, n)
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
          (i = mh(n, o))
        var a = mh(n, r)
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
var _w = wn && 'documentMode' in document && 11 >= document.documentMode,
  ni = null,
  Lc = null,
  go = null,
  Ac = !1
function vh(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  Ac ||
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
      (r = $s(Lc, 'onSelect')),
      0 < r.length &&
        ((t = new Nf('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = ni))))
}
function Ra(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var ri = {
    animationend: Ra('Animation', 'AnimationEnd'),
    animationiteration: Ra('Animation', 'AnimationIteration'),
    animationstart: Ra('Animation', 'AnimationStart'),
    transitionend: Ra('Transition', 'TransitionEnd')
  },
  gu = {},
  zg = {}
wn &&
  ((zg = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete ri.animationend.animation,
    delete ri.animationiteration.animation,
    delete ri.animationstart.animation),
  'TransitionEvent' in window || delete ri.transitionend.transition)
function bl(e) {
  if (gu[e]) return gu[e]
  if (!ri[e]) return e
  var t = ri[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in zg) return (gu[e] = t[n])
  return e
}
var Vg = bl('animationend'),
  Bg = bl('animationiteration'),
  Hg = bl('animationstart'),
  qg = bl('transitionend'),
  Wg = new Map(),
  gh =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function rr(e, t) {
  Wg.set(e, t), Lr(t, [e])
}
for (var yu = 0; yu < gh.length; yu++) {
  var _u = gh[yu],
    ww = _u.toLowerCase(),
    xw = _u[0].toUpperCase() + _u.slice(1)
  rr(ww, 'on' + xw)
}
rr(Vg, 'onAnimationEnd')
rr(Bg, 'onAnimationIteration')
rr(Hg, 'onAnimationStart')
rr('dblclick', 'onDoubleClick')
rr('focusin', 'onFocus')
rr('focusout', 'onBlur')
rr(qg, 'onTransitionEnd')
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
  bw = new Set('cancel close invalid load scroll toggle'.split(' ').concat(uo))
function yh(e, t, n) {
  var r = e.type || 'unknown-event'
  ;(e.currentTarget = n), w2(r, t, void 0, e), (e.currentTarget = null)
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
          yh(i, s, u), (o = l)
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
          yh(i, s, u), (o = l)
        }
    }
  }
  if (Ls) throw ((e = Pc), (Ls = !1), (Pc = null), e)
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
var Fa = '_reactListening' + Math.random().toString(36).slice(2)
function Do(e) {
  if (!e[Fa]) {
    ;(e[Fa] = !0),
      eg.forEach(function (n) {
        n !== 'selectionchange' && (bw.has(n) || wu(n, !1, e), wu(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[Fa] || ((t[Fa] = !0), wu('selectionchange', !1, t))
  }
}
function Gg(e, t, n, r) {
  switch (Mg(t)) {
    case 1:
      var i = R2
      break
    case 4:
      i = F2
      break
    default:
      i = Pf
  }
  ;(n = i.bind(null, t, n, e)),
    (i = void 0),
    !jc ||
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
function xu(e, t, n, r, i) {
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
  vg(function () {
    var u = o,
      c = Ef(n),
      f = []
    e: {
      var d = Wg.get(e)
      if (d !== void 0) {
        var g = Nf,
          y = e
        switch (e) {
          case 'keypress':
            if (ps(n) === 0) break e
          case 'keydown':
          case 'keyup':
            g = Z2
            break
          case 'focusin':
            ;(y = 'focus'), (g = hu)
            break
          case 'focusout':
            ;(y = 'blur'), (g = hu)
            break
          case 'beforeblur':
          case 'afterblur':
            g = hu
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
            g = ah
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            g = z2
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            g = tw
            break
          case Vg:
          case Bg:
          case Hg:
            g = H2
            break
          case qg:
            g = rw
            break
          case 'scroll':
            g = $2
            break
          case 'wheel':
            g = ow
            break
          case 'copy':
          case 'cut':
          case 'paste':
            g = W2
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = lh
        }
        var _ = (t & 4) !== 0,
          w = !_ && e === 'scroll',
          m = _ ? (d !== null ? d + 'Capture' : null) : d
        _ = []
        for (var p = u, v; p !== null; ) {
          v = p
          var x = v.stateNode
          if (
            (v.tag === 5 &&
              x !== null &&
              ((v = x),
              m !== null && ((x = Lo(p, m)), x != null && _.push(zo(p, x, v)))),
            w)
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
                ((w = Ar(y)), y !== w || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = u)),
          g !== y)
        ) {
          if (
            ((_ = ah),
            (x = 'onMouseLeave'),
            (m = 'onMouseEnter'),
            (p = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((_ = lh),
              (x = 'onPointerLeave'),
              (m = 'onPointerEnter'),
              (p = 'pointer')),
            (w = g == null ? d : ii(g)),
            (v = y == null ? d : ii(y)),
            (d = new _(x, p + 'leave', g, n, c)),
            (d.target = w),
            (d.relatedTarget = v),
            (x = null),
            dr(c) === u &&
              ((_ = new _(m, p + 'enter', y, n, c)),
              (_.target = v),
              (_.relatedTarget = w),
              (x = _)),
            (w = x),
            g && y)
          )
            t: {
              for (_ = g, m = y, p = 0, v = _; v; v = Wr(v)) p++
              for (v = 0, x = m; x; x = Wr(x)) v++
              for (; 0 < p - v; ) (_ = Wr(_)), p--
              for (; 0 < v - p; ) (m = Wr(m)), v--
              for (; p--; ) {
                if (_ === m || (m !== null && _ === m.alternate)) break t
                ;(_ = Wr(_)), (m = Wr(m))
              }
              _ = null
            }
          else _ = null
          g !== null && _h(f, d, g, _, !1),
            y !== null && w !== null && _h(f, w, y, _, !0)
        }
      }
      e: {
        if (
          ((d = u ? ii(u) : window),
          (g = d.nodeName && d.nodeName.toLowerCase()),
          g === 'select' || (g === 'input' && d.type === 'file'))
        )
          var b = fw
        else if (dh(d))
          if (Rg) b = vw
          else {
            b = hw
            var C = pw
          }
        else
          (g = d.nodeName) &&
            g.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (b = mw)
        if (b && (b = b(e, u))) {
          Ig(f, b, n, c)
          break e
        }
        C && C(e, d, u),
          e === 'focusout' &&
            (C = d._wrapperState) &&
            C.controlled &&
            d.type === 'number' &&
            xc(d, 'number', d.value)
      }
      switch (((C = u ? ii(u) : window), e)) {
        case 'focusin':
          ;(dh(C) || C.contentEditable === 'true') &&
            ((ni = C), (Lc = u), (go = null))
          break
        case 'focusout':
          go = Lc = ni = null
          break
        case 'mousedown':
          Ac = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(Ac = !1), vh(f, n, c)
          break
        case 'selectionchange':
          if (_w) break
        case 'keydown':
        case 'keyup':
          vh(f, n, c)
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
          ? Lg(e, n) && (E = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (E = 'onCompositionStart')
      E &&
        (Og &&
          n.locale !== 'ko' &&
          (ti || E !== 'onCompositionStart'
            ? E === 'onCompositionEnd' && ti && (S = Ng())
            : ((Dn = c),
              (Mf = 'value' in Dn ? Dn.value : Dn.textContent),
              (ti = !0))),
        (C = $s(u, E)),
        0 < C.length &&
          ((E = new sh(E, e, null, n, c)),
          f.push({ event: E, listeners: C }),
          S ? (E.data = S) : ((S = Ag(n)), S !== null && (E.data = S)))),
        (S = sw ? lw(e, n) : uw(e, n)) &&
          ((u = $s(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new sh('onBeforeInput', 'beforeinput', null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = S)))
    }
    Ug(f, t)
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
function _h(e, t, n, r, i) {
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
var Sw = /\r\n?/g,
  Cw = /\u0000|\uFFFD/g
function wh(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Sw,
      `
`
    )
    .replace(Cw, '')
}
function $a(e, t, n) {
  if (((t = wh(t)), wh(e) !== t && n)) throw Error(H(425))
}
function Ds() {}
var Ic = null,
  Rc = null
function Fc(e, t) {
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
  Ew = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  xh = typeof Promise == 'function' ? Promise : void 0,
  Tw =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof xh < 'u'
      ? function (e) {
          return xh.resolve(null).then(e).catch(kw)
        }
      : $c
function kw(e) {
  setTimeout(function () {
    throw e
  })
}
function bu(e, t) {
  var n = t,
    r = 0
  do {
    var i = n.nextSibling
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(i), Ro(t)
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = i
  } while (n)
  Ro(t)
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
function bh(e) {
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
  Zt = '__reactFiber$' + Di,
  Vo = '__reactProps$' + Di,
  xn = '__reactContainer$' + Di,
  Dc = '__reactEvents$' + Di,
  jw = '__reactListeners$' + Di,
  Pw = '__reactHandles$' + Di
function dr(e) {
  var t = e[Zt]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[xn] || n[Zt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = bh(e); e !== null; ) {
          if ((n = e[Zt])) return n
          e = bh(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function fa(e) {
  return (
    (e = e[Zt] || e[xn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function ii(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(H(33))
}
function Sl(e) {
  return e[Vo] || null
}
var zc = [],
  oi = -1
function ir(e) {
  return { current: e }
}
function ce(e) {
  0 > oi || ((e.current = zc[oi]), (zc[oi] = null), oi--)
}
function le(e, t) {
  oi++, (zc[oi] = e.current), (e.current = t)
}
var er = {},
  Be = ir(er),
  Ze = ir(!1),
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
function Je(e) {
  return (e = e.childContextTypes), e != null
}
function zs() {
  ce(Ze), ce(Be)
}
function Sh(e, t, n) {
  if (Be.current !== er) throw Error(H(168))
  le(Be, t), le(Ze, n)
}
function Qg(e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n
  r = r.getChildContext()
  for (var i in r) if (!(i in t)) throw Error(H(108, p2(e) || 'Unknown', i))
  return me({}, n, r)
}
function Vs(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || er),
    (xr = Be.current),
    le(Be, e),
    le(Ze, Ze.current),
    !0
  )
}
function Ch(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(H(169))
  n
    ? ((e = Qg(e, t, xr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ce(Ze),
      ce(Be),
      le(Be, e))
    : ce(Ze),
    le(Ze, n)
}
var hn = null,
  Cl = !1,
  Su = !1
function Kg(e) {
  hn === null ? (hn = [e]) : hn.push(e)
}
function Mw(e) {
  ;(Cl = !0), Kg(e)
}
function or() {
  if (!Su && hn !== null) {
    Su = !0
    var e = 0,
      t = ie
    try {
      var n = hn
      for (ie = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(hn = null), (Cl = !1)
    } catch (i) {
      throw (hn !== null && (hn = hn.slice(e + 1)), wg(Tf, or), i)
    } finally {
      ;(ie = t), (Su = !1)
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
  vn = 1,
  gn = ''
function sr(e, t) {
  ;(ai[si++] = Hs), (ai[si++] = Bs), (Bs = e), (Hs = t)
}
function Xg(e, t, n) {
  ;(xt[bt++] = vn), (xt[bt++] = gn), (xt[bt++] = br), (br = e)
  var r = vn
  e = gn
  var i = 32 - zt(r) - 1
  ;(r &= ~(1 << i)), (n += 1)
  var o = 32 - zt(t) + i
  if (30 < o) {
    var a = i - (i % 5)
    ;(o = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (i -= a),
      (vn = (1 << (32 - zt(t) + i)) | (n << i) | r),
      (gn = o + e)
  } else (vn = (1 << o) | (n << i) | r), (gn = e)
}
function If(e) {
  e.return !== null && (sr(e, 1), Xg(e, 1, 0))
}
function Rf(e) {
  for (; e === Bs; )
    (Bs = ai[--si]), (ai[si] = null), (Hs = ai[--si]), (ai[si] = null)
  for (; e === br; )
    (br = xt[--bt]),
      (xt[bt] = null),
      (gn = xt[--bt]),
      (xt[bt] = null),
      (vn = xt[--bt]),
      (xt[bt] = null)
}
var ft = null,
  ut = null,
  de = !1,
  $t = null
function Yg(e, t) {
  var n = St(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function Eh(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ft = e), (ut = Qn(t.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ft = e), (ut = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = br !== null ? { id: vn, overflow: gn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824
            }),
            (n = St(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ft = e),
            (ut = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function Vc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Bc(e) {
  if (de) {
    var t = ut
    if (t) {
      var n = t
      if (!Eh(e, t)) {
        if (Vc(e)) throw Error(H(418))
        t = Qn(n.nextSibling)
        var r = ft
        t && Eh(e, t)
          ? Yg(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (de = !1), (ft = e))
      }
    } else {
      if (Vc(e)) throw Error(H(418))
      ;(e.flags = (e.flags & -4097) | 2), (de = !1), (ft = e)
    }
  }
}
function Th(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  ft = e
}
function Da(e) {
  if (e !== ft) return !1
  if (!de) return Th(e), (de = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Fc(e.type, e.memoizedProps))),
    t && (t = ut))
  ) {
    if (Vc(e)) throw (Zg(), Error(H(418)))
    for (; t; ) Yg(e, t), (t = Qn(t.nextSibling))
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
              ut = Qn(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      ut = null
    }
  } else ut = ft ? Qn(e.stateNode.nextSibling) : null
  return !0
}
function Zg() {
  for (var e = ut; e; ) e = Qn(e.nextSibling)
}
function Ti() {
  ;(ut = ft = null), (de = !1)
}
function Ff(e) {
  $t === null ? ($t = [e]) : $t.push(e)
}
var Nw = jn.ReactCurrentBatchConfig
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
    return (m = Zn(m, p)), (m.index = 0), (m.sibling = null), m
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
  function s(m, p, v, x) {
    return p === null || p.tag !== 6
      ? ((p = Mu(v, m.mode, x)), (p.return = m), p)
      : ((p = i(p, v)), (p.return = m), p)
  }
  function l(m, p, v, x) {
    var b = v.type
    return b === ei
      ? c(m, p, v.props.children, x, v.key)
      : p !== null &&
        (p.elementType === b ||
          (typeof b == 'object' &&
            b !== null &&
            b.$$typeof === Ln &&
            kh(b) === p.type))
      ? ((x = i(p, v.props)), (x.ref = Ji(m, p, v)), (x.return = m), x)
      : ((x = ws(v.type, v.key, v.props, null, m.mode, x)),
        (x.ref = Ji(m, p, v)),
        (x.return = m),
        x)
  }
  function u(m, p, v, x) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== v.containerInfo ||
      p.stateNode.implementation !== v.implementation
      ? ((p = Nu(v, m.mode, x)), (p.return = m), p)
      : ((p = i(p, v.children || [])), (p.return = m), p)
  }
  function c(m, p, v, x, b) {
    return p === null || p.tag !== 7
      ? ((p = _r(v, m.mode, x, b)), (p.return = m), p)
      : ((p = i(p, v)), (p.return = m), p)
  }
  function f(m, p, v) {
    if ((typeof p == 'string' && p !== '') || typeof p == 'number')
      return (p = Mu('' + p, m.mode, v)), (p.return = m), p
    if (typeof p == 'object' && p !== null) {
      switch (p.$$typeof) {
        case Pa:
          return (
            (v = ws(p.type, p.key, p.props, null, m.mode, v)),
            (v.ref = Ji(m, null, p)),
            (v.return = m),
            v
          )
        case Jr:
          return (p = Nu(p, m.mode, v)), (p.return = m), p
        case Ln:
          var x = p._init
          return f(m, x(p._payload), v)
      }
      if (so(p) || Qi(p)) return (p = _r(p, m.mode, v, null)), (p.return = m), p
      za(m, p)
    }
    return null
  }
  function d(m, p, v, x) {
    var b = p !== null ? p.key : null
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return b !== null ? null : s(m, p, '' + v, x)
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case Pa:
          return v.key === b ? l(m, p, v, x) : null
        case Jr:
          return v.key === b ? u(m, p, v, x) : null
        case Ln:
          return (b = v._init), d(m, p, b(v._payload), x)
      }
      if (so(v) || Qi(v)) return b !== null ? null : c(m, p, v, x, null)
      za(m, v)
    }
    return null
  }
  function g(m, p, v, x, b) {
    if ((typeof x == 'string' && x !== '') || typeof x == 'number')
      return (m = m.get(v) || null), s(p, m, '' + x, b)
    if (typeof x == 'object' && x !== null) {
      switch (x.$$typeof) {
        case Pa:
          return (m = m.get(x.key === null ? v : x.key) || null), l(p, m, x, b)
        case Jr:
          return (m = m.get(x.key === null ? v : x.key) || null), u(p, m, x, b)
        case Ln:
          var C = x._init
          return g(m, p, v, C(x._payload), b)
      }
      if (so(x) || Qi(x)) return (m = m.get(v) || null), c(p, m, x, b, null)
      za(p, x)
    }
    return null
  }
  function y(m, p, v, x) {
    for (
      var b = null, C = null, S = p, E = (p = 0), T = null;
      S !== null && E < v.length;
      E++
    ) {
      S.index > E ? ((T = S), (S = null)) : (T = S.sibling)
      var k = d(m, S, v[E], x)
      if (k === null) {
        S === null && (S = T)
        break
      }
      e && S && k.alternate === null && t(m, S),
        (p = o(k, p, E)),
        C === null ? (b = k) : (C.sibling = k),
        (C = k),
        (S = T)
    }
    if (E === v.length) return n(m, S), de && sr(m, E), b
    if (S === null) {
      for (; E < v.length; E++)
        (S = f(m, v[E], x)),
          S !== null &&
            ((p = o(S, p, E)), C === null ? (b = S) : (C.sibling = S), (C = S))
      return de && sr(m, E), b
    }
    for (S = r(m, S); E < v.length; E++)
      (T = g(S, m, E, v[E], x)),
        T !== null &&
          (e && T.alternate !== null && S.delete(T.key === null ? E : T.key),
          (p = o(T, p, E)),
          C === null ? (b = T) : (C.sibling = T),
          (C = T))
    return (
      e &&
        S.forEach(function (M) {
          return t(m, M)
        }),
      de && sr(m, E),
      b
    )
  }
  function _(m, p, v, x) {
    var b = Qi(v)
    if (typeof b != 'function') throw Error(H(150))
    if (((v = b.call(v)), v == null)) throw Error(H(151))
    for (
      var C = (b = null), S = p, E = (p = 0), T = null, k = v.next();
      S !== null && !k.done;
      E++, k = v.next()
    ) {
      S.index > E ? ((T = S), (S = null)) : (T = S.sibling)
      var M = d(m, S, k.value, x)
      if (M === null) {
        S === null && (S = T)
        break
      }
      e && S && M.alternate === null && t(m, S),
        (p = o(M, p, E)),
        C === null ? (b = M) : (C.sibling = M),
        (C = M),
        (S = T)
    }
    if (k.done) return n(m, S), de && sr(m, E), b
    if (S === null) {
      for (; !k.done; E++, k = v.next())
        (k = f(m, k.value, x)),
          k !== null &&
            ((p = o(k, p, E)), C === null ? (b = k) : (C.sibling = k), (C = k))
      return de && sr(m, E), b
    }
    for (S = r(m, S); !k.done; E++, k = v.next())
      (k = g(S, m, E, k.value, x)),
        k !== null &&
          (e && k.alternate !== null && S.delete(k.key === null ? E : k.key),
          (p = o(k, p, E)),
          C === null ? (b = k) : (C.sibling = k),
          (C = k))
    return (
      e &&
        S.forEach(function (L) {
          return t(m, L)
        }),
      de && sr(m, E),
      b
    )
  }
  function w(m, p, v, x) {
    if (
      (typeof v == 'object' &&
        v !== null &&
        v.type === ei &&
        v.key === null &&
        (v = v.props.children),
      typeof v == 'object' && v !== null)
    ) {
      switch (v.$$typeof) {
        case Pa:
          e: {
            for (var b = v.key, C = p; C !== null; ) {
              if (C.key === b) {
                if (((b = v.type), b === ei)) {
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
                    b.$$typeof === Ln &&
                    kh(b) === C.type)
                ) {
                  n(m, C.sibling),
                    (p = i(C, v.props)),
                    (p.ref = Ji(m, C, v)),
                    (p.return = m),
                    (m = p)
                  break e
                }
                n(m, C)
                break
              } else t(m, C)
              C = C.sibling
            }
            v.type === ei
              ? ((p = _r(v.props.children, m.mode, x, v.key)),
                (p.return = m),
                (m = p))
              : ((x = ws(v.type, v.key, v.props, null, m.mode, x)),
                (x.ref = Ji(m, p, v)),
                (x.return = m),
                (m = x))
          }
          return a(m)
        case Jr:
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
            ;(p = Nu(v, m.mode, x)), (p.return = m), (m = p)
          }
          return a(m)
        case Ln:
          return (C = v._init), w(m, p, C(v._payload), x)
      }
      if (so(v)) return y(m, p, v, x)
      if (Qi(v)) return _(m, p, v, x)
      za(m, v)
    }
    return (typeof v == 'string' && v !== '') || typeof v == 'number'
      ? ((v = '' + v),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = i(p, v)), (p.return = m), (m = p))
          : (n(m, p), (p = Mu(v, m.mode, x)), (p.return = m), (m = p)),
        a(m))
      : n(m, p)
  }
  return w
}
var ki = Jg(!0),
  e0 = Jg(!1),
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
function Hc(e, t, n) {
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
      (e.lanes & t && (Ye = !0), (e.firstContext = null))
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
function t0(e, t, n, r) {
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
function jh(e, t) {
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
function Ph(e, t, n) {
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
      t = (t = t.documentElement) ? t.namespaceURI : Sc(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Sc(t, e))
  }
  ce(nn), le(nn, t)
}
function ji() {
  ce(nn), ce(Bo), ce(Ho)
}
function r0(e) {
  pr(Ho.current)
  var t = pr(nn.current),
    n = Sc(t, e.type)
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
var Cu = []
function Wf() {
  for (var e = 0; e < Cu.length; e++) Cu[e]._workInProgressVersionPrimary = null
  Cu.length = 0
}
var ms = jn.ReactCurrentDispatcher,
  Eu = jn.ReactCurrentBatchConfig,
  Sr = 0,
  he = null,
  be = null,
  Te = null,
  Qs = !1,
  yo = !1,
  qo = 0,
  Ow = 0
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
    (ms.current = e === null || e.memoizedState === null ? Rw : Fw),
    (e = n(r, i)),
    yo)
  ) {
    o = 0
    do {
      if (((yo = !1), (qo = 0), 25 <= o)) throw Error(H(301))
      ;(o += 1),
        (Te = be = null),
        (t.updateQueue = null),
        (ms.current = $w),
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
function Xt() {
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
      Wt(r, t.memoizedState) || (Ye = !0),
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
    Wt(o, t.memoizedState) || (Ye = !0),
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
    (o && ((r.memoizedState = i), (Ye = !0)),
    (r = r.queue),
    Kf(l0.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Te !== null && Te.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Uo(9, s0.bind(null, n, r, i, t), void 0, null),
      ke === null)
    )
      throw Error(H(349))
    Sr & 30 || a0(n, t, i)
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
  var t = bn(e, 1)
  t !== null && Vt(t, e, 1, -1)
}
function Mh(e) {
  var t = Xt()
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
    (e = e.dispatch = Iw.bind(null, he, e)),
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
function d0() {
  return Pt().memoizedState
}
function vs(e, t, n, r) {
  var i = Xt()
  ;(he.flags |= e),
    (i.memoizedState = Uo(1 | t, n, void 0, r === void 0 ? null : r))
}
function El(e, t, n, r) {
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
function Nh(e, t) {
  return vs(8390656, 8, e, t)
}
function Kf(e, t) {
  return El(2048, 8, e, t)
}
function f0(e, t) {
  return El(4, 2, e, t)
}
function p0(e, t) {
  return El(4, 4, e, t)
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
    (n = n != null ? n.concat([e]) : null), El(4, 4, h0.bind(null, t, e), n)
  )
}
function Xf() {}
function v0(e, t) {
  var n = Pt()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Uf(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e)
}
function g0(e, t) {
  var n = Pt()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Uf(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function y0(e, t, n) {
  return Sr & 21
    ? (Wt(n, t) || ((n = Sg()), (he.lanes |= n), (Cr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ye = !0)), (e.memoizedState = n))
}
function Lw(e, t) {
  var n = ie
  ;(ie = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = Eu.transition
  Eu.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(ie = n), (Eu.transition = r)
  }
}
function _0() {
  return Pt().memoizedState
}
function Aw(e, t, n) {
  var r = Yn(e)
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }),
    w0(e))
  )
    x0(t, n)
  else if (((n = t0(e, t, n, r)), n !== null)) {
    var i = Ue()
    Vt(n, e, r, i), b0(n, t, r)
  }
}
function Iw(e, t, n) {
  var r = Yn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (w0(e)) x0(t, i)
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
    ;(n = t0(e, t, i, r)),
      n !== null && ((i = Ue()), Vt(n, e, r, i), b0(n, t, r))
  }
}
function w0(e) {
  var t = e.alternate
  return e === he || (t !== null && t === he)
}
function x0(e, t) {
  yo = Qs = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function b0(e, t, n) {
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
  Rw = {
    readContext: jt,
    useCallback: function (e, t) {
      return (Xt().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: jt,
    useEffect: Nh,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        vs(4194308, 4, h0.bind(null, t, e), n)
      )
    },
    useLayoutEffect: function (e, t) {
      return vs(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return vs(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = Xt()
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      )
    },
    useReducer: function (e, t, n) {
      var r = Xt()
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
        (e = e.dispatch = Aw.bind(null, he, e)),
        [r.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = Xt()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: Mh,
    useDebugValue: Xf,
    useDeferredValue: function (e) {
      return (Xt().memoizedState = e)
    },
    useTransition: function () {
      var e = Mh(!1),
        t = e[0]
      return (e = Lw.bind(null, e[1])), (Xt().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = he,
        i = Xt()
      if (de) {
        if (n === void 0) throw Error(H(407))
        n = n()
      } else {
        if (((n = t()), ke === null)) throw Error(H(349))
        Sr & 30 || a0(r, t, n)
      }
      i.memoizedState = n
      var o = { value: n, getSnapshot: t }
      return (
        (i.queue = o),
        Nh(l0.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Uo(9, s0.bind(null, r, o, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = Xt(),
        t = ke.identifierPrefix
      if (de) {
        var n = gn,
          r = vn
        ;(n = (r & ~(1 << (32 - zt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = qo++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = Ow++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1
  },
  Fw = {
    readContext: jt,
    useCallback: v0,
    useContext: jt,
    useEffect: Kf,
    useImperativeHandle: m0,
    useInsertionEffect: f0,
    useLayoutEffect: p0,
    useMemo: g0,
    useReducer: Tu,
    useRef: d0,
    useState: function () {
      return Tu(Wo)
    },
    useDebugValue: Xf,
    useDeferredValue: function (e) {
      var t = Pt()
      return y0(t, be.memoizedState, e)
    },
    useTransition: function () {
      var e = Tu(Wo)[0],
        t = Pt().memoizedState
      return [e, t]
    },
    useMutableSource: i0,
    useSyncExternalStore: o0,
    useId: _0,
    unstable_isNewReconciler: !1
  },
  $w = {
    readContext: jt,
    useCallback: v0,
    useContext: jt,
    useEffect: Kf,
    useImperativeHandle: m0,
    useInsertionEffect: f0,
    useLayoutEffect: p0,
    useMemo: g0,
    useReducer: ku,
    useRef: d0,
    useState: function () {
      return ku(Wo)
    },
    useDebugValue: Xf,
    useDeferredValue: function (e) {
      var t = Pt()
      return be === null ? (t.memoizedState = e) : y0(t, be.memoizedState, e)
    },
    useTransition: function () {
      var e = ku(Wo)[0],
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
function qc(e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : me({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Tl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ar(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = Ue(),
      i = Yn(e),
      o = yn(r, i)
    ;(o.payload = t),
      n != null && (o.callback = n),
      (t = Kn(e, o, i)),
      t !== null && (Vt(t, e, i, r), hs(t, e, i))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = Ue(),
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
    var n = Ue(),
      r = Yn(e),
      i = yn(n, r)
    ;(i.tag = 2),
      t != null && (i.callback = t),
      (t = Kn(e, i, r)),
      t !== null && (Vt(t, e, r, n), hs(t, e, r))
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
    i = er,
    o = t.contextType
  return (
    typeof o == 'object' && o !== null
      ? (o = jt(o))
      : ((i = Je(t) ? xr : Be.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Ei(e, i) : er)),
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
function Lh(e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Tl.enqueueReplaceState(t, t.state, null)
}
function Wc(e, t, n, r) {
  var i = e.stateNode
  ;(i.props = n), (i.state = e.memoizedState), (i.refs = {}), Bf(e)
  var o = t.contextType
  typeof o == 'object' && o !== null
    ? (i.context = jt(o))
    : ((o = Je(t) ? xr : Be.current), (i.context = Ei(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (qc(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Tl.enqueueReplaceState(i, i.state, null),
      Us(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308)
}
function Pi(e, t) {
  try {
    var n = '',
      r = t
    do (n += f2(r)), (r = r.return)
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
function ju(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function Uc(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var Dw = typeof WeakMap == 'function' ? WeakMap : Map
function C0(e, t, n) {
  ;(n = yn(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = function () {
      Ys || ((Ys = !0), (nd = r)), Uc(e, t)
    }),
    n
  )
}
function E0(e, t, n) {
  ;(n = yn(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var i = t.value
    ;(n.payload = function () {
      return r(i)
    }),
      (n.callback = function () {
        Uc(e, t)
      })
  }
  var o = e.stateNode
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        Uc(e, t),
          typeof r != 'function' &&
            (Xn === null ? (Xn = new Set([this])) : Xn.add(this))
        var a = t.stack
        this.componentDidCatch(t.value, { componentStack: a !== null ? a : '' })
      }),
    n
  )
}
function Ah(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new Dw()
    var i = new Set()
    r.set(t, i)
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i))
  i.has(n) || (i.add(n), (e = Jw.bind(null, e, t, n)), t.then(e, e))
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
function Rh(e, t, n, r, i) {
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
var zw = jn.ReactCurrentOwner,
  Ye = !1
function qe(e, t, n, r) {
  t.child = e === null ? e0(t, null, n, r) : ki(t, e.child, n, r)
}
function Fh(e, t, n, r, i) {
  n = n.render
  var o = t.ref
  return (
    yi(t, i),
    (r = Gf(e, t, n, r, o, i)),
    (n = Qf()),
    e !== null && !Ye
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Sn(e, t, i))
      : (de && n && If(t), (t.flags |= 1), qe(e, t, r, i), t.child)
  )
}
function $h(e, t, n, r, i) {
  if (e === null) {
    var o = n.type
    return typeof o == 'function' &&
      !ip(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), T0(e, t, o, r, i))
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
function T0(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps
    if ($o(o, r) && e.ref === t.ref)
      if (((Ye = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ye = !0)
      else return (t.lanes = e.lanes), Sn(e, t, i)
  }
  return Gc(e, t, n, r, i)
}
function k0(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        le(ci, st),
        (st |= n)
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
          le(ci, st),
          (st |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        le(ci, st),
        (st |= r)
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      le(ci, st),
      (st |= r)
  return qe(e, t, i, n), t.child
}
function j0(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function Gc(e, t, n, r, i) {
  var o = Je(n) ? xr : Be.current
  return (
    (o = Ei(t, o)),
    yi(t, i),
    (n = Gf(e, t, n, r, o, i)),
    (r = Qf()),
    e !== null && !Ye
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Sn(e, t, i))
      : (de && r && If(t), (t.flags |= 1), qe(e, t, n, i), t.child)
  )
}
function Dh(e, t, n, r, i) {
  if (Je(n)) {
    var o = !0
    Vs(t)
  } else o = !1
  if ((yi(t, i), t.stateNode === null))
    gs(e, t), S0(t, n, r), Wc(t, n, r, i), (r = !0)
  else if (e === null) {
    var a = t.stateNode,
      s = t.memoizedProps
    a.props = s
    var l = a.context,
      u = n.contextType
    typeof u == 'object' && u !== null
      ? (u = jt(u))
      : ((u = Je(n) ? xr : Be.current), (u = Ei(t, u)))
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == 'function' || typeof a.getSnapshotBeforeUpdate == 'function'
    f ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((s !== r || l !== u) && Lh(t, a, r, u)),
      (An = !1)
    var d = t.memoizedState
    ;(a.state = d),
      Us(t, r, a, i),
      (l = t.memoizedState),
      s !== r || d !== l || Ze.current || An
        ? (typeof c == 'function' && (qc(t, n, c, r), (l = t.memoizedState)),
          (s = An || Oh(t, n, s, r, d, l, u))
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
        ? (l = jt(l))
        : ((l = Je(n) ? xr : Be.current), (l = Ei(t, l)))
    var g = n.getDerivedStateFromProps
    ;(c =
      typeof g == 'function' ||
      typeof a.getSnapshotBeforeUpdate == 'function') ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((s !== f || d !== l) && Lh(t, a, r, l)),
      (An = !1),
      (d = t.memoizedState),
      (a.state = d),
      Us(t, r, a, i)
    var y = t.memoizedState
    s !== f || d !== y || Ze.current || An
      ? (typeof g == 'function' && (qc(t, n, g, r), (y = t.memoizedState)),
        (u = An || Oh(t, n, u, r, d, y, l) || !1)
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
  return Qc(e, t, n, r, o, i)
}
function Qc(e, t, n, r, i, o) {
  j0(e, t)
  var a = (t.flags & 128) !== 0
  if (!r && !a) return i && Ch(t, n, !1), Sn(e, t, o)
  ;(r = t.stateNode), (zw.current = t)
  var s =
    a && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = ki(t, e.child, null, o)), (t.child = ki(t, null, s, o)))
      : qe(e, t, s, o),
    (t.memoizedState = r.state),
    i && Ch(t, n, !0),
    t.child
  )
}
function P0(e) {
  var t = e.stateNode
  t.pendingContext
    ? Sh(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Sh(e, t.context, !1),
    Hf(e, t.containerInfo)
}
function zh(e, t, n, r, i) {
  return Ti(), Ff(i), (t.flags |= 256), qe(e, t, n, r), t.child
}
var Kc = { dehydrated: null, treeContext: null, retryLane: 0 }
function Xc(e) {
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
      Bc(t),
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
                : (o = Pl(a, r, 0, null)),
              (e = _r(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Xc(n)),
              (t.memoizedState = Kc),
              e)
            : Yf(t, a))
    )
  if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
    return Vw(e, t, a, r, s, i, n)
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
          ? Xc(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions
            }),
      (o.memoizedState = a),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Kc),
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
    (t = Pl({ mode: 'visible', children: t }, e.mode, 0, null)),
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
function Vw(e, t, n, r, i, o, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ju(Error(H(422)))), Va(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Pl({ mode: 'visible', children: r.children }, i, 0, null)),
        (o = _r(o, i, a, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && ki(t, e.child, null, a),
        (t.child.memoizedState = Xc(a)),
        (t.memoizedState = Kc),
        o)
  if (!(t.mode & 1)) return Va(e, t, a, null)
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst
    return (r = s), (o = Error(H(419))), (r = ju(o, r, void 0)), Va(e, t, a, r)
  }
  if (((s = (a & e.childLanes) !== 0), Ye || s)) {
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
    return rp(), (r = ju(Error(H(421)))), Va(e, t, a, r)
  }
  return i.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = ex.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (ut = Qn(i.nextSibling)),
      (ft = t),
      (de = !0),
      ($t = null),
      e !== null &&
        ((xt[bt++] = vn),
        (xt[bt++] = gn),
        (xt[bt++] = br),
        (vn = e.id),
        (gn = e.overflow),
        (br = t)),
      (t = Yf(t, r.children)),
      (t.flags |= 4096),
      t)
}
function Vh(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), Hc(e.return, t, n)
}
function Pu(e, t, n, r, i) {
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
  if ((qe(e, t, r.children, n), (r = pe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Vh(e, n, t)
        else if (e.tag === 19) Vh(e, n, t)
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
          Pu(t, !1, i, n, o)
        break
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Gs(e) === null)) {
            t.child = i
            break
          }
          ;(e = i.sibling), (i.sibling = n), (n = i), (i = e)
        }
        Pu(t, !0, n, null, o)
        break
      case 'together':
        Pu(t, !1, null, null, void 0)
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
function Bw(e, t, n) {
  switch (t.tag) {
    case 3:
      P0(t), Ti()
      break
    case 5:
      r0(t)
      break
    case 1:
      Je(t.type) && Vs(t)
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
          ? M0(e, t, n)
          : (le(pe, pe.current & 1),
            (e = Sn(e, t, n)),
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
      return (t.lanes = 0), k0(e, t, n)
  }
  return Sn(e, t, n)
}
var O0, Yc, L0, A0
O0 = function (e, t) {
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
Yc = function () {}
L0 = function (e, t, n, r) {
  var i = e.memoizedProps
  if (i !== r) {
    ;(e = t.stateNode), pr(nn.current)
    var o = null
    switch (n) {
      case 'input':
        ;(i = _c(e, i)), (r = _c(e, r)), (o = [])
        break
      case 'select':
        ;(i = me({}, i, { value: void 0 })),
          (r = me({}, r, { value: void 0 })),
          (o = [])
        break
      case 'textarea':
        ;(i = bc(e, i)), (r = bc(e, r)), (o = [])
        break
      default:
        typeof i.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Ds)
    }
    Cc(n, r)
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
A0 = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
function eo(e, t) {
  if (!de)
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
function Hw(e, t, n) {
  var r = t.pendingProps
  switch ((Rf(t), t.tag)) {
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
      return Je(t.type) && zs(), $e(t), null
    case 3:
      return (
        (r = t.stateNode),
        ji(),
        ce(Ze),
        ce(Be),
        Wf(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Da(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), $t !== null && (od($t), ($t = null)))),
        Yc(e, t),
        $e(t),
        null
      )
    case 5:
      qf(t)
      var i = pr(Ho.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        L0(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(H(166))
          return $e(t), null
        }
        if (((e = pr(nn.current)), Da(t))) {
          ;(r = t.stateNode), (n = t.type)
          var o = t.memoizedProps
          switch (((r[Zt] = t), (r[Vo] = o), (e = (t.mode & 1) !== 0), n)) {
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
              Xp(r, o), ue('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!o.multiple }),
                ue('invalid', r)
              break
            case 'textarea':
              Zp(r, o), ue('invalid', r)
          }
          Cc(n, o), (i = null)
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
              Ma(r), Yp(r, o, !0)
              break
            case 'textarea':
              Ma(r), Jp(r)
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
            (e[Zt] = t),
            (e[Vo] = r),
            O0(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((a = Ec(n, r)), n)) {
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
                Xp(e, r), (i = _c(e, r)), ue('invalid', e)
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
                Zp(e, r), (i = bc(e, r)), ue('invalid', e)
                break
              default:
                i = r
            }
            Cc(n, i), (s = i)
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
                    (No.hasOwnProperty(o)
                      ? l != null && o === 'onScroll' && ue('scroll', e)
                      : l != null && xf(e, o, l, a))
              }
            switch (n) {
              case 'input':
                Ma(e), Yp(e, r, !1)
                break
              case 'textarea':
                Ma(e), Jp(e)
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
      if (e && t.stateNode != null) A0(e, t, e.memoizedProps, r)
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(H(166))
        if (((n = pr(Ho.current)), pr(nn.current), Da(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Zt] = t),
            (o = r.nodeValue !== n) && ((e = ft), e !== null))
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
            (r[Zt] = t),
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
        if (de && ut !== null && t.mode & 1 && !(t.flags & 128))
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
            o[Zt] = t
          } else
            Ti(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          $e(t), (o = !1)
        } else $t !== null && (od($t), ($t = null)), (o = !0)
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
        ji(), Yc(e, t), e === null && Do(t.stateNode.containerInfo), $e(t), null
      )
    case 10:
      return zf(t.type._context), $e(t), null
    case 17:
      return Je(t.type) && zs(), $e(t), null
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
              o.tail === null && o.tailMode === 'hidden' && !a.alternate && !de)
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
          ? st & 1073741824 && ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
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
function qw(e, t) {
  switch ((Rf(t), t.tag)) {
    case 1:
      return (
        Je(t.type) && zs(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        ji(),
        ce(Ze),
        ce(Be),
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
  Ve = !1,
  Ww = typeof WeakSet == 'function' ? WeakSet : Set,
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
function Zc(e, t, n) {
  try {
    n()
  } catch (r) {
    ve(e, t, r)
  }
}
var Bh = !1
function Uw(e, t) {
  if (((Ic = Rs), (e = Dg()), Af(e))) {
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
  for (Rc = { focusedElem: e, selectionRange: n }, Rs = !1, W = t; W !== null; )
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
                    w = y.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? _ : At(t.type, _),
                      w
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
        } catch (x) {
          ve(t, t.return, x)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (W = e)
          break
        }
        W = t.return
      }
  return (y = Bh), (Bh = !1), y
}
function _o(e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next)
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy
        ;(i.destroy = void 0), o !== void 0 && Zc(t, n, o)
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
function Jc(e) {
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
function I0(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), I0(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Zt], delete t[Vo], delete t[Dc], delete t[jw], delete t[Pw])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function R0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Hh(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || R0(e.return)) return null
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
function ed(e, t, n) {
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
    for (ed(e, t, n), e = e.sibling; e !== null; ) ed(e, t, n), (e = e.sibling)
}
function td(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null))
    for (td(e, t, n), e = e.sibling; e !== null; ) td(e, t, n), (e = e.sibling)
}
var Ne = null,
  It = !1
function Mn(e, t, n) {
  for (n = n.child; n !== null; ) F0(e, t, n), (n = n.sibling)
}
function F0(e, t, n) {
  if (tn && typeof tn.onCommitFiberUnmount == 'function')
    try {
      tn.onCommitFiberUnmount(_l, n)
    } catch {}
  switch (n.tag) {
    case 5:
      Ve || ui(n, t)
    case 6:
      var r = Ne,
        i = It
      ;(Ne = null),
        Mn(e, t, n),
        (Ne = r),
        (It = i),
        Ne !== null &&
          (It
            ? ((e = Ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ne.removeChild(n.stateNode))
      break
    case 18:
      Ne !== null &&
        (It
          ? ((e = Ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? bu(e.parentNode, n)
              : e.nodeType === 1 && bu(e, n),
            Ro(e))
          : bu(Ne, n.stateNode))
      break
    case 4:
      ;(r = Ne),
        (i = It),
        (Ne = n.stateNode.containerInfo),
        (It = !0),
        Mn(e, t, n),
        (Ne = r),
        (It = i)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ve &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next
        do {
          var o = i,
            a = o.destroy
          ;(o = o.tag),
            a !== void 0 && (o & 2 || o & 4) && Zc(n, t, a),
            (i = i.next)
        } while (i !== r)
      }
      Mn(e, t, n)
      break
    case 1:
      if (
        !Ve &&
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
        ? ((Ve = (r = Ve) || n.memoizedState !== null), Mn(e, t, n), (Ve = r))
        : Mn(e, t, n)
      break
    default:
      Mn(e, t, n)
  }
}
function qh(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new Ww()),
      t.forEach(function (r) {
        var i = tx.bind(null, e, r)
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
              ;(Ne = s.stateNode), (It = !1)
              break e
            case 3:
              ;(Ne = s.stateNode.containerInfo), (It = !0)
              break e
            case 4:
              ;(Ne = s.stateNode.containerInfo), (It = !0)
              break e
          }
          s = s.return
        }
        if (Ne === null) throw Error(H(160))
        F0(o, a, i), (Ne = null), (It = !1)
        var l = i.alternate
        l !== null && (l.return = null), (i.return = null)
      } catch (u) {
        ve(i, t, u)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) $0(t, e), (t = t.sibling)
}
function $0(e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ot(t, e), Kt(e), r & 4)) {
        try {
          _o(3, e, e.return), kl(3, e)
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
            s === 'input' && o.type === 'radio' && o.name != null && ag(i, o),
              Ec(s, a)
            var u = Ec(s, o)
            for (a = 0; a < l.length; a += 2) {
              var c = l[a],
                f = l[a + 1]
              c === 'style'
                ? dg(i, f)
                : c === 'dangerouslySetInnerHTML'
                ? ug(i, f)
                : c === 'children'
                ? Oo(i, f)
                : xf(i, c, f, u)
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
          Ro(t.containerInfo)
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
        r & 4 && qh(e)
      break
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ve = (u = Ve) || c), Ot(t, e), (Ve = u)) : Ot(t, e),
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
                    Uh(f)
                    continue
                  }
              }
              g !== null ? ((g.return = d), (W = g)) : Uh(f)
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
      Ot(t, e), Kt(e), r & 4 && qh(e)
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
          if (R0(n)) {
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
          var o = Hh(e)
          td(e, o, i)
          break
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            s = Hh(e)
          ed(e, s, a)
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
function Gw(e, t, n) {
  ;(W = e), D0(e)
}
function D0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; W !== null; ) {
    var i = W,
      o = i.child
    if (i.tag === 22 && r) {
      var a = i.memoizedState !== null || Ba
      if (!a) {
        var s = i.alternate,
          l = (s !== null && s.memoizedState !== null) || Ve
        s = Ba
        var u = Ve
        if (((Ba = a), (Ve = l) && !u))
          for (W = i; W !== null; )
            (a = W),
              (l = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Gh(i)
                : l !== null
                ? ((l.return = a), (W = l))
                : Gh(i)
        for (; o !== null; ) (W = o), D0(o), (o = o.sibling)
        ;(W = i), (Ba = s), (Ve = u)
      }
      Wh(e)
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (W = o)) : Wh(e)
  }
}
function Wh(e) {
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
              Ve || kl(5, t)
              break
            case 1:
              var r = t.stateNode
              if (t.flags & 4 && !Ve)
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
              o !== null && Ph(t, o, r)
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
                Ph(t, a, n)
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
                    f !== null && Ro(f)
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
        Ve || (t.flags & 512 && Jc(t))
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
function Uh(e) {
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
function Gh(e) {
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
            Jc(t)
          } catch (l) {
            ve(t, o, l)
          }
          break
        case 5:
          var a = t.return
          try {
            Jc(t)
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
var Qw = Math.ceil,
  Xs = jn.ReactCurrentDispatcher,
  Zf = jn.ReactCurrentOwner,
  Et = jn.ReactCurrentBatchConfig,
  ne = 0,
  ke = null,
  we = null,
  Le = 0,
  st = 0,
  ci = ir(0),
  Se = 0,
  Go = null,
  Cr = 0,
  jl = 0,
  Jf = 0,
  wo = null,
  Xe = null,
  ep = 0,
  Mi = 1 / 0,
  pn = null,
  Ys = !1,
  nd = null,
  Xn = null,
  Ha = !1,
  zn = null,
  Zs = 0,
  xo = 0,
  rd = null,
  ys = -1,
  _s = 0
function Ue() {
  return ne & 6 ? ye() : ys !== -1 ? ys : (ys = ye())
}
function Yn(e) {
  return e.mode & 1
    ? ne & 2 && Le !== 0
      ? Le & -Le
      : Nw.transition !== null
      ? (_s === 0 && (_s = Sg()), _s)
      : ((e = ie),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Mg(e.type))),
        e)
    : 1
}
function Vt(e, t, n, r) {
  if (50 < xo) throw ((xo = 0), (rd = null), Error(H(185)))
  ca(e, n, r),
    (!(ne & 2) || e !== ke) &&
      (e === ke && (!(ne & 2) && (jl |= n), Se === 4 && Fn(e, Le)),
      et(e, r),
      n === 1 && ne === 0 && !(t.mode & 1) && ((Mi = ye() + 500), Cl && or()))
}
function et(e, t) {
  var n = e.callbackNode
  N2(e, t)
  var r = Is(e, e === ke ? Le : 0)
  if (r === 0)
    n !== null && nh(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && nh(n), t === 1))
      e.tag === 0 ? Mw(Qh.bind(null, e)) : Kg(Qh.bind(null, e)),
        Tw(function () {
          !(ne & 6) && or()
        }),
        (n = null)
    else {
      switch (Cg(r)) {
        case 1:
          n = Tf
          break
        case 4:
          n = xg
          break
        case 16:
          n = As
          break
        case 536870912:
          n = bg
          break
        default:
          n = As
      }
      n = G0(n, z0.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function z0(e, t) {
  if (((ys = -1), (_s = 0), ne & 6)) throw Error(H(327))
  var n = e.callbackNode
  if (_i() && e.callbackNode !== n) return null
  var r = Is(e, e === ke ? Le : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = Js(e, r)
  else {
    t = r
    var i = ne
    ne |= 2
    var o = B0()
    ;(ke !== e || Le !== t) && ((pn = null), (Mi = ye() + 500), yr(e, t))
    do
      try {
        Yw()
        break
      } catch (s) {
        V0(e, s)
      }
    while (!0)
    Df(),
      (Xs.current = o),
      (ne = i),
      we !== null ? (t = 0) : ((ke = null), (Le = 0), (t = Se))
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Mc(e)), i !== 0 && ((r = i), (t = id(e, i)))), t === 1)
    )
      throw ((n = Go), yr(e, 0), Fn(e, r), et(e, ye()), n)
    if (t === 6) Fn(e, r)
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Kw(i) &&
          ((t = Js(e, r)),
          t === 2 && ((o = Mc(e)), o !== 0 && ((r = o), (t = id(e, o)))),
          t === 1))
      )
        throw ((n = Go), yr(e, 0), Fn(e, r), et(e, ye()), n)
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(H(345))
        case 2:
          lr(e, Xe, pn)
          break
        case 3:
          if (
            (Fn(e, r), (r & 130023424) === r && ((t = ep + 500 - ye()), 10 < t))
          ) {
            if (Is(e, 0) !== 0) break
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Ue(), (e.pingedLanes |= e.suspendedLanes & i)
              break
            }
            e.timeoutHandle = $c(lr.bind(null, e, Xe, pn), t)
            break
          }
          lr(e, Xe, pn)
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
                : 1960 * Qw(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = $c(lr.bind(null, e, Xe, pn), r)
            break
          }
          lr(e, Xe, pn)
          break
        case 5:
          lr(e, Xe, pn)
          break
        default:
          throw Error(H(329))
      }
    }
  }
  return et(e, ye()), e.callbackNode === n ? z0.bind(null, e) : null
}
function id(e, t) {
  var n = wo
  return (
    e.current.memoizedState.isDehydrated && (yr(e, t).flags |= 256),
    (e = Js(e, t)),
    e !== 2 && ((t = Xe), (Xe = n), t !== null && od(t)),
    e
  )
}
function od(e) {
  Xe === null ? (Xe = e) : Xe.push.apply(Xe, e)
}
function Kw(e) {
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
      t &= ~jl,
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
function Qh(e) {
  if (ne & 6) throw Error(H(327))
  _i()
  var t = Is(e, 0)
  if (!(t & 1)) return et(e, ye()), null
  var n = Js(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = Mc(e)
    r !== 0 && ((t = r), (n = id(e, r)))
  }
  if (n === 1) throw ((n = Go), yr(e, 0), Fn(e, t), et(e, ye()), n)
  if (n === 6) throw Error(H(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    lr(e, Xe, pn),
    et(e, ye()),
    null
  )
}
function tp(e, t) {
  var n = ne
  ne |= 1
  try {
    return e(t)
  } finally {
    ;(ne = n), ne === 0 && ((Mi = ye() + 500), Cl && or())
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
  ;(st = ci.current), ce(ci)
}
function yr(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), Ew(n)), we !== null))
    for (n = we.return; n !== null; ) {
      var r = n
      switch ((Rf(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && zs()
          break
        case 3:
          ji(), ce(Ze), ce(Be), Wf()
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
    (Le = st = t),
    (Se = 0),
    (Go = null),
    (Jf = jl = Cr = 0),
    (Xe = wo = null),
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
function V0(e, t) {
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
          var g = Ih(a)
          if (g !== null) {
            ;(g.flags &= -257),
              Rh(g, a, s, o, t),
              g.mode & 1 && Ah(o, u, t),
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
              Ah(o, u, t), rp()
              break e
            }
            l = Error(H(426))
          }
        } else if (de && s.mode & 1) {
          var w = Ih(a)
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              Rh(w, a, s, o, t),
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
              var m = C0(o, l, t)
              jh(o, m)
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
                    (Xn === null || !Xn.has(v))))
              ) {
                ;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
                var x = E0(o, s, t)
                jh(o, x)
                break e
              }
          }
          o = o.return
        } while (o !== null)
      }
      q0(n)
    } catch (b) {
      ;(t = b), we === n && n !== null && (we = n = n.return)
      continue
    }
    break
  } while (!0)
}
function B0() {
  var e = Xs.current
  return (Xs.current = Ks), e === null ? Ks : e
}
function rp() {
  ;(Se === 0 || Se === 3 || Se === 2) && (Se = 4),
    ke === null || (!(Cr & 268435455) && !(jl & 268435455)) || Fn(ke, Le)
}
function Js(e, t) {
  var n = ne
  ne |= 2
  var r = B0()
  ;(ke !== e || Le !== t) && ((pn = null), yr(e, t))
  do
    try {
      Xw()
      break
    } catch (i) {
      V0(e, i)
    }
  while (!0)
  if ((Df(), (ne = n), (Xs.current = r), we !== null)) throw Error(H(261))
  return (ke = null), (Le = 0), Se
}
function Xw() {
  for (; we !== null; ) H0(we)
}
function Yw() {
  for (; we !== null && !b2(); ) H0(we)
}
function H0(e) {
  var t = U0(e.alternate, e, st)
  ;(e.memoizedProps = e.pendingProps),
    t === null ? q0(e) : (we = t),
    (Zf.current = null)
}
function q0(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = qw(n, t)), n !== null)) {
        ;(n.flags &= 32767), (we = n)
        return
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(Se = 6), (we = null)
        return
      }
    } else if (((n = Hw(n, t, st)), n !== null)) {
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
    ;(Et.transition = null), (ie = 1), Zw(e, t, n, r)
  } finally {
    ;(Et.transition = i), (ie = r)
  }
  return null
}
function Zw(e, t, n, r) {
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
    (O2(e, o),
    e === ke && ((we = ke = null), (Le = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ha ||
      ((Ha = !0),
      G0(As, function () {
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
      Uw(e, n),
      $0(n, e),
      yw(Rc),
      (Rs = !!Ic),
      (Rc = Ic = null),
      (e.current = n),
      Gw(n),
      S2(),
      (ne = s),
      (ie = a),
      (Et.transition = o)
  } else e.current = n
  if (
    (Ha && ((Ha = !1), (zn = e), (Zs = i)),
    (o = e.pendingLanes),
    o === 0 && (Xn = null),
    T2(n.stateNode),
    et(e, ye()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest })
  if (Ys) throw ((Ys = !1), (e = nd), (nd = null), e)
  return (
    Zs & 1 && e.tag !== 0 && _i(),
    (o = e.pendingLanes),
    o & 1 ? (e === rd ? xo++ : ((xo = 0), (rd = e))) : (xo = 0),
    or(),
    null
  )
}
function _i() {
  if (zn !== null) {
    var e = Cg(Zs),
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
                      if ((I0(c), c === u)) {
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
                    var w = _.sibling
                    ;(_.sibling = null), (_ = w)
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
              var x = s.sibling
              if (x !== null) {
                ;(x.return = s.return), (W = x)
                break e
              }
              W = s.return
            }
        }
        if (
          ((ne = i), or(), tn && typeof tn.onPostCommitFiberRoot == 'function')
        )
          try {
            tn.onPostCommitFiberRoot(_l, e)
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
function Kh(e, t, n) {
  ;(t = Pi(n, t)),
    (t = C0(e, t, 1)),
    (e = Kn(e, t, 1)),
    (t = Ue()),
    e !== null && (ca(e, 1, t), et(e, t))
}
function ve(e, t, n) {
  if (e.tag === 3) Kh(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Kh(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Xn === null || !Xn.has(r)))
        ) {
          ;(e = Pi(n, e)),
            (e = E0(t, e, 1)),
            (t = Kn(t, e, 1)),
            (e = Ue()),
            t !== null && (ca(t, 1, e), et(t, e))
          break
        }
      }
      t = t.return
    }
}
function Jw(e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = Ue()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ke === e &&
      (Le & n) === n &&
      (Se === 4 || (Se === 3 && (Le & 130023424) === Le && 500 > ye() - ep)
        ? yr(e, 0)
        : (Jf |= n)),
    et(e, t)
}
function W0(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = La), (La <<= 1), !(La & 130023424) && (La = 4194304))
      : (t = 1))
  var n = Ue()
  ;(e = bn(e, t)), e !== null && (ca(e, t, n), et(e, n))
}
function ex(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), W0(e, n)
}
function tx(e, t) {
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
    if (e.memoizedProps !== t.pendingProps || Ze.current) Ye = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ye = !1), Bw(e, t, n)
      Ye = !!(e.flags & 131072)
    }
  else (Ye = !1), de && t.flags & 1048576 && Xg(t, Hs, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      gs(e, t), (e = t.pendingProps)
      var i = Ei(t, Be.current)
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
            Je(r) ? ((o = !0), Vs(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Bf(t),
            (i.updater = Tl),
            (t.stateNode = i),
            (i._reactInternals = t),
            Wc(t, r, e, n),
            (t = Qc(null, t, r, !0, o, n)))
          : ((t.tag = 0), de && o && If(t), qe(null, t, i, n), (t = t.child)),
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
          (i = t.tag = rx(r)),
          (e = At(r, e)),
          i)
        ) {
          case 0:
            t = Gc(null, t, r, e, n)
            break e
          case 1:
            t = Dh(null, t, r, e, n)
            break e
          case 11:
            t = Fh(null, t, r, e, n)
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
        Gc(e, t, r, i, n)
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
            ;(i = Pi(Error(H(423)), t)), (t = zh(e, t, r, n, i))
            break e
          } else if (r !== i) {
            ;(i = Pi(Error(H(424)), t)), (t = zh(e, t, r, n, i))
            break e
          } else
            for (
              ut = Qn(t.stateNode.containerInfo.firstChild),
                ft = t,
                de = !0,
                $t = null,
                n = e0(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((Ti(), r === i)) {
            t = Sn(e, t, n)
            break e
          }
          qe(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        r0(t),
        e === null && Bc(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (a = i.children),
        Fc(r, i) ? (a = null) : o !== null && Fc(r, o) && (t.flags |= 32),
        j0(e, t),
        qe(e, t, a, n),
        t.child
      )
    case 6:
      return e === null && Bc(t), null
    case 13:
      return M0(e, t, n)
    case 4:
      return (
        Hf(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ki(t, null, r, n)) : qe(e, t, r, n),
        t.child
      )
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : At(r, i)),
        Fh(e, t, r, i, n)
      )
    case 7:
      return qe(e, t, t.pendingProps, n), t.child
    case 8:
      return qe(e, t, t.pendingProps.children, n), t.child
    case 12:
      return qe(e, t, t.pendingProps.children, n), t.child
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
            if (o.children === i.children && !Ze.current) {
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
                      Hc(o.return, n, t),
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
                  Hc(a, n, t),
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
        qe(e, t, i.children, n), (t = t.child)
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
        qe(e, t, r, n),
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
      return T0(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : At(r, i)),
        gs(e, t),
        (t.tag = 1),
        Je(r) ? ((e = !0), Vs(t)) : (e = !1),
        yi(t, n),
        S0(t, r, i),
        Wc(t, r, i, n),
        Qc(null, t, r, !0, e, n)
      )
    case 19:
      return N0(e, t, n)
    case 22:
      return k0(e, t, n)
  }
  throw Error(H(156, t.tag))
}
function G0(e, t) {
  return wg(e, t)
}
function nx(e, t, n, r) {
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
  return new nx(e, t, n, r)
}
function ip(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function rx(e) {
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
      case mc:
        return (e = St(12, n, t, i | 2)), (e.elementType = mc), (e.lanes = o), e
      case vc:
        return (e = St(13, n, t, i)), (e.elementType = vc), (e.lanes = o), e
      case gc:
        return (e = St(19, n, t, i)), (e.elementType = gc), (e.lanes = o), e
      case rg:
        return Pl(n, i, o, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case tg:
              a = 10
              break e
            case ng:
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
function Pl(e, t, n, r) {
  return (
    (e = St(22, e, r, t)),
    (e.elementType = rg),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function Mu(e, t, n) {
  return (e = St(6, e, null, t)), (e.lanes = n), e
}
function Nu(e, t, n) {
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
function ix(e, t, n, r, i) {
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
    (this.eventTimes = du(0)),
    (this.expirationTimes = du(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = du(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null)
}
function op(e, t, n, r, i, o, a, s, l) {
  return (
    (e = new ix(e, t, n, s, l)),
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
function ox(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: Jr,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n
  }
}
function Q0(e) {
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
          if (Je(t.type)) {
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
    if (Je(n)) return Qg(e, n, t)
  }
  return t
}
function K0(e, t, n, r, i, o, a, s, l) {
  return (
    (e = op(n, r, !0, e, i, o, a, s, l)),
    (e.context = Q0(null)),
    (n = e.current),
    (r = Ue()),
    (i = Yn(n)),
    (o = yn(r, i)),
    (o.callback = t ?? null),
    Kn(n, o, i),
    (e.current.lanes = i),
    ca(e, i, r),
    et(e, r),
    e
  )
}
function Ml(e, t, n, r) {
  var i = t.current,
    o = Ue(),
    a = Yn(i)
  return (
    (n = Q0(n)),
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
function Xh(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function ap(e, t) {
  Xh(e, t), (e = e.alternate) && Xh(e, t)
}
function ax() {
  return null
}
var X0 =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function sp(e) {
  this._internalRoot = e
}
Nl.prototype.render = sp.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(H(409))
  Ml(e, t, null, null)
}
Nl.prototype.unmount = sp.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    Er(function () {
      Ml(null, e, null, null)
    }),
      (t[xn] = null)
  }
}
function Nl(e) {
  this._internalRoot = e
}
Nl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = kg()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < Rn.length && t !== 0 && t < Rn[n].priority; n++);
    Rn.splice(n, 0, e), n === 0 && Pg(e)
  }
}
function lp(e) {
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
function Yh() {}
function sx(e, t, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var o = r
      r = function () {
        var u = el(a)
        o.call(u)
      }
    }
    var a = K0(t, r, e, 0, null, !1, !1, '', Yh)
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
  var l = op(e, 0, !1, null, null, !1, !1, '', Yh)
  return (
    (e._reactRootContainer = l),
    (e[xn] = l.current),
    Do(e.nodeType === 8 ? e.parentNode : e),
    Er(function () {
      Ml(t, l, n, r)
    }),
    l
  )
}
function Ll(e, t, n, r, i) {
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
    Ml(t, a, e, i)
  } else a = sx(n, t, e, i, r)
  return el(a)
}
Eg = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = lo(t.pendingLanes)
        n !== 0 &&
          (kf(t, n | 1), et(t, ye()), !(ne & 6) && ((Mi = ye() + 500), or()))
      }
      break
    case 13:
      Er(function () {
        var r = bn(e, 1)
        if (r !== null) {
          var i = Ue()
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
      var n = Ue()
      Vt(t, e, 134217728, n)
    }
    ap(e, 134217728)
  }
}
Tg = function (e) {
  if (e.tag === 13) {
    var t = Yn(e),
      n = bn(e, t)
    if (n !== null) {
      var r = Ue()
      Vt(n, e, t, r)
    }
    ap(e, t)
  }
}
kg = function () {
  return ie
}
jg = function (e, t) {
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
            var i = Sl(r)
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
      ;(t = n.value), t != null && hi(e, !!n.multiple, t, !1)
  }
}
hg = tp
mg = Er
var lx = { usingClientEntryPoint: !1, Events: [fa, ii, Sl, fg, pg, tp] },
  to = {
    findFiberByHostInstance: dr,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom'
  },
  ux = {
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
      return (e = yg(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: to.findFiberByHostInstance || ax,
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
      ;(_l = qa.inject(ux)), (tn = qa)
    } catch {}
}
mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lx
mt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!lp(t)) throw Error(H(200))
  return ox(e, t, null, n)
}
mt.createRoot = function (e, t) {
  if (!lp(e)) throw Error(H(299))
  var n = !1,
    r = '',
    i = X0
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
mt.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(H(188))
      : ((e = Object.keys(e).join(',')), Error(H(268, e)))
  return (e = yg(t)), (e = e === null ? null : e.stateNode), e
}
mt.flushSync = function (e) {
  return Er(e)
}
mt.hydrate = function (e, t, n) {
  if (!Ol(t)) throw Error(H(200))
  return Ll(null, e, t, !0, n)
}
mt.hydrateRoot = function (e, t, n) {
  if (!lp(e)) throw Error(H(405))
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
  return new Nl(t)
}
mt.render = function (e, t, n) {
  if (!Ol(t)) throw Error(H(200))
  return Ll(null, e, t, !1, n)
}
mt.unmountComponentAtNode = function (e) {
  if (!Ol(e)) throw Error(H(40))
  return e._reactRootContainer
    ? (Er(function () {
        Ll(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[xn] = null)
        })
      }),
      !0)
    : !1
}
mt.unstable_batchedUpdates = tp
mt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ol(n)) throw Error(H(200))
  if (e == null || e._reactInternals === void 0) throw Error(H(38))
  return Ll(e, t, n, !1, r)
}
mt.version = '18.3.1-next-f1338f8080-20240426'
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
Y0(), (Yv.exports = mt)
var up = Yv.exports
const ad = hf(up),
  cx = Dv({ __proto__: null, default: ad }, [up])
var Z0,
  Zh = up
;(Z0 = Zh.createRoot), Zh.hydrateRoot
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
 */ var ha = j
function dx(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var fx = typeof Object.is == 'function' ? Object.is : dx,
  px = ha.useSyncExternalStore,
  hx = ha.useRef,
  mx = ha.useEffect,
  vx = ha.useMemo,
  gx = ha.useDebugValue
e1.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var o = hx(null)
  if (o.current === null) {
    var a = { hasValue: !1, value: null }
    o.current = a
  } else a = o.current
  o = vx(
    function () {
      function l(g) {
        if (!u) {
          if (((u = !0), (c = g), (g = r(g)), i !== void 0 && a.hasValue)) {
            var y = a.value
            if (i(y, g)) return (f = y)
          }
          return (f = g)
        }
        if (((y = f), fx(c, g))) return y
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
  var s = px(e, o[0], o[1])
  return (
    mx(
      function () {
        ;(a.hasValue = !0), (a.value = s)
      },
      [s]
    ),
    gx(s),
    s
  )
}
J0.exports = e1
var yx = J0.exports,
  ct = 'default' in Mo ? te : Mo,
  Jh = Symbol.for('react-redux-context'),
  em = typeof globalThis < 'u' ? globalThis : {}
function _x() {
  if (!ct.createContext) return {}
  const e = em[Jh] ?? (em[Jh] = new Map())
  let t = e.get(ct.createContext)
  return t || ((t = ct.createContext(null)), e.set(ct.createContext, t)), t
}
var tr = _x(),
  wx = () => {
    throw new Error('uSES not initialized!')
  }
function cp(e = tr) {
  return function () {
    return ct.useContext(e)
  }
}
var t1 = cp(),
  n1 = wx,
  xx = (e) => {
    n1 = e
  },
  bx = (e, t) => e === t
function Sx(e = tr) {
  const t = e === tr ? t1 : cp(e),
    n = (r, i = {}) => {
      const { equalityFn: o = bx, devModeChecks: a = {} } =
          typeof i == 'function' ? { equalityFn: i } : i,
        {
          store: s,
          subscription: l,
          getServerState: u,
          stabilityCheck: c,
          identityFunctionCheck: f
        } = t()
      ct.useRef(!0)
      const d = ct.useCallback(
          {
            [r.name](y) {
              return r(y)
            }
          }[r.name],
          [r, c, a.stabilityCheck]
        ),
        g = n1(l.addNestedSub, s.getState, u || s.getState, d, o)
      return ct.useDebugValue(g), g
    }
  return Object.assign(n, { withTypes: () => n }), n
}
var r1 = Sx()
function i1(e) {
  e()
}
function Cx() {
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
var tm = { notify() {}, get: () => [] }
function Ex(e, t) {
  let n,
    r = tm,
    i = 0,
    o = !1
  function a(_) {
    c()
    const w = r.subscribe(_)
    let m = !1
    return () => {
      m || ((m = !0), w(), f())
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
    i++, n || ((n = e.subscribe(l)), (r = Cx()))
  }
  function f() {
    i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = tm))
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
var Tx =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  kx = typeof navigator < 'u' && navigator.product === 'ReactNative',
  jx = Tx || kx ? ct.useLayoutEffect : ct.useEffect
function nm(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
}
function bo(e, t) {
  if (nm(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  const n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (let i = 0; i < n.length; i++)
    if (!Object.prototype.hasOwnProperty.call(t, n[i]) || !nm(e[n[i]], t[n[i]]))
      return !1
  return !0
}
function Px({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: i = 'once',
  identityFunctionCheck: o = 'once'
}) {
  const a = ct.useMemo(() => {
      const u = Ex(e)
      return {
        store: e,
        subscription: u,
        getServerState: r ? () => r : void 0,
        stabilityCheck: i,
        identityFunctionCheck: o
      }
    }, [e, r, i, o]),
    s = ct.useMemo(() => e.getState(), [e])
  jx(() => {
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
  return ct.createElement(l.Provider, { value: a }, n)
}
var Mx = Px
function o1(e = tr) {
  const t = e === tr ? t1 : cp(e),
    n = () => {
      const { store: r } = t()
      return r
    }
  return Object.assign(n, { withTypes: () => n }), n
}
var a1 = o1()
function Nx(e = tr) {
  const t = e === tr ? a1 : o1(e),
    n = () => t().dispatch
  return Object.assign(n, { withTypes: () => n }), n
}
var s1 = Nx(),
  Ox = i1
xx(yx.useSyncExternalStoreWithSelector)
let Lx = { data: '' },
  Ax = (e) =>
    typeof window == 'object'
      ? (
          (e ? e.querySelector('#_goober') : window._goober) ||
          Object.assign(
            (e || document.head).appendChild(document.createElement('style')),
            { innerHTML: ' ', id: '_goober' }
          )
        ).firstChild
      : e || Lx,
  Ix = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  Rx = /\/\*[^]*?\*\/|  +/g,
  rm = /\n+/g,
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
  l1 = (e) => {
    if (typeof e == 'object') {
      let t = ''
      for (let n in e) t += n + l1(e[n])
      return t
    }
    return e
  },
  Fx = (e, t, n, r, i) => {
    let o = l1(e),
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
              for (; (c = Ix.exec(u.replace(Rx, ''))); )
                c[4]
                  ? d.shift()
                  : c[3]
                  ? ((f = c[3].replace(rm, ' ').trim()),
                    d.unshift((d[0][f] = d[0][f] || {})))
                  : (d[0][c[1]] = c[2].replace(rm, ' ').trim())
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
  $x = (e, t, n) =>
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
function Al(e) {
  let t = this || {},
    n = e.call ? e(t.p) : e
  return Fx(
    n.unshift
      ? n.raw
        ? $x(n, [].slice.call(arguments, 1), t.p)
        : n.reduce((r, i) => Object.assign(r, i && i.call ? i(t.p) : i), {})
      : n,
    Ax(t.target),
    t.g,
    t.o,
    t.k
  )
}
let u1, sd, ld
Al.bind({ g: 1 })
let Cn = Al.bind({ k: 1 })
function Dx(e, t, n, r) {
  ;($n.p = t), (u1 = e), (sd = n), (ld = r)
}
function ar(e, t) {
  let n = this || {}
  return function () {
    let r = arguments
    function i(o, a) {
      let s = Object.assign({}, o),
        l = s.className || i.className
      ;(n.p = Object.assign({ theme: sd && sd() }, s)),
        (n.o = / *go\d+/.test(l)),
        (s.className = Al.apply(n, r) + (l ? ' ' + l : ''))
      let u = e
      return (
        e[0] && ((u = s.as || e), delete s.as), ld && u[0] && ld(s), u1(u, s)
      )
    }
    return i
  }
}
var zx = (e) => typeof e == 'function',
  tl = (e, t) => (zx(e) ? e(t) : e),
  Vx = (() => {
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
  Bx = 20,
  xs = new Map(),
  Hx = 1e3,
  im = (e) => {
    if (xs.has(e)) return
    let t = setTimeout(() => {
      xs.delete(e), Ir({ type: 4, toastId: e })
    }, Hx)
    xs.set(e, t)
  },
  qx = (e) => {
    let t = xs.get(e)
    t && clearTimeout(t)
  },
  ud = (e, t) => {
    switch (t.type) {
      case 0:
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, Bx) }
      case 1:
        return (
          t.toast.id && qx(t.toast.id),
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
          ? ud(e, { type: 1, toast: n })
          : ud(e, { type: 0, toast: n })
      case 3:
        let { toastId: r } = t
        return (
          r
            ? im(r)
            : e.toasts.forEach((o) => {
                im(o.id)
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
  Ir = (e) => {
    ;(Ss = ud(Ss, e)),
      bs.forEach((t) => {
        t(Ss)
      })
  },
  Wx = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  Ux = (e = {}) => {
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
          Wx[i.type],
        style: {
          ...e.style,
          ...((a = e[i.type]) == null ? void 0 : a.style),
          ...i.style
        }
      }
    })
    return { ...t, toasts: r }
  },
  Gx = (e, t = 'blank', n) => ({
    createdAt: Date.now(),
    visible: !0,
    type: t,
    ariaProps: { role: 'status', 'aria-live': 'polite' },
    message: e,
    pauseDuration: 0,
    ...n,
    id: (n == null ? void 0 : n.id) || Vx()
  }),
  ma = (e) => (t, n) => {
    let r = Gx(t, e, n)
    return Ir({ type: 2, toast: r }), r.id
  },
  Ct = (e, t) => ma('blank')(e, t)
Ct.error = ma('error')
Ct.success = ma('success')
Ct.loading = ma('loading')
Ct.custom = ma('custom')
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
var Qx = (e, t) => {
    Ir({ type: 1, toast: { id: e, height: t } })
  },
  Kx = () => {
    Ir({ type: 5, time: Date.now() })
  },
  Xx = (e) => {
    let { toasts: t, pausedAt: n } = Ux(e)
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
        n && Ir({ type: 6, time: Date.now() })
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
        updateHeight: Qx,
        startPause: Kx,
        endPause: r,
        calculateOffset: i
      }
    }
  },
  Yx = Cn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  Zx = Cn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  Jx = Cn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  eb = ar('div')`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || '#ff4b4b'};
  position: relative;
  transform: rotate(45deg);

  animation: ${Yx} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Zx} 0.15s ease-out forwards;
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
    animation: ${Jx} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  tb = Cn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  nb = ar('div')`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || '#e0e0e0'};
  border-right-color: ${(e) => e.primary || '#616161'};
  animation: ${tb} 1s linear infinite;
`,
  rb = Cn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  ib = Cn`
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
  ob = ar('div')`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || '#61d345'};
  position: relative;
  transform: rotate(45deg);

  animation: ${rb} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ib} 0.2s ease-out forwards;
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
  ab = ar('div')`
  position: absolute;
`,
  sb = ar('div')`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  lb = Cn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  ub = ar('div')`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${lb} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  cb = ({ toast: e }) => {
    let { icon: t, type: n, iconTheme: r } = e
    return t !== void 0
      ? typeof t == 'string'
        ? j.createElement(ub, null, t)
        : t
      : n === 'blank'
      ? null
      : j.createElement(
          sb,
          null,
          j.createElement(nb, { ...r }),
          n !== 'loading' &&
            j.createElement(
              ab,
              null,
              n === 'error'
                ? j.createElement(eb, { ...r })
                : j.createElement(ob, { ...r })
            )
        )
  },
  db = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  fb = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`,
  pb = '0%{opacity:0;} 100%{opacity:1;}',
  hb = '0%{opacity:1;} 100%{opacity:0;}',
  mb = ar('div')`
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
  vb = ar('div')`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  gb = (e, t) => {
    let n = e.includes('top') ? 1 : -1,
      [r, i] = c1() ? [pb, hb] : [db(n), fb(n)]
    return {
      animation: t
        ? `${Cn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${Cn(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`
    }
  },
  yb = j.memo(({ toast: e, position: t, style: n, children: r }) => {
    let i = e.height
        ? gb(e.position || t || 'top-center', e.visible)
        : { opacity: 0 },
      o = j.createElement(cb, { toast: e }),
      a = j.createElement(vb, { ...e.ariaProps }, tl(e.message, e))
    return j.createElement(
      mb,
      { className: e.className, style: { ...i, ...n, ...e.style } },
      typeof r == 'function'
        ? r({ icon: o, message: a })
        : j.createElement(j.Fragment, null, o, a)
    )
  })
Dx(j.createElement)
var _b = ({
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
  wb = (e, t) => {
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
  xb = Al`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  Wa = 16,
  bb = ({
    reverseOrder: e,
    position: t = 'top-center',
    toastOptions: n,
    gutter: r,
    children: i,
    containerStyle: o,
    containerClassName: a
  }) => {
    let { toasts: s, handlers: l } = Xx(n)
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
          d = wb(c, f)
        return j.createElement(
          _b,
          {
            id: u.id,
            key: u.id,
            onHeightUpdate: l.updateHeight,
            className: u.visible ? xb : '',
            style: d
          },
          u.type === 'custom'
            ? tl(u.message, u)
            : i
            ? i(u)
            : j.createElement(yb, { toast: u, position: c })
        )
      })
    )
  }
const Sb = '_opt_search_order_container_nnmpx_3',
  Cb = '_loginComponent_nnmpx_19',
  Eb = '_loginForm_nnmpx_41',
  Tb = '_formContainer_nnmpx_55',
  kb = '_title_nnmpx_65',
  jb = '_subtitle_nnmpx_77',
  Pb = '_form_nnmpx_55',
  Mb = '_inputGroup_nnmpx_95',
  Nb = '_inputField_nnmpx_103',
  Ob = '_signInButton_nnmpx_131',
  Lb = '_loginBanner_nnmpx_165',
  Ab = '_bannerImage_nnmpx_179',
  Ib = '_buttonGroup_nnmpx_247',
  He = {
    opt_search_order_container: Sb,
    loginComponent: Cb,
    loginForm: Eb,
    formContainer: Tb,
    title: kb,
    subtitle: jb,
    form: Pb,
    inputGroup: Mb,
    inputField: Nb,
    signInButton: Ob,
    loginBanner: Lb,
    bannerImage: Ab,
    buttonGroup: Ib
  }
function Me(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `
}
var Rb = (typeof Symbol == 'function' && Symbol.observable) || '@@observable',
  om = Rb,
  Ou = () => Math.random().toString(36).substring(7).split('').join('.'),
  Fb = {
    INIT: `@@redux/INIT${Ou()}`,
    REPLACE: `@@redux/REPLACE${Ou()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Ou()}`
  },
  nl = Fb
function rn(e) {
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
      o.forEach((w, m) => {
        a.set(m, w)
      }))
  }
  function c() {
    if (l) throw new Error(Me(3))
    return i
  }
  function f(w) {
    if (typeof w != 'function') throw new Error(Me(4))
    if (l) throw new Error(Me(5))
    let m = !0
    u()
    const p = s++
    return (
      a.set(p, w),
      function () {
        if (m) {
          if (l) throw new Error(Me(6))
          ;(m = !1), u(), a.delete(p), (o = null)
        }
      }
    )
  }
  function d(w) {
    if (!rn(w)) throw new Error(Me(7))
    if (typeof w.type > 'u') throw new Error(Me(8))
    if (typeof w.type != 'string') throw new Error(Me(17))
    if (l) throw new Error(Me(9))
    try {
      ;(l = !0), (i = r(i, w))
    } finally {
      l = !1
    }
    return (
      (o = a).forEach((p) => {
        p()
      }),
      w
    )
  }
  function g(w) {
    if (typeof w != 'function') throw new Error(Me(10))
    ;(r = w), d({ type: nl.REPLACE })
  }
  function y() {
    const w = f
    return {
      subscribe(m) {
        if (typeof m != 'object' || m === null) throw new Error(Me(11))
        function p() {
          const x = m
          x.next && x.next(c())
        }
        return p(), { unsubscribe: w(p) }
      },
      [om]() {
        return this
      }
    }
  }
  return (
    d({ type: nl.INIT }),
    { dispatch: d, subscribe: f, getState: c, replaceReducer: g, [om]: y }
  )
}
function $b(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t]
    if (typeof n(void 0, { type: nl.INIT }) > 'u') throw new Error(Me(12))
    if (typeof n(void 0, { type: nl.PROBE_UNKNOWN_ACTION() }) > 'u')
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
    $b(n)
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
function Db(...e) {
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
function p1(e) {
  return rn(e) && 'type' in e && typeof e.type == 'string'
}
var dp = Symbol.for('immer-nothing'),
  So = Symbol.for('immer-draftable'),
  tt = Symbol.for('immer-state')
function Oe(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  )
}
var Tr = Object.getPrototypeOf
function on(e) {
  return !!e && !!e[tt]
}
function Ut(e) {
  var t
  return e
    ? h1(e) ||
        Array.isArray(e) ||
        !!e[So] ||
        !!((t = e.constructor) != null && t[So]) ||
        va(e) ||
        ga(e)
    : !1
}
var zb = Object.prototype.constructor.toString()
function h1(e) {
  if (!e || typeof e != 'object') return !1
  const t = Tr(e)
  if (t === null) return !0
  const n = Object.hasOwnProperty.call(t, 'constructor') && t.constructor
  return n === Object
    ? !0
    : typeof n == 'function' && Function.toString.call(n) === zb
}
function Vb(e) {
  return on(e) || Oe(15, e), e[tt].base_
}
function Qo(e, t) {
  kr(e) === 0
    ? Reflect.ownKeys(e).forEach((n) => {
        t(n, e[n], e)
      })
    : e.forEach((n, r) => t(r, n, e))
}
function kr(e) {
  const t = e[tt]
  return t ? t.type_ : Array.isArray(e) ? 1 : va(e) ? 2 : ga(e) ? 3 : 0
}
function Ko(e, t) {
  return kr(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
}
function Lu(e, t) {
  return kr(e) === 2 ? e.get(t) : e[t]
}
function m1(e, t, n) {
  const r = kr(e)
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n)
}
function Bb(e, t) {
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
function cd(e, t) {
  if (va(e)) return new Map(e)
  if (ga(e)) return new Set(e)
  if (Array.isArray(e)) return Array.prototype.slice.call(e)
  const n = h1(e)
  if (t === !0 || (t === 'class_only' && !n)) {
    const r = Object.getOwnPropertyDescriptors(e)
    delete r[tt]
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
    Il(e) ||
      on(e) ||
      !Ut(e) ||
      (kr(e) > 1 && (e.set = e.add = e.clear = e.delete = Hb),
      Object.freeze(e),
      t && Object.entries(e).forEach(([n, r]) => fp(r, !0))),
    e
  )
}
function Hb() {
  Oe(2)
}
function Il(e) {
  return Object.isFrozen(e)
}
var dd = {}
function jr(e) {
  const t = dd[e]
  return t || Oe(0, e), t
}
function qb(e, t) {
  dd[e] || (dd[e] = t)
}
var Xo
function v1() {
  return Xo
}
function Wb(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  }
}
function am(e, t) {
  t &&
    (jr('Patches'),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t))
}
function fd(e) {
  pd(e), e.drafts_.forEach(Ub), (e.drafts_ = null)
}
function pd(e) {
  e === Xo && (Xo = e.parent_)
}
function sm(e) {
  return (Xo = Wb(Xo, e))
}
function Ub(e) {
  const t = e[tt]
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0)
}
function lm(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length
  const n = t.drafts_[0]
  return (
    e !== void 0 && e !== n
      ? (n[tt].modified_ && (fd(t), Oe(4)),
        Ut(e) && ((e = il(t, e)), t.parent_ || ol(t, e)),
        t.patches_ &&
          jr('Patches').generateReplacementPatches_(
            n[tt].base_,
            e,
            t.patches_,
            t.inversePatches_
          ))
      : (e = il(t, n, [])),
    fd(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== dp ? e : void 0
  )
}
function il(e, t, n) {
  if (Il(t)) return t
  const r = t[tt]
  if (!r) return Qo(t, (i, o) => um(e, r, t, i, o, n)), t
  if (r.scope_ !== e) return t
  if (!r.modified_) return ol(e, r.base_, !0), r.base_
  if (!r.finalized_) {
    ;(r.finalized_ = !0), r.scope_.unfinalizedDrafts_--
    const i = r.copy_
    let o = i,
      a = !1
    r.type_ === 3 && ((o = new Set(i)), i.clear(), (a = !0)),
      Qo(o, (s, l) => um(e, r, i, s, l, n, a)),
      ol(e, i, !1),
      n &&
        e.patches_ &&
        jr('Patches').generatePatches_(r, n, e.patches_, e.inversePatches_)
  }
  return r.copy_
}
function um(e, t, n, r, i, o, a) {
  if (on(i)) {
    const s =
        o && t && t.type_ !== 3 && !Ko(t.assigned_, r) ? o.concat(r) : void 0,
      l = il(e, i, s)
    if ((m1(n, r, l), on(l))) e.canAutoFreeze_ = !1
    else return
  } else a && n.add(i)
  if (Ut(i) && !Il(i)) {
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
function Gb(e, t) {
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
    o = pp
  n && ((i = [r]), (o = Yo))
  const { revoke: a, proxy: s } = Proxy.revocable(i, o)
  return (r.draft_ = s), (r.revoke_ = a), s
}
var pp = {
    get(e, t) {
      if (t === tt) return e
      const n = ur(e)
      if (!Ko(n, t)) return Qb(e, n, t)
      const r = n[t]
      return e.finalized_ || !Ut(r)
        ? r
        : r === Au(e.base_, t)
        ? (Iu(e), (e.copy_[t] = md(r, e)))
        : r
    },
    has(e, t) {
      return t in ur(e)
    },
    ownKeys(e) {
      return Reflect.ownKeys(ur(e))
    },
    set(e, t, n) {
      const r = g1(ur(e), t)
      if (r != null && r.set) return r.set.call(e.draft_, n), !0
      if (!e.modified_) {
        const i = Au(ur(e), t),
          o = i == null ? void 0 : i[tt]
        if (o && o.base_ === n)
          return (e.copy_[t] = n), (e.assigned_[t] = !1), !0
        if (Bb(n, i) && (n !== void 0 || Ko(e.base_, t))) return !0
        Iu(e), hd(e)
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
        Au(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), Iu(e), hd(e))
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
function Au(e, t) {
  const n = e[tt]
  return (n ? ur(n) : e)[t]
}
function Qb(e, t, n) {
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
function hd(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && hd(e.parent_))
}
function Iu(e) {
  e.copy_ || (e.copy_ = cd(e.base_, e.scope_.immer_.useStrictShallowCopy_))
}
var Kb = class {
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
          const o = sm(this),
            a = md(t, void 0)
          let s = !0
          try {
            ;(i = n(a)), (s = !1)
          } finally {
            s ? fd(o) : pd(o)
          }
          return am(o, r), lm(i, o)
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
    Ut(e) || Oe(8), on(e) && (e = Xb(e))
    const t = sm(this),
      n = md(e, void 0)
    return (n[tt].isManual_ = !0), pd(t), n
  }
  finishDraft(e, t) {
    const n = e && e[tt]
    ;(!n || !n.isManual_) && Oe(9)
    const { scope_: r } = n
    return am(r, t), lm(void 0, r)
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
function md(e, t) {
  const n = va(e)
    ? jr('MapSet').proxyMap_(e, t)
    : ga(e)
    ? jr('MapSet').proxySet_(e, t)
    : Gb(e, t)
  return (t ? t.scope_ : v1()).drafts_.push(n), n
}
function Xb(e) {
  return on(e) || Oe(10, e), y1(e)
}
function y1(e) {
  if (!Ut(e) || Il(e)) return e
  const t = e[tt]
  let n
  if (t) {
    if (!t.modified_) return t.base_
    ;(t.finalized_ = !0), (n = cd(e, t.scope_.immer_.useStrictShallowCopy_))
  } else n = cd(e, !0)
  return (
    Qo(n, (r, i) => {
      m1(n, r, y1(i))
    }),
    t && (t.finalized_ = !1),
    n
  )
}
function Yb() {
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
    let { base_: w, assigned_: m } = d,
      p = d.copy_
    p.length < w.length && (([w, p] = [p, w]), ([y, _] = [_, y]))
    for (let v = 0; v < w.length; v++)
      if (m[v] && p[v] !== w[v]) {
        const x = g.concat([v])
        y.push({ op: t, path: x, value: f(p[v]) }),
          _.push({ op: t, path: x, value: f(w[v]) })
      }
    for (let v = w.length; v < p.length; v++) {
      const x = g.concat([v])
      y.push({ op: n, path: x, value: f(p[v]) })
    }
    for (let v = p.length - 1; w.length <= v; --v) {
      const x = g.concat([v])
      _.push({ op: r, path: x })
    }
  }
  function a(d, g, y, _) {
    const { base_: w, copy_: m } = d
    Qo(d.assigned_, (p, v) => {
      const x = Lu(w, p),
        b = Lu(m, p),
        C = v ? (Ko(w, p) ? t : n) : r
      if (x === b && C === t) return
      const S = g.concat(p)
      y.push(C === r ? { op: C, path: S } : { op: C, path: S, value: b }),
        _.push(
          C === n
            ? { op: r, path: S }
            : C === r
            ? { op: n, path: S, value: f(x) }
            : { op: t, path: S, value: f(x) }
        )
    })
  }
  function s(d, g, y, _) {
    let { base_: w, copy_: m } = d,
      p = 0
    w.forEach((v) => {
      if (!m.has(v)) {
        const x = g.concat([p])
        y.push({ op: r, path: x, value: v }),
          _.unshift({ op: n, path: x, value: v })
      }
      p++
    }),
      (p = 0),
      m.forEach((v) => {
        if (!w.has(v)) {
          const x = g.concat([p])
          y.push({ op: n, path: x, value: v }),
            _.unshift({ op: r, path: x, value: v })
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
        const { path: _, op: w } = y
        let m = d
        for (let b = 0; b < _.length - 1; b++) {
          const C = kr(m)
          let S = _[b]
          typeof S != 'string' && typeof S != 'number' && (S = '' + S),
            (C === 0 || C === 1) &&
              (S === '__proto__' || S === 'constructor') &&
              Oe(19),
            typeof m == 'function' && S === 'prototype' && Oe(19),
            (m = Lu(m, S)),
            typeof m != 'object' && Oe(18, _.join('/'))
        }
        const p = kr(m),
          v = c(y.value),
          x = _[_.length - 1]
        switch (w) {
          case t:
            switch (p) {
              case 2:
                return m.set(x, v)
              case 3:
                Oe(16)
              default:
                return (m[x] = v)
            }
          case n:
            switch (p) {
              case 1:
                return x === '-' ? m.push(v) : m.splice(x, 0, v)
              case 2:
                return m.set(x, v)
              case 3:
                return m.add(v)
              default:
                return (m[x] = v)
            }
          case r:
            switch (p) {
              case 1:
                return m.splice(x, 1)
              case 2:
                return m.delete(x)
              case 3:
                return m.delete(y.value)
              default:
                return delete m[x]
            }
          default:
            Oe(17, w)
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
  qb('Patches', {
    applyPatches_: u,
    generatePatches_: i,
    generateReplacementPatches_: l
  })
}
var ht = new Kb(),
  ya = ht.produce,
  _1 = ht.produceWithPatches.bind(ht)
ht.setAutoFreeze.bind(ht)
ht.setUseStrictShallowCopy.bind(ht)
var cm = ht.applyPatches.bind(ht)
ht.createDraft.bind(ht)
ht.finishDraft.bind(ht)
function Zb(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != 'function') throw new TypeError(t)
}
function Jb(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != 'object') throw new TypeError(t)
}
function eS(
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
var dm = (e) => (Array.isArray(e) ? e : [e])
function tS(e) {
  const t = Array.isArray(e[0]) ? e[0] : e
  return (
    eS(
      t,
      'createSelector expects all input-selectors to be functions, but received the following types: '
    ),
    t
  )
}
function nS(e, t) {
  const n = [],
    { length: r } = e
  for (let i = 0; i < r; i++) n.push(e[i].apply(null, t))
  return n
}
var rS = class {
    constructor(e) {
      this.value = e
    }
    deref() {
      return this.value
    }
  },
  iS = typeof WeakRef < 'u' ? WeakRef : rS,
  oS = 0,
  fm = 1
function Ua() {
  return { s: oS, v: void 0, o: null, p: null }
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
        const w = _.get(y)
        w === void 0 ? ((s = Ua()), _.set(y, s)) : (s = w)
      } else {
        let _ = s.p
        _ === null && (s.p = _ = new Map())
        const w = _.get(y)
        w === void 0 ? ((s = Ua()), _.set(y, s)) : (s = w)
      }
    }
    const u = s
    let c
    if (s.s === fm) c = s.v
    else if (((c = e.apply(null, arguments)), o++, r)) {
      const d =
        ((f = i == null ? void 0 : i.deref) == null ? void 0 : f.call(i)) ?? i
      d != null && r(d, c) && ((c = d), o !== 0 && o--),
        (i =
          (typeof c == 'object' && c !== null) || typeof c == 'function'
            ? new iS(c)
            : c)
    }
    return (u.s = fm), (u.v = c), c
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
function aS(e, ...t) {
  const n = typeof e == 'function' ? { memoize: e, memoizeOptions: t } : e,
    r = (...i) => {
      let o = 0,
        a = 0,
        s,
        l = {},
        u = i.pop()
      typeof u == 'object' && ((l = u), (u = i.pop())),
        Zb(
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
        w = dm(d),
        m = dm(y),
        p = tS(i),
        v = f(function () {
          return o++, u.apply(null, arguments)
        }, ...w),
        x = g(function () {
          a++
          const C = nS(p, arguments)
          return (s = v.apply(null, C)), s
        }, ...m)
      return Object.assign(x, {
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
var hp = aS(al),
  sS = Object.assign(
    (e, t = hp) => {
      Jb(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
      )
      const n = Object.keys(e),
        r = n.map((o) => e[o])
      return t(r, (...o) => o.reduce((a, s, l) => ((a[n[l]] = s), a), {}))
    },
    { withTypes: () => sS }
  )
function w1(e) {
  return ({ dispatch: n, getState: r }) =>
    (i) =>
    (o) =>
      typeof o == 'function' ? o(n, r, e) : i(o)
}
var lS = w1(),
  uS = w1,
  cS =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object'
              ? rl
              : rl.apply(null, arguments)
        },
  dS = (e) => e && typeof e.match == 'function'
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
    (n.match = (r) => p1(r) && r.type === e),
    n
  )
}
var x1 = class co extends Array {
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
function pm(e) {
  return Ut(e) ? ya(e, () => {}) : e
}
function hm(e, t, n) {
  if (e.has(t)) {
    let i = e.get(t)
    return n.update && ((i = n.update(i, t, e)), e.set(t, i)), i
  }
  if (!n.insert) throw new Error(Tt(10))
  const r = n.insert(t, e)
  return e.set(t, r), r
}
function fS(e) {
  return typeof e == 'boolean'
}
var pS = () =>
    function (t) {
      const {
        thunk: n = !0,
        immutableCheck: r = !0,
        serializableCheck: i = !0,
        actionCreatorCheck: o = !0
      } = t ?? {}
      let a = new x1()
      return n && (fS(n) ? a.push(lS) : a.push(uS(n.extraArgument))), a
    },
  hr = 'RTK_autoBatch',
  no = () => (e) => ({ payload: e, meta: { [hr]: !0 } }),
  b1 = (e) => (t) => {
    setTimeout(t, e)
  },
  hS =
    typeof window < 'u' && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : b1(10),
  mS =
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
            ? hS
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
  vS = (e) =>
    function (n) {
      const { autoBatch: r = !0 } = n ?? {}
      let i = new x1(e)
      return r && i.push(mS(typeof r == 'object' ? r : void 0)), i
    }
function gS(e) {
  const t = pS(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: i = !0,
      preloadedState: o = void 0,
      enhancers: a = void 0
    } = e || {}
  let s
  if (typeof n == 'function') s = n
  else if (rn(n)) s = f1(n)
  else throw new Error(Tt(1))
  let l
  typeof r == 'function' ? (l = r(t)) : (l = t())
  let u = rl
  i && (u = cS({ trace: !1, ...(typeof i == 'object' && i) }))
  const c = Db(...l),
    f = vS(c)
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
function yS(e) {
  return typeof e == 'function'
}
function _S(e, t) {
  let [n, r, i] = S1(t),
    o
  if (yS(e)) o = () => pm(e())
  else {
    const s = pm(e)
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
var C1 = (e, t) => (dS(e) ? e.match(t) : e(t))
function En(...e) {
  return (t) => e.some((n) => C1(n, t))
}
function Co(...e) {
  return (t) => e.every((n) => C1(n, t))
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
function Fl(...e) {
  const t = (n) => n && n.meta && n.meta.rejectedWithValue
  return e.length === 0 ? Co(Ni(...e), t) : _a(e) ? Co(Ni(...e), t) : Fl()(e[0])
}
function nr(...e) {
  return e.length === 0
    ? (t) => Rl(t, ['fulfilled'])
    : _a(e)
    ? En(...e.map((t) => t.fulfilled))
    : nr()(e[0])
}
function vd(...e) {
  return e.length === 0
    ? (t) => Rl(t, ['pending', 'fulfilled', 'rejected'])
    : _a(e)
    ? En(...e.flatMap((t) => [t.pending, t.rejected, t.fulfilled]))
    : vd()(e[0])
}
var wS = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW',
  vp = (e = 21) => {
    let t = '',
      n = e
    for (; n--; ) t += wS[(Math.random() * 64) | 0]
    return t
  },
  xS = ['name', 'message', 'stack', 'code'],
  Ru = class {
    constructor(e, t) {
      ou(this, '_type')
      ;(this.payload = e), (this.meta = t)
    }
  },
  mm = class {
    constructor(e, t) {
      ou(this, '_type')
      ;(this.payload = e), (this.meta = t)
    }
  },
  bS = (e) => {
    if (typeof e == 'object' && e !== null) {
      const t = {}
      for (const n of xS) typeof e[n] == 'string' && (t[n] = e[n])
      return t
    }
    return { message: String(e) }
  },
  vm = (() => {
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
          error: ((r && r.serializeError) || bS)(l || 'Rejected'),
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
          function w(p) {
            ;(_ = p), g.abort()
          }
          const m = (async function () {
            var x, b
            let p
            try {
              let C =
                (x = r == null ? void 0 : r.condition) == null
                  ? void 0
                  : x.call(r, l, { getState: c, extra: f })
              if ((CS(C) && (C = await C), C === !1 || g.signal.aborted))
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
                      abort: w,
                      rejectWithValue: (E, T) => new Ru(E, T),
                      fulfillWithValue: (E, T) => new mm(E, T)
                    })
                  ).then((E) => {
                    if (E instanceof Ru) throw E
                    return E instanceof mm
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
          return Object.assign(m, {
            abort: w,
            requestId: d,
            arg: l,
            unwrap() {
              return m.then(SS)
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
function SS(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload
  if (e.error) throw e.error
  return e.payload
}
function CS(e) {
  return e !== null && typeof e == 'object' && typeof e.then == 'function'
}
var ES = Symbol.for('rtk-slice-createasyncthunk')
function TS(e, t) {
  return `${e}/${t}`
}
function kS({ creators: e } = {}) {
  var n
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[ES]
  return function (i) {
    const { name: o, reducerPath: a = o } = i
    if (!o) throw new Error(Tt(11))
    typeof process < 'u'
    const s =
        (typeof i.reducers == 'function' ? i.reducers(PS()) : i.reducers) || {},
      l = Object.keys(s),
      u = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: []
      },
      c = {
        addCase(v, x) {
          const b = typeof v == 'string' ? v : v.type
          if (!b) throw new Error(Tt(12))
          if (b in u.sliceCaseReducersByType) throw new Error(Tt(13))
          return (u.sliceCaseReducersByType[b] = x), c
        },
        addMatcher(v, x) {
          return u.sliceMatchers.push({ matcher: v, reducer: x }), c
        },
        exposeAction(v, x) {
          return (u.actionCreators[v] = x), c
        },
        exposeCaseReducer(v, x) {
          return (u.sliceCaseReducersByName[v] = x), c
        }
      }
    l.forEach((v) => {
      const x = s[v],
        b = {
          reducerName: v,
          type: TS(o, v),
          createNotation: typeof i.reducers == 'function'
        }
      NS(x) ? LS(b, x, c, t) : MS(b, x, c)
    })
    function f() {
      const [v = {}, x = [], b = void 0] =
          typeof i.extraReducers == 'function'
            ? S1(i.extraReducers)
            : [i.extraReducers],
        C = { ...v, ...u.sliceCaseReducersByType }
      return _S(i.initialState, (S) => {
        for (let E in C) S.addCase(E, C[E])
        for (let E of u.sliceMatchers) S.addMatcher(E.matcher, E.reducer)
        for (let E of x) S.addMatcher(E.matcher, E.reducer)
        b && S.addDefaultCase(b)
      })
    }
    const d = (v) => v,
      g = new Map()
    let y
    function _(v, x) {
      return y || (y = f()), y(v, x)
    }
    function w() {
      return y || (y = f()), y.getInitialState()
    }
    function m(v, x = !1) {
      function b(S) {
        let E = S[v]
        return typeof E > 'u' && x && (E = w()), E
      }
      function C(S = d) {
        const E = hm(g, x, { insert: () => new WeakMap() })
        return hm(E, S, {
          insert: () => {
            const T = {}
            for (const [k, M] of Object.entries(i.selectors ?? {}))
              T[k] = jS(M, S, w, x)
            return T
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
      getInitialState: w,
      ...m(a),
      injectInto(v, { reducerPath: x, ...b } = {}) {
        const C = x ?? a
        return (
          v.inject({ reducerPath: C, reducer: _ }, b), { ...p, ...m(C, !0) }
        )
      }
    }
    return p
  }
}
function jS(e, t, n, r) {
  function i(o, ...a) {
    let s = t(o)
    return typeof s > 'u' && r && (s = n()), e(s, ...a)
  }
  return (i.unwrapped = e), i
}
var In = kS()
function PS() {
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
function MS({ type: e, reducerName: t, createNotation: n }, r, i) {
  let o, a
  if ('reducer' in r) {
    if (n && !OS(r)) throw new Error(Tt(17))
    ;(o = r.reducer), (a = r.prepare)
  } else o = r
  i.addCase(e, o)
    .exposeCaseReducer(t, o)
    .exposeAction(t, a ? Bt(e, a) : Bt(e))
}
function NS(e) {
  return e._reducerDefinitionType === 'asyncThunk'
}
function OS(e) {
  return e._reducerDefinitionType === 'reducerWithPrepare'
}
function LS({ type: e, reducerName: t }, n, r, i) {
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
var E1 = ((e) => (
  (e.uninitialized = 'uninitialized'),
  (e.pending = 'pending'),
  (e.fulfilled = 'fulfilled'),
  (e.rejected = 'rejected'),
  e
))(E1 || {})
function AS(e) {
  return {
    status: e,
    isUninitialized: e === 'uninitialized',
    isLoading: e === 'pending',
    isSuccess: e === 'fulfilled',
    isError: e === 'rejected'
  }
}
var gm = rn
function T1(e, t) {
  if (e === t || !((gm(e) && gm(t)) || (Array.isArray(e) && Array.isArray(t))))
    return t
  const n = Object.keys(t),
    r = Object.keys(e)
  let i = n.length === r.length
  const o = Array.isArray(t) ? [] : {}
  for (const a of n) (o[a] = T1(e[a], t[a])), i && (i = e[a] === o[a])
  return i ? e : o
}
function wi(e) {
  let t = 0
  for (const n in e) t++
  return t
}
var ym = (e) => [].concat(...e)
function IS(e) {
  return new RegExp('(^|:)//').test(e)
}
function RS() {
  return typeof document > 'u' ? !0 : document.visibilityState !== 'hidden'
}
function _m(e) {
  return e != null
}
function FS() {
  return typeof navigator > 'u' || navigator.onLine === void 0
    ? !0
    : navigator.onLine
}
var $S = (e) => e.replace(/\/$/, ''),
  DS = (e) => e.replace(/^\//, '')
function zS(e, t) {
  if (!e) return t
  if (!t) return e
  if (IS(t)) return t
  const n = e.endsWith('/') || !t.startsWith('?') ? '/' : ''
  return (e = $S(e)), (t = DS(t)), `${e}${n}${t}`
}
var wm = (...e) => fetch(...e),
  VS = (e) => e.status >= 200 && e.status <= 299,
  BS = (e) => /ion\/(vnd\.api\+)?json/.test(e.get('content-type') || '')
function xm(e) {
  if (!rn(e)) return e
  const t = { ...e }
  for (const [n, r] of Object.entries(t)) r === void 0 && delete t[n]
  return t
}
function k1({
  baseUrl: e,
  prepareHeaders: t = (f) => f,
  fetchFn: n = wm,
  paramsSerializer: r,
  isJsonContentType: i = BS,
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
      const { getState: _, extra: w, endpoint: m, forced: p, type: v } = g
      let x,
        {
          url: b,
          headers: C = new Headers(c.headers),
          params: S = void 0,
          responseHandler: E = l ?? 'json',
          validateStatus: T = u ?? VS,
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
      ;(C = new Headers(xm(C))),
        (A.headers =
          (await t(C, {
            getState: _,
            arg: d,
            extra: w,
            endpoint: m,
            forced: p,
            type: v,
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
          Z = r ? r(S) : new URLSearchParams(xm(S))
        b += U + Z
      }
      b = zS(e, b)
      const I = new Request(b, A)
      x = { request: new Request(b, A) }
      let N,
        F = !1,
        $ =
          L &&
          setTimeout(() => {
            ;(F = !0), L.abort()
          }, k)
      try {
        N = await n(I)
      } catch (U) {
        return {
          error: {
            status: F ? 'TIMEOUT_ERROR' : 'FETCH_ERROR',
            error: String(U)
          },
          meta: x
        }
      } finally {
        $ && clearTimeout($),
          L == null || L.signal.removeEventListener('abort', L.abort)
      }
      const V = N.clone()
      x.response = V
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
          meta: x
        }
      }
      return T(N, q)
        ? { data: q, meta: x }
        : { error: { status: N.status, data: q }, meta: x }
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
var bm = class {
    constructor(e, t = void 0) {
      ;(this.value = e), (this.meta = t)
    }
  },
  gp = Bt('__rtkq/focused'),
  j1 = Bt('__rtkq/unfocused'),
  yp = Bt('__rtkq/online'),
  P1 = Bt('__rtkq/offline')
function M1(e) {
  return e.type === 'query'
}
function HS(e) {
  return e.type === 'mutation'
}
function _p(e, t, n, r, i, o) {
  return qS(e)
    ? e(t, n, r, i).map(gd).map(o)
    : Array.isArray(e)
    ? e.map(gd).map(o)
    : []
}
function qS(e) {
  return typeof e == 'function'
}
function gd(e) {
  return typeof e == 'string' ? { type: e } : e
}
function WS(e, t) {
  return e.catch(t)
}
var Zo = Symbol('forceQueryFn'),
  yd = (e) => typeof e[Zo] == 'function'
function US({
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
  function c(w, m) {
    return (p) => {
      var b
      const v = i.endpointDefinitions[w],
        x = e({ queryArgs: m, endpointDefinition: v, endpointName: w })
      return (b = o.get(p)) == null ? void 0 : b[x]
    }
  }
  function f(w, m) {
    return (p) => {
      var v
      return (v = a.get(p)) == null ? void 0 : v[m]
    }
  }
  function d() {
    return (w) => Object.values(o.get(w) || {}).filter(_m)
  }
  function g() {
    return (w) => Object.values(a.get(w) || {}).filter(_m)
  }
  function y(w, m) {
    const p =
      (
        v,
        {
          subscribe: x = !0,
          forceRefetch: b,
          subscriptionOptions: C,
          [Zo]: S,
          ...E
        } = {}
      ) =>
      (T, k) => {
        var q
        const M = e({ queryArgs: v, endpointDefinition: m, endpointName: w }),
          L = t({
            ...E,
            type: 'query',
            subscribe: x,
            forceRefetch: b,
            subscriptionOptions: C,
            endpointName: w,
            originalArgs: v,
            queryCacheKey: M,
            [Zo]: S
          }),
          O = r.endpoints[w].select(v),
          A = T(L),
          z = O(k()),
          { requestId: I, abort: R } = A,
          N = z.requestId !== I,
          F = (q = o.get(T)) == null ? void 0 : q[M],
          $ = () => O(k()),
          V = Object.assign(
            S
              ? A.then($)
              : N && !F
              ? Promise.resolve(z)
              : Promise.all([F, A]).then($),
            {
              arg: v,
              requestId: I,
              subscriptionOptions: C,
              queryCacheKey: M,
              abort: R,
              async unwrap() {
                const G = await V
                if (G.isError) throw G.error
                return G.data
              },
              refetch: () => T(p(v, { subscribe: !1, forceRefetch: !0 })),
              unsubscribe() {
                x && T(s({ queryCacheKey: M, requestId: I }))
              },
              updateSubscriptionOptions(G) {
                ;(V.subscriptionOptions = G),
                  T(
                    u({
                      endpointName: w,
                      requestId: I,
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
  function _(w) {
    return (m, { track: p = !0, fixedCacheKey: v } = {}) =>
      (x, b) => {
        const C = n({
            type: 'mutation',
            endpointName: w,
            originalArgs: m,
            track: p,
            fixedCacheKey: v
          }),
          S = x(C),
          { requestId: E, abort: T, unwrap: k } = S,
          M = WS(
            S.unwrap().then((z) => ({ data: z })),
            (z) => ({ error: z })
          ),
          L = () => {
            x(l({ requestId: E, fixedCacheKey: v }))
          },
          O = Object.assign(M, {
            arg: S.arg,
            requestId: E,
            abort: T,
            unwrap: k,
            reset: L
          }),
          A = a.get(x) || {}
        return (
          a.set(x, A),
          (A[E] = O),
          O.then(() => {
            delete A[E], wi(A) || a.delete(x)
          }),
          v &&
            ((A[v] = O),
            O.then(() => {
              A[v] === O && (delete A[v], wi(A) || a.delete(x))
            })),
          O
        )
      }
  }
}
function Sm(e) {
  return e
}
function GS({
  reducerPath: e,
  baseQuery: t,
  context: { endpointDefinitions: n },
  serializeQueryArgs: r,
  api: i,
  assertTagType: o
}) {
  const a = (p, v, x, b) => (C, S) => {
      const E = n[p],
        T = r({ queryArgs: v, endpointDefinition: E, endpointName: p })
      if (
        (C(
          i.internalActions.queryResultPatched({ queryCacheKey: T, patches: x })
        ),
        !b)
      )
        return
      const k = i.endpoints[p].select(v)(S()),
        M = _p(E.providesTags, k.data, void 0, v, {}, o)
      C(
        i.internalActions.updateProvidedBy({
          queryCacheKey: T,
          providedTags: M
        })
      )
    },
    s =
      (p, v, x, b = !0) =>
      (C, S) => {
        const T = i.endpoints[p].select(v)(S()),
          k = {
            patches: [],
            inversePatches: [],
            undo: () => C(i.util.patchQueryData(p, v, k.inversePatches, b))
          }
        if (T.status === 'uninitialized') return k
        let M
        if ('data' in T)
          if (Ut(T.data)) {
            const [L, O, A] = _1(T.data, x)
            k.patches.push(...O), k.inversePatches.push(...A), (M = L)
          } else
            (M = x(T.data)),
              k.patches.push({ op: 'replace', path: [], value: M }),
              k.inversePatches.push({ op: 'replace', path: [], value: T.data })
        return (
          k.patches.length === 0 ||
            C(i.util.patchQueryData(p, v, k.patches, b)),
          k
        )
      },
    l = (p, v, x) => (b) =>
      b(
        i.endpoints[p].initiate(v, {
          subscribe: !1,
          forceRefetch: !0,
          [Zo]: () => ({ data: x })
        })
      ),
    u = async (
      p,
      {
        signal: v,
        abort: x,
        rejectWithValue: b,
        fulfillWithValue: C,
        dispatch: S,
        getState: E,
        extra: T
      }
    ) => {
      const k = n[p.endpointName]
      try {
        let M = Sm,
          L
        const O = {
            signal: v,
            abort: x,
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
          throw new bm(L.error, L.meta)
        return C(await M(L.data, L.meta, p.originalArgs), {
          fulfilledTimeStamp: Date.now(),
          baseQueryMeta: L.meta,
          [hr]: !0
        })
      } catch (M) {
        let L = M
        if (L instanceof bm) {
          let O = Sm
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
  function c(p, v) {
    var E, T, k
    const x =
        (T = (E = v[e]) == null ? void 0 : E.queries) == null
          ? void 0
          : T[p.queryCacheKey],
      b = (k = v[e]) == null ? void 0 : k.config.refetchOnMountOrArgChange,
      C = x == null ? void 0 : x.fulfilledTimeStamp,
      S = p.forceRefetch ?? (p.subscribe && b)
    return S ? S === !0 || (Number(new Date()) - Number(C)) / 1e3 >= S : !1
  }
  const f = vm(`${e}/executeQuery`, u, {
      getPendingMeta() {
        return { startedTimeStamp: Date.now(), [hr]: !0 }
      },
      condition(p, { getState: v }) {
        var k, M, L
        const x = v(),
          b =
            (M = (k = x[e]) == null ? void 0 : k.queries) == null
              ? void 0
              : M[p.queryCacheKey],
          C = b == null ? void 0 : b.fulfilledTimeStamp,
          S = p.originalArgs,
          E = b == null ? void 0 : b.originalArgs,
          T = n[p.endpointName]
        return yd(p)
          ? !0
          : (b == null ? void 0 : b.status) === 'pending'
          ? !1
          : c(p, x) ||
            (M1(T) &&
              (L = T == null ? void 0 : T.forceRefetch) != null &&
              L.call(T, {
                currentArg: S,
                previousArg: E,
                endpointState: b,
                state: x
              }))
          ? !0
          : !C
      },
      dispatchConditionRejection: !0
    }),
    d = vm(`${e}/executeMutation`, u, {
      getPendingMeta() {
        return { startedTimeStamp: Date.now(), [hr]: !0 }
      }
    }),
    g = (p) => 'force' in p,
    y = (p) => 'ifOlderThan' in p,
    _ = (p, v, x) => (b, C) => {
      const S = g(x) && x.force,
        E = y(x) && x.ifOlderThan,
        T = (M = !0) => {
          const L = { forceRefetch: M, isPrefetch: !0 }
          return i.endpoints[p].initiate(v, L)
        },
        k = i.endpoints[p].select(v)(C())
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
  function w(p) {
    return (v) => {
      var x, b
      return (
        ((b = (x = v == null ? void 0 : v.meta) == null ? void 0 : x.arg) ==
        null
          ? void 0
          : b.endpointName) === p
      )
    }
  }
  function m(p, v) {
    return {
      matchPending: Co(mp(p), w(v)),
      matchFulfilled: Co(nr(p), w(v)),
      matchRejected: Co(Ni(p), w(v))
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
  return _p(
    n[e.meta.arg.endpointName][t],
    nr(e) ? e.payload : void 0,
    Fl(e) ? e.payload : void 0,
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
function Cm(e, t, n) {
  const r = e[Jo(t)]
  r && n(r)
}
var ro = {}
function QS({
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
      if (T.requestId !== S.requestId && !yd(S.arg)) return
      const { merge: k } = i[S.arg.endpointName]
      if (((T.status = 'fulfilled'), k))
        if (T.data !== void 0) {
          const {
            fulfilledTimeStamp: M,
            arg: L,
            baseQueryMeta: O,
            requestId: A
          } = S
          let z = ya(T.data, (I) =>
            k(I, E, {
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
            ? T1(on(T.data) ? Vb(T.data) : T.data, E)
            : E
      delete T.error, (T.fulfilledTimeStamp = S.fulfilledTimeStamp)
    })
  }
  const g = In({
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
              T.data = cm(T.data, E.concat())
            })
          },
          prepare: no()
        }
      },
      extraReducers(C) {
        C.addCase(t.pending, (S, { meta: E, meta: { arg: T } }) => {
          const k = yd(T)
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
    y = In({
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
              Cm(S, T, (k) => {
                k.requestId === T.requestId &&
                  ((k.status = 'fulfilled'),
                  (k.data = E),
                  (k.fulfilledTimeStamp = T.fulfilledTimeStamp))
              })
          })
          .addCase(n.rejected, (S, { payload: E, error: T, meta: k }) => {
            k.arg.track &&
              Cm(S, k, (M) => {
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
    _ = In({
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
                const I =
                  (k = S[L] ?? (S[L] = {}))[
                    (M = A || '__internal_without_id')
                  ] ?? (k[M] = [])
                for (const R of z) I.includes(R) || I.push(R)
              }
          })
          .addMatcher(En(nr(t), Fl(t)), (S, E) => {
            const T = N1(E, 'providesTags', i, l),
              { queryCacheKey: k } = E.meta.arg
            _.caseReducers.updateProvidedBy(
              S,
              _.actions.updateProvidedBy({ queryCacheKey: k, providedTags: T })
            )
          })
      }
    }),
    w = In({
      name: `${e}/subscriptions`,
      initialState: ro,
      reducers: {
        updateSubscriptionOptions(C, S) {},
        unsubscribeQueryResult(C, S) {},
        internal_getRTKQSubscriptions() {}
      }
    }),
    m = In({
      name: `${e}/internalSubscriptions`,
      initialState: ro,
      reducers: {
        subscriptionsUpdated: {
          reducer(C, S) {
            return cm(C, S.payload)
          },
          prepare: no()
        }
      }
    }),
    p = In({
      name: `${e}/config`,
      initialState: {
        online: FS(),
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
        C.addCase(yp, (S) => {
          S.online = !0
        })
          .addCase(P1, (S) => {
            S.online = !1
          })
          .addCase(gp, (S) => {
            S.focused = !0
          })
          .addCase(j1, (S) => {
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
    x = (C, S) => v(c.match(S) ? void 0 : C, S),
    b = {
      ...p.actions,
      ...g.actions,
      ...w.actions,
      ...m.actions,
      ...y.actions,
      ..._.actions,
      resetApiState: c
    }
  return { reducer: x, actions: b }
}
var mr = Symbol.for('RTKQ/skipToken'),
  O1 = { status: 'uninitialized' },
  Em = ya(O1, () => {}),
  Tm = ya(O1, () => {})
function KS({ serializeQueryArgs: e, reducerPath: t, createSelector: n }) {
  const r = (f) => Em,
    i = (f) => Tm
  return {
    buildQuerySelector: s,
    buildMutationSelector: l,
    selectInvalidatedBy: u,
    selectCachedArgsForQuery: c
  }
  function o(f) {
    return { ...f, ...AS(f.status) }
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
          : (m) => {
              var p, v
              return (
                ((v = (p = a(m)) == null ? void 0 : p.queries) == null
                  ? void 0
                  : v[y]) ?? Em
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
                var w, m
                return (
                  ((m = (w = a(_)) == null ? void 0 : w.mutations) == null
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
    for (const _ of d.map(gd)) {
      const w = g.provided[_.type]
      if (!w) continue
      let m = (_.id !== void 0 ? w[_.id] : ym(Object.values(w))) ?? []
      for (const p of m) y.add(p)
    }
    return ym(
      Array.from(y.values()).map((_) => {
        const w = g.queries[_]
        return w
          ? [
              {
                queryCacheKey: _,
                endpointName: w.endpointName,
                originalArgs: w.originalArgs
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
  km = ({ endpointName: e, queryArgs: t }) => {
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
function XS(...e) {
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
var YS = ({ api: e, queryThunk: t, internalState: n }) => {
  const r = `${e.reducerPath}/subscriptions`
  let i = null,
    o = null
  const { updateSubscriptionOptions: a, unsubscribeQueryResult: s } =
      e.internalActions,
    l = (g, y) => {
      var w, m, p
      if (a.match(y)) {
        const { queryCacheKey: v, requestId: x, options: b } = y.payload
        return (
          (w = g == null ? void 0 : g[v]) != null && w[x] && (g[v][x] = b), !0
        )
      }
      if (s.match(y)) {
        const { queryCacheKey: v, requestId: x } = y.payload
        return g[v] && delete g[v][x], !0
      }
      if (e.internalActions.removeQueryResult.match(y))
        return delete g[y.payload.queryCacheKey], !0
      if (t.pending.match(y)) {
        const {
            meta: { arg: v, requestId: x }
          } = y,
          b = g[(m = v.queryCacheKey)] ?? (g[m] = {})
        return (
          (b[`${x}_running`] = {}),
          v.subscribe && (b[x] = v.subscriptionOptions ?? b[x] ?? {}),
          !0
        )
      }
      let _ = !1
      if (t.fulfilled.match(y) || t.rejected.match(y)) {
        const v = g[y.meta.arg.queryCacheKey] || {},
          x = `${y.meta.requestId}_running`
        _ || (_ = !!v[x]), delete v[x]
      }
      if (t.rejected.match(y)) {
        const {
          meta: { condition: v, arg: x, requestId: b }
        } = y
        if (v && x.subscribe) {
          const C = g[(p = x.queryCacheKey)] ?? (g[p] = {})
          ;(C[b] = x.subscriptionOptions ?? C[b] ?? {}), (_ = !0)
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
        var w
        const _ = u()
        return !!((w = _ == null ? void 0 : _[g]) != null && w[y])
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
    let w = !0
    if (_) {
      o ||
        (o = setTimeout(() => {
          const v = JSON.parse(JSON.stringify(n.currentSubscriptions)),
            [, x] = _1(i, () => v)
          y.next(e.internalActions.subscriptionsUpdated(x)), (i = v), (o = null)
        }, 500))
      const m = typeof g.type == 'string' && !!g.type.startsWith(r),
        p = t.rejected.match(g) && g.meta.condition && !!g.meta.arg.subscribe
      w = !m && !p
    }
    return [w, !1]
  }
}
function ZS(e) {
  for (const t in e) return !1
  return !0
}
var JS = 2147483647 / 1e3 - 1,
  eC = ({
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
      return !!y && !ZS(y)
    }
    const c = {},
      f = (g, y, _) => {
        var w
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
              (w = m.queries[v]) == null ? void 0 : w.endpointName,
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
          for (const [v, x] of Object.entries(p))
            d(v, x == null ? void 0 : x.endpointName, y, m.config)
        }
      }
    function d(g, y, _, w) {
      const m = r.endpointDefinitions[y],
        p = (m == null ? void 0 : m.keepUnusedDataFor) ?? w.keepUnusedDataFor
      if (p === 1 / 0) return
      const v = Math.max(0, Math.min(p, JS))
      if (!u(g)) {
        const x = c[g]
        x && clearTimeout(x),
          (c[g] = setTimeout(() => {
            u(g) || _.dispatch(o({ queryCacheKey: g })), delete c[g]
          }, v * 1e3))
      }
    }
    return f
  },
  jm = new Error('Promise never resolved before cacheEntryRemoved.'),
  tC = ({
    api: e,
    reducerPath: t,
    context: n,
    queryThunk: r,
    mutationThunk: i,
    internalState: o
  }) => {
    const a = vd(r),
      s = vd(i),
      l = nr(r, i),
      u = {}
    function c(_, w, m) {
      const p = u[_]
      p != null &&
        p.valueResolved &&
        (p.valueResolved({ data: w, meta: m }), delete p.valueResolved)
    }
    function f(_) {
      const w = u[_]
      w && (delete u[_], w.cacheEntryRemoved())
    }
    const d = (_, w, m) => {
      const p = g(_)
      function v(x, b, C, S) {
        const E = m[t].queries[b],
          T = w.getState()[t].queries[b]
        !E && T && y(x, S, b, w, C)
      }
      if (r.pending.match(_))
        v(_.meta.arg.endpointName, p, _.meta.requestId, _.meta.arg.originalArgs)
      else if (e.internalActions.cacheEntriesUpserted.match(_))
        for (const { queryDescription: x, value: b } of _.payload) {
          const { endpointName: C, originalArgs: S, queryCacheKey: E } = x
          v(C, E, _.meta.requestId, S), c(E, b, {})
        }
      else if (i.pending.match(_))
        w.getState()[t].mutations[p] &&
          y(
            _.meta.arg.endpointName,
            _.meta.arg.originalArgs,
            p,
            w,
            _.meta.requestId
          )
      else if (l(_)) c(p, _.payload, _.meta.baseQueryMeta)
      else if (
        e.internalActions.removeQueryResult.match(_) ||
        e.internalActions.removeMutationResult.match(_)
      )
        f(p)
      else if (e.util.resetApiState.match(_))
        for (const x of Object.keys(u)) f(x)
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
    function y(_, w, m, p, v) {
      const x = n.endpointDefinitions[_],
        b = x == null ? void 0 : x.onCacheEntryAdded
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
            throw jm
          })
        ])
      E.catch(() => {}), (u[m] = C)
      const T = e.endpoints[_].select(x.type === 'query' ? w : m),
        k = p.dispatch((O, A, z) => z),
        M = {
          ...p,
          getCacheEntry: () => T(p.getState()),
          requestId: v,
          extra: k,
          updateCachedData:
            x.type === 'query'
              ? (O) => p.dispatch(e.util.updateQueryData(_, w, O))
              : void 0,
          cacheDataLoaded: E,
          cacheEntryRemoved: S
        },
        L = b(w, M)
      Promise.resolve(L).catch((O) => {
        if (O !== jm) throw O
      })
    }
    return d
  },
  nC =
    ({ api: e, context: { apiUid: t }, reducerPath: n }) =>
    (r, i) => {
      e.util.resetApiState.match(r) &&
        i.dispatch(e.internalActions.middlewareRegistered(t)),
        typeof process < 'u'
    },
  rC = ({
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
      c = En(nr(r), Fl(r)),
      f = En(nr(r, i), Ni(r, i))
    let d = []
    const g = (w, m) => {
      c(w)
        ? _(N1(w, 'invalidatesTags', n, a), m)
        : f(w)
        ? _([], m)
        : o.util.invalidateTags.match(w) &&
          _(_p(w.payload, void 0, void 0, void 0, void 0, a), m)
    }
    function y(w) {
      var m, p
      for (const v in w.queries)
        if (((m = w.queries[v]) == null ? void 0 : m.status) === 'pending')
          return !0
      for (const v in w.mutations)
        if (((p = w.mutations[v]) == null ? void 0 : p.status) === 'pending')
          return !0
      return !1
    }
    function _(w, m) {
      const p = m.getState(),
        v = p[e]
      if ((d.push(...w), v.config.invalidationBehavior === 'delayed' && y(v)))
        return
      const x = d
      if (((d = []), x.length === 0)) return
      const b = o.util.selectInvalidatedBy(p, x)
      t.batch(() => {
        const C = Array.from(b.values())
        for (const { queryCacheKey: S } of C) {
          const E = v.queries[S],
            T = l.currentSubscriptions[S] ?? {}
          E &&
            (wi(T) === 0
              ? m.dispatch(u({ queryCacheKey: S }))
              : E.status !== 'uninitialized' && m.dispatch(s(E)))
        }
      })
    }
    return g
  },
  iC = ({
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
        w = i.currentSubscriptions[d]
      if (!_ || _.status === 'uninitialized') return
      const { lowestPollingInterval: m, skipPollingIfUnfocused: p } = f(w)
      if (!Number.isFinite(m)) return
      const v = o[d]
      v != null && v.timeout && (clearTimeout(v.timeout), (v.timeout = void 0))
      const x = Date.now() + m
      o[d] = {
        nextPollTimestamp: x,
        pollingInterval: m,
        timeout: setTimeout(() => {
          ;(y.config.focused || !p) && g.dispatch(r(_)),
            s({ queryCacheKey: d }, g)
        }, m)
      }
    }
    function l({ queryCacheKey: d }, g) {
      const _ = g.getState()[e].queries[d],
        w = i.currentSubscriptions[d]
      if (!_ || _.status === 'uninitialized') return
      const { lowestPollingInterval: m } = f(w)
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
  oC = ({ api: e, context: t, queryThunk: n, mutationThunk: r }) => {
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
          w = t.endpointDefinitions[y],
          m = w == null ? void 0 : w.onQueryStarted
        if (m) {
          const p = {},
            v = new Promise((S, E) => {
              ;(p.resolve = S), (p.reject = E)
            })
          v.catch(() => {}), (s[g] = p)
          const x = e.endpoints[y].select(w.type === 'query' ? _ : g),
            b = c.dispatch((S, E, T) => T),
            C = {
              ...c,
              getCacheEntry: () => x(c.getState()),
              requestId: g,
              extra: b,
              updateCachedData:
                w.type === 'query'
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
  aC = ({
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
function sC(e) {
  const { reducerPath: t, queryThunk: n, api: r, context: i } = e,
    { apiUid: o } = i,
    a = { invalidateTags: Bt(`${t}/invalidateTags`) },
    s = (f) => f.type.startsWith(`${t}/`),
    l = [nC, eC, rC, iC, tC, oC]
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
        w = YS(y),
        m = aC(y)
      return (p) => (v) => {
        if (!p1(v)) return p(v)
        d || ((d = !0), f.dispatch(r.internalActions.middlewareRegistered(o)))
        const x = { ...f, next: p },
          b = f.getState(),
          [C, S] = w(v, x, b)
        let E
        if (
          (C ? (E = p(v)) : (E = S),
          f.getState()[t] && (m(v, x, b), s(v) || i.hasRehydrationInfo(v)))
        )
          for (const T of _) T(v, x, b)
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
var Pm = Symbol(),
  lC = ({ createSelector: e = hp } = {}) => ({
    name: Pm,
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
      Yb()
      const d = (N) => (typeof process < 'u', N)
      Object.assign(t, {
        reducerPath: i,
        endpoints: {},
        internalActions: {
          onOnline: yp,
          onOffline: P1,
          onFocus: gp,
          onFocusLost: j1
        },
        util: {}
      })
      const {
          queryThunk: g,
          mutationThunk: y,
          patchQueryData: _,
          updateQueryData: w,
          upsertQueryData: m,
          prefetch: p,
          buildMatchThunkActions: v
        } = GS({
          baseQuery: n,
          reducerPath: i,
          context: f,
          api: t,
          serializeQueryArgs: o,
          assertTagType: d
        }),
        { reducer: x, actions: b } = QS({
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
        updateQueryData: w,
        upsertQueryData: m,
        prefetch: p,
        resetApiState: b.resetApiState,
        upsertQueryEntries: b.cacheEntriesUpserted
      }),
        Nn(t.internalActions, b)
      const { middleware: C, actions: S } = sC({
        reducerPath: i,
        context: f,
        queryThunk: g,
        mutationThunk: y,
        api: t,
        assertTagType: d
      })
      Nn(t.util, S), Nn(t, { reducer: x, middleware: C })
      const {
        buildQuerySelector: E,
        buildMutationSelector: T,
        selectInvalidatedBy: k,
        selectCachedArgsForQuery: M
      } = KS({ serializeQueryArgs: o, reducerPath: i, createSelector: e })
      Nn(t.util, { selectInvalidatedBy: k, selectCachedArgsForQuery: M })
      const {
        buildInitiateQuery: L,
        buildInitiateMutation: O,
        getRunningMutationThunk: A,
        getRunningMutationsThunk: z,
        getRunningQueriesThunk: I,
        getRunningQueryThunk: R
      } = US({
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
          getRunningQueryThunk: R,
          getRunningQueriesThunk: I
        }),
        {
          name: Pm,
          injectEndpoint(N, F) {
            var V
            const $ = t
            ;(V = $.endpoints)[N] ?? (V[N] = {}),
              M1(F)
                ? Nn(
                    $.endpoints[N],
                    { name: N, select: E(N, F), initiate: L(N, F) },
                    v(g, N)
                  )
                : HS(F) &&
                  Nn(
                    $.endpoints[N],
                    { name: N, select: T(), initiate: O(N) },
                    v(y, N)
                  )
          }
        }
      )
    }
  })
function uC(e) {
  return e.type === 'query'
}
function cC(e) {
  return e.type === 'mutation'
}
function Ka(e, ...t) {
  return Object.assign(e, ...t)
}
function Fu(e) {
  return e.replace(e[0], e[0].toUpperCase())
}
var Gr = WeakMap ? new WeakMap() : void 0,
  dC = ({ endpointName: e, queryArgs: t }) => {
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
  $u = Symbol()
function Mm(e, t, n, r) {
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
function Du(e) {
  const t = j.useRef(e)
  return (
    j.useEffect(() => {
      bo(t.current, e) || (t.current = e)
    }, [e]),
    bo(t.current, e) ? t.current : e
  )
}
var fC = () =>
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  pC = fC(),
  hC = () => typeof navigator < 'u' && navigator.product === 'ReactNative',
  mC = hC(),
  vC = () => (pC || mC ? j.useLayoutEffect : j.useEffect),
  gC = vC(),
  yC = (e) =>
    e.isUninitialized
      ? {
          ...e,
          isUninitialized: !1,
          isFetching: !0,
          isLoading: e.data === void 0,
          status: E1.pending
        }
      : e
function _C({
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
  function c(y, _, w) {
    if (_ != null && _.endpointName && y.isUninitialized) {
      const { endpointName: C } = _,
        S = l.endpointDefinitions[C]
      s({
        queryArgs: _.originalArgs,
        endpointDefinition: S,
        endpointName: C
      }) === s({ queryArgs: w, endpointDefinition: S, endpointName: C }) &&
        (_ = void 0)
    }
    let m = y.isSuccess ? y.data : _ == null ? void 0 : _.data
    m === void 0 && (m = y.data)
    const p = m !== void 0,
      v = y.isLoading,
      x = (!_ || _.isLoading || _.isUninitialized) && !p && v,
      b = y.isSuccess || (v && p)
    return {
      ...y,
      data: m,
      currentData: y.data,
      isFetching: v,
      isLoading: x,
      isSuccess: b
    }
  }
  function f(y, _) {
    const w = n(),
      m = Du(_)
    return j.useCallback(
      (p, v) => w(e.util.prefetch(y, p, { ...m, ...v })),
      [y, w, m]
    )
  }
  function d(y) {
    const _ = (
        p,
        {
          refetchOnReconnect: v,
          refetchOnFocus: x,
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
        const L = Mm(C ? mr : p, dC, l.endpointDefinitions[y], y),
          O = Du({
            refetchOnReconnect: v,
            refetchOnFocus: x,
            pollingInterval: S,
            skipPollingIfUnfocused: E
          }),
          A = j.useRef(!1),
          z = j.useRef(void 0)
        let { queryCacheKey: I, requestId: R } = z.current || {},
          N = !1
        I && R && (N = M.current.isRequestSubscribed(I, R))
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
      w = ({
        refetchOnReconnect: p,
        refetchOnFocus: v,
        pollingInterval: x = 0,
        skipPollingIfUnfocused: b = !1
      } = {}) => {
        const { initiate: C } = e.endpoints[y],
          S = n(),
          [E, T] = j.useState($u),
          k = j.useRef(void 0),
          M = Du({
            refetchOnReconnect: p,
            refetchOnFocus: v,
            pollingInterval: x,
            skipPollingIfUnfocused: b
          })
        u(() => {
          var z, I
          const A = (z = k.current) == null ? void 0 : z.subscriptionOptions
          M !== A && ((I = k.current) == null || I.updateSubscriptionOptions(M))
        }, [M])
        const L = j.useRef(M)
        u(() => {
          L.current = M
        }, [M])
        const O = j.useCallback(
          function (A, z = !1) {
            let I
            return (
              t(() => {
                var R
                ;(R = k.current) == null || R.unsubscribe(),
                  (k.current = I =
                    S(
                      C(A, { subscriptionOptions: L.current, forceRefetch: !z })
                    )),
                  T(A)
              }),
              I
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
            E !== $u && !k.current && O(E, !0)
          }, [E, O]),
          j.useMemo(() => [O, E], [O, E])
        )
      },
      m = (p, { skip: v = !1, selectFromResult: x } = {}) => {
        const { select: b } = e.endpoints[y],
          C = Mm(v ? mr : p, s, l.endpointDefinitions[y], y),
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
              x
                ? a([E], x, {
                    devModeChecks: { identityFunctionCheck: 'never' }
                  })
                : E,
            [E, x]
          ),
          k = r((O) => T(O, S.current), bo),
          M = i(),
          L = E(M.getState(), S.current)
        return (
          gC(() => {
            S.current = L
          }, [L]),
          k
        )
      }
    return {
      useQueryState: m,
      useQuerySubscription: _,
      useLazyQuerySubscription: w,
      useLazyQuery(p) {
        const [v, x] = w(p),
          b = m(x, { ...p, skip: x === $u }),
          C = j.useMemo(() => ({ lastArg: x }), [x])
        return j.useMemo(() => [v, b, C], [v, b, C])
      },
      useQuery(p, v) {
        const x = _(p, v),
          b = m(p, {
            selectFromResult: p === mr || (v != null && v.skip) ? void 0 : yC,
            ...v
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
          j.useMemo(() => ({ ...b, ...x }), [b, x])
        )
      }
    }
  }
  function g(y) {
    return ({ selectFromResult: _, fixedCacheKey: w } = {}) => {
      const { select: m, initiate: p } = e.endpoints[y],
        v = n(),
        [x, b] = j.useState()
      j.useEffect(
        () => () => {
          ;(x != null && x.arg.fixedCacheKey) || x == null || x.reset()
        },
        [x]
      )
      const C = j.useCallback(
          function (V) {
            const q = v(p(V, { fixedCacheKey: w }))
            return b(q), q
          },
          [v, p, w]
        ),
        { requestId: S } = x || {},
        E = j.useMemo(
          () =>
            m({
              fixedCacheKey: w,
              requestId: x == null ? void 0 : x.requestId
            }),
          [w, x, m]
        ),
        T = j.useMemo(() => (_ ? a([E], _) : E), [_, E]),
        k = r(T, bo),
        M = w == null ? (x == null ? void 0 : x.arg.originalArgs) : void 0,
        L = j.useCallback(() => {
          t(() => {
            x && b(void 0),
              w &&
                v(
                  e.internalActions.removeMutationResult({
                    requestId: S,
                    fixedCacheKey: w
                  })
                )
          })
        }, [v, w, x, S]),
        {
          endpointName: O,
          data: A,
          status: z,
          isLoading: I,
          isSuccess: R,
          isError: N,
          error: F
        } = k
      j.useDebugValue({
        endpointName: O,
        data: A,
        status: z,
        isLoading: I,
        isSuccess: R,
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
var wC = Symbol(),
  xC = ({
    batch: e = Ox,
    hooks: t = { useDispatch: s1, useSelector: r1, useStore: a1 },
    createSelector: n = hp,
    unstable__sideEffectsInRender: r = !1,
    ...i
  } = {}) => ({
    name: wC,
    init(o, { serializeQueryArgs: a }, s) {
      const l = o,
        {
          buildQueryHooks: u,
          buildMutationHook: c,
          usePrefetch: f
        } = _C({
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
            if (uC(g)) {
              const {
                useQuery: y,
                useLazyQuery: _,
                useLazyQuerySubscription: w,
                useQueryState: m,
                useQuerySubscription: p
              } = u(d)
              Ka(l.endpoints[d], {
                useQuery: y,
                useLazyQuery: _,
                useLazyQuerySubscription: w,
                useQueryState: m,
                useQuerySubscription: p
              }),
                (o[`use${Fu(d)}Query`] = y),
                (o[`useLazy${Fu(d)}Query`] = _)
            } else if (cC(g)) {
              const y = c(d)
              Ka(l.endpoints[d], { useMutation: y }),
                (o[`use${Fu(d)}Mutation`] = y)
            }
          }
        }
      )
    }
  }),
  L1 = XS(lC(), xC())
const Qr = 'shopninja-optimarko.myshopify.com',
  Eo = L1({
    reducerPath: 'orderEditApi',
    baseQuery: k1({
      baseUrl: 'https://order-editing-staging.cleversity.com/api/storefront'
    }),
    endpoints: (e) => ({
      searchOrder: e.query({
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
    useSearchOrderQuery: bC,
    useCancelOrderMutation: oP,
    useLazyGetCalculatedOrderQuery: aP,
    useChangeQuantityMutation: sP,
    useChangeSippingAddressMutation: lP,
    useChangeSizeAndVariantsMutation: uP
  } = Eo,
  SC = { order: {}, page: 'Home' },
  A1 = In({
    name: 'orderEdit',
    initialState: SC,
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
  { setPage: CC } = A1.actions,
  EC = A1.reducer,
  TC = () => {
    const [e, t] = j.useState(''),
      [n, { isLoading: r, isError: i }] = bC(),
      [o, a] = j.useState(''),
      s = s1(),
      l = async (u) => {
        var d, g, y, _, w
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
          (w = (_ = f.data) == null ? void 0 : _.order) != null &&
            w.id &&
            s(CC('OrderDetails'))
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
        className: He.opt_search_order_container,
        children: h.jsxs('div', {
          className: He.loginComponent,
          children: [
            h.jsx('div', {
              className: He.loginBanner,
              children: h.jsx('img', {
                className: He.bannerImage,
                src: e,
                alt: 'Login Banner'
              })
            }),
            h.jsx('div', {
              className: He.loginForm,
              children: h.jsxs('div', {
                className: He.formContainer,
                children: [
                  h.jsx('h1', { className: He.title, children: 'Edit order' }),
                  h.jsx('small', {
                    className: He.subtitle,
                    children:
                      'Enter your order name and Email to find your order.'
                  }),
                  h.jsxs('form', {
                    onSubmit: l,
                    className: He.form,
                    children: [
                      h.jsx('div', {
                        className: He.inputGroup,
                        children: h.jsx('input', {
                          required: !0,
                          name: 'orderName',
                          type: 'text',
                          placeholder: 'Order name',
                          className: He.inputField
                        })
                      }),
                      h.jsx('div', {
                        className: He.inputGroup,
                        children: h.jsx('input', {
                          required: !0,
                          name: 'email',
                          type: 'text',
                          placeholder: 'Email address',
                          className: He.inputField
                        })
                      }),
                      h.jsx('div', {
                        className: He.buttonGroup,
                        children: h.jsx('button', {
                          className: He.signInButton,
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
  kC = '_opt_order_edit_container_1pc9h_1',
  jC = '_setting_1pc9h_15',
  PC = '_content_1pc9h_37',
  MC = '_order_details_desktop_1pc9h_51',
  NC = '_order_summary_desktop_1pc9h_53',
  OC = '_productSection_1pc9h_61',
  LC = '_productLabel_1pc9h_71',
  AC = '_settings_box_1pc9h_83',
  IC = '_settings_icon_1pc9h_99',
  RC = '_settings_label_1pc9h_125',
  FC = '_productCard_1pc9h_133',
  $C = '_productImage_1pc9h_151',
  DC = '_productContent_1pc9h_175',
  zC = '_title_1pc9h_181',
  VC = '_description_1pc9h_197',
  BC = '_price_1pc9h_209',
  HC = '_addToCartBtn_1pc9h_221',
  qC = '_modal_main_container_1pc9h_257',
  WC = '_settings_more_box_1pc9h_287',
  UC = '_settings_title_section_1pc9h_333',
  GC = '_settings_title_1pc9h_333',
  QC = '_settings_btn_1pc9h_361',
  fe = {
    opt_order_edit_container: kC,
    setting: jC,
    content: PC,
    order_details_desktop: MC,
    order_summary_desktop: NC,
    productSection: OC,
    productLabel: LC,
    settings_box: AC,
    settings_icon: IC,
    settings_label: RC,
    productCard: FC,
    productImage: $C,
    productContent: DC,
    title: zC,
    description: VC,
    price: BC,
    addToCartBtn: HC,
    modal_main_container: qC,
    settings_more_box: WC,
    settings_title_section: UC,
    settings_title: GC,
    settings_btn: QC
  },
  KC = ({
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
  Nm = ({
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
  YC = ({
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
  ZC = ({
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
  JC = ({
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
  eE = ({
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
  zu = ({
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
const I1 = {
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
  return wp(e, I1), e
}
const tE = {
  document: I1,
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
function gt() {
  const e = typeof window < 'u' ? window : {}
  return wp(e, tE), e
}
function nE(e) {
  return (
    e === void 0 && (e = ''),
    e
      .trim()
      .split(' ')
      .filter((t) => !!t.trim())
  )
}
function rE(e) {
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
function _d(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t)
}
function sl() {
  return Date.now()
}
function iE(e) {
  const t = gt()
  let n
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  )
}
function oE(e, t) {
  t === void 0 && (t = 'x')
  const n = gt()
  let r, i, o
  const a = iE(e)
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
function aE(e) {
  return typeof window < 'u' && typeof window.HTMLElement < 'u'
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11)
}
function lt() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ['__proto__', 'constructor', 'prototype']
  for (let n = 1; n < arguments.length; n += 1) {
    const r = n < 0 || arguments.length <= n ? void 0 : arguments[n]
    if (r != null && !aE(r)) {
      const i = Object.keys(Object(r)).filter((o) => t.indexOf(o) < 0)
      for (let o = 0, a = i.length; o < a; o += 1) {
        const s = i[o],
          l = Object.getOwnPropertyDescriptor(r, s)
        l !== void 0 &&
          l.enumerable &&
          (Xa(e[s]) && Xa(r[s])
            ? r[s].__swiper__
              ? (e[s] = r[s])
              : lt(e[s], r[s])
            : !Xa(e[s]) && Xa(r[s])
            ? ((e[s] = {}), r[s].__swiper__ ? (e[s] = r[s]) : lt(e[s], r[s]))
            : (e[s] = r[s]))
      }
    }
  }
  return e
}
function Ya(e, t, n) {
  e.style.setProperty(t, n)
}
function R1(e) {
  let { swiper: t, targetPosition: n, side: r } = e
  const i = gt(),
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
function Jt(e, t) {
  t === void 0 && (t = '')
  const n = [...e.children]
  return (
    e instanceof HTMLSlotElement && n.push(...e.assignedElements()),
    t ? n.filter((r) => r.matches(t)) : n
  )
}
function sE(e, t) {
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
function ul(e, t) {
  t === void 0 && (t = [])
  const n = document.createElement(e)
  return n.classList.add(...(Array.isArray(t) ? t : nE(t))), n
}
function lE(e, t) {
  const n = []
  for (; e.previousElementSibling; ) {
    const r = e.previousElementSibling
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r)
  }
  return n
}
function uE(e, t) {
  const n = []
  for (; e.nextElementSibling; ) {
    const r = e.nextElementSibling
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r)
  }
  return n
}
function Vn(e, t) {
  return gt().getComputedStyle(e, null).getPropertyValue(t)
}
function Lm(e) {
  let t = e,
    n
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; ) t.nodeType === 1 && (n += 1)
    return n
  }
}
function cE(e, t) {
  const n = []
  let r = e.parentElement
  for (; r; ) n.push(r), (r = r.parentElement)
  return n
}
function Am(e, t, n) {
  const r = gt()
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
function cn(e) {
  return (Array.isArray(e) ? e : [e]).filter((t) => !!t)
}
let Vu
function dE() {
  const e = gt(),
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
function F1() {
  return Vu || (Vu = dE()), Vu
}
let Bu
function fE(e) {
  let { userAgent: t } = e === void 0 ? {} : e
  const n = F1(),
    r = gt(),
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
function $1(e) {
  return e === void 0 && (e = {}), Bu || (Bu = fE(e)), Bu
}
let Hu
function pE() {
  const e = gt(),
    t = $1()
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
function hE() {
  return Hu || (Hu = pE()), Hu
}
function mE(e) {
  let { swiper: t, on: n, emit: r } = e
  const i = gt()
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
            f.forEach((w) => {
              let { contentBoxSize: m, contentRect: p, target: v } = w
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
function vE(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e
  const o = [],
    a = gt(),
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
          const c = cE(t.hostEl)
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
var gE = {
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
function yE() {
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
function _E() {
  const e = this
  function t(k, M) {
    return parseFloat(k.getPropertyValue(e.getDirectionLabel(M)) || 0)
  }
  const n = e.params,
    { wrapperEl: r, slidesEl: i, size: o, rtlTranslate: a, wrongRTL: s } = e,
    l = e.virtual && n.virtual.enabled,
    u = l ? e.virtual.slides.length : e.slides.length,
    c = Jt(i, `.${e.params.slideClass}, swiper-slide`),
    f = l ? e.virtual.slides.length : c.length
  let d = []
  const g = [],
    y = []
  let _ = n.slidesOffsetBefore
  typeof _ == 'function' && (_ = n.slidesOffsetBefore.call(e))
  let w = n.slidesOffsetAfter
  typeof w == 'function' && (w = n.slidesOffsetAfter.call(e))
  const m = e.snapGrid.length,
    p = e.slidesGrid.length
  let v = n.spaceBetween,
    x = -_,
    b = 0,
    C = 0
  if (typeof o > 'u') return
  typeof v == 'string' && v.indexOf('%') >= 0
    ? (v = (parseFloat(v.replace('%', '')) / 100) * o)
    : typeof v == 'string' && (v = parseFloat(v)),
    (e.virtualSize = -v),
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
          E = e.isHorizontal() ? Am(M, 'width') : Am(M, 'height')
        else {
          const z = t(L, 'width'),
            I = t(L, 'padding-left'),
            R = t(L, 'padding-right'),
            N = t(L, 'margin-left'),
            F = t(L, 'margin-right'),
            $ = L.getPropertyValue('box-sizing')
          if ($ && $ === 'border-box') E = z + N + F
          else {
            const { clientWidth: V, offsetWidth: q } = M
            E = z + I + R + N + F + (q - V)
          }
        }
        O && (M.style.transform = O),
          A && (M.style.webkitTransform = A),
          n.roundLengths && (E = Math.floor(E))
      } else
        (E = (o - (n.slidesPerView - 1) * v) / n.slidesPerView),
          n.roundLengths && (E = Math.floor(E)),
          c[k] && (c[k].style[e.getDirectionLabel('width')] = `${E}px`)
      c[k] && (c[k].swiperSlideSize = E),
        y.push(E),
        n.centeredSlides
          ? ((x = x + E / 2 + b / 2 + v),
            b === 0 && k !== 0 && (x = x - o / 2 - v),
            k === 0 && (x = x - o / 2 - v),
            Math.abs(x) < 1 / 1e3 && (x = 0),
            n.roundLengths && (x = Math.floor(x)),
            C % n.slidesPerGroup === 0 && d.push(x),
            g.push(x))
          : (n.roundLengths && (x = Math.floor(x)),
            (C - Math.min(e.params.slidesPerGroupSkip, C)) %
              e.params.slidesPerGroup ===
              0 && d.push(x),
            g.push(x),
            (x = x + E + v)),
        (e.virtualSize += E + v),
        (b = E),
        (C += 1)
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, o) + w),
    a &&
      s &&
      (n.effect === 'slide' || n.effect === 'coverflow') &&
      (r.style.width = `${e.virtualSize + v}px`),
    n.setWrapperSize &&
      (r.style[e.getDirectionLabel('width')] = `${e.virtualSize + v}px`),
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
    const k = y[0] + v
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
  if ((d.length === 0 && (d = [0]), v !== 0)) {
    const k =
      e.isHorizontal() && a ? 'marginLeft' : e.getDirectionLabel('marginRight')
    c.filter((M, L) =>
      !n.cssMode || n.loop ? !0 : L !== c.length - 1
    ).forEach((M) => {
      M.style[k] = `${v}px`
    })
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let k = 0
    y.forEach((L) => {
      k += L + (v || 0)
    }),
      (k -= v)
    const M = k > o ? k - o : 0
    d = d.map((L) => (L <= 0 ? -_ : L > M ? M + w : L))
  }
  if (n.centerInsufficientSlides) {
    let k = 0
    y.forEach((L) => {
      k += L + (v || 0)
    }),
      (k -= v)
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
    d.length !== m &&
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
function wE(e) {
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
function xE() {
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
function bE(e) {
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
      w =
        (g >= 0 && g < t.size - 1) ||
        (y > 1 && y <= t.size) ||
        (g <= 0 && y >= t.size)
    w && (t.visibleSlides.push(u), t.visibleSlidesIndexes.push(l)),
      Im(u, w, n.slideVisibleClass),
      Im(u, _, n.slideFullyVisibleClass),
      (u.progress = i ? -f : f),
      (u.originalProgress = i ? -d : d)
  }
}
function SE(e) {
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
const qu = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n)
}
function CE() {
  const e = this,
    { slides: t, params: n, slidesEl: r, activeIndex: i } = e,
    o = e.virtual && n.virtual.enabled,
    a = e.grid && n.grid && n.grid.rows > 1,
    s = (f) => Jt(r, `.${n.slideClass}${f}, swiper-slide${f}`)[0]
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
      ((c = uE(l, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !c && (c = t[0]),
      (u = lE(l, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !u === 0 && (u = t[t.length - 1]))),
    t.forEach((f) => {
      qu(f, f === l, n.slideActiveClass),
        qu(f, f === c, n.slideNextClass),
        qu(f, f === u, n.slidePrevClass)
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
  Wu = (e, t) => {
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
          s.includes(l.column) && Wu(e, u)
        })
      return
    }
    const o = i + r - 1
    if (e.params.rewind || e.params.loop)
      for (let a = i - t; a <= o + t; a += 1) {
        const s = ((a % n) + n) % n
        ;(s < i || s > o) && Wu(e, s)
      }
    else
      for (let a = Math.max(i - t, 0); a <= Math.min(o + t, n - 1); a += 1)
        a !== i && (a > o || a < i) && Wu(e, a)
  }
function EE(e) {
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
function TE(e) {
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
  if ((typeof l > 'u' && (l = EE(t)), r.indexOf(n) >= 0)) u = r.indexOf(n)
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
function kE(e, t) {
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
var jE = {
  updateSize: yE,
  updateSlides: _E,
  updateAutoHeight: wE,
  updateSlidesOffset: xE,
  updateSlidesProgress: bE,
  updateProgress: SE,
  updateSlidesClasses: CE,
  updateActiveIndex: TE,
  updateClickedSlide: kE
}
function PE(e) {
  e === void 0 && (e = this.isHorizontal() ? 'x' : 'y')
  const t = this,
    { params: n, rtlTranslate: r, translate: i, wrapperEl: o } = t
  if (n.virtualTranslate) return r ? -i : i
  if (n.cssMode) return i
  let a = oE(o, e)
  return (a += t.cssOverflowAdjustment()), r && (a = -a), a || 0
}
function ME(e, t) {
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
function NE() {
  return -this.snapGrid[0]
}
function OE() {
  return -this.snapGrid[this.snapGrid.length - 1]
}
function LE(e, t, n, r, i) {
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
          R1({ swiper: o, targetPosition: -c, side: f ? 'left' : 'top' }), !0
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
var AE = {
  getTranslate: PE,
  setTranslate: ME,
  minTranslate: NE,
  maxTranslate: OE,
  translateTo: LE
}
function IE(e, t) {
  const n = this
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? '0ms' : '')),
    n.emit('setTransition', e, t)
}
function D1(e) {
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
function RE(e, t) {
  e === void 0 && (e = !0)
  const n = this,
    { params: r } = n
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    D1({ swiper: n, runCallbacks: e, direction: t, step: 'Start' }))
}
function FE(e, t) {
  e === void 0 && (e = !0)
  const n = this,
    { params: r } = n
  ;(n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      D1({ swiper: n, runCallbacks: e, direction: t, step: 'End' }))
}
var $E = { setTransition: IE, transitionStart: RE, transitionEnd: FE }
function DE(e, t, n, r, i) {
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
  let w = _ + Math.floor((a - _) / o.params.slidesPerGroup)
  w >= l.length && (w = l.length - 1)
  const m = -l[w]
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
          R1({ swiper: o, targetPosition: C, side: b ? 'left' : 'top' }), !0
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
function zE(e, t, n, r) {
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
function VE(e, t, n) {
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
function BE(e, t, n) {
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
  let w = 0
  if (
    (typeof _ < 'u' &&
      ((w = a.indexOf(_)),
      w < 0 && (w = r.activeIndex - 1),
      i.slidesPerView === 'auto' &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((w = w - r.slidesPerViewDynamic('previous', !0) + 1),
        (w = Math.max(w, 0)))),
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
        r.slideTo(w, e, t, n)
      }),
      !0
    )
  return r.slideTo(w, e, t, n)
}
function HE(e, t, n) {
  t === void 0 && (t = !0)
  const r = this
  if (!r.destroyed)
    return (
      typeof e > 'u' && (e = r.params.speed), r.slideTo(r.activeIndex, e, t, n)
    )
}
function qE(e, t, n, r) {
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
function WE() {
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
              Jt(n, `${a}[data-swiper-slide-index="${o}"]`)[0]
            )),
            _d(() => {
              e.slideTo(i)
            }))
          : e.slideTo(i)
        : i > e.slides.length - r
        ? (e.loopFix(),
          (i = e.getSlideIndex(
            Jt(n, `${a}[data-swiper-slide-index="${o}"]`)[0]
          )),
          _d(() => {
            e.slideTo(i)
          }))
        : e.slideTo(i)
  } else e.slideTo(i)
}
var UE = {
  slideTo: DE,
  slideToLoop: zE,
  slideNext: VE,
  slidePrev: BE,
  slideReset: HE,
  slideToClosest: qE,
  slideToClickedSlide: WE
}
function GE(e) {
  const t = this,
    { params: n, slidesEl: r } = t
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return
  const i = () => {
      Jt(r, `.${n.slideClass}, swiper-slide`).forEach((f, d) => {
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
          ? ul('swiper-slide', [n.slideBlankClass])
          : ul('div', [n.slideClass, n.slideBlankClass])
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
function QE(e) {
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
  const w = g.slidesPerGroupAuto ? _ : g.slidesPerGroup
  let m = w
  m % w !== 0 && (m += w - (m % w)),
    (m += g.loopAdditionalSlides),
    (l.loopedSlides = m)
  const p = l.grid && g.grid && g.grid.rows > 1
  u.length < _ + m
    ? ll(
        'Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters'
      )
    : p &&
      g.grid.fill === 'row' &&
      ll(
        'Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`'
      )
  const v = [],
    x = []
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
  if (L < m) {
    E = Math.max(m - L, w)
    for (let O = 0; O < m - L; O += 1) {
      const A = O - Math.floor(O / k) * k
      if (p) {
        const z = k - A - 1
        for (let I = u.length - 1; I >= 0; I -= 1)
          u[I].column === z && v.push(I)
      } else v.push(k - A - 1)
    }
  } else if (L + _ > k - m) {
    T = Math.max(L - (k - m * 2), w)
    for (let O = 0; O < T; O += 1) {
      const A = O - Math.floor(O / k) * k
      p
        ? u.forEach((z, I) => {
            z.column === A && x.push(I)
          })
        : x.push(A)
    }
  }
  if (
    ((l.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      l.__preventObserver__ = !1
    }),
    S &&
      v.forEach((O) => {
        ;(u[O].swiperLoopMoveDOM = !0),
          d.prepend(u[O]),
          (u[O].swiperLoopMoveDOM = !1)
      }),
    C &&
      x.forEach((O) => {
        ;(u[O].swiperLoopMoveDOM = !0),
          d.append(u[O]),
          (u[O].swiperLoopMoveDOM = !1)
      }),
    l.recalcSlides(),
    g.slidesPerView === 'auto'
      ? l.updateSlides()
      : p &&
        ((v.length > 0 && S) || (x.length > 0 && C)) &&
        l.slides.forEach((O, A) => {
          l.grid.updateSlide(A, O, l.slides)
        }),
    g.watchSlidesProgress && l.updateSlidesOffset(),
    n)
  ) {
    if (v.length > 0 && S) {
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
        const O = p ? v.length / g.grid.rows : v.length
        l.slideTo(l.activeIndex + O, 0, !1, !0),
          (l.touchEventsData.currentTranslate = l.translate)
      }
    } else if (x.length > 0 && C)
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
        const O = p ? x.length / g.grid.rows : x.length
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
function KE() {
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
var XE = { loopCreate: GE, loopFix: QE, loopDestroy: KE }
function YE(e) {
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
function ZE() {
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
var JE = { setGrabCursor: YE, unsetGrabCursor: ZE }
function e4(e, t) {
  t === void 0 && (t = this)
  function n(r) {
    if (!r || r === _n() || r === gt()) return null
    r.assignedSlot && (r = r.assignedSlot)
    const i = r.closest(e)
    return !i && !r.getRootNode ? null : i || n(r.getRootNode().host)
  }
  return n(t)
}
function Rm(e, t, n) {
  const r = gt(),
    { params: i } = e,
    o = i.edgeSwipeDetection,
    a = i.edgeSwipeThreshold
  return o && (n <= a || n >= r.innerWidth - a)
    ? o === 'prevent'
      ? (t.preventDefault(), !0)
      : !1
    : !0
}
function t4(e) {
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
    Rm(t, r, r.targetTouches[0].pageX)
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
    (o.touchEventsTarget === 'wrapper' && !sE(l, t.wrapperEl)) ||
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
  if (o.noSwiping && (d ? e4(f, l) : l.closest(f))) {
    t.allowClick = !0
    return
  }
  if (o.swipeHandler && !l.closest(o.swipeHandler)) return
  ;(a.currentX = r.pageX), (a.currentY = r.pageY)
  const g = a.currentX,
    y = a.currentY
  if (!Rm(t, r, g)) return
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
  const w = _ && t.allowTouchMove && o.touchStartPreventDefault
  ;(o.touchStartForcePreventDefault || w) &&
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
function n4(e) {
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
  const w = n.touchesDirection
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
      w !== n.touchesDirection &&
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
  let x = !0,
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
          ((x = !1),
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
          ((x = !1),
          i.resistance &&
            (r.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - r.startTranslate - y) ** b))),
    x && (l.preventedByNestedSwiper = !0),
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
function r4(e) {
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
    _d(() => {
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
    w = t.slidesSizesGrid[0]
  for (
    let b = 0;
    b < u.length;
    b += b < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
  ) {
    const C = b < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup
    typeof u[b + C] < 'u'
      ? (y || (g >= u[b] && g < u[b + C])) && ((_ = b), (w = u[b + C] - u[b]))
      : (y || g >= u[b]) && ((_ = b), (w = u[u.length - 1] - u[u.length - 2]))
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
  const v = (g - u[_]) / w,
    x = _ < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup
  if (d > a.longSwipesMs) {
    if (!a.longSwipes) {
      t.slideTo(t.activeIndex)
      return
    }
    t.swipeDirection === 'next' &&
      (v >= a.longSwipesRatio
        ? t.slideTo(a.rewind && t.isEnd ? m : _ + x)
        : t.slideTo(_)),
      t.swipeDirection === 'prev' &&
        (v > 1 - a.longSwipesRatio
          ? t.slideTo(_ + x)
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
        ? t.slideTo(_ + x)
        : t.slideTo(_)
      : (t.swipeDirection === 'next' && t.slideTo(m !== null ? m : _ + x),
        t.swipeDirection === 'prev' && t.slideTo(p !== null ? p : _))
  }
}
function Fm() {
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
function i4(e) {
  const t = this
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())))
}
function o4() {
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
function a4(e) {
  const t = this
  Cs(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== 'auto' && !t.params.autoHeight)
    ) && t.update()
}
function s4() {
  const e = this
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0),
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = 'auto'))
}
const z1 = (e, t) => {
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
          Fm,
          !0
        )
      : e[u]('observerUpdate', Fm, !0),
    i[l]('load', e.onLoad, { capture: !0 }))
}
function l4() {
  const e = this,
    { params: t } = e
  ;(e.onTouchStart = t4.bind(e)),
    (e.onTouchMove = n4.bind(e)),
    (e.onTouchEnd = r4.bind(e)),
    (e.onDocumentTouchStart = s4.bind(e)),
    t.cssMode && (e.onScroll = o4.bind(e)),
    (e.onClick = i4.bind(e)),
    (e.onLoad = a4.bind(e)),
    z1(e, 'on')
}
function u4() {
  z1(this, 'off')
}
var c4 = { attachEvents: l4, detachEvents: u4 }
const $m = (e, t) => e.grid && t.grid && t.grid.rows > 1
function d4() {
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
      const x = r[v] && r[v].enabled,
        b = l[v] && l[v].enabled
      x && !b && e[v].disable(), !x && b && e[v].enable()
    })
  const y = l.direction && l.direction !== r.direction,
    _ = r.loop && (l.slidesPerView !== r.slidesPerView || y),
    w = r.loop
  y && n && e.changeDirection(), lt(e.params, l)
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
        : !w && p
        ? (e.loopCreate(t), e.updateSlides())
        : w && !p && e.loopDestroy()),
    e.emit('breakpoint', l)
}
function f4(e, t, n) {
  if ((t === void 0 && (t = 'window'), !e || (t === 'container' && !n))) return
  let r = !1
  const i = gt(),
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
var p4 = { setBreakpoint: d4, getBreakpoint: f4 }
function h4(e, t) {
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
function m4() {
  const e = this,
    { classNames: t, params: n, rtl: r, el: i, device: o } = e,
    a = h4(
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
function v4() {
  const e = this,
    { el: t, classNames: n } = e
  !t ||
    typeof t == 'string' ||
    (t.classList.remove(...n), e.emitContainerClasses())
}
var g4 = { addClasses: m4, removeClasses: v4 }
function y4() {
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
var _4 = { checkOverflow: y4 },
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
function w4(e, t) {
  return function (r) {
    r === void 0 && (r = {})
    const i = Object.keys(r)[0],
      o = r[i]
    if (typeof o != 'object' || o === null) {
      lt(t, r)
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
      lt(t, r)
      return
    }
    typeof e[i] == 'object' && !('enabled' in e[i]) && (e[i].enabled = !0),
      e[i] || (e[i] = { enabled: !1 }),
      lt(t, r)
  }
}
const Uu = {
    eventsEmitter: gE,
    update: jE,
    translate: AE,
    transition: $E,
    slide: UE,
    loop: XE,
    grabCursor: JE,
    events: c4,
    breakpoints: p4,
    checkOverflow: _4,
    classes: g4
  },
  Gu = {}
let xp = class fn {
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
      (n = lt({}, n)),
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
          const d = lt({}, n, { el: f })
          c.push(new fn(d))
        }),
        c
      )
    }
    const s = this
    ;(s.__swiper__ = !0),
      (s.support = F1()),
      (s.device = $1({ userAgent: n.userAgent })),
      (s.browser = hE()),
      (s.eventsListeners = {}),
      (s.eventsAnyListeners = []),
      (s.modules = [...s.__modules__]),
      n.modules && Array.isArray(n.modules) && s.modules.push(...n.modules)
    const l = {}
    s.modules.forEach((c) => {
      c({
        params: n,
        swiper: s,
        extendParams: w4(n, l),
        on: s.on.bind(s),
        once: s.once.bind(s),
        off: s.off.bind(s),
        emit: s.emit.bind(s)
      })
    })
    const u = lt({}, xd, l)
    return (
      (s.params = lt({}, u, Gu, n)),
      (s.originalParams = lt({}, s.params)),
      (s.passedParams = lt({}, n)),
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
      i = Jt(n, `.${r.slideClass}, swiper-slide`),
      o = Lm(i[0])
    return Lm(t) - o
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
    t.slides = Jt(n, `.${r.slideClass}, swiper-slide`)
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
        : Jt(r, i())[0]
    return (
      !a &&
        n.params.createElements &&
        ((a = ul('div', n.params.wrapperClass)),
        r.append(a),
        Jt(r, `.${n.params.slideClass}`).forEach((s) => {
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
          (r.el && typeof r.el != 'string' && (r.el.swiper = null), rE(r)),
        (r.destroyed = !0)),
      null
    )
  }
  static extendDefaults(t) {
    lt(Gu, t)
  }
  static get extendedDefaults() {
    return Gu
  }
  static get defaults() {
    return xd
  }
  static installModule(t) {
    fn.prototype.__modules__ || (fn.prototype.__modules__ = [])
    const n = fn.prototype.__modules__
    typeof t == 'function' && n.indexOf(t) < 0 && n.push(t)
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => fn.installModule(n)), fn)
      : (fn.installModule(t), fn)
  }
}
Object.keys(Uu).forEach((e) => {
  Object.keys(Uu[e]).forEach((t) => {
    xp.prototype[t] = Uu[e][t]
  })
})
xp.use([mE, vE])
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
function x4(e) {
  return (
    e === void 0 && (e = ''),
    e
      ? e.includes('swiper-wrapper')
        ? e
        : `swiper-wrapper ${e}`
      : 'swiper-wrapper'
  )
}
function b4(e) {
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
  let w, m, p, v, x, b, C, S
  i.includes('thumbs') &&
    r.thumbs &&
    r.thumbs.swiper &&
    !r.thumbs.swiper.destroyed &&
    c.thumbs &&
    (!c.thumbs.swiper || c.thumbs.swiper.destroyed) &&
    (w = !0),
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
      (x = !0)
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
    w && _.init() && _.update(!0),
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
    x &&
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
function S4(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !0)
  const n = { on: {} },
    r = {},
    i = {}
  xi(n, xd), (n._emitClasses = !0), (n.init = !1)
  const o = {},
    a = V1.map((l) => l.replace(/_/, '')),
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
function C4(e, t) {
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
function E4(e, t, n, r, i) {
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
const T4 = (e) => {
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
function cl() {
  return (
    (cl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    cl.apply(this, arguments)
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
function k4(e) {
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
function j4(e, t, n) {
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
const Dm = j.createContext(null),
  P4 = j.createContext(null),
  bp = j.forwardRef(function (e, t) {
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
      w = j.useRef(null),
      m = j.useRef(null),
      p = j.useRef(null),
      v = j.useRef(null),
      x = j.useRef(null),
      b = j.useRef(null),
      C = j.useRef(null),
      S = j.useRef(null),
      { params: E, passedParams: T, rest: k, events: M } = S4(s),
      { slides: L, slots: O } = k4(o),
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
        (m.current = new xp(F)),
        m.current.virtual && m.current.params.virtual.enabled)
      ) {
        m.current.virtual.slides = L
        const $ = {
          cache: !1,
          slides: L,
          renderExternal: d,
          renderExternalUpdate: !1
        }
        xi(m.current.params.virtual, $), xi(m.current.originalParams.virtual, $)
      }
    }
    w.current || z(), m.current && m.current.on('_beforeBreakpoint', A)
    const I = () => {
        l ||
          !M ||
          !m.current ||
          Object.keys(M).forEach((F) => {
            m.current.on(F, M[F])
          })
      },
      R = () => {
        !M ||
          !m.current ||
          Object.keys(M).forEach((F) => {
            m.current.off(F, M[F])
          })
      }
    j.useEffect(() => () => {
      m.current && m.current.off('_beforeBreakpoint', A)
    }),
      j.useEffect(() => {
        !_.current &&
          m.current &&
          (m.current.emitSlidesClasses(), (_.current = !0))
      }),
      To(() => {
        if ((t && (t.current = w.current), !!w.current))
          return (
            m.current.destroyed && z(),
            C4(
              {
                el: w.current,
                nextEl: x.current,
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
        I()
        const F = E4(T, p.current, L, v.current, ($) => $.key)
        return (
          (p.current = T),
          (v.current = L),
          F.length &&
            m.current &&
            !m.current.destroyed &&
            b4({
              swiper: m.current,
              slides: L,
              passedParams: T,
              changedParams: F,
              nextEl: x.current,
              prevEl: b.current,
              scrollbarEl: S.current,
              paginationEl: C.current
            }),
          () => {
            R()
          }
        )
      }),
      To(() => {
        T4(m.current)
      }, [f])
    function N() {
      return E.virtual
        ? j4(m.current, L, f)
        : L.map((F, $) =>
            te.cloneElement(F, { swiper: m.current, swiperSlideIndex: $ })
          )
    }
    return te.createElement(
      r,
      cl({ ref: w, className: W1(`${u}${n ? ` ${n}` : ''}`) }, k),
      te.createElement(
        P4.Provider,
        { value: m.current },
        O['container-start'],
        te.createElement(
          i,
          { className: x4(E.wrapperClass) },
          O['wrapper-start'],
          N(),
          O['wrapper-end']
        ),
        B1(E) &&
          te.createElement(
            te.Fragment,
            null,
            te.createElement('div', {
              ref: b,
              className: 'swiper-button-prev'
            }),
            te.createElement('div', { ref: x, className: 'swiper-button-next' })
          ),
        q1(E) &&
          te.createElement('div', { ref: S, className: 'swiper-scrollbar' }),
        H1(E) &&
          te.createElement('div', { ref: C, className: 'swiper-pagination' }),
        O['container-end']
      )
    )
  })
bp.displayName = 'Swiper'
const Sp = j.forwardRef(function (e, t) {
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
  function w(x, b, C) {
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
        o.on('_slideClass', w),
        () => {
          o && o.off('_slideClass', w)
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
    cl(
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
Sp.displayName = 'SwiperSlide'
function M4(e, t, n, r) {
  return (
    e.params.createElements &&
      Object.keys(r).forEach((i) => {
        if (!n[i] && n.auto === !0) {
          let o = Jt(e.el, `.${r[i]}`)[0]
          o || ((o = ul('div', r[i])), (o.className = r[i]), e.el.append(o)),
            (n[i] = o),
            (t[i] = o)
        }
      }),
    n
  )
}
function N4(e) {
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
    const w = t.params.navigation
    ;(y = cn(y)),
      y.forEach((m) => {
        m &&
          (m.classList[_ ? 'add' : 'remove'](...w.disabledClass.split(' ')),
          m.tagName === 'BUTTON' && (m.disabled = _),
          t.params.watchOverflow &&
            t.enabled &&
            m.classList[t.isLocked ? 'add' : 'remove'](w.lockClass))
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
      ((t.params.navigation = M4(
        t,
        t.originalParams.navigation,
        t.params.navigation,
        { nextEl: 'swiper-button-next', prevEl: 'swiper-button-prev' }
      )),
      !(y.nextEl || y.prevEl))
    )
      return
    let _ = o(y.nextEl),
      w = o(y.prevEl)
    Object.assign(t.navigation, { nextEl: _, prevEl: w }),
      (_ = cn(_)),
      (w = cn(w))
    const m = (p, v) => {
      p && p.addEventListener('click', v === 'next' ? u : l),
        !t.enabled && p && p.classList.add(...y.lockClass.split(' '))
    }
    _.forEach((p) => m(p, 'next')), w.forEach((p) => m(p, 'prev'))
  }
  function f() {
    let { nextEl: y, prevEl: _ } = t.navigation
    ;(y = cn(y)), (_ = cn(_))
    const w = (m, p) => {
      m.removeEventListener('click', p === 'next' ? u : l),
        m.classList.remove(...t.params.navigation.disabledClass.split(' '))
    }
    y.forEach((m) => w(m, 'next')), _.forEach((m) => w(m, 'prev'))
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
      if (((y = cn(y)), (_ = cn(_)), t.enabled)) {
        s()
        return
      }
      ;[...y, ..._]
        .filter((w) => !!w)
        .forEach((w) => w.classList.add(t.params.navigation.lockClass))
    }),
    r('click', (y, _) => {
      let { nextEl: w, prevEl: m } = t.navigation
      ;(w = cn(w)), (m = cn(m))
      const p = _.target
      let v = m.includes(p) || w.includes(p)
      if (t.isElement && !v) {
        const x = _.path || (_.composedPath && _.composedPath())
        x && (v = x.find((b) => w.includes(b) || m.includes(b)))
      }
      if (t.params.navigation.hideOnClick && !v) {
        if (
          t.pagination &&
          t.params.pagination &&
          t.params.pagination.clickable &&
          (t.pagination.el === p || t.pagination.el.contains(p))
        )
          return
        let x
        w.length
          ? (x = w[0].classList.contains(t.params.navigation.hiddenClass))
          : m.length &&
            (x = m[0].classList.contains(t.params.navigation.hiddenClass)),
          i(x === !0 ? 'navigationShow' : 'navigationHide'),
          [...w, ...m]
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
function O4(e) {
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
    w,
    m,
    p
  function v(N) {
    !t ||
      t.destroyed ||
      !t.wrapperEl ||
      (N.target === t.wrapperEl &&
        (t.wrapperEl.removeEventListener('transitionend', v),
        !(p || (N.detail && N.detail.bySwiperTouchMove)) && k()))
  }
  const x = () => {
      if (t.destroyed || !t.autoplay.running) return
      t.autoplay.paused ? (d = !0) : d && ((u = c), (d = !1))
      const N = t.autoplay.paused ? c : f + u - new Date().getTime()
      ;(t.autoplay.timeLeft = N),
        i('autoplayTimeLeft', N, N / l),
        (s = requestAnimationFrame(() => {
          x()
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
      cancelAnimationFrame(s), x()
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
      clearTimeout(a), N || (m = !0)
      const $ = () => {
        i('autoplayPause'),
          t.params.autoplay.waitForTransition
            ? t.wrapperEl.addEventListener('transitionend', v)
            : k()
      }
      if (((t.autoplay.paused = !0), F)) {
        w && (c = t.params.autoplay.delay), (w = !1), $()
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
        m ? ((m = !1), C(c)) : C(),
        (t.autoplay.paused = !1),
        i('autoplayResume'))
    },
    M = () => {
      if (t.destroyed || !t.autoplay.running) return
      const N = _n()
      N.visibilityState === 'hidden' && ((m = !0), T(!0)),
        N.visibilityState === 'visible' && k()
    },
    L = (N) => {
      N.pointerType === 'mouse' &&
        ((m = !0), (p = !0), !(t.animating || t.autoplay.paused) && T(!0))
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
    I = () => {
      _n().addEventListener('visibilitychange', M)
    },
    R = () => {
      _n().removeEventListener('visibilitychange', M)
    }
  r('init', () => {
    t.params.autoplay.enabled && (A(), I(), S())
  }),
    r('destroy', () => {
      z(), R(), t.autoplay.running && E()
    }),
    r('_freeModeStaticRelease', () => {
      ;(y || m) && k()
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
          (m = !1),
          (_ = setTimeout(() => {
            ;(m = !0), (y = !0), T(!0)
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
      t.destroyed || !t.autoplay.running || (w = !0)
    }),
    Object.assign(t.autoplay, { start: S, stop: E, pause: T, resume: k })
}
const L4 = '_modal_content_1asip_1',
  A4 = '_singleModalContent_1asip_27',
  I4 = '_save_btn_1asip_27',
  R4 = '_generate_invoice_btn_1asip_29',
  F4 = '_modal_close_icon_1asip_53',
  $4 = '_product_search_box_1asip_59',
  D4 = '_search_icon_1asip_83',
  z4 = '_sidebar_1asip_95',
  V4 = '_sidebarTitle_1asip_107',
  B4 = '_sidebarMenu_1asip_117',
  H4 = '_sidebarItem_1asip_129',
  q4 = '_settingsContainer_1asip_159',
  W4 = '_modal_content_header_1asip_171',
  U4 = '_form_item_1asip_185',
  G4 = '_selectContainer_1asip_199',
  Q4 = '_form_Item_double_1asip_239',
  K4 = '_input__label_1asip_251',
  X4 = '_select_country_icon_1asip_301',
  Y4 = '_select_proviences_icon_1asip_303',
  Z4 = '_phone_field_1asip_319',
  J4 = '_country_code_1asip_327',
  eT = '_phone_code_select_container_1asip_343',
  tT = '_country_code_select_1asip_367',
  nT = '_vatriant_product_main_container_1asip_397',
  rT = '_quantity_product_main_container_1asip_399',
  iT = '_switch_product_main_container_1asip_417',
  oT = '_download_invoice_content_1asip_419',
  aT = '_add_another_product_main_container_1asip_421',
  sT = '_product_box_1asip_473',
  lT = '_action_btn_box_1asip_475',
  uT = '_product_box_content_1asip_477',
  cT = '_product_variant_1asip_505',
  dT = '_product_title_1asip_515',
  fT = '_quantity_product_price_desktop_1asip_523',
  pT = '_quantity_product_price_mobile_1asip_529',
  hT = '_quantity_product_action_box_mobile_1asip_539',
  mT = '_product_image_box_1asip_557',
  vT = '_action_btn_1asip_475',
  gT = '_product_quantity_1asip_605',
  yT = '_product_quantity_title_1asip_607',
  _T = '_variant_product_box_1asip_621',
  wT = '_variant_product_box_content_1asip_623',
  xT = '_variant_select_box_1asip_633',
  bT = '_product_content_1asip_489',
  ST = '_product_price_1asip_647',
  CT = '_shipping_method_content_1asip_665',
  ET = '_method_radio_1asip_683',
  TT = '_shipping_method_name_1asip_695',
  kT = '_method_price_1asip_697',
  jT = '_product_variant_container_1asip_705',
  PT = '_address_container_1asip_819',
  MT = '_address_title_1asip_833',
  NT = '_address_name_1asip_845',
  OT = '_address_1asip_819',
  LT = '_customize_invoice_title_1asip_857',
  AT = '_purchasing_checkbox_1asip_867',
  IT = '_billing_details_checkbox_1asip_869',
  RT = '_invoice_radio_container_1asip_879',
  FT = '_invoice_radio_1asip_879',
  $T = '_download_method_1asip_903',
  DT = '_business_form_1asip_909',
  zT = '_billing_address_form_1asip_911',
  VT = '_gift_message_text_area_1asip_919',
  BT = '_switch_product_box_1asip_935',
  HT = '_switch_product_box_content_1asip_937',
  qT = '_view_details_box_1asip_967',
  WT = '_switch_single_product_action_btn_1asip_979',
  UT = '_add_to_cart_1asip_999',
  GT = '_switch_single_product_box_1asip_1007',
  QT = '_switch_single_product_image_box_1asip_1017',
  KT = '_switch_single_product_default_image_1asip_1035',
  XT = '_switch_single_product_quantity_box_1asip_1045',
  YT = '_switch_single_product_variant_select_1asip_1053',
  ZT = '_switch_single_product_title_1asip_1067',
  JT = '_switch_single_product_price_1asip_1077',
  e5 = '_switch_single_product_quantity_btn_1asip_1087',
  t5 = '_switch_single_product_more_image_box_1asip_1101',
  n5 = '_switch_single_product_more_image_1asip_1101',
  r5 = '_add_another_product_box_1asip_1147',
  i5 = '_add_another_product_box_content_1asip_1149',
  o5 = '_add_another_product_action_btn_1asip_1191',
  a5 = '_buy_now_1asip_1211',
  s5 = '_add_another_single_product_box_1asip_1219',
  l5 = '_add_another_product_image_box_1asip_1231',
  u5 = '_add_another_single_product_default_image_1asip_1243',
  c5 = '_add_another_product_description_1asip_1271',
  d5 = '_switch_single_product_description_1asip_1273',
  f5 = '_add_another_single_product_quantity_box_1asip_1283',
  p5 = '_add_another_product_variant_select_1asip_1293',
  h5 = '_add_another_single_product_title_1asip_1309',
  m5 = '_add_another_single_product_price_1asip_1321',
  v5 = '_add_another_single_product_quantity_btn_1asip_1333',
  g5 = '_add_another_single_product_more_image_box_1asip_1349',
  y5 = '_add_another_single_product_more_image_1asip_1349',
  _5 = '_settings_mobile_box_1asip_1395',
  w5 = '_mobile_sidebar_item_1asip_1455',
  x5 = '_mobile_settings_icon_1asip_1483',
  b5 = '_quantity_product_action_box_desktop_1asip_1615',
  S5 = '_disabled_1asip_1687',
  C5 = '_settings_header_box_1asip_1697',
  P = {
    modal_content: L4,
    singleModalContent: A4,
    save_btn: I4,
    generate_invoice_btn: R4,
    modal_close_icon: F4,
    product_search_box: $4,
    search_icon: D4,
    sidebar: z4,
    sidebarTitle: V4,
    sidebarMenu: B4,
    sidebarItem: H4,
    settingsContainer: q4,
    modal_content_header: W4,
    form_item: U4,
    selectContainer: G4,
    form_Item_double: Q4,
    input__label: K4,
    select_country_icon: X4,
    select_proviences_icon: Y4,
    phone_field: Z4,
    country_code: J4,
    phone_code_select_container: eT,
    country_code_select: tT,
    vatriant_product_main_container: nT,
    quantity_product_main_container: rT,
    switch_product_main_container: iT,
    download_invoice_content: oT,
    add_another_product_main_container: aT,
    product_box: sT,
    action_btn_box: lT,
    product_box_content: uT,
    product_variant: cT,
    product_title: dT,
    quantity_product_price_desktop: fT,
    quantity_product_price_mobile: pT,
    quantity_product_action_box_mobile: hT,
    product_image_box: mT,
    action_btn: vT,
    product_quantity: gT,
    product_quantity_title: yT,
    variant_product_box: _T,
    variant_product_box_content: wT,
    variant_select_box: xT,
    product_content: bT,
    product_price: ST,
    shipping_method_content: CT,
    method_radio: ET,
    shipping_method_name: TT,
    method_price: kT,
    product_variant_container: jT,
    address_container: PT,
    address_title: MT,
    address_name: NT,
    address: OT,
    customize_invoice_title: LT,
    purchasing_checkbox: AT,
    billing_details_checkbox: IT,
    invoice_radio_container: RT,
    invoice_radio: FT,
    download_method: $T,
    business_form: DT,
    billing_address_form: zT,
    gift_message_text_area: VT,
    switch_product_box: BT,
    switch_product_box_content: HT,
    view_details_box: qT,
    switch_single_product_action_btn: WT,
    add_to_cart: UT,
    switch_single_product_box: GT,
    switch_single_product_image_box: QT,
    switch_single_product_default_image: KT,
    switch_single_product_quantity_box: XT,
    switch_single_product_variant_select: YT,
    switch_single_product_title: ZT,
    switch_single_product_price: JT,
    switch_single_product_quantity_btn: e5,
    switch_single_product_more_image_box: t5,
    switch_single_product_more_image: n5,
    add_another_product_box: r5,
    add_another_product_box_content: i5,
    add_another_product_action_btn: o5,
    buy_now: a5,
    add_another_single_product_box: s5,
    add_another_product_image_box: l5,
    add_another_single_product_default_image: u5,
    add_another_product_description: c5,
    switch_single_product_description: d5,
    add_another_single_product_quantity_box: f5,
    add_another_product_variant_select: p5,
    add_another_single_product_title: h5,
    add_another_single_product_price: m5,
    add_another_single_product_quantity_btn: v5,
    add_another_single_product_more_image_box: g5,
    add_another_single_product_more_image: y5,
    settings_mobile_box: _5,
    mobile_sidebar_item: w5,
    mobile_settings_icon: x5,
    quantity_product_action_box_desktop: b5,
    disabled: S5,
    settings_header_box: C5
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
  mn = [
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
  Q1 = ({ handleCloseModal: e }) => {
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
    return h.jsx('div', {
      className: P.singleModalContent,
      children: h.jsx('div', {
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
                          mn == null
                            ? void 0
                            : mn.map((s, l) =>
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
    })
  },
  E5 = ({ handleCloseModal: e }) => {
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
  T5 = ({ handleCloseModal: e }) => {
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
                                        }),
                                        h.jsx('p', {
                                          className:
                                            P.quantity_product_price_mobile,
                                          children: '$200'
                                        }),
                                        h.jsx('div', {
                                          className:
                                            P.quantity_product_action_box_mobile,
                                          children: h.jsxs('div', {
                                            className: P.action_btn_box,
                                            children: [
                                              h.jsx('button', {
                                                className: P.action_btn,
                                                children: h.jsx('svg', {
                                                  width: '14px',
                                                  height: '14px',
                                                  xmlns:
                                                    'http://www.w3.org/2000/svg',
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
                                                  xmlns:
                                                    'http://www.w3.org/2000/svg',
                                                  viewBox: '0 0 24 24',
                                                  fill: 'currentColor',
                                                  children: h.jsx('path', {
                                                    d: 'M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z'
                                                  })
                                                })
                                              })
                                            ]
                                          })
                                        })
                                      ]
                                    })
                                  ]
                                }),
                                h.jsx('div', {
                                  className:
                                    P.quantity_product_action_box_desktop,
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
                                  className: P.quantity_product_price_desktop,
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
  k5 = ({ handleCloseModal: e }) => {
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
  j5 = ({ handleCloseModal: e }) => {
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
  P5 = ({ handleCloseModal: e }) => {
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
  M5 = ({ handleCloseModal: e }) =>
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
var K1 = { exports: {} }
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
})(K1)
var N5 = K1.exports
const Mr = hf(N5)
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
var O5 = Symbol.for('react.element'),
  L5 = Symbol.for('react.transitional.element'),
  A5 = Symbol.for('react.fragment')
function X1(e) {
  return (
    e &&
    X(e) === 'object' &&
    (e.$$typeof === O5 || e.$$typeof === L5) &&
    e.type === A5
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
          : X1(r) && r.props
          ? (n = n.concat(bd(r.props.children, t)))
          : n.push(r))
    }),
    n
  )
}
var Sd = {},
  I5 = function (t) {}
function R5(e, t) {}
function F5(e, t) {}
function $5() {
  Sd = {}
}
function Y1(e, t, n) {
  !t && !Sd[n] && (e(!1, n), (Sd[n] = !0))
}
function kt(e, t) {
  Y1(R5, e, t)
}
function D5(e, t) {
  Y1(F5, e, t)
}
kt.preMessage = I5
kt.resetWarned = $5
kt.noteOnce = D5
function z5(e, t) {
  if (X(e) != 'object' || !e) return e
  var n = e[Symbol.toPrimitive]
  if (n !== void 0) {
    var r = n.call(e, t || 'default')
    if (X(r) != 'object') return r
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
function Z1(e) {
  var t = z5(e, 'string')
  return X(t) == 'symbol' ? t : t + ''
}
function D(e, t, n) {
  return (
    (t = Z1(t)) in e
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
function zm(e, t) {
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
      ? zm(Object(n), !0).forEach(function (r) {
          D(e, r, n[r])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : zm(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
  }
  return e
}
function Vm(e) {
  return e instanceof HTMLElement || e instanceof SVGElement
}
function V5(e) {
  return e && X(e) === 'object' && Vm(e.nativeElement)
    ? e.nativeElement
    : Vm(e)
    ? e
    : null
}
function B5(e) {
  var t = V5(e)
  if (t) return t
  if (e instanceof te.Component) {
    var n
    return (n = ad.findDOMNode) === null || n === void 0
      ? void 0
      : n.call(ad, e)
  }
  return null
}
var J1 = { exports: {} },
  oe = {}
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cp = Symbol.for('react.element'),
  Ep = Symbol.for('react.portal'),
  $l = Symbol.for('react.fragment'),
  Dl = Symbol.for('react.strict_mode'),
  zl = Symbol.for('react.profiler'),
  Vl = Symbol.for('react.provider'),
  Bl = Symbol.for('react.context'),
  H5 = Symbol.for('react.server_context'),
  Hl = Symbol.for('react.forward_ref'),
  ql = Symbol.for('react.suspense'),
  Wl = Symbol.for('react.suspense_list'),
  Ul = Symbol.for('react.memo'),
  Gl = Symbol.for('react.lazy'),
  q5 = Symbol.for('react.offscreen'),
  ey
ey = Symbol.for('react.module.reference')
function Nt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case Cp:
        switch (((e = e.type), e)) {
          case $l:
          case zl:
          case Dl:
          case ql:
          case Wl:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case H5:
              case Bl:
              case Hl:
              case Gl:
              case Ul:
              case Vl:
                return e
              default:
                return t
            }
        }
      case Ep:
        return t
    }
  }
}
oe.ContextConsumer = Bl
oe.ContextProvider = Vl
oe.Element = Cp
oe.ForwardRef = Hl
oe.Fragment = $l
oe.Lazy = Gl
oe.Memo = Ul
oe.Portal = Ep
oe.Profiler = zl
oe.StrictMode = Dl
oe.Suspense = ql
oe.SuspenseList = Wl
oe.isAsyncMode = function () {
  return !1
}
oe.isConcurrentMode = function () {
  return !1
}
oe.isContextConsumer = function (e) {
  return Nt(e) === Bl
}
oe.isContextProvider = function (e) {
  return Nt(e) === Vl
}
oe.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Cp
}
oe.isForwardRef = function (e) {
  return Nt(e) === Hl
}
oe.isFragment = function (e) {
  return Nt(e) === $l
}
oe.isLazy = function (e) {
  return Nt(e) === Gl
}
oe.isMemo = function (e) {
  return Nt(e) === Ul
}
oe.isPortal = function (e) {
  return Nt(e) === Ep
}
oe.isProfiler = function (e) {
  return Nt(e) === zl
}
oe.isStrictMode = function (e) {
  return Nt(e) === Dl
}
oe.isSuspense = function (e) {
  return Nt(e) === ql
}
oe.isSuspenseList = function (e) {
  return Nt(e) === Wl
}
oe.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === $l ||
    e === zl ||
    e === Dl ||
    e === ql ||
    e === Wl ||
    e === q5 ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Gl ||
        e.$$typeof === Ul ||
        e.$$typeof === Vl ||
        e.$$typeof === Bl ||
        e.$$typeof === Hl ||
        e.$$typeof === ey ||
        e.getModuleId !== void 0))
  )
}
oe.typeOf = Nt
J1.exports = oe
var Qu = J1.exports
function ty(e, t, n) {
  var r = j.useRef({})
  return (
    (!('value' in r.current) || n(r.current.condition, t)) &&
      ((r.current.value = e()), (r.current.condition = t)),
    r.current.value
  )
}
var ny = function (t, n) {
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
            ny(a, o)
          })
        }
  },
  ry = function (t) {
    var n, r
    if (!t) return !1
    if (iy(t) && t.props.propertyIsEnumerable('ref')) return !0
    var i = Qu.isMemo(t) ? t.type.type : t.type
    return !(
      (typeof i == 'function' &&
        !((n = i.prototype) !== null && n !== void 0 && n.render) &&
        i.$$typeof !== Qu.ForwardRef) ||
      (typeof t == 'function' &&
        !((r = t.prototype) !== null && r !== void 0 && r.render) &&
        t.$$typeof !== Qu.ForwardRef)
    )
  }
function iy(e) {
  return j.isValidElement(e) && !X1(e)
}
var oy = function (t) {
  if (t && iy(t)) {
    var n = t
    return n.props.propertyIsEnumerable('ref') ? n.props.ref : n.ref
  }
  return null
}
function nt(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function')
}
function Bm(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n]
    ;(r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, Z1(r.key), r)
  }
}
function rt(e, t, n) {
  return (
    t && Bm(e.prototype, t),
    n && Bm(e, n),
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
function W5(e, t) {
  if (t && (X(t) == 'object' || typeof t == 'function')) return t
  if (t !== void 0)
    throw new TypeError(
      'Derived constructors may only return object or undefined'
    )
  return Y(e)
}
function Vi(e) {
  var t = kp()
  return function () {
    var n,
      r = ta(e)
    if (t) {
      var i = ta(this).constructor
      n = Reflect.construct(r, arguments, i)
    } else n = r.apply(this, arguments)
    return W5(this, n)
  }
}
function U5(e, t) {
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
function G5(e) {
  if (Array.isArray(e)) return Cd(e)
}
function ay(e) {
  if (
    (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e)
}
function jp(e, t) {
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
function Q5() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function Q(e) {
  return G5(e) || ay(e) || jp(e) || Q5()
}
var sy = function (t) {
    return +setTimeout(t, 16)
  },
  ly = function (t) {
    return clearTimeout(t)
  }
typeof window < 'u' &&
  'requestAnimationFrame' in window &&
  ((sy = function (t) {
    return window.requestAnimationFrame(t)
  }),
  (ly = function (t) {
    return window.cancelAnimationFrame(t)
  }))
var Hm = 0,
  Pp = new Map()
function uy(e) {
  Pp.delete(e)
}
var Tn = function (t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1
  Hm += 1
  var r = Hm
  function i(o) {
    if (o === 0) uy(r), t()
    else {
      var a = sy(function () {
        i(o - 1)
      })
      Pp.set(r, a)
    }
  }
  return i(n), r
}
Tn.cancel = function (e) {
  var t = Pp.get(e)
  return uy(e), ly(t)
}
function cy(e) {
  if (Array.isArray(e)) return e
}
function K5(e, t) {
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
function dy() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function K(e, t) {
  return cy(e) || K5(e, t) || jp(e, t) || dy()
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
function X5(e, t) {
  if (!e) return !1
  if (e.contains) return e.contains(t)
  for (var n = t; n; ) {
    if (n === e) return !0
    n = n.parentNode
  }
  return !1
}
var qm = 'data-rc-order',
  Wm = 'data-rc-priority',
  Y5 = 'rc-util-key',
  Ed = new Map()
function fy() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = e.mark
  return t ? (t.startsWith('data-') ? t : 'data-'.concat(t)) : Y5
}
function Ql(e) {
  if (e.attachTo) return e.attachTo
  var t = document.querySelector('head')
  return t || document.body
}
function Z5(e) {
  return e === 'queue' ? 'prependQueue' : e ? 'prepend' : 'append'
}
function Mp(e) {
  return Array.from((Ed.get(e) || e).children).filter(function (t) {
    return t.tagName === 'STYLE'
  })
}
function py(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
  if (!Pn()) return null
  var n = t.csp,
    r = t.prepend,
    i = t.priority,
    o = i === void 0 ? 0 : i,
    a = Z5(r),
    s = a === 'prependQueue',
    l = document.createElement('style')
  l.setAttribute(qm, a),
    s && o && l.setAttribute(Wm, ''.concat(o)),
    n != null && n.nonce && (l.nonce = n == null ? void 0 : n.nonce),
    (l.innerHTML = e)
  var u = Ql(t),
    c = u.firstChild
  if (r) {
    if (s) {
      var f = (t.styles || Mp(u)).filter(function (d) {
        if (!['prepend', 'prependQueue'].includes(d.getAttribute(qm))) return !1
        var g = Number(d.getAttribute(Wm) || 0)
        return o >= g
      })
      if (f.length) return u.insertBefore(l, f[f.length - 1].nextSibling), l
    }
    u.insertBefore(l, c)
  } else u.appendChild(l)
  return l
}
function hy(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = Ql(t)
  return (t.styles || Mp(n)).find(function (r) {
    return r.getAttribute(fy(t)) === e
  })
}
function my(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = hy(e, t)
  if (n) {
    var r = Ql(t)
    r.removeChild(n)
  }
}
function J5(e, t) {
  var n = Ed.get(e)
  if (!n || !X5(document, n)) {
    var r = py('', t),
      i = r.parentNode
    Ed.set(e, i), e.removeChild(r)
  }
}
function bi(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = Ql(n),
    i = Mp(r),
    o = B(B({}, n), {}, { styles: i })
  J5(r, o)
  var a = hy(t, o)
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
  var c = py(e, o)
  return c.setAttribute(fy(o), t), c
}
function ek(e, t) {
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
    i = ek(e, t)
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
var tk = '%'
function kd(e) {
  return e.join(tk)
}
var nk = (function () {
    function e(t) {
      nt(this, e),
        D(this, 'instanceId', void 0),
        D(this, 'cache', new Map()),
        (this.instanceId = t)
    }
    return (
      rt(e, [
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
function rk() {
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
  return new nk(e)
}
var Kl = j.createContext({ hashPriority: 'low', cache: rk(), defaultCache: !0 })
function ik(e, t) {
  if (e.length !== t.length) return !1
  for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1
  return !0
}
var Np = (function () {
  function e() {
    nt(this, e),
      D(this, 'cache', void 0),
      D(this, 'keys', void 0),
      D(this, 'cacheCallTimes', void 0),
      (this.cache = new Map()),
      (this.keys = []),
      (this.cacheCallTimes = 0)
  }
  return (
    rt(e, [
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
                return !ik(r, n)
              })),
              this.deleteByPath(this.cache, n)
            )
        }
      }
    ]),
    e
  )
})()
D(Np, 'MAX_CACHE_SIZE', 20)
D(Np, 'MAX_CACHE_OFFSET', 5)
var Um = 0,
  vy = (function () {
    function e(t) {
      nt(this, e),
        D(this, 'derivatives', void 0),
        D(this, 'id', void 0),
        (this.derivatives = Array.isArray(t) ? t : [t]),
        (this.id = Um),
        t.length === 0 && (t.length > 0, void 0),
        (Um += 1)
    }
    return (
      rt(e, [
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
  Ku = new Np()
function jd(e) {
  var t = Array.isArray(e) ? e : [e]
  return Ku.has(t) || Ku.set(t, new vy(t)), Ku.get(t)
}
var ok = new WeakMap(),
  Xu = {}
function ak(e, t) {
  for (var n = ok, r = 0; r < t.length; r += 1) {
    var i = t[r]
    n.has(i) || n.set(i, new WeakMap()), (n = n.get(i))
  }
  return n.has(Xu) || n.set(Xu, e()), n.get(Xu)
}
var Gm = new WeakMap()
function ko(e) {
  var t = Gm.get(e) || ''
  return (
    t ||
      (Object.keys(e).forEach(function (n) {
        var r = e[n]
        ;(t += n),
          r instanceof vy
            ? (t += r.id)
            : r && X(r) === 'object'
            ? (t += ko(r))
            : (t += r)
      }),
      (t = na(t)),
      Gm.set(e, t)),
    t
  )
}
function Qm(e, t) {
  return na(''.concat(t, '_').concat(ko(e)))
}
var Pd = Pn()
function ra(e) {
  return typeof e == 'number' ? ''.concat(e, 'px') : e
}
function dl(e, t, n) {
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
  sk = function (t, n, r) {
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
  gy = function (t, n, r) {
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
      [o, sk(i, n, { scope: r == null ? void 0 : r.scope })]
    )
  },
  Km = Pn() ? j.useLayoutEffect : j.useEffect,
  yy = function (t, n) {
    var r = j.useRef(!0)
    Km(function () {
      return t(r.current)
    }, n),
      Km(function () {
        return (
          (r.current = !1),
          function () {
            r.current = !0
          }
        )
      }, [])
  },
  Xm = function (t, n) {
    yy(function (r) {
      if (!r) return t()
    }, n)
  },
  lk = B({}, Mo),
  Ym = lk.useInsertionEffect,
  uk = function (t, n, r) {
    j.useMemo(t, r),
      yy(function () {
        return n(!0)
      }, r)
  },
  ck = Ym
    ? function (e, t, n) {
        return Ym(function () {
          return e(), t()
        }, n)
      }
    : uk,
  dk = B({}, Mo),
  fk = dk.useInsertionEffect,
  pk = function (t) {
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
  hk = function () {
    return function (t) {
      t()
    }
  },
  mk = typeof fk < 'u' ? pk : hk
function Op(e, t, n, r, i) {
  var o = j.useContext(Kl),
    a = o.cache,
    s = [e].concat(Q(t)),
    l = kd(s),
    u = mk([l]),
    c = function (y) {
      a.opUpdate(l, function (_) {
        var w = _ || [void 0, void 0],
          m = K(w, 2),
          p = m[0],
          v = p === void 0 ? 0 : p,
          x = m[1],
          b = x,
          C = b || n(),
          S = [v, C]
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
    ck(
      function () {
        i == null || i(d)
      },
      function (g) {
        return (
          c(function (y) {
            var _ = K(y, 2),
              w = _[0],
              m = _[1]
            return g && w === 0 && (i == null || i(d)), [w + 1, m]
          }),
          function () {
            a.opUpdate(l, function (y) {
              var _ = y || [],
                w = K(_, 2),
                m = w[0],
                p = m === void 0 ? 0 : m,
                v = w[1],
                x = p - 1
              return x === 0
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
var vk = {},
  gk = 'css',
  cr = new Map()
function yk(e) {
  cr.set(e, (cr.get(e) || 0) + 1)
}
function _k(e, t) {
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
var wk = 0
function xk(e, t) {
  cr.set(e, (cr.get(e) || 0) - 1)
  var n = Array.from(cr.keys()),
    r = n.filter(function (i) {
      var o = cr.get(i) || 0
      return o <= 0
    })
  n.length - r.length > wk &&
    r.forEach(function (i) {
      _k(i, t), cr.delete(i)
    })
}
var bk = function (t, n, r, i) {
    var o = r.getDerivativeToken(t),
      a = B(B({}, o), n)
    return i && (a = i(a)), a
  },
  _y = 'token'
function Sk(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = j.useContext(Kl),
    i = r.cache.instanceId,
    o = r.container,
    a = n.salt,
    s = a === void 0 ? '' : a,
    l = n.override,
    u = l === void 0 ? vk : l,
    c = n.formatToken,
    f = n.getComputedToken,
    d = n.cssVar,
    g = ak(function () {
      return Object.assign.apply(Object, [{}].concat(Q(t)))
    }, t),
    y = ko(g),
    _ = ko(u),
    w = d ? ko(d) : '',
    m = Op(
      _y,
      [s, e.id, y, _, w],
      function () {
        var p,
          v = f ? f(g, u, e) : bk(g, u, e, c),
          x = B({}, v),
          b = ''
        if (d) {
          var C = gy(v, d.key, {
              prefix: d.prefix,
              ignore: d.ignore,
              unitless: d.unitless,
              preserve: d.preserve
            }),
            S = K(C, 2)
          ;(v = S[0]), (b = S[1])
        }
        var E = Qm(v, s)
        ;(v._tokenKey = E), (x._tokenKey = Qm(x, s))
        var T =
          (p = d == null ? void 0 : d.key) !== null && p !== void 0 ? p : E
        ;(v._themeKey = T), yk(T)
        var k = ''.concat(gk, '-').concat(na(E))
        return (v._hashId = k), [v, k, x, b, (d == null ? void 0 : d.key) || '']
      },
      function (p) {
        xk(p[0]._themeKey, i)
      },
      function (p) {
        var v = K(p, 4),
          x = v[0],
          b = v[3]
        if (d && b) {
          var C = bi(b, na('css-variables-'.concat(x._themeKey)), {
            mark: Ht,
            prepend: 'queue',
            attachTo: o,
            priority: -999
          })
          ;(C[Bn] = i), C.setAttribute(Oi, x._themeKey)
        }
      }
    )
  return m
}
var Ck = function (t, n, r) {
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
      g = dl(a, s, c, d, u)
    return [f, c, g]
  },
  Ek = {
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
  wy = 'comm',
  xy = 'rule',
  by = 'decl',
  Tk = '@import',
  kk = '@keyframes',
  jk = '@layer',
  Sy = Math.abs,
  Lp = String.fromCharCode
function Cy(e) {
  return e.trim()
}
function Ts(e, t, n) {
  return e.replace(t, n)
}
function Pk(e, t, n) {
  return e.indexOf(t, n)
}
function ia(e, t) {
  return e.charCodeAt(t) | 0
}
function Li(e, t, n) {
  return e.slice(t, n)
}
function Yt(e) {
  return e.length
}
function Mk(e) {
  return e.length
}
function Za(e, t) {
  return t.push(e), e
}
var Xl = 1,
  Ai = 1,
  Ey = 0,
  Mt = 0,
  _e = 0,
  Bi = ''
function Ap(e, t, n, r, i, o, a, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: o,
    line: Xl,
    column: Ai,
    length: a,
    return: '',
    siblings: s
  }
}
function Nk() {
  return _e
}
function Ok() {
  return (
    (_e = Mt > 0 ? ia(Bi, --Mt) : 0), Ai--, _e === 10 && ((Ai = 1), Xl--), _e
  )
}
function qt() {
  return (
    (_e = Mt < Ey ? ia(Bi, Mt++) : 0), Ai++, _e === 10 && ((Ai = 1), Xl++), _e
  )
}
function Hn() {
  return ia(Bi, Mt)
}
function ks() {
  return Mt
}
function Yl(e, t) {
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
function Lk(e) {
  return (Xl = Ai = 1), (Ey = Yt((Bi = e))), (Mt = 0), []
}
function Ak(e) {
  return (Bi = ''), e
}
function Yu(e) {
  return Cy(Yl(Mt - 1, Md(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}
function Ik(e) {
  for (; (_e = Hn()) && _e < 33; ) qt()
  return oa(e) > 2 || oa(_e) > 3 ? '' : ' '
}
function Rk(e, t) {
  for (
    ;
    --t &&
    qt() &&
    !(_e < 48 || _e > 102 || (_e > 57 && _e < 65) || (_e > 70 && _e < 97));

  );
  return Yl(e, ks() + (t < 6 && Hn() == 32 && qt() == 32))
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
function Fk(e, t) {
  for (; qt() && e + _e !== 57; ) if (e + _e === 84 && Hn() === 47) break
  return '/*' + Yl(t, Mt - 1) + '*' + Lp(e === 47 ? e : qt())
}
function $k(e) {
  for (; !oa(Hn()); ) qt()
  return Yl(e, Mt)
}
function Dk(e) {
  return Ak(js('', null, null, null, [''], (e = Lk(e)), 0, [0], e))
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
      w = 1,
      m = 1,
      p = 0,
      v = '',
      x = i,
      b = o,
      C = r,
      S = v;
    w;

  )
    switch (((y = p), (p = qt()))) {
      case 40:
        if (y != 108 && ia(S, f - 1) == 58) {
          Pk((S += Ts(Yu(p), '&', '&\f')), '&\f', Sy(u ? s[u - 1] : 0)) != -1 &&
            (m = -1)
          break
        }
      case 34:
      case 39:
      case 91:
        S += Yu(p)
        break
      case 9:
      case 10:
      case 13:
      case 32:
        S += Ik(y)
        break
      case 92:
        S += Rk(ks() - 1, 7)
        continue
      case 47:
        switch (Hn()) {
          case 42:
          case 47:
            Za(zk(Fk(qt(), ks()), t, n, l), l),
              (oa(y || 1) == 5 || oa(Hn() || 1) == 5) &&
                Yt(S) &&
                Li(S, -1, void 0) !== ' ' &&
                (S += ' ')
            break
          default:
            S += '/'
        }
        break
      case 123 * _:
        s[u++] = Yt(S) * m
      case 125 * _:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            w = 0
          case 59 + c:
            m == -1 && (S = Ts(S, /\f/g, '')),
              g > 0 &&
                (Yt(S) - f || (_ === 0 && y === 47)) &&
                Za(
                  g > 32
                    ? Jm(S + ';', r, n, f - 1, l)
                    : Jm(Ts(S, ' ', '') + ';', r, n, f - 2, l),
                  l
                )
            break
          case 59:
            S += ';'
          default:
            if (
              (Za(
                (C = Zm(S, t, n, u, c, i, s, v, (x = []), (b = []), f, o)),
                o
              ),
              p === 123)
            )
              if (c === 0) js(S, t, C, C, x, o, f, s, b)
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
                      r && Za(Zm(e, C, C, 0, 0, i, s, v, i, (x = []), f, b), b),
                      i,
                      b,
                      f,
                      s,
                      r ? x : b
                    )
                    break
                  default:
                    js(S, C, C, C, [''], b, 0, s, b)
                }
        }
        ;(u = c = g = 0), (_ = m = 1), (v = S = ''), (f = a)
        break
      case 58:
        ;(f = 1 + Yt(S)), (g = y)
      default:
        if (_ < 1) {
          if (p == 123) --_
          else if (p == 125 && _++ == 0 && Ok() == 125) continue
        }
        switch (((S += Lp(p)), p * _)) {
          case 38:
            m = c > 0 ? 1 : ((S += '\f'), -1)
            break
          case 44:
            ;(s[u++] = (Yt(S) - 1) * m), (m = 1)
            break
          case 64:
            Hn() === 45 && (S += Yu(qt())),
              (d = Hn()),
              (c = f = Yt((v = S += $k(ks())))),
              p++
            break
          case 45:
            y === 45 && Yt(S) == 2 && (_ = 0)
        }
    }
  return o
}
function Zm(e, t, n, r, i, o, a, s, l, u, c, f) {
  for (
    var d = i - 1, g = i === 0 ? o : [''], y = Mk(g), _ = 0, w = 0, m = 0;
    _ < r;
    ++_
  )
    for (var p = 0, v = Li(e, d + 1, (d = Sy((w = a[_])))), x = e; p < y; ++p)
      (x = Cy(w > 0 ? g[p] + ' ' + v : Ts(v, /&\f/g, g[p]))) && (l[m++] = x)
  return Ap(e, t, n, i === 0 ? xy : s, l, u, c, f)
}
function zk(e, t, n, r) {
  return Ap(e, t, n, wy, Lp(Nk()), Li(e, 2, -2), 0, r)
}
function Jm(e, t, n, r, i) {
  return Ap(e, t, n, by, Li(e, 0, r), Li(e, r + 1, -1), r, i)
}
function Nd(e, t) {
  for (var n = '', r = 0; r < e.length; r++) n += t(e[r], r, e, t) || ''
  return n
}
function Vk(e, t, n, r) {
  switch (e.type) {
    case jk:
      if (e.children.length) break
    case Tk:
    case by:
      return (e.return = e.return || e.value)
    case wy:
      return ''
    case kk:
      return (e.return = e.value + '{' + Nd(e.children, r) + '}')
    case xy:
      if (!Yt((e.value = e.props.join(',')))) return ''
  }
  return Yt((n = Nd(e.children, r))) ? (e.return = e.value + '{' + n + '}') : ''
}
var ev = 'data-ant-cssinjs-cache-path',
  Ty = '_FILE_STYLE__',
  wr,
  ky = !0
function Bk() {
  if (!wr && ((wr = {}), Pn())) {
    var e = document.createElement('div')
    ;(e.className = ev),
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
    var n = document.querySelector('style['.concat(ev, ']'))
    if (n) {
      var r
      ;(ky = !1),
        (r = n.parentNode) === null || r === void 0 || r.removeChild(n)
    }
    document.body.removeChild(e)
  }
}
function Hk(e) {
  return Bk(), !!wr[e]
}
function qk(e) {
  var t = wr[e],
    n = null
  if (t && Pn())
    if (ky) n = Ty
    else {
      var r = document.querySelector(
        'style['.concat(Ht, '="').concat(wr[e], '"]')
      )
      r ? (n = r.innerHTML) : delete wr[e]
    }
  return [n, t]
}
var Wk = '_skip_check_',
  jy = '_multi_value_'
function Ps(e) {
  var t = Nd(Dk(e), Vk)
  return t.replace(/\{%%%\:[^;];}/g, ';')
}
function Uk(e) {
  return X(e) === 'object' && e && (Wk in e || jy in e)
}
function tv(e, t, n) {
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
var Gk = function e(t) {
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
        x = K(v, 1),
        b = x[0]
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
  var w = _(Array.isArray(t) ? t : [t])
  return (
    w.forEach(function (m) {
      var p = typeof m == 'string' && !i ? {} : m
      if (typeof p == 'string')
        d += ''.concat(
          p,
          `
`
        )
      else if (p._keyframe) y(p)
      else {
        var v = f.reduce(function (x, b) {
          var C
          return (
            (b == null || (C = b.visit) === null || C === void 0
              ? void 0
              : C.call(b, x)) || x
          )
        }, p)
        Object.keys(v).forEach(function (x) {
          var b = v[x]
          if (
            X(b) === 'object' &&
            b &&
            (x !== 'animationName' || !b._keyframe) &&
            !Uk(b)
          ) {
            var C = !1,
              S = x.trim(),
              E = !1
            ;(i || o) && s
              ? S.startsWith('@')
                ? (C = !0)
                : S === '&'
                ? (S = tv('', s, u))
                : (S = tv(x, s, u))
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
            let z = function (I, R) {
              var N = I.replace(/[A-Z]/g, function ($) {
                  return '-'.concat($.toLowerCase())
                }),
                F = R
              !Ek[I] &&
                typeof F == 'number' &&
                F !== 0 &&
                (F = ''.concat(F, 'px')),
                I === 'animationName' &&
                  R !== null &&
                  R !== void 0 &&
                  R._keyframe &&
                  (y(R), (F = R.getName(s))),
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
            b[jy] &&
            Array.isArray(A)
              ? A.forEach(function (I) {
                  z(x, I)
                })
              : z(x, A)
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
function Py(e, t) {
  return na(''.concat(e.join('%')).concat(t))
}
function Qk() {
  return null
}
var My = 'style'
function Od(e, t) {
  var n = e.token,
    r = e.path,
    i = e.hashId,
    o = e.layer,
    a = e.nonce,
    s = e.clientOnly,
    l = e.order,
    u = l === void 0 ? 0 : l,
    c = j.useContext(Kl),
    f = c.autoClear
  c.mock
  var d = c.defaultCache,
    g = c.hashPriority,
    y = c.container,
    _ = c.ssrInline,
    w = c.transformers,
    m = c.linters,
    p = c.cache,
    v = c.layer,
    x = n._tokenKey,
    b = [x]
  v && b.push('layer'), b.push.apply(b, Q(r))
  var C = Pd,
    S = Op(
      My,
      b,
      function () {
        var L = b.join('|')
        if (Hk(L)) {
          var O = qk(L),
            A = K(O, 2),
            z = A[0],
            I = A[1]
          if (z) return [z, x, I, {}, s, u]
        }
        var R = t(),
          N = Gk(R, {
            hashId: i,
            hashPriority: g,
            layer: v ? o : void 0,
            path: r.join('-'),
            transformers: w,
            linters: m
          }),
          F = K(N, 2),
          $ = F[0],
          V = F[1],
          q = Ps($),
          G = Py(b, q)
        return [q, x, G, V, s, u]
      },
      function (L, O) {
        var A = K(L, 3),
          z = A[2]
        ;(O || f) && Pd && my(z, { mark: Ht })
      },
      function (L) {
        var O = K(L, 4),
          A = O[0]
        O[1]
        var z = O[2],
          I = O[3]
        if (C && A !== Ty) {
          var R = {
              mark: Ht,
              prepend: v ? !1 : 'queue',
              attachTo: y,
              priority: u
            },
            N = typeof a == 'function' ? a() : a
          N && (R.csp = { nonce: N })
          var F = [],
            $ = []
          Object.keys(I).forEach(function (q) {
            q.startsWith('@layer') ? F.push(q) : $.push(q)
          }),
            F.forEach(function (q) {
              bi(
                Ps(I[q]),
                '_layer-'.concat(q),
                B(B({}, R), {}, { prepend: !0 })
              )
            })
          var V = bi(A, z, R)
          ;(V[Bn] = p.instanceId),
            V.setAttribute(Oi, x),
            $.forEach(function (q) {
              bi(Ps(I[q]), '_effect-'.concat(q), R)
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
    if (!_ || C || !d) O = j.createElement(Qk, null)
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
var Kk = function (t, n, r) {
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
      (g = dl(o, a, s, y, d)),
      l &&
        Object.keys(l).forEach(function (_) {
          if (!n[_]) {
            n[_] = !0
            var w = Ps(l[_]),
              m = dl(w, a, '_effect-'.concat(_), y, d)
            _.startsWith('@layer') ? (g = m + g) : (g += m)
          }
        }),
      [c, s, g]
    )
  },
  Ny = 'cssVar',
  Xk = function (t, n) {
    var r = t.key,
      i = t.prefix,
      o = t.unitless,
      a = t.ignore,
      s = t.token,
      l = t.scope,
      u = l === void 0 ? '' : l,
      c = j.useContext(Kl),
      f = c.cache.instanceId,
      d = c.container,
      g = s._tokenKey,
      y = [].concat(Q(t.path), [r, u, g]),
      _ = Op(
        Ny,
        y,
        function () {
          var w = n(),
            m = gy(w, r, { prefix: i, unitless: o, ignore: a, scope: u }),
            p = K(m, 2),
            v = p[0],
            x = p[1],
            b = Py(y, x)
          return [v, x, b, r]
        },
        function (w) {
          var m = K(w, 3),
            p = m[2]
          Pd && my(p, { mark: Ht })
        },
        function (w) {
          var m = K(w, 3),
            p = m[1],
            v = m[2]
          if (p) {
            var x = bi(p, v, {
              mark: Ht,
              prepend: 'queue',
              attachTo: d,
              priority: -999
            })
            ;(x[Bn] = f), x.setAttribute(Oi, r)
          }
        }
      )
    return _
  },
  Yk = function (t, n, r) {
    var i = K(t, 4),
      o = i[1],
      a = i[2],
      s = i[3],
      l = r || {},
      u = l.plain
    if (!o) return null
    var c = -999,
      f = { 'data-rc-order': 'prependQueue', 'data-rc-priority': ''.concat(c) },
      d = dl(o, s, a, f, u)
    return [c, a, d]
  },
  io
;(io = {}), D(io, My, Kk), D(io, _y, Ck), D(io, Ny, Yk)
function Kr(e) {
  return (e.notSplit = !0), e
}
Kr(['borderTop', 'borderBottom']),
  Kr(['borderTop']),
  Kr(['borderBottom']),
  Kr(['borderLeft', 'borderRight']),
  Kr(['borderLeft']),
  Kr(['borderRight'])
var Zk = j.createContext({})
function Jk(e) {
  return cy(e) || ay(e) || jp(e) || dy()
}
function en(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null) return
    n = n[t[r]]
  }
  return n
}
function Oy(e, t, n, r) {
  if (!t.length) return n
  var i = Jk(t),
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
      : (s[o] = Oy(s[o], a, n, r)),
    s
  )
}
function Rt(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1
  return t.length && r && n === void 0 && !en(e, t.slice(0, -1))
    ? e
    : Oy(e, t, n, r)
}
function e8(e) {
  return (
    X(e) === 'object' &&
    e !== null &&
    Object.getPrototypeOf(e) === Object.prototype
  )
}
function nv(e) {
  return Array.isArray(e) ? [] : {}
}
var t8 = typeof Reflect > 'u' ? Object.keys : Reflect.ownKeys
function di() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n]
  var r = nv(t[0])
  return (
    t.forEach(function (i) {
      function o(a, s) {
        var l = new Set(s),
          u = en(i, a),
          c = Array.isArray(u)
        if (c || e8(u)) {
          if (!l.has(u)) {
            l.add(u)
            var f = en(r, a)
            c
              ? (r = Rt(r, a, []))
              : (!f || X(f) !== 'object') && (r = Rt(r, a, nv(u))),
              t8(u).forEach(function (d) {
                o([].concat(Q(a), [d]), l)
              })
          }
        } else r = Rt(r, a, u)
      }
      o([])
    }),
    r
  )
}
const n8 = j.createContext({}),
  r8 = j.createContext(void 0)
var i8 = {
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
  o8 = {
    yearFormat: 'YYYY',
    dayFormat: 'D',
    cellMeridiemFormat: 'A',
    monthBeforeYear: !0
  },
  a8 = B(
    B({}, o8),
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
  rv = {
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
      a8
    ),
    timePickerLocale: Object.assign({}, Ly)
  },
  it = '${label} is not a valid ${type}',
  Zl = {
    locale: 'en',
    Pagination: i8,
    DatePicker: rv,
    TimePicker: Ly,
    Calendar: rv,
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
Object.assign({}, Zl.Modal)
let Ms = []
const iv = () =>
  Ms.reduce((e, t) => Object.assign(Object.assign({}, e), t), Zl.Modal)
function s8(e) {
  if (e) {
    const t = Object.assign({}, e)
    return (
      Ms.push(t),
      iv(),
      () => {
        ;(Ms = Ms.filter((n) => n !== t)), iv()
      }
    )
  }
  Object.assign({}, Zl.Modal)
}
const Ay = j.createContext(void 0),
  l8 = 'internalMark',
  u8 = (e) => {
    const { locale: t = {}, children: n, _ANT_MARK__: r } = e
    j.useEffect(() => s8(t == null ? void 0 : t.Modal), [t])
    const i = j.useMemo(
      () => Object.assign(Object.assign({}, t), { exist: !0 }),
      [t]
    )
    return j.createElement(Ay.Provider, { value: i }, n)
  }
function Ae(e, t) {
  c8(e) && (e = '100%')
  var n = d8(e)
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
function c8(e) {
  return typeof e == 'string' && e.indexOf('.') !== -1 && parseFloat(e) === 1
}
function d8(e) {
  return typeof e == 'string' && e.indexOf('%') !== -1
}
function Iy(e) {
  return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e
}
function es(e) {
  return e <= 1 ? ''.concat(Number(e) * 100, '%') : e
}
function vr(e) {
  return e.length === 1 ? '0' + e : String(e)
}
function f8(e, t, n) {
  return { r: Ae(e, 255) * 255, g: Ae(t, 255) * 255, b: Ae(n, 255) * 255 }
}
function ov(e, t, n) {
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
function Zu(e, t, n) {
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
function p8(e, t, n) {
  var r, i, o
  if (((e = Ae(e, 360)), (t = Ae(t, 100)), (n = Ae(n, 100)), t === 0))
    (i = n), (o = n), (r = n)
  else {
    var a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - a
    ;(r = Zu(s, a, e + 1 / 3)), (i = Zu(s, a, e)), (o = Zu(s, a, e - 1 / 3))
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
function h8(e, t, n) {
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
function m8(e, t, n, r, i) {
  var o = [
    vr(Math.round(e).toString(16)),
    vr(Math.round(t).toString(16)),
    vr(Math.round(n).toString(16)),
    vr(v8(r))
  ]
  return i &&
    o[0].startsWith(o[0].charAt(1)) &&
    o[1].startsWith(o[1].charAt(1)) &&
    o[2].startsWith(o[2].charAt(1)) &&
    o[3].startsWith(o[3].charAt(1))
    ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0)
    : o.join('')
}
function v8(e) {
  return Math.round(parseFloat(e) * 255).toString(16)
}
function av(e) {
  return at(e) / 255
}
function at(e) {
  return parseInt(e, 16)
}
function g8(e) {
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
function Zr(e) {
  var t = { r: 0, g: 0, b: 0 },
    n = 1,
    r = null,
    i = null,
    o = null,
    a = !1,
    s = !1
  return (
    typeof e == 'string' && (e = w8(e)),
    typeof e == 'object' &&
      (dn(e.r) && dn(e.g) && dn(e.b)
        ? ((t = f8(e.r, e.g, e.b)),
          (a = !0),
          (s = String(e.r).substr(-1) === '%' ? 'prgb' : 'rgb'))
        : dn(e.h) && dn(e.s) && dn(e.v)
        ? ((r = es(e.s)),
          (i = es(e.v)),
          (t = h8(e.h, r, i)),
          (a = !0),
          (s = 'hsv'))
        : dn(e.h) &&
          dn(e.s) &&
          dn(e.l) &&
          ((r = es(e.s)),
          (o = es(e.l)),
          (t = p8(e.h, r, o)),
          (a = !0),
          (s = 'hsl')),
      Object.prototype.hasOwnProperty.call(e, 'a') && (n = e.a)),
    (n = Iy(n)),
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
var y8 = '[-\\+]?\\d+%?',
  _8 = '[-\\+]?\\d*\\.\\d+%?',
  qn = '(?:'.concat(_8, ')|(?:').concat(y8, ')'),
  Ju = '[\\s|\\(]+('
    .concat(qn, ')[,|\\s]+(')
    .concat(qn, ')[,|\\s]+(')
    .concat(qn, ')\\s*\\)?'),
  ec = '[\\s|\\(]+('
    .concat(qn, ')[,|\\s]+(')
    .concat(qn, ')[,|\\s]+(')
    .concat(qn, ')[,|\\s]+(')
    .concat(qn, ')\\s*\\)?'),
  Lt = {
    CSS_UNIT: new RegExp(qn),
    rgb: new RegExp('rgb' + Ju),
    rgba: new RegExp('rgba' + ec),
    hsl: new RegExp('hsl' + Ju),
    hsla: new RegExp('hsla' + ec),
    hsv: new RegExp('hsv' + Ju),
    hsva: new RegExp('hsva' + ec),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  }
function w8(e) {
  if (((e = e.trim().toLowerCase()), e.length === 0)) return !1
  var t = !1
  if (Id[e]) (e = Id[e]), (t = !0)
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
                                r: at(n[1]),
                                g: at(n[2]),
                                b: at(n[3]),
                                a: av(n[4]),
                                format: t ? 'name' : 'hex8'
                              }
                            : ((n = Lt.hex6.exec(e)),
                              n
                                ? {
                                    r: at(n[1]),
                                    g: at(n[2]),
                                    b: at(n[3]),
                                    format: t ? 'name' : 'hex'
                                  }
                                : ((n = Lt.hex4.exec(e)),
                                  n
                                    ? {
                                        r: at(n[1] + n[1]),
                                        g: at(n[2] + n[2]),
                                        b: at(n[3] + n[3]),
                                        a: av(n[4] + n[4]),
                                        format: t ? 'name' : 'hex8'
                                      }
                                    : ((n = Lt.hex3.exec(e)),
                                      n
                                        ? {
                                            r: at(n[1] + n[1]),
                                            g: at(n[2] + n[2]),
                                            b: at(n[3] + n[3]),
                                            format: t ? 'name' : 'hex'
                                          }
                                        : !1)))))))))
}
function dn(e) {
  return !!Lt.CSS_UNIT.exec(String(e))
}
var We = (function () {
    function e(t, n) {
      t === void 0 && (t = ''), n === void 0 && (n = {})
      var r
      if (t instanceof e) return t
      typeof t == 'number' && (t = g8(t)), (this.originalInput = t)
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
          (this.a = Iy(t)), (this.roundA = Math.round(100 * this.a) / 100), this
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
        var t = ov(this.r, this.g, this.b)
        return { h: t.h * 360, s: t.s, l: t.l, a: this.a }
      }),
      (e.prototype.toHslString = function () {
        var t = ov(this.r, this.g, this.b),
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
        return t === void 0 && (t = !1), m8(this.r, this.g, this.b, this.a, t)
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
  sv = 0.16,
  x8 = 0.05,
  b8 = 0.05,
  S8 = 0.15,
  Ry = 5,
  Fy = 4,
  C8 = [
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
function lv(e) {
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
function E8(e, t, n) {
  var r = n / 100,
    i = {
      r: (t.r - e.r) * r + e.r,
      g: (t.g - e.g) * r + e.g,
      b: (t.b - e.b) * r + e.b
    }
  return i
}
function uv(e, t, n) {
  var r
  return (
    Math.round(e.h) >= 60 && Math.round(e.h) <= 240
      ? (r = n ? Math.round(e.h) - ts * t : Math.round(e.h) + ts * t)
      : (r = n ? Math.round(e.h) + ts * t : Math.round(e.h) - ts * t),
    r < 0 ? (r += 360) : r >= 360 && (r -= 360),
    r
  )
}
function cv(e, t, n) {
  if (e.h === 0 && e.s === 0) return e.s
  var r
  return (
    n ? (r = e.s - sv * t) : t === Fy ? (r = e.s + sv) : (r = e.s + x8 * t),
    r > 1 && (r = 1),
    n && t === Ry && r > 0.1 && (r = 0.1),
    r < 0.06 && (r = 0.06),
    Number(r.toFixed(2))
  )
}
function dv(e, t, n) {
  var r
  return (
    n ? (r = e.v + b8 * t) : (r = e.v - S8 * t),
    r > 1 && (r = 1),
    Number(r.toFixed(2))
  )
}
function fl(e) {
  for (
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = [],
      r = Zr(e),
      i = Ry;
    i > 0;
    i -= 1
  ) {
    var o = lv(r),
      a = ns(Zr({ h: uv(o, i, !0), s: cv(o, i, !0), v: dv(o, i, !0) }))
    n.push(a)
  }
  n.push(ns(r))
  for (var s = 1; s <= Fy; s += 1) {
    var l = lv(r),
      u = ns(Zr({ h: uv(l, s), s: cv(l, s), v: dv(l, s) }))
    n.push(u)
  }
  return t.theme === 'dark'
    ? C8.map(function (c) {
        var f = c.index,
          d = c.opacity,
          g = ns(E8(Zr(t.backgroundColor || '#141414'), Zr(n[f]), d * 100))
        return g
      })
    : n
}
var tc = {
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
  Rd = [
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
Rd.primary = Rd[5]
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
var nc = {
  red: Rd,
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
const $y = {
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
  aa = Object.assign(Object.assign({}, $y), {
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
function T8(e, t) {
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
    w = r(u, c),
    m = e.colorLink || e.colorInfo,
    p = n(m),
    v = new We(y[1]).mix(new We(y[3]), 50).toHexString()
  return Object.assign(Object.assign({}, w), {
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
    colorBgMask: new We('#000').setAlpha(0.45).toRgbString(),
    colorWhite: '#fff'
  })
}
const k8 = (e) => {
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
function j8(e) {
  const { motionUnit: t, motionBase: n, borderRadius: r, lineWidth: i } = e
  return Object.assign(
    {
      motionDurationFast: `${(n + t).toFixed(1)}s`,
      motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
      motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
      lineWidthBold: i + 1
    },
    k8(r)
  )
}
const P8 = (e) => {
  const { controlHeight: t } = e
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  }
}
function M8(e) {
  return (e + 8) / e
}
function N8(e) {
  const t = new Array(10).fill(null).map((n, r) => {
    const i = r - 1,
      o = e * Math.pow(Math.E, i / 5),
      a = r > 1 ? Math.floor(o) : Math.ceil(o)
    return Math.floor(a / 2) * 2
  })
  return (t[1] = e), t.map((n) => ({ size: n, lineHeight: M8(n) }))
}
const O8 = (e) => {
  const t = N8(e),
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
function L8(e) {
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
const _t = (e, t) => new We(e).setAlpha(t).toRgbString(),
  oo = (e, t) => new We(e).darken(t).toHexString(),
  A8 = (e) => {
    const t = fl(e)
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
  I8 = (e, t) => {
    const n = e || '#fff',
      r = t || '#000'
    return {
      colorBgBase: n,
      colorTextBase: r,
      colorText: _t(r, 0.88),
      colorTextSecondary: _t(r, 0.65),
      colorTextTertiary: _t(r, 0.45),
      colorTextQuaternary: _t(r, 0.25),
      colorFill: _t(r, 0.15),
      colorFillSecondary: _t(r, 0.06),
      colorFillTertiary: _t(r, 0.04),
      colorFillQuaternary: _t(r, 0.02),
      colorBgSolid: _t(r, 1),
      colorBgSolidHover: _t(r, 0.75),
      colorBgSolidActive: _t(r, 0.95),
      colorBgLayout: oo(n, 4),
      colorBgContainer: oo(n, 0),
      colorBgElevated: oo(n, 0),
      colorBgSpotlight: _t(r, 0.85),
      colorBgBlur: 'transparent',
      colorBorder: oo(n, 15),
      colorBorderSecondary: oo(n, 6)
    }
  }
function R8(e) {
  ;(tc.pink = tc.magenta), (nc.pink = nc.magenta)
  const t = Object.keys($y)
    .map((n) => {
      const r = e[n] === tc[n] ? nc[n] : fl(e[n])
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
            T8(e, {
              generateColorPalettes: A8,
              generateNeutralColorPalettes: I8
            })
          ),
          O8(e.fontSize)
        ),
        L8(e)
      ),
      P8(e)
    ),
    j8(e)
  )
}
const Dy = jd(R8),
  Kd = { token: aa, override: { override: aa }, hashed: !0 },
  zy = te.createContext(Kd),
  pl = 'ant',
  Ip = 'anticon',
  F8 = (e, t) => t || (e ? `${pl}-${e}` : pl),
  kn = j.createContext({ getPrefixCls: F8, iconPrefixCls: Ip }),
  $8 = `-ant-${Date.now()}-${Math.random()}`
function D8(e, t) {
  const n = {},
    r = (a, s) => {
      let l = a.clone()
      return (l = (s == null ? void 0 : s(l)) || l), l.toRgbString()
    },
    i = (a, s) => {
      const l = new We(a),
        u = fl(l.toRgbString())
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
    const a = new We(t.primaryColor),
      s = fl(a.toRgbString())
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
    const l = new We(s[0])
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
function z8(e, t) {
  const n = D8(e, t)
  Pn() && bi(n, `${$8}-dynamic-theme`)
}
const hl = j.createContext(!1),
  V8 = (e) => {
    let { children: t, disabled: n } = e
    const r = j.useContext(hl)
    return j.createElement(hl.Provider, { value: n ?? r }, t)
  },
  sa = j.createContext(void 0),
  B8 = (e) => {
    let { children: t, size: n } = e
    const r = j.useContext(sa)
    return j.createElement(sa.Provider, { value: n || r }, t)
  }
function H8() {
  const e = j.useContext(hl),
    t = j.useContext(sa)
  return { componentDisabled: e, componentSize: t }
}
var Vy = rt(function e() {
    nt(this, e)
  }),
  By = 'CALC_UNIT',
  q8 = new RegExp(By, 'g')
function rc(e) {
  return typeof e == 'number' ? ''.concat(e).concat(By) : e
}
var W8 = (function (e) {
    zi(n, e)
    var t = Vi(n)
    function n(r, i) {
      var o
      nt(this, n),
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
          ? (o.result = rc(r))
          : a === 'string' && (o.result = r),
        o
      )
    }
    return (
      rt(n, [
        {
          key: 'add',
          value: function (i) {
            return (
              i instanceof n
                ? (this.result = ''
                    .concat(this.result, ' + ')
                    .concat(i.getResult()))
                : (typeof i == 'number' || typeof i == 'string') &&
                  (this.result = ''.concat(this.result, ' + ').concat(rc(i))),
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
                  (this.result = ''.concat(this.result, ' - ').concat(rc(i))),
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
              (this.result = this.result.replace(q8, l ? 'px' : '')),
              typeof this.lowPriority < 'u'
                ? 'calc('.concat(this.result, ')')
                : this.result
            )
          }
        }
      ]),
      n
    )
  })(Vy),
  U8 = (function (e) {
    zi(n, e)
    var t = Vi(n)
    function n(r) {
      var i
      return (
        nt(this, n),
        (i = t.call(this)),
        D(Y(i), 'result', 0),
        r instanceof n
          ? (i.result = r.result)
          : typeof r == 'number' && (i.result = r),
        i
      )
    }
    return (
      rt(n, [
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
  })(Vy),
  G8 = function (t, n) {
    var r = t === 'css' ? W8 : U8
    return function (i) {
      return new r(i, n)
    }
  },
  fv = function (t, n) {
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
function ic(e) {
  return e !== void 0
}
function Q8(e, t) {
  var n = t || {},
    r = n.defaultValue,
    i = n.value,
    o = n.onChange,
    a = n.postState,
    s = la(function () {
      return ic(i)
        ? i
        : ic(r)
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
    y = la([f]),
    _ = K(y, 2),
    w = _[0],
    m = _[1]
  Xm(
    function () {
      var v = w[0]
      u !== v && g(u, v)
    },
    [w]
  ),
    Xm(
      function () {
        ic(i) || c(i)
      },
      [i]
    )
  var p = Ii(function (v, x) {
    c(v, x), m([f], x)
  })
  return [d, p]
}
function pv(e, t, n, r) {
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
var Hy = typeof CSSINJS_STATISTIC < 'u',
  Xd = !0
function Rp() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n]
  if (!Hy) return Object.assign.apply(Object, [{}].concat(t))
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
var hv = {}
function K8() {}
var X8 = function (t) {
  var n,
    r = t,
    i = K8
  return (
    Hy &&
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
        hv[a] = {
          global: Array.from(n),
          component: B(
            B({}, (l = hv[a]) === null || l === void 0 ? void 0 : l.component),
            s
          )
        }
      })),
    { token: r, keys: n, flush: i }
  )
}
function mv(e, t, n) {
  if (typeof n == 'function') {
    var r
    return n(Rp(t, (r = t[e]) !== null && r !== void 0 ? r : {}))
  }
  return n ?? {}
}
function Y8(e) {
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
var Z8 = 1e3 * 60 * 10,
  J8 = (function () {
    function e() {
      nt(this, e),
        D(this, 'map', new Map()),
        D(this, 'objectIDMap', new WeakMap()),
        D(this, 'nextID', 0),
        D(this, 'lastAccessBeat', new Map()),
        D(this, 'accessBeat', 0)
    }
    return (
      rt(e, [
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
                r - i > Z8 && (n.map.delete(o), n.lastAccessBeat.delete(o))
              }),
                (this.accessBeat = 0)
            }
          }
        }
      ]),
      e
    )
  })(),
  vv = new J8()
function e3(e, t) {
  return te.useMemo(function () {
    var n = vv.get(t)
    if (n) return n
    var r = e()
    return vv.set(t, r), r
  }, t)
}
var t3 = function () {
  return {}
}
function n3(e) {
  var t = e.useCSP,
    n = t === void 0 ? t3 : t,
    r = e.useToken,
    i = e.usePrefix,
    o = e.getResetStyles,
    a = e.getCommonStyle,
    s = e.getCompUnitless
  function l(d, g, y, _) {
    var w = Array.isArray(d) ? d[0] : d
    function m(E) {
      return ''
        .concat(String(w))
        .concat(E.slice(0, 1).toUpperCase())
        .concat(E.slice(1))
    }
    var p = (_ == null ? void 0 : _.unitless) || {},
      v = typeof s == 'function' ? s(d) : {},
      x = B(B({}, v), {}, D({}, m('zIndexPopup'), !0))
    Object.keys(p).forEach(function (E) {
      x[m(E)] = p[E]
    })
    var b = B(B({}, _), {}, { unitless: x, prefixToken: m }),
      C = c(d, g, y, b),
      S = u(w, y, b)
    return function (E) {
      var T =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : E,
        k = C(E, T),
        M = K(k, 2),
        L = M[1],
        O = S(T),
        A = K(O, 2),
        z = A[0],
        I = A[1]
      return [z, L, I]
    }
  }
  function u(d, g, y) {
    var _ = y.unitless,
      w = y.injectStyle,
      m = w === void 0 ? !0 : w,
      p = y.prefixToken,
      v = y.ignore,
      x = function (S) {
        var E = S.rootCls,
          T = S.cssVar,
          k = T === void 0 ? {} : T,
          M = r(),
          L = M.realToken
        return (
          Xk(
            {
              path: [d],
              prefix: k.prefix,
              key: k.key,
              unitless: _,
              ignore: v,
              token: L,
              scope: E
            },
            function () {
              var O = mv(d, L, g),
                A = pv(d, L, O, {
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
            return m && T
              ? te.createElement(
                  te.Fragment,
                  null,
                  te.createElement(x, { rootCls: S, cssVar: T, component: d }),
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
      w = Array.isArray(d) ? d : [d, d],
      m = K(w, 1),
      p = m[0],
      v = w.join('-'),
      x = e.layer || { name: 'antd' }
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
        I = n(),
        R = L ? 'css' : 'js',
        N = e3(
          function () {
            var U = new Set()
            return (
              L &&
                Object.keys(_.unitless || {}).forEach(function (Z) {
                  U.add(Es(Z, L.prefix)), U.add(Es(Z, fv(p, L.prefix)))
                }),
              G8(R, U)
            )
          },
          [R, p, L == null ? void 0 : L.prefix]
        ),
        F = Y8(R),
        $ = F.max,
        V = F.min,
        q = {
          theme: E,
          token: M,
          hashId: k,
          nonce: function () {
            return I.nonce
          },
          clientOnly: _.clientOnly,
          layer: x,
          order: _.order || -999
        }
      typeof o == 'function' &&
        Od(
          B(B({}, q), {}, { clientOnly: !1, path: ['Shared', A] }),
          function () {
            return o(M, {
              prefix: { rootPrefixCls: A, iconPrefixCls: z },
              csp: I
            })
          }
        )
      var G = Od(B(B({}, q), {}, { path: [v, b, z] }), function () {
        if (_.injectStyle === !1) return []
        var U = X8(M),
          Z = U.token,
          se = U.flush,
          re = mv(p, T, y),
          Hi = '.'.concat(b),
          Fr = pv(p, T, re, { deprecatedTokens: _.deprecatedTokens })
        L &&
          re &&
          X(re) === 'object' &&
          Object.keys(re).forEach(function (zr) {
            re[zr] = 'var('.concat(Es(zr, fv(p, L.prefix)), ')')
          })
        var $r = Rp(
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
      w = c(d, g, y, B({ resetStyle: !1, order: -998 }, _)),
      m = function (v) {
        var x = v.prefixCls,
          b = v.rootCls,
          C = b === void 0 ? x : b
        return w(x, C), null
      }
    return m
  }
  return { genStyleHooks: l, genSubStyleComponent: f, genComponentStyleHook: c }
}
const r3 = '5.22.7'
function oc(e) {
  return e >= 0 && e <= 255
}
function rs(e, t) {
  const { r: n, g: r, b: i, a: o } = new We(e).toRgb()
  if (o < 1) return e
  const { r: a, g: s, b: l } = new We(t).toRgb()
  for (let u = 0.01; u <= 1; u += 0.01) {
    const c = Math.round((n - a * (1 - u)) / u),
      f = Math.round((r - s * (1 - u)) / u),
      d = Math.round((i - l * (1 - u)) / u)
    if (oc(c) && oc(f) && oc(d))
      return new We({
        r: c,
        g: f,
        b: d,
        a: Math.round(u * 100) / 100
      }).toRgbString()
  }
  return new We({ r: n, g: r, b: i, a: 1 }).toRgbString()
}
var i3 = function (e, t) {
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
function qy(e) {
  const { override: t } = e,
    n = i3(e, ['override']),
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
      0 1px 2px -2px ${new We('rgba(0, 0, 0, 0.16)').toRgbString()},
      0 3px 6px 0 ${new We('rgba(0, 0, 0, 0.12)').toRgbString()},
      0 5px 12px 4px ${new We('rgba(0, 0, 0, 0.09)').toRgbString()}
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
var gv = function (e, t) {
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
const Wy = {
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
  o3 = {
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
  a3 = {
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
  Uy = (e, t, n) => {
    const r = n.getDerivativeToken(e),
      { override: i } = t,
      o = gv(t, ['override'])
    let a = Object.assign(Object.assign({}, r), { override: i })
    return (
      (a = qy(a)),
      o &&
        Object.entries(o).forEach((s) => {
          let [l, u] = s
          const { theme: c } = u,
            f = gv(u, ['theme'])
          let d = f
          c &&
            (d = Uy(
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
    } = te.useContext(zy),
    o = `${r3}-${t || ''}`,
    a = n || Dy,
    [s, l, u] = Sk(a, [aa, e], {
      salt: o,
      override: r,
      getComputedToken: Uy,
      formatToken: qy,
      cssVar: i && {
        prefix: i.prefix,
        key: i.key,
        unitless: Wy,
        ignore: o3,
        preserve: a3
      }
    })
  return [a, u, t ? l : '', s, i]
}
const ac = function (e) {
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
  s3 = () => ({
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
  l3 = (e) => ({
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
  u3 = (e, t, n, r) => {
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
  c3 = (e) => ({
    outline: `${ra(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
    outlineOffset: 1,
    transition: 'outline-offset 0s, outline 0s'
  }),
  Gy = (e) => ({
    [`.${e}`]: Object.assign(Object.assign({}, s3()), {
      [`.${e} .${e}-icon`]: { display: 'block' }
    })
  }),
  {
    genStyleHooks: d3,
    genComponentStyleHook: f3,
    genSubStyleComponent: cP
  } = n3({
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
        { '&': l3(e) },
        Gy(
          (n = t == null ? void 0 : t.prefix.iconPrefixCls) !== null &&
            n !== void 0
            ? n
            : Ip
        )
      ]
    },
    getCommonStyle: u3,
    getCompUnitless: () => Wy
  }),
  p3 = (e, t) => {
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
      () => [Gy(e)]
    )
  },
  h3 = Object.assign({}, Mo),
  { useId: yv } = h3,
  m3 = () => '',
  v3 = typeof yv > 'u' ? m3 : yv
function g3(e, t, n) {
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
    a = v3()
  return ty(
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
var y3 = ['children'],
  Qy = j.createContext({})
function _3(e) {
  var t = e.children,
    n = Or(e, y3)
  return j.createElement(Qy.Provider, { value: n }, t)
}
var w3 = (function (e) {
  zi(n, e)
  var t = Vi(n)
  function n() {
    return nt(this, n), t.apply(this, arguments)
  }
  return (
    rt(n, [
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
function x3(e) {
  var t = j.useReducer(function (s) {
      return s + 1
    }, 0),
    n = K(t, 2),
    r = n[1],
    i = j.useRef(e),
    o = Ii(function () {
      return i.current
    }),
    a = Ii(function (s) {
      ;(i.current = typeof s == 'function' ? s(i.current) : s), r()
    })
  return [o, a]
}
var On = 'none',
  is = 'appear',
  os = 'enter',
  as = 'leave',
  _v = 'none',
  Ft = 'prepare',
  fi = 'start',
  pi = 'active',
  Fp = 'end',
  Ky = 'prepared'
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
function b3(e, t) {
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
var S3 = b3(Pn(), typeof window < 'u' ? window : {}),
  Xy = {}
if (Pn()) {
  var C3 = document.createElement('div')
  Xy = C3.style
}
var ss = {}
function Yy(e) {
  if (ss[e]) return ss[e]
  var t = S3[e]
  if (t)
    for (var n = Object.keys(t), r = n.length, i = 0; i < r; i += 1) {
      var o = n[i]
      if (Object.prototype.hasOwnProperty.call(t, o) && o in Xy)
        return (ss[e] = t[o]), ss[e]
    }
  return ''
}
var Zy = Yy('animationend'),
  Jy = Yy('transitionend'),
  e_ = !!(Zy && Jy),
  xv = Zy || 'animationend',
  bv = Jy || 'transitionend'
function Sv(e, t) {
  if (!e) return null
  if (X(e) === 'object') {
    var n = t.replace(/-\w/g, function (r) {
      return r[1].toUpperCase()
    })
    return e[n]
  }
  return ''.concat(e, '-').concat(t)
}
const E3 = function (e) {
  var t = j.useRef()
  function n(i) {
    i && (i.removeEventListener(bv, e), i.removeEventListener(xv, e))
  }
  function r(i) {
    t.current && t.current !== i && n(t.current),
      i &&
        i !== t.current &&
        (i.addEventListener(bv, e), i.addEventListener(xv, e), (t.current = i))
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
var t_ = Pn() ? j.useLayoutEffect : j.useEffect
const T3 = function () {
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
var k3 = [Ft, fi, pi, Fp],
  j3 = [Ft, Ky],
  n_ = !1,
  P3 = !0
function r_(e) {
  return e === pi || e === Fp
}
const M3 = function (e, t, n) {
  var r = la(_v),
    i = K(r, 2),
    o = i[0],
    a = i[1],
    s = T3(),
    l = K(s, 2),
    u = l[0],
    c = l[1]
  function f() {
    a(Ft, !0)
  }
  var d = t ? j3 : k3
  return (
    t_(
      function () {
        if (o !== _v && o !== Fp) {
          var g = d.indexOf(o),
            y = d[g + 1],
            _ = n(o)
          _ === n_
            ? a(y, !0)
            : y &&
              u(function (w) {
                function m() {
                  w.isCanceled() || a(y, !0)
                }
                _ === !0 ? m() : Promise.resolve(_).then(m)
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
function N3(e, t, n, r) {
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
    w = r.onEnterStart,
    m = r.onLeaveStart,
    p = r.onAppearActive,
    v = r.onEnterActive,
    x = r.onLeaveActive,
    b = r.onAppearEnd,
    C = r.onEnterEnd,
    S = r.onLeaveEnd,
    E = r.onVisibleChanged,
    T = la(),
    k = K(T, 2),
    M = k[0],
    L = k[1],
    O = x3(On),
    A = K(O, 2),
    z = A[0],
    I = A[1],
    R = la(null),
    N = K(R, 2),
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
    I(On), $(null, !0)
  }
  var re = Ii(function (Re) {
      var Ee = z()
      if (Ee !== On) {
        var yt = U()
        if (!(Re && !Re.deadline && Re.target !== yt)) {
          var Vr = Z.current,
            Br
          Ee === is && Vr
            ? (Br = b == null ? void 0 : b(yt, Re))
            : Ee === os && Vr
            ? (Br = C == null ? void 0 : C(yt, Re))
            : Ee === as && Vr && (Br = S == null ? void 0 : S(yt, Re)),
            Vr && Br !== !1 && se()
        }
      }
    }),
    Hi = E3(re),
    Fr = K(Hi, 1),
    $r = Fr[0],
    Dr = function (Ee) {
      switch (Ee) {
        case is:
          return D(D(D({}, Ft, d), fi, _), pi, p)
        case os:
          return D(D(D({}, Ft, g), fi, w), pi, v)
        case as:
          return D(D(D({}, Ft, y), fi, m), pi, x)
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
    zr = M3(V, !e, function (Re) {
      if (Re === Ft) {
        var Ee = an[Ft]
        return Ee ? Ee(U()) : n_
      }
      if (sn in an) {
        var yt
        $(
          ((yt = an[sn]) === null || yt === void 0
            ? void 0
            : yt.call(an, U(), null)) || null
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
        sn === Ky && se(),
        P3
      )
    }),
    Ea = K(zr, 2),
    eu = Ea[0],
    sn = Ea[1],
    tu = r_(sn)
  Z.current = tu
  var Ta = j.useRef(null)
  t_(
    function () {
      if (!(q.current && Ta.current === t)) {
        L(t)
        var Re = q.current
        q.current = !0
        var Ee
        !Re && t && s && (Ee = is),
          Re && t && o && (Ee = os),
          ((Re && !t && u) || (!Re && f && !t && u)) && (Ee = as)
        var yt = Dr(Ee)
        Ee && (e || yt[Ft]) ? (I(Ee), eu()) : I(On), (Ta.current = t)
      }
    },
    [t]
  ),
    j.useEffect(
      function () {
        ;((V === is && !s) || (V === os && !o) || (V === as && !u)) && I(On)
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
function O3(e) {
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
      _ = j.useContext(Qy),
      w = _.motion,
      m = n(i, w),
      p = j.useRef(),
      v = j.useRef()
    function x() {
      try {
        return p.current instanceof HTMLElement ? p.current : B5(v.current)
      } catch {
        return null
      }
    }
    var b = N3(m, s, x, i),
      C = K(b, 4),
      S = C[0],
      E = C[1],
      T = C[2],
      k = C[3],
      M = j.useRef(k)
    k && (M.current = !0)
    var L = j.useCallback(
        function (N) {
          ;(p.current = N), ny(o, N)
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
        : r_(E)
        ? (z = 'active')
        : E === fi && (z = 'start')
      var I = Sv(d, ''.concat(S, '-').concat(z))
      O = f(
        B(
          B({}, A),
          {},
          {
            className: Mr(
              Sv(d, S),
              D(D({}, I, I && z), d, typeof d == 'string')
            ),
            style: T
          }
        ),
        L
      )
    }
    if (j.isValidElement(O) && ry(O)) {
      var R = oy(O)
      R || (O = j.cloneElement(O, { ref: L }))
    }
    return j.createElement(w3, { ref: v }, O)
  })
  return (r.displayName = 'CSSMotion'), r
}
const i_ = O3(e_)
var Yd = 'add',
  Zd = 'keep',
  Jd = 'remove',
  sc = 'removed'
function L3(e) {
  var t
  return (
    e && X(e) === 'object' && 'key' in e ? (t = e) : (t = { key: e }),
    B(B({}, t), {}, { key: String(t.key) })
  )
}
function ef() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
  return e.map(L3)
}
function A3() {
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
var I3 = ['component', 'children', 'onVisibleChanged', 'onAllRemoved'],
  R3 = ['status'],
  F3 = [
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
function $3(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : i_,
    n = (function (r) {
      zi(o, r)
      var i = Vi(o)
      function o() {
        var a
        nt(this, o)
        for (var s = arguments.length, l = new Array(s), u = 0; u < s; u++)
          l[u] = arguments[u]
        return (
          (a = i.call.apply(i, [this].concat(l))),
          D(Y(a), 'state', { keyEntities: [] }),
          D(Y(a), 'removeKey', function (c) {
            a.setState(
              function (f) {
                var d = f.keyEntities.map(function (g) {
                  return g.key !== c ? g : B(B({}, g), {}, { status: sc })
                })
                return { keyEntities: d }
              },
              function () {
                var f = a.state.keyEntities,
                  d = f.filter(function (g) {
                    var y = g.status
                    return y !== sc
                  }).length
                d === 0 && a.props.onAllRemoved && a.props.onAllRemoved()
              }
            )
          }),
          a
        )
      }
      return (
        rt(
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
                var g = Or(u, I3),
                  y = c || j.Fragment,
                  _ = {}
                return (
                  F3.forEach(function (w) {
                    ;(_[w] = g[w]), delete g[w]
                  }),
                  delete g.keys,
                  j.createElement(
                    y,
                    g,
                    l.map(function (w, m) {
                      var p = w.status,
                        v = Or(w, R3),
                        x = p === Yd || p === Zd
                      return j.createElement(
                        t,
                        Nr({}, _, {
                          key: v.key,
                          visible: x,
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
                  f = ef(u),
                  d = A3(c, f)
                return {
                  keyEntities: d.filter(function (g) {
                    var y = c.find(function (_) {
                      var w = _.key
                      return g.key === w
                    })
                    return !(y && y.status === sc && g.status === Jd)
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
$3(e_)
function D3(e) {
  const { children: t } = e,
    [, n] = wa(),
    { motion: r } = n,
    i = j.useRef(!1)
  return (
    (i.current = i.current || r === !1),
    i.current ? j.createElement(_3, { motion: r }, t) : t
  )
}
const z3 = () => null
var V3 = function (e, t) {
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
const B3 = [
  'getTargetContainer',
  'getPopupContainer',
  'renderEmpty',
  'input',
  'pagination',
  'form',
  'select',
  'button'
]
let o_
function H3() {
  return o_ || pl
}
function q3(e) {
  return Object.keys(e).some((t) => t.endsWith('Color'))
}
const W3 = (e) => {
    const { prefixCls: t, iconPrefixCls: n, theme: r, holderRender: i } = e
    t !== void 0 && (o_ = t), r && q3(r) && z8(H3(), r)
  },
  U3 = (e) => {
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
        legacyLocale: w,
        parentContext: m,
        iconPrefixCls: p,
        theme: v,
        componentDisabled: x,
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
        drawer: I,
        skeleton: R,
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
        rate: eu,
        switch: sn,
        transfer: tu,
        avatar: Ta,
        message: qi,
        tag: Wi,
        table: Re,
        card: Ee,
        tabs: yt,
        timeline: Vr,
        timePicker: Br,
        upload: v_,
        notification: g_,
        tree: y_,
        colorPicker: __,
        datePicker: w_,
        rangePicker: x_,
        flex: b_,
        wave: S_,
        dropdown: C_,
        warning: E_,
        tour: T_,
        floatButtonGroup: k_,
        variant: j_,
        inputNumber: P_,
        treeSelect: M_
      } = e,
      zp = j.useCallback(
        (xe, Pe) => {
          const { prefixCls: Gt } = e
          if (Pe) return Pe
          const Qt = Gt || m.getPrefixCls('')
          return xe ? `${Qt}-${xe}` : Qt
        },
        [m.getPrefixCls, e.prefixCls]
      ),
      Ui = p || m.iconPrefixCls || Ip,
      Gi = n || m.csp
    p3(Ui, Gi)
    const nu = g3(v, m.theme, { prefixCls: zp('') }),
      ru = {
        csp: Gi,
        autoInsertSpaceInButton: r,
        alert: i,
        anchor: o,
        locale: s || w,
        direction: u,
        space: c,
        splitter: f,
        virtual: d,
        popupMatchSelectWidth: y ?? g,
        popupOverflow: _,
        getPrefixCls: zp,
        iconPrefixCls: Ui,
        theme: nu,
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
        drawer: I,
        skeleton: R,
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
        rate: eu,
        switch: sn,
        transfer: tu,
        avatar: Ta,
        message: qi,
        tag: Wi,
        table: Re,
        card: Ee,
        tabs: yt,
        timeline: Vr,
        timePicker: Br,
        upload: v_,
        notification: g_,
        tree: y_,
        colorPicker: __,
        datePicker: w_,
        rangePicker: x_,
        flex: b_,
        wave: S_,
        dropdown: C_,
        warning: E_,
        tour: T_,
        floatButtonGroup: k_,
        variant: j_,
        inputNumber: P_,
        treeSelect: M_
      },
      Hr = Object.assign({}, m)
    Object.keys(ru).forEach((xe) => {
      ru[xe] !== void 0 && (Hr[xe] = ru[xe])
    }),
      B3.forEach((xe) => {
        const Pe = e[xe]
        Pe && (Hr[xe] = Pe)
      }),
      typeof r < 'u' &&
        (Hr.button = Object.assign({ autoInsertSpace: r }, Hr.button))
    const qr = ty(
        () => Hr,
        Hr,
        (xe, Pe) => {
          const Gt = Object.keys(xe),
            Qt = Object.keys(Pe)
          return Gt.length !== Qt.length || Gt.some((ka) => xe[ka] !== Pe[ka])
        }
      ),
      N_ = j.useMemo(() => ({ prefixCls: Ui, csp: Gi }), [Ui, Gi])
    let je = j.createElement(
      j.Fragment,
      null,
      j.createElement(z3, { dropdownMatchSelectWidth: g }),
      t
    )
    const Vp = j.useMemo(() => {
      var xe, Pe, Gt, Qt
      return di(
        ((xe = Zl.Form) === null || xe === void 0
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
    Object.keys(Vp).length > 0 &&
      (je = j.createElement(r8.Provider, { value: Vp }, je)),
      s && (je = j.createElement(u8, { locale: s, _ANT_MARK__: l8 }, je)),
      (Ui || Gi) && (je = j.createElement(Zk.Provider, { value: N_ }, je)),
      l && (je = j.createElement(B8, { size: l }, je)),
      (je = j.createElement(D3, null, je))
    const O_ = j.useMemo(() => {
      const xe = nu || {},
        { algorithm: Pe, token: Gt, components: Qt, cssVar: ka } = xe,
        L_ = V3(xe, ['algorithm', 'token', 'components', 'cssVar']),
        Bp = Pe && (!Array.isArray(Pe) || Pe.length > 0) ? jd(Pe) : Dy,
        iu = {}
      Object.entries(Qt || {}).forEach((A_) => {
        let [I_, R_] = A_
        const ln = Object.assign({}, R_)
        'algorithm' in ln &&
          (ln.algorithm === !0
            ? (ln.theme = Bp)
            : (Array.isArray(ln.algorithm) ||
                typeof ln.algorithm == 'function') &&
              (ln.theme = jd(ln.algorithm)),
          delete ln.algorithm),
          (iu[I_] = ln)
      })
      const Hp = Object.assign(Object.assign({}, aa), Gt)
      return Object.assign(Object.assign({}, L_), {
        theme: Bp,
        token: Hp,
        components: iu,
        override: Object.assign({ override: Hp }, iu),
        cssVar: ka
      })
    }, [nu])
    return (
      v && (je = j.createElement(zy.Provider, { value: O_ }, je)),
      qr.warning &&
        (je = j.createElement(n8.Provider, { value: qr.warning }, je)),
      x !== void 0 && (je = j.createElement(V8, { disabled: x }, je)),
      j.createElement(kn.Provider, { value: qr }, je)
    )
  },
  xa = (e) => {
    const t = j.useContext(kn),
      n = j.useContext(Ay)
    return j.createElement(
      U3,
      Object.assign({ parentContext: t, legacyLocale: n }, e)
    )
  }
xa.ConfigContext = kn
xa.SizeContext = sa
xa.config = W3
xa.useConfig = H8
Object.defineProperty(xa, 'SizeContext', { get: () => sa })
const G3 = (e, t, n) =>
  te.isValidElement(e)
    ? te.cloneElement(e, typeof n == 'function' ? n(e.props || {}) : n)
    : t
function Q3(e, t) {
  return G3(e, e, t)
}
const a_ = (e) => {
  const [, , , , t] = wa()
  return t ? `${e}-css-var` : ''
}
function Ge() {
  Ge = function () {
    return t
  }
  var e,
    t = {},
    n = Object.prototype,
    r = n.hasOwnProperty,
    i =
      Object.defineProperty ||
      function (I, R, N) {
        I[R] = N.value
      },
    o = typeof Symbol == 'function' ? Symbol : {},
    a = o.iterator || '@@iterator',
    s = o.asyncIterator || '@@asyncIterator',
    l = o.toStringTag || '@@toStringTag'
  function u(I, R, N) {
    return (
      Object.defineProperty(I, R, {
        value: N,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }),
      I[R]
    )
  }
  try {
    u({}, '')
  } catch {
    u = function (N, F, $) {
      return (N[F] = $)
    }
  }
  function c(I, R, N, F) {
    var $ = R && R.prototype instanceof m ? R : m,
      V = Object.create($.prototype),
      q = new A(F || [])
    return i(V, '_invoke', { value: k(I, N, q) }), V
  }
  function f(I, R, N) {
    try {
      return { type: 'normal', arg: I.call(R, N) }
    } catch (F) {
      return { type: 'throw', arg: F }
    }
  }
  t.wrap = c
  var d = 'suspendedStart',
    g = 'suspendedYield',
    y = 'executing',
    _ = 'completed',
    w = {}
  function m() {}
  function p() {}
  function v() {}
  var x = {}
  u(x, a, function () {
    return this
  })
  var b = Object.getPrototypeOf,
    C = b && b(b(z([])))
  C && C !== n && r.call(C, a) && (x = C)
  var S = (v.prototype = m.prototype = Object.create(x))
  function E(I) {
    ;['next', 'throw', 'return'].forEach(function (R) {
      u(I, R, function (N) {
        return this._invoke(R, N)
      })
    })
  }
  function T(I, R) {
    function N($, V, q, G) {
      var U = f(I[$], I, V)
      if (U.type !== 'throw') {
        var Z = U.arg,
          se = Z.value
        return se && X(se) == 'object' && r.call(se, '__await')
          ? R.resolve(se.__await).then(
              function (re) {
                N('next', re, q, G)
              },
              function (re) {
                N('throw', re, q, G)
              }
            )
          : R.resolve(se).then(
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
          return new R(function (U, Z) {
            N(V, q, U, Z)
          })
        }
        return (F = F ? F.then(G, G) : G())
      }
    })
  }
  function k(I, R, N) {
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
            if (G === w) continue
            return G
          }
        }
        if (N.method === 'next') N.sent = N._sent = N.arg
        else if (N.method === 'throw') {
          if (F === d) throw ((F = _), N.arg)
          N.dispatchException(N.arg)
        } else N.method === 'return' && N.abrupt('return', N.arg)
        F = y
        var U = f(I, R, N)
        if (U.type === 'normal') {
          if (((F = N.done ? _ : g), U.arg === w)) continue
          return { value: U.arg, done: N.done }
        }
        U.type === 'throw' && ((F = _), (N.method = 'throw'), (N.arg = U.arg))
      }
    }
  }
  function M(I, R) {
    var N = R.method,
      F = I.iterator[N]
    if (F === e)
      return (
        (R.delegate = null),
        (N === 'throw' &&
          I.iterator.return &&
          ((R.method = 'return'),
          (R.arg = e),
          M(I, R),
          R.method === 'throw')) ||
          (N !== 'return' &&
            ((R.method = 'throw'),
            (R.arg = new TypeError(
              "The iterator does not provide a '" + N + "' method"
            )))),
        w
      )
    var $ = f(F, I.iterator, R.arg)
    if ($.type === 'throw')
      return (R.method = 'throw'), (R.arg = $.arg), (R.delegate = null), w
    var V = $.arg
    return V
      ? V.done
        ? ((R[I.resultName] = V.value),
          (R.next = I.nextLoc),
          R.method !== 'return' && ((R.method = 'next'), (R.arg = e)),
          (R.delegate = null),
          w)
        : V
      : ((R.method = 'throw'),
        (R.arg = new TypeError('iterator result is not an object')),
        (R.delegate = null),
        w)
  }
  function L(I) {
    var R = { tryLoc: I[0] }
    1 in I && (R.catchLoc = I[1]),
      2 in I && ((R.finallyLoc = I[2]), (R.afterLoc = I[3])),
      this.tryEntries.push(R)
  }
  function O(I) {
    var R = I.completion || {}
    ;(R.type = 'normal'), delete R.arg, (I.completion = R)
  }
  function A(I) {
    ;(this.tryEntries = [{ tryLoc: 'root' }]),
      I.forEach(L, this),
      this.reset(!0)
  }
  function z(I) {
    if (I || I === '') {
      var R = I[a]
      if (R) return R.call(I)
      if (typeof I.next == 'function') return I
      if (!isNaN(I.length)) {
        var N = -1,
          F = function $() {
            for (; ++N < I.length; )
              if (r.call(I, N)) return ($.value = I[N]), ($.done = !1), $
            return ($.value = e), ($.done = !0), $
          }
        return (F.next = F)
      }
    }
    throw new TypeError(X(I) + ' is not iterable')
  }
  return (
    (p.prototype = v),
    i(S, 'constructor', { value: v, configurable: !0 }),
    i(v, 'constructor', { value: p, configurable: !0 }),
    (p.displayName = u(v, l, 'GeneratorFunction')),
    (t.isGeneratorFunction = function (I) {
      var R = typeof I == 'function' && I.constructor
      return (
        !!R && (R === p || (R.displayName || R.name) === 'GeneratorFunction')
      )
    }),
    (t.mark = function (I) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(I, v)
          : ((I.__proto__ = v), u(I, l, 'GeneratorFunction')),
        (I.prototype = Object.create(S)),
        I
      )
    }),
    (t.awrap = function (I) {
      return { __await: I }
    }),
    E(T.prototype),
    u(T.prototype, s, function () {
      return this
    }),
    (t.AsyncIterator = T),
    (t.async = function (I, R, N, F, $) {
      $ === void 0 && ($ = Promise)
      var V = new T(c(I, R, N, F), $)
      return t.isGeneratorFunction(R)
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
    (t.keys = function (I) {
      var R = Object(I),
        N = []
      for (var F in R) N.push(F)
      return (
        N.reverse(),
        function $() {
          for (; N.length; ) {
            var V = N.pop()
            if (V in R) return ($.value = V), ($.done = !1), $
          }
          return ($.done = !0), $
        }
      )
    }),
    (t.values = z),
    (A.prototype = {
      constructor: A,
      reset: function (R) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = e),
          (this.done = !1),
          (this.delegate = null),
          (this.method = 'next'),
          (this.arg = e),
          this.tryEntries.forEach(O),
          !R)
        )
          for (var N in this)
            N.charAt(0) === 't' &&
              r.call(this, N) &&
              !isNaN(+N.slice(1)) &&
              (this[N] = e)
      },
      stop: function () {
        this.done = !0
        var R = this.tryEntries[0].completion
        if (R.type === 'throw') throw R.arg
        return this.rval
      },
      dispatchException: function (R) {
        if (this.done) throw R
        var N = this
        function F(Z, se) {
          return (
            (q.type = 'throw'),
            (q.arg = R),
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
      abrupt: function (R, N) {
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
          (R === 'break' || R === 'continue') &&
          V.tryLoc <= N &&
          N <= V.finallyLoc &&
          (V = null)
        var q = V ? V.completion : {}
        return (
          (q.type = R),
          (q.arg = N),
          V
            ? ((this.method = 'next'), (this.next = V.finallyLoc), w)
            : this.complete(q)
        )
      },
      complete: function (R, N) {
        if (R.type === 'throw') throw R.arg
        return (
          R.type === 'break' || R.type === 'continue'
            ? (this.next = R.arg)
            : R.type === 'return'
            ? ((this.rval = this.arg = R.arg),
              (this.method = 'return'),
              (this.next = 'end'))
            : R.type === 'normal' && N && (this.next = N),
          w
        )
      },
      finish: function (R) {
        for (var N = this.tryEntries.length - 1; N >= 0; --N) {
          var F = this.tryEntries[N]
          if (F.finallyLoc === R)
            return this.complete(F.completion, F.afterLoc), O(F), w
        }
      },
      catch: function (R) {
        for (var N = this.tryEntries.length - 1; N >= 0; --N) {
          var F = this.tryEntries[N]
          if (F.tryLoc === R) {
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
      delegateYield: function (R, N, F) {
        return (
          (this.delegate = { iterator: z(R), resultName: N, nextLoc: F }),
          this.method === 'next' && (this.arg = e),
          w
        )
      }
    }),
    t
  )
}
function Cv(e, t, n, r, i, o, a) {
  try {
    var s = e[o](a),
      l = s.value
  } catch (u) {
    return void n(u)
  }
  s.done ? t(l) : Promise.resolve(l).then(r, i)
}
function Rr(e) {
  return function () {
    var t = this,
      n = arguments
    return new Promise(function (r, i) {
      var o = e.apply(t, n)
      function a(l) {
        Cv(o, r, i, a, s, 'next', l)
      }
      function s(l) {
        Cv(o, r, i, a, s, 'throw', l)
      }
      a(void 0)
    })
  }
}
var ba = B({}, cx),
  K3 = ba.version,
  lc = ba.render,
  X3 = ba.unmountComponentAtNode,
  Jl
try {
  var Y3 = Number((K3 || '').split('.')[0])
  Y3 >= 18 && (Jl = ba.createRoot)
} catch {}
function Ev(e) {
  var t = ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  t && X(t) === 'object' && (t.usingClientEntryPoint = e)
}
var ml = '__rc_react_root__'
function Z3(e, t) {
  Ev(!0)
  var n = t[ml] || Jl(t)
  Ev(!1), n.render(e), (t[ml] = n)
}
function J3(e, t) {
  lc == null || lc(e, t)
}
function ej(e, t) {
  if (Jl) {
    Z3(e, t)
    return
  }
  J3(e, t)
}
function tj(e) {
  return tf.apply(this, arguments)
}
function tf() {
  return (
    (tf = Rr(
      Ge().mark(function e(t) {
        return Ge().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                return r.abrupt(
                  'return',
                  Promise.resolve().then(function () {
                    var i
                    ;(i = t[ml]) === null || i === void 0 || i.unmount(),
                      delete t[ml]
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
function nj(e) {
  X3(e)
}
function rj(e) {
  return nf.apply(this, arguments)
}
function nf() {
  return (
    (nf = Rr(
      Ge().mark(function e(t) {
        return Ge().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                if (Jl === void 0) {
                  r.next = 2
                  break
                }
                return r.abrupt('return', tj(t))
              case 2:
                nj(t)
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
const ij = (e, t) => (ej(e, t), () => rj(t))
let oj = ij
function aj() {
  return oj
}
const sj = function (e) {
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
  lj = (e) => {
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
  uj = f3('Wave', (e) => [lj(e)]),
  $p = `${pl}-wave-target`
function uc(e) {
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
function cj(e) {
  const {
    borderTopColor: t,
    borderColor: n,
    backgroundColor: r
  } = getComputedStyle(e)
  return uc(t) ? t : uc(n) ? n : uc(r) ? r : null
}
function cc(e) {
  return Number.isNaN(e) ? 0 : e
}
const dj = (e) => {
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
      [_, w] = j.useState(0),
      [m, p] = j.useState(0),
      [v, x] = j.useState(!1),
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
      l(cj(n))
      const T = E.position === 'static',
        { borderLeftWidth: k, borderTopWidth: M } = E
      d(T ? n.offsetLeft : cc(-parseFloat(k))),
        y(T ? n.offsetTop : cc(-parseFloat(M))),
        w(n.offsetWidth),
        p(n.offsetHeight)
      const {
        borderTopLeftRadius: L,
        borderTopRightRadius: O,
        borderBottomLeftRadius: A,
        borderBottomRightRadius: z
      } = E
      c([L, O, z, A].map((I) => cc(parseFloat(I))))
    }
    if (
      (j.useEffect(() => {
        if (n) {
          const E = Tn(() => {
            C(), x(!0)
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
      !v)
    )
      return null
    const S =
      (r === 'Checkbox' || r === 'Radio') &&
      (n == null ? void 0 : n.classList.contains($p))
    return j.createElement(
      i_,
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
          ref: Tp(o, T),
          className: Mr(t, k, { 'wave-quick': S }),
          style: b
        })
      }
    )
  },
  fj = (e, t) => {
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
    const o = aj()
    let a = null
    function s() {
      return a
    }
    a = o(
      j.createElement(
        dj,
        Object.assign({}, t, { target: e, registerUnmount: s })
      ),
      i
    )
  },
  pj = (e, t, n) => {
    const { wave: r } = j.useContext(kn),
      [, i, o] = wa(),
      a = Ii((u) => {
        const c = e.current
        if ((r != null && r.disabled) || !c) return
        const f = c.querySelector(`.${$p}`) || c,
          { showEffect: d } = r || {}
        ;(d || fj)(f, {
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
  hj = (e) => {
    const { children: t, disabled: n, component: r } = e,
      { getPrefixCls: i } = j.useContext(kn),
      o = j.useRef(null),
      a = i('wave'),
      [, s] = uj(a),
      l = pj(o, Mr(a, s), r)
    if (
      (te.useEffect(() => {
        const c = o.current
        if (!c || c.nodeType !== 1 || n) return
        const f = (d) => {
          !sj(d.target) ||
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
    const u = ry(t) ? Tp(oy(t), o) : o
    return Q3(t, { ref: u })
  }
var gr = 'RC_FORM_INTERNAL_HOOKS',
  ae = function () {
    kt(
      !1,
      'Can not find FormContext. Please make sure you wrap Field under Form.'
    )
  },
  Ri = j.createContext({
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
  vl = j.createContext(null)
function rf(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e]
}
function mj(e) {
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
function vj(e) {
  try {
    return Function.toString.call(e).indexOf('[native code]') !== -1
  } catch {
    return typeof e == 'function'
  }
}
function gj(e, t, n) {
  if (kp()) return Reflect.construct.apply(null, arguments)
  var r = [null]
  r.push.apply(r, t)
  var i = new (e.bind.apply(e, r))()
  return n && ea(i, n.prototype), i
}
function sf(e) {
  var t = typeof Map == 'function' ? new Map() : void 0
  return (
    (sf = function (r) {
      if (r === null || !vj(r)) return r
      if (typeof r != 'function')
        throw new TypeError(
          'Super expression must either be null or a function'
        )
      if (t !== void 0) {
        if (t.has(r)) return t.get(r)
        t.set(r, i)
      }
      function i() {
        return gj(r, arguments, ta(this).constructor)
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
var yj = /%[sdj%]/g,
  _j = function () {}
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
function dt(e) {
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
    var a = e.replace(yj, function (s) {
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
function wj(e) {
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
    (wj(t) && typeof e == 'string' && !e)
  )
}
function xj(e, t, n) {
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
function bj(e) {
  var t = []
  return (
    Object.keys(e).forEach(function (n) {
      t.push.apply(t, Q(e[n] || []))
    }),
    t
  )
}
var kv = (function (e) {
  zi(n, e)
  var t = Vi(n)
  function n(r, i) {
    var o
    return (
      nt(this, n),
      (o = t.call(this, 'Async Validation Error')),
      D(Y(o), 'errors', void 0),
      D(Y(o), 'fields', void 0),
      (o.errors = r),
      (o.fields = i),
      o
    )
  }
  return rt(n)
})(sf(Error))
function Sj(e, t, n, r, i) {
  if (t.first) {
    var o = new Promise(function (d, g) {
      var y = function (m) {
          return r(m), m.length ? g(new kv(m, lf(m))) : d(i)
        },
        _ = bj(e)
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
      var y = function (w) {
        if ((c.push.apply(c, w), u++, u === l))
          return r(c), c.length ? g(new kv(c, lf(c))) : d(i)
      }
      s.length || (r(c), d(i)),
        s.forEach(function (_) {
          var w = e[_]
          a.indexOf(_) !== -1 ? Tv(w, n, y) : xj(w, n, y)
        })
    })
  return (
    f.catch(function (d) {
      return d
    }),
    f
  )
}
function Cj(e) {
  return !!(e && e.message !== void 0)
}
function Ej(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null) return n
    n = n[t[r]]
  }
  return n
}
function jv(e, t) {
  return function (n) {
    var r
    return (
      e.fullFields
        ? (r = Ej(t, e.fullFields))
        : (r = t[n.field || e.fullField]),
      Cj(n)
        ? ((n.field = n.field || e.fullField), (n.fieldValue = r), n)
        : {
            message: typeof n == 'function' ? n() : n,
            fieldValue: r,
            field: n.field || e.fullField
          }
    )
  }
}
function Pv(e, t) {
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
  Tj = function (t, n, r, i, o) {
    ;(t[Xr] = Array.isArray(t[Xr]) ? t[Xr] : []),
      t[Xr].indexOf(n) === -1 &&
        i.push(dt(o.messages[Xr], t.fullField, t[Xr].join(', ')))
  },
  kj = function (t, n, r, i, o) {
    if (t.pattern) {
      if (t.pattern instanceof RegExp)
        (t.pattern.lastIndex = 0),
          t.pattern.test(n) ||
            i.push(dt(o.messages.pattern.mismatch, t.fullField, n, t.pattern))
      else if (typeof t.pattern == 'string') {
        var a = new RegExp(t.pattern)
        a.test(n) ||
          i.push(dt(o.messages.pattern.mismatch, t.fullField, n, t.pattern))
      }
    }
  },
  jj = function (t, n, r, i, o) {
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
        ? c !== t.len && i.push(dt(o.messages[f].len, t.fullField, t.len))
        : s && !l && c < t.min
        ? i.push(dt(o.messages[f].min, t.fullField, t.min))
        : l && !s && c > t.max
        ? i.push(dt(o.messages[f].max, t.fullField, t.max))
        : s &&
          l &&
          (c < t.min || c > t.max) &&
          i.push(dt(o.messages[f].range, t.fullField, t.min, t.max))
  },
  s_ = function (t, n, r, i, o, a) {
    t.required &&
      (!r.hasOwnProperty(t.field) || Ce(n, a || t.type)) &&
      i.push(dt(o.messages.required, t.fullField))
  },
  ls
const Pj = function () {
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
    w = '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*',
    m = '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))',
    p = '(?::\\d{2,5})?',
    v = '(?:[/?#][^\\s"]*)?',
    x = '(?:'
      .concat(f, '|www\\.)')
      .concat(d, '(?:localhost|')
      .concat(g, '|')
      .concat(y, '|')
      .concat(_)
      .concat(w)
      .concat(m, ')')
      .concat(p)
      .concat(v)
  return (ls = new RegExp('(?:^'.concat(x, '$)'), 'i')), ls
}
var Mv = {
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
      return typeof t == 'string' && t.length <= 320 && !!t.match(Mv.email)
    },
    url: function (t) {
      return typeof t == 'string' && t.length <= 2048 && !!t.match(Pj())
    },
    hex: function (t) {
      return typeof t == 'string' && !!t.match(Mv.hex)
    }
  },
  Mj = function (t, n, r, i, o) {
    if (t.required && n === void 0) {
      s_(t, n, r, i, o)
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
      ? fo[s](n) || i.push(dt(o.messages.types[s], t.fullField, t.type))
      : s &&
        X(n) !== t.type &&
        i.push(dt(o.messages.types[s], t.fullField, t.type))
  },
  Nj = function (t, n, r, i, o) {
    ;(/^\s+$/.test(n) || n === '') &&
      i.push(dt(o.messages.whitespace, t.fullField))
  }
const ee = {
  required: s_,
  whitespace: Nj,
  type: Mj,
  range: jj,
  enum: Tj,
  pattern: kj
}
var Oj = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (Ce(n) && !t.required) return r()
      ee.required(t, n, i, a, o)
    }
    r(a)
  },
  Lj = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (n == null && !t.required) return r()
      ee.required(t, n, i, a, o, 'array'),
        n != null && (ee.type(t, n, i, a, o), ee.range(t, n, i, a, o))
    }
    r(a)
  },
  Aj = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (Ce(n) && !t.required) return r()
      ee.required(t, n, i, a, o), n !== void 0 && ee.type(t, n, i, a, o)
    }
    r(a)
  },
  Ij = function (t, n, r, i, o) {
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
  Rj = 'enum',
  Fj = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (Ce(n) && !t.required) return r()
      ee.required(t, n, i, a, o), n !== void 0 && ee[Rj](t, n, i, a, o)
    }
    r(a)
  },
  $j = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (Ce(n) && !t.required) return r()
      ee.required(t, n, i, a, o),
        n !== void 0 && (ee.type(t, n, i, a, o), ee.range(t, n, i, a, o))
    }
    r(a)
  },
  Dj = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (Ce(n) && !t.required) return r()
      ee.required(t, n, i, a, o),
        n !== void 0 && (ee.type(t, n, i, a, o), ee.range(t, n, i, a, o))
    }
    r(a)
  },
  zj = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (Ce(n) && !t.required) return r()
      ee.required(t, n, i, a, o), n !== void 0 && ee.type(t, n, i, a, o)
    }
    r(a)
  },
  Vj = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if ((n === '' && (n = void 0), Ce(n) && !t.required)) return r()
      ee.required(t, n, i, a, o),
        n !== void 0 && (ee.type(t, n, i, a, o), ee.range(t, n, i, a, o))
    }
    r(a)
  },
  Bj = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (Ce(n) && !t.required) return r()
      ee.required(t, n, i, a, o), n !== void 0 && ee.type(t, n, i, a, o)
    }
    r(a)
  },
  Hj = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (Ce(n, 'string') && !t.required) return r()
      ee.required(t, n, i, a, o), Ce(n, 'string') || ee.pattern(t, n, i, a, o)
    }
    r(a)
  },
  qj = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (Ce(n) && !t.required) return r()
      ee.required(t, n, i, a, o), Ce(n) || ee.type(t, n, i, a, o)
    }
    r(a)
  },
  Wj = function (t, n, r, i, o) {
    var a = [],
      s = Array.isArray(n) ? 'array' : X(n)
    ee.required(t, n, i, a, o, s), r(a)
  },
  Uj = function (t, n, r, i, o) {
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
  dc = function (t, n, r, i, o) {
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
  string: Uj,
  method: zj,
  number: Vj,
  boolean: Aj,
  regexp: qj,
  integer: Dj,
  float: $j,
  array: Lj,
  object: Bj,
  enum: Fj,
  pattern: Hj,
  date: Ij,
  url: dc,
  hex: dc,
  email: dc,
  required: Wj,
  any: Oj
}
var Sa = (function () {
  function e(t) {
    nt(this, e),
      D(this, 'rules', null),
      D(this, '_messages', af),
      this.define(t)
  }
  return (
    rt(e, [
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
          return n && (this._messages = Pv(of(), n)), this._messages
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
              w = {}
            function m(v) {
              if (Array.isArray(v)) {
                var x
                _ = (x = _).concat.apply(x, Q(v))
              } else _.push(v)
            }
            for (var p = 0; p < y.length; p++) m(y[p])
            _.length ? ((w = lf(_)), l(_, w)) : l(null, a)
          }
          if (s.messages) {
            var c = this.messages()
            c === af && (c = of()), Pv(c, s.messages), (s.messages = c)
          } else s.messages = this.messages()
          var f = {},
            d = s.keys || Object.keys(this.rules)
          d.forEach(function (y) {
            var _ = r.rules[y],
              w = a[y]
            _.forEach(function (m) {
              var p = m
              typeof p.transform == 'function' &&
                (a === n && (a = B({}, a)),
                (w = a[y] = p.transform(w)),
                w != null &&
                  (p.type = p.type || (Array.isArray(w) ? 'array' : X(w)))),
                typeof p == 'function'
                  ? (p = { validator: p })
                  : (p = B({}, p)),
                (p.validator = r.getValidationMethod(p)),
                p.validator &&
                  ((p.field = y),
                  (p.fullField = p.fullField || y),
                  (p.type = r.getType(p)),
                  (f[y] = f[y] || []),
                  f[y].push({ rule: p, value: w, source: a, field: y }))
            })
          })
          var g = {}
          return Sj(
            f,
            s,
            function (y, _) {
              var w = y.rule,
                m =
                  (w.type === 'object' || w.type === 'array') &&
                  (X(w.fields) === 'object' || X(w.defaultField) === 'object')
              ;(m = m && (w.required || (!w.required && y.value))),
                (w.field = y.field)
              function p(S, E) {
                return B(
                  B({}, E),
                  {},
                  {
                    fullField: ''.concat(w.fullField, '.').concat(S),
                    fullFields: w.fullFields
                      ? [].concat(Q(w.fullFields), [S])
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
                  E.length && w.message !== void 0 && (E = [].concat(w.message))
                var T = E.map(jv(w, a))
                if (s.first && T.length) return (g[w.field] = 1), _(T)
                if (!m) _(T)
                else {
                  if (w.required && !y.value)
                    return (
                      w.message !== void 0
                        ? (T = [].concat(w.message).map(jv(w, a)))
                        : s.error &&
                          (T = [s.error(w, dt(s.messages.required, w.field))]),
                      _(T)
                    )
                  var k = {}
                  w.defaultField &&
                    Object.keys(y.value).map(function (O) {
                      k[O] = w.defaultField
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
              var x
              if (w.asyncValidator)
                x = w.asyncValidator(w, y.value, v, y.source, s)
              else if (w.validator) {
                try {
                  x = w.validator(w, y.value, v, y.source, s)
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
                x === !0
                  ? v()
                  : x === !1
                  ? v(
                      typeof w.message == 'function'
                        ? w.message(w.fullField || w.field)
                        : w.message ||
                            ''.concat(w.fullField || w.field, ' fails')
                    )
                  : x instanceof Array
                  ? v(x)
                  : x instanceof Error && v(x.message)
              }
              x &&
                x.then &&
                x.then(
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
              !jo.hasOwnProperty(n.type))
          )
            throw new Error(dt('Unknown rule type %s', n.type))
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
D(Sa, 'warning', _j)
D(Sa, 'messages', af)
D(Sa, 'validators', jo)
var ot = "'${name}' is not a valid ${type}",
  l_ = {
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
      string: ot,
      method: ot,
      array: ot,
      object: ot,
      number: ot,
      date: ot,
      boolean: ot,
      integer: ot,
      float: ot,
      regexp: ot,
      email: ot,
      url: ot,
      hex: ot
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
  Nv = Sa
function Gj(e, t) {
  return e.replace(/\\?\$\{\w+\}/g, function (n) {
    if (n.startsWith('\\')) return n.slice(1)
    var r = n.slice(2, -1)
    return t[r]
  })
}
var Ov = 'CODE_LOGIC_ERROR'
function uf(e, t, n, r, i) {
  return cf.apply(this, arguments)
}
function cf() {
  return (
    (cf = Rr(
      Ge().mark(function e(t, n, r, i, o) {
        var a, s, l, u, c, f, d, g, y
        return Ge().wrap(
          function (w) {
            for (;;)
              switch ((w.prev = w.next)) {
                case 0:
                  return (
                    (a = B({}, r)),
                    delete a.ruleIndex,
                    (Nv.warning = function () {}),
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
                    (u = new Nv(D({}, t, [a]))),
                    (c = di(l_, i.validateMessages)),
                    u.messages(c),
                    (f = []),
                    (w.prev = 10),
                    (w.next = 13),
                    Promise.resolve(u.validate(D({}, t, n), B({}, i)))
                  )
                case 13:
                  w.next = 18
                  break
                case 15:
                  ;(w.prev = 15),
                    (w.t0 = w.catch(10)),
                    w.t0.errors &&
                      (f = w.t0.errors.map(function (m, p) {
                        var v = m.message,
                          x = v === Ov ? c.default : v
                        return j.isValidElement(x)
                          ? j.cloneElement(x, { key: 'error_'.concat(p) })
                          : x
                      }))
                case 18:
                  if (!(!f.length && l)) {
                    w.next = 23
                    break
                  }
                  return (
                    (w.next = 21),
                    Promise.all(
                      n.map(function (m, p) {
                        return uf(''.concat(t, '.').concat(p), m, l, i, o)
                      })
                    )
                  )
                case 21:
                  return (
                    (d = w.sent),
                    w.abrupt(
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
                      return typeof m == 'string' ? Gj(m, g) : m
                    })),
                    w.abrupt('return', y)
                  )
                case 26:
                case 'end':
                  return w.stop()
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
function Qj(e, t, n, r, i, o) {
  var a = e.join('.'),
    s = n
      .map(function (c, f) {
        var d = c.validator,
          g = B(B({}, c), {}, { ruleIndex: f })
        return (
          d &&
            (g.validator = function (y, _, w) {
              var m = !1,
                p = function () {
                  for (
                    var b = arguments.length, C = new Array(b), S = 0;
                    S < b;
                    S++
                  )
                    C[S] = arguments[S]
                  Promise.resolve().then(function () {
                    kt(
                      !m,
                      'Your validator function has already return a promise. `callback` will be ignored.'
                    ),
                      m || w.apply(void 0, C)
                  })
                },
                v = d(y, _, p)
              ;(m =
                v &&
                typeof v.then == 'function' &&
                typeof v.catch == 'function'),
                kt(
                  m,
                  '`callback` is deprecated. Please return a promise instead.'
                ),
                m &&
                  v
                    .then(function () {
                      w()
                    })
                    .catch(function (x) {
                      w(x || ' ')
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
        var c = Rr(
          Ge().mark(function f(d, g) {
            var y, _, w
            return Ge().wrap(function (p) {
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
                    if (((w = p.sent), !w.length)) {
                      p.next = 9
                      break
                    }
                    return g([{ errors: w, rule: _ }]), p.abrupt('return')
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
    l = (i ? Xj(u) : Kj(u)).then(function (c) {
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
function Kj(e) {
  return df.apply(this, arguments)
}
function df() {
  return (
    (df = Rr(
      Ge().mark(function e(t) {
        return Ge().wrap(function (r) {
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
function Xj(e) {
  return ff.apply(this, arguments)
}
function ff() {
  return (
    (ff = Rr(
      Ge().mark(function e(t) {
        var n
        return Ge().wrap(function (i) {
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
function Lv(e, t) {
  var n = {}
  return (
    t.forEach(function (r) {
      var i = en(e, r)
      n = Rt(n, r, i)
    }),
    n
  )
}
function Si(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1
  return (
    e &&
    e.some(function (r) {
      return u_(t, r, n)
    })
  )
}
function u_(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1
  return !e || !t || (!n && e.length !== t.length)
    ? !1
    : t.every(function (r, i) {
        return e[i] === r
      })
}
function Yj(e, t) {
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
function Zj(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1]
  return t && t.target && X(t.target) === 'object' && e in t.target
    ? t.target[e]
    : t
}
function Av(e, t, n) {
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
var Jj = ['name'],
  wt = []
function fc(e, t, n, r, i, o) {
  return typeof e == 'function'
    ? e(t, n, 'source' in o ? { source: o.source } : {})
    : r !== i
}
var Dp = (function (e) {
  zi(n, e)
  var t = Vi(n)
  function n(r) {
    var i
    if (
      (nt(this, n),
      (i = t.call(this, r)),
      D(Y(i), 'state', { resetCount: 0 }),
      D(Y(i), 'cancelRegisterFunc', null),
      D(Y(i), 'mounted', !1),
      D(Y(i), 'touched', !1),
      D(Y(i), 'dirty', !1),
      D(Y(i), 'validatePromise', void 0),
      D(Y(i), 'prevValidating', void 0),
      D(Y(i), 'errors', wt),
      D(Y(i), 'warnings', wt),
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
          w = c.store,
          m = i.getNamePath(),
          p = i.getValue(l),
          v = i.getValue(w),
          x = u && Si(u, m)
        switch (
          (c.type === 'valueUpdate' &&
            c.source === 'external' &&
            !Td(p, v) &&
            ((i.touched = !0),
            (i.dirty = !0),
            (i.validatePromise = null),
            (i.errors = wt),
            (i.warnings = wt),
            i.triggerMetaEvent()),
          c.type)
        ) {
          case 'reset':
            if (!u || x) {
              ;(i.touched = !1),
                (i.dirty = !1),
                (i.validatePromise = void 0),
                (i.errors = wt),
                (i.warnings = wt),
                i.triggerMetaEvent(),
                _ == null || _(),
                i.refresh()
              return
            }
            break
          case 'remove': {
            if (d && fc(d, l, w, p, v, c)) {
              i.reRender()
              return
            }
            break
          }
          case 'setField': {
            var b = c.data
            if (x) {
              'touched' in b && (i.touched = b.touched),
                'validating' in b &&
                  !('originRCField' in b) &&
                  (i.validatePromise = b.validating
                    ? Promise.resolve([])
                    : null),
                'errors' in b && (i.errors = b.errors || wt),
                'warnings' in b && (i.warnings = b.warnings || wt),
                (i.dirty = !0),
                i.triggerMetaEvent(),
                i.reRender()
              return
            } else if ('value' in b && Si(u, m, !0)) {
              i.reRender()
              return
            }
            if (d && !m.length && fc(d, l, w, p, v, c)) {
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
            if (x || ((!y.length || m.length || d) && fc(d, l, w, p, v, c))) {
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
            Rr(
              Ge().mark(function w() {
                var m, p, v, x, b, C, S
                return Ge().wrap(function (T) {
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
                          ((m = i.props),
                          (p = m.validateFirst),
                          (v = p === void 0 ? !1 : p),
                          (x = m.messageVariables),
                          (b = m.validateDebounce),
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
                          (S = Qj(u, c, C, l, v, x)),
                          S.catch(function (k) {
                            return k
                          }).then(function () {
                            var k =
                              arguments.length > 0 && arguments[0] !== void 0
                                ? arguments[0]
                                : wt
                            if (i.validatePromise === _) {
                              var M
                              i.validatePromise = null
                              var L = [],
                                O = []
                              ;(M = k.forEach) === null ||
                                M === void 0 ||
                                M.call(k, function (A) {
                                  var z = A.rule.warningOnly,
                                    I = A.errors,
                                    R = I === void 0 ? wt : I
                                  z
                                    ? O.push.apply(O, Q(R))
                                    : L.push.apply(L, Q(R))
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
                }, w)
              })
            )
          )
        return (
          y ||
            ((i.validatePromise = _),
            (i.dirty = !0),
            (i.errors = wt),
            (i.warnings = wt),
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
          w = u.getValueProps,
          m = u.fieldContext,
          p = d !== void 0 ? d : m.validateTrigger,
          v = i.getNamePath(),
          x = m.getInternalHooks,
          b = m.getFieldsValue,
          C = x(gr),
          S = C.dispatch,
          E = i.getValue(),
          T =
            w ||
            function (A) {
              return D({}, _, A)
            },
          k = l[f],
          M = c !== void 0 ? T(E) : {},
          L = B(B({}, l), M)
        L[f] = function () {
          ;(i.touched = !0), (i.dirty = !0), i.triggerMetaEvent()
          for (var A, z = arguments.length, I = new Array(z), R = 0; R < z; R++)
            I[R] = arguments[R]
          g ? (A = g.apply(void 0, I)) : (A = Zj.apply(void 0, [_].concat(I))),
            y && (A = y(A, E, b(!0))),
            A !== E && S({ type: 'updateValue', namePath: v, value: A }),
            k && k.apply(void 0, I)
        }
        var O = rf(p || [])
        return (
          O.forEach(function (A) {
            var z = L[A]
            L[A] = function () {
              z && z.apply(void 0, arguments)
              var I = i.props.rules
              I &&
                I.length &&
                S({ type: 'validateField', namePath: v, triggerName: A })
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
    rt(n, [
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
D(Dp, 'contextType', Ri)
D(Dp, 'defaultProps', { trigger: 'onChange', valuePropName: 'value' })
function c_(e) {
  var t,
    n = e.name,
    r = Or(e, Jj),
    i = j.useContext(Ri),
    o = j.useContext(vl),
    a = n !== void 0 ? ge(n) : void 0,
    s = (t = r.isListField) !== null && t !== void 0 ? t : !!o,
    l = 'keep'
  return (
    s || (l = '_'.concat((a || []).join('_'))),
    j.createElement(
      Dp,
      Nr({ key: l, name: a, isListField: s }, r, { fieldContext: i })
    )
  )
}
function e7(e) {
  var t = e.name,
    n = e.initialValue,
    r = e.children,
    i = e.rules,
    o = e.validateTrigger,
    a = e.isListField,
    s = j.useContext(Ri),
    l = j.useContext(vl),
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
          getKey: function (w) {
            var m = f.length,
              p = w[m]
            return [c.keys[p], w.slice(m + 1)]
          }
        }
      },
      [f]
    )
  if (typeof r != 'function')
    return kt(!1, 'Form.List only accepts function as children.'), null
  var y = function (w, m, p) {
    var v = p.source
    return v === 'internal' ? !1 : w !== m
  }
  return j.createElement(
    vl.Provider,
    { value: g },
    j.createElement(
      Ri.Provider,
      { value: d },
      j.createElement(
        c_,
        {
          name: [],
          shouldUpdate: y,
          rules: i,
          validateTrigger: o,
          initialValue: n,
          isList: !0,
          isListField: a ?? !!l
        },
        function (_, w) {
          var m = _.value,
            p = m === void 0 ? [] : m,
            v = _.onChange,
            x = s.getFieldValue,
            b = function () {
              var T = x(f || [])
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
                    v([].concat(Q(M.slice(0, k)), [T], Q(M.slice(k)))))
                  : ((c.keys = [].concat(Q(c.keys), [c.id])),
                    v([].concat(Q(M), [T]))),
                  (c.id += 1)
              },
              remove: function (T) {
                var k = b(),
                  M = new Set(Array.isArray(T) ? T : [T])
                M.size <= 0 ||
                  ((c.keys = c.keys.filter(function (L, O) {
                    return !M.has(O)
                  })),
                  v(
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
                    ((c.keys = Av(c.keys, T, k)), v(Av(M, T, k)))
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
              w
            )
          )
        }
      )
    )
  )
}
function t7(e) {
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
var d_ = '__@field_split__'
function pc(e) {
  return e
    .map(function (t) {
      return ''.concat(X(t), ':').concat(t)
    })
    .join(d_)
}
var Yr = (function () {
    function e() {
      nt(this, e), D(this, 'kvs', new Map())
    }
    return (
      rt(e, [
        {
          key: 'set',
          value: function (n, r) {
            this.kvs.set(pc(n), r)
          }
        },
        {
          key: 'get',
          value: function (n) {
            return this.kvs.get(pc(n))
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
            this.kvs.delete(pc(n))
          }
        },
        {
          key: 'map',
          value: function (n) {
            return Q(this.kvs.entries()).map(function (r) {
              var i = K(r, 2),
                o = i[0],
                a = i[1],
                s = o.split(d_)
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
  n7 = ['name'],
  r7 = rt(function e(t) {
    var n = this
    nt(this, e),
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
              a = Rt(a, l, en(r, l))
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
              var w = 'getMeta' in c ? c.getMeta() : null
              a(w) && u.push(g)
            }
          }),
          Lv(n.store, u.map(ge))
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
          f = function (w) {
            return w.isFieldTouched()
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
            var w = _.getNamePath()
            l.forEach(function (m) {
              m.every(function (p, v) {
                return w[v] === p
              }) &&
                d.update(m, function (p) {
                  return [].concat(Q(p), [_])
                })
            })
          })
        var g = function (w) {
            return w.some(f)
          },
          y = d.map(function (_) {
            var w = _.value
            return w
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
                      w = c.isListField()
                    !w &&
                      (!r.skipExist || _ === void 0) &&
                      n.updateStore(Rt(n.store, d, Q(y)[0].value))
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
          n.updateStore(Rt(n.store, a, s))
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
            l = Or(a, n7),
            u = ge(s)
          o.push(u),
            'value' in l && n.updateStore(Rt(n.store, u, l.value)),
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
          a === void 0 && n.updateStore(Rt(n.store, o, i))
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
                return !u_(f.getNamePath(), i)
              })
            ) {
              var c = n.store
              n.updateStore(Rt(c, i, u, !0)),
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
        n.updateStore(Rt(n.store, o, i)),
          n.notifyObservers(a, [o], {
            type: 'valueUpdate',
            source: 'internal'
          }),
          n.notifyWatch([o])
        var s = n.triggerDependenciesUpdate(a, o),
          l = n.callbacks.onValuesChange
        if (l) {
          var u = Lv(n.store, [o])
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
            var v = p.getNamePath()
            if ((f.add(v.join(c)), !s || Si(l, v, g))) {
              var x = p.validateRules(
                B({ validateMessages: B(B({}, l_), n.validateMessages) }, a)
              )
              u.push(
                x
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
                        C.call(b, function (T) {
                          var k = T.rule.warningOnly,
                            M = T.errors
                          k ? E.push.apply(E, Q(M)) : S.push.apply(S, Q(M))
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
        var _ = t7(u)
        ;(n.lastValidatePromise = _),
          _.catch(function (p) {
            return p
          }).then(function (p) {
            var v = p.map(function (x) {
              var b = x.name
              return b
            })
            n.notifyObservers(n.store, v, { type: 'validateFinish' }),
              n.triggerOnFieldsChange(v, p)
          })
        var w = _.then(function () {
          return n.lastValidatePromise === _
            ? Promise.resolve(n.getFieldsValue(l))
            : Promise.reject([])
        }).catch(function (p) {
          var v = p.filter(function (x) {
            return x && x.errors.length
          })
          return Promise.reject({
            values: n.getFieldsValue(l),
            errorFields: v,
            outOfDate: n.lastValidatePromise !== _
          })
        })
        w.catch(function (p) {
          return p
        })
        var m = l.filter(function (p) {
          return f.has(p.join(c))
        })
        return n.triggerOnFieldsChange(m), w
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
function f_(e) {
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
        a = new r7(o)
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
  i7 = function (t) {
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
  o7 = [
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
  a7 = function (t, n) {
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
      w = t.onFinish,
      m = t.onFinishFailed,
      p = t.clearOnDestroy,
      v = Or(t, o7),
      x = j.useRef(null),
      b = j.useContext(pf),
      C = f_(a),
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
      return B(B({}, E), {}, { nativeElement: x.current })
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
          b.triggerFormFinish(r, U), w && w(U)
        },
        onFinishFailed: m
      }),
      A(s)
    var I = j.useRef(null)
    M(i, !I.current),
      I.current || (I.current = !0),
      j.useEffect(function () {
        return function () {
          return z(p)
        }
      }, [])
    var R,
      N = typeof l == 'function'
    if (N) {
      var F = E.getFieldsValue(!0)
      R = l(F, E)
    } else R = l
    k(!N)
    var $ = j.useRef()
    j.useEffect(
      function () {
        Yj($.current || [], o || []) || E.setFields(o || []), ($.current = o)
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
        vl.Provider,
        { value: null },
        j.createElement(Ri.Provider, { value: V }, R)
      )
    return c === !1
      ? q
      : j.createElement(
          c,
          Nr({}, v, {
            ref: x,
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
function s7() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n]
  var r = t[0],
    i = t[1],
    o = i === void 0 ? {} : i,
    a = mj(o) ? { form: o } : o,
    s = a.form,
    l = j.useState(),
    u = K(l, 2),
    c = u[0],
    f = u[1],
    d = j.useMemo(
      function () {
        return Iv(c)
      },
      [c]
    ),
    g = j.useRef(d)
  g.current = d
  var y = j.useContext(Ri),
    _ = s || y,
    w = _ && _._init,
    m = ge(r),
    p = j.useRef(m)
  return (
    (p.current = m),
    j.useEffect(
      function () {
        if (w) {
          var v = _.getFieldsValue,
            x = _.getInternalHooks,
            b = x(gr),
            C = b.registerWatch,
            S = function (M, L) {
              var O = a.preserve ? L : M
              return typeof r == 'function' ? r(O) : en(O, p.current)
            },
            E = C(function (k, M) {
              var L = S(k, M),
                O = Iv(L)
              g.current !== O && ((g.current = O), f(L))
            }),
            T = S(v(), v(!0))
          return c !== T && f(T), E
        }
      },
      [w]
    ),
    c
  )
}
var l7 = j.forwardRef(a7),
  Ca = l7
Ca.FormProvider = i7
Ca.Field = c_
Ca.List = e7
Ca.useForm = f_
Ca.useWatch = s7
const u7 = j.createContext({})
var c7 = [
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
  d7 = j.forwardRef(function (e, t) {
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
      y = Or(e, c7),
      _ = j.useRef(null),
      w = j.useRef(null),
      m = Q8(u, { value: a }),
      p = K(m, 2),
      v = p[0],
      x = p[1]
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
        nativeElement: w.current
      }
    })
    var b = Mr(
        r,
        i,
        D(D({}, ''.concat(r, '-checked'), v), ''.concat(r, '-disabled'), s)
      ),
      C = function (E) {
        s ||
          ('checked' in e || x(E.target.checked),
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
      { className: b, title: d, style: o, ref: w },
      j.createElement(
        'input',
        Nr({}, y, {
          className: ''.concat(r, '-input'),
          ref: _,
          onChange: C,
          disabled: s,
          checked: !!v,
          type: f
        })
      ),
      j.createElement('span', { className: ''.concat(r, '-inner') })
    )
  })
function f7(e) {
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
const p7 = (e) => {
  const { checkboxCls: t } = e,
    n = `${t}-wrapper`
  return [
    {
      [`${t}-group`]: Object.assign(Object.assign({}, ac(e)), {
        display: 'inline-flex',
        flexWrap: 'wrap',
        columnGap: e.marginXS,
        [`> ${e.antCls}-row`]: { flex: 1 }
      }),
      [n]: Object.assign(Object.assign({}, ac(e)), {
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
      [t]: Object.assign(Object.assign({}, ac(e)), {
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
          [`&:focus-visible + ${t}-inner`]: Object.assign({}, c3(e))
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
function h7(e, t) {
  const n = Rp(t, {
    checkboxCls: `.${e}`,
    checkboxSize: t.controlInteractiveSize
  })
  return [p7(n)]
}
const p_ = d3('Checkbox', (e, t) => {
    let { prefixCls: n } = t
    return [h7(n, e)]
  }),
  h_ = te.createContext(null)
var m7 = function (e, t) {
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
const v7 = (e, t) => {
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
      g = m7(e, [
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
      { getPrefixCls: y, direction: _, checkbox: w } = j.useContext(kn),
      m = j.useContext(h_),
      { isFormItemInput: p } = j.useContext(u7),
      v = j.useContext(hl),
      x =
        (n = (m == null ? void 0 : m.disabled) || d) !== null && n !== void 0
          ? n
          : v,
      b = j.useRef(g.value),
      C = j.useRef(null),
      S = Tp(t, C)
    j.useEffect(() => {
      m == null || m.registerValue(g.value)
    }, []),
      j.useEffect(() => {
        if (!f)
          return (
            g.value !== b.current &&
              (m == null || m.cancelValue(b.current),
              m == null || m.registerValue(g.value),
              (b.current = g.value)),
            () => (m == null ? void 0 : m.cancelValue(g.value))
          )
      }, [g.value]),
      j.useEffect(() => {
        var N
        !((N = C.current) === null || N === void 0) &&
          N.input &&
          (C.current.input.indeterminate = s)
      }, [s])
    const E = y('checkbox', r),
      T = a_(E),
      [k, M, L] = p_(E, T),
      O = Object.assign({}, g)
    m &&
      !f &&
      ((O.onChange = function () {
        g.onChange && g.onChange.apply(g, arguments),
          m.toggleOption && m.toggleOption({ label: a, value: g.value })
      }),
      (O.name = m.name),
      (O.checked = m.value.includes(g.value)))
    const A = Mr(
        `${E}-wrapper`,
        {
          [`${E}-rtl`]: _ === 'rtl',
          [`${E}-wrapper-checked`]: O.checked,
          [`${E}-wrapper-disabled`]: x,
          [`${E}-wrapper-in-form-item`]: p
        },
        w == null ? void 0 : w.className,
        i,
        o,
        L,
        T,
        M
      ),
      z = Mr({ [`${E}-indeterminate`]: s }, $p, M),
      [I, R] = f7(O.onClick)
    return k(
      j.createElement(
        hj,
        { component: 'Checkbox', disabled: x },
        j.createElement(
          'label',
          {
            className: A,
            style: Object.assign(
              Object.assign({}, w == null ? void 0 : w.style),
              l
            ),
            onMouseEnter: u,
            onMouseLeave: c,
            onClick: I
          },
          j.createElement(
            d7,
            Object.assign({}, O, {
              onClick: R,
              prefixCls: E,
              className: z,
              disabled: x,
              ref: S
            })
          ),
          a !== void 0 && j.createElement('span', null, a)
        )
      )
    )
  },
  m_ = j.forwardRef(v7)
var g7 = function (e, t) {
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
const y7 = j.forwardRef((e, t) => {
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
      c = g7(e, [
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
      [_, w] = j.useState([])
    j.useEffect(() => {
      'value' in c && y(c.value || [])
    }, [c.value])
    const m = j.useMemo(
        () =>
          i.map((z) =>
            typeof z == 'string' || typeof z == 'number'
              ? { label: z, value: z }
              : z
          ),
        [i]
      ),
      p = (z) => {
        w((I) => I.filter((R) => R !== z))
      },
      v = (z) => {
        w((I) => [].concat(Q(I), [z]))
      },
      x = (z) => {
        const I = g.indexOf(z.value),
          R = Q(g)
        I === -1 ? R.push(z.value) : R.splice(I, 1),
          'value' in c || y(R),
          u == null ||
            u(
              R.filter((N) => _.includes(N)).sort((N, F) => {
                const $ = m.findIndex((q) => q.value === N),
                  V = m.findIndex((q) => q.value === F)
                return $ - V
              })
            )
      },
      b = f('checkbox', o),
      C = `${b}-group`,
      S = a_(b),
      [E, T, k] = p_(b, S),
      M = U5(c, ['value', 'disabled']),
      L = i.length
        ? m.map((z) =>
            j.createElement(
              m_,
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
        toggleOption: x,
        value: g,
        disabled: c.disabled,
        name: c.name,
        registerValue: v,
        cancelValue: p
      },
      A = Mr(C, { [`${C}-rtl`]: d === 'rtl' }, a, s, k, S, T)
    return E(
      j.createElement(
        'div',
        Object.assign({ className: A, style: l }, M, { ref: t }),
        j.createElement(h_.Provider, { value: O }, L)
      )
    )
  }),
  gl = m_
gl.Group = y7
gl.__ANT_CHECKBOX = !0
const _7 = ({ handleCloseModal: e }) => {
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
                              h.jsx(gl, {
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
                                                mn == null
                                                  ? void 0
                                                  : mn.map((s, l) =>
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
                              h.jsx(gl, {
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
                                                mn == null
                                                  ? void 0
                                                  : mn.map((s, l) =>
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
  w7 = ({ handleCloseModal: e }) => {
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
  x7 = ({ handleCloseModal: e }) => {
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
                              className: P.switch_single_product_image_box,
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
                                    })
                                  ]
                                })
                              ]
                            }),
                            h.jsxs('div', {
                              className: P.switch_single_product_content_box,
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
                                  className:
                                    P.switch_single_product_variant_select,
                                  children: h.jsx('option', {
                                    children:
                                      (s = t == null ? void 0 : t.variant) ==
                                      null
                                        ? void 0
                                        : s.title
                                  })
                                }),
                                h.jsx('p', {
                                  className:
                                    P.switch_single_product_description,
                                  children:
                                    "This women's backpack has a glam look, thanks to a faux-leather build with an allover fur print. The front zip pocket keeps small things within reach, while an interior divider reins in potential chaos."
                                })
                              ]
                            })
                          ]
                        }),
                        h.jsxs('div', {
                          className: P.switch_single_product_action_btn,
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
  b7 = ({ handleCloseModal: e }) => {
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
                                }),
                                h.jsx('p', {
                                  className: P.add_another_product_description,
                                  children:
                                    "This women's backpack has a glam look, thanks to a faux-leather build with an allover fur print. The front zip pocket keeps small things within reach, while an interior divider reins in potential chaos."
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
  S7 = ({
    handleCloseModal: e,
    setActiveModal: t,
    activeModal: n,
    editOrderOption: r
  }) => {
    const [i, o] = j.useState(!0),
      [a, s] = j.useState(!1),
      l = j.useRef(null)
    return (
      j.useEffect(() => {
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
              h.jsxs(bp, {
                ref: l,
                modules: [N4],
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
                          Sp,
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
              n === 'shipping' && h.jsx(Q1, { handleCloseModal: e }),
              n === 'contact_information' && h.jsx(E5, { handleCloseModal: e }),
              n === 'quantities' && h.jsx(T5, { handleCloseModal: e }),
              n === 'contact_customer_support' &&
                h.jsx(k5, { handleCloseModal: e }),
              n === 'change_product_variant' &&
                h.jsx(j5, { handleCloseModal: e }),
              n === 'upgrade_shipping_method' &&
                h.jsx(P5, { handleCloseModal: e }),
              n === 'edit_gift_message' && h.jsx(M5, { handleCloseModal: e }),
              n === 'download_invoice' && h.jsx(_7, { handleCloseModal: e }),
              n === 'request_order_cancel' &&
                h.jsx(w7, { handleCloseModal: e }),
              n === 'switch_product' && h.jsx(x7, { handleCloseModal: e }),
              n === 'add_another_product' && h.jsx(b7, { handleCloseModal: e })
            ]
          })
        ]
      })
    )
  },
  Rv = [
    {
      id: '1',
      name: 'Shipping Address',
      icon: h.jsx(KC, {}),
      modalType: 'shipping'
    },
    {
      id: '2',
      name: 'Change Contact Information',
      icon: h.jsx(Nm, {}),
      modalType: 'contact_information'
    },
    {
      id: '2',
      name: 'Contact Customer Support',
      icon: h.jsx(Nm, {}),
      modalType: 'contact_customer_support'
    },
    {
      id: '3',
      name: 'Change Product Quantities',
      icon: h.jsx(XC, {}),
      modalType: 'quantities'
    },
    {
      id: '10',
      name: 'Add Another Product',
      icon: h.jsx(zu, {}),
      modalType: 'add_another_product'
    },
    {
      id: '4',
      name: 'Change Product Variant',
      icon: h.jsx(YC, {}),
      modalType: 'change_product_variant'
    },
    {
      id: '5',
      name: 'Switch Product',
      icon: h.jsx(ZC, {}),
      modalType: 'switch_product'
    },
    {
      id: '6',
      name: 'Upgrade Shipping Methods',
      icon: h.jsx(JC, {}),
      modalType: 'upgrade_shipping_method'
    },
    {
      id: '9',
      name: 'Edit Gift Message',
      icon: h.jsx(eE, {}),
      modalType: 'edit_gift_message'
    },
    {
      id: '10',
      name: 'Download Invoice',
      icon: h.jsx(zu, {}),
      modalType: 'download_invoice'
    },
    {
      id: '10',
      name: 'Request For Order Cancel',
      icon: h.jsx(zu, {}),
      modalType: 'request_order_cancel'
    }
  ],
  C7 = '_promotion_qrmo6_1',
  Fv = { promotion: C7 },
  E7 = () =>
    h.jsx('div', {
      className: Fv.promotion,
      children: h.jsx('img', {
        className: Fv.promotion_image,
        src: 'https://i.ibb.co.com/9q7kJYv/promotion-banner.png',
        alt: ''
      })
    }),
  T7 = '_orderDetailsContent_ncvid_1',
  k7 = '_orderDetails_ncvid_1',
  j7 = '_orderDetailsItem_ncvid_21',
  P7 = '_orderDetailsItemTitle_ncvid_29',
  M7 = '_information_ncvid_41',
  N7 = '_deadline_ncvid_59',
  De = {
    orderDetailsContent: T7,
    orderDetails: k7,
    orderDetailsItem: j7,
    orderDetailsItemTitle: P7,
    information: M7,
    deadline: N7
  },
  O7 = () =>
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
          children: h.jsx(E7, {})
        })
      ]
    }),
  L7 = '_orderSummary_18d7q_1',
  A7 = '_orderItems_18d7q_39',
  I7 = '_orderItem_18d7q_39',
  R7 = '_itemDetails_18d7q_85',
  F7 = '_order_summary_product_name_18d7q_93',
  $7 = '_order_summary_product_variant_18d7q_103',
  D7 = '_order_summary_price_18d7q_113',
  z7 = '_priceDetails_18d7q_125',
  V7 = '_taxSection_18d7q_127',
  B7 = '_paymentDetails_18d7q_129',
  H7 = '_shippingSection_18d7q_159',
  q7 = '_shippingOption_18d7q_179',
  W7 = '_saveButton_18d7q_221',
  U7 = '_deadline_mobile_18d7q_283',
  G7 = '_deadline_18d7q_283',
  Q7 = '_order_summary_mobile_price_18d7q_321',
  ze = {
    orderSummary: L7,
    orderItems: A7,
    orderItem: I7,
    itemDetails: R7,
    order_summary_product_name: F7,
    order_summary_product_variant: $7,
    order_summary_price: D7,
    priceDetails: z7,
    taxSection: V7,
    paymentDetails: B7,
    shippingSection: H7,
    shippingOption: q7,
    saveButton: W7,
    deadline_mobile: U7,
    deadline: G7,
    order_summary_mobile_price: Q7
  },
  K7 = () => {
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
          className: `${ze.deadline_mobile}`,
          children: h.jsxs('div', {
            className: `${ze.deadline} `,
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
          className: ze.orderSummary,
          children: [
            h.jsx('h2', { children: 'Order summary' }),
            h.jsx('div', {
              className: ze.orderItems,
              children:
                e == null
                  ? void 0
                  : e.map((t) =>
                      h.jsxs(
                        'div',
                        {
                          className: ze.orderItem,
                          children: [
                            h.jsxs('div', {
                              className: ze.itemDetails,
                              children: [
                                h.jsx('img', {
                                  src: t.image,
                                  alt: 'The Collection Snowboard: Hydrogen'
                                }),
                                h.jsxs('div', {
                                  children: [
                                    h.jsx('p', {
                                      className: ze.order_summary_product_name,
                                      children: t.name
                                    }),
                                    h.jsx('p', {
                                      className:
                                        ze.order_summary_product_variant,
                                      children: t.variant
                                    }),
                                    h.jsxs('span', {
                                      className: ze.order_summary_mobile_price,
                                      children: ['BDT ', t.price]
                                    })
                                  ]
                                })
                              ]
                            }),
                            h.jsxs('span', {
                              className: ze.order_summary_price,
                              children: ['BDT ', t.price]
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
                  className: ze.priceDetails,
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
                  className: ze.shippingSection,
                  children: [
                    h.jsx('h3', { children: 'Shipping' }),
                    h.jsxs('div', {
                      className: ze.shippingOption,
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
                  className: ze.taxSection,
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
                  className: ze.paymentDetails,
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
                  className: ze.saveButton,
                  children: 'Pay Now'
                })
              ]
            })
          ]
        })
      ]
    })
  },
  X7 = [
    { id: 1, title: 'Edit Shipping Address', slug: 'shipping_address' },
    { id: 2, title: 'Change Contact Information', slug: 'change_contact_info' },
    {
      id: 3,
      title: 'Change Product Quantity',
      slug: 'change_product_quantities'
    },
    {
      id: 4,
      title: 'Upgrade Shipping Method',
      slug: 'upgrade_shipping_method'
    },
    { id: 5, title: 'Request Order Cancel', slug: 'request_order_cancel' },
    { id: 6, title: 'Download Invoice', slug: 'download_invoice' },
    { id: 7, title: 'Edit Gift Message', slug: 'edit_gift_message' },
    { id: 8, title: 'Add Another Product', slug: 'add_another_product' },
    { id: 9, title: 'Change Size And Variant', slug: 'change_size_variant' },
    {
      id: 10,
      title: 'Contact Customer Support',
      slug: 'contact_customer_support'
    }
  ],
  Y7 = () => {
    const [e, t] = j.useState(!1),
      [n, r] = j.useState('shipping')
    j.useState(Rv)
    const [i, o] = j.useState(X7),
      [a, s] = j.useState({}),
      l = () => {
        t(!1), r(null)
      },
      u = (f) => {
        s((d) => ({ ...d, [f]: !d[f] }))
      },
      c = [
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
    return h.jsxs('div', {
      className: fe.opt_order_edit_container,
      children: [
        e &&
          h.jsx('div', {
            className: fe.modal_main_container,
            children: h.jsx(S7, {
              editOrderOption: Rv,
              handleCloseModal: l,
              activeModal: n,
              setActiveModal: r
            })
          }),
        h.jsxs('div', {
          className: fe.content,
          children: [
            h.jsxs('div', {
              className: fe.order_details_desktop,
              children: [
                h.jsx('article', {
                  className: fe.settings_container,
                  children:
                    i == null
                      ? void 0
                      : i.map((f) =>
                          h.jsxs(
                            'div',
                            {
                              children: [
                                h.jsxs('div', {
                                  onClick: () => u(f.slug),
                                  className: fe.settings_title_section,
                                  children: [
                                    h.jsx('h4', {
                                      className: fe.settings_title,
                                      children: f.title
                                    }),
                                    h.jsx('button', {
                                      className: fe.settings_btn,
                                      onClick: () => u(f.slug),
                                      children: a[f.slug]
                                        ? h.jsx('svg', {
                                            className: fe.settings_plus_icon,
                                            width: '18px',
                                            height: '18px',
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            viewBox: '0 0 24 24',
                                            fill: 'rgba(0,0,0,1)',
                                            children: h.jsx('path', {
                                              d: 'M5 11V13H19V11H5Z'
                                            })
                                          })
                                        : h.jsx('svg', {
                                            className: fe.settings_minus_icon,
                                            width: '18px',
                                            height: '18px',
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            viewBox: '0 0 24 24',
                                            fill: 'rgba(0,0,0,1)',
                                            children: h.jsx('path', {
                                              d: 'M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z'
                                            })
                                          })
                                    })
                                  ]
                                }),
                                a[f.slug] &&
                                  h.jsx('div', {
                                    className: fe.settings_content,
                                    children:
                                      f.slug === 'shipping_address' &&
                                      h.jsx(Q1, {})
                                  })
                              ]
                            },
                            f.id
                          )
                        )
                }),
                h.jsx(O7, {})
              ]
            }),
            h.jsx('div', {
              className: fe.order_summary_desktop,
              children: h.jsx(K7, {})
            })
          ]
        }),
        h.jsxs('div', {
          className: fe.productSection,
          children: [
            h.jsx('div', {
              className: fe.productLabel,
              children: h.jsx('h3', { children: 'YOU MAY LIKE' })
            }),
            h.jsx('div', {
              className: `${fe.suggestedProductContainer} card-slider`,
              children: h.jsx(bp, {
                slidesPerView: 1,
                spaceBetween: 25,
                autoplay: { delay: 2500, disableOnInteraction: !1 },
                loop: !0,
                mousewheel: !0,
                modules: [O4],
                breakpoints: {
                  1342: { slidesPerView: 6 },
                  1024: { slidesPerView: 5 },
                  830: { slidesPerView: 4 },
                  736: { slidesPerView: 3 },
                  455: { slidesPerView: 2 }
                },
                className: 'mySwiper',
                children:
                  c == null
                    ? void 0
                    : c.map((f) =>
                        h.jsx(
                          Sp,
                          {
                            children: h.jsx('div', {
                              className: fe.productCard,
                              children: h.jsxs('a', {
                                href: '#',
                                className: fe.mainLink,
                                children: [
                                  h.jsx('div', {
                                    className: fe.productImage,
                                    children: h.jsx('img', {
                                      src: f.image,
                                      alt: `${f.name} - ${f.variant}`
                                    })
                                  }),
                                  h.jsxs('div', {
                                    className: fe.productContent,
                                    children: [
                                      h.jsx('h4', {
                                        className: fe.title,
                                        children: f.name
                                      }),
                                      h.jsx('p', {
                                        className: fe.description,
                                        children: f.variant
                                      }),
                                      h.jsxs('p', {
                                        className: fe.price,
                                        children: ['BDT ', f.price]
                                      }),
                                      h.jsx('div', {
                                        className: fe.addToCartBtn,
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
                          f.id
                        )
                      )
              })
            })
          ]
        })
      ]
    })
  }
function Z7() {
  const e = r1((r) => r.orderEdit.page),
    n = (() => {
      switch (e) {
        case 'Home':
          return h.jsx(Y7, {})
        case 'EditOrder':
          return h.jsx(TC, {})
        default:
          return null
      }
    })()
  return h.jsxs('section', {
    className: 'order-edit-container',
    children: [n, h.jsx(bb, {})]
  })
}
const $v = 'shopninja-optimarko.myshopify.com',
  Po = L1({
    reducerPath: 'orderEditConfigApi',
    baseQuery: k1({
      baseUrl: 'https://order-editing-staging.cleversity.com/api/storefront'
    }),
    endpoints: (e) => ({
      getStyleData: e.query({
        query: () => ({ url: `/order-edit-portal-data?shop_url=${$v}` }),
        transformResponse: (t) => t.data,
        transformErrorResponse: (t) => t.status
      }),
      getOrderEditSettings: e.query({
        query: () => ({ url: `/order-edit-setting?shop_url=${$v}` }),
        transformResponse: (t) => t.edit_setting,
        transformErrorResponse: (t) => t.status
      })
    })
  }),
  J7 = { styleData: {}, orderEditSettings: {} },
  eP = In({
    name: 'orderEditStyle',
    initialState: J7,
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
  tP = eP.reducer,
  nP = gS({
    reducer: {
      orderEdit: EC,
      orderEditConfig: tP,
      [Eo.reducerPath]: Eo.reducer,
      [Po.reducerPath]: Po.reducer
    },
    middleware: (e) => e().concat(Eo.middleware).concat(Po.middleware)
  }),
  rP = Z0(document.getElementById('opt-order-edit'))
rP.render(h.jsx(Mx, { store: nP, children: h.jsx(Z7, {}) }))
