# Git 版本控制

# 第 1 章 引出 Git

## 1.1 问题：公司五一活动计划

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222144916.png)

不同版本的文档每次保存非常麻烦，版本太多自己都会糊涂

## 1.2 解决方案：版本管理工具（Git）

Git 是目前最流行和分布式版本控制软件

# 第 2 章 版本管理

在开发的过程中用于管理对文件、目录或工程等内容的修改历史，方便查看历史记录、备份以便恢复以前版本的软件工程技术

## 2.1 可以完成哪些功能

实现跨区域多人协同开发

追踪和记载一个或者多个文件的历史记录

组织和保护源代码和文档

统计工作量

并行开发、提高开发效率

跟踪记录整个软件的开发过程

减轻开发人员负担，节省时间、同时降低人为错误

## 2.2 主流版本控制工具/软件

Git、SVN、CVS、VSS、TFS、Visual Studio Online

## 2.3 版本控制分类

### 2.3.1 本地版本控制

记录文件每次的更新，可以对每个版本做一个快照，或是记录补丁文件，适合个人用

### 2.3.2 集中版本控制

（1）所有的版本数据都保存在服务器上，协同开发者从服务器上同步更新或上传自己的修改

（2）用户的本地只有自己以前所同步的版本，如果不联网的话用户就看不到历史版本，也无法切换版本

（3）所有数据都保存在单一的服务器上，如果这个服务器会损坏，这样就会丢失所有的数据，需要定期备份

### 2.3.3 分布式版本控制

（1）所有版本信息仓库全部同步到本地的每个用户

（2）可以在本地查看所有版本历史，可以离线在本地提交，只需在联网时 push 到相应的服务器或其他用户那里

（3）每个用户那里保存的都是所有的版本数据，只要有一个用户的设备没有问题就可以恢复所有的数据

（4）更加安全，不会因为服务器损坏或者网络问题造成不能工作的情况

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222144478.png)

## 2.4 Git VS SVN

（1）SVN 是集中式版本控制系统，版本库是集中放在中央服务器的，而工作的时候，用的都是自己的电脑，所以首先要从中央服务器得到最新的版本，完成工作后，需要把自己的代码送到中央服务器，集中式版本控制系统是必须联网才能工作

（2）Git 是分布式版本控制系统，每个人的电脑就是一个完整的版本库，工作的时候不需要联网了，因为版本都在自己电脑上。协同的方法说明：比如自己在电脑上改了文件 A，其他人也在电脑上改了文件 A，这时，你们俩之间只需把各自的修改推送给对方就可以互相看到对方的修改了。Git 可以直接看到更新了哪些代码和文件

# 第 3 章 Git 的工作原理

## 3.1 四个工作区域和关系

四个工作区域：Git 本地有三个工作区域：工作目录、暂存区、资源库，如果再加上远程 git 仓库就可以分为四个工作区域，文件在这四个区域之间的转换关系如下：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222144482.png)

（1）Workspace：工作区，就是平时存放项目代码的地方

（2）Index / Stage：暂存区，用于临时存放你的改动，事实上它只是一个文件，保存即将提交到文件列表的信息

（3）Repository：仓库区（或本地仓库），就是安全存放数据的位置，这里面有你提交的所有版本的数据，其中 HEAD 指向最新放入仓库的版本

（4）Remote：远程仓库，托管代码的服务器（比如 GitHub/Gitee），可以简单的认为是你项目组中的一台电脑用于远程数据交换

## 3.2 工作流程

（1）在工作目录中添加、修改文件

（2）将需要进行版本管理的文件放入到暂存区域

（3）将暂存区域的文件提交到 git 本地仓库

因此，git 管理的文件有三种状态：已修改（modified）、已暂存（staged）、已提交（committed）

# 第 4 章 Git 仓库的创建

## 4.1 创建工作目录与常用指令

（1）工作目录（WorkSpace）一般就是你希望 Git 帮助你管理的文件夹，可以是你项目的目录，也可以是一个空目录，建议不要有中文

（2）6 个命令

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222144925.png)

## 4.2 本地仓库创建

### 4.2.1 创建全新的仓库

需求：演示在本地创建全新仓库 D:\Study\Code\Git\zhishugit

