# SpringCloud

# 第 1 章 SpringCloud 的基本介绍

## 1.1 官方文档

[Spring Cloud](https://spring.io/projects/spring-cloud)

## 1.2 提出问题引出微服务

1. 问题一：没有微服务技术，是不是就不能开发大型项目？

答：可以，对大型项目进行模块划分，对各个模块进行实现，模块之间更多的是以 API 调用完成，耦合度较高，不利于扩展和维护

2. 问题二：微服务出现的原因和价值是什么？

答：（1）微服务可以根据业务的不同，将一个大项目分解成不同的服务（微服务，比如搜索服务、网关服务、配置服务、存储服务、发现服务等）（2）各个服务通过分布式的方式进行工作，从而可以高效、快速、稳定的完成复杂的功能（3）将原来的大项目的某些模块 -> 抽出形成微服务 -> 配合分布式工作方式 -> 从而达到高效、快速、稳定的完成复杂的业务

3. 图解

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222127024.png)

## 1.3 系统架构的演变过程

### 1.3.1 单体架构

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222127203.png)

### 1.3.2 动静分离架构：静态缓存 + 文件存储

动静分离中的动指 jsp、java 等程序，静指 html、img 等文件

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222127948.png)

### 1.3.3 分布式架构：业务拆分 + 负载均衡

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222127041.png)

### 1.3.4 微服务架构：使用 SpringCloud

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222127395.png)

1. 微服务是系统架构上的一种设计风格，它的主旨是将一个原本独立的系统拆分成多个小型服务，这些小型服务都在各自独立的进程中运行，服务之间通过基于 Http 的 RESTful API 进行通信协作

2. 被拆分的每一个小型服务都围绕着系统中的某一项或一些耦合度较高的业务功能进行构建，并且每个服务都维护着自身的数据存储、业务开发、自动化测试案例以及独立部署机制，由于有轻量级的通信协作基础，所以这些微服务可以使用不同的语言来编写

## 1.4 SpringCloud 全面说明

1. SpringCloud 来源于 Spring，是更高层次的架构视角的综合性的大型项目，目标旨在构建一套标准化的微服务解决方案，让架构师在使用微服务理念构建系统时面对各环节的问题都可以找到相应的组件来处理

2. SpringCloud 是 Spring 社区为微服务架构提供的一个全家桶套餐，套餐中各个组件之间的配合可以减少在组件的选型和整合上花费的精力，可以快速构建起基础的微服务架构系统，是微服务架构的最佳落地方案

3. SpringCloud 天然支持 SpringBoot（有版本对应的要求），使用门槛低

4. 解决与分布式系统相关的复杂性 - 网络问题、延迟开销、带宽问题，安全问题

5. 处理服务发现的能力 - 服务发现允许集群中的进程和服务找到彼此并进行通信

6. 解决冗余问题 - 冗余问题经常发生在分布式系统中

7. 解决负载平衡 - 改进跨多个计算资源（例如计算机集群、网络链接、中央处理单元）的工作负载分布

## 1.5 SpringCloud 核心组件图

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222127243.png)

## 1.6 SpringCloud 分布式示意图

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222127164.png)

## 1.7 SpringCloud 组件选型

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222127037.png)

# 第 2 章 SpringCloud Alibaba 基本介绍

## 2.1 SpringCloud Alibaba 是什么

Spring Cloud Alibaba 致力于提供微服务开发的一站式解决方案。此项目包含开发分布式应用微服务的必需组件，方便开发者通过 Spring Cloud 编程模型轻松使用这些组件来开发分布式应用服务。

依托 Spring Cloud Alibaba，只需要添加一些注解和少量配置，就可以将 Spring Cloud 应用接入阿里微服务解决方案，通过阿里中间件来迅速搭建分布式应用系统。

此外，阿里云同时还提供了 Spring Cloud Alibaba 企业版 [微服务解决方案](https://www.aliyun.com/product/aliware/mse?spm=github.spring.com.topbar)，包括无侵入服务治理(全链路灰度，无损上下线，离群实例摘除等)，企业级 Nacos 注册配置中心和企业级云原生网关等众多产品。

## 2.2 主要功能一览

- **服务限流降级**：默认支持 WebServlet、WebFlux、OpenFeign、RestTemplate、Spring Cloud Gateway、Dubbo 和 RocketMQ 限流降级功能的接入，可以在运行时通过控制台实时修改限流降级规则，还支持查看限流降级 Metrics 监控。
- **服务注册与发现**：适配 Spring Cloud 服务注册与发现标准，默认集成对应 Spring Cloud 版本所支持的负载均衡组件的适配。
- **分布式配置管理**：支持分布式系统中的外部化配置，配置更改时自动刷新。
- **消息驱动能力**：基于 Spring Cloud Stream 为微服务应用构建消息驱动能力。
- **分布式事务**：使用 @GlobalTransactional 注解， 高效并且对业务零侵入地解决分布式事务问题。
- **阿里云对象存储**：阿里云提供的海量、安全、低成本、高可靠的云存储服务。支持在任何应用、任何时间、任何地点存储和访问任意类型的数据。
- **分布式任务调度**：提供秒级、精准、高可靠、高可用的定时（基于 Cron 表达式）任务调度服务。同时提供分布式的任务执行模型，如网格任务。网格任务支持海量子任务均匀分配到所有 Worker（schedulerx-client）上执行。
- **阿里云短信服务**：覆盖全球的短信服务，友好、高效、智能的互联化通讯能力，帮助企业迅速搭建客户触达通道。

## 2.3 SpringCloud Alibaba 核心组件

**[Sentinel](https://github.com/alibaba/Sentinel)**：把流量作为切入点，从流量控制、熔断降级、系统负载保护等多个维度保护服务的稳定性。

**[Nacos](https://github.com/alibaba/Nacos)**：一个更易于构建云原生应用的动态服务发现、配置管理和服务管理平台。

**[RocketMQ](https://rocketmq.apache.org/)**：一款开源的分布式消息系统，基于高可用分布式集群技术，提供低延时的、高可靠的消息发布与订阅服务。

**[Seata](https://github.com/seata/seata)**：阿里巴巴开源产品，一个易于使用的高性能微服务分布式事务解决方案。

**[Alibaba Cloud OSS](https://www.aliyun.com/product/oss)**: 阿里云对象存储服务（Object Storage Service，简称 OSS），是阿里云提供的海量、安全、低成本、高可靠的云存储服务。您可以在任何应用、任何时间、任何地点存储和访问任意类型的数据。

**[Alibaba Cloud SchedulerX](https://cn.aliyun.com/aliware/schedulerx)**: 阿里中间件团队开发的一款分布式任务调度产品，提供秒级、精准、高可靠、高可用的定时（基于 Cron 表达式）任务调度服务。

**[Alibaba Cloud SMS](https://www.aliyun.com/product/sms)**: 覆盖全球的短信服务，友好、高效、智能的互联化通讯能力，帮助企业迅速搭建客户触达通道。

## 2.4 分布式微服务技术选型

SpringCloud 原生组件的几大痛点：

（1）SpringCloud 部分组件停止维护和更新，给开发带来不便

（2）SpringCloud 部分环境搭建复杂，没有完善的可视化界面，需要大量的二次开发和定制

（3）SpringCloud 配置复杂，难以上手

SpringCloud Alibaba 的优势：

（1）阿里使用过的组件经历了考验，性能强悍，设计合理

（2）搭配完善的可视化界面给开发运维带来极大的便利，搭建简单，学习曲线低

分布式微服务技术选型建议：

SpringCloud Alibaba 组件为主，SpringCloud 为辅

# 第 3 章 微服务基础环境搭建

## 3.1 创建父工程，用于聚合其它微服务模块

### 3.1.1 SpringBoot 和 SpringCloud 的版本对应关系

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222128067.png)

### 3.1.2 实现步骤

（1）创建父项目，作为聚合其它微服务的模块

（2）项目设置，把所有的编码都设置成 UTF-8，把编译器设置成 JDK8

（3）删除 src，保留一个纯净的环境

（4）配置父工程 pom.xml，聚合其它模块

pom.xml

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.hspedu.springcloud</groupId>
  <artifactId>e-commerce-center</artifactId>

  <!--表明是一个父工程，聚合管理其它模块-->
  <packaging>pom</packaging>

  <version>1.0-SNAPSHOT</version>
  <name>e-commerce-center</name>
  <url>http://maven.apache.org</url>

  <!--版本指定-->
  <properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <maven.compiler.source>1.8</maven.compiler.source>
    <maven.compiler.target>1.8</maven.compiler.target>
    <junit.version>4.12</junit.version>
    <log4j.version>2.17.2</log4j.version>
    <lombok.version>1.18.20</lombok.version>
    <mysql.version>8.0.28</mysql.version>
    <druid.version>1.1.17</druid.version>
    <mybatis.spring.boot.version>2.2.0</mybatis.spring.boot.version>
  </properties>

  <!--dependencyManagement 配置各个依赖和版本-->
  <dependencyManagement>
    <dependencies>
      <!--配置了 SpringBoot-->
      <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-dependencies</artifactId>
        <version>2.2.2.RELEASE</version>
        <!--
          type: pom 和 scope: import 配合使用表示父项目的子模块在引入 springboot 相关依赖时，锁定版本为 2.2.2.RELEASE
          通过 pom + import 解决 maven 单继承机制
        -->
        <type>pom</type>
        <scope>import</scope>
      </dependency>

      <!--配置 SpringCloud-->
      <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-dependencies</artifactId>
        <version>Hoxton.SR1</version>
        <type>pom</type>
        <scope>import</scope>
      </dependency>

      <!--配置 SpringCloud Alibaba-->
      <dependency>
        <groupId>com.alibaba.cloud</groupId>
        <artifactId>spring-cloud-alibaba-dependencies</artifactId>
        <version>2.1.0.RELEASE</version>
        <type>pom</type>
        <scope>import</scope>
      </dependency>

      <!--配置 MySQL-->
      <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
        <version>${mysql.version}</version>
      </dependency>

      <!--配置 Druid-->
      <dependency>
        <groupId>com.alibaba</groupId>
        <artifactId>druid</artifactId>
        <version>${druid.version}</version>
      </dependency>

      <!--配置 SpringBoot 整合 MyBatis-->
      <dependency>
        <groupId>org.mybatis.spring.boot</groupId>
        <artifactId>mybatis-spring-boot-starter</artifactId>
        <version>${mybatis.spring.boot.version}</version>
      </dependency>

      <!--配置 log4j-->
      <dependency>
        <groupId>org.apache.logging.log4j</groupId>
        <artifactId>log4j</artifactId>
        <version>${log4j.version}</version>
      </dependency>

      <dependency>
        <groupId>junit</groupId>
        <artifactId>junit</artifactId>
        <version>${junit.version}</version>
      </dependency>

      <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <version>${lombok.version}</version>
      </dependency>

    </dependencies>
  </dependencyManagement>

</project>
```

### 3.1.3 注意事项和细节

Maven 的 dependencyManagement 说明：

（1）Maven 使用 dependencyManagement 元素来提供了一种管理依赖版本号的方式，通常在项目的 packaging 为 pom 中使用 dependencyManagement 元素

（2）使用 pom.xml 中的 dependencyManagement 元素能让所有子项目中引用一个依赖，Maven 会沿着父子层次向上走，直到找到一个拥有 dependencyManagement 元素的项目，然后它就会使用这个 dependencyManagement 元素中指定的版本号

（3）如果有多个子项目都引用同一个依赖，则可以避免在每个使用的子项目里都声明一个版本号，当升级或切换到另一个版本时，只需要在顶层父容器里更新，而不需要分别在子项目里修改，另外如果某个子项目需要另外的一个版本，只需要声明 version 就可以

（4）dependencyManagement 里只是声明依赖，并不实现引入，因此子项目需要显式的声明需要用的依赖

（5）如果不在子项目中声明依赖，是不会从父项目中继承下来的，只有在子项目中写了该依赖项，并且没有指定具体版本，才会从父项目中继承该项，并且 version 和 scope 都读取自父 pom

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222128452.png)

（6）如果子项目中指定了版本号，那么会使用子项目中指定的 jar 的版本

## 3.2 创建会员中心微服务模块 - service provider

### 3.2.1 需求说明

（1）通过浏览器可以获取会员信息（通过会员中心微服务模块）

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222128835.png)

（2）使用 Postman 测试查询服务

（3）使用 Postman 测试添加服务

### 3.2.2 思路分析

（1）创建 Module 完成配置

（2）创建数据库/表

（3）创建 entity、mapper、service、controller

（4）完成测试

### 3.2.3 实现步骤

### 3.2.3.1 创建 Module 完成配置

（1）创建 member-service-provider-10000 微服务模块【提供会员服务】

（2）修改 member-service-provider-10000 的 pom.xml，加入相关依赖

pom.xml

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>com.hspedu.springcloud</groupId>
        <artifactId>e-commerce-center</artifactId>
        <version>1.0-SNAPSHOT</version>
    </parent>
    <artifactId>member-service-provider-10000</artifactId>
    <packaging>war</packaging>
    <name>member-service-provider-10000 Maven Webapp</name>
    <url>http://maven.apache.org</url>
    <dependencies>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>3.8.1</version>
            <scope>test</scope>
        </dependency>

        <!--引入相关的依赖-->

        <!--引入 web-starter, 这里使用版本仲裁，由父项目决定，从父项目继承了版本-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <!--starter-actuator 是 SpringBoot 程序的监控系统，可以实现系统的健康检测
            可以通过 http://localhost:10000/actuator 看到相关的连接和信息
        -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>

        <!--引入 mybatis-starter 整合到 SpringBoot-->
        <dependency>
            <groupId>org.mybatis.spring.boot</groupId>
            <artifactId>mybatis-spring-boot-starter</artifactId>
        </dependency>

        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid-spring-boot-starter</artifactId>
            <!--这里需要指定版本，因为父项目没指定-->
            <version>1.1.17</version>
        </dependency>

        <!--版本仲裁-->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-jdbc</artifactId>
        </dependency>

        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
        </dependency>
    </dependencies>
    <build>
        <finalName>member-service-provider-10000</finalName>
    </build>
</project>
```

（3）创建 resources/application.yml

```yaml
server:
  port: 8080

spring:
  application:
    name: member-service-provider-10000
  datasource:
    type: com.alibaba.druid.pool.DruidDataSource
    url: jdbc:mysql://localhost:3306/springboot_mybatis
    username: root
    password: 123456
mybatis:
  mapper-locations: classpath:mapper/*.xml #指定 mapper.xml 文件的位置
  type-aliases-package: com.hspedu.springcloud.entity # 实体类所在的包，以后引用就可以直接通过类名进行简写
```

（4）创建主启动类 MemberApplication

```java
@SpringBootApplication
public class MemberApplication {
    public static void main(String[] args) {
        SpringApplication.run(MemberApplication.class, args);
    }
}
```

#### 3.2.3.2 创建数据库/表

```sql
create database e_commerce_center_db;
use e_commerce_center_db;
create table member(
    id bigint primary key not null auto_increment comment 'id',
    name varchar(64) comment '用户名',
    pwd char(32) comment '密码',
    mobile varchar(32) comment '手机号码',
    email varchar(64) comment '邮箱',
    gender tinyint comment '性别'
);
insert into member values (null, 'smith', MD5('123'), '123456789', 'smith@sohu.com', 1);

select * from member;
```

#### 3.2.3.3 业务实现

（1）entity

Member

```java
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Member {
    private Long id;
    private String name;
    private String pwd;
    private String mobile;
    private String email;
    private Integer gender;
}
```

Result

```java
public class Result<T> {
    private String code; //状态码
    private String msg; //对状态的说明
    private T data; //返回时携带的数据，为了扩展性好，这里使用泛型

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public Result() {
    }

    public Result(T data) {
        this.data = data;
    }

    //返回需要的 Result 对象 - 表示成功的 Result
    public static Result success() {
        Result<Object> result = new Result<>();
        result.setCode("200");
        result.setMsg("success");
        return result;
    }

    //返回需要的 Result 对象 - 表示成功的 Result,同时可以携带数据
//如果需要在 static 方法中使用泛型，需要指明泛型，写成 static <T>
    public static <T> Result<T> success(T data) {
        Result<T> result = new Result<>(data);
        result.setCode("200");
        result.setMsg("success");
        return result;
    }

    //返回需要的 Result 对象 - 表示失败的 Result
    public static Result error(String code, String msg) {
        Result<Object> result = new Result<>();
        result.setCode(code);
        result.setMsg(msg);
        return result;
    }

    //返回需要的 Result 对象 - 表示失败的 Result,同时可以携带数据
//如果需要在 static 方法中使用泛型，需要指明泛型，写成 static <T>
    public static <T> Result<T> error(String code, String msg, T data) {
        Result<T> result = new Result<>(data);
        result.setCode(code);
        result.setMsg(msg);
        return result;
    }
}
```

（2） Dao

接口 MemberDao

```java
public interface MemberDao {
    //根据 id 返回 member 数据
    public Member queryMemberById(Long id);

    //添加 member
    public int save(Member member);
}
```

实现类 MemberMapper.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<!--namespace 指定和哪个接口关联-->
<mapper namespace="com.hspedu.springcloud.dao.MemberDao">
    <!--配置实现 queryMemberById-->
    <resultMap id="BaseResultMap" type="com.hspedu.springcloud.entity.Member">
        <id column="id" property="id" jdbcType="BIGINT"></id>
        <id column="name" property="name" jdbcType="VARCHAR"></id>
        <id column="pwd" property="pwd" jdbcType="VARCHAR"></id>
        <id column="mobile" property="mobile" jdbcType="VARCHAR"></id>
        <id column="email" property="email" jdbcType="VARCHAR"></id>
        <id column="gender" property="gender" jdbcType="TINYINT"></id>
    </resultMap>
    <select id="queryMemberById" parameterType="Long" resultMap="BaseResultMap">
        select * from member where id = #{id}
    </select>

    <!--配置实现 save-->
    <insert id="save" parameterType="Member" useGeneratedKeys="true" keyProperty="id">
        insert into member(name, pwd, mobile, email, gender) values (#{name}, MD5(#{pwd}), #{mobile}, #{email}, #{gender});
    </insert>
</mapper>
```

（3）service

接口

```java
public interface MemberService {
    //根据 id 返回 member
    public Member queryMemberById(Long id);

    //添加 member
    public int save(Member member);
}
```

实现类

```java
@Service
public class MemberServiceImpl implements MemberService {
    @Resource
    private MemberDao memberDao;

    @Override
    public Member queryMemberById(Long id) {
        return memberDao.queryMemberById(id);
    }

    @Override
    public int save(Member member) {
        return memberDao.save(member);
    }
}
```

（4）Controller

```java
@Slf4j
@RestController
public class MemberController {
    @Resource
    private MemberService memberService;

    @PostMapping("/member/save")
    public Result save(Member member) {
        int affected = memberService.save(member);
        if (affected > 0) {
            return Result.success("添加会员成功", affected);
        } else {
            return Result.error("401", "添加会员失败");
        }
    }

    @GetMapping("/member/get/{id}")
    public Result getMemberById(@PathVariable("id") Long id) {
        Member member = memberService.queryMemberById(id);
        if (member != null) {
            return Result.success("查询成功", member);
        } else {
            return Result.error("402", "Id = " + id + "不存在");
        }
    }
}
```

（5）Result

```java
public class Result<T> {
    private String code; //状态码
    private String msg; //对状态的说明
    private T data; //返回时携带的数据，为了扩展性好，这里使用泛型

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public Result() {
    }

    public Result(T data) {
        this.data = data;
    }

    //返回需要的 Result 对象 - 表示成功的 Result
    public static Result success() {
        Result<Object> result = new Result<>();
        result.setCode("200");
        result.setMsg("success");
        return result;
    }

    //返回需要的 Result 对象 - 表示成功的 Result,同时可以携带数据
//如果需要在 static 方法中使用泛型，需要指明泛型，写成 static <T>
    public static <T> Result<T> success(T data) {
        Result<T> result = new Result<>(data);
        result.setCode("200");
        result.setMsg("success");
        return result;
    }

    //返回需要的 Result 对象 - 表示成功的 Result,同时可以携带数据和指定 msg
//如果需要在 static 方法中使用泛型，需要指明泛型，写成 static <T>
    public static <T> Result<T> success(String msg, T data) {
        Result<T> result = new Result<>(data);
        result.setCode("200");
        result.setMsg(msg);
        return result;
    }

    //返回需要的 Result 对象 - 表示失败的 Result
    public static Result error(String code, String msg) {
        Result<Object> result = new Result<>();
        result.setCode(code);
        result.setMsg(msg);
        return result;
    }

    //返回需要的 Result 对象 - 表示失败的 Result,同时可以携带数据
//如果需要在 static 方法中使用泛型，需要指明泛型，写成 static <T>
    public static <T> Result<T> error(String code, String msg, T data) {
        Result<T> result = new Result<>(data);
        result.setCode(code);
        result.setMsg(msg);
        return result;
    }
}

```

#### 3.2.3.4 完成测试

（1）Dao

```java
@SpringBootTest
@Slf4j
public class MemberApplicationTest {
    @Resource
    private MemberDao memberDao;

    @Test
    public void queryMemberById() {
        Member member = memberDao.queryMemberById(1L);
        log.info("member = {}", member);
    }

    @Test
    public void save() {
        Member member = new Member(null, "牛魔王", "123", "13000000000", "nmw@sohu.com", 1);
        int save = memberDao.save(member);
        System.out.println(save);
    }
}
```

（2）Service

```java
@SpringBootTest
@Slf4j
public class MemberApplicationTest {
    @Resource
    private MemberDao memberDao;

    @Resource
    private MemberService memberService;

    @Test
    public void queryMemberById() {
        Member member = memberService.queryMemberById(1L);
        log.info("member = {}", member);
    }

    @Test
    public void save() {
        Member member = new Member(null, "牛魔王2", "123", "13000000000", "nmw@sohu.com", 1);
        int save = memberService.save(member);
        System.out.println(save);
    }
}
```

## 3.3 创建使用会员微服务模块 - service consumer

### 3.3.1 需求说明

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222128637.png)

### 3.3.2 思路分析

（1）创建 Module（member-service-consumer-80） 完成配置

（2）创建 controller

（3）完成测试

### 3.3.3 实现步骤

#### 3.3.3.1 创建 Module 完成配置

（1）pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>com.hspedu.springcloud</groupId>
        <artifactId>e-commerce-center</artifactId>
        <version>1.0-SNAPSHOT</version>
    </parent>

    <artifactId>member-service-consumer-80</artifactId>

    <dependencies>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>3.8.1</version>
            <scope>test</scope>
        </dependency>

        <!--引入相关的依赖-->

        <!--引入 web-starter, 这里使用版本仲裁，由父项目决定，从父项目继承了版本-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <!--starter-actuator 是 SpringBoot 程序的监控系统，可以实现系统的健康检测
            可以通过 http://localhost:10000/actuator 看到相关的连接和信息
        -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>

        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
        </dependency>
    </dependencies>

    <properties>
        <maven.compiler.source>8</maven.compiler.source>
        <maven.compiler.target>8</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>

</project>
```

（2）application.yml

```yaml
server:
  port: 80
spring:
  application:
    name: member-service-consumer-80
```

（3）主启动类

```java
@SpringBootApplication
public class MemberConsumerApplication {
    public static void main(String[] args) {
        SpringApplication.run(MemberConsumerApplication.class, args);
    }
}
```

#### 3.3.3.2 业务实现

（1）entity

Member、Result 和前面的一样

（2）注入 RestTemplate

1. RestTemplate 基本介绍

​		1）RestTemplate 是 Spring 提供的用于访问 Rest 服务的模板类

​		2）RestTemplate 提供了多种便捷访问远程 Http 服务的方法

​		3）通过 RestTemplate，我们可以发出 http 请求【支持 Restful 风格】去调用别的模块的 Controller 提供的 API 接口，就像使用浏览器发出 http 请求调用该 API 接口一样

2. 创建配置类

com/hspedu/springcloud/config/CustomizationBean.java

```java
//配置注入 RestTemplate 对象
@Configuration
public class CustomizationBean {
    @Bean
    public RestTemplate getRestTemplate() {
        return new RestTemplate();
    }
}
```

（3）controller

```java
@RestController
@Slf4j
public class MemberConsumerController {
    //定义 member_service_provider_url 这是一个基础 url 地址
    public static final String MEMBER_SERVICE_PROVIDER_URL = "http://localhost:10000";

    //装配 RestTemplate
    @Resource
    private RestTemplate restTemplate;

    //编写方法，添加 member 对象到数据库
    @PostMapping("/member/consumer/save")
    public Result<Member> save(Member member) {
        /**
         * MEMBER_SERVICE_PROVIDER_URL + "/member/save" => http://localhost:10000/member/save
         * member 就是通过 RestTemplate 发出的 post 请求携带的数据
         * Result.class 返回对象类型
         */
        return restTemplate.postForObject(MEMBER_SERVICE_PROVIDER_URL + "/member/save", member, Result.class);
    }
}
```

因为消费方是通过 RestTemplate 的方式向服务方的 controller 发送的请求，并且数据是以对象的形式发送，所以 RestTemplate 是以 json 的格式发送的数据，所以服务方的 controller 在接收参数时需要加上注解 @RequestBody

```java
//编写方法，根据 id，调用服务接口，返回 member 对象信息
    @GetMapping("/member/consumer/get/{id}")
    public Result<Member> getMemberById(@PathVariable("id") Long id) {
        return restTemplate.getForObject(MEMBER_SERVICE_PROVIDER_URL + "/member/get/" + id, Result.class);
    }
```

#### 3.3.3.3 注意事项和细节

##### 3.3.3.3.1 开启 Run DashBoard

（1）Run DashBoard 介绍

当 SpringCloud 的服务有多个时，管理多个服务的启动使用 run 会不好管理，这样可以使用 Run DashBoard

## 3.4 创建共用模块 - 供其它模块使用

### 3.4.1 需求说明

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222128708.png)

### 3.4.2 思路分析

（1）创建 Module 完成配置

（2）创建 entity，把共用的实体类放到对应的包下

（3）完成测试

### 3.4.3 实现步骤

#### 3.4.3.1 创建 Module 完成配置

（1）创建 e_commerce_center-common-api

（2）修改 e_commerce_center-common-api 的 pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>com.hspedu.springcloud</groupId>
        <artifactId>e-commerce-center</artifactId>
        <version>1.0-SNAPSHOT</version>
    </parent>

    <artifactId>e_commerce_center-common-api</artifactId>

    <!--引入公共模块需要的依赖-->
    <dependencies>
        <!--lombok-->
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <!--
                <optional>true</optional> 其中 true 表示两个项目之间依赖不传递
                这里可以理解为 <optional>true</optional> 用于防止将该依赖传递到其它模块中，比如 member-service-consumer-80 模块依赖了本项目，
                但是本项目不会把 lombok 传递给 member-service-consumer-80,不设置 optional 或者设置 optional 为 false 表示传递依赖
            -->
            <optional>true</optional>
        </dependency>
    </dependencies>
    <properties>
        <maven.compiler.source>8</maven.compiler.source>
        <maven.compiler.target>8</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>
</project>
```

#### 3.4.3.2 抽取共用 API/类

Member.java

复制前面的

Result.java

复制前面的

#### 3.4.3.3 使用 Maven 打包成 jar

#### 3.4.3.4 工程重构

（1）在 member-service-provider-10000 引入打包好的 jar，在 pom.xml 中引入

```xml
<!--在 member-service-provider-10000 引入打包好的 jar-->
        <dependency>
            <groupId>com.hspedu.springcloud</groupId>
            <artifactId>e_commerce_center-common-api</artifactId>
            <version>1.0-SNAPSHOT</version>
        </dependency>
```

（2）在 member-service-consumer-80 引入打包好的 jar，在 pom.xml 中引入

```xml
<!--在 member-service-consumer-80 引入打包好的 jar,即公共服务模块-->
        <dependency>
            <groupId>com.hspedu.springcloud</groupId>
            <artifactId>e_commerce_center-common-api</artifactId>
            <version>1.0-SNAPSHOT</version>
        </dependency>
```

（3）启动微服务模块 member-service-provider-10000 和 member-service-consumer-80

# 第 4 章 SpringCloud Eureka 服务注册与发现（服务注册中心）

## 4.1 Eureka 介绍

### 4.1.1 学 Eureka 前的说明

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222128162.png)

从上图可以看出，目前主流的服务注册发现的组件是 Nacos，但是 Eureka 作为一个老牌经典的服务注册发现技术还是要学习一下，因为一些早期的分布式微服务项目使用的是 Eureka，还有就是后期的服务注册发现组件都参考了 Eureka 设计和理念

### 4.1.2 当前项目架构问题分析 - 引出 Eureka

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222129029.png)

现有问题分析：

（1）在企业级项目中，服务消费方访问请求会存在高并发，那么只有一个提供服务方能不能撑得住？

（2）如果只有一个提供服务方，那么如果这唯一一个提供服务方瘫痪了怎么办？

（3）所以，会员中心提供服务方往往是一个集群，也就是说会有多个会员中心提供服务方

（4）那么，服务消费方怎么去发现可以使用的提供服务方？

（5）当服务消费方发现了可以使用的服务后（可以是多个），到底是调用 A 服务，还是调用 B 服务呢？

（6）这就引出了服务注册和负载均衡，Eureka 就可以解决上述的问题

### 4.1.3 引入 Eureka 项目架构

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222129368.png)

解读：

（1）提供服务方在项目中，会做成集群，提供高可用

（2）Eureka Server 有必要的话，也可以做成集群

（3）Eureka 包含两个组件 Eureka Server 和 Eureka Client

（4）Eureka Server 提供注册服务，各个微服务节点（即服务提供方和服务消费方）通过配置启动后，会在 Eureka Server 中进行注册，这样 Eureka Server 中的服务注册表中将会存储所有可用服务节点的信息，服务节点的信息可以在界面中直观看到

（5）Eureka Client 通过注册中心进行访问，是一个 Java 客户端，用于简化 Eureka Server 的交互，客户端同时也具备一个内置的、使用轮询（round-robin）负载算法的负载均衡器，在应用启动后，将会向 Eureka Server 发送心跳（默认周期为 30 秒），如果 Eureka Server 在多个心跳周期内没有接收到某个节点的心跳，Eureka Server 将会从服务注册表中把这个服务节点移除（默认 90 秒）

### 4.1.4 服务治理

Eureka 实现服务治理，在传统的 rpc 远程调用框架中，管理每个服务与服务之间的依赖关系比较复杂，管理困难，所以需要使用服务治理管理服务之间的依赖关系

服务治理实现服务调用、负载均衡、容错等，实现服务发现与注册

### 4.1.5 再说分布式开发

在一个庞大的企业项目之中（业务很复杂、用户的访问量很高、信息的保密级很复杂），那么分布式的核心概念实际上非常简单，就是将在一台服务器上完成的计算操作分给两台甚至更多台的主机一起完成，这样的开发模式就称为分布式开发

### 4.1.6 服务注册和发现

（1）Eureka 采用了 CS 的设计架构，Eureka Server 作为服务注册功能的服务器，它是服务注册的中心

（2）系统中的其它微服务，使用 Eureka 的客户端连接到 Eureka Server 并维持心跳连接，通过 Eureka Server 来监控系统中各个微服务是否正常运行

（3）在服务注册与发现中，有一个注册中心，当服务器启动的时候，会把当前自己服务器的信息，比如服务地址通讯地址等以别名的方式注册到注册中心上

（4）服务消费者或者服务提供者以服务别名的方式去注册中心上获取到实际的服务提供者的通讯地址，然后通过 RPC 调用服务

## 4.2 创建只有一个 Eureka Server 的注册中心

### 4.2.1 需求说明

创建只有一个 Eureka Server 的注册中心

### 4.2.2 实现步骤

（1）创建 Module 完成配置

创建 e-commerce-eureka-server-9001 微服务模块（作为注册中心）

修改 e-commerce-eureka-server-9001 的 pom.xml，加入依赖

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>com.hspedu.springcloud</groupId>
        <artifactId>e-commerce-center</artifactId>
        <version>1.0-SNAPSHOT</version>
    </parent>

    <artifactId>e-commerce-eureka-server-9001</artifactId>

    <dependencies>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>3.8.1</version>
            <scope>test</scope>
        </dependency>

        <!--引入相关的依赖-->

        <!--引入 web-starter, 这里使用版本仲裁，由父项目决定，从父项目继承了版本-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <!--starter-actuator 是 SpringBoot 程序的监控系统，可以实现系统的健康检测
            可以通过 http://localhost:9001/actuator 看到相关的连接和信息
        -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>


        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
        </dependency>

        <!--在 member-service-provider-10000 引入打包好的 jar-->
        <dependency>
            <groupId>com.hspedu.springcloud</groupId>
            <artifactId>e_commerce_center-common-api</artifactId>
            <version>1.0-SNAPSHOT</version>
        </dependency>

        <!--引入 Eureka-server 场景启动器 starter,使用版本仲裁-->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
        </dependency>
    </dependencies>

    <properties>
        <maven.compiler.source>8</maven.compiler.source>
        <maven.compiler.target>8</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>
</project>
```

创建 resources/application.yml

```yaml
server:
  port: 9001

#配置 Eureka-server
eureka:
  instance:
    hostname: localhost #服务实例名
  client:
    #不向注册中心注册自己
    register-with-eureka: false
    #表示自己就是注册中心，作用就是维护注册的服务实例，不需要去检索服务
    fetch-registry: false
    service-url:
      #设置与 Eureka server 交互模块，查询服务和注册服务都需要依赖这个地址
      defaultZone: http://${eureka.instance.hostname}:${server.port}/eureka/
```

创建主启动类 com/hspedu/springcloud/EurekaApplication.java

```java
//@EnableEurekaServer 表示该程序作为 EurekaServer
@EnableEurekaServer
@SpringBootApplication
public class EurekaApplication {
    public static void main(String[] args) {
        SpringApplication.run(EurekaApplication.class, args);
    }
}
```

（2）完成测试

浏览器输入 localhost:9001 显示页面

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222129420.png)

### 4.2.3 将 member-service-provider-10000 作为 EurekaClient 注册到 e-commerce-eureka-server-9001 成为服务提供者

#### 4.2.3.1 架构示意图

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222129636.png)

#### 4.2.3.2 修改 member-service-provider-10000 的 pom.xml

引入 Eureka-Client 场景启动器 starter

```xml
<!--引入 Eureka-Client 场景启动器 starter,使用版本仲裁-->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
        </dependency>
```

#### 4.2.3.3 修改 member-service-provider-10000 的 resources/application.yml

```yaml
#配置 EurekaClient
eureka:
  client:
    register-with-eureka: true #将自己注册到 Eureka-Server
    fetch-registry: true #表示从 Eureka-Server 获取注册信息，如果只有一个提供方可以不用获取注册信息，但是当是集群时，提供方之间也要获取注册信息，所以这里设置成 true
    service-url:
      #表示将自己注册到哪个 Eureka-Server
      defaultZone: http://localhost:9001/eureka
```

#### 4.2.3.4 修改 member-service-provider-10000 的 com/hspedu/springcloud/MemberApplication.java

```java
//@EnableEurekaClient 将该程序标识为 EurekaClient
@EnableEurekaClient
@SpringBootApplication
public class MemberApplication {
    public static void main(String[] args) {
        SpringApplication.run(MemberApplication.class, args);
    }
}
```

#### 4.2.3.5 完成测试

（1）启动 e-commerce-eureka-server-9001

（2）启动 member-service-provider-10000

（3）浏览器访问 http://localhost:9001

（4）微服务注册名配置说明

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222129602.png)

### 4.2.4 将 member-service-consumer-80 作为 EurekaClient 注册到 e-commerce-eureka-server-9001 成为服务消费者可以获取/拉取 e-commerce-eureka-server-9001 提供的服务信息

#### 4.2.4.1 架构示意图

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222129963.png)

#### 4.2.4.2 修改 pom.xml

```xml
<!--引入 Eureka Client 场景启动器 starter-->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
        </dependency>
```

#### 4.2.4.3 修改 application.yml

```yaml
#配置 EurekaClient
eureka:
  client:
    register-with-eureka: true #将自己注册到 Eureka-Server
    fetch-registry: true #表示从 Eureka-Server 获取注册信息，如果只有一个提供方可以不用获取注册信息，但是当是集群时，提供方之间也要获取注册信息，所以这里设置成 true
    service-url:
      #表示将自己注册到哪个 Eureka-Server
      defaultZone: http://localhost:9001/eureka
```

#### 4.2.4.4 修改 MemberConsumerApplication.java

```java
@EnableEurekaClient
@SpringBootApplication
public class MemberConsumerApplication {
    public static void main(String[] args) {
        SpringApplication.run(MemberConsumerApplication.class, args);
    }
}
```

#### 4.2.4.5 完成测试

（1）启动注册中心

（2）启动消费服务

（3）浏览器：http://localhost:9001

### 4.2.5 Service Consumer、Service Provider、EurekaServer 的维护机制

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222129682.png)

### 4.2.6 Eureka 的自我保护模式

#### 4.2.6.1 自我保护模式理论

（1）在默认情况下，Eureka 启动了自我保护模式（如图红字）

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222129834.png)

（2）默认情况下 EurekaClient 定时向 EurekaServer 端发送心跳包，如果 EurekaServer 端在一定时间内（默认 90 秒）没有收到 EurekaClient 发送的心跳包，便会直接从服务注册列表中剔除该服务

（3）如果 Eureka 开启了自我保护模式，那么在短时间（90 秒）内丢失了大量的服务实例心跳（该现象可能出现在如果网络不通或者阻塞），这时候 EurekaServer 会开启自我保护机制，不会剔除该服务，因为客户端还能正常发送心跳，只是网络延迟问题，而保护机制是为了解决此问题而产生的

（4）自我保护是属于 CAP 里面的 AP 分支，保证高可用和分区容错性

（5）自我保护模式是一种应对网络异常的安全保护措施，它的架构哲学是宁可同时保留所有微服务（健康的微服务和不健康的微服务都会保留）也不盲目注销任何健康的微服务。使用自我保护模式，可以让 Eureka 集群更加的健壮稳定

#### 4.2.6.2 禁用自我保护模式（生产环境中一般不禁用）

## 4.3 创建 EurekaServer 集群 - 实现负载均衡及故障容错

### 4.3.1 为什么需要集群 Eureka Server

因为微服务 RPC 远程服务调用最核心的是实现高可用，如果注册中心只有一个，它出故障会导致整个服务环境不可用，所以需要搭建 Eureka 注册中心集群，实现负载均衡 + 故障容错

### 4.3.2 需求分析

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222129835.png)

