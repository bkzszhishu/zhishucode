# SpringBoot

## 第 1 章 SpringBoot 基本介绍

### 1.1 官方文档

[Spring Boot](https://spring.io/projects/spring-boot)

### 1.2 SpringBoot 是什么？

（1）SpringBoot 可以轻松创建独立的、生产级的基于 Spring 的应用程序

（2）SpringBoot 直接嵌入 Tomcat、Jetty 或 Undertow，可以直接运行 SpringBoot 应用程序

### 1.3 SpringBoot 快速入门

#### 1.3.1 需求

构建一个 SpringBoot 项目，浏览器发送 http://localhost:8080/hello 请求，响应 Hello,SpringBoot

#### 1.3.2 完成步骤

（1）确认开发环境是 JDK 8 以上，maven 在 3.5+

（2）创建 Maven 项目

（3）引入 SpringBoot 父工程和 Web 项目场景启动器

#### 1.3.3 快速入门小结

（1）SpringBoot 比较传统的 SSM 开发，简化整合步骤，提高开发效率

（2）简化了 Maven 项目的 pom.xml 依赖导入，可以说是一键导入

### 1.4 Spring、SpringMVC、SpringBoot 的关系

#### 1.4.1 梳理关系

（1）三者关系大概是：SpringBoot > Spring > SpringMVC

（2）SpringMVC 只是 Spring 处理 Web 层请求的一个模块/组件，SpringMVC 的基石是 Servlet

（3）Spring 的核心是 IOC 和 AOP，IOC 提供了依赖注入的容器，AOP 解决了面向切面的编程

（4）SpringBoot 是为了简化开发，推出的封神框架（约定优于配置[COC]，简化了 Spring 项目的配置流程），SpringBoot 包含很多组件/框架，Spring 就是最核心的内容之一，也包含 SpringMVC

（5）Spring 家族，有众多衍生框架和组件，例如 boot、security、jpa 等，它们的基础都是 Spring

#### 1.4.2 如何理解约定优于配置

（1）约定优于配置，又称按约定编程，是一种软件设计规范，本质上是对系统、类库或框架中一些东西假定一个大众化合理的默认值（缺省值）

（2）例如在模型中存在一个名为 User 的类，那么对应到数据库会存在一个名为 user 的表，只有在偏离这个约定时才需要做相关的配置（例如你想将表名命名为 t_user 等非 user 时才需要写关于这个名字的配置）

（3）简单来说就是假如你所期待的配置与约定的配置一致，那么就可以不做任何配置，约定不符合期待时，才需要对约定进行替换配置

（4）约定优于配置理念：约定其实就是一种规范，遵循了规范，那么就存在通用性，存在通用性，那么事情就会变得相对简单，程序员之间的沟通成本就会降低，工作效率就会提升，合作也会变得更加简单

## 第 2 章 依赖管理和自动配置

### 2.1 依赖管理

#### 2.1.1 什么是依赖管理

（1）spring-boot-starter-parent 还有父项目，声明了开发中常用的依赖的版本号

（2）并且进行自动版本仲裁，即如果程序员没有指定某个依赖 jar 的版本，则以父项目指定的版本为准

#### 2.1.2 修改自动仲裁/默认版本号

（1）需求：将 SpringBoot mysql 驱动修改成 5.1.49

（2）查看 spring-boot-dependencies.pom 里面规定当前依赖的版本对应的 key，这里是 mysql.version

pom.xml

```xml
<!--
            我们自己指定 mysql 的驱动版本
            方式1:显式的导入 mysql 依赖，并明确的指定 <version>
            方式2:在自己的 pom.xml 文件中，在 <properties> 中指定 mysql 的 key
            为什么可以达到修改版本仲裁:根据依赖就近优先原则
        -->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <!--<version>5.1.49</version>-->
        </dependency>
    </dependencies>



    <properties>
        <maven.compiler.source>8</maven.compiler.source>
        <maven.compiler.target>8</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>

        <!--这里我们可以指定 mysql.version-->
        <mysql.version>5.1.49</mysql.version>
    </properties>
```

### 2.2 starter 场景启动器

#### 2.2.1 starter 场景启动器基本介绍

（1）开发中如果我们引入了相关场景的 starter，那么这个场景中所有的相关依赖都会被引入进来，比如我们做 Web 开发引入了该 starter，那么该 starter 将导入与 web 开发相关的所有包

### 2.3 自动配置

#### 2.3.1 基本介绍

（1）前面学习 SSM 整合时，需要配置 Tomcat、配置 SpringMVC、配置如何扫描包、配置字符过滤器、配置视图解析器、文件上传等，非常麻烦，而在 SpringBoot 中，存在自动配置机制，提高开发效率

#### 2.3.2 SpringBoot 自动配置了哪些

Tomcat、SpringMVC、Web常用功能：字符过滤器等

默认扫描包结构：默认主程序所在的包及其子包下会被扫描

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222124042.png)

如图，主程序所在包为 springboot，那么就会默认扫描 springboot 下的所有包

#### 2.3.3 如何修改默认配置

##### 2.3.3.1 如何修改默认扫描包结构

主程序 MainApp.java

```java
//@SpringBootApplication(scanBasePackages = {"com.hspedu"}) 指定 springboot 要扫描的包和子包
@SpringBootApplication(scanBasePackages = {"com.hspedu"})
public class MainApp {
    public static void main(String[] args) {
        //启动 SpringBoot 应用程序/项目
        SpringApplication.run(MainApp.class, args);
    }
}
```

##### 2.3.3.2 resources\application.properties 配置大全

（1）SpringBoot 项目最重要也是最核心的配置文件就是 application.properties，所有的框架配置都可以在这个配置文件中说明

[application.properties配置大全_application.properties中有哪些配置-CSDN博客](https://blog.csdn.net/pbrlovejava/article/details/82659702)

##### 2.3.3.3 resources\application.properties 修改配置

各种配置都有默认，可以在 resources\application.properties 修改，application.properties 文件可以手动创建

application.properties

```properties
#修改 Tomcat server 的监听端口
server.port=8082

#修改文件上传的大小
#multipart.max-file-size 属性可以指定 SpringBoot 上传文件的大小限制
#默认配置最终都是映射到某个类上，比如 multipart.max-file-size 会映射/关联到 MultipartProperties 上
#把光标放在该属性上，输入 ctrl+b 就可以定位这个属性是管理到哪个类(属性类)
spring.servlet.multipart.max-file-size=10MB
```

##### 2.3.3.4 resources\application.properties 常用配置

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222124237.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222124885.png)

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222124628.png)

##### 2.3.3.5 resources\application.properties 自定义配置

还可以在 properties 文件中自定义配置，通过 @Value("${}") 获取对应的属性值

application.properties

```properties
#自定义配置属性
my.website=http://www.baidu.com
```

HelloController.java

```java
@Controller
public class HelloController {
    //需求是创建这个组件的时候给这个 website 赋一个值
    @Value("${my.website}")
    private String website;
    //编写方法，返回 Hello,SpringBoot
    @RequestMapping("/hello")
    @ResponseBody
    public String hello() {
        System.out.println("website = " + website); //website = http://www.baidu.com
        return "Hello,SpringBoot";
    }
}
```

#### 2.3.4 SpringBoot 在哪配置读取 application.properties

（1）打开 ConfigFileApplicationListener.java，看一下源码

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222124919.png)

#### 2.3.5 自动配置遵守按需加载原则

##### 2.3.5.1 基本说明

（1）自动配置遵守按需加载原则，也就是说，引入了哪个场景 starter 就会加载该场景关联的 jar 包，没有引入的 starter 则不会加载其关联 jar

（2）SpringBoot 所有的自动配置功能都在 spring-boot-autoconfigure 包里面

（3）在 SpringBoot 的自动配置包，一般是 XxxAutoConfiguration.java，对应 XxxProperties.java

##### 2.3.5.2 application.properties、XxxAutoConfiguration.java、XxxProperties.java 三者的关系

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222124503.png)

## 第 3 章 容器功能

### 3.1 Spring 注入组件的注解

#### 3.1.1 @Component、@Controller、@Service、@Repository

这些在 Spring 中的传统注解仍然有效，通过这些注解可以给容器注入组件

### 3.2 @Configuration

#### 3.2.1 应用实例需求

在 SpringBoot 中，如何通过 @Configuration 创建配置类来注入组件或者 Bean

JavaBean：Monster.java

```java
package com.hspedu.springboot.bean;

/**
 * @Author: 止束
 * @Version: 1.0
 * @DateTime: 2024/7/25 18:49
 * @Description:
 */
public class Monster {
    private Integer id;
    private String name;
    private Integer age;
    private String skill;

    public Monster(Integer id, String name, Integer age, String skill) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.skill = skill;
    }

    public Monster() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getSkill() {
        return skill;
    }

    public void setSkill(String skill) {
        this.skill = skill;
    }

    @Override
    public String toString() {
        return "Monster{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", age=" + age +
                ", skill='" + skill + '\'' +
                '}';
    }
}
```

传统的 Spring 的方式：

新建 resources/beans.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean id="monster03" class="com.hspedu.springboot.bean.Monster">
        <property name="name" value="牛魔王"></property>
        <property name="age" value="5000"></property>
        <property name="skill" value="芭蕉扇"></property>
        <property name="id" value="1"></property>
    </bean>
</beans>
```

MainApp.java

```java
//@SpringBootApplication(scanBasePackages = {"com.hspedu"}) 指定 springboot 要扫描的包和子包
@SpringBootApplication(scanBasePackages = {"com.hspedu"})
public class MainApp {
    public static void main(String[] args) {
        //启动 SpringBoot 应用程序/项目
        SpringApplication.run(MainApp.class, args);

        //测试在 SpringBoot 项目中，依然可以使用 spring 的配置 bean、注入 bean、获取 bean
        ApplicationContext ioc = new ClassPathXmlApplicationContext("beans.xml");
        Monster monster03 = ioc.getBean("monster03", Monster.class);
        System.out.println("monster03 = " + monster03);
    }
}
```

使用 SpringBoot 的 @Configuration 的方式：

BeanConfig 配置类

```java
// @Configuration 表示这是一个配置类，等价于配置文件
//可以通过 @Bean 注解注入 bean 对象到容器
@Configuration
public class BeanConfig {
    /*
    * @Bean 表示给容器添加组件，就是往容器里添加 Monster Bean 对象
    * monster01() 表示 方法名 monster01 作为 Bean 的 id
    * Monster 表示注入类型，即注入的 Bean 的类型是 Monster
    * new Monster(200, "牛魔王", 500, "疯魔拳") 表示注入到容器中具体的 Bean 的信息
    * 也可以自己指定 Bean 的 id: @Bean(name = "monster_nmw")
    * 默认情况下是单例的
    * @Scope("prototype") 可以指定每次返回新的对象，即多例的
    * */
    //@Bean(name = "monster_nmw")
    @Bean
    //@Scope("prototype")
    public Monster monster01() {
        return new Monster(200, "牛魔王", 500, "疯魔拳");
    }
}
```

MainApp.java

```java
//@SpringBootApplication(scanBasePackages = {"com.hspedu"}) 指定 springboot 要扫描的包和子包
@SpringBootApplication(scanBasePackages = {"com.hspedu"})
public class MainApp {
    public static void main(String[] args) {
        //启动 SpringBoot 应用程序/项目
        ConfigurableApplicationContext ioc = SpringApplication.run(MainApp.class, args);
        //@Configuration
        Monster monster01 = ioc.getBean("monster01", Monster.class);
        Monster monster02 = ioc.getBean("monster01", Monster.class);

        System.out.println("monster01 = " + monster01 + " " + monster01.hashCode());
        System.out.println("monster02 = " + monster02 + " " + monster02.hashCode());
    }
}
```

#### 3.2.2 @Configuration 注意事项和细节

（1）配置类本身也会被注入，也是组件，因此也可以获取

（2）SpringBoot2 新增特性：proxyBeanMethods 指定 Full 模式和 Lite 模式：`@Configuration(proxyBeanMethods = false)`

​		proxyBeanMethods 代理 Bean 的方法：

​				1）Full（即 proxyBeanMethods = true）：保证每个 @Bean 方法被调用多少次返回的组件都是单实例的，是代理方式

​				2）Lite（即 proxyBeanMethods = false）：保证每个 @Bean 方法被调用多少次返回的组件都是新创建的，即多例的，是非代理方式

​				3）说明：proxyBeanMethods 是在调用 @Bean 方法时才生效，因此，需要先获取 BeanConfig 组件，再调用方法，而不是直接通过 SpringBoot 主程序得到的容器来获取 Bean，如果直接通过 ioc.getBean() 获取 Bean，proxyBeanMethods 值并没有生效

​				4）如何选择：组件依赖必须使用 Full 模式，如果不需要组件依赖使用 Lite 模式

​				5）Lite 模式也称为轻量级模式，因为不检测依赖关系，运行速度快

BeanConfig.java

```java
@Configuration(proxyBeanMethods = true)
public class BeanConfig {
    @Bean
    public Monster monster01() {
        return new Monster(200, "牛魔王", 500, "疯魔拳");
    }
}
```

MainApp.java

```java
@SpringBootApplication(scanBasePackages = {"com.hspedu"})
public class MainApp {
    public static void main(String[] args) {
        //启动 SpringBoot 应用程序/项目
        ConfigurableApplicationContext ioc = SpringApplication.run(MainApp.class, args);
        //测试 @Configuration(proxyBeanMethods = true/false)
        //(1) 先得到 BeanConfig 组件
        BeanConfig beanConfig = ioc.getBean(BeanConfig.class);
        Monster monster_01 = beanConfig.monster01();
        Monster monster_02 = beanConfig.monster01();

        System.out.println("monster_01 = " + monster_01 + " " + monster_01.hashCode());
        System.out.println("monster_02 = " + monster_02 + " " + monster_02.hashCode());
    }
}
```

（3）配置类可以有多个，就和 Spring 可以有多个 ioc 配置文件是一个道理

BeanConfig2.java

```java
//第二个配置类
@Configuration
public class BeanConfig2 {
    @Bean
    public Monster monster02() {
        return new Monster(800, "蚂蚁精", 80, "吃小昆虫");
    }
}
```

MainApp.java

```java
//测试可以有多个配置类
        Monster monster02 = ioc.getBean("monster02", Monster.class);
        System.out.println("monster02 = " + monster02);
