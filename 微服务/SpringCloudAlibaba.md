# SpringCloudAlibaba

https://b11et3un53m.feishu.cn/wiki/FYNkwb1i6i0qwCk7lF2caEq5nRe

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412291825288.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412291829791.png)

# 第 1 章 MyBatisPlus

## 1.1 入门

### 1.1.1 入门案例

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412291921251.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412291921188.png)

### 1.1.2 常见注解

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412291914873.png)

MyBatisPlus 中比较常用的几个注解如下：

- @TableName：用来指定表名
- @TableId：用来指定表中的主键字段信息
- @TableField：用来指定表中的普通字段信息

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412291926194.png)

### 1.1.3 常见配置

MyBatisPlus 的配置项继承了 MyBatis 原生配置和一些自己特有的配置，例如：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412291935756.png)

## 1.2 核心功能

### 1.2.1 条件构造器

MyBatisPlus 支持各种复杂的 where 条件，可以满足日常开发的所有需求

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412291950593.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412301055902.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412301055003.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412301056317.png)

#### 1.2.1.1 基于 QueryWrapper 的查询

需求：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412301059372.png)

（1）查询出名字中带 o 的，存款大于等于 1000 元的人的 id、username、info、balance 字段

```java
select id,username,info,balance from user where username like ? and balance >= ?
```

```java
void testQueryWrapper() {
    // 1. 构建查询条件
    QueryWrapper<User> wrapper = new QueryWrapper<User>()
        .select("id", "username", "info", "balance") //指定 select 哪些字段
        .like("username", "o") //指定模糊查询
        .ge("balance", 1000); //指定大于等于
    // 2. 查询
    List<User> users = userMapper.selectList(wrapper);
    users.forEach(System.out::println);
}
```

```java
void testLambdaQueryWrapper() {
    // 1. 构建查询条件
    LambdaQueryWrapper<User> wrapper = new LambdaQueryWrapper<User>()
        .select(User::getId, User::getUsername, User::getInfo, User::getBalance)
        .like(User::getUsername, "o")
        .ge(User::getBalance, 1000);
    // 2. 查询
    List<User> users = userMapper.selectList(wrapper);
    users.forEach(System.out::println);
}
```

（2）更新用户名为 jack 的用户的余额为 2000

```java
update user set balance = 2000 where (username = "jack")
```

```java
void testUpdateByQueryWrapper(){
    // 1. 要更新的数据
    User user = new User();
    user.setBalance(2000);
    // 2. 更新的条件
    QueryWrapper<User> wrapper = new QueryWrapper<User>()
        .eq("username", "jack");
    // 3. 执行更新
    userMapper.update(user, wrapper);
}
```

（3）更新 id 为 1,2,4 的用户的余额，扣 200

```java
update user set balance = balance - 200 where id in (1,2,4);
```

```java
void testUpdateWrapper() {
    List<Long> ids = List.of(1L, 2L, 4L);
    UpdateWrapper<User> wrapper = new UpdateWrapper<User>()
        .setSql("balance = balance - 200")
        .in("id", ids);
    userMapper.update(null, wrapper);
}
```

条件构造器的用法：

- QueryWrapper 和 LambdaQueryWrapper 通常用来构建 select、delete、update 的 where 条件部分
- UpdateWrapper 和 LambdaUpdateWrapper 通常只有在 set 语句比较特殊才使用
- 尽量使用 LambdaQueryWrapper 和 LambdaUpdateWrapper，避免硬编码

### 1.2.2 自定义 SQL

我们可以利用 MyBatisPlus 的 Wrapper 来构建复杂的 where 条件，然后自己定义 SQL 语句中剩下的部分

（1）将 id 在指定范围的用户（例如1、2、4）的余额扣减指定值

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412301140693.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412301143789.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202412301145492.png)

### 1.2.3 Service 接口

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501041523223.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501041535823.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501041601710.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501041613100.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501041614851.png)

## 1.3 扩展功能

### 1.3.1 代码生成

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501041619767.png)

### 1.3.2 静态工具

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501041630456.png)

当 UserService 要查询当前用户的地址信息，就要到 address 表中查询，这样UserService 就要调用 AddressService 的方法，那么就要注入 AddressService，如果用静态工具的话就不用注入了

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501041637840.png)

当出现 Service 相互注入时可以使用静态工具

### 1.3.3 逻辑删除

逻辑删除就是基于代码逻辑模拟删除效果，但并不会真正删除数据，思路如下：

- 在表中添加一个字段标记数据是否被删除
- 当删除数据时把标记置为 1
- 查询时只查询标记为 0 的数据

例如逻辑删除字段为 deleted 的记录：

- 删除操作：`update user set deleted = 1 where id = 1 and deleted = 0`
- 查询操作：`select * from user where deleted = 0`

MyBatisPlus 提供了逻辑删除功能，无需改变方法调用的方式，而是在底层帮我们自动修改 CRUD 的语句，我们要做的就是在 application.yaml 文件中配置逻辑删除的字段名称和值即可：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501041815910.png)

注意：逻辑删除本身也有自己的问题，比如：

- 会导致数据库表垃圾数据越来越多，影响查询效率
- SQL 中全都需要对逻辑删除字段做判断，影响查询效率
- 不太推荐采用逻辑删除功能，如果数据不能删除，可以采用把数据迁移到其它表的办法

### 1.3.4 枚举处理器

User 类中有一个用户状态字段：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501041829673.png)

在 application.yml 中配置全局枚举处理器：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501041830151.png)

总结：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501041834700.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501041835628.png)

@JsonValue 注解的作用是告诉 SpringMVC 的消息转换器把 desc 的值返回给前端

### 1.3.5 JSON 处理器

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501041843106.png)

## 1.4 插件功能

MyBatisPlus 提供的内置拦截器有下面这些：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501041849226.png)

### 1.4.1 分页插件

首先，要在配置类中注册 MyBatisPlus 的核心插件，同时添加分页插件：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501041853830.png)

接着，就可以使用分页的 API 了：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501041858821.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501041900483.png)

### 1.4.2 通用分页实体

# 第 2 章 Docker 快速构建、运行、管理应用的工具

## 2.1 快速入门

### 2.1.1 部署 MySQL

### 2.1.2 镜像和容器

当我们利用 Docker 安装应用时，Docker 会自动搜索并下载应用镜像（image）。镜像不仅包含应用本身，还包含应用运行所需要的环境、配置、系统函数库。Docker 会在运行镜像时创建一个隔离环境，称为容器

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501042136452.png)

### 2.1.3 命令解读

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501042142147.png)

其中的 `-p 3306:3306`，前面的 3306 是宿主机即主机的端口号不可以重复，后面的 3306 是容器内部的 3306 可以重复，因为容器是相互独立的

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501042144887.png)

## 2.2 Docker 基础

### 2.2.1 常见命令

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501042150853.png)

### 2.2.2 数据卷

案例一：利用 Nginx 容器部署静态资源，通过数据卷挂载

需求：

- 创建 Nginx 容器，修改 Nginx 容器内的 html 目录下的 index.html 文件，查看变化
- 将静态资源部署到 Nginx 的 html 目录

如果直接进入 Nginx 的容器去操作 Nginx 的目录会非常麻烦，这时可以利用数据卷

数据卷是一个虚拟目录，是容器内目录与宿主机目录之间映射的桥梁

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501042212145.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501042217341.png)

注意：

- 在执行 docker run 命令时，使用 `-v 数据卷 : 容器内目录` 可以完成数据卷挂载
- 当创建容器时，如果挂载了数据卷且数据卷不存在，会自动创建数据卷

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501042234773.png)

总结：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501042239582.png)

案例2 - MySQL 容器的数据挂载，直接与本地目录挂载

需求：

- 查看 MySQL 容器，判断是否有数据卷挂载
- 基于宿主机目录实现 MySQL 数据目录、配置文件、初始化脚本的挂载

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501042252253.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501042246457.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501042255829.png)

### 2.2.3 自定义镜像

镜像就是包含了应用程序、程序运行的系统函数库、运行配置等文件的文件包。构建镜像的过程其实就是把上述文件打包的过程

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501042301720.png)

#### 2.2.3.1 镜像结构

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501042305427.png)

