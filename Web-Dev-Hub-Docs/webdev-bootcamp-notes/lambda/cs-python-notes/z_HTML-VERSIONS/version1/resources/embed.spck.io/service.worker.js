'use strict';
const window = self;
importScripts('workers/fs.bundle.js');
const RUNTIME = 'runtime-kcj4vqb2tor';

function fetchWithCache(t) {
  return caches
    .match(t, {
      ignoreSearch: !0,
    })
    .then(function (i) {
      return (
        i ||
        caches.open(RUNTIME).then(function (i) {
          return fetch(t).then(function (e) {
            return 200 == e.status
              ? i
                  .put(t, e.clone())
                  .then(function () {
                    return e;
                  })
                  .catch(function (t) {
                    return ('string' == typeof t ? t : String(t)).includes(
                      'Quota'
                    )
                      ? caches.keys().then(function (t) {
                          return Promise.all(
                            t.map(function (t) {
                              return caches.delete(t);
                            })
                          ).then(function () {
                            return e;
                          });
                        })
                      : e;
                  })
              : e;
          });
        })
      );
    });
}
self.addEventListener('install', function (t) {
  t.waitUntil(self.skipWaiting());
}),
  self.addEventListener('activate', function (t) {
    const i = [RUNTIME];
    t.waitUntil(
      caches
        .keys()
        .then(function (t) {
          return Promise.all(
            t
              .filter(function (t) {
                return !i.includes(t);
              })
              .map(function (t) {
                return caches.delete(t);
              })
          );
        })
        .then(function () {
          self.clients.claim();
        })
    );
  }),
  self.addEventListener('fetch', function (t) {
    const i = self.location.origin,
      e = t.request.url,
      a = PathUtils.relativeTo(e, i).split('?')[0],
      o = e.includes('?') ? e.slice(e.indexOf('?')) : '';
    if (['', 'index', 'index.html', 'dark', 'dark.html'].includes(a))
      t.respondWith(
        ENV.settingsConfigPathAsync()
          .then((t) =>
            GFS.read(t, {
              encoding: 'utf8',
            }).then((t) => tryParseJSON(t) || {})
          )
          .then(({ dark: e }) => {
            let n = null;
            return (
              e && !a.includes('dark')
                ? (n = PathUtils.join(i, 'dark') + o)
                : !e && a.includes('dark') && (n = i + o),
              n ? Response.redirect(n, 302) : fetchWithCache(t.request)
            );
          })
      );
    else if (a.startsWith('run')) {
      const i = normalizeUrlPath(a.slice('run'.length + 1));
      t.respondWith(
        GFS.read(i).then((t) => {
          if (null != t) {
            const e = MIME_TYPES[PathUtils.ext(i).slice(1)] || 'text/plain';
            return new Response(
              new Blob([t], {
                type: e,
              }),
              {
                status: 200,
                statusText: 'OK',
                headers: {
                  'Content-Type': e,
                },
              }
            );
          }
          return new Response('', {
            status: 404,
            statusText: 'NOT FOUND',
          });
        })
      );
    } else
      i.includes('://localhost') ||
        a.startsWith('service.worker.js') ||
        !e.startsWith(i) ||
        a.startsWith('api') ||
        a.startsWith('proxy') ||
        t.respondWith(fetchWithCache(t.request));
  });