```

### 3.3 @Import

#### 3.3.1 应用实例

Dog.java

```java
public class Dog {
}
```

Cat.java

```java
public class Cat {
}
```

BeanConfig.java

```java
@Import({Dog.class, Cat.class})
@Configuration
public class BeanConfig {
}
```

MainApp.java

```java
@SpringBootApplication(scanBasePackages = {"com.hspedu"})
public class MainApp {
    public static void main(String[] args) {
        //启动 SpringBoot 应用程序/项目
        ConfigurableApplicationContext ioc = SpringApplication.run(MainApp.class, args);
        //测试 @Import
        Dog dogBean = ioc.getBean(Dog.class);
        Cat catBean = ioc.getBean(Cat.class);
        System.out.println("dogBean = " + dogBean);
        System.out.println("catBean = " + catBean);
    }
}
```

### 3.4 @Conditional

#### 3.4.1 介绍

（1）条件装配：满足 Conditional 指定的条件，则进行组件注入

（2）@Conditional 是一个根注解，下面有很多扩展注解

#### 3.4.2 应用实例

（1）演示在 SpringBoot 中，如何通过 @ConditionalOnBean 来注入组件

（2）只有在容器中有 name = monster_nmw 组件时，才注入 dog01 组件

BeanConfig.java

```java
@Configuration
public class BeanConfig {
    //@Bean(name = "monster_nmw")
    @Bean
    public Monster monster01() {
        return new Monster(200, "牛魔王", 500, "疯魔拳");
    }

    @Bean
    /*
    * @ConditionalOnBean(name = "monster_nmw") 表示当容器中有一个 Bean 的名字是 monster_nmw 才注入 dog01 这个 Bean
    * 如果没有名字是 monster_nmw 的 Bean，就不注入 dog01 这个 Bean
    * 还有很多其它的条件约束注解
    *
    * @ConditionalOnMissingBean(name = "monster_nmw") 表示在容器中没有名字/id 为 monster_nmw 才注入 dog01 这个 Bean
    * */
    //@ConditionalOnBean(name = "monster_nmw")
    @ConditionalOnMissingBean(name = "monster_nmw")
    public Dog dog01() {
        return new Dog();
    }
}
```

MainApp.java

```java
//测试 @ConditionalOnBean
        Dog dog01 = ioc.getBean("dog01", Dog.class);
        System.out.println("dog01 = " + dog01);
```

（3）如果把注解放在类上，表示该类的所有要注入的组件都要进行条件约束

### 3.5 @ImportResource

#### 3.5.1 作用

原生配置文件引入，也就是可以直接导入 Spring 传统的 beans.xml，可以认为是 SpringBoot 对 Spring 容器文件的兼容

#### 3.5.2 应用实例

需求：将 beans.xml 导入到 BeanConfig.java 配置类，并测试是否可以获得 beans.xml 注入的组件

BeanConfig3.java

```java
@Configuration
//导入 beans.xml,这样就可以获取到 beans.xml 中配置的 Bean
@ImportResource(locations = "classpath:beans.xml")
public class BeanConfig3 {
}
```

MainApp.java

```java
//测试 @ImportResource
        Monster monster03 = ioc.getBean("monster03", Monster.class);
        System.out.println("monster03 = " + monster03);
        System.out.println("monster03 bean 是否存在 = " + ioc.containsBean("monster03"));
```

### 3.6 配置绑定

使用 Java 读取到 SpringBoot 核心配置文件 application.properties 的内容，并且把它封装到 JavaBean 中

#### 3.6.1 应用实例

需求：将 application.properties 指定的 k-v 和 JavaBean 绑定

Furn.java

```java
@Component
@ConfigurationProperties(prefix = "furn01")
public class Furn {
    private Integer id;
    private String name;
    private Double price;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}
```

application.properties

```properties
# 设置 Furn 的属性 k-v
# 前面的 furn01 是用于指定/区别不同的绑定对象，这样可以在绑定 Furn Bean 的属性值时通过 furn01 这个前缀进行区分
# furn01.id 中的 id 是和 Furn 的属性值对应的
# 整体流程，Furn Bean 中有注解 @ConfigurationProperties(prefix = "furn01")，那么 Furn Bean 就会以 furn01 这个前缀
# 将配置文件里的值绑定到 Furn Bean 中，然后再注入到容器中
furn01.id=100
furn01.name=TV
furn01.price=1000.9
```

HelloController.java

```java
@Controller
public class HelloController {
    //装配到 HelloController
    @Resource
    private Furn furn;

    @RequestMapping("/furn")
    @ResponseBody
    public Furn furn() {
        return furn;
    }
}
```

#### 3.6.2 注意事项和细节

（1）如果 application.properties 有中文，需要转成 unicode 编码写入，否则出现乱码

## 第 4 章 分析 SpringBoot 底层机制【Tomcat 启动分析 + Spring 容器初始化 + Tomcat 如何关联 Spring 容器】

### 4.1 搭建 SpringBoot 底层机制开发环境

### 4.2 当执行 run 方法时，怎么就启动了内置的 Tomcat？

```java
@SpringBootApplication
public class MainApp {
    public static void main(String[] args) {
        //当执行 run 方法时，怎么就启动了内置的 Tomcat？
        ConfigurableApplicationContext ioc = SpringApplication.run(MainApp.class, args);
    }
}
```

### 4.3 @Configuration + @Bean 会发生什么？

```java
@Configuration
public class Config {
    @Bean
    public Dog dog() {
        return new Dog();
    }
}
```

### 4.4 SpringBoot 是怎么启动 Tomcat，并可以支持访问 @Controller？



## 第 5 章 Lombok

### 5.1 Lombok 的介绍

（1）简化了 JavaBean 的开发，可以使用 Lombok 的注解让代码更加简洁

（2）Java 项目中，有很多没有技术含量又必须存在的代码，如 POJO 的 getter 方法、setter 方法、toString 方法，异常处理中的 IO 流的关闭操作等，这些代码既没有技术含量，又影响代码的美观，Lombok 应运而生

### 5.2 Lombok 常用的注解

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222125932.png)

### 5.3 Lombok 应用实例

使用 Lombok 简化 Furn.java 代码，让代码简洁高效

Furn.java

```java
@Component
@ConfigurationProperties(prefix = "furn01")
//@ToString //在编译时，生成 toString 方法
/*
* 使用 @Data 注解等价使用了如下注解：@Getter、@Setter、@RequiredArgsConstructor、@ToString、@EqualsAndHashCode
* 解读其中的这个注解 @RequiredArgsConstructor
* 在写 Controller 或者 Service 层的时候，需要注入很多的 mapper 接口或者另外的 Service 接口，这时候就会写很多的 @Autowired 注解，代码看起来很乱
* Lombok 提供了一个注解：@RequireArgsConstructor(onConstructor = @_(@Autowired)) 写在类上可以替代 @Autowired 注解，需要注意的是在注入时需要用 final 定义，或者使用 @notnull 注解
* */
//@Data
// @NoArgsConstructor 在编译时，会生成无参构造器，但是在默认情况下，系统会生成一个无参构造器
// 当我们有其它构造器生成时，如果你希望仍然有无参构造器就需要使用注解 @NoArgsConstructor 指定无参构造器，否则就会覆盖无参构造器，造成代码错误
@NoArgsConstructor

@AllArgsConstructor //在编译时，会生成全参构造器
public class Furn {
    private Integer id;
    private String name;
    private Double price;
}
```

## 第 6 章 Spring Initailizr

### 6.1 Spring Initailizr 介绍

（1）程序员通过 Maven Archetype 来生成 Maven 项目，项目原型相对简陋，需要手动配置，比较灵活

（2）通过 Spring 官方提供的 Spring Initailizr 来构建 Maven 项目，能完美支持 IDEA 和 Eclipse，让程序员来选择需要的开发场景（starter），还能自动生成启动类和单元测试代码

（3）Spring Initailizr 对 IDEA 版本有要求，同时还要走网络

### 6.2 Spring Initailizr 使用演示

需求：使用 Spring Initailizr 创建 SpringBoot 项目，并支持 web 应用场景，支持 MyBatis

方式一：IDEA 创建

方式二：start.spring.io 创建

方式三：注意事项和细节

## 第 7 章 YAML

### 7.1 YAML 介绍

（1）YAML 是 “YAML Ain't a Markup Language”（YAML 不是一种标记语言）的递归缩写，在开发这种语言时，YAML 的意思其实是 “Yet Another Markup Language”（仍是一种标记语言），是为了强调这种语言以数据为中心，而不是以标记语言为重点，而用反向缩略语重命名

（2）YAML 以数据作为中心，而不是以标记语言为重点

（3）YAML 仍然是一种标记语言，但是和传统的标记语言不一样，是以数据为中心的标记语言

（4）YAML 非常适合用来做以数据为中心的配置文件

### 7.2 使用文档

[YAML 语言教程](https://ruanyifeng.com/blog/2016/07/yaml.html)

### 7.3 YAML 基本语法

（1）形式为 `key: value` ，注意冒号后面有空格

（2）区分大小写

（3）使用缩进表示层级关系

（4）缩进不允许使用 tab，只允许空格

（5）缩进的空格数不重要，只要相同层级的元素左对齐即可

（6）字符串无需加引号

（7）注释用 #

### 7.4 数据类型

#### 7.4.1 字面量

（1）字面量：单个的、不可再分的值，如 date、boolean、string、number、null

（2）保存形式为 `key: value`

#### 7.4.2 对象

（1）对象：键值对的集合，比如：map、hash、set、object

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222125580.png)

#### 7.4.3 数组

（1）数组：一组按次序排列的值，比如：array、list、queue

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222125571.png)

### 7.5 YAML 应用实例

需求：创建项目 configuration，完成 yaml 的使用

Car.java

```java
@Data
public class Car {
    private String name;
    private Double price;
}
```

Monster.java

```java
@ConfigurationProperties(prefix = "monster")
@Component
@Data
public class Monster {
    private Integer id;
    private String name;
    private Integer age;
    private Boolean isMarried;
    private Date birth;
    private Car car;
    private String[] skill;
    private List<String> hobby;
    private Map<String, Object> wife;
    private Set<Double> salaries;
    private Map<String, List<Car>> cars;
}
```

resources/application.yml

```yaml
monster:
  id: 100
  name: 牛魔王
  age: 500
  isMarried: true
  birth: 2000/11/11

  #对象
  #car: {name: 宝马, price: 20000} #行内格式

  car: #换行格式
    name: 宝马
    price: 30000

  #数组
  #skill: [芭蕉扇, 牛魔拳] #行内格式

  skill: #换行格式
    - 芭蕉扇~
    - 牛魔拳~

  #hobby: [喝酒, 吃肉] #行内格式

  hobby: #换行格式
    - 喝酒~
    - 吃肉~

  #map，跟对象的格式差不多
  #wife: {no1: 玉面狐狸, no2: 铁扇公主} #行内风格

  wife: #换行格式
    no1: 玉面狐狸~
    no2: 铁扇公主~

  #Set
  #salaries: [10000, 20000] #行内风格
  salaries: #换行格式
    - 10000
    - 20000

  #Map,这个 Map 的 value 是 List
  cars: #因为这个 cars 的类型是 Map<String, List<Car>>，其中 value 是 List<Car>，所以使用换行风格好看
    group1:
      - {name: 奔驰, price: 30000}
      - name: 保时捷
        price: 40000
    group2:
      - { name: 奔驰~, price: 10000 }
      - name: 保时捷~
        price: 20000
