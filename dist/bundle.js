!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(e,t,n,o){e=e||void 0,o=o||"#content";let i=document.querySelector(o);const c=document.createElement("div");void 0!=e&&c.classList.add("newsitem"),c.id=t,c.textContent=n,i.appendChild(c),console.log("added element of type "+e)}function i(){for(var e=document.getElementById("content-div");e.firstChild;)e.removeChild(e.firstChild)}n.r(t),console.log("this is a testttttt"),console.log("This is a test for the onFileLoad.js page"),function(){let e=document.querySelector("#content"),t=document.createElement("div");t.id="my-header",e.appendChild(t);let n=document.querySelector("#my-header"),i=document.createElement("img");i.src="../img/maejoologosmall.gif",i.id="theLogo",t.innerHTML="<ul>\n    <li id = 'aboutPageButton'><a href= #>About Maejoo</a></li>\n    <li id = 'contactPageButton'><a href= #>Contact Us</a></li>\n    <li id = 'menuPageButton'><a href= #>Menu</a></li>\n  <ul>",n.appendChild(i);let c=document.createElement("div");c.id="content-div",e.appendChild(c);let d=document.querySelector("#content-div"),r=document.createElement("img");r.src="../img/chikin.jpg",r.id="chikin",d.appendChild(r),o(void 0,"news-container","","#content-div"),o("newsitem","firstnewsitem","I Just want this to work.","#news-container"),document.getElementById("firstnewsitem").innerHTML='<h1>WHAT IS MAEJOO?</h1>\n    <h2>Maejoo does not mean "every week"</h2>\n    <h2>It is also the soybean baseof staple Korean Sauces</h2>',o("newsitem","secondnewsitem","I Just want this to work.","#news-container"),document.getElementById("secondnewsitem").innerHTML="<h1>THE CHEF</h1>\n    <h2>Maejoo was created by Chef Sue! It's delicious.</h2>",o("newsitem","thirdnewsitem","I Just want this to work.","#news-container"),document.getElementById("thirdnewsitem").innerHTML="<h1>BEST PICK</h1>\n    <h2>The chicken is absolutely scrumptious.</h2>";let s=document.createElement("div");s.id="futureTabContent",e.appendChild(s);let a=document.createElement("footer");a.innerHTML='<p>Address: XXXX in Pelton Plaza <a href="#">Map</a></p>    <p>Phone #: XXX XXX XXXX</p>    <p><a href="">Yelp Page</a></p>    ',e.appendChild(a)}(),document.getElementById("aboutPageButton").addEventListener("click",function(){i(),function(){console.log("Someone clicked the 'about' link");let e=document.querySelector("#content-div");const t=document.createElement("div");t.textContent="This is where the stuff for the ABOUT MAEJOO tab goes",e.appendChild(t)}()}),document.getElementById("contactPageButton").addEventListener("click",function(){i(),function(){let e=document.querySelector("#content-div");const t=document.createElement("div");t.textContent="This is where the stuff for the CONTACT tab goes",e.appendChild(t)}()}),document.getElementById("menuPageButton").addEventListener("click",function(){i(),function(){let e=document.querySelector("#content-div");const t=document.createElement("div");t.textContent="This is where the stuff for the MENU tab goes",e.appendChild(t)}()}),document.getElementById("theLogo").addEventListener("click",function(){i(),function(){var e=document.querySelector("#content");let t=document.createElement("div");t.id="content-div",e.appendChild(t);let n=document.querySelector("#content-div"),i=document.createElement("img");i.src="../img/chikin.jpg",i.id="chikin",n.appendChild(i),o(void 0,"news-container","","#content-div"),o("newsitem","firstnewsitem","I Just want this to work.","#news-container"),document.getElementById("firstnewsitem").innerHTML='<h1>WHAT IS MAEJOO?</h1>\n    <h2>Maejoo does not mean "every week"</h2>\n    <h2>It is also the soybean baseof staple Korean Sauces</h2>',o("newsitem","secondnewsitem","I Just want this to work.","#news-container"),document.getElementById("secondnewsitem").innerHTML="<h1>THE CHEF</h1>\n    <h2>Maejoo was created by Chef Sue! It's delicious.</h2>",o("newsitem","thirdnewsitem","I Just want this to work.","#news-container"),document.getElementById("thirdnewsitem").innerHTML="<h1>BEST PICK</h1>\n    <h2>The chicken is absolutely scrumptious.</h2>"}()})}]);