!function(){var t={body:document.querySelector("body"),startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};var e=null;function n(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}t.startBtn.addEventListener("click",(function(){e=setInterval(n,1e3),t.startBtn.setAttribute("disabled","")})),t.stopBtn.addEventListener("click",(function(){clearInterval(e),t.startBtn.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.f10b4c63.js.map