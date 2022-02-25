(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[8846],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return o},kt:function(){return f}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var k=r.createContext({}),d=function(t){var e=r.useContext(k),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},o=function(t){var e=d(t.components);return r.createElement(k.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},N=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,k=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),N=d(a),f=n,c=N["".concat(k,".").concat(f)]||N[f]||m[f]||l;return a?r.createElement(c,p(p({ref:e},o),{},{components:a})):r.createElement(c,p({ref:e},o))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,p=new Array(l);p[0]=N;var i={};for(var k in e)hasOwnProperty.call(e,k)&&(i[k]=e[k]);i.originalType=t,i.mdxType="string"==typeof t?t:n,p[1]=i;for(var d=2;d<l;d++)p[d]=a[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}N.displayName="MDXCreateElement"},7192:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return k},toc:function(){return d},default:function(){return m}});var r=a(4034),n=a(9973),l=(a(7294),a(3905)),p={},i="poc",k={unversionedId:"api/poc",id:"api/poc",isDocsHomePage:!1,title:"poc",description:"|\u6210\u5458\u51fd\u6570|\u51fd\u6570\u63cf\u8ff0/\u4ecb\u7ecd|",source:"@site/docs/api/poc.md",sourceDirName:"api",slug:"/api/poc",permalink:"/docs/api/poc",editUrl:"https://github.com/yaklang/docs/api/poc.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ping",permalink:"/docs/api/ping"},next:{title:"re",permalink:"/docs/api/re"}},d=[{value:"\u51fd\u6570\u5b9a\u4e49",id:"\u51fd\u6570\u5b9a\u4e49",children:[{value:"poc.FixHTTPRequest",id:"pocfixhttprequest",children:[]},{value:"poc.FixHTTPResponse",id:"pocfixhttpresponse",children:[]},{value:"poc.HTTP",id:"pochttp",children:[]},{value:"poc.ParseBytesToHTTPRequest",id:"pocparsebytestohttprequest",children:[]},{value:"poc.ParseBytesToHTTPResponse",id:"pocparsebytestohttpresponse",children:[]},{value:"poc.Split",id:"pocsplit",children:[]},{value:"poc.host",id:"pochost",children:[]},{value:"poc.https",id:"pochttps",children:[]},{value:"poc.noRedirect",id:"pocnoredirect",children:[]},{value:"poc.params",id:"pocparams",children:[]},{value:"poc.port",id:"pocport",children:[]},{value:"poc.proxy",id:"pocproxy",children:[]},{value:"poc.redirectTimes",id:"pocredirecttimes",children:[]},{value:"poc.timeout",id:"poctimeout",children:[]}]}],o={toc:d};function m(t){var e=t.components,a=(0,n.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"poc"},"poc"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u6210\u5458\u51fd\u6570"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u51fd\u6570\u63cf\u8ff0/\u4ecb\u7ecd"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#pocfixhttprequest"},"poc.FixHTTPRequest")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4fee\u590d\u53ef\u80fd\u6709\u95ee\u9898\u7684 http request \u6570\u636e\u5305")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#pocfixhttpresponse"},"poc.FixHTTPResponse")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4fee\u590d\u53ef\u80fd\u6709\u95ee\u9898\u7684 http response \u6570\u636e\u5305")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#pochttp"},"poc.HTTP")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u76f4\u63a5\u4f7f\u7528\u4e00\u4e2a\u6570\u636e\u5305\uff0c\u53d1\u9001 HTTP \u8bf7\u6c42")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#pocparsebytestohttprequest"},"poc.ParseBytesToHTTPRequest")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u628a\u4e00\u4e2a\u539f\u59cb\u6570\u636e\u5305 bytes \u8f6c\u53d8\u6210 HTTP \u8bf7\u6c42")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#pocparsebytestohttpresponse"},"poc.ParseBytesToHTTPResponse")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u628a\u4e00\u4e2a\u6570\u636e\u5305\u8f6c\u53d8\u6210\u53ef\u7528\u7684 HTTP Response \u5bf9\u8c61")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#pocsplit"},"poc.Split")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u628a\u4e00\u4e2a\u6570\u636e\u5305\u7684 Header \u90e8\u5206\u548c Body \u5206\u5f00\uff0cHeader \u662f string\uff0cbody \u90e8\u5206\u662f bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#pochost"},"poc.host")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5f3a\u5236\u6307\u5b9a\u8fde\u63a5 Host\uff08\u4e00\u822c\u7528\u4e8e host\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#pochttps"},"poc.https")),(0,l.kt)("td",{parentName:"tr",align:"left"},"forceHttps")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#pocnoredirect"},"poc.noRedirect")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#pocparams"},"poc.params")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6784\u9020\u6570\u636e\u5305\u65f6\u7684\u53c2\u6570\uff0c\u9700\u8981\u4e00\u4e2a map","[string]","any")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#pocport"},"poc.port")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5f3a\u884c\u8bbe\u7f6e\u8fdc\u7aef\u8fde\u63a5\u7684\u7aef\u53e3\uff08\u9ed8\u8ba4\u53ef\u4ee5\u81ea\u52a8\u8bbe\u7f6e\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#pocproxy"},"poc.proxy")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bbe\u7f6e\u4ee3\u7406")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#pocredirecttimes"},"poc.redirectTimes")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bbe\u7f6e\u91cd\u5b9a\u5411\u7684\u6b21\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"#poctimeout"},"poc.timeout")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8bbe\u7f6e PoC Timeout")))),(0,l.kt)("h2",{id:"\u51fd\u6570\u5b9a\u4e49"},"\u51fd\u6570\u5b9a\u4e49"),(0,l.kt)("h3",{id:"pocfixhttprequest"},"poc.FixHTTPRequest"),(0,l.kt)("p",null,"\u4fee\u590d\u53ef\u80fd\u6709\u95ee\u9898\u7684 http request \u6570\u636e\u5305"),(0,l.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,l.kt)("h4",{id:"\u5b9a\u4e49\uff1a"},"\u5b9a\u4e49\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"func poc.FixHTTPRequest(v1: bytes) return (r0: bytes)")),(0,l.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"v1"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"bytes")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"r0"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"bytes")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"pocfixhttpresponse"},"poc.FixHTTPResponse"),(0,l.kt)("p",null,"\u4fee\u590d\u53ef\u80fd\u6709\u95ee\u9898\u7684 http response \u6570\u636e\u5305"),(0,l.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-1"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,l.kt)("h4",{id:"\u5b9a\u4e49\uff1a-1"},"\u5b9a\u4e49\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"func poc.FixHTTPResponse(v1: bytes) return (r0: bytes)")),(0,l.kt)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"v1"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"bytes")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c-1"},"\u8fd4\u56de\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"r0"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"bytes")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"pochttp"},"poc.HTTP"),(0,l.kt)("p",null,"\u76f4\u63a5\u4f7f\u7528\u4e00\u4e2a\u6570\u636e\u5305\uff0c\u53d1\u9001 HTTP \u8bf7\u6c42"),(0,l.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-2"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,l.kt)("h4",{id:"\u5b9a\u4e49\uff1a-2"},"\u5b9a\u4e49\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"func poc.HTTP(packet: any, extraParams ...yaklib.pocConfig) return (responsePacket: bytes, requestPacket: bytes, err: error)")),(0,l.kt)("h4",{id:"\u53c2\u6570-2"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"packet"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"any")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"extraParams"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"...yaklib.pocConfig")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c-2"},"\u8fd4\u56de\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"responsePacket"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"bytes")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"requestPacket"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"bytes")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"err"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"error")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"pocparsebytestohttprequest"},"poc.ParseBytesToHTTPRequest"),(0,l.kt)("p",null,"\u628a\u4e00\u4e2a\u539f\u59cb\u6570\u636e\u5305 bytes \u8f6c\u53d8\u6210 HTTP \u8bf7\u6c42"),(0,l.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-3"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,l.kt)("h4",{id:"\u5b9a\u4e49\uff1a-3"},"\u5b9a\u4e49\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"func poc.ParseBytesToHTTPRequest(requestRaw: bytes) return (req: *http.Request, err: error)")),(0,l.kt)("h4",{id:"\u53c2\u6570-3"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"requestRaw"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"bytes")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c-3"},"\u8fd4\u56de\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"req"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"*http.Request")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"err"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"error")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"pocparsebytestohttpresponse"},"poc.ParseBytesToHTTPResponse"),(0,l.kt)("p",null,"\u628a\u4e00\u4e2a\u6570\u636e\u5305\u8f6c\u53d8\u6210\u53ef\u7528\u7684 HTTP Response \u5bf9\u8c61"),(0,l.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-4"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,l.kt)("h4",{id:"\u5b9a\u4e49\uff1a-4"},"\u5b9a\u4e49\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"func poc.ParseBytesToHTTPResponse(raw: bytes) return (rsp: *http.Response, r1: error)")),(0,l.kt)("h4",{id:"\u53c2\u6570-4"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"raw"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"bytes")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c-4"},"\u8fd4\u56de\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"rsp"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"*http.Response")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"r1"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"error")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"pocsplit"},"poc.Split"),(0,l.kt)("p",null,"\u628a\u4e00\u4e2a\u6570\u636e\u5305\u7684 Header \u90e8\u5206\u548c Body \u5206\u5f00\uff0cHeader \u662f string\uff0cbody \u90e8\u5206\u662f bytes"),(0,l.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-5"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,l.kt)("h4",{id:"\u5b9a\u4e49\uff1a-5"},"\u5b9a\u4e49\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"func poc.Split(v1: bytes, v2 ...func(string)) return (r0: string, r1: bytes)")),(0,l.kt)("h4",{id:"\u53c2\u6570-5"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"v1"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"bytes")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"v2"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"...func(string)")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c-5"},"\u8fd4\u56de\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"r0"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"r1"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"bytes")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"pochost"},"poc.host"),(0,l.kt)("p",null,"\u5f3a\u5236\u6307\u5b9a\u8fde\u63a5 Host\uff08\u4e00\u822c\u7528\u4e8e host\uff09"),(0,l.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-6"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,l.kt)("h4",{id:"\u5b9a\u4e49\uff1a-6"},"\u5b9a\u4e49\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"func poc.host(host: string) return (r0: func pocConfig(v1: *yaklib._pocConfig) )")),(0,l.kt)("h4",{id:"\u53c2\u6570-6"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"host"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c-6"},"\u8fd4\u56de\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"r0"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"func pocConfig(v1: *yaklib._pocConfig) ")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"pochttps"},"poc.https"),(0,l.kt)("p",null,"forceHttps"),(0,l.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-7"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,l.kt)("h4",{id:"\u5b9a\u4e49\uff1a-7"},"\u5b9a\u4e49\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"func poc.https(b: bool) return (r0: func pocConfig(v1: *yaklib._pocConfig) )")),(0,l.kt)("h4",{id:"\u53c2\u6570-7"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"b"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"bool")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c-7"},"\u8fd4\u56de\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"r0"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"func pocConfig(v1: *yaklib._pocConfig) ")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"pocnoredirect"},"poc.noRedirect"),(0,l.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-8"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,l.kt)("h4",{id:"\u5b9a\u4e49\uff1a-8"},"\u5b9a\u4e49\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"func poc.noRedirect(v1: bool) return (r0: func pocConfig(v1: *yaklib._pocConfig) )")),(0,l.kt)("h4",{id:"\u53c2\u6570-8"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"v1"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"bool")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c-8"},"\u8fd4\u56de\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"r0"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"func pocConfig(v1: *yaklib._pocConfig) ")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"pocparams"},"poc.params"),(0,l.kt)("p",null,"\u6784\u9020\u6570\u636e\u5305\u65f6\u7684\u53c2\u6570\uff0c\u9700\u8981\u4e00\u4e2a map","[string]","any"),(0,l.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-9"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,l.kt)("h4",{id:"\u5b9a\u4e49\uff1a-9"},"\u5b9a\u4e49\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"func poc.params(params: any) return (r0: func pocConfig(v1: *yaklib._pocConfig) )")),(0,l.kt)("h4",{id:"\u53c2\u6570-9"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"params"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"any")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c-9"},"\u8fd4\u56de\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"r0"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"func pocConfig(v1: *yaklib._pocConfig) ")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"pocport"},"poc.port"),(0,l.kt)("p",null,"\u5f3a\u884c\u8bbe\u7f6e\u8fdc\u7aef\u8fde\u63a5\u7684\u7aef\u53e3\uff08\u9ed8\u8ba4\u53ef\u4ee5\u81ea\u52a8\u8bbe\u7f6e\uff09"),(0,l.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-10"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,l.kt)("h4",{id:"\u5b9a\u4e49\uff1a-10"},"\u5b9a\u4e49\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"func poc.port(v1: int) return (r0: func pocConfig(v1: *yaklib._pocConfig) )")),(0,l.kt)("h4",{id:"\u53c2\u6570-10"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"v1"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c-10"},"\u8fd4\u56de\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"r0"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"func pocConfig(v1: *yaklib._pocConfig) ")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"pocproxy"},"poc.proxy"),(0,l.kt)("p",null,"\u8bbe\u7f6e\u4ee3\u7406"),(0,l.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-11"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,l.kt)("h4",{id:"\u5b9a\u4e49\uff1a-11"},"\u5b9a\u4e49\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"func poc.proxy(proxyUrl ...string) return (r0: func pocConfig(v1: *yaklib._pocConfig) )")),(0,l.kt)("h4",{id:"\u53c2\u6570-11"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"proxyUrl"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"...string")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c-11"},"\u8fd4\u56de\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"r0"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"func pocConfig(v1: *yaklib._pocConfig) ")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"pocredirecttimes"},"poc.redirectTimes"),(0,l.kt)("p",null,"\u8bbe\u7f6e\u91cd\u5b9a\u5411\u7684\u6b21\u6570"),(0,l.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-12"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,l.kt)("h4",{id:"\u5b9a\u4e49\uff1a-12"},"\u5b9a\u4e49\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"func poc.redirectTimes(maxRetry: int) return (r0: func pocConfig(v1: *yaklib._pocConfig) )")),(0,l.kt)("h4",{id:"\u53c2\u6570-12"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"maxRetry"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c-12"},"\u8fd4\u56de\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"r0"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"func pocConfig(v1: *yaklib._pocConfig) ")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"poctimeout"},"poc.timeout"),(0,l.kt)("p",null,"\u8bbe\u7f6e PoC Timeout"),(0,l.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-13"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,l.kt)("h4",{id:"\u5b9a\u4e49\uff1a-13"},"\u5b9a\u4e49\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"func poc.timeout(seconds: float64) return (r0: func pocConfig(v1: *yaklib._pocConfig) )")),(0,l.kt)("h4",{id:"\u53c2\u6570-13"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"seconds"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"float64")),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c-13"},"\u8fd4\u56de\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"r0"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"func pocConfig(v1: *yaklib._pocConfig) ")),(0,l.kt)("td",{parentName:"tr",align:"left"})))))}m.isMDXComponent=!0}}]);