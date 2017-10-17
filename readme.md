# 个人博客源码。

## 开发环境

工具：vscode

编译工具：webpack

语言：less + HTML + js

第三方框架：Jquery

## 项目结构

[![strc of project](http://23.106.158.25:8080/Project_BackSky_New/data/uploadimg/full/capture.png)]

**-blog：**
编译后的静态文件夹

**-src：**
源代码

​	**js：**
js文件

​	**less：**
less文件

​	**md：**
博客内容，markdown文件

​	**res：**
资源文件，例如图片

​	**index.html：**
webpack编译时采用的html模版

**webpack.prod.js：**
webpack生产环境编译配置文件

**webpack.dev.js：**
webpack开发环境编译配置文件



## 代码规范

开发中遵循Eslint的airbnb规范配置文件，但没有在项目中强制使用代码检查。

## 编译与运行

1. 使用npm install安装所需要的包
2. npm run dev按照开发环境编译并启动http服务器
3. 你也可以单独使用 npm run build:dev 和 npm run build:prod 单独编译然后使用 npm start 启动http服务器

## 我能为这个项目做些什么？

首先声明的是这个项目目前是运行在我的服务器上并提供给外界开放访问的博客。您可以对此项目做任何修改，但是您必须重新切一个分支以保证master分支始终稳定。感谢您的来访，一起codeing吧！

## 协议

MIT
