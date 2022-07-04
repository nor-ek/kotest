"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[5423],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),a=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=a(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=a(r),d=o,m=f["".concat(s,".").concat(d)]||f[d]||c[d]||i;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var a=2;a<i;a++)l[a]=r[a];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},24659:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return a},toc:function(){return c}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),l=["components"],p={id:"props",title:"Properties",slug:"intellij-properties.html"},s=void 0,a={unversionedId:"intellij/props",id:"version-5.3/intellij/props",title:"Properties",description:"When running tests via the intellij runner, properties set using gradle.properties or in a gradle build file won't be picked up of course.",source:"@site/versioned_docs/version-5.3/intellij/props.md",sourceDirName:"intellij",slug:"/intellij/intellij-properties.html",permalink:"/docs/intellij/intellij-properties.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.3/intellij/props.md",tags:[],version:"5.3",frontMatter:{id:"props",title:"Properties",slug:"intellij-properties.html"},sidebar:"intellij",previous:{title:"Test Explorer",permalink:"/docs/intellij/intellij-test-explorer.html"}},u={},c=[{value:"Specifying the properties filename",id:"specifying-the-properties-filename",level:3}],f={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When running tests via the intellij runner, properties set using ",(0,i.kt)("inlineCode",{parentName:"p"},"gradle.properties")," or in a gradle build file won't be picked up of course."),(0,i.kt)("p",null,"To support runtime System properties, the Kotest framework will always look for key value pairs inside a ",(0,i.kt)("inlineCode",{parentName:"p"},"kotest.properties")," file located on the classpath.\nAny key value pairs located in this file will be set as a system property before any tests execute."),(0,i.kt)("p",null,"For example, after adding this file to your classpath as ",(0,i.kt)("inlineCode",{parentName:"p"},"kotest.properties"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"foo=bar\n")),(0,i.kt)("p",null,"The following test would pass:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class FooTest : DescribeSpec() {\n  init {\n    describe("after adding kotest.properties") {\n      it("foo should be set") {\n         System.getProperty("foo") shouldBe "bar"\n      }\n    }\n  }\n}\n')),(0,i.kt)("h3",{id:"specifying-the-properties-filename"},"Specifying the properties filename"),(0,i.kt)("p",null,"If you don't wish to name the file ",(0,i.kt)("inlineCode",{parentName:"p"},"kotest.properties"),", or perhaps you want to support different files based on an environment,\nthen you can use the system property ",(0,i.kt)("inlineCode",{parentName:"p"},"kotest.properties.filename")," to set the properties filename."),(0,i.kt)("p",null,"For example, you could launch tests with ",(0,i.kt)("inlineCode",{parentName:"p"},"kotest.properties.filename=cluster.prd.properties")," then the key value file named\n",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.prd.properties")," would be loaded before any tests are executed."))}d.isMDXComponent=!0}}]);