### 4.3.3 搭建 Eureka Server 集群

#### 4.3.3.1 创建 e-commerce-eureka-server-9002 微服务模块（作为注册中心）

（1）创建步骤和 e-commerce-eureka-server-9001 一样

（2）修改 pom.xml，加入依赖，和 9001 一样

（3）创建 resources/application.yml

9002

```yaml
server:
  port: 9002

#配置 Eureka-server
eureka:
  instance:
    hostname: eureka9002.com #服务实例名
  client:
    #不向注册中心注册自己
    register-with-eureka: false
    #表示自己就是注册中心，作用就是维护注册的服务实例，不需要去检索服务
    fetch-registry: false
    service-url:
      #这里注册到 eureka9001，相互注册
      defaultZone: http://eureka9001.com:9001/eureka/
```

（4）创建主启动类 EurekaApplication9002.java，和 9001 一样

#### 4.3.3.2 修改 e-commerce-eureka-server-9001 微服务模块

修改 9001 的 yaml

```yaml
server:
  port: 9001

#配置 Eureka-server
eureka:
  instance:
    hostname: eureka9001.com #服务实例名
  client:
    #不向注册中心注册自己
    register-with-eureka: false
    #表示自己就是注册中心，作用就是维护注册的服务实例，不需要去检索服务
    fetch-registry: false
    service-url:
      #设置与 Eureka server 交互模块，查询服务和注册服务都需要依赖这个地址
      #defaultZone: http://${eureka.instance.hostname}:${server.port}/eureka/
      #相互注册，这里应该注册到 eureka server 9002
      defaultZone: http://eureka9002.com:9002/eureka/
```

#### 4.3.3.3 修改 hosts 文件

C:\Windows\System32\drivers\etc

```java
# Copyright (c) 1993-2009 Microsoft Corp.
#
# This is a sample HOSTS file used by Microsoft TCP/IP for Windows.
#
# This file contains the mappings of IP addresses to host names. Each
# entry should be kept on an individual line. The IP address should
# be placed in the first column followed by the corresponding host name.
# The IP address and the host name should be separated by at least one
# space.
#
# Additionally, comments (such as these) may be inserted on individual
# lines or following the machine name denoted by a '#' symbol.
#
# For example:
#
#      102.54.94.97     rhino.acme.com          # source server
#       38.25.63.10     x.acme.com              # x client host

# localhost name resolution is handled within DNS itself.
#	127.0.0.1       localhost
#	::1             localhost
127.0.0.1 localhost
127.0.0.1 eureka9001.com
127.0.0.1 eureka9002.com
127.0.0.1 nacos9022.com
192.168.56.100 hspliving.com
192.168.12.134 www.hsp.com
192.168.12.134 www.hspmall.com
```

#### 4.3.3.4 完成测试

（1）启动 e-commerce-eureka-server-9001

（2）启动 e-commerce-eureka-server-9002

（3）浏览器输入 http://eureka9001.com:9001

（4）浏览器输入 http://eureka9001.com:9002

#### 4.3.3.5 将 member-service-provider-10000 注册到 EurekaServer 集群

修改 yaml 配置文件

```yaml
server:
  port: 10000

spring:
  application:
    name: member-service-provider-10000
  datasource:
    type: com.alibaba.druid.pool.DruidDataSource
    url: jdbc:mysql://localhost:3306/e_commerce_center_db
    username: root
    password: 123456
mybatis:
  mapper-locations: classpath:mapper/*.xml #指定 mapper.xml 文件的位置
  type-aliases-package: com.hspedu.springcloud.entity # 实体类所在的包，以后引用就可以直接通过类名进行简写

#配置 EurekaClient
eureka:
  client:
    register-with-eureka: true #将自己注册到 Eureka-Server
    fetch-registry: true #表示从 Eureka-Server 获取注册信息，如果只有一个提供方可以不用获取注册信息，但是当是集群时，提供方之间也要获取注册信息，所以这里设置成 true
    service-url:
      #表示将自己注册到哪个 Eureka-Server
      #将本微服务注册到多个 Eureka-Server，使用逗号间隔
      defaultZone: http://eureka9001.com:9001/eureka, http://eureka9002.com:9002/eureka
```

#### 4.3.3.6 将 member-service-consumer-80 注册到 EurekaServer 集群

修改 yaml 配置文件

```yaml
server:
  port: 80
spring:
  application:
    name: member-service-consumer-80

#配置 EurekaClient
eureka:
  client:
    register-with-eureka: true #将自己注册到 Eureka-Server
    fetch-registry: true #表示从 Eureka-Server 获取注册信息，如果只有一个提供方可以不用获取注册信息，但是当是集群时，提供方之间也要获取注册信息，所以这里设置成 true
    service-url:
      #表示将自己注册到哪个 Eureka-Server
      #将本微服务注册到多个 Eureka-Server，使用逗号间隔
      defaultZone: http://eureka9001.com:9001/eureka, http://eureka9002.com:9002/eureka
```

### 4.3.4 搭建会员中心服务提供方 - 集群

#### 4.3.4.1 架构示意图

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222129532.png)

#### 4.3.4.2 创建 member-service-provider-10002

（1）参考 member-service-provider-10000 来创建 member-service-provider-10002 即可

（2）创建好后，使用 member-service-provider-10000 的源码和配置替换 member-service-provider-10002 生成的代码

（3）不要忘记拷贝 resources/mapper/MemberMapper.xml 这些 xxx.xml 文件

#### 4.3.4.3 修改 resources/application.yml

```yaml
server:
  port: 10002

spring:
  application:
    name: member-service-provider-10002
  datasource:
    type: com.alibaba.druid.pool.DruidDataSource
    url: jdbc:mysql://localhost:3306/e_commerce_center_db
    username: root
    password: 123456
mybatis:
  mapper-locations: classpath:mapper/*.xml #指定 mapper.xml 文件的位置
  type-aliases-package: com.hspedu.springcloud.entity # 实体类所在的包，以后引用就可以直接通过类名进行简写

#配置 EurekaClient
eureka:
  client:
    register-with-eureka: true #将自己注册到 Eureka-Server
    fetch-registry: true #表示从 Eureka-Server 获取注册信息，如果只有一个提供方可以不用获取注册信息，但是当是集群时，提供方之间也要获取注册信息，所以这里设置成 true
    service-url:
      #表示将自己注册到哪个 Eureka-Server
      #将本微服务注册到多个 Eureka-Server，使用逗号间隔
      defaultZone: http://eureka9001.com:9001/eureka, http://eureka9002.com:9002/eureka
```

#### 4.3.4.4 修改主启动类名

#### 4.3.4.5 完成测试

（1）启动 Eureka Server 集群

（2）启动 member-service-provider-10000

（3）启动 member-service-provider-10002

（4）测试页面

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222129496.png)

#### 4.3.4.6 注意事项和细节

（1）因为 member-service-provider-10000 和 member-service-provider-10002 作为一个集群提供服务，因此需要将 spring.application.name 进行统一

（2）这样消费方通过统一的别名进行负载均衡调用

10000 的别名改成，在 yaml 文件中

```yaml
spring:
  application:
    name: member-service-provider
```

10002 的别名改成

```java
spring:
  application:
    name: member-service-provider
```

两者保持一致

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222129260.png)

### 4.3.5 配置服务消费端 member-service-consumer-80 使用会员中心服务集群

#### 4.3.5.1 架构示意图

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222130030.png)

#### 4.3.5.2 修改 MemberConsumerController.java

```java
@RestController
@Slf4j
public class MemberConsumerController {
    //定义 member_service_provider_url 这是一个基础 url 地址
    //public static final String MEMBER_SERVICE_PROVIDER_URL = "http://localhost:10000"; //这里要写成提供服务的模块的注册别名
    /**
     * "http://MEMBER-SERVICE-PROVIDER" 中的 MEMBER-SERVICE-PROVIDER 就是服务提供方[集群]注册到 Eureka Server 的别名
     * 也就是说服务提供方[集群]对外暴露的名称为 MEMBER-SERVICE-PROVIDER
     * MEMBER-SERVICE-PROVIDER 目前有两个 Availability Zones 分别是：member-service-provider:10002 和 member-service-provider:10000
     * 在配置 RestTemplate 的 CustomizationBean 配置类中还需要增加一个注解 @LoadBalanced 用于赋予 RestTemplate 负载均衡的能力，也就是会根据负载均衡算法来选择某个服务去访问，默认是轮询算法
     */
    public static final String MEMBER_SERVICE_PROVIDER_URL = "http://MEMBER-SERVICE-PROVIDER"; //这里要写成提供服务的模块的注册别名

    //装配 RestTemplate
    @Resource
    private RestTemplate restTemplate;

    //编写方法，添加 member 对象到数据库
    @PostMapping("/member/consumer/save")
    public Result<Member> save(Member member) {
        /**
         * MEMBER_SERVICE_PROVIDER_URL + "/member/save" => http://localhost:10000/member/save
         * member 就是通过 RestTemplate 发出的 post 请求携带的数据
         * Result.class 返回对象类型
         */
        return restTemplate.postForObject(MEMBER_SERVICE_PROVIDER_URL + "/member/save", member, Result.class);
    }

    //编写方法，根据 id，调用服务接口，返回 member 对象信息
    @GetMapping("/member/consumer/get/{id}")
    public Result<Member> getMemberById(@PathVariable("id") Long id) {
        return restTemplate.getForObject(MEMBER_SERVICE_PROVIDER_URL + "/member/get/" + id, Result.class);
    }
}
```

#### 4.3.5.3 修改 CustomizationBean.java

```java
//配置注入 RestTemplate 对象
@Configuration
public class CustomizationBean {
    /**
     * 这里的 @LoadBalanced 就是赋予 RestTemplate 负载均衡的能力
     * 默认是使用轮询算法来访问远程调用接口/地址
     */
    @Bean
    @LoadBalanced
    public RestTemplate getRestTemplate() {
        return new RestTemplate();
    }
}
```

#### 4.5.3.4 为了方便看效果，修改提供服务方的输出信息

10000

```java
@Slf4j
@RestController
public class MemberController {
    @Resource
    private MemberService memberService;

    @PostMapping("/member/save")
    public Result save(@RequestBody Member member) {
        int affected = memberService.save(member);
        if (affected > 0) {
            return Result.success("添加会员成功", affected);
        } else {
            return Result.error("401", "添加会员失败");
        }
    }

    @GetMapping("/member/get/{id}")
    public Result getMemberById(@PathVariable("id") Long id) {
        Member member = memberService.queryMemberById(id);
        if (member != null) {
            return Result.success("查询成功 member-service-provider:10000", member);
        } else {
            return Result.error("402", "Id = " + id + "不存在");
        }
    }
}
```

10002

```java
@Slf4j
@RestController
public class MemberController {
    @Resource
    private MemberService memberService;

    @PostMapping("/member/save")
    public Result save(@RequestBody Member member) {
        int affected = memberService.save(member);
        if (affected > 0) {
            return Result.success("添加会员成功", affected);
        } else {
            return Result.error("401", "添加会员失败");
        }
    }

    @GetMapping("/member/get/{id}")
    public Result getMemberById(@PathVariable("id") Long id) {
        Member member = memberService.queryMemberById(id);
        if (member != null) {
            return Result.success("查询成功 member-service-provider:10002", member);
        } else {
            return Result.error("402", "Id = " + id + "不存在");
        }
    }
}
```

#### 4.5.3.5 完成测试

（1）启动 Eureka Server 集群

（2）启动 member-service-provider-10000

（3）启动 member-service-provider-10002

（4）启动 member-service-consumer-80

（5）浏览器访问 http://localhost:80/member/consumer/get/1

#### 4.5.3.6 交替访问 member 服务说明

（1）注解 @LoadBalanced 底层是 Ribbon 支持算法

（2）Ribbon 和 Eureka 整合后 consumer 直接调用服务而不用再关心地址和端口号，且该服务还有负载功能

### 4.3.6 获取 Eureka Server 服务注册信息 DiscoveryClient

#### 4.3.6.1 需求分析

服务消费方或者服务提供方（Eureka Client）希望获取到 Eureka Server 的服务注册信息，可以通过 DiscoveryClient

这里以服务消费方去获取 Eureka Server 的服务注册信息为例

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222130798.png)

当然也可以在服务提供方获取 Eureka Server 的服务注册信息

#### 4.3.6.2 代码实现

MemberConsumerController

```java
@RestController
@Slf4j
public class MemberConsumerController {
    //定义 member_service_provider_url 这是一个基础 url 地址
    //public static final String MEMBER_SERVICE_PROVIDER_URL = "http://localhost:10000"; //这里要写成提供服务的模块的注册别名
    /**
     * "http://MEMBER-SERVICE-PROVIDER" 中的 MEMBER-SERVICE-PROVIDER 就是服务提供方[集群]注册到 Eureka Server 的别名
     * 也就是说服务提供方[集群]对外暴露的名称为 MEMBER-SERVICE-PROVIDER
     * MEMBER-SERVICE-PROVIDER 目前有两个 Availability Zones 分别是：member-service-provider:10002 和 member-service-provider:10000
     * 在配置 RestTemplate 的 CustomizationBean 配置类中还需要增加一个注解 @LoadBalanced 用于赋予 RestTemplate 负载均衡的能力，也就是会根据负载均衡算法来选择某个服务去访问，默认是轮询算法
     */
    public static final String MEMBER_SERVICE_PROVIDER_URL = "http://MEMBER-SERVICE-PROVIDER"; //这里要写成提供服务的模块的注册别名

    //装配 RestTemplate
    @Resource
    private RestTemplate restTemplate;

    //装配 DiscoveryClient
    @Resource
    private DiscoveryClient discoveryClient;

    @GetMapping("/member/consumer/discovery")
    public Object discovery() {
        List<String> services = discoveryClient.getServices();
        //遍历 services
        for (String service : services) {
            log.info("服务名 = {}", service);
            List<ServiceInstance> instances = discoveryClient.getInstances(service);
            for (ServiceInstance instance : instances) {
                log.info("id={},host={},port={},uri={}", instance.getServiceId(), instance.getHost(), instance.getPort(), instance.getUri());
            }
        }
        return discoveryClient;
    }

    //编写方法，添加 member 对象到数据库
    @PostMapping("/member/consumer/save")
    public Result<Member> save(Member member) {
        /**
         * MEMBER_SERVICE_PROVIDER_URL + "/member/save" => http://localhost:10000/member/save
         * member 就是通过 RestTemplate 发出的 post 请求携带的数据
         * Result.class 返回对象类型
         */
        return restTemplate.postForObject(MEMBER_SERVICE_PROVIDER_URL + "/member/save", member, Result.class);
    }

    //编写方法，根据 id，调用服务接口，返回 member 对象信息
    @GetMapping("/member/consumer/get/{id}")
    public Result<Member> getMemberById(@PathVariable("id") Long id) {
        return restTemplate.getForObject(MEMBER_SERVICE_PROVIDER_URL + "/member/get/" + id, Result.class);
    }
}
```

