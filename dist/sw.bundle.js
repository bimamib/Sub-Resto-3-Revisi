if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const a=e=>n(e,r),f={module:{uri:r},exports:s,require:a};i[r]=Promise.all(o.map((e=>f[e]||a(e)))).then((e=>(c(...e),s)))}}define(["./workbox-0300ce97"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"474.bundle.js",revision:"e2c2aeea653e2180ab79db035595c72d"},{url:"app.bundle.js",revision:"429e05e80a0b13f49122583133462602"},{url:"app.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app.webmanifest",revision:"9b573a93451dd71e22b1c96cb6640b9a"},{url:"favicon.png",revision:"2af688ef5e72300436bb2296c33ad262"},{url:"icons/icon-128x128.png",revision:"e201fa39c783af734e4c162a13217fe0"},{url:"icons/icon-144x144.png",revision:"5f8ef1e75001c795f10ba39507326a85"},{url:"icons/icon-152x152.png",revision:"ede8bd2aa0b5a1e934ad500c920ebef8"},{url:"icons/icon-192x192.png",revision:"f5a37f8310767068c696ba3e23d6b061"},{url:"icons/icon-384x384.png",revision:"e9558ff7841089abc174457310456a2c"},{url:"icons/icon-512x512.png",revision:"6a7b6eca5ad204d962df11b294be24c1"},{url:"icons/icon-72x72.png",revision:"2c9f722d51cf08472a464c0ff56a474b"},{url:"icons/icon-96x96.png",revision:"31a8505ee0ab6da03bd9b7667f7a846e"},{url:"images/heros/hero-image_4.jpg",revision:"4ea98fe648a0b853ab379c928b5fd0bf"},{url:"index.html",revision:"f57df3ae78b90cea036a18ff9cc00ef5"}],{}),e.registerRoute(/https:\/\/restaurant-api.dicoding.dev\//,new e.StaleWhileRevalidate({cacheName:"new Date().toISOString()",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
