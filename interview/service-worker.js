"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["interview/index.html","297ca09c43d8b60b59e1d9af8a5d4eb4"],["interview/service-worker.js","5d524ca06d1b902f368de88c4e5e41f9"],["interview/static/cityList.js","951980cc7b59692a1f9727ccc069767c"],["interview/static/css/app.20c2bd609a3b60870e67a278449a290e.css","c80ee0fe093e2f18e36b20fd325c6391"],["interview/static/dicConfig.js","bee0648051fb2cbb58e8b5372215270f"],["interview/static/js/app.b59f9d2c6d70e2cc72a8.js","bdc744ad9bb478e6cd01e5ea2bc34316"],["interview/static/js/babel-polyfill.7b9c682195f80f06aaa6.js","8493b25884f4e280ac3f72ed283dc61d"],["interview/static/js/demo.efa75f38a378b27f3aac.js","0bd54f04fbb20b5f33326813492739af"],["interview/static/js/examination_room.845cdc039656239950f7.js","8bc0095fb31edb4890706b507ca823f6"],["interview/static/js/examination_search.f60f2279c5a57b0b7992.js","86c97298c002e4b4321e94b41ae4a164"],["interview/static/js/hello_world.33d4b4e81a6a23a44d87.js","07a5d9052ff56fd09d460d6aed07863c"],["interview/static/js/interview.7c6f6a510381386c6648.js","2ebce79a446432abdf6be18eea852c9d"],["interview/static/js/login.e99ec444cafc80889773.js","92117c766751ade4e8c4521ed8f7b381"],["interview/static/js/manifest.d8d5ca80af9f048e4b80.js","389c1a785e05012766df1a2d9fd3553d"],["interview/static/js/resumeComment.52661f1f48da13c9d5aa.js","b5c04a6ab6eb5c3c1b9f1475fc7105ff"],["interview/static/js/resumeDetails.45b71a88426747b24fd2.js","56ca07b044694964b7acd1dfebfc2347"],["interview/static/js/resumeList.55dc2ddda7b9efead972.js","d267c1819b440b2fc2bde9e3782aeff2"],["interview/static/js/schedule.a1f44d086c3dbfcabf35.js","66d14fb6c1c6dc10509c03cf93f183a1"],["interview/static/js/user_center.3429add4d8e0020afe05.js","472e470acc37f115731c7226da99942f"],["interview/static/js/vendor-async.5a330b37b67b8b8d11f1.js","bbcf3e6663d05573ec81c08d66d6094f"],["interview/static/js/vendor.d631f97f11c7de305bed.js","3ecaea22bb1b6a9428678214976217e3"]],cacheName="sw-precache-v3-my-vue-app-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,!1);return[a.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});