(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[3415],{3905:function(e,r,i){"use strict";i.d(r,{Zo:function(){return u},kt:function(){return f}});var n=i(7294);function t(e,r,i){return r in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e}function o(e,r){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?o(Object(i),!0).forEach((function(r){t(e,r,i[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(i,r))}))}return e}function l(e,r){if(null==e)return{};var i,n,t=function(e,r){if(null==e)return{};var i,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],r.indexOf(i)>=0||(t[i]=e[i]);return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],r.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var p=n.createContext({}),d=function(e){var r=n.useContext(p),i=r;return e&&(i="function"==typeof e?e(r):a(a({},r),e)),i},u=function(e){var r=d(e.components);return n.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var i=e.components,t=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(i),f=t,s=m["".concat(p,".").concat(f)]||m[f]||c[f]||o;return i?n.createElement(s,a(a({ref:r},u),{},{components:i})):n.createElement(s,a({ref:r},u))}));function f(e,r){var i=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=i.length,a=new Array(o);a[0]=m;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:t,a[1]=l;for(var d=2;d<o;d++)a[d]=i[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},7848:function(e,r,i){"use strict";i.r(r),i.d(r,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var n=i(4034),t=i(9973),o=(i(7294),i(3905)),a={sidebar_position:4},l="[io] \u7cfb\u7edf\u8bfb\u5199\u5de5\u5177\u5e93",p={unversionedId:"buildinlibs/lib_io",id:"buildinlibs/lib_io",isDocsHomePage:!1,title:"[io] \u7cfb\u7edf\u8bfb\u5199\u5de5\u5177\u5e93",description:"1. \u628a\u540e\u9762\u7684 var2(io.Reader) \u7684\u8f93\u51fa\u63a5\u5165\u5230 var1(io.Writer) \u4e2d fn io.Copy(var1 io.Reader): (int64, error)",source:"@site/docs/buildinlibs/lib_io.md",sourceDirName:"buildinlibs",slug:"/buildinlibs/lib_io",permalink:"/docs/buildinlibs/lib_io",editUrl:"https://github.com/yaklang/docs/buildinlibs/lib_io.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"[file] \u6587\u4ef6\u64cd\u4f5c\u4e0eIO\u5e93",permalink:"/docs/buildinlibs/lib_file"},next:{title:"[re] \u6b63\u5219\u5de5\u5177\u5e93",permalink:"/docs/buildinlibs/lib_re"}},d=[],u={toc:d};function c(e){var r=e.components,i=(0,t.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"io-\u7cfb\u7edf\u8bfb\u5199\u5de5\u5177\u5e93"},"[io]"," \u7cfb\u7edf\u8bfb\u5199\u5de5\u5177\u5e93"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u628a\u540e\u9762\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"var_2(io.Reader)")," \u7684\u8f93\u51fa\u63a5\u5165\u5230 ",(0,o.kt)("inlineCode",{parentName:"li"},"var_1(io.Writer)")," \u4e2d ",(0,o.kt)("inlineCode",{parentName:"li"},"fn io.Copy(var_1: io.Writer, var_2: io.Reader): (int64, error)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"io.Copy")," \u589e\u52a0\u4e86\u7f13\u51b2\u533a\u9650\u5236\uff0c\u8be6\u7ec6\u7528\u6cd5\u53ef\u4ee5\u53c2\u8003",(0,o.kt)("a",{parentName:"li",href:"https://golang.org/pkg/io/#CopyBuffer"},"Golang\u51fd\u6570")," ",(0,o.kt)("inlineCode",{parentName:"li"},"fn io.CopyBuffer(var_1: io.Writer, var_2: io.Reader, var_3: []uint8): (int64, error)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"io.Copy")," \u589e\u52a0\u4e86\u957f\u5ea6\u9650\u5236\uff0c\u8be6\u7ec6\u7528\u6cd5\u53ef\u4ee5\u53c2\u8003",(0,o.kt)("a",{parentName:"li",href:"https://golang.org/pkg/io/#CopyN"},"Golang\u51fd\u6570")," ",(0,o.kt)("inlineCode",{parentName:"li"},"fn io.CopyN(var_1: io.Writer, var_2: io.Reader, var_3: int64): (int64, error)")),(0,o.kt)("li",{parentName:"ol"},"\u8bfb\u53d6 ",(0,o.kt)("inlineCode",{parentName:"li"},"io.Reader")," \u7684\u524d\u51e0\u4e2a\u5b57\u8282 ",(0,o.kt)("inlineCode",{parentName:"li"},"fn io.LimitReader(var_1: io.Reader, var_2: int64): io.Reader")),(0,o.kt)("li",{parentName:"ol"},"\u628a\u591a\u4e2a reader \u878d\u5408\u6210\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"li"},"fn io.MultiReader(vars: ...io.Reader): io.Reader")),(0,o.kt)("li",{parentName:"ol"},"\u6309\u7167\u5757(Section)\u6765\u8bfb\u4e00\u4e2a Reader ",(0,o.kt)("inlineCode",{parentName:"li"},"fn io.NewSectionReader(var_1: io.ReaderAt, var_2: int64, var_3: int64): *io.SectionReader")),(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c\u8bfb\u5230 Nop/Null/\u7a7a\u5b57\u7b26\uff0c\u5c31\u5173\u6389 io.Reader ",(0,o.kt)("inlineCode",{parentName:"li"},"fn io.NopCloser(var_1: io.Reader): io.ReadCloser")),(0,o.kt)("li",{parentName:"ol"},"\u6784\u5efa\u4e00\u4e2a\u8bfb\u5199\u7ba1\u9053 ",(0,o.kt)("inlineCode",{parentName:"li"},"fn io.Pipe(): (*io.PipeReader, *io.PipeWriter)")),(0,o.kt)("li",{parentName:"ol"},"\u8bfb\u51fa ",(0,o.kt)("inlineCode",{parentName:"li"},"io.Reader")," \u7684\u5168\u90e8\u5185\u5bb9 ",(0,o.kt)("inlineCode",{parentName:"li"},"fn io.ReadAll(var_1: io.Reader): ([]uint8, error)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"fn io.ReadAtLeast(var_1: io.Reader, var_2: []uint8, var_3: int): (int, error)")),(0,o.kt)("li",{parentName:"ol"},"\u6bcf\u4e00\u79d2\u949f\u8bfb\u4e00\u6b21 reader \u4e2d\u7684\u5185\u5bb9\uff0c\u56de\u8c03\u51fd\u6570\u5305\u542b\u7f13\u51b2\u533a\u5185\u5bb9 ",(0,o.kt)("inlineCode",{parentName:"li"},"fn io.ReadEvery1s(var_1: context.Context, var_2: io.Reader, var_3: func([]uint8) bool)")),(0,o.kt)("li",{parentName:"ol"},"\u8bfb\u4e00\u4e2a\u6587\u4ef6\u4e2d\u7684\u5168\u90e8\u5185\u5bb9 ",(0,o.kt)("inlineCode",{parentName:"li"},"fn io.ReadFile(var_1: string): ([]uint8, error)")),(0,o.kt)("li",{parentName:"ol"},"\u8bfb\u6ee1\u4e00\u4e2a\u7f13\u51b2\u533a ",(0,o.kt)("inlineCode",{parentName:"li"},"fn io.ReadFull(var_1: io.Reader, var_2: []uint8): (int, error)")),(0,o.kt)("li",{parentName:"ol"},"io.Reader \u5206\u6d41\uff0c\u5305\u88c5\u51fa\u4e00\u4e2a reader\uff0c\u8bfb\u65b0\u7684 Reader\uff0c\u8bfb\u51fa\u6765\u7684\u503c\u4f1a\u5199\u5165 var_2(io.Writer)",(0,o.kt)("inlineCode",{parentName:"li"},"fn io.TeeReader(var_1: io.Reader, var_2: io.Writer): io.Reader")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"fn io.WriteString(var_1: io.Writer, var_2: string): (int, error)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"io.Discard: io.discard = <nil>")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"io.EOF: *errors.errorString = <nil>"))))}c.isMDXComponent=!0}}]);