#### 2.2.3.2 Dockerfile

Dockerfile 就是一个文本文件，其中包含一个个的指令，用指令来说明要执行什么操作来构建镜像，将来 Docker 可以根据 Dockerfile 帮我们构建镜像，常见指令如下：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501042310295.png)

我们可以基于 Ubuntu 基础镜像，利用 Dockerfile 描述镜像结构，也可以直接基于 JDK 为基础镜像，省略前面的步骤：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501042314190.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501042316994.png)

开始制作镜像：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501042320900.png)

### 2.2.4 容器网络

默认情况下，所有容器都是以 bridge 方式连接到 Docker 的一个虚拟网桥上：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501051507455.png)

docker0 是安装 Docker 时 Docker 自动创建的网卡，在创建容器时，容器会加入该网卡，也叫网桥，这样在同一个网桥内的容器就可以互相访问，但是创建容器时的 ip 是自动给的，如果不固定的话每次都是不一样的，所以可以自定义网络

加入自定义网络的容器才可以通过容器名互相访问，Docker 的网络操作命令如下：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501051553897.png)

## 2.3 项目部署

### 2.3.1 部署前端

### 2.3.2 部署 Java

### 2.3.3 DockerCompose

Docker Compose 通过一个单独的 docker-compose.yml 模版文件（YAML 格式）来定义一组相关联的应用容器，帮助我们实现多个相互关联的 Docker 容器的快速部署

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501051625964.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501051627531.png)

docker compose 的命令格式如下：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202501051634841.png)

# 第 3 章 微服务

## 3.1 认识微服务

### 3.1.1 单体架构

单体架构：将业务的所有功能集中在一个项目中开发，打成一个包部署

优点：

- 架构简单
- 部署成本低

缺点：

- 团队协作成本高
- 系统发布效率低
- 系统可用性差

总结：单体架构适合开发功能相对简单，规模较小的项目

### 3.1.2 微服务

微服务架构是服务化思想指导下的一套最佳实践架构方案，服务化，就是把单体架构中的功能模块拆分为多个独立项目

- 粒度小
- 团队自治
- 服务自治

### 3.1.3 SpringCloud

SpringCloud 是目前使用最广泛的微服务框架，SpringCloud 集成了各种微服务功能组件，并基于 SpringBoot 实现了这些组件的自动装配，从而提供了良好的开箱即用体验

## 3.2 微服务拆分

### 3.2.1 服务拆分原则

从拆分目标来说，要做到：

- 高内聚：每个微服务的职责要尽量单一，包含的业务相互关联度高、完整度高
- 低耦合：每个微服务的功能要相对独立，尽量减少对其它微服务的依赖

从拆分方式来说，一般包含两种方式：

- 纵向拆分：按照业务模块来拆分
- 横向拆分：抽取公共服务，提高复用性

### 3.2.2 拆分服务

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502051947273.png)

工程结构有两种：

- 独立 Project

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502051950080.png)

- Maven 聚合

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502051952966.png)

### 3.2.3 远程调用

把商品模块和购物车模块拆分成两个微服务后，因为购物车模块要用到商品模块的代码，所以需要让购物车模块去远程调用商品模块，即购物车模块向商品模块发送 http 请求，商品模块响应回数据

Spring 给我们提供了一个 RestTemplate 工具，可以方便的实现 Http 请求的发送，使用步骤如下：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502061732430.png)

## 3.3 服务治理

### 3.3.1 服务远程调用时存在的问题

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502061749000.png)

前面 cart-service 调用 item-service 时的 url 是写死的，当有多个 item-service 时该怎么办？

### 3.3.2 注册中心原理

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502061811367.png)

- 服务提供者：暴露服务接口，供其它服务调用
- 服务消费者：调用其它服务提供的接口
- 注册中心：记录并监控微服务各实例的状态，推送服务变更信息

服务提供者会在启动时注册自己的信息到注册中心，消费者可以从注册中心订阅和拉取服务信息

服务提供者通过心跳机制向注册中心报告自己的健康状态，当心跳异常时注册中心会将异常服务剔除，并通知订阅了该服务的消费者

消费者可以通过负载均衡算法从多个实例中选择一个

### 3.3.3 Nacos 注册中心
安装见笔记

### 3.3.4 服务注册

服务注册步骤如下：

1. 引入 nacos discovery 依赖

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502061828949.png)

2. 配置 Nacos 地址

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502061829072.png)

### 3.3.5 服务发现

消费者需要连接 Nacos 以拉取和订阅服务，因此服务发现的前两步与服务注册是一样的，后面再加上服务调用即可：

1. 引入 nacos discovery 依赖
2. 配置 nacos 地址
3. 服务发现

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502061839262.png)

## 3.4 OpenFeign

### 3.4.1 快速入门

OpenFeign 是一个声明式的 http 客户端，其作用就是基于 SpringMVC 的常见注解帮我们优雅的实现 http 请求的发送

没用 OpenFeign 的问题：每有要调用跨服务的代码就要写这么多代码，OpenFeign 可以简化

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502061857326.png)

OpenFeign 已经被 SpringCloud 自动装配，实现起来非常简单：

1. 引入依赖，包括 OpenFeign 和负载均衡组件 SpringCloudLoadBalancer

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502061900035.png)

2. 通过 @EnableFeignClients 注解启用 OpenFeign 功能

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502061901195.png)

3. 编写 FeignClient，其中的注解是基于 SpringMVC 的

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502061905872.png)

4. 使用 FeignClient，实现远程调用

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502061906003.png)

这样就完成了请求调用

### 3.4.2 连接池

OpenFeign 整合 OKHttp 连接池的步骤如下：

1. 引入依赖

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502071920138.png)

2. 开启连接池功能

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502131455778.png)

### 3.4.3 最佳实践

方案一：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502131505592.png)

car-service 和 order-service 都需要调用 item-service，传统的方法是分别在 car-service 和 order-service 中编写 OpenFeign 的接口来发送请求，那么这样十分臃肿，改进的方法是直接在 item-service 项目中添加三个模块 item-dto（放 DTO 实体类）、item-api（放实现的请求接口）、item-biz（放 item-service 原本的业务代码），这个方案在代码结构上是合理的，但是项目结构上会很复杂

方案二：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502131517170.png)

修改代码后，cart -service 就可以调用到 ItemClient 来向 item-service 发送请求，这里当重启 cart-service 的启动类时会报错，错误是找不到 ItemClient，原因是当启动 cart-service 的启动类时默认扫描当前启动类所在的包下的代码，但是 ItemClient 不在该包下，所以 ItemClient 没有被加载到，所以在注入 ItemClient 时就会报错

解决方法：

当定义的 FeignClient 不在 SpringBootApplication 的扫描包范围时，这些 FeignClient 无法使用，有两种方式解决：

方式一：指定 FeignClient 所在包

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502131523740.png)

方式二：指定 FeignClient 字节码

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502131523721.png)

### 3.4.4 日志

OpenFeign 只会在 FeignClient 所在包的日志级别为 DEBUG 时才会输出日志，而且其日志级别有 4 级：

- NONE：不记录任何日志信息，这是默认值
- BASIC：仅记录请求的方法，URL 以及响应状态码和执行时间
- HEADERS：在 BASIC 的基础上，额外记录了请求和响应的头信息
- FULL：记录所有请求和响应的明细，包括头信息、请求体、元数据

要自定义日志级别需要声明一个类型为 Logger.Level 的 Bean，在其中定义日志级别：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502131541657.png)

但此时这个 Bean 并未生效，要想配置某个 FeignClient 的日志，可以在 @FeignClient 注解中声明：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502131542973.png)

如果想要全局配置，让所有 FeignClient 都按照这个日志配置，则需要在 @EnableFeignClients 注解中声明：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502131543458.png)

## 3.5 网关

网关就是网络的关口，负责请求的路由、转发、身份校验

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502131738881.png)

### 3.5.1 网关路由

前端向网关发送请求，网关根据请求判断应该由哪个微服务进行处理，这个判断的过程叫路由；判断好由哪个微服务进行处理后网关从注册中心拉取服务实例列表，负载均衡后选取一个实例，将请求发送到该实例，这个过程叫请求转发

#### 3.5.1.1 路由配置规则

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502131746762.png)

