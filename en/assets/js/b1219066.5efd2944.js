(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[9771],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},u=Object.keys(e);for(a=0;a<u.length;a++)n=u[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(a=0;a<u.length;a++)n=u[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},z={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,u=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,f=c["".concat(i,".").concat(m)]||c[m]||z[m]||u;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var u=n.length,l=new Array(u);l[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<u;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1089:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return i},toc:function(){return s},default:function(){return z}});var a=n(4034),r=n(9973),u=(n(7294),n(3905)),l={sidebar_position:9},o="Web Fuzz \u57fa\u7840",i={unversionedId:"newforyak/fuzz_tutorial",id:"newforyak/fuzz_tutorial",isDocsHomePage:!1,title:"Web Fuzz \u57fa\u7840",description:"\u4ec0\u4e48\u662f Web Fuzz\uff08\u9488\u5bf9 Web \u5e94\u7528\u7684\u6a21\u7cca\u6d4b\u8bd5\uff09\uff1f",source:"@site/docs/newforyak/fuzz_tutorial.md",sourceDirName:"newforyak",slug:"/newforyak/fuzz_tutorial",permalink:"/en/docs/newforyak/fuzz_tutorial",editUrl:"https://github.com/yaklang/docs/newforyak/fuzz_tutorial.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"YAK + Nuclei\uff1a\u8bed\u8a00\u4e2d\u7684\u6f0f\u626b",permalink:"/en/docs/newforyak/nuclei"},next:{title:"Web Fuzz \u9ad8\u7ea7\u6559\u7a0b",permalink:"/en/docs/newforyak/fuzz_for_more"}},s=[{value:"\u4ec0\u4e48\u662f Web Fuzz\uff08\u9488\u5bf9 Web \u5e94\u7528\u7684\u6a21\u7cca\u6d4b\u8bd5\uff09\uff1f",id:"\u4ec0\u4e48\u662f-web-fuzz\uff08\u9488\u5bf9-web-\u5e94\u7528\u7684\u6a21\u7cca\u6d4b\u8bd5\uff09\uff1f",children:[]},{value:"Web Fuzz \u672c\u8d28\uff1a\u9488\u5bf9 HTTP \u6570\u636e\u5305\u7684 Fuzz",id:"web-fuzz-\u672c\u8d28\uff1a\u9488\u5bf9-http-\u6570\u636e\u5305\u7684-fuzz",children:[]},{value:"Web Fuzz \u8fdb\u9636",id:"web-fuzz-\u8fdb\u9636",children:[{value:"Web Fuzz \u5236\u5b9a Payloads",id:"web-fuzz-\u5236\u5b9a-payloads",children:[]}]},{value:"\u66f4\u591a\u7684 Fuzz \u624b\u6bb5\u548c\u66f4\u591a\u7684\u6807\u7b7e",id:"\u66f4\u591a\u7684-fuzz-\u624b\u6bb5\u548c\u66f4\u591a\u7684\u6807\u7b7e",children:[{value:"\u4f7f\u7528 <code>fuzz.Strings(fuzzTemplate)</code> \u6d4b\u8bd5",id:"\u4f7f\u7528-fuzzstringsfuzztemplate-\u6d4b\u8bd5",children:[]},{value:"\u5176\u4ed6\u6807\u7b7e\u901f\u89c8",id:"\u5176\u4ed6\u6807\u7b7e\u901f\u89c8",children:[]},{value:"HTTP \u534f\u8bae\u5176\u4ed6 Fuzz \u65b9\u6cd5\uff1a",id:"http-\u534f\u8bae\u5176\u4ed6-fuzz-\u65b9\u6cd5\uff1a",children:[]}]},{value:"\u5982\u4f55\u6267\u884c Fuzz \u540e\u7684\u8bf7\u6c42\uff1f",id:"\u5982\u4f55\u6267\u884c-fuzz-\u540e\u7684\u8bf7\u6c42\uff1f",children:[]},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",children:[]}],p={toc:s};function z(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,u.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"web-fuzz-\u57fa\u7840"},"Web Fuzz \u57fa\u7840"),(0,u.kt)("h2",{id:"\u4ec0\u4e48\u662f-web-fuzz\uff08\u9488\u5bf9-web-\u5e94\u7528\u7684\u6a21\u7cca\u6d4b\u8bd5\uff09\uff1f"},"\u4ec0\u4e48\u662f Web Fuzz\uff08\u9488\u5bf9 Web \u5e94\u7528\u7684\u6a21\u7cca\u6d4b\u8bd5\uff09\uff1f"),(0,u.kt)("p",null,"\u6a21\u7cca\u6d4b\u8bd5\u662f\u9ed1\u76d2\u8f6f\u4ef6\u6d4b\u8bd5\u4e00\u79cd\uff0c\u901a\u8fc7\u628a\u6784\u9020\u7684\u7279\u6b8a payload \u6ce8\u5165\u5230\u8f6f\u4ef6\u53ef\u4ee5\u63a5\u53d7\u8f93\u5165\u7684\u70b9\u6765\u89c2\u5bdf\u8f6f\u4ef6\u6267\u884c\u7684\u7ed3\u679c\u548c\u5d29\u6e83\u4fe1\u606f\u6765\u53d1\u73b0\u8f6f\u4ef6\u6709\u95ee\u9898\u7684\u70b9\uff0c\u5c24\u5176\u5728\u4e8c\u8fdb\u5236\u9886\u57df\u6781\u4e3a\u5e38\u89c1\u3002"),(0,u.kt)("p",null,"\u5728 OWASP \u4e2d\uff0c\u7ed9\u51fa\u4e86\u5173\u4e8e Web Fuzz \u7684\u4e00\u4e9b\u89e3\u91ca\uff1a"),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},"Fuzzing\nFuzz testing or Fuzzing is a Black Box software testing technique, which basically consists in finding implementation bugs using malformed/semi-malformed data injection in an automated fashion."),(0,u.kt)("p",{parentName:"blockquote"},"A trivial example\nLet\u2019s consider an integer in a program, which stores the result of a user\u2019s choice between 3 questions. When the user picks one, the choice will be 0, 1 or 2. Which makes three practical cases. But what if we transmit 3, or 255 ? We can, because integers are stored a static size variable. If the default switch case hasn\u2019t been implemented securely, the program may crash and lead to \u201cclassical\u201d security issues: (un)exploitable buffer overflows, DoS, \u2026"),(0,u.kt)("p",{parentName:"blockquote"},"Fuzzing is the art of automatic bug finding, and it\u2019s role is to find software implementation faults, and identify them if possible.")),(0,u.kt)("p",null,"\u4e00\u822c\u6765\u8bf4\uff0c\u5728 Web \u6f0f\u6d1e\u626b\u63cf\u4e2d\uff0c\u6211\u4eec\u4e5f\u8bb8\u5e76\u4e0d\u77e5\u9053\u4e00\u4e2a\u53c2\u6570\u5e94\u8be5\u6d4b\u8bd5\u4ec0\u4e48\u3002\u751a\u81f3\u6211\u4eec\u80fd\u81ea\u52a8\u628a\u9700\u8981\u6d4b\u8bd5\u6f0f\u6d1e\u7684\u53c2\u6570\u5bfb\u627e\u5230\u5df2\u7ecf\u662f\u4e00\u4e2a\u5f88\u96be\u7684\u4e8b\u513f\u4e86\u3002"),(0,u.kt)("p",null,"\u5f80\u5f80\u5728\u7f16\u5199\u6f0f\u6d1e\u68c0\u6d4b\u7b97\u6cd5\u7684\u65f6\u5019\uff0c\u7f16\u5199\u6f0f\u6d1e\u7684\u540c\u5b66\u4f1a\u82b1\u5927\u91cf\u7684\u65f6\u95f4\u6765\u5b8c\u6210\u57fa\u7840\u8bbe\u65bd\u7684\u642d\u5efa\uff0c\u548c\u7f16\u5199\u57fa\u7840\u7684\u53d1\u5305\u4ee3\u7801\u3002"),(0,u.kt)("p",null,"\u5728 Yak \u4e2d\uff0c\u4f5c\u8005\u5e76\u4e0d\u5e0c\u671b\u7528\u6237\u628a\u65f6\u95f4\u548c\u7ecf\u5386\u90fd\u82b1\u5728\u57fa\u7840\u8bbe\u65bd\u4e2d\uff0c\u800c\u662f\u5e0c\u671b\u7528\u6237\u5c3d\u53ef\u80fd\u5173\u6ce8\u6f0f\u6d1e\u68c0\u6d4b\u7b97\u6cd5\u672c\u8eab\u3002\u5728\u5b9e\u9645\u7684\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u8fd9\u79cd\u57fa\u7840\u8bbe\u65bd\u5f80\u5f80\u5e76\u6ca1\u6709\u5408\u9002\u7684\u65b9\u5f0f\u63d0\u4f9b\u7ed9\u7528\u6237\uff0c\u5982\u679c\u4f5c\u4e3a\u4e00\u5bb6\u516c\u53f8\uff0c\u8fd9\u4e2a\u53ef\u4ee5\u4f5c\u4e3a\u516c\u53f8\u5458\u5de5\u9075\u5faa\u6216\u8005\u53ef\u4ee5\u4f7f\u7528\u7684\u6846\u67b6\u4e4b\u4e00\uff0c\u4f46\u662f\u4f5c\u4e3a\u5916\u90e8\u7528\u6237\uff0c\u80fd\u6709\u8fd9\u79cd\u7814\u53d1\u4f53\u9a8c\u5176\u5b9e\u662f\u4e00\u4ef6\u4e0d\u5bb9\u6613\u7684\u4e8b\u60c5"),(0,u.kt)("h2",{id:"web-fuzz-\u672c\u8d28\uff1a\u9488\u5bf9-http-\u6570\u636e\u5305\u7684-fuzz"},"Web Fuzz \u672c\u8d28\uff1a\u9488\u5bf9 HTTP \u6570\u636e\u5305\u7684 Fuzz"),(0,u.kt)("p",null,"\u672c\u8d28\u4e0a\u9488\u5bf9 HTTP \u8bf7\u6c42\u7684 Fuzz \u662f Web Fuzz \u9700\u8981\u505a\u7684\u6838\u5fc3\u4e8b\u9879\u3002\u518d\u8bf4\u5177\u4f53\u4e00\u70b9\uff0c\u5176\u5b9e\u9488\u5bf9 HTTP Request \u662f\u6574\u4e2a\u6d4b\u8bd5\u7684\u6838\u5fc3\uff1a"),(0,u.kt)("ol",null,(0,u.kt)("li",{parentName:"ol"},"\u9700\u8981\u80fd\u5bf9 HTTP \u65b9\u6cd5\u505a\u4e0d\u540c\u65b9\u6cd5\u7684\u53d8\u6362\u6d4b\u8bd5"),(0,u.kt)("li",{parentName:"ol"},"\u5bf9 HTTP \u7684 Path \u505a\u4e0d\u540c\u8def\u5f84\u7684\u6d4b\u8bd5"),(0,u.kt)("li",{parentName:"ol"},"\u5bf9 HTTP Get \u53c2\u6570\u8fdb\u884c\u6bcf\u4e2a\u53c2\u6570\u7684\u6d4b\u8bd5"),(0,u.kt)("li",{parentName:"ol"},"\u5bf9 HTTP Post \u6570\u636e\u5305\u4e2d\u7684\u5185\u5bb9\u505a\u6d4b\u8bd5\uff1a",(0,u.kt)("ol",{parentName:"li"},(0,u.kt)("li",{parentName:"ol"},"Post \u6570\u636e\u5982\u679c\u662f Json\uff0c\u8981\u652f\u6301\u80fd\u5bf9 Json \u7684\u6570\u636e\u505a\u652f\u6301\u548c\u66ff\u6362"),(0,u.kt)("li",{parentName:"ol"},"Post \u6570\u636e\u5982\u679c\u662f urlencode \u5e94\u8be5\u652f\u6301\u548c Get \u53c2\u6570\u4e00\u6837\u7684\u6d4b\u8bd5\u65b9\u6cd5"),(0,u.kt)("li",{parentName:"ol"},"Post \u6570\u636e\u5982\u679c\u662f\u4e0a\u4f20\u6587\u4ef6\uff0c\u4e5f\u8981\u53ef\u4ee5\u8bc6\u522b\uff0c\u5e76\u5bf9\u4e0a\u4f20\u7684\u6587\u4ef6\u505a\u6d4b\u8bd5"))),(0,u.kt)("li",{parentName:"ol"},"\u9488\u5bf9 HTTP Header \u7684\u6d4b\u8bd5\uff1a",(0,u.kt)("ol",{parentName:"li"},(0,u.kt)("li",{parentName:"ol"},"\u5305\u542b\u4f46\u4e0d\u9650\u4e8e User-Agent / Host / Cookie / Authorization \u8fd9\u4e9b\u5934\u8fdb\u884c\u6574\u4f53\u6d4b\u8bd5"),(0,u.kt)("li",{parentName:"ol"},"\u4f17\u6240\u5468\u77e5\uff0cCookie \u4e2d\u7684\u4e00\u4e9b\u5b57\u6bb5\u4e5f\u5e94\u8be5\u88ab\u6d4b\u8bd5\uff0c\u8981\u5177\u5907\u589e\u52a0 K-V Pair \u7684 Cookie \u6d4b\u8bd5"))),(0,u.kt)("li",{parentName:"ol"},"...")),(0,u.kt)("p",null,"\u5f53\u7136\u4e0a\u9762\u5217\u51fa\u7684\u5e76\u4e0d\u662f Web Fuzz \u7684\u5168\u90e8\u7684\u70b9\uff0c\u603b\u7684\u6765\u8bf4\uff0c\u9700\u8981\u6d4b\u8bd5\u7684\u70b9\u5e76\u4e0d\u662f\u7279\u522b\u591a\uff0c\u4f46\u662f\u4e5f\u5e76\u4e0d\u7b97\u5c11\u3002Yak \u5e0c\u671b\u7528\u6237\u5728\u4f7f\u7528\u7684\u8fc7\u7a0b\u4e2d\uff0c\u80fd\u901a\u8fc7\u4f7f\u7528 Yak \u81ea\u5e26\u7684 API \u5feb\u901f\u8fdb\u884c\u5bf9\u4e0a\u8ff0\u53ef\u4ee5\u6d4b\u8bd5\u7684\u70b9\u8fdb\u884c\u6d4b\u8bd5\uff0c\u4ece\u800c\u5feb\u901f\u7f16\u5199\u624b\u52a8/\u5168\u81ea\u52a8\u5316 Fuzz \u7684\u6570\u636e\u5305\u3002"),(0,u.kt)("p",null,"\u5728 Yak \u4e2d\uff0c\u4f60\u751a\u81f3\u53ef\u4ee5\u8fd9\u6837\u7f16\u5199 Web Fuzz \u7684\u529f\u80fd"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-go"},'// \u521b\u5efa\u4e00\u4e2a\u53ef Fuzz \u7684\u8bf7\u6c42\nfReq, err := fuzz.HTTPRequest(`GET / HTTP/1.1\nHost: 127.0.0.1`)\ndie(err)\n\n// \u66ff\u6362\u6389\u8bf7\u6c42\u4e2d\u7684\u67d0\u4e2a Get \u53c2\u6570\uff0c\u540c\u65f6\u66ff\u6362\u6389 UserAgent \u5934\u4e2d\u7684\u5b57\u6bb5\nfReq = fReq.FuzzGetParams("testValue", "test").FuzzHTTPHeader("User-Agent", "ua-for www.example.com")\n\n// \u5c55\u793a fReq \u7684 Fuzz \u7ed3\u679c\nfReq.Show()\n')),(0,u.kt)("p",null,"\u4e0a\u8ff0\u4ee3\u7801\u6267\u884c\u4e4b\u540e\uff0c\u6211\u4eec\u80fd\u53d1\u73b0 fuzz \u7ed3\u675f\u4e4b\u540e\u8bf7\u6c42\u88ab\u6253\u5370\u5728\u5c4f\u5e55\u4e0a\u4e86"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"GET /?testValue=test HTTP/1.1\nHost: 127.0.0.1\nContent-Length: 0\nUser-Agent: ua-for www.example.com\n\n")),(0,u.kt)("h2",{id:"web-fuzz-\u8fdb\u9636"},"Web Fuzz \u8fdb\u9636"),(0,u.kt)("p",null,"\u5f53\u6211\u4eec\u5b8c\u6210\u4e0a\u4e00\u8282\u7684\u7b80\u5355\u5185\u5bb9\u4e4b\u540e\uff0c\u6211\u4eec\u4f1a\u53d1\u73b0\u6211\u4eec\u80fd\u5b9e\u73b0\u5bf9\u5355\u4e2a\u6570\u636e\u5305\u8fdb\u884c\u53d8\u6362\u4e86\uff0c\u4f46\u662f Fuzz \u5f80\u5f80\u662f\u4e00\u4e2a\u975e\u5e38\u590d\u6742\u7684\u64cd\u4f5c\uff0c\u9488\u5bf9\u4e00\u4e2a\u70b9\u6211\u4eec\u8981\u8fdb\u884c\u4e0d\u540c\u7684 Payload \u7684\u6d4b\u8bd5\uff0c\u90a3 Yak \u7684 fuzz \u5305\u652f\u6301\u9488\u5bf9\u4e00\u4e2a\u8f93\u5165\u70b9\u7684\u591a\u4e2a\u6570\u636e\u5305\u8fdb\u884c fuzz \u5417\uff1f\u5f53\u7136\u652f\u6301\uff01"),(0,u.kt)("p",null,"Yak \u9488\u5bf9\u8fd9\u79cd\u60c5\u51b5\u7684\u652f\u6301\u53ef\u4ee5\u8bf4\u662f\u4e1a\u5185\u9996\u521b\uff0c\u901a\u8fc7 ",(0,u.kt)("inlineCode",{parentName:"p"},"{{integer(1-10)}}")," \u8fd9\u6837\u7684\u6807\u7b7e\uff0c\u6211\u4eec\u53ef\u4ee5\u628a ",(0,u.kt)("inlineCode",{parentName:"p"},"1-10")," \u62c6\u6210\u771f\u6b63\u7684 ",(0,u.kt)("inlineCode",{parentName:"p"},"[1,2,3,4...8,9,10]"),"\u3002\u4f8b\u5982\u6211\u4eec\u6267\u884c\u4e0b\u9762\u7684\u811a\u672c"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-go"},'basePacket = `\nGET / HTTP/1.1\nHost: 127.0.0.1\n`\n// \u521b\u5efa\u4e00\u4e2a\u53ef Fuzz \u7684\u8bf7\u6c42\nfReq, err := fuzz.HTTPRequest(basePacket)\ndie(err)\n\n// \u66ff\u6362\u6389\u8bf7\u6c42\u4e2d\u7684\u67d0\u4e2a Get \u53c2\u6570\uff0c\u4f7f\u7528 test{{integer(1-10)}} \u5373\u53ef\u751f\u6210 [test1, test2, test3, ... test8, test9, test10] \nfReq.FuzzGetParams("testValue", "test{{integer(1-10)}}").Show()\n')),(0,u.kt)("p",null,"\u5c06\u4f1a\u751f\u6210 10 \u4e2a\u6570\u636e\u5305\uff0c\u5206\u522b\u4f7f\u7528\u5982\u4e0b\u5185\u5bb9\u4f5c\u4e3a Get \u53c2\u6570"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"testValue=test1\ntestValue=test2\ntestValue=test3\n...\ntestValue=test8\ntestValue=test9\ntestValue=test10\n")),(0,u.kt)("p",null,"\u6267\u884c\u7684\u5185\u5bb9\u4e3a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"GET /?testValue=test1 HTTP/1.1\nHost: 127.0.0.1\nContent-Length: 0\n\n\nGET /?testValue=test2 HTTP/1.1\nHost: 127.0.0.1\nContent-Length: 0\n\n\nGET /?testValue=test3 HTTP/1.1\n...\n...\n...\nGET /?testValue=test9 HTTP/1.1\nHost: 127.0.0.1\nContent-Length: 0\n\n\nGET /?testValue=test10 HTTP/1.1\nHost: 127.0.0.1\nContent-Length: 0\n\n\n")),(0,u.kt)("p",null,"\u6211\u4eec\u89c2\u5bdf\u5230\u8fd9\u4e9b\u6570\u636e\u5305\u7684\u65f6\u5019\uff0c\u5f88\u5bb9\u6613\u5c31\u80fd\u7406\u89e3\u6211\u4eec\u901a\u8fc7 ",(0,u.kt)("inlineCode",{parentName:"p"},"{{integer(1-10)}}")," \u6807\u7b7e\uff0c\u5bf9 ",(0,u.kt)("inlineCode",{parentName:"p"},"test1,test2...test10")," \u53c2\u6570\u8fdb\u884c\u4e86\u52a8\u6001\u751f\u6210\uff0c\u4e00\u4e2a\u547d\u4ee4 fuzz \u4e86 10 \u4e2a\u6570\u636e\u5305\uff0c\u53ef\u4ee5\u8bf4\u662f\u975e\u5e38\u597d\u7528\u4e86\u3002"),(0,u.kt)("p",null,"\u5f53\u7136\uff0c",(0,u.kt)("inlineCode",{parentName:"p"},"{{integer}}")," \u6807\u7b7e\u5e76\u4e0d\u662f\u552f\u4e00\u53ef\u7528\u7684\u6807\u7b7e\uff0c\u5bf9\u4e8e\u5e38\u89c1\u7684 Fuzz \u591a\u4e2a Payload \u7684\u573a\u666f\uff0c\u6211\u4eec"),(0,u.kt)("h3",{id:"web-fuzz-\u5236\u5b9a-payloads"},"Web Fuzz \u5236\u5b9a Payloads"),(0,u.kt)("p",null,"\u4f46\u662f\u6709\u65f6\u5019\uff0c\u6211\u4eec\u4f7f\u7528 fuzz \u5e76\u4e0d\u53ea\u662f\u4e3a\u4e86 fuzz \u51e0\u4e2a\u6574\u6570\uff0c\u7ecf\u5e38\u6211\u4eec\u9700\u8981\u6784\u9020\u82e5\u5e72\u4e0e\u6f0f\u6d1e\u6d4b\u8bd5\u76f8\u5173\u7684 Payload\uff0c\u6216\u8005\u968f\u673a\u5b57\u7b26\u4e32\uff0c\u6784\u9020\u6570\u636e\u5305\uff0c\u90a3\u4e48\u6211\u4eec\u5e94\u8be5\u5982\u4f55\u64cd\u4f5c\u5462\uff1f"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-go"},'basePacket = `\nGET / HTTP/1.1\nHost: 127.0.0.1\n`\n// \u521b\u5efa\u4e00\u4e2a\u53ef Fuzz \u7684\u8bf7\u6c42\nfReq, err := fuzz.HTTPRequest(basePacket)\ndie(err)\n\n// \u66ff\u6362\u6389\u8bf7\u6c42\u4e2d\u7684\u67d0\u4e2a Get \u53c2\u6570\uff0c\u4f7f\u7528\u5e26 fuzz \u6807\u7b7e\u7684 []string \u8fdb\u884c Fuzz\nfReq.FuzzGetParams("testValue", ["test", "alert(1)", "prompt`34{{char(a-c)}}`"]).Show()\n')),(0,u.kt)("p",null,"\u6211\u4eec\u89c2\u5bdf\u4e0a\u9762\u4ee3\u7801\uff0cGet \u53c2\u6570\u53d8\u6210\u4e00\u4e2a list/slice\uff0c\u5206\u522b\u4e3a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-go"},"test\nalert(1)\nprompt`34{{char(a-c)}}`\n")),(0,u.kt)("p",null,"\u6839\u636e\u6211\u4eec\u7684\u4f7f\u7528\u7ecf\u9a8c\uff0c\u8fd9\u4e9b payload \u5c06\u4f1a\u88ab fuzz \u6210 5 \u6761 Payload"),(0,u.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,u.kt)("div",{parentName:"div",className:"admonition-heading"},(0,u.kt)("h5",{parentName:"div"},(0,u.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,u.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,u.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u4e3a\u4ec0\u4e48\u662f\u4e94\u6761\u5462\uff1f")),(0,u.kt)("div",{parentName:"div",className:"admonition-content"},(0,u.kt)("p",{parentName:"div"},(0,u.kt)("inlineCode",{parentName:"p"},"{{char(a-c)}}")," \u662f\u6211\u4eec\u9047\u5230\u7684\u4e00\u4e2a\u65b0\u6807\u7b7e\uff0c\u6839\u636e\u6807\u7b7e\u5b57\u9762\u610f\u601d\uff0c\u4f1a\u88ab\u89e3\u6790\u4e3a ",(0,u.kt)("inlineCode",{parentName:"p"},"a,b,c")," \u4e09\u4e2a\u5143\u7d20\uff0c\u6240\u4ee5\u4e0a\u8ff0\u7684 Payload \u5b9e\u9645\u4e3a"),(0,u.kt)("pre",{parentName:"div"},(0,u.kt)("code",{parentName:"pre"},"test\nalert(1)\nprompt`34a`\nprompt`34b`\nprompt`34c`\n")))),(0,u.kt)("p",null,"\u7ecf\u8fc7\u4e0a\u8ff0\u7684 Payload \u6e32\u67d3\uff0c\u6211\u4eec\u5f97\u5230\u4e86\u5982\u4e0b\u6570\u636e\u5305"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-http"},"GET /?testValue=test HTTP/1.1\nHost: 127.0.0.1\nContent-Length: 0\n\n\nGET /?testValue=alert%281%29 HTTP/1.1\nHost: 127.0.0.1\nContent-Length: 0\n\n\nGET /?testValue=prompt%6034a%60 HTTP/1.1\nHost: 127.0.0.1\nContent-Length: 0\n\n\nGET /?testValue=prompt%6034b%60 HTTP/1.1\nHost: 127.0.0.1\nContent-Length: 0\n\n\nGET /?testValue=prompt%6034c%60 HTTP/1.1\nHost: 127.0.0.1\nContent-Length: 0\n\n\n")),(0,u.kt)("p",null,"\u89c2\u5bdf\u7ed3\u679c\uff0c\u6211\u4eec\u53d1\u73b0\u6211\u4eec\u7684\u7ed3\u679c\u88ab\u7f16\u7801\u4e86\uff0c\u5e76\u4e14\u6211\u4eec\u7684 Payload \u786e\u5b9e\u88ab\u6e32\u67d3\u5728\u4e86 Get \u53c2\u6570\u7684\u4f4d\u7f6e\u3002"),(0,u.kt)("p",null,"\u7ecf\u8fc7\u8fd9\u6837\u7684\u53d8\u6362\uff0c\u6211\u4eec\u57fa\u672c\u4e0a\u53ef\u4ee5\u9488\u5bf9\u4e00\u4e2a\u5e38\u89c1\u53c2\u6570\u505a\u66f4\u591a\u7684\u9488\u5bf9\u6027\u7684\u6d4b\u8bd5\u4e86\uff0c\u4f46\u662f\u95ee\u9898\u4e5f\u4f1a\u968f\u4e4b\u800c\u6765"),(0,u.kt)("ol",null,(0,u.kt)("li",{parentName:"ol"},"\u6211\u4eec\u4f7f\u7528\u4e86 ",(0,u.kt)("inlineCode",{parentName:"li"},"{{integer}} / {{char}}")," \u6765\u8fdb\u884c Fuzz\uff0c\u5bf9\u5e94\u7684\u8fd8\u6709\u5176\u4ed6\u53ef\u7528\u6807\u7b7e\u5417\uff1f"),(0,u.kt)("li",{parentName:"ol"},"\u6211\u4eec\u5728\u4f8b\u5b50\u4e2d\u91cd\u70b9\u53ea\u6d4b\u8bd5\u4e86 ",(0,u.kt)("inlineCode",{parentName:"li"},".FuzzGetParam(key, value)")," \u8fd9\u4e2a\u65b9\u6cd5\uff0c\u5176\u4ed6\u63a5\u53e3\u5e94\u8be5\u600e\u4e48\u6d4b\u8bd5\uff1f"),(0,u.kt)("li",{parentName:"ol"},"\u6211\u4eec\u6279\u91cf\u6784\u5efa\u7684\u8bf7\u6c42\u96be\u9053\u53ea\u80fd ",(0,u.kt)("inlineCode",{parentName:"li"},".Show()")," \u5c55\u793a\u51fa\u6765\u5417\uff1f\u5982\u4f55\u6279\u91cf\u53d1\u8d77\u8bf7\u6c42\uff1f")),(0,u.kt)("h2",{id:"\u66f4\u591a\u7684-fuzz-\u624b\u6bb5\u548c\u66f4\u591a\u7684\u6807\u7b7e"},"\u66f4\u591a\u7684 Fuzz \u624b\u6bb5\u548c\u66f4\u591a\u7684\u6807\u7b7e"),(0,u.kt)("h3",{id:"\u4f7f\u7528-fuzzstringsfuzztemplate-\u6d4b\u8bd5"},"\u4f7f\u7528 ",(0,u.kt)("inlineCode",{parentName:"h3"},"fuzz.Strings(fuzzTemplate)")," \u6d4b\u8bd5"),(0,u.kt)("p",null,"\u6211\u4eec fuzz \u6784\u5efa\u4e86\u4e00\u4e2a\u51fd\u6570\uff0c\u4e13\u95e8\u7528\u6765\u6e32\u67d3\u5e26 fuzz \u6807\u7b7e\u7684\u5b57\u7b26\u4e32\uff0c\u53ef\u4ee5\u628a\u5b83\u53d8\u6210 fuzz \u7684\u7ed3\u679c\uff1a",(0,u.kt)("inlineCode",{parentName:"p"},"fuzz.Strings")),(0,u.kt)("p",null,"\u6211\u4eec\u89c2\u5bdf\u5982\u4e0b\u6848\u4f8b\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-go"},"dump(fuzz.Strings(`fuzzedStr:{{integer(1-4)}}`))\n")),(0,u.kt)("p",null,"\u6211\u4eec\u6267\u884c\u4e0a\u8ff0\u4ee3\u7801\u4e4b\u540e\uff0c\u63a7\u5236\u53f0\u8f93\u51fa\u5982\u4e0b\u5185\u5bb9"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-go"},'([]string) (len=4 cap=4) {\n (string) (len=11) "fuzzedStr:1",\n (string) (len=11) "fuzzedStr:2",\n (string) (len=11) "fuzzedStr:3",\n (string) (len=11) "fuzzedStr:4"\n}\n')),(0,u.kt)("p",null,"\u6211\u4eec\u7684\u6807\u7b7e\u88ab\u6e32\u67d3\u4e86\u3002\u4f7f\u7528 ",(0,u.kt)("inlineCode",{parentName:"p"},"fuzz.Strings")," \u662f\u4e00\u4e2a\u8c03\u8bd5\u7684\u975e\u5e38\u68d2\u7684\u65b9\u6cd5\u3002"),(0,u.kt)("h3",{id:"\u5176\u4ed6\u6807\u7b7e\u901f\u89c8"},"\u5176\u4ed6\u6807\u7b7e\u901f\u89c8"),(0,u.kt)("p",null,"\u5f88\u81ea\u7136\u7684\uff0c\u6211\u4eec\u7684 fuzz \u6807\u7b7e\u5e76\u4e0d\u53ea\u8fd9\u4e48\u51e0\u4e2a\uff0c\u5b9e\u9645\u4e0a\u6211\u4eec\u7684 fuzz \u6807\u7b7e\u4e3b\u8981\u5206\u4e3a\u4e24\u7c7b\uff0c\u4e00\u7c7b\u662f\u57fa\u7840\u6807\u7b7e\uff0c\u4e00\u7c7b\u662f\u7f16\u7801\u6807\u7b7e\uff0c\u7f16\u7801\u6807\u7b7e\u53ef\u4ee5\u5355\u72ec\u4f7f\u7528\uff0c\u4e5f\u53ef\u4ee5\u5728\u5185\u90e8\u5d4c\u5957\u666e\u901a\u6807\u7b7e\u8fdb\u884c\u4f7f\u7528\u3002"),(0,u.kt)("p",null,"\u6211\u4eec\u652f\u6301\u5982\u4e0b\u5185\u5bb9\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-go"},"// \u6574\u6570 fuzz\uff1a \n{{int}} {{integer}} {{i}}\n\n// \u5b57\u7b26 fuzz\n{{char}} {{ch}} {{c}}\n\n// \u62c6\u7f51\u6bb5 fuzz\uff0c\u4e00\u822c\u7528\u4e8e\u62c6\u5206\u626b\u63cf\u76ee\u6807\n{{net}} {{host}}\n\n// \u968f\u673a fuzz\n{{randstr}} {{randint}} {{rs}} {{ri}}\n\n...\n\n// \u7f16\u7801\u6807\u7b7e\n{{base64}} {{url}} {{hex}} {{durl}} {{html}} {{htmlhex}}\n{{md5}} {{sha1}} {{sha256}} {{sha512}} ...\n")),(0,u.kt)("p",null,"\u4e0a\u8ff0\u6807\u7b7e\u66f4\u8be6\u7ec6\u7684\u4f7f\u7528\u6559\u7a0b\u5927\u5bb6\u53ef\u4ee5\u53c2\u8003\u8fd9\u91cc",(0,u.kt)("a",{parentName:"p",href:"/docs/buildinlibs/lib_fuzz#fuzz-%E6%A0%87%E7%AD%BE%E5%AE%9A%E4%B9%89%E4%BB%A5%E5%8F%8A%E4%BD%BF%E7%94%A8"},"\u3010fuzz\u3011\u4f7f\u7528\u624b\u518c")),(0,u.kt)("h3",{id:"http-\u534f\u8bae\u5176\u4ed6-fuzz-\u65b9\u6cd5\uff1a"},"HTTP \u534f\u8bae\u5176\u4ed6 Fuzz \u65b9\u6cd5\uff1a"),(0,u.kt)("p",null,"\u5728\u4f7f\u7528 Yak \u7684\u65f6\u5019\uff0c\u5c24\u5176\u662f\u8c03\u8bd5\u4ee3\u7801\u7684\u65f6\u5019\uff0c\u6211\u4eec\u7ecf\u5e38\u60f3\u8981\u77e5\u9053\u4e00\u4e2a\u7ed3\u6784\uff0c\u5bf9\u8c61\u7a76\u7adf\u6709\u54ea\u4e9b\u65b9\u6cd5\u53ef\u7528\uff1f"),(0,u.kt)("p",null,"\u8fd9\u4e2a\u65f6\u5019\uff0c\u63a8\u8350\u5927\u5bb6\u4f7f\u7528 ",(0,u.kt)("inlineCode",{parentName:"p"},"desc")," \u8fd9\u4e2a\u5185\u7f6e\u7684\u65b9\u6cd5\u3002"),(0,u.kt)("p",null,"\u6211\u4eec\u6267\u884c\u4e0b\u9762\u4ee3\u7801\uff0c\u6211\u4eec\u6784\u5efa\u4e00\u4e2a\u6700\u57fa\u7840\u7684 HTTP \u8bf7\u6c42\uff0c\u7136\u540e\u5728\u4f7f\u7528 ",(0,u.kt)("inlineCode",{parentName:"p"},"desc(req)")," \u5c55\u793a req \u5177\u4f53\u6240\u6709\u7684\u53ef\u7528\u5b57\u6bb5"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-go"},"req, err := fuzz.HTTPRequest(`GET / HTTP/1.1\nHost: 127.0.0.1`)\ndie(err)\n\ndesc(req)\n")),(0,u.kt)("p",null,"\u6211\u4eec\u5c06\u5f97\u5230\u4e00\u4e2a\u975e\u5e38\u68d2\u7684\u7ed3\u679c\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-go"},"type palm/common/mutate.(FuzzHTTPRequest) struct {\n  Fields(\u53ef\u7528\u5b57\u6bb5): \n      Opts: []mutate.BuildFuzzHTTPRequestOption  \n  StructMethods(\u7ed3\u6784\u65b9\u6cd5/\u51fd\u6570): \n  PtrStructMethods(\u6307\u9488\u7ed3\u6784\u65b9\u6cd5/\u51fd\u6570): \n      // \u6279\u91cf\u53d1\u9001\u6784\u9020\u597d\u7684\u8bf7\u6c42\n      func Exec(v1 ...func httpPoolConfigOption(v1: *mutate.httpPoolConfig) ) return(chan *mutate._httpResult, error) \n\n      // Fuzz Cookie\n      func FuzzCookie(v1: interface {}, v2: interface {}) return(mutate.FuzzHTTPRequestIf) \n      func FuzzCookieRaw(v1: interface {}) return(mutate.FuzzHTTPRequestIf) \n\n      // Fuzz \u4e0a\u4f20\u8868\u5355\u4e2d\u7684\u5b57\u6bb5\n      func FuzzFormEncoded(v1: interface {}, v2: interface {}) return(mutate.FuzzHTTPRequestIf) \n\n      // Fuzz Get \u53c2\u6570\n      func FuzzGetParams(v1: interface {}, v2: interface {}) return(mutate.FuzzHTTPRequestIf) \n      func FuzzGetParamsRaw(v1 ...string) return(mutate.FuzzHTTPRequestIf) \n\n      // Fuzz HTTP Header\n      func FuzzHTTPHeader(v1: interface {}, v2: interface {}) return(mutate.FuzzHTTPRequestIf) \n\n      // \u6d4b\u8bd5\u65b9\u6cd5\n      func FuzzMethod(v1 ...string) return(mutate.FuzzHTTPRequestIf) \n\n      // \u6d4b\u8bd5\u8def\u5f84\n      func FuzzPath(v1 ...string) return(mutate.FuzzHTTPRequestIf) \n\n      // \u6d4b\u8bd5 Post \u4e2d\u53c2\u6570\n      func FuzzPostJsonParams(v1: interface {}, v2: interface {}) return(mutate.FuzzHTTPRequestIf) \n      func FuzzPostParams(v1: interface {}, v2: interface {}) return(mutate.FuzzHTTPRequestIf) \n      func FuzzPostRaw(v1 ...string) return(mutate.FuzzHTTPRequestIf) \n\n      // \u6d4b\u8bd5\u4e0a\u4f20\u6587\u4ef6\n      func FuzzUploadFile(v1: interface {}, v2: interface {}, v3: []uint8) return(mutate.FuzzHTTPRequestIf) \n      func FuzzUploadFileName(v1: interface {}, v2: interface {}) return(mutate.FuzzHTTPRequestIf) \n\n      // \u83b7\u53d6\u6240\u6709\u5e38\u89c1\u53c2\u6570\n      func GetCommonParams() return([]*mutate.FuzzHTTPRequestParam) \n      func GetCookieParams() return([]*mutate.FuzzHTTPRequestParam) \n      func GetGetQueryParams() return([]*mutate.FuzzHTTPRequestParam) \n      func GetOriginHTTPRequest() return(*http.Request, error) \n      func GetPostJsonParams() return([]*mutate.FuzzHTTPRequestParam) \n      func GetPostParams() return([]*mutate.FuzzHTTPRequestParam) \n      ...\n\n      // \u5224\u65ad Body \u7684\u7c7b\u578b\n      func IsBodyFormEncoded() return(bool) \n      func IsBodyJsonEncoded() return(bool) \n      func IsBodyUrlEncoded() return(bool) \n      func IsEmptyBody() return(bool) \n\n      // Hash \u503c\uff0c\u4e00\u822c\u7528\u6765\u505a\u53c2\u6570\u53bb\u91cd\n      func ParamsHash() return(string, error) \n      func Results() return([]*http.Request, error) \n      func Show() \n}\n")),(0,u.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,u.kt)("div",{parentName:"div",className:"admonition-heading"},(0,u.kt)("h5",{parentName:"div"},(0,u.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,u.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,u.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,u.kt)("div",{parentName:"div",className:"admonition-content"},(0,u.kt)("p",{parentName:"div"},"\u5982\u679c\u5927\u5bb6\u6709\u9700\u8981\uff0c\u5bf9\u4efb\u4f55\u6709\u7591\u60d1\u7684\u5bf9\u8c61\uff0c\u90fd\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u51fd\u6570\uff0c\u5c06\u4f1a\u63cf\u8ff0\u6240\u6709\u516c\u5f00\u53ef\u7528\u7684\u65b9\u6cd5\u3002"))),(0,u.kt)("p",null,"\u5f53\u5927\u5bb6\u770b\u5230\u4e0a\u8ff0\u7ed3\u6784\u4e4b\u540e\uff0c\u5e94\u8be5\u5c31\u53ef\u4ee5\u652f\u6301\u6211\u4eec\u7684 Yak \u7248\u672c\u76ee\u524d\u652f\u6301\u591a\u5c11\u79cd fuzz \u7684\u65b9\u6cd5\uff1f"),(0,u.kt)("h2",{id:"\u5982\u4f55\u6267\u884c-fuzz-\u540e\u7684\u8bf7\u6c42\uff1f"},"\u5982\u4f55\u6267\u884c Fuzz \u540e\u7684\u8bf7\u6c42\uff1f"),(0,u.kt)("p",null,"\u5927\u5bb6\u53ef\u80fd\u6ce8\u610f\u5230\u4e86\uff0c\u6211\u4eec\u53d1\u73b0\u9488\u5bf9 ",(0,u.kt)("inlineCode",{parentName:"p"},"FuzzHTTPRequest/Batch")," \u8fd9\u4e2a\u5bf9\u8c61\uff0c\u6211\u4eec\u6709\u4e00\u4e2a\u65b9\u6cd5\uff1a",(0,u.kt)("inlineCode",{parentName:"p"},".Exec()")),(0,u.kt)("p",null,"\u8fd9\u4e2a\u65b9\u6cd5\u672c\u8d28\u4e0a\u5c31\u662f\u628a\u6211\u4eec\u6784\u9020\u7684\u8bf7\u6c42\u53d1\u9001\u51fa\u53bb\uff08\u9ed8\u8ba4\u5e76\u53d1\u4e3a 50\uff0c\u652f\u6301\u6279\u91cf\u53d1\u9001\u8bf7\u6c42\uff09\u3002"),(0,u.kt)("p",null,"\u6211\u4eec\u7528\u4e00\u4e2a\u6700\u7b80\u5355\u7684\u4f8b\u5b50\u8bf4\u660e\u4e00\u4e0b\u57fa\u7840\u7528\u6cd5"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-go"},'basePacket = `\nGET / HTTP/1.1\nHost: www.example.com\n`\n// \u521b\u5efa\u4e00\u4e2a\u53ef Fuzz \u7684\u8bf7\u6c42\nfReq, err := fuzz.HTTPRequest(basePacket)\ndie(err)\n\n// \u66ff\u6362\u6389\u8bf7\u6c42\u4e2d\u7684\u67d0\u4e2a Get \u53c2\u6570\uff0c\u4f7f\u7528\u5e26 fuzz \u6807\u7b7e\u7684 []string \u8fdb\u884c Fuzz\nres, err := fReq.FuzzGetParams("testValue", ["test", "alert(1)", "prompt`34{{char(a-c)}}`"]).Exec()\ndie(err)\n\nfor element := range res {\n    printf("status: %3d bodylen: %7d  url: %v\\n", element.Response.StatusCode, len(element.ResponseRaw), element.Url)\n}\n')),(0,u.kt)("p",null,"\u5927\u5bb6\u89c2\u5bdf\u6211\u4eec\u8fd9\u4e2a\u4f8b\u5b50\uff0c\u53d1\u73b0\u6211\u4eec\u53ea\u662f\u628a\u524d\u9762\u51e0\u8282\u51fa\u73b0\u7684\u4f8b\u5b50\u62ff\u8fc7\u6765\uff0c\u628a ",(0,u.kt)("inlineCode",{parentName:"p"},".Show()")," \u6362\u6210\u4e86 ",(0,u.kt)("inlineCode",{parentName:"p"},".Exec()"),"\uff0c\u5e76\u5bf9\u7ed3\u679c\u8fdb\u884c\u5904\u7406\uff0c\u628a StatusCode \u548c ResponseRaw \u957f\u5ea6\u6253\u5370\u51fa\u6765\u3002"),(0,u.kt)("p",null,"\u4e0a\u8ff0\u7b80\u5355 Fuzz \u811a\u672c\u83b7\u5f97\u7684\u7ed3\u679c\u4e3a\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-go"},"status: 200 bodylen:    1610  url: http://www.example.com/?testValue=prompt%6034a%60\nstatus: 200 bodylen:    1610  url: http://www.example.com/?testValue=prompt%6034c%60\nstatus: 200 bodylen:    1610  url: http://www.example.com/?testValue=prompt%6034b%60\nstatus: 200 bodylen:    1626  url: http://www.example.com/?testValue=test\nstatus: 200 bodylen:    1610  url: http://www.example.com/?testValue=alert%281%29\n")),(0,u.kt)("h2",{id:"\u7ed3\u8bed"},"\u7ed3\u8bed"),(0,u.kt)("p",null,"\u6211\u76f8\u4fe1\u8bfb\u8005\u770b\u5230\u8fd9\u4e00\u6b65\uff0c\u5df2\u7ecf\u660e\u767d\u4e86 Yak \u662f\u5982\u4f55\u505a Web Fuzz \u7684\u57fa\u7840\u8bbe\u65bd\u7684\uff0c\u4f5c\u4e3a\u7f16\u7a0b\u4eba\u5458\u6211\u4eec\u7f16\u5199\u7684\u811a\u672c\u5b9e\u9645\u5e76\u4e0d\u591a\uff0c\u6211\u5728\u7f16\u5199\u6559\u7a0b\u7684\u65f6\u5019\uff0c\u4e5f\u5c3d\u91cf\u628a\u4ee3\u7801\u63a7\u5236\u5728\u4e00\u773c\u5c31\u80fd\u770b\u5b8c\u7684\u957f\u5ea6\u3002 "),(0,u.kt)("p",null,"Happy Game!"))}z.isMDXComponent=!0}}]);