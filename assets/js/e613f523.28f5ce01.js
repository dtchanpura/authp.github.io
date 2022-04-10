"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3502],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4295:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],l={},s="Password Management",c={unversionedId:"authenticate/local/password-management",id:"authenticate/local/password-management",title:"Password Management",description:"Manually",source:"@site/docs/authenticate/local/30-password-management.md",sourceDirName:"authenticate/local",slug:"/authenticate/local/password-management",permalink:"/docs/authenticate/local/password-management",editUrl:"https://github.com/authp/authp.github.io/edit/main/docs/authenticate/local/30-password-management.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Identity Store",permalink:"/docs/authenticate/local/identity-store"},next:{title:"User Registration",permalink:"/docs/authenticate/local/user-registration"}},u={},p=[{value:"Manually",id:"manually",level:2},{value:"Settings Page",id:"settings-page",level:2}],d={toc:p};function m(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"password-management"},"Password Management"),(0,o.kt)("h2",{id:"manually"},"Manually"),(0,o.kt)("p",null,"An administrator may change the password directly in ",(0,o.kt)("inlineCode",{parentName:"p"},"users.json")," file."),(0,o.kt)("p",null,"First, download ",(0,o.kt)("inlineCode",{parentName:"p"},"bcrypt-cli"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go get -u github.com/bitnami/bcrypt-cli\n")),(0,o.kt)("p",null,"Then, use it to generate a new password:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ echo -n "password123" | bcrypt-cli -c 10\n$2a$10$OVnOaHDkcOXfbUZPFh5qt.yJqUt6pl9uJaqEMxxM.vS5fY/cZNmsq\n')),(0,o.kt)("p",null,"Finally, replace the newly generated password is user database file."),(0,o.kt)("h2",{id:"settings-page"},"Settings Page"),(0,o.kt)("p",null,"Any non-guest user could reset a password by browsing to ",(0,o.kt)("inlineCode",{parentName:"p"},"/settings"),"\nendpoint."),(0,o.kt)("p",null,"First, login to the portal."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8795).Z,width:"441",height:"366"})),(0,o.kt)("p",null,'Next, browse to "Settings" page.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3669).Z,width:"441",height:"454"})),(0,o.kt)("p",null,'Finally, navigate to "Password" and chage it.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7374).Z,width:"1285",height:"585"})))}m.isMDXComponent=!0},8795:function(e,t,n){t.Z=n.p+"assets/images/local_password_change_1-6c081f4190d01ad358c0ad266ff597d9.png"},3669:function(e,t,n){t.Z=n.p+"assets/images/local_password_change_2-f2add807800ada16daebb8c5001a07b3.png"},7374:function(e,t,n){t.Z=n.p+"assets/images/local_password_change_3-afced3eff7c42182ae54ffd2da35e210.png"}}]);