!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;function i(e,o){var n=Math.random()>.3;new Promise((function(t,i){setTimeout((function(){n?t({position:e,delay:o}):i({position:e,delay:o})}),o+=Number(step.value))}))}null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t),t("h6c0i"),document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();for(var o=e.currentTarget,n=o.delay,t=o.step,r=o.amount,a=0;a<Number(r.value);a+=1)i(a+1,Number(n.value)+Number(t.value)*a);console.log(n,t)})),promise.then((function(e){var o=e.position,n=e.delay;Notiflix.Notify.failure("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"))})).catch((function(e){var o=e.position,n=e.delay;Notiflix.Notify.failure("❌ Rejected promise ".concat(o," in ").concat(n,"ms"))}))}();
//# sourceMappingURL=03-promises.0bfe5de7.js.map
