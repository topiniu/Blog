## BOM

### window

> window.open([URL|STRING],[TARGET_FRAME|STRING],[SETTINGS|STRING],[HISTORY_REPLEACE|BOOLEAN])

window.open方法接受4个参数，分别是要加载的URL、窗口目标、一个特性字符串以及一个表示新页面是否取代浏览器历史记录中当前加载页面的布尔值。

如果传递的第二个参数并不是一个已经存在的frame或window，那么该方法会根据第三个参数的设定创建一个新窗口或新标签页。如果没有传入第三个参数，那么会打开带有全部默认设置的新浏览器窗口或标签。

第三个参数是一个逗号分隔的设置字符串（不可有空格），设置项如下图：

| 设置         | 值        | 说明                |
| ---------- | -------- | ----------------- |
| fullscreen | yes \ no | 窗口是否最大化（only IE）  |
| height     | NUMBER   | 高度（不小于100）        |
| width      | NUMBER   | 宽度（不小于100）        |
| left       | NUMBER   | 左坐标（大于0）          |
| top        | NUMBER   | 顶部坐标（大于0）         |
| location   | yes \ no | 是否在浏览器中显示地址栏，默认no |
| menubar    | yes \ no | 是否在窗口显示菜单栏，默认no   |
| resizable  | yes \ no | 是否可以改变大小，默认no     |
| scrollbars | yes \ no | 是否允许滚动，默认no       |
| status     | yes \ no | 是否在窗口显示状态栏，默认no   |
| toolbar    | yes \ no | 是否在窗口显示工具栏，默认no   |

e.g：

```javascript
window.open('http://blog.topiniu.com','framename','height=400,width=400,top=10,left=10,resizable=yes')
```

受限于屏蔽插件，window.open可能不会正常弹出窗口。检测窗口是否弹出可以使用null判断和try catch捕获异常。

```javascript
var blocked = false;
try{
    var w = window.open('http://blog.topiniu.com','framename','height=400,width=400,top=10,left=10,resizable=yes');
  if(w === null){
      blocked = true;
  }
}carch(error){
    blocked = true;
}
if(blocked){
    alert('窗口弹出失败');
}
```

### location

1. location.assign等同于window.location与location.href。都是跳转到指定url的作用。
2. 更改location对象的search、hostname、pathname、port属性都会改变URL并刷新页面，更改hash属性会改变URL但是不会刷新页面。前面几种属性的改变都会在浏览器中产生历史记录。
3. 使用location.replace方法跳转不会产生历史记录。

### navigator

> 识别客户端浏览器信息的重要对象。

| 属性或方法                      | 说明                      |
| -------------------------- | ----------------------- |
| appCodeName                | 浏览器名称                   |
| appMinorVersion            | 次版本信息                   |
| appName                    | 完整的浏览器名称                |
| appVersion                 | 浏览器版本                   |
| buildId                    | 浏览器编译版本                 |
| cookieEnabled              | 表示cookie是否启用            |
| cpuClass                   | 客户端计算机实用的CPU类型          |
| javaEnable()               | 当前浏览器是否启用了java          |
| language                   | 浏览器的主语言                 |
| mimeTupes                  | 浏览器中注册的MIME类型数组         |
| onLine                     | 浏览器是否连接了因特网             |
| osCpu                      | 客户端计算机的操作系统或使用的CPU      |
| platform                   | 浏览器所在的系统平台              |
| plugins                    | 浏览器中安装的插件信息书租           |
| preference()               | 设置用户的首选项                |
| product                    | 产品名称                    |
| productSub                 | 关于产品的次要信息               |
| register-ContentHandler()  | 针对特定的MIME类型将一个站点注册为处理程序 |
| register-ProtocolHandler() | 针对特定的协议将一个站点注册为处理程序     |
| systemLanguage             | 操作系统语言                  |
| userAgent                  | 浏览器的用户代理字符串             |
| userLanguage               | 操作系统的默认语言               |
| userProfile                | 借以访问用户个人信息的对象           |
| vendor                     | 浏览器的品牌                  |
| vendorSub                  | 有关供应商的次要信息              |

### screen

*

### history

1. 使用go方法可以实现向前向后跳转。参数1代表前进一页，参数2前进2页，参数-1后退一页。
2. 也可以使用back和forward方法实现前进后退。