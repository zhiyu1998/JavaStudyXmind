"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1870],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),i=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=i(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=i(t),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return t?n.createElement(m,c(c({ref:r},p),{},{components:t})):n.createElement(m,c({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var i=2;i<a;i++)c[i]=t[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},16505:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var n=t(87462),o=(t(67294),t(3905));const a={},c="\u529b\u6263\u94fe\u8868\u4e13\u9898\u5e38\u7528\u65b9\u6cd5\u5c01\u88c5",l={unversionedId:"Java/leetcode/src/\u5251\u6307offer/\u5e38\u7528\u65b9\u6cd5\u5c01\u88c5\u5408\u96c6",id:"Java/leetcode/src/\u5251\u6307offer/\u5e38\u7528\u65b9\u6cd5\u5c01\u88c5\u5408\u96c6",title:"\u529b\u6263\u94fe\u8868\u4e13\u9898\u5e38\u7528\u65b9\u6cd5\u5c01\u88c5",description:"\u5feb\u6162\u6307\u9488\u627e\u4e2d\u95f4\u4f4d\u7f6e",source:"@site/docs/Java/leetcode/src/\u5251\u6307offer/\u5e38\u7528\u65b9\u6cd5\u5c01\u88c5\u5408\u96c6.md",sourceDirName:"Java/leetcode/src/\u5251\u6307offer",slug:"/Java/leetcode/src/\u5251\u6307offer/\u5e38\u7528\u65b9\u6cd5\u5c01\u88c5\u5408\u96c6",permalink:"/Computer-Science-Learn-Notes/docs/Java/leetcode/src/\u5251\u6307offer/\u5e38\u7528\u65b9\u6cd5\u5c01\u88c5\u5408\u96c6",draft:!1,editUrl:"https://github.com/zhiyu1998/Computer-Science-Learn-Notes/edit/master/docs/Java/leetcode/src/\u5251\u6307offer/\u5e38\u7528\u65b9\u6cd5\u5c01\u88c5\u5408\u96c6.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebars",previous:{title:"\u5251\u6307 Offer 58 - II. \u5de6\u65cb\u8f6c\u5b57\u7b26\u4e32",permalink:"/Computer-Science-Learn-Notes/docs/Java/leetcode/src/\u5251\u6307offer/II \u5de6\u65cb\u8f6c\u5b57\u7b26\u4e32"},next:{title:"\u5de5\u4f5c\u4e2d\u9047\u5230\u7684\u95ee\u9898\u53ca\u89e3\u51b3\u65b9\u6848",permalink:"/Computer-Science-Learn-Notes/docs/others/personal_tech"}},s={},i=[{value:"\u5feb\u6162\u6307\u9488\u627e\u4e2d\u95f4\u4f4d\u7f6e",id:"\u5feb\u6162\u6307\u9488\u627e\u4e2d\u95f4\u4f4d\u7f6e",level:2},{value:"\u53cd\u8f6c\u94fe\u8868",id:"\u53cd\u8f6c\u94fe\u8868",level:2},{value:"\u540e\u5e8f\u904d\u5386",id:"\u540e\u5e8f\u904d\u5386",level:2}],p={toc:i};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u529b\u6263\u94fe\u8868\u4e13\u9898\u5e38\u7528\u65b9\u6cd5\u5c01\u88c5"},"\u529b\u6263\u94fe\u8868\u4e13\u9898\u5e38\u7528\u65b9\u6cd5\u5c01\u88c5"),(0,o.kt)("h2",{id:"\u5feb\u6162\u6307\u9488\u627e\u4e2d\u95f4\u4f4d\u7f6e"},"\u5feb\u6162\u6307\u9488\u627e\u4e2d\u95f4\u4f4d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"private ListNode endOfFirstHalf(ListNode head) {\n    ListNode slow = head, fast = head.next;\n        while (fast != null && fast.next != null) {\n            slow = slow.next;\n            fast = fast.next.next;\n        }\n    return slow;\n}\n")),(0,o.kt)("h2",{id:"\u53cd\u8f6c\u94fe\u8868"},"\u53cd\u8f6c\u94fe\u8868"),(0,o.kt)("p",null,"\u8fd9\u91cc\u7528\u7684\u662f\u529b\u6263\u5b98\u65b9\u7684\u4ee3\u7801\uff0c\u6211\u7684\u58f0\u660e\u7684\u53d8\u91cf\u7a0d\u5fae\u6709\u70b9\u591a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"private ListNode reverseList(ListNode head) {\n    ListNode prev = null;\n    ListNode curr = head;\n    while (curr != null) {\n        ListNode next = curr.next;\n        curr.next = prev;\n        prev = curr;\n        curr = next;\n    }\n    return prev;\n}\n")),(0,o.kt)("h2",{id:"\u540e\u5e8f\u904d\u5386"},"\u540e\u5e8f\u904d\u5386"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public void postorder(TreeNode root, List<Integer> res) {\n    if (root == null) {\n        return;\n    }\n    postorder(root.left, res);\n    postorder(root.right, res);\n    res.add(root.val);\n}\n")))}u.isMDXComponent=!0}}]);