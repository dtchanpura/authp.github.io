"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2269],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9380:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:11},u="HTTP Headers",l={unversionedId:"authorize/headers",id:"authorize/headers",title:"HTTP Headers",description:"Pass JWT Token Claims in HTTP Request Headers",source:"@site/docs/authorize/headers.md",sourceDirName:"authorize",slug:"/authorize/headers",permalink:"/docs/authorize/headers",editUrl:"https://github.com/authp/authp.github.io/edit/main/docs/authorize/headers.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Path-Based Access Lists",permalink:"/docs/authorize/path-acl"},next:{title:"Caddy User Identity",permalink:"/docs/authorize/identity"}},c={},p=[{value:"Pass JWT Token Claims in HTTP Request Headers",id:"pass-jwt-token-claims-in-http-request-headers",level:2},{value:"Auto-Defined Headers",id:"auto-defined-headers",level:3},{value:"Custom Headers",id:"custom-headers",level:3},{value:"Strip JWT Token from HTTP Request",id:"strip-jwt-token-from-http-request",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"http-headers"},"HTTP Headers"),(0,a.kt)("h2",{id:"pass-jwt-token-claims-in-http-request-headers"},"Pass JWT Token Claims in HTTP Request Headers"),(0,a.kt)("h3",{id:"auto-defined-headers"},"Auto-Defined Headers"),(0,a.kt)("p",null,"To pass JWT token claims in auto-generated HTTP headers to downstream\nplugins, use the following Caddyfile directive:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{\n  security {\n    authorization policy mypolicy {\n      inject headers with claims\n    }\n  }\n}\n")),(0,a.kt)("p",null,"The downstream plugins would get the following ",(0,a.kt)("inlineCode",{parentName:"p"},"X-Token-")," headers:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    "X-Token-Subject": "webadmin"\n    "X-Token-User-Name": "Web Administrator"\n    "X-Token-User-Email": "webadmin@localdomain.local"\n    "X-Token-User-Roles": "superadmin guest anonymous"\n')),(0,a.kt)("h3",{id:"custom-headers"},"Custom Headers"),(0,a.kt)("p",null,"The syntax for adding a custom header follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"inject header <header_name> from <field_name>\n")),(0,a.kt)("p",null,"For example, add the injection of ",(0,a.kt)("inlineCode",{parentName:"p"},"X-Picture")," header with the value from ",(0,a.kt)("inlineCode",{parentName:"p"},"picture")," field\nof JWT token:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  security {\n    authorization policy mypolicy {\n      inject headers with claims\n      inject header "X-Picture" from picture\n    }\n  }\n}\n')),(0,a.kt)("p",null,"After the addition, we could see the ",(0,a.kt)("inlineCode",{parentName:"p"},"X-Picture")," header, as well as the other\nheaders injected by ",(0,a.kt)("inlineCode",{parentName:"p"},"inject headers with claims"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "X-Picture": "https://avatars.githubusercontent.com/u/3826416?v=4",\n  "X-Token-Subject": "github.com/greenpau",\n  "X-Token-User-Name": "Paul Greenberg",\n  "X-Token-User-Roles": "authp/guest"\n}\n')),(0,a.kt)("h2",{id:"strip-jwt-token-from-http-request"},"Strip JWT Token from HTTP Request"),(0,a.kt)("p",null,"The following directive instructs the plugin to remove the found\ntoken from a request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{\n  security {\n    authorization policy mypolicy {\n      enable strip token\n    }\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": Currently, this feature works with cookies only. It will\nnot strip a token from an authorization header."))}m.isMDXComponent=!0}}]);