主程序加上注解 @EnableDiscoveryClient 用于启用服务发现

```java
@EnableEurekaClient
@SpringBootApplication
@EnableDiscoveryClient //启用服务发现
public class MemberConsumerApplication {
    public static void main(String[] args) {
        SpringApplication.run(MemberConsumerApplication.class, args);
    }
}
```

#### 4.3.6.3 测试

浏览器输入 http://localhost/member/consumer/discovery

## 4.4 Eureka 后续说明

# 第 5 章 SpringCloud Ribbon（服务负载均衡）

## 5.1 Ribbon 介绍

### 5.1.1 Ribbon 是什么

（1）SpringCloud Ribbon 是基于 Netflix Ribbon 实现的一套客户端负载均衡的工具

（2）Ribbon 主要功能是提供客户端负载均衡算法和服务调用

（3）Ribbon 客户端组件提供一系列完善的配置项，如连接超时、重试等

（4）Ribbon 会基于某种规则（如简单轮询、随机连接等）去连接指定服务

（5）程序员可以很容易使用 Ribbon 的负载均衡算法实现负载均衡

（6）总结：Ribbon：负载均衡 + RestTemplate 调用

### 5.1.2 Ribbon 进入维护状态

### 5.1.3 LB（Load Balance 负载均衡）

#### 5.1.3.1 LB 分类

（1）集中式 LB

即在服务的消费方和提供方之间使用独立的 LB 设施（可以是硬件，如F5，也可以是软件，如 Nginx），由该设施负责把访问的请求通过某种策略转发至服务的提供方

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222130593.png)

（2）进程内 LB

将 LB 逻辑集成到消费方，消费方从服务注册中心获知有哪些地址可用，然后再从这些地址中选择出一个合适的服务地址。

Ribbon 就属于进程内 LB，它只是一个类库，集成于消费方进程，消费方通过它来获取到服务提供方的地址

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222130578.png)

## 5.2 Ribbon 原理

### 5.2.1 Ribbon 架构图

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222130883.png)

### 5.2.2 Ribbon 常见的负载算法

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222130412.png)

## 5.3 替换负载均衡算法

### 5.3.1 需求分析

（1）将默认的轮询算法改成随机算法 RandomRule

（2）浏览器输入 http://localhost/member/consumer/get/1

（3）要求访问的 10000/10002 端口的服务是随机的

### 5.3.2 代码实现

在 member-service-consumer-80 创建 com/hspedu/springcloud/config/RibbonRule.java

```java
//配置自己的负载均衡算法
@Configuration
public class RibbonRule {
    //配置注入自己想要变成的负载均衡算法
    @Bean
    public IRule myRibbonRule() {
        //这里返回的是 RandomRule，即随机算法
        return new RandomRule();
    }
}
```

在主程序添加注解 @RibbonClient(name = "MEMBER_SERVICE_PROVIDER_URL", configuration = RibbonRule.class)

```java
@EnableEurekaClient
@SpringBootApplication
@EnableDiscoveryClient //启用服务发现
//指定 Ribbon 的负载均衡算法
@RibbonClient(name = "MEMBER_SERVICE_PROVIDER_URL", configuration = RibbonRule.class)
public class MemberConsumerApplication {
    public static void main(String[] args) {
        SpringApplication.run(MemberConsumerApplication.class, args);
    }
}
```

# 第 6 章 SpringCloud OpenFeign（服务调用）

## 6.1 OpenFeign 介绍

### 6.1.1 OpenFeign 是什么

（1）前面使用 Ribbon（负载均衡） + RestTemplate（远程调用） 实现远程调用，这里学习 OpenFeign 进行远程调用

（2）OpenFeign 是一个声明式 WebService 客户端，使用 OpenFeign 让编写 Web Service 客户端更简单

（3）它的使用方法是定义一个服务接口然后在上面添加注解

（4）OpenFeign 也支持可拔插式的编码器和解码器

（5）SpringCloud 对 OpenFeign 进行了封装使其支持了 SpringMVC 标准注解和 HttpMessageConverters

（6）OpenFeign 可以与 Eureka 和 Ribbon 组合使用以支持负载均衡

### 6.1.2 Feign 和 OpenFeign 的区别

（1）Feign

1）Feign 是 SpringCloud 组件中的一个轻量级 RESTful 的 Http 服务客户端

2）Feign 内置了 Ribbon，用来做客户端负载均衡，去调用服务注册中心的服务

3）Feign 的使用方式是：使用 Feign 的注解定义接口，调用服务注册中心的服务

4）Feign 本身不支持 SpringMVC 的注解，它有一套自己的注解

（2）

1）OpenFeign 是 SpringCloud 在 Feign 的基础上支持了 SpringMVC 的注解，如 @RequestMapping 等

2）OpenFeign 的 @FeignClient 可以解析 SpringMVC 的 @RequestMapping 注解下的接口

3）OpenFeign 通过动态代理的方式产生实现类，实现类中做负载均衡并调用其它服务

## 6.2 OpenFeign 应用实例

### 6.2.1 需求分析

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222130254.png)

### 6.2.2 创建服务消费模块 e-commerce-consumer-openfeign-80 - 通过 OpenFeign 实现远程调用

（1）修改 pom.xml 文件，加入 OpenFeign 场景启动器

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>com.hspedu.springcloud</groupId>
        <artifactId>e-commerce-center</artifactId>
        <version>1.0-SNAPSHOT</version>
    </parent>

    <artifactId>e-commerce-consumer-openfeign-80</artifactId>

    <dependencies>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>3.8.1</version>
            <scope>test</scope>
        </dependency>

        <!--引入相关的依赖-->

        <!--引入 web-starter, 这里使用版本仲裁，由父项目决定，从父项目继承了版本-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <!--starter-actuator 是 SpringBoot 程序的监控系统，可以实现系统的健康检测
            可以通过 http://localhost:80/actuator 看到相关的连接和信息
        -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>

        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
        </dependency>

        <!--在 member-service-consumer-80 引入打包好的 jar,即公共服务模块-->
        <dependency>
            <groupId>com.hspedu.springcloud</groupId>
            <artifactId>e_commerce_center-common-api</artifactId>
            <version>1.0-SNAPSHOT</version>
        </dependency>

        <!--引入 Eureka Client 场景启动器 starter-->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
        </dependency>

        <!--引入 OpenFeign starter 场景启动器-->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-openfeign</artifactId>
        </dependency>

    </dependencies>

    <properties>
        <maven.compiler.source>8</maven.compiler.source>
        <maven.compiler.target>8</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>
</project>
```

（2）修改 application.yml

```yaml
server:
  port: 80
spring:
  application:
    name: e-commerce-consumer-openfeign-80

#配置 EurekaClient
eureka:
  client:
    register-with-eureka: true #将自己注册到 Eureka-Server
    fetch-registry: true #表示从 Eureka-Server 获取注册信息，如果只有一个提供方可以不用获取注册信息，但是当是集群时，提供方之间也要获取注册信息，所以这里设置成 true
    service-url:
      #表示将自己注册到哪个 Eureka-Server
      #将本微服务注册到多个 Eureka-Server，使用逗号间隔
      defaultZone: http://eureka9001.com:9001/eureka, http://eureka9002.com:9002/eureka
```

（3）主程序

```java
@SpringBootApplication
@EnableEurekaClient
//启用 OpenFeignClient
@EnableFeignClients
public class MemberConsumerOpenfeignApplication {
    public static void main(String[] args) {
        SpringApplication.run(MemberConsumerOpenfeignApplication.class, args);
    }
}
```

（4）Service 层，接口，可能是因为生成代理对象，所以要在 Service 层写个接口

```java
@Component
//这里的 "MEMBER-SERVICE-PROVIDER" 会填充到下面的 url 里，MEMBER-SERVICE-PROVIDER 就是服务提供方在 Eureka Server 注册的服务名
@FeignClient(value = "MEMBER-SERVICE-PROVIDER")
public interface MemberFeignService {
    /**
     * 这里定义的方法就是远程调用的接口,直接复制要远程调用的接口的方法，这里 getMemberById 这个方法名可以不一致
     * 远程调用的 url： http://MEMBER-SERVICE-PROVIDER/member/get/{id}
     * MEMBER-SERVICE-PROVIDER 就是服务提供方在 Eureka Server 注册的服务名
     * OpenFeign 会根据负载均衡来决定调用 10000 还是 10002 - 默认是轮询
     * @param id
     * @return
     */
    @GetMapping("/member/get/{id}")
    public Result getMemberById(@PathVariable("id") Long id);
}
```

（5）controller 层

```java
@RestController
public class MemberConsumerFeignController {
    //装配 MemberFeignService
    @Resource
    private MemberFeignService memberFeignService;

    @GetMapping(value = "member/consumer/openfeign/get/{id}")
    public Result getMemberById(@PathVariable("id") Long id) {
        return memberFeignService.getMemberById(id);
    }
}
```

### 6.2.3 测试

浏览器输入 http://localhost/member/consumer/openfeign/get/1

### 6.2.4 注意事项和细节

（1）OpenFeign 的使用特点是微服务调用接口 + @FeignClient，使用接口进行解耦

## 6.3 日志配置

### 6.3.1 基本介绍

（1）OpenFeign 提供了日志打印功能，可以通过配置来调整日志级别，从而对 OpenFeign 接口的调用情况进行监控和输出

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222130859.png)

（2）日志级别

NONE：默认的，不显示任何日志

BASIC：仅记录请求方法、URL、响应状态码及执行时间

HEADERS：除了 BASIC 中定义的信息之外，还有请求和响应的头信息

FULL：除了 HEADERS 中定义的信息之外，还有请求和响应的正文及元数据

### 6.3.2 配置日志 - 应用实例

（1）config/OpenFeignConfig

```java
@Configuration
public class OpenFeignConfig {
    @Bean
    public Logger.Level loggerLevel() {
        return Logger.Level.FULL;
    }
}
```

（2）修改 application.yml

```yaml
logging:
  level:
    #对 MemberFeignService 接口的调用过程打印出信息
    com.hspedu.springcloud.service.MemberFeignService: debug
```

### 6.3.3 测试

## 6.4 OpenFeign 超时

### 6.4.1 模拟超时

修改 member-service-provider-10000/10002 的 MemberController.java

```java
@Slf4j
@RestController
public class MemberController {
    @Resource
    private MemberService memberService;

    @PostMapping("/member/save")
    public Result save(@RequestBody Member member) {
        int affected = memberService.save(member);
        if (affected > 0) {
            return Result.success("添加会员成功", affected);
        } else {
            return Result.error("401", "添加会员失败");
        }
    }

    @GetMapping("/member/get/{id}")
    public Result getMemberById(@PathVariable("id") Long id) {

        //模拟超时，休眠 5s，默认超时时间是 1s
        try {
            TimeUnit.MILLISECONDS.sleep(5000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }


        Member member = memberService.queryMemberById(id);
        if (member != null) {
            return Result.success("查询成功 member-service-provider:10002", member);
        } else {
            return Result.error("402", "Id = " + id + "不存在");
        }
    }
}
```

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222130498.png)

OpenFeign 默认超时时间是 1 秒钟，即等待返回结果是 1 秒

### 6.4.2 设置超时时间

修改 e-commerce-consumer-openfeign-80 的配置文件 yaml

```yaml
ribbon:
  #设置 OpenFeign 客户端超时时间
  #ReadTimeout: 8000 表示建立连接从服务提供方获取可用资源所用的全部时间，时间单位是 ms
  ReadTimeout: 8000
  #两端连接所用时间
  ConnectionTimeout: 8000
```

# 第 7 章 SpringCloud Gateway（服务网关）

## 7.1 Gateway 介绍

### 7.1.1 引出网关服务

没有使用网关的架构图

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222130385.png)

使用网关的架构图

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222130709.png)

### 7.1.2 Gateway 网络拓扑图

[Gateway 网络拓扑图-ProcessOn](https://www.processon.com/diagraming/66bb902c40e02f5de802d033)

### 7.1.3 Gateway 是什么

（1）Gateway 是在 Spring 生态系统之上构建的 API 网关服务，基于 Spring、SpringBoot 和 Project Reactor 等技术

（2）Gateway 旨在提供一种简单而有效的方式来对 API 进行路由，以及提供一些强大的过滤器功能，例如：熔断、限流、重试等

### 7.1.4 Gateway 核心功能

鉴权、流量控制、熔断、日志监控、反向代理

### 7.1.5 Gateway 和 Zuul 的区别

（1）SpringCloud Gateway 作为 SpringCloud 生态系统中的网关，目标是替代 Zuul

（2）SpringCloud Gateway 是基于 Spring WebFlux 框架实现的

（3）Spring WebFlux 框架底层则使用了高性能的 Reactor 模式通信框架 Netty，提升了网关性能

### 7.1.6 Gateway 的特性

SpringCloud Gateway 基于 SpringFramework（支持 Spring WebFlux）、Project Reactor 和 SpringBoot 进行构建，具有如下特性：

（1）动态路由

（2）可以对路由指定 Predicate（断言）和 Filter（过滤器）

（3）集成 Hystrix 的断路器功能

（4）集成 SpringCloud 服务发现功能

（5）请求限流功能

（6）支持路径重写

## 7.2 Gateway 基本原理

### 7.2.1 Gateway 的核心组件

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222131761.png)

（1）Routing 路由：路由是构建网关的基本模块，它由 ID、目标 URL、一系列的断言和过滤器组成，如果断言为 true 则匹配该路由

（2）Predicate 断言：对 Http 请求中的所有内容（例如请求头或请求参数）进行匹配，如果请求与断言相匹配则进行路由

（3）Filter 过滤：使用过滤器可以在请求被路由前或者之后对请求进行处理，即在对 Http 请求断言匹配成功后，可以通过网关的过滤机制对 Http 请求进行处理

### 7.2.2 Gateway 的工作机制

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222131511.png)

（1）客户端向 SpringCloud Gateway 发出请求，然后在 Gateway Handler Mapping 中找到与请求相匹配的路由，将其发送到 Gateway Web Handler

（2）Handler 再通过指定的过滤器链来将请求发送到我们实际的服务执行业务逻辑，然后返回

（3）过滤器之间用虚线分开是因为过滤器可能会在发送代理请求之前（pre）或之后（post）执行业务逻辑

（4）Filter 在 pre 类型的过滤器可以做参数校验、权限校验、流量控制、日志输出、协议转换等，在 post 类型的过滤器中可以做响应内容、响应头的修改、日志的输出、流量监控等有着非常重要的作用

（5）总的来说：路由转发 + 执行过滤器链

## 7.3 搭建 Gateway 微服务

### 7.3.1 应用实例

#### 7.3.1.1 需求分析

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222131831.png)

（1）通过网关暴露的接口，实现调用真正的服务

（2）网关本身也是一个微服务模块

#### 7.3.1.2 代码实现

（1）参考 member-service-consumer-80 创建 e-commerce-gateway-20000

（2）pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>com.hspedu.springcloud</groupId>
        <artifactId>e-commerce-center</artifactId>
        <version>1.0-SNAPSHOT</version>
    </parent>

    <artifactId>e-commerce-gateway-20000</artifactId>

    <dependencies>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>3.8.1</version>
            <scope>test</scope>
        </dependency>

        <!--引入相关的依赖-->

        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
        </dependency>

        <!--在 member-service-consumer-80 引入打包好的 jar,即公共服务模块-->
        <dependency>
            <groupId>com.hspedu.springcloud</groupId>
            <artifactId>e_commerce_center-common-api</artifactId>
            <version>1.0-SNAPSHOT</version>
        </dependency>

        <!--引入 Eureka Client 场景启动器 starter-->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
        </dependency>

        <!--引入 gateway-starter 网关场景启动器-->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-gateway</artifactId>
        </dependency>
    </dependencies>

    <properties>
        <maven.compiler.source>8</maven.compiler.source>
        <maven.compiler.target>8</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>

</project>
```

（3）yaml

```yaml
server:
  port: 20000

spring:
  application:
    name: e-commerce-gateway-20000
  cloud:
    gateway:
      routes: #配置路由，可以配置多个路由
        - id: member_route01 #路由的 id，要求唯一
          #配置这里的 uri 为 http://localhost:10000，这里配置的是需要访问的提供服务的路由地址
          #也可以是外网，比如 http://www.baidu.com
          #这里写成 http://localhost:10000 写死了，在这种情况下就没用到 Eureka Server，可以直接访问到提供方，后面改
          uri: http://localhost:10000
          predicates: #断言，可以有多种形式
            - Path=/member/get/**
          #流程分析
          #当浏览器输入 http://localhost:20000/member/get/1 访问网关时，网关会先将 /member/get/1 提取出来与断言配置的 Path 比较
          #如果匹配成功，网关就会把配置的 uri: http://localhost:10000 与 /member/get/1 相结合形成 http://localhost:10000/member/get/1 进行访问
          #如果匹配失败，则由 Gateway 返回 404 信息

#配置 EurekaClient
eureka:
  instance:
    hostname: e-commerce-service
  client:
    register-with-eureka: true #将自己注册到 Eureka-Server
    fetch-registry: true #表示从 Eureka-Server 获取注册信息，如果只有一个提供方可以不用获取注册信息，但是当是集群时，提供方之间也要获取注册信息，所以这里设置成 true
    service-url:
      #表示将自己注册到哪个 Eureka-Server
      #将本微服务注册到多个 Eureka-Server，使用逗号间隔
      defaultZone: http://eureka9001.com:9001/eureka, http://eureka9002.com:9002/eureka
```

（4）主程序

```java
@SpringBootApplication
@EnableEurekaClient
public class GateWayApplication20000 {
    public static void main(String[] args) {
        SpringApplication.run(GateWayApplication20000.class, args);
    }
}
```

#### 7.3.1.3 测试

（1）启动 e-commerce-eureka-server-9001

（2）启动 member-service-provider-10000

（3）启动 e-commerce-gateway-20000

（4）浏览器通过网关访问：http://localhost:20000/member/get/1

#### 7.3.1.4 测试访问添加功能模块

（1）修改 e-commerce-gateway-20000 的配置文件 yaml

```yaml
server:
  port: 20000

spring:
  application:
    name: e-commerce-gateway-20000
  cloud:
    gateway:
      routes: #配置路由，可以配置多个路由
        - id: member_route01 #路由的 id，要求唯一
          #配置这里的 uri 为 http://localhost:10000，这里配置的是需要访问的提供服务的路由地址
          #也可以是外网，比如 http://www.baidu.com
          #这里写成 http://localhost:10000 写死了，在这种情况下就没用到 Eureka Server，可以直接访问到提供方，后面改
          uri: http://localhost:10000
          predicates: #断言，可以有多种形式
            - Path=/member/get/**
          #流程分析
          #当浏览器输入 http://localhost:20000/member/get/1 访问网关时，网关会先将 /member/get/1 提取出来与断言配置的 Path 比较
          #如果匹配成功，网关就会把配置的 uri: http://localhost:10000 与 /member/get/1 相结合形成 http://localhost:10000/member/get/1 进行访问
          #如果匹配失败，则由 Gateway 返回 404 信息
		
		#访问添加功能模块
        - id: member_route02 #路由的 id，要求唯一
          uri: http://localhost:10000
          predicates: #断言，可以有多种形式
            - Path=/member/save

#配置 EurekaClient
eureka:
  instance:
    hostname: e-commerce-service
  client:
    register-with-eureka: true #将自己注册到 Eureka-Server
    fetch-registry: true #表示从 Eureka-Server 获取注册信息，如果只有一个提供方可以不用获取注册信息，但是当是集群时，提供方之间也要获取注册信息，所以这里设置成 true
    service-url:
      #表示将自己注册到哪个 Eureka-Server
      #将本微服务注册到多个 Eureka-Server，使用逗号间隔
      defaultZone: http://eureka9001.com:9001/eureka, http://eureka9002.com:9002/eureka
```

（2）启动 e-commerce-gateway-20000

（3）浏览器通过网关访问：http://localhost:20000/member/save

扩展：

到百度，修改配置文件 yaml

```yaml
spring:
  application:
    name: e-commerce-gateway-20000
  cloud:
    gateway:
      routes: #配置路由，可以配置多个路由
        - id: member_route01 #路由的 id，要求唯一
          #配置这里的 uri 为 http://localhost:10000，这里配置的是需要访问的提供服务的路由地址
          #也可以是外网，比如 http://www.baidu.com
          #这里写成 http://localhost:10000 写死了，在这种情况下就没用到 Eureka Server，可以直接访问到提供方，后面改
          uri: http://localhost:10000
          predicates: #断言，可以有多种形式
            - Path=/member/get/**
          #流程分析
          #当浏览器输入 http://localhost:20000/member/get/1 访问网关时，网关会先将 /member/get/1 提取出来与断言配置的 Path 比较
          #如果匹配成功，网关就会把配置的 uri: http://localhost:10000 与 /member/get/1 相结合形成 http://localhost:10000/member/get/1 进行访问
          #如果匹配失败，则由 Gateway 返回 404 信息

        - id: member_route02 #路由的 id，要求唯一
          uri: http://localhost:10000
          predicates: #断言，可以有多种形式
            - Path=/member/save

        - id: member_route03 #路由的 id，要求唯一
          uri: http://www.baidu.com
          predicates: #断言，可以有多种形式
            - Path=/
```

### 7.3.2 也可以通过配置类配置 Gateway 路由

### 7.3.3 动态路由

#### 7.3.3.1 需求分析

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222131589.png)

#### 7.3.3.2 代码实现

修改配置文件 yaml

```yaml
server:
  port: 20000

spring:
  application:
    name: e-commerce-gateway-20000
  cloud:
    gateway:
      #启用 DiscoveryClient 服务发现
      discovery:
        locator:
          enabled: true
      routes: #配置路由，可以配置多个路由
        - id: member_route01 #路由的 id，要求唯一
          #配置这里的 uri 为 http://localhost:10000，这里配置的是需要访问的提供服务的路由地址
          #也可以是外网，比如 http://www.baidu.com
          #这里写成 http://localhost:10000 写死了，在这种情况下就没用到 Eureka Server，可以直接访问到提供方，后面改
          #uri: http://localhost:10000
          #uri: lb://member-service-provider 其中 lb 是协议名，member-service-provider 是注册到 Eureka Server 的服务名，要小写
          uri: lb://member-service-provider
          predicates: #断言，可以有多种形式
            - Path=/member/get/**
          #流程分析
          #当浏览器输入 http://localhost:20000/member/get/1 访问网关时，网关会先将 /member/get/1 提取出来与断言配置的 Path 比较
          #如果匹配成功，网关就会把配置的 uri: http://localhost:10000 与 /member/get/1 相结合形成 http://localhost:10000/member/get/1 进行访问
          #如果匹配失败，则由 Gateway 返回 404 信息

        - id: member_route02 #路由的 id，要求唯一
          #uri: http://localhost:10000
          uri: lb://member-service-provider
          predicates: #断言，可以有多种形式
            - Path=/member/save

#        - id: member_route03 #路由的 id，要求唯一
#          uri: http://www.baidu.com
#          predicates: #断言，可以有多种形式
#            - Path=/

#配置 EurekaClient
eureka:
  instance:
    hostname: e-commerce-service
  client:
    register-with-eureka: true #将自己注册到 Eureka-Server
    fetch-registry: true #表示从 Eureka-Server 获取注册信息，如果只有一个提供方可以不用获取注册信息，但是当是集群时，提供方之间也要获取注册信息，所以这里设置成 true
    service-url:
      #表示将自己注册到哪个 Eureka-Server
      #将本微服务注册到多个 Eureka-Server，使用逗号间隔
      defaultZone: http://eureka9001.com:9001/eureka, http://eureka9002.com:9002/eureka
```

#### 7.3.3.3 测试

（1）启动 e-commerce-eureka-server-9001

（2）启动 member-service-provider-10000

（3）启动 member-service-provider-10002

（4）启动 e-commerce-gateway-20000

（5）浏览器通过网关访问：http://localhost:20000/member/get/1

（6）Postman 测试添加

#### 7.3.3.4 注意事项和细节

（1）配置好动态路由后 Gateway 会根据注册中心上的微服务名为请求创建动态路由，实现动态路由功能

（2）使用的 lb 协议支持负载均衡 - 轮询算法

（3）可以配置自己的负载均衡算法

## 7.4 Predicate 断言

### 7.4.1 基本介绍

（1）Predicate 就是一组匹配规则，当请求匹配成功就执行对应的 Route，匹配失败就放弃处理/转发

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222131996.png)

（2）SpringCloud Gateway 包括许多内置的 Route Predicate 工厂，所有这些 Predicate 都与 Http 请求的不同属性匹配，可以组合使用

（3）SpringCloud Gateway 创建 Route 对象时，使用 RoutePredicateFactory 创建 Predicate 对象，Predicate 对象可以赋值给 Route

（4）所有这些谓词都匹配 Http 请求的不同属性，多种谓词工厂可以组合

### 7.4.2 Route Predicate 实例

#### 7.4.2.1 After Route Predicate

##### 7.4.2.1.1 需求分析

需求：只有在 2022-11-18 12:35:50 之后的请求才进行匹配/转发，不满足该条件的不处理

##### 7.4.2.1.2 代码实现

（1）用这个工具类获取时间

```java
public class T2 {
    public static void main(String[] args) {
        ZonedDateTime now = ZonedDateTime.now();
        System.out.println(now); //2024-08-14T22:15:45.285+08:00[Asia/Shanghai]
    }
}
```

（2）修改配置文件 yaml

