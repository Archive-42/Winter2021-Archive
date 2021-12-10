!(function (t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : (('undefined' != typeof window
        ? window
        : 'undefined' != typeof global
        ? global
        : 'undefined' != typeof self
        ? self
        : this
      ).buffer = t());
})(function () {
  return (function t(e, r, n) {
    function i(s, a) {
      if (!r[s]) {
        if (!e[s]) {
          var u = 'function' == typeof require && require;
          if (!a && u) return u(s, !0);
          if (o) return o(s, !0);
          var c = new Error("Cannot find module '" + s + "'");
          throw ((c.code = 'MODULE_NOT_FOUND'), c);
        }
        var f = (r[s] = {
          exports: {},
        });
        e[s][0].call(
          f.exports,
          function (t) {
            return i(e[s][1][t] || t);
          },
          f,
          f.exports,
          t,
          e,
          r,
          n
        );
      }
      return r[s].exports;
    }
    for (
      var o = 'function' == typeof require && require, s = 0;
      s < n.length;
      s++
    )
      i(n[s]);
    return i;
  })(
    {
      1: [
        function (t, e, r) {
          (function (e) {
            'use strict';
            var n = t('base64-js'),
              i = t('ieee754'),
              o =
                'function' == typeof Symbol && 'function' == typeof Symbol.for
                  ? Symbol.for('nodejs.util.inspect.custom')
                  : null;
            (r.Buffer = e),
              (r.SlowBuffer = function (t) {
                return +t != t && (t = 0), e.alloc(+t);
              }),
              (r.INSPECT_MAX_BYTES = 50);
            var s = 2147483647;

            function a(t) {
              if (t > s)
                throw new RangeError(
                  'The value "' + t + '" is invalid for option "size"'
                );
              var r = new Uint8Array(t);
              return Object.setPrototypeOf(r, e.prototype), r;
            }

            function e(t, e, r) {
              if ('number' == typeof t) {
                if ('string' == typeof e)
                  throw new TypeError(
                    'The "string" argument must be of type string. Received type number'
                  );
                return f(t);
              }
              return u(t, e, r);
            }

            function u(t, r, n) {
              if ('string' == typeof t)
                return (function (t, r) {
                  if (
                    (('string' == typeof r && '' !== r) || (r = 'utf8'),
                    !e.isEncoding(r))
                  )
                    throw new TypeError('Unknown encoding: ' + r);
                  var n = 0 | p(t, r),
                    i = a(n),
                    o = i.write(t, r);
                  return o !== n && (i = i.slice(0, o)), i;
                })(t, r);
              if (ArrayBuffer.isView(t)) return l(t);
              if (null == t)
                throw new TypeError(
                  'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
                    typeof t
                );
              if (K(t, ArrayBuffer) || (t && K(t.buffer, ArrayBuffer)))
                return (function (t, r, n) {
                  if (r < 0 || t.byteLength < r)
                    throw new RangeError(
                      '"offset" is outside of buffer bounds'
                    );
                  if (t.byteLength < r + (n || 0))
                    throw new RangeError(
                      '"length" is outside of buffer bounds'
                    );
                  var i;
                  return (
                    (i =
                      void 0 === r && void 0 === n
                        ? new Uint8Array(t)
                        : void 0 === n
                        ? new Uint8Array(t, r)
                        : new Uint8Array(t, r, n)),
                    Object.setPrototypeOf(i, e.prototype),
                    i
                  );
                })(t, r, n);
              if ('number' == typeof t)
                throw new TypeError(
                  'The "value" argument must not be of type number. Received type number'
                );
              var i = t.valueOf && t.valueOf();
              if (null != i && i !== t) return e.from(i, r, n);
              var o = (function (t) {
                if (e.isBuffer(t)) {
                  var r = 0 | h(t.length),
                    n = a(r);
                  return 0 === n.length ? n : (t.copy(n, 0, 0, r), n);
                }
                return void 0 !== t.length
                  ? 'number' != typeof t.length || N(t.length)
                    ? a(0)
                    : l(t)
                  : 'Buffer' === t.type && Array.isArray(t.data)
                  ? l(t.data)
                  : void 0;
              })(t);
              if (o) return o;
              if (
                'undefined' != typeof Symbol &&
                null != Symbol.toPrimitive &&
                'function' == typeof t[Symbol.toPrimitive]
              )
                return e.from(t[Symbol.toPrimitive]('string'), r, n);
              throw new TypeError(
                'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
                  typeof t
              );
            }

            function c(t) {
              if ('number' != typeof t)
                throw new TypeError('"size" argument must be of type number');
              if (t < 0)
                throw new RangeError(
                  'The value "' + t + '" is invalid for option "size"'
                );
            }

            function f(t) {
              return c(t), a(t < 0 ? 0 : 0 | h(t));
            }

            function l(t) {
              for (
                var e = t.length < 0 ? 0 : 0 | h(t.length), r = a(e), n = 0;
                n < e;
                n += 1
              )
                r[n] = 255 & t[n];
              return r;
            }

            function h(t) {
              if (t >= s)
                throw new RangeError(
                  'Attempt to allocate Buffer larger than maximum size: 0x' +
                    s.toString(16) +
                    ' bytes'
                );
              return 0 | t;
            }

            function p(t, r) {
              if (e.isBuffer(t)) return t.length;
              if (ArrayBuffer.isView(t) || K(t, ArrayBuffer))
                return t.byteLength;
              if ('string' != typeof t)
                throw new TypeError(
                  'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                    typeof t
                );
              var n = t.length,
                i = arguments.length > 2 && !0 === arguments[2];
              if (!i && 0 === n) return 0;
              for (var o = !1; ; )
                switch (r) {
                  case 'ascii':
                  case 'latin1':
                  case 'binary':
                    return n;
                  case 'utf8':
                  case 'utf-8':
                    return j(t).length;
                  case 'ucs2':
                  case 'ucs-2':
                  case 'utf16le':
                  case 'utf-16le':
                    return 2 * n;
                  case 'hex':
                    return n >>> 1;
                  case 'base64':
                    return M(t).length;
                  default:
                    if (o) return i ? -1 : j(t).length;
                    (r = ('' + r).toLowerCase()), (o = !0);
                }
            }

            function d(t, e, r) {
              var n = t[e];
              (t[e] = t[r]), (t[r] = n);
            }

            function y(t, r, n, i, o) {
              if (0 === t.length) return -1;
              if (
                ('string' == typeof n
                  ? ((i = n), (n = 0))
                  : n > 2147483647
                  ? (n = 2147483647)
                  : n < -2147483648 && (n = -2147483648),
                N((n = +n)) && (n = o ? 0 : t.length - 1),
                n < 0 && (n = t.length + n),
                n >= t.length)
              ) {
                if (o) return -1;
                n = t.length - 1;
              } else if (n < 0) {
                if (!o) return -1;
                n = 0;
              }
              if (('string' == typeof r && (r = e.from(r, i)), e.isBuffer(r)))
                return 0 === r.length ? -1 : m(t, r, n, i, o);
              if ('number' == typeof r)
                return (
                  (r &= 255),
                  'function' == typeof Uint8Array.prototype.indexOf
                    ? o
                      ? Uint8Array.prototype.indexOf.call(t, r, n)
                      : Uint8Array.prototype.lastIndexOf.call(t, r, n)
                    : m(t, [r], n, i, o)
                );
              throw new TypeError('val must be string, number or Buffer');
            }

            function m(t, e, r, n, i) {
              var o,
                s = 1,
                a = t.length,
                u = e.length;
              if (
                void 0 !== n &&
                ('ucs2' === (n = String(n).toLowerCase()) ||
                  'ucs-2' === n ||
                  'utf16le' === n ||
                  'utf-16le' === n)
              ) {
                if (t.length < 2 || e.length < 2) return -1;
                (s = 2), (a /= 2), (u /= 2), (r /= 2);
              }

              function c(t, e) {
                return 1 === s ? t[e] : t.readUInt16BE(e * s);
              }
              if (i) {
                var f = -1;
                for (o = r; o < a; o++)
                  if (c(t, o) === c(e, -1 === f ? 0 : o - f)) {
                    if ((-1 === f && (f = o), o - f + 1 === u)) return f * s;
                  } else -1 !== f && (o -= o - f), (f = -1);
              } else
                for (r + u > a && (r = a - u), o = r; o >= 0; o--) {
                  for (var l = !0, h = 0; h < u; h++)
                    if (c(t, o + h) !== c(e, h)) {
                      l = !1;
                      break;
                    }
                  if (l) return o;
                }
              return -1;
            }

            function v(t, e, r, n) {
              r = Number(r) || 0;
              var i = t.length - r;
              n ? (n = Number(n)) > i && (n = i) : (n = i);
              var o = e.length;
              n > o / 2 && (n = o / 2);
              for (var s = 0; s < n; ++s) {
                var a = parseInt(e.substr(2 * s, 2), 16);
                if (N(a)) return s;
                t[r + s] = a;
              }
              return s;
            }

            function g(t, e, r, n) {
              return U(j(e, t.length - r), t, r, n);
            }

            function w(t, e, r, n) {
              return U(
                (function (t) {
                  for (var e = [], r = 0; r < t.length; ++r)
                    e.push(255 & t.charCodeAt(r));
                  return e;
                })(e),
                t,
                r,
                n
              );
            }

            function b(t, e, r, n) {
              return w(t, e, r, n);
            }

            function _(t, e, r, n) {
              return U(M(e), t, r, n);
            }

            function E(t, e, r, n) {
              return U(
                (function (t, e) {
                  for (
                    var r, n, i, o = [], s = 0;
                    s < t.length && !((e -= 2) < 0);
                    ++s
                  )
                    (n = (r = t.charCodeAt(s)) >> 8),
                      (i = r % 256),
                      o.push(i),
                      o.push(n);
                  return o;
                })(e, t.length - r),
                t,
                r,
                n
              );
            }

            function x(t, e, r) {
              return 0 === e && r === t.length
                ? n.fromByteArray(t)
                : n.fromByteArray(t.slice(e, r));
            }

            function k(t, e, r) {
              r = Math.min(t.length, r);
              for (var n = [], i = e; i < r; ) {
                var o,
                  s,
                  a,
                  u,
                  c = t[i],
                  f = null,
                  l = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                if (i + l <= r)
                  switch (l) {
                    case 1:
                      c < 128 && (f = c);
                      break;
                    case 2:
                      128 == (192 & (o = t[i + 1])) &&
                        (u = ((31 & c) << 6) | (63 & o)) > 127 &&
                        (f = u);
                      break;
                    case 3:
                      (o = t[i + 1]),
                        (s = t[i + 2]),
                        128 == (192 & o) &&
                          128 == (192 & s) &&
                          (u = ((15 & c) << 12) | ((63 & o) << 6) | (63 & s)) >
                            2047 &&
                          (u < 55296 || u > 57343) &&
                          (f = u);
                      break;
                    case 4:
                      (o = t[i + 1]),
                        (s = t[i + 2]),
                        (a = t[i + 3]),
                        128 == (192 & o) &&
                          128 == (192 & s) &&
                          128 == (192 & a) &&
                          (u =
                            ((15 & c) << 18) |
                            ((63 & o) << 12) |
                            ((63 & s) << 6) |
                            (63 & a)) > 65535 &&
                          u < 1114112 &&
                          (f = u);
                  }
                null === f
                  ? ((f = 65533), (l = 1))
                  : f > 65535 &&
                    ((f -= 65536),
                    n.push(((f >>> 10) & 1023) | 55296),
                    (f = 56320 | (1023 & f))),
                  n.push(f),
                  (i += l);
              }
              return (function (t) {
                var e = t.length;
                if (e <= S) return String.fromCharCode.apply(String, t);
                for (var r = '', n = 0; n < e; )
                  r += String.fromCharCode.apply(String, t.slice(n, (n += S)));
                return r;
              })(n);
            }
            (r.kMaxLength = s),
              (e.TYPED_ARRAY_SUPPORT = (function () {
                try {
                  var t = new Uint8Array(1),
                    e = {
                      foo: function () {
                        return 42;
                      },
                    };
                  return (
                    Object.setPrototypeOf(e, Uint8Array.prototype),
                    Object.setPrototypeOf(t, e),
                    42 === t.foo()
                  );
                } catch (t) {
                  return !1;
                }
              })()),
              e.TYPED_ARRAY_SUPPORT ||
                'undefined' == typeof console ||
                'function' != typeof console.error ||
                console.error(
                  'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
                ),
              Object.defineProperty(e.prototype, 'parent', {
                enumerable: !0,
                get: function () {
                  if (e.isBuffer(this)) return this.buffer;
                },
              }),
              Object.defineProperty(e.prototype, 'offset', {
                enumerable: !0,
                get: function () {
                  if (e.isBuffer(this)) return this.byteOffset;
                },
              }),
              'undefined' != typeof Symbol &&
                null != Symbol.species &&
                e[Symbol.species] === e &&
                Object.defineProperty(e, Symbol.species, {
                  value: null,
                  configurable: !0,
                  enumerable: !1,
                  writable: !1,
                }),
              (e.poolSize = 8192),
              (e.from = function (t, e, r) {
                return u(t, e, r);
              }),
              Object.setPrototypeOf(e.prototype, Uint8Array.prototype),
              Object.setPrototypeOf(e, Uint8Array),
              (e.alloc = function (t, e, r) {
                return (function (t, e, r) {
                  return (
                    c(t),
                    t <= 0
                      ? a(t)
                      : void 0 !== e
                      ? 'string' == typeof r
                        ? a(t).fill(e, r)
                        : a(t).fill(e)
                      : a(t)
                  );
                })(t, e, r);
              }),
              (e.allocUnsafe = function (t) {
                return f(t);
              }),
              (e.allocUnsafeSlow = function (t) {
                return f(t);
              }),
              (e.isBuffer = function (t) {
                return null != t && !0 === t._isBuffer && t !== e.prototype;
              }),
              (e.compare = function (t, r) {
                if (
                  (K(t, Uint8Array) && (t = e.from(t, t.offset, t.byteLength)),
                  K(r, Uint8Array) && (r = e.from(r, r.offset, r.byteLength)),
                  !e.isBuffer(t) || !e.isBuffer(r))
                )
                  throw new TypeError(
                    'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
                  );
                if (t === r) return 0;
                for (
                  var n = t.length, i = r.length, o = 0, s = Math.min(n, i);
                  o < s;
                  ++o
                )
                  if (t[o] !== r[o]) {
                    (n = t[o]), (i = r[o]);
                    break;
                  }
                return n < i ? -1 : i < n ? 1 : 0;
              }),
              (e.isEncoding = function (t) {
                switch (String(t).toLowerCase()) {
                  case 'hex':
                  case 'utf8':
                  case 'utf-8':
                  case 'ascii':
                  case 'latin1':
                  case 'binary':
                  case 'base64':
                  case 'ucs2':
                  case 'ucs-2':
                  case 'utf16le':
                  case 'utf-16le':
                    return !0;
                  default:
                    return !1;
                }
              }),
              (e.concat = function (t, r) {
                if (!Array.isArray(t))
                  throw new TypeError(
                    '"list" argument must be an Array of Buffers'
                  );
                if (0 === t.length) return e.alloc(0);
                var n;
                if (void 0 === r)
                  for (r = 0, n = 0; n < t.length; ++n) r += t[n].length;
                var i = e.allocUnsafe(r),
                  o = 0;
                for (n = 0; n < t.length; ++n) {
                  var s = t[n];
                  if ((K(s, Uint8Array) && (s = e.from(s)), !e.isBuffer(s)))
                    throw new TypeError(
                      '"list" argument must be an Array of Buffers'
                    );
                  s.copy(i, o), (o += s.length);
                }
                return i;
              }),
              (e.byteLength = p),
              (e.prototype._isBuffer = !0),
              (e.prototype.swap16 = function () {
                var t = this.length;
                if (t % 2 != 0)
                  throw new RangeError(
                    'Buffer size must be a multiple of 16-bits'
                  );
                for (var e = 0; e < t; e += 2) d(this, e, e + 1);
                return this;
              }),
              (e.prototype.swap32 = function () {
                var t = this.length;
                if (t % 4 != 0)
                  throw new RangeError(
                    'Buffer size must be a multiple of 32-bits'
                  );
                for (var e = 0; e < t; e += 4)
                  d(this, e, e + 3), d(this, e + 1, e + 2);
                return this;
              }),
              (e.prototype.swap64 = function () {
                var t = this.length;
                if (t % 8 != 0)
                  throw new RangeError(
                    'Buffer size must be a multiple of 64-bits'
                  );
                for (var e = 0; e < t; e += 8)
                  d(this, e, e + 7),
                    d(this, e + 1, e + 6),
                    d(this, e + 2, e + 5),
                    d(this, e + 3, e + 4);
                return this;
              }),
              (e.prototype.toString = function () {
                var t = this.length;
                return 0 === t
                  ? ''
                  : 0 === arguments.length
                  ? k(this, 0, t)
                  : function (t, e, r) {
                      var n = !1;
                      if (((void 0 === e || e < 0) && (e = 0), e > this.length))
                        return '';
                      if (
                        ((void 0 === r || r > this.length) && (r = this.length),
                        r <= 0)
                      )
                        return '';
                      if ((r >>>= 0) <= (e >>>= 0)) return '';
                      for (t || (t = 'utf8'); ; )
                        switch (t) {
                          case 'hex':
                            return I(this, e, r);
                          case 'utf8':
                          case 'utf-8':
                            return k(this, e, r);
                          case 'ascii':
                            return A(this, e, r);
                          case 'latin1':
                          case 'binary':
                            return B(this, e, r);
                          case 'base64':
                            return x(this, e, r);
                          case 'ucs2':
                          case 'ucs-2':
                          case 'utf16le':
                          case 'utf-16le':
                            return O(this, e, r);
                          default:
                            if (n)
                              throw new TypeError('Unknown encoding: ' + t);
                            (t = (t + '').toLowerCase()), (n = !0);
                        }
                    }.apply(this, arguments);
              }),
              (e.prototype.toLocaleString = e.prototype.toString),
              (e.prototype.equals = function (t) {
                if (!e.isBuffer(t))
                  throw new TypeError('Argument must be a Buffer');
                return this === t || 0 === e.compare(this, t);
              }),
              (e.prototype.inspect = function () {
                var t = '',
                  e = r.INSPECT_MAX_BYTES;
                return (
                  (t = this.toString('hex', 0, e)
                    .replace(/(.{2})/g, '$1 ')
                    .trim()),
                  this.length > e && (t += ' ... '),
                  '<Buffer ' + t + '>'
                );
              }),
              o && (e.prototype[o] = e.prototype.inspect),
              (e.prototype.compare = function (t, r, n, i, o) {
                if (
                  (K(t, Uint8Array) && (t = e.from(t, t.offset, t.byteLength)),
                  !e.isBuffer(t))
                )
                  throw new TypeError(
                    'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                      typeof t
                  );
                if (
                  (void 0 === r && (r = 0),
                  void 0 === n && (n = t ? t.length : 0),
                  void 0 === i && (i = 0),
                  void 0 === o && (o = this.length),
                  r < 0 || n > t.length || i < 0 || o > this.length)
                )
                  throw new RangeError('out of range index');
                if (i >= o && r >= n) return 0;
                if (i >= o) return -1;
                if (r >= n) return 1;
                if (this === t) return 0;
                for (
                  var s = (o >>>= 0) - (i >>>= 0),
                    a = (n >>>= 0) - (r >>>= 0),
                    u = Math.min(s, a),
                    c = this.slice(i, o),
                    f = t.slice(r, n),
                    l = 0;
                  l < u;
                  ++l
                )
                  if (c[l] !== f[l]) {
                    (s = c[l]), (a = f[l]);
                    break;
                  }
                return s < a ? -1 : a < s ? 1 : 0;
              }),
              (e.prototype.includes = function (t, e, r) {
                return -1 !== this.indexOf(t, e, r);
              }),
              (e.prototype.indexOf = function (t, e, r) {
                return y(this, t, e, r, !0);
              }),
              (e.prototype.lastIndexOf = function (t, e, r) {
                return y(this, t, e, r, !1);
              }),
              (e.prototype.write = function (t, e, r, n) {
                if (void 0 === e) (n = 'utf8'), (r = this.length), (e = 0);
                else if (void 0 === r && 'string' == typeof e)
                  (n = e), (r = this.length), (e = 0);
                else {
                  if (!isFinite(e))
                    throw new Error(
                      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
                    );
                  (e >>>= 0),
                    isFinite(r)
                      ? ((r >>>= 0), void 0 === n && (n = 'utf8'))
                      : ((n = r), (r = void 0));
                }
                var i = this.length - e;
                if (
                  ((void 0 === r || r > i) && (r = i),
                  (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
                )
                  throw new RangeError(
                    'Attempt to write outside buffer bounds'
                  );
                n || (n = 'utf8');
                for (var o = !1; ; )
                  switch (n) {
                    case 'hex':
                      return v(this, t, e, r);
                    case 'utf8':
                    case 'utf-8':
                      return g(this, t, e, r);
                    case 'ascii':
                      return w(this, t, e, r);
                    case 'latin1':
                    case 'binary':
                      return b(this, t, e, r);
                    case 'base64':
                      return _(this, t, e, r);
                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                      return E(this, t, e, r);
                    default:
                      if (o) throw new TypeError('Unknown encoding: ' + n);
                      (n = ('' + n).toLowerCase()), (o = !0);
                  }
              }),
              (e.prototype.toJSON = function () {
                return {
                  type: 'Buffer',
                  data: Array.prototype.slice.call(this._arr || this, 0),
                };
              });
            var S = 4096;

            function A(t, e, r) {
              var n = '';
              r = Math.min(t.length, r);
              for (var i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
              return n;
            }

            function B(t, e, r) {
              var n = '';
              r = Math.min(t.length, r);
              for (var i = e; i < r; ++i) n += String.fromCharCode(t[i]);
              return n;
            }

            function I(t, e, r) {
              var n = t.length;
              (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
              for (var i = '', o = e; o < r; ++o) i += L[t[o]];
              return i;
            }

            function O(t, e, r) {
              for (var n = t.slice(e, r), i = '', o = 0; o < n.length; o += 2)
                i += String.fromCharCode(n[o] + 256 * n[o + 1]);
              return i;
            }

            function C(t, e, r) {
              if (t % 1 != 0 || t < 0)
                throw new RangeError('offset is not uint');
              if (t + e > r)
                throw new RangeError('Trying to access beyond buffer length');
            }

            function P(t, r, n, i, o, s) {
              if (!e.isBuffer(t))
                throw new TypeError(
                  '"buffer" argument must be a Buffer instance'
                );
              if (r > o || r < s)
                throw new RangeError('"value" argument is out of bounds');
              if (n + i > t.length) throw new RangeError('Index out of range');
            }

            function D(t, e, r, n, i, o) {
              if (r + n > t.length) throw new RangeError('Index out of range');
              if (r < 0) throw new RangeError('Index out of range');
            }

            function T(t, e, r, n, o) {
              return (
                (e = +e),
                (r >>>= 0),
                o || D(t, 0, r, 4),
                i.write(t, e, r, n, 23, 4),
                r + 4
              );
            }

            function F(t, e, r, n, o) {
              return (
                (e = +e),
                (r >>>= 0),
                o || D(t, 0, r, 8),
                i.write(t, e, r, n, 52, 8),
                r + 8
              );
            }
            (e.prototype.slice = function (t, r) {
              var n = this.length;
              (t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
                (r = void 0 === r ? n : ~~r) < 0
                  ? (r += n) < 0 && (r = 0)
                  : r > n && (r = n),
                r < t && (r = t);
              var i = this.subarray(t, r);
              return Object.setPrototypeOf(i, e.prototype), i;
            }),
              (e.prototype.readUIntLE = function (t, e, r) {
                (t >>>= 0), (e >>>= 0), r || C(t, e, this.length);
                for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
                  n += this[t + o] * i;
                return n;
              }),
              (e.prototype.readUIntBE = function (t, e, r) {
                (t >>>= 0), (e >>>= 0), r || C(t, e, this.length);
                for (var n = this[t + --e], i = 1; e > 0 && (i *= 256); )
                  n += this[t + --e] * i;
                return n;
              }),
              (e.prototype.readUInt8 = function (t, e) {
                return (t >>>= 0), e || C(t, 1, this.length), this[t];
              }),
              (e.prototype.readUInt16LE = function (t, e) {
                return (
                  (t >>>= 0),
                  e || C(t, 2, this.length),
                  this[t] | (this[t + 1] << 8)
                );
              }),
              (e.prototype.readUInt16BE = function (t, e) {
                return (
                  (t >>>= 0),
                  e || C(t, 2, this.length),
                  (this[t] << 8) | this[t + 1]
                );
              }),
              (e.prototype.readUInt32LE = function (t, e) {
                return (
                  (t >>>= 0),
                  e || C(t, 4, this.length),
                  (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                    16777216 * this[t + 3]
                );
              }),
              (e.prototype.readUInt32BE = function (t, e) {
                return (
                  (t >>>= 0),
                  e || C(t, 4, this.length),
                  16777216 * this[t] +
                    ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
                );
              }),
              (e.prototype.readIntLE = function (t, e, r) {
                (t >>>= 0), (e >>>= 0), r || C(t, e, this.length);
                for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
                  n += this[t + o] * i;
                return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n;
              }),
              (e.prototype.readIntBE = function (t, e, r) {
                (t >>>= 0), (e >>>= 0), r || C(t, e, this.length);
                for (var n = e, i = 1, o = this[t + --n]; n > 0 && (i *= 256); )
                  o += this[t + --n] * i;
                return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o;
              }),
              (e.prototype.readInt8 = function (t, e) {
                return (
                  (t >>>= 0),
                  e || C(t, 1, this.length),
                  128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
                );
              }),
              (e.prototype.readInt16LE = function (t, e) {
                (t >>>= 0), e || C(t, 2, this.length);
                var r = this[t] | (this[t + 1] << 8);
                return 32768 & r ? 4294901760 | r : r;
              }),
              (e.prototype.readInt16BE = function (t, e) {
                (t >>>= 0), e || C(t, 2, this.length);
                var r = this[t + 1] | (this[t] << 8);
                return 32768 & r ? 4294901760 | r : r;
              }),
              (e.prototype.readInt32LE = function (t, e) {
                return (
                  (t >>>= 0),
                  e || C(t, 4, this.length),
                  this[t] |
                    (this[t + 1] << 8) |
                    (this[t + 2] << 16) |
                    (this[t + 3] << 24)
                );
              }),
              (e.prototype.readInt32BE = function (t, e) {
                return (
                  (t >>>= 0),
                  e || C(t, 4, this.length),
                  (this[t] << 24) |
                    (this[t + 1] << 16) |
                    (this[t + 2] << 8) |
                    this[t + 3]
                );
              }),
              (e.prototype.readFloatLE = function (t, e) {
                return (
                  (t >>>= 0),
                  e || C(t, 4, this.length),
                  i.read(this, t, !0, 23, 4)
                );
              }),
              (e.prototype.readFloatBE = function (t, e) {
                return (
                  (t >>>= 0),
                  e || C(t, 4, this.length),
                  i.read(this, t, !1, 23, 4)
                );
              }),
              (e.prototype.readDoubleLE = function (t, e) {
                return (
                  (t >>>= 0),
                  e || C(t, 8, this.length),
                  i.read(this, t, !0, 52, 8)
                );
              }),
              (e.prototype.readDoubleBE = function (t, e) {
                return (
                  (t >>>= 0),
                  e || C(t, 8, this.length),
                  i.read(this, t, !1, 52, 8)
                );
              }),
              (e.prototype.writeUIntLE = function (t, e, r, n) {
                (t = +t),
                  (e >>>= 0),
                  (r >>>= 0),
                  n || P(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                var i = 1,
                  o = 0;
                for (this[e] = 255 & t; ++o < r && (i *= 256); )
                  this[e + o] = (t / i) & 255;
                return e + r;
              }),
              (e.prototype.writeUIntBE = function (t, e, r, n) {
                (t = +t),
                  (e >>>= 0),
                  (r >>>= 0),
                  n || P(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                var i = r - 1,
                  o = 1;
                for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
                  this[e + i] = (t / o) & 255;
                return e + r;
              }),
              (e.prototype.writeUInt8 = function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || P(this, t, e, 1, 255, 0),
                  (this[e] = 255 & t),
                  e + 1
                );
              }),
              (e.prototype.writeUInt16LE = function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || P(this, t, e, 2, 65535, 0),
                  (this[e] = 255 & t),
                  (this[e + 1] = t >>> 8),
                  e + 2
                );
              }),
              (e.prototype.writeUInt16BE = function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || P(this, t, e, 2, 65535, 0),
                  (this[e] = t >>> 8),
                  (this[e + 1] = 255 & t),
                  e + 2
                );
              }),
              (e.prototype.writeUInt32LE = function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || P(this, t, e, 4, 4294967295, 0),
                  (this[e + 3] = t >>> 24),
                  (this[e + 2] = t >>> 16),
                  (this[e + 1] = t >>> 8),
                  (this[e] = 255 & t),
                  e + 4
                );
              }),
              (e.prototype.writeUInt32BE = function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || P(this, t, e, 4, 4294967295, 0),
                  (this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t),
                  e + 4
                );
              }),
              (e.prototype.writeIntLE = function (t, e, r, n) {
                if (((t = +t), (e >>>= 0), !n)) {
                  var i = Math.pow(2, 8 * r - 1);
                  P(this, t, e, r, i - 1, -i);
                }
                var o = 0,
                  s = 1,
                  a = 0;
                for (this[e] = 255 & t; ++o < r && (s *= 256); )
                  t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1),
                    (this[e + o] = (((t / s) >> 0) - a) & 255);
                return e + r;
              }),
              (e.prototype.writeIntBE = function (t, e, r, n) {
                if (((t = +t), (e >>>= 0), !n)) {
                  var i = Math.pow(2, 8 * r - 1);
                  P(this, t, e, r, i - 1, -i);
                }
                var o = r - 1,
                  s = 1,
                  a = 0;
                for (this[e + o] = 255 & t; --o >= 0 && (s *= 256); )
                  t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1),
                    (this[e + o] = (((t / s) >> 0) - a) & 255);
                return e + r;
              }),
              (e.prototype.writeInt8 = function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || P(this, t, e, 1, 127, -128),
                  t < 0 && (t = 255 + t + 1),
                  (this[e] = 255 & t),
                  e + 1
                );
              }),
              (e.prototype.writeInt16LE = function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || P(this, t, e, 2, 32767, -32768),
                  (this[e] = 255 & t),
                  (this[e + 1] = t >>> 8),
                  e + 2
                );
              }),
              (e.prototype.writeInt16BE = function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || P(this, t, e, 2, 32767, -32768),
                  (this[e] = t >>> 8),
                  (this[e + 1] = 255 & t),
                  e + 2
                );
              }),
              (e.prototype.writeInt32LE = function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || P(this, t, e, 4, 2147483647, -2147483648),
                  (this[e] = 255 & t),
                  (this[e + 1] = t >>> 8),
                  (this[e + 2] = t >>> 16),
                  (this[e + 3] = t >>> 24),
                  e + 4
                );
              }),
              (e.prototype.writeInt32BE = function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || P(this, t, e, 4, 2147483647, -2147483648),
                  t < 0 && (t = 4294967295 + t + 1),
                  (this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t),
                  e + 4
                );
              }),
              (e.prototype.writeFloatLE = function (t, e, r) {
                return T(this, t, e, !0, r);
              }),
              (e.prototype.writeFloatBE = function (t, e, r) {
                return T(this, t, e, !1, r);
              }),
              (e.prototype.writeDoubleLE = function (t, e, r) {
                return F(this, t, e, !0, r);
              }),
              (e.prototype.writeDoubleBE = function (t, e, r) {
                return F(this, t, e, !1, r);
              }),
              (e.prototype.copy = function (t, r, n, i) {
                if (!e.isBuffer(t))
                  throw new TypeError('argument should be a Buffer');
                if (
                  (n || (n = 0),
                  i || 0 === i || (i = this.length),
                  r >= t.length && (r = t.length),
                  r || (r = 0),
                  i > 0 && i < n && (i = n),
                  i === n)
                )
                  return 0;
                if (0 === t.length || 0 === this.length) return 0;
                if (r < 0) throw new RangeError('targetStart out of bounds');
                if (n < 0 || n >= this.length)
                  throw new RangeError('Index out of range');
                if (i < 0) throw new RangeError('sourceEnd out of bounds');
                i > this.length && (i = this.length),
                  t.length - r < i - n && (i = t.length - r + n);
                var o = i - n;
                if (
                  this === t &&
                  'function' == typeof Uint8Array.prototype.copyWithin
                )
                  this.copyWithin(r, n, i);
                else if (this === t && n < r && r < i)
                  for (var s = o - 1; s >= 0; --s) t[s + r] = this[s + n];
                else Uint8Array.prototype.set.call(t, this.subarray(n, i), r);
                return o;
              }),
              (e.prototype.fill = function (t, r, n, i) {
                if ('string' == typeof t) {
                  if (
                    ('string' == typeof r
                      ? ((i = r), (r = 0), (n = this.length))
                      : 'string' == typeof n && ((i = n), (n = this.length)),
                    void 0 !== i && 'string' != typeof i)
                  )
                    throw new TypeError('encoding must be a string');
                  if ('string' == typeof i && !e.isEncoding(i))
                    throw new TypeError('Unknown encoding: ' + i);
                  if (1 === t.length) {
                    var o = t.charCodeAt(0);
                    (('utf8' === i && o < 128) || 'latin1' === i) && (t = o);
                  }
                } else
                  'number' == typeof t
                    ? (t &= 255)
                    : 'boolean' == typeof t && (t = Number(t));
                if (r < 0 || this.length < r || this.length < n)
                  throw new RangeError('Out of range index');
                if (n <= r) return this;
                var s;
                if (
                  ((r >>>= 0),
                  (n = void 0 === n ? this.length : n >>> 0),
                  t || (t = 0),
                  'number' == typeof t)
                )
                  for (s = r; s < n; ++s) this[s] = t;
                else {
                  var a = e.isBuffer(t) ? t : e.from(t, i),
                    u = a.length;
                  if (0 === u)
                    throw new TypeError(
                      'The value "' + t + '" is invalid for argument "value"'
                    );
                  for (s = 0; s < n - r; ++s) this[s + r] = a[s % u];
                }
                return this;
              });
            var R = /[^+\/0-9A-Za-z-_]/g;

            function j(t, e) {
              var r;
              e = e || 1 / 0;
              for (var n = t.length, i = null, o = [], s = 0; s < n; ++s) {
                if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
                  if (!i) {
                    if (r > 56319) {
                      (e -= 3) > -1 && o.push(239, 191, 189);
                      continue;
                    }
                    if (s + 1 === n) {
                      (e -= 3) > -1 && o.push(239, 191, 189);
                      continue;
                    }
                    i = r;
                    continue;
                  }
                  if (r < 56320) {
                    (e -= 3) > -1 && o.push(239, 191, 189), (i = r);
                    continue;
                  }
                  r = 65536 + (((i - 55296) << 10) | (r - 56320));
                } else i && (e -= 3) > -1 && o.push(239, 191, 189);
                if (((i = null), r < 128)) {
                  if ((e -= 1) < 0) break;
                  o.push(r);
                } else if (r < 2048) {
                  if ((e -= 2) < 0) break;
                  o.push((r >> 6) | 192, (63 & r) | 128);
                } else if (r < 65536) {
                  if ((e -= 3) < 0) break;
                  o.push(
                    (r >> 12) | 224,
                    ((r >> 6) & 63) | 128,
                    (63 & r) | 128
                  );
                } else {
                  if (!(r < 1114112)) throw new Error('Invalid code point');
                  if ((e -= 4) < 0) break;
                  o.push(
                    (r >> 18) | 240,
                    ((r >> 12) & 63) | 128,
                    ((r >> 6) & 63) | 128,
                    (63 & r) | 128
                  );
                }
              }
              return o;
            }

            function M(t) {
              return n.toByteArray(
                (function (t) {
                  if (
                    (t = (t = t.split('=')[0]).trim().replace(R, '')).length < 2
                  )
                    return '';
                  for (; t.length % 4 != 0; ) t += '=';
                  return t;
                })(t)
              );
            }

            function U(t, e, r, n) {
              for (
                var i = 0;
                i < n && !(i + r >= e.length || i >= t.length);
                ++i
              )
                e[i + r] = t[i];
              return i;
            }

            function K(t, e) {
              return (
                t instanceof e ||
                (null != t &&
                  null != t.constructor &&
                  null != t.constructor.name &&
                  t.constructor.name === e.name)
              );
            }

            function N(t) {
              return t != t;
            }
            var L = (function () {
              for (var t = new Array(256), e = 0; e < 16; ++e)
                for (var r = 16 * e, n = 0; n < 16; ++n)
                  t[r + n] = '0123456789abcdef'[e] + '0123456789abcdef'[n];
              return t;
            })();
          }.call(this, t('buffer').Buffer));
        },
        {
          'base64-js': 2,
          buffer: 5,
          ieee754: 3,
        },
      ],
      2: [
        function (t, e, r) {
          'use strict';
          (r.byteLength = function (t) {
            var e = c(t),
              r = e[0],
              n = e[1];
            return (3 * (r + n)) / 4 - n;
          }),
            (r.toByteArray = function (t) {
              var e,
                r,
                n = c(t),
                s = n[0],
                a = n[1],
                u = new o(
                  (function (t, e, r) {
                    return (3 * (e + r)) / 4 - r;
                  })(0, s, a)
                ),
                f = 0,
                l = a > 0 ? s - 4 : s;
              for (r = 0; r < l; r += 4)
                (e =
                  (i[t.charCodeAt(r)] << 18) |
                  (i[t.charCodeAt(r + 1)] << 12) |
                  (i[t.charCodeAt(r + 2)] << 6) |
                  i[t.charCodeAt(r + 3)]),
                  (u[f++] = (e >> 16) & 255),
                  (u[f++] = (e >> 8) & 255),
                  (u[f++] = 255 & e);
              return (
                2 === a &&
                  ((e =
                    (i[t.charCodeAt(r)] << 2) | (i[t.charCodeAt(r + 1)] >> 4)),
                  (u[f++] = 255 & e)),
                1 === a &&
                  ((e =
                    (i[t.charCodeAt(r)] << 10) |
                    (i[t.charCodeAt(r + 1)] << 4) |
                    (i[t.charCodeAt(r + 2)] >> 2)),
                  (u[f++] = (e >> 8) & 255),
                  (u[f++] = 255 & e)),
                u
              );
            }),
            (r.fromByteArray = function (t) {
              for (
                var e, r = t.length, i = r % 3, o = [], s = 0, a = r - i;
                s < a;
                s += 16383
              )
                o.push(f(t, s, s + 16383 > a ? a : s + 16383));
              return (
                1 === i
                  ? ((e = t[r - 1]),
                    o.push(n[e >> 2] + n[(e << 4) & 63] + '=='))
                  : 2 === i &&
                    ((e = (t[r - 2] << 8) + t[r - 1]),
                    o.push(
                      n[e >> 10] + n[(e >> 4) & 63] + n[(e << 2) & 63] + '='
                    )),
                o.join('')
              );
            });
          for (
            var n = [],
              i = [],
              o = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
              s =
                'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
              a = 0,
              u = s.length;
            a < u;
            ++a
          )
            (n[a] = s[a]), (i[s.charCodeAt(a)] = a);

          function c(t) {
            var e = t.length;
            if (e % 4 > 0)
              throw new Error('Invalid string. Length must be a multiple of 4');
            var r = t.indexOf('=');
            return -1 === r && (r = e), [r, r === e ? 0 : 4 - (r % 4)];
          }

          function f(t, e, r) {
            for (var i, o, s = [], a = e; a < r; a += 3)
              (i =
                ((t[a] << 16) & 16711680) +
                ((t[a + 1] << 8) & 65280) +
                (255 & t[a + 2])),
                s.push(
                  n[((o = i) >> 18) & 63] +
                    n[(o >> 12) & 63] +
                    n[(o >> 6) & 63] +
                    n[63 & o]
                );
            return s.join('');
          }
          (i['-'.charCodeAt(0)] = 62), (i['_'.charCodeAt(0)] = 63);
        },
        {},
      ],
      3: [
        function (t, e, r) {
          (r.read = function (t, e, r, n, i) {
            var o,
              s,
              a = 8 * i - n - 1,
              u = (1 << a) - 1,
              c = u >> 1,
              f = -7,
              l = r ? i - 1 : 0,
              h = r ? -1 : 1,
              p = t[e + l];
            for (
              l += h, o = p & ((1 << -f) - 1), p >>= -f, f += a;
              f > 0;
              o = 256 * o + t[e + l], l += h, f -= 8
            );
            for (
              s = o & ((1 << -f) - 1), o >>= -f, f += n;
              f > 0;
              s = 256 * s + t[e + l], l += h, f -= 8
            );
            if (0 === o) o = 1 - c;
            else {
              if (o === u) return s ? NaN : (1 / 0) * (p ? -1 : 1);
              (s += Math.pow(2, n)), (o -= c);
            }
            return (p ? -1 : 1) * s * Math.pow(2, o - n);
          }),
            (r.write = function (t, e, r, n, i, o) {
              var s,
                a,
                u,
                c = 8 * o - i - 1,
                f = (1 << c) - 1,
                l = f >> 1,
                h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                p = n ? 0 : o - 1,
                d = n ? 1 : -1,
                y = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
              for (
                e = Math.abs(e),
                  isNaN(e) || e === 1 / 0
                    ? ((a = isNaN(e) ? 1 : 0), (s = f))
                    : ((s = Math.floor(Math.log(e) / Math.LN2)),
                      e * (u = Math.pow(2, -s)) < 1 && (s--, (u *= 2)),
                      (e += s + l >= 1 ? h / u : h * Math.pow(2, 1 - l)) * u >=
                        2 && (s++, (u /= 2)),
                      s + l >= f
                        ? ((a = 0), (s = f))
                        : s + l >= 1
                        ? ((a = (e * u - 1) * Math.pow(2, i)), (s += l))
                        : ((a = e * Math.pow(2, l - 1) * Math.pow(2, i)),
                          (s = 0)));
                i >= 8;
                t[r + p] = 255 & a, p += d, a /= 256, i -= 8
              );
              for (
                s = (s << i) | a, c += i;
                c > 0;
                t[r + p] = 255 & s, p += d, s /= 256, c -= 8
              );
              t[r + p - d] |= 128 * y;
            });
        },
        {},
      ],
      4: [
        function (t, e, r) {
          arguments[4][2][0].apply(r, arguments);
        },
        {
          dup: 2,
        },
      ],
      5: [
        function (t, e, r) {
          (function (e) {
            'use strict';
            var n = t('base64-js'),
              i = t('ieee754');
            (r.Buffer = e),
              (r.SlowBuffer = function (t) {
                return +t != t && (t = 0), e.alloc(+t);
              }),
              (r.INSPECT_MAX_BYTES = 50);
            var o = 2147483647;

            function s(t) {
              if (t > o)
                throw new RangeError(
                  'The value "' + t + '" is invalid for option "size"'
                );
              var r = new Uint8Array(t);
              return (r.__proto__ = e.prototype), r;
            }

            function e(t, e, r) {
              if ('number' == typeof t) {
                if ('string' == typeof e)
                  throw new TypeError(
                    'The "string" argument must be of type string. Received type number'
                  );
                return c(t);
              }
              return a(t, e, r);
            }

            function a(t, r, n) {
              if ('string' == typeof t)
                return (function (t, r) {
                  if (
                    (('string' == typeof r && '' !== r) || (r = 'utf8'),
                    !e.isEncoding(r))
                  )
                    throw new TypeError('Unknown encoding: ' + r);
                  var n = 0 | h(t, r),
                    i = s(n),
                    o = i.write(t, r);
                  return o !== n && (i = i.slice(0, o)), i;
                })(t, r);
              if (ArrayBuffer.isView(t)) return f(t);
              if (null == t)
                throw TypeError(
                  'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
                    typeof t
                );
              if (K(t, ArrayBuffer) || (t && K(t.buffer, ArrayBuffer)))
                return (function (t, r, n) {
                  if (r < 0 || t.byteLength < r)
                    throw new RangeError(
                      '"offset" is outside of buffer bounds'
                    );
                  if (t.byteLength < r + (n || 0))
                    throw new RangeError(
                      '"length" is outside of buffer bounds'
                    );
                  var i;
                  return (
                    ((i =
                      void 0 === r && void 0 === n
                        ? new Uint8Array(t)
                        : void 0 === n
                        ? new Uint8Array(t, r)
                        : new Uint8Array(t, r, n)).__proto__ = e.prototype),
                    i
                  );
                })(t, r, n);
              if ('number' == typeof t)
                throw new TypeError(
                  'The "value" argument must not be of type number. Received type number'
                );
              var i = t.valueOf && t.valueOf();
              if (null != i && i !== t) return e.from(i, r, n);
              var o = (function (t) {
                if (e.isBuffer(t)) {
                  var r = 0 | l(t.length),
                    n = s(r);
                  return 0 === n.length ? n : (t.copy(n, 0, 0, r), n);
                }
                return void 0 !== t.length
                  ? 'number' != typeof t.length || N(t.length)
                    ? s(0)
                    : f(t)
                  : 'Buffer' === t.type && Array.isArray(t.data)
                  ? f(t.data)
                  : void 0;
              })(t);
              if (o) return o;
              if (
                'undefined' != typeof Symbol &&
                null != Symbol.toPrimitive &&
                'function' == typeof t[Symbol.toPrimitive]
              )
                return e.from(t[Symbol.toPrimitive]('string'), r, n);
              throw new TypeError(
                'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
                  typeof t
              );
            }

            function u(t) {
              if ('number' != typeof t)
                throw new TypeError('"size" argument must be of type number');
              if (t < 0)
                throw new RangeError(
                  'The value "' + t + '" is invalid for option "size"'
                );
            }

            function c(t) {
              return u(t), s(t < 0 ? 0 : 0 | l(t));
            }

            function f(t) {
              for (
                var e = t.length < 0 ? 0 : 0 | l(t.length), r = s(e), n = 0;
                n < e;
                n += 1
              )
                r[n] = 255 & t[n];
              return r;
            }

            function l(t) {
              if (t >= o)
                throw new RangeError(
                  'Attempt to allocate Buffer larger than maximum size: 0x' +
                    o.toString(16) +
                    ' bytes'
                );
              return 0 | t;
            }

            function h(t, r) {
              if (e.isBuffer(t)) return t.length;
              if (ArrayBuffer.isView(t) || K(t, ArrayBuffer))
                return t.byteLength;
              if ('string' != typeof t)
                throw new TypeError(
                  'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                    typeof t
                );
              var n = t.length,
                i = arguments.length > 2 && !0 === arguments[2];
              if (!i && 0 === n) return 0;
              for (var o = !1; ; )
                switch (r) {
                  case 'ascii':
                  case 'latin1':
                  case 'binary':
                    return n;
                  case 'utf8':
                  case 'utf-8':
                    return j(t).length;
                  case 'ucs2':
                  case 'ucs-2':
                  case 'utf16le':
                  case 'utf-16le':
                    return 2 * n;
                  case 'hex':
                    return n >>> 1;
                  case 'base64':
                    return M(t).length;
                  default:
                    if (o) return i ? -1 : j(t).length;
                    (r = ('' + r).toLowerCase()), (o = !0);
                }
            }

            function p(t, e, r) {
              var n = t[e];
              (t[e] = t[r]), (t[r] = n);
            }

            function d(t, r, n, i, o) {
              if (0 === t.length) return -1;
              if (
                ('string' == typeof n
                  ? ((i = n), (n = 0))
                  : n > 2147483647
                  ? (n = 2147483647)
                  : n < -2147483648 && (n = -2147483648),
                N((n = +n)) && (n = o ? 0 : t.length - 1),
                n < 0 && (n = t.length + n),
                n >= t.length)
              ) {
                if (o) return -1;
                n = t.length - 1;
              } else if (n < 0) {
                if (!o) return -1;
                n = 0;
              }
              if (('string' == typeof r && (r = e.from(r, i)), e.isBuffer(r)))
                return 0 === r.length ? -1 : y(t, r, n, i, o);
              if ('number' == typeof r)
                return (
                  (r &= 255),
                  'function' == typeof Uint8Array.prototype.indexOf
                    ? o
                      ? Uint8Array.prototype.indexOf.call(t, r, n)
                      : Uint8Array.prototype.lastIndexOf.call(t, r, n)
                    : y(t, [r], n, i, o)
                );
              throw new TypeError('val must be string, number or Buffer');
            }

            function y(t, e, r, n, i) {
              var o,
                s = 1,
                a = t.length,
                u = e.length;
              if (
                void 0 !== n &&
                ('ucs2' === (n = String(n).toLowerCase()) ||
                  'ucs-2' === n ||
                  'utf16le' === n ||
                  'utf-16le' === n)
              ) {
                if (t.length < 2 || e.length < 2) return -1;
                (s = 2), (a /= 2), (u /= 2), (r /= 2);
              }

              function c(t, e) {
                return 1 === s ? t[e] : t.readUInt16BE(e * s);
              }
              if (i) {
                var f = -1;
                for (o = r; o < a; o++)
                  if (c(t, o) === c(e, -1 === f ? 0 : o - f)) {
                    if ((-1 === f && (f = o), o - f + 1 === u)) return f * s;
                  } else -1 !== f && (o -= o - f), (f = -1);
              } else
                for (r + u > a && (r = a - u), o = r; o >= 0; o--) {
                  for (var l = !0, h = 0; h < u; h++)
                    if (c(t, o + h) !== c(e, h)) {
                      l = !1;
                      break;
                    }
                  if (l) return o;
                }
              return -1;
            }

            function m(t, e, r, n) {
              r = Number(r) || 0;
              var i = t.length - r;
              n ? (n = Number(n)) > i && (n = i) : (n = i);
              var o = e.length;
              n > o / 2 && (n = o / 2);
              for (var s = 0; s < n; ++s) {
                var a = parseInt(e.substr(2 * s, 2), 16);
                if (N(a)) return s;
                t[r + s] = a;
              }
              return s;
            }

            function v(t, e, r, n) {
              return U(j(e, t.length - r), t, r, n);
            }

            function g(t, e, r, n) {
              return U(
                (function (t) {
                  for (var e = [], r = 0; r < t.length; ++r)
                    e.push(255 & t.charCodeAt(r));
                  return e;
                })(e),
                t,
                r,
                n
              );
            }

            function w(t, e, r, n) {
              return g(t, e, r, n);
            }

            function b(t, e, r, n) {
              return U(M(e), t, r, n);
            }

            function _(t, e, r, n) {
              return U(
                (function (t, e) {
                  for (
                    var r, n, i, o = [], s = 0;
                    s < t.length && !((e -= 2) < 0);
                    ++s
                  )
                    (n = (r = t.charCodeAt(s)) >> 8),
                      (i = r % 256),
                      o.push(i),
                      o.push(n);
                  return o;
                })(e, t.length - r),
                t,
                r,
                n
              );
            }

            function E(t, e, r) {
              return 0 === e && r === t.length
                ? n.fromByteArray(t)
                : n.fromByteArray(t.slice(e, r));
            }

            function x(t, e, r) {
              r = Math.min(t.length, r);
              for (var n = [], i = e; i < r; ) {
                var o,
                  s,
                  a,
                  u,
                  c = t[i],
                  f = null,
                  l = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                if (i + l <= r)
                  switch (l) {
                    case 1:
                      c < 128 && (f = c);
                      break;
                    case 2:
                      128 == (192 & (o = t[i + 1])) &&
                        (u = ((31 & c) << 6) | (63 & o)) > 127 &&
                        (f = u);
                      break;
                    case 3:
                      (o = t[i + 1]),
                        (s = t[i + 2]),
                        128 == (192 & o) &&
                          128 == (192 & s) &&
                          (u = ((15 & c) << 12) | ((63 & o) << 6) | (63 & s)) >
                            2047 &&
                          (u < 55296 || u > 57343) &&
                          (f = u);
                      break;
                    case 4:
                      (o = t[i + 1]),
                        (s = t[i + 2]),
                        (a = t[i + 3]),
                        128 == (192 & o) &&
                          128 == (192 & s) &&
                          128 == (192 & a) &&
                          (u =
                            ((15 & c) << 18) |
                            ((63 & o) << 12) |
                            ((63 & s) << 6) |
                            (63 & a)) > 65535 &&
                          u < 1114112 &&
                          (f = u);
                  }
                null === f
                  ? ((f = 65533), (l = 1))
                  : f > 65535 &&
                    ((f -= 65536),
                    n.push(((f >>> 10) & 1023) | 55296),
                    (f = 56320 | (1023 & f))),
                  n.push(f),
                  (i += l);
              }
              return (function (t) {
                var e = t.length;
                if (e <= k) return String.fromCharCode.apply(String, t);
                for (var r = '', n = 0; n < e; )
                  r += String.fromCharCode.apply(String, t.slice(n, (n += k)));
                return r;
              })(n);
            }
            (r.kMaxLength = o),
              (e.TYPED_ARRAY_SUPPORT = (function () {
                try {
                  var t = new Uint8Array(1);
                  return (
                    (t.__proto__ = {
                      __proto__: Uint8Array.prototype,
                      foo: function () {
                        return 42;
                      },
                    }),
                    42 === t.foo()
                  );
                } catch (t) {
                  return !1;
                }
              })()),
              e.TYPED_ARRAY_SUPPORT ||
                'undefined' == typeof console ||
                'function' != typeof console.error ||
                console.error(
                  'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
                ),
              Object.defineProperty(e.prototype, 'parent', {
                enumerable: !0,
                get: function () {
                  if (e.isBuffer(this)) return this.buffer;
                },
              }),
              Object.defineProperty(e.prototype, 'offset', {
                enumerable: !0,
                get: function () {
                  if (e.isBuffer(this)) return this.byteOffset;
                },
              }),
              'undefined' != typeof Symbol &&
                null != Symbol.species &&
                e[Symbol.species] === e &&
                Object.defineProperty(e, Symbol.species, {
                  value: null,
                  configurable: !0,
                  enumerable: !1,
                  writable: !1,
                }),
              (e.poolSize = 8192),
              (e.from = function (t, e, r) {
                return a(t, e, r);
              }),
              (e.prototype.__proto__ = Uint8Array.prototype),
              (e.__proto__ = Uint8Array),
              (e.alloc = function (t, e, r) {
                return (function (t, e, r) {
                  return (
                    u(t),
                    t <= 0
                      ? s(t)
                      : void 0 !== e
                      ? 'string' == typeof r
                        ? s(t).fill(e, r)
                        : s(t).fill(e)
                      : s(t)
                  );
                })(t, e, r);
              }),
              (e.allocUnsafe = function (t) {
                return c(t);
              }),
              (e.allocUnsafeSlow = function (t) {
                return c(t);
              }),
              (e.isBuffer = function (t) {
                return null != t && !0 === t._isBuffer && t !== e.prototype;
              }),
              (e.compare = function (t, r) {
                if (
                  (K(t, Uint8Array) && (t = e.from(t, t.offset, t.byteLength)),
                  K(r, Uint8Array) && (r = e.from(r, r.offset, r.byteLength)),
                  !e.isBuffer(t) || !e.isBuffer(r))
                )
                  throw new TypeError(
                    'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
                  );
                if (t === r) return 0;
                for (
                  var n = t.length, i = r.length, o = 0, s = Math.min(n, i);
                  o < s;
                  ++o
                )
                  if (t[o] !== r[o]) {
                    (n = t[o]), (i = r[o]);
                    break;
                  }
                return n < i ? -1 : i < n ? 1 : 0;
              }),
              (e.isEncoding = function (t) {
                switch (String(t).toLowerCase()) {
                  case 'hex':
                  case 'utf8':
                  case 'utf-8':
                  case 'ascii':
                  case 'latin1':
                  case 'binary':
                  case 'base64':
                  case 'ucs2':
                  case 'ucs-2':
                  case 'utf16le':
                  case 'utf-16le':
                    return !0;
                  default:
                    return !1;
                }
              }),
              (e.concat = function (t, r) {
                if (!Array.isArray(t))
                  throw new TypeError(
                    '"list" argument must be an Array of Buffers'
                  );
                if (0 === t.length) return e.alloc(0);
                var n;
                if (void 0 === r)
                  for (r = 0, n = 0; n < t.length; ++n) r += t[n].length;
                var i = e.allocUnsafe(r),
                  o = 0;
                for (n = 0; n < t.length; ++n) {
                  var s = t[n];
                  if ((K(s, Uint8Array) && (s = e.from(s)), !e.isBuffer(s)))
                    throw new TypeError(
                      '"list" argument must be an Array of Buffers'
                    );
                  s.copy(i, o), (o += s.length);
                }
                return i;
              }),
              (e.byteLength = h),
              (e.prototype._isBuffer = !0),
              (e.prototype.swap16 = function () {
                var t = this.length;
                if (t % 2 != 0)
                  throw new RangeError(
                    'Buffer size must be a multiple of 16-bits'
                  );
                for (var e = 0; e < t; e += 2) p(this, e, e + 1);
                return this;
              }),
              (e.prototype.swap32 = function () {
                var t = this.length;
                if (t % 4 != 0)
                  throw new RangeError(
                    'Buffer size must be a multiple of 32-bits'
                  );
                for (var e = 0; e < t; e += 4)
                  p(this, e, e + 3), p(this, e + 1, e + 2);
                return this;
              }),
              (e.prototype.swap64 = function () {
                var t = this.length;
                if (t % 8 != 0)
                  throw new RangeError(
                    'Buffer size must be a multiple of 64-bits'
                  );
                for (var e = 0; e < t; e += 8)
                  p(this, e, e + 7),
                    p(this, e + 1, e + 6),
                    p(this, e + 2, e + 5),
                    p(this, e + 3, e + 4);
                return this;
              }),
              (e.prototype.toString = function () {
                var t = this.length;
                return 0 === t
                  ? ''
                  : 0 === arguments.length
                  ? x(this, 0, t)
                  : function (t, e, r) {
                      var n = !1;
                      if (((void 0 === e || e < 0) && (e = 0), e > this.length))
                        return '';
                      if (
                        ((void 0 === r || r > this.length) && (r = this.length),
                        r <= 0)
                      )
                        return '';
                      if ((r >>>= 0) <= (e >>>= 0)) return '';
                      for (t || (t = 'utf8'); ; )
                        switch (t) {
                          case 'hex':
                            return B(this, e, r);
                          case 'utf8':
                          case 'utf-8':
                            return x(this, e, r);
                          case 'ascii':
                            return S(this, e, r);
                          case 'latin1':
                          case 'binary':
                            return A(this, e, r);
                          case 'base64':
                            return E(this, e, r);
                          case 'ucs2':
                          case 'ucs-2':
                          case 'utf16le':
                          case 'utf-16le':
                            return I(this, e, r);
                          default:
                            if (n)
                              throw new TypeError('Unknown encoding: ' + t);
                            (t = (t + '').toLowerCase()), (n = !0);
                        }
                    }.apply(this, arguments);
              }),
              (e.prototype.toLocaleString = e.prototype.toString),
              (e.prototype.equals = function (t) {
                if (!e.isBuffer(t))
                  throw new TypeError('Argument must be a Buffer');
                return this === t || 0 === e.compare(this, t);
              }),
              (e.prototype.inspect = function () {
                var t = '',
                  e = r.INSPECT_MAX_BYTES;
                return (
                  (t = this.toString('hex', 0, e)
                    .replace(/(.{2})/g, '$1 ')
                    .trim()),
                  this.length > e && (t += ' ... '),
                  '<Buffer ' + t + '>'
                );
              }),
              (e.prototype.compare = function (t, r, n, i, o) {
                if (
                  (K(t, Uint8Array) && (t = e.from(t, t.offset, t.byteLength)),
                  !e.isBuffer(t))
                )
                  throw new TypeError(
                    'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                      typeof t
                  );
                if (
                  (void 0 === r && (r = 0),
                  void 0 === n && (n = t ? t.length : 0),
                  void 0 === i && (i = 0),
                  void 0 === o && (o = this.length),
                  r < 0 || n > t.length || i < 0 || o > this.length)
                )
                  throw new RangeError('out of range index');
                if (i >= o && r >= n) return 0;
                if (i >= o) return -1;
                if (r >= n) return 1;
                if (this === t) return 0;
                for (
                  var s = (o >>>= 0) - (i >>>= 0),
                    a = (n >>>= 0) - (r >>>= 0),
                    u = Math.min(s, a),
                    c = this.slice(i, o),
                    f = t.slice(r, n),
                    l = 0;
                  l < u;
                  ++l
                )
                  if (c[l] !== f[l]) {
                    (s = c[l]), (a = f[l]);
                    break;
                  }
                return s < a ? -1 : a < s ? 1 : 0;
              }),
              (e.prototype.includes = function (t, e, r) {
                return -1 !== this.indexOf(t, e, r);
              }),
              (e.prototype.indexOf = function (t, e, r) {
                return d(this, t, e, r, !0);
              }),
              (e.prototype.lastIndexOf = function (t, e, r) {
                return d(this, t, e, r, !1);
              }),
              (e.prototype.write = function (t, e, r, n) {
                if (void 0 === e) (n = 'utf8'), (r = this.length), (e = 0);
                else if (void 0 === r && 'string' == typeof e)
                  (n = e), (r = this.length), (e = 0);
                else {
                  if (!isFinite(e))
                    throw new Error(
                      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
                    );
                  (e >>>= 0),
                    isFinite(r)
                      ? ((r >>>= 0), void 0 === n && (n = 'utf8'))
                      : ((n = r), (r = void 0));
                }
                var i = this.length - e;
                if (
                  ((void 0 === r || r > i) && (r = i),
                  (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
                )
                  throw new RangeError(
                    'Attempt to write outside buffer bounds'
                  );
                n || (n = 'utf8');
                for (var o = !1; ; )
                  switch (n) {
                    case 'hex':
                      return m(this, t, e, r);
                    case 'utf8':
                    case 'utf-8':
                      return v(this, t, e, r);
                    case 'ascii':
                      return g(this, t, e, r);
                    case 'latin1':
                    case 'binary':
                      return w(this, t, e, r);
                    case 'base64':
                      return b(this, t, e, r);
                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                      return _(this, t, e, r);
                    default:
                      if (o) throw new TypeError('Unknown encoding: ' + n);
                      (n = ('' + n).toLowerCase()), (o = !0);
                  }
              }),
              (e.prototype.toJSON = function () {
                return {
                  type: 'Buffer',
                  data: Array.prototype.slice.call(this._arr || this, 0),
                };
              });
            var k = 4096;

            function S(t, e, r) {
              var n = '';
              r = Math.min(t.length, r);
              for (var i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
              return n;
            }

            function A(t, e, r) {
              var n = '';
              r = Math.min(t.length, r);
              for (var i = e; i < r; ++i) n += String.fromCharCode(t[i]);
              return n;
            }

            function B(t, e, r) {
              var n = t.length;
              (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
              for (var i = '', o = e; o < r; ++o) i += R(t[o]);
              return i;
            }

            function I(t, e, r) {
              for (var n = t.slice(e, r), i = '', o = 0; o < n.length; o += 2)
                i += String.fromCharCode(n[o] + 256 * n[o + 1]);
              return i;
            }

            function O(t, e, r) {
              if (t % 1 != 0 || t < 0)
                throw new RangeError('offset is not uint');
              if (t + e > r)
                throw new RangeError('Trying to access beyond buffer length');
            }

            function C(t, r, n, i, o, s) {
              if (!e.isBuffer(t))
                throw new TypeError(
                  '"buffer" argument must be a Buffer instance'
                );
              if (r > o || r < s)
                throw new RangeError('"value" argument is out of bounds');
              if (n + i > t.length) throw new RangeError('Index out of range');
            }

            function P(t, e, r, n, i, o) {
              if (r + n > t.length) throw new RangeError('Index out of range');
              if (r < 0) throw new RangeError('Index out of range');
            }

            function D(t, e, r, n, o) {
              return (
                (e = +e),
                (r >>>= 0),
                o || P(t, 0, r, 4),
                i.write(t, e, r, n, 23, 4),
                r + 4
              );
            }

            function T(t, e, r, n, o) {
              return (
                (e = +e),
                (r >>>= 0),
                o || P(t, 0, r, 8),
                i.write(t, e, r, n, 52, 8),
                r + 8
              );
            }
            (e.prototype.slice = function (t, r) {
              var n = this.length;
              (t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
                (r = void 0 === r ? n : ~~r) < 0
                  ? (r += n) < 0 && (r = 0)
                  : r > n && (r = n),
                r < t && (r = t);
              var i = this.subarray(t, r);
              return (i.__proto__ = e.prototype), i;
            }),
              (e.prototype.readUIntLE = function (t, e, r) {
                (t >>>= 0), (e >>>= 0), r || O(t, e, this.length);
                for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
                  n += this[t + o] * i;
                return n;
              }),
              (e.prototype.readUIntBE = function (t, e, r) {
                (t >>>= 0), (e >>>= 0), r || O(t, e, this.length);
                for (var n = this[t + --e], i = 1; e > 0 && (i *= 256); )
                  n += this[t + --e] * i;
                return n;
              }),
              (e.prototype.readUInt8 = function (t, e) {
                return (t >>>= 0), e || O(t, 1, this.length), this[t];
              }),
              (e.prototype.readUInt16LE = function (t, e) {
                return (
                  (t >>>= 0),
                  e || O(t, 2, this.length),
                  this[t] | (this[t + 1] << 8)
                );
              }),
              (e.prototype.readUInt16BE = function (t, e) {
                return (
                  (t >>>= 0),
                  e || O(t, 2, this.length),
                  (this[t] << 8) | this[t + 1]
                );
              }),
              (e.prototype.readUInt32LE = function (t, e) {
                return (
                  (t >>>= 0),
                  e || O(t, 4, this.length),
                  (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                    16777216 * this[t + 3]
                );
              }),
              (e.prototype.readUInt32BE = function (t, e) {
                return (
                  (t >>>= 0),
                  e || O(t, 4, this.length),
                  16777216 * this[t] +
                    ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
                );
              }),
              (e.prototype.readIntLE = function (t, e, r) {
                (t >>>= 0), (e >>>= 0), r || O(t, e, this.length);
                for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
                  n += this[t + o] * i;
                return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n;
              }),
              (e.prototype.readIntBE = function (t, e, r) {
                (t >>>= 0), (e >>>= 0), r || O(t, e, this.length);
                for (var n = e, i = 1, o = this[t + --n]; n > 0 && (i *= 256); )
                  o += this[t + --n] * i;
                return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o;
              }),
              (e.prototype.readInt8 = function (t, e) {
                return (
                  (t >>>= 0),
                  e || O(t, 1, this.length),
                  128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
                );
              }),
              (e.prototype.readInt16LE = function (t, e) {
                (t >>>= 0), e || O(t, 2, this.length);
                var r = this[t] | (this[t + 1] << 8);
                return 32768 & r ? 4294901760 | r : r;
              }),
              (e.prototype.readInt16BE = function (t, e) {
                (t >>>= 0), e || O(t, 2, this.length);
                var r = this[t + 1] | (this[t] << 8);
                return 32768 & r ? 4294901760 | r : r;
              }),
              (e.prototype.readInt32LE = function (t, e) {
                return (
                  (t >>>= 0),
                  e || O(t, 4, this.length),
                  this[t] |
                    (this[t + 1] << 8) |
                    (this[t + 2] << 16) |
                    (this[t + 3] << 24)
                );
              }),
              (e.prototype.readInt32BE = function (t, e) {
                return (
                  (t >>>= 0),
                  e || O(t, 4, this.length),
                  (this[t] << 24) |
                    (this[t + 1] << 16) |
                    (this[t + 2] << 8) |
                    this[t + 3]
                );
              }),
              (e.prototype.readFloatLE = function (t, e) {
                return (
                  (t >>>= 0),
                  e || O(t, 4, this.length),
                  i.read(this, t, !0, 23, 4)
                );
              }),
              (e.prototype.readFloatBE = function (t, e) {
                return (
                  (t >>>= 0),
                  e || O(t, 4, this.length),
                  i.read(this, t, !1, 23, 4)
                );
              }),
              (e.prototype.readDoubleLE = function (t, e) {
                return (
                  (t >>>= 0),
                  e || O(t, 8, this.length),
                  i.read(this, t, !0, 52, 8)
                );
              }),
              (e.prototype.readDoubleBE = function (t, e) {
                return (
                  (t >>>= 0),
                  e || O(t, 8, this.length),
                  i.read(this, t, !1, 52, 8)
                );
              }),
              (e.prototype.writeUIntLE = function (t, e, r, n) {
                (t = +t),
                  (e >>>= 0),
                  (r >>>= 0),
                  n || C(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                var i = 1,
                  o = 0;
                for (this[e] = 255 & t; ++o < r && (i *= 256); )
                  this[e + o] = (t / i) & 255;
                return e + r;
              }),
              (e.prototype.writeUIntBE = function (t, e, r, n) {
                (t = +t),
                  (e >>>= 0),
                  (r >>>= 0),
                  n || C(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                var i = r - 1,
                  o = 1;
                for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
                  this[e + i] = (t / o) & 255;
                return e + r;
              }),
              (e.prototype.writeUInt8 = function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || C(this, t, e, 1, 255, 0),
                  (this[e] = 255 & t),
                  e + 1
                );
              }),
              (e.prototype.writeUInt16LE = function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || C(this, t, e, 2, 65535, 0),
                  (this[e] = 255 & t),
                  (this[e + 1] = t >>> 8),
                  e + 2
                );
              }),
              (e.prototype.writeUInt16BE = function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || C(this, t, e, 2, 65535, 0),
                  (this[e] = t >>> 8),
                  (this[e + 1] = 255 & t),
                  e + 2
                );
              }),
              (e.prototype.writeUInt32LE = function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || C(this, t, e, 4, 4294967295, 0),
                  (this[e + 3] = t >>> 24),
                  (this[e + 2] = t >>> 16),
                  (this[e + 1] = t >>> 8),
                  (this[e] = 255 & t),
                  e + 4
                );
              }),
              (e.prototype.writeUInt32BE = function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || C(this, t, e, 4, 4294967295, 0),
                  (this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t),
                  e + 4
                );
              }),
              (e.prototype.writeIntLE = function (t, e, r, n) {
                if (((t = +t), (e >>>= 0), !n)) {
                  var i = Math.pow(2, 8 * r - 1);
                  C(this, t, e, r, i - 1, -i);
                }
                var o = 0,
                  s = 1,
                  a = 0;
                for (this[e] = 255 & t; ++o < r && (s *= 256); )
                  t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1),
                    (this[e + o] = (((t / s) >> 0) - a) & 255);
                return e + r;
              }),
              (e.prototype.writeIntBE = function (t, e, r, n) {
                if (((t = +t), (e >>>= 0), !n)) {
                  var i = Math.pow(2, 8 * r - 1);
                  C(this, t, e, r, i - 1, -i);
                }
                var o = r - 1,
                  s = 1,
                  a = 0;
                for (this[e + o] = 255 & t; --o >= 0 && (s *= 256); )
                  t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1),
                    (this[e + o] = (((t / s) >> 0) - a) & 255);
                return e + r;
              }),
              (e.prototype.writeInt8 = function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || C(this, t, e, 1, 127, -128),
                  t < 0 && (t = 255 + t + 1),
                  (this[e] = 255 & t),
                  e + 1
                );
              }),
              (e.prototype.writeInt16LE = function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || C(this, t, e, 2, 32767, -32768),
                  (this[e] = 255 & t),
                  (this[e + 1] = t >>> 8),
                  e + 2
                );
              }),
              (e.prototype.writeInt16BE = function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || C(this, t, e, 2, 32767, -32768),
                  (this[e] = t >>> 8),
                  (this[e + 1] = 255 & t),
                  e + 2
                );
              }),
              (e.prototype.writeInt32LE = function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || C(this, t, e, 4, 2147483647, -2147483648),
                  (this[e] = 255 & t),
                  (this[e + 1] = t >>> 8),
                  (this[e + 2] = t >>> 16),
                  (this[e + 3] = t >>> 24),
                  e + 4
                );
              }),
              (e.prototype.writeInt32BE = function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || C(this, t, e, 4, 2147483647, -2147483648),
                  t < 0 && (t = 4294967295 + t + 1),
                  (this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t),
                  e + 4
                );
              }),
              (e.prototype.writeFloatLE = function (t, e, r) {
                return D(this, t, e, !0, r);
              }),
              (e.prototype.writeFloatBE = function (t, e, r) {
                return D(this, t, e, !1, r);
              }),
              (e.prototype.writeDoubleLE = function (t, e, r) {
                return T(this, t, e, !0, r);
              }),
              (e.prototype.writeDoubleBE = function (t, e, r) {
                return T(this, t, e, !1, r);
              }),
              (e.prototype.copy = function (t, r, n, i) {
                if (!e.isBuffer(t))
                  throw new TypeError('argument should be a Buffer');
                if (
                  (n || (n = 0),
                  i || 0 === i || (i = this.length),
                  r >= t.length && (r = t.length),
                  r || (r = 0),
                  i > 0 && i < n && (i = n),
                  i === n)
                )
                  return 0;
                if (0 === t.length || 0 === this.length) return 0;
                if (r < 0) throw new RangeError('targetStart out of bounds');
                if (n < 0 || n >= this.length)
                  throw new RangeError('Index out of range');
                if (i < 0) throw new RangeError('sourceEnd out of bounds');
                i > this.length && (i = this.length),
                  t.length - r < i - n && (i = t.length - r + n);
                var o = i - n;
                if (
                  this === t &&
                  'function' == typeof Uint8Array.prototype.copyWithin
                )
                  this.copyWithin(r, n, i);
                else if (this === t && n < r && r < i)
                  for (var s = o - 1; s >= 0; --s) t[s + r] = this[s + n];
                else Uint8Array.prototype.set.call(t, this.subarray(n, i), r);
                return o;
              }),
              (e.prototype.fill = function (t, r, n, i) {
                if ('string' == typeof t) {
                  if (
                    ('string' == typeof r
                      ? ((i = r), (r = 0), (n = this.length))
                      : 'string' == typeof n && ((i = n), (n = this.length)),
                    void 0 !== i && 'string' != typeof i)
                  )
                    throw new TypeError('encoding must be a string');
                  if ('string' == typeof i && !e.isEncoding(i))
                    throw new TypeError('Unknown encoding: ' + i);
                  if (1 === t.length) {
                    var o = t.charCodeAt(0);
                    (('utf8' === i && o < 128) || 'latin1' === i) && (t = o);
                  }
                } else 'number' == typeof t && (t &= 255);
                if (r < 0 || this.length < r || this.length < n)
                  throw new RangeError('Out of range index');
                if (n <= r) return this;
                var s;
                if (
                  ((r >>>= 0),
                  (n = void 0 === n ? this.length : n >>> 0),
                  t || (t = 0),
                  'number' == typeof t)
                )
                  for (s = r; s < n; ++s) this[s] = t;
                else {
                  var a = e.isBuffer(t) ? t : e.from(t, i),
                    u = a.length;
                  if (0 === u)
                    throw new TypeError(
                      'The value "' + t + '" is invalid for argument "value"'
                    );
                  for (s = 0; s < n - r; ++s) this[s + r] = a[s % u];
                }
                return this;
              });
            var F = /[^+\/0-9A-Za-z-_]/g;

            function R(t) {
              return t < 16 ? '0' + t.toString(16) : t.toString(16);
            }

            function j(t, e) {
              var r;
              e = e || 1 / 0;
              for (var n = t.length, i = null, o = [], s = 0; s < n; ++s) {
                if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
                  if (!i) {
                    if (r > 56319) {
                      (e -= 3) > -1 && o.push(239, 191, 189);
                      continue;
                    }
                    if (s + 1 === n) {
                      (e -= 3) > -1 && o.push(239, 191, 189);
                      continue;
                    }
                    i = r;
                    continue;
                  }
                  if (r < 56320) {
                    (e -= 3) > -1 && o.push(239, 191, 189), (i = r);
                    continue;
                  }
                  r = 65536 + (((i - 55296) << 10) | (r - 56320));
                } else i && (e -= 3) > -1 && o.push(239, 191, 189);
                if (((i = null), r < 128)) {
                  if ((e -= 1) < 0) break;
                  o.push(r);
                } else if (r < 2048) {
                  if ((e -= 2) < 0) break;
                  o.push((r >> 6) | 192, (63 & r) | 128);
                } else if (r < 65536) {
                  if ((e -= 3) < 0) break;
                  o.push(
                    (r >> 12) | 224,
                    ((r >> 6) & 63) | 128,
                    (63 & r) | 128
                  );
                } else {
                  if (!(r < 1114112)) throw new Error('Invalid code point');
                  if ((e -= 4) < 0) break;
                  o.push(
                    (r >> 18) | 240,
                    ((r >> 12) & 63) | 128,
                    ((r >> 6) & 63) | 128,
                    (63 & r) | 128
                  );
                }
              }
              return o;
            }

            function M(t) {
              return n.toByteArray(
                (function (t) {
                  if (
                    (t = (t = t.split('=')[0]).trim().replace(F, '')).length < 2
                  )
                    return '';
                  for (; t.length % 4 != 0; ) t += '=';
                  return t;
                })(t)
              );
            }

            function U(t, e, r, n) {
              for (
                var i = 0;
                i < n && !(i + r >= e.length || i >= t.length);
                ++i
              )
                e[i + r] = t[i];
              return i;
            }

            function K(t, e) {
              return (
                t instanceof e ||
                (null != t &&
                  null != t.constructor &&
                  null != t.constructor.name &&
                  t.constructor.name === e.name)
              );
            }

            function N(t) {
              return t != t;
            }
          }.call(this, t('buffer').Buffer));
        },
        {
          'base64-js': 4,
          buffer: 5,
          ieee754: 6,
        },
      ],
      6: [
        function (t, e, r) {
          arguments[4][3][0].apply(r, arguments);
        },
        {
          dup: 3,
        },
      ],
    },
    {},
    [1]
  )(1);
}),
  (function (t, e) {
    'object' == typeof exports && 'undefined' != typeof module
      ? (module.exports = e())
      : 'function' == typeof define && define.amd
      ? define(e)
      : (t.Dexie = e());
  })(this, function () {
    'use strict';
    var t = function () {
        return (t =
          Object.assign ||
          function (t) {
            for (var e, r = 1, n = arguments.length; r < n; r++)
              for (var i in (e = arguments[r]))
                Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t;
          }).apply(this, arguments);
      },
      e = Object.keys,
      r = Array.isArray,
      n =
        'undefined' != typeof self
          ? self
          : 'undefined' != typeof window
          ? window
          : global;

    function i(t, r) {
      return (
        'object' != typeof r ||
          e(r).forEach(function (e) {
            t[e] = r[e];
          }),
        t
      );
    }
    'undefined' == typeof Promise || n.Promise || (n.Promise = Promise);
    var o = Object.getPrototypeOf,
      s = {}.hasOwnProperty;

    function a(t, e) {
      return s.call(t, e);
    }

    function u(t, r) {
      'function' == typeof r && (r = r(o(t))),
        e(r).forEach(function (e) {
          f(t, e, r[e]);
        });
    }
    var c = Object.defineProperty;

    function f(t, e, r, n) {
      c(
        t,
        e,
        i(
          r && a(r, 'get') && 'function' == typeof r.get
            ? {
                get: r.get,
                set: r.set,
                configurable: !0,
              }
            : {
                value: r,
                configurable: !0,
                writable: !0,
              },
          n
        )
      );
    }

    function l(t) {
      return {
        from: function (e) {
          return (
            (t.prototype = Object.create(e.prototype)),
            f(t.prototype, 'constructor', t),
            {
              extend: u.bind(null, t.prototype),
            }
          );
        },
      };
    }
    var h = Object.getOwnPropertyDescriptor,
      p = [].slice;

    function d(t, e, r) {
      return p.call(t, e, r);
    }

    function y(t, e) {
      return e(t);
    }

    function m(t) {
      if (!t) throw new Error('Assertion Failed');
    }

    function v(t) {
      n.setImmediate ? setImmediate(t) : setTimeout(t, 0);
    }

    function g(t, e) {
      return t.reduce(function (t, r, n) {
        var i = e(r, n);
        return i && (t[i[0]] = i[1]), t;
      }, {});
    }

    function w(t, e) {
      if (a(t, e)) return t[e];
      if (!e) return t;
      if ('string' != typeof e) {
        for (var r = [], n = 0, i = e.length; n < i; ++n) {
          var o = w(t, e[n]);
          r.push(o);
        }
        return r;
      }
      var s = e.indexOf('.');
      if (-1 !== s) {
        var u = t[e.substr(0, s)];
        return void 0 === u ? void 0 : w(u, e.substr(s + 1));
      }
    }

    function b(t, e, n) {
      if (t && void 0 !== e && !('isFrozen' in Object && Object.isFrozen(t)))
        if ('string' != typeof e && 'length' in e) {
          m('string' != typeof n && 'length' in n);
          for (var i = 0, o = e.length; i < o; ++i) b(t, e[i], n[i]);
        } else {
          var s = e.indexOf('.');
          if (-1 !== s) {
            var a = e.substr(0, s),
              u = e.substr(s + 1);
            if ('' === u)
              void 0 === n
                ? r(t) && !isNaN(parseInt(a))
                  ? t.splice(a, 1)
                  : delete t[a]
                : (t[a] = n);
            else {
              var c = t[a];
              c || (c = t[a] = {}), b(c, u, n);
            }
          } else
            void 0 === n
              ? r(t) && !isNaN(parseInt(e))
                ? t.splice(e, 1)
                : delete t[e]
              : (t[e] = n);
        }
    }

    function _(t) {
      var e = {};
      for (var r in t) a(t, r) && (e[r] = t[r]);
      return e;
    }
    var E = [].concat;

    function x(t) {
      return E.apply([], t);
    }
    var k =
        'Boolean,String,Date,RegExp,Blob,File,FileList,ArrayBuffer,DataView,Uint8ClampedArray,ImageData,Map,Set'
          .split(',')
          .concat(
            x(
              [8, 16, 32, 64].map(function (t) {
                return ['Int', 'Uint', 'Float'].map(function (e) {
                  return e + t + 'Array';
                });
              })
            )
          )
          .filter(function (t) {
            return n[t];
          }),
      S = k.map(function (t) {
        return n[t];
      }),
      A = g(k, function (t) {
        return [t, !0];
      });

    function B(t) {
      if (!t || 'object' != typeof t) return t;
      var e;
      if (r(t)) {
        e = [];
        for (var n = 0, i = t.length; n < i; ++n) e.push(B(t[n]));
      } else if (0 <= S.indexOf(t.constructor)) e = t;
      else
        for (var o in ((e = t.constructor
          ? Object.create(t.constructor.prototype)
          : {}),
        t))
          a(t, o) && (e[o] = B(t[o]));
      return e;
    }
    var I = {}.toString;

    function O(t) {
      return I.call(t).slice(8, -1);
    }
    var C = function (t, e) {
      return 'Array' === e
        ? '' +
            t.map(function (t) {
              return C(t, O(t));
            })
        : 'ArrayBuffer' === e
        ? '' + new Uint8Array(t)
        : 'Date' === e
        ? t.getTime()
        : ArrayBuffer.isView(t)
        ? '' + new Uint8Array(t.buffer)
        : t;
    };

    function P(t, r, n, i) {
      return (
        (n = n || {}),
        (i = i || ''),
        e(t).forEach(function (e) {
          if (a(r, e)) {
            var o = t[e],
              s = r[e];
            if ('object' == typeof o && 'object' == typeof s && o && s) {
              var u = O(o),
                c = O(s);
              u === c
                ? A[u]
                  ? C(o, u) !== C(s, c) && (n[i + e] = r[e])
                  : P(o, s, n, i + e + '.')
                : (n[i + e] = r[e]);
            } else o !== s && (n[i + e] = r[e]);
          } else n[i + e] = void 0;
        }),
        e(r).forEach(function (e) {
          a(t, e) || (n[i + e] = r[e]);
        }),
        n
      );
    }
    var D = 'undefined' != typeof Symbol && Symbol.iterator,
      T = D
        ? function (t) {
            var e;
            return null != t && (e = t[D]) && e.apply(t);
          }
        : function () {
            return null;
          },
      F = {};

    function R(t) {
      var e, n, i, o;
      if (1 === arguments.length) {
        if (r(t)) return t.slice();
        if (this === F && 'string' == typeof t) return [t];
        if ((o = T(t))) {
          for (n = []; !(i = o.next()).done; ) n.push(i.value);
          return n;
        }
        if (null == t) return [t];
        if ('number' != typeof (e = t.length)) return [t];
        for (n = new Array(e); e--; ) n[e] = t[e];
        return n;
      }
      for (e = arguments.length, n = new Array(e); e--; ) n[e] = arguments[e];
      return n;
    }
    var j =
      'undefined' != typeof location &&
      /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);

    function M(t, e) {
      (j = t), (U = e);
    }
    var U = function () {
        return !0;
      },
      K = !new Error('').stack;

    function N() {
      if (K)
        try {
          throw new Error();
        } catch (t) {
          return t;
        }
      return new Error();
    }

    function L(t, e) {
      var r = t.stack;
      return r
        ? ((e = e || 0),
          0 === r.indexOf(t.name) &&
            (e += (t.name + t.message).split('\n').length),
          r
            .split('\n')
            .slice(e)
            .filter(U)
            .map(function (t) {
              return '\n' + t;
            })
            .join(''))
        : '';
    }
    var z = [
        'Unknown',
        'Constraint',
        'Data',
        'TransactionInactive',
        'ReadOnly',
        'Version',
        'NotFound',
        'InvalidState',
        'InvalidAccess',
        'Abort',
        'Timeout',
        'QuotaExceeded',
        'Syntax',
        'DataClone',
      ],
      q = [
        'Modify',
        'Bulk',
        'OpenFailed',
        'VersionChange',
        'Schema',
        'Upgrade',
        'InvalidTable',
        'MissingAPI',
        'NoSuchDatabase',
        'InvalidArgument',
        'SubTransaction',
        'Unsupported',
        'Internal',
        'DatabaseClosed',
        'PrematureCommit',
        'ForeignAwait',
      ].concat(z),
      V = {
        VersionChanged: 'Database version changed by other database connection',
        DatabaseClosed: 'Database has been closed',
        Abort: 'Transaction aborted',
        TransactionInactive: 'Transaction has already completed or failed',
      };

    function W(t, e) {
      (this._e = N()), (this.name = t), (this.message = e);
    }

    function G(t, e) {
      return (
        t +
        '. Errors: ' +
        Object.keys(e)
          .map(function (t) {
            return e[t].toString();
          })
          .filter(function (t, e, r) {
            return r.indexOf(t) === e;
          })
          .join('\n')
      );
    }

    function $(t, e, r, n) {
      (this._e = N()),
        (this.failures = e),
        (this.failedKeys = n),
        (this.successCount = r),
        (this.message = G(t, e));
    }

    function Y(t, e) {
      (this._e = N()),
        (this.name = 'BulkError'),
        (this.failures = e),
        (this.message = G(t, e));
    }
    l(W)
      .from(Error)
      .extend({
        stack: {
          get: function () {
            return (
              this._stack ||
              (this._stack = this.name + ': ' + this.message + L(this._e, 2))
            );
          },
        },
        toString: function () {
          return this.name + ': ' + this.message;
        },
      }),
      l($).from(W),
      l(Y).from(W);
    var H = q.reduce(function (t, e) {
        return (t[e] = e + 'Error'), t;
      }, {}),
      X = W,
      J = q.reduce(function (t, e) {
        var r = e + 'Error';

        function n(t, n) {
          (this._e = N()),
            (this.name = r),
            t
              ? 'string' == typeof t
                ? ((this.message = t + (n ? '\n ' + n : '')),
                  (this.inner = n || null))
                : 'object' == typeof t &&
                  ((this.message = t.name + ' ' + t.message), (this.inner = t))
              : ((this.message = V[e] || r), (this.inner = null));
        }
        return l(n).from(X), (t[e] = n), t;
      }, {});
    (J.Syntax = SyntaxError), (J.Type = TypeError), (J.Range = RangeError);
    var Q = z.reduce(function (t, e) {
        return (t[e + 'Error'] = J[e]), t;
      }, {}),
      Z = q.reduce(function (t, e) {
        return (
          -1 === ['Syntax', 'Type', 'Range'].indexOf(e) &&
            (t[e + 'Error'] = J[e]),
          t
        );
      }, {});

    function tt() {}

    function et(t) {
      return t;
    }

    function rt(t, e) {
      return null == t || t === et
        ? e
        : function (r) {
            return e(t(r));
          };
    }

    function nt(t, e) {
      return function () {
        t.apply(this, arguments), e.apply(this, arguments);
      };
    }

    function it(t, e) {
      return t === tt
        ? e
        : function () {
            var r = t.apply(this, arguments);
            void 0 !== r && (arguments[0] = r);
            var n = this.onsuccess,
              i = this.onerror;
            (this.onsuccess = null), (this.onerror = null);
            var o = e.apply(this, arguments);
            return (
              n &&
                (this.onsuccess = this.onsuccess ? nt(n, this.onsuccess) : n),
              i && (this.onerror = this.onerror ? nt(i, this.onerror) : i),
              void 0 !== o ? o : r
            );
          };
    }

    function ot(t, e) {
      return t === tt
        ? e
        : function () {
            t.apply(this, arguments);
            var r = this.onsuccess,
              n = this.onerror;
            (this.onsuccess = this.onerror = null),
              e.apply(this, arguments),
              r &&
                (this.onsuccess = this.onsuccess ? nt(r, this.onsuccess) : r),
              n && (this.onerror = this.onerror ? nt(n, this.onerror) : n);
          };
    }

    function st(t, e) {
      return t === tt
        ? e
        : function (r) {
            var n = t.apply(this, arguments);
            i(r, n);
            var o = this.onsuccess,
              s = this.onerror;
            (this.onsuccess = null), (this.onerror = null);
            var a = e.apply(this, arguments);
            return (
              o &&
                (this.onsuccess = this.onsuccess ? nt(o, this.onsuccess) : o),
              s && (this.onerror = this.onerror ? nt(s, this.onerror) : s),
              void 0 === n ? (void 0 === a ? void 0 : a) : i(n, a)
            );
          };
    }

    function at(t, e) {
      return t === tt
        ? e
        : function () {
            return !1 !== e.apply(this, arguments) && t.apply(this, arguments);
          };
    }

    function ut(t, e) {
      return t === tt
        ? e
        : function () {
            var r = t.apply(this, arguments);
            if (r && 'function' == typeof r.then) {
              for (var n = this, i = arguments.length, o = new Array(i); i--; )
                o[i] = arguments[i];
              return r.then(function () {
                return e.apply(n, o);
              });
            }
            return e.apply(this, arguments);
          };
    }
    (Z.ModifyError = $), (Z.DexieError = W), (Z.BulkError = Y);
    var ct = {},
      ft =
        'undefined' == typeof Promise
          ? []
          : (function () {
              var t = Promise.resolve();
              if ('undefined' == typeof crypto || !crypto.subtle)
                return [t, t.__proto__, t];
              var e = crypto.subtle.digest('SHA-512', new Uint8Array([0]));
              return [e, e.__proto__, t];
            })(),
      lt = ft[0],
      ht = ft[1],
      pt = ft[2],
      dt = ht && ht.then,
      yt = lt && lt.constructor,
      mt = !!pt,
      vt = !1,
      gt = pt
        ? function () {
            pt.then(Kt);
          }
        : n.setImmediate
        ? setImmediate.bind(null, Kt)
        : n.MutationObserver
        ? function () {
            var t = document.createElement('div');
            new MutationObserver(function () {
              Kt(), (t = null);
            }).observe(t, {
              attributes: !0,
            }),
              t.setAttribute('i', '1');
          }
        : function () {
            setTimeout(Kt, 0);
          },
      wt = function (t, e) {
        It.push([t, e]), _t && (gt(), (_t = !1));
      },
      bt = !0,
      _t = !0,
      Et = [],
      xt = [],
      kt = null,
      St = et,
      At = {
        id: 'global',
        global: !0,
        ref: 0,
        unhandleds: [],
        onunhandled: ue,
        pgp: !1,
        env: {},
        finalize: function () {
          this.unhandleds.forEach(function (t) {
            try {
              ue(t[0], t[1]);
            } catch (t) {}
          });
        },
      },
      Bt = At,
      It = [],
      Ot = 0,
      Ct = [];

    function Pt(t) {
      if ('object' != typeof this)
        throw new TypeError('Promises must be constructed via new');
      (this._listeners = []), (this.onuncatched = tt), (this._lib = !1);
      var e = (this._PSD = Bt);
      if (
        (j &&
          ((this._stackHolder = N()), (this._prev = null), (this._numPrev = 0)),
        'function' != typeof t)
      ) {
        if (t !== ct) throw new TypeError('Not a function');
        return (
          (this._state = arguments[1]),
          (this._value = arguments[2]),
          void (!1 === this._state && Ft(this, this._value))
        );
      }
      (this._state = null),
        (this._value = null),
        ++e.ref,
        (function t(e, r) {
          try {
            r(function (r) {
              if (null === e._state) {
                if (r === e)
                  throw new TypeError(
                    'A promise cannot be resolved with itself.'
                  );
                var n = e._lib && Nt();
                r && 'function' == typeof r.then
                  ? t(e, function (t, e) {
                      r instanceof Pt ? r._then(t, e) : r.then(t, e);
                    })
                  : ((e._state = !0), (e._value = r), Rt(e)),
                  n && Lt();
              }
            }, Ft.bind(null, e));
          } catch (r) {
            Ft(e, r);
          }
        })(this, t);
    }
    var Dt = {
      get: function () {
        var t = Bt,
          e = Ht;

        function r(r, n) {
          var i = this,
            o = !t.global && (t !== Bt || e !== Ht);
          o && Zt();
          var s = new Pt(function (e, s) {
            jt(i, new Tt(oe(r, t, o), oe(n, t, o), e, s, t));
          });
          return j && Ut(s, this), s;
        }
        return (r.prototype = ct), r;
      },
      set: function (t) {
        f(
          this,
          'then',
          t && t.prototype === ct
            ? Dt
            : {
                get: function () {
                  return t;
                },
                set: Dt.set,
              }
        );
      },
    };

    function Tt(t, e, r, n, i) {
      (this.onFulfilled = 'function' == typeof t ? t : null),
        (this.onRejected = 'function' == typeof e ? e : null),
        (this.resolve = r),
        (this.reject = n),
        (this.psd = i);
    }

    function Ft(t, e) {
      if ((xt.push(e), null === t._state)) {
        var r = t._lib && Nt();
        (e = St(e)),
          (t._state = !1),
          (t._value = e),
          j &&
            null !== e &&
            'object' == typeof e &&
            !e._promise &&
            (function (t, e, r) {
              try {
                t.apply(null, void 0);
              } catch (t) {}
            })(function () {
              var r = (function t(e, r) {
                var n;
                return h(e, r) || ((n = o(e)) && t(n, r));
              })(e, 'stack');
              (e._promise = t),
                f(e, 'stack', {
                  get: function () {
                    return vt
                      ? r && (r.get ? r.get.apply(e) : r.value)
                      : t.stack;
                  },
                });
            }),
          (function (t) {
            Et.some(function (e) {
              return e._value === t._value;
            }) || Et.push(t);
          })(t),
          Rt(t),
          r && Lt();
      }
    }

    function Rt(t) {
      var e = t._listeners;
      t._listeners = [];
      for (var r = 0, n = e.length; r < n; ++r) jt(t, e[r]);
      var i = t._PSD;
      --i.ref || i.finalize(),
        0 === Ot &&
          (++Ot,
          wt(function () {
            0 == --Ot && zt();
          }, []));
    }

    function jt(t, e) {
      if (null !== t._state) {
        var r = t._state ? e.onFulfilled : e.onRejected;
        if (null === r) return (t._state ? e.resolve : e.reject)(t._value);
        ++e.psd.ref, ++Ot, wt(Mt, [r, t, e]);
      } else t._listeners.push(e);
    }

    function Mt(t, e, r) {
      try {
        var n,
          i = (kt = e)._value;
        e._state
          ? (n = t(i))
          : (xt.length && (xt = []),
            (n = t(i)),
            -1 === xt.indexOf(i) &&
              (function (t) {
                for (var e = Et.length; e; )
                  if (Et[--e]._value === t._value) return Et.splice(e, 1);
              })(e)),
          r.resolve(n);
      } catch (t) {
        r.reject(t);
      } finally {
        (kt = null), 0 == --Ot && zt(), --r.psd.ref || r.psd.finalize();
      }
    }

    function Ut(t, e) {
      var r = e ? e._numPrev + 1 : 0;
      r < 100 && ((t._prev = e), (t._numPrev = r));
    }

    function Kt() {
      Nt() && Lt();
    }

    function Nt() {
      var t = bt;
      return (_t = bt = !1), t;
    }

    function Lt() {
      var t, e, r;
      do {
        for (; 0 < It.length; )
          for (t = It, It = [], r = t.length, e = 0; e < r; ++e) {
            var n = t[e];
            n[0].apply(null, n[1]);
          }
      } while (0 < It.length);
      _t = bt = !0;
    }

    function zt() {
      var t = Et;
      (Et = []),
        t.forEach(function (t) {
          t._PSD.onunhandled.call(null, t._value, t);
        });
      for (var e = Ct.slice(0), r = e.length; r; ) e[--r]();
    }

    function qt(t) {
      return new Pt(ct, !1, t);
    }

    function Vt(t, e) {
      var r = Bt;
      return function () {
        var n = Nt(),
          i = Bt;
        try {
          return re(r, !0), t.apply(this, arguments);
        } catch (n) {
          e && e(n);
        } finally {
          re(i, !1), n && Lt();
        }
      };
    }
    u(Pt.prototype, {
      then: Dt,
      _then: function (t, e) {
        jt(this, new Tt(null, null, t, e, Bt));
      },
      catch: function (t) {
        if (1 === arguments.length) return this.then(null, t);
        var e = t,
          r = arguments[1];
        return 'function' == typeof e
          ? this.then(null, function (t) {
              return t instanceof e ? r(t) : qt(t);
            })
          : this.then(null, function (t) {
              return t && t.name === e ? r(t) : qt(t);
            });
      },
      finally: function (t) {
        return this.then(
          function (e) {
            return t(), e;
          },
          function (e) {
            return t(), qt(e);
          }
        );
      },
      stack: {
        get: function () {
          if (this._stack) return this._stack;
          try {
            vt = !0;
            var t = (function t(e, r, n) {
              if (r.length === n) return r;
              var i = '';
              if (!1 === e._state) {
                var o,
                  s,
                  a = e._value;
                null != a
                  ? ((o = a.name || 'Error'),
                    (s = a.message || a),
                    (i = L(a, 0)))
                  : ((o = a), (s = '')),
                  r.push(o + (s ? ': ' + s : '') + i);
              }
              return (
                j &&
                  ((i = L(e._stackHolder, 2)) &&
                    -1 === r.indexOf(i) &&
                    r.push(i),
                  e._prev && t(e._prev, r, n)),
                r
              );
            })(this, [], 20).join('\nFrom previous: ');
            return null !== this._state && (this._stack = t), t;
          } finally {
            vt = !1;
          }
        },
      },
      timeout: function (t, e) {
        var r = this;
        return t < 1 / 0
          ? new Pt(function (n, i) {
              var o = setTimeout(function () {
                return i(new J.Timeout(e));
              }, t);
              r.then(n, i).finally(clearTimeout.bind(null, o));
            })
          : this;
      },
    }),
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        f(Pt.prototype, Symbol.toStringTag, 'Dexie.Promise'),
      (At.env = ne()),
      u(Pt, {
        all: function () {
          var t = R.apply(null, arguments).map(te);
          return new Pt(function (e, r) {
            0 === t.length && e([]);
            var n = t.length;
            t.forEach(function (i, o) {
              return Pt.resolve(i).then(function (r) {
                (t[o] = r), --n || e(t);
              }, r);
            });
          });
        },
        resolve: function (t) {
          if (t instanceof Pt) return t;
          if (t && 'function' == typeof t.then)
            return new Pt(function (e, r) {
              t.then(e, r);
            });
          var e = new Pt(ct, !0, t);
          return Ut(e, kt), e;
        },
        reject: qt,
        race: function () {
          var t = R.apply(null, arguments).map(te);
          return new Pt(function (e, r) {
            t.map(function (t) {
              return Pt.resolve(t).then(e, r);
            });
          });
        },
        PSD: {
          get: function () {
            return Bt;
          },
          set: function (t) {
            return (Bt = t);
          },
        },
        newPSD: Jt,
        usePSD: ie,
        scheduler: {
          get: function () {
            return wt;
          },
          set: function (t) {
            wt = t;
          },
        },
        rejectionMapper: {
          get: function () {
            return St;
          },
          set: function (t) {
            St = t;
          },
        },
        follow: function (t, e) {
          return new Pt(function (r, n) {
            return Jt(
              function (e, r) {
                var n = Bt;
                (n.unhandleds = []),
                  (n.onunhandled = r),
                  (n.finalize = nt(function () {
                    var t = this;
                    !(function (t) {
                      Ct.push(function e() {
                        t(), Ct.splice(Ct.indexOf(e), 1);
                      }),
                        ++Ot,
                        wt(function () {
                          0 == --Ot && zt();
                        }, []);
                    })(function () {
                      0 === t.unhandleds.length ? e() : r(t.unhandleds[0]);
                    });
                  }, n.finalize)),
                  t();
              },
              e,
              r,
              n
            );
          });
        },
      });
    var Wt = {
        awaits: 0,
        echoes: 0,
        id: 0,
      },
      Gt = 0,
      $t = [],
      Yt = 0,
      Ht = 0,
      Xt = 0;

    function Jt(t, e, r, n) {
      var o = Bt,
        s = Object.create(o);
      (s.parent = o), (s.ref = 0), (s.global = !1), (s.id = ++Xt);
      var a = At.env;
      (s.env = mt
        ? {
            Promise: Pt,
            PromiseProp: {
              value: Pt,
              configurable: !0,
              writable: !0,
            },
            all: Pt.all,
            race: Pt.race,
            resolve: Pt.resolve,
            reject: Pt.reject,
            nthen: se(a.nthen, s),
            gthen: se(a.gthen, s),
          }
        : {}),
        e && i(s, e),
        ++o.ref,
        (s.finalize = function () {
          --this.parent.ref || this.parent.finalize();
        });
      var u = ie(s, t, r, n);
      return 0 === s.ref && s.finalize(), u;
    }

    function Qt() {
      return Wt.id || (Wt.id = ++Gt), ++Wt.awaits, (Wt.echoes += 100), Wt.id;
    }

    function Zt(t) {
      !Wt.awaits ||
        (t && t !== Wt.id) ||
        (0 == --Wt.awaits && (Wt.id = 0), (Wt.echoes = 100 * Wt.awaits));
    }

    function te(t) {
      return Wt.echoes && t && t.constructor === yt
        ? (Qt(),
          t.then(
            function (t) {
              return Zt(), t;
            },
            function (t) {
              return Zt(), ce(t);
            }
          ))
        : t;
    }

    function ee() {
      var t = $t[$t.length - 1];
      $t.pop(), re(t, !1);
    }

    function re(t, e) {
      var r = Bt;
      if (
        ((e ? !Wt.echoes || (Yt++ && t === Bt) : !Yt || (--Yt && t === Bt)) ||
          (function (t) {
            dt.call(lt, t);
          })(
            e
              ? function (t) {
                  ++Ht,
                    (Wt.echoes && 0 != --Wt.echoes) || (Wt.echoes = Wt.id = 0),
                    $t.push(Bt),
                    re(t, !0);
                }.bind(null, t)
              : ee
          ),
        t !== Bt && ((Bt = t), r === At && (At.env = ne()), mt))
      ) {
        var i = At.env.Promise,
          o = t.env;
        (ht.then = o.nthen),
          (i.prototype.then = o.gthen),
          (r.global || t.global) &&
            (Object.defineProperty(n, 'Promise', o.PromiseProp),
            (i.all = o.all),
            (i.race = o.race),
            (i.resolve = o.resolve),
            (i.reject = o.reject));
      }
    }

    function ne() {
      var t = n.Promise;
      return mt
        ? {
            Promise: t,
            PromiseProp: Object.getOwnPropertyDescriptor(n, 'Promise'),
            all: t.all,
            race: t.race,
            resolve: t.resolve,
            reject: t.reject,
            nthen: ht.then,
            gthen: t.prototype.then,
          }
        : {};
    }

    function ie(t, e, r, n, i) {
      var o = Bt;
      try {
        return re(t, !0), e(r, n, i);
      } finally {
        re(o, !1);
      }
    }

    function oe(t, e, r) {
      return 'function' != typeof t
        ? t
        : function () {
            var n = Bt;
            r && Qt(), re(e, !0);
            try {
              return t.apply(this, arguments);
            } finally {
              re(n, !1);
            }
          };
    }

    function se(t, e) {
      return function (r, n) {
        return t.call(this, oe(r, e, !1), oe(n, e, !1));
      };
    }
    -1 === ('' + dt).indexOf('[native code]') && (Qt = Zt = tt);
    var ae = 'unhandledrejection';

    function ue(t, e) {
      var r;
      try {
        r = e.onuncatched(t);
      } catch (t) {}
      if (!1 !== r)
        try {
          var o,
            s = {
              promise: e,
              reason: t,
            };
          if (
            (n.document && document.createEvent
              ? ((o = document.createEvent('Event')).initEvent(ae, !0, !0),
                i(o, s))
              : n.CustomEvent &&
                i(
                  (o = new CustomEvent(ae, {
                    detail: s,
                  })),
                  s
                ),
            o &&
              n.dispatchEvent &&
              (dispatchEvent(o),
              !n.PromiseRejectionEvent && n.onunhandledrejection))
          )
            try {
              n.onunhandledrejection(o);
            } catch (t) {}
          j &&
            o &&
            !o.defaultPrevented &&
            console.warn('Unhandled rejection: ' + (t.stack || t));
        } catch (t) {}
    }
    var ce = Pt.reject;

    function fe(t) {
      return !/(dexie\.js|dexie\.min\.js)/.test(t);
    }
    var le = '3.0.0-beta.1',
      he = String.fromCharCode(65535),
      pe =
        'Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.',
      de = 'String expected.',
      ye = [],
      me =
        'undefined' != typeof navigator &&
        /(MSIE|Trident|Edge)/.test(navigator.userAgent),
      ve = me,
      ge = me,
      we = '__dbnames',
      be = 'readonly',
      _e = 'readwrite';

    function Ee(t, e) {
      return t
        ? e
          ? function () {
              return t.apply(this, arguments) && e.apply(this, arguments);
            }
          : t
        : e;
    }
    var xe = {
        type: 3,
        lower: -1 / 0,
        lowerOpen: !1,
        upper: [[]],
        upperOpen: !1,
      },
      ke = (function () {
        function t() {}
        return (
          (t.prototype._trans = function (t, e, r) {
            var n = this._tx || Bt.trans,
              i = this.name;

            function o(t, r, n) {
              if (!n.schema[i])
                throw new J.NotFound('Table ' + i + ' not part of transaction');
              return e(n.idbtrans, n);
            }
            var s = Nt();
            try {
              return n && n.db === this.db
                ? n === Bt.trans
                  ? n._promise(t, o, r)
                  : Jt(
                      function () {
                        return n._promise(t, o, r);
                      },
                      {
                        trans: n,
                        transless: Bt.transless || Bt,
                      }
                    )
                : (function t(e, r, n, i) {
                    if (e._state.openComplete || Bt.letThrough) {
                      var o = e._createTransaction(r, n, e._dbSchema);
                      try {
                        o.create();
                      } catch (t) {
                        return ce(t);
                      }
                      return o
                        ._promise(r, function (t, e) {
                          return Jt(function () {
                            return (Bt.trans = o), i(t, e, o);
                          });
                        })
                        .then(function (t) {
                          return o._completion.then(function () {
                            return t;
                          });
                        });
                    }
                    if (!e._state.isBeingOpened) {
                      if (!e._options.autoOpen)
                        return ce(new J.DatabaseClosed());
                      e.open().catch(tt);
                    }
                    return e._state.dbReadyPromise.then(function () {
                      return t(e, r, n, i);
                    });
                  })(this.db, t, [this.name], o);
            } finally {
              s && Lt();
            }
          }),
          (t.prototype.get = function (t, e) {
            var r = this;
            return t && t.constructor === Object
              ? this.where(t).first(e)
              : this._trans('readonly', function (e) {
                  return r.core
                    .get({
                      trans: e,
                      key: t,
                    })
                    .then(function (t) {
                      return r.hook.reading.fire(t);
                    });
                }).then(e);
          }),
          (t.prototype.where = function (t) {
            if ('string' == typeof t) return new this.db.WhereClause(this, t);
            if (r(t))
              return new this.db.WhereClause(this, '[' + t.join('+') + ']');
            var n = e(t);
            if (1 === n.length) return this.where(n[0]).equals(t[n[0]]);
            var i = this.schema.indexes
              .concat(this.schema.primKey)
              .filter(function (t) {
                return (
                  t.compound &&
                  n.every(function (e) {
                    return 0 <= t.keyPath.indexOf(e);
                  }) &&
                  t.keyPath.every(function (t) {
                    return 0 <= n.indexOf(t);
                  })
                );
              })[0];
            if (i && this.db._maxKey !== he)
              return this.where(i.name).equals(
                i.keyPath.map(function (e) {
                  return t[e];
                })
              );
            !i &&
              j &&
              console.warn(
                'The query ' +
                  JSON.stringify(t) +
                  ' on ' +
                  this.name +
                  ' would benefit of a compound index [' +
                  n.join('+') +
                  ']'
              );
            var o = this.schema.idxByName,
              s = this.db._deps.indexedDB;

            function a(t, e) {
              try {
                return 0 === s.cmp(t, e);
              } catch (t) {
                return !1;
              }
            }
            var u = n.reduce(
                function (e, n) {
                  var i = e[0],
                    s = e[1],
                    u = o[n],
                    c = t[n];
                  return [
                    i || u,
                    i || !u
                      ? Ee(
                          s,
                          u && u.multi
                            ? function (t) {
                                var e = w(t, n);
                                return (
                                  r(e) &&
                                  e.some(function (t) {
                                    return a(c, t);
                                  })
                                );
                              }
                            : function (t) {
                                return a(c, w(t, n));
                              }
                        )
                      : s,
                  ];
                },
                [null, null]
              ),
              c = u[0],
              f = u[1];
            return c
              ? this.where(c.name).equals(t[c.keyPath]).filter(f)
              : i
              ? this.filter(f)
              : this.where(n).equals('');
          }),
          (t.prototype.filter = function (t) {
            return this.toCollection().and(t);
          }),
          (t.prototype.count = function (t) {
            return this.toCollection().count(t);
          }),
          (t.prototype.offset = function (t) {
            return this.toCollection().offset(t);
          }),
          (t.prototype.limit = function (t) {
            return this.toCollection().limit(t);
          }),
          (t.prototype.each = function (t) {
            return this.toCollection().each(t);
          }),
          (t.prototype.toArray = function (t) {
            return this.toCollection().toArray(t);
          }),
          (t.prototype.toCollection = function () {
            return new this.db.Collection(new this.db.WhereClause(this));
          }),
          (t.prototype.orderBy = function (t) {
            return new this.db.Collection(
              new this.db.WhereClause(this, r(t) ? '[' + t.join('+') + ']' : t)
            );
          }),
          (t.prototype.reverse = function () {
            return this.toCollection().reverse();
          }),
          (t.prototype.mapToClass = function (t) {
            function e(e) {
              if (!e) return e;
              var r = Object.create(t.prototype);
              for (var n in e)
                if (a(e, n))
                  try {
                    r[n] = e[n];
                  } catch (e) {}
              return r;
            }
            return (
              (this.schema.mappedClass = t),
              this.schema.readHook &&
                this.hook.reading.unsubscribe(this.schema.readHook),
              (this.schema.readHook = e),
              this.hook('reading', e),
              t
            );
          }),
          (t.prototype.defineClass = function () {
            return this.mapToClass(function (t) {
              i(this, t);
            });
          }),
          (t.prototype.add = function (t, e) {
            var r = this;
            return this._trans('readwrite', function (n) {
              return r.core.mutate({
                trans: n,
                type: 'add',
                keys: null != e ? [e] : null,
                values: [t],
              });
            })
              .then(function (t) {
                return t.numFailures ? Pt.reject(t.failures[0]) : t.lastResult;
              })
              .then(function (e) {
                if (!r.core.schema.primaryKey.outbound)
                  try {
                    b(t, r.core.schema.primaryKey.keyPath, e);
                  } catch (e) {}
                return e;
              });
          }),
          (t.prototype.update = function (t, n) {
            if ('object' != typeof n || r(n))
              throw new J.InvalidArgument('Modifications must be an object.');
            if ('object' != typeof t || r(t))
              return this.where(':id').equals(t).modify(n);
            e(n).forEach(function (e) {
              b(t, e, n[e]);
            });
            var i = w(t, this.schema.primKey.keyPath);
            return void 0 === i
              ? ce(
                  new J.InvalidArgument(
                    'Given object does not contain its primary key'
                  )
                )
              : this.where(':id').equals(i).modify(n);
          }),
          (t.prototype.put = function (t, e) {
            var r = this;
            return this._trans('readwrite', function (n) {
              return r.core.mutate({
                trans: n,
                type: 'put',
                values: [t],
                keys: null != e ? [e] : null,
              });
            })
              .then(function (t) {
                return t.numFailures ? Pt.reject(t.failures[0]) : t.lastResult;
              })
              .then(function (e) {
                if (!r.core.schema.primaryKey.outbound)
                  try {
                    b(t, r.core.schema.primaryKey.keyPath, e);
                  } catch (e) {}
                return e;
              });
          }),
          (t.prototype.delete = function (t) {
            var e = this;
            return this._trans('readwrite', function (r) {
              return e.core.mutate({
                trans: r,
                type: 'delete',
                keys: [t],
              });
            }).then(function (t) {
              return t.numFailures ? Pt.reject(t.failures[0]) : void 0;
            });
          }),
          (t.prototype.clear = function () {
            var t = this;
            return this._trans('readwrite', function (e) {
              return t.core.mutate({
                trans: e,
                type: 'deleteRange',
                range: xe,
              });
            }).then(function (t) {
              return t.numFailures ? Pt.reject(t.failures[0]) : void 0;
            });
          }),
          (t.prototype.bulkGet = function (t) {
            var e = this;
            return this._trans('readonly', function (r) {
              return e.core.getMany({
                keys: t,
                trans: r,
              });
            });
          }),
          (t.prototype.bulkAdd = function (t, e) {
            var r = this;
            return this._trans('readwrite', function (n) {
              if (!r.core.schema.primaryKey.outbound && e)
                throw new J.InvalidArgument(
                  'bulkAdd(): keys argument invalid on tables with inbound keys'
                );
              if (e && e.length !== t.length)
                throw new J.InvalidArgument(
                  'Arguments objects and keys must have the same length'
                );
              var i = t.length;
              return r.core
                .mutate({
                  trans: n,
                  type: 'add',
                  keys: e,
                  values: t,
                })
                .then(function (t) {
                  var e = t.numFailures,
                    n = t.lastResult,
                    o = t.failures;
                  if (0 === e) return n;
                  throw new Y(
                    r.name +
                      '.bulkAdd(): ' +
                      e +
                      ' of ' +
                      i +
                      ' operations failed',
                    Object.keys(o).map(function (t) {
                      return o[t];
                    })
                  );
                });
            });
          }),
          (t.prototype.bulkPut = function (t, e) {
            var r = this;
            return this._trans('readwrite', function (n) {
              if (!r.core.schema.primaryKey.outbound && e)
                throw new J.InvalidArgument(
                  'bulkPut(): keys argument invalid on tables with inbound keys'
                );
              if (e && e.length !== t.length)
                throw new J.InvalidArgument(
                  'Arguments objects and keys must have the same length'
                );
              var i = t.length;
              return r.core
                .mutate({
                  trans: n,
                  type: 'put',
                  keys: e,
                  values: t,
                })
                .then(function (t) {
                  var e = t.numFailures,
                    n = t.lastResult,
                    o = t.failures;
                  if (0 === e) return n;
                  throw new Y(
                    r.name +
                      '.bulkPut(): ' +
                      e +
                      ' of ' +
                      i +
                      ' operations failed',
                    Object.keys(o).map(function (t) {
                      return o[t];
                    })
                  );
                });
            });
          }),
          (t.prototype.bulkDelete = function (t) {
            var e = this,
              r = t.length;
            return this._trans('readwrite', function (r) {
              return e.core.mutate({
                trans: r,
                type: 'delete',
                keys: t,
              });
            }).then(function (t) {
              var n = t.numFailures,
                i = t.lastResult,
                o = t.failures;
              if (0 === n) return i;
              throw new Y(
                e.name +
                  '.bulkDelete(): ' +
                  n +
                  ' of ' +
                  r +
                  ' operations failed',
                o
              );
            });
          }),
          t
        );
      })();

    function Se(t) {
      var n = {},
        i = function (e, r) {
          if (r) {
            for (var i = arguments.length, o = new Array(i - 1); --i; )
              o[i - 1] = arguments[i];
            return n[e].subscribe.apply(null, o), t;
          }
          if ('string' == typeof e) return n[e];
        };
      i.addEventType = a;
      for (var o = 1, s = arguments.length; o < s; ++o) a(arguments[o]);
      return i;

      function a(t, o, s) {
        if ('object' == typeof t)
          return (function (t) {
            e(t).forEach(function (e) {
              var n = t[e];
              if (r(n)) a(e, t[e][0], t[e][1]);
              else {
                if ('asap' !== n)
                  throw new J.InvalidArgument('Invalid event config');
                var i = a(e, et, function () {
                  for (var t = arguments.length, e = new Array(t); t--; )
                    e[t] = arguments[t];
                  i.subscribers.forEach(function (t) {
                    v(function () {
                      t.apply(null, e);
                    });
                  });
                });
              }
            });
          })(t);
        o || (o = at), s || (s = tt);
        var u = {
          subscribers: [],
          fire: s,
          subscribe: function (t) {
            -1 === u.subscribers.indexOf(t) &&
              (u.subscribers.push(t), (u.fire = o(u.fire, t)));
          },
          unsubscribe: function (t) {
            (u.subscribers = u.subscribers.filter(function (e) {
              return e !== t;
            })),
              (u.fire = u.subscribers.reduce(o, s));
          },
        };
        return (n[t] = i[t] = u), u;
      }
    }

    function Ae(t, e) {
      return (
        l(e).from({
          prototype: t,
        }),
        e
      );
    }

    function Be(t, e) {
      return (
        !(t.filter || t.algorithm || t.or) &&
        (e ? t.justLimit : !t.replayFilter)
      );
    }

    function Ie(t, e) {
      t.filter = Ee(t.filter, e);
    }

    function Oe(t, e, r) {
      var n = t.replayFilter;
      (t.replayFilter = n
        ? function () {
            return Ee(n(), e());
          }
        : e),
        (t.justLimit = r && !n);
    }

    function Ce(t, e) {
      if (t.isPrimKey) return e.primaryKey;
      var r = e.getIndexByKeyPath(t.index);
      if (!r)
        throw new J.Schema(
          'KeyPath ' +
            t.index +
            ' on object store ' +
            e.name +
            ' is not indexed'
        );
      return r;
    }

    function Pe(t, e, r) {
      var n = Ce(t, e.schema);
      return e.openCursor({
        trans: r,
        values: !t.keysOnly,
        reverse: 'prev' === t.dir,
        unique: !!t.unique,
        query: {
          index: n,
          range: t.range,
        },
      });
    }

    function De(t, e, r, n) {
      var i = t.replayFilter ? Ee(t.filter, t.replayFilter()) : t.filter;
      if (t.or) {
        var o = {},
          s = function (t, r, n) {
            if (
              !i ||
              i(
                r,
                n,
                function (t) {
                  return r.stop(t);
                },
                function (t) {
                  return r.fail(t);
                }
              )
            ) {
              var s = r.primaryKey,
                u = '' + s;
              '[object ArrayBuffer]' === u && (u = '' + new Uint8Array(s)),
                a(o, u) || ((o[u] = !0), e(t, r, n));
            }
          };
        return Promise.all([
          t.or._iterate(s, r),
          Te(Pe(t, n, r), t.algorithm, s, !t.keysOnly && t.valueMapper),
        ]);
      }
      return Te(
        Pe(t, n, r),
        Ee(t.algorithm, i),
        e,
        !t.keysOnly && t.valueMapper
      );
    }

    function Te(t, e, r, n) {
      var i = Vt(
        n
          ? function (t, e, i) {
              return r(n(t), e, i);
            }
          : r
      );
      return t.then(function (t) {
        if (t)
          return t.start(function () {
            var r = function () {
              return t.continue();
            };
            (e &&
              !e(
                t,
                function (t) {
                  return (r = t);
                },
                function (e) {
                  t.stop(e), (r = tt);
                },
                function (e) {
                  t.fail(e), (r = tt);
                }
              )) ||
              i(t.value, t, function (t) {
                return (r = t);
              }),
              r();
          });
      });
    }
    var Fe = (function () {
      function t() {}
      return (
        (t.prototype._read = function (t, e) {
          var r = this._ctx;
          return r.error
            ? r.table._trans(null, ce.bind(null, r.error))
            : r.table._trans('readonly', t).then(e);
        }),
        (t.prototype._write = function (t) {
          var e = this._ctx;
          return e.error
            ? e.table._trans(null, ce.bind(null, e.error))
            : e.table._trans('readwrite', t, 'locked');
        }),
        (t.prototype._addAlgorithm = function (t) {
          var e = this._ctx;
          e.algorithm = Ee(e.algorithm, t);
        }),
        (t.prototype._iterate = function (t, e) {
          return De(this._ctx, t, e, this._ctx.table.core);
        }),
        (t.prototype.clone = function (t) {
          var e = Object.create(this.constructor.prototype),
            r = Object.create(this._ctx);
          return t && i(r, t), (e._ctx = r), e;
        }),
        (t.prototype.raw = function () {
          return (this._ctx.valueMapper = null), this;
        }),
        (t.prototype.each = function (t) {
          var e = this._ctx;
          return this._read(function (r) {
            return De(e, t, r, e.table.core);
          });
        }),
        (t.prototype.count = function (t) {
          var e = this;
          return this._read(function (t) {
            var r = e._ctx,
              n = r.table.core;
            if (Be(r, !0))
              return n
                .count({
                  trans: t,
                  query: {
                    index: Ce(r, n.schema),
                    range: r.range,
                  },
                })
                .then(function (t) {
                  return Math.min(t, r.limit);
                });
            var i = 0;
            return De(
              r,
              function () {
                return ++i, !1;
              },
              t,
              n
            ).then(function () {
              return i;
            });
          }).then(t);
        }),
        (t.prototype.sortBy = function (t, e) {
          var r = t.split('.').reverse(),
            n = r[0],
            i = r.length - 1;

          function o(t, e) {
            return e ? o(t[r[e]], e - 1) : t[n];
          }
          var s = 'next' === this._ctx.dir ? 1 : -1;

          function a(t, e) {
            var r = o(t, i),
              n = o(e, i);
            return r < n ? -s : n < r ? s : 0;
          }
          return this.toArray(function (t) {
            return t.sort(a);
          }).then(e);
        }),
        (t.prototype.toArray = function (t) {
          var e = this;
          return this._read(function (t) {
            var r = e._ctx;
            if ('next' === r.dir && Be(r, !0) && 0 < r.limit) {
              var n = r.valueMapper,
                i = Ce(r, r.table.core.schema);
              return r.table.core
                .query({
                  trans: t,
                  limit: r.limit,
                  values: !0,
                  query: {
                    index: i,
                    range: r.range,
                  },
                })
                .then(function (t) {
                  var e = t.result;
                  return n ? e.map(n) : e;
                });
            }
            var o = [];
            return De(
              r,
              function (t) {
                return o.push(t);
              },
              t,
              r.table.core
            ).then(function () {
              return o;
            });
          }, t);
        }),
        (t.prototype.offset = function (t) {
          var e = this._ctx;
          return (
            t <= 0 ||
              ((e.offset += t),
              Be(e)
                ? Oe(e, function () {
                    var e = t;
                    return function (t, r) {
                      return (
                        0 === e ||
                        (1 === e
                          ? --e
                          : r(function () {
                              t.advance(e), (e = 0);
                            }),
                        !1)
                      );
                    };
                  })
                : Oe(e, function () {
                    var e = t;
                    return function () {
                      return --e < 0;
                    };
                  })),
            this
          );
        }),
        (t.prototype.limit = function (t) {
          return (
            (this._ctx.limit = Math.min(this._ctx.limit, t)),
            Oe(
              this._ctx,
              function () {
                var e = t;
                return function (t, r, n) {
                  return --e <= 0 && r(n), 0 <= e;
                };
              },
              !0
            ),
            this
          );
        }),
        (t.prototype.until = function (t, e) {
          return (
            Ie(this._ctx, function (r, n, i) {
              return !t(r.value) || (n(i), e);
            }),
            this
          );
        }),
        (t.prototype.first = function (t) {
          return this.limit(1)
            .toArray(function (t) {
              return t[0];
            })
            .then(t);
        }),
        (t.prototype.last = function (t) {
          return this.reverse().first(t);
        }),
        (t.prototype.filter = function (t) {
          return (
            Ie(this._ctx, function (e) {
              return t(e.value);
            }),
            (function (t, e) {
              t.isMatch = Ee(t.isMatch, e);
            })(this._ctx, t),
            this
          );
        }),
        (t.prototype.and = function (t) {
          return this.filter(t);
        }),
        (t.prototype.or = function (t) {
          return new this.db.WhereClause(this._ctx.table, t, this);
        }),
        (t.prototype.reverse = function () {
          return (
            (this._ctx.dir = 'prev' === this._ctx.dir ? 'next' : 'prev'),
            this._ondirectionchange && this._ondirectionchange(this._ctx.dir),
            this
          );
        }),
        (t.prototype.desc = function () {
          return this.reverse();
        }),
        (t.prototype.eachKey = function (t) {
          var e = this._ctx;
          return (
            (e.keysOnly = !e.isMatch),
            this.each(function (e, r) {
              t(r.key, r);
            })
          );
        }),
        (t.prototype.eachUniqueKey = function (t) {
          return (this._ctx.unique = 'unique'), this.eachKey(t);
        }),
        (t.prototype.eachPrimaryKey = function (t) {
          var e = this._ctx;
          return (
            (e.keysOnly = !e.isMatch),
            this.each(function (e, r) {
              t(r.primaryKey, r);
            })
          );
        }),
        (t.prototype.keys = function (t) {
          var e = this._ctx;
          e.keysOnly = !e.isMatch;
          var r = [];
          return this.each(function (t, e) {
            r.push(e.key);
          })
            .then(function () {
              return r;
            })
            .then(t);
        }),
        (t.prototype.primaryKeys = function (t) {
          var e = this._ctx;
          if ('next' === e.dir && Be(e, !0) && 0 < e.limit)
            return this._read(function (t) {
              var r = Ce(e, e.table.core.schema);
              return e.table.core.query({
                trans: t,
                values: !1,
                limit: e.limit,
                query: {
                  index: r,
                  range: e.range,
                },
              });
            })
              .then(function (t) {
                return t.result;
              })
              .then(t);
          e.keysOnly = !e.isMatch;
          var r = [];
          return this.each(function (t, e) {
            r.push(e.primaryKey);
          })
            .then(function () {
              return r;
            })
            .then(t);
        }),
        (t.prototype.uniqueKeys = function (t) {
          return (this._ctx.unique = 'unique'), this.keys(t);
        }),
        (t.prototype.firstKey = function (t) {
          return this.limit(1)
            .keys(function (t) {
              return t[0];
            })
            .then(t);
        }),
        (t.prototype.lastKey = function (t) {
          return this.reverse().firstKey(t);
        }),
        (t.prototype.distinct = function () {
          var t = this._ctx,
            e = t.index && t.table.schema.idxByName[t.index];
          if (!e || !e.multi) return this;
          var r = {};
          return (
            Ie(this._ctx, function (t) {
              var e = t.primaryKey.toString(),
                n = a(r, e);
              return (r[e] = !0), !n;
            }),
            this
          );
        }),
        (t.prototype.modify = function (t) {
          var r = this,
            n = this._ctx;
          return this._write(function (i) {
            var o;
            if ('function' == typeof t) o = t;
            else {
              var s = e(t),
                a = s.length;
              o = function (e) {
                for (var r = !1, n = 0; n < a; ++n) {
                  var i = s[n],
                    o = t[i];
                  w(e, i) !== o && (b(e, i, o), (r = !0));
                }
                return r;
              };
            }

            function u(t, e) {
              var r = e.failures,
                n = e.numFailures;
              for (var i in ((m += t - n), r)) y.push(r[i]);
            }
            var c = n.table.core,
              f = c.schema.primaryKey,
              l = f.outbound,
              h = f.extractKey,
              p = 'testmode' in wr ? 1 : 2e3,
              d = r.db.core.cmp,
              y = [],
              m = 0,
              v = [];
            return r
              .clone()
              .primaryKeys()
              .then(function (t) {
                var e = function (r) {
                  var n = Math.min(p, t.length - r);
                  return c
                    .getMany({
                      trans: i,
                      keys: t.slice(r, r + n),
                    })
                    .then(function (s) {
                      for (
                        var a = [], f = [], y = l ? [] : null, m = [], v = 0;
                        v < n;
                        ++v
                      ) {
                        var g = s[v],
                          w = {
                            value: B(g),
                            primKey: t[r + v],
                          };
                        !1 !== o.call(w, w.value, w) &&
                          (null == w.value
                            ? m.push(t[r + v])
                            : l || 0 === d(h(g), h(w.value))
                            ? (f.push(w.value), l && y.push(t[r + v]))
                            : (m.push(t[r + v]), a.push(w.value)));
                      }
                      return Promise.resolve(
                        0 < a.length &&
                          c
                            .mutate({
                              trans: i,
                              type: 'add',
                              values: a,
                            })
                            .then(function (t) {
                              for (var e in t.failures)
                                m.splice(parseInt(e), 1);
                              u(a.length, t);
                            })
                      )
                        .then(function (t) {
                          return (
                            0 < f.length &&
                            c
                              .mutate({
                                trans: i,
                                type: 'put',
                                keys: y,
                                values: f,
                              })
                              .then(function (t) {
                                return u(f.length, t);
                              })
                          );
                        })
                        .then(function () {
                          return (
                            0 < m.length &&
                            c
                              .mutate({
                                trans: i,
                                type: 'delete',
                                keys: m,
                              })
                              .then(function (t) {
                                return u(m.length, t);
                              })
                          );
                        })
                        .then(function () {
                          return t.length > r + n && e(r + p);
                        });
                    });
                };
                return e(0).then(function () {
                  if (0 < y.length)
                    throw new $('Error modifying one or more objects', y, m, v);
                  return t.length;
                });
              });
          });
        }),
        (t.prototype.delete = function () {
          var t = this._ctx,
            e = t.range;
          return Be(t) && ((t.isPrimKey && !ge) || 3 === e.type)
            ? this._write(function (r) {
                var n = t.table.core.schema.primaryKey,
                  i = e;
                return t.table.core
                  .count({
                    trans: r,
                    query: {
                      index: n,
                      range: i,
                    },
                  })
                  .then(function (e) {
                    return t.table.core
                      .mutate({
                        trans: r,
                        type: 'deleteRange',
                        range: i,
                      })
                      .then(function (t) {
                        var r = t.failures,
                          n = (t.lastResult, t.results, t.numFailures);
                        if (n)
                          throw new $(
                            'Could not delete some values',
                            Object.keys(r).map(function (t) {
                              return r[t];
                            }),
                            e - n
                          );
                        return e - n;
                      });
                  });
              })
            : this.modify(function (t, e) {
                return (e.value = null);
              });
        }),
        t
      );
    })();

    function Re(t, e) {
      return t < e ? -1 : t === e ? 0 : 1;
    }

    function je(t, e) {
      return e < t ? -1 : t === e ? 0 : 1;
    }

    function Me(t, e, r) {
      var n = t instanceof qe ? new t.Collection(t) : t;
      return (n._ctx.error = r ? new r(e) : new TypeError(e)), n;
    }

    function Ue(t) {
      return new t.Collection(t, function () {
        return ze('');
      }).limit(0);
    }

    function Ke(t, e, r, n, i, o) {
      for (var s = Math.min(t.length, n.length), a = -1, u = 0; u < s; ++u) {
        var c = e[u];
        if (c !== n[u])
          return i(t[u], r[u]) < 0
            ? t.substr(0, u) + r[u] + r.substr(u + 1)
            : i(t[u], n[u]) < 0
            ? t.substr(0, u) + n[u] + r.substr(u + 1)
            : 0 <= a
            ? t.substr(0, a) + e[a] + r.substr(a + 1)
            : null;
        i(t[u], c) < 0 && (a = u);
      }
      return s < n.length && 'next' === o
        ? t + r.substr(t.length)
        : s < t.length && 'prev' === o
        ? t.substr(0, r.length)
        : a < 0
        ? null
        : t.substr(0, a) + n[a] + r.substr(a + 1);
    }

    function Ne(t, e, r, n) {
      var i,
        o,
        s,
        a,
        u,
        c,
        f,
        l = r.length;
      if (
        !r.every(function (t) {
          return 'string' == typeof t;
        })
      )
        return Me(t, de);

      function h(t) {
        (i = (function (t) {
          return 'next' === t
            ? function (t) {
                return t.toUpperCase();
              }
            : function (t) {
                return t.toLowerCase();
              };
        })(t)),
          (o = (function (t) {
            return 'next' === t
              ? function (t) {
                  return t.toLowerCase();
                }
              : function (t) {
                  return t.toUpperCase();
                };
          })(t)),
          (s = 'next' === t ? Re : je);
        var e = r
          .map(function (t) {
            return {
              lower: o(t),
              upper: i(t),
            };
          })
          .sort(function (t, e) {
            return s(t.lower, e.lower);
          });
        (a = e.map(function (t) {
          return t.upper;
        })),
          (u = e.map(function (t) {
            return t.lower;
          })),
          (f = 'next' === (c = t) ? '' : n);
      }
      h('next');
      var p = new t.Collection(t, function () {
        return Le(a[0], u[l - 1] + n);
      });
      p._ondirectionchange = function (t) {
        h(t);
      };
      var d = 0;
      return (
        p._addAlgorithm(function (t, r, n) {
          var i = t.key;
          if ('string' != typeof i) return !1;
          var h = o(i);
          if (e(h, u, d)) return !0;
          for (var p = null, y = d; y < l; ++y) {
            var m = Ke(i, h, a[y], u[y], s, c);
            null === m && null === p
              ? (d = y + 1)
              : (null === p || 0 < s(p, m)) && (p = m);
          }
          return (
            r(
              null !== p
                ? function () {
                    t.continue(p + f);
                  }
                : n
            ),
            !1
          );
        }),
        p
      );
    }

    function Le(t, e, r, n) {
      return {
        type: 2,
        lower: t,
        upper: e,
        lowerOpen: r,
        upperOpen: n,
      };
    }

    function ze(t) {
      return {
        type: 1,
        lower: t,
        upper: t,
      };
    }
    var qe = (function () {
      function t() {}
      return (
        Object.defineProperty(t.prototype, 'Collection', {
          get: function () {
            return this._ctx.table.db.Collection;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.between = function (t, e, r, n) {
          (r = !1 !== r), (n = !0 === n);
          try {
            return 0 < this._cmp(t, e) ||
              (0 === this._cmp(t, e) && (r || n) && (!r || !n))
              ? Ue(this)
              : new this.Collection(this, function () {
                  return Le(t, e, !r, !n);
                });
          } catch (t) {
            return Me(this, pe);
          }
        }),
        (t.prototype.equals = function (t) {
          return new this.Collection(this, function () {
            return ze(t);
          });
        }),
        (t.prototype.above = function (t) {
          return null == t
            ? Me(this, pe)
            : new this.Collection(this, function () {
                return Le(t, void 0, !0);
              });
        }),
        (t.prototype.aboveOrEqual = function (t) {
          return null == t
            ? Me(this, pe)
            : new this.Collection(this, function () {
                return Le(t, void 0, !1);
              });
        }),
        (t.prototype.below = function (t) {
          return null == t
            ? Me(this, pe)
            : new this.Collection(this, function () {
                return Le(void 0, t, !1, !0);
              });
        }),
        (t.prototype.belowOrEqual = function (t) {
          return null == t
            ? Me(this, pe)
            : new this.Collection(this, function () {
                return Le(void 0, t);
              });
        }),
        (t.prototype.startsWith = function (t) {
          return 'string' != typeof t
            ? Me(this, de)
            : this.between(t, t + he, !0, !0);
        }),
        (t.prototype.startsWithIgnoreCase = function (t) {
          return '' === t
            ? this.startsWith(t)
            : Ne(
                this,
                function (t, e) {
                  return 0 === t.indexOf(e[0]);
                },
                [t],
                he
              );
        }),
        (t.prototype.equalsIgnoreCase = function (t) {
          return Ne(
            this,
            function (t, e) {
              return t === e[0];
            },
            [t],
            ''
          );
        }),
        (t.prototype.anyOfIgnoreCase = function () {
          var t = R.apply(F, arguments);
          return 0 === t.length
            ? Ue(this)
            : Ne(
                this,
                function (t, e) {
                  return -1 !== e.indexOf(t);
                },
                t,
                ''
              );
        }),
        (t.prototype.startsWithAnyOfIgnoreCase = function () {
          var t = R.apply(F, arguments);
          return 0 === t.length
            ? Ue(this)
            : Ne(
                this,
                function (t, e) {
                  return e.some(function (e) {
                    return 0 === t.indexOf(e);
                  });
                },
                t,
                he
              );
        }),
        (t.prototype.anyOf = function () {
          var t = this,
            e = R.apply(F, arguments),
            r = this._cmp;
          try {
            e.sort(r);
          } catch (n) {
            return Me(this, pe);
          }
          if (0 === e.length) return Ue(this);
          var n = new this.Collection(this, function () {
            return Le(e[0], e[e.length - 1]);
          });
          n._ondirectionchange = function (n) {
            (r = 'next' === n ? t._ascending : t._descending), e.sort(r);
          };
          var i = 0;
          return (
            n._addAlgorithm(function (t, n, o) {
              for (var s = t.key; 0 < r(s, e[i]); )
                if (++i === e.length) return n(o), !1;
              return (
                0 === r(s, e[i]) ||
                (n(function () {
                  t.continue(e[i]);
                }),
                !1)
              );
            }),
            n
          );
        }),
        (t.prototype.notEqual = function (t) {
          return this.inAnyRange(
            [
              [-1 / 0, t],
              [t, this.db._maxKey],
            ],
            {
              includeLowers: !1,
              includeUppers: !1,
            }
          );
        }),
        (t.prototype.noneOf = function () {
          var t = R.apply(F, arguments);
          if (0 === t.length) return new this.Collection(this);
          try {
            t.sort(this._ascending);
          } catch (t) {
            return Me(this, pe);
          }
          var e = t.reduce(function (t, e) {
            return t ? t.concat([[t[t.length - 1][1], e]]) : [[-1 / 0, e]];
          }, null);
          return (
            e.push([t[t.length - 1], this.db._maxKey]),
            this.inAnyRange(e, {
              includeLowers: !1,
              includeUppers: !1,
            })
          );
        }),
        (t.prototype.inAnyRange = function (t, e) {
          var r = this,
            n = this._cmp,
            i = this._ascending,
            o = this._descending,
            s = this._min,
            a = this._max;
          if (0 === t.length) return Ue(this);
          if (
            !t.every(function (t) {
              return void 0 !== t[0] && void 0 !== t[1] && i(t[0], t[1]) <= 0;
            })
          )
            return Me(
              this,
              'First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower',
              J.InvalidArgument
            );
          var u,
            c = !e || !1 !== e.includeLowers,
            f = e && !0 === e.includeUppers,
            l = i;

          function h(t, e) {
            return l(t[0], e[0]);
          }
          try {
            (u = t.reduce(function (t, e) {
              for (var r = 0, i = t.length; r < i; ++r) {
                var o = t[r];
                if (n(e[0], o[1]) < 0 && 0 < n(e[1], o[0])) {
                  (o[0] = s(o[0], e[0])), (o[1] = a(o[1], e[1]));
                  break;
                }
              }
              return r === i && t.push(e), t;
            }, [])).sort(h);
          } catch (t) {
            return Me(this, pe);
          }
          var p = 0,
            d = f
              ? function (t) {
                  return 0 < i(t, u[p][1]);
                }
              : function (t) {
                  return 0 <= i(t, u[p][1]);
                },
            y = c
              ? function (t) {
                  return 0 < o(t, u[p][0]);
                }
              : function (t) {
                  return 0 <= o(t, u[p][0]);
                },
            m = d,
            v = new this.Collection(this, function () {
              return Le(u[0][0], u[u.length - 1][1], !c, !f);
            });
          return (
            (v._ondirectionchange = function (t) {
              (l = 'next' === t ? ((m = d), i) : ((m = y), o)), u.sort(h);
            }),
            v._addAlgorithm(function (t, e, n) {
              for (var o = t.key; m(o); ) if (++p === u.length) return e(n), !1;
              return (
                !!(function (t) {
                  return !d(t) && !y(t);
                })(o) ||
                (0 === r._cmp(o, u[p][1]) ||
                  0 === r._cmp(o, u[p][0]) ||
                  e(function () {
                    l === i ? t.continue(u[p][0]) : t.continue(u[p][1]);
                  }),
                !1)
              );
            }),
            v
          );
        }),
        (t.prototype.startsWithAnyOf = function () {
          var t = R.apply(F, arguments);
          return t.every(function (t) {
            return 'string' == typeof t;
          })
            ? 0 === t.length
              ? Ue(this)
              : this.inAnyRange(
                  t.map(function (t) {
                    return [t, t + he];
                  })
                )
            : Me(this, 'startsWithAnyOf() only works with strings');
        }),
        t
      );
    })();

    function Ve(t) {
      return 1 === t.length ? t[0] : t;
    }

    function We(t) {
      try {
        return t.only([[]]), [[]];
      } catch (t) {
        return he;
      }
    }

    function Ge(t) {
      return Vt(function (e) {
        return $e(e), t(e.target.error), !1;
      });
    }

    function $e(t) {
      t.stopPropagation && t.stopPropagation(),
        t.preventDefault && t.preventDefault();
    }
    var Ye = (function () {
      function t() {}
      return (
        (t.prototype._lock = function () {
          return (
            m(!Bt.global),
            ++this._reculock,
            1 !== this._reculock || Bt.global || (Bt.lockOwnerFor = this),
            this
          );
        }),
        (t.prototype._unlock = function () {
          if ((m(!Bt.global), 0 == --this._reculock))
            for (
              Bt.global || (Bt.lockOwnerFor = null);
              0 < this._blockedFuncs.length && !this._locked();

            ) {
              var t = this._blockedFuncs.shift();
              try {
                ie(t[1], t[0]);
              } catch (t) {}
            }
          return this;
        }),
        (t.prototype._locked = function () {
          return this._reculock && Bt.lockOwnerFor !== this;
        }),
        (t.prototype.create = function (t) {
          var e = this;
          if (!this.mode) return this;
          var r = this.db.idbdb,
            n = this.db._state.dbOpenError;
          if ((m(!this.idbtrans), !t && !r))
            switch (n && n.name) {
              case 'DatabaseClosedError':
                throw new J.DatabaseClosed(n);
              case 'MissingAPIError':
                throw new J.MissingAPI(n.message, n);
              default:
                throw new J.OpenFailed(n);
            }
          if (!this.active) throw new J.TransactionInactive();
          return (
            m(null === this._completion._state),
            ((t = this.idbtrans =
              t || r.transaction(Ve(this.storeNames), this.mode)).onerror = Vt(
              function (r) {
                $e(r), e._reject(t.error);
              }
            )),
            (t.onabort = Vt(function (r) {
              $e(r),
                e.active && e._reject(new J.Abort(t.error)),
                (e.active = !1),
                e.on('abort').fire(r);
            })),
            (t.oncomplete = Vt(function () {
              (e.active = !1), e._resolve();
            })),
            this
          );
        }),
        (t.prototype._promise = function (t, e, r) {
          var n = this;
          if ('readwrite' === t && 'readwrite' !== this.mode)
            return ce(new J.ReadOnly('Transaction is readonly'));
          if (!this.active) return ce(new J.TransactionInactive());
          if (this._locked())
            return new Pt(function (i, o) {
              n._blockedFuncs.push([
                function () {
                  n._promise(t, e, r).then(i, o);
                },
                Bt,
              ]);
            });
          if (r)
            return Jt(function () {
              var t = new Pt(function (t, r) {
                n._lock();
                var i = e(t, r, n);
                i && i.then && i.then(t, r);
              });
              return (
                t.finally(function () {
                  return n._unlock();
                }),
                (t._lib = !0),
                t
              );
            });
          var i = new Pt(function (t, r) {
            var i = e(t, r, n);
            i && i.then && i.then(t, r);
          });
          return (i._lib = !0), i;
        }),
        (t.prototype._root = function () {
          return this.parent ? this.parent._root() : this;
        }),
        (t.prototype.waitFor = function (t) {
          var e = this._root(),
            r = Pt.resolve(t);
          if (e._waitingFor)
            e._waitingFor = e._waitingFor.then(function () {
              return r;
            });
          else {
            (e._waitingFor = r), (e._waitingQueue = []);
            var n = e.idbtrans.objectStore(e.storeNames[0]);
            !(function t() {
              for (++e._spinCount; e._waitingQueue.length; )
                e._waitingQueue.shift()();
              e._waitingFor && (n.get(-1 / 0).onsuccess = t);
            })();
          }
          var i = e._waitingFor;
          return new Pt(function (t, n) {
            r.then(
              function (r) {
                return e._waitingQueue.push(Vt(t.bind(null, r)));
              },
              function (t) {
                return e._waitingQueue.push(Vt(n.bind(null, t)));
              }
            ).finally(function () {
              e._waitingFor === i && (e._waitingFor = null);
            });
          });
        }),
        (t.prototype.abort = function () {
          this.active && this._reject(new J.Abort()), (this.active = !1);
        }),
        (t.prototype.table = function (t) {
          var e = this._memoizedTables || (this._memoizedTables = {});
          if (a(e, t)) return e[t];
          var r = this.schema[t];
          if (!r)
            throw new J.NotFound('Table ' + t + ' not part of transaction');
          var n = new this.db.Table(t, r, this);
          return (n.core = this.db.core.table(t)), (e[t] = n);
        }),
        t
      );
    })();

    function He(t, e, r, n, i, o) {
      return {
        name: t,
        keyPath: e,
        unique: r,
        multi: n,
        auto: i,
        compound: o,
        src: (r ? '&' : '') + (n ? '*' : '') + (i ? '++' : '') + Xe(e),
      };
    }

    function Xe(t) {
      return 'string' == typeof t
        ? t
        : t
        ? '[' + [].join.call(t, '+') + ']'
        : '';
    }

    function Je(t, e, r) {
      return {
        name: t,
        primKey: e,
        indexes: r,
        mappedClass: null,
        idxByName: g(r, function (t) {
          return [t.name, t];
        }),
      };
    }

    function Qe(t) {
      return null == t
        ? function () {}
        : 'string' == typeof t
        ? (function (t) {
            return 1 === t.split('.').length
              ? function (e) {
                  return e[t];
                }
              : function (e) {
                  return w(e, t);
                };
          })(t)
        : function (e) {
            return w(e, t);
          };
    }

    function Ze(t, e) {
      return 'delete' === e.type
        ? e.keys
        : e.keys || e.values.map(t.extractKey);
    }

    function tr(t) {
      return [].slice.call(t);
    }
    var er = 0;

    function rr(t) {
      return null == t
        ? ':id'
        : 'string' == typeof t
        ? t
        : '[' + t.join('+') + ']';
    }

    function nr(t, e, n, i) {
      var o = e.cmp.bind(e);

      function s(t) {
        if (3 === t.type) return null;
        if (4 === t.type)
          throw new Error('Cannot convert never type to IDBKeyRange');
        var e = t.lower,
          r = t.upper,
          i = t.lowerOpen,
          o = t.upperOpen;
        return void 0 === e
          ? void 0 === r
            ? null
            : n.upperBound(r, !!o)
          : void 0 === r
          ? n.lowerBound(e, !!i)
          : n.bound(e, r, !!i, !!o);
      }
      var a,
        u,
        c,
        f =
          ((u = i),
          (c = tr((a = t).objectStoreNames)),
          {
            schema: {
              name: a.name,
              tables: c
                .map(function (t) {
                  return u.objectStore(t);
                })
                .map(function (t) {
                  var e = t.keyPath,
                    n = t.autoIncrement,
                    i = r(e),
                    o = null == e,
                    s = {},
                    a = {
                      name: t.name,
                      primaryKey: {
                        name: null,
                        isPrimaryKey: !0,
                        outbound: o,
                        compound: i,
                        keyPath: e,
                        autoIncrement: n,
                        unique: !0,
                        extractKey: Qe(e),
                      },
                      indexes: tr(t.indexNames)
                        .map(function (e) {
                          return t.index(e);
                        })
                        .map(function (t) {
                          var e = t.name,
                            n = t.unique,
                            i = t.multiEntry,
                            o = t.keyPath,
                            a = {
                              name: e,
                              compound: r(o),
                              keyPath: o,
                              unique: n,
                              multiEntry: i,
                              extractKey: Qe(o),
                            };
                          return (s[rr(o)] = a);
                        }),
                      getIndexByKeyPath: function (t) {
                        return s[rr(t)];
                      },
                    };
                  return (
                    (s[':id'] = a.primaryKey),
                    null != e && (s[rr(e)] = a.primaryKey),
                    a
                  );
                }),
            },
            hasGetAll:
              0 < c.length &&
              'getAll' in u.objectStore(c[0]) &&
              !(
                'undefined' != typeof navigator &&
                /Safari/.test(navigator.userAgent) &&
                !/(Chrome\/|Edge\/)/.test(navigator.userAgent) &&
                [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604
              ),
          }),
        l = f.schema,
        h = f.hasGetAll,
        p = l.tables.map(function (t) {
          return (function (t) {
            var e,
              r = t.name;
            return {
              name: r,
              schema: t,
              mutate: function (e) {
                var n = e.trans,
                  i = e.type,
                  o = e.keys,
                  a = e.values,
                  u = e.range,
                  c = e.wantResults;
                return new Promise(function (e, f) {
                  e = Vt(e);
                  var l = n.objectStore(r),
                    h = null == l.keyPath,
                    p = 'put' === i || 'add' === i;
                  if (!p && 'delete' !== i && 'deleteRange' !== i)
                    throw new Error('Invalid operation type: ' + i);
                  var d = (
                    o ||
                    a || {
                      length: 1,
                    }
                  ).length;
                  if (o && a && o.length !== a.length)
                    throw new Error(
                      'Given keys array must have same length as given values array.'
                    );
                  if (0 === d)
                    return e({
                      numFailures: 0,
                      failures: {},
                      results: [],
                      lastResult: void 0,
                    });

                  function y(t) {
                    ++b,
                      $e(t),
                      g && (g[t.target._reqno] = void 0),
                      (w[t.target._reqno] = t.target.error);
                  }

                  function m(t) {
                    var e = t.target;
                    g[e._reqno] = e.result;
                  }
                  var v,
                    g =
                      c &&
                      (
                        o ||
                        Ze(t.primaryKey, {
                          type: i,
                          keys: o,
                          values: a,
                        })
                      ).slice(),
                    w = [],
                    b = 0;
                  if ('deleteRange' === i) {
                    if (4 === u.type)
                      return e({
                        numFailures: b,
                        failures: w,
                        results: g,
                        lastResult: void 0,
                      });
                    v = 3 === u.type ? l.clear() : l.delete(s(u));
                  } else {
                    var _ = p ? (h ? [a, o] : [a, null]) : [o, null],
                      E = _[0],
                      x = _[1];
                    if (p)
                      for (var k = 0; k < d; ++k)
                        ((v =
                          x && void 0 !== x[k]
                            ? l[i](E[k], x[k])
                            : l[i](E[k]))._reqno = k),
                          g && void 0 === g[k] && (v.onsuccess = m),
                          (v.onerror = y);
                    else
                      for (k = 0; k < d; ++k)
                        ((v = l[i](E[k]))._reqno = k), (v.onerror = y);
                  }

                  function S(t) {
                    var r = t.target.result;
                    g && (g[d - 1] = r),
                      e({
                        numFailures: b,
                        failures: w,
                        results: g,
                        lastResult: r,
                      });
                  }
                  (v.onerror = function (t) {
                    y(t), S(t);
                  }),
                    (v.onsuccess = S);
                });
              },
              getMany: function (t) {
                var e = t.trans,
                  n = t.keys;
                return new Promise(function (t, i) {
                  t = Vt(t);
                  for (
                    var o,
                      s = e.objectStore(r),
                      a = n.length,
                      u = new Array(a),
                      c = 0,
                      f = 0,
                      l = function (e) {
                        var r = e.target;
                        (u[r._pos] = r.result), ++f === c && t(u);
                      },
                      h = Ge(i),
                      p = 0;
                    p < a;
                    ++p
                  )
                    null != n[p] &&
                      (((o = s.get(n[p]))._pos = p),
                      (o.onsuccess = l),
                      (o.onerror = h),
                      ++c);
                  0 === c && t(u);
                });
              },
              get: function (t) {
                var e = t.trans,
                  n = t.key;
                return new Promise(function (t, i) {
                  t = Vt(t);
                  var o = e.objectStore(r).get(n);
                  (o.onsuccess = function (e) {
                    return t(e.target.result);
                  }),
                    (o.onerror = Ge(i));
                });
              },
              query:
                ((e = h),
                function (t) {
                  return new Promise(function (n, i) {
                    n = Vt(n);
                    var o = t.trans,
                      a = t.values,
                      u = t.limit,
                      c = t.query,
                      f = u === 1 / 0 ? void 0 : u,
                      l = c.index,
                      h = c.range,
                      p = o.objectStore(r),
                      d = l.isPrimaryKey ? p : p.index(l.name),
                      y = s(h);
                    if (0 === u)
                      return n({
                        result: [],
                      });
                    if (e) {
                      var m = a ? d.getAll(y, f) : d.getAllKeys(y, f);
                      (m.onsuccess = function (t) {
                        return n({
                          result: t.target.result,
                        });
                      }),
                        (m.onerror = Ge(i));
                    } else {
                      var v = 0,
                        g =
                          !a && 'openKeyCursor' in d
                            ? d.openKeyCursor(y)
                            : d.openCursor(y),
                        w = [];
                      (g.onsuccess = function (t) {
                        var e = g.result;
                        return e
                          ? (w.push(a ? e.value : e.primaryKey),
                            ++v === u
                              ? n({
                                  result: w,
                                })
                              : void e.continue())
                          : n({
                              result: w,
                            });
                      }),
                        (g.onerror = Ge(i));
                    }
                  });
                }),
              openCursor: function (t) {
                var e = t.trans,
                  n = t.values,
                  i = t.query,
                  o = t.reverse,
                  a = t.unique;
                return new Promise(function (t, u) {
                  t = Vt(t);
                  var c = i.index,
                    f = i.range,
                    l = e.objectStore(r),
                    h = c.isPrimaryKey ? l : l.index(c.name),
                    p = o
                      ? a
                        ? 'prevunique'
                        : 'prev'
                      : a
                      ? 'nextunique'
                      : 'next',
                    d =
                      !n && 'openKeyCursor' in h
                        ? h.openKeyCursor(s(f), p)
                        : h.openCursor(s(f), p);
                  (d.onerror = Ge(u)),
                    (d.onsuccess = Vt(function (r) {
                      var n = d.result;
                      if (n) {
                        (n.___id = ++er), (n.done = !1);
                        var i = n.continue.bind(n),
                          o = n.continuePrimaryKey;
                        o && (o = o.bind(n));
                        var s = n.advance.bind(n),
                          a = function () {
                            throw new Error('Cursor not stopped');
                          };
                        (n.trans = e),
                          (n.stop =
                            n.continue =
                            n.continuePrimaryKey =
                            n.advance =
                              function () {
                                throw new Error('Cursor not started');
                              }),
                          (n.fail = Vt(u)),
                          (n.next = function () {
                            var t = this,
                              e = 1;
                            return this.start(function () {
                              return e-- ? t.continue() : t.stop();
                            }).then(function () {
                              return t;
                            });
                          }),
                          (n.start = function (t) {
                            function e() {
                              if (d.result)
                                try {
                                  t();
                                } catch (t) {
                                  n.fail(t);
                                }
                              else
                                (n.done = !0),
                                  (n.start = function () {
                                    throw new Error('Cursor behind last entry');
                                  }),
                                  n.stop();
                            }
                            var r = new Promise(function (t, e) {
                              (t = Vt(t)),
                                (d.onerror = Ge(e)),
                                (n.fail = e),
                                (n.stop = function (e) {
                                  (n.stop =
                                    n.continue =
                                    n.continuePrimaryKey =
                                    n.advance =
                                      a),
                                    t(e);
                                });
                            });
                            return (
                              (d.onsuccess = Vt(function (t) {
                                (d.onsuccess = e)();
                              })),
                              (n.continue = i),
                              (n.continuePrimaryKey = o),
                              (n.advance = s),
                              e(),
                              r
                            );
                          }),
                          t(n);
                      } else t(null);
                    }, u));
                });
              },
              count: function (t) {
                var e = t.query,
                  n = t.trans,
                  i = e.index,
                  o = e.range;
                return new Promise(function (t, e) {
                  var a = n.objectStore(r),
                    u = i.isPrimaryKey ? a : a.index(i.name),
                    c = s(o),
                    f = c ? u.count(c) : u.count();
                  (f.onsuccess = Vt(function (e) {
                    return t(e.target.result);
                  })),
                    (f.onerror = Ge(e));
                });
              },
            };
          })(t);
        }),
        d = {};
      return (
        p.forEach(function (t) {
          return (d[t.name] = t);
        }),
        {
          stack: 'dbcore',
          transaction: t.transaction.bind(t),
          table: function (t) {
            if (!d[t]) throw new Error("Table '" + t + "' not found");
            return d[t];
          },
          cmp: o,
          MIN_KEY: -1 / 0,
          MAX_KEY: We(n),
          schema: l,
        }
      );
    }

    function ir(e, r) {
      var n = r.db,
        i = (function (e, r, n, i) {
          var o = n.IDBKeyRange;
          return {
            dbcore: (function (e, r) {
              return r.reduce(function (e, r) {
                var n = r.create;
                return t({}, e, n(e));
              }, e);
            })(nr(r, n.indexedDB, o, i), e.dbcore),
          };
        })(e._middlewares, n, e._deps, r);
      (e.core = i.dbcore),
        e.tables.forEach(function (t) {
          var r = t.name;
          e.core.schema.tables.some(function (t) {
            return t.name === r;
          }) &&
            ((t.core = e.core.table(r)),
            e[r] instanceof e.Table && (e[r].core = t.core));
        });
    }

    function or(t, e, r, n) {
      r.forEach(function (r) {
        var i = n[r];
        e.forEach(function (e) {
          r in e ||
            (e === t.Transaction.prototype || e instanceof t.Transaction
              ? f(e, r, {
                  get: function () {
                    return this.table(r);
                  },
                })
              : (e[r] = new t.Table(r, i)));
        });
      });
    }

    function sr(t, e) {
      e.forEach(function (e) {
        for (var r in e) e[r] instanceof t.Table && delete e[r];
      });
    }

    function ar(t, e) {
      return t._cfg.version - e._cfg.version;
    }

    function ur(t, e, r, n) {
      var i = t.db.createObjectStore(
        e,
        r.keyPath
          ? {
              keyPath: r.keyPath,
              autoIncrement: r.auto,
            }
          : {
              autoIncrement: r.auto,
            }
      );
      return (
        n.forEach(function (t) {
          return cr(i, t);
        }),
        i
      );
    }

    function cr(t, e) {
      t.createIndex(e.name, e.keyPath, {
        unique: e.unique,
        multiEntry: e.multi,
      });
    }

    function fr(t, e, r) {
      for (var i = r.db.objectStoreNames, o = 0; o < i.length; ++o) {
        var s = i[o],
          a = r.objectStore(s);
        t._hasGetAll = 'getAll' in a;
        for (var u = 0; u < a.indexNames.length; ++u) {
          var c = a.indexNames[u],
            f = a.index(c).keyPath,
            l = 'string' == typeof f ? f : '[' + d(f).join('+') + ']';
          if (e[s]) {
            var h = e[s].idxByName[l];
            h && (h.name = c);
          }
        }
      }
      'undefined' != typeof navigator &&
        /Safari/.test(navigator.userAgent) &&
        !/(Chrome\/|Edge\/)/.test(navigator.userAgent) &&
        n.WorkerGlobalScope &&
        n instanceof n.WorkerGlobalScope &&
        [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 &&
        (t._hasGetAll = !1);
    }
    var lr,
      hr = (function () {
        function t() {}
        return (
          (t.prototype._parseStoresSpec = function (t, n) {
            e(t).forEach(function (e) {
              if (null !== t[e]) {
                var i = (function (t) {
                    var e = [];
                    return (
                      t.split(',').forEach(function (t) {
                        var n = (t = t.trim()).replace(/([&*]|\+\+)/g, ''),
                          i = /^\[/.test(n)
                            ? n.match(/^\[(.*)\]$/)[1].split('+')
                            : n;
                        e.push(
                          He(
                            n,
                            i || null,
                            /\&/.test(t),
                            /\*/.test(t),
                            /\+\+/.test(t),
                            r(i)
                          )
                        );
                      }),
                      e
                    );
                  })(t[e]),
                  o = i.shift();
                if (o.multi)
                  throw new J.Schema('Primary key cannot be multi-valued');
                i.forEach(function (t) {
                  if (t.auto)
                    throw new J.Schema(
                      'Only primary key can be marked as autoIncrement (++)'
                    );
                  if (!t.keyPath)
                    throw new J.Schema(
                      'Index must have a name and cannot be an empty string'
                    );
                }),
                  (n[e] = Je(e, o, i));
              }
            });
          }),
          (t.prototype.stores = function (t) {
            var r = this.db;
            this._cfg.storesSource = this._cfg.storesSource
              ? i(this._cfg.storesSource, t)
              : t;
            var n = r._versions,
              o = {};
            n.forEach(function (t) {
              i(o, t._cfg.storesSource);
            });
            var s = (this._cfg.dbschema = {});
            return (
              this._parseStoresSpec(o, s),
              (r._dbSchema = s),
              sr(r, [r._allTables, r, r.Transaction.prototype]),
              or(
                r,
                [r._allTables, r, r.Transaction.prototype, this._cfg.tables],
                e(s),
                s
              ),
              (r._storeNames = e(s)),
              this
            );
          }),
          (t.prototype.upgrade = function (t) {
            return (this._cfg.contentUpgrade = t), this;
          }),
          t
        );
      })();

    function pr(t) {
      return Jt(function () {
        return (Bt.letThrough = !0), t();
      });
    }

    function dr(t) {
      var r = t._state,
        n = t._deps.indexedDB;
      if (r.isBeingOpened || t.idbdb)
        return r.dbReadyPromise.then(function () {
          return r.dbOpenError ? ce(r.dbOpenError) : t;
        });
      j && (r.openCanceller._stackHolder = N()),
        (r.isBeingOpened = !0),
        (r.dbOpenError = null),
        (r.openComplete = !1);
      var i = r.dbReadyResolve,
        o = null;
      return Pt.race([
        r.openCanceller,
        new Pt(function (i, s) {
          if (!n)
            throw new J.MissingAPI(
              'indexedDB API not found. If using IE10+, make sure to run your code on a server URL (not locally). If using old Safari versions, make sure to include indexedDB polyfill.'
            );
          var a = t.name,
            u = r.autoSchema ? n.open(a) : n.open(a, Math.round(10 * t.verno));
          if (!u) throw new J.MissingAPI('IndexedDB API not available');
          (u.onerror = Ge(s)),
            (u.onblocked = Vt(t._fireOnBlocked)),
            (u.onupgradeneeded = Vt(function (i) {
              if (
                ((o = u.transaction), r.autoSchema && !t._options.allowEmptyDB)
              ) {
                (u.onerror = $e), o.abort(), u.result.close();
                var c = n.deleteDatabase(a);
                c.onsuccess = c.onerror = Vt(function () {
                  s(new J.NoSuchDatabase('Database ' + a + ' doesnt exist'));
                });
              } else {
                o.onerror = Ge(s);
                var f = i.oldVersion > Math.pow(2, 62) ? 0 : i.oldVersion;
                !(function (t, r, n, i) {
                  var o = t._dbSchema,
                    s = t._createTransaction('readwrite', t._storeNames, o);
                  s.create(n), s._completion.catch(i);
                  var a = s._reject.bind(s),
                    u = Bt.transless || Bt;
                  Jt(function () {
                    (Bt.trans = s),
                      (Bt.transless = u),
                      0 === r
                        ? (e(o).forEach(function (t) {
                            ur(n, t, o[t].primKey, o[t].indexes);
                          }),
                          ir(t, n),
                          Pt.follow(function () {
                            return t.on.populate.fire(s);
                          }).catch(a))
                        : (function (t, r, n, i) {
                            var o = [],
                              s = t._versions,
                              a = s.filter(function (t) {
                                return t._cfg.version === r;
                              })[0];
                            if (!a)
                              throw new J.Upgrade(
                                'Dexie specification of currently installed DB version is missing'
                              );
                            var u = (t._dbSchema = a._cfg.dbschema),
                              c = !1;
                            return (
                              s
                                .filter(function (t) {
                                  return t._cfg.version > r;
                                })
                                .forEach(function (r) {
                                  o.push(function () {
                                    var o = u,
                                      s = r._cfg.dbschema;
                                    fr(t, o, i),
                                      fr(t, s, i),
                                      (u = t._dbSchema = s);
                                    var a = (function (t, e) {
                                      var r,
                                        n = {
                                          del: [],
                                          add: [],
                                          change: [],
                                        };
                                      for (r in t) e[r] || n.del.push(r);
                                      for (r in e) {
                                        var i = t[r],
                                          o = e[r];
                                        if (i) {
                                          var s = {
                                            name: r,
                                            def: o,
                                            recreate: !1,
                                            del: [],
                                            add: [],
                                            change: [],
                                          };
                                          if (i.primKey.src !== o.primKey.src)
                                            (s.recreate = !0), n.change.push(s);
                                          else {
                                            var a = i.idxByName,
                                              u = o.idxByName,
                                              c = void 0;
                                            for (c in a) u[c] || s.del.push(c);
                                            for (c in u) {
                                              var f = a[c],
                                                l = u[c];
                                              f
                                                ? f.src !== l.src &&
                                                  s.change.push(l)
                                                : s.add.push(l);
                                            }
                                            (0 < s.del.length ||
                                              0 < s.add.length ||
                                              0 < s.change.length) &&
                                              n.change.push(s);
                                          }
                                        } else n.add.push([r, o]);
                                      }
                                      return n;
                                    })(o, s);
                                    a.add.forEach(function (t) {
                                      ur(i, t[0], t[1].primKey, t[1].indexes);
                                    }),
                                      a.change.forEach(function (t) {
                                        if (t.recreate)
                                          throw new J.Upgrade(
                                            'Not yet support for changing primary key'
                                          );
                                        var e = i.objectStore(t.name);
                                        t.add.forEach(function (t) {
                                          return cr(e, t);
                                        }),
                                          t.change.forEach(function (t) {
                                            e.deleteIndex(t.name), cr(e, t);
                                          }),
                                          t.del.forEach(function (t) {
                                            return e.deleteIndex(t);
                                          });
                                      });
                                    var f = r._cfg.contentUpgrade;
                                    if (f) {
                                      ir(t, i), (c = !0);
                                      var l,
                                        h = _(s);
                                      a.del.forEach(function (t) {
                                        h[t] = o[t];
                                      }),
                                        sr(t, [t.Transaction.prototype]),
                                        or(
                                          t,
                                          [t.Transaction.prototype],
                                          e(h),
                                          h
                                        ),
                                        (n.schema = h),
                                        Qt();
                                      var p = Pt.follow(function () {
                                        if ((l = f(n)))
                                          if (l.constructor === yt) {
                                            var t = Zt.bind(null, null);
                                            l.then(t, t);
                                          } else Zt();
                                        else Zt();
                                      });
                                      return l && 'function' == typeof l.then
                                        ? Pt.resolve(l)
                                        : p.then(function () {
                                            return l;
                                          });
                                    }
                                  }),
                                    o.push(function (e) {
                                      (c && ve) ||
                                        (function (t, e) {
                                          for (
                                            var r = 0;
                                            r < e.db.objectStoreNames.length;
                                            ++r
                                          ) {
                                            var n = e.db.objectStoreNames[r];
                                            null == t[n] &&
                                              e.db.deleteObjectStore(n);
                                          }
                                        })(r._cfg.dbschema, e),
                                        sr(t, [t.Transaction.prototype]),
                                        or(
                                          t,
                                          [t.Transaction.prototype],
                                          t._storeNames,
                                          t._dbSchema
                                        ),
                                        (n.schema = t._dbSchema);
                                    });
                                }),
                              (function t() {
                                return o.length
                                  ? Pt.resolve(o.shift()(n.idbtrans)).then(t)
                                  : Pt.resolve();
                              })().then(function () {
                                !(function (t, r) {
                                  e(t).forEach(function (e) {
                                    r.db.objectStoreNames.contains(e) ||
                                      ur(r, e, t[e].primKey, t[e].indexes);
                                  });
                                })(u, i);
                              })
                            );
                          })(t, r, s, n).catch(a);
                  });
                })(t, f / 10, o, s);
              }
            }, s)),
            (u.onsuccess = Vt(function () {
              o = null;
              var n = (t.idbdb = u.result),
                s = d(n.objectStoreNames);
              if (0 < s.length)
                try {
                  var c = n.transaction(Ve(s), 'readonly');
                  r.autoSchema
                    ? (function (t, r, n) {
                        t.verno = r.version / 10;
                        var i = (t._dbSchema = {}),
                          o = (t._storeNames = d(r.objectStoreNames, 0));
                        0 !== o.length &&
                          (o.forEach(function (t) {
                            for (
                              var e = n.objectStore(t),
                                r = e.keyPath,
                                o = He(
                                  Xe(r),
                                  r || '',
                                  !1,
                                  !1,
                                  !!e.autoIncrement,
                                  r && 'string' != typeof r
                                ),
                                s = [],
                                a = 0;
                              a < e.indexNames.length;
                              ++a
                            ) {
                              var u = e.index(e.indexNames[a]);
                              r = u.keyPath;
                              var c = He(
                                u.name,
                                r,
                                !!u.unique,
                                !!u.multiEntry,
                                !1,
                                r && 'string' != typeof r
                              );
                              s.push(c);
                            }
                            i[t] = Je(t, o, s);
                          }),
                          or(t, [t._allTables], e(i), i));
                      })(t, n, c)
                    : fr(t, t._dbSchema, c),
                    ir(t, c);
                } catch (n) {}
              ye.push(t),
                (n.onversionchange = Vt(function (e) {
                  (r.vcFired = !0), t.on('versionchange').fire(e);
                })),
                lr.add(a),
                i();
            }, s));
        }),
      ])
        .then(function () {
          return (
            (r.onReadyBeingFired = []),
            Pt.resolve(pr(t.on.ready.fire)).then(function t() {
              if (0 < r.onReadyBeingFired.length) {
                var e = r.onReadyBeingFired.reduce(ut, tt);
                return (r.onReadyBeingFired = []), Pt.resolve(pr(e)).then(t);
              }
            })
          );
        })
        .finally(function () {
          r.onReadyBeingFired = null;
        })
        .then(function () {
          return (r.isBeingOpened = !1), t;
        })
        .catch(function (e) {
          try {
            o && o.abort();
          } catch (e) {}
          return (
            (r.isBeingOpened = !1),
            t.close(),
            (r.dbOpenError = e),
            ce(r.dbOpenError)
          );
        })
        .finally(function () {
          (r.openComplete = !0), i();
        });
    }

    function yr(t) {
      function e(e) {
        return t.next(e);
      }
      var n = o(e),
        i = o(function (e) {
          return t.throw(e);
        });

      function o(t) {
        return function (e) {
          var o = t(e),
            s = o.value;
          return o.done
            ? s
            : s && 'function' == typeof s.then
            ? s.then(n, i)
            : r(s)
            ? Promise.all(s).then(n, i)
            : n(s);
        };
      }
      return o(e)();
    }

    function mr(t, e, n) {
      for (var i = r(t) ? t.slice() : [t], o = 0; o < n; ++o) i.push(e);
      return i;
    }
    var vr = {
        stack: 'dbcore',
        name: 'VirtualIndexMiddleware',
        level: 1,
        create: function (e) {
          return t({}, e, {
            table: function (r) {
              var n = e.table(r),
                i = n.schema,
                o = {},
                s = [];

              function a(e, r, n) {
                var i = rr(e),
                  u = (o[i] = o[i] || []),
                  c = null == e ? 0 : 'string' == typeof e ? 1 : e.length,
                  f = 0 < r,
                  l = t({}, n, {
                    isVirtual: f,
                    isPrimaryKey: !f && n.isPrimaryKey,
                    keyTail: r,
                    keyLength: c,
                    extractKey: Qe(e),
                    unique: !f && n.unique,
                  });
                return (
                  u.push(l),
                  l.isPrimaryKey || s.push(l),
                  1 < c && a(2 === c ? e[0] : e.slice(0, c - 1), r + 1, n),
                  u.sort(function (t, e) {
                    return t.keyTail - e.keyTail;
                  }),
                  l
                );
              }
              var u = a(i.primaryKey.keyPath, 0, i.primaryKey);
              o[':id'] = [u];
              for (var c = 0, f = i.indexes; c < f.length; c++) {
                var l = f[c];
                a(l.keyPath, 0, l);
              }

              function h(r) {
                var n = r.query.index;
                return n.isVirtual
                  ? t({}, r, {
                      query: {
                        index: n,
                        range: (function (t, r) {
                          return {
                            type: 1 === t.type ? 2 : t.type,
                            lower: mr(
                              t.lower,
                              t.lowerOpen ? e.MAX_KEY : e.MIN_KEY,
                              r
                            ),
                            lowerOpen: !0,
                            upper: mr(
                              t.upper,
                              t.upperOpen ? e.MIN_KEY : e.MAX_KEY,
                              r
                            ),
                            upperOpen: !0,
                          };
                        })(r.query.range, n.keyTail),
                      },
                    })
                  : r;
              }
              return t({}, n, {
                schema: t({}, i, {
                  primaryKey: u,
                  indexes: s,
                  getIndexByKeyPath: function (t) {
                    var e = o[rr(t)];
                    return e && e[0];
                  },
                }),
                count: function (t) {
                  return n.count(h(t));
                },
                query: function (t) {
                  return n.query(h(t));
                },
                openCursor: function (t) {
                  var r = t.query.index,
                    i = r.keyTail,
                    o = r.isVirtual,
                    s = r.keyLength;
                  return o
                    ? n.openCursor(h(t)).then(function (r) {
                        return (
                          r &&
                          (function (r) {
                            return Object.create(r, {
                              continue: {
                                value: function (n) {
                                  null != n
                                    ? r.continue(
                                        mr(
                                          n,
                                          t.reverse ? e.MAX_KEY : e.MIN_KEY,
                                          i
                                        )
                                      )
                                    : t.unique
                                    ? r.continue(
                                        mr(
                                          r.key,
                                          t.reverse ? e.MIN_KEY : e.MAX_KEY,
                                          i
                                        )
                                      )
                                    : r.continue();
                                },
                              },
                              continuePrimaryKey: {
                                value: function (t, n) {
                                  r.continuePrimaryKey(mr(t, e.MAX_KEY, i), n);
                                },
                              },
                              key: {
                                get: function () {
                                  var t = r.key;
                                  return 1 === s ? t[0] : t.slice(0, s);
                                },
                              },
                              value: {
                                get: function () {
                                  return r.value;
                                },
                              },
                            });
                          })(r)
                        );
                      })
                    : n.openCursor(t);
                },
              });
            },
          });
        },
      },
      gr = {
        stack: 'dbcore',
        name: 'HooksMiddleware',
        level: 2,
        create: function (e) {
          return t({}, e, {
            table: function (r) {
              var n = e.table(r),
                i = n.schema.primaryKey;
              return t({}, n, {
                mutate: function (e) {
                  var o = Bt.trans,
                    s = o.table(r).hook,
                    a = s.deleting,
                    u = s.creating,
                    c = s.updating;
                  switch (e.type) {
                    case 'add':
                      if (u.fire === tt) break;
                      return o._promise(
                        'readwrite',
                        function () {
                          return f(e);
                        },
                        !0
                      );
                    case 'put':
                      if (u.fire === tt && c.fire === tt) break;
                      return o._promise(
                        'readwrite',
                        function () {
                          return f(e);
                        },
                        !0
                      );
                    case 'delete':
                      if (a.fire === tt) break;
                      return o._promise(
                        'readwrite',
                        function () {
                          return f(e);
                        },
                        !0
                      );
                    case 'deleteRange':
                      if (a.fire === tt) break;
                      return o._promise(
                        'readwrite',
                        function () {
                          return (function (e) {
                            return (function e(r, o, s) {
                              return n
                                .query({
                                  trans: r,
                                  values: !1,
                                  query: {
                                    index: i,
                                    range: o,
                                  },
                                  limit: s,
                                })
                                .then(function (n) {
                                  var i = n.result;
                                  return f({
                                    type: 'delete',
                                    keys: i,
                                    trans: r,
                                  }).then(function (n) {
                                    return 0 < n.numFailures
                                      ? Promise.reject(n.failures[0])
                                      : i.length < s
                                      ? {
                                          failures: [],
                                          numFailures: 0,
                                          lastResult: void 0,
                                        }
                                      : e(
                                          r,
                                          t({}, o, {
                                            lower: i[i.length - 1],
                                            lowerOpen: !0,
                                          }),
                                          s
                                        );
                                  });
                                });
                            })(e.trans, e.range, 1e4);
                          })(e);
                        },
                        !0
                      );
                  }
                  return n.mutate(e);

                  function f(e) {
                    var r = Bt.trans,
                      o = e.keys || Ze(i, e);
                    if (!o) throw new Error('Keys missing');
                    return (
                      'delete' !==
                        (e =
                          'add' === e.type || 'put' === e.type
                            ? t({}, e, {
                                keys: o,
                                wantResults: !0,
                              })
                            : t({}, e)).type && (e.values = e.values.slice()),
                      e.keys && (e.keys = e.keys.slice()),
                      (function (t, e, r) {
                        return 'add' === e.type
                          ? Promise.resolve(new Array(e.values.length))
                          : t.getMany({
                              trans: e.trans,
                              keys: r,
                            });
                      })(n, e, o).then(function (t) {
                        var s = o.map(function (n, o) {
                          var s = t[o],
                            f = {
                              onerror: null,
                              onsuccess: null,
                            };
                          if ('delete' === e.type) a.fire.call(f, n, s, r);
                          else if ('add' === e.type || void 0 === s) {
                            var l = u.fire.call(f, n, e.values[o], r);
                            null == n &&
                              null != l &&
                              ((n = l),
                              (e.keys[o] = n),
                              i.outbound || b(e.values[o], i.keyPath, n));
                          } else {
                            var h = P(s, e.values[o]),
                              p = c.fire.call(f, h, n, s, r);
                            if (p) {
                              var d = e.values[o];
                              Object.keys(p).forEach(function (t) {
                                b(d, t, p[t]);
                              });
                            }
                          }
                          return f;
                        });
                        return n
                          .mutate(e)
                          .then(function (r) {
                            for (
                              var n = r.failures,
                                i = r.results,
                                a = r.numFailures,
                                u = r.lastResult,
                                c = 0;
                              c < o.length;
                              ++c
                            ) {
                              var f = i ? i[c] : o[c],
                                l = s[c];
                              null == f
                                ? l.onerror && l.onerror(n[c])
                                : l.onsuccess &&
                                  l.onsuccess(
                                    'put' === e.type && t[c] ? e.values[c] : f
                                  );
                            }
                            return {
                              failures: n,
                              results: i,
                              numFailures: a,
                              lastResult: u,
                            };
                          })
                          .catch(function (t) {
                            return (
                              s.forEach(function (e) {
                                return e.onerror && e.onerror(t);
                              }),
                              Promise.reject(t)
                            );
                          });
                      })
                    );
                  }
                },
              });
            },
          });
        },
      },
      wr = (function () {
        function r(e, n) {
          var i = this;
          (this._middlewares = {}), (this.verno = 0);
          var o = r.dependencies;
          (this._options = n =
            t(
              {
                addons: r.addons,
                autoOpen: !0,
                indexedDB: o.indexedDB,
                IDBKeyRange: o.IDBKeyRange,
              },
              n
            )),
            (this._deps = {
              indexedDB: n.indexedDB,
              IDBKeyRange: n.IDBKeyRange,
            });
          var s = n.addons;
          (this._dbSchema = {}),
            (this._versions = []),
            (this._storeNames = []),
            (this._allTables = {});
          var a = {
            dbOpenError: (this.idbdb = null),
            isBeingOpened: !1,
            onReadyBeingFired: null,
            openComplete: !1,
            dbReadyResolve: tt,
            dbReadyPromise: null,
            cancelOpen: tt,
            openCanceller: null,
            autoSchema: !0,
          };
          (a.dbReadyPromise = new Pt(function (t) {
            a.dbReadyResolve = t;
          })),
            (a.openCanceller = new Pt(function (t, e) {
              a.cancelOpen = e;
            })),
            (this._state = a),
            (this.name = e),
            (this.on = Se(this, 'populate', 'blocked', 'versionchange', {
              ready: [ut, tt],
            })),
            (this.on.ready.subscribe = y(this.on.ready.subscribe, function (t) {
              return function (e, n) {
                r.vip(function () {
                  var r = i._state;
                  if (r.openComplete)
                    r.dbOpenError || Pt.resolve().then(e), n && t(e);
                  else if (r.onReadyBeingFired)
                    r.onReadyBeingFired.push(e), n && t(e);
                  else {
                    t(e);
                    var o = i;
                    n ||
                      t(function t() {
                        o.on.ready.unsubscribe(e), o.on.ready.unsubscribe(t);
                      });
                  }
                });
              };
            })),
            (this.Collection = (function (t) {
              return Ae(Fe.prototype, function (e, r) {
                this.db = t;
                var n = xe,
                  i = null;
                if (r)
                  try {
                    n = r();
                  } catch (e) {
                    i = e;
                  }
                var o = e._ctx,
                  s = o.table,
                  a = s.hook.reading.fire;
                this._ctx = {
                  table: s,
                  index: o.index,
                  isPrimKey:
                    !o.index ||
                    (s.schema.primKey.keyPath &&
                      o.index === s.schema.primKey.name),
                  range: n,
                  keysOnly: !1,
                  dir: 'next',
                  unique: '',
                  algorithm: null,
                  filter: null,
                  replayFilter: null,
                  justLimit: !0,
                  isMatch: null,
                  offset: 0,
                  limit: 1 / 0,
                  error: i,
                  or: o.or,
                  valueMapper: a !== et ? a : null,
                };
              });
            })(this)),
            (this.Table = (function (t) {
              return Ae(ke.prototype, function (e, r, n) {
                (this.db = t),
                  (this._tx = n),
                  (this.name = e),
                  (this.schema = r),
                  (this.hook = t._allTables[e]
                    ? t._allTables[e].hook
                    : Se(null, {
                        creating: [it, tt],
                        reading: [rt, et],
                        updating: [st, tt],
                        deleting: [ot, tt],
                      }));
              });
            })(this)),
            (this.Transaction = (function (t) {
              return Ae(Ye.prototype, function (e, r, n, i) {
                var o = this;
                (this.db = t),
                  (this.mode = e),
                  (this.storeNames = r),
                  (this.schema = n),
                  (this.idbtrans = null),
                  (this.on = Se(this, 'complete', 'error', 'abort')),
                  (this.parent = i || null),
                  (this.active = !0),
                  (this._reculock = 0),
                  (this._blockedFuncs = []),
                  (this._resolve = null),
                  (this._reject = null),
                  (this._waitingFor = null),
                  (this._waitingQueue = null),
                  (this._spinCount = 0),
                  (this._completion = new Pt(function (t, e) {
                    (o._resolve = t), (o._reject = e);
                  })),
                  this._completion.then(
                    function () {
                      (o.active = !1), o.on.complete.fire();
                    },
                    function (t) {
                      var e = o.active;
                      return (
                        (o.active = !1),
                        o.on.error.fire(t),
                        o.parent
                          ? o.parent._reject(t)
                          : e && o.idbtrans && o.idbtrans.abort(),
                        ce(t)
                      );
                    }
                  );
              });
            })(this)),
            (this.Version = (function (t) {
              return Ae(hr.prototype, function (e) {
                (this.db = t),
                  (this._cfg = {
                    version: e,
                    storesSource: null,
                    dbschema: {},
                    tables: {},
                    contentUpgrade: null,
                  }),
                  this.stores({});
              });
            })(this)),
            (this.WhereClause = (function (t) {
              return Ae(qe.prototype, function (e, r, n) {
                (this.db = t),
                  (this._ctx = {
                    table: e,
                    index: ':id' === r ? null : r,
                    or: n,
                  });
                var i = t._deps.indexedDB;
                if (!i) throw new J.MissingAPI('indexedDB API missing');
                (this._cmp = this._ascending = i.cmp.bind(i)),
                  (this._descending = function (t, e) {
                    return i.cmp(e, t);
                  }),
                  (this._max = function (t, e) {
                    return 0 < i.cmp(t, e) ? t : e;
                  }),
                  (this._min = function (t, e) {
                    return i.cmp(t, e) < 0 ? t : e;
                  }),
                  (this._IDBKeyRange = t._deps.IDBKeyRange);
              });
            })(this)),
            this.on('versionchange', function (t) {
              0 < t.newVersion
                ? console.warn(
                    "Another connection wants to upgrade database '" +
                      i.name +
                      "'. Closing db now to resume the upgrade."
                  )
                : console.warn(
                    "Another connection wants to delete database '" +
                      i.name +
                      "'. Closing db now to resume the delete request."
                  ),
                i.close();
            }),
            this.on('blocked', function (t) {
              !t.newVersion || t.newVersion < t.oldVersion
                ? console.warn("Dexie.delete('" + i.name + "') was blocked")
                : console.warn(
                    "Upgrade '" +
                      i.name +
                      "' blocked by other connection holding version " +
                      t.oldVersion / 10
                  );
            }),
            (this._maxKey = We(n.IDBKeyRange)),
            (this._createTransaction = function (t, e, r, n) {
              return new i.Transaction(t, e, r, n);
            }),
            (this._fireOnBlocked = function (t) {
              i.on('blocked').fire(t),
                ye
                  .filter(function (t) {
                    return t.name === i.name && t !== i && !t._state.vcFired;
                  })
                  .map(function (e) {
                    return e.on('versionchange').fire(t);
                  });
            }),
            this.use(vr),
            this.use(gr),
            s.forEach(function (t) {
              return t(i);
            });
        }
        return (
          (r.prototype.version = function (t) {
            if (
              ((t = Math.round(10 * t) / 10),
              this.idbdb || this._state.isBeingOpened)
            )
              throw new J.Schema('Cannot add version when database is open');
            this.verno = Math.max(this.verno, t);
            var e = this._versions,
              r = e.filter(function (e) {
                return e._cfg.version === t;
              })[0];
            return (
              r ||
              ((r = new this.Version(t)),
              e.push(r),
              e.sort(ar),
              (this._state.autoSchema = !1),
              r)
            );
          }),
          (r.prototype._whenReady = function (t) {
            var e = this;
            return this._state.openComplete || Bt.letThrough
              ? t()
              : new Pt(function (t, r) {
                  if (!e._state.isBeingOpened) {
                    if (!e._options.autoOpen)
                      return void r(new J.DatabaseClosed());
                    e.open().catch(tt);
                  }
                  e._state.dbReadyPromise.then(t, r);
                }).then(t);
          }),
          (r.prototype.use = function (t) {
            var e = t.stack,
              r = t.create,
              n = t.level,
              i = t.name;
            i &&
              this.unuse({
                stack: e,
                name: i,
              });
            var o = this._middlewares[e] || (this._middlewares[e] = []);
            return (
              o.push({
                stack: e,
                create: r,
                level: null == n ? 10 : n,
                name: i,
              }),
              o.sort(function (t, e) {
                return t.level - e.level;
              }),
              this
            );
          }),
          (r.prototype.unuse = function (t) {
            var e = t.stack,
              r = t.name,
              n = t.create;
            return (
              e &&
                this._middlewares[e] &&
                (this._middlewares[e] = this._middlewares[e].filter(function (
                  t
                ) {
                  return n ? t.create !== n : !!r && t.name !== r;
                })),
              this
            );
          }),
          (r.prototype.open = function () {
            return dr(this);
          }),
          (r.prototype.close = function () {
            var t = ye.indexOf(this),
              e = this._state;
            if ((0 <= t && ye.splice(t, 1), this.idbdb)) {
              try {
                this.idbdb.close();
              } catch (t) {}
              this.idbdb = null;
            }
            (this._options.autoOpen = !1),
              (e.dbOpenError = new J.DatabaseClosed()),
              e.isBeingOpened && e.cancelOpen(e.dbOpenError),
              (e.dbReadyPromise = new Pt(function (t) {
                e.dbReadyResolve = t;
              })),
              (e.openCanceller = new Pt(function (t, r) {
                e.cancelOpen = r;
              }));
          }),
          (r.prototype.delete = function () {
            var t = this,
              e = 0 < arguments.length,
              r = this._state;
            return new Pt(function (n, i) {
              function o() {
                t.close();
                var e = t._deps.indexedDB.deleteDatabase(t.name);
                (e.onsuccess = Vt(function () {
                  lr.remove(t.name), n();
                })),
                  (e.onerror = Ge(i)),
                  (e.onblocked = t._fireOnBlocked);
              }
              if (e)
                throw new J.InvalidArgument(
                  'Arguments not allowed in db.delete()'
                );
              r.isBeingOpened ? r.dbReadyPromise.then(o) : o();
            });
          }),
          (r.prototype.backendDB = function () {
            return this.idbdb;
          }),
          (r.prototype.isOpen = function () {
            return null !== this.idbdb;
          }),
          (r.prototype.hasBeenClosed = function () {
            var t = this._state.dbOpenError;
            return t && 'DatabaseClosed' === t.name;
          }),
          (r.prototype.hasFailed = function () {
            return null !== this._state.dbOpenError;
          }),
          (r.prototype.dynamicallyOpened = function () {
            return this._state.autoSchema;
          }),
          Object.defineProperty(r.prototype, 'tables', {
            get: function () {
              var t = this;
              return e(this._allTables).map(function (e) {
                return t._allTables[e];
              });
            },
            enumerable: !0,
            configurable: !0,
          }),
          (r.prototype.transaction = function () {
            var t = function (t, e, r) {
              var n = arguments.length;
              if (n < 2) throw new J.InvalidArgument('Too few arguments');
              for (var i = new Array(n - 1); --n; ) i[n - 1] = arguments[n];
              return (r = i.pop()), [t, x(i), r];
            }.apply(this, arguments);
            return this._transaction.apply(this, t);
          }),
          (r.prototype._transaction = function (t, e, r) {
            var n = this,
              i = Bt.trans;
            (i && i.db === this && -1 === t.indexOf('!')) || (i = null);
            var o,
              s,
              a = -1 !== t.indexOf('?');
            t = t.replace('!', '').replace('?', '');
            try {
              if (
                ((s = e.map(function (t) {
                  var e = t instanceof n.Table ? t.name : t;
                  if ('string' != typeof e)
                    throw new TypeError(
                      'Invalid table argument to Dexie.transaction(). Only Table or String are allowed'
                    );
                  return e;
                })),
                'r' == t || t === be)
              )
                o = be;
              else {
                if ('rw' != t && t != _e)
                  throw new J.InvalidArgument('Invalid transaction mode: ' + t);
                o = _e;
              }
              if (i) {
                if (i.mode === be && o === _e) {
                  if (!a)
                    throw new J.SubTransaction(
                      'Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY'
                    );
                  i = null;
                }
                i &&
                  s.forEach(function (t) {
                    if (i && -1 === i.storeNames.indexOf(t)) {
                      if (!a)
                        throw new J.SubTransaction(
                          'Table ' + t + ' not included in parent transaction.'
                        );
                      i = null;
                    }
                  }),
                  a && i && !i.active && (i = null);
              }
            } catch (r) {
              return i
                ? i._promise(null, function (t, e) {
                    e(r);
                  })
                : ce(r);
            }
            var u = function (t, e, r, n, i) {
              return Pt.resolve().then(function () {
                var o,
                  s = Bt.transless || Bt,
                  a = t._createTransaction(e, r, t._dbSchema, n),
                  u = {
                    trans: a,
                    transless: s,
                  };
                n ? (a.idbtrans = n.idbtrans) : a.create(), Qt();
                var c = Pt.follow(function () {
                  if ((o = i.call(a, a)))
                    if (o.constructor === yt) {
                      var t = Zt.bind(null, null);
                      o.then(t, t);
                    } else
                      Zt(),
                        'function' == typeof o.next &&
                          'function' == typeof o.throw &&
                          (o = yr(o));
                  else Zt();
                }, u);
                return (
                  o && 'function' == typeof o.then
                    ? Pt.resolve(o).then(function (t) {
                        return a.active
                          ? t
                          : ce(
                              new J.PrematureCommit(
                                'Transaction committed too early. See http://bit.ly/2kdckMn'
                              )
                            );
                      })
                    : c.then(function () {
                        return o;
                      })
                )
                  .then(function (t) {
                    return (
                      n && a._resolve(),
                      a._completion.then(function () {
                        return t;
                      })
                    );
                  })
                  .catch(function (t) {
                    return a._reject(t), ce(t);
                  });
              });
            }.bind(null, this, o, s, i, r);
            return i
              ? i._promise(o, u, 'lock')
              : Bt.trans
              ? ie(Bt.transless, function () {
                  return n._whenReady(u);
                })
              : this._whenReady(u);
          }),
          (r.prototype.table = function (t) {
            if (!a(this._allTables, t))
              throw new J.InvalidTable('Table ' + t + ' does not exist');
            return this._allTables[t];
          }),
          r
        );
      })(),
      br = wr;
    return (
      u(
        br,
        t({}, Z, {
          delete: function (t) {
            return new br(t).delete();
          },
          exists: function (t) {
            return new br(t, {
              addons: [],
            })
              .open()
              .then(function (t) {
                return t.close(), !0;
              })
              .catch('NoSuchDatabaseError', function () {
                return !1;
              });
          },
          getDatabaseNames: function (t) {
            return lr ? lr.getDatabaseNames().then(t) : Pt.resolve([]);
          },
          defineClass: function () {
            return function (t) {
              i(this, t);
            };
          },
          ignoreTransaction: function (t) {
            return Bt.trans ? ie(Bt.transless, t) : t();
          },
          vip: pr,
          async: function (t) {
            return function () {
              try {
                var e = yr(t.apply(this, arguments));
                return e && 'function' == typeof e.then ? e : Pt.resolve(e);
              } catch (e) {
                return ce(e);
              }
            };
          },
          spawn: function (t, e, r) {
            try {
              var n = yr(t.apply(r, e || []));
              return n && 'function' == typeof n.then ? n : Pt.resolve(n);
            } catch (t) {
              return ce(t);
            }
          },
          currentTransaction: {
            get: function () {
              return Bt.trans || null;
            },
          },
          waitFor: function (t, e) {
            var r = Pt.resolve(
              'function' == typeof t ? br.ignoreTransaction(t) : t
            ).timeout(e || 6e4);
            return Bt.trans ? Bt.trans.waitFor(r) : r;
          },
          Promise: Pt,
          debug: {
            get: function () {
              return j;
            },
            set: function (t) {
              M(
                t,
                'dexie' === t
                  ? function () {
                      return !0;
                    }
                  : fe
              );
            },
          },
          derive: l,
          extend: i,
          props: u,
          override: y,
          Events: Se,
          getByKeyPath: w,
          setByKeyPath: b,
          delByKeyPath: function (t, e) {
            'string' == typeof e
              ? b(t, e, void 0)
              : 'length' in e &&
                [].map.call(e, function (e) {
                  b(t, e, void 0);
                });
          },
          shallowClone: _,
          deepClone: B,
          getObjectDiff: P,
          asap: v,
          minKey: -1 / 0,
          addons: [],
          connections: ye,
          errnames: H,
          dependencies: (function () {
            try {
              return {
                indexedDB:
                  n.indexedDB ||
                  n.mozIndexedDB ||
                  n.webkitIndexedDB ||
                  n.msIndexedDB,
                IDBKeyRange: n.IDBKeyRange || n.webkitIDBKeyRange,
              };
            } catch (t) {
              return {
                indexedDB: null,
                IDBKeyRange: null,
              };
            }
          })(),
          semVer: le,
          version: le
            .split('.')
            .map(function (t) {
              return parseInt(t);
            })
            .reduce(function (t, e, r) {
              return t + e / Math.pow(10, 2 * r);
            }),
          default: br,
          Dexie: br,
        })
      ),
      (br.maxKey = We(br.dependencies.IDBKeyRange)),
      (function (t) {
        try {
          lr = (function (t) {
            var e,
              r = t && (t.getDatabaseNames || t.webkitGetDatabaseNames);
            if (!r) {
              var n = new wr(we, {
                addons: [],
              });
              n.version(1).stores({
                dbnames: 'name',
              }),
                (e = n.table('dbnames'));
            }
            return {
              getDatabaseNames: function () {
                return r
                  ? new Pt(function (e, n) {
                      var i = r.call(t);
                      (i.onsuccess = function (t) {
                        return e(d(t.target.result, 0));
                      }),
                        (i.onerror = Ge(n));
                    })
                  : e.toCollection().primaryKeys();
              },
              add: function (t) {
                return (
                  !r &&
                  t !== we &&
                  e
                    .put({
                      name: t,
                    })
                    .catch(tt)
                );
              },
              remove: function (t) {
                return !r && t !== we && e.delete(t).catch(tt);
              },
            };
          })(t);
        } catch (t) {}
      })(wr.dependencies.indexedDB),
      (Pt.rejectionMapper = function (t, e) {
        if (
          !t ||
          t instanceof W ||
          t instanceof TypeError ||
          t instanceof SyntaxError ||
          !t.name ||
          !Q[t.name]
        )
          return t;
        var r = new Q[t.name](e || t.message, t);
        return (
          'stack' in t &&
            f(r, 'stack', {
              get: function () {
                return this.inner.stack;
              },
            }),
          r
        );
      }),
      M(j, fe),
      wr
    );
  });
class LFUCache {
  constructor(t, e) {
    (this._keys = 0),
      (this._maxHits = 1),
      (this._cache = {}),
      (this._hits = {}),
      (this.maxSize = t),
      (this.evictHitRatio = e);
  }
  clear() {
    (this._keys = 0),
      (this._maxHits = 1),
      (this._cache = {}),
      (this._hits = {});
  }
  find(t) {
    const { _cache: e } = this;
    return Object.keys(e).find((r) => e[r] === t);
  }
  get keys() {
    return Object.keys(this._cache);
  }
  get(t) {
    const { _hits: e, _maxHits: r, _cache: n } = this,
      i = ++e[t] || void 0;
    return i && (this._maxHits = i > r ? i : r) && n[t];
  }
  rename(t, e) {
    const { _hits: r, _cache: n } = this;
    (n[e] = n[t]), (r[e] = r[t]), delete n[t], delete r[t];
  }
  del(t) {
    const { _hits: e, _cache: r } = this;
    delete r[t], delete e[t], this._keys--;
  }
  set(t, e) {
    return (
      this._keys++,
      this._keys > this.maxSize && this._evict(),
      (this._hits[t] = 1),
      (this._cache[t] = e)
    );
  }
  _evict() {
    const { _hits: t, _cache: e, _maxHits: r, evictHitRatio: n } = this,
      i = {},
      o = {};
    (this._keys = 0),
      Object.keys(t).forEach((s) => {
        const a = t[s];
        a && a / r > n && (this._keys++, (i[s] = 1), (o[s] = e[s]));
      }),
      (this._cache = o),
      (this._hits = i),
      (this._maxHits = 1);
  }
}
var IDB = new Dexie('ProjectStore');
IDB.version(1).stores({
  projects: 'pid, name, hash, repo',
  files: 'id, &path, &fid, type, hash',
  folders: 'id, &path, hash',
  data: 'fid',
  libraries: 'url',
  sessions: 'pid',
  meta: 'key',
}),
  IDB.version(2)
    .stores({
      projects: 'pid',
      files: 'id, &path, &fid',
      folders: 'id, &path',
      data: 'fid',
      libraries: 'url',
      meta: 'key',
    })
    .upgrade((t) =>
      Promise.all([
        t.projects
          .filter((t) => !t.dir)
          .modify((t) => {
            const e = t.ref ? `${t.pid}:${t.ref.split('/').pop()}` : t.pid;
            (t.olddir = e), (t.dir = `${e}/${t.name}`);
          }),
        t.folders.filter((t) => t.deleted).delete(),
        t.files.filter((t) => t.deleted).delete(),
        t.data
          .filter((t) => 'base64' === t.encoding)
          .modify((t) => {
            (t.text = castAsReadableArrayBuffer(Buffer.from(t.text, 'base64'))),
              (t.encoding = 'binary');
          }),
      ])
    ),
  IDB.version(3).stores({
    files: 'id, &path, &fid',
    folders: 'id, &path',
    data: 'fid',
    meta: 'key',
  });
var Buffer = buffer.Buffer,
  GlobalErrorCodes = {
    ProjectNotFound: 'project:404',
    FileNotFound: 'file:404',
    RemoveFailed: 'rm:500',
    NotADirectory: 'rmdir:405',
    DestinationExists: 'mv:403',
    SourceNotFound: 'src:404',
    INodeNotFound: 'inode:404',
    RemoteNotFound: 'remote:404',
    CriticalDeletionError: 'delete:500',
    InvalidArgument: 'args:400',
  };
class ExtError extends Error {
  constructor(t) {
    super(t.message), Object.assign(this, t);
  }
}
const ERROR_SOURCE = 'filesystem',
  isIDB = (t) => t.startsWith('idb/'),
  ext = (t) => {
    const e = basename(t),
      r = e.lastIndexOf('.');
    return -1 == r ? '' : e.substr(r).toLowerCase();
  },
  normPathCache = new LFUCache(800, 0.8),
  normalizePath = (t) => {
    const e = normPathCache.get(t);
    if (e) return e;
    if (t.indexOf('\0') >= 0)
      throw new ExtError({
        name: 'InvalidArgument',
        src: 'filesystem:normalizePath',
        message: RES_I18N.ErrorMessages.InvalidFor(RES_I18N.Objects.Path),
        code: GlobalErrorCodes.InvalidArgument,
      });
    if (!t)
      throw new ExtError({
        name: 'InvalidArgument',
        src: 'filesystem:normalizePath',
        message: RES_I18N.ErrorMessages.CannotBeEmptyFor(RES_I18N.Objects.Path),
        code: GlobalErrorCodes.InvalidArgument,
      });
    return normPathCache.set(
      t,
      t
        .split('/')
        .filter((t, e) => ('' !== t || 0 === e) && '.' !== t)
        .join('/')
    );
  },
  dirname = (t) => {
    const e = t.lastIndexOf('/');
    return -1 === e ? '.' : 0 === e ? '/' : t.slice(0, e);
  },
  relativeTo = (t, e) =>
    e ? t.slice(e.length + (e.endsWith('/') ? 0 : 1)) : t,
  childOf = (t, e) =>
    !!t &&
    ((t = normalizePath(t)),
    (e = normalizePath(e)),
    t.startsWith(e + '/') || t === e),
  basename = (t) => {
    const e = t.lastIndexOf('/');
    return -1 === e ? t : t.slice(e + 1);
  },
  hasExt = (t, e) => t && ext(t) === e,
  join = (t, e) =>
    null == t || null == e
      ? null
      : t.replace(/\/$/, '') + '/' + e.replace(/^\//, ''),
  $warn = console ? console.warn : () => {},
  FileType = {
    FILE: 32768,
    DIRECTORY: 16384,
    SYMLINK: 40960,
  };
class Stats {
  constructor({ size: t, mode: e, atimeMs: r = null, mtimeMs: n, ctimeMs: i }) {
    let o = Date.now();
    (this.atimeMs = 'number' != typeof r ? o : r),
      (this.mtimeMs = 'number' != typeof n ? o : n),
      (this.ctimeMs = 'number' != typeof i ? o : i),
      (this.size = t),
      (this.mode = Stats.normalizeMode(e)),
      (this.uid = this.gid = this.ino = 0);
  }
  get atime() {
    return new Date(this.atimeMs);
  }
  get mtime() {
    return new Date(this.mtimeMs);
  }
  get ctime() {
    return new Date(this.ctimeMs);
  }
  toBuffer() {
    const t = Buffer.alloc(32);
    return (
      t.writeUInt32LE(this.size, 0),
      t.writeUInt32LE(this.mode, 4),
      t.writeDoubleLE(this.atimeMs, 8),
      t.writeDoubleLE(this.mtimeMs, 16),
      t.writeDoubleLE(this.ctimeMs, 24),
      t
    );
  }
  isFile() {
    return (61440 & this.mode) === FileType.FILE;
  }
  isDirectory() {
    return (61440 & this.mode) === FileType.DIRECTORY;
  }
  isSymbolicLink() {
    return (61440 & this.mode) === FileType.SYMLINK;
  }
  chmod(t) {
    return (this.mode = (61440 & this.mode) | t);
  }
  static normalizeMode(t) {
    let e = t > 0 ? t >> 12 : 0;
    4 !== e && 8 !== e && 10 !== e && 14 !== e && (e = 8);
    let r = 511 & t;
    return (r = 73 & r ? 493 : 420), 8 !== e && (r = 0), (e << 12) + r;
  }
}
const messageHandlers = window.webkit && window.webkit.messageHandlers;
if (messageHandlers && messageHandlers.file && messageHandlers.system) {
  class t {
    constructor({ file: t, system: e }) {
      (this.$resourceUrl = null),
        (this._file = t),
        (this._system = e),
        (this._id = 1),
        (this._callbacks = {});
    }
    showToast(t, e) {
      this._system.postMessage({
        method: 'showToast',
        message: t,
        duration: e,
      });
    }
    launchWebView(t) {
      this._system.postMessage({
        method: 'launchWebView',
        url: t,
      });
    }
    appVersion() {
      return this.call('appVersion');
    }
    versionName() {
      return this.call('versionName');
    }
    clipboardText() {
      return this.call('clipboardText');
    }
    getOrientation() {
      return this.call('getOrientation');
    }
    getFileContent() {
      return this.call('getFileContent');
    }
    getDirectory() {
      return this.call('getDirectory');
    }
    mkdirp(t) {
      return this.call('mkdirp', {
        path: t,
      });
    }
    exists(t) {
      return this.call('exists', {
        path: t,
      });
    }
    readFile(t, e) {
      return this.call('readFile', {
        path: t,
        encoding: e,
      });
    }
    remove(t) {
      return this.call('remove', {
        path: t,
      });
    }
    readlink(t) {
      return this.call('readlink', {
        path: t,
      });
    }
    writelink(t, e) {
      return this.call('writelink', {
        path: t,
        target: e,
      });
    }
    write(t, e, r) {
      return this.call('write', {
        path: t,
        contents: e,
        base64: r,
      });
    }
    readdir(t, e, r) {
      return this.call('readdir', {
        path: t,
        skipFiles: e,
        skipFolders: r,
      });
    }
    readdirDeep(t, e, r) {
      return this.call('readdirDeep', {
        path: t,
        files: e,
        folders: r,
      });
    }
    lstat(t) {
      return this.call('lstat', {
        path: t,
      });
    }
    mv(t, e) {
      return this.call('mv', {
        src: t,
        target: e,
      });
    }
    call(t, e) {
      e = e || {};
      const r = this._id++;
      return (
        this._system.postMessage(
          Object.assign(
            {
              method: t,
              id: r,
            },
            e
          )
        ),
        new Promise((t, e) => {
          this._callbacks[r] = {
            resolve: t,
            reject: e,
          };
        })
      );
    }
    send(t, e) {
      const r = this._callbacks[t];
      r && (r.resolve(e), delete this._callbacks[t]);
    }
    sendError(t, e) {
      const r = this._callbacks[t];
      r && (r.reject(e), delete this._callbacks[t]);
    }
  }
  window.Android = window.IOSBridge = new t(messageHandlers);
}
class DeviceSystem {
  constructor(t) {
    this._device = t;
  }
  get supported() {
    return this._device && this._device.appVersion;
  }
  get device() {
    return this._device;
  }
  showToast(t, e) {
    const r = this._device;
    r && r.showToast
      ? r.showToast(t, 'long')
      : (((e = e || {}).timeout = 3500), UI.message(t, e));
  }
  launchWebView(t) {
    const e = this._device;
    return !(!e || !e.launchWebView) && (e.launchWebView(t), !0);
  }
  resourceUrl(t) {
    const e = this._device;
    return e ? (e.getUrlFor ? e.getUrlFor(t) : join(e.$resourceUrl, t)) : null;
  }
  async saveBase64(t, e) {
    const r = this._device;
    return r && r.saveBase64
      ? r.saveBase64(Buffer.from(e).toString('base64'), t)
      : saveAs(new Blob([e]), t);
  }
  async appVersion() {
    const t = this._device;
    return t && t.appVersion ? t.appVersion() : null;
  }
  async versionName() {
    const t = this._device;
    return t && t.versionName ? t.versionName() : null;
  }
  async setOrientation(t) {
    const e = this._device;
    e && e.setOrientation && e.setOrientation(t);
  }
  async getOrientation() {
    const t = this._device;
    return t && t.getOrientation ? t.getOrientation() : null;
  }
  async clipboardText() {
    const t = this._device;
    return t && t.clipboardText ? t.clipboardText() : null;
  }
  async getFileContent() {
    const t = this._device;
    return t && t.getFileContent ? t.getFileContent() : null;
  }
}
var DS = new DeviceSystem(window.Android);
class DeviceFileSystem {
  constructor(t) {
    (this.device = t),
      (this._supported =
        !!t &&
        !!(
          t.getDirectory &&
          t.mkdirp &&
          t.exists &&
          t.readFile &&
          t.remove &&
          t.readlink &&
          t.writelink &&
          t.write &&
          t.readdir &&
          t.readdirDeep &&
          t.lstat &&
          t.mv
        )),
      this._supported ||
        $warn('DeviceFileSystem is not operational: interface missing');
  }
  get legacy() {
    return this.device.appVersion && this.device.appVersion() <= 33;
  }
  get supported() {
    return this._supported;
  }
  async getDirectoryAsync() {
    return (
      this._directory || (this._directory = await this.device.getDirectory())
    );
  }
  async readFile(t, e) {
    const { contents: r } = await DeviceFileSystem.promisifyStatus(
      await this.device.readFile(t, e)
    );
    return 'utf8' === e ? r : Buffer.from(r, 'base64');
  }
  async remove(t) {
    if (t === this._directory)
      throw new ExtError({
        name: 'CriticalDeletionError',
        src: `${this.constructor.name}:remove`,
        message: 'Critical deletion error.',
        code: GlobalErrorCodes.CriticalDeletionError,
      });
    return DeviceFileSystem.promisifyStatus(await this.device.remove(t));
  }
  async readlink(t) {
    const { contents: e } = await DeviceFileSystem.promisifyStatus(
      await this.device.readlink(t)
    );
    return e;
  }
  async writelink(t, e) {
    return DeviceFileSystem.promisifyStatus(await this.device.writelink(t, e));
  }
  async write(t, e, r) {
    return DeviceFileSystem.promisifyStatus(await this.device.write(t, e, !!r));
  }
  async exists(t) {
    return this.device.exists(t);
  }
  async mkdirp(t) {
    const { contents: e } = await DeviceFileSystem.promisifyStatus(
      await this.device.mkdirp(t)
    );
    return e;
  }
  async readdir(t, e, r) {
    try {
      return DeviceFileSystem.promisifyStatus(
        (this.legacy
          ? await this.device.readdir(t)
          : await this.device.readdir(t, e, r)) || null
      );
    } catch (t) {
      return null;
    }
  }
  async readdirDeep(t, e, r) {
    try {
      return DeviceFileSystem.promisifyStatus(
        await this.device.readdirDeep(t, e, r)
      );
    } catch (t) {
      return [];
    }
  }
  async lstat(t) {
    try {
      return new Stats(
        DeviceFileSystem.normalizeStats(
          await DeviceFileSystem.promisifyStatus(await this.device.lstat(t))
        )
      );
    } catch (t) {
      return null;
    }
  }
  async mv(t, e) {
    const { contents: r } = await DeviceFileSystem.promisifyStatus(
      await this.device.mv(t, e)
    );
    return r;
  }
  async writeExternal(t, e, r) {
    const n = this.device;
    if (n && n.writeExternal)
      return DeviceFileSystem.promisifyStatus(await n.writeExternal(t, e, !!r));
  }
  static async promisifyStatus(t) {
    switch (t) {
      case '{}':
        return {};
      case '[]':
        return [];
      default: {
        const e = tryParseJSON(t);
        if (e && e.status) throw new ExtError(e);
        return e;
      }
    }
  }
  static normalizeStats(t) {
    const e = t.st_mtime || t.mtimeMs,
      r = t.st_ctime || t.ctimeMs,
      n = t.st_atime || t.atimeMs;
    return (
      Object.assign(t, {
        mtimeMs: 1e3 * e,
        ctimeMs: 1e3 * r,
        atimeMs: 1e3 * n,
      }),
      t
    );
  }
}
var DeviceFileSystemClass = DeviceFileSystem,
  DFS = new DeviceFileSystem(window.Android),
  PathUtils = {
    isIDB: isIDB,
    ext: ext,
    hasExt: hasExt,
    dirname: dirname,
    basename: basename,
    join: join,
    relativeTo: relativeTo,
    childOf: childOf,
    normalizePath: normalizePath,
  };
const FileTypeModes = {
  FILE: 33188,
  DIRECTORY: 16384,
  SYMLINK: 40960,
};
class GitFileSystem {
  constructor(t) {
    (this._store = IDB),
      (this._inodes = new LFUCache(9e3, 0)),
      (this._fs = t),
      (this.observable = new ObservableClass());
  }
  async writeExternal(t, e, r) {
    const n = this._fs;
    return n.supported && (await n.writeExternal(t, e, r));
  }
  isBinaryContent(t) {
    return Buffer.from(t.slice(0, 8e3)).some((t) => 0 === t);
  }
  async inode(t, e) {
    const r = this._inodes;
    return (!e && r.get(t)) || r.set(t, GitFileSystem.uuid4());
  }
  async inodePath(t) {
    const e = this._inodes.find(t);
    if (e) return e;
    throw new ExtError({
      src: `${this.constructor.name}:inodePath`,
      message: 'Could not find inode.',
      inode: t,
      code: GlobalErrorCodes.INodeNotFound,
    });
  }
  inodePathSync(t) {
    return this._inodes.find(t);
  }
  async exists(t) {
    t = normalizePath(t);
    const { _store: e, _fs: r } = this;
    return r.supported && !isIDB(t)
      ? await r.exists(t)
      : !!(await e.files.get({
          path: t,
        })) ||
          !!(await e.folders.get({
            path: t,
          }));
  }
  async lookupFolder(t) {
    const { _store: e } = this,
      r = await e.folders.get({
        path: t,
      });
    if (r) return r;
    {
      const e = await this.readlink(t);
      return e && e !== t ? await this.lookupFolder(e) : null;
    }
  }
  async lookupFile(t) {
    const e = await this._store.files.get({
      path: t,
    });
    return e
      ? e.target && e.target !== t
        ? await this.lookupFile(e.target)
        : e
      : null;
  }
  async mv(
    t,
    e,
    r = {
      updateStatus: !1,
      atomic: !1,
    }
  ) {
    const { _store: n, _inodes: i, _fs: o } = this;
    if (((t = normalizePath(t)), (e = normalizePath(e)), t === e)) return;
    if (await this.exists(e))
      throw new ExtError({
        name: 'DestinationExists',
        src: `${this.constructor.name}:mv`,
        message: RES_I18N.ErrorMessages.ExistsFor(RES_I18N.Objects.TargetPath),
        path: e,
        code: GlobalErrorCodes.DestinationExists,
      });
    let s;
    if (o.supported && !isIDB(t)) s = await o.mv(t, e);
    else {
      const r = await this.lookupFile(t);
      if (r)
        await this.mkdir(dirname(e)),
          await n.files.update(r.id, {
            path: e,
            mtimeMs: Date.now(),
          }),
          (s = 'file');
      else {
        const r = await this.lookupFolder(t);
        if (!r)
          throw new ExtError({
            name: 'SourceNotFound',
            src: `${this.constructor.name}:mv`,
            message: RES_I18N.ErrorMessages.NotExistsFor(
              RES_I18N.Objects.SourcePath
            ),
            oldpath: t,
            code: GlobalErrorCodes.SourceNotFound,
          });
        {
          await this.mkdir(dirname(e));
          const i = Date.now();
          await n.files
            .where('path')
            .startsWith(t + '/')
            .modify((r) => {
              (r.path = e + r.path.slice(t.length)), (r.mtimeMs = i);
            }),
            await n.folders
              .where('path')
              .startsWith(t + '/')
              .modify((r) => {
                (r.path = e + r.path.slice(t.length)), (r.mtimeMs = i);
              }),
            await n.folders.update(r.id, {
              path: e,
              mtimeMs: i,
            }),
            (s = 'folder');
        }
      }
    }
    const { updateStatus: a, atomic: u } = r;
    return (
      u ||
        ('file' === s
          ? i.rename(t, e)
          : 'folder' === s &&
            i.keys
              .filter((e) => e.startsWith(t + '/'))
              .forEach((r) => i.rename(r, r.replace(t, e))),
        await this.observable.run({
          action: 'mv',
          updateStatus: a,
          oldpath: t,
          path: e,
          type: s,
        })),
      {
        oldpath: t,
        path: e,
        type: s,
      }
    );
  }
  async read(t, e = {}) {
    return this.readFile(t, e).catch(() => null);
  }
  async readFile(t, e = {}) {
    t = normalizePath(t);
    const { _fs: r, _store: n } = this,
      i = e.encoding;
    if (r.supported && !isIDB(t)) return r.readFile(t, i);
    {
      const e = await this.lookupFile(t);
      if (e) {
        const t = await n.data.get(e.fid),
          r = (t && t.text) || '',
          o = (t && t.encoding) || '';
        return o
          ? 'utf8' === i && 'utf8' === o
            ? r
            : i
            ? Buffer.from(r, o).toString(i)
            : Buffer.from(r, o)
          : 'utf8' === i
          ? r
          : i
          ? Buffer.from(r).toString(i)
          : Buffer.from(r);
      }
      throw new ExtError({
        name: 'FileNotFound',
        src: `${this.constructor.name}:read`,
        message: RES_I18N.ErrorMessages.NotExistsFor(RES_I18N.Objects.File),
        path: t,
        code: GlobalErrorCodes.FileNotFound,
      });
    }
  }
  async mkdir(
    t,
    e = {
      atomic: !1,
    }
  ) {
    t = normalizePath(t);
    const { _fs: r, _store: n } = this,
      i = t.split('/').map((t, e, r) => r.slice(0, e + 1).join('/'));
    let o;
    (o =
      r.supported && !isIDB(t)
        ? await r.mkdirp(t)
        : await n.folders
            .where('path')
            .anyOf(i)
            .keys((t) => {
              const e = i.filter((e) => !t.includes(e));
              return e.length > 0 && this._mkdirs(e);
            })),
      o &&
        !e.atomic &&
        (await this.observable.run({
          action: 'mkdir',
          path: t,
          type: 'folder',
        }));
  }
  async write(t, e, r) {
    (t = normalizePath(t)), (e = e || '');
    let { mode: n, target: i, updateStatus: o, atomic: s } = r || {};
    const { _fs: a, _store: u } = this;
    await this.mkdir(dirname(t), {
      atomic: s,
    });
    const c = GitFileSystem.isArrayBuffer(e);
    let f, l;
    if (a.supported && !isIDB(t))
      ({
        mtimeMs: f,
        size: l,
        mode: n,
      } = await a.write(t, c ? Buffer.from(e).toString('base64') : e, c));
    else {
      const r = await this.lookupFile(t),
        o = c ? castAsReadableArrayBuffer(e) : e;
      (l = o.byteLength || o.length), (f = Date.now());
      const s = r ? r.ctimeMs : f,
        a = r ? r.id : GitFileSystem.uuid4();
      await u.files.put({
        id: a,
        fid: a,
        path: t,
        target: i,
        mode: n,
        size: l,
        ctimeMs: s,
        mtimeMs: f,
      }),
        await u.data.put({
          fid: a,
          text: o,
          encoding: c ? 'binary' : 'utf8',
        });
    }
    return (
      s ||
        (await this.observable.run({
          action: 'write',
          path: t,
          type: 'file',
          updateStatus: o,
        })),
      {
        mode: n,
        mtimeMs: f,
        type: 'file',
        ino: 0,
        size: l,
      }
    );
  }
  async rm(t, e = {}) {
    const { tmpDir: r, updateStatus: n, atomic: i } = e;
    t = normalizePath(t);
    const { _fs: o, _store: s, _inodes: a } = this;
    let u = !1;
    if (r)
      return this.mv(t, `${r}${t}~${GitFileSystem.uuid4()}`, {
        updateStatus: n,
      });
    {
      const e = await this.lstat(t);
      if (e) {
        if (e.isDirectory())
          return this.rmdir(t, {
            updateStatus: n,
          });
        if (o.supported && !isIDB(t)) u = await o.remove(t);
        else {
          const e = await s.files.get({
            path: t,
          });
          e &&
            (await Promise.all([s.files.delete(e.id), s.data.delete(e.fid)]),
            (u = !0));
        }
      } else u = !0;
    }
    if (u) {
      const e = 'file';
      if (i)
        return {
          oldpath: t,
          path: null,
          type: e,
        };
      a.del(t);
      const r = dirname(t);
      return '.' === r || '' === r || (await this.fileCount(r)) > 0
        ? (await this.observable.run({
            action: 'rm',
            updateStatus: n,
            oldpath: t,
            path: null,
            type: e,
          }),
          {
            oldpath: t,
            path: null,
            type: e,
          })
        : this.rmdir(r);
    }
    throw new ExtError({
      name: 'RemoveFailed',
      src: `${this.constructor.name}:rm`,
      message: `Could not remove ${t}.`,
      path: t,
      code: GlobalErrorCodes.RemoveFailed,
    });
  }
  async rmdir(t, e = {}) {
    const { tmpDir: r, updateStatus: n } = e;
    t = normalizePath(t);
    const { _inodes: i, _fs: o, _store: s } = this,
      a = t + '/';
    if ((i.keys.filter((t) => t.startsWith(a)).forEach((t) => i.del(t)), r))
      return this.mv(t, r + t, {
        updateStatus: n,
      });
    {
      const e = await this.lstat(t);
      let r = !1;
      if (e) {
        if (!e.isDirectory())
          throw new ExtError({
            name: 'NotADirectory',
            src: `${this.constructor.name}:rmdir`,
            message: `${t} is not a directory.`,
            path: t,
            stats: e,
            code: GlobalErrorCodes.NotADirectory,
          });
        o.supported && !isIDB(t)
          ? (r = await o.remove(t))
          : (await Promise.all([
              s.folders.where('path').equals(t).delete(),
              s.files.where('path').startsWith(a).delete(),
              s.folders.where('path').startsWith(a).delete(),
            ]),
            (r = !0));
      } else r = !0;
      if (r) {
        const e = 'folder',
          r = dirname(t);
        return '.' === r || '' === r || (await this.fileCount(r)) > 0
          ? (await this.observable.run({
              action: 'rmdir',
              updateStatus: n,
              oldpath: t,
              path: null,
              type: e,
            }),
            {
              oldpath: t,
              path: null,
              type: e,
            })
          : this.rmdir(r);
      }
      throw new ExtError({
        name: 'RemoveFailed',
        src: `${this.constructor.name}:rmdir`,
        message: `Could not remove ${t}.`,
        path: t,
        code: GlobalErrorCodes.RemoveFailed,
      });
    }
  }
  async fileCount(t) {
    const e = await this.readdirDeep(t, {
      files: !0,
    });
    return e ? e.length : null;
  }
  async readdir(t, e) {
    const { skipFiles: r = !1, skipFolders: n = !1 } = e || {};
    t = normalizePath(t);
    const { _fs: i, _store: o } = this;
    let s;
    if (i.supported && !isIDB(t))
      return (
        (s = await i.readdir(t, r, n)),
        s && s.sort(GitFileSystemClass.compareStrings),
        s
      );
    const a = await this.lookupFolder(t);
    if (a) {
      const t = a.path + '/',
        e = t.length;
      let i = n
          ? []
          : o.folders
              .where('path')
              .startsWith(t)
              .filter((t) => !t.path.slice(e).includes('/'))
              .keys(),
        u = r
          ? []
          : o.files
              .where('path')
              .startsWith(t)
              .filter((t) => !t.path.slice(e).includes('/'))
              .keys();
      return (
        (s = (await i).concat(await u).map((t) => t.slice(e))),
        s.sort(GitFileSystemClass.compareStrings),
        s
      );
    }
    return null;
  }
  async readdirDeep(t, e) {
    const { files: r = !0, folders: n = !1, relative: i = !1 } = e || {},
      { _store: o, _fs: s } = this,
      a = (t = normalizePath(t)) + '/',
      u = a.length;
    let c;
    if (s.supported && !isIDB(t)) c = await s.readdirDeep(t, r, n);
    else {
      const [t, e] = await Promise.all([
        r ? o.files.where('path').startsWith(a).keys() : [],
        n ? o.folders.where('path').startsWith(a).keys() : [],
      ]);
      c = e.concat(t);
    }
    return (
      c.sort(GitFileSystemClass.compareStrings),
      i && (c = c.map((t) => t.slice(u))),
      c
    );
  }
  async lstat(t) {
    t = normalizePath(t);
    const { _store: e, _fs: r } = this;
    if (r.supported && !isIDB(t)) return await r.lstat(t);
    {
      const r = await e.files.get({
        path: t,
      });
      if (r)
        return r.target
          ? new Stats({
              size: r.size || 0,
              mode: FileTypeModes.SYMLINK,
              mtimeMs: r.mtimeMs,
              ctimeMs: r.ctimeMs,
            })
          : new Stats({
              size: r.size || 0,
              mode: FileTypeModes.FILE,
              mtimeMs: r.mtimeMs,
              ctimeMs: r.ctimeMs,
            });
      {
        const r = await e.folders.get({
          path: t,
        });
        return r
          ? new Stats({
              size: 0,
              mode: FileTypeModes.DIRECTORY,
              mtimeMs: r.mtimeMs,
              ctimeMs: r.ctimeMs,
            })
          : null;
      }
    }
  }
  async size(t) {
    return (
      (await this.lstat(t)) || {
        size: 0,
      }
    ).size;
  }
  async readlink(t) {
    t = normalizePath(t);
    const { _fs: e, _store: r } = this;
    if (e.supported && !isIDB(t)) return e.readlink(t);
    const n = await r.files.get({
      path: t,
    });
    return (n && n.target) || null;
  }
  async writelink(t, e) {
    t = normalizePath(t);
    const { _fs: r } = this,
      n = e.toString('utf8');
    return r.supported && !isIDB(t)
      ? (await this.mkdir(dirname(t)), r.writelink(t, n))
      : this.write(t, '', {
          target: n,
          mode: FileTypeModes.SYMLINK,
        });
  }
  _mkdirs(t) {
    const e = Date.now();
    return this._store.folders.bulkAdd(
      t.map((t) => ({
        id: GitFileSystem.uuid4(),
        path: t,
        mtimeMs: e,
        ctimeMs: e,
      }))
    );
  }
  static uuid4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (t) => {
      const e = (16 * Math.random()) | 0;
      return ('x' === t ? e : (3 & e) | 8).toString(16);
    });
  }
  static compareStrings(t, e) {
    return -(t < e) || +(t > e);
  }
  static isArrayBuffer(t) {
    return (
      t instanceof ArrayBuffer ||
      (t && t.buffer instanceof ArrayBuffer && void 0 !== t.byteLength)
    );
  }
}
var GitFileSystemClass = GitFileSystem,
  GFS = new GitFileSystem(DFS);
class Environ {
  constructor(t, e) {
    (this._fs = t), (this._ds = e), (this.locale = 'en');
  }
  resource(t) {
    return t
      ? isIDB(t)
        ? join('/run', t)
        : this._ds.resourceUrl(t) || join('/run', t)
      : t;
  }
  async projectConfigPathAsync() {
    return this.filesDirAsync('.projects');
  }
  async gitConfigPathAsync() {
    return this.filesDirAsync('.gitconfig');
  }
  async settingsConfigPathAsync() {
    return this.filesDirAsync('.settings');
  }
  async metadataDirAsync(t) {
    const e = await this.filesDirAsync();
    return `${e}.metadata/${(t || '').replace(e, '')}`;
  }
  async trashDirAsync(t) {
    const e = await this.filesDirAsync();
    return `${e}.trash/${(t || '').replace(e, '')}`;
  }
  async tmpDirAsync(t) {
    const e = await this.filesDirAsync();
    return `${e}.tmp/${(t || '').replace(e, '')}`;
  }
  async filesDirAsync(t) {
    return `${(await this.systemDirAsync()) || 'idb/'}${t || ''}`;
  }
  async systemDirAsync() {
    return this._fs.supported ? await this.resolveDir() : null;
  }
  async sleep(t) {
    return new Promise((e) => setTimeout(e, t));
  }
  async resolveDir() {
    for (let t = 0; t < 10; t++)
      try {
        return this._fs.getDirectoryAsync();
      } catch (e) {
        $LOG.warn(`Attempting establishing JavaScript bridge (${t}/10)`),
          await this.sleep(150);
      }
    return null;
  }
}
var ENV = new Environ(DFS, DS);

function ObservableClass() {
  const t = [];
  Object.assign(this, {
    subscriptions: t,
    subscribe: function (e) {
      return (
        t.push(e),
        {
          unsubscribe: () => {
            t.includes(e) && t.splice(t.indexOf(e), 1);
          },
        }
      );
    },
    run: function (e) {
      return Promise.all(t.map((t) => t(e)));
    },
  });
}

function tryParseJSON(t) {
  try {
    return JSON.parse(t) || null;
  } catch (t) {
    return null;
  }
}

function castAsReadableArrayBuffer(t) {
  if (t instanceof ArrayBuffer) return t;
  if (t instanceof Uint8Array)
    return 0 === t.byteOffset && t.byteLength === t.buffer.byteLength
      ? t.buffer
      : t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength);
  if (Buffer.isBuffer(t)) return t.buffer;
  throw new Error('Argument type not recognized: ' + typeof t);
}
