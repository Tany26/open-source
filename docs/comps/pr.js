var va={},wa={"akashic-emails":S,"github-badge":V,"social-buttons":W},xa=L();
[{key:"social-buttons",id:"cbb3e",props:{url:"https://art-deco.github.io/open-source/pull-request.html",b:!0,className:"b-xq b-Hk"}},{key:"akashic-emails",id:"emails-div",props:{"api-key":"akashic"}},{key:"github-badge",id:"ce823",props:{i:"art-deco",name:"open-source"}}].forEach(function(a){var b=a.key,c=a.id,d=void 0===a.props?{}:a.props,h=void 0===a.children?[]:a.children,e=wa[b],p=e.plain||/^\s*class\s+/.test(e.toString())&&!I.isPrototypeOf(e);d.g={c:"/open-source/",j:function(g){return F(va[g])}};
c.split(",").forEach(function(g){var l=K(g,b),n=l.parent,f=l.a;if(f){var k={key:b,id:g,plain:p},m;f.render=function(){return m=N(k,e,m,f,n,d,h)};f.render.b=k;xa.observe(f)}})});

//# sourceMappingURL=pr.js.map