```yaml
server:
  port: 20000

spring:
  application:
    name: e-commerce-gateway-20000
  cloud:
    gateway:
      #启用 DiscoveryClient 服务发现
      discovery:
        locator:
          enabled: true
      routes: #配置路由，可以配置多个路由
        - id: member_route01 #路由的 id，要求唯一
          #配置这里的 uri 为 http://localhost:10000，这里配置的是需要访问的提供服务的路由地址
          #也可以是外网，比如 http://www.baidu.com
          #这里写成 http://localhost:10000 写死了，在这种情况下就没用到 Eureka Server，可以直接访问到提供方，后面改
          #uri: http://localhost:10000
          #uri: lb://member-service-provider 其中 lb 是协议名，member-service-provider 是注册到 Eureka Server 的服务名，要小写
          uri: lb://member-service-provider
          predicates: #断言，可以有多种形式
            - Path=/member/get/**
            - After=2022-11-18T12:35:00.000+08:00[Asia/Shanghai]
          #流程分析
          #当浏览器输入 http://localhost:20000/member/get/1 访问网关时，网关会先将 /member/get/1 提取出来与断言配置的 Path 比较
          #如果匹配成功，网关就会把配置的 uri: http://localhost:10000 与 /member/get/1 相结合形成 http://localhost:10000/member/get/1 进行访问
          #如果匹配失败，则由 Gateway 返回 404 信息

        - id: member_route02 #路由的 id，要求唯一
          #uri: http://localhost:10000
          uri: lb://member-service-provider
          predicates: #断言，可以有多种形式
            - Path=/member/save

#        - id: member_route03 #路由的 id，要求唯一
#          uri: http://www.baidu.com
#          predicates: #断言，可以有多种形式
#            - Path=/

#配置 EurekaClient
eureka:
  instance:
    hostname: e-commerce-service
  client:
    register-with-eureka: true #将自己注册到 Eureka-Server
    fetch-registry: true #表示从 Eureka-Server 获取注册信息，如果只有一个提供方可以不用获取注册信息，但是当是集群时，提供方之间也要获取注册信息，所以这里设置成 true
    service-url:
      #表示将自己注册到哪个 Eureka-Server
      #将本微服务注册到多个 Eureka-Server，使用逗号间隔
      defaultZone: http://eureka9001.com:9001/eureka, http://eureka9002.com:9002/eureka
```

#### 7.4.2.2 Before Route Predicate

##### 7.4.2.2.1 需求分析

需求：只有在 2022-11-18 12:35:50 之前的请求才进行匹配/转发，不满足该条件的不处理

##### 7.4.2.2.2 代码实现

```yaml
server:
  port: 20000

spring:
  application:
    name: e-commerce-gateway-20000
  cloud:
    gateway:
      #启用 DiscoveryClient 服务发现
      discovery:
        locator:
          enabled: true
      routes: #配置路由，可以配置多个路由
        - id: member_route01 #路由的 id，要求唯一
          #配置这里的 uri 为 http://localhost:10000，这里配置的是需要访问的提供服务的路由地址
          #也可以是外网，比如 http://www.baidu.com
          #这里写成 http://localhost:10000 写死了，在这种情况下就没用到 Eureka Server，可以直接访问到提供方，后面改
          #uri: http://localhost:10000
          #uri: lb://member-service-provider 其中 lb 是协议名，member-service-provider 是注册到 Eureka Server 的服务名，要小写
          uri: lb://member-service-provider
          predicates: #断言，可以有多种形式
            - Path=/member/get/**
            #- After=2022-11-18T12:35:00.000+08:00[Asia/Shanghai]
            - Before=2024-11-18T12:35:00.000+08:00[Asia/Shanghai]
          #流程分析
          #当浏览器输入 http://localhost:20000/member/get/1 访问网关时，网关会先将 /member/get/1 提取出来与断言配置的 Path 比较
          #如果匹配成功，网关就会把配置的 uri: http://localhost:10000 与 /member/get/1 相结合形成 http://localhost:10000/member/get/1 进行访问
          #如果匹配失败，则由 Gateway 返回 404 信息

        - id: member_route02 #路由的 id，要求唯一
          #uri: http://localhost:10000
          uri: lb://member-service-provider
          predicates: #断言，可以有多种形式
            - Path=/member/save

#        - id: member_route03 #路由的 id，要求唯一
#          uri: http://www.baidu.com
#          predicates: #断言，可以有多种形式
#            - Path=/

#配置 EurekaClient
eureka:
  instance:
    hostname: e-commerce-service
  client:
    register-with-eureka: true #将自己注册到 Eureka-Server
    fetch-registry: true #表示从 Eureka-Server 获取注册信息，如果只有一个提供方可以不用获取注册信息，但是当是集群时，提供方之间也要获取注册信息，所以这里设置成 true
    service-url:
      #表示将自己注册到哪个 Eureka-Server
      #将本微服务注册到多个 Eureka-Server，使用逗号间隔
      defaultZone: http://eureka9001.com:9001/eureka, http://eureka9002.com:9002/eureka
```

#### 7.4.2.3 Between Route Predicate

##### 7.4.2.3.1 需求分析

需求：只有在 2020-11-18 12:35:50 和 2022-11-18 12:35:50 之间的请求才进行匹配/转发，不满足该条件的不处理

##### 7.4.2.3.2 代码实现

```yaml
server:
  port: 20000

spring:
  application:
    name: e-commerce-gateway-20000
  cloud:
    gateway:
      #启用 DiscoveryClient 服务发现
      discovery:
        locator:
          enabled: true
      routes: #配置路由，可以配置多个路由
        - id: member_route01 #路由的 id，要求唯一
          #配置这里的 uri 为 http://localhost:10000，这里配置的是需要访问的提供服务的路由地址
          #也可以是外网，比如 http://www.baidu.com
          #这里写成 http://localhost:10000 写死了，在这种情况下就没用到 Eureka Server，可以直接访问到提供方，后面改
          #uri: http://localhost:10000
          #uri: lb://member-service-provider 其中 lb 是协议名，member-service-provider 是注册到 Eureka Server 的服务名，要小写
          uri: lb://member-service-provider
          predicates: #断言，可以有多种形式
            - Path=/member/get/**
            #- After=2022-11-18T12:35:00.000+08:00[Asia/Shanghai]
            #- Before=2024-11-18T12:35:00.000+08:00[Asia/Shanghai]
            - Between=2024-11-18T12:35:00.000+08:00[Asia/Shanghai],2025-11-18T12:35:00.000+08:00[Asia/Shanghai]
          #流程分析
          #当浏览器输入 http://localhost:20000/member/get/1 访问网关时，网关会先将 /member/get/1 提取出来与断言配置的 Path 比较
          #如果匹配成功，网关就会把配置的 uri: http://localhost:10000 与 /member/get/1 相结合形成 http://localhost:10000/member/get/1 进行访问
          #如果匹配失败，则由 Gateway 返回 404 信息

        - id: member_route02 #路由的 id，要求唯一
          #uri: http://localhost:10000
          uri: lb://member-service-provider
          predicates: #断言，可以有多种形式
            - Path=/member/save

#        - id: member_route03 #路由的 id，要求唯一
#          uri: http://www.baidu.com
#          predicates: #断言，可以有多种形式
#            - Path=/

#配置 EurekaClient
eureka:
  instance:
    hostname: e-commerce-service
  client:
    register-with-eureka: true #将自己注册到 Eureka-Server
    fetch-registry: true #表示从 Eureka-Server 获取注册信息，如果只有一个提供方可以不用获取注册信息，但是当是集群时，提供方之间也要获取注册信息，所以这里设置成 true
    service-url:
      #表示将自己注册到哪个 Eureka-Server
      #将本微服务注册到多个 Eureka-Server，使用逗号间隔
      defaultZone: http://eureka9001.com:9001/eureka, http://eureka9002.com:9002/eureka
```

#### 7.4.2.4 Cookie Route Predicate

##### 7.4.2.4.1 需求分析

需求：请求带有 cookie，cookie 的键：user，cookie 的值：hsp，才匹配/断言成功

##### 7.4.2.4.2 代码实现

```yaml
server:
  port: 20000

spring:
  application:
    name: e-commerce-gateway-20000
  cloud:
    gateway:
      #启用 DiscoveryClient 服务发现
      discovery:
        locator:
          enabled: true
      routes: #配置路由，可以配置多个路由
        - id: member_route01 #路由的 id，要求唯一
          #配置这里的 uri 为 http://localhost:10000，这里配置的是需要访问的提供服务的路由地址
          #也可以是外网，比如 http://www.baidu.com
          #这里写成 http://localhost:10000 写死了，在这种情况下就没用到 Eureka Server，可以直接访问到提供方，后面改
          #uri: http://localhost:10000
          #uri: lb://member-service-provider 其中 lb 是协议名，member-service-provider 是注册到 Eureka Server 的服务名，要小写
          uri: lb://member-service-provider
          predicates: #断言，可以有多种形式
            - Path=/member/get/**
            #- After=2022-11-18T12:35:00.000+08:00[Asia/Shanghai]
            #- Before=2024-11-18T12:35:00.000+08:00[Asia/Shanghai]
            #- Between=2024-11-18T12:35:00.000+08:00[Asia/Shanghai],2025-11-18T12:35:00.000+08:00[Asia/Shanghai]
            - Cookie=user, hsp
          #流程分析
          #当浏览器输入 http://localhost:20000/member/get/1 访问网关时，网关会先将 /member/get/1 提取出来与断言配置的 Path 比较
          #如果匹配成功，网关就会把配置的 uri: http://localhost:10000 与 /member/get/1 相结合形成 http://localhost:10000/member/get/1 进行访问
          #如果匹配失败，则由 Gateway 返回 404 信息

        - id: member_route02 #路由的 id，要求唯一
          #uri: http://localhost:10000
          uri: lb://member-service-provider
          predicates: #断言，可以有多种形式
            - Path=/member/save

#        - id: member_route03 #路由的 id，要求唯一
#          uri: http://www.baidu.com
#          predicates: #断言，可以有多种形式
#            - Path=/

#配置 EurekaClient
eureka:
  instance:
    hostname: e-commerce-service
  client:
    register-with-eureka: true #将自己注册到 Eureka-Server
    fetch-registry: true #表示从 Eureka-Server 获取注册信息，如果只有一个提供方可以不用获取注册信息，但是当是集群时，提供方之间也要获取注册信息，所以这里设置成 true
    service-url:
      #表示将自己注册到哪个 Eureka-Server
      #将本微服务注册到多个 Eureka-Server，使用逗号间隔
      defaultZone: http://eureka9001.com:9001/eureka, http://eureka9002.com:9002/eureka
```

#### 7.4.2.5 Header Route Predicate

##### 7.4.2.5.1 需求分析

需求：请求头 Header 有 X-Request-Id 属性，并且值为 hello 才匹配/断言成功

##### 7.4.2.5.2 代码实现

```yaml
server:
  port: 20000

spring:
  application:
    name: e-commerce-gateway-20000
  cloud:
    gateway:
      #启用 DiscoveryClient 服务发现
      discovery:
        locator:
          enabled: true
      routes: #配置路由，可以配置多个路由
        - id: member_route01 #路由的 id，要求唯一
          #配置这里的 uri 为 http://localhost:10000，这里配置的是需要访问的提供服务的路由地址
          #也可以是外网，比如 http://www.baidu.com
          #这里写成 http://localhost:10000 写死了，在这种情况下就没用到 Eureka Server，可以直接访问到提供方，后面改
          #uri: http://localhost:10000
          #uri: lb://member-service-provider 其中 lb 是协议名，member-service-provider 是注册到 Eureka Server 的服务名，要小写
          uri: lb://member-service-provider
          predicates: #断言，可以有多种形式
            - Path=/member/get/**
            #- After=2022-11-18T12:35:00.000+08:00[Asia/Shanghai]
            #- Before=2024-11-18T12:35:00.000+08:00[Asia/Shanghai]
            #- Between=2024-11-18T12:35:00.000+08:00[Asia/Shanghai],2025-11-18T12:35:00.000+08:00[Asia/Shanghai]
            #- Cookie=user, hsp
            - Header=X-Request-Id, hello
          #流程分析
          #当浏览器输入 http://localhost:20000/member/get/1 访问网关时，网关会先将 /member/get/1 提取出来与断言配置的 Path 比较
          #如果匹配成功，网关就会把配置的 uri: http://localhost:10000 与 /member/get/1 相结合形成 http://localhost:10000/member/get/1 进行访问
          #如果匹配失败，则由 Gateway 返回 404 信息

        - id: member_route02 #路由的 id，要求唯一
          #uri: http://localhost:10000
          uri: lb://member-service-provider
          predicates: #断言，可以有多种形式
            - Path=/member/save

#        - id: member_route03 #路由的 id，要求唯一
#          uri: http://www.baidu.com
#          predicates: #断言，可以有多种形式
#            - Path=/

#配置 EurekaClient
eureka:
  instance:
    hostname: e-commerce-service
  client:
    register-with-eureka: true #将自己注册到 Eureka-Server
    fetch-registry: true #表示从 Eureka-Server 获取注册信息，如果只有一个提供方可以不用获取注册信息，但是当是集群时，提供方之间也要获取注册信息，所以这里设置成 true
    service-url:
      #表示将自己注册到哪个 Eureka-Server
      #将本微服务注册到多个 Eureka-Server，使用逗号间隔
      defaultZone: http://eureka9001.com:9001/eureka, http://eureka9002.com:9002/eureka
```

#### 7.4.2.6 Host Route Predicate

##### 7.4.2.6.1 需求分析

需求：请求 Host 是 `**.hspedu.**` 才匹配/断言成功，比如 www.hspedu.com

##### 7.4.2.6.2 代码实现

```yaml
server:
  port: 20000

spring:
  application:
    name: e-commerce-gateway-20000
  cloud:
    gateway:
      #启用 DiscoveryClient 服务发现
      discovery:
        locator:
          enabled: true
      routes: #配置路由，可以配置多个路由
        - id: member_route01 #路由的 id，要求唯一
          #配置这里的 uri 为 http://localhost:10000，这里配置的是需要访问的提供服务的路由地址
          #也可以是外网，比如 http://www.baidu.com
          #这里写成 http://localhost:10000 写死了，在这种情况下就没用到 Eureka Server，可以直接访问到提供方，后面改
          #uri: http://localhost:10000
          #uri: lb://member-service-provider 其中 lb 是协议名，member-service-provider 是注册到 Eureka Server 的服务名，要小写
          uri: lb://member-service-provider
          predicates: #断言，可以有多种形式
            - Path=/member/get/**
            #- After=2022-11-18T12:35:00.000+08:00[Asia/Shanghai]
            #- Before=2024-11-18T12:35:00.000+08:00[Asia/Shanghai]
            #- Between=2024-11-18T12:35:00.000+08:00[Asia/Shanghai],2025-11-18T12:35:00.000+08:00[Asia/Shanghai]
            #- Cookie=user, hsp
            #- Header=X-Request-Id, hello
            - Host=**.hspedu.**
          #流程分析
          #当浏览器输入 http://localhost:20000/member/get/1 访问网关时，网关会先将 /member/get/1 提取出来与断言配置的 Path 比较
          #如果匹配成功，网关就会把配置的 uri: http://localhost:10000 与 /member/get/1 相结合形成 http://localhost:10000/member/get/1 进行访问
          #如果匹配失败，则由 Gateway 返回 404 信息

        - id: member_route02 #路由的 id，要求唯一
          #uri: http://localhost:10000
          uri: lb://member-service-provider
          predicates: #断言，可以有多种形式
            - Path=/member/save

#        - id: member_route03 #路由的 id，要求唯一
#          uri: http://www.baidu.com
#          predicates: #断言，可以有多种形式
#            - Path=/

#配置 EurekaClient
eureka:
  instance:
    hostname: e-commerce-service
  client:
    register-with-eureka: true #将自己注册到 Eureka-Server
    fetch-registry: true #表示从 Eureka-Server 获取注册信息，如果只有一个提供方可以不用获取注册信息，但是当是集群时，提供方之间也要获取注册信息，所以这里设置成 true
    service-url:
      #表示将自己注册到哪个 Eureka-Server
      #将本微服务注册到多个 Eureka-Server，使用逗号间隔
      defaultZone: http://eureka9001.com:9001/eureka, http://eureka9002.com:9002/eureka
```

#### 7.4.2.7 Method Route Predicate

##### 7.4.2.7.1 需求分析

需求：请求是 Get 方式才匹配/断言成功，请求方式可以有多个，使用逗号间隔

##### 7.4.2.7.2 代码实现

```yaml
server:
  port: 20000

spring:
  application:
    name: e-commerce-gateway-20000
  cloud:
    gateway:
      #启用 DiscoveryClient 服务发现
      discovery:
        locator:
          enabled: true
      routes: #配置路由，可以配置多个路由
        - id: member_route01 #路由的 id，要求唯一
          #配置这里的 uri 为 http://localhost:10000，这里配置的是需要访问的提供服务的路由地址
          #也可以是外网，比如 http://www.baidu.com
          #这里写成 http://localhost:10000 写死了，在这种情况下就没用到 Eureka Server，可以直接访问到提供方，后面改
          #uri: http://localhost:10000
          #uri: lb://member-service-provider 其中 lb 是协议名，member-service-provider 是注册到 Eureka Server 的服务名，要小写
          uri: lb://member-service-provider
          predicates: #断言，可以有多种形式
            - Path=/member/get/**
            #- After=2022-11-18T12:35:00.000+08:00[Asia/Shanghai]
            #- Before=2024-11-18T12:35:00.000+08:00[Asia/Shanghai]
            #- Between=2024-11-18T12:35:00.000+08:00[Asia/Shanghai],2025-11-18T12:35:00.000+08:00[Asia/Shanghai]
            #- Cookie=user, hsp
            #- Header=X-Request-Id, hello
            #- Host=**.hspedu.**
            - Method=GET,POST
          #流程分析
          #当浏览器输入 http://localhost:20000/member/get/1 访问网关时，网关会先将 /member/get/1 提取出来与断言配置的 Path 比较
          #如果匹配成功，网关就会把配置的 uri: http://localhost:10000 与 /member/get/1 相结合形成 http://localhost:10000/member/get/1 进行访问
          #如果匹配失败，则由 Gateway 返回 404 信息

        - id: member_route02 #路由的 id，要求唯一
          #uri: http://localhost:10000
          uri: lb://member-service-provider
          predicates: #断言，可以有多种形式
            - Path=/member/save

#        - id: member_route03 #路由的 id，要求唯一
#          uri: http://www.baidu.com
#          predicates: #断言，可以有多种形式
#            - Path=/

#配置 EurekaClient
eureka:
  instance:
    hostname: e-commerce-service
  client:
    register-with-eureka: true #将自己注册到 Eureka-Server
    fetch-registry: true #表示从 Eureka-Server 获取注册信息，如果只有一个提供方可以不用获取注册信息，但是当是集群时，提供方之间也要获取注册信息，所以这里设置成 true
    service-url:
      #表示将自己注册到哪个 Eureka-Server
      #将本微服务注册到多个 Eureka-Server，使用逗号间隔
      defaultZone: http://eureka9001.com:9001/eureka, http://eureka9002.com:9002/eureka
```

#### 7.4.2.8 Path Route Predicate

##### 7.4.2.8.1 需求分析

需求：Path 可以有多个，使用逗号间隔

##### 7.4.2.8.2 代码实现

```yaml
server:
  port: 20000

spring:
  application:
    name: e-commerce-gateway-20000
  cloud:
    gateway:
      #启用 DiscoveryClient 服务发现
      discovery:
        locator:
          enabled: true
      routes: #配置路由，可以配置多个路由
        - id: member_route01 #路由的 id，要求唯一
          #配置这里的 uri 为 http://localhost:10000，这里配置的是需要访问的提供服务的路由地址
          #也可以是外网，比如 http://www.baidu.com
          #这里写成 http://localhost:10000 写死了，在这种情况下就没用到 Eureka Server，可以直接访问到提供方，后面改
          #uri: http://localhost:10000
          #uri: lb://member-service-provider 其中 lb 是协议名，member-service-provider 是注册到 Eureka Server 的服务名，要小写
          uri: lb://member-service-provider
          predicates: #断言，可以有多种形式
            - Path=/member/get/**,/member/save
            #- After=2022-11-18T12:35:00.000+08:00[Asia/Shanghai]
            #- Before=2024-11-18T12:35:00.000+08:00[Asia/Shanghai]
            #- Between=2024-11-18T12:35:00.000+08:00[Asia/Shanghai],2025-11-18T12:35:00.000+08:00[Asia/Shanghai]
            #- Cookie=user, hsp
            #- Header=X-Request-Id, hello
            #- Host=**.hspedu.**
            #- Method=GET,POST
          #流程分析
          #当浏览器输入 http://localhost:20000/member/get/1 访问网关时，网关会先将 /member/get/1 提取出来与断言配置的 Path 比较
          #如果匹配成功，网关就会把配置的 uri: http://localhost:10000 与 /member/get/1 相结合形成 http://localhost:10000/member/get/1 进行访问
          #如果匹配失败，则由 Gateway 返回 404 信息

#        - id: member_route02 #路由的 id，要求唯一
#          #uri: http://localhost:10000
#          uri: lb://member-service-provider
#          predicates: #断言，可以有多种形式
#            - Path=/member/save

#        - id: member_route03 #路由的 id，要求唯一
#          uri: http://www.baidu.com
#          predicates: #断言，可以有多种形式
#            - Path=/

#配置 EurekaClient
eureka:
  instance:
    hostname: e-commerce-service
  client:
    register-with-eureka: true #将自己注册到 Eureka-Server
    fetch-registry: true #表示从 Eureka-Server 获取注册信息，如果只有一个提供方可以不用获取注册信息，但是当是集群时，提供方之间也要获取注册信息，所以这里设置成 true
    service-url:
      #表示将自己注册到哪个 Eureka-Server
      #将本微服务注册到多个 Eureka-Server，使用逗号间隔
      defaultZone: http://eureka9001.com:9001/eureka, http://eureka9002.com:9002/eureka
```

#### 7.4.2.9 Query Route Predicate

##### 7.4.2.9.1 需求分析

需求：请求有参数 email，并且满足电子邮件的基本格式才能匹配/断言成功

##### 7.4.2.9.2 代码实现

```yaml
server:
  port: 20000

spring:
  application:
    name: e-commerce-gateway-20000
  cloud:
    gateway:
      #启用 DiscoveryClient 服务发现
      discovery:
        locator:
          enabled: true
      routes: #配置路由，可以配置多个路由
        - id: member_route01 #路由的 id，要求唯一
          #配置这里的 uri 为 http://localhost:10000，这里配置的是需要访问的提供服务的路由地址
          #也可以是外网，比如 http://www.baidu.com
          #这里写成 http://localhost:10000 写死了，在这种情况下就没用到 Eureka Server，可以直接访问到提供方，后面改
          #uri: http://localhost:10000
          #uri: lb://member-service-provider 其中 lb 是协议名，member-service-provider 是注册到 Eureka Server 的服务名，要小写
          uri: lb://member-service-provider
          predicates: #断言，可以有多种形式
            - Path=/member/get/**
            #- After=2022-11-18T12:35:00.000+08:00[Asia/Shanghai]
            #- Before=2024-11-18T12:35:00.000+08:00[Asia/Shanghai]
            #- Between=2024-11-18T12:35:00.000+08:00[Asia/Shanghai],2025-11-18T12:35:00.000+08:00[Asia/Shanghai]
            #- Cookie=user, hsp
            #- Header=X-Request-Id, hello
            #- Host=**.hspedu.**
            #- Method=GET,POST
            - Query=email, [\w-]+@([a-zA-Z]+\.)+[a-zA-Z]+
          #流程分析
          #当浏览器输入 http://localhost:20000/member/get/1 访问网关时，网关会先将 /member/get/1 提取出来与断言配置的 Path 比较
          #如果匹配成功，网关就会把配置的 uri: http://localhost:10000 与 /member/get/1 相结合形成 http://localhost:10000/member/get/1 进行访问
          #如果匹配失败，则由 Gateway 返回 404 信息

        - id: member_route02 #路由的 id，要求唯一
          #uri: http://localhost:10000
          uri: lb://member-service-provider
          predicates: #断言，可以有多种形式
            - Path=/member/save

#        - id: member_route03 #路由的 id，要求唯一
#          uri: http://www.baidu.com
#          predicates: #断言，可以有多种形式
#            - Path=/

#配置 EurekaClient
eureka:
  instance:
    hostname: e-commerce-service
  client:
    register-with-eureka: true #将自己注册到 Eureka-Server
    fetch-registry: true #表示从 Eureka-Server 获取注册信息，如果只有一个提供方可以不用获取注册信息，但是当是集群时，提供方之间也要获取注册信息，所以这里设置成 true
    service-url:
      #表示将自己注册到哪个 Eureka-Server
      #将本微服务注册到多个 Eureka-Server，使用逗号间隔
      defaultZone: http://eureka9001.com:9001/eureka, http://eureka9002.com:9002/eureka
```

#### 7.4.2.10 RemoteAddr Route Predicate

##### 7.4.2.10.1 需求分析

需求：请求方的 IP 是 127.0.0.1 才能匹配/断言成功

##### 7.4.2.10.2 代码实现

