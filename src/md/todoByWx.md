> 第一次接触小程序开发很兴奋。小程序跟vue很接近，跟React也有一点共同之处。开发起来还是很顺手的。也可能是因为没开发特别复杂的功能。
>
> 这个简单的待办事项只有创建、删除功能。数据保存在本地。

1. ## 工程搭建

   ​

   ​    项目文件结构如图：

   <img src="http://23.106.158.25:8080/Project_BackSky_New/data/uploadimg/compressed/project_folder.jpg" data-full="http://23.106.158.25:8080/Project_BackSky_New/data/uploadimg/compressed/project_folder.jpg" style="width:200px;">

   ​    其中，page/topiniu/main.wxml是主页面，负责显示所有待办。page/topiniu/add_page/main.wxml是添加一个新待办页面，负责个人信息展示和待办事项的添加。

   ​

2. ## 编写主页面 page/topiniu/main.wxml

   - 页面结构

     ​    首先加一个根容器.container，然后创建两个container，分别是.list-container（用于显示待办事项）和.btn-container（用于存放‘添加’功能按钮‘）。

     <img src="http://23.106.158.25:8080/Project_BackSky_New/data/uploadimg/compressed/main_page_1.jpg" data-full="http://23.106.158.25:8080/Project_BackSky_New/data/uploadimg/full/main_page_1.png" style="width:250px;">

   - 编写内容展示模块 list-container

     list-container是用来展示所有待办事项的容器，因此只需要在里面编写“事项”节点即可。根据设计，用户点击事项元素本身上才会触发“完成”事件，因此需要节点根据内容多少自动伸缩；加上每个事件的浮动方向不同，为避免“事项”元素堆叠在一行，因此在节点外面加一层display为block的容器。

     ​    规定JavaScript中有一个存放所有待办事项的对象数组itemList，其中item字段规定如下：

     <img src="http://23.106.158.25:8080/Project_BackSky_New/data/uploadimg/compressed/item.jpg" data-full="http://23.106.158.25:8080/Project_BackSky_New/data/uploadimg/full/item.png" style="width:250px">

     ​    isFinished表示当前待办事件是否已经完成，backColor、floatSide、animationDelay字段是创建新的待办时随机决定值的字段。

     ​    有了itemList和item之后我们可以编写列表渲染了。

     <img src="http://23.106.158.25:8080/Project_BackSky_New/data/uploadimg/compressed/itemlist.jpg" data-full="http://23.106.158.25:8080/Project_BackSky_New/data/uploadimg/full/itemlist.png" style="width:500px">

     ​    类名是cle的view是消除浮动的元素。遍历数组使用wx:for即可。如图，在里面的类名为item的view外面加了一个view并设定类名为item-container。

     ​    值得注意的是在item中有一个data-itemIndex属性设置成了当前item的下标，而且在item-container中用到了animation属性。这是为了用户点击这个item的时候使用一段动画隐藏掉用户点击的item，如果所有item-container都使用一个单独的动画变量，那用户随便点击一个就会隐藏所有item-container了。因此在JavaScript中定义了一个animationData数组，长度跟itemList是一样的，每个下标都有一个动画值，将制定下标的动画值赋给item-container来实现动画隔离。

     ​    item中使用了样式动态绑定，这三个值都是随机的，通过这个实现样式不一样效果。

   - 编写增加按钮

     <img src="http://23.106.158.25:8080/Project_BackSky_New/data/uploadimg/compressed/btn.jpg" data-full="http://23.106.158.25:8080/Project_BackSky_New/data/uploadimg/full/btn.png" style="width:500px">

     ​    使用微信官方的button组件，绑定navToAdd事件。

3. ## 编写主页面JS文件 page/topiniu/main.js

   - data本地变量

     ​

     <img src="http://23.106.158.25:8080/Project_BackSky_New/data/uploadimg/compressed/localvi.jpg" data-full="http://23.106.158.25:8080/Project_BackSky_New/data/uploadimg/full/localvi.png" style="width:300px">

     ​    其中itemList为待办事项集合，animationData数组用来区分开view的动画效果。addBtnBackground和addBtnFront均是增加按钮add-btn的样式属性。

   - 函数

     ​    主页面用到了两个生命周期函数：onShow和onLoad。新建了两个函数：navToAdd和finishThis。

     <img src="http://23.106.158.25:8080/Project_BackSky_New/data/uploadimg/compressed/main_func.jpg" data-full="http://23.106.158.25:8080/Project_BackSky_New/data/uploadimg/full/main_func.png" style="width:500px">

     onLoad函数监听页面加载的时候动态改变“添加”按钮的背景颜色，onShow函数在页面显示的时候先置空页面数据，然后重新从globalData中获取最新的数据。

     <img src="http://23.106.158.25:8080/Project_BackSky_New/data/uploadimg/compressed/finish_this.jpg" data-full="http://23.106.158.25:8080/Project_BackSky_New/data/uploadimg/full/finish_this.png" style="width:500px">

     finishThis函数如上图所示，更新数据后重新渲染页面是迫不得已的。因为动画结束后更新数据，此时所有“待办”会很突兀的移动一段距离，造成视觉感很差。先更新global.itemList因为本地的itemList是始终与全局的itemList保持一致的。

   ​



