"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[8401],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=s,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56065:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(87462),s=n(63366),r=(n(67294),n(3905)),i=["components"],l={id:"writing_tests",title:"Writing Tests",slug:"writing-tests.html",sidebar_label:"Writing Tests"},o=void 0,c={unversionedId:"framework/writing_tests",id:"version-5.3/framework/writing_tests",title:"Writing Tests",description:"By using the language features available in Kotlin, Kotest is able to provide a more powerful and yet simple approach",source:"@site/versioned_docs/version-5.3/framework/writing_tests.md",sourceDirName:"framework",slug:"/framework/writing-tests.html",permalink:"/docs/framework/writing-tests.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.3/framework/writing_tests.md",tags:[],version:"5.3",frontMatter:{id:"writing_tests",title:"Writing Tests",slug:"writing-tests.html",sidebar_label:"Writing Tests"},sidebar:"framework",previous:{title:"Introduction",permalink:"/docs/framework/framework.html"},next:{title:"Testing Styles",permalink:"/docs/framework/testing-styles.html"}},u={},p=[{value:"Nested Tests",id:"nested-tests",level:3},{value:"Dynamic Tests",id:"dynamic-tests",level:3},{value:"Lifecycle Callbacks",id:"lifecycle-callbacks",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"By using the language features available in Kotlin, Kotest is able to provide a more powerful and yet simple approach\nto defining tests. Gone are the days when tests need to be methods defined in a Java file."),(0,r.kt)("p",null,"In Kotest a test is essentially just a function ",(0,r.kt)("inlineCode",{parentName:"p"},"TestContext -> Unit")," which contains your test logic.\nAny assert statements (",(0,r.kt)("em",{parentName:"p"},"matchers")," in Kotest nomenclature) invoked in this function that throw an exception\nwill be intercepted by the framework and used to mark that test as failed or success."),(0,r.kt)("p",null,"Test functions are not defined manually, but instead using the Kotest DSL, which provides several ways in which these functions\ncan be created and nested. The DSL is accessed by creating a class that extends from a class that implements a particular\n",(0,r.kt)("a",{parentName:"p",href:"/docs/framework/testing-styles.html"},"testing style"),"."),(0,r.kt)("p",null,"For example, using the ",(0,r.kt)("em",{parentName:"p"},"Fun Spec")," style, we create test functions using the ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," keyword, providing a name, and the\nactual test function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyFirstTestClass : FunSpec({\n\n   test("my first test") {\n      1 + 2 shouldBe 3\n   }\n\n})\n')),(0,r.kt)("p",null,"Note that tests must be defined inside an ",(0,r.kt)("inlineCode",{parentName:"p"},"init {}")," block or an init lambda as in the previous example."),(0,r.kt)("h3",{id:"nested-tests"},"Nested Tests"),(0,r.kt)("p",null,"All styles offer the ability to nest tests. The actual syntax varies from style to style,\nbut is essentially just a different keyword used for the outer tests."),(0,r.kt)("p",null,"For example, in ",(0,r.kt)("em",{parentName:"p"},"Describe Spec"),", the outer tests are created using the ",(0,r.kt)("inlineCode",{parentName:"p"},"describe")," function and\ninner tests using the ",(0,r.kt)("inlineCode",{parentName:"p"},"it")," function.\nJavaScript and Ruby developers will instantly recognize this style as it is commonly used in testing frameworks\nfor those languages."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class NestedTestExamples : DescribeSpec({\n\n   describe("an outer test") {\n\n      it("an inner test") {\n        1 + 2 shouldBe 3\n      }\n\n      it("an inner test too!") {\n        3 + 4 shouldBe 7\n      }\n   }\n\n})\n')),(0,r.kt)("p",null,"In Kotest nomenclature, tests that can contain other tests are called ",(0,r.kt)("em",{parentName:"p"},"test containers")," and tests\nthat are terminal or leaf nodes are called ",(0,r.kt)("em",{parentName:"p"},"test cases"),". Both can contain test logic and assertions."),(0,r.kt)("h3",{id:"dynamic-tests"},"Dynamic Tests"),(0,r.kt)("p",null,"Since tests are just functions, they are evaluated at runtime."),(0,r.kt)("p",null,"This approach offers a huge advantage - tests can be dynamically created. Unlike traditional JVM test frameworks,\nwhere tests are always methods and therefore declared at compile time, Kotest can add tests conditionally at runtime."),(0,r.kt)("p",null,"For example, we could add tests based on elements in a list."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class DynamicTests : FunSpec({\n\n    listOf(\n      "sam",\n      "pam",\n      "tim",\n    ).forEach {\n       test("$it should be a three letter name") {\n           it.shouldHaveLength(3)\n       }\n    }\n})\n')),(0,r.kt)("p",null,"This would result in three tests being created at runtime. It would be the equivalent to writing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class DynamicTests : FunSpec({\n\n   test("sam should be a three letter name") {\n      "sam".shouldHaveLength(3)\n   }\n\n   test("pam should be a three letter name") {\n      "pam".shouldHaveLength(3)\n   }\n\n   test("tim should be a three letter name") {\n     "tim".shouldHaveLength(3)\n   }\n})\n')),(0,r.kt)("h3",{id:"lifecycle-callbacks"},"Lifecycle Callbacks"),(0,r.kt)("p",null,"Kotest provides several callbacks which are invoked at various points during a test's lifecycle.\nThese callbacks are useful for resetting state, setting up and tearing down resources that a test might use, and so on."),(0,r.kt)("p",null,"As mentioned earlier, test functions in Kotest are labelled either ",(0,r.kt)("em",{parentName:"p"},"test containers")," or ",(0,r.kt)("em",{parentName:"p"},"test cases"),", in addition to\nthe containing class being labelled a ",(0,r.kt)("em",{parentName:"p"},"spec"),". We can register callbacks that are invoked before or after any test function, container, test case, or a spec itself."),(0,r.kt)("p",null,"To register a callback, we just pass a function to one of the callback methods."),(0,r.kt)("p",null,"For example, we can add a callback before and after any ",(0,r.kt)("em",{parentName:"p"},"test case")," using a function literal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class Callbacks : FunSpec({\n\n   beforeEach {\n      println("Hello from $it")\n   }\n\n   test("sam should be a three letter name") {\n      "sam".shouldHaveLength(3)\n   }\n\n   afterEach {\n      println("Goodbye from $it")\n   }\n})\n')),(0,r.kt)("p",null,"Note that the order of the callbacks in the file is not important.\nFor example, an ",(0,r.kt)("inlineCode",{parentName:"p"},"afterEach")," block can be placed first in the class if you so desired."),(0,r.kt)("p",null,"If we want to extract common code, we can create a named function and re-use it for multiple files.\nFor example, say we wanted to reset a database before every test in more than one file, we could do this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val resetDatabase: BeforeTest = {\n  // truncate all tables here\n}\n\nclass ReusableCallbacks : FunSpec({\n\n   beforeTest(resetDatabase)\n\n   test("this test will have a sparkling clean database!") {\n       // test logic here\n   }\n})\n')),(0,r.kt)("p",null,"For details of all callbacks and when they are invoked, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/framework/lifecycle-hooks.html"},"here")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/framework/extensions/extensions-introduction.html"},"here"),"."))}m.isMDXComponent=!0}}]);