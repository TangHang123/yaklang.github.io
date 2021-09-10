(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[821],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(y,l(l({ref:n},s),{},{components:t})):r.createElement(y,l({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},372:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=t(4034),i=t(9973),a=(t(7294),t(3905)),l={sidebar_position:14},o="[tls] TLS\u5de5\u5177\u5305",c={unversionedId:"buildinlibs/lib_tls",id:"buildinlibs/lib_tls",isDocsHomePage:!1,title:"[tls] TLS\u5de5\u5177\u5305",description:"\u4e0d\u540c\u4e8e Golang \u539f\u751f\u7684 TLS \u5305\uff0cyak \u7684 TLS \u5de5\u5177\u5305\u5e76\u4e0d\u63d0\u4f9b TLS \u8fde\u63a5\u7b49\u529f\u80fd\uff0c\u53ea\u63d0\u4f9b\u5fc5\u8981\u7684\u6839\u8bc1\u4e66\u751f\u6210\u4e0e\u8bc1\u4e66\u7b7e\u53d1\u7b49\u529f\u80fd\u3002",source:"@site/docs/buildinlibs/lib_tls.md",sourceDirName:"buildinlibs",slug:"/buildinlibs/lib_tls",permalink:"/docs/buildinlibs/lib_tls",editUrl:"https://github.com/yaklang/docs/buildinlibs/lib_tls.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"[servicescan] \u670d\u52a1\u6307\u7eb9\u626b\u63cf",permalink:"/docs/buildinlibs/lib_servicescan"},next:{title:"[crawler] \u666e\u901a\u722c\u866b(\u975e\u6d4f\u89c8\u5668\u722c\u866b)",permalink:"/docs/buildinlibs/lib_crawler"}},p=[{value:"API",id:"api",children:[]},{value:"<code>x509</code> or Not ?",id:"x509-or-not-",children:[]},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",children:[{value:"\u751f\u6210\u6839\u8bc1\u4e66\u4fdd\u5b58\u5728\u672c\u5730",id:"\u751f\u6210\u6839\u8bc1\u4e66\u4fdd\u5b58\u5728\u672c\u5730",children:[]},{value:"\u7b7e\u53d1\u8bc1\u4e66\uff0c\u5e76\u5c1d\u8bd5\u6784\u5efa TLS TCP \u901a\u4fe1",id:"\u7b7e\u53d1\u8bc1\u4e66\uff0c\u5e76\u5c1d\u8bd5\u6784\u5efa-tls-tcp-\u901a\u4fe1",children:[]}]}],s={toc:p};function d(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tls-tls\u5de5\u5177\u5305"},"[tls]"," TLS\u5de5\u5177\u5305"),(0,a.kt)("p",null,"\u4e0d\u540c\u4e8e Golang \u539f\u751f\u7684 TLS \u5305\uff0cyak \u7684 TLS \u5de5\u5177\u5305\u5e76\u4e0d\u63d0\u4f9b TLS \u8fde\u63a5\u7b49\u529f\u80fd\uff0c\u53ea\u63d0\u4f9b\u5fc5\u8981\u7684\u6839\u8bc1\u4e66\u751f\u6210\u4e0e\u8bc1\u4e66\u7b7e\u53d1\u7b49\u529f\u80fd\u3002"),(0,a.kt)("p",null,"\u672c tls \u5de5\u5177\u5305\u91cd\u70b9\u652f\u6301\u5176\u4ed6\u5de5\u5177\u5305\u5bf9\u4e8e TLS \u7684\u9700\u6c42\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6bd4\u5982\u5f00\u542f\u4e00\u4e2a TCP TLS \u8fde\u63a5\u9700\u8981\u7684 HTTPS \u8bc1\u4e66\u7ec4"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"mitm")," \u4e2d\u95f4\u4eba\u52ab\u6301\u5bf9\u8bc1\u4e66\u7684\u9700\u6c42"),(0,a.kt)("li",{parentName:"ol"},"...")),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"fn tls.GenerateRootCA(commonName: string): (caCert []byte, pKey []byte, err error)")," \u4f7f\u7528 CommonName \u4f5c\u4e3a\u6839\u8bc1\u4e66\u7684\u540d\u5b57\uff0c\u751f\u6210\u4e00\u4e2a\u7b80\u6613\u6839\u8bc1\u4e66\uff1aPEM\u683c\u5f0f"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"fn tls.SignClientCertAndKey(caCert: []byte, pKey: []byte): (cert []byte, pKey []byte, err error)")," \u4f7f\u7528\u6839\u8bc1\u4e66\u7b7e\u51fa\u4e00\u4e2a Server \u7aef\u53ef\u7528\u7684\u670d\u52a1\u5668\u8bc1\u4e66\uff08\u4e0d\u5f00\u542f x509 \u8ba4\u8bc1\uff09\uff1aPEM\u683c\u5f0f"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"fn tls.SignServerCertAndKey(caCert: []byte, pKey: []byte): (cert []byte, pKey []byte, err error)")," \u4f7f\u7528\u8bc1\u4e66\u7b7e\u51fa\u4e00\u4e2a Client \u7aef\u53ef\u7528\u7684\u7528\u6237\u7aef\u8bc1\u4e66\uff08\u4e0d\u5f00\u542f x509 \u8ba4\u8bc1\uff09\uff1aPEM\u683c\u5f0f"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"fn tls.SignX509ClientCertAndKey(caCert: []byte, pKey: []byte): (cert []byte, pKey []byte, err error)")," \u4f7f\u7528\u6839\u8bc1\u4e66\u7b7e\u51fa\u4e00\u4e2a Server \u7aef\u53ef\u7528\u7684\u670d\u52a1\u5668\u8bc1\u4e66\uff08\u5f00\u542f x509 \u8ba4\u8bc1\uff09\uff1aPEM\u683c\u5f0f"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"fn tls.SignX509ServerCertAndKey(caCert: []byte, pKey: []byte): (cert []byte, pKey []byte, err error)")," \u4f7f\u7528\u8bc1\u4e66\u7b7e\u51fa\u4e00\u4e2a Client \u7aef\u53ef\u7528\u7684\u7528\u6237\u7aef\u8bc1\u4e66\uff08\u5f00\u542f x509 \u8ba4\u8bc1\uff09\uff1aPEM\u683c\u5f0f")),(0,a.kt)("h2",{id:"x509-or-not-"},(0,a.kt)("inlineCode",{parentName:"h2"},"x509")," or Not ?"),(0,a.kt)("p",null,"\u6211\u4eec\u5728\u4e0a\u9762 API \u4e2d\uff0c\u53d1\u73b0\u6211\u4eec\u7b7e\u53d1\u670d\u52a1\u7aef\u8bc1\u4e66\u6216\u8005\u5ba2\u6237\u7aef\u8bc1\u4e66\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"p"},"x509")," \u662f\u5426\u5f00\u542f\u3002\u90a3\u4e48\u4ec0\u4e48\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"x509")," \u8ba4\u8bc1\u5462\uff1f\u7b80\u5355\u7406\u89e3\u53ef\u4ee5\u7406\u89e3\u4e3a: ",(0,a.kt)("strong",{parentName:"p"},"TLS\u7b7e\u53d1\u7684\u670d\u52a1\u7aef/\u5ba2\u6237\u7aef\u8bc1\u4e66\u53ea\u5141\u8bb8\u8fde\u63a5\u53d7\u4fe1\u4efb\u7684\u5ba2\u6237\u7aef/\u670d\u52a1\u7aef\uff0c\u8fd9\u4e2a\u8ba4\u8bc1\u4e0d\u9700\u8981\u5bc6\u7801\uff0c\u53ea\u901a\u8fc7\u8bc1\u4e66\u6765\u8ba4\u8bc1\uff0c\u5728\u672c\u5305\u4e2d\uff0c\u6211\u4eec\u4fdd\u8bc1\u540c\u4e00\u4e2a\u6839\u8bc1\u4e66\u7b7e\u53d1\u7684\u5f00\u542f X509 \u8ba4\u8bc1\u7684\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u90fd\u53ef\u4ee5\u4e92\u76f8\u8fde\u63a5"),"\u3002"),(0,a.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u6848\u4f8b\uff1a\u5982\u679c\u4f60\u60f3\u5f00\u542f\u4e00\u4e2a HTTPS \u5927\u5bb6\u90fd\u53ef\u4ee5\u8bbf\u95ee\uff0c\u5c31\u4e0d\u5e94\u8be5\u5f00\u542f X509 \u8ba4\u8bc1")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u53cd\u4e4b\uff0c\u4f60\u7684 HTTPS \u8fde\u63a5\u5982\u679c\u53ea\u60f3\u8981\u81ea\u5df1\uff08\u7684\u8bc1\u4e66\u5e94\u7528\uff09\u8fde\u63a5\uff0c\u5219\u9700\u8981\u5f00\u542f x509 \u8ba4\u8bc1"))),(0,a.kt)("h2",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,a.kt)("h3",{id:"\u751f\u6210\u6839\u8bc1\u4e66\u4fdd\u5b58\u5728\u672c\u5730"},"\u751f\u6210\u6839\u8bc1\u4e66\u4fdd\u5b58\u5728\u672c\u5730"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'ca, key, err := tls.GenerateRootCA("Yak Test")\ndie(err)\n\n// \u6253\u5370\u4e00\u4e0b ca key \u5230\u5c4f\u5e55\uff0c\u770b\u4e00\u4e0b\u5177\u4f53\u683c\u5f0f\uff1aPEM\u683c\u5f0f\nprintln(string(ca))\nprintln(string(key))\n\n// \u628a ca \u548c key \u4fdd\u5b58\u5728\u672c\u5730\uff0c\u5982\u679c\u9519\u8bef\uff0c\u76f4\u63a5\u9000\u51fa\ndie(file.Save("yak.ca.pem", ca))\ndie(file.Save("yak.pkey.pem", key))\n')),(0,a.kt)("p",null,"\u6211\u4eec\u6267\u884c\u4e0a\u8ff0\u5185\u5bb9\u4e4b\u540e\uff0c\u83b7\u5f97\u5982\u4e0b\u7ed3\u679c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"-----BEGIN CERTIFICATE-----\nMIIDEzCCAfugAwIBAgIQer+QHpumrucWtk75qj4MIjANBgkqhkiG9w0BAQsFADAT\nMREwDwYDVQQDEwhZYWsgVGVzdDAgFw05OTEyMzExNjAwMDBaGA8yMTIwMDUyMjAz\nMTIyMlowEzERMA8GA1UEAxMIWWFrIFRlc3QwggEiMA0GCSqGSIb3DQEBAQUAA4IB\nDwAwggEKAoIBAQCeGjz3/9a2/NTDmrkCSWDeUDF0sA0EpeD/FfK4RJ4cGD5XwDqY\neutQVHS7pPop3xD9EsajKCE5Y1X3Hl+HKWfyYnUM1fcc5E1k4dMXaNgJdpmHBloo\nRpMCA75NVM/bzQ/cSo16K9tq+ymC9+T7Elin8CKVwzxBBFmxTLZR1R+Y2RhJp9Ia\nhJNgN0nVggZZD/reD9uc9LFyzCO9H/wonrC2oI+djwHaWGpHJqIh/+mMpTNExpIo\nBbjSdZi+BTFnp+Lfvm0vHLj7+pCafQk51RcCJWVdQ8Fr9K70balHRRNIIKG7gStI\nsUfzjKLKcOtGbl1UpAmzPDhqCdGIpcRx0lx9AgMBAAGjYTBfMA4GA1UdDwEB/wQE\nAwIBpjAdBgNVHSUEFjAUBggrBgEFBQcDAgYIKwYBBQUHAwEwDwYDVR0TAQH/BAUw\nAwEB/zAdBgNVHQ4EFgQU2NWjQNUfp7HvVgqhL8glrgt3n6QwDQYJKoZIhvcNAQEL\nBQADggEBAHqahMJp9Y9CtIrZuK5ahztFBqO0aHvbGWNzyaZug+eOV9360yBtP52o\nFolCA2yxAb2xyI0O2oX4I9OWeDVFRXU4vWayk60a+r00ETRiOVeJTe6agBL8NLtJ\nrgxIYG8BZBpt2pwpXuNU6M+Eq/eyWDlvAg9+qixVM9ov63ra39nSziGFyyE/Kg4g\nqcq7SA32LyjhMR48fPEp86fC+ItBv6i/2CHpxfAkm/kYpwRJuxcnNPTo910lUZZA\ndCA9c6jm8DP9s6FEDADBrtB8JBmrEdsXy2Buo/n/MFgyXaTWqb071RCUaYiWuBpm\nCP/SKvx0QOXU18mRbQCFP10r9XPqcXA=\n-----END CERTIFICATE-----\n\n-----BEGIN RSA PRIVATE KEY-----\nMIIEowIBAAKCAQEAnho89//WtvzUw5q5Aklg3lAxdLANBKXg/xXyuESeHBg+V8A6\nmHrrUFR0u6T6Kd8Q/RLGoyghOWNV9x5fhyln8mJ1DNX3HORNZOHTF2jYCXaZhwZa\nKEaTAgO+TVTP280P3EqNeivbavspgvfk+xJYp/AilcM8QQRZsUy2UdUfmNkYSafS\nGoSTYDdJ1YIGWQ/63g/bnPSxcswjvR/8KJ6wtqCPnY8B2lhqRyaiIf/pjKUzRMaS\nKAW40nWYvgUxZ6fi375tLxy4+/qQmn0JOdUXAiVlXUPBa/Su9G2pR0UTSCChu4Er\nSLFH84yiynDrRm5dVKQJszw4agnRiKXEcdJcfQIDAQABAoIBAAxQvOkQi7grT6OA\n/OJZtur6Ui/lus3e4fzcx9Bkv/AuT0Tkm2vfP089lO489qOmVZtxB/oTmSrwOvUJ\n76UGq6ss0jNSw3IDsqemE5xiNVnfXCwxaXpzrOXeRsedUKetfIvLXuPiYLAfqmci\nSjroffFu+jKyR5JE9XujHxyWvmRYfXeS6/tVrcPUNppdCU2XUrjbHCIjsaGDJFVb\nRdJ3zG3X2XaD2KhNi9JPmFLvNyGOQxC304vHLZpiSmpjzbqiasIJMDI1ySMQqHG5\nom1pZWYEEJG+K02z8lijyc+p9aFAwGQI5YTQkdriX9RNu9EdVkaN9sEh47HUNb7C\nzxExJwECgYEAwdTLyDoPnuVr+1WF13eE6OMQLUuXdxl2HMkHbVMqz4StCay/Wiwv\nqdBqj+ntScW6/a/J9w3ENsywSQJ9cM4ZEH9HQSkMbOQbjsY+6hkhNyr1+WSZ4Lmf\nJrxopC+Fn4hMg46RTn95eapOlMpvn7dz9cYUydrCJcNYtYNFvi1l1z0CgYEA0M/O\neJabg1KgqPx3wwigXfGuCtON4cd4VdwYZgb3eGfyDbhhX4/Ci9EUGOmEAMXKvG2T\nopgjc2bPc4DY7yoS8HE3n8r902WoxdWK440HYOXnu4OVals3ZC8WMpp+C7vl40N9\nGTo+pHDY0oq7vD8JR1FeSl8joNTunGYH0x4M7kECgYAufMDbJsG0VEXPo7VT9gBU\ncpDgrC6Ji/u976DuYXH1D1cI6PuDvvE3gxrrpSkZ9mhgi5aewBh9JB5rhENdmLB+\nOmh2gkfOne7WEUnpj1leB9mylKQrN5mqCqn2JsefeWsQalMDRqN1wJjUKrEW10Li\ngT1fJC5ILE/MSM2jTPQN6QKBgQCBswH5TvsLZ9BZBnBRGVOa5poHKX5wZhitpAcX\noG4oQNBNi2AYHlBlzhkgnDMc075oqdtQ3BTxAkQK51ZXv5eB96DoRQrCOtvI/inF\ny3xwyHzWsRWmuT+/n6u3BNUT7sMNFYdnmxD7zQgwRnHzrGfT/4uEwHF93aTUSl/D\n11+KwQKBgCzTf7JngQCIo5IjJq7XjBUZzhTTRsek5opVcVE/ilE8MQ4fVG89VUTF\nFqvNsTu8/qKTpuc0HFNUh3Bg5SoxAO47/iYtx7hACjmn1E1bYTByP4kGZ//eiqFz\nCvOqogKav8T8ZJDIGNbvo0laAoIyvF+6f6v/9lBQAb/sle8B33Yh\n-----END RSA PRIVATE KEY-----\n\n")),(0,a.kt)("h3",{id:"\u7b7e\u53d1\u8bc1\u4e66\uff0c\u5e76\u5c1d\u8bd5\u6784\u5efa-tls-tcp-\u901a\u4fe1"},"\u7b7e\u53d1\u8bc1\u4e66\uff0c\u5e76\u5c1d\u8bd5\u6784\u5efa TLS TCP \u901a\u4fe1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// \u751f\u6210\u4e00\u4e2a CA\nca, key, err := tls.GenerateRootCA("Yak Test")\ndie(err)\n\n// \u4f7f\u7528 CA \u548c KEY \u7b7e\u53d1\u4e00\u4e2a TLS \u670d\u52a1\u7aef\u8bc1\u4e66\nserverCert, serverKey, err := tls.SignServerCertAndKey(ca, key)\ndie(err)\n\n// \u7b7e\u53d1\u4e00\u4e2a\u5ba2\u6237\u7aef TLS \u8bc1\u4e66\nclientCert, clientKey, err := tls.SignClientCertAndKey(ca, key)\ndie(err)\n\n// \u542f\u52a8\u4e00\u4e2a TCP \u670d\u52a1\u5668\ngo tcp.Serve("127.0.0.1", 54326, tcp.serverTls(serverCert, serverKey), tcp.serverCallback(func(conn){\n    println("TLS Server RECV conn from: ", conn.RemoteAddr())\n    defer conn.Close()\n\n    conn.Send("Hello TLS Config")\n}))\n\n// \u542f\u52a8\u4e00\u4e2a TLS \u5ba2\u6237\u7aef\u8fde\u63a5\nsleep(1)\nconn, err := tcp.Connect("127.0.0.1", 54326, tcp.clientTls(clientCert, clientKey))\ndie(err)\n\nsleep(2)\n\nraw, err := conn.RecvString()\ndie(err)\n\nprintln("Client RECV: ", raw)\n')),(0,a.kt)("p",null,"\u6211\u4eec\u5728\u4e0a\u8ff0\u4ee3\u7801\u4e2d\uff0c\u6784\u5efa\u4e86 CA\uff0c\u5e76\u7528 CA \u7b7e\u53d1\u4e86\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u8bc1\u4e66\uff0c\u4f7f\u7528\u8bc1\u4e66\u8fdb\u884c\u4e86\u5bc6\u7801\u901a\u4fe1\uff08\u867d\u7136\u6ca1\u6709\u8fdb\u884c x509 \u52a0\u5bc6\uff09"),(0,a.kt)("p",null,"\u6211\u4eec\u6267\u884c\u5b8c\u4e0a\u8ff0\u4ee3\u7801\u4e4b\u540e\uff0c\u6536\u5230\u7684\u7ed3\u679c\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"TLS Server RECV conn from:  127.0.0.1:55217\nClient RECV:  Hello TLS Config\n")))}d.isMDXComponent=!0}}]);