/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "00-javascript.html",
    "revision": "4e488548387d511143aece9d6bdb8044"
  },
  {
    "url": "01-web_concept.html",
    "revision": "c8e8e9b9f7a94000d2782f656ada1018"
  },
  {
    "url": "02-node_introduction.html",
    "revision": "4320d1664ae9f5156d27b6a2143c6b9e"
  },
  {
    "url": "03-getting_started.html",
    "revision": "0131d72d860a53323405a7b20d53340d"
  },
  {
    "url": "04-module.html",
    "revision": "bc016992be5e544227d4ca4399fb136b"
  },
  {
    "url": "05-package_npm.html",
    "revision": "1b1f2a8c353167062f117a3b5502ae18"
  },
  {
    "url": "06-fs.html",
    "revision": "5cbdce1627407d3df54a57c4f2a7cc57"
  },
  {
    "url": "07-web.html",
    "revision": "dc15898c1c0eeef3358adc5deb2a2de3"
  },
  {
    "url": "08-express.html",
    "revision": "26ec3f4f9624fab6e8f8eac1ea3cbc54"
  },
  {
    "url": "09-db.html",
    "revision": "5225dca32f3f0ab1687dd4afbe896bfa"
  },
  {
    "url": "10-web_db.html",
    "revision": "26121bb0fff9034280fda9d9db455bfe"
  },
  {
    "url": "11-session_persistence.html",
    "revision": "d73183d1804b2d1917f56e2598a878ad"
  },
  {
    "url": "12-ajax.html",
    "revision": "0cb0cc40b1fab680ef4b87c989d6d4e6"
  },
  {
    "url": "13-alibaixiu.html",
    "revision": "1ac2db6c19bf690bafd5789d0fad7655"
  },
  {
    "url": "14-asynchronous_ programming.html",
    "revision": "82f957d313d6e0874ef74bff1e5aa245"
  },
  {
    "url": "15-dep_ops.html",
    "revision": "92b11c7ef9419a973f32b5fe4d5ac363"
  },
  {
    "url": "16-other.html",
    "revision": "a1578d528fcdfde2f0f85e5c748d5f75"
  },
  {
    "url": "404.html",
    "revision": "47645dddf96b71b7b6c452132e03c809"
  },
  {
    "url": "assets/css/0.styles.bc72b5c6.css",
    "revision": "e8319c4fc2e8dee92351585619bfd990"
  },
  {
    "url": "assets/img/1553236302024.d07bd736.png",
    "revision": "d07bd736da2dd7b892c8127746b9472b"
  },
  {
    "url": "assets/img/1553236341079.2477e3ff.png",
    "revision": "2477e3ff465fda3302e3ea90f4a35b82"
  },
  {
    "url": "assets/img/1553236371037.8a80b288.png",
    "revision": "8a80b288d3fe32e94c119490655a0363"
  },
  {
    "url": "assets/img/bg2015120901.3bc9d5f2.png",
    "revision": "3bc9d5f2c49a713c776e69676d7d56c5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ad5e893a.js",
    "revision": "9056b80c483927ea39c8e84e6ced35e2"
  },
  {
    "url": "assets/js/11.f641c844.js",
    "revision": "d372e455ae3263cd019b3135f0dbc547"
  },
  {
    "url": "assets/js/12.7fb6cfb4.js",
    "revision": "867a5d8a564c5d4fa90c77455fb844df"
  },
  {
    "url": "assets/js/13.4f4c29ff.js",
    "revision": "e051c75b4690bf652eabe46628172292"
  },
  {
    "url": "assets/js/14.74e30857.js",
    "revision": "47358feac962f81cc26dc38978c39e26"
  },
  {
    "url": "assets/js/15.3ea45510.js",
    "revision": "6e41e0a9227f216f092fe23b1cb918d0"
  },
  {
    "url": "assets/js/16.6417194e.js",
    "revision": "e0ab480f55e80ef79a96df5fbbb2449c"
  },
  {
    "url": "assets/js/17.c25b6a16.js",
    "revision": "b3e4f1bd80ae0e190a0860e7d2ba9dd5"
  },
  {
    "url": "assets/js/18.17591775.js",
    "revision": "fdee33b566548cf0f2a746883a7531ca"
  },
  {
    "url": "assets/js/19.5536329f.js",
    "revision": "02631d4f6c24e91a361d3810d7f01564"
  },
  {
    "url": "assets/js/2.6e60c662.js",
    "revision": "f544ea73fcbabd68e99923d5d0273c2c"
  },
  {
    "url": "assets/js/20.5bb8abf9.js",
    "revision": "688018eaac3733fd0669e2ba53c4d708"
  },
  {
    "url": "assets/js/21.a93f4746.js",
    "revision": "7b6f74cc1440f53b6e86143912694c33"
  },
  {
    "url": "assets/js/3.9e9249e1.js",
    "revision": "1741553d3c18ec87d7f7c3110d0a821d"
  },
  {
    "url": "assets/js/4.e6886bca.js",
    "revision": "1e5667130e5e396889c5efb9b9fbd22c"
  },
  {
    "url": "assets/js/5.6c243cf7.js",
    "revision": "dbddf1e01d0bd53f22ac8ae255bf22a5"
  },
  {
    "url": "assets/js/6.c39b882b.js",
    "revision": "c5e29f1af563ccd1a8f1fe0698c9c19b"
  },
  {
    "url": "assets/js/7.b8c07bee.js",
    "revision": "4d13af70471ce8fe9da7ef0d4aa88b24"
  },
  {
    "url": "assets/js/8.f7ced6f1.js",
    "revision": "0affd90d5e308e5bbc526feb619fb711"
  },
  {
    "url": "assets/js/9.561fd1fc.js",
    "revision": "eabbc585b62c82a2b6be7ca119a32586"
  },
  {
    "url": "assets/js/app.284775b9.js",
    "revision": "5e2202734fca3ec140036391a521900e"
  },
  {
    "url": "icons/favicon.png",
    "revision": "adbe265cf4d3f10447eb015f0951c53c"
  },
  {
    "url": "index.html",
    "revision": "2f7f2b5df9a9ae978c3caaa164060553"
  },
  {
    "url": "javascript.png",
    "revision": "cd37d7f6f349e461916dd827916842cd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
