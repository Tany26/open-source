function q(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function r(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:q(a)}}function t(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var u="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,v="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};function w(a,b){if(b){var c=u;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&v(c,a,{configurable:!0,writable:!0,value:b})}}
var x="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a};w("Object.assign",function(a){return a||x});w("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push([d,b[d]]);return c}});function y(a){function b(c){return c.raw[0].split(/\s+/).map(function(d){var e=a[d];return e?e:(console.error("Key %s is not present in the CSS map.",d),d)}).join(" ")}if(!a)return function(c){return c};Object.keys(a).forEach(function(c){b["$"+c]=a[c]});return b};try{window.preact=preact}catch(a){window.preact={}}var z=window.preact,A=z.h,B=z.Component,C=z.render;function D(a,b){var c=document.getElementById(a);if(!c)return console.warn("Parent element for component %s with id %s not found",b,a),{};var d=c.parentElement;return d?{parent:d,b:c}:(console.warn("Parent of element for component %s with id %s not found",b,a),{})}function E(a,b,c,d){this.c=d;this.f=c;this.b=a;this.parent=b;this.unrender=this.a=null}
E.prototype.render=function(a){var b=Object.assign({},a);a=a.children;b=(delete b.children,b);if(this.a)this.a.componentDidMount&&this.a.componentDidMount(),this.a.forceUpdate();else{this.c.render(this.c.h(this.f,b,a),this.parent,this.b);var c=this.b._component;c.componentWillUnmount&&(this.unrender=function(){c.componentWillUnmount()});this.a=c}};
function F(a,b,c,d,e,f,n){function g(){c.render(Object.assign({},f,{children:n}));a.instance=c}var l={render:C,Component:B,h:A},m=a.plain;!c&&m?c=new b(d,e):c||(c=new E(d,e,b,l));b.load?b.load(function(h,k){k&&Object.assign(f,k);h?console.warn(h):g()},d,f):g();return c};function G(a){this.b=a}G.prototype.render=function(a){var b=this,c=new XMLHttpRequest;c.open("GET","https://api.github.com/repos/"+a.o+"/"+a.name);c.onload=function(){var d=JSON.parse(c.responseText);if(200!=c.status)console.log("GitHub responded with status %s: %s (%s)",c.status,d.message,d.w);else{var e=d.stargazers_count;b.b.title=d.description;d=b.b.querySelector("[data-stargazers]");d.textContent=d.textContent.replace(/\d+/,e)}};c.send()};
u.Object.defineProperties(G,{plain:{configurable:!0,enumerable:!0,get:function(){return!0}}});function H(a,b){this.loaded=this.a=null;this.f=[a];this.c=[b]}H.prototype.error=function(a){this.a=a;this.c.forEach(function(b){b(a)})};H.prototype.load=function(a){this.loaded=a;this.f.forEach(function(b){b(a)})};function I(a,b){var c=document.createElement("link");c.rel="stylesheet";c.href="https://art-deco.github.io/open-source.artdeco.app/signatures.css";c.onload=a;c.onerror=b;(document.head||document.body).appendChild(c)};function J(a){var b=K(function(c){return a(null,c)},function(c){return a(c)});b&&(L["https://art-deco.github.io/open-source.artdeco.app/signatures.css"]=b)}
function K(a,b){var c=L["https://art-deco.github.io/open-source.artdeco.app/signatures.css"];if("https://art-deco.github.io/open-source.artdeco.app/signatures.css".nocache)I(a,b);else if(c&&c.loaded)a(c.loaded);else if(c&&c.a)b(c.a);else if(c)c.f.push(a),c.c.push(b);else{var d=new H(a,b);I(function(e){d.load(e)},function(e){d.error(e)});return d}}var L={};function M(){}M.load=function(a){J(a)};M.prototype.render=function(){var a=document.createElement("script");a.src="https://art-deco.github.io/open-source.artdeco.app/signature.js";a.onload=function(){document.getElementById("preact-div").innerText="";window.comments({container:"preact-div"})};document.body.appendChild(a);return A("div",{id:"preact-div"})};function N(a,b,c,d){var e=void 0===e?{}:e;var f=window.top,n=f.outerHeight,g=f.screenY,l=f.outerWidth,m=f.screenX;f=[];c&&f.push("width="+c,"left="+(l/2+m-c/2));d&&f.push("top="+(n/2+g-d/2-50),"height="+d);c=Object.keys(e).map(function(h){return h+"="+e[h]});f.push.apply(f,c instanceof Array?c:t(r(c)));window.open(a,b,f.join(","))};function O(a){var b=a.size,c=a.href,d=a.s,e=a.color,f=a.alt,n=void 0===a.width?900:a.width,g=void 0===a.height?650:a.height,l=void 0===a.borderRadius?"4px":a.borderRadius,m=a.m,h=void 0===a.i?"/":a.i,k=c(a.url,a.title,a.l);a=A("img",{src:h+"buttons/"+d+".svg",width:b,height:b,alt:f,style:"background:"+e+"; border-radius:"+l});return m?A("a",{href:k},a):A("a",{onClick:function(p){N(k,f,n,g);p.preventDefault();return!1},href:"#"},a)}
function P(a){return Object.entries(a).map(function(b){var c=r(b);b=c.next().value;if(c=c.next().value)return b+"="+c}).filter(Boolean).join("&")}
var Q={facebook:{href:function(a,b){return"https://www.facebook.com/sharer/sharer.php?"+P({u:a,quote:b})},color:[59,89,152],alt:"Share on Facebook"},twitter:{href:function(a,b){return"https://twitter.com/intent/tweet?"+P({text:b,url:a})},color:[85,172,238],alt:"Share on Twitter",width:550,height:420},linkedin:{href:function(a,b){return"https://www.linkedin.com/shareArticle?"+P({url:a,mini:!0,title:b})},color:[0,123,181],alt:"Share on LinkedIn"},whatsapp:{href:function(a,b){return"https://api.whatsapp.com/send?"+
P({text:[b,a].filter(Boolean).join(" ")})},color:[18,175,10],alt:"Share on Whatsapp"},email:{href:function(a,b,c){return"mailto:?"+P({subject:c,body:[b,a].filter(Boolean).join(" ")})},color:[1,102,255],alt:"Share on Email"}};var R={},S={"github-badge":G,signatures:M,"social-buttons":function(a){var b=Object.assign({},a),c=void 0===a.size?32:a.size,d=a.url,e=a.l,f=a.title,n=a.borderRadius,g=a.g,l=a.j.i;a=(delete b.size,delete b.url,delete b.l,delete b.title,delete b.borderRadius,delete b.g,delete b.j,b);delete a.j;if(g){g=document.querySelector('meta[name="description"]');if(!g)return A("span",Object.assign({},a),"Error Loading Social Buttons (no meta description)");f=g.content;e||(e=g.content)}return A("span",Object.assign({},
a),Object.entries(Q).reduce(function(m,h){var k=r(h);h=k.next().value;var p=k.next().value;k=Object.assign({},p);p=p.color;k=(delete k.color,k);m.push(A(O,Object.assign({},k,{size:c,s:h,color:"rgb("+p+")",i:l,title:f,url:d,l:e,borderRadius:n,m:"email"==h}))," ");return m},[]))}},U=function(a){var b=a=void 0===a?{}:a,c=Object.assign({},b);a=void 0===b.rootMargin?"76px":b.rootMargin;var d=void 0===b.log?!0:b.log;b=(delete c.rootMargin,delete c.log,c);var e=new IntersectionObserver(function(f){f.forEach(function(n){var g=
n.target,l=g.render.g,m=l.key,h=l.id,k=l.plain;if(n.isIntersecting){d&&console.warn("\ud83c\udfd7 Rendering%s component %s into the element %s",k?"":" Preact",m,h,g);try{var p=g.render();p&&!p.unrender&&e.unobserve(g)}catch(T){d&&console.warn(T)}}else l.instance&&(d&&console.warn("\ud83d\udca8 Unrendering%s component %s from the element %s",k?"":" Preact",m,h,g),l.instance.unrender())})},Object.assign({},{rootMargin:a},b));return e}();
[{key:"github-badge",id:"ce823",props:{o:"art-deco",name:"open-source"}},{key:"signatures",id:"preact-div"},{key:"social-buttons",id:"c8771,c87711",props:{url:"https://art-deco.github.io/open-source/letters/open-letter.html",g:!0,className:"b-xq b-Hk"}}].forEach(function(a){var b=a.key,c=a.id,d=void 0===a.props?{}:a.props,e=void 0===a.children?[]:a.children,f=S[b],n=f.plain||/^\s*class\s+/.test(f.toString())&&!B.isPrototypeOf(f);d.j={i:"/open-source/",v:function(g){return y(R[g])}};c.split(",").forEach(function(g){var l=
D(g,b),m=l.parent,h=l.b;if(h){var k={key:b,id:g,plain:n},p;h.render=function(){return p=F(k,f,p,h,m,d,e)};h.render.g=k;U.observe(h)}})});

//# sourceMappingURL=openLetter.js.map