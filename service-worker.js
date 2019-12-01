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
    "revision": "2a050787b7eb03bf89348bf3f92773d8"
  },
  {
    "url": "01-web_concept.html",
    "revision": "203f54e45cc4bd8e69eeb12d09a8dfc1"
  },
  {
    "url": "02-node_introduction.html",
    "revision": "c54816726f733bdf9b04109eb54fda6c"
  },
  {
    "url": "03-getting_started.html",
    "revision": "4a862870e143ba2e17bb849ca3c2cbba"
  },
  {
    "url": "04-module.html",
    "revision": "5cca5f70286f12c5d9f0c1e3645c7d09"
  },
  {
    "url": "05-package_npm.html",
    "revision": "754d4f10f9c5e8867a169a7da29af5f9"
  },
  {
    "url": "06-fs.html",
    "revision": "786de3222542c7976f4a4464470fa649"
  },
  {
    "url": "07-web.html",
    "revision": "b119aca99257272d4c87b664a722f0c7"
  },
  {
    "url": "08-express.html",
    "revision": "ad4fbb87734164c2b2b5d1d7c5cc9f93"
  },
  {
    "url": "09-db.html",
    "revision": "d9845161475a18597827ca2ad10269f9"
  },
  {
    "url": "10-web_db.html",
    "revision": "cbb3d7bc5bdf5c2470da4dfa71fc388e"
  },
  {
    "url": "11-session_persistence.html",
    "revision": "e81a0eae6a87319e11e8bacee6207d54"
  },
  {
    "url": "12-ajax.html",
    "revision": "d8aacb9efd1757444fc8ab90e694e83a"
  },
  {
    "url": "13-alibaixiu.html",
    "revision": "1e9e4bedb912deee0b3c2ed5231af16b"
  },
  {
    "url": "14-asynchronous_ programming.html",
    "revision": "ef1000fec3a81e058d3acb4a0900c3b9"
  },
  {
    "url": "15-dep_ops.html",
    "revision": "b82451b85f7080eb3ecd450bb7800a84"
  },
  {
    "url": "16-other.html",
    "revision": "0a0dc70d62d001d454fc6b3e6e0ea01f"
  },
  {
    "url": "404.html",
    "revision": "1920efb225fa708b7b24ac55e476fa81"
  },
  {
    "url": "assets/css/0.styles.bc72b5c6.css",
    "revision": "bba880055d8da37527961fc268e549ec"
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
    "url": "assets/js/10.50f8cc69.js",
    "revision": "97beb893e11b9048f6daa7fcd13c1d1d"
  },
  {
    "url": "assets/js/11.63165319.js",
    "revision": "cb57dd3e7a0da42de5d73ff925e9479e"
  },
  {
    "url": "assets/js/12.c77fd109.js",
    "revision": "25fc8e3add427a320be75342fdb77e3b"
  },
  {
    "url": "assets/js/13.d3bcb504.js",
    "revision": "772fe47b4ae37ef61590c4c9c3b584d8"
  },
  {
    "url": "assets/js/14.2ab5316d.js",
    "revision": "de3a078e36b21a41a89d4ed1ffc12b26"
  },
  {
    "url": "assets/js/15.50e05516.js",
    "revision": "624ec8c3ff718d45b98acf031f7b6118"
  },
  {
    "url": "assets/js/16.cc4e9e6b.js",
    "revision": "5b43443750a9deb16229590637d6e407"
  },
  {
    "url": "assets/js/17.cf8a5144.js",
    "revision": "f8476a4e20b31a5a05277d4532cf440b"
  },
  {
    "url": "assets/js/18.995ea2c3.js",
    "revision": "c32f4dd88eb29960146c7d94b9ece2c6"
  },
  {
    "url": "assets/js/19.b53dbd1f.js",
    "revision": "17af4e1eccc07ed7713aac09e4a913ec"
  },
  {
    "url": "assets/js/2.24befd02.js",
    "revision": "88fb0900e5617ffae4e501beb5cd2ff7"
  },
  {
    "url": "assets/js/20.4f10ac6f.js",
    "revision": "61be5dfaa09cb8abe78c0f1b38d2a13a"
  },
  {
    "url": "assets/js/21.a93f4746.js",
    "revision": "7b6f74cc1440f53b6e86143912694c33"
  },
  {
    "url": "assets/js/3.c69e2e19.js",
    "revision": "a3b964575b9f581d6dfbe3e2a1ba2c4e"
  },
  {
    "url": "assets/js/4.da806239.js",
    "revision": "61c549bc5466f99b22b92f12d068ce7e"
  },
  {
    "url": "assets/js/5.953b51b4.js",
    "revision": "1099b27790b3e7f2640ac9c4bd468454"
  },
  {
    "url": "assets/js/6.f74ce3b5.js",
    "revision": "8affd028200ea7993b4ebb06fec54788"
  },
  {
    "url": "assets/js/7.ebbd53f9.js",
    "revision": "a9d190ffc32914c7c7ffc477cee64e8a"
  },
  {
    "url": "assets/js/8.5ea0397d.js",
    "revision": "677191521de39b05a5b404273c9d4b58"
  },
  {
    "url": "assets/js/9.396e3ff8.js",
    "revision": "25921f380e9d90f312f4ec5e7696cbea"
  },
  {
    "url": "assets/js/app.fa27fcb7.js",
    "revision": "9244e38e4ff2e777b9d8cc1532e26d2f"
  },
  {
    "url": "icons/favicon.png",
    "revision": "adbe265cf4d3f10447eb015f0951c53c"
  },
  {
    "url": "index.html",
    "revision": "22ac6155c95871c54fc69519b92b5f69"
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
