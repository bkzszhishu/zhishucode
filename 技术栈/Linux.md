# Linux

# 第 1 章 Linux 内容介绍

# 第 2 章 Linux 入门

# 第 3 章 VM 和 Linux 的安装

# 第 4 章 目录结构

## 4.1 基本介绍

（1）Linux 的文件系统是采用级层式的树状目录结构，在此结构中的最上层是根目录 `/` ，然后在此目录下再创建其它的目录

（2）Linux 树状文件目录说明：

​		1）`/bin` 是 Binary 的缩写，这个目录存放着最经常使用的命令

​		2）`/sbin` s 就是 Super User 的意思，这里存放的是系统管理员使用的系统管理程序

​		3）`/home` 存放普通用户的主目录，在 Linux 中每个用户都有一个自己的目录，一般该目录名是以用户的账号命名

​		4）`/root` 该目录为系统管理员，也称作超级权限者的用户主目录

​		5）`/lib` 系统开机所需要最基本的动态连接共享库，其作用类似于 Windows 里的 DLL 文件，几乎所有的应用程序都需要用到这些共享库

​		6）`/lost + found` 这个目录一般情况下是空的，当系统非法关机后，这里就存放了一些文件

​		7）`/etc` 所有的系统管理所需要的配置文件和子目录

​		8）`/usr` 这是一个非常重要的目录，用户的很多应用程序和文件都放在这个目录下，类似与 Windows 下的 Program Files 目录

​		9）`/boot` 存放的是启动 Linux 时使用的一些核心文件，包括一些连接文件以及镜像文件

​		10）`/proc` 这个目录是一个虚拟的目录，它是系统内存的映射，访问这个目录来获取系统信息

​		11）`/srv` service 缩写，该目录存放一些服务启动后需要提取的数据

​		12）`/sys` 这是 Linux2.6 内核的一个很大的变化，该目录下安装了 2.6 内核中新出现的一个文件系统 sysfs

​		13）`/tmp` 这个目录是用来存放一些临时文件的

​		14）`/dev` 类似于 Windows 的设备管理器，把所有的硬件用文件的形式存储

​		15）`/media` Linux 系统会自动识别一些设备，例如 U盘、光驱等等，当识别后，Linux 会把识别的设备挂载到这个目录下

​		16）`/mnt` 系统提供该目录是为了让用户临时挂载别的文件系统的，我们可以将外部的存储挂载在 `/mnt/` 上，然后进入该目录就可以查看里面的内容了

​		17）`/opt` 这是给主机额外安装软件所存放的目录，如安装 Oracle 数据库就可放到该目录下，默认为空

​		18）`/usr/local` 这是另一个给主机额外安装软件所安装的目录，一般是通过编译源码的方式安装程序

​		19）`/var` 这个目录中存放着在不断扩充着的东西，习惯将经常被修改的目录放在这个目录下，包括各种日志文件

​		20）`/selinux` SELinux 是一种安全子系统，它能控制程序只能访问特定文件，有三种工作模式，可以自行设置

（3）在 Linux 的世界里，一切皆为文件

# 第 5 章 远程登录到 Linux 服务器

## 5.1 为什么需要远程登录 Linux

（1）Linux 服务器是开发小组共享的

（2）正式上线的项目是运行在公网，因此程序员需要远程登录到 Linux 进行项目管理或者开发

（3）远程登录客户端有 Xshell6，Xftp6 等

（4）可以通过 XShell 远程登录到 Linux，这样如果 Linux 在公司，也可以在家操作 Linux

（5）Xftp 可以实现将当前电脑的文件传输到 Linux，可以实现将 Linux 的文件传输到当前电脑

# 第 6 章 VI 和 VIM 编辑器

## 6.1 vi 和 vim 的基本介绍

（1）Linux 系统会内置 vi 文本编辑器

（2）Vim 具有程序编辑的能力，可以看做是 Vi 的增强版本，可以主动的以字体颜色辨别语法的正确性，方便程序设计，代码补完、编译及错误跳转等方便编程的功能特别丰富，在程序员中被广泛使用

## 6.2 Vi 和 Vim 常用的三种模式

（1）正常模式：以 Vim 打开一个文档就直接进入一般模式（这就是默认的模式）。在这个模式中，可以使用【上下左右】按键来移动光标，可以使用【删除字符】或【删除整行】来处理文档内容，也可以使用【复制、粘贴】来处理文件数据

（2）插入模式：按下【i、I、o、O、a、A、r、R】等任何一个字母之后才会进入编辑模式，一般来说按 i 即可

（3）命令行模式：在插入模式编辑完代码后，可以按下 esc 后再按下冒号 ： 进入命令行模式，在这个模式中，可以提供你的相关指令，完成读取、存盘、替换、离开 Vim、显示行号等的动作，则是在此模式中达成的

## 6.3 各种模式的相互切换

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503220053322.png)


## 6.4 Vi 和 Vim 快捷键

（1）拷贝当前行用 `yy`，拷贝当前行向下的 5 行用 `5yy`，粘贴用 `p`

（2）删除当前行 `dd`，删除当前行向下的 5 行 `5dd`

（3）在文件中查找某个单词，在命令行下运行，输入 `/关键字` 按下回车进行查找，输入 `n` 就是查找到下一个

（4）设置文件的行号进入需要进入命令行输入 `:set nu`，取消文件的行号输入 `:set nonu`

（5）编辑 `/etc/profile` 文件，在正常模式下使用快捷键到该文档的最末行 `G` 和最首行 `gg`

（6）在一个文件中输入 "hello"，在一般模式下输入 `u` 可以撤销这个动作

（7）编辑 `/etc/profile` 文件时，在一般模式下输入 `20 再输入 shift + g` 可以将光标移动到第 20 行

（8）更多的快捷键看文档

 （9）快捷键图

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503220055323.png)

# 第 7 章 关机、重启和用户登录注销

## 7.1 关机、重启的基本介绍

（1）`shutdown -h now` 立刻进行关机

（2）`shutdown -h 1` 1分钟后关机

（3）`shutdown -r now` 现在重新启动计算机

（4）`halt` 关机，作用和上面一样

（5）`reboot` 现在重新启动计算机

（6）`sync` 把内存的数据同步到磁盘

注意细节：不管是重启系统还是关闭系统，首先要运行 `sync` 命令，把内存中的数据写到磁盘中，目前的 `shutdown/reboot/halt` 等命令均已经在关机前进行了 `sync`，小心驶得万年船

## 7.2 用户登录和注销的基本介绍

（1）登录时尽量少用 root 账号登录，因为它是系统管理员，有最大的权限，避免操作失误，可以利用普通用户登录，登录后再用 `su - 用户名` 命令来切换成系统管理员的身份

