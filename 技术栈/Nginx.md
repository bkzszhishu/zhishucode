# Nginx

# 第 1 章 引出 Nginx

## 1.1 需求 1：访问不同微服务

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222140062.png)

## 1.2 需求 2：轮询访问服务

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222140636.png)

## 1.3 解决方案：Nginx

（1）反向代理：访问不同的微服务

（2）负载均衡：轮询访问服务

（3）动静分离：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222140936.png)

（4）高可用集群：即 Nginx 也是一个集群，不至于一个 Nginx 坏了就导致不能用了

## 1.4 Nginx 在分布式微服务架构的位置

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503221218652.png)


[网络拓扑图-ProcessOn](https://www.processon.com/diagraming/66bb902c40e02f5de802d033)

# 第 2 章 Nginx 基本介绍

## 2.1 Nginx 是什么？能干什么？

是什么：Nginx 是一个高性能的 HTTP 和反向代理 WEB 的服务器

能干什么：反向代理、负载均衡、动静分离

# 第 3 章 Nginx 的核心功能

## 3.1 正向代理

如果我们要访问 www.google.com，但是直接访问的话访问不到，则需要通过代理服务器来访问，这种代理服务就称为正向代理

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222140899.png)

（1）我们明明知道 www.google.com 但是就是访问不到

（2）正向代理服务器可以访问到

（3）所以使用正向代理服务器帮助我们【客户端】来上网，注意帮助的对象是客户端，这种代理就称为正向代理

（4）正向代理同时也隐藏了客户端的信息

（5）正向代理帮助的是客户端，因此可以把客户端 + 正向代理服务视为一个整体

## 3.2 反向代理

客户端将请求发送到代理服务器，由代理服务器去选择目标服务器获取数据后返回给客户端，这种代理方式为反向代理

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222140757.png)

（1）项目设计者不希望客户端直接访问目标 Web 服务器（比如目标 Web 服务器是集群，如果直接访问就会提供多个公网 IP），而是希望提供一个统一的访问 IP，这个是理解反向代理的前提，即为什么要反向代理

（2）反向代理帮助的对象是目标 Web 服务器

（3）当客户端请求到达反向代理服务器后，由反向代理服务来决定如何访问目标 Web 服务器（或者是哪个 Web 服务器），这个过程对客户端是透明的

（4）反向代理服务会暴露公共的 IP，只要能上网就可以访问，但是对于反向代理服务器管理的/代理的 Web 服务器通常是在局域网内，不能直接访问，只能通过反向代理来访问

（5）我们可以将反向代理服务器 + 反向代理服务器代理的 Web 服务器视为一个整体

（6）反向代理会屏蔽内网服务器（也就是它代理的服务器）的信息，并实现负载均衡访问

## 3.3 负载均衡

当客户端向反向代理服务器（比如 Nginx）发出请求，如果 Nginx 代理了多个 Web 服务器（集群），Nginx 会将请求/负载分发到不同的服务器，也就是负载均衡

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222140063.png)

## 3.4 动静分离

为了加快网站的解析速度，可以把动态资源和静态资源由不同的服务器来解析，降低单个服务器的压力

### 3.4.1 传统的项目资源部署

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222140588.png)

### 3.4.2 动静分离项目资源部署

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222140232.png)

# 第 4 章 Nginx 下载&安装&启动

## 4.1 下载

## 4.2 安装

### 4.2.1 安装 Linux，登录 Linux

登录到 Linux，并且保证可以 ping 到外网

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222140245.png)

### 4.2.2 具体安装步骤

（1）切换 yum 镜像源

（2）搭建 gcc 环境

`yum -y install gcc-c++ pcre pcre-devel zlib zlib-devel openssl openssl-devel`

（3）将 nginx-1.20.2.tar.gz 上传到 Linux 的 /opt 目录

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222140910.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222140522.png)

（4）切换到 /opt 目录，解压 nginx-1.20.2.tar.gz

`tar -zxvf nginx-1.20.2.tar.gz`

（5）将解压后的文件放到指定位置

`mv nginx-1.20.2 /usr/local/nginx`

（6）进入文件目录

`cd /usr/local/nginx`

（7）配置 Nginx 路径

