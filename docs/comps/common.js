function q(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function r(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:q(a)}}function t(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var u="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,v="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};function w(a,b){if(b){var c=u;a=a.split(".");for(var d=0;d<a.length-1;d++){var h=a[d];h in c||(c[h]={});c=c[h]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&v(c,a,{configurable:!0,writable:!0,value:b})}}
var x="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var h in d)Object.prototype.hasOwnProperty.call(d,h)&&(a[h]=d[h])}return a};w("Object.assign",function(a){return a||x});w("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push([d,b[d]]);return c}});function y(a){function b(c){return c.raw[0].split(/\s+/).map(function(d){var h=a[d];return h?h:(console.error("Key %s is not present in the CSS map.",d),d)}).join(" ")}if(!a)return function(c){return c};Object.keys(a).forEach(function(c){b["$"+c]=a[c]});return b};try{window.preact=preact}catch(a){window.preact={}}var z=window.preact,A=z.h,B=z.Component,C=z.render;function D(a,b){var c=document.getElementById(a);if(!c)return console.warn("Parent element for component %s with id %s not found",b,a),{};var d=c.parentElement;return d?{parent:d,b:c}:(console.warn("Parent of element for component %s with id %s not found",b,a),{})}
function E(){var a=void 0===a?{}:a;var b=Object.assign({},a),c=void 0===a.rootMargin?"76px":a.rootMargin,d=void 0===a.log?!0:a.log;a=(delete b.rootMargin,delete b.log,b);var h=new IntersectionObserver(function(e){e.forEach(function(p){var g=p.target,l=g.render.a,n=l.key,f=l.id,k=l.plain;if(p.isIntersecting){d&&console.warn("\ud83c\udfd7 Rendering%s component %s into the element %s",k?"":" Preact",n,f,g);try{var m=g.render();m&&!m.unrender&&h.unobserve(g)}catch(O){d&&console.warn(O)}}else l.instance&&
(d&&console.warn("\ud83d\udca8 Unrendering%s component %s from the element %s",k?"":" Preact",n,f,g),l.instance.unrender())})},Object.assign({},{rootMargin:c},a));return h}function F(a,b,c,d){this.l=d;this.m=c;this.b=a;this.parent=b;this.unrender=this.c=null}
F.prototype.render=function(a){var b=Object.assign({},a);a=a.children;b=(delete b.children,b);if(this.c)this.c.componentDidMount&&this.c.componentDidMount(),this.c.forceUpdate();else{this.l.render(this.l.h(this.m,b,a),this.parent,this.b);var c=this.b._component;c.componentWillUnmount&&(this.unrender=function(){c.componentWillUnmount()});this.c=c}};
function G(a,b,c,d,h,e,p){function g(){c.render(Object.assign({},e,{children:p}));a.instance=c}var l={render:C,Component:B,h:A},n=a.plain;!c&&n?c=new b(d,h):c||(c=new F(d,h,b,l));b.load?b.load(function(f,k){k&&Object.assign(e,k);f?console.warn(f):g()},d,e):g();return c};function H(a){this.b=a}H.prototype.render=function(a){var b=this,c=new XMLHttpRequest;c.open("GET","https://api.github.com/repos/"+a.i+"/"+a.name);c.onload=function(){var d=JSON.parse(c.responseText);if(200!=c.status)console.log("GitHub responded with status %s: %s (%s)",c.status,d.message,d.w);else{var h=d.stargazers_count;b.b.title=d.description;d=b.b.querySelector("[data-stargazers]");d.textContent=d.textContent.replace(/\d+/,h)}};c.send()};
u.Object.defineProperties(H,{plain:{configurable:!0,enumerable:!0,get:function(){return!0}}});function I(a,b,c,d){var h=void 0===h?{}:h;var e=window.top,p=e.outerHeight,g=e.screenY,l=e.outerWidth,n=e.screenX;e=[];c&&e.push("width="+c,"left="+(l/2+n-c/2));d&&e.push("top="+(p/2+g-d/2-50),"height="+d);c=Object.keys(h).map(function(f){return f+"="+h[f]});e.push.apply(e,c instanceof Array?c:t(r(c)));window.open(a,b,e.join(","))};function J(a){var b=Object.assign({},a),c=void 0===a.size?32:a.size,d=a.url,h=a.o,e=a.title,p=a.borderRadius,g=a.a,l=a.g.f;a=(delete b.size,delete b.url,delete b.o,delete b.title,delete b.borderRadius,delete b.a,delete b.g,b);delete a.g;if(g){g=document.querySelector('meta[name="description"]');if(!g)return A("span",Object.assign({},a),"Error Loading Social Buttons (no meta description)");e=g.content;h||(h=g.content)}return A("span",Object.assign({},a),Object.entries(K).reduce(function(n,f){var k=
r(f);f=k.next().value;var m=k.next().value;k=Object.assign({},m);m=m.color;k=(delete k.color,k);n.push(A(L,Object.assign({},k,{size:c,v:f,color:"rgb("+m+")",f:l,title:e,url:d,o:h,borderRadius:p,s:"email"==f}))," ");return n},[]))}
function L(a){var b=a.size,c=a.href,d=a.v,h=a.color,e=a.alt,p=void 0===a.width?900:a.width,g=void 0===a.height?650:a.height,l=void 0===a.borderRadius?"4px":a.borderRadius,n=a.s,f=void 0===a.f?"/":a.f,k=c(a.url,a.title,a.o);a=A("img",{src:f+"buttons/"+d+".svg",width:b,height:b,alt:e,style:"background:"+h+"; border-radius:"+l});return n?A("a",{href:k},a):A("a",{onClick:function(m){I(k,e,p,g);m.preventDefault();return!1},href:"#"},a)}
function M(a){return Object.entries(a).map(function(b){var c=r(b);b=c.next().value;if(c=c.next().value)return b+"="+c}).filter(Boolean).join("&")}
var K={facebook:{href:function(a,b){return"https://www.facebook.com/sharer/sharer.php?"+M({u:a,quote:b})},color:[59,89,152],alt:"Share on Facebook"},twitter:{href:function(a,b){return"https://twitter.com/intent/tweet?"+M({text:b,url:a})},color:[85,172,238],alt:"Share on Twitter",width:550,height:420},linkedin:{href:function(a,b){return"https://www.linkedin.com/shareArticle?"+M({url:a,mini:!0,title:b})},color:[0,123,181],alt:"Share on LinkedIn"},whatsapp:{href:function(a,b){return"https://api.whatsapp.com/send?"+
M({text:[b,a].filter(Boolean).join(" ")})},color:[18,175,10],alt:"Share on Whatsapp"},email:{href:function(a,b,c){return"mailto:?"+M({subject:c,body:[b,a].filter(Boolean).join(" ")})},color:[1,102,255],alt:"Share on Email"}};

//# sourceMappingURL=common.js.map