（2）在提示符下输入 logout 即可注销用户

注意细节：logout 注销指令在图形运行级别下无效，在运行级别 3 下有效

# 第 8 章 用户管理

## 8.1 基本介绍

Linux 系统是一个多用户多任务的操作系统，任何一个要使用系统资源的用户都必须首先向系统管理员申请一个账号，然后以这个账号的身份进入系统

## 8.2 添加用户

### 8.2.1 基本语法

`useradd 用户名`

### 8.2.2 应用案例

添加一个用户 milan，默认该用户的家目录在 `/home/milan`

### 8.2.3 细节说明

（1）当创建用户成功后，会自动的创建和用户同名的家目录，也可以通过 `useradd -d 你指定的目录` 来创建新的用户名，给新创建的用户指定家目录，例如 `useradd -d /home/test king`

## 8.3 指定/修改密码

### 8.3.1 基本语法

`passwd 用户名`

### 8.3.2 应用案例

给 milan 指定密码 `passwd milan` 输入密码时不会显示，所以是空的，不是卡了

## 8.4 删除用户

### 8.4.1 基本语法

`userdel 用户名`

### 8.4.2 应用案例

（1）删除用户 milan，但是要保留家目录 `userdel milan`

（2）删除用户以及用户主目录，比如 tom `userdel -r tom`

### 8.4.3 细节说明

一般情况下，建议保留家目录

## 8.5 查询用户信息指令

### 8.5.1 基本语法

`id 用户名`

### 8.5.2 应用实例

案例：请查询 root 信息

### 8.5.3 细节说明

当用户不存在时，返回无此用户

## 8.6 切换用户

### 8.6.1 基本介绍

在操作 Linux 中，如果当前用户的权限不够，可以通过 `su - 用户名` 指令切换到高权限用户，比如 root

### 8.6.2 基本语法

`su - 要切换的用户名`

### 8.6.3 应用实例

创建一个用户 jack，指定密码，然后切换到 jack

### 8.6.4 细节说明

（1）从权限高的用户切换到权限低的用户，不需要输入密码，反之需要

（2）当需要返回到原来的用户时，使用 `exit` 或 `logout` 指令

## 8.7 查看当前用户/登录用户

### 8.7.1 基本语法

`who am i`

## 8.8 用户组

### 8.8.1 基本介绍

类似于角色，系统可以对有共性/权限的多个用户进行统一的管理

### 8.8.2 新增组

指令：`groupadd 组名`

案例演示：

### 8.8.3 删除组

指令：`groupdel 组名`

案例演示：

### 8.8.4 增加用户时直接加上组

指令：`useradd -g 用户组 用户名`

案例演示：增加一个用户 zwj，直接将他指定到 wudang，`groupadd wudang` `useradd -g wudang zwj`

### 8.8.5 修改用户的组

指令：`usermod -g 用户组 用户名`

案例演示：创建一个组 mojiao，把 zwj 放入到 mojiao

### 8.8.6 用户和组的相关文件

（1）`/etc/passwd` 文件

用户 user 的配置文件，记录用户的各种信息

每行的含义：用户名：口令：用户标识号：组标识号：注释性描述：主目录：登录 Shell

（2）`/etc/shadow` 文件

口令的配置文件

每行的含义：登录名：加密口令：最后一次修改时间：最小时间间隔：最大时间间隔：警告时间：不活动时间：失效时间：标志

（3）`/etc/group` 文件

组 group 的配置文件，记录 Linux 包含的组的信息

每行的含义：组名：口令：组标识号：组内用户列表

# 第 9 章 实用指令

## 9.1 指定运行级别

### 9.1.1 基本介绍

运行级别说明：

0：关机

1：单用户（找回丢失密码）

2：多用户状态没有网络服务

3：多用户状态有网络服务

4：系统未使用保留给用户

5：图形界面

6：系统重启

常用运行级别是 3 和 5，也可以指定默认运行级别

### 9.1.2 应用实例

命令：`init [0123456]` 应用实例：通过 init 来切换不同的运行级别，比如从 5 到 3，然后关机

### 9.1.3 指定运行级别

在 Centos7 以前，在 /etc/inittab 文件中修改运行级别

Centos7 以后进行了简化，如下：

`multi-user.target:analogous to runlevel 3`

`graphical.target:analogous to runlevle 5`

可以通过以下命令查看当前级别：

`systemctl get-default`

这个指令 `systemctl set-default multi-user.target` 可以将默认的图形化界面 5 切换成级别 3

## 9.2 找回 root 密码

见文档

## 9.3 帮助指令

（1）man 获得帮助信息

基本语法：man 【命令或配置文件】（功能描述：获得帮助信息）

案例：查看 ls 命令的帮助信息

在 Linux 下，隐藏文件是以 . 开头的文件，选项可以组合使用，比如：`ls -al` `ls -al /root`

（2）help 指令

基本语法：help 命令（功能描述：获得 shell 内置命令的帮助信息）

应用案例：查看 cd 命令的帮助信息

## 9.4 文件目录类

### 9.4.1 pwd 指令

基本语法：`pwd` 

功能描述：显示当前工作目录的绝对路径

应用实例：显示当前工作目录的绝对路径

### 9.4.2 ls 指令

基本语法：`ls` 

常用选项：-a：显示当前目录所有的文件和目录，包括隐藏的

-l：以列表的方式显示信息

### 9.4.3 cd 指令

基本语法：`cd`

功能描述：切换到指定目录

理解：绝对路径和相对路径

cd ~ 或者 cd ：回到自己的家目录

cd .. ：回到当前目录的上一级目录

应用实例：

案例1：使用绝对路径切换到 root 目录：`cd /root`

案例2：使用相对路径到 /root 目录，比如在 /home/tom：`cd ../../root`

案例3：表示回到当前目录的上一级目录：`cd ..`

案例4：回到家目录：`cd ~`

### 9.4.4 mkdir 指令

mkdir 指令用于创建目录

基本语法：`mkdir [选项] 要创建的目录`

选项：-p ：创建多级目录

应用实例：案例1：创建一个目录 /home/dog  `mkdir /home/dog`

案例2：创建多级目录 /home/animal/tiger  `mkdir -p /home/animal/tiger`

### 9.4.5 rmdir 指令

rmdir 指令删除空目录

基本语法：`rmdir [选项] 要删除的空目录`

应用实例：删除一个目录 /home/dog

使用细节：rmdir 删除的是空目录，如果目录下有内容是无法删除的，如果需要删除非空目录，需要使用 `rm -rf 要删除的目录`

