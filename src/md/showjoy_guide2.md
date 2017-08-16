### 前端项目划分

1. 活动模版：[act-module](http://git.showjoy.net/activity/act-module)（git）
2. 达人店前端（同步版）：shop-view（svn）
3. 达人店前端资源文件（同步版）+ 活动模版母文件：[shop-m](http://git.showjoy.net/showjoy-assets/shop-m)（git）
4. 达人店前端（异步vue+weex版本）：[shop-weex-m](http://git.showjoy.net/showjoy-assets/shop-weex-m)（git）

---

### 活动模版
> 活动模版依靠shop-m的module-activity-disposiable、module-activity-lazy、module-activity三个全局page渲染，act-module项目中的page主要负责dom架构与样式和基础的js逻辑。该项目使用到了第三方zepto.js、artTemplate.js库。act-module依靠spon的mobi工程构建工具。

act-module依靠spon的mb编译和测试。具体命令是：<br>
**添加一个模版：**` spon mb add `<br>
**编译模版：**`spon mb build -n [MODULE_NAME]`<br>
**打开本地测试：**`spon mb dev -p [PORT] -r [PORT_IDONTKNOWWHATTHISIS]`<br>
**发布:** git命令或者`spon cmt`<br><br>
&#8194;&#8194;一个活动模版对应一个page，截止到此时（2017年8月16日）活动模版一共有整点抢购、商品列表、banner图三个类型。<br>
  1. 整点抢购<br>
page名以sec开头，可通过后台配置的是日期的背景色和前景色以及商品。除此之外所有的样式需要在模版里面编写。<br>
  2. 商品列表<br>
page名以list开头，可通过后台配置的是顶部的banner图和背景色与前景色，除此之外所有的样式需要在模版里面编写。<br>
  3. banner图<br>
page名以banner开头，可通过后台配置的是整块banner图背景，如果需要特殊的按钮（比如抢红包、活动规则）则需要在模版里面编写。<br>

&#8194;&#8194;在后台添加活动模版时，仅需要将page里面的html文件中的script中的模版代码粘贴到tmpl文本框里。
<img src='http://23.106.158.25:8080/Project_BackSky_New/data/uploadimg/compressed/hhh.jpg' data-full="http://23.106.158.25:8080/Project_BackSky_New/data/uploadimg/full/hhh.png">
&#8194;&#8194;因此，你可以在html文件里随意编写自己的测试代码。如果你想通过artTemplate测试模版是否正常工作，你可以将其他页面中的demo.js拷贝到你的page里然后在html里面引用这个有测试数据并调用了模版生成方法的js文件。<br>
&#8194;&#8194;编写好less文件后并不会实时编译成css文件，因此我推荐你使用考拉或者其他的实时编译器在你的page目录下生成编译好的css文档供你测试。
当然你也可以使用spon编译你的page然后在build文件夹下引用它。<br>
&#8194;&#8194;如果你在测试过程中需要调用其他域名的api，但是你的api写的相对地址的话，你可以使用Charles抓包工具进行拦截并转发到正确的地址。<a style="color:gray;">*Charles工具会在项目开发过程中经常使用，建议掌握基本用法。*</a><br>