```

HiController.java

```java
@RestController
public class HiController {
    @Resource
    private Monster monster;
    @RequestMapping("/monster")
    public Monster monster() {
        return monster;
    }
}
```

Application.java

```java
@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

### 7.6 YAML 使用细节

（1）如果 application.properties 和 application.yml 有相同的前缀值绑定，则 application.properties 优先级高，开发时，应当避免

（2）字符串无需加引号，如果用 "" 或者 '' 包起来也可以

## 第 8 章 Web开发 - 静态资源访问

### 8.1 基本介绍

（1）静态资源存放位置：只要静态资源存放在类路径下的 /static、/public、/resources、/META-INF/resources 这些目录就可以被直接访问，这些配置都在 WebProperties.java 文件中

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222125747.png)

（2）常见的静态资源：JS、CSS、图片、字体文件等

（3）访问方式：默认：项目根路径/ + 静态资源名，比如 `http://localhost:8080/hi.html` 这些配置在 WebMvcProperties.java 中

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222125832.png)

### 8.2 静态资源访问注意事项和细节

（1）静态资源访问原理：静态映射是 `/**` ，也就是对所有请求拦截，请求进来，先看 Controller 能不能处理，不能处理的请求交给静态资源处理器，如果静态资源找不到则响应 404 页面

（2）改变静态资源访问前缀，比如我们希望使用 `http://localhost:8080/hspres/*` 去请求静态资源，应用场景：当静态资源访问的前缀和控制器请求路径冲突时

resources/application.yml

```yaml
spring:
  mvc:
    static-path-pattern: /hspres/**
```

（3）改变默认的静态资源路径，比如希望在类路径下增加 hspimg 目录，作为静态资源路径，完成测试

```yaml
spring:
  mvc:
    static-path-pattern: /hspres/** #修改静态资源访问的路径/前缀
  web:
    resources:
      #在 resources（类路径） 下增加可用目录
      static-locations: [classpath:/hspimg/] #String[] staticLocations 数组
```

此时访问 hspimg 目录下的图片应该是输入 `http://localhost:8080/hspres/图片.jpg` 而不是 `/hspimg/图片.jpg` ，如果在 hspimg 目录下有一个 hello.html 文件，那么访问到这个文件地址是：http://localhost:8080/hello.html 而不是 http://localhost:8080/hspimg/hello.html

（4）如果配置了 static-locations，那么原来的访问路径就被覆盖，如果需要保留，需要再指定一下

```yaml
spring:
  mvc:
    static-path-pattern: /hspres/** #修改静态资源访问的路径/前缀
  web:
    resources:
      #在 resources（类路径） 下增加可用目录
      static-locations: [classpath:/hspimg/,"classpath:/META-INF/resources/",
                         "classpath:/resources/", "classpath:/static/", "classpath:/public/"] #String[] staticLocations 数组
```

## 第 9 章 Rest 风格请求处理

### 9.1 基本介绍

（1）Rest 风格支持使用 Http 请求方式动词来表示对资源的操作

（2）举例说明：请求方式：/monster

​								GET - 获取怪物

​								DELETE - 删除怪物

​								PUT - 修改怪物

​								POST - 保存怪物

### 9.2 应用实例

需求：测试 SpringBoot 中如何实现 Rest 风格的增删改查

访问 http://localhost:8080/hspres/rest.html

rest.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>rest</title>
</head>
<body>
<h1>测试 rest 风格的 url，完成请求</h1>
<form action="/monster" method="post">
  u: <input type="text" name="name"> <br/>
  <!--通过隐藏域传递 _method 参数指定值-->
  <input type="hidden" name="_method" value="put">
  <input type="submit" value="点击提交">
</form>
</body>
</html>
```

application.yml

```yaml
spring:
  mvc:
    static-path-pattern: /hspres/** #修改静态资源访问的路径/前缀
    hiddenmethod:
      filter:
        enabled: true #启用了 HiddenHttpMethodFilter，支持 rest
  web:
    resources:
      #在 resources（类路径） 下增加可用目录
      static-locations: [classpath:/hspimg/,"classpath:/META-INF/resources/",
                         "classpath:/resources/", "classpath:/static/", "classpath:/public/"] #String[] staticLocations 数组
```

MonsterController.java

```java
@RestController
public class MonsterController {
    @GetMapping("/monster")
    public String getMonster() {
        return "GET-查询妖怪";
    }

    @PostMapping("/monster")
    public String saveMonster() {
        return "POST-添加妖怪";
    }

    @PutMapping("/monster")
    public String putMonster() {
        return "PUT-修改妖怪";
    }

    @DeleteMapping("/monster")
    public String delMonster() {
        return "DELETE-删除妖怪";
    }
}
```

### 9.3 注意事项和细节

（1）客户端是 Postman 的话可以直接发送 Put、Delete 等方式的请求，可以不设置 Filter

（2）如果要 SpringBoot 支持页面表单的 Rest 功能，则需要注意如下细节：

​		1）Rest 风格的请求核心 Filter 是 HiddenHttpMethodFilter，表单请求会被 HiddenHttpMethodFilter 拦截，获取到表单 _method 的值，再判断是 Put、Delete、Patch（Patch 方法是新引入的，是对 Put 方法的补充，用来对已知资源进行局部更新）

​		2）如果要 SpringBoot 支持页面表单的 Rest 功能，需要在 application.yml 启动 filter 功能，否则无效

（3）为什么 return "GET-查询妖怪"，返回的是字符串而不是转发到对应的资源文件？

​		因为含有 @ResponseBody 注解，所以 SpringBoot 底层在处理 return "XXX" 时，会以 @ResponseBody 注解进行解析处理，即返回字符串 "XXX"，而不会使用视图解析器来处理

### 9.4 配置视图解析器

MonsterController.java

```java
@RequestMapping("/go")
    public String go() {
        return "hello"; //顺序1：先看 Controller 有没有 /hello（前提是如果没配置视图解析器），顺序2：如果没有就到视图解析器
    }
```

application.yml

```yaml
spring:
  mvc:
    #static-path-pattern: /hspres/** #修改静态资源访问的路径/前缀
    hiddenmethod:
      filter:
        enabled: true #启用了 HiddenHttpMethodFilter，支持 rest
    view: #配置视图解析器
      suffix: .html
      #prefix: /hspres/ #这里因为前面配置了 static-path-pattern: /hspres/**，所以这里要配置成 prefix: /hspres/，即要和 static-path-pattern 保持一致
      prefix: /
  web:
    resources:
      #在 resources（类路径） 下增加可用目录
      static-locations: [classpath:/hspimg/,"classpath:/META-INF/resources/",
                         "classpath:/resources/", "classpath:/static/", "classpath:/public/"] #String[] staticLocations 数组
```

hello.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>hello</title>
</head>
<body>
<h1>hello, 我是 hello.html 页面</h1>
</body>
</html>
```

## 第 10 章 接收参数相关的注解

### 10.1 基本介绍

（1）SpringBoot 接收客户端提交的数据/参数会使用到相关的注解

（2）详解 @PathVariable、@RequestHeader、@ModelAttribute、@RequestParam、@CookieValue、@RequestBody

### 10.2 应用实例

演示各种方式提交数据/参数给服务器，服务器如何使用注解接收

#### 10.2.1 演示 @PathVariable 的使用

index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>
</head>
<body>
<h1>hello, 韩顺平教育</h1>
基本注解:
<hr/>
<!--href="/monster/100/king" 中的第一个 / 被浏览器解析成 http://localhost:8080/-->
<a href="/monster/100/king">@PathVariable-路径变量 monster/100/king</a><br/><br/>
</body>
</html>
```

ParameterController.java

```java
@RestController
public class ParameterController {

    //@PathVariable Map<String, String> map 会把所有传递的值传入 map
    //@PathVariable("id") 中的id 要和 @GetMapping("/monster/{id}/{name}") 中的 id 保持一致
    @GetMapping("/monster/{id}/{name}")
    public String pathVariable(@PathVariable("id") Integer id,
                               @PathVariable("name") String name,
                               @PathVariable Map<String, String> map) {
        System.out.println("id = " + id);
        System.out.println("name = " + name);
        System.out.println("map = " + map);
        return "success";
    }
}
```

#### 10.2.2 演示 @RequestHeader 的使用

@RequestHeader 可以获取 request 请求头的信息

index.html

```html
<a href="/requestHeader">@RequestHeader-获取 Http 请求头</a><br/><br/>
```

ParameterController.java

```java
//@RequestHeader Map<String, String> header 这个可以获取到 http 请求的所有信息
    @GetMapping("/requestHeader")
    public String requestHeader(@RequestHeader("Host") String host, @RequestHeader Map<String, String> header, @RequestHeader("accept") String accept) {
        System.out.println("host = " + host);
        System.out.println("header = " + header);
        System.out.println("accept = " + accept);
        return "success";
    }
```

#### 10.2.3 演示 @RequestParam 的使用

@RequestParam 可以用于获取请求参数

index.html

```html
<a href="/hi?name=韩顺平&fruit=apple&fruit=pear">@RequestParam-获取请求参数</a><br/><br/>
```

ParameterController.java

```java
//@RequestParam(value = "name") String username 其中 value = "name" 的 name 要和前端保持一致，username 可以随意
    //@RequestParam("fruit") List<String> fruits 因为前端 fruit 有多个结果，所以这里用 List 接收
    //如果想一次性获取全部参数可以使用 Map，即 @RequestParam Map<String, String> paras,但是使用 Map 接收时，如果有属性有多个值，那么就只能拿到第一个值
    @GetMapping("/hi")
    public String hi(@RequestParam(value = "name") String username, @RequestParam("fruit") List<String> fruits, @RequestParam Map<String, String> paras) {
        System.out.println("username = " + username);
        System.out.println("fruit = " + fruits);
        System.out.println("paras = " + paras);
        return "success";
    }
```

#### 10.2.4 演示 @CookieValue 的使用

@CookieValue 可以用于获取 cookie 的值

index.html

```html
<a href="/cookie">@CookieValue-获取 cookie 值</a>
```

ParameterController.java

```java
//因为浏览器没有 cookie，我们自己创建一下
    //@CookieValue(value = "cookie_key") String cookie_value 表示接收名字为 cookie_key 的 cookie
    //如果浏览器携带来对应的 cookie，那么后面的参数类型如果是 String，则接收到的是对应的 value；如果后面的参数类型是 Cookie，则接收到的是封装好的对应的 cookie
    //required = false 表示不需要必须带这个参数，如果是 true，表示必须要带这个参数
    @GetMapping("/cookie")
    public String cookie(@CookieValue(value = "cookie_key", required = false) String cookie_value,
                         @CookieValue(value = "username", required = false) Cookie cookie,
                         HttpServletRequest request) {
        System.out.println("cookie_value = " + cookie_value); //cookie_value = hspok
        System.out.println("username = " + cookie.getName() + " - " + cookie.getValue()); //username = username - king
        //使用原生的方式获取 cookie
        System.out.println("使用原生的方式获取 cookie");
        Cookie[] cookies = request.getCookies();
        for (Cookie cookie1 : cookies) {
            System.out.println(cookie1.getName() + "=>" + cookie1.getValue());
        }
        /*
        使用原生的方式获取 cookie
        cookie_key=>hspok
        username=>king
        */
        return "success";
    }
```

#### 10.2.5 演示 @RequestBody 的使用

可以使用 @RequestBody 获取 Post 请求体

index.html

```html
<hr/>
<h1>测试 @RequestBody 获取数据: 获取 Post 请求体</h1>
<form action="/save" method="post">
    姓名: <input name="name"/> <br>
    年龄: <input name="age"/> <br>
    <input type="submit" value="提交"/>
</form>
```

ParameterController.java

```java
@PostMapping("/save")
    public String postMethod(@RequestBody String content) {
        System.out.println("content = " + content);
        return "success";
    }