`./configure --prefix=/usr/local/nginx --pid-path=/var/run/nginx/nginx.pid --lock-path=/var/lock/nginx.lock --error-log-path=/var/log/nginx/error.log --http-log-path=/var/log/nginx/access.log --with-http_gzip_static_module --http-client-body-temp-path=/var/temp/nginx/client --http-proxy-temp-path=/var/temp/nginx/proxy --http-fastcgi-temp-path=/var/temp/nginx/fastcgi --http-uwsgi-temp-path=/var/temp/nginx/uwsgi --http-scgi-temp-path=/var/temp/nginx/scgi --conf-path=/usr/local/nginx/nginx.conf`

（8）补全 Nginx 配置目录

`mkdir /var/temp/nginx -p`

（9）编译并安装

`make && make install`

（10）测试配置 Nginx 是否正常，当出现 successful 即可

`./sbin/nginx -t`

（11）启动 Nginx

`./sbin/nginx -c nginx.conf`

（12）查看进程/或端口，默认端口是 80

`ps -ef | grep nginx`

（13）启动 Nginx 可能的错误和解决方案

解决 Nginx 启动报错 nginx: [emerg] open() "/var/run/nginx/nginx.pid" failed (2: No such file or directory)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222140833.png)

## 4.3 验证是否安装成功

Nginx 默认监听端口是 80，在虚拟机中的浏览器输入 http://localhost 出现 Welcome to nginx 就成功了

## 4.4 配置防火墙，让 Windows 访问 Nginx

默认情况下 Windows 是不能访问 Nginx 的，因为 Linux 的防火墙默认是关闭 80 端口的，所以 Windows 访问不到

（1）设置开放的端口号

`firewall-cmd --add-port=80/tcp --permanent`

（2）重启防火墙

`firewall-cmd --reload`

（3）测试

Windows 下打开浏览器输入 http://192.168.200.130:80 即可访问，其中 192.168.200.130 是配置的 Linux 的 ip 地址

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222141477.png)

# 第 5 章 Nginx 命令行参数

## 5.1 指令说明

[Command-line parameters (nginx.org)](https://nginx.org/en/docs/switches.html)

## 5.2 使用演示

启动 `/usr/local/nginx/sbin/nginx -c nginx.conf`

停止 `/usr/local/nginx/sbin/nginx -s stop`

重新加载（不需要重启）`/usr/local/nginx/sbin/nginx -s reload`

查看版本 `/usr/local/nginx/sbin/nginx -v`

查看版本、配置参数 `/usr/local/nginx/sbin/nginx -V`

# 第 6 章 nginx.conf 配置文件

## 6.1 基本说明

### 6.1.1 Nginx 的配置文件位置

（1）`安装目录\conf\nginx.conf`

（2）`安装目录\nginx.conf`

这两个文件是一样的

使用 /usr/local/nginx/sbin/nginx 启动 nginx，默认用的是 `安装目录\nginx.conf` 的配置文件

### 6.1.2 作用

完成对 Nginx 的各种配置，包括端口、并发数、重写规则等

### 6.1.3 nginx.conf 的组成

全局块、events 块、http 块

### 6.1.4 nginx.conf 的详细文档

[Nginx配置文件nginx.conf详解](https://blog.csdn.net/liuchang19950703/article/details/110792007)

## 6.2 nginx.conf 讲解

### 6.2.1 nginx.conf 文件的结构

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222141066.png)

### 6.2.2 全局块

#### 6.2.2.1 说明

（1）从配置文件开始到 events 块之间的内容

（2）主要会设置一些影响 nginx 服务器整体运行的配置指令，主要包括配置运行 Nginx 服务器的用户（组）、允许生成 worker process 数，进程 PID 存放路径、日志存放路径和类型以及配置文件的引入等

#### 6.2.2.2 简单分析

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222141246.png)

这是 Nginx 服务器并发处理服务的关键配置，worker_processes 值越大，可以支持的并发处理量也越多，但是会受到硬件、软件等设备的制约

### 6.2.3 events 块

#### 6.2.3.1 说明

events 块涉及的指令主要影响 Nginx 服务器与用户的网络连接

常用的设置包括是否开启对多个 work process 下的网络连接进行序列化，是否允许同时接收多个网络连接，选取哪种事件驱动模型来处理连接请求，每个 work process 可以同时支持的最大连接数等

#### 6.2.3.2 简单分析

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222141522.png)

表示每个 work process 支持的最大连接数为 1024，这部分的配置对 Nginx 的性能影响较大，在实际中应根据实际情况配置

### 6.2.4 http 块

#### 6.2.4.1 说明

