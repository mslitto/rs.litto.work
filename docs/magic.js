function e(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r,i;r=e,i=n[t],t in r?Object.defineProperty(r,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[t]=i})}return e}function t(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}function n(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(()=>{let{h:r,app:i}=(()=>{var e={},t=[],n=t.map,r=Array.isArray,i="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout,o=function(e){var t="";if("string"==typeof e)return e;if(r(e)&&e.length>0)for(var n,i=0;i<e.length;i++)""!==(n=o(e[i]))&&(t+=(t&&" ")+n);else for(var i in e)e[i]&&(t+=(t&&" ")+i);return t},a=function(e,t){var n={};for(var r in e)n[r]=e[r];for(var r in t)n[r]=t[r];return n},l=function(e){return e.reduce(function(e,t){return e.concat(t&&!0!==t?"function"==typeof t[0]?[t]:l(t):0)},t)},s=function(e,t){if(e!==t)for(var n in a(e,t)){var i,o;if(e[n]!==t[n]&&(i=e[n],o=t[n],!(r(i)&&r(o))||i[0]!==o[0]||"function"!=typeof i[0]))return!0;t[n]=e[n]}},c=function(e,t,n){for(var r,i,o=0,a=[];o<e.length||o<t.length;o++)r=e[o],a.push((i=t[o])?!r||i[0]!==r[0]||s(i[1],r[1])?[i[0],i[1],i[0](n,i[1]),r&&r[2]()]:r:r&&r[2]());return a},u=function(e,t,n,r,i,l){if("key"===t);else if("style"===t)for(var s in a(n,r))n=null==r||null==r[s]?"":r[s],"-"===s[0]?e[t].setProperty(s,n):e[t][s]=n;else"o"===t[0]&&"n"===t[1]?((e.actions||(e.actions={}))[t=t.slice(2)]=r)?n||e.addEventListener(t,i):e.removeEventListener(t,i):!l&&"list"!==t&&t in e?e[t]=null==r?"":r:null!=r&&!1!==r&&("class"!==t||(r=o(r)))?e.setAttribute(t,r):e.removeAttribute(t)},p=function(e,t,n){var r=e.props,i=3===e.type?document.createTextNode(e.name):(n=n||"svg"===e.name)?document.createElementNS("http://www.w3.org/2000/svg",e.name,{is:r.is}):document.createElement(e.name,{is:r.is});for(var o in r)u(i,o,null,r[o],t,n);for(var a=0,l=e.children.length;a<l;a++)i.appendChild(p(e.children[a]=g(e.children[a]),t,n));return e.node=i},f=function(e){return null==e?null:e.key},d=function(e,t,n,r,i,o){if(n===r);else if(null!=n&&3===n.type&&3===r.type)n.name!==r.name&&(t.nodeValue=r.name);else if(null==n||n.name!==r.name)t=e.insertBefore(p(r=g(r),i,o),t),null!=n&&e.removeChild(n.node);else{var l,s,c,m,h=n.props,y=r.props,b=n.children,v=r.children,w=0,O=0,S=b.length-1,E=v.length-1;for(var j in o=o||"svg"===r.name,a(h,y))("value"===j||"selected"===j||"checked"===j?t[j]:h[j])!==y[j]&&u(t,j,h[j],y[j],i,o);for(;O<=E&&w<=S&&null!=(c=f(b[w]))&&c===f(v[O]);)d(t,b[w].node,b[w],v[O]=g(v[O++],b[w++]),i,o);for(;O<=E&&w<=S&&null!=(c=f(b[S]))&&c===f(v[E]);)d(t,b[S].node,b[S],v[E]=g(v[E--],b[S--]),i,o);if(w>S)for(;O<=E;)t.insertBefore(p(v[O]=g(v[O++]),i,o),(s=b[w])&&s.node);else if(O>E)for(;w<=S;)t.removeChild(b[w++].node);else{for(var j=w,k={},L={};j<=S;j++)null!=(c=b[j].key)&&(k[c]=b[j]);for(;O<=E;){if(c=f(s=b[w]),m=f(v[O]=g(v[O],s)),L[c]||null!=m&&m===f(b[w+1])){null==c&&t.removeChild(s.node),w++;continue}null==m||1===n.type?(null==c&&(d(t,s&&s.node,s,v[O],i,o),O++),w++):(c===m?(d(t,s.node,s,v[O],i,o),L[m]=!0,w++):null!=(l=k[m])?(d(t,t.insertBefore(l.node,s&&s.node),l,v[O],i,o),L[m]=!0):d(t,s&&s.node,null,v[O],i,o),O++)}for(;w<=S;)null==f(s=b[w++])&&t.removeChild(s.node);for(var j in k)null==L[j]&&t.removeChild(k[j].node)}}return r.node=t},m=function(e,t){for(var n in e)if(e[n]!==t[n])return!0;for(var n in t)if(e[n]!==t[n])return!0},h=function(e){return"object"==typeof e?e:b(e)},g=function(e,t){return 2===e.type?((!t||!t.lazy||m(t.lazy,e.lazy))&&((t=h(e.lazy.view(e.lazy))).lazy=e.lazy),t):e},y=function(e,t,n,r,i,o){return{name:e,props:t,children:n,node:r,type:o,key:i}},b=function(n,r){return y(n,e,t,r,void 0,3)},v=function(t){return 3===t.nodeType?b(t.nodeValue,t):y(t.nodeName.toLowerCase(),e,n.call(t.childNodes,v),t,void 0,1)};return{h:function(t,n){for(var i,o=[],a=[],l=arguments.length;l-- >2;)o.push(arguments[l]);for(;o.length>0;)if(r(i=o.pop()))for(var l=i.length;l-- >0;)o.push(i[l]);else!1===i||!0===i||null==i||a.push(h(i));return n=n||e,"function"==typeof t?t(n,a):y(t,n,a,void 0,n.key)},app:function(e){var t={},n=!1,o=e.view,a=e.node,s=a&&v(a),u=e.subscriptions,p=[],f=function(e){y(this.actions[e.type],e)},m=function(e){return t!==e&&(t=e,u&&(p=c(p,l([u(t)]),y)),o&&!n&&i(b,n=!0)),t};let{middleware:g=e=>e}=e,y=g((e,n)=>"function"==typeof e?y(e(t,n)):r(e)?"function"==typeof e[0]||r(e[0])?y(e[0],"function"==typeof e[1]?e[1](n):e[1]):(l(e.slice(1)).map(function(e){e&&e[0](y,e[1])},m(e[0])),t):m(e));var b=function(){n=!1,a=d(a.parentNode,a,s,s=h(o(t)),f)};y(e.init)}}})(),o=e=>(t={},n)=>{let i=(e,...t)=>t.some(t=>t===typeof e);if(i(n,"undefined")){if(t.props)return r(e,{},[t]);i(t,"string","number","function")||Array.isArray(t)?(n=t,t={}):i(t.View,"function")&&(n=t.View,t={})}return r(e,t,n)},a=o("a");o("abbr"),o("address"),o("animate"),o("animateMotion"),o("animateTransform"),o("area"),o("article"),o("aside"),o("audio"),o("b"),o("base"),o("bdi"),o("bdo"),o("blockquote"),o("body"),o("br"),o("button"),o("canvas"),o("caption"),o("circle"),o("cite"),o("clipPath"),o("code"),o("col"),o("colgroup"),o("data"),o("datalist"),o("dd"),o("defs"),o("del"),o("desc"),o("description"),o("details"),o("dfn"),o("dialog"),o("discard");let l=o("div");o("dl"),o("dt"),o("ellipse"),o("em"),o("embed"),o("feBlend"),o("feColorMatrix"),o("feComponentTransfer"),o("feComposite"),o("feConvolveMatrix"),o("feDiffuseLighting"),o("feDisplacementMap"),o("feDistantLight"),o("feDropShadow"),o("feFlood"),o("feFuncA"),o("feFuncB"),o("feFuncG"),o("feFuncR"),o("feGaussianBlur"),o("feImage"),o("feMerge"),o("feMergeNode"),o("feMorphology"),o("feOffset"),o("fePointLight"),o("feSpecularLighting"),o("feSpotLight"),o("feTile"),o("feTurbulence"),o("fieldset"),o("figcaption"),o("figure"),o("filter");let s=o("footer");o("foreignObject"),o("form"),o("g"),o("h1"),o("h2"),o("h3"),o("h4"),o("h5"),o("h6"),o("hatch"),o("hatchpath"),o("head");let c=o("header");o("hgroup"),o("hr"),o("html"),o("i"),o("iframe"),o("image");let u=o("img");o("input"),o("ins"),o("kbd"),o("label"),o("legend");let p=o("li");o("line"),o("linearGradient"),o("link");let f=o("main");o("map"),o("mark"),o("marker"),o("mask"),o("mesh"),o("meshgradient"),o("meshpatch"),o("meshrow"),o("meta"),o("metadata"),o("meter"),o("mpath");let d=o("nav");o("noscript"),o("object"),o("ol"),o("optgroup"),o("option"),o("output");let m=o("p");o("param"),o("path"),o("pattern");let h=o("picture");o("polygon"),o("polyline"),o("pre"),o("progress"),o("q"),o("radialGradient"),o("rb"),o("rect"),o("rp"),o("rt"),o("rtc"),o("ruby"),o("s"),o("samp"),o("script"),o("section"),o("select"),o("set"),o("small"),o("solidcolor");let g=o("source"),y=o("span");o("stop"),o("strong"),o("style"),o("sub"),o("summary"),o("sup"),o("svg"),o("symbol"),o("table"),o("tbody"),o("td"),o("template"),o("text"),o("textPath"),o("textarea"),o("tfoot"),o("th"),o("thead"),o("time"),o("title"),o("tr"),o("track"),o("tspan"),o("u");let b=o("ul");o("unknown"),o("use"),o("video"),o("view"),o("wbr");let v=e=>l({class:"Announcement"},[C({name:"/img/branding",height:600,width:1920}),e.list.map(e=>m(e)),l({class:"description"},e.description.map(e=>"string"==typeof e?e:j(e)))]),w=()=>l({class:"Credits"},["made with a few bits of ",j({to:"https://magic.github.io/",target:"_blank",rel:"noopener"},"magic")]),O=(e,t=[])=>s({class:"Footer"},[l({class:"Container"},[w(),t])]),S=(e={},t=[])=>{let{logo:n,menu:r,logotext:i,root:o,theme:a,hash:l,url:s}=e;if(n||r||i)return c({class:"Header"},[(n||i)&&k({root:o,theme:a,logo:n,logotext:i}),r&&L({url:s,hash:l,menu:r}),t])},E=e=>{if("string"==typeof e&&(e={src:e}),e.src)return e.alt||(e.title?e.alt=e.title:(e.role="presentation",e.alt="",e.loading=e.loading||"lazy")),u(e)},j=(e,t)=>{var{to:r,action:i=M.go,text:o}=e,l=n(e,["to","action","text"]);let{href:s,nofollow:c,noreferrer:u}=l,p=n(l,["href","nofollow","noreferrer"]);r=r||s||"",p.href=r,o&&t?o=[o,t]:o||(o=t||r);let f="/"===r[0]||"#"===r[0];return f?p.onclick=[i,D.preventDefault]:(p.target="_blank",p.rel="noopener",c&&(p.rel+=" nofollow"),u&&(p.rel+=" noreferrer")),a(p,o)},k=({logo:e,logotext:t,root:n})=>j({to:n,class:"Logo"},[e&&E(e),t&&y(t)]),L=(n={})=>{let{collapse:r=!0,menu:i,hash:o}=n,{class:a="",url:l}=n;return a.includes("Menu")||(a=`Menu ${a}`.trim()),o&&!l.endsWith(o)&&(l+=`#${o}`),d({className:a},b(i.map(n=>P(t(e({},n),{url:l,collapse:r})))))},P=t=>{let{collapse:r,items:i=[],text:o,url:a}=t,l=n(t,["collapse","items","text","url"]),s={class:{}},{to:c}=l;c===a&&(s.class.active=!0);let u=[],f=!r||a.includes(c);return f&&i.length&&(u=b(i.map(t=>P(e({url:a,collapse:r},t))))),p(s,[c?j(l,o):y(l,o),u])},A=({page:e,state:t},n)=>{let r={id:"Magic",class:t.pageClass};return f(r,l({class:{Wrapper:!0}},[S(t),l({class:"Page",id:"page"},e(t)),O(t),n]))},C=e=>{let{ext:t="jpg",imgClass:n="",width:r,height:i,alt:o="",role:a,lazy:l=!0,avif:s=!0}=e,{name:c}=e,p={};return e.class?(p.class=e.class,p.class.includes("Picture")||(p.class=`Picture ${p.class}`)):p.class="Picture",h(p,[s&&g({type:"image/avif",srcset:`${c}.avif`}),g({type:"image/webp",srcset:`${c}.webp`}),u({class:n,width:r,height:i,loading:l&&"lazy",alt:o,role:a||!o&&"presentation",src:`${c}.${t}`})])},D={preventDefault:e=>(e.preventDefault(),e)},M={go:(n,r)=>{let i=r.currentTarget.href.replace(window.location.origin,""),[o,a=""]=i.split("#");if(o===n.url&&a===n.hash)return a&&(window.location.hash=a),n;let l=n.pages&&n.pages[o]&&n.pages[o].title;l&&(document.title=n.title=l),o!==n.url?a||window.scrollTo({top:0}):window.location.hash=a;let{scrollY:s}=window;return window.history.pushState({url:o,hash:a,scrollY:s},n.title,i),t(e({},n),{url:o,hash:a,prev:n.url})},nospy:{toggle:t=>(t.nospy.show=!t.nospy.show,e({},t))},pop:(n,r)=>{let{pathname:i,hash:o}=window.location;o=o.substring(1);let a=0;return r.state&&(i=r.state.url,o=r.state.hash,a=r.state.scrollY||0),o?window.location.hash=o:window.scroll({top:a}),t(e({},n),{url:i,hash:o})}},N={listenPopState:(e,t)=>{let n=n=>e(t,n);return addEventListener("popstate",n),()=>removeEventListener("popstate",n)}},T={"/":e=>(Object.entries(e.artifacts),[C({name:"/img/hero",height:1500,width:2e3}),v(e.announcement)]),"/404/":()=>l("404 - not found.")};i({init:t(e({},{announcement:{description:["Reterritorialized Spaces is a hybrid performance in public space ","entailing one performer projecting real space into virtual space ","by scanning with a LIDAR scanner through a mirror. ","The mirror breaks the geometric and perspective properties of space, ","resulting in experimental forms of spatial perception. ","In addition, the movement of the performer and the interaction ","with the audience influence the course of the performance. ","A virtual monument accessible with augmented reality on the ",{text:"artificialmuseum.com",to:"https://artificialmuseum.com/"}," will remain."],list:["Augmented Reality Installation","@Medienwerkstatt","Neubaugasse 40a, 1070 Vienna","17.06. - 30.06. / 5pm - 8pm","Opening: 16.06. / 7pm"]},artifacts:{2021:[{date:"2021-08-27",lat:47.5651,lng:7.6011,title:"MESSEHALLE, Basel"},{date:"2021-08-27",lat:47.5779,lng:7.5858,title:"LANDESSTELLE, Basel"},{date:"2021-08-03",lat:48.2181,lng:16.333,title:"SANDKASTEN, Vienna"}],2022:[{date:"2022-07-25",lat:46.6278,lng:10.7662,title:"SCHLANDERS, South Tirol"},{date:"2022-07-25",lat:48.2362,lng:16.3205,title:"SEMMELWEISKLINIK, Vienna"},{date:"2022-07-25",lat:47.6847,lng:13.093,title:"SCHMIEDE HALLEIN, Salzburg"},{date:"2022-07-25",lat:51.1135,lng:13.753,title:"HELLERAU, Dresden"}]},description:"Augmented Reality Installation @Medienwerkstatt, Neubaugasse 40A, 1070 Vienna. Opening: 16.06. 7pm",nospy:{show:!1},pageClass:{},pages:{"/404/":{description:"404 - not found.",title:"404 - not found"}},root:"/",title:"Reterritorialized Spaces",url:"/"}),{url:window.location.pathname,hash:window.location.hash.substr(1)}),subscriptions:e=>[[N.listenPopState,M.pop]],view:e=>{let t=T[e.url]?e.url:"/404/",n=T[t],r=e.pages&&e.pages[t];return r&&Object.keys(r).forEach(t=>{e[t]=r[t]}),e.url=t,A({page:n,state:e})},node:document.getElementById("Magic")})})();