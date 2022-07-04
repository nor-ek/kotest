"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[2013],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||s;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<s;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},48667:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),i=["components"],o={id:"seeds",title:"Property Test Seeds",slug:"property-test-seeds.html",sidebar_label:"Seeds"},l=void 0,d={unversionedId:"proptest/seeds",id:"proptest/seeds",title:"Property Test Seeds",description:"When a property test is executed, the values are generated using a random source that is created from a seed value. By",source:"@site/docs/proptest/seed.md",sourceDirName:"proptest",slug:"/proptest/property-test-seeds.html",permalink:"/docs/next/proptest/property-test-seeds.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/proptest/seed.md",tags:[],version:"current",frontMatter:{id:"seeds",title:"Property Test Seeds",slug:"property-test-seeds.html",sidebar_label:"Seeds"},sidebar:"proptest",previous:{title:"Generator Operations",permalink:"/docs/next/proptest/generator-operations.html"},next:{title:"Configuration",permalink:"/docs/next/proptest/property-test-config.html"}},p={},c=[{value:"Manually specifying the seed",id:"manually-specifying-the-seed",level:3},{value:"Rerunning failed seeds",id:"rerunning-failed-seeds",level:3},{value:"Failing when seeds set",id:"failing-when-seeds-set",level:3}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"When a property test is executed, the values are generated using a random source that is created from a seed value. By\ndefault this seed value is itself randomly chosen (using the default ",(0,s.kt)("inlineCode",{parentName:"p"},"kotlin.random.Random")," instance). However, there\nare times when this value needs to be fixed or repeated."),(0,s.kt)("p",null,"You can change the default used by all tests, unless overriden through the options listed below, by changing the\nconfiguration value ",(0,s.kt)("inlineCode",{parentName:"p"},"PropertyTesting.defaultSeed"),"."),(0,s.kt)("h3",{id:"manually-specifying-the-seed"},"Manually specifying the seed"),(0,s.kt)("p",null,"To manually set the seed, pass an instance of ",(0,s.kt)("inlineCode",{parentName:"p"},"PropTestConfig")," to your prop test methods. You might want to do this if\nyou find a test failure, and you want to ensure that those values continue to be executed in the future as a regression\ntest."),(0,s.kt)("p",null,"For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class PropertyExample : StringSpec({\n  "String size" {\n    forAll<String, String>(PropTestConfig(seed = 127305235)) { a, b ->\n      (a + b).length == a.length + b.length\n    }\n  }\n})\n')),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Whenever a property test fails, Kotest will output the seed that was used. You can duplicate the test, setting it to use\nthis seed so you have permanent regression test for those values."))),(0,s.kt)("h3",{id:"rerunning-failed-seeds"},"Rerunning failed seeds"),(0,s.kt)("p",null,"By default, when a property test fails, the seed used by that test is written to a file\nin ",(0,s.kt)("inlineCode",{parentName:"p"},"~/.kotest/seeds/<spec>/<testname>"),". Whenever a property test runs, this seed is detected if the file exists, and\nused in place of a random seed. Next time the test is successful, the seed file will be removed."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"A manually specified seed always takes precedence over a failed seed."))),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"This feature can be disabled by setting ",(0,s.kt)("inlineCode",{parentName:"p"},"PropertyTesting.writeFailedSeed = false")))),(0,s.kt)("h3",{id:"failing-when-seeds-set"},"Failing when seeds set"),(0,s.kt)("p",null,"Some users prefer to avoid manually specifying seeds. They want to use them locally only, when developing, but to avoid\nchecking them in. If is your style, then set ",(0,s.kt)("inlineCode",{parentName:"p"},"PropertyTesting.failOnSeed = false")," or the env\nvar ",(0,s.kt)("inlineCode",{parentName:"p"},"kotest.proptest.seed.fail-if-set")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"false")," on your server."),(0,s.kt)("p",null,"Then if a seed is detected, the test suite will fail."))}m.isMDXComponent=!0}}]);