```

#### 10.2.6 演示 @RequestAttribute 的使用

@RequestAttribute 可以获取 request 域的属性

index.html

```html
<a href="/login">@RequestAttribute-获取 request 域属性</a>
```

RequestController.java

```java
@Controller
public class RequestController {
    @GetMapping("/login")
    public String login(HttpServletRequest request) {
        request.setAttribute("user", "老韩"); //向 request 域中添加数据
        return "forward:/ok"; //转发到 /ok
    }

    @ResponseBody
    @GetMapping("/ok")
    public String ok(@RequestAttribute(value = "user", required = false) String username, HttpServletRequest request) {
        //获取到 request 域中的数据
        System.out.println("username = " + username); //username = 老韩
        //使用原生的方式
        System.out.println("通过 servlet api 获取 username = " + request.getAttribute("user")); //通过 servlet api 获取 username = 老韩
        return "success";
    }
}
```

### 10.3 复杂参数

#### 10.3.1 基本介绍

（1）在开发中，SpringBoot 在接收客户端请求时，也支持复杂参数

（2）比如：Map、Model、Errors/BindingResult、RedirectAttributes、ServletResponse、SessionStatus、UriComponentsBuilder、ServletUriComponentsBuilder、HttpSession

（3）Map、Model 数据会被放在 request 域

#### 10.3.2 应用实例

演示复杂参数的使用，重点：Map、Model、ServletResponse

RequestController.java

```java
//响应一个注册的请求
    @GetMapping("/register")
    public String register(Map<String, Object> map, Model model, HttpServletResponse response) {
        //如果有一个注册请求，会将注册数据封装到 map 或者 model
        //看看 map 中的数据 和 model 中的数据是否被自动放入到 request 域中
        map.put("user", "hspedu");
        map.put("job", "Java架构师");
        model.addAttribute("sal", 80000);

        //演示创建 cookie，并通过 response 添加到浏览器/客户端
        Cookie cookie = new Cookie("email", "hspedu@sohu.com");
        response.addCookie(cookie);
        //请求转发
        return "forward:/registerOk";
    }

    @ResponseBody
    @GetMapping("/registerOk")
    public String registerOk(HttpServletRequest request) {
        System.out.println("user = " + request.getAttribute("user"));
        System.out.println("job = " + request.getAttribute("job"));
        System.out.println("sal = " + request.getAttribute("sal"));
        /*user = hspedu
        job = Java架构师
        sal = 80000*/

        return "success";
    }
```

### 10.4 使用自定义对象参数 - 自动封装

#### 10.4.1 基本介绍

（1）在开发中，SpringBoot 在处理客户端/浏览器请求时，也支持自定义对象参数

（2）完成自动类型转换域格式化

（3）支持级联封装

#### 10.4.2 应用实例

需求说明：演示自定义对象参数的使用，可以完成自动封装，类型转换，级联封装

save.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>添加妖怪</title>
</head>
<body>
<h1>添加妖怪-坐骑[测试封装 POJO]</h1>
<form action="/savemonster" method="post">
  编号: <input name="id" value="100"> <br>
  姓名: <input name="name" value="牛魔王"> <br>
  年龄: <input name="age" value="500"> <br>
  婚否: <input name="isMarried" value="true"> <br>
  生日: <input name="birth" value="2000/11/11"> <br>
  坐骑名称: <input name="car.name" value="法拉利"> <br>
  坐骑价格: <input name="car.price" value="999.9"> <br>
  <input type="submit" value="保存"/>
</form>
</body>
</html>
```

Monster.java

```java
@Data
public class Monster {
    private Integer id;
    private String name;
    private Integer age;
    private Boolean isMarried;
    private Date birth;
    private Car car;
}
```

Car.java

```java
@Data
public class Car {
    private String name;
    private Double price;
}
```

ParameterController.java

```java
//处理添加 monster 的方法
    @PostMapping("/savemonster")
    public String saveMonster(Monster monster) {
        System.out.println("monster = " + monster);
        //monster = Monster(id=100, name=牛魔王, age=500, isMarried=true, birth=Sat Nov 11 00:00:00 CST 2000, car=Car(name=法拉利, price=999.9))
        return "success";
    }
```

## 第 11 章 自定义转换器

### 11.1 基本介绍

（1）SpringBoot 在处理客户端请求时，将提交的数据封装成对象时，使用了内置的转换器，比如 String -> Integer

（2）SpringBoot 也支持自定义转换器，这个内置转换器在 debug 的时候可以看到，SpringBoot 提供了 124 个内置转换器

### 11.2 应用实例

save.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>添加妖怪</title>
</head>
<body>
<h1>添加妖怪-坐骑[测试封装 POJO]</h1>
<form action="/savemonster" method="post">
  编号: <input name="id" value="100"> <br>
  姓名: <input name="name" value="牛魔王"> <br>
  年龄: <input name="age" value="500"> <br>
  婚否: <input name="isMarried" value="true"> <br>
  生日: <input name="birth" value="2000/11/11"> <br>
  <!--使用自定义转换器关联 car，字符串整体提交，使用 , 号间隔-->
  坐骑: <input name="car" value="避水金睛兽,666.6"> <br>
  <!--坐骑名称: <input name="car.name" value="法拉利"> <br>
  坐骑价格: <input name="car.price" value="999.9"> <br>-->
  <input type="submit" value="保存"/>
</form>
</body>
</html>
```

WebConfig.java 配置自定义转换器

```java
//@Configuration(proxyBeanMethods = false) 表示 WebConfig 是一个配置类
//proxyBeanMethods = false 表示使用了 Lite 模式
@Configuration(proxyBeanMethods = false)
public class WebConfig {
    //注入 bean WebMvcConfigurer
    @Bean
    public WebMvcConfigurer webMvcConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addFormatters(FormatterRegistry registry) {
                //在 addFormatters 方法中，增加一个自定义的转换器
                //增加自定义转换器，实现 String -> Car
                //增加的自定义转换器会注册到 converters 容器中，converters 底层结构是 ConcurrentHashMap，内置有 124 种转换器
                registry.addConverter(new Converter<String, Car>() {
                    @Override
                    public Car convert(String source) { //这里的 source 就是前端传过来的 "避水金睛兽,666.6"
                        //这里就加入你的自定义的转换业务代码
                        if(!ObjectUtils.isEmpty(source)) {
                            String[] split = source.split(",");
                            Car car = new Car();
                            car.setName(split[0]);
                            car.setPrice(Double.parseDouble(split[1]));
                            return car;
                        }
                        return null;
                    }
                });
            }
        };
    }
}
```

ParameterController.java

```java
//处理添加 monster 的方法
    @PostMapping("/savemonster")
    public String saveMonster(Monster monster) {
        System.out.println("monster = " + monster);
        //monster = Monster(id=100, name=牛魔王, age=500, isMarried=true, birth=Sat Nov 11 00:00:00 CST 2000, car=Car(name=法拉利, price=999.9))
        return "success";
    }
```

换种写法写注册转换器，便于理解

```java
//@Configuration(proxyBeanMethods = false) 表示 WebConfig 是一个配置类
//proxyBeanMethods = false 表示使用了 Lite 模式
@Configuration(proxyBeanMethods = false)
public class WebConfig {
    //注入 bean WebMvcConfigurer
    @Bean
    public WebMvcConfigurer webMvcConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addFormatters(FormatterRegistry registry) {
                //在 addFormatters 方法中，增加一个自定义的转换器
                //增加自定义转换器，实现 String -> Car
                //增加的自定义转换器会注册到 converters 容器中，converters 底层结构是 ConcurrentHashMap，内置有 124 种转换器
                /*registry.addConverter(new Converter<String, Car>() {
                    @Override
                    public Car convert(String source) { //这里的 source 就是前端传过来的 "避水金睛兽,666.6"
                        //这里就加入你的自定义的转换业务代码
                        if(!ObjectUtils.isEmpty(source)) {
                            String[] split = source.split(",");
                            Car car = new Car();
                            car.setName(split[0]);
                            car.setPrice(Double.parseDouble(split[1]));
                            return car;
                        }
                        return null;
                    }
                });*/

                //换种写法来注册自定义转换器，便于理解
                //(1) 先创建自定义的转换器
                Converter<String, Car> hspConverter = new Converter<String, Car>() {
                    @Override
                    public Car convert(String source) { //这里的 source 就是前端传过来的 "避水金睛兽,666.6"
                        //这里就加入你的自定义的转换业务代码
                        if(!ObjectUtils.isEmpty(source)) {
                            String[] split = source.split(",");
                            Car car = new Car();
                            car.setName(split[0]);
                            car.setPrice(Double.parseDouble(split[1]));
                            return car;
                        }
                        return null;
                    }
                };
                //(2) 添加转换器到 converters，还可以增加更多的转换器
                registry.addConverter(hspConverter);
            }
        };
    }
}
```

## 第 12 章 处理 JSON

（1）需求说明：演示返回 JSON 格式数据

（2）SpringBoot 支持返回 JSON 格式数据，在启用 Web 开发场景时，已经引入了相关依赖

ResponseController.java

```java
@Controller
public class ResponseController {
    //返回 Monster 数据 - 要求以 JSON 格式返回
    @GetMapping("/get/monster")
    @ResponseBody
    public Monster getMonster() {
        Monster monster = new Monster();
        monster.setId(100);
        monster.setName("奔波霸");
        monster.setAge(200);
        monster.setIsMarried(false);
        monster.setBirth(new Date());
        Car car = new Car();
        car.setName("奔驰");
        car.setPrice(222.2);
        monster.setCar(car);
        return monster;
    }
}
```

## 第 13 章 内容协商

### 13.1 基本介绍

（1）根据客户端接收能力不同，SpringBoot 返回不同媒体类型的数据

（2）比如：客户端 Http 请求 `Accept:application/xml` 则返回 xml 数据，客户端 Http 请求 `Accept:application/json` 则返回 json 数据

### 13.2 应用实例

需求说明：使用 Postman 发送 Http 请求，根据请求头不同，返回对应的 json 数据或者 xml 数据

### 13.3 注意事项和使用细节

（1）当后端同时支持返回 xml 和 json 的数据格式时，浏览器优先以 xml 格式接收数据

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222125082.png)

（2）Postman 可以通过修改 Accept 的值，来要求返回接收不同的数据格式，对于浏览器，我们无法修改其 Accept 的值，怎么办？解决方案：开启支持基于请求参数的内容协商功能

application.yml

```yaml
spring:
  mvc:
    #static-path-pattern: /hspres/** #修改静态资源访问的路径/前缀
    hiddenmethod:
      filter:
        enabled: true #启用了 HiddenHttpMethodFilter，支持 rest
    view: #配置视图解析器
      suffix: .html
      #prefix: /hspres/ #这里因为前面配置了 static-path-pattern: /hspres/**，所以这里要配置成 prefix: /hspres/，即要和 static-path-pattern 保持一致
      prefix: /
    contentnegotiation:
      favor-parameter: true #开启基于请求参数的内容协商功能
  web:
    resources:
      #在 resources（类路径） 下增加可用目录
      static-locations: [classpath:/hspimg/,"classpath:/META-INF/resources/",
                         "classpath:/resources/", "classpath:/static/", "classpath:/public/"] #String[] staticLocations 数组
```

浏览器访问：http://localhost:8080/get/monster?format=json 加上 format=json，就不会返回优先级高的 xml 而是返回 json

（3）注意：参数 format 是规定好的，在开启请求参数的内容协商功能后，SpringBoot 底层的 ParameterContentNegotiationStrategy 会通过 format 来接收参数，然后返回对应的媒体类型/数据格式，当然 format=xx 这个 xx 媒体类型/数据格式是 SpringBoot 可以处理的才行，不能乱写，可以修改 format 这个名字

application.yml

```yaml
    contentnegotiation:
      favor-parameter: true #开启基于请求参数的内容协商功能
      parameter-name: hspformat #指定一个内容协商的参数名