### 9.4.6 touch 指令

touch 指令用于创建空文件

基本语法：`touch 文件名称`

应用案例：在 /home 目录下，创建一个空文件 hello.txt

### 9.4.7 cp 指令

cp 指令拷贝文件到指定目录

基本语法：`cp [选项] source dest`

选项：-r ：递归复制整个文件夹

应用实例：案例1：将 /home/hello.txt 拷贝到 /home/bbb 目录下  `cp hello.txt /home/bbb`

案例2：递归复制整个文件夹，举例将 /home/bbb 整个目录拷贝到 /opt 下  `cp -r /home/bbb /opt`

使用细节：强制覆盖不提示是否要覆盖的方法：\cp  `\cp -r /home/bbb /opt`

### 9.4.8 rm 指令

说明：rm 指令移除文件或目录

基本语法：`rm [选项] 要删除的文件或目录`

选项：-r ：递归删除整个文件夹

​			-f ：强制删除不提示

应用实例：案例1：将 /home/hello.txt 删除  `rm /home/hello.txt`

​					案例2：递归删除整个文件夹 /home/bbb  `rm -r /home/bbb`

使用细节：强制删除不提示是否确定删除的方法：带上 -f 参数即可 `rm -rf /home/bbb`

### 9.4.9 mv 指令

mv 移动文件或重命名

基本语法：`mv oldNameFile newNameFile` 重命名

​				`mv /temp/movefile /targetFolder` 移动文件

应用实例：

案例1：将 /home/cat.txt 文件重新命名为 pig.txt

案例2：将 /home/pig.txt 文件移动到 /root 目录下

案例3：移动整个目录，比如将 /opt/bbb 移动到 /home 下 `mv /opt/bbb /home/`

### 9.4.10 cat 指令

cat 用于查看文件内容，只能查看不能修改

基本语法：`cat [选项] 要查看的文件`

常用选项：-n：显示行号

应用实例：案例一：/etc/profile 文件内容，并显示行号： `cat -n /etc/profile`

使用细节：cat 只能浏览文件，而不能修改文件，为了浏览方便一般会带上管道命令 | more：`cat -n /etc/profile | more`

### 9.4.11 more 指令

more 指令是一个基于 VI 编辑器的文本过滤器，它以全屏幕的方式按页显示文本文件的内容。more 指令中内置了若干快捷键（交互的指令）

基本语法：`more 要查看的文件`

操作说明：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503220056904.png)

应用实例：采用 more 查看文件 /etc/profile

### 9.4.12 less 指令

less 指令用来分屏查看文件内容，它的功能与 more 指令类似，但是比 more 指令更加强大，支持各种显示终端，less 指令在显示文件内容时，并不是一次将整个文件加载之后才显示，而是根据显示需要加载内容，对于显示大型文件具有较高的效率

基本语法：`less 要查看的文件`

操作说明：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503220056859.png)

应用实例：采用 less 查看一个大文件文件 /opt/杂文.txt

### 9.4.13 echo 指令

echo 输出内容到控制台

基本语法：`echo [选项] [输出内容]`

应用实例：案例一：使用 echo 指令输出环境变量（有环境：`$PATH`、`$HOSTNAME`）：`echo $PATH`

案例二：使用 echo 指令输出 hello，world

### 9.4.14 head 指令

head 用于显示文件的开头部分内容，默认情况下 head 指令显示文件的前 10 行内容

基本语法：`head 文件`（功能描述：查看文件头 10 行内容）

`head -n 5 文件`（功能描述：查看文件头 5 行内容，5 可以是任意行数）

应用实例：查看 /etc/profile 的前面 5 行代码：`head -n 5 /etc/profile`

### 9.4.15 tail 指令

tail 用于输出文件中尾部的内容，默认情况下 tail 指令显示文件的前 10 行内容

基本语法：`tail 文件`（功能描述：查看文件尾 10 行内容）

`tail -n 5 文件`（功能描述：查看文件尾 5 行内容，5 可以是任意行数）

`tail -f 文件`（功能描述：实时追踪该文档的所有更新）

应用实例：

案例1：查看 /etc/profile 最后 5 行的代码：`tail -n 5 /etc/profile`

案例2：实时监控 mydate.txt，看文件有变化时，是否能看到实时追加的 hello,world：`tail -f /home/mydate.txt`

### 9.4.16 > 指令和 >> 指令

`>` 输出重定向和 `>>` 追加

基本语法：

1. `ls -l > 文件` 列表的内容写入文件 a.txt 中（覆盖写）
2. `ls -al >> 文件` 列表的内容追加到文件 aa.txt 的末尾
3. `cat 文件1 > 文件2` 将文件1的内容覆盖到文件2
4. `echo "内容" >> 文件` 追加

应用实例：

案例一：将 /home 目录下的文件列表写入到 /home/info.txt 中：`ls -l /home > /home/info.txt` 如果

案例二：将当前日历信息追加到 /home/mycal 文件中：`cal >> /home/mycal`

### 9.4.17 ln 指令

软链接也称为符号链接，类似于 Windows 里的快捷方式，主要存放了链接其他文件的路径

基本语法：`ln -s [原文件或目录] [软链接名]` 给原文件创建一个软链接

应用实例：

案例一：在 /home 目录下创建一个软链接 myroot，连接到 /root 目录：`ln -s /root /home/myroot`

案例二：删除软链接 myroot：`rm /home/myroot`

细节说明：当我们使用 pwd 指令查看目录时，仍然看到的是软链接所在目录

### 9.4.18 history 指令

查看已经执行过的历史命令，也可以执行历史指令

基本语法：`history` 查看已经执行过的历史命令

应用案例：

案例一：显示所有的历史命令：`history`

案例二：显示最近使用过的 10 个指令：`history 10`

案例三：执行历史编号为 5 的指令：`!5`

## 9.5 时间日期类

### 9.5.1 date 指令 - 显示当前日期

基本语法：`date` 显示当前时间

`date +%Y` 显示当前年份

`date +%m` 显示当前月份

`date +%d` 显示当前是哪一天

`date "+%Y-%m-%d %H:%M:%S"` 显示年月日时分秒

应用案例：

案例一：显示当前时间信息

案例二：显示当前时间年月日

案例三：显示当前时间年月日时分秒

### 9.5.2 date 指令 - 设置日期

基本语法：`date -s 字符串时间`

应用案例：

案例一：设置系统当前时间，比如设置成 2021-11-11 11:22:22：`date -s "2021-11-11 11:22:22"`

### 9.5.3 cal 指令 - 查看日历指令

基本语法：`cal [选项]` 如果不加选项，显示本月日历

应用实例：

案例一：显示当前日历：`cal`