这是 Nginx 服务器配置中最复杂的部分，代理、缓存和日志定义等绝大多数功能和第三方模块的配置都在这里

http 块也可以包括 http 全局块、server 块

#### 6.2.4.2 http 全局块

http 全局块配置的指令包括文件引入、MIME-TYPE 定义、日志自定义、连接超时时间、单连接请求数上限等

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222141205.png)

#### 6.2.4.3 server 块

（1）这块和虚拟主机有密切关系，虚拟主机从用户角度看，和一台独立的硬件主机是完全一样的，该技术的产生是为了节省互联网服务器硬件成本

（2）每个 http 块可以包括多个 server 块，而每个 server 块就相当于一个虚拟主机

（3）每个 server 块也分为全局 server 块，以及可以同时包含多个 location 块

​		1）全局 server 块

​		最常见的配置是本虚拟机主机的监听配置和本虚拟主机的名称或 IP 配置

​		2）location 块

​		一个 server 块可以配置多个 location 块

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222141440.png)

（4）这块的主要作用是基于 Nginx 服务器接收到的请求字符串【例如 server_name/uri-string】，对虚拟主机名称【也可以是 IP 别名】之外的字符串【例如前面的 /uri-string】进行匹配，对特定的请求进行处理。比如地址定向、数据缓存和应答控制等功能，还有许多第三方模块的配置也在这里进行

#### 6.2.4.4 实例一：修改端口

`cd /usr/local/nginx/`

`vim nginx.conf`

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222141688.png)

修改之后需要重新加载配置文件，并且让防火墙放开修改好的端口

#### 6.2.4.5 实例二：配置多个 server

# 第 7 章 反向代理

## 7.1 需求说明

在 Windows 的浏览器输入 www.hsp.com，可以访问到 Tomcat，使用 Nginx 反向代理功能完成需求

## 7.2 反向代理配置 - 思路分析

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222141795.png)

## 7.3 实现步骤

（1）安装 JDK，在 8 以上

（2）安装 Tomcat

（3）修改 C:\Windows\System32\drivers\etc\hosts 配置虚拟主机名

（4）修改 `安装目录\nginx.conf`

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222141215.png)

（5）如何查看 nginx.conf 的配置错误

- `-t` 检测默认配置文件
- `-t -c 配置文件` 指定检测配置文件

## 7.4 完成测试

（1）重启或者重新加载 Nginx

（2）Windows 浏览器输入 http://www.hsp.com

## 7.5 注意事项和细节

Nginx 对外提供访问入口，充当反向代理服务器，Tomcat 的端口就无需对外暴露

关闭防火墙的 80 端口：`firewall-cmd --remove-port=80/tcp --permanent`

重新加载防火墙：`firewall-cmd --reload`

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222141080.png)

# 第 8 章 反向代理配置 - Location 实例

## 8.1 需求说明

当访问 `http://www.hspmall.com:10000/product/hi.html` 时返回一个页面；当访问 `http://www.hspmall.com:10000/member/hi.html` 时返回另一个页面

## 8.2 反向代理配置 - 思路分析

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222141316.png)

## 8.3 Location 语法规则

### 8.3.1 Location 语法规则

#### 8.3.1.1 Location 规则

[一文彻底读懂nginx中的location指令 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/137146854)