```

这样就是：http://localhost:8080/get/monster?hspformat=json

## 第 14 章 Thymeleaf

### 14.1 基本介绍

（1）Thymeleaf 是一个跟 Velocity、FreeMarker 类似的模板引擎，可完全替代 JSP

（2）Thymeleaf 是一个 Java 类库，它是一个 xml/xhtml/html5 的模版引擎，可以作为 mvc 的 web 应用的 view 层

（3）Thymeleaf 实现了 JSTL、OGNL 表达式效果，语法相似

（4）Thymeleaf 模版页面无需服务器渲染，也可以被浏览器运行，页面简洁

（5）SpringBoot 支持 FreeMarker、Thymeleaf、veocity

（6）Thymeleaf 并不是一个高性能的引擎，适用于单体应用，如果要做一个高并发的应用，选择前后端分离更好

### 14.2 Thymeleaf 机制说明

（1）Thymeleaf 是服务器渲染技术，页面数据是在服务器端进行渲染的

（2）比如：manage.html 中有一段 Thymeleaf 的代码，在用户请求该页面时，由 Thymeleaf 模版引擎完成处理，是在服务端完成的，并将结果页面返回，因此使用了 Thymeleaf 并不是前后端分离

### 14.3 Thymeleaf 语法

#### 14.3.1 表达式

（1）表达式一览

| 表达式名字 | 语法   | 用途                               |
| ---------- | ------ | ---------------------------------- |
| 变量取值   | ${...} | 获取请求域、session 域、对象等值   |
| 选择变量   | *{...} | 获取上下文对象值                   |
| 消息       | #{...} | 获取国际化等值                     |
| 链接       | @{...} | 生成链接                           |
| 片段表达式 | ~{...} | jsp:include 作用，引入公共页面片段 |

（2）字面量

文本值：'hsp edu'，'hello'

数字：10，7，36.8

布尔值：true，false

空值：null

变量：name，age 变量不能有空格

（3）文本操作

字符串拼接：+

变量替换：age=${age}

#### 14.3.2 运算符

#### 14.3.3 th 属性

html 有的属性 Thymeleaf 基本都有，其中 th 属性执行的优先级从 1~8，数字越低优先级越高

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222126121.png)

#### 14.3.4 迭代

#### 14.3.5 条件运算

#### 14.3.6 注意事项

（1）若要使用 Thymeleaf 语法，首先要声明名称空间：`xmlns:th="http://www.thymeleaf.org"`

（2）设置文本内容 th:text，设置 input 的值 th:value，循环输出 th:each，条件判断 th:if，插入代码块 th:insert，定义代码块 th:fragment，声明变量 th:object

（3）th:each 的用法需要格外注意，打个比方：如果你要循环一个 div 中的 p 标签，则 th:each 属性必须放在 p 标签上，若你将 th:each 属性放在 div 上，则循环的是整个 div

（4）变量表达式中提供了很多的内置方法，该内置方法是用 # 开头，不要与 #{} 消息表达式弄混

### 14.4 Thymeleaf 案例

#### 14.4.1 需求说明

使用 SpringBoot + Thymeleaf 完成简单的用户登录 - 列表功能

#### 14.4.2 思路分析

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222126464.png)

#### 14.4.3 代码实现

pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.hspedu</groupId>
    <artifactId>springboot-usersys</artifactId>
    <version>1.0-SNAPSHOT</version>

    <!--导入 SpringBoot 父工程-规定写法-->
    <parent>
        <artifactId>spring-boot-starter-parent</artifactId>
        <groupId>org.springframework.boot</groupId>
        <version>2.5.3</version>
    </parent>

    <!--导入 web 项目场景启动器，会自动导入和 web 开发相关的依赖（库/jar）-->
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <!--引入 Lombok-->
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-configuration-processor</artifactId>
            <optional>true</optional>
        </dependency>

        <!--引入处理 xml 的依赖-->
        <dependency>
            <groupId>com.fasterxml.jackson.dataformat</groupId>
            <artifactId>jackson-dataformat-xml</artifactId>
        </dependency>

        <!--引入 Thymeleaf-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-thymeleaf</artifactId>
        </dependency>
    </dependencies>

    <properties>
        <maven.compiler.source>8</maven.compiler.source>
        <maven.compiler.target>8</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>

</project>
```

IndexController.java

```java
@Controller
public class IndexController {
    //编写方法转发到登录页
    @GetMapping(value = {"/", "/login"})
    public String login() {
        //这里因为在 pom.xml 文件中引入了 starter-thymeleaf，所以这里就会直接使用视图解析器
        return "adminLogin";
    }
}
```

adminLogin.html

```html
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8">
    <title>login</title>
</head>
<body bgcolor="#CED3FE">
<img src="images/4.jpg" style="width: 100px"/>
<hr/>
<div style="text-align: center">
  <h1>用户登录</h1>
    <!--th:action="@{/login}" 如果渲染成功就会替换掉 action="#" 里的 #，所以 action="#" 要保留-->
  <form action="#" th:action="@{/login}" method="post">
    <label style="color: red" th:text="${msg}"></label><br/>
    用户名: <input type="text" style="width: 150px" name="name"/>
    密码: <input type="password" style="width: 150px" name="password">
    <input type="submit" value="登录">
    <input type="reset" value="重新填写">
  </form>
</div>
<hr/>
<img src="images/3.jpg" style="width: 100px"/>
</body>
</html>
```

AdminController.java

```java
@Controller
public class AdminController {
    //响应用户的登录请求
    @PostMapping("/login")
    public String login(Admin admin, HttpSession session, Model model) {
        //验证用户是否合法
        if (StringUtils.hasText(admin.getName()) && "666".equals(admin.getPassword())) {
            //将登录用户保存到 session
            session.setAttribute("loginAdmin", admin);
            //合法,重定向到 manage.html
            return "redirect:/manage.html";
        } else {
            //不合法，就重新登录
            model.addAttribute("msg", "账号用户错误");
            return "adminLogin";
        }
    }

    //处理用户的请求到 manage.html
    @GetMapping("/manage.html")
    public String mainPage(Model model, HttpSession session) {
        Object loginAdmin = session.getAttribute("loginAdmin");
        if (null != loginAdmin) {
            //模拟数据，放入到 request 域中
            ArrayList<User> users = new ArrayList<>();
            users.add(new User(1, "关羽", "666666", 20, "gy@sohu.com"));
            users.add(new User(1, "关羽", "666666", 20, "gy@sohu.com"));
            users.add(new User(1, "关羽", "666666", 20, "gy@sohu.com"));
            users.add(new User(1, "关羽", "666666", 20, "gy@sohu.com"));
            users.add(new User(1, "关羽", "666666", 20, "gy@sohu.com"));
            //将数据放入 request 域中
            model.addAttribute("users", users);
            return "manage";
        } else {
            model.addAttribute("msg", "你没有登录，请登录");
            return "adminLogin";
        }
    }
}
```

manage.html

```html
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8">
    <title>管理后台</title>
</head>
<body bgcolor="#CED3FE">
<img src="images/4.jpg" style="width: 100px"/>
<!--/*--> 因为这里的信息没有写在标签里，所以要使用行内写法，即写在 [[]] 里,这里写成普通的注释会报错<!--*/-->
<a href="#">返回管理页面</a> <a href="#" th:href="@{/}">安全退出</a> 欢迎您:[[${session.loginAdmin.name}]]
<hr/>
<div style="text-align: center">
  <h1>管理雇员</h1>
  <table border="1px" cellspacing="0" bordercolor="green" style="width: 500px">
    <tr bgcolor="#ffc0cb">
      <td>id</td>
      <td>name</td>
      <td>pwd</td>
      <td>email</td>
      <td>age</td>
    </tr>
    <tr bgcolor="#ffc0cb" th:each="user:${users}">
      <td th:text="${user.id}">a</td>
      <td th:text="${user.name}">b</td>
      <td th:text="${user.password}">c</td>
      <td th:text="${user.email}">c</td>
      <td th:text="${user.age}">c</td>
    </tr>
  </table>
  <br/>
</div>
<hr/>
<img src="images/3.jpg" style="width: 100px"/>
</body>
</html>
```

User.java

```java
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    private Integer id;
    private String name;
    private String password;
    private Integer age;
    private String email;
}
```

Admin.java

```java
@Data
public class Admin {
    private String name;
    private String password;
}
```

### 14.5 作业布置

（1）把接收参数相关注解、自定义转换器、处理 JSON、内容协商相关的代码和案例自己写一遍

（2）将 Thymeleaf 用户管理改成妖怪管理列表，字段做相应的改变进行练习

## 第 15 章 拦截器 - HandlerInterceptor

### 15.1 基本介绍

（1）在 SpringBoot 项目中，拦截器是开发中常用的手段，用来做登录验证、性能检查、日志记录等

（2）基本步骤：

​				编写一个拦截器实现 HandlerInterceptor 接口

​				拦截器注册到配置类中（实现 WebMvcConfigurer 的 addInterceptors）

​				指定拦截规则

### 15.2 应用实例

需求：使用拦截器防止用户非法登录，使用拦截器就不需要在每个方法验证了

（1）编写一个拦截器实现 HandlerInterceptor 接口

interceptor/LoginInterceptor.java

```java
@Slf4j
public class LoginInterceptor implements HandlerInterceptor {
    //目标方法执行前被调用
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        //为了看到访问的 URI
        String requestURI = request.getRequestURI();
        log.info("preHandle 拦截到的请求的 URI =" + requestURI);

        //进行登录的校验
        HttpSession session = request.getSession();
        Object loginAdmin = session.getAttribute("loginAdmin");
        if (null != loginAdmin) { //说明该用户已经成功登录
            //放行
            return true;
        }
        //拦截，重新返回到登录页面
        request.setAttribute("msg", "你没有登录，请重新登录");
        request.getRequestDispatcher("/").forward(request, response);
        return false;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        log.info("postHandle 被执行了");
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        log.info("afterCompletion 被执行了");
    }
}
```

（2）拦截器注册到配置类中（实现 WebMvcConfigurer 的 addInterceptors） + 指定拦截规则

config/WebConfig.java

```java
@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        //注册自定义拦截器 LoginInterceptor
        registry.addInterceptor(new LoginInterceptor()).addPathPatterns("/**").excludePathPatterns("/", "/login", "/images/**");//拦截所有的请求，但是排除 "/", "/login", "/images/**"
    }
}
```

## 第 16 章 文件上传

### 16.1 应用实例

需求：演示 SpringBoot 通过表单注册用户，并支持上传图片

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222126353.png)

#### 16.1.1 代码实现

upload.html

```html
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8">
    <title>upload</title>
</head>
<body bgcolor="#CED3FE">
<img src="images/4.jpg" style="width: 100px"/>
<hr/>
<div style="text-align: center">
    <h1>注册用户</h1>
    <form action="#" th:action="@{/upload}" method="post" enctype="multipart/form-data">
        用户名: <input type="text" style="width: 150px" name="name"/><br/><br/>
        电邮: <input type="text" style="width: 150px" name="email"/><br/><br/>
        年龄: <input type="text" style="width: 150px" name="age"/><br/><br/>
        职位: <input type="text" style="width: 150px" name="job"/><br/><br/>
        头像: <input type="file" style="width: 150px" name="header"/><br/><br/>
        宠物: <input type="file" style="width: 150px" name="photos" multiple/><br/><br/>
        <input type="submit" value="注册"/>
        <input type="reset" value="重新填写">
    </form>
</div>

<hr/>
<img src="images/3.jpg" style="width: 100px"/>
</body>
</html>
```

UploadController.java

```java
@Controller
@Slf4j
public class UploadController {
    //处理转发到用户注册-可以完成文件上传页面
    @GetMapping("/upload.html")
    public String uploadPage() {
        return "upload"; //视图解析，转发到 templates/upload.html
    }

    //处理用户的注册请求-包括处理文件上传
    @PostMapping("/upload")
    @ResponseBody
    public String upload(@RequestParam("name") String name,
                         @RequestParam("email") String email,
                         @RequestParam("age") Integer age,
                         @RequestParam("job") String job,
                         @RequestParam("header")MultipartFile header,
                         @RequestParam("photos")MultipartFile[] photos) throws IOException {
        //输出获取到的信息
        log.info("上传的信息 name={} email={} age={} job={} header={} photos={}",
                name, email, age, job, header.getSize(), photos.length);
        //如果信息都成功得到，我们就将文件保存到指定的目录,比如 D:\桌面\文件上传
        //(1) 先将文件保存到指定的目录，比如 D:\桌面\文件上传
        //(2) 后面再演示如何把文件保存到动态创建的目录中
        /*if (! header.isEmpty()) {
            //获取文件名
            String originalFilename = header.getOriginalFilename();
            header.transferTo(new File("D:\\桌面\\文件上传\\" + originalFilename));

        }*/

        //处理宠物的图片
        /*if (photos.length > 0) {
            for (MultipartFile photo : photos) {
                if (! photo.isEmpty()) {
                    String originalFilename = photo.getOriginalFilename();
                    photo.transferTo(new File("D:\\桌面\\文件上传\\" + originalFilename));
                }
            }
        }*/


        //演示如何把文件保存到动态创建的目录中
        //要将图片保存到 D:\Study\Code\IDEA\hspedu_springboot\springboot-usersys\target\classes\static\images\\upload\ 这个目录下
        //要动态的获取这一节，因为这一节是动态变化的，每个人都可能不同，D:\Study\Code\IDEA\hspedu_springboot\springboot-usersys\target\classes
        //得到运行时的类路径
        String path = ResourceUtils.getURL("classpath:").getPath();
        log.info("path={}", path); //path=/D:/Study/Code/IDEA/hspedu_springboot/springboot-usersys/target/classes/
        //创建目录
        File file = new File(path + "static/images/upload/");
        if (!file.exists()) { //如果目录不存在就创建
            file.mkdirs();
        }
        if (! header.isEmpty()) {
            //获取文件名
            String originalFilename = header.getOriginalFilename();
            //这里要想办法获取这个绝对路径 D:\Study\Code\IDEA\hspedu_springboot\springboot-usersys\target\classes\static\images\\upload\
            log.info("保存文件的绝对路径={}", file.getAbsolutePath()); //保存文件的绝对路径=D:\Study\Code\IDEA\hspedu_springboot\springboot-usersys\target\classes\static\images\\upload
            header.transferTo(new File(file.getAbsolutePath() + "/" + originalFilename));
        }

        //处理宠物的图片
        if (photos.length > 0) {
            for (MultipartFile photo : photos) {
                if (! photo.isEmpty()) {
                    String originalFilename = photo.getOriginalFilename();
                    photo.transferTo(new File(file.getAbsolutePath() + "/" + originalFilename));
                }
            }
        }
        return "注册用户成功/文件上传成功";
    }
}
```