案例二：显示 2020 年日历：`cal 2020`

## 9.6 搜索查找类

### 9.6.1 find 指令

find 指令将从指定目录向下递归的遍历其各个子目录，将满足条件的文件或者目录显示在终端

基本语法：`find [搜索范围] [选项]`

选项说明：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503220056608.png)

应用实例：

案例一：按文件名：根据名称查找 /home 目录下的 hello.txt 文件：`find /home -name hello.txt`

案例二：按拥有者：查找 /opt 目录下，用户名称为 nobody 的文件：`find /opt -user nobody`

案例三：查找整个 Linux 系统下大于 200M 的文件（+n 大于 -n 小于 n 等于，单位有 k，M，G）：`find / -size +200M`

### 9.6.2 locate 指令

locate 指令可以快速定位文件路径，locate 指令利用事先建立的系统中所有文件名称及路径的 locate 数据库实现快速定位给定的文件。locate 指令无需遍历整个文件系统，查询速度较快，为了保证查询结果的准确度，管理员必须定期更新 locate 时刻

基本语法：`locate 搜索文件`

特别说明：由于 locate 指令基于数据库进行查询，所以第一次运行前，必须使用 updatedb 指令创建 locate 数据库

应用实例：

案例一：使用 locate 指令快速定位 hello.txt 文件所在目录：先执行 `updatedb` 再执行 `locate hello.txt`

### 9.6.3 grep 指令和管道符号 |

grep 过滤查找，管道符号 | 表示将前一个命令的处理结果输出传递给后面的命令处理

基本语法：`grep [选项] 查找内容 原文件`

常用选项：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503220056553.png)

应用实例：

案例一：在 hello.txt 文件中，查找 yes 所在行，并且显示行号：写法1：`cat /home/hello.txt | grep "yes"` 写法2：`grep -n "yes" /home/hello.txt`

## 9.7 压缩和解压类

### 9.7.1 gzip/gunzip 指令

gzip 用于压缩文件，gunzip 用于解压文件

基本语法：`gzip 文件` 压缩文件，只能将文件压缩为 *.gz 文件

`gunzip 文件.gz` 解压缩文件命令

应用实例：案例一：gzip 压缩，将 /home 下的 hello.txt 文件进行压缩：`gzip /home/hello.txt`

案例二：gunzip 解压缩，将 /home 下的 hello.txt.gz 文件进行解压缩：`gunzip /home/hello.txt.gz`

### 9.7.2 zip/unzip 指令

zip 用于压缩文件，unzip 用于解压，这个在项目打包发布中很有用

基本语法：`zip [选项] XXX.zip 将要压缩的内容`  压缩文件和目录的命令

`unzip [选项] XXX.zip` 解压缩文件

zip 常用选项：-r：递归压缩，即压缩目录

unzip 常用选项：-d<目录>：指定解压后文件的存放目录

应用实例：

案例一：将 /home 下的所有文件进行压缩成 myhome.zip：`zip -r myhome.zip /home/` 将 home 目录及其包含的文件和子文件夹都压缩

案例二：将 myhome.zip 解压到 /opt/tmp 目录下：先创建 /opt/tmp 目录 `mkdir /opt/tmp` 再解压 `unzip -d /opt/tmp /home/myhome.zip`

### 9.7.3 tar 指令

tar 指令是打包指令，最后打包后的文件是 .tar.gz 的文件

基本语法：`tar [选项] XXX.tar.gz 打包的内容` 打包目录，压缩后的文件格式是 .tar.gz

选项说明：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503220056871.png)

应用实例：

案例一：压缩多个文件，将 /home/pig.txt 和 /home/cat.txt 压缩成 pc.tar.gz：`tar -zcvf pc.tar.gz  /home/pig.txt /home/cat.txt`

案例二：将 /home 的文件夹压缩成 myhome.tar.gz：`tar -zcvf myhome.tar.gz /home/`

案例三：将 pc.tar.gz 解压到当前目录，切换到 /opt/：`tar -zxvf pc.tar.gz`

案例四：将 myhome.tar.gz 解压到 /opt/tmp2 目录下：先 `mkdir /opt/tmp2` 再 `tar -zxvf /home/myhome.tar.gz -C /opt/tmp2`

# 第 10 章 组管理和权限管理

## 10.1 Linux 组基本介绍

在 Linux 中的每个用户必须属于一个组，不能独立于组外，在 Linux 中每个文件有所有者、所在组、其它组的概念

## 10.2 文件/目录所有者

一般为文件的创建者，谁创建了该文件，就自然的成为该文件的所有者

- 查看文件的所有者：
  - 指令：`ls -ahl`

- 修改文件所有者“
  - 指令：`chown 用户名 文件名`
  - 应用实例：使用 root 创建一个文件 apple.txt，然后将其所有者修改成 tom

## 10.3 组的创建

基本指令：`groupadd 组名`

应用实例：创建一个组 monster，创建一个用户 fox，并放入到 monster 组中：首先：`groupadd monster` 其次：`useradd -g monster fox`

## 10.4 文件/目录所在组

当某个用户创建了一个文件后，这个文件的所在组就是该用户所在的组

- 查看文件/目录所在组
  - 基本指令：`ls -ahl`
  - 应用实例：使用 fox 来创建一个文件，看看该文件属于哪个组
- 修改文件所在的组
  - 基本指令：`chgrp 组名 文件名`
  - 应用实例：使用 root 用户创建文件 orange.txt，看看当前这个文件属于哪个组，然后将这个文件所在组修改到 fruit 组：1.`groupadd fruit` 2.`touch orange.txt` 3.`chgrp fruit orange.txt`

## 10.5 其它组

除文件的所有者和所在组的用户外，系统的其它用户都是文件的其它组

## 10.6 改变用户所在组

在添加用户时，可以指定将该用户添加到哪个组中，同样的用 root 的管理权限可以改变某个用户所在的组

- 改变用户所在组：
  - 指令：（1）`usermod -g 新组名 用户名` （2）`usermod -d 目录名 用户名` 改变该用户登录的初识目录【用户需要有进入到该目录的权限】
  - 应用实例：将 zwj 这个用户从原来所在组修改到 wudang 组

## 10.7 权限的基本介绍

### 10.7.1 基本介绍

ls -l 中显示的内容如下：

`-rw-r--r--. 1 root root  107 6月   6 16:33 Hello.java`

0-9 位（-rw-r--r--）说明：

（1）第 0 位确定文件类型【d，-，l，c，b】

- `-` 是普通文件

- l 是链接，相当于 Windows 的快捷方式

- d 是目录，相当于 Windows 的文件夹