#### 3.5.1.2 路由属性

网关路由对应的 Java 类型是 RouteDefinition，其中常见的属性有：

- id：路由唯一标识
- uri：路由目标地址
- predicates：路由断言，判断请求是否符合当前路由
- filters：路由过滤器，对请求或响应做特殊处理

#### 3.5.1.3 路由断言

Spring 提供了 12 种基本的 RoutePredicateFactory 实现：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502131807108.png)

#### 3.5.1.4 路由过滤器

网关中提供了 33 种路由过滤器，每种过滤器都有独特的作用

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502131822571.png)

### 3.5.2 网关登录校验

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502140040835.png)

那么如何在网关转发之前做登录校验？

网关如何将用户信息传递给微服务？

如何在微服务之间传递用户信息？

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502140047509.png)

#### 3.5.2.1 网关请求处理流程

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502140044415.png)

#### 3.5.2.2 自定义过滤器

网关过滤器有两种，分别是：

- GatewayFilter：路由过滤器，作用于任意指定的路由；默认不生效，要配置到路由后生效
- GlobalFilter：全局过滤器，作用范围是所有路由；声明后自动生效

两种过滤器的过滤方法签名完全一致：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502140051131.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502140053241.png)

自定义 GlobalFilter，优先级要比 NettyRoutingFilter 高

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502140058139.png)

#### 3.5.2.3 实现登录校验



#### 3.5.2.4 网关传递用户

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502140117558.png)

网关做完登录校验后将用户信息保存到请求头中向微服务发送请求，这样微服务就可以从请求头中获取用户信息，但是如果每一个微服务都要写获取用户信息的代码就很麻烦，所以直接用拦截器获取到用户的信息后存放到 ThreadLocal 中，这样每个微服务就可以直接在 ThreadLocal 中取数据

第一步：在网关的登录校验过滤器中，把获取到的用户写入请求头

需求：修改 gateway 模块中的登录校验拦截器，在校验成功后保存用户到下游请求的请求头中

提示：要修改转发到微服务的请求，需要用到 ServerWebExchange 类提供的 API

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502140123102.png)

第二步：在 hm-common 中编写 SpringMVC 拦截器，获取登录用户

需求：由于每个微服务都可能有获取登录用户的需求，因此我们直接在 hm-common 模块定义拦截器，这样微服务只需要引入依赖即可生效，无需重复编写

#### 3.5.2.5 OpenFeign 传递用户

微服务项目中的很多业务要多个微服务共同合作完成，而这个过程中也需要传递登录用户信息，例如：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502141735309.png)

OpenFeign 中提供了一个拦截器接口，所有由 OpenFeign 发起的请求都会先调用拦截器处理请求：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502141737505.png)

其中的 RequestTemplate 类中提供了一些方法可以让我们修改请求头：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502141738638.png)

#### 3.5.2.6 微服务登录解决方案

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502141747437.png)

## 3.6 配置管理

- 微服务重复配置过多，维护成本高
- 业务配置经常变动，每次修改都要重启服务
- 网关路由配置写死，如果变更要重启网关

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502141751216.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502141753645.png)

### 3.6.1 配置共享

#### 3.6.1.1 添加配置到 Nacos

添加一些共享配置到 Nacos 中，包括：Jdbc、MyBatisPlus、日志、Swagger、OpenFeign 等配置

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502141821404.png)

#### 3.6.1.2 拉取共享配置

基于 NacosConfig 拉取共享配置代替微服务的本地配置

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502141824158.png)

1. 引入依赖

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502141826180.png)

2. 新建 bootstrap.yaml

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502141827010.png)

### 3.6.2 配置热更新

配置热更新：当修改配置文件中的配置时，微服务无需重启即可使配置生效

前提条件：

1. nacos 中要有一个与微服务名有关的配置文件

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502141918037.png)

2. 微服务中要以特定方式读取需要热更新的配置属性

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502141919346.png)

### 3.6.3 动态路由

要实现动态路由首先要将路由配置保存到 Nacos，当 Nacos 中的路由配置变更时，推送最新配置到网关，实时更新网关中的路由信息

我们需要完成两件事情：

1. 监听 Nacos 配置变更的消息
2. 当配置变更时，将最新的路由信息更新到网关路由表

#### todo 71

## 3.7 服务保护

### 3.7.1 雪崩问题

微服务调用链路中的某个服务故障，引起整个链路中的所有微服务都不可用，这就是雪崩

雪崩问题产生的原因是什么？

- 微服务相互调用，服务提供者出现故障或阻塞
- 服务调用者没有做好异常处理，导致自身故障
- 调用链中的所有服务级联失败，导致整个集群故障

解决问题的思路有哪些？

- 尽量避免服务出现故障或阻塞
  - 保证代码的健壮性
  - 保证网络畅通
  - 能应对较高的并发请求
- 服务调用者做好远程调用异常的后备方案，避免故障扩散

### 3.7.2 解决方案

#### 3.7.2.1 请求限流

限制访问微服务的请求的并发量，避免服务因流量激增出现故障

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502241113177.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502241113662.png)

#### 3.7.2.2 线程隔离

线程隔离也叫做舱壁模式，模拟船舱隔板的防水原理，通过限定每个业务能使用的线程数量而将故障业务隔离，避免故障扩散

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502241119076.png)

#### 3.7.2.3 服务熔断

服务熔断指由断路器统计请求的异常比例或慢调用比例，如果超出阈值则会熔断该业务，则拦截该接口的请求，熔断期间，所有请求快速失败，全都走 fallback 逻辑

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502241124289.png)

#### 3.7.2.4 总结

- 请求限流：限制流量在服务可以处理的范围，避免因突发流量而故障
- 线程隔离：控制业务可用的线程数量，将故障隔离在一定范围
- 服务熔断：将异常比例过高的接口断开，拒绝所有请求，直接走 fallback
- 失败处理：定义 fallback 逻辑，让业务失败时不再抛出异常，而是返回默认数据或友好提示

### 3.7.3 服务保护技术

|          | Sentinel                                       | Hystrix                      |
| -------- | ---------------------------------------------- | ---------------------------- |
| 线程隔离 | 信号量隔离                                     | 线程池隔离/信号量隔离        |
| 熔断策略 | 基于慢调用比例或异常比例                       | 基于异常比率                 |
| 限流     | 基于 QPS，支持流量整形                         | 有限的支持                   |
| Fallback | 支持                                           | 支持                         |
| 控制台   | 开箱即用，可配置规则、查看秒级监控、机器发现等 | 不完善                       |
| 配置方式 | 基于控制台，重启后失效                         | 基于注解或配置文件，永久生效 |

### 3.7.4 Sentinel

#### 3.7.4.1 初识 Sentinel

Sentinel 是阿里巴巴开源的一款微服务流量控制组件

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502241147277.png)

##### 3.7.4.1.1 Sentinel 介绍和安装

##### 3.7.4.1.2 微服务整合

在 cart-service 模块中整合 sentinel，连接 sentinel-dashboard 控制台，步骤如下：

1. 引入 sentinel 依赖

```xml
<!--sentinel-->
<dependency>
    <groupId>com.alibaba.cloud</groupId> 
    <artifactId>spring-cloud-starter-alibaba-sentinel</artifactId>
</dependency>
```

2. 配置控制台

修改 application.yaml 文件，添加下面的内容

```yaml
spring:
  cloud: 
    sentinel:
      transport:
        dashboard: localhost:8090
```

3. 访问 cart-service 的任意端点

重启 cart-service，然后访问查询购物车接口，sentinel 的客户端就会将服务访问的信息提交到 sentinel-dashboard 控制台，并展示出统计信息

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502241215056.png)

点击簇点链路菜单，会看到下面的页面

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502241216449.png)

##### 3.7.4.1.3 簇点链路

簇点链路就是单机调用链路，是一次请求进入服务后经过的每一个被 Sentinel 监控的资源链，默认 Sentinel 会监控 SpringMVC 的每一个 Endpoint【http 接口】，限流、熔断等都是针对簇点链路中的资源设置的，而资源名默认就是接口的请求路径

Restful 风格的 API 请求路径一般都相同，这会导致簇点资源名称重复，因此我们要修改配置，把请求方式 + 请求路径作为簇点资源的名称

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502241224003.png)

