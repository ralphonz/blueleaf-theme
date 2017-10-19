!function(e,t,n){function i(e,t){return typeof e===t}function r(e){var t=E.className,n=w._config.classPrefix||"";if(P&&(t=t.baseVal),w._config.enableJSClass){var i=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(i,"$1"+n+"js$2")}w._config.enableClasses&&(t+=" "+n+e.join(" "+n),P?E.className.baseVal=t:E.className=t)}function o(e,t){if("object"==typeof e)for(var n in e)z(e,n)&&o(n,e[n]);else{e=e.toLowerCase();var i=e.split("."),a=w[i[0]];if(2==i.length&&(a=a[i[1]]),void 0!==a)return w;t="function"==typeof t?t():t,1==i.length?w[i[0]]=t:(!w[i[0]]||w[i[0]]instanceof Boolean||(w[i[0]]=new Boolean(w[i[0]])),w[i[0]][i[1]]=t),r([(t&&0!=t?"":"no-")+i.join("-")]),w._trigger(e,t)}return w}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):P?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(){var e=t.body;return e||(e=a(P?"svg":"body"),e.fake=!0),e}function d(e,n,i,r){var o,d,l,u,c="modernizr",p=a("div"),f=s();if(parseInt(i,10))for(;i--;)l=a("div"),l.id=r?r[i]:c+(i+1),p.appendChild(l);return o=a("style"),o.type="text/css",o.id="s"+c,(f.fake?f:p).appendChild(o),f.appendChild(p),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),p.id=c,f.fake&&(f.style.background="",f.style.overflow="hidden",u=E.style.overflow,E.style.overflow="hidden",E.appendChild(f)),d=n(p,e),f.fake?(f.parentNode.removeChild(f),E.style.overflow=u,E.offsetHeight):p.parentNode.removeChild(p),!!d}function l(e,t){return!!~(""+e).indexOf(t)}function u(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(t,n,i){var r;if("getComputedStyle"in e){r=getComputedStyle.call(e,t,n);var o=e.console;if(null!==r)i&&(r=r.getPropertyValue(i));else if(o){var a=o.error?"error":"log";o[a].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else r=!n&&t.currentStyle&&t.currentStyle[i];return r}function p(t,i){var r=t.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(u(t[r]),i))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];r--;)o.push("("+u(t[r])+":"+i+")");return o=o.join(" or "),d("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==c(e,null,"position")})}return n}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function h(e,t,r,o){function s(){u&&(delete L.style,delete L.modElem)}if(o=!i(o,"undefined")&&o,!i(r,"undefined")){var d=p(e,r);if(!i(d,"undefined"))return d}for(var u,c,h,m,g,v=["modernizr","tspan","samp"];!L.style&&v.length;)u=!0,L.modElem=a(v.shift()),L.style=L.modElem.style;for(h=e.length,c=0;h>c;c++)if(m=e[c],g=L.style[m],l(m,"-")&&(m=f(m)),L.style[m]!==n){if(o||i(r,"undefined"))return s(),"pfx"!=t||m;try{L.style[m]=r}catch(e){}if(L.style[m]!=g)return s(),"pfx"!=t||m}return s(),!1}function m(e,t){return function(){return e.apply(t,arguments)}}function g(e,t,n){var r;for(var o in e)if(e[o]in t)return!1===n?e[o]:(r=t[e[o]],i(r,"function")?m(r,n||t):r);return!1}function v(e,t,n,r,o){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+B.join(a+" ")+a).split(" ");return i(t,"string")||i(t,"undefined")?h(s,t,r,o):(s=(e+" "+k.join(a+" ")+a).split(" "),g(s,t,n))}function b(e,t,i){return v(e,n,n,t,i)}function y(e,t){return e-1===t||e===t||e+1===t}var T=[],x={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){T.push({name:e,fn:t,options:n})},addAsyncTest:function(e){T.push({name:null,fn:e})}},w=function(){};w.prototype=x,w=new w;var A=[],C="Moz O ms Webkit",k=x._config.usePrefixes?C.toLowerCase().split(" "):[];x._domPrefixes=k;var S=x._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];x._prefixes=S;var z;!function(){var e={}.hasOwnProperty;z=i(e,"undefined")||i(e.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}();var E=t.documentElement,P="svg"===E.nodeName.toLowerCase();x._l={},x.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),w.hasOwnProperty(e)&&setTimeout(function(){w._trigger(e,w[e])},0)},x._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e;for(e=0;e<n.length;e++)(0,n[e])(t)},0),delete this._l[e]}},w._q.push(function(){x.addTest=o});var B=x._config.usePrefixes?C.split(" "):[];x._cssomPrefixes=B;var N=function(t){var i,r=S.length,o=e.CSSRule;if(void 0===o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),(i=t.replace(/-/g,"_").toUpperCase()+"_RULE")in o)return"@"+t;for(var a=0;r>a;a++){var s=S[a];if(s.toUpperCase()+"_"+i in o)return"@-"+s.toLowerCase()+"-"+t}return!1};x.atRule=N;var _=function(){function e(e,t){var r;return!!e&&(t&&"string"!=typeof t||(t=a(t||"div")),e="on"+e,r=e in t,!r&&i&&(t.setAttribute||(t=a("div")),t.setAttribute(e,""),r="function"==typeof t[e],t[e]!==n&&(t[e]=n),t.removeAttribute(e)),r)}var i=!("onblur"in t.documentElement);return e}();x.hasEvent=_;var R=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return d("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();x.mq=R;var j={elem:a("modernizr")};w._q.push(function(){delete j.elem});var L={style:j.elem.style};w._q.unshift(function(){delete L.style}),x.testAllProps=v;var O=x.prefixed=function(e,t,n){return 0===e.indexOf("@")?N(e):(-1!=e.indexOf("-")&&(e=f(e)),t?v(e,t,n):v(e,"pfx"))},I=(x.prefixedCSS=function(e){var t=O(e);return t&&u(t)},function(e,t){var n=!1,i=a("div"),r=i.style;if(e in r){var o=k.length;for(r[e]=t,n=r[e];o--&&!n;)r[e]="-"+k[o]+"-"+t,n=r[e]}return""===n&&(n=!1),n});x.prefixedCSSValue=I,x.testAllProps=b;var M=x.testProp=function(e,t,i){return h([e],n,t,i)},W=x.testStyles=d;w.addTest("audio",function(){var e=a("audio"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(e){}return t}),w.addTest("eventlistener","addEventListener"in e),w.addAsyncTest(function(){var n,i=function(e){E.contains(e)||E.appendChild(e)},r=function(e){e.fake&&e.parentNode&&e.parentNode.removeChild(e)},d=function(e,t){var n=!!e;if(n&&(n=new Boolean(n),n.blocked="blocked"===e),o("flash",function(){return n}),t&&p.contains(t)){for(;t.parentNode!==p;)t=t.parentNode;p.removeChild(t)}};try{n="ActiveXObject"in e&&"Pan"in new e.ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(e){}if(!("plugins"in navigator&&"Shockwave Flash"in navigator.plugins||n)||P)d(!1);else{var l,u,c=a("embed"),p=s();if(c.type="application/x-shockwave-flash",p.appendChild(c),!("Pan"in c||n))return i(p),d("blocked",c),void r(p);l=function(){return i(p),E.contains(p)?(E.contains(c)?(u=c.style.cssText,""!==u?d("blocked",c):d(!0,c)):d("blocked"),void r(p)):(p=t.body||p,c=a("embed"),c.type="application/x-shockwave-flash",p.appendChild(c),setTimeout(l,1e3))},setTimeout(l,10)}}),w.addTest("hiddenscroll",function(){return W("#modernizr {width:100px;height:100px;overflow:scroll}",function(e){return e.offsetWidth===e.clientWidth})});var q=a("input"),V="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),H={};w.input=function(t){for(var n=0,i=t.length;i>n;n++)H[t[n]]=!!(t[n]in q);return H.list&&(H.list=!(!a("datalist")||!e.HTMLDataListElement)),H}(V),w.addTest("json","JSON"in e&&"parse"in JSON&&"stringify"in JSON),w.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),w.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var i=["@media (",S.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");W(i,function(e){n=9===e.offsetTop})}return n}),w.addTest("video",function(){var e=a("video"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(e){}return t}),w.addTest("cssanimations",b("animationName","a",!0)),w.addTest("appearance",b("appearance")),w.addTest("backdropfilter",b("backdropFilter")),w.addTest("backgroundblendmode",O("backgroundBlendMode","text")),w.addTest("backgroundcliptext",function(){return b("backgroundClip","text")}),w.addTest("bgpositionshorthand",function(){var e=a("a"),t=e.style,n="right 10px bottom 10px";return t.cssText="background-position: "+n+";",t.backgroundPosition===n}),w.addTest("bgpositionxy",function(){return b("backgroundPositionX","3px",!0)&&b("backgroundPositionY","5px",!0)}),w.addTest("bgrepeatround",b("backgroundRepeat","round")),w.addTest("bgrepeatspace",b("backgroundRepeat","space")),w.addTest("backgroundsize",b("backgroundSize","100%",!0)),w.addTest("bgsizecover",b("backgroundSize","cover")),w.addTest("borderimage",b("borderImage","url() 1",!0)),w.addTest("borderradius",b("borderRadius","0px",!0)),w.addTest("boxshadow",b("boxShadow","1px 1px",!0)),w.addTest("boxsizing",b("boxSizing","border-box",!0)&&(t.documentMode===n||t.documentMode>7)),w.addTest("csscalc",function(){var e="width:",t=a("a");return t.style.cssText=e+S.join("calc(10px);"+e),!!t.style.length}),w.addTest("checked",function(){return W("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(e){var t=a("input");return t.setAttribute("type","checkbox"),t.setAttribute("checked","checked"),e.appendChild(t),20===t.offsetLeft})}),function(){w.addTest("csscolumns",function(){var e=!1,t=b("columnCount");try{(e=!!t)&&(e=new Boolean(e))}catch(e){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],i=0;i<n.length;i++)e=n[i].toLowerCase(),t=b("column"+n[i]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||b(n[i])),w.addTest("csscolumns."+e,t)}(),w.addTest("cssgridlegacy",b("grid-columns","10px",!0)),w.addTest("cssgrid",b("grid-template-rows","none",!0)),w.addTest("displayrunin",b("display","run-in"),{aliases:["display-runin"]}),W("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}",function(e){var t,n=e.childNodes;t=n[0].offsetLeft<n[1].offsetLeft,w.addTest("displaytable",t,{aliases:["display-table"]})},2),w.addTest("ellipsis",b("textOverflow","ellipsis"));var $=e.CSS;w.addTest("cssescape",!!$&&"function"==typeof $.escape),w.addTest("cssexunit",function(){var e,t=j.elem.style;try{t.fontSize="3ex",e=-1!==t.fontSize.indexOf("ex")}catch(t){e=!1}return e});var F="CSS"in e&&"supports"in e.CSS,G="supportsCSS"in e;w.addTest("supports",F||G),w.addTest("cssfilters",function(){if(w.supports)return b("filter","blur(2px)");var e=a("a");return e.style.cssText=S.join("filter:blur(2px); "),!!e.style.length&&(t.documentMode===n||t.documentMode>9)}),w.addTest("flexbox",b("flexBasis","1px",!0)),w.addTest("flexboxtweener",b("flexAlign","end",!0)),w.addTest("flexwrap",b("flexWrap","wrap",!0)),function(){var e=navigator.userAgent,t=e.match(/w(eb)?osbrowser/gi),n=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9;return t||n}()?w.addTest("fontface",!1):W('@font-face {font-family:"font";src:url("https://")}',function(e,n){var i=t.getElementById("smodernizr"),r=i.sheet||i.styleSheet,o=r?r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"":"",a=/src/i.test(o)&&0===o.indexOf(n.split(" ")[0]);w.addTest("fontface",a)}),W('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(e){w.addTest("generatedcontent",e.offsetHeight>=6)}),w.addTest("cssgradients",function(){for(var e,t="background-image:",n="",i=0,r=S.length-1;r>i;i++)e=0===i?"to ":"",n+=t+S[i]+"linear-gradient("+e+"left top, #9f9, white);";w._config.usePrefixes&&(n+=t+"-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));");var o=a("a"),s=o.style;return s.cssText=n,(""+s.backgroundImage).indexOf("gradient")>-1}),w.addTest("hsla",function(){var e=a("a").style;return e.cssText="background-color:hsla(120,40%,100%,.5)",l(e.backgroundColor,"rgba")||l(e.backgroundColor,"hsla")}),w.addAsyncTest(function(){function n(){function r(){try{var e=a("div"),n=a("span"),i=e.style,r=0,o=0,s=!1,d=t.body.firstElementChild||t.body.firstChild;return e.appendChild(n),n.innerHTML="Bacon ipsum dolor sit amet jerky velit in culpa hamburger et. Laborum dolor proident, enim dolore duis commodo et strip steak. Salami anim et, veniam consectetur dolore qui tenderloin jowl velit sirloin. Et ad culpa, fatback cillum jowl ball tip ham hock nulla short ribs pariatur aute. Pig pancetta ham bresaola, ut boudin nostrud commodo flank esse cow tongue culpa. Pork belly bresaola enim pig, ea consectetur nisi. Fugiat officia turkey, ea cow jowl pariatur ullamco proident do laborum velit sausage. Magna biltong sint tri-tip commodo sed bacon, esse proident aliquip. Ullamco ham sint fugiat, velit in enim sed mollit nulla cow ut adipisicing nostrud consectetur. Proident dolore beef ribs, laborum nostrud meatball ea laboris rump cupidatat labore culpa. Shankle minim beef, velit sint cupidatat fugiat tenderloin pig et ball tip. Ut cow fatback salami, bacon ball tip et in shank strip steak bresaola. In ut pork belly sed mollit tri-tip magna culpa veniam, short ribs qui in andouille ham consequat. Dolore bacon t-bone, velit short ribs enim strip steak nulla. Voluptate labore ut, biltong swine irure jerky. Cupidatat excepteur aliquip salami dolore. Ball tip strip steak in pork dolor. Ad in esse biltong. Dolore tenderloin exercitation ad pork loin t-bone, dolore in chicken ball tip qui pig. Ut culpa tongue, sint ribeye dolore ex shank voluptate hamburger. Jowl et tempor, boudin pork chop labore ham hock drumstick consectetur tri-tip elit swine meatball chicken ground round. Proident shankle mollit dolore. Shoulder ut duis t-bone quis reprehenderit. Meatloaf dolore minim strip steak, laboris ea aute bacon beef ribs elit shank in veniam drumstick qui. Ex laboris meatball cow tongue pork belly. Ea ball tip reprehenderit pig, sed fatback boudin dolore flank aliquip laboris eu quis. Beef ribs duis beef, cow corned beef adipisicing commodo nisi deserunt exercitation. Cillum dolor t-bone spare ribs, ham hock est sirloin. Brisket irure meatloaf in, boudin pork belly sirloin ball tip. Sirloin sint irure nisi nostrud aliqua. Nostrud nulla aute, enim officia culpa ham hock. Aliqua reprehenderit dolore sunt nostrud sausage, ea boudin pork loin ut t-bone ham tempor. Tri-tip et pancetta drumstick laborum. Ham hock magna do nostrud in proident. Ex ground round fatback, venison non ribeye in.",t.body.insertBefore(e,d),i.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;",r=n.offsetHeight,o=n.offsetWidth,i.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;"+S.join("hyphens:auto; "),s=n.offsetHeight!=r||n.offsetWidth!=o,t.body.removeChild(e),e.removeChild(n),s}catch(e){return!1}}function s(e,n){try{var i=a("div"),r=a("span"),o=i.style,s=0,d=!1,l=!1,u=!1,c=t.body.firstElementChild||t.body.firstChild;return o.cssText="position:absolute;top:0;left:0;overflow:visible;width:1.25em;",i.appendChild(r),t.body.insertBefore(i,c),r.innerHTML="mm",s=r.offsetHeight,r.innerHTML="m"+e+"m",l=r.offsetHeight>s,n?(r.innerHTML="m<br />m",s=r.offsetWidth,r.innerHTML="m"+e+"m",u=r.offsetWidth>s):u=!0,!0===l&&!0===u&&(d=!0),t.body.removeChild(i),i.removeChild(r),d}catch(e){return!1}}function d(n){try{var i,r=a("input"),o=a("div"),s="lebowski",d=!1,l=t.body.firstElementChild||t.body.firstChild;o.innerHTML=s+n+s,t.body.insertBefore(o,l),t.body.insertBefore(r,o),r.setSelectionRange?(r.focus(),r.setSelectionRange(0,0)):r.createTextRange&&(i=r.createTextRange(),i.collapse(!0),i.moveEnd("character",0),i.moveStart("character",0),i.select());try{e.find?d=e.find(s+s):(i=e.self.document.body.createTextRange(),d=i.findText(s+s))}catch(e){d=!1}return t.body.removeChild(o),t.body.removeChild(r),d}catch(e){return!1}}return t.body||t.getElementsByTagName("body")[0]?(o("csshyphens",function(){if(!b("hyphens","auto",!0))return!1;try{return r()}catch(e){return!1}}),o("softhyphens",function(){try{return s("&#173;",!0)&&s("&#8203;",!1)}catch(e){return!1}}),void o("softhyphensfind",function(){try{return d("&#173;")&&d("&#8203;")}catch(e){return!1}})):void setTimeout(n,i)}var i=300;setTimeout(n,i)}),w.addTest("cssinvalid",function(){return W("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:invalid{width:50px}",function(e){var t=a("input");return t.required=!0,e.appendChild(t),t.clientWidth>10})}),W("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){w.addTest("lastchild",e.lastChild.offsetWidth>e.firstChild.offsetWidth)},2),w.addTest("cssmask",b("maskRepeat","repeat-x",!0)),w.addTest("mediaqueries",R("only all")),w.addTest("multiplebgs",function(){var e=a("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),W("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){for(var t=e.getElementsByTagName("div"),n=!0,i=0;5>i;i++)n=n&&t[i].offsetWidth===i%2+1;w.addTest("nthchild",n)},5),w.addTest("objectfit",!!O("objectFit"),{aliases:["object-fit"]}),w.addTest("opacity",function(){var e=a("a").style;return e.cssText=S.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),w.addTest("overflowscrolling",b("overflowScrolling","touch",!0)),w.addTest("csspointerevents",function(){var e=a("a").style;return e.cssText="pointer-events:auto","auto"===e.pointerEvents}),w.addTest("csspositionsticky",function(){var e="position:",t="sticky",n=a("a"),i=n.style;return i.cssText=e+S.join(t+";"+e).slice(0,-e.length),-1!==i.position.indexOf(t)}),w.addTest("csspseudoanimations",function(){var t=!1;if(!w.cssanimations||!e.getComputedStyle)return t;var n=["@",w._prefixes.join("keyframes csspseudoanimations { from { font-size: 10px; } }@").replace(/\@$/,""),'#modernizr:before { content:" "; font-size:5px;',w._prefixes.join("animation:csspseudoanimations 1ms infinite;"),"}"].join("");return w.testStyles(n,function(n){t="10px"===e.getComputedStyle(n,":before").getPropertyValue("font-size")}),t}),w.addTest("csstransitions",b("transition","all",!0)),w.addTest("csspseudotransitions",function(){var t=!1;if(!w.csstransitions||!e.getComputedStyle)return t;var n='#modernizr:before { content:" "; font-size:5px;'+w._prefixes.join("transition:0s 100s;")+"}#modernizr.trigger:before { font-size:10px; }";return w.testStyles(n,function(n){e.getComputedStyle(n,":before").getPropertyValue("font-size"),n.className+="trigger",t="5px"===e.getComputedStyle(n,":before").getPropertyValue("font-size")}),t}),w.addTest("cssreflections",b("boxReflect","above",!0)),w.addTest("regions",function(){if(P)return!1;var e=O("flowFrom"),t=O("flowInto"),i=!1;if(!e||!t)return i;var r=a("iframe"),o=a("div"),s=a("div"),d=a("div"),l="modernizr_flow_for_regions_check";s.innerText="M",o.style.cssText="top: 150px; left: 150px; padding: 0px;",d.style.cssText="width: 50px; height: 50px; padding: 42px;",d.style[e]=l,o.appendChild(s),o.appendChild(d),E.appendChild(o);var u,c,p=s.getBoundingClientRect();return s.style[t]=l,u=s.getBoundingClientRect(),c=parseInt(u.left-p.left,10),E.removeChild(o),42==c?i=!0:(E.appendChild(r),p=r.getBoundingClientRect(),r.style[t]=l,u=r.getBoundingClientRect(),p.height>0&&p.height!==u.height&&0===u.height&&(i=!0)),s=d=o=r=n,i}),w.addTest("cssresize",b("resize","both",!0)),w.addTest("rgba",function(){var e=a("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}),w.addTest("scrollsnappoints",b("scrollSnapType")),w.addTest("shapes",b("shapeOutside","content-box",!0)),w.addTest("siblinggeneral",function(){return W("#modernizr div {width:100px} #modernizr div ~ div {width:200px;display:block}",function(e){return 200==e.lastChild.offsetWidth},2)}),w.addTest("target",function(){var t=e.document;if(!("querySelectorAll"in t))return!1;try{return t.querySelectorAll(":target"),!0}catch(e){return!1}}),w.addTest("textalignlast",b("textAlignLast")),w.addTest("textshadow",M("textShadow","1px 1px")),w.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&b("transform","scale(1)",!0)}),w.addTest("cssvalid",function(){return W("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px}",function(e){var t=a("input");return e.appendChild(t),t.clientWidth>10})}),W("#modernizr { height: 50vh; }",function(t){var n=parseInt(e.innerHeight/2,10),i=parseInt(c(t,null,"height"),10);w.addTest("cssvhunit",i==n)}),W("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(e){var t=e.childNodes[2],n=e.childNodes[1],i=e.childNodes[0],r=parseInt((n.offsetWidth-n.clientWidth)/2,10),o=i.clientWidth/100,a=i.clientHeight/100,s=parseInt(50*Math.max(o,a),10),d=parseInt(c(t,null,"width"),10);w.addTest("cssvmaxunit",y(s,d)||y(s,d-r))},3),W("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(e){var t=e.childNodes[2],n=e.childNodes[1],i=e.childNodes[0],r=parseInt((n.offsetWidth-n.clientWidth)/2,10),o=i.clientWidth/100,a=i.clientHeight/100,s=parseInt(50*Math.min(o,a),10),d=parseInt(c(t,null,"width"),10);w.addTest("cssvminunit",y(s,d)||y(s,d-r))},3),W("#modernizr { width: 50vw; }",function(t){var n=parseInt(e.innerWidth/2,10),i=parseInt(c(t,null,"width"),10);w.addTest("cssvwunit",i==n)}),w.addTest("wrapflow",function(){var e=O("wrapFlow");if(!e||P)return!1;var t=e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-"),i=a("div"),r=a("div"),o=a("span");r.style.cssText="position: absolute; left: 50px; width: 100px; height: 20px;"+t+":end;",o.innerText="X",i.appendChild(r),i.appendChild(o),E.appendChild(i);var s=o.offsetLeft;return E.removeChild(i),r=o=i=n,150==s}),w.addTest("createelementattrs",function(){try{return"test"==a('<input name="test" />').getAttribute("name")}catch(e){return!1}},{aliases:["createelement-attrs"]}),w.addTest("microdata","getItems"in t),w.addTest("fileinput",function(){if(navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/))return!1;var e=a("input");return e.type="file",!e.disabled}),w.addTest("formattribute",function(){var e,n=a("form"),i=a("input"),r=a("div"),o="formtest"+(new Date).getTime(),s=!1;n.id=o;try{i.setAttribute("form",o)}catch(n){t.createAttribute&&(e=t.createAttribute("form"),e.nodeValue=o,i.setAttributeNode(e))}return r.appendChild(n),r.appendChild(i),E.appendChild(r),s=n.elements&&1===n.elements.length&&i.form==n,r.parentNode.removeChild(r),s});var U="search tel url email datetime date month week time datetime-local number range color".split(" "),D={};w.inputtypes=function(e){for(var i,r,o,a=e.length,s=0;a>s;s++)q.setAttribute("type",i=e[s]),o="text"!==q.type&&"style"in q,o&&(q.value="1)",q.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(i)&&q.style.WebkitAppearance!==n?(E.appendChild(q),r=t.defaultView,o=r.getComputedStyle&&"textfield"!==r.getComputedStyle(q,null).WebkitAppearance&&0!==q.offsetHeight,E.removeChild(q)):/^(search|tel)$/.test(i)||(o=/^(url|email)$/.test(i)?q.checkValidity&&!1===q.checkValidity():"1)"!=q.value)),D[e[s]]=!!o;return D}(U),w.addTest("formvalidation",function(){var t=a("form");if(!("checkValidity"in t&&"addEventListener"in t))return!1;if("reportValidity"in t)return!0;var n,i=!1;return w.formvalidationapi=!0,t.addEventListener("submit",function(t){(!e.opera||e.operamini)&&t.preventDefault(),t.stopPropagation()},!1),t.innerHTML='<input name="modTest" required="required" /><button></button>',W("#modernizr form{position:absolute;top:-99999em}",function(e){e.appendChild(t),n=t.getElementsByTagName("input")[0],n.addEventListener("invalid",function(e){i=!0,e.preventDefault(),e.stopPropagation()},!1),w.formvalidationmessage=!!n.validationMessage,t.getElementsByTagName("button")[0].click()}),i}),w.addTest("localizednumber",function(){if(!w.inputtypes.number)return!1;if(!w.formvalidation)return!1;var e,n=a("div"),i=s(),r=function(){return E.insertBefore(i,E.firstElementChild||E.firstChild)}();n.innerHTML='<input type="number" value="1.0" step="0.1"/>';var o=n.childNodes[0];r.appendChild(n),o.focus();try{t.execCommand("SelectAll",!1),t.execCommand("InsertText",!1,"1,1")}catch(e){}return e="number"===o.type&&1.1===o.valueAsNumber&&o.checkValidity(),r.removeChild(n),i.fake&&r.parentNode.removeChild(r),e}),w.addTest("placeholder","placeholder"in a("input")&&"placeholder"in a("textarea")),w.addAsyncTest(function(){var e,t,n,i=a("img"),r="sizes"in i;!r&&"srcset"in i?(t="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",n=function(){o("sizes",2==i.width)},i.onload=n,i.onerror=n,i.setAttribute("sizes","9px"),i.srcset=e+" 1w,"+t+" 8w",i.src=e):o("sizes",r)}),w.addTest("svgasimg",t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"));var J={}.toString;w.addTest("svgclippaths",function(){return!!t.createElementNS&&/SVGClipPath/.test(J.call(t.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),w.addTest("svgfilters",function(){var t=!1;try{t="SVGFEColorMatrixElement"in e&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(e){}return t}),w.addTest("svgforeignobject",function(){return!!t.createElementNS&&/SVGForeignObject/.test(J.call(t.createElementNS("http://www.w3.org/2000/svg","foreignObject")))}),w.addTest("inlinesvg",function(){var e=a("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)}),w.addTest("smil",function(){return!!t.createElementNS&&/SVGAnimate/.test(J.call(t.createElementNS("http://www.w3.org/2000/svg","animate")))}),w.addAsyncTest(function(){function e(){var e=new Image;e.onerror=function(){o("datauri",!0),w.datauri=new Boolean(!0),w.datauri.over32kb=!1},e.onload=function(){o("datauri",!0),w.datauri=new Boolean(!0),w.datauri.over32kb=1==e.width&&1==e.height};for(var t="R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";t.length<33e3;)t="\r\n"+t;e.src="data:image/gif;base64,"+t}-1!==navigator.userAgent.indexOf("MSIE 7.")&&setTimeout(function(){o("datauri",!1)},10);var t=new Image;t.onerror=function(){o("datauri",!1)},t.onload=function(){1==t.width&&1==t.height?e():o("datauri",!1)},t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}),function(){var e,t,n,r,o,a,s;for(var d in T)if(T.hasOwnProperty(d)){if(e=[],t=T[d],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=i(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)a=e[o],s=a.split("."),1===s.length?w[s[0]]=r:(!w[s[0]]||w[s[0]]instanceof Boolean||(w[s[0]]=new Boolean(w[s[0]])),w[s[0]][s[1]]=r),A.push((r?"":"no-")+s.join("-"))}}(),delete x.addTest,delete x.addAsyncTest;for(var X=0;X<w._q.length;X++)w._q[X]();e.Modernizr=w}(window,document);
//# sourceMappingURL=modernizr.js.map
