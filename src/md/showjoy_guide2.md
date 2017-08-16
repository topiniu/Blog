### 前端项目划分

1. 活动模版：[act-module](http://git.showjoy.net/activity/act-module)（git）
2. 达人店前端（同步版）：shop-view（svn）
3. 达人店前端资源文件（同步版）+ 活动模版母文件：[shop-m](http://git.showjoy.net/showjoy-assets/shop-m)（git）
4. 达人店前端（异步vue+weex版本）：[shop-weex-m](http://git.showjoy.net/showjoy-assets/shop-weex-m)（git）

### 活动模版
> 活动模版依靠shop-m的module-activity-disposiable、module-activity-lazy、module-activity三个page渲染，act-module项目中的page主要负责dom架构与样式和基础的js逻辑。

act-module依靠spon的mb编译和测试。具体命令是：
添加一个模版：` spon mb add `<br>
编译模版：`spon mb build -n [MODULE_NAME]`<br>
打开本地测试：`spon mb dev -p [PORT] -r [PORT_IDONTKNOWWHATTHISIS]`<br>
发布:可以使用git命令也可以使用集成git命令的`spon cmt`命令<br><br>
一个活动模版对应一个page，截止到此时（2017年8月16日）活动模版一共有整点抢购、商品列表、banner图三个类型。<br>
#### · 整点抢购
可通过后台配置的是日期的背景色和前景色以及商品。除此之外所有的样式需要在模版里面编写。<br>
#### · 商品列表
可通过后台配置的是顶部的banner图和背景色与前景色，除此之外所有的样式需要在模版里面编写。<br>
#### · banner图
可通过后台配置的是整块banner图背景，如果需要特殊的按钮（比如抢红包、活动规则）则需要在模版里面编写。<br>
```java
public void static main(){}
```