#### 3.7.4.2 请求限流

在簇点链路后面点击流控按钮即可对其做限流配置

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502241233837.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502241233760.png)

#### 3.7.4.3 线程隔离

限流可以降低服务器压力，尽量减少因并发流量引起的服务故障的概率，但并不能完全避免服务故障。一旦某个服务出现故障，我们必须隔离对这个服务的调用，避免发生雪崩。

比如，查询购物车的时候需要查询商品，为了避免因商品服务出现故障导致购物车服务级联失败，我们可以把购物车业务中查询商品的部分隔离起来，限制可用的线程资源：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502241259206.png)

这样，即便商品服务出现故障，最多导致查询购物车业务故障，并且可用的线程资源也被限定在一定范围，不会导致整个购物车服务崩溃。

所以，我们要对查询商品的 FeignClient 接口做线程隔离。

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502241300359.png)

#### 3.7.4.4 Fallback

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502241439227.png)

1. 将 FeignClient 作为 Sentinel 的簇点资源

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502241440425.png)

2. FeignClient 的 Fallback 有两种配置方式：

- 方式一：FallbackClass，无法对远程调用的异常做处理
- 方式二：FallbackFactory，可以对远程调用的异常做处理，通常都会选择这种

案例：给 FeignClient 编写 Fallback 逻辑

假如我们有一个 FeignClient 如下：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502241443137.png)

为其编写 Fallback 逻辑：

步骤一：自定义类，实现 FallbackFactory，编写对某个 FeignClient 的 fallback 逻辑：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502241445385.png)

步骤二：将刚刚定义的 UserClientFallbackFactory 注册为一个 Bean

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502241446535.png)

步骤三：在 UserClient 接口中使用 UserClientFallbackFactory

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502241447721.png)

#### 3.7.4.5 服务熔断

熔断是解决雪崩问题的重要手段，思路是由断路器统计服务调用的异常比例、慢请求比例，如果超出阈值则会熔断该服务，即拦截访问该服务的一切请求，而当服务恢复时，断路器会放行访问该服务的请求

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502261029383.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502261033677.png)

点击控制台中簇点资源后的熔断按钮，即可配置熔断策略：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502261035766.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502261037749.png)

## 3.8 分布式事务

下单业务，前端请求首先进入订单服务，创建订单并写入数据库，然后订单服务调用购物车服务和库存服务：

- 购物车服务负责清理购物车信息
- 库存服务负责扣减商品库存

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502261158493.png)

在分布式系统中，如果一个业务需要多个服务合作完成，而且每一个服务都有事务，多个事务必须同时成功或失败，这样的事务就是分布式事务，其中的每个服务的事务就是一个分支事务，整个业务称为全局事务

### 3.8.1 初识 Seata

解决分布式事务，各个子事务之间必须能感知到彼此的事务状态，才能保持状态一致

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502261207975.png)

Seata 架构：

Seata 事务管理中有三个重要的角色：

- TC【Transaction Coordinator】- 事务协调者：维护全局和分支事务的状态，协调全局事务提交或回滚
- TM【Transaction Manager】- 事务管理器：定义全局事务的范围、开始全局事务、提交或回滚全局事务
- RM【Resource Manager】- 资源管理器：管理分支事务，与 TC 交谈以注册分支事务和报告分支事务的状态

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502261212399.png)

### 3.8.2 部署 TC 服务

#### 3.8.2.1 准备数据库表

Seata 支持多种存储模式，但考虑到持久化的需要，我们一般选择基于数据库存储，需要导入数据库表

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502261221368.png)

详见笔记[day05-服务保护和分布式事务 - 飞书云文档](https://b11et3un53m.feishu.cn/wiki/QfVrw3sZvihmnPkmALYcUHIDnff)

### 3.8.3 微服务集成 Seata

首先，要在项目中引入 Seata 依赖：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502261233836.png)

然后，在 application.yml 中添加配置，让微服务找到 TC 服务地址：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502261234407.png)

详见笔记[day05-服务保护和分布式事务 - 飞书云文档](https://b11et3un53m.feishu.cn/wiki/QfVrw3sZvihmnPkmALYcUHIDnff)

### 3.8.4 XA 模式

XA 规范是 X/Open 组织定义的分布式事务处理标准，XA 规范描述了全局的 TM 与局部的 RM 之间的接口，几乎所有主流的关系型数据库都对 XA 规范提供了支持，Seata 的 XA 模式如下：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502261253116.png)

一阶段的工作：

1. RM 注册分支事务到 TC
2. RM 执行分支业务但 sql 不能提交
3. RM 报告执行状态到 TC

二阶段的工作：

1. TC 检测各分支事务执行状态
   1. 如果都成功，通知所有 RM 提交事务
   2. 如果有失败，通知所有 RM 回滚事务
2. RM 接收 TC 指令，提交或回滚事务

XA 模式的优点是什么？

- 事务的强一致性，满足 ACID 原则
- 常用数据库都支持，实现简单，并且没有代码侵入

XA 模式的缺点是什么？

- 因为一阶段需要锁定数据库资源，等待二阶段结束才释放，性能较差
- 依赖关系型数据库实现事务

#### 3.8.4.1 实现 XA 模式

Seata 的 starter 已经完成了 XA 模式的自动装配，实现非常简单，步骤如下：

1. 修改 application.yml 文件【每个参与事务的微服务】，开启 XA 模式：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502261345663.png)

2. 给发起全局事务的入口方法添加 @GlobalTransactional 注解

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502261346761.png)

3. 重启服务并测试

### 3.8.5 AT 模式

Seata 主推的是 AT 模式，AT 模式同样是分阶段提交的事务模型，不过却弥补了 XA 模型中资源锁定周期过长的缺陷

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502261401391.png)

阶段一 RM 的工作：

- 注册分支事务
- 记录 undo-log【数据快照】
- 执行业务 sql 并提交
- 报告事务状态

阶段二提交时 RM 的工作：

- 删除 undo-log 即可

阶段二回滚时 RM 的工作：

- 根据 undo-log 恢复数据到更新前

简述 AT 模式与 XA 模式最大的区别是什么？

- XA 模式一阶段不提交事务，锁定资源；AT 模式一阶段直接提交，不锁定资源
- XA 模式依赖数据库机制实现回滚；AT 模式利用数据快照实现数据回滚
- XA 模式强一致；AT 模式最终一致

#### 3.8.5.1 实现 AT 模式

首先，创建数据库表

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502261415968.png)

然后，修改 application.yml 文件，将事务模式修改为 AT 模式：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502261416088.png)

# 第 4 章 RabbitMQ

1. RabbitMQ 是一个流行的开源消息中间件，它实现了高级消息队列协议【AMQP】，为分布式应用程序提供了可靠的、异步的消息传递机制
2. RabbitMQ 可以在多个进程、多个主机之间传递消息，因此它经常用于解耦分布式应用程序中的各个组件或者实现任务队列和日志收集等应用场景
3. RabbitMQ 的核心概念是生产者、消费者和队列，生产者将消息发布到队列中，消费者从队列中获取消息并进行处理
4. RabbitMQ 的优点包括可靠性、灵活性和可扩展性，它使用消息确认机制确保消息能够成功传递，同时提供多种交换机类型和绑定方式以支持不同的消息路由场景

## 4.1 RabbitMQ 引入

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502261651143.png)

没用 MQ 之前，登录需要很长的时间

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502261655805.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502261656869.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502261657152.png)

## 4.2 初识 MQ

### 4.2.1 同步调用

以余额支付为例：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502261732371.png)

同步调用的优势：

- 时效性强，等待到结果后才返回

同步调用的问题：

- 拓展性差
- 性能下降
- 级联失败问题

### 4.2.2 异步调用（可以和虎哥笔记一起看）

异步调用通常是基于消息通知的方式，包含三个角色：

- 消息发送者：投递消息的人，就是原来的调用者
- 消息接收者：接收和处理消息的人，就是原来的服务提供者
- 消息代理：管理、暂存、转发消息，你可以把它理解成微信服务器

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502261740984.png)

举个例子：