[Nginx 中 location 块配置详解_nginx location里面嵌location-CSDN博客](https://blog.csdn.net/qq_41993206/article/details/117432516)

[彻底弄懂nginx的location匹配规则 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/459730965)

location 是 Nginx 中的块级指令，location指令的功能是用来匹配不同的 url 请求，进而对请求做不同的处理和响应，这其中较难理解的是多个 location 的匹配顺序

- 约定熟成: []表示里面的参数能省略, <>表示里面的参数不能省略

##### Location 的两种语法

第一种语法分为3个部分, 分别是: `location关键字`+`@name别名(name是自己取的名字)`+`如何处理`, 这个语法很简单, 就是做内部跳转, 这里不讨论了.

```text
location @name { ... }
```

第二种语法分为4个部分, 分别是: `location关键字` + `匹配方式符号(可省略)`+`匹配规则`+`如何处理`, 这个最复杂也是最常用, 我们只讨论这个.

```text
location [ = | ^~ | ~ | ~* ] uri { ... }
```

##### location匹配命令解释

| 参数 | 解释                                                         |
| ---- | ------------------------------------------------------------ |
| 空   | location 后没有参数直接跟着 **标准 URI**，表示前缀匹配，代表跟请求中的 URI 从头开始匹配。 |
| =    | 用于**标准 URI** 前，要求请求字符串与其精准匹配，成功则立即处理，nginx停止搜索其他匹配。 |
| ^~   | 用于**标准 URI** 前，并要求一旦匹配到就会立即处理，不再去匹配其他的那些个正则 URI，一般用来匹配目录 |
| ~    | 用于**正则 URI** 前，表示 URI 包含正则表达式， **区分**大小写 |
| ~*   | 用于**正则 URI** 前， 表示 URI 包含正则表达式， **不区分**大小写 |
| @    | @ 定义一个命名的 location，@ 定义的locaiton名字一般用在内部定向，例如error_page, try_files命令中。它的功能类似于编程中的goto。 |

#### 8.3.1.2 实际常用规则

直接匹配网站根，通过域名访问网站首页比较频繁，使用这个会加速处理。

这里是直接转发给后端应用服务器了，也可以是一个静态首页

第一个必选规则

    location = / {
       proxy_passhttp://tomcat:8080/index
    }

第二个必选规则是处理静态文件请求，这是nginx作为http服务器的强项

有两种配置模式，目录匹配或后缀匹配,任选其一或搭配使用

    location ^~ /static/ {
       # 请求/static/a.txt 将被映射到实际目录文件:/webroot/res/static/a.txt
       root /webroot/res/;
    }
     
    location ~* \.(gif|jpg|jpeg|png|css|js|html|ico)${
       root /webroot/res/;

第三个规则就是通用规则，用来转发动态请求到后端应用服务器

非静态文件请求就默认是动态请求，自己根据实际把握

毕竟目前的一些框架的流行，带.php,.jsp后缀的情况很少了

```html
    location / {
       proxy_pass http://tomcat:8080/
    }
```

具体看链接

### 8.3.2 Nginx 的 Location 解析过程

具体看链接

## 8.4 实现步骤

（1）修改 C:\Windows\System32\drivers\etc\hosts 配置虚拟主机名

配置 192.168.200.130 www.hspmall.com

（2）修改 `安装目录\nginx.conf`

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222141466.png)

（3）在 Linux 的 Tomcat 创建 webapps\product\hi.html

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222141415.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222141401.png)

（4）在 Windows 的 Tomcat 创建 webapps\member\hi.html

D:\Download\Tomcat\Tomcat8.0\webapps\member\hi.html

（5）Linux 防火墙打开 10000 端口

`firewall-cmd --add-port=10000/tcp --permanent`

`firewall-cmd --reload`

（6）保证 Linux 可以访问 Windows Tomcat

关掉 Windows 的防火墙

## 8.5 完成测试

（1）确保启动 Linux 下的 Tomcat

（2）确保启动 Windows 下的 Tomcat

（3）重启或者重新加载 Nginx

（4）Windows 浏览器输入：

http://www.hspmall.com:10000/product/hi.html

http://www.hspmall.com:10000/member/hi.html

# 第 9 章 负载均衡 - 配置实例

## 9.1 需求说明

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222142191.png)

## 9.2 负载均衡配置 - 思路分析

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222142621.png)

## 9.3 负载均衡配置规则

（1）负载均衡就是将负载分摊到不同的服务单元，既保证服务的可用性，又保证响应足够快

（2）Linux 下有 Nginx、LVS、Haproxy 等服务可以提供负载均衡服务，Nginx 提供了几种分配方式：

​		1）轮询【默认】

​		每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器坏掉能自动剔除

​		2）weight

​		weight 代表权重，默认为 1，权重越高被分配的客户端越多

​		3）ip_hash

​		每个请求按访问 IP 的 hash 结果分配，这样每个访客固定访问一个后端服务器，可以解决 Session 的问题

​		4）fair【第三方】

​		按后端服务器的响应时间来分配请求，响应时间短的优先分配

## 9.4 实现步骤

（1）修改 C:\Windows\System32\drivers\etc\hosts 配置虚拟主机名

（2）修改 `Nginx 安装目录\nginx.conf`

进入相应目录：`cd /usr/local/nginx/`

编辑 nginx.conf：`vim nginx.conf`

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222142577.png)

检测：`./sbin/nginx -t`

（3）在 Linux 的 Tomcat8080 创建 `webapps\search\look.html`

进入到 Tomcat 的 webapps 目录下：`cd /opt/tomcat/apache-tomcat-8.5.59/webapps/`