```yaml
server:
  port: 20000

spring:
  application:
    name: e-commerce-gateway-20000
  cloud:
    gateway:
      #启用 DiscoveryClient 服务发现
      discovery:
        locator:
          enabled: true
      routes: #配置路由，可以配置多个路由
        - id: member_route01 #路由的 id，要求唯一
          #配置这里的 uri 为 http://localhost:10000，这里配置的是需要访问的提供服务的路由地址
          #也可以是外网，比如 http://www.baidu.com
          #这里写成 http://localhost:10000 写死了，在这种情况下就没用到 Eureka Server，可以直接访问到提供方，后面改
          #uri: http://localhost:10000
          #uri: lb://member-service-provider 其中 lb 是协议名，member-service-provider 是注册到 Eureka Server 的服务名，要小写
          uri: lb://member-service-provider
          predicates: #断言，可以有多种形式
            - Path=/member/get/**
            #- After=2022-11-18T12:35:00.000+08:00[Asia/Shanghai]
            #- Before=2024-11-18T12:35:00.000+08:00[Asia/Shanghai]
            #- Between=2024-11-18T12:35:00.000+08:00[Asia/Shanghai],2025-11-18T12:35:00.000+08:00[Asia/Shanghai]
            #- Cookie=user, hsp
            #- Header=X-Request-Id, hello
            #- Host=**.hspedu.**
            #- Method=GET,POST
            #- Query=email, [\w-]+@([a-zA-Z]+\.)+[a-zA-Z]+
            - RemoteAddr=127.0.0.1
          #流程分析
          #当浏览器输入 http://localhost:20000/member/get/1 访问网关时，网关会先将 /member/get/1 提取出来与断言配置的 Path 比较
          #如果匹配成功，网关就会把配置的 uri: http://localhost:10000 与 /member/get/1 相结合形成 http://localhost:10000/member/get/1 进行访问
          #如果匹配失败，则由 Gateway 返回 404 信息

        - id: member_route02 #路由的 id，要求唯一
          #uri: http://localhost:10000
          uri: lb://member-service-provider
          predicates: #断言，可以有多种形式
            - Path=/member/save

#        - id: member_route03 #路由的 id，要求唯一
#          uri: http://www.baidu.com
#          predicates: #断言，可以有多种形式
#            - Path=/

#配置 EurekaClient
eureka:
  instance:
    hostname: e-commerce-service
  client:
    register-with-eureka: true #将自己注册到 Eureka-Server
    fetch-registry: true #表示从 Eureka-Server 获取注册信息，如果只有一个提供方可以不用获取注册信息，但是当是集群时，提供方之间也要获取注册信息，所以这里设置成 true
    service-url:
      #表示将自己注册到哪个 Eureka-Server
      #将本微服务注册到多个 Eureka-Server，使用逗号间隔
      defaultZone: http://eureka9001.com:9001/eureka, http://eureka9002.com:9002/eureka
```

## 7.5 Filter 过滤器

### 7.5.1 基本介绍

（1）路由过滤器可用于修改进入的 Http 请求和返回的 Http 响应

（2）SpringCloud Gateway 内置了多种路由过滤器，他们都由 GatewayFilter 的工厂类来产生

### 7.5.2 类型

（1）GatewayFilter

（2）GlobalFilter

### 7.5.3 GatewayFilter 使用

（1）开发直接使用 GatewayFilter 较少，一般是自定义过滤器

（2）应用实例

20000 的 yaml

```yaml
server:
  port: 20000

spring:
  application:
    name: e-commerce-gateway-20000
  cloud:
    gateway:
      #启用 DiscoveryClient 服务发现
      discovery:
        locator:
          enabled: true
      routes: #配置路由，可以配置多个路由
        - id: member_route01 #路由的 id，要求唯一
          #配置这里的 uri 为 http://localhost:10000，这里配置的是需要访问的提供服务的路由地址
          #也可以是外网，比如 http://www.baidu.com
          #这里写成 http://localhost:10000 写死了，在这种情况下就没用到 Eureka Server，可以直接访问到提供方，后面改
          #uri: http://localhost:10000
          #uri: lb://member-service-provider 其中 lb 是协议名，member-service-provider 是注册到 Eureka Server 的服务名，要小写
          uri: lb://member-service-provider
          predicates: #断言，可以有多种形式
            - Path=/member/get/**
            #- After=2022-11-18T12:35:00.000+08:00[Asia/Shanghai]
            #- Before=2024-11-18T12:35:00.000+08:00[Asia/Shanghai]
            #- Between=2024-11-18T12:35:00.000+08:00[Asia/Shanghai],2025-11-18T12:35:00.000+08:00[Asia/Shanghai]
            #- Cookie=user, hsp
            #- Header=X-Request-Id, hello
            #- Host=**.hspedu.**
            #- Method=GET,POST
            #- Query=email, [\w-]+@([a-zA-Z]+\.)+[a-zA-Z]+
            #- RemoteAddr=127.0.0.1
          filters:
            - AddRequestParameter=color, blue
          #流程分析
          #当浏览器输入 http://localhost:20000/member/get/1 访问网关时，网关会先将 /member/get/1 提取出来与断言配置的 Path 比较
          #如果匹配成功，网关就会把配置的 uri: http://localhost:10000 与 /member/get/1 相结合形成 http://localhost:10000/member/get/1 进行访问
          #如果匹配失败，则由 Gateway 返回 404 信息

        - id: member_route02 #路由的 id，要求唯一
          #uri: http://localhost:10000
          uri: lb://member-service-provider
          predicates: #断言，可以有多种形式
            - Path=/member/save

#        - id: member_route03 #路由的 id，要求唯一
#          uri: http://www.baidu.com
#          predicates: #断言，可以有多种形式
#            - Path=/

#配置 EurekaClient
eureka:
  instance:
    hostname: e-commerce-service
  client:
    register-with-eureka: true #将自己注册到 Eureka-Server
    fetch-registry: true #表示从 Eureka-Server 获取注册信息，如果只有一个提供方可以不用获取注册信息，但是当是集群时，提供方之间也要获取注册信息，所以这里设置成 true
    service-url:
      #表示将自己注册到哪个 Eureka-Server
      #将本微服务注册到多个 Eureka-Server，使用逗号间隔
      defaultZone: http://eureka9001.com:9001/eureka, http://eureka9002.com:9002/eureka
```

10000 的 controller

```java
@GetMapping("/member/get/{id}")
    public Result getMemberById(@PathVariable("id") Long id, HttpServletRequest request) {

        String color = request.getParameter("color");
        System.out.println(color);

        //模拟超时，休眠 5s，默认超时时间是 1s
        /*try {
            TimeUnit.MILLISECONDS.sleep(5000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }*/

        Member member = memberService.queryMemberById(id);
        if (member != null) {
            return Result.success("查询成功 member-service-provider:10000" + color, member);
        } else {
            return Result.error("402", "Id = " + id + "不存在");
        }
    }
```

### 7.5.4 自定义 GlobalFilter

#### 7.5.4.1 需求分析

（1）自定义全局 GlobalFilter 过滤器

（2）如果请求参数 user=hspedu，pwd=123456 则放行，否则不能通过验证

#### 7.5.4.2 代码实现

20000 com.hspedu.springcloud.filter.CustomGateWayFilter

```java
@Component
public class CustomGateWayFilter implements GlobalFilter, Ordered {

    /**
     * filter 是核心的方法，将我们的过滤的业务写在该方法中
     */
    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        System.out.println("-------CustomGateWayFilter 被执行--------");
        //先获取到对应的参数值
        //比如 http://localhost:20000/member/get/1?user=hspedu&pwd=123456
        //exchange.getRequest().getQueryParams() => user=hspedu&pwd=123456
        //exchange.getRequest().getQueryParams().get("user") 是获取到属性名为 user 的列表，因为有可能是多选框
        //exchange.getRequest().getQueryParams().get("user").get(0); 这样就可以获取 user 列表的第一个值即 hspedu
        //String user = exchange.getRequest().getQueryParams().get("user").get(0);

        //也可以这样写
        //exchange.getRequest().getQueryParams().getFirst("user"); 表示获取参数中名为 user 的列表的第一个值
        String user = exchange.getRequest().getQueryParams().getFirst("user");

        String pwd = exchange.getRequest().getQueryParams().getFirst("pwd");

        if (!("hspedu".equals(user) && "123456".equals(pwd))) { //如果不满足条件
            System.out.println("-----非法用户----");
            exchange.getResponse().setStatusCode(HttpStatus.NOT_ACCEPTABLE); //响应
            return exchange.getResponse().setComplete();
        }
        //验证通过，放行
        return chain.filter(exchange);
    }

    /**
     * order 表示过滤器执行的顺序，数字越小，优先级越高
     */
    @Override
    public int getOrder() {
        return 0;
    }
}
```

# 第 8 章 SpringCloud Sleuth + ZipKin（分布式服务跟踪）

## 8.1 Sleuth + ZipKin 基础

### 8.1.1 Sleuth + ZipKin 是什么

（1）在微服务框架中，一个由客户端发起的请求在后端系统中会经过多个不同的服务节点调用，来协同产生最后的请求结果，每一个请求都会形成一条复杂的分布式服务调用链路

（2）链路中的任何一环出现高延时或错误都会引起整个请求最后的失败，因此对整个服务的调用进行链路追踪和分析就非常的重要

（3）Sleuth 和 ZipKin 的简单关系图

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222131941.png)

（4）Sleuth 提供了一套完整的服务跟踪的解决方案并兼容 ZipKin

（5）Sleuth 做链路追踪，ZipKin 做数据搜集/存储/可视化

### 8.1.2 Sleuth 工作原理

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222131530.png)

（1）一条请求链路通过 Trace Id 唯一标识，Span 标识发起的请求信息，各 Span 通过 parent id 关联起来

（2）Trace：类似于树结构的 Span 集合，表示一条调用链路，存在唯一标识

（3）Span：基本工作单元，表示调用链路来源，通俗的理解 Span 就是一次请求信息

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222131830.png)

## 8.2 Sleuth + ZipKin 搭建链路监控实例

### 8.2.1 需求说明

（1）在浏览器输入 http://localhost/member/consumer/get/1，会返回对应的结果

（2）通过 Sleuth 和 ZipKin 可以对服务调用链路进行监控，并在 ZipKin 进行显示

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222132767.png)

### 8.2.2 安装 ZipKin

安装完成后浏览器访问：http://localhost:9411/zipkin/

### 8.2.3 服务提供方集成 Sleuth + ZipKin

（1）修改服务提供方 10000，先不修改 10002

（2）修改 pom.xml

```xml
<!--引入 sleuth + ZipKin 依赖-->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-zipkin</artifactId>
        </dependency>
```

（3）修改 application.yml

```yaml
server:
  port: 10000

spring:
  application:
    name: member-service-provider


  #配置 sleuth + zipkin
  zipkin:
    #这个 url 是 zipkin 默认的
    base-url: http://localhost:9411
  sleuth:
    sampler:
      #采样率，在 0-1 之间，1 表示全部采集
      probability: 1

  datasource:
    type: com.alibaba.druid.pool.DruidDataSource
    url: jdbc:mysql://localhost:3306/e_commerce_center_db
    username: root
    password: 123456
mybatis:
  mapper-locations: classpath:mapper/*.xml #指定 mapper.xml 文件的位置
  type-aliases-package: com.hspedu.springcloud.entity # 实体类所在的包，以后引用就可以直接通过类名进行简写

#配置 EurekaClient
eureka:
  client:
    register-with-eureka: true #将自己注册到 Eureka-Server
    fetch-registry: true #表示从 Eureka-Server 获取注册信息，如果只有一个提供方可以不用获取注册信息，但是当是集群时，提供方之间也要获取注册信息，所以这里设置成 true
    service-url:
      #表示将自己注册到哪个 Eureka-Server
      #将本微服务注册到多个 Eureka-Server，使用逗号间隔
      defaultZone: http://eureka9001.com:9001/eureka, http://eureka9002.com:9002/eureka
```

### 8.2.4 服务消费方集成 Sleuth + ZipKin

（1）修改 member-service-consumer-80

（2）pom.xml

```xml
<!--引入 sleuth + ZipKin 依赖-->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-zipkin</artifactId>
        </dependency>
```

（3）application.yml

```yaml
server:
  port: 80
spring:
  application:
    name: member-service-consumer-80

  #配置 sleuth + zipkin
  zipkin:
    #这个 url 是 zipkin 默认的
    base-url: http://localhost:9411
  sleuth:
    sampler:
      #采样率，在 0-1 之间，1 表示全部采集
      probability: 1

#配置 EurekaClient
eureka:
  client:
    register-with-eureka: true #将自己注册到 Eureka-Server
    fetch-registry: true #表示从 Eureka-Server 获取注册信息，如果只有一个提供方可以不用获取注册信息，但是当是集群时，提供方之间也要获取注册信息，所以这里设置成 true
    service-url:
      #表示将自己注册到哪个 Eureka-Server
      #将本微服务注册到多个 Eureka-Server，使用逗号间隔
      defaultZone: http://eureka9001.com:9001/eureka, http://eureka9002.com:9002/eureka
```

### 8.2.5 测试

浏览器输入 http://localhost/member/consumer/get/1

### 8.2.6 查看监控并分析结果

浏览器输入 http://localhost:9411/zipkin/ 查看结果

# 第 9 章 SpringCloud Alibaba Nacos（服务注册中心、服务配置、服务总线）

## 9.1 Nacos 基础

### 9.1.1 Nacos 是什么？

（1）Nacos 就是注册中心【替代 Eureka】+ 配置中心【替代 Config】

（2）Nacos 架构理论基础：CAP 理论（支持 AP 和 CP，可以切换）

### 9.1.2 Nacos 下载

浏览器输入 http://localhost:8848/nacos 访问，用户名和密码是 nacos

## 9.2 创建 Nacos 服务提供方

### 9.2.1 需求说明

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222132504.png)

### 9.2.2 创建 member-service-nacos-provider-10004 并注册到 NacosServer8848

（1）创建 member-service-nacos-provider-10004

（2）pom.xml

```xml
<dependencies>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>3.8.1</version>
            <scope>test</scope>
        </dependency>

        <!--引入相关的依赖-->

        <!--引入 web-starter, 这里使用版本仲裁，由父项目决定，从父项目继承了版本-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <!--starter-actuator 是 SpringBoot 程序的监控系统，可以实现系统的健康检测
            可以通过 http://localhost:10000/actuator 看到相关的连接和信息
        -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>

        <!--引入 mybatis-starter 整合到 SpringBoot-->
        <dependency>
            <groupId>org.mybatis.spring.boot</groupId>
            <artifactId>mybatis-spring-boot-starter</artifactId>
        </dependency>

        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid-spring-boot-starter</artifactId>
            <!--这里需要指定版本，因为父项目没指定-->
            <version>1.1.17</version>
        </dependency>

        <!--版本仲裁-->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-jdbc</artifactId>
        </dependency>

        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
        </dependency>

        <!--在 member-service-provider-10000 引入打包好的 jar-->
        <dependency>
            <groupId>com.hspedu.springcloud</groupId>
            <artifactId>e_commerce_center-common-api</artifactId>
            <version>1.0-SNAPSHOT</version>
        </dependency>

        <!--引入 sleuth + ZipKin 依赖-->
        <!--<dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-zipkin</artifactId>
        </dependency>-->

        <!--引入 Nacos-starter 场景启动器-->
        <dependency>
            <groupId>com.alibaba.cloud</groupId>
            <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
        </dependency>
    </dependencies>
```

（3）application.yml

```yaml
server:
  port: 10004

spring:
  application:
    name: member-service-nacos-provider #配置应用的名称

  datasource:
    type: com.alibaba.druid.pool.DruidDataSource
    url: jdbc:mysql://localhost:3306/e_commerce_center_db
    username: root
    password: 123456

  #配置 Nacos
  cloud:
    nacos:
      discovery:
        server-addr: localhost:8848 #配置 Nacos Server 的地址

mybatis:
  mapper-locations: classpath:mapper/*.xml #指定 mapper.xml 文件的位置
  type-aliases-package: com.hspedu.springcloud.entity # 实体类所在的包，以后引用就可以直接通过类名进行简写

#配置 Nacos,暴露所有的监控点
management:
  endpoints:
    web:
      exposure:
        include: '*'
```

（4）创建主启动类

```java
//@EnableDiscoveryClient 该注解用于引入 Nacos 发现注册
@EnableDiscoveryClient
@SpringBootApplication
public class MemberNacosProviderApplication10004 {
    public static void main(String[] args) {
        SpringApplication.run(MemberNacosProviderApplication10004.class, args);
    }
}
```

（5）测试

启动 Nacos，运行下载好的 Nacos

启动 10004

观察 Nacos

浏览器输入 http://localhost:10004/member/get/1

### 9.2.3 创建 member-service-nacos-provider-10006 并注册到 NacosServer8848

（1）创建 member-service-nacos-provider-10006

（2）pom.xml

和 10004 一样

（3）application.yml

```yaml
server:
  port: 10006

spring:
  application:
    name: member-service-nacos-provider #配置应用的名称

  datasource:
    type: com.alibaba.druid.pool.DruidDataSource
    url: jdbc:mysql://localhost:3306/e_commerce_center_db
    username: root
    password: 123456

  #配置 Nacos
  cloud:
    nacos:
      discovery:
        server-addr: localhost:8848 #配置 Nacos Server 的地址

mybatis:
  mapper-locations: classpath:mapper/*.xml #指定 mapper.xml 文件的位置
  type-aliases-package: com.hspedu.springcloud.entity # 实体类所在的包，以后引用就可以直接通过类名进行简写

#配置 Nacos,暴露所有的监控点
management:
  endpoints:
    web:
      exposure:
        include: '*'
```

（4）主启动类

```java
//@EnableDiscoveryClient 该注解用于引入 Nacos 发现注册
@EnableDiscoveryClient
@SpringBootApplication
public class MemberNacosProviderApplication10006 {
    public static void main(String[] args) {
        SpringApplication.run(MemberNacosProviderApplication10006.class, args);
    }
}
```

（5）测试

和 10006 一样

## 9.3 创建 Nacos 的服务消费方

### 9.3.1 需求说明

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222132169.png)

### 9.3.2 创建 member-service-nacos-consumer-80 并注册到 NacosServer8848

（1）创建 member-service-nacos-consumer-80

（2）pom.xml

```xml
<dependencies>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>3.8.1</version>
            <scope>test</scope>
        </dependency>

        <!--引入相关的依赖-->

        <!--引入 web-starter, 这里使用版本仲裁，由父项目决定，从父项目继承了版本-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <!--starter-actuator 是 SpringBoot 程序的监控系统，可以实现系统的健康检测
            可以通过 http://localhost:10000/actuator 看到相关的连接和信息
        -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>

        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
        </dependency>

        <!--在 member-service-consumer-80 引入打包好的 jar,即公共服务模块-->
        <dependency>
            <groupId>com.hspedu.springcloud</groupId>
            <artifactId>e_commerce_center-common-api</artifactId>
            <version>1.0-SNAPSHOT</version>
        </dependency>

        <!--引入 Alibaba Nacos-->
        <dependency>
            <groupId>com.alibaba.cloud</groupId>
            <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
        </dependency>

    </dependencies>
```

（3）application.yml

```yaml
server:
  port: 80

spring:
  application:
    name: member-service-nacos-consumer-80

  #配置 Nacos
  cloud:
    nacos:
      discovery:
        server-addr: localhost:8848 #Nacos Server 的地址
```

（4）创建主启动类

```java
@SpringBootApplication
@EnableDiscoveryClient
public class MemberNacosConsumerApplication80 {
    public static void main(String[] args) {
        SpringApplication.run(MemberNacosConsumerApplication80.class, args);
    }
}
```

（5）注入 RestTemplate

com.hspedu.springcloud.config.CustomizationBean

```java
//配置注入 RestTemplate 对象
@Configuration
public class CustomizationBean {
    /**
     * 这里的 @LoadBalanced 就是赋予 RestTemplate 负载均衡的能力
     * 默认是使用轮询算法来访问远程调用接口/地址
     */
    @Bean
    @LoadBalanced
    public RestTemplate getRestTemplate() {
        return new RestTemplate();
    }
}
```

（6）创建 controller

com.hspedu.springcloud.controller.MemberNacosConsumerController

```java
@RestController
@Slf4j
public class MemberNacosConsumerController {
    //public static final String MEMBER_SERVICE_PROVIDER_URL = "http://localhost:10000"; //这里要写成提供服务的模块的注册别名
    /**
     * "http://member-service-nacos-provider" 中的 member-service-nacos-provider 就是服务提供方[集群]注册到 Nacos 的别名，这里是小写
     * 也就是说服务提供方[集群]对外暴露的名称为 member-service-nacos-provider
     * 在配置 RestTemplate 的 CustomizationBean 配置类中还需要增加一个注解 @LoadBalanced 用于赋予 RestTemplate 负载均衡的能力，也就是会根据负载均衡算法来选择某个服务去访问，默认是轮询算法
     */
    public static final String MEMBER_SERVICE_NACOS_PROVIDER_URL = "http://member-service-nacos-provider"; //这里要写成提供服务的模块的注册别名

    //装配 RestTemplate
    @Resource
    private RestTemplate restTemplate;


    //编写方法，添加 member 对象到数据库
    @PostMapping("/member/nacos/consumer/save")
    public Result<Member> save(Member member) {
        /**
         * MEMBER_SERVICE_NACOS_PROVIDER_URL + "/member/save" => http://localhost:10004/member/save 或者是 http://localhost:10005/member/save，轮询算法
         * member 就是通过 RestTemplate 发出的 post 请求携带的数据
         * Result.class 返回对象类型
         */
        return restTemplate.postForObject(MEMBER_SERVICE_NACOS_PROVIDER_URL + "/member/save", member, Result.class);
    }

    //编写方法，根据 id，调用服务接口，返回 member 对象信息
    @GetMapping("/member/nacos/consumer/get/{id}")
    public Result<Member> getMemberById(@PathVariable("id") Long id) {
        return restTemplate.getForObject(MEMBER_SERVICE_NACOS_PROVIDER_URL + "/member/get/" + id, Result.class);
    }
}
```

（7）测试

启动 Nacos Server 8848

启动 member-service-nacos-provider-10004、10006

启动 member-service-nacos-consumer-80

浏览器输入 http://localhost/member/nacos/consumer/get/1

（8）可以配置其它的负载均衡算法

com.hspedu.springcloud.config.RibbonRule

```java
//配置其它的负载均衡算法
@Configuration
public class RibbonRule {
    @Bean
    public IRule myRibbonRule() {
        //这里返回随机算法
        return new RandomRule();
    }
}
```

## 9.4 Nacos AP 和 CP 的切换

### 9.4.1 各种注册中心对比

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222132813.png)

### 9.4.2 选择 AP 还是 CP？

（1）CP：服务可以不能用，但必须要保证数据的一致性

（2）AP：数据可以短暂不一致，但最终是需要一致的，无论如何都要保证服务的可用

（3）取舍：只能在 CP 和 AP 选择一个平衡点，大多数都是选择 AP 模式

### 9.4.3 AP 和 CP 切换

Nacos 集群默认支持的是 CAP 原则中的 AP 原则，但是也可切换为 CP 原则（一般不切换）

## 9.5 Nacos 的配置中心实例

### 9.5.1 需求分析

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222132027.png)

### 9.5.2 在 Nacos Server 加入配置

（1）进入到 Nacos Server

（2）注意加入配置的文件后缀是 .yaml 别忘了

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222132270.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222132918.png)

### 9.5.3 创建 Nacos 配置客户端模块 e-commerce-nacos-config-client5000

（1）创建新的 Module，这里是为了清晰没有继续使用原来的模块

（2）修改 pom.xml

```xml
<dependencies>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>3.8.1</version>
            <scope>test</scope>
        </dependency>

        <!--引入相关的依赖-->

        <!--引入 web-starter, 这里使用版本仲裁，由父项目决定，从父项目继承了版本-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <!--starter-actuator 是 SpringBoot 程序的监控系统，可以实现系统的健康检测
            可以通过 http://localhost:10000/actuator 看到相关的连接和信息
        -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>

        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
        </dependency>

        <!--在 member-service-consumer-80 引入打包好的 jar,即公共服务模块-->
        <dependency>
            <groupId>com.hspedu.springcloud</groupId>
            <artifactId>e_commerce_center-common-api</artifactId>
            <version>1.0-SNAPSHOT</version>
        </dependency>

        <!--引入 Alibaba Nacos-->
        <dependency>
            <groupId>com.alibaba.cloud</groupId>
            <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
        </dependency>

        <!--加入 nacos-config starter-->
        <dependency>
            <groupId>com.alibaba.cloud</groupId>
            <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>
        </dependency>

    </dependencies>
```

（3）创建 application.yml

```yaml
spring:
  profiles:
    active: dev #指定环境，常见的环境有 dev开发环境/test测试环境/prod生产环境
```

（4）创建 bootstrap.yml

```yaml
server:
  port: 5000 #端口

spring:
  application:
    #这里的 name 需要参考我们在 Nacos 配置中心配置的配置文件的 Data Id，我们配置的是 e-commerce-nacos-config-client-dev，这里需要把 -dev 去掉，它会自己拼接
    name: e-commerce-nacos-config-client

  #配置 Nacos
  #这里需要配置两个地址，第一个是把自己注册到哪个 Nacos 的地址，第二个是从哪个 Nacos 获取配置的地址
  cloud:
    nacos:
      discovery:
        server-addr: localhost:8848 #服务注册中心地址,把自己注册到这个服务注册中心
      config:
        server-addr: localhost:8848 #从这个服务注册中心获取配置，因为服务注册中心和服务配置中心有可能是分离的不在同一个地址，所以要分开指明地址
        file-extension: yaml #指定配置文件的格式

#找到相应配置文件的流程:
#根据 spring: cloud: nacos: config: server-addr: localhost:8848 可以找到相应的 Nacos
#根据 spring: application: name: e-commerce-nacos-config-client 可以得到配置文件的名字为 e-commerce-nacos-config-client
#根据 application.yml 中配置的 spring: profiles: active: dev 可以得到环境是 dev
#根据 spring: cloud: nacos: config: file-extension: yaml 可以得到配置文件的格式为 yaml
#综上，就可以找到 localhost:8848 的 Nacos 下的配置文件 e-commerce-nacos-config-client-dev.yaml 从而获取信息
```

（5）主启动类

```java
@SpringBootApplication
@EnableDiscoveryClient
public class NacosConfigClientApplication5000 {
    public static void main(String[] args) {
        SpringApplication.run(NacosConfigClientApplication5000.class, args);
    }
}
```

（6）业务类

com.hspedu.springcloud.controller.NacosConfigClientController

```java
@RestController
@RefreshScope //@RefreshScope 是 springcloud 的原生注解，实现配置信息自动刷新
public class NacosConfigClientController {
    /**
     * @Value("${config.ip") 会拉取 Nacos Server 的 e-commerce-nacos-config-client-dev.yaml 配置文件中的配置信息
     * config:
     *     ip: "122.22.22.22"
     *     name: "韩顺平教育"
     * 中的 ip
     */
    @Value("${config.ip}")
    private String configIp;

    @Value("${config.name}")
    private String configName;

    @GetMapping("/nacos/config/ip")
    public String getConfigIp() {
        System.out.println(configIp);
        return configIp;
    }

    @GetMapping("/nacos/config/name")
    public String getConfigName() {
        return configName;
    }
}
```

（7）测试

启动 Nacos Server

启动 e-commerce-nacos-config-client5000

浏览器输入 http://localhost:5000/nacos/config/ip 和 http://localhost:5000/nacos/config/name 查看返回结果

（8）注意事项和细节