const MIME_TYPES = {
  '3g2': 'video/3gpp2',
  '3gp': 'video/3gpp',
  avi: 'video/x-msvideo',
  flv: 'video/x-flv',
  h261: 'video/h261',
  h263: 'video/h263',
  h264: 'video/h264',
  jpgm: 'video/jpm',
  jpgv: 'video/jpeg',
  jpm: 'video/jpm',
  m1v: 'video/mpeg',
  m2v: 'video/mpeg',
  m4u: 'video/vnd.mpegurl',
  m4v: 'video/mp4',
  mj2: 'video/mj2',
  mjp2: 'video/mj2',
  mk3d: 'video/x-matroska',
  mks: 'video/x-matroska',
  mkv: 'video/x-matroska',
  mov: 'video/quicktime',
  mp4: 'video/mp4',
  mp4v: 'video/mp4',
  mpe: 'video/mpeg',
  mpeg: 'video/mpeg',
  mpg: 'video/mpeg',
  mpg4: 'video/mp4',
  ogv: 'video/ogg',
  qt: 'video/quicktime',
  smv: 'video/x-smv',
  webm: 'video/webm',
  wm: 'video/x-ms-wm',
  wmv: 'video/x-ms-wmv',
  wmx: 'video/x-ms-wmx',
  aac: 'audio/x-aac',
  adp: 'audio/adpcm',
  au: 'audio/basic',
  flac: 'audio/x-flac',
  kar: 'audio/midi',
  m2a: 'audio/mpeg',
  m3a: 'audio/mpeg',
  m3u: 'audio/x-mpegurl',
  m3u8: 'application/vnd.apple.mpegurl',
  m4a: 'audio/mp4',
  mid: 'audio/midi',
  midi: 'audio/midi',
  mka: 'audio/x-matroska',
  mp2: 'audio/mpeg',
  mp2a: 'audio/mpeg',
  mp3: 'audio/mpeg',
  mp4a: 'audio/mp4',
  mpga: 'audio/mpeg',
  oga: 'audio/ogg',
  ogg: 'audio/ogg',
  rmi: 'audio/midi',
  s3m: 'audio/s3m',
  snd: 'audio/basic',
  spx: 'audio/ogg',
  wav: 'audio/x-wav',
  weba: 'audio/webm',
  wma: 'audio/x-ms-wma',
  xm: 'audio/xm',
  bmp: 'image/bmp',
  gif: 'image/gif',
  ico: 'image/x-icon',
  jpeg: 'image/jpeg',
  jpg: 'image/jpeg',
  jpe: 'image/jpeg',
  png: 'image/png',
  psd: 'image/vnd.adobe.photoshop',
  svg: 'image/svg+xml',
  svgz: 'image/svg+xml',
  tga: 'image/x-tga',
  tif: 'image/tiff',
  tiff: 'image/tiff',
  webp: 'image/webp',
  css: 'text/css',
  csv: 'text/csv',
  htm: 'text/html',
  html: 'text/html',
  js: 'text/javascript',
  sass: 'text/x-sass',
  scss: 'text/x-scss',
  styl: 'text/x-styl',
  txt: 'text/plain',
  yaml: 'text/yaml',
  yml: 'text/yaml',
  md: 'text/markdown',
  eot: 'application/vnd.ms-fontobject',
  epub: 'application/epub+zip',
  gz: 'application/x-gzip',
  hdf: 'application/x-hdf',
  json: 'application/json',
  jsonml: 'application/jsonml+json',
  latex: 'application/x-latex',
  mp4s: 'application/mp4',
  ogx: 'application/ogg',
  otf: 'application/x-font-otf',
  pdf: 'application/pdf',
  ps: 'application/postscript',
  psf: 'application/x-font-linux-psf',
  rar: 'application/x-rar-compressed',
  snf: 'application/x-font-snf',
  swa: 'application/x-director',
  swf: 'application/x-shockwave-flash',
  tar: 'application/x-tar',
  tex: 'application/x-tex',
  tgz: 'application/x-gzip',
  ttc: 'application/x-font-ttf',
  ttf: 'application/x-font-ttf',
  unityweb: 'application/vnd.unity',
  woff: 'application/x-font-woff',
  woff2: 'application/x-font-woff',
  xml: 'application/xml',
  xsl: 'application/xml',
  zip: 'application/zip',
};

function normalizeUrlPath(t) {
  let i = t.split('#'),
    e = i[0];
  (i = e.split('?')), (e = i[0]), (i = e.split('/'));
  let a = i.pop(),
    o = i.join('/');
  return (
    a.includes('.') || (a = PathUtils.join(a, 'index.html')),
    decodeURIComponent(PathUtils.join(o, a))
  );
}
