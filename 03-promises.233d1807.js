!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},i={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in i){var n=i[e];delete i[e];var t={id:e,exports:{}};return o[e]=t,n.call(t.exports,t,t.exports),t.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){i[e]=o},e.parcelRequired7c6=n),n("h6c0i"),document.querySelector(".form").addEventListener("submit",(function(e,o){var i=Math.random()>.3;new Promise((function(n,t){setTimeout((function(){i?n({position:e,delay:o}):t({position:e,delay:o})}),o)})).then((function(e){var o=e.position,i=e.delay;Notiflix.Notify.failure("✅ Fulfilled promise ".concat(o," in ").concat(i,"ms"))})).catch((function(e){var o=e.position,i=e.delay;Notiflix.Notify.failure("❌ Rejected promise ".concat(o," in ").concat(i,"ms"))}))}))}();
//# sourceMappingURL=03-promises.233d1807.js.map