创建 search 目录：`mkdir search`

进入到 search 目录：`cd search/`

创建 look.html：`vim look.html`

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222142609.png)

退出保存

（4）在 Linux 下重新安装一份 Tomcat，并将端口修改成 8081

直接在 /opt/tomcat/ 下复制一份 apache-tomcat-8.5.59 并将其端口改为 8081

- 先修改 look.html 的内容

进入到 tomcat 目录：`cd /opt/tomcat/`

复制 apache-tomcat-8.5.59 并将新的改名为 apache-tomcat-8.5.59new：`cp -rf ./apache-tomcat-8.5.59 ./apache-tomcat-8.5.59new`

进入到 apache-tomcat-8.5.59new 的 webapps 下的 search 目录，修改 look.html：`cd apache-tomcat-8.5.59new/webapps/search/`、`vim look.html`

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222142774.png)

- 修改端口

修改 Tomcat 的 conf\server.xml，注意要修改如下位置，否则该 Tomcat 是不能正常工作的

进入 conf 目录：`cd /opt/tomcat/apache-tomcat-8.5.59new/conf/`

编辑 server.xml：`vim server.xml`

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222142752.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222142772.png)

（5）Linux 防火墙打开 80 端口，保证 Windows 可以访问

查看防火墙都打开了哪些端口：`firewall-cmd --list-all`，查询可知已经开启了 80 端口

## 9.5 完成测试

（1）启动 Linux 下的两个 Tomcat

- 启动两个 Tomcat：

进入到 Tomcat 的 bin 目录：`cd /opt/tomcat/apache-tomcat-8.5.59/bin`

启动 Tomcat：`./startup.sh`

另一个类似

查看启动的端口，确保有 8080 和 8081 端口在监听：`netstat -anp | more`

（2）启动或者重新加载 Nginx

进入到 Nginx 的安装目录：`cd /usr/local/nginx/`

运行 Nginx：`./sbin/nginx -c nginx.conf`

（3）Windows 浏览器输入：http://www.hspcrm.com/search/look.html

## 9.6 注意事项和细节

配置 nginx.conf 的 upstream 的名字不能带下划线，否则会失败

## 9.7 负载均衡切换其它算法

### 9.7.1 Nginx 的 upstream 配置技巧

Nginx 是一个反向代理软件，大部分的网站都采用 Nginx 作为网站/平台的服务器软件，Nginx 除了可以直接作为 Web 服务器使用外，更多的情况是通过反向代理将请求转发给上游服务器，配置上游服务器可以使用 upstream 进行设置，通过 upstream 可以实现服务的负载均衡规则，可以提高服务器的高可用性

[关于Nginx.conf配置之upstream详解 - 念槐聚 - 博客园 (cnblogs.com)](https://www.cnblogs.com/haochuang/articles/16521062.html)

[Nginx的upstream配置技巧 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/409693332)

# 第 10 章 动静分离

## 10.1 什么是动静分离

（1）Nginx 动静分离简单来说就是把动态跟静态请求分开，可以理解成使用 Nginx 处理静态资源，Tomcat 处理动态资源

（2）动静分离可以减轻 Tomcat 的压力，静态请求由 Nginx 处理，提高系统整体性能

## 10.2 需求说明

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222142280.png)

## 10.3 动静分离 - 思路分析

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222142655.png)

## 10.4 使用传统方法将静态资源放在 Tomcat

（1）创建 tomcat\webapps\search\cal.jsp [为了测试方便, 在tomcat2也对应创建一 份]

定位到 search 目录：`cd /opt/tomcat/apache-tomcat-8.5.59/webapps/search`

创建 cal.jsp：`vim cal.jsp`

```html
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
<title>hello, jsp</title>
</head>
<body>
<img src="image/cal.jpg"/>
<h1>JSP, 计算器</h1>
<%
int i = 20;
int j = 70;
int res = i + j;
out.println(i + " + " + j + " = " + res);
%>
</body>
</html>
```

（2）将图片 cal.jpg 放到 tomcat\webapps\search\image 目录 [为了测试方便, 在 tomcat2 也对应创建一份]

定位到 search 目录：`cd /opt/tomcat/apache-tomcat-8.5.59/webapps/search`

创建 image 目录：`mkdir image`

使用 Xftp 传输图片文件，使用 Xftp 将 cal.jsp 和 image 复制到 Tomcat2