外卖员给你送外卖，如果是同步的话，外卖员直接把外卖送到你的手里，当外卖到时，你正在蹲坑，那么外卖员就要等你半个小时，你蹲完坑之后出来拿了外卖之后外卖员才可以去送下一单，如果是异步的话，外卖员直接把外卖放到外卖柜之后给你发个消息就可以去送下一单了，不管你是在蹲坑还是在干嘛，你有时间了就直接去外卖柜拿外卖就行了

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502261748906.png)

支付服务不再同步调用业务关联度低的服务，而是发送消息通知到 Broker

异步调用的优势：

- 耦合度低，拓展性强
- 异步调用，无需等待，性能好
- 故障隔离，下游服务故障不影响上游业务
- 缓存消息，流量削峰填谷

异步调用的问题：

- 不能立即得到调用结果，时效性差
- 不确定下游业务执行是否成功
- 业务安全依赖于 Broker 的可靠性

### 4.2.3 MQ 技术选型

MQ【MessageQueue】，中文是消息队列，字面来看就是存放消息的队列，也就是异步调用中的 Broker

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502261758382.png)

## 4.3 RabbitMQ

### 4.3.1 安装部署

详见[day06-MQ基础 - 飞书云文档](https://b11et3un53m.feishu.cn/wiki/OQH4weMbcimUSLkIzD6cCpN0nvc)

### 4.3.2 基本介绍

RabbitMQ 的整体架构及核心概念：

- publisher：消息发送者
- consumer：消息的消费者
- queue：队列，存储消息
- exchange：交换机，负责路由消息
- virtual-host：虚拟主机，起到数据隔离的作用

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502261819302.png)

### 4.3.3 快速入门

需求：在 RabbitMQ 的控制台完成下列操作：

- 新建队列 hello.queue1 和 hello.queue2
- 向默认的 amp.fanout 交换机发送一条消息
- 查看消息是否到达 hello.queue1 和 hello.queue2

注意事项：

- 交换机只能路由消息，无法存储消息
- 交换机只会路由消息给与其绑定的队列，因此队列必须与交换机绑定

### 4.3.4 数据隔离

需求：在 RabbitMQ 的控制台完成下列操作：

- 新建一个用户 hmall
- 为 hmall 用户创建一个 virtual host
- 测试不同 virtual host 之间的数据隔离现象

## 4.4 Java 客户端

### 4.4.1 快速入门

AMQP：Advanced Message Queuing Protocol 是用于在应用程序之间传递业务消息的开放标准，该协议与语言和平台无关，更符合微服务中独立性的要求

Spring AMQP：Spring AMQP 是基于 AMQP 协议定义的一套 API 规范，提供了模板来发送和接收消息，包含两部分，其中 spring-amqp 是基础抽象，spring-rabbit 是底层的默认实现

需求：

- 利用控制台创建队列 simple.queue
- 在 publisher 服务中，利用 SpringAMQP 直接向 simple.queue 发送消息
- 在 consumer 服务中，利用 SpringAMQP 编写消费者，监听 simple.queue 队列

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502262004559.png)

1. 引入依赖

在父工程中引入 spring-amqp 依赖，这样 publisher 和 consumer 服务都可以使用：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502262005174.png)

2. 配置 RabbitMQ 服务端信息

在每个微服务中引入 MQ 服务端信息，这样微服务才能连接到 RabbitMQ

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502262008855.png)

3. 发送信息

SpringAMQP 提供了 RabbitTemplate 工具类，方便我们发送信息，发送信息代码如下：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502262009592.png)

4. 接收消息

SpringAMQP 提供声明式的消息监听，我们只需要通过注解在方法上声明要监听的队列名称，将来 SpringAMQP 就会把消息传递给当前方法：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502262016469.png)

### 4.4.2 WorkQueue

Work queues，任务模型，简单来说就是让多个消费者绑定到一个队列，共同消费队列中的信息

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502262021723.png)

模拟 WorkQueue，实现一个队列绑定多个消费者

- 在 RabbitMQ 的控制台创建一个队列，名为 work.queue
- 在 publisher 服务中定义测试方法，发送 50 条消息到 work.queue
- 在 consumer 服务中定义两个消息监听者，都监听 work.queue 队列

默认情况下，RabbitMQ 会将消息依次轮询投递给绑定在队列上的每一个消费者，但这并没有考虑到消费者是否已经处理完消息，可能出现消息堆积，因此我们需要修改消费者的 application.yml，设置 preFetch 值为 1，确保同一时刻最多投递给消费者 1 条消息：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502262034920.png)

Work 模型的使用：

- 多个消费者绑定到一个队列，可以加快消息处理速度
- 同一条消息只会被一个消费者处理
- 通过设置 prefetch 来控制消费者预取的消息数量，处理完一条再处理下一条，实现能者多劳

### 4.4.3 Fanout交换机

交换机的作用主要是接收发送者发送的消息，并将消息路由到与其绑定的队列

常见交换机的类型有以下三种：

- Fanout：广播
- Direct：定向
- Topic：话题

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502262049168.png)

Fanout Exchange 会将接收到的消息路由到每一个跟其绑定的 queue，所以也叫广播模式

利用 SpringAMQP 演示 FanoutExchange 的使用

1. 在 RabbitMQ 控制台中，声明队列 fanout.queue1 和 fanout.queue2
2. 在 RabbitMQ 控制台中，声明交换机 hmall.fanout，将两个队列与其绑定
3. 在 consumer 服务中，编写两个消费者方法，分别监听 fanout.queue1 和 fanout.queue2
4. 在 publisher 中编写测试方法，向 hmall.fanout 发送消息

交换机的作用：

- 接收 publisher 发送的消息
- 将消息按照规则路由到与之绑定的队列
- FanoutExchange 会将消息路由到每个绑定的队列

发送消息到交换机的 API 是：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502262059260.png)

### 4.4.4 Direct 交换机

Direct Exchange 会将接收到的消息根据规则路由到指定的 Queue，因此称为定向路由

- 每一个 Queue 都设置一个 BindingKey
- 发布者发送消息时，指定消息的 RoutingKey
- Exchange 将消息路由到 BindingKey 与消息 RoutingKey 一致的队列
- BindingKey 可以设置成一样的，就相当于 Fanout

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502262104537.png)

利用 SpringAMQP 演示 DirectExchange 的使用

1. 在 RabbitMQ 控制台中，声明队列 direct.queue1 和 direct.queue2
2. 在 RabbitMQ 控制台中，声明交换机 hmall.direct，将两个队列与其绑定
3. 在 consumer 服务中，编写两个消费者方法，分别监听 direct.queue1 和 direct.queue2
4. 在 publisher 中编写测试方法，利用不同的 RoutingKey 向 hmall.direct 发送信息

Direct 交换机与 Fanout 交换机的差异：

- Fanout 交换机将消息路由给每一个与之绑定的队列
- Direct 交换机根据 RoutingKey 判断路由给哪个队列
- 如果多个队列具有相同的 RoutingKey，则与 Fanout 功能类似

### 4.4.5 Topic 交换机

 TopicExchange 也是基于 RoutingKey 做消息路由，但是 routingKey 通常是多个单词的组合，并且以 `.` 分割

Queue 与 Exchange 指定 BindingKey 时可以使用通配符：

- `#` ：代指 0 个或多个单词
- `*` ：代指一个单词

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502262125351.png)

利用 SpringAMQP 演示 DirectExchange 的使用：

1. 在 RabbitMQ 控制台中，声明队列 topic.queue1 和 topic.queue2
2. 在 RabbitMQ 控制台中，声明交换机 hmall.topic，将两个队列与其绑定
3. 在 consumer 服务中，编写两个消费者方法，分别监听 topic.queue1 和 topic.queue2
4. 在 publisher 中编写测试方法，利用不同的 RoutingKey 向 hmall.topic 发送信息

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502262130394.png)

### 4.4.6 声明队列交换机

#### 4.4.6.1 基于 JavaBean

SpringAMQP 提供了几个类用来声明队列、交换机及其绑定关系：

- Queue：用于声明队列，可以用工厂类 QueueBuilder 构建
- Exchange：用于声明交换机，可以用工厂类 ExchangeBuilder 构建
- Binding：用于声明队列和交换机的绑定关系，可以用工厂类 BindingBuilder 构建
- 一般在消费者写

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502262225124.png)

