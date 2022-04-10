"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2836],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=r,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9655:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:42},l="User Transforms",c={unversionedId:"authenticate/user-transforms",id:"authenticate/user-transforms",title:"User Transforms",description:"A user transform allows to perform the following one a user passed",source:"@site/docs/authenticate/42-user-transforms.md",sourceDirName:"authenticate",slug:"/authenticate/user-transforms",permalink:"/docs/authenticate/user-transforms",editUrl:"https://github.com/authp/authp.github.io/edit/main/docs/authenticate/42-user-transforms.md",tags:[],version:"current",sidebarPosition:42,frontMatter:{sidebar_position:42},sidebar:"tutorialSidebar",previous:{title:"Authorization Cookie",permalink:"/docs/authenticate/auth-cookie"},next:{title:"Usage Examples",permalink:"/docs/authenticate/usage-examples"}},u={},d=[{value:"Add Roles",id:"add-roles",level:2},{value:"Add UI Links",id:"add-ui-links",level:2},{value:"Force Multi-Factor Authentication",id:"force-multi-factor-authentication",level:2},{value:"Deny Access",id:"deny-access",level:2},{value:"Inject Custom Claims",id:"inject-custom-claims",level:2}],m={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"user-transforms"},"User Transforms"),(0,o.kt)("p",null,"A user transform allows to perform the following one a user passed\nauthentication:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"add/remove user roles"),(0,o.kt)("li",{parentName:"ul"},"add link to UI portal page"),(0,o.kt)("li",{parentName:"ul"},"require multi-factor authentication (MFA/2FA)"),(0,o.kt)("li",{parentName:"ul"},"require accepting term and conditions"),(0,o.kt)("li",{parentName:"ul"},"block/deny access (by not issuing a token)"),(0,o.kt)("li",{parentName:"ul"},"injecting custom, arbitrary claims into a token")),(0,o.kt)("h2",{id:"add-roles"},"Add Roles"),(0,o.kt)("p",null,"The following transform matches ",(0,o.kt)("inlineCode",{parentName:"p"},"sub")," field and grants ",(0,o.kt)("inlineCode",{parentName:"p"},"authp/viewer")," role:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  transform user {\n    exact match sub github.com/greenpau\n    action add role authp/viewer\n  }\n")),(0,o.kt)("p",null,"The following transform adds role ",(0,o.kt)("inlineCode",{parentName:"p"},"verified")," to Facebook-authenticated user\nwith id of ",(0,o.kt)("inlineCode",{parentName:"p"},"123456789"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  transform user {\n    exact match sub 123456789\n    exact match origin facebook\n    action add role verified\n  }\n")),(0,o.kt)("p",null,"The following transform adds the role ",(0,o.kt)("inlineCode",{parentName:"p"},"contoso_users")," to users with an email\naddress from the contoso.com domain:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  transform user {\n    suffix match email @contoso.com\n    add role contoso_users\n  }\n")),(0,o.kt)("h2",{id:"add-ui-links"},"Add UI Links"),(0,o.kt)("p",null,"The following transform, in addition to the above adds a link to a user's\nportal page:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  transform user {\n    exact match sub github.com/greenpau\n    action add role authp/viewer\n    ui link "Caddy Version" /version icon "las la-code-branch"\n  }\n')),(0,o.kt)("h2",{id:"force-multi-factor-authentication"},"Force Multi-Factor Authentication"),(0,o.kt)("p",null,"The following transform requires to pass multi-factor authentication when the\nauthenticated user's email is ",(0,o.kt)("inlineCode",{parentName:"p"},"webadmin@localdomain.local"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  transform user {\n    match email webadmin@localdomain.local\n    require mfa\n  }\n")),(0,o.kt)("h2",{id:"deny-access"},"Deny Access"),(0,o.kt)("p",null,"The following transform blocks a user with email ",(0,o.kt)("inlineCode",{parentName:"p"},"anonymous@badactor.com"),"\nfrom getting authenticated:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  transform user {\n    match email anonymous@badactor.com\n    block\n  }\n")),(0,o.kt)("h2",{id:"inject-custom-claims"},"Inject Custom Claims"),(0,o.kt)("p",null,"The syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"action add <claim_name> <claim_value> as <string|list>\naction add nests [arg1 ... argN] with [arg1 ... argN] as <string|list>\n")),(0,o.kt)("p",null,"Here, if a user is authentication in ",(0,o.kt)("inlineCode",{parentName:"p"},"local")," realm and has email address\nof ",(0,o.kt)("inlineCode",{parentName:"p"},"webadmin@localdomain.local"),", then a number of custom claims will be\nadded to the token issued by the portal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  transform user {\n    match realm local\n    match email webadmin@localdomain.local\n    action add foo bar as string\n    action add nested "acl" "paths" "/*/users/**" as map\n    action add nested "acl" "paths" "/*/conversations/**" as map\n    action add nested "acl" "paths" "/*/sessions/**" as map\n    action add nested "acl" "paths" "/*/devices/**" as map\n    action add nested "metadata" "language" with "english" as string\n    action add nested "metadata" "interests" with "movies" "gaming" as list\n  }\n')),(0,o.kt)("p",null,"The outcome follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "acl": {\n    "paths": {\n      "/*/conversations/**": {},\n      "/*/devices/**": {},\n      "/*/sessions/**": {},\n      "/*/users/**": {}\n    }\n  },\n  "metadata": {\n    "interests": [\n      "movies",\n      "gaming"\n    ],\n    "language": "english"\n  },\n  "foo": "bar"\n}\n')),(0,o.kt)("p",null,"Alternatively, one can add ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"picture")," (avatar) claims:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  transform user {\n    match realm local\n    match email webadmin@localdomain.local\n    action add name "Paul Greenberg"\n    action add picture "https://avatars.githubusercontent.com/u/3826416?v=4" as string\n  }\n')))}p.isMDXComponent=!0}}]);