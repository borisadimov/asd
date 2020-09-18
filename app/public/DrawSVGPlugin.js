/*!
 * DrawSVGPlugin 3.1.2
 * https://greensock.com
 *
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!(function(e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], t)
    : t(((e = e || self).window = e.window || {}))
})(this, function(e) {
  'use strict'
  function i() {
    return 'undefined' != typeof window
  }
  function j() {
    return t || (i() && (t = window.gsap) && t.registerPlugin && t)
  }
  function m(e) {
    return Math.round(1e4 * e) / 1e4
  }
  function n(e) {
    return parseFloat(e || 0)
  }
  function o(e, t) {
    return n(e.getAttribute(t))
  }
  function q(e, t, i, r, s, o) {
    return P(Math.pow((n(i) - n(e)) * s, 2) + Math.pow((n(r) - n(t)) * o, 2))
  }
  function r(e) {
    return console.warn(e)
  }
  function s(e) {
    return 'non-scaling-stroke' === e.getAttribute('vector-effect')
  }
  function v() {
    return String.fromCharCode.apply(null, arguments)
  }
  function z(e) {
    if (!(e = y(e)[0])) return 0
    var t,
      n,
      i,
      a,
      f,
      h,
      d,
      l = e.tagName.toLowerCase(),
      u = e.style,
      c = 1,
      g = 1
    s(e) &&
      ((g = e.getScreenCTM()),
      (c = P(g.a * g.a + g.b * g.b)),
      (g = P(g.d * g.d + g.c * g.c)))
    try {
      n = e.getBBox()
    } catch (e) {
      r(
        "Some browsers won't measure invisible elements (like display:none or masks inside defs)."
      )
    }
    var v = n || {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      },
      p = v.x,
      _ = v.y,
      w = v.width,
      x = v.height
    if (
      ((n && (w || x)) ||
        !b[l] ||
        ((w = o(e, b[l][0])),
        (x = o(e, b[l][1])),
        'rect' !== l && 'line' !== l && ((w *= 2), (x *= 2)),
        'line' === l &&
          ((p = o(e, 'x1')),
          (_ = o(e, 'y1')),
          (w = Math.abs(w - p)),
          (x = Math.abs(x - _)))),
      'path' === l)
    )
      (a = u.strokeDasharray),
        (u.strokeDasharray = 'none'),
        (t = e.getTotalLength() || 0),
        c !== g &&
          r(
            "Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."
          ),
        (t *= (c + g) / 2),
        (u.strokeDasharray = a)
    else if ('rect' === l) t = 2 * w * c + 2 * x * g
    else if ('line' === l) t = q(p, _, p + w, _ + x, c, g)
    else if ('polyline' === l || 'polygon' === l)
      for (
        i = e.getAttribute('points').match(k) || [],
          'polygon' === l && i.push(i[0], i[1]),
          t = 0,
          f = 2;
        f < i.length;
        f += 2
      )
        t += q(i[f - 2], i[f - 1], i[f], i[f + 1], c, g) || 0
    else
      ('circle' !== l && 'ellipse' !== l) ||
        ((h = (w / 2) * c),
        (d = (x / 2) * g),
        (t = Math.PI * (3 * (h + d) - P((3 * h + d) * (h + 3 * d)))))
    return t || 0
  }
  function A(e, t) {
    if (!(e = y(e)[0])) return [0, 0]
    t = t || z(e) + 1
    var i = h.getComputedStyle(e),
      r = i.strokeDasharray || '',
      s = n(i.strokeDashoffset),
      o = r.indexOf(',')
    return (
      o < 0 && (o = r.indexOf(' ')),
      t < (r = o < 0 ? t : n(r.substr(0, o)) || 1e-5) && (r = t),
      [Math.max(0, -s), Math.max(0, r - s)]
    )
  }
  function B() {
    i() &&
      ((h = window),
      (l = t = j()),
      (y = t.utils.toArray),
      (d = -1 !== ((h.navigator || {}).userAgent || '').indexOf('Edge')))
  }
  var t,
    y,
    h,
    d,
    l,
    k = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
    b = {
      rect: ['width', 'height'],
      circle: ['r', 'r'],
      ellipse: ['rx', 'ry'],
      line: ['x2', 'y2']
    },
    P = Math.sqrt,
    a = 'DrawSVGPlugin',
    f = v(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
    u = (function(e) {})(window ? window.location.host : ''),
    c = {
      version: '3.1.2',
      name: 'drawSVG',
      register: function register(e) {
        ;(t = e), B()
      },
      init: function init(e, t) {
        if (!e.getBBox) return !1
        l || B()
        var i,
          r,
          o,
          a,
          f = z(e) + 1
        return (
          (this._style = e.style),
          (this._target = e),
          t + '' == 'true'
            ? (t = '0 100%')
            : t
            ? -1 === (t + '').indexOf(' ') && (t = '0 ' + t)
            : (t = '0 0'),
          (r = (function _parse(e, t, i) {
            var r,
              s,
              o = e.indexOf(' ')
            return (
              (s =
                o < 0
                  ? ((r = void 0 !== i ? i + '' : e), e)
                  : ((r = e.substr(0, o)), e.substr(o + 1))),
              (r = ~r.indexOf('%') ? (n(r) / 100) * t : n(r)),
              (s = ~s.indexOf('%') ? (n(s) / 100) * t : n(s)) < r
                ? [s, r]
                : [r, s]
            )
          })(t, f, (i = A(e, f))[0])),
          (this._length = m(f + 10)),
          0 === i[0] && 0 === r[0]
            ? ((o = Math.max(1e-5, r[1] - f)),
              (this._dash = m(f + o)),
              (this._offset = m(f - i[1] + o)),
              (this._offsetPT = this.add(
                this,
                '_offset',
                this._offset,
                m(f - r[1] + o)
              )))
            : ((this._dash = m(i[1] - i[0]) || 1e-6),
              (this._offset = m(-i[0])),
              (this._dashPT = this.add(
                this,
                '_dash',
                this._dash,
                m(r[1] - r[0]) || 1e-5
              )),
              (this._offsetPT = this.add(
                this,
                '_offset',
                this._offset,
                m(-r[0])
              ))),
          d &&
            (a = h.getComputedStyle(e)).strokeLinecap !== a.strokeLinejoin &&
            ((r = n(a.strokeMiterlimit)),
            this.add(e.style, 'strokeMiterlimit', r, r + 0.01)),
          (this._live = s(e) || ~(t + '').indexOf('live')),
          this._props.push('drawSVG'),
          u
        )
      },
      render: function render(e, t) {
        var n,
          i,
          r,
          s,
          o = t._pt,
          a = t._style
        if (o) {
          for (
            t._live &&
            (n = z(t._target) + 11) !== t._length &&
            ((i = n / t._length),
            (t._length = n),
            (t._offsetPT.s *= i),
            (t._offsetPT.c *= i),
            t._dashPT
              ? ((t._dashPT.s *= i), (t._dashPT.c *= i))
              : (t._dash *= i));
            o;

          )
            o.r(e, o.d), (o = o._next)
          ;(r = t._dash),
            (s = t._offset),
            (n = t._length),
            (a.strokeDashoffset = t._offset),
            1 !== e && e
              ? (a.strokeDasharray = r + 'px,' + n + 'px')
              : (r - s < 0.001 && n - r <= 10 && (a.strokeDashoffset = s + 1),
                (a.strokeDasharray =
                  s < 0.001 && n - r <= 10
                    ? 'none'
                    : s === r
                    ? '0px, 999999px'
                    : r + 'px,' + n + 'px'))
        }
      },
      getLength: z,
      getPosition: A
    }
  j() && t.registerPlugin(c), (e.DrawSVGPlugin = c), (e.default = c)
  if (typeof window === 'undefined' || window !== e) {
    Object.defineProperty(e, '__esModule', {
      value: !0
    })
  } else {
    delete e.default
  }
})