- c 是字符设备文件，比如鼠标、键盘

- b 是块设备，比如硬盘

（2）第 1-3 位确定所有者【该文件的所有者】拥有该文件的权限

（3）第 4-6 位确定所属组【同用户组的】拥有该文件的权限

（4）第 7-9 位确定其它用户拥有该文件的权限

### 10.7.2 rwx 权限详解

#### 10.7.2.1 rwx 作用到文件

（1）r 代表可读【read】：可以读取，查看

（2）w 代表可写【write】：可以修改，但是不代表可以删除该文件，删除一个文件的前提条件是对该文件所在的目录有写的权限才能删除该文件

（3）x 代表可执行【execute】：可以被执行

#### 10.7.2.2 rwx 作用到目录

（1）r 代表可读【read】：可以读取，ls 查看目录内容

（2）w 代表可写【write】：可以修改，对目录内进行创建文件+删除文件+重命名目录

（3）x 代表可执行【execute】：可以进入该目录

### 10.7.3 文件及目录权限

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503220056835.png)

### 10.7.4 修改权限 - chmod

基本说明：通过 chmod 指令，可以修改文件或者目录的权限

#### 10.7.4.1 第一种方式：使用 +、-、= 变更权限

- u：所有者、g：所在组、o：其他人、a：所有人【即 u、g、o 的总和】
  - `chmod u=rwx,g=rx,o=x 文件/目录名` 表示给文件/目录的所有者赋予 rwx 的权限，给文件/目录的所在组的用户赋予 rx 的权限，给文件/目录的其他人赋予 x 的权限
  - `chmod o+w 文件/目录名` 表示给文件/目录的其他人赋予 w 的权限
  - `chmod a-x 文件/目录名` 表示给文件/目录的所有人去除 x 的权限

案例演示：

（1）给 abc 文件的所有者读写执行的权限，给所在组读执行的权限，给其他组读执行的权限

`chmod u=rwx,g=rx,o=rx abc`

（2）给 abc 文件的所有者除去执行的权限，增加所在组写的权限

`chmod u-x,g+w abc`

（3）给 abc 文件的所有用户添加读的权限

`chmod a+r abc`

#### 10.7.4.2 第二种方式：通过数字变更权限

r=4 w=2 x=1 rwx=4+2+1=7

`chmod u=rwx,g=rx,o=x 文件/目录名` 相当于 `chmod 751 文件/目录名`

案例演示：

将 /home/abc.txt 文件的权限修改成 rwxr-xr-x，使用数字的方式实现：`chmod 755 /home/abc.txt`

## 10.8 修改文件所有者 - chown

基本介绍：

`chown newowner 文件/目录` 改变所有者

`chown newowner:newgroup 文件/目录` 改变所有者和所在组

如果想将目录里的所有子目录和子文件都修改则加上 -R

案例演示：

（1）将 /home/abc.txt 文件的所有者修改成 jack

`chown jack /home/abc.txt`

（2）将 /home/kkk 目录下的所有的文件和目录的所有者都修改成 jack

`chown -R jack /home/kkk`

## 10.9 修改文件/目录所在组 - chgrp

基本介绍：

`chgrp newgroup 文件/目录` 改变所在组

案例演示：

（1）将 /home/abc.txt 文件的所在组修改成 shaolin

`groupadd shaolin`

`chgrp shaolin /home/abc.txt`

（2）将 /home/kkk 目录下所有的文件和目录的所在组都修改成 shaolin

`chgrp -R shaolin /home/kkk`

## 10.10 实践一 - 警察和土匪游戏

police 组和 bandit 组

警察：jack、jerry

土匪：xh、xq

（1）创建组

`groupadd police`

`groupadd bandit`

（2）创建用户

`useradd -g police jack`

`useradd -g police jerry`

`useradd -g bandit xh`

`useradd -g bandit xq`

（3）jack 创建一个文件，自己可以读写，本组人可以读，其它组没有任何权限

首先登录 jack

`vim jack.txt`

`chmod 640 jack.txt`

（4）jack 修改该文件，让其它组人可以读，本组人可以读写

`chmod o=r,g+w jack.txt`

（5）xh 投靠警察

`usermod -g police xh`

## 10.11 实践二

（1）建立两个组【神仙组 sx，妖怪组 yg】

`groupadd sx`

`groupadd yg`

（2）建立四个用户【唐僧、悟空、八戒、沙僧】

`useradd ts`

`useradd wk`

`useradd bj`

`useradd ss`

（3）设置密码

`passwd ts`

`passwd wk`

`passwd bj`

`passwd ss`

（4）把悟空、八戒放入妖怪，唐僧、沙僧放在神仙

`usermod -g yg wk`

`usermod -g yg bj`

`usermod -g sx ts`

`usermod -g sx ss`

（5）用悟空建立一个文件 monkey.java，该文件要输出 i am monkey

登录悟空

`vim monkey.java`

查看文件权限：`ll`

（6）给八戒一个可以 rw 的权限

`chmod g+w monkey.java`

（7）八戒修改 monkey.java 加入一句话 i am pig

**修改悟空的权限让八戒可以进入到悟空的目录，这样才可以去修改悟空目录下的 monkey.java**

`chmod g+r+w+x wk`

登录八戒

`cd /home/wk`

`vim monkey.java`

（8）唐僧和沙僧对该文件没有权限

（9）把沙僧放入到妖怪组

使用 root 登录

`usermod -g yg ss`

（10）让沙僧修改该文件 monkey.java，加入一句话 我是沙僧，我是妖怪

因为上面已经修改悟空的目录为所在组的用户拥有 rwx 的权限，所以登录沙僧后可以进入到 wk 目录

`cd /home/wk`

`vim monkey.java`

# 第 11 章 定时任务调度

## 11.1 crond 任务调度

### 11.1.1 crontab 进行定时任务的设置

任务调度：是指系统在某个时间执行的特定的命令或程序

任务调度分类：

- 系统工作：有些重要的工作必须周而复始的执行，如病毒扫描等
- 个别用户工作：个别用户可能希望执行某些程序，比如对 MySQL 数据库的备份

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503220056544.png)

基本语法：`crontab [选项]`

常用选项：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503220057214.png)

### 11.1.2 快速入门

设置任务调度文件：/etc/crontab

设置个人任务调度，执行 `crontab -e` 命令

接着输入任务到调度文件，如：`*/1 * * * * ls -l /etc/ > /tmp/to.txt`，意思是每小时的每分钟执行 `ls -l /etc/ > /tmp/to.txt` 命令

参数说明：五个占位符的说明

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503220057735.png)

### 11.1.3 特殊符号的说明

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503220057943.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503220057232.png)

