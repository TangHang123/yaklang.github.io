(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[5226],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return m},kt:function(){return z}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),c=p(t),z=a,f=c["".concat(i,".").concat(z)]||c[z]||s[z]||o;return t?r.createElement(f,l(l({ref:n},m),{},{components:t})):r.createElement(f,l({ref:n},m))}));function z(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=c;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3297:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return i},toc:function(){return p},default:function(){return s}});var r=t(4034),a=t(9973),o=(t(7294),t(3905)),l={sidebar_position:10},u="Web Fuzz \u9ad8\u7ea7\u6559\u7a0b",i={unversionedId:"newforyak/fuzz_for_more",id:"newforyak/fuzz_for_more",isDocsHomePage:!1,title:"Web Fuzz \u9ad8\u7ea7\u6559\u7a0b",description:"\u6211\u4eec\u5728\u57fa\u7840\u6559\u7a0b\u4e2d\uff0c\u8bb2\u89e3\u4e86\u6700\u6700\u57fa\u7840\u7684\u7528\u6cd5\uff0c\u4f46\u662f\u7ec6\u5fc3\u7684\u8bfb\u8005\u53d1\u73b0\uff0cWeb Fuzz \u57fa\u7840\u7bc7\u4e2d\u7684\u5185\u5bb9\u5e76\u4e0d\u8db3\u4ee5\u652f\u6301\u6211\u4eec\u5b8c\u5168\u5b8c\u6210 Fuzz \u64cd\u4f5c",source:"@site/docs/newforyak/fuzz_for_more.md",sourceDirName:"newforyak",slug:"/newforyak/fuzz_for_more",permalink:"/en/docs/newforyak/fuzz_for_more",editUrl:"https://github.com/yaklang/docs/newforyak/fuzz_for_more.md",version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Web Fuzz \u57fa\u7840",permalink:"/en/docs/newforyak/fuzz_tutorial"},next:{title:"\u5982\u4f55\u7f16\u5199\u4f18\u79c0\u7684 PoC/Exp \ud83d\udc7b",permalink:"/en/docs/newforyak/how_to_make_poc"}},p=[{value:"\u4f7f\u7528 web Fuzz \u6765\u83b7\u53d6\u53ef\u6d4b\u53c2\u6570",id:"\u4f7f\u7528-web-fuzz-\u6765\u83b7\u53d6\u53ef\u6d4b\u53c2\u6570",children:[{value:"\u5982\u4f55\u4f7f\u7528\u53d1\u73b0\u7684\u53ef Fuzz \u7684\u53c2\u6570\uff1f",id:"\u5982\u4f55\u4f7f\u7528\u53d1\u73b0\u7684\u53ef-fuzz-\u7684\u53c2\u6570\uff1f",children:[]},{value:"Fuzz \u66f4\u591a\u7684\u53c2\u6570",id:"fuzz-\u66f4\u591a\u7684\u53c2\u6570",children:[]}]},{value:"\u914d\u5408 <code>crawler</code> \u6765\u4f7f\u7528 <code>fuzz</code>",id:"\u914d\u5408-crawler-\u6765\u4f7f\u7528-fuzz",children:[]},{value:"\u914d\u5408 <code>mitm</code> \u6765\u4f7f\u7528 <code>fuzz</code>",id:"\u914d\u5408-mitm-\u6765\u4f7f\u7528-fuzz",children:[]}],m={toc:p};function s(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"web-fuzz-\u9ad8\u7ea7\u6559\u7a0b"},"Web Fuzz \u9ad8\u7ea7\u6559\u7a0b"),(0,o.kt)("p",null,"\u6211\u4eec\u5728\u57fa\u7840\u6559\u7a0b\u4e2d\uff0c\u8bb2\u89e3\u4e86\u6700\u6700\u57fa\u7840\u7684\u7528\u6cd5\uff0c\u4f46\u662f\u7ec6\u5fc3\u7684\u8bfb\u8005\u53d1\u73b0\uff0cWeb Fuzz \u57fa\u7840\u7bc7\u4e2d\u7684\u5185\u5bb9\u5e76\u4e0d\u8db3\u4ee5\u652f\u6301\u6211\u4eec\u5b8c\u5168\u5b8c\u6210 Fuzz \u64cd\u4f5c"),(0,o.kt)("p",null,"\u5176\u4e2d\u5927\u5bb6\u9047\u5230\u7684\u6700\u5927\u7684\u95ee\u9898\u53ef\u80fd\u5c31\u662f\uff0c\u81ea\u52a8\u5316\u60c5\u51b5\u4e0b\uff1a",(0,o.kt)("strong",{parentName:"p"},"\u7528\u6237\u8f93\u5165/\u88ab\u52a8\u626b\u63cf\u8f93\u5165\u7684\u8bf7\u6c42\uff0c\u6211\u4eec\u5e76\u4e0d\u77e5\u9053\u8bf7\u6c42\u4e2d\u6709\u54ea\u4e9b\u53c2\u6570"),"\uff0c\u8fde\u53c2\u6570\u90fd\u4e0d\u77e5\u9053\uff0c\u66f4\u4e0d\u8981\u8bf4\u5bf9\u53c2\u6570\u8fdb\u884c\u64cd\u4f5c\u4e86\u3002"),(0,o.kt)("h2",{id:"\u4f7f\u7528-web-fuzz-\u6765\u83b7\u53d6\u53ef\u6d4b\u53c2\u6570"},"\u4f7f\u7528 web Fuzz \u6765\u83b7\u53d6\u53ef\u6d4b\u53c2\u6570"),(0,o.kt)("p",null,"\u7ec6\u5fc3\u7684\u670b\u53cb\u53ef\u80fd\u5df2\u7ecf\u89c2\u5bdf\u5230\u4e86\uff0c\u5728\u6211\u4eec\u7684\u4e0a\u4e00\u8282\u5c55\u793a\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"*FuzzHTTPRequest")," \u7ed3\u6784\u4f53\u4e2d\uff0c\u6709\u51e0\u4e2a\u5b57\u6bb5\u53ef\u80fd\u548c\u6211\u4eec\u5728\u8fd9\u4e00\u5c0f\u8282\u4e2d\u7684\u4e3b\u8981\u76ee\u7684\u6709\u5173"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// \u83b7\u53d6\u6240\u6709\u5e38\u89c1\u53c2\u6570\nfunc GetCommonParams() return([]*mutate.FuzzHTTPRequestParam) \nfunc GetCookieParams() return([]*mutate.FuzzHTTPRequestParam) \nfunc GetGetQueryParams() return([]*mutate.FuzzHTTPRequestParam) \nfunc GetPostJsonParams() return([]*mutate.FuzzHTTPRequestParam) \nfunc GetPostParams() return([]*mutate.FuzzHTTPRequestParam) \n...\n")),(0,o.kt)("p",null,"\u6211\u4eec\u53d1\u73b0\u4e0a\u8ff0\u7684\u65b9\u6cd5\u5f15\u5165\u4e86\u4e00\u4e2a\u7ed3\u6784\u4f53 ",(0,o.kt)("inlineCode",{parentName:"p"},"*mutate.FuzzHTTPRequestParam"),"\uff0c\u8fd9\u4e2a\u7ed3\u6784\u4f53\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u4ee3\u7801 ",(0,o.kt)("inlineCode",{parentName:"p"},"desc")," \u51fa\u8fd9\u4e2a\u5185\u5bb9"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"req, err := fuzz.HTTPRequest(`GET /?test=1 HTTP/1.1\nHost: 127.0.0.1`)\ndie(err)\n\nfor _, param := range req.GetGetQueryParams() {\n    desc(param)\n}\n")),(0,o.kt)("p",null,"\u6211\u4eec\u901a\u8fc7\u4e0a\u8ff0\u4ee3\u7801\uff0c\u6784\u5efa\u4e86\u4e00\u4e2a GET \u53c2\u6570\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"test")," \u7684 HTTP \u8bf7\u6c42\u3002\u5728\u6ca1\u6709\u8fdb\u884c Fuzz \u7684\u60c5\u51b5\u4e0b\u6211\u4eec\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},".GetGetQueryParams()")," \u6765\u83b7\u53d6\u6240\u6709\u7684 Get \u53c2\u6570\u7684\u53ef\u6d4b\u8bd5\u7684\u53c2\u6570\uff0c\u6211\u4eec\u76f4\u63a5\u6765 ",(0,o.kt)("inlineCode",{parentName:"p"},"desc(param)")," \u53ef\u4ee5\u63cf\u8ff0\u8fd9\u4e2a\u7ed3\u6784\u4f53\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type palm/common/mutate.(FuzzHTTPRequestParam) struct {\n  Fields(\u53ef\u7528\u5b57\u6bb5): \n  StructMethods(\u7ed3\u6784\u65b9\u6cd5/\u51fd\u6570): \n  PtrStructMethods(\u6307\u9488\u7ed3\u6784\u65b9\u6cd5/\u51fd\u6570): \n      // \u8fdb\u884c\u9488\u5bf9\u8fd9\u4e2a\u53c2\u6570\u503c\u7684 Fuzz\n      func Fuzz(v1 ...interface {}) return(mutate.FuzzHTTPRequestIf) \n\n      // \u53c2\u6570\u540d\n      func Name() return(string) \n\n      // \u8fd9\u4e2a\u53c2\u6570\u6240\u5c5e\u7684\u4f4d\u7f6e\n      func Position() return(string) \n\n      // \u8fd9\u4e2a\u53c2\u6570\u7684\u539f\u59cb\u503c\n      func Value() return(interface {}) \n}\n")),(0,o.kt)("p",null,"\u6211\u4eec\u89c2\u5bdf\u5230\u4e86\u8fd9\u4e2a\u7ed3\u6784\u4f53\u4e2d\uff0c\u6211\u4eec\u6709\u56db\u4e2a\u5b57\u6bb5\u3002\u5206\u522b\u4e3a Fuzz \u529f\u80fd\uff0c\u53c2\u6570\u540d\uff0c\u6f0f\u6d1e\u4f4d\u7f6e\uff0c\u6f0f\u6d1e\u7684\u503c\u3002\u5177\u4f53\u5982\u4f55\u6d4b\u8bd5\uff1f\u6211\u4eec\u6765\u770b\u5bf9\u4e0a\u8ff0\u4ee3\u7801\u66f4\u8be6\u7ec6\u7684\u89e3\u6790\u548c\u7528\u4f8b"),(0,o.kt)("h3",{id:"\u5982\u4f55\u4f7f\u7528\u53d1\u73b0\u7684\u53ef-fuzz-\u7684\u53c2\u6570\uff1f"},"\u5982\u4f55\u4f7f\u7528\u53d1\u73b0\u7684\u53ef Fuzz \u7684\u53c2\u6570\uff1f"),(0,o.kt)("p",null,"\u6211\u4eec\u4e0a\u4e00\u8282\u5c55\u793a\u4e86\uff0c\u5982\u4f55\u83b7\u53d6 Get \u4e2d\u7684\u53c2\u6570\uff0c\u90a3\u4e48\u6211\u4eec\u63a5\u4e0b\u6765\u5bf9\u4e0a\u4e00\u8282\u7684\u4e00\u70b9\u70b9\u4ee3\u7801\u8fdb\u884c\u5c0f\u4fee\u6539\uff0c\u6211\u4eec\u518d\u589e\u52a0\u4e00\u4e2a\u53c2\u6570\uff0c\u5e76\u6253\u5370\u51fa\u8fd9\u4e9b\u53c2\u6570\u7684\u4e00\u4e9b\u5c5e\u6027\uff0c\u5e76\u5c1d\u8bd5\u5bf9\u53c2\u6570\u8fdb\u884c Fuzz \u770b\u4e00\u4e0b\u5b9e\u9645\u4f7f\u7528\u6548\u679c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'req, err := fuzz.HTTPRequest(`GET /?test=1&key1=23 HTTP/1.1\nHost: 127.0.0.1`)\ndie(err)\n\nfuzzValue = "this_is_payload"\n\nfor _, param := range req.GetGetQueryParams() {\n    printf("Found Param[%10s]:\\n    ParamName: %v\\n    OriginValue: %v\\n\\n", param.Position(), param.Name(), param.Value())\n    param.Fuzz(fuzzValue).Show()\n    println("-----------------------------------------------")\n}\n')),(0,o.kt)("p",null,"\u6211\u4eec\u770b\u4e0a\u9762\uff0c\u589e\u52a0\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"test=1&key1=23")," \u8fd9\u4e2a\u53c2\u6570\u6bb5\uff0c\u589e\u52a0\u4e86\u4e24\u4e2a\u53c2\u6570\uff0c\u9488\u5bf9\u53c2\u6570\u7684\u6d4b\u8bd5\uff0c\u6211\u4eec\u8f93\u51fa ",(0,o.kt)("inlineCode",{parentName:"p"},"Position/Name/Value")," \u4e09\u4e2a\u5c5e\u6027\uff0c\u540c\u65f6\u9488\u5bf9\u8fd9\u4e2a\u53c2\u6570\u8fdb\u884c fuzz\uff0c\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"this_is_payload")," \u8fdb\u884c\u53c2\u6570\u66ff\u6362\u3002\u6267\u884c\u4e4b\u540e\u7ed3\u679c\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Found Param[ get-query]:\n    ParamName: key1\n    OriginValue: [23]\n\nGET /?key1=this_is_payload&test=1 HTTP/1.1\nHost: 127.0.0.1\nContent-Length: 0\n\n\n-----------------------------------------------\nFound Param[ get-query]:\n    ParamName: test\n    OriginValue: [1]\n\nGET /?key1=23&test=this_is_payload HTTP/1.1\nHost: 127.0.0.1\nContent-Length: 0\n\n\n-----------------------------------------------\n")),(0,o.kt)("p",null,"\u5f53\u6211\u4eec\u770b\u5230\u8fd9\u4e2a\u7ed3\u679c\u7684\u65f6\u5019\uff0c\u7ed3\u679c\u662f\u7b26\u5408\u9884\u671f\u7684\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"this_is_payload")," \u5206\u522b\u66ff\u6362\u4e86\u4e24\u4e2a\u53c2\u6570\u503c\u3002"),(0,o.kt)("p",null,"\u5f53\u6211\u4eec\u5b8c\u6210\u4e86\u4e0a\u8ff0\u4f8b\u5b50\uff0c\u6211\u4eec\u6211\u4eec\u53d1\u73b0\uff0cYak Fuzz \u5e2e\u4f60\u505a\u4e86\u5f88\u591a\u4e8b"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u89e3\u6790\u4e86 HTTP \u6570\u636e\u5305"),(0,o.kt)("li",{parentName:"ol"},"\u5206\u6790\u4e86\u6570\u636e\u5305\u4e2d Get \u7684\u53ef\u6d4b\u53c2\u6570"),(0,o.kt)("li",{parentName:"ol"},"\u4f7f\u7528 Fuzz \u6838\u5fc3\u529f\u80fd\uff0c\u5168\u81ea\u52a8\u5206\u522b\u66ff\u6362\u4e86\u53ef\u6d4b\u53c2\u6570\u4e2d\u7684\u503c"),(0,o.kt)("li",{parentName:"ol"},"\u628a Payload \u878d\u5165\u4e86\u65b0\u7684\u6570\u636e\u5305\uff0c\u5b9e\u73b0\u4e86 Fuzz \u7684\u6848\u4f8b")),(0,o.kt)("p",null,"\u77ed\u77ed\u51e0\u884c\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5b8c\u6210\u4e86\u9488\u5bf9\u4e00\u4e2a\u6570\u636e\u5305\u7684\u5168\u81ea\u52a8\u53c2\u6570\u53d1\u73b0\u548c Fuzz \u6d4b\u8bd5\u529f\u80fd\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u8bf4\u6362\u6210 Python/Golang\uff0c\u5728\u6ca1\u6709\u7c7b\u4f3c\u7684\u57fa\u7840\u8bbe\u65bd\uff0c\u5982\u679c\u8981\u5b8c\u6210\u4e0a\u9762\u7684\u4ee3\u7801\uff0c\u53ef\u80fd\u5e76\u4e0d\u662f\u4e00\u4ef6\u5bb9\u6613\u7684\u4e8b\u60c5\u3002\u4f46\u662f\u7528\u6237\u5982\u679c\u4f7f\u7528 Yak \u7684\u57fa\u7840\u8bbe\u65bd\uff0c\u5b8c\u6210\u8fd9\u6837\u7684\u4ee3\u7801\u5176\u5b9e\u662f\u4e00\u4ef6\u975e\u5e38\u5bb9\u6613\u7684\u4e8b\u60c5\u3002\u867d\u7136\u8fd9\u4e9b\u57fa\u7840\u8bbe\u65bd\u7684\u7f16\u5199\u4e5f\u5e76\u4e0d\u662f\u4e00\u4ef6\u5bb9\u6613\u7684\u4e8b\u60c5\uff0c\u597d\u5728 Yak \u5b58\u5728\u7684\u610f\u4e49\u5c31\u662f\u4e3a\u5927\u5bb6\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002"),(0,o.kt)("h3",{id:"fuzz-\u66f4\u591a\u7684\u53c2\u6570"},"Fuzz \u66f4\u591a\u7684\u53c2\u6570"),(0,o.kt)("p",null,"\u5f53\u524d\uff0cyak fuzz \u652f\u6301\u5982\u4e0b\u51e0\u79cd\u60c5\u51b5\u7684\u53c2\u6570\u7684 Fuzz"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Get \u4e2d\u7684\u53c2\u6570"),(0,o.kt)("li",{parentName:"ol"},"Post \u4e2d\u7684\u53c2\u6570\uff08urlencoded \u683c\u5f0f\uff09"),(0,o.kt)("li",{parentName:"ol"},"Post \u4e2d\u7684\u53c2\u6570\uff08json object \u683c\u5f0f\uff09"),(0,o.kt)("li",{parentName:"ol"},"Cookie \u4e2d\u7684\u53c2\u6570\uff08\u901a\u7528 kv-pair \u683c\u5f0f\uff0c\u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"li"},"key1=value1; key2=value2")," \u7b49\uff09"),(0,o.kt)("li",{parentName:"ol"},"\u4e0a\u4f20\u6587\u4ef6\u4e2d\u7684\u53c2\u6570\uff08\u5305\u542b\u6587\u4ef6\uff09")),(0,o.kt)("p",null,"\u8fd9\u4e9b\u53c2\u6570\u4e00\u822c\u6765\u8bf4\uff0c\u6211\u4eec\u7684\u53c2\u6570\u901a\u7528\u7684\u5c5e\u6027\u5e94\u8be5\u90fd\u662f\u7edf\u4e00\u7684\uff0c\u4e0d\u540c\u7684\u53c2\u6570\u7c7b\u578b\uff0c\u4ed6\u7684 Position \u662f\u4e0d\u4e00\u6837\u7684\u3002"),(0,o.kt)("p",null,"\u540c\u65f6\u6211\u4eec\u4e3a\u5e38\u89c1\u7684\u53c2\u6570\u63d0\u4f9b\u4e86\u6d4b\u8bd5\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},".GetCommonParams()")," \u8fd9\u4e2a\u65b9\u6cd5\u53ef\u4ee5\u628a Get \u4e2d\u7684\u53c2\u6570\uff0cPost \u4e2d\u7684\u53c2\u6570\u4ee5\u53ca Post Json Object \u4f5c\u4e3a\u96c6\u5408\u8fdb\u884c\u8fd4\u56de\u3002"),(0,o.kt)("h2",{id:"\u914d\u5408-crawler-\u6765\u4f7f\u7528-fuzz"},"\u914d\u5408 ",(0,o.kt)("inlineCode",{parentName:"h2"},"crawler")," \u6765\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"h2"},"fuzz")),(0,o.kt)("p",null,"\u5728\u6211\u4eec\u5b8c\u6210\u524d\u9762\u7684\u6240\u6709\u6559\u7a0b\uff0c\u5927\u5bb6\u80af\u5b9a\u5df2\u7ecf\u6709\u4e86\u81ea\u5df1\u7684\u60f3\u6cd5\u3002\u5982\u679c\u7528\u6237\u719f\u7ec3\u638c\u63e1\u4e86\u6211\u4eec\u4e0a\u8ff0\u7684\u6240\u6709\u529f\u80fd\uff0c\u53ef\u80fd\u5df2\u7ecf\u5728\u76d8\u7b97\u7740\u6211\u4eec\u53ef\u4ee5\u4ece\u54ea\u4e2a\u5730\u65b9\u5bfb\u627e\u6570\u636e\u5305\uff0c\u8ba9\u4ed6\u8fdb\u5165\u6211\u4eec\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"fuzz")," \u6a21\u5757\u4e2d\u3002"),(0,o.kt)("p",null,"\u5e78\u8fd0\u7684\u662f\uff0c\u6211\u4eec yak \u4e2d\u5e76\u4e0d\u7f3a\u4e4f\u628a\u626b\u63cf\u76ee\u6807\u7684\u6570\u636e\u5305\u8fdb\u5165 fuzz \u7684\u65b9\u6cd5\u3002\u6211\u4eec\u5f88\u81ea\u7136\u7684\u4f1a\u60f3\u5230\uff0c\u6211\u4eec\u505a\u4e00\u4e2a\u722c\u866b\uff0c\u628a\u722c\u5230\u7684 HTTP \u6570\u636e\u5305\u4ea4\u7ed9 fuzz \u6a21\u5757\uff0c\u5c31\u53ef\u4ee5\u8f7b\u6613\u505a\u5230\u9488\u5bf9\u4e8e\u4e00\u4e2a Web \u7ad9\u70b9\u7684\u5e38\u89c1\u53c2\u6570\u7684\u5168\u8986\u76d6\u3002"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("a",{parentName:"p",href:"/docs/newforyak/scan_and_crawler"},"\u3010\u5b9e\u62182: \u6307\u7eb9\u626b\u63cf+\u57fa\u7840\u722c\u866b\u3011")," \u8fd9\u4e00\u8282\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u505a\u5230\u722c\u866b\u722c\u53d6\u6307\u7eb9\u626b\u63cf\u7684\u7ed3\u679c\uff0c\u5c3d\u53ef\u80fd\u83b7\u53d6\u4e00\u4e2a Web \u5e94\u7528\u7684\u5e38\u89c1\u7684 URL \u4e0e\u53ef\u626b\u63cf\u7684\u6570\u636e\u5305\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'loglevel("error")\n\nres, err := crawler.Start(cli.String("target"), crawler.maxRequest(100))\ndie(err)\n\nfor r := range res {\n    url = r.Url()\n\n    rsp, err := r.Response()\n    if err != nil {\n        log.error("fetch [%v]\'s response err: %v", r.Url(), err)\n        continue\n    }\n    \n    fuzzReq, err := fuzz.HTTPRequest(r.Request())\n    if err != nil {\n        log.error("create fuzz request [%s] failed: %v", url, err)\n        continue\n    }\n\n    for _, param := range fuzzReq.GetCommonParams() {\n        param.Fuzz("test-your-payload!!!!!").Show()\n    }\n}\n')),(0,o.kt)("p",null,"\u6211\u4eec\u5728\u4e0a\u8ff0\u811a\u672c\u4e2d\uff0c\u5206\u522b\u4f7f\u7528\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"crawler")," \u4e0e ",(0,o.kt)("inlineCode",{parentName:"p"},"fuzz")," \u6a21\u5757\uff0c\u628a crawler \u7684\u7ed3\u679c\uff0c\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"fuzz.HTTPRequest")," \u6784\u9020\u6210\u4e86\u53ef\u4ee5\u8fdb\u884c Fuzz \u64cd\u4f5c\u7684\u8bf7\u6c42\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"li"},"crawler.Start")," \u4ece\u547d\u4ee4\u884c\u4e2d\u8bfb\u51fa\u4e86\u67d0\u4e2a\u7279\u5b9a\u53c2\u6570\u7684\u503c\uff08\u626b\u63cf\u76ee\u6807\uff09\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"li"},"fuzz.HTTPRequest(crawlerResult.Request())")," \u6784\u9020\u4e00\u4e2a\u53ef\u4ee5\u8fdb\u884c fuzz \u7684\u8bf7\u6c42\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"li"},"*FuzzHTTPRequest.GetCommonParams()")," \u83b7\u53d6\u60f3\u8981\u6d4b\u8bd5\u7684\u8bf7\u6c42\u7684\u901a\u7528\u53c2\u6570\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5bf9\u83b7\u53d6\u5230\u7684\u53c2\u6570\u8fdb\u884c\u503c\u7684\u66ff\u6362\uff1a\u66ff\u6362\u6210 ",(0,o.kt)("inlineCode",{parentName:"li"},"test-your-payload!!!!!")),(0,o.kt)("li",{parentName:"ol"},"\u628a\u66ff\u6362\u540e\u7684\u8bf7\u6c42\u8fdb\u884c\u5c55\u793a/\u6267\u884c\u3002")),(0,o.kt)("p",null,"\u6211\u4eec\u9488\u5bf9\u67d0\u4e9b\u76ee\u6807\u8fdb\u884c\u6d4b\u8bd5\uff0c\u6267\u884c"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"yak ./fuzz_with_crawler.yak -target example.com")),(0,o.kt)("p",null,"\u6267\u884c\u7ed3\u679c\u4e3a\uff08\u7701\u7565\uff0c\u8131\u654f\u6253\u7801\u4e86\u5f88\u5927\u4e00\u90e8\u5206\u4fe1\u606f\uff0c\u5927\u5bb6\u4e5f\u4e0d\u5fc5\u731c\u6d4b\u5b9e\u9645\u626b\u63cf\u73af\u5883\uff0c\u53ef\u4ee5\u81ea\u5df1\u590d\u5236\u6267\u884c\u8fdb\u884c\u5b66\u4e60\uff09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"...\n...\n\nGET /favicon.ico?n=test-your-payload%21%21%21%21%21 HTTP/1.1\nHost: ************\nContent-Length: 0\nUser-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36\n\n\nGET /37f3150736a50df4f217c4984c7b652b.html?n=test-your-payload%21%21%21%21%21 HTTP/1.1\nHost: ************\nContent-Length: 0\nUser-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36\n\n\nGET /65880dc9cdfc3f52ca817f13339c1c0f.html?n=test-your-payload%21%21%21%21%21 HTTP/1.1\nHost: ************\nContent-Length: 0\nUser-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36\n\n\n")),(0,o.kt)("p",null,"\u6211\u4eec\u770b\u5230\u7ed3\u679c\uff0c\u5927\u5bb6\u53d1\u73b0\u6211\u4eec\u8bbe\u7f6e\u7684 Payload \u6210\u529f\u66ff\u6362\u6389\u4e86\u539f\u6765\u7684\u53c2\u6570\u503c\uff0c\u6211\u4eec\u5b9e\u73b0\u4e86\u722c\u866b+Web Fuzz\u7684\u57fa\u7840\u529f\u80fd\uff0c\u5e38\u89c1\u7684\u666e\u901a\u5e94\u7528\u7684\u626b\u63cf\u624b\u6bb5\u5df2\u7ecf\u5b8c\u5168\u5177\u5907\u4e86\u3002"),(0,o.kt)("h2",{id:"\u914d\u5408-mitm-\u6765\u4f7f\u7528-fuzz"},"\u914d\u5408 ",(0,o.kt)("inlineCode",{parentName:"h2"},"mitm")," \u6765\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"h2"},"fuzz")),(0,o.kt)("p",null,"\u6211\u4eec\u5b9e\u9645\u4e0a\u660e\u786e\u77e5\u9053\uff0c\u722c\u866b\u8fdc\u8fdc\u662f\u4e0d\u591f\u7684\uff0c\u65e5\u5e38\u9488\u5bf9\u5e26\u6709 Cookie / Authorization JWT \u8ba4\u8bc1\u7684\u5404\u79cd\u5e38\u89c1\u5e94\u7528\uff0c\u6700\u6709\u6548\u7684\u65b9\u5f0f\u5176\u5b9e\u662f\u901a\u8fc7\u4e2d\u95f4\u4eba\u52ab\u6301\u6765\u83b7\u53d6\u5177\u4f53\u7684 HTTP \u7684\u5305\uff0c\u7136\u540e\u9488\u5bf9\u8fd9\u4e2a\u5305\u6765\u53d1\u8d77 Fuzz\u3002\u6211\u4eec\u5728\u4e4b\u524d\u7684\u6587\u6863\u4e2d\uff0c\u5df2\u7ecf\u4e86\u89e3\u8fc7\u5982\u4f55\u8fdb\u884c\u88ab\u52a8\u626b\u63cf ",(0,o.kt)("a",{parentName:"p",href:"/docs/newforyak/passive_scan"},"\u3010\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"a"},"mitm"),"\u3011\u8fdb\u884c\u88ab\u52a8\u626b\u63cf"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="fuzz_with_mitm.yak" {3-5}',title:'"fuzz_with_mitm.yak"',"{3-5}":!0},'loglevel(`info`)\n\ngo func {\n    err = mitm.Start(5534, mitm.callback(func(isHttps, req, rsp) {\n        http.show(req)\n        fReq, err := fuzz.HTTPRequest(req)\n        if err != nil {\n            log.error("http request failed: %s", err)\n            return\n        }\n        for _, r := range fReq.GetCommonParams() {\n            r.Fuzz("this_is_fuzzing_payload").Show()\n        }\n    }))\n    die(err)\n}\n\nsleep(1)\nlog.info("start to send request with proxy")\n\nrsp, err := http.Get("http://www.example.com/?test=abc", http.proxy("http://127.0.0.1:5534"))\ndie(err)\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"mitm")," \u7684\u4ee3\u7801\u5176\u5b9e\u5927\u5bb6\u53ef\u80fd\u5df2\u7ecf\u5f88\u719f\u6089\u4e86\uff0c\u5b9e\u9645\u4e0a\u5728\u4f7f\u7528\u7684\u8fc7\u7a0b\u4e2d\u8fd9\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"mitm")," \u7684\u53ef\u5851\u6027\u975e\u5e38\u9ad8\uff0c\u5982\u679c\u6211\u4eec\u8bbe\u7f6e\u4e86\u56de\u8c03\u51fd\u6570\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5728\u56de\u8c03\u51fd\u6570\u4e2d\u53d6\u51fa\u9700\u8981\u6d4b\u8bd5\u7684\u8bf7\u6c42\uff0c\u901a\u8fc7\u8fd9\u4e2a\u8bf7\u6c42\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"fuzz")," \u6784\u9020\u53ef\u7528\u4e8e\u6a21\u7cca\u6d4b\u8bd5\u7684\u8bf7\u6c42\uff0c\u540c\u65f6\u628a\u8fd9\u4e2a\u8bf7\u6c42\u53d1\u9001\u51fa\u6765\uff0c\u4ea4\u7ed9\u5176\u4ed6\u7684\u7b97\u6cd5\u8fdb\u884c\u6f0f\u6d1e\u68c0\u6d4b\u3002"))}s.isMDXComponent=!0}}]);