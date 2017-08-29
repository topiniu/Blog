## 前端项目划分

1. 活动模版：[act-module](http://git.showjoy.net/activity/act-module)（git）
2. 达人店前端（同步版）：shop-view（svn）
3. 达人店前端资源文件（同步版）+ 活动模版母文件：[shop-m](http://git.showjoy.net/showjoy-assets/shop-m)（git）
4. 达人店前端（异步vue+weex版本）：[shop-weex-m](http://git.showjoy.net/showjoy-assets/shop-weex-m)（git）

---

### 活动模版
> 活动模版依靠shop-m的module-activity-disposiable、module-activity-lazy、module-activity三个全局page渲染，act-module项目中的page主要负责dom架构与样式和基础的JavaScript逻辑。该项目使用到了第三方zepto.js、artTemplate.js库。act-module依靠spon的mobi工程构建工具。

<hr style="width:100%;height:1px;opacity:0.6;">

#### 开发

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

&#8194;&#8194;在后台添加活动模版时，仅需要将page里面的HTML文件中的script中的模版代码粘贴到tmpl文本框里。
<img src='http://23.106.158.25:8080/Project_BackSky_New/data/uploadimg/compressed/hhh.jpg' data-full="http://23.106.158.25:8080/Project_BackSky_New/data/uploadimg/full/hhh.png">
&#8194;&#8194;因此，你可以在HTML文件里随意编写自己的测试代码。如果你想通过artTemplate测试模版是否正常工作，你可以将其他页面中的demo.js拷贝到你的page里然后在HTML里面引用这个有测试数据并调用了模版生成方法的JavaScript文件。<br>
&#8194;&#8194;编写好less文件后并不会实时编译成CSS文件，因此我推荐你使用考拉或者其他的实时编译器在你的page目录下生成编译好的CSS文档供你测试。
当然你也可以使用spon编译你的page然后在build文件夹下引用它。<br>
&#8194;&#8194;如果你在测试过程中需要调用其他域名的api，但是你的api写的相对地址的话，你可以使用Charles抓包工具进行拦截并转发到正确的地址。<a style="color:gray;">*Charles工具会在项目开发过程中经常使用，建议掌握基本用法。*</a><br>

<hr style="width:100%;height:1px;opacity:0.6;">

#### 发布
&#8194;&#8194;act-module项目同之前的act-tmpl类似，活动模版引用的JavaScript、CSS资源文件是特定版本的文件（*git上的publish tag*），因此当你向master提交代码后并不会在已存在的模版中生效除非你手动更改它引用资源的版本号。这样会规避了你传入错误代码到master导致线上活动出现异常的情况，但是常规下**强烈禁止直接向master提交代码**，关于git流程规范，你可以参见我的另一篇文档*尚妆前端快速上手-规范要则*。
&#8194;&#8194;完成代码编写后，请使用spon编译你的page文件，然后提交到git，最后创建一个合并请求（merge request），会有管理员审核你的代码，如果没有问题你的代码将会合并到master。请在master分支打一个递增tag，然后你可以在线下环境添加的活动模版，在CSS代码段和JavaScript代码段分别协商静态资源地址（使用style标签和script标签也可以直接写普通代码），最后创建活动页面进行测试。活动模版静态资源的引用链接如下：
> JavaScript： `<script src="http://cdn1.showjoy.com/assets/f2e/activity/act-module/[VERSION]/[PAGE_NAME]/[PAGE_NAME].min.js"></script>`
> CSS：`<link rel="stylesheet" href="http://cdn1.showjoy.com/assets/f2e/activity/act-module/[VERSION]/[PAGE_NAME]/[PAGE_NAME].min.css">`

&#8194;&#8194;如果在测试过程中你发现了一些小问题，为了避免频繁提交，建议时用Charles进行抓包将线上的CSS、JavaScript资源代理到你的本地文件，这样你代理的活动页面采用的便是你本地的资源文件，你可以自由的更改并在线查看运行效果。在裙包所有问题都修复后再build你的page文件并提交到gitlab。

---
### 达人店前端-weex版本
> weex版本的达人店起步不久，目前还没有做到百分百weex化。相对于以前shop-view，weex版本的达人店使用了异步数据加载，页面加载质量更好，同时在weex sdk的加持下可以生成原生的Android和Ios的页面。开发此项目建议熟悉vue和weex，详情参见[vue官网](https://vuejs.org)和[weex官网](http://weex.apache.org/cn/)。shop-weex-m项目依赖于spon的weex工具。开发前请确保已安装spon-weex插件。

#### 开发

&#8194;&#8194;使用`spon weex add`命令添加一个新的页面模版。该命令会在项目路径下生成一个你命名的文件夹，其中包含了HTML、JavaScript以及一个vue文件。所有业务代码均在vue中编写。根据不同的开发习惯，你可以将vue中的CSS stylesheet和JavaScript 文件单独分离出来以方便开发。

&#8194;&#8194;开发weex项目要遵循weex规范，在标签和样式的使用上要确保weex sdk支持，在JavaScript 中要确保weex sdk支持你编写的全部语句和方法。开发中要确保程序没有致命性错误。

&#8194;&#8194;在南洋努力下，目前根据我们业务定制weex组件库已经慢慢发展起来。开发中你可以使用组件大大减少你的工作量，点击[这里](http://sponui.showjoy.net)访问weex组件文档。

### 测试

&#8194;&#8194;weex项目的测试与达人店测试版app联系密切，测试前的准备工作有：安装达人店测试版、熟悉使用Charles抓包工具、具有静态测试数据。

&#8194;&#8194;使用spon工具可以方便的打开测试页面。H5端为`spon weex dev -n [your_page_name]` ，Native端为`spon weex debug -n [your_page_name]`。

&#8194;&#8194;自己测试工作时开发中重要的一环，weex版本达人店测试环境大致分为H5端测试（命令`spon weex dev -n [your_page_name]`）和Native端（`spon weex debug -n [your_page_name]`）测试。且，每个测试环境都应包含样式测试和功能测试。

1. 样式测试

   样式测试指的是静态页面的样式与设计稿还原度的测试。通常眼睛看，但为了提高开发效率，建议在编写完静态页面后与设计人员联系请求设计人员评定页面是否与设计稿相符。

   进行样式测试时只需要页面具有基本的静态数据，事实上，在服务端给定接口返回数据格式后，建议mock数据并填入测试数据，在你的页面路径下保存为json格式以便调用测试。需要注意的是Native端不支持通过异步方式获取json文件，只能将数据写在JavaScript 中。

2. 功能测试

   功能测试包括页面加载、页面事件的测试。根据prd应该做到百分之百一致，且在测试期间应多尝试边界值、极限情况下的测试，尽可能做到测试案例覆盖最广。

   测试过程中涉及到相对路径链接，可以使用Charles进行拦截映射到正确URL。Native端可以正常访问所有链接，因此无须拦截Nactive端。

<a style="color:gray;">未完待续</a>