例如：声明一个 Fanout 类型的交换机，并且创建队列与其绑定：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502262227412.png)

或

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502262229266.png)

 #### 4.4.6.2 基于注解声明队列交换机

SpringAMQP 还提供了基于 @RabbitListener 注解来声明队列和交换机的方式：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502262251087.png)

### 4.4.7 消息转换器

需求：测试利用 SpringAMQP 发送对象类型的消息

1. 声明一个队列，名为 object.queue
2. 编写单元测试，向队列中直接发送一条消息，消息类型为 Map
3. 在控制台查看消息，总结问题

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502271048896.png)

Spring 的对消息对象的处理是由 org.springframeword.amqp.support.converter.MessageConverter 来处理的，而默认实现是 SimpleMessageConverter，基于 JDK 的 ObjectOutputStream 完成序列化，存在下列问题：

- JDK 的序列化有安全风险
- JDK 序列化的消息太大
- JDK 序列化的消息可读性差

建议采用 JSON 序列化代替默认的 JDK 序列化，要做两件事情：

在 publisher 和 consumer 中都要引入 jackson 依赖：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502271103644.png)

在 publisher 和 consumer 中都要配置 MessageConverter：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502271104439.png)

## 4.5 业务改造

需求：改造余额支付功能，不再同步调用交易服务的 OpenFeign 接口，而是采用异步 MQ 通知交易服务更新订单状态

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202502271112971.png)

业务改造视频：99_MQ入门-16.业务改造

## 4.6 MQ 高级

### 4.6.1 发送者的可靠性

#### 4.6.1.1 发送者重连

有的时候由于网络波动，可能会出现发送者连接 MQ 失败的情况，通过配置我们可以开启连接失败后的重连机制：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503051704256.png)

当网络不稳定的时候，利用重试机制可以有效提高消息发送的成功率，不过 SpringAMQP 提供的重试机制是阻塞式的重试，也就是说多次重试等待的过程中，当前线程是被阻塞的，会影响业务性能

如果对于业务性能有要求，建议禁用重试机制，如果一定要使用，请合理配置等待时长和重试次数，当然也可以考虑使用异步线程来执行发送消息的代码

#### 4.6.1.2 发送者确认

SpringAMQP 提供了 Publisher Confirm 和 Publisher Return 两种确认机制，开启确认机制后，当发送者发送消息给 MQ 后，MQ 会返回确认结果给发送者，返回的结果有以下几种情况：

- 消息投递到了 MQ，但是路由失败，此时会通过 PublisherReturn 返回路由异常原因，然后返回 ACK，告知投递成功
- 临时消息投递到了 MQ，并且入队成功，返回 ACK，告知投递成功
- 持久消息投递到了 MQ，并且入队完成持久化，返回 ACK，告知投递成功
- 其它情况都会返回 NACK，告知投递失败

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503051759944.png)

SpringAMQP 实现发送者确认：

1. 在 publisher 这个微服务的 application.yml 中添加配置

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503051801849.png)

配置说明：

- 这里 publisher-confirm-type 有三种模式可选：
- none：关闭 confirm 机制
- simple：同步阻塞等待 MQ 的回执消息
- correlated：MQ 异步回调方式返回回执消息

2. 每个 RabbitTemplate 只能配置一个 ReturnCallback，因此需要在项目启动过程中配置：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503051805122.png)

3. 发送消息，指定消息 ID、消息 ConfirmCallback

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503051820312.png)

### 4.6.2 MQ 的可靠性

在默认情况下，RabbitMQ 会将接收到的信息保存在内存中以降低消息收发的延迟，这样会导致两个问题：

- 一旦 MQ 宕机，内存中的消息会丢失
- 内存空间有限，当消费者故障或处理过慢时，会导致消息积压，引发 MQ 阻塞

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503051832819.png)

#### 4.6.2.1 数据持久化

RabbitMQ 实现数据持久化包括 3 个方面：

- 交换机持久化

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503051834727.png)

- 队列持久化

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503051835778.png)

- 消息持久化

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503051836405.png)

#### 4.6.2.2 Lazy Queue

从 RabbitMQ 的 3.6.0 版本开始，就增加了 Lazy Queue 的概念，也就是惰性队列

惰性队列的特征如下：

- 接收到消息后直接存入磁盘，不再存储到内存
- 消费者要消费消息时才会从磁盘中读取并加载到内存，可以提前缓存部分消息到内存，最多 2048 条

在 3.12 版本后，所有队列都是 Lazy Queue 模式，无法更改

在控制台添加：要设置一个队列为惰性队列，只需要在声明队列时指定 x-queue-mode 属性为 lazy 即可：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503081541810.png)

在代码中添加：要设置一个队列为惰性队列只需要在声明队列时指定 x-queue-mode 属性为 lazy 即可：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503081542263.png)

也可以这样：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503081543645.png)

### 4.6.3 消费者的可靠性

#### 4.6.3.1 消费者确认机制

消费者确认机制是为了确认消费者是否成功处理消息，当消费者处理消息结束后，应该向 RabbitMQ 发送一个回执，告知 RabbitMQ 自己消息处理的状态：

- ack：成功处理消息，RabbitMQ 从队列中删除该消息
- nack：消息处理失败，RabbitMQ 需要再次投递消息
- reject：消息处理失败并拒绝该消息，RabbitMQ 从队列中删除该消息

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503081551898.png)

SpringAMQP 已经实现了消息确认功能，并允许我们通过配置文件选择 ACK 处理方式，有三种方式：

- none：不处理，即消息投递给消费者后立刻 ack，消息会立刻从 MQ 删除，非常不安全，不建议使用
- manual：手动模式，需要自己在业务代码中调用 API，发送 ack 或 reject，存在业务入侵，但更灵活
- auto：自动模式，SpringAMQP 利用 AOP 对我们的消息处理逻辑做了环绕增强，当业务正常执行时则自动返回 ack，当业务出现异常时，根据异常判断返回不同结果：
  - 如果是业务异常，会自动返回 nack
  - 如果是消息处理或校验异常，自动返回 reject

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503081558919.png)

#### 4.6.3.2 失败重试策略

SpringAMQP 提供了消费者失败重试机制，在消费者出现异常时利用本地重试，而不是无限的从 requeue 到 mq 再 mq 到 requeue。我们可以通过在 application.yaml 文件中添加配置来开启重试机制：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503081605438.png)

在开启重试模式后，重试次数耗尽，如果消息依然失败，则需要有 MessageRecoverer 接口来处理，它包含三种不同的实现：

- RejectAndDontRequeueRecoverer：重试耗尽后，直接 reject，丢弃信息。默认就是这种方式
- ImmediateRequeueMessageRecoverer：重试耗尽后，返回 nack，消息重新入队
- RepublishMessageRecoverer：重试耗尽后，将失败消息投递到指定的交换机

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503081632467.png)

演示将失败处理策略改为 RepublishMessageRecoverer：

- 首先定义接收失败消息的交换机、队列及其绑定关系
- 然后定义 RepublishMessageRecoverer

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503081634995.png)

#### 4.6.3.3 业务幂等性

幂等是一个数学概念，用函数表达式来描述是这样的：`f(x)=f(f(x))` ，在程序开发中，则是指同一个业务，执行一次或多次对业务状态的影响是一致的

有些是天生就是幂等的：

- 查询业务：例如根据 id 查询商品，你查一次和查 n 次都是一样的
- 删除业务：例如根据 id 删除商品，你删一次和删 n 次都是一样的

有些不是幂等的：

- 用户下单业务：需要扣减库存
- 用户退款业务：需要恢复余额

##### 4.6.3.3.1 方案一：唯一消息 id

唯一消息 id 就是给每个消息都设置一个唯一 id，利用 id 区分是否是重复消息：

1. 每一条消息都生成一个唯一的 id，与消息一起投递给消费者
2. 消费者接收到消息后处理自己的业务，业务处理成功后将消息 id 保存到数据库
3. 如果下次又收到相同消息，去数据库查询判断是否存在，存在则为重复消息放弃处理

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503081712617.png)

##### 4.6.3.3.2 方案二：业务判断

业务判断是结合业务逻辑，基于业务本身做判断，以余额支付业务为例：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503081725097.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503081726262.png)