### 11.1.4 应用实例

案例一：每隔 1 分钟，就将当前的日期信息追加到 /tmp/mydate 文件中

`*/1 * * * * date >> /tmp/mydate`

案例二：每隔 1 分钟，将当前日期和日历都追加到 /home/mycal 文件中

（1）`vim /home/my.sh` 写入内容：`date >> /home/mycal` 和 `cal >> /home/mycal`

（2）给 my.sh 增加执行权限 `chmod u+x /home/my.sh`

（3）`crontab -e` 增加 `*/1 * * * * /home/my.sh`

案例三：每天凌晨 2:00 将 MySQL 数据库 testdb 备份到文件中。

（1）`crontab -e`

（2）`0 2 * * * mysqldump -u root -p123456 testdb > /home/db.bak`

### 11.1.5 crond 相关指令

`crontab -r`：终止任务调度

`crontab -l`：列出当前有哪些任务调度

`service crond restart`：重启任务调度

## 11.2 at 定时任务

### 11.2.1 基本介绍

（1）at 命令是一次性定时计划任务，at 的守护进程 atd 会以后台模式运行，检查作业队列来运行

（2）默认情况下，atd 守护进程每 60 秒检查作业队列，有作业时，会检查作业运行时间，如果时间与当前时间匹配，则运行此作业

（3）at 命令是一次性定时计划任务，执行完一个任务后不再执行此任务了

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503220057360.png)

（4）在使用 at 命令时，一定要保证 atd 进程的启动，可以使用相关指令来查看

`ps -ef | grep atd` 可以用于检测 atd 是否在运行

### 11.2.2 at 命令格式

`at [选项] [时间]`

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503220057809.png)

`ctrl + D` 结束 at 命令的输入

### 11.2.3 at 时间定义

at 指定时间的方法：

（1）接受在当天的 hh:mm（小时:分钟）式的时间指定，假如该时间已经过去，那么就放在第二天执行。例如：04:00

（2）使用 midnight（深夜）、noon（中午）、teatime（饮茶时间，一般是下午 4 点）等比较模糊的词语来指定时间

（3）采用 12 小时计时制，即在时间后面加上 AM（上午）或 PM（下午）来说明是上午还是下午

（4）指定命令执行的具体日期，指定格式为 month day（月 日）或 mm/dd/yy（月/日/年）或 dd.mm.yy（日.月.年），指定的日期必须跟在指定时间的后面，例如：04:00 2021-03-1

（5）使用相对计时法，指定格式为：now + count time-units，now 就是当前时间，time-units 是时间单位，这里能够是 minutes（分钟）、hours（小时）、days（天）、weeks（星期）。count 是时间的数量：几天、几小时。例如：now + 5 minutes

（6）直接使用 today（今天）、tomorrow（明天）来指定完成命令的时间

### 11.2.4 应用实例

案例一：2 天后的下午 5 点执行 /bin/ls /home

`at 5pm + 2 days`

`/bin/ls /home`

按两下 `ctrl + D`

案例二：atq 命令来查看系统中没有执行的工作任务

`atq`

案例三：明天 17 点钟输出时间到指定文件内，比如：/root/date100.log

`at 5pm tomorrow`

`date > /root/date100.log`

按两下 `ctrl + D`

案例四：2 分钟后，输出时间到指定文件内，比如：/root/date200.log

`at now + 2 minutes`

`date > /root/date200.log`

按两下 `ctrl + D`

案例五：删除已经设置的任务：`atrm 编号`

`atrm 5`

# 第 12 章 Linux 磁盘分区、挂载

## 12.1 原理介绍

（1）Linux 来说无论有几个分区，分给哪一目录使用，它归根结底就只有一个根目录，一个独立且唯一的文件结构，Linux 中每个分区都是用来组成整个文件系统的一部分

（2）Linux 采用了一种叫挂载的处理方法，它的整个文件系统中包含了一整套的文件和目录，且将一个分区和一个目录联系起来，这时要载入的一个分区将使它的存储空间在一个目录下获得

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503220057820.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503220057546.png)

## 12.2 硬盘说明

（1）Linux 硬盘分 IDE 硬盘和 SCSI 硬盘，目前基本上是 SCSI 硬盘

（2）IDE 硬盘的驱动器标识符为 "hdx~"，其中 "hd" 表明分区所在设备的类型，这里就是指 IDE 硬盘，"x" 为盘号（a 为基本盘、b 为基本从属盘、c 为辅助主盘、d 为辅助从属盘），"~" 代表分区，前四个分区用数字 1 到 4 表示，它们是主分区或扩展分区，从 5 开始就是逻辑分区。例如："hda3" 表示为第一个 IDE 硬盘上的第三个主分区或扩展分区；"hdb2" 表示为第二个 IDE 硬盘上的第二个主分区或扩展分区

（3）对于 SCSI 硬盘则标识为 "sdx~"，SCSI 硬盘是用 "sd" 来表示分区所在设备的类型的，其余则和 IDE 硬盘的表示方法一样

## 12.3 查看所有设备挂载情况

命令：`lsblk` 或者 `lsblk -f`

## 12.4 挂载的案例

以增加一块硬盘为例来熟悉下磁盘的相关指令和深入理解磁盘分区、挂载、卸载的概念

如何增加一块硬盘：具体步骤看笔记第 64 页

- 虚拟机添加硬盘

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503220057268.png)

- 分区

分区命令：`fdisk /dev/sdb`，dev 中是设备文件

开始对 /sdb 分区：

（1）m 显示命令列表

（2）p 显示磁盘分区，同 `fdisk -l`

（3）n 新增分区

（4）d 删除分区

（5）w 写入并退出

说明：开始分区后输入 n 新增分区，然后选择 p，分区类型为主分区。两次回车键默认剩余全部空间，最后输入 w 写入分区并退出，若不保存退出输入 q

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503220057185.png)

- 格式化

格式化磁盘

分区命令：`mkfs -t ext4 /dev/sdb1`，其中 ext4 是分区类型

- 挂载

挂载：将一个分区与一个目录联系起来

先创建需要挂载到的目录：`mkdir newdisk`

挂载：`mount /dev/sdb1 /newdisk/`

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503220057972.png)

如果不想让该分区与该目录再联系，可以卸载：`umount /dev/sdb1` 或者 `umount /newdisk`

**注意：用上述的命令行进行挂载，重启后会失效**

- 设置可以自动挂载

永久挂载：通过修改 /etc/fstab 实现挂载，添加完成后执行 `mount -a` 即可生效

（1）`vim /etc/fstab`

（2）

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503220057024.png)

（3）`mount -a`

## 12.5 磁盘情况查询

