(this.csbJsonP = this.csbJsonP || []).push([
  [0],
  {
    '../../node_modules/constants-browserify/constants.json': function (e) {
      e.exports = JSON.parse(
        '{"O_RDONLY":0,"O_WRONLY":1,"O_RDWR":2,"S_IFMT":61440,"S_IFREG":32768,"S_IFDIR":16384,"S_IFCHR":8192,"S_IFBLK":24576,"S_IFIFO":4096,"S_IFLNK":40960,"S_IFSOCK":49152,"O_CREAT":512,"O_EXCL":2048,"O_NOCTTY":131072,"O_TRUNC":1024,"O_APPEND":8,"O_DIRECTORY":1048576,"O_NOFOLLOW":256,"O_SYNC":128,"O_SYMLINK":2097152,"O_NONBLOCK":4,"S_IRWXU":448,"S_IRUSR":256,"S_IWUSR":128,"S_IXUSR":64,"S_IRWXG":56,"S_IRGRP":32,"S_IWGRP":16,"S_IXGRP":8,"S_IRWXO":7,"S_IROTH":4,"S_IWOTH":2,"S_IXOTH":1,"E2BIG":7,"EACCES":13,"EADDRINUSE":48,"EADDRNOTAVAIL":49,"EAFNOSUPPORT":47,"EAGAIN":35,"EALREADY":37,"EBADF":9,"EBADMSG":94,"EBUSY":16,"ECANCELED":89,"ECHILD":10,"ECONNABORTED":53,"ECONNREFUSED":61,"ECONNRESET":54,"EDEADLK":11,"EDESTADDRREQ":39,"EDOM":33,"EDQUOT":69,"EEXIST":17,"EFAULT":14,"EFBIG":27,"EHOSTUNREACH":65,"EIDRM":90,"EILSEQ":92,"EINPROGRESS":36,"EINTR":4,"EINVAL":22,"EIO":5,"EISCONN":56,"EISDIR":21,"ELOOP":62,"EMFILE":24,"EMLINK":31,"EMSGSIZE":40,"EMULTIHOP":95,"ENAMETOOLONG":63,"ENETDOWN":50,"ENETRESET":52,"ENETUNREACH":51,"ENFILE":23,"ENOBUFS":55,"ENODATA":96,"ENODEV":19,"ENOENT":2,"ENOEXEC":8,"ENOLCK":77,"ENOLINK":97,"ENOMEM":12,"ENOMSG":91,"ENOPROTOOPT":42,"ENOSPC":28,"ENOSR":98,"ENOSTR":99,"ENOSYS":78,"ENOTCONN":57,"ENOTDIR":20,"ENOTEMPTY":66,"ENOTSOCK":38,"ENOTSUP":45,"ENOTTY":25,"ENXIO":6,"EOPNOTSUPP":102,"EOVERFLOW":84,"EPERM":1,"EPIPE":32,"EPROTO":100,"EPROTONOSUPPORT":43,"EPROTOTYPE":41,"ERANGE":34,"EROFS":30,"ESPIPE":29,"ESRCH":3,"ESTALE":70,"ETIME":101,"ETIMEDOUT":60,"ETXTBSY":26,"EWOULDBLOCK":35,"EXDEV":18,"SIGHUP":1,"SIGINT":2,"SIGQUIT":3,"SIGILL":4,"SIGTRAP":5,"SIGABRT":6,"SIGIOT":6,"SIGBUS":10,"SIGFPE":8,"SIGKILL":9,"SIGUSR1":30,"SIGSEGV":11,"SIGUSR2":31,"SIGPIPE":13,"SIGALRM":14,"SIGTERM":15,"SIGCHLD":20,"SIGCONT":19,"SIGSTOP":17,"SIGTSTP":18,"SIGTTIN":21,"SIGTTOU":22,"SIGURG":16,"SIGXCPU":24,"SIGXFSZ":25,"SIGVTALRM":26,"SIGPROF":27,"SIGWINCH":28,"SIGIO":23,"SIGSYS":12,"SSL_OP_ALL":2147486719,"SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION":262144,"SSL_OP_CIPHER_SERVER_PREFERENCE":4194304,"SSL_OP_CISCO_ANYCONNECT":32768,"SSL_OP_COOKIE_EXCHANGE":8192,"SSL_OP_CRYPTOPRO_TLSEXT_BUG":2147483648,"SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS":2048,"SSL_OP_EPHEMERAL_RSA":0,"SSL_OP_LEGACY_SERVER_CONNECT":4,"SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER":32,"SSL_OP_MICROSOFT_SESS_ID_BUG":1,"SSL_OP_MSIE_SSLV2_RSA_PADDING":0,"SSL_OP_NETSCAPE_CA_DN_BUG":536870912,"SSL_OP_NETSCAPE_CHALLENGE_BUG":2,"SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG":1073741824,"SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG":8,"SSL_OP_NO_COMPRESSION":131072,"SSL_OP_NO_QUERY_MTU":4096,"SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION":65536,"SSL_OP_NO_SSLv2":16777216,"SSL_OP_NO_SSLv3":33554432,"SSL_OP_NO_TICKET":16384,"SSL_OP_NO_TLSv1":67108864,"SSL_OP_NO_TLSv1_1":268435456,"SSL_OP_NO_TLSv1_2":134217728,"SSL_OP_PKCS1_CHECK_1":0,"SSL_OP_PKCS1_CHECK_2":0,"SSL_OP_SINGLE_DH_USE":1048576,"SSL_OP_SINGLE_ECDH_USE":524288,"SSL_OP_SSLEAY_080_CLIENT_DH_BUG":128,"SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG":0,"SSL_OP_TLS_BLOCK_PADDING_BUG":512,"SSL_OP_TLS_D5_BUG":256,"SSL_OP_TLS_ROLLBACK_BUG":8388608,"ENGINE_METHOD_DSA":2,"ENGINE_METHOD_DH":4,"ENGINE_METHOD_RAND":8,"ENGINE_METHOD_ECDH":16,"ENGINE_METHOD_ECDSA":32,"ENGINE_METHOD_CIPHERS":64,"ENGINE_METHOD_DIGESTS":128,"ENGINE_METHOD_STORE":256,"ENGINE_METHOD_PKEY_METHS":512,"ENGINE_METHOD_PKEY_ASN1_METHS":1024,"ENGINE_METHOD_ALL":65535,"ENGINE_METHOD_NONE":0,"DH_CHECK_P_NOT_SAFE_PRIME":2,"DH_CHECK_P_NOT_PRIME":1,"DH_UNABLE_TO_CHECK_GENERATOR":4,"DH_NOT_SUITABLE_GENERATOR":8,"NPN_ENABLED":1,"RSA_PKCS1_PADDING":1,"RSA_SSLV23_PADDING":2,"RSA_NO_PADDING":3,"RSA_PKCS1_OAEP_PADDING":4,"RSA_X931_PADDING":5,"RSA_PKCS1_PSS_PADDING":6,"POINT_CONVERSION_COMPRESSED":2,"POINT_CONVERSION_UNCOMPRESSED":4,"POINT_CONVERSION_HYBRID":6,"F_OK":0,"R_OK":4,"W_OK":2,"X_OK":1,"UV_UDP_REUSEADDR":4}'
      );
    },
    '../../node_modules/core-util-is/lib/util.js': function (e, t, r) {
      (function (e) {
        function r(e) {
          return Object.prototype.toString.call(e);
        }
        (t.isArray = function (e) {
          return Array.isArray ? Array.isArray(e) : '[object Array]' === r(e);
        }),
          (t.isBoolean = function (e) {
            return 'boolean' === typeof e;
          }),
          (t.isNull = function (e) {
            return null === e;
          }),
          (t.isNullOrUndefined = function (e) {
            return null == e;
          }),
          (t.isNumber = function (e) {
            return 'number' === typeof e;
          }),
          (t.isString = function (e) {
            return 'string' === typeof e;
          }),
          (t.isSymbol = function (e) {
            return 'symbol' === typeof e;
          }),
          (t.isUndefined = function (e) {
            return void 0 === e;
          }),
          (t.isRegExp = function (e) {
            return '[object RegExp]' === r(e);
          }),
          (t.isObject = function (e) {
            return 'object' === typeof e && null !== e;
          }),
          (t.isDate = function (e) {
            return '[object Date]' === r(e);
          }),
          (t.isError = function (e) {
            return '[object Error]' === r(e) || e instanceof Error;
          }),
          (t.isFunction = function (e) {
            return 'function' === typeof e;
          }),
          (t.isPrimitive = function (e) {
            return (
              null === e ||
              'boolean' === typeof e ||
              'number' === typeof e ||
              'string' === typeof e ||
              'symbol' === typeof e ||
              'undefined' === typeof e
            );
          }),
          (t.isBuffer = e.isBuffer);
      }.call(
        this,
        r('../../node_modules/node-libs-browser/node_modules/buffer/index.js')
          .Buffer
      ));
    },
    '../../node_modules/inherits/inherits_browser.js': function (e, t) {
      'function' === typeof Object.create
        ? (e.exports = function (e, t) {
            t &&
              ((e.super_ = t),
              (e.prototype = Object.create(t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })));
          })
        : (e.exports = function (e, t) {
            if (t) {
              e.super_ = t;
              var r = function () {};
              (r.prototype = t.prototype),
                (e.prototype = new r()),
                (e.prototype.constructor = e);
            }
          });
    },
    '../../node_modules/node-libs-browser/node_modules/events/events.js':
      function (e, t, r) {
        'use strict';
        var n,
          i = 'object' === typeof Reflect ? Reflect : null,
          o =
            i && 'function' === typeof i.apply
              ? i.apply
              : function (e, t, r) {
                  return Function.prototype.apply.call(e, t, r);
                };
        n =
          i && 'function' === typeof i.ownKeys
            ? i.ownKeys
            : Object.getOwnPropertySymbols
            ? function (e) {
                return Object.getOwnPropertyNames(e).concat(
                  Object.getOwnPropertySymbols(e)
                );
              }
            : function (e) {
                return Object.getOwnPropertyNames(e);
              };
        var s =
          Number.isNaN ||
          function (e) {
            return e !== e;
          };

        function a() {
          a.init.call(this);
        }
        (e.exports = a),
          (a.EventEmitter = a),
          (a.prototype._events = void 0),
          (a.prototype._eventsCount = 0),
          (a.prototype._maxListeners = void 0);
        var l = 10;

        function u(e) {
          return void 0 === e._maxListeners
            ? a.defaultMaxListeners
            : e._maxListeners;
        }

        function d(e, t, r, n) {
          var i, o, s, a;
          if ('function' !== typeof r)
            throw new TypeError(
              'The "listener" argument must be of type Function. Received type ' +
                typeof r
            );
          if (
            (void 0 === (o = e._events)
              ? ((o = e._events = Object.create(null)), (e._eventsCount = 0))
              : (void 0 !== o.newListener &&
                  (e.emit('newListener', t, r.listener ? r.listener : r),
                  (o = e._events)),
                (s = o[t])),
            void 0 === s)
          )
            (s = o[t] = r), ++e._eventsCount;
          else if (
            ('function' === typeof s
              ? (s = o[t] = n ? [r, s] : [s, r])
              : n
              ? s.unshift(r)
              : s.push(r),
            (i = u(e)) > 0 && s.length > i && !s.warned)
          ) {
            s.warned = !0;
            var l = new Error(
              'Possible EventEmitter memory leak detected. ' +
                s.length +
                ' ' +
                String(t) +
                ' listeners added. Use emitter.setMaxListeners() to increase limit'
            );
            (l.name = 'MaxListenersExceededWarning'),
              (l.emitter = e),
              (l.type = t),
              (l.count = s.length),
              (a = l),
              console && console.warn && console.warn(a);
          }
          return e;
        }

        function f() {
          for (var e = [], t = 0; t < arguments.length; t++)
            e.push(arguments[t]);
          this.fired ||
            (this.target.removeListener(this.type, this.wrapFn),
            (this.fired = !0),
            o(this.listener, this.target, e));
        }

        function c(e, t, r) {
          var n = {
              fired: !1,
              wrapFn: void 0,
              target: e,
              type: t,
              listener: r,
            },
            i = f.bind(n);
          return (i.listener = r), (n.wrapFn = i), i;
        }

        function h(e, t, r) {
          var n = e._events;
          if (void 0 === n) return [];
          var i = n[t];
          return void 0 === i
            ? []
            : 'function' === typeof i
            ? r
              ? [i.listener || i]
              : [i]
            : r
            ? (function (e) {
                for (var t = new Array(e.length), r = 0; r < t.length; ++r)
                  t[r] = e[r].listener || e[r];
                return t;
              })(i)
            : _(i, i.length);
        }

        function p(e) {
          var t = this._events;
          if (void 0 !== t) {
            var r = t[e];
            if ('function' === typeof r) return 1;
            if (void 0 !== r) return r.length;
          }
          return 0;
        }

        function _(e, t) {
          for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
          return r;
        }
        Object.defineProperty(a, 'defaultMaxListeners', {
          enumerable: !0,
          get: function () {
            return l;
          },
          set: function (e) {
            if ('number' !== typeof e || e < 0 || s(e))
              throw new RangeError(
                'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                  e +
                  '.'
              );
            l = e;
          },
        }),
          (a.init = function () {
            (void 0 !== this._events &&
              this._events !== Object.getPrototypeOf(this)._events) ||
              ((this._events = Object.create(null)), (this._eventsCount = 0)),
              (this._maxListeners = this._maxListeners || void 0);
          }),
          (a.prototype.setMaxListeners = function (e) {
            if ('number' !== typeof e || e < 0 || s(e))
              throw new RangeError(
                'The value of "n" is out of range. It must be a non-negative number. Received ' +
                  e +
                  '.'
              );
            return (this._maxListeners = e), this;
          }),
          (a.prototype.getMaxListeners = function () {
            return u(this);
          }),
          (a.prototype.emit = function (e) {
            for (var t = [], r = 1; r < arguments.length; r++)
              t.push(arguments[r]);
            var n = 'error' === e,
              i = this._events;
            if (void 0 !== i) n = n && void 0 === i.error;
            else if (!n) return !1;
            if (n) {
              var s;
              if ((t.length > 0 && (s = t[0]), s instanceof Error)) throw s;
              var a = new Error(
                'Unhandled error.' + (s ? ' (' + s.message + ')' : '')
              );
              throw ((a.context = s), a);
            }
            var l = i[e];
            if (void 0 === l) return !1;
            if ('function' === typeof l) o(l, this, t);
            else {
              var u = l.length,
                d = _(l, u);
              for (r = 0; r < u; ++r) o(d[r], this, t);
            }
            return !0;
          }),
          (a.prototype.addListener = function (e, t) {
            return d(this, e, t, !1);
          }),
          (a.prototype.on = a.prototype.addListener),
          (a.prototype.prependListener = function (e, t) {
            return d(this, e, t, !0);
          }),
          (a.prototype.once = function (e, t) {
            if ('function' !== typeof t)
              throw new TypeError(
                'The "listener" argument must be of type Function. Received type ' +
                  typeof t
              );
            return this.on(e, c(this, e, t)), this;
          }),
          (a.prototype.prependOnceListener = function (e, t) {
            if ('function' !== typeof t)
              throw new TypeError(
                'The "listener" argument must be of type Function. Received type ' +
                  typeof t
              );
            return this.prependListener(e, c(this, e, t)), this;
          }),
          (a.prototype.removeListener = function (e, t) {
            var r, n, i, o, s;
            if ('function' !== typeof t)
              throw new TypeError(
                'The "listener" argument must be of type Function. Received type ' +
                  typeof t
              );
            if (void 0 === (n = this._events)) return this;
            if (void 0 === (r = n[e])) return this;
            if (r === t || r.listener === t)
              0 === --this._eventsCount
                ? (this._events = Object.create(null))
                : (delete n[e],
                  n.removeListener &&
                    this.emit('removeListener', e, r.listener || t));
            else if ('function' !== typeof r) {
              for (i = -1, o = r.length - 1; o >= 0; o--)
                if (r[o] === t || r[o].listener === t) {
                  (s = r[o].listener), (i = o);
                  break;
                }
              if (i < 0) return this;
              0 === i
                ? r.shift()
                : (function (e, t) {
                    for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                    e.pop();
                  })(r, i),
                1 === r.length && (n[e] = r[0]),
                void 0 !== n.removeListener &&
                  this.emit('removeListener', e, s || t);
            }
            return this;
          }),
          (a.prototype.off = a.prototype.removeListener),
          (a.prototype.removeAllListeners = function (e) {
            var t, r, n;
            if (void 0 === (r = this._events)) return this;
            if (void 0 === r.removeListener)
              return (
                0 === arguments.length
                  ? ((this._events = Object.create(null)),
                    (this._eventsCount = 0))
                  : void 0 !== r[e] &&
                    (0 === --this._eventsCount
                      ? (this._events = Object.create(null))
                      : delete r[e]),
                this
              );
            if (0 === arguments.length) {
              var i,
                o = Object.keys(r);
              for (n = 0; n < o.length; ++n)
                'removeListener' !== (i = o[n]) && this.removeAllListeners(i);
              return (
                this.removeAllListeners('removeListener'),
                (this._events = Object.create(null)),
                (this._eventsCount = 0),
                this
              );
            }
            if ('function' === typeof (t = r[e])) this.removeListener(e, t);
            else if (void 0 !== t)
              for (n = t.length - 1; n >= 0; n--) this.removeListener(e, t[n]);
            return this;
          }),
          (a.prototype.listeners = function (e) {
            return h(this, e, !0);
          }),
          (a.prototype.rawListeners = function (e) {
            return h(this, e, !1);
          }),
          (a.listenerCount = function (e, t) {
            return 'function' === typeof e.listenerCount
              ? e.listenerCount(t)
              : p.call(e, t);
          }),
          (a.prototype.listenerCount = p),
          (a.prototype.eventNames = function () {
            return this._eventsCount > 0 ? n(this._events) : [];
          });
      },
    '../../node_modules/node-libs-browser/node_modules/stream-browserify/index.js':
      function (e, t, r) {
        e.exports = i;
        var n = r(
          '../../node_modules/node-libs-browser/node_modules/events/events.js'
        ).EventEmitter;

        function i() {
          n.call(this);
        }
        r(
          '../../node_modules/node-libs-browser/node_modules/stream-browserify/node_modules/inherits/inherits_browser.js'
        )(i, n),
          (i.Readable = r(
            '../../node_modules/readable-stream/readable-browser.js'
          )),
          (i.Writable = r(
            '../../node_modules/readable-stream/writable-browser.js'
          )),
          (i.Duplex = r(
            '../../node_modules/readable-stream/duplex-browser.js'
          )),
          (i.Transform = r('../../node_modules/readable-stream/transform.js')),
          (i.PassThrough = r(
            '../../node_modules/readable-stream/passthrough.js'
          )),
          (i.Stream = i),
          (i.prototype.pipe = function (e, t) {
            var r = this;

            function i(t) {
              e.writable && !1 === e.write(t) && r.pause && r.pause();
            }

            function o() {
              r.readable && r.resume && r.resume();
            }
            r.on('data', i),
              e.on('drain', o),
              e._isStdio ||
                (t && !1 === t.end) ||
                (r.on('end', a), r.on('close', l));
            var s = !1;

            function a() {
              s || ((s = !0), e.end());
            }

            function l() {
              s || ((s = !0), 'function' === typeof e.destroy && e.destroy());
            }

            function u(e) {
              if ((d(), 0 === n.listenerCount(this, 'error'))) throw e;
            }

            function d() {
              r.removeListener('data', i),
                e.removeListener('drain', o),
                r.removeListener('end', a),
                r.removeListener('close', l),
                r.removeListener('error', u),
                e.removeListener('error', u),
                r.removeListener('end', d),
                r.removeListener('close', d),
                e.removeListener('close', d);
            }
            return (
              r.on('error', u),
              e.on('error', u),
              r.on('end', d),
              r.on('close', d),
              e.on('close', d),
              e.emit('pipe', r),
              e
            );
          });
      },
    '../../node_modules/node-libs-browser/node_modules/stream-browserify/node_modules/inherits/inherits_browser.js':
      function (e, t) {
        'function' === typeof Object.create
          ? (e.exports = function (e, t) {
              t &&
                ((e.super_ = t),
                (e.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })));
            })
          : (e.exports = function (e, t) {
              if (t) {
                e.super_ = t;
                var r = function () {};
                (r.prototype = t.prototype),
                  (e.prototype = new r()),
                  (e.prototype.constructor = e);
              }
            });
      },
    '../../node_modules/node-libs-browser/node_modules/string_decoder/lib/string_decoder.js':
      function (e, t, r) {
        'use strict';
        var n = r('../../node_modules/safe-buffer/index.js').Buffer,
          i =
            n.isEncoding ||
            function (e) {
              switch ((e = '' + e) && e.toLowerCase()) {
                case 'hex':
                case 'utf8':
                case 'utf-8':
                case 'ascii':
                case 'binary':
                case 'base64':
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                case 'raw':
                  return !0;
                default:
                  return !1;
              }
            };

        function o(e) {
          var t;
          switch (
            ((this.encoding = (function (e) {
              var t = (function (e) {
                if (!e) return 'utf8';
                for (var t; ; )
                  switch (e) {
                    case 'utf8':
                    case 'utf-8':
                      return 'utf8';
                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                      return 'utf16le';
                    case 'latin1':
                    case 'binary':
                      return 'latin1';
                    case 'base64':
                    case 'ascii':
                    case 'hex':
                      return e;
                    default:
                      if (t) return;
                      (e = ('' + e).toLowerCase()), (t = !0);
                  }
              })(e);
              if ('string' !== typeof t && (n.isEncoding === i || !i(e)))
                throw new Error('Unknown encoding: ' + e);
              return t || e;
            })(e)),
            this.encoding)
          ) {
            case 'utf16le':
              (this.text = l), (this.end = u), (t = 4);
              break;
            case 'utf8':
              (this.fillLast = a), (t = 4);
              break;
            case 'base64':
              (this.text = d), (this.end = f), (t = 3);
              break;
            default:
              return (this.write = c), void (this.end = h);
          }
          (this.lastNeed = 0),
            (this.lastTotal = 0),
            (this.lastChar = n.allocUnsafe(t));
        }

        function s(e) {
          return e <= 127
            ? 0
            : e >> 5 === 6
            ? 2
            : e >> 4 === 14
            ? 3
            : e >> 3 === 30
            ? 4
            : e >> 6 === 2
            ? -1
            : -2;
        }

        function a(e) {
          var t = this.lastTotal - this.lastNeed,
            r = (function (e, t, r) {
              if (128 !== (192 & t[0])) return (e.lastNeed = 0), '\ufffd';
              if (e.lastNeed > 1 && t.length > 1) {
                if (128 !== (192 & t[1])) return (e.lastNeed = 1), '\ufffd';
                if (e.lastNeed > 2 && t.length > 2 && 128 !== (192 & t[2]))
                  return (e.lastNeed = 2), '\ufffd';
              }
            })(this, e);
          return void 0 !== r
            ? r
            : this.lastNeed <= e.length
            ? (e.copy(this.lastChar, t, 0, this.lastNeed),
              this.lastChar.toString(this.encoding, 0, this.lastTotal))
            : (e.copy(this.lastChar, t, 0, e.length),
              void (this.lastNeed -= e.length));
        }

        function l(e, t) {
          if ((e.length - t) % 2 === 0) {
            var r = e.toString('utf16le', t);
            if (r) {
              var n = r.charCodeAt(r.length - 1);
              if (n >= 55296 && n <= 56319)
                return (
                  (this.lastNeed = 2),
                  (this.lastTotal = 4),
                  (this.lastChar[0] = e[e.length - 2]),
                  (this.lastChar[1] = e[e.length - 1]),
                  r.slice(0, -1)
                );
            }
            return r;
          }
          return (
            (this.lastNeed = 1),
            (this.lastTotal = 2),
            (this.lastChar[0] = e[e.length - 1]),
            e.toString('utf16le', t, e.length - 1)
          );
        }

        function u(e) {
          var t = e && e.length ? this.write(e) : '';
          if (this.lastNeed) {
            var r = this.lastTotal - this.lastNeed;
            return t + this.lastChar.toString('utf16le', 0, r);
          }
          return t;
        }

        function d(e, t) {
          var r = (e.length - t) % 3;
          return 0 === r
            ? e.toString('base64', t)
            : ((this.lastNeed = 3 - r),
              (this.lastTotal = 3),
              1 === r
                ? (this.lastChar[0] = e[e.length - 1])
                : ((this.lastChar[0] = e[e.length - 2]),
                  (this.lastChar[1] = e[e.length - 1])),
              e.toString('base64', t, e.length - r));
        }

        function f(e) {
          var t = e && e.length ? this.write(e) : '';
          return this.lastNeed
            ? t + this.lastChar.toString('base64', 0, 3 - this.lastNeed)
            : t;
        }

        function c(e) {
          return e.toString(this.encoding);
        }

        function h(e) {
          return e && e.length ? this.write(e) : '';
        }
        (t.StringDecoder = o),
          (o.prototype.write = function (e) {
            if (0 === e.length) return '';
            var t, r;
            if (this.lastNeed) {
              if (void 0 === (t = this.fillLast(e))) return '';
              (r = this.lastNeed), (this.lastNeed = 0);
            } else r = 0;
            return r < e.length
              ? t
                ? t + this.text(e, r)
                : this.text(e, r)
              : t || '';
          }),
          (o.prototype.end = function (e) {
            var t = e && e.length ? this.write(e) : '';
            return this.lastNeed ? t + '\ufffd' : t;
          }),
          (o.prototype.text = function (e, t) {
            var r = (function (e, t, r) {
              var n = t.length - 1;
              if (n < r) return 0;
              var i = s(t[n]);
              if (i >= 0) return i > 0 && (e.lastNeed = i - 1), i;
              if (--n < r || -2 === i) return 0;
              if ((i = s(t[n])) >= 0) return i > 0 && (e.lastNeed = i - 2), i;
              if (--n < r || -2 === i) return 0;
              if ((i = s(t[n])) >= 0)
                return i > 0 && (2 === i ? (i = 0) : (e.lastNeed = i - 3)), i;
              return 0;
            })(this, e, t);
            if (!this.lastNeed) return e.toString('utf8', t);
            this.lastTotal = r;
            var n = e.length - (r - this.lastNeed);
            return e.copy(this.lastChar, 0, n), e.toString('utf8', t, n);
          }),
          (o.prototype.fillLast = function (e) {
            if (this.lastNeed <= e.length)
              return (
                e.copy(
                  this.lastChar,
                  this.lastTotal - this.lastNeed,
                  0,
                  this.lastNeed
                ),
                this.lastChar.toString(this.encoding, 0, this.lastTotal)
              );
            e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
              (this.lastNeed -= e.length);
          });
      },
    '../../node_modules/process-nextick-args/index.js': function (e, t, r) {
      'use strict';
      (function (t) {
        'undefined' === typeof t ||
        !t.version ||
        0 === t.version.indexOf('v0.') ||
        (0 === t.version.indexOf('v1.') && 0 !== t.version.indexOf('v1.8.'))
          ? (e.exports = {
              nextTick: function (e, r, n, i) {
                if ('function' !== typeof e)
                  throw new TypeError('"callback" argument must be a function');
                var o,
                  s,
                  a = arguments.length;
                switch (a) {
                  case 0:
                  case 1:
                    return t.nextTick(e);
                  case 2:
                    return t.nextTick(function () {
                      e.call(null, r);
                    });
                  case 3:
                    return t.nextTick(function () {
                      e.call(null, r, n);
                    });
                  case 4:
                    return t.nextTick(function () {
                      e.call(null, r, n, i);
                    });
                  default:
                    for (o = new Array(a - 1), s = 0; s < o.length; )
                      o[s++] = arguments[s];
                    return t.nextTick(function () {
                      e.apply(null, o);
                    });
                }
              },
            })
          : (e.exports = t);
      }.call(this, r('../../node_modules/process/browser.js')));
    },
    '../../node_modules/react-is/cjs/react-is.production.min.js': function (
      e,
      t,
      r
    ) {
      'use strict';
      var n = 'function' === typeof Symbol && Symbol.for,
        i = n ? Symbol.for('react.element') : 60103,
        o = n ? Symbol.for('react.portal') : 60106,
        s = n ? Symbol.for('react.fragment') : 60107,
        a = n ? Symbol.for('react.strict_mode') : 60108,
        l = n ? Symbol.for('react.profiler') : 60114,
        u = n ? Symbol.for('react.provider') : 60109,
        d = n ? Symbol.for('react.context') : 60110,
        f = n ? Symbol.for('react.async_mode') : 60111,
        c = n ? Symbol.for('react.concurrent_mode') : 60111,
        h = n ? Symbol.for('react.forward_ref') : 60112,
        p = n ? Symbol.for('react.suspense') : 60113,
        _ = n ? Symbol.for('react.suspense_list') : 60120,
        b = n ? Symbol.for('react.memo') : 60115,
        m = n ? Symbol.for('react.lazy') : 60116,
        S = n ? Symbol.for('react.block') : 60121,
        y = n ? Symbol.for('react.fundamental') : 60117,
        g = n ? Symbol.for('react.responder') : 60118,
        E = n ? Symbol.for('react.scope') : 60119;

      function w(e) {
        if ('object' === typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case i:
              switch ((e = e.type)) {
                case f:
                case c:
                case s:
                case l:
                case a:
                case p:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case d:
                    case h:
                    case m:
                    case b:
                    case u:
                      return e;
                    default:
                      return t;
                  }
              }
            case o:
              return t;
          }
        }
      }

      function v(e) {
        return w(e) === c;
      }
      (t.AsyncMode = f),
        (t.ConcurrentMode = c),
        (t.ContextConsumer = d),
        (t.ContextProvider = u),
        (t.Element = i),
        (t.ForwardRef = h),
        (t.Fragment = s),
        (t.Lazy = m),
        (t.Memo = b),
        (t.Portal = o),
        (t.Profiler = l),
        (t.StrictMode = a),
        (t.Suspense = p),
        (t.isAsyncMode = function (e) {
          return v(e) || w(e) === f;
        }),
        (t.isConcurrentMode = v),
        (t.isContextConsumer = function (e) {
          return w(e) === d;
        }),
        (t.isContextProvider = function (e) {
          return w(e) === u;
        }),
        (t.isElement = function (e) {
          return 'object' === typeof e && null !== e && e.$$typeof === i;
        }),
        (t.isForwardRef = function (e) {
          return w(e) === h;
        }),
        (t.isFragment = function (e) {
          return w(e) === s;
        }),
        (t.isLazy = function (e) {
          return w(e) === m;
        }),
        (t.isMemo = function (e) {
          return w(e) === b;
        }),
        (t.isPortal = function (e) {
          return w(e) === o;
        }),
        (t.isProfiler = function (e) {
          return w(e) === l;
        }),
        (t.isStrictMode = function (e) {
          return w(e) === a;
        }),
        (t.isSuspense = function (e) {
          return w(e) === p;
        }),
        (t.isValidElementType = function (e) {
          return (
            'string' === typeof e ||
            'function' === typeof e ||
            e === s ||
            e === c ||
            e === l ||
            e === a ||
            e === p ||
            e === _ ||
            ('object' === typeof e &&
              null !== e &&
              (e.$$typeof === m ||
                e.$$typeof === b ||
                e.$$typeof === u ||
                e.$$typeof === d ||
                e.$$typeof === h ||
                e.$$typeof === y ||
                e.$$typeof === g ||
                e.$$typeof === E ||
                e.$$typeof === S))
          );
        }),
        (t.typeOf = w);
    },
    '../../node_modules/react-is/index.js': function (e, t, r) {
      'use strict';
      e.exports = r(
        '../../node_modules/react-is/cjs/react-is.production.min.js'
      );
    },
    '../../node_modules/readable-stream/duplex-browser.js': function (e, t, r) {
      e.exports = r('../../node_modules/readable-stream/lib/_stream_duplex.js');
    },
    '../../node_modules/readable-stream/lib/_stream_duplex.js': function (
      e,
      t,
      r
    ) {
      'use strict';
      var n = r('../../node_modules/process-nextick-args/index.js'),
        i =
          Object.keys ||
          function (e) {
            var t = [];
            for (var r in e) t.push(r);
            return t;
          };
      e.exports = f;
      var o = r('../../node_modules/core-util-is/lib/util.js');
      o.inherits = r('../../node_modules/inherits/inherits_browser.js');
      var s = r('../../node_modules/readable-stream/lib/_stream_readable.js'),
        a = r('../../node_modules/readable-stream/lib/_stream_writable.js');
      o.inherits(f, s);
      for (var l = i(a.prototype), u = 0; u < l.length; u++) {
        var d = l[u];
        f.prototype[d] || (f.prototype[d] = a.prototype[d]);
      }

      function f(e) {
        if (!(this instanceof f)) return new f(e);
        s.call(this, e),
          a.call(this, e),
          e && !1 === e.readable && (this.readable = !1),
          e && !1 === e.writable && (this.writable = !1),
          (this.allowHalfOpen = !0),
          e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1),
          this.once('end', c);
      }

      function c() {
        this.allowHalfOpen || this._writableState.ended || n.nextTick(h, this);
      }

      function h(e) {
        e.end();
      }
      Object.defineProperty(f.prototype, 'writableHighWaterMark', {
        enumerable: !1,
        get: function () {
          return this._writableState.highWaterMark;
        },
      }),
        Object.defineProperty(f.prototype, 'destroyed', {
          get: function () {
            return (
              void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              this._readableState.destroyed &&
              this._writableState.destroyed
            );
          },
          set: function (e) {
            void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              ((this._readableState.destroyed = e),
              (this._writableState.destroyed = e));
          },
        }),
        (f.prototype._destroy = function (e, t) {
          this.push(null), this.end(), n.nextTick(t, e);
        });
    },
    '../../node_modules/readable-stream/lib/_stream_passthrough.js': function (
      e,
      t,
      r
    ) {
      'use strict';
      e.exports = o;
      var n = r('../../node_modules/readable-stream/lib/_stream_transform.js'),
        i = r('../../node_modules/core-util-is/lib/util.js');

      function o(e) {
        if (!(this instanceof o)) return new o(e);
        n.call(this, e);
      }
      (i.inherits = r('../../node_modules/inherits/inherits_browser.js')),
        i.inherits(o, n),
        (o.prototype._transform = function (e, t, r) {
          r(null, e);
        });
    },
    '../../node_modules/readable-stream/lib/_stream_readable.js': function (
      e,
      t,
      r
    ) {
      'use strict';
      (function (t, n) {
        var i = r('../../node_modules/process-nextick-args/index.js');
        e.exports = y;
        var o,
          s = r(
            '../../node_modules/readable-stream/node_modules/isarray/index.js'
          );
        y.ReadableState = S;
        r('../../node_modules/node-libs-browser/node_modules/events/events.js')
          .EventEmitter;
        var a = function (e, t) {
            return e.listeners(t).length;
          },
          l = r(
            '../../node_modules/readable-stream/lib/internal/streams/stream-browser.js'
          ),
          u = r(
            '../../node_modules/readable-stream/node_modules/safe-buffer/index.js'
          ).Buffer,
          d = t.Uint8Array || function () {};
        var f = r('../../node_modules/core-util-is/lib/util.js');
        f.inherits = r('../../node_modules/inherits/inherits_browser.js');
        var c = r(1),
          h = void 0;
        h = c && c.debuglog ? c.debuglog('stream') : function () {};
        var p,
          _ = r(
            '../../node_modules/readable-stream/lib/internal/streams/BufferList.js'
          ),
          b = r(
            '../../node_modules/readable-stream/lib/internal/streams/destroy.js'
          );
        f.inherits(y, l);
        var m = ['error', 'close', 'destroy', 'pause', 'resume'];

        function S(e, t) {
          e = e || {};
          var n =
            t instanceof
            (o =
              o ||
              r('../../node_modules/readable-stream/lib/_stream_duplex.js'));
          (this.objectMode = !!e.objectMode),
            n && (this.objectMode = this.objectMode || !!e.readableObjectMode);
          var i = e.highWaterMark,
            s = e.readableHighWaterMark,
            a = this.objectMode ? 16 : 16384;
          (this.highWaterMark = i || 0 === i ? i : n && (s || 0 === s) ? s : a),
            (this.highWaterMark = Math.floor(this.highWaterMark)),
            (this.buffer = new _()),
            (this.length = 0),
            (this.pipes = null),
            (this.pipesCount = 0),
            (this.flowing = null),
            (this.ended = !1),
            (this.endEmitted = !1),
            (this.reading = !1),
            (this.sync = !0),
            (this.needReadable = !1),
            (this.emittedReadable = !1),
            (this.readableListening = !1),
            (this.resumeScheduled = !1),
            (this.destroyed = !1),
            (this.defaultEncoding = e.defaultEncoding || 'utf8'),
            (this.awaitDrain = 0),
            (this.readingMore = !1),
            (this.decoder = null),
            (this.encoding = null),
            e.encoding &&
              (p ||
                (p = r(
                  '../../node_modules/node-libs-browser/node_modules/string_decoder/lib/string_decoder.js'
                ).StringDecoder),
              (this.decoder = new p(e.encoding)),
              (this.encoding = e.encoding));
        }

        function y(e) {
          if (
            ((o =
              o ||
              r('../../node_modules/readable-stream/lib/_stream_duplex.js')),
            !(this instanceof y))
          )
            return new y(e);
          (this._readableState = new S(e, this)),
            (this.readable = !0),
            e &&
              ('function' === typeof e.read && (this._read = e.read),
              'function' === typeof e.destroy && (this._destroy = e.destroy)),
            l.call(this);
        }

        function g(e, t, r, n, i) {
          var o,
            s = e._readableState;
          null === t
            ? ((s.reading = !1),
              (function (e, t) {
                if (t.ended) return;
                if (t.decoder) {
                  var r = t.decoder.end();
                  r &&
                    r.length &&
                    (t.buffer.push(r),
                    (t.length += t.objectMode ? 1 : r.length));
                }
                (t.ended = !0), v(e);
              })(e, s))
            : (i ||
                (o = (function (e, t) {
                  var r;
                  (n = t),
                    u.isBuffer(n) ||
                      n instanceof d ||
                      'string' === typeof t ||
                      void 0 === t ||
                      e.objectMode ||
                      (r = new TypeError('Invalid non-string/buffer chunk'));
                  var n;
                  return r;
                })(s, t)),
              o
                ? e.emit('error', o)
                : s.objectMode || (t && t.length > 0)
                ? ('string' === typeof t ||
                    s.objectMode ||
                    Object.getPrototypeOf(t) === u.prototype ||
                    (t = (function (e) {
                      return u.from(e);
                    })(t)),
                  n
                    ? s.endEmitted
                      ? e.emit(
                          'error',
                          new Error('stream.unshift() after end event')
                        )
                      : E(e, s, t, !0)
                    : s.ended
                    ? e.emit('error', new Error('stream.push() after EOF'))
                    : ((s.reading = !1),
                      s.decoder && !r
                        ? ((t = s.decoder.write(t)),
                          s.objectMode || 0 !== t.length
                            ? E(e, s, t, !1)
                            : N(e, s))
                        : E(e, s, t, !1)))
                : n || (s.reading = !1));
          return (function (e) {
            return (
              !e.ended &&
              (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
            );
          })(s);
        }

        function E(e, t, r, n) {
          t.flowing && 0 === t.length && !t.sync
            ? (e.emit('data', r), e.read(0))
            : ((t.length += t.objectMode ? 1 : r.length),
              n ? t.buffer.unshift(r) : t.buffer.push(r),
              t.needReadable && v(e)),
            N(e, t);
        }
        Object.defineProperty(y.prototype, 'destroyed', {
          get: function () {
            return (
              void 0 !== this._readableState && this._readableState.destroyed
            );
          },
          set: function (e) {
            this._readableState && (this._readableState.destroyed = e);
          },
        }),
          (y.prototype.destroy = b.destroy),
          (y.prototype._undestroy = b.undestroy),
          (y.prototype._destroy = function (e, t) {
            this.push(null), t(e);
          }),
          (y.prototype.push = function (e, t) {
            var r,
              n = this._readableState;
            return (
              n.objectMode
                ? (r = !0)
                : 'string' === typeof e &&
                  ((t = t || n.defaultEncoding) !== n.encoding &&
                    ((e = u.from(e, t)), (t = '')),
                  (r = !0)),
              g(this, e, t, !1, r)
            );
          }),
          (y.prototype.unshift = function (e) {
            return g(this, e, null, !0, !1);
          }),
          (y.prototype.isPaused = function () {
            return !1 === this._readableState.flowing;
          }),
          (y.prototype.setEncoding = function (e) {
            return (
              p ||
                (p = r(
                  '../../node_modules/node-libs-browser/node_modules/string_decoder/lib/string_decoder.js'
                ).StringDecoder),
              (this._readableState.decoder = new p(e)),
              (this._readableState.encoding = e),
              this
            );
          });

        function w(e, t) {
          return e <= 0 || (0 === t.length && t.ended)
            ? 0
            : t.objectMode
            ? 1
            : e !== e
            ? t.flowing && t.length
              ? t.buffer.head.data.length
              : t.length
            : (e > t.highWaterMark &&
                (t.highWaterMark = (function (e) {
                  return (
                    e >= 8388608
                      ? (e = 8388608)
                      : (e--,
                        (e |= e >>> 1),
                        (e |= e >>> 2),
                        (e |= e >>> 4),
                        (e |= e >>> 8),
                        (e |= e >>> 16),
                        e++),
                    e
                  );
                })(e)),
              e <= t.length
                ? e
                : t.ended
                ? t.length
                : ((t.needReadable = !0), 0));
        }

        function v(e) {
          var t = e._readableState;
          (t.needReadable = !1),
            t.emittedReadable ||
              (h('emitReadable', t.flowing),
              (t.emittedReadable = !0),
              t.sync ? i.nextTick(O, e) : O(e));
        }

        function O(e) {
          h('emit readable'), e.emit('readable'), j(e);
        }

        function N(e, t) {
          t.readingMore || ((t.readingMore = !0), i.nextTick(T, e, t));
        }

        function T(e, t) {
          for (
            var r = t.length;
            !t.reading &&
            !t.flowing &&
            !t.ended &&
            t.length < t.highWaterMark &&
            (h('maybeReadMore read 0'), e.read(0), r !== t.length);

          )
            r = t.length;
          t.readingMore = !1;
        }

        function R(e) {
          h('readable nexttick read 0'), e.read(0);
        }

        function L(e, t) {
          t.reading || (h('resume read 0'), e.read(0)),
            (t.resumeScheduled = !1),
            (t.awaitDrain = 0),
            e.emit('resume'),
            j(e),
            t.flowing && !t.reading && e.read(0);
        }

        function j(e) {
          var t = e._readableState;
          for (h('flow', t.flowing); t.flowing && null !== e.read(); );
        }

        function C(e, t) {
          return 0 === t.length
            ? null
            : (t.objectMode
                ? (r = t.buffer.shift())
                : !e || e >= t.length
                ? ((r = t.decoder
                    ? t.buffer.join('')
                    : 1 === t.buffer.length
                    ? t.buffer.head.data
                    : t.buffer.concat(t.length)),
                  t.buffer.clear())
                : (r = (function (e, t, r) {
                    var n;
                    e < t.head.data.length
                      ? ((n = t.head.data.slice(0, e)),
                        (t.head.data = t.head.data.slice(e)))
                      : (n =
                          e === t.head.data.length
                            ? t.shift()
                            : r
                            ? (function (e, t) {
                                var r = t.head,
                                  n = 1,
                                  i = r.data;
                                e -= i.length;
                                for (; (r = r.next); ) {
                                  var o = r.data,
                                    s = e > o.length ? o.length : e;
                                  if (
                                    (s === o.length
                                      ? (i += o)
                                      : (i += o.slice(0, e)),
                                    0 === (e -= s))
                                  ) {
                                    s === o.length
                                      ? (++n,
                                        r.next
                                          ? (t.head = r.next)
                                          : (t.head = t.tail = null))
                                      : ((t.head = r), (r.data = o.slice(s)));
                                    break;
                                  }
                                  ++n;
                                }
                                return (t.length -= n), i;
                              })(e, t)
                            : (function (e, t) {
                                var r = u.allocUnsafe(e),
                                  n = t.head,
                                  i = 1;
                                n.data.copy(r), (e -= n.data.length);
                                for (; (n = n.next); ) {
                                  var o = n.data,
                                    s = e > o.length ? o.length : e;
                                  if (
                                    (o.copy(r, r.length - e, 0, s),
                                    0 === (e -= s))
                                  ) {
                                    s === o.length
                                      ? (++i,
                                        n.next
                                          ? (t.head = n.next)
                                          : (t.head = t.tail = null))
                                      : ((t.head = n), (n.data = o.slice(s)));
                                    break;
                                  }
                                  ++i;
                                }
                                return (t.length -= i), r;
                              })(e, t));
                    return n;
                  })(e, t.buffer, t.decoder)),
              r);
          var r;
        }

        function I(e) {
          var t = e._readableState;
          if (t.length > 0)
            throw new Error('"endReadable()" called on non-empty stream');
          t.endEmitted || ((t.ended = !0), i.nextTick(P, t, e));
        }

        function P(e, t) {
          e.endEmitted ||
            0 !== e.length ||
            ((e.endEmitted = !0), (t.readable = !1), t.emit('end'));
        }

        function x(e, t) {
          for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
          return -1;
        }
        (y.prototype.read = function (e) {
          h('read', e), (e = parseInt(e, 10));
          var t = this._readableState,
            r = e;
          if (
            (0 !== e && (t.emittedReadable = !1),
            0 === e &&
              t.needReadable &&
              (t.length >= t.highWaterMark || t.ended))
          )
            return (
              h('read: emitReadable', t.length, t.ended),
              0 === t.length && t.ended ? I(this) : v(this),
              null
            );
          if (0 === (e = w(e, t)) && t.ended)
            return 0 === t.length && I(this), null;
          var n,
            i = t.needReadable;
          return (
            h('need readable', i),
            (0 === t.length || t.length - e < t.highWaterMark) &&
              h('length less than watermark', (i = !0)),
            t.ended || t.reading
              ? h('reading or ended', (i = !1))
              : i &&
                (h('do read'),
                (t.reading = !0),
                (t.sync = !0),
                0 === t.length && (t.needReadable = !0),
                this._read(t.highWaterMark),
                (t.sync = !1),
                t.reading || (e = w(r, t))),
            null === (n = e > 0 ? C(e, t) : null)
              ? ((t.needReadable = !0), (e = 0))
              : (t.length -= e),
            0 === t.length &&
              (t.ended || (t.needReadable = !0), r !== e && t.ended && I(this)),
            null !== n && this.emit('data', n),
            n
          );
        }),
          (y.prototype._read = function (e) {
            this.emit('error', new Error('_read() is not implemented'));
          }),
          (y.prototype.pipe = function (e, t) {
            var r = this,
              o = this._readableState;
            switch (o.pipesCount) {
              case 0:
                o.pipes = e;
                break;
              case 1:
                o.pipes = [o.pipes, e];
                break;
              default:
                o.pipes.push(e);
            }
            (o.pipesCount += 1), h('pipe count=%d opts=%j', o.pipesCount, t);
            var l =
              (!t || !1 !== t.end) && e !== n.stdout && e !== n.stderr ? d : y;

            function u(t, n) {
              h('onunpipe'),
                t === r &&
                  n &&
                  !1 === n.hasUnpiped &&
                  ((n.hasUnpiped = !0),
                  h('cleanup'),
                  e.removeListener('close', m),
                  e.removeListener('finish', S),
                  e.removeListener('drain', f),
                  e.removeListener('error', b),
                  e.removeListener('unpipe', u),
                  r.removeListener('end', d),
                  r.removeListener('end', y),
                  r.removeListener('data', _),
                  (c = !0),
                  !o.awaitDrain ||
                    (e._writableState && !e._writableState.needDrain) ||
                    f());
            }

            function d() {
              h('onend'), e.end();
            }
            o.endEmitted ? i.nextTick(l) : r.once('end', l), e.on('unpipe', u);
            var f = (function (e) {
              return function () {
                var t = e._readableState;
                h('pipeOnDrain', t.awaitDrain),
                  t.awaitDrain && t.awaitDrain--,
                  0 === t.awaitDrain &&
                    a(e, 'data') &&
                    ((t.flowing = !0), j(e));
              };
            })(r);
            e.on('drain', f);
            var c = !1;
            var p = !1;

            function _(t) {
              h('ondata'),
                (p = !1),
                !1 !== e.write(t) ||
                  p ||
                  (((1 === o.pipesCount && o.pipes === e) ||
                    (o.pipesCount > 1 && -1 !== x(o.pipes, e))) &&
                    !c &&
                    (h(
                      'false write response, pause',
                      r._readableState.awaitDrain
                    ),
                    r._readableState.awaitDrain++,
                    (p = !0)),
                  r.pause());
            }

            function b(t) {
              h('onerror', t),
                y(),
                e.removeListener('error', b),
                0 === a(e, 'error') && e.emit('error', t);
            }

            function m() {
              e.removeListener('finish', S), y();
            }

            function S() {
              h('onfinish'), e.removeListener('close', m), y();
            }

            function y() {
              h('unpipe'), r.unpipe(e);
            }
            return (
              r.on('data', _),
              (function (e, t, r) {
                if ('function' === typeof e.prependListener)
                  return e.prependListener(t, r);
                e._events && e._events[t]
                  ? s(e._events[t])
                    ? e._events[t].unshift(r)
                    : (e._events[t] = [r, e._events[t]])
                  : e.on(t, r);
              })(e, 'error', b),
              e.once('close', m),
              e.once('finish', S),
              e.emit('pipe', r),
              o.flowing || (h('pipe resume'), r.resume()),
              e
            );
          }),
          (y.prototype.unpipe = function (e) {
            var t = this._readableState,
              r = {
                hasUnpiped: !1,
              };
            if (0 === t.pipesCount) return this;
            if (1 === t.pipesCount)
              return (
                (e && e !== t.pipes) ||
                  (e || (e = t.pipes),
                  (t.pipes = null),
                  (t.pipesCount = 0),
                  (t.flowing = !1),
                  e && e.emit('unpipe', this, r)),
                this
              );
            if (!e) {
              var n = t.pipes,
                i = t.pipesCount;
              (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
              for (var o = 0; o < i; o++) n[o].emit('unpipe', this, r);
              return this;
            }
            var s = x(t.pipes, e);
            return (
              -1 === s ||
                (t.pipes.splice(s, 1),
                (t.pipesCount -= 1),
                1 === t.pipesCount && (t.pipes = t.pipes[0]),
                e.emit('unpipe', this, r)),
              this
            );
          }),
          (y.prototype.on = function (e, t) {
            var r = l.prototype.on.call(this, e, t);
            if ('data' === e)
              !1 !== this._readableState.flowing && this.resume();
            else if ('readable' === e) {
              var n = this._readableState;
              n.endEmitted ||
                n.readableListening ||
                ((n.readableListening = n.needReadable = !0),
                (n.emittedReadable = !1),
                n.reading ? n.length && v(this) : i.nextTick(R, this));
            }
            return r;
          }),
          (y.prototype.addListener = y.prototype.on),
          (y.prototype.resume = function () {
            var e = this._readableState;
            return (
              e.flowing ||
                (h('resume'),
                (e.flowing = !0),
                (function (e, t) {
                  t.resumeScheduled ||
                    ((t.resumeScheduled = !0), i.nextTick(L, e, t));
                })(this, e)),
              this
            );
          }),
          (y.prototype.pause = function () {
            return (
              h('call pause flowing=%j', this._readableState.flowing),
              !1 !== this._readableState.flowing &&
                (h('pause'),
                (this._readableState.flowing = !1),
                this.emit('pause')),
              this
            );
          }),
          (y.prototype.wrap = function (e) {
            var t = this,
              r = this._readableState,
              n = !1;
            for (var i in (e.on('end', function () {
              if ((h('wrapped end'), r.decoder && !r.ended)) {
                var e = r.decoder.end();
                e && e.length && t.push(e);
              }
              t.push(null);
            }),
            e.on('data', function (i) {
              (h('wrapped data'),
              r.decoder && (i = r.decoder.write(i)),
              !r.objectMode || (null !== i && void 0 !== i)) &&
                (r.objectMode || (i && i.length)) &&
                (t.push(i) || ((n = !0), e.pause()));
            }),
            e))
              void 0 === this[i] &&
                'function' === typeof e[i] &&
                (this[i] = (function (t) {
                  return function () {
                    return e[t].apply(e, arguments);
                  };
                })(i));
            for (var o = 0; o < m.length; o++)
              e.on(m[o], this.emit.bind(this, m[o]));
            return (
              (this._read = function (t) {
                h('wrapped _read', t), n && ((n = !1), e.resume());
              }),
              this
            );
          }),
          Object.defineProperty(y.prototype, 'readableHighWaterMark', {
            enumerable: !1,
            get: function () {
              return this._readableState.highWaterMark;
            },
          }),
          (y._fromList = C);
      }.call(
        this,
        r('../../node_modules/webpack/buildin/global.js'),
        r('../../node_modules/process/browser.js')
      ));
    },
    '../../node_modules/readable-stream/lib/_stream_transform.js': function (
      e,
      t,
      r
    ) {
      'use strict';
      e.exports = s;
      var n = r('../../node_modules/readable-stream/lib/_stream_duplex.js'),
        i = r('../../node_modules/core-util-is/lib/util.js');

      function o(e, t) {
        var r = this._transformState;
        r.transforming = !1;
        var n = r.writecb;
        if (!n)
          return this.emit(
            'error',
            new Error('write callback called multiple times')
          );
        (r.writechunk = null),
          (r.writecb = null),
          null != t && this.push(t),
          n(e);
        var i = this._readableState;
        (i.reading = !1),
          (i.needReadable || i.length < i.highWaterMark) &&
            this._read(i.highWaterMark);
      }

      function s(e) {
        if (!(this instanceof s)) return new s(e);
        n.call(this, e),
          (this._transformState = {
            afterTransform: o.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null,
          }),
          (this._readableState.needReadable = !0),
          (this._readableState.sync = !1),
          e &&
            ('function' === typeof e.transform &&
              (this._transform = e.transform),
            'function' === typeof e.flush && (this._flush = e.flush)),
          this.on('prefinish', a);
      }

      function a() {
        var e = this;
        'function' === typeof this._flush
          ? this._flush(function (t, r) {
              l(e, t, r);
            })
          : l(this, null, null);
      }

      function l(e, t, r) {
        if (t) return e.emit('error', t);
        if ((null != r && e.push(r), e._writableState.length))
          throw new Error('Calling transform done when ws.length != 0');
        if (e._transformState.transforming)
          throw new Error('Calling transform done when still transforming');
        return e.push(null);
      }
      (i.inherits = r('../../node_modules/inherits/inherits_browser.js')),
        i.inherits(s, n),
        (s.prototype.push = function (e, t) {
          return (
            (this._transformState.needTransform = !1),
            n.prototype.push.call(this, e, t)
          );
        }),
        (s.prototype._transform = function (e, t, r) {
          throw new Error('_transform() is not implemented');
        }),
        (s.prototype._write = function (e, t, r) {
          var n = this._transformState;
          if (
            ((n.writecb = r),
            (n.writechunk = e),
            (n.writeencoding = t),
            !n.transforming)
          ) {
            var i = this._readableState;
            (n.needTransform || i.needReadable || i.length < i.highWaterMark) &&
              this._read(i.highWaterMark);
          }
        }),
        (s.prototype._read = function (e) {
          var t = this._transformState;
          null !== t.writechunk && t.writecb && !t.transforming
            ? ((t.transforming = !0),
              this._transform(t.writechunk, t.writeencoding, t.afterTransform))
            : (t.needTransform = !0);
        }),
        (s.prototype._destroy = function (e, t) {
          var r = this;
          n.prototype._destroy.call(this, e, function (e) {
            t(e), r.emit('close');
          });
        });
    },
    '../../node_modules/readable-stream/lib/_stream_writable.js': function (
      e,
      t,
      r
    ) {
      'use strict';
      (function (t, n) {
        var i = r('../../node_modules/process-nextick-args/index.js');

        function o(e) {
          var t = this;
          (this.next = null),
            (this.entry = null),
            (this.finish = function () {
              !(function (e, t, r) {
                var n = e.entry;
                e.entry = null;
                for (; n; ) {
                  var i = n.callback;
                  t.pendingcb--, i(r), (n = n.next);
                }
                t.corkedRequestsFree
                  ? (t.corkedRequestsFree.next = e)
                  : (t.corkedRequestsFree = e);
              })(t, e);
            });
        }
        e.exports = m;
        var s,
          a =
            !t.browser && ['v0.10', 'v0.9.'].indexOf(t.version.slice(0, 5)) > -1
              ? setImmediate
              : i.nextTick;
        m.WritableState = b;
        var l = r('../../node_modules/core-util-is/lib/util.js');
        l.inherits = r('../../node_modules/inherits/inherits_browser.js');
        var u = {
            deprecate: r('../../node_modules/util-deprecate/browser.js'),
          },
          d = r(
            '../../node_modules/readable-stream/lib/internal/streams/stream-browser.js'
          ),
          f = r(
            '../../node_modules/readable-stream/node_modules/safe-buffer/index.js'
          ).Buffer,
          c = n.Uint8Array || function () {};
        var h,
          p = r(
            '../../node_modules/readable-stream/lib/internal/streams/destroy.js'
          );

        function _() {}

        function b(e, t) {
          (s =
            s || r('../../node_modules/readable-stream/lib/_stream_duplex.js')),
            (e = e || {});
          var n = t instanceof s;
          (this.objectMode = !!e.objectMode),
            n && (this.objectMode = this.objectMode || !!e.writableObjectMode);
          var l = e.highWaterMark,
            u = e.writableHighWaterMark,
            d = this.objectMode ? 16 : 16384;
          (this.highWaterMark = l || 0 === l ? l : n && (u || 0 === u) ? u : d),
            (this.highWaterMark = Math.floor(this.highWaterMark)),
            (this.finalCalled = !1),
            (this.needDrain = !1),
            (this.ending = !1),
            (this.ended = !1),
            (this.finished = !1),
            (this.destroyed = !1);
          var f = !1 === e.decodeStrings;
          (this.decodeStrings = !f),
            (this.defaultEncoding = e.defaultEncoding || 'utf8'),
            (this.length = 0),
            (this.writing = !1),
            (this.corked = 0),
            (this.sync = !0),
            (this.bufferProcessing = !1),
            (this.onwrite = function (e) {
              !(function (e, t) {
                var r = e._writableState,
                  n = r.sync,
                  o = r.writecb;
                if (
                  ((function (e) {
                    (e.writing = !1),
                      (e.writecb = null),
                      (e.length -= e.writelen),
                      (e.writelen = 0);
                  })(r),
                  t)
                )
                  !(function (e, t, r, n, o) {
                    --t.pendingcb,
                      r
                        ? (i.nextTick(o, n),
                          i.nextTick(v, e, t),
                          (e._writableState.errorEmitted = !0),
                          e.emit('error', n))
                        : (o(n),
                          (e._writableState.errorEmitted = !0),
                          e.emit('error', n),
                          v(e, t));
                  })(e, r, n, t, o);
                else {
                  var s = E(r);
                  s ||
                    r.corked ||
                    r.bufferProcessing ||
                    !r.bufferedRequest ||
                    g(e, r),
                    n ? a(y, e, r, s, o) : y(e, r, s, o);
                }
              })(t, e);
            }),
            (this.writecb = null),
            (this.writelen = 0),
            (this.bufferedRequest = null),
            (this.lastBufferedRequest = null),
            (this.pendingcb = 0),
            (this.prefinished = !1),
            (this.errorEmitted = !1),
            (this.bufferedRequestCount = 0),
            (this.corkedRequestsFree = new o(this));
        }

        function m(e) {
          if (
            ((s =
              s ||
              r('../../node_modules/readable-stream/lib/_stream_duplex.js')),
            !h.call(m, this) && !(this instanceof s))
          )
            return new m(e);
          (this._writableState = new b(e, this)),
            (this.writable = !0),
            e &&
              ('function' === typeof e.write && (this._write = e.write),
              'function' === typeof e.writev && (this._writev = e.writev),
              'function' === typeof e.destroy && (this._destroy = e.destroy),
              'function' === typeof e.final && (this._final = e.final)),
            d.call(this);
        }

        function S(e, t, r, n, i, o, s) {
          (t.writelen = n),
            (t.writecb = s),
            (t.writing = !0),
            (t.sync = !0),
            r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite),
            (t.sync = !1);
        }

        function y(e, t, r, n) {
          r ||
            (function (e, t) {
              0 === t.length &&
                t.needDrain &&
                ((t.needDrain = !1), e.emit('drain'));
            })(e, t),
            t.pendingcb--,
            n(),
            v(e, t);
        }

        function g(e, t) {
          t.bufferProcessing = !0;
          var r = t.bufferedRequest;
          if (e._writev && r && r.next) {
            var n = t.bufferedRequestCount,
              i = new Array(n),
              s = t.corkedRequestsFree;
            s.entry = r;
            for (var a = 0, l = !0; r; )
              (i[a] = r), r.isBuf || (l = !1), (r = r.next), (a += 1);
            (i.allBuffers = l),
              S(e, t, !0, t.length, i, '', s.finish),
              t.pendingcb++,
              (t.lastBufferedRequest = null),
              s.next
                ? ((t.corkedRequestsFree = s.next), (s.next = null))
                : (t.corkedRequestsFree = new o(t)),
              (t.bufferedRequestCount = 0);
          } else {
            for (; r; ) {
              var u = r.chunk,
                d = r.encoding,
                f = r.callback;
              if (
                (S(e, t, !1, t.objectMode ? 1 : u.length, u, d, f),
                (r = r.next),
                t.bufferedRequestCount--,
                t.writing)
              )
                break;
            }
            null === r && (t.lastBufferedRequest = null);
          }
          (t.bufferedRequest = r), (t.bufferProcessing = !1);
        }

        function E(e) {
          return (
            e.ending &&
            0 === e.length &&
            null === e.bufferedRequest &&
            !e.finished &&
            !e.writing
          );
        }

        function w(e, t) {
          e._final(function (r) {
            t.pendingcb--,
              r && e.emit('error', r),
              (t.prefinished = !0),
              e.emit('prefinish'),
              v(e, t);
          });
        }

        function v(e, t) {
          var r = E(t);
          return (
            r &&
              (!(function (e, t) {
                t.prefinished ||
                  t.finalCalled ||
                  ('function' === typeof e._final
                    ? (t.pendingcb++, (t.finalCalled = !0), i.nextTick(w, e, t))
                    : ((t.prefinished = !0), e.emit('prefinish')));
              })(e, t),
              0 === t.pendingcb && ((t.finished = !0), e.emit('finish'))),
            r
          );
        }
        l.inherits(m, d),
          (b.prototype.getBuffer = function () {
            for (var e = this.bufferedRequest, t = []; e; )
              t.push(e), (e = e.next);
            return t;
          }),
          (function () {
            try {
              Object.defineProperty(b.prototype, 'buffer', {
                get: u.deprecate(
                  function () {
                    return this.getBuffer();
                  },
                  '_writableState.buffer is deprecated. Use _writableState.getBuffer instead.',
                  'DEP0003'
                ),
              });
            } catch (e) {}
          })(),
          'function' === typeof Symbol &&
          Symbol.hasInstance &&
          'function' === typeof Function.prototype[Symbol.hasInstance]
            ? ((h = Function.prototype[Symbol.hasInstance]),
              Object.defineProperty(m, Symbol.hasInstance, {
                value: function (e) {
                  return (
                    !!h.call(this, e) ||
                    (this === m && e && e._writableState instanceof b)
                  );
                },
              }))
            : (h = function (e) {
                return e instanceof this;
              }),
          (m.prototype.pipe = function () {
            this.emit('error', new Error('Cannot pipe, not readable'));
          }),
          (m.prototype.write = function (e, t, r) {
            var n,
              o = this._writableState,
              s = !1,
              a = !o.objectMode && ((n = e), f.isBuffer(n) || n instanceof c);
            return (
              a &&
                !f.isBuffer(e) &&
                (e = (function (e) {
                  return f.from(e);
                })(e)),
              'function' === typeof t && ((r = t), (t = null)),
              a ? (t = 'buffer') : t || (t = o.defaultEncoding),
              'function' !== typeof r && (r = _),
              o.ended
                ? (function (e, t) {
                    var r = new Error('write after end');
                    e.emit('error', r), i.nextTick(t, r);
                  })(this, r)
                : (a ||
                    (function (e, t, r, n) {
                      var o = !0,
                        s = !1;
                      return (
                        null === r
                          ? (s = new TypeError(
                              'May not write null values to stream'
                            ))
                          : 'string' === typeof r ||
                            void 0 === r ||
                            t.objectMode ||
                            (s = new TypeError(
                              'Invalid non-string/buffer chunk'
                            )),
                        s && (e.emit('error', s), i.nextTick(n, s), (o = !1)),
                        o
                      );
                    })(this, o, e, r)) &&
                  (o.pendingcb++,
                  (s = (function (e, t, r, n, i, o) {
                    if (!r) {
                      var s = (function (e, t, r) {
                        e.objectMode ||
                          !1 === e.decodeStrings ||
                          'string' !== typeof t ||
                          (t = f.from(t, r));
                        return t;
                      })(t, n, i);
                      n !== s && ((r = !0), (i = 'buffer'), (n = s));
                    }
                    var a = t.objectMode ? 1 : n.length;
                    t.length += a;
                    var l = t.length < t.highWaterMark;
                    l || (t.needDrain = !0);
                    if (t.writing || t.corked) {
                      var u = t.lastBufferedRequest;
                      (t.lastBufferedRequest = {
                        chunk: n,
                        encoding: i,
                        isBuf: r,
                        callback: o,
                        next: null,
                      }),
                        u
                          ? (u.next = t.lastBufferedRequest)
                          : (t.bufferedRequest = t.lastBufferedRequest),
                        (t.bufferedRequestCount += 1);
                    } else S(e, t, !1, a, n, i, o);
                    return l;
                  })(this, o, a, e, t, r))),
              s
            );
          }),
          (m.prototype.cork = function () {
            this._writableState.corked++;
          }),
          (m.prototype.uncork = function () {
            var e = this._writableState;
            e.corked &&
              (e.corked--,
              e.writing ||
                e.corked ||
                e.finished ||
                e.bufferProcessing ||
                !e.bufferedRequest ||
                g(this, e));
          }),
          (m.prototype.setDefaultEncoding = function (e) {
            if (
              ('string' === typeof e && (e = e.toLowerCase()),
              !(
                [
                  'hex',
                  'utf8',
                  'utf-8',
                  'ascii',
                  'binary',
                  'base64',
                  'ucs2',
                  'ucs-2',
                  'utf16le',
                  'utf-16le',
                  'raw',
                ].indexOf((e + '').toLowerCase()) > -1
              ))
            )
              throw new TypeError('Unknown encoding: ' + e);
            return (this._writableState.defaultEncoding = e), this;
          }),
          Object.defineProperty(m.prototype, 'writableHighWaterMark', {
            enumerable: !1,
            get: function () {
              return this._writableState.highWaterMark;
            },
          }),
          (m.prototype._write = function (e, t, r) {
            r(new Error('_write() is not implemented'));
          }),
          (m.prototype._writev = null),
          (m.prototype.end = function (e, t, r) {
            var n = this._writableState;
            'function' === typeof e
              ? ((r = e), (e = null), (t = null))
              : 'function' === typeof t && ((r = t), (t = null)),
              null !== e && void 0 !== e && this.write(e, t),
              n.corked && ((n.corked = 1), this.uncork()),
              n.ending ||
                n.finished ||
                (function (e, t, r) {
                  (t.ending = !0),
                    v(e, t),
                    r && (t.finished ? i.nextTick(r) : e.once('finish', r));
                  (t.ended = !0), (e.writable = !1);
                })(this, n, r);
          }),
          Object.defineProperty(m.prototype, 'destroyed', {
            get: function () {
              return (
                void 0 !== this._writableState && this._writableState.destroyed
              );
            },
            set: function (e) {
              this._writableState && (this._writableState.destroyed = e);
            },
          }),
          (m.prototype.destroy = p.destroy),
          (m.prototype._undestroy = p.undestroy),
          (m.prototype._destroy = function (e, t) {
            this.end(), t(e);
          });
      }.call(
        this,
        r('../../node_modules/process/browser.js'),
        r('../../node_modules/webpack/buildin/global.js')
      ));
    },
    '../../node_modules/readable-stream/lib/internal/streams/BufferList.js':
      function (e, t, r) {
        'use strict';
        var n = r(
            '../../node_modules/readable-stream/node_modules/safe-buffer/index.js'
          ).Buffer,
          i = r(2);
        (e.exports = (function () {
          function e() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.head = null),
              (this.tail = null),
              (this.length = 0);
          }
          return (
            (e.prototype.push = function (e) {
              var t = {
                data: e,
                next: null,
              };
              this.length > 0 ? (this.tail.next = t) : (this.head = t),
                (this.tail = t),
                ++this.length;
            }),
            (e.prototype.unshift = function (e) {
              var t = {
                data: e,
                next: this.head,
              };
              0 === this.length && (this.tail = t),
                (this.head = t),
                ++this.length;
            }),
            (e.prototype.shift = function () {
              if (0 !== this.length) {
                var e = this.head.data;
                return (
                  1 === this.length
                    ? (this.head = this.tail = null)
                    : (this.head = this.head.next),
                  --this.length,
                  e
                );
              }
            }),
            (e.prototype.clear = function () {
              (this.head = this.tail = null), (this.length = 0);
            }),
            (e.prototype.join = function (e) {
              if (0 === this.length) return '';
              for (var t = this.head, r = '' + t.data; (t = t.next); )
                r += e + t.data;
              return r;
            }),
            (e.prototype.concat = function (e) {
              if (0 === this.length) return n.alloc(0);
              if (1 === this.length) return this.head.data;
              for (
                var t, r, i, o = n.allocUnsafe(e >>> 0), s = this.head, a = 0;
                s;

              )
                (t = s.data),
                  (r = o),
                  (i = a),
                  t.copy(r, i),
                  (a += s.data.length),
                  (s = s.next);
              return o;
            }),
            e
          );
        })()),
          i &&
            i.inspect &&
            i.inspect.custom &&
            (e.exports.prototype[i.inspect.custom] = function () {
              var e = i.inspect({
                length: this.length,
              });
              return this.constructor.name + ' ' + e;
            });
      },
    '../../node_modules/readable-stream/lib/internal/streams/destroy.js':
      function (e, t, r) {
        'use strict';
        var n = r('../../node_modules/process-nextick-args/index.js');

        function i(e, t) {
          e.emit('error', t);
        }
        e.exports = {
          destroy: function (e, t) {
            var r = this,
              o = this._readableState && this._readableState.destroyed,
              s = this._writableState && this._writableState.destroyed;
            return o || s
              ? (t
                  ? t(e)
                  : !e ||
                    (this._writableState && this._writableState.errorEmitted) ||
                    n.nextTick(i, this, e),
                this)
              : (this._readableState && (this._readableState.destroyed = !0),
                this._writableState && (this._writableState.destroyed = !0),
                this._destroy(e || null, function (e) {
                  !t && e
                    ? (n.nextTick(i, r, e),
                      r._writableState && (r._writableState.errorEmitted = !0))
                    : t && t(e);
                }),
                this);
          },
          undestroy: function () {
            this._readableState &&
              ((this._readableState.destroyed = !1),
              (this._readableState.reading = !1),
              (this._readableState.ended = !1),
              (this._readableState.endEmitted = !1)),
              this._writableState &&
                ((this._writableState.destroyed = !1),
                (this._writableState.ended = !1),
                (this._writableState.ending = !1),
                (this._writableState.finished = !1),
                (this._writableState.errorEmitted = !1));
          },
        };
      },
    '../../node_modules/readable-stream/lib/internal/streams/stream-browser.js':
      function (e, t, r) {
        e.exports = r(
          '../../node_modules/node-libs-browser/node_modules/events/events.js'
        ).EventEmitter;
      },
    '../../node_modules/readable-stream/node_modules/isarray/index.js':
      function (e, t) {
        var r = {}.toString;
        e.exports =
          Array.isArray ||
          function (e) {
            return '[object Array]' == r.call(e);
          };
      },
    '../../node_modules/readable-stream/node_modules/safe-buffer/index.js':
      function (e, t, r) {
        var n = r(
            '../../standalone-packages/codesandbox-browserfs/dist/shims/buffer.js'
          ),
          i = n.Buffer;

        function o(e, t) {
          for (var r in e) t[r] = e[r];
        }

        function s(e, t, r) {
          return i(e, t, r);
        }
        i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
          ? (e.exports = n)
          : (o(n, t), (t.Buffer = s)),
          o(i, s),
          (s.from = function (e, t, r) {
            if ('number' === typeof e)
              throw new TypeError('Argument must not be a number');
            return i(e, t, r);
          }),
          (s.alloc = function (e, t, r) {
            if ('number' !== typeof e)
              throw new TypeError('Argument must be a number');
            var n = i(e);
            return (
              void 0 !== t
                ? 'string' === typeof r
                  ? n.fill(t, r)
                  : n.fill(t)
                : n.fill(0),
              n
            );
          }),
          (s.allocUnsafe = function (e) {
            if ('number' !== typeof e)
              throw new TypeError('Argument must be a number');
            return i(e);
          }),
          (s.allocUnsafeSlow = function (e) {
            if ('number' !== typeof e)
              throw new TypeError('Argument must be a number');
            return n.SlowBuffer(e);
          });
      },
    '../../node_modules/readable-stream/passthrough.js': function (e, t, r) {
      e.exports = r(
        '../../node_modules/readable-stream/readable-browser.js'
      ).PassThrough;
    },
    '../../node_modules/readable-stream/readable-browser.js': function (
      e,
      t,
      r
    ) {
      ((t = e.exports =
        r(
          '../../node_modules/readable-stream/lib/_stream_readable.js'
        )).Stream = t),
        (t.Readable = t),
        (t.Writable = r(
          '../../node_modules/readable-stream/lib/_stream_writable.js'
        )),
        (t.Duplex = r(
          '../../node_modules/readable-stream/lib/_stream_duplex.js'
        )),
        (t.Transform = r(
          '../../node_modules/readable-stream/lib/_stream_transform.js'
        )),
        (t.PassThrough = r(
          '../../node_modules/readable-stream/lib/_stream_passthrough.js'
        ));
    },
    '../../node_modules/readable-stream/transform.js': function (e, t, r) {
      e.exports = r(
        '../../node_modules/readable-stream/readable-browser.js'
      ).Transform;
    },
    '../../node_modules/readable-stream/writable-browser.js': function (
      e,
      t,
      r
    ) {
      e.exports = r(
        '../../node_modules/readable-stream/lib/_stream_writable.js'
      );
    },
    '../../node_modules/safe-buffer/index.js': function (e, t, r) {
      var n = r(
          '../../standalone-packages/codesandbox-browserfs/dist/shims/buffer.js'
        ),
        i = n.Buffer;

      function o(e, t) {
        for (var r in e) t[r] = e[r];
      }

      function s(e, t, r) {
        return i(e, t, r);
      }
      i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
        ? (e.exports = n)
        : (o(n, t), (t.Buffer = s)),
        (s.prototype = Object.create(i.prototype)),
        o(i, s),
        (s.from = function (e, t, r) {
          if ('number' === typeof e)
            throw new TypeError('Argument must not be a number');
          return i(e, t, r);
        }),
        (s.alloc = function (e, t, r) {
          if ('number' !== typeof e)
            throw new TypeError('Argument must be a number');
          var n = i(e);
          return (
            void 0 !== t
              ? 'string' === typeof r
                ? n.fill(t, r)
                : n.fill(t)
              : n.fill(0),
            n
          );
        }),
        (s.allocUnsafe = function (e) {
          if ('number' !== typeof e)
            throw new TypeError('Argument must be a number');
          return i(e);
        }),
        (s.allocUnsafeSlow = function (e) {
          if ('number' !== typeof e)
            throw new TypeError('Argument must be a number');
          return n.SlowBuffer(e);
        });
    },
    '../../node_modules/util-deprecate/browser.js': function (e, t, r) {
      (function (t) {
        function r(e) {
          try {
            if (!t.localStorage) return !1;
          } catch (n) {
            return !1;
          }
          var r = t.localStorage[e];
          return null != r && 'true' === String(r).toLowerCase();
        }
        e.exports = function (e, t) {
          if (r('noDeprecation')) return e;
          var n = !1;
          return function () {
            if (!n) {
              if (r('throwDeprecation')) throw new Error(t);
              r('traceDeprecation') ? console.trace(t) : console.warn(t),
                (n = !0);
            }
            return e.apply(this, arguments);
          };
        };
      }.call(this, r('../../node_modules/webpack/buildin/global.js')));
    },
  },
]);
//# sourceMappingURL=0.84205e20b.chunk.js.map