### 4.6.4 面试题总结

如何保证支付服务与交易服务之间的订单状态一致性？

- 首先，支付服务会在用户支付成功以后利用 MQ 消息通知交易服务，完成订单状态同步
- 其次，为了保证 MQ 消息的可靠性，我们采用了生产者确认机制、消费者确认、消费者失败重试等策略，确保消息投递和处理的可靠性，同时也开启了 MQ 的持久化，避免因服务宕机导致消息丢失
- 最后，我们还在交易服务更新订单状态时做了业务幂等判断，避免因消息重复消费导致订单状态异常

如果交易服务消息处理失败，有没有什么兜底方案？

### 4.6.4 延迟消息

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503081743792.png)

用户在交易服务下单后保存订单，并把订单状态置为未支付，同时会扣减库存，这样一个订单就下好了，然后交易服务就等待支付服务，正常情况下用户在支付服务支付成功后支付服务通过 MQ 发消息的方式告诉交易服务，交易服务把订单状态改为已支付就可以了，但是如果出了问题，交易服务一直接收不到消息，如果用户支付了，那就把订单状态改过来，但是如果用户没支付，库存已经扣了，就出问题了，解决方案就是采取延时任务：当交易服务等了一段时间后就会主动向支付服务询问状态，如果用户已经支付则把状态改为已支付，如果用户没有支付就把库存恢复

延迟消息：发送者发送信息时指定一个时间，消费者不会立刻收到信息，而是在指定时间之后才收到消息

延迟任务：设置在一定时间之后才执行的任务

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503081754166.png)

#### 4.6.4.1 死信交换机

当一个队列中的消息满足下列情况之一时，就会成为死信：

- 消费者使用 basic.reject 或 basic.nack 声明消费失败，并且消息的 requeue 参数设置为 false
- 消息是一个过期消息【达到了队列或消息本身设置的过期时间】，超时无人消费
- 要投递的队列消息堆积满了，最早的消息可能成为死信

如果队列通过 `dead-letter-exchange` 属性指定了一个交换机，那么该队列中的死信就会投递到这个交换机中，这个交换机称为死信交换机【Dead Letter Exchange，简称 DLX】

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503081802115.png)

#### 4.6.4.2 延迟消息插件

这个插件可以将普通交换机改造为支持延迟消息功能的交换机，当消息投递到交换机后可以暂存一定时间，到期后再投递到队列

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503082137946.png)

插件下载

[day07-MQ高级 - 飞书云文档](https://b11et3un53m.feishu.cn/wiki/A9SawKUxsikJ6dk3icacVWb4n3g)

新增一个交换机并把 delay 属性设置为 true

方式一：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503082141184.png)

方式二：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503082141393.png)

发送消息时需要通过消息头 x-delay 来设置过期时间

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503082143519.png)

#### 4.6.4.3 取消超时订单

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503091103051.png)

用户下单完成后，发送 15 分钟的延迟消息，在 15 分钟后接收消息，检查支付状态：

- 已支付：更新订单状态为已支付
- 未支付：更新订单状态为关闭订单，恢复商品库存

# 第 5 章 Elasticsearch

## 5.1 初识 Elasticsearch

### 5.1.1 安装

看笔记

Lucene 是一个 Java 语言的搜索引擎类库，是 Apache 公司的顶级项目

Lucene 的优势：

- 易扩展
- 高性能【基于倒排索引】

2004 年 Shay Banon 基于 Lucene 开发了 Compass，2010 年 Shay Banon 重写了 Compass，取名为 Elasticsearch

Elasticsearch 具备下列优势：

- 支持分布式，可水平扩展
- 提供 Restful 接口，可被任何语言调用

Elasticsearch 集合 kibana、Logstash、Beats 是一整套技术栈，被叫做 ELK，被广泛应用在日志数据分析、实时监控等领域

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503091132618.png)

### 5.1.2 倒排索引

传统数据库如 MySQL 采用正向索引，例如给下表中的 id 创建索引：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503091141714.png)

Elasticsearch 采用倒排索引：

- 文档：每条数据就是一个文档
- 词条：文档按照语义分成的词语

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503091144088.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503091146080.png)

### 5.1.3 IK 分词器

中文分词往往需要根据语义分析，比较复杂，这就需要用到中文分词器，例如 IK 分词器，IK 分词器是林良益在 2006 年开源发布的，其采用的正向迭代最细粒度切分算法一直沿用至今

其安装的方式也比较简单，只要将资料提供好的分词器放入 Elasticsearch 的插件目录即可：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503091200461.png)

在 Kibana 的 DevTools 中可以使用下面的语法来测试 IK 分词器

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503091202055.png)

语法说明：

- POST：请求方式
- `_analyze`：请求路径，这里省略了 http://192.168.150.101:9200，因为有 Kibana 帮我们补充

- 请求参数，JSON 风格：
  - analyzer：分词器类型，这里是默认的 standard 分词器
  - text：要分词的内容

IK 分词器是根据已有的词典对句子进行分词，如果词典里没有新出的词怎么办？IK 分词器允许我们配置扩展词典来增加自定义的词库：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503091221212.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503091222137.png)

总结：

分词器的作用是什么？

- 创建倒排索引时，对文档分词
- 用户搜索时，对输入的内容分词

IK 分词器有几种模式？

- ik_smart：智能切分，粗粒度
- ik_max_word：最细切分，细粒度 IK 分词器

如何扩展分词器词库中的词条？

- 利用 config 目录的 IKAnalyzer.cfg.xml 文件添加扩展词典
- 在词典中添加扩展词条

### 5.1.4 基础概念

Elasticsearch 中的文档数据会被序列化为 json 格式后存储在 Elasticsearch 中

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503091228546.png)

不同的数据库表数据有不同的分类，它们在被序列化成 json 格式后也会分类

索引：相同类型的文档的集合，和数据库中一个一个的表类似

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503091231014.png)

映射：索引中文档的字段约束信息，类似表的结构约束

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503091237671.png)

## 5.2 索引库操作

### 5.2.1 Mapping 映射属性

mapping 是对索引库中文档的约束，常见的 mapping 属性包括：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503091249480.png)

### 5.2.2 索引库操作

Elasticsearch 提供的所有 API 都是 Restful 的接口，遵循 Restful 的基本规范

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503091256034.png)

创建索引库和 mapping 的请求语法如下：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503091257926.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503091259408.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503091302569.png)

查看索引库语法：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503091304305.png)

删除索引库语法：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503091304222.png)

修改：索引库和 mapping 一旦创建无法修改，但是可以添加新的字段，语法如下：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503091307241.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503091309379.png)

## 5.3 文档操作

### 5.3.1 文档 CRUD

新增文档的请求格式如下：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503091314078.png)

查询：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503091318042.png)

删除：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503091318784.png)

修改：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503091518494.png)

### 5.3.2 批量处理

Elasticsearch 中允许通过一次请求中携带多次文档操作，也就是批量处理，语法格式如下：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503091522585.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503091524564.png)

## 5.4 JavaRestClient

### 5.4.1 客户端初始化
1. 引入 ES 的 RestHighLevelClient 依赖
    ![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503101201382.png)

2. 因为 SpringBoot 的默认的 ES 版本是 7.17.0，所以我们需要覆盖默认的 ES 版本
    ![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503101204115.png)
3. 初始化 RestHighLevelClient
![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503101207418.png)

### 5.4.2 商品表 Mapping 映射

要实现商品搜索，那么索引库的字段肯定要满足页面搜索的需求：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503101501232.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503101513554.png)

演示在 Dev Tools 中配置索引库，我们要在 Java 客户端配置索引库

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503101516101.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503101517801.png)

### 5.4.3 索引库操作

创建索引库的 JavaAPI 与 Restful 接口 API 对比：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503101522609.png)

删除索引库：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503101523574.png)

查询索引库信息：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503101523971.png)

### 5.4.4 文档操作

新增文档的 JavaAPI 如下：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503101534864.png)

删除文档的 JavaAPI 如下：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503101550335.png)

查询文档包含查询和解析响应结果两部分，对应的 JavaAPI 如下：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503101552264.png)

修改文档数据有两种方式：

