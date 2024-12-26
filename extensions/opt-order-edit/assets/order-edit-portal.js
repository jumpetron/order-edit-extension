var My = Object.defineProperty
var by = (e, t, n) =>
  t in e
    ? My(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n)
var Sl = (e, t, n) => by(e, typeof t != 'symbol' ? t + '' : t, n)
function Oy(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n]
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const o in r)
        if (o !== 'default' && !(o in e)) {
          const a = Object.getOwnPropertyDescriptor(r, o)
          a &&
            Object.defineProperty(
              e,
              o,
              a.get ? a : { enumerable: !0, get: () => r[o] }
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
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o)
  new MutationObserver((o) => {
    for (const a of o)
      if (a.type === 'childList')
        for (const u of a.addedNodes)
          u.tagName === 'LINK' && u.rel === 'modulepreload' && r(u)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(o) {
    const a = {}
    return (
      o.integrity && (a.integrity = o.integrity),
      o.referrerPolicy && (a.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (a.credentials = 'include')
        : o.crossOrigin === 'anonymous'
        ? (a.credentials = 'omit')
        : (a.credentials = 'same-origin'),
      a
    )
  }
  function r(o) {
    if (o.ep) return
    o.ep = !0
    const a = n(o)
    fetch(o.href, a)
  }
})()
var Iy =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {}
function zy(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
var Rp = { exports: {} },
  wa = {},
  Dp = { exports: {} },
  ue = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Eo = Symbol.for('react.element'),
  Ny = Symbol.for('react.portal'),
  Ay = Symbol.for('react.fragment'),
  Ry = Symbol.for('react.strict_mode'),
  Dy = Symbol.for('react.profiler'),
  jy = Symbol.for('react.provider'),
  By = Symbol.for('react.context'),
  Fy = Symbol.for('react.forward_ref'),
  $y = Symbol.for('react.suspense'),
  Zy = Symbol.for('react.memo'),
  Hy = Symbol.for('react.lazy'),
  Bf = Symbol.iterator
function qy(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Bf && e[Bf]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var jp = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  Bp = Object.assign,
  Fp = {}
function lr(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = Fp),
    (this.updater = n || jp)
}
lr.prototype.isReactComponent = {}
lr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
lr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function $p() {}
$p.prototype = lr.prototype
function yc(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = Fp),
    (this.updater = n || jp)
}
var wc = (yc.prototype = new $p())
wc.constructor = yc
Bp(wc, lr.prototype)
wc.isPureReactComponent = !0
var Ff = Array.isArray,
  Zp = Object.prototype.hasOwnProperty,
  Sc = { current: null },
  Hp = { key: !0, ref: !0, __self: !0, __source: !0 }
function qp(e, t, n) {
  var r,
    o = {},
    a = null,
    u = null
  if (t != null)
    for (r in (t.ref !== void 0 && (u = t.ref),
    t.key !== void 0 && (a = '' + t.key),
    t))
      Zp.call(t, r) && !Hp.hasOwnProperty(r) && (o[r] = t[r])
  var d = arguments.length - 2
  if (d === 1) o.children = n
  else if (1 < d) {
    for (var c = Array(d), p = 0; p < d; p++) c[p] = arguments[p + 2]
    o.children = c
  }
  if (e && e.defaultProps)
    for (r in ((d = e.defaultProps), d)) o[r] === void 0 && (o[r] = d[r])
  return { $$typeof: Eo, type: e, key: a, ref: u, props: o, _owner: Sc.current }
}
function Vy(e, t) {
  return {
    $$typeof: Eo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner
  }
}
function xc(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Eo
}
function Wy(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var $f = /\/+/g
function xl(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Wy('' + e.key)
    : t.toString(36)
}
function Es(e, t, n, r, o) {
  var a = typeof e
  ;(a === 'undefined' || a === 'boolean') && (e = null)
  var u = !1
  if (e === null) u = !0
  else
    switch (a) {
      case 'string':
      case 'number':
        u = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case Eo:
          case Ny:
            u = !0
        }
    }
  if (u)
    return (
      (u = e),
      (o = o(u)),
      (e = r === '' ? '.' + xl(u, 0) : r),
      Ff(o)
        ? ((n = ''),
          e != null && (n = e.replace($f, '$&/') + '/'),
          Es(o, t, n, '', function (p) {
            return p
          }))
        : o != null &&
          (xc(o) &&
            (o = Vy(
              o,
              n +
                (!o.key || (u && u.key === o.key)
                  ? ''
                  : ('' + o.key).replace($f, '$&/') + '/') +
                e
            )),
          t.push(o)),
      1
    )
  if (((u = 0), (r = r === '' ? '.' : r + ':'), Ff(e)))
    for (var d = 0; d < e.length; d++) {
      a = e[d]
      var c = r + xl(a, d)
      u += Es(a, t, n, c, o)
    }
  else if (((c = qy(e)), typeof c == 'function'))
    for (e = c.call(e), d = 0; !(a = e.next()).done; )
      (a = a.value), (c = r + xl(a, d++)), (u += Es(a, t, n, c, o))
  else if (a === 'object')
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
  return u
}
function es(e, t, n) {
  if (e == null) return e
  var r = [],
    o = 0
  return (
    Es(e, r, '', '', function (a) {
      return t.call(n, a, o++)
    }),
    r
  )
}
function Uy(e) {
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
var Xe = { current: null },
  Ps = { transition: null },
  Gy = {
    ReactCurrentDispatcher: Xe,
    ReactCurrentBatchConfig: Ps,
    ReactCurrentOwner: Sc
  }
function Vp() {
  throw Error('act(...) is not supported in production builds of React.')
}
ue.Children = {
  map: es,
  forEach: function (e, t, n) {
    es(
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
      es(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      es(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!xc(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      )
    return e
  }
}
ue.Component = lr
ue.Fragment = Ay
ue.Profiler = Dy
ue.PureComponent = yc
ue.StrictMode = Ry
ue.Suspense = $y
ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gy
ue.act = Vp
ue.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    )
  var r = Bp({}, e.props),
    o = e.key,
    a = e.ref,
    u = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((a = t.ref), (u = Sc.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var d = e.type.defaultProps
    for (c in t)
      Zp.call(t, c) &&
        !Hp.hasOwnProperty(c) &&
        (r[c] = t[c] === void 0 && d !== void 0 ? d[c] : t[c])
  }
  var c = arguments.length - 2
  if (c === 1) r.children = n
  else if (1 < c) {
    d = Array(c)
    for (var p = 0; p < c; p++) d[p] = arguments[p + 2]
    r.children = d
  }
  return { $$typeof: Eo, type: e.type, key: o, ref: a, props: r, _owner: u }
}
ue.createContext = function (e) {
  return (
    (e = {
      $$typeof: By,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }),
    (e.Provider = { $$typeof: jy, _context: e }),
    (e.Consumer = e)
  )
}
ue.createElement = qp
ue.createFactory = function (e) {
  var t = qp.bind(null, e)
  return (t.type = e), t
}
ue.createRef = function () {
  return { current: null }
}
ue.forwardRef = function (e) {
  return { $$typeof: Fy, render: e }
}
ue.isValidElement = xc
ue.lazy = function (e) {
  return { $$typeof: Hy, _payload: { _status: -1, _result: e }, _init: Uy }
}
ue.memo = function (e, t) {
  return { $$typeof: Zy, type: e, compare: t === void 0 ? null : t }
}
ue.startTransition = function (e) {
  var t = Ps.transition
  Ps.transition = {}
  try {
    e()
  } finally {
    Ps.transition = t
  }
}
ue.unstable_act = Vp
ue.useCallback = function (e, t) {
  return Xe.current.useCallback(e, t)
}
ue.useContext = function (e) {
  return Xe.current.useContext(e)
}
ue.useDebugValue = function () {}
ue.useDeferredValue = function (e) {
  return Xe.current.useDeferredValue(e)
}
ue.useEffect = function (e, t) {
  return Xe.current.useEffect(e, t)
}
ue.useId = function () {
  return Xe.current.useId()
}
ue.useImperativeHandle = function (e, t, n) {
  return Xe.current.useImperativeHandle(e, t, n)
}
ue.useInsertionEffect = function (e, t) {
  return Xe.current.useInsertionEffect(e, t)
}
ue.useLayoutEffect = function (e, t) {
  return Xe.current.useLayoutEffect(e, t)
}
ue.useMemo = function (e, t) {
  return Xe.current.useMemo(e, t)
}
ue.useReducer = function (e, t, n) {
  return Xe.current.useReducer(e, t, n)
}
ue.useRef = function (e) {
  return Xe.current.useRef(e)
}
ue.useState = function (e) {
  return Xe.current.useState(e)
}
ue.useSyncExternalStore = function (e, t, n) {
  return Xe.current.useSyncExternalStore(e, t, n)
}
ue.useTransition = function () {
  return Xe.current.useTransition()
}
ue.version = '18.3.1'
Dp.exports = ue
var H = Dp.exports
const Se = zy(H),
  Zf = Oy({ __proto__: null, default: Se }, [H])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qy = H,
  Ky = Symbol.for('react.element'),
  Yy = Symbol.for('react.fragment'),
  Xy = Object.prototype.hasOwnProperty,
  Jy = Qy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  e0 = { key: !0, ref: !0, __self: !0, __source: !0 }
function Wp(e, t, n) {
  var r,
    o = {},
    a = null,
    u = null
  n !== void 0 && (a = '' + n),
    t.key !== void 0 && (a = '' + t.key),
    t.ref !== void 0 && (u = t.ref)
  for (r in t) Xy.call(t, r) && !e0.hasOwnProperty(r) && (o[r] = t[r])
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r])
  return { $$typeof: Ky, type: e, key: a, ref: u, props: o, _owner: Jy.current }
}
wa.Fragment = Yy
wa.jsx = Wp
wa.jsxs = Wp
Rp.exports = wa
var N = Rp.exports,
  Up = { exports: {} },
  mt = {},
  Gp = { exports: {} },
  Qp = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(D, U) {
    var $ = D.length
    D.push(U)
    e: for (; 0 < $; ) {
      var Q = ($ - 1) >>> 1,
        te = D[Q]
      if (0 < o(te, U)) (D[Q] = U), (D[$] = te), ($ = Q)
      else break e
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0]
  }
  function r(D) {
    if (D.length === 0) return null
    var U = D[0],
      $ = D.pop()
    if ($ !== U) {
      D[0] = $
      e: for (var Q = 0, te = D.length, ce = te >>> 1; Q < ce; ) {
        var ie = 2 * (Q + 1) - 1,
          se = D[ie],
          re = ie + 1,
          et = D[re]
        if (0 > o(se, $))
          re < te && 0 > o(et, se)
            ? ((D[Q] = et), (D[re] = $), (Q = re))
            : ((D[Q] = se), (D[ie] = $), (Q = ie))
        else if (re < te && 0 > o(et, $)) (D[Q] = et), (D[re] = $), (Q = re)
        else break e
      }
    }
    return U
  }
  function o(D, U) {
    var $ = D.sortIndex - U.sortIndex
    return $ !== 0 ? $ : D.id - U.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var a = performance
    e.unstable_now = function () {
      return a.now()
    }
  } else {
    var u = Date,
      d = u.now()
    e.unstable_now = function () {
      return u.now() - d
    }
  }
  var c = [],
    p = [],
    m = 1,
    y = null,
    g = 3,
    w = !1,
    T = !1,
    E = !1,
    k = typeof setTimeout == 'function' ? setTimeout : null,
    S = typeof clearTimeout == 'function' ? clearTimeout : null,
    v = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function _(D) {
    for (var U = n(p); U !== null; ) {
      if (U.callback === null) r(p)
      else if (U.startTime <= D) r(p), (U.sortIndex = U.expirationTime), t(c, U)
      else break
      U = n(p)
    }
  }
  function P(D) {
    if (((E = !1), _(D), !T))
      if (n(c) !== null) (T = !0), X(C)
      else {
        var U = n(p)
        U !== null && pe(P, U.startTime - D)
      }
  }
  function C(D, U) {
    ;(T = !1), E && ((E = !1), S(O), (O = -1)), (w = !0)
    var $ = g
    try {
      for (
        _(U), y = n(c);
        y !== null && (!(y.expirationTime > U) || (D && !R()));

      ) {
        var Q = y.callback
        if (typeof Q == 'function') {
          ;(y.callback = null), (g = y.priorityLevel)
          var te = Q(y.expirationTime <= U)
          ;(U = e.unstable_now()),
            typeof te == 'function' ? (y.callback = te) : y === n(c) && r(c),
            _(U)
        } else r(c)
        y = n(c)
      }
      if (y !== null) var ce = !0
      else {
        var ie = n(p)
        ie !== null && pe(P, ie.startTime - U), (ce = !1)
      }
      return ce
    } finally {
      ;(y = null), (g = $), (w = !1)
    }
  }
  var b = !1,
    M = null,
    O = -1,
    A = 5,
    z = -1
  function R() {
    return !(e.unstable_now() - z < A)
  }
  function F() {
    if (M !== null) {
      var D = e.unstable_now()
      z = D
      var U = !0
      try {
        U = M(!0, D)
      } finally {
        U ? Z() : ((b = !1), (M = null))
      }
    } else b = !1
  }
  var Z
  if (typeof v == 'function')
    Z = function () {
      v(F)
    }
  else if (typeof MessageChannel < 'u') {
    var V = new MessageChannel(),
      Y = V.port2
    ;(V.port1.onmessage = F),
      (Z = function () {
        Y.postMessage(null)
      })
  } else
    Z = function () {
      k(F, 0)
    }
  function X(D) {
    ;(M = D), b || ((b = !0), Z())
  }
  function pe(D, U) {
    O = k(function () {
      D(e.unstable_now())
    }, U)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (D) {
      D.callback = null
    }),
    (e.unstable_continueExecution = function () {
      T || w || ((T = !0), X(C))
    }),
    (e.unstable_forceFrameRate = function (D) {
      0 > D || 125 < D
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (A = 0 < D ? Math.floor(1e3 / D) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return g
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c)
    }),
    (e.unstable_next = function (D) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var U = 3
          break
        default:
          U = g
      }
      var $ = g
      g = U
      try {
        return D()
      } finally {
        g = $
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (D, U) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          D = 3
      }
      var $ = g
      g = D
      try {
        return U()
      } finally {
        g = $
      }
    }),
    (e.unstable_scheduleCallback = function (D, U, $) {
      var Q = e.unstable_now()
      switch (
        (typeof $ == 'object' && $ !== null
          ? (($ = $.delay), ($ = typeof $ == 'number' && 0 < $ ? Q + $ : Q))
          : ($ = Q),
        D)
      ) {
        case 1:
          var te = -1
          break
        case 2:
          te = 250
          break
        case 5:
          te = 1073741823
          break
        case 4:
          te = 1e4
          break
        default:
          te = 5e3
      }
      return (
        (te = $ + te),
        (D = {
          id: m++,
          callback: U,
          priorityLevel: D,
          startTime: $,
          expirationTime: te,
          sortIndex: -1
        }),
        $ > Q
          ? ((D.sortIndex = $),
            t(p, D),
            n(c) === null &&
              D === n(p) &&
              (E ? (S(O), (O = -1)) : (E = !0), pe(P, $ - Q)))
          : ((D.sortIndex = te), t(c, D), T || w || ((T = !0), X(C))),
        D
      )
    }),
    (e.unstable_shouldYield = R),
    (e.unstable_wrapCallback = function (D) {
      var U = g
      return function () {
        var $ = g
        g = U
        try {
          return D.apply(this, arguments)
        } finally {
          g = $
        }
      }
    })
})(Qp)
Gp.exports = Qp
var t0 = Gp.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var n0 = H,
  ht = t0
function W(e) {
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
var Kp = new Set(),
  eo = {}
function _i(e, t) {
  er(e, t), er(e + 'Capture', t)
}
function er(e, t) {
  for (eo[e] = t, e = 0; e < t.length; e++) Kp.add(t[e])
}
var dn = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  uu = Object.prototype.hasOwnProperty,
  i0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Hf = {},
  qf = {}
function r0(e) {
  return uu.call(qf, e)
    ? !0
    : uu.call(Hf, e)
    ? !1
    : i0.test(e)
    ? (qf[e] = !0)
    : ((Hf[e] = !0), !1)
}
function o0(e, t, n, r) {
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
function s0(e, t, n, r) {
  if (t === null || typeof t > 'u' || o0(e, t, n, r)) return !0
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
function Je(e, t, n, r, o, a, u) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = u)
}
var He = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    He[e] = new Je(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv']
].forEach(function (e) {
  var t = e[0]
  He[t] = new Je(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  He[e] = new Je(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha'
].forEach(function (e) {
  He[e] = new Je(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    He[e] = new Je(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  He[e] = new Je(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  He[e] = new Je(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  He[e] = new Je(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  He[e] = new Je(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var Tc = /[\-:]([a-z])/g
function Ec(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Tc, Ec)
    He[t] = new Je(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Tc, Ec)
    He[t] = new Je(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Tc, Ec)
  He[t] = new Je(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  He[e] = new Je(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
He.xlinkHref = new Je(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  He[e] = new Je(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function Pc(e, t, n, r) {
  var o = He.hasOwnProperty(t) ? He[t] : null
  ;(o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (s0(t, n, o, r) && (n = null),
    r || o === null
      ? r0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var vn = n0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ts = Symbol.for('react.element'),
  Ni = Symbol.for('react.portal'),
  Ai = Symbol.for('react.fragment'),
  Cc = Symbol.for('react.strict_mode'),
  cu = Symbol.for('react.profiler'),
  Yp = Symbol.for('react.provider'),
  Xp = Symbol.for('react.context'),
  Lc = Symbol.for('react.forward_ref'),
  du = Symbol.for('react.suspense'),
  fu = Symbol.for('react.suspense_list'),
  kc = Symbol.for('react.memo'),
  Tn = Symbol.for('react.lazy'),
  Jp = Symbol.for('react.offscreen'),
  Vf = Symbol.iterator
function Pr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Vf && e[Vf]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var Ce = Object.assign,
  Tl
function Ar(e) {
  if (Tl === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      Tl = (t && t[1]) || ''
    }
  return (
    `
` +
    Tl +
    e
  )
}
var El = !1
function Pl(e, t) {
  if (!e || El) return ''
  El = !0
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
        } catch (p) {
          var r = p
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (p) {
          r = p
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (p) {
        r = p
      }
      e()
    }
  } catch (p) {
    if (p && r && typeof p.stack == 'string') {
      for (
        var o = p.stack.split(`
`),
          a = r.stack.split(`
`),
          u = o.length - 1,
          d = a.length - 1;
        1 <= u && 0 <= d && o[u] !== a[d];

      )
        d--
      for (; 1 <= u && 0 <= d; u--, d--)
        if (o[u] !== a[d]) {
          if (u !== 1 || d !== 1)
            do
              if ((u--, d--, 0 > d || o[u] !== a[d])) {
                var c =
                  `
` + o[u].replace(' at new ', ' at ')
                return (
                  e.displayName &&
                    c.includes('<anonymous>') &&
                    (c = c.replace('<anonymous>', e.displayName)),
                  c
                )
              }
            while (1 <= u && 0 <= d)
          break
        }
    }
  } finally {
    ;(El = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? Ar(e) : ''
}
function a0(e) {
  switch (e.tag) {
    case 5:
      return Ar(e.type)
    case 16:
      return Ar('Lazy')
    case 13:
      return Ar('Suspense')
    case 19:
      return Ar('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = Pl(e.type, !1)), e
    case 11:
      return (e = Pl(e.type.render, !1)), e
    case 1:
      return (e = Pl(e.type, !0)), e
    default:
      return ''
  }
}
function hu(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case Ai:
      return 'Fragment'
    case Ni:
      return 'Portal'
    case cu:
      return 'Profiler'
    case Cc:
      return 'StrictMode'
    case du:
      return 'Suspense'
    case fu:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Xp:
        return (e.displayName || 'Context') + '.Consumer'
      case Yp:
        return (e._context.displayName || 'Context') + '.Provider'
      case Lc:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case kc:
        return (
          (t = e.displayName || null), t !== null ? t : hu(e.type) || 'Memo'
        )
      case Tn:
        ;(t = e._payload), (e = e._init)
        try {
          return hu(e(t))
        } catch {}
    }
  return null
}
function l0(e) {
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
      return hu(t)
    case 8:
      return t === Cc ? 'StrictMode' : 'Mode'
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
function Fn(e) {
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
function em(e) {
  var t = e.type
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  )
}
function u0(e) {
  var t = em(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var o = n.get,
      a = n.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this)
        },
        set: function (u) {
          ;(r = '' + u), a.call(this, u)
        }
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r
        },
        setValue: function (u) {
          r = '' + u
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        }
      }
    )
  }
}
function ns(e) {
  e._valueTracker || (e._valueTracker = u0(e))
}
function tm(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ''
  return (
    e && (r = em(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function $s(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function pu(e, t) {
  var n = t.checked
  return Ce({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked
  })
}
function Wf(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;(n = Fn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null
    })
}
function nm(e, t) {
  ;(t = t.checked), t != null && Pc(e, 'checked', t, !1)
}
function mu(e, t) {
  nm(e, t)
  var n = Fn(t.value),
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
    ? gu(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && gu(e, t.type, Fn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function Uf(e, t, n) {
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
function gu(e, t, n) {
  ;(t !== 'number' || $s(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var Rr = Array.isArray
function Wi(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + Fn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ;(e[o].selected = !0), r && (e[o].defaultSelected = !0)
        return
      }
      t !== null || e[o].disabled || (t = e[o])
    }
    t !== null && (t.selected = !0)
  }
}
function vu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(W(91))
  return Ce({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue
  })
}
function Gf(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(W(92))
      if (Rr(n)) {
        if (1 < n.length) throw Error(W(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: Fn(n) }
}
function im(e, t) {
  var n = Fn(t.value),
    r = Fn(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r)
}
function Qf(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function rm(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function _u(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? rm(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e
}
var is,
  om = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t
    else {
      for (
        is = is || document.createElement('div'),
          is.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = is.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function to(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var Fr = {
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
  c0 = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(Fr).forEach(function (e) {
  c0.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Fr[t] = Fr[e])
  })
})
function sm(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Fr.hasOwnProperty(e) && Fr[e])
    ? ('' + t).trim()
    : t + 'px'
}
function am(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = sm(n, t[n], r)
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o)
    }
}
var d0 = Ce(
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
function yu(e, t) {
  if (t) {
    if (d0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(W(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(W(60))
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(W(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(W(62))
  }
}
function wu(e, t) {
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
var Su = null
function Mc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var xu = null,
  Ui = null,
  Gi = null
function Kf(e) {
  if ((e = Lo(e))) {
    if (typeof xu != 'function') throw Error(W(280))
    var t = e.stateNode
    t && ((t = Pa(t)), xu(e.stateNode, e.type, t))
  }
}
function lm(e) {
  Ui ? (Gi ? Gi.push(e) : (Gi = [e])) : (Ui = e)
}
function um() {
  if (Ui) {
    var e = Ui,
      t = Gi
    if (((Gi = Ui = null), Kf(e), t)) for (e = 0; e < t.length; e++) Kf(t[e])
  }
}
function cm(e, t) {
  return e(t)
}
function dm() {}
var Cl = !1
function fm(e, t, n) {
  if (Cl) return e(t, n)
  Cl = !0
  try {
    return cm(e, t, n)
  } finally {
    ;(Cl = !1), (Ui !== null || Gi !== null) && (dm(), um())
  }
}
function no(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = Pa(n)
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
  if (n && typeof n != 'function') throw Error(W(231, t, typeof n))
  return n
}
var Tu = !1
if (dn)
  try {
    var Cr = {}
    Object.defineProperty(Cr, 'passive', {
      get: function () {
        Tu = !0
      }
    }),
      window.addEventListener('test', Cr, Cr),
      window.removeEventListener('test', Cr, Cr)
  } catch {
    Tu = !1
  }
function f0(e, t, n, r, o, a, u, d, c) {
  var p = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, p)
  } catch (m) {
    this.onError(m)
  }
}
var $r = !1,
  Zs = null,
  Hs = !1,
  Eu = null,
  h0 = {
    onError: function (e) {
      ;($r = !0), (Zs = e)
    }
  }
function p0(e, t, n, r, o, a, u, d, c) {
  ;($r = !1), (Zs = null), f0.apply(h0, arguments)
}
function m0(e, t, n, r, o, a, u, d, c) {
  if ((p0.apply(this, arguments), $r)) {
    if ($r) {
      var p = Zs
      ;($r = !1), (Zs = null)
    } else throw Error(W(198))
    Hs || ((Hs = !0), (Eu = p))
  }
}
function yi(e) {
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
function hm(e) {
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
function Yf(e) {
  if (yi(e) !== e) throw Error(W(188))
}
function g0(e) {
  var t = e.alternate
  if (!t) {
    if (((t = yi(e)), t === null)) throw Error(W(188))
    return t !== e ? null : e
  }
  for (var n = e, r = t; ; ) {
    var o = n.return
    if (o === null) break
    var a = o.alternate
    if (a === null) {
      if (((r = o.return), r !== null)) {
        n = r
        continue
      }
      break
    }
    if (o.child === a.child) {
      for (a = o.child; a; ) {
        if (a === n) return Yf(o), e
        if (a === r) return Yf(o), t
        a = a.sibling
      }
      throw Error(W(188))
    }
    if (n.return !== r.return) (n = o), (r = a)
    else {
      for (var u = !1, d = o.child; d; ) {
        if (d === n) {
          ;(u = !0), (n = o), (r = a)
          break
        }
        if (d === r) {
          ;(u = !0), (r = o), (n = a)
          break
        }
        d = d.sibling
      }
      if (!u) {
        for (d = a.child; d; ) {
          if (d === n) {
            ;(u = !0), (n = a), (r = o)
            break
          }
          if (d === r) {
            ;(u = !0), (r = a), (n = o)
            break
          }
          d = d.sibling
        }
        if (!u) throw Error(W(189))
      }
    }
    if (n.alternate !== r) throw Error(W(190))
  }
  if (n.tag !== 3) throw Error(W(188))
  return n.stateNode.current === n ? e : t
}
function pm(e) {
  return (e = g0(e)), e !== null ? mm(e) : null
}
function mm(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = mm(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var gm = ht.unstable_scheduleCallback,
  Xf = ht.unstable_cancelCallback,
  v0 = ht.unstable_shouldYield,
  _0 = ht.unstable_requestPaint,
  Me = ht.unstable_now,
  y0 = ht.unstable_getCurrentPriorityLevel,
  bc = ht.unstable_ImmediatePriority,
  vm = ht.unstable_UserBlockingPriority,
  qs = ht.unstable_NormalPriority,
  w0 = ht.unstable_LowPriority,
  _m = ht.unstable_IdlePriority,
  Sa = null,
  Ut = null
function S0(e) {
  if (Ut && typeof Ut.onCommitFiberRoot == 'function')
    try {
      Ut.onCommitFiberRoot(Sa, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var At = Math.clz32 ? Math.clz32 : E0,
  x0 = Math.log,
  T0 = Math.LN2
function E0(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((x0(e) / T0) | 0)) | 0
}
var rs = 64,
  os = 4194304
function Dr(e) {
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
function Vs(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var r = 0,
    o = e.suspendedLanes,
    a = e.pingedLanes,
    u = n & 268435455
  if (u !== 0) {
    var d = u & ~o
    d !== 0 ? (r = Dr(d)) : ((a &= u), a !== 0 && (r = Dr(a)))
  } else (u = n & ~o), u !== 0 ? (r = Dr(u)) : a !== 0 && (r = Dr(a))
  if (r === 0) return 0
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (a = t & -t), o >= a || (o === 16 && (a & 4194240) !== 0))
  )
    return t
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - At(t)), (o = 1 << n), (r |= e[n]), (t &= ~o)
  return r
}
function P0(e, t) {
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
function C0(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      a = e.pendingLanes;
    0 < a;

  ) {
    var u = 31 - At(a),
      d = 1 << u,
      c = o[u]
    c === -1
      ? (!(d & n) || d & r) && (o[u] = P0(d, t))
      : c <= t && (e.expiredLanes |= d),
      (a &= ~d)
  }
}
function Pu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  )
}
function ym() {
  var e = rs
  return (rs <<= 1), !(rs & 4194240) && (rs = 64), e
}
function Ll(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function Po(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - At(t)),
    (e[t] = n)
}
function L0(e, t) {
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
    var o = 31 - At(n),
      a = 1 << o
    ;(t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~a)
  }
}
function Oc(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var r = 31 - At(n),
      o = 1 << r
    ;(o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o)
  }
}
var ge = 0
function wm(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var Sm,
  Ic,
  xm,
  Tm,
  Em,
  Cu = !1,
  ss = [],
  In = null,
  zn = null,
  Nn = null,
  io = new Map(),
  ro = new Map(),
  Cn = [],
  k0 =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function Jf(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      In = null
      break
    case 'dragenter':
    case 'dragleave':
      zn = null
      break
    case 'mouseover':
    case 'mouseout':
      Nn = null
      break
    case 'pointerover':
    case 'pointerout':
      io.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      ro.delete(t.pointerId)
  }
}
function Lr(e, t, n, r, o, a) {
  return e === null || e.nativeEvent !== a
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: a,
        targetContainers: [o]
      }),
      t !== null && ((t = Lo(t)), t !== null && Ic(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e)
}
function M0(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (In = Lr(In, e, t, n, r, o)), !0
    case 'dragenter':
      return (zn = Lr(zn, e, t, n, r, o)), !0
    case 'mouseover':
      return (Nn = Lr(Nn, e, t, n, r, o)), !0
    case 'pointerover':
      var a = o.pointerId
      return io.set(a, Lr(io.get(a) || null, e, t, n, r, o)), !0
    case 'gotpointercapture':
      return (
        (a = o.pointerId), ro.set(a, Lr(ro.get(a) || null, e, t, n, r, o)), !0
      )
  }
  return !1
}
function Pm(e) {
  var t = ni(e.target)
  if (t !== null) {
    var n = yi(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = hm(n)), t !== null)) {
          ;(e.blockedOn = t),
            Em(e.priority, function () {
              xm(n)
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
function Cs(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Lu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(Su = r), n.target.dispatchEvent(r), (Su = null)
    } else return (t = Lo(n)), t !== null && Ic(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function eh(e, t, n) {
  Cs(e) && n.delete(t)
}
function b0() {
  ;(Cu = !1),
    In !== null && Cs(In) && (In = null),
    zn !== null && Cs(zn) && (zn = null),
    Nn !== null && Cs(Nn) && (Nn = null),
    io.forEach(eh),
    ro.forEach(eh)
}
function kr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Cu ||
      ((Cu = !0), ht.unstable_scheduleCallback(ht.unstable_NormalPriority, b0)))
}
function oo(e) {
  function t(o) {
    return kr(o, e)
  }
  if (0 < ss.length) {
    kr(ss[0], e)
    for (var n = 1; n < ss.length; n++) {
      var r = ss[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    In !== null && kr(In, e),
      zn !== null && kr(zn, e),
      Nn !== null && kr(Nn, e),
      io.forEach(t),
      ro.forEach(t),
      n = 0;
    n < Cn.length;
    n++
  )
    (r = Cn[n]), r.blockedOn === e && (r.blockedOn = null)
  for (; 0 < Cn.length && ((n = Cn[0]), n.blockedOn === null); )
    Pm(n), n.blockedOn === null && Cn.shift()
}
var Qi = vn.ReactCurrentBatchConfig,
  Ws = !0
function O0(e, t, n, r) {
  var o = ge,
    a = Qi.transition
  Qi.transition = null
  try {
    ;(ge = 1), zc(e, t, n, r)
  } finally {
    ;(ge = o), (Qi.transition = a)
  }
}
function I0(e, t, n, r) {
  var o = ge,
    a = Qi.transition
  Qi.transition = null
  try {
    ;(ge = 4), zc(e, t, n, r)
  } finally {
    ;(ge = o), (Qi.transition = a)
  }
}
function zc(e, t, n, r) {
  if (Ws) {
    var o = Lu(e, t, n, r)
    if (o === null) Dl(e, t, r, Us, n), Jf(e, r)
    else if (M0(o, e, t, n, r)) r.stopPropagation()
    else if ((Jf(e, r), t & 4 && -1 < k0.indexOf(e))) {
      for (; o !== null; ) {
        var a = Lo(o)
        if (
          (a !== null && Sm(a),
          (a = Lu(e, t, n, r)),
          a === null && Dl(e, t, r, Us, n),
          a === o)
        )
          break
        o = a
      }
      o !== null && r.stopPropagation()
    } else Dl(e, t, r, null, n)
  }
}
var Us = null
function Lu(e, t, n, r) {
  if (((Us = null), (e = Mc(r)), (e = ni(e)), e !== null))
    if (((t = yi(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = hm(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (Us = e), null
}
function Cm(e) {
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
      switch (y0()) {
        case bc:
          return 1
        case vm:
          return 4
        case qs:
        case w0:
          return 16
        case _m:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var Mn = null,
  Nc = null,
  Ls = null
function Lm() {
  if (Ls) return Ls
  var e,
    t = Nc,
    n = t.length,
    r,
    o = 'value' in Mn ? Mn.value : Mn.textContent,
    a = o.length
  for (e = 0; e < n && t[e] === o[e]; e++);
  var u = n - e
  for (r = 1; r <= u && t[n - r] === o[a - r]; r++);
  return (Ls = o.slice(e, 1 < r ? 1 - r : void 0))
}
function ks(e) {
  var t = e.keyCode
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function as() {
  return !0
}
function th() {
  return !1
}
function gt(e) {
  function t(n, r, o, a, u) {
    ;(this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = a),
      (this.target = u),
      (this.currentTarget = null)
    for (var d in e)
      e.hasOwnProperty(d) && ((n = e[d]), (this[d] = n ? n(a) : a[d]))
    return (
      (this.isDefaultPrevented = (
        a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
      )
        ? as
        : th),
      (this.isPropagationStopped = th),
      this
    )
  }
  return (
    Ce(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = as))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = as))
      },
      persist: function () {},
      isPersistent: as
    }),
    t
  )
}
var ur = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  Ac = gt(ur),
  Co = Ce({}, ur, { view: 0, detail: 0 }),
  z0 = gt(Co),
  kl,
  Ml,
  Mr,
  xa = Ce({}, Co, {
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
    getModifierState: Rc,
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
        : (e !== Mr &&
            (Mr && e.type === 'mousemove'
              ? ((kl = e.screenX - Mr.screenX), (Ml = e.screenY - Mr.screenY))
              : (Ml = kl = 0),
            (Mr = e)),
          kl)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Ml
    }
  }),
  nh = gt(xa),
  N0 = Ce({}, xa, { dataTransfer: 0 }),
  A0 = gt(N0),
  R0 = Ce({}, Co, { relatedTarget: 0 }),
  bl = gt(R0),
  D0 = Ce({}, ur, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  j0 = gt(D0),
  B0 = Ce({}, ur, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    }
  }),
  F0 = gt(B0),
  $0 = Ce({}, ur, { data: 0 }),
  ih = gt($0),
  Z0 = {
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
  H0 = {
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
  q0 = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function V0(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = q0[e]) ? !!t[e] : !1
}
function Rc() {
  return V0
}
var W0 = Ce({}, Co, {
    key: function (e) {
      if (e.key) {
        var t = Z0[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = ks(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? H0[e.keyCode] || 'Unidentified'
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
    getModifierState: Rc,
    charCode: function (e) {
      return e.type === 'keypress' ? ks(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? ks(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0
    }
  }),
  U0 = gt(W0),
  G0 = Ce({}, xa, {
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
  rh = gt(G0),
  Q0 = Ce({}, Co, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Rc
  }),
  K0 = gt(Q0),
  Y0 = Ce({}, ur, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  X0 = gt(Y0),
  J0 = Ce({}, xa, {
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
  e1 = gt(J0),
  t1 = [9, 13, 27, 32],
  Dc = dn && 'CompositionEvent' in window,
  Zr = null
dn && 'documentMode' in document && (Zr = document.documentMode)
var n1 = dn && 'TextEvent' in window && !Zr,
  km = dn && (!Dc || (Zr && 8 < Zr && 11 >= Zr)),
  oh = ' ',
  sh = !1
function Mm(e, t) {
  switch (e) {
    case 'keyup':
      return t1.indexOf(t.keyCode) !== -1
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
function bm(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var Ri = !1
function i1(e, t) {
  switch (e) {
    case 'compositionend':
      return bm(t)
    case 'keypress':
      return t.which !== 32 ? null : ((sh = !0), oh)
    case 'textInput':
      return (e = t.data), e === oh && sh ? null : e
    default:
      return null
  }
}
function r1(e, t) {
  if (Ri)
    return e === 'compositionend' || (!Dc && Mm(e, t))
      ? ((e = Lm()), (Ls = Nc = Mn = null), (Ri = !1), e)
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
      return km && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var o1 = {
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
function ah(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!o1[e.type] : t === 'textarea'
}
function Om(e, t, n, r) {
  lm(r),
    (t = Gs(t, 'onChange')),
    0 < t.length &&
      ((n = new Ac('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }))
}
var Hr = null,
  so = null
function s1(e) {
  Zm(e, 0)
}
function Ta(e) {
  var t = Bi(e)
  if (tm(t)) return e
}
function a1(e, t) {
  if (e === 'change') return t
}
var Im = !1
if (dn) {
  var Ol
  if (dn) {
    var Il = 'oninput' in document
    if (!Il) {
      var lh = document.createElement('div')
      lh.setAttribute('oninput', 'return;'),
        (Il = typeof lh.oninput == 'function')
    }
    Ol = Il
  } else Ol = !1
  Im = Ol && (!document.documentMode || 9 < document.documentMode)
}
function uh() {
  Hr && (Hr.detachEvent('onpropertychange', zm), (so = Hr = null))
}
function zm(e) {
  if (e.propertyName === 'value' && Ta(so)) {
    var t = []
    Om(t, so, e, Mc(e)), fm(s1, t)
  }
}
function l1(e, t, n) {
  e === 'focusin'
    ? (uh(), (Hr = t), (so = n), Hr.attachEvent('onpropertychange', zm))
    : e === 'focusout' && uh()
}
function u1(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Ta(so)
}
function c1(e, t) {
  if (e === 'click') return Ta(t)
}
function d1(e, t) {
  if (e === 'input' || e === 'change') return Ta(t)
}
function f1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var jt = typeof Object.is == 'function' ? Object.is : f1
function ao(e, t) {
  if (jt(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var o = n[r]
    if (!uu.call(t, o) || !jt(e[o], t[o])) return !1
  }
  return !0
}
function ch(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function dh(e, t) {
  var n = ch(e)
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
    n = ch(n)
  }
}
function Nm(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Nm(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1
}
function Am() {
  for (var e = window, t = $s(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = $s(e.document)
  }
  return t
}
function jc(e) {
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
function h1(e) {
  var t = Am(),
    n = e.focusedElem,
    r = e.selectionRange
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Nm(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && jc(n)) {
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
        var o = n.textContent.length,
          a = Math.min(r.start, o)
        ;(r = r.end === void 0 ? a : Math.min(r.end, o)),
          !e.extend && a > r && ((o = r), (r = a), (a = o)),
          (o = dh(n, a))
        var u = dh(n, r)
        o &&
          u &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== u.node ||
            e.focusOffset !== u.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          a > r
            ? (e.addRange(t), e.extend(u.node, u.offset))
            : (t.setEnd(u.node, u.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var p1 = dn && 'documentMode' in document && 11 >= document.documentMode,
  Di = null,
  ku = null,
  qr = null,
  Mu = !1
function fh(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  Mu ||
    Di == null ||
    Di !== $s(r) ||
    ((r = Di),
    'selectionStart' in r && jc(r)
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
    (qr && ao(qr, r)) ||
      ((qr = r),
      (r = Gs(ku, 'onSelect')),
      0 < r.length &&
        ((t = new Ac('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Di))))
}
function ls(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var ji = {
    animationend: ls('Animation', 'AnimationEnd'),
    animationiteration: ls('Animation', 'AnimationIteration'),
    animationstart: ls('Animation', 'AnimationStart'),
    transitionend: ls('Transition', 'TransitionEnd')
  },
  zl = {},
  Rm = {}
dn &&
  ((Rm = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete ji.animationend.animation,
    delete ji.animationiteration.animation,
    delete ji.animationstart.animation),
  'TransitionEvent' in window || delete ji.transitionend.transition)
function Ea(e) {
  if (zl[e]) return zl[e]
  if (!ji[e]) return e
  var t = ji[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in Rm) return (zl[e] = t[n])
  return e
}
var Dm = Ea('animationend'),
  jm = Ea('animationiteration'),
  Bm = Ea('animationstart'),
  Fm = Ea('transitionend'),
  $m = new Map(),
  hh =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function qn(e, t) {
  $m.set(e, t), _i(t, [e])
}
for (var Nl = 0; Nl < hh.length; Nl++) {
  var Al = hh[Nl],
    m1 = Al.toLowerCase(),
    g1 = Al[0].toUpperCase() + Al.slice(1)
  qn(m1, 'on' + g1)
}
qn(Dm, 'onAnimationEnd')
qn(jm, 'onAnimationIteration')
qn(Bm, 'onAnimationStart')
qn('dblclick', 'onDoubleClick')
qn('focusin', 'onFocus')
qn('focusout', 'onBlur')
qn(Fm, 'onTransitionEnd')
er('onMouseEnter', ['mouseout', 'mouseover'])
er('onMouseLeave', ['mouseout', 'mouseover'])
er('onPointerEnter', ['pointerout', 'pointerover'])
er('onPointerLeave', ['pointerout', 'pointerover'])
_i(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
)
_i(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
)
_i('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
_i(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
)
_i(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
)
_i(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
)
var jr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  v1 = new Set('cancel close invalid load scroll toggle'.split(' ').concat(jr))
function ph(e, t, n) {
  var r = e.type || 'unknown-event'
  ;(e.currentTarget = n), m0(r, t, void 0, e), (e.currentTarget = null)
}
function Zm(e, t) {
  t = (t & 4) !== 0
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event
    r = r.listeners
    e: {
      var a = void 0
      if (t)
        for (var u = r.length - 1; 0 <= u; u--) {
          var d = r[u],
            c = d.instance,
            p = d.currentTarget
          if (((d = d.listener), c !== a && o.isPropagationStopped())) break e
          ph(o, d, p), (a = c)
        }
      else
        for (u = 0; u < r.length; u++) {
          if (
            ((d = r[u]),
            (c = d.instance),
            (p = d.currentTarget),
            (d = d.listener),
            c !== a && o.isPropagationStopped())
          )
            break e
          ph(o, d, p), (a = c)
        }
    }
  }
  if (Hs) throw ((e = Eu), (Hs = !1), (Eu = null), e)
}
function ye(e, t) {
  var n = t[Nu]
  n === void 0 && (n = t[Nu] = new Set())
  var r = e + '__bubble'
  n.has(r) || (Hm(t, e, 2, !1), n.add(r))
}
function Rl(e, t, n) {
  var r = 0
  t && (r |= 4), Hm(n, e, r, t)
}
var us = '_reactListening' + Math.random().toString(36).slice(2)
function lo(e) {
  if (!e[us]) {
    ;(e[us] = !0),
      Kp.forEach(function (n) {
        n !== 'selectionchange' && (v1.has(n) || Rl(n, !1, e), Rl(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[us] || ((t[us] = !0), Rl('selectionchange', !1, t))
  }
}
function Hm(e, t, n, r) {
  switch (Cm(t)) {
    case 1:
      var o = O0
      break
    case 4:
      o = I0
      break
    default:
      o = zc
  }
  ;(n = o.bind(null, t, n, e)),
    (o = void 0),
    !Tu ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1)
}
function Dl(e, t, n, r, o) {
  var a = r
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return
      var u = r.tag
      if (u === 3 || u === 4) {
        var d = r.stateNode.containerInfo
        if (d === o || (d.nodeType === 8 && d.parentNode === o)) break
        if (u === 4)
          for (u = r.return; u !== null; ) {
            var c = u.tag
            if (
              (c === 3 || c === 4) &&
              ((c = u.stateNode.containerInfo),
              c === o || (c.nodeType === 8 && c.parentNode === o))
            )
              return
            u = u.return
          }
        for (; d !== null; ) {
          if (((u = ni(d)), u === null)) return
          if (((c = u.tag), c === 5 || c === 6)) {
            r = a = u
            continue e
          }
          d = d.parentNode
        }
      }
      r = r.return
    }
  fm(function () {
    var p = a,
      m = Mc(n),
      y = []
    e: {
      var g = $m.get(e)
      if (g !== void 0) {
        var w = Ac,
          T = e
        switch (e) {
          case 'keypress':
            if (ks(n) === 0) break e
          case 'keydown':
          case 'keyup':
            w = U0
            break
          case 'focusin':
            ;(T = 'focus'), (w = bl)
            break
          case 'focusout':
            ;(T = 'blur'), (w = bl)
            break
          case 'beforeblur':
          case 'afterblur':
            w = bl
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
            w = nh
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            w = A0
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            w = K0
            break
          case Dm:
          case jm:
          case Bm:
            w = j0
            break
          case Fm:
            w = X0
            break
          case 'scroll':
            w = z0
            break
          case 'wheel':
            w = e1
            break
          case 'copy':
          case 'cut':
          case 'paste':
            w = F0
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            w = rh
        }
        var E = (t & 4) !== 0,
          k = !E && e === 'scroll',
          S = E ? (g !== null ? g + 'Capture' : null) : g
        E = []
        for (var v = p, _; v !== null; ) {
          _ = v
          var P = _.stateNode
          if (
            (_.tag === 5 &&
              P !== null &&
              ((_ = P),
              S !== null && ((P = no(v, S)), P != null && E.push(uo(v, P, _)))),
            k)
          )
            break
          v = v.return
        }
        0 < E.length &&
          ((g = new w(g, T, null, n, m)), y.push({ event: g, listeners: E }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((g = e === 'mouseover' || e === 'pointerover'),
          (w = e === 'mouseout' || e === 'pointerout'),
          g &&
            n !== Su &&
            (T = n.relatedTarget || n.fromElement) &&
            (ni(T) || T[fn]))
        )
          break e
        if (
          (w || g) &&
          ((g =
            m.window === m
              ? m
              : (g = m.ownerDocument)
              ? g.defaultView || g.parentWindow
              : window),
          w
            ? ((T = n.relatedTarget || n.toElement),
              (w = p),
              (T = T ? ni(T) : null),
              T !== null &&
                ((k = yi(T)), T !== k || (T.tag !== 5 && T.tag !== 6)) &&
                (T = null))
            : ((w = null), (T = p)),
          w !== T)
        ) {
          if (
            ((E = nh),
            (P = 'onMouseLeave'),
            (S = 'onMouseEnter'),
            (v = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((E = rh),
              (P = 'onPointerLeave'),
              (S = 'onPointerEnter'),
              (v = 'pointer')),
            (k = w == null ? g : Bi(w)),
            (_ = T == null ? g : Bi(T)),
            (g = new E(P, v + 'leave', w, n, m)),
            (g.target = k),
            (g.relatedTarget = _),
            (P = null),
            ni(m) === p &&
              ((E = new E(S, v + 'enter', T, n, m)),
              (E.target = _),
              (E.relatedTarget = k),
              (P = E)),
            (k = P),
            w && T)
          )
            t: {
              for (E = w, S = T, v = 0, _ = E; _; _ = bi(_)) v++
              for (_ = 0, P = S; P; P = bi(P)) _++
              for (; 0 < v - _; ) (E = bi(E)), v--
              for (; 0 < _ - v; ) (S = bi(S)), _--
              for (; v--; ) {
                if (E === S || (S !== null && E === S.alternate)) break t
                ;(E = bi(E)), (S = bi(S))
              }
              E = null
            }
          else E = null
          w !== null && mh(y, g, w, E, !1),
            T !== null && k !== null && mh(y, k, T, E, !0)
        }
      }
      e: {
        if (
          ((g = p ? Bi(p) : window),
          (w = g.nodeName && g.nodeName.toLowerCase()),
          w === 'select' || (w === 'input' && g.type === 'file'))
        )
          var C = a1
        else if (ah(g))
          if (Im) C = d1
          else {
            C = u1
            var b = l1
          }
        else
          (w = g.nodeName) &&
            w.toLowerCase() === 'input' &&
            (g.type === 'checkbox' || g.type === 'radio') &&
            (C = c1)
        if (C && (C = C(e, p))) {
          Om(y, C, n, m)
          break e
        }
        b && b(e, g, p),
          e === 'focusout' &&
            (b = g._wrapperState) &&
            b.controlled &&
            g.type === 'number' &&
            gu(g, 'number', g.value)
      }
      switch (((b = p ? Bi(p) : window), e)) {
        case 'focusin':
          ;(ah(b) || b.contentEditable === 'true') &&
            ((Di = b), (ku = p), (qr = null))
          break
        case 'focusout':
          qr = ku = Di = null
          break
        case 'mousedown':
          Mu = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(Mu = !1), fh(y, n, m)
          break
        case 'selectionchange':
          if (p1) break
        case 'keydown':
        case 'keyup':
          fh(y, n, m)
      }
      var M
      if (Dc)
        e: {
          switch (e) {
            case 'compositionstart':
              var O = 'onCompositionStart'
              break e
            case 'compositionend':
              O = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              O = 'onCompositionUpdate'
              break e
          }
          O = void 0
        }
      else
        Ri
          ? Mm(e, n) && (O = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (O = 'onCompositionStart')
      O &&
        (km &&
          n.locale !== 'ko' &&
          (Ri || O !== 'onCompositionStart'
            ? O === 'onCompositionEnd' && Ri && (M = Lm())
            : ((Mn = m),
              (Nc = 'value' in Mn ? Mn.value : Mn.textContent),
              (Ri = !0))),
        (b = Gs(p, O)),
        0 < b.length &&
          ((O = new ih(O, e, null, n, m)),
          y.push({ event: O, listeners: b }),
          M ? (O.data = M) : ((M = bm(n)), M !== null && (O.data = M)))),
        (M = n1 ? i1(e, n) : r1(e, n)) &&
          ((p = Gs(p, 'onBeforeInput')),
          0 < p.length &&
            ((m = new ih('onBeforeInput', 'beforeinput', null, n, m)),
            y.push({ event: m, listeners: p }),
            (m.data = M)))
    }
    Zm(y, t)
  })
}
function uo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function Gs(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      a = o.stateNode
    o.tag === 5 &&
      a !== null &&
      ((o = a),
      (a = no(e, n)),
      a != null && r.unshift(uo(e, a, o)),
      (a = no(e, t)),
      a != null && r.push(uo(e, a, o))),
      (e = e.return)
  }
  return r
}
function bi(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function mh(e, t, n, r, o) {
  for (var a = t._reactName, u = []; n !== null && n !== r; ) {
    var d = n,
      c = d.alternate,
      p = d.stateNode
    if (c !== null && c === r) break
    d.tag === 5 &&
      p !== null &&
      ((d = p),
      o
        ? ((c = no(n, a)), c != null && u.unshift(uo(n, c, d)))
        : o || ((c = no(n, a)), c != null && u.push(uo(n, c, d)))),
      (n = n.return)
  }
  u.length !== 0 && e.push({ event: t, listeners: u })
}
var _1 = /\r\n?/g,
  y1 = /\u0000|\uFFFD/g
function gh(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      _1,
      `
`
    )
    .replace(y1, '')
}
function cs(e, t, n) {
  if (((t = gh(t)), gh(e) !== t && n)) throw Error(W(425))
}
function Qs() {}
var bu = null,
  Ou = null
function Iu(e, t) {
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
var zu = typeof setTimeout == 'function' ? setTimeout : void 0,
  w1 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  vh = typeof Promise == 'function' ? Promise : void 0,
  S1 =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof vh < 'u'
      ? function (e) {
          return vh.resolve(null).then(e).catch(x1)
        }
      : zu
function x1(e) {
  setTimeout(function () {
    throw e
  })
}
function jl(e, t) {
  var n = t,
    r = 0
  do {
    var o = n.nextSibling
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), oo(t)
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = o
  } while (n)
  oo(t)
}
function An(e) {
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
function _h(e) {
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
var cr = Math.random().toString(36).slice(2),
  Wt = '__reactFiber$' + cr,
  co = '__reactProps$' + cr,
  fn = '__reactContainer$' + cr,
  Nu = '__reactEvents$' + cr,
  T1 = '__reactListeners$' + cr,
  E1 = '__reactHandles$' + cr
function ni(e) {
  var t = e[Wt]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[fn] || n[Wt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = _h(e); e !== null; ) {
          if ((n = e[Wt])) return n
          e = _h(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function Lo(e) {
  return (
    (e = e[Wt] || e[fn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function Bi(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(W(33))
}
function Pa(e) {
  return e[co] || null
}
var Au = [],
  Fi = -1
function Vn(e) {
  return { current: e }
}
function we(e) {
  0 > Fi || ((e.current = Au[Fi]), (Au[Fi] = null), Fi--)
}
function _e(e, t) {
  Fi++, (Au[Fi] = e.current), (e.current = t)
}
var $n = {},
  Ue = Vn($n),
  rt = Vn(!1),
  ui = $n
function tr(e, t) {
  var n = e.type.contextTypes
  if (!n) return $n
  var r = e.stateNode
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext
  var o = {},
    a
  for (a in n) o[a] = t[a]
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  )
}
function ot(e) {
  return (e = e.childContextTypes), e != null
}
function Ks() {
  we(rt), we(Ue)
}
function yh(e, t, n) {
  if (Ue.current !== $n) throw Error(W(168))
  _e(Ue, t), _e(rt, n)
}
function qm(e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n
  r = r.getChildContext()
  for (var o in r) if (!(o in t)) throw Error(W(108, l0(e) || 'Unknown', o))
  return Ce({}, n, r)
}
function Ys(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || $n),
    (ui = Ue.current),
    _e(Ue, e),
    _e(rt, rt.current),
    !0
  )
}
function wh(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(W(169))
  n
    ? ((e = qm(e, t, ui)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      we(rt),
      we(Ue),
      _e(Ue, e))
    : we(rt),
    _e(rt, n)
}
var on = null,
  Ca = !1,
  Bl = !1
function Vm(e) {
  on === null ? (on = [e]) : on.push(e)
}
function P1(e) {
  ;(Ca = !0), Vm(e)
}
function Wn() {
  if (!Bl && on !== null) {
    Bl = !0
    var e = 0,
      t = ge
    try {
      var n = on
      for (ge = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(on = null), (Ca = !1)
    } catch (o) {
      throw (on !== null && (on = on.slice(e + 1)), gm(bc, Wn), o)
    } finally {
      ;(ge = t), (Bl = !1)
    }
  }
  return null
}
var $i = [],
  Zi = 0,
  Xs = null,
  Js = 0,
  St = [],
  xt = 0,
  ci = null,
  sn = 1,
  an = ''
function Jn(e, t) {
  ;($i[Zi++] = Js), ($i[Zi++] = Xs), (Xs = e), (Js = t)
}
function Wm(e, t, n) {
  ;(St[xt++] = sn), (St[xt++] = an), (St[xt++] = ci), (ci = e)
  var r = sn
  e = an
  var o = 32 - At(r) - 1
  ;(r &= ~(1 << o)), (n += 1)
  var a = 32 - At(t) + o
  if (30 < a) {
    var u = o - (o % 5)
    ;(a = (r & ((1 << u) - 1)).toString(32)),
      (r >>= u),
      (o -= u),
      (sn = (1 << (32 - At(t) + o)) | (n << o) | r),
      (an = a + e)
  } else (sn = (1 << a) | (n << o) | r), (an = e)
}
function Bc(e) {
  e.return !== null && (Jn(e, 1), Wm(e, 1, 0))
}
function Fc(e) {
  for (; e === Xs; )
    (Xs = $i[--Zi]), ($i[Zi] = null), (Js = $i[--Zi]), ($i[Zi] = null)
  for (; e === ci; )
    (ci = St[--xt]),
      (St[xt] = null),
      (an = St[--xt]),
      (St[xt] = null),
      (sn = St[--xt]),
      (St[xt] = null)
}
var ft = null,
  ct = null,
  xe = !1,
  Nt = null
function Um(e, t) {
  var n = Tt(5, null, null, 0)
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
          ? ((e.stateNode = t), (ft = e), (ct = An(t.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ft = e), (ct = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = ci !== null ? { id: sn, overflow: an } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824
            }),
            (n = Tt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ft = e),
            (ct = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function Ru(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Du(e) {
  if (xe) {
    var t = ct
    if (t) {
      var n = t
      if (!Sh(e, t)) {
        if (Ru(e)) throw Error(W(418))
        t = An(n.nextSibling)
        var r = ft
        t && Sh(e, t)
          ? Um(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (xe = !1), (ft = e))
      }
    } else {
      if (Ru(e)) throw Error(W(418))
      ;(e.flags = (e.flags & -4097) | 2), (xe = !1), (ft = e)
    }
  }
}
function xh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  ft = e
}
function ds(e) {
  if (e !== ft) return !1
  if (!xe) return xh(e), (xe = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Iu(e.type, e.memoizedProps))),
    t && (t = ct))
  ) {
    if (Ru(e)) throw (Gm(), Error(W(418)))
    for (; t; ) Um(e, t), (t = An(t.nextSibling))
  }
  if ((xh(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(W(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              ct = An(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      ct = null
    }
  } else ct = ft ? An(e.stateNode.nextSibling) : null
  return !0
}
function Gm() {
  for (var e = ct; e; ) e = An(e.nextSibling)
}
function nr() {
  ;(ct = ft = null), (xe = !1)
}
function $c(e) {
  Nt === null ? (Nt = [e]) : Nt.push(e)
}
var C1 = vn.ReactCurrentBatchConfig
function br(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(W(309))
        var r = n.stateNode
      }
      if (!r) throw Error(W(147, e))
      var o = r,
        a = '' + e
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === a
        ? t.ref
        : ((t = function (u) {
            var d = o.refs
            u === null ? delete d[a] : (d[a] = u)
          }),
          (t._stringRef = a),
          t)
    }
    if (typeof e != 'string') throw Error(W(284))
    if (!n._owner) throw Error(W(290, e))
  }
  return e
}
function fs(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      W(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  )
}
function Th(e) {
  var t = e._init
  return t(e._payload)
}
function Qm(e) {
  function t(S, v) {
    if (e) {
      var _ = S.deletions
      _ === null ? ((S.deletions = [v]), (S.flags |= 16)) : _.push(v)
    }
  }
  function n(S, v) {
    if (!e) return null
    for (; v !== null; ) t(S, v), (v = v.sibling)
    return null
  }
  function r(S, v) {
    for (S = new Map(); v !== null; )
      v.key !== null ? S.set(v.key, v) : S.set(v.index, v), (v = v.sibling)
    return S
  }
  function o(S, v) {
    return (S = Bn(S, v)), (S.index = 0), (S.sibling = null), S
  }
  function a(S, v, _) {
    return (
      (S.index = _),
      e
        ? ((_ = S.alternate),
          _ !== null
            ? ((_ = _.index), _ < v ? ((S.flags |= 2), v) : _)
            : ((S.flags |= 2), v))
        : ((S.flags |= 1048576), v)
    )
  }
  function u(S) {
    return e && S.alternate === null && (S.flags |= 2), S
  }
  function d(S, v, _, P) {
    return v === null || v.tag !== 6
      ? ((v = Wl(_, S.mode, P)), (v.return = S), v)
      : ((v = o(v, _)), (v.return = S), v)
  }
  function c(S, v, _, P) {
    var C = _.type
    return C === Ai
      ? m(S, v, _.props.children, P, _.key)
      : v !== null &&
        (v.elementType === C ||
          (typeof C == 'object' &&
            C !== null &&
            C.$$typeof === Tn &&
            Th(C) === v.type))
      ? ((P = o(v, _.props)), (P.ref = br(S, v, _)), (P.return = S), P)
      : ((P = As(_.type, _.key, _.props, null, S.mode, P)),
        (P.ref = br(S, v, _)),
        (P.return = S),
        P)
  }
  function p(S, v, _, P) {
    return v === null ||
      v.tag !== 4 ||
      v.stateNode.containerInfo !== _.containerInfo ||
      v.stateNode.implementation !== _.implementation
      ? ((v = Ul(_, S.mode, P)), (v.return = S), v)
      : ((v = o(v, _.children || [])), (v.return = S), v)
  }
  function m(S, v, _, P, C) {
    return v === null || v.tag !== 7
      ? ((v = li(_, S.mode, P, C)), (v.return = S), v)
      : ((v = o(v, _)), (v.return = S), v)
  }
  function y(S, v, _) {
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return (v = Wl('' + v, S.mode, _)), (v.return = S), v
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case ts:
          return (
            (_ = As(v.type, v.key, v.props, null, S.mode, _)),
            (_.ref = br(S, null, v)),
            (_.return = S),
            _
          )
        case Ni:
          return (v = Ul(v, S.mode, _)), (v.return = S), v
        case Tn:
          var P = v._init
          return y(S, P(v._payload), _)
      }
      if (Rr(v) || Pr(v)) return (v = li(v, S.mode, _, null)), (v.return = S), v
      fs(S, v)
    }
    return null
  }
  function g(S, v, _, P) {
    var C = v !== null ? v.key : null
    if ((typeof _ == 'string' && _ !== '') || typeof _ == 'number')
      return C !== null ? null : d(S, v, '' + _, P)
    if (typeof _ == 'object' && _ !== null) {
      switch (_.$$typeof) {
        case ts:
          return _.key === C ? c(S, v, _, P) : null
        case Ni:
          return _.key === C ? p(S, v, _, P) : null
        case Tn:
          return (C = _._init), g(S, v, C(_._payload), P)
      }
      if (Rr(_) || Pr(_)) return C !== null ? null : m(S, v, _, P, null)
      fs(S, _)
    }
    return null
  }
  function w(S, v, _, P, C) {
    if ((typeof P == 'string' && P !== '') || typeof P == 'number')
      return (S = S.get(_) || null), d(v, S, '' + P, C)
    if (typeof P == 'object' && P !== null) {
      switch (P.$$typeof) {
        case ts:
          return (S = S.get(P.key === null ? _ : P.key) || null), c(v, S, P, C)
        case Ni:
          return (S = S.get(P.key === null ? _ : P.key) || null), p(v, S, P, C)
        case Tn:
          var b = P._init
          return w(S, v, _, b(P._payload), C)
      }
      if (Rr(P) || Pr(P)) return (S = S.get(_) || null), m(v, S, P, C, null)
      fs(v, P)
    }
    return null
  }
  function T(S, v, _, P) {
    for (
      var C = null, b = null, M = v, O = (v = 0), A = null;
      M !== null && O < _.length;
      O++
    ) {
      M.index > O ? ((A = M), (M = null)) : (A = M.sibling)
      var z = g(S, M, _[O], P)
      if (z === null) {
        M === null && (M = A)
        break
      }
      e && M && z.alternate === null && t(S, M),
        (v = a(z, v, O)),
        b === null ? (C = z) : (b.sibling = z),
        (b = z),
        (M = A)
    }
    if (O === _.length) return n(S, M), xe && Jn(S, O), C
    if (M === null) {
      for (; O < _.length; O++)
        (M = y(S, _[O], P)),
          M !== null &&
            ((v = a(M, v, O)), b === null ? (C = M) : (b.sibling = M), (b = M))
      return xe && Jn(S, O), C
    }
    for (M = r(S, M); O < _.length; O++)
      (A = w(M, S, O, _[O], P)),
        A !== null &&
          (e && A.alternate !== null && M.delete(A.key === null ? O : A.key),
          (v = a(A, v, O)),
          b === null ? (C = A) : (b.sibling = A),
          (b = A))
    return (
      e &&
        M.forEach(function (R) {
          return t(S, R)
        }),
      xe && Jn(S, O),
      C
    )
  }
  function E(S, v, _, P) {
    var C = Pr(_)
    if (typeof C != 'function') throw Error(W(150))
    if (((_ = C.call(_)), _ == null)) throw Error(W(151))
    for (
      var b = (C = null), M = v, O = (v = 0), A = null, z = _.next();
      M !== null && !z.done;
      O++, z = _.next()
    ) {
      M.index > O ? ((A = M), (M = null)) : (A = M.sibling)
      var R = g(S, M, z.value, P)
      if (R === null) {
        M === null && (M = A)
        break
      }
      e && M && R.alternate === null && t(S, M),
        (v = a(R, v, O)),
        b === null ? (C = R) : (b.sibling = R),
        (b = R),
        (M = A)
    }
    if (z.done) return n(S, M), xe && Jn(S, O), C
    if (M === null) {
      for (; !z.done; O++, z = _.next())
        (z = y(S, z.value, P)),
          z !== null &&
            ((v = a(z, v, O)), b === null ? (C = z) : (b.sibling = z), (b = z))
      return xe && Jn(S, O), C
    }
    for (M = r(S, M); !z.done; O++, z = _.next())
      (z = w(M, S, O, z.value, P)),
        z !== null &&
          (e && z.alternate !== null && M.delete(z.key === null ? O : z.key),
          (v = a(z, v, O)),
          b === null ? (C = z) : (b.sibling = z),
          (b = z))
    return (
      e &&
        M.forEach(function (F) {
          return t(S, F)
        }),
      xe && Jn(S, O),
      C
    )
  }
  function k(S, v, _, P) {
    if (
      (typeof _ == 'object' &&
        _ !== null &&
        _.type === Ai &&
        _.key === null &&
        (_ = _.props.children),
      typeof _ == 'object' && _ !== null)
    ) {
      switch (_.$$typeof) {
        case ts:
          e: {
            for (var C = _.key, b = v; b !== null; ) {
              if (b.key === C) {
                if (((C = _.type), C === Ai)) {
                  if (b.tag === 7) {
                    n(S, b.sibling),
                      (v = o(b, _.props.children)),
                      (v.return = S),
                      (S = v)
                    break e
                  }
                } else if (
                  b.elementType === C ||
                  (typeof C == 'object' &&
                    C !== null &&
                    C.$$typeof === Tn &&
                    Th(C) === b.type)
                ) {
                  n(S, b.sibling),
                    (v = o(b, _.props)),
                    (v.ref = br(S, b, _)),
                    (v.return = S),
                    (S = v)
                  break e
                }
                n(S, b)
                break
              } else t(S, b)
              b = b.sibling
            }
            _.type === Ai
              ? ((v = li(_.props.children, S.mode, P, _.key)),
                (v.return = S),
                (S = v))
              : ((P = As(_.type, _.key, _.props, null, S.mode, P)),
                (P.ref = br(S, v, _)),
                (P.return = S),
                (S = P))
          }
          return u(S)
        case Ni:
          e: {
            for (b = _.key; v !== null; ) {
              if (v.key === b)
                if (
                  v.tag === 4 &&
                  v.stateNode.containerInfo === _.containerInfo &&
                  v.stateNode.implementation === _.implementation
                ) {
                  n(S, v.sibling),
                    (v = o(v, _.children || [])),
                    (v.return = S),
                    (S = v)
                  break e
                } else {
                  n(S, v)
                  break
                }
              else t(S, v)
              v = v.sibling
            }
            ;(v = Ul(_, S.mode, P)), (v.return = S), (S = v)
          }
          return u(S)
        case Tn:
          return (b = _._init), k(S, v, b(_._payload), P)
      }
      if (Rr(_)) return T(S, v, _, P)
      if (Pr(_)) return E(S, v, _, P)
      fs(S, _)
    }
    return (typeof _ == 'string' && _ !== '') || typeof _ == 'number'
      ? ((_ = '' + _),
        v !== null && v.tag === 6
          ? (n(S, v.sibling), (v = o(v, _)), (v.return = S), (S = v))
          : (n(S, v), (v = Wl(_, S.mode, P)), (v.return = S), (S = v)),
        u(S))
      : n(S, v)
  }
  return k
}
var ir = Qm(!0),
  Km = Qm(!1),
  ea = Vn(null),
  ta = null,
  Hi = null,
  Zc = null
function Hc() {
  Zc = Hi = ta = null
}
function qc(e) {
  var t = ea.current
  we(ea), (e._currentValue = t)
}
function ju(e, t, n) {
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
function Ki(e, t) {
  ;(ta = e),
    (Zc = Hi = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (it = !0), (e.firstContext = null))
}
function Lt(e) {
  var t = e._currentValue
  if (Zc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Hi === null)) {
      if (ta === null) throw Error(W(308))
      ;(Hi = e), (ta.dependencies = { lanes: 0, firstContext: e })
    } else Hi = Hi.next = e
  return t
}
var ii = null
function Vc(e) {
  ii === null ? (ii = [e]) : ii.push(e)
}
function Ym(e, t, n, r) {
  var o = t.interleaved
  return (
    o === null ? ((n.next = n), Vc(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    hn(e, r)
  )
}
function hn(e, t) {
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
var En = !1
function Wc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null
  }
}
function Xm(e, t) {
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
function un(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null
  }
}
function Rn(e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), he & 2)) {
    var o = r.pending
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      hn(e, n)
    )
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Vc(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    hn(e, n)
  )
}
function Ms(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Oc(e, n)
  }
}
function Eh(e, t) {
  var n = e.updateQueue,
    r = e.alternate
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      a = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var u = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null
        }
        a === null ? (o = a = u) : (a = a.next = u), (n = n.next)
      } while (n !== null)
      a === null ? (o = a = t) : (a = a.next = t)
    } else o = a = t
    ;(n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: a,
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
function na(e, t, n, r) {
  var o = e.updateQueue
  En = !1
  var a = o.firstBaseUpdate,
    u = o.lastBaseUpdate,
    d = o.shared.pending
  if (d !== null) {
    o.shared.pending = null
    var c = d,
      p = c.next
    ;(c.next = null), u === null ? (a = p) : (u.next = p), (u = c)
    var m = e.alternate
    m !== null &&
      ((m = m.updateQueue),
      (d = m.lastBaseUpdate),
      d !== u &&
        (d === null ? (m.firstBaseUpdate = p) : (d.next = p),
        (m.lastBaseUpdate = c)))
  }
  if (a !== null) {
    var y = o.baseState
    ;(u = 0), (m = p = c = null), (d = a)
    do {
      var g = d.lane,
        w = d.eventTime
      if ((r & g) === g) {
        m !== null &&
          (m = m.next =
            {
              eventTime: w,
              lane: 0,
              tag: d.tag,
              payload: d.payload,
              callback: d.callback,
              next: null
            })
        e: {
          var T = e,
            E = d
          switch (((g = t), (w = n), E.tag)) {
            case 1:
              if (((T = E.payload), typeof T == 'function')) {
                y = T.call(w, y, g)
                break e
              }
              y = T
              break e
            case 3:
              T.flags = (T.flags & -65537) | 128
            case 0:
              if (
                ((T = E.payload),
                (g = typeof T == 'function' ? T.call(w, y, g) : T),
                g == null)
              )
                break e
              y = Ce({}, y, g)
              break e
            case 2:
              En = !0
          }
        }
        d.callback !== null &&
          d.lane !== 0 &&
          ((e.flags |= 64),
          (g = o.effects),
          g === null ? (o.effects = [d]) : g.push(d))
      } else
        (w = {
          eventTime: w,
          lane: g,
          tag: d.tag,
          payload: d.payload,
          callback: d.callback,
          next: null
        }),
          m === null ? ((p = m = w), (c = y)) : (m = m.next = w),
          (u |= g)
      if (((d = d.next), d === null)) {
        if (((d = o.shared.pending), d === null)) break
        ;(g = d),
          (d = g.next),
          (g.next = null),
          (o.lastBaseUpdate = g),
          (o.shared.pending = null)
      }
    } while (!0)
    if (
      (m === null && (c = y),
      (o.baseState = c),
      (o.firstBaseUpdate = p),
      (o.lastBaseUpdate = m),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t
      do (u |= o.lane), (o = o.next)
      while (o !== t)
    } else a === null && (o.shared.lanes = 0)
    ;(fi |= u), (e.lanes = u), (e.memoizedState = y)
  }
}
function Ph(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function'))
          throw Error(W(191, o))
        o.call(r)
      }
    }
}
var ko = {},
  Gt = Vn(ko),
  fo = Vn(ko),
  ho = Vn(ko)
function ri(e) {
  if (e === ko) throw Error(W(174))
  return e
}
function Uc(e, t) {
  switch ((_e(ho, t), _e(fo, e), _e(Gt, ko), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : _u(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = _u(t, e))
  }
  we(Gt), _e(Gt, t)
}
function rr() {
  we(Gt), we(fo), we(ho)
}
function Jm(e) {
  ri(ho.current)
  var t = ri(Gt.current),
    n = _u(t, e.type)
  t !== n && (_e(fo, e), _e(Gt, n))
}
function Gc(e) {
  fo.current === e && (we(Gt), we(fo))
}
var Ee = Vn(0)
function ia(e) {
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
var Fl = []
function Qc() {
  for (var e = 0; e < Fl.length; e++) Fl[e]._workInProgressVersionPrimary = null
  Fl.length = 0
}
var bs = vn.ReactCurrentDispatcher,
  $l = vn.ReactCurrentBatchConfig,
  di = 0,
  Pe = null,
  ze = null,
  Re = null,
  ra = !1,
  Vr = !1,
  po = 0,
  L1 = 0
function qe() {
  throw Error(W(321))
}
function Kc(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!jt(e[n], t[n])) return !1
  return !0
}
function Yc(e, t, n, r, o, a) {
  if (
    ((di = a),
    (Pe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (bs.current = e === null || e.memoizedState === null ? O1 : I1),
    (e = n(r, o)),
    Vr)
  ) {
    a = 0
    do {
      if (((Vr = !1), (po = 0), 25 <= a)) throw Error(W(301))
      ;(a += 1),
        (Re = ze = null),
        (t.updateQueue = null),
        (bs.current = z1),
        (e = n(r, o))
    } while (Vr)
  }
  if (
    ((bs.current = oa),
    (t = ze !== null && ze.next !== null),
    (di = 0),
    (Re = ze = Pe = null),
    (ra = !1),
    t)
  )
    throw Error(W(300))
  return e
}
function Xc() {
  var e = po !== 0
  return (po = 0), e
}
function Vt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  }
  return Re === null ? (Pe.memoizedState = Re = e) : (Re = Re.next = e), Re
}
function kt() {
  if (ze === null) {
    var e = Pe.alternate
    e = e !== null ? e.memoizedState : null
  } else e = ze.next
  var t = Re === null ? Pe.memoizedState : Re.next
  if (t !== null) (Re = t), (ze = e)
  else {
    if (e === null) throw Error(W(310))
    ;(ze = e),
      (e = {
        memoizedState: ze.memoizedState,
        baseState: ze.baseState,
        baseQueue: ze.baseQueue,
        queue: ze.queue,
        next: null
      }),
      Re === null ? (Pe.memoizedState = Re = e) : (Re = Re.next = e)
  }
  return Re
}
function mo(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function Zl(e) {
  var t = kt(),
    n = t.queue
  if (n === null) throw Error(W(311))
  n.lastRenderedReducer = e
  var r = ze,
    o = r.baseQueue,
    a = n.pending
  if (a !== null) {
    if (o !== null) {
      var u = o.next
      ;(o.next = a.next), (a.next = u)
    }
    ;(r.baseQueue = o = a), (n.pending = null)
  }
  if (o !== null) {
    ;(a = o.next), (r = r.baseState)
    var d = (u = null),
      c = null,
      p = a
    do {
      var m = p.lane
      if ((di & m) === m)
        c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }),
          (r = p.hasEagerState ? p.eagerState : e(r, p.action))
      else {
        var y = {
          lane: m,
          action: p.action,
          hasEagerState: p.hasEagerState,
          eagerState: p.eagerState,
          next: null
        }
        c === null ? ((d = c = y), (u = r)) : (c = c.next = y),
          (Pe.lanes |= m),
          (fi |= m)
      }
      p = p.next
    } while (p !== null && p !== a)
    c === null ? (u = r) : (c.next = d),
      jt(r, t.memoizedState) || (it = !0),
      (t.memoizedState = r),
      (t.baseState = u),
      (t.baseQueue = c),
      (n.lastRenderedState = r)
  }
  if (((e = n.interleaved), e !== null)) {
    o = e
    do (a = o.lane), (Pe.lanes |= a), (fi |= a), (o = o.next)
    while (o !== e)
  } else o === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function Hl(e) {
  var t = kt(),
    n = t.queue
  if (n === null) throw Error(W(311))
  n.lastRenderedReducer = e
  var r = n.dispatch,
    o = n.pending,
    a = t.memoizedState
  if (o !== null) {
    n.pending = null
    var u = (o = o.next)
    do (a = e(a, u.action)), (u = u.next)
    while (u !== o)
    jt(a, t.memoizedState) || (it = !0),
      (t.memoizedState = a),
      t.baseQueue === null && (t.baseState = a),
      (n.lastRenderedState = a)
  }
  return [a, r]
}
function eg() {}
function tg(e, t) {
  var n = Pe,
    r = kt(),
    o = t(),
    a = !jt(r.memoizedState, o)
  if (
    (a && ((r.memoizedState = o), (it = !0)),
    (r = r.queue),
    Jc(rg.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || a || (Re !== null && Re.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      go(9, ig.bind(null, n, r, o, t), void 0, null),
      De === null)
    )
      throw Error(W(349))
    di & 30 || ng(n, t, o)
  }
  return o
}
function ng(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Pe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function ig(e, t, n, r) {
  ;(t.value = n), (t.getSnapshot = r), og(t) && sg(e)
}
function rg(e, t, n) {
  return n(function () {
    og(t) && sg(e)
  })
}
function og(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !jt(e, n)
  } catch {
    return !0
  }
}
function sg(e) {
  var t = hn(e, 1)
  t !== null && Rt(t, e, 1, -1)
}
function Ch(e) {
  var t = Vt()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: mo,
      lastRenderedState: e
    }),
    (t.queue = e),
    (e = e.dispatch = b1.bind(null, Pe, e)),
    [t.memoizedState, e]
  )
}
function go(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Pe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  )
}
function ag() {
  return kt().memoizedState
}
function Os(e, t, n, r) {
  var o = Vt()
  ;(Pe.flags |= e),
    (o.memoizedState = go(1 | t, n, void 0, r === void 0 ? null : r))
}
function La(e, t, n, r) {
  var o = kt()
  r = r === void 0 ? null : r
  var a = void 0
  if (ze !== null) {
    var u = ze.memoizedState
    if (((a = u.destroy), r !== null && Kc(r, u.deps))) {
      o.memoizedState = go(t, n, a, r)
      return
    }
  }
  ;(Pe.flags |= e), (o.memoizedState = go(1 | t, n, a, r))
}
function Lh(e, t) {
  return Os(8390656, 8, e, t)
}
function Jc(e, t) {
  return La(2048, 8, e, t)
}
function lg(e, t) {
  return La(4, 2, e, t)
}
function ug(e, t) {
  return La(4, 4, e, t)
}
function cg(e, t) {
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
function dg(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), La(4, 4, cg.bind(null, t, e), n)
  )
}
function ed() {}
function fg(e, t) {
  var n = kt()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Kc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e)
}
function hg(e, t) {
  var n = kt()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Kc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function pg(e, t, n) {
  return di & 21
    ? (jt(n, t) || ((n = ym()), (Pe.lanes |= n), (fi |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (it = !0)), (e.memoizedState = n))
}
function k1(e, t) {
  var n = ge
  ;(ge = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = $l.transition
  $l.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(ge = n), ($l.transition = r)
  }
}
function mg() {
  return kt().memoizedState
}
function M1(e, t, n) {
  var r = jn(e)
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }),
    gg(e))
  )
    vg(t, n)
  else if (((n = Ym(e, t, n, r)), n !== null)) {
    var o = Ye()
    Rt(n, e, r, o), _g(n, t, r)
  }
}
function b1(e, t, n) {
  var r = jn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (gg(e)) vg(t, o)
  else {
    var a = e.alternate
    if (
      e.lanes === 0 &&
      (a === null || a.lanes === 0) &&
      ((a = t.lastRenderedReducer), a !== null)
    )
      try {
        var u = t.lastRenderedState,
          d = a(u, n)
        if (((o.hasEagerState = !0), (o.eagerState = d), jt(d, u))) {
          var c = t.interleaved
          c === null
            ? ((o.next = o), Vc(t))
            : ((o.next = c.next), (c.next = o)),
            (t.interleaved = o)
          return
        }
      } catch {
      } finally {
      }
    ;(n = Ym(e, t, o, r)),
      n !== null && ((o = Ye()), Rt(n, e, r, o), _g(n, t, r))
  }
}
function gg(e) {
  var t = e.alternate
  return e === Pe || (t !== null && t === Pe)
}
function vg(e, t) {
  Vr = ra = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function _g(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Oc(e, n)
  }
}
var oa = {
    readContext: Lt,
    useCallback: qe,
    useContext: qe,
    useEffect: qe,
    useImperativeHandle: qe,
    useInsertionEffect: qe,
    useLayoutEffect: qe,
    useMemo: qe,
    useReducer: qe,
    useRef: qe,
    useState: qe,
    useDebugValue: qe,
    useDeferredValue: qe,
    useTransition: qe,
    useMutableSource: qe,
    useSyncExternalStore: qe,
    useId: qe,
    unstable_isNewReconciler: !1
  },
  O1 = {
    readContext: Lt,
    useCallback: function (e, t) {
      return (Vt().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: Lt,
    useEffect: Lh,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Os(4194308, 4, cg.bind(null, t, e), n)
      )
    },
    useLayoutEffect: function (e, t) {
      return Os(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return Os(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = Vt()
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      )
    },
    useReducer: function (e, t, n) {
      var r = Vt()
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
        (e = e.dispatch = M1.bind(null, Pe, e)),
        [r.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = Vt()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: Ch,
    useDebugValue: ed,
    useDeferredValue: function (e) {
      return (Vt().memoizedState = e)
    },
    useTransition: function () {
      var e = Ch(!1),
        t = e[0]
      return (e = k1.bind(null, e[1])), (Vt().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Pe,
        o = Vt()
      if (xe) {
        if (n === void 0) throw Error(W(407))
        n = n()
      } else {
        if (((n = t()), De === null)) throw Error(W(349))
        di & 30 || ng(r, t, n)
      }
      o.memoizedState = n
      var a = { value: n, getSnapshot: t }
      return (
        (o.queue = a),
        Lh(rg.bind(null, r, a, e), [e]),
        (r.flags |= 2048),
        go(9, ig.bind(null, r, a, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = Vt(),
        t = De.identifierPrefix
      if (xe) {
        var n = an,
          r = sn
        ;(n = (r & ~(1 << (32 - At(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = po++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = L1++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1
  },
  I1 = {
    readContext: Lt,
    useCallback: fg,
    useContext: Lt,
    useEffect: Jc,
    useImperativeHandle: dg,
    useInsertionEffect: lg,
    useLayoutEffect: ug,
    useMemo: hg,
    useReducer: Zl,
    useRef: ag,
    useState: function () {
      return Zl(mo)
    },
    useDebugValue: ed,
    useDeferredValue: function (e) {
      var t = kt()
      return pg(t, ze.memoizedState, e)
    },
    useTransition: function () {
      var e = Zl(mo)[0],
        t = kt().memoizedState
      return [e, t]
    },
    useMutableSource: eg,
    useSyncExternalStore: tg,
    useId: mg,
    unstable_isNewReconciler: !1
  },
  z1 = {
    readContext: Lt,
    useCallback: fg,
    useContext: Lt,
    useEffect: Jc,
    useImperativeHandle: dg,
    useInsertionEffect: lg,
    useLayoutEffect: ug,
    useMemo: hg,
    useReducer: Hl,
    useRef: ag,
    useState: function () {
      return Hl(mo)
    },
    useDebugValue: ed,
    useDeferredValue: function (e) {
      var t = kt()
      return ze === null ? (t.memoizedState = e) : pg(t, ze.memoizedState, e)
    },
    useTransition: function () {
      var e = Hl(mo)[0],
        t = kt().memoizedState
      return [e, t]
    },
    useMutableSource: eg,
    useSyncExternalStore: tg,
    useId: mg,
    unstable_isNewReconciler: !1
  }
function It(e, t) {
  if (e && e.defaultProps) {
    ;(t = Ce({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
function Bu(e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ce({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var ka = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? yi(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = Ye(),
      o = jn(e),
      a = un(r, o)
    ;(a.payload = t),
      n != null && (a.callback = n),
      (t = Rn(e, a, o)),
      t !== null && (Rt(t, e, o, r), Ms(t, e, o))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = Ye(),
      o = jn(e),
      a = un(r, o)
    ;(a.tag = 1),
      (a.payload = t),
      n != null && (a.callback = n),
      (t = Rn(e, a, o)),
      t !== null && (Rt(t, e, o, r), Ms(t, e, o))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = Ye(),
      r = jn(e),
      o = un(n, r)
    ;(o.tag = 2),
      t != null && (o.callback = t),
      (t = Rn(e, o, r)),
      t !== null && (Rt(t, e, r, n), Ms(t, e, r))
  }
}
function kh(e, t, n, r, o, a, u) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, a, u)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ao(n, r) || !ao(o, a)
      : !0
  )
}
function yg(e, t, n) {
  var r = !1,
    o = $n,
    a = t.contextType
  return (
    typeof a == 'object' && a !== null
      ? (a = Lt(a))
      : ((o = ot(t) ? ui : Ue.current),
        (r = t.contextTypes),
        (a = (r = r != null) ? tr(e, o) : $n)),
    (t = new t(n, a)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ka),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    t
  )
}
function Mh(e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ka.enqueueReplaceState(t, t.state, null)
}
function Fu(e, t, n, r) {
  var o = e.stateNode
  ;(o.props = n), (o.state = e.memoizedState), (o.refs = {}), Wc(e)
  var a = t.contextType
  typeof a == 'object' && a !== null
    ? (o.context = Lt(a))
    : ((a = ot(t) ? ui : Ue.current), (o.context = tr(e, a))),
    (o.state = e.memoizedState),
    (a = t.getDerivedStateFromProps),
    typeof a == 'function' && (Bu(e, t, a, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && ka.enqueueReplaceState(o, o.state, null),
      na(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308)
}
function or(e, t) {
  try {
    var n = '',
      r = t
    do (n += a0(r)), (r = r.return)
    while (r)
    var o = n
  } catch (a) {
    o =
      `
Error generating stack: ` +
      a.message +
      `
` +
      a.stack
  }
  return { value: e, source: t, stack: o, digest: null }
}
function ql(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function $u(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var N1 = typeof WeakMap == 'function' ? WeakMap : Map
function wg(e, t, n) {
  ;(n = un(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = function () {
      aa || ((aa = !0), (Yu = r)), $u(e, t)
    }),
    n
  )
}
function Sg(e, t, n) {
  ;(n = un(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var o = t.value
    ;(n.payload = function () {
      return r(o)
    }),
      (n.callback = function () {
        $u(e, t)
      })
  }
  var a = e.stateNode
  return (
    a !== null &&
      typeof a.componentDidCatch == 'function' &&
      (n.callback = function () {
        $u(e, t),
          typeof r != 'function' &&
            (Dn === null ? (Dn = new Set([this])) : Dn.add(this))
        var u = t.stack
        this.componentDidCatch(t.value, { componentStack: u !== null ? u : '' })
      }),
    n
  )
}
function bh(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new N1()
    var o = new Set()
    r.set(t, o)
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o))
  o.has(n) || (o.add(n), (e = G1.bind(null, e, t, n)), t.then(e, e))
}
function Oh(e) {
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
function Ih(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = un(-1, 1)), (t.tag = 2), Rn(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var A1 = vn.ReactCurrentOwner,
  it = !1
function Ke(e, t, n, r) {
  t.child = e === null ? Km(t, null, n, r) : ir(t, e.child, n, r)
}
function zh(e, t, n, r, o) {
  n = n.render
  var a = t.ref
  return (
    Ki(t, o),
    (r = Yc(e, t, n, r, a, o)),
    (n = Xc()),
    e !== null && !it
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        pn(e, t, o))
      : (xe && n && Bc(t), (t.flags |= 1), Ke(e, t, r, o), t.child)
  )
}
function Nh(e, t, n, r, o) {
  if (e === null) {
    var a = n.type
    return typeof a == 'function' &&
      !ld(a) &&
      a.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = a), xg(e, t, a, r, o))
      : ((e = As(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((a = e.child), !(e.lanes & o))) {
    var u = a.memoizedProps
    if (
      ((n = n.compare), (n = n !== null ? n : ao), n(u, r) && e.ref === t.ref)
    )
      return pn(e, t, o)
  }
  return (
    (t.flags |= 1),
    (e = Bn(a, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  )
}
function xg(e, t, n, r, o) {
  if (e !== null) {
    var a = e.memoizedProps
    if (ao(a, r) && e.ref === t.ref)
      if (((it = !1), (t.pendingProps = r = a), (e.lanes & o) !== 0))
        e.flags & 131072 && (it = !0)
      else return (t.lanes = e.lanes), pn(e, t, o)
  }
  return Zu(e, t, n, r, o)
}
function Tg(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    a = e !== null ? e.memoizedState : null
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        _e(Vi, lt),
        (lt |= n)
    else {
      if (!(n & 1073741824))
        return (
          (e = a !== null ? a.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null
          }),
          (t.updateQueue = null),
          _e(Vi, lt),
          (lt |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = a !== null ? a.baseLanes : n),
        _e(Vi, lt),
        (lt |= r)
    }
  else
    a !== null ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n),
      _e(Vi, lt),
      (lt |= r)
  return Ke(e, t, o, n), t.child
}
function Eg(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function Zu(e, t, n, r, o) {
  var a = ot(n) ? ui : Ue.current
  return (
    (a = tr(t, a)),
    Ki(t, o),
    (n = Yc(e, t, n, r, a, o)),
    (r = Xc()),
    e !== null && !it
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        pn(e, t, o))
      : (xe && r && Bc(t), (t.flags |= 1), Ke(e, t, n, o), t.child)
  )
}
function Ah(e, t, n, r, o) {
  if (ot(n)) {
    var a = !0
    Ys(t)
  } else a = !1
  if ((Ki(t, o), t.stateNode === null))
    Is(e, t), yg(t, n, r), Fu(t, n, r, o), (r = !0)
  else if (e === null) {
    var u = t.stateNode,
      d = t.memoizedProps
    u.props = d
    var c = u.context,
      p = n.contextType
    typeof p == 'object' && p !== null
      ? (p = Lt(p))
      : ((p = ot(n) ? ui : Ue.current), (p = tr(t, p)))
    var m = n.getDerivedStateFromProps,
      y =
        typeof m == 'function' || typeof u.getSnapshotBeforeUpdate == 'function'
    y ||
      (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof u.componentWillReceiveProps != 'function') ||
      ((d !== r || c !== p) && Mh(t, u, r, p)),
      (En = !1)
    var g = t.memoizedState
    ;(u.state = g),
      na(t, r, u, o),
      (c = t.memoizedState),
      d !== r || g !== c || rt.current || En
        ? (typeof m == 'function' && (Bu(t, n, m, r), (c = t.memoizedState)),
          (d = En || kh(t, n, d, r, g, c, p))
            ? (y ||
                (typeof u.UNSAFE_componentWillMount != 'function' &&
                  typeof u.componentWillMount != 'function') ||
                (typeof u.componentWillMount == 'function' &&
                  u.componentWillMount(),
                typeof u.UNSAFE_componentWillMount == 'function' &&
                  u.UNSAFE_componentWillMount()),
              typeof u.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = c)),
          (u.props = r),
          (u.state = c),
          (u.context = p),
          (r = d))
        : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1))
  } else {
    ;(u = t.stateNode),
      Xm(e, t),
      (d = t.memoizedProps),
      (p = t.type === t.elementType ? d : It(t.type, d)),
      (u.props = p),
      (y = t.pendingProps),
      (g = u.context),
      (c = n.contextType),
      typeof c == 'object' && c !== null
        ? (c = Lt(c))
        : ((c = ot(n) ? ui : Ue.current), (c = tr(t, c)))
    var w = n.getDerivedStateFromProps
    ;(m =
      typeof w == 'function' ||
      typeof u.getSnapshotBeforeUpdate == 'function') ||
      (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof u.componentWillReceiveProps != 'function') ||
      ((d !== y || g !== c) && Mh(t, u, r, c)),
      (En = !1),
      (g = t.memoizedState),
      (u.state = g),
      na(t, r, u, o)
    var T = t.memoizedState
    d !== y || g !== T || rt.current || En
      ? (typeof w == 'function' && (Bu(t, n, w, r), (T = t.memoizedState)),
        (p = En || kh(t, n, p, r, g, T, c) || !1)
          ? (m ||
              (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                typeof u.componentWillUpdate != 'function') ||
              (typeof u.componentWillUpdate == 'function' &&
                u.componentWillUpdate(r, T, c),
              typeof u.UNSAFE_componentWillUpdate == 'function' &&
                u.UNSAFE_componentWillUpdate(r, T, c)),
            typeof u.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof u.componentDidUpdate != 'function' ||
              (d === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != 'function' ||
              (d === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = T)),
        (u.props = r),
        (u.state = T),
        (u.context = c),
        (r = p))
      : (typeof u.componentDidUpdate != 'function' ||
          (d === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 4),
        typeof u.getSnapshotBeforeUpdate != 'function' ||
          (d === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1))
  }
  return Hu(e, t, n, r, a, o)
}
function Hu(e, t, n, r, o, a) {
  Eg(e, t)
  var u = (t.flags & 128) !== 0
  if (!r && !u) return o && wh(t, n, !1), pn(e, t, a)
  ;(r = t.stateNode), (A1.current = t)
  var d =
    u && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && u
      ? ((t.child = ir(t, e.child, null, a)), (t.child = ir(t, null, d, a)))
      : Ke(e, t, d, a),
    (t.memoizedState = r.state),
    o && wh(t, n, !0),
    t.child
  )
}
function Pg(e) {
  var t = e.stateNode
  t.pendingContext
    ? yh(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && yh(e, t.context, !1),
    Uc(e, t.containerInfo)
}
function Rh(e, t, n, r, o) {
  return nr(), $c(o), (t.flags |= 256), Ke(e, t, n, r), t.child
}
var qu = { dehydrated: null, treeContext: null, retryLane: 0 }
function Vu(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function Cg(e, t, n) {
  var r = t.pendingProps,
    o = Ee.current,
    a = !1,
    u = (t.flags & 128) !== 0,
    d
  if (
    ((d = u) ||
      (d = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    d
      ? ((a = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    _e(Ee, o & 1),
    e === null)
  )
    return (
      Du(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((u = r.children),
          (e = r.fallback),
          a
            ? ((r = t.mode),
              (a = t.child),
              (u = { mode: 'hidden', children: u }),
              !(r & 1) && a !== null
                ? ((a.childLanes = 0), (a.pendingProps = u))
                : (a = Oa(u, r, 0, null)),
              (e = li(e, r, n, null)),
              (a.return = t),
              (e.return = t),
              (a.sibling = e),
              (t.child = a),
              (t.child.memoizedState = Vu(n)),
              (t.memoizedState = qu),
              e)
            : td(t, u))
    )
  if (((o = e.memoizedState), o !== null && ((d = o.dehydrated), d !== null)))
    return R1(e, t, u, r, d, o, n)
  if (a) {
    ;(a = r.fallback), (u = t.mode), (o = e.child), (d = o.sibling)
    var c = { mode: 'hidden', children: r.children }
    return (
      !(u & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = c),
          (t.deletions = null))
        : ((r = Bn(o, c)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      d !== null ? (a = Bn(d, a)) : ((a = li(a, u, n, null)), (a.flags |= 2)),
      (a.return = t),
      (r.return = t),
      (r.sibling = a),
      (t.child = r),
      (r = a),
      (a = t.child),
      (u = e.child.memoizedState),
      (u =
        u === null
          ? Vu(n)
          : {
              baseLanes: u.baseLanes | n,
              cachePool: null,
              transitions: u.transitions
            }),
      (a.memoizedState = u),
      (a.childLanes = e.childLanes & ~n),
      (t.memoizedState = qu),
      r
    )
  }
  return (
    (a = e.child),
    (e = a.sibling),
    (r = Bn(a, { mode: 'visible', children: r.children })),
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
function td(e, t) {
  return (
    (t = Oa({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function hs(e, t, n, r) {
  return (
    r !== null && $c(r),
    ir(t, e.child, null, n),
    (e = td(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function R1(e, t, n, r, o, a, u) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ql(Error(W(422)))), hs(e, t, u, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((a = r.fallback),
        (o = t.mode),
        (r = Oa({ mode: 'visible', children: r.children }, o, 0, null)),
        (a = li(a, o, u, null)),
        (a.flags |= 2),
        (r.return = t),
        (a.return = t),
        (r.sibling = a),
        (t.child = r),
        t.mode & 1 && ir(t, e.child, null, u),
        (t.child.memoizedState = Vu(u)),
        (t.memoizedState = qu),
        a)
  if (!(t.mode & 1)) return hs(e, t, u, null)
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var d = r.dgst
    return (r = d), (a = Error(W(419))), (r = ql(a, r, void 0)), hs(e, t, u, r)
  }
  if (((d = (u & e.childLanes) !== 0), it || d)) {
    if (((r = De), r !== null)) {
      switch (u & -u) {
        case 4:
          o = 2
          break
        case 16:
          o = 8
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
          o = 32
          break
        case 536870912:
          o = 268435456
          break
        default:
          o = 0
      }
      ;(o = o & (r.suspendedLanes | u) ? 0 : o),
        o !== 0 &&
          o !== a.retryLane &&
          ((a.retryLane = o), hn(e, o), Rt(r, e, o, -1))
    }
    return ad(), (r = ql(Error(W(421)))), hs(e, t, u, r)
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Q1.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = a.treeContext),
      (ct = An(o.nextSibling)),
      (ft = t),
      (xe = !0),
      (Nt = null),
      e !== null &&
        ((St[xt++] = sn),
        (St[xt++] = an),
        (St[xt++] = ci),
        (sn = e.id),
        (an = e.overflow),
        (ci = t)),
      (t = td(t, r.children)),
      (t.flags |= 4096),
      t)
}
function Dh(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), ju(e.return, t, n)
}
function Vl(e, t, n, r, o) {
  var a = e.memoizedState
  a === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
      })
    : ((a.isBackwards = t),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = r),
      (a.tail = n),
      (a.tailMode = o))
}
function Lg(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    a = r.tail
  if ((Ke(e, t, r.children, n), (r = Ee.current), r & 2))
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
  if ((_e(Ee, r), !(t.mode & 1))) t.memoizedState = null
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && ia(e) === null && (o = n),
            (n = n.sibling)
        ;(n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Vl(t, !1, o, n, a)
        break
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && ia(e) === null)) {
            t.child = o
            break
          }
          ;(e = o.sibling), (o.sibling = n), (n = o), (o = e)
        }
        Vl(t, !0, n, null, a)
        break
      case 'together':
        Vl(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function Is(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function pn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (fi |= t.lanes),
    !(n & t.childLanes))
  )
    return null
  if (e !== null && t.child !== e.child) throw Error(W(153))
  if (t.child !== null) {
    for (
      e = t.child, n = Bn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Bn(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function D1(e, t, n) {
  switch (t.tag) {
    case 3:
      Pg(t), nr()
      break
    case 5:
      Jm(t)
      break
    case 1:
      ot(t.type) && Ys(t)
      break
    case 4:
      Uc(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value
      _e(ea, r._currentValue), (r._currentValue = o)
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (_e(Ee, Ee.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Cg(e, t, n)
          : (_e(Ee, Ee.current & 1),
            (e = pn(e, t, n)),
            e !== null ? e.sibling : null)
      _e(Ee, Ee.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Lg(e, t, n)
        t.flags |= 128
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        _e(Ee, Ee.current),
        r)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), Tg(e, t, n)
  }
  return pn(e, t, n)
}
var kg, Wu, Mg, bg
kg = function (e, t) {
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
Wu = function () {}
Mg = function (e, t, n, r) {
  var o = e.memoizedProps
  if (o !== r) {
    ;(e = t.stateNode), ri(Gt.current)
    var a = null
    switch (n) {
      case 'input':
        ;(o = pu(e, o)), (r = pu(e, r)), (a = [])
        break
      case 'select':
        ;(o = Ce({}, o, { value: void 0 })),
          (r = Ce({}, r, { value: void 0 })),
          (a = [])
        break
      case 'textarea':
        ;(o = vu(e, o)), (r = vu(e, r)), (a = [])
        break
      default:
        typeof o.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Qs)
    }
    yu(n, r)
    var u
    n = null
    for (p in o)
      if (!r.hasOwnProperty(p) && o.hasOwnProperty(p) && o[p] != null)
        if (p === 'style') {
          var d = o[p]
          for (u in d) d.hasOwnProperty(u) && (n || (n = {}), (n[u] = ''))
        } else
          p !== 'dangerouslySetInnerHTML' &&
            p !== 'children' &&
            p !== 'suppressContentEditableWarning' &&
            p !== 'suppressHydrationWarning' &&
            p !== 'autoFocus' &&
            (eo.hasOwnProperty(p) ? a || (a = []) : (a = a || []).push(p, null))
    for (p in r) {
      var c = r[p]
      if (
        ((d = o != null ? o[p] : void 0),
        r.hasOwnProperty(p) && c !== d && (c != null || d != null))
      )
        if (p === 'style')
          if (d) {
            for (u in d)
              !d.hasOwnProperty(u) ||
                (c && c.hasOwnProperty(u)) ||
                (n || (n = {}), (n[u] = ''))
            for (u in c)
              c.hasOwnProperty(u) &&
                d[u] !== c[u] &&
                (n || (n = {}), (n[u] = c[u]))
          } else n || (a || (a = []), a.push(p, n)), (n = c)
        else
          p === 'dangerouslySetInnerHTML'
            ? ((c = c ? c.__html : void 0),
              (d = d ? d.__html : void 0),
              c != null && d !== c && (a = a || []).push(p, c))
            : p === 'children'
            ? (typeof c != 'string' && typeof c != 'number') ||
              (a = a || []).push(p, '' + c)
            : p !== 'suppressContentEditableWarning' &&
              p !== 'suppressHydrationWarning' &&
              (eo.hasOwnProperty(p)
                ? (c != null && p === 'onScroll' && ye('scroll', e),
                  a || d === c || (a = []))
                : (a = a || []).push(p, c))
    }
    n && (a = a || []).push('style', n)
    var p = a
    ;(t.updateQueue = p) && (t.flags |= 4)
  }
}
bg = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
function Or(e, t) {
  if (!xe)
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
function Ve(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling)
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling)
  return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function j1(e, t, n) {
  var r = t.pendingProps
  switch ((Fc(t), t.tag)) {
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
      return Ve(t), null
    case 1:
      return ot(t.type) && Ks(), Ve(t), null
    case 3:
      return (
        (r = t.stateNode),
        rr(),
        we(rt),
        we(Ue),
        Qc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ds(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Nt !== null && (ec(Nt), (Nt = null)))),
        Wu(e, t),
        Ve(t),
        null
      )
    case 5:
      Gc(t)
      var o = ri(ho.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        Mg(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(W(166))
          return Ve(t), null
        }
        if (((e = ri(Gt.current)), ds(t))) {
          ;(r = t.stateNode), (n = t.type)
          var a = t.memoizedProps
          switch (((r[Wt] = t), (r[co] = a), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              ye('cancel', r), ye('close', r)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              ye('load', r)
              break
            case 'video':
            case 'audio':
              for (o = 0; o < jr.length; o++) ye(jr[o], r)
              break
            case 'source':
              ye('error', r)
              break
            case 'img':
            case 'image':
            case 'link':
              ye('error', r), ye('load', r)
              break
            case 'details':
              ye('toggle', r)
              break
            case 'input':
              Wf(r, a), ye('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!a.multiple }),
                ye('invalid', r)
              break
            case 'textarea':
              Gf(r, a), ye('invalid', r)
          }
          yu(n, a), (o = null)
          for (var u in a)
            if (a.hasOwnProperty(u)) {
              var d = a[u]
              u === 'children'
                ? typeof d == 'string'
                  ? r.textContent !== d &&
                    (a.suppressHydrationWarning !== !0 &&
                      cs(r.textContent, d, e),
                    (o = ['children', d]))
                  : typeof d == 'number' &&
                    r.textContent !== '' + d &&
                    (a.suppressHydrationWarning !== !0 &&
                      cs(r.textContent, d, e),
                    (o = ['children', '' + d]))
                : eo.hasOwnProperty(u) &&
                  d != null &&
                  u === 'onScroll' &&
                  ye('scroll', r)
            }
          switch (n) {
            case 'input':
              ns(r), Uf(r, a, !0)
              break
            case 'textarea':
              ns(r), Qf(r)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof a.onClick == 'function' && (r.onclick = Qs)
          }
          ;(r = o), (t.updateQueue = r), r !== null && (t.flags |= 4)
        } else {
          ;(u = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = rm(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = u.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = u.createElement(n, { is: r.is }))
                : ((e = u.createElement(n)),
                  n === 'select' &&
                    ((u = e),
                    r.multiple
                      ? (u.multiple = !0)
                      : r.size && (u.size = r.size)))
              : (e = u.createElementNS(e, n)),
            (e[Wt] = t),
            (e[co] = r),
            kg(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((u = wu(n, r)), n)) {
              case 'dialog':
                ye('cancel', e), ye('close', e), (o = r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                ye('load', e), (o = r)
                break
              case 'video':
              case 'audio':
                for (o = 0; o < jr.length; o++) ye(jr[o], e)
                o = r
                break
              case 'source':
                ye('error', e), (o = r)
                break
              case 'img':
              case 'image':
              case 'link':
                ye('error', e), ye('load', e), (o = r)
                break
              case 'details':
                ye('toggle', e), (o = r)
                break
              case 'input':
                Wf(e, r), (o = pu(e, r)), ye('invalid', e)
                break
              case 'option':
                o = r
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Ce({}, r, { value: void 0 })),
                  ye('invalid', e)
                break
              case 'textarea':
                Gf(e, r), (o = vu(e, r)), ye('invalid', e)
                break
              default:
                o = r
            }
            yu(n, o), (d = o)
            for (a in d)
              if (d.hasOwnProperty(a)) {
                var c = d[a]
                a === 'style'
                  ? am(e, c)
                  : a === 'dangerouslySetInnerHTML'
                  ? ((c = c ? c.__html : void 0), c != null && om(e, c))
                  : a === 'children'
                  ? typeof c == 'string'
                    ? (n !== 'textarea' || c !== '') && to(e, c)
                    : typeof c == 'number' && to(e, '' + c)
                  : a !== 'suppressContentEditableWarning' &&
                    a !== 'suppressHydrationWarning' &&
                    a !== 'autoFocus' &&
                    (eo.hasOwnProperty(a)
                      ? c != null && a === 'onScroll' && ye('scroll', e)
                      : c != null && Pc(e, a, c, u))
              }
            switch (n) {
              case 'input':
                ns(e), Uf(e, r, !1)
                break
              case 'textarea':
                ns(e), Qf(e)
                break
              case 'option':
                r.value != null && e.setAttribute('value', '' + Fn(r.value))
                break
              case 'select':
                ;(e.multiple = !!r.multiple),
                  (a = r.value),
                  a != null
                    ? Wi(e, !!r.multiple, a, !1)
                    : r.defaultValue != null &&
                      Wi(e, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof o.onClick == 'function' && (e.onclick = Qs)
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
      return Ve(t), null
    case 6:
      if (e && t.stateNode != null) bg(e, t, e.memoizedProps, r)
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(W(166))
        if (((n = ri(ho.current)), ri(Gt.current), ds(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Wt] = t),
            (a = r.nodeValue !== n) && ((e = ft), e !== null))
          )
            switch (e.tag) {
              case 3:
                cs(r.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  cs(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          a && (t.flags |= 4)
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Wt] = t),
            (t.stateNode = r)
      }
      return Ve(t), null
    case 13:
      if (
        (we(Ee),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (xe && ct !== null && t.mode & 1 && !(t.flags & 128))
          Gm(), nr(), (t.flags |= 98560), (a = !1)
        else if (((a = ds(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!a) throw Error(W(318))
            if (
              ((a = t.memoizedState),
              (a = a !== null ? a.dehydrated : null),
              !a)
            )
              throw Error(W(317))
            a[Wt] = t
          } else
            nr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          Ve(t), (a = !1)
        } else Nt !== null && (ec(Nt), (Nt = null)), (a = !0)
        if (!a) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Ee.current & 1 ? Ne === 0 && (Ne = 3) : ad())),
          t.updateQueue !== null && (t.flags |= 4),
          Ve(t),
          null)
    case 4:
      return (
        rr(), Wu(e, t), e === null && lo(t.stateNode.containerInfo), Ve(t), null
      )
    case 10:
      return qc(t.type._context), Ve(t), null
    case 17:
      return ot(t.type) && Ks(), Ve(t), null
    case 19:
      if ((we(Ee), (a = t.memoizedState), a === null)) return Ve(t), null
      if (((r = (t.flags & 128) !== 0), (u = a.rendering), u === null))
        if (r) Or(a, !1)
        else {
          if (Ne !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((u = ia(e)), u !== null)) {
                for (
                  t.flags |= 128,
                    Or(a, !1),
                    r = u.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (a = n),
                    (e = r),
                    (a.flags &= 14680066),
                    (u = a.alternate),
                    u === null
                      ? ((a.childLanes = 0),
                        (a.lanes = e),
                        (a.child = null),
                        (a.subtreeFlags = 0),
                        (a.memoizedProps = null),
                        (a.memoizedState = null),
                        (a.updateQueue = null),
                        (a.dependencies = null),
                        (a.stateNode = null))
                      : ((a.childLanes = u.childLanes),
                        (a.lanes = u.lanes),
                        (a.child = u.child),
                        (a.subtreeFlags = 0),
                        (a.deletions = null),
                        (a.memoizedProps = u.memoizedProps),
                        (a.memoizedState = u.memoizedState),
                        (a.updateQueue = u.updateQueue),
                        (a.type = u.type),
                        (e = u.dependencies),
                        (a.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext
                              })),
                    (n = n.sibling)
                return _e(Ee, (Ee.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          a.tail !== null &&
            Me() > sr &&
            ((t.flags |= 128), (r = !0), Or(a, !1), (t.lanes = 4194304))
        }
      else {
        if (!r)
          if (((e = ia(u)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Or(a, !0),
              a.tail === null && a.tailMode === 'hidden' && !u.alternate && !xe)
            )
              return Ve(t), null
          } else
            2 * Me() - a.renderingStartTime > sr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Or(a, !1), (t.lanes = 4194304))
        a.isBackwards
          ? ((u.sibling = t.child), (t.child = u))
          : ((n = a.last),
            n !== null ? (n.sibling = u) : (t.child = u),
            (a.last = u))
      }
      return a.tail !== null
        ? ((t = a.tail),
          (a.rendering = t),
          (a.tail = t.sibling),
          (a.renderingStartTime = Me()),
          (t.sibling = null),
          (n = Ee.current),
          _e(Ee, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ve(t), null)
    case 22:
    case 23:
      return (
        sd(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? lt & 1073741824 && (Ve(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ve(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(W(156, t.tag))
}
function B1(e, t) {
  switch ((Fc(t), t.tag)) {
    case 1:
      return (
        ot(t.type) && Ks(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        rr(),
        we(rt),
        we(Ue),
        Qc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return Gc(t), null
    case 13:
      if (
        (we(Ee), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(W(340))
        nr()
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 19:
      return we(Ee), null
    case 4:
      return rr(), null
    case 10:
      return qc(t.type._context), null
    case 22:
    case 23:
      return sd(), null
    case 24:
      return null
    default:
      return null
  }
}
var ps = !1,
  We = !1,
  F1 = typeof WeakSet == 'function' ? WeakSet : Set,
  K = null
function qi(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (r) {
        Le(e, t, r)
      }
    else n.current = null
}
function Uu(e, t, n) {
  try {
    n()
  } catch (r) {
    Le(e, t, r)
  }
}
var jh = !1
function $1(e, t) {
  if (((bu = Ws), (e = Am()), jc(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window
        var r = n.getSelection && n.getSelection()
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode
          var o = r.anchorOffset,
            a = r.focusNode
          r = r.focusOffset
          try {
            n.nodeType, a.nodeType
          } catch {
            n = null
            break e
          }
          var u = 0,
            d = -1,
            c = -1,
            p = 0,
            m = 0,
            y = e,
            g = null
          t: for (;;) {
            for (
              var w;
              y !== n || (o !== 0 && y.nodeType !== 3) || (d = u + o),
                y !== a || (r !== 0 && y.nodeType !== 3) || (c = u + r),
                y.nodeType === 3 && (u += y.nodeValue.length),
                (w = y.firstChild) !== null;

            )
              (g = y), (y = w)
            for (;;) {
              if (y === e) break t
              if (
                (g === n && ++p === o && (d = u),
                g === a && ++m === r && (c = u),
                (w = y.nextSibling) !== null)
              )
                break
              ;(y = g), (g = y.parentNode)
            }
            y = w
          }
          n = d === -1 || c === -1 ? null : { start: d, end: c }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (Ou = { focusedElem: e, selectionRange: n }, Ws = !1, K = t; K !== null; )
    if (((t = K), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (K = e)
    else
      for (; K !== null; ) {
        t = K
        try {
          var T = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (T !== null) {
                  var E = T.memoizedProps,
                    k = T.memoizedState,
                    S = t.stateNode,
                    v = S.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? E : It(t.type, E),
                      k
                    )
                  S.__reactInternalSnapshotBeforeUpdate = v
                }
                break
              case 3:
                var _ = t.stateNode.containerInfo
                _.nodeType === 1
                  ? (_.textContent = '')
                  : _.nodeType === 9 &&
                    _.documentElement &&
                    _.removeChild(_.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(W(163))
            }
        } catch (P) {
          Le(t, t.return, P)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (K = e)
          break
        }
        K = t.return
      }
  return (T = jh), (jh = !1), T
}
function Wr(e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next)
    do {
      if ((o.tag & e) === e) {
        var a = o.destroy
        ;(o.destroy = void 0), a !== void 0 && Uu(t, n, a)
      }
      o = o.next
    } while (o !== r)
  }
}
function Ma(e, t) {
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
function Gu(e) {
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
function Og(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), Og(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Wt], delete t[co], delete t[Nu], delete t[T1], delete t[E1])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function Ig(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Bh(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ig(e.return)) return null
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
function Qu(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Qs))
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Qu(e, t, n), e = e.sibling; e !== null; ) Qu(e, t, n), (e = e.sibling)
}
function Ku(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ku(e, t, n), e = e.sibling; e !== null; ) Ku(e, t, n), (e = e.sibling)
}
var Fe = null,
  zt = !1
function Sn(e, t, n) {
  for (n = n.child; n !== null; ) zg(e, t, n), (n = n.sibling)
}
function zg(e, t, n) {
  if (Ut && typeof Ut.onCommitFiberUnmount == 'function')
    try {
      Ut.onCommitFiberUnmount(Sa, n)
    } catch {}
  switch (n.tag) {
    case 5:
      We || qi(n, t)
    case 6:
      var r = Fe,
        o = zt
      ;(Fe = null),
        Sn(e, t, n),
        (Fe = r),
        (zt = o),
        Fe !== null &&
          (zt
            ? ((e = Fe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Fe.removeChild(n.stateNode))
      break
    case 18:
      Fe !== null &&
        (zt
          ? ((e = Fe),
            (n = n.stateNode),
            e.nodeType === 8
              ? jl(e.parentNode, n)
              : e.nodeType === 1 && jl(e, n),
            oo(e))
          : jl(Fe, n.stateNode))
      break
    case 4:
      ;(r = Fe),
        (o = zt),
        (Fe = n.stateNode.containerInfo),
        (zt = !0),
        Sn(e, t, n),
        (Fe = r),
        (zt = o)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !We &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next
        do {
          var a = o,
            u = a.destroy
          ;(a = a.tag),
            u !== void 0 && (a & 2 || a & 4) && Uu(n, t, u),
            (o = o.next)
        } while (o !== r)
      }
      Sn(e, t, n)
      break
    case 1:
      if (
        !We &&
        (qi(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          ;(r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount()
        } catch (d) {
          Le(n, t, d)
        }
      Sn(e, t, n)
      break
    case 21:
      Sn(e, t, n)
      break
    case 22:
      n.mode & 1
        ? ((We = (r = We) || n.memoizedState !== null), Sn(e, t, n), (We = r))
        : Sn(e, t, n)
      break
    default:
      Sn(e, t, n)
  }
}
function Fh(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new F1()),
      t.forEach(function (r) {
        var o = K1.bind(null, e, r)
        n.has(r) || (n.add(r), r.then(o, o))
      })
  }
}
function Ot(e, t) {
  var n = t.deletions
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r]
      try {
        var a = e,
          u = t,
          d = u
        e: for (; d !== null; ) {
          switch (d.tag) {
            case 5:
              ;(Fe = d.stateNode), (zt = !1)
              break e
            case 3:
              ;(Fe = d.stateNode.containerInfo), (zt = !0)
              break e
            case 4:
              ;(Fe = d.stateNode.containerInfo), (zt = !0)
              break e
          }
          d = d.return
        }
        if (Fe === null) throw Error(W(160))
        zg(a, u, o), (Fe = null), (zt = !1)
        var c = o.alternate
        c !== null && (c.return = null), (o.return = null)
      } catch (p) {
        Le(o, t, p)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ng(t, e), (t = t.sibling)
}
function Ng(e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ot(t, e), qt(e), r & 4)) {
        try {
          Wr(3, e, e.return), Ma(3, e)
        } catch (E) {
          Le(e, e.return, E)
        }
        try {
          Wr(5, e, e.return)
        } catch (E) {
          Le(e, e.return, E)
        }
      }
      break
    case 1:
      Ot(t, e), qt(e), r & 512 && n !== null && qi(n, n.return)
      break
    case 5:
      if (
        (Ot(t, e),
        qt(e),
        r & 512 && n !== null && qi(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode
        try {
          to(o, '')
        } catch (E) {
          Le(e, e.return, E)
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var a = e.memoizedProps,
          u = n !== null ? n.memoizedProps : a,
          d = e.type,
          c = e.updateQueue
        if (((e.updateQueue = null), c !== null))
          try {
            d === 'input' && a.type === 'radio' && a.name != null && nm(o, a),
              wu(d, u)
            var p = wu(d, a)
            for (u = 0; u < c.length; u += 2) {
              var m = c[u],
                y = c[u + 1]
              m === 'style'
                ? am(o, y)
                : m === 'dangerouslySetInnerHTML'
                ? om(o, y)
                : m === 'children'
                ? to(o, y)
                : Pc(o, m, y, p)
            }
            switch (d) {
              case 'input':
                mu(o, a)
                break
              case 'textarea':
                im(o, a)
                break
              case 'select':
                var g = o._wrapperState.wasMultiple
                o._wrapperState.wasMultiple = !!a.multiple
                var w = a.value
                w != null
                  ? Wi(o, !!a.multiple, w, !1)
                  : g !== !!a.multiple &&
                    (a.defaultValue != null
                      ? Wi(o, !!a.multiple, a.defaultValue, !0)
                      : Wi(o, !!a.multiple, a.multiple ? [] : '', !1))
            }
            o[co] = a
          } catch (E) {
            Le(e, e.return, E)
          }
      }
      break
    case 6:
      if ((Ot(t, e), qt(e), r & 4)) {
        if (e.stateNode === null) throw Error(W(162))
        ;(o = e.stateNode), (a = e.memoizedProps)
        try {
          o.nodeValue = a
        } catch (E) {
          Le(e, e.return, E)
        }
      }
      break
    case 3:
      if (
        (Ot(t, e), qt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          oo(t.containerInfo)
        } catch (E) {
          Le(e, e.return, E)
        }
      break
    case 4:
      Ot(t, e), qt(e)
      break
    case 13:
      Ot(t, e),
        qt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((a = o.memoizedState !== null),
          (o.stateNode.isHidden = a),
          !a ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (rd = Me())),
        r & 4 && Fh(e)
      break
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((We = (p = We) || m), Ot(t, e), (We = p)) : Ot(t, e),
        qt(e),
        r & 8192)
      ) {
        if (
          ((p = e.memoizedState !== null),
          (e.stateNode.isHidden = p) && !m && e.mode & 1)
        )
          for (K = e, m = e.child; m !== null; ) {
            for (y = K = m; K !== null; ) {
              switch (((g = K), (w = g.child), g.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Wr(4, g, g.return)
                  break
                case 1:
                  qi(g, g.return)
                  var T = g.stateNode
                  if (typeof T.componentWillUnmount == 'function') {
                    ;(r = g), (n = g.return)
                    try {
                      ;(t = r),
                        (T.props = t.memoizedProps),
                        (T.state = t.memoizedState),
                        T.componentWillUnmount()
                    } catch (E) {
                      Le(r, n, E)
                    }
                  }
                  break
                case 5:
                  qi(g, g.return)
                  break
                case 22:
                  if (g.memoizedState !== null) {
                    Zh(y)
                    continue
                  }
              }
              w !== null ? ((w.return = g), (K = w)) : Zh(y)
            }
            m = m.sibling
          }
        e: for (m = null, y = e; ; ) {
          if (y.tag === 5) {
            if (m === null) {
              m = y
              try {
                ;(o = y.stateNode),
                  p
                    ? ((a = o.style),
                      typeof a.setProperty == 'function'
                        ? a.setProperty('display', 'none', 'important')
                        : (a.display = 'none'))
                    : ((d = y.stateNode),
                      (c = y.memoizedProps.style),
                      (u =
                        c != null && c.hasOwnProperty('display')
                          ? c.display
                          : null),
                      (d.style.display = sm('display', u)))
              } catch (E) {
                Le(e, e.return, E)
              }
            }
          } else if (y.tag === 6) {
            if (m === null)
              try {
                y.stateNode.nodeValue = p ? '' : y.memoizedProps
              } catch (E) {
                Le(e, e.return, E)
              }
          } else if (
            ((y.tag !== 22 && y.tag !== 23) ||
              y.memoizedState === null ||
              y === e) &&
            y.child !== null
          ) {
            ;(y.child.return = y), (y = y.child)
            continue
          }
          if (y === e) break e
          for (; y.sibling === null; ) {
            if (y.return === null || y.return === e) break e
            m === y && (m = null), (y = y.return)
          }
          m === y && (m = null), (y.sibling.return = y.return), (y = y.sibling)
        }
      }
      break
    case 19:
      Ot(t, e), qt(e), r & 4 && Fh(e)
      break
    case 21:
      break
    default:
      Ot(t, e), qt(e)
  }
}
function qt(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ig(n)) {
            var r = n
            break e
          }
          n = n.return
        }
        throw Error(W(160))
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode
          r.flags & 32 && (to(o, ''), (r.flags &= -33))
          var a = Bh(e)
          Ku(e, a, o)
          break
        case 3:
        case 4:
          var u = r.stateNode.containerInfo,
            d = Bh(e)
          Qu(e, d, u)
          break
        default:
          throw Error(W(161))
      }
    } catch (c) {
      Le(e, e.return, c)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function Z1(e, t, n) {
  ;(K = e), Ag(e)
}
function Ag(e, t, n) {
  for (var r = (e.mode & 1) !== 0; K !== null; ) {
    var o = K,
      a = o.child
    if (o.tag === 22 && r) {
      var u = o.memoizedState !== null || ps
      if (!u) {
        var d = o.alternate,
          c = (d !== null && d.memoizedState !== null) || We
        d = ps
        var p = We
        if (((ps = u), (We = c) && !p))
          for (K = o; K !== null; )
            (u = K),
              (c = u.child),
              u.tag === 22 && u.memoizedState !== null
                ? Hh(o)
                : c !== null
                ? ((c.return = u), (K = c))
                : Hh(o)
        for (; a !== null; ) (K = a), Ag(a), (a = a.sibling)
        ;(K = o), (ps = d), (We = p)
      }
      $h(e)
    } else
      o.subtreeFlags & 8772 && a !== null ? ((a.return = o), (K = a)) : $h(e)
  }
}
function $h(e) {
  for (; K !== null; ) {
    var t = K
    if (t.flags & 8772) {
      var n = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              We || Ma(5, t)
              break
            case 1:
              var r = t.stateNode
              if (t.flags & 4 && !We)
                if (n === null) r.componentDidMount()
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : It(t.type, n.memoizedProps)
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  )
                }
              var a = t.updateQueue
              a !== null && Ph(t, a, r)
              break
            case 3:
              var u = t.updateQueue
              if (u !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode
                      break
                    case 1:
                      n = t.child.stateNode
                  }
                Ph(t, u, n)
              }
              break
            case 5:
              var d = t.stateNode
              if (n === null && t.flags & 4) {
                n = d
                var c = t.memoizedProps
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    c.autoFocus && n.focus()
                    break
                  case 'img':
                    c.src && (n.src = c.src)
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
                var p = t.alternate
                if (p !== null) {
                  var m = p.memoizedState
                  if (m !== null) {
                    var y = m.dehydrated
                    y !== null && oo(y)
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
              throw Error(W(163))
          }
        We || (t.flags & 512 && Gu(t))
      } catch (g) {
        Le(t, t.return, g)
      }
    }
    if (t === e) {
      K = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;(n.return = t.return), (K = n)
      break
    }
    K = t.return
  }
}
function Zh(e) {
  for (; K !== null; ) {
    var t = K
    if (t === e) {
      K = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;(n.return = t.return), (K = n)
      break
    }
    K = t.return
  }
}
function Hh(e) {
  for (; K !== null; ) {
    var t = K
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            Ma(4, t)
          } catch (c) {
            Le(t, n, c)
          }
          break
        case 1:
          var r = t.stateNode
          if (typeof r.componentDidMount == 'function') {
            var o = t.return
            try {
              r.componentDidMount()
            } catch (c) {
              Le(t, o, c)
            }
          }
          var a = t.return
          try {
            Gu(t)
          } catch (c) {
            Le(t, a, c)
          }
          break
        case 5:
          var u = t.return
          try {
            Gu(t)
          } catch (c) {
            Le(t, u, c)
          }
      }
    } catch (c) {
      Le(t, t.return, c)
    }
    if (t === e) {
      K = null
      break
    }
    var d = t.sibling
    if (d !== null) {
      ;(d.return = t.return), (K = d)
      break
    }
    K = t.return
  }
}
var H1 = Math.ceil,
  sa = vn.ReactCurrentDispatcher,
  nd = vn.ReactCurrentOwner,
  Pt = vn.ReactCurrentBatchConfig,
  he = 0,
  De = null,
  Ie = null,
  Ze = 0,
  lt = 0,
  Vi = Vn(0),
  Ne = 0,
  vo = null,
  fi = 0,
  ba = 0,
  id = 0,
  Ur = null,
  nt = null,
  rd = 0,
  sr = 1 / 0,
  rn = null,
  aa = !1,
  Yu = null,
  Dn = null,
  ms = !1,
  bn = null,
  la = 0,
  Gr = 0,
  Xu = null,
  zs = -1,
  Ns = 0
function Ye() {
  return he & 6 ? Me() : zs !== -1 ? zs : (zs = Me())
}
function jn(e) {
  return e.mode & 1
    ? he & 2 && Ze !== 0
      ? Ze & -Ze
      : C1.transition !== null
      ? (Ns === 0 && (Ns = ym()), Ns)
      : ((e = ge),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Cm(e.type))),
        e)
    : 1
}
function Rt(e, t, n, r) {
  if (50 < Gr) throw ((Gr = 0), (Xu = null), Error(W(185)))
  Po(e, n, r),
    (!(he & 2) || e !== De) &&
      (e === De && (!(he & 2) && (ba |= n), Ne === 4 && Ln(e, Ze)),
      st(e, r),
      n === 1 && he === 0 && !(t.mode & 1) && ((sr = Me() + 500), Ca && Wn()))
}
function st(e, t) {
  var n = e.callbackNode
  C0(e, t)
  var r = Vs(e, e === De ? Ze : 0)
  if (r === 0)
    n !== null && Xf(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Xf(n), t === 1))
      e.tag === 0 ? P1(qh.bind(null, e)) : Vm(qh.bind(null, e)),
        S1(function () {
          !(he & 6) && Wn()
        }),
        (n = null)
    else {
      switch (wm(r)) {
        case 1:
          n = bc
          break
        case 4:
          n = vm
          break
        case 16:
          n = qs
          break
        case 536870912:
          n = _m
          break
        default:
          n = qs
      }
      n = Hg(n, Rg.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function Rg(e, t) {
  if (((zs = -1), (Ns = 0), he & 6)) throw Error(W(327))
  var n = e.callbackNode
  if (Yi() && e.callbackNode !== n) return null
  var r = Vs(e, e === De ? Ze : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = ua(e, r)
  else {
    t = r
    var o = he
    he |= 2
    var a = jg()
    ;(De !== e || Ze !== t) && ((rn = null), (sr = Me() + 500), ai(e, t))
    do
      try {
        W1()
        break
      } catch (d) {
        Dg(e, d)
      }
    while (!0)
    Hc(),
      (sa.current = a),
      (he = o),
      Ie !== null ? (t = 0) : ((De = null), (Ze = 0), (t = Ne))
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Pu(e)), o !== 0 && ((r = o), (t = Ju(e, o)))), t === 1)
    )
      throw ((n = vo), ai(e, 0), Ln(e, r), st(e, Me()), n)
    if (t === 6) Ln(e, r)
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !q1(o) &&
          ((t = ua(e, r)),
          t === 2 && ((a = Pu(e)), a !== 0 && ((r = a), (t = Ju(e, a)))),
          t === 1))
      )
        throw ((n = vo), ai(e, 0), Ln(e, r), st(e, Me()), n)
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(W(345))
        case 2:
          ei(e, nt, rn)
          break
        case 3:
          if (
            (Ln(e, r), (r & 130023424) === r && ((t = rd + 500 - Me()), 10 < t))
          ) {
            if (Vs(e, 0) !== 0) break
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Ye(), (e.pingedLanes |= e.suspendedLanes & o)
              break
            }
            e.timeoutHandle = zu(ei.bind(null, e, nt, rn), t)
            break
          }
          ei(e, nt, rn)
          break
        case 4:
          if ((Ln(e, r), (r & 4194240) === r)) break
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var u = 31 - At(r)
            ;(a = 1 << u), (u = t[u]), u > o && (o = u), (r &= ~a)
          }
          if (
            ((r = o),
            (r = Me() - r),
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
                : 1960 * H1(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = zu(ei.bind(null, e, nt, rn), r)
            break
          }
          ei(e, nt, rn)
          break
        case 5:
          ei(e, nt, rn)
          break
        default:
          throw Error(W(329))
      }
    }
  }
  return st(e, Me()), e.callbackNode === n ? Rg.bind(null, e) : null
}
function Ju(e, t) {
  var n = Ur
  return (
    e.current.memoizedState.isDehydrated && (ai(e, t).flags |= 256),
    (e = ua(e, t)),
    e !== 2 && ((t = nt), (nt = n), t !== null && ec(t)),
    e
  )
}
function ec(e) {
  nt === null ? (nt = e) : nt.push.apply(nt, e)
}
function q1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            a = o.getSnapshot
          o = o.value
          try {
            if (!jt(a(), o)) return !1
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
function Ln(e, t) {
  for (
    t &= ~id,
      t &= ~ba,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - At(t),
      r = 1 << n
    ;(e[n] = -1), (t &= ~r)
  }
}
function qh(e) {
  if (he & 6) throw Error(W(327))
  Yi()
  var t = Vs(e, 0)
  if (!(t & 1)) return st(e, Me()), null
  var n = ua(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = Pu(e)
    r !== 0 && ((t = r), (n = Ju(e, r)))
  }
  if (n === 1) throw ((n = vo), ai(e, 0), Ln(e, t), st(e, Me()), n)
  if (n === 6) throw Error(W(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    ei(e, nt, rn),
    st(e, Me()),
    null
  )
}
function od(e, t) {
  var n = he
  he |= 1
  try {
    return e(t)
  } finally {
    ;(he = n), he === 0 && ((sr = Me() + 500), Ca && Wn())
  }
}
function hi(e) {
  bn !== null && bn.tag === 0 && !(he & 6) && Yi()
  var t = he
  he |= 1
  var n = Pt.transition,
    r = ge
  try {
    if (((Pt.transition = null), (ge = 1), e)) return e()
  } finally {
    ;(ge = r), (Pt.transition = n), (he = t), !(he & 6) && Wn()
  }
}
function sd() {
  ;(lt = Vi.current), we(Vi)
}
function ai(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), w1(n)), Ie !== null))
    for (n = Ie.return; n !== null; ) {
      var r = n
      switch ((Fc(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && Ks()
          break
        case 3:
          rr(), we(rt), we(Ue), Qc()
          break
        case 5:
          Gc(r)
          break
        case 4:
          rr()
          break
        case 13:
          we(Ee)
          break
        case 19:
          we(Ee)
          break
        case 10:
          qc(r.type._context)
          break
        case 22:
        case 23:
          sd()
      }
      n = n.return
    }
  if (
    ((De = e),
    (Ie = e = Bn(e.current, null)),
    (Ze = lt = t),
    (Ne = 0),
    (vo = null),
    (id = ba = fi = 0),
    (nt = Ur = null),
    ii !== null)
  ) {
    for (t = 0; t < ii.length; t++)
      if (((n = ii[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var o = r.next,
          a = n.pending
        if (a !== null) {
          var u = a.next
          ;(a.next = o), (r.next = u)
        }
        n.pending = r
      }
    ii = null
  }
  return e
}
function Dg(e, t) {
  do {
    var n = Ie
    try {
      if ((Hc(), (bs.current = oa), ra)) {
        for (var r = Pe.memoizedState; r !== null; ) {
          var o = r.queue
          o !== null && (o.pending = null), (r = r.next)
        }
        ra = !1
      }
      if (
        ((di = 0),
        (Re = ze = Pe = null),
        (Vr = !1),
        (po = 0),
        (nd.current = null),
        n === null || n.return === null)
      ) {
        ;(Ne = 1), (vo = t), (Ie = null)
        break
      }
      e: {
        var a = e,
          u = n.return,
          d = n,
          c = t
        if (
          ((t = Ze),
          (d.flags |= 32768),
          c !== null && typeof c == 'object' && typeof c.then == 'function')
        ) {
          var p = c,
            m = d,
            y = m.tag
          if (!(m.mode & 1) && (y === 0 || y === 11 || y === 15)) {
            var g = m.alternate
            g
              ? ((m.updateQueue = g.updateQueue),
                (m.memoizedState = g.memoizedState),
                (m.lanes = g.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null))
          }
          var w = Oh(u)
          if (w !== null) {
            ;(w.flags &= -257),
              Ih(w, u, d, a, t),
              w.mode & 1 && bh(a, p, t),
              (t = w),
              (c = p)
            var T = t.updateQueue
            if (T === null) {
              var E = new Set()
              E.add(c), (t.updateQueue = E)
            } else T.add(c)
            break e
          } else {
            if (!(t & 1)) {
              bh(a, p, t), ad()
              break e
            }
            c = Error(W(426))
          }
        } else if (xe && d.mode & 1) {
          var k = Oh(u)
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              Ih(k, u, d, a, t),
              $c(or(c, d))
            break e
          }
        }
        ;(a = c = or(c, d)),
          Ne !== 4 && (Ne = 2),
          Ur === null ? (Ur = [a]) : Ur.push(a),
          (a = u)
        do {
          switch (a.tag) {
            case 3:
              ;(a.flags |= 65536), (t &= -t), (a.lanes |= t)
              var S = wg(a, c, t)
              Eh(a, S)
              break e
            case 1:
              d = c
              var v = a.type,
                _ = a.stateNode
              if (
                !(a.flags & 128) &&
                (typeof v.getDerivedStateFromError == 'function' ||
                  (_ !== null &&
                    typeof _.componentDidCatch == 'function' &&
                    (Dn === null || !Dn.has(_))))
              ) {
                ;(a.flags |= 65536), (t &= -t), (a.lanes |= t)
                var P = Sg(a, d, t)
                Eh(a, P)
                break e
              }
          }
          a = a.return
        } while (a !== null)
      }
      Fg(n)
    } catch (C) {
      ;(t = C), Ie === n && n !== null && (Ie = n = n.return)
      continue
    }
    break
  } while (!0)
}
function jg() {
  var e = sa.current
  return (sa.current = oa), e === null ? oa : e
}
function ad() {
  ;(Ne === 0 || Ne === 3 || Ne === 2) && (Ne = 4),
    De === null || (!(fi & 268435455) && !(ba & 268435455)) || Ln(De, Ze)
}
function ua(e, t) {
  var n = he
  he |= 2
  var r = jg()
  ;(De !== e || Ze !== t) && ((rn = null), ai(e, t))
  do
    try {
      V1()
      break
    } catch (o) {
      Dg(e, o)
    }
  while (!0)
  if ((Hc(), (he = n), (sa.current = r), Ie !== null)) throw Error(W(261))
  return (De = null), (Ze = 0), Ne
}
function V1() {
  for (; Ie !== null; ) Bg(Ie)
}
function W1() {
  for (; Ie !== null && !v0(); ) Bg(Ie)
}
function Bg(e) {
  var t = Zg(e.alternate, e, lt)
  ;(e.memoizedProps = e.pendingProps),
    t === null ? Fg(e) : (Ie = t),
    (nd.current = null)
}
function Fg(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = B1(n, t)), n !== null)) {
        ;(n.flags &= 32767), (Ie = n)
        return
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(Ne = 6), (Ie = null)
        return
      }
    } else if (((n = j1(n, t, lt)), n !== null)) {
      Ie = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      Ie = t
      return
    }
    Ie = t = e
  } while (t !== null)
  Ne === 0 && (Ne = 5)
}
function ei(e, t, n) {
  var r = ge,
    o = Pt.transition
  try {
    ;(Pt.transition = null), (ge = 1), U1(e, t, n, r)
  } finally {
    ;(Pt.transition = o), (ge = r)
  }
  return null
}
function U1(e, t, n, r) {
  do Yi()
  while (bn !== null)
  if (he & 6) throw Error(W(327))
  n = e.finishedWork
  var o = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(W(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var a = n.lanes | n.childLanes
  if (
    (L0(e, a),
    e === De && ((Ie = De = null), (Ze = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ms ||
      ((ms = !0),
      Hg(qs, function () {
        return Yi(), null
      })),
    (a = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || a)
  ) {
    ;(a = Pt.transition), (Pt.transition = null)
    var u = ge
    ge = 1
    var d = he
    ;(he |= 4),
      (nd.current = null),
      $1(e, n),
      Ng(n, e),
      h1(Ou),
      (Ws = !!bu),
      (Ou = bu = null),
      (e.current = n),
      Z1(n),
      _0(),
      (he = d),
      (ge = u),
      (Pt.transition = a)
  } else e.current = n
  if (
    (ms && ((ms = !1), (bn = e), (la = o)),
    (a = e.pendingLanes),
    a === 0 && (Dn = null),
    S0(n.stateNode),
    st(e, Me()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest })
  if (aa) throw ((aa = !1), (e = Yu), (Yu = null), e)
  return (
    la & 1 && e.tag !== 0 && Yi(),
    (a = e.pendingLanes),
    a & 1 ? (e === Xu ? Gr++ : ((Gr = 0), (Xu = e))) : (Gr = 0),
    Wn(),
    null
  )
}
function Yi() {
  if (bn !== null) {
    var e = wm(la),
      t = Pt.transition,
      n = ge
    try {
      if (((Pt.transition = null), (ge = 16 > e ? 16 : e), bn === null))
        var r = !1
      else {
        if (((e = bn), (bn = null), (la = 0), he & 6)) throw Error(W(331))
        var o = he
        for (he |= 4, K = e.current; K !== null; ) {
          var a = K,
            u = a.child
          if (K.flags & 16) {
            var d = a.deletions
            if (d !== null) {
              for (var c = 0; c < d.length; c++) {
                var p = d[c]
                for (K = p; K !== null; ) {
                  var m = K
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wr(8, m, a)
                  }
                  var y = m.child
                  if (y !== null) (y.return = m), (K = y)
                  else
                    for (; K !== null; ) {
                      m = K
                      var g = m.sibling,
                        w = m.return
                      if ((Og(m), m === p)) {
                        K = null
                        break
                      }
                      if (g !== null) {
                        ;(g.return = w), (K = g)
                        break
                      }
                      K = w
                    }
                }
              }
              var T = a.alternate
              if (T !== null) {
                var E = T.child
                if (E !== null) {
                  T.child = null
                  do {
                    var k = E.sibling
                    ;(E.sibling = null), (E = k)
                  } while (E !== null)
                }
              }
              K = a
            }
          }
          if (a.subtreeFlags & 2064 && u !== null) (u.return = a), (K = u)
          else
            e: for (; K !== null; ) {
              if (((a = K), a.flags & 2048))
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Wr(9, a, a.return)
                }
              var S = a.sibling
              if (S !== null) {
                ;(S.return = a.return), (K = S)
                break e
              }
              K = a.return
            }
        }
        var v = e.current
        for (K = v; K !== null; ) {
          u = K
          var _ = u.child
          if (u.subtreeFlags & 2064 && _ !== null) (_.return = u), (K = _)
          else
            e: for (u = v; K !== null; ) {
              if (((d = K), d.flags & 2048))
                try {
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ma(9, d)
                  }
                } catch (C) {
                  Le(d, d.return, C)
                }
              if (d === u) {
                K = null
                break e
              }
              var P = d.sibling
              if (P !== null) {
                ;(P.return = d.return), (K = P)
                break e
              }
              K = d.return
            }
        }
        if (
          ((he = o), Wn(), Ut && typeof Ut.onPostCommitFiberRoot == 'function')
        )
          try {
            Ut.onPostCommitFiberRoot(Sa, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;(ge = n), (Pt.transition = t)
    }
  }
  return !1
}
function Vh(e, t, n) {
  ;(t = or(n, t)),
    (t = wg(e, t, 1)),
    (e = Rn(e, t, 1)),
    (t = Ye()),
    e !== null && (Po(e, 1, t), st(e, t))
}
function Le(e, t, n) {
  if (e.tag === 3) Vh(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Vh(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Dn === null || !Dn.has(r)))
        ) {
          ;(e = or(n, e)),
            (e = Sg(t, e, 1)),
            (t = Rn(t, e, 1)),
            (e = Ye()),
            t !== null && (Po(t, 1, e), st(t, e))
          break
        }
      }
      t = t.return
    }
}
function G1(e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = Ye()),
    (e.pingedLanes |= e.suspendedLanes & n),
    De === e &&
      (Ze & n) === n &&
      (Ne === 4 || (Ne === 3 && (Ze & 130023424) === Ze && 500 > Me() - rd)
        ? ai(e, 0)
        : (id |= n)),
    st(e, t)
}
function $g(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = os), (os <<= 1), !(os & 130023424) && (os = 4194304))
      : (t = 1))
  var n = Ye()
  ;(e = hn(e, t)), e !== null && (Po(e, t, n), st(e, n))
}
function Q1(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), $g(e, n)
}
function K1(e, t) {
  var n = 0
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState
      o !== null && (n = o.retryLane)
      break
    case 19:
      r = e.stateNode
      break
    default:
      throw Error(W(314))
  }
  r !== null && r.delete(t), $g(e, n)
}
var Zg
Zg = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || rt.current) it = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (it = !1), D1(e, t, n)
      it = !!(e.flags & 131072)
    }
  else (it = !1), xe && t.flags & 1048576 && Wm(t, Js, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      Is(e, t), (e = t.pendingProps)
      var o = tr(t, Ue.current)
      Ki(t, n), (o = Yc(null, t, r, e, o, n))
      var a = Xc()
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ot(r) ? ((a = !0), Ys(t)) : (a = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Wc(t),
            (o.updater = ka),
            (t.stateNode = o),
            (o._reactInternals = t),
            Fu(t, r, e, n),
            (t = Hu(null, t, r, !0, a, n)))
          : ((t.tag = 0), xe && a && Bc(t), Ke(null, t, o, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch (
          (Is(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = X1(r)),
          (e = It(r, e)),
          o)
        ) {
          case 0:
            t = Zu(null, t, r, e, n)
            break e
          case 1:
            t = Ah(null, t, r, e, n)
            break e
          case 11:
            t = zh(null, t, r, e, n)
            break e
          case 14:
            t = Nh(null, t, r, It(r.type, e), n)
            break e
        }
        throw Error(W(306, r, ''))
      }
      return t
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : It(r, o)),
        Zu(e, t, r, o, n)
      )
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : It(r, o)),
        Ah(e, t, r, o, n)
      )
    case 3:
      e: {
        if ((Pg(t), e === null)) throw Error(W(387))
        ;(r = t.pendingProps),
          (a = t.memoizedState),
          (o = a.element),
          Xm(e, t),
          na(t, r, null, n)
        var u = t.memoizedState
        if (((r = u.element), a.isDehydrated))
          if (
            ((a = {
              element: r,
              isDehydrated: !1,
              cache: u.cache,
              pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
              transitions: u.transitions
            }),
            (t.updateQueue.baseState = a),
            (t.memoizedState = a),
            t.flags & 256)
          ) {
            ;(o = or(Error(W(423)), t)), (t = Rh(e, t, r, n, o))
            break e
          } else if (r !== o) {
            ;(o = or(Error(W(424)), t)), (t = Rh(e, t, r, n, o))
            break e
          } else
            for (
              ct = An(t.stateNode.containerInfo.firstChild),
                ft = t,
                xe = !0,
                Nt = null,
                n = Km(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((nr(), r === o)) {
            t = pn(e, t, n)
            break e
          }
          Ke(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        Jm(t),
        e === null && Du(t),
        (r = t.type),
        (o = t.pendingProps),
        (a = e !== null ? e.memoizedProps : null),
        (u = o.children),
        Iu(r, o) ? (u = null) : a !== null && Iu(r, a) && (t.flags |= 32),
        Eg(e, t),
        Ke(e, t, u, n),
        t.child
      )
    case 6:
      return e === null && Du(t), null
    case 13:
      return Cg(e, t, n)
    case 4:
      return (
        Uc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ir(t, null, r, n)) : Ke(e, t, r, n),
        t.child
      )
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : It(r, o)),
        zh(e, t, r, o, n)
      )
    case 7:
      return Ke(e, t, t.pendingProps, n), t.child
    case 8:
      return Ke(e, t, t.pendingProps.children, n), t.child
    case 12:
      return Ke(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (a = t.memoizedProps),
          (u = o.value),
          _e(ea, r._currentValue),
          (r._currentValue = u),
          a !== null)
        )
          if (jt(a.value, u)) {
            if (a.children === o.children && !rt.current) {
              t = pn(e, t, n)
              break e
            }
          } else
            for (a = t.child, a !== null && (a.return = t); a !== null; ) {
              var d = a.dependencies
              if (d !== null) {
                u = a.child
                for (var c = d.firstContext; c !== null; ) {
                  if (c.context === r) {
                    if (a.tag === 1) {
                      ;(c = un(-1, n & -n)), (c.tag = 2)
                      var p = a.updateQueue
                      if (p !== null) {
                        p = p.shared
                        var m = p.pending
                        m === null
                          ? (c.next = c)
                          : ((c.next = m.next), (m.next = c)),
                          (p.pending = c)
                      }
                    }
                    ;(a.lanes |= n),
                      (c = a.alternate),
                      c !== null && (c.lanes |= n),
                      ju(a.return, n, t),
                      (d.lanes |= n)
                    break
                  }
                  c = c.next
                }
              } else if (a.tag === 10) u = a.type === t.type ? null : a.child
              else if (a.tag === 18) {
                if (((u = a.return), u === null)) throw Error(W(341))
                ;(u.lanes |= n),
                  (d = u.alternate),
                  d !== null && (d.lanes |= n),
                  ju(u, n, t),
                  (u = a.sibling)
              } else u = a.child
              if (u !== null) u.return = a
              else
                for (u = a; u !== null; ) {
                  if (u === t) {
                    u = null
                    break
                  }
                  if (((a = u.sibling), a !== null)) {
                    ;(a.return = u.return), (u = a)
                    break
                  }
                  u = u.return
                }
              a = u
            }
        Ke(e, t, o.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Ki(t, n),
        (o = Lt(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ke(e, t, r, n),
        t.child
      )
    case 14:
      return (
        (r = t.type),
        (o = It(r, t.pendingProps)),
        (o = It(r.type, o)),
        Nh(e, t, r, o, n)
      )
    case 15:
      return xg(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : It(r, o)),
        Is(e, t),
        (t.tag = 1),
        ot(r) ? ((e = !0), Ys(t)) : (e = !1),
        Ki(t, n),
        yg(t, r, o),
        Fu(t, r, o, n),
        Hu(null, t, r, !0, e, n)
      )
    case 19:
      return Lg(e, t, n)
    case 22:
      return Tg(e, t, n)
  }
  throw Error(W(156, t.tag))
}
function Hg(e, t) {
  return gm(e, t)
}
function Y1(e, t, n, r) {
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
function Tt(e, t, n, r) {
  return new Y1(e, t, n, r)
}
function ld(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function X1(e) {
  if (typeof e == 'function') return ld(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === Lc)) return 11
    if (e === kc) return 14
  }
  return 2
}
function Bn(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = Tt(e.tag, t, e.key, e.mode)),
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
function As(e, t, n, r, o, a) {
  var u = 2
  if (((r = e), typeof e == 'function')) ld(e) && (u = 1)
  else if (typeof e == 'string') u = 5
  else
    e: switch (e) {
      case Ai:
        return li(n.children, o, a, t)
      case Cc:
        ;(u = 8), (o |= 8)
        break
      case cu:
        return (e = Tt(12, n, t, o | 2)), (e.elementType = cu), (e.lanes = a), e
      case du:
        return (e = Tt(13, n, t, o)), (e.elementType = du), (e.lanes = a), e
      case fu:
        return (e = Tt(19, n, t, o)), (e.elementType = fu), (e.lanes = a), e
      case Jp:
        return Oa(n, o, a, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Yp:
              u = 10
              break e
            case Xp:
              u = 9
              break e
            case Lc:
              u = 11
              break e
            case kc:
              u = 14
              break e
            case Tn:
              ;(u = 16), (r = null)
              break e
          }
        throw Error(W(130, e == null ? e : typeof e, ''))
    }
  return (
    (t = Tt(u, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = a), t
  )
}
function li(e, t, n, r) {
  return (e = Tt(7, e, r, t)), (e.lanes = n), e
}
function Oa(e, t, n, r) {
  return (
    (e = Tt(22, e, r, t)),
    (e.elementType = Jp),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function Wl(e, t, n) {
  return (e = Tt(6, e, null, t)), (e.lanes = n), e
}
function Ul(e, t, n) {
  return (
    (t = Tt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }),
    t
  )
}
function J1(e, t, n, r, o) {
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
    (this.eventTimes = Ll(0)),
    (this.expirationTimes = Ll(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ll(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null)
}
function ud(e, t, n, r, o, a, u, d, c) {
  return (
    (e = new J1(e, t, n, d, c)),
    t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
    (a = Tt(3, null, null, t)),
    (e.current = a),
    (a.stateNode = e),
    (a.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }),
    Wc(a),
    e
  )
}
function ew(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: Ni,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n
  }
}
function qg(e) {
  if (!e) return $n
  e = e._reactInternals
  e: {
    if (yi(e) !== e || e.tag !== 1) throw Error(W(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (ot(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(W(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if (ot(n)) return qm(e, n, t)
  }
  return t
}
function Vg(e, t, n, r, o, a, u, d, c) {
  return (
    (e = ud(n, r, !0, e, o, a, u, d, c)),
    (e.context = qg(null)),
    (n = e.current),
    (r = Ye()),
    (o = jn(n)),
    (a = un(r, o)),
    (a.callback = t ?? null),
    Rn(n, a, o),
    (e.current.lanes = o),
    Po(e, o, r),
    st(e, r),
    e
  )
}
function Ia(e, t, n, r) {
  var o = t.current,
    a = Ye(),
    u = jn(o)
  return (
    (n = qg(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = un(a, u)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Rn(o, t, u)),
    e !== null && (Rt(e, o, u, a), Ms(e, o, u)),
    u
  )
}
function ca(e) {
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
function cd(e, t) {
  Wh(e, t), (e = e.alternate) && Wh(e, t)
}
function tw() {
  return null
}
var Wg =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function dd(e) {
  this._internalRoot = e
}
za.prototype.render = dd.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(W(409))
  Ia(e, t, null, null)
}
za.prototype.unmount = dd.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    hi(function () {
      Ia(null, e, null, null)
    }),
      (t[fn] = null)
  }
}
function za(e) {
  this._internalRoot = e
}
za.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Tm()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < Cn.length && t !== 0 && t < Cn[n].priority; n++);
    Cn.splice(n, 0, e), n === 0 && Pm(e)
  }
}
function fd(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function Na(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function Uh() {}
function nw(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var a = r
      r = function () {
        var p = ca(u)
        a.call(p)
      }
    }
    var u = Vg(t, r, e, 0, null, !1, !1, '', Uh)
    return (
      (e._reactRootContainer = u),
      (e[fn] = u.current),
      lo(e.nodeType === 8 ? e.parentNode : e),
      hi(),
      u
    )
  }
  for (; (o = e.lastChild); ) e.removeChild(o)
  if (typeof r == 'function') {
    var d = r
    r = function () {
      var p = ca(c)
      d.call(p)
    }
  }
  var c = ud(e, 0, !1, null, null, !1, !1, '', Uh)
  return (
    (e._reactRootContainer = c),
    (e[fn] = c.current),
    lo(e.nodeType === 8 ? e.parentNode : e),
    hi(function () {
      Ia(t, c, n, r)
    }),
    c
  )
}
function Aa(e, t, n, r, o) {
  var a = n._reactRootContainer
  if (a) {
    var u = a
    if (typeof o == 'function') {
      var d = o
      o = function () {
        var c = ca(u)
        d.call(c)
      }
    }
    Ia(t, u, e, o)
  } else u = nw(n, t, e, o, r)
  return ca(u)
}
Sm = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = Dr(t.pendingLanes)
        n !== 0 &&
          (Oc(t, n | 1), st(t, Me()), !(he & 6) && ((sr = Me() + 500), Wn()))
      }
      break
    case 13:
      hi(function () {
        var r = hn(e, 1)
        if (r !== null) {
          var o = Ye()
          Rt(r, e, 1, o)
        }
      }),
        cd(e, 1)
  }
}
Ic = function (e) {
  if (e.tag === 13) {
    var t = hn(e, 134217728)
    if (t !== null) {
      var n = Ye()
      Rt(t, e, 134217728, n)
    }
    cd(e, 134217728)
  }
}
xm = function (e) {
  if (e.tag === 13) {
    var t = jn(e),
      n = hn(e, t)
    if (n !== null) {
      var r = Ye()
      Rt(n, e, t, r)
    }
    cd(e, t)
  }
}
Tm = function () {
  return ge
}
Em = function (e, t) {
  var n = ge
  try {
    return (ge = e), t()
  } finally {
    ge = n
  }
}
xu = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((mu(e, n), (t = n.name), n.type === 'radio' && t != null)) {
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
            var o = Pa(r)
            if (!o) throw Error(W(90))
            tm(r), mu(r, o)
          }
        }
      }
      break
    case 'textarea':
      im(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && Wi(e, !!n.multiple, t, !1)
  }
}
cm = od
dm = hi
var iw = { usingClientEntryPoint: !1, Events: [Lo, Bi, Pa, lm, um, od] },
  Ir = {
    findFiberByHostInstance: ni,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom'
  },
  rw = {
    bundleType: Ir.bundleType,
    version: Ir.version,
    rendererPackageName: Ir.rendererPackageName,
    rendererConfig: Ir.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: vn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = pm(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Ir.findFiberByHostInstance || tw,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426'
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var gs = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!gs.isDisabled && gs.supportsFiber)
    try {
      ;(Sa = gs.inject(rw)), (Ut = gs)
    } catch {}
}
mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = iw
mt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!fd(t)) throw Error(W(200))
  return ew(e, t, null, n)
}
mt.createRoot = function (e, t) {
  if (!fd(e)) throw Error(W(299))
  var n = !1,
    r = '',
    o = Wg
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = ud(e, 1, !1, null, null, n, !1, r, o)),
    (e[fn] = t.current),
    lo(e.nodeType === 8 ? e.parentNode : e),
    new dd(t)
  )
}
mt.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(W(188))
      : ((e = Object.keys(e).join(',')), Error(W(268, e)))
  return (e = pm(t)), (e = e === null ? null : e.stateNode), e
}
mt.flushSync = function (e) {
  return hi(e)
}
mt.hydrate = function (e, t, n) {
  if (!Na(t)) throw Error(W(200))
  return Aa(null, e, t, !0, n)
}
mt.hydrateRoot = function (e, t, n) {
  if (!fd(e)) throw Error(W(405))
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    a = '',
    u = Wg
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
    (t = Vg(t, null, e, 1, n ?? null, o, !1, a, u)),
    (e[fn] = t.current),
    lo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o)
  return new za(t)
}
mt.render = function (e, t, n) {
  if (!Na(t)) throw Error(W(200))
  return Aa(null, e, t, !1, n)
}
mt.unmountComponentAtNode = function (e) {
  if (!Na(e)) throw Error(W(40))
  return e._reactRootContainer
    ? (hi(function () {
        Aa(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[fn] = null)
        })
      }),
      !0)
    : !1
}
mt.unstable_batchedUpdates = od
mt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Na(n)) throw Error(W(200))
  if (e == null || e._reactInternals === void 0) throw Error(W(38))
  return Aa(e, t, n, !1, r)
}
mt.version = '18.3.1-next-f1338f8080-20240426'
function Ug() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ug)
    } catch (e) {
      console.error(e)
    }
}
Ug(), (Up.exports = mt)
var Gg = Up.exports,
  Qg,
  Gh = Gg
;(Qg = Gh.createRoot), Gh.hydrateRoot
var Kg = { exports: {} },
  Yg = {}
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mo = H
function ow(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var sw = typeof Object.is == 'function' ? Object.is : ow,
  aw = Mo.useSyncExternalStore,
  lw = Mo.useRef,
  uw = Mo.useEffect,
  cw = Mo.useMemo,
  dw = Mo.useDebugValue
Yg.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var a = lw(null)
  if (a.current === null) {
    var u = { hasValue: !1, value: null }
    a.current = u
  } else u = a.current
  a = cw(
    function () {
      function c(w) {
        if (!p) {
          if (((p = !0), (m = w), (w = r(w)), o !== void 0 && u.hasValue)) {
            var T = u.value
            if (o(T, w)) return (y = T)
          }
          return (y = w)
        }
        if (((T = y), sw(m, w))) return T
        var E = r(w)
        return o !== void 0 && o(T, E) ? T : ((m = w), (y = E))
      }
      var p = !1,
        m,
        y,
        g = n === void 0 ? null : n
      return [
        function () {
          return c(t())
        },
        g === null
          ? void 0
          : function () {
              return c(g())
            }
      ]
    },
    [t, n, r, o]
  )
  var d = aw(e, a[0], a[1])
  return (
    uw(
      function () {
        ;(u.hasValue = !0), (u.value = d)
      },
      [d]
    ),
    dw(d),
    d
  )
}
Kg.exports = Yg
var fw = Kg.exports,
  dt = 'default' in Zf ? Se : Zf,
  Qh = Symbol.for('react-redux-context'),
  Kh = typeof globalThis < 'u' ? globalThis : {}
function hw() {
  if (!dt.createContext) return {}
  const e = Kh[Qh] ?? (Kh[Qh] = new Map())
  let t = e.get(dt.createContext)
  return t || ((t = dt.createContext(null)), e.set(dt.createContext, t)), t
}
var Zn = hw(),
  pw = () => {
    throw new Error('uSES not initialized!')
  }
function hd(e = Zn) {
  return function () {
    return dt.useContext(e)
  }
}
var Xg = hd(),
  Jg = pw,
  mw = (e) => {
    Jg = e
  },
  gw = (e, t) => e === t
function vw(e = Zn) {
  const t = e === Zn ? Xg : hd(e),
    n = (r, o = {}) => {
      const { equalityFn: a = gw, devModeChecks: u = {} } =
          typeof o == 'function' ? { equalityFn: o } : o,
        {
          store: d,
          subscription: c,
          getServerState: p,
          stabilityCheck: m,
          identityFunctionCheck: y
        } = t()
      dt.useRef(!0)
      const g = dt.useCallback(
          {
            [r.name](T) {
              return r(T)
            }
          }[r.name],
          [r, m, u.stabilityCheck]
        ),
        w = Jg(c.addNestedSub, d.getState, p || d.getState, g, a)
      return dt.useDebugValue(w), w
    }
  return Object.assign(n, { withTypes: () => n }), n
}
var ev = vw()
function tv(e) {
  e()
}
function _w() {
  let e = null,
    t = null
  return {
    clear() {
      ;(e = null), (t = null)
    },
    notify() {
      tv(() => {
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
      const o = (t = { callback: n, next: null, prev: t })
      return (
        o.prev ? (o.prev.next = o) : (e = o),
        function () {
          !r ||
            e === null ||
            ((r = !1),
            o.next ? (o.next.prev = o.prev) : (t = o.prev),
            o.prev ? (o.prev.next = o.next) : (e = o.next))
        }
      )
    }
  }
}
var Yh = { notify() {}, get: () => [] }
function yw(e, t) {
  let n,
    r = Yh,
    o = 0,
    a = !1
  function u(E) {
    m()
    const k = r.subscribe(E)
    let S = !1
    return () => {
      S || ((S = !0), k(), y())
    }
  }
  function d() {
    r.notify()
  }
  function c() {
    T.onStateChange && T.onStateChange()
  }
  function p() {
    return a
  }
  function m() {
    o++, n || ((n = e.subscribe(c)), (r = _w()))
  }
  function y() {
    o--, n && o === 0 && (n(), (n = void 0), r.clear(), (r = Yh))
  }
  function g() {
    a || ((a = !0), m())
  }
  function w() {
    a && ((a = !1), y())
  }
  const T = {
    addNestedSub: u,
    notifyNestedSubs: d,
    handleChangeWrapper: c,
    isSubscribed: p,
    trySubscribe: g,
    tryUnsubscribe: w,
    getListeners: () => r
  }
  return T
}
var ww =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Sw = typeof navigator < 'u' && navigator.product === 'ReactNative',
  xw = ww || Sw ? dt.useLayoutEffect : dt.useEffect
function Xh(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
}
function Qr(e, t) {
  if (Xh(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  const n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !Xh(e[n[o]], t[n[o]]))
      return !1
  return !0
}
function Tw({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = 'once',
  identityFunctionCheck: a = 'once'
}) {
  const u = dt.useMemo(() => {
      const p = yw(e)
      return {
        store: e,
        subscription: p,
        getServerState: r ? () => r : void 0,
        stabilityCheck: o,
        identityFunctionCheck: a
      }
    }, [e, r, o, a]),
    d = dt.useMemo(() => e.getState(), [e])
  xw(() => {
    const { subscription: p } = u
    return (
      (p.onStateChange = p.notifyNestedSubs),
      p.trySubscribe(),
      d !== e.getState() && p.notifyNestedSubs(),
      () => {
        p.tryUnsubscribe(), (p.onStateChange = void 0)
      }
    )
  }, [u, d])
  const c = t || Zn
  return dt.createElement(c.Provider, { value: u }, n)
}
var Ew = Tw
function nv(e = Zn) {
  const t = e === Zn ? Xg : hd(e),
    n = () => {
      const { store: r } = t()
      return r
    }
  return Object.assign(n, { withTypes: () => n }), n
}
var iv = nv()
function Pw(e = Zn) {
  const t = e === Zn ? iv : nv(e),
    n = () => t().dispatch
  return Object.assign(n, { withTypes: () => n }), n
}
var Cw = Pw(),
  Lw = tv
mw(fw.useSyncExternalStoreWithSelector)
let kw = { data: '' },
  Mw = (e) =>
    typeof window == 'object'
      ? (
          (e ? e.querySelector('#_goober') : window._goober) ||
          Object.assign(
            (e || document.head).appendChild(document.createElement('style')),
            { innerHTML: ' ', id: '_goober' }
          )
        ).firstChild
      : e || kw,
  bw = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  Ow = /\/\*[^]*?\*\/|  +/g,
  Jh = /\n+/g,
  kn = (e, t) => {
    let n = '',
      r = '',
      o = ''
    for (let a in e) {
      let u = e[a]
      a[0] == '@'
        ? a[1] == 'i'
          ? (n = a + ' ' + u + ';')
          : (r +=
              a[1] == 'f'
                ? kn(u, a)
                : a + '{' + kn(u, a[1] == 'k' ? '' : t) + '}')
        : typeof u == 'object'
        ? (r += kn(
            u,
            t
              ? t.replace(/([^,])+/g, (d) =>
                  a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (c) =>
                    /&/.test(c) ? c.replace(/&/g, d) : d ? d + ' ' + c : c
                  )
                )
              : a
          ))
        : u != null &&
          ((a = /^--/.test(a) ? a : a.replace(/[A-Z]/g, '-$&').toLowerCase()),
          (o += kn.p ? kn.p(a, u) : a + ':' + u + ';'))
    }
    return n + (t && o ? t + '{' + o + '}' : o) + r
  },
  tn = {},
  rv = (e) => {
    if (typeof e == 'object') {
      let t = ''
      for (let n in e) t += n + rv(e[n])
      return t
    }
    return e
  },
  Iw = (e, t, n, r, o) => {
    let a = rv(e),
      u =
        tn[a] ||
        (tn[a] = ((c) => {
          let p = 0,
            m = 11
          for (; p < c.length; ) m = (101 * m + c.charCodeAt(p++)) >>> 0
          return 'go' + m
        })(a))
    if (!tn[u]) {
      let c =
        a !== e
          ? e
          : ((p) => {
              let m,
                y,
                g = [{}]
              for (; (m = bw.exec(p.replace(Ow, ''))); )
                m[4]
                  ? g.shift()
                  : m[3]
                  ? ((y = m[3].replace(Jh, ' ').trim()),
                    g.unshift((g[0][y] = g[0][y] || {})))
                  : (g[0][m[1]] = m[2].replace(Jh, ' ').trim())
              return g[0]
            })(e)
      tn[u] = kn(o ? { ['@keyframes ' + u]: c } : c, n ? '' : '.' + u)
    }
    let d = n && tn.g ? tn.g : null
    return (
      n && (tn.g = tn[u]),
      ((c, p, m, y) => {
        y
          ? (p.data = p.data.replace(y, c))
          : p.data.indexOf(c) === -1 && (p.data = m ? c + p.data : p.data + c)
      })(tn[u], t, r, d),
      u
    )
  },
  zw = (e, t, n) =>
    e.reduce((r, o, a) => {
      let u = t[a]
      if (u && u.call) {
        let d = u(n),
          c = (d && d.props && d.props.className) || (/^go/.test(d) && d)
        u = c
          ? '.' + c
          : d && typeof d == 'object'
          ? d.props
            ? ''
            : kn(d, '')
          : d === !1
          ? ''
          : d
      }
      return r + o + (u ?? '')
    }, '')
function Ra(e) {
  let t = this || {},
    n = e.call ? e(t.p) : e
  return Iw(
    n.unshift
      ? n.raw
        ? zw(n, [].slice.call(arguments, 1), t.p)
        : n.reduce((r, o) => Object.assign(r, o && o.call ? o(t.p) : o), {})
      : n,
    Mw(t.target),
    t.g,
    t.o,
    t.k
  )
}
let ov, tc, nc
Ra.bind({ g: 1 })
let mn = Ra.bind({ k: 1 })
function Nw(e, t, n, r) {
  ;(kn.p = t), (ov = e), (tc = n), (nc = r)
}
function Un(e, t) {
  let n = this || {}
  return function () {
    let r = arguments
    function o(a, u) {
      let d = Object.assign({}, a),
        c = d.className || o.className
      ;(n.p = Object.assign({ theme: tc && tc() }, d)),
        (n.o = / *go\d+/.test(c)),
        (d.className = Ra.apply(n, r) + (c ? ' ' + c : ''))
      let p = e
      return (
        e[0] && ((p = d.as || e), delete d.as), nc && p[0] && nc(d), ov(p, d)
      )
    }
    return o
  }
}
var Aw = (e) => typeof e == 'function',
  da = (e, t) => (Aw(e) ? e(t) : e),
  Rw = (() => {
    let e = 0
    return () => (++e).toString()
  })(),
  sv = (() => {
    let e
    return () => {
      if (e === void 0 && typeof window < 'u') {
        let t = matchMedia('(prefers-reduced-motion: reduce)')
        e = !t || t.matches
      }
      return e
    }
  })(),
  Dw = 20,
  Rs = new Map(),
  jw = 1e3,
  ep = (e) => {
    if (Rs.has(e)) return
    let t = setTimeout(() => {
      Rs.delete(e), wi({ type: 4, toastId: e })
    }, jw)
    Rs.set(e, t)
  },
  Bw = (e) => {
    let t = Rs.get(e)
    t && clearTimeout(t)
  },
  ic = (e, t) => {
    switch (t.type) {
      case 0:
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, Dw) }
      case 1:
        return (
          t.toast.id && Bw(t.toast.id),
          {
            ...e,
            toasts: e.toasts.map((a) =>
              a.id === t.toast.id ? { ...a, ...t.toast } : a
            )
          }
        )
      case 2:
        let { toast: n } = t
        return e.toasts.find((a) => a.id === n.id)
          ? ic(e, { type: 1, toast: n })
          : ic(e, { type: 0, toast: n })
      case 3:
        let { toastId: r } = t
        return (
          r
            ? ep(r)
            : e.toasts.forEach((a) => {
                ep(a.id)
              }),
          {
            ...e,
            toasts: e.toasts.map((a) =>
              a.id === r || r === void 0 ? { ...a, visible: !1 } : a
            )
          }
        )
      case 4:
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((a) => a.id !== t.toastId) }
      case 5:
        return { ...e, pausedAt: t.time }
      case 6:
        let o = t.time - (e.pausedAt || 0)
        return {
          ...e,
          pausedAt: void 0,
          toasts: e.toasts.map((a) => ({
            ...a,
            pauseDuration: a.pauseDuration + o
          }))
        }
    }
  },
  Ds = [],
  js = { toasts: [], pausedAt: void 0 },
  wi = (e) => {
    ;(js = ic(js, e)),
      Ds.forEach((t) => {
        t(js)
      })
  },
  Fw = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  $w = (e = {}) => {
    let [t, n] = H.useState(js)
    H.useEffect(
      () => (
        Ds.push(n),
        () => {
          let o = Ds.indexOf(n)
          o > -1 && Ds.splice(o, 1)
        }
      ),
      [t]
    )
    let r = t.toasts.map((o) => {
      var a, u
      return {
        ...e,
        ...e[o.type],
        ...o,
        duration:
          o.duration ||
          ((a = e[o.type]) == null ? void 0 : a.duration) ||
          (e == null ? void 0 : e.duration) ||
          Fw[o.type],
        style: {
          ...e.style,
          ...((u = e[o.type]) == null ? void 0 : u.style),
          ...o.style
        }
      }
    })
    return { ...t, toasts: r }
  },
  Zw = (e, t = 'blank', n) => ({
    createdAt: Date.now(),
    visible: !0,
    type: t,
    ariaProps: { role: 'status', 'aria-live': 'polite' },
    message: e,
    pauseDuration: 0,
    ...n,
    id: (n == null ? void 0 : n.id) || Rw()
  }),
  bo = (e) => (t, n) => {
    let r = Zw(t, e, n)
    return wi({ type: 2, toast: r }), r.id
  },
  Et = (e, t) => bo('blank')(e, t)
Et.error = bo('error')
Et.success = bo('success')
Et.loading = bo('loading')
Et.custom = bo('custom')
Et.dismiss = (e) => {
  wi({ type: 3, toastId: e })
}
Et.remove = (e) => wi({ type: 4, toastId: e })
Et.promise = (e, t, n) => {
  let r = Et.loading(t.loading, { ...n, ...(n == null ? void 0 : n.loading) })
  return (
    e
      .then(
        (o) => (
          Et.success(da(t.success, o), {
            id: r,
            ...n,
            ...(n == null ? void 0 : n.success)
          }),
          o
        )
      )
      .catch((o) => {
        Et.error(da(t.error, o), {
          id: r,
          ...n,
          ...(n == null ? void 0 : n.error)
        })
      }),
    e
  )
}
var Hw = (e, t) => {
    wi({ type: 1, toast: { id: e, height: t } })
  },
  qw = () => {
    wi({ type: 5, time: Date.now() })
  },
  Vw = (e) => {
    let { toasts: t, pausedAt: n } = $w(e)
    H.useEffect(() => {
      if (n) return
      let a = Date.now(),
        u = t.map((d) => {
          if (d.duration === 1 / 0) return
          let c = (d.duration || 0) + d.pauseDuration - (a - d.createdAt)
          if (c < 0) {
            d.visible && Et.dismiss(d.id)
            return
          }
          return setTimeout(() => Et.dismiss(d.id), c)
        })
      return () => {
        u.forEach((d) => d && clearTimeout(d))
      }
    }, [t, n])
    let r = H.useCallback(() => {
        n && wi({ type: 6, time: Date.now() })
      }, [n]),
      o = H.useCallback(
        (a, u) => {
          let {
              reverseOrder: d = !1,
              gutter: c = 8,
              defaultPosition: p
            } = u || {},
            m = t.filter(
              (w) => (w.position || p) === (a.position || p) && w.height
            ),
            y = m.findIndex((w) => w.id === a.id),
            g = m.filter((w, T) => T < y && w.visible).length
          return m
            .filter((w) => w.visible)
            .slice(...(d ? [g + 1] : [0, g]))
            .reduce((w, T) => w + (T.height || 0) + c, 0)
        },
        [t]
      )
    return {
      toasts: t,
      handlers: {
        updateHeight: Hw,
        startPause: qw,
        endPause: r,
        calculateOffset: o
      }
    }
  },
  Ww = mn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  Uw = mn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  Gw = mn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  Qw = Un('div')`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || '#ff4b4b'};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ww} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Uw} 0.15s ease-out forwards;
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
    animation: ${Gw} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  Kw = mn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  Yw = Un('div')`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || '#e0e0e0'};
  border-right-color: ${(e) => e.primary || '#616161'};
  animation: ${Kw} 1s linear infinite;
`,
  Xw = mn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  Jw = mn`
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
  eS = Un('div')`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || '#61d345'};
  position: relative;
  transform: rotate(45deg);

  animation: ${Xw} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Jw} 0.2s ease-out forwards;
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
  tS = Un('div')`
  position: absolute;
`,
  nS = Un('div')`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  iS = mn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  rS = Un('div')`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${iS} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  oS = ({ toast: e }) => {
    let { icon: t, type: n, iconTheme: r } = e
    return t !== void 0
      ? typeof t == 'string'
        ? H.createElement(rS, null, t)
        : t
      : n === 'blank'
      ? null
      : H.createElement(
          nS,
          null,
          H.createElement(Yw, { ...r }),
          n !== 'loading' &&
            H.createElement(
              tS,
              null,
              n === 'error'
                ? H.createElement(Qw, { ...r })
                : H.createElement(eS, { ...r })
            )
        )
  },
  sS = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  aS = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`,
  lS = '0%{opacity:0;} 100%{opacity:1;}',
  uS = '0%{opacity:1;} 100%{opacity:0;}',
  cS = Un('div')`
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
  dS = Un('div')`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  fS = (e, t) => {
    let n = e.includes('top') ? 1 : -1,
      [r, o] = sv() ? [lS, uS] : [sS(n), aS(n)]
    return {
      animation: t
        ? `${mn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${mn(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`
    }
  },
  hS = H.memo(({ toast: e, position: t, style: n, children: r }) => {
    let o = e.height
        ? fS(e.position || t || 'top-center', e.visible)
        : { opacity: 0 },
      a = H.createElement(oS, { toast: e }),
      u = H.createElement(dS, { ...e.ariaProps }, da(e.message, e))
    return H.createElement(
      cS,
      { className: e.className, style: { ...o, ...n, ...e.style } },
      typeof r == 'function'
        ? r({ icon: a, message: u })
        : H.createElement(H.Fragment, null, a, u)
    )
  })
Nw(H.createElement)
var pS = ({
    id: e,
    className: t,
    style: n,
    onHeightUpdate: r,
    children: o
  }) => {
    let a = H.useCallback(
      (u) => {
        if (u) {
          let d = () => {
            let c = u.getBoundingClientRect().height
            r(e, c)
          }
          d(),
            new MutationObserver(d).observe(u, {
              subtree: !0,
              childList: !0,
              characterData: !0
            })
        }
      },
      [e, r]
    )
    return H.createElement('div', { ref: a, className: t, style: n }, o)
  },
  mS = (e, t) => {
    let n = e.includes('top'),
      r = n ? { top: 0 } : { bottom: 0 },
      o = e.includes('center')
        ? { justifyContent: 'center' }
        : e.includes('right')
        ? { justifyContent: 'flex-end' }
        : {}
    return {
      left: 0,
      right: 0,
      display: 'flex',
      position: 'absolute',
      transition: sv() ? void 0 : 'all 230ms cubic-bezier(.21,1.02,.73,1)',
      transform: `translateY(${t * (n ? 1 : -1)}px)`,
      ...r,
      ...o
    }
  },
  gS = Ra`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  vs = 16,
  vS = ({
    reverseOrder: e,
    position: t = 'top-center',
    toastOptions: n,
    gutter: r,
    children: o,
    containerStyle: a,
    containerClassName: u
  }) => {
    let { toasts: d, handlers: c } = Vw(n)
    return H.createElement(
      'div',
      {
        style: {
          position: 'fixed',
          zIndex: 9999,
          top: vs,
          left: vs,
          right: vs,
          bottom: vs,
          pointerEvents: 'none',
          ...a
        },
        className: u,
        onMouseEnter: c.startPause,
        onMouseLeave: c.endPause
      },
      d.map((p) => {
        let m = p.position || t,
          y = c.calculateOffset(p, {
            reverseOrder: e,
            gutter: r,
            defaultPosition: t
          }),
          g = mS(m, y)
        return H.createElement(
          pS,
          {
            id: p.id,
            key: p.id,
            onHeightUpdate: c.updateHeight,
            className: p.visible ? gS : '',
            style: g
          },
          p.type === 'custom'
            ? da(p.message, p)
            : o
            ? o(p)
            : H.createElement(hS, { toast: p, position: m })
        )
      })
    )
  }
const _S = '_opt_search_order_container_1t1c4_3',
  yS = '_container_1t1c4_3',
  wS = '_loginComponent_1t1c4_17',
  SS = '_loginForm_1t1c4_39',
  xS = '_formContainer_1t1c4_53',
  TS = '_title_1t1c4_63',
  ES = '_subtitle_1t1c4_73',
  PS = '_form_1t1c4_53',
  CS = '_inputGroup_1t1c4_91',
  LS = '_inputField_1t1c4_99',
  kS = '_checkbox_1t1c4_131',
  MS = '_buttonGroup_1t1c4_141',
  bS = '_signInButton_1t1c4_149',
  OS = '_loginBanner_1t1c4_183',
  IS = '_bannerImage_1t1c4_199',
  Qe = {
    opt_search_order_container: _S,
    container: yS,
    loginComponent: wS,
    loginForm: SS,
    formContainer: xS,
    title: TS,
    subtitle: ES,
    form: PS,
    inputGroup: CS,
    inputField: LS,
    checkbox: kS,
    buttonGroup: MS,
    signInButton: bS,
    loginBanner: OS,
    bannerImage: IS
  },
  zS = '/assets/banner-ClNMuXSw.svg',
  NS = () =>
    N.jsx('div', {
      className: Qe.opt_search_order_container,
      children: N.jsxs('div', {
        className: Qe.loginComponent,
        children: [
          N.jsx('div', {
            className: Qe.loginForm,
            children: N.jsxs('div', {
              className: Qe.formContainer,
              children: [
                N.jsx('h1', { className: Qe.title, children: 'Edit order' }),
                N.jsx('small', {
                  className: Qe.subtitle,
                  children:
                    'Enter your order number and Email of Phone to find your order.'
                }),
                N.jsxs('form', {
                  className: Qe.form,
                  children: [
                    N.jsx('div', {
                      className: Qe.inputGroup,
                      children: N.jsx('input', {
                        type: 'text',
                        placeholder: 'Order number',
                        className: Qe.inputField
                      })
                    }),
                    N.jsx('div', {
                      className: Qe.inputGroup,
                      children: N.jsx('input', {
                        type: 'email',
                        placeholder: 'Enter your email',
                        className: Qe.inputField
                      })
                    }),
                    N.jsx('div', {
                      className: Qe.buttonGroup,
                      children: N.jsx('button', {
                        className: Qe.signInButton,
                        children: 'Sign in'
                      })
                    })
                  ]
                })
              ]
            })
          }),
          N.jsx('div', {
            className: Qe.loginBanner,
            children: N.jsx('img', {
              className: Qe.bannerImage,
              src: zS,
              alt: 'Login Banner'
            })
          })
        ]
      })
    }),
  AS = '_opt_order_edit_container_ykqqq_1',
  RS = '_header_ykqqq_13',
  DS = '_setting_ykqqq_39',
  jS = '_content_ykqqq_61',
  BS = '_orderSummary_ykqqq_77',
  FS = '_orderDetails_ykqqq_79',
  $S = '_productSection_ykqqq_87',
  ZS = '_productLabel_ykqqq_97',
  HS = '_settings_box_ykqqq_109',
  qS = '_settings_icon_ykqqq_123',
  VS = '_settings_label_ykqqq_149',
  WS = '_orderDetailsItem_ykqqq_185',
  US = '_orderDetailsItemTitle_ykqqq_193',
  GS = '_information_ykqqq_205',
  QS = '_orderItems_ykqqq_253',
  KS = '_orderItem_ykqqq_253',
  YS = '_itemDetails_ykqqq_299',
  XS = '_priceDetails_ykqqq_335',
  JS = '_taxSection_ykqqq_337',
  ex = '_paymentDetails_ykqqq_339',
  tx = '_shippingSection_ykqqq_369',
  nx = '_shippingOption_ykqqq_389',
  ix = '_saveButton_ykqqq_431',
  rx = '_productCard_ykqqq_493',
  ox = '_productImage_ykqqq_513',
  sx = '_productContent_ykqqq_537',
  ax = '_title_ykqqq_543',
  lx = '_description_ykqqq_559',
  ux = '_price_ykqqq_335',
  cx = '_addToCartBtn_ykqqq_583',
  dx = '_modalContainer_ykqqq_619',
  fx = '_modalContent_ykqqq_647',
  hx = '_closeButton_ykqqq_663',
  ee = {
    opt_order_edit_container: AS,
    header: RS,
    setting: DS,
    content: jS,
    orderSummary: BS,
    orderDetails: FS,
    productSection: $S,
    productLabel: ZS,
    settings_box: HS,
    settings_icon: qS,
    settings_label: VS,
    orderDetailsItem: WS,
    orderDetailsItemTitle: US,
    information: GS,
    orderItems: QS,
    orderItem: KS,
    itemDetails: YS,
    priceDetails: XS,
    taxSection: JS,
    paymentDetails: ex,
    shippingSection: tx,
    shippingOption: nx,
    saveButton: ix,
    productCard: rx,
    productImage: ox,
    productContent: sx,
    title: ax,
    description: lx,
    price: ux,
    addToCartBtn: cx,
    modalContainer: dx,
    modalContent: fx,
    closeButton: hx
  },
  av = ({
    width: e = '20px',
    height: t = '20px',
    stroke: n = 'currentColor',
    fill: r = 'none'
  }) =>
    N.jsxs('svg', {
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
        N.jsx('path', { d: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' }),
        N.jsx('circle', { cx: '12', cy: '10', r: '3' })
      ]
    }),
  lv = ({
    width: e = '20px',
    height: t = '20px',
    stroke: n = 'currentColor',
    fill: r = 'none'
  }) =>
    N.jsxs('svg', {
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
        N.jsx('polyline', { points: '23 7 23 1 17 1' }),
        N.jsx('line', { x1: '16', y1: '8', x2: '23', y2: '1' }),
        N.jsx('path', {
          d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'
        })
      ]
    }),
  uv = ({
    width: e = '20px',
    height: t = '20px',
    stroke: n = 'currentColor',
    fill: r = 'currentColor'
  }) =>
    N.jsxs('svg', {
      stroke: n,
      fill: r,
      strokeWidth: '0',
      version: '1.1',
      viewBox: '0 0 17 17',
      height: t,
      width: e,
      xmlns: 'http://www.w3.org/2000/svg',
      children: [
        N.jsx('g', {}),
        N.jsx('path', { d: 'M16 9h-7v7h-1v-7h-7v-1h7v-7h1v7h7v1z' })
      ]
    }),
  cv = ({
    width: e = '20px',
    height: t = '20px',
    stroke: n = 'currentColor',
    fill: r = 'none'
  }) =>
    N.jsxs('svg', {
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
        N.jsx('path', {
          d: 'M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5'
        }),
        N.jsx('polyline', { points: '14 2 14 8 20 8' }),
        N.jsx('path', {
          d: 'M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z'
        })
      ]
    }),
  dv = ({
    width: e = '20px',
    height: t = '20px',
    stroke: n = 'currentColor',
    fill: r = 'none'
  }) =>
    N.jsxs('svg', {
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
        N.jsx('polyline', { points: '17 1 21 5 17 9' }),
        N.jsx('path', { d: 'M3 11V9a4 4 0 0 1 4-4h14' }),
        N.jsx('polyline', { points: '7 23 3 19 7 15' }),
        N.jsx('path', { d: 'M21 13v2a4 4 0 0 1-4 4H3' })
      ]
    }),
  fv = ({
    width: e = '20px',
    height: t = '20px',
    stroke: n = 'currentColor',
    fill: r = 'currentColor'
  }) =>
    N.jsx('svg', {
      stroke: n,
      fill: r,
      strokeWidth: '0',
      viewBox: '0 0 16 16',
      height: t,
      width: e,
      xmlns: 'http://www.w3.org/2000/svg',
      children: N.jsx('path', {
        d: 'M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z'
      })
    }),
  hv = ({
    width: e = '20px',
    height: t = '20px',
    stroke: n = 'currentColor',
    fill: r = 'currentColor'
  }) =>
    N.jsx('svg', {
      stroke: n,
      fill: r,
      strokeWidth: '0',
      viewBox: '0 0 576 512',
      height: t,
      width: e,
      xmlns: 'http://www.w3.org/2000/svg',
      children: N.jsx('path', {
        d: 'M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z'
      })
    }),
  px = ({
    width: e = '20px',
    height: t = '20px',
    stroke: n = 'currentColor',
    fill: r = 'currentColor'
  }) =>
    N.jsx('svg', {
      stroke: n,
      fill: r,
      strokeWidth: '0',
      viewBox: '0 0 512 512',
      height: t,
      width: e,
      xmlns: 'http://www.w3.org/2000/svg',
      children: N.jsx('path', {
        d: 'M303.297 42.269c-1.54.025-3.033.077-4.476.158-11.55.649-19.422 3.475-22.47 6.438L18.923 299.087 184.807 469.75l257.43-250.222c3.047-2.963 6.096-10.75 7.072-22.278.976-11.527.207-26.288-1.645-42.248-1.605-13.84-3.991-28.476-6.597-42.96-12.99 9.51-28.1 16.583-48.25 20.222a40 40 0 0 1-11.38 36.191 40 40 0 0 1-56.562-.802 40 40 0 0 1 .803-56.563 40 40 0 0 1 29.031-11.3 40 40 0 0 1 27.532 12.103 40 40 0 0 1 2.998 3.5c24.115-3.229 38.245-11.132 52.109-23.326-1.891-9.87-3.776-19.475-5.47-28.424-27.556-6.032-61.042-14.049-90.872-18.371-11.925-1.728-23.195-2.83-32.957-2.998-1.627-.028-3.212-.03-4.752-.004zm159.469 34.836c-3.39.175-6.773 1.444-9.342 3.283a2734.251 2734.251 0 0 1 3.7 19.365l5.326-3.707c.268.372.45.517.765 1.106 2.648 4.937 5.797 16.02 7.912 30.437 4.231 28.833 5.344 71.6 1.848 116.16-3.496 44.56-11.623 91.069-25.262 127.625-13.639 36.557-32.614 61.986-55.453 68.49-8.264 2.354-12.21.983-16.803-3.57-4.593-4.552-9.035-13.679-12.054-26.199-5.115-21.207-6.457-51.417-5.526-83.469l-18.336 17.824c-.067 25.974 1.633 50.248 6.364 69.864 3.443 14.277 8.383 26.341 16.882 34.765 8.5 8.424 21.359 11.814 34.405 8.098 31.734-9.038 52.827-40.494 67.384-79.512 14.558-39.017 22.756-86.771 26.344-132.508 3.589-45.736 2.547-89.302-1.984-120.181-2.266-15.44-5.15-27.556-9.858-36.332-2.353-4.388-5.217-8.459-10.513-10.627-1.324-.542-2.736-.832-4.174-.91-.54-.03-1.082-.03-1.625-.002zM293.1 187.796l12.549 12.906-29.38 28.563c6.195 6.952 11.437 14.253 15.71 21.908 5.1 9.1 8.755 18.47 10.96 28.12l-16.91 16.212c-.948-10.96-3.498-21.125-7.652-30.496-4.154-9.37-9.91-17.894-17.27-25.57-14.505-15.131-29.423-22.66-44.751-22.59-15.276.126-30.857 7.804-46.744 23.035-15.835 15.181-24.137 30.4-24.907 45.656-.716 15.312 6.178 30.534 20.684 45.664 5.665 5.91 11.193 10.73 16.584 14.463 5.443 3.684 10.96 6.396 16.553 8.135l31.539-30.236-26.205-27.336 13.054-12.516 42.09 43.9-50.416 48.335c-10.546-2.29-20.679-6.247-30.398-11.872-8.672-5.09-16.86-11.463-24.569-19.097l-25.826 24.635-12.424-13.026 26.303-25.088c-12.28-16.036-18.338-32.69-18.164-49.963.32-21.183 10.05-40.95 29.188-59.298 18.59-17.824 38.09-26.72 58.498-26.692.658.001 1.316.012 1.976.031 17.69.524 34.44 7.564 50.254 21.069z'
      })
    }),
  pv = ({
    width: e = '20px',
    height: t = '20px',
    stroke: n = 'currentColor',
    fill: r = 'currentColor'
  }) =>
    N.jsxs('svg', {
      stroke: n,
      fill: r,
      strokeWidth: '0',
      viewBox: '0 0 24 24',
      height: t,
      width: e,
      xmlns: 'http://www.w3.org/2000/svg',
      children: [
        N.jsx('path', { fill: 'none', d: 'M0 0h24v24H0z' }),
        N.jsx('path', {
          d: 'M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z'
        })
      ]
    }),
  mx = ({
    width: e = '20px',
    height: t = '20px',
    stroke: n = 'currentColor',
    fill: r = 'currentColor'
  }) =>
    N.jsxs('svg', {
      stroke: n,
      fill: r,
      strokeWidth: '0',
      viewBox: '0 0 16 16',
      height: t,
      width: e,
      xmlns: 'http://www.w3.org/2000/svg',
      children: [
        N.jsx('path', {
          d: 'M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293z'
        }),
        N.jsx('path', {
          d: 'M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z'
        })
      ]
    }),
  gx = ({
    width: e = '20px',
    height: t = '20px',
    stroke: n = 'currentColor',
    fill: r = 'currentColor'
  }) =>
    N.jsx('svg', {
      stroke: n,
      fill: r,
      strokeWidth: '0',
      height: t,
      width: e,
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 24 24',
      children: N.jsx('path', {
        d: 'M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z'
      })
    })
function mv(e, t) {
  const n = H.useRef(t)
  H.useEffect(
    function () {
      t !== n.current &&
        e.attributionControl != null &&
        (n.current != null && e.attributionControl.removeAttribution(n.current),
        t != null && e.attributionControl.addAttribution(t)),
        (n.current = t)
    },
    [e, t]
  )
}
const vx = 1
function _x(e) {
  return Object.freeze({ __version: vx, map: e })
}
function yx(e, t) {
  return Object.freeze({ ...e, ...t })
}
const gv = H.createContext(null),
  vv = gv.Provider
function _v() {
  const e = H.useContext(gv)
  if (e == null)
    throw new Error(
      'No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>'
    )
  return e
}
function wx(e) {
  function t(n, r) {
    const { instance: o, context: a } = e(n).current
    return (
      H.useImperativeHandle(r, () => o),
      n.children == null ? null : Se.createElement(vv, { value: a }, n.children)
    )
  }
  return H.forwardRef(t)
}
function Sx(e) {
  function t(n, r) {
    const [o, a] = H.useState(!1),
      { instance: u } = e(n, a).current
    H.useImperativeHandle(r, () => u),
      H.useEffect(
        function () {
          o && u.update()
        },
        [u, o, n.children]
      )
    const d = u._contentNode
    return d ? Gg.createPortal(n.children, d) : null
  }
  return H.forwardRef(t)
}
function xx(e) {
  function t(n, r) {
    const { instance: o } = e(n).current
    return H.useImperativeHandle(r, () => o), null
  }
  return H.forwardRef(t)
}
function yv(e, t) {
  const n = H.useRef()
  H.useEffect(
    function () {
      return (
        t != null && e.instance.on(t),
        (n.current = t),
        function () {
          n.current != null && e.instance.off(n.current), (n.current = null)
        }
      )
    },
    [e, t]
  )
}
function pd(e, t) {
  const n = e.pane ?? t.pane
  return n ? { ...e, pane: n } : e
}
function Tx(e, t) {
  return function (r, o) {
    const a = _v(),
      u = e(pd(r, a), a)
    return (
      mv(a.map, r.attribution),
      yv(u.current, r.eventHandlers),
      t(u.current, a, r, o),
      u
    )
  }
}
var rc = { exports: {} }
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */ ;(function (e, t) {
  ;(function (n, r) {
    r(t)
  })(Iy, function (n) {
    var r = '1.9.4'
    function o(i) {
      var s, l, f, h
      for (l = 1, f = arguments.length; l < f; l++) {
        h = arguments[l]
        for (s in h) i[s] = h[s]
      }
      return i
    }
    var a =
      Object.create ||
      (function () {
        function i() {}
        return function (s) {
          return (i.prototype = s), new i()
        }
      })()
    function u(i, s) {
      var l = Array.prototype.slice
      if (i.bind) return i.bind.apply(i, l.call(arguments, 1))
      var f = l.call(arguments, 2)
      return function () {
        return i.apply(s, f.length ? f.concat(l.call(arguments)) : arguments)
      }
    }
    var d = 0
    function c(i) {
      return '_leaflet_id' in i || (i._leaflet_id = ++d), i._leaflet_id
    }
    function p(i, s, l) {
      var f, h, x, I
      return (
        (I = function () {
          ;(f = !1), h && (x.apply(l, h), (h = !1))
        }),
        (x = function () {
          f
            ? (h = arguments)
            : (i.apply(l, arguments), setTimeout(I, s), (f = !0))
        }),
        x
      )
    }
    function m(i, s, l) {
      var f = s[1],
        h = s[0],
        x = f - h
      return i === f && l ? i : ((((i - h) % x) + x) % x) + h
    }
    function y() {
      return !1
    }
    function g(i, s) {
      if (s === !1) return i
      var l = Math.pow(10, s === void 0 ? 6 : s)
      return Math.round(i * l) / l
    }
    function w(i) {
      return i.trim ? i.trim() : i.replace(/^\s+|\s+$/g, '')
    }
    function T(i) {
      return w(i).split(/\s+/)
    }
    function E(i, s) {
      Object.prototype.hasOwnProperty.call(i, 'options') ||
        (i.options = i.options ? a(i.options) : {})
      for (var l in s) i.options[l] = s[l]
      return i.options
    }
    function k(i, s, l) {
      var f = []
      for (var h in i)
        f.push(
          encodeURIComponent(l ? h.toUpperCase() : h) +
            '=' +
            encodeURIComponent(i[h])
        )
      return (!s || s.indexOf('?') === -1 ? '?' : '&') + f.join('&')
    }
    var S = /\{ *([\w_ -]+) *\}/g
    function v(i, s) {
      return i.replace(S, function (l, f) {
        var h = s[f]
        if (h === void 0) throw new Error('No value provided for variable ' + l)
        return typeof h == 'function' && (h = h(s)), h
      })
    }
    var _ =
      Array.isArray ||
      function (i) {
        return Object.prototype.toString.call(i) === '[object Array]'
      }
    function P(i, s) {
      for (var l = 0; l < i.length; l++) if (i[l] === s) return l
      return -1
    }
    var C = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
    function b(i) {
      return window['webkit' + i] || window['moz' + i] || window['ms' + i]
    }
    var M = 0
    function O(i) {
      var s = +new Date(),
        l = Math.max(0, 16 - (s - M))
      return (M = s + l), window.setTimeout(i, l)
    }
    var A = window.requestAnimationFrame || b('RequestAnimationFrame') || O,
      z =
        window.cancelAnimationFrame ||
        b('CancelAnimationFrame') ||
        b('CancelRequestAnimationFrame') ||
        function (i) {
          window.clearTimeout(i)
        }
    function R(i, s, l) {
      if (l && A === O) i.call(s)
      else return A.call(window, u(i, s))
    }
    function F(i) {
      i && z.call(window, i)
    }
    var Z = {
      __proto__: null,
      extend: o,
      create: a,
      bind: u,
      get lastId() {
        return d
      },
      stamp: c,
      throttle: p,
      wrapNum: m,
      falseFn: y,
      formatNum: g,
      trim: w,
      splitWords: T,
      setOptions: E,
      getParamString: k,
      template: v,
      isArray: _,
      indexOf: P,
      emptyImageUrl: C,
      requestFn: A,
      cancelFn: z,
      requestAnimFrame: R,
      cancelAnimFrame: F
    }
    function V() {}
    ;(V.extend = function (i) {
      var s = function () {
          E(this),
            this.initialize && this.initialize.apply(this, arguments),
            this.callInitHooks()
        },
        l = (s.__super__ = this.prototype),
        f = a(l)
      ;(f.constructor = s), (s.prototype = f)
      for (var h in this)
        Object.prototype.hasOwnProperty.call(this, h) &&
          h !== 'prototype' &&
          h !== '__super__' &&
          (s[h] = this[h])
      return (
        i.statics && o(s, i.statics),
        i.includes && (Y(i.includes), o.apply(null, [f].concat(i.includes))),
        o(f, i),
        delete f.statics,
        delete f.includes,
        f.options &&
          ((f.options = l.options ? a(l.options) : {}),
          o(f.options, i.options)),
        (f._initHooks = []),
        (f.callInitHooks = function () {
          if (!this._initHooksCalled) {
            l.callInitHooks && l.callInitHooks.call(this),
              (this._initHooksCalled = !0)
            for (var x = 0, I = f._initHooks.length; x < I; x++)
              f._initHooks[x].call(this)
          }
        }),
        s
      )
    }),
      (V.include = function (i) {
        var s = this.prototype.options
        return (
          o(this.prototype, i),
          i.options &&
            ((this.prototype.options = s), this.mergeOptions(i.options)),
          this
        )
      }),
      (V.mergeOptions = function (i) {
        return o(this.prototype.options, i), this
      }),
      (V.addInitHook = function (i) {
        var s = Array.prototype.slice.call(arguments, 1),
          l =
            typeof i == 'function'
              ? i
              : function () {
                  this[i].apply(this, s)
                }
        return (
          (this.prototype._initHooks = this.prototype._initHooks || []),
          this.prototype._initHooks.push(l),
          this
        )
      })
    function Y(i) {
      if (!(typeof L > 'u' || !L || !L.Mixin)) {
        i = _(i) ? i : [i]
        for (var s = 0; s < i.length; s++)
          i[s] === L.Mixin.Events &&
            console.warn(
              'Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.',
              new Error().stack
            )
      }
    }
    var X = {
      on: function (i, s, l) {
        if (typeof i == 'object') for (var f in i) this._on(f, i[f], s)
        else {
          i = T(i)
          for (var h = 0, x = i.length; h < x; h++) this._on(i[h], s, l)
        }
        return this
      },
      off: function (i, s, l) {
        if (!arguments.length) delete this._events
        else if (typeof i == 'object') for (var f in i) this._off(f, i[f], s)
        else {
          i = T(i)
          for (var h = arguments.length === 1, x = 0, I = i.length; x < I; x++)
            h ? this._off(i[x]) : this._off(i[x], s, l)
        }
        return this
      },
      _on: function (i, s, l, f) {
        if (typeof s != 'function') {
          console.warn('wrong listener type: ' + typeof s)
          return
        }
        if (this._listens(i, s, l) === !1) {
          l === this && (l = void 0)
          var h = { fn: s, ctx: l }
          f && (h.once = !0),
            (this._events = this._events || {}),
            (this._events[i] = this._events[i] || []),
            this._events[i].push(h)
        }
      },
      _off: function (i, s, l) {
        var f, h, x
        if (this._events && ((f = this._events[i]), !!f)) {
          if (arguments.length === 1) {
            if (this._firingCount)
              for (h = 0, x = f.length; h < x; h++) f[h].fn = y
            delete this._events[i]
            return
          }
          if (typeof s != 'function') {
            console.warn('wrong listener type: ' + typeof s)
            return
          }
          var I = this._listens(i, s, l)
          if (I !== !1) {
            var j = f[I]
            this._firingCount &&
              ((j.fn = y), (this._events[i] = f = f.slice())),
              f.splice(I, 1)
          }
        }
      },
      fire: function (i, s, l) {
        if (!this.listens(i, l)) return this
        var f = o({}, s, {
          type: i,
          target: this,
          sourceTarget: (s && s.sourceTarget) || this
        })
        if (this._events) {
          var h = this._events[i]
          if (h) {
            this._firingCount = this._firingCount + 1 || 1
            for (var x = 0, I = h.length; x < I; x++) {
              var j = h[x],
                B = j.fn
              j.once && this.off(i, B, j.ctx), B.call(j.ctx || this, f)
            }
            this._firingCount--
          }
        }
        return l && this._propagateEvent(f), this
      },
      listens: function (i, s, l, f) {
        typeof i != 'string' && console.warn('"string" type argument expected')
        var h = s
        typeof s != 'function' && ((f = !!s), (h = void 0), (l = void 0))
        var x = this._events && this._events[i]
        if (x && x.length && this._listens(i, h, l) !== !1) return !0
        if (f) {
          for (var I in this._eventParents)
            if (this._eventParents[I].listens(i, s, l, f)) return !0
        }
        return !1
      },
      _listens: function (i, s, l) {
        if (!this._events) return !1
        var f = this._events[i] || []
        if (!s) return !!f.length
        l === this && (l = void 0)
        for (var h = 0, x = f.length; h < x; h++)
          if (f[h].fn === s && f[h].ctx === l) return h
        return !1
      },
      once: function (i, s, l) {
        if (typeof i == 'object') for (var f in i) this._on(f, i[f], s, !0)
        else {
          i = T(i)
          for (var h = 0, x = i.length; h < x; h++) this._on(i[h], s, l, !0)
        }
        return this
      },
      addEventParent: function (i) {
        return (
          (this._eventParents = this._eventParents || {}),
          (this._eventParents[c(i)] = i),
          this
        )
      },
      removeEventParent: function (i) {
        return this._eventParents && delete this._eventParents[c(i)], this
      },
      _propagateEvent: function (i) {
        for (var s in this._eventParents)
          this._eventParents[s].fire(
            i.type,
            o({ layer: i.target, propagatedFrom: i.target }, i),
            !0
          )
      }
    }
    ;(X.addEventListener = X.on),
      (X.removeEventListener = X.clearAllEventListeners = X.off),
      (X.addOneTimeEventListener = X.once),
      (X.fireEvent = X.fire),
      (X.hasEventListeners = X.listens)
    var pe = V.extend(X)
    function D(i, s, l) {
      ;(this.x = l ? Math.round(i) : i), (this.y = l ? Math.round(s) : s)
    }
    var U =
      Math.trunc ||
      function (i) {
        return i > 0 ? Math.floor(i) : Math.ceil(i)
      }
    D.prototype = {
      clone: function () {
        return new D(this.x, this.y)
      },
      add: function (i) {
        return this.clone()._add($(i))
      },
      _add: function (i) {
        return (this.x += i.x), (this.y += i.y), this
      },
      subtract: function (i) {
        return this.clone()._subtract($(i))
      },
      _subtract: function (i) {
        return (this.x -= i.x), (this.y -= i.y), this
      },
      divideBy: function (i) {
        return this.clone()._divideBy(i)
      },
      _divideBy: function (i) {
        return (this.x /= i), (this.y /= i), this
      },
      multiplyBy: function (i) {
        return this.clone()._multiplyBy(i)
      },
      _multiplyBy: function (i) {
        return (this.x *= i), (this.y *= i), this
      },
      scaleBy: function (i) {
        return new D(this.x * i.x, this.y * i.y)
      },
      unscaleBy: function (i) {
        return new D(this.x / i.x, this.y / i.y)
      },
      round: function () {
        return this.clone()._round()
      },
      _round: function () {
        return (
          (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this
        )
      },
      floor: function () {
        return this.clone()._floor()
      },
      _floor: function () {
        return (
          (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this
        )
      },
      ceil: function () {
        return this.clone()._ceil()
      },
      _ceil: function () {
        return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this
      },
      trunc: function () {
        return this.clone()._trunc()
      },
      _trunc: function () {
        return (this.x = U(this.x)), (this.y = U(this.y)), this
      },
      distanceTo: function (i) {
        i = $(i)
        var s = i.x - this.x,
          l = i.y - this.y
        return Math.sqrt(s * s + l * l)
      },
      equals: function (i) {
        return (i = $(i)), i.x === this.x && i.y === this.y
      },
      contains: function (i) {
        return (
          (i = $(i)),
          Math.abs(i.x) <= Math.abs(this.x) && Math.abs(i.y) <= Math.abs(this.y)
        )
      },
      toString: function () {
        return 'Point(' + g(this.x) + ', ' + g(this.y) + ')'
      }
    }
    function $(i, s, l) {
      return i instanceof D
        ? i
        : _(i)
        ? new D(i[0], i[1])
        : i == null
        ? i
        : typeof i == 'object' && 'x' in i && 'y' in i
        ? new D(i.x, i.y)
        : new D(i, s, l)
    }
    function Q(i, s) {
      if (i)
        for (var l = s ? [i, s] : i, f = 0, h = l.length; f < h; f++)
          this.extend(l[f])
    }
    Q.prototype = {
      extend: function (i) {
        var s, l
        if (!i) return this
        if (i instanceof D || typeof i[0] == 'number' || 'x' in i) s = l = $(i)
        else if (((i = te(i)), (s = i.min), (l = i.max), !s || !l)) return this
        return (
          !this.min && !this.max
            ? ((this.min = s.clone()), (this.max = l.clone()))
            : ((this.min.x = Math.min(s.x, this.min.x)),
              (this.max.x = Math.max(l.x, this.max.x)),
              (this.min.y = Math.min(s.y, this.min.y)),
              (this.max.y = Math.max(l.y, this.max.y))),
          this
        )
      },
      getCenter: function (i) {
        return $(
          (this.min.x + this.max.x) / 2,
          (this.min.y + this.max.y) / 2,
          i
        )
      },
      getBottomLeft: function () {
        return $(this.min.x, this.max.y)
      },
      getTopRight: function () {
        return $(this.max.x, this.min.y)
      },
      getTopLeft: function () {
        return this.min
      },
      getBottomRight: function () {
        return this.max
      },
      getSize: function () {
        return this.max.subtract(this.min)
      },
      contains: function (i) {
        var s, l
        return (
          typeof i[0] == 'number' || i instanceof D ? (i = $(i)) : (i = te(i)),
          i instanceof Q ? ((s = i.min), (l = i.max)) : (s = l = i),
          s.x >= this.min.x &&
            l.x <= this.max.x &&
            s.y >= this.min.y &&
            l.y <= this.max.y
        )
      },
      intersects: function (i) {
        i = te(i)
        var s = this.min,
          l = this.max,
          f = i.min,
          h = i.max,
          x = h.x >= s.x && f.x <= l.x,
          I = h.y >= s.y && f.y <= l.y
        return x && I
      },
      overlaps: function (i) {
        i = te(i)
        var s = this.min,
          l = this.max,
          f = i.min,
          h = i.max,
          x = h.x > s.x && f.x < l.x,
          I = h.y > s.y && f.y < l.y
        return x && I
      },
      isValid: function () {
        return !!(this.min && this.max)
      },
      pad: function (i) {
        var s = this.min,
          l = this.max,
          f = Math.abs(s.x - l.x) * i,
          h = Math.abs(s.y - l.y) * i
        return te($(s.x - f, s.y - h), $(l.x + f, l.y + h))
      },
      equals: function (i) {
        return i
          ? ((i = te(i)),
            this.min.equals(i.getTopLeft()) &&
              this.max.equals(i.getBottomRight()))
          : !1
      }
    }
    function te(i, s) {
      return !i || i instanceof Q ? i : new Q(i, s)
    }
    function ce(i, s) {
      if (i)
        for (var l = s ? [i, s] : i, f = 0, h = l.length; f < h; f++)
          this.extend(l[f])
    }
    ce.prototype = {
      extend: function (i) {
        var s = this._southWest,
          l = this._northEast,
          f,
          h
        if (i instanceof se) (f = i), (h = i)
        else if (i instanceof ce) {
          if (((f = i._southWest), (h = i._northEast), !f || !h)) return this
        } else return i ? this.extend(re(i) || ie(i)) : this
        return (
          !s && !l
            ? ((this._southWest = new se(f.lat, f.lng)),
              (this._northEast = new se(h.lat, h.lng)))
            : ((s.lat = Math.min(f.lat, s.lat)),
              (s.lng = Math.min(f.lng, s.lng)),
              (l.lat = Math.max(h.lat, l.lat)),
              (l.lng = Math.max(h.lng, l.lng))),
          this
        )
      },
      pad: function (i) {
        var s = this._southWest,
          l = this._northEast,
          f = Math.abs(s.lat - l.lat) * i,
          h = Math.abs(s.lng - l.lng) * i
        return new ce(
          new se(s.lat - f, s.lng - h),
          new se(l.lat + f, l.lng + h)
        )
      },
      getCenter: function () {
        return new se(
          (this._southWest.lat + this._northEast.lat) / 2,
          (this._southWest.lng + this._northEast.lng) / 2
        )
      },
      getSouthWest: function () {
        return this._southWest
      },
      getNorthEast: function () {
        return this._northEast
      },
      getNorthWest: function () {
        return new se(this.getNorth(), this.getWest())
      },
      getSouthEast: function () {
        return new se(this.getSouth(), this.getEast())
      },
      getWest: function () {
        return this._southWest.lng
      },
      getSouth: function () {
        return this._southWest.lat
      },
      getEast: function () {
        return this._northEast.lng
      },
      getNorth: function () {
        return this._northEast.lat
      },
      contains: function (i) {
        typeof i[0] == 'number' || i instanceof se || 'lat' in i
          ? (i = re(i))
          : (i = ie(i))
        var s = this._southWest,
          l = this._northEast,
          f,
          h
        return (
          i instanceof ce
            ? ((f = i.getSouthWest()), (h = i.getNorthEast()))
            : (f = h = i),
          f.lat >= s.lat && h.lat <= l.lat && f.lng >= s.lng && h.lng <= l.lng
        )
      },
      intersects: function (i) {
        i = ie(i)
        var s = this._southWest,
          l = this._northEast,
          f = i.getSouthWest(),
          h = i.getNorthEast(),
          x = h.lat >= s.lat && f.lat <= l.lat,
          I = h.lng >= s.lng && f.lng <= l.lng
        return x && I
      },
      overlaps: function (i) {
        i = ie(i)
        var s = this._southWest,
          l = this._northEast,
          f = i.getSouthWest(),
          h = i.getNorthEast(),
          x = h.lat > s.lat && f.lat < l.lat,
          I = h.lng > s.lng && f.lng < l.lng
        return x && I
      },
      toBBoxString: function () {
        return [
          this.getWest(),
          this.getSouth(),
          this.getEast(),
          this.getNorth()
        ].join(',')
      },
      equals: function (i, s) {
        return i
          ? ((i = ie(i)),
            this._southWest.equals(i.getSouthWest(), s) &&
              this._northEast.equals(i.getNorthEast(), s))
          : !1
      },
      isValid: function () {
        return !!(this._southWest && this._northEast)
      }
    }
    function ie(i, s) {
      return i instanceof ce ? i : new ce(i, s)
    }
    function se(i, s, l) {
      if (isNaN(i) || isNaN(s))
        throw new Error('Invalid LatLng object: (' + i + ', ' + s + ')')
      ;(this.lat = +i), (this.lng = +s), l !== void 0 && (this.alt = +l)
    }
    se.prototype = {
      equals: function (i, s) {
        if (!i) return !1
        i = re(i)
        var l = Math.max(Math.abs(this.lat - i.lat), Math.abs(this.lng - i.lng))
        return l <= (s === void 0 ? 1e-9 : s)
      },
      toString: function (i) {
        return 'LatLng(' + g(this.lat, i) + ', ' + g(this.lng, i) + ')'
      },
      distanceTo: function (i) {
        return _n.distance(this, re(i))
      },
      wrap: function () {
        return _n.wrapLatLng(this)
      },
      toBounds: function (i) {
        var s = (180 * i) / 40075017,
          l = s / Math.cos((Math.PI / 180) * this.lat)
        return ie([this.lat - s, this.lng - l], [this.lat + s, this.lng + l])
      },
      clone: function () {
        return new se(this.lat, this.lng, this.alt)
      }
    }
    function re(i, s, l) {
      return i instanceof se
        ? i
        : _(i) && typeof i[0] != 'object'
        ? i.length === 3
          ? new se(i[0], i[1], i[2])
          : i.length === 2
          ? new se(i[0], i[1])
          : null
        : i == null
        ? i
        : typeof i == 'object' && 'lat' in i
        ? new se(i.lat, 'lng' in i ? i.lng : i.lon, i.alt)
        : s === void 0
        ? null
        : new se(i, s, l)
    }
    var et = {
        latLngToPoint: function (i, s) {
          var l = this.projection.project(i),
            f = this.scale(s)
          return this.transformation._transform(l, f)
        },
        pointToLatLng: function (i, s) {
          var l = this.scale(s),
            f = this.transformation.untransform(i, l)
          return this.projection.unproject(f)
        },
        project: function (i) {
          return this.projection.project(i)
        },
        unproject: function (i) {
          return this.projection.unproject(i)
        },
        scale: function (i) {
          return 256 * Math.pow(2, i)
        },
        zoom: function (i) {
          return Math.log(i / 256) / Math.LN2
        },
        getProjectedBounds: function (i) {
          if (this.infinite) return null
          var s = this.projection.bounds,
            l = this.scale(i),
            f = this.transformation.transform(s.min, l),
            h = this.transformation.transform(s.max, l)
          return new Q(f, h)
        },
        infinite: !1,
        wrapLatLng: function (i) {
          var s = this.wrapLng ? m(i.lng, this.wrapLng, !0) : i.lng,
            l = this.wrapLat ? m(i.lat, this.wrapLat, !0) : i.lat,
            f = i.alt
          return new se(l, s, f)
        },
        wrapLatLngBounds: function (i) {
          var s = i.getCenter(),
            l = this.wrapLatLng(s),
            f = s.lat - l.lat,
            h = s.lng - l.lng
          if (f === 0 && h === 0) return i
          var x = i.getSouthWest(),
            I = i.getNorthEast(),
            j = new se(x.lat - f, x.lng - h),
            B = new se(I.lat - f, I.lng - h)
          return new ce(j, B)
        }
      },
      _n = o({}, et, {
        wrapLng: [-180, 180],
        R: 6371e3,
        distance: function (i, s) {
          var l = Math.PI / 180,
            f = i.lat * l,
            h = s.lat * l,
            x = Math.sin(((s.lat - i.lat) * l) / 2),
            I = Math.sin(((s.lng - i.lng) * l) / 2),
            j = x * x + Math.cos(f) * Math.cos(h) * I * I,
            B = 2 * Math.atan2(Math.sqrt(j), Math.sqrt(1 - j))
          return this.R * B
        }
      }),
      kd = 6378137,
      $a = {
        R: kd,
        MAX_LATITUDE: 85.0511287798,
        project: function (i) {
          var s = Math.PI / 180,
            l = this.MAX_LATITUDE,
            f = Math.max(Math.min(l, i.lat), -l),
            h = Math.sin(f * s)
          return new D(
            this.R * i.lng * s,
            (this.R * Math.log((1 + h) / (1 - h))) / 2
          )
        },
        unproject: function (i) {
          var s = 180 / Math.PI
          return new se(
            (2 * Math.atan(Math.exp(i.y / this.R)) - Math.PI / 2) * s,
            (i.x * s) / this.R
          )
        },
        bounds: (function () {
          var i = kd * Math.PI
          return new Q([-i, -i], [i, i])
        })()
      }
    function Za(i, s, l, f) {
      if (_(i)) {
        ;(this._a = i[0]), (this._b = i[1]), (this._c = i[2]), (this._d = i[3])
        return
      }
      ;(this._a = i), (this._b = s), (this._c = l), (this._d = f)
    }
    Za.prototype = {
      transform: function (i, s) {
        return this._transform(i.clone(), s)
      },
      _transform: function (i, s) {
        return (
          (s = s || 1),
          (i.x = s * (this._a * i.x + this._b)),
          (i.y = s * (this._c * i.y + this._d)),
          i
        )
      },
      untransform: function (i, s) {
        return (
          (s = s || 1),
          new D((i.x / s - this._b) / this._a, (i.y / s - this._d) / this._c)
        )
      }
    }
    function dr(i, s, l, f) {
      return new Za(i, s, l, f)
    }
    var Ha = o({}, _n, {
        code: 'EPSG:3857',
        projection: $a,
        transformation: (function () {
          var i = 0.5 / (Math.PI * $a.R)
          return dr(i, 0.5, -i, 0.5)
        })()
      }),
      o_ = o({}, Ha, { code: 'EPSG:900913' })
    function Md(i) {
      return document.createElementNS('http://www.w3.org/2000/svg', i)
    }
    function bd(i, s) {
      var l = '',
        f,
        h,
        x,
        I,
        j,
        B
      for (f = 0, x = i.length; f < x; f++) {
        for (j = i[f], h = 0, I = j.length; h < I; h++)
          (B = j[h]), (l += (h ? 'L' : 'M') + B.x + ' ' + B.y)
        l += s ? (J.svg ? 'z' : 'x') : ''
      }
      return l || 'M0 0'
    }
    var qa = document.documentElement.style,
      Ao = 'ActiveXObject' in window,
      s_ = Ao && !document.addEventListener,
      Od = 'msLaunchUri' in navigator && !('documentMode' in document),
      Va = Ft('webkit'),
      Id = Ft('android'),
      zd = Ft('android 2') || Ft('android 3'),
      a_ = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
      l_ = Id && Ft('Google') && a_ < 537 && !('AudioNode' in window),
      Wa = !!window.opera,
      Nd = !Od && Ft('chrome'),
      Ad = Ft('gecko') && !Va && !Wa && !Ao,
      u_ = !Nd && Ft('safari'),
      Rd = Ft('phantom'),
      Dd = 'OTransition' in qa,
      c_ = navigator.platform.indexOf('Win') === 0,
      jd = Ao && 'transition' in qa,
      Ua =
        'WebKitCSSMatrix' in window &&
        'm11' in new window.WebKitCSSMatrix() &&
        !zd,
      Bd = 'MozPerspective' in qa,
      d_ = !window.L_DISABLE_3D && (jd || Ua || Bd) && !Dd && !Rd,
      fr = typeof orientation < 'u' || Ft('mobile'),
      f_ = fr && Va,
      h_ = fr && Ua,
      Fd = !window.PointerEvent && window.MSPointerEvent,
      $d = !!(window.PointerEvent || Fd),
      Zd = 'ontouchstart' in window || !!window.TouchEvent,
      p_ = !window.L_NO_TOUCH && (Zd || $d),
      m_ = fr && Wa,
      g_ = fr && Ad,
      v_ =
        (window.devicePixelRatio ||
          window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
      __ = (function () {
        var i = !1
        try {
          var s = Object.defineProperty({}, 'passive', {
            get: function () {
              i = !0
            }
          })
          window.addEventListener('testPassiveEventSupport', y, s),
            window.removeEventListener('testPassiveEventSupport', y, s)
        } catch {}
        return i
      })(),
      y_ = (function () {
        return !!document.createElement('canvas').getContext
      })(),
      Ga = !!(document.createElementNS && Md('svg').createSVGRect),
      w_ =
        !!Ga &&
        (function () {
          var i = document.createElement('div')
          return (
            (i.innerHTML = '<svg/>'),
            (i.firstChild && i.firstChild.namespaceURI) ===
              'http://www.w3.org/2000/svg'
          )
        })(),
      S_ =
        !Ga &&
        (function () {
          try {
            var i = document.createElement('div')
            i.innerHTML = '<v:shape adj="1"/>'
            var s = i.firstChild
            return (
              (s.style.behavior = 'url(#default#VML)'),
              s && typeof s.adj == 'object'
            )
          } catch {
            return !1
          }
        })(),
      x_ = navigator.platform.indexOf('Mac') === 0,
      T_ = navigator.platform.indexOf('Linux') === 0
    function Ft(i) {
      return navigator.userAgent.toLowerCase().indexOf(i) >= 0
    }
    var J = {
        ie: Ao,
        ielt9: s_,
        edge: Od,
        webkit: Va,
        android: Id,
        android23: zd,
        androidStock: l_,
        opera: Wa,
        chrome: Nd,
        gecko: Ad,
        safari: u_,
        phantom: Rd,
        opera12: Dd,
        win: c_,
        ie3d: jd,
        webkit3d: Ua,
        gecko3d: Bd,
        any3d: d_,
        mobile: fr,
        mobileWebkit: f_,
        mobileWebkit3d: h_,
        msPointer: Fd,
        pointer: $d,
        touch: p_,
        touchNative: Zd,
        mobileOpera: m_,
        mobileGecko: g_,
        retina: v_,
        passiveEvents: __,
        canvas: y_,
        svg: Ga,
        vml: S_,
        inlineSvg: w_,
        mac: x_,
        linux: T_
      },
      Hd = J.msPointer ? 'MSPointerDown' : 'pointerdown',
      qd = J.msPointer ? 'MSPointerMove' : 'pointermove',
      Vd = J.msPointer ? 'MSPointerUp' : 'pointerup',
      Wd = J.msPointer ? 'MSPointerCancel' : 'pointercancel',
      Qa = { touchstart: Hd, touchmove: qd, touchend: Vd, touchcancel: Wd },
      Ud = { touchstart: M_, touchmove: Ro, touchend: Ro, touchcancel: Ro },
      Si = {},
      Gd = !1
    function E_(i, s, l) {
      return (
        s === 'touchstart' && k_(),
        Ud[s]
          ? ((l = Ud[s].bind(this, l)), i.addEventListener(Qa[s], l, !1), l)
          : (console.warn('wrong event specified:', s), y)
      )
    }
    function P_(i, s, l) {
      if (!Qa[s]) {
        console.warn('wrong event specified:', s)
        return
      }
      i.removeEventListener(Qa[s], l, !1)
    }
    function C_(i) {
      Si[i.pointerId] = i
    }
    function L_(i) {
      Si[i.pointerId] && (Si[i.pointerId] = i)
    }
    function Qd(i) {
      delete Si[i.pointerId]
    }
    function k_() {
      Gd ||
        (document.addEventListener(Hd, C_, !0),
        document.addEventListener(qd, L_, !0),
        document.addEventListener(Vd, Qd, !0),
        document.addEventListener(Wd, Qd, !0),
        (Gd = !0))
    }
    function Ro(i, s) {
      if (s.pointerType !== (s.MSPOINTER_TYPE_MOUSE || 'mouse')) {
        s.touches = []
        for (var l in Si) s.touches.push(Si[l])
        ;(s.changedTouches = [s]), i(s)
      }
    }
    function M_(i, s) {
      s.MSPOINTER_TYPE_TOUCH &&
        s.pointerType === s.MSPOINTER_TYPE_TOUCH &&
        je(s),
        Ro(i, s)
    }
    function b_(i) {
      var s = {},
        l,
        f
      for (f in i) (l = i[f]), (s[f] = l && l.bind ? l.bind(i) : l)
      return (
        (i = s),
        (s.type = 'dblclick'),
        (s.detail = 2),
        (s.isTrusted = !1),
        (s._simulated = !0),
        s
      )
    }
    var O_ = 200
    function I_(i, s) {
      i.addEventListener('dblclick', s)
      var l = 0,
        f
      function h(x) {
        if (x.detail !== 1) {
          f = x.detail
          return
        }
        if (
          !(
            x.pointerType === 'mouse' ||
            (x.sourceCapabilities && !x.sourceCapabilities.firesTouchEvents)
          )
        ) {
          var I = ef(x)
          if (
            !(
              I.some(function (B) {
                return B instanceof HTMLLabelElement && B.attributes.for
              }) &&
              !I.some(function (B) {
                return (
                  B instanceof HTMLInputElement ||
                  B instanceof HTMLSelectElement
                )
              })
            )
          ) {
            var j = Date.now()
            j - l <= O_ ? (f++, f === 2 && s(b_(x))) : (f = 1), (l = j)
          }
        }
      }
      return i.addEventListener('click', h), { dblclick: s, simDblclick: h }
    }
    function z_(i, s) {
      i.removeEventListener('dblclick', s.dblclick),
        i.removeEventListener('click', s.simDblclick)
    }
    var Ka = Bo([
        'transform',
        'webkitTransform',
        'OTransform',
        'MozTransform',
        'msTransform'
      ]),
      hr = Bo([
        'webkitTransition',
        'transition',
        'OTransition',
        'MozTransition',
        'msTransition'
      ]),
      Kd =
        hr === 'webkitTransition' || hr === 'OTransition'
          ? hr + 'End'
          : 'transitionend'
    function Yd(i) {
      return typeof i == 'string' ? document.getElementById(i) : i
    }
    function pr(i, s) {
      var l = i.style[s] || (i.currentStyle && i.currentStyle[s])
      if ((!l || l === 'auto') && document.defaultView) {
        var f = document.defaultView.getComputedStyle(i, null)
        l = f ? f[s] : null
      }
      return l === 'auto' ? null : l
    }
    function me(i, s, l) {
      var f = document.createElement(i)
      return (f.className = s || ''), l && l.appendChild(f), f
    }
    function Te(i) {
      var s = i.parentNode
      s && s.removeChild(i)
    }
    function Do(i) {
      for (; i.firstChild; ) i.removeChild(i.firstChild)
    }
    function xi(i) {
      var s = i.parentNode
      s && s.lastChild !== i && s.appendChild(i)
    }
    function Ti(i) {
      var s = i.parentNode
      s && s.firstChild !== i && s.insertBefore(i, s.firstChild)
    }
    function Ya(i, s) {
      if (i.classList !== void 0) return i.classList.contains(s)
      var l = jo(i)
      return l.length > 0 && new RegExp('(^|\\s)' + s + '(\\s|$)').test(l)
    }
    function ae(i, s) {
      if (i.classList !== void 0)
        for (var l = T(s), f = 0, h = l.length; f < h; f++)
          i.classList.add(l[f])
      else if (!Ya(i, s)) {
        var x = jo(i)
        Xa(i, (x ? x + ' ' : '') + s)
      }
    }
    function ke(i, s) {
      i.classList !== void 0
        ? i.classList.remove(s)
        : Xa(i, w((' ' + jo(i) + ' ').replace(' ' + s + ' ', ' ')))
    }
    function Xa(i, s) {
      i.className.baseVal === void 0
        ? (i.className = s)
        : (i.className.baseVal = s)
    }
    function jo(i) {
      return (
        i.correspondingElement && (i = i.correspondingElement),
        i.className.baseVal === void 0 ? i.className : i.className.baseVal
      )
    }
    function _t(i, s) {
      'opacity' in i.style
        ? (i.style.opacity = s)
        : 'filter' in i.style && N_(i, s)
    }
    function N_(i, s) {
      var l = !1,
        f = 'DXImageTransform.Microsoft.Alpha'
      try {
        l = i.filters.item(f)
      } catch {
        if (s === 1) return
      }
      ;(s = Math.round(s * 100)),
        l
          ? ((l.Enabled = s !== 100), (l.Opacity = s))
          : (i.style.filter += ' progid:' + f + '(opacity=' + s + ')')
    }
    function Bo(i) {
      for (var s = document.documentElement.style, l = 0; l < i.length; l++)
        if (i[l] in s) return i[l]
      return !1
    }
    function Gn(i, s, l) {
      var f = s || new D(0, 0)
      i.style[Ka] =
        (J.ie3d
          ? 'translate(' + f.x + 'px,' + f.y + 'px)'
          : 'translate3d(' + f.x + 'px,' + f.y + 'px,0)') +
        (l ? ' scale(' + l + ')' : '')
    }
    function be(i, s) {
      ;(i._leaflet_pos = s),
        J.any3d
          ? Gn(i, s)
          : ((i.style.left = s.x + 'px'), (i.style.top = s.y + 'px'))
    }
    function Qn(i) {
      return i._leaflet_pos || new D(0, 0)
    }
    var mr, gr, Ja
    if ('onselectstart' in document)
      (mr = function () {
        oe(window, 'selectstart', je)
      }),
        (gr = function () {
          ve(window, 'selectstart', je)
        })
    else {
      var vr = Bo([
        'userSelect',
        'WebkitUserSelect',
        'OUserSelect',
        'MozUserSelect',
        'msUserSelect'
      ])
      ;(mr = function () {
        if (vr) {
          var i = document.documentElement.style
          ;(Ja = i[vr]), (i[vr] = 'none')
        }
      }),
        (gr = function () {
          vr && ((document.documentElement.style[vr] = Ja), (Ja = void 0))
        })
    }
    function el() {
      oe(window, 'dragstart', je)
    }
    function tl() {
      ve(window, 'dragstart', je)
    }
    var Fo, nl
    function il(i) {
      for (; i.tabIndex === -1; ) i = i.parentNode
      i.style &&
        ($o(),
        (Fo = i),
        (nl = i.style.outlineStyle),
        (i.style.outlineStyle = 'none'),
        oe(window, 'keydown', $o))
    }
    function $o() {
      Fo &&
        ((Fo.style.outlineStyle = nl),
        (Fo = void 0),
        (nl = void 0),
        ve(window, 'keydown', $o))
    }
    function Xd(i) {
      do i = i.parentNode
      while ((!i.offsetWidth || !i.offsetHeight) && i !== document.body)
      return i
    }
    function rl(i) {
      var s = i.getBoundingClientRect()
      return {
        x: s.width / i.offsetWidth || 1,
        y: s.height / i.offsetHeight || 1,
        boundingClientRect: s
      }
    }
    var A_ = {
      __proto__: null,
      TRANSFORM: Ka,
      TRANSITION: hr,
      TRANSITION_END: Kd,
      get: Yd,
      getStyle: pr,
      create: me,
      remove: Te,
      empty: Do,
      toFront: xi,
      toBack: Ti,
      hasClass: Ya,
      addClass: ae,
      removeClass: ke,
      setClass: Xa,
      getClass: jo,
      setOpacity: _t,
      testProp: Bo,
      setTransform: Gn,
      setPosition: be,
      getPosition: Qn,
      get disableTextSelection() {
        return mr
      },
      get enableTextSelection() {
        return gr
      },
      disableImageDrag: el,
      enableImageDrag: tl,
      preventOutline: il,
      restoreOutline: $o,
      getSizedParentNode: Xd,
      getScale: rl
    }
    function oe(i, s, l, f) {
      if (s && typeof s == 'object') for (var h in s) sl(i, h, s[h], l)
      else {
        s = T(s)
        for (var x = 0, I = s.length; x < I; x++) sl(i, s[x], l, f)
      }
      return this
    }
    var $t = '_leaflet_events'
    function ve(i, s, l, f) {
      if (arguments.length === 1) Jd(i), delete i[$t]
      else if (s && typeof s == 'object') for (var h in s) al(i, h, s[h], l)
      else if (((s = T(s)), arguments.length === 2))
        Jd(i, function (j) {
          return P(s, j) !== -1
        })
      else for (var x = 0, I = s.length; x < I; x++) al(i, s[x], l, f)
      return this
    }
    function Jd(i, s) {
      for (var l in i[$t]) {
        var f = l.split(/\d/)[0]
        ;(!s || s(f)) && al(i, f, null, null, l)
      }
    }
    var ol = {
      mouseenter: 'mouseover',
      mouseleave: 'mouseout',
      wheel: !('onwheel' in window) && 'mousewheel'
    }
    function sl(i, s, l, f) {
      var h = s + c(l) + (f ? '_' + c(f) : '')
      if (i[$t] && i[$t][h]) return this
      var x = function (j) {
          return l.call(f || i, j || window.event)
        },
        I = x
      !J.touchNative && J.pointer && s.indexOf('touch') === 0
        ? (x = E_(i, s, x))
        : J.touch && s === 'dblclick'
        ? (x = I_(i, x))
        : 'addEventListener' in i
        ? s === 'touchstart' ||
          s === 'touchmove' ||
          s === 'wheel' ||
          s === 'mousewheel'
          ? i.addEventListener(
              ol[s] || s,
              x,
              J.passiveEvents ? { passive: !1 } : !1
            )
          : s === 'mouseenter' || s === 'mouseleave'
          ? ((x = function (j) {
              ;(j = j || window.event), ul(i, j) && I(j)
            }),
            i.addEventListener(ol[s], x, !1))
          : i.addEventListener(s, I, !1)
        : i.attachEvent('on' + s, x),
        (i[$t] = i[$t] || {}),
        (i[$t][h] = x)
    }
    function al(i, s, l, f, h) {
      h = h || s + c(l) + (f ? '_' + c(f) : '')
      var x = i[$t] && i[$t][h]
      if (!x) return this
      !J.touchNative && J.pointer && s.indexOf('touch') === 0
        ? P_(i, s, x)
        : J.touch && s === 'dblclick'
        ? z_(i, x)
        : 'removeEventListener' in i
        ? i.removeEventListener(ol[s] || s, x, !1)
        : i.detachEvent('on' + s, x),
        (i[$t][h] = null)
    }
    function Kn(i) {
      return (
        i.stopPropagation
          ? i.stopPropagation()
          : i.originalEvent
          ? (i.originalEvent._stopped = !0)
          : (i.cancelBubble = !0),
        this
      )
    }
    function ll(i) {
      return sl(i, 'wheel', Kn), this
    }
    function _r(i) {
      return (
        oe(i, 'mousedown touchstart dblclick contextmenu', Kn),
        (i._leaflet_disable_click = !0),
        this
      )
    }
    function je(i) {
      return i.preventDefault ? i.preventDefault() : (i.returnValue = !1), this
    }
    function Yn(i) {
      return je(i), Kn(i), this
    }
    function ef(i) {
      if (i.composedPath) return i.composedPath()
      for (var s = [], l = i.target; l; ) s.push(l), (l = l.parentNode)
      return s
    }
    function tf(i, s) {
      if (!s) return new D(i.clientX, i.clientY)
      var l = rl(s),
        f = l.boundingClientRect
      return new D(
        (i.clientX - f.left) / l.x - s.clientLeft,
        (i.clientY - f.top) / l.y - s.clientTop
      )
    }
    var R_ =
      J.linux && J.chrome
        ? window.devicePixelRatio
        : J.mac
        ? window.devicePixelRatio * 3
        : window.devicePixelRatio > 0
        ? 2 * window.devicePixelRatio
        : 1
    function nf(i) {
      return J.edge
        ? i.wheelDeltaY / 2
        : i.deltaY && i.deltaMode === 0
        ? -i.deltaY / R_
        : i.deltaY && i.deltaMode === 1
        ? -i.deltaY * 20
        : i.deltaY && i.deltaMode === 2
        ? -i.deltaY * 60
        : i.deltaX || i.deltaZ
        ? 0
        : i.wheelDelta
        ? (i.wheelDeltaY || i.wheelDelta) / 2
        : i.detail && Math.abs(i.detail) < 32765
        ? -i.detail * 20
        : i.detail
        ? (i.detail / -32765) * 60
        : 0
    }
    function ul(i, s) {
      var l = s.relatedTarget
      if (!l) return !0
      try {
        for (; l && l !== i; ) l = l.parentNode
      } catch {
        return !1
      }
      return l !== i
    }
    var D_ = {
        __proto__: null,
        on: oe,
        off: ve,
        stopPropagation: Kn,
        disableScrollPropagation: ll,
        disableClickPropagation: _r,
        preventDefault: je,
        stop: Yn,
        getPropagationPath: ef,
        getMousePosition: tf,
        getWheelDelta: nf,
        isExternalTarget: ul,
        addListener: oe,
        removeListener: ve
      },
      rf = pe.extend({
        run: function (i, s, l, f) {
          this.stop(),
            (this._el = i),
            (this._inProgress = !0),
            (this._duration = l || 0.25),
            (this._easeOutPower = 1 / Math.max(f || 0.5, 0.2)),
            (this._startPos = Qn(i)),
            (this._offset = s.subtract(this._startPos)),
            (this._startTime = +new Date()),
            this.fire('start'),
            this._animate()
        },
        stop: function () {
          this._inProgress && (this._step(!0), this._complete())
        },
        _animate: function () {
          ;(this._animId = R(this._animate, this)), this._step()
        },
        _step: function (i) {
          var s = +new Date() - this._startTime,
            l = this._duration * 1e3
          s < l
            ? this._runFrame(this._easeOut(s / l), i)
            : (this._runFrame(1), this._complete())
        },
        _runFrame: function (i, s) {
          var l = this._startPos.add(this._offset.multiplyBy(i))
          s && l._round(), be(this._el, l), this.fire('step')
        },
        _complete: function () {
          F(this._animId), (this._inProgress = !1), this.fire('end')
        },
        _easeOut: function (i) {
          return 1 - Math.pow(1 - i, this._easeOutPower)
        }
      }),
      fe = pe.extend({
        options: {
          crs: Ha,
          center: void 0,
          zoom: void 0,
          minZoom: void 0,
          maxZoom: void 0,
          layers: [],
          maxBounds: void 0,
          renderer: void 0,
          zoomAnimation: !0,
          zoomAnimationThreshold: 4,
          fadeAnimation: !0,
          markerZoomAnimation: !0,
          transform3DLimit: 8388608,
          zoomSnap: 1,
          zoomDelta: 1,
          trackResize: !0
        },
        initialize: function (i, s) {
          ;(s = E(this, s)),
            (this._handlers = []),
            (this._layers = {}),
            (this._zoomBoundLayers = {}),
            (this._sizeChanged = !0),
            this._initContainer(i),
            this._initLayout(),
            (this._onResize = u(this._onResize, this)),
            this._initEvents(),
            s.maxBounds && this.setMaxBounds(s.maxBounds),
            s.zoom !== void 0 && (this._zoom = this._limitZoom(s.zoom)),
            s.center &&
              s.zoom !== void 0 &&
              this.setView(re(s.center), s.zoom, { reset: !0 }),
            this.callInitHooks(),
            (this._zoomAnimated =
              hr && J.any3d && !J.mobileOpera && this.options.zoomAnimation),
            this._zoomAnimated &&
              (this._createAnimProxy(),
              oe(this._proxy, Kd, this._catchTransitionEnd, this)),
            this._addLayers(this.options.layers)
        },
        setView: function (i, s, l) {
          if (
            ((s = s === void 0 ? this._zoom : this._limitZoom(s)),
            (i = this._limitCenter(re(i), s, this.options.maxBounds)),
            (l = l || {}),
            this._stop(),
            this._loaded && !l.reset && l !== !0)
          ) {
            l.animate !== void 0 &&
              ((l.zoom = o({ animate: l.animate }, l.zoom)),
              (l.pan = o({ animate: l.animate, duration: l.duration }, l.pan)))
            var f =
              this._zoom !== s
                ? this._tryAnimatedZoom && this._tryAnimatedZoom(i, s, l.zoom)
                : this._tryAnimatedPan(i, l.pan)
            if (f) return clearTimeout(this._sizeTimer), this
          }
          return this._resetView(i, s, l.pan && l.pan.noMoveStart), this
        },
        setZoom: function (i, s) {
          return this._loaded
            ? this.setView(this.getCenter(), i, { zoom: s })
            : ((this._zoom = i), this)
        },
        zoomIn: function (i, s) {
          return (
            (i = i || (J.any3d ? this.options.zoomDelta : 1)),
            this.setZoom(this._zoom + i, s)
          )
        },
        zoomOut: function (i, s) {
          return (
            (i = i || (J.any3d ? this.options.zoomDelta : 1)),
            this.setZoom(this._zoom - i, s)
          )
        },
        setZoomAround: function (i, s, l) {
          var f = this.getZoomScale(s),
            h = this.getSize().divideBy(2),
            x = i instanceof D ? i : this.latLngToContainerPoint(i),
            I = x.subtract(h).multiplyBy(1 - 1 / f),
            j = this.containerPointToLatLng(h.add(I))
          return this.setView(j, s, { zoom: l })
        },
        _getBoundsCenterZoom: function (i, s) {
          ;(s = s || {}), (i = i.getBounds ? i.getBounds() : ie(i))
          var l = $(s.paddingTopLeft || s.padding || [0, 0]),
            f = $(s.paddingBottomRight || s.padding || [0, 0]),
            h = this.getBoundsZoom(i, !1, l.add(f))
          if (
            ((h = typeof s.maxZoom == 'number' ? Math.min(s.maxZoom, h) : h),
            h === 1 / 0)
          )
            return { center: i.getCenter(), zoom: h }
          var x = f.subtract(l).divideBy(2),
            I = this.project(i.getSouthWest(), h),
            j = this.project(i.getNorthEast(), h),
            B = this.unproject(I.add(j).divideBy(2).add(x), h)
          return { center: B, zoom: h }
        },
        fitBounds: function (i, s) {
          if (((i = ie(i)), !i.isValid()))
            throw new Error('Bounds are not valid.')
          var l = this._getBoundsCenterZoom(i, s)
          return this.setView(l.center, l.zoom, s)
        },
        fitWorld: function (i) {
          return this.fitBounds(
            [
              [-90, -180],
              [90, 180]
            ],
            i
          )
        },
        panTo: function (i, s) {
          return this.setView(i, this._zoom, { pan: s })
        },
        panBy: function (i, s) {
          if (((i = $(i).round()), (s = s || {}), !i.x && !i.y))
            return this.fire('moveend')
          if (s.animate !== !0 && !this.getSize().contains(i))
            return (
              this._resetView(
                this.unproject(this.project(this.getCenter()).add(i)),
                this.getZoom()
              ),
              this
            )
          if (
            (this._panAnim ||
              ((this._panAnim = new rf()),
              this._panAnim.on(
                {
                  step: this._onPanTransitionStep,
                  end: this._onPanTransitionEnd
                },
                this
              )),
            s.noMoveStart || this.fire('movestart'),
            s.animate !== !1)
          ) {
            ae(this._mapPane, 'leaflet-pan-anim')
            var l = this._getMapPanePos().subtract(i).round()
            this._panAnim.run(
              this._mapPane,
              l,
              s.duration || 0.25,
              s.easeLinearity
            )
          } else this._rawPanBy(i), this.fire('move').fire('moveend')
          return this
        },
        flyTo: function (i, s, l) {
          if (((l = l || {}), l.animate === !1 || !J.any3d))
            return this.setView(i, s, l)
          this._stop()
          var f = this.project(this.getCenter()),
            h = this.project(i),
            x = this.getSize(),
            I = this._zoom
          ;(i = re(i)), (s = s === void 0 ? I : s)
          var j = Math.max(x.x, x.y),
            B = j * this.getZoomScale(I, s),
            q = h.distanceTo(f) || 1,
            G = 1.42,
            ne = G * G
          function le(Oe) {
            var Jo = Oe ? -1 : 1,
              Py = Oe ? B : j,
              Cy = B * B - j * j + Jo * ne * ne * q * q,
              Ly = 2 * Py * ne * q,
              wl = Cy / Ly,
              jf = Math.sqrt(wl * wl + 1) - wl,
              ky = jf < 1e-9 ? -18 : Math.log(jf)
            return ky
          }
          function Ge(Oe) {
            return (Math.exp(Oe) - Math.exp(-Oe)) / 2
          }
          function Ae(Oe) {
            return (Math.exp(Oe) + Math.exp(-Oe)) / 2
          }
          function wt(Oe) {
            return Ge(Oe) / Ae(Oe)
          }
          var tt = le(0)
          function Mi(Oe) {
            return j * (Ae(tt) / Ae(tt + G * Oe))
          }
          function Sy(Oe) {
            return (j * (Ae(tt) * wt(tt + G * Oe) - Ge(tt))) / ne
          }
          function xy(Oe) {
            return 1 - Math.pow(1 - Oe, 1.5)
          }
          var Ty = Date.now(),
            Rf = (le(1) - tt) / G,
            Ey = l.duration ? 1e3 * l.duration : 1e3 * Rf * 0.8
          function Df() {
            var Oe = (Date.now() - Ty) / Ey,
              Jo = xy(Oe) * Rf
            Oe <= 1
              ? ((this._flyToFrame = R(Df, this)),
                this._move(
                  this.unproject(
                    f.add(h.subtract(f).multiplyBy(Sy(Jo) / q)),
                    I
                  ),
                  this.getScaleZoom(j / Mi(Jo), I),
                  { flyTo: !0 }
                ))
              : this._move(i, s)._moveEnd(!0)
          }
          return this._moveStart(!0, l.noMoveStart), Df.call(this), this
        },
        flyToBounds: function (i, s) {
          var l = this._getBoundsCenterZoom(i, s)
          return this.flyTo(l.center, l.zoom, s)
        },
        setMaxBounds: function (i) {
          return (
            (i = ie(i)),
            this.listens('moveend', this._panInsideMaxBounds) &&
              this.off('moveend', this._panInsideMaxBounds),
            i.isValid()
              ? ((this.options.maxBounds = i),
                this._loaded && this._panInsideMaxBounds(),
                this.on('moveend', this._panInsideMaxBounds))
              : ((this.options.maxBounds = null), this)
          )
        },
        setMinZoom: function (i) {
          var s = this.options.minZoom
          return (
            (this.options.minZoom = i),
            this._loaded &&
            s !== i &&
            (this.fire('zoomlevelschange'),
            this.getZoom() < this.options.minZoom)
              ? this.setZoom(i)
              : this
          )
        },
        setMaxZoom: function (i) {
          var s = this.options.maxZoom
          return (
            (this.options.maxZoom = i),
            this._loaded &&
            s !== i &&
            (this.fire('zoomlevelschange'),
            this.getZoom() > this.options.maxZoom)
              ? this.setZoom(i)
              : this
          )
        },
        panInsideBounds: function (i, s) {
          this._enforcingBounds = !0
          var l = this.getCenter(),
            f = this._limitCenter(l, this._zoom, ie(i))
          return (
            l.equals(f) || this.panTo(f, s), (this._enforcingBounds = !1), this
          )
        },
        panInside: function (i, s) {
          s = s || {}
          var l = $(s.paddingTopLeft || s.padding || [0, 0]),
            f = $(s.paddingBottomRight || s.padding || [0, 0]),
            h = this.project(this.getCenter()),
            x = this.project(i),
            I = this.getPixelBounds(),
            j = te([I.min.add(l), I.max.subtract(f)]),
            B = j.getSize()
          if (!j.contains(x)) {
            this._enforcingBounds = !0
            var q = x.subtract(j.getCenter()),
              G = j.extend(x).getSize().subtract(B)
            ;(h.x += q.x < 0 ? -G.x : G.x),
              (h.y += q.y < 0 ? -G.y : G.y),
              this.panTo(this.unproject(h), s),
              (this._enforcingBounds = !1)
          }
          return this
        },
        invalidateSize: function (i) {
          if (!this._loaded) return this
          i = o({ animate: !1, pan: !0 }, i === !0 ? { animate: !0 } : i)
          var s = this.getSize()
          ;(this._sizeChanged = !0), (this._lastCenter = null)
          var l = this.getSize(),
            f = s.divideBy(2).round(),
            h = l.divideBy(2).round(),
            x = f.subtract(h)
          return !x.x && !x.y
            ? this
            : (i.animate && i.pan
                ? this.panBy(x)
                : (i.pan && this._rawPanBy(x),
                  this.fire('move'),
                  i.debounceMoveend
                    ? (clearTimeout(this._sizeTimer),
                      (this._sizeTimer = setTimeout(
                        u(this.fire, this, 'moveend'),
                        200
                      )))
                    : this.fire('moveend')),
              this.fire('resize', { oldSize: s, newSize: l }))
        },
        stop: function () {
          return (
            this.setZoom(this._limitZoom(this._zoom)),
            this.options.zoomSnap || this.fire('viewreset'),
            this._stop()
          )
        },
        locate: function (i) {
          if (
            ((i = this._locateOptions = o({ timeout: 1e4, watch: !1 }, i)),
            !('geolocation' in navigator))
          )
            return (
              this._handleGeolocationError({
                code: 0,
                message: 'Geolocation not supported.'
              }),
              this
            )
          var s = u(this._handleGeolocationResponse, this),
            l = u(this._handleGeolocationError, this)
          return (
            i.watch
              ? (this._locationWatchId = navigator.geolocation.watchPosition(
                  s,
                  l,
                  i
                ))
              : navigator.geolocation.getCurrentPosition(s, l, i),
            this
          )
        },
        stopLocate: function () {
          return (
            navigator.geolocation &&
              navigator.geolocation.clearWatch &&
              navigator.geolocation.clearWatch(this._locationWatchId),
            this._locateOptions && (this._locateOptions.setView = !1),
            this
          )
        },
        _handleGeolocationError: function (i) {
          if (this._container._leaflet_id) {
            var s = i.code,
              l =
                i.message ||
                (s === 1
                  ? 'permission denied'
                  : s === 2
                  ? 'position unavailable'
                  : 'timeout')
            this._locateOptions.setView && !this._loaded && this.fitWorld(),
              this.fire('locationerror', {
                code: s,
                message: 'Geolocation error: ' + l + '.'
              })
          }
        },
        _handleGeolocationResponse: function (i) {
          if (this._container._leaflet_id) {
            var s = i.coords.latitude,
              l = i.coords.longitude,
              f = new se(s, l),
              h = f.toBounds(i.coords.accuracy * 2),
              x = this._locateOptions
            if (x.setView) {
              var I = this.getBoundsZoom(h)
              this.setView(f, x.maxZoom ? Math.min(I, x.maxZoom) : I)
            }
            var j = { latlng: f, bounds: h, timestamp: i.timestamp }
            for (var B in i.coords)
              typeof i.coords[B] == 'number' && (j[B] = i.coords[B])
            this.fire('locationfound', j)
          }
        },
        addHandler: function (i, s) {
          if (!s) return this
          var l = (this[i] = new s(this))
          return this._handlers.push(l), this.options[i] && l.enable(), this
        },
        remove: function () {
          if (
            (this._initEvents(!0),
            this.options.maxBounds &&
              this.off('moveend', this._panInsideMaxBounds),
            this._containerId !== this._container._leaflet_id)
          )
            throw new Error('Map container is being reused by another instance')
          try {
            delete this._container._leaflet_id, delete this._containerId
          } catch {
            ;(this._container._leaflet_id = void 0),
              (this._containerId = void 0)
          }
          this._locationWatchId !== void 0 && this.stopLocate(),
            this._stop(),
            Te(this._mapPane),
            this._clearControlPos && this._clearControlPos(),
            this._resizeRequest &&
              (F(this._resizeRequest), (this._resizeRequest = null)),
            this._clearHandlers(),
            this._loaded && this.fire('unload')
          var i
          for (i in this._layers) this._layers[i].remove()
          for (i in this._panes) Te(this._panes[i])
          return (
            (this._layers = []),
            (this._panes = []),
            delete this._mapPane,
            delete this._renderer,
            this
          )
        },
        createPane: function (i, s) {
          var l =
              'leaflet-pane' +
              (i ? ' leaflet-' + i.replace('Pane', '') + '-pane' : ''),
            f = me('div', l, s || this._mapPane)
          return i && (this._panes[i] = f), f
        },
        getCenter: function () {
          return (
            this._checkIfLoaded(),
            this._lastCenter && !this._moved()
              ? this._lastCenter.clone()
              : this.layerPointToLatLng(this._getCenterLayerPoint())
          )
        },
        getZoom: function () {
          return this._zoom
        },
        getBounds: function () {
          var i = this.getPixelBounds(),
            s = this.unproject(i.getBottomLeft()),
            l = this.unproject(i.getTopRight())
          return new ce(s, l)
        },
        getMinZoom: function () {
          return this.options.minZoom === void 0
            ? this._layersMinZoom || 0
            : this.options.minZoom
        },
        getMaxZoom: function () {
          return this.options.maxZoom === void 0
            ? this._layersMaxZoom === void 0
              ? 1 / 0
              : this._layersMaxZoom
            : this.options.maxZoom
        },
        getBoundsZoom: function (i, s, l) {
          ;(i = ie(i)), (l = $(l || [0, 0]))
          var f = this.getZoom() || 0,
            h = this.getMinZoom(),
            x = this.getMaxZoom(),
            I = i.getNorthWest(),
            j = i.getSouthEast(),
            B = this.getSize().subtract(l),
            q = te(this.project(j, f), this.project(I, f)).getSize(),
            G = J.any3d ? this.options.zoomSnap : 1,
            ne = B.x / q.x,
            le = B.y / q.y,
            Ge = s ? Math.max(ne, le) : Math.min(ne, le)
          return (
            (f = this.getScaleZoom(Ge, f)),
            G &&
              ((f = Math.round(f / (G / 100)) * (G / 100)),
              (f = s ? Math.ceil(f / G) * G : Math.floor(f / G) * G)),
            Math.max(h, Math.min(x, f))
          )
        },
        getSize: function () {
          return (
            (!this._size || this._sizeChanged) &&
              ((this._size = new D(
                this._container.clientWidth || 0,
                this._container.clientHeight || 0
              )),
              (this._sizeChanged = !1)),
            this._size.clone()
          )
        },
        getPixelBounds: function (i, s) {
          var l = this._getTopLeftPoint(i, s)
          return new Q(l, l.add(this.getSize()))
        },
        getPixelOrigin: function () {
          return this._checkIfLoaded(), this._pixelOrigin
        },
        getPixelWorldBounds: function (i) {
          return this.options.crs.getProjectedBounds(
            i === void 0 ? this.getZoom() : i
          )
        },
        getPane: function (i) {
          return typeof i == 'string' ? this._panes[i] : i
        },
        getPanes: function () {
          return this._panes
        },
        getContainer: function () {
          return this._container
        },
        getZoomScale: function (i, s) {
          var l = this.options.crs
          return (s = s === void 0 ? this._zoom : s), l.scale(i) / l.scale(s)
        },
        getScaleZoom: function (i, s) {
          var l = this.options.crs
          s = s === void 0 ? this._zoom : s
          var f = l.zoom(i * l.scale(s))
          return isNaN(f) ? 1 / 0 : f
        },
        project: function (i, s) {
          return (
            (s = s === void 0 ? this._zoom : s),
            this.options.crs.latLngToPoint(re(i), s)
          )
        },
        unproject: function (i, s) {
          return (
            (s = s === void 0 ? this._zoom : s),
            this.options.crs.pointToLatLng($(i), s)
          )
        },
        layerPointToLatLng: function (i) {
          var s = $(i).add(this.getPixelOrigin())
          return this.unproject(s)
        },
        latLngToLayerPoint: function (i) {
          var s = this.project(re(i))._round()
          return s._subtract(this.getPixelOrigin())
        },
        wrapLatLng: function (i) {
          return this.options.crs.wrapLatLng(re(i))
        },
        wrapLatLngBounds: function (i) {
          return this.options.crs.wrapLatLngBounds(ie(i))
        },
        distance: function (i, s) {
          return this.options.crs.distance(re(i), re(s))
        },
        containerPointToLayerPoint: function (i) {
          return $(i).subtract(this._getMapPanePos())
        },
        layerPointToContainerPoint: function (i) {
          return $(i).add(this._getMapPanePos())
        },
        containerPointToLatLng: function (i) {
          var s = this.containerPointToLayerPoint($(i))
          return this.layerPointToLatLng(s)
        },
        latLngToContainerPoint: function (i) {
          return this.layerPointToContainerPoint(this.latLngToLayerPoint(re(i)))
        },
        mouseEventToContainerPoint: function (i) {
          return tf(i, this._container)
        },
        mouseEventToLayerPoint: function (i) {
          return this.containerPointToLayerPoint(
            this.mouseEventToContainerPoint(i)
          )
        },
        mouseEventToLatLng: function (i) {
          return this.layerPointToLatLng(this.mouseEventToLayerPoint(i))
        },
        _initContainer: function (i) {
          var s = (this._container = Yd(i))
          if (s) {
            if (s._leaflet_id)
              throw new Error('Map container is already initialized.')
          } else throw new Error('Map container not found.')
          oe(s, 'scroll', this._onScroll, this), (this._containerId = c(s))
        },
        _initLayout: function () {
          var i = this._container
          ;(this._fadeAnimated = this.options.fadeAnimation && J.any3d),
            ae(
              i,
              'leaflet-container' +
                (J.touch ? ' leaflet-touch' : '') +
                (J.retina ? ' leaflet-retina' : '') +
                (J.ielt9 ? ' leaflet-oldie' : '') +
                (J.safari ? ' leaflet-safari' : '') +
                (this._fadeAnimated ? ' leaflet-fade-anim' : '')
            )
          var s = pr(i, 'position')
          s !== 'absolute' &&
            s !== 'relative' &&
            s !== 'fixed' &&
            s !== 'sticky' &&
            (i.style.position = 'relative'),
            this._initPanes(),
            this._initControlPos && this._initControlPos()
        },
        _initPanes: function () {
          var i = (this._panes = {})
          ;(this._paneRenderers = {}),
            (this._mapPane = this.createPane('mapPane', this._container)),
            be(this._mapPane, new D(0, 0)),
            this.createPane('tilePane'),
            this.createPane('overlayPane'),
            this.createPane('shadowPane'),
            this.createPane('markerPane'),
            this.createPane('tooltipPane'),
            this.createPane('popupPane'),
            this.options.markerZoomAnimation ||
              (ae(i.markerPane, 'leaflet-zoom-hide'),
              ae(i.shadowPane, 'leaflet-zoom-hide'))
        },
        _resetView: function (i, s, l) {
          be(this._mapPane, new D(0, 0))
          var f = !this._loaded
          ;(this._loaded = !0),
            (s = this._limitZoom(s)),
            this.fire('viewprereset')
          var h = this._zoom !== s
          this._moveStart(h, l)._move(i, s)._moveEnd(h),
            this.fire('viewreset'),
            f && this.fire('load')
        },
        _moveStart: function (i, s) {
          return i && this.fire('zoomstart'), s || this.fire('movestart'), this
        },
        _move: function (i, s, l, f) {
          s === void 0 && (s = this._zoom)
          var h = this._zoom !== s
          return (
            (this._zoom = s),
            (this._lastCenter = i),
            (this._pixelOrigin = this._getNewPixelOrigin(i)),
            f
              ? l && l.pinch && this.fire('zoom', l)
              : ((h || (l && l.pinch)) && this.fire('zoom', l),
                this.fire('move', l)),
            this
          )
        },
        _moveEnd: function (i) {
          return i && this.fire('zoomend'), this.fire('moveend')
        },
        _stop: function () {
          return (
            F(this._flyToFrame), this._panAnim && this._panAnim.stop(), this
          )
        },
        _rawPanBy: function (i) {
          be(this._mapPane, this._getMapPanePos().subtract(i))
        },
        _getZoomSpan: function () {
          return this.getMaxZoom() - this.getMinZoom()
        },
        _panInsideMaxBounds: function () {
          this._enforcingBounds || this.panInsideBounds(this.options.maxBounds)
        },
        _checkIfLoaded: function () {
          if (!this._loaded) throw new Error('Set map center and zoom first.')
        },
        _initEvents: function (i) {
          ;(this._targets = {}), (this._targets[c(this._container)] = this)
          var s = i ? ve : oe
          s(
            this._container,
            'click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup',
            this._handleDOMEvent,
            this
          ),
            this.options.trackResize &&
              s(window, 'resize', this._onResize, this),
            J.any3d &&
              this.options.transform3DLimit &&
              (i ? this.off : this.on).call(this, 'moveend', this._onMoveEnd)
        },
        _onResize: function () {
          F(this._resizeRequest),
            (this._resizeRequest = R(function () {
              this.invalidateSize({ debounceMoveend: !0 })
            }, this))
        },
        _onScroll: function () {
          ;(this._container.scrollTop = 0), (this._container.scrollLeft = 0)
        },
        _onMoveEnd: function () {
          var i = this._getMapPanePos()
          Math.max(Math.abs(i.x), Math.abs(i.y)) >=
            this.options.transform3DLimit &&
            this._resetView(this.getCenter(), this.getZoom())
        },
        _findEventTargets: function (i, s) {
          for (
            var l = [],
              f,
              h = s === 'mouseout' || s === 'mouseover',
              x = i.target || i.srcElement,
              I = !1;
            x;

          ) {
            if (
              ((f = this._targets[c(x)]),
              f &&
                (s === 'click' || s === 'preclick') &&
                this._draggableMoved(f))
            ) {
              I = !0
              break
            }
            if (
              (f && f.listens(s, !0) && ((h && !ul(x, i)) || (l.push(f), h))) ||
              x === this._container
            )
              break
            x = x.parentNode
          }
          return !l.length && !I && !h && this.listens(s, !0) && (l = [this]), l
        },
        _isClickDisabled: function (i) {
          for (; i && i !== this._container; ) {
            if (i._leaflet_disable_click) return !0
            i = i.parentNode
          }
        },
        _handleDOMEvent: function (i) {
          var s = i.target || i.srcElement
          if (
            !(
              !this._loaded ||
              s._leaflet_disable_events ||
              (i.type === 'click' && this._isClickDisabled(s))
            )
          ) {
            var l = i.type
            l === 'mousedown' && il(s), this._fireDOMEvent(i, l)
          }
        },
        _mouseEvents: [
          'click',
          'dblclick',
          'mouseover',
          'mouseout',
          'contextmenu'
        ],
        _fireDOMEvent: function (i, s, l) {
          if (i.type === 'click') {
            var f = o({}, i)
            ;(f.type = 'preclick'), this._fireDOMEvent(f, f.type, l)
          }
          var h = this._findEventTargets(i, s)
          if (l) {
            for (var x = [], I = 0; I < l.length; I++)
              l[I].listens(s, !0) && x.push(l[I])
            h = x.concat(h)
          }
          if (h.length) {
            s === 'contextmenu' && je(i)
            var j = h[0],
              B = { originalEvent: i }
            if (
              i.type !== 'keypress' &&
              i.type !== 'keydown' &&
              i.type !== 'keyup'
            ) {
              var q = j.getLatLng && (!j._radius || j._radius <= 10)
              ;(B.containerPoint = q
                ? this.latLngToContainerPoint(j.getLatLng())
                : this.mouseEventToContainerPoint(i)),
                (B.layerPoint = this.containerPointToLayerPoint(
                  B.containerPoint
                )),
                (B.latlng = q
                  ? j.getLatLng()
                  : this.layerPointToLatLng(B.layerPoint))
            }
            for (I = 0; I < h.length; I++)
              if (
                (h[I].fire(s, B, !0),
                B.originalEvent._stopped ||
                  (h[I].options.bubblingMouseEvents === !1 &&
                    P(this._mouseEvents, s) !== -1))
              )
                return
          }
        },
        _draggableMoved: function (i) {
          return (
            (i = i.dragging && i.dragging.enabled() ? i : this),
            (i.dragging && i.dragging.moved()) ||
              (this.boxZoom && this.boxZoom.moved())
          )
        },
        _clearHandlers: function () {
          for (var i = 0, s = this._handlers.length; i < s; i++)
            this._handlers[i].disable()
        },
        whenReady: function (i, s) {
          return (
            this._loaded
              ? i.call(s || this, { target: this })
              : this.on('load', i, s),
            this
          )
        },
        _getMapPanePos: function () {
          return Qn(this._mapPane) || new D(0, 0)
        },
        _moved: function () {
          var i = this._getMapPanePos()
          return i && !i.equals([0, 0])
        },
        _getTopLeftPoint: function (i, s) {
          var l =
            i && s !== void 0
              ? this._getNewPixelOrigin(i, s)
              : this.getPixelOrigin()
          return l.subtract(this._getMapPanePos())
        },
        _getNewPixelOrigin: function (i, s) {
          var l = this.getSize()._divideBy(2)
          return this.project(i, s)
            ._subtract(l)
            ._add(this._getMapPanePos())
            ._round()
        },
        _latLngToNewLayerPoint: function (i, s, l) {
          var f = this._getNewPixelOrigin(l, s)
          return this.project(i, s)._subtract(f)
        },
        _latLngBoundsToNewLayerBounds: function (i, s, l) {
          var f = this._getNewPixelOrigin(l, s)
          return te([
            this.project(i.getSouthWest(), s)._subtract(f),
            this.project(i.getNorthWest(), s)._subtract(f),
            this.project(i.getSouthEast(), s)._subtract(f),
            this.project(i.getNorthEast(), s)._subtract(f)
          ])
        },
        _getCenterLayerPoint: function () {
          return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
        },
        _getCenterOffset: function (i) {
          return this.latLngToLayerPoint(i).subtract(
            this._getCenterLayerPoint()
          )
        },
        _limitCenter: function (i, s, l) {
          if (!l) return i
          var f = this.project(i, s),
            h = this.getSize().divideBy(2),
            x = new Q(f.subtract(h), f.add(h)),
            I = this._getBoundsOffset(x, l, s)
          return Math.abs(I.x) <= 1 && Math.abs(I.y) <= 1
            ? i
            : this.unproject(f.add(I), s)
        },
        _limitOffset: function (i, s) {
          if (!s) return i
          var l = this.getPixelBounds(),
            f = new Q(l.min.add(i), l.max.add(i))
          return i.add(this._getBoundsOffset(f, s))
        },
        _getBoundsOffset: function (i, s, l) {
          var f = te(
              this.project(s.getNorthEast(), l),
              this.project(s.getSouthWest(), l)
            ),
            h = f.min.subtract(i.min),
            x = f.max.subtract(i.max),
            I = this._rebound(h.x, -x.x),
            j = this._rebound(h.y, -x.y)
          return new D(I, j)
        },
        _rebound: function (i, s) {
          return i + s > 0
            ? Math.round(i - s) / 2
            : Math.max(0, Math.ceil(i)) - Math.max(0, Math.floor(s))
        },
        _limitZoom: function (i) {
          var s = this.getMinZoom(),
            l = this.getMaxZoom(),
            f = J.any3d ? this.options.zoomSnap : 1
          return f && (i = Math.round(i / f) * f), Math.max(s, Math.min(l, i))
        },
        _onPanTransitionStep: function () {
          this.fire('move')
        },
        _onPanTransitionEnd: function () {
          ke(this._mapPane, 'leaflet-pan-anim'), this.fire('moveend')
        },
        _tryAnimatedPan: function (i, s) {
          var l = this._getCenterOffset(i)._trunc()
          return (s && s.animate) !== !0 && !this.getSize().contains(l)
            ? !1
            : (this.panBy(l, s), !0)
        },
        _createAnimProxy: function () {
          var i = (this._proxy = me(
            'div',
            'leaflet-proxy leaflet-zoom-animated'
          ))
          this._panes.mapPane.appendChild(i),
            this.on(
              'zoomanim',
              function (s) {
                var l = Ka,
                  f = this._proxy.style[l]
                Gn(
                  this._proxy,
                  this.project(s.center, s.zoom),
                  this.getZoomScale(s.zoom, 1)
                ),
                  f === this._proxy.style[l] &&
                    this._animatingZoom &&
                    this._onZoomTransitionEnd()
              },
              this
            ),
            this.on('load moveend', this._animMoveEnd, this),
            this._on('unload', this._destroyAnimProxy, this)
        },
        _destroyAnimProxy: function () {
          Te(this._proxy),
            this.off('load moveend', this._animMoveEnd, this),
            delete this._proxy
        },
        _animMoveEnd: function () {
          var i = this.getCenter(),
            s = this.getZoom()
          Gn(this._proxy, this.project(i, s), this.getZoomScale(s, 1))
        },
        _catchTransitionEnd: function (i) {
          this._animatingZoom &&
            i.propertyName.indexOf('transform') >= 0 &&
            this._onZoomTransitionEnd()
        },
        _nothingToAnimate: function () {
          return !this._container.getElementsByClassName(
            'leaflet-zoom-animated'
          ).length
        },
        _tryAnimatedZoom: function (i, s, l) {
          if (this._animatingZoom) return !0
          if (
            ((l = l || {}),
            !this._zoomAnimated ||
              l.animate === !1 ||
              this._nothingToAnimate() ||
              Math.abs(s - this._zoom) > this.options.zoomAnimationThreshold)
          )
            return !1
          var f = this.getZoomScale(s),
            h = this._getCenterOffset(i)._divideBy(1 - 1 / f)
          return l.animate !== !0 && !this.getSize().contains(h)
            ? !1
            : (R(function () {
                this._moveStart(!0, l.noMoveStart || !1)._animateZoom(i, s, !0)
              }, this),
              !0)
        },
        _animateZoom: function (i, s, l, f) {
          this._mapPane &&
            (l &&
              ((this._animatingZoom = !0),
              (this._animateToCenter = i),
              (this._animateToZoom = s),
              ae(this._mapPane, 'leaflet-zoom-anim')),
            this.fire('zoomanim', { center: i, zoom: s, noUpdate: f }),
            this._tempFireZoomEvent ||
              (this._tempFireZoomEvent = this._zoom !== this._animateToZoom),
            this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
            setTimeout(u(this._onZoomTransitionEnd, this), 250))
        },
        _onZoomTransitionEnd: function () {
          this._animatingZoom &&
            (this._mapPane && ke(this._mapPane, 'leaflet-zoom-anim'),
            (this._animatingZoom = !1),
            this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
            this._tempFireZoomEvent && this.fire('zoom'),
            delete this._tempFireZoomEvent,
            this.fire('move'),
            this._moveEnd(!0))
        }
      })
    function j_(i, s) {
      return new fe(i, s)
    }
    var Mt = V.extend({
        options: { position: 'topright' },
        initialize: function (i) {
          E(this, i)
        },
        getPosition: function () {
          return this.options.position
        },
        setPosition: function (i) {
          var s = this._map
          return (
            s && s.removeControl(this),
            (this.options.position = i),
            s && s.addControl(this),
            this
          )
        },
        getContainer: function () {
          return this._container
        },
        addTo: function (i) {
          this.remove(), (this._map = i)
          var s = (this._container = this.onAdd(i)),
            l = this.getPosition(),
            f = i._controlCorners[l]
          return (
            ae(s, 'leaflet-control'),
            l.indexOf('bottom') !== -1
              ? f.insertBefore(s, f.firstChild)
              : f.appendChild(s),
            this._map.on('unload', this.remove, this),
            this
          )
        },
        remove: function () {
          return this._map
            ? (Te(this._container),
              this.onRemove && this.onRemove(this._map),
              this._map.off('unload', this.remove, this),
              (this._map = null),
              this)
            : this
        },
        _refocusOnMap: function (i) {
          this._map &&
            i &&
            i.screenX > 0 &&
            i.screenY > 0 &&
            this._map.getContainer().focus()
        }
      }),
      yr = function (i) {
        return new Mt(i)
      }
    fe.include({
      addControl: function (i) {
        return i.addTo(this), this
      },
      removeControl: function (i) {
        return i.remove(), this
      },
      _initControlPos: function () {
        var i = (this._controlCorners = {}),
          s = 'leaflet-',
          l = (this._controlContainer = me(
            'div',
            s + 'control-container',
            this._container
          ))
        function f(h, x) {
          var I = s + h + ' ' + s + x
          i[h + x] = me('div', I, l)
        }
        f('top', 'left'),
          f('top', 'right'),
          f('bottom', 'left'),
          f('bottom', 'right')
      },
      _clearControlPos: function () {
        for (var i in this._controlCorners) Te(this._controlCorners[i])
        Te(this._controlContainer),
          delete this._controlCorners,
          delete this._controlContainer
      }
    })
    var of = Mt.extend({
        options: {
          collapsed: !0,
          position: 'topright',
          autoZIndex: !0,
          hideSingleBase: !1,
          sortLayers: !1,
          sortFunction: function (i, s, l, f) {
            return l < f ? -1 : f < l ? 1 : 0
          }
        },
        initialize: function (i, s, l) {
          E(this, l),
            (this._layerControlInputs = []),
            (this._layers = []),
            (this._lastZIndex = 0),
            (this._handlingClick = !1),
            (this._preventClick = !1)
          for (var f in i) this._addLayer(i[f], f)
          for (f in s) this._addLayer(s[f], f, !0)
        },
        onAdd: function (i) {
          this._initLayout(),
            this._update(),
            (this._map = i),
            i.on('zoomend', this._checkDisabledLayers, this)
          for (var s = 0; s < this._layers.length; s++)
            this._layers[s].layer.on('add remove', this._onLayerChange, this)
          return this._container
        },
        addTo: function (i) {
          return Mt.prototype.addTo.call(this, i), this._expandIfNotCollapsed()
        },
        onRemove: function () {
          this._map.off('zoomend', this._checkDisabledLayers, this)
          for (var i = 0; i < this._layers.length; i++)
            this._layers[i].layer.off('add remove', this._onLayerChange, this)
        },
        addBaseLayer: function (i, s) {
          return this._addLayer(i, s), this._map ? this._update() : this
        },
        addOverlay: function (i, s) {
          return this._addLayer(i, s, !0), this._map ? this._update() : this
        },
        removeLayer: function (i) {
          i.off('add remove', this._onLayerChange, this)
          var s = this._getLayer(c(i))
          return (
            s && this._layers.splice(this._layers.indexOf(s), 1),
            this._map ? this._update() : this
          )
        },
        expand: function () {
          ae(this._container, 'leaflet-control-layers-expanded'),
            (this._section.style.height = null)
          var i = this._map.getSize().y - (this._container.offsetTop + 50)
          return (
            i < this._section.clientHeight
              ? (ae(this._section, 'leaflet-control-layers-scrollbar'),
                (this._section.style.height = i + 'px'))
              : ke(this._section, 'leaflet-control-layers-scrollbar'),
            this._checkDisabledLayers(),
            this
          )
        },
        collapse: function () {
          return ke(this._container, 'leaflet-control-layers-expanded'), this
        },
        _initLayout: function () {
          var i = 'leaflet-control-layers',
            s = (this._container = me('div', i)),
            l = this.options.collapsed
          s.setAttribute('aria-haspopup', !0), _r(s), ll(s)
          var f = (this._section = me('section', i + '-list'))
          l &&
            (this._map.on('click', this.collapse, this),
            oe(
              s,
              { mouseenter: this._expandSafely, mouseleave: this.collapse },
              this
            ))
          var h = (this._layersLink = me('a', i + '-toggle', s))
          ;(h.href = '#'),
            (h.title = 'Layers'),
            h.setAttribute('role', 'button'),
            oe(
              h,
              {
                keydown: function (x) {
                  x.keyCode === 13 && this._expandSafely()
                },
                click: function (x) {
                  je(x), this._expandSafely()
                }
              },
              this
            ),
            l || this.expand(),
            (this._baseLayersList = me('div', i + '-base', f)),
            (this._separator = me('div', i + '-separator', f)),
            (this._overlaysList = me('div', i + '-overlays', f)),
            s.appendChild(f)
        },
        _getLayer: function (i) {
          for (var s = 0; s < this._layers.length; s++)
            if (this._layers[s] && c(this._layers[s].layer) === i)
              return this._layers[s]
        },
        _addLayer: function (i, s, l) {
          this._map && i.on('add remove', this._onLayerChange, this),
            this._layers.push({ layer: i, name: s, overlay: l }),
            this.options.sortLayers &&
              this._layers.sort(
                u(function (f, h) {
                  return this.options.sortFunction(
                    f.layer,
                    h.layer,
                    f.name,
                    h.name
                  )
                }, this)
              ),
            this.options.autoZIndex &&
              i.setZIndex &&
              (this._lastZIndex++, i.setZIndex(this._lastZIndex)),
            this._expandIfNotCollapsed()
        },
        _update: function () {
          if (!this._container) return this
          Do(this._baseLayersList),
            Do(this._overlaysList),
            (this._layerControlInputs = [])
          var i,
            s,
            l,
            f,
            h = 0
          for (l = 0; l < this._layers.length; l++)
            (f = this._layers[l]),
              this._addItem(f),
              (s = s || f.overlay),
              (i = i || !f.overlay),
              (h += f.overlay ? 0 : 1)
          return (
            this.options.hideSingleBase &&
              ((i = i && h > 1),
              (this._baseLayersList.style.display = i ? '' : 'none')),
            (this._separator.style.display = s && i ? '' : 'none'),
            this
          )
        },
        _onLayerChange: function (i) {
          this._handlingClick || this._update()
          var s = this._getLayer(c(i.target)),
            l = s.overlay
              ? i.type === 'add'
                ? 'overlayadd'
                : 'overlayremove'
              : i.type === 'add'
              ? 'baselayerchange'
              : null
          l && this._map.fire(l, s)
        },
        _createRadioElement: function (i, s) {
          var l =
              '<input type="radio" class="leaflet-control-layers-selector" name="' +
              i +
              '"' +
              (s ? ' checked="checked"' : '') +
              '/>',
            f = document.createElement('div')
          return (f.innerHTML = l), f.firstChild
        },
        _addItem: function (i) {
          var s = document.createElement('label'),
            l = this._map.hasLayer(i.layer),
            f
          i.overlay
            ? ((f = document.createElement('input')),
              (f.type = 'checkbox'),
              (f.className = 'leaflet-control-layers-selector'),
              (f.defaultChecked = l))
            : (f = this._createRadioElement(
                'leaflet-base-layers_' + c(this),
                l
              )),
            this._layerControlInputs.push(f),
            (f.layerId = c(i.layer)),
            oe(f, 'click', this._onInputClick, this)
          var h = document.createElement('span')
          h.innerHTML = ' ' + i.name
          var x = document.createElement('span')
          s.appendChild(x), x.appendChild(f), x.appendChild(h)
          var I = i.overlay ? this._overlaysList : this._baseLayersList
          return I.appendChild(s), this._checkDisabledLayers(), s
        },
        _onInputClick: function () {
          if (!this._preventClick) {
            var i = this._layerControlInputs,
              s,
              l,
              f = [],
              h = []
            this._handlingClick = !0
            for (var x = i.length - 1; x >= 0; x--)
              (s = i[x]),
                (l = this._getLayer(s.layerId).layer),
                s.checked ? f.push(l) : s.checked || h.push(l)
            for (x = 0; x < h.length; x++)
              this._map.hasLayer(h[x]) && this._map.removeLayer(h[x])
            for (x = 0; x < f.length; x++)
              this._map.hasLayer(f[x]) || this._map.addLayer(f[x])
            ;(this._handlingClick = !1), this._refocusOnMap()
          }
        },
        _checkDisabledLayers: function () {
          for (
            var i = this._layerControlInputs,
              s,
              l,
              f = this._map.getZoom(),
              h = i.length - 1;
            h >= 0;
            h--
          )
            (s = i[h]),
              (l = this._getLayer(s.layerId).layer),
              (s.disabled =
                (l.options.minZoom !== void 0 && f < l.options.minZoom) ||
                (l.options.maxZoom !== void 0 && f > l.options.maxZoom))
        },
        _expandIfNotCollapsed: function () {
          return this._map && !this.options.collapsed && this.expand(), this
        },
        _expandSafely: function () {
          var i = this._section
          ;(this._preventClick = !0), oe(i, 'click', je), this.expand()
          var s = this
          setTimeout(function () {
            ve(i, 'click', je), (s._preventClick = !1)
          })
        }
      }),
      B_ = function (i, s, l) {
        return new of(i, s, l)
      },
      cl = Mt.extend({
        options: {
          position: 'topleft',
          zoomInText: '<span aria-hidden="true">+</span>',
          zoomInTitle: 'Zoom in',
          zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
          zoomOutTitle: 'Zoom out'
        },
        onAdd: function (i) {
          var s = 'leaflet-control-zoom',
            l = me('div', s + ' leaflet-bar'),
            f = this.options
          return (
            (this._zoomInButton = this._createButton(
              f.zoomInText,
              f.zoomInTitle,
              s + '-in',
              l,
              this._zoomIn
            )),
            (this._zoomOutButton = this._createButton(
              f.zoomOutText,
              f.zoomOutTitle,
              s + '-out',
              l,
              this._zoomOut
            )),
            this._updateDisabled(),
            i.on('zoomend zoomlevelschange', this._updateDisabled, this),
            l
          )
        },
        onRemove: function (i) {
          i.off('zoomend zoomlevelschange', this._updateDisabled, this)
        },
        disable: function () {
          return (this._disabled = !0), this._updateDisabled(), this
        },
        enable: function () {
          return (this._disabled = !1), this._updateDisabled(), this
        },
        _zoomIn: function (i) {
          !this._disabled &&
            this._map._zoom < this._map.getMaxZoom() &&
            this._map.zoomIn(this._map.options.zoomDelta * (i.shiftKey ? 3 : 1))
        },
        _zoomOut: function (i) {
          !this._disabled &&
            this._map._zoom > this._map.getMinZoom() &&
            this._map.zoomOut(
              this._map.options.zoomDelta * (i.shiftKey ? 3 : 1)
            )
        },
        _createButton: function (i, s, l, f, h) {
          var x = me('a', l, f)
          return (
            (x.innerHTML = i),
            (x.href = '#'),
            (x.title = s),
            x.setAttribute('role', 'button'),
            x.setAttribute('aria-label', s),
            _r(x),
            oe(x, 'click', Yn),
            oe(x, 'click', h, this),
            oe(x, 'click', this._refocusOnMap, this),
            x
          )
        },
        _updateDisabled: function () {
          var i = this._map,
            s = 'leaflet-disabled'
          ke(this._zoomInButton, s),
            ke(this._zoomOutButton, s),
            this._zoomInButton.setAttribute('aria-disabled', 'false'),
            this._zoomOutButton.setAttribute('aria-disabled', 'false'),
            (this._disabled || i._zoom === i.getMinZoom()) &&
              (ae(this._zoomOutButton, s),
              this._zoomOutButton.setAttribute('aria-disabled', 'true')),
            (this._disabled || i._zoom === i.getMaxZoom()) &&
              (ae(this._zoomInButton, s),
              this._zoomInButton.setAttribute('aria-disabled', 'true'))
        }
      })
    fe.mergeOptions({ zoomControl: !0 }),
      fe.addInitHook(function () {
        this.options.zoomControl &&
          ((this.zoomControl = new cl()), this.addControl(this.zoomControl))
      })
    var F_ = function (i) {
        return new cl(i)
      },
      sf = Mt.extend({
        options: {
          position: 'bottomleft',
          maxWidth: 100,
          metric: !0,
          imperial: !0
        },
        onAdd: function (i) {
          var s = 'leaflet-control-scale',
            l = me('div', s),
            f = this.options
          return (
            this._addScales(f, s + '-line', l),
            i.on(f.updateWhenIdle ? 'moveend' : 'move', this._update, this),
            i.whenReady(this._update, this),
            l
          )
        },
        onRemove: function (i) {
          i.off(
            this.options.updateWhenIdle ? 'moveend' : 'move',
            this._update,
            this
          )
        },
        _addScales: function (i, s, l) {
          i.metric && (this._mScale = me('div', s, l)),
            i.imperial && (this._iScale = me('div', s, l))
        },
        _update: function () {
          var i = this._map,
            s = i.getSize().y / 2,
            l = i.distance(
              i.containerPointToLatLng([0, s]),
              i.containerPointToLatLng([this.options.maxWidth, s])
            )
          this._updateScales(l)
        },
        _updateScales: function (i) {
          this.options.metric && i && this._updateMetric(i),
            this.options.imperial && i && this._updateImperial(i)
        },
        _updateMetric: function (i) {
          var s = this._getRoundNum(i),
            l = s < 1e3 ? s + ' m' : s / 1e3 + ' km'
          this._updateScale(this._mScale, l, s / i)
        },
        _updateImperial: function (i) {
          var s = i * 3.2808399,
            l,
            f,
            h
          s > 5280
            ? ((l = s / 5280),
              (f = this._getRoundNum(l)),
              this._updateScale(this._iScale, f + ' mi', f / l))
            : ((h = this._getRoundNum(s)),
              this._updateScale(this._iScale, h + ' ft', h / s))
        },
        _updateScale: function (i, s, l) {
          ;(i.style.width = Math.round(this.options.maxWidth * l) + 'px'),
            (i.innerHTML = s)
        },
        _getRoundNum: function (i) {
          var s = Math.pow(10, (Math.floor(i) + '').length - 1),
            l = i / s
          return (
            (l = l >= 10 ? 10 : l >= 5 ? 5 : l >= 3 ? 3 : l >= 2 ? 2 : 1), s * l
          )
        }
      }),
      $_ = function (i) {
        return new sf(i)
      },
      Z_ =
        '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',
      dl = Mt.extend({
        options: {
          position: 'bottomright',
          prefix:
            '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' +
            (J.inlineSvg ? Z_ + ' ' : '') +
            'Leaflet</a>'
        },
        initialize: function (i) {
          E(this, i), (this._attributions = {})
        },
        onAdd: function (i) {
          ;(i.attributionControl = this),
            (this._container = me('div', 'leaflet-control-attribution')),
            _r(this._container)
          for (var s in i._layers)
            i._layers[s].getAttribution &&
              this.addAttribution(i._layers[s].getAttribution())
          return (
            this._update(),
            i.on('layeradd', this._addAttribution, this),
            this._container
          )
        },
        onRemove: function (i) {
          i.off('layeradd', this._addAttribution, this)
        },
        _addAttribution: function (i) {
          i.layer.getAttribution &&
            (this.addAttribution(i.layer.getAttribution()),
            i.layer.once(
              'remove',
              function () {
                this.removeAttribution(i.layer.getAttribution())
              },
              this
            ))
        },
        setPrefix: function (i) {
          return (this.options.prefix = i), this._update(), this
        },
        addAttribution: function (i) {
          return i
            ? (this._attributions[i] || (this._attributions[i] = 0),
              this._attributions[i]++,
              this._update(),
              this)
            : this
        },
        removeAttribution: function (i) {
          return i
            ? (this._attributions[i] &&
                (this._attributions[i]--, this._update()),
              this)
            : this
        },
        _update: function () {
          if (this._map) {
            var i = []
            for (var s in this._attributions) this._attributions[s] && i.push(s)
            var l = []
            this.options.prefix && l.push(this.options.prefix),
              i.length && l.push(i.join(', ')),
              (this._container.innerHTML = l.join(
                ' <span aria-hidden="true">|</span> '
              ))
          }
        }
      })
    fe.mergeOptions({ attributionControl: !0 }),
      fe.addInitHook(function () {
        this.options.attributionControl && new dl().addTo(this)
      })
    var H_ = function (i) {
      return new dl(i)
    }
    ;(Mt.Layers = of),
      (Mt.Zoom = cl),
      (Mt.Scale = sf),
      (Mt.Attribution = dl),
      (yr.layers = B_),
      (yr.zoom = F_),
      (yr.scale = $_),
      (yr.attribution = H_)
    var Zt = V.extend({
      initialize: function (i) {
        this._map = i
      },
      enable: function () {
        return this._enabled
          ? this
          : ((this._enabled = !0), this.addHooks(), this)
      },
      disable: function () {
        return this._enabled
          ? ((this._enabled = !1), this.removeHooks(), this)
          : this
      },
      enabled: function () {
        return !!this._enabled
      }
    })
    Zt.addTo = function (i, s) {
      return i.addHandler(s, this), this
    }
    var q_ = { Events: X },
      af = J.touch ? 'touchstart mousedown' : 'mousedown',
      yn = pe.extend({
        options: { clickTolerance: 3 },
        initialize: function (i, s, l, f) {
          E(this, f),
            (this._element = i),
            (this._dragStartTarget = s || i),
            (this._preventOutline = l)
        },
        enable: function () {
          this._enabled ||
            (oe(this._dragStartTarget, af, this._onDown, this),
            (this._enabled = !0))
        },
        disable: function () {
          this._enabled &&
            (yn._dragging === this && this.finishDrag(!0),
            ve(this._dragStartTarget, af, this._onDown, this),
            (this._enabled = !1),
            (this._moved = !1))
        },
        _onDown: function (i) {
          if (
            this._enabled &&
            ((this._moved = !1), !Ya(this._element, 'leaflet-zoom-anim'))
          ) {
            if (i.touches && i.touches.length !== 1) {
              yn._dragging === this && this.finishDrag()
              return
            }
            if (
              !(
                yn._dragging ||
                i.shiftKey ||
                (i.which !== 1 && i.button !== 1 && !i.touches)
              ) &&
              ((yn._dragging = this),
              this._preventOutline && il(this._element),
              el(),
              mr(),
              !this._moving)
            ) {
              this.fire('down')
              var s = i.touches ? i.touches[0] : i,
                l = Xd(this._element)
              ;(this._startPoint = new D(s.clientX, s.clientY)),
                (this._startPos = Qn(this._element)),
                (this._parentScale = rl(l))
              var f = i.type === 'mousedown'
              oe(document, f ? 'mousemove' : 'touchmove', this._onMove, this),
                oe(
                  document,
                  f ? 'mouseup' : 'touchend touchcancel',
                  this._onUp,
                  this
                )
            }
          }
        },
        _onMove: function (i) {
          if (this._enabled) {
            if (i.touches && i.touches.length > 1) {
              this._moved = !0
              return
            }
            var s = i.touches && i.touches.length === 1 ? i.touches[0] : i,
              l = new D(s.clientX, s.clientY)._subtract(this._startPoint)
            ;(!l.x && !l.y) ||
              Math.abs(l.x) + Math.abs(l.y) < this.options.clickTolerance ||
              ((l.x /= this._parentScale.x),
              (l.y /= this._parentScale.y),
              je(i),
              this._moved ||
                (this.fire('dragstart'),
                (this._moved = !0),
                ae(document.body, 'leaflet-dragging'),
                (this._lastTarget = i.target || i.srcElement),
                window.SVGElementInstance &&
                  this._lastTarget instanceof window.SVGElementInstance &&
                  (this._lastTarget = this._lastTarget.correspondingUseElement),
                ae(this._lastTarget, 'leaflet-drag-target')),
              (this._newPos = this._startPos.add(l)),
              (this._moving = !0),
              (this._lastEvent = i),
              this._updatePosition())
          }
        },
        _updatePosition: function () {
          var i = { originalEvent: this._lastEvent }
          this.fire('predrag', i),
            be(this._element, this._newPos),
            this.fire('drag', i)
        },
        _onUp: function () {
          this._enabled && this.finishDrag()
        },
        finishDrag: function (i) {
          ke(document.body, 'leaflet-dragging'),
            this._lastTarget &&
              (ke(this._lastTarget, 'leaflet-drag-target'),
              (this._lastTarget = null)),
            ve(document, 'mousemove touchmove', this._onMove, this),
            ve(document, 'mouseup touchend touchcancel', this._onUp, this),
            tl(),
            gr()
          var s = this._moved && this._moving
          ;(this._moving = !1),
            (yn._dragging = !1),
            s &&
              this.fire('dragend', {
                noInertia: i,
                distance: this._newPos.distanceTo(this._startPos)
              })
        }
      })
    function lf(i, s, l) {
      var f,
        h = [1, 4, 2, 8],
        x,
        I,
        j,
        B,
        q,
        G,
        ne,
        le
      for (x = 0, G = i.length; x < G; x++) i[x]._code = Xn(i[x], s)
      for (j = 0; j < 4; j++) {
        for (ne = h[j], f = [], x = 0, G = i.length, I = G - 1; x < G; I = x++)
          (B = i[x]),
            (q = i[I]),
            B._code & ne
              ? q._code & ne ||
                ((le = Zo(q, B, ne, s, l)), (le._code = Xn(le, s)), f.push(le))
              : (q._code & ne &&
                  ((le = Zo(q, B, ne, s, l)),
                  (le._code = Xn(le, s)),
                  f.push(le)),
                f.push(B))
        i = f
      }
      return i
    }
    function uf(i, s) {
      var l, f, h, x, I, j, B, q, G
      if (!i || i.length === 0) throw new Error('latlngs not passed')
      yt(i) ||
        (console.warn('latlngs are not flat! Only the first ring will be used'),
        (i = i[0]))
      var ne = re([0, 0]),
        le = ie(i),
        Ge =
          le.getNorthWest().distanceTo(le.getSouthWest()) *
          le.getNorthEast().distanceTo(le.getNorthWest())
      Ge < 1700 && (ne = fl(i))
      var Ae = i.length,
        wt = []
      for (l = 0; l < Ae; l++) {
        var tt = re(i[l])
        wt.push(s.project(re([tt.lat - ne.lat, tt.lng - ne.lng])))
      }
      for (j = B = q = 0, l = 0, f = Ae - 1; l < Ae; f = l++)
        (h = wt[l]),
          (x = wt[f]),
          (I = h.y * x.x - x.y * h.x),
          (B += (h.x + x.x) * I),
          (q += (h.y + x.y) * I),
          (j += I * 3)
      j === 0 ? (G = wt[0]) : (G = [B / j, q / j])
      var Mi = s.unproject($(G))
      return re([Mi.lat + ne.lat, Mi.lng + ne.lng])
    }
    function fl(i) {
      for (var s = 0, l = 0, f = 0, h = 0; h < i.length; h++) {
        var x = re(i[h])
        ;(s += x.lat), (l += x.lng), f++
      }
      return re([s / f, l / f])
    }
    var V_ = {
      __proto__: null,
      clipPolygon: lf,
      polygonCenter: uf,
      centroid: fl
    }
    function cf(i, s) {
      if (!s || !i.length) return i.slice()
      var l = s * s
      return (i = G_(i, l)), (i = U_(i, l)), i
    }
    function df(i, s, l) {
      return Math.sqrt(wr(i, s, l, !0))
    }
    function W_(i, s, l) {
      return wr(i, s, l)
    }
    function U_(i, s) {
      var l = i.length,
        f = typeof Uint8Array < 'u' ? Uint8Array : Array,
        h = new f(l)
      ;(h[0] = h[l - 1] = 1), hl(i, h, s, 0, l - 1)
      var x,
        I = []
      for (x = 0; x < l; x++) h[x] && I.push(i[x])
      return I
    }
    function hl(i, s, l, f, h) {
      var x = 0,
        I,
        j,
        B
      for (j = f + 1; j <= h - 1; j++)
        (B = wr(i[j], i[f], i[h], !0)), B > x && ((I = j), (x = B))
      x > l && ((s[I] = 1), hl(i, s, l, f, I), hl(i, s, l, I, h))
    }
    function G_(i, s) {
      for (var l = [i[0]], f = 1, h = 0, x = i.length; f < x; f++)
        Q_(i[f], i[h]) > s && (l.push(i[f]), (h = f))
      return h < x - 1 && l.push(i[x - 1]), l
    }
    var ff
    function hf(i, s, l, f, h) {
      var x = f ? ff : Xn(i, l),
        I = Xn(s, l),
        j,
        B,
        q
      for (ff = I; ; ) {
        if (!(x | I)) return [i, s]
        if (x & I) return !1
        ;(j = x || I),
          (B = Zo(i, s, j, l, h)),
          (q = Xn(B, l)),
          j === x ? ((i = B), (x = q)) : ((s = B), (I = q))
      }
    }
    function Zo(i, s, l, f, h) {
      var x = s.x - i.x,
        I = s.y - i.y,
        j = f.min,
        B = f.max,
        q,
        G
      return (
        l & 8
          ? ((q = i.x + (x * (B.y - i.y)) / I), (G = B.y))
          : l & 4
          ? ((q = i.x + (x * (j.y - i.y)) / I), (G = j.y))
          : l & 2
          ? ((q = B.x), (G = i.y + (I * (B.x - i.x)) / x))
          : l & 1 && ((q = j.x), (G = i.y + (I * (j.x - i.x)) / x)),
        new D(q, G, h)
      )
    }
    function Xn(i, s) {
      var l = 0
      return (
        i.x < s.min.x ? (l |= 1) : i.x > s.max.x && (l |= 2),
        i.y < s.min.y ? (l |= 4) : i.y > s.max.y && (l |= 8),
        l
      )
    }
    function Q_(i, s) {
      var l = s.x - i.x,
        f = s.y - i.y
      return l * l + f * f
    }
    function wr(i, s, l, f) {
      var h = s.x,
        x = s.y,
        I = l.x - h,
        j = l.y - x,
        B = I * I + j * j,
        q
      return (
        B > 0 &&
          ((q = ((i.x - h) * I + (i.y - x) * j) / B),
          q > 1
            ? ((h = l.x), (x = l.y))
            : q > 0 && ((h += I * q), (x += j * q))),
        (I = i.x - h),
        (j = i.y - x),
        f ? I * I + j * j : new D(h, x)
      )
    }
    function yt(i) {
      return !_(i[0]) || (typeof i[0][0] != 'object' && typeof i[0][0] < 'u')
    }
    function pf(i) {
      return (
        console.warn(
          'Deprecated use of _flat, please use L.LineUtil.isFlat instead.'
        ),
        yt(i)
      )
    }
    function mf(i, s) {
      var l, f, h, x, I, j, B, q
      if (!i || i.length === 0) throw new Error('latlngs not passed')
      yt(i) ||
        (console.warn('latlngs are not flat! Only the first ring will be used'),
        (i = i[0]))
      var G = re([0, 0]),
        ne = ie(i),
        le =
          ne.getNorthWest().distanceTo(ne.getSouthWest()) *
          ne.getNorthEast().distanceTo(ne.getNorthWest())
      le < 1700 && (G = fl(i))
      var Ge = i.length,
        Ae = []
      for (l = 0; l < Ge; l++) {
        var wt = re(i[l])
        Ae.push(s.project(re([wt.lat - G.lat, wt.lng - G.lng])))
      }
      for (l = 0, f = 0; l < Ge - 1; l++) f += Ae[l].distanceTo(Ae[l + 1]) / 2
      if (f === 0) q = Ae[0]
      else
        for (l = 0, x = 0; l < Ge - 1; l++)
          if (
            ((I = Ae[l]),
            (j = Ae[l + 1]),
            (h = I.distanceTo(j)),
            (x += h),
            x > f)
          ) {
            ;(B = (x - f) / h),
              (q = [j.x - B * (j.x - I.x), j.y - B * (j.y - I.y)])
            break
          }
      var tt = s.unproject($(q))
      return re([tt.lat + G.lat, tt.lng + G.lng])
    }
    var K_ = {
        __proto__: null,
        simplify: cf,
        pointToSegmentDistance: df,
        closestPointOnSegment: W_,
        clipSegment: hf,
        _getEdgeIntersection: Zo,
        _getBitCode: Xn,
        _sqClosestPointOnSegment: wr,
        isFlat: yt,
        _flat: pf,
        polylineCenter: mf
      },
      pl = {
        project: function (i) {
          return new D(i.lng, i.lat)
        },
        unproject: function (i) {
          return new se(i.y, i.x)
        },
        bounds: new Q([-180, -90], [180, 90])
      },
      ml = {
        R: 6378137,
        R_MINOR: 6356752314245179e-9,
        bounds: new Q(
          [-2003750834279e-5, -1549657073972e-5],
          [2003750834279e-5, 1876465623138e-5]
        ),
        project: function (i) {
          var s = Math.PI / 180,
            l = this.R,
            f = i.lat * s,
            h = this.R_MINOR / l,
            x = Math.sqrt(1 - h * h),
            I = x * Math.sin(f),
            j =
              Math.tan(Math.PI / 4 - f / 2) / Math.pow((1 - I) / (1 + I), x / 2)
          return (
            (f = -l * Math.log(Math.max(j, 1e-10))), new D(i.lng * s * l, f)
          )
        },
        unproject: function (i) {
          for (
            var s = 180 / Math.PI,
              l = this.R,
              f = this.R_MINOR / l,
              h = Math.sqrt(1 - f * f),
              x = Math.exp(-i.y / l),
              I = Math.PI / 2 - 2 * Math.atan(x),
              j = 0,
              B = 0.1,
              q;
            j < 15 && Math.abs(B) > 1e-7;
            j++
          )
            (q = h * Math.sin(I)),
              (q = Math.pow((1 - q) / (1 + q), h / 2)),
              (B = Math.PI / 2 - 2 * Math.atan(x * q) - I),
              (I += B)
          return new se(I * s, (i.x * s) / l)
        }
      },
      Y_ = { __proto__: null, LonLat: pl, Mercator: ml, SphericalMercator: $a },
      X_ = o({}, _n, {
        code: 'EPSG:3395',
        projection: ml,
        transformation: (function () {
          var i = 0.5 / (Math.PI * ml.R)
          return dr(i, 0.5, -i, 0.5)
        })()
      }),
      gf = o({}, _n, {
        code: 'EPSG:4326',
        projection: pl,
        transformation: dr(1 / 180, 1, -1 / 180, 0.5)
      }),
      J_ = o({}, et, {
        projection: pl,
        transformation: dr(1, 0, -1, 0),
        scale: function (i) {
          return Math.pow(2, i)
        },
        zoom: function (i) {
          return Math.log(i) / Math.LN2
        },
        distance: function (i, s) {
          var l = s.lng - i.lng,
            f = s.lat - i.lat
          return Math.sqrt(l * l + f * f)
        },
        infinite: !0
      })
    ;(et.Earth = _n),
      (et.EPSG3395 = X_),
      (et.EPSG3857 = Ha),
      (et.EPSG900913 = o_),
      (et.EPSG4326 = gf),
      (et.Simple = J_)
    var bt = pe.extend({
      options: {
        pane: 'overlayPane',
        attribution: null,
        bubblingMouseEvents: !0
      },
      addTo: function (i) {
        return i.addLayer(this), this
      },
      remove: function () {
        return this.removeFrom(this._map || this._mapToAdd)
      },
      removeFrom: function (i) {
        return i && i.removeLayer(this), this
      },
      getPane: function (i) {
        return this._map.getPane(i ? this.options[i] || i : this.options.pane)
      },
      addInteractiveTarget: function (i) {
        return (this._map._targets[c(i)] = this), this
      },
      removeInteractiveTarget: function (i) {
        return delete this._map._targets[c(i)], this
      },
      getAttribution: function () {
        return this.options.attribution
      },
      _layerAdd: function (i) {
        var s = i.target
        if (s.hasLayer(this)) {
          if (
            ((this._map = s),
            (this._zoomAnimated = s._zoomAnimated),
            this.getEvents)
          ) {
            var l = this.getEvents()
            s.on(l, this),
              this.once(
                'remove',
                function () {
                  s.off(l, this)
                },
                this
              )
          }
          this.onAdd(s), this.fire('add'), s.fire('layeradd', { layer: this })
        }
      }
    })
    fe.include({
      addLayer: function (i) {
        if (!i._layerAdd) throw new Error('The provided object is not a Layer.')
        var s = c(i)
        return this._layers[s]
          ? this
          : ((this._layers[s] = i),
            (i._mapToAdd = this),
            i.beforeAdd && i.beforeAdd(this),
            this.whenReady(i._layerAdd, i),
            this)
      },
      removeLayer: function (i) {
        var s = c(i)
        return this._layers[s]
          ? (this._loaded && i.onRemove(this),
            delete this._layers[s],
            this._loaded &&
              (this.fire('layerremove', { layer: i }), i.fire('remove')),
            (i._map = i._mapToAdd = null),
            this)
          : this
      },
      hasLayer: function (i) {
        return c(i) in this._layers
      },
      eachLayer: function (i, s) {
        for (var l in this._layers) i.call(s, this._layers[l])
        return this
      },
      _addLayers: function (i) {
        i = i ? (_(i) ? i : [i]) : []
        for (var s = 0, l = i.length; s < l; s++) this.addLayer(i[s])
      },
      _addZoomLimit: function (i) {
        ;(!isNaN(i.options.maxZoom) || !isNaN(i.options.minZoom)) &&
          ((this._zoomBoundLayers[c(i)] = i), this._updateZoomLevels())
      },
      _removeZoomLimit: function (i) {
        var s = c(i)
        this._zoomBoundLayers[s] &&
          (delete this._zoomBoundLayers[s], this._updateZoomLevels())
      },
      _updateZoomLevels: function () {
        var i = 1 / 0,
          s = -1 / 0,
          l = this._getZoomSpan()
        for (var f in this._zoomBoundLayers) {
          var h = this._zoomBoundLayers[f].options
          ;(i = h.minZoom === void 0 ? i : Math.min(i, h.minZoom)),
            (s = h.maxZoom === void 0 ? s : Math.max(s, h.maxZoom))
        }
        ;(this._layersMaxZoom = s === -1 / 0 ? void 0 : s),
          (this._layersMinZoom = i === 1 / 0 ? void 0 : i),
          l !== this._getZoomSpan() && this.fire('zoomlevelschange'),
          this.options.maxZoom === void 0 &&
            this._layersMaxZoom &&
            this.getZoom() > this._layersMaxZoom &&
            this.setZoom(this._layersMaxZoom),
          this.options.minZoom === void 0 &&
            this._layersMinZoom &&
            this.getZoom() < this._layersMinZoom &&
            this.setZoom(this._layersMinZoom)
      }
    })
    var Ei = bt.extend({
        initialize: function (i, s) {
          E(this, s), (this._layers = {})
          var l, f
          if (i) for (l = 0, f = i.length; l < f; l++) this.addLayer(i[l])
        },
        addLayer: function (i) {
          var s = this.getLayerId(i)
          return (this._layers[s] = i), this._map && this._map.addLayer(i), this
        },
        removeLayer: function (i) {
          var s = i in this._layers ? i : this.getLayerId(i)
          return (
            this._map &&
              this._layers[s] &&
              this._map.removeLayer(this._layers[s]),
            delete this._layers[s],
            this
          )
        },
        hasLayer: function (i) {
          var s = typeof i == 'number' ? i : this.getLayerId(i)
          return s in this._layers
        },
        clearLayers: function () {
          return this.eachLayer(this.removeLayer, this)
        },
        invoke: function (i) {
          var s = Array.prototype.slice.call(arguments, 1),
            l,
            f
          for (l in this._layers)
            (f = this._layers[l]), f[i] && f[i].apply(f, s)
          return this
        },
        onAdd: function (i) {
          this.eachLayer(i.addLayer, i)
        },
        onRemove: function (i) {
          this.eachLayer(i.removeLayer, i)
        },
        eachLayer: function (i, s) {
          for (var l in this._layers) i.call(s, this._layers[l])
          return this
        },
        getLayer: function (i) {
          return this._layers[i]
        },
        getLayers: function () {
          var i = []
          return this.eachLayer(i.push, i), i
        },
        setZIndex: function (i) {
          return this.invoke('setZIndex', i)
        },
        getLayerId: function (i) {
          return c(i)
        }
      }),
      ey = function (i, s) {
        return new Ei(i, s)
      },
      Yt = Ei.extend({
        addLayer: function (i) {
          return this.hasLayer(i)
            ? this
            : (i.addEventParent(this),
              Ei.prototype.addLayer.call(this, i),
              this.fire('layeradd', { layer: i }))
        },
        removeLayer: function (i) {
          return this.hasLayer(i)
            ? (i in this._layers && (i = this._layers[i]),
              i.removeEventParent(this),
              Ei.prototype.removeLayer.call(this, i),
              this.fire('layerremove', { layer: i }))
            : this
        },
        setStyle: function (i) {
          return this.invoke('setStyle', i)
        },
        bringToFront: function () {
          return this.invoke('bringToFront')
        },
        bringToBack: function () {
          return this.invoke('bringToBack')
        },
        getBounds: function () {
          var i = new ce()
          for (var s in this._layers) {
            var l = this._layers[s]
            i.extend(l.getBounds ? l.getBounds() : l.getLatLng())
          }
          return i
        }
      }),
      ty = function (i, s) {
        return new Yt(i, s)
      },
      Pi = V.extend({
        options: {
          popupAnchor: [0, 0],
          tooltipAnchor: [0, 0],
          crossOrigin: !1
        },
        initialize: function (i) {
          E(this, i)
        },
        createIcon: function (i) {
          return this._createIcon('icon', i)
        },
        createShadow: function (i) {
          return this._createIcon('shadow', i)
        },
        _createIcon: function (i, s) {
          var l = this._getIconUrl(i)
          if (!l) {
            if (i === 'icon')
              throw new Error('iconUrl not set in Icon options (see the docs).')
            return null
          }
          var f = this._createImg(l, s && s.tagName === 'IMG' ? s : null)
          return (
            this._setIconStyles(f, i),
            (this.options.crossOrigin || this.options.crossOrigin === '') &&
              (f.crossOrigin =
                this.options.crossOrigin === !0
                  ? ''
                  : this.options.crossOrigin),
            f
          )
        },
        _setIconStyles: function (i, s) {
          var l = this.options,
            f = l[s + 'Size']
          typeof f == 'number' && (f = [f, f])
          var h = $(f),
            x = $(
              (s === 'shadow' && l.shadowAnchor) ||
                l.iconAnchor ||
                (h && h.divideBy(2, !0))
            )
          ;(i.className = 'leaflet-marker-' + s + ' ' + (l.className || '')),
            x &&
              ((i.style.marginLeft = -x.x + 'px'),
              (i.style.marginTop = -x.y + 'px')),
            h && ((i.style.width = h.x + 'px'), (i.style.height = h.y + 'px'))
        },
        _createImg: function (i, s) {
          return (s = s || document.createElement('img')), (s.src = i), s
        },
        _getIconUrl: function (i) {
          return (
            (J.retina && this.options[i + 'RetinaUrl']) ||
            this.options[i + 'Url']
          )
        }
      })
    function ny(i) {
      return new Pi(i)
    }
    var Sr = Pi.extend({
        options: {
          iconUrl: 'marker-icon.png',
          iconRetinaUrl: 'marker-icon-2x.png',
          shadowUrl: 'marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          tooltipAnchor: [16, -28],
          shadowSize: [41, 41]
        },
        _getIconUrl: function (i) {
          return (
            typeof Sr.imagePath != 'string' &&
              (Sr.imagePath = this._detectIconPath()),
            (this.options.imagePath || Sr.imagePath) +
              Pi.prototype._getIconUrl.call(this, i)
          )
        },
        _stripUrl: function (i) {
          var s = function (l, f, h) {
            var x = f.exec(l)
            return x && x[h]
          }
          return (
            (i = s(i, /^url\((['"])?(.+)\1\)$/, 2)),
            i && s(i, /^(.*)marker-icon\.png$/, 1)
          )
        },
        _detectIconPath: function () {
          var i = me('div', 'leaflet-default-icon-path', document.body),
            s = pr(i, 'background-image') || pr(i, 'backgroundImage')
          if ((document.body.removeChild(i), (s = this._stripUrl(s)), s))
            return s
          var l = document.querySelector('link[href$="leaflet.css"]')
          return l ? l.href.substring(0, l.href.length - 11 - 1) : ''
        }
      }),
      vf = Zt.extend({
        initialize: function (i) {
          this._marker = i
        },
        addHooks: function () {
          var i = this._marker._icon
          this._draggable || (this._draggable = new yn(i, i, !0)),
            this._draggable
              .on(
                {
                  dragstart: this._onDragStart,
                  predrag: this._onPreDrag,
                  drag: this._onDrag,
                  dragend: this._onDragEnd
                },
                this
              )
              .enable(),
            ae(i, 'leaflet-marker-draggable')
        },
        removeHooks: function () {
          this._draggable
            .off(
              {
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd
              },
              this
            )
            .disable(),
            this._marker._icon &&
              ke(this._marker._icon, 'leaflet-marker-draggable')
        },
        moved: function () {
          return this._draggable && this._draggable._moved
        },
        _adjustPan: function (i) {
          var s = this._marker,
            l = s._map,
            f = this._marker.options.autoPanSpeed,
            h = this._marker.options.autoPanPadding,
            x = Qn(s._icon),
            I = l.getPixelBounds(),
            j = l.getPixelOrigin(),
            B = te(I.min._subtract(j).add(h), I.max._subtract(j).subtract(h))
          if (!B.contains(x)) {
            var q = $(
              (Math.max(B.max.x, x.x) - B.max.x) / (I.max.x - B.max.x) -
                (Math.min(B.min.x, x.x) - B.min.x) / (I.min.x - B.min.x),
              (Math.max(B.max.y, x.y) - B.max.y) / (I.max.y - B.max.y) -
                (Math.min(B.min.y, x.y) - B.min.y) / (I.min.y - B.min.y)
            ).multiplyBy(f)
            l.panBy(q, { animate: !1 }),
              this._draggable._newPos._add(q),
              this._draggable._startPos._add(q),
              be(s._icon, this._draggable._newPos),
              this._onDrag(i),
              (this._panRequest = R(this._adjustPan.bind(this, i)))
          }
        },
        _onDragStart: function () {
          ;(this._oldLatLng = this._marker.getLatLng()),
            this._marker.closePopup && this._marker.closePopup(),
            this._marker.fire('movestart').fire('dragstart')
        },
        _onPreDrag: function (i) {
          this._marker.options.autoPan &&
            (F(this._panRequest),
            (this._panRequest = R(this._adjustPan.bind(this, i))))
        },
        _onDrag: function (i) {
          var s = this._marker,
            l = s._shadow,
            f = Qn(s._icon),
            h = s._map.layerPointToLatLng(f)
          l && be(l, f),
            (s._latlng = h),
            (i.latlng = h),
            (i.oldLatLng = this._oldLatLng),
            s.fire('move', i).fire('drag', i)
        },
        _onDragEnd: function (i) {
          F(this._panRequest),
            delete this._oldLatLng,
            this._marker.fire('moveend').fire('dragend', i)
        }
      }),
      Ho = bt.extend({
        options: {
          icon: new Sr(),
          interactive: !0,
          keyboard: !0,
          title: '',
          alt: 'Marker',
          zIndexOffset: 0,
          opacity: 1,
          riseOnHover: !1,
          riseOffset: 250,
          pane: 'markerPane',
          shadowPane: 'shadowPane',
          bubblingMouseEvents: !1,
          autoPanOnFocus: !0,
          draggable: !1,
          autoPan: !1,
          autoPanPadding: [50, 50],
          autoPanSpeed: 10
        },
        initialize: function (i, s) {
          E(this, s), (this._latlng = re(i))
        },
        onAdd: function (i) {
          ;(this._zoomAnimated =
            this._zoomAnimated && i.options.markerZoomAnimation),
            this._zoomAnimated && i.on('zoomanim', this._animateZoom, this),
            this._initIcon(),
            this.update()
        },
        onRemove: function (i) {
          this.dragging &&
            this.dragging.enabled() &&
            ((this.options.draggable = !0), this.dragging.removeHooks()),
            delete this.dragging,
            this._zoomAnimated && i.off('zoomanim', this._animateZoom, this),
            this._removeIcon(),
            this._removeShadow()
        },
        getEvents: function () {
          return { zoom: this.update, viewreset: this.update }
        },
        getLatLng: function () {
          return this._latlng
        },
        setLatLng: function (i) {
          var s = this._latlng
          return (
            (this._latlng = re(i)),
            this.update(),
            this.fire('move', { oldLatLng: s, latlng: this._latlng })
          )
        },
        setZIndexOffset: function (i) {
          return (this.options.zIndexOffset = i), this.update()
        },
        getIcon: function () {
          return this.options.icon
        },
        setIcon: function (i) {
          return (
            (this.options.icon = i),
            this._map && (this._initIcon(), this.update()),
            this._popup && this.bindPopup(this._popup, this._popup.options),
            this
          )
        },
        getElement: function () {
          return this._icon
        },
        update: function () {
          if (this._icon && this._map) {
            var i = this._map.latLngToLayerPoint(this._latlng).round()
            this._setPos(i)
          }
          return this
        },
        _initIcon: function () {
          var i = this.options,
            s = 'leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide'),
            l = i.icon.createIcon(this._icon),
            f = !1
          l !== this._icon &&
            (this._icon && this._removeIcon(),
            (f = !0),
            i.title && (l.title = i.title),
            l.tagName === 'IMG' && (l.alt = i.alt || '')),
            ae(l, s),
            i.keyboard &&
              ((l.tabIndex = '0'), l.setAttribute('role', 'button')),
            (this._icon = l),
            i.riseOnHover &&
              this.on({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex
              }),
            this.options.autoPanOnFocus &&
              oe(l, 'focus', this._panOnFocus, this)
          var h = i.icon.createShadow(this._shadow),
            x = !1
          h !== this._shadow && (this._removeShadow(), (x = !0)),
            h && (ae(h, s), (h.alt = '')),
            (this._shadow = h),
            i.opacity < 1 && this._updateOpacity(),
            f && this.getPane().appendChild(this._icon),
            this._initInteraction(),
            h && x && this.getPane(i.shadowPane).appendChild(this._shadow)
        },
        _removeIcon: function () {
          this.options.riseOnHover &&
            this.off({
              mouseover: this._bringToFront,
              mouseout: this._resetZIndex
            }),
            this.options.autoPanOnFocus &&
              ve(this._icon, 'focus', this._panOnFocus, this),
            Te(this._icon),
            this.removeInteractiveTarget(this._icon),
            (this._icon = null)
        },
        _removeShadow: function () {
          this._shadow && Te(this._shadow), (this._shadow = null)
        },
        _setPos: function (i) {
          this._icon && be(this._icon, i),
            this._shadow && be(this._shadow, i),
            (this._zIndex = i.y + this.options.zIndexOffset),
            this._resetZIndex()
        },
        _updateZIndex: function (i) {
          this._icon && (this._icon.style.zIndex = this._zIndex + i)
        },
        _animateZoom: function (i) {
          var s = this._map
            ._latLngToNewLayerPoint(this._latlng, i.zoom, i.center)
            .round()
          this._setPos(s)
        },
        _initInteraction: function () {
          if (
            this.options.interactive &&
            (ae(this._icon, 'leaflet-interactive'),
            this.addInteractiveTarget(this._icon),
            vf)
          ) {
            var i = this.options.draggable
            this.dragging &&
              ((i = this.dragging.enabled()), this.dragging.disable()),
              (this.dragging = new vf(this)),
              i && this.dragging.enable()
          }
        },
        setOpacity: function (i) {
          return (
            (this.options.opacity = i), this._map && this._updateOpacity(), this
          )
        },
        _updateOpacity: function () {
          var i = this.options.opacity
          this._icon && _t(this._icon, i), this._shadow && _t(this._shadow, i)
        },
        _bringToFront: function () {
          this._updateZIndex(this.options.riseOffset)
        },
        _resetZIndex: function () {
          this._updateZIndex(0)
        },
        _panOnFocus: function () {
          var i = this._map
          if (i) {
            var s = this.options.icon.options,
              l = s.iconSize ? $(s.iconSize) : $(0, 0),
              f = s.iconAnchor ? $(s.iconAnchor) : $(0, 0)
            i.panInside(this._latlng, {
              paddingTopLeft: f,
              paddingBottomRight: l.subtract(f)
            })
          }
        },
        _getPopupAnchor: function () {
          return this.options.icon.options.popupAnchor
        },
        _getTooltipAnchor: function () {
          return this.options.icon.options.tooltipAnchor
        }
      })
    function iy(i, s) {
      return new Ho(i, s)
    }
    var wn = bt.extend({
        options: {
          stroke: !0,
          color: '#3388ff',
          weight: 3,
          opacity: 1,
          lineCap: 'round',
          lineJoin: 'round',
          dashArray: null,
          dashOffset: null,
          fill: !1,
          fillColor: null,
          fillOpacity: 0.2,
          fillRule: 'evenodd',
          interactive: !0,
          bubblingMouseEvents: !0
        },
        beforeAdd: function (i) {
          this._renderer = i.getRenderer(this)
        },
        onAdd: function () {
          this._renderer._initPath(this),
            this._reset(),
            this._renderer._addPath(this)
        },
        onRemove: function () {
          this._renderer._removePath(this)
        },
        redraw: function () {
          return this._map && this._renderer._updatePath(this), this
        },
        setStyle: function (i) {
          return (
            E(this, i),
            this._renderer &&
              (this._renderer._updateStyle(this),
              this.options.stroke &&
                i &&
                Object.prototype.hasOwnProperty.call(i, 'weight') &&
                this._updateBounds()),
            this
          )
        },
        bringToFront: function () {
          return this._renderer && this._renderer._bringToFront(this), this
        },
        bringToBack: function () {
          return this._renderer && this._renderer._bringToBack(this), this
        },
        getElement: function () {
          return this._path
        },
        _reset: function () {
          this._project(), this._update()
        },
        _clickTolerance: function () {
          return (
            (this.options.stroke ? this.options.weight / 2 : 0) +
            (this._renderer.options.tolerance || 0)
          )
        }
      }),
      qo = wn.extend({
        options: { fill: !0, radius: 10 },
        initialize: function (i, s) {
          E(this, s),
            (this._latlng = re(i)),
            (this._radius = this.options.radius)
        },
        setLatLng: function (i) {
          var s = this._latlng
          return (
            (this._latlng = re(i)),
            this.redraw(),
            this.fire('move', { oldLatLng: s, latlng: this._latlng })
          )
        },
        getLatLng: function () {
          return this._latlng
        },
        setRadius: function (i) {
          return (this.options.radius = this._radius = i), this.redraw()
        },
        getRadius: function () {
          return this._radius
        },
        setStyle: function (i) {
          var s = (i && i.radius) || this._radius
          return wn.prototype.setStyle.call(this, i), this.setRadius(s), this
        },
        _project: function () {
          ;(this._point = this._map.latLngToLayerPoint(this._latlng)),
            this._updateBounds()
        },
        _updateBounds: function () {
          var i = this._radius,
            s = this._radiusY || i,
            l = this._clickTolerance(),
            f = [i + l, s + l]
          this._pxBounds = new Q(this._point.subtract(f), this._point.add(f))
        },
        _update: function () {
          this._map && this._updatePath()
        },
        _updatePath: function () {
          this._renderer._updateCircle(this)
        },
        _empty: function () {
          return (
            this._radius && !this._renderer._bounds.intersects(this._pxBounds)
          )
        },
        _containsPoint: function (i) {
          return (
            i.distanceTo(this._point) <= this._radius + this._clickTolerance()
          )
        }
      })
    function ry(i, s) {
      return new qo(i, s)
    }
    var gl = qo.extend({
      initialize: function (i, s, l) {
        if (
          (typeof s == 'number' && (s = o({}, l, { radius: s })),
          E(this, s),
          (this._latlng = re(i)),
          isNaN(this.options.radius))
        )
          throw new Error('Circle radius cannot be NaN')
        this._mRadius = this.options.radius
      },
      setRadius: function (i) {
        return (this._mRadius = i), this.redraw()
      },
      getRadius: function () {
        return this._mRadius
      },
      getBounds: function () {
        var i = [this._radius, this._radiusY || this._radius]
        return new ce(
          this._map.layerPointToLatLng(this._point.subtract(i)),
          this._map.layerPointToLatLng(this._point.add(i))
        )
      },
      setStyle: wn.prototype.setStyle,
      _project: function () {
        var i = this._latlng.lng,
          s = this._latlng.lat,
          l = this._map,
          f = l.options.crs
        if (f.distance === _n.distance) {
          var h = Math.PI / 180,
            x = this._mRadius / _n.R / h,
            I = l.project([s + x, i]),
            j = l.project([s - x, i]),
            B = I.add(j).divideBy(2),
            q = l.unproject(B).lat,
            G =
              Math.acos(
                (Math.cos(x * h) - Math.sin(s * h) * Math.sin(q * h)) /
                  (Math.cos(s * h) * Math.cos(q * h))
              ) / h
          ;(isNaN(G) || G === 0) && (G = x / Math.cos((Math.PI / 180) * s)),
            (this._point = B.subtract(l.getPixelOrigin())),
            (this._radius = isNaN(G) ? 0 : B.x - l.project([q, i - G]).x),
            (this._radiusY = B.y - I.y)
        } else {
          var ne = f.unproject(
            f.project(this._latlng).subtract([this._mRadius, 0])
          )
          ;(this._point = l.latLngToLayerPoint(this._latlng)),
            (this._radius = this._point.x - l.latLngToLayerPoint(ne).x)
        }
        this._updateBounds()
      }
    })
    function oy(i, s, l) {
      return new gl(i, s, l)
    }
    var Xt = wn.extend({
      options: { smoothFactor: 1, noClip: !1 },
      initialize: function (i, s) {
        E(this, s), this._setLatLngs(i)
      },
      getLatLngs: function () {
        return this._latlngs
      },
      setLatLngs: function (i) {
        return this._setLatLngs(i), this.redraw()
      },
      isEmpty: function () {
        return !this._latlngs.length
      },
      closestLayerPoint: function (i) {
        for (
          var s = 1 / 0, l = null, f = wr, h, x, I = 0, j = this._parts.length;
          I < j;
          I++
        )
          for (var B = this._parts[I], q = 1, G = B.length; q < G; q++) {
            ;(h = B[q - 1]), (x = B[q])
            var ne = f(i, h, x, !0)
            ne < s && ((s = ne), (l = f(i, h, x)))
          }
        return l && (l.distance = Math.sqrt(s)), l
      },
      getCenter: function () {
        if (!this._map)
          throw new Error('Must add layer to map before using getCenter()')
        return mf(this._defaultShape(), this._map.options.crs)
      },
      getBounds: function () {
        return this._bounds
      },
      addLatLng: function (i, s) {
        return (
          (s = s || this._defaultShape()),
          (i = re(i)),
          s.push(i),
          this._bounds.extend(i),
          this.redraw()
        )
      },
      _setLatLngs: function (i) {
        ;(this._bounds = new ce()), (this._latlngs = this._convertLatLngs(i))
      },
      _defaultShape: function () {
        return yt(this._latlngs) ? this._latlngs : this._latlngs[0]
      },
      _convertLatLngs: function (i) {
        for (var s = [], l = yt(i), f = 0, h = i.length; f < h; f++)
          l
            ? ((s[f] = re(i[f])), this._bounds.extend(s[f]))
            : (s[f] = this._convertLatLngs(i[f]))
        return s
      },
      _project: function () {
        var i = new Q()
        ;(this._rings = []),
          this._projectLatlngs(this._latlngs, this._rings, i),
          this._bounds.isValid() &&
            i.isValid() &&
            ((this._rawPxBounds = i), this._updateBounds())
      },
      _updateBounds: function () {
        var i = this._clickTolerance(),
          s = new D(i, i)
        this._rawPxBounds &&
          (this._pxBounds = new Q([
            this._rawPxBounds.min.subtract(s),
            this._rawPxBounds.max.add(s)
          ]))
      },
      _projectLatlngs: function (i, s, l) {
        var f = i[0] instanceof se,
          h = i.length,
          x,
          I
        if (f) {
          for (I = [], x = 0; x < h; x++)
            (I[x] = this._map.latLngToLayerPoint(i[x])), l.extend(I[x])
          s.push(I)
        } else for (x = 0; x < h; x++) this._projectLatlngs(i[x], s, l)
      },
      _clipPoints: function () {
        var i = this._renderer._bounds
        if (
          ((this._parts = []),
          !(!this._pxBounds || !this._pxBounds.intersects(i)))
        ) {
          if (this.options.noClip) {
            this._parts = this._rings
            return
          }
          var s = this._parts,
            l,
            f,
            h,
            x,
            I,
            j,
            B
          for (l = 0, h = 0, x = this._rings.length; l < x; l++)
            for (B = this._rings[l], f = 0, I = B.length; f < I - 1; f++)
              (j = hf(B[f], B[f + 1], i, f, !0)),
                j &&
                  ((s[h] = s[h] || []),
                  s[h].push(j[0]),
                  (j[1] !== B[f + 1] || f === I - 2) && (s[h].push(j[1]), h++))
        }
      },
      _simplifyPoints: function () {
        for (
          var i = this._parts,
            s = this.options.smoothFactor,
            l = 0,
            f = i.length;
          l < f;
          l++
        )
          i[l] = cf(i[l], s)
      },
      _update: function () {
        this._map &&
          (this._clipPoints(), this._simplifyPoints(), this._updatePath())
      },
      _updatePath: function () {
        this._renderer._updatePoly(this)
      },
      _containsPoint: function (i, s) {
        var l,
          f,
          h,
          x,
          I,
          j,
          B = this._clickTolerance()
        if (!this._pxBounds || !this._pxBounds.contains(i)) return !1
        for (l = 0, x = this._parts.length; l < x; l++)
          for (
            j = this._parts[l], f = 0, I = j.length, h = I - 1;
            f < I;
            h = f++
          )
            if (!(!s && f === 0) && df(i, j[h], j[f]) <= B) return !0
        return !1
      }
    })
    function sy(i, s) {
      return new Xt(i, s)
    }
    Xt._flat = pf
    var Ci = Xt.extend({
      options: { fill: !0 },
      isEmpty: function () {
        return !this._latlngs.length || !this._latlngs[0].length
      },
      getCenter: function () {
        if (!this._map)
          throw new Error('Must add layer to map before using getCenter()')
        return uf(this._defaultShape(), this._map.options.crs)
      },
      _convertLatLngs: function (i) {
        var s = Xt.prototype._convertLatLngs.call(this, i),
          l = s.length
        return (
          l >= 2 && s[0] instanceof se && s[0].equals(s[l - 1]) && s.pop(), s
        )
      },
      _setLatLngs: function (i) {
        Xt.prototype._setLatLngs.call(this, i),
          yt(this._latlngs) && (this._latlngs = [this._latlngs])
      },
      _defaultShape: function () {
        return yt(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0]
      },
      _clipPoints: function () {
        var i = this._renderer._bounds,
          s = this.options.weight,
          l = new D(s, s)
        if (
          ((i = new Q(i.min.subtract(l), i.max.add(l))),
          (this._parts = []),
          !(!this._pxBounds || !this._pxBounds.intersects(i)))
        ) {
          if (this.options.noClip) {
            this._parts = this._rings
            return
          }
          for (var f = 0, h = this._rings.length, x; f < h; f++)
            (x = lf(this._rings[f], i, !0)), x.length && this._parts.push(x)
        }
      },
      _updatePath: function () {
        this._renderer._updatePoly(this, !0)
      },
      _containsPoint: function (i) {
        var s = !1,
          l,
          f,
          h,
          x,
          I,
          j,
          B,
          q
        if (!this._pxBounds || !this._pxBounds.contains(i)) return !1
        for (x = 0, B = this._parts.length; x < B; x++)
          for (
            l = this._parts[x], I = 0, q = l.length, j = q - 1;
            I < q;
            j = I++
          )
            (f = l[I]),
              (h = l[j]),
              f.y > i.y != h.y > i.y &&
                i.x < ((h.x - f.x) * (i.y - f.y)) / (h.y - f.y) + f.x &&
                (s = !s)
        return s || Xt.prototype._containsPoint.call(this, i, !0)
      }
    })
    function ay(i, s) {
      return new Ci(i, s)
    }
    var Jt = Yt.extend({
      initialize: function (i, s) {
        E(this, s), (this._layers = {}), i && this.addData(i)
      },
      addData: function (i) {
        var s = _(i) ? i : i.features,
          l,
          f,
          h
        if (s) {
          for (l = 0, f = s.length; l < f; l++)
            (h = s[l]),
              (h.geometries || h.geometry || h.features || h.coordinates) &&
                this.addData(h)
          return this
        }
        var x = this.options
        if (x.filter && !x.filter(i)) return this
        var I = Vo(i, x)
        return I
          ? ((I.feature = Go(i)),
            (I.defaultOptions = I.options),
            this.resetStyle(I),
            x.onEachFeature && x.onEachFeature(i, I),
            this.addLayer(I))
          : this
      },
      resetStyle: function (i) {
        return i === void 0
          ? this.eachLayer(this.resetStyle, this)
          : ((i.options = o({}, i.defaultOptions)),
            this._setLayerStyle(i, this.options.style),
            this)
      },
      setStyle: function (i) {
        return this.eachLayer(function (s) {
          this._setLayerStyle(s, i)
        }, this)
      },
      _setLayerStyle: function (i, s) {
        i.setStyle &&
          (typeof s == 'function' && (s = s(i.feature)), i.setStyle(s))
      }
    })
    function Vo(i, s) {
      var l = i.type === 'Feature' ? i.geometry : i,
        f = l ? l.coordinates : null,
        h = [],
        x = s && s.pointToLayer,
        I = (s && s.coordsToLatLng) || vl,
        j,
        B,
        q,
        G
      if (!f && !l) return null
      switch (l.type) {
        case 'Point':
          return (j = I(f)), _f(x, i, j, s)
        case 'MultiPoint':
          for (q = 0, G = f.length; q < G; q++)
            (j = I(f[q])), h.push(_f(x, i, j, s))
          return new Yt(h)
        case 'LineString':
        case 'MultiLineString':
          return (B = Wo(f, l.type === 'LineString' ? 0 : 1, I)), new Xt(B, s)
        case 'Polygon':
        case 'MultiPolygon':
          return (B = Wo(f, l.type === 'Polygon' ? 1 : 2, I)), new Ci(B, s)
        case 'GeometryCollection':
          for (q = 0, G = l.geometries.length; q < G; q++) {
            var ne = Vo(
              {
                geometry: l.geometries[q],
                type: 'Feature',
                properties: i.properties
              },
              s
            )
            ne && h.push(ne)
          }
          return new Yt(h)
        case 'FeatureCollection':
          for (q = 0, G = l.features.length; q < G; q++) {
            var le = Vo(l.features[q], s)
            le && h.push(le)
          }
          return new Yt(h)
        default:
          throw new Error('Invalid GeoJSON object.')
      }
    }
    function _f(i, s, l, f) {
      return i ? i(s, l) : new Ho(l, f && f.markersInheritOptions && f)
    }
    function vl(i) {
      return new se(i[1], i[0], i[2])
    }
    function Wo(i, s, l) {
      for (var f = [], h = 0, x = i.length, I; h < x; h++)
        (I = s ? Wo(i[h], s - 1, l) : (l || vl)(i[h])), f.push(I)
      return f
    }
    function _l(i, s) {
      return (
        (i = re(i)),
        i.alt !== void 0
          ? [g(i.lng, s), g(i.lat, s), g(i.alt, s)]
          : [g(i.lng, s), g(i.lat, s)]
      )
    }
    function Uo(i, s, l, f) {
      for (var h = [], x = 0, I = i.length; x < I; x++)
        h.push(s ? Uo(i[x], yt(i[x]) ? 0 : s - 1, l, f) : _l(i[x], f))
      return !s && l && h.length > 0 && h.push(h[0].slice()), h
    }
    function Li(i, s) {
      return i.feature ? o({}, i.feature, { geometry: s }) : Go(s)
    }
    function Go(i) {
      return i.type === 'Feature' || i.type === 'FeatureCollection'
        ? i
        : { type: 'Feature', properties: {}, geometry: i }
    }
    var yl = {
      toGeoJSON: function (i) {
        return Li(this, { type: 'Point', coordinates: _l(this.getLatLng(), i) })
      }
    }
    Ho.include(yl),
      gl.include(yl),
      qo.include(yl),
      Xt.include({
        toGeoJSON: function (i) {
          var s = !yt(this._latlngs),
            l = Uo(this._latlngs, s ? 1 : 0, !1, i)
          return Li(this, {
            type: (s ? 'Multi' : '') + 'LineString',
            coordinates: l
          })
        }
      }),
      Ci.include({
        toGeoJSON: function (i) {
          var s = !yt(this._latlngs),
            l = s && !yt(this._latlngs[0]),
            f = Uo(this._latlngs, l ? 2 : s ? 1 : 0, !0, i)
          return (
            s || (f = [f]),
            Li(this, { type: (l ? 'Multi' : '') + 'Polygon', coordinates: f })
          )
        }
      }),
      Ei.include({
        toMultiPoint: function (i) {
          var s = []
          return (
            this.eachLayer(function (l) {
              s.push(l.toGeoJSON(i).geometry.coordinates)
            }),
            Li(this, { type: 'MultiPoint', coordinates: s })
          )
        },
        toGeoJSON: function (i) {
          var s =
            this.feature && this.feature.geometry && this.feature.geometry.type
          if (s === 'MultiPoint') return this.toMultiPoint(i)
          var l = s === 'GeometryCollection',
            f = []
          return (
            this.eachLayer(function (h) {
              if (h.toGeoJSON) {
                var x = h.toGeoJSON(i)
                if (l) f.push(x.geometry)
                else {
                  var I = Go(x)
                  I.type === 'FeatureCollection'
                    ? f.push.apply(f, I.features)
                    : f.push(I)
                }
              }
            }),
            l
              ? Li(this, { geometries: f, type: 'GeometryCollection' })
              : { type: 'FeatureCollection', features: f }
          )
        }
      })
    function yf(i, s) {
      return new Jt(i, s)
    }
    var ly = yf,
      Qo = bt.extend({
        options: {
          opacity: 1,
          alt: '',
          interactive: !1,
          crossOrigin: !1,
          errorOverlayUrl: '',
          zIndex: 1,
          className: ''
        },
        initialize: function (i, s, l) {
          ;(this._url = i), (this._bounds = ie(s)), E(this, l)
        },
        onAdd: function () {
          this._image ||
            (this._initImage(),
            this.options.opacity < 1 && this._updateOpacity()),
            this.options.interactive &&
              (ae(this._image, 'leaflet-interactive'),
              this.addInteractiveTarget(this._image)),
            this.getPane().appendChild(this._image),
            this._reset()
        },
        onRemove: function () {
          Te(this._image),
            this.options.interactive &&
              this.removeInteractiveTarget(this._image)
        },
        setOpacity: function (i) {
          return (
            (this.options.opacity = i),
            this._image && this._updateOpacity(),
            this
          )
        },
        setStyle: function (i) {
          return i.opacity && this.setOpacity(i.opacity), this
        },
        bringToFront: function () {
          return this._map && xi(this._image), this
        },
        bringToBack: function () {
          return this._map && Ti(this._image), this
        },
        setUrl: function (i) {
          return (this._url = i), this._image && (this._image.src = i), this
        },
        setBounds: function (i) {
          return (this._bounds = ie(i)), this._map && this._reset(), this
        },
        getEvents: function () {
          var i = { zoom: this._reset, viewreset: this._reset }
          return this._zoomAnimated && (i.zoomanim = this._animateZoom), i
        },
        setZIndex: function (i) {
          return (this.options.zIndex = i), this._updateZIndex(), this
        },
        getBounds: function () {
          return this._bounds
        },
        getElement: function () {
          return this._image
        },
        _initImage: function () {
          var i = this._url.tagName === 'IMG',
            s = (this._image = i ? this._url : me('img'))
          if (
            (ae(s, 'leaflet-image-layer'),
            this._zoomAnimated && ae(s, 'leaflet-zoom-animated'),
            this.options.className && ae(s, this.options.className),
            (s.onselectstart = y),
            (s.onmousemove = y),
            (s.onload = u(this.fire, this, 'load')),
            (s.onerror = u(this._overlayOnError, this, 'error')),
            (this.options.crossOrigin || this.options.crossOrigin === '') &&
              (s.crossOrigin =
                this.options.crossOrigin === !0
                  ? ''
                  : this.options.crossOrigin),
            this.options.zIndex && this._updateZIndex(),
            i)
          ) {
            this._url = s.src
            return
          }
          ;(s.src = this._url), (s.alt = this.options.alt)
        },
        _animateZoom: function (i) {
          var s = this._map.getZoomScale(i.zoom),
            l = this._map._latLngBoundsToNewLayerBounds(
              this._bounds,
              i.zoom,
              i.center
            ).min
          Gn(this._image, l, s)
        },
        _reset: function () {
          var i = this._image,
            s = new Q(
              this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
              this._map.latLngToLayerPoint(this._bounds.getSouthEast())
            ),
            l = s.getSize()
          be(i, s.min),
            (i.style.width = l.x + 'px'),
            (i.style.height = l.y + 'px')
        },
        _updateOpacity: function () {
          _t(this._image, this.options.opacity)
        },
        _updateZIndex: function () {
          this._image &&
            this.options.zIndex !== void 0 &&
            this.options.zIndex !== null &&
            (this._image.style.zIndex = this.options.zIndex)
        },
        _overlayOnError: function () {
          this.fire('error')
          var i = this.options.errorOverlayUrl
          i && this._url !== i && ((this._url = i), (this._image.src = i))
        },
        getCenter: function () {
          return this._bounds.getCenter()
        }
      }),
      uy = function (i, s, l) {
        return new Qo(i, s, l)
      },
      wf = Qo.extend({
        options: {
          autoplay: !0,
          loop: !0,
          keepAspectRatio: !0,
          muted: !1,
          playsInline: !0
        },
        _initImage: function () {
          var i = this._url.tagName === 'VIDEO',
            s = (this._image = i ? this._url : me('video'))
          if (
            (ae(s, 'leaflet-image-layer'),
            this._zoomAnimated && ae(s, 'leaflet-zoom-animated'),
            this.options.className && ae(s, this.options.className),
            (s.onselectstart = y),
            (s.onmousemove = y),
            (s.onloadeddata = u(this.fire, this, 'load')),
            i)
          ) {
            for (
              var l = s.getElementsByTagName('source'), f = [], h = 0;
              h < l.length;
              h++
            )
              f.push(l[h].src)
            this._url = l.length > 0 ? f : [s.src]
            return
          }
          _(this._url) || (this._url = [this._url]),
            !this.options.keepAspectRatio &&
              Object.prototype.hasOwnProperty.call(s.style, 'objectFit') &&
              (s.style.objectFit = 'fill'),
            (s.autoplay = !!this.options.autoplay),
            (s.loop = !!this.options.loop),
            (s.muted = !!this.options.muted),
            (s.playsInline = !!this.options.playsInline)
          for (var x = 0; x < this._url.length; x++) {
            var I = me('source')
            ;(I.src = this._url[x]), s.appendChild(I)
          }
        }
      })
    function cy(i, s, l) {
      return new wf(i, s, l)
    }
    var Sf = Qo.extend({
      _initImage: function () {
        var i = (this._image = this._url)
        ae(i, 'leaflet-image-layer'),
          this._zoomAnimated && ae(i, 'leaflet-zoom-animated'),
          this.options.className && ae(i, this.options.className),
          (i.onselectstart = y),
          (i.onmousemove = y)
      }
    })
    function dy(i, s, l) {
      return new Sf(i, s, l)
    }
    var Ht = bt.extend({
      options: {
        interactive: !1,
        offset: [0, 0],
        className: '',
        pane: void 0,
        content: ''
      },
      initialize: function (i, s) {
        i && (i instanceof se || _(i))
          ? ((this._latlng = re(i)), E(this, s))
          : (E(this, i), (this._source = s)),
          this.options.content && (this._content = this.options.content)
      },
      openOn: function (i) {
        return (
          (i = arguments.length ? i : this._source._map),
          i.hasLayer(this) || i.addLayer(this),
          this
        )
      },
      close: function () {
        return this._map && this._map.removeLayer(this), this
      },
      toggle: function (i) {
        return (
          this._map
            ? this.close()
            : (arguments.length ? (this._source = i) : (i = this._source),
              this._prepareOpen(),
              this.openOn(i._map)),
          this
        )
      },
      onAdd: function (i) {
        ;(this._zoomAnimated = i._zoomAnimated),
          this._container || this._initLayout(),
          i._fadeAnimated && _t(this._container, 0),
          clearTimeout(this._removeTimeout),
          this.getPane().appendChild(this._container),
          this.update(),
          i._fadeAnimated && _t(this._container, 1),
          this.bringToFront(),
          this.options.interactive &&
            (ae(this._container, 'leaflet-interactive'),
            this.addInteractiveTarget(this._container))
      },
      onRemove: function (i) {
        i._fadeAnimated
          ? (_t(this._container, 0),
            (this._removeTimeout = setTimeout(
              u(Te, void 0, this._container),
              200
            )))
          : Te(this._container),
          this.options.interactive &&
            (ke(this._container, 'leaflet-interactive'),
            this.removeInteractiveTarget(this._container))
      },
      getLatLng: function () {
        return this._latlng
      },
      setLatLng: function (i) {
        return (
          (this._latlng = re(i)),
          this._map && (this._updatePosition(), this._adjustPan()),
          this
        )
      },
      getContent: function () {
        return this._content
      },
      setContent: function (i) {
        return (this._content = i), this.update(), this
      },
      getElement: function () {
        return this._container
      },
      update: function () {
        this._map &&
          ((this._container.style.visibility = 'hidden'),
          this._updateContent(),
          this._updateLayout(),
          this._updatePosition(),
          (this._container.style.visibility = ''),
          this._adjustPan())
      },
      getEvents: function () {
        var i = { zoom: this._updatePosition, viewreset: this._updatePosition }
        return this._zoomAnimated && (i.zoomanim = this._animateZoom), i
      },
      isOpen: function () {
        return !!this._map && this._map.hasLayer(this)
      },
      bringToFront: function () {
        return this._map && xi(this._container), this
      },
      bringToBack: function () {
        return this._map && Ti(this._container), this
      },
      _prepareOpen: function (i) {
        var s = this._source
        if (!s._map) return !1
        if (s instanceof Yt) {
          s = null
          var l = this._source._layers
          for (var f in l)
            if (l[f]._map) {
              s = l[f]
              break
            }
          if (!s) return !1
          this._source = s
        }
        if (!i)
          if (s.getCenter) i = s.getCenter()
          else if (s.getLatLng) i = s.getLatLng()
          else if (s.getBounds) i = s.getBounds().getCenter()
          else throw new Error('Unable to get source layer LatLng.')
        return this.setLatLng(i), this._map && this.update(), !0
      },
      _updateContent: function () {
        if (this._content) {
          var i = this._contentNode,
            s =
              typeof this._content == 'function'
                ? this._content(this._source || this)
                : this._content
          if (typeof s == 'string') i.innerHTML = s
          else {
            for (; i.hasChildNodes(); ) i.removeChild(i.firstChild)
            i.appendChild(s)
          }
          this.fire('contentupdate')
        }
      },
      _updatePosition: function () {
        if (this._map) {
          var i = this._map.latLngToLayerPoint(this._latlng),
            s = $(this.options.offset),
            l = this._getAnchor()
          this._zoomAnimated
            ? be(this._container, i.add(l))
            : (s = s.add(i).add(l))
          var f = (this._containerBottom = -s.y),
            h = (this._containerLeft =
              -Math.round(this._containerWidth / 2) + s.x)
          ;(this._container.style.bottom = f + 'px'),
            (this._container.style.left = h + 'px')
        }
      },
      _getAnchor: function () {
        return [0, 0]
      }
    })
    fe.include({
      _initOverlay: function (i, s, l, f) {
        var h = s
        return (
          h instanceof i || (h = new i(f).setContent(s)), l && h.setLatLng(l), h
        )
      }
    }),
      bt.include({
        _initOverlay: function (i, s, l, f) {
          var h = l
          return (
            h instanceof i
              ? (E(h, f), (h._source = this))
              : ((h = s && !f ? s : new i(f, this)), h.setContent(l)),
            h
          )
        }
      })
    var Ko = Ht.extend({
        options: {
          pane: 'popupPane',
          offset: [0, 7],
          maxWidth: 300,
          minWidth: 50,
          maxHeight: null,
          autoPan: !0,
          autoPanPaddingTopLeft: null,
          autoPanPaddingBottomRight: null,
          autoPanPadding: [5, 5],
          keepInView: !1,
          closeButton: !0,
          autoClose: !0,
          closeOnEscapeKey: !0,
          className: ''
        },
        openOn: function (i) {
          return (
            (i = arguments.length ? i : this._source._map),
            !i.hasLayer(this) &&
              i._popup &&
              i._popup.options.autoClose &&
              i.removeLayer(i._popup),
            (i._popup = this),
            Ht.prototype.openOn.call(this, i)
          )
        },
        onAdd: function (i) {
          Ht.prototype.onAdd.call(this, i),
            i.fire('popupopen', { popup: this }),
            this._source &&
              (this._source.fire('popupopen', { popup: this }, !0),
              this._source instanceof wn || this._source.on('preclick', Kn))
        },
        onRemove: function (i) {
          Ht.prototype.onRemove.call(this, i),
            i.fire('popupclose', { popup: this }),
            this._source &&
              (this._source.fire('popupclose', { popup: this }, !0),
              this._source instanceof wn || this._source.off('preclick', Kn))
        },
        getEvents: function () {
          var i = Ht.prototype.getEvents.call(this)
          return (
            (this.options.closeOnClick !== void 0
              ? this.options.closeOnClick
              : this._map.options.closePopupOnClick) &&
              (i.preclick = this.close),
            this.options.keepInView && (i.moveend = this._adjustPan),
            i
          )
        },
        _initLayout: function () {
          var i = 'leaflet-popup',
            s = (this._container = me(
              'div',
              i +
                ' ' +
                (this.options.className || '') +
                ' leaflet-zoom-animated'
            )),
            l = (this._wrapper = me('div', i + '-content-wrapper', s))
          if (
            ((this._contentNode = me('div', i + '-content', l)),
            _r(s),
            ll(this._contentNode),
            oe(s, 'contextmenu', Kn),
            (this._tipContainer = me('div', i + '-tip-container', s)),
            (this._tip = me('div', i + '-tip', this._tipContainer)),
            this.options.closeButton)
          ) {
            var f = (this._closeButton = me('a', i + '-close-button', s))
            f.setAttribute('role', 'button'),
              f.setAttribute('aria-label', 'Close popup'),
              (f.href = '#close'),
              (f.innerHTML = '<span aria-hidden="true">&#215;</span>'),
              oe(
                f,
                'click',
                function (h) {
                  je(h), this.close()
                },
                this
              )
          }
        },
        _updateLayout: function () {
          var i = this._contentNode,
            s = i.style
          ;(s.width = ''), (s.whiteSpace = 'nowrap')
          var l = i.offsetWidth
          ;(l = Math.min(l, this.options.maxWidth)),
            (l = Math.max(l, this.options.minWidth)),
            (s.width = l + 1 + 'px'),
            (s.whiteSpace = ''),
            (s.height = '')
          var f = i.offsetHeight,
            h = this.options.maxHeight,
            x = 'leaflet-popup-scrolled'
          h && f > h ? ((s.height = h + 'px'), ae(i, x)) : ke(i, x),
            (this._containerWidth = this._container.offsetWidth)
        },
        _animateZoom: function (i) {
          var s = this._map._latLngToNewLayerPoint(
              this._latlng,
              i.zoom,
              i.center
            ),
            l = this._getAnchor()
          be(this._container, s.add(l))
        },
        _adjustPan: function () {
          if (this.options.autoPan) {
            if (
              (this._map._panAnim && this._map._panAnim.stop(),
              this._autopanning)
            ) {
              this._autopanning = !1
              return
            }
            var i = this._map,
              s = parseInt(pr(this._container, 'marginBottom'), 10) || 0,
              l = this._container.offsetHeight + s,
              f = this._containerWidth,
              h = new D(this._containerLeft, -l - this._containerBottom)
            h._add(Qn(this._container))
            var x = i.layerPointToContainerPoint(h),
              I = $(this.options.autoPanPadding),
              j = $(this.options.autoPanPaddingTopLeft || I),
              B = $(this.options.autoPanPaddingBottomRight || I),
              q = i.getSize(),
              G = 0,
              ne = 0
            x.x + f + B.x > q.x && (G = x.x + f - q.x + B.x),
              x.x - G - j.x < 0 && (G = x.x - j.x),
              x.y + l + B.y > q.y && (ne = x.y + l - q.y + B.y),
              x.y - ne - j.y < 0 && (ne = x.y - j.y),
              (G || ne) &&
                (this.options.keepInView && (this._autopanning = !0),
                i.fire('autopanstart').panBy([G, ne]))
          }
        },
        _getAnchor: function () {
          return $(
            this._source && this._source._getPopupAnchor
              ? this._source._getPopupAnchor()
              : [0, 0]
          )
        }
      }),
      fy = function (i, s) {
        return new Ko(i, s)
      }
    fe.mergeOptions({ closePopupOnClick: !0 }),
      fe.include({
        openPopup: function (i, s, l) {
          return this._initOverlay(Ko, i, s, l).openOn(this), this
        },
        closePopup: function (i) {
          return (i = arguments.length ? i : this._popup), i && i.close(), this
        }
      }),
      bt.include({
        bindPopup: function (i, s) {
          return (
            (this._popup = this._initOverlay(Ko, this._popup, i, s)),
            this._popupHandlersAdded ||
              (this.on({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
              }),
              (this._popupHandlersAdded = !0)),
            this
          )
        },
        unbindPopup: function () {
          return (
            this._popup &&
              (this.off({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
              }),
              (this._popupHandlersAdded = !1),
              (this._popup = null)),
            this
          )
        },
        openPopup: function (i) {
          return (
            this._popup &&
              (this instanceof Yt || (this._popup._source = this),
              this._popup._prepareOpen(i || this._latlng) &&
                this._popup.openOn(this._map)),
            this
          )
        },
        closePopup: function () {
          return this._popup && this._popup.close(), this
        },
        togglePopup: function () {
          return this._popup && this._popup.toggle(this), this
        },
        isPopupOpen: function () {
          return this._popup ? this._popup.isOpen() : !1
        },
        setPopupContent: function (i) {
          return this._popup && this._popup.setContent(i), this
        },
        getPopup: function () {
          return this._popup
        },
        _openPopup: function (i) {
          if (!(!this._popup || !this._map)) {
            Yn(i)
            var s = i.layer || i.target
            if (this._popup._source === s && !(s instanceof wn)) {
              this._map.hasLayer(this._popup)
                ? this.closePopup()
                : this.openPopup(i.latlng)
              return
            }
            ;(this._popup._source = s), this.openPopup(i.latlng)
          }
        },
        _movePopup: function (i) {
          this._popup.setLatLng(i.latlng)
        },
        _onKeyPress: function (i) {
          i.originalEvent.keyCode === 13 && this._openPopup(i)
        }
      })
    var Yo = Ht.extend({
        options: {
          pane: 'tooltipPane',
          offset: [0, 0],
          direction: 'auto',
          permanent: !1,
          sticky: !1,
          opacity: 0.9
        },
        onAdd: function (i) {
          Ht.prototype.onAdd.call(this, i),
            this.setOpacity(this.options.opacity),
            i.fire('tooltipopen', { tooltip: this }),
            this._source &&
              (this.addEventParent(this._source),
              this._source.fire('tooltipopen', { tooltip: this }, !0))
        },
        onRemove: function (i) {
          Ht.prototype.onRemove.call(this, i),
            i.fire('tooltipclose', { tooltip: this }),
            this._source &&
              (this.removeEventParent(this._source),
              this._source.fire('tooltipclose', { tooltip: this }, !0))
        },
        getEvents: function () {
          var i = Ht.prototype.getEvents.call(this)
          return this.options.permanent || (i.preclick = this.close), i
        },
        _initLayout: function () {
          var i = 'leaflet-tooltip',
            s =
              i +
              ' ' +
              (this.options.className || '') +
              ' leaflet-zoom-' +
              (this._zoomAnimated ? 'animated' : 'hide')
          ;(this._contentNode = this._container = me('div', s)),
            this._container.setAttribute('role', 'tooltip'),
            this._container.setAttribute('id', 'leaflet-tooltip-' + c(this))
        },
        _updateLayout: function () {},
        _adjustPan: function () {},
        _setPosition: function (i) {
          var s,
            l,
            f = this._map,
            h = this._container,
            x = f.latLngToContainerPoint(f.getCenter()),
            I = f.layerPointToContainerPoint(i),
            j = this.options.direction,
            B = h.offsetWidth,
            q = h.offsetHeight,
            G = $(this.options.offset),
            ne = this._getAnchor()
          j === 'top'
            ? ((s = B / 2), (l = q))
            : j === 'bottom'
            ? ((s = B / 2), (l = 0))
            : j === 'center'
            ? ((s = B / 2), (l = q / 2))
            : j === 'right'
            ? ((s = 0), (l = q / 2))
            : j === 'left'
            ? ((s = B), (l = q / 2))
            : I.x < x.x
            ? ((j = 'right'), (s = 0), (l = q / 2))
            : ((j = 'left'), (s = B + (G.x + ne.x) * 2), (l = q / 2)),
            (i = i.subtract($(s, l, !0)).add(G).add(ne)),
            ke(h, 'leaflet-tooltip-right'),
            ke(h, 'leaflet-tooltip-left'),
            ke(h, 'leaflet-tooltip-top'),
            ke(h, 'leaflet-tooltip-bottom'),
            ae(h, 'leaflet-tooltip-' + j),
            be(h, i)
        },
        _updatePosition: function () {
          var i = this._map.latLngToLayerPoint(this._latlng)
          this._setPosition(i)
        },
        setOpacity: function (i) {
          ;(this.options.opacity = i), this._container && _t(this._container, i)
        },
        _animateZoom: function (i) {
          var s = this._map._latLngToNewLayerPoint(
            this._latlng,
            i.zoom,
            i.center
          )
          this._setPosition(s)
        },
        _getAnchor: function () {
          return $(
            this._source &&
              this._source._getTooltipAnchor &&
              !this.options.sticky
              ? this._source._getTooltipAnchor()
              : [0, 0]
          )
        }
      }),
      hy = function (i, s) {
        return new Yo(i, s)
      }
    fe.include({
      openTooltip: function (i, s, l) {
        return this._initOverlay(Yo, i, s, l).openOn(this), this
      },
      closeTooltip: function (i) {
        return i.close(), this
      }
    }),
      bt.include({
        bindTooltip: function (i, s) {
          return (
            this._tooltip && this.isTooltipOpen() && this.unbindTooltip(),
            (this._tooltip = this._initOverlay(Yo, this._tooltip, i, s)),
            this._initTooltipInteractions(),
            this._tooltip.options.permanent &&
              this._map &&
              this._map.hasLayer(this) &&
              this.openTooltip(),
            this
          )
        },
        unbindTooltip: function () {
          return (
            this._tooltip &&
              (this._initTooltipInteractions(!0),
              this.closeTooltip(),
              (this._tooltip = null)),
            this
          )
        },
        _initTooltipInteractions: function (i) {
          if (!(!i && this._tooltipHandlersAdded)) {
            var s = i ? 'off' : 'on',
              l = { remove: this.closeTooltip, move: this._moveTooltip }
            this._tooltip.options.permanent
              ? (l.add = this._openTooltip)
              : ((l.mouseover = this._openTooltip),
                (l.mouseout = this.closeTooltip),
                (l.click = this._openTooltip),
                this._map
                  ? this._addFocusListeners()
                  : (l.add = this._addFocusListeners)),
              this._tooltip.options.sticky && (l.mousemove = this._moveTooltip),
              this[s](l),
              (this._tooltipHandlersAdded = !i)
          }
        },
        openTooltip: function (i) {
          return (
            this._tooltip &&
              (this instanceof Yt || (this._tooltip._source = this),
              this._tooltip._prepareOpen(i) &&
                (this._tooltip.openOn(this._map),
                this.getElement
                  ? this._setAriaDescribedByOnLayer(this)
                  : this.eachLayer &&
                    this.eachLayer(this._setAriaDescribedByOnLayer, this))),
            this
          )
        },
        closeTooltip: function () {
          if (this._tooltip) return this._tooltip.close()
        },
        toggleTooltip: function () {
          return this._tooltip && this._tooltip.toggle(this), this
        },
        isTooltipOpen: function () {
          return this._tooltip.isOpen()
        },
        setTooltipContent: function (i) {
          return this._tooltip && this._tooltip.setContent(i), this
        },
        getTooltip: function () {
          return this._tooltip
        },
        _addFocusListeners: function () {
          this.getElement
            ? this._addFocusListenersOnLayer(this)
            : this.eachLayer &&
              this.eachLayer(this._addFocusListenersOnLayer, this)
        },
        _addFocusListenersOnLayer: function (i) {
          var s = typeof i.getElement == 'function' && i.getElement()
          s &&
            (oe(
              s,
              'focus',
              function () {
                ;(this._tooltip._source = i), this.openTooltip()
              },
              this
            ),
            oe(s, 'blur', this.closeTooltip, this))
        },
        _setAriaDescribedByOnLayer: function (i) {
          var s = typeof i.getElement == 'function' && i.getElement()
          s && s.setAttribute('aria-describedby', this._tooltip._container.id)
        },
        _openTooltip: function (i) {
          if (!(!this._tooltip || !this._map)) {
            if (
              this._map.dragging &&
              this._map.dragging.moving() &&
              !this._openOnceFlag
            ) {
              this._openOnceFlag = !0
              var s = this
              this._map.once('moveend', function () {
                ;(s._openOnceFlag = !1), s._openTooltip(i)
              })
              return
            }
            ;(this._tooltip._source = i.layer || i.target),
              this.openTooltip(this._tooltip.options.sticky ? i.latlng : void 0)
          }
        },
        _moveTooltip: function (i) {
          var s = i.latlng,
            l,
            f
          this._tooltip.options.sticky &&
            i.originalEvent &&
            ((l = this._map.mouseEventToContainerPoint(i.originalEvent)),
            (f = this._map.containerPointToLayerPoint(l)),
            (s = this._map.layerPointToLatLng(f))),
            this._tooltip.setLatLng(s)
        }
      })
    var xf = Pi.extend({
      options: {
        iconSize: [12, 12],
        html: !1,
        bgPos: null,
        className: 'leaflet-div-icon'
      },
      createIcon: function (i) {
        var s = i && i.tagName === 'DIV' ? i : document.createElement('div'),
          l = this.options
        if (
          (l.html instanceof Element
            ? (Do(s), s.appendChild(l.html))
            : (s.innerHTML = l.html !== !1 ? l.html : ''),
          l.bgPos)
        ) {
          var f = $(l.bgPos)
          s.style.backgroundPosition = -f.x + 'px ' + -f.y + 'px'
        }
        return this._setIconStyles(s, 'icon'), s
      },
      createShadow: function () {
        return null
      }
    })
    function py(i) {
      return new xf(i)
    }
    Pi.Default = Sr
    var xr = bt.extend({
      options: {
        tileSize: 256,
        opacity: 1,
        updateWhenIdle: J.mobile,
        updateWhenZooming: !0,
        updateInterval: 200,
        zIndex: 1,
        bounds: null,
        minZoom: 0,
        maxZoom: void 0,
        maxNativeZoom: void 0,
        minNativeZoom: void 0,
        noWrap: !1,
        pane: 'tilePane',
        className: '',
        keepBuffer: 2
      },
      initialize: function (i) {
        E(this, i)
      },
      onAdd: function () {
        this._initContainer(),
          (this._levels = {}),
          (this._tiles = {}),
          this._resetView()
      },
      beforeAdd: function (i) {
        i._addZoomLimit(this)
      },
      onRemove: function (i) {
        this._removeAllTiles(),
          Te(this._container),
          i._removeZoomLimit(this),
          (this._container = null),
          (this._tileZoom = void 0)
      },
      bringToFront: function () {
        return (
          this._map && (xi(this._container), this._setAutoZIndex(Math.max)),
          this
        )
      },
      bringToBack: function () {
        return (
          this._map && (Ti(this._container), this._setAutoZIndex(Math.min)),
          this
        )
      },
      getContainer: function () {
        return this._container
      },
      setOpacity: function (i) {
        return (this.options.opacity = i), this._updateOpacity(), this
      },
      setZIndex: function (i) {
        return (this.options.zIndex = i), this._updateZIndex(), this
      },
      isLoading: function () {
        return this._loading
      },
      redraw: function () {
        if (this._map) {
          this._removeAllTiles()
          var i = this._clampZoom(this._map.getZoom())
          i !== this._tileZoom && ((this._tileZoom = i), this._updateLevels()),
            this._update()
        }
        return this
      },
      getEvents: function () {
        var i = {
          viewprereset: this._invalidateAll,
          viewreset: this._resetView,
          zoom: this._resetView,
          moveend: this._onMoveEnd
        }
        return (
          this.options.updateWhenIdle ||
            (this._onMove ||
              (this._onMove = p(
                this._onMoveEnd,
                this.options.updateInterval,
                this
              )),
            (i.move = this._onMove)),
          this._zoomAnimated && (i.zoomanim = this._animateZoom),
          i
        )
      },
      createTile: function () {
        return document.createElement('div')
      },
      getTileSize: function () {
        var i = this.options.tileSize
        return i instanceof D ? i : new D(i, i)
      },
      _updateZIndex: function () {
        this._container &&
          this.options.zIndex !== void 0 &&
          this.options.zIndex !== null &&
          (this._container.style.zIndex = this.options.zIndex)
      },
      _setAutoZIndex: function (i) {
        for (
          var s = this.getPane().children,
            l = -i(-1 / 0, 1 / 0),
            f = 0,
            h = s.length,
            x;
          f < h;
          f++
        )
          (x = s[f].style.zIndex),
            s[f] !== this._container && x && (l = i(l, +x))
        isFinite(l) &&
          ((this.options.zIndex = l + i(-1, 1)), this._updateZIndex())
      },
      _updateOpacity: function () {
        if (this._map && !J.ielt9) {
          _t(this._container, this.options.opacity)
          var i = +new Date(),
            s = !1,
            l = !1
          for (var f in this._tiles) {
            var h = this._tiles[f]
            if (!(!h.current || !h.loaded)) {
              var x = Math.min(1, (i - h.loaded) / 200)
              _t(h.el, x),
                x < 1
                  ? (s = !0)
                  : (h.active ? (l = !0) : this._onOpaqueTile(h),
                    (h.active = !0))
            }
          }
          l && !this._noPrune && this._pruneTiles(),
            s &&
              (F(this._fadeFrame),
              (this._fadeFrame = R(this._updateOpacity, this)))
        }
      },
      _onOpaqueTile: y,
      _initContainer: function () {
        this._container ||
          ((this._container = me(
            'div',
            'leaflet-layer ' + (this.options.className || '')
          )),
          this._updateZIndex(),
          this.options.opacity < 1 && this._updateOpacity(),
          this.getPane().appendChild(this._container))
      },
      _updateLevels: function () {
        var i = this._tileZoom,
          s = this.options.maxZoom
        if (i !== void 0) {
          for (var l in this._levels)
            (l = Number(l)),
              this._levels[l].el.children.length || l === i
                ? ((this._levels[l].el.style.zIndex = s - Math.abs(i - l)),
                  this._onUpdateLevel(l))
                : (Te(this._levels[l].el),
                  this._removeTilesAtZoom(l),
                  this._onRemoveLevel(l),
                  delete this._levels[l])
          var f = this._levels[i],
            h = this._map
          return (
            f ||
              ((f = this._levels[i] = {}),
              (f.el = me(
                'div',
                'leaflet-tile-container leaflet-zoom-animated',
                this._container
              )),
              (f.el.style.zIndex = s),
              (f.origin = h
                .project(h.unproject(h.getPixelOrigin()), i)
                .round()),
              (f.zoom = i),
              this._setZoomTransform(f, h.getCenter(), h.getZoom()),
              y(f.el.offsetWidth),
              this._onCreateLevel(f)),
            (this._level = f),
            f
          )
        }
      },
      _onUpdateLevel: y,
      _onRemoveLevel: y,
      _onCreateLevel: y,
      _pruneTiles: function () {
        if (this._map) {
          var i,
            s,
            l = this._map.getZoom()
          if (l > this.options.maxZoom || l < this.options.minZoom) {
            this._removeAllTiles()
            return
          }
          for (i in this._tiles) (s = this._tiles[i]), (s.retain = s.current)
          for (i in this._tiles)
            if (((s = this._tiles[i]), s.current && !s.active)) {
              var f = s.coords
              this._retainParent(f.x, f.y, f.z, f.z - 5) ||
                this._retainChildren(f.x, f.y, f.z, f.z + 2)
            }
          for (i in this._tiles) this._tiles[i].retain || this._removeTile(i)
        }
      },
      _removeTilesAtZoom: function (i) {
        for (var s in this._tiles)
          this._tiles[s].coords.z === i && this._removeTile(s)
      },
      _removeAllTiles: function () {
        for (var i in this._tiles) this._removeTile(i)
      },
      _invalidateAll: function () {
        for (var i in this._levels)
          Te(this._levels[i].el),
            this._onRemoveLevel(Number(i)),
            delete this._levels[i]
        this._removeAllTiles(), (this._tileZoom = void 0)
      },
      _retainParent: function (i, s, l, f) {
        var h = Math.floor(i / 2),
          x = Math.floor(s / 2),
          I = l - 1,
          j = new D(+h, +x)
        j.z = +I
        var B = this._tileCoordsToKey(j),
          q = this._tiles[B]
        return q && q.active
          ? ((q.retain = !0), !0)
          : (q && q.loaded && (q.retain = !0),
            I > f ? this._retainParent(h, x, I, f) : !1)
      },
      _retainChildren: function (i, s, l, f) {
        for (var h = 2 * i; h < 2 * i + 2; h++)
          for (var x = 2 * s; x < 2 * s + 2; x++) {
            var I = new D(h, x)
            I.z = l + 1
            var j = this._tileCoordsToKey(I),
              B = this._tiles[j]
            if (B && B.active) {
              B.retain = !0
              continue
            } else B && B.loaded && (B.retain = !0)
            l + 1 < f && this._retainChildren(h, x, l + 1, f)
          }
      },
      _resetView: function (i) {
        var s = i && (i.pinch || i.flyTo)
        this._setView(this._map.getCenter(), this._map.getZoom(), s, s)
      },
      _animateZoom: function (i) {
        this._setView(i.center, i.zoom, !0, i.noUpdate)
      },
      _clampZoom: function (i) {
        var s = this.options
        return s.minNativeZoom !== void 0 && i < s.minNativeZoom
          ? s.minNativeZoom
          : s.maxNativeZoom !== void 0 && s.maxNativeZoom < i
          ? s.maxNativeZoom
          : i
      },
      _setView: function (i, s, l, f) {
        var h = Math.round(s)
        ;(this.options.maxZoom !== void 0 && h > this.options.maxZoom) ||
        (this.options.minZoom !== void 0 && h < this.options.minZoom)
          ? (h = void 0)
          : (h = this._clampZoom(h))
        var x = this.options.updateWhenZooming && h !== this._tileZoom
        ;(!f || x) &&
          ((this._tileZoom = h),
          this._abortLoading && this._abortLoading(),
          this._updateLevels(),
          this._resetGrid(),
          h !== void 0 && this._update(i),
          l || this._pruneTiles(),
          (this._noPrune = !!l)),
          this._setZoomTransforms(i, s)
      },
      _setZoomTransforms: function (i, s) {
        for (var l in this._levels)
          this._setZoomTransform(this._levels[l], i, s)
      },
      _setZoomTransform: function (i, s, l) {
        var f = this._map.getZoomScale(l, i.zoom),
          h = i.origin
            .multiplyBy(f)
            .subtract(this._map._getNewPixelOrigin(s, l))
            .round()
        J.any3d ? Gn(i.el, h, f) : be(i.el, h)
      },
      _resetGrid: function () {
        var i = this._map,
          s = i.options.crs,
          l = (this._tileSize = this.getTileSize()),
          f = this._tileZoom,
          h = this._map.getPixelWorldBounds(this._tileZoom)
        h && (this._globalTileRange = this._pxBoundsToTileRange(h)),
          (this._wrapX = s.wrapLng &&
            !this.options.noWrap && [
              Math.floor(i.project([0, s.wrapLng[0]], f).x / l.x),
              Math.ceil(i.project([0, s.wrapLng[1]], f).x / l.y)
            ]),
          (this._wrapY = s.wrapLat &&
            !this.options.noWrap && [
              Math.floor(i.project([s.wrapLat[0], 0], f).y / l.x),
              Math.ceil(i.project([s.wrapLat[1], 0], f).y / l.y)
            ])
      },
      _onMoveEnd: function () {
        !this._map || this._map._animatingZoom || this._update()
      },
      _getTiledPixelBounds: function (i) {
        var s = this._map,
          l = s._animatingZoom
            ? Math.max(s._animateToZoom, s.getZoom())
            : s.getZoom(),
          f = s.getZoomScale(l, this._tileZoom),
          h = s.project(i, this._tileZoom).floor(),
          x = s.getSize().divideBy(f * 2)
        return new Q(h.subtract(x), h.add(x))
      },
      _update: function (i) {
        var s = this._map
        if (s) {
          var l = this._clampZoom(s.getZoom())
          if (
            (i === void 0 && (i = s.getCenter()), this._tileZoom !== void 0)
          ) {
            var f = this._getTiledPixelBounds(i),
              h = this._pxBoundsToTileRange(f),
              x = h.getCenter(),
              I = [],
              j = this.options.keepBuffer,
              B = new Q(
                h.getBottomLeft().subtract([j, -j]),
                h.getTopRight().add([j, -j])
              )
            if (
              !(
                isFinite(h.min.x) &&
                isFinite(h.min.y) &&
                isFinite(h.max.x) &&
                isFinite(h.max.y)
              )
            )
              throw new Error('Attempted to load an infinite number of tiles')
            for (var q in this._tiles) {
              var G = this._tiles[q].coords
              ;(G.z !== this._tileZoom || !B.contains(new D(G.x, G.y))) &&
                (this._tiles[q].current = !1)
            }
            if (Math.abs(l - this._tileZoom) > 1) {
              this._setView(i, l)
              return
            }
            for (var ne = h.min.y; ne <= h.max.y; ne++)
              for (var le = h.min.x; le <= h.max.x; le++) {
                var Ge = new D(le, ne)
                if (((Ge.z = this._tileZoom), !!this._isValidTile(Ge))) {
                  var Ae = this._tiles[this._tileCoordsToKey(Ge)]
                  Ae ? (Ae.current = !0) : I.push(Ge)
                }
              }
            if (
              (I.sort(function (tt, Mi) {
                return tt.distanceTo(x) - Mi.distanceTo(x)
              }),
              I.length !== 0)
            ) {
              this._loading || ((this._loading = !0), this.fire('loading'))
              var wt = document.createDocumentFragment()
              for (le = 0; le < I.length; le++) this._addTile(I[le], wt)
              this._level.el.appendChild(wt)
            }
          }
        }
      },
      _isValidTile: function (i) {
        var s = this._map.options.crs
        if (!s.infinite) {
          var l = this._globalTileRange
          if (
            (!s.wrapLng && (i.x < l.min.x || i.x > l.max.x)) ||
            (!s.wrapLat && (i.y < l.min.y || i.y > l.max.y))
          )
            return !1
        }
        if (!this.options.bounds) return !0
        var f = this._tileCoordsToBounds(i)
        return ie(this.options.bounds).overlaps(f)
      },
      _keyToBounds: function (i) {
        return this._tileCoordsToBounds(this._keyToTileCoords(i))
      },
      _tileCoordsToNwSe: function (i) {
        var s = this._map,
          l = this.getTileSize(),
          f = i.scaleBy(l),
          h = f.add(l),
          x = s.unproject(f, i.z),
          I = s.unproject(h, i.z)
        return [x, I]
      },
      _tileCoordsToBounds: function (i) {
        var s = this._tileCoordsToNwSe(i),
          l = new ce(s[0], s[1])
        return this.options.noWrap || (l = this._map.wrapLatLngBounds(l)), l
      },
      _tileCoordsToKey: function (i) {
        return i.x + ':' + i.y + ':' + i.z
      },
      _keyToTileCoords: function (i) {
        var s = i.split(':'),
          l = new D(+s[0], +s[1])
        return (l.z = +s[2]), l
      },
      _removeTile: function (i) {
        var s = this._tiles[i]
        s &&
          (Te(s.el),
          delete this._tiles[i],
          this.fire('tileunload', {
            tile: s.el,
            coords: this._keyToTileCoords(i)
          }))
      },
      _initTile: function (i) {
        ae(i, 'leaflet-tile')
        var s = this.getTileSize()
        ;(i.style.width = s.x + 'px'),
          (i.style.height = s.y + 'px'),
          (i.onselectstart = y),
          (i.onmousemove = y),
          J.ielt9 && this.options.opacity < 1 && _t(i, this.options.opacity)
      },
      _addTile: function (i, s) {
        var l = this._getTilePos(i),
          f = this._tileCoordsToKey(i),
          h = this.createTile(this._wrapCoords(i), u(this._tileReady, this, i))
        this._initTile(h),
          this.createTile.length < 2 && R(u(this._tileReady, this, i, null, h)),
          be(h, l),
          (this._tiles[f] = { el: h, coords: i, current: !0 }),
          s.appendChild(h),
          this.fire('tileloadstart', { tile: h, coords: i })
      },
      _tileReady: function (i, s, l) {
        s && this.fire('tileerror', { error: s, tile: l, coords: i })
        var f = this._tileCoordsToKey(i)
        ;(l = this._tiles[f]),
          l &&
            ((l.loaded = +new Date()),
            this._map._fadeAnimated
              ? (_t(l.el, 0),
                F(this._fadeFrame),
                (this._fadeFrame = R(this._updateOpacity, this)))
              : ((l.active = !0), this._pruneTiles()),
            s ||
              (ae(l.el, 'leaflet-tile-loaded'),
              this.fire('tileload', { tile: l.el, coords: i })),
            this._noTilesToLoad() &&
              ((this._loading = !1),
              this.fire('load'),
              J.ielt9 || !this._map._fadeAnimated
                ? R(this._pruneTiles, this)
                : setTimeout(u(this._pruneTiles, this), 250)))
      },
      _getTilePos: function (i) {
        return i.scaleBy(this.getTileSize()).subtract(this._level.origin)
      },
      _wrapCoords: function (i) {
        var s = new D(
          this._wrapX ? m(i.x, this._wrapX) : i.x,
          this._wrapY ? m(i.y, this._wrapY) : i.y
        )
        return (s.z = i.z), s
      },
      _pxBoundsToTileRange: function (i) {
        var s = this.getTileSize()
        return new Q(
          i.min.unscaleBy(s).floor(),
          i.max.unscaleBy(s).ceil().subtract([1, 1])
        )
      },
      _noTilesToLoad: function () {
        for (var i in this._tiles) if (!this._tiles[i].loaded) return !1
        return !0
      }
    })
    function my(i) {
      return new xr(i)
    }
    var ki = xr.extend({
      options: {
        minZoom: 0,
        maxZoom: 18,
        subdomains: 'abc',
        errorTileUrl: '',
        zoomOffset: 0,
        tms: !1,
        zoomReverse: !1,
        detectRetina: !1,
        crossOrigin: !1,
        referrerPolicy: !1
      },
      initialize: function (i, s) {
        ;(this._url = i),
          (s = E(this, s)),
          s.detectRetina && J.retina && s.maxZoom > 0
            ? ((s.tileSize = Math.floor(s.tileSize / 2)),
              s.zoomReverse
                ? (s.zoomOffset--,
                  (s.minZoom = Math.min(s.maxZoom, s.minZoom + 1)))
                : (s.zoomOffset++,
                  (s.maxZoom = Math.max(s.minZoom, s.maxZoom - 1))),
              (s.minZoom = Math.max(0, s.minZoom)))
            : s.zoomReverse
            ? (s.minZoom = Math.min(s.maxZoom, s.minZoom))
            : (s.maxZoom = Math.max(s.minZoom, s.maxZoom)),
          typeof s.subdomains == 'string' &&
            (s.subdomains = s.subdomains.split('')),
          this.on('tileunload', this._onTileRemove)
      },
      setUrl: function (i, s) {
        return (
          this._url === i && s === void 0 && (s = !0),
          (this._url = i),
          s || this.redraw(),
          this
        )
      },
      createTile: function (i, s) {
        var l = document.createElement('img')
        return (
          oe(l, 'load', u(this._tileOnLoad, this, s, l)),
          oe(l, 'error', u(this._tileOnError, this, s, l)),
          (this.options.crossOrigin || this.options.crossOrigin === '') &&
            (l.crossOrigin =
              this.options.crossOrigin === !0 ? '' : this.options.crossOrigin),
          typeof this.options.referrerPolicy == 'string' &&
            (l.referrerPolicy = this.options.referrerPolicy),
          (l.alt = ''),
          (l.src = this.getTileUrl(i)),
          l
        )
      },
      getTileUrl: function (i) {
        var s = {
          r: J.retina ? '@2x' : '',
          s: this._getSubdomain(i),
          x: i.x,
          y: i.y,
          z: this._getZoomForUrl()
        }
        if (this._map && !this._map.options.crs.infinite) {
          var l = this._globalTileRange.max.y - i.y
          this.options.tms && (s.y = l), (s['-y'] = l)
        }
        return v(this._url, o(s, this.options))
      },
      _tileOnLoad: function (i, s) {
        J.ielt9 ? setTimeout(u(i, this, null, s), 0) : i(null, s)
      },
      _tileOnError: function (i, s, l) {
        var f = this.options.errorTileUrl
        f && s.getAttribute('src') !== f && (s.src = f), i(l, s)
      },
      _onTileRemove: function (i) {
        i.tile.onload = null
      },
      _getZoomForUrl: function () {
        var i = this._tileZoom,
          s = this.options.maxZoom,
          l = this.options.zoomReverse,
          f = this.options.zoomOffset
        return l && (i = s - i), i + f
      },
      _getSubdomain: function (i) {
        var s = Math.abs(i.x + i.y) % this.options.subdomains.length
        return this.options.subdomains[s]
      },
      _abortLoading: function () {
        var i, s
        for (i in this._tiles)
          if (
            this._tiles[i].coords.z !== this._tileZoom &&
            ((s = this._tiles[i].el),
            (s.onload = y),
            (s.onerror = y),
            !s.complete)
          ) {
            s.src = C
            var l = this._tiles[i].coords
            Te(s),
              delete this._tiles[i],
              this.fire('tileabort', { tile: s, coords: l })
          }
      },
      _removeTile: function (i) {
        var s = this._tiles[i]
        if (s)
          return (
            s.el.setAttribute('src', C), xr.prototype._removeTile.call(this, i)
          )
      },
      _tileReady: function (i, s, l) {
        if (!(!this._map || (l && l.getAttribute('src') === C)))
          return xr.prototype._tileReady.call(this, i, s, l)
      }
    })
    function Tf(i, s) {
      return new ki(i, s)
    }
    var Ef = ki.extend({
      defaultWmsParams: {
        service: 'WMS',
        request: 'GetMap',
        layers: '',
        styles: '',
        format: 'image/jpeg',
        transparent: !1,
        version: '1.1.1'
      },
      options: { crs: null, uppercase: !1 },
      initialize: function (i, s) {
        this._url = i
        var l = o({}, this.defaultWmsParams)
        for (var f in s) f in this.options || (l[f] = s[f])
        s = E(this, s)
        var h = s.detectRetina && J.retina ? 2 : 1,
          x = this.getTileSize()
        ;(l.width = x.x * h), (l.height = x.y * h), (this.wmsParams = l)
      },
      onAdd: function (i) {
        ;(this._crs = this.options.crs || i.options.crs),
          (this._wmsVersion = parseFloat(this.wmsParams.version))
        var s = this._wmsVersion >= 1.3 ? 'crs' : 'srs'
        ;(this.wmsParams[s] = this._crs.code), ki.prototype.onAdd.call(this, i)
      },
      getTileUrl: function (i) {
        var s = this._tileCoordsToNwSe(i),
          l = this._crs,
          f = te(l.project(s[0]), l.project(s[1])),
          h = f.min,
          x = f.max,
          I = (
            this._wmsVersion >= 1.3 && this._crs === gf
              ? [h.y, h.x, x.y, x.x]
              : [h.x, h.y, x.x, x.y]
          ).join(','),
          j = ki.prototype.getTileUrl.call(this, i)
        return (
          j +
          k(this.wmsParams, j, this.options.uppercase) +
          (this.options.uppercase ? '&BBOX=' : '&bbox=') +
          I
        )
      },
      setParams: function (i, s) {
        return o(this.wmsParams, i), s || this.redraw(), this
      }
    })
    function gy(i, s) {
      return new Ef(i, s)
    }
    ;(ki.WMS = Ef), (Tf.wms = gy)
    var en = bt.extend({
        options: { padding: 0.1 },
        initialize: function (i) {
          E(this, i), c(this), (this._layers = this._layers || {})
        },
        onAdd: function () {
          this._container ||
            (this._initContainer(),
            ae(this._container, 'leaflet-zoom-animated')),
            this.getPane().appendChild(this._container),
            this._update(),
            this.on('update', this._updatePaths, this)
        },
        onRemove: function () {
          this.off('update', this._updatePaths, this), this._destroyContainer()
        },
        getEvents: function () {
          var i = {
            viewreset: this._reset,
            zoom: this._onZoom,
            moveend: this._update,
            zoomend: this._onZoomEnd
          }
          return this._zoomAnimated && (i.zoomanim = this._onAnimZoom), i
        },
        _onAnimZoom: function (i) {
          this._updateTransform(i.center, i.zoom)
        },
        _onZoom: function () {
          this._updateTransform(this._map.getCenter(), this._map.getZoom())
        },
        _updateTransform: function (i, s) {
          var l = this._map.getZoomScale(s, this._zoom),
            f = this._map.getSize().multiplyBy(0.5 + this.options.padding),
            h = this._map.project(this._center, s),
            x = f
              .multiplyBy(-l)
              .add(h)
              .subtract(this._map._getNewPixelOrigin(i, s))
          J.any3d ? Gn(this._container, x, l) : be(this._container, x)
        },
        _reset: function () {
          this._update(), this._updateTransform(this._center, this._zoom)
          for (var i in this._layers) this._layers[i]._reset()
        },
        _onZoomEnd: function () {
          for (var i in this._layers) this._layers[i]._project()
        },
        _updatePaths: function () {
          for (var i in this._layers) this._layers[i]._update()
        },
        _update: function () {
          var i = this.options.padding,
            s = this._map.getSize(),
            l = this._map.containerPointToLayerPoint(s.multiplyBy(-i)).round()
          ;(this._bounds = new Q(l, l.add(s.multiplyBy(1 + i * 2)).round())),
            (this._center = this._map.getCenter()),
            (this._zoom = this._map.getZoom())
        }
      }),
      Pf = en.extend({
        options: { tolerance: 0 },
        getEvents: function () {
          var i = en.prototype.getEvents.call(this)
          return (i.viewprereset = this._onViewPreReset), i
        },
        _onViewPreReset: function () {
          this._postponeUpdatePaths = !0
        },
        onAdd: function () {
          en.prototype.onAdd.call(this), this._draw()
        },
        _initContainer: function () {
          var i = (this._container = document.createElement('canvas'))
          oe(i, 'mousemove', this._onMouseMove, this),
            oe(
              i,
              'click dblclick mousedown mouseup contextmenu',
              this._onClick,
              this
            ),
            oe(i, 'mouseout', this._handleMouseOut, this),
            (i._leaflet_disable_events = !0),
            (this._ctx = i.getContext('2d'))
        },
        _destroyContainer: function () {
          F(this._redrawRequest),
            delete this._ctx,
            Te(this._container),
            ve(this._container),
            delete this._container
        },
        _updatePaths: function () {
          if (!this._postponeUpdatePaths) {
            var i
            this._redrawBounds = null
            for (var s in this._layers) (i = this._layers[s]), i._update()
            this._redraw()
          }
        },
        _update: function () {
          if (!(this._map._animatingZoom && this._bounds)) {
            en.prototype._update.call(this)
            var i = this._bounds,
              s = this._container,
              l = i.getSize(),
              f = J.retina ? 2 : 1
            be(s, i.min),
              (s.width = f * l.x),
              (s.height = f * l.y),
              (s.style.width = l.x + 'px'),
              (s.style.height = l.y + 'px'),
              J.retina && this._ctx.scale(2, 2),
              this._ctx.translate(-i.min.x, -i.min.y),
              this.fire('update')
          }
        },
        _reset: function () {
          en.prototype._reset.call(this),
            this._postponeUpdatePaths &&
              ((this._postponeUpdatePaths = !1), this._updatePaths())
        },
        _initPath: function (i) {
          this._updateDashArray(i), (this._layers[c(i)] = i)
          var s = (i._order = { layer: i, prev: this._drawLast, next: null })
          this._drawLast && (this._drawLast.next = s),
            (this._drawLast = s),
            (this._drawFirst = this._drawFirst || this._drawLast)
        },
        _addPath: function (i) {
          this._requestRedraw(i)
        },
        _removePath: function (i) {
          var s = i._order,
            l = s.next,
            f = s.prev
          l ? (l.prev = f) : (this._drawLast = f),
            f ? (f.next = l) : (this._drawFirst = l),
            delete i._order,
            delete this._layers[c(i)],
            this._requestRedraw(i)
        },
        _updatePath: function (i) {
          this._extendRedrawBounds(i),
            i._project(),
            i._update(),
            this._requestRedraw(i)
        },
        _updateStyle: function (i) {
          this._updateDashArray(i), this._requestRedraw(i)
        },
        _updateDashArray: function (i) {
          if (typeof i.options.dashArray == 'string') {
            var s = i.options.dashArray.split(/[, ]+/),
              l = [],
              f,
              h
            for (h = 0; h < s.length; h++) {
              if (((f = Number(s[h])), isNaN(f))) return
              l.push(f)
            }
            i.options._dashArray = l
          } else i.options._dashArray = i.options.dashArray
        },
        _requestRedraw: function (i) {
          this._map &&
            (this._extendRedrawBounds(i),
            (this._redrawRequest =
              this._redrawRequest || R(this._redraw, this)))
        },
        _extendRedrawBounds: function (i) {
          if (i._pxBounds) {
            var s = (i.options.weight || 0) + 1
            ;(this._redrawBounds = this._redrawBounds || new Q()),
              this._redrawBounds.extend(i._pxBounds.min.subtract([s, s])),
              this._redrawBounds.extend(i._pxBounds.max.add([s, s]))
          }
        },
        _redraw: function () {
          ;(this._redrawRequest = null),
            this._redrawBounds &&
              (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()),
            this._clear(),
            this._draw(),
            (this._redrawBounds = null)
        },
        _clear: function () {
          var i = this._redrawBounds
          if (i) {
            var s = i.getSize()
            this._ctx.clearRect(i.min.x, i.min.y, s.x, s.y)
          } else
            this._ctx.save(),
              this._ctx.setTransform(1, 0, 0, 1, 0, 0),
              this._ctx.clearRect(
                0,
                0,
                this._container.width,
                this._container.height
              ),
              this._ctx.restore()
        },
        _draw: function () {
          var i,
            s = this._redrawBounds
          if ((this._ctx.save(), s)) {
            var l = s.getSize()
            this._ctx.beginPath(),
              this._ctx.rect(s.min.x, s.min.y, l.x, l.y),
              this._ctx.clip()
          }
          this._drawing = !0
          for (var f = this._drawFirst; f; f = f.next)
            (i = f.layer),
              (!s || (i._pxBounds && i._pxBounds.intersects(s))) &&
                i._updatePath()
          ;(this._drawing = !1), this._ctx.restore()
        },
        _updatePoly: function (i, s) {
          if (this._drawing) {
            var l,
              f,
              h,
              x,
              I = i._parts,
              j = I.length,
              B = this._ctx
            if (j) {
              for (B.beginPath(), l = 0; l < j; l++) {
                for (f = 0, h = I[l].length; f < h; f++)
                  (x = I[l][f]), B[f ? 'lineTo' : 'moveTo'](x.x, x.y)
                s && B.closePath()
              }
              this._fillStroke(B, i)
            }
          }
        },
        _updateCircle: function (i) {
          if (!(!this._drawing || i._empty())) {
            var s = i._point,
              l = this._ctx,
              f = Math.max(Math.round(i._radius), 1),
              h = (Math.max(Math.round(i._radiusY), 1) || f) / f
            h !== 1 && (l.save(), l.scale(1, h)),
              l.beginPath(),
              l.arc(s.x, s.y / h, f, 0, Math.PI * 2, !1),
              h !== 1 && l.restore(),
              this._fillStroke(l, i)
          }
        },
        _fillStroke: function (i, s) {
          var l = s.options
          l.fill &&
            ((i.globalAlpha = l.fillOpacity),
            (i.fillStyle = l.fillColor || l.color),
            i.fill(l.fillRule || 'evenodd')),
            l.stroke &&
              l.weight !== 0 &&
              (i.setLineDash &&
                i.setLineDash((s.options && s.options._dashArray) || []),
              (i.globalAlpha = l.opacity),
              (i.lineWidth = l.weight),
              (i.strokeStyle = l.color),
              (i.lineCap = l.lineCap),
              (i.lineJoin = l.lineJoin),
              i.stroke())
        },
        _onClick: function (i) {
          for (
            var s = this._map.mouseEventToLayerPoint(i),
              l,
              f,
              h = this._drawFirst;
            h;
            h = h.next
          )
            (l = h.layer),
              l.options.interactive &&
                l._containsPoint(s) &&
                (!(i.type === 'click' || i.type === 'preclick') ||
                  !this._map._draggableMoved(l)) &&
                (f = l)
          this._fireEvent(f ? [f] : !1, i)
        },
        _onMouseMove: function (i) {
          if (
            !(
              !this._map ||
              this._map.dragging.moving() ||
              this._map._animatingZoom
            )
          ) {
            var s = this._map.mouseEventToLayerPoint(i)
            this._handleMouseHover(i, s)
          }
        },
        _handleMouseOut: function (i) {
          var s = this._hoveredLayer
          s &&
            (ke(this._container, 'leaflet-interactive'),
            this._fireEvent([s], i, 'mouseout'),
            (this._hoveredLayer = null),
            (this._mouseHoverThrottled = !1))
        },
        _handleMouseHover: function (i, s) {
          if (!this._mouseHoverThrottled) {
            for (var l, f, h = this._drawFirst; h; h = h.next)
              (l = h.layer),
                l.options.interactive && l._containsPoint(s) && (f = l)
            f !== this._hoveredLayer &&
              (this._handleMouseOut(i),
              f &&
                (ae(this._container, 'leaflet-interactive'),
                this._fireEvent([f], i, 'mouseover'),
                (this._hoveredLayer = f))),
              this._fireEvent(
                this._hoveredLayer ? [this._hoveredLayer] : !1,
                i
              ),
              (this._mouseHoverThrottled = !0),
              setTimeout(
                u(function () {
                  this._mouseHoverThrottled = !1
                }, this),
                32
              )
          }
        },
        _fireEvent: function (i, s, l) {
          this._map._fireDOMEvent(s, l || s.type, i)
        },
        _bringToFront: function (i) {
          var s = i._order
          if (s) {
            var l = s.next,
              f = s.prev
            if (l) l.prev = f
            else return
            f ? (f.next = l) : l && (this._drawFirst = l),
              (s.prev = this._drawLast),
              (this._drawLast.next = s),
              (s.next = null),
              (this._drawLast = s),
              this._requestRedraw(i)
          }
        },
        _bringToBack: function (i) {
          var s = i._order
          if (s) {
            var l = s.next,
              f = s.prev
            if (f) f.next = l
            else return
            l ? (l.prev = f) : f && (this._drawLast = f),
              (s.prev = null),
              (s.next = this._drawFirst),
              (this._drawFirst.prev = s),
              (this._drawFirst = s),
              this._requestRedraw(i)
          }
        }
      })
    function Cf(i) {
      return J.canvas ? new Pf(i) : null
    }
    var Tr = (function () {
        try {
          return (
            document.namespaces.add('lvml', 'urn:schemas-microsoft-com:vml'),
            function (i) {
              return document.createElement('<lvml:' + i + ' class="lvml">')
            }
          )
        } catch {}
        return function (i) {
          return document.createElement(
            '<' + i + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">'
          )
        }
      })(),
      vy = {
        _initContainer: function () {
          this._container = me('div', 'leaflet-vml-container')
        },
        _update: function () {
          this._map._animatingZoom ||
            (en.prototype._update.call(this), this.fire('update'))
        },
        _initPath: function (i) {
          var s = (i._container = Tr('shape'))
          ae(s, 'leaflet-vml-shape ' + (this.options.className || '')),
            (s.coordsize = '1 1'),
            (i._path = Tr('path')),
            s.appendChild(i._path),
            this._updateStyle(i),
            (this._layers[c(i)] = i)
        },
        _addPath: function (i) {
          var s = i._container
          this._container.appendChild(s),
            i.options.interactive && i.addInteractiveTarget(s)
        },
        _removePath: function (i) {
          var s = i._container
          Te(s), i.removeInteractiveTarget(s), delete this._layers[c(i)]
        },
        _updateStyle: function (i) {
          var s = i._stroke,
            l = i._fill,
            f = i.options,
            h = i._container
          ;(h.stroked = !!f.stroke),
            (h.filled = !!f.fill),
            f.stroke
              ? (s || (s = i._stroke = Tr('stroke')),
                h.appendChild(s),
                (s.weight = f.weight + 'px'),
                (s.color = f.color),
                (s.opacity = f.opacity),
                f.dashArray
                  ? (s.dashStyle = _(f.dashArray)
                      ? f.dashArray.join(' ')
                      : f.dashArray.replace(/( *, *)/g, ' '))
                  : (s.dashStyle = ''),
                (s.endcap = f.lineCap.replace('butt', 'flat')),
                (s.joinstyle = f.lineJoin))
              : s && (h.removeChild(s), (i._stroke = null)),
            f.fill
              ? (l || (l = i._fill = Tr('fill')),
                h.appendChild(l),
                (l.color = f.fillColor || f.color),
                (l.opacity = f.fillOpacity))
              : l && (h.removeChild(l), (i._fill = null))
        },
        _updateCircle: function (i) {
          var s = i._point.round(),
            l = Math.round(i._radius),
            f = Math.round(i._radiusY || l)
          this._setPath(
            i,
            i._empty()
              ? 'M0 0'
              : 'AL ' +
                  s.x +
                  ',' +
                  s.y +
                  ' ' +
                  l +
                  ',' +
                  f +
                  ' 0,' +
                  65535 * 360
          )
        },
        _setPath: function (i, s) {
          i._path.v = s
        },
        _bringToFront: function (i) {
          xi(i._container)
        },
        _bringToBack: function (i) {
          Ti(i._container)
        }
      },
      Xo = J.vml ? Tr : Md,
      Er = en.extend({
        _initContainer: function () {
          ;(this._container = Xo('svg')),
            this._container.setAttribute('pointer-events', 'none'),
            (this._rootGroup = Xo('g')),
            this._container.appendChild(this._rootGroup)
        },
        _destroyContainer: function () {
          Te(this._container),
            ve(this._container),
            delete this._container,
            delete this._rootGroup,
            delete this._svgSize
        },
        _update: function () {
          if (!(this._map._animatingZoom && this._bounds)) {
            en.prototype._update.call(this)
            var i = this._bounds,
              s = i.getSize(),
              l = this._container
            ;(!this._svgSize || !this._svgSize.equals(s)) &&
              ((this._svgSize = s),
              l.setAttribute('width', s.x),
              l.setAttribute('height', s.y)),
              be(l, i.min),
              l.setAttribute('viewBox', [i.min.x, i.min.y, s.x, s.y].join(' ')),
              this.fire('update')
          }
        },
        _initPath: function (i) {
          var s = (i._path = Xo('path'))
          i.options.className && ae(s, i.options.className),
            i.options.interactive && ae(s, 'leaflet-interactive'),
            this._updateStyle(i),
            (this._layers[c(i)] = i)
        },
        _addPath: function (i) {
          this._rootGroup || this._initContainer(),
            this._rootGroup.appendChild(i._path),
            i.addInteractiveTarget(i._path)
        },
        _removePath: function (i) {
          Te(i._path),
            i.removeInteractiveTarget(i._path),
            delete this._layers[c(i)]
        },
        _updatePath: function (i) {
          i._project(), i._update()
        },
        _updateStyle: function (i) {
          var s = i._path,
            l = i.options
          s &&
            (l.stroke
              ? (s.setAttribute('stroke', l.color),
                s.setAttribute('stroke-opacity', l.opacity),
                s.setAttribute('stroke-width', l.weight),
                s.setAttribute('stroke-linecap', l.lineCap),
                s.setAttribute('stroke-linejoin', l.lineJoin),
                l.dashArray
                  ? s.setAttribute('stroke-dasharray', l.dashArray)
                  : s.removeAttribute('stroke-dasharray'),
                l.dashOffset
                  ? s.setAttribute('stroke-dashoffset', l.dashOffset)
                  : s.removeAttribute('stroke-dashoffset'))
              : s.setAttribute('stroke', 'none'),
            l.fill
              ? (s.setAttribute('fill', l.fillColor || l.color),
                s.setAttribute('fill-opacity', l.fillOpacity),
                s.setAttribute('fill-rule', l.fillRule || 'evenodd'))
              : s.setAttribute('fill', 'none'))
        },
        _updatePoly: function (i, s) {
          this._setPath(i, bd(i._parts, s))
        },
        _updateCircle: function (i) {
          var s = i._point,
            l = Math.max(Math.round(i._radius), 1),
            f = Math.max(Math.round(i._radiusY), 1) || l,
            h = 'a' + l + ',' + f + ' 0 1,0 ',
            x = i._empty()
              ? 'M0 0'
              : 'M' +
                (s.x - l) +
                ',' +
                s.y +
                h +
                l * 2 +
                ',0 ' +
                h +
                -l * 2 +
                ',0 '
          this._setPath(i, x)
        },
        _setPath: function (i, s) {
          i._path.setAttribute('d', s)
        },
        _bringToFront: function (i) {
          xi(i._path)
        },
        _bringToBack: function (i) {
          Ti(i._path)
        }
      })
    J.vml && Er.include(vy)
    function Lf(i) {
      return J.svg || J.vml ? new Er(i) : null
    }
    fe.include({
      getRenderer: function (i) {
        var s =
          i.options.renderer ||
          this._getPaneRenderer(i.options.pane) ||
          this.options.renderer ||
          this._renderer
        return (
          s || (s = this._renderer = this._createRenderer()),
          this.hasLayer(s) || this.addLayer(s),
          s
        )
      },
      _getPaneRenderer: function (i) {
        if (i === 'overlayPane' || i === void 0) return !1
        var s = this._paneRenderers[i]
        return (
          s === void 0 &&
            ((s = this._createRenderer({ pane: i })),
            (this._paneRenderers[i] = s)),
          s
        )
      },
      _createRenderer: function (i) {
        return (this.options.preferCanvas && Cf(i)) || Lf(i)
      }
    })
    var kf = Ci.extend({
      initialize: function (i, s) {
        Ci.prototype.initialize.call(this, this._boundsToLatLngs(i), s)
      },
      setBounds: function (i) {
        return this.setLatLngs(this._boundsToLatLngs(i))
      },
      _boundsToLatLngs: function (i) {
        return (
          (i = ie(i)),
          [
            i.getSouthWest(),
            i.getNorthWest(),
            i.getNorthEast(),
            i.getSouthEast()
          ]
        )
      }
    })
    function _y(i, s) {
      return new kf(i, s)
    }
    ;(Er.create = Xo),
      (Er.pointsToPath = bd),
      (Jt.geometryToLayer = Vo),
      (Jt.coordsToLatLng = vl),
      (Jt.coordsToLatLngs = Wo),
      (Jt.latLngToCoords = _l),
      (Jt.latLngsToCoords = Uo),
      (Jt.getFeature = Li),
      (Jt.asFeature = Go),
      fe.mergeOptions({ boxZoom: !0 })
    var Mf = Zt.extend({
      initialize: function (i) {
        ;(this._map = i),
          (this._container = i._container),
          (this._pane = i._panes.overlayPane),
          (this._resetStateTimeout = 0),
          i.on('unload', this._destroy, this)
      },
      addHooks: function () {
        oe(this._container, 'mousedown', this._onMouseDown, this)
      },
      removeHooks: function () {
        ve(this._container, 'mousedown', this._onMouseDown, this)
      },
      moved: function () {
        return this._moved
      },
      _destroy: function () {
        Te(this._pane), delete this._pane
      },
      _resetState: function () {
        ;(this._resetStateTimeout = 0), (this._moved = !1)
      },
      _clearDeferredResetState: function () {
        this._resetStateTimeout !== 0 &&
          (clearTimeout(this._resetStateTimeout), (this._resetStateTimeout = 0))
      },
      _onMouseDown: function (i) {
        if (!i.shiftKey || (i.which !== 1 && i.button !== 1)) return !1
        this._clearDeferredResetState(),
          this._resetState(),
          mr(),
          el(),
          (this._startPoint = this._map.mouseEventToContainerPoint(i)),
          oe(
            document,
            {
              contextmenu: Yn,
              mousemove: this._onMouseMove,
              mouseup: this._onMouseUp,
              keydown: this._onKeyDown
            },
            this
          )
      },
      _onMouseMove: function (i) {
        this._moved ||
          ((this._moved = !0),
          (this._box = me('div', 'leaflet-zoom-box', this._container)),
          ae(this._container, 'leaflet-crosshair'),
          this._map.fire('boxzoomstart')),
          (this._point = this._map.mouseEventToContainerPoint(i))
        var s = new Q(this._point, this._startPoint),
          l = s.getSize()
        be(this._box, s.min),
          (this._box.style.width = l.x + 'px'),
          (this._box.style.height = l.y + 'px')
      },
      _finish: function () {
        this._moved &&
          (Te(this._box), ke(this._container, 'leaflet-crosshair')),
          gr(),
          tl(),
          ve(
            document,
            {
              contextmenu: Yn,
              mousemove: this._onMouseMove,
              mouseup: this._onMouseUp,
              keydown: this._onKeyDown
            },
            this
          )
      },
      _onMouseUp: function (i) {
        if (
          !(i.which !== 1 && i.button !== 1) &&
          (this._finish(), !!this._moved)
        ) {
          this._clearDeferredResetState(),
            (this._resetStateTimeout = setTimeout(u(this._resetState, this), 0))
          var s = new ce(
            this._map.containerPointToLatLng(this._startPoint),
            this._map.containerPointToLatLng(this._point)
          )
          this._map.fitBounds(s).fire('boxzoomend', { boxZoomBounds: s })
        }
      },
      _onKeyDown: function (i) {
        i.keyCode === 27 &&
          (this._finish(), this._clearDeferredResetState(), this._resetState())
      }
    })
    fe.addInitHook('addHandler', 'boxZoom', Mf),
      fe.mergeOptions({ doubleClickZoom: !0 })
    var bf = Zt.extend({
      addHooks: function () {
        this._map.on('dblclick', this._onDoubleClick, this)
      },
      removeHooks: function () {
        this._map.off('dblclick', this._onDoubleClick, this)
      },
      _onDoubleClick: function (i) {
        var s = this._map,
          l = s.getZoom(),
          f = s.options.zoomDelta,
          h = i.originalEvent.shiftKey ? l - f : l + f
        s.options.doubleClickZoom === 'center'
          ? s.setZoom(h)
          : s.setZoomAround(i.containerPoint, h)
      }
    })
    fe.addInitHook('addHandler', 'doubleClickZoom', bf),
      fe.mergeOptions({
        dragging: !0,
        inertia: !0,
        inertiaDeceleration: 3400,
        inertiaMaxSpeed: 1 / 0,
        easeLinearity: 0.2,
        worldCopyJump: !1,
        maxBoundsViscosity: 0
      })
    var Of = Zt.extend({
      addHooks: function () {
        if (!this._draggable) {
          var i = this._map
          ;(this._draggable = new yn(i._mapPane, i._container)),
            this._draggable.on(
              {
                dragstart: this._onDragStart,
                drag: this._onDrag,
                dragend: this._onDragEnd
              },
              this
            ),
            this._draggable.on('predrag', this._onPreDragLimit, this),
            i.options.worldCopyJump &&
              (this._draggable.on('predrag', this._onPreDragWrap, this),
              i.on('zoomend', this._onZoomEnd, this),
              i.whenReady(this._onZoomEnd, this))
        }
        ae(this._map._container, 'leaflet-grab leaflet-touch-drag'),
          this._draggable.enable(),
          (this._positions = []),
          (this._times = [])
      },
      removeHooks: function () {
        ke(this._map._container, 'leaflet-grab'),
          ke(this._map._container, 'leaflet-touch-drag'),
          this._draggable.disable()
      },
      moved: function () {
        return this._draggable && this._draggable._moved
      },
      moving: function () {
        return this._draggable && this._draggable._moving
      },
      _onDragStart: function () {
        var i = this._map
        if (
          (i._stop(),
          this._map.options.maxBounds && this._map.options.maxBoundsViscosity)
        ) {
          var s = ie(this._map.options.maxBounds)
          ;(this._offsetLimit = te(
            this._map.latLngToContainerPoint(s.getNorthWest()).multiplyBy(-1),
            this._map
              .latLngToContainerPoint(s.getSouthEast())
              .multiplyBy(-1)
              .add(this._map.getSize())
          )),
            (this._viscosity = Math.min(
              1,
              Math.max(0, this._map.options.maxBoundsViscosity)
            ))
        } else this._offsetLimit = null
        i.fire('movestart').fire('dragstart'),
          i.options.inertia && ((this._positions = []), (this._times = []))
      },
      _onDrag: function (i) {
        if (this._map.options.inertia) {
          var s = (this._lastTime = +new Date()),
            l = (this._lastPos =
              this._draggable._absPos || this._draggable._newPos)
          this._positions.push(l), this._times.push(s), this._prunePositions(s)
        }
        this._map.fire('move', i).fire('drag', i)
      },
      _prunePositions: function (i) {
        for (; this._positions.length > 1 && i - this._times[0] > 50; )
          this._positions.shift(), this._times.shift()
      },
      _onZoomEnd: function () {
        var i = this._map.getSize().divideBy(2),
          s = this._map.latLngToLayerPoint([0, 0])
        ;(this._initialWorldOffset = s.subtract(i).x),
          (this._worldWidth = this._map.getPixelWorldBounds().getSize().x)
      },
      _viscousLimit: function (i, s) {
        return i - (i - s) * this._viscosity
      },
      _onPreDragLimit: function () {
        if (!(!this._viscosity || !this._offsetLimit)) {
          var i = this._draggable._newPos.subtract(this._draggable._startPos),
            s = this._offsetLimit
          i.x < s.min.x && (i.x = this._viscousLimit(i.x, s.min.x)),
            i.y < s.min.y && (i.y = this._viscousLimit(i.y, s.min.y)),
            i.x > s.max.x && (i.x = this._viscousLimit(i.x, s.max.x)),
            i.y > s.max.y && (i.y = this._viscousLimit(i.y, s.max.y)),
            (this._draggable._newPos = this._draggable._startPos.add(i))
        }
      },
      _onPreDragWrap: function () {
        var i = this._worldWidth,
          s = Math.round(i / 2),
          l = this._initialWorldOffset,
          f = this._draggable._newPos.x,
          h = ((f - s + l) % i) + s - l,
          x = ((f + s + l) % i) - s - l,
          I = Math.abs(h + l) < Math.abs(x + l) ? h : x
        ;(this._draggable._absPos = this._draggable._newPos.clone()),
          (this._draggable._newPos.x = I)
      },
      _onDragEnd: function (i) {
        var s = this._map,
          l = s.options,
          f = !l.inertia || i.noInertia || this._times.length < 2
        if ((s.fire('dragend', i), f)) s.fire('moveend')
        else {
          this._prunePositions(+new Date())
          var h = this._lastPos.subtract(this._positions[0]),
            x = (this._lastTime - this._times[0]) / 1e3,
            I = l.easeLinearity,
            j = h.multiplyBy(I / x),
            B = j.distanceTo([0, 0]),
            q = Math.min(l.inertiaMaxSpeed, B),
            G = j.multiplyBy(q / B),
            ne = q / (l.inertiaDeceleration * I),
            le = G.multiplyBy(-ne / 2).round()
          !le.x && !le.y
            ? s.fire('moveend')
            : ((le = s._limitOffset(le, s.options.maxBounds)),
              R(function () {
                s.panBy(le, {
                  duration: ne,
                  easeLinearity: I,
                  noMoveStart: !0,
                  animate: !0
                })
              }))
        }
      }
    })
    fe.addInitHook('addHandler', 'dragging', Of),
      fe.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 })
    var If = Zt.extend({
      keyCodes: {
        left: [37],
        right: [39],
        down: [40],
        up: [38],
        zoomIn: [187, 107, 61, 171],
        zoomOut: [189, 109, 54, 173]
      },
      initialize: function (i) {
        ;(this._map = i),
          this._setPanDelta(i.options.keyboardPanDelta),
          this._setZoomDelta(i.options.zoomDelta)
      },
      addHooks: function () {
        var i = this._map._container
        i.tabIndex <= 0 && (i.tabIndex = '0'),
          oe(
            i,
            {
              focus: this._onFocus,
              blur: this._onBlur,
              mousedown: this._onMouseDown
            },
            this
          ),
          this._map.on({ focus: this._addHooks, blur: this._removeHooks }, this)
      },
      removeHooks: function () {
        this._removeHooks(),
          ve(
            this._map._container,
            {
              focus: this._onFocus,
              blur: this._onBlur,
              mousedown: this._onMouseDown
            },
            this
          ),
          this._map.off(
            { focus: this._addHooks, blur: this._removeHooks },
            this
          )
      },
      _onMouseDown: function () {
        if (!this._focused) {
          var i = document.body,
            s = document.documentElement,
            l = i.scrollTop || s.scrollTop,
            f = i.scrollLeft || s.scrollLeft
          this._map._container.focus(), window.scrollTo(f, l)
        }
      },
      _onFocus: function () {
        ;(this._focused = !0), this._map.fire('focus')
      },
      _onBlur: function () {
        ;(this._focused = !1), this._map.fire('blur')
      },
      _setPanDelta: function (i) {
        var s = (this._panKeys = {}),
          l = this.keyCodes,
          f,
          h
        for (f = 0, h = l.left.length; f < h; f++) s[l.left[f]] = [-1 * i, 0]
        for (f = 0, h = l.right.length; f < h; f++) s[l.right[f]] = [i, 0]
        for (f = 0, h = l.down.length; f < h; f++) s[l.down[f]] = [0, i]
        for (f = 0, h = l.up.length; f < h; f++) s[l.up[f]] = [0, -1 * i]
      },
      _setZoomDelta: function (i) {
        var s = (this._zoomKeys = {}),
          l = this.keyCodes,
          f,
          h
        for (f = 0, h = l.zoomIn.length; f < h; f++) s[l.zoomIn[f]] = i
        for (f = 0, h = l.zoomOut.length; f < h; f++) s[l.zoomOut[f]] = -i
      },
      _addHooks: function () {
        oe(document, 'keydown', this._onKeyDown, this)
      },
      _removeHooks: function () {
        ve(document, 'keydown', this._onKeyDown, this)
      },
      _onKeyDown: function (i) {
        if (!(i.altKey || i.ctrlKey || i.metaKey)) {
          var s = i.keyCode,
            l = this._map,
            f
          if (s in this._panKeys) {
            if (!l._panAnim || !l._panAnim._inProgress)
              if (
                ((f = this._panKeys[s]),
                i.shiftKey && (f = $(f).multiplyBy(3)),
                l.options.maxBounds &&
                  (f = l._limitOffset($(f), l.options.maxBounds)),
                l.options.worldCopyJump)
              ) {
                var h = l.wrapLatLng(
                  l.unproject(l.project(l.getCenter()).add(f))
                )
                l.panTo(h)
              } else l.panBy(f)
          } else if (s in this._zoomKeys)
            l.setZoom(l.getZoom() + (i.shiftKey ? 3 : 1) * this._zoomKeys[s])
          else if (s === 27 && l._popup && l._popup.options.closeOnEscapeKey)
            l.closePopup()
          else return
          Yn(i)
        }
      }
    })
    fe.addInitHook('addHandler', 'keyboard', If),
      fe.mergeOptions({
        scrollWheelZoom: !0,
        wheelDebounceTime: 40,
        wheelPxPerZoomLevel: 60
      })
    var zf = Zt.extend({
      addHooks: function () {
        oe(this._map._container, 'wheel', this._onWheelScroll, this),
          (this._delta = 0)
      },
      removeHooks: function () {
        ve(this._map._container, 'wheel', this._onWheelScroll, this)
      },
      _onWheelScroll: function (i) {
        var s = nf(i),
          l = this._map.options.wheelDebounceTime
        ;(this._delta += s),
          (this._lastMousePos = this._map.mouseEventToContainerPoint(i)),
          this._startTime || (this._startTime = +new Date())
        var f = Math.max(l - (+new Date() - this._startTime), 0)
        clearTimeout(this._timer),
          (this._timer = setTimeout(u(this._performZoom, this), f)),
          Yn(i)
      },
      _performZoom: function () {
        var i = this._map,
          s = i.getZoom(),
          l = this._map.options.zoomSnap || 0
        i._stop()
        var f = this._delta / (this._map.options.wheelPxPerZoomLevel * 4),
          h = (4 * Math.log(2 / (1 + Math.exp(-Math.abs(f))))) / Math.LN2,
          x = l ? Math.ceil(h / l) * l : h,
          I = i._limitZoom(s + (this._delta > 0 ? x : -x)) - s
        ;(this._delta = 0),
          (this._startTime = null),
          I &&
            (i.options.scrollWheelZoom === 'center'
              ? i.setZoom(s + I)
              : i.setZoomAround(this._lastMousePos, s + I))
      }
    })
    fe.addInitHook('addHandler', 'scrollWheelZoom', zf)
    var yy = 600
    fe.mergeOptions({
      tapHold: J.touchNative && J.safari && J.mobile,
      tapTolerance: 15
    })
    var Nf = Zt.extend({
      addHooks: function () {
        oe(this._map._container, 'touchstart', this._onDown, this)
      },
      removeHooks: function () {
        ve(this._map._container, 'touchstart', this._onDown, this)
      },
      _onDown: function (i) {
        if ((clearTimeout(this._holdTimeout), i.touches.length === 1)) {
          var s = i.touches[0]
          ;(this._startPos = this._newPos = new D(s.clientX, s.clientY)),
            (this._holdTimeout = setTimeout(
              u(function () {
                this._cancel(),
                  this._isTapValid() &&
                    (oe(document, 'touchend', je),
                    oe(
                      document,
                      'touchend touchcancel',
                      this._cancelClickPrevent
                    ),
                    this._simulateEvent('contextmenu', s))
              }, this),
              yy
            )),
            oe(
              document,
              'touchend touchcancel contextmenu',
              this._cancel,
              this
            ),
            oe(document, 'touchmove', this._onMove, this)
        }
      },
      _cancelClickPrevent: function i() {
        ve(document, 'touchend', je), ve(document, 'touchend touchcancel', i)
      },
      _cancel: function () {
        clearTimeout(this._holdTimeout),
          ve(document, 'touchend touchcancel contextmenu', this._cancel, this),
          ve(document, 'touchmove', this._onMove, this)
      },
      _onMove: function (i) {
        var s = i.touches[0]
        this._newPos = new D(s.clientX, s.clientY)
      },
      _isTapValid: function () {
        return (
          this._newPos.distanceTo(this._startPos) <=
          this._map.options.tapTolerance
        )
      },
      _simulateEvent: function (i, s) {
        var l = new MouseEvent(i, {
          bubbles: !0,
          cancelable: !0,
          view: window,
          screenX: s.screenX,
          screenY: s.screenY,
          clientX: s.clientX,
          clientY: s.clientY
        })
        ;(l._simulated = !0), s.target.dispatchEvent(l)
      }
    })
    fe.addInitHook('addHandler', 'tapHold', Nf),
      fe.mergeOptions({ touchZoom: J.touch, bounceAtZoomLimits: !0 })
    var Af = Zt.extend({
      addHooks: function () {
        ae(this._map._container, 'leaflet-touch-zoom'),
          oe(this._map._container, 'touchstart', this._onTouchStart, this)
      },
      removeHooks: function () {
        ke(this._map._container, 'leaflet-touch-zoom'),
          ve(this._map._container, 'touchstart', this._onTouchStart, this)
      },
      _onTouchStart: function (i) {
        var s = this._map
        if (
          !(
            !i.touches ||
            i.touches.length !== 2 ||
            s._animatingZoom ||
            this._zooming
          )
        ) {
          var l = s.mouseEventToContainerPoint(i.touches[0]),
            f = s.mouseEventToContainerPoint(i.touches[1])
          ;(this._centerPoint = s.getSize()._divideBy(2)),
            (this._startLatLng = s.containerPointToLatLng(this._centerPoint)),
            s.options.touchZoom !== 'center' &&
              (this._pinchStartLatLng = s.containerPointToLatLng(
                l.add(f)._divideBy(2)
              )),
            (this._startDist = l.distanceTo(f)),
            (this._startZoom = s.getZoom()),
            (this._moved = !1),
            (this._zooming = !0),
            s._stop(),
            oe(document, 'touchmove', this._onTouchMove, this),
            oe(document, 'touchend touchcancel', this._onTouchEnd, this),
            je(i)
        }
      },
      _onTouchMove: function (i) {
        if (!(!i.touches || i.touches.length !== 2 || !this._zooming)) {
          var s = this._map,
            l = s.mouseEventToContainerPoint(i.touches[0]),
            f = s.mouseEventToContainerPoint(i.touches[1]),
            h = l.distanceTo(f) / this._startDist
          if (
            ((this._zoom = s.getScaleZoom(h, this._startZoom)),
            !s.options.bounceAtZoomLimits &&
              ((this._zoom < s.getMinZoom() && h < 1) ||
                (this._zoom > s.getMaxZoom() && h > 1)) &&
              (this._zoom = s._limitZoom(this._zoom)),
            s.options.touchZoom === 'center')
          ) {
            if (((this._center = this._startLatLng), h === 1)) return
          } else {
            var x = l._add(f)._divideBy(2)._subtract(this._centerPoint)
            if (h === 1 && x.x === 0 && x.y === 0) return
            this._center = s.unproject(
              s.project(this._pinchStartLatLng, this._zoom).subtract(x),
              this._zoom
            )
          }
          this._moved || (s._moveStart(!0, !1), (this._moved = !0)),
            F(this._animRequest)
          var I = u(
            s._move,
            s,
            this._center,
            this._zoom,
            { pinch: !0, round: !1 },
            void 0
          )
          ;(this._animRequest = R(I, this, !0)), je(i)
        }
      },
      _onTouchEnd: function () {
        if (!this._moved || !this._zooming) {
          this._zooming = !1
          return
        }
        ;(this._zooming = !1),
          F(this._animRequest),
          ve(document, 'touchmove', this._onTouchMove, this),
          ve(document, 'touchend touchcancel', this._onTouchEnd, this),
          this._map.options.zoomAnimation
            ? this._map._animateZoom(
                this._center,
                this._map._limitZoom(this._zoom),
                !0,
                this._map.options.zoomSnap
              )
            : this._map._resetView(
                this._center,
                this._map._limitZoom(this._zoom)
              )
      }
    })
    fe.addInitHook('addHandler', 'touchZoom', Af),
      (fe.BoxZoom = Mf),
      (fe.DoubleClickZoom = bf),
      (fe.Drag = Of),
      (fe.Keyboard = If),
      (fe.ScrollWheelZoom = zf),
      (fe.TapHold = Nf),
      (fe.TouchZoom = Af),
      (n.Bounds = Q),
      (n.Browser = J),
      (n.CRS = et),
      (n.Canvas = Pf),
      (n.Circle = gl),
      (n.CircleMarker = qo),
      (n.Class = V),
      (n.Control = Mt),
      (n.DivIcon = xf),
      (n.DivOverlay = Ht),
      (n.DomEvent = D_),
      (n.DomUtil = A_),
      (n.Draggable = yn),
      (n.Evented = pe),
      (n.FeatureGroup = Yt),
      (n.GeoJSON = Jt),
      (n.GridLayer = xr),
      (n.Handler = Zt),
      (n.Icon = Pi),
      (n.ImageOverlay = Qo),
      (n.LatLng = se),
      (n.LatLngBounds = ce),
      (n.Layer = bt),
      (n.LayerGroup = Ei),
      (n.LineUtil = K_),
      (n.Map = fe),
      (n.Marker = Ho),
      (n.Mixin = q_),
      (n.Path = wn),
      (n.Point = D),
      (n.PolyUtil = V_),
      (n.Polygon = Ci),
      (n.Polyline = Xt),
      (n.Popup = Ko),
      (n.PosAnimation = rf),
      (n.Projection = Y_),
      (n.Rectangle = kf),
      (n.Renderer = en),
      (n.SVG = Er),
      (n.SVGOverlay = Sf),
      (n.TileLayer = ki),
      (n.Tooltip = Yo),
      (n.Transformation = Za),
      (n.Util = Z),
      (n.VideoOverlay = wf),
      (n.bind = u),
      (n.bounds = te),
      (n.canvas = Cf),
      (n.circle = oy),
      (n.circleMarker = ry),
      (n.control = yr),
      (n.divIcon = py),
      (n.extend = o),
      (n.featureGroup = ty),
      (n.geoJSON = yf),
      (n.geoJson = ly),
      (n.gridLayer = my),
      (n.icon = ny),
      (n.imageOverlay = uy),
      (n.latLng = re),
      (n.latLngBounds = ie),
      (n.layerGroup = ey),
      (n.map = j_),
      (n.marker = iy),
      (n.point = $),
      (n.polygon = ay),
      (n.polyline = sy),
      (n.popup = fy),
      (n.rectangle = _y),
      (n.setOptions = E),
      (n.stamp = c),
      (n.svg = Lf),
      (n.svgOverlay = dy),
      (n.tileLayer = Tf),
      (n.tooltip = hy),
      (n.transformation = dr),
      (n.version = r),
      (n.videoOverlay = cy)
    var wy = window.L
    ;(n.noConflict = function () {
      return (window.L = wy), this
    }),
      (window.L = n)
  })
})(rc, rc.exports)
var Da = rc.exports
function md(e, t, n) {
  return Object.freeze({ instance: e, context: t, container: n })
}
function gd(e, t) {
  return t == null
    ? function (r, o) {
        const a = H.useRef()
        return a.current || (a.current = e(r, o)), a
      }
    : function (r, o) {
        const a = H.useRef()
        a.current || (a.current = e(r, o))
        const u = H.useRef(r),
          { instance: d } = a.current
        return (
          H.useEffect(
            function () {
              u.current !== r && (t(d, r, u.current), (u.current = r))
            },
            [d, r, o]
          ),
          a
        )
      }
}
function Ex(e, t) {
  H.useEffect(
    function () {
      return (
        (t.layerContainer ?? t.map).addLayer(e.instance),
        function () {
          var a
          ;(a = t.layerContainer) == null || a.removeLayer(e.instance),
            t.map.removeLayer(e.instance)
        }
      )
    },
    [t, e]
  )
}
function wv(e) {
  return function (n) {
    const r = _v(),
      o = e(pd(n, r), r)
    return (
      mv(r.map, n.attribution),
      yv(o.current, n.eventHandlers),
      Ex(o.current, r),
      o
    )
  }
}
function Px(e, t) {
  const n = gd(e, t),
    r = wv(n)
  return wx(r)
}
function Cx(e, t) {
  const n = gd(e),
    r = Tx(n, t)
  return Sx(r)
}
function Lx(e, t) {
  const n = gd(e, t),
    r = wv(n)
  return xx(r)
}
function kx(e, t, n) {
  const { opacity: r, zIndex: o } = t
  r != null && r !== n.opacity && e.setOpacity(r),
    o != null && o !== n.zIndex && e.setZIndex(o)
}
function oc() {
  return (
    (oc =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t]
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      }),
    oc.apply(this, arguments)
  )
}
function Mx(
  {
    bounds: e,
    boundsOptions: t,
    center: n,
    children: r,
    className: o,
    id: a,
    placeholder: u,
    style: d,
    whenReady: c,
    zoom: p,
    ...m
  },
  y
) {
  const [g] = H.useState({ className: o, id: a, style: d }),
    [w, T] = H.useState(null)
  H.useImperativeHandle(y, () => (w == null ? void 0 : w.map) ?? null, [w])
  const E = H.useCallback((S) => {
    if (S !== null && w === null) {
      const v = new Da.Map(S, m)
      n != null && p != null ? v.setView(n, p) : e != null && v.fitBounds(e, t),
        c != null && v.whenReady(c),
        T(_x(v))
    }
  }, [])
  H.useEffect(
    () => () => {
      w == null || w.map.remove()
    },
    [w]
  )
  const k = w ? Se.createElement(vv, { value: w }, r) : u ?? null
  return Se.createElement('div', oc({}, g, { ref: E }), k)
}
const bx = H.forwardRef(Mx),
  Ox = Px(
    function ({ position: t, ...n }, r) {
      const o = new Da.Marker(t, n)
      return md(o, yx(r, { overlayContainer: o }))
    },
    function (t, n, r) {
      n.position !== r.position && t.setLatLng(n.position),
        n.icon != null && n.icon !== r.icon && t.setIcon(n.icon),
        n.zIndexOffset != null &&
          n.zIndexOffset !== r.zIndexOffset &&
          t.setZIndexOffset(n.zIndexOffset),
        n.opacity != null && n.opacity !== r.opacity && t.setOpacity(n.opacity),
        t.dragging != null &&
          n.draggable !== r.draggable &&
          (n.draggable === !0 ? t.dragging.enable() : t.dragging.disable())
    }
  ),
  Ix = Cx(
    function (t, n) {
      const r = new Da.Popup(t, n.overlayContainer)
      return md(r, n)
    },
    function (t, n, { position: r }, o) {
      H.useEffect(
        function () {
          const { instance: u } = t
          function d(p) {
            p.popup === u && (u.update(), o(!0))
          }
          function c(p) {
            p.popup === u && o(!1)
          }
          return (
            n.map.on({ popupopen: d, popupclose: c }),
            n.overlayContainer == null
              ? (r != null && u.setLatLng(r), u.openOn(n.map))
              : n.overlayContainer.bindPopup(u),
            function () {
              var m
              n.map.off({ popupopen: d, popupclose: c }),
                (m = n.overlayContainer) == null || m.unbindPopup(),
                n.map.removeLayer(u)
            }
          )
        },
        [t, n, o, r]
      )
    }
  ),
  zx = Lx(
    function ({ url: t, ...n }, r) {
      const o = new Da.TileLayer(t, pd(n, r))
      return md(o, r)
    },
    function (t, n, r) {
      kx(t, n, r)
      const { url: o } = n
      o != null && o !== r.url && t.setUrl(o)
    }
  ),
  Nx = () => {
    const e = [51.505, -0.09]
    return N.jsx('div', {
      className: 'map_container',
      children: N.jsxs(bx, {
        center: e,
        zoom: 5,
        scrollWheelZoom: !1,
        children: [
          N.jsx(zx, {
            attribution:
              '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          }),
          N.jsx(Ox, {
            position: e,
            children: N.jsxs(Ix, {
              children: [
                'A pretty CSS3 popup. ',
                N.jsx('br', {}),
                ' Easily customizable.'
              ]
            })
          })
        ]
      })
    })
  }
function tp(e) {
  return (
    e !== null &&
    typeof e == 'object' &&
    'constructor' in e &&
    e.constructor === Object
  )
}
function vd(e, t) {
  e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach((n) => {
      typeof e[n] > 'u'
        ? (e[n] = t[n])
        : tp(t[n]) && tp(e[n]) && Object.keys(t[n]).length > 0 && vd(e[n], t[n])
    })
}
const Sv = {
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
function cn() {
  const e = typeof document < 'u' ? document : {}
  return vd(e, Sv), e
}
const Ax = {
  document: Sv,
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
  return vd(e, Ax), e
}
function Rx(e) {
  return (
    e === void 0 && (e = ''),
    e
      .trim()
      .split(' ')
      .filter((t) => !!t.trim())
  )
}
function Dx(e) {
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
function sc(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t)
}
function fa() {
  return Date.now()
}
function jx(e) {
  const t = vt()
  let n
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  )
}
function Bx(e, t) {
  t === void 0 && (t = 'x')
  const n = vt()
  let r, o, a
  const u = jx(e)
  return (
    n.WebKitCSSMatrix
      ? ((o = u.transform || u.webkitTransform),
        o.split(',').length > 6 &&
          (o = o
            .split(', ')
            .map((d) => d.replace(',', '.'))
            .join(', ')),
        (a = new n.WebKitCSSMatrix(o === 'none' ? '' : o)))
      : ((a =
          u.MozTransform ||
          u.OTransform ||
          u.MsTransform ||
          u.msTransform ||
          u.transform ||
          u
            .getPropertyValue('transform')
            .replace('translate(', 'matrix(1, 0, 0, 1,')),
        (r = a.toString().split(','))),
    t === 'x' &&
      (n.WebKitCSSMatrix
        ? (o = a.m41)
        : r.length === 16
        ? (o = parseFloat(r[12]))
        : (o = parseFloat(r[4]))),
    t === 'y' &&
      (n.WebKitCSSMatrix
        ? (o = a.m42)
        : r.length === 16
        ? (o = parseFloat(r[13]))
        : (o = parseFloat(r[5]))),
    o || 0
  )
}
function _s(e) {
  return (
    typeof e == 'object' &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === 'Object'
  )
}
function Fx(e) {
  return typeof window < 'u' && typeof window.HTMLElement < 'u'
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11)
}
function ut() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ['__proto__', 'constructor', 'prototype']
  for (let n = 1; n < arguments.length; n += 1) {
    const r = n < 0 || arguments.length <= n ? void 0 : arguments[n]
    if (r != null && !Fx(r)) {
      const o = Object.keys(Object(r)).filter((a) => t.indexOf(a) < 0)
      for (let a = 0, u = o.length; a < u; a += 1) {
        const d = o[a],
          c = Object.getOwnPropertyDescriptor(r, d)
        c !== void 0 &&
          c.enumerable &&
          (_s(e[d]) && _s(r[d])
            ? r[d].__swiper__
              ? (e[d] = r[d])
              : ut(e[d], r[d])
            : !_s(e[d]) && _s(r[d])
            ? ((e[d] = {}), r[d].__swiper__ ? (e[d] = r[d]) : ut(e[d], r[d]))
            : (e[d] = r[d]))
      }
    }
  }
  return e
}
function ys(e, t, n) {
  e.style.setProperty(t, n)
}
function xv(e) {
  let { swiper: t, targetPosition: n, side: r } = e
  const o = vt(),
    a = -t.translate
  let u = null,
    d
  const c = t.params.speed
  ;(t.wrapperEl.style.scrollSnapType = 'none'),
    o.cancelAnimationFrame(t.cssModeFrameID)
  const p = n > a ? 'next' : 'prev',
    m = (g, w) => (p === 'next' && g >= w) || (p === 'prev' && g <= w),
    y = () => {
      ;(d = new Date().getTime()), u === null && (u = d)
      const g = Math.max(Math.min((d - u) / c, 1), 0),
        w = 0.5 - Math.cos(g * Math.PI) / 2
      let T = a + w * (n - a)
      if ((m(T, n) && (T = n), t.wrapperEl.scrollTo({ [r]: T }), m(T, n))) {
        ;(t.wrapperEl.style.overflow = 'hidden'),
          (t.wrapperEl.style.scrollSnapType = ''),
          setTimeout(() => {
            ;(t.wrapperEl.style.overflow = ''), t.wrapperEl.scrollTo({ [r]: T })
          }),
          o.cancelAnimationFrame(t.cssModeFrameID)
        return
      }
      t.cssModeFrameID = o.requestAnimationFrame(y)
    }
  y()
}
function ln(e, t) {
  t === void 0 && (t = '')
  const n = [...e.children]
  return (
    e instanceof HTMLSlotElement && n.push(...e.assignedElements()),
    t ? n.filter((r) => r.matches(t)) : n
  )
}
function $x(e, t) {
  const n = t.contains(e)
  return !n && t instanceof HTMLSlotElement
    ? [...t.assignedElements()].includes(e)
    : n
}
function ha(e) {
  try {
    console.warn(e)
    return
  } catch {}
}
function ac(e, t) {
  t === void 0 && (t = [])
  const n = document.createElement(e)
  return n.classList.add(...(Array.isArray(t) ? t : Rx(t))), n
}
function Zx(e, t) {
  const n = []
  for (; e.previousElementSibling; ) {
    const r = e.previousElementSibling
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r)
  }
  return n
}
function Hx(e, t) {
  const n = []
  for (; e.nextElementSibling; ) {
    const r = e.nextElementSibling
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r)
  }
  return n
}
function On(e, t) {
  return vt().getComputedStyle(e, null).getPropertyValue(t)
}
function np(e) {
  let t = e,
    n
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; ) t.nodeType === 1 && (n += 1)
    return n
  }
}
function qx(e, t) {
  const n = []
  let r = e.parentElement
  for (; r; ) n.push(r), (r = r.parentElement)
  return n
}
function ip(e, t, n) {
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
let Gl
function Vx() {
  const e = vt(),
    t = cn()
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
function Tv() {
  return Gl || (Gl = Vx()), Gl
}
let Ql
function Wx(e) {
  let { userAgent: t } = e === void 0 ? {} : e
  const n = Tv(),
    r = vt(),
    o = r.navigator.platform,
    a = t || r.navigator.userAgent,
    u = { ios: !1, android: !1 },
    d = r.screen.width,
    c = r.screen.height,
    p = a.match(/(Android);?[\s\/]+([\d.]+)?/)
  let m = a.match(/(iPad).*OS\s([\d_]+)/)
  const y = a.match(/(iPod)(.*OS\s([\d_]+))?/),
    g = !m && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    w = o === 'Win32'
  let T = o === 'MacIntel'
  const E = [
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
    !m &&
      T &&
      n.touch &&
      E.indexOf(`${d}x${c}`) >= 0 &&
      ((m = a.match(/(Version)\/([\d.]+)/)),
      m || (m = [0, 1, '13_0_0']),
      (T = !1)),
    p && !w && ((u.os = 'android'), (u.android = !0)),
    (m || g || y) && ((u.os = 'ios'), (u.ios = !0)),
    u
  )
}
function Ev(e) {
  return e === void 0 && (e = {}), Ql || (Ql = Wx(e)), Ql
}
let Kl
function Ux() {
  const e = vt(),
    t = Ev()
  let n = !1
  function r() {
    const d = e.navigator.userAgent.toLowerCase()
    return (
      d.indexOf('safari') >= 0 &&
      d.indexOf('chrome') < 0 &&
      d.indexOf('android') < 0
    )
  }
  if (r()) {
    const d = String(e.navigator.userAgent)
    if (d.includes('Version/')) {
      const [c, p] = d
        .split('Version/')[1]
        .split(' ')[0]
        .split('.')
        .map((m) => Number(m))
      n = c < 16 || (c === 16 && p < 2)
    }
  }
  const o = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent
    ),
    a = r(),
    u = a || (o && t.ios)
  return { isSafari: n || a, needPerspectiveFix: n, need3dFix: u, isWebView: o }
}
function Gx() {
  return Kl || (Kl = Ux()), Kl
}
function Qx(e) {
  let { swiper: t, on: n, emit: r } = e
  const o = vt()
  let a = null,
    u = null
  const d = () => {
      !t || t.destroyed || !t.initialized || (r('beforeResize'), r('resize'))
    },
    c = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((a = new ResizeObserver((y) => {
          u = o.requestAnimationFrame(() => {
            const { width: g, height: w } = t
            let T = g,
              E = w
            y.forEach((k) => {
              let { contentBoxSize: S, contentRect: v, target: _ } = k
              ;(_ && _ !== t.el) ||
                ((T = v ? v.width : (S[0] || S).inlineSize),
                (E = v ? v.height : (S[0] || S).blockSize))
            }),
              (T !== g || E !== w) && d()
          })
        })),
        a.observe(t.el))
    },
    p = () => {
      u && o.cancelAnimationFrame(u),
        a && a.unobserve && t.el && (a.unobserve(t.el), (a = null))
    },
    m = () => {
      !t || t.destroyed || !t.initialized || r('orientationchange')
    }
  n('init', () => {
    if (t.params.resizeObserver && typeof o.ResizeObserver < 'u') {
      c()
      return
    }
    o.addEventListener('resize', d), o.addEventListener('orientationchange', m)
  }),
    n('destroy', () => {
      p(),
        o.removeEventListener('resize', d),
        o.removeEventListener('orientationchange', m)
    })
}
function Kx(e) {
  let { swiper: t, extendParams: n, on: r, emit: o } = e
  const a = [],
    u = vt(),
    d = function (m, y) {
      y === void 0 && (y = {})
      const g = u.MutationObserver || u.WebkitMutationObserver,
        w = new g((T) => {
          if (t.__preventObserver__) return
          if (T.length === 1) {
            o('observerUpdate', T[0])
            return
          }
          const E = function () {
            o('observerUpdate', T[0])
          }
          u.requestAnimationFrame
            ? u.requestAnimationFrame(E)
            : u.setTimeout(E, 0)
        })
      w.observe(m, {
        attributes: typeof y.attributes > 'u' ? !0 : y.attributes,
        childList: t.isElement || (typeof y.childList > 'u' ? !0 : y).childList,
        characterData: typeof y.characterData > 'u' ? !0 : y.characterData
      }),
        a.push(w)
    },
    c = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const m = qx(t.hostEl)
          for (let y = 0; y < m.length; y += 1) d(m[y])
        }
        d(t.hostEl, { childList: t.params.observeSlideChildren }),
          d(t.wrapperEl, { attributes: !1 })
      }
    },
    p = () => {
      a.forEach((m) => {
        m.disconnect()
      }),
        a.splice(0, a.length)
    }
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    r('init', c),
    r('destroy', p)
}
var Yx = {
  on(e, t, n) {
    const r = this
    if (!r.eventsListeners || r.destroyed || typeof t != 'function') return r
    const o = n ? 'unshift' : 'push'
    return (
      e.split(' ').forEach((a) => {
        r.eventsListeners[a] || (r.eventsListeners[a] = []),
          r.eventsListeners[a][o](t)
      }),
      r
    )
  },
  once(e, t, n) {
    const r = this
    if (!r.eventsListeners || r.destroyed || typeof t != 'function') return r
    function o() {
      r.off(e, o), o.__emitterProxy && delete o.__emitterProxy
      for (var a = arguments.length, u = new Array(a), d = 0; d < a; d++)
        u[d] = arguments[d]
      t.apply(r, u)
    }
    return (o.__emitterProxy = t), r.on(e, o, n)
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
              n.eventsListeners[r].forEach((o, a) => {
                ;(o === t || (o.__emitterProxy && o.__emitterProxy === t)) &&
                  n.eventsListeners[r].splice(a, 1)
              })
        }),
      n
    )
  },
  emit() {
    const e = this
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e
    let t, n, r
    for (var o = arguments.length, a = new Array(o), u = 0; u < o; u++)
      a[u] = arguments[u]
    return (
      typeof a[0] == 'string' || Array.isArray(a[0])
        ? ((t = a[0]), (n = a.slice(1, a.length)), (r = e))
        : ((t = a[0].events), (n = a[0].data), (r = a[0].context || e)),
      n.unshift(r),
      (Array.isArray(t) ? t : t.split(' ')).forEach((c) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((p) => {
            p.apply(r, [c, ...n])
          }),
          e.eventsListeners &&
            e.eventsListeners[c] &&
            e.eventsListeners[c].forEach((p) => {
              p.apply(r, n)
            })
      }),
      e
    )
  }
}
function Xx() {
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
        parseInt(On(r, 'padding-left') || 0, 10) -
        parseInt(On(r, 'padding-right') || 0, 10)),
      (n =
        n -
        parseInt(On(r, 'padding-top') || 0, 10) -
        parseInt(On(r, 'padding-bottom') || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, { width: t, height: n, size: e.isHorizontal() ? t : n }))
}
function Jx() {
  const e = this
  function t(z, R) {
    return parseFloat(z.getPropertyValue(e.getDirectionLabel(R)) || 0)
  }
  const n = e.params,
    { wrapperEl: r, slidesEl: o, size: a, rtlTranslate: u, wrongRTL: d } = e,
    c = e.virtual && n.virtual.enabled,
    p = c ? e.virtual.slides.length : e.slides.length,
    m = ln(o, `.${e.params.slideClass}, swiper-slide`),
    y = c ? e.virtual.slides.length : m.length
  let g = []
  const w = [],
    T = []
  let E = n.slidesOffsetBefore
  typeof E == 'function' && (E = n.slidesOffsetBefore.call(e))
  let k = n.slidesOffsetAfter
  typeof k == 'function' && (k = n.slidesOffsetAfter.call(e))
  const S = e.snapGrid.length,
    v = e.slidesGrid.length
  let _ = n.spaceBetween,
    P = -E,
    C = 0,
    b = 0
  if (typeof a > 'u') return
  typeof _ == 'string' && _.indexOf('%') >= 0
    ? (_ = (parseFloat(_.replace('%', '')) / 100) * a)
    : typeof _ == 'string' && (_ = parseFloat(_)),
    (e.virtualSize = -_),
    m.forEach((z) => {
      u ? (z.style.marginLeft = '') : (z.style.marginRight = ''),
        (z.style.marginBottom = ''),
        (z.style.marginTop = '')
    }),
    n.centeredSlides &&
      n.cssMode &&
      (ys(r, '--swiper-centered-offset-before', ''),
      ys(r, '--swiper-centered-offset-after', ''))
  const M = n.grid && n.grid.rows > 1 && e.grid
  M ? e.grid.initSlides(m) : e.grid && e.grid.unsetSlides()
  let O
  const A =
    n.slidesPerView === 'auto' &&
    n.breakpoints &&
    Object.keys(n.breakpoints).filter(
      (z) => typeof n.breakpoints[z].slidesPerView < 'u'
    ).length > 0
  for (let z = 0; z < y; z += 1) {
    O = 0
    let R
    if (
      (m[z] && (R = m[z]),
      M && e.grid.updateSlide(z, R, m),
      !(m[z] && On(R, 'display') === 'none'))
    ) {
      if (n.slidesPerView === 'auto') {
        A && (m[z].style[e.getDirectionLabel('width')] = '')
        const F = getComputedStyle(R),
          Z = R.style.transform,
          V = R.style.webkitTransform
        if (
          (Z && (R.style.transform = 'none'),
          V && (R.style.webkitTransform = 'none'),
          n.roundLengths)
        )
          O = e.isHorizontal() ? ip(R, 'width') : ip(R, 'height')
        else {
          const Y = t(F, 'width'),
            X = t(F, 'padding-left'),
            pe = t(F, 'padding-right'),
            D = t(F, 'margin-left'),
            U = t(F, 'margin-right'),
            $ = F.getPropertyValue('box-sizing')
          if ($ && $ === 'border-box') O = Y + D + U
          else {
            const { clientWidth: Q, offsetWidth: te } = R
            O = Y + X + pe + D + U + (te - Q)
          }
        }
        Z && (R.style.transform = Z),
          V && (R.style.webkitTransform = V),
          n.roundLengths && (O = Math.floor(O))
      } else
        (O = (a - (n.slidesPerView - 1) * _) / n.slidesPerView),
          n.roundLengths && (O = Math.floor(O)),
          m[z] && (m[z].style[e.getDirectionLabel('width')] = `${O}px`)
      m[z] && (m[z].swiperSlideSize = O),
        T.push(O),
        n.centeredSlides
          ? ((P = P + O / 2 + C / 2 + _),
            C === 0 && z !== 0 && (P = P - a / 2 - _),
            z === 0 && (P = P - a / 2 - _),
            Math.abs(P) < 1 / 1e3 && (P = 0),
            n.roundLengths && (P = Math.floor(P)),
            b % n.slidesPerGroup === 0 && g.push(P),
            w.push(P))
          : (n.roundLengths && (P = Math.floor(P)),
            (b - Math.min(e.params.slidesPerGroupSkip, b)) %
              e.params.slidesPerGroup ===
              0 && g.push(P),
            w.push(P),
            (P = P + O + _)),
        (e.virtualSize += O + _),
        (C = O),
        (b += 1)
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, a) + k),
    u &&
      d &&
      (n.effect === 'slide' || n.effect === 'coverflow') &&
      (r.style.width = `${e.virtualSize + _}px`),
    n.setWrapperSize &&
      (r.style[e.getDirectionLabel('width')] = `${e.virtualSize + _}px`),
    M && e.grid.updateWrapperSize(O, g),
    !n.centeredSlides)
  ) {
    const z = []
    for (let R = 0; R < g.length; R += 1) {
      let F = g[R]
      n.roundLengths && (F = Math.floor(F)),
        g[R] <= e.virtualSize - a && z.push(F)
    }
    ;(g = z),
      Math.floor(e.virtualSize - a) - Math.floor(g[g.length - 1]) > 1 &&
        g.push(e.virtualSize - a)
  }
  if (c && n.loop) {
    const z = T[0] + _
    if (n.slidesPerGroup > 1) {
      const R = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup
        ),
        F = z * n.slidesPerGroup
      for (let Z = 0; Z < R; Z += 1) g.push(g[g.length - 1] + F)
    }
    for (let R = 0; R < e.virtual.slidesBefore + e.virtual.slidesAfter; R += 1)
      n.slidesPerGroup === 1 && g.push(g[g.length - 1] + z),
        w.push(w[w.length - 1] + z),
        (e.virtualSize += z)
  }
  if ((g.length === 0 && (g = [0]), _ !== 0)) {
    const z =
      e.isHorizontal() && u ? 'marginLeft' : e.getDirectionLabel('marginRight')
    m.filter((R, F) =>
      !n.cssMode || n.loop ? !0 : F !== m.length - 1
    ).forEach((R) => {
      R.style[z] = `${_}px`
    })
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let z = 0
    T.forEach((F) => {
      z += F + (_ || 0)
    }),
      (z -= _)
    const R = z > a ? z - a : 0
    g = g.map((F) => (F <= 0 ? -E : F > R ? R + k : F))
  }
  if (n.centerInsufficientSlides) {
    let z = 0
    T.forEach((F) => {
      z += F + (_ || 0)
    }),
      (z -= _)
    const R = (n.slidesOffsetBefore || 0) + (n.slidesOffsetAfter || 0)
    if (z + R < a) {
      const F = (a - z - R) / 2
      g.forEach((Z, V) => {
        g[V] = Z - F
      }),
        w.forEach((Z, V) => {
          w[V] = Z + F
        })
    }
  }
  if (
    (Object.assign(e, {
      slides: m,
      snapGrid: g,
      slidesGrid: w,
      slidesSizesGrid: T
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    ys(r, '--swiper-centered-offset-before', `${-g[0]}px`),
      ys(
        r,
        '--swiper-centered-offset-after',
        `${e.size / 2 - T[T.length - 1] / 2}px`
      )
    const z = -e.snapGrid[0],
      R = -e.slidesGrid[0]
    ;(e.snapGrid = e.snapGrid.map((F) => F + z)),
      (e.slidesGrid = e.slidesGrid.map((F) => F + R))
  }
  if (
    (y !== p && e.emit('slidesLengthChange'),
    g.length !== S &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit('snapGridLengthChange')),
    w.length !== v && e.emit('slidesGridLengthChange'),
    n.watchSlidesProgress && e.updateSlidesOffset(),
    e.emit('slidesUpdated'),
    !c && !n.cssMode && (n.effect === 'slide' || n.effect === 'fade'))
  ) {
    const z = `${n.containerModifierClass}backface-hidden`,
      R = e.el.classList.contains(z)
    y <= n.maxBackfaceHiddenSlides
      ? R || e.el.classList.add(z)
      : R && e.el.classList.remove(z)
  }
}
function eT(e) {
  const t = this,
    n = [],
    r = t.virtual && t.params.virtual.enabled
  let o = 0,
    a
  typeof e == 'number'
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed)
  const u = (d) => (r ? t.slides[t.getSlideIndexByData(d)] : t.slides[d])
  if (t.params.slidesPerView !== 'auto' && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((d) => {
        n.push(d)
      })
    else
      for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
        const d = t.activeIndex + a
        if (d > t.slides.length && !r) break
        n.push(u(d))
      }
  else n.push(u(t.activeIndex))
  for (a = 0; a < n.length; a += 1)
    if (typeof n[a] < 'u') {
      const d = n[a].offsetHeight
      o = d > o ? d : o
    }
  ;(o || o === 0) && (t.wrapperEl.style.height = `${o}px`)
}
function tT() {
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
const rp = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n)
}
function nT(e) {
  e === void 0 && (e = (this && this.translate) || 0)
  const t = this,
    n = t.params,
    { slides: r, rtlTranslate: o, snapGrid: a } = t
  if (r.length === 0) return
  typeof r[0].swiperSlideOffset > 'u' && t.updateSlidesOffset()
  let u = -e
  o && (u = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = [])
  let d = n.spaceBetween
  typeof d == 'string' && d.indexOf('%') >= 0
    ? (d = (parseFloat(d.replace('%', '')) / 100) * t.size)
    : typeof d == 'string' && (d = parseFloat(d))
  for (let c = 0; c < r.length; c += 1) {
    const p = r[c]
    let m = p.swiperSlideOffset
    n.cssMode && n.centeredSlides && (m -= r[0].swiperSlideOffset)
    const y =
        (u + (n.centeredSlides ? t.minTranslate() : 0) - m) /
        (p.swiperSlideSize + d),
      g =
        (u - a[0] + (n.centeredSlides ? t.minTranslate() : 0) - m) /
        (p.swiperSlideSize + d),
      w = -(u - m),
      T = w + t.slidesSizesGrid[c],
      E = w >= 0 && w <= t.size - t.slidesSizesGrid[c],
      k =
        (w >= 0 && w < t.size - 1) ||
        (T > 1 && T <= t.size) ||
        (w <= 0 && T >= t.size)
    k && (t.visibleSlides.push(p), t.visibleSlidesIndexes.push(c)),
      rp(p, k, n.slideVisibleClass),
      rp(p, E, n.slideFullyVisibleClass),
      (p.progress = o ? -y : y),
      (p.originalProgress = o ? -g : g)
  }
}
function iT(e) {
  const t = this
  if (typeof e > 'u') {
    const m = t.rtlTranslate ? -1 : 1
    e = (t && t.translate && t.translate * m) || 0
  }
  const n = t.params,
    r = t.maxTranslate() - t.minTranslate()
  let { progress: o, isBeginning: a, isEnd: u, progressLoop: d } = t
  const c = a,
    p = u
  if (r === 0) (o = 0), (a = !0), (u = !0)
  else {
    o = (e - t.minTranslate()) / r
    const m = Math.abs(e - t.minTranslate()) < 1,
      y = Math.abs(e - t.maxTranslate()) < 1
    ;(a = m || o <= 0), (u = y || o >= 1), m && (o = 0), y && (o = 1)
  }
  if (n.loop) {
    const m = t.getSlideIndexByData(0),
      y = t.getSlideIndexByData(t.slides.length - 1),
      g = t.slidesGrid[m],
      w = t.slidesGrid[y],
      T = t.slidesGrid[t.slidesGrid.length - 1],
      E = Math.abs(e)
    E >= g ? (d = (E - g) / T) : (d = (E + T - w) / T), d > 1 && (d -= 1)
  }
  Object.assign(t, { progress: o, progressLoop: d, isBeginning: a, isEnd: u }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    a && !c && t.emit('reachBeginning toEdge'),
    u && !p && t.emit('reachEnd toEdge'),
    ((c && !a) || (p && !u)) && t.emit('fromEdge'),
    t.emit('progress', o)
}
const Yl = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n)
}
function rT() {
  const e = this,
    { slides: t, params: n, slidesEl: r, activeIndex: o } = e,
    a = e.virtual && n.virtual.enabled,
    u = e.grid && n.grid && n.grid.rows > 1,
    d = (y) => ln(r, `.${n.slideClass}${y}, swiper-slide${y}`)[0]
  let c, p, m
  if (a)
    if (n.loop) {
      let y = o - e.virtual.slidesBefore
      y < 0 && (y = e.virtual.slides.length + y),
        y >= e.virtual.slides.length && (y -= e.virtual.slides.length),
        (c = d(`[data-swiper-slide-index="${y}"]`))
    } else c = d(`[data-swiper-slide-index="${o}"]`)
  else
    u
      ? ((c = t.filter((y) => y.column === o)[0]),
        (m = t.filter((y) => y.column === o + 1)[0]),
        (p = t.filter((y) => y.column === o - 1)[0]))
      : (c = t[o])
  c &&
    (u ||
      ((m = Hx(c, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !m && (m = t[0]),
      (p = Zx(c, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !p === 0 && (p = t[t.length - 1]))),
    t.forEach((y) => {
      Yl(y, y === c, n.slideActiveClass),
        Yl(y, y === m, n.slideNextClass),
        Yl(y, y === p, n.slidePrevClass)
    }),
    e.emitSlidesClasses()
}
const Bs = (e, t) => {
    if (!e || e.destroyed || !e.params) return
    const n = () => (e.isElement ? 'swiper-slide' : `.${e.params.slideClass}`),
      r = t.closest(n())
    if (r) {
      let o = r.querySelector(`.${e.params.lazyPreloaderClass}`)
      !o &&
        e.isElement &&
        (r.shadowRoot
          ? (o = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              r.shadowRoot &&
                ((o = r.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`
                )),
                o && o.remove())
            })),
        o && o.remove()
    }
  },
  Xl = (e, t) => {
    if (!e.slides[t]) return
    const n = e.slides[t].querySelector('[loading="lazy"]')
    n && n.removeAttribute('loading')
  },
  lc = (e) => {
    if (!e || e.destroyed || !e.params) return
    let t = e.params.lazyPreloadPrevNext
    const n = e.slides.length
    if (!n || !t || t < 0) return
    t = Math.min(t, n)
    const r =
        e.params.slidesPerView === 'auto'
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      o = e.activeIndex
    if (e.params.grid && e.params.grid.rows > 1) {
      const u = o,
        d = [u - t]
      d.push(...Array.from({ length: t }).map((c, p) => u + r + p)),
        e.slides.forEach((c, p) => {
          d.includes(c.column) && Xl(e, p)
        })
      return
    }
    const a = o + r - 1
    if (e.params.rewind || e.params.loop)
      for (let u = o - t; u <= a + t; u += 1) {
        const d = ((u % n) + n) % n
        ;(d < o || d > a) && Xl(e, d)
      }
    else
      for (let u = Math.max(o - t, 0); u <= Math.min(a + t, n - 1); u += 1)
        u !== o && (u > a || u < o) && Xl(e, u)
  }
function oT(e) {
  const { slidesGrid: t, params: n } = e,
    r = e.rtlTranslate ? e.translate : -e.translate
  let o
  for (let a = 0; a < t.length; a += 1)
    typeof t[a + 1] < 'u'
      ? r >= t[a] && r < t[a + 1] - (t[a + 1] - t[a]) / 2
        ? (o = a)
        : r >= t[a] && r < t[a + 1] && (o = a + 1)
      : r >= t[a] && (o = a)
  return n.normalizeSlideIndex && (o < 0 || typeof o > 'u') && (o = 0), o
}
function sT(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: r, params: o, activeIndex: a, realIndex: u, snapIndex: d } = t
  let c = e,
    p
  const m = (w) => {
    let T = w - t.virtual.slidesBefore
    return (
      T < 0 && (T = t.virtual.slides.length + T),
      T >= t.virtual.slides.length && (T -= t.virtual.slides.length),
      T
    )
  }
  if ((typeof c > 'u' && (c = oT(t)), r.indexOf(n) >= 0)) p = r.indexOf(n)
  else {
    const w = Math.min(o.slidesPerGroupSkip, c)
    p = w + Math.floor((c - w) / o.slidesPerGroup)
  }
  if ((p >= r.length && (p = r.length - 1), c === a && !t.params.loop)) {
    p !== d && ((t.snapIndex = p), t.emit('snapIndexChange'))
    return
  }
  if (c === a && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = m(c)
    return
  }
  const y = t.grid && o.grid && o.grid.rows > 1
  let g
  if (t.virtual && o.virtual.enabled && o.loop) g = m(c)
  else if (y) {
    const w = t.slides.filter((E) => E.column === c)[0]
    let T = parseInt(w.getAttribute('data-swiper-slide-index'), 10)
    Number.isNaN(T) && (T = Math.max(t.slides.indexOf(w), 0)),
      (g = Math.floor(T / o.grid.rows))
  } else if (t.slides[c]) {
    const w = t.slides[c].getAttribute('data-swiper-slide-index')
    w ? (g = parseInt(w, 10)) : (g = c)
  } else g = c
  Object.assign(t, {
    previousSnapIndex: d,
    snapIndex: p,
    previousRealIndex: u,
    realIndex: g,
    previousIndex: a,
    activeIndex: c
  }),
    t.initialized && lc(t),
    t.emit('activeIndexChange'),
    t.emit('snapIndexChange'),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (u !== g && t.emit('realIndexChange'), t.emit('slideChange'))
}
function aT(e, t) {
  const n = this,
    r = n.params
  let o = e.closest(`.${r.slideClass}, swiper-slide`)
  !o &&
    n.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach((d) => {
      !o && d.matches && d.matches(`.${r.slideClass}, swiper-slide`) && (o = d)
    })
  let a = !1,
    u
  if (o) {
    for (let d = 0; d < n.slides.length; d += 1)
      if (n.slides[d] === o) {
        ;(a = !0), (u = d)
        break
      }
  }
  if (o && a)
    (n.clickedSlide = o),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(
            o.getAttribute('data-swiper-slide-index'),
            10
          ))
        : (n.clickedIndex = u)
  else {
    ;(n.clickedSlide = void 0), (n.clickedIndex = void 0)
    return
  }
  r.slideToClickedSlide &&
    n.clickedIndex !== void 0 &&
    n.clickedIndex !== n.activeIndex &&
    n.slideToClickedSlide()
}
var lT = {
  updateSize: Xx,
  updateSlides: Jx,
  updateAutoHeight: eT,
  updateSlidesOffset: tT,
  updateSlidesProgress: nT,
  updateProgress: iT,
  updateSlidesClasses: rT,
  updateActiveIndex: sT,
  updateClickedSlide: aT
}
function uT(e) {
  e === void 0 && (e = this.isHorizontal() ? 'x' : 'y')
  const t = this,
    { params: n, rtlTranslate: r, translate: o, wrapperEl: a } = t
  if (n.virtualTranslate) return r ? -o : o
  if (n.cssMode) return o
  let u = Bx(a, e)
  return (u += t.cssOverflowAdjustment()), r && (u = -u), u || 0
}
function cT(e, t) {
  const n = this,
    { rtlTranslate: r, params: o, wrapperEl: a, progress: u } = n
  let d = 0,
    c = 0
  const p = 0
  n.isHorizontal() ? (d = r ? -e : e) : (c = e),
    o.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? d : c),
    o.cssMode
      ? (a[n.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = n.isHorizontal()
          ? -d
          : -c)
      : o.virtualTranslate ||
        (n.isHorizontal()
          ? (d -= n.cssOverflowAdjustment())
          : (c -= n.cssOverflowAdjustment()),
        (a.style.transform = `translate3d(${d}px, ${c}px, ${p}px)`))
  let m
  const y = n.maxTranslate() - n.minTranslate()
  y === 0 ? (m = 0) : (m = (e - n.minTranslate()) / y),
    m !== u && n.updateProgress(e),
    n.emit('setTranslate', n.translate, t)
}
function dT() {
  return -this.snapGrid[0]
}
function fT() {
  return -this.snapGrid[this.snapGrid.length - 1]
}
function hT(e, t, n, r, o) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    r === void 0 && (r = !0)
  const a = this,
    { params: u, wrapperEl: d } = a
  if (a.animating && u.preventInteractionOnTransition) return !1
  const c = a.minTranslate(),
    p = a.maxTranslate()
  let m
  if (
    (r && e > c ? (m = c) : r && e < p ? (m = p) : (m = e),
    a.updateProgress(m),
    u.cssMode)
  ) {
    const y = a.isHorizontal()
    if (t === 0) d[y ? 'scrollLeft' : 'scrollTop'] = -m
    else {
      if (!a.support.smoothScroll)
        return (
          xv({ swiper: a, targetPosition: -m, side: y ? 'left' : 'top' }), !0
        )
      d.scrollTo({ [y ? 'left' : 'top']: -m, behavior: 'smooth' })
    }
    return !0
  }
  return (
    t === 0
      ? (a.setTransition(0),
        a.setTranslate(m),
        n && (a.emit('beforeTransitionStart', t, o), a.emit('transitionEnd')))
      : (a.setTransition(t),
        a.setTranslate(m),
        n && (a.emit('beforeTransitionStart', t, o), a.emit('transitionStart')),
        a.animating ||
          ((a.animating = !0),
          a.onTranslateToWrapperTransitionEnd ||
            (a.onTranslateToWrapperTransitionEnd = function (g) {
              !a ||
                a.destroyed ||
                (g.target === this &&
                  (a.wrapperEl.removeEventListener(
                    'transitionend',
                    a.onTranslateToWrapperTransitionEnd
                  ),
                  (a.onTranslateToWrapperTransitionEnd = null),
                  delete a.onTranslateToWrapperTransitionEnd,
                  (a.animating = !1),
                  n && a.emit('transitionEnd')))
            }),
          a.wrapperEl.addEventListener(
            'transitionend',
            a.onTranslateToWrapperTransitionEnd
          ))),
    !0
  )
}
var pT = {
  getTranslate: uT,
  setTranslate: cT,
  minTranslate: dT,
  maxTranslate: fT,
  translateTo: hT
}
function mT(e, t) {
  const n = this
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? '0ms' : '')),
    n.emit('setTransition', e, t)
}
function Pv(e) {
  let { swiper: t, runCallbacks: n, direction: r, step: o } = e
  const { activeIndex: a, previousIndex: u } = t
  let d = r
  if (
    (d || (a > u ? (d = 'next') : a < u ? (d = 'prev') : (d = 'reset')),
    t.emit(`transition${o}`),
    n && a !== u)
  ) {
    if (d === 'reset') {
      t.emit(`slideResetTransition${o}`)
      return
    }
    t.emit(`slideChangeTransition${o}`),
      d === 'next'
        ? t.emit(`slideNextTransition${o}`)
        : t.emit(`slidePrevTransition${o}`)
  }
}
function gT(e, t) {
  e === void 0 && (e = !0)
  const n = this,
    { params: r } = n
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    Pv({ swiper: n, runCallbacks: e, direction: t, step: 'Start' }))
}
function vT(e, t) {
  e === void 0 && (e = !0)
  const n = this,
    { params: r } = n
  ;(n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      Pv({ swiper: n, runCallbacks: e, direction: t, step: 'End' }))
}
var _T = { setTransition: mT, transitionStart: gT, transitionEnd: vT }
function yT(e, t, n, r, o) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == 'string' && (e = parseInt(e, 10))
  const a = this
  let u = e
  u < 0 && (u = 0)
  const {
    params: d,
    snapGrid: c,
    slidesGrid: p,
    previousIndex: m,
    activeIndex: y,
    rtlTranslate: g,
    wrapperEl: w,
    enabled: T
  } = a
  if (
    (!T && !r && !o) ||
    a.destroyed ||
    (a.animating && d.preventInteractionOnTransition)
  )
    return !1
  typeof t > 'u' && (t = a.params.speed)
  const E = Math.min(a.params.slidesPerGroupSkip, u)
  let k = E + Math.floor((u - E) / a.params.slidesPerGroup)
  k >= c.length && (k = c.length - 1)
  const S = -c[k]
  if (d.normalizeSlideIndex)
    for (let C = 0; C < p.length; C += 1) {
      const b = -Math.floor(S * 100),
        M = Math.floor(p[C] * 100),
        O = Math.floor(p[C + 1] * 100)
      typeof p[C + 1] < 'u'
        ? b >= M && b < O - (O - M) / 2
          ? (u = C)
          : b >= M && b < O && (u = C + 1)
        : b >= M && (u = C)
    }
  if (
    a.initialized &&
    u !== y &&
    ((!a.allowSlideNext &&
      (g
        ? S > a.translate && S > a.minTranslate()
        : S < a.translate && S < a.minTranslate())) ||
      (!a.allowSlidePrev &&
        S > a.translate &&
        S > a.maxTranslate() &&
        (y || 0) !== u))
  )
    return !1
  u !== (m || 0) && n && a.emit('beforeSlideChangeStart'), a.updateProgress(S)
  let v
  u > y ? (v = 'next') : u < y ? (v = 'prev') : (v = 'reset')
  const _ = a.virtual && a.params.virtual.enabled
  if (!(_ && o) && ((g && -S === a.translate) || (!g && S === a.translate)))
    return (
      a.updateActiveIndex(u),
      d.autoHeight && a.updateAutoHeight(),
      a.updateSlidesClasses(),
      d.effect !== 'slide' && a.setTranslate(S),
      v !== 'reset' && (a.transitionStart(n, v), a.transitionEnd(n, v)),
      !1
    )
  if (d.cssMode) {
    const C = a.isHorizontal(),
      b = g ? S : -S
    if (t === 0)
      _ &&
        ((a.wrapperEl.style.scrollSnapType = 'none'),
        (a._immediateVirtual = !0)),
        _ && !a._cssModeVirtualInitialSet && a.params.initialSlide > 0
          ? ((a._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              w[C ? 'scrollLeft' : 'scrollTop'] = b
            }))
          : (w[C ? 'scrollLeft' : 'scrollTop'] = b),
        _ &&
          requestAnimationFrame(() => {
            ;(a.wrapperEl.style.scrollSnapType = ''), (a._immediateVirtual = !1)
          })
    else {
      if (!a.support.smoothScroll)
        return (
          xv({ swiper: a, targetPosition: b, side: C ? 'left' : 'top' }), !0
        )
      w.scrollTo({ [C ? 'left' : 'top']: b, behavior: 'smooth' })
    }
    return !0
  }
  return (
    a.setTransition(t),
    a.setTranslate(S),
    a.updateActiveIndex(u),
    a.updateSlidesClasses(),
    a.emit('beforeTransitionStart', t, r),
    a.transitionStart(n, v),
    t === 0
      ? a.transitionEnd(n, v)
      : a.animating ||
        ((a.animating = !0),
        a.onSlideToWrapperTransitionEnd ||
          (a.onSlideToWrapperTransitionEnd = function (b) {
            !a ||
              a.destroyed ||
              (b.target === this &&
                (a.wrapperEl.removeEventListener(
                  'transitionend',
                  a.onSlideToWrapperTransitionEnd
                ),
                (a.onSlideToWrapperTransitionEnd = null),
                delete a.onSlideToWrapperTransitionEnd,
                a.transitionEnd(n, v)))
          }),
        a.wrapperEl.addEventListener(
          'transitionend',
          a.onSlideToWrapperTransitionEnd
        )),
    !0
  )
}
function wT(e, t, n, r) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == 'string' && (e = parseInt(e, 10))
  const o = this
  if (o.destroyed) return
  typeof t > 'u' && (t = o.params.speed)
  const a = o.grid && o.params.grid && o.params.grid.rows > 1
  let u = e
  if (o.params.loop)
    if (o.virtual && o.params.virtual.enabled) u = u + o.virtual.slidesBefore
    else {
      let d
      if (a) {
        const g = u * o.params.grid.rows
        d = o.slides.filter(
          (w) => w.getAttribute('data-swiper-slide-index') * 1 === g
        )[0].column
      } else d = o.getSlideIndexByData(u)
      const c = a
          ? Math.ceil(o.slides.length / o.params.grid.rows)
          : o.slides.length,
        { centeredSlides: p } = o.params
      let m = o.params.slidesPerView
      m === 'auto'
        ? (m = o.slidesPerViewDynamic())
        : ((m = Math.ceil(parseFloat(o.params.slidesPerView, 10))),
          p && m % 2 === 0 && (m = m + 1))
      let y = c - d < m
      if (
        (p && (y = y || d < Math.ceil(m / 2)),
        r && p && o.params.slidesPerView !== 'auto' && !a && (y = !1),
        y)
      ) {
        const g = p
          ? d < o.activeIndex
            ? 'prev'
            : 'next'
          : d - o.activeIndex - 1 < o.params.slidesPerView
          ? 'next'
          : 'prev'
        o.loopFix({
          direction: g,
          slideTo: !0,
          activeSlideIndex: g === 'next' ? d + 1 : d - c + 1,
          slideRealIndex: g === 'next' ? o.realIndex : void 0
        })
      }
      if (a) {
        const g = u * o.params.grid.rows
        u = o.slides.filter(
          (w) => w.getAttribute('data-swiper-slide-index') * 1 === g
        )[0].column
      } else u = o.getSlideIndexByData(u)
    }
  return (
    requestAnimationFrame(() => {
      o.slideTo(u, t, n, r)
    }),
    o
  )
}
function ST(e, t, n) {
  t === void 0 && (t = !0)
  const r = this,
    { enabled: o, params: a, animating: u } = r
  if (!o || r.destroyed) return r
  typeof e > 'u' && (e = r.params.speed)
  let d = a.slidesPerGroup
  a.slidesPerView === 'auto' &&
    a.slidesPerGroup === 1 &&
    a.slidesPerGroupAuto &&
    (d = Math.max(r.slidesPerViewDynamic('current', !0), 1))
  const c = r.activeIndex < a.slidesPerGroupSkip ? 1 : d,
    p = r.virtual && a.virtual.enabled
  if (a.loop) {
    if (u && !p && a.loopPreventsSliding) return !1
    if (
      (r.loopFix({ direction: 'next' }),
      (r._clientLeft = r.wrapperEl.clientLeft),
      r.activeIndex === r.slides.length - 1 && a.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          r.slideTo(r.activeIndex + c, e, t, n)
        }),
        !0
      )
  }
  return a.rewind && r.isEnd
    ? r.slideTo(0, e, t, n)
    : r.slideTo(r.activeIndex + c, e, t, n)
}
function xT(e, t, n) {
  t === void 0 && (t = !0)
  const r = this,
    {
      params: o,
      snapGrid: a,
      slidesGrid: u,
      rtlTranslate: d,
      enabled: c,
      animating: p
    } = r
  if (!c || r.destroyed) return r
  typeof e > 'u' && (e = r.params.speed)
  const m = r.virtual && o.virtual.enabled
  if (o.loop) {
    if (p && !m && o.loopPreventsSliding) return !1
    r.loopFix({ direction: 'prev' }), (r._clientLeft = r.wrapperEl.clientLeft)
  }
  const y = d ? r.translate : -r.translate
  function g(S) {
    return S < 0 ? -Math.floor(Math.abs(S)) : Math.floor(S)
  }
  const w = g(y),
    T = a.map((S) => g(S))
  let E = a[T.indexOf(w) - 1]
  if (typeof E > 'u' && o.cssMode) {
    let S
    a.forEach((v, _) => {
      w >= v && (S = _)
    }),
      typeof S < 'u' && (E = a[S > 0 ? S - 1 : S])
  }
  let k = 0
  if (
    (typeof E < 'u' &&
      ((k = u.indexOf(E)),
      k < 0 && (k = r.activeIndex - 1),
      o.slidesPerView === 'auto' &&
        o.slidesPerGroup === 1 &&
        o.slidesPerGroupAuto &&
        ((k = k - r.slidesPerViewDynamic('previous', !0) + 1),
        (k = Math.max(k, 0)))),
    o.rewind && r.isBeginning)
  ) {
    const S =
      r.params.virtual && r.params.virtual.enabled && r.virtual
        ? r.virtual.slides.length - 1
        : r.slides.length - 1
    return r.slideTo(S, e, t, n)
  } else if (o.loop && r.activeIndex === 0 && o.cssMode)
    return (
      requestAnimationFrame(() => {
        r.slideTo(k, e, t, n)
      }),
      !0
    )
  return r.slideTo(k, e, t, n)
}
function TT(e, t, n) {
  t === void 0 && (t = !0)
  const r = this
  if (!r.destroyed)
    return (
      typeof e > 'u' && (e = r.params.speed), r.slideTo(r.activeIndex, e, t, n)
    )
}
function ET(e, t, n, r) {
  t === void 0 && (t = !0), r === void 0 && (r = 0.5)
  const o = this
  if (o.destroyed) return
  typeof e > 'u' && (e = o.params.speed)
  let a = o.activeIndex
  const u = Math.min(o.params.slidesPerGroupSkip, a),
    d = u + Math.floor((a - u) / o.params.slidesPerGroup),
    c = o.rtlTranslate ? o.translate : -o.translate
  if (c >= o.snapGrid[d]) {
    const p = o.snapGrid[d],
      m = o.snapGrid[d + 1]
    c - p > (m - p) * r && (a += o.params.slidesPerGroup)
  } else {
    const p = o.snapGrid[d - 1],
      m = o.snapGrid[d]
    c - p <= (m - p) * r && (a -= o.params.slidesPerGroup)
  }
  return (
    (a = Math.max(a, 0)),
    (a = Math.min(a, o.slidesGrid.length - 1)),
    o.slideTo(a, e, t, n)
  )
}
function PT() {
  const e = this
  if (e.destroyed) return
  const { params: t, slidesEl: n } = e,
    r = t.slidesPerView === 'auto' ? e.slidesPerViewDynamic() : t.slidesPerView
  let o = e.clickedIndex,
    a
  const u = e.isElement ? 'swiper-slide' : `.${t.slideClass}`
  if (t.loop) {
    if (e.animating) return
    ;(a = parseInt(e.clickedSlide.getAttribute('data-swiper-slide-index'), 10)),
      t.centeredSlides
        ? o < e.loopedSlides - r / 2 ||
          o > e.slides.length - e.loopedSlides + r / 2
          ? (e.loopFix(),
            (o = e.getSlideIndex(
              ln(n, `${u}[data-swiper-slide-index="${a}"]`)[0]
            )),
            sc(() => {
              e.slideTo(o)
            }))
          : e.slideTo(o)
        : o > e.slides.length - r
        ? (e.loopFix(),
          (o = e.getSlideIndex(
            ln(n, `${u}[data-swiper-slide-index="${a}"]`)[0]
          )),
          sc(() => {
            e.slideTo(o)
          }))
        : e.slideTo(o)
  } else e.slideTo(o)
}
var CT = {
  slideTo: yT,
  slideToLoop: wT,
  slideNext: ST,
  slidePrev: xT,
  slideReset: TT,
  slideToClosest: ET,
  slideToClickedSlide: PT
}
function LT(e) {
  const t = this,
    { params: n, slidesEl: r } = t
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return
  const o = () => {
      ln(r, `.${n.slideClass}, swiper-slide`).forEach((y, g) => {
        y.setAttribute('data-swiper-slide-index', g)
      })
    },
    a = t.grid && n.grid && n.grid.rows > 1,
    u = n.slidesPerGroup * (a ? n.grid.rows : 1),
    d = t.slides.length % u !== 0,
    c = a && t.slides.length % n.grid.rows !== 0,
    p = (m) => {
      for (let y = 0; y < m; y += 1) {
        const g = t.isElement
          ? ac('swiper-slide', [n.slideBlankClass])
          : ac('div', [n.slideClass, n.slideBlankClass])
        t.slidesEl.append(g)
      }
    }
  if (d) {
    if (n.loopAddBlankSlides) {
      const m = u - (t.slides.length % u)
      p(m), t.recalcSlides(), t.updateSlides()
    } else
      ha(
        'Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
      )
    o()
  } else if (c) {
    if (n.loopAddBlankSlides) {
      const m = n.grid.rows - (t.slides.length % n.grid.rows)
      p(m), t.recalcSlides(), t.updateSlides()
    } else
      ha(
        'Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
      )
    o()
  } else o()
  t.loopFix({
    slideRealIndex: e,
    direction: n.centeredSlides ? void 0 : 'next'
  })
}
function kT(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: r,
    setTranslate: o,
    activeSlideIndex: a,
    byController: u,
    byMousewheel: d
  } = e === void 0 ? {} : e
  const c = this
  if (!c.params.loop) return
  c.emit('beforeLoopFix')
  const {
      slides: p,
      allowSlidePrev: m,
      allowSlideNext: y,
      slidesEl: g,
      params: w
    } = c,
    { centeredSlides: T } = w
  if (
    ((c.allowSlidePrev = !0),
    (c.allowSlideNext = !0),
    c.virtual && w.virtual.enabled)
  ) {
    n &&
      (!w.centeredSlides && c.snapIndex === 0
        ? c.slideTo(c.virtual.slides.length, 0, !1, !0)
        : w.centeredSlides && c.snapIndex < w.slidesPerView
        ? c.slideTo(c.virtual.slides.length + c.snapIndex, 0, !1, !0)
        : c.snapIndex === c.snapGrid.length - 1 &&
          c.slideTo(c.virtual.slidesBefore, 0, !1, !0)),
      (c.allowSlidePrev = m),
      (c.allowSlideNext = y),
      c.emit('loopFix')
    return
  }
  let E = w.slidesPerView
  E === 'auto'
    ? (E = c.slidesPerViewDynamic())
    : ((E = Math.ceil(parseFloat(w.slidesPerView, 10))),
      T && E % 2 === 0 && (E = E + 1))
  const k = w.slidesPerGroupAuto ? E : w.slidesPerGroup
  let S = k
  S % k !== 0 && (S += k - (S % k)),
    (S += w.loopAdditionalSlides),
    (c.loopedSlides = S)
  const v = c.grid && w.grid && w.grid.rows > 1
  p.length < E + S
    ? ha(
        'Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters'
      )
    : v &&
      w.grid.fill === 'row' &&
      ha(
        'Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`'
      )
  const _ = [],
    P = []
  let C = c.activeIndex
  typeof a > 'u'
    ? (a = c.getSlideIndex(
        p.filter((Z) => Z.classList.contains(w.slideActiveClass))[0]
      ))
    : (C = a)
  const b = r === 'next' || !r,
    M = r === 'prev' || !r
  let O = 0,
    A = 0
  const z = v ? Math.ceil(p.length / w.grid.rows) : p.length,
    F = (v ? p[a].column : a) + (T && typeof o > 'u' ? -E / 2 + 0.5 : 0)
  if (F < S) {
    O = Math.max(S - F, k)
    for (let Z = 0; Z < S - F; Z += 1) {
      const V = Z - Math.floor(Z / z) * z
      if (v) {
        const Y = z - V - 1
        for (let X = p.length - 1; X >= 0; X -= 1)
          p[X].column === Y && _.push(X)
      } else _.push(z - V - 1)
    }
  } else if (F + E > z - S) {
    A = Math.max(F - (z - S * 2), k)
    for (let Z = 0; Z < A; Z += 1) {
      const V = Z - Math.floor(Z / z) * z
      v
        ? p.forEach((Y, X) => {
            Y.column === V && P.push(X)
          })
        : P.push(V)
    }
  }
  if (
    ((c.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      c.__preventObserver__ = !1
    }),
    M &&
      _.forEach((Z) => {
        ;(p[Z].swiperLoopMoveDOM = !0),
          g.prepend(p[Z]),
          (p[Z].swiperLoopMoveDOM = !1)
      }),
    b &&
      P.forEach((Z) => {
        ;(p[Z].swiperLoopMoveDOM = !0),
          g.append(p[Z]),
          (p[Z].swiperLoopMoveDOM = !1)
      }),
    c.recalcSlides(),
    w.slidesPerView === 'auto'
      ? c.updateSlides()
      : v &&
        ((_.length > 0 && M) || (P.length > 0 && b)) &&
        c.slides.forEach((Z, V) => {
          c.grid.updateSlide(V, Z, c.slides)
        }),
    w.watchSlidesProgress && c.updateSlidesOffset(),
    n)
  ) {
    if (_.length > 0 && M) {
      if (typeof t > 'u') {
        const Z = c.slidesGrid[C],
          Y = c.slidesGrid[C + O] - Z
        d
          ? c.setTranslate(c.translate - Y)
          : (c.slideTo(C + Math.ceil(O), 0, !1, !0),
            o &&
              ((c.touchEventsData.startTranslate =
                c.touchEventsData.startTranslate - Y),
              (c.touchEventsData.currentTranslate =
                c.touchEventsData.currentTranslate - Y)))
      } else if (o) {
        const Z = v ? _.length / w.grid.rows : _.length
        c.slideTo(c.activeIndex + Z, 0, !1, !0),
          (c.touchEventsData.currentTranslate = c.translate)
      }
    } else if (P.length > 0 && b)
      if (typeof t > 'u') {
        const Z = c.slidesGrid[C],
          Y = c.slidesGrid[C - A] - Z
        d
          ? c.setTranslate(c.translate - Y)
          : (c.slideTo(C - A, 0, !1, !0),
            o &&
              ((c.touchEventsData.startTranslate =
                c.touchEventsData.startTranslate - Y),
              (c.touchEventsData.currentTranslate =
                c.touchEventsData.currentTranslate - Y)))
      } else {
        const Z = v ? P.length / w.grid.rows : P.length
        c.slideTo(c.activeIndex - Z, 0, !1, !0)
      }
  }
  if (
    ((c.allowSlidePrev = m),
    (c.allowSlideNext = y),
    c.controller && c.controller.control && !u)
  ) {
    const Z = {
      slideRealIndex: t,
      direction: r,
      setTranslate: o,
      activeSlideIndex: a,
      byController: !0
    }
    Array.isArray(c.controller.control)
      ? c.controller.control.forEach((V) => {
          !V.destroyed &&
            V.params.loop &&
            V.loopFix({
              ...Z,
              slideTo: V.params.slidesPerView === w.slidesPerView ? n : !1
            })
        })
      : c.controller.control instanceof c.constructor &&
        c.controller.control.params.loop &&
        c.controller.control.loopFix({
          ...Z,
          slideTo:
            c.controller.control.params.slidesPerView === w.slidesPerView
              ? n
              : !1
        })
  }
  c.emit('loopFix')
}
function MT() {
  const e = this,
    { params: t, slidesEl: n } = e
  if (!t.loop || (e.virtual && e.params.virtual.enabled)) return
  e.recalcSlides()
  const r = []
  e.slides.forEach((o) => {
    const a =
      typeof o.swiperSlideIndex > 'u'
        ? o.getAttribute('data-swiper-slide-index') * 1
        : o.swiperSlideIndex
    r[a] = o
  }),
    e.slides.forEach((o) => {
      o.removeAttribute('data-swiper-slide-index')
    }),
    r.forEach((o) => {
      n.append(o)
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0)
}
var bT = { loopCreate: LT, loopFix: kT, loopDestroy: MT }
function OT(e) {
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
function IT() {
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
var zT = { setGrabCursor: OT, unsetGrabCursor: IT }
function NT(e, t) {
  t === void 0 && (t = this)
  function n(r) {
    if (!r || r === cn() || r === vt()) return null
    r.assignedSlot && (r = r.assignedSlot)
    const o = r.closest(e)
    return !o && !r.getRootNode ? null : o || n(r.getRootNode().host)
  }
  return n(t)
}
function op(e, t, n) {
  const r = vt(),
    { params: o } = e,
    a = o.edgeSwipeDetection,
    u = o.edgeSwipeThreshold
  return a && (n <= u || n >= r.innerWidth - u)
    ? a === 'prevent'
      ? (t.preventDefault(), !0)
      : !1
    : !0
}
function AT(e) {
  const t = this,
    n = cn()
  let r = e
  r.originalEvent && (r = r.originalEvent)
  const o = t.touchEventsData
  if (r.type === 'pointerdown') {
    if (o.pointerId !== null && o.pointerId !== r.pointerId) return
    o.pointerId = r.pointerId
  } else
    r.type === 'touchstart' &&
      r.targetTouches.length === 1 &&
      (o.touchId = r.targetTouches[0].identifier)
  if (r.type === 'touchstart') {
    op(t, r, r.targetTouches[0].pageX)
    return
  }
  const { params: a, touches: u, enabled: d } = t
  if (
    !d ||
    (!a.simulateTouch && r.pointerType === 'mouse') ||
    (t.animating && a.preventInteractionOnTransition)
  )
    return
  !t.animating && a.cssMode && a.loop && t.loopFix()
  let c = r.target
  if (
    (a.touchEventsTarget === 'wrapper' && !$x(c, t.wrapperEl)) ||
    ('which' in r && r.which === 3) ||
    ('button' in r && r.button > 0) ||
    (o.isTouched && o.isMoved)
  )
    return
  const p = !!a.noSwipingClass && a.noSwipingClass !== '',
    m = r.composedPath ? r.composedPath() : r.path
  p && r.target && r.target.shadowRoot && m && (c = m[0])
  const y = a.noSwipingSelector ? a.noSwipingSelector : `.${a.noSwipingClass}`,
    g = !!(r.target && r.target.shadowRoot)
  if (a.noSwiping && (g ? NT(y, c) : c.closest(y))) {
    t.allowClick = !0
    return
  }
  if (a.swipeHandler && !c.closest(a.swipeHandler)) return
  ;(u.currentX = r.pageX), (u.currentY = r.pageY)
  const w = u.currentX,
    T = u.currentY
  if (!op(t, r, w)) return
  Object.assign(o, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }),
    (u.startX = w),
    (u.startY = T),
    (o.touchStartTime = fa()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    a.threshold > 0 && (o.allowThresholdMove = !1)
  let E = !0
  c.matches(o.focusableElements) &&
    ((E = !1), c.nodeName === 'SELECT' && (o.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(o.focusableElements) &&
      n.activeElement !== c &&
      (r.pointerType === 'mouse' ||
        (r.pointerType !== 'mouse' && !c.matches(o.focusableElements))) &&
      n.activeElement.blur()
  const k = E && t.allowTouchMove && a.touchStartPreventDefault
  ;(a.touchStartForcePreventDefault || k) &&
    !c.isContentEditable &&
    r.preventDefault(),
    a.freeMode &&
      a.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !a.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit('touchStart', r)
}
function RT(e) {
  const t = cn(),
    n = this,
    r = n.touchEventsData,
    { params: o, touches: a, rtlTranslate: u, enabled: d } = n
  if (!d || (!o.simulateTouch && e.pointerType === 'mouse')) return
  let c = e
  if (
    (c.originalEvent && (c = c.originalEvent),
    c.type === 'pointermove' &&
      (r.touchId !== null || c.pointerId !== r.pointerId))
  )
    return
  let p
  if (c.type === 'touchmove') {
    if (
      ((p = [...c.changedTouches].filter((b) => b.identifier === r.touchId)[0]),
      !p || p.identifier !== r.touchId)
    )
      return
  } else p = c
  if (!r.isTouched) {
    r.startMoving && r.isScrolling && n.emit('touchMoveOpposite', c)
    return
  }
  const m = p.pageX,
    y = p.pageY
  if (c.preventedByNestedSwiper) {
    ;(a.startX = m), (a.startY = y)
    return
  }
  if (!n.allowTouchMove) {
    c.target.matches(r.focusableElements) || (n.allowClick = !1),
      r.isTouched &&
        (Object.assign(a, { startX: m, startY: y, currentX: m, currentY: y }),
        (r.touchStartTime = fa()))
    return
  }
  if (o.touchReleaseOnEdges && !o.loop) {
    if (n.isVertical()) {
      if (
        (y < a.startY && n.translate <= n.maxTranslate()) ||
        (y > a.startY && n.translate >= n.minTranslate())
      ) {
        ;(r.isTouched = !1), (r.isMoved = !1)
        return
      }
    } else if (
      (m < a.startX && n.translate <= n.maxTranslate()) ||
      (m > a.startX && n.translate >= n.minTranslate())
    )
      return
  }
  if (
    (t.activeElement &&
      t.activeElement.matches(r.focusableElements) &&
      t.activeElement !== c.target &&
      c.pointerType !== 'mouse' &&
      t.activeElement.blur(),
    t.activeElement &&
      c.target === t.activeElement &&
      c.target.matches(r.focusableElements))
  ) {
    ;(r.isMoved = !0), (n.allowClick = !1)
    return
  }
  r.allowTouchCallbacks && n.emit('touchMove', c),
    (a.previousX = a.currentX),
    (a.previousY = a.currentY),
    (a.currentX = m),
    (a.currentY = y)
  const g = a.currentX - a.startX,
    w = a.currentY - a.startY
  if (n.params.threshold && Math.sqrt(g ** 2 + w ** 2) < n.params.threshold)
    return
  if (typeof r.isScrolling > 'u') {
    let b
    ;(n.isHorizontal() && a.currentY === a.startY) ||
    (n.isVertical() && a.currentX === a.startX)
      ? (r.isScrolling = !1)
      : g * g + w * w >= 25 &&
        ((b = (Math.atan2(Math.abs(w), Math.abs(g)) * 180) / Math.PI),
        (r.isScrolling = n.isHorizontal()
          ? b > o.touchAngle
          : 90 - b > o.touchAngle))
  }
  if (
    (r.isScrolling && n.emit('touchMoveOpposite', c),
    typeof r.startMoving > 'u' &&
      (a.currentX !== a.startX || a.currentY !== a.startY) &&
      (r.startMoving = !0),
    r.isScrolling ||
      (c.type === 'touchmove' && r.preventTouchMoveFromPointerMove))
  ) {
    r.isTouched = !1
    return
  }
  if (!r.startMoving) return
  ;(n.allowClick = !1),
    !o.cssMode && c.cancelable && c.preventDefault(),
    o.touchMoveStopPropagation && !o.nested && c.stopPropagation()
  let T = n.isHorizontal() ? g : w,
    E = n.isHorizontal() ? a.currentX - a.previousX : a.currentY - a.previousY
  o.oneWayMovement &&
    ((T = Math.abs(T) * (u ? 1 : -1)), (E = Math.abs(E) * (u ? 1 : -1))),
    (a.diff = T),
    (T *= o.touchRatio),
    u && ((T = -T), (E = -E))
  const k = n.touchesDirection
  ;(n.swipeDirection = T > 0 ? 'prev' : 'next'),
    (n.touchesDirection = E > 0 ? 'prev' : 'next')
  const S = n.params.loop && !o.cssMode,
    v =
      (n.touchesDirection === 'next' && n.allowSlideNext) ||
      (n.touchesDirection === 'prev' && n.allowSlidePrev)
  if (!r.isMoved) {
    if (
      (S && v && n.loopFix({ direction: n.swipeDirection }),
      (r.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const b = new window.CustomEvent('transitionend', {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 }
      })
      n.wrapperEl.dispatchEvent(b)
    }
    ;(r.allowMomentumBounce = !1),
      o.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit('sliderFirstMove', c)
  }
  let _
  if (
    (new Date().getTime(),
    r.isMoved &&
      r.allowThresholdMove &&
      k !== n.touchesDirection &&
      S &&
      v &&
      Math.abs(T) >= 1)
  ) {
    Object.assign(a, {
      startX: m,
      startY: y,
      currentX: m,
      currentY: y,
      startTranslate: r.currentTranslate
    }),
      (r.loopSwapReset = !0),
      (r.startTranslate = r.currentTranslate)
    return
  }
  n.emit('sliderMove', c),
    (r.isMoved = !0),
    (r.currentTranslate = T + r.startTranslate)
  let P = !0,
    C = o.resistanceRatio
  if (
    (o.touchReleaseOnEdges && (C = 0),
    T > 0
      ? (S &&
          v &&
          !_ &&
          r.allowThresholdMove &&
          r.currentTranslate >
            (o.centeredSlides
              ? n.minTranslate() -
                n.slidesSizesGrid[n.activeIndex + 1] -
                (o.slidesPerView !== 'auto' &&
                n.slides.length - o.slidesPerView >= 2
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
          ((P = !1),
          o.resistance &&
            (r.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + r.startTranslate + T) ** C)))
      : T < 0 &&
        (S &&
          v &&
          !_ &&
          r.allowThresholdMove &&
          r.currentTranslate <
            (o.centeredSlides
              ? n.maxTranslate() +
                n.slidesSizesGrid[n.slidesSizesGrid.length - 1] +
                n.params.spaceBetween +
                (o.slidesPerView !== 'auto' &&
                n.slides.length - o.slidesPerView >= 2
                  ? n.slidesSizesGrid[n.slidesSizesGrid.length - 1] +
                    n.params.spaceBetween
                  : 0)
              : n.maxTranslate()) &&
          n.loopFix({
            direction: 'next',
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (o.slidesPerView === 'auto'
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(o.slidesPerView, 10)))
          }),
        r.currentTranslate < n.maxTranslate() &&
          ((P = !1),
          o.resistance &&
            (r.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - r.startTranslate - T) ** C))),
    P && (c.preventedByNestedSwiper = !0),
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
    o.threshold > 0)
  )
    if (Math.abs(T) > o.threshold || r.allowThresholdMove) {
      if (!r.allowThresholdMove) {
        ;(r.allowThresholdMove = !0),
          (a.startX = a.currentX),
          (a.startY = a.currentY),
          (r.currentTranslate = r.startTranslate),
          (a.diff = n.isHorizontal()
            ? a.currentX - a.startX
            : a.currentY - a.startY)
        return
      }
    } else {
      r.currentTranslate = r.startTranslate
      return
    }
  !o.followFinger ||
    o.cssMode ||
    (((o.freeMode && o.freeMode.enabled && n.freeMode) ||
      o.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    o.freeMode && o.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(r.currentTranslate),
    n.setTranslate(r.currentTranslate))
}
function DT(e) {
  const t = this,
    n = t.touchEventsData
  let r = e
  r.originalEvent && (r = r.originalEvent)
  let o
  if (r.type === 'touchend' || r.type === 'touchcancel') {
    if (
      ((o = [...r.changedTouches].filter((C) => C.identifier === n.touchId)[0]),
      !o || o.identifier !== n.touchId)
    )
      return
  } else {
    if (n.touchId !== null || r.pointerId !== n.pointerId) return
    o = r
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
    params: u,
    touches: d,
    rtlTranslate: c,
    slidesGrid: p,
    enabled: m
  } = t
  if (!m || (!u.simulateTouch && r.pointerType === 'mouse')) return
  if (
    (n.allowTouchCallbacks && t.emit('touchEnd', r),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && u.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1)
    return
  }
  u.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1)
  const y = fa(),
    g = y - n.touchStartTime
  if (t.allowClick) {
    const C = r.path || (r.composedPath && r.composedPath())
    t.updateClickedSlide((C && C[0]) || r.target, C),
      t.emit('tap click', r),
      g < 300 && y - n.lastClickTime < 300 && t.emit('doubleTap doubleClick', r)
  }
  if (
    ((n.lastClickTime = fa()),
    sc(() => {
      t.destroyed || (t.allowClick = !0)
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      (d.diff === 0 && !n.loopSwapReset) ||
      (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
  ) {
    ;(n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1)
    return
  }
  ;(n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1)
  let w
  if (
    (u.followFinger
      ? (w = c ? t.translate : -t.translate)
      : (w = -n.currentTranslate),
    u.cssMode)
  )
    return
  if (u.freeMode && u.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: w })
    return
  }
  const T = w >= -t.maxTranslate() && !t.params.loop
  let E = 0,
    k = t.slidesSizesGrid[0]
  for (
    let C = 0;
    C < p.length;
    C += C < u.slidesPerGroupSkip ? 1 : u.slidesPerGroup
  ) {
    const b = C < u.slidesPerGroupSkip - 1 ? 1 : u.slidesPerGroup
    typeof p[C + b] < 'u'
      ? (T || (w >= p[C] && w < p[C + b])) && ((E = C), (k = p[C + b] - p[C]))
      : (T || w >= p[C]) && ((E = C), (k = p[p.length - 1] - p[p.length - 2]))
  }
  let S = null,
    v = null
  u.rewind &&
    (t.isBeginning
      ? (v =
          u.virtual && u.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (S = 0))
  const _ = (w - p[E]) / k,
    P = E < u.slidesPerGroupSkip - 1 ? 1 : u.slidesPerGroup
  if (g > u.longSwipesMs) {
    if (!u.longSwipes) {
      t.slideTo(t.activeIndex)
      return
    }
    t.swipeDirection === 'next' &&
      (_ >= u.longSwipesRatio
        ? t.slideTo(u.rewind && t.isEnd ? S : E + P)
        : t.slideTo(E)),
      t.swipeDirection === 'prev' &&
        (_ > 1 - u.longSwipesRatio
          ? t.slideTo(E + P)
          : v !== null && _ < 0 && Math.abs(_) > u.longSwipesRatio
          ? t.slideTo(v)
          : t.slideTo(E))
  } else {
    if (!u.shortSwipes) {
      t.slideTo(t.activeIndex)
      return
    }
    t.navigation &&
    (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl)
      ? r.target === t.navigation.nextEl
        ? t.slideTo(E + P)
        : t.slideTo(E)
      : (t.swipeDirection === 'next' && t.slideTo(S !== null ? S : E + P),
        t.swipeDirection === 'prev' && t.slideTo(v !== null ? v : E))
  }
}
function sp() {
  const e = this,
    { params: t, el: n } = e
  if (n && n.offsetWidth === 0) return
  t.breakpoints && e.setBreakpoint()
  const { allowSlideNext: r, allowSlidePrev: o, snapGrid: a } = e,
    u = e.virtual && e.params.virtual.enabled
  ;(e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses()
  const d = u && t.loop
  ;(t.slidesPerView === 'auto' || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !d
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !u
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
    (e.allowSlidePrev = o),
    (e.allowSlideNext = r),
    e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
}
function jT(e) {
  const t = this
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())))
}
function BT() {
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
  let o
  const a = e.maxTranslate() - e.minTranslate()
  a === 0 ? (o = 0) : (o = (e.translate - e.minTranslate()) / a),
    o !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit('setTranslate', e.translate, !1)
}
function FT(e) {
  const t = this
  Bs(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== 'auto' && !t.params.autoHeight)
    ) && t.update()
}
function $T() {
  const e = this
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0),
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = 'auto'))
}
const Cv = (e, t) => {
  const n = cn(),
    { params: r, el: o, wrapperEl: a, device: u } = e,
    d = !!r.nested,
    c = t === 'on' ? 'addEventListener' : 'removeEventListener',
    p = t
  !o ||
    typeof o == 'string' ||
    (n[c]('touchstart', e.onDocumentTouchStart, { passive: !1, capture: d }),
    o[c]('touchstart', e.onTouchStart, { passive: !1 }),
    o[c]('pointerdown', e.onTouchStart, { passive: !1 }),
    n[c]('touchmove', e.onTouchMove, { passive: !1, capture: d }),
    n[c]('pointermove', e.onTouchMove, { passive: !1, capture: d }),
    n[c]('touchend', e.onTouchEnd, { passive: !0 }),
    n[c]('pointerup', e.onTouchEnd, { passive: !0 }),
    n[c]('pointercancel', e.onTouchEnd, { passive: !0 }),
    n[c]('touchcancel', e.onTouchEnd, { passive: !0 }),
    n[c]('pointerout', e.onTouchEnd, { passive: !0 }),
    n[c]('pointerleave', e.onTouchEnd, { passive: !0 }),
    n[c]('contextmenu', e.onTouchEnd, { passive: !0 }),
    (r.preventClicks || r.preventClicksPropagation) &&
      o[c]('click', e.onClick, !0),
    r.cssMode && a[c]('scroll', e.onScroll),
    r.updateOnWindowResize
      ? e[p](
          u.ios || u.android
            ? 'resize orientationchange observerUpdate'
            : 'resize observerUpdate',
          sp,
          !0
        )
      : e[p]('observerUpdate', sp, !0),
    o[c]('load', e.onLoad, { capture: !0 }))
}
function ZT() {
  const e = this,
    { params: t } = e
  ;(e.onTouchStart = AT.bind(e)),
    (e.onTouchMove = RT.bind(e)),
    (e.onTouchEnd = DT.bind(e)),
    (e.onDocumentTouchStart = $T.bind(e)),
    t.cssMode && (e.onScroll = BT.bind(e)),
    (e.onClick = jT.bind(e)),
    (e.onLoad = FT.bind(e)),
    Cv(e, 'on')
}
function HT() {
  Cv(this, 'off')
}
var qT = { attachEvents: ZT, detachEvents: HT }
const ap = (e, t) => e.grid && t.grid && t.grid.rows > 1
function VT() {
  const e = this,
    { realIndex: t, initialized: n, params: r, el: o } = e,
    a = r.breakpoints
  if (!a || (a && Object.keys(a).length === 0)) return
  const u = e.getBreakpoint(a, e.params.breakpointsBase, e.el)
  if (!u || e.currentBreakpoint === u) return
  const c = (u in a ? a[u] : void 0) || e.originalParams,
    p = ap(e, r),
    m = ap(e, c),
    y = e.params.grabCursor,
    g = c.grabCursor,
    w = r.enabled
  p && !m
    ? (o.classList.remove(
        `${r.containerModifierClass}grid`,
        `${r.containerModifierClass}grid-column`
      ),
      e.emitContainerClasses())
    : !p &&
      m &&
      (o.classList.add(`${r.containerModifierClass}grid`),
      ((c.grid.fill && c.grid.fill === 'column') ||
        (!c.grid.fill && r.grid.fill === 'column')) &&
        o.classList.add(`${r.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    y && !g ? e.unsetGrabCursor() : !y && g && e.setGrabCursor(),
    ['navigation', 'pagination', 'scrollbar'].forEach((_) => {
      if (typeof c[_] > 'u') return
      const P = r[_] && r[_].enabled,
        C = c[_] && c[_].enabled
      P && !C && e[_].disable(), !P && C && e[_].enable()
    })
  const T = c.direction && c.direction !== r.direction,
    E = r.loop && (c.slidesPerView !== r.slidesPerView || T),
    k = r.loop
  T && n && e.changeDirection(), ut(e.params, c)
  const S = e.params.enabled,
    v = e.params.loop
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev
  }),
    w && !S ? e.disable() : !w && S && e.enable(),
    (e.currentBreakpoint = u),
    e.emit('_beforeBreakpoint', c),
    n &&
      (E
        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
        : !k && v
        ? (e.loopCreate(t), e.updateSlides())
        : k && !v && e.loopDestroy()),
    e.emit('breakpoint', c)
}
function WT(e, t, n) {
  if ((t === void 0 && (t = 'window'), !e || (t === 'container' && !n))) return
  let r = !1
  const o = vt(),
    a = t === 'window' ? o.innerHeight : n.clientHeight,
    u = Object.keys(e).map((d) => {
      if (typeof d == 'string' && d.indexOf('@') === 0) {
        const c = parseFloat(d.substr(1))
        return { value: a * c, point: d }
      }
      return { value: d, point: d }
    })
  u.sort((d, c) => parseInt(d.value, 10) - parseInt(c.value, 10))
  for (let d = 0; d < u.length; d += 1) {
    const { point: c, value: p } = u[d]
    t === 'window'
      ? o.matchMedia(`(min-width: ${p}px)`).matches && (r = c)
      : p <= n.clientWidth && (r = c)
  }
  return r || 'max'
}
var UT = { setBreakpoint: VT, getBreakpoint: WT }
function GT(e, t) {
  const n = []
  return (
    e.forEach((r) => {
      typeof r == 'object'
        ? Object.keys(r).forEach((o) => {
            r[o] && n.push(t + o)
          })
        : typeof r == 'string' && n.push(t + r)
    }),
    n
  )
}
function QT() {
  const e = this,
    { classNames: t, params: n, rtl: r, el: o, device: a } = e,
    u = GT(
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
        { android: a.android },
        { ios: a.ios },
        { 'css-mode': n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { 'watch-progress': n.watchSlidesProgress }
      ],
      n.containerModifierClass
    )
  t.push(...u), o.classList.add(...t), e.emitContainerClasses()
}
function KT() {
  const e = this,
    { el: t, classNames: n } = e
  !t ||
    typeof t == 'string' ||
    (t.classList.remove(...n), e.emitContainerClasses())
}
var YT = { addClasses: QT, removeClasses: KT }
function XT() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: r } = n
  if (r) {
    const o = e.slides.length - 1,
      a = e.slidesGrid[o] + e.slidesSizesGrid[o] + r * 2
    e.isLocked = e.size > a
  } else e.isLocked = e.snapGrid.length === 1
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock')
}
var JT = { checkOverflow: XT },
  uc = {
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
function eE(e, t) {
  return function (r) {
    r === void 0 && (r = {})
    const o = Object.keys(r)[0],
      a = r[o]
    if (typeof a != 'object' || a === null) {
      ut(t, r)
      return
    }
    if (
      (e[o] === !0 && (e[o] = { enabled: !0 }),
      o === 'navigation' &&
        e[o] &&
        e[o].enabled &&
        !e[o].prevEl &&
        !e[o].nextEl &&
        (e[o].auto = !0),
      ['pagination', 'scrollbar'].indexOf(o) >= 0 &&
        e[o] &&
        e[o].enabled &&
        !e[o].el &&
        (e[o].auto = !0),
      !(o in e && 'enabled' in a))
    ) {
      ut(t, r)
      return
    }
    typeof e[o] == 'object' && !('enabled' in e[o]) && (e[o].enabled = !0),
      e[o] || (e[o] = { enabled: !1 }),
      ut(t, r)
  }
}
const Jl = {
    eventsEmitter: Yx,
    update: lT,
    translate: pT,
    transition: _T,
    slide: CT,
    loop: bT,
    grabCursor: zT,
    events: qT,
    breakpoints: UT,
    checkOverflow: JT,
    classes: YT
  },
  eu = {}
let _d = class nn {
  constructor() {
    let t, n
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a]
    o.length === 1 &&
    o[0].constructor &&
    Object.prototype.toString.call(o[0]).slice(8, -1) === 'Object'
      ? (n = o[0])
      : ([t, n] = o),
      n || (n = {}),
      (n = ut({}, n)),
      t && !n.el && (n.el = t)
    const u = cn()
    if (
      n.el &&
      typeof n.el == 'string' &&
      u.querySelectorAll(n.el).length > 1
    ) {
      const m = []
      return (
        u.querySelectorAll(n.el).forEach((y) => {
          const g = ut({}, n, { el: y })
          m.push(new nn(g))
        }),
        m
      )
    }
    const d = this
    ;(d.__swiper__ = !0),
      (d.support = Tv()),
      (d.device = Ev({ userAgent: n.userAgent })),
      (d.browser = Gx()),
      (d.eventsListeners = {}),
      (d.eventsAnyListeners = []),
      (d.modules = [...d.__modules__]),
      n.modules && Array.isArray(n.modules) && d.modules.push(...n.modules)
    const c = {}
    d.modules.forEach((m) => {
      m({
        params: n,
        swiper: d,
        extendParams: eE(n, c),
        on: d.on.bind(d),
        once: d.once.bind(d),
        off: d.off.bind(d),
        emit: d.emit.bind(d)
      })
    })
    const p = ut({}, uc, c)
    return (
      (d.params = ut({}, p, eu, n)),
      (d.originalParams = ut({}, d.params)),
      (d.passedParams = ut({}, n)),
      d.params &&
        d.params.on &&
        Object.keys(d.params.on).forEach((m) => {
          d.on(m, d.params.on[m])
        }),
      d.params && d.params.onAny && d.onAny(d.params.onAny),
      Object.assign(d, {
        enabled: d.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return d.params.direction === 'horizontal'
        },
        isVertical() {
          return d.params.direction === 'vertical'
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
        allowSlideNext: d.params.allowSlideNext,
        allowSlidePrev: d.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: d.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null
        },
        allowClick: !0,
        allowTouchMove: d.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0
      }),
      d.emit('_swiper'),
      d.params.init && d.init(),
      d
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
      o = ln(n, `.${r.slideClass}, swiper-slide`),
      a = np(o[0])
    return np(t) - a
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
    t.slides = ln(n, `.${r.slideClass}, swiper-slide`)
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
    const o = r.minTranslate(),
      u = (r.maxTranslate() - o) * t + o
    r.translateTo(u, typeof n > 'u' ? 0 : n),
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
      const o = t.getSlideClasses(r)
      n.push({ slideEl: r, classNames: o }), t.emit('_slideClass', r, o)
    }),
      t.emit('_slideClasses', n)
  }
  slidesPerViewDynamic(t, n) {
    t === void 0 && (t = 'current'), n === void 0 && (n = !1)
    const r = this,
      {
        params: o,
        slides: a,
        slidesGrid: u,
        slidesSizesGrid: d,
        size: c,
        activeIndex: p
      } = r
    let m = 1
    if (typeof o.slidesPerView == 'number') return o.slidesPerView
    if (o.centeredSlides) {
      let y = a[p] ? Math.ceil(a[p].swiperSlideSize) : 0,
        g
      for (let w = p + 1; w < a.length; w += 1)
        a[w] &&
          !g &&
          ((y += Math.ceil(a[w].swiperSlideSize)), (m += 1), y > c && (g = !0))
      for (let w = p - 1; w >= 0; w -= 1)
        a[w] && !g && ((y += a[w].swiperSlideSize), (m += 1), y > c && (g = !0))
    } else if (t === 'current')
      for (let y = p + 1; y < a.length; y += 1)
        (n ? u[y] + d[y] - u[p] < c : u[y] - u[p] < c) && (m += 1)
    else for (let y = p - 1; y >= 0; y -= 1) u[p] - u[y] < c && (m += 1)
    return m
  }
  update() {
    const t = this
    if (!t || t.destroyed) return
    const { snapGrid: n, params: r } = t
    r.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((u) => {
        u.complete && Bs(t, u)
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses()
    function o() {
      const u = t.rtlTranslate ? t.translate * -1 : t.translate,
        d = Math.min(Math.max(u, t.maxTranslate()), t.minTranslate())
      t.setTranslate(d), t.updateActiveIndex(), t.updateSlidesClasses()
    }
    let a
    if (r.freeMode && r.freeMode.enabled && !r.cssMode)
      o(), r.autoHeight && t.updateAutoHeight()
    else {
      if (
        (r.slidesPerView === 'auto' || r.slidesPerView > 1) &&
        t.isEnd &&
        !r.centeredSlides
      ) {
        const u = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides
        a = t.slideTo(u.length - 1, 0, !1, !0)
      } else a = t.slideTo(t.activeIndex, 0, !1, !0)
      a || o()
    }
    r.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit('update')
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0)
    const r = this,
      o = r.params.direction
    return (
      t || (t = o === 'horizontal' ? 'vertical' : 'horizontal'),
      t === o ||
        (t !== 'horizontal' && t !== 'vertical') ||
        (r.el.classList.remove(`${r.params.containerModifierClass}${o}`),
        r.el.classList.add(`${r.params.containerModifierClass}${t}`),
        r.emitContainerClasses(),
        (r.params.direction = t),
        r.slides.forEach((a) => {
          t === 'vertical' ? (a.style.width = '') : (a.style.height = '')
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
    const o = () =>
      `.${(n.params.wrapperClass || '').trim().split(' ').join('.')}`
    let u =
      r && r.shadowRoot && r.shadowRoot.querySelector
        ? r.shadowRoot.querySelector(o())
        : ln(r, o())[0]
    return (
      !u &&
        n.params.createElements &&
        ((u = ac('div', n.params.wrapperClass)),
        r.append(u),
        ln(r, `.${n.params.slideClass}`).forEach((d) => {
          u.append(d)
        })),
      Object.assign(n, {
        el: r,
        wrapperEl: u,
        slidesEl:
          n.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : u,
        hostEl: n.isElement ? r.parentNode.host : r,
        mounted: !0,
        rtl: r.dir.toLowerCase() === 'rtl' || On(r, 'direction') === 'rtl',
        rtlTranslate:
          n.params.direction === 'horizontal' &&
          (r.dir.toLowerCase() === 'rtl' || On(r, 'direction') === 'rtl'),
        wrongRTL: On(u, 'display') === '-webkit-box'
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
    const o = [...n.el.querySelectorAll('[loading="lazy"]')]
    return (
      n.isElement && o.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
      o.forEach((a) => {
        a.complete
          ? Bs(n, a)
          : a.addEventListener('load', (u) => {
              Bs(n, u.target)
            })
      }),
      lc(n),
      (n.initialized = !0),
      lc(n),
      n.emit('init'),
      n.emit('afterInit'),
      n
    )
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0)
    const r = this,
      { params: o, el: a, wrapperEl: u, slides: d } = r
    return (
      typeof r.params > 'u' ||
        r.destroyed ||
        (r.emit('beforeDestroy'),
        (r.initialized = !1),
        r.detachEvents(),
        o.loop && r.loopDestroy(),
        n &&
          (r.removeClasses(),
          a && typeof a != 'string' && a.removeAttribute('style'),
          u && u.removeAttribute('style'),
          d &&
            d.length &&
            d.forEach((c) => {
              c.classList.remove(
                o.slideVisibleClass,
                o.slideFullyVisibleClass,
                o.slideActiveClass,
                o.slideNextClass,
                o.slidePrevClass
              ),
                c.removeAttribute('style'),
                c.removeAttribute('data-swiper-slide-index')
            })),
        r.emit('destroy'),
        Object.keys(r.eventsListeners).forEach((c) => {
          r.off(c)
        }),
        t !== !1 &&
          (r.el && typeof r.el != 'string' && (r.el.swiper = null), Dx(r)),
        (r.destroyed = !0)),
      null
    )
  }
  static extendDefaults(t) {
    ut(eu, t)
  }
  static get extendedDefaults() {
    return eu
  }
  static get defaults() {
    return uc
  }
  static installModule(t) {
    nn.prototype.__modules__ || (nn.prototype.__modules__ = [])
    const n = nn.prototype.__modules__
    typeof t == 'function' && n.indexOf(t) < 0 && n.push(t)
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => nn.installModule(n)), nn)
      : (nn.installModule(t), nn)
  }
}
Object.keys(Jl).forEach((e) => {
  Object.keys(Jl[e]).forEach((t) => {
    _d.prototype[t] = Jl[e][t]
  })
})
_d.use([Qx, Kx])
const Lv = [
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
function pi(e) {
  return (
    typeof e == 'object' &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === 'Object' &&
    !e.__swiper__
  )
}
function Xi(e, t) {
  const n = ['__proto__', 'constructor', 'prototype']
  Object.keys(t)
    .filter((r) => n.indexOf(r) < 0)
    .forEach((r) => {
      typeof e[r] > 'u'
        ? (e[r] = t[r])
        : pi(t[r]) && pi(e[r]) && Object.keys(t[r]).length > 0
        ? t[r].__swiper__
          ? (e[r] = t[r])
          : Xi(e[r], t[r])
        : (e[r] = t[r])
    })
}
function kv(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > 'u' &&
      typeof e.navigation.prevEl > 'u'
  )
}
function Mv(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > 'u'
}
function bv(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > 'u'
}
function Ov(e) {
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
function tE(e) {
  return (
    e === void 0 && (e = ''),
    e
      ? e.includes('swiper-wrapper')
        ? e
        : `swiper-wrapper ${e}`
      : 'swiper-wrapper'
  )
}
function nE(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: r,
    changedParams: o,
    nextEl: a,
    prevEl: u,
    scrollbarEl: d,
    paginationEl: c
  } = e
  const p = o.filter(
      (A) => A !== 'children' && A !== 'direction' && A !== 'wrapperClass'
    ),
    {
      params: m,
      pagination: y,
      navigation: g,
      scrollbar: w,
      virtual: T,
      thumbs: E
    } = t
  let k, S, v, _, P, C, b, M
  o.includes('thumbs') &&
    r.thumbs &&
    r.thumbs.swiper &&
    !r.thumbs.swiper.destroyed &&
    m.thumbs &&
    (!m.thumbs.swiper || m.thumbs.swiper.destroyed) &&
    (k = !0),
    o.includes('controller') &&
      r.controller &&
      r.controller.control &&
      m.controller &&
      !m.controller.control &&
      (S = !0),
    o.includes('pagination') &&
      r.pagination &&
      (r.pagination.el || c) &&
      (m.pagination || m.pagination === !1) &&
      y &&
      !y.el &&
      (v = !0),
    o.includes('scrollbar') &&
      r.scrollbar &&
      (r.scrollbar.el || d) &&
      (m.scrollbar || m.scrollbar === !1) &&
      w &&
      !w.el &&
      (_ = !0),
    o.includes('navigation') &&
      r.navigation &&
      (r.navigation.prevEl || u) &&
      (r.navigation.nextEl || a) &&
      (m.navigation || m.navigation === !1) &&
      g &&
      !g.prevEl &&
      !g.nextEl &&
      (P = !0)
  const O = (A) => {
    t[A] &&
      (t[A].destroy(),
      A === 'navigation'
        ? (t.isElement && (t[A].prevEl.remove(), t[A].nextEl.remove()),
          (m[A].prevEl = void 0),
          (m[A].nextEl = void 0),
          (t[A].prevEl = void 0),
          (t[A].nextEl = void 0))
        : (t.isElement && t[A].el.remove(),
          (m[A].el = void 0),
          (t[A].el = void 0)))
  }
  o.includes('loop') &&
    t.isElement &&
    (m.loop && !r.loop ? (C = !0) : !m.loop && r.loop ? (b = !0) : (M = !0)),
    p.forEach((A) => {
      if (pi(m[A]) && pi(r[A]))
        Object.assign(m[A], r[A]),
          (A === 'navigation' || A === 'pagination' || A === 'scrollbar') &&
            'enabled' in r[A] &&
            !r[A].enabled &&
            O(A)
      else {
        const z = r[A]
        ;(z === !0 || z === !1) &&
        (A === 'navigation' || A === 'pagination' || A === 'scrollbar')
          ? z === !1 && O(A)
          : (m[A] = r[A])
      }
    }),
    p.includes('controller') &&
      !S &&
      t.controller &&
      t.controller.control &&
      m.controller &&
      m.controller.control &&
      (t.controller.control = m.controller.control),
    o.includes('children') && n && T && m.virtual.enabled
      ? ((T.slides = n), T.update(!0))
      : o.includes('virtual') &&
        T &&
        m.virtual.enabled &&
        (n && (T.slides = n), T.update(!0)),
    o.includes('children') && n && m.loop && (M = !0),
    k && E.init() && E.update(!0),
    S && (t.controller.control = m.controller.control),
    v &&
      (t.isElement &&
        (!c || typeof c == 'string') &&
        ((c = document.createElement('div')),
        c.classList.add('swiper-pagination'),
        c.part.add('pagination'),
        t.el.appendChild(c)),
      c && (m.pagination.el = c),
      y.init(),
      y.render(),
      y.update()),
    _ &&
      (t.isElement &&
        (!d || typeof d == 'string') &&
        ((d = document.createElement('div')),
        d.classList.add('swiper-scrollbar'),
        d.part.add('scrollbar'),
        t.el.appendChild(d)),
      d && (m.scrollbar.el = d),
      w.init(),
      w.updateSize(),
      w.setTranslate()),
    P &&
      (t.isElement &&
        ((!a || typeof a == 'string') &&
          ((a = document.createElement('div')),
          a.classList.add('swiper-button-next'),
          (a.innerHTML = t.hostEl.constructor.nextButtonSvg),
          a.part.add('button-next'),
          t.el.appendChild(a)),
        (!u || typeof u == 'string') &&
          ((u = document.createElement('div')),
          u.classList.add('swiper-button-prev'),
          (u.innerHTML = t.hostEl.constructor.prevButtonSvg),
          u.part.add('button-prev'),
          t.el.appendChild(u))),
      a && (m.navigation.nextEl = a),
      u && (m.navigation.prevEl = u),
      g.init(),
      g.update()),
    o.includes('allowSlideNext') && (t.allowSlideNext = r.allowSlideNext),
    o.includes('allowSlidePrev') && (t.allowSlidePrev = r.allowSlidePrev),
    o.includes('direction') && t.changeDirection(r.direction, !1),
    (C || M) && t.loopDestroy(),
    (b || M) && t.loopCreate(),
    t.update()
}
function iE(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !0)
  const n = { on: {} },
    r = {},
    o = {}
  Xi(n, uc), (n._emitClasses = !0), (n.init = !1)
  const a = {},
    u = Lv.map((c) => c.replace(/_/, '')),
    d = Object.assign({}, e)
  return (
    Object.keys(d).forEach((c) => {
      typeof e[c] > 'u' ||
        (u.indexOf(c) >= 0
          ? pi(e[c])
            ? ((n[c] = {}), (o[c] = {}), Xi(n[c], e[c]), Xi(o[c], e[c]))
            : ((n[c] = e[c]), (o[c] = e[c]))
          : c.search(/on[A-Z]/) === 0 && typeof e[c] == 'function'
          ? t
            ? (r[`${c[2].toLowerCase()}${c.substr(3)}`] = e[c])
            : (n.on[`${c[2].toLowerCase()}${c.substr(3)}`] = e[c])
          : (a[c] = e[c]))
    }),
    ['navigation', 'pagination', 'scrollbar'].forEach((c) => {
      n[c] === !0 && (n[c] = {}), n[c] === !1 && delete n[c]
    }),
    { params: n, passedParams: o, rest: a, events: r }
  )
}
function rE(e, t) {
  let {
    el: n,
    nextEl: r,
    prevEl: o,
    paginationEl: a,
    scrollbarEl: u,
    swiper: d
  } = e
  kv(t) &&
    r &&
    o &&
    ((d.params.navigation.nextEl = r),
    (d.originalParams.navigation.nextEl = r),
    (d.params.navigation.prevEl = o),
    (d.originalParams.navigation.prevEl = o)),
    Mv(t) &&
      a &&
      ((d.params.pagination.el = a), (d.originalParams.pagination.el = a)),
    bv(t) &&
      u &&
      ((d.params.scrollbar.el = u), (d.originalParams.scrollbar.el = u)),
    d.init(n)
}
function oE(e, t, n, r, o) {
  const a = []
  if (!t) return a
  const u = (c) => {
    a.indexOf(c) < 0 && a.push(c)
  }
  if (n && r) {
    const c = r.map(o),
      p = n.map(o)
    c.join('') !== p.join('') && u('children'),
      r.length !== n.length && u('children')
  }
  return (
    Lv.filter((c) => c[0] === '_')
      .map((c) => c.replace(/_/, ''))
      .forEach((c) => {
        if (c in e && c in t)
          if (pi(e[c]) && pi(t[c])) {
            const p = Object.keys(e[c]),
              m = Object.keys(t[c])
            p.length !== m.length
              ? u(c)
              : (p.forEach((y) => {
                  e[c][y] !== t[c][y] && u(c)
                }),
                m.forEach((y) => {
                  e[c][y] !== t[c][y] && u(c)
                }))
          } else e[c] !== t[c] && u(c)
      }),
    a
  )
}
const sE = (e) => {
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
function pa() {
  return (
    (pa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    pa.apply(this, arguments)
  )
}
function Iv(e) {
  return (
    e.type && e.type.displayName && e.type.displayName.includes('SwiperSlide')
  )
}
function zv(e) {
  const t = []
  return (
    Se.Children.toArray(e).forEach((n) => {
      Iv(n)
        ? t.push(n)
        : n.props &&
          n.props.children &&
          zv(n.props.children).forEach((r) => t.push(r))
    }),
    t
  )
}
function aE(e) {
  const t = [],
    n = {
      'container-start': [],
      'container-end': [],
      'wrapper-start': [],
      'wrapper-end': []
    }
  return (
    Se.Children.toArray(e).forEach((r) => {
      if (Iv(r)) t.push(r)
      else if (r.props && r.props.slot && n[r.props.slot])
        n[r.props.slot].push(r)
      else if (r.props && r.props.children) {
        const o = zv(r.props.children)
        o.length > 0 ? o.forEach((a) => t.push(a)) : n['container-end'].push(r)
      } else n['container-end'].push(r)
    }),
    { slides: t, slots: n }
  )
}
function lE(e, t, n) {
  if (!n) return null
  const r = (m) => {
      let y = m
      return m < 0 ? (y = t.length + m) : y >= t.length && (y = y - t.length), y
    },
    o = e.isHorizontal()
      ? { [e.rtlTranslate ? 'right' : 'left']: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: a, to: u } = n,
    d = e.params.loop ? -t.length : 0,
    c = e.params.loop ? t.length * 2 : t.length,
    p = []
  for (let m = d; m < c; m += 1) m >= a && m <= u && p.push(t[r(m)])
  return p.map((m, y) =>
    Se.cloneElement(m, {
      swiper: e,
      style: o,
      key: m.props.virtualIndex || m.key || `slide-${y}`
    })
  )
}
function Kr(e, t) {
  return typeof window > 'u' ? H.useEffect(e, t) : H.useLayoutEffect(e, t)
}
const lp = H.createContext(null),
  uE = H.createContext(null),
  Nv = H.forwardRef(function (e, t) {
    let {
        className: n,
        tag: r = 'div',
        wrapperTag: o = 'div',
        children: a,
        onSwiper: u,
        ...d
      } = e === void 0 ? {} : e,
      c = !1
    const [p, m] = H.useState('swiper'),
      [y, g] = H.useState(null),
      [w, T] = H.useState(!1),
      E = H.useRef(!1),
      k = H.useRef(null),
      S = H.useRef(null),
      v = H.useRef(null),
      _ = H.useRef(null),
      P = H.useRef(null),
      C = H.useRef(null),
      b = H.useRef(null),
      M = H.useRef(null),
      { params: O, passedParams: A, rest: z, events: R } = iE(d),
      { slides: F, slots: Z } = aE(a),
      V = () => {
        T(!w)
      }
    Object.assign(O.on, {
      _containerClasses(U, $) {
        m($)
      }
    })
    const Y = () => {
      Object.assign(O.on, R), (c = !0)
      const U = { ...O }
      if (
        (delete U.wrapperClass,
        (S.current = new _d(U)),
        S.current.virtual && S.current.params.virtual.enabled)
      ) {
        S.current.virtual.slides = F
        const $ = {
          cache: !1,
          slides: F,
          renderExternal: g,
          renderExternalUpdate: !1
        }
        Xi(S.current.params.virtual, $), Xi(S.current.originalParams.virtual, $)
      }
    }
    k.current || Y(), S.current && S.current.on('_beforeBreakpoint', V)
    const X = () => {
        c ||
          !R ||
          !S.current ||
          Object.keys(R).forEach((U) => {
            S.current.on(U, R[U])
          })
      },
      pe = () => {
        !R ||
          !S.current ||
          Object.keys(R).forEach((U) => {
            S.current.off(U, R[U])
          })
      }
    H.useEffect(() => () => {
      S.current && S.current.off('_beforeBreakpoint', V)
    }),
      H.useEffect(() => {
        !E.current &&
          S.current &&
          (S.current.emitSlidesClasses(), (E.current = !0))
      }),
      Kr(() => {
        if ((t && (t.current = k.current), !!k.current))
          return (
            S.current.destroyed && Y(),
            rE(
              {
                el: k.current,
                nextEl: P.current,
                prevEl: C.current,
                paginationEl: b.current,
                scrollbarEl: M.current,
                swiper: S.current
              },
              O
            ),
            u && !S.current.destroyed && u(S.current),
            () => {
              S.current && !S.current.destroyed && S.current.destroy(!0, !1)
            }
          )
      }, []),
      Kr(() => {
        X()
        const U = oE(A, v.current, F, _.current, ($) => $.key)
        return (
          (v.current = A),
          (_.current = F),
          U.length &&
            S.current &&
            !S.current.destroyed &&
            nE({
              swiper: S.current,
              slides: F,
              passedParams: A,
              changedParams: U,
              nextEl: P.current,
              prevEl: C.current,
              scrollbarEl: M.current,
              paginationEl: b.current
            }),
          () => {
            pe()
          }
        )
      }),
      Kr(() => {
        sE(S.current)
      }, [y])
    function D() {
      return O.virtual
        ? lE(S.current, F, y)
        : F.map((U, $) =>
            Se.cloneElement(U, { swiper: S.current, swiperSlideIndex: $ })
          )
    }
    return Se.createElement(
      r,
      pa({ ref: k, className: Ov(`${p}${n ? ` ${n}` : ''}`) }, z),
      Se.createElement(
        uE.Provider,
        { value: S.current },
        Z['container-start'],
        Se.createElement(
          o,
          { className: tE(O.wrapperClass) },
          Z['wrapper-start'],
          D(),
          Z['wrapper-end']
        ),
        kv(O) &&
          Se.createElement(
            Se.Fragment,
            null,
            Se.createElement('div', {
              ref: C,
              className: 'swiper-button-prev'
            }),
            Se.createElement('div', { ref: P, className: 'swiper-button-next' })
          ),
        bv(O) &&
          Se.createElement('div', { ref: M, className: 'swiper-scrollbar' }),
        Mv(O) &&
          Se.createElement('div', { ref: b, className: 'swiper-pagination' }),
        Z['container-end']
      )
    )
  })
Nv.displayName = 'Swiper'
const Av = H.forwardRef(function (e, t) {
  let {
    tag: n = 'div',
    children: r,
    className: o = '',
    swiper: a,
    zoom: u,
    lazy: d,
    virtualIndex: c,
    swiperSlideIndex: p,
    ...m
  } = e === void 0 ? {} : e
  const y = H.useRef(null),
    [g, w] = H.useState('swiper-slide'),
    [T, E] = H.useState(!1)
  function k(P, C, b) {
    C === y.current && w(b)
  }
  Kr(() => {
    if (
      (typeof p < 'u' && (y.current.swiperSlideIndex = p),
      t && (t.current = y.current),
      !(!y.current || !a))
    ) {
      if (a.destroyed) {
        g !== 'swiper-slide' && w('swiper-slide')
        return
      }
      return (
        a.on('_slideClass', k),
        () => {
          a && a.off('_slideClass', k)
        }
      )
    }
  }),
    Kr(() => {
      a && y.current && !a.destroyed && w(a.getSlideClasses(y.current))
    }, [a])
  const S = {
      isActive: g.indexOf('swiper-slide-active') >= 0,
      isVisible: g.indexOf('swiper-slide-visible') >= 0,
      isPrev: g.indexOf('swiper-slide-prev') >= 0,
      isNext: g.indexOf('swiper-slide-next') >= 0
    },
    v = () => (typeof r == 'function' ? r(S) : r),
    _ = () => {
      E(!0)
    }
  return Se.createElement(
    n,
    pa(
      {
        ref: y,
        className: Ov(`${g}${o ? ` ${o}` : ''}`),
        'data-swiper-slide-index': c,
        onLoad: _
      },
      m
    ),
    u &&
      Se.createElement(
        lp.Provider,
        { value: S },
        Se.createElement(
          'div',
          {
            className: 'swiper-zoom-container',
            'data-swiper-zoom': typeof u == 'number' ? u : void 0
          },
          v(),
          d &&
            !T &&
            Se.createElement('div', { className: 'swiper-lazy-preloader' })
        )
      ),
    !u &&
      Se.createElement(
        lp.Provider,
        { value: S },
        v(),
        d &&
          !T &&
          Se.createElement('div', { className: 'swiper-lazy-preloader' })
      )
  )
})
Av.displayName = 'SwiperSlide'
function cE(e) {
  let { swiper: t, extendParams: n, on: r, emit: o, params: a } = e
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
  let u,
    d,
    c = a && a.autoplay ? a.autoplay.delay : 3e3,
    p = a && a.autoplay ? a.autoplay.delay : 3e3,
    m,
    y = new Date().getTime(),
    g,
    w,
    T,
    E,
    k,
    S,
    v
  function _(D) {
    !t ||
      t.destroyed ||
      !t.wrapperEl ||
      (D.target === t.wrapperEl &&
        (t.wrapperEl.removeEventListener('transitionend', _),
        !(v || (D.detail && D.detail.bySwiperTouchMove)) && z()))
  }
  const P = () => {
      if (t.destroyed || !t.autoplay.running) return
      t.autoplay.paused ? (g = !0) : g && ((p = m), (g = !1))
      const D = t.autoplay.paused ? m : y + p - new Date().getTime()
      ;(t.autoplay.timeLeft = D),
        o('autoplayTimeLeft', D, D / c),
        (d = requestAnimationFrame(() => {
          P()
        }))
    },
    C = () => {
      let D
      return (
        t.virtual && t.params.virtual.enabled
          ? (D = t.slides.filter(($) =>
              $.classList.contains('swiper-slide-active')
            )[0])
          : (D = t.slides[t.activeIndex]),
        D ? parseInt(D.getAttribute('data-swiper-autoplay'), 10) : void 0
      )
    },
    b = (D) => {
      if (t.destroyed || !t.autoplay.running) return
      cancelAnimationFrame(d), P()
      let U = typeof D > 'u' ? t.params.autoplay.delay : D
      ;(c = t.params.autoplay.delay), (p = t.params.autoplay.delay)
      const $ = C()
      !Number.isNaN($) &&
        $ > 0 &&
        typeof D > 'u' &&
        ((U = $), (c = $), (p = $)),
        (m = U)
      const Q = t.params.speed,
        te = () => {
          !t ||
            t.destroyed ||
            (t.params.autoplay.reverseDirection
              ? !t.isBeginning || t.params.loop || t.params.rewind
                ? (t.slidePrev(Q, !0, !0), o('autoplay'))
                : t.params.autoplay.stopOnLastSlide ||
                  (t.slideTo(t.slides.length - 1, Q, !0, !0), o('autoplay'))
              : !t.isEnd || t.params.loop || t.params.rewind
              ? (t.slideNext(Q, !0, !0), o('autoplay'))
              : t.params.autoplay.stopOnLastSlide ||
                (t.slideTo(0, Q, !0, !0), o('autoplay')),
            t.params.cssMode &&
              ((y = new Date().getTime()),
              requestAnimationFrame(() => {
                b()
              })))
        }
      return (
        U > 0
          ? (clearTimeout(u),
            (u = setTimeout(() => {
              te()
            }, U)))
          : requestAnimationFrame(() => {
              te()
            }),
        U
      )
    },
    M = () => {
      ;(y = new Date().getTime()),
        (t.autoplay.running = !0),
        b(),
        o('autoplayStart')
    },
    O = () => {
      ;(t.autoplay.running = !1),
        clearTimeout(u),
        cancelAnimationFrame(d),
        o('autoplayStop')
    },
    A = (D, U) => {
      if (t.destroyed || !t.autoplay.running) return
      clearTimeout(u), D || (S = !0)
      const $ = () => {
        o('autoplayPause'),
          t.params.autoplay.waitForTransition
            ? t.wrapperEl.addEventListener('transitionend', _)
            : z()
      }
      if (((t.autoplay.paused = !0), U)) {
        k && (m = t.params.autoplay.delay), (k = !1), $()
        return
      }
      ;(m = (m || t.params.autoplay.delay) - (new Date().getTime() - y)),
        !(t.isEnd && m < 0 && !t.params.loop) && (m < 0 && (m = 0), $())
    },
    z = () => {
      ;(t.isEnd && m < 0 && !t.params.loop) ||
        t.destroyed ||
        !t.autoplay.running ||
        ((y = new Date().getTime()),
        S ? ((S = !1), b(m)) : b(),
        (t.autoplay.paused = !1),
        o('autoplayResume'))
    },
    R = () => {
      if (t.destroyed || !t.autoplay.running) return
      const D = cn()
      D.visibilityState === 'hidden' && ((S = !0), A(!0)),
        D.visibilityState === 'visible' && z()
    },
    F = (D) => {
      D.pointerType === 'mouse' &&
        ((S = !0), (v = !0), !(t.animating || t.autoplay.paused) && A(!0))
    },
    Z = (D) => {
      D.pointerType === 'mouse' && ((v = !1), t.autoplay.paused && z())
    },
    V = () => {
      t.params.autoplay.pauseOnMouseEnter &&
        (t.el.addEventListener('pointerenter', F),
        t.el.addEventListener('pointerleave', Z))
    },
    Y = () => {
      t.el &&
        typeof t.el != 'string' &&
        (t.el.removeEventListener('pointerenter', F),
        t.el.removeEventListener('pointerleave', Z))
    },
    X = () => {
      cn().addEventListener('visibilitychange', R)
    },
    pe = () => {
      cn().removeEventListener('visibilitychange', R)
    }
  r('init', () => {
    t.params.autoplay.enabled && (V(), X(), M())
  }),
    r('destroy', () => {
      Y(), pe(), t.autoplay.running && O()
    }),
    r('_freeModeStaticRelease', () => {
      ;(T || S) && z()
    }),
    r('_freeModeNoMomentumRelease', () => {
      t.params.autoplay.disableOnInteraction ? O() : A(!0, !0)
    }),
    r('beforeTransitionStart', (D, U, $) => {
      t.destroyed ||
        !t.autoplay.running ||
        ($ || !t.params.autoplay.disableOnInteraction ? A(!0, !0) : O())
    }),
    r('sliderFirstMove', () => {
      if (!(t.destroyed || !t.autoplay.running)) {
        if (t.params.autoplay.disableOnInteraction) {
          O()
          return
        }
        ;(w = !0),
          (T = !1),
          (S = !1),
          (E = setTimeout(() => {
            ;(S = !0), (T = !0), A(!0)
          }, 200))
      }
    }),
    r('touchEnd', () => {
      if (!(t.destroyed || !t.autoplay.running || !w)) {
        if (
          (clearTimeout(E),
          clearTimeout(u),
          t.params.autoplay.disableOnInteraction)
        ) {
          ;(T = !1), (w = !1)
          return
        }
        T && t.params.cssMode && z(), (T = !1), (w = !1)
      }
    }),
    r('slideChange', () => {
      t.destroyed || !t.autoplay.running || (k = !0)
    }),
    Object.assign(t.autoplay, { start: M, stop: O, pause: A, resume: z })
}
const dE = '_modalContainer_3nhkb_1',
  fE = '_sidebar_3nhkb_23',
  hE = '_sidebarTitle_3nhkb_35',
  pE = '_sidebarMenu_3nhkb_45',
  mE = '_sidebarItem_3nhkb_57',
  gE = '_settingsContainer_3nhkb_87',
  vE = '_settingsTitle_3nhkb_99',
  _E = '_formItem_3nhkb_107',
  yE = '_formItemDouble_3nhkb_157',
  wE = '_upperLabel_3nhkb_169',
  SE = '_input__label_3nhkb_177',
  de = {
    modalContainer: dE,
    sidebar: fE,
    sidebarTitle: hE,
    sidebarMenu: pE,
    sidebarItem: mE,
    settingsContainer: gE,
    settingsTitle: vE,
    formItem: _E,
    formItemDouble: yE,
    upperLabel: wE,
    input__label: SE
  },
  xE = () => {
    const e = [
      {
        id: '1',
        name: 'Shipping Address',
        icon: N.jsx(av, { width: '15px', height: '15px' }),
        modalType: 'shipping'
      },
      {
        id: '2',
        name: 'Change Contact Information',
        icon: N.jsx(lv, { width: '15px', height: '15px' }),
        modalType: 'contact_information'
      },
      {
        id: '3',
        name: 'Change Product Quantities',
        icon: N.jsx(uv, { width: '15px', height: '15px' }),
        modalType: 'quantities'
      },
      {
        id: '4',
        name: 'Change Size or Variant',
        icon: N.jsx(cv, { width: '15px', height: '15px' }),
        modalType: 'size_or_variant'
      },
      {
        id: '5',
        name: 'Switch Product',
        icon: N.jsx(dv, { width: '15px', height: '15px' }),
        modalType: 'switch_product'
      },
      {
        id: '6',
        name: 'Upgrade Shipping Methods',
        icon: N.jsx(fv, { width: '15px', height: '15px' }),
        modalType: 'upgrade_shipping_method'
      },
      {
        id: '7',
        name: 'Change Payment Method',
        icon: N.jsx(hv, { width: '15px', height: '15px' }),
        modalType: 'change_payment_method'
      },
      {
        id: '9',
        name: 'Edit Gift Message',
        icon: N.jsx(pv, { width: '15px', height: '15px' }),
        modalType: 'edit_gift_message'
      }
    ]
    return N.jsxs('div', {
      className: de.modalContainer,
      children: [
        N.jsxs('div', {
          className: de.sidebar,
          children: [
            N.jsx('h3', {
              className: de.sidebarTitle,
              children: 'Change what you want'
            }),
            N.jsx('ul', {
              className: de.sidebarMenu,
              children:
                e == null
                  ? void 0
                  : e.map((t) =>
                      N.jsxs(
                        'div',
                        {
                          className: de.sidebarItem,
                          children: [
                            N.jsx('div', {
                              children: t == null ? void 0 : t.icon
                            }),
                            N.jsx('li', {
                              children: t == null ? void 0 : t.name
                            })
                          ]
                        },
                        t == null ? void 0 : t.id
                      )
                    )
            })
          ]
        }),
        N.jsx('div', {
          className: de.settingsContainer,
          children: N.jsx(TE, {})
        })
      ]
    })
  },
  TE = () =>
    N.jsxs('div', {
      className: de.singleModalContent,
      children: [
        N.jsx('div', {
          className: de.settingsTitle,
          children: N.jsx('p', { children: 'Shipping Address' })
        }),
        N.jsx('div', {
          className: de.settingsContent,
          children: N.jsxs('form', {
            action: '',
            className: de.formContainer,
            children: [
              N.jsxs('div', {
                className: `${de.upperLabel} ${de.formItem}`,
                children: [
                  N.jsx('input', {
                    type: 'Phone',
                    required: !0,
                    id: 'Phone',
                    placeholder: 'United States'
                  }),
                  N.jsx('label', {
                    className: de.input__label,
                    children: 'Country/Region'
                  })
                ]
              }),
              N.jsxs('div', {
                className: ` ${de.formItemDouble}`,
                children: [
                  N.jsxs('div', {
                    className: `${de.formItem} ${de.upperLabel}`,
                    children: [
                      N.jsx('input', { type: 'text', placeholder: 'John' }),
                      N.jsx('label', {
                        className: de.input__label,
                        children: 'First Name'
                      })
                    ]
                  }),
                  N.jsxs('div', {
                    className: `${de.formItem} ${de.upperLabel}`,
                    children: [
                      N.jsx('input', { type: 'text', placeholder: 'Doe' }),
                      N.jsx('label', {
                        className: de.input__label,
                        children: 'Last name'
                      })
                    ]
                  })
                ]
              }),
              N.jsxs('div', {
                className: `${de.upperLabel} ${de.formItem}`,
                children: [
                  N.jsx('input', {
                    type: 'Phone',
                    required: !0,
                    id: 'Phone',
                    placeholder: '+01-(555)-9998887'
                  }),
                  N.jsx('label', {
                    className: de.input__label,
                    children: 'Phone'
                  })
                ]
              }),
              N.jsxs('div', {
                className: `${de.formItem} ${de.upperLabel}`,
                children: [
                  N.jsx('input', {
                    type: 'text',
                    placeholder: 'Address',
                    required: !0,
                    id: 'address1'
                  }),
                  N.jsx('label', {
                    className: de.input__label,
                    children: 'Address'
                  })
                ]
              }),
              N.jsxs('div', {
                className: `${de.formItem} ${de.upperLabel}`,
                children: [
                  N.jsx('input', {
                    type: 'text',
                    placeholder: 'Apartment, suit, etc (Optional)',
                    required: !0,
                    id: 'address2'
                  }),
                  N.jsx('label', {
                    className: de.input__label,
                    children: 'Address (Optional)'
                  })
                ]
              }),
              N.jsxs('div', {
                className: ` ${de.formItemDouble}`,
                children: [
                  N.jsxs('div', {
                    className: `${de.formItem} ${de.upperLabel}`,
                    children: [
                      N.jsx('input', { type: 'text', placeholder: 'New work' }),
                      N.jsx('label', {
                        className: de.input__label,
                        children: 'City'
                      })
                    ]
                  }),
                  N.jsxs('div', {
                    className: `${de.formItem} ${de.upperLabel}`,
                    children: [
                      N.jsx('input', { type: 'text', placeholder: '10001' }),
                      N.jsx('label', {
                        className: de.input__label,
                        children: 'Zip/Postal Code'
                      })
                    ]
                  })
                ]
              })
            ]
          })
        })
      ]
    }),
  EE = () => {
    const [e, t] = H.useState(!1),
      n = () => {
        t(!0)
      },
      r = () => {
        t(!1)
      },
      o = [
        {
          id: '1',
          name: 'Shipping Address',
          icon: N.jsx(av, {}),
          modalType: 'shipping'
        },
        {
          id: '2',
          name: 'Change Contact Information',
          icon: N.jsx(lv, {}),
          modalType: 'contact_information'
        },
        {
          id: '3',
          name: 'Change Product Quantities',
          icon: N.jsx(uv, {}),
          modalType: 'quantities'
        },
        {
          id: '4',
          name: 'Change Size or Variant',
          icon: N.jsx(cv, {}),
          modalType: 'size_or_variant'
        },
        {
          id: '5',
          name: 'Switch Product',
          icon: N.jsx(dv, {}),
          modalType: 'switch_product'
        },
        {
          id: '6',
          name: 'Upgrade Shipping Methods',
          icon: N.jsx(fv, {}),
          modalType: 'upgrade_shipping_method'
        },
        {
          id: '7',
          name: 'Change Payment Method',
          icon: N.jsx(hv, {}),
          modalType: 'change_payment_method'
        },
        {
          id: '8',
          name: 'Apply Discount Code',
          icon: N.jsx(px, {}),
          modalType: 'apply_discount_code'
        },
        {
          id: '9',
          name: 'Edit Gift Message',
          icon: N.jsx(pv, {}),
          modalType: 'edit_gift_message'
        },
        {
          id: '10',
          name: 'Download Tax Receipt',
          icon: N.jsx(mx, {}),
          modalType: 'download_tax_receipt'
        },
        {
          id: '11',
          name: 'More',
          icon: N.jsx(gx, {}),
          modalType: 'settings_modal_btn',
          action: n
        }
      ],
      a = [
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
      u = [
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
    return N.jsxs('div', {
      className: ee.opt_order_edit_container,
      children: [
        N.jsx('div', { className: ee.header, children: 'ORDER EDIT' }),
        N.jsx('div', {
          className: ee.setting,
          children:
            o == null
              ? void 0
              : o.map((d) =>
                  N.jsxs(
                    'div',
                    {
                      className: ee.settings_box,
                      onClick: d.action,
                      children: [
                        N.jsx('div', {
                          className: ee.settings_icon,
                          children: d.icon
                        }),
                        N.jsx('p', {
                          className: ee.settings_label,
                          children: d.name
                        })
                      ]
                    },
                    d.id
                  )
                )
        }),
        e &&
          N.jsx('div', {
            className: ee.modalContainer,
            children: N.jsx('div', {
              className: ee.modalContent,
              children: N.jsx(xE, { handleCloseModal: r })
            })
          }),
        N.jsxs('div', {
          className: ee.content,
          children: [
            N.jsxs('div', {
              className: ee.orderSummary,
              children: [
                N.jsx('h2', { children: 'Order summary' }),
                N.jsx('div', {
                  className: ee.orderItems,
                  children:
                    a == null
                      ? void 0
                      : a.map((d) =>
                          N.jsxs(
                            'div',
                            {
                              className: ee.orderItem,
                              children: [
                                N.jsx('img', {
                                  src: d.image,
                                  alt: 'The Collection Snowboard: Hydrogen'
                                }),
                                N.jsxs('div', {
                                  className: ee.itemDetails,
                                  children: [
                                    N.jsxs('div', {
                                      children: [
                                        N.jsx('p', { children: d.name }),
                                        N.jsx('p', { children: d.variant })
                                      ]
                                    }),
                                    N.jsxs('span', {
                                      children: ['BDT ', d.price]
                                    })
                                  ]
                                })
                              ]
                            },
                            d.id
                          )
                        )
                }),
                N.jsxs('div', {
                  className: ee.priceDetails,
                  children: [
                    N.jsxs('p', {
                      children: [
                        N.jsx('strong', { children: 'Subtotal' }),
                        N.jsx('span', { children: 'BDT 2,374.95' })
                      ]
                    }),
                    N.jsxs('p', {
                      children: [
                        N.jsx('strong', { children: 'Cart Discounts' }),
                        N.jsx('span', { children: 'None' })
                      ]
                    }),
                    N.jsxs('p', {
                      children: [
                        N.jsx('strong', { children: 'Outstanding Payment' }),
                        N.jsx('span', { children: 'None' })
                      ]
                    })
                  ]
                }),
                N.jsxs('div', {
                  className: ee.shippingSection,
                  children: [
                    N.jsx('h3', { children: 'Shipping' }),
                    N.jsxs('div', {
                      className: ee.shippingOption,
                      children: [
                        N.jsx('input', {
                          type: 'radio',
                          id: 'standard',
                          name: 'shipping',
                          defaultChecked: !0
                        }),
                        N.jsx('label', {
                          htmlFor: 'standard',
                          children: 'Standard'
                        }),
                        N.jsx('span', { children: 'BDT 0.00' })
                      ]
                    }),
                    N.jsx('button', {
                      className: ee.saveButton,
                      children: 'Save Shipping Method'
                    })
                  ]
                }),
                N.jsxs('div', {
                  className: ee.taxSection,
                  children: [
                    N.jsxs('p', {
                      children: [
                        N.jsx('strong', { children: 'Applied Taxes' }),
                        N.jsx('span', { children: 'BDT 356.24' })
                      ]
                    }),
                    N.jsxs('p', {
                      children: [
                        N.jsx('strong', { children: 'VAT' }),
                        N.jsx('span', { children: 'BDT 356.24' })
                      ]
                    })
                  ]
                }),
                N.jsxs('div', {
                  className: ee.paymentDetails,
                  children: [
                    N.jsxs('p', {
                      children: [
                        N.jsx('strong', { children: 'Paid' }),
                        N.jsx('span', { children: 'BDT 2,731.19' })
                      ]
                    }),
                    N.jsxs('p', {
                      children: [
                        N.jsx('strong', { children: 'Net Payments' }),
                        N.jsx('span', { children: 'BDT 2,731.19' })
                      ]
                    })
                  ]
                }),
                N.jsx('button', {
                  className: ee.saveButton,
                  children: 'Pay Now'
                })
              ]
            }),
            N.jsxs('div', {
              className: ee.orderDetails,
              children: [
                N.jsx('h2', { children: 'Order Details' }),
                N.jsxs('div', {
                  className: `${ee.contactInformation} ${ee.orderDetailsItem}`,
                  children: [
                    N.jsx('p', {
                      className: ee.orderDetailsItemTitle,
                      children: 'Contact information'
                    }),
                    N.jsxs('div', {
                      className: ee.information,
                      children: [
                        N.jsx('p', { children: 'Ahmed Faysal' }),
                        N.jsx('p', { children: '+09748347889' }),
                        N.jsx('p', { children: 'ahmedfaysal01797@gmail.com' })
                      ]
                    })
                  ]
                }),
                N.jsxs('div', {
                  className: `${ee.shippingAddress} ${ee.orderDetailsItem}`,
                  children: [
                    N.jsx('p', {
                      className: ee.orderDetailsItemTitle,
                      children: 'Shipping address'
                    }),
                    N.jsxs('div', {
                      className: ee.information,
                      children: [
                        N.jsx('p', { children: 'Ahmed Faysal' }),
                        N.jsx('p', { children: 'Mirpur-1' }),
                        N.jsx('p', { children: ' Dhaka, 1216' }),
                        N.jsx('p', { children: 'BD' })
                      ]
                    })
                  ]
                }),
                N.jsxs('div', {
                  className: `${ee.billingAddress} ${ee.orderDetailsItem}`,
                  children: [
                    N.jsx('p', {
                      className: ee.orderDetailsItemTitle,
                      children: 'Billing address'
                    }),
                    N.jsxs('div', {
                      className: ee.information,
                      children: [
                        N.jsx('p', { children: 'Ahmed Faysal' }),
                        N.jsx('p', { children: ' Mirpur-1' }),
                        N.jsx('p', { children: ' Dhaka, 1216' }),
                        N.jsx('p', { children: 'BD' })
                      ]
                    })
                  ]
                }),
                N.jsxs('div', {
                  className: `${ee.shippingMethodInformation} ${ee.orderDetailsItem}`,
                  children: [
                    N.jsx('p', {
                      className: ee.orderDetailsItemTitle,
                      children: 'Shipping method'
                    }),
                    N.jsx('div', {
                      className: ee.information,
                      children: N.jsx('p', {
                        children: 'No shipping required.'
                      })
                    })
                  ]
                }),
                N.jsxs('div', {
                  className: `${ee.discountCodeInformation} ${ee.orderDetailsItem}`,
                  children: [
                    N.jsx('p', {
                      className: ee.orderDetailsItemTitle,
                      children: 'Discount Codes'
                    }),
                    N.jsx('div', {
                      className: ee.information,
                      children: N.jsx('p', {
                        children: 'No discount codes applied.'
                      })
                    })
                  ]
                }),
                N.jsx(Nx, {}),
                N.jsx('div', {
                  className: `${ee.deadline} ${ee.orderDetailsItem}`,
                  children: N.jsx('p', {
                    children: 'You can edit your order until Wed, Jan 15, 11 AM'
                  })
                })
              ]
            })
          ]
        }),
        N.jsxs('div', {
          className: ee.productSection,
          children: [
            N.jsx('div', {
              className: ee.productLabel,
              children: N.jsx('h3', { children: 'YOU MAY LIKE' })
            }),
            N.jsx('div', {
              className: `${ee.suggestedProductContainer} card-slider`,
              children: N.jsx(Nv, {
                slidesPerView: 6,
                spaceBetween: 30,
                autoplay: { delay: 2500, disableOnInteraction: !1 },
                loop: !0,
                mousewheel: !0,
                modules: [cE],
                className: 'mySwiper',
                children:
                  u == null
                    ? void 0
                    : u.map((d) =>
                        N.jsx(
                          Av,
                          {
                            children: N.jsx('div', {
                              className: ee.productCard,
                              children: N.jsxs('a', {
                                href: '#',
                                className: ee.mainLink,
                                children: [
                                  N.jsx('div', {
                                    className: ee.productImage,
                                    children: N.jsx('img', {
                                      src: d.image,
                                      alt: `${d.name} - ${d.variant}`
                                    })
                                  }),
                                  N.jsxs('div', {
                                    className: ee.productContent,
                                    children: [
                                      N.jsx('h4', {
                                        className: ee.title,
                                        children: d.name
                                      }),
                                      N.jsx('p', {
                                        className: ee.description,
                                        children: d.variant
                                      }),
                                      N.jsxs('p', {
                                        className: ee.price,
                                        children: ['BDT ', d.price]
                                      }),
                                      N.jsx('div', {
                                        className: ee.addToCartBtn,
                                        children: N.jsx('button', {
                                          children: 'Add to cart'
                                        })
                                      })
                                    ]
                                  })
                                ]
                              })
                            })
                          },
                          d.id
                        )
                      )
              })
            })
          ]
        })
      ]
    })
  }
function PE() {
  const e = ev((r) => r.orderEdit.page),
    n = (() => {
      switch (e) {
        case 'Home':
          return N.jsx(EE, {})
        case 'EditOrder':
          return N.jsx(NS, {})
        default:
          return null
      }
    })()
  return N.jsxs('section', {
    className: 'order-edit-container',
    children: [n, N.jsx(vS, {})]
  })
}
function Be(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `
}
var CE = (typeof Symbol == 'function' && Symbol.observable) || '@@observable',
  up = CE,
  tu = () => Math.random().toString(36).substring(7).split('').join('.'),
  LE = {
    INIT: `@@redux/INIT${tu()}`,
    REPLACE: `@@redux/REPLACE${tu()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${tu()}`
  },
  ma = LE
function Qt(e) {
  if (typeof e != 'object' || e === null) return !1
  let t = e
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t)
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null
}
function Rv(e, t, n) {
  if (typeof e != 'function') throw new Error(Be(2))
  if (
    (typeof t == 'function' && typeof n == 'function') ||
    (typeof n == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(Be(0))
  if (
    (typeof t == 'function' && typeof n > 'u' && ((n = t), (t = void 0)),
    typeof n < 'u')
  ) {
    if (typeof n != 'function') throw new Error(Be(1))
    return n(Rv)(e, t)
  }
  let r = e,
    o = t,
    a = new Map(),
    u = a,
    d = 0,
    c = !1
  function p() {
    u === a &&
      ((u = new Map()),
      a.forEach((k, S) => {
        u.set(S, k)
      }))
  }
  function m() {
    if (c) throw new Error(Be(3))
    return o
  }
  function y(k) {
    if (typeof k != 'function') throw new Error(Be(4))
    if (c) throw new Error(Be(5))
    let S = !0
    p()
    const v = d++
    return (
      u.set(v, k),
      function () {
        if (S) {
          if (c) throw new Error(Be(6))
          ;(S = !1), p(), u.delete(v), (a = null)
        }
      }
    )
  }
  function g(k) {
    if (!Qt(k)) throw new Error(Be(7))
    if (typeof k.type > 'u') throw new Error(Be(8))
    if (typeof k.type != 'string') throw new Error(Be(17))
    if (c) throw new Error(Be(9))
    try {
      ;(c = !0), (o = r(o, k))
    } finally {
      c = !1
    }
    return (
      (a = u).forEach((v) => {
        v()
      }),
      k
    )
  }
  function w(k) {
    if (typeof k != 'function') throw new Error(Be(10))
    ;(r = k), g({ type: ma.REPLACE })
  }
  function T() {
    const k = y
    return {
      subscribe(S) {
        if (typeof S != 'object' || S === null) throw new Error(Be(11))
        function v() {
          const P = S
          P.next && P.next(m())
        }
        return v(), { unsubscribe: k(v) }
      },
      [up]() {
        return this
      }
    }
  }
  return (
    g({ type: ma.INIT }),
    { dispatch: g, subscribe: y, getState: m, replaceReducer: w, [up]: T }
  )
}
function kE(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t]
    if (typeof n(void 0, { type: ma.INIT }) > 'u') throw new Error(Be(12))
    if (typeof n(void 0, { type: ma.PROBE_UNKNOWN_ACTION() }) > 'u')
      throw new Error(Be(13))
  })
}
function Dv(e) {
  const t = Object.keys(e),
    n = {}
  for (let a = 0; a < t.length; a++) {
    const u = t[a]
    typeof e[u] == 'function' && (n[u] = e[u])
  }
  const r = Object.keys(n)
  let o
  try {
    kE(n)
  } catch (a) {
    o = a
  }
  return function (u = {}, d) {
    if (o) throw o
    let c = !1
    const p = {}
    for (let m = 0; m < r.length; m++) {
      const y = r[m],
        g = n[y],
        w = u[y],
        T = g(w, d)
      if (typeof T > 'u') throw (d && d.type, new Error(Be(14)))
      ;(p[y] = T), (c = c || T !== w)
    }
    return (c = c || r.length !== Object.keys(u).length), c ? p : u
  }
}
function ga(...e) {
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
function ME(...e) {
  return (t) => (n, r) => {
    const o = t(n, r)
    let a = () => {
      throw new Error(Be(15))
    }
    const u = { getState: o.getState, dispatch: (c, ...p) => a(c, ...p) },
      d = e.map((c) => c(u))
    return (a = ga(...d)(o.dispatch)), { ...o, dispatch: a }
  }
}
function jv(e) {
  return Qt(e) && 'type' in e && typeof e.type == 'string'
}
var yd = Symbol.for('immer-nothing'),
  Yr = Symbol.for('immer-draftable'),
  at = Symbol.for('immer-state')
function $e(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  )
}
var mi = Object.getPrototypeOf
function Kt(e) {
  return !!e && !!e[at]
}
function Bt(e) {
  var t
  return e
    ? Bv(e) ||
        Array.isArray(e) ||
        !!e[Yr] ||
        !!((t = e.constructor) != null && t[Yr]) ||
        Oo(e) ||
        Io(e)
    : !1
}
var bE = Object.prototype.constructor.toString()
function Bv(e) {
  if (!e || typeof e != 'object') return !1
  const t = mi(e)
  if (t === null) return !0
  const n = Object.hasOwnProperty.call(t, 'constructor') && t.constructor
  return n === Object
    ? !0
    : typeof n == 'function' && Function.toString.call(n) === bE
}
function OE(e) {
  return Kt(e) || $e(15, e), e[at].base_
}
function _o(e, t) {
  gi(e) === 0
    ? Reflect.ownKeys(e).forEach((n) => {
        t(n, e[n], e)
      })
    : e.forEach((n, r) => t(r, n, e))
}
function gi(e) {
  const t = e[at]
  return t ? t.type_ : Array.isArray(e) ? 1 : Oo(e) ? 2 : Io(e) ? 3 : 0
}
function yo(e, t) {
  return gi(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
}
function nu(e, t) {
  return gi(e) === 2 ? e.get(t) : e[t]
}
function Fv(e, t, n) {
  const r = gi(e)
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n)
}
function IE(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t
}
function Oo(e) {
  return e instanceof Map
}
function Io(e) {
  return e instanceof Set
}
function ti(e) {
  return e.copy_ || e.base_
}
function cc(e, t) {
  if (Oo(e)) return new Map(e)
  if (Io(e)) return new Set(e)
  if (Array.isArray(e)) return Array.prototype.slice.call(e)
  const n = Bv(e)
  if (t === !0 || (t === 'class_only' && !n)) {
    const r = Object.getOwnPropertyDescriptors(e)
    delete r[at]
    let o = Reflect.ownKeys(r)
    for (let a = 0; a < o.length; a++) {
      const u = o[a],
        d = r[u]
      d.writable === !1 && ((d.writable = !0), (d.configurable = !0)),
        (d.get || d.set) &&
          (r[u] = {
            configurable: !0,
            writable: !0,
            enumerable: d.enumerable,
            value: e[u]
          })
    }
    return Object.create(mi(e), r)
  } else {
    const r = mi(e)
    if (r !== null && n) return { ...e }
    const o = Object.create(r)
    return Object.assign(o, e)
  }
}
function wd(e, t = !1) {
  return (
    ja(e) ||
      Kt(e) ||
      !Bt(e) ||
      (gi(e) > 1 && (e.set = e.add = e.clear = e.delete = zE),
      Object.freeze(e),
      t && Object.entries(e).forEach(([n, r]) => wd(r, !0))),
    e
  )
}
function zE() {
  $e(2)
}
function ja(e) {
  return Object.isFrozen(e)
}
var dc = {}
function vi(e) {
  const t = dc[e]
  return t || $e(0, e), t
}
function NE(e, t) {
  dc[e] || (dc[e] = t)
}
var wo
function $v() {
  return wo
}
function AE(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  }
}
function cp(e, t) {
  t &&
    (vi('Patches'),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t))
}
function fc(e) {
  hc(e), e.drafts_.forEach(RE), (e.drafts_ = null)
}
function hc(e) {
  e === wo && (wo = e.parent_)
}
function dp(e) {
  return (wo = AE(wo, e))
}
function RE(e) {
  const t = e[at]
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0)
}
function fp(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length
  const n = t.drafts_[0]
  return (
    e !== void 0 && e !== n
      ? (n[at].modified_ && (fc(t), $e(4)),
        Bt(e) && ((e = va(t, e)), t.parent_ || _a(t, e)),
        t.patches_ &&
          vi('Patches').generateReplacementPatches_(
            n[at].base_,
            e,
            t.patches_,
            t.inversePatches_
          ))
      : (e = va(t, n, [])),
    fc(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== yd ? e : void 0
  )
}
function va(e, t, n) {
  if (ja(t)) return t
  const r = t[at]
  if (!r) return _o(t, (o, a) => hp(e, r, t, o, a, n)), t
  if (r.scope_ !== e) return t
  if (!r.modified_) return _a(e, r.base_, !0), r.base_
  if (!r.finalized_) {
    ;(r.finalized_ = !0), r.scope_.unfinalizedDrafts_--
    const o = r.copy_
    let a = o,
      u = !1
    r.type_ === 3 && ((a = new Set(o)), o.clear(), (u = !0)),
      _o(a, (d, c) => hp(e, r, o, d, c, n, u)),
      _a(e, o, !1),
      n &&
        e.patches_ &&
        vi('Patches').generatePatches_(r, n, e.patches_, e.inversePatches_)
  }
  return r.copy_
}
function hp(e, t, n, r, o, a, u) {
  if (Kt(o)) {
    const d =
        a && t && t.type_ !== 3 && !yo(t.assigned_, r) ? a.concat(r) : void 0,
      c = va(e, o, d)
    if ((Fv(n, r, c), Kt(c))) e.canAutoFreeze_ = !1
    else return
  } else u && n.add(o)
  if (Bt(o) && !ja(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return
    va(e, o),
      (!t || !t.scope_.parent_) &&
        typeof r != 'symbol' &&
        Object.prototype.propertyIsEnumerable.call(n, r) &&
        _a(e, o)
  }
}
function _a(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && wd(t, n)
}
function DE(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : $v(),
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
  let o = r,
    a = Sd
  n && ((o = [r]), (a = So))
  const { revoke: u, proxy: d } = Proxy.revocable(o, a)
  return (r.draft_ = d), (r.revoke_ = u), d
}
var Sd = {
    get(e, t) {
      if (t === at) return e
      const n = ti(e)
      if (!yo(n, t)) return jE(e, n, t)
      const r = n[t]
      return e.finalized_ || !Bt(r)
        ? r
        : r === iu(e.base_, t)
        ? (ru(e), (e.copy_[t] = mc(r, e)))
        : r
    },
    has(e, t) {
      return t in ti(e)
    },
    ownKeys(e) {
      return Reflect.ownKeys(ti(e))
    },
    set(e, t, n) {
      const r = Zv(ti(e), t)
      if (r != null && r.set) return r.set.call(e.draft_, n), !0
      if (!e.modified_) {
        const o = iu(ti(e), t),
          a = o == null ? void 0 : o[at]
        if (a && a.base_ === n)
          return (e.copy_[t] = n), (e.assigned_[t] = !1), !0
        if (IE(n, o) && (n !== void 0 || yo(e.base_, t))) return !0
        ru(e), pc(e)
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
        iu(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), ru(e), pc(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      )
    },
    getOwnPropertyDescriptor(e, t) {
      const n = ti(e),
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
      $e(11)
    },
    getPrototypeOf(e) {
      return mi(e.base_)
    },
    setPrototypeOf() {
      $e(12)
    }
  },
  So = {}
_o(Sd, (e, t) => {
  So[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments)
  }
})
So.deleteProperty = function (e, t) {
  return So.set.call(this, e, t, void 0)
}
So.set = function (e, t, n) {
  return Sd.set.call(this, e[0], t, n, e[0])
}
function iu(e, t) {
  const n = e[at]
  return (n ? ti(n) : e)[t]
}
function jE(e, t, n) {
  var o
  const r = Zv(t, n)
  return r
    ? 'value' in r
      ? r.value
      : (o = r.get) == null
      ? void 0
      : o.call(e.draft_)
    : void 0
}
function Zv(e, t) {
  if (!(t in e)) return
  let n = mi(e)
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t)
    if (r) return r
    n = mi(n)
  }
}
function pc(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && pc(e.parent_))
}
function ru(e) {
  e.copy_ || (e.copy_ = cc(e.base_, e.scope_.immer_.useStrictShallowCopy_))
}
var BE = class {
  constructor(e) {
    ;(this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, n, r) => {
        if (typeof t == 'function' && typeof n != 'function') {
          const a = n
          n = t
          const u = this
          return function (c = a, ...p) {
            return u.produce(c, (m) => n.call(this, m, ...p))
          }
        }
        typeof n != 'function' && $e(6),
          r !== void 0 && typeof r != 'function' && $e(7)
        let o
        if (Bt(t)) {
          const a = dp(this),
            u = mc(t, void 0)
          let d = !0
          try {
            ;(o = n(u)), (d = !1)
          } finally {
            d ? fc(a) : hc(a)
          }
          return cp(a, r), fp(o, a)
        } else if (!t || typeof t != 'object') {
          if (
            ((o = n(t)),
            o === void 0 && (o = t),
            o === yd && (o = void 0),
            this.autoFreeze_ && wd(o, !0),
            r)
          ) {
            const a = [],
              u = []
            vi('Patches').generateReplacementPatches_(t, o, a, u), r(a, u)
          }
          return o
        } else $e(1, t)
      }),
      (this.produceWithPatches = (t, n) => {
        if (typeof t == 'function')
          return (u, ...d) => this.produceWithPatches(u, (c) => t(c, ...d))
        let r, o
        return [
          this.produce(t, n, (u, d) => {
            ;(r = u), (o = d)
          }),
          r,
          o
        ]
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == 'boolean' &&
        this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == 'boolean' &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy)
  }
  createDraft(e) {
    Bt(e) || $e(8), Kt(e) && (e = FE(e))
    const t = dp(this),
      n = mc(e, void 0)
    return (n[at].isManual_ = !0), hc(t), n
  }
  finishDraft(e, t) {
    const n = e && e[at]
    ;(!n || !n.isManual_) && $e(9)
    const { scope_: r } = n
    return cp(r, t), fp(void 0, r)
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
      const o = t[n]
      if (o.path.length === 0 && o.op === 'replace') {
        e = o.value
        break
      }
    }
    n > -1 && (t = t.slice(n + 1))
    const r = vi('Patches').applyPatches_
    return Kt(e) ? r(e, t) : this.produce(e, (o) => r(o, t))
  }
}
function mc(e, t) {
  const n = Oo(e)
    ? vi('MapSet').proxyMap_(e, t)
    : Io(e)
    ? vi('MapSet').proxySet_(e, t)
    : DE(e, t)
  return (t ? t.scope_ : $v()).drafts_.push(n), n
}
function FE(e) {
  return Kt(e) || $e(10, e), Hv(e)
}
function Hv(e) {
  if (!Bt(e) || ja(e)) return e
  const t = e[at]
  let n
  if (t) {
    if (!t.modified_) return t.base_
    ;(t.finalized_ = !0), (n = cc(e, t.scope_.immer_.useStrictShallowCopy_))
  } else n = cc(e, !0)
  return (
    _o(n, (r, o) => {
      Fv(n, r, Hv(o))
    }),
    t && (t.finalized_ = !1),
    n
  )
}
function $E() {
  const t = 'replace',
    n = 'add',
    r = 'remove'
  function o(g, w, T, E) {
    switch (g.type_) {
      case 0:
      case 2:
        return u(g, w, T, E)
      case 1:
        return a(g, w, T, E)
      case 3:
        return d(g, w, T, E)
    }
  }
  function a(g, w, T, E) {
    let { base_: k, assigned_: S } = g,
      v = g.copy_
    v.length < k.length && (([k, v] = [v, k]), ([T, E] = [E, T]))
    for (let _ = 0; _ < k.length; _++)
      if (S[_] && v[_] !== k[_]) {
        const P = w.concat([_])
        T.push({ op: t, path: P, value: y(v[_]) }),
          E.push({ op: t, path: P, value: y(k[_]) })
      }
    for (let _ = k.length; _ < v.length; _++) {
      const P = w.concat([_])
      T.push({ op: n, path: P, value: y(v[_]) })
    }
    for (let _ = v.length - 1; k.length <= _; --_) {
      const P = w.concat([_])
      E.push({ op: r, path: P })
    }
  }
  function u(g, w, T, E) {
    const { base_: k, copy_: S } = g
    _o(g.assigned_, (v, _) => {
      const P = nu(k, v),
        C = nu(S, v),
        b = _ ? (yo(k, v) ? t : n) : r
      if (P === C && b === t) return
      const M = w.concat(v)
      T.push(b === r ? { op: b, path: M } : { op: b, path: M, value: C }),
        E.push(
          b === n
            ? { op: r, path: M }
            : b === r
            ? { op: n, path: M, value: y(P) }
            : { op: t, path: M, value: y(P) }
        )
    })
  }
  function d(g, w, T, E) {
    let { base_: k, copy_: S } = g,
      v = 0
    k.forEach((_) => {
      if (!S.has(_)) {
        const P = w.concat([v])
        T.push({ op: r, path: P, value: _ }),
          E.unshift({ op: n, path: P, value: _ })
      }
      v++
    }),
      (v = 0),
      S.forEach((_) => {
        if (!k.has(_)) {
          const P = w.concat([v])
          T.push({ op: n, path: P, value: _ }),
            E.unshift({ op: r, path: P, value: _ })
        }
        v++
      })
  }
  function c(g, w, T, E) {
    T.push({ op: t, path: [], value: w === yd ? void 0 : w }),
      E.push({ op: t, path: [], value: g })
  }
  function p(g, w) {
    return (
      w.forEach((T) => {
        const { path: E, op: k } = T
        let S = g
        for (let C = 0; C < E.length - 1; C++) {
          const b = gi(S)
          let M = E[C]
          typeof M != 'string' && typeof M != 'number' && (M = '' + M),
            (b === 0 || b === 1) &&
              (M === '__proto__' || M === 'constructor') &&
              $e(19),
            typeof S == 'function' && M === 'prototype' && $e(19),
            (S = nu(S, M)),
            typeof S != 'object' && $e(18, E.join('/'))
        }
        const v = gi(S),
          _ = m(T.value),
          P = E[E.length - 1]
        switch (k) {
          case t:
            switch (v) {
              case 2:
                return S.set(P, _)
              case 3:
                $e(16)
              default:
                return (S[P] = _)
            }
          case n:
            switch (v) {
              case 1:
                return P === '-' ? S.push(_) : S.splice(P, 0, _)
              case 2:
                return S.set(P, _)
              case 3:
                return S.add(_)
              default:
                return (S[P] = _)
            }
          case r:
            switch (v) {
              case 1:
                return S.splice(P, 1)
              case 2:
                return S.delete(P)
              case 3:
                return S.delete(T.value)
              default:
                return delete S[P]
            }
          default:
            $e(17, k)
        }
      }),
      g
    )
  }
  function m(g) {
    if (!Bt(g)) return g
    if (Array.isArray(g)) return g.map(m)
    if (Oo(g))
      return new Map(Array.from(g.entries()).map(([T, E]) => [T, m(E)]))
    if (Io(g)) return new Set(Array.from(g).map(m))
    const w = Object.create(mi(g))
    for (const T in g) w[T] = m(g[T])
    return yo(g, Yr) && (w[Yr] = g[Yr]), w
  }
  function y(g) {
    return Kt(g) ? m(g) : g
  }
  NE('Patches', {
    applyPatches_: p,
    generatePatches_: o,
    generateReplacementPatches_: c
  })
}
var pt = new BE(),
  zo = pt.produce,
  qv = pt.produceWithPatches.bind(pt)
pt.setAutoFreeze.bind(pt)
pt.setUseStrictShallowCopy.bind(pt)
var pp = pt.applyPatches.bind(pt)
pt.createDraft.bind(pt)
pt.finishDraft.bind(pt)
function ZE(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != 'function') throw new TypeError(t)
}
function HE(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != 'object') throw new TypeError(t)
}
function qE(
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
var mp = (e) => (Array.isArray(e) ? e : [e])
function VE(e) {
  const t = Array.isArray(e[0]) ? e[0] : e
  return (
    qE(
      t,
      'createSelector expects all input-selectors to be functions, but received the following types: '
    ),
    t
  )
}
function WE(e, t) {
  const n = [],
    { length: r } = e
  for (let o = 0; o < r; o++) n.push(e[o].apply(null, t))
  return n
}
var UE = class {
    constructor(e) {
      this.value = e
    }
    deref() {
      return this.value
    }
  },
  GE = typeof WeakRef < 'u' ? WeakRef : UE,
  QE = 0,
  gp = 1
function ws() {
  return { s: QE, v: void 0, o: null, p: null }
}
function ya(e, t = {}) {
  let n = ws()
  const { resultEqualityCheck: r } = t
  let o,
    a = 0
  function u() {
    var y
    let d = n
    const { length: c } = arguments
    for (let g = 0, w = c; g < w; g++) {
      const T = arguments[g]
      if (typeof T == 'function' || (typeof T == 'object' && T !== null)) {
        let E = d.o
        E === null && (d.o = E = new WeakMap())
        const k = E.get(T)
        k === void 0 ? ((d = ws()), E.set(T, d)) : (d = k)
      } else {
        let E = d.p
        E === null && (d.p = E = new Map())
        const k = E.get(T)
        k === void 0 ? ((d = ws()), E.set(T, d)) : (d = k)
      }
    }
    const p = d
    let m
    if (d.s === gp) m = d.v
    else if (((m = e.apply(null, arguments)), a++, r)) {
      const g =
        ((y = o == null ? void 0 : o.deref) == null ? void 0 : y.call(o)) ?? o
      g != null && r(g, m) && ((m = g), a !== 0 && a--),
        (o =
          (typeof m == 'object' && m !== null) || typeof m == 'function'
            ? new GE(m)
            : m)
    }
    return (p.s = gp), (p.v = m), m
  }
  return (
    (u.clearCache = () => {
      ;(n = ws()), u.resetResultsCount()
    }),
    (u.resultsCount = () => a),
    (u.resetResultsCount = () => {
      a = 0
    }),
    u
  )
}
function KE(e, ...t) {
  const n = typeof e == 'function' ? { memoize: e, memoizeOptions: t } : e,
    r = (...o) => {
      let a = 0,
        u = 0,
        d,
        c = {},
        p = o.pop()
      typeof p == 'object' && ((c = p), (p = o.pop())),
        ZE(
          p,
          `createSelector expects an output function after the inputs, but received: [${typeof p}]`
        )
      const m = { ...n, ...c },
        {
          memoize: y,
          memoizeOptions: g = [],
          argsMemoize: w = ya,
          argsMemoizeOptions: T = [],
          devModeChecks: E = {}
        } = m,
        k = mp(g),
        S = mp(T),
        v = VE(o),
        _ = y(function () {
          return a++, p.apply(null, arguments)
        }, ...k),
        P = w(function () {
          u++
          const b = WE(v, arguments)
          return (d = _.apply(null, b)), d
        }, ...S)
      return Object.assign(P, {
        resultFunc: p,
        memoizedResultFunc: _,
        dependencies: v,
        dependencyRecomputations: () => u,
        resetDependencyRecomputations: () => {
          u = 0
        },
        lastResult: () => d,
        recomputations: () => a,
        resetRecomputations: () => {
          a = 0
        },
        memoize: y,
        argsMemoize: w
      })
    }
  return Object.assign(r, { withTypes: () => r }), r
}
var xd = KE(ya),
  YE = Object.assign(
    (e, t = xd) => {
      HE(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
      )
      const n = Object.keys(e),
        r = n.map((a) => e[a])
      return t(r, (...a) => a.reduce((u, d, c) => ((u[n[c]] = d), u), {}))
    },
    { withTypes: () => YE }
  )
function Vv(e) {
  return ({ dispatch: n, getState: r }) =>
    (o) =>
    (a) =>
      typeof a == 'function' ? a(n, r, e) : o(a)
}
var XE = Vv(),
  JE = Vv,
  eP =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object'
              ? ga
              : ga.apply(null, arguments)
        },
  tP = (e) => e && typeof e.match == 'function'
function Dt(e, t) {
  function n(...r) {
    if (t) {
      let o = t(...r)
      if (!o) throw new Error(Ct(0))
      return {
        type: e,
        payload: o.payload,
        ...('meta' in o && { meta: o.meta }),
        ...('error' in o && { error: o.error })
      }
    }
    return { type: e, payload: r[0] }
  }
  return (
    (n.toString = () => `${e}`),
    (n.type = e),
    (n.match = (r) => jv(r) && r.type === e),
    n
  )
}
var Wv = class Br extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Br.prototype)
  }
  static get [Symbol.species]() {
    return Br
  }
  concat(...t) {
    return super.concat.apply(this, t)
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new Br(...t[0].concat(this))
      : new Br(...t.concat(this))
  }
}
function vp(e) {
  return Bt(e) ? zo(e, () => {}) : e
}
function _p(e, t, n) {
  if (e.has(t)) {
    let o = e.get(t)
    return n.update && ((o = n.update(o, t, e)), e.set(t, o)), o
  }
  if (!n.insert) throw new Error(Ct(10))
  const r = n.insert(t, e)
  return e.set(t, r), r
}
function nP(e) {
  return typeof e == 'boolean'
}
var iP = () =>
    function (t) {
      const {
        thunk: n = !0,
        immutableCheck: r = !0,
        serializableCheck: o = !0,
        actionCreatorCheck: a = !0
      } = t ?? {}
      let u = new Wv()
      return n && (nP(n) ? u.push(XE) : u.push(JE(n.extraArgument))), u
    },
  oi = 'RTK_autoBatch',
  zr = () => (e) => ({ payload: e, meta: { [oi]: !0 } }),
  Uv = (e) => (t) => {
    setTimeout(t, e)
  },
  rP =
    typeof window < 'u' && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : Uv(10),
  oP =
    (e = { type: 'raf' }) =>
    (t) =>
    (...n) => {
      const r = t(...n)
      let o = !0,
        a = !1,
        u = !1
      const d = new Set(),
        c =
          e.type === 'tick'
            ? queueMicrotask
            : e.type === 'raf'
            ? rP
            : e.type === 'callback'
            ? e.queueNotification
            : Uv(e.timeout),
        p = () => {
          ;(u = !1), a && ((a = !1), d.forEach((m) => m()))
        }
      return Object.assign({}, r, {
        subscribe(m) {
          const y = () => o && m(),
            g = r.subscribe(y)
          return (
            d.add(m),
            () => {
              g(), d.delete(m)
            }
          )
        },
        dispatch(m) {
          var y
          try {
            return (
              (o = !((y = m == null ? void 0 : m.meta) != null && y[oi])),
              (a = !o),
              a && (u || ((u = !0), c(p))),
              r.dispatch(m)
            )
          } finally {
            o = !0
          }
        }
      })
    },
  sP = (e) =>
    function (n) {
      const { autoBatch: r = !0 } = n ?? {}
      let o = new Wv(e)
      return r && o.push(oP(typeof r == 'object' ? r : void 0)), o
    }
function aP(e) {
  const t = iP(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: o = !0,
      preloadedState: a = void 0,
      enhancers: u = void 0
    } = e || {}
  let d
  if (typeof n == 'function') d = n
  else if (Qt(n)) d = Dv(n)
  else throw new Error(Ct(1))
  let c
  typeof r == 'function' ? (c = r(t)) : (c = t())
  let p = ga
  o && (p = eP({ trace: !1, ...(typeof o == 'object' && o) }))
  const m = ME(...c),
    y = sP(m)
  let g = typeof u == 'function' ? u(y) : y()
  const w = p(...g)
  return Rv(d, a, w)
}
function Gv(e) {
  const t = {},
    n = []
  let r
  const o = {
    addCase(a, u) {
      const d = typeof a == 'string' ? a : a.type
      if (!d) throw new Error(Ct(28))
      if (d in t) throw new Error(Ct(29))
      return (t[d] = u), o
    },
    addMatcher(a, u) {
      return n.push({ matcher: a, reducer: u }), o
    },
    addDefaultCase(a) {
      return (r = a), o
    }
  }
  return e(o), [t, n, r]
}
function lP(e) {
  return typeof e == 'function'
}
function uP(e, t) {
  let [n, r, o] = Gv(t),
    a
  if (lP(e)) a = () => vp(e())
  else {
    const d = vp(e)
    a = () => d
  }
  function u(d = a(), c) {
    let p = [
      n[c.type],
      ...r.filter(({ matcher: m }) => m(c)).map(({ reducer: m }) => m)
    ]
    return (
      p.filter((m) => !!m).length === 0 && (p = [o]),
      p.reduce((m, y) => {
        if (y)
          if (Kt(m)) {
            const w = y(m, c)
            return w === void 0 ? m : w
          } else {
            if (Bt(m)) return zo(m, (g) => y(g, c))
            {
              const g = y(m, c)
              if (g === void 0) {
                if (m === null) return m
                throw Error(
                  'A case reducer on a non-draftable value must not return undefined'
                )
              }
              return g
            }
          }
        return m
      }, d)
    )
  }
  return (u.getInitialState = a), u
}
var Qv = (e, t) => (tP(e) ? e.match(t) : e(t))
function gn(...e) {
  return (t) => e.some((n) => Qv(n, t))
}
function Xr(...e) {
  return (t) => e.every((n) => Qv(n, t))
}
function Ba(e, t) {
  if (!e || !e.meta) return !1
  const n = typeof e.meta.requestId == 'string',
    r = t.indexOf(e.meta.requestStatus) > -1
  return n && r
}
function No(e) {
  return (
    typeof e[0] == 'function' &&
    'pending' in e[0] &&
    'fulfilled' in e[0] &&
    'rejected' in e[0]
  )
}
function Td(...e) {
  return e.length === 0
    ? (t) => Ba(t, ['pending'])
    : No(e)
    ? gn(...e.map((t) => t.pending))
    : Td()(e[0])
}
function ar(...e) {
  return e.length === 0
    ? (t) => Ba(t, ['rejected'])
    : No(e)
    ? gn(...e.map((t) => t.rejected))
    : ar()(e[0])
}
function Fa(...e) {
  const t = (n) => n && n.meta && n.meta.rejectedWithValue
  return e.length === 0 ? Xr(ar(...e), t) : No(e) ? Xr(ar(...e), t) : Fa()(e[0])
}
function Hn(...e) {
  return e.length === 0
    ? (t) => Ba(t, ['fulfilled'])
    : No(e)
    ? gn(...e.map((t) => t.fulfilled))
    : Hn()(e[0])
}
function gc(...e) {
  return e.length === 0
    ? (t) => Ba(t, ['pending', 'fulfilled', 'rejected'])
    : No(e)
    ? gn(...e.flatMap((t) => [t.pending, t.rejected, t.fulfilled]))
    : gc()(e[0])
}
var cP = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW',
  Ed = (e = 21) => {
    let t = '',
      n = e
    for (; n--; ) t += cP[(Math.random() * 64) | 0]
    return t
  },
  dP = ['name', 'message', 'stack', 'code'],
  ou = class {
    constructor(e, t) {
      Sl(this, '_type')
      ;(this.payload = e), (this.meta = t)
    }
  },
  yp = class {
    constructor(e, t) {
      Sl(this, '_type')
      ;(this.payload = e), (this.meta = t)
    }
  },
  fP = (e) => {
    if (typeof e == 'object' && e !== null) {
      const t = {}
      for (const n of dP) typeof e[n] == 'string' && (t[n] = e[n])
      return t
    }
    return { message: String(e) }
  },
  wp = (() => {
    function e(t, n, r) {
      const o = Dt(t + '/fulfilled', (c, p, m, y) => ({
          payload: c,
          meta: {
            ...(y || {}),
            arg: m,
            requestId: p,
            requestStatus: 'fulfilled'
          }
        })),
        a = Dt(t + '/pending', (c, p, m) => ({
          payload: void 0,
          meta: { ...(m || {}), arg: p, requestId: c, requestStatus: 'pending' }
        })),
        u = Dt(t + '/rejected', (c, p, m, y, g) => ({
          payload: y,
          error: ((r && r.serializeError) || fP)(c || 'Rejected'),
          meta: {
            ...(g || {}),
            arg: m,
            requestId: p,
            rejectedWithValue: !!y,
            requestStatus: 'rejected',
            aborted: (c == null ? void 0 : c.name) === 'AbortError',
            condition: (c == null ? void 0 : c.name) === 'ConditionError'
          }
        }))
      function d(c) {
        return (p, m, y) => {
          const g = r != null && r.idGenerator ? r.idGenerator(c) : Ed(),
            w = new AbortController()
          let T, E
          function k(v) {
            ;(E = v), w.abort()
          }
          const S = (async function () {
            var P, C
            let v
            try {
              let b =
                (P = r == null ? void 0 : r.condition) == null
                  ? void 0
                  : P.call(r, c, { getState: m, extra: y })
              if ((pP(b) && (b = await b), b === !1 || w.signal.aborted))
                throw {
                  name: 'ConditionError',
                  message: 'Aborted due to condition callback returning false.'
                }
              const M = new Promise((O, A) => {
                ;(T = () => {
                  A({ name: 'AbortError', message: E || 'Aborted' })
                }),
                  w.signal.addEventListener('abort', T)
              })
              p(
                a(
                  g,
                  c,
                  (C = r == null ? void 0 : r.getPendingMeta) == null
                    ? void 0
                    : C.call(
                        r,
                        { requestId: g, arg: c },
                        { getState: m, extra: y }
                      )
                )
              ),
                (v = await Promise.race([
                  M,
                  Promise.resolve(
                    n(c, {
                      dispatch: p,
                      getState: m,
                      extra: y,
                      requestId: g,
                      signal: w.signal,
                      abort: k,
                      rejectWithValue: (O, A) => new ou(O, A),
                      fulfillWithValue: (O, A) => new yp(O, A)
                    })
                  ).then((O) => {
                    if (O instanceof ou) throw O
                    return O instanceof yp
                      ? o(O.payload, g, c, O.meta)
                      : o(O, g, c)
                  })
                ]))
            } catch (b) {
              v =
                b instanceof ou ? u(null, g, c, b.payload, b.meta) : u(b, g, c)
            } finally {
              T && w.signal.removeEventListener('abort', T)
            }
            return (
              (r &&
                !r.dispatchConditionRejection &&
                u.match(v) &&
                v.meta.condition) ||
                p(v),
              v
            )
          })()
          return Object.assign(S, {
            abort: k,
            requestId: g,
            arg: c,
            unwrap() {
              return S.then(hP)
            }
          })
        }
      }
      return Object.assign(d, {
        pending: a,
        rejected: u,
        fulfilled: o,
        settled: gn(u, o),
        typePrefix: t
      })
    }
    return (e.withTypes = () => e), e
  })()
function hP(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload
  if (e.error) throw e.error
  return e.payload
}
function pP(e) {
  return e !== null && typeof e == 'object' && typeof e.then == 'function'
}
var mP = Symbol.for('rtk-slice-createasyncthunk')
function gP(e, t) {
  return `${e}/${t}`
}
function vP({ creators: e } = {}) {
  var n
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[mP]
  return function (o) {
    const { name: a, reducerPath: u = a } = o
    if (!a) throw new Error(Ct(11))
    typeof process < 'u'
    const d =
        (typeof o.reducers == 'function' ? o.reducers(yP()) : o.reducers) || {},
      c = Object.keys(d),
      p = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: []
      },
      m = {
        addCase(_, P) {
          const C = typeof _ == 'string' ? _ : _.type
          if (!C) throw new Error(Ct(12))
          if (C in p.sliceCaseReducersByType) throw new Error(Ct(13))
          return (p.sliceCaseReducersByType[C] = P), m
        },
        addMatcher(_, P) {
          return p.sliceMatchers.push({ matcher: _, reducer: P }), m
        },
        exposeAction(_, P) {
          return (p.actionCreators[_] = P), m
        },
        exposeCaseReducer(_, P) {
          return (p.sliceCaseReducersByName[_] = P), m
        }
      }
    c.forEach((_) => {
      const P = d[_],
        C = {
          reducerName: _,
          type: gP(a, _),
          createNotation: typeof o.reducers == 'function'
        }
      SP(P) ? TP(C, P, m, t) : wP(C, P, m)
    })
    function y() {
      const [_ = {}, P = [], C = void 0] =
          typeof o.extraReducers == 'function'
            ? Gv(o.extraReducers)
            : [o.extraReducers],
        b = { ..._, ...p.sliceCaseReducersByType }
      return uP(o.initialState, (M) => {
        for (let O in b) M.addCase(O, b[O])
        for (let O of p.sliceMatchers) M.addMatcher(O.matcher, O.reducer)
        for (let O of P) M.addMatcher(O.matcher, O.reducer)
        C && M.addDefaultCase(C)
      })
    }
    const g = (_) => _,
      w = new Map()
    let T
    function E(_, P) {
      return T || (T = y()), T(_, P)
    }
    function k() {
      return T || (T = y()), T.getInitialState()
    }
    function S(_, P = !1) {
      function C(M) {
        let O = M[_]
        return typeof O > 'u' && P && (O = k()), O
      }
      function b(M = g) {
        const O = _p(w, P, { insert: () => new WeakMap() })
        return _p(O, M, {
          insert: () => {
            const A = {}
            for (const [z, R] of Object.entries(o.selectors ?? {}))
              A[z] = _P(R, M, k, P)
            return A
          }
        })
      }
      return {
        reducerPath: _,
        getSelectors: b,
        get selectors() {
          return b(C)
        },
        selectSlice: C
      }
    }
    const v = {
      name: a,
      reducer: E,
      actions: p.actionCreators,
      caseReducers: p.sliceCaseReducersByName,
      getInitialState: k,
      ...S(u),
      injectInto(_, { reducerPath: P, ...C } = {}) {
        const b = P ?? u
        return (
          _.inject({ reducerPath: b, reducer: E }, C), { ...v, ...S(b, !0) }
        )
      }
    }
    return v
  }
}
function _P(e, t, n, r) {
  function o(a, ...u) {
    let d = t(a)
    return typeof d > 'u' && r && (d = n()), e(d, ...u)
  }
  return (o.unwrapped = e), o
}
var Pn = vP()
function yP() {
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
function wP({ type: e, reducerName: t, createNotation: n }, r, o) {
  let a, u
  if ('reducer' in r) {
    if (n && !xP(r)) throw new Error(Ct(17))
    ;(a = r.reducer), (u = r.prepare)
  } else a = r
  o.addCase(e, a)
    .exposeCaseReducer(t, a)
    .exposeAction(t, u ? Dt(e, u) : Dt(e))
}
function SP(e) {
  return e._reducerDefinitionType === 'asyncThunk'
}
function xP(e) {
  return e._reducerDefinitionType === 'reducerWithPrepare'
}
function TP({ type: e, reducerName: t }, n, r, o) {
  if (!o) throw new Error(Ct(18))
  const {
      payloadCreator: a,
      fulfilled: u,
      pending: d,
      rejected: c,
      settled: p,
      options: m
    } = n,
    y = o(e, a, m)
  r.exposeAction(t, y),
    u && r.addCase(y.fulfilled, u),
    d && r.addCase(y.pending, d),
    c && r.addCase(y.rejected, c),
    p && r.addMatcher(y.settled, p),
    r.exposeCaseReducer(t, {
      fulfilled: u || Ss,
      pending: d || Ss,
      rejected: c || Ss,
      settled: p || Ss
    })
}
function Ss() {}
function Ct(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `
}
var Kv = ((e) => (
  (e.uninitialized = 'uninitialized'),
  (e.pending = 'pending'),
  (e.fulfilled = 'fulfilled'),
  (e.rejected = 'rejected'),
  e
))(Kv || {})
function EP(e) {
  return {
    status: e,
    isUninitialized: e === 'uninitialized',
    isLoading: e === 'pending',
    isSuccess: e === 'fulfilled',
    isError: e === 'rejected'
  }
}
var Sp = Qt
function Yv(e, t) {
  if (e === t || !((Sp(e) && Sp(t)) || (Array.isArray(e) && Array.isArray(t))))
    return t
  const n = Object.keys(t),
    r = Object.keys(e)
  let o = n.length === r.length
  const a = Array.isArray(t) ? [] : {}
  for (const u of n) (a[u] = Yv(e[u], t[u])), o && (o = e[u] === a[u])
  return o ? e : a
}
function Ji(e) {
  let t = 0
  for (const n in e) t++
  return t
}
var xp = (e) => [].concat(...e)
function PP(e) {
  return new RegExp('(^|:)//').test(e)
}
function CP() {
  return typeof document > 'u' ? !0 : document.visibilityState !== 'hidden'
}
function Tp(e) {
  return e != null
}
function LP() {
  return typeof navigator > 'u' || navigator.onLine === void 0
    ? !0
    : navigator.onLine
}
var kP = (e) => e.replace(/\/$/, ''),
  MP = (e) => e.replace(/^\//, '')
function bP(e, t) {
  if (!e) return t
  if (!t) return e
  if (PP(t)) return t
  const n = e.endsWith('/') || !t.startsWith('?') ? '/' : ''
  return (e = kP(e)), (t = MP(t)), `${e}${n}${t}`
}
var Ep = (...e) => fetch(...e),
  OP = (e) => e.status >= 200 && e.status <= 299,
  IP = (e) => /ion\/(vnd\.api\+)?json/.test(e.get('content-type') || '')
function Pp(e) {
  if (!Qt(e)) return e
  const t = { ...e }
  for (const [n, r] of Object.entries(t)) r === void 0 && delete t[n]
  return t
}
function Xv({
  baseUrl: e,
  prepareHeaders: t = (y) => y,
  fetchFn: n = Ep,
  paramsSerializer: r,
  isJsonContentType: o = IP,
  jsonContentType: a = 'application/json',
  jsonReplacer: u,
  timeout: d,
  responseHandler: c,
  validateStatus: p,
  ...m
} = {}) {
  return (
    typeof fetch > 'u' &&
      n === Ep &&
      console.warn(
        'Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments.'
      ),
    async (g, w, T) => {
      const { getState: E, extra: k, endpoint: S, forced: v, type: _ } = w
      let P,
        {
          url: C,
          headers: b = new Headers(m.headers),
          params: M = void 0,
          responseHandler: O = c ?? 'json',
          validateStatus: A = p ?? OP,
          timeout: z = d,
          ...R
        } = typeof g == 'string' ? { url: g } : g,
        F,
        Z = w.signal
      z &&
        ((F = new AbortController()),
        w.signal.addEventListener('abort', F.abort),
        (Z = F.signal))
      let V = { ...m, signal: Z, ...R }
      ;(b = new Headers(Pp(b))),
        (V.headers =
          (await t(b, {
            getState: E,
            arg: g,
            extra: k,
            endpoint: S,
            forced: v,
            type: _,
            extraOptions: T
          })) || b)
      const Y = (ie) =>
        typeof ie == 'object' &&
        (Qt(ie) || Array.isArray(ie) || typeof ie.toJSON == 'function')
      if (
        (!V.headers.has('content-type') &&
          Y(V.body) &&
          V.headers.set('content-type', a),
        Y(V.body) && o(V.headers) && (V.body = JSON.stringify(V.body, u)),
        M)
      ) {
        const ie = ~C.indexOf('?') ? '&' : '?',
          se = r ? r(M) : new URLSearchParams(Pp(M))
        C += ie + se
      }
      C = bP(e, C)
      const X = new Request(C, V)
      P = { request: new Request(C, V) }
      let D,
        U = !1,
        $ =
          F &&
          setTimeout(() => {
            ;(U = !0), F.abort()
          }, z)
      try {
        D = await n(X)
      } catch (ie) {
        return {
          error: {
            status: U ? 'TIMEOUT_ERROR' : 'FETCH_ERROR',
            error: String(ie)
          },
          meta: P
        }
      } finally {
        $ && clearTimeout($),
          F == null || F.signal.removeEventListener('abort', F.abort)
      }
      const Q = D.clone()
      P.response = Q
      let te,
        ce = ''
      try {
        let ie
        if (
          (await Promise.all([
            y(D, O).then(
              (se) => (te = se),
              (se) => (ie = se)
            ),
            Q.text().then(
              (se) => (ce = se),
              () => {}
            )
          ]),
          ie)
        )
          throw ie
      } catch (ie) {
        return {
          error: {
            status: 'PARSING_ERROR',
            originalStatus: D.status,
            data: ce,
            error: String(ie)
          },
          meta: P
        }
      }
      return A(D, te)
        ? { data: te, meta: P }
        : { error: { status: D.status, data: te }, meta: P }
    }
  )
  async function y(g, w) {
    if (typeof w == 'function') return w(g)
    if (
      (w === 'content-type' && (w = o(g.headers) ? 'json' : 'text'),
      w === 'json')
    ) {
      const T = await g.text()
      return T.length ? JSON.parse(T) : null
    }
    return g.text()
  }
}
var Cp = class {
    constructor(e, t = void 0) {
      ;(this.value = e), (this.meta = t)
    }
  },
  Pd = Dt('__rtkq/focused'),
  Jv = Dt('__rtkq/unfocused'),
  Cd = Dt('__rtkq/online'),
  e_ = Dt('__rtkq/offline')
function t_(e) {
  return e.type === 'query'
}
function zP(e) {
  return e.type === 'mutation'
}
function Ld(e, t, n, r, o, a) {
  return NP(e)
    ? e(t, n, r, o).map(vc).map(a)
    : Array.isArray(e)
    ? e.map(vc).map(a)
    : []
}
function NP(e) {
  return typeof e == 'function'
}
function vc(e) {
  return typeof e == 'string' ? { type: e } : e
}
function AP(e, t) {
  return e.catch(t)
}
var xo = Symbol('forceQueryFn'),
  _c = (e) => typeof e[xo] == 'function'
function RP({
  serializeQueryArgs: e,
  queryThunk: t,
  mutationThunk: n,
  api: r,
  context: o
}) {
  const a = new Map(),
    u = new Map(),
    {
      unsubscribeQueryResult: d,
      removeMutationResult: c,
      updateSubscriptionOptions: p
    } = r.internalActions
  return {
    buildInitiateQuery: T,
    buildInitiateMutation: E,
    getRunningQueryThunk: m,
    getRunningMutationThunk: y,
    getRunningQueriesThunk: g,
    getRunningMutationsThunk: w
  }
  function m(k, S) {
    return (v) => {
      var C
      const _ = o.endpointDefinitions[k],
        P = e({ queryArgs: S, endpointDefinition: _, endpointName: k })
      return (C = a.get(v)) == null ? void 0 : C[P]
    }
  }
  function y(k, S) {
    return (v) => {
      var _
      return (_ = u.get(v)) == null ? void 0 : _[S]
    }
  }
  function g() {
    return (k) => Object.values(a.get(k) || {}).filter(Tp)
  }
  function w() {
    return (k) => Object.values(u.get(k) || {}).filter(Tp)
  }
  function T(k, S) {
    const v =
      (
        _,
        {
          subscribe: P = !0,
          forceRefetch: C,
          subscriptionOptions: b,
          [xo]: M,
          ...O
        } = {}
      ) =>
      (A, z) => {
        var te
        const R = e({ queryArgs: _, endpointDefinition: S, endpointName: k }),
          F = t({
            ...O,
            type: 'query',
            subscribe: P,
            forceRefetch: C,
            subscriptionOptions: b,
            endpointName: k,
            originalArgs: _,
            queryCacheKey: R,
            [xo]: M
          }),
          Z = r.endpoints[k].select(_),
          V = A(F),
          Y = Z(z()),
          { requestId: X, abort: pe } = V,
          D = Y.requestId !== X,
          U = (te = a.get(A)) == null ? void 0 : te[R],
          $ = () => Z(z()),
          Q = Object.assign(
            M
              ? V.then($)
              : D && !U
              ? Promise.resolve(Y)
              : Promise.all([U, V]).then($),
            {
              arg: _,
              requestId: X,
              subscriptionOptions: b,
              queryCacheKey: R,
              abort: pe,
              async unwrap() {
                const ce = await Q
                if (ce.isError) throw ce.error
                return ce.data
              },
              refetch: () => A(v(_, { subscribe: !1, forceRefetch: !0 })),
              unsubscribe() {
                P && A(d({ queryCacheKey: R, requestId: X }))
              },
              updateSubscriptionOptions(ce) {
                ;(Q.subscriptionOptions = ce),
                  A(
                    p({
                      endpointName: k,
                      requestId: X,
                      queryCacheKey: R,
                      options: ce
                    })
                  )
              }
            }
          )
        if (!U && !D && !M) {
          const ce = a.get(A) || {}
          ;(ce[R] = Q),
            a.set(A, ce),
            Q.then(() => {
              delete ce[R], Ji(ce) || a.delete(A)
            })
        }
        return Q
      }
    return v
  }
  function E(k) {
    return (S, { track: v = !0, fixedCacheKey: _ } = {}) =>
      (P, C) => {
        const b = n({
            type: 'mutation',
            endpointName: k,
            originalArgs: S,
            track: v,
            fixedCacheKey: _
          }),
          M = P(b),
          { requestId: O, abort: A, unwrap: z } = M,
          R = AP(
            M.unwrap().then((Y) => ({ data: Y })),
            (Y) => ({ error: Y })
          ),
          F = () => {
            P(c({ requestId: O, fixedCacheKey: _ }))
          },
          Z = Object.assign(R, {
            arg: M.arg,
            requestId: O,
            abort: A,
            unwrap: z,
            reset: F
          }),
          V = u.get(P) || {}
        return (
          u.set(P, V),
          (V[O] = Z),
          Z.then(() => {
            delete V[O], Ji(V) || u.delete(P)
          }),
          _ &&
            ((V[_] = Z),
            Z.then(() => {
              V[_] === Z && (delete V[_], Ji(V) || u.delete(P))
            })),
          Z
        )
      }
  }
}
function Lp(e) {
  return e
}
function DP({
  reducerPath: e,
  baseQuery: t,
  context: { endpointDefinitions: n },
  serializeQueryArgs: r,
  api: o,
  assertTagType: a
}) {
  const u = (v, _, P, C) => (b, M) => {
      const O = n[v],
        A = r({ queryArgs: _, endpointDefinition: O, endpointName: v })
      if (
        (b(
          o.internalActions.queryResultPatched({ queryCacheKey: A, patches: P })
        ),
        !C)
      )
        return
      const z = o.endpoints[v].select(_)(M()),
        R = Ld(O.providesTags, z.data, void 0, _, {}, a)
      b(
        o.internalActions.updateProvidedBy({
          queryCacheKey: A,
          providedTags: R
        })
      )
    },
    d =
      (v, _, P, C = !0) =>
      (b, M) => {
        const A = o.endpoints[v].select(_)(M()),
          z = {
            patches: [],
            inversePatches: [],
            undo: () => b(o.util.patchQueryData(v, _, z.inversePatches, C))
          }
        if (A.status === 'uninitialized') return z
        let R
        if ('data' in A)
          if (Bt(A.data)) {
            const [F, Z, V] = qv(A.data, P)
            z.patches.push(...Z), z.inversePatches.push(...V), (R = F)
          } else
            (R = P(A.data)),
              z.patches.push({ op: 'replace', path: [], value: R }),
              z.inversePatches.push({ op: 'replace', path: [], value: A.data })
        return (
          z.patches.length === 0 ||
            b(o.util.patchQueryData(v, _, z.patches, C)),
          z
        )
      },
    c = (v, _, P) => (C) =>
      C(
        o.endpoints[v].initiate(_, {
          subscribe: !1,
          forceRefetch: !0,
          [xo]: () => ({ data: P })
        })
      ),
    p = async (
      v,
      {
        signal: _,
        abort: P,
        rejectWithValue: C,
        fulfillWithValue: b,
        dispatch: M,
        getState: O,
        extra: A
      }
    ) => {
      const z = n[v.endpointName]
      try {
        let R = Lp,
          F
        const Z = {
            signal: _,
            abort: P,
            dispatch: M,
            getState: O,
            extra: A,
            endpoint: v.endpointName,
            type: v.type,
            forced: v.type === 'query' ? m(v, O()) : void 0,
            queryCacheKey: v.type === 'query' ? v.queryCacheKey : void 0
          },
          V = v.type === 'query' ? v[xo] : void 0
        if (
          (V
            ? (F = V())
            : z.query
            ? ((F = await t(z.query(v.originalArgs), Z, z.extraOptions)),
              z.transformResponse && (R = z.transformResponse))
            : (F = await z.queryFn(v.originalArgs, Z, z.extraOptions, (Y) =>
                t(Y, Z, z.extraOptions)
              )),
          typeof process < 'u',
          F.error)
        )
          throw new Cp(F.error, F.meta)
        return b(await R(F.data, F.meta, v.originalArgs), {
          fulfilledTimeStamp: Date.now(),
          baseQueryMeta: F.meta,
          [oi]: !0
        })
      } catch (R) {
        let F = R
        if (F instanceof Cp) {
          let Z = Lp
          z.query && z.transformErrorResponse && (Z = z.transformErrorResponse)
          try {
            return C(await Z(F.value, F.meta, v.originalArgs), {
              baseQueryMeta: F.meta,
              [oi]: !0
            })
          } catch (V) {
            F = V
          }
        }
        throw (typeof process < 'u', console.error(F), F)
      }
    }
  function m(v, _) {
    var O, A, z
    const P =
        (A = (O = _[e]) == null ? void 0 : O.queries) == null
          ? void 0
          : A[v.queryCacheKey],
      C = (z = _[e]) == null ? void 0 : z.config.refetchOnMountOrArgChange,
      b = P == null ? void 0 : P.fulfilledTimeStamp,
      M = v.forceRefetch ?? (v.subscribe && C)
    return M ? M === !0 || (Number(new Date()) - Number(b)) / 1e3 >= M : !1
  }
  const y = wp(`${e}/executeQuery`, p, {
      getPendingMeta() {
        return { startedTimeStamp: Date.now(), [oi]: !0 }
      },
      condition(v, { getState: _ }) {
        var z, R, F
        const P = _(),
          C =
            (R = (z = P[e]) == null ? void 0 : z.queries) == null
              ? void 0
              : R[v.queryCacheKey],
          b = C == null ? void 0 : C.fulfilledTimeStamp,
          M = v.originalArgs,
          O = C == null ? void 0 : C.originalArgs,
          A = n[v.endpointName]
        return _c(v)
          ? !0
          : (C == null ? void 0 : C.status) === 'pending'
          ? !1
          : m(v, P) ||
            (t_(A) &&
              (F = A == null ? void 0 : A.forceRefetch) != null &&
              F.call(A, {
                currentArg: M,
                previousArg: O,
                endpointState: C,
                state: P
              }))
          ? !0
          : !b
      },
      dispatchConditionRejection: !0
    }),
    g = wp(`${e}/executeMutation`, p, {
      getPendingMeta() {
        return { startedTimeStamp: Date.now(), [oi]: !0 }
      }
    }),
    w = (v) => 'force' in v,
    T = (v) => 'ifOlderThan' in v,
    E = (v, _, P) => (C, b) => {
      const M = w(P) && P.force,
        O = T(P) && P.ifOlderThan,
        A = (R = !0) => {
          const F = { forceRefetch: R, isPrefetch: !0 }
          return o.endpoints[v].initiate(_, F)
        },
        z = o.endpoints[v].select(_)(b())
      if (M) C(A())
      else if (O) {
        const R = z == null ? void 0 : z.fulfilledTimeStamp
        if (!R) {
          C(A())
          return
        }
        ;(Number(new Date()) - Number(new Date(R))) / 1e3 >= O && C(A())
      } else C(A(!1))
    }
  function k(v) {
    return (_) => {
      var P, C
      return (
        ((C = (P = _ == null ? void 0 : _.meta) == null ? void 0 : P.arg) ==
        null
          ? void 0
          : C.endpointName) === v
      )
    }
  }
  function S(v, _) {
    return {
      matchPending: Xr(Td(v), k(_)),
      matchFulfilled: Xr(Hn(v), k(_)),
      matchRejected: Xr(ar(v), k(_))
    }
  }
  return {
    queryThunk: y,
    mutationThunk: g,
    prefetch: E,
    updateQueryData: d,
    upsertQueryData: c,
    patchQueryData: u,
    buildMatchThunkActions: S
  }
}
function n_(e, t, n, r) {
  return Ld(
    n[e.meta.arg.endpointName][t],
    Hn(e) ? e.payload : void 0,
    Fa(e) ? e.payload : void 0,
    e.meta.arg.originalArgs,
    'baseQueryMeta' in e.meta ? e.meta.baseQueryMeta : void 0,
    r
  )
}
function xs(e, t, n) {
  const r = e[t]
  r && n(r)
}
function To(e) {
  return ('arg' in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId
}
function kp(e, t, n) {
  const r = e[To(t)]
  r && n(r)
}
var Nr = {}
function jP({
  reducerPath: e,
  queryThunk: t,
  mutationThunk: n,
  serializeQueryArgs: r,
  context: {
    endpointDefinitions: o,
    apiUid: a,
    extractRehydrationInfo: u,
    hasRehydrationInfo: d
  },
  assertTagType: c,
  config: p
}) {
  const m = Dt(`${e}/resetApiState`)
  function y(b, M, O, A) {
    var z
    b[(z = M.queryCacheKey)] ??
      (b[z] = { status: 'uninitialized', endpointName: M.endpointName }),
      xs(b, M.queryCacheKey, (R) => {
        ;(R.status = 'pending'),
          (R.requestId = O && R.requestId ? R.requestId : A.requestId),
          M.originalArgs !== void 0 && (R.originalArgs = M.originalArgs),
          (R.startedTimeStamp = A.startedTimeStamp)
      })
  }
  function g(b, M, O) {
    xs(b, M.arg.queryCacheKey, (A) => {
      if (A.requestId !== M.requestId && !_c(M.arg)) return
      const { merge: z } = o[M.arg.endpointName]
      if (((A.status = 'fulfilled'), z))
        if (A.data !== void 0) {
          const {
            fulfilledTimeStamp: R,
            arg: F,
            baseQueryMeta: Z,
            requestId: V
          } = M
          let Y = zo(A.data, (X) =>
            z(X, O, {
              arg: F.originalArgs,
              baseQueryMeta: Z,
              fulfilledTimeStamp: R,
              requestId: V
            })
          )
          A.data = Y
        } else A.data = O
      else
        A.data =
          o[M.arg.endpointName].structuralSharing ?? !0
            ? Yv(Kt(A.data) ? OE(A.data) : A.data, O)
            : O
      delete A.error, (A.fulfilledTimeStamp = M.fulfilledTimeStamp)
    })
  }
  const w = Pn({
      name: `${e}/queries`,
      initialState: Nr,
      reducers: {
        removeQueryResult: {
          reducer(b, { payload: { queryCacheKey: M } }) {
            delete b[M]
          },
          prepare: zr()
        },
        cacheEntriesUpserted: {
          reducer(b, M) {
            for (const O of M.payload) {
              const { queryDescription: A, value: z } = O
              y(b, A, !0, {
                arg: A,
                requestId: M.meta.requestId,
                startedTimeStamp: M.meta.timestamp
              }),
                g(
                  b,
                  {
                    arg: A,
                    requestId: M.meta.requestId,
                    fulfilledTimeStamp: M.meta.timestamp,
                    baseQueryMeta: {}
                  },
                  z
                )
            }
          },
          prepare: (b) => ({
            payload: b.map((A) => {
              const { endpointName: z, arg: R, value: F } = A,
                Z = o[z]
              return {
                queryDescription: {
                  type: 'query',
                  endpointName: z,
                  originalArgs: A.arg,
                  queryCacheKey: r({
                    queryArgs: R,
                    endpointDefinition: Z,
                    endpointName: z
                  })
                },
                value: F
              }
            }),
            meta: { [oi]: !0, requestId: Ed(), timestamp: Date.now() }
          })
        },
        queryResultPatched: {
          reducer(b, { payload: { queryCacheKey: M, patches: O } }) {
            xs(b, M, (A) => {
              A.data = pp(A.data, O.concat())
            })
          },
          prepare: zr()
        }
      },
      extraReducers(b) {
        b.addCase(t.pending, (M, { meta: O, meta: { arg: A } }) => {
          const z = _c(A)
          y(M, A, z, O)
        })
          .addCase(t.fulfilled, (M, { meta: O, payload: A }) => {
            g(M, O, A)
          })
          .addCase(
            t.rejected,
            (
              M,
              {
                meta: { condition: O, arg: A, requestId: z },
                error: R,
                payload: F
              }
            ) => {
              xs(M, A.queryCacheKey, (Z) => {
                if (!O) {
                  if (Z.requestId !== z) return
                  ;(Z.status = 'rejected'), (Z.error = F ?? R)
                }
              })
            }
          )
          .addMatcher(d, (M, O) => {
            const { queries: A } = u(O)
            for (const [z, R] of Object.entries(A))
              ((R == null ? void 0 : R.status) === 'fulfilled' ||
                (R == null ? void 0 : R.status) === 'rejected') &&
                (M[z] = R)
          })
      }
    }),
    T = Pn({
      name: `${e}/mutations`,
      initialState: Nr,
      reducers: {
        removeMutationResult: {
          reducer(b, { payload: M }) {
            const O = To(M)
            O in b && delete b[O]
          },
          prepare: zr()
        }
      },
      extraReducers(b) {
        b.addCase(
          n.pending,
          (
            M,
            { meta: O, meta: { requestId: A, arg: z, startedTimeStamp: R } }
          ) => {
            z.track &&
              (M[To(O)] = {
                requestId: A,
                status: 'pending',
                endpointName: z.endpointName,
                startedTimeStamp: R
              })
          }
        )
          .addCase(n.fulfilled, (M, { payload: O, meta: A }) => {
            A.arg.track &&
              kp(M, A, (z) => {
                z.requestId === A.requestId &&
                  ((z.status = 'fulfilled'),
                  (z.data = O),
                  (z.fulfilledTimeStamp = A.fulfilledTimeStamp))
              })
          })
          .addCase(n.rejected, (M, { payload: O, error: A, meta: z }) => {
            z.arg.track &&
              kp(M, z, (R) => {
                R.requestId === z.requestId &&
                  ((R.status = 'rejected'), (R.error = O ?? A))
              })
          })
          .addMatcher(d, (M, O) => {
            const { mutations: A } = u(O)
            for (const [z, R] of Object.entries(A))
              ((R == null ? void 0 : R.status) === 'fulfilled' ||
                (R == null ? void 0 : R.status) === 'rejected') &&
                z !== (R == null ? void 0 : R.requestId) &&
                (M[z] = R)
          })
      }
    }),
    E = Pn({
      name: `${e}/invalidation`,
      initialState: Nr,
      reducers: {
        updateProvidedBy: {
          reducer(b, M) {
            var z, R
            const { queryCacheKey: O, providedTags: A } = M.payload
            for (const F of Object.values(b))
              for (const Z of Object.values(F)) {
                const V = Z.indexOf(O)
                V !== -1 && Z.splice(V, 1)
              }
            for (const { type: F, id: Z } of A) {
              const V =
                (z = b[F] ?? (b[F] = {}))[(R = Z || '__internal_without_id')] ??
                (z[R] = [])
              V.includes(O) || V.push(O)
            }
          },
          prepare: zr()
        }
      },
      extraReducers(b) {
        b.addCase(
          w.actions.removeQueryResult,
          (M, { payload: { queryCacheKey: O } }) => {
            for (const A of Object.values(M))
              for (const z of Object.values(A)) {
                const R = z.indexOf(O)
                R !== -1 && z.splice(R, 1)
              }
          }
        )
          .addMatcher(d, (M, O) => {
            var z, R
            const { provided: A } = u(O)
            for (const [F, Z] of Object.entries(A))
              for (const [V, Y] of Object.entries(Z)) {
                const X =
                  (z = M[F] ?? (M[F] = {}))[
                    (R = V || '__internal_without_id')
                  ] ?? (z[R] = [])
                for (const pe of Y) X.includes(pe) || X.push(pe)
              }
          })
          .addMatcher(gn(Hn(t), Fa(t)), (M, O) => {
            const A = n_(O, 'providesTags', o, c),
              { queryCacheKey: z } = O.meta.arg
            E.caseReducers.updateProvidedBy(
              M,
              E.actions.updateProvidedBy({ queryCacheKey: z, providedTags: A })
            )
          })
      }
    }),
    k = Pn({
      name: `${e}/subscriptions`,
      initialState: Nr,
      reducers: {
        updateSubscriptionOptions(b, M) {},
        unsubscribeQueryResult(b, M) {},
        internal_getRTKQSubscriptions() {}
      }
    }),
    S = Pn({
      name: `${e}/internalSubscriptions`,
      initialState: Nr,
      reducers: {
        subscriptionsUpdated: {
          reducer(b, M) {
            return pp(b, M.payload)
          },
          prepare: zr()
        }
      }
    }),
    v = Pn({
      name: `${e}/config`,
      initialState: {
        online: LP(),
        focused: CP(),
        middlewareRegistered: !1,
        ...p
      },
      reducers: {
        middlewareRegistered(b, { payload: M }) {
          b.middlewareRegistered =
            b.middlewareRegistered === 'conflict' || a !== M ? 'conflict' : !0
        }
      },
      extraReducers: (b) => {
        b.addCase(Cd, (M) => {
          M.online = !0
        })
          .addCase(e_, (M) => {
            M.online = !1
          })
          .addCase(Pd, (M) => {
            M.focused = !0
          })
          .addCase(Jv, (M) => {
            M.focused = !1
          })
          .addMatcher(d, (M) => ({ ...M }))
      }
    }),
    _ = Dv({
      queries: w.reducer,
      mutations: T.reducer,
      provided: E.reducer,
      subscriptions: S.reducer,
      config: v.reducer
    }),
    P = (b, M) => _(m.match(M) ? void 0 : b, M),
    C = {
      ...v.actions,
      ...w.actions,
      ...k.actions,
      ...S.actions,
      ...T.actions,
      ...E.actions,
      resetApiState: m
    }
  return { reducer: P, actions: C }
}
var si = Symbol.for('RTKQ/skipToken'),
  i_ = { status: 'uninitialized' },
  Mp = zo(i_, () => {}),
  bp = zo(i_, () => {})
function BP({ serializeQueryArgs: e, reducerPath: t, createSelector: n }) {
  const r = (y) => Mp,
    o = (y) => bp
  return {
    buildQuerySelector: d,
    buildMutationSelector: c,
    selectInvalidatedBy: p,
    selectCachedArgsForQuery: m
  }
  function a(y) {
    return { ...y, ...EP(y.status) }
  }
  function u(y) {
    return y[t]
  }
  function d(y, g) {
    return (w) => {
      const T = e({ queryArgs: w, endpointDefinition: g, endpointName: y })
      return n(
        w === si
          ? r
          : (S) => {
              var v, _
              return (
                ((_ = (v = u(S)) == null ? void 0 : v.queries) == null
                  ? void 0
                  : _[T]) ?? Mp
              )
            },
        a
      )
    }
  }
  function c() {
    return (y) => {
      let g
      return (
        typeof y == 'object' ? (g = To(y) ?? si) : (g = y),
        n(
          g === si
            ? o
            : (E) => {
                var k, S
                return (
                  ((S = (k = u(E)) == null ? void 0 : k.mutations) == null
                    ? void 0
                    : S[g]) ?? bp
                )
              },
          a
        )
      )
    }
  }
  function p(y, g) {
    const w = y[t],
      T = new Set()
    for (const E of g.map(vc)) {
      const k = w.provided[E.type]
      if (!k) continue
      let S = (E.id !== void 0 ? k[E.id] : xp(Object.values(k))) ?? []
      for (const v of S) T.add(v)
    }
    return xp(
      Array.from(T.values()).map((E) => {
        const k = w.queries[E]
        return k
          ? [
              {
                queryCacheKey: E,
                endpointName: k.endpointName,
                originalArgs: k.originalArgs
              }
            ]
          : []
      })
    )
  }
  function m(y, g) {
    return Object.values(y[t].queries)
      .filter(
        (w) =>
          (w == null ? void 0 : w.endpointName) === g &&
          w.status !== 'uninitialized'
      )
      .map((w) => w.originalArgs)
  }
}
var Oi = WeakMap ? new WeakMap() : void 0,
  Op = ({ endpointName: e, queryArgs: t }) => {
    let n = ''
    const r = Oi == null ? void 0 : Oi.get(t)
    if (typeof r == 'string') n = r
    else {
      const o = JSON.stringify(
        t,
        (a, u) => (
          (u = typeof u == 'bigint' ? { $bigint: u.toString() } : u),
          (u = Qt(u)
            ? Object.keys(u)
                .sort()
                .reduce((d, c) => ((d[c] = u[c]), d), {})
            : u),
          u
        )
      )
      Qt(t) && (Oi == null || Oi.set(t, o)), (n = o)
    }
    return `${e}(${n})`
  }
function FP(...e) {
  return function (n) {
    const r = ya((p) => {
        var m
        return (m = n.extractRehydrationInfo) == null
          ? void 0
          : m.call(n, p, { reducerPath: n.reducerPath ?? 'api' })
      }),
      o = {
        reducerPath: 'api',
        keepUnusedDataFor: 60,
        refetchOnMountOrArgChange: !1,
        refetchOnFocus: !1,
        refetchOnReconnect: !1,
        invalidationBehavior: 'delayed',
        ...n,
        extractRehydrationInfo: r,
        serializeQueryArgs(p) {
          let m = Op
          if ('serializeQueryArgs' in p.endpointDefinition) {
            const y = p.endpointDefinition.serializeQueryArgs
            m = (g) => {
              const w = y(g)
              return typeof w == 'string' ? w : Op({ ...g, queryArgs: w })
            }
          } else n.serializeQueryArgs && (m = n.serializeQueryArgs)
          return m(p)
        },
        tagTypes: [...(n.tagTypes || [])]
      },
      a = {
        endpointDefinitions: {},
        batch(p) {
          p()
        },
        apiUid: Ed(),
        extractRehydrationInfo: r,
        hasRehydrationInfo: ya((p) => r(p) != null)
      },
      u = {
        injectEndpoints: c,
        enhanceEndpoints({ addTagTypes: p, endpoints: m }) {
          if (p) for (const y of p) o.tagTypes.includes(y) || o.tagTypes.push(y)
          if (m)
            for (const [y, g] of Object.entries(m))
              typeof g == 'function'
                ? g(a.endpointDefinitions[y])
                : Object.assign(a.endpointDefinitions[y] || {}, g)
          return u
        }
      },
      d = e.map((p) => p.init(u, o, a))
    function c(p) {
      const m = p.endpoints({
        query: (y) => ({ ...y, type: 'query' }),
        mutation: (y) => ({ ...y, type: 'mutation' })
      })
      for (const [y, g] of Object.entries(m)) {
        if (p.overrideExisting !== !0 && y in a.endpointDefinitions) {
          if (p.overrideExisting === 'throw') throw new Error(Ct(39))
          typeof process < 'u'
          continue
        }
        a.endpointDefinitions[y] = g
        for (const w of d) w.injectEndpoint(y, g)
      }
      return u
    }
    return u.injectEndpoints({ endpoints: n.endpoints })
  }
}
function xn(e, ...t) {
  return Object.assign(e, ...t)
}
var $P = ({ api: e, queryThunk: t, internalState: n }) => {
  const r = `${e.reducerPath}/subscriptions`
  let o = null,
    a = null
  const { updateSubscriptionOptions: u, unsubscribeQueryResult: d } =
      e.internalActions,
    c = (w, T) => {
      var k, S, v
      if (u.match(T)) {
        const { queryCacheKey: _, requestId: P, options: C } = T.payload
        return (
          (k = w == null ? void 0 : w[_]) != null && k[P] && (w[_][P] = C), !0
        )
      }
      if (d.match(T)) {
        const { queryCacheKey: _, requestId: P } = T.payload
        return w[_] && delete w[_][P], !0
      }
      if (e.internalActions.removeQueryResult.match(T))
        return delete w[T.payload.queryCacheKey], !0
      if (t.pending.match(T)) {
        const {
            meta: { arg: _, requestId: P }
          } = T,
          C = w[(S = _.queryCacheKey)] ?? (w[S] = {})
        return (
          (C[`${P}_running`] = {}),
          _.subscribe && (C[P] = _.subscriptionOptions ?? C[P] ?? {}),
          !0
        )
      }
      let E = !1
      if (t.fulfilled.match(T) || t.rejected.match(T)) {
        const _ = w[T.meta.arg.queryCacheKey] || {},
          P = `${T.meta.requestId}_running`
        E || (E = !!_[P]), delete _[P]
      }
      if (t.rejected.match(T)) {
        const {
          meta: { condition: _, arg: P, requestId: C }
        } = T
        if (_ && P.subscribe) {
          const b = w[(v = P.queryCacheKey)] ?? (w[v] = {})
          ;(b[C] = P.subscriptionOptions ?? b[C] ?? {}), (E = !0)
        }
      }
      return E
    },
    p = () => n.currentSubscriptions,
    g = {
      getSubscriptions: p,
      getSubscriptionCount: (w) => {
        const E = p()[w] ?? {}
        return Ji(E)
      },
      isRequestSubscribed: (w, T) => {
        var k
        const E = p()
        return !!((k = E == null ? void 0 : E[w]) != null && k[T])
      }
    }
  return (w, T) => {
    if (
      (o || (o = JSON.parse(JSON.stringify(n.currentSubscriptions))),
      e.util.resetApiState.match(w))
    )
      return (o = n.currentSubscriptions = {}), (a = null), [!0, !1]
    if (e.internalActions.internal_getRTKQSubscriptions.match(w)) return [!1, g]
    const E = c(n.currentSubscriptions, w)
    let k = !0
    if (E) {
      a ||
        (a = setTimeout(() => {
          const _ = JSON.parse(JSON.stringify(n.currentSubscriptions)),
            [, P] = qv(o, () => _)
          T.next(e.internalActions.subscriptionsUpdated(P)), (o = _), (a = null)
        }, 500))
      const S = typeof w.type == 'string' && !!w.type.startsWith(r),
        v = t.rejected.match(w) && w.meta.condition && !!w.meta.arg.subscribe
      k = !S && !v
    }
    return [k, !1]
  }
}
function ZP(e) {
  for (const t in e) return !1
  return !0
}
var HP = 2147483647 / 1e3 - 1,
  qP = ({
    reducerPath: e,
    api: t,
    queryThunk: n,
    context: r,
    internalState: o
  }) => {
    const {
        removeQueryResult: a,
        unsubscribeQueryResult: u,
        cacheEntriesUpserted: d
      } = t.internalActions,
      c = gn(u.match, n.fulfilled, n.rejected, d.match)
    function p(w) {
      const T = o.currentSubscriptions[w]
      return !!T && !ZP(T)
    }
    const m = {},
      y = (w, T, E) => {
        var k
        if (c(w)) {
          const S = T.getState()[e]
          let v
          if (d.match(w))
            v = w.payload.map((_) => _.queryDescription.queryCacheKey)
          else {
            const { queryCacheKey: _ } = u.match(w) ? w.payload : w.meta.arg
            v = [_]
          }
          for (const _ of v)
            g(
              _,
              (k = S.queries[_]) == null ? void 0 : k.endpointName,
              T,
              S.config
            )
        }
        if (t.util.resetApiState.match(w))
          for (const [S, v] of Object.entries(m))
            v && clearTimeout(v), delete m[S]
        if (r.hasRehydrationInfo(w)) {
          const S = T.getState()[e],
            { queries: v } = r.extractRehydrationInfo(w)
          for (const [_, P] of Object.entries(v))
            g(_, P == null ? void 0 : P.endpointName, T, S.config)
        }
      }
    function g(w, T, E, k) {
      const S = r.endpointDefinitions[T],
        v = (S == null ? void 0 : S.keepUnusedDataFor) ?? k.keepUnusedDataFor
      if (v === 1 / 0) return
      const _ = Math.max(0, Math.min(v, HP))
      if (!p(w)) {
        const P = m[w]
        P && clearTimeout(P),
          (m[w] = setTimeout(() => {
            p(w) || E.dispatch(a({ queryCacheKey: w })), delete m[w]
          }, _ * 1e3))
      }
    }
    return y
  },
  Ip = new Error('Promise never resolved before cacheEntryRemoved.'),
  VP = ({
    api: e,
    reducerPath: t,
    context: n,
    queryThunk: r,
    mutationThunk: o,
    internalState: a
  }) => {
    const u = gc(r),
      d = gc(o),
      c = Hn(r, o),
      p = {}
    function m(E, k, S) {
      const v = p[E]
      v != null &&
        v.valueResolved &&
        (v.valueResolved({ data: k, meta: S }), delete v.valueResolved)
    }
    function y(E) {
      const k = p[E]
      k && (delete p[E], k.cacheEntryRemoved())
    }
    const g = (E, k, S) => {
      const v = w(E)
      function _(P, C, b, M) {
        const O = S[t].queries[C],
          A = k.getState()[t].queries[C]
        !O && A && T(P, M, C, k, b)
      }
      if (r.pending.match(E))
        _(E.meta.arg.endpointName, v, E.meta.requestId, E.meta.arg.originalArgs)
      else if (e.internalActions.cacheEntriesUpserted.match(E))
        for (const { queryDescription: P, value: C } of E.payload) {
          const { endpointName: b, originalArgs: M, queryCacheKey: O } = P
          _(b, O, E.meta.requestId, M), m(O, C, {})
        }
      else if (o.pending.match(E))
        k.getState()[t].mutations[v] &&
          T(
            E.meta.arg.endpointName,
            E.meta.arg.originalArgs,
            v,
            k,
            E.meta.requestId
          )
      else if (c(E)) m(v, E.payload, E.meta.baseQueryMeta)
      else if (
        e.internalActions.removeQueryResult.match(E) ||
        e.internalActions.removeMutationResult.match(E)
      )
        y(v)
      else if (e.util.resetApiState.match(E))
        for (const P of Object.keys(p)) y(P)
    }
    function w(E) {
      return u(E)
        ? E.meta.arg.queryCacheKey
        : d(E)
        ? E.meta.arg.fixedCacheKey ?? E.meta.requestId
        : e.internalActions.removeQueryResult.match(E)
        ? E.payload.queryCacheKey
        : e.internalActions.removeMutationResult.match(E)
        ? To(E.payload)
        : ''
    }
    function T(E, k, S, v, _) {
      const P = n.endpointDefinitions[E],
        C = P == null ? void 0 : P.onCacheEntryAdded
      if (!C) return
      const b = {},
        M = new Promise((Z) => {
          b.cacheEntryRemoved = Z
        }),
        O = Promise.race([
          new Promise((Z) => {
            b.valueResolved = Z
          }),
          M.then(() => {
            throw Ip
          })
        ])
      O.catch(() => {}), (p[S] = b)
      const A = e.endpoints[E].select(P.type === 'query' ? k : S),
        z = v.dispatch((Z, V, Y) => Y),
        R = {
          ...v,
          getCacheEntry: () => A(v.getState()),
          requestId: _,
          extra: z,
          updateCachedData:
            P.type === 'query'
              ? (Z) => v.dispatch(e.util.updateQueryData(E, k, Z))
              : void 0,
          cacheDataLoaded: O,
          cacheEntryRemoved: M
        },
        F = C(k, R)
      Promise.resolve(F).catch((Z) => {
        if (Z !== Ip) throw Z
      })
    }
    return g
  },
  WP =
    ({ api: e, context: { apiUid: t }, reducerPath: n }) =>
    (r, o) => {
      e.util.resetApiState.match(r) &&
        o.dispatch(e.internalActions.middlewareRegistered(t)),
        typeof process < 'u'
    },
  UP = ({
    reducerPath: e,
    context: t,
    context: { endpointDefinitions: n },
    mutationThunk: r,
    queryThunk: o,
    api: a,
    assertTagType: u,
    refetchQuery: d,
    internalState: c
  }) => {
    const { removeQueryResult: p } = a.internalActions,
      m = gn(Hn(r), Fa(r)),
      y = gn(Hn(r, o), ar(r, o))
    let g = []
    const w = (k, S) => {
      m(k)
        ? E(n_(k, 'invalidatesTags', n, u), S)
        : y(k)
        ? E([], S)
        : a.util.invalidateTags.match(k) &&
          E(Ld(k.payload, void 0, void 0, void 0, void 0, u), S)
    }
    function T(k) {
      var S, v
      for (const _ in k.queries)
        if (((S = k.queries[_]) == null ? void 0 : S.status) === 'pending')
          return !0
      for (const _ in k.mutations)
        if (((v = k.mutations[_]) == null ? void 0 : v.status) === 'pending')
          return !0
      return !1
    }
    function E(k, S) {
      const v = S.getState(),
        _ = v[e]
      if ((g.push(...k), _.config.invalidationBehavior === 'delayed' && T(_)))
        return
      const P = g
      if (((g = []), P.length === 0)) return
      const C = a.util.selectInvalidatedBy(v, P)
      t.batch(() => {
        const b = Array.from(C.values())
        for (const { queryCacheKey: M } of b) {
          const O = _.queries[M],
            A = c.currentSubscriptions[M] ?? {}
          O &&
            (Ji(A) === 0
              ? S.dispatch(p({ queryCacheKey: M }))
              : O.status !== 'uninitialized' && S.dispatch(d(O)))
        }
      })
    }
    return w
  },
  GP = ({
    reducerPath: e,
    queryThunk: t,
    api: n,
    refetchQuery: r,
    internalState: o
  }) => {
    const a = {},
      u = (g, w) => {
        ;(n.internalActions.updateSubscriptionOptions.match(g) ||
          n.internalActions.unsubscribeQueryResult.match(g)) &&
          c(g.payload, w),
          (t.pending.match(g) || (t.rejected.match(g) && g.meta.condition)) &&
            c(g.meta.arg, w),
          (t.fulfilled.match(g) ||
            (t.rejected.match(g) && !g.meta.condition)) &&
            d(g.meta.arg, w),
          n.util.resetApiState.match(g) && m()
      }
    function d({ queryCacheKey: g }, w) {
      const T = w.getState()[e],
        E = T.queries[g],
        k = o.currentSubscriptions[g]
      if (!E || E.status === 'uninitialized') return
      const { lowestPollingInterval: S, skipPollingIfUnfocused: v } = y(k)
      if (!Number.isFinite(S)) return
      const _ = a[g]
      _ != null && _.timeout && (clearTimeout(_.timeout), (_.timeout = void 0))
      const P = Date.now() + S
      a[g] = {
        nextPollTimestamp: P,
        pollingInterval: S,
        timeout: setTimeout(() => {
          ;(T.config.focused || !v) && w.dispatch(r(E)),
            d({ queryCacheKey: g }, w)
        }, S)
      }
    }
    function c({ queryCacheKey: g }, w) {
      const E = w.getState()[e].queries[g],
        k = o.currentSubscriptions[g]
      if (!E || E.status === 'uninitialized') return
      const { lowestPollingInterval: S } = y(k)
      if (!Number.isFinite(S)) {
        p(g)
        return
      }
      const v = a[g],
        _ = Date.now() + S
      ;(!v || _ < v.nextPollTimestamp) && d({ queryCacheKey: g }, w)
    }
    function p(g) {
      const w = a[g]
      w != null && w.timeout && clearTimeout(w.timeout), delete a[g]
    }
    function m() {
      for (const g of Object.keys(a)) p(g)
    }
    function y(g = {}) {
      let w = !1,
        T = Number.POSITIVE_INFINITY
      for (let E in g)
        g[E].pollingInterval &&
          ((T = Math.min(g[E].pollingInterval, T)),
          (w = g[E].skipPollingIfUnfocused || w))
      return { lowestPollingInterval: T, skipPollingIfUnfocused: w }
    }
    return u
  },
  QP = ({ api: e, context: t, queryThunk: n, mutationThunk: r }) => {
    const o = Td(n, r),
      a = ar(n, r),
      u = Hn(n, r),
      d = {}
    return (p, m) => {
      var y, g
      if (o(p)) {
        const {
            requestId: w,
            arg: { endpointName: T, originalArgs: E }
          } = p.meta,
          k = t.endpointDefinitions[T],
          S = k == null ? void 0 : k.onQueryStarted
        if (S) {
          const v = {},
            _ = new Promise((M, O) => {
              ;(v.resolve = M), (v.reject = O)
            })
          _.catch(() => {}), (d[w] = v)
          const P = e.endpoints[T].select(k.type === 'query' ? E : w),
            C = m.dispatch((M, O, A) => A),
            b = {
              ...m,
              getCacheEntry: () => P(m.getState()),
              requestId: w,
              extra: C,
              updateCachedData:
                k.type === 'query'
                  ? (M) => m.dispatch(e.util.updateQueryData(T, E, M))
                  : void 0,
              queryFulfilled: _
            }
          S(E, b)
        }
      } else if (u(p)) {
        const { requestId: w, baseQueryMeta: T } = p.meta
        ;(y = d[w]) == null || y.resolve({ data: p.payload, meta: T }),
          delete d[w]
      } else if (a(p)) {
        const { requestId: w, rejectedWithValue: T, baseQueryMeta: E } = p.meta
        ;(g = d[w]) == null ||
          g.reject({
            error: p.payload ?? p.error,
            isUnhandledError: !T,
            meta: E
          }),
          delete d[w]
      }
    }
  },
  KP = ({
    reducerPath: e,
    context: t,
    api: n,
    refetchQuery: r,
    internalState: o
  }) => {
    const { removeQueryResult: a } = n.internalActions,
      u = (c, p) => {
        Pd.match(c) && d(p, 'refetchOnFocus'),
          Cd.match(c) && d(p, 'refetchOnReconnect')
      }
    function d(c, p) {
      const m = c.getState()[e],
        y = m.queries,
        g = o.currentSubscriptions
      t.batch(() => {
        for (const w of Object.keys(g)) {
          const T = y[w],
            E = g[w]
          if (!E || !T) continue
          ;(Object.values(E).some((S) => S[p] === !0) ||
            (Object.values(E).every((S) => S[p] === void 0) && m.config[p])) &&
            (Ji(E) === 0
              ? c.dispatch(a({ queryCacheKey: w }))
              : T.status !== 'uninitialized' && c.dispatch(r(T)))
        }
      })
    }
    return u
  }
function YP(e) {
  const { reducerPath: t, queryThunk: n, api: r, context: o } = e,
    { apiUid: a } = o,
    u = { invalidateTags: Dt(`${t}/invalidateTags`) },
    d = (y) => y.type.startsWith(`${t}/`),
    c = [WP, qP, UP, GP, VP, QP]
  return {
    middleware: (y) => {
      let g = !1
      const T = {
          ...e,
          internalState: { currentSubscriptions: {} },
          refetchQuery: m,
          isThisApiSliceAction: d
        },
        E = c.map((v) => v(T)),
        k = $P(T),
        S = KP(T)
      return (v) => (_) => {
        if (!jv(_)) return v(_)
        g || ((g = !0), y.dispatch(r.internalActions.middlewareRegistered(a)))
        const P = { ...y, next: v },
          C = y.getState(),
          [b, M] = k(_, P, C)
        let O
        if (
          (b ? (O = v(_)) : (O = M),
          y.getState()[t] && (S(_, P, C), d(_) || o.hasRehydrationInfo(_)))
        )
          for (const A of E) A(_, P, C)
        return O
      }
    },
    actions: u
  }
  function m(y) {
    return e.api.endpoints[y.endpointName].initiate(y.originalArgs, {
      subscribe: !1,
      forceRefetch: !0
    })
  }
}
var zp = Symbol(),
  XP = ({ createSelector: e = xd } = {}) => ({
    name: zp,
    init(
      t,
      {
        baseQuery: n,
        tagTypes: r,
        reducerPath: o,
        serializeQueryArgs: a,
        keepUnusedDataFor: u,
        refetchOnMountOrArgChange: d,
        refetchOnFocus: c,
        refetchOnReconnect: p,
        invalidationBehavior: m
      },
      y
    ) {
      $E()
      const g = (D) => (typeof process < 'u', D)
      Object.assign(t, {
        reducerPath: o,
        endpoints: {},
        internalActions: {
          onOnline: Cd,
          onOffline: e_,
          onFocus: Pd,
          onFocusLost: Jv
        },
        util: {}
      })
      const {
          queryThunk: w,
          mutationThunk: T,
          patchQueryData: E,
          updateQueryData: k,
          upsertQueryData: S,
          prefetch: v,
          buildMatchThunkActions: _
        } = DP({
          baseQuery: n,
          reducerPath: o,
          context: y,
          api: t,
          serializeQueryArgs: a,
          assertTagType: g
        }),
        { reducer: P, actions: C } = jP({
          context: y,
          queryThunk: w,
          mutationThunk: T,
          serializeQueryArgs: a,
          reducerPath: o,
          assertTagType: g,
          config: {
            refetchOnFocus: c,
            refetchOnReconnect: p,
            refetchOnMountOrArgChange: d,
            keepUnusedDataFor: u,
            reducerPath: o,
            invalidationBehavior: m
          }
        })
      xn(t.util, {
        patchQueryData: E,
        updateQueryData: k,
        upsertQueryData: S,
        prefetch: v,
        resetApiState: C.resetApiState,
        upsertQueryEntries: C.cacheEntriesUpserted
      }),
        xn(t.internalActions, C)
      const { middleware: b, actions: M } = YP({
        reducerPath: o,
        context: y,
        queryThunk: w,
        mutationThunk: T,
        api: t,
        assertTagType: g
      })
      xn(t.util, M), xn(t, { reducer: P, middleware: b })
      const {
        buildQuerySelector: O,
        buildMutationSelector: A,
        selectInvalidatedBy: z,
        selectCachedArgsForQuery: R
      } = BP({ serializeQueryArgs: a, reducerPath: o, createSelector: e })
      xn(t.util, { selectInvalidatedBy: z, selectCachedArgsForQuery: R })
      const {
        buildInitiateQuery: F,
        buildInitiateMutation: Z,
        getRunningMutationThunk: V,
        getRunningMutationsThunk: Y,
        getRunningQueriesThunk: X,
        getRunningQueryThunk: pe
      } = RP({
        queryThunk: w,
        mutationThunk: T,
        api: t,
        serializeQueryArgs: a,
        context: y
      })
      return (
        xn(t.util, {
          getRunningMutationThunk: V,
          getRunningMutationsThunk: Y,
          getRunningQueryThunk: pe,
          getRunningQueriesThunk: X
        }),
        {
          name: zp,
          injectEndpoint(D, U) {
            var Q
            const $ = t
            ;(Q = $.endpoints)[D] ?? (Q[D] = {}),
              t_(U)
                ? xn(
                    $.endpoints[D],
                    { name: D, select: O(D, U), initiate: F(D, U) },
                    _(w, D)
                  )
                : zP(U) &&
                  xn(
                    $.endpoints[D],
                    { name: D, select: A(), initiate: Z(D) },
                    _(T, D)
                  )
          }
        }
      )
    }
  })
function JP(e) {
  return e.type === 'query'
}
function eC(e) {
  return e.type === 'mutation'
}
function Ts(e, ...t) {
  return Object.assign(e, ...t)
}
function su(e) {
  return e.replace(e[0], e[0].toUpperCase())
}
var Ii = WeakMap ? new WeakMap() : void 0,
  tC = ({ endpointName: e, queryArgs: t }) => {
    let n = ''
    const r = Ii == null ? void 0 : Ii.get(t)
    if (typeof r == 'string') n = r
    else {
      const o = JSON.stringify(
        t,
        (a, u) => (
          (u = typeof u == 'bigint' ? { $bigint: u.toString() } : u),
          (u = Qt(u)
            ? Object.keys(u)
                .sort()
                .reduce((d, c) => ((d[c] = u[c]), d), {})
            : u),
          u
        )
      )
      Qt(t) && (Ii == null || Ii.set(t, o)), (n = o)
    }
    return `${e}(${n})`
  },
  au = Symbol()
function Np(e, t, n, r) {
  const o = H.useMemo(
      () => ({
        queryArgs: e,
        serialized:
          typeof e == 'object'
            ? t({ queryArgs: e, endpointDefinition: n, endpointName: r })
            : e
      }),
      [e, t, n, r]
    ),
    a = H.useRef(o)
  return (
    H.useEffect(() => {
      a.current.serialized !== o.serialized && (a.current = o)
    }, [o]),
    a.current.serialized === o.serialized ? a.current.queryArgs : e
  )
}
function lu(e) {
  const t = H.useRef(e)
  return (
    H.useEffect(() => {
      Qr(t.current, e) || (t.current = e)
    }, [e]),
    Qr(t.current, e) ? t.current : e
  )
}
var nC = () =>
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  iC = nC(),
  rC = () => typeof navigator < 'u' && navigator.product === 'ReactNative',
  oC = rC(),
  sC = () => (iC || oC ? H.useLayoutEffect : H.useEffect),
  aC = sC(),
  lC = (e) =>
    e.isUninitialized
      ? {
          ...e,
          isUninitialized: !1,
          isFetching: !0,
          isLoading: e.data === void 0,
          status: Kv.pending
        }
      : e
function uC({
  api: e,
  moduleOptions: {
    batch: t,
    hooks: { useDispatch: n, useSelector: r, useStore: o },
    unstable__sideEffectsInRender: a,
    createSelector: u
  },
  serializeQueryArgs: d,
  context: c
}) {
  const p = a ? (T) => T() : H.useEffect
  return { buildQueryHooks: g, buildMutationHook: w, usePrefetch: y }
  function m(T, E, k) {
    if (E != null && E.endpointName && T.isUninitialized) {
      const { endpointName: b } = E,
        M = c.endpointDefinitions[b]
      d({
        queryArgs: E.originalArgs,
        endpointDefinition: M,
        endpointName: b
      }) === d({ queryArgs: k, endpointDefinition: M, endpointName: b }) &&
        (E = void 0)
    }
    let S = T.isSuccess ? T.data : E == null ? void 0 : E.data
    S === void 0 && (S = T.data)
    const v = S !== void 0,
      _ = T.isLoading,
      P = (!E || E.isLoading || E.isUninitialized) && !v && _,
      C = T.isSuccess || (_ && v)
    return {
      ...T,
      data: S,
      currentData: T.data,
      isFetching: _,
      isLoading: P,
      isSuccess: C
    }
  }
  function y(T, E) {
    const k = n(),
      S = lu(E)
    return H.useCallback(
      (v, _) => k(e.util.prefetch(T, v, { ...S, ..._ })),
      [T, k, S]
    )
  }
  function g(T) {
    const E = (
        v,
        {
          refetchOnReconnect: _,
          refetchOnFocus: P,
          refetchOnMountOrArgChange: C,
          skip: b = !1,
          pollingInterval: M = 0,
          skipPollingIfUnfocused: O = !1
        } = {}
      ) => {
        const { initiate: A } = e.endpoints[T],
          z = n(),
          R = H.useRef(void 0)
        if (!R.current) {
          const $ = z(e.internalActions.internal_getRTKQSubscriptions())
          R.current = $
        }
        const F = Np(b ? si : v, tC, c.endpointDefinitions[T], T),
          Z = lu({
            refetchOnReconnect: _,
            refetchOnFocus: P,
            pollingInterval: M,
            skipPollingIfUnfocused: O
          }),
          V = H.useRef(!1),
          Y = H.useRef(void 0)
        let { queryCacheKey: X, requestId: pe } = Y.current || {},
          D = !1
        X && pe && (D = R.current.isRequestSubscribed(X, pe))
        const U = !D && V.current
        return (
          p(() => {
            V.current = D
          }),
          p(() => {
            U && (Y.current = void 0)
          }, [U]),
          p(() => {
            var te
            const $ = Y.current
            if ((typeof process < 'u', F === si)) {
              $ == null || $.unsubscribe(), (Y.current = void 0)
              return
            }
            const Q = (te = Y.current) == null ? void 0 : te.subscriptionOptions
            if (!$ || $.arg !== F) {
              $ == null || $.unsubscribe()
              const ce = z(A(F, { subscriptionOptions: Z, forceRefetch: C }))
              Y.current = ce
            } else Z !== Q && $.updateSubscriptionOptions(Z)
          }, [z, A, C, F, Z, U]),
          H.useEffect(
            () => () => {
              var $
              ;($ = Y.current) == null || $.unsubscribe(), (Y.current = void 0)
            },
            []
          ),
          H.useMemo(
            () => ({
              refetch: () => {
                var $
                if (!Y.current) throw new Error(Ct(38))
                return ($ = Y.current) == null ? void 0 : $.refetch()
              }
            }),
            []
          )
        )
      },
      k = ({
        refetchOnReconnect: v,
        refetchOnFocus: _,
        pollingInterval: P = 0,
        skipPollingIfUnfocused: C = !1
      } = {}) => {
        const { initiate: b } = e.endpoints[T],
          M = n(),
          [O, A] = H.useState(au),
          z = H.useRef(void 0),
          R = lu({
            refetchOnReconnect: v,
            refetchOnFocus: _,
            pollingInterval: P,
            skipPollingIfUnfocused: C
          })
        p(() => {
          var Y, X
          const V = (Y = z.current) == null ? void 0 : Y.subscriptionOptions
          R !== V && ((X = z.current) == null || X.updateSubscriptionOptions(R))
        }, [R])
        const F = H.useRef(R)
        p(() => {
          F.current = R
        }, [R])
        const Z = H.useCallback(
          function (V, Y = !1) {
            let X
            return (
              t(() => {
                var pe
                ;(pe = z.current) == null || pe.unsubscribe(),
                  (z.current = X =
                    M(
                      b(V, { subscriptionOptions: F.current, forceRefetch: !Y })
                    )),
                  A(V)
              }),
              X
            )
          },
          [M, b]
        )
        return (
          H.useEffect(
            () => () => {
              var V
              ;(V = z == null ? void 0 : z.current) == null || V.unsubscribe()
            },
            []
          ),
          H.useEffect(() => {
            O !== au && !z.current && Z(O, !0)
          }, [O, Z]),
          H.useMemo(() => [Z, O], [Z, O])
        )
      },
      S = (v, { skip: _ = !1, selectFromResult: P } = {}) => {
        const { select: C } = e.endpoints[T],
          b = Np(_ ? si : v, d, c.endpointDefinitions[T], T),
          M = H.useRef(void 0),
          O = H.useMemo(
            () =>
              u([C(b), (Z, V) => V, (Z) => b], m, {
                memoizeOptions: { resultEqualityCheck: Qr }
              }),
            [C, b]
          ),
          A = H.useMemo(
            () =>
              P
                ? u([O], P, {
                    devModeChecks: { identityFunctionCheck: 'never' }
                  })
                : O,
            [O, P]
          ),
          z = r((Z) => A(Z, M.current), Qr),
          R = o(),
          F = O(R.getState(), M.current)
        return (
          aC(() => {
            M.current = F
          }, [F]),
          z
        )
      }
    return {
      useQueryState: S,
      useQuerySubscription: E,
      useLazyQuerySubscription: k,
      useLazyQuery(v) {
        const [_, P] = k(v),
          C = S(P, { ...v, skip: P === au }),
          b = H.useMemo(() => ({ lastArg: P }), [P])
        return H.useMemo(() => [_, C, b], [_, C, b])
      },
      useQuery(v, _) {
        const P = E(v, _),
          C = S(v, {
            selectFromResult: v === si || (_ != null && _.skip) ? void 0 : lC,
            ..._
          }),
          {
            data: b,
            status: M,
            isLoading: O,
            isSuccess: A,
            isError: z,
            error: R
          } = C
        return (
          H.useDebugValue({
            data: b,
            status: M,
            isLoading: O,
            isSuccess: A,
            isError: z,
            error: R
          }),
          H.useMemo(() => ({ ...C, ...P }), [C, P])
        )
      }
    }
  }
  function w(T) {
    return ({ selectFromResult: E, fixedCacheKey: k } = {}) => {
      const { select: S, initiate: v } = e.endpoints[T],
        _ = n(),
        [P, C] = H.useState()
      H.useEffect(
        () => () => {
          ;(P != null && P.arg.fixedCacheKey) || P == null || P.reset()
        },
        [P]
      )
      const b = H.useCallback(
          function (Q) {
            const te = _(v(Q, { fixedCacheKey: k }))
            return C(te), te
          },
          [_, v, k]
        ),
        { requestId: M } = P || {},
        O = H.useMemo(
          () =>
            S({
              fixedCacheKey: k,
              requestId: P == null ? void 0 : P.requestId
            }),
          [k, P, S]
        ),
        A = H.useMemo(() => (E ? u([O], E) : O), [E, O]),
        z = r(A, Qr),
        R = k == null ? (P == null ? void 0 : P.arg.originalArgs) : void 0,
        F = H.useCallback(() => {
          t(() => {
            P && C(void 0),
              k &&
                _(
                  e.internalActions.removeMutationResult({
                    requestId: M,
                    fixedCacheKey: k
                  })
                )
          })
        }, [_, k, P, M]),
        {
          endpointName: Z,
          data: V,
          status: Y,
          isLoading: X,
          isSuccess: pe,
          isError: D,
          error: U
        } = z
      H.useDebugValue({
        endpointName: Z,
        data: V,
        status: Y,
        isLoading: X,
        isSuccess: pe,
        isError: D,
        error: U
      })
      const $ = H.useMemo(
        () => ({ ...z, originalArgs: R, reset: F }),
        [z, R, F]
      )
      return H.useMemo(() => [b, $], [b, $])
    }
  }
}
var cC = Symbol(),
  dC = ({
    batch: e = Lw,
    hooks: t = { useDispatch: Cw, useSelector: ev, useStore: iv },
    createSelector: n = xd,
    unstable__sideEffectsInRender: r = !1,
    ...o
  } = {}) => ({
    name: cC,
    init(a, { serializeQueryArgs: u }, d) {
      const c = a,
        {
          buildQueryHooks: p,
          buildMutationHook: m,
          usePrefetch: y
        } = uC({
          api: a,
          moduleOptions: {
            batch: e,
            hooks: t,
            unstable__sideEffectsInRender: r,
            createSelector: n
          },
          serializeQueryArgs: u,
          context: d
        })
      return (
        Ts(c, { usePrefetch: y }),
        Ts(d, { batch: e }),
        {
          injectEndpoint(g, w) {
            if (JP(w)) {
              const {
                useQuery: T,
                useLazyQuery: E,
                useLazyQuerySubscription: k,
                useQueryState: S,
                useQuerySubscription: v
              } = p(g)
              Ts(c.endpoints[g], {
                useQuery: T,
                useLazyQuery: E,
                useLazyQuerySubscription: k,
                useQueryState: S,
                useQuerySubscription: v
              }),
                (a[`use${su(g)}Query`] = T),
                (a[`useLazy${su(g)}Query`] = E)
            } else if (eC(w)) {
              const T = m(g)
              Ts(c.endpoints[g], { useMutation: T }),
                (a[`use${su(g)}Mutation`] = T)
            }
          }
        }
      )
    }
  }),
  r_ = FP(XP(), dC())
const zi = 'quickstart-f31ee0a4.myshopify.com',
  Fs = r_({
    reducerPath: 'orderEditApi',
    baseQuery: Xv({
      baseUrl: 'https://blog.nvdmini.com/api/return/storefront'
    }),
    endpoints: (e) => ({
      searchOrder: e.mutation({
        query: (t) => ({
          url: `order-edit-eligibility-check?shop_url=${zi}`,
          method: 'POST',
          body: t
        })
      }),
      cancelOrder: e.mutation({
        query: (t) => ({
          url: `order-cancellation?shop_url=${zi}`,
          method: 'POST',
          body: t
        })
      }),
      getCalculatedOrder: e.query({
        query: (t) =>
          `adjust-product-quantity/${t.split('/').pop()}?shop_url=${zi}`,
        transformResponse: (t) => t.data
      }),
      changeQuantity: e.mutation({
        query: (t) => ({
          url: `adjust-product-quantity?shop_url=${zi}`,
          method: 'POST',
          body: t
        })
      }),
      changeSippingAddress: e.mutation({
        query: (t) => ({
          url: `update-shipping-address?shop_url=${zi}`,
          method: 'POST',
          body: t
        })
      }),
      changeSizeAndVariants: e.mutation({
        query: (t) => ({
          url: `switch-product?shop_url=${zi}`,
          method: 'POST',
          body: t
        })
      })
    })
  }),
  fC = { order: {}, page: 'Home' },
  hC = Pn({
    name: 'orderEdit',
    initialState: fC,
    reducers: {
      setPage: (e, t) => {
        e.page = t.payload
      }
    },
    extraReducers: (e) => {
      e.addMatcher(Fs.endpoints.searchOrder.matchFulfilled, (t, n) => {
        t.order = n.payload.order
      })
    }
  }),
  pC = hC.reducer,
  Ap = 'mehedi-test-store.myshopify.com',
  Jr = r_({
    reducerPath: 'orderEditConfigApi',
    baseQuery: Xv({
      baseUrl: 'https://blog.nvdmini.com/api/return/storefront'
    }),
    endpoints: (e) => ({
      getStyleData: e.query({
        query: () => ({ url: `/order-edit-portal-data?shop_url=${Ap}` }),
        transformResponse: (t) => t.data,
        transformErrorResponse: (t) => t.status
      }),
      getOrderEditSettings: e.query({
        query: () => ({ url: `/order-edit-setting?shop_url=${Ap}` }),
        transformResponse: (t) => t.edit_setting,
        transformErrorResponse: (t) => t.status
      })
    })
  }),
  mC = { styleData: {}, orderEditSettings: {} },
  gC = Pn({
    name: 'orderEditStyle',
    initialState: mC,
    reducers: {},
    extraReducers: (e) => {
      e.addMatcher(Jr.endpoints.getStyleData.matchFulfilled, (t, n) => {
        t.styleData = n.payload
      }),
        e.addMatcher(
          Jr.endpoints.getOrderEditSettings.matchFulfilled,
          (t, n) => {
            t.orderEditSettings = n.payload
          }
        )
    }
  }),
  vC = gC.reducer,
  _C = aP({
    reducer: {
      orderEdit: pC,
      orderEditConfig: vC,
      [Fs.reducerPath]: Fs.reducer,
      [Jr.reducerPath]: Jr.reducer
    },
    middleware: (e) => e().concat(Fs.middleware).concat(Jr.middleware)
  }),
  yC = Qg(document.getElementById('opt-order-edit'))
yC.render(N.jsx(Ew, { store: _C, children: N.jsx(PE, {}) }))