注意过滤器要添加不拦截的路径

WebConfig.java

```java
@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        //注册自定义拦截器 LoginInterceptor
        registry.addInterceptor(new LoginInterceptor()).addPathPatterns("/**").excludePathPatterns("/", "/login", "/images/**", "/upload.html", "/upload");//拦截所有的请求，但是排除 "/", "/login", "/images/**"
    }
}
```

在配置文件中可以修改能最大上传文件大小

resources/application.yml

```yaml
spring:
  servlet:
    multipart:
      max-file-size: 10MB
      max-request-size: 50MB
```

#### 16.1.2 作业

（1）解决文件覆盖问题，如果上传的文件与已有的文件文件名相同，会出现覆盖问题

（2）解决文件分目录存放问题，如果将文件都上传到一个目录下，当上传文件很多时，会造成访问文件速度变慢，因此可以将文件上传到不同目录，比如同一天上传的文件，统一放到一个名为 年/ 月/ 日 的文件夹中

UploadController.java

```java
@Controller
@Slf4j
public class UploadController {
    //处理转发到用户注册-可以完成文件上传页面
    @GetMapping("/upload.html")
    public String uploadPage() {
        return "upload"; //视图解析，转发到 templates/upload.html
    }

    //处理用户的注册请求-包括处理文件上传
    @PostMapping("/upload")
    @ResponseBody
    public String upload(@RequestParam("name") String name,
                         @RequestParam("email") String email,
                         @RequestParam("age") Integer age,
                         @RequestParam("job") String job,
                         @RequestParam("header")MultipartFile header,
                         @RequestParam("photos")MultipartFile[] photos) throws IOException {
        //输出获取到的信息
        log.info("上传的信息 name={} email={} age={} job={} header={} photos={}",
                name, email, age, job, header.getSize(), photos.length);
        //如果信息都成功得到，我们就将文件保存到指定的目录,比如 D:\桌面\文件上传
        //(1) 先将文件保存到指定的目录，比如 D:\桌面\文件上传
        //(2) 后面再演示如何把文件保存到动态创建的目录中
        /*if (! header.isEmpty()) {
            //获取文件名
            String originalFilename = header.getOriginalFilename();
            header.transferTo(new File("D:\\桌面\\文件上传\\" + originalFilename));

        }*/

        //处理宠物的图片
        /*if (photos.length > 0) {
            for (MultipartFile photo : photos) {
                if (! photo.isEmpty()) {
                    String originalFilename = photo.getOriginalFilename();
                    photo.transferTo(new File("D:\\桌面\\文件上传\\" + originalFilename));
                }
            }
        }*/


        //演示如何把文件保存到动态创建的目录中
        //要将图片保存到 D:\Study\Code\IDEA\hspedu_springboot\springboot-usersys\target\classes\static\images\\upload\ 这个目录下
        //要动态的获取这一节，因为这一节是动态变化的，每个人都可能不同，D:\Study\Code\IDEA\hspedu_springboot\springboot-usersys\target\classes
        //得到运行时的类路径
        String path = ResourceUtils.getURL("classpath:").getPath();
        log.info("path={}", path); //path=/D:/Study/Code/IDEA/hspedu_springboot/springboot-usersys/target/classes/
        //动态创建目录
        File file = new File(path + WebUtils.getUploadFileDirectory());
        if (!file.exists()) { //如果目录不存在就创建
            file.mkdirs();
        }
        if (! header.isEmpty()) {
            //获取文件名
            String originalFilename = header.getOriginalFilename();
            String fileName = UUID.randomUUID().toString() + "_" + System.currentTimeMillis() + "_" + name;
            //这里要想办法获取这个绝对路径 D:\Study\Code\IDEA\hspedu_springboot\springboot-usersys\target\classes\static\images\\upload\
            log.info("保存文件的绝对路径={}", file.getAbsolutePath()); //保存文件的绝对路径=D:\Study\Code\IDEA\hspedu_springboot\springboot-usersys\target\classes\static\images\\upload
            header.transferTo(new File(file.getAbsolutePath() + "/" + fileName));
        }

        //处理宠物的图片
        if (photos.length > 0) {
            for (MultipartFile photo : photos) {
                if (! photo.isEmpty()) {
                    String originalFilename = photo.getOriginalFilename();
                    String fileName = UUID.randomUUID().toString() + "_" + System.currentTimeMillis() + "_" + name;
                    photo.transferTo(new File(file.getAbsolutePath() + "/" + fileName));
                }
            }
        }
        return "注册用户成功/文件上传成功";
    }
}
```

WebUtils.java

```java
public class WebUtils {
    //定义一个文件上传的路径
    public static String  UPLOAD_IMG_DIRECTORY = "static/images/upload/";

    //编写方法，生成一个目录 - 根据当前日期 年/月/日
    public static String getUploadFileDirectory() {
        return UPLOAD_IMG_DIRECTORY + new SimpleDateFormat("yyyy/MM/dd").format(new Date());
    }
}
```

## 第 17 章 异常处理

### 17.1 基本介绍

（1）默认情况下，SpringBoot 提供 /error 处理所有错误的映射，也就是说当出现错误时，SpringBoot 底层会请求转发到 /error 这个映射

（2）如果使用浏览器访问不存在的接口（路径映射），会响应一个 "Whitelabel" 的错误视图，以 HTML 格式呈现给用户

（3）SpringBoot 底层默认由 DefaultErrorViewResolver 处理错误

### 17.2 拦截器和过滤器的区别

（1）使用范围不同

1）过滤器实现的是 javax.servlet.Filter 接口，而这个接口是在 Servlet 规范中定义的，也就是说过滤器 Filter 的使用要依赖于 Tomcat 等容器，Filter 只能在 Web 程序中使用

2）拦截器（Interceptor）是一个 Spring 组件，并由 Spring 容器管理，并不依赖 Tomcat 等容器，是可以单独使用的，不仅能应用在 Web 程序中，也可以用于 Application 等程序中

（2）过滤器和拦截器的触发时机也不同

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222126532.png)

1）过滤器 Filter 是在请求进入容器后但在进入 Servlet 之前进行预处理，请求结束是在 Servlet 处理完以后

2）拦截器 Interceptor 是在请求进入 Servlet 后，在进入 Controller 之前进行预处理的，Controller 中渲染了对应的视图之后请求结束

（3）过滤器不会处理请求转发，拦截器会处理请求转发

### 17.3 自定义异常页面

需求：自定义 404.html、500.html、4xx.html、5xx.html，当发生相应的错误时，显示自定义的页面信息，如果发生了 404 错误，优先匹配 404.html，如果没有，则匹配 4xx.html，再没有则按默认方式显示错误，500.html 和 5xx.html 是一样的逻辑

如果是使用 Thymeleaf 模版，那么错误提示页面需要放在 templates/error 目录下

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222126355.png)

404.html，其它页面大同小异

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>404页面</title>
</head>
<body>
<h1>404错误</h1>
状态码: <h1 th:text="${status}"></h1><br>
错误信息: <h1 th:text="${error}"></h1>
</body>
</html>
```

### 17.4 全局异常

#### 17.4.1 说明

（1）使用 @ControllerAdvice + @ExceptionHandler 处理全局异常

（2）底层是 ExceptionHandlerExceptionResolver 支持的

#### 17.4.2 应用实例

需求：演示全局异常使用，当发生 ArithmeticException、NullPointerException 时，不使用默认异常机制匹配的 xxx.html，而是显示全局异常机制显示指定的错误页面

GlobalExceptionHandler.java

```java
//@ControllerAdvice:使用它可以标识一个全局异常处理器，会注入到 Spring 容器
@Slf4j
@ControllerAdvice
public class GlobalExceptionHandler {
    //编写方法处理指定的异常
    //这里要处理的异常，由程序员来指定
    //这里比如要处理算数异常和空指针异常
    //Exception e : 表示异常发生后传递的异常对象
    //Model model 可以将我们的异常信息，放入 model，并传递给显示页面
    @ExceptionHandler({ArithmeticException.class, NullPointerException.class})
    public String handleAritException(Exception e, Model model) {
        log.info("异常信息 = {}", e.getMessage());
        //这里可以将发生的异常信息放入到 model，可以在错误页面取出显示
        model.addAttribute("msg", e.getMessage());
        return "/error/global";
    }
}
```

global.html

```html
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8">
    <title>全局异常</title>
</head>
<body>
<div style="text-align: center">
  <h1>全局异常发生了</h1><br>
  异常信息: <h1 th:text="${msg}"></h1><br>
  <a href="#" th:href="@{/}">返回主页面</a>
</div>
</body>
</html>
```

因为全局异常处理优先级大于默认异常处理机制，所以会进入到 global.html 而不是 500.html

### 17.5 自定义异常

#### 17.5.1 说明

（1）如果 SpringBoot 提供的异常不能满足开发需求，程序员也可以自定义异常

（2）@ResponseStatus + 自定义异常

（3）底层是 ResponseStatusExceptionResolver，底层调用 response.sendError(statusCode, resolvedReason);

（4）当抛出自定义异常后，仍然会根据状态码去匹配使用 xxx.html 显示，当然也可以将自定义异常，放在全局异常处理器去处理

#### 17.5.2 需求说明

（1）需求：自定义一个异常 AccessException，当用户访问某个无权访问的路径时，抛出该异常，显示自定义异常状态码

```java
//value = HttpStatus.FORBIDDEN 表示发生 AccessException 异常，我们通过 http 协议返回的状态码是 403
@ResponseStatus(value = HttpStatus.FORBIDDEN)
public class AccessException extends RuntimeException {
    //提供一个构造器，可以指定信息
    public AccessException(String message) {
        super(message);
    }

    //显示的定义一下无参构造器

    public AccessException() {
    }
}
```

#### 17.5.3 注意事项和细节

（1）如果把自定义异常类型放在全局异常处理器那么仍然走全局异常处理机制

## 第 18 章 注入 Servlet、Filter、Listener

### 18.1 基本介绍

（1）考虑到实际开发业务非常复杂和兼容，SpringBoot 支持将 Servlet、Filter、Listener 注入 Spring 容器，成为 Spring Bean

（2）也就是说 SpringBoot 开放了和原生 Web 组件（Servlet、Filter、Listener）的兼容

### 18.2 使用注解方式注入

需求：演示通过注解的方式注入 Servlet、Filter、Listener

（1）通过注解注入 Servlet

```java
//(1) 通过继承 HttpServlet 来开发原生的 Servlet
//(2) @WebServlet 注解将 Servlet_ 对象注入到容器
//(3) 注入的原生的 Servlet 不会被 SpringBoot 的拦截器拦截
//(4) 对于开发的原生的 Servlet，需要在主程序使用 @ServletComponentScan 指定要扫描的原生 Servlet 的包才会注入到 Spring 容器中

