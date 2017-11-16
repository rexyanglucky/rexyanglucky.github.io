"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","640dff839fffa3273b5a7e704f333a56"],["service-worker.js","9e162d03b75be628006fd819ab8a41ab"],["static/cityList.js","34d1d84764e85be1dfe8b2622c292a67"],["static/css/app.030df557a16b14961b3eecd9c7770774.css","6ee213757a64b1537b22c9e521d6c411"],["static/dicConfig.js","fa77e95dd9d986a0d65f59b70aff96fa"],["static/js/app.48a3f6b284ed45beaebd.js","300a9b397d3b6941e5dc36c011ba33c1"],["static/js/demo.b45c06e2b3ea8886dd95.js","9c0acf14e0901d790af4d8fed55b1520"],["static/js/examination_room.93af01fe730dbd7a24eb.js","1afe2a8bb15e5e62ab3d402e8232f4ad"],["static/js/examination_search.98b959e0c8357d92f8a6.js","2f8c6484f25bd139a4edaf460598643f"],["static/js/hello_world.0b4d16140ca160c4bb0d.js","9d6407411f0e03fded016a17f06d2868"],["static/js/login.ccd0ed91edf803f4da5d.js","6e3eb0b4448726d9ed7c733468d4a99b"],["static/js/manifest.6dd7cba1c7a485daa22a.js","82bf308dc94e75dec88abc501a58dc3b"],["static/js/resumeComment.37645ea903bfda737e15.js","3bcfce35f9084f8254e15bba64bd00ea"],["static/js/resumeDetails.da9c74664d821499f84e.js","4d31f8a7d9f42d3bd27ebbdad0dfe399"],["static/js/resumeList.5ddd86529bca37ee3182.js","114d4915920adb3461906fc6ff91adf1"],["static/js/schedule.a342093a1ca1388de95f.js","8261e76a0a5fe86c94f17285965d32a3"],["static/js/vendor-async.a2c4e3a5f86d80fbc9c6.js","66759e89bb2b60fc8c8f3228d809c23c"],["static/js/vendor.5df8d132b8dacb127902.js","387364c5e607360de2ce48e9137b29fb"]],cacheName="sw-precache-v3-my-vue-app-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,!1);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});