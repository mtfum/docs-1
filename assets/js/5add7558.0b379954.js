"use strict";(self.webpackChunkinterep_docs=self.webpackChunkinterep_docs||[]).push([[616],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(r),m=i,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7925:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var n=r(3117),i=r(102),a=(r(7294),r(3905)),o=["components"],l={},c="Github",u={unversionedId:"technical-reference/reputation/github",id:"technical-reference/reputation/github",title:"Github",description:"Parameters",source:"@site/docs/technical-reference/reputation/github.md",sourceDirName:"technical-reference/reputation",slug:"/technical-reference/reputation/github",permalink:"/technical-reference/reputation/github",editUrl:"https://github.com/interep-project/docs/edit/main/docs/technical-reference/reputation/github.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/technical-reference/reputation/intro"},next:{title:"Reddit",permalink:"/technical-reference/reputation/reddit"}},p={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Levels",id:"levels",level:2},{value:"Gold",id:"gold",level:3},{value:"Silver",id:"silver",level:3},{value:"Bronze",id:"bronze",level:3},{value:"Configuration file: src/criteria/github.ts",id:"configuration-file-srccriteriagithubts",level:4}],f={toc:s};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"github"},"Github"),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Followers"),": number of the user's followers;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Received stars"),": sum of the number of stars received in the user's repositories;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Plan"),": true if the user has subscribed to a pro plan, false otherwise.")),(0,a.kt)("h2",{id:"levels"},"Levels"),(0,a.kt)("h3",{id:"gold"},"Gold"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'[\n    {\n        parameter: "followers",\n        value: {\n            min: 500\n        }\n    },\n    {\n        parameter: "receivedStars",\n        value: {\n            min: 200\n        }\n    }\n]\n')),(0,a.kt)("h3",{id:"silver"},"Silver"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'[\n    {\n        parameter: "followers",\n        value: {\n            min: 100\n        }\n    },\n    {\n        parameter: "receivedStars",\n        value: {\n            min: 80\n        }\n    }\n]\n')),(0,a.kt)("h3",{id:"bronze"},"Bronze"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'[\n    {\n        parameter: "proPlan",\n        value: true\n    },\n    {\n        parameter: "followers",\n        value: {\n            min: 50\n        }\n    },\n    {\n        parameter: "receivedStars",\n        value: {\n            min: 40\n        }\n    }\n]\n')),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"configuration-file-srccriteriagithubts"},"Configuration file: ",(0,a.kt)("a",{parentName:"h4",href:"https://github.com/interep-project/interep.js/blob/main/packages/reputation/src/criteria/github.ts"},"src/criteria/github.ts")))}m.isMDXComponent=!0}}]);