springboot 中配置文件的加载是存在优先级顺序的，bootstrap.yml 优先级高于 application.yml

## 9.6 Nacos 将配置文件分类配置（实现配置隔离）

### 9.6.1 按 DataID 分类

（1）需求分析

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222132581.png)

（2）解决方案分析

使用 DataID 方案解决

（3）配置实现

增加配置文件 e-commerce-nacos-config-client-test.yaml

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222132090.png)

（4）修改 application.yml

就只用把 application.yml 中的 dev 改成 test 就行了

```yaml
spring:
  profiles:
    #active: dev #指定环境，常见的环境有 dev开发环境/test测试环境/prod生产环境
    active: test
```

（5）测试

浏览器输入 http://localhost:5000/nacos/config/ip

### 9.6.2 按 Group 分类

（1）需求分析

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222132154.png)

（2）解决方案分析

使用 Group 方案解决

（3）配置实现

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222132823.png)

（4）修改 application.yml

确保环境是 dev

（5）修改 bootstrap.yml

```yaml
server:
  port: 5000 #端口

spring:
  application:
    #这里的 name 需要参考我们在 Nacos 配置中心配置的配置文件的 Data Id，我们配置的是 e-commerce-nacos-config-client-dev，这里需要把 -dev 去掉，它会自己拼接
    name: e-commerce-nacos-config-client

  #配置 Nacos
  #这里需要配置两个地址，第一个是把自己注册到哪个 Nacos 的地址，第二个是从哪个 Nacos 获取配置的地址
  cloud:
    nacos:
      discovery:
        server-addr: localhost:8848 #服务注册中心地址,把自己注册到这个服务注册中心
      config:
        server-addr: localhost:8848 #从这个服务注册中心获取配置，因为服务注册中心和服务配置中心有可能是分离的不在同一个地址，所以要分开指明地址
        file-extension: yaml #指定配置文件的格式
        group: order #指定 order 组，默认是 DEFAULT_GROUP
```

（6）测试

浏览器输入 http://localhost:5000/nacos/config/ip

### 9.6.3 按 Namespace 分类

（1）需求分析

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222132165.png)

（2）解决方案分析

使用 Namespace 方案解决

（3）配置实现

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222133291.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222133918.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222133130.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222133313.png)

（4）修改 application.yml

确保环境是 dev

（5）修改 bootstrap.yml

```yaml
server:
  port: 5000 #端口

spring:
  application:
    #这里的 name 需要参考我们在 Nacos 配置中心配置的配置文件的 Data Id，我们配置的是 e-commerce-nacos-config-client-dev，这里需要把 -dev 去掉，它会自己拼接
    name: e-commerce-nacos-config-client

  #配置 Nacos
  #这里需要配置两个地址，第一个是把自己注册到哪个 Nacos 的地址，第二个是从哪个 Nacos 获取配置的地址
  cloud:
    nacos:
      discovery:
        server-addr: localhost:8848 #服务注册中心地址,把自己注册到这个服务注册中心
      config:
        server-addr: localhost:8848 #从这个服务注册中心获取配置，因为服务注册中心和服务配置中心有可能是分离的不在同一个地址，所以要分开指明地址
        file-extension: yaml #指定配置文件的格式
        group: seckill #指定 order 组，默认是 DEFAULT_GROUP
        namespace: f912f205-9854-4cd7-8e4b-40d9909ea239 #指定对应的 namespace id(阿里的)
```

其中 namespace: f912f205-9854-4cd7-8e4b-40d9909ea239 在这

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222133453.png)

（6）测试

浏览器输入 http://localhost:5000/nacos/config/ip

### 9.6.4 Namespace/Group/DataID 的关系

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222133250.png)

（1）Nacos 默认的命名空间是 public，Namespace 主要用来实现配置隔离，隔离范围大

（2）Group 默认是 DEFAULT_GROUP，Group 可以把不同的微服务划分到同一个分组里面去

（3）Service 就是微服务，相同的 Service 可以是一个 Cluster（簇/集群），Instance 就是微服务的实例

# 第 10 章 SpringCloud Alibaba Sentinel（服务熔断降级）

## 10.1 Sentinel 基础

### 10.1.1 Sentinel 是什么

（1）随着微服务的流行，服务和服务之间的稳定性变得越来越重要，Sentinel 以流量为切入点，从流量控制、熔断降级、系统负载保护等多个维度保护服务的稳定性

（2）一句话：Sentinel 是分布式系统的流量防卫兵，保护你的微服务可以稳定运行

### 10.1.2 Sentinel 核心功能

#### 10.1.2.1 流量控制

拿旅游景点举例：每个旅游景点通常都会有最大的接待量，不可能无限制的放游客进入，比如长城每天只卖八万张票，超过八万的游客就无法买票进入，这种只卖 N 张票，就是一种限流的手段

#### 10.1.2.2 熔断降级

在调用系统的时候，如果调用链路中的某个资源出现了不稳定，最终会导致请求发生堆积

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222133568.png)

熔断降级可以解决这个问题，所谓的熔断降级就是当检测到调用链路中某个资源出现不稳定的表现，例如请求响应时间长或异常比例升高的时候，则对这个资源的调用进行限制，让请求快速失败，避免影响到其它的资源而导致级联故障

#### 10.1.2.3 系统负载保护

根据系统能够处理的请求和允许进来的请求做平衡，追求的目标是在系统不被拖垮的情况下提高系统的吞吐率

#### 10.1.2.4 消息削峰填谷

某瞬时来了大流量的请求，而如果此时要处理所有请求，很可能会导致系统负载过高，影响稳定性，但其实可能后面几秒之内都没有消息投递，若直接把多余的消息丢掉则没有充分利用系统处理消息的能力。Sentinel 的 Rate Limiter 模式能在某一段时间间隔内以匀速方式处理这样的请求，充分利用系统的处理能力，也就是削峰填谷，保证资源的稳定性

### 10.1.3 Sentinel 两个组成部分

（1）核心库（Java 客户端）：不依赖任何框架/库，能够运行在所有 Java 运行时的环境，对 SpringCloud 有较好的支持

（2）控制台（DashBoard）：基于 SpringBoot 开发，打包后可以直接运行，不需要额外的 Tomcat 等应用容器

## 10.2 Sentinel 控制台

### 10.2.1 需求分析

搭建 Sentinel 控制台，用于显示各个微服务的使用情况

### 10.2.2 下载

sentinel-dashboard-1.8.0.jar

### 10.2.3 运行

`java -jar sentinel-dashboard-1.8.0.jar`

Sentinel 控制台默认端口是 8080

### 10.2.4 访问

浏览器：http://localhost:8080

账号密码都是 sentinel

## 10.3 Sentinel 监控微服务

### 10.3.1 需求分析

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222133502.png)

当调用了 member-service-nacos-provider-10004 微服务时，可以监控到请求的 url、QPS、响应时间、流量

### 10.3.2 代码实现

（1）member-service-nacos-provider-10004 的 pom.xml 文件

```xml
<!--引入 Alibaba-Sentinel 场景启动器-->
        <dependency>
            <groupId>com.alibaba.cloud</groupId>
            <artifactId>spring-cloud-starter-alibaba-sentinel</artifactId>
        </dependency>
```

（2）member-service-nacos-provider-10004 的 yaml 文件

```yaml
server:
  port: 10004

spring:
  application:
    name: member-service-nacos-provider #配置应用的名称

  datasource:
    type: com.alibaba.druid.pool.DruidDataSource
    url: jdbc:mysql://localhost:3306/e_commerce_center_db
    username: root
    password: 123456

  #配置 Nacos
  cloud:
    nacos:
      discovery:
        server-addr: localhost:8848 #配置 Nacos Server 的地址
    sentinel:
      transport:
        dashboard: localhost:8080 #指定和哪个 dashboard 进行关联
        #transport: port 会在被监控的微服务对应的主机上启动 Http Server
        #该 Http Server 会与 Sentinel 控制台进行交互
        #比如 Sentinel 控制台添加了一个限流规则，则 Sentinel 控制台就会把规则数据发送给这个 Http Server 接收，Http Server 再将这个规则注册到被监控的微服务中配置的 Sentinel 客户端上
        #如果端口被占用了，就会自动的从当前端口开始依次 +1 扫描
        port: 8719 #指定一个端口和 Sentinel 控制台交互，默认是 8719

mybatis:
  mapper-locations: classpath:mapper/*.xml #指定 mapper.xml 文件的位置
  type-aliases-package: com.hspedu.springcloud.entity # 实体类所在的包，以后引用就可以直接通过类名进行简写

#配置 Nacos,暴露所有的监控点
management:
  endpoints:
    web:
      exposure:
        include: '*'
```

（3）测试

启动 Nacos Server 8848（可启可不启，因为 Sentinel 和 Nacos 不关联）

启动 Sentinel 8080 控制台（Sentinel DashBoard）

启动 member-service-nacos-provider-10004

浏览器访问 http://localhost:10004/member/get/1

查看 Sentinel 控制台监控页面

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222133201.png)

（4）注意事项和细节

QPS：Queries Per Second（每秒查询率或者每秒钟请求数量），是服务器每秒响应的查询次数

Sentinel 采用的是懒加载，只有调用了某个接口/服务，才能看到监控数据

## 10.4 Sentinel 流量控制

### 10.4.1 规则

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222133631.png)

（1）资源名：唯一名称，默认请求路径

（2）针对来源：Sentinel 可以针对调用者进行限流，填写微服务名，默认 default（不区分来源）

（3）阈值类型和单机阈值：

​		1）QPS（每秒钟的请求数量）：当调用该 API 的 **QPS** 达到阈值的时候，进行限流

​		2）线程数：当调用该 API 的**线程数**达到阈值的时候，进行限流

​		3）QPS 和线程数的区别：

​		比如 QPS 和线程数的阈值都设为 1 （我理解的：对于 QPS 和线程数，两者的阈值的单位含义不同：QPS 的阈值单位是每秒的请求数量，即每秒的请求数量是 1，而线程数的阈值单位是每秒同时存在的线程数量，即每秒同时存在的线程数量为 1，这样才能说通下面的内容），对于 QPS 而言，如果在 1 秒内客户端发出了超过 1 次的请求就达到阈值，从而限流；对于线程数而言，如果在 1 秒内客户端发出了 2 次请求，不一定达到线程限制的阈值，因为假设我们发出 1 次请求后台只会创建一个线程，但是这个请求处理完成的时间是 0.1 秒（可以视为该请求对应的线程存活 0.1 秒），所以当客户端第 2 次请求时（比如客户端是在 0.3 秒发出的），这时第 1 个请求的线程就已经结束了，因此就没有达到线程的阈值（此时同时存在的线程数没超过 1），也不会限流。可以这样理解：如果一个线程平均执行时间为 0.05 秒，就说明在 1 秒钟可以执行 20 次，即每秒线程数为 20，那么就相当于 QPS 为 20，即每秒请求数是 20

（4）是否集群：不需要集群

（5）流控模式：

​		1）直接：API 达到限流条件时，直接限流

​		2）关联：当关联的资源达到阈值时，就限流自己。比如 t2 和 t1 关联，当 t2 资源达到阈值时，限流 t1

​		3）链路：当从某个接口过来的资源达到限流条件时，开启限流

（6）流控效果：

​		1）快速失败：直接失败，抛异常

​		2）Warm Up：根据 codeFactor（冷加载因子，默认 3）的值，从阈值/codeFactor 经过预热时长才达到设置的 QPS 阈值

​		3）排队等待：匀速排队，让请求以匀速的速度通过，阈值类型必须设置为 QPS，否则无效

### 10.4.2 流量控制实例 - QPS

#### 10.4.2.1 需求分析

通过 Sentinel 实现流量控制

当调用 member-service-nacos-provider-10004 的 /member/get/1 这个接口/API 时，限制 1 秒内最多访问 1 次，否则直接失败抛异常

#### 10.4.2.2 配置实现步骤

（1）为 /member/get/1 增加流控规则

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222133848.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222133372.png)

#### 10.4.2.3 测试

不用重启

浏览器输入 http://localhost:10004/member/get/1 1 秒钟内访问次数超过 1 次，页面出现错误提示

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222133557.png)

#### 10.4.2.4 注意事项和细节

（1）流量规则改动实时生效不需要重启微服务

（2）上面配置的规则只对 /member/get/1 生效，那如果有 /member/get/2 或 3 或 4 怎么办？在 Sentinel 配置流量规则时，可以配置通配符让 /member/get/1 和 /member/get/2 统一使用一个规则。

方案一：把访问的接口的 URL 的占位符显示参数的格式改掉，改成用 ？携带参数的格式，原本浏览器请求接口的形式是 /member/get/1，当浏览器请求接口的形式是 /member/get?id=1 时，这样 Sentinel 会统一认为是给 /member/get 添加规则，这样就会对 /member/get 限流

```java
@GetMapping(value = "/member/get", params = "id")
    public Result getMemberById(Long id) {
        Member member = memberService.queryMemberById(id);
        if (member != null) {
            return Result.success("查询成功 member-service-nacos-provider:10004" + color, member);
        } else {
            return Result.error("402", "Id = " + id + "不存在");
        }
    }
```

浏览器访问：http://localhost:10004/member/get?id=1

方案2：URL 资源清洗，可以通过 UrlCleaner 接口来实现资源清洗，也就是对于 /member/get/{id} 这个 URL，统一归集到 /member/get/* 资源下，具体配置需要实现 UrlCleaner 接口，并重写 clean 方法

```java
@Component
public class CustomUrlCleaner implements UrlCleaner {
    @Override
    public String clean(String originUrl) { //originUrl 是从浏览器拿到的值，如果浏览器请求 /member/get/1，那么 originUrl 就是 /member/get/1
        if (StringUtils.isBlank(originUrl)) { //isBlank 用于判断 originUrl 不为空并且有长度并且不是全部为空格时返回 false
            return originUrl;
        }
        if (originUrl.startsWith("/member/get")) { //如果得到的 url 是以 /member/get 开头，进行处理
            //给 Sentinel 返回资源名为 /member/get/*
            //这样在 Sentinel 对 /member/get/* 添加流控规则即可
            return "/member/get/*";
        }
        return originUrl;
    }
}
```

（3）如果 Sentinel 流控规则没有持久化，当我们重启调用 API 所在的微服务模块后，规则会丢失，需要重新加入

### 10.4.3 流量控制实例 - 线程数

#### 10.4.3.1 需求分析

当调用 member-service-nacos-provider-10004 的 /member/get/* 这个接口/API 时，限制只有一个工作线程，否则直接失败抛异常

#### 10.4.3.2 配置实现

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222134166.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222134456.png)

#### 10.4.3.3 结果

（1）浏览器输入：http://localhost:10004/member/get/1 快速刷新，页面显示正常（原因是当前服务线程执行时间很短，刷新下一次的时候当前服务线程已经执行完毕，已经启动了新的线程）

（2）当线程数的阈值设为 1 时，表示每秒同时存在的线程数不能超过 1，否则就限流，如果想要看到错误，可以让当前线程的执行时间不小于 1秒，然后在一秒内疯狂请求 http://localhost:10004/member/get/1

```java
@GetMapping("/member/get/{id}")
    public Result getMemberById(@PathVariable("id") Long id, HttpServletRequest request) {
        //让该线程休眠 1s
        try {
            TimeUnit.MILLISECONDS.sleep(1000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

        Member member = memberService.queryMemberById(id);
        if (member != null) {
            return Result.success("查询成功 member-service-nacos-provider:10004" + color, member);
        } else {
            return Result.error("402", "Id = " + id + "不存在");
        }
    }
```

#### 10.4.3.4 注意事项和细节

（1）当请求一次微服务的 API 接口时，会自动开启一个线程

### 10.4.4 流量控制实例 - 关联

#### 10.4.4.1 关联的含义

当关联的资源达到阈值时，就限流自己。比如 t2 和 t1 关联，当 t2 资源达到阈值时，限流 t1，所以要把规则设置在 t1

#### 10.4.4.2 需求分析

当调用 member-service-nacos-provider-10004 的 /t2 的 API 接口时，如果 QPS 超过 1，这时（指此时 t2 正处于 QPS 超过 1 的这个时间段）调用 /t1 API 接口时会直接失败抛异常，其中 /t2 是关联的资源，/t1 是限流的资源，调用 /t1 的时候报错。隔山打牛

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222134277.png)

#### 10.4.4.3 配置实现步骤

（1）增加 t1 和 t2 接口

```java
@GetMapping("/t1")
    public Result t1() {
        return Result.success("t1() 被执行");
    }

    @GetMapping("/t2")
    public Result t2() {
        return Result.success("t2() 被执行");
    }
```

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222134901.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222134293.png)

#### 10.4.4.4 测试

因为 t1 配置了 QPS 的阈值是 1，t2 和 t1 关联，当 t2 正处于 QPS 大于 1 时会限流 t1，因为不好掌握让 t2 正处于 QPS 大于 1 时调用 t1，所以使用 Postman 让 t2 处于 QPS 大于 1 的状态

（1）创建一个新的 Request

（2）保存 Request 到一个新的 collection 中

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222134814.png)

### 10.4.5 流量控制实例 - Warm up

#### 10.4.5.1 Warm up 介绍

当流量突然增大的时候，我们常常会希望系统从空闲状态到繁忙状态的切换的时间长一些，即如果系统在此之前长期处于空闲的状态，我们希望处理请求的数量是缓步的增多，经过预期的时间以后，到达系统处理请求个数的最大值，Warm Up（冷启动，预热）模式就是为了实现这个目的

这个场景主要用于启动需要额外开销的场景，例如建立数据库连接等

还比如秒杀应用在开启的瞬间，大流量很容易造成冲垮系统，Warm Up 可以慢慢的把流量放入，最终将阈值增长到设置阈值

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222134937.png)

（1）通常冷启动的过程系统允许通过 QPS 曲线图

（2）默认 coldFactor 为 3，即请求 QPS 从 Threshold 除以 3 开始，经预热时长逐渐升至设定的 QPS 阈值，这里的 Threshold 就是最终要达到的 QPS 阈值

#### 10.4.5.2 需求分析

（1）调用 member-service-nacos-provider-10004 的 /t2 API接口，将 QPS 设置为 9，设置 Warm Up 值为 3

（2）含义为请求 /t2 的 QPS 从 Threshold 除以 3 （9/3=3）开始，经预热时长（3 秒）逐渐升至设定的 QPS 阈值（9）

（3）9/3 其中的这个 3 就是默认冷启动的启动加载因子 coldFactor = 3

（4）预期效果：在前 3 秒，如果访问 /t2 的 QPS 超过 3 会直接报错，在 3 秒后访问 /t2 的 QPS 超过 3，小于等于 9 就是正常访问

#### 10.4.5.3 配置实现步骤

（1）为 /t2 增加流控规则

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222134474.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222134895.png)

#### 10.4.5.4 测试

启动 Nacos Server 8848

启动 Sentinel 8080 控制台

启动 member-service-nacos-provider-10004

浏览器访问 http://localhost:10004/t2 快速刷新页面，在前 3 秒会出现流控异常，后 3 秒就正常了（如果刷新非常快 QPS>9，仍然会出现流控异常，所以要掌握好） 

### 10.4.6 流量控制实例 - 排队

#### 10.4.6.1 排队介绍

（1）排队方式：这种方式严格控制了请求通过的间隔时间，让请求以均匀的速度通过，对应的是漏桶算法

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222134621.png)

（2）这种方式主要用于处理间隔性突发的流量，例如消息队列。比如这样的场景：在某一秒有大量的请求到来，而接下来的几秒则处于空闲状态，我们希望系统能够在接下来的空闲期间逐渐处理这些请求，而不是在第一秒直接拒绝多余的请求

（3）匀速排队，阈值必须设置为 QPS

#### 10.4.6.2 需求分析

（1）调用 member-service-nacos-provider-10004 的 /t2 API接口，将 QPS 设置为 1

（2）当调用 /t2 的 QPS 超过 1 时，不拒绝请求，而是排队等待，依次执行

（3）设置等待时间是 10 秒，当等待时间超过 10 秒，则为等待超时

#### 10.4.6.3 修改业务类

```java
@GetMapping("/t2")
    public Result t2() {

        //让线程休眠 1 秒，模拟执行时间为 1 秒
        try {
            TimeUnit.MILLISECONDS.sleep(1000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        //输出线程的信息
        log.info("执行 t2() 线程 id={}", Thread.currentThread().getId());
        return Result.success("t2() 被执行");
    }
```

#### 10.4.6.4 配置实现步骤

（1）为 /t2 增加流控规则

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222134004.png)

#### 10.4.6.5 测试

启动 Nacos Server 8848

启动 Sentinel 8080

启动 member-service-nacos-provider-10004

浏览器运行 http://localhost:10004/t2 快速刷新页面 9 次，观察前台/后台输出的情况

预期结果：

没有报错误，后台请求排队执行，每隔 1s 匀速执行

浏览器运行 http://localhost:10004/t2 快速刷新页面 20 次，当请求等待时间超过 10s，仍然出现流控异常

## 10.5 Sentinel 熔断降级

### 10.5.1 线程堆积引出熔断降级

一个服务常常会调用别的模块，可能是另外一个远程服务、数据库或者第三方 API 等。例如有微服务 A 和微服务 B，微服务 A 需要调用 微服务 B，微服务 B 的稳定性是不能保证的，如果微服务 B 出现了不稳定的情况，那么它给 A 响应的时长就变长，那么当浏览器向微服务 A 发出很多的请求时，因为 A 从 B 拿不到响应的数据就会导致浏览器发出请求的线程堆积在 A，最终可能耗尽微服务 A 的线程池，导致微服务 A 也变得不可用了，这时我们就可以对微服务 B 进行熔断降级，让其快速返回结果，不要造成线程堆积

### 10.5.2 基本介绍

（1）现代微服务架构都是分布式的，由非常多的服务组成，不同服务之间相互调用，组成复杂的调用链路

（2）链路调用中会产生放大的效果，复杂链路上的某一环不稳定，就可能会层层级联，最终导致整个链路都不可用

（3）因此需要对不稳定的弱依赖服务调用进行熔断降级，暂时切断不稳定调用，避免局部不稳定因素导致整体的雪崩

### 10.5.3 熔断、降级、限流三者的关系

（1）熔断强调的是服务之间的调用能实现自我恢复的状态

（2）限流是从系统的流量入口考虑，从进入的流量上进行限制，达到保护系统的作用

（3）降级是从系统业务的维度考虑，流量大了或者频繁异常可以牺牲一些非核心的业务，保护核心流程正常使用

（4）熔断是降级方式的一种，降级又是限流的一种方式，三者都是为了通过一定的方式在流量过大或者出现异常时保护系统的手段

### 10.5.4 熔断策略

#### 10.5.4.1慢调用比例

（1）慢调用比例（slow_request_ratio）：选择以慢调用比例作为阈值，需要设置允许的慢调用 RT（即最大的响应时间），请求的响应时间大于该值则统计为慢调用

（2）当单位统计时长（statIntervalMs）内请求数目大于设置的最小请求数目，并且慢调用的比例大于阈值，则接下来的熔断时长内请求会自动被熔断

（3）熔断时长后，熔断器会进入探测恢复状态（HALF-OPEN 状态），若接下来的一个请求响应时间小于设置的慢调用 RT，则结束熔断；若大于设置的慢调用 RT，则会再次被熔断

#### 10.5.4.2 异常比例

（1）异常比例（error_ratio）：当单位统计时长（statIntervalMs）内请求数据大于设置的最小请求数目，并且异常的比例大于阈值，则接下来的熔断时长内请求会自动被熔断

（2）经过熔断时长后熔断器会进入探测恢复状态（half-open 状态）

（3）若接下来的一个请求成功完成则结束熔断，否则会再次被熔断

（4）异常比率的阈值范围是 [0.0,1.0]，代表 0% - 100%

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222134331.png)

#### 10.5.4.3 异常数

（1）异常数（error_count）：当单位统计时长内的异常数据超过阈值之后会自动进行熔断

（2）经过熔断时长后熔断器会进入探测恢复状态（half-open 状态）

（3）若接下来的一个请求成功完成则结束熔断，否则会再次被熔断

### 10.5.5 熔断降级实例 - 慢调用比例

#### 10.5.5.1 需求分析

当调用 member-service-nacos-provider-10004 的 /t3 API接口时，如果在 1s 内持续进入了 5 个请求，并且请求的平均响应时间超过 200ms，那么就在未来 10s 内，断路器打开，让 /t3 API接口微服务不可用

后面对 /t3 API接口访问降到 1s 内 1 个请求，降低访问量了，断路器关闭，微服务恢复

#### 10.5.5.2 修改业务类

```java
@GetMapping("/t3")
    public Result t3() {
        //让线程休眠 300ms，模拟执行时间
        try {
            TimeUnit.MILLISECONDS.sleep(300);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        return Result.success("t3()执行...");
    }
```

#### 10.5.5.3 配置实现步骤

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222134082.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222134602.png)

#### 10.5.5.4 测试

启动 Nacos Server 8848

启动 Sentinel 8080 控制台

启动 member-service-nacos-provider-10004

Postman 测试

#### 10.5.5.5 注意事项和细节

（1）平均响应时间超出阈值且在 1s 内通过的请求 >= 5，两个条件同时满足后触发降级

（2）熔断时间过后关闭断路器，访问恢复正常

### 10.5.6 熔断降级实例 - 异常比例

#### 10.5.6.1 需求分析

当调用 member-service-nacos-provider-10004 的 /t4 API接口时，当资源的每秒请求量 >= 5 并且每秒异常总数占通过量的比值超过 20%（即异常比例到 20%），断路器打开进入降级状态，让 /t4 API接口微服务不可用

当对 /t4 API接口访问降到 1s 内 1 个请求，这样就达不到资源的每秒请求量 >= 5，这样断路器关闭，5s 后微服务恢复

#### 10.5.6.2 修改业务类

```java
private static int num = 0; //执行的计数器


    @GetMapping("/t4")
    public Result t4() {
        //设计异常比例达到 50% > 20%
        if (++num % 2 == 0) {
            //制造一个异常
            System.out.println(3 / 0);
        }
        log.info("熔断降级测试 执行 t4() 线程 id={}", Thread.currentThread().getId());
        return Result.success("t4 执行");
    }
```

#### 10.5.6.3 配置实现步骤

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222135235.png)

#### 10.5.6.4 测试

Postman 测试

#### 10.5.6.5 注意事项和细节

（1）当资源的每秒请求量 >= 5，并且每秒异常总数占通过量的比值超过阈值，资源进入降级状态，需要两个条件都满足

### 10.5.7 熔断降级实例 - 异常数

#### 10.5.7.1 需求分析

（1）当调用 member-service-nacos-provider-10004 的 /t5 API接口时，当资源的每**分钟**请求量 >= 5 并且每**分钟**异常总数 >= 5，断路器打开，让 /t5 API接口微服务不可用

（2）当熔断时间（比如 20s）结束后，断路器关闭，微服务恢复

#### 10.5.7.2 修改业务类

```java
@GetMapping("/t5")
    public Result t5() {
        //出现 10 次异常，这里需要设置大于 6，需要留出几次做测试和加入簇点链路
        if (++num <= 10) {
            //制造一个异常
            System.out.println(3 / 0);
        }
        log.info("熔断降级测试 执行 t5() 线程 id={}", Thread.currentThread().getId());
        return Result.success("t5 执行");
    }
```

#### 10.5.7.3 配置实现步骤

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222135192.png)

#### 10.5.7.4 测试

浏览器输入 http://localhost:10004/t5 访问 5 次，出现 5 次异常（1 分钟内完成），5 次异常后出现熔断降级

20s 后再次访问 http://localhost:10004/t5 返回正常结果

## 10.6 Sentinel 热点规则（热点参数限流）

### 10.6.1 一个问题引出热点 key 限流

（1）热点：热点即经常访问的数据，很多时候我们希望统计热点数据中访问频次最高的数据，并对其访问进行限制。比如某条新闻上热搜，在某段时间内高频访问，为了防止系统雪崩，可以对该条新闻进行热点限流

（2）比如商品 ID 为参数，统计一段时间内最常购买的商品 ID 并进行限制

（3）比如用户 ID 为参数，针对一段时间内频繁访问的用户 ID 进行限制

（4）之前是对某一个 API 接口进行限流，现在是对某一个接口携带的某一个参数限流

### 10.6.2 基本介绍

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222135180.png)

（1）热点参数限流会统计传入参数中的热点参数，并根据配置的限流阈值与模式对包含热点参数的资源调用进行限流

（2）热点参数限流可以看做是一种特殊的流量控制，仅对包含热点参数的资源调用生效

（3）Sentinel 利用 LRU 策略统计最近最常访问的热点参数，结合令牌桶算法来进行参数级别的流控

### 10.6.3 热点 Key 限流 - 实例

#### 10.6.3.1 需求分析

（1）对 member-service-nacos-provider-10004 的 `/news?id=x&type=x` 接口进行热点限流

（2）假定 id = 10 这一条新闻是当前的热点新闻，当查询新闻时，对非热点新闻的 id 的请求 QPS 限定为 2，id = 10 的 QPS 限定为 100

（3）如果访问超出了规定的 QPS，触发热点限流机制，调用自定义的方法，给出提示信息

（4）当对 `/news?id=x&type=x` 接口降低访问量，QPS 达到规定范围服务恢复 

#### 10.6.3.2 修改业务类

如果访问超出了规定的 QPS，触发热点限流机制，调用自定义的方法，给出提示信息

```java
//热点 key 限流的异常处理方法
    public Result newsBlockHandler(String id, String type, BlockException blockException) {
        return Result.success("查询 id = " + id + " 新闻触发热点 key 限流保护");
    }
```

member-service-nacos-provider-10004 的 `/news?id=x&type=x` 接口

```java
/**
 * 完成对热点 key 限流的测试
 * @SentinelResource 指定 Sentinel 限流资源
 * value = "news" 表示 Sentinel 限流资源的名称，由程序员指定
 * blockHandler = "newsBlockHandler" 当出现限流时，由 newsBlockHandler 方法进行处理
 */