（3）浏览器访问 http://www.hspcrm.com/search/cal.jsp

## 10.5 动静分离优化

（1）修改 `Nginx 的安装目录\nginx.conf`

定位到 Nginx 的安装目录：`cd /usr/local/nginx/`

修改 nginx.conf：`vim nginx.conf`

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222142407.png)

（2）创建 /usr/local/nginx/html/search/image 目录，因为图片的路径是 ip + /search/image/

使用 Xftp 工具完成

（3）将 Linux 的两个 Tomcat 的之前创建的 image 目录删除，在 /usr/local/nginx/html/search/image 目录下放入图片

使用 Xftp 工具完成

（4）Linux 防火墙打开 80 端口，保证外网可以访问

## 10.6 完成测试

（1）启动或者重新加载 Nginx

（2）Windows 浏览器输入 http://www.hspcrm.com/search/cal.jsp

（3）如果有 css、js 文件需要动静分离，按照规则配置即可

# 第 11 章 Nginx 的工作机制和参数设置

## 11.1 master-worker 机制

### 11.1.1 master-worker 工作原理图

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222142507.png)

一个 master 可以管理多个 worker

### 11.1.2 master-worker 机制

（1）一个 master process 管理多个 worker process，也就是说 Nginx 采用的是多进程结构而不是多线程结构

（2）当 client 发出请求任务时，master process 会通知管理的 worker process

（3）worker process 开始争抢任务，争抢到的 worker process 会开启连接，完成任务

（4）每个 worker 都是一个独立的进程，每个进程里只有一个主线程

（5）Nginx 采用了 IO 多路复用机制【需要在 Linux 环境】，使用 IO 多路复用机制是 Nginx 在使用为数不多的 worker process 就可以实现高并发的关键

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222142237.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222142112.png)

解读：

（1）Nginx 在启动后会有一个 master 进程和多个相互独立的 worker 进程

（2）Master 进程接收来自外界的信号，向各个 worker 进程发送信号，每个进程都有可能来处理这个连接

（3）Master 进程能监控 Worker 进程的运行状态，当 worker 进程退出后【异常情况下】，会自动启动新的 worker 进程

（4）accept_mutex 解决惊群现象：

​		1）所有子进程都继承了父进程的 sockfd，当连接进来时，所有子进程都将收到通知并争着与它建立连接，这就叫惊群现象

​		2）大量的进程被激活又挂起，只有一个进程可以 accept 到这个连接，会消耗系统资源

​		3）Nginx 提供了一个 accept_mutex，这是一个加在 accept 上的一把共享锁，即每个 worker 进程在执行 accept 之前都需要先获取锁，获取不到就放弃执行 accept，有了这把锁之后，同一时刻就只会有一个进程去 accept，就不会有惊群问题了

​		4）当一个 worker 进程在 accept 这个连接之后，就开始读取请求、解析请求、处理请求，产生数据后，再返回给客户端，最后才断开连接完成一个完整的请求

​		5）一个请求，完全由 worker 进程来处理，而且只能在一个 worker 进程中处理

（5）用多进程结构而不用多线程结构的好处：

​		1）节省锁带来的开销，每个 worker 进程都是独立的进程，不共享资源，不需要加锁，在编程以及问题查找上会方便很多

​		2）独立进程，减少风险，采用独立的进程，可以让互相之间不会影响，一个进程退出后其它进程还在工作，服务不会中断，master 进程则很快重新启动新的 worker 进程

（6）实现高并发的秘密 - IO 多路复用：

​		1）对于 Nginx 来讲，一个进程只有一个主线程，那么它是怎么实现高并发的呢？

​		2）采用了 IO 多路复用的原理，通过异步非阻塞的事件处理机制，epoll 模型，实现了轻量级和高并发

​		3）Nginx 是如何具体实现的呢？举例来说，每进来一个 request，会有一个 worker 进程去处理，但不是全程的处理，处理到什么程度呢？处理到可能发生阻塞的地方，比如向上游【后端】服务器转发 request，并等待请求返回。那么，这个处理的 worker 不会这么傻等着，它会在发送完请求后，注册一个事件：“如果 upstream 返回了，告诉我一声，我再接着干”，于是它就休息去了，此时，如果再有 request 进来，它就可以很快再按这种方式处理，而一旦上游服务器返回了，就会触发这个事件，worker 才会来接手，这个 request 才会接着往下走，由于 web server 的工作性质决定了每个 request 的大部分生命都是在网络传输中，实际上花费在 server 机器上的时间片不多，这就是几个进程就能解决高并发的秘密所在

