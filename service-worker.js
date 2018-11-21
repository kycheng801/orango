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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e4177cf29977011899c048b7ff994951"
  },
  {
    "url": "api/connection.html",
    "revision": "6000b668bd868961fb932219c464de67"
  },
  {
    "url": "api/consts.html",
    "revision": "4cad7b8d7d1ed889155cbd39363ca254"
  },
  {
    "url": "api/index.html",
    "revision": "5e4370664cf058ae451dba9854b13a81"
  },
  {
    "url": "api/model.html",
    "revision": "31b5b67abb9fc521a162080dc0af7a00"
  },
  {
    "url": "api/orango.html",
    "revision": "c07892bb2b11bdf7884e78972ab4cd9d"
  },
  {
    "url": "api/orm.html",
    "revision": "8f118329c249432373801beb2ec63ccd"
  },
  {
    "url": "api/schema.html",
    "revision": "c1d47fa94979d9580a178cadf257aef2"
  },
  {
    "url": "assets/css/0.styles.f74fbd4b.css",
    "revision": "dae66e9c3dca4698fb9215e573013b4d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0b4132a9.js",
    "revision": "e7ad1c1516478af78f635178701217b0"
  },
  {
    "url": "assets/js/11.7e3d5891.js",
    "revision": "be096c7f95c49e8011b619b30354754f"
  },
  {
    "url": "assets/js/12.90e8c27f.js",
    "revision": "6fe81a182f3302f61c800d8b110b34ab"
  },
  {
    "url": "assets/js/13.d3f31ab5.js",
    "revision": "cf6321ca6bd1097e766e449a988d52ad"
  },
  {
    "url": "assets/js/14.8a236e17.js",
    "revision": "acb47cb1858d1fee8d304a8bfce72a07"
  },
  {
    "url": "assets/js/15.15cafb51.js",
    "revision": "7aefdbee0e529c2e162e4a1c037cba34"
  },
  {
    "url": "assets/js/16.7343962a.js",
    "revision": "14271cad0334db0449d567e368bc7ffc"
  },
  {
    "url": "assets/js/17.be94b5e7.js",
    "revision": "e1141b35201c9350ef1ff352ebe7ccd7"
  },
  {
    "url": "assets/js/18.baff5262.js",
    "revision": "89a55b9da84e6ab542bb1fca6caad924"
  },
  {
    "url": "assets/js/19.0d55a969.js",
    "revision": "3dc228ed8423f905c7b5fa916a1299c4"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/3.4994633d.js",
    "revision": "e1cc8c21e5b19edab69f283d672eca6d"
  },
  {
    "url": "assets/js/4.5c6140a9.js",
    "revision": "6331335b84b7b71aa5daa8c2eac91670"
  },
  {
    "url": "assets/js/5.1a963695.js",
    "revision": "f733b833807b06573e961170547be73c"
  },
  {
    "url": "assets/js/6.33ead4cd.js",
    "revision": "329bf6a17d84bf3f369142318aad29cc"
  },
  {
    "url": "assets/js/7.f03755c5.js",
    "revision": "45ea32c63f7d4d3e3e1c8c40eb3baa2c"
  },
  {
    "url": "assets/js/8.a04f3426.js",
    "revision": "f6eb3a6403c65ff9c599b531e229c3d1"
  },
  {
    "url": "assets/js/9.ac45acdd.js",
    "revision": "9bdbda29abe83eb94243f6253d45880c"
  },
  {
    "url": "assets/js/app.6f2b6494.js",
    "revision": "6a1e99641d448e05ab93144f7956cc6a"
  },
  {
    "url": "config/index.html",
    "revision": "e9071d1a7887a7de7c20945fae89bd34"
  },
  {
    "url": "config/introduction.html",
    "revision": "e93d881f4c7640feb6fba5f0ab92af58"
  },
  {
    "url": "config/one.html",
    "revision": "a46089cb2539e5901ebe97a4ec9cd1dc"
  },
  {
    "url": "config/two.html",
    "revision": "4125033a7f4f8b114f7eb7fab8fb2d66"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "c468b1a16d79b9e1dfe66032e9a81fa5"
  },
  {
    "url": "guide/index.html",
    "revision": "e0a169d87a5ea52d0e5099e528361a7d"
  },
  {
    "url": "guide/installation.html",
    "revision": "6f1699c1c7fa8144eed411b51b594fde"
  },
  {
    "url": "hero.png",
    "revision": "752362887128d117b397b5b5038f10b8"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "8527c69777bd5db43ed8ff069debe8df"
  },
  {
    "url": "icons/android-chrome-256x256.png",
    "revision": "9c39d4637ab993a13ed10b5cba7e625b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "fdacf2476bc0557e3e61d6133eb1e190"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "bdfac584d56f5d16658be493831b5c7b"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "e2a1cb3a590e2ae65029b5daa3104ec4"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "e440086e20581d4a13a23d62e198a28d"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "142d4099cba274eaf7a9b546cd93d178"
  },
  {
    "url": "index.html",
    "revision": "3a682835bc0b3402b780e9ece5f4865a"
  },
  {
    "url": "logo.png",
    "revision": "6dd9de51405c632bba8f5b392576c7d0"
  },
  {
    "url": "roadmap.html",
    "revision": "bb4bb2081baf48741c7ea2db4dd7aa4a"
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