### 12.5.1 查询系统整体磁盘使用情况

基本语法：`df -h`

应用实例：查询系统整体磁盘使用情况

### 12.5.2 查询指定目录的磁盘占用情况

基本语法：`du -h /目录`：查询指定目录的磁盘占用情况，默认为当前目录

其中：

- -s：指定目录占用大小汇总
- -h：带计量单位
- -a：含文件
- --max-depth=1：子目录深度
- -c：列出明细的同时，增加汇总值

应用实例：查询 /opt 目录的磁盘占用情况，深度为 1

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503220057364.png)

### 12.5.3 工作实用指令

（1）统计 /opt 文件夹下文件的个数

`ls -l /opt | grep "^-" | wc -l`

（2）统计 /opt 文件夹下目录的个数

`ls -l /opt | grep "^d" | wc -l`

（3）统计 /opt 文件夹下文件的个数，包括子文件夹里的

`ls -lR /opt | grep "^-" | wc -l`

（4）统计 /opt 文件夹下目录的个数，包括子文件夹里的

`ls -lR /opt | grep "^d" | wc -l`

（5）以树状显示目录结构（使用 tree 指令，但是需要下载 `yum install tree`）

`tree /home/`

# 第 13 章 网络配置

## 13.1 Linux 网络配置原理图

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503220057220.png)

## 13.2 查看网络 IP 和网关

### 13.2.1 查看虚拟网络编辑器和修改 IP 地址

### 13.2.2 查看 Windows 环境中的 VMnet8 的网络配置

`ipconfig`

### 13.2.3 查看 Linux 的配置 

`ifconfig`

## 13.3 ping 测试主机之间的网络连通性

### 13.3.1 基本语法

`ping 目的主机` 测试当前服务器是否可以连接目的主机

### 13.3.2 应用实例

测试当前服务器是否可以连接百度：`ping www.baidu.com`

## 13.4 Linux 网络环境配置

### 13.4.1 第一种方法：自动获取

登录后，通过界面来设置自动获取 IP，Linux 启动后会自动获取 IP，缺点是每次自动获取的 IP 地址可能不一样

### 13.4.2 第二种方法：指定 IP

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503220057789.png)

直接修改配置文件来指定 IP 并可以连接到外网

`vim /etc/sysconfig/network-scripts/ifcfg-ens33`

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503220057530.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503220057144.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503220057722.png)

重启网络服务或者重启系统生效

`service network restart` 或者 `reboot`

## 13.5 设置主机名和 hosts 映射

### 13.5.1 设置主机名

（1）为了方便记忆，可以给 Linux 系统设置主机名，也可以根据需要修改主机名

（2）指令 `hostname` 可以查看主机名

（3）修改文件在 /etc/hostname 指定

`vim /etc/hostname`

（4）修改后重启生效

### 13.5.2 设置 hosts 映射

如何通过主机名能够找到（比如 ping）某个 Linux 系统？

- Windows 下：在 C:\Windows\System32\drivers\etc\hosts 文件指定即可
  - 案例：192.168.200.130 zhishu，这样就可以在 Windows 下 ping 到 Linux

- Linux 下：在 /etc/hosts 文件指定
  - 案例：192.168.200.1 ThinkPad-PC，这样就可以在 Linux 下 ping 到 Windows
  - `vim /etc/hosts`

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503220057251.png)

### 13.5.3 主机名解析过程分析（Hosts、DNS）

#### 13.5.3.1 Hosts 是什么

一个文本文件，用来记录 IP 和 Hostname【主机名】的映射关系

#### 13.5.3.2 DNS

DNS 就是 Domain Name System 的缩写，翻译过来就是域名系统，是互联网上作为域名和 IP 地址相互映射的一个分布式数据库

#### 13.5.3.3 应用实例

用户在浏览器输入 www.baidu.com

（1）浏览器先检查浏览器缓存中有没有该域名解析的 IP 地址，有就先调用这个 IP 完成解析，如果没有就检查操作系统的 DNS 解析器缓存，如果有直接返回 IP 完成解析。这两个缓存可以理解为本地解析器缓存

（2）一般来说，当电脑第一次成功访问某一网站后，在一定时间内，浏览器或操作系统会缓存它的 IP 地址【DNS 解析记录】，如在 cmd 窗口中输入：

`ipconfig /displaydns` 用于查看 DNS 域名解析缓存

`ipconfig /flushdns` 用于手动清理 DNS 缓存

（3）如果本地解析器缓存没有找到对应映射，检查系统中 hosts 文件中有没有配置对应的域名 IP 映射，如果有则完成解析并返回

（4）如果本地 DNS 解析器缓存和 hosts 文件中均没有找到对应的 IP，则到域名服务 DNS 进行解析域名

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503220057314.png)

# 第 14 章 进程管理

## 14.1 基本介绍

（1）在 Linux 中，每个执行的程序都称为一个进程，每一个进程都分配一个 ID 号【PID，进程号】

（2）每个进程都可能以两种方式存在：前台和后台：所谓前台进程就是用户目前的屏幕上可以进行操作的，后台进程则是实际在操作但由于屏幕上无法看到通常使用后台方式执行

（3）一般系统的服务都是以后台进程的方式存在，而且都会常驻在系统中，直到关机才结束

## 14.2 显示系统执行的过程

### 14.2.1 基本介绍

ps 命令是用来查看目前系统中有哪些正在执行，以及它们执行的状况，可以不加任何参数

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503220057093.png)

![](https://gitee.com/BKZSZhiShu/pic-bed/raw/master/img/202408311345653.png)

`ps -aux`

### 14.2.2 ps 详解

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503220057247.png)

### 14.2.3 应用实例

要求以全格式显示当前所有的进程，查看进程的父进程。比如查看 sshd 的父进程信息

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503220057049.png)

## 14.3 终止进程 kill 和 killall

### 14.3.1 基本介绍

若是某个进程执行一半需要停止时，或是已消耗了很大的系统资源时，此时可以考虑停止该进程，使用 kill 命令来完成此项任务

### 14.3.2 基本语法

`kill [选项] 进程号` 通过进程号杀死进程

`killall 进程名称` 通过进程名称杀死进程，也支持通配符，这在系统因负载过大而变得很慢时很有用

### 14.3.3 常用选项

-9 表示强迫进程立即停止

### 14.3.4 实践

案例一：踢掉某个非法登录用户

`kill 进程号` 比如：`kill 11421`

案例二：终止远程登录服务 sshd，在适当时候再次重启 sshd 服务

案例三：终止多个 gedit

`killall gedit`

案例四：强制杀掉一个终端

`kill -9 对应的进程号`