## 11.2 参数设置

### 11.2.1 worker_processes

- 需要设置多少个 worker：每个 worker 的线程可以把一个 cpu 的性能发挥到极致，所以 worker 数和服务器的 cpu 数相等是最为适宜的，设少了会浪费 cpu，设多了会造成 cpu 频繁切换上下文带来的损耗

- 设置 worker 数量：Nginx 默认没有开启利用多核 cpu，可以通过增加 worker_cpu_affinity 配置参数来充分利用多核 cpu 的性能

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222142461.png)

```java
#2 核 cpu，开启 2 个进程
worker_processes 2;
worker_cpu_affinity 01 10;

#2 核 cpu，开启 4 个进程，
worker_processes 4;
worker_cpu_affinity 01 10 01 10;

#4 核 cpu，开启 2 个进程，0101 表示开启第一个和第三个内核，1010 表示开启第二个和
第四个内核；
worker_processes 2;
worker_cpu_affinity 0101 1010;

#4 个 cpu，开启 4 个进程
worker_processes 4;
worker_cpu_affinity 0001 0010 0100 1000;

#8 核 cpu，开启 8 个进程
worker_processes 8;
worker_cpu_affinity 00000001 00000010 00000100 00001000 00010000 00100000 01000000
10000000;
```

### 11.2.2 worker_connection

（1）worker_connection 表示每个 worker 进程所能建立连接的最大值，所以，一个 Nginx 能建立的最大连接数应该是 worker_connections * worker_processes

​		1）默认：worker_connections：1024

​		2）调大：worker_connections：60000

​		3）同时要根据系统的最大打开文件数来调整

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222142411.png)

（2）根据最大连接数计算最大并发数：如果是支持 http1.1 的浏览器每次访问要占两个连接， 所以普通的静态访问最大并发数是： `worker_connections * worker_processes / 2`，而如果是 HTTP 作为反向代理来说，最大并发数量应该是 `worker_connections * worker_processes / 4`。因为作为反向代理服务器，每个并发会建立与客户端的连接和与后端服务的连接，会占用两个连接

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222143527.png)

### 11.2.3 配置 Linux 最大打开文件数

（1）使用 ulimit -a 可以查看当前系统的所有限制值，使用 ulimit -n 可以查看当前的最大打 开文件数。 

（2）新装的 linux 默认只有 1024，当作负载较大的服务器时，很容易遇到 error: too many open files。因此，需要将其改大。 

（3）使用 `ulimit -n 65535` 可即时修改，但重启后就无效了。(注 `ulimit -SHn 65535` 等效 `ulimit -n 65535`，-S 指 soft，-H 指 hard) 

（4）有如下三种修改方式：

​		1）在 /etc/rc.local 中增加一行 `ulimit -SHn 65535` 

​		2）在 /etc/profile 中增加一行 `ulimit -SHn 65535` 