@WebServlet(urlPatterns = {"/servlet01", "/servlet02"})
public class Servlet_ extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.getWriter().write("hello,Servlet_!");
    }
}
```

```java
@ServletComponentScan(basePackages = "com.hspedu.springboot")
@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        ConfigurableApplicationContext ioc = SpringApplication.run(Application.class, args);
    }
}
```

（2）通过注解注入 Filter

过滤器配置的 urlPattern 也会经过 SpringBoot 拦截器（根据拦截器的规则）

在 Servlet 表示匹配全部的是 /*，而在 SpringBoot 是 /**

```java
//(1) @WebFilter 表示 Filter_ 是一个过滤器，并注入容器
//(2) urlPatterns = {"/css/*", "/images/*"} 表示请求 "/css/*", "/images/*" 下的资源会走过滤器
@Slf4j
@WebFilter(urlPatterns = {"/css/*", "/images/*"})
public class Filter_ implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        log.info("--Filter_init--");
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        log.info("--Filter_doFilter--");
        //为了方便观察过滤器处理的资源，我们输出一个 uri
        HttpServletRequest httpServletRequest = (HttpServletRequest) servletRequest;
        log.info("过滤器处理的 uri = {}", httpServletRequest.getRequestURI());
        //直接放行
        filterChain.doFilter(servletRequest, servletResponse);
    }

    @Override
    public void destroy() {
        log.info("--Filter_destroy--");
    }
}
```

（3）通过注解注入 Listener

```java
@Slf4j
@WebListener
public class Listener_ implements ServletContextListener {
    @Override
    public void contextInitialized(ServletContextEvent sce) {
        //这里可以加入项目初始化的相关的业务代码
        log.info("Listener_ contextInitialized 项目初始化成功");
    }

    @Override
    public void contextDestroyed(ServletContextEvent sce) {
        //这里可以加入相应的代码
        log.info("Listener_ contextDestroyed 项目销毁成功");
    }
}
```

### 18.3 使用 RegistrationBean 方式注入

需求：演示使用 RegistrationBean 注入 Servlet、Filter、Listener

```java
@Configuration(proxyBeanMethods = true)
public class RegisterConfig_ {
    //以使用 RegistrationBean 的方式注入
    //注入 Servlet
    @Bean
    public ServletRegistrationBean servlet_() {
        //创建原生的 Servlet 对象
        Servlet_ servlet_ = new Servlet_();
        //把 servlet_ 对象关联到 ServletRegistrationBean 对象中
        return new ServletRegistrationBean(servlet_, "/servlet01", "/servlet02");
    }

    //注入 filter
    @Bean
    public FilterRegistrationBean filter_() {
        Filter_ filter_ = new Filter_();
        FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean(filter_);
        //设置 filter 的 url-pattern
        filterRegistrationBean.setUrlPatterns(Arrays.asList("/css/*", "/images/*"));
        return filterRegistrationBean;
    }

    //注入 Listener
    @Bean
    public ServletListenerRegistrationBean listener_() {
        //创建原生的 Listener
        Listener_ listener_ = new Listener_();
        return new ServletListenerRegistrationBean(listener_);
    }
}
```

### 18.4 注意事项和细节

#### 18.4.1 请求 Servlet 时，为什么不会到达拦截器

（1）请求 Servlet 时，不会到达 DispatherServlet，因此也不会到达拦截器

（2）原因分析：注入的 Servlet 会存在 Spring 容器，DispatherServlet 也存在 Spring 容器

![](https://figure-bed-typora-zhishu.oss-cn-beijing.aliyuncs.com/202503222126447.png)

（3）Tomcat 在对 Servlet url 的匹配的原则，多个 Servlet 都能处理到同一层路径，精确优先原则/最长前缀匹配原则

## 第 19 章 内置 Tomcat 配置和切换

### 19.1 基本介绍

（1）SpringBoot 支持的 webServer：Tomcat，Jetty，Undertow

（2）SpringBoot 应用启动是 Web 应用时，web 场景包导入 Tomcat

（3）支持对 Tomcat（也可以是 Jetty、Undertow）的配置和切换

### 19.2 内置 Tomcat 的配置

#### 19.2.1 通过 application.yml 完成配置

配置和 ServerProperties.java 关联，通过查看源码得知有哪些属性配置

```yaml
server:
  port: 9999 #配置端口
  tomcat: #对 Tomcat 进行配置
    threads:
      max: 10 #最大的工作线程，默认是 200
      min-spare: 5 #最小的工作线程，默认是 10
    accept-count: 200 #Tomcat 启动的线程达到最大值后接受排队的请求个数，默认 100
    max-connections: 2000 #最大连接数，并发数
    connection-timeout: 10000 #建立连接的超时时间，单位是 ms
```

#### 19.2.2 通过类来配置 Tomcat

（1）通过类来配置 Tomcat（说明：配置文件可配置的更全）

```java
//通过类来配置 Tomcat
@Component
public class CustomizationBean implements WebServerFactoryCustomizer<ConfigurableServletWebServerFactory> {

    @Override
    public void customize(ConfigurableServletWebServerFactory server) {
        server.setPort(10000); //设置了 server 的端口为 10000
    }
}
```

### 19.3 切换 WebServer，演示如何切换成 Undertow

```xml
<dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
            <!--排除 tomcat starter-->
            <exclusions>
                <exclusion>
                    <groupId>org.springframework.boot</groupId>
                    <artifactId>spring-boot-starter-tomcat</artifactId>
                </exclusion>
            </exclusions>
        </dependency>

        <!--引入 Undertow-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-undertow</artifactId>
        </dependency>
```

## 第 20 章 数据库操作

### 20.1 JDBC + HikariDataSource

#### 20.1.1 需求

需求：演示 SpringBoot 如何通过 jdbc + HikariDataSource 完成对 MySQL 的操作

说明：HikariDataSource 是目前市面上非常优秀的数据源，是 SpringBoot2 的默认数据源

#### 20.1.2 代码实现

（1）建库建表

```sql
-- 创建 furns_ssm
drop database if exists spring_boot;
create database spring_boot;
use spring_boot;

-- 创建家居表
create table furn(
    id int(11) primary key auto_increment, ## id
    name varchar(64) not null , ## 家居名
    maker varchar(64) not null , ## 厂商
    price decimal(11,2) not null , ## 价格
    sales int(11) not null , ## 销量
    stock int(11) not null , ## 库存
    img_path varchar(256) not null  ## 照片路径
);

-- 初始化家居数据
insert into furn(id, name, maker, price, sales, stock, img_path) values (null, '北欧风格小桌子', '熊猫家居', 180, 666, 7, '');
insert into furn(id, name, maker, price, sales, stock, img_path) values (null, '简约风格小椅子', '熊猫家居', 180, 666, 7, '');
insert into furn(id, name, maker, price, sales, stock, img_path) values (null, '典雅风格小台灯', '蚂蚁家居', 180, 666, 7, '');
insert into furn(id, name, maker, price, sales, stock, img_path) values (null, '温馨风格盆景架', '蚂蚁家居', 180, 666, 7, '');

select * from furn;
```

（2）要进行数据库开发，要在 pom.xml 引入 data-jdbc starter

（3）SpringBoot 不知道项目要操作 MySQL 还是 Oracle，需要在 pom.xml 指定导入数据库驱动，并指定对应的版本

```xml
<!--进行数据库开发，引入 data-jdbc starter-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jdbc</artifactId>
        </dependency>
        <!--引入 MySQL 的驱动-->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
        </dependency>
```

（4）在 application.yml 配置操作数据源的信息

```yaml
  datasource: # 配置数据源
    url: jdbc:mysql://localhost:3306/spring_boot
    username: root
    password: 123456
    driver-class-name: com.mysql.cj.jdbc.Driver
```

（5）创建测试类

pom.xml

```xml
<!--如果要开发 SpringBoot 测试类，需要引入 test starter-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
        </dependency>
```

ApplicationTests.java

```java
//这里演示如何在 SpringBoot 中开发测试类
@SpringBootTest
public class ApplicationTests {
    //使用测试 JdbcTemplate
    @Resource
    private JdbcTemplate jdbcTemplate;

    @Test
    public void contextLoads() {
        BeanPropertyRowMapper<Furn> rowMapper = new BeanPropertyRowMapper<>(Furn.class);
        List<Furn> furns = jdbcTemplate.query("select * from furn", rowMapper);
        for (Furn furn : furns) {
            System.out.println(furn);
        }

        //看看底层使用的是什么数据源类型
        System.out.println(jdbcTemplate.getDataSource().getClass());
    }
}
```

### 20.2 整合 Druid 到 SpringBoot

#### 20.2.1 基本介绍

（1）HiKariDataSource 数据源是目前市面上非常优秀的数据源，是 SpringBoot2 默认的数据源

（2）Druid 数据源性能优秀，除了提供性能卓越的连接池功能外，还集成了 SQL 监控，黑名单拦截等功能，强大的监控特性，通过 Druid 提供的监控功能，可以清楚的知道连接池和 SQL 的工作情况，所以根据项目需要，我们也要掌握 Druid 和 SpringBoot 的整合

（3）整合 Druid 到 SpringBoot 的方式：1）自定义方式，2）引入 starter 方式

#### 20.2.2 Druid 基本介绍

需求：将 SpringBoot 的数据源切换成 Druid

（1）修改 pom.xml，引入 Druid 的依赖

```xml
 <!--引入 druid 依赖-->
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid</artifactId>
            <version>1.1.10</version>
        </dependency>
```

（2）创建配置类

```java
//配置类
@Configuration
public class DruidDataSourceConfig {
    //编写方法，注入 DruidDataSource
    //配置了 @ConfigurationProperties("spring.datasource") 就可以读取到 application.yml 的配置
    @ConfigurationProperties("spring.datasource")
    @Bean
    public DataSource dataSource() {

        DruidDataSource druidDataSource = new DruidDataSource();
        return druidDataSource;
    }
}
```

#### 20.2.3 配置 Druid 监控功能

需求：配置 Druid 的监控功能：SQL 监控、Web 关联监控、SQL 防火墙、Session 监控

（1）修改 DruidDataSourceConfig.java 配置文件，增加 Druid 监控功能

```java
//配置类
@Configuration
public class DruidDataSourceConfig {
    //编写方法，注入 DruidDataSource
    //配置了 @ConfigurationProperties("spring.datasource") 就可以读取到 application.yml 的配置
    @ConfigurationProperties("spring.datasource")
    @Bean
    public DataSource dataSource() throws SQLException {

        DruidDataSource druidDataSource = new DruidDataSource();

        //加入监控功能,并加入了 sql 防火墙监控
        druidDataSource.setFilters("stat, wall");

        return druidDataSource;
    }

    //配置 Druid 的监控页功能，因为官网是通过从 web.xml 配置 Servlet 实现的，但是我们没有 web.xml，所以我们可以通过前面学的通过 RegistrationBean 的方式配置需要的 Servlet
    @Bean
    public ServletRegistrationBean statViewServlet() {
        //创建 StatViewServlet
        StatViewServlet statViewServlet = new StatViewServlet();
        ServletRegistrationBean<StatViewServlet> registrationBean = new ServletRegistrationBean<>(statViewServlet, "/druid/*");

        //设置 init-parameter,设置用户名和密码
        registrationBean.addInitParameter("loginUsername", "root");
        registrationBean.addInitParameter("loginPassword", "123456");

        return registrationBean;
    }

    //配置 WebStatFilter，用于采集 web-jdbc 关联的监控数据
    @Bean
    public FilterRegistrationBean webStatFilter() {
        //创建 WebStatFilter
        WebStatFilter webStatFilter = new WebStatFilter();
        FilterRegistrationBean<WebStatFilter> filterRegistrationBean = new FilterRegistrationBean<>(webStatFilter);

        //默认对所有的 url 请求进行监控
        filterRegistrationBean.setUrlPatterns(Arrays.asList("/*"));
        //排除指定的 url
        filterRegistrationBean.addInitParameter("exclusions", "*.js,*.gif,*.jpg,*.png,*.css,*.ico,/druid/*");
        return filterRegistrationBean;
    }
}
```

（2）测试

```java
@Controller
public class DruidSqlController {
    @Resource
    private JdbcTemplate jdbcTemplate;

    @ResponseBody
    @GetMapping("/sql")
    public List<Furn> crudDB() {
        BeanPropertyRowMapper<Furn> rowMapper = new BeanPropertyRowMapper<>(Furn.class);
        List<Furn> furns = jdbcTemplate.query("select * from furn", rowMapper);
        for (Furn furn : furns) {
            System.out.println(furn);
        }

        return furns;
    }
}
```

#### 20.2.4 第二种方式整合 Druid 到 SpringBoot

（1）前面我们使用的是自己引入 Druid + 配置类 的方式整合 Druid 和监控

（2）Druid Spring Boot Starter 可以让程序员在 SpringBoot 项目中更加轻松集成 Druid 和监控

需求：演示使用 Druid Spring Boot Starter 方式完成 Druid 集成和监控

（1）修改 pom.xml 注销 Druid 的依赖

（2）注销 DruidDataSourceConfig.java 配置文件

（3）引入 Druid Starter

```xml
<!--引入 Druid Starter-->
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid-spring-boot-starter</artifactId>
            <version>1.1.17</version>
        </dependency>
