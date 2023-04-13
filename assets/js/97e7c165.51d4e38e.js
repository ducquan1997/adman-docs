"use strict";(self.webpackChunkadman_docs=self.webpackChunkadman_docs||[]).push([[5550],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=s(n),u=i,f=p["".concat(l,".").concat(u)]||p[u]||d[u]||a;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(7294),i=n(6010),a=n(3438),o=n(9960),c=n(3919),l=n(5999);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:n}=e;return r.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",s.cardContainer)},n)}function p(e){let{href:t,icon:n,title:a,description:o}=e;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",s.cardTitle),title:a},n," ",a),o&&r.createElement("p",{className:(0,i.Z)("text--truncate",s.cardDescription),title:o},o))}function d(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.xz)(t.docId??void 0);return r.createElement(p,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(u,{item:t});case"category":return r.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,a.jA)();return r.createElement(h,{items:n.items,className:t})}function h(e){const{items:t,className:n}=e;if(!t)return r.createElement(g,e);const o=(0,a.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},o.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(f,{item:e})))))}},2330:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=n(7462),i=(n(7294),n(3905)),a=n(2991);const o={sidebar_position:1},c="L\u1eadp tr\xecnh",l={unversionedId:"tutorial-minigame/game-page/code/index",id:"version-1.0.0/tutorial-minigame/game-page/code/index",title:"L\u1eadp tr\xecnh",description:"H\u01b0\u1edbng d\u1eabn c\xe1c code (l\u1ec7nh) hi\u1ec3n th\u1ecb giao di\u1ec7n v\xe0 ch\u1ee9c n\u0103ng c\u01a1 b\u1ea3n.",source:"@site/versioned_docs/version-1.0.0/tutorial-minigame/5-game-page/code/index.md",sourceDirName:"tutorial-minigame/5-game-page/code",slug:"/tutorial-minigame/game-page/code/",permalink:"/docs/1.0.0/tutorial-minigame/game-page/code/",draft:!1,tags:[],version:"1.0.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Thanh h\u1ed7 tr\u1ee3",permalink:"/docs/1.0.0/tutorial-minigame/game-page/support-bar"},next:{title:"D\xf9ng template m\u1eabu",permalink:"/docs/1.0.0/tutorial-minigame/game-page/code/template-demo"}},s={},m=[],p={toc:m},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"l\u1eadp-tr\xecnh"},"L\u1eadp tr\xecnh"),(0,i.kt)("p",null,"H\u01b0\u1edbng d\u1eabn c\xe1c code (l\u1ec7nh) hi\u1ec3n th\u1ecb giao di\u1ec7n v\xe0 ch\u1ee9c n\u0103ng c\u01a1 b\u1ea3n."),(0,i.kt)(a.Z,{mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);