​		3）在 /etc/security/limits.conf 最后增加如下两行记录 ``* soft nofile 65535` * hard nofile 65535 在 CentOS 中使用第 1 种方式无效果，使用第 3 种方式有效果，而在 Debian 中使用第 2 种 有效果

# 第 12 章 搭建高可用集群

使用 Keepalived + Nginx 搭建高可用集群【主从模式】

## 12.1 集群架构图

（1）准备两台 Nginx 服务器，一台做主服务器，一台做备份服务器

（2）两台 Nginx 服务器的 IP 地址可以自己配置

（3）安装 Keepalived，保证主从之间的通讯

（4）对外提供统一的访问 IP【虚拟 IP-VIP】

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222143471.png)

## 12.2 具体搭建步骤

### 12.2.1 搭建高可用集群基础环境

（1）准备两台 Linux 服务器 192.168.198.130 和 192.168.198.131 可以克隆来完成也可以直接拷贝一份

（2）在两台 Linux 服务器, 安装并配置好 Nginx，安装配置 Nginx 步骤前面讲过，如果是克隆的 Linux，本身就有安装好了 Nginx，直接使用即可；验证安装是否成功，在 windows 可以通过 IP 访问到 Nginx，因为我们是拷贝了一份 Linux，而新的 Linux 的 Ip 已经变化了，所以需要克隆的 Linux 的 nginx.conf 文件中的 IP 地址做相应的修改

（3）在两台 Linux 服务器安装 Keepalived，当主 Nginx 坏掉后 Keepalived 会转换到从 Nginx

（4）上传到两台 Linux /root 目录下使用 mkdir /root/keepalived 创建目录，解压文件到指定目录: tar -zxvf keepalived-2.0.20.tar.gz -C ./keepalived，cd /root/keepalived/keepalived-2.0.20， ./configure --sysconf=/etc --prefix=/usr/local

（5）说明: 将配置文件放在 /etc 目录下, 安装路径在 /usr/local

（6）make && make install 说明: 编译并安装

（7）如果成功, 就会安装好 keepalived，说明: keepalived 的配置目录在 /etc/keepalived/keepalived.conf，keepalived 的启动指令在 /usr/local/sbin/keepalived

（8）两台 Linux 都要安装 keepalive

### 12.2.2 完成高可用集群配置

（1）将其中一台 Linux（比如 192.168.198.130）指定为 Master：vi /etc/keepalived/keepalived.conf

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222143809.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222143233.png)

（2）将其中一台 Linux（比如 192.168.198.138）指定为 Backup（备份服务器）：vi /etc/keepalived/keepalived.conf

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222143863.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222143332.png)

（3）启动两台 Linux 的 Keepalived，指令：/usr/local/sbin/keepalived

（4）观察两台 Linux 的 ens33 是否已经绑定 192.168.198.18

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222143291.png)

## 12.3 测试

（1）首先保证 windows 可以连通 192.168.198.18 这个虚拟 IP

（2）访问 nginx，说明：大家可以看到, 因为 192.168.198.130 是 Master 他的优先级高, 所以访问的就是 192.168.198.130 的 Nginx, 同时仍然是支持负载均衡的

（3）停止 192.168.198.130 的 keepalived 服务, 否则直接关闭 192.168.198.130 主机 , 再次访问 http://192.168.198.18/search/cal.jsp , 这时虚拟 IP 绑定发生漂移, 绑定到 192.168.198.131 Backup 服务

## 12.4 自动检测 Nginx 异常，终止 Keepalived

（1）编写 shell 脚本: vi /etc/keepalived/ch_nginx.sh 

简单说明: 下面的脚本就是去统计 ps -C nginx --no-header 的行数, 如果为 0 , 说明 nginx 已经异常终止了, 就执行 killall keepalived 

```shell
#!/bin/bash 
num=`ps -C nginx --no-header | wc -l` 
if [ $num -eq 0 ];then 
killall keepalived 
fi
```

（2）修改 ch_nginx.sh 权限 

chmod 755 ch_nginx.sh

（3）修改 192.168.198.130 主 Master 配置文件, 指令: vi /etc/keepalived/keepalived.conf

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222143940.png)

（4）重新启动 192.168.198.130 Master 的 keepalived , 这时因为 Master 的优先级高，会争夺到 VIP 优先绑定

（5）手动关闭 192.168.198.130 Master 的 Nginx

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222143755.png)

注意观察 keepalived 也终止了

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222143177.png)

（6）再次访问 nginx , 发现 192.168.198.18 这个虚拟 IP 又和 192.168.198.131 备份服务器绑定了

## 12.5 配置文件 - keepalived.conf 详解

```
#这里只注释要修改的地方
global_defs {
	notification_email {
		test@foxmail.com #接收通知的邮件地址
	}
	notification_email_from Alexandre.Cassen@firewall.loc #发送邮件的邮箱
	smtp_server 192.168.200.1 #smtp server 地址
	smtp_connect_timeout 30
	router_id Node132 #Node132 为主机标识
	vrrp_skip_check_adv_addr
	#vrrp_strict #这里需要注释，避免虚拟 ip 无法 ping 通
	vrrp_garp_interval 0
	vrrp_gna_interval 0
}
vrrp_instance VI_1 {
	state MASTER #主节点 MASTER 备用节点为 BACKUP
	interface ens33 #网卡名称
	virtual_router_id 51 #VRRP 组名，两个节点的设置必须一样，指明属于同一 VRRP 组
	priority 100 #主节点的优先级（1-254 之间），备用节点必须比主节点优先级低
	advert_int 1 #组播信息发送间隔，两个节点设置必须一样
	authentication { #设置验证信息，两个节点必须一致
		auth_type PASS
		auth_pass 1111
	}
	virtual_ipaddress { #指定虚拟 IP, 两个节点设置必须一样
		192.168.200.16
	}
}
```