```

（4）在 application.yml 配置

```yaml
spring:
  servlet:
    multipart:
      max-file-size: 10MB
      max-request-size: 50MB
  datasource: # 配置数据源
    url: jdbc:mysql://localhost:3306/spring_boot
    username: root
    password: 123456
    driver-class-name: com.mysql.cj.jdbc.Driver
    # 配置 Druid 和监控功能
    druid:
      stat-view-servlet:
        enabled: true
        login-username: root
        login-password: 123456
        reset-enable: false
      # 配置 web 监控
      web-stat-filter:
        enabled: true
        url-pattern: /*
        exclusions: "*.js,*.gif,*.jpg,*.png,*.css,*.ico,/druid/*"
      filter:
        stat: # 配置 sql 监控
          slow-sql-millis: 1000
          log-slow-sql: true
          enabled: true
        wall: # 配置 sql 防火墙
          enabled: true
          config:
            drop-table-allow: false
            select-all-column-allow: false
```

### 20.3 作业

（1）把前面学的异常处理、注入 Servlet Filter Listener、Tomcat 切换、数据库操作的相关代码自己写一遍

## 第 21 章 SpringBoot 整合 MyBatis

### 21.1 需求说明

（1）将 SpringBoot 和 MyBatis 整合

（2）查询出一条数据

SQL

```sql
create database springboot_mybatis;
use springboot_mybatis;
create table monster(
    id int not null auto_increment primary key ,
    age int not null ,
    birthday date default null,
    email varchar(255) default null,
    gender char(1) default null,
    name varchar(255) default null,
    salary double not null
);

insert into monster values (null, 20, '2000-11-11', 'nmw@sohu.com', '男', '牛魔王', 2000);
insert into monster values (null, 10, '2011-11-11', 'bgj@sohu.com', '女', '白骨精', 2000);

select * from monster where id = 1;
```

pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.hspedu</groupId>
    <artifactId>springboot-mybatis</artifactId>
    <version>1.0-SNAPSHOT</version>

    <!--导入 SpringBoot 父工程-规定写法-->
    <parent>
        <artifactId>spring-boot-starter-parent</artifactId>
        <groupId>org.springframework.boot</groupId>
        <version>2.5.3</version>
    </parent>

    <!--引入相关的依赖-->
    <dependencies>
        <!--引入 web starter-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <!--引入 MyBatis Starter-->
        <dependency>
            <groupId>org.mybatis.spring.boot</groupId>
            <artifactId>mybatis-spring-boot-starter</artifactId>
            <version>2.2.2</version>
        </dependency>

        <!--引入 MySQL 驱动-->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
        </dependency>

        <!--引入配置处理器-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-configuration-processor</artifactId>
        </dependency>

        <!--引入 Lombok-->
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
        </dependency>

        <!--引入 Test Starter-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
        </dependency>

        <!--引入 Druid 依赖-->
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid</artifactId>
            <version>1.1.17</version>
        </dependency>
    </dependencies>

    <properties>
        <maven.compiler.source>8</maven.compiler.source>
        <maven.compiler.target>8</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>

</project>
```

改成 Druid 连接池 DruidDataSourceConfig.java

```java
//配置类
@Configuration
public class DruidDataSourceConfig {
    @ConfigurationProperties("spring.datasource")
    @Bean
    public DataSource dataSource() throws SQLException {
        DruidDataSource druidDataSource = new DruidDataSource();
        return druidDataSource;
    }
}
```

application.yml

```yaml
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://localhost:3306/springboot_mybatis
    username: root
    password: 123456

mybatis:
  # 指定要扫描的 Xxxmapper.xml 文件
  mapper-locations: classpath:mapper/*.xml
  # 通过 config-location: 可以指定 mybatis-config.xml 的位置，这样就可以按传统的方式来配置 mybatis
  config-location: classpath:mybatis-config.xml
  # 我们也可以直接在 application.yml 进行配置
  # 比如配置原来的 typeAliases
  #type-aliases-package: com.hspedu.springboot.mybatis.bean
  # 比如配置输出底层的原生的 SQL
  #configuration:
    #log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
```

如果在配置 mybatis 时选择使用配置文件的方式就有这个 mybatis-config.xml

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>

    <!--配置 MyBatis 自带的日志输出-->
    <settings>
        <setting name="logImpl" value="STDOUT_LOGGING"/>
        <!--全局性的开启或关闭所有映射器配置文件中已经配置的任何缓存
            默认是 true
        -->
        <setting name="cacheEnabled" value="true"/>
    </settings>

    <!--
        (1) 如果一个包下有很多的类，我们可以直接引入包
        (2) 这样该包下的所有类名就可以直接使用
    -->
    <typeAliases>
        <package name="com.hspedu.springboot.mybatis.bean"/>
    </typeAliases>

</configuration>
```

JavaBean

```java
@Data
public class Monster {
    private Integer id;
    private Integer age;
    private Date birthday;
    private String email;
    private String name;
    private String gender;
    private Double salary;
}
```

接口 MonsterMapper.java

```java
@Mapper
public interface MonsterMapper {
    //根据 id 返回 Monster 对象
    public Monster getMonsterById(Integer id);
}
```

实现接口 MonsterMapper.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.hspedu.springboot.mybatis.mapper.MonsterMapper">
    <!--配置 getMonsterById-->
    <select id="getMonsterById" resultType="Monster" >
        select * from monster where id=#{id}
    </select>
</mapper>
```

测试类

```java
@SpringBootTest
public class ApplicationTest {
    @Resource
    private JdbcTemplate jdbcTemplate;

    @Resource
    private MonsterMapper monsterMapper;

    @Test
    public void t1() {
        //看看当前数据源是什么
        System.out.println(jdbcTemplate.getDataSource().getClass());
    }

    //测试 MonsterMapper 接口
    @Test
    public void getMonsterById() {
        Monster monster = monsterMapper.getMonsterById(1);
        System.out.println(monster);
    }
}
```

主程序

```java
@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

### 21.2 综合案例

加入 Service 层、Controller 层

Service 层的接口

```java
public interface MonsterService {
    //根据 id 返回 Monster 对象
    public Monster getMonsterById(Integer id);
}
```

Service 层的实现类

```java
@Service
public class MonsterServiceImpl implements MonsterService {

    //装配 MonsterMapper
    @Resource
    private MonsterMapper monsterMapper;

    @Override
    public Monster getMonsterById(Integer id) {
        return monsterMapper.getMonsterById(id);
    }
}
```

Controller 层

```java
@Controller
public class MonsterController {
    //装配 MonsterService
    @Resource
    private MonsterService monsterService;

    @ResponseBody
    @GetMapping("/monster")
    public Monster getMonsterById(@RequestParam(value = "id") Integer id) {
        return monsterService.getMonsterById(id);
    }
}
```

### 21.3 注意事项和细节说明

数据库的时间和浏览器的时间不一致

通过注解解决时区问题

```java
@Data
public class Monster {
    private Integer id;
    private Integer age;
    //这里通过注解来解决时区问题
    //"GMT+8" 就是格林尼治标准时间 + 8 小时
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date birthday;
    private String email;
    private String name;
    private String gender;
    private Double salary;
}
```

## 第 22 章 SpringBoot 整合 MyBatis-Plus

### 22.1 基本介绍

（1）MyBatis-Plus（简称 MP）是一个 MyBatis 的增强工具，在 MyBatis 的基础上只做增强不做改变，为简化开发、提高效率而生

（2）强大的 CRUD 操作：内置通用 Mapper、通用 Service，通过少量配置即可实现单表大部分 CRUD 操作，更有强大的条件构造器，满足各类使用需求

### 22.2 整合 MyBatis-Plus 实例

pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.hspedu</groupId>
    <artifactId>springboot-mybatisplus</artifactId>
    <version>1.0-SNAPSHOT</version>

    <!--导入 SpringBoot 父工程-规定写法-->
    <parent>
        <artifactId>spring-boot-starter-parent</artifactId>
        <groupId>org.springframework.boot</groupId>
        <version>2.5.3</version>
    </parent>

    <dependencies>
        <!--引入 web starter-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <!--引入 MySQL 驱动-->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
        </dependency>

        <!--引入配置处理器-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-configuration-processor</artifactId>
        </dependency>

        <!--引入 Lombok-->
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
        </dependency>

        <!--引入 Test Starter-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
        </dependency>

        <!--引入 Druid 依赖-->
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid</artifactId>
            <version>1.1.17</version>
        </dependency>

        <dependency>
            <groupId>com.baomidou</groupId>
            <artifactId>mybatis-plus-boot-starter</artifactId>
            <version>3.4.3</version>
        </dependency>
    </dependencies>

    <properties>
        <maven.compiler.source>8</maven.compiler.source>
        <maven.compiler.target>8</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>

</project>
```

application.yml

```yaml
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://localhost:3306/springboot_mybatisplus
    username: root
    password: 123456

# 进行 MyBatis-Plus 的配置，配置和 MyBatis 差不多
mybatis-plus:
  configuration:
    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
```

config/DruidDataSourceConfig.java 用于改变连接池

```java
//配置类
@Configuration
public class DruidDataSourceConfig {
    @ConfigurationProperties("spring.datasource")
    @Bean
    public DataSource dataSource() throws SQLException {
        DruidDataSource druidDataSource = new DruidDataSource();
        return druidDataSource;
    }
}
```

JavaBean

```java
//如果实体类 Monster 和表名 monster 是对应的，就可以映射上，则 @TableName 可以省略
//如果实体类 Monster 和表名 monster 不对应，则需要使用 @TableName 指定哪个数据表与该实体类对应
@TableName(value = "monster")
@Data
public class Monster {
    private Integer id;
    private Integer age;
    //这里通过注解来解决时区问题
    //"GMT+8" 就是格林尼治标准时间 + 8 小时
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date birthday;
    private String email;
    private String name;
    private String gender;
    private Double salary;
}
```

mapper 层

接口 MonsterMapper.java

```java
//BaseMapper 中已经默认提供了很多 CRUD 的方法，可以直接使用
//如果 BaseMapper 提供的方法不能满足业务需求，我们可以再开发新的方法，并在 MonsterMapper.xml 进行实现
//@Mapper
public interface MonsterMapper extends BaseMapper<Monster> {

}
```

service 层

接口 MonsterService.java

```java
//传统方式是在接口中声明方法，然后在实现类中进行实现
//在 MyBatis-Plus 中，我们可以继承父接口 IService，这个接口声明了很多方法，比如 CRUD
//如果默认提供的方法不能满足需求，我们可以再声明需要的方法，然后在实现类中进行实现即可
public interface MonsterService extends IService<Monster> {

}
```

实现类 MonsterServiceImpl.java

```java
//传统方式在实现类中直接进行 implements MonsterService
//但在 MyBatis-Plus 中，我们开发 Service 实现类，需要先继承 ServiceImpl，再实现 MonsterService
//因为 ServiceImpl 类实现了 IService 接口
@Service
public class MonsterServiceImpl extends ServiceImpl<MonsterMapper, Monster> implements MonsterService {
}
```

controller 层

MonsterController

```java
@Controller
public class MonsterController {
    @Resource
    private MonsterService monsterService;

    //方法，根据 id 返回对应的对象
    @GetMapping("/monster")
    @ResponseBody
    public Monster getMonsterById(@RequestParam(value = "id") Integer id) {
        return monsterService.getById(id);
    }
}
```

测试类

```java
@SpringBootTest
public class ApplicationTest {

    @Resource
    private MonsterMapper monsterMapper;

    @Resource
    private MonsterService monsterService;

    @Test
    public void testMonsterMapper() {
        Monster monster = monsterMapper.selectById(1);
        System.out.println(monster);
    }

    @Test
    public void testMonsterService() {
        Monster monster = monsterService.getById(2);
        System.out.println(monster);
    }
}
```

Application.java 主程序

```java
//如果 mapper 包中有很多 XxxMapper ，那么每个 XxxMapper 都要给个注解 @Mapper,太麻烦，可以使用 @MapperScan 注解直接全部扫描
@MapperScan(basePackages = {"com.hspedu.springboot.mybatisplus.mapper"})
@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

### 22.3 注意事项和细节

（1）@TableName 的作用：

如果这个类名 Monster 和表名 monster 一致，可以映射上，则 @TableName 可以省略

如果这个类名 Monster 和表名不一致，不能映射上，则可以通过 @TableName 指定



