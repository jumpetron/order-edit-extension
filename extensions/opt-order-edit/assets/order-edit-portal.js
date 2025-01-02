var Mw = Object.defineProperty
var jw = (e, t, n) =>
  t in e
    ? Mw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n)
var tu = (e, t, n) => jw(e, typeof t != 'symbol' ? t + '' : t, n)
function Ov(e, t) {
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
function cf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
var Lv = { exports: {} },
  hl = {},
  Rv = { exports: {} },
  ee = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var oa = Symbol.for('react.element'),
  Nw = Symbol.for('react.portal'),
  Ow = Symbol.for('react.fragment'),
  Lw = Symbol.for('react.strict_mode'),
  Rw = Symbol.for('react.profiler'),
  Iw = Symbol.for('react.provider'),
  Aw = Symbol.for('react.context'),
  Fw = Symbol.for('react.forward_ref'),
  $w = Symbol.for('react.suspense'),
  Dw = Symbol.for('react.memo'),
  zw = Symbol.for('react.lazy'),
  $p = Symbol.iterator
function Vw(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = ($p && e[$p]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var Iv = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  Av = Object.assign,
  Fv = {}
function Ri(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = Fv),
    (this.updater = n || Iv)
}
Ri.prototype.isReactComponent = {}
Ri.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
Ri.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function $v() {}
$v.prototype = Ri.prototype
function df(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = Fv),
    (this.updater = n || Iv)
}
var ff = (df.prototype = new $v())
ff.constructor = df
Av(ff, Ri.prototype)
ff.isPureReactComponent = !0
var Dp = Array.isArray,
  Dv = Object.prototype.hasOwnProperty,
  pf = { current: null },
  zv = { key: !0, ref: !0, __self: !0, __source: !0 }
function Vv(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      Dv.call(t, r) && !zv.hasOwnProperty(r) && (i[r] = t[r])
  var s = arguments.length - 2
  if (s === 1) i.children = n
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2]
    i.children = l
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r])
  return { $$typeof: oa, type: e, key: o, ref: a, props: i, _owner: pf.current }
}
function Bw(e, t) {
  return {
    $$typeof: oa,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner
  }
}
function hf(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === oa
}
function Hw(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var zp = /\/+/g
function nu(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Hw('' + e.key)
    : t.toString(36)
}
function os(e, t, n, r, i) {
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
          case oa:
          case Nw:
            a = !0
        }
    }
  if (a)
    return (
      (a = e),
      (i = i(a)),
      (e = r === '' ? '.' + nu(a, 0) : r),
      Dp(i)
        ? ((n = ''),
          e != null && (n = e.replace(zp, '$&/') + '/'),
          os(i, t, n, '', function (u) {
            return u
          }))
        : i != null &&
          (hf(i) &&
            (i = Bw(
              i,
              n +
                (!i.key || (a && a.key === i.key)
                  ? ''
                  : ('' + i.key).replace(zp, '$&/') + '/') +
                e
            )),
          t.push(i)),
      1
    )
  if (((a = 0), (r = r === '' ? '.' : r + ':'), Dp(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s]
      var l = r + nu(o, s)
      a += os(o, t, n, l, i)
    }
  else if (((l = Vw(e)), typeof l == 'function'))
    for (e = l.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (l = r + nu(o, s++)), (a += os(o, t, n, l, i))
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
function _a(e, t, n) {
  if (e == null) return e
  var r = [],
    i = 0
  return (
    os(e, r, '', '', function (o) {
      return t.call(n, o, i++)
    }),
    r
  )
}
function Ww(e) {
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
var qe = { current: null },
  as = { transition: null },
  Uw = {
    ReactCurrentDispatcher: qe,
    ReactCurrentBatchConfig: as,
    ReactCurrentOwner: pf
  }
function Bv() {
  throw Error('act(...) is not supported in production builds of React.')
}
ee.Children = {
  map: _a,
  forEach: function (e, t, n) {
    _a(
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
      _a(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      _a(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!hf(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      )
    return e
  }
}
ee.Component = Ri
ee.Fragment = Ow
ee.Profiler = Rw
ee.PureComponent = df
ee.StrictMode = Lw
ee.Suspense = $w
ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uw
ee.act = Bv
ee.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    )
  var r = Av({}, e.props),
    i = e.key,
    o = e.ref,
    a = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (a = pf.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps
    for (l in t)
      Dv.call(t, l) &&
        !zv.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l])
  }
  var l = arguments.length - 2
  if (l === 1) r.children = n
  else if (1 < l) {
    s = Array(l)
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2]
    r.children = s
  }
  return { $$typeof: oa, type: e.type, key: i, ref: o, props: r, _owner: a }
}
ee.createContext = function (e) {
  return (
    (e = {
      $$typeof: Aw,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }),
    (e.Provider = { $$typeof: Iw, _context: e }),
    (e.Consumer = e)
  )
}
ee.createElement = Vv
ee.createFactory = function (e) {
  var t = Vv.bind(null, e)
  return (t.type = e), t
}
ee.createRef = function () {
  return { current: null }
}
ee.forwardRef = function (e) {
  return { $$typeof: Fw, render: e }
}
ee.isValidElement = hf
ee.lazy = function (e) {
  return { $$typeof: zw, _payload: { _status: -1, _result: e }, _init: Ww }
}
ee.memo = function (e, t) {
  return { $$typeof: Dw, type: e, compare: t === void 0 ? null : t }
}
ee.startTransition = function (e) {
  var t = as.transition
  as.transition = {}
  try {
    e()
  } finally {
    as.transition = t
  }
}
ee.unstable_act = Bv
ee.useCallback = function (e, t) {
  return qe.current.useCallback(e, t)
}
ee.useContext = function (e) {
  return qe.current.useContext(e)
}
ee.useDebugValue = function () {}
ee.useDeferredValue = function (e) {
  return qe.current.useDeferredValue(e)
}
ee.useEffect = function (e, t) {
  return qe.current.useEffect(e, t)
}
ee.useId = function () {
  return qe.current.useId()
}
ee.useImperativeHandle = function (e, t, n) {
  return qe.current.useImperativeHandle(e, t, n)
}
ee.useInsertionEffect = function (e, t) {
  return qe.current.useInsertionEffect(e, t)
}
ee.useLayoutEffect = function (e, t) {
  return qe.current.useLayoutEffect(e, t)
}
ee.useMemo = function (e, t) {
  return qe.current.useMemo(e, t)
}
ee.useReducer = function (e, t, n) {
  return qe.current.useReducer(e, t, n)
}
ee.useRef = function (e) {
  return qe.current.useRef(e)
}
ee.useState = function (e) {
  return qe.current.useState(e)
}
ee.useSyncExternalStore = function (e, t, n) {
  return qe.current.useSyncExternalStore(e, t, n)
}
ee.useTransition = function () {
  return qe.current.useTransition()
}
ee.version = '18.3.1'
Rv.exports = ee
var P = Rv.exports
const ne = cf(P),
  To = Ov({ __proto__: null, default: ne }, [P])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qw = P,
  Gw = Symbol.for('react.element'),
  Qw = Symbol.for('react.fragment'),
  Kw = Object.prototype.hasOwnProperty,
  Xw = qw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Yw = { key: !0, ref: !0, __self: !0, __source: !0 }
function Hv(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (a = t.ref)
  for (r in t) Kw.call(t, r) && !Yw.hasOwnProperty(r) && (i[r] = t[r])
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r])
  return { $$typeof: Gw, type: e, key: o, ref: a, props: i, _owner: Xw.current }
}
hl.Fragment = Qw
hl.jsx = Hv
hl.jsxs = Hv
Lv.exports = hl
var w = Lv.exports,
  Wv = { exports: {} },
  pt = {},
  Uv = { exports: {} },
  qv = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(j, F) {
    var $ = j.length
    j.push(F)
    e: for (; 0 < $; ) {
      var V = ($ - 1) >>> 1,
        W = j[V]
      if (0 < i(W, F)) (j[V] = F), (j[$] = W), ($ = V)
      else break e
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0]
  }
  function r(j) {
    if (j.length === 0) return null
    var F = j[0],
      $ = j.pop()
    if ($ !== F) {
      j[0] = $
      e: for (var V = 0, W = j.length, Q = W >>> 1; V < Q; ) {
        var q = 2 * (V + 1) - 1,
          J = j[q],
          le = q + 1,
          ie = j[le]
        if (0 > i(J, $))
          le < W && 0 > i(ie, J)
            ? ((j[V] = ie), (j[le] = $), (V = le))
            : ((j[V] = J), (j[q] = $), (V = q))
        else if (le < W && 0 > i(ie, $)) (j[V] = ie), (j[le] = $), (V = le)
        else break e
      }
    }
    return F
  }
  function i(j, F) {
    var $ = j.sortIndex - F.sortIndex
    return $ !== 0 ? $ : j.id - F.id
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
    v = !1,
    g = !1,
    y = !1,
    b = typeof setTimeout == 'function' ? setTimeout : null,
    m = typeof clearTimeout == 'function' ? clearTimeout : null,
    p = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function h(j) {
    for (var F = n(u); F !== null; ) {
      if (F.callback === null) r(u)
      else if (F.startTime <= j) r(u), (F.sortIndex = F.expirationTime), t(l, F)
      else break
      F = n(u)
    }
  }
  function S(j) {
    if (((y = !1), h(j), !g))
      if (n(l) !== null) (g = !0), I(x)
      else {
        var F = n(u)
        F !== null && A(S, F.startTime - j)
      }
  }
  function x(j, F) {
    ;(g = !1), y && ((y = !1), m(E), (E = -1)), (v = !0)
    var $ = d
    try {
      for (
        h(F), f = n(l);
        f !== null && (!(f.expirationTime > F) || (j && !M()));

      ) {
        var V = f.callback
        if (typeof V == 'function') {
          ;(f.callback = null), (d = f.priorityLevel)
          var W = V(f.expirationTime <= F)
          ;(F = e.unstable_now()),
            typeof W == 'function' ? (f.callback = W) : f === n(l) && r(l),
            h(F)
        } else r(l)
        f = n(l)
      }
      if (f !== null) var Q = !0
      else {
        var q = n(u)
        q !== null && A(S, q.startTime - F), (Q = !1)
      }
      return Q
    } finally {
      ;(f = null), (d = $), (v = !1)
    }
  }
  var _ = !1,
    C = null,
    E = -1,
    T = 5,
    k = -1
  function M() {
    return !(e.unstable_now() - k < T)
  }
  function L() {
    if (C !== null) {
      var j = e.unstable_now()
      k = j
      var F = !0
      try {
        F = C(!0, j)
      } finally {
        F ? O() : ((_ = !1), (C = null))
      }
    } else _ = !1
  }
  var O
  if (typeof p == 'function')
    O = function () {
      p(L)
    }
  else if (typeof MessageChannel < 'u') {
    var R = new MessageChannel(),
      z = R.port2
    ;(R.port1.onmessage = L),
      (O = function () {
        z.postMessage(null)
      })
  } else
    O = function () {
      b(L, 0)
    }
  function I(j) {
    ;(C = j), _ || ((_ = !0), O())
  }
  function A(j, F) {
    E = b(function () {
      j(e.unstable_now())
    }, F)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null
    }),
    (e.unstable_continueExecution = function () {
      g || v || ((g = !0), I(x))
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (T = 0 < j ? Math.floor(1e3 / j) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l)
    }),
    (e.unstable_next = function (j) {
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
        return j()
      } finally {
        d = $
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, F) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          j = 3
      }
      var $ = d
      d = j
      try {
        return F()
      } finally {
        d = $
      }
    }),
    (e.unstable_scheduleCallback = function (j, F, $) {
      var V = e.unstable_now()
      switch (
        (typeof $ == 'object' && $ !== null
          ? (($ = $.delay), ($ = typeof $ == 'number' && 0 < $ ? V + $ : V))
          : ($ = V),
        j)
      ) {
        case 1:
          var W = -1
          break
        case 2:
          W = 250
          break
        case 5:
          W = 1073741823
          break
        case 4:
          W = 1e4
          break
        default:
          W = 5e3
      }
      return (
        (W = $ + W),
        (j = {
          id: c++,
          callback: F,
          priorityLevel: j,
          startTime: $,
          expirationTime: W,
          sortIndex: -1
        }),
        $ > V
          ? ((j.sortIndex = $),
            t(u, j),
            n(l) === null &&
              j === n(u) &&
              (y ? (m(E), (E = -1)) : (y = !0), A(S, $ - V)))
          : ((j.sortIndex = W), t(l, j), g || v || ((g = !0), I(x))),
        j
      )
    }),
    (e.unstable_shouldYield = M),
    (e.unstable_wrapCallback = function (j) {
      var F = d
      return function () {
        var $ = d
        d = F
        try {
          return j.apply(this, arguments)
        } finally {
          d = $
        }
      }
    })
})(qv)
Uv.exports = qv
var Zw = Uv.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jw = P,
  dt = Zw
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
var Gv = new Set(),
  ko = {}
function jr(e, t) {
  bi(e, t), bi(e + 'Capture', t)
}
function bi(e, t) {
  for (ko[e] = t, e = 0; e < t.length; e++) Gv.add(t[e])
}
var gn = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  uc = Object.prototype.hasOwnProperty,
  eS =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Vp = {},
  Bp = {}
function tS(e) {
  return uc.call(Bp, e)
    ? !0
    : uc.call(Vp, e)
    ? !1
    : eS.test(e)
    ? (Bp[e] = !0)
    : ((Vp[e] = !0), !1)
}
function nS(e, t, n, r) {
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
function rS(e, t, n, r) {
  if (t === null || typeof t > 'u' || nS(e, t, n, r)) return !0
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
function Ge(e, t, n, r, i, o, a) {
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
    Ie[e] = new Ge(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv']
].forEach(function (e) {
  var t = e[0]
  Ie[t] = new Ge(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Ie[e] = new Ge(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha'
].forEach(function (e) {
  Ie[e] = new Ge(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Ie[e] = new Ge(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Ie[e] = new Ge(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  Ie[e] = new Ge(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Ie[e] = new Ge(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  Ie[e] = new Ge(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var mf = /[\-:]([a-z])/g
function vf(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(mf, vf)
    Ie[t] = new Ge(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(mf, vf)
    Ie[t] = new Ge(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(mf, vf)
  Ie[t] = new Ge(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  Ie[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
Ie.xlinkHref = new Ge(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Ie[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function gf(e, t, n, r) {
  var i = Ie.hasOwnProperty(t) ? Ie[t] : null
  ;(i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (rS(t, n, i, r) && (n = null),
    r || i === null
      ? tS(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
var En = Jw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ea = Symbol.for('react.element'),
  Xr = Symbol.for('react.portal'),
  Yr = Symbol.for('react.fragment'),
  yf = Symbol.for('react.strict_mode'),
  cc = Symbol.for('react.profiler'),
  Qv = Symbol.for('react.provider'),
  Kv = Symbol.for('react.context'),
  wf = Symbol.for('react.forward_ref'),
  dc = Symbol.for('react.suspense'),
  fc = Symbol.for('react.suspense_list'),
  Sf = Symbol.for('react.memo'),
  jn = Symbol.for('react.lazy'),
  Xv = Symbol.for('react.offscreen'),
  Hp = Symbol.iterator
function Ui(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Hp && e[Hp]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var me = Object.assign,
  ru
function ro(e) {
  if (ru === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      ru = (t && t[1]) || ''
    }
  return (
    `
` +
    ru +
    e
  )
}
var iu = !1
function ou(e, t) {
  if (!e || iu) return ''
  iu = !0
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
    ;(iu = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? ro(e) : ''
}
function iS(e) {
  switch (e.tag) {
    case 5:
      return ro(e.type)
    case 16:
      return ro('Lazy')
    case 13:
      return ro('Suspense')
    case 19:
      return ro('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = ou(e.type, !1)), e
    case 11:
      return (e = ou(e.type.render, !1)), e
    case 1:
      return (e = ou(e.type, !0)), e
    default:
      return ''
  }
}
function pc(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case Yr:
      return 'Fragment'
    case Xr:
      return 'Portal'
    case cc:
      return 'Profiler'
    case yf:
      return 'StrictMode'
    case dc:
      return 'Suspense'
    case fc:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Kv:
        return (e.displayName || 'Context') + '.Consumer'
      case Qv:
        return (e._context.displayName || 'Context') + '.Provider'
      case wf:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case Sf:
        return (
          (t = e.displayName || null), t !== null ? t : pc(e.type) || 'Memo'
        )
      case jn:
        ;(t = e._payload), (e = e._init)
        try {
          return pc(e(t))
        } catch {}
    }
  return null
}
function oS(e) {
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
      return pc(t)
    case 8:
      return t === yf ? 'StrictMode' : 'Mode'
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
function Xn(e) {
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
function Yv(e) {
  var t = e.type
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  )
}
function aS(e) {
  var t = Yv(e) ? 'checked' : 'value',
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
function Ta(e) {
  e._valueTracker || (e._valueTracker = aS(e))
}
function Zv(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ''
  return (
    e && (r = Yv(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function Ps(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function hc(e, t) {
  var n = t.checked
  return me({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked
  })
}
function Wp(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;(n = Xn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null
    })
}
function Jv(e, t) {
  ;(t = t.checked), t != null && gf(e, 'checked', t, !1)
}
function mc(e, t) {
  Jv(e, t)
  var n = Xn(t.value),
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
    ? vc(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && vc(e, t.type, Xn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function Up(e, t, n) {
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
function vc(e, t, n) {
  ;(t !== 'number' || Ps(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var io = Array.isArray
function di(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + Xn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        ;(e[i].selected = !0), r && (e[i].defaultSelected = !0)
        return
      }
      t !== null || e[i].disabled || (t = e[i])
    }
    t !== null && (t.selected = !0)
  }
}
function gc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(H(91))
  return me({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue
  })
}
function qp(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(H(92))
      if (io(n)) {
        if (1 < n.length) throw Error(H(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: Xn(n) }
}
function eg(e, t) {
  var n = Xn(t.value),
    r = Xn(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r)
}
function Gp(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function tg(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function yc(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? tg(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e
}
var ka,
  ng = (function (e) {
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
        ka = ka || document.createElement('div'),
          ka.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = ka.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function Po(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var uo = {
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
  sS = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(uo).forEach(function (e) {
  sS.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (uo[t] = uo[e])
  })
})
function rg(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (uo.hasOwnProperty(e) && uo[e])
    ? ('' + t).trim()
    : t + 'px'
}
function ig(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = rg(n, t[n], r)
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i)
    }
}
var lS = me(
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
function wc(e, t) {
  if (t) {
    if (lS[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Sc(e, t) {
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
var bc = null
function bf(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var xc = null,
  fi = null,
  pi = null
function Qp(e) {
  if ((e = la(e))) {
    if (typeof xc != 'function') throw Error(H(280))
    var t = e.stateNode
    t && ((t = wl(t)), xc(e.stateNode, e.type, t))
  }
}
function og(e) {
  fi ? (pi ? pi.push(e) : (pi = [e])) : (fi = e)
}
function ag() {
  if (fi) {
    var e = fi,
      t = pi
    if (((pi = fi = null), Qp(e), t)) for (e = 0; e < t.length; e++) Qp(t[e])
  }
}
function sg(e, t) {
  return e(t)
}
function lg() {}
var au = !1
function ug(e, t, n) {
  if (au) return e(t, n)
  au = !0
  try {
    return sg(e, t, n)
  } finally {
    ;(au = !1), (fi !== null || pi !== null) && (lg(), ag())
  }
}
function Mo(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = wl(n)
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
var Cc = !1
if (gn)
  try {
    var qi = {}
    Object.defineProperty(qi, 'passive', {
      get: function () {
        Cc = !0
      }
    }),
      window.addEventListener('test', qi, qi),
      window.removeEventListener('test', qi, qi)
  } catch {
    Cc = !1
  }
function uS(e, t, n, r, i, o, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, u)
  } catch (c) {
    this.onError(c)
  }
}
var co = !1,
  Ms = null,
  js = !1,
  _c = null,
  cS = {
    onError: function (e) {
      ;(co = !0), (Ms = e)
    }
  }
function dS(e, t, n, r, i, o, a, s, l) {
  ;(co = !1), (Ms = null), uS.apply(cS, arguments)
}
function fS(e, t, n, r, i, o, a, s, l) {
  if ((dS.apply(this, arguments), co)) {
    if (co) {
      var u = Ms
      ;(co = !1), (Ms = null)
    } else throw Error(H(198))
    js || ((js = !0), (_c = u))
  }
}
function Nr(e) {
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
function cg(e) {
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
function Kp(e) {
  if (Nr(e) !== e) throw Error(H(188))
}
function pS(e) {
  var t = e.alternate
  if (!t) {
    if (((t = Nr(e)), t === null)) throw Error(H(188))
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
        if (o === n) return Kp(i), e
        if (o === r) return Kp(i), t
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
function dg(e) {
  return (e = pS(e)), e !== null ? fg(e) : null
}
function fg(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = fg(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var pg = dt.unstable_scheduleCallback,
  Xp = dt.unstable_cancelCallback,
  hS = dt.unstable_shouldYield,
  mS = dt.unstable_requestPaint,
  ye = dt.unstable_now,
  vS = dt.unstable_getCurrentPriorityLevel,
  xf = dt.unstable_ImmediatePriority,
  hg = dt.unstable_UserBlockingPriority,
  Ns = dt.unstable_NormalPriority,
  gS = dt.unstable_LowPriority,
  mg = dt.unstable_IdlePriority,
  ml = null,
  Zt = null
function yS(e) {
  if (Zt && typeof Zt.onCommitFiberRoot == 'function')
    try {
      Zt.onCommitFiberRoot(ml, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var $t = Math.clz32 ? Math.clz32 : bS,
  wS = Math.log,
  SS = Math.LN2
function bS(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((wS(e) / SS) | 0)) | 0
}
var Pa = 64,
  Ma = 4194304
function oo(e) {
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
function Os(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    a = n & 268435455
  if (a !== 0) {
    var s = a & ~i
    s !== 0 ? (r = oo(s)) : ((o &= a), o !== 0 && (r = oo(o)))
  } else (a = n & ~i), a !== 0 ? (r = oo(a)) : o !== 0 && (r = oo(o))
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
      (n = 31 - $t(t)), (i = 1 << n), (r |= e[n]), (t &= ~i)
  return r
}
function xS(e, t) {
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
function CS(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var a = 31 - $t(o),
      s = 1 << a,
      l = i[a]
    l === -1
      ? (!(s & n) || s & r) && (i[a] = xS(s, t))
      : l <= t && (e.expiredLanes |= s),
      (o &= ~s)
  }
}
function Ec(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  )
}
function vg() {
  var e = Pa
  return (Pa <<= 1), !(Pa & 4194240) && (Pa = 64), e
}
function su(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function aa(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - $t(t)),
    (e[t] = n)
}
function _S(e, t) {
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
    var i = 31 - $t(n),
      o = 1 << i
    ;(t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o)
  }
}
function Cf(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var r = 31 - $t(n),
      i = 1 << r
    ;(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i)
  }
}
var oe = 0
function gg(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var yg,
  _f,
  wg,
  Sg,
  bg,
  Tc = !1,
  ja = [],
  Bn = null,
  Hn = null,
  Wn = null,
  jo = new Map(),
  No = new Map(),
  Ln = [],
  ES =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function Yp(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Bn = null
      break
    case 'dragenter':
    case 'dragleave':
      Hn = null
      break
    case 'mouseover':
    case 'mouseout':
      Wn = null
      break
    case 'pointerover':
    case 'pointerout':
      jo.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      No.delete(t.pointerId)
  }
}
function Gi(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
      }),
      t !== null && ((t = la(t)), t !== null && _f(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e)
}
function TS(e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return (Bn = Gi(Bn, e, t, n, r, i)), !0
    case 'dragenter':
      return (Hn = Gi(Hn, e, t, n, r, i)), !0
    case 'mouseover':
      return (Wn = Gi(Wn, e, t, n, r, i)), !0
    case 'pointerover':
      var o = i.pointerId
      return jo.set(o, Gi(jo.get(o) || null, e, t, n, r, i)), !0
    case 'gotpointercapture':
      return (
        (o = i.pointerId), No.set(o, Gi(No.get(o) || null, e, t, n, r, i)), !0
      )
  }
  return !1
}
function xg(e) {
  var t = lr(e.target)
  if (t !== null) {
    var n = Nr(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = cg(n)), t !== null)) {
          ;(e.blockedOn = t),
            bg(e.priority, function () {
              wg(n)
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
function ss(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = kc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(bc = r), n.target.dispatchEvent(r), (bc = null)
    } else return (t = la(n)), t !== null && _f(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function Zp(e, t, n) {
  ss(e) && n.delete(t)
}
function kS() {
  ;(Tc = !1),
    Bn !== null && ss(Bn) && (Bn = null),
    Hn !== null && ss(Hn) && (Hn = null),
    Wn !== null && ss(Wn) && (Wn = null),
    jo.forEach(Zp),
    No.forEach(Zp)
}
function Qi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Tc ||
      ((Tc = !0), dt.unstable_scheduleCallback(dt.unstable_NormalPriority, kS)))
}
function Oo(e) {
  function t(i) {
    return Qi(i, e)
  }
  if (0 < ja.length) {
    Qi(ja[0], e)
    for (var n = 1; n < ja.length; n++) {
      var r = ja[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    Bn !== null && Qi(Bn, e),
      Hn !== null && Qi(Hn, e),
      Wn !== null && Qi(Wn, e),
      jo.forEach(t),
      No.forEach(t),
      n = 0;
    n < Ln.length;
    n++
  )
    (r = Ln[n]), r.blockedOn === e && (r.blockedOn = null)
  for (; 0 < Ln.length && ((n = Ln[0]), n.blockedOn === null); )
    xg(n), n.blockedOn === null && Ln.shift()
}
var hi = En.ReactCurrentBatchConfig,
  Ls = !0
function PS(e, t, n, r) {
  var i = oe,
    o = hi.transition
  hi.transition = null
  try {
    ;(oe = 1), Ef(e, t, n, r)
  } finally {
    ;(oe = i), (hi.transition = o)
  }
}
function MS(e, t, n, r) {
  var i = oe,
    o = hi.transition
  hi.transition = null
  try {
    ;(oe = 4), Ef(e, t, n, r)
  } finally {
    ;(oe = i), (hi.transition = o)
  }
}
function Ef(e, t, n, r) {
  if (Ls) {
    var i = kc(e, t, n, r)
    if (i === null) gu(e, t, r, Rs, n), Yp(e, r)
    else if (TS(i, e, t, n, r)) r.stopPropagation()
    else if ((Yp(e, r), t & 4 && -1 < ES.indexOf(e))) {
      for (; i !== null; ) {
        var o = la(i)
        if (
          (o !== null && yg(o),
          (o = kc(e, t, n, r)),
          o === null && gu(e, t, r, Rs, n),
          o === i)
        )
          break
        i = o
      }
      i !== null && r.stopPropagation()
    } else gu(e, t, r, null, n)
  }
}
var Rs = null
function kc(e, t, n, r) {
  if (((Rs = null), (e = bf(r)), (e = lr(e)), e !== null))
    if (((t = Nr(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = cg(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (Rs = e), null
}
function Cg(e) {
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
      switch (vS()) {
        case xf:
          return 1
        case hg:
          return 4
        case Ns:
        case gS:
          return 16
        case mg:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var An = null,
  Tf = null,
  ls = null
function _g() {
  if (ls) return ls
  var e,
    t = Tf,
    n = t.length,
    r,
    i = 'value' in An ? An.value : An.textContent,
    o = i.length
  for (e = 0; e < n && t[e] === i[e]; e++);
  var a = n - e
  for (r = 1; r <= a && t[n - r] === i[o - r]; r++);
  return (ls = i.slice(e, 1 < r ? 1 - r : void 0))
}
function us(e) {
  var t = e.keyCode
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function Na() {
  return !0
}
function Jp() {
  return !1
}
function ht(e) {
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
        ? Na
        : Jp),
      (this.isPropagationStopped = Jp),
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
          (this.isDefaultPrevented = Na))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Na))
      },
      persist: function () {},
      isPersistent: Na
    }),
    t
  )
}
var Ii = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  kf = ht(Ii),
  sa = me({}, Ii, { view: 0, detail: 0 }),
  jS = ht(sa),
  lu,
  uu,
  Ki,
  vl = me({}, sa, {
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
    getModifierState: Pf,
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
        : (e !== Ki &&
            (Ki && e.type === 'mousemove'
              ? ((lu = e.screenX - Ki.screenX), (uu = e.screenY - Ki.screenY))
              : (uu = lu = 0),
            (Ki = e)),
          lu)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : uu
    }
  }),
  eh = ht(vl),
  NS = me({}, vl, { dataTransfer: 0 }),
  OS = ht(NS),
  LS = me({}, sa, { relatedTarget: 0 }),
  cu = ht(LS),
  RS = me({}, Ii, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  IS = ht(RS),
  AS = me({}, Ii, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    }
  }),
  FS = ht(AS),
  $S = me({}, Ii, { data: 0 }),
  th = ht($S),
  DS = {
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
  zS = {
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
  VS = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function BS(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = VS[e]) ? !!t[e] : !1
}
function Pf() {
  return BS
}
var HS = me({}, sa, {
    key: function (e) {
      if (e.key) {
        var t = DS[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = us(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? zS[e.keyCode] || 'Unidentified'
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
    getModifierState: Pf,
    charCode: function (e) {
      return e.type === 'keypress' ? us(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? us(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0
    }
  }),
  WS = ht(HS),
  US = me({}, vl, {
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
  nh = ht(US),
  qS = me({}, sa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Pf
  }),
  GS = ht(qS),
  QS = me({}, Ii, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  KS = ht(QS),
  XS = me({}, vl, {
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
  YS = ht(XS),
  ZS = [9, 13, 27, 32],
  Mf = gn && 'CompositionEvent' in window,
  fo = null
gn && 'documentMode' in document && (fo = document.documentMode)
var JS = gn && 'TextEvent' in window && !fo,
  Eg = gn && (!Mf || (fo && 8 < fo && 11 >= fo)),
  rh = ' ',
  ih = !1
function Tg(e, t) {
  switch (e) {
    case 'keyup':
      return ZS.indexOf(t.keyCode) !== -1
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
function kg(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var Zr = !1
function e2(e, t) {
  switch (e) {
    case 'compositionend':
      return kg(t)
    case 'keypress':
      return t.which !== 32 ? null : ((ih = !0), rh)
    case 'textInput':
      return (e = t.data), e === rh && ih ? null : e
    default:
      return null
  }
}
function t2(e, t) {
  if (Zr)
    return e === 'compositionend' || (!Mf && Tg(e, t))
      ? ((e = _g()), (ls = Tf = An = null), (Zr = !1), e)
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
      return Eg && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var n2 = {
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
function oh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!n2[e.type] : t === 'textarea'
}
function Pg(e, t, n, r) {
  og(r),
    (t = Is(t, 'onChange')),
    0 < t.length &&
      ((n = new kf('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }))
}
var po = null,
  Lo = null
function r2(e) {
  Dg(e, 0)
}
function gl(e) {
  var t = ti(e)
  if (Zv(t)) return e
}
function i2(e, t) {
  if (e === 'change') return t
}
var Mg = !1
if (gn) {
  var du
  if (gn) {
    var fu = 'oninput' in document
    if (!fu) {
      var ah = document.createElement('div')
      ah.setAttribute('oninput', 'return;'),
        (fu = typeof ah.oninput == 'function')
    }
    du = fu
  } else du = !1
  Mg = du && (!document.documentMode || 9 < document.documentMode)
}
function sh() {
  po && (po.detachEvent('onpropertychange', jg), (Lo = po = null))
}
function jg(e) {
  if (e.propertyName === 'value' && gl(Lo)) {
    var t = []
    Pg(t, Lo, e, bf(e)), ug(r2, t)
  }
}
function o2(e, t, n) {
  e === 'focusin'
    ? (sh(), (po = t), (Lo = n), po.attachEvent('onpropertychange', jg))
    : e === 'focusout' && sh()
}
function a2(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return gl(Lo)
}
function s2(e, t) {
  if (e === 'click') return gl(t)
}
function l2(e, t) {
  if (e === 'input' || e === 'change') return gl(t)
}
function u2(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var Ht = typeof Object.is == 'function' ? Object.is : u2
function Ro(e, t) {
  if (Ht(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var i = n[r]
    if (!uc.call(t, i) || !Ht(e[i], t[i])) return !1
  }
  return !0
}
function lh(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function uh(e, t) {
  var n = lh(e)
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
    n = lh(n)
  }
}
function Ng(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ng(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1
}
function Og() {
  for (var e = window, t = Ps(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = Ps(e.document)
  }
  return t
}
function jf(e) {
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
function c2(e) {
  var t = Og(),
    n = e.focusedElem,
    r = e.selectionRange
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ng(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && jf(n)) {
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
          (i = uh(n, o))
        var a = uh(n, r)
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
var d2 = gn && 'documentMode' in document && 11 >= document.documentMode,
  Jr = null,
  Pc = null,
  ho = null,
  Mc = !1
function ch(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  Mc ||
    Jr == null ||
    Jr !== Ps(r) ||
    ((r = Jr),
    'selectionStart' in r && jf(r)
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
    (ho && Ro(ho, r)) ||
      ((ho = r),
      (r = Is(Pc, 'onSelect')),
      0 < r.length &&
        ((t = new kf('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Jr))))
}
function Oa(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var ei = {
    animationend: Oa('Animation', 'AnimationEnd'),
    animationiteration: Oa('Animation', 'AnimationIteration'),
    animationstart: Oa('Animation', 'AnimationStart'),
    transitionend: Oa('Transition', 'TransitionEnd')
  },
  pu = {},
  Lg = {}
gn &&
  ((Lg = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete ei.animationend.animation,
    delete ei.animationiteration.animation,
    delete ei.animationstart.animation),
  'TransitionEvent' in window || delete ei.transitionend.transition)
function yl(e) {
  if (pu[e]) return pu[e]
  if (!ei[e]) return e
  var t = ei[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in Lg) return (pu[e] = t[n])
  return e
}
var Rg = yl('animationend'),
  Ig = yl('animationiteration'),
  Ag = yl('animationstart'),
  Fg = yl('transitionend'),
  $g = new Map(),
  dh =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function er(e, t) {
  $g.set(e, t), jr(t, [e])
}
for (var hu = 0; hu < dh.length; hu++) {
  var mu = dh[hu],
    f2 = mu.toLowerCase(),
    p2 = mu[0].toUpperCase() + mu.slice(1)
  er(f2, 'on' + p2)
}
er(Rg, 'onAnimationEnd')
er(Ig, 'onAnimationIteration')
er(Ag, 'onAnimationStart')
er('dblclick', 'onDoubleClick')
er('focusin', 'onFocus')
er('focusout', 'onBlur')
er(Fg, 'onTransitionEnd')
bi('onMouseEnter', ['mouseout', 'mouseover'])
bi('onMouseLeave', ['mouseout', 'mouseover'])
bi('onPointerEnter', ['pointerout', 'pointerover'])
bi('onPointerLeave', ['pointerout', 'pointerover'])
jr(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
)
jr(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
)
jr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
jr(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
)
jr(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
)
jr(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
)
var ao =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  h2 = new Set('cancel close invalid load scroll toggle'.split(' ').concat(ao))
function fh(e, t, n) {
  var r = e.type || 'unknown-event'
  ;(e.currentTarget = n), fS(r, t, void 0, e), (e.currentTarget = null)
}
function Dg(e, t) {
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
          fh(i, s, u), (o = l)
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
          fh(i, s, u), (o = l)
        }
    }
  }
  if (js) throw ((e = _c), (js = !1), (_c = null), e)
}
function ce(e, t) {
  var n = t[Rc]
  n === void 0 && (n = t[Rc] = new Set())
  var r = e + '__bubble'
  n.has(r) || (zg(t, e, 2, !1), n.add(r))
}
function vu(e, t, n) {
  var r = 0
  t && (r |= 4), zg(n, e, r, t)
}
var La = '_reactListening' + Math.random().toString(36).slice(2)
function Io(e) {
  if (!e[La]) {
    ;(e[La] = !0),
      Gv.forEach(function (n) {
        n !== 'selectionchange' && (h2.has(n) || vu(n, !1, e), vu(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[La] || ((t[La] = !0), vu('selectionchange', !1, t))
  }
}
function zg(e, t, n, r) {
  switch (Cg(t)) {
    case 1:
      var i = PS
      break
    case 4:
      i = MS
      break
    default:
      i = Ef
  }
  ;(n = i.bind(null, t, n, e)),
    (i = void 0),
    !Cc ||
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
function gu(e, t, n, r, i) {
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
          if (((a = lr(s)), a === null)) return
          if (((l = a.tag), l === 5 || l === 6)) {
            r = o = a
            continue e
          }
          s = s.parentNode
        }
      }
      r = r.return
    }
  ug(function () {
    var u = o,
      c = bf(n),
      f = []
    e: {
      var d = $g.get(e)
      if (d !== void 0) {
        var v = kf,
          g = e
        switch (e) {
          case 'keypress':
            if (us(n) === 0) break e
          case 'keydown':
          case 'keyup':
            v = WS
            break
          case 'focusin':
            ;(g = 'focus'), (v = cu)
            break
          case 'focusout':
            ;(g = 'blur'), (v = cu)
            break
          case 'beforeblur':
          case 'afterblur':
            v = cu
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
            v = eh
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            v = OS
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            v = GS
            break
          case Rg:
          case Ig:
          case Ag:
            v = IS
            break
          case Fg:
            v = KS
            break
          case 'scroll':
            v = jS
            break
          case 'wheel':
            v = YS
            break
          case 'copy':
          case 'cut':
          case 'paste':
            v = FS
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            v = nh
        }
        var y = (t & 4) !== 0,
          b = !y && e === 'scroll',
          m = y ? (d !== null ? d + 'Capture' : null) : d
        y = []
        for (var p = u, h; p !== null; ) {
          h = p
          var S = h.stateNode
          if (
            (h.tag === 5 &&
              S !== null &&
              ((h = S),
              m !== null && ((S = Mo(p, m)), S != null && y.push(Ao(p, S, h)))),
            b)
          )
            break
          p = p.return
        }
        0 < y.length &&
          ((d = new v(d, g, null, n, c)), f.push({ event: d, listeners: y }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === 'mouseover' || e === 'pointerover'),
          (v = e === 'mouseout' || e === 'pointerout'),
          d &&
            n !== bc &&
            (g = n.relatedTarget || n.fromElement) &&
            (lr(g) || g[yn]))
        )
          break e
        if (
          (v || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          v
            ? ((g = n.relatedTarget || n.toElement),
              (v = u),
              (g = g ? lr(g) : null),
              g !== null &&
                ((b = Nr(g)), g !== b || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((v = null), (g = u)),
          v !== g)
        ) {
          if (
            ((y = eh),
            (S = 'onMouseLeave'),
            (m = 'onMouseEnter'),
            (p = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((y = nh),
              (S = 'onPointerLeave'),
              (m = 'onPointerEnter'),
              (p = 'pointer')),
            (b = v == null ? d : ti(v)),
            (h = g == null ? d : ti(g)),
            (d = new y(S, p + 'leave', v, n, c)),
            (d.target = b),
            (d.relatedTarget = h),
            (S = null),
            lr(c) === u &&
              ((y = new y(m, p + 'enter', g, n, c)),
              (y.target = h),
              (y.relatedTarget = b),
              (S = y)),
            (b = S),
            v && g)
          )
            t: {
              for (y = v, m = g, p = 0, h = y; h; h = Br(h)) p++
              for (h = 0, S = m; S; S = Br(S)) h++
              for (; 0 < p - h; ) (y = Br(y)), p--
              for (; 0 < h - p; ) (m = Br(m)), h--
              for (; p--; ) {
                if (y === m || (m !== null && y === m.alternate)) break t
                ;(y = Br(y)), (m = Br(m))
              }
              y = null
            }
          else y = null
          v !== null && ph(f, d, v, y, !1),
            g !== null && b !== null && ph(f, b, g, y, !0)
        }
      }
      e: {
        if (
          ((d = u ? ti(u) : window),
          (v = d.nodeName && d.nodeName.toLowerCase()),
          v === 'select' || (v === 'input' && d.type === 'file'))
        )
          var x = i2
        else if (oh(d))
          if (Mg) x = l2
          else {
            x = a2
            var _ = o2
          }
        else
          (v = d.nodeName) &&
            v.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (x = s2)
        if (x && (x = x(e, u))) {
          Pg(f, x, n, c)
          break e
        }
        _ && _(e, d, u),
          e === 'focusout' &&
            (_ = d._wrapperState) &&
            _.controlled &&
            d.type === 'number' &&
            vc(d, 'number', d.value)
      }
      switch (((_ = u ? ti(u) : window), e)) {
        case 'focusin':
          ;(oh(_) || _.contentEditable === 'true') &&
            ((Jr = _), (Pc = u), (ho = null))
          break
        case 'focusout':
          ho = Pc = Jr = null
          break
        case 'mousedown':
          Mc = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(Mc = !1), ch(f, n, c)
          break
        case 'selectionchange':
          if (d2) break
        case 'keydown':
        case 'keyup':
          ch(f, n, c)
      }
      var C
      if (Mf)
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
        Zr
          ? Tg(e, n) && (E = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (E = 'onCompositionStart')
      E &&
        (Eg &&
          n.locale !== 'ko' &&
          (Zr || E !== 'onCompositionStart'
            ? E === 'onCompositionEnd' && Zr && (C = _g())
            : ((An = c),
              (Tf = 'value' in An ? An.value : An.textContent),
              (Zr = !0))),
        (_ = Is(u, E)),
        0 < _.length &&
          ((E = new th(E, e, null, n, c)),
          f.push({ event: E, listeners: _ }),
          C ? (E.data = C) : ((C = kg(n)), C !== null && (E.data = C)))),
        (C = JS ? e2(e, n) : t2(e, n)) &&
          ((u = Is(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new th('onBeforeInput', 'beforeinput', null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = C)))
    }
    Dg(f, t)
  })
}
function Ao(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function Is(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      o = i.stateNode
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Mo(e, n)),
      o != null && r.unshift(Ao(e, o, i)),
      (o = Mo(e, t)),
      o != null && r.push(Ao(e, o, i))),
      (e = e.return)
  }
  return r
}
function Br(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function ph(e, t, n, r, i) {
  for (var o = t._reactName, a = []; n !== null && n !== r; ) {
    var s = n,
      l = s.alternate,
      u = s.stateNode
    if (l !== null && l === r) break
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      i
        ? ((l = Mo(n, o)), l != null && a.unshift(Ao(n, l, s)))
        : i || ((l = Mo(n, o)), l != null && a.push(Ao(n, l, s)))),
      (n = n.return)
  }
  a.length !== 0 && e.push({ event: t, listeners: a })
}
var m2 = /\r\n?/g,
  v2 = /\u0000|\uFFFD/g
function hh(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      m2,
      `
`
    )
    .replace(v2, '')
}
function Ra(e, t, n) {
  if (((t = hh(t)), hh(e) !== t && n)) throw Error(H(425))
}
function As() {}
var jc = null,
  Nc = null
function Oc(e, t) {
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
var Lc = typeof setTimeout == 'function' ? setTimeout : void 0,
  g2 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  mh = typeof Promise == 'function' ? Promise : void 0,
  y2 =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof mh < 'u'
      ? function (e) {
          return mh.resolve(null).then(e).catch(w2)
        }
      : Lc
function w2(e) {
  setTimeout(function () {
    throw e
  })
}
function yu(e, t) {
  var n = t,
    r = 0
  do {
    var i = n.nextSibling
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(i), Oo(t)
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = i
  } while (n)
  Oo(t)
}
function Un(e) {
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
function vh(e) {
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
var Ai = Math.random().toString(36).slice(2),
  Xt = '__reactFiber$' + Ai,
  Fo = '__reactProps$' + Ai,
  yn = '__reactContainer$' + Ai,
  Rc = '__reactEvents$' + Ai,
  S2 = '__reactListeners$' + Ai,
  b2 = '__reactHandles$' + Ai
function lr(e) {
  var t = e[Xt]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[yn] || n[Xt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = vh(e); e !== null; ) {
          if ((n = e[Xt])) return n
          e = vh(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function la(e) {
  return (
    (e = e[Xt] || e[yn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function ti(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(H(33))
}
function wl(e) {
  return e[Fo] || null
}
var Ic = [],
  ni = -1
function tr(e) {
  return { current: e }
}
function de(e) {
  0 > ni || ((e.current = Ic[ni]), (Ic[ni] = null), ni--)
}
function ue(e, t) {
  ni++, (Ic[ni] = e.current), (e.current = t)
}
var Yn = {},
  ze = tr(Yn),
  Xe = tr(!1),
  yr = Yn
function xi(e, t) {
  var n = e.type.contextTypes
  if (!n) return Yn
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
function Ye(e) {
  return (e = e.childContextTypes), e != null
}
function Fs() {
  de(Xe), de(ze)
}
function gh(e, t, n) {
  if (ze.current !== Yn) throw Error(H(168))
  ue(ze, t), ue(Xe, n)
}
function Vg(e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n
  r = r.getChildContext()
  for (var i in r) if (!(i in t)) throw Error(H(108, oS(e) || 'Unknown', i))
  return me({}, n, r)
}
function $s(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Yn),
    (yr = ze.current),
    ue(ze, e),
    ue(Xe, Xe.current),
    !0
  )
}
function yh(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(H(169))
  n
    ? ((e = Vg(e, t, yr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      de(Xe),
      de(ze),
      ue(ze, e))
    : de(Xe),
    ue(Xe, n)
}
var cn = null,
  Sl = !1,
  wu = !1
function Bg(e) {
  cn === null ? (cn = [e]) : cn.push(e)
}
function x2(e) {
  ;(Sl = !0), Bg(e)
}
function nr() {
  if (!wu && cn !== null) {
    wu = !0
    var e = 0,
      t = oe
    try {
      var n = cn
      for (oe = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(cn = null), (Sl = !1)
    } catch (i) {
      throw (cn !== null && (cn = cn.slice(e + 1)), pg(xf, nr), i)
    } finally {
      ;(oe = t), (wu = !1)
    }
  }
  return null
}
var ri = [],
  ii = 0,
  Ds = null,
  zs = 0,
  wt = [],
  St = 0,
  wr = null,
  fn = 1,
  pn = ''
function ir(e, t) {
  ;(ri[ii++] = zs), (ri[ii++] = Ds), (Ds = e), (zs = t)
}
function Hg(e, t, n) {
  ;(wt[St++] = fn), (wt[St++] = pn), (wt[St++] = wr), (wr = e)
  var r = fn
  e = pn
  var i = 32 - $t(r) - 1
  ;(r &= ~(1 << i)), (n += 1)
  var o = 32 - $t(t) + i
  if (30 < o) {
    var a = i - (i % 5)
    ;(o = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (i -= a),
      (fn = (1 << (32 - $t(t) + i)) | (n << i) | r),
      (pn = o + e)
  } else (fn = (1 << o) | (n << i) | r), (pn = e)
}
function Nf(e) {
  e.return !== null && (ir(e, 1), Hg(e, 1, 0))
}
function Of(e) {
  for (; e === Ds; )
    (Ds = ri[--ii]), (ri[ii] = null), (zs = ri[--ii]), (ri[ii] = null)
  for (; e === wr; )
    (wr = wt[--St]),
      (wt[St] = null),
      (pn = wt[--St]),
      (wt[St] = null),
      (fn = wt[--St]),
      (wt[St] = null)
}
var ct = null,
  st = null,
  fe = !1,
  At = null
function Wg(e, t) {
  var n = bt(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function wh(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ct = e), (st = Un(t.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ct = e), (st = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = wr !== null ? { id: fn, overflow: pn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824
            }),
            (n = bt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ct = e),
            (st = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function Ac(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Fc(e) {
  if (fe) {
    var t = st
    if (t) {
      var n = t
      if (!wh(e, t)) {
        if (Ac(e)) throw Error(H(418))
        t = Un(n.nextSibling)
        var r = ct
        t && wh(e, t)
          ? Wg(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (fe = !1), (ct = e))
      }
    } else {
      if (Ac(e)) throw Error(H(418))
      ;(e.flags = (e.flags & -4097) | 2), (fe = !1), (ct = e)
    }
  }
}
function Sh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  ct = e
}
function Ia(e) {
  if (e !== ct) return !1
  if (!fe) return Sh(e), (fe = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Oc(e.type, e.memoizedProps))),
    t && (t = st))
  ) {
    if (Ac(e)) throw (Ug(), Error(H(418)))
    for (; t; ) Wg(e, t), (t = Un(t.nextSibling))
  }
  if ((Sh(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(H(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              st = Un(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      st = null
    }
  } else st = ct ? Un(e.stateNode.nextSibling) : null
  return !0
}
function Ug() {
  for (var e = st; e; ) e = Un(e.nextSibling)
}
function Ci() {
  ;(st = ct = null), (fe = !1)
}
function Lf(e) {
  At === null ? (At = [e]) : At.push(e)
}
var C2 = En.ReactCurrentBatchConfig
function Xi(e, t, n) {
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
function Aa(e, t) {
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
function bh(e) {
  var t = e._init
  return t(e._payload)
}
function qg(e) {
  function t(m, p) {
    if (e) {
      var h = m.deletions
      h === null ? ((m.deletions = [p]), (m.flags |= 16)) : h.push(p)
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
    return (m = Kn(m, p)), (m.index = 0), (m.sibling = null), m
  }
  function o(m, p, h) {
    return (
      (m.index = h),
      e
        ? ((h = m.alternate),
          h !== null
            ? ((h = h.index), h < p ? ((m.flags |= 2), p) : h)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    )
  }
  function a(m) {
    return e && m.alternate === null && (m.flags |= 2), m
  }
  function s(m, p, h, S) {
    return p === null || p.tag !== 6
      ? ((p = Tu(h, m.mode, S)), (p.return = m), p)
      : ((p = i(p, h)), (p.return = m), p)
  }
  function l(m, p, h, S) {
    var x = h.type
    return x === Yr
      ? c(m, p, h.props.children, S, h.key)
      : p !== null &&
        (p.elementType === x ||
          (typeof x == 'object' &&
            x !== null &&
            x.$$typeof === jn &&
            bh(x) === p.type))
      ? ((S = i(p, h.props)), (S.ref = Xi(m, p, h)), (S.return = m), S)
      : ((S = vs(h.type, h.key, h.props, null, m.mode, S)),
        (S.ref = Xi(m, p, h)),
        (S.return = m),
        S)
  }
  function u(m, p, h, S) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== h.containerInfo ||
      p.stateNode.implementation !== h.implementation
      ? ((p = ku(h, m.mode, S)), (p.return = m), p)
      : ((p = i(p, h.children || [])), (p.return = m), p)
  }
  function c(m, p, h, S, x) {
    return p === null || p.tag !== 7
      ? ((p = vr(h, m.mode, S, x)), (p.return = m), p)
      : ((p = i(p, h)), (p.return = m), p)
  }
  function f(m, p, h) {
    if ((typeof p == 'string' && p !== '') || typeof p == 'number')
      return (p = Tu('' + p, m.mode, h)), (p.return = m), p
    if (typeof p == 'object' && p !== null) {
      switch (p.$$typeof) {
        case Ea:
          return (
            (h = vs(p.type, p.key, p.props, null, m.mode, h)),
            (h.ref = Xi(m, null, p)),
            (h.return = m),
            h
          )
        case Xr:
          return (p = ku(p, m.mode, h)), (p.return = m), p
        case jn:
          var S = p._init
          return f(m, S(p._payload), h)
      }
      if (io(p) || Ui(p)) return (p = vr(p, m.mode, h, null)), (p.return = m), p
      Aa(m, p)
    }
    return null
  }
  function d(m, p, h, S) {
    var x = p !== null ? p.key : null
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return x !== null ? null : s(m, p, '' + h, S)
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case Ea:
          return h.key === x ? l(m, p, h, S) : null
        case Xr:
          return h.key === x ? u(m, p, h, S) : null
        case jn:
          return (x = h._init), d(m, p, x(h._payload), S)
      }
      if (io(h) || Ui(h)) return x !== null ? null : c(m, p, h, S, null)
      Aa(m, h)
    }
    return null
  }
  function v(m, p, h, S, x) {
    if ((typeof S == 'string' && S !== '') || typeof S == 'number')
      return (m = m.get(h) || null), s(p, m, '' + S, x)
    if (typeof S == 'object' && S !== null) {
      switch (S.$$typeof) {
        case Ea:
          return (m = m.get(S.key === null ? h : S.key) || null), l(p, m, S, x)
        case Xr:
          return (m = m.get(S.key === null ? h : S.key) || null), u(p, m, S, x)
        case jn:
          var _ = S._init
          return v(m, p, h, _(S._payload), x)
      }
      if (io(S) || Ui(S)) return (m = m.get(h) || null), c(p, m, S, x, null)
      Aa(p, S)
    }
    return null
  }
  function g(m, p, h, S) {
    for (
      var x = null, _ = null, C = p, E = (p = 0), T = null;
      C !== null && E < h.length;
      E++
    ) {
      C.index > E ? ((T = C), (C = null)) : (T = C.sibling)
      var k = d(m, C, h[E], S)
      if (k === null) {
        C === null && (C = T)
        break
      }
      e && C && k.alternate === null && t(m, C),
        (p = o(k, p, E)),
        _ === null ? (x = k) : (_.sibling = k),
        (_ = k),
        (C = T)
    }
    if (E === h.length) return n(m, C), fe && ir(m, E), x
    if (C === null) {
      for (; E < h.length; E++)
        (C = f(m, h[E], S)),
          C !== null &&
            ((p = o(C, p, E)), _ === null ? (x = C) : (_.sibling = C), (_ = C))
      return fe && ir(m, E), x
    }
    for (C = r(m, C); E < h.length; E++)
      (T = v(C, m, E, h[E], S)),
        T !== null &&
          (e && T.alternate !== null && C.delete(T.key === null ? E : T.key),
          (p = o(T, p, E)),
          _ === null ? (x = T) : (_.sibling = T),
          (_ = T))
    return (
      e &&
        C.forEach(function (M) {
          return t(m, M)
        }),
      fe && ir(m, E),
      x
    )
  }
  function y(m, p, h, S) {
    var x = Ui(h)
    if (typeof x != 'function') throw Error(H(150))
    if (((h = x.call(h)), h == null)) throw Error(H(151))
    for (
      var _ = (x = null), C = p, E = (p = 0), T = null, k = h.next();
      C !== null && !k.done;
      E++, k = h.next()
    ) {
      C.index > E ? ((T = C), (C = null)) : (T = C.sibling)
      var M = d(m, C, k.value, S)
      if (M === null) {
        C === null && (C = T)
        break
      }
      e && C && M.alternate === null && t(m, C),
        (p = o(M, p, E)),
        _ === null ? (x = M) : (_.sibling = M),
        (_ = M),
        (C = T)
    }
    if (k.done) return n(m, C), fe && ir(m, E), x
    if (C === null) {
      for (; !k.done; E++, k = h.next())
        (k = f(m, k.value, S)),
          k !== null &&
            ((p = o(k, p, E)), _ === null ? (x = k) : (_.sibling = k), (_ = k))
      return fe && ir(m, E), x
    }
    for (C = r(m, C); !k.done; E++, k = h.next())
      (k = v(C, m, E, k.value, S)),
        k !== null &&
          (e && k.alternate !== null && C.delete(k.key === null ? E : k.key),
          (p = o(k, p, E)),
          _ === null ? (x = k) : (_.sibling = k),
          (_ = k))
    return (
      e &&
        C.forEach(function (L) {
          return t(m, L)
        }),
      fe && ir(m, E),
      x
    )
  }
  function b(m, p, h, S) {
    if (
      (typeof h == 'object' &&
        h !== null &&
        h.type === Yr &&
        h.key === null &&
        (h = h.props.children),
      typeof h == 'object' && h !== null)
    ) {
      switch (h.$$typeof) {
        case Ea:
          e: {
            for (var x = h.key, _ = p; _ !== null; ) {
              if (_.key === x) {
                if (((x = h.type), x === Yr)) {
                  if (_.tag === 7) {
                    n(m, _.sibling),
                      (p = i(_, h.props.children)),
                      (p.return = m),
                      (m = p)
                    break e
                  }
                } else if (
                  _.elementType === x ||
                  (typeof x == 'object' &&
                    x !== null &&
                    x.$$typeof === jn &&
                    bh(x) === _.type)
                ) {
                  n(m, _.sibling),
                    (p = i(_, h.props)),
                    (p.ref = Xi(m, _, h)),
                    (p.return = m),
                    (m = p)
                  break e
                }
                n(m, _)
                break
              } else t(m, _)
              _ = _.sibling
            }
            h.type === Yr
              ? ((p = vr(h.props.children, m.mode, S, h.key)),
                (p.return = m),
                (m = p))
              : ((S = vs(h.type, h.key, h.props, null, m.mode, S)),
                (S.ref = Xi(m, p, h)),
                (S.return = m),
                (m = S))
          }
          return a(m)
        case Xr:
          e: {
            for (_ = h.key; p !== null; ) {
              if (p.key === _)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === h.containerInfo &&
                  p.stateNode.implementation === h.implementation
                ) {
                  n(m, p.sibling),
                    (p = i(p, h.children || [])),
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
            ;(p = ku(h, m.mode, S)), (p.return = m), (m = p)
          }
          return a(m)
        case jn:
          return (_ = h._init), b(m, p, _(h._payload), S)
      }
      if (io(h)) return g(m, p, h, S)
      if (Ui(h)) return y(m, p, h, S)
      Aa(m, h)
    }
    return (typeof h == 'string' && h !== '') || typeof h == 'number'
      ? ((h = '' + h),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = i(p, h)), (p.return = m), (m = p))
          : (n(m, p), (p = Tu(h, m.mode, S)), (p.return = m), (m = p)),
        a(m))
      : n(m, p)
  }
  return b
}
var _i = qg(!0),
  Gg = qg(!1),
  Vs = tr(null),
  Bs = null,
  oi = null,
  Rf = null
function If() {
  Rf = oi = Bs = null
}
function Af(e) {
  var t = Vs.current
  de(Vs), (e._currentValue = t)
}
function $c(e, t, n) {
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
function mi(e, t) {
  ;(Bs = e),
    (Rf = oi = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ke = !0), (e.firstContext = null))
}
function Tt(e) {
  var t = e._currentValue
  if (Rf !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), oi === null)) {
      if (Bs === null) throw Error(H(308))
      ;(oi = e), (Bs.dependencies = { lanes: 0, firstContext: e })
    } else oi = oi.next = e
  return t
}
var ur = null
function Ff(e) {
  ur === null ? (ur = [e]) : ur.push(e)
}
function Qg(e, t, n, r) {
  var i = t.interleaved
  return (
    i === null ? ((n.next = n), Ff(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    wn(e, r)
  )
}
function wn(e, t) {
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
var Nn = !1
function $f(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null
  }
}
function Kg(e, t) {
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
function mn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null
  }
}
function qn(e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), re & 2)) {
    var i = r.pending
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      wn(e, n)
    )
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Ff(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    wn(e, n)
  )
}
function cs(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Cf(e, n)
  }
}
function xh(e, t) {
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
function Hs(e, t, n, r) {
  var i = e.updateQueue
  Nn = !1
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
        v = s.eventTime
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: v,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null
            })
        e: {
          var g = e,
            y = s
          switch (((d = t), (v = n), y.tag)) {
            case 1:
              if (((g = y.payload), typeof g == 'function')) {
                f = g.call(v, f, d)
                break e
              }
              f = g
              break e
            case 3:
              g.flags = (g.flags & -65537) | 128
            case 0:
              if (
                ((g = y.payload),
                (d = typeof g == 'function' ? g.call(v, f, d) : g),
                d == null)
              )
                break e
              f = me({}, f, d)
              break e
            case 2:
              Nn = !0
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [s]) : d.push(s))
      } else
        (v = {
          eventTime: v,
          lane: d,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        }),
          c === null ? ((u = c = v), (l = f)) : (c = c.next = v),
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
    ;(br |= a), (e.lanes = a), (e.memoizedState = f)
  }
}
function Ch(e, t, n) {
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
var ua = {},
  Jt = tr(ua),
  $o = tr(ua),
  Do = tr(ua)
function cr(e) {
  if (e === ua) throw Error(H(174))
  return e
}
function Df(e, t) {
  switch ((ue(Do, t), ue($o, e), ue(Jt, ua), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : yc(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = yc(t, e))
  }
  de(Jt), ue(Jt, t)
}
function Ei() {
  de(Jt), de($o), de(Do)
}
function Xg(e) {
  cr(Do.current)
  var t = cr(Jt.current),
    n = yc(t, e.type)
  t !== n && (ue($o, e), ue(Jt, n))
}
function zf(e) {
  $o.current === e && (de(Jt), de($o))
}
var pe = tr(0)
function Ws(e) {
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
function Vf() {
  for (var e = 0; e < Su.length; e++) Su[e]._workInProgressVersionPrimary = null
  Su.length = 0
}
var ds = En.ReactCurrentDispatcher,
  bu = En.ReactCurrentBatchConfig,
  Sr = 0,
  he = null,
  xe = null,
  Te = null,
  Us = !1,
  mo = !1,
  zo = 0,
  _2 = 0
function Fe() {
  throw Error(H(321))
}
function Bf(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ht(e[n], t[n])) return !1
  return !0
}
function Hf(e, t, n, r, i, o) {
  if (
    ((Sr = o),
    (he = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ds.current = e === null || e.memoizedState === null ? P2 : M2),
    (e = n(r, i)),
    mo)
  ) {
    o = 0
    do {
      if (((mo = !1), (zo = 0), 25 <= o)) throw Error(H(301))
      ;(o += 1),
        (Te = xe = null),
        (t.updateQueue = null),
        (ds.current = j2),
        (e = n(r, i))
    } while (mo)
  }
  if (
    ((ds.current = qs),
    (t = xe !== null && xe.next !== null),
    (Sr = 0),
    (Te = xe = he = null),
    (Us = !1),
    t)
  )
    throw Error(H(300))
  return e
}
function Wf() {
  var e = zo !== 0
  return (zo = 0), e
}
function Qt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  }
  return Te === null ? (he.memoizedState = Te = e) : (Te = Te.next = e), Te
}
function kt() {
  if (xe === null) {
    var e = he.alternate
    e = e !== null ? e.memoizedState : null
  } else e = xe.next
  var t = Te === null ? he.memoizedState : Te.next
  if (t !== null) (Te = t), (xe = e)
  else {
    if (e === null) throw Error(H(310))
    ;(xe = e),
      (e = {
        memoizedState: xe.memoizedState,
        baseState: xe.baseState,
        baseQueue: xe.baseQueue,
        queue: xe.queue,
        next: null
      }),
      Te === null ? (he.memoizedState = Te = e) : (Te = Te.next = e)
  }
  return Te
}
function Vo(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function xu(e) {
  var t = kt(),
    n = t.queue
  if (n === null) throw Error(H(311))
  n.lastRenderedReducer = e
  var r = xe,
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
          (br |= c)
      }
      u = u.next
    } while (u !== null && u !== o)
    l === null ? (a = r) : (l.next = s),
      Ht(r, t.memoizedState) || (Ke = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = l),
      (n.lastRenderedState = r)
  }
  if (((e = n.interleaved), e !== null)) {
    i = e
    do (o = i.lane), (he.lanes |= o), (br |= o), (i = i.next)
    while (i !== e)
  } else i === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function Cu(e) {
  var t = kt(),
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
    Ht(o, t.memoizedState) || (Ke = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o)
  }
  return [o, r]
}
function Yg() {}
function Zg(e, t) {
  var n = he,
    r = kt(),
    i = t(),
    o = !Ht(r.memoizedState, i)
  if (
    (o && ((r.memoizedState = i), (Ke = !0)),
    (r = r.queue),
    Uf(t0.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Te !== null && Te.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Bo(9, e0.bind(null, n, r, i, t), void 0, null),
      ke === null)
    )
      throw Error(H(349))
    Sr & 30 || Jg(n, t, i)
  }
  return i
}
function Jg(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = he.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (he.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function e0(e, t, n, r) {
  ;(t.value = n), (t.getSnapshot = r), n0(t) && r0(e)
}
function t0(e, t, n) {
  return n(function () {
    n0(t) && r0(e)
  })
}
function n0(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !Ht(e, n)
  } catch {
    return !0
  }
}
function r0(e) {
  var t = wn(e, 1)
  t !== null && Dt(t, e, 1, -1)
}
function _h(e) {
  var t = Qt()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Vo,
      lastRenderedState: e
    }),
    (t.queue = e),
    (e = e.dispatch = k2.bind(null, he, e)),
    [t.memoizedState, e]
  )
}
function Bo(e, t, n, r) {
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
function i0() {
  return kt().memoizedState
}
function fs(e, t, n, r) {
  var i = Qt()
  ;(he.flags |= e),
    (i.memoizedState = Bo(1 | t, n, void 0, r === void 0 ? null : r))
}
function bl(e, t, n, r) {
  var i = kt()
  r = r === void 0 ? null : r
  var o = void 0
  if (xe !== null) {
    var a = xe.memoizedState
    if (((o = a.destroy), r !== null && Bf(r, a.deps))) {
      i.memoizedState = Bo(t, n, o, r)
      return
    }
  }
  ;(he.flags |= e), (i.memoizedState = Bo(1 | t, n, o, r))
}
function Eh(e, t) {
  return fs(8390656, 8, e, t)
}
function Uf(e, t) {
  return bl(2048, 8, e, t)
}
function o0(e, t) {
  return bl(4, 2, e, t)
}
function a0(e, t) {
  return bl(4, 4, e, t)
}
function s0(e, t) {
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
function l0(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), bl(4, 4, s0.bind(null, t, e), n)
  )
}
function qf() {}
function u0(e, t) {
  var n = kt()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Bf(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e)
}
function c0(e, t) {
  var n = kt()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Bf(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function d0(e, t, n) {
  return Sr & 21
    ? (Ht(n, t) || ((n = vg()), (he.lanes |= n), (br |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ke = !0)), (e.memoizedState = n))
}
function E2(e, t) {
  var n = oe
  ;(oe = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = bu.transition
  bu.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(oe = n), (bu.transition = r)
  }
}
function f0() {
  return kt().memoizedState
}
function T2(e, t, n) {
  var r = Qn(e)
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }),
    p0(e))
  )
    h0(t, n)
  else if (((n = Qg(e, t, n, r)), n !== null)) {
    var i = We()
    Dt(n, e, r, i), m0(n, t, r)
  }
}
function k2(e, t, n) {
  var r = Qn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (p0(e)) h0(t, i)
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
        if (((i.hasEagerState = !0), (i.eagerState = s), Ht(s, a))) {
          var l = t.interleaved
          l === null
            ? ((i.next = i), Ff(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i)
          return
        }
      } catch {
      } finally {
      }
    ;(n = Qg(e, t, i, r)),
      n !== null && ((i = We()), Dt(n, e, r, i), m0(n, t, r))
  }
}
function p0(e) {
  var t = e.alternate
  return e === he || (t !== null && t === he)
}
function h0(e, t) {
  mo = Us = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function m0(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Cf(e, n)
  }
}
var qs = {
    readContext: Tt,
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
  P2 = {
    readContext: Tt,
    useCallback: function (e, t) {
      return (Qt().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: Tt,
    useEffect: Eh,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        fs(4194308, 4, s0.bind(null, t, e), n)
      )
    },
    useLayoutEffect: function (e, t) {
      return fs(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return fs(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = Qt()
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      )
    },
    useReducer: function (e, t, n) {
      var r = Qt()
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
        (e = e.dispatch = T2.bind(null, he, e)),
        [r.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = Qt()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: _h,
    useDebugValue: qf,
    useDeferredValue: function (e) {
      return (Qt().memoizedState = e)
    },
    useTransition: function () {
      var e = _h(!1),
        t = e[0]
      return (e = E2.bind(null, e[1])), (Qt().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = he,
        i = Qt()
      if (fe) {
        if (n === void 0) throw Error(H(407))
        n = n()
      } else {
        if (((n = t()), ke === null)) throw Error(H(349))
        Sr & 30 || Jg(r, t, n)
      }
      i.memoizedState = n
      var o = { value: n, getSnapshot: t }
      return (
        (i.queue = o),
        Eh(t0.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Bo(9, e0.bind(null, r, o, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = Qt(),
        t = ke.identifierPrefix
      if (fe) {
        var n = pn,
          r = fn
        ;(n = (r & ~(1 << (32 - $t(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = zo++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = _2++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1
  },
  M2 = {
    readContext: Tt,
    useCallback: u0,
    useContext: Tt,
    useEffect: Uf,
    useImperativeHandle: l0,
    useInsertionEffect: o0,
    useLayoutEffect: a0,
    useMemo: c0,
    useReducer: xu,
    useRef: i0,
    useState: function () {
      return xu(Vo)
    },
    useDebugValue: qf,
    useDeferredValue: function (e) {
      var t = kt()
      return d0(t, xe.memoizedState, e)
    },
    useTransition: function () {
      var e = xu(Vo)[0],
        t = kt().memoizedState
      return [e, t]
    },
    useMutableSource: Yg,
    useSyncExternalStore: Zg,
    useId: f0,
    unstable_isNewReconciler: !1
  },
  j2 = {
    readContext: Tt,
    useCallback: u0,
    useContext: Tt,
    useEffect: Uf,
    useImperativeHandle: l0,
    useInsertionEffect: o0,
    useLayoutEffect: a0,
    useMemo: c0,
    useReducer: Cu,
    useRef: i0,
    useState: function () {
      return Cu(Vo)
    },
    useDebugValue: qf,
    useDeferredValue: function (e) {
      var t = kt()
      return xe === null ? (t.memoizedState = e) : d0(t, xe.memoizedState, e)
    },
    useTransition: function () {
      var e = Cu(Vo)[0],
        t = kt().memoizedState
      return [e, t]
    },
    useMutableSource: Yg,
    useSyncExternalStore: Zg,
    useId: f0,
    unstable_isNewReconciler: !1
  }
function Ot(e, t) {
  if (e && e.defaultProps) {
    ;(t = me({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
function Dc(e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : me({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var xl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Nr(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = We(),
      i = Qn(e),
      o = mn(r, i)
    ;(o.payload = t),
      n != null && (o.callback = n),
      (t = qn(e, o, i)),
      t !== null && (Dt(t, e, i, r), cs(t, e, i))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = We(),
      i = Qn(e),
      o = mn(r, i)
    ;(o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = qn(e, o, i)),
      t !== null && (Dt(t, e, i, r), cs(t, e, i))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = We(),
      r = Qn(e),
      i = mn(n, r)
    ;(i.tag = 2),
      t != null && (i.callback = t),
      (t = qn(e, i, r)),
      t !== null && (Dt(t, e, r, n), cs(t, e, r))
  }
}
function Th(e, t, n, r, i, o, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ro(n, r) || !Ro(i, o)
      : !0
  )
}
function v0(e, t, n) {
  var r = !1,
    i = Yn,
    o = t.contextType
  return (
    typeof o == 'object' && o !== null
      ? (o = Tt(o))
      : ((i = Ye(t) ? yr : ze.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? xi(e, i) : Yn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = xl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  )
}
function kh(e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && xl.enqueueReplaceState(t, t.state, null)
}
function zc(e, t, n, r) {
  var i = e.stateNode
  ;(i.props = n), (i.state = e.memoizedState), (i.refs = {}), $f(e)
  var o = t.contextType
  typeof o == 'object' && o !== null
    ? (i.context = Tt(o))
    : ((o = Ye(t) ? yr : ze.current), (i.context = xi(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (Dc(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && xl.enqueueReplaceState(i, i.state, null),
      Hs(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308)
}
function Ti(e, t) {
  try {
    var n = '',
      r = t
    do (n += iS(r)), (r = r.return)
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
function _u(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function Vc(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var N2 = typeof WeakMap == 'function' ? WeakMap : Map
function g0(e, t, n) {
  ;(n = mn(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = function () {
      Qs || ((Qs = !0), (Yc = r)), Vc(e, t)
    }),
    n
  )
}
function y0(e, t, n) {
  ;(n = mn(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var i = t.value
    ;(n.payload = function () {
      return r(i)
    }),
      (n.callback = function () {
        Vc(e, t)
      })
  }
  var o = e.stateNode
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        Vc(e, t),
          typeof r != 'function' &&
            (Gn === null ? (Gn = new Set([this])) : Gn.add(this))
        var a = t.stack
        this.componentDidCatch(t.value, { componentStack: a !== null ? a : '' })
      }),
    n
  )
}
function Ph(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new N2()
    var i = new Set()
    r.set(t, i)
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i))
  i.has(n) || (i.add(n), (e = U2.bind(null, e, t, n)), t.then(e, e))
}
function Mh(e) {
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
function jh(e, t, n, r, i) {
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
              : ((t = mn(-1, 1)), (t.tag = 2), qn(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var O2 = En.ReactCurrentOwner,
  Ke = !1
function Be(e, t, n, r) {
  t.child = e === null ? Gg(t, null, n, r) : _i(t, e.child, n, r)
}
function Nh(e, t, n, r, i) {
  n = n.render
  var o = t.ref
  return (
    mi(t, i),
    (r = Hf(e, t, n, r, o, i)),
    (n = Wf()),
    e !== null && !Ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Sn(e, t, i))
      : (fe && n && Nf(t), (t.flags |= 1), Be(e, t, r, i), t.child)
  )
}
function Oh(e, t, n, r, i) {
  if (e === null) {
    var o = n.type
    return typeof o == 'function' &&
      !ep(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), w0(e, t, o, r, i))
      : ((e = vs(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((o = e.child), !(e.lanes & i))) {
    var a = o.memoizedProps
    if (
      ((n = n.compare), (n = n !== null ? n : Ro), n(a, r) && e.ref === t.ref)
    )
      return Sn(e, t, i)
  }
  return (
    (t.flags |= 1),
    (e = Kn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  )
}
function w0(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps
    if (Ro(o, r) && e.ref === t.ref)
      if (((Ke = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ke = !0)
      else return (t.lanes = e.lanes), Sn(e, t, i)
  }
  return Bc(e, t, n, r, i)
}
function S0(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ue(si, ot),
        (ot |= n)
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
          ue(si, ot),
          (ot |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        ue(si, ot),
        (ot |= r)
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ue(si, ot),
      (ot |= r)
  return Be(e, t, i, n), t.child
}
function b0(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function Bc(e, t, n, r, i) {
  var o = Ye(n) ? yr : ze.current
  return (
    (o = xi(t, o)),
    mi(t, i),
    (n = Hf(e, t, n, r, o, i)),
    (r = Wf()),
    e !== null && !Ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Sn(e, t, i))
      : (fe && r && Nf(t), (t.flags |= 1), Be(e, t, n, i), t.child)
  )
}
function Lh(e, t, n, r, i) {
  if (Ye(n)) {
    var o = !0
    $s(t)
  } else o = !1
  if ((mi(t, i), t.stateNode === null))
    ps(e, t), v0(t, n, r), zc(t, n, r, i), (r = !0)
  else if (e === null) {
    var a = t.stateNode,
      s = t.memoizedProps
    a.props = s
    var l = a.context,
      u = n.contextType
    typeof u == 'object' && u !== null
      ? (u = Tt(u))
      : ((u = Ye(n) ? yr : ze.current), (u = xi(t, u)))
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == 'function' || typeof a.getSnapshotBeforeUpdate == 'function'
    f ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((s !== r || l !== u) && kh(t, a, r, u)),
      (Nn = !1)
    var d = t.memoizedState
    ;(a.state = d),
      Hs(t, r, a, i),
      (l = t.memoizedState),
      s !== r || d !== l || Xe.current || Nn
        ? (typeof c == 'function' && (Dc(t, n, c, r), (l = t.memoizedState)),
          (s = Nn || Th(t, n, s, r, d, l, u))
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
      Kg(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : Ot(t.type, s)),
      (a.props = u),
      (f = t.pendingProps),
      (d = a.context),
      (l = n.contextType),
      typeof l == 'object' && l !== null
        ? (l = Tt(l))
        : ((l = Ye(n) ? yr : ze.current), (l = xi(t, l)))
    var v = n.getDerivedStateFromProps
    ;(c =
      typeof v == 'function' ||
      typeof a.getSnapshotBeforeUpdate == 'function') ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((s !== f || d !== l) && kh(t, a, r, l)),
      (Nn = !1),
      (d = t.memoizedState),
      (a.state = d),
      Hs(t, r, a, i)
    var g = t.memoizedState
    s !== f || d !== g || Xe.current || Nn
      ? (typeof v == 'function' && (Dc(t, n, v, r), (g = t.memoizedState)),
        (u = Nn || Th(t, n, u, r, d, g, l) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != 'function' &&
                typeof a.componentWillUpdate != 'function') ||
              (typeof a.componentWillUpdate == 'function' &&
                a.componentWillUpdate(r, g, l),
              typeof a.UNSAFE_componentWillUpdate == 'function' &&
                a.UNSAFE_componentWillUpdate(r, g, l)),
            typeof a.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != 'function' ||
              (s === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != 'function' ||
              (s === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (a.props = r),
        (a.state = g),
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
  return Hc(e, t, n, r, o, i)
}
function Hc(e, t, n, r, i, o) {
  b0(e, t)
  var a = (t.flags & 128) !== 0
  if (!r && !a) return i && yh(t, n, !1), Sn(e, t, o)
  ;(r = t.stateNode), (O2.current = t)
  var s =
    a && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = _i(t, e.child, null, o)), (t.child = _i(t, null, s, o)))
      : Be(e, t, s, o),
    (t.memoizedState = r.state),
    i && yh(t, n, !0),
    t.child
  )
}
function x0(e) {
  var t = e.stateNode
  t.pendingContext
    ? gh(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && gh(e, t.context, !1),
    Df(e, t.containerInfo)
}
function Rh(e, t, n, r, i) {
  return Ci(), Lf(i), (t.flags |= 256), Be(e, t, n, r), t.child
}
var Wc = { dehydrated: null, treeContext: null, retryLane: 0 }
function Uc(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function C0(e, t, n) {
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
    ue(pe, i & 1),
    e === null)
  )
    return (
      Fc(t),
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
                : (o = El(a, r, 0, null)),
              (e = vr(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Uc(n)),
              (t.memoizedState = Wc),
              e)
            : Gf(t, a))
    )
  if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
    return L2(e, t, a, r, s, i, n)
  if (o) {
    ;(o = r.fallback), (a = t.mode), (i = e.child), (s = i.sibling)
    var l = { mode: 'hidden', children: r.children }
    return (
      !(a & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Kn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      s !== null ? (o = Kn(s, o)) : ((o = vr(o, a, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Uc(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions
            }),
      (o.memoizedState = a),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Wc),
      r
    )
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Kn(o, { mode: 'visible', children: r.children })),
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
function Gf(e, t) {
  return (
    (t = El({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function Fa(e, t, n, r) {
  return (
    r !== null && Lf(r),
    _i(t, e.child, null, n),
    (e = Gf(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function L2(e, t, n, r, i, o, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = _u(Error(H(422)))), Fa(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = El({ mode: 'visible', children: r.children }, i, 0, null)),
        (o = vr(o, i, a, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && _i(t, e.child, null, a),
        (t.child.memoizedState = Uc(a)),
        (t.memoizedState = Wc),
        o)
  if (!(t.mode & 1)) return Fa(e, t, a, null)
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst
    return (r = s), (o = Error(H(419))), (r = _u(o, r, void 0)), Fa(e, t, a, r)
  }
  if (((s = (a & e.childLanes) !== 0), Ke || s)) {
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
          ((o.retryLane = i), wn(e, i), Dt(r, e, i, -1))
    }
    return Jf(), (r = _u(Error(H(421)))), Fa(e, t, a, r)
  }
  return i.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = q2.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (st = Un(i.nextSibling)),
      (ct = t),
      (fe = !0),
      (At = null),
      e !== null &&
        ((wt[St++] = fn),
        (wt[St++] = pn),
        (wt[St++] = wr),
        (fn = e.id),
        (pn = e.overflow),
        (wr = t)),
      (t = Gf(t, r.children)),
      (t.flags |= 4096),
      t)
}
function Ih(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), $c(e.return, t, n)
}
function Eu(e, t, n, r, i) {
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
function _0(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail
  if ((Be(e, t, r.children, n), (r = pe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ih(e, n, t)
        else if (e.tag === 19) Ih(e, n, t)
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
  if ((ue(pe, r), !(t.mode & 1))) t.memoizedState = null
  else
    switch (i) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Ws(e) === null && (i = n),
            (n = n.sibling)
        ;(n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Eu(t, !1, i, n, o)
        break
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Ws(e) === null)) {
            t.child = i
            break
          }
          ;(e = i.sibling), (i.sibling = n), (n = i), (i = e)
        }
        Eu(t, !0, n, null, o)
        break
      case 'together':
        Eu(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function ps(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function Sn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (br |= t.lanes),
    !(n & t.childLanes))
  )
    return null
  if (e !== null && t.child !== e.child) throw Error(H(153))
  if (t.child !== null) {
    for (
      e = t.child, n = Kn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Kn(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function R2(e, t, n) {
  switch (t.tag) {
    case 3:
      x0(t), Ci()
      break
    case 5:
      Xg(t)
      break
    case 1:
      Ye(t.type) && $s(t)
      break
    case 4:
      Df(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value
      ue(Vs, r._currentValue), (r._currentValue = i)
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ue(pe, pe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? C0(e, t, n)
          : (ue(pe, pe.current & 1),
            (e = Sn(e, t, n)),
            e !== null ? e.sibling : null)
      ue(pe, pe.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return _0(e, t, n)
        t.flags |= 128
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ue(pe, pe.current),
        r)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), S0(e, t, n)
  }
  return Sn(e, t, n)
}
var E0, qc, T0, k0
E0 = function (e, t) {
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
qc = function () {}
T0 = function (e, t, n, r) {
  var i = e.memoizedProps
  if (i !== r) {
    ;(e = t.stateNode), cr(Jt.current)
    var o = null
    switch (n) {
      case 'input':
        ;(i = hc(e, i)), (r = hc(e, r)), (o = [])
        break
      case 'select':
        ;(i = me({}, i, { value: void 0 })),
          (r = me({}, r, { value: void 0 })),
          (o = [])
        break
      case 'textarea':
        ;(i = gc(e, i)), (r = gc(e, r)), (o = [])
        break
      default:
        typeof i.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = As)
    }
    wc(n, r)
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
            (ko.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null))
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
              (ko.hasOwnProperty(u)
                ? (l != null && u === 'onScroll' && ce('scroll', e),
                  o || s === l || (o = []))
                : (o = o || []).push(u, l))
    }
    n && (o = o || []).push('style', n)
    var u = o
    ;(t.updateQueue = u) && (t.flags |= 4)
  }
}
k0 = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
function Yi(e, t) {
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
function I2(e, t, n) {
  var r = t.pendingProps
  switch ((Of(t), t.tag)) {
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
      return Ye(t.type) && Fs(), $e(t), null
    case 3:
      return (
        (r = t.stateNode),
        Ei(),
        de(Xe),
        de(ze),
        Vf(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ia(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), At !== null && (ed(At), (At = null)))),
        qc(e, t),
        $e(t),
        null
      )
    case 5:
      zf(t)
      var i = cr(Do.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        T0(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(H(166))
          return $e(t), null
        }
        if (((e = cr(Jt.current)), Ia(t))) {
          ;(r = t.stateNode), (n = t.type)
          var o = t.memoizedProps
          switch (((r[Xt] = t), (r[Fo] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              ce('cancel', r), ce('close', r)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              ce('load', r)
              break
            case 'video':
            case 'audio':
              for (i = 0; i < ao.length; i++) ce(ao[i], r)
              break
            case 'source':
              ce('error', r)
              break
            case 'img':
            case 'image':
            case 'link':
              ce('error', r), ce('load', r)
              break
            case 'details':
              ce('toggle', r)
              break
            case 'input':
              Wp(r, o), ce('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!o.multiple }),
                ce('invalid', r)
              break
            case 'textarea':
              qp(r, o), ce('invalid', r)
          }
          wc(n, o), (i = null)
          for (var a in o)
            if (o.hasOwnProperty(a)) {
              var s = o[a]
              a === 'children'
                ? typeof s == 'string'
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ra(r.textContent, s, e),
                    (i = ['children', s]))
                  : typeof s == 'number' &&
                    r.textContent !== '' + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ra(r.textContent, s, e),
                    (i = ['children', '' + s]))
                : ko.hasOwnProperty(a) &&
                  s != null &&
                  a === 'onScroll' &&
                  ce('scroll', r)
            }
          switch (n) {
            case 'input':
              Ta(r), Up(r, o, !0)
              break
            case 'textarea':
              Ta(r), Gp(r)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof o.onClick == 'function' && (r.onclick = As)
          }
          ;(r = i), (t.updateQueue = r), r !== null && (t.flags |= 4)
        } else {
          ;(a = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = tg(n)),
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
            (e[Xt] = t),
            (e[Fo] = r),
            E0(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((a = Sc(n, r)), n)) {
              case 'dialog':
                ce('cancel', e), ce('close', e), (i = r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                ce('load', e), (i = r)
                break
              case 'video':
              case 'audio':
                for (i = 0; i < ao.length; i++) ce(ao[i], e)
                i = r
                break
              case 'source':
                ce('error', e), (i = r)
                break
              case 'img':
              case 'image':
              case 'link':
                ce('error', e), ce('load', e), (i = r)
                break
              case 'details':
                ce('toggle', e), (i = r)
                break
              case 'input':
                Wp(e, r), (i = hc(e, r)), ce('invalid', e)
                break
              case 'option':
                i = r
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = me({}, r, { value: void 0 })),
                  ce('invalid', e)
                break
              case 'textarea':
                qp(e, r), (i = gc(e, r)), ce('invalid', e)
                break
              default:
                i = r
            }
            wc(n, i), (s = i)
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var l = s[o]
                o === 'style'
                  ? ig(e, l)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((l = l ? l.__html : void 0), l != null && ng(e, l))
                  : o === 'children'
                  ? typeof l == 'string'
                    ? (n !== 'textarea' || l !== '') && Po(e, l)
                    : typeof l == 'number' && Po(e, '' + l)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    (ko.hasOwnProperty(o)
                      ? l != null && o === 'onScroll' && ce('scroll', e)
                      : l != null && gf(e, o, l, a))
              }
            switch (n) {
              case 'input':
                Ta(e), Up(e, r, !1)
                break
              case 'textarea':
                Ta(e), Gp(e)
                break
              case 'option':
                r.value != null && e.setAttribute('value', '' + Xn(r.value))
                break
              case 'select':
                ;(e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? di(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      di(e, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof i.onClick == 'function' && (e.onclick = As)
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
      if (e && t.stateNode != null) k0(e, t, e.memoizedProps, r)
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(H(166))
        if (((n = cr(Do.current)), cr(Jt.current), Ia(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Xt] = t),
            (o = r.nodeValue !== n) && ((e = ct), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ra(r.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ra(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          o && (t.flags |= 4)
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Xt] = t),
            (t.stateNode = r)
      }
      return $e(t), null
    case 13:
      if (
        (de(pe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (fe && st !== null && t.mode & 1 && !(t.flags & 128))
          Ug(), Ci(), (t.flags |= 98560), (o = !1)
        else if (((o = Ia(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(H(318))
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(H(317))
            o[Xt] = t
          } else
            Ci(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          $e(t), (o = !1)
        } else At !== null && (ed(At), (At = null)), (o = !0)
        if (!o) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || pe.current & 1 ? Ce === 0 && (Ce = 3) : Jf())),
          t.updateQueue !== null && (t.flags |= 4),
          $e(t),
          null)
    case 4:
      return (
        Ei(), qc(e, t), e === null && Io(t.stateNode.containerInfo), $e(t), null
      )
    case 10:
      return Af(t.type._context), $e(t), null
    case 17:
      return Ye(t.type) && Fs(), $e(t), null
    case 19:
      if ((de(pe), (o = t.memoizedState), o === null)) return $e(t), null
      if (((r = (t.flags & 128) !== 0), (a = o.rendering), a === null))
        if (r) Yi(o, !1)
        else {
          if (Ce !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = Ws(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Yi(o, !1),
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
                return ue(pe, (pe.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          o.tail !== null &&
            ye() > ki &&
            ((t.flags |= 128), (r = !0), Yi(o, !1), (t.lanes = 4194304))
        }
      else {
        if (!r)
          if (((e = Ws(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Yi(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !a.alternate && !fe)
            )
              return $e(t), null
          } else
            2 * ye() - o.renderingStartTime > ki &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Yi(o, !1), (t.lanes = 4194304))
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
          ue(pe, r ? (n & 1) | 2 : n & 1),
          t)
        : ($e(t), null)
    case 22:
    case 23:
      return (
        Zf(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ot & 1073741824 && ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
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
function A2(e, t) {
  switch ((Of(t), t.tag)) {
    case 1:
      return (
        Ye(t.type) && Fs(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        Ei(),
        de(Xe),
        de(ze),
        Vf(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return zf(t), null
    case 13:
      if (
        (de(pe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(H(340))
        Ci()
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 19:
      return de(pe), null
    case 4:
      return Ei(), null
    case 10:
      return Af(t.type._context), null
    case 22:
    case 23:
      return Zf(), null
    case 24:
      return null
    default:
      return null
  }
}
var $a = !1,
  De = !1,
  F2 = typeof WeakSet == 'function' ? WeakSet : Set,
  U = null
function ai(e, t) {
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
function Gc(e, t, n) {
  try {
    n()
  } catch (r) {
    ve(e, t, r)
  }
}
var Ah = !1
function $2(e, t) {
  if (((jc = Ls), (e = Og()), jf(e))) {
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
              var v;
              f !== n || (i !== 0 && f.nodeType !== 3) || (s = a + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (l = a + r),
                f.nodeType === 3 && (a += f.nodeValue.length),
                (v = f.firstChild) !== null;

            )
              (d = f), (f = v)
            for (;;) {
              if (f === e) break t
              if (
                (d === n && ++u === i && (s = a),
                d === o && ++c === r && (l = a),
                (v = f.nextSibling) !== null)
              )
                break
              ;(f = d), (d = f.parentNode)
            }
            f = v
          }
          n = s === -1 || l === -1 ? null : { start: s, end: l }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (Nc = { focusedElem: e, selectionRange: n }, Ls = !1, U = t; U !== null; )
    if (((t = U), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (U = e)
    else
      for (; U !== null; ) {
        t = U
        try {
          var g = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (g !== null) {
                  var y = g.memoizedProps,
                    b = g.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Ot(t.type, y),
                      b
                    )
                  m.__reactInternalSnapshotBeforeUpdate = p
                }
                break
              case 3:
                var h = t.stateNode.containerInfo
                h.nodeType === 1
                  ? (h.textContent = '')
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(H(163))
            }
        } catch (S) {
          ve(t, t.return, S)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (U = e)
          break
        }
        U = t.return
      }
  return (g = Ah), (Ah = !1), g
}
function vo(e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next)
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy
        ;(i.destroy = void 0), o !== void 0 && Gc(t, n, o)
      }
      i = i.next
    } while (i !== r)
  }
}
function Cl(e, t) {
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
function Qc(e) {
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
function P0(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), P0(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Xt], delete t[Fo], delete t[Rc], delete t[S2], delete t[b2])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function M0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Fh(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || M0(e.return)) return null
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
function Kc(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = As))
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Kc(e, t, n), e = e.sibling; e !== null; ) Kc(e, t, n), (e = e.sibling)
}
function Xc(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Xc(e, t, n), e = e.sibling; e !== null; ) Xc(e, t, n), (e = e.sibling)
}
var Ne = null,
  Lt = !1
function kn(e, t, n) {
  for (n = n.child; n !== null; ) j0(e, t, n), (n = n.sibling)
}
function j0(e, t, n) {
  if (Zt && typeof Zt.onCommitFiberUnmount == 'function')
    try {
      Zt.onCommitFiberUnmount(ml, n)
    } catch {}
  switch (n.tag) {
    case 5:
      De || ai(n, t)
    case 6:
      var r = Ne,
        i = Lt
      ;(Ne = null),
        kn(e, t, n),
        (Ne = r),
        (Lt = i),
        Ne !== null &&
          (Lt
            ? ((e = Ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ne.removeChild(n.stateNode))
      break
    case 18:
      Ne !== null &&
        (Lt
          ? ((e = Ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? yu(e.parentNode, n)
              : e.nodeType === 1 && yu(e, n),
            Oo(e))
          : yu(Ne, n.stateNode))
      break
    case 4:
      ;(r = Ne),
        (i = Lt),
        (Ne = n.stateNode.containerInfo),
        (Lt = !0),
        kn(e, t, n),
        (Ne = r),
        (Lt = i)
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
            a !== void 0 && (o & 2 || o & 4) && Gc(n, t, a),
            (i = i.next)
        } while (i !== r)
      }
      kn(e, t, n)
      break
    case 1:
      if (
        !De &&
        (ai(n, t),
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
      kn(e, t, n)
      break
    case 21:
      kn(e, t, n)
      break
    case 22:
      n.mode & 1
        ? ((De = (r = De) || n.memoizedState !== null), kn(e, t, n), (De = r))
        : kn(e, t, n)
      break
    default:
      kn(e, t, n)
  }
}
function $h(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new F2()),
      t.forEach(function (r) {
        var i = G2.bind(null, e, r)
        n.has(r) || (n.add(r), r.then(i, i))
      })
  }
}
function jt(e, t) {
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
              ;(Ne = s.stateNode), (Lt = !1)
              break e
            case 3:
              ;(Ne = s.stateNode.containerInfo), (Lt = !0)
              break e
            case 4:
              ;(Ne = s.stateNode.containerInfo), (Lt = !0)
              break e
          }
          s = s.return
        }
        if (Ne === null) throw Error(H(160))
        j0(o, a, i), (Ne = null), (Lt = !1)
        var l = i.alternate
        l !== null && (l.return = null), (i.return = null)
      } catch (u) {
        ve(i, t, u)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) N0(t, e), (t = t.sibling)
}
function N0(e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((jt(t, e), Gt(e), r & 4)) {
        try {
          vo(3, e, e.return), Cl(3, e)
        } catch (y) {
          ve(e, e.return, y)
        }
        try {
          vo(5, e, e.return)
        } catch (y) {
          ve(e, e.return, y)
        }
      }
      break
    case 1:
      jt(t, e), Gt(e), r & 512 && n !== null && ai(n, n.return)
      break
    case 5:
      if (
        (jt(t, e),
        Gt(e),
        r & 512 && n !== null && ai(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode
        try {
          Po(i, '')
        } catch (y) {
          ve(e, e.return, y)
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          a = n !== null ? n.memoizedProps : o,
          s = e.type,
          l = e.updateQueue
        if (((e.updateQueue = null), l !== null))
          try {
            s === 'input' && o.type === 'radio' && o.name != null && Jv(i, o),
              Sc(s, a)
            var u = Sc(s, o)
            for (a = 0; a < l.length; a += 2) {
              var c = l[a],
                f = l[a + 1]
              c === 'style'
                ? ig(i, f)
                : c === 'dangerouslySetInnerHTML'
                ? ng(i, f)
                : c === 'children'
                ? Po(i, f)
                : gf(i, c, f, u)
            }
            switch (s) {
              case 'input':
                mc(i, o)
                break
              case 'textarea':
                eg(i, o)
                break
              case 'select':
                var d = i._wrapperState.wasMultiple
                i._wrapperState.wasMultiple = !!o.multiple
                var v = o.value
                v != null
                  ? di(i, !!o.multiple, v, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? di(i, !!o.multiple, o.defaultValue, !0)
                      : di(i, !!o.multiple, o.multiple ? [] : '', !1))
            }
            i[Fo] = o
          } catch (y) {
            ve(e, e.return, y)
          }
      }
      break
    case 6:
      if ((jt(t, e), Gt(e), r & 4)) {
        if (e.stateNode === null) throw Error(H(162))
        ;(i = e.stateNode), (o = e.memoizedProps)
        try {
          i.nodeValue = o
        } catch (y) {
          ve(e, e.return, y)
        }
      }
      break
    case 3:
      if (
        (jt(t, e), Gt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Oo(t.containerInfo)
        } catch (y) {
          ve(e, e.return, y)
        }
      break
    case 4:
      jt(t, e), Gt(e)
      break
    case 13:
      jt(t, e),
        Gt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Xf = ye())),
        r & 4 && $h(e)
      break
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((De = (u = De) || c), jt(t, e), (De = u)) : jt(t, e),
        Gt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (U = e, c = e.child; c !== null; ) {
            for (f = U = c; U !== null; ) {
              switch (((d = U), (v = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  vo(4, d, d.return)
                  break
                case 1:
                  ai(d, d.return)
                  var g = d.stateNode
                  if (typeof g.componentWillUnmount == 'function') {
                    ;(r = d), (n = d.return)
                    try {
                      ;(t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount()
                    } catch (y) {
                      ve(r, n, y)
                    }
                  }
                  break
                case 5:
                  ai(d, d.return)
                  break
                case 22:
                  if (d.memoizedState !== null) {
                    zh(f)
                    continue
                  }
              }
              v !== null ? ((v.return = d), (U = v)) : zh(f)
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
                      (s.style.display = rg('display', a)))
              } catch (y) {
                ve(e, e.return, y)
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? '' : f.memoizedProps
              } catch (y) {
                ve(e, e.return, y)
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
      jt(t, e), Gt(e), r & 4 && $h(e)
      break
    case 21:
      break
    default:
      jt(t, e), Gt(e)
  }
}
function Gt(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (M0(n)) {
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
          r.flags & 32 && (Po(i, ''), (r.flags &= -33))
          var o = Fh(e)
          Xc(e, o, i)
          break
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            s = Fh(e)
          Kc(e, s, a)
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
function D2(e, t, n) {
  ;(U = e), O0(e)
}
function O0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; U !== null; ) {
    var i = U,
      o = i.child
    if (i.tag === 22 && r) {
      var a = i.memoizedState !== null || $a
      if (!a) {
        var s = i.alternate,
          l = (s !== null && s.memoizedState !== null) || De
        s = $a
        var u = De
        if ((($a = a), (De = l) && !u))
          for (U = i; U !== null; )
            (a = U),
              (l = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Vh(i)
                : l !== null
                ? ((l.return = a), (U = l))
                : Vh(i)
        for (; o !== null; ) (U = o), O0(o), (o = o.sibling)
        ;(U = i), ($a = s), (De = u)
      }
      Dh(e)
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (U = o)) : Dh(e)
  }
}
function Dh(e) {
  for (; U !== null; ) {
    var t = U
    if (t.flags & 8772) {
      var n = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              De || Cl(5, t)
              break
            case 1:
              var r = t.stateNode
              if (t.flags & 4 && !De)
                if (n === null) r.componentDidMount()
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ot(t.type, n.memoizedProps)
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  )
                }
              var o = t.updateQueue
              o !== null && Ch(t, o, r)
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
                Ch(t, a, n)
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
                    f !== null && Oo(f)
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
        De || (t.flags & 512 && Qc(t))
      } catch (d) {
        ve(t, t.return, d)
      }
    }
    if (t === e) {
      U = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;(n.return = t.return), (U = n)
      break
    }
    U = t.return
  }
}
function zh(e) {
  for (; U !== null; ) {
    var t = U
    if (t === e) {
      U = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;(n.return = t.return), (U = n)
      break
    }
    U = t.return
  }
}
function Vh(e) {
  for (; U !== null; ) {
    var t = U
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            Cl(4, t)
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
            Qc(t)
          } catch (l) {
            ve(t, o, l)
          }
          break
        case 5:
          var a = t.return
          try {
            Qc(t)
          } catch (l) {
            ve(t, a, l)
          }
      }
    } catch (l) {
      ve(t, t.return, l)
    }
    if (t === e) {
      U = null
      break
    }
    var s = t.sibling
    if (s !== null) {
      ;(s.return = t.return), (U = s)
      break
    }
    U = t.return
  }
}
var z2 = Math.ceil,
  Gs = En.ReactCurrentDispatcher,
  Qf = En.ReactCurrentOwner,
  Ct = En.ReactCurrentBatchConfig,
  re = 0,
  ke = null,
  Se = null,
  Le = 0,
  ot = 0,
  si = tr(0),
  Ce = 0,
  Ho = null,
  br = 0,
  _l = 0,
  Kf = 0,
  go = null,
  Qe = null,
  Xf = 0,
  ki = 1 / 0,
  un = null,
  Qs = !1,
  Yc = null,
  Gn = null,
  Da = !1,
  Fn = null,
  Ks = 0,
  yo = 0,
  Zc = null,
  hs = -1,
  ms = 0
function We() {
  return re & 6 ? ye() : hs !== -1 ? hs : (hs = ye())
}
function Qn(e) {
  return e.mode & 1
    ? re & 2 && Le !== 0
      ? Le & -Le
      : C2.transition !== null
      ? (ms === 0 && (ms = vg()), ms)
      : ((e = oe),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Cg(e.type))),
        e)
    : 1
}
function Dt(e, t, n, r) {
  if (50 < yo) throw ((yo = 0), (Zc = null), Error(H(185)))
  aa(e, n, r),
    (!(re & 2) || e !== ke) &&
      (e === ke && (!(re & 2) && (_l |= n), Ce === 4 && Rn(e, Le)),
      Ze(e, r),
      n === 1 && re === 0 && !(t.mode & 1) && ((ki = ye() + 500), Sl && nr()))
}
function Ze(e, t) {
  var n = e.callbackNode
  CS(e, t)
  var r = Os(e, e === ke ? Le : 0)
  if (r === 0)
    n !== null && Xp(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Xp(n), t === 1))
      e.tag === 0 ? x2(Bh.bind(null, e)) : Bg(Bh.bind(null, e)),
        y2(function () {
          !(re & 6) && nr()
        }),
        (n = null)
    else {
      switch (gg(r)) {
        case 1:
          n = xf
          break
        case 4:
          n = hg
          break
        case 16:
          n = Ns
          break
        case 536870912:
          n = mg
          break
        default:
          n = Ns
      }
      n = z0(n, L0.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function L0(e, t) {
  if (((hs = -1), (ms = 0), re & 6)) throw Error(H(327))
  var n = e.callbackNode
  if (vi() && e.callbackNode !== n) return null
  var r = Os(e, e === ke ? Le : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = Xs(e, r)
  else {
    t = r
    var i = re
    re |= 2
    var o = I0()
    ;(ke !== e || Le !== t) && ((un = null), (ki = ye() + 500), mr(e, t))
    do
      try {
        H2()
        break
      } catch (s) {
        R0(e, s)
      }
    while (!0)
    If(),
      (Gs.current = o),
      (re = i),
      Se !== null ? (t = 0) : ((ke = null), (Le = 0), (t = Ce))
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Ec(e)), i !== 0 && ((r = i), (t = Jc(e, i)))), t === 1)
    )
      throw ((n = Ho), mr(e, 0), Rn(e, r), Ze(e, ye()), n)
    if (t === 6) Rn(e, r)
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !V2(i) &&
          ((t = Xs(e, r)),
          t === 2 && ((o = Ec(e)), o !== 0 && ((r = o), (t = Jc(e, o)))),
          t === 1))
      )
        throw ((n = Ho), mr(e, 0), Rn(e, r), Ze(e, ye()), n)
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(H(345))
        case 2:
          or(e, Qe, un)
          break
        case 3:
          if (
            (Rn(e, r), (r & 130023424) === r && ((t = Xf + 500 - ye()), 10 < t))
          ) {
            if (Os(e, 0) !== 0) break
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              We(), (e.pingedLanes |= e.suspendedLanes & i)
              break
            }
            e.timeoutHandle = Lc(or.bind(null, e, Qe, un), t)
            break
          }
          or(e, Qe, un)
          break
        case 4:
          if ((Rn(e, r), (r & 4194240) === r)) break
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var a = 31 - $t(r)
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
                : 1960 * z2(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Lc(or.bind(null, e, Qe, un), r)
            break
          }
          or(e, Qe, un)
          break
        case 5:
          or(e, Qe, un)
          break
        default:
          throw Error(H(329))
      }
    }
  }
  return Ze(e, ye()), e.callbackNode === n ? L0.bind(null, e) : null
}
function Jc(e, t) {
  var n = go
  return (
    e.current.memoizedState.isDehydrated && (mr(e, t).flags |= 256),
    (e = Xs(e, t)),
    e !== 2 && ((t = Qe), (Qe = n), t !== null && ed(t)),
    e
  )
}
function ed(e) {
  Qe === null ? (Qe = e) : Qe.push.apply(Qe, e)
}
function V2(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot
          i = i.value
          try {
            if (!Ht(o(), i)) return !1
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
function Rn(e, t) {
  for (
    t &= ~Kf,
      t &= ~_l,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - $t(t),
      r = 1 << n
    ;(e[n] = -1), (t &= ~r)
  }
}
function Bh(e) {
  if (re & 6) throw Error(H(327))
  vi()
  var t = Os(e, 0)
  if (!(t & 1)) return Ze(e, ye()), null
  var n = Xs(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = Ec(e)
    r !== 0 && ((t = r), (n = Jc(e, r)))
  }
  if (n === 1) throw ((n = Ho), mr(e, 0), Rn(e, t), Ze(e, ye()), n)
  if (n === 6) throw Error(H(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    or(e, Qe, un),
    Ze(e, ye()),
    null
  )
}
function Yf(e, t) {
  var n = re
  re |= 1
  try {
    return e(t)
  } finally {
    ;(re = n), re === 0 && ((ki = ye() + 500), Sl && nr())
  }
}
function xr(e) {
  Fn !== null && Fn.tag === 0 && !(re & 6) && vi()
  var t = re
  re |= 1
  var n = Ct.transition,
    r = oe
  try {
    if (((Ct.transition = null), (oe = 1), e)) return e()
  } finally {
    ;(oe = r), (Ct.transition = n), (re = t), !(re & 6) && nr()
  }
}
function Zf() {
  ;(ot = si.current), de(si)
}
function mr(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), g2(n)), Se !== null))
    for (n = Se.return; n !== null; ) {
      var r = n
      switch ((Of(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && Fs()
          break
        case 3:
          Ei(), de(Xe), de(ze), Vf()
          break
        case 5:
          zf(r)
          break
        case 4:
          Ei()
          break
        case 13:
          de(pe)
          break
        case 19:
          de(pe)
          break
        case 10:
          Af(r.type._context)
          break
        case 22:
        case 23:
          Zf()
      }
      n = n.return
    }
  if (
    ((ke = e),
    (Se = e = Kn(e.current, null)),
    (Le = ot = t),
    (Ce = 0),
    (Ho = null),
    (Kf = _l = br = 0),
    (Qe = go = null),
    ur !== null)
  ) {
    for (t = 0; t < ur.length; t++)
      if (((n = ur[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var i = r.next,
          o = n.pending
        if (o !== null) {
          var a = o.next
          ;(o.next = i), (r.next = a)
        }
        n.pending = r
      }
    ur = null
  }
  return e
}
function R0(e, t) {
  do {
    var n = Se
    try {
      if ((If(), (ds.current = qs), Us)) {
        for (var r = he.memoizedState; r !== null; ) {
          var i = r.queue
          i !== null && (i.pending = null), (r = r.next)
        }
        Us = !1
      }
      if (
        ((Sr = 0),
        (Te = xe = he = null),
        (mo = !1),
        (zo = 0),
        (Qf.current = null),
        n === null || n.return === null)
      ) {
        ;(Ce = 1), (Ho = t), (Se = null)
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
          var v = Mh(a)
          if (v !== null) {
            ;(v.flags &= -257),
              jh(v, a, s, o, t),
              v.mode & 1 && Ph(o, u, t),
              (t = v),
              (l = u)
            var g = t.updateQueue
            if (g === null) {
              var y = new Set()
              y.add(l), (t.updateQueue = y)
            } else g.add(l)
            break e
          } else {
            if (!(t & 1)) {
              Ph(o, u, t), Jf()
              break e
            }
            l = Error(H(426))
          }
        } else if (fe && s.mode & 1) {
          var b = Mh(a)
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256),
              jh(b, a, s, o, t),
              Lf(Ti(l, s))
            break e
          }
        }
        ;(o = l = Ti(l, s)),
          Ce !== 4 && (Ce = 2),
          go === null ? (go = [o]) : go.push(o),
          (o = a)
        do {
          switch (o.tag) {
            case 3:
              ;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
              var m = g0(o, l, t)
              xh(o, m)
              break e
            case 1:
              s = l
              var p = o.type,
                h = o.stateNode
              if (
                !(o.flags & 128) &&
                (typeof p.getDerivedStateFromError == 'function' ||
                  (h !== null &&
                    typeof h.componentDidCatch == 'function' &&
                    (Gn === null || !Gn.has(h))))
              ) {
                ;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
                var S = y0(o, s, t)
                xh(o, S)
                break e
              }
          }
          o = o.return
        } while (o !== null)
      }
      F0(n)
    } catch (x) {
      ;(t = x), Se === n && n !== null && (Se = n = n.return)
      continue
    }
    break
  } while (!0)
}
function I0() {
  var e = Gs.current
  return (Gs.current = qs), e === null ? qs : e
}
function Jf() {
  ;(Ce === 0 || Ce === 3 || Ce === 2) && (Ce = 4),
    ke === null || (!(br & 268435455) && !(_l & 268435455)) || Rn(ke, Le)
}
function Xs(e, t) {
  var n = re
  re |= 2
  var r = I0()
  ;(ke !== e || Le !== t) && ((un = null), mr(e, t))
  do
    try {
      B2()
      break
    } catch (i) {
      R0(e, i)
    }
  while (!0)
  if ((If(), (re = n), (Gs.current = r), Se !== null)) throw Error(H(261))
  return (ke = null), (Le = 0), Ce
}
function B2() {
  for (; Se !== null; ) A0(Se)
}
function H2() {
  for (; Se !== null && !hS(); ) A0(Se)
}
function A0(e) {
  var t = D0(e.alternate, e, ot)
  ;(e.memoizedProps = e.pendingProps),
    t === null ? F0(e) : (Se = t),
    (Qf.current = null)
}
function F0(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = A2(n, t)), n !== null)) {
        ;(n.flags &= 32767), (Se = n)
        return
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(Ce = 6), (Se = null)
        return
      }
    } else if (((n = I2(n, t, ot)), n !== null)) {
      Se = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      Se = t
      return
    }
    Se = t = e
  } while (t !== null)
  Ce === 0 && (Ce = 5)
}
function or(e, t, n) {
  var r = oe,
    i = Ct.transition
  try {
    ;(Ct.transition = null), (oe = 1), W2(e, t, n, r)
  } finally {
    ;(Ct.transition = i), (oe = r)
  }
  return null
}
function W2(e, t, n, r) {
  do vi()
  while (Fn !== null)
  if (re & 6) throw Error(H(327))
  n = e.finishedWork
  var i = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(H(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var o = n.lanes | n.childLanes
  if (
    (_S(e, o),
    e === ke && ((Se = ke = null), (Le = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Da ||
      ((Da = !0),
      z0(Ns, function () {
        return vi(), null
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    ;(o = Ct.transition), (Ct.transition = null)
    var a = oe
    oe = 1
    var s = re
    ;(re |= 4),
      (Qf.current = null),
      $2(e, n),
      N0(n, e),
      c2(Nc),
      (Ls = !!jc),
      (Nc = jc = null),
      (e.current = n),
      D2(n),
      mS(),
      (re = s),
      (oe = a),
      (Ct.transition = o)
  } else e.current = n
  if (
    (Da && ((Da = !1), (Fn = e), (Ks = i)),
    (o = e.pendingLanes),
    o === 0 && (Gn = null),
    yS(n.stateNode),
    Ze(e, ye()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest })
  if (Qs) throw ((Qs = !1), (e = Yc), (Yc = null), e)
  return (
    Ks & 1 && e.tag !== 0 && vi(),
    (o = e.pendingLanes),
    o & 1 ? (e === Zc ? yo++ : ((yo = 0), (Zc = e))) : (yo = 0),
    nr(),
    null
  )
}
function vi() {
  if (Fn !== null) {
    var e = gg(Ks),
      t = Ct.transition,
      n = oe
    try {
      if (((Ct.transition = null), (oe = 16 > e ? 16 : e), Fn === null))
        var r = !1
      else {
        if (((e = Fn), (Fn = null), (Ks = 0), re & 6)) throw Error(H(331))
        var i = re
        for (re |= 4, U = e.current; U !== null; ) {
          var o = U,
            a = o.child
          if (U.flags & 16) {
            var s = o.deletions
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l]
                for (U = u; U !== null; ) {
                  var c = U
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vo(8, c, o)
                  }
                  var f = c.child
                  if (f !== null) (f.return = c), (U = f)
                  else
                    for (; U !== null; ) {
                      c = U
                      var d = c.sibling,
                        v = c.return
                      if ((P0(c), c === u)) {
                        U = null
                        break
                      }
                      if (d !== null) {
                        ;(d.return = v), (U = d)
                        break
                      }
                      U = v
                    }
                }
              }
              var g = o.alternate
              if (g !== null) {
                var y = g.child
                if (y !== null) {
                  g.child = null
                  do {
                    var b = y.sibling
                    ;(y.sibling = null), (y = b)
                  } while (y !== null)
                }
              }
              U = o
            }
          }
          if (o.subtreeFlags & 2064 && a !== null) (a.return = o), (U = a)
          else
            e: for (; U !== null; ) {
              if (((o = U), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    vo(9, o, o.return)
                }
              var m = o.sibling
              if (m !== null) {
                ;(m.return = o.return), (U = m)
                break e
              }
              U = o.return
            }
        }
        var p = e.current
        for (U = p; U !== null; ) {
          a = U
          var h = a.child
          if (a.subtreeFlags & 2064 && h !== null) (h.return = a), (U = h)
          else
            e: for (a = p; U !== null; ) {
              if (((s = U), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Cl(9, s)
                  }
                } catch (x) {
                  ve(s, s.return, x)
                }
              if (s === a) {
                U = null
                break e
              }
              var S = s.sibling
              if (S !== null) {
                ;(S.return = s.return), (U = S)
                break e
              }
              U = s.return
            }
        }
        if (
          ((re = i), nr(), Zt && typeof Zt.onPostCommitFiberRoot == 'function')
        )
          try {
            Zt.onPostCommitFiberRoot(ml, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;(oe = n), (Ct.transition = t)
    }
  }
  return !1
}
function Hh(e, t, n) {
  ;(t = Ti(n, t)),
    (t = g0(e, t, 1)),
    (e = qn(e, t, 1)),
    (t = We()),
    e !== null && (aa(e, 1, t), Ze(e, t))
}
function ve(e, t, n) {
  if (e.tag === 3) Hh(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Hh(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Gn === null || !Gn.has(r)))
        ) {
          ;(e = Ti(n, e)),
            (e = y0(t, e, 1)),
            (t = qn(t, e, 1)),
            (e = We()),
            t !== null && (aa(t, 1, e), Ze(t, e))
          break
        }
      }
      t = t.return
    }
}
function U2(e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = We()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ke === e &&
      (Le & n) === n &&
      (Ce === 4 || (Ce === 3 && (Le & 130023424) === Le && 500 > ye() - Xf)
        ? mr(e, 0)
        : (Kf |= n)),
    Ze(e, t)
}
function $0(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ma), (Ma <<= 1), !(Ma & 130023424) && (Ma = 4194304))
      : (t = 1))
  var n = We()
  ;(e = wn(e, t)), e !== null && (aa(e, t, n), Ze(e, n))
}
function q2(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), $0(e, n)
}
function G2(e, t) {
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
  r !== null && r.delete(t), $0(e, n)
}
var D0
D0 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Xe.current) Ke = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ke = !1), R2(e, t, n)
      Ke = !!(e.flags & 131072)
    }
  else (Ke = !1), fe && t.flags & 1048576 && Hg(t, zs, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      ps(e, t), (e = t.pendingProps)
      var i = xi(t, ze.current)
      mi(t, n), (i = Hf(null, t, r, e, i, n))
      var o = Wf()
      return (
        (t.flags |= 1),
        typeof i == 'object' &&
        i !== null &&
        typeof i.render == 'function' &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ye(r) ? ((o = !0), $s(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            $f(t),
            (i.updater = xl),
            (t.stateNode = i),
            (i._reactInternals = t),
            zc(t, r, e, n),
            (t = Hc(null, t, r, !0, o, n)))
          : ((t.tag = 0), fe && o && Nf(t), Be(null, t, i, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch (
          (ps(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = K2(r)),
          (e = Ot(r, e)),
          i)
        ) {
          case 0:
            t = Bc(null, t, r, e, n)
            break e
          case 1:
            t = Lh(null, t, r, e, n)
            break e
          case 11:
            t = Nh(null, t, r, e, n)
            break e
          case 14:
            t = Oh(null, t, r, Ot(r.type, e), n)
            break e
        }
        throw Error(H(306, r, ''))
      }
      return t
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ot(r, i)),
        Bc(e, t, r, i, n)
      )
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ot(r, i)),
        Lh(e, t, r, i, n)
      )
    case 3:
      e: {
        if ((x0(t), e === null)) throw Error(H(387))
        ;(r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Kg(e, t),
          Hs(t, r, null, n)
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
            ;(i = Ti(Error(H(423)), t)), (t = Rh(e, t, r, n, i))
            break e
          } else if (r !== i) {
            ;(i = Ti(Error(H(424)), t)), (t = Rh(e, t, r, n, i))
            break e
          } else
            for (
              st = Un(t.stateNode.containerInfo.firstChild),
                ct = t,
                fe = !0,
                At = null,
                n = Gg(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((Ci(), r === i)) {
            t = Sn(e, t, n)
            break e
          }
          Be(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        Xg(t),
        e === null && Fc(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (a = i.children),
        Oc(r, i) ? (a = null) : o !== null && Oc(r, o) && (t.flags |= 32),
        b0(e, t),
        Be(e, t, a, n),
        t.child
      )
    case 6:
      return e === null && Fc(t), null
    case 13:
      return C0(e, t, n)
    case 4:
      return (
        Df(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = _i(t, null, r, n)) : Be(e, t, r, n),
        t.child
      )
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ot(r, i)),
        Nh(e, t, r, i, n)
      )
    case 7:
      return Be(e, t, t.pendingProps, n), t.child
    case 8:
      return Be(e, t, t.pendingProps.children, n), t.child
    case 12:
      return Be(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (a = i.value),
          ue(Vs, r._currentValue),
          (r._currentValue = a),
          o !== null)
        )
          if (Ht(o.value, a)) {
            if (o.children === i.children && !Xe.current) {
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
                      ;(l = mn(-1, n & -n)), (l.tag = 2)
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
                      $c(o.return, n, t),
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
                  $c(a, n, t),
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
        Be(e, t, i.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        mi(t, n),
        (i = Tt(i)),
        (r = r(i)),
        (t.flags |= 1),
        Be(e, t, r, n),
        t.child
      )
    case 14:
      return (
        (r = t.type),
        (i = Ot(r, t.pendingProps)),
        (i = Ot(r.type, i)),
        Oh(e, t, r, i, n)
      )
    case 15:
      return w0(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ot(r, i)),
        ps(e, t),
        (t.tag = 1),
        Ye(r) ? ((e = !0), $s(t)) : (e = !1),
        mi(t, n),
        v0(t, r, i),
        zc(t, r, i, n),
        Hc(null, t, r, !0, e, n)
      )
    case 19:
      return _0(e, t, n)
    case 22:
      return S0(e, t, n)
  }
  throw Error(H(156, t.tag))
}
function z0(e, t) {
  return pg(e, t)
}
function Q2(e, t, n, r) {
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
function bt(e, t, n, r) {
  return new Q2(e, t, n, r)
}
function ep(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function K2(e) {
  if (typeof e == 'function') return ep(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === wf)) return 11
    if (e === Sf) return 14
  }
  return 2
}
function Kn(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = bt(e.tag, t, e.key, e.mode)),
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
function vs(e, t, n, r, i, o) {
  var a = 2
  if (((r = e), typeof e == 'function')) ep(e) && (a = 1)
  else if (typeof e == 'string') a = 5
  else
    e: switch (e) {
      case Yr:
        return vr(n.children, i, o, t)
      case yf:
        ;(a = 8), (i |= 8)
        break
      case cc:
        return (e = bt(12, n, t, i | 2)), (e.elementType = cc), (e.lanes = o), e
      case dc:
        return (e = bt(13, n, t, i)), (e.elementType = dc), (e.lanes = o), e
      case fc:
        return (e = bt(19, n, t, i)), (e.elementType = fc), (e.lanes = o), e
      case Xv:
        return El(n, i, o, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Qv:
              a = 10
              break e
            case Kv:
              a = 9
              break e
            case wf:
              a = 11
              break e
            case Sf:
              a = 14
              break e
            case jn:
              ;(a = 16), (r = null)
              break e
          }
        throw Error(H(130, e == null ? e : typeof e, ''))
    }
  return (
    (t = bt(a, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  )
}
function vr(e, t, n, r) {
  return (e = bt(7, e, r, t)), (e.lanes = n), e
}
function El(e, t, n, r) {
  return (
    (e = bt(22, e, r, t)),
    (e.elementType = Xv),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function Tu(e, t, n) {
  return (e = bt(6, e, null, t)), (e.lanes = n), e
}
function ku(e, t, n) {
  return (
    (t = bt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }),
    t
  )
}
function X2(e, t, n, r, i) {
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
    (this.eventTimes = su(0)),
    (this.expirationTimes = su(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = su(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null)
}
function tp(e, t, n, r, i, o, a, s, l) {
  return (
    (e = new X2(e, t, n, s, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = bt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }),
    $f(o),
    e
  )
}
function Y2(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: Xr,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n
  }
}
function V0(e) {
  if (!e) return Yn
  e = e._reactInternals
  e: {
    if (Nr(e) !== e || e.tag !== 1) throw Error(H(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (Ye(t.type)) {
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
    if (Ye(n)) return Vg(e, n, t)
  }
  return t
}
function B0(e, t, n, r, i, o, a, s, l) {
  return (
    (e = tp(n, r, !0, e, i, o, a, s, l)),
    (e.context = V0(null)),
    (n = e.current),
    (r = We()),
    (i = Qn(n)),
    (o = mn(r, i)),
    (o.callback = t ?? null),
    qn(n, o, i),
    (e.current.lanes = i),
    aa(e, i, r),
    Ze(e, r),
    e
  )
}
function Tl(e, t, n, r) {
  var i = t.current,
    o = We(),
    a = Qn(i)
  return (
    (n = V0(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = mn(o, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = qn(i, t, a)),
    e !== null && (Dt(e, i, a, o), cs(e, i, a)),
    a
  )
}
function Ys(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function Wh(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function np(e, t) {
  Wh(e, t), (e = e.alternate) && Wh(e, t)
}
function Z2() {
  return null
}
var H0 =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function rp(e) {
  this._internalRoot = e
}
kl.prototype.render = rp.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(H(409))
  Tl(e, t, null, null)
}
kl.prototype.unmount = rp.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    xr(function () {
      Tl(null, e, null, null)
    }),
      (t[yn] = null)
  }
}
function kl(e) {
  this._internalRoot = e
}
kl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Sg()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < Ln.length && t !== 0 && t < Ln[n].priority; n++);
    Ln.splice(n, 0, e), n === 0 && xg(e)
  }
}
function ip(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function Pl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function Uh() {}
function J2(e, t, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var o = r
      r = function () {
        var u = Ys(a)
        o.call(u)
      }
    }
    var a = B0(t, r, e, 0, null, !1, !1, '', Uh)
    return (
      (e._reactRootContainer = a),
      (e[yn] = a.current),
      Io(e.nodeType === 8 ? e.parentNode : e),
      xr(),
      a
    )
  }
  for (; (i = e.lastChild); ) e.removeChild(i)
  if (typeof r == 'function') {
    var s = r
    r = function () {
      var u = Ys(l)
      s.call(u)
    }
  }
  var l = tp(e, 0, !1, null, null, !1, !1, '', Uh)
  return (
    (e._reactRootContainer = l),
    (e[yn] = l.current),
    Io(e.nodeType === 8 ? e.parentNode : e),
    xr(function () {
      Tl(t, l, n, r)
    }),
    l
  )
}
function Ml(e, t, n, r, i) {
  var o = n._reactRootContainer
  if (o) {
    var a = o
    if (typeof i == 'function') {
      var s = i
      i = function () {
        var l = Ys(a)
        s.call(l)
      }
    }
    Tl(t, a, e, i)
  } else a = J2(n, t, e, i, r)
  return Ys(a)
}
yg = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = oo(t.pendingLanes)
        n !== 0 &&
          (Cf(t, n | 1), Ze(t, ye()), !(re & 6) && ((ki = ye() + 500), nr()))
      }
      break
    case 13:
      xr(function () {
        var r = wn(e, 1)
        if (r !== null) {
          var i = We()
          Dt(r, e, 1, i)
        }
      }),
        np(e, 1)
  }
}
_f = function (e) {
  if (e.tag === 13) {
    var t = wn(e, 134217728)
    if (t !== null) {
      var n = We()
      Dt(t, e, 134217728, n)
    }
    np(e, 134217728)
  }
}
wg = function (e) {
  if (e.tag === 13) {
    var t = Qn(e),
      n = wn(e, t)
    if (n !== null) {
      var r = We()
      Dt(n, e, t, r)
    }
    np(e, t)
  }
}
Sg = function () {
  return oe
}
bg = function (e, t) {
  var n = oe
  try {
    return (oe = e), t()
  } finally {
    oe = n
  }
}
xc = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((mc(e, n), (t = n.name), n.type === 'radio' && t != null)) {
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
            var i = wl(r)
            if (!i) throw Error(H(90))
            Zv(r), mc(r, i)
          }
        }
      }
      break
    case 'textarea':
      eg(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && di(e, !!n.multiple, t, !1)
  }
}
sg = Yf
lg = xr
var eb = { usingClientEntryPoint: !1, Events: [la, ti, wl, og, ag, Yf] },
  Zi = {
    findFiberByHostInstance: lr,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom'
  },
  tb = {
    bundleType: Zi.bundleType,
    version: Zi.version,
    rendererPackageName: Zi.rendererPackageName,
    rendererConfig: Zi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: En.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = dg(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Zi.findFiberByHostInstance || Z2,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426'
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var za = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!za.isDisabled && za.supportsFiber)
    try {
      ;(ml = za.inject(tb)), (Zt = za)
    } catch {}
}
pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eb
pt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!ip(t)) throw Error(H(200))
  return Y2(e, t, null, n)
}
pt.createRoot = function (e, t) {
  if (!ip(e)) throw Error(H(299))
  var n = !1,
    r = '',
    i = H0
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = tp(e, 1, !1, null, null, n, !1, r, i)),
    (e[yn] = t.current),
    Io(e.nodeType === 8 ? e.parentNode : e),
    new rp(t)
  )
}
pt.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(H(188))
      : ((e = Object.keys(e).join(',')), Error(H(268, e)))
  return (e = dg(t)), (e = e === null ? null : e.stateNode), e
}
pt.flushSync = function (e) {
  return xr(e)
}
pt.hydrate = function (e, t, n) {
  if (!Pl(t)) throw Error(H(200))
  return Ml(null, e, t, !0, n)
}
pt.hydrateRoot = function (e, t, n) {
  if (!ip(e)) throw Error(H(405))
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = '',
    a = H0
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = B0(t, null, e, 1, n ?? null, i, !1, o, a)),
    (e[yn] = t.current),
    Io(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i)
  return new kl(t)
}
pt.render = function (e, t, n) {
  if (!Pl(t)) throw Error(H(200))
  return Ml(null, e, t, !1, n)
}
pt.unmountComponentAtNode = function (e) {
  if (!Pl(e)) throw Error(H(40))
  return e._reactRootContainer
    ? (xr(function () {
        Ml(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[yn] = null)
        })
      }),
      !0)
    : !1
}
pt.unstable_batchedUpdates = Yf
pt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Pl(n)) throw Error(H(200))
  if (e == null || e._reactInternals === void 0) throw Error(H(38))
  return Ml(e, t, n, !1, r)
}
pt.version = '18.3.1-next-f1338f8080-20240426'
function W0() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(W0)
    } catch (e) {
      console.error(e)
    }
}
W0(), (Wv.exports = pt)
var op = Wv.exports
const td = cf(op),
  nb = Ov({ __proto__: null, default: td }, [op])
var U0,
  qh = op
;(U0 = qh.createRoot), qh.hydrateRoot
var q0 = { exports: {} },
  G0 = {}
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ca = P
function rb(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var ib = typeof Object.is == 'function' ? Object.is : rb,
  ob = ca.useSyncExternalStore,
  ab = ca.useRef,
  sb = ca.useEffect,
  lb = ca.useMemo,
  ub = ca.useDebugValue
G0.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var o = ab(null)
  if (o.current === null) {
    var a = { hasValue: !1, value: null }
    o.current = a
  } else a = o.current
  o = lb(
    function () {
      function l(v) {
        if (!u) {
          if (((u = !0), (c = v), (v = r(v)), i !== void 0 && a.hasValue)) {
            var g = a.value
            if (i(g, v)) return (f = g)
          }
          return (f = v)
        }
        if (((g = f), ib(c, v))) return g
        var y = r(v)
        return i !== void 0 && i(g, y) ? g : ((c = v), (f = y))
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
  var s = ob(e, o[0], o[1])
  return (
    sb(
      function () {
        ;(a.hasValue = !0), (a.value = s)
      },
      [s]
    ),
    ub(s),
    s
  )
}
q0.exports = G0
var cb = q0.exports,
  lt = 'default' in To ? ne : To,
  Gh = Symbol.for('react-redux-context'),
  Qh = typeof globalThis < 'u' ? globalThis : {}
function db() {
  if (!lt.createContext) return {}
  const e = Qh[Gh] ?? (Qh[Gh] = new Map())
  let t = e.get(lt.createContext)
  return t || ((t = lt.createContext(null)), e.set(lt.createContext, t)), t
}
var Zn = db(),
  fb = () => {
    throw new Error('uSES not initialized!')
  }
function ap(e = Zn) {
  return function () {
    return lt.useContext(e)
  }
}
var Q0 = ap(),
  K0 = fb,
  pb = (e) => {
    K0 = e
  },
  hb = (e, t) => e === t
function mb(e = Zn) {
  const t = e === Zn ? Q0 : ap(e),
    n = (r, i = {}) => {
      const { equalityFn: o = hb, devModeChecks: a = {} } =
          typeof i == 'function' ? { equalityFn: i } : i,
        {
          store: s,
          subscription: l,
          getServerState: u,
          stabilityCheck: c,
          identityFunctionCheck: f
        } = t()
      lt.useRef(!0)
      const d = lt.useCallback(
          {
            [r.name](g) {
              return r(g)
            }
          }[r.name],
          [r, c, a.stabilityCheck]
        ),
        v = K0(l.addNestedSub, s.getState, u || s.getState, d, o)
      return lt.useDebugValue(v), v
    }
  return Object.assign(n, { withTypes: () => n }), n
}
var X0 = mb()
function Y0(e) {
  e()
}
function vb() {
  let e = null,
    t = null
  return {
    clear() {
      ;(e = null), (t = null)
    },
    notify() {
      Y0(() => {
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
var Kh = { notify() {}, get: () => [] }
function gb(e, t) {
  let n,
    r = Kh,
    i = 0,
    o = !1
  function a(y) {
    c()
    const b = r.subscribe(y)
    let m = !1
    return () => {
      m || ((m = !0), b(), f())
    }
  }
  function s() {
    r.notify()
  }
  function l() {
    g.onStateChange && g.onStateChange()
  }
  function u() {
    return o
  }
  function c() {
    i++, n || ((n = e.subscribe(l)), (r = vb()))
  }
  function f() {
    i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = Kh))
  }
  function d() {
    o || ((o = !0), c())
  }
  function v() {
    o && ((o = !1), f())
  }
  const g = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: v,
    getListeners: () => r
  }
  return g
}
var yb =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  wb = typeof navigator < 'u' && navigator.product === 'ReactNative',
  Sb = yb || wb ? lt.useLayoutEffect : lt.useEffect
function Xh(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
}
function wo(e, t) {
  if (Xh(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  const n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (let i = 0; i < n.length; i++)
    if (!Object.prototype.hasOwnProperty.call(t, n[i]) || !Xh(e[n[i]], t[n[i]]))
      return !1
  return !0
}
function bb({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: i = 'once',
  identityFunctionCheck: o = 'once'
}) {
  const a = lt.useMemo(() => {
      const u = gb(e)
      return {
        store: e,
        subscription: u,
        getServerState: r ? () => r : void 0,
        stabilityCheck: i,
        identityFunctionCheck: o
      }
    }, [e, r, i, o]),
    s = lt.useMemo(() => e.getState(), [e])
  Sb(() => {
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
  const l = t || Zn
  return lt.createElement(l.Provider, { value: a }, n)
}
var xb = bb
function Z0(e = Zn) {
  const t = e === Zn ? Q0 : ap(e),
    n = () => {
      const { store: r } = t()
      return r
    }
  return Object.assign(n, { withTypes: () => n }), n
}
var J0 = Z0()
function Cb(e = Zn) {
  const t = e === Zn ? J0 : Z0(e),
    n = () => t().dispatch
  return Object.assign(n, { withTypes: () => n }), n
}
var _b = Cb(),
  Eb = Y0
pb(cb.useSyncExternalStoreWithSelector)
let Tb = { data: '' },
  kb = (e) =>
    typeof window == 'object'
      ? (
          (e ? e.querySelector('#_goober') : window._goober) ||
          Object.assign(
            (e || document.head).appendChild(document.createElement('style')),
            { innerHTML: ' ', id: '_goober' }
          )
        ).firstChild
      : e || Tb,
  Pb = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  Mb = /\/\*[^]*?\*\/|  +/g,
  Yh = /\n+/g,
  In = (e, t) => {
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
                ? In(a, o)
                : o + '{' + In(a, o[1] == 'k' ? '' : t) + '}')
        : typeof a == 'object'
        ? (r += In(
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
          (i += In.p ? In.p(o, a) : o + ':' + a + ';'))
    }
    return n + (t && i ? t + '{' + i + '}' : i) + r
  },
  an = {},
  e1 = (e) => {
    if (typeof e == 'object') {
      let t = ''
      for (let n in e) t += n + e1(e[n])
      return t
    }
    return e
  },
  jb = (e, t, n, r, i) => {
    let o = e1(e),
      a =
        an[o] ||
        (an[o] = ((l) => {
          let u = 0,
            c = 11
          for (; u < l.length; ) c = (101 * c + l.charCodeAt(u++)) >>> 0
          return 'go' + c
        })(o))
    if (!an[a]) {
      let l =
        o !== e
          ? e
          : ((u) => {
              let c,
                f,
                d = [{}]
              for (; (c = Pb.exec(u.replace(Mb, ''))); )
                c[4]
                  ? d.shift()
                  : c[3]
                  ? ((f = c[3].replace(Yh, ' ').trim()),
                    d.unshift((d[0][f] = d[0][f] || {})))
                  : (d[0][c[1]] = c[2].replace(Yh, ' ').trim())
              return d[0]
            })(e)
      an[a] = In(i ? { ['@keyframes ' + a]: l } : l, n ? '' : '.' + a)
    }
    let s = n && an.g ? an.g : null
    return (
      n && (an.g = an[a]),
      ((l, u, c, f) => {
        f
          ? (u.data = u.data.replace(f, l))
          : u.data.indexOf(l) === -1 && (u.data = c ? l + u.data : u.data + l)
      })(an[a], t, r, s),
      a
    )
  },
  Nb = (e, t, n) =>
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
            : In(s, '')
          : s === !1
          ? ''
          : s
      }
      return r + i + (a ?? '')
    }, '')
function jl(e) {
  let t = this || {},
    n = e.call ? e(t.p) : e
  return jb(
    n.unshift
      ? n.raw
        ? Nb(n, [].slice.call(arguments, 1), t.p)
        : n.reduce((r, i) => Object.assign(r, i && i.call ? i(t.p) : i), {})
      : n,
    kb(t.target),
    t.g,
    t.o,
    t.k
  )
}
let t1, nd, rd
jl.bind({ g: 1 })
let bn = jl.bind({ k: 1 })
function Ob(e, t, n, r) {
  ;(In.p = t), (t1 = e), (nd = n), (rd = r)
}
function rr(e, t) {
  let n = this || {}
  return function () {
    let r = arguments
    function i(o, a) {
      let s = Object.assign({}, o),
        l = s.className || i.className
      ;(n.p = Object.assign({ theme: nd && nd() }, s)),
        (n.o = / *go\d+/.test(l)),
        (s.className = jl.apply(n, r) + (l ? ' ' + l : ''))
      let u = e
      return (
        e[0] && ((u = s.as || e), delete s.as), rd && u[0] && rd(s), t1(u, s)
      )
    }
    return i
  }
}
var Lb = (e) => typeof e == 'function',
  Zs = (e, t) => (Lb(e) ? e(t) : e),
  Rb = (() => {
    let e = 0
    return () => (++e).toString()
  })(),
  n1 = (() => {
    let e
    return () => {
      if (e === void 0 && typeof window < 'u') {
        let t = matchMedia('(prefers-reduced-motion: reduce)')
        e = !t || t.matches
      }
      return e
    }
  })(),
  Ib = 20,
  gs = new Map(),
  Ab = 1e3,
  Zh = (e) => {
    if (gs.has(e)) return
    let t = setTimeout(() => {
      gs.delete(e), Or({ type: 4, toastId: e })
    }, Ab)
    gs.set(e, t)
  },
  Fb = (e) => {
    let t = gs.get(e)
    t && clearTimeout(t)
  },
  id = (e, t) => {
    switch (t.type) {
      case 0:
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, Ib) }
      case 1:
        return (
          t.toast.id && Fb(t.toast.id),
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
          ? id(e, { type: 1, toast: n })
          : id(e, { type: 0, toast: n })
      case 3:
        let { toastId: r } = t
        return (
          r
            ? Zh(r)
            : e.toasts.forEach((o) => {
                Zh(o.id)
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
  ys = [],
  ws = { toasts: [], pausedAt: void 0 },
  Or = (e) => {
    ;(ws = id(ws, e)),
      ys.forEach((t) => {
        t(ws)
      })
  },
  $b = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  Db = (e = {}) => {
    let [t, n] = P.useState(ws)
    P.useEffect(
      () => (
        ys.push(n),
        () => {
          let i = ys.indexOf(n)
          i > -1 && ys.splice(i, 1)
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
          $b[i.type],
        style: {
          ...e.style,
          ...((a = e[i.type]) == null ? void 0 : a.style),
          ...i.style
        }
      }
    })
    return { ...t, toasts: r }
  },
  zb = (e, t = 'blank', n) => ({
    createdAt: Date.now(),
    visible: !0,
    type: t,
    ariaProps: { role: 'status', 'aria-live': 'polite' },
    message: e,
    pauseDuration: 0,
    ...n,
    id: (n == null ? void 0 : n.id) || Rb()
  }),
  da = (e) => (t, n) => {
    let r = zb(t, e, n)
    return Or({ type: 2, toast: r }), r.id
  },
  xt = (e, t) => da('blank')(e, t)
xt.error = da('error')
xt.success = da('success')
xt.loading = da('loading')
xt.custom = da('custom')
xt.dismiss = (e) => {
  Or({ type: 3, toastId: e })
}
xt.remove = (e) => Or({ type: 4, toastId: e })
xt.promise = (e, t, n) => {
  let r = xt.loading(t.loading, { ...n, ...(n == null ? void 0 : n.loading) })
  return (
    e
      .then(
        (i) => (
          xt.success(Zs(t.success, i), {
            id: r,
            ...n,
            ...(n == null ? void 0 : n.success)
          }),
          i
        )
      )
      .catch((i) => {
        xt.error(Zs(t.error, i), {
          id: r,
          ...n,
          ...(n == null ? void 0 : n.error)
        })
      }),
    e
  )
}
var Vb = (e, t) => {
    Or({ type: 1, toast: { id: e, height: t } })
  },
  Bb = () => {
    Or({ type: 5, time: Date.now() })
  },
  Hb = (e) => {
    let { toasts: t, pausedAt: n } = Db(e)
    P.useEffect(() => {
      if (n) return
      let o = Date.now(),
        a = t.map((s) => {
          if (s.duration === 1 / 0) return
          let l = (s.duration || 0) + s.pauseDuration - (o - s.createdAt)
          if (l < 0) {
            s.visible && xt.dismiss(s.id)
            return
          }
          return setTimeout(() => xt.dismiss(s.id), l)
        })
      return () => {
        a.forEach((s) => s && clearTimeout(s))
      }
    }, [t, n])
    let r = P.useCallback(() => {
        n && Or({ type: 6, time: Date.now() })
      }, [n]),
      i = P.useCallback(
        (o, a) => {
          let {
              reverseOrder: s = !1,
              gutter: l = 8,
              defaultPosition: u
            } = a || {},
            c = t.filter(
              (v) => (v.position || u) === (o.position || u) && v.height
            ),
            f = c.findIndex((v) => v.id === o.id),
            d = c.filter((v, g) => g < f && v.visible).length
          return c
            .filter((v) => v.visible)
            .slice(...(s ? [d + 1] : [0, d]))
            .reduce((v, g) => v + (g.height || 0) + l, 0)
        },
        [t]
      )
    return {
      toasts: t,
      handlers: {
        updateHeight: Vb,
        startPause: Bb,
        endPause: r,
        calculateOffset: i
      }
    }
  },
  Wb = bn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  Ub = bn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  qb = bn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  Gb = rr('div')`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || '#ff4b4b'};
  position: relative;
  transform: rotate(45deg);

  animation: ${Wb} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Ub} 0.15s ease-out forwards;
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
    animation: ${qb} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  Qb = bn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  Kb = rr('div')`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || '#e0e0e0'};
  border-right-color: ${(e) => e.primary || '#616161'};
  animation: ${Qb} 1s linear infinite;
`,
  Xb = bn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  Yb = bn`
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
  Zb = rr('div')`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || '#61d345'};
  position: relative;
  transform: rotate(45deg);

  animation: ${Xb} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Yb} 0.2s ease-out forwards;
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
  Jb = rr('div')`
  position: absolute;
`,
  ex = rr('div')`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  tx = bn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  nx = rr('div')`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${tx} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  rx = ({ toast: e }) => {
    let { icon: t, type: n, iconTheme: r } = e
    return t !== void 0
      ? typeof t == 'string'
        ? P.createElement(nx, null, t)
        : t
      : n === 'blank'
      ? null
      : P.createElement(
          ex,
          null,
          P.createElement(Kb, { ...r }),
          n !== 'loading' &&
            P.createElement(
              Jb,
              null,
              n === 'error'
                ? P.createElement(Gb, { ...r })
                : P.createElement(Zb, { ...r })
            )
        )
  },
  ix = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  ox = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`,
  ax = '0%{opacity:0;} 100%{opacity:1;}',
  sx = '0%{opacity:1;} 100%{opacity:0;}',
  lx = rr('div')`
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
  ux = rr('div')`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  cx = (e, t) => {
    let n = e.includes('top') ? 1 : -1,
      [r, i] = n1() ? [ax, sx] : [ix(n), ox(n)]
    return {
      animation: t
        ? `${bn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${bn(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`
    }
  },
  dx = P.memo(({ toast: e, position: t, style: n, children: r }) => {
    let i = e.height
        ? cx(e.position || t || 'top-center', e.visible)
        : { opacity: 0 },
      o = P.createElement(rx, { toast: e }),
      a = P.createElement(ux, { ...e.ariaProps }, Zs(e.message, e))
    return P.createElement(
      lx,
      { className: e.className, style: { ...i, ...n, ...e.style } },
      typeof r == 'function'
        ? r({ icon: o, message: a })
        : P.createElement(P.Fragment, null, o, a)
    )
  })
Ob(P.createElement)
var fx = ({
    id: e,
    className: t,
    style: n,
    onHeightUpdate: r,
    children: i
  }) => {
    let o = P.useCallback(
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
    return P.createElement('div', { ref: o, className: t, style: n }, i)
  },
  px = (e, t) => {
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
      transition: n1() ? void 0 : 'all 230ms cubic-bezier(.21,1.02,.73,1)',
      transform: `translateY(${t * (n ? 1 : -1)}px)`,
      ...r,
      ...i
    }
  },
  hx = jl`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  Va = 16,
  mx = ({
    reverseOrder: e,
    position: t = 'top-center',
    toastOptions: n,
    gutter: r,
    children: i,
    containerStyle: o,
    containerClassName: a
  }) => {
    let { toasts: s, handlers: l } = Hb(n)
    return P.createElement(
      'div',
      {
        style: {
          position: 'fixed',
          zIndex: 9999,
          top: Va,
          left: Va,
          right: Va,
          bottom: Va,
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
          d = px(c, f)
        return P.createElement(
          fx,
          {
            id: u.id,
            key: u.id,
            onHeightUpdate: l.updateHeight,
            className: u.visible ? hx : '',
            style: d
          },
          u.type === 'custom'
            ? Zs(u.message, u)
            : i
            ? i(u)
            : P.createElement(dx, { toast: u, position: c })
        )
      })
    )
  }
const vx = '_opt_search_order_container_1t1c4_3',
  gx = '_container_1t1c4_3',
  yx = '_loginComponent_1t1c4_17',
  wx = '_loginForm_1t1c4_39',
  Sx = '_formContainer_1t1c4_53',
  bx = '_title_1t1c4_63',
  xx = '_subtitle_1t1c4_73',
  Cx = '_form_1t1c4_53',
  _x = '_inputGroup_1t1c4_91',
  Ex = '_inputField_1t1c4_99',
  Tx = '_checkbox_1t1c4_131',
  kx = '_buttonGroup_1t1c4_141',
  Px = '_signInButton_1t1c4_149',
  Mx = '_loginBanner_1t1c4_183',
  jx = '_bannerImage_1t1c4_199',
  Ve = {
    opt_search_order_container: vx,
    container: gx,
    loginComponent: yx,
    loginForm: wx,
    formContainer: Sx,
    title: bx,
    subtitle: xx,
    form: Cx,
    inputGroup: _x,
    inputField: Ex,
    checkbox: Tx,
    buttonGroup: kx,
    signInButton: Px,
    loginBanner: Mx,
    bannerImage: jx
  },
  Nx = '/assets/banner-ClNMuXSw.svg',
  Ox = () =>
    w.jsx('div', {
      className: Ve.opt_search_order_container,
      children: w.jsxs('div', {
        className: Ve.loginComponent,
        children: [
          w.jsx('div', {
            className: Ve.loginForm,
            children: w.jsxs('div', {
              className: Ve.formContainer,
              children: [
                w.jsx('h1', { className: Ve.title, children: 'Edit order' }),
                w.jsx('small', {
                  className: Ve.subtitle,
                  children:
                    'Enter your order number and Email of Phone to find your order.'
                }),
                w.jsxs('form', {
                  className: Ve.form,
                  children: [
                    w.jsx('div', {
                      className: Ve.inputGroup,
                      children: w.jsx('input', {
                        type: 'text',
                        placeholder: 'Order number',
                        className: Ve.inputField
                      })
                    }),
                    w.jsx('div', {
                      className: Ve.inputGroup,
                      children: w.jsx('input', {
                        type: 'email',
                        placeholder: 'Enter your email',
                        className: Ve.inputField
                      })
                    }),
                    w.jsx('div', {
                      className: Ve.buttonGroup,
                      children: w.jsx('button', {
                        className: Ve.signInButton,
                        children: 'Sign in'
                      })
                    })
                  ]
                })
              ]
            })
          }),
          w.jsx('div', {
            className: Ve.loginBanner,
            children: w.jsx('img', {
              className: Ve.bannerImage,
              src: Nx,
              alt: 'Login Banner'
            })
          })
        ]
      })
    }),
  Lx = '_opt_order_edit_container_1d62i_1',
  Rx = '_header_1d62i_13',
  Ix = '_setting_1d62i_39',
  Ax = '_content_1d62i_61',
  Fx = '_orderSummary_1d62i_77',
  $x = '_orderDetails_1d62i_79',
  Dx = '_productSection_1d62i_87',
  zx = '_productLabel_1d62i_97',
  Vx = '_settings_box_1d62i_109',
  Bx = '_settings_icon_1d62i_125',
  Hx = '_settings_label_1d62i_151',
  Wx = '_orderDetailsItem_1d62i_187',
  Ux = '_orderDetailsItemTitle_1d62i_195',
  qx = '_information_1d62i_207',
  Gx = '_orderItems_1d62i_263',
  Qx = '_orderItem_1d62i_263',
  Kx = '_itemDetails_1d62i_309',
  Xx = '_priceDetails_1d62i_345',
  Yx = '_taxSection_1d62i_347',
  Zx = '_paymentDetails_1d62i_349',
  Jx = '_shippingSection_1d62i_379',
  eC = '_shippingOption_1d62i_399',
  tC = '_saveButton_1d62i_441',
  nC = '_productCard_1d62i_503',
  rC = '_productImage_1d62i_523',
  iC = '_productContent_1d62i_547',
  oC = '_title_1d62i_553',
  aC = '_description_1d62i_569',
  sC = '_price_1d62i_345',
  lC = '_addToCartBtn_1d62i_593',
  uC = '_modal_main_container_1d62i_629',
  G = {
    opt_order_edit_container: Lx,
    header: Rx,
    setting: Ix,
    content: Ax,
    orderSummary: Fx,
    orderDetails: $x,
    productSection: Dx,
    productLabel: zx,
    settings_box: Vx,
    settings_icon: Bx,
    settings_label: Hx,
    orderDetailsItem: Wx,
    orderDetailsItemTitle: Ux,
    information: qx,
    orderItems: Gx,
    orderItem: Qx,
    itemDetails: Kx,
    priceDetails: Xx,
    taxSection: Yx,
    paymentDetails: Zx,
    shippingSection: Jx,
    shippingOption: eC,
    saveButton: tC,
    productCard: nC,
    productImage: rC,
    productContent: iC,
    title: oC,
    description: aC,
    price: sC,
    addToCartBtn: lC,
    modal_main_container: uC
  },
  cC = ({
    width: e = '20px',
    height: t = '20px',
    stroke: n = 'currentColor',
    fill: r = 'none'
  }) =>
    w.jsxs('svg', {
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
        w.jsx('path', { d: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' }),
        w.jsx('circle', { cx: '12', cy: '10', r: '3' })
      ]
    }),
  Jh = ({
    width: e = '20px',
    height: t = '20px',
    stroke: n = 'currentColor',
    fill: r = 'none'
  }) =>
    w.jsxs('svg', {
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
        w.jsx('polyline', { points: '23 7 23 1 17 1' }),
        w.jsx('line', { x1: '16', y1: '8', x2: '23', y2: '1' }),
        w.jsx('path', {
          d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'
        })
      ]
    }),
  dC = ({
    width: e = '20px',
    height: t = '20px',
    stroke: n = 'currentColor',
    fill: r = 'currentColor'
  }) =>
    w.jsxs('svg', {
      stroke: n,
      fill: r,
      strokeWidth: '0',
      version: '1.1',
      viewBox: '0 0 17 17',
      height: t,
      width: e,
      xmlns: 'http://www.w3.org/2000/svg',
      children: [
        w.jsx('g', {}),
        w.jsx('path', { d: 'M16 9h-7v7h-1v-7h-7v-1h7v-7h1v7h7v1z' })
      ]
    }),
  fC = ({
    width: e = '20px',
    height: t = '20px',
    stroke: n = 'currentColor',
    fill: r = 'none'
  }) =>
    w.jsxs('svg', {
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
        w.jsx('path', {
          d: 'M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5'
        }),
        w.jsx('polyline', { points: '14 2 14 8 20 8' }),
        w.jsx('path', {
          d: 'M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z'
        })
      ]
    }),
  pC = ({
    width: e = '20px',
    height: t = '20px',
    stroke: n = 'currentColor',
    fill: r = 'none'
  }) =>
    w.jsxs('svg', {
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
        w.jsx('polyline', { points: '17 1 21 5 17 9' }),
        w.jsx('path', { d: 'M3 11V9a4 4 0 0 1 4-4h14' }),
        w.jsx('polyline', { points: '7 23 3 19 7 15' }),
        w.jsx('path', { d: 'M21 13v2a4 4 0 0 1-4 4H3' })
      ]
    }),
  hC = ({
    width: e = '20px',
    height: t = '20px',
    stroke: n = 'currentColor',
    fill: r = 'currentColor'
  }) =>
    w.jsx('svg', {
      stroke: n,
      fill: r,
      strokeWidth: '0',
      viewBox: '0 0 16 16',
      height: t,
      width: e,
      xmlns: 'http://www.w3.org/2000/svg',
      children: w.jsx('path', {
        d: 'M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z'
      })
    }),
  mC = ({
    width: e = '20px',
    height: t = '20px',
    stroke: n = 'currentColor',
    fill: r = 'currentColor'
  }) =>
    w.jsxs('svg', {
      stroke: n,
      fill: r,
      strokeWidth: '0',
      viewBox: '0 0 24 24',
      height: t,
      width: e,
      xmlns: 'http://www.w3.org/2000/svg',
      children: [
        w.jsx('path', { fill: 'none', d: 'M0 0h24v24H0z' }),
        w.jsx('path', {
          d: 'M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z'
        })
      ]
    }),
  em = ({
    width: e = '20px',
    height: t = '20px',
    stroke: n = 'currentColor',
    fill: r = 'currentColor'
  }) =>
    w.jsxs('svg', {
      stroke: n,
      fill: r,
      strokeWidth: '0',
      viewBox: '0 0 16 16',
      height: t,
      width: e,
      xmlns: 'http://www.w3.org/2000/svg',
      children: [
        w.jsx('path', {
          d: 'M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293z'
        }),
        w.jsx('path', {
          d: 'M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z'
        })
      ]
    })
function tm(e) {
  return (
    e !== null &&
    typeof e == 'object' &&
    'constructor' in e &&
    e.constructor === Object
  )
}
function sp(e, t) {
  e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach((n) => {
      typeof e[n] > 'u'
        ? (e[n] = t[n])
        : tm(t[n]) && tm(e[n]) && Object.keys(t[n]).length > 0 && sp(e[n], t[n])
    })
}
const r1 = {
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
function vn() {
  const e = typeof document < 'u' ? document : {}
  return sp(e, r1), e
}
const vC = {
  document: r1,
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
function mt() {
  const e = typeof window < 'u' ? window : {}
  return sp(e, vC), e
}
function gC(e) {
  return (
    e === void 0 && (e = ''),
    e
      .trim()
      .split(' ')
      .filter((t) => !!t.trim())
  )
}
function yC(e) {
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
function od(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t)
}
function Js() {
  return Date.now()
}
function wC(e) {
  const t = mt()
  let n
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  )
}
function SC(e, t) {
  t === void 0 && (t = 'x')
  const n = mt()
  let r, i, o
  const a = wC(e)
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
function Ba(e) {
  return (
    typeof e == 'object' &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === 'Object'
  )
}
function bC(e) {
  return typeof window < 'u' && typeof window.HTMLElement < 'u'
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11)
}
function at() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ['__proto__', 'constructor', 'prototype']
  for (let n = 1; n < arguments.length; n += 1) {
    const r = n < 0 || arguments.length <= n ? void 0 : arguments[n]
    if (r != null && !bC(r)) {
      const i = Object.keys(Object(r)).filter((o) => t.indexOf(o) < 0)
      for (let o = 0, a = i.length; o < a; o += 1) {
        const s = i[o],
          l = Object.getOwnPropertyDescriptor(r, s)
        l !== void 0 &&
          l.enumerable &&
          (Ba(e[s]) && Ba(r[s])
            ? r[s].__swiper__
              ? (e[s] = r[s])
              : at(e[s], r[s])
            : !Ba(e[s]) && Ba(r[s])
            ? ((e[s] = {}), r[s].__swiper__ ? (e[s] = r[s]) : at(e[s], r[s]))
            : (e[s] = r[s]))
      }
    }
  }
  return e
}
function Ha(e, t, n) {
  e.style.setProperty(t, n)
}
function i1(e) {
  let { swiper: t, targetPosition: n, side: r } = e
  const i = mt(),
    o = -t.translate
  let a = null,
    s
  const l = t.params.speed
  ;(t.wrapperEl.style.scrollSnapType = 'none'),
    i.cancelAnimationFrame(t.cssModeFrameID)
  const u = n > o ? 'next' : 'prev',
    c = (d, v) => (u === 'next' && d >= v) || (u === 'prev' && d <= v),
    f = () => {
      ;(s = new Date().getTime()), a === null && (a = s)
      const d = Math.max(Math.min((s - a) / l, 1), 0),
        v = 0.5 - Math.cos(d * Math.PI) / 2
      let g = o + v * (n - o)
      if ((c(g, n) && (g = n), t.wrapperEl.scrollTo({ [r]: g }), c(g, n))) {
        ;(t.wrapperEl.style.overflow = 'hidden'),
          (t.wrapperEl.style.scrollSnapType = ''),
          setTimeout(() => {
            ;(t.wrapperEl.style.overflow = ''), t.wrapperEl.scrollTo({ [r]: g })
          }),
          i.cancelAnimationFrame(t.cssModeFrameID)
        return
      }
      t.cssModeFrameID = i.requestAnimationFrame(f)
    }
  f()
}
function hn(e, t) {
  t === void 0 && (t = '')
  const n = [...e.children]
  return (
    e instanceof HTMLSlotElement && n.push(...e.assignedElements()),
    t ? n.filter((r) => r.matches(t)) : n
  )
}
function xC(e, t) {
  const n = t.contains(e)
  return !n && t instanceof HTMLSlotElement
    ? [...t.assignedElements()].includes(e)
    : n
}
function el(e) {
  try {
    console.warn(e)
    return
  } catch {}
}
function ad(e, t) {
  t === void 0 && (t = [])
  const n = document.createElement(e)
  return n.classList.add(...(Array.isArray(t) ? t : gC(t))), n
}
function CC(e, t) {
  const n = []
  for (; e.previousElementSibling; ) {
    const r = e.previousElementSibling
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r)
  }
  return n
}
function _C(e, t) {
  const n = []
  for (; e.nextElementSibling; ) {
    const r = e.nextElementSibling
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r)
  }
  return n
}
function $n(e, t) {
  return mt().getComputedStyle(e, null).getPropertyValue(t)
}
function nm(e) {
  let t = e,
    n
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; ) t.nodeType === 1 && (n += 1)
    return n
  }
}
function EC(e, t) {
  const n = []
  let r = e.parentElement
  for (; r; ) n.push(r), (r = r.parentElement)
  return n
}
function rm(e, t, n) {
  const r = mt()
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
let Pu
function TC() {
  const e = mt(),
    t = vn()
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
function o1() {
  return Pu || (Pu = TC()), Pu
}
let Mu
function kC(e) {
  let { userAgent: t } = e === void 0 ? {} : e
  const n = o1(),
    r = mt(),
    i = r.navigator.platform,
    o = t || r.navigator.userAgent,
    a = { ios: !1, android: !1 },
    s = r.screen.width,
    l = r.screen.height,
    u = o.match(/(Android);?[\s\/]+([\d.]+)?/)
  let c = o.match(/(iPad).*OS\s([\d_]+)/)
  const f = o.match(/(iPod)(.*OS\s([\d_]+))?/),
    d = !c && o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    v = i === 'Win32'
  let g = i === 'MacIntel'
  const y = [
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
      g &&
      n.touch &&
      y.indexOf(`${s}x${l}`) >= 0 &&
      ((c = o.match(/(Version)\/([\d.]+)/)),
      c || (c = [0, 1, '13_0_0']),
      (g = !1)),
    u && !v && ((a.os = 'android'), (a.android = !0)),
    (c || d || f) && ((a.os = 'ios'), (a.ios = !0)),
    a
  )
}
function a1(e) {
  return e === void 0 && (e = {}), Mu || (Mu = kC(e)), Mu
}
let ju
function PC() {
  const e = mt(),
    t = a1()
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
function MC() {
  return ju || (ju = PC()), ju
}
function jC(e) {
  let { swiper: t, on: n, emit: r } = e
  const i = mt()
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
            const { width: d, height: v } = t
            let g = d,
              y = v
            f.forEach((b) => {
              let { contentBoxSize: m, contentRect: p, target: h } = b
              ;(h && h !== t.el) ||
                ((g = p ? p.width : (m[0] || m).inlineSize),
                (y = p ? p.height : (m[0] || m).blockSize))
            }),
              (g !== d || y !== v) && s()
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
function NC(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e
  const o = [],
    a = mt(),
    s = function (c, f) {
      f === void 0 && (f = {})
      const d = a.MutationObserver || a.WebkitMutationObserver,
        v = new d((g) => {
          if (t.__preventObserver__) return
          if (g.length === 1) {
            i('observerUpdate', g[0])
            return
          }
          const y = function () {
            i('observerUpdate', g[0])
          }
          a.requestAnimationFrame
            ? a.requestAnimationFrame(y)
            : a.setTimeout(y, 0)
        })
      v.observe(c, {
        attributes: typeof f.attributes > 'u' ? !0 : f.attributes,
        childList: t.isElement || (typeof f.childList > 'u' ? !0 : f).childList,
        characterData: typeof f.characterData > 'u' ? !0 : f.characterData
      }),
        o.push(v)
    },
    l = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const c = EC(t.hostEl)
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
var OC = {
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
function LC() {
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
        parseInt($n(r, 'padding-left') || 0, 10) -
        parseInt($n(r, 'padding-right') || 0, 10)),
      (n =
        n -
        parseInt($n(r, 'padding-top') || 0, 10) -
        parseInt($n(r, 'padding-bottom') || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, { width: t, height: n, size: e.isHorizontal() ? t : n }))
}
function RC() {
  const e = this
  function t(k, M) {
    return parseFloat(k.getPropertyValue(e.getDirectionLabel(M)) || 0)
  }
  const n = e.params,
    { wrapperEl: r, slidesEl: i, size: o, rtlTranslate: a, wrongRTL: s } = e,
    l = e.virtual && n.virtual.enabled,
    u = l ? e.virtual.slides.length : e.slides.length,
    c = hn(i, `.${e.params.slideClass}, swiper-slide`),
    f = l ? e.virtual.slides.length : c.length
  let d = []
  const v = [],
    g = []
  let y = n.slidesOffsetBefore
  typeof y == 'function' && (y = n.slidesOffsetBefore.call(e))
  let b = n.slidesOffsetAfter
  typeof b == 'function' && (b = n.slidesOffsetAfter.call(e))
  const m = e.snapGrid.length,
    p = e.slidesGrid.length
  let h = n.spaceBetween,
    S = -y,
    x = 0,
    _ = 0
  if (typeof o > 'u') return
  typeof h == 'string' && h.indexOf('%') >= 0
    ? (h = (parseFloat(h.replace('%', '')) / 100) * o)
    : typeof h == 'string' && (h = parseFloat(h)),
    (e.virtualSize = -h),
    c.forEach((k) => {
      a ? (k.style.marginLeft = '') : (k.style.marginRight = ''),
        (k.style.marginBottom = ''),
        (k.style.marginTop = '')
    }),
    n.centeredSlides &&
      n.cssMode &&
      (Ha(r, '--swiper-centered-offset-before', ''),
      Ha(r, '--swiper-centered-offset-after', ''))
  const C = n.grid && n.grid.rows > 1 && e.grid
  C ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides()
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
      C && e.grid.updateSlide(k, M, c),
      !(c[k] && $n(M, 'display') === 'none'))
    ) {
      if (n.slidesPerView === 'auto') {
        T && (c[k].style[e.getDirectionLabel('width')] = '')
        const L = getComputedStyle(M),
          O = M.style.transform,
          R = M.style.webkitTransform
        if (
          (O && (M.style.transform = 'none'),
          R && (M.style.webkitTransform = 'none'),
          n.roundLengths)
        )
          E = e.isHorizontal() ? rm(M, 'width') : rm(M, 'height')
        else {
          const z = t(L, 'width'),
            I = t(L, 'padding-left'),
            A = t(L, 'padding-right'),
            j = t(L, 'margin-left'),
            F = t(L, 'margin-right'),
            $ = L.getPropertyValue('box-sizing')
          if ($ && $ === 'border-box') E = z + j + F
          else {
            const { clientWidth: V, offsetWidth: W } = M
            E = z + I + A + j + F + (W - V)
          }
        }
        O && (M.style.transform = O),
          R && (M.style.webkitTransform = R),
          n.roundLengths && (E = Math.floor(E))
      } else
        (E = (o - (n.slidesPerView - 1) * h) / n.slidesPerView),
          n.roundLengths && (E = Math.floor(E)),
          c[k] && (c[k].style[e.getDirectionLabel('width')] = `${E}px`)
      c[k] && (c[k].swiperSlideSize = E),
        g.push(E),
        n.centeredSlides
          ? ((S = S + E / 2 + x / 2 + h),
            x === 0 && k !== 0 && (S = S - o / 2 - h),
            k === 0 && (S = S - o / 2 - h),
            Math.abs(S) < 1 / 1e3 && (S = 0),
            n.roundLengths && (S = Math.floor(S)),
            _ % n.slidesPerGroup === 0 && d.push(S),
            v.push(S))
          : (n.roundLengths && (S = Math.floor(S)),
            (_ - Math.min(e.params.slidesPerGroupSkip, _)) %
              e.params.slidesPerGroup ===
              0 && d.push(S),
            v.push(S),
            (S = S + E + h)),
        (e.virtualSize += E + h),
        (x = E),
        (_ += 1)
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, o) + b),
    a &&
      s &&
      (n.effect === 'slide' || n.effect === 'coverflow') &&
      (r.style.width = `${e.virtualSize + h}px`),
    n.setWrapperSize &&
      (r.style[e.getDirectionLabel('width')] = `${e.virtualSize + h}px`),
    C && e.grid.updateWrapperSize(E, d),
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
    const k = g[0] + h
    if (n.slidesPerGroup > 1) {
      const M = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup
        ),
        L = k * n.slidesPerGroup
      for (let O = 0; O < M; O += 1) d.push(d[d.length - 1] + L)
    }
    for (let M = 0; M < e.virtual.slidesBefore + e.virtual.slidesAfter; M += 1)
      n.slidesPerGroup === 1 && d.push(d[d.length - 1] + k),
        v.push(v[v.length - 1] + k),
        (e.virtualSize += k)
  }
  if ((d.length === 0 && (d = [0]), h !== 0)) {
    const k =
      e.isHorizontal() && a ? 'marginLeft' : e.getDirectionLabel('marginRight')
    c.filter((M, L) =>
      !n.cssMode || n.loop ? !0 : L !== c.length - 1
    ).forEach((M) => {
      M.style[k] = `${h}px`
    })
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let k = 0
    g.forEach((L) => {
      k += L + (h || 0)
    }),
      (k -= h)
    const M = k > o ? k - o : 0
    d = d.map((L) => (L <= 0 ? -y : L > M ? M + b : L))
  }
  if (n.centerInsufficientSlides) {
    let k = 0
    g.forEach((L) => {
      k += L + (h || 0)
    }),
      (k -= h)
    const M = (n.slidesOffsetBefore || 0) + (n.slidesOffsetAfter || 0)
    if (k + M < o) {
      const L = (o - k - M) / 2
      d.forEach((O, R) => {
        d[R] = O - L
      }),
        v.forEach((O, R) => {
          v[R] = O + L
        })
    }
  }
  if (
    (Object.assign(e, {
      slides: c,
      snapGrid: d,
      slidesGrid: v,
      slidesSizesGrid: g
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    Ha(r, '--swiper-centered-offset-before', `${-d[0]}px`),
      Ha(
        r,
        '--swiper-centered-offset-after',
        `${e.size / 2 - g[g.length - 1] / 2}px`
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
    v.length !== p && e.emit('slidesGridLengthChange'),
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
function IC(e) {
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
function AC() {
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
const im = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n)
}
function FC(e) {
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
      v = -(a - c),
      g = v + t.slidesSizesGrid[l],
      y = v >= 0 && v <= t.size - t.slidesSizesGrid[l],
      b =
        (v >= 0 && v < t.size - 1) ||
        (g > 1 && g <= t.size) ||
        (v <= 0 && g >= t.size)
    b && (t.visibleSlides.push(u), t.visibleSlidesIndexes.push(l)),
      im(u, b, n.slideVisibleClass),
      im(u, y, n.slideFullyVisibleClass),
      (u.progress = i ? -f : f),
      (u.originalProgress = i ? -d : d)
  }
}
function $C(e) {
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
      v = t.slidesGrid[f],
      g = t.slidesGrid[t.slidesGrid.length - 1],
      y = Math.abs(e)
    y >= d ? (s = (y - d) / g) : (s = (y + g - v) / g), s > 1 && (s -= 1)
  }
  Object.assign(t, { progress: i, progressLoop: s, isBeginning: o, isEnd: a }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    o && !l && t.emit('reachBeginning toEdge'),
    a && !u && t.emit('reachEnd toEdge'),
    ((l && !o) || (u && !a)) && t.emit('fromEdge'),
    t.emit('progress', i)
}
const Nu = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n)
}
function DC() {
  const e = this,
    { slides: t, params: n, slidesEl: r, activeIndex: i } = e,
    o = e.virtual && n.virtual.enabled,
    a = e.grid && n.grid && n.grid.rows > 1,
    s = (f) => hn(r, `.${n.slideClass}${f}, swiper-slide${f}`)[0]
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
      ((c = _C(l, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !c && (c = t[0]),
      (u = CC(l, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !u === 0 && (u = t[t.length - 1]))),
    t.forEach((f) => {
      Nu(f, f === l, n.slideActiveClass),
        Nu(f, f === c, n.slideNextClass),
        Nu(f, f === u, n.slidePrevClass)
    }),
    e.emitSlidesClasses()
}
const Ss = (e, t) => {
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
  Ou = (e, t) => {
    if (!e.slides[t]) return
    const n = e.slides[t].querySelector('[loading="lazy"]')
    n && n.removeAttribute('loading')
  },
  sd = (e) => {
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
          s.includes(l.column) && Ou(e, u)
        })
      return
    }
    const o = i + r - 1
    if (e.params.rewind || e.params.loop)
      for (let a = i - t; a <= o + t; a += 1) {
        const s = ((a % n) + n) % n
        ;(s < i || s > o) && Ou(e, s)
      }
    else
      for (let a = Math.max(i - t, 0); a <= Math.min(o + t, n - 1); a += 1)
        a !== i && (a > o || a < i) && Ou(e, a)
  }
function zC(e) {
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
function VC(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: r, params: i, activeIndex: o, realIndex: a, snapIndex: s } = t
  let l = e,
    u
  const c = (v) => {
    let g = v - t.virtual.slidesBefore
    return (
      g < 0 && (g = t.virtual.slides.length + g),
      g >= t.virtual.slides.length && (g -= t.virtual.slides.length),
      g
    )
  }
  if ((typeof l > 'u' && (l = zC(t)), r.indexOf(n) >= 0)) u = r.indexOf(n)
  else {
    const v = Math.min(i.slidesPerGroupSkip, l)
    u = v + Math.floor((l - v) / i.slidesPerGroup)
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
    const v = t.slides.filter((y) => y.column === l)[0]
    let g = parseInt(v.getAttribute('data-swiper-slide-index'), 10)
    Number.isNaN(g) && (g = Math.max(t.slides.indexOf(v), 0)),
      (d = Math.floor(g / i.grid.rows))
  } else if (t.slides[l]) {
    const v = t.slides[l].getAttribute('data-swiper-slide-index')
    v ? (d = parseInt(v, 10)) : (d = l)
  } else d = l
  Object.assign(t, {
    previousSnapIndex: s,
    snapIndex: u,
    previousRealIndex: a,
    realIndex: d,
    previousIndex: o,
    activeIndex: l
  }),
    t.initialized && sd(t),
    t.emit('activeIndexChange'),
    t.emit('snapIndexChange'),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (a !== d && t.emit('realIndexChange'), t.emit('slideChange'))
}
function BC(e, t) {
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
var HC = {
  updateSize: LC,
  updateSlides: RC,
  updateAutoHeight: IC,
  updateSlidesOffset: AC,
  updateSlidesProgress: FC,
  updateProgress: $C,
  updateSlidesClasses: DC,
  updateActiveIndex: VC,
  updateClickedSlide: BC
}
function WC(e) {
  e === void 0 && (e = this.isHorizontal() ? 'x' : 'y')
  const t = this,
    { params: n, rtlTranslate: r, translate: i, wrapperEl: o } = t
  if (n.virtualTranslate) return r ? -i : i
  if (n.cssMode) return i
  let a = SC(o, e)
  return (a += t.cssOverflowAdjustment()), r && (a = -a), a || 0
}
function UC(e, t) {
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
function qC() {
  return -this.snapGrid[0]
}
function GC() {
  return -this.snapGrid[this.snapGrid.length - 1]
}
function QC(e, t, n, r, i) {
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
          i1({ swiper: o, targetPosition: -c, side: f ? 'left' : 'top' }), !0
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
var KC = {
  getTranslate: WC,
  setTranslate: UC,
  minTranslate: qC,
  maxTranslate: GC,
  translateTo: QC
}
function XC(e, t) {
  const n = this
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? '0ms' : '')),
    n.emit('setTransition', e, t)
}
function s1(e) {
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
function YC(e, t) {
  e === void 0 && (e = !0)
  const n = this,
    { params: r } = n
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    s1({ swiper: n, runCallbacks: e, direction: t, step: 'Start' }))
}
function ZC(e, t) {
  e === void 0 && (e = !0)
  const n = this,
    { params: r } = n
  ;(n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      s1({ swiper: n, runCallbacks: e, direction: t, step: 'End' }))
}
var JC = { setTransition: XC, transitionStart: YC, transitionEnd: ZC }
function e_(e, t, n, r, i) {
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
    wrapperEl: v,
    enabled: g
  } = o
  if (
    (!g && !r && !i) ||
    o.destroyed ||
    (o.animating && s.preventInteractionOnTransition)
  )
    return !1
  typeof t > 'u' && (t = o.params.speed)
  const y = Math.min(o.params.slidesPerGroupSkip, a)
  let b = y + Math.floor((a - y) / o.params.slidesPerGroup)
  b >= l.length && (b = l.length - 1)
  const m = -l[b]
  if (s.normalizeSlideIndex)
    for (let x = 0; x < u.length; x += 1) {
      const _ = -Math.floor(m * 100),
        C = Math.floor(u[x] * 100),
        E = Math.floor(u[x + 1] * 100)
      typeof u[x + 1] < 'u'
        ? _ >= C && _ < E - (E - C) / 2
          ? (a = x)
          : _ >= C && _ < E && (a = x + 1)
        : _ >= C && (a = x)
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
  const h = o.virtual && o.params.virtual.enabled
  if (!(h && i) && ((d && -m === o.translate) || (!d && m === o.translate)))
    return (
      o.updateActiveIndex(a),
      s.autoHeight && o.updateAutoHeight(),
      o.updateSlidesClasses(),
      s.effect !== 'slide' && o.setTranslate(m),
      p !== 'reset' && (o.transitionStart(n, p), o.transitionEnd(n, p)),
      !1
    )
  if (s.cssMode) {
    const x = o.isHorizontal(),
      _ = d ? m : -m
    if (t === 0)
      h &&
        ((o.wrapperEl.style.scrollSnapType = 'none'),
        (o._immediateVirtual = !0)),
        h && !o._cssModeVirtualInitialSet && o.params.initialSlide > 0
          ? ((o._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              v[x ? 'scrollLeft' : 'scrollTop'] = _
            }))
          : (v[x ? 'scrollLeft' : 'scrollTop'] = _),
        h &&
          requestAnimationFrame(() => {
            ;(o.wrapperEl.style.scrollSnapType = ''), (o._immediateVirtual = !1)
          })
    else {
      if (!o.support.smoothScroll)
        return (
          i1({ swiper: o, targetPosition: _, side: x ? 'left' : 'top' }), !0
        )
      v.scrollTo({ [x ? 'left' : 'top']: _, behavior: 'smooth' })
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
          (o.onSlideToWrapperTransitionEnd = function (_) {
            !o ||
              o.destroyed ||
              (_.target === this &&
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
function t_(e, t, n, r) {
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
          (v) => v.getAttribute('data-swiper-slide-index') * 1 === d
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
          (v) => v.getAttribute('data-swiper-slide-index') * 1 === d
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
function n_(e, t, n) {
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
function r_(e, t, n) {
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
  const v = d(f),
    g = o.map((m) => d(m))
  let y = o[g.indexOf(v) - 1]
  if (typeof y > 'u' && i.cssMode) {
    let m
    o.forEach((p, h) => {
      v >= p && (m = h)
    }),
      typeof m < 'u' && (y = o[m > 0 ? m - 1 : m])
  }
  let b = 0
  if (
    (typeof y < 'u' &&
      ((b = a.indexOf(y)),
      b < 0 && (b = r.activeIndex - 1),
      i.slidesPerView === 'auto' &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((b = b - r.slidesPerViewDynamic('previous', !0) + 1),
        (b = Math.max(b, 0)))),
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
        r.slideTo(b, e, t, n)
      }),
      !0
    )
  return r.slideTo(b, e, t, n)
}
function i_(e, t, n) {
  t === void 0 && (t = !0)
  const r = this
  if (!r.destroyed)
    return (
      typeof e > 'u' && (e = r.params.speed), r.slideTo(r.activeIndex, e, t, n)
    )
}
function o_(e, t, n, r) {
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
function a_() {
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
              hn(n, `${a}[data-swiper-slide-index="${o}"]`)[0]
            )),
            od(() => {
              e.slideTo(i)
            }))
          : e.slideTo(i)
        : i > e.slides.length - r
        ? (e.loopFix(),
          (i = e.getSlideIndex(
            hn(n, `${a}[data-swiper-slide-index="${o}"]`)[0]
          )),
          od(() => {
            e.slideTo(i)
          }))
        : e.slideTo(i)
  } else e.slideTo(i)
}
var s_ = {
  slideTo: e_,
  slideToLoop: t_,
  slideNext: n_,
  slidePrev: r_,
  slideReset: i_,
  slideToClosest: o_,
  slideToClickedSlide: a_
}
function l_(e) {
  const t = this,
    { params: n, slidesEl: r } = t
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return
  const i = () => {
      hn(r, `.${n.slideClass}, swiper-slide`).forEach((f, d) => {
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
          ? ad('swiper-slide', [n.slideBlankClass])
          : ad('div', [n.slideClass, n.slideBlankClass])
        t.slidesEl.append(d)
      }
    }
  if (s) {
    if (n.loopAddBlankSlides) {
      const c = a - (t.slides.length % a)
      u(c), t.recalcSlides(), t.updateSlides()
    } else
      el(
        'Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
      )
    i()
  } else if (l) {
    if (n.loopAddBlankSlides) {
      const c = n.grid.rows - (t.slides.length % n.grid.rows)
      u(c), t.recalcSlides(), t.updateSlides()
    } else
      el(
        'Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
      )
    i()
  } else i()
  t.loopFix({
    slideRealIndex: e,
    direction: n.centeredSlides ? void 0 : 'next'
  })
}
function u_(e) {
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
      params: v
    } = l,
    { centeredSlides: g } = v
  if (
    ((l.allowSlidePrev = !0),
    (l.allowSlideNext = !0),
    l.virtual && v.virtual.enabled)
  ) {
    n &&
      (!v.centeredSlides && l.snapIndex === 0
        ? l.slideTo(l.virtual.slides.length, 0, !1, !0)
        : v.centeredSlides && l.snapIndex < v.slidesPerView
        ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0)
        : l.snapIndex === l.snapGrid.length - 1 &&
          l.slideTo(l.virtual.slidesBefore, 0, !1, !0)),
      (l.allowSlidePrev = c),
      (l.allowSlideNext = f),
      l.emit('loopFix')
    return
  }
  let y = v.slidesPerView
  y === 'auto'
    ? (y = l.slidesPerViewDynamic())
    : ((y = Math.ceil(parseFloat(v.slidesPerView, 10))),
      g && y % 2 === 0 && (y = y + 1))
  const b = v.slidesPerGroupAuto ? y : v.slidesPerGroup
  let m = b
  m % b !== 0 && (m += b - (m % b)),
    (m += v.loopAdditionalSlides),
    (l.loopedSlides = m)
  const p = l.grid && v.grid && v.grid.rows > 1
  u.length < y + m
    ? el(
        'Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters'
      )
    : p &&
      v.grid.fill === 'row' &&
      el(
        'Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`'
      )
  const h = [],
    S = []
  let x = l.activeIndex
  typeof o > 'u'
    ? (o = l.getSlideIndex(
        u.filter((O) => O.classList.contains(v.slideActiveClass))[0]
      ))
    : (x = o)
  const _ = r === 'next' || !r,
    C = r === 'prev' || !r
  let E = 0,
    T = 0
  const k = p ? Math.ceil(u.length / v.grid.rows) : u.length,
    L = (p ? u[o].column : o) + (g && typeof i > 'u' ? -y / 2 + 0.5 : 0)
  if (L < m) {
    E = Math.max(m - L, b)
    for (let O = 0; O < m - L; O += 1) {
      const R = O - Math.floor(O / k) * k
      if (p) {
        const z = k - R - 1
        for (let I = u.length - 1; I >= 0; I -= 1)
          u[I].column === z && h.push(I)
      } else h.push(k - R - 1)
    }
  } else if (L + y > k - m) {
    T = Math.max(L - (k - m * 2), b)
    for (let O = 0; O < T; O += 1) {
      const R = O - Math.floor(O / k) * k
      p
        ? u.forEach((z, I) => {
            z.column === R && S.push(I)
          })
        : S.push(R)
    }
  }
  if (
    ((l.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      l.__preventObserver__ = !1
    }),
    C &&
      h.forEach((O) => {
        ;(u[O].swiperLoopMoveDOM = !0),
          d.prepend(u[O]),
          (u[O].swiperLoopMoveDOM = !1)
      }),
    _ &&
      S.forEach((O) => {
        ;(u[O].swiperLoopMoveDOM = !0),
          d.append(u[O]),
          (u[O].swiperLoopMoveDOM = !1)
      }),
    l.recalcSlides(),
    v.slidesPerView === 'auto'
      ? l.updateSlides()
      : p &&
        ((h.length > 0 && C) || (S.length > 0 && _)) &&
        l.slides.forEach((O, R) => {
          l.grid.updateSlide(R, O, l.slides)
        }),
    v.watchSlidesProgress && l.updateSlidesOffset(),
    n)
  ) {
    if (h.length > 0 && C) {
      if (typeof t > 'u') {
        const O = l.slidesGrid[x],
          z = l.slidesGrid[x + E] - O
        s
          ? l.setTranslate(l.translate - z)
          : (l.slideTo(x + Math.ceil(E), 0, !1, !0),
            i &&
              ((l.touchEventsData.startTranslate =
                l.touchEventsData.startTranslate - z),
              (l.touchEventsData.currentTranslate =
                l.touchEventsData.currentTranslate - z)))
      } else if (i) {
        const O = p ? h.length / v.grid.rows : h.length
        l.slideTo(l.activeIndex + O, 0, !1, !0),
          (l.touchEventsData.currentTranslate = l.translate)
      }
    } else if (S.length > 0 && _)
      if (typeof t > 'u') {
        const O = l.slidesGrid[x],
          z = l.slidesGrid[x - T] - O
        s
          ? l.setTranslate(l.translate - z)
          : (l.slideTo(x - T, 0, !1, !0),
            i &&
              ((l.touchEventsData.startTranslate =
                l.touchEventsData.startTranslate - z),
              (l.touchEventsData.currentTranslate =
                l.touchEventsData.currentTranslate - z)))
      } else {
        const O = p ? S.length / v.grid.rows : S.length
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
      ? l.controller.control.forEach((R) => {
          !R.destroyed &&
            R.params.loop &&
            R.loopFix({
              ...O,
              slideTo: R.params.slidesPerView === v.slidesPerView ? n : !1
            })
        })
      : l.controller.control instanceof l.constructor &&
        l.controller.control.params.loop &&
        l.controller.control.loopFix({
          ...O,
          slideTo:
            l.controller.control.params.slidesPerView === v.slidesPerView
              ? n
              : !1
        })
  }
  l.emit('loopFix')
}
function c_() {
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
var d_ = { loopCreate: l_, loopFix: u_, loopDestroy: c_ }
function f_(e) {
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
function p_() {
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
var h_ = { setGrabCursor: f_, unsetGrabCursor: p_ }
function m_(e, t) {
  t === void 0 && (t = this)
  function n(r) {
    if (!r || r === vn() || r === mt()) return null
    r.assignedSlot && (r = r.assignedSlot)
    const i = r.closest(e)
    return !i && !r.getRootNode ? null : i || n(r.getRootNode().host)
  }
  return n(t)
}
function om(e, t, n) {
  const r = mt(),
    { params: i } = e,
    o = i.edgeSwipeDetection,
    a = i.edgeSwipeThreshold
  return o && (n <= a || n >= r.innerWidth - a)
    ? o === 'prevent'
      ? (t.preventDefault(), !0)
      : !1
    : !0
}
function v_(e) {
  const t = this,
    n = vn()
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
    om(t, r, r.targetTouches[0].pageX)
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
    (o.touchEventsTarget === 'wrapper' && !xC(l, t.wrapperEl)) ||
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
  if (o.noSwiping && (d ? m_(f, l) : l.closest(f))) {
    t.allowClick = !0
    return
  }
  if (o.swipeHandler && !l.closest(o.swipeHandler)) return
  ;(a.currentX = r.pageX), (a.currentY = r.pageY)
  const v = a.currentX,
    g = a.currentY
  if (!om(t, r, v)) return
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }),
    (a.startX = v),
    (a.startY = g),
    (i.touchStartTime = Js()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    o.threshold > 0 && (i.allowThresholdMove = !1)
  let y = !0
  l.matches(i.focusableElements) &&
    ((y = !1), l.nodeName === 'SELECT' && (i.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(i.focusableElements) &&
      n.activeElement !== l &&
      (r.pointerType === 'mouse' ||
        (r.pointerType !== 'mouse' && !l.matches(i.focusableElements))) &&
      n.activeElement.blur()
  const b = y && t.allowTouchMove && o.touchStartPreventDefault
  ;(o.touchStartForcePreventDefault || b) &&
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
function g_(e) {
  const t = vn(),
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
      ((u = [...l.changedTouches].filter((_) => _.identifier === r.touchId)[0]),
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
        (r.touchStartTime = Js()))
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
    v = o.currentY - o.startY
  if (n.params.threshold && Math.sqrt(d ** 2 + v ** 2) < n.params.threshold)
    return
  if (typeof r.isScrolling > 'u') {
    let _
    ;(n.isHorizontal() && o.currentY === o.startY) ||
    (n.isVertical() && o.currentX === o.startX)
      ? (r.isScrolling = !1)
      : d * d + v * v >= 25 &&
        ((_ = (Math.atan2(Math.abs(v), Math.abs(d)) * 180) / Math.PI),
        (r.isScrolling = n.isHorizontal()
          ? _ > i.touchAngle
          : 90 - _ > i.touchAngle))
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
  let g = n.isHorizontal() ? d : v,
    y = n.isHorizontal() ? o.currentX - o.previousX : o.currentY - o.previousY
  i.oneWayMovement &&
    ((g = Math.abs(g) * (a ? 1 : -1)), (y = Math.abs(y) * (a ? 1 : -1))),
    (o.diff = g),
    (g *= i.touchRatio),
    a && ((g = -g), (y = -y))
  const b = n.touchesDirection
  ;(n.swipeDirection = g > 0 ? 'prev' : 'next'),
    (n.touchesDirection = y > 0 ? 'prev' : 'next')
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
      const _ = new window.CustomEvent('transitionend', {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 }
      })
      n.wrapperEl.dispatchEvent(_)
    }
    ;(r.allowMomentumBounce = !1),
      i.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit('sliderFirstMove', l)
  }
  let h
  if (
    (new Date().getTime(),
    r.isMoved &&
      r.allowThresholdMove &&
      b !== n.touchesDirection &&
      m &&
      p &&
      Math.abs(g) >= 1)
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
    (r.currentTranslate = g + r.startTranslate)
  let S = !0,
    x = i.resistanceRatio
  if (
    (i.touchReleaseOnEdges && (x = 0),
    g > 0
      ? (m &&
          p &&
          !h &&
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
          ((S = !1),
          i.resistance &&
            (r.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + r.startTranslate + g) ** x)))
      : g < 0 &&
        (m &&
          p &&
          !h &&
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
          ((S = !1),
          i.resistance &&
            (r.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - r.startTranslate - g) ** x))),
    S && (l.preventedByNestedSwiper = !0),
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
    if (Math.abs(g) > i.threshold || r.allowThresholdMove) {
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
function y_(e) {
  const t = this,
    n = t.touchEventsData
  let r = e
  r.originalEvent && (r = r.originalEvent)
  let i
  if (r.type === 'touchend' || r.type === 'touchcancel') {
    if (
      ((i = [...r.changedTouches].filter((x) => x.identifier === n.touchId)[0]),
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
  const f = Js(),
    d = f - n.touchStartTime
  if (t.allowClick) {
    const x = r.path || (r.composedPath && r.composedPath())
    t.updateClickedSlide((x && x[0]) || r.target, x),
      t.emit('tap click', r),
      d < 300 && f - n.lastClickTime < 300 && t.emit('doubleTap doubleClick', r)
  }
  if (
    ((n.lastClickTime = Js()),
    od(() => {
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
  let v
  if (
    (a.followFinger
      ? (v = l ? t.translate : -t.translate)
      : (v = -n.currentTranslate),
    a.cssMode)
  )
    return
  if (a.freeMode && a.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: v })
    return
  }
  const g = v >= -t.maxTranslate() && !t.params.loop
  let y = 0,
    b = t.slidesSizesGrid[0]
  for (
    let x = 0;
    x < u.length;
    x += x < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
  ) {
    const _ = x < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup
    typeof u[x + _] < 'u'
      ? (g || (v >= u[x] && v < u[x + _])) && ((y = x), (b = u[x + _] - u[x]))
      : (g || v >= u[x]) && ((y = x), (b = u[u.length - 1] - u[u.length - 2]))
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
  const h = (v - u[y]) / b,
    S = y < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup
  if (d > a.longSwipesMs) {
    if (!a.longSwipes) {
      t.slideTo(t.activeIndex)
      return
    }
    t.swipeDirection === 'next' &&
      (h >= a.longSwipesRatio
        ? t.slideTo(a.rewind && t.isEnd ? m : y + S)
        : t.slideTo(y)),
      t.swipeDirection === 'prev' &&
        (h > 1 - a.longSwipesRatio
          ? t.slideTo(y + S)
          : p !== null && h < 0 && Math.abs(h) > a.longSwipesRatio
          ? t.slideTo(p)
          : t.slideTo(y))
  } else {
    if (!a.shortSwipes) {
      t.slideTo(t.activeIndex)
      return
    }
    t.navigation &&
    (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl)
      ? r.target === t.navigation.nextEl
        ? t.slideTo(y + S)
        : t.slideTo(y)
      : (t.swipeDirection === 'next' && t.slideTo(m !== null ? m : y + S),
        t.swipeDirection === 'prev' && t.slideTo(p !== null ? p : y))
  }
}
function am() {
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
function w_(e) {
  const t = this
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())))
}
function S_() {
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
function b_(e) {
  const t = this
  Ss(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== 'auto' && !t.params.autoHeight)
    ) && t.update()
}
function x_() {
  const e = this
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0),
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = 'auto'))
}
const l1 = (e, t) => {
  const n = vn(),
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
          am,
          !0
        )
      : e[u]('observerUpdate', am, !0),
    i[l]('load', e.onLoad, { capture: !0 }))
}
function C_() {
  const e = this,
    { params: t } = e
  ;(e.onTouchStart = v_.bind(e)),
    (e.onTouchMove = g_.bind(e)),
    (e.onTouchEnd = y_.bind(e)),
    (e.onDocumentTouchStart = x_.bind(e)),
    t.cssMode && (e.onScroll = S_.bind(e)),
    (e.onClick = w_.bind(e)),
    (e.onLoad = b_.bind(e)),
    l1(e, 'on')
}
function __() {
  l1(this, 'off')
}
var E_ = { attachEvents: C_, detachEvents: __ }
const sm = (e, t) => e.grid && t.grid && t.grid.rows > 1
function T_() {
  const e = this,
    { realIndex: t, initialized: n, params: r, el: i } = e,
    o = r.breakpoints
  if (!o || (o && Object.keys(o).length === 0)) return
  const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el)
  if (!a || e.currentBreakpoint === a) return
  const l = (a in o ? o[a] : void 0) || e.originalParams,
    u = sm(e, r),
    c = sm(e, l),
    f = e.params.grabCursor,
    d = l.grabCursor,
    v = r.enabled
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
    ['navigation', 'pagination', 'scrollbar'].forEach((h) => {
      if (typeof l[h] > 'u') return
      const S = r[h] && r[h].enabled,
        x = l[h] && l[h].enabled
      S && !x && e[h].disable(), !S && x && e[h].enable()
    })
  const g = l.direction && l.direction !== r.direction,
    y = r.loop && (l.slidesPerView !== r.slidesPerView || g),
    b = r.loop
  g && n && e.changeDirection(), at(e.params, l)
  const m = e.params.enabled,
    p = e.params.loop
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev
  }),
    v && !m ? e.disable() : !v && m && e.enable(),
    (e.currentBreakpoint = a),
    e.emit('_beforeBreakpoint', l),
    n &&
      (y
        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
        : !b && p
        ? (e.loopCreate(t), e.updateSlides())
        : b && !p && e.loopDestroy()),
    e.emit('breakpoint', l)
}
function k_(e, t, n) {
  if ((t === void 0 && (t = 'window'), !e || (t === 'container' && !n))) return
  let r = !1
  const i = mt(),
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
var P_ = { setBreakpoint: T_, getBreakpoint: k_ }
function M_(e, t) {
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
function j_() {
  const e = this,
    { classNames: t, params: n, rtl: r, el: i, device: o } = e,
    a = M_(
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
function N_() {
  const e = this,
    { el: t, classNames: n } = e
  !t ||
    typeof t == 'string' ||
    (t.classList.remove(...n), e.emitContainerClasses())
}
var O_ = { addClasses: j_, removeClasses: N_ }
function L_() {
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
var R_ = { checkOverflow: L_ },
  ld = {
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
function I_(e, t) {
  return function (r) {
    r === void 0 && (r = {})
    const i = Object.keys(r)[0],
      o = r[i]
    if (typeof o != 'object' || o === null) {
      at(t, r)
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
      at(t, r)
      return
    }
    typeof e[i] == 'object' && !('enabled' in e[i]) && (e[i].enabled = !0),
      e[i] || (e[i] = { enabled: !1 }),
      at(t, r)
  }
}
const Lu = {
    eventsEmitter: OC,
    update: HC,
    translate: KC,
    transition: JC,
    slide: s_,
    loop: d_,
    grabCursor: h_,
    events: E_,
    breakpoints: P_,
    checkOverflow: R_,
    classes: O_
  },
  Ru = {}
let lp = class ln {
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
      (n = at({}, n)),
      t && !n.el && (n.el = t)
    const a = vn()
    if (
      n.el &&
      typeof n.el == 'string' &&
      a.querySelectorAll(n.el).length > 1
    ) {
      const c = []
      return (
        a.querySelectorAll(n.el).forEach((f) => {
          const d = at({}, n, { el: f })
          c.push(new ln(d))
        }),
        c
      )
    }
    const s = this
    ;(s.__swiper__ = !0),
      (s.support = o1()),
      (s.device = a1({ userAgent: n.userAgent })),
      (s.browser = MC()),
      (s.eventsListeners = {}),
      (s.eventsAnyListeners = []),
      (s.modules = [...s.__modules__]),
      n.modules && Array.isArray(n.modules) && s.modules.push(...n.modules)
    const l = {}
    s.modules.forEach((c) => {
      c({
        params: n,
        swiper: s,
        extendParams: I_(n, l),
        on: s.on.bind(s),
        once: s.once.bind(s),
        off: s.off.bind(s),
        emit: s.emit.bind(s)
      })
    })
    const u = at({}, ld, l)
    return (
      (s.params = at({}, u, Ru, n)),
      (s.originalParams = at({}, s.params)),
      (s.passedParams = at({}, n)),
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
      i = hn(n, `.${r.slideClass}, swiper-slide`),
      o = nm(i[0])
    return nm(t) - o
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
    t.slides = hn(n, `.${r.slideClass}, swiper-slide`)
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
      for (let v = u + 1; v < o.length; v += 1)
        o[v] &&
          !d &&
          ((f += Math.ceil(o[v].swiperSlideSize)), (c += 1), f > l && (d = !0))
      for (let v = u - 1; v >= 0; v -= 1)
        o[v] && !d && ((f += o[v].swiperSlideSize), (c += 1), f > l && (d = !0))
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
        a.complete && Ss(t, a)
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
        : hn(r, i())[0]
    return (
      !a &&
        n.params.createElements &&
        ((a = ad('div', n.params.wrapperClass)),
        r.append(a),
        hn(r, `.${n.params.slideClass}`).forEach((s) => {
          a.append(s)
        })),
      Object.assign(n, {
        el: r,
        wrapperEl: a,
        slidesEl:
          n.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : a,
        hostEl: n.isElement ? r.parentNode.host : r,
        mounted: !0,
        rtl: r.dir.toLowerCase() === 'rtl' || $n(r, 'direction') === 'rtl',
        rtlTranslate:
          n.params.direction === 'horizontal' &&
          (r.dir.toLowerCase() === 'rtl' || $n(r, 'direction') === 'rtl'),
        wrongRTL: $n(a, 'display') === '-webkit-box'
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
          ? Ss(n, o)
          : o.addEventListener('load', (a) => {
              Ss(n, a.target)
            })
      }),
      sd(n),
      (n.initialized = !0),
      sd(n),
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
          (r.el && typeof r.el != 'string' && (r.el.swiper = null), yC(r)),
        (r.destroyed = !0)),
      null
    )
  }
  static extendDefaults(t) {
    at(Ru, t)
  }
  static get extendedDefaults() {
    return Ru
  }
  static get defaults() {
    return ld
  }
  static installModule(t) {
    ln.prototype.__modules__ || (ln.prototype.__modules__ = [])
    const n = ln.prototype.__modules__
    typeof t == 'function' && n.indexOf(t) < 0 && n.push(t)
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => ln.installModule(n)), ln)
      : (ln.installModule(t), ln)
  }
}
Object.keys(Lu).forEach((e) => {
  Object.keys(Lu[e]).forEach((t) => {
    lp.prototype[t] = Lu[e][t]
  })
})
lp.use([jC, NC])
const u1 = [
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
function Cr(e) {
  return (
    typeof e == 'object' &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === 'Object' &&
    !e.__swiper__
  )
}
function gi(e, t) {
  const n = ['__proto__', 'constructor', 'prototype']
  Object.keys(t)
    .filter((r) => n.indexOf(r) < 0)
    .forEach((r) => {
      typeof e[r] > 'u'
        ? (e[r] = t[r])
        : Cr(t[r]) && Cr(e[r]) && Object.keys(t[r]).length > 0
        ? t[r].__swiper__
          ? (e[r] = t[r])
          : gi(e[r], t[r])
        : (e[r] = t[r])
    })
}
function c1(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > 'u' &&
      typeof e.navigation.prevEl > 'u'
  )
}
function d1(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > 'u'
}
function f1(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > 'u'
}
function p1(e) {
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
function A_(e) {
  return (
    e === void 0 && (e = ''),
    e
      ? e.includes('swiper-wrapper')
        ? e
        : `swiper-wrapper ${e}`
      : 'swiper-wrapper'
  )
}
function F_(e) {
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
      scrollbar: v,
      virtual: g,
      thumbs: y
    } = t
  let b, m, p, h, S, x, _, C
  i.includes('thumbs') &&
    r.thumbs &&
    r.thumbs.swiper &&
    !r.thumbs.swiper.destroyed &&
    c.thumbs &&
    (!c.thumbs.swiper || c.thumbs.swiper.destroyed) &&
    (b = !0),
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
      v &&
      !v.el &&
      (h = !0),
    i.includes('navigation') &&
      r.navigation &&
      (r.navigation.prevEl || a) &&
      (r.navigation.nextEl || o) &&
      (c.navigation || c.navigation === !1) &&
      d &&
      !d.prevEl &&
      !d.nextEl &&
      (S = !0)
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
    (c.loop && !r.loop ? (x = !0) : !c.loop && r.loop ? (_ = !0) : (C = !0)),
    u.forEach((T) => {
      if (Cr(c[T]) && Cr(r[T]))
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
    i.includes('children') && n && g && c.virtual.enabled
      ? ((g.slides = n), g.update(!0))
      : i.includes('virtual') &&
        g &&
        c.virtual.enabled &&
        (n && (g.slides = n), g.update(!0)),
    i.includes('children') && n && c.loop && (C = !0),
    b && y.init() && y.update(!0),
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
    h &&
      (t.isElement &&
        (!s || typeof s == 'string') &&
        ((s = document.createElement('div')),
        s.classList.add('swiper-scrollbar'),
        s.part.add('scrollbar'),
        t.el.appendChild(s)),
      s && (c.scrollbar.el = s),
      v.init(),
      v.updateSize(),
      v.setTranslate()),
    S &&
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
    (x || C) && t.loopDestroy(),
    (_ || C) && t.loopCreate(),
    t.update()
}
function $_(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !0)
  const n = { on: {} },
    r = {},
    i = {}
  gi(n, ld), (n._emitClasses = !0), (n.init = !1)
  const o = {},
    a = u1.map((l) => l.replace(/_/, '')),
    s = Object.assign({}, e)
  return (
    Object.keys(s).forEach((l) => {
      typeof e[l] > 'u' ||
        (a.indexOf(l) >= 0
          ? Cr(e[l])
            ? ((n[l] = {}), (i[l] = {}), gi(n[l], e[l]), gi(i[l], e[l]))
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
function D_(e, t) {
  let {
    el: n,
    nextEl: r,
    prevEl: i,
    paginationEl: o,
    scrollbarEl: a,
    swiper: s
  } = e
  c1(t) &&
    r &&
    i &&
    ((s.params.navigation.nextEl = r),
    (s.originalParams.navigation.nextEl = r),
    (s.params.navigation.prevEl = i),
    (s.originalParams.navigation.prevEl = i)),
    d1(t) &&
      o &&
      ((s.params.pagination.el = o), (s.originalParams.pagination.el = o)),
    f1(t) &&
      a &&
      ((s.params.scrollbar.el = a), (s.originalParams.scrollbar.el = a)),
    s.init(n)
}
function z_(e, t, n, r, i) {
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
    u1
      .filter((l) => l[0] === '_')
      .map((l) => l.replace(/_/, ''))
      .forEach((l) => {
        if (l in e && l in t)
          if (Cr(e[l]) && Cr(t[l])) {
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
const V_ = (e) => {
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
function tl() {
  return (
    (tl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    tl.apply(this, arguments)
  )
}
function h1(e) {
  return (
    e.type && e.type.displayName && e.type.displayName.includes('SwiperSlide')
  )
}
function m1(e) {
  const t = []
  return (
    ne.Children.toArray(e).forEach((n) => {
      h1(n)
        ? t.push(n)
        : n.props &&
          n.props.children &&
          m1(n.props.children).forEach((r) => t.push(r))
    }),
    t
  )
}
function B_(e) {
  const t = [],
    n = {
      'container-start': [],
      'container-end': [],
      'wrapper-start': [],
      'wrapper-end': []
    }
  return (
    ne.Children.toArray(e).forEach((r) => {
      if (h1(r)) t.push(r)
      else if (r.props && r.props.slot && n[r.props.slot])
        n[r.props.slot].push(r)
      else if (r.props && r.props.children) {
        const i = m1(r.props.children)
        i.length > 0 ? i.forEach((o) => t.push(o)) : n['container-end'].push(r)
      } else n['container-end'].push(r)
    }),
    { slides: t, slots: n }
  )
}
function H_(e, t, n) {
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
    ne.cloneElement(c, {
      swiper: e,
      style: i,
      key: c.props.virtualIndex || c.key || `slide-${f}`
    })
  )
}
function So(e, t) {
  return typeof window > 'u' ? P.useEffect(e, t) : P.useLayoutEffect(e, t)
}
const lm = P.createContext(null),
  W_ = P.createContext(null),
  v1 = P.forwardRef(function (e, t) {
    let {
        className: n,
        tag: r = 'div',
        wrapperTag: i = 'div',
        children: o,
        onSwiper: a,
        ...s
      } = e === void 0 ? {} : e,
      l = !1
    const [u, c] = P.useState('swiper'),
      [f, d] = P.useState(null),
      [v, g] = P.useState(!1),
      y = P.useRef(!1),
      b = P.useRef(null),
      m = P.useRef(null),
      p = P.useRef(null),
      h = P.useRef(null),
      S = P.useRef(null),
      x = P.useRef(null),
      _ = P.useRef(null),
      C = P.useRef(null),
      { params: E, passedParams: T, rest: k, events: M } = $_(s),
      { slides: L, slots: O } = B_(o),
      R = () => {
        g(!v)
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
        (m.current = new lp(F)),
        m.current.virtual && m.current.params.virtual.enabled)
      ) {
        m.current.virtual.slides = L
        const $ = {
          cache: !1,
          slides: L,
          renderExternal: d,
          renderExternalUpdate: !1
        }
        gi(m.current.params.virtual, $), gi(m.current.originalParams.virtual, $)
      }
    }
    b.current || z(), m.current && m.current.on('_beforeBreakpoint', R)
    const I = () => {
        l ||
          !M ||
          !m.current ||
          Object.keys(M).forEach((F) => {
            m.current.on(F, M[F])
          })
      },
      A = () => {
        !M ||
          !m.current ||
          Object.keys(M).forEach((F) => {
            m.current.off(F, M[F])
          })
      }
    P.useEffect(() => () => {
      m.current && m.current.off('_beforeBreakpoint', R)
    }),
      P.useEffect(() => {
        !y.current &&
          m.current &&
          (m.current.emitSlidesClasses(), (y.current = !0))
      }),
      So(() => {
        if ((t && (t.current = b.current), !!b.current))
          return (
            m.current.destroyed && z(),
            D_(
              {
                el: b.current,
                nextEl: S.current,
                prevEl: x.current,
                paginationEl: _.current,
                scrollbarEl: C.current,
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
      So(() => {
        I()
        const F = z_(T, p.current, L, h.current, ($) => $.key)
        return (
          (p.current = T),
          (h.current = L),
          F.length &&
            m.current &&
            !m.current.destroyed &&
            F_({
              swiper: m.current,
              slides: L,
              passedParams: T,
              changedParams: F,
              nextEl: S.current,
              prevEl: x.current,
              scrollbarEl: C.current,
              paginationEl: _.current
            }),
          () => {
            A()
          }
        )
      }),
      So(() => {
        V_(m.current)
      }, [f])
    function j() {
      return E.virtual
        ? H_(m.current, L, f)
        : L.map((F, $) =>
            ne.cloneElement(F, { swiper: m.current, swiperSlideIndex: $ })
          )
    }
    return ne.createElement(
      r,
      tl({ ref: b, className: p1(`${u}${n ? ` ${n}` : ''}`) }, k),
      ne.createElement(
        W_.Provider,
        { value: m.current },
        O['container-start'],
        ne.createElement(
          i,
          { className: A_(E.wrapperClass) },
          O['wrapper-start'],
          j(),
          O['wrapper-end']
        ),
        c1(E) &&
          ne.createElement(
            ne.Fragment,
            null,
            ne.createElement('div', {
              ref: x,
              className: 'swiper-button-prev'
            }),
            ne.createElement('div', { ref: S, className: 'swiper-button-next' })
          ),
        f1(E) &&
          ne.createElement('div', { ref: C, className: 'swiper-scrollbar' }),
        d1(E) &&
          ne.createElement('div', { ref: _, className: 'swiper-pagination' }),
        O['container-end']
      )
    )
  })
v1.displayName = 'Swiper'
const g1 = P.forwardRef(function (e, t) {
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
  const f = P.useRef(null),
    [d, v] = P.useState('swiper-slide'),
    [g, y] = P.useState(!1)
  function b(S, x, _) {
    x === f.current && v(_)
  }
  So(() => {
    if (
      (typeof u < 'u' && (f.current.swiperSlideIndex = u),
      t && (t.current = f.current),
      !(!f.current || !o))
    ) {
      if (o.destroyed) {
        d !== 'swiper-slide' && v('swiper-slide')
        return
      }
      return (
        o.on('_slideClass', b),
        () => {
          o && o.off('_slideClass', b)
        }
      )
    }
  }),
    So(() => {
      o && f.current && !o.destroyed && v(o.getSlideClasses(f.current))
    }, [o])
  const m = {
      isActive: d.indexOf('swiper-slide-active') >= 0,
      isVisible: d.indexOf('swiper-slide-visible') >= 0,
      isPrev: d.indexOf('swiper-slide-prev') >= 0,
      isNext: d.indexOf('swiper-slide-next') >= 0
    },
    p = () => (typeof r == 'function' ? r(m) : r),
    h = () => {
      y(!0)
    }
  return ne.createElement(
    n,
    tl(
      {
        ref: f,
        className: p1(`${d}${i ? ` ${i}` : ''}`),
        'data-swiper-slide-index': l,
        onLoad: h
      },
      c
    ),
    a &&
      ne.createElement(
        lm.Provider,
        { value: m },
        ne.createElement(
          'div',
          {
            className: 'swiper-zoom-container',
            'data-swiper-zoom': typeof a == 'number' ? a : void 0
          },
          p(),
          s &&
            !g &&
            ne.createElement('div', { className: 'swiper-lazy-preloader' })
        )
      ),
    !a &&
      ne.createElement(
        lm.Provider,
        { value: m },
        p(),
        s &&
          !g &&
          ne.createElement('div', { className: 'swiper-lazy-preloader' })
      )
  )
})
g1.displayName = 'SwiperSlide'
function U_(e) {
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
    v,
    g,
    y,
    b,
    m,
    p
  function h(j) {
    !t ||
      t.destroyed ||
      !t.wrapperEl ||
      (j.target === t.wrapperEl &&
        (t.wrapperEl.removeEventListener('transitionend', h),
        !(p || (j.detail && j.detail.bySwiperTouchMove)) && k()))
  }
  const S = () => {
      if (t.destroyed || !t.autoplay.running) return
      t.autoplay.paused ? (d = !0) : d && ((u = c), (d = !1))
      const j = t.autoplay.paused ? c : f + u - new Date().getTime()
      ;(t.autoplay.timeLeft = j),
        i('autoplayTimeLeft', j, j / l),
        (s = requestAnimationFrame(() => {
          S()
        }))
    },
    x = () => {
      let j
      return (
        t.virtual && t.params.virtual.enabled
          ? (j = t.slides.filter(($) =>
              $.classList.contains('swiper-slide-active')
            )[0])
          : (j = t.slides[t.activeIndex]),
        j ? parseInt(j.getAttribute('data-swiper-autoplay'), 10) : void 0
      )
    },
    _ = (j) => {
      if (t.destroyed || !t.autoplay.running) return
      cancelAnimationFrame(s), S()
      let F = typeof j > 'u' ? t.params.autoplay.delay : j
      ;(l = t.params.autoplay.delay), (u = t.params.autoplay.delay)
      const $ = x()
      !Number.isNaN($) &&
        $ > 0 &&
        typeof j > 'u' &&
        ((F = $), (l = $), (u = $)),
        (c = F)
      const V = t.params.speed,
        W = () => {
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
                _()
              })))
        }
      return (
        F > 0
          ? (clearTimeout(a),
            (a = setTimeout(() => {
              W()
            }, F)))
          : requestAnimationFrame(() => {
              W()
            }),
        F
      )
    },
    C = () => {
      ;(f = new Date().getTime()),
        (t.autoplay.running = !0),
        _(),
        i('autoplayStart')
    },
    E = () => {
      ;(t.autoplay.running = !1),
        clearTimeout(a),
        cancelAnimationFrame(s),
        i('autoplayStop')
    },
    T = (j, F) => {
      if (t.destroyed || !t.autoplay.running) return
      clearTimeout(a), j || (m = !0)
      const $ = () => {
        i('autoplayPause'),
          t.params.autoplay.waitForTransition
            ? t.wrapperEl.addEventListener('transitionend', h)
            : k()
      }
      if (((t.autoplay.paused = !0), F)) {
        b && (c = t.params.autoplay.delay), (b = !1), $()
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
        m ? ((m = !1), _(c)) : _(),
        (t.autoplay.paused = !1),
        i('autoplayResume'))
    },
    M = () => {
      if (t.destroyed || !t.autoplay.running) return
      const j = vn()
      j.visibilityState === 'hidden' && ((m = !0), T(!0)),
        j.visibilityState === 'visible' && k()
    },
    L = (j) => {
      j.pointerType === 'mouse' &&
        ((m = !0), (p = !0), !(t.animating || t.autoplay.paused) && T(!0))
    },
    O = (j) => {
      j.pointerType === 'mouse' && ((p = !1), t.autoplay.paused && k())
    },
    R = () => {
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
      vn().addEventListener('visibilitychange', M)
    },
    A = () => {
      vn().removeEventListener('visibilitychange', M)
    }
  r('init', () => {
    t.params.autoplay.enabled && (R(), I(), C())
  }),
    r('destroy', () => {
      z(), A(), t.autoplay.running && E()
    }),
    r('_freeModeStaticRelease', () => {
      ;(g || m) && k()
    }),
    r('_freeModeNoMomentumRelease', () => {
      t.params.autoplay.disableOnInteraction ? E() : T(!0, !0)
    }),
    r('beforeTransitionStart', (j, F, $) => {
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
        ;(v = !0),
          (g = !1),
          (m = !1),
          (y = setTimeout(() => {
            ;(m = !0), (g = !0), T(!0)
          }, 200))
      }
    }),
    r('touchEnd', () => {
      if (!(t.destroyed || !t.autoplay.running || !v)) {
        if (
          (clearTimeout(y),
          clearTimeout(a),
          t.params.autoplay.disableOnInteraction)
        ) {
          ;(g = !1), (v = !1)
          return
        }
        g && t.params.cssMode && k(), (g = !1), (v = !1)
      }
    }),
    r('slideChange', () => {
      t.destroyed || !t.autoplay.running || (b = !0)
    }),
    Object.assign(t.autoplay, { start: C, stop: E, pause: T, resume: k })
}
const Ft = [
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
  dn = [
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
  q_ = '_modal_content_1ci7s_1',
  G_ = '_singleModalContent_1ci7s_27',
  Q_ = '_save_btn_1ci7s_27',
  K_ = '_generate_invoice_btn_1ci7s_29',
  X_ = '_modal_close_icon_1ci7s_53',
  Y_ = '_product_search_box_1ci7s_59',
  Z_ = '_search_icon_1ci7s_83',
  J_ = '_sidebar_1ci7s_95',
  eE = '_sidebarTitle_1ci7s_107',
  tE = '_sidebarMenu_1ci7s_117',
  nE = '_sidebarItem_1ci7s_129',
  rE = '_settingsContainer_1ci7s_159',
  iE = '_modal_content_header_1ci7s_171',
  oE = '_form_item_1ci7s_185',
  aE = '_selectContainer_1ci7s_199',
  sE = '_form_Item_double_1ci7s_239',
  lE = '_input__label_1ci7s_251',
  uE = '_select_country_icon_1ci7s_301',
  cE = '_select_proviences_icon_1ci7s_303',
  dE = '_phone_field_1ci7s_319',
  fE = '_country_code_1ci7s_327',
  pE = '_phone_code_select_container_1ci7s_343',
  hE = '_country_code_select_1ci7s_367',
  mE = '_product_main_container_1ci7s_397',
  vE = '_download_invoice_content_1ci7s_413',
  gE = '_product_box_1ci7s_447',
  yE = '_action_btn_box_1ci7s_449',
  wE = '_product_box_content_1ci7s_451',
  SE = '_product_content_1ci7s_463',
  bE = '_product_variant_1ci7s_479',
  xE = '_product_title_1ci7s_489',
  CE = '_product_price_1ci7s_497',
  _E = '_product_image_box_1ci7s_517',
  EE = '_action_btn_1ci7s_449',
  TE = '_product_quantity_1ci7s_565',
  kE = '_product_quantity_title_1ci7s_567',
  PE = '_variant_product_box_1ci7s_581',
  ME = '_variant_product_box_content_1ci7s_583',
  jE = '_variant_select_box_1ci7s_593',
  NE = '_shipping_method_content_1ci7s_625',
  OE = '_method_radio_1ci7s_637',
  LE = '_shipping_method_name_1ci7s_649',
  RE = '_method_price_1ci7s_651',
  IE = '_product_variant_container_1ci7s_659',
  AE = '_address_container_1ci7s_773',
  FE = '_address_title_1ci7s_787',
  $E = '_address_name_1ci7s_799',
  DE = '_address_1ci7s_773',
  zE = '_customize_invoice_title_1ci7s_811',
  VE = '_purchasing_checkbox_1ci7s_821',
  BE = '_billing_details_checkbox_1ci7s_823',
  HE = '_invoice_radio_container_1ci7s_833',
  WE = '_invoice_radio_1ci7s_833',
  UE = '_download_method_1ci7s_857',
  qE = '_business_form_1ci7s_863',
  GE = '_billing_address_form_1ci7s_865',
  N = {
    modal_content: q_,
    singleModalContent: G_,
    save_btn: Q_,
    generate_invoice_btn: K_,
    modal_close_icon: X_,
    product_search_box: Y_,
    search_icon: Z_,
    sidebar: J_,
    sidebarTitle: eE,
    sidebarMenu: tE,
    sidebarItem: nE,
    settingsContainer: rE,
    modal_content_header: iE,
    form_item: oE,
    selectContainer: aE,
    form_Item_double: sE,
    input__label: lE,
    select_country_icon: uE,
    select_proviences_icon: cE,
    phone_field: dE,
    country_code: fE,
    phone_code_select_container: pE,
    country_code_select: hE,
    product_main_container: mE,
    download_invoice_content: vE,
    product_box: gE,
    action_btn_box: yE,
    product_box_content: wE,
    product_content: SE,
    product_variant: bE,
    product_title: xE,
    product_price: CE,
    product_image_box: _E,
    action_btn: EE,
    product_quantity: TE,
    product_quantity_title: kE,
    variant_product_box: PE,
    variant_product_box_content: ME,
    variant_select_box: jE,
    shipping_method_content: NE,
    method_radio: OE,
    shipping_method_name: LE,
    method_price: RE,
    product_variant_container: IE,
    address_container: AE,
    address_title: FE,
    address_name: $E,
    address: DE,
    customize_invoice_title: zE,
    purchasing_checkbox: VE,
    billing_details_checkbox: BE,
    invoice_radio_container: HE,
    invoice_radio: WE,
    download_method: UE,
    business_form: qE,
    billing_address_form: GE
  }
var y1 = { exports: {} }
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
})(y1)
var QE = y1.exports
const _r = cf(QE)
function Er() {
  return (
    (Er = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    Er.apply(null, arguments)
  )
}
function Y(e) {
  '@babel/helpers - typeof'
  return (
    (Y =
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
    Y(e)
  )
}
var KE = Symbol.for('react.element'),
  XE = Symbol.for('react.transitional.element'),
  YE = Symbol.for('react.fragment')
function w1(e) {
  return (
    e &&
    Y(e) === 'object' &&
    (e.$$typeof === KE || e.$$typeof === XE) &&
    e.type === YE
  )
}
function ud(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = []
  return (
    ne.Children.forEach(e, function (r) {
      ;(r == null && !t.keepEmpty) ||
        (Array.isArray(r)
          ? (n = n.concat(ud(r)))
          : w1(r) && r.props
          ? (n = n.concat(ud(r.props.children, t)))
          : n.push(r))
    }),
    n
  )
}
var cd = {},
  ZE = function (t) {}
function JE(e, t) {}
function eT(e, t) {}
function tT() {
  cd = {}
}
function S1(e, t, n) {
  !t && !cd[n] && (e(!1, n), (cd[n] = !0))
}
function _t(e, t) {
  S1(JE, e, t)
}
function nT(e, t) {
  S1(eT, e, t)
}
_t.preMessage = ZE
_t.resetWarned = tT
_t.noteOnce = nT
function rT(e, t) {
  if (Y(e) != 'object' || !e) return e
  var n = e[Symbol.toPrimitive]
  if (n !== void 0) {
    var r = n.call(e, t || 'default')
    if (Y(r) != 'object') return r
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
function b1(e) {
  var t = rT(e, 'string')
  return Y(t) == 'symbol' ? t : t + ''
}
function D(e, t, n) {
  return (
    (t = b1(t)) in e
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
function um(e, t) {
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
      ? um(Object(n), !0).forEach(function (r) {
          D(e, r, n[r])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : um(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
  }
  return e
}
function cm(e) {
  return e instanceof HTMLElement || e instanceof SVGElement
}
function iT(e) {
  return e && Y(e) === 'object' && cm(e.nativeElement)
    ? e.nativeElement
    : cm(e)
    ? e
    : null
}
function oT(e) {
  var t = iT(e)
  if (t) return t
  if (e instanceof ne.Component) {
    var n
    return (n = td.findDOMNode) === null || n === void 0
      ? void 0
      : n.call(td, e)
  }
  return null
}
var x1 = { exports: {} },
  ae = {}
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var up = Symbol.for('react.element'),
  cp = Symbol.for('react.portal'),
  Nl = Symbol.for('react.fragment'),
  Ol = Symbol.for('react.strict_mode'),
  Ll = Symbol.for('react.profiler'),
  Rl = Symbol.for('react.provider'),
  Il = Symbol.for('react.context'),
  aT = Symbol.for('react.server_context'),
  Al = Symbol.for('react.forward_ref'),
  Fl = Symbol.for('react.suspense'),
  $l = Symbol.for('react.suspense_list'),
  Dl = Symbol.for('react.memo'),
  zl = Symbol.for('react.lazy'),
  sT = Symbol.for('react.offscreen'),
  C1
C1 = Symbol.for('react.module.reference')
function Mt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case up:
        switch (((e = e.type), e)) {
          case Nl:
          case Ll:
          case Ol:
          case Fl:
          case $l:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case aT:
              case Il:
              case Al:
              case zl:
              case Dl:
              case Rl:
                return e
              default:
                return t
            }
        }
      case cp:
        return t
    }
  }
}
ae.ContextConsumer = Il
ae.ContextProvider = Rl
ae.Element = up
ae.ForwardRef = Al
ae.Fragment = Nl
ae.Lazy = zl
ae.Memo = Dl
ae.Portal = cp
ae.Profiler = Ll
ae.StrictMode = Ol
ae.Suspense = Fl
ae.SuspenseList = $l
ae.isAsyncMode = function () {
  return !1
}
ae.isConcurrentMode = function () {
  return !1
}
ae.isContextConsumer = function (e) {
  return Mt(e) === Il
}
ae.isContextProvider = function (e) {
  return Mt(e) === Rl
}
ae.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === up
}
ae.isForwardRef = function (e) {
  return Mt(e) === Al
}
ae.isFragment = function (e) {
  return Mt(e) === Nl
}
ae.isLazy = function (e) {
  return Mt(e) === zl
}
ae.isMemo = function (e) {
  return Mt(e) === Dl
}
ae.isPortal = function (e) {
  return Mt(e) === cp
}
ae.isProfiler = function (e) {
  return Mt(e) === Ll
}
ae.isStrictMode = function (e) {
  return Mt(e) === Ol
}
ae.isSuspense = function (e) {
  return Mt(e) === Fl
}
ae.isSuspenseList = function (e) {
  return Mt(e) === $l
}
ae.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Nl ||
    e === Ll ||
    e === Ol ||
    e === Fl ||
    e === $l ||
    e === sT ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === zl ||
        e.$$typeof === Dl ||
        e.$$typeof === Rl ||
        e.$$typeof === Il ||
        e.$$typeof === Al ||
        e.$$typeof === C1 ||
        e.getModuleId !== void 0))
  )
}
ae.typeOf = Mt
x1.exports = ae
var Iu = x1.exports
function _1(e, t, n) {
  var r = P.useRef({})
  return (
    (!('value' in r.current) || n(r.current.condition, t)) &&
      ((r.current.value = e()), (r.current.condition = t)),
    r.current.value
  )
}
var E1 = function (t, n) {
    typeof t == 'function'
      ? t(n)
      : Y(t) === 'object' && t && 'current' in t && (t.current = n)
  },
  dp = function () {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r]
    var i = n.filter(Boolean)
    return i.length <= 1
      ? i[0]
      : function (o) {
          n.forEach(function (a) {
            E1(a, o)
          })
        }
  },
  T1 = function (t) {
    var n, r
    if (!t) return !1
    if (k1(t) && t.props.propertyIsEnumerable('ref')) return !0
    var i = Iu.isMemo(t) ? t.type.type : t.type
    return !(
      (typeof i == 'function' &&
        !((n = i.prototype) !== null && n !== void 0 && n.render) &&
        i.$$typeof !== Iu.ForwardRef) ||
      (typeof t == 'function' &&
        !((r = t.prototype) !== null && r !== void 0 && r.render) &&
        t.$$typeof !== Iu.ForwardRef)
    )
  }
function k1(e) {
  return P.isValidElement(e) && !w1(e)
}
var P1 = function (t) {
  if (t && k1(t)) {
    var n = t
    return n.props.propertyIsEnumerable('ref') ? n.props.ref : n.ref
  }
  return null
}
function et(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function')
}
function dm(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n]
    ;(r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, b1(r.key), r)
  }
}
function tt(e, t, n) {
  return (
    t && dm(e.prototype, t),
    n && dm(e, n),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  )
}
function Wo(e, t) {
  return (
    (Wo = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n
        }),
    Wo(e, t)
  )
}
function Fi(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function')
  ;(e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 }
  })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && Wo(e, t)
}
function Uo(e) {
  return (
    (Uo = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }),
    Uo(e)
  )
}
function fp() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    )
  } catch {}
  return (fp = function () {
    return !!e
  })()
}
function Z(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  return e
}
function lT(e, t) {
  if (t && (Y(t) == 'object' || typeof t == 'function')) return t
  if (t !== void 0)
    throw new TypeError(
      'Derived constructors may only return object or undefined'
    )
  return Z(e)
}
function $i(e) {
  var t = fp()
  return function () {
    var n,
      r = Uo(e)
    if (t) {
      var i = Uo(this).constructor
      n = Reflect.construct(r, arguments, i)
    } else n = r.apply(this, arguments)
    return lT(this, n)
  }
}
function uT(e, t) {
  var n = Object.assign({}, e)
  return (
    Array.isArray(t) &&
      t.forEach(function (r) {
        delete n[r]
      }),
    n
  )
}
function dd(e, t) {
  ;(t == null || t > e.length) && (t = e.length)
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n]
  return r
}
function cT(e) {
  if (Array.isArray(e)) return dd(e)
}
function M1(e) {
  if (
    (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e)
}
function pp(e, t) {
  if (e) {
    if (typeof e == 'string') return dd(e, t)
    var n = {}.toString.call(e).slice(8, -1)
    return (
      n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set'
        ? Array.from(e)
        : n === 'Arguments' ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? dd(e, t)
        : void 0
    )
  }
}
function dT() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function K(e) {
  return cT(e) || M1(e) || pp(e) || dT()
}
var j1 = function (t) {
    return +setTimeout(t, 16)
  },
  N1 = function (t) {
    return clearTimeout(t)
  }
typeof window < 'u' &&
  'requestAnimationFrame' in window &&
  ((j1 = function (t) {
    return window.requestAnimationFrame(t)
  }),
  (N1 = function (t) {
    return window.cancelAnimationFrame(t)
  }))
var fm = 0,
  hp = new Map()
function O1(e) {
  hp.delete(e)
}
var xn = function (t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1
  fm += 1
  var r = fm
  function i(o) {
    if (o === 0) O1(r), t()
    else {
      var a = j1(function () {
        i(o - 1)
      })
      hp.set(r, a)
    }
  }
  return i(n), r
}
xn.cancel = function (e) {
  var t = hp.get(e)
  return O1(e), N1(t)
}
function L1(e) {
  if (Array.isArray(e)) return e
}
function fT(e, t) {
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
function R1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function X(e, t) {
  return L1(e) || fT(e, t) || pp(e, t) || R1()
}
function qo(e) {
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
function Tn() {
  return !!(
    typeof window < 'u' &&
    window.document &&
    window.document.createElement
  )
}
function pT(e, t) {
  if (!e) return !1
  if (e.contains) return e.contains(t)
  for (var n = t; n; ) {
    if (n === e) return !0
    n = n.parentNode
  }
  return !1
}
var pm = 'data-rc-order',
  hm = 'data-rc-priority',
  hT = 'rc-util-key',
  fd = new Map()
function I1() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = e.mark
  return t ? (t.startsWith('data-') ? t : 'data-'.concat(t)) : hT
}
function Vl(e) {
  if (e.attachTo) return e.attachTo
  var t = document.querySelector('head')
  return t || document.body
}
function mT(e) {
  return e === 'queue' ? 'prependQueue' : e ? 'prepend' : 'append'
}
function mp(e) {
  return Array.from((fd.get(e) || e).children).filter(function (t) {
    return t.tagName === 'STYLE'
  })
}
function A1(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
  if (!Tn()) return null
  var n = t.csp,
    r = t.prepend,
    i = t.priority,
    o = i === void 0 ? 0 : i,
    a = mT(r),
    s = a === 'prependQueue',
    l = document.createElement('style')
  l.setAttribute(pm, a),
    s && o && l.setAttribute(hm, ''.concat(o)),
    n != null && n.nonce && (l.nonce = n == null ? void 0 : n.nonce),
    (l.innerHTML = e)
  var u = Vl(t),
    c = u.firstChild
  if (r) {
    if (s) {
      var f = (t.styles || mp(u)).filter(function (d) {
        if (!['prepend', 'prependQueue'].includes(d.getAttribute(pm))) return !1
        var v = Number(d.getAttribute(hm) || 0)
        return o >= v
      })
      if (f.length) return u.insertBefore(l, f[f.length - 1].nextSibling), l
    }
    u.insertBefore(l, c)
  } else u.appendChild(l)
  return l
}
function F1(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = Vl(t)
  return (t.styles || mp(n)).find(function (r) {
    return r.getAttribute(I1(t)) === e
  })
}
function $1(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = F1(e, t)
  if (n) {
    var r = Vl(t)
    r.removeChild(n)
  }
}
function vT(e, t) {
  var n = fd.get(e)
  if (!n || !pT(document, n)) {
    var r = A1('', t),
      i = r.parentNode
    fd.set(e, i), e.removeChild(r)
  }
}
function yi(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = Vl(n),
    i = mp(r),
    o = B(B({}, n), {}, { styles: i })
  vT(r, o)
  var a = F1(t, o)
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
  var c = A1(e, o)
  return c.setAttribute(I1(o), t), c
}
function gT(e, t) {
  if (e == null) return {}
  var n = {}
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.includes(r)) continue
      n[r] = e[r]
    }
  return n
}
function Tr(e, t) {
  if (e == null) return {}
  var n,
    r,
    i = gT(e, t)
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e)
    for (r = 0; r < o.length; r++)
      (n = o[r]),
        t.includes(n) || ({}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]))
  }
  return i
}
function pd(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
    r = new Set()
  function i(o, a) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      l = r.has(o)
    if ((_t(!l, 'Warning: There may be circular references'), l)) return !1
    if (o === a) return !0
    if (n && s > 1) return !1
    r.add(o)
    var u = s + 1
    if (Array.isArray(o)) {
      if (!Array.isArray(a) || o.length !== a.length) return !1
      for (var c = 0; c < o.length; c++) if (!i(o[c], a[c], u)) return !1
      return !0
    }
    if (o && a && Y(o) === 'object' && Y(a) === 'object') {
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
var yT = '%'
function hd(e) {
  return e.join(yT)
}
var wT = (function () {
    function e(t) {
      et(this, e),
        D(this, 'instanceId', void 0),
        D(this, 'cache', new Map()),
        (this.instanceId = t)
    }
    return (
      tt(e, [
        {
          key: 'get',
          value: function (n) {
            return this.opGet(hd(n))
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
            return this.opUpdate(hd(n), r)
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
  Pi = 'data-token-hash',
  zt = 'data-css-hash',
  Dn = '__cssinjs_instance__'
function ST() {
  var e = Math.random().toString(12).slice(2)
  if (typeof document < 'u' && document.head && document.body) {
    var t = document.body.querySelectorAll('style['.concat(zt, ']')) || [],
      n = document.head.firstChild
    Array.from(t).forEach(function (i) {
      ;(i[Dn] = i[Dn] || e), i[Dn] === e && document.head.insertBefore(i, n)
    })
    var r = {}
    Array.from(document.querySelectorAll('style['.concat(zt, ']'))).forEach(
      function (i) {
        var o = i.getAttribute(zt)
        if (r[o]) {
          if (i[Dn] === e) {
            var a
            ;(a = i.parentNode) === null || a === void 0 || a.removeChild(i)
          }
        } else r[o] = !0
      }
    )
  }
  return new wT(e)
}
var Bl = P.createContext({ hashPriority: 'low', cache: ST(), defaultCache: !0 })
function bT(e, t) {
  if (e.length !== t.length) return !1
  for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1
  return !0
}
var vp = (function () {
  function e() {
    et(this, e),
      D(this, 'cache', void 0),
      D(this, 'keys', void 0),
      D(this, 'cacheCallTimes', void 0),
      (this.cache = new Map()),
      (this.keys = []),
      (this.cacheCallTimes = 0)
  }
  return (
    tt(e, [
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
                    var f = X(u, 2),
                      d = f[1]
                    return i.internalGet(c)[1] < d
                      ? [c, i.internalGet(c)[1]]
                      : u
                  },
                  [this.keys[0], this.cacheCallTimes]
                ),
                a = X(o, 1),
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
                return !bT(r, n)
              })),
              this.deleteByPath(this.cache, n)
            )
        }
      }
    ]),
    e
  )
})()
D(vp, 'MAX_CACHE_SIZE', 20)
D(vp, 'MAX_CACHE_OFFSET', 5)
var mm = 0,
  D1 = (function () {
    function e(t) {
      et(this, e),
        D(this, 'derivatives', void 0),
        D(this, 'id', void 0),
        (this.derivatives = Array.isArray(t) ? t : [t]),
        (this.id = mm),
        t.length === 0 && (t.length > 0, void 0),
        (mm += 1)
    }
    return (
      tt(e, [
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
  Au = new vp()
function md(e) {
  var t = Array.isArray(e) ? e : [e]
  return Au.has(t) || Au.set(t, new D1(t)), Au.get(t)
}
var xT = new WeakMap(),
  Fu = {}
function CT(e, t) {
  for (var n = xT, r = 0; r < t.length; r += 1) {
    var i = t[r]
    n.has(i) || n.set(i, new WeakMap()), (n = n.get(i))
  }
  return n.has(Fu) || n.set(Fu, e()), n.get(Fu)
}
var vm = new WeakMap()
function bo(e) {
  var t = vm.get(e) || ''
  return (
    t ||
      (Object.keys(e).forEach(function (n) {
        var r = e[n]
        ;(t += n),
          r instanceof D1
            ? (t += r.id)
            : r && Y(r) === 'object'
            ? (t += bo(r))
            : (t += r)
      }),
      (t = qo(t)),
      vm.set(e, t)),
    t
  )
}
function gm(e, t) {
  return qo(''.concat(t, '_').concat(bo(e)))
}
var vd = Tn()
function Go(e) {
  return typeof e == 'number' ? ''.concat(e, 'px') : e
}
function nl(e, t, n) {
  var r,
    i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
    o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1
  if (o) return e
  var a = B(B({}, i), {}, ((r = {}), D(r, Pi, t), D(r, zt, n), r)),
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
var bs = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ''
    return '--'
      .concat(n ? ''.concat(n, '-') : '')
      .concat(t)
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, '$1-$2')
      .replace(/([a-z])([A-Z0-9])/g, '$1-$2')
      .toLowerCase()
  },
  _T = function (t, n, r) {
    return Object.keys(t).length
      ? '.'
          .concat(n)
          .concat(r != null && r.scope ? '.'.concat(r.scope) : '', '{')
          .concat(
            Object.entries(t)
              .map(function (i) {
                var o = X(i, 2),
                  a = o[0],
                  s = o[1]
                return ''.concat(a, ':').concat(s, ';')
              })
              .join(''),
            '}'
          )
      : ''
  },
  z1 = function (t, n, r) {
    var i = {},
      o = {}
    return (
      Object.entries(t).forEach(function (a) {
        var s,
          l,
          u = X(a, 2),
          c = u[0],
          f = u[1]
        if (r != null && (s = r.preserve) !== null && s !== void 0 && s[c])
          o[c] = f
        else if (
          (typeof f == 'string' || typeof f == 'number') &&
          !(r != null && (l = r.ignore) !== null && l !== void 0 && l[c])
        ) {
          var d,
            v = bs(c, r == null ? void 0 : r.prefix)
          ;(i[v] =
            typeof f == 'number' &&
            !(r != null && (d = r.unitless) !== null && d !== void 0 && d[c])
              ? ''.concat(f, 'px')
              : String(f)),
            (o[c] = 'var('.concat(v, ')'))
        }
      }),
      [o, _T(i, n, { scope: r == null ? void 0 : r.scope })]
    )
  },
  ym = Tn() ? P.useLayoutEffect : P.useEffect,
  V1 = function (t, n) {
    var r = P.useRef(!0)
    ym(function () {
      return t(r.current)
    }, n),
      ym(function () {
        return (
          (r.current = !1),
          function () {
            r.current = !0
          }
        )
      }, [])
  },
  wm = function (t, n) {
    V1(function (r) {
      if (!r) return t()
    }, n)
  },
  ET = B({}, To),
  Sm = ET.useInsertionEffect,
  TT = function (t, n, r) {
    P.useMemo(t, r),
      V1(function () {
        return n(!0)
      }, r)
  },
  kT = Sm
    ? function (e, t, n) {
        return Sm(function () {
          return e(), t()
        }, n)
      }
    : TT,
  PT = B({}, To),
  MT = PT.useInsertionEffect,
  jT = function (t) {
    var n = [],
      r = !1
    function i(o) {
      r || n.push(o)
    }
    return (
      P.useEffect(function () {
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
  NT = function () {
    return function (t) {
      t()
    }
  },
  OT = typeof MT < 'u' ? jT : NT
function gp(e, t, n, r, i) {
  var o = P.useContext(Bl),
    a = o.cache,
    s = [e].concat(K(t)),
    l = hd(s),
    u = OT([l]),
    c = function (g) {
      a.opUpdate(l, function (y) {
        var b = y || [void 0, void 0],
          m = X(b, 2),
          p = m[0],
          h = p === void 0 ? 0 : p,
          S = m[1],
          x = S,
          _ = x || n(),
          C = [h, _]
        return g ? g(C) : C
      })
    }
  P.useMemo(
    function () {
      c()
    },
    [l]
  )
  var f = a.opGet(l),
    d = f[1]
  return (
    kT(
      function () {
        i == null || i(d)
      },
      function (v) {
        return (
          c(function (g) {
            var y = X(g, 2),
              b = y[0],
              m = y[1]
            return v && b === 0 && (i == null || i(d)), [b + 1, m]
          }),
          function () {
            a.opUpdate(l, function (g) {
              var y = g || [],
                b = X(y, 2),
                m = b[0],
                p = m === void 0 ? 0 : m,
                h = b[1],
                S = p - 1
              return S === 0
                ? (u(function () {
                    ;(v || !a.opGet(l)) && (r == null || r(h, !1))
                  }),
                  null)
                : [p - 1, h]
            })
          }
        )
      },
      [l]
    ),
    d
  )
}
var LT = {},
  RT = 'css',
  sr = new Map()
function IT(e) {
  sr.set(e, (sr.get(e) || 0) + 1)
}
function AT(e, t) {
  if (typeof document < 'u') {
    var n = document.querySelectorAll('style['.concat(Pi, '="').concat(e, '"]'))
    n.forEach(function (r) {
      if (r[Dn] === t) {
        var i
        ;(i = r.parentNode) === null || i === void 0 || i.removeChild(r)
      }
    })
  }
}
var FT = 0
function $T(e, t) {
  sr.set(e, (sr.get(e) || 0) - 1)
  var n = Array.from(sr.keys()),
    r = n.filter(function (i) {
      var o = sr.get(i) || 0
      return o <= 0
    })
  n.length - r.length > FT &&
    r.forEach(function (i) {
      AT(i, t), sr.delete(i)
    })
}
var DT = function (t, n, r, i) {
    var o = r.getDerivativeToken(t),
      a = B(B({}, o), n)
    return i && (a = i(a)), a
  },
  B1 = 'token'
function zT(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = P.useContext(Bl),
    i = r.cache.instanceId,
    o = r.container,
    a = n.salt,
    s = a === void 0 ? '' : a,
    l = n.override,
    u = l === void 0 ? LT : l,
    c = n.formatToken,
    f = n.getComputedToken,
    d = n.cssVar,
    v = CT(function () {
      return Object.assign.apply(Object, [{}].concat(K(t)))
    }, t),
    g = bo(v),
    y = bo(u),
    b = d ? bo(d) : '',
    m = gp(
      B1,
      [s, e.id, g, y, b],
      function () {
        var p,
          h = f ? f(v, u, e) : DT(v, u, e, c),
          S = B({}, h),
          x = ''
        if (d) {
          var _ = z1(h, d.key, {
              prefix: d.prefix,
              ignore: d.ignore,
              unitless: d.unitless,
              preserve: d.preserve
            }),
            C = X(_, 2)
          ;(h = C[0]), (x = C[1])
        }
        var E = gm(h, s)
        ;(h._tokenKey = E), (S._tokenKey = gm(S, s))
        var T =
          (p = d == null ? void 0 : d.key) !== null && p !== void 0 ? p : E
        ;(h._themeKey = T), IT(T)
        var k = ''.concat(RT, '-').concat(qo(E))
        return (h._hashId = k), [h, k, S, x, (d == null ? void 0 : d.key) || '']
      },
      function (p) {
        $T(p[0]._themeKey, i)
      },
      function (p) {
        var h = X(p, 4),
          S = h[0],
          x = h[3]
        if (d && x) {
          var _ = yi(x, qo('css-variables-'.concat(S._themeKey)), {
            mark: zt,
            prepend: 'queue',
            attachTo: o,
            priority: -999
          })
          ;(_[Dn] = i), _.setAttribute(Pi, S._themeKey)
        }
      }
    )
  return m
}
var VT = function (t, n, r) {
    var i = X(t, 5),
      o = i[2],
      a = i[3],
      s = i[4],
      l = r || {},
      u = l.plain
    if (!a) return null
    var c = o._tokenKey,
      f = -999,
      d = { 'data-rc-order': 'prependQueue', 'data-rc-priority': ''.concat(f) },
      v = nl(a, s, c, d, u)
    return [f, c, v]
  },
  BT = {
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
  H1 = 'comm',
  W1 = 'rule',
  U1 = 'decl',
  HT = '@import',
  WT = '@keyframes',
  UT = '@layer',
  q1 = Math.abs,
  yp = String.fromCharCode
function G1(e) {
  return e.trim()
}
function xs(e, t, n) {
  return e.replace(t, n)
}
function qT(e, t, n) {
  return e.indexOf(t, n)
}
function Qo(e, t) {
  return e.charCodeAt(t) | 0
}
function Mi(e, t, n) {
  return e.slice(t, n)
}
function Kt(e) {
  return e.length
}
function GT(e) {
  return e.length
}
function Wa(e, t) {
  return t.push(e), e
}
var Hl = 1,
  ji = 1,
  Q1 = 0,
  Pt = 0,
  we = 0,
  Di = ''
function wp(e, t, n, r, i, o, a, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: o,
    line: Hl,
    column: ji,
    length: a,
    return: '',
    siblings: s
  }
}
function QT() {
  return we
}
function KT() {
  return (
    (we = Pt > 0 ? Qo(Di, --Pt) : 0), ji--, we === 10 && ((ji = 1), Hl--), we
  )
}
function Vt() {
  return (
    (we = Pt < Q1 ? Qo(Di, Pt++) : 0), ji++, we === 10 && ((ji = 1), Hl++), we
  )
}
function zn() {
  return Qo(Di, Pt)
}
function Cs() {
  return Pt
}
function Wl(e, t) {
  return Mi(Di, e, t)
}
function Ko(e) {
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
function XT(e) {
  return (Hl = ji = 1), (Q1 = Kt((Di = e))), (Pt = 0), []
}
function YT(e) {
  return (Di = ''), e
}
function $u(e) {
  return G1(Wl(Pt - 1, gd(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}
function ZT(e) {
  for (; (we = zn()) && we < 33; ) Vt()
  return Ko(e) > 2 || Ko(we) > 3 ? '' : ' '
}
function JT(e, t) {
  for (
    ;
    --t &&
    Vt() &&
    !(we < 48 || we > 102 || (we > 57 && we < 65) || (we > 70 && we < 97));

  );
  return Wl(e, Cs() + (t < 6 && zn() == 32 && Vt() == 32))
}
function gd(e) {
  for (; Vt(); )
    switch (we) {
      case e:
        return Pt
      case 34:
      case 39:
        e !== 34 && e !== 39 && gd(we)
        break
      case 40:
        e === 41 && gd(e)
        break
      case 92:
        Vt()
        break
    }
  return Pt
}
function e4(e, t) {
  for (; Vt() && e + we !== 57; ) if (e + we === 84 && zn() === 47) break
  return '/*' + Wl(t, Pt - 1) + '*' + yp(e === 47 ? e : Vt())
}
function t4(e) {
  for (; !Ko(zn()); ) Vt()
  return Wl(e, Pt)
}
function n4(e) {
  return YT(_s('', null, null, null, [''], (e = XT(e)), 0, [0], e))
}
function _s(e, t, n, r, i, o, a, s, l) {
  for (
    var u = 0,
      c = 0,
      f = a,
      d = 0,
      v = 0,
      g = 0,
      y = 1,
      b = 1,
      m = 1,
      p = 0,
      h = '',
      S = i,
      x = o,
      _ = r,
      C = h;
    b;

  )
    switch (((g = p), (p = Vt()))) {
      case 40:
        if (g != 108 && Qo(C, f - 1) == 58) {
          qT((C += xs($u(p), '&', '&\f')), '&\f', q1(u ? s[u - 1] : 0)) != -1 &&
            (m = -1)
          break
        }
      case 34:
      case 39:
      case 91:
        C += $u(p)
        break
      case 9:
      case 10:
      case 13:
      case 32:
        C += ZT(g)
        break
      case 92:
        C += JT(Cs() - 1, 7)
        continue
      case 47:
        switch (zn()) {
          case 42:
          case 47:
            Wa(r4(e4(Vt(), Cs()), t, n, l), l),
              (Ko(g || 1) == 5 || Ko(zn() || 1) == 5) &&
                Kt(C) &&
                Mi(C, -1, void 0) !== ' ' &&
                (C += ' ')
            break
          default:
            C += '/'
        }
        break
      case 123 * y:
        s[u++] = Kt(C) * m
      case 125 * y:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            b = 0
          case 59 + c:
            m == -1 && (C = xs(C, /\f/g, '')),
              v > 0 &&
                (Kt(C) - f || (y === 0 && g === 47)) &&
                Wa(
                  v > 32
                    ? xm(C + ';', r, n, f - 1, l)
                    : xm(xs(C, ' ', '') + ';', r, n, f - 2, l),
                  l
                )
            break
          case 59:
            C += ';'
          default:
            if (
              (Wa(
                (_ = bm(C, t, n, u, c, i, s, h, (S = []), (x = []), f, o)),
                o
              ),
              p === 123)
            )
              if (c === 0) _s(C, t, _, _, S, o, f, s, x)
              else
                switch (d === 99 && Qo(C, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    _s(
                      e,
                      _,
                      _,
                      r && Wa(bm(e, _, _, 0, 0, i, s, h, i, (S = []), f, x), x),
                      i,
                      x,
                      f,
                      s,
                      r ? S : x
                    )
                    break
                  default:
                    _s(C, _, _, _, [''], x, 0, s, x)
                }
        }
        ;(u = c = v = 0), (y = m = 1), (h = C = ''), (f = a)
        break
      case 58:
        ;(f = 1 + Kt(C)), (v = g)
      default:
        if (y < 1) {
          if (p == 123) --y
          else if (p == 125 && y++ == 0 && KT() == 125) continue
        }
        switch (((C += yp(p)), p * y)) {
          case 38:
            m = c > 0 ? 1 : ((C += '\f'), -1)
            break
          case 44:
            ;(s[u++] = (Kt(C) - 1) * m), (m = 1)
            break
          case 64:
            zn() === 45 && (C += $u(Vt())),
              (d = zn()),
              (c = f = Kt((h = C += t4(Cs())))),
              p++
            break
          case 45:
            g === 45 && Kt(C) == 2 && (y = 0)
        }
    }
  return o
}
function bm(e, t, n, r, i, o, a, s, l, u, c, f) {
  for (
    var d = i - 1, v = i === 0 ? o : [''], g = GT(v), y = 0, b = 0, m = 0;
    y < r;
    ++y
  )
    for (var p = 0, h = Mi(e, d + 1, (d = q1((b = a[y])))), S = e; p < g; ++p)
      (S = G1(b > 0 ? v[p] + ' ' + h : xs(h, /&\f/g, v[p]))) && (l[m++] = S)
  return wp(e, t, n, i === 0 ? W1 : s, l, u, c, f)
}
function r4(e, t, n, r) {
  return wp(e, t, n, H1, yp(QT()), Mi(e, 2, -2), 0, r)
}
function xm(e, t, n, r, i) {
  return wp(e, t, n, U1, Mi(e, 0, r), Mi(e, r + 1, -1), r, i)
}
function yd(e, t) {
  for (var n = '', r = 0; r < e.length; r++) n += t(e[r], r, e, t) || ''
  return n
}
function i4(e, t, n, r) {
  switch (e.type) {
    case UT:
      if (e.children.length) break
    case HT:
    case U1:
      return (e.return = e.return || e.value)
    case H1:
      return ''
    case WT:
      return (e.return = e.value + '{' + yd(e.children, r) + '}')
    case W1:
      if (!Kt((e.value = e.props.join(',')))) return ''
  }
  return Kt((n = yd(e.children, r))) ? (e.return = e.value + '{' + n + '}') : ''
}
var Cm = 'data-ant-cssinjs-cache-path',
  K1 = '_FILE_STYLE__',
  gr,
  X1 = !0
function o4() {
  if (!gr && ((gr = {}), Tn())) {
    var e = document.createElement('div')
    ;(e.className = Cm),
      (e.style.position = 'fixed'),
      (e.style.visibility = 'hidden'),
      (e.style.top = '-9999px'),
      document.body.appendChild(e)
    var t = getComputedStyle(e).content || ''
    ;(t = t.replace(/^"/, '').replace(/"$/, '')),
      t.split(';').forEach(function (i) {
        var o = i.split(':'),
          a = X(o, 2),
          s = a[0],
          l = a[1]
        gr[s] = l
      })
    var n = document.querySelector('style['.concat(Cm, ']'))
    if (n) {
      var r
      ;(X1 = !1),
        (r = n.parentNode) === null || r === void 0 || r.removeChild(n)
    }
    document.body.removeChild(e)
  }
}
function a4(e) {
  return o4(), !!gr[e]
}
function s4(e) {
  var t = gr[e],
    n = null
  if (t && Tn())
    if (X1) n = K1
    else {
      var r = document.querySelector(
        'style['.concat(zt, '="').concat(gr[e], '"]')
      )
      r ? (n = r.innerHTML) : delete gr[e]
    }
  return [n, t]
}
var l4 = '_skip_check_',
  Y1 = '_multi_value_'
function Es(e) {
  var t = yd(n4(e), i4)
  return t.replace(/\{%%%\:[^;];}/g, ';')
}
function u4(e) {
  return Y(e) === 'object' && e && (l4 in e || Y1 in e)
}
function _m(e, t, n) {
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
        [u].concat(K(l.slice(1))).join(' ')
      )
    })
  return o.join(',')
}
var c4 = function e(t) {
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
    v = {}
  function g(m) {
    var p = m.getName(s)
    if (!v[p]) {
      var h = e(m.style, n, { root: !1, parentSelectors: a }),
        S = X(h, 1),
        x = S[0]
      v[p] = '@keyframes '.concat(m.getName(s)).concat(x)
    }
  }
  function y(m) {
    var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : []
    return (
      m.forEach(function (h) {
        Array.isArray(h) ? y(h, p) : h && p.push(h)
      }),
      p
    )
  }
  var b = y(Array.isArray(t) ? t : [t])
  return (
    b.forEach(function (m) {
      var p = typeof m == 'string' && !i ? {} : m
      if (typeof p == 'string')
        d += ''.concat(
          p,
          `
`
        )
      else if (p._keyframe) g(p)
      else {
        var h = f.reduce(function (S, x) {
          var _
          return (
            (x == null || (_ = x.visit) === null || _ === void 0
              ? void 0
              : _.call(x, S)) || S
          )
        }, p)
        Object.keys(h).forEach(function (S) {
          var x = h[S]
          if (
            Y(x) === 'object' &&
            x &&
            (S !== 'animationName' || !x._keyframe) &&
            !u4(x)
          ) {
            var _ = !1,
              C = S.trim(),
              E = !1
            ;(i || o) && s
              ? C.startsWith('@')
                ? (_ = !0)
                : C === '&'
                ? (C = _m('', s, u))
                : (C = _m(S, s, u))
              : i && !s && (C === '&' || C === '') && ((C = ''), (E = !0))
            var T = e(x, n, {
                root: E,
                injectHash: _,
                parentSelectors: [].concat(K(a), [C])
              }),
              k = X(T, 2),
              M = k[0],
              L = k[1]
            ;(v = B(B({}, v), L)), (d += ''.concat(C).concat(M))
          } else {
            let z = function (I, A) {
              var j = I.replace(/[A-Z]/g, function ($) {
                  return '-'.concat($.toLowerCase())
                }),
                F = A
              !BT[I] &&
                typeof F == 'number' &&
                F !== 0 &&
                (F = ''.concat(F, 'px')),
                I === 'animationName' &&
                  A !== null &&
                  A !== void 0 &&
                  A._keyframe &&
                  (g(A), (F = A.getName(s))),
                (d += ''.concat(j, ':').concat(F, ';'))
            }
            var O,
              R =
                (O = x == null ? void 0 : x.value) !== null && O !== void 0
                  ? O
                  : x
            Y(x) === 'object' &&
            x !== null &&
            x !== void 0 &&
            x[Y1] &&
            Array.isArray(R)
              ? R.forEach(function (I) {
                  z(S, I)
                })
              : z(S, R)
          }
        })
      }
    }),
    i
      ? l &&
        (d && (d = '@layer '.concat(l.name, ' {').concat(d, '}')),
        l.dependencies &&
          (v['@layer '.concat(l.name)] = l.dependencies.map(function (m) {
            return '@layer '.concat(m, ', ').concat(l.name, ';')
          }).join(`
`)))
      : (d = '{'.concat(d, '}')),
    [d, v]
  )
}
function Z1(e, t) {
  return qo(''.concat(e.join('%')).concat(t))
}
function d4() {
  return null
}
var J1 = 'style'
function wd(e, t) {
  var n = e.token,
    r = e.path,
    i = e.hashId,
    o = e.layer,
    a = e.nonce,
    s = e.clientOnly,
    l = e.order,
    u = l === void 0 ? 0 : l,
    c = P.useContext(Bl),
    f = c.autoClear
  c.mock
  var d = c.defaultCache,
    v = c.hashPriority,
    g = c.container,
    y = c.ssrInline,
    b = c.transformers,
    m = c.linters,
    p = c.cache,
    h = c.layer,
    S = n._tokenKey,
    x = [S]
  h && x.push('layer'), x.push.apply(x, K(r))
  var _ = vd,
    C = gp(
      J1,
      x,
      function () {
        var L = x.join('|')
        if (a4(L)) {
          var O = s4(L),
            R = X(O, 2),
            z = R[0],
            I = R[1]
          if (z) return [z, S, I, {}, s, u]
        }
        var A = t(),
          j = c4(A, {
            hashId: i,
            hashPriority: v,
            layer: h ? o : void 0,
            path: r.join('-'),
            transformers: b,
            linters: m
          }),
          F = X(j, 2),
          $ = F[0],
          V = F[1],
          W = Es($),
          Q = Z1(x, W)
        return [W, S, Q, V, s, u]
      },
      function (L, O) {
        var R = X(L, 3),
          z = R[2]
        ;(O || f) && vd && $1(z, { mark: zt })
      },
      function (L) {
        var O = X(L, 4),
          R = O[0]
        O[1]
        var z = O[2],
          I = O[3]
        if (_ && R !== K1) {
          var A = {
              mark: zt,
              prepend: h ? !1 : 'queue',
              attachTo: g,
              priority: u
            },
            j = typeof a == 'function' ? a() : a
          j && (A.csp = { nonce: j })
          var F = [],
            $ = []
          Object.keys(I).forEach(function (W) {
            W.startsWith('@layer') ? F.push(W) : $.push(W)
          }),
            F.forEach(function (W) {
              yi(
                Es(I[W]),
                '_layer-'.concat(W),
                B(B({}, A), {}, { prepend: !0 })
              )
            })
          var V = yi(R, z, A)
          ;(V[Dn] = p.instanceId),
            V.setAttribute(Pi, S),
            $.forEach(function (W) {
              yi(Es(I[W]), '_effect-'.concat(W), A)
            })
        }
      }
    ),
    E = X(C, 3),
    T = E[0],
    k = E[1],
    M = E[2]
  return function (L) {
    var O
    if (!y || _ || !d) O = P.createElement(d4, null)
    else {
      var R
      O = P.createElement(
        'style',
        Er({}, ((R = {}), D(R, Pi, k), D(R, zt, M), R), {
          dangerouslySetInnerHTML: { __html: T }
        })
      )
    }
    return P.createElement(P.Fragment, null, O, L)
  }
}
var f4 = function (t, n, r) {
    var i = X(t, 6),
      o = i[0],
      a = i[1],
      s = i[2],
      l = i[3],
      u = i[4],
      c = i[5],
      f = r || {},
      d = f.plain
    if (u) return null
    var v = o,
      g = { 'data-rc-order': 'prependQueue', 'data-rc-priority': ''.concat(c) }
    return (
      (v = nl(o, a, s, g, d)),
      l &&
        Object.keys(l).forEach(function (y) {
          if (!n[y]) {
            n[y] = !0
            var b = Es(l[y]),
              m = nl(b, a, '_effect-'.concat(y), g, d)
            y.startsWith('@layer') ? (v = m + v) : (v += m)
          }
        }),
      [c, s, v]
    )
  },
  ey = 'cssVar',
  p4 = function (t, n) {
    var r = t.key,
      i = t.prefix,
      o = t.unitless,
      a = t.ignore,
      s = t.token,
      l = t.scope,
      u = l === void 0 ? '' : l,
      c = P.useContext(Bl),
      f = c.cache.instanceId,
      d = c.container,
      v = s._tokenKey,
      g = [].concat(K(t.path), [r, u, v]),
      y = gp(
        ey,
        g,
        function () {
          var b = n(),
            m = z1(b, r, { prefix: i, unitless: o, ignore: a, scope: u }),
            p = X(m, 2),
            h = p[0],
            S = p[1],
            x = Z1(g, S)
          return [h, S, x, r]
        },
        function (b) {
          var m = X(b, 3),
            p = m[2]
          vd && $1(p, { mark: zt })
        },
        function (b) {
          var m = X(b, 3),
            p = m[1],
            h = m[2]
          if (p) {
            var S = yi(p, h, {
              mark: zt,
              prepend: 'queue',
              attachTo: d,
              priority: -999
            })
            ;(S[Dn] = f), S.setAttribute(Pi, r)
          }
        }
      )
    return y
  },
  h4 = function (t, n, r) {
    var i = X(t, 4),
      o = i[1],
      a = i[2],
      s = i[3],
      l = r || {},
      u = l.plain
    if (!o) return null
    var c = -999,
      f = { 'data-rc-order': 'prependQueue', 'data-rc-priority': ''.concat(c) },
      d = nl(o, s, a, f, u)
    return [c, a, d]
  },
  Ji
;(Ji = {}), D(Ji, J1, f4), D(Ji, B1, VT), D(Ji, ey, h4)
function Hr(e) {
  return (e.notSplit = !0), e
}
Hr(['borderTop', 'borderBottom']),
  Hr(['borderTop']),
  Hr(['borderBottom']),
  Hr(['borderLeft', 'borderRight']),
  Hr(['borderLeft']),
  Hr(['borderRight'])
var m4 = P.createContext({})
function v4(e) {
  return L1(e) || M1(e) || pp(e) || R1()
}
function Yt(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null) return
    n = n[t[r]]
  }
  return n
}
function ty(e, t, n, r) {
  if (!t.length) return n
  var i = v4(t),
    o = i[0],
    a = i.slice(1),
    s
  return (
    !e && typeof o == 'number'
      ? (s = [])
      : Array.isArray(e)
      ? (s = K(e))
      : (s = B({}, e)),
    r && n === void 0 && a.length === 1
      ? delete s[o][a[0]]
      : (s[o] = ty(s[o], a, n, r)),
    s
  )
}
function Rt(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1
  return t.length && r && n === void 0 && !Yt(e, t.slice(0, -1))
    ? e
    : ty(e, t, n, r)
}
function g4(e) {
  return (
    Y(e) === 'object' &&
    e !== null &&
    Object.getPrototypeOf(e) === Object.prototype
  )
}
function Em(e) {
  return Array.isArray(e) ? [] : {}
}
var y4 = typeof Reflect > 'u' ? Object.keys : Reflect.ownKeys
function li() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n]
  var r = Em(t[0])
  return (
    t.forEach(function (i) {
      function o(a, s) {
        var l = new Set(s),
          u = Yt(i, a),
          c = Array.isArray(u)
        if (c || g4(u)) {
          if (!l.has(u)) {
            l.add(u)
            var f = Yt(r, a)
            c
              ? (r = Rt(r, a, []))
              : (!f || Y(f) !== 'object') && (r = Rt(r, a, Em(u))),
              y4(u).forEach(function (d) {
                o([].concat(K(a), [d]), l)
              })
          }
        } else r = Rt(r, a, u)
      }
      o([])
    }),
    r
  )
}
const w4 = P.createContext({}),
  S4 = P.createContext(void 0)
var b4 = {
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
  x4 = {
    yearFormat: 'YYYY',
    dayFormat: 'D',
    cellMeridiemFormat: 'A',
    monthBeforeYear: !0
  },
  C4 = B(
    B({}, x4),
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
const ny = {
    placeholder: 'Select time',
    rangePlaceholder: ['Start time', 'End time']
  },
  Tm = {
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
      C4
    ),
    timePickerLocale: Object.assign({}, ny)
  },
  nt = '${label} is not a valid ${type}',
  Ul = {
    locale: 'en',
    Pagination: b4,
    DatePicker: Tm,
    TimePicker: ny,
    Calendar: Tm,
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
          string: nt,
          method: nt,
          array: nt,
          object: nt,
          number: nt,
          date: nt,
          boolean: nt,
          integer: nt,
          float: nt,
          regexp: nt,
          email: nt,
          url: nt,
          hex: nt
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
Object.assign({}, Ul.Modal)
let Ts = []
const km = () =>
  Ts.reduce((e, t) => Object.assign(Object.assign({}, e), t), Ul.Modal)
function _4(e) {
  if (e) {
    const t = Object.assign({}, e)
    return (
      Ts.push(t),
      km(),
      () => {
        ;(Ts = Ts.filter((n) => n !== t)), km()
      }
    )
  }
  Object.assign({}, Ul.Modal)
}
const ry = P.createContext(void 0),
  E4 = 'internalMark',
  T4 = (e) => {
    const { locale: t = {}, children: n, _ANT_MARK__: r } = e
    P.useEffect(() => _4(t == null ? void 0 : t.Modal), [t])
    const i = P.useMemo(
      () => Object.assign(Object.assign({}, t), { exist: !0 }),
      [t]
    )
    return P.createElement(ry.Provider, { value: i }, n)
  }
function Re(e, t) {
  k4(e) && (e = '100%')
  var n = P4(e)
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
function Ua(e) {
  return Math.min(1, Math.max(0, e))
}
function k4(e) {
  return typeof e == 'string' && e.indexOf('.') !== -1 && parseFloat(e) === 1
}
function P4(e) {
  return typeof e == 'string' && e.indexOf('%') !== -1
}
function iy(e) {
  return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e
}
function qa(e) {
  return e <= 1 ? ''.concat(Number(e) * 100, '%') : e
}
function dr(e) {
  return e.length === 1 ? '0' + e : String(e)
}
function M4(e, t, n) {
  return { r: Re(e, 255) * 255, g: Re(t, 255) * 255, b: Re(n, 255) * 255 }
}
function Pm(e, t, n) {
  ;(e = Re(e, 255)), (t = Re(t, 255)), (n = Re(n, 255))
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
function Du(e, t, n) {
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
function j4(e, t, n) {
  var r, i, o
  if (((e = Re(e, 360)), (t = Re(t, 100)), (n = Re(n, 100)), t === 0))
    (i = n), (o = n), (r = n)
  else {
    var a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - a
    ;(r = Du(s, a, e + 1 / 3)), (i = Du(s, a, e)), (o = Du(s, a, e - 1 / 3))
  }
  return { r: r * 255, g: i * 255, b: o * 255 }
}
function Sd(e, t, n) {
  ;(e = Re(e, 255)), (t = Re(t, 255)), (n = Re(n, 255))
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
function N4(e, t, n) {
  ;(e = Re(e, 360) * 6), (t = Re(t, 100)), (n = Re(n, 100))
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
function bd(e, t, n, r) {
  var i = [
    dr(Math.round(e).toString(16)),
    dr(Math.round(t).toString(16)),
    dr(Math.round(n).toString(16))
  ]
  return r &&
    i[0].startsWith(i[0].charAt(1)) &&
    i[1].startsWith(i[1].charAt(1)) &&
    i[2].startsWith(i[2].charAt(1))
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join('')
}
function O4(e, t, n, r, i) {
  var o = [
    dr(Math.round(e).toString(16)),
    dr(Math.round(t).toString(16)),
    dr(Math.round(n).toString(16)),
    dr(L4(r))
  ]
  return i &&
    o[0].startsWith(o[0].charAt(1)) &&
    o[1].startsWith(o[1].charAt(1)) &&
    o[2].startsWith(o[2].charAt(1)) &&
    o[3].startsWith(o[3].charAt(1))
    ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0)
    : o.join('')
}
function L4(e) {
  return Math.round(parseFloat(e) * 255).toString(16)
}
function Mm(e) {
  return it(e) / 255
}
function it(e) {
  return parseInt(e, 16)
}
function R4(e) {
  return { r: e >> 16, g: (e & 65280) >> 8, b: e & 255 }
}
var xd = {
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
function Kr(e) {
  var t = { r: 0, g: 0, b: 0 },
    n = 1,
    r = null,
    i = null,
    o = null,
    a = !1,
    s = !1
  return (
    typeof e == 'string' && (e = F4(e)),
    typeof e == 'object' &&
      (sn(e.r) && sn(e.g) && sn(e.b)
        ? ((t = M4(e.r, e.g, e.b)),
          (a = !0),
          (s = String(e.r).substr(-1) === '%' ? 'prgb' : 'rgb'))
        : sn(e.h) && sn(e.s) && sn(e.v)
        ? ((r = qa(e.s)),
          (i = qa(e.v)),
          (t = N4(e.h, r, i)),
          (a = !0),
          (s = 'hsv'))
        : sn(e.h) &&
          sn(e.s) &&
          sn(e.l) &&
          ((r = qa(e.s)),
          (o = qa(e.l)),
          (t = j4(e.h, r, o)),
          (a = !0),
          (s = 'hsl')),
      Object.prototype.hasOwnProperty.call(e, 'a') && (n = e.a)),
    (n = iy(n)),
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
var I4 = '[-\\+]?\\d+%?',
  A4 = '[-\\+]?\\d*\\.\\d+%?',
  Vn = '(?:'.concat(A4, ')|(?:').concat(I4, ')'),
  zu = '[\\s|\\(]+('
    .concat(Vn, ')[,|\\s]+(')
    .concat(Vn, ')[,|\\s]+(')
    .concat(Vn, ')\\s*\\)?'),
  Vu = '[\\s|\\(]+('
    .concat(Vn, ')[,|\\s]+(')
    .concat(Vn, ')[,|\\s]+(')
    .concat(Vn, ')[,|\\s]+(')
    .concat(Vn, ')\\s*\\)?'),
  Nt = {
    CSS_UNIT: new RegExp(Vn),
    rgb: new RegExp('rgb' + zu),
    rgba: new RegExp('rgba' + Vu),
    hsl: new RegExp('hsl' + zu),
    hsla: new RegExp('hsla' + Vu),
    hsv: new RegExp('hsv' + zu),
    hsva: new RegExp('hsva' + Vu),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  }
function F4(e) {
  if (((e = e.trim().toLowerCase()), e.length === 0)) return !1
  var t = !1
  if (xd[e]) (e = xd[e]), (t = !0)
  else if (e === 'transparent')
    return { r: 0, g: 0, b: 0, a: 0, format: 'name' }
  var n = Nt.rgb.exec(e)
  return n
    ? { r: n[1], g: n[2], b: n[3] }
    : ((n = Nt.rgba.exec(e)),
      n
        ? { r: n[1], g: n[2], b: n[3], a: n[4] }
        : ((n = Nt.hsl.exec(e)),
          n
            ? { h: n[1], s: n[2], l: n[3] }
            : ((n = Nt.hsla.exec(e)),
              n
                ? { h: n[1], s: n[2], l: n[3], a: n[4] }
                : ((n = Nt.hsv.exec(e)),
                  n
                    ? { h: n[1], s: n[2], v: n[3] }
                    : ((n = Nt.hsva.exec(e)),
                      n
                        ? { h: n[1], s: n[2], v: n[3], a: n[4] }
                        : ((n = Nt.hex8.exec(e)),
                          n
                            ? {
                                r: it(n[1]),
                                g: it(n[2]),
                                b: it(n[3]),
                                a: Mm(n[4]),
                                format: t ? 'name' : 'hex8'
                              }
                            : ((n = Nt.hex6.exec(e)),
                              n
                                ? {
                                    r: it(n[1]),
                                    g: it(n[2]),
                                    b: it(n[3]),
                                    format: t ? 'name' : 'hex'
                                  }
                                : ((n = Nt.hex4.exec(e)),
                                  n
                                    ? {
                                        r: it(n[1] + n[1]),
                                        g: it(n[2] + n[2]),
                                        b: it(n[3] + n[3]),
                                        a: Mm(n[4] + n[4]),
                                        format: t ? 'name' : 'hex8'
                                      }
                                    : ((n = Nt.hex3.exec(e)),
                                      n
                                        ? {
                                            r: it(n[1] + n[1]),
                                            g: it(n[2] + n[2]),
                                            b: it(n[3] + n[3]),
                                            format: t ? 'name' : 'hex'
                                          }
                                        : !1)))))))))
}
function sn(e) {
  return !!Nt.CSS_UNIT.exec(String(e))
}
var He = (function () {
    function e(t, n) {
      t === void 0 && (t = ''), n === void 0 && (n = {})
      var r
      if (t instanceof e) return t
      typeof t == 'number' && (t = R4(t)), (this.originalInput = t)
      var i = Kr(t)
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
          (this.a = iy(t)), (this.roundA = Math.round(100 * this.a) / 100), this
        )
      }),
      (e.prototype.isMonochrome = function () {
        var t = this.toHsl().s
        return t === 0
      }),
      (e.prototype.toHsv = function () {
        var t = Sd(this.r, this.g, this.b)
        return { h: t.h * 360, s: t.s, v: t.v, a: this.a }
      }),
      (e.prototype.toHsvString = function () {
        var t = Sd(this.r, this.g, this.b),
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
        var t = Pm(this.r, this.g, this.b)
        return { h: t.h * 360, s: t.s, l: t.l, a: this.a }
      }),
      (e.prototype.toHslString = function () {
        var t = Pm(this.r, this.g, this.b),
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
        return t === void 0 && (t = !1), bd(this.r, this.g, this.b, t)
      }),
      (e.prototype.toHexString = function (t) {
        return t === void 0 && (t = !1), '#' + this.toHex(t)
      }),
      (e.prototype.toHex8 = function (t) {
        return t === void 0 && (t = !1), O4(this.r, this.g, this.b, this.a, t)
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
          return ''.concat(Math.round(Re(n, 255) * 100), '%')
        }
        return { r: t(this.r), g: t(this.g), b: t(this.b), a: this.a }
      }),
      (e.prototype.toPercentageRgbString = function () {
        var t = function (n) {
          return Math.round(Re(n, 255) * 100)
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
          var t = '#' + bd(this.r, this.g, this.b, !1),
            n = 0,
            r = Object.entries(xd);
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
        return (n.l += t / 100), (n.l = Ua(n.l)), new e(n)
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
        return (n.l -= t / 100), (n.l = Ua(n.l)), new e(n)
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
        return (n.s -= t / 100), (n.s = Ua(n.s)), new e(n)
      }),
      (e.prototype.saturate = function (t) {
        t === void 0 && (t = 10)
        var n = this.toHsl()
        return (n.s += t / 100), (n.s = Ua(n.s)), new e(n)
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
  Ga = 2,
  jm = 0.16,
  $4 = 0.05,
  D4 = 0.05,
  z4 = 0.15,
  oy = 5,
  ay = 4,
  V4 = [
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
function Nm(e) {
  var t = e.r,
    n = e.g,
    r = e.b,
    i = Sd(t, n, r)
  return { h: i.h * 360, s: i.s, v: i.v }
}
function Qa(e) {
  var t = e.r,
    n = e.g,
    r = e.b
  return '#'.concat(bd(t, n, r, !1))
}
function B4(e, t, n) {
  var r = n / 100,
    i = {
      r: (t.r - e.r) * r + e.r,
      g: (t.g - e.g) * r + e.g,
      b: (t.b - e.b) * r + e.b
    }
  return i
}
function Om(e, t, n) {
  var r
  return (
    Math.round(e.h) >= 60 && Math.round(e.h) <= 240
      ? (r = n ? Math.round(e.h) - Ga * t : Math.round(e.h) + Ga * t)
      : (r = n ? Math.round(e.h) + Ga * t : Math.round(e.h) - Ga * t),
    r < 0 ? (r += 360) : r >= 360 && (r -= 360),
    r
  )
}
function Lm(e, t, n) {
  if (e.h === 0 && e.s === 0) return e.s
  var r
  return (
    n ? (r = e.s - jm * t) : t === ay ? (r = e.s + jm) : (r = e.s + $4 * t),
    r > 1 && (r = 1),
    n && t === oy && r > 0.1 && (r = 0.1),
    r < 0.06 && (r = 0.06),
    Number(r.toFixed(2))
  )
}
function Rm(e, t, n) {
  var r
  return (
    n ? (r = e.v + D4 * t) : (r = e.v - z4 * t),
    r > 1 && (r = 1),
    Number(r.toFixed(2))
  )
}
function rl(e) {
  for (
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = [],
      r = Kr(e),
      i = oy;
    i > 0;
    i -= 1
  ) {
    var o = Nm(r),
      a = Qa(Kr({ h: Om(o, i, !0), s: Lm(o, i, !0), v: Rm(o, i, !0) }))
    n.push(a)
  }
  n.push(Qa(r))
  for (var s = 1; s <= ay; s += 1) {
    var l = Nm(r),
      u = Qa(Kr({ h: Om(l, s), s: Lm(l, s), v: Rm(l, s) }))
    n.push(u)
  }
  return t.theme === 'dark'
    ? V4.map(function (c) {
        var f = c.index,
          d = c.opacity,
          v = Qa(B4(Kr(t.backgroundColor || '#141414'), Kr(n[f]), d * 100))
        return v
      })
    : n
}
var Bu = {
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
  Cd = [
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
Cd.primary = Cd[5]
var _d = [
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
_d.primary = _d[5]
var Ed = [
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
Ed.primary = Ed[5]
var Td = [
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
Td.primary = Td[5]
var kd = [
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
kd.primary = kd[5]
var Pd = [
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
Pd.primary = Pd[5]
var Md = [
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
Md.primary = Md[5]
var jd = [
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
jd.primary = jd[5]
var Nd = [
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
Nd.primary = Nd[5]
var Od = [
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
Od.primary = Od[5]
var Ld = [
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
Ld.primary = Ld[5]
var Rd = [
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
Rd.primary = Rd[5]
var Id = [
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
Id.primary = Id[5]
var Hu = {
  red: Cd,
  volcano: _d,
  orange: Ed,
  gold: Td,
  yellow: kd,
  lime: Pd,
  green: Md,
  cyan: jd,
  blue: Nd,
  geekblue: Od,
  purple: Ld,
  magenta: Rd,
  grey: Id
}
const sy = {
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
  Xo = Object.assign(Object.assign({}, sy), {
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
function H4(e, t) {
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
    v = n(o),
    g = n(a),
    y = n(s),
    b = r(u, c),
    m = e.colorLink || e.colorInfo,
    p = n(m),
    h = new He(g[1]).mix(new He(g[3]), 50).toHexString()
  return Object.assign(Object.assign({}, b), {
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
    colorErrorBg: g[1],
    colorErrorBgHover: g[2],
    colorErrorBgFilledHover: h,
    colorErrorBgActive: g[3],
    colorErrorBorder: g[3],
    colorErrorBorderHover: g[4],
    colorErrorHover: g[5],
    colorError: g[6],
    colorErrorActive: g[7],
    colorErrorTextHover: g[8],
    colorErrorText: g[9],
    colorErrorTextActive: g[10],
    colorWarningBg: v[1],
    colorWarningBgHover: v[2],
    colorWarningBorder: v[3],
    colorWarningBorderHover: v[4],
    colorWarningHover: v[4],
    colorWarning: v[6],
    colorWarningActive: v[7],
    colorWarningTextHover: v[8],
    colorWarningText: v[9],
    colorWarningTextActive: v[10],
    colorInfoBg: y[1],
    colorInfoBgHover: y[2],
    colorInfoBorder: y[3],
    colorInfoBorderHover: y[4],
    colorInfoHover: y[4],
    colorInfo: y[6],
    colorInfoActive: y[7],
    colorInfoTextHover: y[8],
    colorInfoText: y[9],
    colorInfoTextActive: y[10],
    colorLinkHover: p[4],
    colorLink: p[6],
    colorLinkActive: p[7],
    colorBgMask: new He('#000').setAlpha(0.45).toRgbString(),
    colorWhite: '#fff'
  })
}
const W4 = (e) => {
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
function U4(e) {
  const { motionUnit: t, motionBase: n, borderRadius: r, lineWidth: i } = e
  return Object.assign(
    {
      motionDurationFast: `${(n + t).toFixed(1)}s`,
      motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
      motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
      lineWidthBold: i + 1
    },
    W4(r)
  )
}
const q4 = (e) => {
  const { controlHeight: t } = e
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  }
}
function G4(e) {
  return (e + 8) / e
}
function Q4(e) {
  const t = new Array(10).fill(null).map((n, r) => {
    const i = r - 1,
      o = e * Math.pow(Math.E, i / 5),
      a = r > 1 ? Math.floor(o) : Math.ceil(o)
    return Math.floor(a / 2) * 2
  })
  return (t[1] = e), t.map((n) => ({ size: n, lineHeight: G4(n) }))
}
const K4 = (e) => {
  const t = Q4(e),
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
function X4(e) {
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
const gt = (e, t) => new He(e).setAlpha(t).toRgbString(),
  eo = (e, t) => new He(e).darken(t).toHexString(),
  Y4 = (e) => {
    const t = rl(e)
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
  Z4 = (e, t) => {
    const n = e || '#fff',
      r = t || '#000'
    return {
      colorBgBase: n,
      colorTextBase: r,
      colorText: gt(r, 0.88),
      colorTextSecondary: gt(r, 0.65),
      colorTextTertiary: gt(r, 0.45),
      colorTextQuaternary: gt(r, 0.25),
      colorFill: gt(r, 0.15),
      colorFillSecondary: gt(r, 0.06),
      colorFillTertiary: gt(r, 0.04),
      colorFillQuaternary: gt(r, 0.02),
      colorBgSolid: gt(r, 1),
      colorBgSolidHover: gt(r, 0.75),
      colorBgSolidActive: gt(r, 0.95),
      colorBgLayout: eo(n, 4),
      colorBgContainer: eo(n, 0),
      colorBgElevated: eo(n, 0),
      colorBgSpotlight: gt(r, 0.85),
      colorBgBlur: 'transparent',
      colorBorder: eo(n, 15),
      colorBorderSecondary: eo(n, 6)
    }
  }
function J4(e) {
  ;(Bu.pink = Bu.magenta), (Hu.pink = Hu.magenta)
  const t = Object.keys(sy)
    .map((n) => {
      const r = e[n] === Bu[n] ? Hu[n] : rl(e[n])
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
            H4(e, {
              generateColorPalettes: Y4,
              generateNeutralColorPalettes: Z4
            })
          ),
          K4(e.fontSize)
        ),
        X4(e)
      ),
      q4(e)
    ),
    U4(e)
  )
}
const ly = md(J4),
  Ad = { token: Xo, override: { override: Xo }, hashed: !0 },
  uy = ne.createContext(Ad),
  il = 'ant',
  Sp = 'anticon',
  ek = (e, t) => t || (e ? `${il}-${e}` : il),
  Cn = P.createContext({ getPrefixCls: ek, iconPrefixCls: Sp }),
  tk = `-ant-${Date.now()}-${Math.random()}`
function nk(e, t) {
  const n = {},
    r = (a, s) => {
      let l = a.clone()
      return (l = (s == null ? void 0 : s(l)) || l), l.toRgbString()
    },
    i = (a, s) => {
      const l = new He(a),
        u = rl(l.toRgbString())
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
    const a = new He(t.primaryColor),
      s = rl(a.toRgbString())
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
    const l = new He(s[0])
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
function rk(e, t) {
  const n = nk(e, t)
  Tn() && yi(n, `${tk}-dynamic-theme`)
}
const ol = P.createContext(!1),
  ik = (e) => {
    let { children: t, disabled: n } = e
    const r = P.useContext(ol)
    return P.createElement(ol.Provider, { value: n ?? r }, t)
  },
  Yo = P.createContext(void 0),
  ok = (e) => {
    let { children: t, size: n } = e
    const r = P.useContext(Yo)
    return P.createElement(Yo.Provider, { value: n || r }, t)
  }
function ak() {
  const e = P.useContext(ol),
    t = P.useContext(Yo)
  return { componentDisabled: e, componentSize: t }
}
var cy = tt(function e() {
    et(this, e)
  }),
  dy = 'CALC_UNIT',
  sk = new RegExp(dy, 'g')
function Wu(e) {
  return typeof e == 'number' ? ''.concat(e).concat(dy) : e
}
var lk = (function (e) {
    Fi(n, e)
    var t = $i(n)
    function n(r, i) {
      var o
      et(this, n),
        (o = t.call(this)),
        D(Z(o), 'result', ''),
        D(Z(o), 'unitlessCssVar', void 0),
        D(Z(o), 'lowPriority', void 0)
      var a = Y(r)
      return (
        (o.unitlessCssVar = i),
        r instanceof n
          ? (o.result = '('.concat(r.result, ')'))
          : a === 'number'
          ? (o.result = Wu(r))
          : a === 'string' && (o.result = r),
        o
      )
    }
    return (
      tt(n, [
        {
          key: 'add',
          value: function (i) {
            return (
              i instanceof n
                ? (this.result = ''
                    .concat(this.result, ' + ')
                    .concat(i.getResult()))
                : (typeof i == 'number' || typeof i == 'string') &&
                  (this.result = ''.concat(this.result, ' + ').concat(Wu(i))),
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
                  (this.result = ''.concat(this.result, ' - ').concat(Wu(i))),
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
              (this.result = this.result.replace(sk, l ? 'px' : '')),
              typeof this.lowPriority < 'u'
                ? 'calc('.concat(this.result, ')')
                : this.result
            )
          }
        }
      ]),
      n
    )
  })(cy),
  uk = (function (e) {
    Fi(n, e)
    var t = $i(n)
    function n(r) {
      var i
      return (
        et(this, n),
        (i = t.call(this)),
        D(Z(i), 'result', 0),
        r instanceof n
          ? (i.result = r.result)
          : typeof r == 'number' && (i.result = r),
        i
      )
    }
    return (
      tt(n, [
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
  })(cy),
  ck = function (t, n) {
    var r = t === 'css' ? lk : uk
    return function (i) {
      return new r(i, n)
    }
  },
  Im = function (t, n) {
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
function Ni(e) {
  var t = P.useRef()
  t.current = e
  var n = P.useCallback(function () {
    for (var r, i = arguments.length, o = new Array(i), a = 0; a < i; a++)
      o[a] = arguments[a]
    return (r = t.current) === null || r === void 0
      ? void 0
      : r.call.apply(r, [t].concat(o))
  }, [])
  return n
}
function Zo(e) {
  var t = P.useRef(!1),
    n = P.useState(e),
    r = X(n, 2),
    i = r[0],
    o = r[1]
  P.useEffect(function () {
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
function Uu(e) {
  return e !== void 0
}
function dk(e, t) {
  var n = t || {},
    r = n.defaultValue,
    i = n.value,
    o = n.onChange,
    a = n.postState,
    s = Zo(function () {
      return Uu(i)
        ? i
        : Uu(r)
        ? typeof r == 'function'
          ? r()
          : r
        : typeof e == 'function'
        ? e()
        : e
    }),
    l = X(s, 2),
    u = l[0],
    c = l[1],
    f = i !== void 0 ? i : u,
    d = a ? a(f) : f,
    v = Ni(o),
    g = Zo([f]),
    y = X(g, 2),
    b = y[0],
    m = y[1]
  wm(
    function () {
      var h = b[0]
      u !== h && v(u, h)
    },
    [b]
  ),
    wm(
      function () {
        Uu(i) || c(i)
      },
      [i]
    )
  var p = Ni(function (h, S) {
    c(h, S), m([f], S)
  })
  return [d, p]
}
function Am(e, t, n, r) {
  var i = B({}, t[e])
  if (r != null && r.deprecatedTokens) {
    var o = r.deprecatedTokens
    o.forEach(function (s) {
      var l = X(s, 2),
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
var fy = typeof CSSINJS_STATISTIC < 'u',
  Fd = !0
function bp() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n]
  if (!fy) return Object.assign.apply(Object, [{}].concat(t))
  Fd = !1
  var r = {}
  return (
    t.forEach(function (i) {
      if (Y(i) === 'object') {
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
    (Fd = !0),
    r
  )
}
var Fm = {}
function fk() {}
var pk = function (t) {
  var n,
    r = t,
    i = fk
  return (
    fy &&
      typeof Proxy < 'u' &&
      ((n = new Set()),
      (r = new Proxy(t, {
        get: function (a, s) {
          if (Fd) {
            var l
            ;(l = n) === null || l === void 0 || l.add(s)
          }
          return a[s]
        }
      })),
      (i = function (a, s) {
        var l
        Fm[a] = {
          global: Array.from(n),
          component: B(
            B({}, (l = Fm[a]) === null || l === void 0 ? void 0 : l.component),
            s
          )
        }
      })),
    { token: r, keys: n, flush: i }
  )
}
function $m(e, t, n) {
  if (typeof n == 'function') {
    var r
    return n(bp(t, (r = t[e]) !== null && r !== void 0 ? r : {}))
  }
  return n ?? {}
}
function hk(e) {
  return e === 'js'
    ? { max: Math.max, min: Math.min }
    : {
        max: function () {
          for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
            r[i] = arguments[i]
          return 'max('.concat(
            r
              .map(function (o) {
                return Go(o)
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
                return Go(o)
              })
              .join(','),
            ')'
          )
        }
      }
}
var mk = 1e3 * 60 * 10,
  vk = (function () {
    function e() {
      et(this, e),
        D(this, 'map', new Map()),
        D(this, 'objectIDMap', new WeakMap()),
        D(this, 'nextID', 0),
        D(this, 'lastAccessBeat', new Map()),
        D(this, 'accessBeat', 0)
    }
    return (
      tt(e, [
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
                return o && Y(o) === 'object'
                  ? 'obj_'.concat(r.getObjectID(o))
                  : ''.concat(Y(o), '_').concat(o)
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
                r - i > mk && (n.map.delete(o), n.lastAccessBeat.delete(o))
              }),
                (this.accessBeat = 0)
            }
          }
        }
      ]),
      e
    )
  })(),
  Dm = new vk()
function gk(e, t) {
  return ne.useMemo(function () {
    var n = Dm.get(t)
    if (n) return n
    var r = e()
    return Dm.set(t, r), r
  }, t)
}
var yk = function () {
  return {}
}
function wk(e) {
  var t = e.useCSP,
    n = t === void 0 ? yk : t,
    r = e.useToken,
    i = e.usePrefix,
    o = e.getResetStyles,
    a = e.getCommonStyle,
    s = e.getCompUnitless
  function l(d, v, g, y) {
    var b = Array.isArray(d) ? d[0] : d
    function m(E) {
      return ''
        .concat(String(b))
        .concat(E.slice(0, 1).toUpperCase())
        .concat(E.slice(1))
    }
    var p = (y == null ? void 0 : y.unitless) || {},
      h = typeof s == 'function' ? s(d) : {},
      S = B(B({}, h), {}, D({}, m('zIndexPopup'), !0))
    Object.keys(p).forEach(function (E) {
      S[m(E)] = p[E]
    })
    var x = B(B({}, y), {}, { unitless: S, prefixToken: m }),
      _ = c(d, v, g, x),
      C = u(b, g, x)
    return function (E) {
      var T =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : E,
        k = _(E, T),
        M = X(k, 2),
        L = M[1],
        O = C(T),
        R = X(O, 2),
        z = R[0],
        I = R[1]
      return [z, L, I]
    }
  }
  function u(d, v, g) {
    var y = g.unitless,
      b = g.injectStyle,
      m = b === void 0 ? !0 : b,
      p = g.prefixToken,
      h = g.ignore,
      S = function (C) {
        var E = C.rootCls,
          T = C.cssVar,
          k = T === void 0 ? {} : T,
          M = r(),
          L = M.realToken
        return (
          p4(
            {
              path: [d],
              prefix: k.prefix,
              key: k.key,
              unitless: y,
              ignore: h,
              token: L,
              scope: E
            },
            function () {
              var O = $m(d, L, v),
                R = Am(d, L, O, {
                  deprecatedTokens: g == null ? void 0 : g.deprecatedTokens
                })
              return (
                Object.keys(O).forEach(function (z) {
                  ;(R[p(z)] = R[z]), delete R[z]
                }),
                R
              )
            }
          ),
          null
        )
      },
      x = function (C) {
        var E = r(),
          T = E.cssVar
        return [
          function (k) {
            return m && T
              ? ne.createElement(
                  ne.Fragment,
                  null,
                  ne.createElement(S, { rootCls: C, cssVar: T, component: d }),
                  k
                )
              : k
          },
          T == null ? void 0 : T.key
        ]
      }
    return x
  }
  function c(d, v, g) {
    var y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
      b = Array.isArray(d) ? d : [d, d],
      m = X(b, 1),
      p = m[0],
      h = b.join('-'),
      S = e.layer || { name: 'antd' }
    return function (x) {
      var _ =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : x,
        C = r(),
        E = C.theme,
        T = C.realToken,
        k = C.hashId,
        M = C.token,
        L = C.cssVar,
        O = i(),
        R = O.rootPrefixCls,
        z = O.iconPrefixCls,
        I = n(),
        A = L ? 'css' : 'js',
        j = gk(
          function () {
            var q = new Set()
            return (
              L &&
                Object.keys(y.unitless || {}).forEach(function (J) {
                  q.add(bs(J, L.prefix)), q.add(bs(J, Im(p, L.prefix)))
                }),
              ck(A, q)
            )
          },
          [A, p, L == null ? void 0 : L.prefix]
        ),
        F = hk(A),
        $ = F.max,
        V = F.min,
        W = {
          theme: E,
          token: M,
          hashId: k,
          nonce: function () {
            return I.nonce
          },
          clientOnly: y.clientOnly,
          layer: S,
          order: y.order || -999
        }
      typeof o == 'function' &&
        wd(
          B(B({}, W), {}, { clientOnly: !1, path: ['Shared', R] }),
          function () {
            return o(M, {
              prefix: { rootPrefixCls: R, iconPrefixCls: z },
              csp: I
            })
          }
        )
      var Q = wd(B(B({}, W), {}, { path: [h, x, z] }), function () {
        if (y.injectStyle === !1) return []
        var q = pk(M),
          J = q.token,
          le = q.flush,
          ie = $m(p, T, g),
          zi = '.'.concat(x),
          Rr = Am(p, T, ie, { deprecatedTokens: y.deprecatedTokens })
        L &&
          ie &&
          Y(ie) === 'object' &&
          Object.keys(ie).forEach(function (Fr) {
            ie[Fr] = 'var('.concat(bs(Fr, Im(p, L.prefix)), ')')
          })
        var Ir = bp(
            J,
            {
              componentCls: zi,
              prefixCls: x,
              iconCls: '.'.concat(z),
              antCls: '.'.concat(R),
              calc: j,
              max: $,
              min: V
            },
            L ? ie : Rr
          ),
          Ar = v(Ir, {
            hashId: k,
            prefixCls: x,
            rootPrefixCls: R,
            iconPrefixCls: z
          })
        le(p, Rr)
        var nn = typeof a == 'function' ? a(Ir, x, _, y.resetFont) : null
        return [y.resetStyle === !1 ? null : nn, Ar]
      })
      return [Q, k]
    }
  }
  function f(d, v, g) {
    var y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
      b = c(d, v, g, B({ resetStyle: !1, order: -998 }, y)),
      m = function (h) {
        var S = h.prefixCls,
          x = h.rootCls,
          _ = x === void 0 ? S : x
        return b(S, _), null
      }
    return m
  }
  return { genStyleHooks: l, genSubStyleComponent: f, genComponentStyleHook: c }
}
const Sk = '5.22.7'
function qu(e) {
  return e >= 0 && e <= 255
}
function Ka(e, t) {
  const { r: n, g: r, b: i, a: o } = new He(e).toRgb()
  if (o < 1) return e
  const { r: a, g: s, b: l } = new He(t).toRgb()
  for (let u = 0.01; u <= 1; u += 0.01) {
    const c = Math.round((n - a * (1 - u)) / u),
      f = Math.round((r - s * (1 - u)) / u),
      d = Math.round((i - l * (1 - u)) / u)
    if (qu(c) && qu(f) && qu(d))
      return new He({
        r: c,
        g: f,
        b: d,
        a: Math.round(u * 100) / 100
      }).toRgbString()
  }
  return new He({ r: n, g: r, b: i, a: 1 }).toRgbString()
}
var bk = function (e, t) {
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
function py(e) {
  const { override: t } = e,
    n = bk(e, ['override']),
    r = Object.assign({}, t)
  Object.keys(Xo).forEach((d) => {
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
      colorSplit: Ka(i.colorBorderSecondary, i.colorBgContainer),
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
      colorErrorOutline: Ka(i.colorErrorBg, i.colorBgContainer),
      colorWarningOutline: Ka(i.colorWarningBg, i.colorBgContainer),
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
      controlOutline: Ka(i.colorPrimaryBg, i.colorBgContainer),
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
      0 1px 2px -2px ${new He('rgba(0, 0, 0, 0.16)').toRgbString()},
      0 3px 6px 0 ${new He('rgba(0, 0, 0, 0.12)').toRgbString()},
      0 5px 12px 4px ${new He('rgba(0, 0, 0, 0.09)').toRgbString()}
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
var zm = function (e, t) {
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
const hy = {
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
  xk = {
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
  Ck = {
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
  my = (e, t, n) => {
    const r = n.getDerivativeToken(e),
      { override: i } = t,
      o = zm(t, ['override'])
    let a = Object.assign(Object.assign({}, r), { override: i })
    return (
      (a = py(a)),
      o &&
        Object.entries(o).forEach((s) => {
          let [l, u] = s
          const { theme: c } = u,
            f = zm(u, ['theme'])
          let d = f
          c &&
            (d = my(
              Object.assign(Object.assign({}, a), f),
              { override: f },
              c
            )),
            (a[l] = d)
        }),
      a
    )
  }
function fa() {
  const {
      token: e,
      hashed: t,
      theme: n,
      override: r,
      cssVar: i
    } = ne.useContext(uy),
    o = `${Sk}-${t || ''}`,
    a = n || ly,
    [s, l, u] = zT(a, [Xo, e], {
      salt: o,
      override: r,
      getComputedToken: my,
      formatToken: py,
      cssVar: i && {
        prefix: i.prefix,
        key: i.key,
        unitless: hy,
        ignore: xk,
        preserve: Ck
      }
    })
  return [a, u, t ? l : '', s, i]
}
const Gu = function (e) {
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
  _k = () => ({
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
  Ek = (e) => ({
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
  Tk = (e, t, n, r) => {
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
  kk = (e) => ({
    outline: `${Go(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
    outlineOffset: 1,
    transition: 'outline-offset 0s, outline 0s'
  }),
  vy = (e) => ({
    [`.${e}`]: Object.assign(Object.assign({}, _k()), {
      [`.${e} .${e}-icon`]: { display: 'block' }
    })
  }),
  {
    genStyleHooks: Pk,
    genComponentStyleHook: Mk,
    genSubStyleComponent: HM
  } = wk({
    usePrefix: () => {
      const { getPrefixCls: e, iconPrefixCls: t } = P.useContext(Cn)
      return { rootPrefixCls: e(), iconPrefixCls: t }
    },
    useToken: () => {
      const [e, t, n, r, i] = fa()
      return { theme: e, realToken: t, hashId: n, token: r, cssVar: i }
    },
    useCSP: () => {
      const { csp: e } = P.useContext(Cn)
      return e ?? {}
    },
    getResetStyles: (e, t) => {
      var n
      return [
        { '&': Ek(e) },
        vy(
          (n = t == null ? void 0 : t.prefix.iconPrefixCls) !== null &&
            n !== void 0
            ? n
            : Sp
        )
      ]
    },
    getCommonStyle: Tk,
    getCompUnitless: () => hy
  }),
  jk = (e, t) => {
    const [n, r] = fa()
    return wd(
      {
        theme: n,
        token: r,
        hashId: '',
        path: ['ant-design-icons', e],
        nonce: () => (t == null ? void 0 : t.nonce),
        layer: { name: 'antd' }
      },
      () => [vy(e)]
    )
  },
  Nk = Object.assign({}, To),
  { useId: Vm } = Nk,
  Ok = () => '',
  Lk = typeof Vm > 'u' ? Ok : Vm
function Rk(e, t, n) {
  var r
  const i = e || {},
    o =
      i.inherit === !1 || !t
        ? Object.assign(Object.assign({}, Ad), {
            hashed:
              (r = t == null ? void 0 : t.hashed) !== null && r !== void 0
                ? r
                : Ad.hashed,
            cssVar: t == null ? void 0 : t.cssVar
          })
        : t,
    a = Lk()
  return _1(
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
        return !pd(u, f, !0)
      })
  )
}
var Ik = ['children'],
  gy = P.createContext({})
function Ak(e) {
  var t = e.children,
    n = Tr(e, Ik)
  return P.createElement(gy.Provider, { value: n }, t)
}
var Fk = (function (e) {
  Fi(n, e)
  var t = $i(n)
  function n() {
    return et(this, n), t.apply(this, arguments)
  }
  return (
    tt(n, [
      {
        key: 'render',
        value: function () {
          return this.props.children
        }
      }
    ]),
    n
  )
})(P.Component)
function $k(e) {
  var t = P.useReducer(function (s) {
      return s + 1
    }, 0),
    n = X(t, 2),
    r = n[1],
    i = P.useRef(e),
    o = Ni(function () {
      return i.current
    }),
    a = Ni(function (s) {
      ;(i.current = typeof s == 'function' ? s(i.current) : s), r()
    })
  return [o, a]
}
var Mn = 'none',
  Xa = 'appear',
  Ya = 'enter',
  Za = 'leave',
  Bm = 'none',
  It = 'prepare',
  ui = 'start',
  ci = 'active',
  xp = 'end',
  yy = 'prepared'
function Hm(e, t) {
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
function Dk(e, t) {
  var n = {
    animationend: Hm('Animation', 'AnimationEnd'),
    transitionend: Hm('Transition', 'TransitionEnd')
  }
  return (
    e &&
      ('AnimationEvent' in t || delete n.animationend.animation,
      'TransitionEvent' in t || delete n.transitionend.transition),
    n
  )
}
var zk = Dk(Tn(), typeof window < 'u' ? window : {}),
  wy = {}
if (Tn()) {
  var Vk = document.createElement('div')
  wy = Vk.style
}
var Ja = {}
function Sy(e) {
  if (Ja[e]) return Ja[e]
  var t = zk[e]
  if (t)
    for (var n = Object.keys(t), r = n.length, i = 0; i < r; i += 1) {
      var o = n[i]
      if (Object.prototype.hasOwnProperty.call(t, o) && o in wy)
        return (Ja[e] = t[o]), Ja[e]
    }
  return ''
}
var by = Sy('animationend'),
  xy = Sy('transitionend'),
  Cy = !!(by && xy),
  Wm = by || 'animationend',
  Um = xy || 'transitionend'
function qm(e, t) {
  if (!e) return null
  if (Y(e) === 'object') {
    var n = t.replace(/-\w/g, function (r) {
      return r[1].toUpperCase()
    })
    return e[n]
  }
  return ''.concat(e, '-').concat(t)
}
const Bk = function (e) {
  var t = P.useRef()
  function n(i) {
    i && (i.removeEventListener(Um, e), i.removeEventListener(Wm, e))
  }
  function r(i) {
    t.current && t.current !== i && n(t.current),
      i &&
        i !== t.current &&
        (i.addEventListener(Um, e), i.addEventListener(Wm, e), (t.current = i))
  }
  return (
    P.useEffect(function () {
      return function () {
        n(t.current)
      }
    }, []),
    [r, n]
  )
}
var _y = Tn() ? P.useLayoutEffect : P.useEffect
const Hk = function () {
  var e = P.useRef(null)
  function t() {
    xn.cancel(e.current)
  }
  function n(r) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2
    t()
    var o = xn(function () {
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
    P.useEffect(function () {
      return function () {
        t()
      }
    }, []),
    [n, t]
  )
}
var Wk = [It, ui, ci, xp],
  Uk = [It, yy],
  Ey = !1,
  qk = !0
function Ty(e) {
  return e === ci || e === xp
}
const Gk = function (e, t, n) {
  var r = Zo(Bm),
    i = X(r, 2),
    o = i[0],
    a = i[1],
    s = Hk(),
    l = X(s, 2),
    u = l[0],
    c = l[1]
  function f() {
    a(It, !0)
  }
  var d = t ? Uk : Wk
  return (
    _y(
      function () {
        if (o !== Bm && o !== xp) {
          var v = d.indexOf(o),
            g = d[v + 1],
            y = n(o)
          y === Ey
            ? a(g, !0)
            : g &&
              u(function (b) {
                function m() {
                  b.isCanceled() || a(g, !0)
                }
                y === !0 ? m() : Promise.resolve(y).then(m)
              })
        }
      },
      [e, o]
    ),
    P.useEffect(function () {
      return function () {
        c()
      }
    }, []),
    [f, o]
  )
}
function Qk(e, t, n, r) {
  var i = r.motionEnter,
    o = i === void 0 ? !0 : i,
    a = r.motionAppear,
    s = a === void 0 ? !0 : a,
    l = r.motionLeave,
    u = l === void 0 ? !0 : l,
    c = r.motionDeadline,
    f = r.motionLeaveImmediately,
    d = r.onAppearPrepare,
    v = r.onEnterPrepare,
    g = r.onLeavePrepare,
    y = r.onAppearStart,
    b = r.onEnterStart,
    m = r.onLeaveStart,
    p = r.onAppearActive,
    h = r.onEnterActive,
    S = r.onLeaveActive,
    x = r.onAppearEnd,
    _ = r.onEnterEnd,
    C = r.onLeaveEnd,
    E = r.onVisibleChanged,
    T = Zo(),
    k = X(T, 2),
    M = k[0],
    L = k[1],
    O = $k(Mn),
    R = X(O, 2),
    z = R[0],
    I = R[1],
    A = Zo(null),
    j = X(A, 2),
    F = j[0],
    $ = j[1],
    V = z(),
    W = P.useRef(!1),
    Q = P.useRef(null)
  function q() {
    return n()
  }
  var J = P.useRef(!1)
  function le() {
    I(Mn), $(null, !0)
  }
  var ie = Ni(function (Ae) {
      var Ee = z()
      if (Ee !== Mn) {
        var vt = q()
        if (!(Ae && !Ae.deadline && Ae.target !== vt)) {
          var $r = J.current,
            Dr
          Ee === Xa && $r
            ? (Dr = x == null ? void 0 : x(vt, Ae))
            : Ee === Ya && $r
            ? (Dr = _ == null ? void 0 : _(vt, Ae))
            : Ee === Za && $r && (Dr = C == null ? void 0 : C(vt, Ae)),
            $r && Dr !== !1 && le()
        }
      }
    }),
    zi = Bk(ie),
    Rr = X(zi, 1),
    Ir = Rr[0],
    Ar = function (Ee) {
      switch (Ee) {
        case Xa:
          return D(D(D({}, It, d), ui, y), ci, p)
        case Ya:
          return D(D(D({}, It, v), ui, b), ci, h)
        case Za:
          return D(D(D({}, It, g), ui, m), ci, S)
        default:
          return {}
      }
    },
    nn = P.useMemo(
      function () {
        return Ar(V)
      },
      [V]
    ),
    Fr = Gk(V, !e, function (Ae) {
      if (Ae === It) {
        var Ee = nn[It]
        return Ee ? Ee(q()) : Ey
      }
      if (rn in nn) {
        var vt
        $(
          ((vt = nn[rn]) === null || vt === void 0
            ? void 0
            : vt.call(nn, q(), null)) || null
        )
      }
      return (
        rn === ci &&
          V !== Mn &&
          (Ir(q()),
          c > 0 &&
            (clearTimeout(Q.current),
            (Q.current = setTimeout(function () {
              ie({ deadline: !0 })
            }, c)))),
        rn === yy && le(),
        qk
      )
    }),
    ba = X(Fr, 2),
    Xl = ba[0],
    rn = ba[1],
    Yl = Ty(rn)
  J.current = Yl
  var xa = P.useRef(null)
  _y(
    function () {
      if (!(W.current && xa.current === t)) {
        L(t)
        var Ae = W.current
        W.current = !0
        var Ee
        !Ae && t && s && (Ee = Xa),
          Ae && t && o && (Ee = Ya),
          ((Ae && !t && u) || (!Ae && f && !t && u)) && (Ee = Za)
        var vt = Ar(Ee)
        Ee && (e || vt[It]) ? (I(Ee), Xl()) : I(Mn), (xa.current = t)
      }
    },
    [t]
  ),
    P.useEffect(
      function () {
        ;((V === Xa && !s) || (V === Ya && !o) || (V === Za && !u)) && I(Mn)
      },
      [s, o, u]
    ),
    P.useEffect(function () {
      return function () {
        ;(W.current = !1), clearTimeout(Q.current)
      }
    }, [])
  var Vi = P.useRef(!1)
  P.useEffect(
    function () {
      M && (Vi.current = !0),
        M !== void 0 &&
          V === Mn &&
          ((Vi.current || M) && (E == null || E(M)), (Vi.current = !0))
    },
    [M, V]
  )
  var Bi = F
  return (
    nn[It] && rn === ui && (Bi = B({ transition: 'none' }, Bi)),
    [V, rn, Bi, M ?? t]
  )
}
function Kk(e) {
  var t = e
  Y(e) === 'object' && (t = e.transitionSupport)
  function n(i, o) {
    return !!(i.motionName && t && o !== !1)
  }
  var r = P.forwardRef(function (i, o) {
    var a = i.visible,
      s = a === void 0 ? !0 : a,
      l = i.removeOnLeave,
      u = l === void 0 ? !0 : l,
      c = i.forceRender,
      f = i.children,
      d = i.motionName,
      v = i.leavedClassName,
      g = i.eventProps,
      y = P.useContext(gy),
      b = y.motion,
      m = n(i, b),
      p = P.useRef(),
      h = P.useRef()
    function S() {
      try {
        return p.current instanceof HTMLElement ? p.current : oT(h.current)
      } catch {
        return null
      }
    }
    var x = Qk(m, s, S, i),
      _ = X(x, 4),
      C = _[0],
      E = _[1],
      T = _[2],
      k = _[3],
      M = P.useRef(k)
    k && (M.current = !0)
    var L = P.useCallback(
        function (j) {
          ;(p.current = j), E1(o, j)
        },
        [o]
      ),
      O,
      R = B(B({}, g), {}, { visible: s })
    if (!f) O = null
    else if (C === Mn)
      k
        ? (O = f(B({}, R), L))
        : !u && M.current && v
        ? (O = f(B(B({}, R), {}, { className: v }), L))
        : c || (!u && !v)
        ? (O = f(B(B({}, R), {}, { style: { display: 'none' } }), L))
        : (O = null)
    else {
      var z
      E === It
        ? (z = 'prepare')
        : Ty(E)
        ? (z = 'active')
        : E === ui && (z = 'start')
      var I = qm(d, ''.concat(C, '-').concat(z))
      O = f(
        B(
          B({}, R),
          {},
          {
            className: _r(
              qm(d, C),
              D(D({}, I, I && z), d, typeof d == 'string')
            ),
            style: T
          }
        ),
        L
      )
    }
    if (P.isValidElement(O) && T1(O)) {
      var A = P1(O)
      A || (O = P.cloneElement(O, { ref: L }))
    }
    return P.createElement(Fk, { ref: h }, O)
  })
  return (r.displayName = 'CSSMotion'), r
}
const ky = Kk(Cy)
var $d = 'add',
  Dd = 'keep',
  zd = 'remove',
  Qu = 'removed'
function Xk(e) {
  var t
  return (
    e && Y(e) === 'object' && 'key' in e ? (t = e) : (t = { key: e }),
    B(B({}, t), {}, { key: String(t.key) })
  )
}
function Vd() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
  return e.map(Xk)
}
function Yk() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
    n = [],
    r = 0,
    i = t.length,
    o = Vd(e),
    a = Vd(t)
  o.forEach(function (u) {
    for (var c = !1, f = r; f < i; f += 1) {
      var d = a[f]
      if (d.key === u.key) {
        r < f &&
          ((n = n.concat(
            a.slice(r, f).map(function (v) {
              return B(B({}, v), {}, { status: $d })
            })
          )),
          (r = f)),
          n.push(B(B({}, d), {}, { status: Dd })),
          (r += 1),
          (c = !0)
        break
      }
    }
    c || n.push(B(B({}, u), {}, { status: zd }))
  }),
    r < i &&
      (n = n.concat(
        a.slice(r).map(function (u) {
          return B(B({}, u), {}, { status: $d })
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
        return f !== u || d !== zd
      })),
        n.forEach(function (c) {
          c.key === u && (c.status = Dd)
        })
    }),
    n
  )
}
var Zk = ['component', 'children', 'onVisibleChanged', 'onAllRemoved'],
  Jk = ['status'],
  eP = [
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
function tP(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ky,
    n = (function (r) {
      Fi(o, r)
      var i = $i(o)
      function o() {
        var a
        et(this, o)
        for (var s = arguments.length, l = new Array(s), u = 0; u < s; u++)
          l[u] = arguments[u]
        return (
          (a = i.call.apply(i, [this].concat(l))),
          D(Z(a), 'state', { keyEntities: [] }),
          D(Z(a), 'removeKey', function (c) {
            a.setState(
              function (f) {
                var d = f.keyEntities.map(function (v) {
                  return v.key !== c ? v : B(B({}, v), {}, { status: Qu })
                })
                return { keyEntities: d }
              },
              function () {
                var f = a.state.keyEntities,
                  d = f.filter(function (v) {
                    var g = v.status
                    return g !== Qu
                  }).length
                d === 0 && a.props.onAllRemoved && a.props.onAllRemoved()
              }
            )
          }),
          a
        )
      }
      return (
        tt(
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
                var v = Tr(u, Zk),
                  g = c || P.Fragment,
                  y = {}
                return (
                  eP.forEach(function (b) {
                    ;(y[b] = v[b]), delete v[b]
                  }),
                  delete v.keys,
                  P.createElement(
                    g,
                    v,
                    l.map(function (b, m) {
                      var p = b.status,
                        h = Tr(b, Jk),
                        S = p === $d || p === Dd
                      return P.createElement(
                        t,
                        Er({}, y, {
                          key: h.key,
                          visible: S,
                          eventProps: h,
                          onVisibleChanged: function (_) {
                            d == null || d(_, { key: h.key }),
                              _ || s.removeKey(h.key)
                          }
                        }),
                        function (x, _) {
                          return f(B(B({}, x), {}, { index: m }), _)
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
                  f = Vd(u),
                  d = Yk(c, f)
                return {
                  keyEntities: d.filter(function (v) {
                    var g = c.find(function (y) {
                      var b = y.key
                      return v.key === b
                    })
                    return !(g && g.status === Qu && v.status === zd)
                  })
                }
              }
            }
          ]
        ),
        o
      )
    })(P.Component)
  return D(n, 'defaultProps', { component: 'div' }), n
}
tP(Cy)
function nP(e) {
  const { children: t } = e,
    [, n] = fa(),
    { motion: r } = n,
    i = P.useRef(!1)
  return (
    (i.current = i.current || r === !1),
    i.current ? P.createElement(Ak, { motion: r }, t) : t
  )
}
const rP = () => null
var iP = function (e, t) {
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
const oP = [
  'getTargetContainer',
  'getPopupContainer',
  'renderEmpty',
  'input',
  'pagination',
  'form',
  'select',
  'button'
]
let Py
function aP() {
  return Py || il
}
function sP(e) {
  return Object.keys(e).some((t) => t.endsWith('Color'))
}
const lP = (e) => {
    const { prefixCls: t, iconPrefixCls: n, theme: r, holderRender: i } = e
    t !== void 0 && (Py = t), r && sP(r) && rk(aP(), r)
  },
  uP = (e) => {
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
        dropdownMatchSelectWidth: v,
        popupMatchSelectWidth: g,
        popupOverflow: y,
        legacyLocale: b,
        parentContext: m,
        iconPrefixCls: p,
        theme: h,
        componentDisabled: S,
        segmented: x,
        statistic: _,
        spin: C,
        calendar: E,
        carousel: T,
        cascader: k,
        collapse: M,
        typography: L,
        checkbox: O,
        descriptions: R,
        divider: z,
        drawer: I,
        skeleton: A,
        steps: j,
        image: F,
        layout: $,
        list: V,
        mentions: W,
        modal: Q,
        progress: q,
        result: J,
        slider: le,
        breadcrumb: ie,
        menu: zi,
        pagination: Rr,
        input: Ir,
        textArea: Ar,
        empty: nn,
        badge: Fr,
        radio: ba,
        rate: Xl,
        switch: rn,
        transfer: Yl,
        avatar: xa,
        message: Vi,
        tag: Bi,
        table: Ae,
        card: Ee,
        tabs: vt,
        timeline: $r,
        timePicker: Dr,
        upload: lw,
        notification: uw,
        tree: cw,
        colorPicker: dw,
        datePicker: fw,
        rangePicker: pw,
        flex: hw,
        wave: mw,
        dropdown: vw,
        warning: gw,
        tour: yw,
        floatButtonGroup: ww,
        variant: Sw,
        inputNumber: bw,
        treeSelect: xw
      } = e,
      Rp = P.useCallback(
        (be, Me) => {
          const { prefixCls: Ut } = e
          if (Me) return Me
          const qt = Ut || m.getPrefixCls('')
          return be ? `${qt}-${be}` : qt
        },
        [m.getPrefixCls, e.prefixCls]
      ),
      Hi = p || m.iconPrefixCls || Sp,
      Wi = n || m.csp
    jk(Hi, Wi)
    const Zl = Rk(h, m.theme, { prefixCls: Rp('') }),
      Jl = {
        csp: Wi,
        autoInsertSpaceInButton: r,
        alert: i,
        anchor: o,
        locale: s || b,
        direction: u,
        space: c,
        splitter: f,
        virtual: d,
        popupMatchSelectWidth: g ?? v,
        popupOverflow: y,
        getPrefixCls: Rp,
        iconPrefixCls: Hi,
        theme: Zl,
        segmented: x,
        statistic: _,
        spin: C,
        calendar: E,
        carousel: T,
        cascader: k,
        collapse: M,
        typography: L,
        checkbox: O,
        descriptions: R,
        divider: z,
        drawer: I,
        skeleton: A,
        steps: j,
        image: F,
        input: Ir,
        textArea: Ar,
        layout: $,
        list: V,
        mentions: W,
        modal: Q,
        progress: q,
        result: J,
        slider: le,
        breadcrumb: ie,
        menu: zi,
        pagination: Rr,
        empty: nn,
        badge: Fr,
        radio: ba,
        rate: Xl,
        switch: rn,
        transfer: Yl,
        avatar: xa,
        message: Vi,
        tag: Bi,
        table: Ae,
        card: Ee,
        tabs: vt,
        timeline: $r,
        timePicker: Dr,
        upload: lw,
        notification: uw,
        tree: cw,
        colorPicker: dw,
        datePicker: fw,
        rangePicker: pw,
        flex: hw,
        wave: mw,
        dropdown: vw,
        warning: gw,
        tour: yw,
        floatButtonGroup: ww,
        variant: Sw,
        inputNumber: bw,
        treeSelect: xw
      },
      zr = Object.assign({}, m)
    Object.keys(Jl).forEach((be) => {
      Jl[be] !== void 0 && (zr[be] = Jl[be])
    }),
      oP.forEach((be) => {
        const Me = e[be]
        Me && (zr[be] = Me)
      }),
      typeof r < 'u' &&
        (zr.button = Object.assign({ autoInsertSpace: r }, zr.button))
    const Vr = _1(
        () => zr,
        zr,
        (be, Me) => {
          const Ut = Object.keys(be),
            qt = Object.keys(Me)
          return Ut.length !== qt.length || Ut.some((Ca) => be[Ca] !== Me[Ca])
        }
      ),
      Cw = P.useMemo(() => ({ prefixCls: Hi, csp: Wi }), [Hi, Wi])
    let Pe = P.createElement(
      P.Fragment,
      null,
      P.createElement(rP, { dropdownMatchSelectWidth: v }),
      t
    )
    const Ip = P.useMemo(() => {
      var be, Me, Ut, qt
      return li(
        ((be = Ul.Form) === null || be === void 0
          ? void 0
          : be.defaultValidateMessages) || {},
        ((Ut =
          (Me = Vr.locale) === null || Me === void 0 ? void 0 : Me.Form) ===
          null || Ut === void 0
          ? void 0
          : Ut.defaultValidateMessages) || {},
        ((qt = Vr.form) === null || qt === void 0
          ? void 0
          : qt.validateMessages) || {},
        (a == null ? void 0 : a.validateMessages) || {}
      )
    }, [Vr, a == null ? void 0 : a.validateMessages])
    Object.keys(Ip).length > 0 &&
      (Pe = P.createElement(S4.Provider, { value: Ip }, Pe)),
      s && (Pe = P.createElement(T4, { locale: s, _ANT_MARK__: E4 }, Pe)),
      (Hi || Wi) && (Pe = P.createElement(m4.Provider, { value: Cw }, Pe)),
      l && (Pe = P.createElement(ok, { size: l }, Pe)),
      (Pe = P.createElement(nP, null, Pe))
    const _w = P.useMemo(() => {
      const be = Zl || {},
        { algorithm: Me, token: Ut, components: qt, cssVar: Ca } = be,
        Ew = iP(be, ['algorithm', 'token', 'components', 'cssVar']),
        Ap = Me && (!Array.isArray(Me) || Me.length > 0) ? md(Me) : ly,
        eu = {}
      Object.entries(qt || {}).forEach((Tw) => {
        let [kw, Pw] = Tw
        const on = Object.assign({}, Pw)
        'algorithm' in on &&
          (on.algorithm === !0
            ? (on.theme = Ap)
            : (Array.isArray(on.algorithm) ||
                typeof on.algorithm == 'function') &&
              (on.theme = md(on.algorithm)),
          delete on.algorithm),
          (eu[kw] = on)
      })
      const Fp = Object.assign(Object.assign({}, Xo), Ut)
      return Object.assign(Object.assign({}, Ew), {
        theme: Ap,
        token: Fp,
        components: eu,
        override: Object.assign({ override: Fp }, eu),
        cssVar: Ca
      })
    }, [Zl])
    return (
      h && (Pe = P.createElement(uy.Provider, { value: _w }, Pe)),
      Vr.warning &&
        (Pe = P.createElement(w4.Provider, { value: Vr.warning }, Pe)),
      S !== void 0 && (Pe = P.createElement(ik, { disabled: S }, Pe)),
      P.createElement(Cn.Provider, { value: Vr }, Pe)
    )
  },
  pa = (e) => {
    const t = P.useContext(Cn),
      n = P.useContext(ry)
    return P.createElement(
      uP,
      Object.assign({ parentContext: t, legacyLocale: n }, e)
    )
  }
pa.ConfigContext = Cn
pa.SizeContext = Yo
pa.config = lP
pa.useConfig = ak
Object.defineProperty(pa, 'SizeContext', { get: () => Yo })
const cP = (e, t, n) =>
  ne.isValidElement(e)
    ? ne.cloneElement(e, typeof n == 'function' ? n(e.props || {}) : n)
    : t
function dP(e, t) {
  return cP(e, e, t)
}
const My = (e) => {
  const [, , , , t] = fa()
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
      function (I, A, j) {
        I[A] = j.value
      },
    o = typeof Symbol == 'function' ? Symbol : {},
    a = o.iterator || '@@iterator',
    s = o.asyncIterator || '@@asyncIterator',
    l = o.toStringTag || '@@toStringTag'
  function u(I, A, j) {
    return (
      Object.defineProperty(I, A, {
        value: j,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }),
      I[A]
    )
  }
  try {
    u({}, '')
  } catch {
    u = function (j, F, $) {
      return (j[F] = $)
    }
  }
  function c(I, A, j, F) {
    var $ = A && A.prototype instanceof m ? A : m,
      V = Object.create($.prototype),
      W = new R(F || [])
    return i(V, '_invoke', { value: k(I, j, W) }), V
  }
  function f(I, A, j) {
    try {
      return { type: 'normal', arg: I.call(A, j) }
    } catch (F) {
      return { type: 'throw', arg: F }
    }
  }
  t.wrap = c
  var d = 'suspendedStart',
    v = 'suspendedYield',
    g = 'executing',
    y = 'completed',
    b = {}
  function m() {}
  function p() {}
  function h() {}
  var S = {}
  u(S, a, function () {
    return this
  })
  var x = Object.getPrototypeOf,
    _ = x && x(x(z([])))
  _ && _ !== n && r.call(_, a) && (S = _)
  var C = (h.prototype = m.prototype = Object.create(S))
  function E(I) {
    ;['next', 'throw', 'return'].forEach(function (A) {
      u(I, A, function (j) {
        return this._invoke(A, j)
      })
    })
  }
  function T(I, A) {
    function j($, V, W, Q) {
      var q = f(I[$], I, V)
      if (q.type !== 'throw') {
        var J = q.arg,
          le = J.value
        return le && Y(le) == 'object' && r.call(le, '__await')
          ? A.resolve(le.__await).then(
              function (ie) {
                j('next', ie, W, Q)
              },
              function (ie) {
                j('throw', ie, W, Q)
              }
            )
          : A.resolve(le).then(
              function (ie) {
                ;(J.value = ie), W(J)
              },
              function (ie) {
                return j('throw', ie, W, Q)
              }
            )
      }
      Q(q.arg)
    }
    var F
    i(this, '_invoke', {
      value: function (V, W) {
        function Q() {
          return new A(function (q, J) {
            j(V, W, q, J)
          })
        }
        return (F = F ? F.then(Q, Q) : Q())
      }
    })
  }
  function k(I, A, j) {
    var F = d
    return function ($, V) {
      if (F === g) throw Error('Generator is already running')
      if (F === y) {
        if ($ === 'throw') throw V
        return { value: e, done: !0 }
      }
      for (j.method = $, j.arg = V; ; ) {
        var W = j.delegate
        if (W) {
          var Q = M(W, j)
          if (Q) {
            if (Q === b) continue
            return Q
          }
        }
        if (j.method === 'next') j.sent = j._sent = j.arg
        else if (j.method === 'throw') {
          if (F === d) throw ((F = y), j.arg)
          j.dispatchException(j.arg)
        } else j.method === 'return' && j.abrupt('return', j.arg)
        F = g
        var q = f(I, A, j)
        if (q.type === 'normal') {
          if (((F = j.done ? y : v), q.arg === b)) continue
          return { value: q.arg, done: j.done }
        }
        q.type === 'throw' && ((F = y), (j.method = 'throw'), (j.arg = q.arg))
      }
    }
  }
  function M(I, A) {
    var j = A.method,
      F = I.iterator[j]
    if (F === e)
      return (
        (A.delegate = null),
        (j === 'throw' &&
          I.iterator.return &&
          ((A.method = 'return'),
          (A.arg = e),
          M(I, A),
          A.method === 'throw')) ||
          (j !== 'return' &&
            ((A.method = 'throw'),
            (A.arg = new TypeError(
              "The iterator does not provide a '" + j + "' method"
            )))),
        b
      )
    var $ = f(F, I.iterator, A.arg)
    if ($.type === 'throw')
      return (A.method = 'throw'), (A.arg = $.arg), (A.delegate = null), b
    var V = $.arg
    return V
      ? V.done
        ? ((A[I.resultName] = V.value),
          (A.next = I.nextLoc),
          A.method !== 'return' && ((A.method = 'next'), (A.arg = e)),
          (A.delegate = null),
          b)
        : V
      : ((A.method = 'throw'),
        (A.arg = new TypeError('iterator result is not an object')),
        (A.delegate = null),
        b)
  }
  function L(I) {
    var A = { tryLoc: I[0] }
    1 in I && (A.catchLoc = I[1]),
      2 in I && ((A.finallyLoc = I[2]), (A.afterLoc = I[3])),
      this.tryEntries.push(A)
  }
  function O(I) {
    var A = I.completion || {}
    ;(A.type = 'normal'), delete A.arg, (I.completion = A)
  }
  function R(I) {
    ;(this.tryEntries = [{ tryLoc: 'root' }]),
      I.forEach(L, this),
      this.reset(!0)
  }
  function z(I) {
    if (I || I === '') {
      var A = I[a]
      if (A) return A.call(I)
      if (typeof I.next == 'function') return I
      if (!isNaN(I.length)) {
        var j = -1,
          F = function $() {
            for (; ++j < I.length; )
              if (r.call(I, j)) return ($.value = I[j]), ($.done = !1), $
            return ($.value = e), ($.done = !0), $
          }
        return (F.next = F)
      }
    }
    throw new TypeError(Y(I) + ' is not iterable')
  }
  return (
    (p.prototype = h),
    i(C, 'constructor', { value: h, configurable: !0 }),
    i(h, 'constructor', { value: p, configurable: !0 }),
    (p.displayName = u(h, l, 'GeneratorFunction')),
    (t.isGeneratorFunction = function (I) {
      var A = typeof I == 'function' && I.constructor
      return (
        !!A && (A === p || (A.displayName || A.name) === 'GeneratorFunction')
      )
    }),
    (t.mark = function (I) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(I, h)
          : ((I.__proto__ = h), u(I, l, 'GeneratorFunction')),
        (I.prototype = Object.create(C)),
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
    (t.async = function (I, A, j, F, $) {
      $ === void 0 && ($ = Promise)
      var V = new T(c(I, A, j, F), $)
      return t.isGeneratorFunction(A)
        ? V
        : V.next().then(function (W) {
            return W.done ? W.value : V.next()
          })
    }),
    E(C),
    u(C, l, 'Generator'),
    u(C, a, function () {
      return this
    }),
    u(C, 'toString', function () {
      return '[object Generator]'
    }),
    (t.keys = function (I) {
      var A = Object(I),
        j = []
      for (var F in A) j.push(F)
      return (
        j.reverse(),
        function $() {
          for (; j.length; ) {
            var V = j.pop()
            if (V in A) return ($.value = V), ($.done = !1), $
          }
          return ($.done = !0), $
        }
      )
    }),
    (t.values = z),
    (R.prototype = {
      constructor: R,
      reset: function (A) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = e),
          (this.done = !1),
          (this.delegate = null),
          (this.method = 'next'),
          (this.arg = e),
          this.tryEntries.forEach(O),
          !A)
        )
          for (var j in this)
            j.charAt(0) === 't' &&
              r.call(this, j) &&
              !isNaN(+j.slice(1)) &&
              (this[j] = e)
      },
      stop: function () {
        this.done = !0
        var A = this.tryEntries[0].completion
        if (A.type === 'throw') throw A.arg
        return this.rval
      },
      dispatchException: function (A) {
        if (this.done) throw A
        var j = this
        function F(J, le) {
          return (
            (W.type = 'throw'),
            (W.arg = A),
            (j.next = J),
            le && ((j.method = 'next'), (j.arg = e)),
            !!le
          )
        }
        for (var $ = this.tryEntries.length - 1; $ >= 0; --$) {
          var V = this.tryEntries[$],
            W = V.completion
          if (V.tryLoc === 'root') return F('end')
          if (V.tryLoc <= this.prev) {
            var Q = r.call(V, 'catchLoc'),
              q = r.call(V, 'finallyLoc')
            if (Q && q) {
              if (this.prev < V.catchLoc) return F(V.catchLoc, !0)
              if (this.prev < V.finallyLoc) return F(V.finallyLoc)
            } else if (Q) {
              if (this.prev < V.catchLoc) return F(V.catchLoc, !0)
            } else {
              if (!q) throw Error('try statement without catch or finally')
              if (this.prev < V.finallyLoc) return F(V.finallyLoc)
            }
          }
        }
      },
      abrupt: function (A, j) {
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
          (A === 'break' || A === 'continue') &&
          V.tryLoc <= j &&
          j <= V.finallyLoc &&
          (V = null)
        var W = V ? V.completion : {}
        return (
          (W.type = A),
          (W.arg = j),
          V
            ? ((this.method = 'next'), (this.next = V.finallyLoc), b)
            : this.complete(W)
        )
      },
      complete: function (A, j) {
        if (A.type === 'throw') throw A.arg
        return (
          A.type === 'break' || A.type === 'continue'
            ? (this.next = A.arg)
            : A.type === 'return'
            ? ((this.rval = this.arg = A.arg),
              (this.method = 'return'),
              (this.next = 'end'))
            : A.type === 'normal' && j && (this.next = j),
          b
        )
      },
      finish: function (A) {
        for (var j = this.tryEntries.length - 1; j >= 0; --j) {
          var F = this.tryEntries[j]
          if (F.finallyLoc === A)
            return this.complete(F.completion, F.afterLoc), O(F), b
        }
      },
      catch: function (A) {
        for (var j = this.tryEntries.length - 1; j >= 0; --j) {
          var F = this.tryEntries[j]
          if (F.tryLoc === A) {
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
      delegateYield: function (A, j, F) {
        return (
          (this.delegate = { iterator: z(A), resultName: j, nextLoc: F }),
          this.method === 'next' && (this.arg = e),
          b
        )
      }
    }),
    t
  )
}
function Gm(e, t, n, r, i, o, a) {
  try {
    var s = e[o](a),
      l = s.value
  } catch (u) {
    return void n(u)
  }
  s.done ? t(l) : Promise.resolve(l).then(r, i)
}
function Lr(e) {
  return function () {
    var t = this,
      n = arguments
    return new Promise(function (r, i) {
      var o = e.apply(t, n)
      function a(l) {
        Gm(o, r, i, a, s, 'next', l)
      }
      function s(l) {
        Gm(o, r, i, a, s, 'throw', l)
      }
      a(void 0)
    })
  }
}
var ha = B({}, nb),
  fP = ha.version,
  Ku = ha.render,
  pP = ha.unmountComponentAtNode,
  ql
try {
  var hP = Number((fP || '').split('.')[0])
  hP >= 18 && (ql = ha.createRoot)
} catch {}
function Qm(e) {
  var t = ha.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  t && Y(t) === 'object' && (t.usingClientEntryPoint = e)
}
var al = '__rc_react_root__'
function mP(e, t) {
  Qm(!0)
  var n = t[al] || ql(t)
  Qm(!1), n.render(e), (t[al] = n)
}
function vP(e, t) {
  Ku == null || Ku(e, t)
}
function gP(e, t) {
  if (ql) {
    mP(e, t)
    return
  }
  vP(e, t)
}
function yP(e) {
  return Bd.apply(this, arguments)
}
function Bd() {
  return (
    (Bd = Lr(
      Ue().mark(function e(t) {
        return Ue().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                return r.abrupt(
                  'return',
                  Promise.resolve().then(function () {
                    var i
                    ;(i = t[al]) === null || i === void 0 || i.unmount(),
                      delete t[al]
                  })
                )
              case 1:
              case 'end':
                return r.stop()
            }
        }, e)
      })
    )),
    Bd.apply(this, arguments)
  )
}
function wP(e) {
  pP(e)
}
function SP(e) {
  return Hd.apply(this, arguments)
}
function Hd() {
  return (
    (Hd = Lr(
      Ue().mark(function e(t) {
        return Ue().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                if (ql === void 0) {
                  r.next = 2
                  break
                }
                return r.abrupt('return', yP(t))
              case 2:
                wP(t)
              case 3:
              case 'end':
                return r.stop()
            }
        }, e)
      })
    )),
    Hd.apply(this, arguments)
  )
}
const bP = (e, t) => (gP(e, t), () => SP(t))
let xP = bP
function CP() {
  return xP
}
const _P = function (e) {
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
  EP = (e) => {
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
  TP = Mk('Wave', (e) => [EP(e)]),
  Cp = `${il}-wave-target`
function Xu(e) {
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
function kP(e) {
  const {
    borderTopColor: t,
    borderColor: n,
    backgroundColor: r
  } = getComputedStyle(e)
  return Xu(t) ? t : Xu(n) ? n : Xu(r) ? r : null
}
function Yu(e) {
  return Number.isNaN(e) ? 0 : e
}
const PP = (e) => {
    const { className: t, target: n, component: r, registerUnmount: i } = e,
      o = P.useRef(null),
      a = P.useRef(null)
    P.useEffect(() => {
      a.current = i()
    }, [])
    const [s, l] = P.useState(null),
      [u, c] = P.useState([]),
      [f, d] = P.useState(0),
      [v, g] = P.useState(0),
      [y, b] = P.useState(0),
      [m, p] = P.useState(0),
      [h, S] = P.useState(!1),
      x = {
        left: f,
        top: v,
        width: y,
        height: m,
        borderRadius: u.map((E) => `${E}px`).join(' ')
      }
    s && (x['--wave-color'] = s)
    function _() {
      const E = getComputedStyle(n)
      l(kP(n))
      const T = E.position === 'static',
        { borderLeftWidth: k, borderTopWidth: M } = E
      d(T ? n.offsetLeft : Yu(-parseFloat(k))),
        g(T ? n.offsetTop : Yu(-parseFloat(M))),
        b(n.offsetWidth),
        p(n.offsetHeight)
      const {
        borderTopLeftRadius: L,
        borderTopRightRadius: O,
        borderBottomLeftRadius: R,
        borderBottomRightRadius: z
      } = E
      c([L, O, z, R].map((I) => Yu(parseFloat(I))))
    }
    if (
      (P.useEffect(() => {
        if (n) {
          const E = xn(() => {
            _(), S(!0)
          })
          let T
          return (
            typeof ResizeObserver < 'u' &&
              ((T = new ResizeObserver(_)), T.observe(n)),
            () => {
              xn.cancel(E), T == null || T.disconnect()
            }
          )
        }
      }, []),
      !h)
    )
      return null
    const C =
      (r === 'Checkbox' || r === 'Radio') &&
      (n == null ? void 0 : n.classList.contains(Cp))
    return P.createElement(
      ky,
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
        return P.createElement('div', {
          ref: dp(o, T),
          className: _r(t, k, { 'wave-quick': C }),
          style: x
        })
      }
    )
  },
  MP = (e, t) => {
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
    const o = CP()
    let a = null
    function s() {
      return a
    }
    a = o(
      P.createElement(
        PP,
        Object.assign({}, t, { target: e, registerUnmount: s })
      ),
      i
    )
  },
  jP = (e, t, n) => {
    const { wave: r } = P.useContext(Cn),
      [, i, o] = fa(),
      a = Ni((u) => {
        const c = e.current
        if ((r != null && r.disabled) || !c) return
        const f = c.querySelector(`.${Cp}`) || c,
          { showEffect: d } = r || {}
        ;(d || MP)(f, {
          className: t,
          token: i,
          component: n,
          event: u,
          hashId: o
        })
      }),
      s = P.useRef(null)
    return (u) => {
      xn.cancel(s.current),
        (s.current = xn(() => {
          a(u)
        }))
    }
  },
  NP = (e) => {
    const { children: t, disabled: n, component: r } = e,
      { getPrefixCls: i } = P.useContext(Cn),
      o = P.useRef(null),
      a = i('wave'),
      [, s] = TP(a),
      l = jP(o, _r(a, s), r)
    if (
      (ne.useEffect(() => {
        const c = o.current
        if (!c || c.nodeType !== 1 || n) return
        const f = (d) => {
          !_P(d.target) ||
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
      !ne.isValidElement(t))
    )
      return t ?? null
    const u = T1(t) ? dp(P1(t), o) : o
    return dP(t, { ref: u })
  }
var fr = 'RC_FORM_INTERNAL_HOOKS',
  se = function () {
    _t(
      !1,
      'Can not find FormContext. Please make sure you wrap Field under Form.'
    )
  },
  Oi = P.createContext({
    getFieldValue: se,
    getFieldsValue: se,
    getFieldError: se,
    getFieldWarning: se,
    getFieldsError: se,
    isFieldsTouched: se,
    isFieldTouched: se,
    isFieldValidating: se,
    isFieldsValidating: se,
    resetFields: se,
    setFields: se,
    setFieldValue: se,
    setFieldsValue: se,
    validateFields: se,
    submit: se,
    getInternalHooks: function () {
      return (
        se(),
        {
          dispatch: se,
          initEntityValue: se,
          registerField: se,
          useSubscribe: se,
          setInitialValues: se,
          destroyForm: se,
          setCallbacks: se,
          registerWatch: se,
          getFields: se,
          setValidateMessages: se,
          setPreserve: se,
          getInitialValue: se
        }
      )
    }
  }),
  sl = P.createContext(null)
function Wd(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e]
}
function OP(e) {
  return e && !!e._init
}
function Ud() {
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
var qd = Ud()
function LP(e) {
  try {
    return Function.toString.call(e).indexOf('[native code]') !== -1
  } catch {
    return typeof e == 'function'
  }
}
function RP(e, t, n) {
  if (fp()) return Reflect.construct.apply(null, arguments)
  var r = [null]
  r.push.apply(r, t)
  var i = new (e.bind.apply(e, r))()
  return n && Wo(i, n.prototype), i
}
function Gd(e) {
  var t = typeof Map == 'function' ? new Map() : void 0
  return (
    (Gd = function (r) {
      if (r === null || !LP(r)) return r
      if (typeof r != 'function')
        throw new TypeError(
          'Super expression must either be null or a function'
        )
      if (t !== void 0) {
        if (t.has(r)) return t.get(r)
        t.set(r, i)
      }
      function i() {
        return RP(r, arguments, Uo(this).constructor)
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
        Wo(i, r)
      )
    }),
    Gd(e)
  )
}
var IP = /%[sdj%]/g,
  AP = function () {}
function Qd(e) {
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
function ut(e) {
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
    var a = e.replace(IP, function (s) {
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
function FP(e) {
  return (
    e === 'string' ||
    e === 'url' ||
    e === 'hex' ||
    e === 'email' ||
    e === 'date' ||
    e === 'pattern'
  )
}
function _e(e, t) {
  return !!(
    e == null ||
    (t === 'array' && Array.isArray(e) && !e.length) ||
    (FP(t) && typeof e == 'string' && !e)
  )
}
function $P(e, t, n) {
  var r = [],
    i = 0,
    o = e.length
  function a(s) {
    r.push.apply(r, K(s || [])), i++, i === o && n(r)
  }
  e.forEach(function (s) {
    t(s, a)
  })
}
function Km(e, t, n) {
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
function DP(e) {
  var t = []
  return (
    Object.keys(e).forEach(function (n) {
      t.push.apply(t, K(e[n] || []))
    }),
    t
  )
}
var Xm = (function (e) {
  Fi(n, e)
  var t = $i(n)
  function n(r, i) {
    var o
    return (
      et(this, n),
      (o = t.call(this, 'Async Validation Error')),
      D(Z(o), 'errors', void 0),
      D(Z(o), 'fields', void 0),
      (o.errors = r),
      (o.fields = i),
      o
    )
  }
  return tt(n)
})(Gd(Error))
function zP(e, t, n, r, i) {
  if (t.first) {
    var o = new Promise(function (d, v) {
      var g = function (m) {
          return r(m), m.length ? v(new Xm(m, Qd(m))) : d(i)
        },
        y = DP(e)
      Km(y, n, g)
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
    f = new Promise(function (d, v) {
      var g = function (b) {
        if ((c.push.apply(c, b), u++, u === l))
          return r(c), c.length ? v(new Xm(c, Qd(c))) : d(i)
      }
      s.length || (r(c), d(i)),
        s.forEach(function (y) {
          var b = e[y]
          a.indexOf(y) !== -1 ? Km(b, n, g) : $P(b, n, g)
        })
    })
  return (
    f.catch(function (d) {
      return d
    }),
    f
  )
}
function VP(e) {
  return !!(e && e.message !== void 0)
}
function BP(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null) return n
    n = n[t[r]]
  }
  return n
}
function Ym(e, t) {
  return function (n) {
    var r
    return (
      e.fullFields
        ? (r = BP(t, e.fullFields))
        : (r = t[n.field || e.fullField]),
      VP(n)
        ? ((n.field = n.field || e.fullField), (n.fieldValue = r), n)
        : {
            message: typeof n == 'function' ? n() : n,
            fieldValue: r,
            field: n.field || e.fullField
          }
    )
  }
}
function Zm(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n]
        Y(r) === 'object' && Y(e[n]) === 'object'
          ? (e[n] = B(B({}, e[n]), r))
          : (e[n] = r)
      }
  }
  return e
}
var Wr = 'enum',
  HP = function (t, n, r, i, o) {
    ;(t[Wr] = Array.isArray(t[Wr]) ? t[Wr] : []),
      t[Wr].indexOf(n) === -1 &&
        i.push(ut(o.messages[Wr], t.fullField, t[Wr].join(', ')))
  },
  WP = function (t, n, r, i, o) {
    if (t.pattern) {
      if (t.pattern instanceof RegExp)
        (t.pattern.lastIndex = 0),
          t.pattern.test(n) ||
            i.push(ut(o.messages.pattern.mismatch, t.fullField, n, t.pattern))
      else if (typeof t.pattern == 'string') {
        var a = new RegExp(t.pattern)
        a.test(n) ||
          i.push(ut(o.messages.pattern.mismatch, t.fullField, n, t.pattern))
      }
    }
  },
  UP = function (t, n, r, i, o) {
    var a = typeof t.len == 'number',
      s = typeof t.min == 'number',
      l = typeof t.max == 'number',
      u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
      c = n,
      f = null,
      d = typeof n == 'number',
      v = typeof n == 'string',
      g = Array.isArray(n)
    if ((d ? (f = 'number') : v ? (f = 'string') : g && (f = 'array'), !f))
      return !1
    g && (c = n.length),
      v && (c = n.replace(u, '_').length),
      a
        ? c !== t.len && i.push(ut(o.messages[f].len, t.fullField, t.len))
        : s && !l && c < t.min
        ? i.push(ut(o.messages[f].min, t.fullField, t.min))
        : l && !s && c > t.max
        ? i.push(ut(o.messages[f].max, t.fullField, t.max))
        : s &&
          l &&
          (c < t.min || c > t.max) &&
          i.push(ut(o.messages[f].range, t.fullField, t.min, t.max))
  },
  jy = function (t, n, r, i, o, a) {
    t.required &&
      (!r.hasOwnProperty(t.field) || _e(n, a || t.type)) &&
      i.push(ut(o.messages.required, t.fullField))
  },
  es
const qP = function () {
  if (es) return es
  var e = '[a-fA-F\\d:]',
    t = function (_) {
      return _ && _.includeBoundaries
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
    c = function (_) {
      return _ && _.exact
        ? s
        : new RegExp(
            '(?:'
              .concat(t(_))
              .concat(n)
              .concat(t(_), ')|(?:')
              .concat(t(_))
              .concat(a)
              .concat(t(_), ')'),
            'g'
          )
    }
  ;(c.v4 = function (x) {
    return x && x.exact
      ? l
      : new RegExp(''.concat(t(x)).concat(n).concat(t(x)), 'g')
  }),
    (c.v6 = function (x) {
      return x && x.exact
        ? u
        : new RegExp(''.concat(t(x)).concat(a).concat(t(x)), 'g')
    })
  var f = '(?:(?:[a-z]+:)?//)',
    d = '(?:\\S+(?::\\S*)?@)?',
    v = c.v4().source,
    g = c.v6().source,
    y = '(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)',
    b = '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*',
    m = '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))',
    p = '(?::\\d{2,5})?',
    h = '(?:[/?#][^\\s"]*)?',
    S = '(?:'
      .concat(f, '|www\\.)')
      .concat(d, '(?:localhost|')
      .concat(v, '|')
      .concat(g, '|')
      .concat(y)
      .concat(b)
      .concat(m, ')')
      .concat(p)
      .concat(h)
  return (es = new RegExp('(?:^'.concat(S, '$)'), 'i')), es
}
var Jm = {
    email:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
    hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
  },
  so = {
    integer: function (t) {
      return so.number(t) && parseInt(t, 10) === t
    },
    float: function (t) {
      return so.number(t) && !so.integer(t)
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
      return Y(t) === 'object' && !so.array(t)
    },
    method: function (t) {
      return typeof t == 'function'
    },
    email: function (t) {
      return typeof t == 'string' && t.length <= 320 && !!t.match(Jm.email)
    },
    url: function (t) {
      return typeof t == 'string' && t.length <= 2048 && !!t.match(qP())
    },
    hex: function (t) {
      return typeof t == 'string' && !!t.match(Jm.hex)
    }
  },
  GP = function (t, n, r, i, o) {
    if (t.required && n === void 0) {
      jy(t, n, r, i, o)
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
      ? so[s](n) || i.push(ut(o.messages.types[s], t.fullField, t.type))
      : s &&
        Y(n) !== t.type &&
        i.push(ut(o.messages.types[s], t.fullField, t.type))
  },
  QP = function (t, n, r, i, o) {
    ;(/^\s+$/.test(n) || n === '') &&
      i.push(ut(o.messages.whitespace, t.fullField))
  }
const te = {
  required: jy,
  whitespace: QP,
  type: GP,
  range: UP,
  enum: HP,
  pattern: WP
}
var KP = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (_e(n) && !t.required) return r()
      te.required(t, n, i, a, o)
    }
    r(a)
  },
  XP = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (n == null && !t.required) return r()
      te.required(t, n, i, a, o, 'array'),
        n != null && (te.type(t, n, i, a, o), te.range(t, n, i, a, o))
    }
    r(a)
  },
  YP = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (_e(n) && !t.required) return r()
      te.required(t, n, i, a, o), n !== void 0 && te.type(t, n, i, a, o)
    }
    r(a)
  },
  ZP = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (_e(n, 'date') && !t.required) return r()
      if ((te.required(t, n, i, a, o), !_e(n, 'date'))) {
        var l
        n instanceof Date ? (l = n) : (l = new Date(n)),
          te.type(t, l, i, a, o),
          l && te.range(t, l.getTime(), i, a, o)
      }
    }
    r(a)
  },
  JP = 'enum',
  e5 = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (_e(n) && !t.required) return r()
      te.required(t, n, i, a, o), n !== void 0 && te[JP](t, n, i, a, o)
    }
    r(a)
  },
  t5 = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (_e(n) && !t.required) return r()
      te.required(t, n, i, a, o),
        n !== void 0 && (te.type(t, n, i, a, o), te.range(t, n, i, a, o))
    }
    r(a)
  },
  n5 = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (_e(n) && !t.required) return r()
      te.required(t, n, i, a, o),
        n !== void 0 && (te.type(t, n, i, a, o), te.range(t, n, i, a, o))
    }
    r(a)
  },
  r5 = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (_e(n) && !t.required) return r()
      te.required(t, n, i, a, o), n !== void 0 && te.type(t, n, i, a, o)
    }
    r(a)
  },
  i5 = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if ((n === '' && (n = void 0), _e(n) && !t.required)) return r()
      te.required(t, n, i, a, o),
        n !== void 0 && (te.type(t, n, i, a, o), te.range(t, n, i, a, o))
    }
    r(a)
  },
  o5 = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (_e(n) && !t.required) return r()
      te.required(t, n, i, a, o), n !== void 0 && te.type(t, n, i, a, o)
    }
    r(a)
  },
  a5 = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (_e(n, 'string') && !t.required) return r()
      te.required(t, n, i, a, o), _e(n, 'string') || te.pattern(t, n, i, a, o)
    }
    r(a)
  },
  s5 = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (_e(n) && !t.required) return r()
      te.required(t, n, i, a, o), _e(n) || te.type(t, n, i, a, o)
    }
    r(a)
  },
  l5 = function (t, n, r, i, o) {
    var a = [],
      s = Array.isArray(n) ? 'array' : Y(n)
    te.required(t, n, i, a, o, s), r(a)
  },
  u5 = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (_e(n, 'string') && !t.required) return r()
      te.required(t, n, i, a, o, 'string'),
        _e(n, 'string') ||
          (te.type(t, n, i, a, o),
          te.range(t, n, i, a, o),
          te.pattern(t, n, i, a, o),
          t.whitespace === !0 && te.whitespace(t, n, i, a, o))
    }
    r(a)
  },
  Zu = function (t, n, r, i, o) {
    var a = t.type,
      s = [],
      l = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (l) {
      if (_e(n, a) && !t.required) return r()
      te.required(t, n, i, s, o, a), _e(n, a) || te.type(t, n, i, s, o)
    }
    r(s)
  }
const xo = {
  string: u5,
  method: r5,
  number: i5,
  boolean: YP,
  regexp: s5,
  integer: n5,
  float: t5,
  array: XP,
  object: o5,
  enum: e5,
  pattern: a5,
  date: ZP,
  url: Zu,
  hex: Zu,
  email: Zu,
  required: l5,
  any: KP
}
var ma = (function () {
  function e(t) {
    et(this, e),
      D(this, 'rules', null),
      D(this, '_messages', qd),
      this.define(t)
  }
  return (
    tt(e, [
      {
        key: 'define',
        value: function (n) {
          var r = this
          if (!n) throw new Error('Cannot configure a schema with no rules')
          if (Y(n) !== 'object' || Array.isArray(n))
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
          return n && (this._messages = Zm(Ud(), n)), this._messages
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
          function u(g) {
            var y = [],
              b = {}
            function m(h) {
              if (Array.isArray(h)) {
                var S
                y = (S = y).concat.apply(S, K(h))
              } else y.push(h)
            }
            for (var p = 0; p < g.length; p++) m(g[p])
            y.length ? ((b = Qd(y)), l(y, b)) : l(null, a)
          }
          if (s.messages) {
            var c = this.messages()
            c === qd && (c = Ud()), Zm(c, s.messages), (s.messages = c)
          } else s.messages = this.messages()
          var f = {},
            d = s.keys || Object.keys(this.rules)
          d.forEach(function (g) {
            var y = r.rules[g],
              b = a[g]
            y.forEach(function (m) {
              var p = m
              typeof p.transform == 'function' &&
                (a === n && (a = B({}, a)),
                (b = a[g] = p.transform(b)),
                b != null &&
                  (p.type = p.type || (Array.isArray(b) ? 'array' : Y(b)))),
                typeof p == 'function'
                  ? (p = { validator: p })
                  : (p = B({}, p)),
                (p.validator = r.getValidationMethod(p)),
                p.validator &&
                  ((p.field = g),
                  (p.fullField = p.fullField || g),
                  (p.type = r.getType(p)),
                  (f[g] = f[g] || []),
                  f[g].push({ rule: p, value: b, source: a, field: g }))
            })
          })
          var v = {}
          return zP(
            f,
            s,
            function (g, y) {
              var b = g.rule,
                m =
                  (b.type === 'object' || b.type === 'array') &&
                  (Y(b.fields) === 'object' || Y(b.defaultField) === 'object')
              ;(m = m && (b.required || (!b.required && g.value))),
                (b.field = g.field)
              function p(C, E) {
                return B(
                  B({}, E),
                  {},
                  {
                    fullField: ''.concat(b.fullField, '.').concat(C),
                    fullFields: b.fullFields
                      ? [].concat(K(b.fullFields), [C])
                      : [C]
                  }
                )
              }
              function h() {
                var C =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : [],
                  E = Array.isArray(C) ? C : [C]
                !s.suppressWarning &&
                  E.length &&
                  e.warning('async-validator:', E),
                  E.length && b.message !== void 0 && (E = [].concat(b.message))
                var T = E.map(Ym(b, a))
                if (s.first && T.length) return (v[b.field] = 1), y(T)
                if (!m) y(T)
                else {
                  if (b.required && !g.value)
                    return (
                      b.message !== void 0
                        ? (T = [].concat(b.message).map(Ym(b, a)))
                        : s.error &&
                          (T = [s.error(b, ut(s.messages.required, b.field))]),
                      y(T)
                    )
                  var k = {}
                  b.defaultField &&
                    Object.keys(g.value).map(function (O) {
                      k[O] = b.defaultField
                    }),
                    (k = B(B({}, k), g.rule.fields))
                  var M = {}
                  Object.keys(k).forEach(function (O) {
                    var R = k[O],
                      z = Array.isArray(R) ? R : [R]
                    M[O] = z.map(p.bind(null, O))
                  })
                  var L = new e(M)
                  L.messages(s.messages),
                    g.rule.options &&
                      ((g.rule.options.messages = s.messages),
                      (g.rule.options.error = s.error)),
                    L.validate(g.value, g.rule.options || s, function (O) {
                      var R = []
                      T && T.length && R.push.apply(R, K(T)),
                        O && O.length && R.push.apply(R, K(O)),
                        y(R.length ? R : null)
                    })
                }
              }
              var S
              if (b.asyncValidator)
                S = b.asyncValidator(b, g.value, h, g.source, s)
              else if (b.validator) {
                try {
                  S = b.validator(b, g.value, h, g.source, s)
                } catch (C) {
                  var x, _
                  ;(x = (_ = console).error) === null ||
                    x === void 0 ||
                    x.call(_, C),
                    s.suppressValidatorError ||
                      setTimeout(function () {
                        throw C
                      }, 0),
                    h(C.message)
                }
                S === !0
                  ? h()
                  : S === !1
                  ? h(
                      typeof b.message == 'function'
                        ? b.message(b.fullField || b.field)
                        : b.message ||
                            ''.concat(b.fullField || b.field, ' fails')
                    )
                  : S instanceof Array
                  ? h(S)
                  : S instanceof Error && h(S.message)
              }
              S &&
                S.then &&
                S.then(
                  function () {
                    return h()
                  },
                  function (C) {
                    return h(C)
                  }
                )
            },
            function (g) {
              u(g)
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
              !xo.hasOwnProperty(n.type))
          )
            throw new Error(ut('Unknown rule type %s', n.type))
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
              ? xo.required
              : xo[this.getType(n)] || void 0
          )
        }
      }
    ]),
    e
  )
})()
D(ma, 'register', function (t, n) {
  if (typeof n != 'function')
    throw new Error(
      'Cannot register a validator by type, validator is not a function'
    )
  xo[t] = n
})
D(ma, 'warning', AP)
D(ma, 'messages', qd)
D(ma, 'validators', xo)
var rt = "'${name}' is not a valid ${type}",
  Ny = {
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
  ev = ma
function c5(e, t) {
  return e.replace(/\\?\$\{\w+\}/g, function (n) {
    if (n.startsWith('\\')) return n.slice(1)
    var r = n.slice(2, -1)
    return t[r]
  })
}
var tv = 'CODE_LOGIC_ERROR'
function Kd(e, t, n, r, i) {
  return Xd.apply(this, arguments)
}
function Xd() {
  return (
    (Xd = Lr(
      Ue().mark(function e(t, n, r, i, o) {
        var a, s, l, u, c, f, d, v, g
        return Ue().wrap(
          function (b) {
            for (;;)
              switch ((b.prev = b.next)) {
                case 0:
                  return (
                    (a = B({}, r)),
                    delete a.ruleIndex,
                    (ev.warning = function () {}),
                    a.validator &&
                      ((s = a.validator),
                      (a.validator = function () {
                        try {
                          return s.apply(void 0, arguments)
                        } catch (m) {
                          return console.error(m), Promise.reject(tv)
                        }
                      })),
                    (l = null),
                    a &&
                      a.type === 'array' &&
                      a.defaultField &&
                      ((l = a.defaultField), delete a.defaultField),
                    (u = new ev(D({}, t, [a]))),
                    (c = li(Ny, i.validateMessages)),
                    u.messages(c),
                    (f = []),
                    (b.prev = 10),
                    (b.next = 13),
                    Promise.resolve(u.validate(D({}, t, n), B({}, i)))
                  )
                case 13:
                  b.next = 18
                  break
                case 15:
                  ;(b.prev = 15),
                    (b.t0 = b.catch(10)),
                    b.t0.errors &&
                      (f = b.t0.errors.map(function (m, p) {
                        var h = m.message,
                          S = h === tv ? c.default : h
                        return P.isValidElement(S)
                          ? P.cloneElement(S, { key: 'error_'.concat(p) })
                          : S
                      }))
                case 18:
                  if (!(!f.length && l)) {
                    b.next = 23
                    break
                  }
                  return (
                    (b.next = 21),
                    Promise.all(
                      n.map(function (m, p) {
                        return Kd(''.concat(t, '.').concat(p), m, l, i, o)
                      })
                    )
                  )
                case 21:
                  return (
                    (d = b.sent),
                    b.abrupt(
                      'return',
                      d.reduce(function (m, p) {
                        return [].concat(K(m), K(p))
                      }, [])
                    )
                  )
                case 23:
                  return (
                    (v = B(
                      B({}, r),
                      {},
                      { name: t, enum: (r.enum || []).join(', ') },
                      o
                    )),
                    (g = f.map(function (m) {
                      return typeof m == 'string' ? c5(m, v) : m
                    })),
                    b.abrupt('return', g)
                  )
                case 26:
                case 'end':
                  return b.stop()
              }
          },
          e,
          null,
          [[10, 15]]
        )
      })
    )),
    Xd.apply(this, arguments)
  )
}
function d5(e, t, n, r, i, o) {
  var a = e.join('.'),
    s = n
      .map(function (c, f) {
        var d = c.validator,
          v = B(B({}, c), {}, { ruleIndex: f })
        return (
          d &&
            (v.validator = function (g, y, b) {
              var m = !1,
                p = function () {
                  for (
                    var x = arguments.length, _ = new Array(x), C = 0;
                    C < x;
                    C++
                  )
                    _[C] = arguments[C]
                  Promise.resolve().then(function () {
                    _t(
                      !m,
                      'Your validator function has already return a promise. `callback` will be ignored.'
                    ),
                      m || b.apply(void 0, _)
                  })
                },
                h = d(g, y, p)
              ;(m =
                h &&
                typeof h.then == 'function' &&
                typeof h.catch == 'function'),
                _t(
                  m,
                  '`callback` is deprecated. Please return a promise instead.'
                ),
                m &&
                  h
                    .then(function () {
                      b()
                    })
                    .catch(function (S) {
                      b(S || ' ')
                    })
            }),
          v
        )
      })
      .sort(function (c, f) {
        var d = c.warningOnly,
          v = c.ruleIndex,
          g = f.warningOnly,
          y = f.ruleIndex
        return !!d == !!g ? v - y : d ? 1 : -1
      }),
    l
  if (i === !0)
    l = new Promise(
      (function () {
        var c = Lr(
          Ue().mark(function f(d, v) {
            var g, y, b
            return Ue().wrap(function (p) {
              for (;;)
                switch ((p.prev = p.next)) {
                  case 0:
                    g = 0
                  case 1:
                    if (!(g < s.length)) {
                      p.next = 12
                      break
                    }
                    return (y = s[g]), (p.next = 5), Kd(a, t, y, r, o)
                  case 5:
                    if (((b = p.sent), !b.length)) {
                      p.next = 9
                      break
                    }
                    return v([{ errors: b, rule: y }]), p.abrupt('return')
                  case 9:
                    ;(g += 1), (p.next = 1)
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
      return Kd(a, t, c, r, o).then(function (f) {
        return { errors: f, rule: c }
      })
    })
    l = (i ? p5(u) : f5(u)).then(function (c) {
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
function f5(e) {
  return Yd.apply(this, arguments)
}
function Yd() {
  return (
    (Yd = Lr(
      Ue().mark(function e(t) {
        return Ue().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                return r.abrupt(
                  'return',
                  Promise.all(t).then(function (i) {
                    var o,
                      a = (o = []).concat.apply(o, K(i))
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
    Yd.apply(this, arguments)
  )
}
function p5(e) {
  return Zd.apply(this, arguments)
}
function Zd() {
  return (
    (Zd = Lr(
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
    Zd.apply(this, arguments)
  )
}
function ge(e) {
  return Wd(e)
}
function nv(e, t) {
  var n = {}
  return (
    t.forEach(function (r) {
      var i = Yt(e, r)
      n = Rt(n, r, i)
    }),
    n
  )
}
function wi(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1
  return (
    e &&
    e.some(function (r) {
      return Oy(t, r, n)
    })
  )
}
function Oy(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1
  return !e || !t || (!n && e.length !== t.length)
    ? !1
    : t.every(function (r, i) {
        return e[i] === r
      })
}
function h5(e, t) {
  if (e === t) return !0
  if (
    (!e && t) ||
    (e && !t) ||
    !e ||
    !t ||
    Y(e) !== 'object' ||
    Y(t) !== 'object'
  )
    return !1
  var n = Object.keys(e),
    r = Object.keys(t),
    i = new Set([].concat(n, r))
  return K(i).every(function (o) {
    var a = e[o],
      s = t[o]
    return typeof a == 'function' && typeof s == 'function' ? !0 : a === s
  })
}
function m5(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1]
  return t && t.target && Y(t.target) === 'object' && e in t.target
    ? t.target[e]
    : t
}
function rv(e, t, n) {
  var r = e.length
  if (t < 0 || t >= r || n < 0 || n >= r) return e
  var i = e[t],
    o = t - n
  return o > 0
    ? [].concat(K(e.slice(0, n)), [i], K(e.slice(n, t)), K(e.slice(t + 1, r)))
    : o < 0
    ? [].concat(
        K(e.slice(0, t)),
        K(e.slice(t + 1, n + 1)),
        [i],
        K(e.slice(n + 1, r))
      )
    : e
}
var v5 = ['name'],
  yt = []
function Ju(e, t, n, r, i, o) {
  return typeof e == 'function'
    ? e(t, n, 'source' in o ? { source: o.source } : {})
    : r !== i
}
var _p = (function (e) {
  Fi(n, e)
  var t = $i(n)
  function n(r) {
    var i
    if (
      (et(this, n),
      (i = t.call(this, r)),
      D(Z(i), 'state', { resetCount: 0 }),
      D(Z(i), 'cancelRegisterFunc', null),
      D(Z(i), 'mounted', !1),
      D(Z(i), 'touched', !1),
      D(Z(i), 'dirty', !1),
      D(Z(i), 'validatePromise', void 0),
      D(Z(i), 'prevValidating', void 0),
      D(Z(i), 'errors', yt),
      D(Z(i), 'warnings', yt),
      D(Z(i), 'cancelRegister', function () {
        var l = i.props,
          u = l.preserve,
          c = l.isListField,
          f = l.name
        i.cancelRegisterFunc && i.cancelRegisterFunc(c, u, ge(f)),
          (i.cancelRegisterFunc = null)
      }),
      D(Z(i), 'getNamePath', function () {
        var l = i.props,
          u = l.name,
          c = l.fieldContext,
          f = c.prefixName,
          d = f === void 0 ? [] : f
        return u !== void 0 ? [].concat(K(d), K(u)) : []
      }),
      D(Z(i), 'getRules', function () {
        var l = i.props,
          u = l.rules,
          c = u === void 0 ? [] : u,
          f = l.fieldContext
        return c.map(function (d) {
          return typeof d == 'function' ? d(f) : d
        })
      }),
      D(Z(i), 'refresh', function () {
        i.mounted &&
          i.setState(function (l) {
            var u = l.resetCount
            return { resetCount: u + 1 }
          })
      }),
      D(Z(i), 'metaCache', null),
      D(Z(i), 'triggerMetaEvent', function (l) {
        var u = i.props.onMetaChange
        if (u) {
          var c = B(B({}, i.getMeta()), {}, { destroy: l })
          pd(i.metaCache, c) || u(c), (i.metaCache = c)
        } else i.metaCache = null
      }),
      D(Z(i), 'onStoreChange', function (l, u, c) {
        var f = i.props,
          d = f.shouldUpdate,
          v = f.dependencies,
          g = v === void 0 ? [] : v,
          y = f.onReset,
          b = c.store,
          m = i.getNamePath(),
          p = i.getValue(l),
          h = i.getValue(b),
          S = u && wi(u, m)
        switch (
          (c.type === 'valueUpdate' &&
            c.source === 'external' &&
            !pd(p, h) &&
            ((i.touched = !0),
            (i.dirty = !0),
            (i.validatePromise = null),
            (i.errors = yt),
            (i.warnings = yt),
            i.triggerMetaEvent()),
          c.type)
        ) {
          case 'reset':
            if (!u || S) {
              ;(i.touched = !1),
                (i.dirty = !1),
                (i.validatePromise = void 0),
                (i.errors = yt),
                (i.warnings = yt),
                i.triggerMetaEvent(),
                y == null || y(),
                i.refresh()
              return
            }
            break
          case 'remove': {
            if (d && Ju(d, l, b, p, h, c)) {
              i.reRender()
              return
            }
            break
          }
          case 'setField': {
            var x = c.data
            if (S) {
              'touched' in x && (i.touched = x.touched),
                'validating' in x &&
                  !('originRCField' in x) &&
                  (i.validatePromise = x.validating
                    ? Promise.resolve([])
                    : null),
                'errors' in x && (i.errors = x.errors || yt),
                'warnings' in x && (i.warnings = x.warnings || yt),
                (i.dirty = !0),
                i.triggerMetaEvent(),
                i.reRender()
              return
            } else if ('value' in x && wi(u, m, !0)) {
              i.reRender()
              return
            }
            if (d && !m.length && Ju(d, l, b, p, h, c)) {
              i.reRender()
              return
            }
            break
          }
          case 'dependenciesUpdate': {
            var _ = g.map(ge)
            if (
              _.some(function (C) {
                return wi(c.relatedFields, C)
              })
            ) {
              i.reRender()
              return
            }
            break
          }
          default:
            if (S || ((!g.length || m.length || d) && Ju(d, l, b, p, h, c))) {
              i.reRender()
              return
            }
            break
        }
        d === !0 && i.reRender()
      }),
      D(Z(i), 'validateRules', function (l) {
        var u = i.getNamePath(),
          c = i.getValue(),
          f = l || {},
          d = f.triggerName,
          v = f.validateOnly,
          g = v === void 0 ? !1 : v,
          y = Promise.resolve().then(
            Lr(
              Ue().mark(function b() {
                var m, p, h, S, x, _, C
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
                          ((m = i.props),
                          (p = m.validateFirst),
                          (h = p === void 0 ? !1 : p),
                          (S = m.messageVariables),
                          (x = m.validateDebounce),
                          (_ = i.getRules()),
                          d &&
                            (_ = _.filter(function (k) {
                              return k
                            }).filter(function (k) {
                              var M = k.validateTrigger
                              if (!M) return !0
                              var L = Wd(M)
                              return L.includes(d)
                            })),
                          !(x && d))
                        ) {
                          T.next = 10
                          break
                        }
                        return (
                          (T.next = 8),
                          new Promise(function (k) {
                            setTimeout(k, x)
                          })
                        )
                      case 8:
                        if (i.validatePromise === y) {
                          T.next = 10
                          break
                        }
                        return T.abrupt('return', [])
                      case 10:
                        return (
                          (C = d5(u, c, _, l, h, S)),
                          C.catch(function (k) {
                            return k
                          }).then(function () {
                            var k =
                              arguments.length > 0 && arguments[0] !== void 0
                                ? arguments[0]
                                : yt
                            if (i.validatePromise === y) {
                              var M
                              i.validatePromise = null
                              var L = [],
                                O = []
                              ;(M = k.forEach) === null ||
                                M === void 0 ||
                                M.call(k, function (R) {
                                  var z = R.rule.warningOnly,
                                    I = R.errors,
                                    A = I === void 0 ? yt : I
                                  z
                                    ? O.push.apply(O, K(A))
                                    : L.push.apply(L, K(A))
                                }),
                                (i.errors = L),
                                (i.warnings = O),
                                i.triggerMetaEvent(),
                                i.reRender()
                            }
                          }),
                          T.abrupt('return', C)
                        )
                      case 13:
                      case 'end':
                        return T.stop()
                    }
                }, b)
              })
            )
          )
        return (
          g ||
            ((i.validatePromise = y),
            (i.dirty = !0),
            (i.errors = yt),
            (i.warnings = yt),
            i.triggerMetaEvent(),
            i.reRender()),
          y
        )
      }),
      D(Z(i), 'isFieldValidating', function () {
        return !!i.validatePromise
      }),
      D(Z(i), 'isFieldTouched', function () {
        return i.touched
      }),
      D(Z(i), 'isFieldDirty', function () {
        if (i.dirty || i.props.initialValue !== void 0) return !0
        var l = i.props.fieldContext,
          u = l.getInternalHooks(fr),
          c = u.getInitialValue
        return c(i.getNamePath()) !== void 0
      }),
      D(Z(i), 'getErrors', function () {
        return i.errors
      }),
      D(Z(i), 'getWarnings', function () {
        return i.warnings
      }),
      D(Z(i), 'isListField', function () {
        return i.props.isListField
      }),
      D(Z(i), 'isList', function () {
        return i.props.isList
      }),
      D(Z(i), 'isPreserve', function () {
        return i.props.preserve
      }),
      D(Z(i), 'getMeta', function () {
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
      D(Z(i), 'getOnlyChild', function (l) {
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
        var c = ud(l)
        return c.length !== 1 || !P.isValidElement(c[0])
          ? { child: c, isFunction: !1 }
          : { child: c[0], isFunction: !1 }
      }),
      D(Z(i), 'getValue', function (l) {
        var u = i.props.fieldContext.getFieldsValue,
          c = i.getNamePath()
        return Yt(l || u(!0), c)
      }),
      D(Z(i), 'getControlled', function () {
        var l =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          u = i.props,
          c = u.name,
          f = u.trigger,
          d = u.validateTrigger,
          v = u.getValueFromEvent,
          g = u.normalize,
          y = u.valuePropName,
          b = u.getValueProps,
          m = u.fieldContext,
          p = d !== void 0 ? d : m.validateTrigger,
          h = i.getNamePath(),
          S = m.getInternalHooks,
          x = m.getFieldsValue,
          _ = S(fr),
          C = _.dispatch,
          E = i.getValue(),
          T =
            b ||
            function (R) {
              return D({}, y, R)
            },
          k = l[f],
          M = c !== void 0 ? T(E) : {},
          L = B(B({}, l), M)
        L[f] = function () {
          ;(i.touched = !0), (i.dirty = !0), i.triggerMetaEvent()
          for (var R, z = arguments.length, I = new Array(z), A = 0; A < z; A++)
            I[A] = arguments[A]
          v ? (R = v.apply(void 0, I)) : (R = m5.apply(void 0, [y].concat(I))),
            g && (R = g(R, E, x(!0))),
            R !== E && C({ type: 'updateValue', namePath: h, value: R }),
            k && k.apply(void 0, I)
        }
        var O = Wd(p || [])
        return (
          O.forEach(function (R) {
            var z = L[R]
            L[R] = function () {
              z && z.apply(void 0, arguments)
              var I = i.props.rules
              I &&
                I.length &&
                C({ type: 'validateField', namePath: h, triggerName: R })
            }
          }),
          L
        )
      }),
      r.fieldContext)
    ) {
      var o = r.fieldContext.getInternalHooks,
        a = o(fr),
        s = a.initEntityValue
      s(Z(i))
    }
    return i
  }
  return (
    tt(n, [
      {
        key: 'componentDidMount',
        value: function () {
          var i = this.props,
            o = i.shouldUpdate,
            a = i.fieldContext
          if (((this.mounted = !0), a)) {
            var s = a.getInternalHooks,
              l = s(fr),
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
              : P.isValidElement(s)
              ? (u = P.cloneElement(s, this.getControlled(s.props)))
              : (_t(!s, '`children` of Field is not validate ReactElement.'),
                (u = s)),
            P.createElement(P.Fragment, { key: i }, u)
          )
        }
      }
    ]),
    n
  )
})(P.Component)
D(_p, 'contextType', Oi)
D(_p, 'defaultProps', { trigger: 'onChange', valuePropName: 'value' })
function Ly(e) {
  var t,
    n = e.name,
    r = Tr(e, v5),
    i = P.useContext(Oi),
    o = P.useContext(sl),
    a = n !== void 0 ? ge(n) : void 0,
    s = (t = r.isListField) !== null && t !== void 0 ? t : !!o,
    l = 'keep'
  return (
    s || (l = '_'.concat((a || []).join('_'))),
    P.createElement(
      _p,
      Er({ key: l, name: a, isListField: s }, r, { fieldContext: i })
    )
  )
}
function g5(e) {
  var t = e.name,
    n = e.initialValue,
    r = e.children,
    i = e.rules,
    o = e.validateTrigger,
    a = e.isListField,
    s = P.useContext(Oi),
    l = P.useContext(sl),
    u = P.useRef({ keys: [], id: 0 }),
    c = u.current,
    f = P.useMemo(
      function () {
        var y = ge(s.prefixName) || []
        return [].concat(K(y), K(ge(t)))
      },
      [s.prefixName, t]
    ),
    d = P.useMemo(
      function () {
        return B(B({}, s), {}, { prefixName: f })
      },
      [s, f]
    ),
    v = P.useMemo(
      function () {
        return {
          getKey: function (b) {
            var m = f.length,
              p = b[m]
            return [c.keys[p], b.slice(m + 1)]
          }
        }
      },
      [f]
    )
  if (typeof r != 'function')
    return _t(!1, 'Form.List only accepts function as children.'), null
  var g = function (b, m, p) {
    var h = p.source
    return h === 'internal' ? !1 : b !== m
  }
  return P.createElement(
    sl.Provider,
    { value: v },
    P.createElement(
      Oi.Provider,
      { value: d },
      P.createElement(
        Ly,
        {
          name: [],
          shouldUpdate: g,
          rules: i,
          validateTrigger: o,
          initialValue: n,
          isList: !0,
          isListField: a ?? !!l
        },
        function (y, b) {
          var m = y.value,
            p = m === void 0 ? [] : m,
            h = y.onChange,
            S = s.getFieldValue,
            x = function () {
              var T = S(f || [])
              return T || []
            },
            _ = {
              add: function (T, k) {
                var M = x()
                k >= 0 && k <= M.length
                  ? ((c.keys = [].concat(
                      K(c.keys.slice(0, k)),
                      [c.id],
                      K(c.keys.slice(k))
                    )),
                    h([].concat(K(M.slice(0, k)), [T], K(M.slice(k)))))
                  : ((c.keys = [].concat(K(c.keys), [c.id])),
                    h([].concat(K(M), [T]))),
                  (c.id += 1)
              },
              remove: function (T) {
                var k = x(),
                  M = new Set(Array.isArray(T) ? T : [T])
                M.size <= 0 ||
                  ((c.keys = c.keys.filter(function (L, O) {
                    return !M.has(O)
                  })),
                  h(
                    k.filter(function (L, O) {
                      return !M.has(O)
                    })
                  ))
              },
              move: function (T, k) {
                if (T !== k) {
                  var M = x()
                  T < 0 ||
                    T >= M.length ||
                    k < 0 ||
                    k >= M.length ||
                    ((c.keys = rv(c.keys, T, k)), h(rv(M, T, k)))
                }
              }
            },
            C = p || []
          return (
            Array.isArray(C) || (C = []),
            r(
              C.map(function (E, T) {
                var k = c.keys[T]
                return (
                  k === void 0 &&
                    ((c.keys[T] = c.id), (k = c.keys[T]), (c.id += 1)),
                  { name: T, key: k, isListField: !0 }
                )
              }),
              _,
              b
            )
          )
        }
      )
    )
  )
}
function y5(e) {
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
var Ry = '__@field_split__'
function ec(e) {
  return e
    .map(function (t) {
      return ''.concat(Y(t), ':').concat(t)
    })
    .join(Ry)
}
var Ur = (function () {
    function e() {
      et(this, e), D(this, 'kvs', new Map())
    }
    return (
      tt(e, [
        {
          key: 'set',
          value: function (n, r) {
            this.kvs.set(ec(n), r)
          }
        },
        {
          key: 'get',
          value: function (n) {
            return this.kvs.get(ec(n))
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
            this.kvs.delete(ec(n))
          }
        },
        {
          key: 'map',
          value: function (n) {
            return K(this.kvs.entries()).map(function (r) {
              var i = X(r, 2),
                o = i[0],
                a = i[1],
                s = o.split(Ry)
              return n({
                key: s.map(function (l) {
                  var u = l.match(/^([^:]*):(.*)$/),
                    c = X(u, 3),
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
  w5 = ['name'],
  S5 = tt(function e(t) {
    var n = this
    et(this, e),
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
        return r === fr
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
          : (_t(
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
            a = li(r, n.store)
          ;(o = n.prevWithoutPreserves) === null ||
            o === void 0 ||
            o.map(function (s) {
              var l = s.key
              a = Rt(a, l, Yt(r, l))
            }),
            (n.prevWithoutPreserves = null),
            n.updateStore(a)
        }
      }),
      D(this, 'destroyForm', function (r) {
        if (r) n.updateStore({})
        else {
          var i = new Ur()
          n.getFieldEntities(!0).forEach(function (o) {
            n.isMergedPreserve(o.isPreserve()) || i.set(o.getNamePath(), !0)
          }),
            (n.prevWithoutPreserves = i)
        }
      }),
      D(this, 'getInitialValue', function (r) {
        var i = Yt(n.initialValues, r)
        return r.length ? li(i) : i
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
          i = new Ur()
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
            : r && Y(r) === 'object' && ((s = r.strict), (a = r.filter)),
          o === !0 && !a)
        )
          return n.store
        var l = n.getFieldEntitiesForNamePathList(Array.isArray(o) ? o : null),
          u = []
        return (
          l.forEach(function (c) {
            var f,
              d,
              v =
                'INVALIDATE_NAME_PATH' in c
                  ? c.INVALIDATE_NAME_PATH
                  : c.getNamePath()
            if (s) {
              var g, y
              if ((g = (y = c).isList) !== null && g !== void 0 && g.call(y))
                return
            } else if (!o && (f = (d = c).isListField) !== null && f !== void 0 && f.call(d)) return
            if (!a) u.push(v)
            else {
              var b = 'getMeta' in c ? c.getMeta() : null
              a(b) && u.push(v)
            }
          }),
          nv(n.store, u.map(ge))
        )
      }),
      D(this, 'getFieldValue', function (r) {
        n.warningUnhooked()
        var i = ge(r)
        return Yt(n.store, i)
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
          f = function (b) {
            return b.isFieldTouched()
          }
        if (!l)
          return u
            ? c.every(function (y) {
                return f(y) || y.isList()
              })
            : c.some(f)
        var d = new Ur()
        l.forEach(function (y) {
          d.set(y, [])
        }),
          c.forEach(function (y) {
            var b = y.getNamePath()
            l.forEach(function (m) {
              m.every(function (p, h) {
                return b[h] === p
              }) &&
                d.update(m, function (p) {
                  return [].concat(K(p), [y])
                })
            })
          })
        var v = function (b) {
            return b.some(f)
          },
          g = d.map(function (y) {
            var b = y.value
            return b
          })
        return u ? g.every(v) : g.some(v)
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
          return wi(o, s) && a.isFieldValidating()
        })
      }),
      D(this, 'isFieldValidating', function (r) {
        return n.warningUnhooked(), n.isFieldsValidating([r])
      }),
      D(this, 'resetWithFieldInitialValue', function () {
        var r =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          i = new Ur(),
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
                  v = n.getInitialValue(d)
                if (v !== void 0)
                  _t(
                    !1,
                    "Form already set 'initialValues' with path '".concat(
                      d.join('.'),
                      "'. Field can not overwrite it."
                    )
                  )
                else {
                  var g = i.get(d)
                  if (g && g.size > 1)
                    _t(
                      !1,
                      "Multiple Field with path '".concat(
                        d.join('.'),
                        "' set 'initialValue'. Can not decide which one to pick."
                      )
                    )
                  else if (g) {
                    var y = n.getFieldValue(d),
                      b = c.isListField()
                    !b &&
                      (!r.skipExist || y === void 0) &&
                      n.updateStore(Rt(n.store, d, K(g)[0].value))
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
                  K(
                    K(u).map(function (f) {
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
          n.updateStore(li(n.initialValues)),
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
            l = Tr(a, w5),
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
            a = Yt(n.store, o)
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
                return !Oy(f.getNamePath(), i)
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
            relatedFields: [i].concat(K(o))
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
          var u = nv(n.store, [o])
          l(u, n.getFieldsValue())
        }
        n.triggerOnFieldsChange([o].concat(K(s)))
      }),
      D(this, 'setFieldsValue', function (r) {
        n.warningUnhooked()
        var i = n.store
        if (r) {
          var o = li(n.store, r)
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
          a = new Ur()
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
            var s = new Ur()
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
            return wi(r, c)
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
          v = d.recursive,
          g = d.dirty
        n.getFieldEntities(!0).forEach(function (p) {
          if (
            (s || l.push(p.getNamePath()),
            !(!p.props.rules || !p.props.rules.length) &&
              !(g && !p.isFieldDirty()))
          ) {
            var h = p.getNamePath()
            if ((f.add(h.join(c)), !s || wi(l, h, v))) {
              var S = p.validateRules(
                B({ validateMessages: B(B({}, Ny), n.validateMessages) }, a)
              )
              u.push(
                S.then(function () {
                  return { name: h, errors: [], warnings: [] }
                }).catch(function (x) {
                  var _,
                    C = [],
                    E = []
                  return (
                    (_ = x.forEach) === null ||
                      _ === void 0 ||
                      _.call(x, function (T) {
                        var k = T.rule.warningOnly,
                          M = T.errors
                        k ? E.push.apply(E, K(M)) : C.push.apply(C, K(M))
                      }),
                    C.length
                      ? Promise.reject({ name: h, errors: C, warnings: E })
                      : { name: h, errors: C, warnings: E }
                  )
                })
              )
            }
          }
        })
        var y = y5(u)
        ;(n.lastValidatePromise = y),
          y
            .catch(function (p) {
              return p
            })
            .then(function (p) {
              var h = p.map(function (S) {
                var x = S.name
                return x
              })
              n.notifyObservers(n.store, h, { type: 'validateFinish' }),
                n.triggerOnFieldsChange(h, p)
            })
        var b = y
          .then(function () {
            return n.lastValidatePromise === y
              ? Promise.resolve(n.getFieldsValue(l))
              : Promise.reject([])
          })
          .catch(function (p) {
            var h = p.filter(function (S) {
              return S && S.errors.length
            })
            return Promise.reject({
              values: n.getFieldsValue(l),
              errorFields: h,
              outOfDate: n.lastValidatePromise !== y
            })
          })
        b.catch(function (p) {
          return p
        })
        var m = l.filter(function (p) {
          return f.has(p.join(c))
        })
        return n.triggerOnFieldsChange(m), b
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
function Iy(e) {
  var t = P.useRef(),
    n = P.useState({}),
    r = X(n, 2),
    i = r[1]
  if (!t.current)
    if (e) t.current = e
    else {
      var o = function () {
          i({})
        },
        a = new S5(o)
      t.current = a.getForm()
    }
  return [t.current]
}
var Jd = P.createContext({
    triggerFormChange: function () {},
    triggerFormFinish: function () {},
    registerForm: function () {},
    unregisterForm: function () {}
  }),
  b5 = function (t) {
    var n = t.validateMessages,
      r = t.onFormChange,
      i = t.onFormFinish,
      o = t.children,
      a = P.useContext(Jd),
      s = P.useRef({})
    return P.createElement(
      Jd.Provider,
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
  x5 = [
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
  C5 = function (t, n) {
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
      v = d === void 0 ? 'onChange' : d,
      g = t.onValuesChange,
      y = t.onFieldsChange,
      b = t.onFinish,
      m = t.onFinishFailed,
      p = t.clearOnDestroy,
      h = Tr(t, x5),
      S = P.useRef(null),
      x = P.useContext(Jd),
      _ = Iy(a),
      C = X(_, 1),
      E = C[0],
      T = E.getInternalHooks(fr),
      k = T.useSubscribe,
      M = T.setInitialValues,
      L = T.setCallbacks,
      O = T.setValidateMessages,
      R = T.setPreserve,
      z = T.destroyForm
    P.useImperativeHandle(n, function () {
      return B(B({}, E), {}, { nativeElement: S.current })
    }),
      P.useEffect(
        function () {
          return (
            x.registerForm(r, E),
            function () {
              x.unregisterForm(r)
            }
          )
        },
        [x, E, r]
      ),
      O(B(B({}, x.validateMessages), f)),
      L({
        onValuesChange: g,
        onFieldsChange: function (q) {
          if ((x.triggerFormChange(r, q), y)) {
            for (
              var J = arguments.length,
                le = new Array(J > 1 ? J - 1 : 0),
                ie = 1;
              ie < J;
              ie++
            )
              le[ie - 1] = arguments[ie]
            y.apply(void 0, [q].concat(le))
          }
        },
        onFinish: function (q) {
          x.triggerFormFinish(r, q), b && b(q)
        },
        onFinishFailed: m
      }),
      R(s)
    var I = P.useRef(null)
    M(i, !I.current),
      I.current || (I.current = !0),
      P.useEffect(function () {
        return function () {
          return z(p)
        }
      }, [])
    var A,
      j = typeof l == 'function'
    if (j) {
      var F = E.getFieldsValue(!0)
      A = l(F, E)
    } else A = l
    k(!j)
    var $ = P.useRef()
    P.useEffect(
      function () {
        h5($.current || [], o || []) || E.setFields(o || []), ($.current = o)
      },
      [o, E]
    )
    var V = P.useMemo(
        function () {
          return B(B({}, E), {}, { validateTrigger: v })
        },
        [E, v]
      ),
      W = P.createElement(
        sl.Provider,
        { value: null },
        P.createElement(Oi.Provider, { value: V }, A)
      )
    return c === !1
      ? W
      : P.createElement(
          c,
          Er({}, h, {
            ref: S,
            onSubmit: function (q) {
              q.preventDefault(), q.stopPropagation(), E.submit()
            },
            onReset: function (q) {
              var J
              q.preventDefault(),
                E.resetFields(),
                (J = h.onReset) === null || J === void 0 || J.call(h, q)
            }
          }),
          W
        )
  }
function iv(e) {
  try {
    return JSON.stringify(e)
  } catch {
    return Math.random()
  }
}
function _5() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n]
  var r = t[0],
    i = t[1],
    o = i === void 0 ? {} : i,
    a = OP(o) ? { form: o } : o,
    s = a.form,
    l = P.useState(),
    u = X(l, 2),
    c = u[0],
    f = u[1],
    d = P.useMemo(
      function () {
        return iv(c)
      },
      [c]
    ),
    v = P.useRef(d)
  v.current = d
  var g = P.useContext(Oi),
    y = s || g,
    b = y && y._init,
    m = ge(r),
    p = P.useRef(m)
  return (
    (p.current = m),
    P.useEffect(
      function () {
        if (b) {
          var h = y.getFieldsValue,
            S = y.getInternalHooks,
            x = S(fr),
            _ = x.registerWatch,
            C = function (M, L) {
              var O = a.preserve ? L : M
              return typeof r == 'function' ? r(O) : Yt(O, p.current)
            },
            E = _(function (k, M) {
              var L = C(k, M),
                O = iv(L)
              v.current !== O && ((v.current = O), f(L))
            }),
            T = C(h(), h(!0))
          return c !== T && f(T), E
        }
      },
      [b]
    ),
    c
  )
}
var E5 = P.forwardRef(C5),
  va = E5
va.FormProvider = b5
va.Field = Ly
va.List = g5
va.useForm = Iy
va.useWatch = _5
const T5 = P.createContext({})
var k5 = [
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
  P5 = P.forwardRef(function (e, t) {
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
      v = e.onChange,
      g = Tr(e, k5),
      y = P.useRef(null),
      b = P.useRef(null),
      m = dk(u, { value: a }),
      p = X(m, 2),
      h = p[0],
      S = p[1]
    P.useImperativeHandle(t, function () {
      return {
        focus: function (E) {
          var T
          ;(T = y.current) === null || T === void 0 || T.focus(E)
        },
        blur: function () {
          var E
          ;(E = y.current) === null || E === void 0 || E.blur()
        },
        input: y.current,
        nativeElement: b.current
      }
    })
    var x = _r(
        r,
        i,
        D(D({}, ''.concat(r, '-checked'), h), ''.concat(r, '-disabled'), s)
      ),
      _ = function (E) {
        s ||
          ('checked' in e || S(E.target.checked),
          v == null ||
            v({
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
    return P.createElement(
      'span',
      { className: x, title: d, style: o, ref: b },
      P.createElement(
        'input',
        Er({}, g, {
          className: ''.concat(r, '-input'),
          ref: y,
          onChange: _,
          disabled: s,
          checked: !!h,
          type: f
        })
      ),
      P.createElement('span', { className: ''.concat(r, '-inner') })
    )
  })
function M5(e) {
  const t = ne.useRef(null),
    n = () => {
      xn.cancel(t.current), (t.current = null)
    }
  return [
    () => {
      n(),
        (t.current = xn(() => {
          t.current = null
        }))
    },
    (o) => {
      t.current && (o.stopPropagation(), n()), e == null || e(o)
    }
  ]
}
const j5 = (e) => {
  const { checkboxCls: t } = e,
    n = `${t}-wrapper`
  return [
    {
      [`${t}-group`]: Object.assign(Object.assign({}, Gu(e)), {
        display: 'inline-flex',
        flexWrap: 'wrap',
        columnGap: e.marginXS,
        [`> ${e.antCls}-row`]: { flex: 1 }
      }),
      [n]: Object.assign(Object.assign({}, Gu(e)), {
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
      [t]: Object.assign(Object.assign({}, Gu(e)), {
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
          [`&:focus-visible + ${t}-inner`]: Object.assign({}, kk(e))
        },
        [`${t}-inner`]: {
          boxSizing: 'border-box',
          display: 'block',
          width: e.checkboxSize,
          height: e.checkboxSize,
          direction: 'ltr',
          backgroundColor: e.colorBgContainer,
          border: `${Go(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
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
            border: `${Go(e.lineWidthBold)} solid ${e.colorWhite}`,
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
function N5(e, t) {
  const n = bp(t, {
    checkboxCls: `.${e}`,
    checkboxSize: t.controlInteractiveSize
  })
  return [j5(n)]
}
const Ay = Pk('Checkbox', (e, t) => {
    let { prefixCls: n } = t
    return [N5(n, e)]
  }),
  Fy = ne.createContext(null)
var O5 = function (e, t) {
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
const L5 = (e, t) => {
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
      v = O5(e, [
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
      { getPrefixCls: g, direction: y, checkbox: b } = P.useContext(Cn),
      m = P.useContext(Fy),
      { isFormItemInput: p } = P.useContext(T5),
      h = P.useContext(ol),
      S =
        (n = (m == null ? void 0 : m.disabled) || d) !== null && n !== void 0
          ? n
          : h,
      x = P.useRef(v.value),
      _ = P.useRef(null),
      C = dp(t, _)
    P.useEffect(() => {
      m == null || m.registerValue(v.value)
    }, []),
      P.useEffect(() => {
        if (!f)
          return (
            v.value !== x.current &&
              (m == null || m.cancelValue(x.current),
              m == null || m.registerValue(v.value),
              (x.current = v.value)),
            () => (m == null ? void 0 : m.cancelValue(v.value))
          )
      }, [v.value]),
      P.useEffect(() => {
        var j
        !((j = _.current) === null || j === void 0) &&
          j.input &&
          (_.current.input.indeterminate = s)
      }, [s])
    const E = g('checkbox', r),
      T = My(E),
      [k, M, L] = Ay(E, T),
      O = Object.assign({}, v)
    m &&
      !f &&
      ((O.onChange = function () {
        v.onChange && v.onChange.apply(v, arguments),
          m.toggleOption && m.toggleOption({ label: a, value: v.value })
      }),
      (O.name = m.name),
      (O.checked = m.value.includes(v.value)))
    const R = _r(
        `${E}-wrapper`,
        {
          [`${E}-rtl`]: y === 'rtl',
          [`${E}-wrapper-checked`]: O.checked,
          [`${E}-wrapper-disabled`]: S,
          [`${E}-wrapper-in-form-item`]: p
        },
        b == null ? void 0 : b.className,
        i,
        o,
        L,
        T,
        M
      ),
      z = _r({ [`${E}-indeterminate`]: s }, Cp, M),
      [I, A] = M5(O.onClick)
    return k(
      P.createElement(
        NP,
        { component: 'Checkbox', disabled: S },
        P.createElement(
          'label',
          {
            className: R,
            style: Object.assign(
              Object.assign({}, b == null ? void 0 : b.style),
              l
            ),
            onMouseEnter: u,
            onMouseLeave: c,
            onClick: I
          },
          P.createElement(
            P5,
            Object.assign({}, O, {
              onClick: A,
              prefixCls: E,
              className: z,
              disabled: S,
              ref: C
            })
          ),
          a !== void 0 && P.createElement('span', null, a)
        )
      )
    )
  },
  $y = P.forwardRef(L5)
var R5 = function (e, t) {
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
const I5 = P.forwardRef((e, t) => {
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
      c = R5(e, [
        'defaultValue',
        'children',
        'options',
        'prefixCls',
        'className',
        'rootClassName',
        'style',
        'onChange'
      ]),
      { getPrefixCls: f, direction: d } = P.useContext(Cn),
      [v, g] = P.useState(c.value || n || []),
      [y, b] = P.useState([])
    P.useEffect(() => {
      'value' in c && g(c.value || [])
    }, [c.value])
    const m = P.useMemo(
        () =>
          i.map((z) =>
            typeof z == 'string' || typeof z == 'number'
              ? { label: z, value: z }
              : z
          ),
        [i]
      ),
      p = (z) => {
        b((I) => I.filter((A) => A !== z))
      },
      h = (z) => {
        b((I) => [].concat(K(I), [z]))
      },
      S = (z) => {
        const I = v.indexOf(z.value),
          A = K(v)
        I === -1 ? A.push(z.value) : A.splice(I, 1),
          'value' in c || g(A),
          u == null ||
            u(
              A.filter((j) => y.includes(j)).sort((j, F) => {
                const $ = m.findIndex((W) => W.value === j),
                  V = m.findIndex((W) => W.value === F)
                return $ - V
              })
            )
      },
      x = f('checkbox', o),
      _ = `${x}-group`,
      C = My(x),
      [E, T, k] = Ay(x, C),
      M = uT(c, ['value', 'disabled']),
      L = i.length
        ? m.map((z) =>
            P.createElement(
              $y,
              {
                prefixCls: x,
                key: z.value.toString(),
                disabled: 'disabled' in z ? z.disabled : c.disabled,
                value: z.value,
                checked: v.includes(z.value),
                onChange: z.onChange,
                className: `${_}-item`,
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
        toggleOption: S,
        value: v,
        disabled: c.disabled,
        name: c.name,
        registerValue: h,
        cancelValue: p
      },
      R = _r(_, { [`${_}-rtl`]: d === 'rtl' }, a, s, k, C, T)
    return E(
      P.createElement(
        'div',
        Object.assign({ className: R, style: l }, M, { ref: t }),
        P.createElement(Fy.Provider, { value: O }, L)
      )
    )
  }),
  ll = $y
ll.Group = I5
ll.__ANT_CHECKBOX = !0
const A5 = ({
    handleCloseModal: e,
    setActiveModal: t,
    activeModal: n,
    editOrderOption: r
  }) =>
    w.jsxs('div', {
      className: N.modal_content,
      children: [
        w.jsxs('div', {
          className: N.sidebar,
          children: [
            w.jsx('h3', {
              className: N.sidebarTitle,
              children: 'Change what you want'
            }),
            w.jsx('ul', {
              className: N.sidebarMenu,
              children:
                r == null
                  ? void 0
                  : r.map((i) =>
                      w.jsxs(
                        'div',
                        {
                          className: N.sidebarItem,
                          onClick: () => t(i.modalType),
                          children: [
                            w.jsx('div', {
                              children: i == null ? void 0 : i.icon
                            }),
                            w.jsx('li', {
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
        w.jsxs('div', {
          className: N.settingsContainer,
          children: [
            n === 'shipping' && w.jsx(F5, { handleCloseModal: e }),
            n === 'contact_information' && w.jsx($5, { handleCloseModal: e }),
            n === 'quantities' && w.jsx(z5, { handleCloseModal: e }),
            n === 'contact_customer_support' &&
              w.jsx(D5, { handleCloseModal: e }),
            n === 'change_product_variant' &&
              w.jsx(V5, { handleCloseModal: e }),
            n === 'upgrade_shipping_method' &&
              w.jsx(B5, { handleCloseModal: e }),
            n === 'edit_gift_message' && w.jsx(H5, { handleCloseModal: e }),
            n === 'download_invoice' && w.jsx(U5, { handleCloseModal: e }),
            n === 'request_order_cancel' && w.jsx(W5, { handleCloseModal: e })
          ]
        })
      ]
    }),
  F5 = ({ handleCloseModal: e }) => {
    const [t, n] = P.useState(''),
      [r, i] = P.useState('+1'),
      o = (s) => {
        const l = s.target.value,
          u = Ft.find((c) => c.value === l)
        i((u == null ? void 0 : u.phoneCode) || '')
      },
      a = (s) => {
        n(s.target.value)
      }
    return w.jsxs('div', {
      className: N.singleModalContent,
      children: [
        w.jsxs('div', {
          className: N.modal_content_header,
          children: [
            w.jsx('p', {
              className: N.modal_content_title,
              children: 'Shipping Address'
            }),
            w.jsx('div', {
              className: N.modal_close_icon,
              onClick: e,
              children: w.jsx('svg', {
                width: '24px',
                height: '24px',
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                fill: '#5B21B6',
                children: w.jsx('path', {
                  d: 'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z'
                })
              })
            })
          ]
        }),
        w.jsx('div', {
          className: N.settingsContent,
          children: w.jsxs('form', {
            action: '',
            className: N.formContainer,
            children: [
              w.jsx('div', {
                className: `${N.form_item}`,
                children: w.jsxs('div', {
                  className: N.selectContainer,
                  children: [
                    w.jsx('label', {
                      className: N.input__label,
                      children: 'Country/Region'
                    }),
                    w.jsx('select', {
                      onChange: o,
                      children:
                        Ft == null
                          ? void 0
                          : Ft.map((s, l) =>
                              w.jsx(
                                'option',
                                {
                                  value: s.value,
                                  children: s == null ? void 0 : s.label
                                },
                                l
                              )
                            )
                    }),
                    w.jsx('svg', {
                      className: N.select_country_icon,
                      width: '16px',
                      height: '16px',
                      xmlns: 'http://www.w3.org/2000/svg',
                      viewBox: '0 0 24 24',
                      fill: 'currentColor',
                      children: w.jsx('path', {
                        d: 'M18.2072 9.0428 12.0001 2.83569 5.793 9.0428 7.20721 10.457 12.0001 5.66412 16.793 10.457 18.2072 9.0428ZM5.79285 14.9572 12 21.1643 18.2071 14.9572 16.7928 13.543 12 18.3359 7.20706 13.543 5.79285 14.9572Z'
                      })
                    })
                  ]
                })
              }),
              w.jsxs('div', {
                className: ` ${N.form_Item_double}`,
                children: [
                  w.jsxs('div', {
                    className: `${N.form_item}`,
                    children: [
                      w.jsx('label', {
                        className: N.input__label,
                        children: 'First Name'
                      }),
                      w.jsx('input', { type: 'text', placeholder: 'John' })
                    ]
                  }),
                  w.jsxs('div', {
                    className: `${N.form_item}`,
                    children: [
                      w.jsx('label', {
                        className: N.input__label,
                        children: 'Last name'
                      }),
                      w.jsx('input', { type: 'text', placeholder: 'Doe' })
                    ]
                  })
                ]
              }),
              w.jsxs('div', {
                className: `${N.form_item} ${N.phone_field}`,
                children: [
                  w.jsx('label', {
                    className: N.input__label,
                    children: 'Phone'
                  }),
                  w.jsx('span', { className: N.country_code, children: r }),
                  w.jsx('input', {
                    type: 'tel',
                    required: !0,
                    id: 'phoneNumber',
                    placeholder: 'Enter phone number',
                    className: N.phoneInputCustom,
                    value: t,
                    onChange: a,
                    style: { paddingLeft: `${r.length * 8 + 20}px` }
                  })
                ]
              }),
              w.jsxs('div', {
                className: `${N.form_item}`,
                children: [
                  w.jsx('label', {
                    className: N.input__label,
                    children: 'Address'
                  }),
                  w.jsx('input', {
                    type: 'text',
                    placeholder: 'Address',
                    required: !0,
                    id: 'address1'
                  })
                ]
              }),
              w.jsxs('div', {
                className: `${N.form_item}`,
                children: [
                  w.jsx('label', {
                    className: N.input__label,
                    children: 'Address (Optional)'
                  }),
                  w.jsx('input', {
                    type: 'text',
                    placeholder: 'Apartment, suit, etc (Optional)',
                    required: !0,
                    id: 'address2'
                  })
                ]
              }),
              w.jsx('div', {
                className: `${N.form_item}`,
                children: w.jsxs('div', {
                  className: N.selectContainer,
                  children: [
                    w.jsx('label', {
                      className: N.input__label,
                      children: 'Provience'
                    }),
                    w.jsx('select', {
                      children:
                        dn == null
                          ? void 0
                          : dn.map((s, l) =>
                              w.jsx(
                                'option',
                                { children: s == null ? void 0 : s.label },
                                l
                              )
                            )
                    }),
                    w.jsx('svg', {
                      className: N.select_proviences_icon,
                      width: '16px',
                      height: '16px',
                      xmlns: 'http://www.w3.org/2000/svg',
                      viewBox: '0 0 24 24',
                      fill: 'currentColor',
                      children: w.jsx('path', {
                        d: 'M18.2072 9.0428 12.0001 2.83569 5.793 9.0428 7.20721 10.457 12.0001 5.66412 16.793 10.457 18.2072 9.0428ZM5.79285 14.9572 12 21.1643 18.2071 14.9572 16.7928 13.543 12 18.3359 7.20706 13.543 5.79285 14.9572Z'
                      })
                    })
                  ]
                })
              }),
              w.jsxs('div', {
                className: ` ${N.form_Item_double}`,
                children: [
                  w.jsxs('div', {
                    className: `${N.form_item} ${N.upperLabel}`,
                    children: [
                      w.jsx('label', {
                        className: N.input__label,
                        children: 'City'
                      }),
                      w.jsx('input', { type: 'text', placeholder: 'New work' })
                    ]
                  }),
                  w.jsxs('div', {
                    className: `${N.form_item} ${N.upperLabel}`,
                    children: [
                      w.jsx('label', {
                        className: N.input__label,
                        children: 'Zip/Postal Code'
                      }),
                      w.jsx('input', { type: 'text', placeholder: '10001' })
                    ]
                  })
                ]
              }),
              w.jsx('button', { className: N.save_btn, children: 'Save' })
            ]
          })
        })
      ]
    })
  },
  $5 = ({ handleCloseModal: e }) => {
    const [t, n] = P.useState('222658846989'),
      [r, i] = P.useState('+268'),
      o = (a) => {
        n(a.target.value)
      }
    return w.jsxs('div', {
      className: N.singleModalContent,
      children: [
        w.jsxs('div', {
          className: N.modal_content_header,
          children: [
            w.jsx('p', {
              className: N.modal_content_title,
              children: 'Contact Information'
            }),
            w.jsx('div', {
              className: N.modal_close_icon,
              onClick: e,
              children: w.jsx('svg', {
                width: '24px',
                height: '24px',
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                fill: '#5B21B6',
                children: w.jsx('path', {
                  d: 'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z'
                })
              })
            })
          ]
        }),
        w.jsx('div', {
          className: N.settingsContent,
          children: w.jsxs('form', {
            action: '',
            className: N.formContainer,
            children: [
              w.jsxs('div', {
                className: `${N.form_item}`,
                children: [
                  w.jsx('label', {
                    className: N.input__label,
                    children: 'Email'
                  }),
                  w.jsx('input', {
                    type: 'email',
                    placeholder: 'john.doe@example.com'
                  })
                ]
              }),
              w.jsxs('div', {
                className: `${N.form_item} ${N.phone_field}`,
                children: [
                  w.jsx('label', {
                    className: N.input__label,
                    children: 'Phone'
                  }),
                  w.jsx('div', {
                    className: N.phone_code_select_container,
                    children: w.jsx('select', {
                      className: N.country_code_select,
                      children: w.jsx('option', { children: r })
                    })
                  }),
                  w.jsx('input', {
                    type: 'tel',
                    required: !0,
                    id: 'phoneNumber',
                    placeholder: 'Enter phone number',
                    className: N.phoneInputCustom,
                    value: t,
                    onChange: o,
                    style: { paddingLeft: `${r.length * 8 + 20}px` }
                  })
                ]
              }),
              w.jsx('button', { className: N.save_btn, children: 'Save' })
            ]
          })
        })
      ]
    })
  },
  D5 = ({ handleCloseModal: e }) => {
    const [t, n] = P.useState(''),
      [r, i] = P.useState('+1'),
      o = (l) => {
        const u = l.target.value,
          c = Ft.find((f) => f.value === u)
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
    return w.jsxs('div', {
      className: N.singleModalContent,
      children: [
        w.jsxs('div', {
          className: N.modal_content_header,
          children: [
            w.jsx('p', {
              className: N.modal_content_title,
              children: 'Customer Support'
            }),
            w.jsx('div', {
              className: N.modal_close_icon,
              onClick: e,
              children: w.jsx('svg', {
                width: '24px',
                height: '24px',
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                fill: '#5B21B6',
                children: w.jsx('path', {
                  d: 'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z'
                })
              })
            })
          ]
        }),
        w.jsx('div', {
          className: N.settingsContent,
          children: w.jsxs('form', {
            action: '',
            className: N.customer_support_form_container,
            children: [
              w.jsx('div', {
                className: `${N.form_item}`,
                children: w.jsxs('div', {
                  className: N.selectContainer,
                  children: [
                    w.jsx('label', {
                      className: N.input__label,
                      children: 'Support Reason'
                    }),
                    w.jsx('select', {
                      onChange: o,
                      children:
                        s == null
                          ? void 0
                          : s.map((l, u) =>
                              w.jsx('option', { value: l, children: l }, u)
                            )
                    }),
                    w.jsx('svg', {
                      className: N.select_country_icon,
                      width: '16px',
                      height: '16px',
                      xmlns: 'http://www.w3.org/2000/svg',
                      viewBox: '0 0 24 24',
                      fill: 'currentColor',
                      children: w.jsx('path', {
                        d: 'M18.2072 9.0428 12.0001 2.83569 5.793 9.0428 7.20721 10.457 12.0001 5.66412 16.793 10.457 18.2072 9.0428ZM5.79285 14.9572 12 21.1643 18.2071 14.9572 16.7928 13.543 12 18.3359 7.20706 13.543 5.79285 14.9572Z'
                      })
                    })
                  ]
                })
              }),
              w.jsxs('div', {
                className: `${N.form_item}`,
                children: [
                  w.jsx('label', {
                    className: N.input__label,
                    children: 'Email'
                  }),
                  w.jsx('input', {
                    type: 'text',
                    placeholder: 'john.doe@example.com'
                  })
                ]
              }),
              w.jsxs('div', {
                className: `${N.form_item} ${N.phone_field}`,
                children: [
                  w.jsx('label', {
                    className: N.input__label,
                    children: 'Phone'
                  }),
                  w.jsx('span', { className: N.country_code, children: r }),
                  w.jsx('input', {
                    type: 'tel',
                    required: !0,
                    id: 'phoneNumber',
                    placeholder: 'Enter phone number',
                    className: N.phoneInputCustom,
                    value: t,
                    onChange: a,
                    style: { paddingLeft: `${r.length * 8 + 20}px` }
                  })
                ]
              }),
              w.jsxs('div', {
                className: `${N.form_item}`,
                children: [
                  w.jsx('label', {
                    className: N.input__label,
                    children: 'Address'
                  }),
                  w.jsx('textarea', {
                    rows: 5,
                    type: 'text',
                    placeholder: 'Address',
                    required: !0,
                    id: 'address1'
                  })
                ]
              }),
              w.jsx('button', { className: N.save_btn, children: 'Save' })
            ]
          })
        })
      ]
    })
  },
  z5 = ({ handleCloseModal: e }) => {
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
    return w.jsxs('div', {
      className: N.singleModalContent,
      children: [
        w.jsxs('div', {
          className: N.modal_content_header,
          children: [
            w.jsx('p', {
              className: N.modal_content_title,
              children: 'Change Product Quantity'
            }),
            w.jsx('div', {
              className: N.modal_close_icon,
              onClick: e,
              children: w.jsx('svg', {
                width: '24px',
                height: '24px',
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                fill: '#5B21B6',
                children: w.jsx('path', {
                  d: 'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z'
                })
              })
            })
          ]
        }),
        w.jsxs('div', {
          className: N.settingsContent,
          children: [
            w.jsxs('div', {
              className: N.product_search_box,
              children: [
                w.jsx('input', {
                  type: 'search',
                  placeholder: 'Search here..'
                }),
                w.jsx('svg', {
                  className: N.search_icon,
                  width: '15px',
                  height: '15px',
                  xmlns: 'http://www.w3.org/2000/svg',
                  viewBox: '0 0 24 24',
                  fill: 'currentColor',
                  children: w.jsx('path', {
                    d: 'M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z'
                  })
                })
              ]
            }),
            w.jsx('div', {
              className: N.product_main_container,
              children:
                t == null
                  ? void 0
                  : t.map((n) =>
                      w.jsxs(w.Fragment, {
                        children: [
                          w.jsxs(
                            'div',
                            {
                              className: N.product_box,
                              children: [
                                w.jsxs('div', {
                                  className: N.product_box_content,
                                  children: [
                                    w.jsx('div', {
                                      children: w.jsx('svg', {
                                        width: '18px',
                                        height: '18px',
                                        xmlns: 'http://www.w3.org/2000/svg',
                                        viewBox: '0 0 24 24',
                                        fill: 'currentColor',
                                        children: w.jsx('path', {
                                          d: 'M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z'
                                        })
                                      })
                                    }),
                                    w.jsx('div', {
                                      className: N.product_image_box,
                                      children: w.jsx('img', {
                                        src: 'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
                                        alt: ''
                                      })
                                    }),
                                    w.jsxs('div', {
                                      className: N.product_content,
                                      children: [
                                        w.jsx('h5', {
                                          className: N.product_title,
                                          children:
                                            'The Collection Snowboard: Hydrogen'
                                        }),
                                        w.jsx('p', {
                                          className: N.product_variant,
                                          children: 'medium / black / large'
                                        })
                                      ]
                                    })
                                  ]
                                }),
                                w.jsx('div', {
                                  className: N.product_action_box,
                                  children: w.jsxs('div', {
                                    className: N.action_btn_box,
                                    children: [
                                      w.jsx('button', {
                                        className: N.action_btn,
                                        children: w.jsx('svg', {
                                          width: '14px',
                                          height: '14px',
                                          xmlns: 'http://www.w3.org/2000/svg',
                                          viewBox: '0 0 24 24',
                                          fill: 'currentColor',
                                          children: w.jsx('path', {
                                            d: 'M5 11V13H19V11H5Z'
                                          })
                                        })
                                      }),
                                      w.jsx('p', {
                                        className: N.product_quantity,
                                        children: '1'
                                      }),
                                      w.jsx('button', {
                                        className: N.action_btn,
                                        children: w.jsx('svg', {
                                          width: '14px',
                                          height: '14px',
                                          xmlns: 'http://www.w3.org/2000/svg',
                                          viewBox: '0 0 24 24',
                                          fill: 'currentColor',
                                          children: w.jsx('path', {
                                            d: 'M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z'
                                          })
                                        })
                                      })
                                    ]
                                  })
                                }),
                                w.jsx('p', {
                                  className: N.product_price,
                                  children: '$200'
                                })
                              ]
                            },
                            n.id
                          ),
                          w.jsx('div', { className: 'opt_order_edit_divider' })
                        ]
                      })
                    )
            }),
            w.jsx('button', { className: N.save_btn, children: 'Save' })
          ]
        })
      ]
    })
  },
  V5 = ({ handleCloseModal: e }) => {
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
    return w.jsxs('div', {
      className: N.singleModalContent,
      children: [
        w.jsxs('div', {
          className: N.modal_content_header,
          children: [
            w.jsx('p', {
              className: N.modal_content_title,
              children: 'Change Product Variant'
            }),
            w.jsx('div', {
              className: N.modal_close_icon,
              onClick: e,
              children: w.jsx('svg', {
                width: '24px',
                height: '24px',
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                fill: '#5B21B6',
                children: w.jsx('path', {
                  d: 'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z'
                })
              })
            })
          ]
        }),
        w.jsxs('div', {
          className: N.settingsContent,
          children: [
            w.jsxs('div', {
              className: N.product_search_box,
              children: [
                w.jsx('input', {
                  type: 'search',
                  placeholder: 'Search here..'
                }),
                w.jsx('svg', {
                  className: N.search_icon,
                  width: '15px',
                  height: '15px',
                  xmlns: 'http://www.w3.org/2000/svg',
                  viewBox: '0 0 24 24',
                  fill: 'currentColor',
                  children: w.jsx('path', {
                    d: 'M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z'
                  })
                })
              ]
            }),
            w.jsx('div', {
              className: N.product_main_container,
              children:
                t == null
                  ? void 0
                  : t.map((n) =>
                      w.jsxs(w.Fragment, {
                        children: [
                          w.jsxs(
                            'div',
                            {
                              className: N.variant_product_box,
                              children: [
                                w.jsxs('div', {
                                  className: N.variant_product_box_content,
                                  children: [
                                    w.jsx('div', {
                                      className: N.product_image_box,
                                      children: w.jsx('img', {
                                        src: 'https://cdn.shopify.com/s/files/1/0711/0249/6991/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1720981400',
                                        alt: ''
                                      })
                                    }),
                                    w.jsxs('div', {
                                      className: N.product_content,
                                      children: [
                                        w.jsx('h5', {
                                          className: N.product_title,
                                          children:
                                            'The Collection Snowboard: Hydrogen'
                                        }),
                                        w.jsx('p', {
                                          className: N.product_variant,
                                          children: 'medium / black / large'
                                        }),
                                        w.jsx('p', {
                                          className: N.product_price,
                                          children: 'Price: $200'
                                        })
                                      ]
                                    })
                                  ]
                                }),
                                w.jsx('div', {
                                  className: N.variant_select_box,
                                  children: w.jsx('select', {
                                    children: w.jsx('option', {
                                      children: 'medium / black / large'
                                    })
                                  })
                                })
                              ]
                            },
                            n.id
                          ),
                          w.jsx('div', { className: 'opt_order_edit_divider' })
                        ]
                      })
                    )
            }),
            w.jsx('button', { className: N.save_btn, children: 'Save' })
          ]
        })
      ]
    })
  },
  B5 = ({ handleCloseModal: e }) => {
    const t = [
      { id: '01', name: 'Standard', price: '00' },
      { id: '02', name: 'Economy', price: '30' },
      { id: '03', name: 'Business', price: '60' }
    ]
    return w.jsxs('div', {
      className: `${N.singleModalContent} ${N.product_variant_container}`,
      children: [
        w.jsxs('div', {
          className: N.modal_content_header,
          children: [
            w.jsx('p', {
              className: N.modal_content_title,
              children: 'Change Product Variant'
            }),
            w.jsx('div', {
              className: N.modal_close_icon,
              onClick: e,
              children: w.jsx('svg', {
                width: '24px',
                height: '24px',
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                fill: '#5B21B6',
                children: w.jsx('path', {
                  d: 'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z'
                })
              })
            })
          ]
        }),
        w.jsxs('div', {
          className: N.settingsContent,
          children: [
            w.jsx('div', {
              className: N.shipping_method_content_box,
              children:
                t == null
                  ? void 0
                  : t.map((n) =>
                      w.jsxs(
                        'div',
                        {
                          className: N.shipping_method_content,
                          children: [
                            w.jsxs('div', {
                              className: N.method_radio,
                              children: [
                                w.jsx('input', {
                                  id: n.name.toLowerCase(),
                                  name: n.name.toLowerCase(),
                                  type: 'radio'
                                }),
                                w.jsx('label', {
                                  htmlFor: n.name.toLowerCase(),
                                  className: N.shipping_method_name,
                                  children: n.name
                                })
                              ]
                            }),
                            w.jsxs('p', {
                              className: N.method_price,
                              children: [n.price, ' USD']
                            })
                          ]
                        },
                        n.id
                      )
                    )
            }),
            w.jsx('button', { className: N.save_btn, children: 'Save' })
          ]
        })
      ]
    })
  },
  H5 = ({ handleCloseModal: e }) =>
    w.jsxs('div', {
      className: `${N.singleModalContent}`,
      children: [
        w.jsxs('div', {
          className: N.modal_content_header,
          children: [
            w.jsx('p', {
              className: N.modal_content_title,
              children: 'Change Product Variant'
            }),
            w.jsx('div', {
              className: N.modal_close_icon,
              onClick: e,
              children: w.jsx('svg', {
                width: '24px',
                height: '24px',
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                fill: '#5B21B6',
                children: w.jsx('path', {
                  d: 'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z'
                })
              })
            })
          ]
        }),
        w.jsxs('div', {
          className: N.settingsContent,
          children: [
            w.jsx('div', {
              className: N.gift_message_box,
              children: w.jsx('div', {})
            }),
            w.jsx('button', { className: N.save_btn, children: 'Save' })
          ]
        })
      ]
    }),
  W5 = ({ handleCloseModal: e }) => {
    const t = [
      'Found a better price elsewhere',
      'Item is no longer neeeded',
      'Delivery costs are too expensive',
      'The item was purchased by mistake',
      'The order is taking too long to arrive',
      'Change mind about the product',
      'Other'
    ]
    return w.jsxs('div', {
      className: N.singleModalContent,
      children: [
        w.jsxs('div', {
          className: N.modal_content_header,
          children: [
            w.jsx('p', {
              className: N.modal_content_title,
              children: 'Request for Order Cancel'
            }),
            w.jsx('div', {
              className: N.modal_close_icon,
              onClick: e,
              children: w.jsx('svg', {
                width: '24px',
                height: '24px',
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                fill: '#5B21B6',
                children: w.jsx('path', {
                  d: 'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z'
                })
              })
            })
          ]
        }),
        w.jsx('div', {
          className: N.settingsContent,
          children: w.jsxs('form', {
            action: '',
            className: N.customer_support_form_container,
            children: [
              w.jsx('div', {
                className: `${N.form_item}`,
                children: w.jsxs('div', {
                  className: N.selectContainer,
                  children: [
                    w.jsx('label', {
                      className: N.input__label,
                      children: 'Cancel Reason'
                    }),
                    w.jsx('select', {
                      children:
                        t == null
                          ? void 0
                          : t.map((n, r) =>
                              w.jsx('option', { value: n, children: n }, r)
                            )
                    }),
                    w.jsx('svg', {
                      className: N.select_country_icon,
                      width: '16px',
                      height: '16px',
                      xmlns: 'http://www.w3.org/2000/svg',
                      viewBox: '0 0 24 24',
                      fill: 'currentColor',
                      children: w.jsx('path', {
                        d: 'M18.2072 9.0428 12.0001 2.83569 5.793 9.0428 7.20721 10.457 12.0001 5.66412 16.793 10.457 18.2072 9.0428ZM5.79285 14.9572 12 21.1643 18.2071 14.9572 16.7928 13.543 12 18.3359 7.20706 13.543 5.79285 14.9572Z'
                      })
                    })
                  ]
                })
              }),
              w.jsxs('div', {
                className: `${N.form_item}`,
                children: [
                  w.jsx('label', {
                    className: N.input__label,
                    children: 'Describe'
                  }),
                  w.jsx('textarea', {
                    rows: 7,
                    type: 'text',
                    placeholder: 'Why you want to cancel your order?',
                    required: !0,
                    id: 'address1'
                  }),
                  w.jsx('small', {
                    children: `You'll be contacted by the customer support team to confirm the
              cancellation.`
                  })
                ]
              }),
              w.jsx('button', { className: N.save_btn, children: 'Save' })
            ]
          })
        })
      ]
    })
  },
  U5 = ({ handleCloseModal: e }) => {
    const [t, n] = P.useState(!1),
      [r, i] = P.useState(!1),
      o = (s) => {
        n(s.target.checked)
      },
      a = (s) => {
        i(s.target.checked)
      }
    return w.jsxs('div', {
      className: N.singleModalContent,
      children: [
        w.jsxs('div', {
          className: N.modal_content_header,
          children: [
            w.jsx('p', {
              className: N.modal_content_title,
              children: 'Download Invoice'
            }),
            w.jsx('div', {
              className: N.modal_close_icon,
              onClick: e,
              children: w.jsx('svg', {
                width: '24px',
                height: '24px',
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                fill: '#5B21B6',
                children: w.jsx('path', {
                  d: 'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z'
                })
              })
            })
          ]
        }),
        w.jsx('div', {
          className: N.settingsContent,
          children: w.jsxs('div', {
            className: N.download_invoice_content,
            children: [
              w.jsxs('div', {
                className: N.address_container,
                children: [
                  w.jsxs('div', {
                    className: N.shipping_address,
                    children: [
                      w.jsx('p', {
                        className: N.address_title,
                        children: 'Shipping Address'
                      }),
                      w.jsxs('div', {
                        children: [
                          w.jsx('p', {
                            className: N.address_name,
                            children: 'Ahmed Faysal'
                          }),
                          w.jsx('p', {
                            className: N.address,
                            children: 'Mirpur'
                          }),
                          w.jsx('p', {
                            className: N.address,
                            children: 'Dhaka 1216, BD'
                          })
                        ]
                      })
                    ]
                  }),
                  w.jsxs('div', {
                    className: N.billing_address,
                    children: [
                      w.jsx('p', {
                        className: N.address_title,
                        children: 'Billing Address'
                      }),
                      w.jsxs('div', {
                        children: [
                          w.jsx('p', {
                            className: N.address_name,
                            children: 'Ahmed Faysal'
                          }),
                          w.jsx('p', {
                            className: N.address,
                            children: 'Mirpur'
                          }),
                          w.jsx('p', {
                            className: N.address,
                            children: 'Dhaka 1216, BD'
                          })
                        ]
                      })
                    ]
                  })
                ]
              }),
              w.jsxs('div', {
                children: [
                  w.jsx('p', {
                    className: N.customize_invoice_title,
                    children: 'Customize your invoice'
                  }),
                  w.jsxs('div', {
                    className: N.customize_checkbox_container,
                    children: [
                      w.jsxs('div', {
                        className: N.customize_checkbox_box,
                        children: [
                          w.jsx(ll, {
                            className: N.purchasing_checkbox,
                            id: 'business',
                            checked: t,
                            onChange: o,
                            children: 'Purchasing as a business'
                          }),
                          t &&
                            w.jsx('div', {
                              className: N.business_form,
                              children: w.jsxs('form', {
                                action: '',
                                className: N.formContainer,
                                children: [
                                  w.jsxs('div', {
                                    className: N.form_item,
                                    children: [
                                      w.jsx('label', {
                                        className: N.input__label,
                                        children: 'Company Name'
                                      }),
                                      w.jsx('input', {
                                        type: 'text',
                                        placeholder: 'Company Name',
                                        required: !0,
                                        id: 'company_name'
                                      })
                                    ]
                                  }),
                                  w.jsx('div', {
                                    className: N.form_item,
                                    children: w.jsxs('div', {
                                      className: N.selectContainer,
                                      children: [
                                        w.jsx('label', {
                                          className: N.input__label,
                                          children: 'Country/Region'
                                        }),
                                        w.jsx('select', {
                                          children:
                                            Ft == null
                                              ? void 0
                                              : Ft.map((s, l) =>
                                                  w.jsx(
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
                                        w.jsx('svg', {
                                          className: N.select_country_icon,
                                          width: '16px',
                                          height: '16px',
                                          xmlns: 'http://www.w3.org/2000/svg',
                                          viewBox: '0 0 24 24',
                                          fill: 'currentColor',
                                          children: w.jsx('path', {
                                            d: 'M18.2072 9.0428 12.0001 2.83569 5.793 9.0428 7.20721 10.457 12.0001 5.66412 16.793 10.457 18.2072 9.0428ZM5.79285 14.9572 12 21.1643 18.2071 14.9572 16.7928 13.543 12 18.3359 7.20706 13.543 5.79285 14.9572Z'
                                          })
                                        })
                                      ]
                                    })
                                  }),
                                  w.jsx('div', {
                                    className: N.form_item,
                                    children: w.jsxs('div', {
                                      className: N.selectContainer,
                                      children: [
                                        w.jsx('label', {
                                          className: N.input__label,
                                          children: 'Tax ID'
                                        }),
                                        w.jsx('select', {
                                          children:
                                            dn == null
                                              ? void 0
                                              : dn.map((s, l) =>
                                                  w.jsx(
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
                                        w.jsx('svg', {
                                          className: N.select_proviences_icon,
                                          width: '16px',
                                          height: '16px',
                                          xmlns: 'http://www.w3.org/2000/svg',
                                          viewBox: '0 0 24 24',
                                          fill: 'currentColor',
                                          children: w.jsx('path', {
                                            d: 'M18.2072 9.0428 12.0001 2.83569 5.793 9.0428 7.20721 10.457 12.0001 5.66412 16.793 10.457 18.2072 9.0428ZM5.79285 14.9572 12 21.1643 18.2071 14.9572 16.7928 13.543 12 18.3359 7.20706 13.543 5.79285 14.9572Z'
                                          })
                                        })
                                      ]
                                    })
                                  }),
                                  w.jsxs('div', {
                                    className: N.form_item,
                                    children: [
                                      w.jsx('label', {
                                        className: N.input__label,
                                        children: 'Tax Number'
                                      }),
                                      w.jsx('input', {
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
                      w.jsxs('div', {
                        className: N.customize_checkbox_box,
                        children: [
                          w.jsx(ll, {
                            className: N.billing_details_checkbox,
                            id: 'update_billing_address',
                            checked: r,
                            onChange: a,
                            children: 'Update invoice billing details'
                          }),
                          r &&
                            w.jsx('div', {
                              className: N.billing_address_form,
                              children: w.jsxs('form', {
                                action: '',
                                className: N.formContainer,
                                children: [
                                  w.jsx('div', {
                                    className: N.form_item,
                                    children: w.jsxs('div', {
                                      className: N.selectContainer,
                                      children: [
                                        w.jsx('label', {
                                          className: N.input__label,
                                          children: 'Country/Region'
                                        }),
                                        w.jsx('select', {
                                          children:
                                            Ft == null
                                              ? void 0
                                              : Ft.map((s, l) =>
                                                  w.jsx(
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
                                        w.jsx('svg', {
                                          className: N.select_country_icon,
                                          width: '16px',
                                          height: '16px',
                                          xmlns: 'http://www.w3.org/2000/svg',
                                          viewBox: '0 0 24 24',
                                          fill: 'currentColor',
                                          children: w.jsx('path', {
                                            d: 'M18.2072 9.0428 12.0001 2.83569 5.793 9.0428 7.20721 10.457 12.0001 5.66412 16.793 10.457 18.2072 9.0428ZM5.79285 14.9572 12 21.1643 18.2071 14.9572 16.7928 13.543 12 18.3359 7.20706 13.543 5.79285 14.9572Z'
                                          })
                                        })
                                      ]
                                    })
                                  }),
                                  w.jsxs('div', {
                                    className: N.form_item,
                                    children: [
                                      w.jsx('label', {
                                        className: N.input__label,
                                        children: 'Address'
                                      }),
                                      w.jsx('input', {
                                        type: 'text',
                                        placeholder: 'Address',
                                        required: !0,
                                        id: 'address1'
                                      })
                                    ]
                                  }),
                                  w.jsxs('div', {
                                    className: N.form_item,
                                    children: [
                                      w.jsx('label', {
                                        className: N.input__label,
                                        children: 'Address (Optional)'
                                      }),
                                      w.jsx('input', {
                                        type: 'text',
                                        placeholder:
                                          'Apartment, suite, etc (Optional)',
                                        required: !0,
                                        id: 'address2'
                                      })
                                    ]
                                  }),
                                  w.jsx('div', {
                                    className: N.form_item,
                                    children: w.jsxs('div', {
                                      className: N.selectContainer,
                                      children: [
                                        w.jsx('label', {
                                          className: N.input__label,
                                          children: 'Province'
                                        }),
                                        w.jsx('select', {
                                          children:
                                            dn == null
                                              ? void 0
                                              : dn.map((s, l) =>
                                                  w.jsx(
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
                                        w.jsx('svg', {
                                          className: N.select_proviences_icon,
                                          width: '16px',
                                          height: '16px',
                                          xmlns: 'http://www.w3.org/2000/svg',
                                          viewBox: '0 0 24 24',
                                          fill: 'currentColor',
                                          children: w.jsx('path', {
                                            d: 'M18.2072 9.0428 12.0001 2.83569 5.793 9.0428 7.20721 10.457 12.0001 5.66412 16.793 10.457 18.2072 9.0428ZM5.79285 14.9572 12 21.1643 18.2071 14.9572 16.7928 13.543 12 18.3359 7.20706 13.543 5.79285 14.9572Z'
                                          })
                                        })
                                      ]
                                    })
                                  }),
                                  w.jsxs('div', {
                                    className: N.form_Item_double,
                                    children: [
                                      w.jsxs('div', {
                                        className: `${N.form_item} ${N.upperLabel}`,
                                        children: [
                                          w.jsx('label', {
                                            className: N.input__label,
                                            children: 'City'
                                          }),
                                          w.jsx('input', {
                                            type: 'text',
                                            placeholder: 'New York'
                                          })
                                        ]
                                      }),
                                      w.jsxs('div', {
                                        className: `${N.form_item} ${N.upperLabel}`,
                                        children: [
                                          w.jsx('label', {
                                            className: N.input__label,
                                            children: 'Zip/Postal Code'
                                          }),
                                          w.jsx('input', {
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
                  w.jsxs('div', {
                    className: N.invoice_radio_container,
                    children: [
                      w.jsxs('div', {
                        className: N.invoice_radio,
                        children: [
                          w.jsx('input', {
                            id: 'send_email',
                            name: 'send_email',
                            type: 'radio'
                          }),
                          w.jsx('label', {
                            htmlFor: 'send_email',
                            className: N.download_method,
                            children: 'Send Invoice by Email'
                          })
                        ]
                      }),
                      w.jsxs('div', {
                        className: N.invoice_radio,
                        children: [
                          w.jsx('input', {
                            id: 'download',
                            name: 'download',
                            type: 'radio'
                          }),
                          w.jsx('label', {
                            htmlFor: 'download',
                            className: N.download_method,
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
        w.jsx('button', {
          className: N.generate_invoice_btn,
          children: 'Generate Invoice'
        })
      ]
    })
  },
  q5 = () => {
    const [e, t] = P.useState(!1),
      [n, r] = P.useState('shipping'),
      i = (u) => {
        t(!0), r(u)
      },
      o = () => {
        t(!1), r(null)
      },
      a = [
        {
          id: '1',
          name: 'Shipping Address',
          icon: w.jsx(cC, {}),
          modalType: 'shipping'
        },
        {
          id: '2',
          name: 'Change Contact Information',
          icon: w.jsx(Jh, {}),
          modalType: 'contact_information'
        },
        {
          id: '2',
          name: 'Contact Customer Support',
          icon: w.jsx(Jh, {}),
          modalType: 'contact_customer_support'
        },
        {
          id: '3',
          name: 'Change Product Quantities',
          icon: w.jsx(dC, {}),
          modalType: 'quantities'
        },
        {
          id: '4',
          name: 'Change Product Variant',
          icon: w.jsx(fC, {}),
          modalType: 'change_product_variant'
        },
        {
          id: '5',
          name: 'Switch Product',
          icon: w.jsx(pC, {}),
          modalType: 'switch_product'
        },
        {
          id: '6',
          name: 'Upgrade Shipping Methods',
          icon: w.jsx(hC, {}),
          modalType: 'upgrade_shipping_method'
        },
        {
          id: '9',
          name: 'Edit Gift Message',
          icon: w.jsx(mC, {}),
          modalType: 'edit_gift_message'
        },
        {
          id: '10',
          name: 'Download Invoice',
          icon: w.jsx(em, {}),
          modalType: 'download_invoice'
        },
        {
          id: '10',
          name: 'Request For Order Cancel',
          icon: w.jsx(em, {}),
          modalType: 'request_order_cancel'
        }
      ],
      s = [
        {
          id: '1',
          name: 'The Collection Snowboard: Hydrogen',
          variant: 'Default Title',
          image:
            'https://cdn.shopify.com/s/files/1/0711/2173/1816/files/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1731517312',
          price: '700',
          quantity: '1'
        },
        {
          id: '2',
          name: 'The Collection Snowboard: Liquid',
          variant: 'Default Title',
          image:
            'https://cdn.shopify.com/s/files/1/0711/2173/1816/files/Main_b13ad453-477c-4ed1-9b43-81f3345adfd6.jpg?v=1731517313',
          price: '800',
          quantity: '1'
        },
        {
          id: '3',
          name: 'The Collection Snowboard: Oxygen',
          variant: 'Default Title',
          image:
            'https://cdn.shopify.com/s/files/1/0711/2173/1816/files/Main_b13ad453-477c-4ed1-9b43-81f3345adfd6.jpg?v=1731517313',
          price: '900',
          quantity: '1'
        },
        {
          id: '4',
          name: 'The Collection Snowboard: Hydrogen',
          variant: 'Default Title',
          image:
            'https://cdn.shopify.com/s/files/1/0711/2173/1816/files/Main_b13ad453-477c-4ed1-9b43-81f3345adfd6.jpg?v=1731517313',
          price: '1000',
          quantity: '1'
        },
        {
          id: '4',
          name: 'The Collection Snowboard: Hydrogen',
          variant: 'Default Title',
          image:
            'https://cdn.shopify.com/s/files/1/0711/2173/1816/files/Main_b13ad453-477c-4ed1-9b43-81f3345adfd6.jpg?v=1731517313',
          price: '1000',
          quantity: '1'
        },
        {
          id: '4',
          name: 'The Collection Snowboard: Hydrogen',
          variant: 'Default Title',
          image:
            'https://cdn.shopify.com/s/files/1/0711/2173/1816/files/Main_b13ad453-477c-4ed1-9b43-81f3345adfd6.jpg?v=1731517313',
          price: '1000',
          quantity: '1'
        },
        {
          id: '4',
          name: 'The Collection Snowboard: Hydrogen',
          variant: 'Default Title',
          image:
            'https://cdn.shopify.com/s/files/1/0711/2173/1816/files/Main_b13ad453-477c-4ed1-9b43-81f3345adfd6.jpg?v=1731517313',
          price: '1000',
          quantity: '1'
        }
      ],
      l = [
        {
          id: '1',
          name: 'The Collection Snowboard: Hydrogen',
          variant: 'Default title',
          price: '700',
          image:
            'https://1tqypc8cj87g8ena-71121731816.shopifypreview.com/cdn/shop/files/Main_589fc064-24a2-4236-9eaf-13b2bd35d21d.jpg?v=1731517312&width=823'
        },
        {
          id: '2',
          name: 'The Complete Snowboard',
          variant: 'Default title',
          price: '700',
          image:
            'https://1tqypc8cj87g8ena-71121731816.shopifypreview.com/cdn/shop/files/Main_589fc064-24a2-4236-9eaf-13b2bd35d21d.jpg?v=1731517312&width=823'
        },
        {
          id: '3',
          name: 'The Complete Snowboard',
          variant: 'Default title',
          price: '700',
          image:
            'https://1tqypc8cj87g8ena-71121731816.shopifypreview.com/cdn/shop/files/Main_589fc064-24a2-4236-9eaf-13b2bd35d21d.jpg?v=1731517312&width=823'
        },
        {
          id: '4',
          name: 'The Complete Snowboard',
          variant: 'Default title',
          price: '700',
          image:
            'https://1tqypc8cj87g8ena-71121731816.shopifypreview.com/cdn/shop/files/Main_589fc064-24a2-4236-9eaf-13b2bd35d21d.jpg?v=1731517312&width=823'
        },
        {
          id: '5',
          name: 'The Collection Snowboard: Hydrogen',
          variant: 'Default title',
          price: '700',
          image:
            'https://1tqypc8cj87g8ena-71121731816.shopifypreview.com/cdn/shop/files/Main_589fc064-24a2-4236-9eaf-13b2bd35d21d.jpg?v=1731517312&width=823'
        },
        {
          id: '6',
          name: 'The Complete Snowboard',
          variant: 'Default title',
          price: '700',
          image:
            'https://1tqypc8cj87g8ena-71121731816.shopifypreview.com/cdn/shop/files/Main_589fc064-24a2-4236-9eaf-13b2bd35d21d.jpg?v=1731517312&width=823'
        },
        {
          id: '7',
          name: 'The Complete Snowboard',
          variant: 'Default title',
          price: '700',
          image:
            'https://1tqypc8cj87g8ena-71121731816.shopifypreview.com/cdn/shop/files/Main_589fc064-24a2-4236-9eaf-13b2bd35d21d.jpg?v=1731517312&width=823'
        },
        {
          id: '8',
          name: 'The Collection Snowboard: Oxygen',
          variant: 'Default title',
          price: '700',
          image:
            'https://1tqypc8cj87g8ena-71121731816.shopifypreview.com/cdn/shop/files/Main_589fc064-24a2-4236-9eaf-13b2bd35d21d.jpg?v=1731517312&width=823'
        }
      ]
    return w.jsxs('div', {
      className: G.opt_order_edit_container,
      children: [
        w.jsx('div', { className: G.header, children: 'ORDER EDIT' }),
        w.jsx('div', {
          className: G.setting,
          children:
            a == null
              ? void 0
              : a.map((u) =>
                  w.jsxs(
                    'div',
                    {
                      className: G.settings_box,
                      onClick: () => i(u == null ? void 0 : u.modalType),
                      children: [
                        w.jsx('div', {
                          className: G.settings_icon,
                          children: u.icon
                        }),
                        w.jsx('p', {
                          className: G.settings_label,
                          children: u.name
                        })
                      ]
                    },
                    u.id
                  )
                )
        }),
        e &&
          w.jsx('div', {
            className: G.modal_main_container,
            children: w.jsx(A5, {
              editOrderOption: a,
              handleCloseModal: o,
              activeModal: n,
              setActiveModal: r
            })
          }),
        w.jsxs('div', {
          className: G.content,
          children: [
            w.jsxs('div', {
              className: G.orderSummary,
              children: [
                w.jsxs('div', {
                  children: [
                    w.jsx('h2', { children: 'Order summary' }),
                    w.jsx('div', {
                      className: G.orderItems,
                      children:
                        s == null
                          ? void 0
                          : s.map((u) =>
                              w.jsxs(
                                'div',
                                {
                                  className: G.orderItem,
                                  children: [
                                    w.jsx('img', {
                                      src: u.image,
                                      alt: 'The Collection Snowboard: Hydrogen'
                                    }),
                                    w.jsxs('div', {
                                      className: G.itemDetails,
                                      children: [
                                        w.jsxs('div', {
                                          children: [
                                            w.jsx('p', { children: u.name }),
                                            w.jsx('p', { children: u.variant })
                                          ]
                                        }),
                                        w.jsxs('span', {
                                          children: ['BDT ', u.price]
                                        })
                                      ]
                                    })
                                  ]
                                },
                                u.id
                              )
                            )
                    })
                  ]
                }),
                w.jsxs('div', {
                  children: [
                    w.jsxs('div', {
                      className: G.priceDetails,
                      children: [
                        w.jsxs('p', {
                          children: [
                            w.jsx('strong', { children: 'Subtotal' }),
                            w.jsx('span', { children: 'BDT 2,374.95' })
                          ]
                        }),
                        w.jsxs('p', {
                          children: [
                            w.jsx('strong', { children: 'Cart Discounts' }),
                            w.jsx('span', { children: 'None' })
                          ]
                        }),
                        w.jsxs('p', {
                          children: [
                            w.jsx('strong', {
                              children: 'Outstanding Payment'
                            }),
                            w.jsx('span', { children: 'None' })
                          ]
                        })
                      ]
                    }),
                    w.jsxs('div', {
                      className: G.shippingSection,
                      children: [
                        w.jsx('h3', { children: 'Shipping' }),
                        w.jsxs('div', {
                          className: G.shippingOption,
                          children: [
                            w.jsx('input', {
                              type: 'radio',
                              id: 'standard',
                              name: 'shipping',
                              defaultChecked: !0
                            }),
                            w.jsx('label', {
                              htmlFor: 'standard',
                              children: 'Standard'
                            }),
                            w.jsx('span', { children: 'BDT 0.00' })
                          ]
                        }),
                        w.jsx('button', {
                          className: G.saveButton,
                          children: 'Save Shipping Method'
                        })
                      ]
                    }),
                    w.jsxs('div', {
                      className: G.taxSection,
                      children: [
                        w.jsxs('p', {
                          children: [
                            w.jsx('strong', { children: 'Applied Taxes' }),
                            w.jsx('span', { children: 'BDT 356.24' })
                          ]
                        }),
                        w.jsxs('p', {
                          children: [
                            w.jsx('strong', { children: 'VAT' }),
                            w.jsx('span', { children: 'BDT 356.24' })
                          ]
                        })
                      ]
                    }),
                    w.jsxs('div', {
                      className: G.paymentDetails,
                      children: [
                        w.jsxs('p', {
                          children: [
                            w.jsx('strong', { children: 'Paid' }),
                            w.jsx('span', { children: 'BDT 2,731.19' })
                          ]
                        }),
                        w.jsxs('p', {
                          children: [
                            w.jsx('strong', { children: 'Net Payments' }),
                            w.jsx('span', { children: 'BDT 2,731.19' })
                          ]
                        })
                      ]
                    }),
                    w.jsx('button', {
                      className: G.saveButton,
                      children: 'Pay Now'
                    })
                  ]
                })
              ]
            }),
            w.jsxs('div', {
              className: G.orderDetails,
              children: [
                w.jsx('h2', { children: 'Order Details' }),
                w.jsxs('div', {
                  className: `${G.contactInformation} ${G.orderDetailsItem}`,
                  children: [
                    w.jsx('p', {
                      className: G.orderDetailsItemTitle,
                      children: 'Contact information'
                    }),
                    w.jsxs('div', {
                      className: G.information,
                      children: [
                        w.jsx('p', { children: 'Ahmed Faysal' }),
                        w.jsx('p', { children: '+09748347889' }),
                        w.jsx('p', { children: 'ahmedfaysal01797@gmail.com' })
                      ]
                    })
                  ]
                }),
                w.jsxs('div', {
                  className: `${G.shippingAddress} ${G.orderDetailsItem}`,
                  children: [
                    w.jsx('p', {
                      className: G.orderDetailsItemTitle,
                      children: 'Shipping address'
                    }),
                    w.jsxs('div', {
                      className: G.information,
                      children: [
                        w.jsx('p', { children: 'Ahmed Faysal' }),
                        w.jsx('p', { children: 'Mirpur-1' }),
                        w.jsx('p', { children: ' Dhaka, 1216' }),
                        w.jsx('p', { children: 'BD' })
                      ]
                    })
                  ]
                }),
                w.jsxs('div', {
                  className: `${G.billingAddress} ${G.orderDetailsItem}`,
                  children: [
                    w.jsx('p', {
                      className: G.orderDetailsItemTitle,
                      children: 'Billing address'
                    }),
                    w.jsxs('div', {
                      className: G.information,
                      children: [
                        w.jsx('p', { children: 'Ahmed Faysal' }),
                        w.jsx('p', { children: ' Mirpur-1' }),
                        w.jsx('p', { children: ' Dhaka, 1216' }),
                        w.jsx('p', { children: 'BD' })
                      ]
                    })
                  ]
                }),
                w.jsxs('div', {
                  className: `${G.shippingMethodInformation} ${G.orderDetailsItem}`,
                  children: [
                    w.jsx('p', {
                      className: G.orderDetailsItemTitle,
                      children: 'Shipping method'
                    }),
                    w.jsx('div', {
                      className: G.information,
                      children: w.jsx('p', {
                        children: 'No shipping required.'
                      })
                    })
                  ]
                }),
                w.jsxs('div', {
                  className: `${G.discountCodeInformation} ${G.orderDetailsItem}`,
                  children: [
                    w.jsx('p', {
                      className: G.orderDetailsItemTitle,
                      children: 'Discount Codes'
                    }),
                    w.jsx('div', {
                      className: G.information,
                      children: w.jsx('p', {
                        children: 'No discount codes applied.'
                      })
                    })
                  ]
                }),
                w.jsx('div', {
                  className: `${G.deadline} ${G.orderDetailsItem}`,
                  children: w.jsx('p', {
                    children: 'You can edit your order until Wed, Jan 15, 11 AM'
                  })
                })
              ]
            })
          ]
        }),
        w.jsxs('div', {
          className: G.productSection,
          children: [
            w.jsx('div', {
              className: G.productLabel,
              children: w.jsx('h3', { children: 'YOU MAY LIKE' })
            }),
            w.jsx('div', {
              className: `${G.suggestedProductContainer} card-slider`,
              children: w.jsx(v1, {
                slidesPerView: 6,
                spaceBetween: 30,
                autoplay: { delay: 2500, disableOnInteraction: !1 },
                loop: !0,
                mousewheel: !0,
                modules: [U_],
                className: 'mySwiper',
                children:
                  l == null
                    ? void 0
                    : l.map((u) =>
                        w.jsx(
                          g1,
                          {
                            children: w.jsx('div', {
                              className: G.productCard,
                              children: w.jsxs('a', {
                                href: '#',
                                className: G.mainLink,
                                children: [
                                  w.jsx('div', {
                                    className: G.productImage,
                                    children: w.jsx('img', {
                                      src: u.image,
                                      alt: `${u.name} - ${u.variant}`
                                    })
                                  }),
                                  w.jsxs('div', {
                                    className: G.productContent,
                                    children: [
                                      w.jsx('h4', {
                                        className: G.title,
                                        children: u.name
                                      }),
                                      w.jsx('p', {
                                        className: G.description,
                                        children: u.variant
                                      }),
                                      w.jsxs('p', {
                                        className: G.price,
                                        children: ['BDT ', u.price]
                                      }),
                                      w.jsx('div', {
                                        className: G.addToCartBtn,
                                        children: w.jsx('button', {
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
  }
function G5() {
  const e = X0((r) => r.orderEdit.page),
    n = (() => {
      switch (e) {
        case 'Home':
          return w.jsx(q5, {})
        case 'EditOrder':
          return w.jsx(Ox, {})
        default:
          return null
      }
    })()
  return w.jsxs('section', {
    className: 'order-edit-container',
    children: [n, w.jsx(mx, {})]
  })
}
function je(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `
}
var Q5 = (typeof Symbol == 'function' && Symbol.observable) || '@@observable',
  ov = Q5,
  tc = () => Math.random().toString(36).substring(7).split('').join('.'),
  K5 = {
    INIT: `@@redux/INIT${tc()}`,
    REPLACE: `@@redux/REPLACE${tc()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${tc()}`
  },
  ul = K5
function en(e) {
  if (typeof e != 'object' || e === null) return !1
  let t = e
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t)
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null
}
function Dy(e, t, n) {
  if (typeof e != 'function') throw new Error(je(2))
  if (
    (typeof t == 'function' && typeof n == 'function') ||
    (typeof n == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(je(0))
  if (
    (typeof t == 'function' && typeof n > 'u' && ((n = t), (t = void 0)),
    typeof n < 'u')
  ) {
    if (typeof n != 'function') throw new Error(je(1))
    return n(Dy)(e, t)
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
      o.forEach((b, m) => {
        a.set(m, b)
      }))
  }
  function c() {
    if (l) throw new Error(je(3))
    return i
  }
  function f(b) {
    if (typeof b != 'function') throw new Error(je(4))
    if (l) throw new Error(je(5))
    let m = !0
    u()
    const p = s++
    return (
      a.set(p, b),
      function () {
        if (m) {
          if (l) throw new Error(je(6))
          ;(m = !1), u(), a.delete(p), (o = null)
        }
      }
    )
  }
  function d(b) {
    if (!en(b)) throw new Error(je(7))
    if (typeof b.type > 'u') throw new Error(je(8))
    if (typeof b.type != 'string') throw new Error(je(17))
    if (l) throw new Error(je(9))
    try {
      ;(l = !0), (i = r(i, b))
    } finally {
      l = !1
    }
    return (
      (o = a).forEach((p) => {
        p()
      }),
      b
    )
  }
  function v(b) {
    if (typeof b != 'function') throw new Error(je(10))
    ;(r = b), d({ type: ul.REPLACE })
  }
  function g() {
    const b = f
    return {
      subscribe(m) {
        if (typeof m != 'object' || m === null) throw new Error(je(11))
        function p() {
          const S = m
          S.next && S.next(c())
        }
        return p(), { unsubscribe: b(p) }
      },
      [ov]() {
        return this
      }
    }
  }
  return (
    d({ type: ul.INIT }),
    { dispatch: d, subscribe: f, getState: c, replaceReducer: v, [ov]: g }
  )
}
function X5(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t]
    if (typeof n(void 0, { type: ul.INIT }) > 'u') throw new Error(je(12))
    if (typeof n(void 0, { type: ul.PROBE_UNKNOWN_ACTION() }) > 'u')
      throw new Error(je(13))
  })
}
function zy(e) {
  const t = Object.keys(e),
    n = {}
  for (let o = 0; o < t.length; o++) {
    const a = t[o]
    typeof e[a] == 'function' && (n[a] = e[a])
  }
  const r = Object.keys(n)
  let i
  try {
    X5(n)
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
        v = a[f],
        g = d(v, s)
      if (typeof g > 'u') throw (s && s.type, new Error(je(14)))
      ;(u[f] = g), (l = l || g !== v)
    }
    return (l = l || r.length !== Object.keys(a).length), l ? u : a
  }
}
function cl(...e) {
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
function Y5(...e) {
  return (t) => (n, r) => {
    const i = t(n, r)
    let o = () => {
      throw new Error(je(15))
    }
    const a = { getState: i.getState, dispatch: (l, ...u) => o(l, ...u) },
      s = e.map((l) => l(a))
    return (o = cl(...s)(i.dispatch)), { ...i, dispatch: o }
  }
}
function Vy(e) {
  return en(e) && 'type' in e && typeof e.type == 'string'
}
var Ep = Symbol.for('immer-nothing'),
  Co = Symbol.for('immer-draftable'),
  Je = Symbol.for('immer-state')
function Oe(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  )
}
var kr = Object.getPrototypeOf
function tn(e) {
  return !!e && !!e[Je]
}
function Wt(e) {
  var t
  return e
    ? By(e) ||
        Array.isArray(e) ||
        !!e[Co] ||
        !!((t = e.constructor) != null && t[Co]) ||
        ga(e) ||
        ya(e)
    : !1
}
var Z5 = Object.prototype.constructor.toString()
function By(e) {
  if (!e || typeof e != 'object') return !1
  const t = kr(e)
  if (t === null) return !0
  const n = Object.hasOwnProperty.call(t, 'constructor') && t.constructor
  return n === Object
    ? !0
    : typeof n == 'function' && Function.toString.call(n) === Z5
}
function J5(e) {
  return tn(e) || Oe(15, e), e[Je].base_
}
function Jo(e, t) {
  Pr(e) === 0
    ? Reflect.ownKeys(e).forEach((n) => {
        t(n, e[n], e)
      })
    : e.forEach((n, r) => t(r, n, e))
}
function Pr(e) {
  const t = e[Je]
  return t ? t.type_ : Array.isArray(e) ? 1 : ga(e) ? 2 : ya(e) ? 3 : 0
}
function ea(e, t) {
  return Pr(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
}
function nc(e, t) {
  return Pr(e) === 2 ? e.get(t) : e[t]
}
function Hy(e, t, n) {
  const r = Pr(e)
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n)
}
function e3(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t
}
function ga(e) {
  return e instanceof Map
}
function ya(e) {
  return e instanceof Set
}
function ar(e) {
  return e.copy_ || e.base_
}
function ef(e, t) {
  if (ga(e)) return new Map(e)
  if (ya(e)) return new Set(e)
  if (Array.isArray(e)) return Array.prototype.slice.call(e)
  const n = By(e)
  if (t === !0 || (t === 'class_only' && !n)) {
    const r = Object.getOwnPropertyDescriptors(e)
    delete r[Je]
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
    return Object.create(kr(e), r)
  } else {
    const r = kr(e)
    if (r !== null && n) return { ...e }
    const i = Object.create(r)
    return Object.assign(i, e)
  }
}
function Tp(e, t = !1) {
  return (
    Gl(e) ||
      tn(e) ||
      !Wt(e) ||
      (Pr(e) > 1 && (e.set = e.add = e.clear = e.delete = t3),
      Object.freeze(e),
      t && Object.entries(e).forEach(([n, r]) => Tp(r, !0))),
    e
  )
}
function t3() {
  Oe(2)
}
function Gl(e) {
  return Object.isFrozen(e)
}
var tf = {}
function Mr(e) {
  const t = tf[e]
  return t || Oe(0, e), t
}
function n3(e, t) {
  tf[e] || (tf[e] = t)
}
var ta
function Wy() {
  return ta
}
function r3(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  }
}
function av(e, t) {
  t &&
    (Mr('Patches'),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t))
}
function nf(e) {
  rf(e), e.drafts_.forEach(i3), (e.drafts_ = null)
}
function rf(e) {
  e === ta && (ta = e.parent_)
}
function sv(e) {
  return (ta = r3(ta, e))
}
function i3(e) {
  const t = e[Je]
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0)
}
function lv(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length
  const n = t.drafts_[0]
  return (
    e !== void 0 && e !== n
      ? (n[Je].modified_ && (nf(t), Oe(4)),
        Wt(e) && ((e = dl(t, e)), t.parent_ || fl(t, e)),
        t.patches_ &&
          Mr('Patches').generateReplacementPatches_(
            n[Je].base_,
            e,
            t.patches_,
            t.inversePatches_
          ))
      : (e = dl(t, n, [])),
    nf(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== Ep ? e : void 0
  )
}
function dl(e, t, n) {
  if (Gl(t)) return t
  const r = t[Je]
  if (!r) return Jo(t, (i, o) => uv(e, r, t, i, o, n)), t
  if (r.scope_ !== e) return t
  if (!r.modified_) return fl(e, r.base_, !0), r.base_
  if (!r.finalized_) {
    ;(r.finalized_ = !0), r.scope_.unfinalizedDrafts_--
    const i = r.copy_
    let o = i,
      a = !1
    r.type_ === 3 && ((o = new Set(i)), i.clear(), (a = !0)),
      Jo(o, (s, l) => uv(e, r, i, s, l, n, a)),
      fl(e, i, !1),
      n &&
        e.patches_ &&
        Mr('Patches').generatePatches_(r, n, e.patches_, e.inversePatches_)
  }
  return r.copy_
}
function uv(e, t, n, r, i, o, a) {
  if (tn(i)) {
    const s =
        o && t && t.type_ !== 3 && !ea(t.assigned_, r) ? o.concat(r) : void 0,
      l = dl(e, i, s)
    if ((Hy(n, r, l), tn(l))) e.canAutoFreeze_ = !1
    else return
  } else a && n.add(i)
  if (Wt(i) && !Gl(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return
    dl(e, i),
      (!t || !t.scope_.parent_) &&
        typeof r != 'symbol' &&
        Object.prototype.propertyIsEnumerable.call(n, r) &&
        fl(e, i)
  }
}
function fl(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Tp(t, n)
}
function o3(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : Wy(),
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
    o = kp
  n && ((i = [r]), (o = na))
  const { revoke: a, proxy: s } = Proxy.revocable(i, o)
  return (r.draft_ = s), (r.revoke_ = a), s
}
var kp = {
    get(e, t) {
      if (t === Je) return e
      const n = ar(e)
      if (!ea(n, t)) return a3(e, n, t)
      const r = n[t]
      return e.finalized_ || !Wt(r)
        ? r
        : r === rc(e.base_, t)
        ? (ic(e), (e.copy_[t] = af(r, e)))
        : r
    },
    has(e, t) {
      return t in ar(e)
    },
    ownKeys(e) {
      return Reflect.ownKeys(ar(e))
    },
    set(e, t, n) {
      const r = Uy(ar(e), t)
      if (r != null && r.set) return r.set.call(e.draft_, n), !0
      if (!e.modified_) {
        const i = rc(ar(e), t),
          o = i == null ? void 0 : i[Je]
        if (o && o.base_ === n)
          return (e.copy_[t] = n), (e.assigned_[t] = !1), !0
        if (e3(n, i) && (n !== void 0 || ea(e.base_, t))) return !0
        ic(e), of(e)
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
        rc(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), ic(e), of(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      )
    },
    getOwnPropertyDescriptor(e, t) {
      const n = ar(e),
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
      return kr(e.base_)
    },
    setPrototypeOf() {
      Oe(12)
    }
  },
  na = {}
Jo(kp, (e, t) => {
  na[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments)
  }
})
na.deleteProperty = function (e, t) {
  return na.set.call(this, e, t, void 0)
}
na.set = function (e, t, n) {
  return kp.set.call(this, e[0], t, n, e[0])
}
function rc(e, t) {
  const n = e[Je]
  return (n ? ar(n) : e)[t]
}
function a3(e, t, n) {
  var i
  const r = Uy(t, n)
  return r
    ? 'value' in r
      ? r.value
      : (i = r.get) == null
      ? void 0
      : i.call(e.draft_)
    : void 0
}
function Uy(e, t) {
  if (!(t in e)) return
  let n = kr(e)
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t)
    if (r) return r
    n = kr(n)
  }
}
function of(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && of(e.parent_))
}
function ic(e) {
  e.copy_ || (e.copy_ = ef(e.base_, e.scope_.immer_.useStrictShallowCopy_))
}
var s3 = class {
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
        if (Wt(t)) {
          const o = sv(this),
            a = af(t, void 0)
          let s = !0
          try {
            ;(i = n(a)), (s = !1)
          } finally {
            s ? nf(o) : rf(o)
          }
          return av(o, r), lv(i, o)
        } else if (!t || typeof t != 'object') {
          if (
            ((i = n(t)),
            i === void 0 && (i = t),
            i === Ep && (i = void 0),
            this.autoFreeze_ && Tp(i, !0),
            r)
          ) {
            const o = [],
              a = []
            Mr('Patches').generateReplacementPatches_(t, i, o, a), r(o, a)
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
    Wt(e) || Oe(8), tn(e) && (e = l3(e))
    const t = sv(this),
      n = af(e, void 0)
    return (n[Je].isManual_ = !0), rf(t), n
  }
  finishDraft(e, t) {
    const n = e && e[Je]
    ;(!n || !n.isManual_) && Oe(9)
    const { scope_: r } = n
    return av(r, t), lv(void 0, r)
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
    const r = Mr('Patches').applyPatches_
    return tn(e) ? r(e, t) : this.produce(e, (i) => r(i, t))
  }
}
function af(e, t) {
  const n = ga(e)
    ? Mr('MapSet').proxyMap_(e, t)
    : ya(e)
    ? Mr('MapSet').proxySet_(e, t)
    : o3(e, t)
  return (t ? t.scope_ : Wy()).drafts_.push(n), n
}
function l3(e) {
  return tn(e) || Oe(10, e), qy(e)
}
function qy(e) {
  if (!Wt(e) || Gl(e)) return e
  const t = e[Je]
  let n
  if (t) {
    if (!t.modified_) return t.base_
    ;(t.finalized_ = !0), (n = ef(e, t.scope_.immer_.useStrictShallowCopy_))
  } else n = ef(e, !0)
  return (
    Jo(n, (r, i) => {
      Hy(n, r, qy(i))
    }),
    t && (t.finalized_ = !1),
    n
  )
}
function u3() {
  const t = 'replace',
    n = 'add',
    r = 'remove'
  function i(d, v, g, y) {
    switch (d.type_) {
      case 0:
      case 2:
        return a(d, v, g, y)
      case 1:
        return o(d, v, g, y)
      case 3:
        return s(d, v, g, y)
    }
  }
  function o(d, v, g, y) {
    let { base_: b, assigned_: m } = d,
      p = d.copy_
    p.length < b.length && (([b, p] = [p, b]), ([g, y] = [y, g]))
    for (let h = 0; h < b.length; h++)
      if (m[h] && p[h] !== b[h]) {
        const S = v.concat([h])
        g.push({ op: t, path: S, value: f(p[h]) }),
          y.push({ op: t, path: S, value: f(b[h]) })
      }
    for (let h = b.length; h < p.length; h++) {
      const S = v.concat([h])
      g.push({ op: n, path: S, value: f(p[h]) })
    }
    for (let h = p.length - 1; b.length <= h; --h) {
      const S = v.concat([h])
      y.push({ op: r, path: S })
    }
  }
  function a(d, v, g, y) {
    const { base_: b, copy_: m } = d
    Jo(d.assigned_, (p, h) => {
      const S = nc(b, p),
        x = nc(m, p),
        _ = h ? (ea(b, p) ? t : n) : r
      if (S === x && _ === t) return
      const C = v.concat(p)
      g.push(_ === r ? { op: _, path: C } : { op: _, path: C, value: x }),
        y.push(
          _ === n
            ? { op: r, path: C }
            : _ === r
            ? { op: n, path: C, value: f(S) }
            : { op: t, path: C, value: f(S) }
        )
    })
  }
  function s(d, v, g, y) {
    let { base_: b, copy_: m } = d,
      p = 0
    b.forEach((h) => {
      if (!m.has(h)) {
        const S = v.concat([p])
        g.push({ op: r, path: S, value: h }),
          y.unshift({ op: n, path: S, value: h })
      }
      p++
    }),
      (p = 0),
      m.forEach((h) => {
        if (!b.has(h)) {
          const S = v.concat([p])
          g.push({ op: n, path: S, value: h }),
            y.unshift({ op: r, path: S, value: h })
        }
        p++
      })
  }
  function l(d, v, g, y) {
    g.push({ op: t, path: [], value: v === Ep ? void 0 : v }),
      y.push({ op: t, path: [], value: d })
  }
  function u(d, v) {
    return (
      v.forEach((g) => {
        const { path: y, op: b } = g
        let m = d
        for (let x = 0; x < y.length - 1; x++) {
          const _ = Pr(m)
          let C = y[x]
          typeof C != 'string' && typeof C != 'number' && (C = '' + C),
            (_ === 0 || _ === 1) &&
              (C === '__proto__' || C === 'constructor') &&
              Oe(19),
            typeof m == 'function' && C === 'prototype' && Oe(19),
            (m = nc(m, C)),
            typeof m != 'object' && Oe(18, y.join('/'))
        }
        const p = Pr(m),
          h = c(g.value),
          S = y[y.length - 1]
        switch (b) {
          case t:
            switch (p) {
              case 2:
                return m.set(S, h)
              case 3:
                Oe(16)
              default:
                return (m[S] = h)
            }
          case n:
            switch (p) {
              case 1:
                return S === '-' ? m.push(h) : m.splice(S, 0, h)
              case 2:
                return m.set(S, h)
              case 3:
                return m.add(h)
              default:
                return (m[S] = h)
            }
          case r:
            switch (p) {
              case 1:
                return m.splice(S, 1)
              case 2:
                return m.delete(S)
              case 3:
                return m.delete(g.value)
              default:
                return delete m[S]
            }
          default:
            Oe(17, b)
        }
      }),
      d
    )
  }
  function c(d) {
    if (!Wt(d)) return d
    if (Array.isArray(d)) return d.map(c)
    if (ga(d))
      return new Map(Array.from(d.entries()).map(([g, y]) => [g, c(y)]))
    if (ya(d)) return new Set(Array.from(d).map(c))
    const v = Object.create(kr(d))
    for (const g in d) v[g] = c(d[g])
    return ea(d, Co) && (v[Co] = d[Co]), v
  }
  function f(d) {
    return tn(d) ? c(d) : d
  }
  n3('Patches', {
    applyPatches_: u,
    generatePatches_: i,
    generateReplacementPatches_: l
  })
}
var ft = new s3(),
  wa = ft.produce,
  Gy = ft.produceWithPatches.bind(ft)
ft.setAutoFreeze.bind(ft)
ft.setUseStrictShallowCopy.bind(ft)
var cv = ft.applyPatches.bind(ft)
ft.createDraft.bind(ft)
ft.finishDraft.bind(ft)
function c3(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != 'function') throw new TypeError(t)
}
function d3(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != 'object') throw new TypeError(t)
}
function f3(
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
var dv = (e) => (Array.isArray(e) ? e : [e])
function p3(e) {
  const t = Array.isArray(e[0]) ? e[0] : e
  return (
    f3(
      t,
      'createSelector expects all input-selectors to be functions, but received the following types: '
    ),
    t
  )
}
function h3(e, t) {
  const n = [],
    { length: r } = e
  for (let i = 0; i < r; i++) n.push(e[i].apply(null, t))
  return n
}
var m3 = class {
    constructor(e) {
      this.value = e
    }
    deref() {
      return this.value
    }
  },
  v3 = typeof WeakRef < 'u' ? WeakRef : m3,
  g3 = 0,
  fv = 1
function ts() {
  return { s: g3, v: void 0, o: null, p: null }
}
function pl(e, t = {}) {
  let n = ts()
  const { resultEqualityCheck: r } = t
  let i,
    o = 0
  function a() {
    var f
    let s = n
    const { length: l } = arguments
    for (let d = 0, v = l; d < v; d++) {
      const g = arguments[d]
      if (typeof g == 'function' || (typeof g == 'object' && g !== null)) {
        let y = s.o
        y === null && (s.o = y = new WeakMap())
        const b = y.get(g)
        b === void 0 ? ((s = ts()), y.set(g, s)) : (s = b)
      } else {
        let y = s.p
        y === null && (s.p = y = new Map())
        const b = y.get(g)
        b === void 0 ? ((s = ts()), y.set(g, s)) : (s = b)
      }
    }
    const u = s
    let c
    if (s.s === fv) c = s.v
    else if (((c = e.apply(null, arguments)), o++, r)) {
      const d =
        ((f = i == null ? void 0 : i.deref) == null ? void 0 : f.call(i)) ?? i
      d != null && r(d, c) && ((c = d), o !== 0 && o--),
        (i =
          (typeof c == 'object' && c !== null) || typeof c == 'function'
            ? new v3(c)
            : c)
    }
    return (u.s = fv), (u.v = c), c
  }
  return (
    (a.clearCache = () => {
      ;(n = ts()), a.resetResultsCount()
    }),
    (a.resultsCount = () => o),
    (a.resetResultsCount = () => {
      o = 0
    }),
    a
  )
}
function y3(e, ...t) {
  const n = typeof e == 'function' ? { memoize: e, memoizeOptions: t } : e,
    r = (...i) => {
      let o = 0,
        a = 0,
        s,
        l = {},
        u = i.pop()
      typeof u == 'object' && ((l = u), (u = i.pop())),
        c3(
          u,
          `createSelector expects an output function after the inputs, but received: [${typeof u}]`
        )
      const c = { ...n, ...l },
        {
          memoize: f,
          memoizeOptions: d = [],
          argsMemoize: v = pl,
          argsMemoizeOptions: g = [],
          devModeChecks: y = {}
        } = c,
        b = dv(d),
        m = dv(g),
        p = p3(i),
        h = f(function () {
          return o++, u.apply(null, arguments)
        }, ...b),
        S = v(function () {
          a++
          const _ = h3(p, arguments)
          return (s = h.apply(null, _)), s
        }, ...m)
      return Object.assign(S, {
        resultFunc: u,
        memoizedResultFunc: h,
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
        argsMemoize: v
      })
    }
  return Object.assign(r, { withTypes: () => r }), r
}
var Pp = y3(pl),
  w3 = Object.assign(
    (e, t = Pp) => {
      d3(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
      )
      const n = Object.keys(e),
        r = n.map((o) => e[o])
      return t(r, (...o) => o.reduce((a, s, l) => ((a[n[l]] = s), a), {}))
    },
    { withTypes: () => w3 }
  )
function Qy(e) {
  return ({ dispatch: n, getState: r }) =>
    (i) =>
    (o) =>
      typeof o == 'function' ? o(n, r, e) : i(o)
}
var S3 = Qy(),
  b3 = Qy,
  x3 =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object'
              ? cl
              : cl.apply(null, arguments)
        },
  C3 = (e) => e && typeof e.match == 'function'
function Bt(e, t) {
  function n(...r) {
    if (t) {
      let i = t(...r)
      if (!i) throw new Error(Et(0))
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
    (n.match = (r) => Vy(r) && r.type === e),
    n
  )
}
var Ky = class lo extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, lo.prototype)
  }
  static get [Symbol.species]() {
    return lo
  }
  concat(...t) {
    return super.concat.apply(this, t)
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new lo(...t[0].concat(this))
      : new lo(...t.concat(this))
  }
}
function pv(e) {
  return Wt(e) ? wa(e, () => {}) : e
}
function hv(e, t, n) {
  if (e.has(t)) {
    let i = e.get(t)
    return n.update && ((i = n.update(i, t, e)), e.set(t, i)), i
  }
  if (!n.insert) throw new Error(Et(10))
  const r = n.insert(t, e)
  return e.set(t, r), r
}
function _3(e) {
  return typeof e == 'boolean'
}
var E3 = () =>
    function (t) {
      const {
        thunk: n = !0,
        immutableCheck: r = !0,
        serializableCheck: i = !0,
        actionCreatorCheck: o = !0
      } = t ?? {}
      let a = new Ky()
      return n && (_3(n) ? a.push(S3) : a.push(b3(n.extraArgument))), a
    },
  pr = 'RTK_autoBatch',
  to = () => (e) => ({ payload: e, meta: { [pr]: !0 } }),
  Xy = (e) => (t) => {
    setTimeout(t, e)
  },
  T3 =
    typeof window < 'u' && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : Xy(10),
  k3 =
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
            ? T3
            : e.type === 'callback'
            ? e.queueNotification
            : Xy(e.timeout),
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
              (i = !((f = c == null ? void 0 : c.meta) != null && f[pr])),
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
  P3 = (e) =>
    function (n) {
      const { autoBatch: r = !0 } = n ?? {}
      let i = new Ky(e)
      return r && i.push(k3(typeof r == 'object' ? r : void 0)), i
    }
function M3(e) {
  const t = E3(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: i = !0,
      preloadedState: o = void 0,
      enhancers: a = void 0
    } = e || {}
  let s
  if (typeof n == 'function') s = n
  else if (en(n)) s = zy(n)
  else throw new Error(Et(1))
  let l
  typeof r == 'function' ? (l = r(t)) : (l = t())
  let u = cl
  i && (u = x3({ trace: !1, ...(typeof i == 'object' && i) }))
  const c = Y5(...l),
    f = P3(c)
  let d = typeof a == 'function' ? a(f) : f()
  const v = u(...d)
  return Dy(s, o, v)
}
function Yy(e) {
  const t = {},
    n = []
  let r
  const i = {
    addCase(o, a) {
      const s = typeof o == 'string' ? o : o.type
      if (!s) throw new Error(Et(28))
      if (s in t) throw new Error(Et(29))
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
function j3(e) {
  return typeof e == 'function'
}
function N3(e, t) {
  let [n, r, i] = Yy(t),
    o
  if (j3(e)) o = () => pv(e())
  else {
    const s = pv(e)
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
          if (tn(c)) {
            const v = f(c, l)
            return v === void 0 ? c : v
          } else {
            if (Wt(c)) return wa(c, (d) => f(d, l))
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
var Zy = (e, t) => (C3(e) ? e.match(t) : e(t))
function _n(...e) {
  return (t) => e.some((n) => Zy(n, t))
}
function _o(...e) {
  return (t) => e.every((n) => Zy(n, t))
}
function Ql(e, t) {
  if (!e || !e.meta) return !1
  const n = typeof e.meta.requestId == 'string',
    r = t.indexOf(e.meta.requestStatus) > -1
  return n && r
}
function Sa(e) {
  return (
    typeof e[0] == 'function' &&
    'pending' in e[0] &&
    'fulfilled' in e[0] &&
    'rejected' in e[0]
  )
}
function Mp(...e) {
  return e.length === 0
    ? (t) => Ql(t, ['pending'])
    : Sa(e)
    ? _n(...e.map((t) => t.pending))
    : Mp()(e[0])
}
function Li(...e) {
  return e.length === 0
    ? (t) => Ql(t, ['rejected'])
    : Sa(e)
    ? _n(...e.map((t) => t.rejected))
    : Li()(e[0])
}
function Kl(...e) {
  const t = (n) => n && n.meta && n.meta.rejectedWithValue
  return e.length === 0 ? _o(Li(...e), t) : Sa(e) ? _o(Li(...e), t) : Kl()(e[0])
}
function Jn(...e) {
  return e.length === 0
    ? (t) => Ql(t, ['fulfilled'])
    : Sa(e)
    ? _n(...e.map((t) => t.fulfilled))
    : Jn()(e[0])
}
function sf(...e) {
  return e.length === 0
    ? (t) => Ql(t, ['pending', 'fulfilled', 'rejected'])
    : Sa(e)
    ? _n(...e.flatMap((t) => [t.pending, t.rejected, t.fulfilled]))
    : sf()(e[0])
}
var O3 = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW',
  jp = (e = 21) => {
    let t = '',
      n = e
    for (; n--; ) t += O3[(Math.random() * 64) | 0]
    return t
  },
  L3 = ['name', 'message', 'stack', 'code'],
  oc = class {
    constructor(e, t) {
      tu(this, '_type')
      ;(this.payload = e), (this.meta = t)
    }
  },
  mv = class {
    constructor(e, t) {
      tu(this, '_type')
      ;(this.payload = e), (this.meta = t)
    }
  },
  R3 = (e) => {
    if (typeof e == 'object' && e !== null) {
      const t = {}
      for (const n of L3) typeof e[n] == 'string' && (t[n] = e[n])
      return t
    }
    return { message: String(e) }
  },
  vv = (() => {
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
          error: ((r && r.serializeError) || R3)(l || 'Rejected'),
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
          const d = r != null && r.idGenerator ? r.idGenerator(l) : jp(),
            v = new AbortController()
          let g, y
          function b(p) {
            ;(y = p), v.abort()
          }
          const m = (async function () {
            var S, x
            let p
            try {
              let _ =
                (S = r == null ? void 0 : r.condition) == null
                  ? void 0
                  : S.call(r, l, { getState: c, extra: f })
              if ((A3(_) && (_ = await _), _ === !1 || v.signal.aborted))
                throw {
                  name: 'ConditionError',
                  message: 'Aborted due to condition callback returning false.'
                }
              const C = new Promise((E, T) => {
                ;(g = () => {
                  T({ name: 'AbortError', message: y || 'Aborted' })
                }),
                  v.signal.addEventListener('abort', g)
              })
              u(
                o(
                  d,
                  l,
                  (x = r == null ? void 0 : r.getPendingMeta) == null
                    ? void 0
                    : x.call(
                        r,
                        { requestId: d, arg: l },
                        { getState: c, extra: f }
                      )
                )
              ),
                (p = await Promise.race([
                  C,
                  Promise.resolve(
                    n(l, {
                      dispatch: u,
                      getState: c,
                      extra: f,
                      requestId: d,
                      signal: v.signal,
                      abort: b,
                      rejectWithValue: (E, T) => new oc(E, T),
                      fulfillWithValue: (E, T) => new mv(E, T)
                    })
                  ).then((E) => {
                    if (E instanceof oc) throw E
                    return E instanceof mv
                      ? i(E.payload, d, l, E.meta)
                      : i(E, d, l)
                  })
                ]))
            } catch (_) {
              p =
                _ instanceof oc ? a(null, d, l, _.payload, _.meta) : a(_, d, l)
            } finally {
              g && v.signal.removeEventListener('abort', g)
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
            abort: b,
            requestId: d,
            arg: l,
            unwrap() {
              return m.then(I3)
            }
          })
        }
      }
      return Object.assign(s, {
        pending: o,
        rejected: a,
        fulfilled: i,
        settled: _n(a, i),
        typePrefix: t
      })
    }
    return (e.withTypes = () => e), e
  })()
function I3(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload
  if (e.error) throw e.error
  return e.payload
}
function A3(e) {
  return e !== null && typeof e == 'object' && typeof e.then == 'function'
}
var F3 = Symbol.for('rtk-slice-createasyncthunk')
function $3(e, t) {
  return `${e}/${t}`
}
function D3({ creators: e } = {}) {
  var n
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[F3]
  return function (i) {
    const { name: o, reducerPath: a = o } = i
    if (!o) throw new Error(Et(11))
    typeof process < 'u'
    const s =
        (typeof i.reducers == 'function' ? i.reducers(V3()) : i.reducers) || {},
      l = Object.keys(s),
      u = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: []
      },
      c = {
        addCase(h, S) {
          const x = typeof h == 'string' ? h : h.type
          if (!x) throw new Error(Et(12))
          if (x in u.sliceCaseReducersByType) throw new Error(Et(13))
          return (u.sliceCaseReducersByType[x] = S), c
        },
        addMatcher(h, S) {
          return u.sliceMatchers.push({ matcher: h, reducer: S }), c
        },
        exposeAction(h, S) {
          return (u.actionCreators[h] = S), c
        },
        exposeCaseReducer(h, S) {
          return (u.sliceCaseReducersByName[h] = S), c
        }
      }
    l.forEach((h) => {
      const S = s[h],
        x = {
          reducerName: h,
          type: $3(o, h),
          createNotation: typeof i.reducers == 'function'
        }
      H3(S) ? U3(x, S, c, t) : B3(x, S, c)
    })
    function f() {
      const [h = {}, S = [], x = void 0] =
          typeof i.extraReducers == 'function'
            ? Yy(i.extraReducers)
            : [i.extraReducers],
        _ = { ...h, ...u.sliceCaseReducersByType }
      return N3(i.initialState, (C) => {
        for (let E in _) C.addCase(E, _[E])
        for (let E of u.sliceMatchers) C.addMatcher(E.matcher, E.reducer)
        for (let E of S) C.addMatcher(E.matcher, E.reducer)
        x && C.addDefaultCase(x)
      })
    }
    const d = (h) => h,
      v = new Map()
    let g
    function y(h, S) {
      return g || (g = f()), g(h, S)
    }
    function b() {
      return g || (g = f()), g.getInitialState()
    }
    function m(h, S = !1) {
      function x(C) {
        let E = C[h]
        return typeof E > 'u' && S && (E = b()), E
      }
      function _(C = d) {
        const E = hv(v, S, { insert: () => new WeakMap() })
        return hv(E, C, {
          insert: () => {
            const T = {}
            for (const [k, M] of Object.entries(i.selectors ?? {}))
              T[k] = z3(M, C, b, S)
            return T
          }
        })
      }
      return {
        reducerPath: h,
        getSelectors: _,
        get selectors() {
          return _(x)
        },
        selectSlice: x
      }
    }
    const p = {
      name: o,
      reducer: y,
      actions: u.actionCreators,
      caseReducers: u.sliceCaseReducersByName,
      getInitialState: b,
      ...m(a),
      injectInto(h, { reducerPath: S, ...x } = {}) {
        const _ = S ?? a
        return (
          h.inject({ reducerPath: _, reducer: y }, x), { ...p, ...m(_, !0) }
        )
      }
    }
    return p
  }
}
function z3(e, t, n, r) {
  function i(o, ...a) {
    let s = t(o)
    return typeof s > 'u' && r && (s = n()), e(s, ...a)
  }
  return (i.unwrapped = e), i
}
var On = D3()
function V3() {
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
function B3({ type: e, reducerName: t, createNotation: n }, r, i) {
  let o, a
  if ('reducer' in r) {
    if (n && !W3(r)) throw new Error(Et(17))
    ;(o = r.reducer), (a = r.prepare)
  } else o = r
  i.addCase(e, o)
    .exposeCaseReducer(t, o)
    .exposeAction(t, a ? Bt(e, a) : Bt(e))
}
function H3(e) {
  return e._reducerDefinitionType === 'asyncThunk'
}
function W3(e) {
  return e._reducerDefinitionType === 'reducerWithPrepare'
}
function U3({ type: e, reducerName: t }, n, r, i) {
  if (!i) throw new Error(Et(18))
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
      fulfilled: a || ns,
      pending: s || ns,
      rejected: l || ns,
      settled: u || ns
    })
}
function ns() {}
function Et(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `
}
var Jy = ((e) => (
  (e.uninitialized = 'uninitialized'),
  (e.pending = 'pending'),
  (e.fulfilled = 'fulfilled'),
  (e.rejected = 'rejected'),
  e
))(Jy || {})
function q3(e) {
  return {
    status: e,
    isUninitialized: e === 'uninitialized',
    isLoading: e === 'pending',
    isSuccess: e === 'fulfilled',
    isError: e === 'rejected'
  }
}
var gv = en
function ew(e, t) {
  if (e === t || !((gv(e) && gv(t)) || (Array.isArray(e) && Array.isArray(t))))
    return t
  const n = Object.keys(t),
    r = Object.keys(e)
  let i = n.length === r.length
  const o = Array.isArray(t) ? [] : {}
  for (const a of n) (o[a] = ew(e[a], t[a])), i && (i = e[a] === o[a])
  return i ? e : o
}
function Si(e) {
  let t = 0
  for (const n in e) t++
  return t
}
var yv = (e) => [].concat(...e)
function G3(e) {
  return new RegExp('(^|:)//').test(e)
}
function Q3() {
  return typeof document > 'u' ? !0 : document.visibilityState !== 'hidden'
}
function wv(e) {
  return e != null
}
function K3() {
  return typeof navigator > 'u' || navigator.onLine === void 0
    ? !0
    : navigator.onLine
}
var X3 = (e) => e.replace(/\/$/, ''),
  Y3 = (e) => e.replace(/^\//, '')
function Z3(e, t) {
  if (!e) return t
  if (!t) return e
  if (G3(t)) return t
  const n = e.endsWith('/') || !t.startsWith('?') ? '/' : ''
  return (e = X3(e)), (t = Y3(t)), `${e}${n}${t}`
}
var Sv = (...e) => fetch(...e),
  J3 = (e) => e.status >= 200 && e.status <= 299,
  eM = (e) => /ion\/(vnd\.api\+)?json/.test(e.get('content-type') || '')
function bv(e) {
  if (!en(e)) return e
  const t = { ...e }
  for (const [n, r] of Object.entries(t)) r === void 0 && delete t[n]
  return t
}
function tw({
  baseUrl: e,
  prepareHeaders: t = (f) => f,
  fetchFn: n = Sv,
  paramsSerializer: r,
  isJsonContentType: i = eM,
  jsonContentType: o = 'application/json',
  jsonReplacer: a,
  timeout: s,
  responseHandler: l,
  validateStatus: u,
  ...c
} = {}) {
  return (
    typeof fetch > 'u' &&
      n === Sv &&
      console.warn(
        'Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments.'
      ),
    async (d, v, g) => {
      const { getState: y, extra: b, endpoint: m, forced: p, type: h } = v
      let S,
        {
          url: x,
          headers: _ = new Headers(c.headers),
          params: C = void 0,
          responseHandler: E = l ?? 'json',
          validateStatus: T = u ?? J3,
          timeout: k = s,
          ...M
        } = typeof d == 'string' ? { url: d } : d,
        L,
        O = v.signal
      k &&
        ((L = new AbortController()),
        v.signal.addEventListener('abort', L.abort),
        (O = L.signal))
      let R = { ...c, signal: O, ...M }
      ;(_ = new Headers(bv(_))),
        (R.headers =
          (await t(_, {
            getState: y,
            arg: d,
            extra: b,
            endpoint: m,
            forced: p,
            type: h,
            extraOptions: g
          })) || _)
      const z = (q) =>
        typeof q == 'object' &&
        (en(q) || Array.isArray(q) || typeof q.toJSON == 'function')
      if (
        (!R.headers.has('content-type') &&
          z(R.body) &&
          R.headers.set('content-type', o),
        z(R.body) && i(R.headers) && (R.body = JSON.stringify(R.body, a)),
        C)
      ) {
        const q = ~x.indexOf('?') ? '&' : '?',
          J = r ? r(C) : new URLSearchParams(bv(C))
        x += q + J
      }
      x = Z3(e, x)
      const I = new Request(x, R)
      S = { request: new Request(x, R) }
      let j,
        F = !1,
        $ =
          L &&
          setTimeout(() => {
            ;(F = !0), L.abort()
          }, k)
      try {
        j = await n(I)
      } catch (q) {
        return {
          error: {
            status: F ? 'TIMEOUT_ERROR' : 'FETCH_ERROR',
            error: String(q)
          },
          meta: S
        }
      } finally {
        $ && clearTimeout($),
          L == null || L.signal.removeEventListener('abort', L.abort)
      }
      const V = j.clone()
      S.response = V
      let W,
        Q = ''
      try {
        let q
        if (
          (await Promise.all([
            f(j, E).then(
              (J) => (W = J),
              (J) => (q = J)
            ),
            V.text().then(
              (J) => (Q = J),
              () => {}
            )
          ]),
          q)
        )
          throw q
      } catch (q) {
        return {
          error: {
            status: 'PARSING_ERROR',
            originalStatus: j.status,
            data: Q,
            error: String(q)
          },
          meta: S
        }
      }
      return T(j, W)
        ? { data: W, meta: S }
        : { error: { status: j.status, data: W }, meta: S }
    }
  )
  async function f(d, v) {
    if (typeof v == 'function') return v(d)
    if (
      (v === 'content-type' && (v = i(d.headers) ? 'json' : 'text'),
      v === 'json')
    ) {
      const g = await d.text()
      return g.length ? JSON.parse(g) : null
    }
    return d.text()
  }
}
var xv = class {
    constructor(e, t = void 0) {
      ;(this.value = e), (this.meta = t)
    }
  },
  Np = Bt('__rtkq/focused'),
  nw = Bt('__rtkq/unfocused'),
  Op = Bt('__rtkq/online'),
  rw = Bt('__rtkq/offline')
function iw(e) {
  return e.type === 'query'
}
function tM(e) {
  return e.type === 'mutation'
}
function Lp(e, t, n, r, i, o) {
  return nM(e)
    ? e(t, n, r, i).map(lf).map(o)
    : Array.isArray(e)
    ? e.map(lf).map(o)
    : []
}
function nM(e) {
  return typeof e == 'function'
}
function lf(e) {
  return typeof e == 'string' ? { type: e } : e
}
function rM(e, t) {
  return e.catch(t)
}
var ra = Symbol('forceQueryFn'),
  uf = (e) => typeof e[ra] == 'function'
function iM({
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
    buildInitiateQuery: g,
    buildInitiateMutation: y,
    getRunningQueryThunk: c,
    getRunningMutationThunk: f,
    getRunningQueriesThunk: d,
    getRunningMutationsThunk: v
  }
  function c(b, m) {
    return (p) => {
      var x
      const h = i.endpointDefinitions[b],
        S = e({ queryArgs: m, endpointDefinition: h, endpointName: b })
      return (x = o.get(p)) == null ? void 0 : x[S]
    }
  }
  function f(b, m) {
    return (p) => {
      var h
      return (h = a.get(p)) == null ? void 0 : h[m]
    }
  }
  function d() {
    return (b) => Object.values(o.get(b) || {}).filter(wv)
  }
  function v() {
    return (b) => Object.values(a.get(b) || {}).filter(wv)
  }
  function g(b, m) {
    const p =
      (
        h,
        {
          subscribe: S = !0,
          forceRefetch: x,
          subscriptionOptions: _,
          [ra]: C,
          ...E
        } = {}
      ) =>
      (T, k) => {
        var W
        const M = e({ queryArgs: h, endpointDefinition: m, endpointName: b }),
          L = t({
            ...E,
            type: 'query',
            subscribe: S,
            forceRefetch: x,
            subscriptionOptions: _,
            endpointName: b,
            originalArgs: h,
            queryCacheKey: M,
            [ra]: C
          }),
          O = r.endpoints[b].select(h),
          R = T(L),
          z = O(k()),
          { requestId: I, abort: A } = R,
          j = z.requestId !== I,
          F = (W = o.get(T)) == null ? void 0 : W[M],
          $ = () => O(k()),
          V = Object.assign(
            C
              ? R.then($)
              : j && !F
              ? Promise.resolve(z)
              : Promise.all([F, R]).then($),
            {
              arg: h,
              requestId: I,
              subscriptionOptions: _,
              queryCacheKey: M,
              abort: A,
              async unwrap() {
                const Q = await V
                if (Q.isError) throw Q.error
                return Q.data
              },
              refetch: () => T(p(h, { subscribe: !1, forceRefetch: !0 })),
              unsubscribe() {
                S && T(s({ queryCacheKey: M, requestId: I }))
              },
              updateSubscriptionOptions(Q) {
                ;(V.subscriptionOptions = Q),
                  T(
                    u({
                      endpointName: b,
                      requestId: I,
                      queryCacheKey: M,
                      options: Q
                    })
                  )
              }
            }
          )
        if (!F && !j && !C) {
          const Q = o.get(T) || {}
          ;(Q[M] = V),
            o.set(T, Q),
            V.then(() => {
              delete Q[M], Si(Q) || o.delete(T)
            })
        }
        return V
      }
    return p
  }
  function y(b) {
    return (m, { track: p = !0, fixedCacheKey: h } = {}) =>
      (S, x) => {
        const _ = n({
            type: 'mutation',
            endpointName: b,
            originalArgs: m,
            track: p,
            fixedCacheKey: h
          }),
          C = S(_),
          { requestId: E, abort: T, unwrap: k } = C,
          M = rM(
            C.unwrap().then((z) => ({ data: z })),
            (z) => ({ error: z })
          ),
          L = () => {
            S(l({ requestId: E, fixedCacheKey: h }))
          },
          O = Object.assign(M, {
            arg: C.arg,
            requestId: E,
            abort: T,
            unwrap: k,
            reset: L
          }),
          R = a.get(S) || {}
        return (
          a.set(S, R),
          (R[E] = O),
          O.then(() => {
            delete R[E], Si(R) || a.delete(S)
          }),
          h &&
            ((R[h] = O),
            O.then(() => {
              R[h] === O && (delete R[h], Si(R) || a.delete(S))
            })),
          O
        )
      }
  }
}
function Cv(e) {
  return e
}
function oM({
  reducerPath: e,
  baseQuery: t,
  context: { endpointDefinitions: n },
  serializeQueryArgs: r,
  api: i,
  assertTagType: o
}) {
  const a = (p, h, S, x) => (_, C) => {
      const E = n[p],
        T = r({ queryArgs: h, endpointDefinition: E, endpointName: p })
      if (
        (_(
          i.internalActions.queryResultPatched({ queryCacheKey: T, patches: S })
        ),
        !x)
      )
        return
      const k = i.endpoints[p].select(h)(C()),
        M = Lp(E.providesTags, k.data, void 0, h, {}, o)
      _(
        i.internalActions.updateProvidedBy({
          queryCacheKey: T,
          providedTags: M
        })
      )
    },
    s =
      (p, h, S, x = !0) =>
      (_, C) => {
        const T = i.endpoints[p].select(h)(C()),
          k = {
            patches: [],
            inversePatches: [],
            undo: () => _(i.util.patchQueryData(p, h, k.inversePatches, x))
          }
        if (T.status === 'uninitialized') return k
        let M
        if ('data' in T)
          if (Wt(T.data)) {
            const [L, O, R] = Gy(T.data, S)
            k.patches.push(...O), k.inversePatches.push(...R), (M = L)
          } else
            (M = S(T.data)),
              k.patches.push({ op: 'replace', path: [], value: M }),
              k.inversePatches.push({ op: 'replace', path: [], value: T.data })
        return (
          k.patches.length === 0 ||
            _(i.util.patchQueryData(p, h, k.patches, x)),
          k
        )
      },
    l = (p, h, S) => (x) =>
      x(
        i.endpoints[p].initiate(h, {
          subscribe: !1,
          forceRefetch: !0,
          [ra]: () => ({ data: S })
        })
      ),
    u = async (
      p,
      {
        signal: h,
        abort: S,
        rejectWithValue: x,
        fulfillWithValue: _,
        dispatch: C,
        getState: E,
        extra: T
      }
    ) => {
      const k = n[p.endpointName]
      try {
        let M = Cv,
          L
        const O = {
            signal: h,
            abort: S,
            dispatch: C,
            getState: E,
            extra: T,
            endpoint: p.endpointName,
            type: p.type,
            forced: p.type === 'query' ? c(p, E()) : void 0,
            queryCacheKey: p.type === 'query' ? p.queryCacheKey : void 0
          },
          R = p.type === 'query' ? p[ra] : void 0
        if (
          (R
            ? (L = R())
            : k.query
            ? ((L = await t(k.query(p.originalArgs), O, k.extraOptions)),
              k.transformResponse && (M = k.transformResponse))
            : (L = await k.queryFn(p.originalArgs, O, k.extraOptions, (z) =>
                t(z, O, k.extraOptions)
              )),
          typeof process < 'u',
          L.error)
        )
          throw new xv(L.error, L.meta)
        return _(await M(L.data, L.meta, p.originalArgs), {
          fulfilledTimeStamp: Date.now(),
          baseQueryMeta: L.meta,
          [pr]: !0
        })
      } catch (M) {
        let L = M
        if (L instanceof xv) {
          let O = Cv
          k.query && k.transformErrorResponse && (O = k.transformErrorResponse)
          try {
            return x(await O(L.value, L.meta, p.originalArgs), {
              baseQueryMeta: L.meta,
              [pr]: !0
            })
          } catch (R) {
            L = R
          }
        }
        throw (typeof process < 'u', console.error(L), L)
      }
    }
  function c(p, h) {
    var E, T, k
    const S =
        (T = (E = h[e]) == null ? void 0 : E.queries) == null
          ? void 0
          : T[p.queryCacheKey],
      x = (k = h[e]) == null ? void 0 : k.config.refetchOnMountOrArgChange,
      _ = S == null ? void 0 : S.fulfilledTimeStamp,
      C = p.forceRefetch ?? (p.subscribe && x)
    return C ? C === !0 || (Number(new Date()) - Number(_)) / 1e3 >= C : !1
  }
  const f = vv(`${e}/executeQuery`, u, {
      getPendingMeta() {
        return { startedTimeStamp: Date.now(), [pr]: !0 }
      },
      condition(p, { getState: h }) {
        var k, M, L
        const S = h(),
          x =
            (M = (k = S[e]) == null ? void 0 : k.queries) == null
              ? void 0
              : M[p.queryCacheKey],
          _ = x == null ? void 0 : x.fulfilledTimeStamp,
          C = p.originalArgs,
          E = x == null ? void 0 : x.originalArgs,
          T = n[p.endpointName]
        return uf(p)
          ? !0
          : (x == null ? void 0 : x.status) === 'pending'
          ? !1
          : c(p, S) ||
            (iw(T) &&
              (L = T == null ? void 0 : T.forceRefetch) != null &&
              L.call(T, {
                currentArg: C,
                previousArg: E,
                endpointState: x,
                state: S
              }))
          ? !0
          : !_
      },
      dispatchConditionRejection: !0
    }),
    d = vv(`${e}/executeMutation`, u, {
      getPendingMeta() {
        return { startedTimeStamp: Date.now(), [pr]: !0 }
      }
    }),
    v = (p) => 'force' in p,
    g = (p) => 'ifOlderThan' in p,
    y = (p, h, S) => (x, _) => {
      const C = v(S) && S.force,
        E = g(S) && S.ifOlderThan,
        T = (M = !0) => {
          const L = { forceRefetch: M, isPrefetch: !0 }
          return i.endpoints[p].initiate(h, L)
        },
        k = i.endpoints[p].select(h)(_())
      if (C) x(T())
      else if (E) {
        const M = k == null ? void 0 : k.fulfilledTimeStamp
        if (!M) {
          x(T())
          return
        }
        ;(Number(new Date()) - Number(new Date(M))) / 1e3 >= E && x(T())
      } else x(T(!1))
    }
  function b(p) {
    return (h) => {
      var S, x
      return (
        ((x = (S = h == null ? void 0 : h.meta) == null ? void 0 : S.arg) ==
        null
          ? void 0
          : x.endpointName) === p
      )
    }
  }
  function m(p, h) {
    return {
      matchPending: _o(Mp(p), b(h)),
      matchFulfilled: _o(Jn(p), b(h)),
      matchRejected: _o(Li(p), b(h))
    }
  }
  return {
    queryThunk: f,
    mutationThunk: d,
    prefetch: y,
    updateQueryData: s,
    upsertQueryData: l,
    patchQueryData: a,
    buildMatchThunkActions: m
  }
}
function ow(e, t, n, r) {
  return Lp(
    n[e.meta.arg.endpointName][t],
    Jn(e) ? e.payload : void 0,
    Kl(e) ? e.payload : void 0,
    e.meta.arg.originalArgs,
    'baseQueryMeta' in e.meta ? e.meta.baseQueryMeta : void 0,
    r
  )
}
function rs(e, t, n) {
  const r = e[t]
  r && n(r)
}
function ia(e) {
  return ('arg' in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId
}
function _v(e, t, n) {
  const r = e[ia(t)]
  r && n(r)
}
var no = {}
function aM({
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
  function f(_, C, E, T) {
    var k
    _[(k = C.queryCacheKey)] ??
      (_[k] = { status: 'uninitialized', endpointName: C.endpointName }),
      rs(_, C.queryCacheKey, (M) => {
        ;(M.status = 'pending'),
          (M.requestId = E && M.requestId ? M.requestId : T.requestId),
          C.originalArgs !== void 0 && (M.originalArgs = C.originalArgs),
          (M.startedTimeStamp = T.startedTimeStamp)
      })
  }
  function d(_, C, E) {
    rs(_, C.arg.queryCacheKey, (T) => {
      if (T.requestId !== C.requestId && !uf(C.arg)) return
      const { merge: k } = i[C.arg.endpointName]
      if (((T.status = 'fulfilled'), k))
        if (T.data !== void 0) {
          const {
            fulfilledTimeStamp: M,
            arg: L,
            baseQueryMeta: O,
            requestId: R
          } = C
          let z = wa(T.data, (I) =>
            k(I, E, {
              arg: L.originalArgs,
              baseQueryMeta: O,
              fulfilledTimeStamp: M,
              requestId: R
            })
          )
          T.data = z
        } else T.data = E
      else
        T.data =
          i[C.arg.endpointName].structuralSharing ?? !0
            ? ew(tn(T.data) ? J5(T.data) : T.data, E)
            : E
      delete T.error, (T.fulfilledTimeStamp = C.fulfilledTimeStamp)
    })
  }
  const v = On({
      name: `${e}/queries`,
      initialState: no,
      reducers: {
        removeQueryResult: {
          reducer(_, { payload: { queryCacheKey: C } }) {
            delete _[C]
          },
          prepare: to()
        },
        cacheEntriesUpserted: {
          reducer(_, C) {
            for (const E of C.payload) {
              const { queryDescription: T, value: k } = E
              f(_, T, !0, {
                arg: T,
                requestId: C.meta.requestId,
                startedTimeStamp: C.meta.timestamp
              }),
                d(
                  _,
                  {
                    arg: T,
                    requestId: C.meta.requestId,
                    fulfilledTimeStamp: C.meta.timestamp,
                    baseQueryMeta: {}
                  },
                  k
                )
            }
          },
          prepare: (_) => ({
            payload: _.map((T) => {
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
            meta: { [pr]: !0, requestId: jp(), timestamp: Date.now() }
          })
        },
        queryResultPatched: {
          reducer(_, { payload: { queryCacheKey: C, patches: E } }) {
            rs(_, C, (T) => {
              T.data = cv(T.data, E.concat())
            })
          },
          prepare: to()
        }
      },
      extraReducers(_) {
        _.addCase(t.pending, (C, { meta: E, meta: { arg: T } }) => {
          const k = uf(T)
          f(C, T, k, E)
        })
          .addCase(t.fulfilled, (C, { meta: E, payload: T }) => {
            d(C, E, T)
          })
          .addCase(
            t.rejected,
            (
              C,
              {
                meta: { condition: E, arg: T, requestId: k },
                error: M,
                payload: L
              }
            ) => {
              rs(C, T.queryCacheKey, (O) => {
                if (!E) {
                  if (O.requestId !== k) return
                  ;(O.status = 'rejected'), (O.error = L ?? M)
                }
              })
            }
          )
          .addMatcher(s, (C, E) => {
            const { queries: T } = a(E)
            for (const [k, M] of Object.entries(T))
              ((M == null ? void 0 : M.status) === 'fulfilled' ||
                (M == null ? void 0 : M.status) === 'rejected') &&
                (C[k] = M)
          })
      }
    }),
    g = On({
      name: `${e}/mutations`,
      initialState: no,
      reducers: {
        removeMutationResult: {
          reducer(_, { payload: C }) {
            const E = ia(C)
            E in _ && delete _[E]
          },
          prepare: to()
        }
      },
      extraReducers(_) {
        _.addCase(
          n.pending,
          (
            C,
            { meta: E, meta: { requestId: T, arg: k, startedTimeStamp: M } }
          ) => {
            k.track &&
              (C[ia(E)] = {
                requestId: T,
                status: 'pending',
                endpointName: k.endpointName,
                startedTimeStamp: M
              })
          }
        )
          .addCase(n.fulfilled, (C, { payload: E, meta: T }) => {
            T.arg.track &&
              _v(C, T, (k) => {
                k.requestId === T.requestId &&
                  ((k.status = 'fulfilled'),
                  (k.data = E),
                  (k.fulfilledTimeStamp = T.fulfilledTimeStamp))
              })
          })
          .addCase(n.rejected, (C, { payload: E, error: T, meta: k }) => {
            k.arg.track &&
              _v(C, k, (M) => {
                M.requestId === k.requestId &&
                  ((M.status = 'rejected'), (M.error = E ?? T))
              })
          })
          .addMatcher(s, (C, E) => {
            const { mutations: T } = a(E)
            for (const [k, M] of Object.entries(T))
              ((M == null ? void 0 : M.status) === 'fulfilled' ||
                (M == null ? void 0 : M.status) === 'rejected') &&
                k !== (M == null ? void 0 : M.requestId) &&
                (C[k] = M)
          })
      }
    }),
    y = On({
      name: `${e}/invalidation`,
      initialState: no,
      reducers: {
        updateProvidedBy: {
          reducer(_, C) {
            var k, M
            const { queryCacheKey: E, providedTags: T } = C.payload
            for (const L of Object.values(_))
              for (const O of Object.values(L)) {
                const R = O.indexOf(E)
                R !== -1 && O.splice(R, 1)
              }
            for (const { type: L, id: O } of T) {
              const R =
                (k = _[L] ?? (_[L] = {}))[(M = O || '__internal_without_id')] ??
                (k[M] = [])
              R.includes(E) || R.push(E)
            }
          },
          prepare: to()
        }
      },
      extraReducers(_) {
        _.addCase(
          v.actions.removeQueryResult,
          (C, { payload: { queryCacheKey: E } }) => {
            for (const T of Object.values(C))
              for (const k of Object.values(T)) {
                const M = k.indexOf(E)
                M !== -1 && k.splice(M, 1)
              }
          }
        )
          .addMatcher(s, (C, E) => {
            var k, M
            const { provided: T } = a(E)
            for (const [L, O] of Object.entries(T))
              for (const [R, z] of Object.entries(O)) {
                const I =
                  (k = C[L] ?? (C[L] = {}))[
                    (M = R || '__internal_without_id')
                  ] ?? (k[M] = [])
                for (const A of z) I.includes(A) || I.push(A)
              }
          })
          .addMatcher(_n(Jn(t), Kl(t)), (C, E) => {
            const T = ow(E, 'providesTags', i, l),
              { queryCacheKey: k } = E.meta.arg
            y.caseReducers.updateProvidedBy(
              C,
              y.actions.updateProvidedBy({ queryCacheKey: k, providedTags: T })
            )
          })
      }
    }),
    b = On({
      name: `${e}/subscriptions`,
      initialState: no,
      reducers: {
        updateSubscriptionOptions(_, C) {},
        unsubscribeQueryResult(_, C) {},
        internal_getRTKQSubscriptions() {}
      }
    }),
    m = On({
      name: `${e}/internalSubscriptions`,
      initialState: no,
      reducers: {
        subscriptionsUpdated: {
          reducer(_, C) {
            return cv(_, C.payload)
          },
          prepare: to()
        }
      }
    }),
    p = On({
      name: `${e}/config`,
      initialState: {
        online: K3(),
        focused: Q3(),
        middlewareRegistered: !1,
        ...u
      },
      reducers: {
        middlewareRegistered(_, { payload: C }) {
          _.middlewareRegistered =
            _.middlewareRegistered === 'conflict' || o !== C ? 'conflict' : !0
        }
      },
      extraReducers: (_) => {
        _.addCase(Op, (C) => {
          C.online = !0
        })
          .addCase(rw, (C) => {
            C.online = !1
          })
          .addCase(Np, (C) => {
            C.focused = !0
          })
          .addCase(nw, (C) => {
            C.focused = !1
          })
          .addMatcher(s, (C) => ({ ...C }))
      }
    }),
    h = zy({
      queries: v.reducer,
      mutations: g.reducer,
      provided: y.reducer,
      subscriptions: m.reducer,
      config: p.reducer
    }),
    S = (_, C) => h(c.match(C) ? void 0 : _, C),
    x = {
      ...p.actions,
      ...v.actions,
      ...b.actions,
      ...m.actions,
      ...g.actions,
      ...y.actions,
      resetApiState: c
    }
  return { reducer: S, actions: x }
}
var hr = Symbol.for('RTKQ/skipToken'),
  aw = { status: 'uninitialized' },
  Ev = wa(aw, () => {}),
  Tv = wa(aw, () => {})
function sM({ serializeQueryArgs: e, reducerPath: t, createSelector: n }) {
  const r = (f) => Ev,
    i = (f) => Tv
  return {
    buildQuerySelector: s,
    buildMutationSelector: l,
    selectInvalidatedBy: u,
    selectCachedArgsForQuery: c
  }
  function o(f) {
    return { ...f, ...q3(f.status) }
  }
  function a(f) {
    return f[t]
  }
  function s(f, d) {
    return (v) => {
      const g = e({ queryArgs: v, endpointDefinition: d, endpointName: f })
      return n(
        v === hr
          ? r
          : (m) => {
              var p, h
              return (
                ((h = (p = a(m)) == null ? void 0 : p.queries) == null
                  ? void 0
                  : h[g]) ?? Ev
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
        typeof f == 'object' ? (d = ia(f) ?? hr) : (d = f),
        n(
          d === hr
            ? i
            : (y) => {
                var b, m
                return (
                  ((m = (b = a(y)) == null ? void 0 : b.mutations) == null
                    ? void 0
                    : m[d]) ?? Tv
                )
              },
          o
        )
      )
    }
  }
  function u(f, d) {
    const v = f[t],
      g = new Set()
    for (const y of d.map(lf)) {
      const b = v.provided[y.type]
      if (!b) continue
      let m = (y.id !== void 0 ? b[y.id] : yv(Object.values(b))) ?? []
      for (const p of m) g.add(p)
    }
    return yv(
      Array.from(g.values()).map((y) => {
        const b = v.queries[y]
        return b
          ? [
              {
                queryCacheKey: y,
                endpointName: b.endpointName,
                originalArgs: b.originalArgs
              }
            ]
          : []
      })
    )
  }
  function c(f, d) {
    return Object.values(f[t].queries)
      .filter(
        (v) =>
          (v == null ? void 0 : v.endpointName) === d &&
          v.status !== 'uninitialized'
      )
      .map((v) => v.originalArgs)
  }
}
var qr = WeakMap ? new WeakMap() : void 0,
  kv = ({ endpointName: e, queryArgs: t }) => {
    let n = ''
    const r = qr == null ? void 0 : qr.get(t)
    if (typeof r == 'string') n = r
    else {
      const i = JSON.stringify(
        t,
        (o, a) => (
          (a = typeof a == 'bigint' ? { $bigint: a.toString() } : a),
          (a = en(a)
            ? Object.keys(a)
                .sort()
                .reduce((s, l) => ((s[l] = a[l]), s), {})
            : a),
          a
        )
      )
      en(t) && (qr == null || qr.set(t, i)), (n = i)
    }
    return `${e}(${n})`
  }
function lM(...e) {
  return function (n) {
    const r = pl((u) => {
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
          let c = kv
          if ('serializeQueryArgs' in u.endpointDefinition) {
            const f = u.endpointDefinition.serializeQueryArgs
            c = (d) => {
              const v = f(d)
              return typeof v == 'string' ? v : kv({ ...d, queryArgs: v })
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
        apiUid: jp(),
        extractRehydrationInfo: r,
        hasRehydrationInfo: pl((u) => r(u) != null)
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
          if (u.overrideExisting === 'throw') throw new Error(Et(39))
          typeof process < 'u'
          continue
        }
        o.endpointDefinitions[f] = d
        for (const v of s) v.injectEndpoint(f, d)
      }
      return a
    }
    return a.injectEndpoints({ endpoints: n.endpoints })
  }
}
function Pn(e, ...t) {
  return Object.assign(e, ...t)
}
var uM = ({ api: e, queryThunk: t, internalState: n }) => {
  const r = `${e.reducerPath}/subscriptions`
  let i = null,
    o = null
  const { updateSubscriptionOptions: a, unsubscribeQueryResult: s } =
      e.internalActions,
    l = (v, g) => {
      var b, m, p
      if (a.match(g)) {
        const { queryCacheKey: h, requestId: S, options: x } = g.payload
        return (
          (b = v == null ? void 0 : v[h]) != null && b[S] && (v[h][S] = x), !0
        )
      }
      if (s.match(g)) {
        const { queryCacheKey: h, requestId: S } = g.payload
        return v[h] && delete v[h][S], !0
      }
      if (e.internalActions.removeQueryResult.match(g))
        return delete v[g.payload.queryCacheKey], !0
      if (t.pending.match(g)) {
        const {
            meta: { arg: h, requestId: S }
          } = g,
          x = v[(m = h.queryCacheKey)] ?? (v[m] = {})
        return (
          (x[`${S}_running`] = {}),
          h.subscribe && (x[S] = h.subscriptionOptions ?? x[S] ?? {}),
          !0
        )
      }
      let y = !1
      if (t.fulfilled.match(g) || t.rejected.match(g)) {
        const h = v[g.meta.arg.queryCacheKey] || {},
          S = `${g.meta.requestId}_running`
        y || (y = !!h[S]), delete h[S]
      }
      if (t.rejected.match(g)) {
        const {
          meta: { condition: h, arg: S, requestId: x }
        } = g
        if (h && S.subscribe) {
          const _ = v[(p = S.queryCacheKey)] ?? (v[p] = {})
          ;(_[x] = S.subscriptionOptions ?? _[x] ?? {}), (y = !0)
        }
      }
      return y
    },
    u = () => n.currentSubscriptions,
    d = {
      getSubscriptions: u,
      getSubscriptionCount: (v) => {
        const y = u()[v] ?? {}
        return Si(y)
      },
      isRequestSubscribed: (v, g) => {
        var b
        const y = u()
        return !!((b = y == null ? void 0 : y[v]) != null && b[g])
      }
    }
  return (v, g) => {
    if (
      (i || (i = JSON.parse(JSON.stringify(n.currentSubscriptions))),
      e.util.resetApiState.match(v))
    )
      return (i = n.currentSubscriptions = {}), (o = null), [!0, !1]
    if (e.internalActions.internal_getRTKQSubscriptions.match(v)) return [!1, d]
    const y = l(n.currentSubscriptions, v)
    let b = !0
    if (y) {
      o ||
        (o = setTimeout(() => {
          const h = JSON.parse(JSON.stringify(n.currentSubscriptions)),
            [, S] = Gy(i, () => h)
          g.next(e.internalActions.subscriptionsUpdated(S)), (i = h), (o = null)
        }, 500))
      const m = typeof v.type == 'string' && !!v.type.startsWith(r),
        p = t.rejected.match(v) && v.meta.condition && !!v.meta.arg.subscribe
      b = !m && !p
    }
    return [b, !1]
  }
}
function cM(e) {
  for (const t in e) return !1
  return !0
}
var dM = 2147483647 / 1e3 - 1,
  fM = ({
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
      l = _n(a.match, n.fulfilled, n.rejected, s.match)
    function u(v) {
      const g = i.currentSubscriptions[v]
      return !!g && !cM(g)
    }
    const c = {},
      f = (v, g, y) => {
        var b
        if (l(v)) {
          const m = g.getState()[e]
          let p
          if (s.match(v))
            p = v.payload.map((h) => h.queryDescription.queryCacheKey)
          else {
            const { queryCacheKey: h } = a.match(v) ? v.payload : v.meta.arg
            p = [h]
          }
          for (const h of p)
            d(
              h,
              (b = m.queries[h]) == null ? void 0 : b.endpointName,
              g,
              m.config
            )
        }
        if (t.util.resetApiState.match(v))
          for (const [m, p] of Object.entries(c))
            p && clearTimeout(p), delete c[m]
        if (r.hasRehydrationInfo(v)) {
          const m = g.getState()[e],
            { queries: p } = r.extractRehydrationInfo(v)
          for (const [h, S] of Object.entries(p))
            d(h, S == null ? void 0 : S.endpointName, g, m.config)
        }
      }
    function d(v, g, y, b) {
      const m = r.endpointDefinitions[g],
        p = (m == null ? void 0 : m.keepUnusedDataFor) ?? b.keepUnusedDataFor
      if (p === 1 / 0) return
      const h = Math.max(0, Math.min(p, dM))
      if (!u(v)) {
        const S = c[v]
        S && clearTimeout(S),
          (c[v] = setTimeout(() => {
            u(v) || y.dispatch(o({ queryCacheKey: v })), delete c[v]
          }, h * 1e3))
      }
    }
    return f
  },
  Pv = new Error('Promise never resolved before cacheEntryRemoved.'),
  pM = ({
    api: e,
    reducerPath: t,
    context: n,
    queryThunk: r,
    mutationThunk: i,
    internalState: o
  }) => {
    const a = sf(r),
      s = sf(i),
      l = Jn(r, i),
      u = {}
    function c(y, b, m) {
      const p = u[y]
      p != null &&
        p.valueResolved &&
        (p.valueResolved({ data: b, meta: m }), delete p.valueResolved)
    }
    function f(y) {
      const b = u[y]
      b && (delete u[y], b.cacheEntryRemoved())
    }
    const d = (y, b, m) => {
      const p = v(y)
      function h(S, x, _, C) {
        const E = m[t].queries[x],
          T = b.getState()[t].queries[x]
        !E && T && g(S, C, x, b, _)
      }
      if (r.pending.match(y))
        h(y.meta.arg.endpointName, p, y.meta.requestId, y.meta.arg.originalArgs)
      else if (e.internalActions.cacheEntriesUpserted.match(y))
        for (const { queryDescription: S, value: x } of y.payload) {
          const { endpointName: _, originalArgs: C, queryCacheKey: E } = S
          h(_, E, y.meta.requestId, C), c(E, x, {})
        }
      else if (i.pending.match(y))
        b.getState()[t].mutations[p] &&
          g(
            y.meta.arg.endpointName,
            y.meta.arg.originalArgs,
            p,
            b,
            y.meta.requestId
          )
      else if (l(y)) c(p, y.payload, y.meta.baseQueryMeta)
      else if (
        e.internalActions.removeQueryResult.match(y) ||
        e.internalActions.removeMutationResult.match(y)
      )
        f(p)
      else if (e.util.resetApiState.match(y))
        for (const S of Object.keys(u)) f(S)
    }
    function v(y) {
      return a(y)
        ? y.meta.arg.queryCacheKey
        : s(y)
        ? y.meta.arg.fixedCacheKey ?? y.meta.requestId
        : e.internalActions.removeQueryResult.match(y)
        ? y.payload.queryCacheKey
        : e.internalActions.removeMutationResult.match(y)
        ? ia(y.payload)
        : ''
    }
    function g(y, b, m, p, h) {
      const S = n.endpointDefinitions[y],
        x = S == null ? void 0 : S.onCacheEntryAdded
      if (!x) return
      const _ = {},
        C = new Promise((O) => {
          _.cacheEntryRemoved = O
        }),
        E = Promise.race([
          new Promise((O) => {
            _.valueResolved = O
          }),
          C.then(() => {
            throw Pv
          })
        ])
      E.catch(() => {}), (u[m] = _)
      const T = e.endpoints[y].select(S.type === 'query' ? b : m),
        k = p.dispatch((O, R, z) => z),
        M = {
          ...p,
          getCacheEntry: () => T(p.getState()),
          requestId: h,
          extra: k,
          updateCachedData:
            S.type === 'query'
              ? (O) => p.dispatch(e.util.updateQueryData(y, b, O))
              : void 0,
          cacheDataLoaded: E,
          cacheEntryRemoved: C
        },
        L = x(b, M)
      Promise.resolve(L).catch((O) => {
        if (O !== Pv) throw O
      })
    }
    return d
  },
  hM =
    ({ api: e, context: { apiUid: t }, reducerPath: n }) =>
    (r, i) => {
      e.util.resetApiState.match(r) &&
        i.dispatch(e.internalActions.middlewareRegistered(t)),
        typeof process < 'u'
    },
  mM = ({
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
      c = _n(Jn(r), Kl(r)),
      f = _n(Jn(r, i), Li(r, i))
    let d = []
    const v = (b, m) => {
      c(b)
        ? y(ow(b, 'invalidatesTags', n, a), m)
        : f(b)
        ? y([], m)
        : o.util.invalidateTags.match(b) &&
          y(Lp(b.payload, void 0, void 0, void 0, void 0, a), m)
    }
    function g(b) {
      var m, p
      for (const h in b.queries)
        if (((m = b.queries[h]) == null ? void 0 : m.status) === 'pending')
          return !0
      for (const h in b.mutations)
        if (((p = b.mutations[h]) == null ? void 0 : p.status) === 'pending')
          return !0
      return !1
    }
    function y(b, m) {
      const p = m.getState(),
        h = p[e]
      if ((d.push(...b), h.config.invalidationBehavior === 'delayed' && g(h)))
        return
      const S = d
      if (((d = []), S.length === 0)) return
      const x = o.util.selectInvalidatedBy(p, S)
      t.batch(() => {
        const _ = Array.from(x.values())
        for (const { queryCacheKey: C } of _) {
          const E = h.queries[C],
            T = l.currentSubscriptions[C] ?? {}
          E &&
            (Si(T) === 0
              ? m.dispatch(u({ queryCacheKey: C }))
              : E.status !== 'uninitialized' && m.dispatch(s(E)))
        }
      })
    }
    return v
  },
  vM = ({
    reducerPath: e,
    queryThunk: t,
    api: n,
    refetchQuery: r,
    internalState: i
  }) => {
    const o = {},
      a = (d, v) => {
        ;(n.internalActions.updateSubscriptionOptions.match(d) ||
          n.internalActions.unsubscribeQueryResult.match(d)) &&
          l(d.payload, v),
          (t.pending.match(d) || (t.rejected.match(d) && d.meta.condition)) &&
            l(d.meta.arg, v),
          (t.fulfilled.match(d) ||
            (t.rejected.match(d) && !d.meta.condition)) &&
            s(d.meta.arg, v),
          n.util.resetApiState.match(d) && c()
      }
    function s({ queryCacheKey: d }, v) {
      const g = v.getState()[e],
        y = g.queries[d],
        b = i.currentSubscriptions[d]
      if (!y || y.status === 'uninitialized') return
      const { lowestPollingInterval: m, skipPollingIfUnfocused: p } = f(b)
      if (!Number.isFinite(m)) return
      const h = o[d]
      h != null && h.timeout && (clearTimeout(h.timeout), (h.timeout = void 0))
      const S = Date.now() + m
      o[d] = {
        nextPollTimestamp: S,
        pollingInterval: m,
        timeout: setTimeout(() => {
          ;(g.config.focused || !p) && v.dispatch(r(y)),
            s({ queryCacheKey: d }, v)
        }, m)
      }
    }
    function l({ queryCacheKey: d }, v) {
      const y = v.getState()[e].queries[d],
        b = i.currentSubscriptions[d]
      if (!y || y.status === 'uninitialized') return
      const { lowestPollingInterval: m } = f(b)
      if (!Number.isFinite(m)) {
        u(d)
        return
      }
      const p = o[d],
        h = Date.now() + m
      ;(!p || h < p.nextPollTimestamp) && s({ queryCacheKey: d }, v)
    }
    function u(d) {
      const v = o[d]
      v != null && v.timeout && clearTimeout(v.timeout), delete o[d]
    }
    function c() {
      for (const d of Object.keys(o)) u(d)
    }
    function f(d = {}) {
      let v = !1,
        g = Number.POSITIVE_INFINITY
      for (let y in d)
        d[y].pollingInterval &&
          ((g = Math.min(d[y].pollingInterval, g)),
          (v = d[y].skipPollingIfUnfocused || v))
      return { lowestPollingInterval: g, skipPollingIfUnfocused: v }
    }
    return a
  },
  gM = ({ api: e, context: t, queryThunk: n, mutationThunk: r }) => {
    const i = Mp(n, r),
      o = Li(n, r),
      a = Jn(n, r),
      s = {}
    return (u, c) => {
      var f, d
      if (i(u)) {
        const {
            requestId: v,
            arg: { endpointName: g, originalArgs: y }
          } = u.meta,
          b = t.endpointDefinitions[g],
          m = b == null ? void 0 : b.onQueryStarted
        if (m) {
          const p = {},
            h = new Promise((C, E) => {
              ;(p.resolve = C), (p.reject = E)
            })
          h.catch(() => {}), (s[v] = p)
          const S = e.endpoints[g].select(b.type === 'query' ? y : v),
            x = c.dispatch((C, E, T) => T),
            _ = {
              ...c,
              getCacheEntry: () => S(c.getState()),
              requestId: v,
              extra: x,
              updateCachedData:
                b.type === 'query'
                  ? (C) => c.dispatch(e.util.updateQueryData(g, y, C))
                  : void 0,
              queryFulfilled: h
            }
          m(y, _)
        }
      } else if (a(u)) {
        const { requestId: v, baseQueryMeta: g } = u.meta
        ;(f = s[v]) == null || f.resolve({ data: u.payload, meta: g }),
          delete s[v]
      } else if (o(u)) {
        const { requestId: v, rejectedWithValue: g, baseQueryMeta: y } = u.meta
        ;(d = s[v]) == null ||
          d.reject({
            error: u.payload ?? u.error,
            isUnhandledError: !g,
            meta: y
          }),
          delete s[v]
      }
    }
  },
  yM = ({
    reducerPath: e,
    context: t,
    api: n,
    refetchQuery: r,
    internalState: i
  }) => {
    const { removeQueryResult: o } = n.internalActions,
      a = (l, u) => {
        Np.match(l) && s(u, 'refetchOnFocus'),
          Op.match(l) && s(u, 'refetchOnReconnect')
      }
    function s(l, u) {
      const c = l.getState()[e],
        f = c.queries,
        d = i.currentSubscriptions
      t.batch(() => {
        for (const v of Object.keys(d)) {
          const g = f[v],
            y = d[v]
          if (!y || !g) continue
          ;(Object.values(y).some((m) => m[u] === !0) ||
            (Object.values(y).every((m) => m[u] === void 0) && c.config[u])) &&
            (Si(y) === 0
              ? l.dispatch(o({ queryCacheKey: v }))
              : g.status !== 'uninitialized' && l.dispatch(r(g)))
        }
      })
    }
    return a
  }
function wM(e) {
  const { reducerPath: t, queryThunk: n, api: r, context: i } = e,
    { apiUid: o } = i,
    a = { invalidateTags: Bt(`${t}/invalidateTags`) },
    s = (f) => f.type.startsWith(`${t}/`),
    l = [hM, fM, mM, vM, pM, gM]
  return {
    middleware: (f) => {
      let d = !1
      const g = {
          ...e,
          internalState: { currentSubscriptions: {} },
          refetchQuery: c,
          isThisApiSliceAction: s
        },
        y = l.map((p) => p(g)),
        b = uM(g),
        m = yM(g)
      return (p) => (h) => {
        if (!Vy(h)) return p(h)
        d || ((d = !0), f.dispatch(r.internalActions.middlewareRegistered(o)))
        const S = { ...f, next: p },
          x = f.getState(),
          [_, C] = b(h, S, x)
        let E
        if (
          (_ ? (E = p(h)) : (E = C),
          f.getState()[t] && (m(h, S, x), s(h) || i.hasRehydrationInfo(h)))
        )
          for (const T of y) T(h, S, x)
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
var Mv = Symbol(),
  SM = ({ createSelector: e = Pp } = {}) => ({
    name: Mv,
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
      u3()
      const d = (j) => (typeof process < 'u', j)
      Object.assign(t, {
        reducerPath: i,
        endpoints: {},
        internalActions: {
          onOnline: Op,
          onOffline: rw,
          onFocus: Np,
          onFocusLost: nw
        },
        util: {}
      })
      const {
          queryThunk: v,
          mutationThunk: g,
          patchQueryData: y,
          updateQueryData: b,
          upsertQueryData: m,
          prefetch: p,
          buildMatchThunkActions: h
        } = oM({
          baseQuery: n,
          reducerPath: i,
          context: f,
          api: t,
          serializeQueryArgs: o,
          assertTagType: d
        }),
        { reducer: S, actions: x } = aM({
          context: f,
          queryThunk: v,
          mutationThunk: g,
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
      Pn(t.util, {
        patchQueryData: y,
        updateQueryData: b,
        upsertQueryData: m,
        prefetch: p,
        resetApiState: x.resetApiState,
        upsertQueryEntries: x.cacheEntriesUpserted
      }),
        Pn(t.internalActions, x)
      const { middleware: _, actions: C } = wM({
        reducerPath: i,
        context: f,
        queryThunk: v,
        mutationThunk: g,
        api: t,
        assertTagType: d
      })
      Pn(t.util, C), Pn(t, { reducer: S, middleware: _ })
      const {
        buildQuerySelector: E,
        buildMutationSelector: T,
        selectInvalidatedBy: k,
        selectCachedArgsForQuery: M
      } = sM({ serializeQueryArgs: o, reducerPath: i, createSelector: e })
      Pn(t.util, { selectInvalidatedBy: k, selectCachedArgsForQuery: M })
      const {
        buildInitiateQuery: L,
        buildInitiateMutation: O,
        getRunningMutationThunk: R,
        getRunningMutationsThunk: z,
        getRunningQueriesThunk: I,
        getRunningQueryThunk: A
      } = iM({
        queryThunk: v,
        mutationThunk: g,
        api: t,
        serializeQueryArgs: o,
        context: f
      })
      return (
        Pn(t.util, {
          getRunningMutationThunk: R,
          getRunningMutationsThunk: z,
          getRunningQueryThunk: A,
          getRunningQueriesThunk: I
        }),
        {
          name: Mv,
          injectEndpoint(j, F) {
            var V
            const $ = t
            ;(V = $.endpoints)[j] ?? (V[j] = {}),
              iw(F)
                ? Pn(
                    $.endpoints[j],
                    { name: j, select: E(j, F), initiate: L(j, F) },
                    h(v, j)
                  )
                : tM(F) &&
                  Pn(
                    $.endpoints[j],
                    { name: j, select: T(), initiate: O(j) },
                    h(g, j)
                  )
          }
        }
      )
    }
  })
function bM(e) {
  return e.type === 'query'
}
function xM(e) {
  return e.type === 'mutation'
}
function is(e, ...t) {
  return Object.assign(e, ...t)
}
function ac(e) {
  return e.replace(e[0], e[0].toUpperCase())
}
var Gr = WeakMap ? new WeakMap() : void 0,
  CM = ({ endpointName: e, queryArgs: t }) => {
    let n = ''
    const r = Gr == null ? void 0 : Gr.get(t)
    if (typeof r == 'string') n = r
    else {
      const i = JSON.stringify(
        t,
        (o, a) => (
          (a = typeof a == 'bigint' ? { $bigint: a.toString() } : a),
          (a = en(a)
            ? Object.keys(a)
                .sort()
                .reduce((s, l) => ((s[l] = a[l]), s), {})
            : a),
          a
        )
      )
      en(t) && (Gr == null || Gr.set(t, i)), (n = i)
    }
    return `${e}(${n})`
  },
  sc = Symbol()
function jv(e, t, n, r) {
  const i = P.useMemo(
      () => ({
        queryArgs: e,
        serialized:
          typeof e == 'object'
            ? t({ queryArgs: e, endpointDefinition: n, endpointName: r })
            : e
      }),
      [e, t, n, r]
    ),
    o = P.useRef(i)
  return (
    P.useEffect(() => {
      o.current.serialized !== i.serialized && (o.current = i)
    }, [i]),
    o.current.serialized === i.serialized ? o.current.queryArgs : e
  )
}
function lc(e) {
  const t = P.useRef(e)
  return (
    P.useEffect(() => {
      wo(t.current, e) || (t.current = e)
    }, [e]),
    wo(t.current, e) ? t.current : e
  )
}
var _M = () =>
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  EM = _M(),
  TM = () => typeof navigator < 'u' && navigator.product === 'ReactNative',
  kM = TM(),
  PM = () => (EM || kM ? P.useLayoutEffect : P.useEffect),
  MM = PM(),
  jM = (e) =>
    e.isUninitialized
      ? {
          ...e,
          isUninitialized: !1,
          isFetching: !0,
          isLoading: e.data === void 0,
          status: Jy.pending
        }
      : e
function NM({
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
  const u = o ? (g) => g() : P.useEffect
  return { buildQueryHooks: d, buildMutationHook: v, usePrefetch: f }
  function c(g, y, b) {
    if (y != null && y.endpointName && g.isUninitialized) {
      const { endpointName: _ } = y,
        C = l.endpointDefinitions[_]
      s({
        queryArgs: y.originalArgs,
        endpointDefinition: C,
        endpointName: _
      }) === s({ queryArgs: b, endpointDefinition: C, endpointName: _ }) &&
        (y = void 0)
    }
    let m = g.isSuccess ? g.data : y == null ? void 0 : y.data
    m === void 0 && (m = g.data)
    const p = m !== void 0,
      h = g.isLoading,
      S = (!y || y.isLoading || y.isUninitialized) && !p && h,
      x = g.isSuccess || (h && p)
    return {
      ...g,
      data: m,
      currentData: g.data,
      isFetching: h,
      isLoading: S,
      isSuccess: x
    }
  }
  function f(g, y) {
    const b = n(),
      m = lc(y)
    return P.useCallback(
      (p, h) => b(e.util.prefetch(g, p, { ...m, ...h })),
      [g, b, m]
    )
  }
  function d(g) {
    const y = (
        p,
        {
          refetchOnReconnect: h,
          refetchOnFocus: S,
          refetchOnMountOrArgChange: x,
          skip: _ = !1,
          pollingInterval: C = 0,
          skipPollingIfUnfocused: E = !1
        } = {}
      ) => {
        const { initiate: T } = e.endpoints[g],
          k = n(),
          M = P.useRef(void 0)
        if (!M.current) {
          const $ = k(e.internalActions.internal_getRTKQSubscriptions())
          M.current = $
        }
        const L = jv(_ ? hr : p, CM, l.endpointDefinitions[g], g),
          O = lc({
            refetchOnReconnect: h,
            refetchOnFocus: S,
            pollingInterval: C,
            skipPollingIfUnfocused: E
          }),
          R = P.useRef(!1),
          z = P.useRef(void 0)
        let { queryCacheKey: I, requestId: A } = z.current || {},
          j = !1
        I && A && (j = M.current.isRequestSubscribed(I, A))
        const F = !j && R.current
        return (
          u(() => {
            R.current = j
          }),
          u(() => {
            F && (z.current = void 0)
          }, [F]),
          u(() => {
            var W
            const $ = z.current
            if ((typeof process < 'u', L === hr)) {
              $ == null || $.unsubscribe(), (z.current = void 0)
              return
            }
            const V = (W = z.current) == null ? void 0 : W.subscriptionOptions
            if (!$ || $.arg !== L) {
              $ == null || $.unsubscribe()
              const Q = k(T(L, { subscriptionOptions: O, forceRefetch: x }))
              z.current = Q
            } else O !== V && $.updateSubscriptionOptions(O)
          }, [k, T, x, L, O, F]),
          P.useEffect(
            () => () => {
              var $
              ;($ = z.current) == null || $.unsubscribe(), (z.current = void 0)
            },
            []
          ),
          P.useMemo(
            () => ({
              refetch: () => {
                var $
                if (!z.current) throw new Error(Et(38))
                return ($ = z.current) == null ? void 0 : $.refetch()
              }
            }),
            []
          )
        )
      },
      b = ({
        refetchOnReconnect: p,
        refetchOnFocus: h,
        pollingInterval: S = 0,
        skipPollingIfUnfocused: x = !1
      } = {}) => {
        const { initiate: _ } = e.endpoints[g],
          C = n(),
          [E, T] = P.useState(sc),
          k = P.useRef(void 0),
          M = lc({
            refetchOnReconnect: p,
            refetchOnFocus: h,
            pollingInterval: S,
            skipPollingIfUnfocused: x
          })
        u(() => {
          var z, I
          const R = (z = k.current) == null ? void 0 : z.subscriptionOptions
          M !== R && ((I = k.current) == null || I.updateSubscriptionOptions(M))
        }, [M])
        const L = P.useRef(M)
        u(() => {
          L.current = M
        }, [M])
        const O = P.useCallback(
          function (R, z = !1) {
            let I
            return (
              t(() => {
                var A
                ;(A = k.current) == null || A.unsubscribe(),
                  (k.current = I =
                    C(
                      _(R, { subscriptionOptions: L.current, forceRefetch: !z })
                    )),
                  T(R)
              }),
              I
            )
          },
          [C, _]
        )
        return (
          P.useEffect(
            () => () => {
              var R
              ;(R = k == null ? void 0 : k.current) == null || R.unsubscribe()
            },
            []
          ),
          P.useEffect(() => {
            E !== sc && !k.current && O(E, !0)
          }, [E, O]),
          P.useMemo(() => [O, E], [O, E])
        )
      },
      m = (p, { skip: h = !1, selectFromResult: S } = {}) => {
        const { select: x } = e.endpoints[g],
          _ = jv(h ? hr : p, s, l.endpointDefinitions[g], g),
          C = P.useRef(void 0),
          E = P.useMemo(
            () =>
              a([x(_), (O, R) => R, (O) => _], c, {
                memoizeOptions: { resultEqualityCheck: wo }
              }),
            [x, _]
          ),
          T = P.useMemo(
            () =>
              S
                ? a([E], S, {
                    devModeChecks: { identityFunctionCheck: 'never' }
                  })
                : E,
            [E, S]
          ),
          k = r((O) => T(O, C.current), wo),
          M = i(),
          L = E(M.getState(), C.current)
        return (
          MM(() => {
            C.current = L
          }, [L]),
          k
        )
      }
    return {
      useQueryState: m,
      useQuerySubscription: y,
      useLazyQuerySubscription: b,
      useLazyQuery(p) {
        const [h, S] = b(p),
          x = m(S, { ...p, skip: S === sc }),
          _ = P.useMemo(() => ({ lastArg: S }), [S])
        return P.useMemo(() => [h, x, _], [h, x, _])
      },
      useQuery(p, h) {
        const S = y(p, h),
          x = m(p, {
            selectFromResult: p === hr || (h != null && h.skip) ? void 0 : jM,
            ...h
          }),
          {
            data: _,
            status: C,
            isLoading: E,
            isSuccess: T,
            isError: k,
            error: M
          } = x
        return (
          P.useDebugValue({
            data: _,
            status: C,
            isLoading: E,
            isSuccess: T,
            isError: k,
            error: M
          }),
          P.useMemo(() => ({ ...x, ...S }), [x, S])
        )
      }
    }
  }
  function v(g) {
    return ({ selectFromResult: y, fixedCacheKey: b } = {}) => {
      const { select: m, initiate: p } = e.endpoints[g],
        h = n(),
        [S, x] = P.useState()
      P.useEffect(
        () => () => {
          ;(S != null && S.arg.fixedCacheKey) || S == null || S.reset()
        },
        [S]
      )
      const _ = P.useCallback(
          function (V) {
            const W = h(p(V, { fixedCacheKey: b }))
            return x(W), W
          },
          [h, p, b]
        ),
        { requestId: C } = S || {},
        E = P.useMemo(
          () =>
            m({
              fixedCacheKey: b,
              requestId: S == null ? void 0 : S.requestId
            }),
          [b, S, m]
        ),
        T = P.useMemo(() => (y ? a([E], y) : E), [y, E]),
        k = r(T, wo),
        M = b == null ? (S == null ? void 0 : S.arg.originalArgs) : void 0,
        L = P.useCallback(() => {
          t(() => {
            S && x(void 0),
              b &&
                h(
                  e.internalActions.removeMutationResult({
                    requestId: C,
                    fixedCacheKey: b
                  })
                )
          })
        }, [h, b, S, C]),
        {
          endpointName: O,
          data: R,
          status: z,
          isLoading: I,
          isSuccess: A,
          isError: j,
          error: F
        } = k
      P.useDebugValue({
        endpointName: O,
        data: R,
        status: z,
        isLoading: I,
        isSuccess: A,
        isError: j,
        error: F
      })
      const $ = P.useMemo(
        () => ({ ...k, originalArgs: M, reset: L }),
        [k, M, L]
      )
      return P.useMemo(() => [_, $], [_, $])
    }
  }
}
var OM = Symbol(),
  LM = ({
    batch: e = Eb,
    hooks: t = { useDispatch: _b, useSelector: X0, useStore: J0 },
    createSelector: n = Pp,
    unstable__sideEffectsInRender: r = !1,
    ...i
  } = {}) => ({
    name: OM,
    init(o, { serializeQueryArgs: a }, s) {
      const l = o,
        {
          buildQueryHooks: u,
          buildMutationHook: c,
          usePrefetch: f
        } = NM({
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
        is(l, { usePrefetch: f }),
        is(s, { batch: e }),
        {
          injectEndpoint(d, v) {
            if (bM(v)) {
              const {
                useQuery: g,
                useLazyQuery: y,
                useLazyQuerySubscription: b,
                useQueryState: m,
                useQuerySubscription: p
              } = u(d)
              is(l.endpoints[d], {
                useQuery: g,
                useLazyQuery: y,
                useLazyQuerySubscription: b,
                useQueryState: m,
                useQuerySubscription: p
              }),
                (o[`use${ac(d)}Query`] = g),
                (o[`useLazy${ac(d)}Query`] = y)
            } else if (xM(v)) {
              const g = c(d)
              is(l.endpoints[d], { useMutation: g }),
                (o[`use${ac(d)}Mutation`] = g)
            }
          }
        }
      )
    }
  }),
  sw = lM(SM(), LM())
const Qr = 'quickstart-f31ee0a4.myshopify.com',
  ks = sw({
    reducerPath: 'orderEditApi',
    baseQuery: tw({
      baseUrl: 'https://blog.nvdmini.com/api/return/storefront'
    }),
    endpoints: (e) => ({
      searchOrder: e.mutation({
        query: (t) => ({
          url: `order-edit-eligibility-check?shop_url=${Qr}`,
          method: 'POST',
          body: t
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
  RM = { order: {}, page: 'Home' },
  IM = On({
    name: 'orderEdit',
    initialState: RM,
    reducers: {
      setPage: (e, t) => {
        e.page = t.payload
      }
    },
    extraReducers: (e) => {
      e.addMatcher(ks.endpoints.searchOrder.matchFulfilled, (t, n) => {
        t.order = n.payload.order
      })
    }
  }),
  AM = IM.reducer,
  Nv = 'mehedi-test-store.myshopify.com',
  Eo = sw({
    reducerPath: 'orderEditConfigApi',
    baseQuery: tw({
      baseUrl: 'https://blog.nvdmini.com/api/return/storefront'
    }),
    endpoints: (e) => ({
      getStyleData: e.query({
        query: () => ({ url: `/order-edit-portal-data?shop_url=${Nv}` }),
        transformResponse: (t) => t.data,
        transformErrorResponse: (t) => t.status
      }),
      getOrderEditSettings: e.query({
        query: () => ({ url: `/order-edit-setting?shop_url=${Nv}` }),
        transformResponse: (t) => t.edit_setting,
        transformErrorResponse: (t) => t.status
      })
    })
  }),
  FM = { styleData: {}, orderEditSettings: {} },
  $M = On({
    name: 'orderEditStyle',
    initialState: FM,
    reducers: {},
    extraReducers: (e) => {
      e.addMatcher(Eo.endpoints.getStyleData.matchFulfilled, (t, n) => {
        t.styleData = n.payload
      }),
        e.addMatcher(
          Eo.endpoints.getOrderEditSettings.matchFulfilled,
          (t, n) => {
            t.orderEditSettings = n.payload
          }
        )
    }
  }),
  DM = $M.reducer,
  zM = M3({
    reducer: {
      orderEdit: AM,
      orderEditConfig: DM,
      [ks.reducerPath]: ks.reducer,
      [Eo.reducerPath]: Eo.reducer
    },
    middleware: (e) => e().concat(ks.middleware).concat(Eo.middleware)
  }),
  VM = U0(document.getElementById('opt-order-edit'))
VM.render(w.jsx(xb, { store: zM, children: w.jsx(G5, {}) }))
