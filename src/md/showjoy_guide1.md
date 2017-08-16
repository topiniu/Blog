### 安装Nodejs环境
前往[Nodejs官网](https://www.nodejs.org)下载nodejs进行安装即可。需要注意的是，因为之前安装过程中出现高版本nodejs下spon工作异常情况，所以建议安装node_v6.3.0以及npm_v3.10.3版本，[点击这里下载](https://nodejs.org/dist/v6.3.0)。
安装完成后打开终端使用node -v和npm -v命令查看安装是否顺利。
### 安装合适的编辑器
你可以选择适合自己编程习惯的IDE，无论是sublime text还是vs code或者是webstorm都可以。编辑器各有各的好，笔者喜欢使用vs code，其完善度较高的插件市场能提供为你工作带来各种便利的插件工具，你可以到[vs code官网](https://code.visualstudio.com/)下载最新稳定版本的vs code使用。同时下面为你推荐几款插件供选择：
1. Auto Close Tag --如同其名，自动闭合Html／Xml标签
2. Auto Rename tag --自动根据对应的另一半标签更改当前标签。
3. Beautify css/less/scss/sass --流呀优雅的格式化你的代码。

以上只是部分推荐，关于vs code插件更多信息你可以浏览[这篇文章](https://segmentfault.com/a/1190000006697219)
### 安装尚妆前端解决方案Spon
1. 使用npm瓜官方源安装cnpm。切换npm源建议使用nrm，nrm可以通过npm官方安装。nrm常用命令：`nrm use [name]`（切换npm源）,  `nrm ls`（列举所有可用的源）,  （更多使用方法自查）。
2. 将cnpm源改为尚妆npm源(npm.showjoy.net)。更改cnpm源方法：`cnpm config set registry [url]`（同样适用于npm），查看cnpm当前使用源方法：`cnpm config get registry`（同样适用于npm）。
3. 使用npm安装webpack、gulp、yo。如果遇到网络请求过慢，建议你将npm源更改为淘宝npm源。
4. 使用cnpm安装spon。
5. 验证。在终端输入spon init，正常情况下最后返回的信息是success。如果运行不及预期，请检查主目录下隐藏的.spon文件夹下是否包含mobi和plugins文件夹，如果没有请检查是否将cnpm源设置成了尚妆源。如果有的话请检查是否使用了管理员角色安装，如果使用了请联系师兄师姐。
