!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var i=o[e];delete o[e];var t={id:e,exports:{}};return n[e]=t,i.call(t.exports,t,t.exports),t.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequired7c6=i),i("h6c0i");var t=document.querySelector(".form");t.addEventListener("submit",(function(e){e.preventDefault();for(var n=0;n<=l;n+=1)u(n,r).then((function(e){var n=e.position,o=e.delay;Notiflix.Notify.failure("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;Notiflix.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),r+=a}));var r=Number(t.delay.value),a=Number(t.step.value),l=Number(t.amount.value);function u(e,n){var o=Math.random()>.3;return new Promise((function(i,t){setTimeout((function(){o?i({position:e,delay:n}):t({position:e,delay:n})}),n)}))}}();
//# sourceMappingURL=03-promises.dd4e1edb.js.map
