"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6394],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return y}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=u(r),y=a,d=f["".concat(s,".").concat(y)]||f[y]||l[y]||i;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2962:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return l}});var n=r(3117),a=r(102),i=(r(7294),r(3905)),o=["components"],p={sidebar_position:13},s="Bypass Authorization for Specific URIs",u={unversionedId:"authorize/bypass",id:"authorize/bypass",title:"Bypass Authorization for Specific URIs",description:"The bypass uri Caddyfile directive allow to bypass authorization for",source:"@site/docs/authorize/bypass.md",sourceDirName:"authorize",slug:"/authorize/bypass",permalink:"/docs/authorize/bypass",editUrl:"https://github.com/authp/authp.github.io/edit/main/docs/authorize/bypass.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Caddy User Identity",permalink:"/docs/authorize/identity"},next:{title:"Basic and API Key Authentication",permalink:"/docs/authorize/basic_api_key_auth"}},c={},l=[],f={toc:l};function y(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bypass-authorization-for-specific-uris"},"Bypass Authorization for Specific URIs"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"bypass uri")," Caddyfile directive allow to bypass authorization for\nspecific URIs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bypass uri <exact|partial|prefix|suffix|regex> <uri_path>\n")),(0,i.kt)("p",null,"For example, the following configuration allows bypassing authorization for\nURI ",(0,i.kt)("inlineCode",{parentName:"p"},"/app/bypassed")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"/app/another/bypass"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  debug\n\n  security {\n    authorization policy defaultPolicy {\n      bypass uri prefix /app/bypassed\n      bypass uri prefix /app/another/bypass\n      acl rule {\n        match role user admin authp/admin authp/user\n        allow stop log debug\n      }\n      acl default deny\n    }\n  }\n}\n\napp.myfiosgateway.com {\n  route {\n    authorize with defaultPolicy\n    respond * "authorized user or accesses bypassed URLs" 200\n  }\n}\n')))}y.isMDXComponent=!0}}]);