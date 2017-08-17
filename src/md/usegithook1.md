> 直接部署值得是无需连接远程服务器并到项目目录下手动从Github或者其他代码仓库进行pull或者fetch操作，完成此功能后，您需要在您的开发机器上进行两次push操作，一次push到您的远程服务器上，另外一次push到您的代码仓库中。（当然您也可以通过编写hook或者脚本方式自动进行下一次push操作。

### 配置无须验证的远程ssh连接

1. 进入/[USER_NAME]/.ssh文件夹新建一个具有标识性名称的ssh文件

   1. 使用`ssh-keygen -trsa -C "[SSH_FILE_NAME]"`创建一个新的ssh文件。

   2. 在.ssh文件夹鞋面的config文件添加远程服务器标识（如果没有config文件您可以创建一个），添加一个ssh标识的格式为：

      <img src="http://23.106.158.25:8080/Project_BackSky_New/data/uploadimg/compressed/table.jpg" data-full="http://23.106.158.25:8080/Project_BackSky_New/data/uploadimg/full/table.png">

2. 在远程服务器上进行公钥对接。使用pbcopy < ~/.ssh/[SSH_FILE_NAME].pub拷贝公钥，粘贴到远程服务器的~/.ssh/authorized_keys文件中（没有的话可以新建一个）。

3. 至此，当使用ssh连接您的远程服务器的时候应不会再需要用户密码。

### 配置远程环境

1. 创建一个“中转”仓库

   1. “中转”仓库指的是“纯净”仓库，即一个不具有实际项目文件，但是具有实际文件二进制编码和git信息的仓库。使用git的bare仓库可以创建一个“纯净仓库”。假设我们在**／root/repos**目录下：

      `git init --bare BRIDGE_SEA.git`

   2. 为这个仓库设置提交动作。通过git hook我们可以实现很多有用的操作。关于git hook我们建议您查阅相关更详细的学习资料。在这里我们使用的是post-receive钩子，当有push到此仓库的动作时便会出发这个钩子。所有的狗子都在纯净仓库的hooks目录下。假设我们现在在**/root/repos/BRIDGE_SEA.git/hooks**文件夹下：

      `vi post-receive`

   3. 然后输入:

      ```sh
      #!/bin/sh

      unset GIT_DIR

      NowPath="/root/repos/BRIDGE_SEA.git/hooks"

      DeployPath="/var/www/html/sea"

      cd $DeployPath

      git pull origin master

      cd $NowPath

      exit 0
      ```

   4. 给post-receive文件添加权限。`chmod +x post-receive`

2. 创建项目部署目录，该目录也是您献上访问的目录。假设这个目录为**/var/www/html/sea**。

   1. 进入目录。`cd /var/www/html/sea`
   2. 初始化为Git仓库。`git init`
   3. 设置源为服务器上的中转仓库。`git remote add origin /root/repos/BRIDGE_SEA.git`
   4. 同步。`git pull`

3. 设置开发机器环境。

   1. 进入您的开发项目根目录，假设路径是**/topiniu/Github/The-sea**。

   2. 添加远程服务器中转仓库的源.`git remote add deploy ssh://[USER_NAME]@[IP]:[PORT][BARE_PATH]`。假设服务器ip为1.2.3.4，port为65456，username是root：

      `git remote add deploy ssh://root@1.2.3.4:65456/root/repos/BRIDGE_SEA.git`

   3. 向中转仓库push代码，然后向代码仓库push代码：

      `git push deploy master`

      `git push origin master`


