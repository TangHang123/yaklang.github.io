(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[6429],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return p},kt:function(){return f}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return r?t.createElement(m,l(l({ref:n},p),{},{components:r})):t.createElement(m,l({ref:n},p))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5777:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var t=r(4034),a=r(9973),i=(r(7294),r(3905)),l={sidebar_position:6},o="\u5b9e\u62182: \u6307\u7eb9\u626b\u63cf+\u57fa\u7840\u722c\u866b",s={unversionedId:"newforyak/scan_and_crawler",id:"newforyak/scan_and_crawler",isDocsHomePage:!1,title:"\u5b9e\u62182: \u6307\u7eb9\u626b\u63cf+\u57fa\u7840\u722c\u866b",description:"\u672c\u8282\u5185\u5bb9\u5176\u5b9e\u76f8\u5bf9\u7b80\u5355\u591a\u4e86\uff0c\u5927\u5bb6\u5982\u679c\u5b66\u4e60\u4e86\u524d\u9762\u7684\u5185\u5bb9\u4e4b\u540e\uff0c\u672c\u8282\u626b\u63cf\u7aef\u53e3+\u722c\u866b\u5176\u5b9e\u662f\u4e00\u4e2a\u975e\u5e38\u987a\u7406\u6210\u7ae0\u7684\u7a0b\u5e8f\uff1a",source:"@site/docs/newforyak/scan_and_crawler.md",sourceDirName:"newforyak",slug:"/newforyak/scan_and_crawler",permalink:"/docs/newforyak/scan_and_crawler",editUrl:"https://github.com/yaklang/docs/newforyak/scan_and_crawler.md",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u5b9e\u62181: \u626b\u7aef\u53e3/\u5b50\u57df\u540d+\u6307\u7eb9\u8bc6\u522b",permalink:"/docs/newforyak/yak_misc"},next:{title:"YAK + Nuclei\uff1a\u8bed\u8a00\u4e2d\u7684\u6f0f\u626b",permalink:"/docs/newforyak/nuclei"}},c=[{value:"0x01 \u6e29\u6545\u800c\u77e5\u65b0\uff1a\u8f93\u5165\u5904\u7406\u4e0e\u626b\u63cf\u7aef\u53e3",id:"0x01-\u6e29\u6545\u800c\u77e5\u65b0\uff1a\u8f93\u5165\u5904\u7406\u4e0e\u626b\u63cf\u7aef\u53e3",children:[]},{value:"0x02 \u7b80\u6613\u7684\u57fa\u7840\u722c\u866b\uff08\u975e\u6d4f\u89c8\u5668\u722c\u866b\uff09",id:"0x02-\u7b80\u6613\u7684\u57fa\u7840\u722c\u866b\uff08\u975e\u6d4f\u89c8\u5668\u722c\u866b\uff09",children:[]},{value:"0x03 \u628a\u7aef\u53e3\u626b\u63cf\u548c\u722c\u866b\u8fdb\u884c\u7ec4\u5408\uff1f",id:"0x03-\u628a\u7aef\u53e3\u626b\u63cf\u548c\u722c\u866b\u8fdb\u884c\u7ec4\u5408\uff1f",children:[]},{value:"0x04 \u7b80\u5355\u5c0f\u6d4b\u8bd5",id:"0x04-\u7b80\u5355\u5c0f\u6d4b\u8bd5",children:[]}],p={toc:c};function u(e){var n=e.components,l=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,t.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5b9e\u62182-\u6307\u7eb9\u626b\u63cf\u57fa\u7840\u722c\u866b"},"\u5b9e\u62182: \u6307\u7eb9\u626b\u63cf+\u57fa\u7840\u722c\u866b"),(0,i.kt)("p",null,"\u672c\u8282\u5185\u5bb9\u5176\u5b9e\u76f8\u5bf9\u7b80\u5355\u591a\u4e86\uff0c\u5927\u5bb6\u5982\u679c\u5b66\u4e60\u4e86\u524d\u9762\u7684\u5185\u5bb9\u4e4b\u540e\uff0c\u672c\u8282\u626b\u63cf\u7aef\u53e3+\u722c\u866b\u5176\u5b9e\u662f\u4e00\u4e2a\u975e\u5e38\u987a\u7406\u6210\u7ae0\u7684\u7a0b\u5e8f\uff1a"),(0,i.kt)("p",null,"\u6211\u4eec\u7ecf\u5e38\u5728\u626b\u63cf\u7aef\u53e3\u7684\u65f6\u5019\uff0c\u53d1\u73b0\u4ed6\u662f\u4e00\u4e2a Web \u7aef\u53e3\uff0c\u4f46\u662f\u4ed6\u7684\u5185\u90e8\u7684\u4e00\u4e9b URL \u6211\u4eec\u5e76\u4e0d\u80fd\u83b7\u53d6\u5230\u3002\u540c\u65f6\u5f80\u5f80\u8fdb\u884c PoC \u626b\u63cf/\u6f0f\u6d1e\u626b\u7c73\u7684\u65f6\u5019\uff0c\u6211\u4eec\u9700\u8981\u7cbe\u786e\u5230 URL\uff0c\u751a\u81f3\u6570\u636e\u5305\u624d\u80fd\u786e\u5b9a\u8fd9\u4e2a\u9700\u8981\u626b\u63cf\u7684\u53c2\u6570\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u628a\u4e0a\u8ff0\u63cf\u8ff0\u8fc7\u7a0b\u4f7f\u7528\u6d41\u7a0b\u56fe\u8868\u793a\u5982\u4e0b\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"process",src:r(5669).Z})),(0,i.kt)("p",null,"\u5927\u5bb6\u5e94\u8be5\u5f88\u719f\u6089\u8fd9\u4e2a\u56fe\u4e86\uff0c\u6211\u4eec\u5728\u4e0a\u4e00\u8282\u4e2d\u5df2\u7ecf\u770b\u8fc7\u7c7b\u4f3c\u7684\u56fe\uff0c\u5e76\u9488\u5bf9\u6bcf\u4e00\u4e2a\u6b65\u9aa4\u8fdb\u884c\u4e86\u8bb2\u89e3\u548c\u62c6\u5206\uff0c\u6211\u4eec\u53ef\u4ee5\u5f88\u5bb9\u6613\u72ec\u7acb\u81ea\u4e3b\u5b8c\u6210\u7edd\u5927\u591a\u6570\u7684\u6b65\u9aa4\u3002"),(0,i.kt)("h2",{id:"0x01-\u6e29\u6545\u800c\u77e5\u65b0\uff1a\u8f93\u5165\u5904\u7406\u4e0e\u626b\u63cf\u7aef\u53e3"},"0x01 \u6e29\u6545\u800c\u77e5\u65b0\uff1a\u8f93\u5165\u5904\u7406\u4e0e\u626b\u63cf\u7aef\u53e3"),(0,i.kt)("p",null,"\u8fd9\u4e00\u90e8\u5206\u5185\u5bb9\u975e\u5e38\u7b80\u5355\uff0c\u6211\u4eec\u5728\u524d\u9762\u5df2\u7ecf\u5199\u8fc7\u5f88\u591a\u6b21\u4e86\uff0c\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"servicescan.ScanFromSynResult")," \u6211\u4eec\u53ef\u4ee5\u628a SYN \u7aef\u53e3\u5f00\u653e\u626b\u63cf\u548c\u6307\u7eb9\u8bc6\u522b\u626b\u63cf\u8fdb\u884c\u5173\u8054\u4e0e\u5bf9\u63a5\uff0c\u8fd9\u4e00\u6b65\u4f1a\u8ba9\u9488\u5bf9\u521d\u6b65\u5355\u7aef\u53e3\u7684\u626b\u63cf\u975e\u5e38\u5feb\u901f\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'hosts = cli.String("target", cli.setHelp("scan hosts"))\nports = cli.String("ports", cli.setDefault("80,8080-8082,443,888"))\n\nif hosts == "" {\n    die("target is empty")\n}\n\nsynResults, err := synscan.Scan(hosts, ports)\ndie(err)\n\nres, err := servicescan.ScanFromSynResult(synResults)\ndie(err)\n')),(0,i.kt)("h2",{id:"0x02-\u7b80\u6613\u7684\u57fa\u7840\u722c\u866b\uff08\u975e\u6d4f\u89c8\u5668\u722c\u866b\uff09"},"0x02 \u7b80\u6613\u7684\u57fa\u7840\u722c\u866b\uff08\u975e\u6d4f\u89c8\u5668\u722c\u866b\uff09"),(0,i.kt)("p",null,"\u6211\u4eec\u7684\u57fa\u7840\u722c\u866b\u6a21\u5757\u5176\u5b9e\u4e5f\u662f\u5185\u7f6e\u7684\uff0c\u5728\u4f7f\u7528\u57fa\u7840\u722c\u866b\u8fdb\u884c\u626b\u63cf\u7684\u65f6\u5019\uff0c\u6211\u4eec\u53ef\u4ee5\u8bbe\u7f6e\u5f88\u591a\u53c2\u6570"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u57fa\u7840\u4f7f\u7528\u624b\u518c\u53ef\u4ee5\u5177\u4f53\u53c2\u8003 ",(0,i.kt)("a",{parentName:"li",href:"../buildinlibs/lib_crawler"},"crawler \u57fa\u7840\u722c\u866b\u4f7f\u7528\u6587\u6863")),(0,i.kt)("li",{parentName:"ol"},"\u722c\u866b\u6240\u6709 API \u53ef\u4ee5\u53c2\u8003 ",(0,i.kt)("a",{parentName:"li",href:"/docs/api/crawler"},"crawler \u5b8c\u5168 API"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// \u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939\u4e3a `./scan_and_crawler` \u7684\u4e34\u65f6\u6587\u4ef6\u4f4d\u7f6e\u3002\n// \u8fd9\u4e2a\u6587\u4ef6\u5939\u7528\u4e8e\u5b58\u50a8\u626b\u63cf\u7684\u7ed3\u679c\nfp, err = file.TempFile("scan_and_crawler")\ndie(err)\ndefer fp.Close()\n\n// \u8bbe\u7f6e\u722c\u866b\u51fd\u6570\uff1a\u901a\u8fc7 SizedWaitGroup \u6765\u9650\u9891\n// \u5982\u679c\u5927\u5bb6\u9605\u8bfb\u8fc7\u524d\u9762\u5173\u4e8e\u5e76\u53d1\u7684\u5904\u7406\uff0c\u5c06\u4f1a\u5bf9\u8fd9\u4e2a\u5199\u6cd5\u975e\u5e38\u719f\u6089\ncrawlerSwg := sync.NewSizedWaitGroup(10)\ndefer crawlerSwg.Wait()\nfunc startCrawler(target) {\n    crawlerSwg.Add()\n    go func{\n        defer crawlerSwg.Done()\n\n        // \u521b\u5efa\u722c\u866b\n        res, err := crawler.Start(target, crawler.maxRequest(50))\n        die(err)\n        \n        // \u9488\u5bf9\u722c\u866b\u7684\u7ed3\u679c\u8fdb\u884c\u5c55\u793a\uff08\u4ec5\u4ec5\u5c55\u793a Url\uff0c\u5e76\u540c\u65f6\u628a\u7ed3\u679c\u5199\u5165\u6587\u4ef6\u4e2d\uff09\n        for req := range res {\n            println(req.Url())\n            fp.WriteLine(req.Url())\n        }\n    }\n}\n')),(0,i.kt)("h2",{id:"0x03-\u628a\u7aef\u53e3\u626b\u63cf\u548c\u722c\u866b\u8fdb\u884c\u7ec4\u5408\uff1f"},"0x03 \u628a\u7aef\u53e3\u626b\u63cf\u548c\u722c\u866b\u8fdb\u884c\u7ec4\u5408\uff1f"),(0,i.kt)("p",null,"\u5176\u5b9e\u7ec4\u5408\u65b9\u6cd5\u975e\u5e38\u7b80\u5355\uff0c\u6211\u4eec\u5728\u6307\u7eb9\u626b\u63cf\u7ed3\u679c\u4e2d\u7b80\u5355\u5224\u65ad\u4e00\u4e0b\u6211\u4eec\u7684\u7aef\u53e3\u662f\u5426\u5f00\u653e\uff0c\u6211\u4eec\u7684\u6307\u7eb9\u662f\u5426\u5305\u542b HTTP \u8bf7\u6c42\u3002\u53ef\u4ee5\u786e\u5b9a\u662f\u5426\u662f HTTP \u670d\u52a1\u3002"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5f53\u7136\uff0c\u5224\u65ad\u4e00\u4e2a\u670d\u52a1\u662f\u4e0d\u662f HTTP \u670d\u52a1\u7684\u65f6\u5019\uff0c\u6709\u5f88\u591a\u65b9\u6cd5\uff0c\u751a\u81f3\u53ef\u4ee5\u4e0d\u5224\u65ad\uff0c\u76f4\u63a5\u628a IP+\u7aef\u53e3\u585e\u8fdb\u53bb\u8fdb\u884c\u5224\u65ad\u3002"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:"{40-48}","{40-48}":!0},'// \u4ece\u547d\u4ee4\u884c\u83b7\u53d6\u8f93\u5165\nhosts = cli.String("target", cli.setHelp("scan hosts"))\nports = cli.String("ports", cli.setDefault("80,8080-8082,443,888"))\n\nif hosts == "" {\n    die("target is empty")\n}\n\n// \u6784\u5efa\u7aef\u53e3\u626b\u63cf\u4efb\u52a1\nsynResults, err := synscan.Scan(hosts, ports)\ndie(err)\n\n// \u6784\u5efa\u6307\u7eb9\u626b\u63cf\u4efb\u52a1\nres, err := servicescan.ScanFromSynResult(synResults)\ndie(err)\n\nfp, err = file.TempFile("scan_and_crawler")\ndie(err)\ndefer fp.Close()\n\n\n// \u6784\u5efa\u6307\u7eb9\u626b\u63cf\u5e76\u53d1\u4efb\u52a1\ncrawlerSwg := sync.NewSizedWaitGroup(10)\ndefer crawlerSwg.Wait()\nfunc startCrawler(target) {\n    crawlerSwg.Add()\n    go func{\n        defer crawlerSwg.Done()\n\n        res, err := crawler.Start(target, crawler.maxRequest(50))\n        die(err)\n        for req := range res {\n            println(req.Url())\n            fp.WriteLine(req.Url())\n        }\n    }\n}\n\n\n// \u5224\u65ad\u6307\u7eb9\u626b\u63cf\u7ed3\u679c\uff0c\u6839\u636e\u6307\u7eb9\u626b\u63cf\u7ed3\u679c\u6765\u542f\u52a8\u7aef\u53e3\u626b\u63cf\nfor result := range res {\n    if result.IsOpen() {\n        if result.Fingerprint != nil && result.Fingerprint.HttpFlows != nil{\n            // \u5224\u65ad\u626b\u63cf\u6307\u7eb9\n            startCrawler(str.HostPort(result.Target, result.Port))\n        }\n    }\n}\n')),(0,i.kt)("h2",{id:"0x04-\u7b80\u5355\u5c0f\u6d4b\u8bd5"},"0x04 \u7b80\u5355\u5c0f\u6d4b\u8bd5"),(0,i.kt)("p",null,"\u5f53\u6211\u4eec\u5b8c\u6210\u4e0a\u8ff0\u4ee3\u7801\u7684\u65f6\u5019\uff0c\u6211\u4eec\u53ef\u4ee5\u6267\u884c "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"yak scan_and_crawler.yak --target 47.***.**.**/24 --ports 80,8000-8003,8080-8083,443\n")),(0,i.kt)("p",null,"\u6267\u884c\u4e4b\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u5bfb\u627e\u5230\u722c\u866b\u8bf7\u6c42\u5bf9\u5e94\u7684 URL \u4ee5\u53ca\u54cd\u5e94\u3002\u4ece\u800c\u53ef\u4ee5\u6536\u96c6\u8fd9\u4e9b\u5185\u5bb9\u4ea4\u7ed9 nuclei \u8fdb\u884c\u6f0f\u6d1e\u626b\u63cf\u3002"))}u.isMDXComponent=!0},5669:function(e,n,r){"use strict";n.Z=r.p+"assets/images/process-931801baa14462048408a2ecb9b43afe.jpg"}}]);