"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7011],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(n),g=i,E=f["".concat(o,".").concat(g)]||f[g]||p[g]||r;return n?a.createElement(E,l(l({ref:t},u),{},{components:n})):a.createElement(E,l({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=f;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:i,l[1]=c;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},29309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={index:11,title:"\u76f4\u63a5\u5185\u5b58",category:["JVM"],tag:["JVM\u4e0a\u7bc7"]},l=void 0,c={unversionedId:"Java/jvm/part1/\u76f4\u63a5\u5185\u5b58",id:"Java/jvm/part1/\u76f4\u63a5\u5185\u5b58",title:"\u76f4\u63a5\u5185\u5b58",description:"[TOC]",source:"@site/docs/Java/jvm/part1/11.\u76f4\u63a5\u5185\u5b58.md",sourceDirName:"Java/jvm/part1",slug:"/Java/jvm/part1/\u76f4\u63a5\u5185\u5b58",permalink:"/Computer-Science-Learn-Notes/docs/Java/jvm/part1/\u76f4\u63a5\u5185\u5b58",draft:!1,editUrl:"https://github.com/zhiyu1998/Computer-Science-Learn-Notes/edit/master/docs/Java/jvm/part1/11.\u76f4\u63a5\u5185\u5b58.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{index:11,title:"\u76f4\u63a5\u5185\u5b58",category:["JVM"],tag:["JVM\u4e0a\u7bc7"]},sidebar:"sidebars",previous:{title:"\u5bf9\u8c61\u7684\u5b9e\u4f8b\u5316",permalink:"/Computer-Science-Learn-Notes/docs/Java/jvm/part1/\u5bf9\u8c61\u7684\u5b9e\u4f8b\u5316\u5185\u5b58\u5e03\u5c40\u4e0e\u8bbf\u95ee\u5b9a\u4f4d"},next:{title:"\u6267\u884c\u5f15\u64ce",permalink:"/Computer-Science-Learn-Notes/docs/Java/jvm/part1/\u6267\u884c\u5f15\u64ce"}},o={},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"[TOC]"),(0,i.kt)("h1",{id:"\u76f4\u63a5\u5185\u5b58\u6982\u8ff0"},"\u76f4\u63a5\u5185\u5b58\u6982\u8ff0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u662f\u865a\u62df\u673a\u8fd0\u884c\u65f6\u6570\u636e\u533a\u7684\u4e00\u90e8\u5206\uff0c\u4e5f\u4e0d\u662f\u300aJava\u865a\u62df\u673a\u89c4\u8303\u300b\u4e2d\u5b9a\u4e49\u7684\u5185\u5b58\u533a\u57df"),(0,i.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u5185\u5b58\u662f\u5728Java\u5806\u5916\u7684\u3001\u76f4\u63a5\u5411\u7cfb\u7edf\u7533\u8bf7\u7684\u5185\u5b58\u533a\u95f4"),(0,i.kt)("li",{parentName:"ul"},"\u6765\u6e90\u4e8eNIO\uff0c\u901a\u8fc7\u5b58\u5728\u5806\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"DirectByteBuffer"),"\u64cd\u4f5cNative\u5185\u5b58"),(0,i.kt)("li",{parentName:"ul"},"\u901a\u5e38\uff0c\u8bbf\u95ee\u76f4\u63a5\u5185\u5b58\u7684\u901f\u5ea6\u4f1a\u4f18\u4e8eJava\u5806\u3002\u5373\u8bfb\u5199\u6027\u80fd\u9ad8   ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u56e0\u6b64\u51fa\u4e8e\u6027\u80fd\u8003\u8651\uff0c\u8bfb\u5199\u9891\u7e41\u7684\u573a\u5408\u53ef\u80fd\u4f1a\u8003\u8651\u4f7f\u7528\u76f4\u63a5\u5185\u5b58"),(0,i.kt)("li",{parentName:"ul"},"Java\u7684NIO\u5e93\u5141\u8bb8Java\u7a0b\u5e8f\u4f7f\u7528\u76f4\u63a5\u5185\u5b58\uff0c\u7528\u4e8e\u6570\u636e\u7f13\u51b2\u533a")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220228153403401",src:n(61473).Z,width:"741",height:"192"})),(0,i.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u8fd9\u4e2a\u7a0b\u5e8f\uff08PID 15236\uff09\u5360\u5185\u5b581063372 / 1024 / 1024 \u2248 1.0411 G"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220228153356580",src:n(98248).Z,width:"844",height:"58"})),(0,i.kt)("p",null,"\u5f53\u91ca\u653e\u5b8c\u5185\u5b58\u4ee5\u540e\u53ea\u5360\u6709 17392"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220228153546048",src:n(90159).Z,width:"754",height:"54"})),(0,i.kt)("h1",{id:"bio-\u4e0e-nio"},"BIO \u4e0e NIO"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u975e\u76f4\u63a5\u7f13\u51b2\u533a\uff08BIO\uff09")),(0,i.kt)("p",null,"\u539f\u6765\u91c7\u7528BIO\u7684\u67b6\u6784\uff0c\u5728\u8bfb\u5199\u672c\u5730\u6587\u4ef6\u65f6\uff0c\u6211\u4eec\u9700\u8981\u4ece\u7528\u6237\u6001\u5207\u6362\u6210\u5185\u6838\u6001"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(37098).Z,width:"1049",height:"507"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u76f4\u63a5\u7f13\u51b2\u533a\uff08NIO\uff09")),(0,i.kt)("p",null,"\u4f7f\u7528NIO\u65f6\uff0c\u5982\u4e0b\u56fe\u3002\u64cd\u4f5c\u7cfb\u7edf\u5212\u51fa\u7684\u76f4\u63a5\u7f13\u5b58\u533a\u53ef\u4ee5\u88abJava\u4ee3\u7801\u76f4\u63a5\u8bbf\u95ee\uff0c\u53ea\u6709\u4e00\u4efd\u3002NIO\u9002\u5408\u5bf9\u5927\u6587\u4ef6\u7684\u8bfb\u5199\u64cd\u4f5c"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(91807).Z,width:"1313",height:"755"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u4ee3\u7801\u793a\u4f8b")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class BufferTest1 {\n\n    private static final String TO = "F:\\\\test\\\\\u5f02\u754cBD\u4e2d\u5b57.mp4";\n    private static final int _100Mb = 1024 * 1024 * 100;\n\n    public static void main(String[] args) {\n        long sum = 0;\n        String src = "F:\\\\test\\\\\u5f02\u754cBD\u4e2d\u5b57.mp4";\n        for (int i = 0; i < 3; i++) {\n            String dest = "F:\\\\test\\\\\u5f02\u754cBD\u4e2d\u5b57_" + i + ".mp4";\n            // sum += io(src,dest); //54606\n            sum += directBuffer(src, dest); //50244\n        }\n\n        System.out.println("\u603b\u82b1\u8d39\u7684\u65f6\u95f4\u4e3a\uff1a" + sum);\n    }\n\n    private static long directBuffer(String src, String dest) {\n        long start = System.currentTimeMillis();\n\n        FileChannel inChannel = null;\n        FileChannel outChannel = null;\n        try {\n            inChannel = new FileInputStream(src).getChannel();\n            outChannel = new FileOutputStream(dest).getChannel();\n\n            ByteBuffer byteBuffer = ByteBuffer.allocateDirect(_100Mb);\n            while (inChannel.read(byteBuffer) != -1) {\n                byteBuffer.flip(); //\u4fee\u6539\u4e3a\u8bfb\u6570\u636e\u6a21\u5f0f\n                outChannel.write(byteBuffer);\n                byteBuffer.clear(); //\u6e05\u7a7a\n            }\n        } catch (IOException e) {\n            e.printStackTrace();\n        } finally {\n            if (inChannel != null) {\n                try {\n                    inChannel.close();\n                } catch (IOException e) {\n                    e.printStackTrace();\n                }\n\n            }\n            if (outChannel != null) {\n                try {\n                    outChannel.close();\n                } catch (IOException e) {\n                    e.printStackTrace();\n                }\n            }\n        }\n\n        long end = System.currentTimeMillis();\n        return end - start;\n    }\n\n    private static long io(String src, String dest) {\n        long start = System.currentTimeMillis();\n      \n        FileInputStream fis = null;\n        FileOutputStream fos = null;\n        try {\n            fis = new FileInputStream(src);\n            fos = new FileOutputStream(dest);\n            byte[] buffer = new byte[_100Mb];\n            while (true) {\n                int len = fis.read(buffer);\n                if (len == -1) {\n                    break;\n                }\n                fos.write(buffer, 0, len);\n            }\n        } catch (IOException e) {\n            e.printStackTrace();\n        } finally {\n            if (fis != null) {\n                try {\n                    fis.close();\n                } catch (IOException e) {\n                    e.printStackTrace();\n                }\n\n            }\n            if (fos != null) {\n                try {\n                    fos.close();\n                } catch (IOException e) {\n                    e.printStackTrace();\n                }\n\n            }\n        }\n\n        long end = System.currentTimeMillis();\n\n        return end - start;\n    }\n}\n')),(0,i.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u8fd9\u4e2aByteBuffer\u7684\u65b9\u6cd5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public static ByteBuffer allocateDirect(int capacity) {\n    return new DirectByteBuffer(capacity);\n}\n")),(0,i.kt)("p",null,"DirectByteBuffer \u7c7b\u7684\u6784\u9020\u5668\u7528\u5230\u4e86 Unsafe \u7c7b\u5206\u914d\u672c\u5730\u5185\u5b58"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"DirectByteBuffer(int cap) {                   // package-private\n\n    super(-1, 0, cap, cap);\n    boolean pa = VM.isDirectMemoryPageAligned();\n    int ps = Bits.pageSize();\n    long size = Math.max(1L, (long)cap + (pa ? ps : 0));\n    Bits.reserveMemory(size, cap);\n\n    long base = 0;\n    try {\n        base = unsafe.allocateMemory(size);\n    } catch (OutOfMemoryError x) {\n        Bits.unreserveMemory(size, cap);\n        throw x;\n    }\n    unsafe.setMemory(base, size, (byte) 0);\n    if (pa && (base % ps != 0)) {\n        // Round up to page boundary\n        address = base + ps - (base & (ps - 1));\n    } else {\n        address = base;\n    }\n    cleaner = Cleaner.create(this, new Deallocator(base, size, cap));\n    att = null;\n}\n")),(0,i.kt)("h1",{id:"\u76f4\u63a5\u5185\u5b58\u4e0eoom"},"\u76f4\u63a5\u5185\u5b58\u4e0eOOM"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u5185\u5b58\u4e5f\u53ef\u80fd\u5bfc\u81f4",(0,i.kt)("inlineCode",{parentName:"li"},"OutofMemoryError"),"\u5f02\u5e38"),(0,i.kt)("li",{parentName:"ul"},"\u7531\u4e8e\u76f4\u63a5\u5185\u5b58\u5728Java\u5806\u5916\uff0c\u56e0\u6b64\u5b83\u7684\u5927\u5c0f\u4e0d\u4f1a\u76f4\u63a5\u53d7\u9650\u4e8e",(0,i.kt)("inlineCode",{parentName:"li"},"-Xmx"),"\u6307\u5b9a\u7684\u6700\u5927\u5806\u5927\u5c0f\uff0c\u4f46\u662f\u7cfb\u7edf\u5185\u5b58\u662f\u6709\u9650\u7684\uff0cJava\u5806\u548c\u76f4\u63a5\u5185\u5b58\u7684\u603b\u548c\u4f9d\u7136\u53d7\u9650\u4e8e\u64cd\u4f5c\u7cfb\u7edf\u80fd\u7ed9\u51fa\u7684\u6700\u5927\u5185\u5b58"),(0,i.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u5185\u5b58\u7684\u7f3a\u70b9\u4e3a\uff1a   ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5206\u914d\u56de\u6536\u6210\u672c\u8f83\u9ad8"),(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u53d7JVM\u5185\u5b58\u56de\u6536\u7ba1\u7406"))),(0,i.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u5185\u5b58\u5927\u5c0f\u53ef\u4ee5\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"li"},"MaxDirectMemorySize"),"\u8bbe\u7f6e"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u9ed8\u8ba4\u4e0e\u5806\u7684\u6700\u5927\u503c",(0,i.kt)("inlineCode",{parentName:"li"},"-Xmx"),"\u53c2\u6570\u503c\u4e00\u81f4")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u4ee3\u7801\u793a\u4f8b")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * \u672c\u5730\u5185\u5b58\u7684OOM:  OutOfMemoryError: Direct buffer memory\n */\npublic class BufferTest2 {\n    private static final int BUFFER = 1024 * 1024 * 20; //20MB\n\n    public static void main(String[] args) {\n        ArrayList<ByteBuffer> list = new ArrayList<>();\n\n        int count = 0;\n        try {\n            while(true){\n                ByteBuffer byteBuffer = ByteBuffer.allocateDirect(BUFFER);\n                list.add(byteBuffer);\n                count++;\n                try {\n                    Thread.sleep(100);\n                } catch (InterruptedException e) {\n                    e.printStackTrace();\n                }\n            }\n        } finally {\n            System.out.println(count);\n        }\n\n    }\n}\n")),(0,i.kt)("p",null,"\u672c\u5730\u5185\u5b58\u6301\u7eed\u589e\u957f\uff0c\u76f4\u81f3\u7a0b\u5e8f\u629b\u51fa\u5f02\u5e38\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"java.lang.OutOfMemoryError: Direct buffer memory")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220228155425717",src:n(85761).Z,width:"818",height:"166"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"VM\u53c2\u6570\uff1a-Xmx20m -XX:MaxDirectMemorySize=10m")),(0,i.kt)("p",null,"\u629b\u51fa OOM \u5f02\u5e38"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220228155703933",src:n(51061).Z,width:"771",height:"143"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"JDK8 \u4e2d\u5143\u7a7a\u95f4\u76f4\u63a5\u4f7f\u7528\u672c\u5730\u5185\u5b58")),(0,i.kt)("p",null,"java\u7a0b\u5e8f\u8fdb\u7a0b\u6240\u5360\u7684\u5185\u5b58\u7a7a\u95f4 = \u672c\u5730\u5185\u5b58 + \u5806\u7a7a\u95f4"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220228155800493",src:n(2456).Z,width:"1384",height:"784"})))}p.isMDXComponent=!0},37098:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/9677ff6717ac9633c7e3f0033f98ef26-707f76c01fd30ce97322e660ff482f5d.png"},91807:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/d5fe006563629639c8adcfbbc2d639d8-127c29be023f437f62f1c522ca8bd419.png"},98248:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},61473:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20220228153403401-1931bc1a1bb0350eb308b35926e28c71.png"},90159:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},85761:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20220228155425717-c42a28faae40b7457e0677a681543190.png"},51061:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20220228155703933-cf6010b8342e39e0a6c0b720600458ac.png"},2456:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20220228155800493-42df632cebaea13b91dfeb7500fe8c1a.png"}}]);