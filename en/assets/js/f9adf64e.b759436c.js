(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[2461],{3905:function(n,e,a){"use strict";a.d(e,{Zo:function(){return p},kt:function(){return k}});var t=a(7294);function r(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function o(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function l(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function i(n,e){if(null==n)return{};var a,t,r=function(n,e){if(null==n)return{};var a,t,r={},o=Object.keys(n);for(t=0;t<o.length;t++)a=o[t],e.indexOf(a)>=0||(r[a]=n[a]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)a=o[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(r[a]=n[a])}return r}var s=t.createContext({}),d=function(n){var e=t.useContext(s),a=e;return n&&(a="function"==typeof n?n(e):l(l({},e),n)),a},p=function(n){var e=d(n.components);return t.createElement(s.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},c=t.forwardRef((function(n,e){var a=n.components,r=n.mdxType,o=n.originalType,s=n.parentName,p=i(n,["components","mdxType","originalType","parentName"]),c=d(a),k=r,g=c["".concat(s,".").concat(k)]||c[k]||u[k]||o;return a?t.createElement(g,l(l({ref:e},p),{},{components:a})):t.createElement(g,l({ref:e},p))}));function k(n,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=n,i.mdxType="string"==typeof n?n:r,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4986:function(n,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var t=a(4034),r=a(9973),o=(a(7294),a(3905)),l={sidebar_position:5},i='YAK \u4e2d\u7f16\u5199"\u591a\u7ebf\u7a0b/\u591a\u5e76\u53d1"\u5e94\u7528',s={unversionedId:"newforyak/concurrent",id:"newforyak/concurrent",isDocsHomePage:!1,title:'YAK \u4e2d\u7f16\u5199"\u591a\u7ebf\u7a0b/\u591a\u5e76\u53d1"\u5e94\u7528',description:"\u5728\u4e0a\u4e00\u8282\u4e2d\uff0c\u6211\u4eec\u9057\u7559\u4e86\u4e00\u4e2a\u95ee\u9898\uff1a",source:"@site/docs/newforyak/concurrent.md",sourceDirName:"newforyak",slug:"/newforyak/concurrent",permalink:"/en/docs/newforyak/concurrent",editUrl:"https://github.com/yaklang/docs/newforyak/concurrent.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u7f51\u7edc\u7a7a\u95f4\u5f15\u64ce\u4fe1\u606f\u6536\u96c6",permalink:"/en/docs/newforyak/spacengine"},next:{title:"\u5b9e\u62181: \u626b\u7aef\u53e3/\u5b50\u57df\u540d+\u6307\u7eb9\u8bc6\u522b",permalink:"/en/docs/newforyak/yak_misc"}},d=[{value:"\u626b\u63cf\u5668\u5e38\u89c1\u5e76\u53d1\u8303\u5f0f",id:"\u626b\u63cf\u5668\u5e38\u89c1\u5e76\u53d1\u8303\u5f0f",children:[{value:"\u6700\u57fa\u7840\u7684\u5e76\u53d1\uff1a<code>go func(){/* do */}()</code>",id:"\u6700\u57fa\u7840\u7684\u5e76\u53d1\uff1ago-func-do-",children:[]},{value:"\u5e76\u53d1\u8303\u5f0f\uff1a\u591a\u4efb\u52a1\u63a7\u5236\uff08<code>WaitGroup</code>\u6a21\u5f0f\uff09",id:"\u5e76\u53d1\u8303\u5f0f\uff1a\u591a\u4efb\u52a1\u63a7\u5236\uff08waitgroup\u6a21\u5f0f\uff09",children:[]},{value:"\u5e76\u53d1\u8303\u5f0f\uff1a\u5e26\u6700\u5927\u5e76\u53d1\u91cf\u9650\u5236\u7684\u591a\u4efb\u52a1",id:"\u5e76\u53d1\u8303\u5f0f\uff1a\u5e26\u6700\u5927\u5e76\u53d1\u91cf\u9650\u5236\u7684\u591a\u4efb\u52a1",children:[]}]},{value:"\u5b9e\u6218\u6848\u4f8b\uff081\uff09\uff1a\u6279\u91cf\u9a8c\u8bc1\u7a7a\u95f4\u5f15\u64ce\u4e2d\u7684\u7f51\u7ad9",id:"\u5b9e\u6218\u6848\u4f8b\uff081\uff09\uff1a\u6279\u91cf\u9a8c\u8bc1\u7a7a\u95f4\u5f15\u64ce\u4e2d\u7684\u7f51\u7ad9",children:[]},{value:"\u7ed3\u675f\u8bed",id:"\u7ed3\u675f\u8bed",children:[]}],p={toc:d};function u(n){var e=n.components,a=(0,r.Z)(n,["components"]);return(0,o.kt)("wrapper",(0,t.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"yak-\u4e2d\u7f16\u5199\u591a\u7ebf\u7a0b\u591a\u5e76\u53d1\u5e94\u7528"},'YAK \u4e2d\u7f16\u5199"\u591a\u7ebf\u7a0b/\u591a\u5e76\u53d1"\u5e94\u7528'),(0,o.kt)("p",null,"\u5728\u4e0a\u4e00\u8282\u4e2d\uff0c\u6211\u4eec\u9057\u7559\u4e86\u4e00\u4e2a\u95ee\u9898\uff1a"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5982\u4f55\u628a\u6211\u4eec\u4ece shodan \u4e2d\u7684\u7ed3\u679c\u4f7f\u7528\u5e76\u53d1\u7684\u624b\u6bb5\u5feb\u901f\u9a8c\u8bc1\uff1f\uff08\u5982\u4f55\u4f7f\u7528\u5e76\u53d1\u5feb\u901f\u53d1\u9001 HTTP \u8bf7\u6c42\uff1f\uff09")),(0,o.kt)("p",null,"\u5f53\u7136\uff0c\u6211\u4eec YAK \u4f5c\u4e3a Golang \u8bed\u8a00\u7684\u53cd\u5c04\u811a\u672c\u8bed\u8a00\uff0c\u81ea\u7136\u652f\u6301\u4e86 Golang \u4e2d\u6700\u5f15\u4ee5\u4e3a\u50b2\u7684 Go \u5173\u952e\u5b57\u7279\u6027\u4e86\u3002"),(0,o.kt)("h2",{id:"\u626b\u63cf\u5668\u5e38\u89c1\u5e76\u53d1\u8303\u5f0f"},"\u626b\u63cf\u5668\u5e38\u89c1\u5e76\u53d1\u8303\u5f0f"),(0,o.kt)("h3",{id:"\u6700\u57fa\u7840\u7684\u5e76\u53d1\uff1ago-func-do-"},"\u6700\u57fa\u7840\u7684\u5e76\u53d1\uff1a",(0,o.kt)("inlineCode",{parentName:"h3"},"go func(){/* do */}()")),(0,o.kt)("p",null,"\u4f17\u6240\u5468\u77e5\uff0c\u6211\u4eec\u53ef\u4ee5\u5f88\u7b80\u5355\u7684\u542f\u52a8\u4e00\u4e2a go \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"goroutine")," \u5c31\u50cf\u771f\u7684\u5728\u5199 Golang \u4e00\u6837"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'go fn() {\n    log.info("goroutine is started")\n    sleep(1)\n    log.info("I am in Goroutnie!")\n}()\n\n// \u8bbe\u7f6e\u9ed8\u8ba4\u65e5\u5fd7\u7ea7\u522b\u4e3a info\nloglevel(`info`)\n\nsleep(2)\n')),(0,o.kt)("p",null,"\u4e0a\u8ff0\u6267\u884c\u5176\u5b9e\u975e\u5e38\u597d\u7406\u89e3\uff0c\u6211\u4eec\u542f\u52a8\u4e86\u4e00\u4e2a Goroutine\uff0c\u5148\u6253\u5370\u4e00\u6761\u65e5\u5fd7\uff0c\u518d Sleep 1 \u79d2\uff0c\u518d\u6253\u5370\u4e00\u6761\u65e5\u5fd7\u7ed3\u675f\u3002"),(0,o.kt)("p",null,"\u6267\u884c\u7ed3\u679c\u4e3a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"[INFO] 2021-06-29 23:56:34 +0800 [a1] goroutine is started\n[INFO] 2021-06-29 23:56:35 +0800 [a1] I am in Goroutnie!\n")),(0,o.kt)("h3",{id:"\u5e76\u53d1\u8303\u5f0f\uff1a\u591a\u4efb\u52a1\u63a7\u5236\uff08waitgroup\u6a21\u5f0f\uff09"},"\u5e76\u53d1\u8303\u5f0f\uff1a\u591a\u4efb\u52a1\u63a7\u5236\uff08",(0,o.kt)("inlineCode",{parentName:"h3"},"WaitGroup"),"\u6a21\u5f0f\uff09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'loglevel(`info`)\n\nwg := sync.NewWaitGroup()\n\ndef submitTask(value) {\n    wg.Add(1)\n    go fn{\n        defer wg.Done()\n        log.info("caller: %v", value)\n        sleep(1)\n        log.info("task is finished... caller: %v", value)\n    }\n}\n\nfor index, element := range ["cha1", "a2", "d3"] {\n    submitTask(element)\n}\n\nlog.info("start to wait all tasks finishing...")\nwg.Wait()\nlog.info("all tasks finished")\n')),(0,o.kt)("p",null,"\u6211\u4eec\u6267\u884c\u4e86\u4e0a\u8ff0\u4ee3\u7801\uff0c\u7ed3\u679c\u975e\u5e38\u7b80\u5355\uff0c\u5927\u5bb6\u4e5f\u5f88\u5bb9\u6613\u731c\u6d4b\u5230"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"[INFO] 2021-06-30 11:30:18 +0800 [a] start to wait all tasks finishing...\n[INFO] 2021-06-30 11:30:18 +0800 [a] caller: cha1\n[INFO] 2021-06-30 11:30:18 +0800 [a] caller: a2\n[INFO] 2021-06-30 11:30:18 +0800 [a] caller: d3\n[INFO] 2021-06-30 11:30:19 +0800 [a] task is finished... caller: d3\n[INFO] 2021-06-30 11:30:19 +0800 [a] task is finished... caller: a2\n[INFO] 2021-06-30 11:30:19 +0800 [a] task is finished... caller: cha1\n[INFO] 2021-06-30 11:30:19 +0800 [a] all tasks finished\n")),(0,o.kt)("p",null,"\u6211\u4eec\u521b\u5efa\u4e86\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"*sync.WaitGroup")," \u5bf9\u8c61\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u4f5c\u7528\u662f\u63a7\u5236\u4e00\u7ec4\u5f02\u6b65\u4efb\u52a1\u7684\u6267\u884c\uff0c\u6bcf\u4e00\u4e2a\u4efb\u52a1\u6267\u884c\u4e4b\u524d\u5e94\u8be5 ",(0,o.kt)("inlineCode",{parentName:"p"},".Add(1)")," \u53bb ",(0,o.kt)("inlineCode",{parentName:"p"},"WaitGroup")," \u589e\u52a0\u4e00\u4e2a\u8c03\u7528\u4efb\u52a1\u7684\u8ba1\u6570\uff0c \u5f53\u4efb\u52a1\u7ed3\u675f\u540e\uff0c\u5e94\u8be5 ",(0,o.kt)("inlineCode",{parentName:"p"},".Done()"),"\n\u51cf\u53bb\u4e00\u4e2a\u4efb\u52a1\u8ba1\u6570\u3002\u6700\u540e ",(0,o.kt)("inlineCode",{parentName:"p"},"WaitGroup")," \u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},".Wait()")," \u51fd\u6570"),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u6ce8\u610f\uff01\u8fd9\u91cc\u6709\u4e00\u4e2a\u6613\u9519\u70b9")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u4e0a\u8ff0\u4ee3\u7801\u5f88\u5bb9\u6613\u505a\u9519\u7684\u4e00\u4e2a\u70b9\u662f\u5728 for \u5faa\u73af\u4e2d\u76f4\u63a5\u4f7f\u7528 Go \u5173\u952e\u5b57\u542f\u52a8 Goroutine\u3002\u4f8b\u5982\u53ef\u80fd\u6709\u540c\u5b66\u4f1a\u628a\u4e0a\u8ff0\u4ee3\u7801\u7b80\u5316\u6210"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},'loglevel(`info`)\n\nwg := sync.NewWaitGroup()\n\nfor index, element := range ["cha1", "a2", "d3"] {\n    wg.Add(1)\n    value = element;\n    go fn{\n        defer wg.Done()\n        log.info("caller: %v", value)\n        sleep(1)\n        log.info("task is finished... caller: %v", value)\n    }\n}\n\nlog.info("start to wait all tasks finishing...")\nwg.Wait()\nlog.info("all tasks finished")\n')),(0,o.kt)("p",{parentName:"div"},"\u8fd9\u79cd\u4ee3\u7801\u662f\u975e\u5e38\u5177\u6709\u8ff7\u60d1\u6027\u7684\uff0c\u4e0a\u8ff0\u4ee3\u7801\u6267\u884c\u7ed3\u679c\u5927\u6982\u7387\u662f\uff1a"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},"[INFO] 2021-06-30 10:59:05 +0800 [a] start to wait all tasks finishing...\n[INFO] 2021-06-30 10:59:05 +0800 [a] caller: d3\n[INFO] 2021-06-30 10:59:05 +0800 [a] caller: d3\n[INFO] 2021-06-30 10:59:05 +0800 [a] caller: d3\n[INFO] 2021-06-30 10:59:06 +0800 [a] task is finished... caller: d3\n[INFO] 2021-06-30 10:59:06 +0800 [a] task is finished... caller: d3\n[INFO] 2021-06-30 10:59:06 +0800 [a] task is finished... caller: d3\n[INFO] 2021-06-30 10:59:06 +0800 [a] all tasks finished\n")),(0,o.kt)("p",{parentName:"div"},"\u6211\u4eec\u53d1\u73b0 d3 \u53d8\u6210\u4e86\u552f\u4e00\u7684 caller \u5e76\u4e14\u88ab\u8c03\u7528\u4e86 3 \u6b21\uff0c\u8fd9\u548c\u6211\u4eec\u4e00\u5f00\u59cb\u7684\u7ed3\u679c\u5dee\u522b\u5f88\u5927\uff0c\u8fd9\u662f\u4e3a\u5565\uff1f"),(0,o.kt)("blockquote",{parentName:"div"},(0,o.kt)("p",{parentName:"blockquote"},"go \u5173\u952e\u5b57\u542f\u52a8\u5e76\u4e0d\u4f1a\u540c\u6b65\u7ed1\u5b9a\u5f53\u524d\u4e0a\u4e0b\u6587\u7684\u53d8\u91cf\uff0c\u800c\u662f\u771f\u6b63\u6267\u884c\u7684\u4e00\u77ac\u95f4\u624d\u4f1a\u7ed1\u5b9a\uff0c\u7136\u800c\u6267\u884c Goroutine \u51fd\u6570\u7684\u65f6\u5019\uff0c\u5e76\u4e0d\u4e00\u5b9a\u53ef\u4ee5\u548c for \u5f53\u524d\u5faa\u73af\u7ed1\u5b9a\u5230\u3002\u53ef\u80fd\u83b7\u53d6\u542f\u52a8\u503c\u7684\u65f6\u5019\uff0c\u53c2\u6570\u503c\u5df2\u7ecf\u4e0d\u4e00\u6837\u4e86")),(0,o.kt)("p",{parentName:"div"},"\u6240\u4ee5\uff0c\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u4e0d\u63a8\u8350\u5728 for \u4e2d\u76f4\u63a5\u542f\u52a8 Goroutine\uff0c\u800c\u5e94\u8be5\u7ed9 Goroutine \u65b0\u521b\u5efa\u4e00\u4e2a\u51b2\u7a81\u57df\u5bb9\u5668\uff0c\u6700\u7b80\u5355\u7684\u5904\u7406\u65b9\u6848\u5176\u5b9e\u5c31\u662f for \u4e2d\u53ef\u4ee5\u540c\u6b65\u6267\u884c\u4e00\u4e2a\u51fd\u6570\uff0c\n\u5728\u51fd\u6570\u540c\u6b65\u6267\u884c\u7684\u65f6\u5019\u6267\u884c\u7684\u65f6\u5019\uff0c\u5c06\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u51b2\u7a81\u57df\uff0c\u5728\u8fd9\u4e2a\u57df\u4e2d\u542f\u52a8 Goroutine \u662f\u5b89\u5168\u7684\uff01"),(0,o.kt)("p",{parentName:"div"},"\u5177\u4f53\u505a\u6cd5\u5982\u4e0b\uff1a"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func submitTask(param) {\n    go func{\n        println("save goroutine")\n    }\n}\n\nfor _, value := range [1, 2, 3] {\n    submitTask(value)\n}\n')),(0,o.kt)("p",{parentName:"div"},"\u89c2\u5bdf\u4e0a\u9762\u4ee3\u7801\uff0c\u6211\u4eec\u5f88\u5bb9\u6613\u5c31\u80fd\u89e3\u51b3\u4e0a\u9762\u63d0\u5230\u7684 BUG\u3002"))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u4f5c\u4e3a\u5bf9\u6bd4\uff0c\u5728 Golang \u4e2d\u7684\u5904\u7406\u65b9\u5f0f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u4f17\u6240\u5468\u77e5\uff0c\u5728 Golang \u4e2d\uff0c\u6211\u4eec\u5728 for \u5faa\u73af\u4e2d\u542f\u52a8 goroutine \u9700\u8981\u4e07\u5206\u5c0f\u5fc3"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},'for _, value := range []string{"a1", "a2", "a3"} {\n    go executeFunc(value)\n}\n')),(0,o.kt)("p",{parentName:"div"},"\u8fd9\u79cd\u65b9\u6cd5\u662f\u975e\u5e38\u9519\u8bef\u7684\uff0c\u56e0\u4e3a go \u6765\u542f\u52a8 goroutine \u5e76\u4e0d\u662f\u5373\u65f6\u542f\u52a8\u7684\uff0c\u53ef\u80fd\u7b49\u5230 goroutine \u542f\u52a8\u7684\u65f6\u5019\uff0cvalue \u5df2\u7ecf\u4e0d\u662f\u539f\u6765\u7684 value \u4e86\u3002"),(0,o.kt)("p",{parentName:"div"},"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0cGolang \u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u91c7\u7528\u5728\u65b0\u7684\u4ee3\u7801\u5757\u91cd\u65b0\u58f0\u660e\u53d8\u91cf\u4ee5\u628a\u53d8\u91cf\u7ed1\u5b9a\u5230 goroutine \u7684\u4f5c\u7528\u57df\u4e2d\u3002"),(0,o.kt)("p",{parentName:"div"},"\u6bd4\u5982"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-go"},'for _, value := range []string{"a1", "a2", "a3"} {\n    value := value;\n    go executeFunc(value)\n}\n')),(0,o.kt)("p",{parentName:"div"},"\u53ef\u4ee5\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898"))),(0,o.kt)("h3",{id:"\u5e76\u53d1\u8303\u5f0f\uff1a\u5e26\u6700\u5927\u5e76\u53d1\u91cf\u9650\u5236\u7684\u591a\u4efb\u52a1"},"\u5e76\u53d1\u8303\u5f0f\uff1a\u5e26\u6700\u5927\u5e76\u53d1\u91cf\u9650\u5236\u7684\u591a\u4efb\u52a1"),(0,o.kt)("p",null,"\u5728\u5e38\u7528\u573a\u666f\u4e0b\uff0c\u6211\u4eec\u7ecf\u5e38\u4f1a\u9047\u5230\u9650\u5236\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u673a\u5668\u7684\u6027\u80fd\u5e76\u4e0d\u662f\u65e0\u9650\u7684"),(0,o.kt)("li",{parentName:"ol"},"\u7f51\u7edc\u5e26\u5bbd\u5e76\u4e0d\u662f\u65e0\u9650\u7684")),(0,o.kt)("p",null,"\u6240\u4ee5\u6211\u4eec\u5f80\u5f80\u9700\u8981\u9650\u5236\u4e00\u4e0b\u6267\u884c\u4efb\u52a1\u7684\u6700\u5927\u91cf\u3002"),(0,o.kt)("p",null,"\u5728 Python \u4e2d\uff0c\u6211\u4eec\u7ecf\u5e38\u9700\u8981\u6784\u5efa\u4e00\u4e2a\u7ebf\u7a0b\u6c60\uff0c\u6216\u8005\u4e3a\u4e86\u5145\u5206\u5229\u7528 CPU \u6027\u80fd\uff0c\u4f1a\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"processing")," \u4e2d\u7684 pool \u6765\u6267\u884c\u3002"),(0,o.kt)("p",null,"\u5e78\u8fd0\u7684\u662f\uff0c\u5728 Golang \u4e2d\uff0c\u6211\u4eec\u5e76\u4e0d\u9700\u8981\u592a\u62c5\u5fc3\u7ebf\u7a0b/\u8fdb\u7a0b\u4e0a\u4e0b\u6587\u5207\u6362\u7684\u5f00\u9500\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 Goroutine \u6765\u8fdb\u884c\u5f02\u6b65\u4efb\u52a1\u6267\u884c\uff0c \u5e76\u4e14\u4e5f\u5e76\u4e0d\u9700\u8981\u592a\u62c5\u5fc3\u4e0a\u4e0b\u6587\u9891\u7e41\u5207\u6362\u5e26\u6765\u7684\u95ee\u9898\u3002\u6bd5\u7adf\u4e00\u4e2a Goroutine \u7684\u5f00\u9500\u5927\u6982\u5728 4K\n\u5de6\u53f3\uff0c\u5bf9\u4e8e\u6574\u4e2a\u7a0b\u5e8f\u6765\u8bf4\uff0c\u5fae\u4e0d\u8db3\u9053\u3002"),(0,o.kt)("p",null,"\u90a3\u4e48\u8bdd\u8bf4\u56de\u6765\uff0c\u6211\u4eec\u5982\u4f55\u9650\u5236\u6700\u5927\u5e76\u53d1\u5462\uff1fYak \u63d0\u4f9b\u4e86\u4e00\u4e2a\u975e\u5e38\u597d\u7684\u5de5\u5177\u7c7b ",(0,o.kt)("inlineCode",{parentName:"p"},"SizedWaitGroup"),"\uff0c\u770b\u540d\u5b57\u5927\u5bb6\u5c31\u80fd\u770b\u5f97\u51fa\u6765\uff0c\u8fd9\u662f\u4e00\u4e2a\u5e26\u5927\u5c0f\u9650\u5236\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"WaitGroup"),"\u3002"),(0,o.kt)("p",null,"Golang \u4e5f\u6709\u76f8\u5173\u5305\u7684\u5b9e\u73b0\uff0c\u5176\u5b9e\u975e\u5e38\u7b80\u5355"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/remeh/sizedwaitgroup"},"https://github.com/remeh/sizedwaitgroup"))),(0,o.kt)("p",null,"\u6211\u4eec\u5c1d\u8bd5\u5c06\u7b2c\u4e8c\u8282\u4e2d\u7684\u5185\u5bb9\u4fee\u6539\u4e00\u4e0b\uff0c\u4e5f\u8bb8\u6539\u9020\u6210\u672c\u5f88\u4f4e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:"{3,6,15}","{3,6,15}":!0},'loglevel(`info`)\n\nwg := sync.NewSizedWaitGroup(4)\n\ndef submitTask(value) {\n    wg.Add()\n    go fn{\n        defer wg.Done()\n        log.info("caller: %v", value)\n        sleep(1)\n        log.info("task is finished... caller: %v", value)\n    }\n}\n\nfor index := range make([]int, 10) {\n    submitTask(index)\n}\n\nlog.info("start to wait all tasks finishing...")\nwg.Wait()\nlog.info("all tasks finished")\n')),(0,o.kt)("p",null,"\u6211\u4eec\u770b\u4e0a\u8ff0\u5185\u5bb9\uff0c\u53ea\u4fee\u6539\u4e86\u4e09\u884c\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"line: 3"),": \u4e3a\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"sync.NewSizedWaitGroup")," \u6765\u751f\u6210\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"li"},"SizedWaitGroup")," \u6765\u9650\u5236\u5e76\u53d1\uff0c\u5e76\u53d1\u9650\u5236\u5927\u5c0f\u4e3a 4"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"line: 6"),": \u56e0\u4e3a\u65b9\u6cd5\u5b9a\u4e49\u4e0d\u540c\uff0cSizedWaitGroup \u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},".Add()")," \u6ca1\u6709\u53c2\u6570\uff0c\u9ed8\u8ba4\u8c03\u7528\u4e00\u6b21\uff0c\u589e\u52a0\u4e00\u6b21\u4efb\u52a1\u8ba1\u6570"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"line: 15"),": \u6211\u4eec\u521b\u5efa\u66f4\u591a\u5927\u7684 slice\uff0c\u6bd4\u6211\u4eec\u9650\u5236\u7684\u5e76\u53d1\u5927\uff0c\u6211\u4eec\u624d\u80fd\u770b\u5230\u6548\u679c\u3002")),(0,o.kt)("p",null,"\u4e0a\u8ff0\u4ee3\u7801\u6267\u884c\u7684\u65f6\u5019\uff0c\u6bcf\u4e00\u4e2a\u4efb\u52a1\u6267\u884c\u4e00\u79d2\u949f\uff0c\u6709 4 \u4e2a\u4efb\u52a1\u540c\u65f6\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\u7684\u65f6\u5019\uff0c\u5176\u4ed6\u4efb\u52a1\u4f1a\u963b\u585e\uff0c\u7b49\u5f85\u5269\u4f59\u4efb\u52a1\u6267\u884c\u5b8c\u6bd5\uff0c\u624d\u4f1a\u6267\u884c\uff0c\u4ece\u800c\u9650\u5236\u4e86 Goroutine \u7684\u5e76\u53d1\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u9884\u8ba1\u4f1a\u628a\u603b\u4efb\u52a1 10 \u4e2a\u5206\u4e3a\u4e09\u7ec4\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"4,4,2"),"\uff0c\u6240\u4ee5\u5c06\u4f1a\u6267\u884c\u4e09\u79d2\uff08\u4e00\u7ec4\u4efb\u52a1\u8017\u65f61\u79d2\uff09\u3002\u83b7\u5f97\u7684\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"[INFO] 2021-06-30 17:41:56 +0800 [a] caller: 3\n[INFO] 2021-06-30 17:41:56 +0800 [a] caller: 0\n[INFO] 2021-06-30 17:41:56 +0800 [a] caller: 1\n[INFO] 2021-06-30 17:41:56 +0800 [a] caller: 2\n[INFO] 2021-06-30 17:41:57 +0800 [a] task is finished... caller: 2\n[INFO] 2021-06-30 17:41:57 +0800 [a] task is finished... caller: 1\n[INFO] 2021-06-30 17:41:57 +0800 [a] task is finished... caller: 3\n[INFO] 2021-06-30 17:41:57 +0800 [a] caller: 4\n[INFO] 2021-06-30 17:41:57 +0800 [a] task is finished... caller: 0\n[INFO] 2021-06-30 17:41:57 +0800 [a] caller: 7\n[INFO] 2021-06-30 17:41:57 +0800 [a] caller: 5\n[INFO] 2021-06-30 17:41:57 +0800 [a] caller: 6\n[INFO] 2021-06-30 17:41:58 +0800 [a] task is finished... caller: 4\n[INFO] 2021-06-30 17:41:58 +0800 [a] task is finished... caller: 6\n[INFO] 2021-06-30 17:41:58 +0800 [a] start to wait all tasks finishing...\n[INFO] 2021-06-30 17:41:58 +0800 [a] caller: 9\n[INFO] 2021-06-30 17:41:58 +0800 [a] task is finished... caller: 7\n[INFO] 2021-06-30 17:41:58 +0800 [a] task is finished... caller: 5\n[INFO] 2021-06-30 17:41:58 +0800 [a] caller: 8\n[INFO] 2021-06-30 17:41:59 +0800 [a] task is finished... caller: 8\n[INFO] 2021-06-30 17:41:59 +0800 [a] task is finished... caller: 9\n[INFO] 2021-06-30 17:41:59 +0800 [a] all tasks finished\n")),(0,o.kt)("h2",{id:"\u5b9e\u6218\u6848\u4f8b\uff081\uff09\uff1a\u6279\u91cf\u9a8c\u8bc1\u7a7a\u95f4\u5f15\u64ce\u4e2d\u7684\u7f51\u7ad9"},"\u5b9e\u6218\u6848\u4f8b\uff081\uff09\uff1a\u6279\u91cf\u9a8c\u8bc1\u7a7a\u95f4\u5f15\u64ce\u4e2d\u7684\u7f51\u7ad9"),(0,o.kt)("p",null,"\u6211\u4eec\u5728\u524d\u4e00\u8282\u4e2d\uff0c\u7f16\u5199\u4e86\u4e00\u4e2a\u5c0f\u7a0b\u5e8f\uff0c\u4f7f\u7528 yak \u4ece shodan \u4e2d\u83b7\u53d6\u6570\u636e\uff0c\u5e76\u4e14\u5bf9\u6bcf\u4e00\u4e2a\u7ed3\u679c\uff0c\u8fdb\u884c http \u8bf7\u6c42\u7684\u8bbf\u95ee\uff0c\u4f46\u662f\u7531\u4e8e\u6211\u4eec\u5e76\u6ca1\u6709\u4f7f\u7528\u5e76\u53d1\u7f16\u7a0b\uff0c\u5bfc\u81f4\u6574\u4e2a\u8fc7\u7a0b\u633a\u6162\u7684\u3002"),(0,o.kt)("p",null,"\u5728\u6211\u4eec\u672c\u8282\u5b66\u4e60\u4e86\u5982\u4f55\u7f16\u5199\u5e26\u5e76\u53d1\u7684 yak \u811a\u672c\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u5c1d\u8bd5\u5bf9\u4e0a\u4e00\u8282\u7684\u4ee3\u7801\u8fdb\u884c\u4e00\u4e9b\u6539\u9020\uff1a"),(0,o.kt)("p",null,"\u6211\u4eec\u67e5\u770b\u539f\u59cb\u4ee3\u7801\uff0c\u5176\u5b9e\u975e\u5e38\u7b80\u5355\uff0c\u8fd9\u662f\u4e0d\u662f\u5f88\u50cf\u6211\u4eec\u770b\u5230\u8fc7\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"for range")," \u5206\u53d1\u4efb\u52a1\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'shodanToken := cli.String("token")\nmaxRecord := cli.Int("max-record")\nif maxRecord <= 0 {\n    maxRecord = 100\n}\n\nch, err := spacengine.ShodanQuery(shodanToken, "wordpress", spacengine.maxRecord(maxRecord))\ndie(err)\n\nfor result := range ch {\n    addr := result.Addr\n    println(result.Addr)\n}\n')),(0,o.kt)("p",null,"\u6211\u4eec\u6784\u5efa\u4e00\u4e2a\u6267\u884c\u51fd\u6570\uff0c\u5728\u8fd9\u4e2a\u51fd\u6570\u4e2d\uff0c\u6211\u4eec\u53bb\u8fdb\u884c http \u8bbf\u95ee\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// \u6784\u5efa\u4e00\u4e2a SizedWaitGroup \u6765\u9650\u5236\u5e76\u53d1\nswg := sync.NewSizedWaitGroup(20)\n\n// \u6784\u5efa\u4efb\u52a1\u6267\u884c\u51fd\u6570\uff0c\u5728\u8fd9\u4e2a\u51fd\u6570\u4e2d\u542f\u52a8 Goroutine\nfunc submitTask(addr) {\n\n    // \u628a\u4e00\u4e2a\u7f51\u7edc\u5730\u5740\u89e3\u6790\u6210\u53ef\u80fd\u5b58\u5728\u7684 urls\n    urls := str.ParseStringToUrls(addr)\n    swg.Add()\n    go func{\n        defer swg.Done()\n        \n        // \u628a url \u4f7f\u7528 http.get \u8bbf\u95ee\uff0c\u5bf9\u7ed3\u679c\u8fdb\u884c\u7b80\u5355\u5c55\u793a\u548c\u8bbf\u95ee \n        for _, u := range urls {\n            rsp, err := http.Get(u)\n            if err != nil {\n                log.error("request %v failed: %s", u, err)\n                continue\n            }\n\n            // \u4f7f\u7528 http.dump \u628a http.Response \u53d8\u6210 bytes \u6570\u636e\u5305\n            packetRaw, err := http.dump(rsp)\n            if err != nil {\n                log.info("url: %v status code: %v", u, rsp.StatusCode)\n                continue\n            }\n            \n            // \u5c55\u793a\u57fa\u7840\u4fe1\u606f\n            log.info("url: %v status code: %v packet len: %v", u, rsp.StatusCode, len(packetRaw))\n        }\n    }\n}\n')),(0,o.kt)("p",null,"\u7f16\u5199\u4e86\u4e0a\u8ff0\u51fd\u6570\u4e4b\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u5f88\u5bb9\u6613\u7684\u628a\u4e00\u5f00\u59cb\u7684\u811a\u672c\u6539\u9020\u6210\u60f3\u8981\u7684\u6837\u5b50\uff08\u4ece Shodan \u4e2d\u83b7\u53d6\u5185\u5bb9\uff0c\u5e76\u53d1\u83b7\u53d6\u7f51\u7ad9\u5b9e\u9645\u7684\u4fe1\u606f\uff09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'loglevel(`info`)\n\nshodanToken := cli.String("token")\nmaxRecord := cli.Int("max-record")\nif maxRecord <= 0 {\n    maxRecord = 100\n}\n\nch, err := spacengine.ShodanQuery(shodanToken, "wordpress", spacengine.maxRecord(maxRecord))\ndie(err)\n\nswg := sync.NewSizedWaitGroup(20)\nfunc submitTask(addr) {\n    urls := str.ParseStringToUrls(addr)\n    swg.Add()\n    go func{\n        defer swg.Done()\n        \n        for _, u := range urls {\n            rsp, err := http.Get(u)\n            if err != nil {\n                log.error("request %v failed: %s", u, err)\n                continue\n            }\n\n            packetRaw, err := http.dump(rsp)\n            if err != nil {\n                log.info("url: %v status code: %v", u, rsp.StatusCode)\n                continue\n            }\n            \n            log.info("url: %v status code: %v packet len: %v", u, rsp.StatusCode, len(packetRaw))\n        }\n    }\n}\n\nfor result := range ch {\n    addr := result.Addr\n    log.info("start to handling shodan result: %v", addr)\n    submitTask(addr)\n}\n\nlog.info("all task is submitted...")\nswg.Wait()\n')),(0,o.kt)("p",null,"\u8fd9\u4e2a\u811a\u672c\u6211\u4eec\u53ea\u662f\u628a\u539f\u811a\u672c\u548c\u65b0\u7684\u51fd\u6570\u8fdb\u884c\u4e86\u6574\u5408\uff0c\u5f53\u6211\u4eec\u6267\u884c\u4e4b\u540e\uff0c\u5f97\u5230\u7684\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u6ce8\u610f\uff1a\u5173\u952e\u7684\u76ee\u6807\u4fe1\u606f\uff0c\u6211\u4eec\u5df2\u7ecf\u8fdb\u884c\u4e86\u9690\u53bb\uff0c\u6709\u9700\u8981\u7684\u540c\u5b66\u8bf7\u81ea\u884c\u8d2d\u4e70 token \u8fdb\u884c\u64cd\u4f5c\u3002"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'[INFO] 2021-07-01 10:45:54 +0800 [default:shodan.go:73] shodan fetch: 66.171.******3:443\n[INFO] 2021-07-01 10:45:54 +0800 [default:shodan.go:73] shodan fetch: 52.6******43:80\n[INFO] 2021-07-01 10:45:54 +0800 [a] start to handling shodan result: 66.171.******3:443\n[INFO] 2021-07-01 10:45:54 +0800 [a] start to handling shodan result: 52.6******43:80\n[INFO] 2021-07-01 10:45:54 +0800 [default:shodan.go:73] shodan fetch: 216.194******8:443\n[INFO] 2021-07-01 10:45:54 +0800 [default:shodan.go:73] shodan fetch: 104.2******2:443\n[INFO] 2021-07-01 10:45:54 +0800 [a] start to handling shodan result: 216.194******8:443\n[INFO] 2021-07-01 10:45:54 +0800 [a] start to handling shodan result: 104.2******2:443\n[INFO] 2021-07-01 10:45:54 +0800 [default:shodan.go:73] shodan fetch: 23.235******07:80\n[INFO] 2021-07-01 10:45:54 +0800 [default:shodan.go:73] shodan fetch: 192.******8:443\n[INFO] 2021-07-01 10:45:54 +0800 [a] start to handling shodan result: 23.235******07:80\n...\n...\n...\n[INFO] 2021-07-01 10:45:55 +0800 [a] start to handling shodan result: 45.79******08:80\n[INFO] 2021-07-01 10:45:55 +0800 [default:shodan.go:73] shodan fetch: 124.111******54:80\n[INFO] 2021-07-01 10:45:57 +0800 [a] url: https?://***.**.***.** status code: 200 packet ******25785\n[INFO] 2021-07-01 10:45:57 +0800 [a] start to handling shodan result: 124.111******54:80\n[INFO] 2021-07-01 10:45:57 +0800 [default:shodan.go:73] shodan fetch: 165.******80:80\n[INFO] 2021-07-01 10:45:57 +0800 [a] url: https?://***.**.***.** status code: 200 packet******90338\n[INFO] 2021-07-01 10:45:57 +0800 [a] start to handling shodan result: 165.******80:80\n[INFO] 2021-07-01 10:45:57 +0800 [default:shodan.go:73] shodan fetch: 72.10******12:80\n[INFO] 2021-07-01 10:45:57 +0800 [a] url: https?://***.**.***.** status code: 200 pack******: 841\n[INFO] 2021-07-01 10:45:57 +0800 [a] start to handling shodan result: 72.10******12:80\n...\n...\n...\n[INFO] 2021-07-01 10:45:59 +0800 [a] start to handling shodan result: 52.5******81:80\n[INFO] 2021-07-01 10:45:59 +0800 [default:shodan.go:73] shodan fetch: 208.7******50:80\n[INFO] 2021-07-01 10:45:59 +0800 [a] url: https?://***.**.***.** status code: 200 packet******32551\n[INFO] 2021-07-01 10:45:59 +0800 [a] start to handling shodan result: 208.7******50:80\n[INFO] 2021-07-01 10:45:59 +0800 [default:shodan.go:73] shodan fetch: 104.2******1:443\n...\n...\n...\n[INFO] 2021-07-01 10:46:11 +0800 [default:shodan.go:73] shodan fetch: 52.22******70:80\n[INFO] 2021-07-01 10:46:11 +0800 [a] url: https?://***.**.***.** status code: 200 packet ******49903\n[INFO] 2021-07-01 10:46:11 +0800 [a] start to handling shodan result: 52.22******70:80\n[INFO] 2021-07-01 10:46:11 +0800 [a] url: https?://***.**.***.** status code: 200 packet ******38659\n[INFO] 2021-07-01 10:46:11 +0800 [a] all task is submited...\n[INFO] 2021-07-01 10:46:12 +0800 [a] url: https?://***.**.***.** status code: 200 packet******37318\n[INFO] 2021-07-01 10:46:12 +0800 [a] url: https?://***.**.***.** status code: 200 packet******30814\n[INFO] 2021-07-01 10:46:12 +0800 [a] url: https?://***.**.***.** status code: 200 packet ******19441\n[INFO] 2021-07-01 10:46:12 +0800 [a] url: https?://***.**.***.** status code: 200 packet ******56180\n[INFO] 2021-07-01 10:46:12 +0800 [a] url: https?://***.**.***.** status code: 200 packet******74448\n[ERRO] 2021-07-01 10:46:12 +0800 [a] request https?://***.**.***.** failed: Get "https?://***.**.***.** tls: first record does not look like a TL******shake\n[INFO] 2021-07-01 10:46:12 +0800 [a] url: https?://***.**.***.** status code: 200 packet******64965\n[INFO] 2021-07-01 10:46:12 +0800 [a] url: https?://***.**.***.** status code: 200 packet******81119\n...\n...\n...\n\n')),(0,o.kt)("h2",{id:"\u7ed3\u675f\u8bed"},"\u7ed3\u675f\u8bed"),(0,o.kt)("p",null,"\u5f53\u7136\uff0c\u5f88\u591a\u670b\u53cb\u4f1a\u5410\u69fd\uff0c\u6211\u4eec\u6700\u8fd1\u4e24\u8282\u5e76\u4e0d\u662f\u7279\u522b\u4eb2\u4eba\uff0c\u6bd5\u7adf shodan token \u5e76\u4e0d\u662f\u8c01\u90fd\u6709\u7684\u3002"),(0,o.kt)("p",null,"\u90a3\u4e48\u6211\u4eec\u4e0b\u4e00\u8282\u8bb2\u4ecb\u7ecd\u4e00\u4e9b\u4e0d\u9700\u8981\u6c2a\u91d1\u5c31\u53ef\u4ee5\u5feb\u4e50\u73a9\u800d\u7684\u5c0f\u6280\u80fd\u3002"))}u.isMDXComponent=!0}}]);