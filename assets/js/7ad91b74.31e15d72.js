(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[963],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,d=p["".concat(o,".").concat(f)]||p[f]||m[f]||l;return n?r.createElement(d,c(c({ref:t},u),{},{components:n})):r.createElement(d,c({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<l;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5378:function(e,t,n){"use strict";var r=n(7548),a=n(7294),l=n(4308);t.Z=function(){var e=(0,a.useState)({}),t=(0,r.Z)(e,2),n=t[0],c=t[1];return(0,a.useEffect)((function(){var e=l.ZP.subscribe((function(e){c(e)}));return function(){return l.ZP.unsubscribe(e)}}),[]),n}},139:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return ce},default:function(){return ue},frontMatter:function(){return le},metadata:function(){return ie},toc:function(){return oe}});var r=n(4034),a=n(9973),l=n(7294),c=n(3905),i=n(7785),o=n(9144),s=n(9650),u=n(8420),m=n(5596),p=n(1230),f=n(404),d=n(5746),g=n(2172),h=n(4108),E=n(7548),v=n(4184),b=n.n(v),y=n(4084),k=n(2550),w=n(6032),Z=n(1687),O=n(4308),x=n(5378),j=l.createContext("default"),z=function(e){var t=e.children,n=e.size;return l.createElement(j.Consumer,null,(function(e){return l.createElement(j.Provider,{value:n||e},t)}))},P=j,C=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},S=function(e,t){var n,a,c=l.useContext(P),i=l.useState(1),o=(0,E.Z)(i,2),s=o[0],u=o[1],m=l.useState(!1),p=(0,E.Z)(m,2),f=p[0],d=p[1],v=l.useState(!0),j=(0,E.Z)(v,2),z=j[0],S=j[1],N=l.useRef(),_=l.useRef(),T=(0,k.sQ)(t,N),L=l.useContext(w.E_).getPrefixCls,M=function(){if(_.current&&N.current){var t=_.current.offsetWidth,n=N.current.offsetWidth;if(0!==t&&0!==n){var r=e.gap,a=void 0===r?4:r;2*a<n&&u(n-2*a<t?(n-2*a)/t:1)}}};l.useEffect((function(){d(!0)}),[]),l.useEffect((function(){S(!0),u(1)}),[e.src]),l.useEffect((function(){M()}),[e.gap]);var D=e.prefixCls,H=e.shape,R=e.size,Y=e.src,V=e.srcSet,A=e.icon,I=e.className,F=e.alt,W=e.draggable,X=e.children,q=C(e,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children"]),B="default"===R?c:R,G=(0,x.Z)(),Q=l.useMemo((function(){if("object"!==(0,h.Z)(B))return{};var e=O.c4.find((function(e){return G[e]})),t=B[e];return t?{width:t,height:t,lineHeight:"".concat(t,"px"),fontSize:A?t/2:18}:{}}),[G,B]);(0,Z.Z)(!("string"==typeof A&&A.length>2),"Avatar","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(A,"` at https://ant.design/components/icon"));var J,K=L("avatar",D),U=b()((n={},(0,g.Z)(n,"".concat(K,"-lg"),"large"===B),(0,g.Z)(n,"".concat(K,"-sm"),"small"===B),n)),$=l.isValidElement(Y),ee=b()(K,U,(a={},(0,g.Z)(a,"".concat(K,"-").concat(H),!!H),(0,g.Z)(a,"".concat(K,"-image"),$||Y&&z),(0,g.Z)(a,"".concat(K,"-icon"),!!A),a),I),te="number"==typeof B?{width:B,height:B,lineHeight:"".concat(B,"px"),fontSize:A?B/2:18}:{};if("string"==typeof Y&&z)J=l.createElement("img",{src:Y,draggable:W,srcSet:V,onError:function(){var t=e.onError;!1!==(t?t():void 0)&&S(!1)},alt:F});else if($)J=Y;else if(A)J=A;else if(f||1!==s){var ne="scale(".concat(s,") translateX(-50%)"),re={msTransform:ne,WebkitTransform:ne,transform:ne},ae="number"==typeof B?{lineHeight:"".concat(B,"px")}:{};J=l.createElement(y.Z,{onResize:M},l.createElement("span",{className:"".concat(K,"-string"),ref:function(e){_.current=e},style:(0,r.Z)((0,r.Z)({},ae),re)},X))}else J=l.createElement("span",{className:"".concat(K,"-string"),style:{opacity:0},ref:function(e){_.current=e}},X);return delete q.onError,delete q.gap,l.createElement("span",(0,r.Z)({},q,{style:(0,r.Z)((0,r.Z)((0,r.Z)({},te),Q),q.style),className:ee,ref:T}),J)},N=l.forwardRef(S);N.displayName="Avatar",N.defaultProps={shape:"circle",size:"default"};var _=N,T=n(344),L=n(3884),M=n(9713),D=function(e){return e?"function"==typeof e?e():e:null},H=n(3603),R=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},Y=l.forwardRef((function(e,t){var n=e.prefixCls,a=e.title,c=e.content,i=R(e,["prefixCls","title","content"]),o=l.useContext(w.E_).getPrefixCls,s=o("popover",n),u=o();return l.createElement(M.Z,(0,r.Z)({},i,{prefixCls:s,ref:t,overlay:function(e){return l.createElement(l.Fragment,null,a&&l.createElement("div",{className:"".concat(e,"-title")},D(a)),l.createElement("div",{className:"".concat(e,"-inner-content")},D(c)))}(s),transitionName:(0,H.m)(u,"zoom-big",i.transitionName)}))}));Y.displayName="Popover",Y.defaultProps={placement:"top",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}};var V=Y,A=function(e){var t=l.useContext(w.E_),n=t.getPrefixCls,r=t.direction,a=e.prefixCls,c=e.className,i=void 0===c?"":c,o=e.maxCount,s=e.maxStyle,u=e.size,m=n("avatar-group",a),p=b()(m,(0,g.Z)({},"".concat(m,"-rtl"),"rtl"===r),i),f=e.children,d=e.maxPopoverPlacement,h=void 0===d?"top":d,E=(0,T.Z)(f).map((function(e,t){return(0,L.Tm)(e,{key:"avatar-key-".concat(t)})})),v=E.length;if(o&&o<v){var y=E.slice(0,o),k=E.slice(o,v);return y.push(l.createElement(V,{key:"avatar-popover-key",content:k,trigger:"hover",placement:h,overlayClassName:"".concat(m,"-popover")},l.createElement(_,{style:s},"+".concat(v-o)))),l.createElement(z,{size:u},l.createElement("div",{className:p,style:e.style},y))}return l.createElement(z,{size:u},l.createElement("div",{className:p,style:e.style},E))},I=_;I.Group=A;var F=I,W={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 289.1a362.49 362.49 0 00-79.9-115.7 370.83 370.83 0 00-118.2-77.8C610.7 76.6 562.1 67 512 67c-50.1 0-98.7 9.6-144.5 28.5-44.3 18.3-84 44.5-118.2 77.8A363.6 363.6 0 00169.4 289c-19.5 45-29.4 92.8-29.4 142 0 70.6 16.9 140.9 50.1 208.7 26.7 54.5 64 107.6 111 158.1 80.3 86.2 164.5 138.9 188.4 153a43.9 43.9 0 0022.4 6.1c7.8 0 15.5-2 22.4-6.1 23.9-14.1 108.1-66.8 188.4-153 47-50.4 84.3-103.6 111-158.1C867.1 572 884 501.8 884 431.1c0-49.2-9.9-97-29.4-142zM512 880.2c-65.9-41.9-300-207.8-300-449.1 0-77.9 31.1-151.1 87.6-206.3C356.3 169.5 431.7 139 512 139s155.7 30.5 212.4 85.9C780.9 280 812 353.2 812 431.1c0 241.3-234.1 407.2-300 449.1zm0-617.2c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 551c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 439c0-29.9 11.7-58 32.8-79.2C454 338.6 482.1 327 512 327c29.9 0 58 11.6 79.2 32.8C612.4 381 624 409.1 624 439c0 29.9-11.6 58-32.8 79.2z"}}]},name:"environment",theme:"outlined"},X=n(65),q=function(e,t){return l.createElement(X.Z,Object.assign({},e,{ref:t,icon:W}))};q.displayName="EnvironmentOutlined";var B=l.forwardRef(q),G=n(8874),Q={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]},name:"home",theme:"outlined"},J=function(e,t){return l.createElement(X.Z,Object.assign({},e,{ref:t,icon:Q}))};J.displayName="HomeOutlined";var K=l.forwardRef(J),U=i.Z.Text,$=o.Z.Meta,ee=function(){return l.createElement(ae,{who:[{name:l.createElement(s.Z,null,"v1ll4n ",l.createElement("div",{style:{fontSize:12}},l.createElement("a",{href:"/",target:"_blank"},"@Yak")," \u9879\u76ee\u4f5c\u8005")),avatar:"/img/who/v1ll4n.jpg",description:l.createElement("div",null,"\u5b89\u5168\u7814\u53d1\u4ece\u4e1a\u4eba\u5458",l.createElement("br",null),"\u78b0\u5de7\u4f1a\u5199\u70b9\u4ee3\u7801 ",l.createElement("br",null),l.createElement(B,null)," \u6210\u90fd\uff0c\u56db\u5ddd"),githubLink:"https://github.com/VillanCh",span:24,border:!1},{name:l.createElement(s.Z,null,"sucre ",l.createElement("div",{style:{fontSize:12}},l.createElement("a",{href:"http://www.sec-redclub.com/",target:"_blank"},"@\u7ea2\u65e5\u5b89\u5168"))),avatar:"/img/who/sucre.jpg",description:l.createElement("div",null,"\u4e59\u65b9\u7ea2\u961f\u8d1f\u8d23\u4eba",l.createElement("br",null),"\u73b0\u4f9b\u804c\u4e8e ",l.createElement("a",{href:"",target:"_blank"},"@\u56db\u7ef4\u521b\u667a")," ",l.createElement("br",null),l.createElement(B,null)," \u5317\u4eac"),githubLink:"https://github.com/linksucre",span:12,border:!1},{name:l.createElement(s.Z,null,"f1ys0ar ",l.createElement("div",{style:{fontSize:12}},l.createElement("a",{href:"/",target:"_blank"},"@Yak.pwn")," \u6a21\u5757 owner")),avatar:"/img/who/f1ys0ar.jpeg",description:l.createElement("div",null,"\u5728\u8bfb\u535a\u58eb ",l.createElement("a",{href:"https://www.ucas.ac.cn/",target:"_blank"},"@\u4e2d\u56fd\u79d1\u5b66\u9662\u5927\u5b66"),l.createElement("br",null),l.createElement(B,null)," \u5317\u4eac"),githubLink:"https://github.com/flysoar",span:12,border:!1},{name:l.createElement(s.Z,null,"yuqi ",l.createElement("div",{style:{fontSize:12}},l.createElement("a",{href:"/",target:"_blank"},"@yaklang.io"))),avatar:"/img/who/yuqi.jpg",description:l.createElement("div",null,"web\u5b89\u5168 ",l.createElement(U,{mark:!0},"\u5b88\u95e8\u5458"),l.createElement("br",null),l.createElement(B,null)," \u6210\u90fd"),span:12,border:!1},{name:l.createElement(s.Z,null,"small_j ",l.createElement("div",{style:{fontSize:12}},l.createElement("a",{href:"/",target:"_blank"},"@yaklang.io"))),avatar:"/img/who/small_j.jpg",description:l.createElement("div",null,"\u591a\u5b66\u4e60\uff0c\u591a\u559d\u6c34\uff0c\u65e9\u7761\u65e9\u8d77 ",l.createElement("br",null),l.createElement(B,null)," \u6210\u90fd"),span:12,border:!1}]})},te=function(){return l.createElement(ae,{who:[{name:l.createElement(s.Z,null,"TimWhite ",l.createElement("div",{style:{fontSize:12}},l.createElement("a",{href:"https://xray.cool/team/",target:"_blank"},"@xrayteam"))),avatar:"/img/who/timwhite.png",description:l.createElement("div",null,"\u7ea2\u961f\u653b\u9632\u6280\u672f\u7814\u7a76\u5458 ",l.createElement("br",null),"\u514d\u6740/\u5bf9\u6297 \u7231\u597d\u8005 ",l.createElement("br",null),l.createElement(B,null)," \u4e0a\u6d77"),githubLink:"https://github.com/timwhitez",span:12,border:!1},{name:l.createElement(s.Z,null,"ykc ",l.createElement("div",{style:{fontSize:12}},l.createElement("a",{href:"https://xray.cool/",target:"_blank"},"@xray @rad")," \u56e2\u961f")),avatar:"/img/who/ykc.jpg",description:l.createElement("div",null,"\u73b0\u4f9b\u804c\u4e8e ",l.createElement("a",{href:"https://www.chaitin.cn/zh/",target:"_blank"},"@\u957f\u4ead\u79d1\u6280")," ",l.createElement("br",null),l.createElement(B,null)," \u676d\u5dde\uff0c\u6d59\u6c5f"),githubLink:"https://github.com/chinaykc",span:12,border:!1}]})},ne=function(){return l.createElement(ae,{who:[{name:l.createElement(s.Z,null,"cnrstar ",l.createElement("div",{style:{fontSize:12}},l.createElement("a",{href:"http://www.4dogs.cn/",target:"_blank"},"@4dogs.cn"))),avatar:"/img/who/rstar.jpg",description:l.createElement("div",null,"\u77e5\u8bc6\u56fe\u8c31\u7684\u5b89\u5168\u9886\u57df\u5b9e\u8df5\u8005",l.createElement("br",null),l.createElement(B,null)," \u5317\u4eac"),span:12,border:!1},{name:l.createElement(s.Z,null,"\u7fe0\u82b1\u54e5\u54e5 ",l.createElement("div",{style:{fontSize:12}},l.createElement("a",{href:"https://www.qingteng.cn/",target:"_blank"},"@\u9752\u85e4 \u4e91\u5b89\u5168"))),avatar:"/img/who/cuihuagege.jpg",description:l.createElement("div",null,"\u5b89\u5168\u4ea7\u54c1 / \u5b89\u5168\u67b6\u6784\u4e13\u5bb6 ",l.createElement("br",null),l.createElement(B,null)," \u5317\u4eac"),span:12,border:!1}]})},re=function(){return l.createElement(ae,{who:[{name:l.createElement(s.Z,null,"\u56db\u7ef4\u521b\u667a ",l.createElement("div",{style:{fontSize:12}},l.createElement(u.Z,{color:"red"},"\u7279\u522b\u8d5e\u52a9\u5546"))),avatar:"/img/who/4dogs.jpg",description:l.createElement("div",null,"\u4e3a\u63a8\u52a8 Yak \u9879\u76ee\u751f\u6001\u505a\u51fa\u6770\u51fa\u8d21\u732e",l.createElement("br",null),"\u540c\u65f6\u611f\u8c22\u5bf9 Yak \u7684\u6177\u6168\u6350\u8d60",l.createElement("br",null),l.createElement(B,null)," \u5317\u4eac"),mainPage:"http://www.4dogs.cn/",span:24,border:!1},{name:l.createElement(s.Z,null,"projectdiscovery.io",l.createElement("div",{style:{fontSize:12}},l.createElement(u.Z,{color:"geekblue"},"nuclei \u96c6\u6210"))),avatar:"/img/who/projectdiscovery.png",description:l.createElement("div",null,"\u65e0\u79c1\u7684 MIT \u5f00\u6e90\u7cbe\u795e ",l.createElement("br",null),"\u4e3a Yak \u63d0\u4f9b nuclei \u6f0f\u6d1e\u68c0\u6d4b\u80fd\u529b ",l.createElement("br",null),l.createElement(B,null)),mainPage:"https://projectdiscovery.io/#/",githubLink:"https://github.com/projectdiscovery/",span:12,border:!1},{name:l.createElement(s.Z,null,"vulhub",l.createElement("div",{style:{fontSize:12}},l.createElement(u.Z,{color:"geekblue"},"\u6f0f\u6d1e\u9776\u573a\u57fa\u7840\u8bbe\u65bd"))),avatar:"/img/who/vulhub.jpg",description:l.createElement("div",null,"\u65e0\u79c1\u7684\u6f0f\u6d1e\u9776\u573a\u57fa\u7840\u8bbe\u65bd\u63d0\u4f9b\u8005 ",l.createElement("br",null),l.createElement(B,null)," \u5317\u4eac"),mainPage:"https://vulhub.org/",githubLink:"https://github.com/vulhub/",span:12,border:!1},{name:l.createElement(s.Z,null,"CNSS.io",l.createElement("div",{style:{fontSize:12}},l.createElement(u.Z,{color:"green"},"idea inspired"))),avatar:"/img/who/cnss.png",description:l.createElement("div",null,"\u4f18\u79c0\u7684 CTF \u6218\u961f ",l.createElement("br",null),"\u4e3a Yak \u5b89\u5168\u80fd\u529b\u6784\u5efa\u63d0\u4f9b\u7075\u611f ",l.createElement("br",null),l.createElement(B,null)," \u6210\u90fd\uff0c\u56db\u5ddd"),mainPage:"https://cnss.io/",githubLink:"https://github.com/cnss/",span:12,border:!1}]})},ae=function(e){return l.createElement(m.Z,{style:{backgroundColor:"#fff"}},l.createElement(p.Z,{gutter:14},e.who.map((function(e){return e.githubLink&&[].push(l.createElement(f.Z,{icon:l.createElement(G.Z,null),target:"_blank",href:e.githubLink,type:"link"})),l.createElement(d.Z,{span:24,style:{marginBottom:12},lg:e.span||12},l.createElement(o.Z,{bodyStyle:{width:"100%",height:180},bordered:e.border,hoverable:!e.border},l.createElement($,{avatar:e.avatar?l.createElement(F,{size:60,src:e.avatar}):l.createElement(F,{size:60},e.name),title:e.name,description:l.createElement(s.Z,{direction:"vertical",size:8},e.description,l.createElement(s.Z,null,e.githubLink&&l.createElement(f.Z,{size:"small",style:{paddingLeft:0},icon:l.createElement(G.Z,null),target:"_blank",type:"link",href:e.githubLink}),e.mainPage&&l.createElement(f.Z,{size:"small",style:{paddingLeft:0},icon:l.createElement(K,null),target:"_blank",type:"link",href:e.githubLink})))})))}))))},le={sidebar_position:2},ce="\u7814\u53d1\u56e2\u961f / \u81f4\u8c22",ie={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"\u7814\u53d1\u56e2\u961f / \u81f4\u8c22",description:"\u5982\u679c\u4f60\u559c\u6b22 Yak\uff0c\u53ef\u4ee5\u8ba4\u8bc6\u4e00\u4e0b\u6211\u4eec\u7684\u7814\u53d1\u56e2\u961f\u3002",source:"@site/team/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/team/intro",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"teamSidebar",previous:{title:'"\u6211" \u4e0e Yak',permalink:"/team/devtalk"},next:{title:"\u8054\u7cfb\u6211\u4eec",permalink:"/team/contact"}},oe=[{value:"\u6d3b\u8dc3\u6838\u5fc3\u56e2\u961f\u6210\u5458",id:"\u6d3b\u8dc3\u6838\u5fc3\u56e2\u961f\u6210\u5458",children:[]},{value:"\u793e\u533a\u6770\u51fa\u8d21\u732e\u6210\u5458",id:"\u793e\u533a\u6770\u51fa\u8d21\u732e\u6210\u5458",children:[]},{value:"\u7279\u522b\u987e\u95ee",id:"\u7279\u522b\u987e\u95ee",children:[]},{value:"\u7279\u522b\u81f4\u8c22",id:"\u7279\u522b\u81f4\u8c22",children:[]}],se={toc:oe};function ue(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,r.Z)({},se,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"\u7814\u53d1\u56e2\u961f--\u81f4\u8c22"},"\u7814\u53d1\u56e2\u961f / \u81f4\u8c22"),(0,c.kt)("p",null,"\u5982\u679c\u4f60\u559c\u6b22 Yak\uff0c\u53ef\u4ee5\u8ba4\u8bc6\u4e00\u4e0b\u6211\u4eec\u7684\u7814\u53d1\u56e2\u961f\u3002"),(0,c.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u52a0\u5165\u6211\u4eec\u7684\u56e2\u961f\uff0c\u5173\u6ce8\u6211\u4eec\u7684\u516c\u4f17\u53f7\u3002"),(0,c.kt)("h2",{id:"\u6d3b\u8dc3\u6838\u5fc3\u56e2\u961f\u6210\u5458"},"\u6d3b\u8dc3\u6838\u5fc3\u56e2\u961f\u6210\u5458"),(0,c.kt)(ee,{mdxType:"Owner"}),(0,c.kt)("h2",{id:"\u793e\u533a\u6770\u51fa\u8d21\u732e\u6210\u5458"},"\u793e\u533a\u6770\u51fa\u8d21\u732e\u6210\u5458"),(0,c.kt)(te,{mdxType:"Contributors"}),(0,c.kt)("h2",{id:"\u7279\u522b\u987e\u95ee"},"\u7279\u522b\u987e\u95ee"),(0,c.kt)(ne,{mdxType:"Consultant"}),(0,c.kt)("h2",{id:"\u7279\u522b\u81f4\u8c22"},"\u7279\u522b\u81f4\u8c22"),(0,c.kt)("p",null,"\u4ece\u4e0d\u540c\u5c42\u9762\u5bf9\u672c\u9879\u76ee\u6709\u6781\u5927\u652f\u6301\u548c\u5e2e\u52a9\u7684\u7ec4\u7ec7 / \u4e2a\u4eba\u3002"),(0,c.kt)(re,{mdxType:"ThanksFor"}))}ue.isMDXComponent=!0}}]);