（1）创建全新的仓库，需要用 Git 管理的项目的根目录执行

（2）创建目录 D:\Study\Code\Git\zhishugit 作为本地 git 仓库

（3）右键点击 Git Bash

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222144301.png)

（4）执行 `git init` 会创建一个 .git 文件夹

### 4.2.2 克隆远程仓库

演示在本地克隆远程仓库 D:\Study\Code\Git\zhishugit2

说明：克隆远程代码仓库，就是将远程服务器上的仓库完全镜像一份至本地

克隆一个代码仓库和它的整个代码历史（版本信息）

`git clone [url]` url 就是远程 git 项目的地址

（1）创建目录：D:\Study\Code\Git\zhishugit2 作为本地 git 仓库

（2）在 github 或者 gitee 找一个项目的地址 url

（3）进入 D:\Study\Code\Git\zhishugit2 这个目录执行克隆指令 `git clone https://gitee.com/TheAlgorithms/Javascript.git`

# 第 5 章 Git 文件管理

## 5.1 文件四种状态

版本控制就是对文件的版本控制，在 Git 管理中，文件被统一管理，有四个状态

（1）Untracked：未跟踪，此文件在文件夹中，但并没有加入到 git 库，不参与版本控制，通过 git add 状态变为 Staged

（2）Unmodify：文件已经入库，未修改，即版本库中的文件快照内容与文件夹中完全一致，这种类型的文件有两种处理方式，如果它被修改变为 Modified，如果使用 git rm 移出版本库，则成为 Untracked

（3）Modified：文件已修改，仅仅是修改，并没有进行其它的操作。这种文件有两个去处，通过 git add 可进入暂存 Staged 状态，使用 git checkout 则丢弃修改过的返回到 unmodify 状态，这个 git checkout 即从库中取出文件，覆盖当前修改

（4）Staged：暂存状态。执行 git commit 则将修改同步到库中，这时库中的文件和本地文件又变为一致，文件为 Unmodify 状态，执行 git reset HEAD filename 取消暂存，文件状态为 Modified

## 5.2 文件操作指令

（1）查看指定文件状态：`git status [filename]`

先在刚刚克隆下来的文件中 D:\Study\Code\Git\zhishugit2\Javascript 创建一个测试文件 ABC.txt

（2）查看所有文件状态：`git status`

（3）添加所有文件到暂存区：`git add .`

（4）提交暂存区中的内容到本地仓库：`git commit -m "消息内容"`

## 5.3 忽略文件

需求：我们不想把某些文件纳入版本控制中，如何处理？

### 5.3.1 忽略文件处理方式

不想把某些文件纳入版本控制中，比如数据库文件、临时文件、设计文件等，在主目录下建立 .gitignore 文件（默认就有），此文件有如下规则：

（1）忽略文件中的空行或以 # 开始的行

（2）支持 Linux 通配符。例如：`*`  代表任意多个字符，`?` 代表一个字符，`[abc]` 代表可选字符范围，`{string1, string2,...}` 代表可选的字符串等

（3）如果名称的最前面有一个 `!`，表示例外规则，将不被忽略

（4）如果名称的最前面是一个 `/`，表示忽略 .gitignore 文件所在的目录，不包括其任何子目录中的 dir 目录

（5）如果名称的最后面是一个 `/`，表示忽略 .gitignore 文件所在的目录和所有子目录的 dir 目录

```
*.java  #忽略所有 .java 结尾的文件
!zhishu.java  #zhishu.java 除外
```

[.gitignore文件语法和常见写法](https://blog.csdn.net/w8y56f/article/details/103263924)

# 第 6 章 Gitee 创建代码仓库

## 6.1 创建仓库

（1）点击创建仓库

（2）输入仓库的信息，仓库开源，需要绑定手机号

## 6.2 设置本机绑定 SSH 公钥，实现免密登录

### 6.2.1 生成 SSH 公钥

### 6.2.2 将公钥信息 public key 添加到 Gitee 账户

# 第 7 章 IDEA 项目使用 Git 管理

（1）将 Gitee 创建的项目拉取到 IDEA，进行管理

（2）创建了一个 IDEA 项目（没有从 Gitee 拉取），后面又希望和 Gitee 的某个代码仓库关联，如何操作

创建远程仓库和本地项目，克隆远程仓库中的文件，复制其中的文件（注意还有个隐藏的 .git）到本地项目中，刷新 Maven，就可以了

（3）一个 IDEA 项目（从 Gitee clone），后面又希望获取 Gitee 的代码仓库的最新代码，如何操作 - pull

# 第 8 章 Git 分支管理

## 8.1 介绍

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222144280.png)