## 14.4 查看进程树 pstree

### 14.4.1 基本语法

`pstree [选项]` 可以更加直观的来看进程信息

### 14.4.2 常用选项

-p：显示进程的 PID

-u：显示进程的所属用户

### 14.4.3 应用实例

案例一：以树状的形式显示进程的 PID

`pstree -p`

案例二：以树状的形式显示进程的用户

`pstree -u`

## 14.5 服务管理

### 14.5.1 基本介绍

服务本质就是进程，但是是运行在后台的，通常都会监听某个端口，等待其它程序的请求，比如 MySQLd、sshd、防火墙等，因此我们又称为守护进程，是 Linux 中非常重要的知识点

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503220058152.png)

### 14.5.2 Service 管理指令

（1）`service 服务名 [start | stop | restart | reload | status]`

（2）在 Centos7.0 后很多服务不再使用 Service，而是使用 systemctl，service 指令管理的服务在 /etc/init.d 查看

### 14.5.3 应用案例

使用 service 指令查看、关闭、启动 network，注意要在虚拟系统演示，因为网络连接会关闭

### 14.5.4 查看服务名

方式一：使用 `setup` 就可以看到全部

方式二：使用 `ls -l /etc/init.d` 可以看到 service 指令管理的服务

### 14.5.5 服务的运行级别

Linux 系统有 7 种运行级别：常用的是级别 3 和 5

- 运行级别 0：系统停机状态，系统默认运行级别不能设为 0，否则不能正常启动
- 运行级别 1：单用户工作状态，root 权限，用于系统维护，禁止远程登录
- 运行级别 2：多用户状态【没有 NFS】，不支持网络
- 运行级别 3：完全的多用户状态【有 NFS】，登录后进入控制台命令模式
- 运行级别 4：系统未使用，保留
- 运行级别 5：X11 控制台，登录后进入图形 GUI 模式
- 运行级别 6：系统正常关闭并重启，默认运行级别不能设为 6，否则不能正常启动

开机的流程说明：

开机 -> BIOS -> /boot -> systemd 进程1 -> 运行级别 -> 运行级别对应的服务

### 14.5.6 Centos7 设置运行级别

在 /etc/initab 下

### 14.5.7 chkconfig 指令

#### 14.5.7.1 基本介绍

（1）通过 chkconfig 命令可以给服务的各个运行级别设置自启动/关闭

（2）chkconfig 指令管理的服务在 /etc/init.d 查看

（3）注意 Centos7.0 后，很多服务使用 systemctl 管理

#### 14.5.7.2 chkconfig 基本语法

`chkconfig --list` 查看服务

`chkconfig 服务名 --list`

`chkconfig --level 5 服务名 on/off`

案例：对 network 服务进行各种操作，把 network 在 3 运行级别关闭自启动

`chkconfig --level 3 network off` 关闭

`chkconfig --level 3 network on` 打开

使用细节：chkconfig 重新设置服务后，需要重启生效

### 14.5.8 systemctl 管理指令

#### 14.5.8.1 基本语法

`systemctl [start | stop | restart | status] 服务名`

systemctl 指令管理的服务在 /usr/lib/systemd/system 查看

#### 14.5.8.2 systemctl 设置服务的自启动状态

`systemctl list-unit-files [| grep 服务名]` 查看服务开机启动状态，grep 可以进行过滤

`systemctl enable 服务名` 设置服务开机启动

`systemctl disable 服务名` 关闭服务开机启动

`systemctl is-enabled 服务名` 查询某个服务是否是自启动的

#### 14.5.8.3 应用案例

查看当前防火墙的状况，关闭防火墙和重启防火墙

`systemctl status firewalld`

`systemctl stop firewalld`

`systemctl start firewalld`

#### 14.5.8.4 细节

（1）关闭或者启用防火墙后，立即生效

（2）这种方式只是临时生效，当重启系统后，还是回归以前对服务的设置

（3）如果希望设置某个服务自启动或者关闭永久生效，要使用 `systemctl [enable | disable] 服务名`

### 14.5.9 打开或者关闭指定端口

在真正的生产环境往往需要将防火墙打开，但问题是如果我们把防火墙打开，那么外部请求数据包就不能跟服务器监听端口通讯，这时需要打开指定的端口，比如 80、22、8080等，这个怎么做？

#### 14.5.9.1 firewall 指令

打开端口：`firewall-cmd --permanent --add-port=端口号/协议`

关闭端口：`firewall-cmd --permanent --remove-port=端口号/协议`

重新载入才能生效：`firewall-cmd --reload`

查询端口是否开放：`firewall-cmd --query-port=端口/协议`

#### 14.5.9.2 应用案例

（1）启用防火墙，测试 111 端口是否能 telnet

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503220058038.png)

（2）开放 111 端口

`firewall-cmd --permanent --add-port=111/tcp`，需要 `firewall-cmd --reload`

（3）再次关闭 111 端口

`firewall-cmd --permanent --remove-port=111/tcp`，需要 `firewall-cmd --reload`

## 14.6 动态监控进程

### 14.6.1 基本介绍

top 与 ps 命令很相似，它们都用来显示正在执行的进程，top 与 ps 最大的不同之处在于 top 在执行一段时间可以更新正在运行的进程

基本语法：`top [选项]`

选项说明：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503220058110.png)

### 14.6.2 交互操作说明

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503220058488.png)

应用实例：

案例一：监视特定用户，比如监控 tom 用户

top：输入此命令按回车键查看执行的进程

u：然后输入 u 回车，再输入用户名，即可

案例二：终止指定的进程，比如我们要结束 tom 登录

top：输入此命令按回车键，查看执行的进程

k：然后输入 k 回车，再输入要结束的进程 ID 号

案例三：指定系统状态更新的时间（每隔 10 秒自动更新），默认是 3 秒

`top -d 10`

## 14.7 监控网络状态

### 14.7.1 查看系统网络情况 netstat

基本语法：`netstat [选项]`

选项说明：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503220058609.png)

应用案例：查看服务名为 sshd 的服务的信息

`netstat -anp | grep sshd`

### 14.7.2 检测主机连接命令 ping

ping 是一种网络检测工具，它主要是用来检测远程主机是否正常，或是两部主机间的网线或网卡故障，如：ping 对方的 ip 地址

# 第 15 章 RPM 与 YUM

![image-20240831185815847](https://gitee.com/BKZSZhiShu/pic-bed/raw/master/img/202408311858897.png)

# 第 16 章 搭建 JavaEE 环境

# 第 17 章 Shell 编程

# 第 18 章 Python 开发平台 Ubuntu







# 常用指令

显示当前用户所在目录 `pwd`









