"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1919],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,g=d["".concat(c,".").concat(f)]||d[f]||p[f]||r;return n?o.createElement(g,i(i({ref:t},s),{},{components:n})):o.createElement(g,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7301:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var o=n(3117),a=n(102),r=(n(7294),n(3905)),i=["components"],l={},c="Google Identity Platform",u={unversionedId:"authenticate/oauth/backend-oauth2-0002-google",id:"authenticate/oauth/backend-oauth2-0002-google",title:"Google Identity Platform",description:"References:",source:"@site/docs/authenticate/oauth/81-backend-oauth2-0002-google.md",sourceDirName:"authenticate/oauth",slug:"/authenticate/oauth/backend-oauth2-0002-google",permalink:"/docs/authenticate/oauth/backend-oauth2-0002-google",editUrl:"https://github.com/authp/authp.github.io/edit/main/docs/authenticate/oauth/81-backend-oauth2-0002-google.md",tags:[],version:"current",sidebarPosition:81,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Okta",permalink:"/docs/authenticate/oauth/backend-oauth2-0001-okta"},next:{title:"LinkedIn",permalink:"/docs/authenticate/oauth/backend-oauth2-0003-linkedin"}},s={},p=[],d={toc:p};function f(e){var t=e.components,l=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"google-identity-platform"},"Google Identity Platform"),(0,r.kt)("p",null,"References:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/identity/protocols/oauth2/web-server#httprest_2"},"Google Identity Platform - Using OAuth 2.0 for Web Server Applications")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/identity/protocols/oauth2/openid-connect"},"Google Identity Platform - Identity Platform - OpenID Connect"))),(0,r.kt)("p",null,"The Caddyfile snippet for Google OAuth 2.0 OpenID identity provider is as follows."),(0,r.kt)("p",null,"The following ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/greenpau/caddy-auth-docs/blob/main/assets/conf/oauth/google/Caddyfile"},(0,r.kt)("inlineCode",{parentName:"a"},"Caddyfile")),"\nallows Google-based authentication."),(0,r.kt)("p",null,'First, create new application, e.g. "My Gatekeeper".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Google Identity Platform - Identity Platform - New Application",src:n(3519).Z,width:"853",height:"469"})),(0,r.kt)("p",null,"After the creation of the app, you will land on Credentials page."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Google Identity Platform - Identity Platform - Credentials",src:n(3227).Z,width:"1142",height:"605"})),(0,r.kt)("p",null,'Click "Configure Consent Screen" and select an appropriate option, e.g. "External".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Google Identity Platform - Identity Platform - Consent Screen",src:n(7941).Z,width:"940",height:"512"})),(0,r.kt)("p",null,'Next, provide the name for the application, e.g. "My Gatekeeper" and select appropriate support email.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Google Identity Platform - Identity Platform - Consent Screen Configuration",src:n(158).Z,width:"842",height:"874"})),(0,r.kt)("p",null,"After configuring the consent screen you will see the following."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Google Identity Platform - Identity Platform - Consent Screen Verification",src:n(6994).Z,width:"966",height:"688"})),(0,r.kt)("p",null,'Next, browse to "Credentials" and click "Create Credentials". Then, choose "OAuth client ID":'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Google Identity Platform - Identity Platform - New Credentials",src:n(1148).Z,width:"933",height:"435"})),(0,r.kt)("p",null,"First, choose the type of credentials:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Google Identity Platform - Identity Platform - Consent Screen",src:n(8642).Z,width:"921",height:"515"})),(0,r.kt)("p",null,"Next, provide Redirect URL:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Google Identity Platform - Identity Platform - Consent Screen",src:n(8427).Z,width:"608",height:"628"})),(0,r.kt)("p",null,"Login redirect URIs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"https://localhost:8443/auth/oauth2/google/authorization-code-callback"))),(0,r.kt)("p",null,"Finally, you will get a confirmation. Store the Client ID and Client Secret securely."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Google Identity Platform - Identity Platform - Consent Screen",src:n(5513).Z,width:"550",height:"472"})))}f.isMDXComponent=!0},7941:function(e,t,n){t.Z=n.p+"assets/images/oauth2_google_consent_screen-801b27c607ceb34484b66233ab16fdad.png"},158:function(e,t,n){t.Z=n.p+"assets/images/oauth2_google_consent_screen_config-63685410c6bdde9b548fcf45dbb2ae05.png"},6994:function(e,t,n){t.Z=n.p+"assets/images/oauth2_google_consent_screen_verification-dcf701a80b369734a8cd45d6cfa890b3.png"},3227:function(e,t,n){t.Z=n.p+"assets/images/oauth2_google_credentials-eef73706f5a51925283009f33ce59a66.png"},3519:function(e,t,n){t.Z=n.p+"assets/images/oauth2_google_new_app-e2b928454fa79133dfa2f9b21169d78e.png"},1148:function(e,t,n){t.Z=n.p+"assets/images/oauth2_google_new_credentials-454e9c2eb924a8c79f382d2fc9199e69.png"},5513:function(e,t,n){t.Z=n.p+"assets/images/oauth2_google_new_credentials_confirm-9ebf9e67413bcff6a42c5b24ed3d1755.png"},8642:function(e,t,n){t.Z=n.p+"assets/images/oauth2_google_new_credentials_type_choice-c129297e595c24dd5a4b81372ae5bc96.png"},8427:function(e,t,n){t.Z=n.p+"assets/images/oauth2_google_new_credentials_uri_choice-99c19633ee0d637132620978b764013a.png"}}]);