@GetMapping("/news")
@SentinelResource(value = "news", blockHandler = "newsBlockHandler")
public Result queryNews(@RequestParam(value = "id", required = false) String id,
                        @RequestParam(value = "type", required = false) String type) {
    //在实际开发中，新闻应该到 DB 或者缓存获取，这里模拟一下
    log.info("到 DB 查询新闻");
    return Result.success("返回 id = " + id + " 新闻 from DB");
}
```

#### 10.6.3.3 测试

（1）启动 Nacos Server 8848

（2）启动 Sentinel 8080 控制台

（3）启动 member-service-nacos-provider-10004

（4）配置实现步骤

​		1）给 news 增加热点规则，注意不是 /news

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222135732.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222135832.png)

（5）浏览器输入：http://localhost:10004/news?id=1&type=jiaoyu，如果 QPS 没有超过 2，则返回正确结果；

浏览器输入：http://localhost:10004/news?id=1&type=jiaoyu，如果 QPS 超过 2，则返回热点 key 处理信息

（6）独立设置热点 id = 10 的 QPS 阈值

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222135633.png)

（7）浏览器输入：http://localhost:10004/news?id=10&type=jiaoyu，如果 QPS 没有超过 100，则返回正确结果；

浏览器访问的 id 不是 10 的，仍然遵守 QPS 不能超过 2 的热点限制

### 10.6.4 注意事项和细节

热点参数类型是 byte/int/long/float/double/char/String

热点参数值可以配置多个

热点规则只对指定的参数生效，比如本实例只对 id 生效，对 type 不生效

## 10.7 系统规则

### 10.7.1 引出系统规则

如果系统的最大性能为 100 QPS，现有两个微服务 /t1 /t2，那么如何分配 /t1 /t2 的 QPS？

方案一：/t1 分配 QPS=50，/t2 分配 QPS=50，这样分的话如果 /t1 当前 QPS 达到 50，而 /t2 的 QPS 才 10，会造成没有充分利用服务器性能

方案二：/t1 分配 QPS=100，/t2 分配 QPS=100，这样分的话容易造成系统没有流量保护，造成请求线程堆积，形成雪崩

有没有对各个资源请求的 QPS 弹性设置（t1 多了就少给 t2，t2 多了就少给 t1），只要总数不超过系统最大 QPS 的流量保护规则？引出系统规则

系统规则的作用就是在系统稳定的前提下，保持系统的吞吐量

### 10.7.2 基本介绍

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222135701.png)

（1）系统处理请求的过程想象为一个水管，到来的请求是往这个水管灌水，当系统处理顺畅的时候，请求不需要排队，直接从水管中穿过，这个请求的 RT 是最短的，反之，当请求堆积的时候，那么处理请求的时间则会变为：排队时间 + 最短处理时间

（2）系统规则

​		1）Load 自适应（仅对 Linux/Unix-like 机器生效）：系统的 load1 作为启发指标，进行自适应系统保护。当系统 load1 超过设定的启发值，且系统当前的并发线程数超过估算的系统容量时才会触发系统保护（BBR 阶段）。系统容量由系统的 `maxQps * minRt` 估算得出，设定参考值一般是 `CPU cores * 2.5`

​		2）CPU usage（1.5.0+ 版本）：当系统 CPU 使用率超过阈值即触发系统保护（取值范围 0.0-1.0），比较灵敏

​		3）平均 RT：当单台机器上所有入口流量的平均 RT 达到阈值即触发系统保护，单位是毫秒

​		4）并发线程数：当单台机器上所有入口流量的并发线程数达到阈值即触发系统保护

​		5）入口 QPS：当单台机器上所有入口流量的 QPS 达到阈值即触发系统保护

### 10.7.3 实例

#### 10.7.3.1 需求分析

（1）使用入口 QPS 通过 Sentinel 实现系统规则

（2）对 member-service-nacos-provider-10004 的所有 API 接口进行流量保护，不管访问哪个 API 接口，系统入口总的 QPS 不能大于 2，如果大于 2 就进行限流控制

（3）上面的 QPS 是为了方便看效果所以设置的很小

#### 10.7.3.2 配置实现步骤

（1）增加入口 QPS 系统规则

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222135501.png)

#### 10.7.3.3 测试

（1）启动 Nacos Server 8848

（2）启动 Sentinel 8080 控制台

（3）启动 member-service-nacos-provider-10004

（4）浏览器访问 http://localhost:10004/t1 如果 QPS 超过 2，打开断路器，返回流控信息；浏览器访问 http://localhost:10004/news?id=1&type=jiaoyu 如果 QPS 超过 2，打开断路器，返回流控信息

## 10.8 @SentinelResource

### 10.8.1 自定义全局限流处理类

#### 10.8.1.1 需求分析

看前面的一段代码

```java
/**
     * 完成对热点 key 限流的测试
     * @SentinelResource 指定 Sentinel 限流资源
     * value = "news" 表示 Sentinel 限流资源的名称，由程序员指定
     * blockHandler = "newsBlockHandler" 当出现限流时，由 newsBlockHandler 方法进行处理
     */
    @GetMapping("/news")
    @SentinelResource(value = "news", blockHandler = "newsBlockHandler")
    public Result queryNews(@RequestParam(value = "id", required = false) String id,
                            @RequestParam(value = "type", required = false) String type) {
        //在实际开发中，新闻应该到 DB 或者缓存获取，这里模拟一下
        log.info("到 DB 查询新闻");
        return Result.success("返回 id = " + id + " 新闻 from DB");
    }


    //热点 key 限流的异常处理方法
    public Result newsBlockHandler(String id, String type, BlockException blockException) {
        return Result.success("查询 id = " + id + " 新闻触发热点 key 限流保护");
    }
```

上面代码表明当配置的资源名 news 触发限流机制时，会调用 newsBlockHandler 方法

但是上面的处理方案存在一些问题：

（1）每个 @SentinelResource 对应一个异常处理方法，会造成方法很多

（2）异常处理方法和资源请求方法在一起，不利于业务逻辑的分离

（3）解决方案是使用自定义全局限流处理类

需求：编写一个自定义全局限流处理类，完成对异常的处理

#### 10.8.1.2 代码实现

自定义全局异常限流处理类，com.hspedu.springcloud.handler.CustomGlobalBlockHandler

```java
/**
 * @Author: 止束
 * @Version: 1.0
 * @DateTime: 2024/8/18 17:25
 * @Description: 全局限流处理类
 * 在 CustomGlobalBlockHandler 类中，可以编写限流处理方法，但是要求方法是 static 的
 *
 */
public class CustomGlobalBlockHandler {
    public static Result handlerMethod1(BlockException blockException) {
        return Result.error("400", "客户自定义异常/限流处理方法 handlerMethod1");
    }

    public static Result handlerMethod2(BlockException blockException) {
        return Result.error("401", "客户自定义异常/限流处理方法 handlerMethod2");
    }
}
```

com.hspedu.springcloud.controller.MemberController.java

```java
/**
     * 这里使用全局限流处理类显示限流信息
     * value = "t6" 表示 Sentinel 限流资源的名字
     * blockHandlerClass = CustomGlobalBlockHandler.class 表示全局限流处理类
     * blockHandler = "handlerMethod1" 指定使用全局限流处理类的哪个方法来处理限流信息
     */
    @GetMapping("/t6")
    @SentinelResource(value = "t6", blockHandlerClass = CustomGlobalBlockHandler.class, blockHandler = "handlerMethod1")
    public Result t6() {
        log.info("执行 t6() 线程 id={}", Thread.currentThread().getId());
        return Result.success("200", "t6() 执行成功");
    }
```

#### 10.8.1.3 配置实现步骤

（1）为资源 /t6 增加限流规则

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222135359.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222135122.png)

#### 10.8.1.4 测试

浏览器输入 http://localhost:10004/t6 如果 QPS 没有超过 1，返回正常结果

浏览器输入 http://localhost:10004/t6 如果 QPS 超过 1，断路器打开，返回自定义限流处理方法信息

### 10.8.2 fallback

#### 10.8.2.1 引出 fallback

```java
@GetMapping("/t6")
    @SentinelResource(value = "t6", blockHandlerClass = CustomGlobalBlockHandler.class, blockHandler = "handlerMethod1")
    public Result t6() {
        //当访问 t6 资源次数是 5 的倍数时，就出现 Java 异常
        if (++num % 5 == 0) {
            throw new RuntimeException("num 的值异常 num = " + num);
        }
        
        log.info("执行 t6() 线程 id={}", Thread.currentThread().getId());
        return Result.success("200", "t6() 执行成功");
    }
```

当上面的 /t6 接口的方法中出现 Java 的异常时，该接口就分为三种情况：正常运行、触发限流异常、触发运行时的 Java 异常，其中限流异常是由自定义全局限流异常处理类处理的、运行时的 Java 异常是由 Java 默认自己处理的，那么能不能让 Java 的异常也由自定义全局限流异常处理类处理？可以使用 fallback

#### 10.8.2.2 基本介绍

（1）blockHandler 只负责 Sentinel 控制台配置违规出现的限流，fallback 负责 Java 异常/业务异常

#### 10.8.2.3 需求分析

编写一个自定义全局 fallback 处理类，处理 Java 异常/业务异常

#### 10.8.2.4 代码实现

自定义全局异常处理类，com.hspedu.springcloud.handler.CustomGlobalFallbackHandler

```java
/**
 * @Author: 止束
 * @Version: 1.0
 * @DateTime: 2024/8/18 18:08
 * @Description: 全局 fallback 异常处理类
 * 在 CustomGlobalFallbackHandler 类中，可以去编写处理 Java 异常/业务异常方法，需要是 static 的
 */
public class CustomGlobalFallbackHandler {
    public static Result fallbackHandlerMethod1(Throwable e) {
        return Result.error("402", "Java 异常信息 = " + e.getMessage());
    }

    public static Result fallbackHandlerMethod2(Throwable e) {
        return Result.error("403", "Java 异常信息 = " + e.getMessage());
    }
}
```

```java
/**
     * 这里使用全局限流处理类显示限流信息
     * value = "t6" 表示 Sentinel 限流资源的名字
     * blockHandlerClass = CustomGlobalBlockHandler.class 表示全局限流处理类
     * blockHandler = "handlerMethod1" 指定使用全局限流处理类的哪个方法来处理限流信息
     * fallbackClass = CustomGlobalFallbackHandler.class 表示全局异常处理类
     * fallback = "fallbackHandlerMethod1 表示使用全局异常处理类哪个方法来处理 Java 异常/业务异常
     */
    @GetMapping("/t6")
    @SentinelResource(value = "t6",
            blockHandlerClass = CustomGlobalBlockHandler.class, blockHandler = "handlerMethod1",
            fallbackClass = CustomGlobalFallbackHandler.class, fallback = "fallbackHandlerMethod1"
    )
    public Result t6() {
        //当访问 t6 资源次数是 5 的倍数时，就出现 Java 异常
        if (++num % 5 == 0) {
            throw new RuntimeException("num 的值异常 num = " + num);
        }

        log.info("执行 t6() 线程 id={}", Thread.currentThread().getId());
        return Result.success("200", "t6() 执行成功");
    }
```

#### 10.8.2.5 测试

（1）启动 Nacos Server 8848

（2）启动 Sentinel8080 控制台

（3）启动 member-service-nacos-provider-10004

（4）浏览器访问 http://localhost:10004/t6，访问次数不是 5 的倍数就返回正常结果，访问次数是 5 的倍数，返回 fallback 指定方法信息

### 10.8.3 exceptionsTolgnore

#### 10.8.3.1 基本介绍

如果希望忽略某个异常，可以使用 exceptionsTolgnore

#### 10.8.3.2 应用实例

（1）如果希望忽略某个异常（支持数组），可以使用 exceptionsToIgnore

```java
/**
     * 这里使用全局限流处理类显示限流信息
     * value = "t6" 表示 Sentinel 限流资源的名字
     * blockHandlerClass = CustomGlobalBlockHandler.class 表示全局限流处理类
     * blockHandler = "handlerMethod1" 指定使用全局限流处理类的哪个方法来处理限流信息
     * fallbackClass = CustomGlobalFallbackHandler.class 表示全局异常处理类
     * fallback = "fallbackHandlerMethod1 表示使用全局异常处理类哪个方法来处理 Java 异常/业务异常
     * exceptionsToIgnore = {RuntimeException.class} 表示如果 t6() 抛出 RuntimeException 就使用系统默认方式处理，不使用自定义异常处理
     */
    @GetMapping("/t6")
    @SentinelResource(value = "t6",
            blockHandlerClass = CustomGlobalBlockHandler.class, blockHandler = "handlerMethod1",
            fallbackClass = CustomGlobalFallbackHandler.class, fallback = "fallbackHandlerMethod1",
            exceptionsToIgnore = {RuntimeException.class}
    )
    public Result t6() {
        //当访问 t6 资源次数是 5 的倍数时，就出现 Java 异常
        if (++num % 5 == 0) {
            throw new RuntimeException("num 的值异常 num = " + num);
        }

        log.info("执行 t6() 线程 id={}", Thread.currentThread().getId());
        return Result.success("200", "t6() 执行成功");
    }
```

### 10.8.4 接入 Sentinel 的方式

（1）硬编码，侵入性强，不推荐

（2）注解方式，低侵入性，前面用过，推荐

### 10.8.5 总结

[annotation-support | Sentinel (sentinelguard.io)](https://sentinelguard.io/zh-cn/docs/annotation-support.html)

## 10.9 OpenFeign + Sentinel 对远程调用进行熔断降级

### 10.9.1 当前微服务基础环境

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222136604.png)

测试当前环境：

（1）启动 Nacos Server 8848

（2）启动 member-service-nacos-provider-10004/10006，注销 10004 中关于 Sentinel 的代码，不需要了

（3）启动 member-service-nacos-consumer-80

（4）浏览器输入 http://localhost:80/member/nacos/consumer/get/1，目前是 Ribbon + RestTemplate

### 10.9.2 服务消费者整合 OpenFeign

#### 10.9.2.1 需求分析

在 member-service-nacos-consumer-80 整合 OpenFeign 实现远程调用

#### 10.9.2.2 代码 + 配置实现步骤

member-service-nacos-consumer-80：

pom.xml

```xml
<!--引入 OpenFeign Starter 场景启动器-->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-openfeign</artifactId>
        </dependency>
```

com.hspedu.springcloud.service.MemberOpenFeignService

```java
@FeignClient(value = "member-service-nacos-provider")
public interface MemberOpenFeignService {
    /**
     * 远程调用的 url 是 http://member-service-nacos-provider/member/get/{id}
     * member-service-nacos-provider 是 nacos 注册中心服务名
     * OpenFeign 会根据负载均衡算法来决定调用的是 10004/10006，默认是轮询算法
     */
    @GetMapping("/member/get/{id}")
    public Result getMemberById(@PathVariable("id") Long id);
}
```

controller

```java
@RestController
@Slf4j
public class MemberNacosConsumerController {
    //装配 MemberOpenFeignService
    @Resource
    private MemberOpenFeignService memberOpenFeignService;

    //编写方法通过 OpenFeign 实现远程调用
    @GetMapping("/member/openfeign/consumer/get/{id}")
    public Result<Member> getMemberOpenfeignById(@PathVariable("id") Long id) {
        log.info("调用方式是 OpenFeign");
        return memberOpenFeignService.getMemberById(id);
    }
}
```

#### 10.9.2.3 测试

（1）启动 Nacos Server 8848

（2）启动 member-service-nacos-provider-10004/10006

（3）启动 member-service-nacos-consumer-80

（4）浏览器访问 http://localhost/member/openfeign/consumer/get/1

### 10.9.3 服务消费者整合 Sentinel

#### 10.9.3.1 需求分析

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222136424.png)

在 member-service-nacos-consumer-80 整合 Sentinel 能被 Sentinel 监控

#### 10.9.3.2 代码 + 配置实现步骤

member-service-nacos-consumer-80：

pom.xml

```xml
<!--引入 Sentinel starter 场景启动器-->
        <dependency>
            <groupId>com.alibaba.cloud</groupId>
            <artifactId>spring-cloud-starter-alibaba-sentinel</artifactId>
        </dependency>
```

application.yml

```yaml
server:
  port: 80

spring:
  application:
    name: member-service-nacos-consumer-80

  #配置 Nacos
  cloud:
    nacos:
      discovery:
        server-addr: localhost:8848 #Nacos Server 的地址
    sentinel:
      transport:
        dashboard: localhost:8080 #指定 Sentinel 控制台地址
        port: 8719

#设置暴露所有的监控点
management:
  endpoints:
    web:
      exposure:
        include: '*'
```

#### 10.9.3.3 测试

（1）启动 Nacos Server 8848

（2）启动 Sentinel8080 控制台

（3）启动 member-service-nacos-provider-10004/10006

（4）启动 member-service-nacos-consumer-80

（5）浏览器输入：http://localhost:80/member/openfeign/consumer/get/1

### 10.9.4 OpenFeign + Sentinel 对远程调用进行熔断降级

#### 10.9.4.1 需求分析

（1）在 member-service-nacos-consumer-80 调用某个无效服务时，启动 Sentinel 的熔断降级机制能够快速返回响应，而不是使用默认的超时机制（因为超时机制容易线程堆积，从而导致雪崩），例如当 10004 服务不能用时，当 80 调用到 10004 时会因为迟迟得不到响应而导致线程堆积，所以这里要熔断降级

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222136285.png)

（2）先测试一下关闭 10004/10006，这时 OpenFeign 去调用会怎么样？

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222136084.png)

（3）再测试一下让 10004 服务对应的 API 的执行时间很长（比如休眠 2 秒），这时 OpenFeign 去调用会怎么样？注：OpenFeign 默认超时时间是 1 秒

如果 10004 对应的 API 响应时间比 10006 明显长，就会发现 OpenFeign + Sentinel 整合后会自动选择请求时间短的服务，这时总是调用 10006 的 API

#### 10.9.4.2 代码实现

80 在使用 OpenFeign 进行远程调用时是使用的接口和其中的方法，当其调用失败一定是接口中的方法出了问题，因为接口中的方法最终走的都是去调用 10004/10006，其实最后就是对接口中的方法进行异常处理，Sentinel 可以这样处理：编写一个类实现接口并且实现接口中的方法，一旦调用这个接口的方法时出现了异常，那么就会去调用实现了这个接口的方法的代码

接口 MemberOpenFeignService

```java
@FeignClient(value = "member-service-nacos-provider", fallback = MemberFeignFallbackService.class)
public interface MemberOpenFeignService {
    /**
     * 远程调用的 url 是 http://member-service-nacos-provider/member/get/{id}
     * member-service-nacos-provider 是 nacos 注册中心服务名
     * OpenFeign 会根据负载均衡算法来决定调用的是 10004/10006，默认是轮询算法
     */
    @GetMapping("/member/get/{id}")
    public Result getMemberById(@PathVariable("id") Long id);
}
```

实现接口类 MemberFeignFallbackService

```java
@Component
public class MemberFeignFallbackService implements MemberOpenFeignService{
    @Override
    public Result getMemberById(Long id) {
        return Result.error("500", "被调用服务异常，熔断降级，快速返回结果，防止请求线程堆积");
    }
}
```

配置类整合 OpenFeign 和 Sentinel

```yaml
server:
  port: 80

spring:
  application:
    name: member-service-nacos-consumer-80

  #配置 Nacos
  cloud:
    nacos:
      discovery:
        server-addr: localhost:8848 #Nacos Server 的地址
    sentinel:
      transport:
        dashboard: localhost:8080 #指定 Sentinel 控制台地址
        port: 8719

#设置暴露所有的监控点
management:
  endpoints:
    web:
      exposure:
        include: '*'

#OpenFeign 和 Sentinel 整合
feign:
  sentinel:
    enabled: true
```

#### 10.9.4.3 测试

（1）启动 Nacos Server 8848

（2）启动 Sentinel 8080 控制台

（3）关闭 member-service-nacos-provider-10004/10006

（4）启动 member-service-nacos-consumer-80

（5）浏览器访问 http://localhost:80/member/openfeign/consumer/get/1

#### 10.9.4.4 注意事项和细节

（1）因为 member-service-nacos-consumer-80 已经被 Sentinel 监控，所以我们可以加入相关的流控规则，比如为 /member/openfeign/consumer/get/1 加入流控规则 QPS = 1

## 10.10 规则持久化

### 10.10.1 规则没有持久化的问题

如果 Sentinel 流控规则没有持久化，当重启要调用的接口所在的微服务时，规则就会丢失，需要重新加入，解决方法就是通过 Nacos 进行持久化

### 10.10.2 规则持久化方案

方案一：阿里云 Ahas[最方便/付费]

方案二：在 Nacos Server 配置规则完成持久化，推荐

### 10.10.3 Nacos Server 配置中心 - 规则持久化实例

#### 10.10.3.1 工作原理示意图

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222136726.png)

#### 10.10.3.2 需求分析

为 member-service-nacos-consumer-80 微服务的 /member/openfeign/consumer/get/1 接口添加流控规则，规则是 QPS=1，只要 QPS 大于 1 就快速失败

要求将该流控规则加入到 Nacos Server 配置中心，实现持久化

#### 10.10.3.3 代码和配置实现步骤

（1）在 Nacos Server 配置中心增加 Sentinel 客户端/微服务模块的流控规则

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222136985.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222136940.png)

（2）在 Nacos Server 配置中心增加 Sentinel 客户端/微服务模块的流控规则参数说明：

​		resource：资源名称

​		limlitApp：来源应用

​		grade：阈值类型，0 表示线程数，1 表示 QPS

​		count：单机阈值

​		strategy：流控模式，0 表示直接，1 表示关联，2 表示链路

​		controlBehavior：流控效果，0 表示快速失败，1 表示 Warm Up，2 表示排队等待

​		clusterMode：是否集群

（3）修改 member-service-nacos-consumer-80 的 pom.xml，加入 Sentinel 和 Nacos 持久化整合依赖

```xml
<!--引入 Sentinel 和 Nacos 持久化整合的依赖-->
        <dependency>
            <groupId>com.alibaba.csp</groupId>
            <artifactId>sentinel-datasource-nacos</artifactId>
        </dependency>
```

（4）修改 member-service-nacos-consumer-80 的 application.yml

```yaml
server:
  port: 80

spring:
  application:
    name: member-service-nacos-consumer-80

  #配置 Nacos
  cloud:
    nacos:
      discovery:
        server-addr: localhost:8848 #Nacos Server 的地址
    sentinel:
      transport:
        dashboard: localhost:8080 #指定 Sentinel 控制台地址
        port: 8719
      datasource:
        ds1:
          #指明流控规则配置是从 Nacos Server 配置中心获取
          nacos:
            server-addr: localhost:8848 #指定 Nacos Server 配置中心地址
            dataId: member-service-nacos-consumer-80 #这里的值是从 Nacos 配置中心复制的值，就是配置的微服务的 ID
            groupId: DEFAULT_GROUP #指定组
            data-type: json #指定配置流控规则的数据类型
            rule-type: flow #表示规则类型，这里是流控规则

