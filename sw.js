importScripts('/whereiszedd/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "whereiszedd",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/whereiszedd/_nuxt/app.d7ae419bbb2fa69105eb.js",
    "revision": "e7992ef3494c6591b8ec3495133ed7c2"
  },
  {
    "url": "/whereiszedd/_nuxt/layouts_default.5bc6d6f3af2da7548eb3.js",
    "revision": "c51b27a96ac948e502f211e17084be0c"
  },
  {
    "url": "/whereiszedd/_nuxt/manifest.b9161d4fbad3265c5e4f.js",
    "revision": "93fbe89651314d7f889da2a247a49c3d"
  },
  {
    "url": "/whereiszedd/_nuxt/pages_index.1bab487a3aaab752c3f8.js",
    "revision": "639d8ec6d99801170be29467ea77a9a2"
  },
  {
    "url": "/whereiszedd/_nuxt/vendor.4e97f0c8bc1238f816f1.js",
    "revision": "e623850af3aa35955e3bc2f32b26e9f4"
  }
])


workboxSW.router.registerRoute(new RegExp('/whereiszedd/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/whereiszedd/.*'), workboxSW.strategies.networkFirst({}), 'GET')

