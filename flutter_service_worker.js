'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "655091d47e57747a79fa2fdb8c3ead8c",
"assets/AssetManifest.bin.json": "272f11c88eedd881583c4fffc3f0eaf8",
"assets/AssetManifest.json": "6f6f7363558508788ea06d4e9ea8207c",
"assets/assets/fonts/Roboto-Black.ttf": "dc44e38f98466ebcd6c013be9016fa1f",
"assets/assets/fonts/Roboto-Bold.ttf": "dd5415b95e675853c6ccdceba7324ce7",
"assets/assets/fonts/Roboto-ExtraBold.ttf": "27fd63e58793434ce14a41e30176a4de",
"assets/assets/fonts/Roboto-Light.ttf": "25e374a16a818685911e36bee59a6ee4",
"assets/assets/fonts/Roboto-Medium.ttf": "7d752fb726f5ece291e2e522fcecf86d",
"assets/assets/fonts/Roboto-Regular.ttf": "303c6d9e16168364d3bc5b7f766cfff4",
"assets/assets/fonts/Roboto-SemiBold.ttf": "dae3c6eddbf79c41f922e4809ca9d09c",
"assets/assets/sizedept/model/md_1.glb": "0f92646699151647d2673ef7e994772e",
"assets/assets/sizedept/model/md_10.glb": "ad71b6d7c0d7c3937c59e4d47ce7f4d1",
"assets/assets/sizedept/model/md_11.glb": "aea7197e7a4036d93f2e5d582421d841",
"assets/assets/sizedept/model/md_12.glb": "c5dc1b61b1cff97b77fd32285dbeab16",
"assets/assets/sizedept/model/md_13.glb": "ad71b6d7c0d7c3937c59e4d47ce7f4d1",
"assets/assets/sizedept/model/md_14.glb": "f19f758e354373dbb137b71968349460",
"assets/assets/sizedept/model/md_15.glb": "1ef2222973a41d6502100f8506fa2cd0",
"assets/assets/sizedept/model/md_16.glb": "ad71b6d7c0d7c3937c59e4d47ce7f4d1",
"assets/assets/sizedept/model/md_2.glb": "ad71b6d7c0d7c3937c59e4d47ce7f4d1",
"assets/assets/sizedept/model/md_3.glb": "ad71b6d7c0d7c3937c59e4d47ce7f4d1",
"assets/assets/sizedept/model/md_4.glb": "ba39759acb090e5b6c10336e4470dc22",
"assets/assets/sizedept/model/md_5.glb": "14629447e0eaab2a76cae9e19282ebe7",
"assets/assets/sizedept/model/md_6.glb": "ad71b6d7c0d7c3937c59e4d47ce7f4d1",
"assets/assets/sizedept/model/md_7.glb": "ad71b6d7c0d7c3937c59e4d47ce7f4d1",
"assets/assets/sizedept/model/md_8.glb": "ad71b6d7c0d7c3937c59e4d47ce7f4d1",
"assets/assets/sizedept/model/md_9.glb": "ad71b6d7c0d7c3937c59e4d47ce7f4d1",
"assets/assets/sizedept/textu/p_1.webp": "281affda8ea99ccffa5898a44fd7f12b",
"assets/assets/sizedept/textu/p_10.webp": "aff31e19ce0c694b3bc50963f69ded3b",
"assets/assets/sizedept/textu/p_11.webp": "a351da3f17db69bb20f74186af9da9df",
"assets/assets/sizedept/textu/p_12.webp": "5621538b27713e9404309af54e974238",
"assets/assets/sizedept/textu/p_13.webp": "24e664623405752e7f1c8da57a034061",
"assets/assets/sizedept/textu/p_14.webp": "ce165a49d6ca0e9546c2ff293c5d2bae",
"assets/assets/sizedept/textu/p_15.webp": "4331c8728a66f888faed4042a89c53d4",
"assets/assets/sizedept/textu/p_16.webp": "15ef7842155ba74eaa1f73415403a303",
"assets/assets/sizedept/textu/p_2.webp": "986fca03f678743904fe08ec1a3ffa46",
"assets/assets/sizedept/textu/p_3.webp": "1f9769654a83315314805457cb9f4e5b",
"assets/assets/sizedept/textu/p_4.webp": "77a7aef081a398e20952e5c9dace2d9e",
"assets/assets/sizedept/textu/p_5.webp": "88db29086e8fe898003d4116fb4a0547",
"assets/assets/sizedept/textu/p_6.webp": "8e385006d8fda2e832739fe4f068adf7",
"assets/assets/sizedept/textu/p_7.webp": "dd8ae603f821e2d62b0e2bbb5e3f8d2e",
"assets/assets/sizedept/textu/p_8.webp": "2092d1ed0caf8f937ef1916c2b60fe04",
"assets/assets/sizedept/textu/p_9.webp": "f017dd23bc7c457f32dd23fe84ee2035",
"assets/assets/sizedept/wallper/front.webp": "96e01132324540ae94fd66aaa3823bb8",
"assets/assets/sizedept/wallper/frontm.webp": "781370b92f061d5394771bf0b0738722",
"assets/assets/sizedept/wallper/icon.webp": "4689eda68c05eafdd53ce0808614db66",
"assets/FontManifest.json": "9fd4a2dd3f2cb631b838addd86773665",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "bf87ae2e2e239ee033ef7c9a5ae7f112",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/three_js_controls/assets/joystick_background.png": "8c9aa78348b48e03f06bb97f74b819c9",
"assets/packages/three_js_controls/assets/joystick_knob.png": "bb0811554c35e7d74df6d80fb5ff5cd5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "5368491bec68c9726358446261975139",
"icon.webp": "4689eda68c05eafdd53ce0808614db66",
"icons/icon.webp": "4689eda68c05eafdd53ce0808614db66",
"index.html": "337c77fc3472a5aa078be366b709c6c7",
"/": "337c77fc3472a5aa078be366b709c6c7",
"main.dart.js": "524a27e520b521aa6dd7892106fabc5d",
"manifest.json": "f56a9c88f180a1e787cef626017f7def",
"version.json": "09b3957a209752dc013b036e971fd663"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