#设置暴露所有的监控点
management:
  endpoints:
    web:
      exposure:
        include: '*'

#OpenFeign 和 Sentinel 整合
feign:
  sentinel:
    enabled: true
```

#### 10.10.3.4 测试

（1）启动 Nacos Server 8848

（2）启动 Sentinel 8080 控制台

（3）启动 member-service-nacos-provider-10004/10006

（4）启动 member-service-nacos-consumer-80

（5）浏览器访问 http://localhost:80/member/openfeign/consumer/get/1

#### 10.10.3.5 注意事项和细节

#### 10.10.3.6 其它规则类型

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222136074.png)

在被监控保护的微服务模块，有如下配置：rule-type: flow，这里可以是 flow、degrade、param-flow、system 等

# 第 11 章 SpringCloud Alibaba Seata

## 11.1 Seata 基础

### 11.1.1 引出 Seata

（1）单主机单库多表处理事务示意图

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222136531.png)

（2）分布式微服务架构下的数据库事务：在不同的主机上去操作不同的数据库的不同的表

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222136683.png)

用户购买商品的业务逻辑，整个业务逻辑由 3 个微服务提供支持：

（1）仓储服务：对给定的商品扣除仓库/商品数量

（2）订单服务：根据采购需求创建订单

（3）账户服务：从用户账户中扣除余额

问题分析：单体应用被拆分成微服务应用，原来的三个模块被拆分成三个独立的应用，分别使用三个独立的数据源。业务操作需要调用三个服务来完成，此时每个服务内部的数据一致性由本地事务来保证，但是全局的数据一致性问题没法保证。简单的说：一次业务操作需要跨多个数据源或需要跨多个系统进行远程调用，就会产生分布式事务问题

### 11.1.2 分布式事务问题解决方案

分布式微服务架构下的全局数据一致性问题，即分布式事务问题

解决方案：Seata

### 11.1.3 Seata 是什么？

Seata 是一款开源的分布式事务解决方案，致力于在微服务架构下提供高性能和简单易用的分布式事务服务

## 11.2 Seata Server 安装

### 11.2.1 下载

### 11.2.2 安装和配置

（1）配置 "D:\Download\Seata\seata-server-0.9.0\conf\file.conf"

（2）创建数据库

```sql
create database seata;
use seata;
```

（3）在 seata 数据库创建数据表，使用 seata 提供的 sql 脚本即可，在 seata 的 /conf/db_store.sql

（4）修改 seata 的 /conf/registry.conf，配置注册中心 Nacos Server

（5）因为seata-server-0.9.0版本lib下mysql驱动mysql-connector-java是5.1.30版本的，然而我用的mysql是8.0.20版本，所以要把seata/lib下的mysql-connector-java驱动换成mysql8.0.20的驱动即可。seata/conf/file.conf下db已改好的配置不用再修改。

### 11.2.3 启动

（1）启动 Nacos Server 8848

（2）双击 Seata 的 /bin/seata-server.bat 启动 Seata Server

（3）登录 Nacos Server 查看 Seata Server 是否注册成功

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222136228.png)

## 11.3 Seata 分布式事务 - 应用实例

### 11.3.1 需求分析

完成下订单的功能，由三个微服务模块协同完成，涉及到多数据库，多数据表

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222136544.png)

### 11.3.2 创建数据库和表

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222137061.png)

```sql
-- 订单微服务的数据库
create database  order_micro_service;
use order_micro_service;

create table `order` (
    id bigint not null auto_increment primary key ,
    user_id bigint default null,
    product_id bigint default null,
    nums int default null,
    money int default null,
    status int default null comment '0: 创建中, 1: 已完结'
);

select * from `order`;

create database storage_micro_service;
use storage_micro_service;

create table  storage (
    id bigint not null auto_increment primary key ,
    product_id bigint default null,
    amount int default null comment '库存量'
);

insert into storage values (null, 1, 10);
select * from storage;


create database account_micro_service;
use account_micro_service;

create table account (
    id bigint not null auto_increment primary key ,
    user_id bigint default null,
    money int default null comment '账户金额'
);

insert into account values (null, 666, 10000);
select * from account;
```

分别为 3 个数据库创建对应的回滚日志表，回滚日志表在 seata 的 /conf/db_undo_log.sql

```sql
-- 此脚本必须初始化在你当前的业务数据库中，用于AT 模式XID记录。与server端无关（注：业务数据库）
-- 注意此处0.3.0+ 增加唯一索引 ux_undo_log
use order_micro_service;
CREATE TABLE `undo_log` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `branch_id` bigint(20) NOT NULL,
  `xid` varchar(100) NOT NULL,
  `context` varchar(128) NOT NULL,
  `rollback_info` longblob NOT NULL,
  `log_status` int(11) NOT NULL,
  `log_created` datetime NOT NULL,
  `log_modified` datetime NOT NULL,
  `ext` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ux_undo_log` (`xid`,`branch_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


use storage_micro_service;
CREATE TABLE `undo_log` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `branch_id` bigint(20) NOT NULL,
  `xid` varchar(100) NOT NULL,
  `context` varchar(128) NOT NULL,
  `rollback_info` longblob NOT NULL,
  `log_status` int(11) NOT NULL,
  `log_created` datetime NOT NULL,
  `log_modified` datetime NOT NULL,
  `ext` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ux_undo_log` (`xid`,`branch_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

use account_micro_service;
CREATE TABLE `undo_log` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `branch_id` bigint(20) NOT NULL,
  `xid` varchar(100) NOT NULL,
  `context` varchar(128) NOT NULL,
  `rollback_info` longblob NOT NULL,
  `log_status` int(11) NOT NULL,
  `log_created` datetime NOT NULL,
  `log_modified` datetime NOT NULL,
  `ext` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ux_undo_log` (`xid`,`branch_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
```

### 11.3.3 开发 seata_storage_micro_service_10010 微服务

（1）创建 seata_storage_micro_service_10010 微服务模块

（2）修改 pom.xml，添加相关的依赖

```xml
<dependencies>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>3.8.1</version>
            <scope>test</scope>
        </dependency>

        <!--引入相关的依赖-->

        <!--引入 web-starter, 这里使用版本仲裁，由父项目决定，从父项目继承了版本-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <!--starter-actuator 是 SpringBoot 程序的监控系统，可以实现系统的健康检测
            可以通过 http://localhost:10000/actuator 看到相关的连接和信息
        -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>

        <!--引入 mybatis-starter 整合到 SpringBoot-->
        <dependency>
            <groupId>org.mybatis.spring.boot</groupId>
            <artifactId>mybatis-spring-boot-starter</artifactId>
        </dependency>

        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid-spring-boot-starter</artifactId>
            <!--这里需要指定版本，因为父项目没指定-->
            <version>1.1.17</version>
        </dependency>

        <!--版本仲裁-->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-jdbc</artifactId>
        </dependency>

        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
        </dependency>

        <!--在 member-service-provider-10000 引入打包好的 jar-->
        <dependency>
            <groupId>com.hspedu.springcloud</groupId>
            <artifactId>e_commerce_center-common-api</artifactId>
            <version>1.0-SNAPSHOT</version>
        </dependency>

        <!--引入 Nacos-starter 场景启动器-->
        <dependency>
            <groupId>com.alibaba.cloud</groupId>
            <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
        </dependency>

        <!--引入 OpenFeign Starter 场景启动器-->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-openfeign</artifactId>
        </dependency>

        <!--引入 Seata Starter 场景启动器-->
        <dependency>
            <groupId>com.alibaba.cloud</groupId>
            <artifactId>spring-cloud-starter-alibaba-seata</artifactId>
            <exclusions>
                <!--排除自带的 seata-all,引入自己的版本，否则会出现冲突-->
                <exclusion>
                    <groupId>io.seata</groupId>
                    <artifactId>seata-all</artifactId>
                </exclusion>
            </exclusions>
        </dependency>

        <dependency>
            <groupId>io.seata</groupId>
            <artifactId>seata-all</artifactId>
            <version>0.9.0</version>
        </dependency>
    </dependencies>
```

（3）配置 application.yml

```yaml
server:
  port: 10010
spring:
  application:
    name: seata_storage_micro_service_10010
  cloud:
    alibaba:
      seata:
        #指定事务组名，需要和 Seata-server 中的对应，与 /conf/file.conf 中的保持一致
        tx-service-group: hspedu_order_tx_group
    nacos:
      discovery:
        server-addr: localhost:8848 #指定 Nacos server 的地址
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://localhost:3306/storage_micro_service
    username: root
    password: 123456

#配置 Seata 日志输出
logging:
  level:
    io:
      seata: info

mybatis:
  mapperLocations: classpath:mapper/*.xml
```

其中的 `tx-service-group: hspedu_order_tx_group` 来自

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222137822.png)

（4）创建 file.conf，进行相关的配置，说明：该文件从 seata 的 /conf/file.conf 拷贝进行修改即可

改这里

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222137164.png)

（5）创建 registry.conf，进行相关的配置，说明：该文件从 seata 的 /conf/registry.conf 拷贝进行修改即可

（6）创建 com/hspedu/springcloud/entity/Storage.java

```java
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Storage {
    private Long id;
    private Long productId;
    private Integer amount;
}
```

（7）创建 com/hspedu/springcloud/dao/StorageDao.java 接口

```java
@Mapper
public interface StorageDao {
    //扣减库存信息
    public void reduce(@Param("productId") Long productId, @Param("nums") Integer nums);
}
```

（8）创建 resources/mapper/StorageMapper.xml

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd" >
<mapper namespace="com.hspedu.springcloud.dao.StorageDao">
    <resultMap id="BaseResultMap" type="com.hspedu.springcloud.entity.Storage">
        <id column="id" property="id" jdbcType="BIGINT"/>
        <result column="product_id" property="productId" jdbcType="BIGINT"/>
        <result column="amount" property="amount" jdbcType="INTEGER"/>
    </resultMap>
    <!-- 减少库存 -->
    <update id="reduce">
        UPDATE storage SET amount = amount - #{nums} WHERE product_id = #{productId}
    </update>
</mapper>
```

（9）创建 com.hspedu.springcloud.service.StorageService.java 接口和实现类

接口

```java
public interface StorageService {
    //扣减库存
    public void reduce(Long productId, Integer nums);
}
```

实现类

```java
@Slf4j
@Service
public class StorageServiceImpl implements StorageService {
    @Resource
    private StorageDao storageDao;

    @Override
    public void reduce(Long productId, Integer nums) {
        log.info("reduce starter");
        storageDao.reduce(productId, nums);
        log.info("reduce end");
    }
}
```

（10）创建 com.hspedu.springcloud.controller.StorageController.java

```java
@RestController
public class StorageController {
    @Resource
    private StorageService storageService;

    @PostMapping("/storage/reduce")
    public Result reduce(Long productId, Integer nums) {
        storageService.reduce(productId, nums);
        return Result.success("扣减库存成功", null);
    }
}
```

（11）创建 com.hspedu.springcloud.config.MyBatisConfig.java

```java
/**
 * @Description: 配置 MyBatis 和 dao 关联
 */
@Configuration
@MapperScan({"com.hspedu.springcloud.dao"})
public class MyBatisConfig {
}
```

（12）创建 com.hspedu.springcloud.config.DataSourceProxyConfig.java

```java
public class DataSourceProxyConfig {
    @Value("${mybatis.mapperLocations}")
    private String mapperLocations;

    //配置 DruidDataSource
    @Bean
    @ConfigurationProperties(prefix = "spring.datasource")
    public DataSource druidDataSource() {
        return new DruidDataSource();
    }

    //配置 DataSourceProxy,使用 seata 代理数据源
    public DataSourceProxy dataSourceProxy(DataSource dataSource) {
        return new DataSourceProxy(dataSource);
    }

    //配置 SqlSessionFactory - 常规写法
    @Bean
    public SqlSessionFactory sqlSessionFactoryBean(DataSourceProxy dataSourceProxy) throws Exception {
        SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
        sqlSessionFactoryBean.setDataSource(dataSourceProxy);
        sqlSessionFactoryBean.setMapperLocations(new PathMatchingResourcePatternResolver().getResources(mapperLocations));
        sqlSessionFactoryBean.setTransactionFactory(new SpringManagedTransactionFactory());
        return sqlSessionFactoryBean.getObject();
    }
}
```

（13）主程序

```java
//需要取消数据源的自动配置,而是使用 Seata 代理数据源，DataSourceProxy
@SpringBootApplication(exclude = DataSourceAutoConfiguration.class)
@EnableDiscoveryClient
@EnableFeignClients
public class SeataStorageMicroServiceApplication10010 {
    public static void main(String[] args) {
        SpringApplication.run(SeataStorageMicroServiceApplication10010.class, args);
    }
}
```

### 11.3.4 测试 seata_storage_micro_service_10010 微服务

（1）启动 Nacos Server 8848

（2）双击 Seata 的 /bin/seata-server.bat 启动 Seata Server

（3）启动 seata_storage_micro_service-10010

（4）登录 Nacos Server，查看 10010 微服务是否注册成功

### 11.3.5 开发 seata_account_micro_service-10012 微服务

参考 seata_storage_micro_service-10010

（1）创建 seata_account_micro_service-10012 微服务模块

（2）修改 pom.xml，添加相关的 jar 依赖，和 10010 一样

（3）application.yml

```yaml
server:
  port: 10012
spring:
  application:
    name: seata_account_micro_service_10012
  cloud:
    alibaba:
      seata:
        #指定事务组名，需要和 Seata-server 中的对应，与 /conf/file.conf 中的保持一致
        tx-service-group: hspedu_order_tx_group
    nacos:
      discovery:
        server-addr: localhost:8848 #指定 Nacos server 的地址
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://localhost:3306/account_micro_service
    username: root
    password: 123456

#配置 Seata 日志输出
logging:
  level:
    io:
      seata: info

mybatis:
  mapperLocations: classpath:mapper/*.xml
```

（4）从 10010 复制 file.conf 和 registry.conf

（5）entity

```java
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Account {
    private Long id;
    private Long userId; //支持驼峰的自动转换
    private Integer money;
}
```

（6）dao

```java
@Mapper
public interface AccountDao {
    public void reduce(@Param("userId") Long userId, @Param("money") Integer money);
}
```

（7）mapper

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd" >
<mapper namespace="com.hspedu.springcloud.dao.AccountDao">
    <resultMap id="BaseResultMap" type="com.hspedu.springcloud.entity.Account">
        <id column="id" property="id" jdbcType="BIGINT"/>
        <result column="user_id" property="userId" jdbcType="BIGINT"/>
        <result column="money" property="money" jdbcType="INTEGER"/>
    </resultMap>
    <!-- 减少库存 -->
    <update id="reduce">
        UPDATE account SET money = money - #{money} WHERE user_id = #{userId};
    </update>
</mapper>
```

（8）service

接口

```java
public interface AccountService {
    public void reduce(Long userId, Integer money);
}
```

实现类

```java
@Service
@Slf4j
public class AccountServiceImpl implements AccountService {
    @Resource
    private AccountDao accountDao;

    @Override
    public void reduce(Long userId, Integer money) {
        log.info("开始");
        accountDao.reduce(userId, money);
        log.info("结束");
    }
}
```

（9）config.MyBatisConfig.java

```java
/**
 * @Description: 配置 MyBatis 和 dao 关联
 */
@Configuration
@MapperScan({"com.hspedu.springcloud.dao"})
public class MyBatisConfig {
}
```

（10）config.DataSourceProxyConfig.java

```java
/**
 * @Description: 配置数据源的代理是 seata，也就是说使用 seata 代理数据源
 * DataSourceProxy 是引入的 io.seata.rm.datasource 包下的
 */
@Configuration
public class DataSourceProxyConfig {
    @Value("${mybatis.mapperLocations}")
    private String mapperLocations;

    //配置 DruidDataSource
    @Bean
    @ConfigurationProperties(prefix = "spring.datasource")
    public DataSource druidDataSource() {
        return new DruidDataSource();
    }

    //配置 DataSourceProxy,使用 seata 代理数据源
    @Bean
    public DataSourceProxy dataSourceProxy(DataSource dataSource) {
        return new DataSourceProxy(dataSource);
    }

    //配置 SqlSessionFactory - 常规写法
    @Bean
    public SqlSessionFactory sqlSessionFactoryBean(DataSourceProxy dataSourceProxy) throws Exception {
        SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
        sqlSessionFactoryBean.setDataSource(dataSourceProxy);
        sqlSessionFactoryBean.setMapperLocations(new PathMatchingResourcePatternResolver().getResources(mapperLocations));
        sqlSessionFactoryBean.setTransactionFactory(new SpringManagedTransactionFactory());
        return sqlSessionFactoryBean.getObject();
    }
}
```

（11）controller

```java
@RestController
public class AccountController {
    @Resource
    private AccountService accountService;

    @PostMapping("/account/reduce")
    public Result reduce(@RequestParam("userId") Long userId, @RequestParam("money") Integer money) {
        accountService.reduce(userId, money);
        return Result.success("200", "扣减账户成功");
    }
}
```

（12）主程序

```java
@SpringBootApplication(exclude = DataSourceAutoConfiguration.class)
@EnableFeignClients
@EnableDiscoveryClient
public class SeataAccountMicroServiceApplication10012 {
    public static void main(String[] args) {
        SpringApplication.run(SeataAccountMicroServiceApplication10012.class, args);
    }
}
```

### 11.3.6 开发 seata-order-micro-service-10008 微服务

（1）pom.xml、application.yml、file.conf、registry.conf 和 10012 一样

（2）entity

```java
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Order {
    private Long id;
    private Long userId;
    private Long productId;
    private Integer nums;
    private Integer money;
    private Integer status;
}
```

（3）dao

```java
@Mapper
public interface OrderDao {
    //新建订单
    void save(Order order);
    //修改订单状态
    void update(@Param("userId") Long userId, @Param("status") Integer status);
}
```

（4）mapper

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd" >
<mapper namespace="com.hspedu.springcloud.dao.OrderDao">
    <resultMap id="BaseResultMap" type="com.hspedu.springcloud.entity.Order">
        <id column="id" property="id" jdbcType="BIGINT"/>
        <result column="user_id" property="userId" jdbcType="BIGINT"/>
        <result column="product_id" property="productId" jdbcType="BIGINT"/>
        <result column="nums" property="nums" jdbcType="INTEGER"/>
        <result column="money" property="money" jdbcType="INTEGER"/>
        <result column="status" property="status" jdbcType="INTEGER"/>
    </resultMap>
    <insert id="save">
        insert into `order` (id,user_id,product_id,nums,money,status)
        values (null,#{userId},#{productId},#{nums},#{money},0);
    </insert>
    <update id="update">
        update `order` set status = 1
        where user_id=#{userId} and status = #{status};
    </update>
</mapper>
```

（5）service

StorageService 接口

```java
@FeignClient(value = "seata_storage_micro_service_10010")
public interface StorageService {
    @PostMapping("/storage/reduce")
    public Result reduce(Long productId, Integer nums);
}
```

AccountService 接口

```java
@FeignClient(value = "seata_account_micro_service_10012")
public interface AccountService {
    @PostMapping("/account/reduce")
    public Result reduce(@RequestParam("userId") Long userId, @RequestParam("money") Integer money);
}
```

OrderService 接口

```java
public interface OrderService {
    public void save(Order order);
}
```

OrderServiceImpl 实现接口

```java
@Service
@Slf4j
public class OrderServiceImpl implements OrderService {
    @Resource
    private OrderDao orderDao;

    @Resource
    private StorageService storageService;

    @Resource
    private AccountService accountService;

    @Override
    public void save(Order order) {
        orderDao.save(order); //调用本地方法生成订单 order

        storageService.reduce(order.getProductId(), order.getNums()); //远程调用 storage 微服务扣减库存

        accountService.reduce(order.getUserId(), order.getMoney()); //远程调用 account 微服务扣减用户 money

        orderDao.update(order.getUserId(), 0); //调用本地方法修改订单状态 0 -> 1
    }
}
```

（6）controller

```java
@RestController
public class OrderController {
    @Resource
    private OrderService orderService;

    @GetMapping("/order/save")
    public Result save(Order order) {
        orderService.save(order);
        return Result.success("订单创建成功", null);
    }
}
```

（7）config

MyBatisConfig

```java
/**
 * @Description: 配置 MyBatis 和 dao 关联
 */
@Configuration
@MapperScan({"com.hspedu.springcloud.dao"})
public class MyBatisConfig {

}
```

DataSourceProxyConfig

```java
/**
 * @Description: 配置数据源的代理是 seata，也就是说使用 seata 代理数据源
 * DataSourceProxy 是引入的 io.seata.rm.datasource 包下的
 */
@Configuration
public class DataSourceProxyConfig {
    @Value("${mybatis.mapperLocations}")
    private String mapperLocations;

    //配置 DruidDataSource
    @Bean
    @ConfigurationProperties(prefix = "spring.datasource")
    public DataSource druidDataSource() {
        return new DruidDataSource();
    }

    //配置 DataSourceProxy,使用 seata 代理数据源
    @Bean
    public DataSourceProxy dataSourceProxy(DataSource dataSource) {
        return new DataSourceProxy(dataSource);
    }

    //配置 SqlSessionFactory - 常规写法
    @Bean
    public SqlSessionFactory sqlSessionFactoryBean(DataSourceProxy dataSourceProxy) throws Exception {
        SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
        sqlSessionFactoryBean.setDataSource(dataSourceProxy);
        sqlSessionFactoryBean.setMapperLocations(new PathMatchingResourcePatternResolver().getResources(mapperLocations));
        sqlSessionFactoryBean.setTransactionFactory(new SpringManagedTransactionFactory());
        return sqlSessionFactoryBean.getObject();
    }
}
```

（8）主程序

```java
@SpringBootApplication(exclude = DataSourceAutoConfiguration.class)
@EnableDiscoveryClient
@EnableFeignClients
public class SeataOrderMicroServiceApplication10008 {
    public static void main(String[] args) {
        SpringApplication.run(SeataOrderMicroServiceApplication10008.class, args);
    }
}
```

### 11.3.7 注意事项和细节

（1）

（2）如果出现 service id not legal hostname 报错，原因是服务名称不能带有下划线，可以使用中划线，SpringCloud 无法识别下划线，把下划线改成中划线即可

### 11.3.8 集成测试

#### 11.3.8.1 正常测试

（1）启动 Nacos Server 8848

（2）启动 Seata 的 /bin/seata-server.bat 启动 Seata Server

（3）启动 10010/10012/10008 三个微服务

（4）浏览器输入 http://localhost:10008/order/save?userId=666&productId=1&nums=1&money=100

#### 11.3.8.2 异常测试

看笔记

#### 11.3.8.3 使用 @GlobalTransactional 完成分布式事务控制（出现异常，也能保证数据一致性）

```java
@Service
@Slf4j
public class OrderServiceImpl implements OrderService {
    @Resource
    private OrderDao orderDao;

    @Resource
    private StorageService storageService;

    @Resource
    private AccountService accountService;

    /**
     * @GlobalTransactional(name = "hspedu-save-order", rollbackFor = Exception.class)
     * @GlobalTransactional: 分布式全局事务控制
     * name = "hspedu-save-order" 名称，程序员自己指定，保证唯一即可
     * rollbackFor = Exception.class 指定发生什么异常就回滚
     */
    @Override
    @GlobalTransactional(name = "hspedu-save-order", rollbackFor = Exception.class)
    public void save(Order order) {
        orderDao.save(order); //调用本地方法生成订单 order

        storageService.reduce(order.getProductId(), order.getNums()); //远程调用 storage 微服务扣减库存

        accountService.reduce(order.getUserId(), order.getMoney()); //远程调用 account 微服务扣减用户 money

        orderDao.update(order.getUserId(), 0); //调用本地方法修改订单状态 0 -> 1
    }
}
```

## 11.4 Seata 工作机制

### 11.4.1 分布式事务过程分析

（1）Seata 分布式事务处理过程是 ID + 三组件模型

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222137816.png)

（2）解释术语：XID、TC、TM、RM

Transaction ID （XID）：全局唯一的事务 ID

Transaction Coordinator（TC）：事务协调器，维护全局事务的运行状态，负责协调并驱动全局事务的提交或回滚

Transaction Manager（TM）：控制全局事务的边界，负责开启一个全局事务，并最终发起全局提交或全局回滚的决议

Resource Manager（RM）：控制分支事务，负责分支注册，状态汇报，并接收事务协调器的指令，驱动分支（本地）事务的提交和回滚

（3）执行过程：

TM 向 TC 申请开启一个全局事务，全局事务创建成功并生成一个全局唯一的 XID

XID 在微服务调用链路的上下文中传播

RM 向 TC 注册分支事务，将其纳入 XID 对应全局事务的管辖

TM 向 TC 发起针对 XID 的全局提交或回滚决议

TC 调度 XID 下管辖的全部分支事务完成提交或回滚请求

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222137795.png)

### 11.4.2 Seata 事务模式

AT（默认模式）、TCC、SAGA、XA

### 11.4.3 AT 无侵入模式

#### 11.4.3.1 一阶段加载

在一阶段，Seata 会拦截业务 SQL

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222137722.png)

（1）解析 SQL 语义，找到业务 SQL 要更新的业务数据，在业务数据被更新前，将其保存成 before image（前置镜像）

（2）执行业务 SQL 更新业务数据，在业务数据更新之后，其保存成 after image（后置镜像）

（3）最后生成行锁

（4）以上操作全部在一个数据库事务内完成，这样保证了一阶段操作的原子性

#### 11.4.3.2 二阶段提交

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222137703.png)

二阶段如果是顺利提交，因为业务 SQL 在一阶段已经提交至数据库，所以 Seata 框架只需将一阶段保存的快照数据和行锁删掉完成数据清理即可

#### 11.4.3.3 二阶段回滚

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222138885.png)

（1）二阶段如果是回滚的话，Seata 就需要回滚一阶段已经执行的业务 SQL，还原业务数据

（2）回滚方式便是用 before image 还原业务数据，但在还原前首先要校验脏写，对比数据库当前业务数据和 after image 如果两份数据完全一致就说明没有脏写，可以还原业务数据；如果不一致就说明有脏写，出现脏写就需要转人工处理