（1）分支可以有多个（根据业务需求）

（2）如果各分支没有交集，始终平行发展，则不需要合并

（3）如果两个分支需要合并，则执行 merge 操作

## 8.2 创建 IDEA Maven 项目和 Gitee 的 zhishu-erp 代码仓库关联

## 8.3 Git 用指令创建分支

需求：克隆 zhishu-erp 仓库，创建分支 v1.0，并提交到远程仓库

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222144235.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222144279.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222144394.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222144204.png)

## 8.4 IDEA 项目创建分支

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222144308.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222144493.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222145181.png)


![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222145653.png)

## 8.5 切换分支，进行工作

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222145095.png)

在 v2.0 分支下，我们修改/增加一些文件，就只是针对当前 v2.0 的

## 8.6 分支合并

### 8.6.1 没有冲突的情况

在进行分支合并时，如果没有冲突（比如没有修改同一个文件）这时会比较顺畅

（1）需求：将分支 v3.0 合并到 Master 主分支

（2）从 master 开一个分支 v3.0，在 v3.0 增加一些文件，不在 master 或 v3.0 修改同一个文件【即如果 v3.0 修改了和 master 同名的文件，只要 master 没有修改就没有冲突】

（3）将分支 v3.0 同步到 Gitee 远程仓库，操作步骤和前面 v2.0 一样

（4）将 v3.0 合并到 Master 分支，注意当前的主分支是 Master

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222145397.png)

### 8.6.2 有冲突的情况

如果同一文件在合并分支前既被主分支修改了也被分支修改了（即都修改了）则会引起冲突，修改冲突文件后重新提交（这时要决定保留哪个分支代码）

#### 方案一：接受某一方，解决冲突

需求：将分支 v3.0 合并到 Master 主分支

（1）切换到 v3.0，修改 HspErpApplication.java

（2）将 HspErpApplication push

（3）切换到 Master，修改 Master 的 HspErpApplication，同样 push

（4）将 v3.0 合并到 Master

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222145460.png)

（5）此时观察本地的 Master 分治的 HspErpApplication 已经和 v3.0 一致了，但是远程仓库的 Master 没有变化，因为 Master 分治还没有 Push

（6）将 Master Push 后就可以看到相应的变化

#### 方案二：手动修改，解决冲突

手动修改就是 close 那个选择接受哪一方的界面，然后 IDEA 就会把 v3.0 的信息和 master 的信息打到 Master 的那个文件的代码，然后自己手动编辑留下哪些，然后再把这个文件重新 add、commit、push，然后 push Master 主分支，这样就解决了冲突

## 8.7 删除分支

### 8.7.1 彻底删除某个分支

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222145282.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222145149.png)

### 8.7.2 只删除本地分支，还可以从远程仓库重新获取

## 8.8 注意事项和细节

（1）如果同一文件在合并分支时都被修改了则会引起冲突，修改冲突文件后重新提交

（2）Master 主分支应该非常稳定，用来发布新版本，一般情况下不要在上面工作，工作一般在新建的分支上工作

（3）分支代码稳定后，可以合并到主分支 Master

（4）在进行分支合并时，最好是各分支都已经处于 committed 的状态，这样可以减小处理合并冲突的难度

（5）Push 操作，是 Push 你已经 Committed 的代码，如果你修改了一个文件，但是你没有执行 Commit，那么你 Push 的其实是上次 Committed 的状态

（6）add、commit、push 的操作可以针对单个文件，也可以针对文件夹

（7）文件要 Commit 前需要先 Add 到暂存区，以后文件修改了就可以直接 Commit

（8）如果要删除文件，可以在本地删除该文件，然后 commit 文件所在文件夹即可，并重新 push 该分支，那么在远程仓库也就会删除对应分支的文件了











