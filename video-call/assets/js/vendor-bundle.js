/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});

/*
 *  Copyright (c) 2014 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* More information about these options at jshint.com/docs/options */
/* jshint browser: true, camelcase: true, curly: true, devel: true,
   eqeqeq: true, forin: false, globalstrict: true, node: true,
   quotmark: single, undef: true, unused: strict */
/* global mozRTCIceCandidate, mozRTCPeerConnection, Promise,
mozRTCSessionDescription, webkitRTCPeerConnection, MediaStreamTrack */
/* exported trace,requestUserMedia */

'use strict';

var getUserMedia = null;
var attachMediaStream = null;
var reattachMediaStream = null;
var webrtcDetectedBrowser = null;
var webrtcDetectedVersion = null;
var webrtcMinimumVersion = null;
var webrtcUtils = {
  log: function() {
    // suppress console.log output when being included as a module.
    if (typeof module !== 'undefined' ||
        typeof require === 'function' && typeof define === 'function') {
      return;
    }
    console.log.apply(console, arguments);
  },
  extractVersion: function(uastring, expr, pos) {
    var match = uastring.match(expr);
    return match && match.length >= pos && parseInt(match[pos]);
  }
};

function trace(text) {
  // This function is used for logging.
  if (text[text.length - 1] === '\n') {
    text = text.substring(0, text.length - 1);
  }
  if (window.performance) {
    var now = (window.performance.now() / 1000).toFixed(3);
    webrtcUtils.log(now + ': ' + text);
  } else {
    webrtcUtils.log(text);
  }
}

if (typeof window === 'object') {
  if (window.HTMLMediaElement &&
    !('srcObject' in window.HTMLMediaElement.prototype)) {
    // Shim the srcObject property, once, when HTMLMediaElement is found.
    Object.defineProperty(window.HTMLMediaElement.prototype, 'srcObject', {
      get: function() {
        // If prefixed srcObject property exists, return it.
        // Otherwise use the shimmed property, _srcObject
        return 'mozSrcObject' in this ? this.mozSrcObject : this._srcObject;
      },
      set: function(stream) {
        if ('mozSrcObject' in this) {
          this.mozSrcObject = stream;
        } else {
          // Use _srcObject as a private property for this shim
          this._srcObject = stream;
          // TODO: revokeObjectUrl(this.src) when !stream to release resources?
          this.src = URL.createObjectURL(stream);
        }
      }
    });
  }
  // Proxy existing globals
  getUserMedia = window.navigator && window.navigator.getUserMedia;
}

// Attach a media stream to an element.
attachMediaStream = function(element, stream) {
  element.srcObject = stream;
};

reattachMediaStream = function(to, from) {
  to.srcObject = from.srcObject;
};

if (typeof window === 'undefined' || !window.navigator) {
  webrtcUtils.log('This does not appear to be a browser');
  webrtcDetectedBrowser = 'not a browser';
} else if (navigator.mozGetUserMedia && window.mozRTCPeerConnection) {
  webrtcUtils.log('This appears to be Firefox');

  webrtcDetectedBrowser = 'firefox';

  // the detected firefox version.
  webrtcDetectedVersion = webrtcUtils.extractVersion(navigator.userAgent,
      /Firefox\/([0-9]+)\./, 1);

  // the minimum firefox version still supported by adapter.
  webrtcMinimumVersion = 31;

  // The RTCPeerConnection object.
  window.RTCPeerConnection = function(pcConfig, pcConstraints) {
    if (webrtcDetectedVersion < 38) {
      // .urls is not supported in FF < 38.
      // create RTCIceServers with a single url.
      if (pcConfig && pcConfig.iceServers) {
        var newIceServers = [];
        for (var i = 0; i < pcConfig.iceServers.length; i++) {
          var server = pcConfig.iceServers[i];
          if (server.hasOwnProperty('urls')) {
            for (var j = 0; j < server.urls.length; j++) {
              var newServer = {
                url: server.urls[j]
              };
              if (server.urls[j].indexOf('turn') === 0) {
                newServer.username = server.username;
                newServer.credential = server.credential;
              }
              newIceServers.push(newServer);
            }
          } else {
            newIceServers.push(pcConfig.iceServers[i]);
          }
        }
        pcConfig.iceServers = newIceServers;
      }
    }
    return new mozRTCPeerConnection(pcConfig, pcConstraints); // jscs:ignore requireCapitalizedConstructors
  };

  // The RTCSessionDescription object.
  if (!window.RTCSessionDescription) {
    window.RTCSessionDescription = mozRTCSessionDescription;
  }

  // The RTCIceCandidate object.
  if (!window.RTCIceCandidate) {
    window.RTCIceCandidate = mozRTCIceCandidate;
  }

  // getUserMedia constraints shim.
  getUserMedia = function(constraints, onSuccess, onError) {
    var constraintsToFF37 = function(c) {
      if (typeof c !== 'object' || c.require) {
        return c;
      }
      var require = [];
      Object.keys(c).forEach(function(key) {
        if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
          return;
        }
        var r = c[key] = (typeof c[key] === 'object') ?
            c[key] : {ideal: c[key]};
        if (r.min !== undefined ||
            r.max !== undefined || r.exact !== undefined) {
          require.push(key);
        }
        if (r.exact !== undefined) {
          if (typeof r.exact === 'number') {
            r.min = r.max = r.exact;
          } else {
            c[key] = r.exact;
          }
          delete r.exact;
        }
        if (r.ideal !== undefined) {
          c.advanced = c.advanced || [];
          var oc = {};
          if (typeof r.ideal === 'number') {
            oc[key] = {min: r.ideal, max: r.ideal};
          } else {
            oc[key] = r.ideal;
          }
          c.advanced.push(oc);
          delete r.ideal;
          if (!Object.keys(r).length) {
            delete c[key];
          }
        }
      });
      if (require.length) {
        c.require = require;
      }
      return c;
    };
    if (webrtcDetectedVersion < 38) {
      webrtcUtils.log('spec: ' + JSON.stringify(constraints));
      if (constraints.audio) {
        constraints.audio = constraintsToFF37(constraints.audio);
      }
      if (constraints.video) {
        constraints.video = constraintsToFF37(constraints.video);
      }
      webrtcUtils.log('ff37: ' + JSON.stringify(constraints));
    }
    return navigator.mozGetUserMedia(constraints, onSuccess, onError);
  };

  navigator.getUserMedia = getUserMedia;

  // Shim for mediaDevices on older versions.
  if (!navigator.mediaDevices) {
    navigator.mediaDevices = {getUserMedia: requestUserMedia,
      addEventListener: function() { },
      removeEventListener: function() { }
    };
  }
  navigator.mediaDevices.enumerateDevices =
      navigator.mediaDevices.enumerateDevices || function() {
    return new Promise(function(resolve) {
      var infos = [
        {kind: 'audioinput', deviceId: 'default', label: '', groupId: ''},
        {kind: 'videoinput', deviceId: 'default', label: '', groupId: ''}
      ];
      resolve(infos);
    });
  };

  if (webrtcDetectedVersion < 41) {
    // Work around http://bugzil.la/1169665
    var orgEnumerateDevices =
        navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);
    navigator.mediaDevices.enumerateDevices = function() {
      return orgEnumerateDevices().then(undefined, function(e) {
        if (e.name === 'NotFoundError') {
          return [];
        }
        throw e;
      });
    };
  }
} else if (navigator.webkitGetUserMedia && window.webkitRTCPeerConnection) {
  webrtcUtils.log('This appears to be Chrome');

  webrtcDetectedBrowser = 'chrome';

  // the detected chrome version.
  webrtcDetectedVersion = webrtcUtils.extractVersion(navigator.userAgent,
      /Chrom(e|ium)\/([0-9]+)\./, 2);

  // the minimum chrome version still supported by adapter.
  webrtcMinimumVersion = 38;

  // The RTCPeerConnection object.
  window.RTCPeerConnection = function(pcConfig, pcConstraints) {
    // Translate iceTransportPolicy to iceTransports,
    // see https://code.google.com/p/webrtc/issues/detail?id=4869
    if (pcConfig && pcConfig.iceTransportPolicy) {
      pcConfig.iceTransports = pcConfig.iceTransportPolicy;
    }

    var pc = new webkitRTCPeerConnection(pcConfig, pcConstraints); // jscs:ignore requireCapitalizedConstructors
    var origGetStats = pc.getStats.bind(pc);
    pc.getStats = function(selector, successCallback, errorCallback) { // jshint ignore: line
      var self = this;
      var args = arguments;

      // If selector is a function then we are in the old style stats so just
      // pass back the original getStats format to avoid breaking old users.
      if (arguments.length > 0 && typeof selector === 'function') {
        return origGetStats(selector, successCallback);
      }

      var fixChromeStats = function(response) {
        var standardReport = {};
        var reports = response.result();
        reports.forEach(function(report) {
          var standardStats = {
            id: report.id,
            timestamp: report.timestamp,
            type: report.type
          };
          report.names().forEach(function(name) {
            standardStats[name] = report.stat(name);
          });
          standardReport[standardStats.id] = standardStats;
        });

        return standardReport;
      };

      if (arguments.length >= 2) {
        var successCallbackWrapper = function(response) {
          args[1](fixChromeStats(response));
        };

        return origGetStats.apply(this, [successCallbackWrapper, arguments[0]]);
      }

      // promise-support
      return new Promise(function(resolve, reject) {
        if (args.length === 1 && selector === null) {
          origGetStats.apply(self, [
              function(response) {
                resolve.apply(null, [fixChromeStats(response)]);
              }, reject]);
        } else {
          origGetStats.apply(self, [resolve, reject]);
        }
      });
    };

    return pc;
  };

  // add promise support
  ['createOffer', 'createAnswer'].forEach(function(method) {
    var nativeMethod = webkitRTCPeerConnection.prototype[method];
    webkitRTCPeerConnection.prototype[method] = function() {
      var self = this;
      if (arguments.length < 1 || (arguments.length === 1 &&
          typeof(arguments[0]) === 'object')) {
        var opts = arguments.length === 1 ? arguments[0] : undefined;
        return new Promise(function(resolve, reject) {
          nativeMethod.apply(self, [resolve, reject, opts]);
        });
      } else {
        return nativeMethod.apply(this, arguments);
      }
    };
  });

  ['setLocalDescription', 'setRemoteDescription',
      'addIceCandidate'].forEach(function(method) {
    var nativeMethod = webkitRTCPeerConnection.prototype[method];
    webkitRTCPeerConnection.prototype[method] = function() {
      var args = arguments;
      var self = this;
      return new Promise(function(resolve, reject) {
        nativeMethod.apply(self, [args[0],
            function() {
              resolve();
              if (args.length >= 2) {
                args[1].apply(null, []);
              }
            },
            function(err) {
              reject(err);
              if (args.length >= 3) {
                args[2].apply(null, [err]);
              }
            }]
          );
      });
    };
  });

  // getUserMedia constraints shim.
  var constraintsToChrome = function(c) {
    if (typeof c !== 'object' || c.mandatory || c.optional) {
      return c;
    }
    var cc = {};
    Object.keys(c).forEach(function(key) {
      if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
        return;
      }
      var r = (typeof c[key] === 'object') ? c[key] : {ideal: c[key]};
      if (r.exact !== undefined && typeof r.exact === 'number') {
        r.min = r.max = r.exact;
      }
      var oldname = function(prefix, name) {
        if (prefix) {
          return prefix + name.charAt(0).toUpperCase() + name.slice(1);
        }
        return (name === 'deviceId') ? 'sourceId' : name;
      };
      if (r.ideal !== undefined) {
        cc.optional = cc.optional || [];
        var oc = {};
        if (typeof r.ideal === 'number') {
          oc[oldname('min', key)] = r.ideal;
          cc.optional.push(oc);
          oc = {};
          oc[oldname('max', key)] = r.ideal;
          cc.optional.push(oc);
        } else {
          oc[oldname('', key)] = r.ideal;
          cc.optional.push(oc);
        }
      }
      if (r.exact !== undefined && typeof r.exact !== 'number') {
        cc.mandatory = cc.mandatory || {};
        cc.mandatory[oldname('', key)] = r.exact;
      } else {
        ['min', 'max'].forEach(function(mix) {
          if (r[mix] !== undefined) {
            cc.mandatory = cc.mandatory || {};
            cc.mandatory[oldname(mix, key)] = r[mix];
          }
        });
      }
    });
    if (c.advanced) {
      cc.optional = (cc.optional || []).concat(c.advanced);
    }
    return cc;
  };

  getUserMedia = function(constraints, onSuccess, onError) {
    if (constraints.audio) {
      constraints.audio = constraintsToChrome(constraints.audio);
    }
    if (constraints.video) {
      constraints.video = constraintsToChrome(constraints.video);
    }
    webrtcUtils.log('chrome: ' + JSON.stringify(constraints));
    return navigator.webkitGetUserMedia(constraints, onSuccess, onError);
  };
  navigator.getUserMedia = getUserMedia;

  if (!navigator.mediaDevices) {
    navigator.mediaDevices = {getUserMedia: requestUserMedia,
                              enumerateDevices: function() {
      return new Promise(function(resolve) {
        var kinds = {audio: 'audioinput', video: 'videoinput'};
        return MediaStreamTrack.getSources(function(devices) {
          resolve(devices.map(function(device) {
            return {label: device.label,
                    kind: kinds[device.kind],
                    deviceId: device.id,
                    groupId: ''};
          }));
        });
      });
    }};
  }

  // A shim for getUserMedia method on the mediaDevices object.
  // TODO(KaptenJansson) remove once implemented in Chrome stable.
  if (!navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia = function(constraints) {
      return requestUserMedia(constraints);
    };
  } else {
    // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
    // function which returns a Promise, it does not accept spec-style
    // constraints.
    var origGetUserMedia = navigator.mediaDevices.getUserMedia.
        bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function(c) {
      webrtcUtils.log('spec:   ' + JSON.stringify(c)); // whitespace for alignment
      c.audio = constraintsToChrome(c.audio);
      c.video = constraintsToChrome(c.video);
      webrtcUtils.log('chrome: ' + JSON.stringify(c));
      return origGetUserMedia(c);
    };
  }

  // Dummy devicechange event methods.
  // TODO(KaptenJansson) remove once implemented in Chrome stable.
  if (typeof navigator.mediaDevices.addEventListener === 'undefined') {
    navigator.mediaDevices.addEventListener = function() {
      webrtcUtils.log('Dummy mediaDevices.addEventListener called.');
    };
  }
  if (typeof navigator.mediaDevices.removeEventListener === 'undefined') {
    navigator.mediaDevices.removeEventListener = function() {
      webrtcUtils.log('Dummy mediaDevices.removeEventListener called.');
    };
  }

  // Attach a media stream to an element.
  attachMediaStream = function(element, stream) {
    if (webrtcDetectedVersion >= 43) {
      element.srcObject = stream;
    } else if (typeof element.src !== 'undefined') {
      element.src = URL.createObjectURL(stream);
    } else {
      webrtcUtils.log('Error attaching stream to element.');
    }
  };
  reattachMediaStream = function(to, from) {
    if (webrtcDetectedVersion >= 43) {
      to.srcObject = from.srcObject;
    } else {
      to.src = from.src;
    }
  };

} else if (navigator.mediaDevices && navigator.userAgent.match(
    /Edge\/(\d+).(\d+)$/)) {
  webrtcUtils.log('This appears to be Edge');
  webrtcDetectedBrowser = 'edge';

  webrtcDetectedVersion = webrtcUtils.extractVersion(navigator.userAgent,
      /Edge\/(\d+).(\d+)$/, 2);

  // the minimum version still supported by adapter.
  webrtcMinimumVersion = 12;
} else {
  webrtcUtils.log('Browser does not appear to be WebRTC-capable');
}

// Returns the result of getUserMedia as a Promise.
function requestUserMedia(constraints) {
  return new Promise(function(resolve, reject) {
    getUserMedia(constraints, resolve, reject);
  });
}

var webrtcTesting = {};
try {
  Object.defineProperty(webrtcTesting, 'version', {
    set: function(version) {
      webrtcDetectedVersion = version;
    }
  });
} catch (e) {}

if (typeof module !== 'undefined') {
  var RTCPeerConnection;
  if (typeof window !== 'undefined') {
    RTCPeerConnection = window.RTCPeerConnection;
  }
  module.exports = {
    RTCPeerConnection: RTCPeerConnection,
    getUserMedia: getUserMedia,
    attachMediaStream: attachMediaStream,
    reattachMediaStream: reattachMediaStream,
    webrtcDetectedBrowser: webrtcDetectedBrowser,
    webrtcDetectedVersion: webrtcDetectedVersion,
    webrtcMinimumVersion: webrtcMinimumVersion,
    webrtcTesting: webrtcTesting,
    webrtcUtils: webrtcUtils
    //requestUserMedia: not exposed on purpose.
    //trace: not exposed on purpose.
  };
} else if ((typeof require === 'function') && (typeof define === 'function')) {
  // Expose objects and functions when RequireJS is doing the loading.
  define([], function() {
    return {
      RTCPeerConnection: window.RTCPeerConnection,
      getUserMedia: getUserMedia,
      attachMediaStream: attachMediaStream,
      reattachMediaStream: reattachMediaStream,
      webrtcDetectedBrowser: webrtcDetectedBrowser,
      webrtcDetectedVersion: webrtcDetectedVersion,
      webrtcMinimumVersion: webrtcMinimumVersion,
      webrtcTesting: webrtcTesting,
      webrtcUtils: webrtcUtils
      //requestUserMedia: not exposed on purpose.
      //trace: not exposed on purpose.
    };
  });
}

