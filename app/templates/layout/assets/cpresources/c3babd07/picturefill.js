/*! For license information please see picturefill.js.LICENSE.txt */
!function(e){var t,s,r,n,i,c,a,u=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(u)&&u.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",(s=document.createElement("source"),r=function(e){var t,r,n=e.parentNode;"PICTURE"===n.nodeName.toUpperCase()?(t=s.cloneNode(),n.insertBefore(t,n.firstElementChild),setTimeout((function(){n.removeChild(t)}))):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,r=e.sizes,e.sizes+=",100vw",setTimeout((function(){e.sizes=r})))},n=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)r(t[e])},i=function(){clearTimeout(t),t=setTimeout(n,99)},c=e.matchMedia&&matchMedia("(orientation: landscape)"),a=function(){i(),c&&c.addListener&&c.addListener(i)},s.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?a():document.addEventListener("DOMContentLoaded",a),i))}(window),function(e,t,s){"use strict";var r,n,i;t.createElement("picture");var c={},a=!1,u=function(){},o=t.createElement("img"),l=o.getAttribute,f=o.setAttribute,d=o.removeAttribute,p=t.documentElement,A={},m={algorithm:""},h="data-pfsrc",g=h+"set",v=navigator.userAgent,w=/rident/.test(v)||/ecko/.test(v)&&v.match(/rv\:(\d+)/)&&RegExp.$1>35,S="currentSrc",x=/\s+\+?\d+(e\d+)?w/,y=/(\([^)]+\))?\s*(.+)/,E=e.picturefillCFG,z="font-size:100%!important;",b=!0,T={},C={},R=e.devicePixelRatio,L={px:1,in:96},M=t.createElement("a"),P=!1,D=/^[ \t\n\r\u000c]+/,B=/^[, \t\n\r\u000c]+/,I=/^[^ \t\n\r\u000c]+/,U=/[,]+$/,$=/^\d+$/,k=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,W=function(e,t,s,r){e.addEventListener?e.addEventListener(t,s,r||!1):e.attachEvent&&e.attachEvent("on"+t,s)},Q=function(e){var t={};return function(s){return s in t||(t[s]=e(s)),t[s]}};function G(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}var H,F,N,O,q,j,V,_,K,J,X,Y,Z,ee,te,se=(H=/^([\d\.]+)(em|vw|px)$/,F=Q((function(e){return"return "+function(){for(var e=arguments,t=0,s=e[0];++t in e;)s=s.replace(e[t],e[++t]);return s}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"})),function(e,t){var s;if(!(e in T))if(T[e]=!1,t&&(s=e.match(H)))T[e]=s[1]*L[s[2]];else try{T[e]=new Function("e",F(e))(L)}catch(e){}return T[e]}),re=function(e,t){return e.w?(e.cWidth=c.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},ne=function(e){if(a){var s,r,n,i=e||{};if(i.elements&&1===i.elements.nodeType&&("IMG"===i.elements.nodeName.toUpperCase()?i.elements=[i.elements]:(i.context=i.elements,i.elements=null)),n=(s=i.elements||c.qsa(i.context||t,i.reevaluate||i.reselect?c.sel:c.selShort)).length){for(c.setupRun(i),P=!0,r=0;r<n;r++)c.fillImg(s[r],i);c.teardownRun(i)}}};function ie(e,t){return e.res-t.res}function ce(e,t){var s,r,n;if(e&&t)for(n=c.parseSet(t),e=c.makeUrl(e),s=0;s<n.length;s++)if(e===c.makeUrl(n[s].url)){r=n[s];break}return r}e.console&&console.warn,S in o||(S="src"),A["image/jpeg"]=!0,A["image/gif"]=!0,A["image/png"]=!0,A["image/svg+xml"]=t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),c.ns=("pf"+(new Date).getTime()).substr(0,9),c.supSrcset="srcset"in o,c.supSizes="sizes"in o,c.supPicture=!!e.HTMLPictureElement,c.supSrcset&&c.supPicture&&!c.supSizes&&(N=t.createElement("img"),o.srcset="data:,a",N.src="data:,a",c.supSrcset=o.complete===N.complete,c.supPicture=c.supSrcset&&c.supPicture),c.supSrcset&&!c.supSizes?(O="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",j=function(){2===q.width&&(c.supSizes=!0),n=c.supSrcset&&!c.supSizes,a=!0,setTimeout(ne)},(q=t.createElement("img")).onload=j,q.onerror=j,q.setAttribute("sizes","9px"),q.srcset=O+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",q.src=O):a=!0,c.selShort="picture>img,img[srcset]",c.sel=c.selShort,c.cfg=m,c.DPR=R||1,c.u=L,c.types=A,c.setSize=u,c.makeUrl=Q((function(e){return M.href=e,M.href})),c.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},c.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?c.matchesMedia=function(e){return!e||matchMedia(e).matches}:c.matchesMedia=c.mMQ,c.matchesMedia.apply(this,arguments)},c.mMQ=function(e){return!e||se(e)},c.calcLength=function(e){var t=se(e,!0)||!1;return t<0&&(t=!1),t},c.supportsType=function(e){return!e||A[e]},c.parseSize=Q((function(e){var t=(e||"").match(y);return{media:t&&t[1],length:t&&t[2]}})),c.parseSet=function(e){return e.cands||(e.cands=function(e,t){function s(t){var s,r=t.exec(e.substring(o));if(r)return s=r[0],o+=s.length,s}var r,n,i,c,a,u=e.length,o=0,l=[];function f(){var e,s,i,c,a,u,o,f,d,p=!1,A={};for(c=0;c<n.length;c++)u=(a=n[c])[a.length-1],o=a.substring(0,a.length-1),f=parseInt(o,10),d=parseFloat(o),$.test(o)&&"w"===u?((e||s)&&(p=!0),0===f?p=!0:e=f):k.test(o)&&"x"===u?((e||s||i)&&(p=!0),d<0?p=!0:s=d):$.test(o)&&"h"===u?((i||s)&&(p=!0),0===f?p=!0:i=f):p=!0;p||(A.url=r,e&&(A.w=e),s&&(A.d=s),i&&(A.h=i),i||s||e||(A.d=1),1===A.d&&(t.has1x=!0),A.set=t,l.push(A))}function d(){for(s(D),i="",c="in descriptor";;){if(a=e.charAt(o),"in descriptor"===c)if(G(a))i&&(n.push(i),i="",c="after descriptor");else{if(","===a)return o+=1,i&&n.push(i),void f();if("("===a)i+=a,c="in parens";else{if(""===a)return i&&n.push(i),void f();i+=a}}else if("in parens"===c)if(")"===a)i+=a,c="in descriptor";else{if(""===a)return n.push(i),void f();i+=a}else if("after descriptor"===c)if(G(a));else{if(""===a)return void f();c="in descriptor",o-=1}o+=1}}for(;;){if(s(B),o>=u)return l;r=s(I),n=[],","===r.slice(-1)?(r=r.replace(U,""),f()):d()}}(e.srcset,e)),e.cands},c.getEmValue=function(){var e;if(!r&&(e=t.body)){var s=t.createElement("div"),n=p.style.cssText,i=e.style.cssText;s.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",p.style.cssText=z,e.style.cssText=z,e.appendChild(s),r=s.offsetWidth,e.removeChild(s),r=parseFloat(r,10),p.style.cssText=n,e.style.cssText=i}return r||16},c.calcListLength=function(e){if(!(e in C)||m.uT){var t=c.calcLength(function(e){var t,s,r,n,i,a,u,o=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(r=(s=function(e){var t,s="",r=[],n=[],i=0,c=0,a=!1;function u(){s&&(r.push(s),s="")}function o(){r[0]&&(n.push(r),r=[])}for(;;){if(""===(t=e.charAt(c)))return u(),o(),n;if(a){if("*"===t&&"/"===e[c+1]){a=!1,c+=2,u();continue}c+=1}else{if(G(t)){if(e.charAt(c-1)&&G(e.charAt(c-1))||!s){c+=1;continue}if(0===i){u(),c+=1;continue}t=" "}else if("("===t)i+=1;else if(")"===t)i-=1;else{if(","===t){u(),o(),c+=1;continue}if("/"===t&&"*"===e.charAt(c+1)){a=!0,c+=2;continue}}s+=t,c+=1}}}(e)).length,t=0;t<r;t++)if(u=i=(n=s[t])[n.length-1],o.test(u)&&parseFloat(u)>=0||l.test(u)||"0"===u||"-0"===u||"+0"===u){if(a=i,n.pop(),0===n.length)return a;if(n=n.join(" "),c.matchesMedia(n))return a}return"100vw"}(e));C[e]=t||L.width}return C[e]},c.setRes=function(e){var t;if(e)for(var s=0,r=(t=c.parseSet(e)).length;s<r;s++)re(t[s],e.sizes);return t},c.setRes.res=re,c.applySetCandidate=function(e,t){if(e.length){var s,r,n,i,a,u,o,l,f,d,p,A,h,g,v,x,y=t[c.ns],E=c.DPR;if(u=y.curSrc||t[S],o=y.curCan||function(e,t,s){var r;return!s&&t&&(s=(s=e[c.ns].sets)&&s[s.length-1]),(r=ce(t,s))&&(t=c.makeUrl(t),e[c.ns].curSrc=t,e[c.ns].curCan=r,r.res||re(r,r.set.sizes)),r}(t,u,e[0].set),o&&o.set===e[0].set&&((f=w&&!t.complete&&o.res-.1>E)||(o.cached=!0,o.res>=E&&(a=o))),!a)for(e.sort(ie),a=e[(i=e.length)-1],r=0;r<i;r++)if((s=e[r]).res>=E){a=e[n=r-1]&&(f||u!==c.makeUrl(s.url))&&(d=e[n].res,p=s.res,A=E,h=e[n].cached,g=void 0,v=void 0,x=void 0,"saveData"===m.algorithm?d>2.7?x=A+1:(v=(p-A)*(g=Math.pow(d-.6,1.5)),h&&(v+=.1*g),x=d+v):x=A>1?Math.sqrt(d*p):d,x>A)?e[n]:s;break}a&&(l=c.makeUrl(a.url),y.curSrc=l,y.curCan=a,l!==u&&c.setSrc(t,a),c.setSize(t))}},c.setSrc=function(e,t){var s;e.src=t.url,"image/svg+xml"===t.set.type&&(s=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=s))},c.getSet=function(e){var t,s,r,n=!1,i=e[c.ns].sets;for(t=0;t<i.length&&!n;t++)if((s=i[t]).srcset&&c.matchesMedia(s.media)&&(r=c.supportsType(s.type))){"pending"===r&&(s=r),n=s;break}return n},c.parseSets=function(e,t,r){var i,a,u,o,p=t&&"PICTURE"===t.nodeName.toUpperCase(),A=e[c.ns];(A.src===s||r.src)&&(A.src=l.call(e,"src"),A.src?f.call(e,h,A.src):d.call(e,h)),(A.srcset===s||r.srcset||!c.supSrcset||e.srcset)&&(i=l.call(e,"srcset"),A.srcset=i,o=!0),A.sets=[],p&&(A.pic=!0,function(e,t){var s,r,n,i,a=e.getElementsByTagName("source");for(s=0,r=a.length;s<r;s++)(n=a[s])[c.ns]=!0,(i=n.getAttribute("srcset"))&&t.push({srcset:i,media:n.getAttribute("media"),type:n.getAttribute("type"),sizes:n.getAttribute("sizes")})}(t,A.sets)),A.srcset?(a={srcset:A.srcset,sizes:l.call(e,"sizes")},A.sets.push(a),(u=(n||A.src)&&x.test(A.srcset||""))||!A.src||ce(A.src,a)||a.has1x||(a.srcset+=", "+A.src,a.cands.push({url:A.src,d:1,set:a}))):A.src&&A.sets.push({srcset:A.src,sizes:null}),A.curCan=null,A.curSrc=s,A.supported=!(p||a&&!c.supSrcset||u&&!c.supSizes),o&&c.supSrcset&&!A.supported&&(i?(f.call(e,g,i),e.srcset=""):d.call(e,g)),A.supported&&!A.srcset&&(!A.src&&e.src||e.src!==c.makeUrl(A.src))&&(null===A.src?e.removeAttribute("src"):e.src=A.src),A.parsed=!0},c.fillImg=function(e,t){var s,r=t.reselect||t.reevaluate;e[c.ns]||(e[c.ns]={}),s=e[c.ns],(r||s.evaled!==i)&&(s.parsed&&!t.reevaluate||c.parseSets(e,e.parentNode,t),s.supported?s.evaled=i:function(e){var t,s=c.getSet(e),r=!1;"pending"!==s&&(r=i,s&&(t=c.setRes(s),c.applySetCandidate(t,e))),e[c.ns].evaled=r}(e))},c.setupRun=function(){P&&!b&&R===e.devicePixelRatio||(b=!1,R=e.devicePixelRatio,T={},C={},c.DPR=R||1,L.width=Math.max(e.innerWidth||0,p.clientWidth),L.height=Math.max(e.innerHeight||0,p.clientHeight),L.vw=L.width/100,L.vh=L.height/100,i=[L.height,L.width,R].join("-"),L.em=c.getEmValue(),L.rem=L.em)},c.supPicture?(ne=u,c.fillImg=u):(Y=e.attachEvent?/d$|^c/:/d$|^c|^i/,Z=function(){var e=t.readyState||"";ee=setTimeout(Z,"loading"===e?200:999),t.body&&(c.fillImgs(),(V=V||Y.test(e))&&clearTimeout(ee))},ee=setTimeout(Z,t.body?9:99),te=p.clientHeight,W(e,"resize",(_=function(){b=Math.max(e.innerWidth||0,p.clientWidth)!==L.width||p.clientHeight!==te,te=p.clientHeight,b&&c.fillImgs()},X=function(){var e=new Date-J;e<99?K=setTimeout(X,99-e):(K=null,_())},function(){J=new Date,K||(K=setTimeout(X,99))})),W(t,"readystatechange",Z)),c.picturefill=ne,c.fillImgs=ne,c.teardownRun=u,ne._=c,e.picturefillCFG={pf:c,push:function(e){var t=e.shift();"function"==typeof c[t]?c[t].apply(c,e):(m[t]=e[0],P&&c.fillImgs({reselect:!0}))}};for(;E&&E.length;)e.picturefillCFG.push(E.shift());e.picturefill=ne,"object"==typeof module&&"object"==typeof module.exports?module.exports=ne:"function"==typeof define&&define.amd&&define("picturefill",(function(){return ne})),c.supPicture||(A["image/webp"]=function(t,s){var r=new e.Image;return r.onerror=function(){A[t]=!1,ne()},r.onload=function(){A[t]=1===r.width,ne()},r.src="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==","pending"}("image/webp"))}(window,document);