- 方式一：全量更新，再次写入 id 一样的文档，就会删除旧文档，添加新文档，与新增的 JavaAPI 一致
- 方式二：局部更新，只更新指定部分字段

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503101600110.png)

### 5.4.5 批处理

批处理代码流程与之前类似，只不过构建请求会用到一个名为 BulkRequest 来封装普通的 CRUD 请求

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503101606966.png)

批处理的 API 示例：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503101608538.png)

## 5.5 DSL 查询

Elasticsearch 提供了 DSL【Domain Specific Language】查询，就是以 JSON 格式来定义查询条件，类似这样：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503101616212.png)

DSL 查询可以分为两大类：

- 叶子查询：一般是在特定的字段里查询特定值，属于简单查询，很少单独使用
- 复合查询：以逻辑方式组合多个叶子查询或者更改叶子查询的行为方式

在查询以后，还可以对查询的结果做处理，包括：

- 排序：按照 1 个或多个字段值做排序
- 分页：根据 from 和 size 做分页，类似 MySQL
- 高亮：对搜索结果中的关键字添加特殊样式，使其更加醒目
- 聚合：对搜索结果做数据统计以形成报表

### 5.5.1 快速入门

基于 DSL 的查询语法如下：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503101623379.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503101635002.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503101635544.png)

### 5.5.2 叶子查询

叶子查询还可以进一步细分，常见的有：

- 全文检索【full text】查询：利用分词器对用户输入内容分词，然后去词条列表中匹配，例如：
  - match_query
  - multi_match_query
- 精确查询：不对用户输入内容分词，直接精确匹配，一般是查找 keyword、数值、日期、布尔等类型，例如：
  - ids
  - range
  - term
- 地理【geo】查询：用于搜索地理位置，搜索方式很多，例如：
  - geo_distance
  - geo_bounding_box

1. 全文检索查询

match 查询：全文检索查询的一种，会对用户输入内容进行分词，然后去倒排索引库检索，语法：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503102023206.png)

multi_match：与 match 查询类似，只不过允许同时查询多个字段，语法：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503102026078.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503102029556.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503102029996.png)

2. 精确查询

精确查询是词条级别的查询，也就是说不会对用户输入的搜索条件再分词，而是作为一个词条与搜索的字段内容精确值匹配，因此推荐查找 keyword、数值、日期、boolean 类型的字段，例如 id、price、城市、地名、人名等作为一个整体才有含义的字段

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503102051611.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503102049247.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503102050184.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503102053264.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503102053701.png)

### 5.5.3 复合查询

复合查询大致可以分为两类：

- 第一类：基于逻辑运算组合叶子查询，实现组合条件，例如
  - bool

- 第二类：基于某种算法修改查询时的文档相关性算分，从而改变文档排名，例如：
  - function_score
  - dis_max

布尔查询是一个或多个查询子句的组合，子查询的组合方式有：

- must：必须匹配每个子查询，类似 与
- should：选择性匹配子查询，类似 或
- must_not：必须不匹配，不参与算分，类似 非
- filter：必须匹配，不参与算分

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111046111.png)

案例：

需求：我们要搜索“智能手机”，但品牌必须是华为，价格必须是 900~1599

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111050216.png)

### 5.5.4 排序和分页

#### 5.5.4.1 排序

Elasticsearch 支持对搜索结果排序，默认是根据相关度算分来排序，也可以指定字段排序，可以排序字段类型有：keyword 类型、数值类型、地理坐标类型、日期类型等

![image-20250311105549379](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111055426.png)

案例：

需求：搜索商品，按照销量排序，销量一样则按照价格升序

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111057308.png)

#### 5.5.4.2 分页

Elasticsearch 默认情况下只返回 top 10 的数据，而如果要查询更多数据就需要修改分页参数了，Elasticsearch 中通过修改 from、size 参数来控制要返回的分页结果：

- from：从第几个文档开始
- size：总共查询几个文档

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111100678.png)

案例：搜索商品，查询出销量排名前 10 的商品，销量一样时按照价格升序

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111103248.png)

#### 5.5.4.3 深度分页问题

Elasticsearch 的数据一般会采用分片存储，也就是把一个索引中的数据分成 N 份，存储到不同节点上，查询数据时需要汇总各个分片的数据

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111120534.png)

假如我们要查询第 100 页的数据，每页查 10 条，查询的就是 990 到 1000 这 10 条数据，首先就要对前 1000 条数据进行排序然后找出第 990 到 1000 的数据，因为 Elasticsearch 的数据是分片存储，是混乱的，那么要把所有分片里的数据都拿出来然后进行排序吗？不用，我们只用取出每个分片的前 1000 条，然后聚合所有结果，然后重新排序选取前 1000 个就行了，那如果要查询第 1000 页的数据、要查询第 100000 页的数据，就要取出每个分片的前 10000 条数据、取出每个分片的前 1000000 条数据，这个数据量就十分的大，查的深度越深，数据量越大，内存压力越大，性能也就越差

针对深度分页，ES 提供了两种解决方案：

- search after：分页时需要排序，原理是从上一次的排序值开始，查询下一页数据，官方推荐使用的方式
  - 优点：没有查询上限，支持深度分页
  - 缺点：只能向后逐页查询，不能随机翻页
  - 场景：数据迁移、手机滚动查询
- scroll：原理将排序数据形成快照，保存在内存，官方已经不推荐使用

### 5.5.5 高亮显示

高亮显示就是在搜索结果中把搜索关键字突出显示

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111131880.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111132717.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111248257.png)

高亮显示并不会在源文件中生效，会在和源文件同级下的 highlight 中进行显示

搜索的完整语法：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111135224.png)

## 5.6 JavaRestClient 查询

### 5.6.1 快速入门

数据搜索的 Java 代码我们分为两部分：

- 构建并发起请求
- 解析查询结果

1. 构建并发起请求

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111143076.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111144902.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111144804.png)

2. 解析查询结果

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111149202.png)

### 5.6.2 构建查询条件

在 JavaRestAPI 中，所有类型的 query 查询条件都是由 QueryBuilders 来构建的

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111215928.png)

1. 全文检索的查询条件构造 API 如下

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111225832.png)

2. 精确查询的查询条件构造 API 如下：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111226473.png)

3. 布尔查询的查询条件构造 API 如下：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111227894.png)

案例：利用 JavaRestClient 实现搜索功能，条件如下：

- 搜索关键字为脱脂牛奶
- 品牌必须为德亚
- 价格必须低于 300

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111233490.png)

### 5.6.3 排序和分页

与 query 类似，排序和分页参数都是基于 request.source() 来设置的：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111235621.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111239778.png)

### 5.6.4 高亮显示

高亮显示的条件构造 API 如下：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111240636.png)

高亮显示的结果解析 API 如下：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111244000.png)

## 5.7 数据聚合

聚合可以实现对文档数据的统计、分析、运算。聚合常见的有三类：

- 桶【Bucket】聚合：用来对文档做分组
  - TermAggregation：按照文档字段值分组
  - Date Histogram：按照日期阶段分组，例如一周为一组或者一月为一组
- 度量【Metric】聚合：用于计算一些值，比如：最大值、最小值、平均值等
  - Avg：求平均值
  - Max：求最大值
  - Min：求最小值
  - Stats：同时求 max、min、avg、sum 等
- 管道【pipeline】聚合：其它聚合的结果为基础做聚合

注意：参与聚合的字段必须是 Keyword、数值、日期、布尔类型的字段

### 5.7.1 DSL 聚合

我们要统计所有商品中共有哪些商品分类，其实就是以分类【category】字段对数据分组，category 值一样的放在同一组，属于 Bucket 聚合中的 Term 聚合

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111452492.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111455524.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111455641.png)

默认情况下，Bucket 聚合是对索引库的所有文档做聚合，我们可以限定要聚合的文档范围，只要添加 query 条件即可，例如，我想知道价格高于 3000 元的手机品牌有哪些：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111458236.png)

除了对数组分组【Bucket】以外，我们还可以对每个 Bucket 内的数据进一步做数据计算和统计，例如：我想知道手机有哪些品牌，每个品牌的价格最小值、最大值、平均值

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111502964.png)

### 5.7.2 RestClient 聚合

以品牌聚合为例：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111507462.png)

聚合解析：

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503111811401.png)



