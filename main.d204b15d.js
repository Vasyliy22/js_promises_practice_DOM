parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector("body"),s=document.createElement("div");s.classList.add('data-qa="notification"'),s.innerHTML='\n  <div class="success">Success: First promise was resolved</div>\n  <div class="error">Error: First promise was rejected</div>\n  <div class="sec-success">Success: Second promise was resolved</div>\n  <div class="third-success">Success: Third promise was resolved</div>\n',e.append(s);var n=e.querySelector(".success"),t=e.querySelector(".error"),r=e.querySelector(".sec-success"),c=e.querySelector(".third-success");r.style.display="none",c.style.display="none",n.style.display="none",t.style.display="none";var i=new Promise(function(s,r){e.addEventListener("click",function(e){0===e.button&&(s(n.style.display=""),r(new Error(t.style.display="none")))}),setTimeout(function(){r(new Error(t.style.display=""))},3e3)}),o=new Promise(function(s,n){e.addEventListener("mousedown",function(e){switch(e.button){case 0:case 2:s(r.style.display="")}2===e.button&&n(new Error(t.style.display="none"))})}),d=new Promise(function(s){var n=!0,t=!0;e.addEventListener("mousedown",function(e){0!==e.button&&(n=!1),2!==e.button&&(t=!1),n||t||s(c.style.display="")})});Promise.all([i,o,d]).then(function(e){return e}).catch(function(e){return e});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.d204b15d.js.map