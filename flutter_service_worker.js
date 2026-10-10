'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4e2fba90ff24ad3792d993df4563f5eb",
".git/config": "651a5b703ed11b54fc2d7f5a8b3ed980",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7336019da3ecc4fdcfb1c1b791f716a9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "aea9fc317b2da939f219813af9fb5469",
".git/logs/refs/heads/gh-pages": "e0fe437e076480b785133fc5c2d3e87b",
".git/logs/refs/remotes/origin/gh-pages": "c70f7acc5d8c2ef2c344c799d05c41b8",
".git/objects/05/7efe71a9091750a0fb08fb77135194dcd061c7": "87836a4055210c98020dc5bf48a6ed10",
".git/objects/08/18bd7bd9d9c959aee52cb5b2fde3712297fd8e": "c154380efc07ef72aed6700e712154af",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/09/3c21a59af3293a0f8add48be2e6ba8bf56b02b": "bec738ccbb995c0fea9822b6c3907464",
".git/objects/0e/556f1baa1d58e28e5b99fc0bb6d89770318ef0": "eebaed9d59e379f50e98232a70ca2c8b",
".git/objects/10/72e4e2d838193f72af8ceb84ddfa413d535f9c": "1cf8ce5cfacf95621ae6de2ed612c643",
".git/objects/10/a83d4222c194cfe4c9447b0a3bacd6b3933a46": "51f792e7a125c1b818b7c50ddbf2db98",
".git/objects/10/ca4a1865d7f4873a49559874d1cb38de412572": "e48b4f02552a02f9feec25c7c049f7e1",
".git/objects/15/05f47425319fb084360c17e50787f9820ef421": "7d27035f402fc899cab2ef244e9f0778",
".git/objects/15/131eab75d094136a3530cbbab8e2cd082650b6": "6fd4d7f22b050d422fc036072f423d47",
".git/objects/21/acb7307303ac75c3c18bab6cc9d86b0a00bf9c": "5d1d7bae3e4f1f3f557bbc383c4963f5",
".git/objects/26/3d414bded12ac7b3bbf55eaeea8a745b551c58": "abee3631ac918345b588bb9f06aef999",
".git/objects/2c/61b2865987040d1e4552302f4a39f415102178": "273e9f0777b3c4aa3f28a17a24f04a50",
".git/objects/35/4998c27f446730ffd71d5010b49ade235b05b9": "f0a381a4554458ca187c6c28c86df298",
".git/objects/37/653cf38071c61fa17074ab9e81881eb2827422": "b3c34005238f65dba3b7461e0c6216c5",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/40/e8df0d2d3e23d37a5cd43744b553c1b8cbf0b1": "34e0e61d671fecdc4a9acfa88f0a1c12",
".git/objects/4b/4d97aabd2df91317b34f1cf1eea15634fdcf6c": "70d8d60c6953e41d4f9afeec208d3542",
".git/objects/4d/35276ebb3cbe0bf5fd509a8f7b2b0ed958aaf0": "338f2014f13585b7c295ef0dd1606bc0",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/59/e23e9d48c59b0a6da66ea40897e09f948b6752": "ee5b5a39c738e92c22f1d6489420b64c",
".git/objects/62/b1b2c8d4f62184295fe33a9d8a45d825fdf5dc": "5f26ca15884e925297a88502bc0bf961",
".git/objects/67/4a66686c417a248f98e9f4c30368585a30ff7d": "2ca8f781619d41e4b2f3f79b18592f1d",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/8712955da126c385c13065516f1c848c981658": "a45b6acd387e2a85a51cefd84c760e54",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/70/1140360e57caf3488ded5d876fab33bfe0935c": "4cd71cac5601bb3d09377bad325a1c5a",
".git/objects/73/759490f46cb5607c534ca3c4cda58b75842f1b": "dad8d2e081ffca105951a59eab30330f",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/286a2b8aa85946c7bd4788d1b030a8f77c5d84": "4b75c3def306ef3a9e125f561a0f08d5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b0/4398bf949e4d46a0cd52011e85fcc6510cb411": "32dd58c360cc756b52ae2a8c93a882cd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/c5/f04ac3ac89fa609916689178b6a42fc45fe19c": "8a4075ebe0e9f5ea59f0707af38b68b0",
".git/objects/c6/350a2c68f3edc22f478f1059f8fa2ce524bd04": "b34d2c7be7bf5d06dea578ab0b50c206",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/cb/076525ecc18394603456300591a2b4278baf96": "7d723840039337513821d8d6cd41bed1",
".git/objects/ce/ba2eeef97ebc8031cf1a65208612dd06782f10": "c14aa4ae6bd14554d9a175629baea208",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/3ec7aa843b76337b24d759999f990258a1161f": "f4b41da1c0e8b723e08ed43c12cff458",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/d9/dc0146cdddb01b9097204945fce07c29a8ac98": "5b8383d7c7584bd77c422740b7cc503b",
".git/objects/db/cf14424117bd15f0842936c7ff95a8fe946cd8": "91218e6be08bfa457f34a2756f63e959",
".git/objects/dc/fb3a3e09d41100043fa9436c0201d713e24fae": "61bbcb1a5d11c0159f2306ffff4f6b35",
".git/objects/dd/153ac11bbb910c9d95ed6e14f9def36d8e0a38": "fea23bfbc655aa4a51af174addda1c2e",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/7eb4e5f4ff0b303e47aee6a35ef7bf3add5184": "90b7ab523b7be59f6be150e835563e9b",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f7/0ec8e2e96599d504f9ebb15f829a1f1cabc386": "9dea25bb9b603d47ac81c433b7cfdc32",
".git/objects/f7/d79f6fb5b43a4260e5c34362749d2c7bb156c4": "187c2f772259ed75545551622a52092f",
".git/objects/fa/2d8e435bbe4d3a196a22eae88f6ee92dddd5fc": "4fa221c4adeb94d1c8e4dae78f9a60d3",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/refs/heads/gh-pages": "8815c053ca0754ae613cc7729f513cf5",
".git/refs/remotes/origin/gh-pages": "8815c053ca0754ae613cc7729f513cf5",
"assets/AssetManifest.bin": "c4587424b10289fad89e0e68ee9f9cca",
"assets/AssetManifest.bin.json": "9dbeb3595c5ed47629ff8e03d71f9a30",
"assets/assets/fonts/NotoNaskhArabic-Bold.ttf": "cc469db2ac5ccb6717217146418c96f9",
"assets/assets/fonts/NotoNaskhArabic-Regular.ttf": "eeff65bdd1adab62c3fe488b2b29e898",
"assets/FontManifest.json": "3957a69ab0748e41e3f16660975d99f7",
"assets/fonts/MaterialIcons-Regular.otf": "fa784996b75ce2e45db84b425a304940",
"assets/NOTICES": "aea3cb30259b0d0bd8960c270c0aaf4e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/esc_pos_utils_plus/resources/capabilities.json": "cfcc98d389d1ee4358f773efe8a9cdac",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "6d247986689d283b7e45ccdf7214c2ff",
"assets/packages/win_ble/assets/BLEServer.exe": "28aa0e2566083c860f029ff4bc32c4ce",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "a44e021345e69f64e974dc4aecd60148",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "06962ec797da9d24ee1b26516fafe545",
"/": "06962ec797da9d24ee1b26516fafe545",
"main.dart.js": "be68c20929a35082939b7929d54fbd30",
"manifest.json": "1c736204c4f119d04832aa72470a35af",
"splash/img/dark-1x.png": "7bac627b31caaf23c73dddd2ae2bf2cd",
"splash/img/dark-2x.png": "024ca4a8e40d123ec281a9e46253a3aa",
"splash/img/dark-3x.png": "8489afd5e205b485498bd43f424511ff",
"splash/img/dark-4x.png": "69891779e69aec328c719d4daf3164cb",
"splash/img/light-1x.png": "7bac627b31caaf23c73dddd2ae2bf2cd",
"splash/img/light-2x.png": "024ca4a8e40d123ec281a9e46253a3aa",
"splash/img/light-3x.png": "8489afd5e205b485498bd43f424511ff",
"splash/img/light-4x.png": "69891779e69aec328c719d4daf3164cb",
"version.json": "100df346e7feff8a827d77b0cc303605"};
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