/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.12.5
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Popper = factory());
}(this, (function () { 'use strict';

var nativeHints = ['native code', '[object MutationObserverConstructor]'];

/**
 * Determine if a function is implemented natively (as opposed to a polyfill).
 * @method
 * @memberof Popper.Utils
 * @argument {Function | undefined} fn the function to check
 * @returns {Boolean}
 */
var isNative = (function (fn) {
  return nativeHints.some(function (hint) {
    return (fn || '').toString().indexOf(hint) > -1;
  });
});

var isBrowser = typeof window !== 'undefined';
var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var scheduled = false;
  var i = 0;
  var elem = document.createElement('span');

  // MutationObserver provides a mechanism for scheduling microtasks, which
  // are scheduled *before* the next task. This gives us a way to debounce
  // a function but ensure it's called *before* the next paint.
  var observer = new MutationObserver(function () {
    fn();
    scheduled = false;
  });

  observer.observe(elem, { attributes: true });

  return function () {
    if (!scheduled) {
      scheduled = true;
      elem.setAttribute('x-index', i);
      i = i + 1; // don't use compund (+=) because it doesn't get optimized in V8
    }
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

// It's common for MutationObserver polyfills to be seen in the wild, however
// these rely on Mutation Events which only occur when an element is connected
// to the DOM. The algorithm used in this module does not use a connected element,
// and so we must ensure that a *native* MutationObserver is available.
var supportsNativeMutationObserver = isBrowser && isNative(window.MutationObserver);

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsNativeMutationObserver ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element || ['HTML', 'BODY', '#document'].indexOf(element.nodeName) !== -1) {
    return window.document.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  // NOTE: 1 DOM access here
  var offsetParent = element && element.offsetParent;
  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return window.document.documentElement;
  }

  // .offsetParent will return the closest TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return window.document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = window.document.documentElement;
    var scrollingElement = window.document.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return +styles['border' + sideA + 'Width'].split('px')[0] + +styles['border' + sideB + 'Width'].split('px')[0];
}

/**
 * Tells if you are running Internet Explorer 10
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean} isIE10
 */
var isIE10 = undefined;

var isIE10$1 = function () {
  if (isIE10 === undefined) {
    isIE10 = navigator.appVersion.indexOf('MSIE 10') !== -1;
  }
  return isIE10;
};

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE10$1() ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
}

function getWindowSizes() {
  var body = window.document.body;
  var html = window.document.documentElement;
  var computedStyle = isIE10$1() && window.getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  if (isIE10$1()) {
    try {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } catch (err) {}
  } else {
    rect = element.getBoundingClientRect();
  }

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var isIE10 = isIE10$1();
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = +styles.borderTopWidth.split('px')[0];
  var borderLeftWidth = +styles.borderLeftWidth.split('px')[0];

  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = +styles.marginTop.split('px')[0];
    var marginLeft = +styles.marginLeft.split('px')[0];

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var html = window.document.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = getScroll(html);
  var scrollLeft = getScroll(html, 'left');

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  // NOTE: 1 DOM access here
  var boundaries = { top: 0, left: 0 };
  var offsetParent = findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(popper));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = window.document.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = window.document.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  boundaries.left += padding;
  boundaries.top += padding;
  boundaries.right -= padding;
  boundaries.bottom -= padding;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var commonOffsetParent = findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier.function) {
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier.function || modifier.fn;
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length - 1; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof window.document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroy the popper
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.left = '';
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? window : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  window.addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  window.removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger onUpdate callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    window.cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper.
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  // floor sides to avoid blurry text
  var offsets = {
    left: Math.floor(popper.left),
    top: Math.floor(popper.top),
    bottom: Math.floor(popper.bottom),
    right: Math.floor(popper.right)
  };

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    top = -offsetParentRect.height + offsets.bottom;
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    left = -offsetParentRect.width + offsets.right;
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjuction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var popperMarginSide = getStyleComputedProperty(data.instance.popper, 'margin' + sideCapitalized).replace('px', '');
  var sideValue = center - getClientRect(data.offsets.popper)[side] - popperMarginSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = {};
  data.offsets.arrow[side] = Math.round(sideValue);
  data.offsets.arrow[altSide] = ''; // make sure to unset any eventual altSide value from the DOM node

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-right` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement);
  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unitless, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the height.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * An scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper this makes sure the popper has always a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier, can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near eachothers
   * without leaving any gap between the two. Expecially useful when the arrow is
   * enabled and you want to assure it to point to its reference element.
   * It cares only about the first axis, you can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjuction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations).
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position,
     * the popper will never be placed outside of the defined boundaries
     * (except if keepTogether is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define you own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the informations used by Popper.js
 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overriden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass as 3rd argument an object with the same
 * structure of this object, example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Whether events (resize, scroll) are initially enabled
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Create a new Popper.js instance
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper.
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference.jquery ? reference[0] : reference;
    this.popper = popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedule an update, it will run on the next UI update available
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

return Popper;

})));
//# sourceMappingURL=popper.js.map

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("AgoraRTC",[],t):"object"==typeof exports?exports.AgoraRTC=t():e.AgoraRTC=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=36)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(20),i=function(){var e,t,n,i,r,a,s=0;return e=function(e){e>4?e=4:e<0&&(e=0),s=e},t=function(){var e=arguments[0],t=arguments;if(!(e<s))switch(e){case 0:t[0]=(0,o.getTimestamp)()+" DEBUG:",console.log.apply(console,t);break;case 1:t[0]=(0,o.getTimestamp)()+" INFO:",console.log.apply(console,t);break;case 2:t[0]=(0,o.getTimestamp)()+" WARN:",console.warn.apply(console,t);break;case 3:t[0]=(0,o.getTimestamp)()+" ERROR:",console.error.apply(console,t);break;default:return t[0]=(0,o.getTimestamp)()+" DEFAULT:",void console.log.apply(console,t)}},n=function(){for(var e=[0],n=0;n<arguments.length;n++)e.push(arguments[n]);t.apply(this,e)},i=function(){for(var e=[1],n=0;n<arguments.length;n++)e.push(arguments[n]);t.apply(this,e)},r=function(){for(var e=[2],n=0;n<arguments.length;n++)e.push(arguments[n]);t.apply(this,e)},a=function(){for(var e=[3],n=0;n<arguments.length;n++)e.push(arguments[n]);t.apply(this,e)},{DEBUG:0,INFO:1,WARNING:2,ERROR:3,NONE:4,setLogLevel:e,log:t,debug:n,info:i,warning:r,error:a}}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){var e={};return e.dispatcher={},e.dispatcher.eventListeners={},e.addEventListener=function(t,n){void 0===e.dispatcher.eventListeners[t]&&(e.dispatcher.eventListeners[t]=[]),e.dispatcher.eventListeners[t].push(n)},e.on=e.addEventListener,e.removeEventListener=function(t,n){var o;-1!==(o=e.dispatcher.eventListeners[t].indexOf(n))&&e.dispatcher.eventListeners[t].splice(o,1)},e.dispatchEvent=function(t){var n;for(n in e.dispatcher.eventListeners[t.type])e.dispatcher.eventListeners[t.type].hasOwnProperty(n)&&"function"==typeof e.dispatcher.eventListeners[t.type][n]&&e.dispatcher.eventListeners[t.type][n](t)},e.dispatchSocketEvent=function(t){var n;for(n in e.dispatcher.eventListeners[t.type])e.dispatcher.eventListeners[t.type].hasOwnProperty(n)&&"function"==typeof e.dispatcher.eventListeners[t.type][n]&&e.dispatcher.eventListeners[t.type][n](t.msg)},e},i=function(e){var t={};return t.type=e.type,t},r=function(e){var t=i(e);return t.stream=e.stream,t.reason=e.reason,t.msg=e.msg,t},a=function(e){var t=i(e);return t.uid=e.uid,t.attr=e.attr,t.stream=e.stream,t},s=function(e){var t=i(e);return t.msg=e.msg,t};t.EventDispatcher=o,t.StreamEvent=r,t.ClientEvent=a,t.MediaEvent=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=function(e){var t=(0,o.EventDispatcher)(e);return t.url=".",t};t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){var e=m();return e.name&&"Chrome"===e.name},i=function(){var e=m();return e.name&&"Safari"===e.name},r=function(){var e=m();return e.name&&"Firefox"===e.name},a=function(){var e=m();return e.name&&"OPR"===e.name},s=function(){var e=m();return e.name&&"MQQBrowser"===e.name},d=function(){var e=m();return e.name&&"MicroMessenger"===e.name},c=function(){var e=f();return"Linux"===e||"Mac OS X"===e||"Mac OS"===e||-1!==e.indexOf("Windows")},u=function(){var e=f();return"Android"===e||"iOS"===e},l=function(){return m().version},f=function(){return m().os},p=function(){var e,t=navigator.userAgent,n=t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];if(/trident/i.test(n[1]))return e=/\brv[ :]+(\d+)/g.exec(t)||[],{name:"IE",version:e[1]||""};"Chrome"===n[1]&&null!=(e=t.match(/(OPR(?=\/))\/?(\d+)/i))&&(n=e),"Chrome"===n[1]&&null!=(e=t.match(/(mqqbrowser(?=\/))\/?(\d+)/i))&&(n=e),"Chrome"===n[1]&&null!=(e=t.match(/(micromessenger(?=\/))\/?(\d+)/i))&&(n=e),"Safari"===n[1]&&null!=(e=t.match(/version\/(\d+)/i))&&(n[2]=e[1]);var o=void 0,i=[{s:"Windows 10",r:/(Windows 10.0|Windows NT 10.0)/},{s:"Windows 8.1",r:/(Windows 8.1|Windows NT 6.3)/},{s:"Windows 8",r:/(Windows 8|Windows NT 6.2)/},{s:"Windows 7",r:/(Windows 7|Windows NT 6.1)/},{s:"Windows Vista",r:/Windows NT 6.0/},{s:"Windows Server 2003",r:/Windows NT 5.2/},{s:"Windows XP",r:/(Windows NT 5.1|Windows XP)/},{s:"Windows 2000",r:/(Windows NT 5.0|Windows 2000)/},{s:"Windows ME",r:/(Win 9x 4.90|Windows ME)/},{s:"Windows 98",r:/(Windows 98|Win98)/},{s:"Windows 95",r:/(Windows 95|Win95|Windows_95)/},{s:"Windows NT 4.0",r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},{s:"Windows CE",r:/Windows CE/},{s:"Windows 3.11",r:/Win16/},{s:"Android",r:/Android/},{s:"Open BSD",r:/OpenBSD/},{s:"Sun OS",r:/SunOS/},{s:"Linux",r:/(Linux|X11)/},{s:"iOS",r:/(iPhone|iPad|iPod)/},{s:"Mac OS X",r:/Mac OS X/},{s:"Mac OS",r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},{s:"QNX",r:/QNX/},{s:"UNIX",r:/UNIX/},{s:"BeOS",r:/BeOS/},{s:"OS/2",r:/OS\/2/},{s:"Search Bot",r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}];for(var r in i){var a=i[r];if(a.r.test(navigator.userAgent)){o=a.s;break}}return{name:n[1],version:n[2],os:o}},m=function(){var e=p();return function(){return e}}();t.getBrowserInfo=m,t.getBrowserVersion=l,t.getBrowserOS=f,t.isChrome=o,t.isSafari=i,t.isFireFox=r,t.isOpera=a,t.isQQBrowser=s,t.isWeChatBrowser=d,t.isSupportedPC=c,t.isSupportedMobile=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,i,r,a={INIT:"i",JOIN:"j",GET_MEDIA:"m",PUBLISH:"p",SUBSCRIBE:"s"},s=[],d=function(e){e.n===a.INIT&&(i=e.ver,r=e.appid,delete e.ver,delete e.appid,0===s.length&&(o=null)),s.push(e),(!1===e.succ||e.n===a.PUBLISH||e.n===a.SUBSCRIBE||s.length>=10)&&c()},c=function(){var e=(new Date).getTime(),t={lts:s[0].lts,elps:e-s[0].lts,events:s,succ:s[s.length-1].succ,appid:r,ver:i,brwsr:navigator.userAgent};o&&(t.prev_e=o);for(var n={report:t,sent_ts:Math.round(e/1e3)},a="https:"===document.location.protocol?"https://":"http://",d="https:"===document.location.protocol?6443:6080,c=0;c<1;c++){var l=a+"webcollector.agora.io:"+d+"/events/sequence";!function(e,t,n,o){var i=new XMLHttpRequest;i.open("POST",e,!0),i.setRequestHeader("Content-type","application/json; charset=utf-8"),i.onload=function(){n(i.responseText)},i.onerror=function(){o(i)},i.send(JSON.stringify(t))}(l,n,function(e){},function(e){})}u()},u=function(){o=s[s.length-1],s=[]};t.onEvent=d,t.EVENTS=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={FAILED:"FAILED",INVALID_KEY:"INVALID_KEY",INVALID_OPERATION:"INVALID_OPERATION",INVALID_PARAMETER:"INVALID_PARAMETER",INVALID_LOCAL_STREAM:"INVALID_LOCAL_STREAM",INVALID_REMOTE_STREAM:"INVALID_REMOTE_STREAM",INVALID_DYNAMIC_KEY:"INVALID_DYNAMIC_KEY",DYNAMIC_KEY_TIMEOUT:"DYNAMIC_KEY_TIMEOUT",NO_VOCS_AVAILABLE:"NO_VOCS_AVAILABLE",NO_VOS_AVAILABLE:"ERR_NO_VOS_AVAILABLE",JOIN_CHANNEL_TIMEOUT:"ERR_JOIN_CHANNEL_TIMEOUT",NO_AVAILABLE_CHANNEL:"NO_AVAILABLE_CHANNEL",LOOKUP_CHANNEL_TIMEOUT:"LOOKUP_CHANNEL_TIMEOUT",LOOKUP_CHANNEL_REJECTED:"LOOKUP_CHANNEL_REJECTED",OPEN_CHANNEL_TIMEOUT:"OPEN_CHANNEL_TIMEOUT",OPEN_CHANNEL_REJECTED:"OPEN_CHANNEL_REJECTED",REQUEST_DEFERRED:"REQUEST_DEFERRED",SOCKET_ERROR:"SOCKET_ERROR",SOCKET_DISCONNECTED:"SOCKET_DISCONNECTED",PEERCONNECTION_FAILED:"PEERCONNECTION_FAILED",CONNECT_GATEWAY_ERROR:"CONNECT_GATEWAY_ERROR",SERVICE_NOT_AVAILABLE:"SERVICE_NOT_AVAILABLE",JOIN_CHANNEL_FAILED:"JOIN_CHANNEL_FAILED",PUBLISH_STREAM_FAILED:"PUBLISH_STREAM_FAILED",UNPUBLISH_STREAM_FAILED:"UNPUBLISH_STREAM_FAILED",SUBSCRIBE_STREAM_FAILED:"SUBSCRIBE_STREAM_FAILED",UNSUBSCRIBE_STREAM_FAILED:"UNSUBSCRIBE_STREAM_FAILED",NO_SUCH_REMOTE_STREAM:"NO_SUCH_REMOTE_STREAM",ERR_FAILED:"1",ERR_INVALID_VENDOR_KEY:"101",ERR_INVALID_CHANNEL_NAME:"102",WARN_NO_AVAILABLE_CHANNEL:"103",WARN_LOOKUP_CHANNEL_TIMEOUT:"104",WARN_LOOKUP_CHANNEL_REJECTED:"105",WARN_OPEN_CHANNEL_TIMEOUT:"106",WARN_OPEN_CHANNEL_REJECTED:"107",WARN_REQUEST_DEFERRED:"108",ERR_DYNAMIC_KEY_TIMEOUT:"109",ERR_INVALID_DYNAMIC_KEY:"110",ERR_NO_VOCS_AVAILABLE:"2000",ERR_NO_VOS_AVAILABLE:"2001",ERR_JOIN_CHANNEL_TIMEOUT:"2002"};t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.safeCall=t.checkSystemRequirements=void 0;var o=n(3),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(o),r=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(r),s=function(){var e=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection,t=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.msGetUserMedia||navigator.mozGetUserMedia||navigator.mediaDevices&&navigator.mediaDevices.getUserMedia,n=window.WebSocket,o=!!e&&!!t&&!!n,r=!1;return a.default.debug(i.getBrowserInfo(),"isAPISupport:"+o),i.isChrome()&&i.getBrowserVersion()>=58&&"iOS"!==i.getBrowserOS()&&(r=!0),i.isFireFox()&&i.getBrowserVersion()>=56&&(r=!0),i.isOpera()&&i.getBrowserVersion()>=45&&(r=!0),i.isSafari()&&i.getBrowserVersion()>=11&&(r=!0),i.isSupportedPC()||i.isSupportedMobile()||(r=!1),o&&r},d=function(){var e=arguments[0];if("function"==typeof e){var t=Array.prototype.slice.call(arguments,1);e.apply(null,t)}};t.checkSystemRequirements=s,t.safeCall=d},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=["webcs-2.agora.io","webcs-3.agora.io","webcs-4.agora.io"];t.GIT_VERSION="release_20171026-107-g96592b3",t.VERSION="2.0.0",t.WEBCS_DOMAIN="webcs-1.agora.io",t.WEBCS_DOMAIN_BACKUP_LIST=o,t.WEBCS_BACKUP_CONNECT_TIMEOUT=6e3,t.HTTP_CONNECT_TIMEOUT=5e3},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.getDevices=t.createStream=t.Stream=void 0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=n(17),a=o(r),s=n(22),d=o(s),c=n(10),u=n(1),l=n(4),f=n(0),p=o(f),m=n(3),g=function(e){function t(){return null!==window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)&&window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)[1]<=35}function n(){return null!==window.navigator.userAgent.match("Firefox")}function o(t,n){return{width:{ideal:t},height:{ideal:n},deviceId:e.cameraId?{exact:e.cameraId}:void 0}}var r=(0,u.EventDispatcher)(e);if(r.stream=e.stream,r.aux_stream=void 0,r.url=e.url,r.onClose=void 0,r.local=!1,r.video=e.video,r.audio=e.audio,r.screen=e.screen,r.screenAttributes={width:1920,height:1080,maxFr:5,minFr:1},r.videoSize=e.videoSize,r.player=void 0,e.attributes=e.attributes||{},r.videoEnabled=!0,r.audioEnabled=!0,!(void 0===r.videoSize||r.videoSize instanceof Array&&4===r.videoSize.length))throw Error("Invalid Video Size");r.videoSize=[640,480,640,480],void 0!==e.local&&!0!==e.local||(r.local=!0),r.initialized=!r.local;var s={true:!0,unspecified:!0,"120p_1":o(160,120),"120p_3":o(120,120),"180p_1":o(320,180),"180p_3":o(180,180),"180p_4":o(240,180),"240p_1":o(320,240),"240p_3":o(240,240),"240p_4":o(424,240),"360p_1":o(640,360),"360p_3":o(360,360),"360p_4":o(640,360),"360p_6":o(360,360),"360p_7":o(480,360),"360p_8":o(480,360),"360p_9":o(640,360),"360p_10":o(640,360),"360p_11":o(640,360),"480p_1":o(640,480),"480p_2":o(640,480),"480p_3":o(480,480),"480p_4":o(640,480),"480p_6":o(480,480),"480p_8":o(848,480),"480p_9":o(848,480),"480p_10":o(640,480),"720p_1":o(1280,720),"720p_2":o(1280,720),"720p_3":o(1280,720),"720p_5":o(960,720),"720p_6":o(960,720),"1080p_1":o(1920,1080),"1080p_2":o(1920,1080),"1080p_3":o(1920,1080),"1080p_5":o(1920,1080),"1440p_1":o(2560,1440),"1440p_2":o(2560,1440),"4k_1":o(3840,2160),"4k_3":o(3840,2160)};return r.unmuteAudio=void 0,r.muteAudio=void 0,r.unmuteVideo=void 0,r.muteVideo=void 0,r.setVideoResolution=function(t){return t+="",void 0!==s[t]&&(e.video=s[t],e.attributes=e.attributes||{},e.attributes.resolution=t,!0)},r.setVideoFrameRate=function(t){return!(0,m.isFireFox)()&&("object"===(void 0===t?"undefined":i(t))&&t instanceof Array&&t.length>1&&(e.attributes=e.attributes||{},e.attributes.minFrameRate=t[0],e.attributes.maxFrameRate=t[1],!0))},r.setVideoBitRate=function(t){return"object"===(void 0===t?"undefined":i(t))&&t instanceof Array&&t.length>1&&(e.attributes=e.attributes||{},e.attributes.minVideoBW=t[0],e.attributes.maxVideoBW=t[1],!0)},r.setScreenProfile=function(e){if("string"==typeof e&&r.screen){switch(e){case"480p_1":r.screenAttributes.width=640,r.screenAttributes.height=480,r.screenAttributes.maxFr=5,r.screenAttributes.minFr=1;break;case"480p_2":r.screenAttributes.width=640,r.screenAttributes.height=480,r.screenAttributes.maxFr=30,r.screenAttributes.minFr=25;break;case"720p_1":r.screenAttributes.width=1280,r.screenAttributes.height=720,r.screenAttributes.maxFr=5,r.screenAttributes.minFr=1;break;case"720p_2":r.screenAttributes.width=1280,r.screenAttributes.height=720,r.screenAttributes.maxFr=30,r.screenAttributes.minFr=25;break;case"1080p_1":r.screenAttributes.width=1920,r.screenAttributes.height=1080,r.screenAttributes.maxFr=5,r.screenAttributes.minFr=1;break;case"1080p_2":r.screenAttributes.width=1920,r.screenAttributes.height=1080,r.screenAttributes.maxFr=30,r.screenAttributes.minFr=25}return!0}return!1},r.setVideoProfile=function(e){if("string"==typeof e&&r.video){switch(e){case"120p":case"120P":case"120p_1":case"120P_1":r.setVideoResolution("120p_1"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([10,65]);break;case"120p_3":case"120P_3":r.setVideoResolution("120p_3"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([10,50]);break;case"180p":case"180P":case"180p_1":case"180P_1":r.setVideoResolution("180p_1"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([10,140]);break;case"180p_3":case"180P_3":r.setVideoResolution("180p_3"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([10,100]);break;case"180p_4":case"180P_4":r.setVideoResolution("180p_4"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([10,120]);break;case"240p":case"240P":case"240p_1":case"240P_1":r.setVideoResolution("240p_1"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([10,200]);break;case"240p_3":case"240P_3":r.setVideoResolution("240p_3"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([10,140]);break;case"240p_4":case"240P_4":r.setVideoResolution("240p_4"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([10,220]);break;case"360p":case"360P":case"360p_1":case"360P_1":r.setVideoResolution("360p_1"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([20,400]);break;case"360p_3":case"360P_3":r.setVideoResolution("360p_3"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([20,260]);break;case"360p_4":case"360P_4":r.setVideoResolution("360p_4"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([20,600]);break;case"360p_6":case"360P_6":r.setVideoResolution("360p_6"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([20,400]);break;case"360p_7":case"360P_7":r.setVideoResolution("360p_7"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([20,320]);break;case"360p_8":case"360P_8":r.setVideoResolution("360p_8"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([20,490]);break;case"360p_9":case"360P_9":r.setVideoResolution("360p_9"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([20,800]);break;case"360p_10":case"360P_10":r.setVideoResolution("360p_10"),r.setVideoFrameRate([24,24]),r.setVideoBitRate([20,800]);break;case"360p_11":case"360P_11":r.setVideoResolution("360p_11"),r.setVideoFrameRate([24,24]),r.setVideoBitRate([20,1e3]);break;case"480p":case"480P":case"480p_1":case"480P_1":r.setVideoResolution("480p_1"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([20,500]);break;case"480p_2":case"480P_2":r.setVideoResolution("480p_2"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([20,1e3]);break;case"480p_3":case"480P_3":r.setVideoResolution("480p_3"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([20,400]);break;case"480p_4":case"480P_4":r.setVideoResolution("480p_4"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([20,750]);break;case"480p_6":case"480P_6":r.setVideoResolution("480p_6"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([20,600]);break;case"480p_8":case"480P_8":r.setVideoResolution("480p_8"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([20,610]);break;case"480p_9":case"480P_9":r.setVideoResolution("480p_9"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([20,930]);break;case"480p_10":case"480P_10":r.setVideoResolution("480p_10"),r.setVideoFrameRate([10,10]),r.setVideoBitRate([20,400]);break;case"720p":case"720P":case"720p_1":case"720P_1":r.setVideoResolution("720p_1"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([30,1130]);break;case"720p_2":case"720P_2":r.setVideoResolution("720p_2"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([30,2e3]);break;case"720p_3":case"720P_3":r.setVideoResolution("720p_3"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([30,1710]);break;case"720p_5":case"720P_5":r.setVideoResolution("720p_5"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([30,910]);break;case"720p_6":case"720P_6":r.setVideoResolution("720p_6"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([30,1380]);break;case"1080p":case"1080P":case"1080p_1":case"1080P_1":r.setVideoResolution("1080p_1"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([50,2080]);break;case"1080p_2":case"1080P_2":r.setVideoResolution("1080p_2"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([50,3e3]);break;case"1080p_3":case"1080P_3":r.setVideoResolution("1080p_3"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([50,3150]);break;case"1080p_5":case"1080P_5":r.setVideoResolution("1080p_5"),r.setVideoFrameRate([60,60]),r.setVideoBitRate([50,4780]);break;case"1440p":case"1440P":case"1440p_1":case"1440P_1":r.setVideoResolution("1440p_1"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([50,4850]);break;case"1440p_2":case"1440P_2":r.setVideoResolution("1440p_2"),r.setVideoFrameRate([60,60]),r.setVideoBitRate([50,7350]);break;case"4k":case"4K":case"4k_1":case"4K_1":r.setVideoResolution("4k_1"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([50,8910]);break;case"4k_3":case"4K_3":r.setVideoResolution("4k_3"),r.setVideoFrameRate([60,60]),r.setVideoBitRate([50,13500]);break;default:r.setVideoResolution("480p_1"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([20,500])}return!0}return!1},r.getId=function(){return e.streamID},r.getAttributes=function(){return e.screen?r.screenAttributes:e.attributes},r.hasAudio=function(){return e.audio},r.hasVideo=function(){return e.video},r.hasScreen=function(){return e.screen},r.isVideoOn=function(){return r.hasVideo&&r.videoEnabled},r.isAudioOn=function(){return r.hasAudio&&r.audioEnabled},r.successCbWapper=function(e,t){(0,l.onEvent)({n:l.EVENTS.GET_MEDIA,lts:e,elps:(new Date).getTime()-e,succ:!0}),t()},r.failCbWapper=function(e,t,n){(0,l.onEvent)({n:l.EVENTS.GET_MEDIA,lts:e,elps:(new Date).getTime()-e,succ:!1,ec:n.msg}),t(n)},r.init=function(o,a){var s=(new Date).getTime(),d=arguments[2];if(void 0===d&&(d=2),!0===r.initialized)return void("function"==typeof a&&r.failCbWapper(s,a,{type:"warning",msg:"STREAM_ALREADY_INITIALIZED"}));if(!0!==r.local)return void("function"==typeof a&&r.failCbWapper(s,a,{type:"warning",msg:"STREAM_NOT_LOCAL"}));try{if((e.audio||e.video||e.screen)&&void 0===e.url){p.default.debug("Requested access to local media");var u=e.video;if(e.screen)var l={video:u,audio:e.audio,screen:!0,data:!0,extensionId:e.extensionId,attributes:r.screenAttributes,fake:e.fake};else{var l={video:u,audio:e.audio,fake:e.fake};if(!t()){var f=30,m=30;void 0!==e.attributes.minFrameRate&&(f=e.attributes.minFrameRate),void 0!==e.attributes.maxFrameRate&&(m=e.attributes.maxFrameRate),n()?!0===l.video?(l.video={width:{ideal:r.videoSize[0]},height:{ideal:r.videoSize[1]},frameRate:{ideal:f,max:m}},r.setVideoBitRate([500,500])):"object"===i(l.video)&&(l.video.frameRate={ideal:f,max:m}):(!0===l.audio&&(l.audio=!e.microphoneId||{deviceId:{exact:e.microphoneId}}),!0===l.video?(l.video={width:{ideal:r.videoSize[0]},height:{ideal:r.videoSize[1]},frameRate:{ideal:f,max:m}},r.setVideoBitRate([500,500])):"object"===i(l.video)&&(l.video.frameRate={ideal:f,max:m}))}}p.default.debug(l);var g=Object.assign({},l);if((0,c.GetUserMedia)(g,function(e){p.default.debug("User has granted access to local media"),r.dispatchEvent({type:"accessAllowed"}),r.stream=e,r.successCbWapper(s,o),r.initialized=!0},function(e){var t={type:"error",msg:e.name||e};switch(t.msg){case"Starting video failed":case"TrackStartError":if(r.videoSize=void 0,d>0)return void setTimeout(function(){r.init(o,a,d-1)},1);t.msg="MEDIA_OPTION_INVALID";break;case"DevicesNotFoundError":t.msg="DEVICES_NOT_FOUND";break;case"NotSupportedError":t.msg="NOT_SUPPORTED";break;case"PermissionDeniedError":t.msg="PERMISSION_DENIED",r.dispatchEvent({type:"accessDenied"});break;case"PERMISSION_DENIED":case"NotAllowedError":r.dispatchEvent({type:"accessDenied"});break;case"ConstraintNotSatisfiedError":t.msg="CONSTRAINT_NOT_SATISFIED";break;default:t.msg||(t.msg="UNDEFINED")}p.default.error("Media access:",t.msg),"function"==typeof a&&r.failCbWapper(s,a,t)}),e.screen&&e.audio){var v={video:!1,audio:l.audio};p.default.debug(v),(0,c.GetUserMedia)(v,function(e){p.default.info("User has granted access to auxiliary local media."),r.dispatchEvent({type:"accessAllowed"}),r.aux_stream=e},function(e){var t={type:"error",msg:e.name||e};switch(t.msg){case"Starting video failed":case"TrackStartError":if(r.videoSize=void 0,d>0)return void setTimeout(function(){r.init(o,a,d-1)},1);t.msg="MEDIA_OPTION_INVALID";break;case"DevicesNotFoundError":t.msg="DEVICES_NOT_FOUND";break;case"NotSupportedError":t.msg="NOT_SUPPORTED";break;case"PermissionDeniedError":t.msg="PERMISSION_DENIED",r.dispatchEvent({type:"accessDenied"});break;case"PERMISSION_DENIED":case"NotAllowedError":r.dispatchEvent({type:"accessDenied"});break;case"ConstraintNotSatisfiedError":t.msg="CONSTRAINT_NOT_SATISFIED";break;default:t.msg||(t.msg="UNDEFINED")}p.default.error("Media access:",t.msg),"function"==typeof a&&r.failCbWapper(s,a,t)})}}else"function"==typeof a&&r.failCbWapper(s,a,{type:"warning",msg:"STREAM_HAS_NO_MEDIA_ATTRIBUTES"})}catch(e){p.default.error("Stream init:",e),"function"==typeof a&&r.failCbWapper(s,a,{type:"error",msg:e.message||e})}},r.close=function(){if(p.default.debug("Close stream with id",e.streamID),void 0!==r.stream){var t=r.stream.getTracks();for(var n in t)t.hasOwnProperty(n)&&t[n].stop();r.stream=void 0}r.initialized=!1,r.unmuteAudio=void 0,r.muteAudio=void 0,r.unmuteVideo=void 0,r.muteVideo=void 0},r.enableAudio=function(){return p.default.debug("Enable audio stream with id",e.streamID),!(!r.hasAudio()||!r.initialized||void 0===r.stream||!0===r.stream.getAudioTracks()[0].enabled)&&(void 0!==r.unmuteAudio&&r.unmuteAudio(),r.audioEnabled=!0,r.stream.getAudioTracks()[0].enabled=!0,!0)},r.disableAudio=function(){return p.default.debug("Disable audio stream with id",e.streamID),!!(r.hasAudio()&&r.initialized&&void 0!==r.stream&&r.stream.getAudioTracks()[0].enabled)&&(void 0!==r.muteAudio&&r.muteAudio(),r.audioEnabled=!1,r.stream.getAudioTracks()[0].enabled=!1,!0)},r.enableVideo=function(){return p.default.debug("Enable video stream with id",e.streamID),!(!r.initialized||void 0===r.stream||!r.stream.getVideoTracks().length||!0===r.stream.getVideoTracks()[0].enabled)&&(void 0!==r.unmuteVideo&&r.unmuteVideo(),r.videoEnabled=!0,r.stream.getVideoTracks()[0].enabled=!0,!0)},r.disableVideo=function(){return p.default.debug("Disable video stream with id",e.streamID),!!(r.initialized&&void 0!==r.stream&&r.stream.getVideoTracks().length&&r.stream.getVideoTracks()[0].enabled)&&(void 0!==r.muteVideo&&r.muteVideo(),r.videoEnabled=!1,r.stream.getVideoTracks()[0].enabled=!1,!0)},r.play=function(e,t){r.showing=!1,!r.local||r.video||r.screen?void 0!==e&&(r.player=new a.default({id:r.getId(),stream:r,elementID:e,options:void 0,url:t}),r.showing=!0):r.hasAudio()&&(r.player=new d.default({id:r.getId(),stream:r,elementID:e,options:void 0,url:t}),r.showing=!0)},r.stop=function(){p.default.debug("Stop stream player with id",e.streamID),void 0!==r.player&&r.player.destroy()},r},v=function(e){return p.default.debug("Create stream with id",e.streamID),g(e)},h=function(e){navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices().then(function(t){e(t)})};t.Stream=g,t.createStream=v,t.getDevices=h},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),r=o(i),a=n(18),s=o(a),d=function(e){var t,n,o=(0,r.default)({});return o.elementID=e.elementID,o.id=e.id,o.url=e.url,o.div=document.createElement("div"),o.div.setAttribute("id","bar_"+o.id),o.bar=document.createElement("div"),o.bar.setAttribute("style","width: 100%; height: 15%; max-height: 30px; position: absolute; bottom: 0; right: 0; background-color: rgba(255,255,255,0.62)"),o.bar.setAttribute("id","subbar_"+o.id),o.link=document.createElement("a"),o.link.setAttribute("href","http://www.lynckia.com/"),o.link.setAttribute("target","_blank"),o.logo=document.createElement("img"),o.logo.setAttribute("style","width: 100%; height: 100%; max-width: 30px; position: absolute; top: 0; left: 2px;"),o.logo.setAttribute("alt","Lynckia"),n=function(e){"block"!==e?e="none":clearTimeout(t),o.div.setAttribute("style","width: 100%; height: 100%; position: absolute; bottom: 0; right: 0; display:"+e)},o.display=function(){n("block")},o.hide=function(){t=setTimeout(n,1e3)},document.getElementById(o.elementID).appendChild(o.div),o.div.appendChild(o.bar),e.stream.screen||void 0!==e.options&&void 0!==e.options.speaker&&!0!==e.options.speaker||(o.speaker=new s.default({elementID:"subbar_"+o.id,id:o.id,stream:e.stream,media:e.media,url:o.url})),o.display(),o.hide(),o};t.default=d},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.GetUserMedia=t.Connection=void 0;var i=n(23),r=o(i),a=n(24),s=o(a),d=n(25),c=o(d),u=n(26),l=o(u),f=n(27),p=o(f),m=n(0),g=o(m),v=103,h=function(e){var t={};if(e.session_id=v+=1,"undefined"!=typeof window&&window.navigator)if(null!==window.navigator.userAgent.match("Firefox"))t.browser="mozilla",t=(0,p.default)(e);else if(window.navigator.userAgent.indexOf("Safari")>-1&&-1===navigator.userAgent.indexOf("Chrome"))g.default.debug("Safari"),t=(0,c.default)(e),t.browser="safari";else if(window.navigator.userAgent.indexOf("MSIE "))t=(0,s.default)(e),t.browser="ie";else if(window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)[1]>=26)t=(0,s.default)(e),t.browser="chrome-stable";else{if(!(window.navigator.userAgent.toLowerCase().indexOf("chrome")>=40))throw t.browser="none","WebRTC stack not available";t=(0,r.default)(e),t.browser="chrome-canary"}else g.default.error("Publish/subscribe video/audio streams not supported yet"),t=(0,l.default)(e);return t},S=function(e,t,n){if(navigator.getMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia,e.screen)if(g.default.debug("Screen access requested"),null!==window.navigator.userAgent.match("Firefox")){var o={};void 0!=e.video.mandatory?(o.video=e.video,o.video.mediaSource="window"):o={video:{mediaSource:"window"}},navigator.getMedia(o,t,n)}else if(null!==window.navigator.userAgent.match("Chrome")){if(window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)[1]<34)return void n({code:"This browser does not support screen sharing"});var i="okeephmleflklcdebijnponpabbmmgeo";e.extensionId&&(g.default.debug("extensionId supplied, using "+e.extensionId),i=e.extensionId),g.default.debug("Screen access on chrome stable, looking for extension");try{chrome.runtime.sendMessage(i,{getStream:!0},function(i){if(void 0===i){g.default.debug("Access to screen denied");return void n({code:"Access to screen denied"})}var r=i.streamId,a=e.attributes.width,s=e.attributes.height,d=e.attributes.maxFr,c=e.attributes.minFr;o={video:{mandatory:{chromeMediaSource:"desktop",chromeMediaSourceId:r,maxHeight:s,maxWidth:a,maxFrameRate:d,minFrameRate:c}}},navigator.getMedia(o,t,n)})}catch(e){g.default.debug("AgoraRTC screensharing plugin is not accessible");var r={code:"no_plugin_present"};return void n(r)}}else g.default.debug("This browser does not support screenSharing");else window.navigator.userAgent.indexOf("Safari")>-1&&-1===navigator.userAgent.indexOf("Chrome")?navigator.mediaDevices.getUserMedia(e).then(t).catch(n):"undefined"!=typeof navigator&&navigator.getMedia?navigator.getMedia(e,t,n):g.default.error("Video/audio streams not supported yet")};t.Connection=h,t.GetUserMedia=S},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){e&&e.apply(this,[].slice.call(arguments,1))};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.getGatewayList=void 0;var i=n(7),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(i),a=n(0),s=o(a),d=n(5),c=(o(d),n(13)),u=n(30),l=n(31),f=function(e,t,n,o){(0,c.post)(e,{key:t},function(i){var a=JSON.parse(i),s=a.error;void 0!=s?((0,u.initFailCbWrapper)(lts,t,r.VERSION,vocsip),o("Get server node failed ["+s+"]",e)):n(a.gateway_addr)},function(e,t){"timeout"===e.type?o("Connect choose server timeout",t):o("Connect choose server error",t)})},p=function(e,t,n){var o=(new Date).getTime(),i=e.appId,a=(0,c.shouldUseHttps)()?"https://"+r.WEBCS_DOMAIN+":5668/getwebgw/jsonp":"http://"+r.WEBCS_DOMAIN+":5669/getwebgw/jsonp";s.default.debug("Connect to choose_server:",a),f(a,i,function(e){t(e),(0,u.initSuccessCbWrapper)(o,i,r.VERSION,null),s.default.debug("Get gateway address:",e)},function(e,d){s.default.error(e,d);var p=r.WEBCS_DOMAIN_BACKUP_LIST;s.default.debug("Try choose_server backup list:",p);for(var m=!1,g=0;g<p.length;++g)a=(0,c.shouldUseHttps)()?"https://"+p[g]+":5668/getwebgw/jsonp":"http://"+p[g]+":5669/getwebgw/jsonp",f(a,i,function(e){m||(m=!0,t(e),(0,u.initSuccessCbWrapper)(o,i,r.VERSION,null),s.default.debug("Get gateway address:",e))},function(e,t){s.default.error(e,t)});(0,l.setTimeout)(function(){m||n()},r.WEBCS_BACKUP_CONNECT_TIMEOUT)})},m=function(e,t,n){var o=!1,i=null,r=1;!function n(){o||p(e,function(e){o=!0,clearTimeout(i),t(e)},function(){s.default.debug("Request gateway list will be restart in "+r+"s"),i=(0,l.setTimeout)(function(){n()},1e3*r),r=r>=3600?3600:2*r})}()};t.getGatewayList=m},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.shouldUseHttps=t.post=void 0;var o=n(7),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(o),r=function(e,t,n,o){var r=new XMLHttpRequest;r.timeout=t.timeout||i.HTTP_CONNECT_TIMEOUT,r.open("POST",e,!0),r.setRequestHeader("Content-type","application/json; charset=utf-8"),r.onload=function(e){n(r.responseText)},r.onerror=function(t){o(t,e)},r.ontimeout=function(t){o(t,e)},r.send(JSON.stringify(t))},a=function(){return"https:"==document.location.protocol};t.post=r,t.shouldUseHttps=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=n(8),a=n(28),s=o(a),d=n(10),c=n(1),u=n(4),l=n(0),f=o(l),p=n(5),m=o(p),g=n(11),v=o(g),h=n(15),S=(o(h),n(12)),b=function(e){function t(){for(var e in C.remoteStreams)if(C.remoteStreams.hasOwnProperty(e)){var t=C.remoteStreams[e];t.stop(),t.close(),delete C.remoteStreams[e],void 0!==t.pc&&(t.pc.close(),t.pc=void 0)}}var n=function(){return{_type:"ping"}},o=function(){return{_type:"join",message:{key:C.key,channel:C.channel,uid:C.uid,version:e.version,browser:navigator.userAgent,mode:e.mode,role:e.role,config:C.config}}},a=function(){return{_type:"leave"}},l=function(e){return{_type:"control",message:e}},p=function(e){return{_type:"token",message:e}},g=function(){return{_type:"p2p_lost",message:null}},h=function(e){return{_type:"unpublish",message:e}},b=function(e){return{_type:"unsubscribe",message:e}},_=function(e,t){return{_type:"switchVideoStream",message:{id:e,type:t}}},E=function(e,t){return{_type:"publish",options:e,sdp:t}},y=function(e){return{_type:"publish_stats",options:{stats:e},sdp:null}},R=function(e,t){return{_type:"subscribe",options:e,sdp:t}},I=function(e,t){return{_type:"subscribe_stats",options:{id:e,stats:t},sdp:null}},C=(0,c.EventDispatcher)(e);C.socket=void 0,C.state=0,C.mode=e.mode,C.role=e.role,C.codec=e.codec,C.config={},C.timers={},C.timer_counter={},C.localStreams={},C.remoteStreams={},C.attemps=1,C.p2p_attemps=1,C.audioLevel={},C.activeSpeaker=void 0;var A=v.default;C.remoteVideoStreamTypes={REMOTE_VIDEO_STREAM_HIGH:0,REMOTE_VIDEO_STREAM_LOW:1,REMOTE_VIDEO_STREAM_MEDIUM:2};var w=function(e,t,n,o,i){A(i,t);var r={n:u.EVENTS.JOIN,lts:e,elps:(new Date).getTime()-e,succ:!0,addl_s2:n,addl_i1:t};o&&(r.addl_s1=JSON.stringify(o)),(0,u.onEvent)(r)},T=function(e,t,n,o,i,r){A(i,r);var a={n:u.EVENTS.JOIN,lts:e,elps:(new Date).getTime()-e,succ:!1,ec:r,addl_s2:n,addl_i1:t};o&&(a.addl_s1=JSON.stringify(o)),(0,u.onEvent)(a)};C.configPublisher=function(e){C.config=e},C.join=function(e,t,i,r,a,s){var d=(new Date).getTime();return 0!==C.state?(T(d,r,i,e.host,s,m.default.INVALID_OPERATION),void f.default.error("Server already in connecting/connected state")):null!==r&&void 0!==r&&parseInt(r)!==r?(T(d,r,i,e.host,s,m.default.INVALID_PARAMETER),void f.default.error("Input uid is invalid")):(C.token=e,C.uid=r,C.channel=i,C.key=t,C.state=1,void k(e,function(t){C.stunServerUrl=t.stunServerUrl,C.turnServer=t.turnServer,C.state=2,f.default.debug("Connected to gateway server"),C.pingTimer=setInterval(function(){M(n(),function(){},function(e){})},3e3),M(o(),function(t){C.uid=t,f.default.info("Join channal "+i+" success"),w(d,t,i,e.host,a)},function(t){f.default.error("User join failed ["+t+"]"),t===m.default.ERR_INVALID_VENDOR_KEY?t=m.default.INVALID_KEY:t===m.default.ERR_INVALID_DYNAMIC_KEY?t=m.default.INVALID_DYNAMIC_KEY:t===m.default.ERR_DYNAMIC_KEY_TIMEOUT?t=m.default.DYNAMIC_KEY_TIMEOUT:t===m.default.ERR_NO_VOCS_AVAILABLE?t=m.default.NO_VOCS_AVAILABLE:t===m.default.ERR_NO_VOS_AVAILABLE?t=m.default.NO_VOS_AVAILABLE:t===m.default.ERR_JOIN_CHANNEL_TIMEOUT?t=m.default.JOIN_CHANNEL_TIMEOUT:t===m.default.ERR_FAILED?t=m.default.FAILED:t===m.default.WARN_NO_AVAILABLE_CHANNEL?t=m.default.NO_AVAILABLE_CHANNEL:t===m.default.WARN_LOOKUP_CHANNEL_TIMEOUT?t=m.default.LOOKUP_CHANNEL_TIMEOUT:t===m.default.WARN_LOOKUP_CHANNEL_REJECTED?t=m.default.LOOKUP_CHANNEL_REJECTED:t===m.default.WARN_OPEN_CHANNEL_TIMEOUT?t=m.default.OPEN_CHANNEL_TIMEOUT:t===m.default.WARN_OPEN_CHANNEL_REJECTED?t=m.default.OPEN_CHANNEL_REJECTED:t===m.default.WARN_REQUEST_DEFERRED&&(t=m.default.REQUEST_DEFERRED),T(d,r,i,e.host,s,t)})},function(t){T(d,r,i,e.host,s,t),f.default.error("User join failed ["+t+"]")}))},C.leave=function(e,n){if(2!=C.state)return void A(e);clearInterval(C.pingTimer),M(a(),function(t){C.socket.disconnect(),C.socket=void 0,f.default.info("Leave channal success"),e(t)},n);for(var o in C.localStreams)if(C.localStreams.hasOwnProperty(o)){var i=C.localStreams[o];delete C.localStreams[o],void 0!==i.pc&&(i.pc.close(),i.pc=void 0)}t(),C.state=0},C.publishFailCbWapper=function(e,t,n){A(t,n),(0,u.onEvent)({n:u.EVENTS.PUBLISH,lts:e,elps:(new Date).getTime()-e,succ:!1,ec:n})},C.publish=function(e,t){var n=(new Date).getTime();if("object"!==(void 0===e?"undefined":i(e))||null===e)return C.publishFailCbWapper(n,t,m.default.INVALID_LOCAL_STREAM),void f.default.error("Invalid local stream");if(null===e.stream&&void 0===e.url)return C.publishFailCbWapper(n,t,m.default.INVALID_LOCAL_STREAM),void f.default.error("Invalid local media stream");if(2!==C.state)return C.publishFailCbWapper(n,t,m.default.INVALID_OPERATION),void f.default.error("User is not in the session");var o=e.getAttributes()||{};e.local&&void 0===C.localStreams[e.getId()]&&(e.hasAudio()||e.hasVideo()||e.hasScreen())&&(void 0!==e.url?V(E({state:"url",audio:e.hasAudio(),video:e.hasVideo(),attributes:e.getAttributes(),mode:C.mode},e.url),function(o,i){"success"===o?(e.getId=function(){return i},C.localStreams[i]=e,e.onClose=function(){C.unpublish(e)},(0,u.onEvent)({n:u.EVENTS.PUBLISH,lts:n,elps:(new Date).getTime()-n,succ:!0})):(C.publishFailCbWapper(n,t,m.default.PUBLISH_STREAM_FAILED),f.default.error("Publish local stream failed",o))}):(C.localStreams[e.getId()]=e,e.pc=(0,d.Connection)({callback:function(o){f.default.debug("SDP exchange in publish : send offer --  ",JSON.parse(o)),V(E({state:"offer",id:e.getId(),audio:e.hasAudio(),video:e.hasVideo()||e.hasScreen(),attributes:e.getAttributes(),mode:C.mode,codec:C.codec},o),function(o,i){if("error"===o)return C.publishFailCbWapper(n,t,m.default.PUBLISH_STREAM_FAILED),void f.default.error("Publish local stream failed");e.pc.onsignalingmessage=function(t){e.pc.onsignalingmessage=function(){},V(E({state:"ok",id:e.getId(),audio:e.hasAudio(),video:e.hasVideo(),screen:e.hasScreen(),attributes:e.getAttributes(),mode:C.mode},t)),e.getId=function(){return i.id},f.default.info("Local stream published with uid",i.id),e.onClose=function(){C.unpublish(e)},e.unmuteAudio=function(){M(l({action:"audio-out-on",streamId:e.getId()}),function(){},function(){})},e.unmuteVideo=function(){M(l({action:"video-out-on",streamId:e.getId()}),function(){},function(){})},e.muteAudio=function(){M(l({action:"audio-out-off",streamId:e.getId()}),function(){},function(){})},e.muteVideo=function(){M(l({action:"video-out-off",streamId:e.getId()}),function(){},function(){})}},e.pc.oniceconnectionstatechange=function(o){"failed"===o?(void 0!=C.timers[e.getId()]&&clearInterval(C.timers[e.getId()]),M(g(),function(){},function(){}),C.publishFailCbWapper(n,t,m.default.PEERCONNECTION_FAILED),f.default.error("Publisher connection is lost")):"connected"===o&&(f.default.info("Publish success"),(0,u.onEvent)({n:u.EVENTS.PUBLISH,lts:n,elps:(new Date).getTime()-n,succ:!0}))},f.default.debug("SDP exchange in publish : receive answer --  ",JSON.parse(o)),e.pc.processSignalingMessage(o)})},audio:e.hasAudio(),video:e.hasVideo(),screen:e.hasScreen(),isSubscriber:!1,iceServers:[],stunServerUrl:C.stunServerUrl,turnServer:C.turnServer,maxAudioBW:o.maxAudioBW,minVideoBW:o.minVideoBW,maxVideoBW:o.maxVideoBW,mode:C.mode,codec:C.codec}),e.pc.addStream(e.stream),f.default.debug("PeerConnection add stream :",e.stream),C.timers[e.getId()]=setInterval(function(){e&&e.pc&&e.pc.getStats&&e.pc.getStatsRate(function(e){e.forEach(function(e){M(y(e),null,null)})})},3e3),void 0!==e.aux_stream&&(e.pc.addStream(e.aux_stream),f.default.debug("PeerConnection add stream :",e.aux_stream))))},C.unpublish=function(e,t){return"object"!==(void 0===e?"undefined":i(e))||null===e?(A(t,m.default.INVALID_LOCAL_STREAM),void f.default.error("Invalid local stream")):2!==C.state?(A(t,m.default.INVALID_OPERATION),void f.default.error("User not in the session")):(void 0!=C.timers[e.getId()]&&clearInterval(C.timers[e.getId()]),void(void 0!==C.socket?e.local&&void 0!==C.localStreams[e.getId()]?(delete C.localStreams[e.getId()],M(h(e.getId()),function(n){if("error"===n)return A(t,m.default.UNPUBLISH_STREAM_FAILED),void f.default.error("Unpublish stream failed");f.default.info("Unpublish stream success"),(e.hasAudio()||e.hasVideo()||e.hasScreen())&&void 0===e.url&&void 0!==e.pc&&(e.pc.close(),e.pc=void 0),e.onClose=void 0,e.unmuteAudio=void 0,e.muteAudio=void 0,e.unmuteVideo=void 0,e.muteVideo=void 0},t)):(A(t,m.default.INVALID_LOCAL_STREAM),f.default.error("Invalid local stream")):(A(t,m.default.INVALID_OPERATION),f.default.error("User not in the session"))))},C.subscribeFailCbWapper=function(e,t,n){(0,u.onEvent)({n:u.EVENTS.SUBSCRIBE,lts:e,elps:(new Date).getTime()-e,succ:!1,ec:n}),A(t,n)},C.subscribe=function(e,t){var n=(new Date).getTime();return"object"!==(void 0===e?"undefined":i(e))||null===e?(C.subscribeFailCbWapper(n,t,m.default.INVALID_REMOTE_STREAM),void f.default.error("Invalid remote stream")):2!==C.state?(C.subscribeFailCbWapper(n,t,m.default.INVALID_OPERATION),void f.default.error("User is not in the session")):void(!e.local&&C.remoteStreams.hasOwnProperty(e.getId())&&(e.hasAudio()||e.hasVideo()||e.hasScreen())?(e.pc=(0,d.Connection)({callback:function(o){f.default.debug("SDP exchange in subscribe : send offer --  ",JSON.parse(o)),V(R({streamId:e.getId(),audio:!0,video:!0,mode:C.mode,codec:C.codec},o),function(o){if("error"===o)return C.subscribeFailCbWapper(n,t,m.default.SUBSCRIBE_STREAM_FAILED),f.default.error("Subscribe remote stream failed, closing stream ",e.getId()),void e.close();f.default.debug("SDP exchange in subscribe : receive answer --  ",JSON.parse(o)),e.pc.processSignalingMessage(o)})},nop2p:!0,audio:!0,video:!0,screen:e.hasScreen(),isSubscriber:!0,iceServers:[],stunServerUrl:C.stunServerUrl,turnServer:C.turnServer}),e.pc.onaddstream=function(t,n){if("ontrack"===n&&"video"===t.track.kind||"onaddstream"===n){f.default.info("Remote stream subscribed with uid ",e.getId()),C.remoteStreams[e.getId()].stream="onaddstream"===n?t.stream:t.streams[0],C.remoteStreams[e.getId()].hasVideo()||C.remoteStreams[e.getId()].disableVideo();var o=(0,c.StreamEvent)({type:"stream-subscribed",stream:C.remoteStreams[e.getId()]});C.dispatchEvent(o)}e.unmuteAudio=function(){M(l({action:"audio-in-on",streamId:e.getId()}),function(){},function(){})},e.muteAudio=function(){M(l({action:"audio-in-off",streamId:e.getId()}),function(){},function(){})},e.unmuteVideo=function(){M(l({action:"video-in-on",streamId:e.getId()}),function(){},function(){})},e.muteVideo=function(){M(l({action:"video-in-off",streamId:e.getId()}),function(){},function(){})}},C.timers[e.getId()]=setInterval(function(){e&&e.pc&&e.pc.getStats&&e.pc.getStatsRate(function(t){t.forEach(function(t){V(I(e.getId(),t),null,null)})})},3e3),C.audioLevel[e.getId()]=0,C.timers[e.getId()+"audio"]=setInterval(function(){e&&e.pc&&e.pc.getStats&&e.pc.getStats(function(t){t.forEach(function(t){if("audio"===t.mediaType){if(t.audioOutputLevel>5e3){C.audioLevel[e.getId()]<20&&(C.audioLevel[e.getId()]+=1);for(var n in C.audioLevel)parseInt(n)!==e.getId()&&C.audioLevel[n]>0&&(C.audioLevel[n]-=1)}var o=Object.keys(C.audioLevel),i=o.sort(function(e,t){return C.audioLevel[t]-C.audioLevel[e]});if(C.activeSpeaker!==i[0]){var r=(0,c.ClientEvent)({type:"active-speaker",uid:i[0]});C.dispatchEvent(r),C.activeSpeaker=i[0],f.default.debug("Update active speaker:"+C.activeSpeaker)}}})})},50),e.pc.oniceconnectionstatechange=function(o){"failed"===o?(void 0!=C.timers[e.getId()]&&(clearInterval(C.timers[e.getId()]),clearInterval(C.timers[e.getId()]+"audio")),M(g(),function(){},function(){}),C.subscribeFailCbWapper(n,t,m.default.PEERCONNECTION_FAILED),f.default.error("Subscriber connection is lost",e.getId())):"connected"===o&&(0,u.onEvent)({n:u.EVENTS.SUBSCRIBE,lts:n,elps:(new Date).getTime()-n,succ:!0})}):(C.subscribeFailCbWapper(n,t,m.default.INVALID_REMOTE_STREAM),f.default.error("Invalid remote stream")))},C.unsubscribe=function(e,t){return"object"!==(void 0===e?"undefined":i(e))||null===e?(A(t,m.default.INVALID_REMOTE_STREAM),void f.default.error("Invalid remote stream")):2!==C.state?(A(t,m.default.INVALID_OPERATION),void f.default.error("User is not in the session")):(void 0!=C.timers[e.getId()]&&clearInterval(C.timers[e.getId()]),void 0!=C.audioLevel[e.getId()]&&delete C.audioLevel[e.getId()],void 0!=C.timer_counter[e.getId()]&&delete C.timer_counter[e.getId()],C.remoteStreams.hasOwnProperty(e.getId())?C.socket?e.local?(A(t,m.default.INVALID_REMOTE_STREAM),void f.default.error("Invalid remote stream")):(e.close(),delete C.remoteStreams[e.getId()],void M(b(e.getId()),function(n){if("error"===n)return A(t,m.default.UNSUBSCRIBE_STREAM_FAILED),void f.default.error("Unsubscribe remote stream failed",e.getId());f.default.info("Unsubscrib stream success")},t)):(A(t,m.default.INVALID_OPERATION),void f.default.error("User is not in the session")):void A(t,m.default.NO_SUCH_REMOTE_STREAM))},C.setRemoteVideoStreamType=function(e,t){if(f.default.debug("Switching remote video stream "+e.getId()+" to "+t),"object"!==(void 0===e?"undefined":i(e))||null===e)return void f.default.error("Invalid remote stream");if(2!==C.state)return void f.default.error("User is not in the session");if(!e.local){switch(t){case C.remoteVideoStreamTypes.REMOTE_VIDEO_STREAM_HIGH:case C.remoteVideoStreamTypes.REMOTE_VIDEO_STREAM_LOW:case C.remoteVideoStreamTypes.REMOTE_VIDEO_STREAM_MEDIUM:break;default:return}M(_(e.getId(),t),null,null)}};var N=function(e){return 1e3*Math.min(30,Math.pow(2,e)-1)},O=function(){C.key?(f.default.info("Re-joining to channel "+C.channel),C.join(C.token,C.key,C.channel,C.uid,function(e){if(f.default.info("User "+e+" is re-joined to "+C.channel),void 0!==C.localStreams[e]){var t=C.localStreams[e];delete C.localStreams[e],void 0!==t.pc&&(t.pc.close(),t.pc=void 0),f.default.info("Publish the old local stream again"),C.publish(t,function(e){f.default.error("Publish the old stream failed")})}},function(e){if(f.default.error("Re-join to channel failed ["+e+"]"),e===m.default.ERR_INVALID_VENDOR_KEY){var t=(0,c.StreamEvent)({type:"error",reason:m.default.INVALID_KEY});C.dispatchEvent(t)}else if(e===m.default.ERR_INVALID_DYNAMIC_KEY){var t=(0,c.StreamEvent)({type:"error",reason:m.default.INVALID_DYNAMIC_KEY});C.dispatchEvent(t)}else if(e===m.default.ERR_DYNAMIC_KEY_TIMEOUT){var t=(0,c.StreamEvent)({type:"error",reason:m.default.DYNAMIC_KEY_TIMEOUT});C.dispatchEvent(t);var n=N(C.attemps);f.default.error("Connect to server failed [Channel key timeout], attempt to recover [#"+C.attemps+"] after "+n/1e3+" seconds");setTimeout(function(){C.attemps++,void 0!==C.socket&&C.socket.disconnect()},n)}})):f.default.error("Connection recover failed [Invalid channel key]")},D=function(e){C.socket=(0,s.default)(e,{})},k=function(n,o,i){var a=n.host;void 0!==C.socket?C.socket.socket.connect():(D(a),C.socket.on("connect",function(){C.attemps=1,M(p(n),o,i)}),C.socket.on("reconnect",function(){f.default.debug("Try to reconnect choose server and get gateway list again "),(0,S.getGatewayList)({appId:e.appId},function(e){C.socket.reconnect(e)})}),C.socket.on("connect_error",function(e){for(var n in C.timers)C.timers.hasOwnProperty(n)&&clearInterval(C.timers[n]);for(var n in C.remoteStreams)if(C.remoteStreams.hasOwnProperty(n)){var o=C.remoteStreams[n],i=(0,c.ClientEvent)({type:"stream-removed",uid:o.getId(),stream:o});C.dispatchEvent(i)}t(),clearInterval(C.pingTimer),C.state=0,C.socket=void 0;var i=(0,c.StreamEvent)({type:"error",reason:m.default.SOCKET_ERROR});C.dispatchEvent(i);var r=N(C.attemps);f.default.error("Connect to server error ["+JSON.stringify(e)+"], attempt to recover [#"+C.attemps+"] after "+r/1e3+" seconds");setTimeout(function(){C.attemps++,O()},r)}),C.socket.on("disconnect",function(e){if(0!==C.state){for(var n in C.timers)C.timers.hasOwnProperty(n)&&clearInterval(C.timers[n]);for(var n in C.remoteStreams)if(C.remoteStreams.hasOwnProperty(n)){var o=C.remoteStreams[n],i=(0,c.ClientEvent)({type:"stream-removed",uid:o.getId(),stream:o});C.dispatchEvent(i)}t(),clearInterval(C.pingTimer),C.state=0,C.socket=void 0;var i=(0,c.StreamEvent)({type:"error",reason:m.default.SOCKET_DISCONNECTED});C.dispatchEvent(i);var r=N(C.attemps);f.default.error("Disconnect from server ["+e+"], attempt to recover [#"+C.attemps+"] after "+r/1e3+" seconds");setTimeout(function(){C.attemps++,O()},r)}}),C.socket.on("onAddAudioStream",function(e){if(void 0===C.remoteStreams[e.id]){var t=(0,r.Stream)({streamID:e.id,local:!1,audio:e.audio,video:e.video,screen:e.screen,attributes:e.attributes});C.remoteStreams[e.id]=t;var n=(0,c.StreamEvent)({type:"stream-added",stream:t});C.dispatchEvent(n)}}),C.socket.on("onAddVideoStream",function(e){if(f.default.info("Newly added remote stream with uid",e.id),void 0===C.remoteStreams[e.id]){var t=(0,r.Stream)({streamID:e.id,local:!1,audio:e.audio,video:e.video,screen:e.screen,attributes:e.attributes});C.remoteStreams[e.id]=t;var n=(0,c.StreamEvent)({type:"stream-added",stream:t});C.dispatchEvent(n)}else if(void 0!==C.remoteStreams[e.id].stream){C.remoteStreams[e.id].video=!0,C.remoteStreams[e.id].enableVideo(),f.default.info("Stream changed: enable video "+e.id);var o=C.remoteStreams[e.id],i=o.player.elementID;o.stop(),o.play(i)}else{var t=(0,r.Stream)({streamID:e.id,local:!1,audio:!0,video:!0,screen:!1,attributes:e.attributes});C.remoteStreams[e.id]=t,f.default.info("Stream changed: modify video "+e.id)}}),C.socket.on("onRemoveStream",function(e){var t=C.remoteStreams[e.id];if(!t)return void console.log("ERROR stream ",e.id," not found onRemoveStream ",e);delete C.remoteStreams[e.id];var n=(0,c.StreamEvent)({type:"stream-removed",stream:t});C.dispatchEvent(n),t.close(),void 0!==t.pc&&(t.pc.close(),t.pc=void 0)}),C.socket.on("onPublishStream",function(e){var t=C.localStreams[e.id],n=(0,c.StreamEvent)({type:"stream-published",stream:t});C.dispatchEvent(n)}),C.socket.on("onP2PLost",function(e){var t=N(C.p2p_attemps)+N(C.attemps);f.default.error("p2p connection lost, attempt to recover [#"+C.p2p_attemps+"] after "+t/1e3+" seconds");setTimeout(function(){C.p2p_attemps++,void 0!==C.socket&&C.socket.disconnect()},t)}),C.socket.on("onPeerLeave",function(e){var t=(0,c.ClientEvent)({type:"peer-leave",uid:e.id});if(C.remoteStreams.hasOwnProperty(e.id)&&(t.stream=C.remoteStreams[e.id]),C.dispatchEvent(t),C.remoteStreams.hasOwnProperty(e.id)){f.default.info("closing stream on peer leave",e.id);var n=C.remoteStreams[e.id];n.close(),delete C.remoteStreams[e.id],void 0!==n.pc&&(n.pc.close(),n.pc=void 0)}C.timers.hasOwnProperty(e.id)&&(clearInterval(C.timers[e.id]),delete C.timers[e.id]),void 0!=C.audioLevel[e.id]&&delete C.audioLevel[e.id],void 0!=C.timer_counter[e.id]&&delete C.timer_counter[e.id]}))},M=function(e,t,n){if(void 0===C.socket)return A(n,m.default.INVALID_OPERATION),void f.default.error("No socket available");try{C.socket.emitSimpleMessage(e,function(e,o){"success"===e?"function"==typeof t&&t(o):"function"==typeof n&&n(o)})}catch(t){A(n,m.default.SOCKET_ERROR),f.default.error("Socket emit message failed"+JSON.stringify(e))}},V=function(e,t){if(void 0===C.socket)return void f.default.error("Error in sendSimpleSdp [socket not ready]");try{C.socket.emitSimpleMessage(e,function(e,n){void 0!==t&&t(e,n)})}catch(e){f.default.error("Error in sendSimpleSdp ["+e+"]")}};return C};t.default=b},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=!1,i=function(e){return"undefined"===e?o:o=e};t.default=i},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.createLiveClient=t.createRtcClient=t.createClient=void 0;var i=n(14),r=o(i),a=n(0),s=o(a),d=n(5),c=o(d),u=(n(13),n(6)),l=n(12),f=function(e){var t={};return t.key=void 0,t.version="2.0.0",t.init=function(t,n,o){s.default.info("Initializing AgoraRTC client"),e.appId=t,(0,l.getGatewayList)({appId:t},function(t){e.host=t,n()},o)},t.configPublisher=function(e){t.gatewayClient.configPublisher(e)},t.join=function(n,o,i,r,a){s.default.info("Joining channel: "+o);var d=e;t.uid=i,t.channel=o,t.key=n||e.appId,t.gatewayClient.join(d,t.key,o,i,r,a)},t.renewChannelKey=function(e,n,o){void 0===t.key&&((0,u.safeCall)(o,c.default.INVALID_OPERATION),s.default.error("renewChannelKey should not be called before user join")),t.key=e,(0,u.safeCall)(n)},t.leave=function(e,n){s.default.info("Leaving channel"),t.gatewayClient.leave(e,n)},t.publish=function(e,n){s.default.info("Publishing stream, uid: ",e.getId()),t.gatewayClient.publish(e,n)},t.unpublish=function(e,n){s.default.info("Unpublish stream, uid: ",e.getId()),t.gatewayClient.unpublish(e,n)},t.subscribe=function(e,n){s.default.info("Subscribe stream, uid: ",e.getId()),t.gatewayClient.subscribe(e,n)},t.unsubscribe=function(e,n){s.default.info("Unsubscribe stream, uid: ",e.getId()),t.gatewayClient.unsubscribe(e,n)},t.setRemoteVideoStreamType=function(e,n){t.gatewayClient.setRemoteVideoStreamType(e,n)},e.init=t.init,e.version=t.version,t.gatewayClient=(0,r.default)(e),t.on=t.gatewayClient.on,t},p=function(e){return e&&"interop"===e.mode?(s.default.info("Creating client , MODE : Interop"),f({mode:"live"})):e&&"h264_interop"===e.mode?(s.default.info("Creating client , MODE : h264_interop"),f({mode:"live",codec:"h264"})):(s.default.info("Creating client , MODE : web-only"),f({mode:"rtc"}))},m=function(){return s.default.info("Creating client , MODE : rtc"),s.default.warning("createRtcClient is deprecated."),f({mode:"rtc"})},g=function(e){var t="host";return e&&"audience"===e.role&&(t=e.role),s.default.info("Creating client , MODE : live"),s.default.warning("createLiveClient is deprecated."),f({mode:"live",role:t})};t.createClient=p,t.createRtcClient=m,t.createLiveClient=g},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),r=o(i),a=n(9),s=(o(a),n(19)),d=o(s),c=n(0),u=o(c),l=n(21),f=function(e){var t=(0,r.default)({});return t.id=e.id,t.url=e.url,t.stream=e.stream.stream,t.elementID=e.elementID,t.destroy=function(){t.video.pause(),delete t.resizer,document.getElementById(t.div.id)&&t.parentNode.removeChild(t.div)},t.resize=function(){var n=t.container.offsetWidth,o=t.container.offsetHeight;e.stream.screen?.75*n<o?(t.video.style.width=n+"px",t.video.style.height=.75*n+"px",t.video.style.top=-(.75*n/2-o/2)+"px",t.video.style.left="0px"):(t.video.style.height=o+"px",t.video.style.width=4/3*o+"px",t.video.style.left=-(4/3*o/2-n/2)+"px",t.video.style.top="0px"):n===t.containerWidth&&o===t.containerHeight||(.75*n>o?(t.video.style.width=n+"px",t.video.style.height=.75*n+"px",t.video.style.top=-(.75*n/2-o/2)+"px",t.video.style.left="0px"):(t.video.style.height=o+"px",t.video.style.width=4/3*o+"px",t.video.style.left=-(4/3*o/2-n/2)+"px",t.video.style.top="0px")),t.containerWidth=n,t.containerHeight=o},t.div=document.createElement("div"),t.div.setAttribute("id","player_"+t.id),e.stream.video?t.div.setAttribute("style","width: 100%; height: 100%; position: relative; background-color: black; overflow: hidden;"):t.div.setAttribute("style","width: 100%; height: 100%; position: relative; overflow: hidden;"),t.video=document.createElement("video"),t.video.setAttribute("id","video"+t.id),e.stream.local&&!e.stream.screen?t.video.setAttribute("style","width: 100%; height: 100%; position: absolute; transform: rotateY(180deg);"):e.stream.video?(t.video.setAttribute("style","width: 100%; height: 100%; position: absolute;"),window.navigator.userAgent.indexOf("Safari")>-1&&-1===navigator.userAgent.indexOf("Chrome")&&t.video.setAttribute("controls","")):e.stream.screen?t.video.setAttribute("style","width: 100%; height: 100%; position: absolute;"):t.video.setAttribute("style","width: 100%; height: 100%; position: absolute; display: none;"),t.video.setAttribute("autoplay",""),t.video.setAttribute("muted",""),t.video.setAttribute("playsinline",""),e.stream.local&&(t.video.volume=0,t.video.setAttribute("muted","")),t.audio=document.createElement("audio"),t.audio.setAttribute("id","audio"+t.id),t.audio.setAttribute("autoplay",""),e.stream.local&&(t.audio.volume=0,t.audio.setAttribute("muted","")),void 0!==t.elementID?(document.getElementById(t.elementID).appendChild(t.div),t.container=document.getElementById(t.elementID)):(document.body.appendChild(t.div),t.container=document.body),t.parentNode=t.div.parentNode,t.div.appendChild(t.video),t.div.appendChild(t.audio),t.video.addEventListener("playing",function(e){!function e(){if(t.video.videoWidth*t.video.videoHeight>4)return void u.default.debug("video dimensions:",t.video.videoWidth,t.video.videoHeight);setTimeout(e,50)}()}),t.containerWidth=0,t.containerHeight=0,t.resizer=new d.default(t.container,t.resize),t.resize(),(0,l.attachMediaStream)(document.getElementById("video"+t.id),e.stream.stream),(0,l.attachMediaStream)(document.getElementById("audio"+t.id),e.stream.stream),t};t.default=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),i=function(e){return e&&e.__esModule?e:{default:e}}(o),r=function(e){var t,n,o,r=(0,i.default)({}),a=50;return r.elementID=e.elementID,r.media=e.media,r.id=e.id,void 0!==e.url&&(r.url=e.url),r.stream=e.stream,r.div=document.createElement("div"),r.div.setAttribute("style","width: 40%; height: 100%; max-width: 32px; position: absolute; right: 0;z-index:0;"),r.icon=document.createElement("img"),r.icon.setAttribute("id","volume_"+r.id),r.icon.setAttribute("src",r.url+"/assets/sound48.png"),r.icon.setAttribute("style","width: 80%; height: 100%; position: absolute;"),r.div.appendChild(r.icon),r.stream.local?(n=function(){r.media.muted=!0,r.icon.setAttribute("src",r.url+"/assets/mute48.png")},o=function(){r.media.muted=!1,r.icon.setAttribute("src",r.url+"/assets/sound48.png")},r.icon.onclick=function(){r.media.muted?o():n()}):(r.picker=document.createElement("input"),r.picker.setAttribute("id","picker_"+r.id),r.picker.type="range",r.picker.min=0,r.picker.max=100,r.picker.step=10,r.picker.value=a,r.picker.setAttribute("orient","vertical"),r.div.appendChild(r.picker),r.media.volume=r.picker.value/100,r.media.muted=!1,r.picker.oninput=function(){r.picker.value>0?(r.media.muted=!1,r.icon.setAttribute("src",r.url+"/assets/sound48.png")):(r.media.muted=!0,r.icon.setAttribute("src",r.url+"/assets/mute48.png")),r.media.volume=r.picker.value/100},t=function(e){r.picker.setAttribute("style","background: transparent; width: 32px; height: 100px; position: absolute; bottom: 90%; z-index: 1;"+r.div.offsetHeight+"px; right: 0px; -webkit-appearance: slider-vertical; display: "+e)},n=function(){r.icon.setAttribute("src",r.url+"/assets/mute48.png"),a=r.picker.value,r.picker.value=0,r.media.volume=0,r.media.muted=!0},o=function(){r.icon.setAttribute("src",r.url+"/assets/sound48.png"),r.picker.value=a,r.media.volume=r.picker.value/100,r.media.muted=!1},r.icon.onclick=function(){r.media.muted?o():n()},r.div.onmouseover=function(){t("block")},r.div.onmouseout=function(){t("none")},t("none")),document.getElementById(r.elementID).appendChild(r.div),r};t.default=r},function(e,t,n){var o,i;!function(r,a){o=a,void 0!==(i="function"==typeof o?o.call(t,n,t,e):o)&&(e.exports=i)}(0,function(){function e(e,t){var n=Object.prototype.toString.call(e),o="[object Array]"===n||"[object NodeList]"===n||"[object HTMLCollection]"===n||"[object Object]"===n||"undefined"!=typeof jQuery&&e instanceof jQuery||"undefined"!=typeof Elements&&e instanceof Elements,i=0,r=e.length;if(o)for(;i<r;i++)t(e[i]);else t(e)}if("undefined"==typeof window)return null;var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(e){return window.setTimeout(e,20)},n=function(o,i){function r(){var e=[];this.add=function(t){e.push(t)};var t,n;this.call=function(){for(t=0,n=e.length;t<n;t++)e[t].call()},this.remove=function(o){var i=[];for(t=0,n=e.length;t<n;t++)e[t]!==o&&i.push(e[t]);e=i},this.length=function(){return e.length}}function a(e,t){return e.currentStyle?e.currentStyle[t]:window.getComputedStyle?window.getComputedStyle(e,null).getPropertyValue(t):e.style[t]}function s(e,n){if(e.resizedAttached){if(e.resizedAttached)return void e.resizedAttached.add(n)}else e.resizedAttached=new r,e.resizedAttached.add(n);e.resizeSensor=document.createElement("div"),e.resizeSensor.className="resize-sensor";var o="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",i="position: absolute; left: 0; top: 0; transition: 0s;";e.resizeSensor.style.cssText=o,e.resizeSensor.innerHTML='<div class="resize-sensor-expand" style="'+o+'"><div style="'+i+'"></div></div><div class="resize-sensor-shrink" style="'+o+'"><div style="'+i+' width: 200%; height: 200%"></div></div>',e.appendChild(e.resizeSensor),"static"==a(e,"position")&&(e.style.position="relative");var s,d,c,u,l=e.resizeSensor.childNodes[0],f=l.childNodes[0],p=e.resizeSensor.childNodes[1],m=e.offsetWidth,g=e.offsetHeight,v=function(){f.style.width="100000px",f.style.height="100000px",l.scrollLeft=1e5,l.scrollTop=1e5,p.scrollLeft=1e5,p.scrollTop=1e5};v();var h=function(){d=0,s&&(m=c,g=u,e.resizedAttached&&e.resizedAttached.call())},S=function(){c=e.offsetWidth,u=e.offsetHeight,s=c!=m||u!=g,s&&!d&&(d=t(h)),v()},b=function(e,t,n){e.attachEvent?e.attachEvent("on"+t,n):e.addEventListener(t,n)};b(l,"scroll",S),b(p,"scroll",S)}e(o,function(e){s(e,i)}),this.detach=function(e){n.detach(o,e)}};return n.detach=function(t,n){e(t,function(e){e.resizedAttached&&"function"==typeof n&&(e.resizedAttached.remove(n),e.resizedAttached.length())||e.resizeSensor&&(e.contains(e.resizeSensor)&&e.removeChild(e.resizeSensor),delete e.resizeSensor,delete e.resizedAttached)})},n})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){var e=new Date;return e.toTimeString().split(" ")[0]+":"+e.getMilliseconds()};t.getTimestamp=o},function(e,t,n){"use strict";function o(e){return new Promise(function(t,n){r(e,t,n)})}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=null,a=null,s=null,d=null,c=null,u=null,l={log:function(){},extractVersion:function(e,t,n){var o=e.match(t);return o&&o.length>=n&&parseInt(o[n])}};if("object"===("undefined"==typeof window?"undefined":i(window))&&(!window.HTMLMediaElement||"srcObject"in window.HTMLMediaElement.prototype||Object.defineProperty(window.HTMLMediaElement.prototype,"srcObject",{get:function(){return"mozSrcObject"in this?this.mozSrcObject:this._srcObject},set:function(e){"mozSrcObject"in this?this.mozSrcObject=e:(this._srcObject=e,this.src=URL.createObjectURL(e))}}),r=window.navigator&&window.navigator.getUserMedia),a=function(e,t){e.srcObject=t},s=function(e,t){e.srcObject=t.srcObject},"undefined"!=typeof window&&window.navigator)if(navigator.mozGetUserMedia&&window.mozRTCPeerConnection){if(l.log("This appears to be Firefox"),d="firefox",c=l.extractVersion(navigator.userAgent,/Firefox\/([0-9]+)\./,1),u=31,window.RTCPeerConnection=function(e,t){if(c<38&&e&&e.iceServers){for(var n=[],o=0;o<e.iceServers.length;o++){var i=e.iceServers[o];if(i.hasOwnProperty("urls"))for(var r=0;r<i.urls.length;r++){var a={url:i.urls[r]};0===i.urls[r].indexOf("turn")&&(a.username=i.username,a.credential=i.credential),n.push(a)}else n.push(e.iceServers[o])}e.iceServers=n}return new mozRTCPeerConnection(e,t)},window.RTCSessionDescription||(window.RTCSessionDescription=mozRTCSessionDescription),window.RTCIceCandidate||(window.RTCIceCandidate=mozRTCIceCandidate),r=function(e,t,n){var o=function(e){if("object"!==(void 0===e?"undefined":i(e))||e.require)return e;var t=[];return Object.keys(e).forEach(function(n){if("require"!==n&&"advanced"!==n&&"mediaSource"!==n){var o=e[n]="object"===i(e[n])?e[n]:{ideal:e[n]};if(void 0===o.min&&void 0===o.max&&void 0===o.exact||t.push(n),void 0!==o.exact&&("number"==typeof o.exact?o.min=o.max=o.exact:e[n]=o.exact,delete o.exact),void 0!==o.ideal){e.advanced=e.advanced||[];var r={};"number"==typeof o.ideal?r[n]={min:o.ideal,max:o.ideal}:r[n]=o.ideal,e.advanced.push(r),delete o.ideal,Object.keys(o).length||delete e[n]}}}),t.length&&(e.require=t),e};return c<38&&(l.log("spec: "+JSON.stringify(e)),e.audio&&(e.audio=o(e.audio)),e.video&&(e.video=o(e.video)),l.log("ff37: "+JSON.stringify(e))),navigator.mozGetUserMedia(e,t,n)},navigator.getUserMedia=r,navigator.mediaDevices||(navigator.mediaDevices={getUserMedia:o,addEventListener:function(){},removeEventListener:function(){}}),navigator.mediaDevices.enumerateDevices=navigator.mediaDevices.enumerateDevices||function(){return new Promise(function(e){e([{kind:"audioinput",deviceId:"default",label:"",groupId:""},{kind:"videoinput",deviceId:"default",label:"",groupId:""}])})},c<41){var f=navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);navigator.mediaDevices.enumerateDevices=function(){return f().then(void 0,function(e){if("NotFoundError"===e.name)return[];throw e})}}}else if(navigator.webkitGetUserMedia&&window.webkitRTCPeerConnection){l.log("This appears to be Chrome"),d="chrome",c=l.extractVersion(navigator.userAgent,/Chrom(e|ium)\/([0-9]+)\./,2),u=38,window.RTCPeerConnection=function(e,t){e&&e.iceTransportPolicy&&(e.iceTransports=e.iceTransportPolicy);var n=new webkitRTCPeerConnection(e,t),o=n.getStats.bind(n);return n.getStats=function(e,t,n){var i=this,r=arguments;if(arguments.length>0&&"function"==typeof e)return o(e,t);var a=function(e){var t={};return e.result().forEach(function(e){var n={id:e.id,timestamp:e.timestamp,type:e.type};e.names().forEach(function(t){n[t]=e.stat(t)}),t[n.id]=n}),t};if(arguments.length>=2){var s=function(e){r[1](a(e))};return o.apply(this,[s,arguments[0]])}return new Promise(function(t,n){1===r.length&&null===e?o.apply(i,[function(e){t.apply(null,[a(e)])},n]):o.apply(i,[t,n])})},n},["createOffer","createAnswer"].forEach(function(e){var t=webkitRTCPeerConnection.prototype[e];webkitRTCPeerConnection.prototype[e]=function(){var e=this;if(arguments.length<1||1===arguments.length&&"object"===i(arguments[0])){var n=1===arguments.length?arguments[0]:void 0;return new Promise(function(o,i){t.apply(e,[o,i,n])})}return t.apply(this,arguments)}}),["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(e){var t=webkitRTCPeerConnection.prototype[e];webkitRTCPeerConnection.prototype[e]=function(){var e=arguments,n=this;return new Promise(function(o,i){t.apply(n,[e[0],function(){o(),e.length>=2&&e[1].apply(null,[])},function(t){i(t),e.length>=3&&e[2].apply(null,[t])}])})}});var p=function(e){if("object"!==(void 0===e?"undefined":i(e))||e.mandatory||e.optional)return e;var t={};return Object.keys(e).forEach(function(n){if("require"!==n&&"advanced"!==n&&"mediaSource"!==n){var o="object"===i(e[n])?e[n]:{ideal:e[n]};void 0!==o.exact&&"number"==typeof o.exact&&(o.min=o.max=o.exact);var r=function(e,t){return e?e+t.charAt(0).toUpperCase()+t.slice(1):"deviceId"===t?"sourceId":t};if(void 0!==o.ideal){t.optional=t.optional||[];var a={};"number"==typeof o.ideal?(a[r("min",n)]=o.ideal,t.optional.push(a),a={},a[r("max",n)]=o.ideal,t.optional.push(a)):(a[r("",n)]=o.ideal,t.optional.push(a))}void 0!==o.exact&&"number"!=typeof o.exact?(t.mandatory=t.mandatory||{},t.mandatory[r("",n)]=o.exact):["min","max"].forEach(function(e){void 0!==o[e]&&(t.mandatory=t.mandatory||{},t.mandatory[r(e,n)]=o[e])})}}),e.advanced&&(t.optional=(t.optional||[]).concat(e.advanced)),t};if(r=function(e,t,n){return e.audio&&(e.audio=p(e.audio)),e.video&&(e.video=p(e.video)),l.log("chrome: "+JSON.stringify(e)),navigator.webkitGetUserMedia(e,t,n)},navigator.getUserMedia=r,navigator.mediaDevices||(navigator.mediaDevices={getUserMedia:o,enumerateDevices:function(){return new Promise(function(e){var t={audio:"audioinput",video:"videoinput"};return MediaStreamTrack.getSources(function(n){e(n.map(function(e){return{label:e.label,kind:t[e.kind],deviceId:e.id,groupId:""}}))})})}}),navigator.mediaDevices.getUserMedia){var m=navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);navigator.mediaDevices.getUserMedia=function(e){return l.log("spec:   "+JSON.stringify(e)),e.audio=p(e.audio),e.video=p(e.video),l.log("chrome: "+JSON.stringify(e)),m(e)}}else navigator.mediaDevices.getUserMedia=function(e){return o(e)};void 0===navigator.mediaDevices.addEventListener&&(navigator.mediaDevices.addEventListener=function(){l.log("Dummy mediaDevices.addEventListener called.")}),void 0===navigator.mediaDevices.removeEventListener&&(navigator.mediaDevices.removeEventListener=function(){l.log("Dummy mediaDevices.removeEventListener called.")}),a=function(e,t){c>=43?e.srcObject=t:void 0!==e.src?e.src=URL.createObjectURL(t):l.log("Error attaching stream to element.")},s=function(e,t){c>=43?e.srcObject=t.srcObject:e.src=t.src}}else navigator.mediaDevices&&navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)?(l.log("This appears to be Edge"),d="edge",c=l.extractVersion(navigator.userAgent,/Edge\/(\d+).(\d+)$/,2),u=12):l.log("Browser does not appear to be WebRTC-capable");else l.log("This does not appear to be a browser"),d="not a browser";var g={};try{Object.defineProperty(g,"version",{set:function(e){c=e}})}catch(e){}var v;"undefined"!=typeof window&&(v=window.RTCPeerConnection),e.exports={RTCPeerConnection:v,getUserMedia:r,attachMediaStream:a,reattachMediaStream:s,webrtcDetectedBrowser:d,webrtcDetectedVersion:c,webrtcMinimumVersion:u,webrtcTesting:g,webrtcUtils:l}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),r=o(i),a=n(9),s=o(a),d=n(0),c=o(d),u=n(3),l=function(e){var t,n,o=(0,r.default)({});if(o.id=e.id,o.url=e.url,o.stream=e.stream.stream,o.elementID=e.elementID,o.audio=document.createElement("audio"),o.audio.setAttribute("id","stream"+o.id),o.audio.setAttribute("style","width: 100%; height: 100%; position: absolute"),o.audio.setAttribute("autoplay","autoplay"),e.stream.local&&(o.audio.volume=0),e.stream.local&&(o.audio.volume=0),void 0!==o.elementID?(o.destroy=function(){o.audio.pause(),o.parentNode.removeChild(o.div)},t=function(){o.bar.display()},n=function(){o.bar.hide()},o.div=document.createElement("div"),o.div.setAttribute("id","player_"+o.id),o.div.setAttribute("style","width: 100%; height: 100%; position: relative; overflow: hidden;"),document.getElementById(o.elementID).appendChild(o.div),o.container=document.getElementById(o.elementID),o.parentNode=o.div.parentNode,o.div.appendChild(o.audio),o.bar=new s.default({elementID:"player_"+o.id,id:o.id,stream:e.stream,media:o.audio,options:e.options,url:o.url}),e.stream.local?o.div.onmouseover=n:o.div.onmouseover=t,o.div.onmouseout=n):(o.destroy=function(){o.audio.pause(),o.parentNode.removeChild(o.audio)},document.body.appendChild(o.audio),o.parentNode=document.body),c.default.debug("Creating URL from stream "+o.stream),(0,u.isSafari)())o.audio.srcObject=o.stream;else{var i=window.URL||webkitURL;o.stream_url=i.createObjectURL(o.stream),o.audio.src=o.stream_url}return o};t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(o),r=function(e){var t={},n=webkitRTCPeerConnection;t.pc_config={iceServers:[]},t.con={optional:[{DtlsSrtpKeyAgreement:!0}]},e.iceServers instanceof Array?t.pc_config.iceServers=e.iceServers:(e.stunServerUrl&&(e.stunServerUrl instanceof Array?e.stunServerUrl.map(function(e){"string"==typeof e&&""!==e&&t.pc_config.iceServers.push({url:e})}):"string"==typeof e.stunServerUrl&&""!==e.stunServerUrl&&t.pc_config.iceServers.push({url:e.stunServerUrl})),e.turnServer&&(e.turnServer instanceof Array?e.turnServer.map(function(e){"string"==typeof e.url&&""!==e.url&&t.pc_config.iceServers.push({username:e.username,credential:e.password,url:e.url})}):"string"==typeof e.turnServer.url&&""!==e.turnServer.url&&t.pc_config.iceServers.push({username:e.turnServer.username,credential:e.turnServer.password,url:e.turnServer.url}))),void 0===e.audio&&(e.audio=!0),void 0===e.video&&(e.video=!0),t.mediaConstraints={mandatory:{OfferToReceiveVideo:e.video,OfferToReceiveAudio:e.audio}},t.roapSessionId=103,t.peerConnection=new n(t.pc_config,t.con),t.peerConnection.onicecandidate=function(e){e.candidate?t.iceCandidateCount+=1:(i.default.debug("PeerConnection State: "+t.peerConnection.iceGatheringState),void 0===t.ices&&(t.ices=0),t.ices=t.ices+1,t.ices>=1&&t.moreIceComing&&(t.moreIceComing=!1,t.markActionNeeded()))};var o=function(t){var n,o;return e.minVideoBW&&e.maxVideoBW&&(n=t.match(/m=video.*\r\n/),o=n[0]+"b=AS:"+e.maxVideoBW+"\r\n",t=t.replace(n[0],o),i.default.debug("Set Video Bitrate - min:"+e.minVideoBW+" max:"+e.maxVideoBW)),e.maxAudioBW&&(n=t.match(/m=audio.*\r\n/),o=n[0]+"b=AS:"+e.maxAudioBW+"\r\n",t=t.replace(n[0],o)),t};return t.processSignalingMessage=function(e){var n,i=JSON.parse(e);t.incomingMessage=i,"new"===t.state?"OFFER"===i.messageType?(n={sdp:i.sdp,type:"offer"},t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)),t.state="offer-received",t.markActionNeeded()):t.error("Illegal message for this state: "+i.messageType+" in state "+t.state):"offer-sent"===t.state?"ANSWER"===i.messageType?(n={sdp:i.sdp,type:"answer"},n.sdp=o(n.sdp),t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)),t.sendOK(),t.state="established"):"pr-answer"===i.messageType?(n={sdp:i.sdp,type:"pr-answer"},t.peerConnection.setRemoteDescription(new RTCSessionDescription(n))):"offer"===i.messageType?t.error("Not written yet"):t.error("Illegal message for this state: "+i.messageType+" in state "+t.state):"established"===t.state&&("OFFER"===i.messageType?(n={sdp:i.sdp,type:"offer"},t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)),t.state="offer-received",t.markActionNeeded()):t.error("Illegal message for this state: "+i.messageType+" in state "+t.state))},t.addStream=function(e){t.peerConnection.addStream(e),t.markActionNeeded()},t.removeStream=function(){t.markActionNeeded()},t.close=function(){t.state="closed",t.peerConnection.close()},t.markActionNeeded=function(){t.actionNeeded=!0,t.doLater(function(){t.onstablestate()})},t.doLater=function(e){window.setTimeout(e,1)},t.onstablestate=function(){var e;if(t.actionNeeded){if("new"===t.state||"established"===t.state)t.peerConnection.createOffer(function(e){if(e.sdp=o(e.sdp),i.default.debug("Changed",e.sdp),e.sdp!==t.prevOffer)return t.peerConnection.setLocalDescription(e),t.state="preparing-offer",void t.markActionNeeded();i.default.debug("Not sending a new offer")},function(e){i.default.debug("peer connection create offer failed ",e)},t.mediaConstraints);else if("preparing-offer"===t.state){if(t.moreIceComing)return;t.prevOffer=t.peerConnection.localDescription.sdp,t.sendMessage("OFFER",t.prevOffer),t.state="offer-sent"}else if("offer-received"===t.state)t.peerConnection.createAnswer(function(e){if(t.peerConnection.setLocalDescription(e),t.state="offer-received-preparing-answer",t.iceStarted)return void t.markActionNeeded();var n=new Date;i.default.debug(n.getTime()+": Starting ICE in responder"),t.iceStarted=!0},function(e){i.default.debug("peer connection create answer failed ",e)},t.mediaConstraints);else if("offer-received-preparing-answer"===t.state){if(t.moreIceComing)return;e=t.peerConnection.localDescription.sdp,t.sendMessage("ANSWER",e),t.state="established"}else t.error("Dazed and confused in state "+t.state+", stopping here");t.actionNeeded=!1}},t.sendOK=function(){t.sendMessage("OK")},t.sendMessage=function(e,n){var o={};o.messageType=e,o.sdp=n,"OFFER"===e?(o.offererSessionId=t.sessionId,o.answererSessionId=t.otherSessionId,o.seq=t.sequenceNumber+=1,o.tiebreaker=Math.floor(429496723*Math.random()+1)):(o.offererSessionId=t.incomingMessage.offererSessionId,o.answererSessionId=t.sessionId,o.seq=t.incomingMessage.seq),t.onsignalingmessage(JSON.stringify(o))},t.error=function(e){throw"Error in RoapOnJsep: "+e},t.sessionId=t.roapSessionId+=1,t.sequenceNumber=0,t.actionNeeded=!1,t.iceStarted=!1,t.moreIceComing=!0,t.iceCandidateCount=0,t.onsignalingmessage=e.callback,t.peerConnection.onopen=function(){t.onopen&&t.onopen()},t.peerConnection.onaddstream=function(e){t.onaddstream&&t.onaddstream(e)},t.peerConnection.onremovestream=function(e){t.onremovestream&&t.onremovestream(e)},t.peerConnection.oniceconnectionstatechange=function(e){t.oniceconnectionstatechange&&t.oniceconnectionstatechange(e.currentTarget.iceConnectionState)},t.onaddstream=null,t.onremovestream=null,t.state="new",t.markActionNeeded(),t};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(o),r=function(e){var t={},n=RTCPeerConnection;t.pc_config={iceServers:[]},t.con={optional:[{DtlsSrtpKeyAgreement:!0}]},e.iceServers instanceof Array?t.pc_config.iceServers=e.iceServers:(e.stunServerUrl&&(e.stunServerUrl instanceof Array?e.stunServerUrl.map(function(e){"string"==typeof e&&""!==e&&t.pc_config.iceServers.push({url:e})}):"string"==typeof e.stunServerUrl&&""!==e.stunServerUrl&&t.pc_config.iceServers.push({url:e.stunServerUrl})),e.turnServer&&(e.turnServer instanceof Array?e.turnServer.map(function(e){"string"==typeof e.url&&""!==e.url&&t.pc_config.iceServers.push({username:e.username,credential:e.password,url:e.url})}):"string"==typeof e.turnServer.url&&""!==e.turnServer.url&&t.pc_config.iceServers.push({username:e.turnServer.username,credential:e.turnServer.password,url:e.turnServer.url}))),void 0===e.audio&&(e.audio=!0),void 0===e.video&&(e.video=!0),t.mediaConstraints={mandatory:{OfferToReceiveVideo:e.video,OfferToReceiveAudio:e.audio}},t.roapSessionId=103,t.peerConnection=new n(t.pc_config,t.con),t.peerConnection.onicecandidate=function(e){e.candidate?(0===t.iceCandidateCount&&(t.timeout=setTimeout(function(){t.moreIceComing&&(t.moreIceComing=!1,t.markActionNeeded())},1e3)),t.iceCandidateCount=t.iceCandidateCount+1):(i.default.debug("PeerConnection State: "+t.peerConnection.iceGatheringState),clearTimeout(t.timeout),void 0===t.ices&&(t.ices=0),t.ices=t.ices+1,t.ices>=1&&t.moreIceComing&&(t.moreIceComing=!1,t.markActionNeeded()))};var o=function(t){return e.screen&&(t=t.replace("a=x-google-flag:conference\r\n","")),t},r=function(t){var n,o;return e.minVideoBW&&e.maxVideoBW&&(n=t.match(/m=video.*\r\n/),o=n[0]+"b=AS:"+e.maxVideoBW+"\r\n",t=t.replace(n[0],o),i.default.debug("Set Video Bitrate - min:"+e.minVideoBW+" max:"+e.maxVideoBW)),e.maxAudioBW&&(n=t.match(/m=audio.*\r\n/),o=n[0]+"b=AS:"+e.maxAudioBW+"\r\n",t=t.replace(n[0],o)),t};return t.processSignalingMessage=function(e){var n,i=JSON.parse(e);t.incomingMessage=i,"new"===t.state?"OFFER"===i.messageType?(n={sdp:i.sdp,type:"offer"},t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)),t.state="offer-received",t.markActionNeeded()):t.error("Illegal message for this state: "+i.messageType+" in state "+t.state):"offer-sent"===t.state?"ANSWER"===i.messageType?(n={sdp:i.sdp,type:"answer"},n.sdp=o(n.sdp),n.sdp=r(n.sdp),t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)),t.sendOK(),t.state="established"):"pr-answer"===i.messageType?(n={sdp:i.sdp,type:"pr-answer"},t.peerConnection.setRemoteDescription(new RTCSessionDescription(n))):"offer"===i.messageType?t.error("Not written yet"):t.error("Illegal message for this state: "+i.messageType+" in state "+t.state):"established"===t.state&&("OFFER"===i.messageType?(n={sdp:i.sdp,type:"offer"},t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)),t.state="offer-received",t.markActionNeeded()):t.error("Illegal message for this state: "+i.messageType+" in state "+t.state))},t.getStatsRate=function(e){t.getStats(function(t){e(t)})},t.getStats=function(e){t.peerConnection.getStats(null,function(t){var n=[];Object.keys(t).forEach(function(e){var o=t[e];"ssrc"!==o.type&&"VideoBwe"!==o.type||n.push(o)}),e(n)})},t.addStream=function(e){t.peerConnection.addStream(e),t.markActionNeeded()},t.removeStream=function(){t.markActionNeeded()},t.close=function(){t.state="closed",t.peerConnection.close()},t.markActionNeeded=function(){t.actionNeeded=!0,t.doLater(function(){t.onstablestate()})},t.doLater=function(e){window.setTimeout(e,1)},t.onstablestate=function(){var e;if(t.actionNeeded){if("new"===t.state||"established"===t.state)t.peerConnection.createOffer(function(e){if(e.sdp=r(e.sdp),e.sdp!==t.prevOffer)return t.peerConnection.setLocalDescription(e),t.state="preparing-offer",void t.markActionNeeded();i.default.debug("Not sending a new offer")},function(e){i.default.debug("peer connection create offer failed ",e)},t.mediaConstraints);else if("preparing-offer"===t.state){if(t.moreIceComing)return;t.prevOffer=t.peerConnection.localDescription.sdp,t.sendMessage("OFFER",t.prevOffer),t.state="offer-sent"}else if("offer-received"===t.state)t.peerConnection.createAnswer(function(e){if(t.peerConnection.setLocalDescription(e),t.state="offer-received-preparing-answer",t.iceStarted)return void t.markActionNeeded();var n=new Date;i.default.debug(n.getTime()+": Starting ICE in responder"),t.iceStarted=!0},function(e){i.default.debug("peer connection create answer failed ",e)},t.mediaConstraints);else if("offer-received-preparing-answer"===t.state){if(t.moreIceComing)return;e=t.peerConnection.localDescription.sdp,t.sendMessage("ANSWER",e),t.state="established"}else t.error("Dazed and confused in state "+t.state+", stopping here");t.actionNeeded=!1}},t.sendOK=function(){t.sendMessage("OK")},t.sendMessage=function(e,n){var o={};o.messageType=e,o.sdp=n,"OFFER"===e?(o.offererSessionId=t.sessionId,o.answererSessionId=t.otherSessionId,o.seq=t.sequenceNumber+=1,o.tiebreaker=Math.floor(429496723*Math.random()+1)):(o.offererSessionId=t.incomingMessage.offererSessionId,o.answererSessionId=t.sessionId,o.seq=t.incomingMessage.seq),t.onsignalingmessage(JSON.stringify(o))},t.error=function(e){throw"Error in RoapOnJsep: "+e},t.sessionId=t.roapSessionId+=1,t.sequenceNumber=0,t.actionNeeded=!1,t.iceStarted=!1,t.moreIceComing=!0,t.iceCandidateCount=0,t.onsignalingmessage=e.callback,t.peerConnection.ontrack=function(e){t.onaddstream&&t.onaddstream(e,"ontrack")},t.peerConnection.onaddstream=function(e){t.onaddstream&&t.onaddstream(e,"onaddstream")},t.peerConnection.onremovestream=function(e){t.onremovestream&&t.onremovestream(e)},t.peerConnection.oniceconnectionstatechange=function(e){t.oniceconnectionstatechange&&t.oniceconnectionstatechange(e.currentTarget.iceConnectionState)},t.onaddstream=null,t.onremovestream=null,t.state="new",t.markActionNeeded(),t};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(o),r=function(e){var t={};RTCPeerConnection;t.pc_config={iceServers:[{urls:["stun:72.251.224.27:3478"]}],bundlePolicy:"max-bundle"},t.con={optional:[{DtlsSrtpKeyAgreement:!0}]},e.iceServers instanceof Array?t.pc_config.iceServers=e.iceServers:(e.stunServerUrl&&(e.stunServerUrl instanceof Array?e.stunServerUrl.map(function(e){"string"==typeof e&&""!==e&&t.pc_config.iceServers.push({url:e})}):"string"==typeof e.stunServerUrl&&""!==e.stunServerUrl&&t.pc_config.iceServers.push({url:e.stunServerUrl})),e.turnServer&&(e.turnServer instanceof Array?e.turnServer.map(function(e){"string"==typeof e.url&&""!==e.url&&t.pc_config.iceServers.push({username:e.username,credential:e.password,url:e.url})}):"string"==typeof e.turnServer.url&&""!==e.turnServer.url&&t.pc_config.iceServers.push({username:e.turnServer.username,credential:e.turnServer.password,url:e.turnServer.url}))),void 0===e.audio&&(e.audio=!0),void 0===e.video&&(e.video=!0),t.mediaConstraints={mandatory:{OfferToReceiveVideo:e.video,OfferToReceiveAudio:e.audio}},t.roapSessionId=103,t.peerConnection=new RTCPeerConnection({iceServers:[{urls:["stun:webcs.agora.io:3478","stun:stun.l.google.com:19302"]}],bundlePolicy:"max-bundle"}),t.peerConnection.onicecandidate=function(n){i.default.debug("PeerConnection: ",e.session_id,n),n.candidate?(0===t.iceCandidateCount&&(t.timeout=setTimeout(function(){t.moreIceComing&&(t.moreIceComing=!1,t.markActionNeeded())},1e3)),t.iceCandidateCount=t.iceCandidateCount+1):(i.default.debug("PeerConnection State: "+t.peerConnection.iceGatheringState),clearTimeout(t.timeout),void 0===t.ices&&(t.ices=0),t.ices=t.ices+1,t.ices>=1&&t.moreIceComing&&(t.moreIceComing=!1,t.markActionNeeded()))};var n=function(t){return e.screen&&(t=t.replace("a=x-google-flag:conference\r\n","")),t},o=function(t){var n,o;return e.minVideoBW&&e.maxVideoBW&&(n=t.match(/m=video.*\r\n/),o=n[0]+"b=AS:"+e.maxVideoBW+"\r\n",t=t.replace(n[0],o),i.default.debug("Set Video Bitrate - min:"+e.minVideoBW+" max:"+e.maxVideoBW)),e.maxAudioBW&&(n=t.match(/m=audio.*\r\n/),o=n[0]+"b=AS:"+e.maxAudioBW+"\r\n",t=t.replace(n[0],o)),t};t.processSignalingMessage=function(e){var i,r=JSON.parse(e);t.incomingMessage=r,"new"===t.state?"OFFER"===r.messageType?(i={sdp:r.sdp,type:"offer"},t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)),t.state="offer-received",t.markActionNeeded()):t.error("Illegal message for this state: "+r.messageType+" in state "+t.state):"offer-sent"===t.state?"ANSWER"===r.messageType?(i={sdp:r.sdp,type:"answer"},i.sdp=n(i.sdp),i.sdp=o(i.sdp),i.sdp=i.sdp.replace(/a=x-google-flag:conference\r\n/g,""),t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)),t.sendOK(),t.state="established"):"pr-answer"===r.messageType?(i={sdp:r.sdp,type:"pr-answer"},t.peerConnection.setRemoteDescription(new RTCSessionDescription(i))):"offer"===r.messageType?t.error("Not written yet"):t.error("Illegal message for this state: "+r.messageType+" in state "+t.state):"established"===t.state&&("OFFER"===r.messageType?(i={sdp:r.sdp,type:"offer"},t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)),t.state="offer-received",t.markActionNeeded()):t.error("Illegal message for this state: "+r.messageType+" in state "+t.state))};var r={id:"",type:"",mediaType:"",googCodecName:"opus",aecDivergentFilterFraction:"0",audioInputLevel:"0",bytesSent:"0",packetsSent:"0",googEchoCancellationReturnLoss:"0",googEchoCancellationReturnLossEnhancement:"0"},a={id:"",type:"",mediaType:"",googCodecName:"h264"===e.codec?"H264":"VP8",bytesSent:"0",packetsLost:"0",packetsSent:"0",googAdaptationChanges:"0",googAvgEncodeMs:"0",googEncodeUsagePercent:"0",googFirsReceived:"0",googFrameHeightSent:"0",googFrameHeightInput:"0",googFrameRateInput:"0",googFrameRateSent:"0",googFrameWidthSent:"0",googFrameWidthInput:"0",googNacksReceived:"0",googPlisReceived:"0",googRtt:"0",googFramesEncoded:"0"},s={id:"",type:"",mediaType:"",audioOutputLevel:"0",bytesReceived:"0",packetsLost:"0",packetsReceived:"0",googAccelerateRate:"0",googCurrentDelayMs:"0",googDecodingCNG:"0",googDecodingCTN:"0",googDecodingCTSG:"0",googDecodingNormal:"0",googDecodingPLC:"0",googDecodingPLCCNG:"0",googExpandRate:"0",googJitterBufferMs:"0",googJitterReceived:"0",googPreemptiveExpandRate:"0",googPreferredJitterBufferMs:"0",googSecondaryDecodedRate:"0",googSpeechExpandRate:"0"},d={id:"",type:"",mediaType:"",googTargetDelayMs:"0",packetsLost:"0",googDecodeMs:"0",googMaxDecodeMs:"0",googRenderDelayMs:"0",googFrameWidthReceived:"0",googFrameHeightReceived:"0",googFrameRateReceived:"0",googFrameRateDecoded:"0",googFrameRateOutput:"0",googFramesDecoded:"0",googFrameReceived:"0",googJitterBufferMs:"0",googCurrentDelayMs:"0",googMinPlayoutDelayMs:"0",googNacksSent:"0",googPlisSent:"0",googFirsSent:"0",bytesReceived:"0",packetsReceived:"0"},c={id:"",type:"VideoBwe",googAvailableSendBandwidth:"0",googAvailableReceiveBandwidth:"0",googActualEncBitrate:"0",googRetransmitBitrate:"0",googTargetEncBitrate:"0",googBucketDelay:"0",googTransmitBitrate:"0"},u=0,l=0,f=0;return t.getStatsRate=function(e){t.getStats(function(t){t.forEach(function(e){"outbound-rtp"===e.type&&"video"===e.mediaType&&e.googFramesEncoded&&(e.googFrameRateSent=((e.googFramesEncoded-u)/3).toString(),u=e.googFramesEncoded),"inbound-rtp"===e.type&&-1!=e.id.indexOf("55543")&&(e.googFrameRateReceived&&(e.googFrameRateReceived=((e.googFrameReceived-f)/3).toString(),f=e.googFrameReceived),e.googFrameRateDecoded&&(e.googFrameRateDecoded=((e.googFramesDecoded-l)/3).toString(),l=e.googFramesDecoded))}),e(t)})},t.getStats=function(e){var n=[];t.peerConnection.getStats().then(function(t){t.forEach(function(e){n.push(e),"outbound-rtp"===e.type&&"audio"===e.mediaType&&(r.id=e.id,r.type=e.type,r.mediaType=e.mediaType,r.bytesSent=e.bytesSent.toString(),r.packetsSent=e.packetsSent.toString()),"outbound-rtp"===e.type&&"video"===e.mediaType&&(a.id=e.id,a.type=e.type,a.mediaType=e.mediaType,a.bytesSent=e.bytesSent.toString(),a.packetsSent=e.packetsSent.toString(),a.googPlisReceived=e.pliCount.toString(),a.googNacksReceived=e.nackCount.toString(),a.googFirsReceived=e.firCount.toString(),a.googFramesEncoded=e.framesEncoded.toString()),"inbound-rtp"===e.type&&-1!=e.id.indexOf("44444")&&(s.id=e.id,s.type=e.type,s.mediaType="audio",s.packetsReceived=e.packetsReceived.toString(),s.bytesReceived=e.bytesReceived.toString(),s.packetsLost=e.packetsLost.toString(),s.googJitterReceived=e.jitter.toString()),"inbound-rtp"===e.type&&-1!=e.id.indexOf("55543")&&(d.id=e.id,d.type=e.type,d.mediaType="video",d.packetsReceived=e.packetsReceived.toString(),d.bytesReceived=e.bytesReceived.toString(),d.packetsLost=e.packetsLost.toString(),d.googJitterBufferMs=e.jitter.toString(),d.googNacksSent=e.nackCount.toString(),d.googPlisSent=e.pliCount.toString(),d.googFirsSent=e.firCount.toString()),"track"===e.type&&-1!=e.id.indexOf("55543")&&(d.googFrameWidthReceived=e.frameWidth.toString(),d.googFrameHeightReceived=e.frameHeight.toString(),d.googFrameReceived=e.framesReceived.toString(),d.googFramesDecoded=e.framesDecoded.toString()),"track"===e.type&&-1!=e.id.indexOf("44444")&&(s.audioOutputLevel=e.audioLevel+"",r.audioInputLevel=e.audioLevel+""),"candidate-pair"===e.type&&(0==e.availableIncomingBitrate?c.googAvailableSendBandwidth=e.availableOutgoingBitrate+"":c.googAvailableReceiveBandwidth=e.availableIncomingBitrate+"")}),e([c,r,a,s,d],n)}).catch(function(e){console.error(e)})},t.addStream=function(e){window.navigator.userAgent.indexOf("Safari")>-1&&-1===navigator.userAgent.indexOf("Chrome")?e.getTracks().forEach(function(n){return t.peerConnection.addTrack(n,e)}):t.peerConnection.addStream(e),t.markActionNeeded()},t.removeStream=function(){t.markActionNeeded()},t.close=function(){t.state="closed",t.peerConnection.close()},t.markActionNeeded=function(){t.actionNeeded=!0,t.doLater(function(){t.onstablestate()})},t.doLater=function(e){window.setTimeout(e,1)},t.onstablestate=function(){var n;if(t.actionNeeded){if("new"===t.state||"established"===t.state){if(e.isSubscriber&&window.navigator.userAgent.indexOf("Safari")>-1&&-1===navigator.userAgent.indexOf("Chrome")){var r=t.peerConnection.addTransceiver("audio"),a=t.peerConnection.addTransceiver("video");r.setDirection("recvonly"),a.setDirection("recvonly")}t.peerConnection.createOffer(t.mediaConstraints).then(function(e){if(e.sdp=o(e.sdp),e.sdp=e.sdp.replace(/a=extmap:4 urn:3gpp:video-orientation\r\n/g,""),e.sdp!==t.prevOffer)return t.peerConnection.setLocalDescription(e),t.state="preparing-offer",void t.markActionNeeded();i.default.debug("Not sending a new offer")}).catch(function(e){i.default.debug("peer connection create offer failed ",e)})}else if("preparing-offer"===t.state){if(t.moreIceComing)return;t.prevOffer=t.peerConnection.localDescription.sdp,t.sendMessage("OFFER",t.prevOffer),t.state="offer-sent"}else if("offer-received"===t.state)t.peerConnection.createAnswer(function(e){if(t.peerConnection.setLocalDescription(e),t.state="offer-received-preparing-answer",t.iceStarted)return void t.markActionNeeded();var n=new Date;i.default.debug(n.getTime()+": Starting ICE in responder"),t.iceStarted=!0},function(e){i.default.debug("peer connection create answer failed ",e)},t.mediaConstraints);else if("offer-received-preparing-answer"===t.state){if(t.moreIceComing)return;n=t.peerConnection.localDescription.sdp,t.sendMessage("ANSWER",n),t.state="established"}else t.error("Dazed and confused in state "+t.state+", stopping here");t.actionNeeded=!1}},t.sendOK=function(){t.sendMessage("OK")},t.sendMessage=function(e,n){var o={};o.messageType=e,o.sdp=n,"OFFER"===e?(o.offererSessionId=t.sessionId,o.answererSessionId=t.otherSessionId,o.seq=t.sequenceNumber+=1,o.tiebreaker=Math.floor(429496723*Math.random()+1)):(o.offererSessionId=t.incomingMessage.offererSessionId,o.answererSessionId=t.sessionId,o.seq=t.incomingMessage.seq),t.onsignalingmessage(JSON.stringify(o))},t.error=function(e){throw"Error in RoapOnJsep: "+e},t.sessionId=t.roapSessionId+=1,t.sequenceNumber=0,t.actionNeeded=!1,t.iceStarted=!1,t.moreIceComing=!0,t.iceCandidateCount=0,t.onsignalingmessage=e.callback,t.peerConnection.ontrack=function(e){t.onaddstream&&t.onaddstream(e,"ontrack")},t.peerConnection.onremovestream=function(e){t.onremovestream&&t.onremovestream(e)},t.peerConnection.oniceconnectionstatechange=function(e){t.oniceconnectionstatechange&&t.oniceconnectionstatechange(e.currentTarget.iceConnectionState)},t.onaddstream=null,t.onremovestream=null,t.state="new",t.markActionNeeded(),t};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){var e={};return e.addStream=function(){},e};t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(o),r=function(e){var t={},n=(mozRTCPeerConnection,mozRTCSessionDescription),o=!1;t.pc_config={iceServers:[]},e.iceServers instanceof Array?e.iceServers.map(function(e){0===e.url.indexOf("stun:")&&t.pc_config.iceServers.push({url:e.url})}):e.stunServerUrl&&(e.stunServerUrl instanceof Array?e.stunServerUrl.map(function(e){"string"==typeof e&&""!==e&&t.pc_config.iceServers.push({url:e})}):"string"==typeof e.stunServerUrl&&""!==e.stunServerUrl&&t.pc_config.iceServers.push({url:e.stunServerUrl})),void 0===e.audio&&(e.audio=!0),void 0===e.video&&(e.video=!0),t.mediaConstraints={offerToReceiveAudio:e.audio,offerToReceiveVideo:e.video,mozDontOfferDataChannel:!0},t.roapSessionId=103,t.peerConnection=new RTCPeerConnection(t.pc_config),t.peerConnection.onicecandidate=function(e){e.candidate?t.iceCandidateCount+=1:(i.default.debug("PeerConnection State: "+t.peerConnection.iceGatheringState),void 0===t.ices&&(t.ices=0),t.ices=t.ices+1,t.ices>=1&&t.moreIceComing&&(t.moreIceComing=!1,t.markActionNeeded()))},t.processSignalingMessage=function(e){var o,r=JSON.parse(e);t.incomingMessage=r,"new"===t.state?"OFFER"===r.messageType?(r.sdp=u(r.sdp),o={sdp:r.sdp,type:"offer"},t.peerConnection.setRemoteDescription(new n(o),function(){i.default.debug("setRemoteDescription succeeded")},function(e){i.default.info("setRemoteDescription failed: "+e.name)}),t.state="offer-received",t.markActionNeeded()):t.error("Illegal message for this state: "+r.messageType+" in state "+t.state):"offer-sent"===t.state?"ANSWER"===r.messageType?(r.sdp=u(r.sdp),r.sdp=r.sdp.replace(/ generation 0/g,""),r.sdp=r.sdp.replace(/ udp /g," UDP "),r.sdp=r.sdp.replace(/a=group:BUNDLE audio video/,"a=group:BUNDLE sdparta_0 sdparta_1"),r.sdp=r.sdp.replace(/a=mid:audio/,"a=mid:sdparta_0"),r.sdp=r.sdp.replace(/a=mid:video/,"a=mid:sdparta_1"),o={sdp:r.sdp,type:"answer"},t.peerConnection.setRemoteDescription(new n(o),function(){i.default.debug("setRemoteDescription succeeded")},function(e){i.default.info("setRemoteDescription failed: "+e)}),t.sendOK(),t.state="established"):"pr-answer"===r.messageType?(o={sdp:r.sdp,type:"pr-answer"},t.peerConnection.setRemoteDescription(new n(o),function(){i.default.debug("setRemoteDescription succeeded")},function(e){i.default.info("setRemoteDescription failed: "+e.name)})):"offer"===r.messageType?t.error("Not written yet"):t.error("Illegal message for this state: "+r.messageType+" in state "+t.state):"established"===t.state&&("OFFER"===r.messageType?(o={sdp:r.sdp,type:"offer"},t.peerConnection.setRemoteDescription(new n(o),function(){i.default.debug("setRemoteDescription succeeded")},function(e){i.default.info("setRemoteDescription failed: "+e.name)}),t.state="offer-received",t.markActionNeeded()):t.error("Illegal message for this state: "+r.messageType+" in state "+t.state))};var r={id:"",type:"",mediaType:"opus",googCodecName:"opus",aecDivergentFilterFraction:"0",audioInputLevel:"0",bytesSent:"0",packetsSent:"0",googEchoCancellationReturnLoss:"0",googEchoCancellationReturnLossEnhancement:"0"},a={id:"",type:"",mediaType:"",googCodecName:"h264"===e.codec?"H264":"VP8",bytesSent:"0",packetsLost:"0",packetsSent:"0",googAdaptationChanges:"0",googAvgEncodeMs:"0",googEncodeUsagePercent:"0",googFirsReceived:"0",googFrameHeightSent:"0",googFrameHeightInput:"0",googFrameRateInput:"0",googFrameRateSent:"0",googFrameWidthSent:"0",googFrameWidthInput:"0",googNacksReceived:"0",googPlisReceived:"0",googRtt:"0"},s={id:"",type:"",mediaType:"",audioOutputLevel:"0",bytesReceived:"0",packetsLost:"0",packetsReceived:"0",googAccelerateRate:"0",googCurrentDelayMs:"0",googDecodingCNG:"0",googDecodingCTN:"0",googDecodingCTSG:"0",googDecodingNormal:"0",googDecodingPLC:"0",googDecodingPLCCNG:"0",googExpandRate:"0",googJitterBufferMs:"0",googJitterReceived:"0",googPreemptiveExpandRate:"0",googPreferredJitterBufferMs:"0",googSecondaryDecodedRate:"0",googSpeechExpandRate:"0"},d={id:"",type:"",mediaType:"",googTargetDelayMs:"0",packetsLost:"0",googDecodeMs:"0",googMaxDecodeMs:"0",googRenderDelayMs:"0",googFrameWidthReceived:"0",googFrameHeightReceived:"0",googFrameRateReceived:"0",googFrameRateDecoded:"0",googFrameRateOutput:"0",googJitterBufferMs:"0",googCurrentDelayMs:"0",googMinPlayoutDelayMs:"0",googNacksSent:"0",googPlisSent:"0",googFirsSent:"0",bytesReceived:"0",packetsReceived:"0",googFramesDecoded:"0"},c=0;t.getStatsRate=function(e){t.getStats(function(t){t.forEach(function(e){"inboundrtp"===e.type&&"video"===e.mediaType&&e.googFrameRateDecoded&&(e.googFrameRateDecoded=((e.googFramesDecoded-c)/3).toString(),c=e.googFramesDecoded)}),e(t)})},t.getStats=function(e){t.peerConnection.getStats().then(function(t){var n=[];Object.keys(t).forEach(function(e){var o=t[e];n.push(o),"outboundrtp"===o.type&&"video"===o.mediaType&&(a.id=o.id,a.type=o.type,a.mediaType=o.mediaType,a.bytesSent=o.bytesSent.toString(),a.packetsSent=o.packetsSent.toString(),a.googPlisReceived=o.pliCount.toString(),a.googNacksReceived=o.nackCount.toString(),a.googFirsReceived=o.firCount.toString(),a.googFrameRateSent=o.framerateMean.toString()),"outboundrtp"===o.type&&"audio"===o.mediaType&&(r.id=o.id,r.type=o.type,r.mediaType=o.mediaType,r.bytesSent=o.bytesSent.toString(),r.packetsSent=o.packetsSent.toString()),"inboundrtp"!==o.type||"audio"!==o.mediaType||o.isRemote||(s.id=o.id,s.type=o.type,s.mediaType=o.mediaType,s.bytesReceived=o.bytesReceived.toString(),s.packetsLost=o.packetsLost.toString(),s.packetsReceived=o.packetsReceived.toString(),s.googJitterReceived=o.jitter.toString()),"inboundrtp"!==o.type||"video"!==o.mediaType||o.isRemote||(d.id=o.id,d.type=o.type,d.mediaType=o.mediaType,d.bytesReceived=o.bytesReceived.toString(),d.googFrameRateReceived=o.framerateMean.toString(),d.googFramesDecoded=o.framesDecoded.toString(),d.packetsLost=o.packetsLost.toString(),d.packetsReceived=o.packetsReceived.toString(),d.googJitterBufferMs=o.jitter.toString(),d.googNacksSent=o.nackCount.toString(),d.googPlisSent=o.pliCount.toString(),d.googFirsSent=o.firCount.toString()),-1!==o.id.indexOf("outbound_rtcp_video")&&(a.packetsLost=o.packetsLost.toString())}),e([a,r,s,d],n)},function(e){i.default.error(e)})},t.addStream=function(e){o=!0,t.peerConnection.addStream(e),t.markActionNeeded()},t.removeStream=function(){t.markActionNeeded()},t.close=function(){t.state="closed",t.peerConnection.close()},t.markActionNeeded=function(){t.actionNeeded=!0,t.doLater(function(){t.onstablestate()})},t.doLater=function(e){window.setTimeout(e,1)},t.onstablestate=function(){if(t.actionNeeded){if("new"===t.state||"established"===t.state){o&&(t.mediaConstraints=void 0),function(){t.peerConnection.createOffer(function(e){if(e.sdp=u(e.sdp),e.sdp=e.sdp.replace(/a=extmap:1 http:\/\/www.webrtc.org\/experiments\/rtp-hdrext\/abs-send-time/,"a=extmap:3 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time"),e.sdp!==t.prevOffer)return t.peerConnection.setLocalDescription(e),t.state="preparing-offer",void t.markActionNeeded();i.default.debug("Not sending a new offer")},function(e){i.default.debug("Ups! create offer failed ",e)},t.mediaConstraints)}()}else if("preparing-offer"===t.state){if(t.moreIceComing)return;t.prevOffer=t.peerConnection.localDescription.sdp,t.sendMessage("OFFER",t.prevOffer),t.state="offer-sent"}else if("offer-received"===t.state)t.peerConnection.createAnswer(function(e){if(t.peerConnection.setLocalDescription(e),t.state="offer-received-preparing-answer",t.iceStarted)return void t.markActionNeeded();var n=new Date;i.default.debug(n.getTime()+": Starting ICE in responder"),t.iceStarted=!0},function(){i.default.debug("Ups! Something went wrong")});else if("offer-received-preparing-answer"===t.state){if(t.moreIceComing)return;var e=t.peerConnection.localDescription.sdp;t.sendMessage("ANSWER",e),t.state="established"}else t.error("Dazed and confused in state "+t.state+", stopping here");t.actionNeeded=!1}},t.sendOK=function(){t.sendMessage("OK")},t.sendMessage=function(e,n){var o={};o.messageType=e,o.sdp=n,"OFFER"===e?(o.offererSessionId=t.sessionId,o.answererSessionId=t.otherSessionId,o.seq=t.sequenceNumber+=1,o.tiebreaker=Math.floor(429496723*Math.random()+1)):(o.offererSessionId=t.incomingMessage.offererSessionId,o.answererSessionId=t.sessionId,o.seq=t.incomingMessage.seq),t.onsignalingmessage(JSON.stringify(o))},t.error=function(e){throw"Error in RoapOnJsep: "+e},t.sessionId=t.roapSessionId+=1,t.sequenceNumber=0,t.actionNeeded=!1,t.iceStarted=!1,t.moreIceComing=!0,t.iceCandidateCount=0,t.onsignalingmessage=e.callback,t.peerConnection.ontrack=function(e){t.onaddstream&&t.onaddstream(e,"ontrack")},t.peerConnection.onremovestream=function(e){t.onremovestream&&t.onremovestream(e)},t.peerConnection.oniceconnectionstatechange=function(e){t.oniceconnectionstatechange&&t.oniceconnectionstatechange(e.currentTarget.iceConnectionState)};var u=function(t){if(e.video&&e.maxVideoBW){var n=t.match(/m=video.*\r\n/);if(null==n&&(n=t.match(/m=video.*\n/)),n&&n.length>0){var o=n[0]+"b=AS:"+e.maxVideoBW+"\r\n";t=t.replace(n[0],o)}}if(e.audio&&e.maxAudioBW){var n=t.match(/m=audio.*\r\n/);if(null==n&&(n=t.match(/m=audio.*\n/)),n&&n.length>0){var o=n[0]+"b=AS:"+e.maxAudioBW+"\r\n";t=t.replace(n[0],o)}}return t};return t.onaddstream=null,t.onremovestream=null,t.state="new",t.markActionNeeded(),t};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(29),i=function(e){return e&&e.__esModule?e:{default:e}}(o),r=n(1),a=function(e,t){var n={};return n.connect=function(){t.host=e,n.signal=(0,i.default)(t),n.on=n.signal.on,n.dispatchEvent=n.signal.dispatchEvent,n.signal.on("onopen",function(e){n.signal.onEvent=function(e){n.dispatchEvent((0,r.MediaEvent)({type:e.event,msg:e}))},n.dispatchEvent((0,r.MediaEvent)({type:"connect",msg:e}))}),n.signal.on("onError",function(e){var t=e.msg;onError(t.code,"error")})},n.disconnect=function(){n.signal.close()},n.reconnect=function(e){n.signal.creatConnection(e)},n.emitSimpleMessage=function(e,t){n.signal.sendSignalCommand(e,t)},n.connect(),n};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),r=n(11),a=o(r),s=n(0),d=o(s),c=function(e){function t(e){console.log(e)}var n=(0,i.EventDispatcher)(e);return n.needReconnect=!0,n.isTimeout=!1,n.hostIndex=0,n.requestID=0,e.host instanceof Array?n.host=e.host:n.host=[e.host],n.Reconnection=function(e){n.host=e||n.host,n.hostIndex=0,n.creatConnection()},n.creatConnection=function(){if(n.hostIndex>=n.host.length)return n.hostIndex=0,void n.dispatchEvent((0,i.MediaEvent)({type:"reconnect"}));d.default.debug("start connect:"+n.host[n.hostIndex]),n.connection=new WebSocket("wss://"+n.host[n.hostIndex++]),n.connection.onopen=function(e){d.default.debug("websockect opened"),n.isTimeout=!1,clearTimeout(n.timeoutCheck),n.dispatchEvent((0,i.MediaEvent)({type:"onopen",event:e,socket:n}))},n.connection.onmessage=function(e){var t=JSON.parse(e.data);t.hasOwnProperty("_id")?n.dispatchEvent((0,i.MediaEvent)({type:t._id,msg:t})):t.hasOwnProperty("_type")&&n.dispatchSocketEvent((0,i.MediaEvent)({type:t._type,msg:t.message}))},n.connection.onclose=function(t){n.needReconnect?n.isTimeout?(d.default.debug("websockect connect timeout"),n.creatConnection()):n.dispatchEvent((0,i.MediaEvent)({type:"connect_error",event:t})):(d.default.debug("websockect closeed"),(0,a.default)(e.onFailure,t),n.dispatchEvent((0,i.MediaEvent)({type:"disconnect",event:t})),n.connection.onopen=void 0,n.connection.onclose=void 0,n.connection.onerror=void 0,n.connection.onmessage=void 0,n.connection=void 0)},n.connection.onerror=function(t){n.needReconnect||(console.log(t),(0,a.default)(e.onFailure,t),n.dispatchEvent((0,i.MediaEvent)({type:"connect_error",event:t})),n.connection.onopen=void 0,n.connection.onclose=void 0,n.connection.onerror=void 0,n.connection.onmessage=void 0,n.connection=void 0)};setTimeout(function(){n.connection.readyState!=WebSocket.OPEN&&(n.isTimeout=!0,n.connection.close())},5e3)},n.creatConnection(),n.sendMessage=function(e,t){n.connection.readyState==WebSocket.OPEN?n.connection.send(JSON.stringify(e)):(console.log("Connection to gateway lost while sending "+JSON.stringify(e)),console.log("signal connection state "+n.connection.readyState),t({error:"Not connected"}))},n.close=function(){n.onEvent=t,n.needReconnect=!1,n.connection.close()},n.onEvent=t,n.sendSignalCommand=function(e,t){e._id="_request_"+n.requestID,n.requestID+=1,"publish_stats"!==e._type&&"subscribe_stats"!==e._type&&n.on(e._id,function(o){var i=o.msg;(0,a.default)(t,i._result,i.message),delete n.dispatcher.eventListeners[e._id]}),n.sendMessage(e,function(e){console.log(e),e.reason="NOT_CONNECTED",(0,a.default)(t,e.reason,e)})},n};t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initFailCbWrapper=t.initSuccessCbWrapper=void 0;var o=(n(6),n(4)),i=function(e,t,n,i,r,a){var s={n:o.EVENTS.INIT,lts:e,elps:(new Date).getTime()-e,succ:!0,appid:t,ver:n};i&&(s.addl_s1=i),(0,o.onEvent)(s)},r=function(e,t,n,i,r,a){var s={n:o.EVENTS.INIT,lts:e,elps:(new Date).getTime()-e,succ:!1,ec:a,appid:t,ver:n};i&&(s.addl_s1=i),(0,o.onEvent)(s)};t.initSuccessCbWrapper=i,t.initFailCbWrapper=r},function(e,t,n){function o(e,t){this._id=e,this._clearFn=t}var i=Function.prototype.apply;t.setTimeout=function(){return new o(i.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new o(i.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(32),t.setImmediate=setImmediate,t.clearImmediate=clearImmediate},function(e,t,n){(function(e,t){!function(e,n){"use strict";function o(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var o={callback:e,args:t};return c[d]=o,s(d),d++}function i(e){delete c[e]}function r(e){var t=e.callback,o=e.args;switch(o.length){case 0:t();break;case 1:t(o[0]);break;case 2:t(o[0],o[1]);break;case 3:t(o[0],o[1],o[2]);break;default:t.apply(n,o)}}function a(e){if(u)setTimeout(a,0,e);else{var t=c[e];if(t){u=!0;try{r(t)}finally{i(e),u=!1}}}}if(!e.setImmediate){var s,d=1,c={},u=!1,l=e.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(e);f=f&&f.setTimeout?f:e,"[object process]"==={}.toString.call(e.process)?function(){s=function(e){t.nextTick(function(){a(e)})}}():function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?function(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(t)&&a(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),s=function(n){e.postMessage(t+n,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){a(e.data)},s=function(t){e.port2.postMessage(t)}}():l&&"onreadystatechange"in l.createElement("script")?function(){var e=l.documentElement;s=function(t){var n=l.createElement("script");n.onreadystatechange=function(){a(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}():function(){s=function(e){setTimeout(a,0,e)}}(),f.setImmediate=o,f.clearImmediate=i}}("undefined"==typeof self?void 0===e?this:e:self)}).call(t,n(33),n(34))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(u===setTimeout)return setTimeout(e,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(e,0);try{return u(e,0)}catch(t){try{return u.call(null,e,0)}catch(t){return u.call(this,e,0)}}}function r(e){if(l===clearTimeout)return clearTimeout(e);if((l===o||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}function a(){g&&p&&(g=!1,p.length?m=p.concat(m):v=-1,m.length&&s())}function s(){if(!g){var e=i(a);g=!0;for(var t=m.length;t;){for(p=m,m=[];++v<t;)p&&p[v].run();v=-1,t=m.length}p=null,g=!1,r(e)}}function d(e,t){this.fun=e,this.array=t}function c(){}var u,l,f=e.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(e){u=n}try{l="function"==typeof clearTimeout?clearTimeout:o}catch(e){l=o}}();var p,m=[],g=!1,v=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];m.push(new d(e,t)),1!==m.length||g||i(s)},d.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Logger=t.checkSystemRequirements=t.getDevices=t.createStream=t.createClient=void 0;var o=n(16),i=n(8),r=n(6),a=n(0),s=function(e){return e&&e.__esModule?e:{default:e}}(a);t.createClient=o.createClient,t.createStream=i.createStream,t.getDevices=i.getDevices,t.checkSystemRequirements=r.checkSystemRequirements,t.Logger=s.default}])});
//# sourceMappingURL=AgoraRTC-production.js.map
Signal_=function(vid){var SUCCESS=0,LOGOUT_E_OTHER=100,LOGOUT_E_USER=101,LOGOUT_E_NET=102,LOGOUT_E_KICKED=103,LOGOUT_E_PACKET=104,LOGOUT_E_TOKENEXPIRED=105,LOGOUT_E_OLDVERSION=106,LOGOUT_E_TOKENWRONG=107,LOGOUT_E_ALREADY_LOGOUT=108,LOGIN_E_OTHER=200,LOGIN_E_NET=201,LOGIN_E_FAILED=202,LOGIN_E_CANCEL=203,LOGIN_E_TOKENEXPIRED=204,LOGIN_E_OLDVERSION=205,LOGIN_E_TOKENWRONG=206,LOGIN_E_TOKEN_KICKED=207,LOGIN_E_ALREADY_LOGIN=208,JOINCHANNEL_E_OTHER=300,SENDMESSAGE_E_OTHER=400,SENDMESSAGE_E_TIMEOUT=401,QUERYUSERNUM_E_OTHER=500,QUERYUSERNUM_E_TIMEOUT=501,QUERYUSERNUM_E_BYUSER=502,LEAVECHANNEL_E_OTHER=600,LEAVECHANNEL_E_KICKED=601,LEAVECHANNEL_E_BYUSER=602,LEAVECHANNEL_E_LOGOUT=603,LEAVECHANNEL_E_DISCONN=604,INVITE_E_OTHER=700,INVITE_E_REINVITE=701,INVITE_E_NET=702,INVITE_E_PEEROFFLINE=703,INVITE_E_TIMEOUT=704,INVITE_E_CANTRECV=705,GENERAL_E=1e3,GENERAL_E_FAILED=1001,GENERAL_E_UNKNOWN=1002,GENERAL_E_NOT_LOGIN=1003,GENERAL_E_WRONG_PARAM=1004,GENERAL_E_LARGE_PARAM=1005;function shuffle(arr){var j,x,i;for(i=arr.length;i;i--){j=Math.floor(Math.random()*i);x=arr[i-1];arr[i-1]=arr[j];arr[j]=x}}this.lbs_url1=["https://lbs-1-sig.agora.io","https://lbs-2-sig.agora.io"];this.lbs_url2=["https://lbs-3-sig.agora.io","https://lbs-4-sig.agora.io"];function timedGetText(url,time,callback){var request=new XMLHttpRequest;var timeout=false;var timer=setTimeout(function(){timeout=true;request.abort();callback("timeout","")},time);request.open("GET",url);request.onreadystatechange=function(){if(request.readyState!==4)return;if(timeout)return;clearTimeout(timer);if(request.status===200){callback("",request.responseText)}};request.send(null)}function timedConnectWebsockt(url,milliseconds){var timeout=false;var timer=setTimeout(function(){timeout=true},milliseconds)}this.vid=vid;this.appid=vid;var signal=this;function split_python(a,s,n){var x=a.split(s,n);var offset=0;for(var i in x){offset+=s.length+x[i].length}x.push(a.substr(offset));return x}var Session=function(account,token){this.onLoginSuccess="";this.onLoginFailed="";this.onLogout="";this.onInviteReceived="";this.onMessageInstantReceive="";this.account=account;this.state="session_state_logining";this.line="";this.uid=0;this.dbg=false;var session=this;session.lbs_state="requesting";var server_urls=[];shuffle(server_urls);session.idx=0;session.socket=null;var dbg=function(){if(session.dbg){var x=[];for(var i in arguments)x.push(arguments[i]);console.log.apply(null,["Agora sig dbg :"].concat(x))}};var format_ws_url=function(x){var host=x[0].replace(/\./g,"-")+"-sig-web.agora.io";var port=x[1]+1;return"wss://"+host+":"+port+"/"};session.logout=function(){if(session.state=="session_state_logined"&&session.onLogout){session.call2("user_logout",{line:session.line},function(err,data){session.fire_logout(LOGOUT_E_USER);session.socket.close()})}else if(session.state=="session_state_logining"){session.state=="session_state_logout";session.fire_logout(LOGOUT_E_USER)}};session.fire_login_failed=function(reason){try{if(session.state=="session_state_logining"&&session.onLoginFailed){session.onLoginFailed(reason)}}catch(e){console.error(e)}finally{session.state="session_state_logout"}};session.fire_logout=function(reason){if(!reason){reason=0}try{if(session.state=="session_state_logined"&&session.onLogout){session.onLogout(reason)}}catch(e){console.error(e)}finally{session.state="session_state_logout"}};var do_lbs=function(retry,urls,idx){if(session.lbs_state!="requesting"){return}var url=urls[idx];timedGetText(url+"/getaddr?vid="+vid,5e3,function(err,data){if(err){if(retry-1>0){do_lbs(retry-1,urls,(idx+1)%urls.length)}else{session.fire_login_failed(LOGIN_E_NET)}}else{if(session.lbs_state!="requesting"){return}session.lbs_state="completed";server_urls=JSON.parse(data).web;do_connect();do_connect()}})};var do_connect=function(){if(0){session.socket=io.connect("http://125.88.159.176:3000/")}else{if(session.state=="session_state_logining"){var socket=new function(){var url=format_ws_url(server_urls[session.idx]);session.idx=(session.idx+1)%server_urls.length;var websocket=new WebSocket(url);websocket.state="CONNECTING";setTimeout(function(){if(websocket.readyState==websocket.CONNECTING){websocket.close();return}},6e3);websocket.onopen=function(evt){if(session.state=="session_state_logout"){websocket.close()}else if(session.state=="session_state_logining"&&session.socket==null){session.socket=socket;websocket.state="OPEN";dbg("on conn open");session.go_login();for(var i in bufs){websocket.send(JSON.stringify(bufs[i]))}}else{websocket.close()}};websocket.onclose=function(evt){if(websocket.state=="OPEN"){fire("_close","");dbg("on conn close")}if(websocket.state=="CONNECTING"){do_connect()}};websocket.onmessage=function(evt){var msg=evt.data;var x=JSON.parse(msg);var name=x[0];fire(x[0],x[1])};websocket.onerror=function(evt){websocket.state="CLOSED";if(session.idx<server_urls.length&&evt.target.readyState==evt.target.CLOSED){do_connect();return}dbg("on conn error");if(session.state=="session_state_logined"&&session.socket==socket){session.fire_logout("conn error")}else if(session.state=="session_state_logining"&&session.socket==socket){session.fire_login_failed(LOGIN_E_NET)}};var evts={};var fire=function(evt,args){if(evt in evts){evts[evt](args)}};var bufs=[];this.on=function(evt,f){evts[evt]=f};this.emit=function(evt,args){if(websocket.readyState==0){bufs.push([evt,args]);return}websocket.send(JSON.stringify([evt,args]))};this.close=function(){websocket.close()}}}}var ping_i=0;var start_ping=function(){setTimeout(function(){if(session.state!="session_state_logined"){return}ping_i++;dbg("send ping",ping_i);session.socket.emit("ping",ping_i);start_ping()},1e3*10)};session.go_login=function(){if(session.line==""){session.socket.emit("login",{vid:vid,account:account,uid:0,token:token,device:"websdk",ip:""});session.socket.on("login_ret",function(x){var err=x[0];var ret=JSON.parse(x[1]);dbg("login ret",err,ret);if(!err&&ret["result"]=="ok"){session.uid=ret["uid"];session.line=ret["line"];session.state="session_state_logined";start_ping();start_tick();try{if(session.onLoginSuccess){session.onLoginSuccess(session.uid)}}catch(e){console.error(e)}finally{schedule_poll()}}else{if(err==""){err=ret["reason"]}try{if(session.onLoginFailed){var e=err=="kick"?LOGIN_E_TOKEN_KICKED:err=="TokenErrorExpired"?LOGIN_E_TOKENEXPIRED:err.startsWith("TokenError")?LOGIN_E_TOKENWRONG:LOGIN_E_NET;session.fire_login_failed(e)}}catch(e){console.error(e)}}})}else{session.socket.emit("line_login",{line:session.line})}var callid=0;var calltable={};var call_obj_table={};session.call2=function(func,args,cb){callid++;calltable[callid]=[func,args,cb];dbg("call ",[func,callid,args]);session.socket.emit("call2",[func,callid,args])};session.socket.on("call2-ret",function(msg){var callid=msg[0];var err=msg[1];var data=msg[2];if(callid in calltable){var cb=calltable[callid][2];if(err==""){try{data=JSON.parse(data);if(data.result!="ok"){err=data.data.result}}catch(e){err="wrong resp:"+data}}if(cb)cb(err,data)}});var is_ok=function(err,msg){return err==""};var channel;var proc_msg1=function(src,t,content){if(t=="channel_msg"){}};var decode_msg=function(msg){if(msg.startsWith("msg-v2 ")){var r=split_python(msg," ",6);if(r.length==7){var src=r[1];var t=r[4];var content=r[6];return[src,t,content]}}return null};session.socket.on("pong",function(msg){dbg("recv pong")});session.socket.on("close",function(msg){session.fire_logout(0);session.socket.close()});session.socket.on("_close",function(msg){session.fire_logout(0)});var process_msg=function(msg){var tmp=msg;var src=tmp[0];var t=tmp[1];var content=tmp[2];if(t=="instant"){try{if(session.onMessageInstantReceive)session.onMessageInstantReceive(src,0,content)}catch(e){console.error(e)}}if(t.startsWith("voip_")){var root=JSON.parse(content);var channel=root.channel;var peer=root.peer;var extra=root.extra;var peeruid=root.peeruid;var call;if(t=="voip_invite"){call=new Call(channel,peer,peeruid,extra);session.call2("voip_invite_ack",{line:session.line,channelName:channel,peer:peer,extra:""})}else{call=call_obj_table[channel+peer];if(!call){return}}if(t=="voip_invite"){try{if(session.onInviteReceived)session.onInviteReceived(call)}catch(e){console.error(e)}}if(t=="voip_invite_ack"){try{if(call.onInviteReceivedByPeer)call.onInviteReceivedByPeer(extra)}catch(e){console.error(e)}}if(t=="voip_invite_accept"){try{if(call.onInviteAcceptedByPeer)call.onInviteAcceptedByPeer(extra)}catch(e){console.error(e)}}if(t=="voip_invite_refuse"){try{if(call.onInviteRefusedByPeer)call.onInviteRefusedByPeer(extra)}catch(e){console.error(e)}}if(t=="voip_invite_failed"){try{if(call.onInviteFailed)call.onInviteFailed(extra)}catch(e){console.error(e)}}if(t=="voip_invite_bye"){try{if(call.onInviteEndByPeer)call.onInviteEndByPeer(extra)}catch(e){console.error(e)}}if(t=="voip_invite_msg"){try{if(call.onInviteMsg)call.onInviteMsg(extra)}catch(e){console.error(e)}}}};var get_time_in_ms=function(){return Date.now()};var m_ver_clear=0;var m_ver_notify=0;var m_ver_ack=0;var m_last_active_time=0;var m_time_poll_last=0;var m_is_polling=false;var schedule_poll=function(){if(m_is_polling)return;m_is_polling=true;session.call2("user_getmsg",{line:session.line,ver_clear:m_ver_clear,max:30},function(err,data){if(err==""){var resp=data;var ver_clear_old=m_ver_clear;m_ver_clear=resp["ver_clear"];m_ver_ack=m_ver_clear;for(var i in resp["msgs"]){var v=resp["msgs"][i][0];var line=resp["msgs"][i][1];process_msg(decode_msg(line));m_ver_clear=v}if(resp["msgs"].length==30||m_ver_clear<m_ver_notify){schedule_poll()}m_last_active_time=get_time_in_ms()}m_is_polling=false;m_time_poll_last=get_time_in_ms()})};var schedule_poll_tail=function(){m_time_poll_last=get_time_in_ms()};var start_tick=function(){setTimeout(function(){if(session.state=="session_state_logout"){return}if(session.state=="session_state_logined"){var t=get_time_in_ms();if(m_ver_ack<m_ver_clear&&t-m_time_poll_last>1e3){schedule_poll()}else if(t-m_time_poll_last>=1e3*60){schedule_poll()}}start_tick()},100)};session.socket.on("notify",function(msg){dbg("recv notify ",msg);if(typeof msg=="string"){msg=split_python(msg," ",2);msg=msg.slice(1)}var e=msg[0];if(e=="channel2"){var cid=msg[1];var msgid=msg[2];if(channel.m_channel_msgid!=0&&channel.m_channel_msgid+1>msgid){dbg("ignore channel msg",cid,msgid,channel.m_channel_msgid);return}channel.m_channel_msgid=msgid;var tmp=decode_msg(msg[3]);if(tmp){var src=tmp[0];var t=tmp[1];var content=tmp[2];var jj=JSON.parse(content);if(t=="channel_msg"){try{if(channel.onMessageChannelReceive){channel.onMessageChannelReceive(jj.account,jj.uid,jj.msg)}}catch(e){console.error(e)}}if(t=="channel_user_join"){try{if(channel.onChannelUserJoined){channel.onChannelUserJoined(jj.account,jj.uid)}}catch(e){console.error(e)}}if(t=="channel_user_leave"){try{if(channel.onChannelUserLeaved){channel.onChannelUserLeaved(jj.account,jj.uid)}}catch(e){console.error(e)}}if(t=="channel_attr_update"){try{if(channel.onChannelAttrUpdated){channel.onChannelAttrUpdated(jj.name,jj.value,jj.type)}}catch(e){console.error(e)}}}}if(e=="msg"){m_ver_notify=msg[1];schedule_poll()}if(e=="recvmsg"){var r=JSON.parse(msg[1]);var v=r[0];var line=r[1];if(v==m_ver_clear+1){process_msg(decode_msg(line));m_ver_clear=v;schedule_poll_tail()}else{m_ver_notify=v;schedule_poll()}}});session.messageInstantSend=function(peer,msg,cb){session.call2("user_sendmsg",{line:session.line,peer:peer,flag:"v1:E:3600",t:"instant",content:msg},function(err,data){if(cb)cb(!is_ok(err,data))})};session.invoke=function(func,args,cb){if(func.startsWith("io.agora.signal.")){var f=func.split(".")[3];args.line=session.line;session.call2(f,args,function(err,ret){if(cb){cb(err,ret)}})}};var Call=function(channelID,peer,extra){this.onInviteReceivedByPeer="";this.onInviteAcceptedByPeer="";this.onInviteRefusedByPeer="";this.onInviteFailed="";this.onInviteEndByPeer="";this.onInviteEndByMyself="";this.onInviteMsg="";var call=this;this.channelName=channelID;this.peer=peer;this.extra=extra;call_obj_table[channelID+peer]=call;this.channelInviteUser2=function(){extra=extra||"";session.call2("voip_invite",{line:session.line,channelName:channelID,peer:peer,extra:extra},function(err,msg){if(is_ok(err,msg)){}else{try{call.onInviteFailed(err)}catch(e){console.error(e)}}})};this.channelInviteAccept=function(extra){extra=extra||"";session.call2("voip_invite_accept",{line:session.line,channelName:channelID,peer:peer,extra:extra})};this.channelInviteRefuse=function(extra){extra=extra||"";session.call2("voip_invite_refuse",{line:session.line,channelName:channelID,peer:peer,extra:extra})};this.channelInviteDTMF=function(dtmf){session.call2("voip_invite_msg",{line:session.line,channelName:channelID,peer:peer,extra:JSON.stringify({msgtype:"dtmf",msgdata:dtmf})})};this.channelInviteEnd=function(extra){extra=extra||"";session.call2("voip_invite_bye",{line:session.line,channelName:channelID,peer:peer,extra:extra});try{if(call.onInviteEndByMyself)call.onInviteEndByMyself("")}catch(e){console.error(e)}}};session.channelInviteUser2=function(channelID,peer,extra){var call=new Call(channelID,peer,extra);call.channelInviteUser2();return call};session.channelJoin=function(name){if(session.state!="session_state_logined"){dbg("You should log in first.");return}channel=new function(){this.onChannelJoined="";this.onChannelJoinFailed="";this.onChannelLeaved="";this.onChannelUserList="";this.onChannelUserJoined="";this.onChannelUserLeaved="";this.onChannelUserList="";this.onChannelAttrUpdated="";this.onMessageChannelReceive="";this.name=name;this.state="joining";this.m_channel_msgid=0;this.messageChannelSend=function(msg,f){session.call2("channel_sendmsg",{line:session.line,name:name,msg:msg},function(err,msg){if(f){f()}})};this.channelLeave=function(f){session.call2("channel_leave",{line:session.line,name:name},function(err,msg){channel.state="leaved";if(f){f()}else{try{if(channel.onChannelLeaved){channel.onChannelLeaved(0)}}catch(e){console.error(e)}}})};this.channelSetAttr=function(k,v,f){session.call2("channel_set_attr",{line:session.line,channel:name,name:k,value:v},function(err,msg){if(f){f()}})};this.channelDelAttr=function(k,f){session.call2("channel_del_attr",{line:session.line,channel:name,name:k},function(err,msg){if(f){f()}})};this.channelClearAttr=function(f){session.call2("channel_clear_attr",{line:session.line,channel:name},function(err,msg){if(f){f()}})}};session.call2("channel_join",{line:session.line,name:name},function(err,msg){if(err==""){channel.state="joined";try{if(channel.onChannelJoined){channel.onChannelJoined()}}catch(e){console.error(e)}var r=msg;try{if(channel.onChannelUserList){channel.onChannelUserList(r.list)}}catch(e){console.error(e)}try{if(channel.onChannelAttrUpdated){for(var k in r.attrs){channel.onChannelAttrUpdated(k,r.attrs[k],"update")}}}catch(e){console.error(e)}}else{try{if(channel.onChannelJoinFailed){channel.onChannelJoinFailed(err)}}catch(e){console.error(e)}}});return channel}}};session.socket=null;shuffle(signal.lbs_url1);shuffle(signal.lbs_url2);do_lbs(2,signal.lbs_url1,0);do_lbs(2,signal.lbs_url2,0)};this.login=function(account,token){return new Session(account,token)}};Signal=function(vid){return new Signal_(vid)};
/*! howler.js v2.0.5 | (c) 2013-2017, James Simpson of GoldFire Studios | MIT License | howlerjs.com */
!function(){"use strict";var e=function(){this.init()};e.prototype={init:function(){var e=this||n;return e._counter=1e3,e._codecs={},e._howls=[],e._muted=!1,e._volume=1,e._canPlayEvent="canplaythrough",e._navigator="undefined"!=typeof window&&window.navigator?window.navigator:null,e.masterGain=null,e.noAudio=!1,e.usingWebAudio=!0,e.autoSuspend=!0,e.ctx=null,e.mobileAutoEnable=!0,e._setup(),e},volume:function(e){var o=this||n;if(e=parseFloat(e),o.ctx||_(),void 0!==e&&e>=0&&e<=1){if(o._volume=e,o._muted)return o;o.usingWebAudio&&(o.masterGain.gain.value=e);for(var t=0;t<o._howls.length;t++)if(!o._howls[t]._webAudio)for(var r=o._howls[t]._getSoundIds(),a=0;a<r.length;a++){var u=o._howls[t]._soundById(r[a]);u&&u._node&&(u._node.volume=u._volume*e)}return o}return o._volume},mute:function(e){var o=this||n;o.ctx||_(),o._muted=e,o.usingWebAudio&&(o.masterGain.gain.value=e?0:o._volume);for(var t=0;t<o._howls.length;t++)if(!o._howls[t]._webAudio)for(var r=o._howls[t]._getSoundIds(),a=0;a<r.length;a++){var u=o._howls[t]._soundById(r[a]);u&&u._node&&(u._node.muted=!!e||u._muted)}return o},unload:function(){for(var e=this||n,o=e._howls.length-1;o>=0;o--)e._howls[o].unload();return e.usingWebAudio&&e.ctx&&void 0!==e.ctx.close&&(e.ctx.close(),e.ctx=null,_()),e},codecs:function(e){return(this||n)._codecs[e.replace(/^x-/,"")]},_setup:function(){var e=this||n;if(e.state=e.ctx?e.ctx.state||"running":"running",e._autoSuspend(),!e.usingWebAudio)if("undefined"!=typeof Audio)try{var o=new Audio;void 0===o.oncanplaythrough&&(e._canPlayEvent="canplay")}catch(n){e.noAudio=!0}else e.noAudio=!0;try{var o=new Audio;o.muted&&(e.noAudio=!0)}catch(e){}return e.noAudio||e._setupCodecs(),e},_setupCodecs:function(){var e=this||n,o=null;try{o="undefined"!=typeof Audio?new Audio:null}catch(n){return e}if(!o||"function"!=typeof o.canPlayType)return e;var t=o.canPlayType("audio/mpeg;").replace(/^no$/,""),r=e._navigator&&e._navigator.userAgent.match(/OPR\/([0-6].)/g),a=r&&parseInt(r[0].split("/")[1],10)<33;return e._codecs={mp3:!(a||!t&&!o.canPlayType("audio/mp3;").replace(/^no$/,"")),mpeg:!!t,opus:!!o.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!o.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!o.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!o.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),aac:!!o.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!o.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(o.canPlayType("audio/x-m4a;")||o.canPlayType("audio/m4a;")||o.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(o.canPlayType("audio/x-mp4;")||o.canPlayType("audio/mp4;")||o.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!o.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,""),webm:!!o.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,""),dolby:!!o.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(o.canPlayType("audio/x-flac;")||o.canPlayType("audio/flac;")).replace(/^no$/,"")},e},_enableMobileAudio:function(){var e=this||n,o=/iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(e._navigator&&e._navigator.userAgent),t=!!("ontouchend"in window||e._navigator&&e._navigator.maxTouchPoints>0||e._navigator&&e._navigator.msMaxTouchPoints>0);if(!e._mobileEnabled&&e.ctx&&(o||t)){e._mobileEnabled=!1,e._mobileUnloaded||44100===e.ctx.sampleRate||(e._mobileUnloaded=!0,e.unload()),e._scratchBuffer=e.ctx.createBuffer(1,1,22050);var r=function(){n._autoResume();var o=e.ctx.createBufferSource();o.buffer=e._scratchBuffer,o.connect(e.ctx.destination),void 0===o.start?o.noteOn(0):o.start(0),"function"==typeof e.ctx.resume&&e.ctx.resume(),o.onended=function(){o.disconnect(0),e._mobileEnabled=!0,e.mobileAutoEnable=!1,document.removeEventListener("touchstart",r,!0),document.removeEventListener("touchend",r,!0)}};return document.addEventListener("touchstart",r,!0),document.addEventListener("touchend",r,!0),e}},_autoSuspend:function(){var e=this;if(e.autoSuspend&&e.ctx&&void 0!==e.ctx.suspend&&n.usingWebAudio){for(var o=0;o<e._howls.length;o++)if(e._howls[o]._webAudio)for(var t=0;t<e._howls[o]._sounds.length;t++)if(!e._howls[o]._sounds[t]._paused)return e;return e._suspendTimer&&clearTimeout(e._suspendTimer),e._suspendTimer=setTimeout(function(){e.autoSuspend&&(e._suspendTimer=null,e.state="suspending",e.ctx.suspend().then(function(){e.state="suspended",e._resumeAfterSuspend&&(delete e._resumeAfterSuspend,e._autoResume())}))},3e4),e}},_autoResume:function(){var e=this;if(e.ctx&&void 0!==e.ctx.resume&&n.usingWebAudio)return"running"===e.state&&e._suspendTimer?(clearTimeout(e._suspendTimer),e._suspendTimer=null):"suspended"===e.state?(e.ctx.resume().then(function(){e.state="running";for(var n=0;n<e._howls.length;n++)e._howls[n]._emit("resume")}),e._suspendTimer&&(clearTimeout(e._suspendTimer),e._suspendTimer=null)):"suspending"===e.state&&(e._resumeAfterSuspend=!0),e}};var n=new e,o=function(e){var n=this;if(!e.src||0===e.src.length)return void console.error("An array of source files must be passed with any new Howl.");n.init(e)};o.prototype={init:function(e){var o=this;return n.ctx||_(),o._autoplay=e.autoplay||!1,o._format="string"!=typeof e.format?e.format:[e.format],o._html5=e.html5||!1,o._muted=e.mute||!1,o._loop=e.loop||!1,o._pool=e.pool||5,o._preload="boolean"!=typeof e.preload||e.preload,o._rate=e.rate||1,o._sprite=e.sprite||{},o._src="string"!=typeof e.src?e.src:[e.src],o._volume=void 0!==e.volume?e.volume:1,o._xhrWithCredentials=e.xhrWithCredentials||!1,o._duration=0,o._state="unloaded",o._sounds=[],o._endTimers={},o._queue=[],o._onend=e.onend?[{fn:e.onend}]:[],o._onfade=e.onfade?[{fn:e.onfade}]:[],o._onload=e.onload?[{fn:e.onload}]:[],o._onloaderror=e.onloaderror?[{fn:e.onloaderror}]:[],o._onplayerror=e.onplayerror?[{fn:e.onplayerror}]:[],o._onpause=e.onpause?[{fn:e.onpause}]:[],o._onplay=e.onplay?[{fn:e.onplay}]:[],o._onstop=e.onstop?[{fn:e.onstop}]:[],o._onmute=e.onmute?[{fn:e.onmute}]:[],o._onvolume=e.onvolume?[{fn:e.onvolume}]:[],o._onrate=e.onrate?[{fn:e.onrate}]:[],o._onseek=e.onseek?[{fn:e.onseek}]:[],o._onresume=[],o._webAudio=n.usingWebAudio&&!o._html5,void 0!==n.ctx&&n.ctx&&n.mobileAutoEnable&&n._enableMobileAudio(),n._howls.push(o),o._autoplay&&o._queue.push({event:"play",action:function(){o.play()}}),o._preload&&o.load(),o},load:function(){var e=this,o=null;if(n.noAudio)return void e._emit("loaderror",null,"No audio support.");"string"==typeof e._src&&(e._src=[e._src]);for(var r=0;r<e._src.length;r++){var u,i;if(e._format&&e._format[r])u=e._format[r];else{if("string"!=typeof(i=e._src[r])){e._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}u=/^data:audio\/([^;,]+);/i.exec(i),u||(u=/\.([^.]+)$/.exec(i.split("?",1)[0])),u&&(u=u[1].toLowerCase())}if(u||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),u&&n.codecs(u)){o=e._src[r];break}}return o?(e._src=o,e._state="loading","https:"===window.location.protocol&&"http:"===o.slice(0,5)&&(e._html5=!0,e._webAudio=!1),new t(e),e._webAudio&&a(e),e):void e._emit("loaderror",null,"No codec support for selected audio sources.")},play:function(e,o){var t=this,r=null;if("number"==typeof e)r=e,e=null;else{if("string"==typeof e&&"loaded"===t._state&&!t._sprite[e])return null;if(void 0===e){e="__default";for(var a=0,u=0;u<t._sounds.length;u++)t._sounds[u]._paused&&!t._sounds[u]._ended&&(a++,r=t._sounds[u]._id);1===a?e=null:r=null}}var i=r?t._soundById(r):t._inactiveSound();if(!i)return null;if(r&&!e&&(e=i._sprite||"__default"),"loaded"!==t._state){i._sprite=e,i._ended=!1;var d=i._id;return t._queue.push({event:"play",action:function(){t.play(d)}}),d}if(r&&!i._paused)return o||setTimeout(function(){t._emit("play",i._id)},0),i._id;t._webAudio&&n._autoResume();var _=Math.max(0,i._seek>0?i._seek:t._sprite[e][0]/1e3),s=Math.max(0,(t._sprite[e][0]+t._sprite[e][1])/1e3-_),l=1e3*s/Math.abs(i._rate);i._paused=!1,i._ended=!1,i._sprite=e,i._seek=_,i._start=t._sprite[e][0]/1e3,i._stop=(t._sprite[e][0]+t._sprite[e][1])/1e3,i._loop=!(!i._loop&&!t._sprite[e][2]);var c=i._node;if(t._webAudio){var f=function(){t._refreshBuffer(i);var e=i._muted||t._muted?0:i._volume;c.gain.setValueAtTime(e,n.ctx.currentTime),i._playStart=n.ctx.currentTime,void 0===c.bufferSource.start?i._loop?c.bufferSource.noteGrainOn(0,_,86400):c.bufferSource.noteGrainOn(0,_,s):i._loop?c.bufferSource.start(0,_,86400):c.bufferSource.start(0,_,s),l!==1/0&&(t._endTimers[i._id]=setTimeout(t._ended.bind(t,i),l)),o||setTimeout(function(){t._emit("play",i._id)},0)};"running"===n.state?f():(t.once("resume",f),t._clearTimer(i._id))}else{var p=function(){c.currentTime=_,c.muted=i._muted||t._muted||n._muted||c.muted,c.volume=i._volume*n.volume(),c.playbackRate=i._rate;try{if(c.play(),c.paused)return void t._emit("playerror",i._id,"Playback was unable to start. This is most commonly an issue on mobile devices where playback was not within a user interaction.");l!==1/0&&(t._endTimers[i._id]=setTimeout(t._ended.bind(t,i),l)),o||t._emit("play",i._id)}catch(e){t._emit("playerror",i._id,e)}},v=window&&window.ejecta||!c.readyState&&n._navigator.isCocoonJS;if(4===c.readyState||v)p();else{var m=function(){p(),c.removeEventListener(n._canPlayEvent,m,!1)};c.addEventListener(n._canPlayEvent,m,!1),t._clearTimer(i._id)}}return i._id},pause:function(e){var n=this;if("loaded"!==n._state)return n._queue.push({event:"pause",action:function(){n.pause(e)}}),n;for(var o=n._getSoundIds(e),t=0;t<o.length;t++){n._clearTimer(o[t]);var r=n._soundById(o[t]);if(r&&!r._paused&&(r._seek=n.seek(o[t]),r._rateSeek=0,r._paused=!0,n._stopFade(o[t]),r._node))if(n._webAudio){if(!r._node.bufferSource)continue;void 0===r._node.bufferSource.stop?r._node.bufferSource.noteOff(0):r._node.bufferSource.stop(0),n._cleanBuffer(r._node)}else isNaN(r._node.duration)&&r._node.duration!==1/0||r._node.pause();arguments[1]||n._emit("pause",r?r._id:null)}return n},stop:function(e,n){var o=this;if("loaded"!==o._state)return o._queue.push({event:"stop",action:function(){o.stop(e)}}),o;for(var t=o._getSoundIds(e),r=0;r<t.length;r++){o._clearTimer(t[r]);var a=o._soundById(t[r]);a&&(a._seek=a._start||0,a._rateSeek=0,a._paused=!0,a._ended=!0,o._stopFade(t[r]),a._node&&(o._webAudio?a._node.bufferSource&&(void 0===a._node.bufferSource.stop?a._node.bufferSource.noteOff(0):a._node.bufferSource.stop(0),o._cleanBuffer(a._node)):isNaN(a._node.duration)&&a._node.duration!==1/0||(a._node.currentTime=a._start||0,a._node.pause())),n||o._emit("stop",a._id))}return o},mute:function(e,o){var t=this;if("loaded"!==t._state)return t._queue.push({event:"mute",action:function(){t.mute(e,o)}}),t;if(void 0===o){if("boolean"!=typeof e)return t._muted;t._muted=e}for(var r=t._getSoundIds(o),a=0;a<r.length;a++){var u=t._soundById(r[a]);u&&(u._muted=e,t._webAudio&&u._node?u._node.gain.setValueAtTime(e?0:u._volume,n.ctx.currentTime):u._node&&(u._node.muted=!!n._muted||e),t._emit("mute",u._id))}return t},volume:function(){var e,o,t=this,r=arguments;if(0===r.length)return t._volume;if(1===r.length||2===r.length&&void 0===r[1]){t._getSoundIds().indexOf(r[0])>=0?o=parseInt(r[0],10):e=parseFloat(r[0])}else r.length>=2&&(e=parseFloat(r[0]),o=parseInt(r[1],10));var a;if(!(void 0!==e&&e>=0&&e<=1))return a=o?t._soundById(o):t._sounds[0],a?a._volume:0;if("loaded"!==t._state)return t._queue.push({event:"volume",action:function(){t.volume.apply(t,r)}}),t;void 0===o&&(t._volume=e),o=t._getSoundIds(o);for(var u=0;u<o.length;u++)(a=t._soundById(o[u]))&&(a._volume=e,r[2]||t._stopFade(o[u]),t._webAudio&&a._node&&!a._muted?a._node.gain.setValueAtTime(e,n.ctx.currentTime):a._node&&!a._muted&&(a._node.volume=e*n.volume()),t._emit("volume",a._id));return t},fade:function(e,o,t,r){var a=this;if("loaded"!==a._state)return a._queue.push({event:"fade",action:function(){a.fade(e,o,t,r)}}),a;a.volume(e,r);for(var u=a._getSoundIds(r),i=0;i<u.length;i++){var d=a._soundById(u[i]);if(d){if(r||a._stopFade(u[i]),a._webAudio&&!d._muted){var _=n.ctx.currentTime,s=_+t/1e3;d._volume=e,d._node.gain.setValueAtTime(e,_),d._node.gain.linearRampToValueAtTime(o,s)}a._startFadeInterval(d,e,o,t,u[i])}}return a},_startFadeInterval:function(e,n,o,t,r){var a=this,u=n,i=n>o?"out":"in",d=Math.abs(n-o),_=d/.01,s=_>0?t/_:t;s<4&&(_=Math.ceil(_/(4/s)),s=4),e._interval=setInterval(function(){_>0&&(u+="in"===i?.01:-.01),u=Math.max(0,u),u=Math.min(1,u),u=Math.round(100*u)/100,a._webAudio?(void 0===r&&(a._volume=u),e._volume=u):a.volume(u,e._id,!0),(o<n&&u<=o||o>n&&u>=o)&&(clearInterval(e._interval),e._interval=null,a.volume(o,e._id),a._emit("fade",e._id))},s)},_stopFade:function(e){var o=this,t=o._soundById(e);return t&&t._interval&&(o._webAudio&&t._node.gain.cancelScheduledValues(n.ctx.currentTime),clearInterval(t._interval),t._interval=null,o._emit("fade",e)),o},loop:function(){var e,n,o,t=this,r=arguments;if(0===r.length)return t._loop;if(1===r.length){if("boolean"!=typeof r[0])return!!(o=t._soundById(parseInt(r[0],10)))&&o._loop;e=r[0],t._loop=e}else 2===r.length&&(e=r[0],n=parseInt(r[1],10));for(var a=t._getSoundIds(n),u=0;u<a.length;u++)(o=t._soundById(a[u]))&&(o._loop=e,t._webAudio&&o._node&&o._node.bufferSource&&(o._node.bufferSource.loop=e,e&&(o._node.bufferSource.loopStart=o._start||0,o._node.bufferSource.loopEnd=o._stop)));return t},rate:function(){var e,o,t=this,r=arguments;if(0===r.length)o=t._sounds[0]._id;else if(1===r.length){var a=t._getSoundIds(),u=a.indexOf(r[0]);u>=0?o=parseInt(r[0],10):e=parseFloat(r[0])}else 2===r.length&&(e=parseFloat(r[0]),o=parseInt(r[1],10));var i;if("number"!=typeof e)return i=t._soundById(o),i?i._rate:t._rate;if("loaded"!==t._state)return t._queue.push({event:"rate",action:function(){t.rate.apply(t,r)}}),t;void 0===o&&(t._rate=e),o=t._getSoundIds(o);for(var d=0;d<o.length;d++)if(i=t._soundById(o[d])){i._rateSeek=t.seek(o[d]),i._playStart=t._webAudio?n.ctx.currentTime:i._playStart,i._rate=e,t._webAudio&&i._node&&i._node.bufferSource?i._node.bufferSource.playbackRate.value=e:i._node&&(i._node.playbackRate=e);var _=t.seek(o[d]),s=(t._sprite[i._sprite][0]+t._sprite[i._sprite][1])/1e3-_,l=1e3*s/Math.abs(i._rate);!t._endTimers[o[d]]&&i._paused||(t._clearTimer(o[d]),t._endTimers[o[d]]=setTimeout(t._ended.bind(t,i),l)),t._emit("rate",i._id)}return t},seek:function(){var e,o,t=this,r=arguments;if(0===r.length)o=t._sounds[0]._id;else if(1===r.length){var a=t._getSoundIds(),u=a.indexOf(r[0]);u>=0?o=parseInt(r[0],10):t._sounds.length&&(o=t._sounds[0]._id,e=parseFloat(r[0]))}else 2===r.length&&(e=parseFloat(r[0]),o=parseInt(r[1],10));if(void 0===o)return t;if("loaded"!==t._state)return t._queue.push({event:"seek",action:function(){t.seek.apply(t,r)}}),t;var i=t._soundById(o);if(i){if(!("number"==typeof e&&e>=0)){if(t._webAudio){var d=t.playing(o)?n.ctx.currentTime-i._playStart:0,_=i._rateSeek?i._rateSeek-i._seek:0;return i._seek+(_+d*Math.abs(i._rate))}return i._node.currentTime}var s=t.playing(o);s&&t.pause(o,!0),i._seek=e,i._ended=!1,t._clearTimer(o),s&&t.play(o,!0),!t._webAudio&&i._node&&(i._node.currentTime=e),t._emit("seek",o)}return t},playing:function(e){var n=this;if("number"==typeof e){var o=n._soundById(e);return!!o&&!o._paused}for(var t=0;t<n._sounds.length;t++)if(!n._sounds[t]._paused)return!0;return!1},duration:function(e){var n=this,o=n._duration,t=n._soundById(e);return t&&(o=n._sprite[t._sprite][1]/1e3),o},state:function(){return this._state},unload:function(){for(var e=this,o=e._sounds,t=0;t<o.length;t++){if(o[t]._paused||e.stop(o[t]._id),!e._webAudio){/MSIE |Trident\//.test(n._navigator&&n._navigator.userAgent)||(o[t]._node.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"),o[t]._node.removeEventListener("error",o[t]._errorFn,!1),o[t]._node.removeEventListener(n._canPlayEvent,o[t]._loadFn,!1)}delete o[t]._node,e._clearTimer(o[t]._id);var a=n._howls.indexOf(e);a>=0&&n._howls.splice(a,1)}var u=!0;for(t=0;t<n._howls.length;t++)if(n._howls[t]._src===e._src){u=!1;break}return r&&u&&delete r[e._src],n.noAudio=!1,e._state="unloaded",e._sounds=[],e=null,null},on:function(e,n,o,t){var r=this,a=r["_on"+e];return"function"==typeof n&&a.push(t?{id:o,fn:n,once:t}:{id:o,fn:n}),r},off:function(e,n,o){var t=this,r=t["_on"+e],a=0;if("number"==typeof n&&(o=n,n=null),n||o)for(a=0;a<r.length;a++){var u=o===r[a].id;if(n===r[a].fn&&u||!n&&u){r.splice(a,1);break}}else if(e)t["_on"+e]=[];else{var i=Object.keys(t);for(a=0;a<i.length;a++)0===i[a].indexOf("_on")&&Array.isArray(t[i[a]])&&(t[i[a]]=[])}return t},once:function(e,n,o){var t=this;return t.on(e,n,o,1),t},_emit:function(e,n,o){for(var t=this,r=t["_on"+e],a=r.length-1;a>=0;a--)r[a].id&&r[a].id!==n&&"load"!==e||(setTimeout(function(e){e.call(this,n,o)}.bind(t,r[a].fn),0),r[a].once&&t.off(e,r[a].fn,r[a].id));return t},_loadQueue:function(){var e=this;if(e._queue.length>0){var n=e._queue[0];e.once(n.event,function(){e._queue.shift(),e._loadQueue()}),n.action()}return e},_ended:function(e){var o=this,t=e._sprite;if(!o._webAudio&&e._node&&!e._node.paused)return setTimeout(o._ended.bind(o,e),100),o;var r=!(!e._loop&&!o._sprite[t][2]);if(o._emit("end",e._id),!o._webAudio&&r&&o.stop(e._id,!0).play(e._id),o._webAudio&&r){o._emit("play",e._id),e._seek=e._start||0,e._rateSeek=0,e._playStart=n.ctx.currentTime;var a=1e3*(e._stop-e._start)/Math.abs(e._rate);o._endTimers[e._id]=setTimeout(o._ended.bind(o,e),a)}return o._webAudio&&!r&&(e._paused=!0,e._ended=!0,e._seek=e._start||0,e._rateSeek=0,o._clearTimer(e._id),o._cleanBuffer(e._node),n._autoSuspend()),o._webAudio||r||o.stop(e._id),o},_clearTimer:function(e){var n=this;return n._endTimers[e]&&(clearTimeout(n._endTimers[e]),delete n._endTimers[e]),n},_soundById:function(e){for(var n=this,o=0;o<n._sounds.length;o++)if(e===n._sounds[o]._id)return n._sounds[o];return null},_inactiveSound:function(){var e=this;e._drain();for(var n=0;n<e._sounds.length;n++)if(e._sounds[n]._ended)return e._sounds[n].reset();return new t(e)},_drain:function(){var e=this,n=e._pool,o=0,t=0;if(!(e._sounds.length<n)){for(t=0;t<e._sounds.length;t++)e._sounds[t]._ended&&o++;for(t=e._sounds.length-1;t>=0;t--){if(o<=n)return;e._sounds[t]._ended&&(e._webAudio&&e._sounds[t]._node&&e._sounds[t]._node.disconnect(0),e._sounds.splice(t,1),o--)}}},_getSoundIds:function(e){var n=this;if(void 0===e){for(var o=[],t=0;t<n._sounds.length;t++)o.push(n._sounds[t]._id);return o}return[e]},_refreshBuffer:function(e){var o=this;return e._node.bufferSource=n.ctx.createBufferSource(),e._node.bufferSource.buffer=r[o._src],e._panner?e._node.bufferSource.connect(e._panner):e._node.bufferSource.connect(e._node),e._node.bufferSource.loop=e._loop,e._loop&&(e._node.bufferSource.loopStart=e._start||0,e._node.bufferSource.loopEnd=e._stop),e._node.bufferSource.playbackRate.value=e._rate,o},_cleanBuffer:function(e){var n=this;if(n._scratchBuffer){e.bufferSource.onended=null,e.bufferSource.disconnect(0);try{e.bufferSource.buffer=n._scratchBuffer}catch(e){}}return e.bufferSource=null,n}};var t=function(e){this._parent=e,this.init()};t.prototype={init:function(){var e=this,o=e._parent;return e._muted=o._muted,e._loop=o._loop,e._volume=o._volume,e._rate=o._rate,e._seek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++n._counter,o._sounds.push(e),e.create(),e},create:function(){var e=this,o=e._parent,t=n._muted||e._muted||e._parent._muted?0:e._volume;return o._webAudio?(e._node=void 0===n.ctx.createGain?n.ctx.createGainNode():n.ctx.createGain(),e._node.gain.setValueAtTime(t,n.ctx.currentTime),e._node.paused=!0,e._node.connect(n.masterGain)):(e._node=new Audio,e._errorFn=e._errorListener.bind(e),e._node.addEventListener("error",e._errorFn,!1),e._loadFn=e._loadListener.bind(e),e._node.addEventListener(n._canPlayEvent,e._loadFn,!1),e._node.src=o._src,e._node.preload="auto",e._node.volume=t*n.volume(),e._node.load()),e},reset:function(){var e=this,o=e._parent;return e._muted=o._muted,e._loop=o._loop,e._volume=o._volume,e._rate=o._rate,e._seek=0,e._rateSeek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++n._counter,e},_errorListener:function(){var e=this;e._parent._emit("loaderror",e._id,e._node.error?e._node.error.code:0),e._node.removeEventListener("error",e._errorFn,!1)},_loadListener:function(){var e=this,o=e._parent;o._duration=Math.ceil(10*e._node.duration)/10,0===Object.keys(o._sprite).length&&(o._sprite={__default:[0,1e3*o._duration]}),"loaded"!==o._state&&(o._state="loaded",o._emit("load"),o._loadQueue()),e._node.removeEventListener(n._canPlayEvent,e._loadFn,!1)}};var r={},a=function(e){var n=e._src;if(r[n])return e._duration=r[n].duration,void d(e);if(/^data:[^;]+;base64,/.test(n)){for(var o=atob(n.split(",")[1]),t=new Uint8Array(o.length),a=0;a<o.length;++a)t[a]=o.charCodeAt(a);i(t.buffer,e)}else{var _=new XMLHttpRequest;_.open("GET",n,!0),_.withCredentials=e._xhrWithCredentials,_.responseType="arraybuffer",_.onload=function(){var n=(_.status+"")[0];if("0"!==n&&"2"!==n&&"3"!==n)return void e._emit("loaderror",null,"Failed loading audio file with status: "+_.status+".");i(_.response,e)},_.onerror=function(){e._webAudio&&(e._html5=!0,e._webAudio=!1,e._sounds=[],delete r[n],e.load())},u(_)}},u=function(e){try{e.send()}catch(n){e.onerror()}},i=function(e,o){n.ctx.decodeAudioData(e,function(e){e&&o._sounds.length>0&&(r[o._src]=e,d(o,e))},function(){o._emit("loaderror",null,"Decoding audio data failed.")})},d=function(e,n){n&&!e._duration&&(e._duration=n.duration),0===Object.keys(e._sprite).length&&(e._sprite={__default:[0,1e3*e._duration]}),"loaded"!==e._state&&(e._state="loaded",e._emit("load"),e._loadQueue())},_=function(){try{"undefined"!=typeof AudioContext?n.ctx=new AudioContext:"undefined"!=typeof webkitAudioContext?n.ctx=new webkitAudioContext:n.usingWebAudio=!1}catch(e){n.usingWebAudio=!1}var e=/iP(hone|od|ad)/.test(n._navigator&&n._navigator.platform),o=n._navigator&&n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),t=o?parseInt(o[1],10):null;if(e&&t&&t<9){var r=/safari/.test(n._navigator&&n._navigator.userAgent.toLowerCase());(n._navigator&&n._navigator.standalone&&!r||n._navigator&&!n._navigator.standalone&&!r)&&(n.usingWebAudio=!1)}n.usingWebAudio&&(n.masterGain=void 0===n.ctx.createGain?n.ctx.createGainNode():n.ctx.createGain(),n.masterGain.gain.value=n._muted?0:1,n.masterGain.connect(n.ctx.destination)),n._setup()};"function"==typeof define&&define.amd&&define([],function(){return{Howler:n,Howl:o}}),"undefined"!=typeof exports&&(exports.Howler=n,exports.Howl=o),"undefined"!=typeof window?(window.HowlerGlobal=e,window.Howler=n,window.Howl=o,window.Sound=t):"undefined"!=typeof global&&(global.HowlerGlobal=e,global.Howler=n,global.Howl=o,global.Sound=t)}();
/*! Spatial Plugin */
!function(){"use strict";HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(n){var e=this;if(!e.ctx||!e.ctx.listener)return e;for(var t=e._howls.length-1;t>=0;t--)e._howls[t].stereo(n);return e},HowlerGlobal.prototype.pos=function(n,e,t){var o=this;return o.ctx&&o.ctx.listener?(e="number"!=typeof e?o._pos[1]:e,t="number"!=typeof t?o._pos[2]:t,"number"!=typeof n?o._pos:(o._pos=[n,e,t],o.ctx.listener.setPosition(o._pos[0],o._pos[1],o._pos[2]),o)):o},HowlerGlobal.prototype.orientation=function(n,e,t,o,r,a){var i=this;if(!i.ctx||!i.ctx.listener)return i;var p=i._orientation;return e="number"!=typeof e?p[1]:e,t="number"!=typeof t?p[2]:t,o="number"!=typeof o?p[3]:o,r="number"!=typeof r?p[4]:r,a="number"!=typeof a?p[5]:a,"number"!=typeof n?p:(i._orientation=[n,e,t,o,r,a],i.ctx.listener.setOrientation(n,e,t,o,r,a),i)},Howl.prototype.init=function(n){return function(e){var t=this;return t._orientation=e.orientation||[1,0,0],t._stereo=e.stereo||null,t._pos=e.pos||null,t._pannerAttr={coneInnerAngle:void 0!==e.coneInnerAngle?e.coneInnerAngle:360,coneOuterAngle:void 0!==e.coneOuterAngle?e.coneOuterAngle:360,coneOuterGain:void 0!==e.coneOuterGain?e.coneOuterGain:0,distanceModel:void 0!==e.distanceModel?e.distanceModel:"inverse",maxDistance:void 0!==e.maxDistance?e.maxDistance:1e4,panningModel:void 0!==e.panningModel?e.panningModel:"HRTF",refDistance:void 0!==e.refDistance?e.refDistance:1,rolloffFactor:void 0!==e.rolloffFactor?e.rolloffFactor:1},t._onstereo=e.onstereo?[{fn:e.onstereo}]:[],t._onpos=e.onpos?[{fn:e.onpos}]:[],t._onorientation=e.onorientation?[{fn:e.onorientation}]:[],n.call(this,e)}}(Howl.prototype.init),Howl.prototype.stereo=function(e,t){var o=this;if(!o._webAudio)return o;if("loaded"!==o._state)return o._queue.push({event:"stereo",action:function(){o.stereo(e,t)}}),o;var r=void 0===Howler.ctx.createStereoPanner?"spatial":"stereo";if(void 0===t){if("number"!=typeof e)return o._stereo;o._stereo=e,o._pos=[e,0,0]}for(var a=o._getSoundIds(t),i=0;i<a.length;i++){var p=o._soundById(a[i]);if(p){if("number"!=typeof e)return p._stereo;p._stereo=e,p._pos=[e,0,0],p._node&&(p._pannerAttr.panningModel="equalpower",p._panner&&p._panner.pan||n(p,r),"spatial"===r?p._panner.setPosition(e,0,0):p._panner.pan.value=e),o._emit("stereo",p._id)}}return o},Howl.prototype.pos=function(e,t,o,r){var a=this;if(!a._webAudio)return a;if("loaded"!==a._state)return a._queue.push({event:"pos",action:function(){a.pos(e,t,o,r)}}),a;if(t="number"!=typeof t?0:t,o="number"!=typeof o?-.5:o,void 0===r){if("number"!=typeof e)return a._pos;a._pos=[e,t,o]}for(var i=a._getSoundIds(r),p=0;p<i.length;p++){var s=a._soundById(i[p]);if(s){if("number"!=typeof e)return s._pos;s._pos=[e,t,o],s._node&&(s._panner&&!s._panner.pan||n(s,"spatial"),s._panner.setPosition(e,t,o)),a._emit("pos",s._id)}}return a},Howl.prototype.orientation=function(e,t,o,r){var a=this;if(!a._webAudio)return a;if("loaded"!==a._state)return a._queue.push({event:"orientation",action:function(){a.orientation(e,t,o,r)}}),a;if(t="number"!=typeof t?a._orientation[1]:t,o="number"!=typeof o?a._orientation[2]:o,void 0===r){if("number"!=typeof e)return a._orientation;a._orientation=[e,t,o]}for(var i=a._getSoundIds(r),p=0;p<i.length;p++){var s=a._soundById(i[p]);if(s){if("number"!=typeof e)return s._orientation;s._orientation=[e,t,o],s._node&&(s._panner||(s._pos||(s._pos=a._pos||[0,0,-.5]),n(s,"spatial")),s._panner.setOrientation(e,t,o)),a._emit("orientation",s._id)}}return a},Howl.prototype.pannerAttr=function(){var e,t,o,r=this,a=arguments;if(!r._webAudio)return r;if(0===a.length)return r._pannerAttr;if(1===a.length){if("object"!=typeof a[0])return o=r._soundById(parseInt(a[0],10)),o?o._pannerAttr:r._pannerAttr;e=a[0],void 0===t&&(e.pannerAttr||(e.pannerAttr={coneInnerAngle:e.coneInnerAngle,coneOuterAngle:e.coneOuterAngle,coneOuterGain:e.coneOuterGain,distanceModel:e.distanceModel,maxDistance:e.maxDistance,refDistance:e.refDistance,rolloffFactor:e.rolloffFactor,panningModel:e.panningModel}),r._pannerAttr={coneInnerAngle:void 0!==e.pannerAttr.coneInnerAngle?e.pannerAttr.coneInnerAngle:r._coneInnerAngle,coneOuterAngle:void 0!==e.pannerAttr.coneOuterAngle?e.pannerAttr.coneOuterAngle:r._coneOuterAngle,coneOuterGain:void 0!==e.pannerAttr.coneOuterGain?e.pannerAttr.coneOuterGain:r._coneOuterGain,distanceModel:void 0!==e.pannerAttr.distanceModel?e.pannerAttr.distanceModel:r._distanceModel,maxDistance:void 0!==e.pannerAttr.maxDistance?e.pannerAttr.maxDistance:r._maxDistance,refDistance:void 0!==e.pannerAttr.refDistance?e.pannerAttr.refDistance:r._refDistance,rolloffFactor:void 0!==e.pannerAttr.rolloffFactor?e.pannerAttr.rolloffFactor:r._rolloffFactor,panningModel:void 0!==e.pannerAttr.panningModel?e.pannerAttr.panningModel:r._panningModel})}else 2===a.length&&(e=a[0],t=parseInt(a[1],10));for(var i=r._getSoundIds(t),p=0;p<i.length;p++)if(o=r._soundById(i[p])){var s=o._pannerAttr;s={coneInnerAngle:void 0!==e.coneInnerAngle?e.coneInnerAngle:s.coneInnerAngle,coneOuterAngle:void 0!==e.coneOuterAngle?e.coneOuterAngle:s.coneOuterAngle,coneOuterGain:void 0!==e.coneOuterGain?e.coneOuterGain:s.coneOuterGain,distanceModel:void 0!==e.distanceModel?e.distanceModel:s.distanceModel,maxDistance:void 0!==e.maxDistance?e.maxDistance:s.maxDistance,refDistance:void 0!==e.refDistance?e.refDistance:s.refDistance,rolloffFactor:void 0!==e.rolloffFactor?e.rolloffFactor:s.rolloffFactor,panningModel:void 0!==e.panningModel?e.panningModel:s.panningModel};var l=o._panner;l?(l.coneInnerAngle=s.coneInnerAngle,l.coneOuterAngle=s.coneOuterAngle,l.coneOuterGain=s.coneOuterGain,l.distanceModel=s.distanceModel,l.maxDistance=s.maxDistance,l.refDistance=s.refDistance,l.rolloffFactor=s.rolloffFactor,l.panningModel=s.panningModel):(o._pos||(o._pos=r._pos||[0,0,-.5]),n(o,"spatial"))}return r},Sound.prototype.init=function(n){return function(){var e=this,t=e._parent;e._orientation=t._orientation,e._stereo=t._stereo,e._pos=t._pos,e._pannerAttr=t._pannerAttr,n.call(this),e._stereo?t.stereo(e._stereo):e._pos&&t.pos(e._pos[0],e._pos[1],e._pos[2],e._id)}}(Sound.prototype.init),Sound.prototype.reset=function(n){return function(){var e=this,t=e._parent;return e._orientation=t._orientation,e._pos=t._pos,e._pannerAttr=t._pannerAttr,n.call(this)}}(Sound.prototype.reset);var n=function(n,e){e=e||"spatial","spatial"===e?(n._panner=Howler.ctx.createPanner(),n._panner.coneInnerAngle=n._pannerAttr.coneInnerAngle,n._panner.coneOuterAngle=n._pannerAttr.coneOuterAngle,n._panner.coneOuterGain=n._pannerAttr.coneOuterGain,n._panner.distanceModel=n._pannerAttr.distanceModel,n._panner.maxDistance=n._pannerAttr.maxDistance,n._panner.refDistance=n._pannerAttr.refDistance,n._panner.rolloffFactor=n._pannerAttr.rolloffFactor,n._panner.panningModel=n._pannerAttr.panningModel,n._panner.setPosition(n._pos[0],n._pos[1],n._pos[2]),n._panner.setOrientation(n._orientation[0],n._orientation[1],n._orientation[2])):(n._panner=Howler.ctx.createStereoPanner(),n._panner.pan.value=n._stereo),n._panner.connect(n._node),n._paused||n._parent.pause(n._id,!0).play(n._id)}}();
/*!
 * JavaScript Cookie v2.1.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		var _OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = _OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				return (document.cookie = [
					key, '=', value,
					attributes.expires && '; expires=' + attributes.expires.toUTCString(), // use expires attribute, max-age is not supported by IE
					attributes.path    && '; path=' + attributes.path,
					attributes.domain  && '; domain=' + attributes.domain,
					attributes.secure ? '; secure' : ''
				].join(''));
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var name = parts[0].replace(rdecode, decodeURIComponent);
				var cookie = parts.slice(1).join('=');

				if (cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.get = api.set = api;
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));

!function(n){"use strict";function t(n,t){var r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function r(n,t){return n<<t|n>>>32-t}function e(n,e,o,u,c,f){return t(r(t(t(e,n),t(u,f)),c),o)}function o(n,t,r,o,u,c,f){return e(t&r|~t&o,n,t,u,c,f)}function u(n,t,r,o,u,c,f){return e(t&o|r&~o,n,t,u,c,f)}function c(n,t,r,o,u,c,f){return e(t^r^o,n,t,u,c,f)}function f(n,t,r,o,u,c,f){return e(r^(t|~o),n,t,u,c,f)}function i(n,r){n[r>>5]|=128<<r%32,n[14+(r+64>>>9<<4)]=r;var e,i,a,d,h,l=1732584193,g=-271733879,v=-1732584194,m=271733878;for(e=0;e<n.length;e+=16)i=l,a=g,d=v,h=m,g=f(g=f(g=f(g=f(g=c(g=c(g=c(g=c(g=u(g=u(g=u(g=u(g=o(g=o(g=o(g=o(g,v=o(v,m=o(m,l=o(l,g,v,m,n[e],7,-680876936),g,v,n[e+1],12,-389564586),l,g,n[e+2],17,606105819),m,l,n[e+3],22,-1044525330),v=o(v,m=o(m,l=o(l,g,v,m,n[e+4],7,-176418897),g,v,n[e+5],12,1200080426),l,g,n[e+6],17,-1473231341),m,l,n[e+7],22,-45705983),v=o(v,m=o(m,l=o(l,g,v,m,n[e+8],7,1770035416),g,v,n[e+9],12,-1958414417),l,g,n[e+10],17,-42063),m,l,n[e+11],22,-1990404162),v=o(v,m=o(m,l=o(l,g,v,m,n[e+12],7,1804603682),g,v,n[e+13],12,-40341101),l,g,n[e+14],17,-1502002290),m,l,n[e+15],22,1236535329),v=u(v,m=u(m,l=u(l,g,v,m,n[e+1],5,-165796510),g,v,n[e+6],9,-1069501632),l,g,n[e+11],14,643717713),m,l,n[e],20,-373897302),v=u(v,m=u(m,l=u(l,g,v,m,n[e+5],5,-701558691),g,v,n[e+10],9,38016083),l,g,n[e+15],14,-660478335),m,l,n[e+4],20,-405537848),v=u(v,m=u(m,l=u(l,g,v,m,n[e+9],5,568446438),g,v,n[e+14],9,-1019803690),l,g,n[e+3],14,-187363961),m,l,n[e+8],20,1163531501),v=u(v,m=u(m,l=u(l,g,v,m,n[e+13],5,-1444681467),g,v,n[e+2],9,-51403784),l,g,n[e+7],14,1735328473),m,l,n[e+12],20,-1926607734),v=c(v,m=c(m,l=c(l,g,v,m,n[e+5],4,-378558),g,v,n[e+8],11,-2022574463),l,g,n[e+11],16,1839030562),m,l,n[e+14],23,-35309556),v=c(v,m=c(m,l=c(l,g,v,m,n[e+1],4,-1530992060),g,v,n[e+4],11,1272893353),l,g,n[e+7],16,-155497632),m,l,n[e+10],23,-1094730640),v=c(v,m=c(m,l=c(l,g,v,m,n[e+13],4,681279174),g,v,n[e],11,-358537222),l,g,n[e+3],16,-722521979),m,l,n[e+6],23,76029189),v=c(v,m=c(m,l=c(l,g,v,m,n[e+9],4,-640364487),g,v,n[e+12],11,-421815835),l,g,n[e+15],16,530742520),m,l,n[e+2],23,-995338651),v=f(v,m=f(m,l=f(l,g,v,m,n[e],6,-198630844),g,v,n[e+7],10,1126891415),l,g,n[e+14],15,-1416354905),m,l,n[e+5],21,-57434055),v=f(v,m=f(m,l=f(l,g,v,m,n[e+12],6,1700485571),g,v,n[e+3],10,-1894986606),l,g,n[e+10],15,-1051523),m,l,n[e+1],21,-2054922799),v=f(v,m=f(m,l=f(l,g,v,m,n[e+8],6,1873313359),g,v,n[e+15],10,-30611744),l,g,n[e+6],15,-1560198380),m,l,n[e+13],21,1309151649),v=f(v,m=f(m,l=f(l,g,v,m,n[e+4],6,-145523070),g,v,n[e+11],10,-1120210379),l,g,n[e+2],15,718787259),m,l,n[e+9],21,-343485551),l=t(l,i),g=t(g,a),v=t(v,d),m=t(m,h);return[l,g,v,m]}function a(n){var t,r="",e=32*n.length;for(t=0;t<e;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);return r}function d(n){var t,r=[];for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;var e=8*n.length;for(t=0;t<e;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;return r}function h(n){return a(i(d(n),8*n.length))}function l(n,t){var r,e,o=d(n),u=[],c=[];for(u[15]=c[15]=void 0,o.length>16&&(o=i(o,8*n.length)),r=0;r<16;r+=1)u[r]=909522486^o[r],c[r]=1549556828^o[r];return e=i(u.concat(d(t)),512+8*t.length),a(i(c.concat(e),640))}function g(n){var t,r,e="";for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),e+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t);return e}function v(n){return unescape(encodeURIComponent(n))}function m(n){return h(v(n))}function p(n){return g(m(n))}function s(n,t){return l(v(n),v(t))}function C(n,t){return g(s(n,t))}function A(n,t,r){return t?r?s(t,n):C(t,n):r?m(n):p(n)}"function"==typeof define&&define.amd?define(function(){return A}):"object"==typeof module&&module.exports?module.exports=A:n.md5=A}(this);
//# sourceMappingURL=md5.min.js.map
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){function b(a){return void 0!==a&&null!==a}a(document).ready(function(){a("body").append("<div id=snackbar-container/>")});var c={events:{},on:function(a,b){this.events[a]=this.events[a]||[],this.events[a].push(b)},off:function(a){this.events[a]&&delete this.events[a]},emit:function(a,b){this.events[a]&&this.events[a].forEach(function(a){a(b)})}};a(document).on("click","[data-toggle=snackbar]",function(){a(this).snackbar("toggle")}).on("click","#snackbar-container .snackbar",function(){a(this).snackbar("hide")}),a.snackbar=function(d){if(b(d)&&d===Object(d)){var e,f=!1;d=Object.assign({},a.snackbar.defaults,d),b(d.id)?a("#"+d.id).length?e=a("#"+d.id):(e=a("<div/>").attr("id",""+d.id).attr("class","snackbar"),f=!0):(d.id="snackbar"+Date.now(),e=a("<div/>").attr("id",d.id).attr("class","snackbar"),f=!0);var g=e.hasClass("snackbar-opened");b(d.style)?(g?e.attr("class","snackbar snackbar-opened "+d.style):e.attr("class","snackbar "+d.style),e.attr("data-style",d.style)):g?e.attr("class","snackbar snackbar-opened"):e.attr("class","snackbar"),d.htmlAllowed=!!b(d.htmlAllowed)&&d.htmlAllowed,d.timeout=b(d.timeout)?d.timeout:3e3,e.attr("data-timeout",d.timeout),d.content=d.htmlAllowed?d.content:a("<p>"+d.content+"</p>").text(),b(d.onClose)&&c.on(d.id,d.onClose),b(d.htmlAllowed)&&e.attr("data-html-allowed",d.htmlAllowed),b(d.content)&&(e.find(".snackbar-content").length?e.find(".snackbar-content").html(d.content):e.prepend("<span class=snackbar-content>"+d.content+"</span>"),e.attr("data-content",d.content)),f?e.appendTo("#snackbar-container"):e.insertAfter("#snackbar-container .snackbar:last-child"),b(d.action)&&"toggle"==d.action&&(d.action=g?"hide":"show");var h=Date.now();e.data("animationId1",h),setTimeout(function(){e.data("animationId1")===h&&(b(d.action)&&"show"!=d.action?b(d.action)&&"hide"==d.action&&(e.removeClass("snackbar-opened"),c.emit(d.id),c.off(d.id)):e.addClass("snackbar-opened"))},50);var i=Date.now();return e.data("animationId2",i),0!==d.timeout&&setTimeout(function(){e.data("animationId2")===i&&(e.removeClass("snackbar-opened"),c.emit(d.id),c.off(d.id))},d.timeout),e}return!1},a.snackbar.defaults={},a.fn.snackbar=function(c){if(void 0!==c){var d={};if(this.hasClass("snackbar"))return d={id:this.attr("id"),content:a(this).attr("data-content"),style:a(this).attr("data-style"),timeout:parseInt(a(this).attr("data-timeout")),htmlAllowed:a(this).attr("data-html-allowed")},"show"!==c&&"hide"!==c&&"toggle"!=c||(d.action=c),a.snackbar(d);b(c)&&"show"!==c&&"hide"!==c&&"toggle"!=c||(d={content:a(this).attr("data-content"),style:a(this).attr("data-style"),timeout:a(this).attr("data-timeout"),htmlAllowed:a(this).attr("data-html-allowed")}),b(c)&&(d.id=this.attr("data-snackbar-id"),"show"!==c&&"hide"!==c&&"toggle"!=c||(d.action=c));var e=a.snackbar(d);return this.attr("data-snackbar-id",e.attr("id")),e}}});
//# sourceMappingURL=snackbar.min.js.map
var SignalingToken = (function () {
    var exports = {};

    exports.get = function(appid, appcertificate, account, validDays){
        var expiredTime = parseInt(new Date().getTime() / 1000)+ 3600* 24 *  validDays;
        var token_items = [];

        //append SDK VERSION
        token_items.push("1");

        //append appid
        token_items.push(appid);

        //expired time
        token_items.push(expiredTime);

        //md5 account + appid + appcertificate + expiredtime
        token_items.push(md5(account + appid + appcertificate + expiredTime));

        return token_items.join(":");
    }

    //convenience function to get token valid within 1 day
    exports.get1DayToken = function(appid, appcertificate, account){
        return this.get(appid, appcertificate, account, 1);
    }

    return exports;
}());